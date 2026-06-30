<template>
  <NuxtLink
    :to="logo.url"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center justify-center p-4 rounded-lg bg-surface-raised border border-border-default hover:shadow-sm transition-[box-shadow,transform] duration-fast hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-focus-ring focus-visible:outline-offset-2"
    :class="$attrs.class"
  >
    <img
      :src="logo.image"
      :alt="logo.alt"
      class="h-12 w-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
    >
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  logo: {
    url: string
    image: string
    alt: string
  }
}>()

defineOptions({ inheritAttrs: false })
</script>
