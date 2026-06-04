<template>
  <UContainer class="py-8 lg:py-12">
    <!-- Breadcrumb -->
    <UBreadcrumb :items="breadcrumbItems" separator-icon="i-lucide-chevron-right" class="mb-6" />

    <!-- Loading State -->
    <div
      v-if="loading"
      class="flex justify-center py-20"
    >
      <UIcon name="i-lucide-loader-circle" class="h-8 w-8 text-primary-500 animate-spin" />
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="text-center py-20"
    >
      <UIcon name="i-lucide-search-x" class="h-16 w-16 text-gray-400 mx-auto mb-4" />
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Вакансия не найдена</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6">{{ error }}</p>
      <UButton
        label="Вернуться к вакансиям"
        to="/vacancies"
        color="primary"
        variant="solid"
      />
    </div>

    <!-- Vacancy Content -->
    <template v-else-if="vacancy">
      <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
        {{ vacancy.title }}
      </h1>

      <div class="max-w-3xl space-y-6">
        <!-- Card 1: Key Details -->
        <UCard
          class="bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800"
          :ui="{ body: 'p-4 sm:p-6' }"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Location -->
            <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
              <UIcon name="i-lucide-map-pin" class="h-5 w-5 shrink-0" />
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Локация</p>
                <p class="text-gray-900 dark:text-white font-medium">{{ vacancy.location }}</p>
              </div>
            </div>

            <!-- Salary -->
            <div class="flex items-center gap-3 text-green-600 dark:text-green-400">
              <UIcon name="i-lucide-wallet" class="h-5 w-5 shrink-0" />
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Зарплата</p>
                <p class="text-gray-900 dark:text-white font-semibold">{{ vacancy.salary }}</p>
              </div>
            </div>

            <!-- Experience -->
            <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
              <UIcon name="i-lucide-award" class="h-5 w-5 shrink-0" />
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Опыт</p>
                <p class="text-gray-900 dark:text-white font-medium">{{ vacancy.experience || 'Не указан' }}</p>
              </div>
            </div>

            <!-- Work Schedule -->
            <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
              <UIcon name="i-lucide-clock" class="h-5 w-5 shrink-0" />
              <div>
                <p class="text-sm text-gray-400 dark:text-gray-500">График работы</p>
                <p class="text-gray-900 dark:text-white font-medium">{{ vacancy.workSchedule || 'Не указан' }}</p>
              </div>
            </div>

            <!-- Required Experience -->
            <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
              <UIcon name="i-lucide-briefcase" class="h-5 w-5 shrink-0" />
              <div>
                <p class="text-sm text-gray-400 dark:text-gray-500">Требуемый опыт</p>
                <p class="text-gray-900 dark:text-white font-medium">{{ vacancy.requiredExperience || 'Не указан' }}</p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Card 2: Description -->
        <UCard
          v-if="vacancy.description"
          class="bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800"
          :ui="{ body: 'p-4 sm:p-6' }"
        >
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Описание вакансии</h3>
          <div class="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {{ vacancy.description }}
          </div>
        </UCard>
        
        <UButton
          label="Откликнуться"
          color="green"
          variant="outline"
          class="bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 flex-1"
          @click="$emit('apply', vacancy)"
        />

        <!-- Created At -->
        <p class="text-sm text-gray-400 dark:text-gray-500">
          Эта вакансия была создана {{ formatDate(vacancy.created_at) }}
        </p>
      </div>
    </template>
  </UContainer>
</template>

<script setup>
useHead({ title: 'Вакансия' })
const route = useRoute()
const config = useRuntimeConfig()

const vacancy = ref(null)
const loading = ref(true)
const error = ref(null)

const breadcrumbItems = computed(() => {
  const items = [
    { label: 'Вакансии', icon: 'i-lucide-briefcase', to: '/vacancies' },
  ]
  if (vacancy.value) {
    items.push({ label: vacancy.value.title })
  }
  return items
})

async function fetchVacancy() {
  loading.value = true
  error.value = null

  try {
    const data = await $fetch(`${config.public.apiBaseUrl}/api/vacancies/${route.params.id}/`)
    vacancy.value = data
  } catch (err) {
    if (err.response?.status === 404) {
      error.value = 'Вакансия с таким ID не существует.'
    } else {
      error.value = 'Ошибка при загрузке данных. Попробуйте позже.'
    }
  } finally {
    loading.value = false
  }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}



fetchVacancy()
</script>
