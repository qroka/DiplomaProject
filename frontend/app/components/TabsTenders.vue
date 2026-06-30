<template>
  <UContainer id="competition-results" class="pb-12">
    <UTabs
      v-model="activeTab"
      color="primary"
      variant="pill"
      size="lg"
      :items="tabItems"
      :unmount-on-hide="false"
    >
      <template #content="{ item }">
        <!-- Результаты конкурсов -->
        <div v-if="item.value === 'results'" class="mt-6 space-y-4">
          <div
            v-for="entry in paginatedResults"
            :key="entry.id"
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-4 lg:p-6"
          >
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="font-semibold text-gray-900 dark:text-white">{{ entry.title }}</h3>
              <span v-if="entry.completed_at" class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(entry.completed_at) }}
              </span>
            </div>
            <div class="flex flex-wrap gap-3">
              <a
                v-if="entry.decreeConductLink"
                :href="entry.decreeConductLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 transition-colors text-sm"
              >
                <UIcon name="i-lucide-download" class="h-4 w-4" />
                Постановление о проведении
              </a>
              <a
                v-if="entry.decreeResultsLink"
                :href="entry.decreeResultsLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 transition-colors text-sm"
              >
                <UIcon name="i-lucide-download" class="h-4 w-4" />
                Постановление о результатах
              </a>
            </div>
          </div>

          <DsEmptyState
            v-if="!results?.length"
            icon="i-lucide-file-search"
            title="Результаты не опубликованы"
            description="Результаты завершённых конкурсов появятся здесь после официального размещения"
          />

          <div v-if="(results?.length ?? 0) > itemsPerPage" class="flex justify-center mt-6">
            <UPagination
              v-model:page="currentPage"
              :total="results?.length ?? 0"
              :items-per-page="itemsPerPage"
              color="primary"
              size="sm"
            />
          </div>
        </div>

        <!-- Положения о конкурсах -->
        <div v-else class="mt-6 space-y-3">
          <div
            v-for="entry in paginatedRules"
            :key="entry.id"
            class="flex flex-wrap items-center justify-between gap-3 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4"
          >
            <span class="text-gray-900 dark:text-white font-medium">{{ entry.name }}</span>
            <a
              v-if="entry.link"
              :href="entry.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 transition-colors text-sm shrink-0"
            >
              <UIcon name="i-lucide-download" class="h-4 w-4" />
              Скачать
            </a>
          </div>

          <DsEmptyState
            v-if="!rules?.length"
            icon="i-lucide-file-x"
            title="Документы отсутствуют"
            description="В этой категории пока нет опубликованных положений"
          />

          <div v-if="(rules?.length ?? 0) > itemsPerPage" class="flex justify-center mt-6">
            <UPagination
              v-model:page="currentPage"
              :total="rules?.length ?? 0"
              :items-per-page="itemsPerPage"
              color="primary"
              size="sm"
            />
          </div>
        </div>
      </template>
    </UTabs>
  </UContainer>
</template>

<script setup>
const route = useRoute()
const itemsPerPage = 10
const activeTab = ref('results')
const currentPage = ref(1)
const config = useRuntimeConfig()

const tabItems = [
  { label: 'Результаты конкурсов', value: 'results' },
  { label: 'Положения о конкурсах', value: 'rules' }
]

onMounted(() => {
  if (route.query.tab === 'results') {
    activeTab.value = 'results'
  }
})

const { data: results } = await useAsyncData('competition-results', () =>
  $fetch(`${config.public.apiBaseUrl}/api/competition-results/`), { server: false }
)

const { data: rules } = await useAsyncData('competition-rules', () =>
  $fetch(`${config.public.apiBaseUrl}/api/tenders/`), { server: false }
)

const paginatedResults = computed(() => {
  const items = results.value ?? []
  const start = (currentPage.value - 1) * itemsPerPage
  return items.slice(start, start + itemsPerPage)
})

const paginatedRules = computed(() => {
  const items = rules.value ?? []
  const start = (currentPage.value - 1) * itemsPerPage
  return items.slice(start, start + itemsPerPage)
})

watch(activeTab, () => {
  currentPage.value = 1
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
