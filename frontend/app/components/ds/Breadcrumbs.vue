<template>
  <nav
    v-if="items.length > 1"
    :aria-label="ariaLabel"
    class="ds-container pt-4 pb-2"
  >
    <UBreadcrumb
      :items="items"
      separator-icon="i-lucide-chevron-right"
      :ui="{
        link: 'text-caption text-text-secondary hover:text-text-accent',
        linkLabel: 'text-caption',
      }"
    />
  </nav>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '~/data/breadcrumbs'

withDefaults(defineProps<{
  items: BreadcrumbItem[]
  ariaLabel?: string
}>(), {
  ariaLabel: 'Навигационная цепочка',
})
</script>
