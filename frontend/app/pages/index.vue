<template>
  <div class="relative">
    <AppContainerGuides />

    <HomeHero />

    <PartnersLogos />

    <HomeHighlights />

    <HomeNews :posts="posts" />

    <HomeValuesBento />

    <VacancyCarousel
      title="Актуальные вакансии"
      subtitle="Открытые должности в администрации Сургутского района"
      :vacancies="vacanciesData ?? []"
      :pending="vacanciesPending"
    />

    <DsSection
      spacing="md"
      variant="muted"
    >
      <VacancySubscribeForm
        promo
        embedded
      />
    </DsSection>

    <DsSection spacing="md">
      <div class="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div>
          <DsSectionHeading
            title="Что важно знать перед откликом"
            description="Короткие ответы на вопросы, которые помогают принять решение о работе в администрации"
            heading-id="faq"
          />

          <UAccordion
            :items="FAQ_items"
            :ui="{
              root: 'flex flex-col gap-3',
              item: 'ds-surface ring-1 ring-border-default rounded-lg overflow-hidden',
              header: 'px-4 py-3 text-text-primary font-medium hover:bg-surface-sunken transition-colors duration-fast',
              body: 'px-4 pb-4 text-body text-text-secondary',
              trailingIcon: 'text-primary-500',
            }"
            multiple
          />
        </div>

        <aside
          class="rounded-2xl bg-surface-sunken p-6 ring-1 ring-border-default lg:sticky lg:top-24"
        >
          <UIcon
            name="i-lucide-message-circle"
            class="mb-4 size-8 text-primary-600 dark:text-primary-400"
            aria-hidden="true"
          />
          <h3 class="text-h3 text-text-primary">
            Не нашли нужного ответа?
          </h3>
          <p class="mt-2 text-body text-text-secondary text-pretty">
            Отдел кадров подскажет, какие документы нужны именно вам, и поможет выбрать подходящую роль — без формальных отписок.
          </p>
          <div class="mt-5 flex flex-col gap-3">
            <UButton
              label="Контакты"
              to="/contacts"
              color="primary"
              block
            />
            <UButton
              label="Обратная связь"
              to="/feedback"
              color="neutral"
              variant="outline"
              block
            />
          </div>
        </aside>
      </div>
    </DsSection>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Главная' })

const config = useRuntimeConfig()

const { data: vacanciesData, pending: vacanciesPending } = await useAsyncData('vacancies', () =>
  $fetch(`${config.public.apiBaseUrl}/api/vacancies/`), { server: false })

const { data: posts } = await useAsyncData('news-posts', () =>
  $fetch(`${config.public.apiBaseUrl}/api/news/`), { server: false })

const FAQ_items = [
  {
    label: 'Как устроиться на работу?',
    icon: 'i-lucide-file-text',
    content: 'Откройте раздел «Вакансии», выберите должность и заполните форму отклика. После отправки с вами свяжется специалист отдела кадров.',
  },
  {
    label: 'Какие преимущества у муниципальной службы?',
    icon: 'i-lucide-shield-check',
    content: 'Стабильная занятость, социальные гарантии, оплачиваемый отпуск и больничный, предсказуемый карьерный рост по установленным правилам и программы профессионального развития.',
  },
  {
    label: 'Оплачивается ли длительный больничный?',
    icon: 'i-lucide-heart-pulse',
    content: 'Да. Период нетрудоспособности оплачивается в соответствии с законодательством, рабочее место сохраняется. После выхода на работу нельзя понизить в должности из-за болезни.',
  },
  {
    label: 'Как устроены переработки?',
    icon: 'i-lucide-clock',
    content: 'Рабочий день нормирован. Переработки компенсируются деньгами или дополнительными выходными. Неоплачиваемые сверхурочные без согласия сотрудника не допускаются.',
  },
  {
    label: 'Какой у вас коллектив?',
    icon: 'i-lucide-users',
    content: 'Команда профессионалов, ориентированных на развитие района и поддержку жителей. Мы ценим взаимовыручку, наставничество и открытый диалог внутри коллектива.',
  },
]
</script>
