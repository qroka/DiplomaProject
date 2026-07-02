<template>
  <div>
    <div
      v-if="pending"
      class="space-y-4"
      aria-busy="true"
      aria-label="Загрузка результатов конкурсов"
    >
      <UCard
        v-for="index in 2"
        :key="index"
        variant="subtle"
        :ui="{ body: 'p-5 lg:p-6 space-y-4' }"
      >
        <USkeleton class="h-6 w-2/3" />
        <USkeleton class="h-4 w-1/4" />
        <div class="flex flex-wrap gap-3">
          <USkeleton class="h-9 w-52" />
          <USkeleton class="h-9 w-52" />
        </div>
      </UCard>
    </div>

    <DsEmptyState
      v-else-if="!results.length"
      icon="i-lucide-file-search"
      :title="emptyTitle"
      :description="emptyDescription"
    />

    <div
      v-else
      class="space-y-4"
    >
      <UCard
        v-for="entry in paginatedResults"
        :key="entry.id"
        variant="subtle"
        :ui="{
          root: 'rounded-xl',
          body: 'p-5 lg:p-6 space-y-4',
        }"
      >
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="min-w-0 space-y-2">
            <h3 class="text-h3 text-text-primary text-balance">
              {{ entry.title }}
            </h3>
            <UBadge
              v-if="showTypeBadge && entry.competitionTypeLabel"
              color="primary"
              variant="subtle"
            >
              {{ entry.competitionTypeLabel }}
            </UBadge>
          </div>
          <time
            v-if="entry.completed_at"
            :datetime="entry.completed_at"
            class="text-caption text-text-muted shrink-0"
          >
            {{ formatDate(entry.completed_at) }}
          </time>
        </div>

        <div class="flex flex-wrap gap-3">
          <UButton
            v-if="entry.decreeConductLink"
            label="Постановление о проведении"
            icon="i-lucide-download"
            :to="entry.decreeConductLink"
            target="_blank"
            external
            color="primary"
            variant="soft"
            size="lg"
            class="cursor-pointer"
          />
          <UButton
            v-if="entry.decreeResultsLink"
            label="Постановление о результатах"
            icon="i-lucide-download"
            :to="entry.decreeResultsLink"
            target="_blank"
            external
            color="primary"
            variant="outline"
            size="lg"
            class="cursor-pointer transition-colors duration-200"
          />
        </div>
      </UCard>

      <div
        v-if="results.length > itemsPerPage"
        class="flex justify-center pt-2"
      >
        <UPagination
          v-model:page="currentPage"
          :total="results.length"
          :items-per-page="itemsPerPage"
          color="primary"
          size="lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface CompetitionResultItem {
  id: number
  title: string
  competition_type?: 'vacancy' | 'reserve'
  competitionTypeLabel?: string
  decreeConductLink?: string | null
  decreeResultsLink?: string | null
  completed_at?: string | null
}

const props = withDefaults(defineProps<{
  typeFilter?: 'vacancy' | 'reserve' | null
}>(), {
  typeFilter: null,
})

const itemsPerPage = 5
const currentPage = ref(1)
const config = useRuntimeConfig()

const showTypeBadge = computed(() => !props.typeFilter)

const emptyTitle = computed(() =>
  props.typeFilter === 'reserve'
    ? 'Результаты конкурсов на кадровый резерв не опубликованы'
    : 'Результаты не опубликованы',
)

const emptyDescription = computed(() =>
  props.typeFilter === 'reserve'
    ? 'Архив завершённых конкурсов на формирование кадрового резерва появится здесь после официального размещения постановлений.'
    : 'Информация о завершённых конкурсах появится здесь после официального размещения постановлений.',
)

const { data: resultsData, pending } = await useAsyncData(
  () => `competition-results-${props.typeFilter ?? 'all'}`,
  () => {
    const query = props.typeFilter ? { type: props.typeFilter } : undefined
    return $fetch<CompetitionResultItem[]>(
      `${config.public.apiBaseUrl}/api/competition-results/`,
      { query },
    )
  },
  { server: false, watch: [() => props.typeFilter] },
)

const results = computed(() => resultsData.value ?? [])

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return results.value.slice(start, start + itemsPerPage)
})

watch(() => props.typeFilter, () => {
  currentPage.value = 1
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
