<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'
import { footerNavItems } from '~/data/navigation'

const columns: FooterColumn[] = [
  {
    label: 'Навигация',
    children: footerNavItems.map(item => ({ label: item.label, to: item.to })),
  },
  {
    label: 'Ресурсы',
    children: [
      { label: 'ФСС России', to: 'https://lk.fss.ru/', target: '_blank' },
      { label: 'Минтруд России', to: 'https://mintrud.gov.ru', target: '_blank' },
      { label: 'Администрация Сургутского района', to: 'https://admsr.ru', target: '_blank' },
      { label: 'Администрация г. Сургута', to: 'https://depgs.admhmao.ru', target: '_blank' }
    ]
  },
  {
    label: 'Документы',
    children: [
      { label: 'Политика конфиденциальности', to: '/privacy' },
      { label: 'Анти-коррупционная политика', to: '/anti-corruption' }
    ]
  }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <USeparator
    type="dashed"
    class="border-gray-300 h-px my-2"
  />

  <UFooter :ui="{ root: 'bg-transparent', top: 'border-b border-gray-300 dark:border-gray-700 py-6 lg:py-4', bottom: 'py-6 lg:py-4' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns" />
      </UContainer>
    </template>

    <template #left>
      <div class="space-y-2">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          © {{ currentYear }} Администрация Сургутского района
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-500">
          628400, ХМАО-Югра, г. Сургут, ул. Энергетиков, 22
        </p>
      </div>
    </template>

    <template #right>
      <div class="flex items-center gap-2">
        <UButton
          to="https://vk.com/admsr"
          target="_blank"
          icon="i-simple-icons-vk"
          aria-label="ВКонтакте"
          color="neutral"
          variant="ghost"
          size="sm"
        />
        <UButton
          to="https://t.me/admsr_official"
          target="_blank"
          icon="i-simple-icons-telegram"
          aria-label="Telegram"
          color="neutral"
          variant="ghost"
          size="sm"
        />
        <UButton
          to="https://ok.ru/group/admsr"
          target="_blank"
          icon="i-simple-icons-odnoklassniki"
          aria-label="Одноклассники"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </div>
    </template>

    <template #bottom>
      <UContainer class="text-center">
        <p class="text-xs text-gray-500 dark:text-gray-500">
          Телефон: +7 (3462) 52-00-00 | Email: info@admsr.ru
          <br>
          Режим работы: Пн-Чт 9:00-18:00, Пт 9:00-17:00
        </p>
      </UContainer>
    </template>
  </UFooter>
</template>
