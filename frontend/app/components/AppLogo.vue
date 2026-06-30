<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    class="shrink-0 text-primary"
  >
    <path
      :d="logoAsrPath"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { logoAsrPath } from '~/data/logo'

withDefaults(defineProps<{
  size?: number | string
}>(), {
  size: 24,
})
</script>
