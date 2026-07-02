<template>
  <section class="border-t border-default bg-default">
    <UContainer class="flex min-w-0 flex-col gap-8 py-12 sm:gap-10 sm:py-16 lg:py-20">
      <div class="flex max-w-2xl flex-col gap-3">
        <UBadge
          label="Принципы"
          color="primary"
          variant="subtle"
          class="w-fit rounded-full"
        />
        <h2
          id="values"
          class="text-balance text-xl font-bold tracking-tight text-highlighted sm:text-3xl lg:text-4xl"
        >
          Для нас муниципальная служба — это:
        </h2>
      </div>

      <div class="grid min-w-0 gap-4 lg:grid-cols-12">
        <div
          class="flex flex-col gap-2 lg:col-span-4"
          role="tablist"
          aria-label="Наши ценности"
        >
          <button
            v-for="value in values"
            :id="`value-tab-${value.id}`"
            :key="value.id"
            type="button"
            role="tab"
            :aria-selected="selectedId === value.id"
            aria-controls="values-panel"
          class="flex items-start gap-3 rounded-2xl border p-3 text-left transition motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-4 sm:p-4"
            :class="selectedId === value.id
              ? 'border-primary/50 bg-elevated'
              : 'border-default bg-default hover:border-primary/30 hover:bg-elevated/60'"
            @click="selectedId = value.id"
          >
            <span
              class="inline-flex size-10 shrink-0 items-center justify-center rounded-xl transition motion-reduce:transition-none"
              :class="selectedId === value.id
                ? 'bg-primary text-inverted'
                : 'bg-primary/10 text-primary'"
            >
              <UIcon
                :name="value.icon"
                class="size-5"
                aria-hidden="true"
              />
            </span>
            <span class="flex min-w-0 flex-col gap-1">
              <span class="font-semibold text-highlighted text-balance">
                {{ value.title }}
              </span>
              <span class="text-sm leading-5 text-muted text-pretty">
                {{ value.subtitle }}
              </span>
            </span>
          </button>
        </div>

        <article
          v-if="activeValue"
          id="values-panel"
          role="tabpanel"
          :aria-labelledby="`value-tab-${activeValue.id}`"
          class="flex flex-col gap-5 rounded-2xl border border-default bg-default p-4 sm:gap-6 sm:p-6 lg:col-span-8 lg:p-8"
        >
          <div class="flex flex-col gap-2">
            <p class="text-sm font-medium text-primary">
              {{ activeValue.subtitle }}
            </p>
            <h3 class="text-xl font-semibold text-highlighted sm:text-2xl">
              {{ activeValue.title }}
            </h3>
          </div>

          <p class="text-pretty leading-7 text-muted">
            {{ activeValue.intro }}
          </p>

          <ul class="flex flex-col gap-3">
            <li
              v-for="point in activeValue.points"
              :key="point"
              class="flex gap-3 text-pretty leading-7 text-muted"
            >
              <span
                class="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>{{ point }}</span>
            </li>
          </ul>

          <div
            v-if="activeValue.benefit || activeValue.footerLabel"
            class="rounded-xl border border-default bg-elevated/50 p-4 sm:p-5"
          >
            <p class="text-pretty leading-7 text-muted">
              <template v-if="activeValue.benefit">
                <span class="font-semibold text-highlighted">Что это даёт сотрудникам:</span>
                {{ ' ' }}{{ activeValue.benefit }}
              </template>
              <template v-else-if="activeValue.footerLabel">
                <span class="font-semibold text-highlighted">{{ activeValue.footerLabel }}</span>
                {{ ' ' }}{{ activeValue.footerText }}
              </template>
            </p>
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface ValueItem {
  id: string
  title: string
  subtitle: string
  intro: string
  points: string[]
  benefit?: string
  footerLabel?: string
  footerText?: string
  icon: string
}

const values: ValueItem[] = [
  {
    id: 'competence',
    title: 'Компетенция и опыт',
    subtitle: 'Опора на надёжность',
    intro: 'Мы работаем в сложных климатических и экономических условиях, где ошибки обходятся дорого. Поэтому мы:',
    points: [
      'ценим глубокие профессиональные знания и практический опыт',
      'инвестируем в обучение и развитие сотрудников: организуем тренинги, курсы повышения квалификации, стажировки в ведущих организациях',
      'создаём систему наставничества, чтобы передавать опыт от ветеранов отрасли молодым специалистам',
      'поощряем стремление к саморазвитию и профессиональному росту',
    ],
    benefit: 'уверенность в своих силах, возможность постоянно учиться, карьерный рост и признание заслуг.',
    icon: 'i-lucide-badge-check',
  },
  {
    id: 'unity',
    title: 'Сплочённость и доверие',
    subtitle: 'Сила команды Севера',
    intro: 'Суровый климат учит нас держаться вместе. Мы строим отношения на взаимном уважении и поддержке:',
    points: [
      'работаем как единая команда, где каждый готов прийти на помощь коллеге',
      'поддерживаем атмосферу взаимовыручки и солидарности',
      'ценим традиции коллектива и создаём новые, укрепляющие командный дух',
      'организуем корпоративные мероприятия и спортивные соревнования для сплочения команды',
    ],
    benefit: 'чувство принадлежности к сильной команде, поддержку в сложных ситуациях, дружескую атмосферу на работе.',
    icon: 'i-lucide-heart-handshake',
  },
  {
    id: 'goals',
    title: 'Чёткие задачи и цели',
    subtitle: 'Курс на развитие района',
    intro: 'Мы отвечаем за благополучие тысяч жителей Сургутского района, поэтому работаем системно и целенаправленно:',
    points: [
      'ставим ясные и измеримые цели для каждого подразделения и сотрудника',
      'выстраиваем прозрачные процессы планирования и отчётности',
      'фокусируемся на результатах, которые улучшают жизнь людей в районе',
      'регулярно пересматриваем приоритеты с учётом потребностей жителей и стратегических задач региона',
    ],
    benefit: 'понимание своей роли в общем деле, чёткие ориентиры для работы, возможность видеть реальный вклад в развитие района.',
    icon: 'i-lucide-target',
  },
  {
    id: 'openness',
    title: 'Открытость и коммуникации',
    subtitle: 'Диалог с жителями и внутри команды',
    intro: 'Администрация — связующее звено между властью и жителями. Мы строим работу на принципах прозрачности и диалога:',
    points: [
      'активно взаимодействуем с жителями через общественные советы, встречи и онлайн-платформы',
      'обеспечиваем прозрачность принимаемых решений и доступность информации',
      'поощряем инициативу и обратную связь внутри коллектива: каждый сотрудник может предложить идею по улучшению работы',
      'поддерживаем открытый диалог между подразделениями и руководством',
    ],
    footerLabel: 'Развиваем внутренние каналы коммуникации:',
    footerText: 'корпоративные чаты, информационные стенды, регулярные собрания.',
    icon: 'i-lucide-messages-square',
  },
]

const selectedId = ref(values[0]!.id)

const activeValue = computed(() => values.find(value => value.id === selectedId.value))
</script>
