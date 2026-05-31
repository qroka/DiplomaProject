<template>
  <UHeader>
    <!-- LEFT: Logo + Company Name -->
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-3">
        <NuxtImg src="/logos/surrailogo.png" class="h-8 w-auto" />
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

    <!-- RIGHT: Action Button -->
    <template #right>
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
  { label: 'Противодействие коррупции', to: '/anti-corruption' }
]
</script>