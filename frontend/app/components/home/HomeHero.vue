<template>
  <section class="relative isolate overflow-hidden border-b border-default bg-default">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_50%_-10%,--alpha(var(--ui-primary)/14%),transparent_60%)]"
      aria-hidden="true"
    />

    <UContainer class="relative flex min-w-0 flex-col justify-center gap-10 py-12 sm:gap-14 sm:py-16 lg:min-h-[calc(100dvh-var(--ui-header-height,4rem))] lg:py-24">
      <!-- Centered headline block -->
      <div class="mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center gap-5 text-center sm:gap-6">
        <UBadge
          label="Кадровый портал администрации Сургутского района"
          color="primary"
          variant="subtle"
          size="lg"
          class="max-w-full rounded-full whitespace-normal text-center leading-snug"
        />

        <h1 class="text-balance text-3xl font-bold tracking-tight text-highlighted sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          Успешная команда 
          <span class="text-primary">успешный район</span>
        </h1>

        <p class="max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Вакансии, кадровый резерв и развитие для тех, кто работает на жителей Сургутского района — рядом с домом, с понятными условиями и предсказуемым ростом.
        </p>

        <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <UButton
            label="Стать частью команды"
            to="/vacancies"
            icon="i-lucide-briefcase"
            size="xl"
            class="w-full justify-center rounded-full sm:w-auto"
          />
          <UButton
            label="Узнать больше"
            to="/about"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-arrow-up-right"
            size="xl"
            class="w-full justify-center rounded-full sm:w-auto"
          />
        </div>
      </div>

      <div class="flex w-full min-w-0 flex-col gap-4">
        <div class="relative h-52 w-full overflow-hidden rounded-2xl border border-default sm:h-72 lg:h-[420px]">
          <img
            src="/images/Picture.png"
            alt="Команда администрации Сургутского района"
            width="1408"
            height="420"
            loading="eager"
            class="block size-full object-cover"
          >
          <div class="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-default/85 px-3 py-1.5 text-xs font-medium text-highlighted backdrop-blur-md sm:left-4 sm:top-4">
            <span class="relative flex size-2 shrink-0">
              <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:hidden" />
              <span class="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span class="text-pretty leading-4">
              Сейчас в команде 420+ человек
            </span>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
            v-for="item in careerItems"
            :key="item.to"
            :to="item.to"
            class="group flex flex-col gap-4 rounded-2xl border border-default bg-default p-5 transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none"
          >
            <div class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-inverted">
              <UIcon
                :name="item.icon"
                class="size-5"
                aria-hidden="true"
              />
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="font-semibold text-highlighted">
                {{ item.label }}
              </h2>
              <p class="text-sm leading-6 text-muted">
                {{ item.description }}
              </p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Перейти
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 transition group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { navIcons } from '~/data/navigation'

const careerItems = [
  {
    label: 'Вакансии',
    description: 'Актуальные должности в администрации района и форма отклика на сайте.',
    to: '/vacancies',
    icon: navIcons['/vacancies'],
  },
  {
    label: 'Молодёжь',
    description: 'Стажировки и первые профессиональные шаги.',
    to: '/youth',
    icon: navIcons['/youth'],
  },
  {
    label: 'Кадровый резерв',
    description: 'Путь для тех, кто планирует рост в муниципальной службе.',
    to: '/staffreserve',
    icon: navIcons['/staffreserve'],
  },
  {
    label: 'Профразвитие',
    description: 'Обучение, повышение квалификации и наставничество.',
    to: '/profdev',
    icon: navIcons['/profdev'],
  },
]
</script>
