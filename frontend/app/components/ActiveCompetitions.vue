<template>
  <UContainer class="py-8">
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
        {{ heading }}
      </h2>
      <div class="flex flex-wrap gap-3">
        <UButton label="Вакансии" to="/vacancies" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-right" />
        <UButton label="Кадровый резерв" to="/staffreserve" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-right" />
      </div>
    </div>

    <div v-if="pending" class="flex justify-center py-12">
      <UIcon name="i-lucide-loader-circle" class="h-8 w-8 text-primary-500 animate-spin" />
    </div>

    <DsEmptyState
      v-else-if="!competitions?.length"
      icon="i-lucide-calendar-off"
      title="Конкурсы не проводятся"
      description="В настоящее время активных конкурсов нет. Следите за обновлениями в разделе «Конкурсы»"
    />

    <div v-else class="space-y-6">
      <article
        v-for="item in competitions"
        :key="item.id"
        class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm p-6 lg:p-8"
      >
        <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ item.title }}
          </h3>
          <UBadge color="primary" variant="subtle">
            {{ item.competitionTypeLabel }}
          </UBadge>
        </div>

        <p
          v-if="item.date_start || item.date_end"
          class="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2"
        >
          <UIcon name="i-lucide-calendar" class="h-4 w-4" />
          Приём документов:
          <span v-if="item.date_start">{{ formatDate(item.date_start) }}</span>
          <span v-if="item.date_start && item.date_end"> — </span>
          <span v-if="item.date_end">{{ formatDate(item.date_end) }}</span>
        </p>

        <div
          v-if="item.content"
          class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-4"
        >
          {{ item.content }}
        </div>

        <div v-if="item.requirements" class="mb-4">
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
            Требования
          </h4>
          <p class="text-gray-600 dark:text-gray-400 whitespace-pre-line">{{ item.requirements }}</p>
        </div>

        <div v-if="item.acceptance_info" class="mb-4">
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
            Место и время приёма документов
          </h4>
          <p class="text-gray-600 dark:text-gray-400 whitespace-pre-line">{{ item.acceptance_info }}</p>
        </div>

        <div v-if="item.contact_phones" class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
          <UIcon name="i-lucide-phone" class="h-4 w-4 mt-1 shrink-0" />
          <span>{{ item.contact_phones }}</span>
        </div>
      </article>
    </div>
  </UContainer>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const competitionType = computed(() => {
  const type = route.query.type
  return type === 'reserve' || type === 'vacancy' ? type : null
})

const heading = computed(() =>
  competitionType.value === 'reserve'
    ? 'Конкурсы на формирование кадрового резерва'
    : 'Действующие конкурсы'
)

const { data: competitions, pending } = await useAsyncData(
  'competitions',
  () => {
    const params = competitionType.value ? `?type=${competitionType.value}` : ''
    return $fetch(`${config.public.apiBaseUrl}/api/competitions/${params}`)
  },
  { server: false, watch: [competitionType] }
)

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
