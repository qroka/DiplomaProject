<template>
  <UHeader>
    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center gap-2 min-w-0 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-md"
        aria-label="На главную — Кадровый портал Администрации Сургутского района"
      >
        <AppLogo />
        <span class="font-bold text-lg text-highlighted truncate hidden sm:inline">
          Кадровый портал
        </span>
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="desktopNavItems"
      variant="link"
      color="primary"
      content-orientation="vertical"
      arrow
      class="hidden lg:flex"
      :ui="{
        link: 'font-medium',
        linkLabel: 'font-medium',
        childLink: 'items-start gap-2 font-medium',
        childLinkIcon: 'size-5 mt-0.5 text-dimmed shrink-0',
        childLinkWrapper: 'flex min-w-0 flex-col gap-0.5',
        childLinkLabel: 'font-medium',
        childLinkDescription: 'text-xs text-muted leading-snug whitespace-normal',
        viewport: 'p-1',
      }"
    />

    <template #right>
      <div class="flex items-center gap-1.5">
        <AppSearch />
        <AccessibilityPanel
          compact
          class="hidden sm:inline-flex"
          
        />
        <UColorModeButton />
        <UButton
          label="Вакансии"
          to="/vacancies"
          icon="i-lucide-briefcase"
          color="primary"
          size="md"
          class="hidden rounded-full lg:inline-flex"
        />
      </div>
    </template>

    <template #body>
      <UButton
        block
        variant="soft"
        color="neutral"
        icon="i-lucide-search"
        label="Поиск по порталу"
        class="mb-4"
        size="md"        
        @click="openSearch"
      />

      <UNavigationMenu
        :items="mobileNavItems"
        orientation="vertical"
        variant="link"
        color="primary"
        class="-mx-2.5"
        :ui="{
          link: 'font-medium',
          linkLabel: 'font-medium',
          childLink: 'items-start gap-2 py-2 font-medium',
          childLinkIcon: 'size-5 mt-0.5 text-dimmed shrink-0',
          childLinkWrapper: 'flex min-w-0 flex-col gap-0.5',
          childLinkLabel: 'font-medium',
          childLinkDescription: 'text-xs text-muted leading-snug',
        }"
      />

      <AccessibilityPanel class="mt-4" />

      <UButton
        label="Вакансии"
        to="/vacancies"
        icon="i-lucide-briefcase"
        color="primary"
        variant="solid"
        block
        class="mt-4 rounded-full"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import { buildDesktopNavItems, buildMobileNavItems } from '~/data/navigation'

const desktopNavItems = buildDesktopNavItems()
const mobileNavItems = buildMobileNavItems()
const { openSearch } = usePortalSearch()
</script>
