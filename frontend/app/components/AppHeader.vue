<template>
  <UHeader :ui="{ left: 'flex-shrink-0', center: 'min-w-0', right: 'gap-1 shrink-0' }">
    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center gap-3 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-focus-ring focus-visible:outline-offset-2 focus-visible:rounded-lg"
      >
        <NuxtImg
          src="/logos/surrailogo.png"
          alt="На главную"
          class="h-8 w-auto shrink-0"
        />
        <div class="hidden sm:block">
          <div class="font-semibold text-lg lg:text-xl tracking-tight text-text-primary leading-tight">
            Кадровый портал
          </div>
          <span class="text-caption text-text-muted">Сургутского района</span>
        </div>
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="desktopNavItems"
      variant="link"
      class="hidden lg:flex"
      :ui="{ link: 'text-sm font-medium' }"
    />

    <template #right>
      <AppSearch />
      <UButton
        label="Вакансии"
        to="/vacancies"
        color="primary"
        variant="solid"
        size="sm"
        class="hidden lg:inline-flex min-h-11 font-medium"
      />
      <AccessibilityPanel
        compact
        class="hidden sm:inline-flex"
      />
      <UButton
        label="Фидбэк"
        color="neutral"
        variant="ghost"
        size="sm"
        to="/feedback"
        class="hidden md:inline-flex min-h-11"
      />
      <UColorModeButton class="min-h-11" />
    </template>

    <template #body>
      <UNavigationMenu
        :items="mobileNavItems"
        orientation="vertical"
        class="-mx-2.5"
      />
      <AccessibilityPanel class="mt-4" />
      <UButton
        label="Вакансии"
        color="primary"
        variant="solid"
        block
        class="mt-4 min-h-11 font-medium"
        to="/vacancies"
      />
      <UButton
        label="Фидбэк"
        color="neutral"
        variant="outline"
        block
        class="mt-2 min-h-11"
        to="/feedback"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import { buildDesktopNavItems, buildMobileNavItems } from '~/data/navigation'

const desktopNavItems = buildDesktopNavItems()
const mobileNavItems = buildMobileNavItems()
</script>
