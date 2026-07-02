<template>
  <div>
    <div
      v-if="pending"
      class="space-y-4"
      aria-busy="true"
      aria-label="Загрузка конкурсов"
    >
      <DsSkeletonCard
        v-for="index in 2"
        :key="index"
      />
    </div>

    <DsEmptyState
      v-else-if="!competitions.length"
      icon="i-lucide-calendar-off"
      title="В настоящее время конкурсы не проводятся"
      description="Информация о новых конкурсах на замещение должностей и формирование кадрового резерва будет опубликована в этом разделе."
    >
      <template #action>
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            label="Вакансии"
            to="/vacancies"
            color="primary"
            variant="soft"
            trailing-icon="i-lucide-arrow-right"
            class="cursor-pointer"
          />
          <UButton
            label="Кадровый резерв"
            to="/staffreserve"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            class="cursor-pointer transition-colors duration-200"
          />
        </div>
      </template>
    </DsEmptyState>

    <ul
      v-else
      class="flex flex-col gap-5 lg:gap-6"
    >
      <li
        v-for="item in competitions"
        :key="item.id"
      >
        <UCard
          variant="subtle"
          class="min-w-0"
          :ui="{
            root: 'overflow-hidden rounded-xl',
            body: 'p-0',
          }"
        >
          <div class="flex flex-wrap items-start justify-between gap-3 border-b border-default px-5 py-4 lg:px-6">
            <div class="min-w-0 space-y-2">
              <h3 class="text-h3 text-text-primary text-balance">
                {{ item.title }}
              </h3>
              <p
                v-if="item.date_start || item.date_end"
                class="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-text-muted"
              >
                <UIcon
                  name="i-lucide-calendar"
                  class="size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span class="text-text-secondary">Приём документов:</span>
                <time :datetime="item.date_start || item.date_end || undefined">
                  {{ formatDateRange(item.date_start, item.date_end) }}
                </time>
              </p>
            </div>
            <UBadge
              color="primary"
              variant="subtle"
              class="shrink-0"
            >
              {{ item.competitionTypeLabel }}
            </UBadge>
          </div>

          <div class="space-y-5 p-5 lg:p-6">
            <div
              v-if="item.content"
              class="text-body text-text-secondary leading-relaxed whitespace-pre-line text-pretty"
            >
              {{ item.content }}
            </div>

            <div
              v-if="item.requirements"
              class="space-y-2"
            >
              <h4 class="text-overline uppercase tracking-wide text-text-muted">
                Требования
              </h4>
              <p class="text-body text-text-secondary leading-relaxed whitespace-pre-line text-pretty">
                {{ item.requirements }}
              </p>
            </div>

            <div
              v-if="item.acceptance_info"
              class="space-y-2"
            >
              <h4 class="text-overline uppercase tracking-wide text-text-muted">
                Место и время приёма документов
              </h4>
              <p class="text-body text-text-secondary leading-relaxed whitespace-pre-line text-pretty">
                {{ item.acceptance_info }}
              </p>
            </div>

            <div
              v-if="item.contact_phones"
              class="space-y-2"
            >
              <h4 class="text-overline uppercase tracking-wide text-text-muted">
                Контакты ответственных лиц
              </h4>
              <p class="flex items-start gap-2 text-body text-text-secondary whitespace-pre-line">
                <UIcon
                  name="i-lucide-phone"
                  class="size-4 shrink-0 text-primary mt-1"
                  aria-hidden="true"
                />
                <span>{{ item.contact_phones }}</span>
              </p>
            </div>
          </div>
        </UCard>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export interface CompetitionItem {
  id: number
  title: string
  competition_type: 'vacancy' | 'reserve'
  competitionTypeLabel: string
  content?: string
  date_start?: string | null
  date_end?: string | null
  requirements?: string
  acceptance_info?: string
  contact_phones?: string
}

const props = withDefaults(defineProps<{
  typeFilter?: 'vacancy' | 'reserve' | null
}>(), {
  typeFilter: null,
})

const config = useRuntimeConfig()

const { data: allCompetitions, pending } = await useAsyncData(
  'competitions',
  () => $fetch<CompetitionItem[]>(`${config.public.apiBaseUrl}/api/competitions/`),
  { server: false },
)

const competitions = computed(() => {
  const items = allCompetitions.value ?? []
  if (!props.typeFilter) return items
  return items.filter(item => item.competition_type === props.typeFilter)
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatDateRange(start?: string | null, end?: string | null) {
  if (start && !end) return `с ${formatDate(start)}`
  if (!start && end) return `по ${formatDate(end)}`
  if (!start || !end) return ''

  const dStart = new Date(start)
  const dEnd = new Date(end)
  const sameYear = dStart.getFullYear() === dEnd.getFullYear()
  const sameMonth = sameYear && dStart.getMonth() === dEnd.getMonth()

  if (sameMonth) {
    const monthYear = dEnd.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })
    return `${dStart.getDate()}–${dEnd.getDate()} ${monthYear}`
  }

  if (sameYear) {
    const startPart = dStart.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
    const endPart = formatDate(end)
    return `${startPart} — ${endPart}`
  }

  return `${formatDate(start)} — ${formatDate(end)}`
}
</script>
