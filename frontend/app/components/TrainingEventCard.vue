<template>
  <UCard
    variant="subtle"
    :class="past && 'opacity-80'"
    :ui="{
      root: 'rounded-xl overflow-hidden',
      body: 'p-0',
    }"
  >
    <div class="flex flex-col gap-4 border-b border-default px-5 py-4 lg:px-6">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <UBadge
          v-if="showTypeBadge"
          color="primary"
          variant="subtle"
          size="lg"
          class="rounded-full"
        >
          {{ event.eventTypeLabel }}
        </UBadge>
        <time
          :datetime="event.event_date"
          class="flex items-center gap-2 text-caption text-text-muted shrink-0"
        >
          <UIcon
            name="i-lucide-calendar"
            class="size-4 text-primary"
            aria-hidden="true"
          />
          {{ formatDateTime(event.event_date) }}
        </time>
      </div>
      <h3 class="text-h3 text-text-primary text-balance">
        {{ event.title }}
      </h3>
    </div>

    <div class="space-y-3 px-5 py-4 lg:px-6 lg:py-5">
      <p
        v-if="event.description"
        class="text-body text-text-secondary leading-relaxed whitespace-pre-line text-pretty"
      >
        {{ event.description }}
      </p>
      <p
        v-if="event.location"
        class="flex items-start gap-2 text-body text-text-muted"
      >
        <UIcon
          name="i-lucide-map-pin"
          class="size-4 shrink-0 mt-1 text-primary"
          aria-hidden="true"
        />
        <span>{{ event.location }}</span>
      </p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { TrainingEvent } from '~/components/TrainingEventsList.vue'

defineProps<{
  event: TrainingEvent
  showTypeBadge?: boolean
  past?: boolean
}>()

function formatDateTime(dateStr: string) {
  return new Date(dateStr).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>
