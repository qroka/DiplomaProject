<template>
  <div v-if="bare">
    <slot name="header" />
    <slot />
  </div>
  <section
    v-else
    :class="sectionClasses"
    :aria-labelledby="headingId || undefined"
  >
    <UContainer>
      <slot name="header" />
      <slot />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
type SectionSpacing = 'none' | 'md' | 'lg'
type SectionVariant = 'default' | 'muted' | 'brand'

const props = withDefaults(defineProps<{
  spacing?: SectionSpacing
  variant?: SectionVariant
  headingId?: string
  bare?: boolean
}>(), {
  spacing: 'md',
  variant: 'default',
  headingId: undefined,
  bare: false,
})

const sectionClasses = computed(() => [
  props.spacing === 'lg' ? 'ds-section-spacing-lg' : props.spacing === 'md' ? 'ds-section-spacing-md' : undefined,
  props.variant === 'muted' && 'bg-surface-sunken',
  props.variant === 'brand' && 'bg-surface-brand text-text-inverse',
])
</script>
