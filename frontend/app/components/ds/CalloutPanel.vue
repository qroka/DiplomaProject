<template>
  <UAlert
    :color="color"
    :variant="variant"
    :icon="icon"
    :title="title"
    :ui="{
      root: 'rounded-xl p-5 lg:p-6',
      title: 'text-h3',
      description: 'text-body leading-relaxed mt-2',
    }"
  >
    <template #description>
      <div class="space-y-4">
        <p
          v-if="description"
          class="text-body text-text-secondary leading-relaxed"
        >
          {{ description }}
        </p>
        <div
          v-if="$slots.default"
          class="text-body text-text-secondary leading-relaxed space-y-3"
        >
          <slot />
        </div>
        <div
          v-if="$slots.actions"
          class="flex flex-wrap gap-3"
        >
          <slot name="actions" />
        </div>
      </div>
    </template>
  </UAlert>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  icon?: string
  color?: 'primary' | 'warning' | 'info' | 'neutral'
  variant?: 'solid' | 'outline' | 'soft' | 'subtle'
}>(), {
  description: undefined,
  icon: 'i-lucide-info',
  color: 'warning',
  variant: 'soft',
})
</script>
