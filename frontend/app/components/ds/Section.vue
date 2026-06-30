<template>
  <section
    :class="sectionClasses"
    :aria-labelledby="headingId || undefined"
  >
    <div class="ds-container">
      <slot name="header" />
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
type SectionSpacing = 'md' | 'lg'
type SectionVariant = 'default' | 'muted' | 'brand'

const props = withDefaults(defineProps<{
  spacing?: SectionSpacing
  variant?: SectionVariant
  headingId?: string
}>(), {
  spacing: 'md',
  variant: 'default',
  headingId: undefined,
})

const sectionClasses = computed(() => [
  props.spacing === 'lg' ? 'ds-section-spacing-lg' : 'ds-section-spacing-md',
  props.variant === 'muted' && 'bg-surface-sunken',
  props.variant === 'brand' && 'bg-surface-brand text-text-inverse',
])
</script>
