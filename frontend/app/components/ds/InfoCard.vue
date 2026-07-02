<template>
  <UCard
    variant="subtle"
    :ui="{
      root: 'h-full transition-colors duration-200',
      body: 'p-5 lg:p-6 space-y-3',
    }"
  >
    <div class="flex items-center gap-2.5">
      <div
        class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
        aria-hidden="true"
      >
        <UIcon
          :name="icon"
          class="size-5"
        />
      </div>
      <h3 class="text-h3 text-text-primary">
        {{ title }}
      </h3>
    </div>
    <div class="text-body text-text-secondary leading-relaxed">
      <slot />
    </div>
  </UCard>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  icon?: string
}>(), {
  icon: 'i-lucide-info',
})
</script>
