<template>
  <div class="w-4/5 mx-auto py-8">
    <UTabs
      v-model="activeTab"
      color="primary"
      variant="pill"
      size="xl"
      :items="tabItems"
      unmount-on-hide="false"
    >
      <template #content="{ item }">
        <div class="mt-6 space-y-3">
          <div
            v-for="entry in paginatedItems(item.value)"
            :key="entry.id"
            class="flex items-center justify-between bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-green-500/20 transition-all duration-300"
          >
            <span class="text-gray-900 dark:text-white font-medium">{{ entry.name }}</span>
            <NuxtLink
              :to="entry.link"
              target="_blank"
              external
              :aria-label="'Скачать: ' + entry.name"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 transition-colors text-sm"
            >
              <UIcon name="i-lucide-download" class="h-4 w-4" />
              Скачать
            </NuxtLink>
          </div>

          <div
            v-if="filteredItems(item.value).length === 0"
            class="text-center py-12 text-gray-500 dark:text-gray-400"
          >
            Нет документов в этой категории
          </div>
        </div>

        <div
          v-if="filteredItems(item.value).length > itemsPerPage"
          class="flex justify-center mt-6"
        >
          <UPagination
            v-model:page="currentPage"
            :total="filteredItems(item.value).length"
            :items-per-page="itemsPerPage"
            color="primary"
            size="sm"
          />
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup>
const itemsPerPage = 10
const activeTab = ref('info')
const currentPage = ref(1)

const tabItems = [
  { label: 'Информация о конкурсах', value: 'info' },
  { label: 'Результаты конкурсов', value: 'results' },
  { label: 'Положения о конкурсах', value: 'rules' }
]

const { data: allTenders } = await useAsyncData('tenders', () =>
  $fetch(`${useRuntimeConfig().public.apiBaseUrl}/api/tenders/`), { server: false }
)

const filteredItems = (category) => {
  const items = (allTenders.value ?? []).filter(t => t.category === category)
  if (category === 'rules') return items
  return items.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
}

const paginatedItems = (category) => {
  const items = filteredItems(category)
  const start = (currentPage.value - 1) * itemsPerPage
  return items.slice(start, start + itemsPerPage)
}

watch(activeTab, () => {
  currentPage.value = 1
})
</script>
