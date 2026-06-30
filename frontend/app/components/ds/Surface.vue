<template>
  <component
    :is="tag"
    class="ds-surface"
    :class="[
      interactive && 'ds-surface-interactive',
      glass && 'ds-surface-glass',
    ]"
    :data-elevation="elevation"
    :data-padding="padding"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
type Elevation = 'none' | 'xs' | 'sm' | 'md'
type Padding = 'none' | 'sm' | 'md' | 'lg'

withDefaults(defineProps<{
  tag?: string
  elevation?: Elevation
  padding?: Padding
  interactive?: boolean
  glass?: boolean
}>(), {
  tag: 'div',
  elevation: 'sm',
  padding: 'md',
  interactive: false,
  glass: false,
})
</script>
