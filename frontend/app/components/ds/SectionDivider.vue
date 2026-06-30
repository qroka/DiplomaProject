<template>
  <div
    class="flex items-center gap-3"
    :class="marginClass"
    role="separator"
    :aria-label="label"
  >
    <div
      class="flex-1 h-px"
      :class="variant === 'brand' ? 'bg-gradient-brand' : 'bg-border-default'"
    />
    <span
      v-if="label"
      class="text-caption text-text-muted shrink-0"
    >
      {{ label }}
    </span>
    <div
      v-if="label"
      class="flex-1 h-px"
      :class="variant === 'brand' ? 'bg-gradient-brand' : 'bg-border-default'"
    />
  </div>
</template>

<script setup lang="ts">
type DividerVariant = 'default' | 'brand'

const props = withDefaults(defineProps<{
  label?: string
  variant?: DividerVariant
  spacing?: 'sm' | 'md' | 'lg'
}>(), {
  label: undefined,
  variant: 'brand',
  spacing: 'md',
})

const marginClass = computed(() => {
  const map = { sm: 'my-4', md: 'my-6', lg: 'my-8' }
  return map[props.spacing]
})
</script>
