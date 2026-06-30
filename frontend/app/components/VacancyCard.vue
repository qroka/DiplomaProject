<template>
  <article
    class="flex h-full flex-col rounded-2xl border border-default bg-default transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none"
    :class="[
      vacancy.isNew && 'border-primary/30',
      size === 'lg' ? 'min-h-96 p-6 sm:p-8' : 'p-5 sm:p-6',
    ]"
  >
    <div class="flex items-start justify-between gap-3">
      <div
        class="flex shrink-0 items-center justify-center rounded-full bg-elevated text-primary"
        :class="size === 'lg' ? 'size-12' : 'size-11'"
        aria-hidden="true"
      >
        <UIcon
          name="i-lucide-building-2"
          :class="size === 'lg' ? 'size-6' : 'size-5'"
        />
      </div>

      <UBadge
        v-if="vacancy.isNew"
        label="Новое"
        color="primary"
        variant="subtle"
        size="sm"
        class="rounded-full"
      />
    </div>

    <div
      class="flex flex-wrap items-center gap-x-2 gap-y-1"
      :class="size === 'lg' ? 'mt-5 text-base' : 'mt-4 text-sm'"
    >
      <span class="font-medium text-highlighted">
        {{ organization }}
      </span>
      <template v-if="relativeDate">
        <span
          class="text-muted"
          aria-hidden="true"
        >·</span>
        <time
          :datetime="vacancy.created_at"
          class="text-muted"
        >
          {{ relativeDate }}
        </time>
      </template>
    </div>

    <h3
      class="mt-3 font-bold leading-snug text-highlighted text-balance"
      :class="size === 'lg' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'"
    >
      <NuxtLink
        :to="detailsLink"
        class="outline-none transition hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {{ vacancy.title }}
      </NuxtLink>
    </h3>

    <div
      v-if="tags.length"
      class="mt-3 flex flex-wrap gap-2"
    >
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-lg bg-elevated font-medium text-muted"
        :class="size === 'lg' ? 'px-3 py-1.5 text-sm' : 'px-2.5 py-1 text-xs'"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex-1" />

    <div
      class="flex items-end justify-between gap-4 border-t border-default"
      :class="size === 'lg' ? 'mt-8 pt-5' : 'mt-6 pt-4'"
    >
      <div class="min-w-0 flex flex-col gap-1">
        <p
          class="font-bold text-highlighted"
          :class="size === 'lg' ? 'text-lg' : 'text-base'"
        >
          {{ vacancy.salary || 'По согласованию' }}
        </p>
        <p
          v-if="vacancy.location"
          class="truncate text-muted"
          :class="size === 'lg' ? 'text-base' : 'text-sm'"
        >
          {{ vacancy.location }}
        </p>
      </div>

      <UButton
        label="Откликнуться"
        :aria-label="`Откликнуться на вакансию: ${vacancy.title}`"
        color="primary"
        :size="size === 'lg' ? 'md' : 'sm'"
        class="shrink-0 rounded-full"
        @click="$emit('apply', vacancy)"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
export interface Vacancy {
  id?: number | string
  title: string
  branch?: string
  company?: string
  location?: string
  salary?: string
  employmentType?: string
  experience?: string
  workSchedule?: string
  requiredExperience?: string
  workingHours?: string
  jobType?: string
  description?: string
  isNew?: boolean
  skills?: string[]
  detailsLink?: string
  created_at?: string
}

const props = withDefaults(defineProps<{
  vacancy: Vacancy
  size?: 'default' | 'lg'
}>(), {
  size: 'default',
})

defineEmits<{
  apply: [vacancy: Vacancy]
}>()

const organization = computed(() => {
  return props.vacancy.company || props.vacancy.branch || 'Администрация Сургутского района'
})

const detailsLink = computed(() => {
  if (props.vacancy.detailsLink) return props.vacancy.detailsLink
  if (props.vacancy.id) return `/vacancyinfo/${props.vacancy.id}`
  return '/vacancies'
})

const relativeDate = computed(() => {
  const raw = props.vacancy.created_at
  if (!raw) return ''

  try {
    const created = new Date(raw)
    const diffMs = Date.now() - created.getTime()
    const days = Math.floor(diffMs / 86_400_000)

    if (days <= 0) return 'сегодня'
    if (days === 1) return 'вчера'
    if (days < 7) return `${days} дн. назад`
    if (days < 30) {
      const weeks = Math.floor(days / 7)
      return `${weeks} нед. назад`
    }

    return created.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
    })
  } catch {
    return ''
  }
})

const tags = computed(() => {
  const items: string[] = []

  if (props.vacancy.employmentType) items.push(props.vacancy.employmentType)
  if (props.vacancy.workSchedule) items.push(props.vacancy.workSchedule)
  if (props.vacancy.requiredExperience) items.push(props.vacancy.requiredExperience)
  else if (props.vacancy.experience) items.push(props.vacancy.experience)
  if (props.vacancy.jobType) items.push(props.vacancy.jobType)
  if (props.vacancy.workingHours) items.push(props.vacancy.workingHours)

  return items.slice(0, 3)
})
</script>
