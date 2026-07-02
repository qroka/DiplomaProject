<template>
  <div class="ds-container py-8">
    <div class="bg-white dark:bg-gray-900/50 rounded-xl p-6 ring-1 ring-gray-200 dark:ring-gray-800 mb-6">
      <p class="text-base lg:text-lg text-gray-900 dark:text-white mb-6">
        Здесь представлены ключевые документы и информация о конкурсах, проводимых Администрацией Сургутского района.
      </p>
      <div v-if="mainPageTenders.length > 0" class="space-y-3">
        <div
          v-for="doc in mainPageTenders"
          :key="doc.id"
          class="flex items-center justify-between bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-green-500/20 transition-all duration-300"
        >
          <span class="text-gray-900 dark:text-white font-medium">{{ doc.name }}</span>
          <UButton
            :to="doc.link"
            target="_blank"
            external
            label="Скачать"
            icon="i-lucide-download"
            color="primary"
            size="lg"
            :aria-label="'Скачать: ' + doc.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: allTenders } = await useAsyncData('tenders-main-page', () =>
  $fetch(`${useRuntimeConfig().public.apiBaseUrl}/api/tenders/`), { server: false }
)
const mainPageTenders = computed(() =>
  (allTenders.value ?? []).filter(t => t.show_on_main_page)
)
</script>
