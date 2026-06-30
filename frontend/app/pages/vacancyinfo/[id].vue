<template>
  <div>
    <UModal v-model:open="isApplicationFormOpen" title="Отклик на вакансию">
      <template #body>
        <ApplicationForm
          :vacancy="vacancy"
          @submit="handleFormSubmit"
          @cancel="closeApplicationForm"
        />
      </template>
    </UModal>

    <UContainer class="py-8 lg:py-12">
      <DsBreadcrumbs :items="breadcrumbItems" />

      <div v-if="loading" class="flex justify-center py-20">
        <UIcon name="i-lucide-loader-circle" class="h-8 w-8 text-primary-500 animate-spin" />
      </div>

      <div v-else-if="error" class="text-center py-20">
        <UIcon name="i-lucide-search-x" class="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Вакансия не найдена</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-6">{{ error }}</p>
        <UButton label="Вернуться к вакансиям" to="/vacancies" color="primary" />
      </div>

      <template v-else-if="vacancy">
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {{ vacancy.title }}
        </h1>

        <div class="max-w-3xl space-y-6">
          <UCard class="bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800" :ui="{ body: 'p-4 sm:p-6' }">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-if="vacancy.branch" class="flex items-center gap-3 text-gray-500 dark:text-gray-400 sm:col-span-2">
                <UIcon name="i-lucide-building" class="h-5 w-5 shrink-0" />
                <div>
                  <p class="text-sm">Орган</p>
                  <p class="text-gray-900 dark:text-white font-medium">{{ vacancy.branch }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <UIcon name="i-lucide-map-pin" class="h-5 w-5 shrink-0" />
                <div>
                  <p class="text-sm">Локация</p>
                  <p class="text-gray-900 dark:text-white font-medium">{{ vacancy.location }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3 text-green-600 dark:text-green-400">
                <UIcon name="i-lucide-wallet" class="h-5 w-5 shrink-0" />
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Зарплата</p>
                  <p class="text-gray-900 dark:text-white font-semibold">{{ vacancy.salary }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <UIcon name="i-lucide-award" class="h-5 w-5 shrink-0" />
                <div>
                  <p class="text-sm">Опыт</p>
                  <p class="text-gray-900 dark:text-white font-medium">{{ vacancy.experience || 'Не указан' }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <UIcon name="i-lucide-clock" class="h-5 w-5 shrink-0" />
                <div>
                  <p class="text-sm">График работы</p>
                  <p class="text-gray-900 dark:text-white font-medium">{{ vacancy.workSchedule || 'Не указан' }}</p>
                </div>
              </div>
            </div>
          </UCard>

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

          <div class="flex flex-wrap gap-3">
            <UButton
              label="Откликнуться"
              color="primary"
              size="lg"
              @click="isApplicationFormOpen = true"
            />
            <UButton
              label="Конкурсы"
              to="/tenders"
              color="neutral"
              variant="outline"
              size="lg"
            />
          </div>

          <p class="text-sm text-gray-400 dark:text-gray-500">
            Опубликовано {{ formatDate(vacancy.created_at) }}
          </p>
        </div>
      </template>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { buildBreadcrumbs } from '~/data/breadcrumbs'

const route = useRoute()
const config = useRuntimeConfig()
const toast = useToast()

const vacancy = ref<Record<string, unknown> | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)
const isApplicationFormOpen = ref(false)

useHead(() => ({ title: vacancy.value?.title ? String(vacancy.value.title) : 'Вакансия' }))

const breadcrumbItems = computed(() => {
  const items = buildBreadcrumbs({ label: 'Вакансии', to: '/vacancies' })
  if (vacancy.value?.title) items.push({ label: String(vacancy.value.title) })
  return items
})

async function fetchVacancy() {
  loading.value = true
  error.value = null
  try {
    vacancy.value = await $fetch(`${config.public.apiBaseUrl}/api/vacancies/${route.params.id}/`)
  } catch (err: unknown) {
    error.value = 'Вакансия с таким ID не существует или была снята с публикации.'
  } finally {
    loading.value = false
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

function closeApplicationForm() {
  isApplicationFormOpen.value = false
}

async function handleFormSubmit(formData: Record<string, unknown>) {
  try {
    const data = new FormData()
    data.append('vacancy_title', String(vacancy.value?.title || ''))

    for (const [key, value] of Object.entries(formData)) {
      if (value instanceof File || (Array.isArray(value) && value[0] instanceof File)) {
        const files = Array.isArray(value) ? value : [value]
        for (const file of files) {
          if (file instanceof File) data.append(key.replace(/([A-Z])/g, '_$1').toLowerCase(), file)
        }
      } else if (value !== null && value !== undefined) {
        const fieldName = key.replace(/([A-Z])/g, '_$1').toLowerCase()
        if (typeof value === 'boolean') {
          data.append(fieldName, value ? 'true' : 'false')
        } else if (value instanceof Date) {
          data.append(fieldName, value.toISOString().split('T')[0])
        } else {
          data.append(fieldName, String(value))
        }
      }
    }

    await $fetch(`${config.public.apiBaseUrl}/api/apply/`, { method: 'POST', body: data })
    toast.add({ title: 'Заявка отправлена', color: 'success' })
    setTimeout(closeApplicationForm, 1500)
  } catch {
    toast.add({ title: 'Ошибка отправки', description: 'Попробуйте снова', color: 'error' })
  }
}

onMounted(fetchVacancy)
</script>
