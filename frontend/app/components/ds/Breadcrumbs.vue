<template>
  <nav
    v-if="items.length > 1"
    :aria-label="ariaLabel"
    :class="embedded ? undefined : 'ds-container pt-4 pb-2'"
  >
    <UBreadcrumb
      :items="breadcrumbItems"
      separator-icon="i-lucide-chevron-right"
      :ui="{
        root: embedded ? 'mb-0' : undefined,
        list: 'flex-wrap gap-y-1',
        link: [
          'text-caption text-text-muted hover:text-text-accent transition-colors duration-200',
          embedded && 'px-0',
        ],
        linkLeadingIcon: 'size-3.5 text-text-muted',
        linkLabel: 'text-caption font-normal',
        separator: 'text-text-muted/50',
        separatorIcon: 'size-3.5',
      }"
    />
  </nav>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '~/data/breadcrumbs'

const props = withDefaults(defineProps<{
  items: BreadcrumbItem[]
  ariaLabel?: string
  embedded?: boolean
}>(), {
  ariaLabel: 'Навигационная цепочка',
  embedded: false,
})

/** Последний пункт — текущая страница, без ссылки */
const breadcrumbItems = computed(() =>
  props.items.map((item, index) => {
    const isLast = index === props.items.length - 1
    if (isLast) {
      return {
        label: item.label,
        icon: item.icon,
      }
    }
    return {
      label: item.label,
      to: item.to,
      icon: item.icon,
    }
  }),
)
</script>
