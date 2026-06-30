<template>
  <section>
    <UContainer class="flex flex-col gap-10 py-16 lg:py-20">
      <div class="flex max-w-2xl flex-col gap-3">
        <UBadge
          label="Преимущества"
          color="primary"
          variant="subtle"
          class="w-fit rounded-full"
        />
        <h2 class="text-3xl font-bold tracking-tight text-highlighted text-balance sm:text-4xl">
          Почему выбирают нас
        </h2>
        <p class="text-pretty text-lg leading-8 text-muted">
          Стабильность, развитие и команда — три опоры, на которых строится работа в администрации района.
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-3 sm:gap-5">
        <article
          v-for="item in items"
          :key="item.title"
          class="group flex flex-col gap-4 rounded-2xl border border-default bg-default p-5 transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none"
        >
          <div class="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-inverted">
            <UIcon
              :name="item.icon"
              class="size-5"
              aria-hidden="true"
            />
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-semibold text-highlighted">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-6 text-muted text-pretty">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Стабильная занятость',
    description: 'Муниципальная служба с социальными гарантиями и предсказуемым графиком.',
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: 'Развитие и обучение',
    description: 'Курсы, наставничество и программы повышения квалификации для сотрудников.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Сильная команда',
    description: 'Сплочённый коллектив, ориентированный на развитие района и поддержку жителей.',
  },
]
</script>
