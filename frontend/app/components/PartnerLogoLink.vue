<template>
  <NuxtLink
    :to="logo.url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col items-center gap-4 rounded-2xl border border-default bg-default p-5 text-center transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none"
    :class="$attrs.class"
  >
    <div class="flex h-14 w-full items-center justify-center">
      <img
        :src="logo.image"
        :alt="logo.alt"
        width="56"
        height="56"
        loading="lazy"
        class="max-h-12 max-w-full object-contain opacity-80 transition group-hover:opacity-100 motion-reduce:transition-none"
      >
    </div>

    <span class="text-sm font-medium leading-snug text-highlighted">
      {{ logo.alt }}
    </span>
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
