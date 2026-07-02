<template>
  <section class="relative isolate overflow-hidden border-b border-default bg-default">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_50%_-10%,--alpha(var(--ui-primary)/14%),transparent_60%)]"
      aria-hidden="true"
    />

    <UContainer class="relative flex min-h-[calc(100dvh-var(--ui-header-height,4rem))] flex-col justify-center gap-14 py-16 lg:py-24">
      <!-- Centered headline block -->
      <div class="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <UBadge
          label="Кадровый портал администрации Сургутского района"
          color="primary"
          variant="subtle"
          size="lg"
          class="rounded-full"
        />

        <h1 class="text-balance text-4xl font-bold tracking-tight text-highlighted sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          Успешная команда 
          <span class="text-primary">успешный район</span>
        </h1>

        <p class="max-w-xl text-pretty text-lg leading-8 text-muted">
          Вакансии, кадровый резерв и развитие для тех, кто работает на жителей Сургутского района — рядом с домом, с понятными условиями и предсказуемым ростом.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <UButton
            label="Стать частью команды"
            to="/vacancies"
            icon="i-lucide-briefcase"
            size="xl"
            class="rounded-full"
          />
          <UButton
            label="Узнать больше"
            to="/about"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-arrow-up-right"
            size="xl"
            class="rounded-full"
          />
        </div>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="relative h-[420px] w-full overflow-hidden rounded-2xl border border-default">
          <img
            src="/images/Picture.png"
            alt="Команда администрации Сургутского района"
            width="1408"
            height="420"
            loading="eager"
            class="block size-full object-cover"
          >
          <div class="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-default/85 px-3 py-1.5 text-xs font-medium text-highlighted backdrop-blur-md">
            <span class="relative flex size-2">
              <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:hidden" />
              <span class="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Сейчас в команде 420+ человек
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
