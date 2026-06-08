<template>
  <div class="flex-1 pb-6">
    <!-- Application Form Modal -->
    <UModal v-model:open="isApplicationFormOpen" title="Отклик на вакансию">
      <template #body>
        <ApplicationForm :vacancy="selectedVacancy" @submit="handleFormSubmit" @cancel="closeApplicationForm" />
      </template>
    </UModal>

    <UContainer class="pb-6 lg:pb-12">
      <!-- Header Section -->
      <div class="text-center mb-6">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <!-- No Vacancies Message -->
      <div
        v-if="vacancies.length === 0"
        class="text-center py-12"
      >
        <UIcon name="i-lucide-search-x" class="h-16 w-16 text-gray-600 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Вакансии не найдены</h3>
        <p class="text-gray-500 dark:text-gray-500">Попробуйте изменить параметры поиска</p>
      </div>

      <!-- Carousel -->
      <UCarousel
        v-else
        :items="carouselItems"
        :arrows="true"
        :dots="true"
        :loop="false"
        :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
      >
        <template #default="{ item }">
          <!-- Vacancy Card -->
          <VacancyCard
            v-if="!item.isPlaceholder"
            :vacancy="item"
            @apply="openApplicationForm"
          />

          <!-- Placeholder Card -->
          <UCard
            v-else
            class="bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800 h-full flex flex-col"
            :ui="{
              root: 'h-full flex flex-col',
              body: 'flex-1 flex flex-col items-center justify-center p-6'
            }"
          >
            <div class="text-center">
              <UIcon name="i-lucide-arrow-right-circle" class="h-16 w-16 text-primary-500 mx-auto mb-4" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Смотреть все вакансии</h3>
              <p class="text-gray-500 dark:text-gray-400 mb-6">
                Ознакомьтесь со всеми актуальными предложениями
              </p>
              <UButton
                label="Все вакансии"
                color="primary"
                variant="solid"
                class="bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600"
                to="/vacancies"
              />
            </div>
          </UCard>
        </template>
      </UCarousel>
    </UContainer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ApplicationForm from './ApplicationForm.vue'
import VacancyCard from './VacancyCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Последние вакансии'
  },
  subtitle: {
    type: String,
    default: 'Актуальные предложения от работодателей'
  },
  vacancies: {
    type: Array,
    required: true,
    default: () => []
  }
})

const config = useRuntimeConfig()
const isApplicationFormOpen = ref(false)
const selectedVacancy = ref(null)
const isSubmitting = ref(false)
const submitStatus = ref(null)

// Pick 5 random vacancies using Fisher-Yates partial shuffle
const carouselItems = computed(() => {
  const all = [...props.vacancies]
  const count = Math.min(5, all.length)
  // Partial Fisher-Yates shuffle
  for (let i = all.length - 1; i > all.length - 1 - count; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]]
  }
  const selected = all.slice(-count)
  // Add placeholder as 6th item
  selected.push({ isPlaceholder: true })
  return selected
})

// Methods
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
          'last_name': 'last_name',
          'first_name': 'first_name',
          'middle_name': 'middle_name',
          'birth_date': 'birth_date',
          'registration_address': 'registration_address',
          'residence_address': 'residence_address',
          'municipal_experience': 'municipal_experience',
          'work_experience': 'work_experience',
          'marital_status': 'marital_status',
          'vacancy_source': 'vacancy_source'
        }
        fieldName = fieldMap[fieldName] || fieldName

        if (value instanceof Date) {
          data.append(fieldName, value.toISOString().split('T')[0])
        } else {
          data.append(fieldName, value)
        }
      }
    }

    const response = await $fetch(`${config.public.apiBaseUrl}/api/apply/`, {
      method: 'POST',
      body: data
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
