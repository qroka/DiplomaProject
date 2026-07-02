<template>
  <div>
    <div
      v-if="pending"
      class="space-y-4"
      aria-busy="true"
      aria-label="Загрузка расписания"
    >
      <UCard
        v-for="index in 3"
        :key="index"
        variant="subtle"
        :ui="{ body: 'p-5 lg:p-6 space-y-3' }"
      >
        <USkeleton class="h-5 w-28 rounded-full" />
        <USkeleton class="h-7 w-3/4" />
        <USkeleton class="h-16 w-full" />
      </UCard>
    </div>

    <DsEmptyState
      v-else-if="!events.length"
      icon="i-lucide-calendar-x"
      :title="emptyTitle"
      :description="emptyDescription"
    />

    <div
      v-else
      class="space-y-8"
    >
      <section
        v-if="upcomingEvents.length"
        class="space-y-4"
        aria-labelledby="training-upcoming"
      >
        <h3
          id="training-upcoming"
          class="text-overline uppercase tracking-wide text-text-muted"
        >
          Предстоящие
        </h3>
        <ul class="flex flex-col gap-4">
          <li
            v-for="event in upcomingEvents"
            :key="event.id"
          >
            <TrainingEventCard
              :event="event"
              :show-type-badge="showTypeBadge"
            />
          </li>
        </ul>
      </section>

      <section
        v-if="pastEvents.length"
        class="space-y-4"
        aria-labelledby="training-past"
      >
        <h3
          id="training-past"
          class="text-overline uppercase tracking-wide text-text-muted"
        >
          Прошедшие
        </h3>
        <ul class="flex flex-col gap-4">
          <li
            v-for="event in paginatedPastEvents"
            :key="event.id"
          >
            <TrainingEventCard
              :event="event"
              :show-type-badge="showTypeBadge"
              past
            />
          </li>
        </ul>

        <div
          v-if="pastEvents.length > itemsPerPage"
          class="flex justify-center pt-2"
        >
          <UPagination
            v-model:page="pastPage"
            :total="pastEvents.length"
            :items-per-page="itemsPerPage"
            color="primary"
            size="lg"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface TrainingEvent {
  id: number
  title: string
  event_type: string
  eventTypeLabel: string
  description?: string
  event_date: string
  location?: string
}

const props = withDefaults(defineProps<{
  events: TrainingEvent[]
  pending?: boolean
  showTypeBadge?: boolean
  emptyTitle?: string
  emptyDescription?: string
}>(), {
  pending: false,
  showTypeBadge: true,
  emptyTitle: 'Мероприятия пока не запланированы',
  emptyDescription: 'Загляните позже — расписание обновляется по мере появления новых программ.',
})

const itemsPerPage = 5
const pastPage = ref(1)

function isPast(dateStr: string) {
  return new Date(dateStr) < new Date()
}

const upcomingEvents = computed(() =>
  props.events.filter(event => !isPast(event.event_date)),
)

const pastEvents = computed(() =>
  props.events.filter(event => isPast(event.event_date)),
)

const paginatedPastEvents = computed(() => {
  const start = (pastPage.value - 1) * itemsPerPage
  return pastEvents.value.slice(start, start + itemsPerPage)
})

watch(() => props.events, () => {
  pastPage.value = 1
})
</script>
