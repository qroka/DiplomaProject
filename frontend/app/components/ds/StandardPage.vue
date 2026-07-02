<template>
  <div>
    <DsSectionToolbar
      v-if="sectionNavItems.length"
      :items="sectionNavItems"
    />

    <DsStandardPageHeader
      :title="title"
      :description="description"
      :headline="badge"
    >
      <template
        v-if="$slots.heroActions"
        #actions
      >
        <slot name="heroActions" />
      </template>
    </DsStandardPageHeader>

    <div class="ds-container py-6 lg:py-10">
      <div
        class="lg:grid lg:items-start lg:gap-10 xl:gap-12"
        :class="tocLinks.length ? 'lg:grid-cols-[minmax(0,1fr)_17rem] xl:grid-cols-[minmax(0,1fr)_20rem]' : undefined"
      >
        <main class="w-full min-w-0">
          <p
            v-if="intro"
            class="text-body-lg text-text-secondary leading-relaxed text-pretty mb-8 lg:mb-10"
          >
            {{ intro }}
          </p>

          <div class="space-y-10 lg:space-y-12">
            <slot />
          </div>
        </main>

        <DsPageTocAside
          v-if="tocLinks.length"
          :links="tocLinks"
          :has-section-toolbar="sectionNavItems.length > 0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provideStandardPageToc } from '~/composables/useStandardPageToc'
import { resolveSidebarLinks, toNavigationMenuItems } from '~/data/standard-pages'

withDefaults(defineProps<{
  title: string
  description?: string
  intro?: string
  badge?: string
}>(), {
  description: undefined,
  intro: undefined,
  badge: undefined,
})

const route = useRoute()
const { tocLinks } = provideStandardPageToc()

const sectionNav = computed(() => resolveSidebarLinks(route.path))

const sectionNavItems = computed(() => {
  if (!sectionNav.value || sectionNav.value.links.length <= 1) {
    return []
  }
  return toNavigationMenuItems(sectionNav.value.links)
})
</script>
