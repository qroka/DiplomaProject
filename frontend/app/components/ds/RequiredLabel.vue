<template>
  <span class="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
    <span>{{ label }}</span>
    <span
      class="text-sm font-normal text-error"
      aria-hidden="true"
    >*</span>
    <span class="text-xs font-normal text-muted">обязательно</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
