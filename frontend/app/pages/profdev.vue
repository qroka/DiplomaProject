<template>
  <div>
    <DsPageHero
      variant="inner"
      title="Профессиональное развитие"
      description="Расписание обучающих мероприятий и предложения по организации обучения"
      :image="hero.src"
      :image-alt="hero.alt"
    />

    <DsBreadcrumbs :items="breadcrumbItems" />

    <UContainer class="py-8 lg:py-12 space-y-10">
      <section>
        <div class="flex flex-wrap items-end justify-between gap-4 mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Расписание мероприятий
          </h2>
          <USelect
            v-model="typeFilter"
            :items="typeOptions"
            placeholder="Все типы"
            value-key="value"
            class="min-w-48"
          />
        </div>

        <div v-if="filteredEvents.length" class="space-y-4">
          <article
            v-for="event in filteredEvents"
            :key="event.id"
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-5 lg:p-6"
            :class="{ 'opacity-70': isPast(event.event_date) }"
          >
            <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
              <UBadge color="primary" variant="subtle">
                {{ event.eventTypeLabel }}
              </UBadge>
              <time
                :datetime="event.event_date"
                class="text-sm text-gray-500 dark:text-gray-400 shrink-0"
              >
                {{ formatDateTime(event.event_date) }}
              </time>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ event.title }}
            </h3>
            <p
              v-if="event.description"
              class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-3"
            >
              {{ event.description }}
            </p>
            <p
              v-if="event.location"
              class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <UIcon name="i-lucide-map-pin" class="h-4 w-4 shrink-0" />
              {{ event.location }}
            </p>
          </article>
        </div>

        <div
          v-else
          class="text-center py-12 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400"
        >
          Мероприятия пока не запланированы
        </div>
      </section>

      <TrainingFeedbackForm />
    </UContainer>
  </div>
</template>

<script setup>
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Профессиональное развитие' })

const breadcrumbItems = buildBreadcrumbs({ label: 'Профразвитие' })
const hero = useHeroImage('profdev')

const config = useRuntimeConfig()
const typeFilter = ref(null)

const typeOptions = [
  { label: 'Все типы', value: null },
  { label: 'Обучающие мероприятия', value: 'training' },
  { label: 'Встречи с руководством', value: 'leadership' },
  { label: 'Мастер-классы', value: 'masterclass' },
  { label: 'Лучшие практики', value: 'best_practice' }
]

const { data: events } = await useAsyncData('training-events', () =>
  $fetch(`${config.public.apiBaseUrl}/api/training-events/`), { server: false }
)

const filteredEvents = computed(() => {
  const items = events.value ?? []
  if (!typeFilter.value) return items
  return items.filter(e => e.event_type === typeFilter.value)
})

function formatDateTime(dateStr) {
  return new Date(dateStr).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function isPast(dateStr) {
  return new Date(dateStr) < new Date()
}
</script>
