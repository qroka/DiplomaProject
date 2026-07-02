<template>
  <UPageAside
    v-if="links.length"
    :ui="{
      root: asideRootClass,
    }"
  >
    <UContentToc
      :key="linksKey"
      title="На этой странице"
      highlight
      color="primary"
      :links="links"
      :ui="{
        root: 'static z-auto overflow-visible max-h-none',
        container: 'py-0 lg:py-2 border-0',
        linkText: 'text-pretty leading-snug',
      }"
    />
  </UPageAside>
</template>

<script setup lang="ts">
import type { ContentTocLink } from '@nuxt/ui'

const props = defineProps<{
  links: ContentTocLink[]
  hasSectionToolbar?: boolean
}>()

const linksKey = computed(() => props.links.map(link => link.id).join('|'))

const asideRootClass = computed(() => {
  const base = 'hidden overflow-y-auto lg:block lg:sticky py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5'

  if (props.hasSectionToolbar) {
    return `${base} lg:top-[calc(var(--ui-header-height,4rem)+3rem)] lg:max-h-[calc(100vh-var(--ui-header-height,4rem)-3rem)]`
  }

  return `${base} lg:top-(--ui-header-height) lg:max-h-[calc(100vh-var(--ui-header-height))]`
})
</script>
