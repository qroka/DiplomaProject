<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import type { TrainingEvent } from '~/components/TrainingEventsList.vue'

useHead({ title: 'Профессиональное развитие' })

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

type ProfdevTab = 'all' | 'training' | 'leadership' | 'masterclass' | 'best_practice' | 'feedback'

const activeTab = ref<ProfdevTab>('all')

const tabItems: TabsItem[] = [
  { label: 'Все', value: 'all', icon: 'i-lucide-layout-grid' },
  { label: 'Обучение', value: 'training', icon: 'i-lucide-graduation-cap' },
  { label: 'Встречи', value: 'leadership', icon: 'i-lucide-users' },
  { label: 'Мастер-классы', value: 'masterclass', icon: 'i-lucide-presentation' },
  { label: 'Лучшие практики', value: 'best_practice', icon: 'i-lucide-award' },
  { label: 'Обратная связь', value: 'feedback', icon: 'i-lucide-message-square-plus' },
]

function resolveTab(value: unknown): ProfdevTab {
  const allowed: ProfdevTab[] = ['all', 'training', 'leadership', 'masterclass', 'best_practice', 'feedback']
  return allowed.includes(value as ProfdevTab) ? value as ProfdevTab : 'all'
}

watch(
  () => route.query.tab,
  (value) => {
    activeTab.value = resolveTab(value)
  },
  { immediate: true },
)

watch(activeTab, (value) => {
  const nextQuery = { ...route.query }
  if (value === 'all') {
    delete nextQuery.tab
  }
  else {
    nextQuery.tab = value
  }
  if (route.query.tab !== nextQuery.tab) {
    router.replace({ query: nextQuery })
  }
})

const { data: events, pending } = await useAsyncData('training-events', () =>
  $fetch<TrainingEvent[]>(`${config.public.apiBaseUrl}/api/training-events/`), {
  server: false,
})

function filterEventsByTab(tab: ProfdevTab) {
  const items = events.value ?? []
  if (tab === 'feedback') return []
  if (tab === 'all') return items
  return items.filter(event => event.event_type === tab)
}

function sectionMetaForTab(tab: ProfdevTab) {
  switch (tab) {
    case 'training':
      return {
        title: 'Обучающие мероприятия',
        description: 'Программы повышения квалификации и профессиональные курсы для сотрудников администрации района.',
        overline: 'Обучение',
      }
    case 'leadership':
      return {
        title: 'Встречи с руководством',
        description: 'Диалоги с руководителями администрации: актуальные вопросы, обмен опытом и обратная связь.',
        overline: 'Встречи',
      }
    case 'masterclass':
      return {
        title: 'Мастер-классы',
        description: 'Практические занятия и разбор кейсов от специалистов отраслевых органов.',
        overline: 'Мастер-классы',
      }
    case 'best_practice':
      return {
        title: 'Лучшие практики',
        description: 'Успешные подходы и решения, которыми делятся команды администрации Сургутского района.',
        overline: 'Практики',
      }
    case 'feedback':
      return {
        title: 'Предложения по организации обучения',
        description: 'Поделитесь идеями по темам, форматам и расписанию мероприятий. Форма не предназначена для подачи официальных обращений.',
        overline: 'Обратная связь',
      }
    default:
      return {
        title: 'Расписание мероприятий',
        description: 'Перечень и расписание обучающих мероприятий, встреч с руководством, мастер-классов и лучших практик для сотрудников администрации.',
        overline: 'Расписание',
      }
  }
}
</script>

<template>
  <DsStandardPage
    title="Профессиональное развитие"
    description="Раздел для действующих сотрудников администрации Сургутского района: расписание обучающих программ, встреч с руководством, мастер-классов и лучших практик, а также форма предложений по организации обучения."
  >
    <UTabs
      v-model="activeTab"
      color="primary"
      variant="pill"
      size="lg"
      :items="tabItems"
      :unmount-on-hide="false"
      class="w-full"
    >
      <template #content="{ item }">
        <div class="mt-6">
          <DsContentSection
            :title="sectionMetaForTab(item.value as ProfdevTab).title"
            :description="sectionMetaForTab(item.value as ProfdevTab).description"
            :overline="sectionMetaForTab(item.value as ProfdevTab).overline"
            :heading-id="`profdev-${item.value}`"
            spacing="lg"
          >
            <TrainingEventsList
              v-if="item.value !== 'feedback'"
              :events="filterEventsByTab(item.value as ProfdevTab)"
              :pending="pending"
              :show-type-badge="item.value === 'all'"
              :empty-title="item.value === 'all'
                ? 'Мероприятия пока не запланированы'
                : 'В этой категории пока нет мероприятий'"
              :empty-description="item.value === 'all'
                ? 'Загляните позже — расписание обновляется по мере появления новых программ.'
                : 'Попробуйте другую вкладку или загляните позже.'"
            />

            <TrainingFeedbackForm v-else />
          </DsContentSection>
        </div>
      </template>
    </UTabs>
  </DsStandardPage>
</template>
