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

    <DsSection spacing="md">
      <DsSectionHeading
        :title="title"
        :description="subtitle"
        align="left"
      >
        <template #action>
          <UButton
            label="Все вакансии"
            to="/vacancies"
            color="primary"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            class="min-h-11 font-medium"
          />
        </template>
      </DsSectionHeading>

      <div
        v-if="pending"
        class="grid-cards"
      >
        <DsSkeletonCard
          v-for="i in 3"
          :key="i"
        />
      </div>

      <DsEmptyState
        v-else-if="!vacancies.length"
        icon="i-lucide-search-x"
        title="Вакансии не найдены"
        description="Сейчас нет открытых позиций. Загляните позже или подпишитесь на обновления"
      >
        <template #action>
          <UButton
            label="Все вакансии"
            to="/vacancies"
            color="primary"
            variant="solid"
            class="min-h-11 font-medium"
          />
        </template>
      </DsEmptyState>

      <UCarousel
        v-else
        :items="carouselItems"
        :arrows="true"
        :dots="true"
        :loop="false"
        :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
      >
        <template #default="{ item }">
          <VacancyCard
            v-if="!item.isPlaceholder"
            :vacancy="item"
            @apply="openApplicationForm"
          />

          <DsSurface
            v-else
            elevation="sm"
            padding="lg"
            class="h-full flex flex-col items-center justify-center text-center min-h-[320px]"
          >
            <UIcon
              name="i-lucide-arrow-right-circle"
              class="h-14 w-14 text-primary-500 mx-auto mb-4"
              aria-hidden="true"
            />
            <h3 class="text-h3 text-text-primary mb-2">
              Смотреть все вакансии
            </h3>
            <p class="text-body text-text-secondary mb-6 max-w-xs">
              Ознакомьтесь со всеми актуальными предложениями
            </p>
            <UButton
              label="Все вакансии"
              color="primary"
              variant="solid"
              to="/vacancies"
              class="min-h-11 font-medium"
            />
          </DsSurface>
        </template>
      </UCarousel>
    </DsSection>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ApplicationForm from './ApplicationForm.vue'
import VacancyCard from './VacancyCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Последние вакансии',
  },
  subtitle: {
    type: String,
    default: 'Актуальные предложения от работодателей',
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
})

const config = useRuntimeConfig()
const isApplicationFormOpen = ref(false)
const selectedVacancy = ref(null)
const isSubmitting = ref(false)
const submitStatus = ref(null)

const carouselItems = computed(() => {
  const all = [...props.vacancies]
  const count = Math.min(5, all.length)
  for (let i = all.length - 1; i > all.length - 1 - count; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]]
  }
  const selected = all.slice(-count)
  selected.push({ isPlaceholder: true })
  return selected
})

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
        let fieldName = key.replace(/([A-Z])/g, '_$1').toLowerCase()
        if (value instanceof Date) {
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
    setTimeout(() => closeApplicationForm(), 2000)
  } catch (error) {
    console.error('Server error:', error.data || error.message || error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>
