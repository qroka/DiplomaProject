<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

useHead({ title: 'Конкурсы' })

const route = useRoute()
const router = useRouter()

type CompetitionTypeTab = 'all' | 'vacancy' | 'reserve'

const activeType = ref<CompetitionTypeTab>('all')

const typeTabItems: TabsItem[] = [
  { label: 'Все конкурсы', value: 'all', icon: 'i-lucide-layout-grid' },
  { label: 'На замещение должности', value: 'vacancy', icon: 'i-lucide-briefcase' },
  { label: 'На кадровый резерв', value: 'reserve', icon: 'i-lucide-users' },
]

const typeFilter = computed(() => (activeType.value === 'all' ? null : activeType.value))

function resolveTypeTab(value: unknown): CompetitionTypeTab {
  return value === 'vacancy' || value === 'reserve' ? value : 'all'
}

watch(
  () => route.query.type,
  (value) => {
    activeType.value = resolveTypeTab(value)
  },
  { immediate: true },
)

watch(activeType, (value) => {
  const nextQuery = { ...route.query }
  if (value === 'all') {
    delete nextQuery.type
  }
  else {
    nextQuery.type = value
  }
  if (route.query.type !== nextQuery.type) {
    router.replace({ query: nextQuery })
  }
})

onMounted(() => {
  if (route.query.tab === 'results') {
    nextTick(() => {
      document.getElementById('competition-results')?.scrollIntoView({ behavior: 'smooth' })
    })
  }
})

const activeSectionDescription = computed(() => {
  if (activeType.value === 'reserve') {
    return 'Конкурсы на включение в кадровый резерв администрации Сургутского района.'
  }
  if (activeType.value === 'vacancy') {
    return 'Конкурсы на замещение вакантных должностей муниципальной службы.'
  }
  return 'Действующие конкурсы на замещение вакантных должностей и на включение в кадровый резерв.'
})
</script>

<template>
  <DsStandardPage
    title="Конкурсы"
    description="На этой странице публикуется информация о действующих конкурсах: сроки приёма документов, требования, место и время подачи, контакты ответственных лиц. Результаты завершённых конкурсов — в отдельном разделе ниже."
  >
    <DsContentSection
      title="Действующие конкурсы"
      :description="activeSectionDescription"
      overline="Актуально"
      heading-id="active-competitions"
      spacing="lg"
    >
      <UTabs
        v-model="activeType"
        color="primary"
        variant="pill"
        size="lg"
        :content="false"
        :items="typeTabItems"
        :unmount-on-hide="false"
        class="w-full"
        aria-label="Фильтр по типу конкурса"
      />

      <ActiveCompetitions
        class="mt-6"
        :type-filter="typeFilter"
      />
    </DsContentSection>

    <DsContentSection
      title="Результаты конкурсов"
      description="Архив завершённых конкурсов: постановление о проведении и постановление о результатах. Форматы и размеры файлов соответствуют пункту 4.9 Распоряжения № 497-р, если иное не установлено Положением."
      overline="Архив"
      heading-id="competition-results"
      spacing="lg"
    >
      <CompetitionResultsList />
    </DsContentSection>

    <DsContentSection
      title="Документы"
      description="Нормативные и информационные материалы о проведении конкурсов в администрации района."
      overline="Материалы"
      heading-id="competition-rules"
      spacing="lg"
    >
      <CompetitionRulesList />
    </DsContentSection>

    <DsContentSection
      title="Связанные разделы"
      description="Открытые вакансии и программа кадрового резерва администрации Сургутского района"
      overline="Карьера"
      heading-id="tenders-related"
      spacing="lg"
    >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <UPageCard
          title="Вакансии"
          description="Актуальный перечень вакантных должностей в администрации Сургутского района."
          icon="i-lucide-briefcase"
          to="/vacancies"
          variant="subtle"
          class="h-full cursor-pointer"
          :ui="{
            root: 'h-full',
            container: 'h-full',
            wrapper: 'h-full',
          }"
        />

        <UPageCard
          title="Кадровый резерв"
          description="Как вступить в резерв и развивать карьеру в администрации района."
          icon="i-lucide-users"
          to="/staffreserve"
          variant="subtle"
          class="h-full cursor-pointer"
          :ui="{
            root: 'h-full',
            container: 'h-full',
            wrapper: 'h-full',
          }"
        />
      </div>
    </DsContentSection>
  </DsStandardPage>
</template>
