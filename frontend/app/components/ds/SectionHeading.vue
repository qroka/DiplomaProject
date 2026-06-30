<template>
  <header
    class="mb-6 lg:mb-8"
    :class="align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'"
  >
    <div
      class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      :class="align === 'center' && 'sm:flex-col sm:items-center'"
    >
      <div :class="align === 'center' ? 'text-center' : ''">
        <p
          v-if="overline"
          class="text-overline uppercase tracking-wide text-text-muted mb-2"
        >
          {{ overline }}
        </p>
        <h2
          :id="headingId"
          class="text-h2 text-text-primary text-balance"
        >
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="text-body-lg text-text-secondary mt-3 text-pretty"
        >
          {{ description }}
        </p>
      </div>
      <div
        v-if="$slots.action"
        class="shrink-0"
      >
        <slot name="action" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  overline?: string
  headingId?: string
  align?: 'left' | 'center'
}>(), {
  description: undefined,
  overline: undefined,
  headingId: undefined,
  align: 'left',
})
</script>
