<template>
  <UHeader :ui="{ left: 'flex-shrink-0', center: 'min-w-0 overflow-x-auto' }">
    <!-- LEFT: Logo + Company Name -->
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-3 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 focus-visible:rounded-lg">
        <NuxtImg src="/logos/surrailogo.png" alt="На главную" class="h-8 w-auto flex-shrink-0" />
        <div class="font-semibold text-2xl tracking-tight">
          Кадровый портал
          <span class="text-sm text-gray-500 dark:text-gray-400 font-normal block -mt-1">Сургутского района</span>
        </div>
      </NuxtLink>
    </template>

    <!-- DEFAULT (CENTER): Navigation Menu -->
    <UNavigationMenu
      :items="items"
      variant="link"
      class="hidden md:flex"
    />

    <!-- RIGHT: Action Buttons -->
    <template #right>
      <UButton
        label="Фидбэк"
        color="neutral"
        variant="ghost"
        size="sm"
        to="/feedback"
        class="ml-2"
      />
      <UColorModeButton class="ml-2" />
    </template>

    <!-- Mobile Menu (when screen is small) -->
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        label="Смотреть вакансии"
        color="primary"
        block
        class="mt-4"
        to="/vacancies"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const items = [
  { label: 'Главная', to: '/' },
  { label: 'О нас', to: '/about' },
  { label: 'Вакансии', to: '/vacancies' },
  { label: 'Контакты', to: '/contacts' },
  { label: 'Конкурсы', to: '/tenders' },
  { label: 'Нет коррупции!', to: '/anti-corruption' }
]
</script>