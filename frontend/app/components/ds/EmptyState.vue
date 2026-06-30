<template>
  <div class="text-center py-12 px-4">
    <UIcon
      :name="icon"
      class="h-14 w-14 text-text-muted mx-auto mb-4"
      aria-hidden="true"
    />
    <h3 class="text-h3 text-text-primary mb-2">
      {{ title }}
    </h3>
    <p class="text-body text-text-secondary max-w-md mx-auto">
      {{ description }}
    </p>
    <div
      v-if="$slots.action"
      class="mt-6"
    >
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string
  title: string
  description?: string
}>(), {
  icon: 'i-lucide-inbox',
  description: undefined,
})
</script>
