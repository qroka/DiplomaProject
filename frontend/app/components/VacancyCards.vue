<template>
  <div class="flex-1 pb-6">
    <UModal
      v-model:open="isApplicationFormOpen"
      title="Отклик на вакансию"
    >
      <template #body>
        <ApplicationForm
          :vacancy="selectedVacancy"
          @submit="handleFormSubmit"
          @cancel="closeApplicationForm"
        />
      </template>
    </UModal>

    <div
      aria-live="polite"
      aria-atomic="true"
      class="sr-only"
    >
      {{ liveMessage }}
    </div>

    <DsSection :spacing="spacing">
      <DsSectionHeading
        v-if="title"
        :title="title"
        :description="subtitle"
        :align="headingAlign"
      />

      <div
        v-if="pending"
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <DsSkeletonCard
          v-for="i in skeletonCount"
          :key="i"
        />
      </div>

      <DsEmptyState
        v-else-if="!vacancies.length"
        icon="i-lucide-search-x"
        title="Вакансии не найдены"
        description="Попробуйте изменить параметры поиска или сбросить фильтры"
      />

      <div
        v-else
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <VacancyCard
          v-for="vacancy in vacancies"
          :key="vacancy.id ?? vacancy.title"
          :vacancy="vacancy"
          size="lg"
          @apply="openApplicationForm"
        />
      </div>
    </DsSection>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ApplicationForm from './ApplicationForm.vue'
import VacancyCard from './VacancyCard.vue'

const config = useRuntimeConfig()
const isApplicationFormOpen = ref(false)
const selectedVacancy = ref(null)
const isSubmitting = ref(false)
const submitStatus = ref(null)
const liveMessage = ref('')
const toast = useToast()

const openApplicationForm = (vacancy) => {
  submitStatus.value = null
  selectedVacancy.value = vacancy
  isApplicationFormOpen.value = true
}

const closeApplicationForm = () => {
  isApplicationFormOpen.value = false
  selectedVacancy.value = null
  submitStatus.value = null
}

const handleFormSubmit = async (formData) => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    const data = new FormData()
    data.append('vacancy_title', selectedVacancy.value?.title || '')

    for (const [key, value] of Object.entries(formData)) {
      if (value instanceof File || (Array.isArray(value) && value[0] instanceof File)) {
        const files = Array.isArray(value) ? value : [value]
        for (const file of files) {
          if (file instanceof File) {
            data.append(key, file)
          }
        }
      } else if (value !== null && value !== undefined) {
        let fieldName = key
          .replace(/([A-Z])/g, '_$1')
          .toLowerCase()

        const fieldMap = {
          last_name: 'last_name',
          first_name: 'first_name',
          middle_name: 'middle_name',
          birth_date: 'birth_date',
          registration_address: 'registration_address',
          residence_address: 'residence_address',
          municipal_experience: 'municipal_experience',
          work_experience: 'work_experience',
          marital_status: 'marital_status',
          vacancy_source: 'vacancy_source',
          consent_false_info: 'consent_false_info',
          consent_verification: 'consent_verification',
          consent_personal_data: 'consent_personal_data',
          consent_resume_forwarding: 'consent_resume_forwarding',
        }
        fieldName = fieldMap[fieldName] || fieldName

        if (typeof value === 'boolean') {
          data.append(fieldName, value ? 'true' : 'false')
        } else if (value instanceof Date) {
          data.append(fieldName, value.toISOString().split('T')[0])
        } else {
          data.append(fieldName, value)
        }
      }
    }

    await $fetch(`${config.public.apiBaseUrl}/api/apply/`, {
      method: 'POST',
      body: data,
    })

    submitStatus.value = 'success'
    liveMessage.value = 'Заявка отправлена. Ваша заявка на вакансию успешно отправлена.'
    toast.add({
      title: 'Заявка отправлена',
      description: 'Ваша заявка на вакансию успешно отправлена.',
      color: 'success',
    })
    setTimeout(() => closeApplicationForm(), 2000)
  } catch (error) {
    console.error('Server error:', error.data || error.message || error)
    submitStatus.value = 'error'
    liveMessage.value = 'Произошла ошибка при отправке заявки. Попробуйте снова.'
    toast.add({
      id: 'apply-error',
      title: 'Произошла ошибка',
      description: 'Попробуйте снова',
      color: 'error',
    })
  } finally {
    isSubmitting.value = false
  }
}

defineProps({
  title: {
    type: String,
    default: 'Последние вакансии',
  },
  subtitle: {
    type: String,
    default: 'Найдите подходящую вакансию для вашей карьеры',
  },
  vacancies: {
    type: Array,
    required: true,
    default: () => [],
  },
  pending: {
    type: Boolean,
    default: false,
  },
  spacing: {
    type: String,
    default: 'md',
  },
  headingAlign: {
    type: String,
    default: 'left',
  },
  skeletonCount: {
    type: Number,
    default: 6,
  },
})
</script>
