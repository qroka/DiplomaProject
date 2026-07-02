<template>
  <p
    v-if="role"
    class="flex items-start gap-3 min-w-0 text-body text-text-secondary leading-snug text-pretty"
  >
    <UIcon
      name="i-lucide-briefcase"
      class="size-4 shrink-0 text-primary mt-0.5"
      aria-hidden="true"
    />
    <span>{{ role }}</span>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  role?: string
}>()
</script>
