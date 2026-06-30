<template>
  <DsPageHero
    variant="home"
    title="Успешная команда - успешный район"
    description="Отправьте резюме через раздел «Вакансии» — специалист свяжется с вами для консультации"
    button-label="Наши вакансии"
    button-link="/vacancies"
    :image="hero.src"
    :image-alt="hero.alt"
  />

  <PartnersLogos />

  <DsSection spacing="md">
    <DsSectionHeading
      title="Новости"
      description="Коротко о наших текущих мероприятиях"
      heading-id="news"
    />

    <UBlogPosts
      v-if="posts?.length"
      class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
    >
      <UBlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :image="post.imageUrl"
        :ui="{
          root: 'bg-secondary-500 ring-1 ring-border-default',
          title: 'text-white',
          description: 'text-white/80',
          date: 'text-white/60',
        }"
      />
    </UBlogPosts>

    <DsEmptyState
      v-else
      icon="i-lucide-newspaper"
      title="Новости скоро появятся"
      description="Мы готовим материалы о мероприятиях и достижениях команды"
    />
  </DsSection>

  <DsSection
    spacing="md"
    variant="muted"
  >
    <DsSectionHeading
      title="Наши ценности"
      description="Принципы, на которых строится работа администрации Сургутского района"
      heading-id="values"
    />

    <UTabs
      v-model="activeValueTab"
      color="primary"
      variant="pill"
      size="lg"
      :items="valueTabs"
      :unmount-on-hide="false"
      class="w-full"
    >
      <template #content="{ item }">
        <DsSurface
          elevation="sm"
          padding="lg"
          class="mt-6"
        >
          <h3 class="text-h3 text-text-primary mb-2">
            {{ item.label }}
          </h3>
          <p class="text-body font-medium text-text-accent mb-4">
            {{ item.subtitle }}
          </p>
          <p class="text-body text-text-secondary mb-4">
            {{ item.intro }}
          </p>
          <ul class="space-y-2 mb-6">
            <li
              v-for="point in item.points"
              :key="point"
              class="flex gap-2 text-body text-text-secondary"
            >
              <UIcon
                name="i-lucide-check"
                class="h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{{ point }}</span>
            </li>
          </ul>
          <p class="text-overline uppercase tracking-wide text-text-muted mb-2">
            Что это даёт сотрудникам
          </p>
          <p class="text-body text-text-primary">
            {{ item.benefit }}
          </p>
        </DsSurface>
      </template>
    </UTabs>
  </DsSection>

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
    <VacancySubscribeForm promo />
  </DsSection>

  <DsSection spacing="md">
    <DsSectionHeading
      title="Часто задаваемые вопросы"
      description="Ответы на популярные вопросы о работе в администрации района"
      heading-id="faq"
    />

    <UAccordion
      :items="FAQ_items"
      :ui="{
        wrapper: 'flex flex-col gap-3',
        item: 'ds-surface ring-1 ring-border-default rounded-lg overflow-hidden',
        header: 'px-4 py-3 text-text-primary font-medium hover:bg-surface-sunken transition-colors duration-fast min-h-11',
        body: 'px-4 pb-4 text-body text-text-secondary',
        trailing: 'text-primary-500',
      }"
      multiple
    />
  </DsSection>
</template>

<script setup>
useHead({ title: 'Главная' })

const hero = useHeroImage('home')
const config = useRuntimeConfig()
const { data: vacanciesData, pending: vacanciesPending } = await useAsyncData('vacancies', () =>
  $fetch(`${config.public.apiBaseUrl}/api/vacancies/`), { server: false })
const activeValueTab = ref('competence')

const valueTabs = [
  {
    label: 'Компетенция и опыт',
    value: 'competence',
    subtitle: 'Опора на надёжность',
    intro: 'Мы работаем в сложных климатических и экономических условиях, где ошибки обходятся дорого. Поэтому мы:',
    points: [
      'ценим глубокие профессиональные знания и практический опыт',
      'инвестируем в обучение и развитие сотрудников: организуем тренинги, курсы повышения квалификации, стажировки в ведущих организациях',
      'создаём систему наставничества, чтобы передавать опыт от ветеранов отрасли молодым специалистам',
      'поощряем стремление к саморазвитию и профессиональному росту',
    ],
    benefit: 'Уверенность в своих силах, возможность постоянно учиться, карьерный рост и признание заслуг.',
  },
  {
    label: 'Сплочённость и доверие',
    value: 'unity',
    subtitle: 'Сила команды Севера',
    intro: 'Суровый климат учит нас держаться вместе. Мы строим отношения на взаимном уважении и поддержке:',
    points: [
      'работаем как единая команда, где каждый готов прийти на помощь коллеге',
      'поддерживаем атмосферу взаимовыручки и солидарности',
      'ценим традиции коллектива и создаём новые, укрепляющие командный дух',
      'организуем корпоративные мероприятия и спортивные соревнования для сплочения команды',
    ],
    benefit: 'Чувство принадлежности к сильной команде, поддержку в сложных ситуациях, дружескую атмосферу на работе.',
  },
  {
    label: 'Чёткие задачи и цели',
    value: 'goals',
    subtitle: 'Курс на развитие района',
    intro: 'Мы отвечаем за благополучие тысяч жителей Сургутского района, поэтому работаем системно и целенаправленно:',
    points: [
      'ставим ясные и измеримые цели для каждого подразделения и сотрудника',
      'выстраиваем прозрачные процессы планирования и отчётности',
      'фокусируемся на результатах, которые улучшают жизнь людей в районе',
      'регулярно пересматриваем приоритеты с учётом потребностей жителей и стратегических задач региона',
    ],
    benefit: 'Понимание своей роли в общем деле, чёткие ориентиры для работы, возможность видеть реальный вклад в развитие района.',
  },
  {
    label: 'Открытость и коммуникации',
    value: 'openness',
    subtitle: 'Диалог с жителями и внутри команды',
    intro: 'Администрация — связующее звено между властью и жителями. Мы строим работу на принципах прозрачности и диалога:',
    points: [
      'активно взаимодействуем с жителями через общественные советы, встречи, онлайн-платформы',
      'обеспечиваем прозрачность принимаемых решений и доступность информации',
      'поощряем инициативу и обратную связь внутри коллектива: каждый сотрудник может предложить идею по улучшению работы',
      'развиваем внутренние каналы коммуникации: корпоративные чаты, информационные стенды, регулярные собрания',
    ],
    benefit: 'Участие в принятии решений, открытый диалог с руководством и жителями, возможность влиять на развитие района.',
  },
]

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
