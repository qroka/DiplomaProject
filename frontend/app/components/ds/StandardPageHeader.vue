<template>
  <header class="bg-surface-sunken/60">
    <div class="ds-container py-6 lg:py-8">
      <UPageHeader
        :headline="resolvedHeadline"
        :title="title"
        :description="description"
        :ui="{
          root: 'gap-y-2 border-0',
          headline: 'text-overline uppercase tracking-wide text-text-accent font-medium',
          title: 'text-h1 lg:text-[2rem] text-text-primary text-balance leading-tight',
          description: 'text-body-lg text-text-secondary text-pretty max-w-2xl mt-2',
          links: 'mt-4',
        }"
      >
        <template
          v-if="$slots.actions"
          #links
        >
          <slot name="actions" />
        </template>
      </UPageHeader>
    </div>
  </header>
</template>

<script setup lang="ts">
import { resolveStandardSection } from '~/data/standard-pages'

const props = withDefaults(defineProps<{
  title: string
  description?: string
  headline?: string
}>(), {
  description: undefined,
  headline: undefined,
})

const route = useRoute()

const resolvedHeadline = computed(() => {
  if (props.headline) return props.headline

  const section = resolveStandardSection(route.path)
  if (section) return section.label

  const pathHeadlines: Record<string, string> = {
    '/vacancies': 'Карьера',
    '/anti-corruption': 'Противодействие коррупции',
    '/privacy': 'Правовая информация',
  }
  return pathHeadlines[route.path] ?? 'Кадровый портал'
})
</script>
