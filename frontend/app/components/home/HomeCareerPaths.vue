<template>
  <DsSection
    spacing="md"
    variant="muted"
  >
    <DsSectionHeading
      title="Куда расти в команде"
      description="Выберите траекторию — каждая ведёт к реальной роли в районе, а не к абстрактному «следующему шагу»"
      heading-id="career"
    />

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <NuxtLink
        v-for="path in paths"
        :key="path.to"
        :to="path.to"
        class="group flex flex-col rounded-xl bg-surface-raised p-5 ring-1 ring-border-default transition-[box-shadow,transform,border-color] duration-300 hover:ring-primary-500/30 hover:shadow-md hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        <div
          class="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-surface-sunken text-primary-600 transition-colors group-hover:bg-primary-500/10 dark:text-primary-400"
        >
          <UIcon
            :name="path.icon"
            class="size-5"
            aria-hidden="true"
          />
        </div>
        <h3 class="text-h3 text-text-primary">
          {{ path.label }}
        </h3>
        <p class="mt-2 flex-1 text-body text-text-secondary text-pretty">
          {{ path.description }}
        </p>
        <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 transition group-hover:opacity-100 motion-reduce:opacity-100">
          Перейти
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </NuxtLink>
    </div>
  </DsSection>
</template>

<script setup lang="ts">
import { navIcons } from '~/data/navigation'

const paths = [
  {
    label: 'Конкурсы',
    to: '/tenders',
    description: 'Открытые конкурсы на замещение должностей — прозрачный путь занять вакансию без связей.',
    icon: navIcons['/tenders'],
  },
  {
    label: 'Кадровый резерв',
    to: '/staffreserve',
    description: 'Подготовка к роли руководителя: программа, наставник и измеримые шаги роста.',
    icon: navIcons['/staffreserve'],
  },
  {
    label: 'Молодёжи',
    to: '/youth',
    description: 'Стажировки рядом с домом — первый опыт в муниципальной службе без переезда.',
    icon: navIcons['/youth'],
  },
  {
    label: 'Профразвитие',
    to: '/profdev',
    description: 'Обучение и наставники, которые помогают расти в профессии, а не «для галочки».',
    icon: navIcons['/profdev'],
  },
]
</script>
