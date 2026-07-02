<template>
  <div
    class="overflow-hidden border-b border-default bg-default/75 backdrop-blur"
    :class="sticky ? 'sticky top-[var(--ui-header-height,4rem)] z-40' : undefined"
  >
    <div
      class="ds-container flex h-12 items-center max-lg:overflow-x-auto max-lg:overflow-y-hidden max-lg:scrollbar-none"
      role="navigation"
      aria-label="Навигация по разделу"
    >
      <UNavigationMenu
        :items="items"
        highlight
        highlight-color="primary"
        variant="link"
        class="flex-1 min-w-0 -mx-2.5 -mb-px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

withDefaults(defineProps<{
  items: NavigationMenuItem[]
  sticky?: boolean
}>(), {
  sticky: true,
})
</script>
