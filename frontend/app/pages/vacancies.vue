<script setup lang="ts">
useHead({ title: 'Вакансии' })

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

const filters = reactive<Record<string, string | number | null>>({})

const vacancyFilterDefs = [
  { field: 'work_schedule', label: 'График работы' },
  { field: 'required_experience', label: 'Опыт работы' },
  { field: 'job_type', label: 'Тип должности' },
]

const orgFilter = computed(() => {
  const org = route.query.org
  return typeof org === 'string' ? decodeURIComponent(org) : ''
})

const { data: vacanciesData, refresh, pending } = await useAsyncData('vacancies-page', () => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, val]) => {
    if (val != null) params.append(key, String(val))
  })
  if (orgFilter.value) params.append('org', orgFilter.value)
  const queryString = params.toString()
  const url = `${config.public.apiBaseUrl}/api/vacancies/${queryString ? `?${queryString}` : ''}`
  return $fetch(url)
}, { server: false, watch: [orgFilter] })

function onFiltersChange(newFilters: Record<string, number | string | null>) {
  Object.keys(filters).forEach(k => delete filters[k])
  Object.assign(filters, newFilters)
  refresh()
}

function onFiltersReset() {
  Object.keys(filters).forEach(k => delete filters[k])
  refresh()
}

function clearOrgFilter() {
  router.push({ path: '/vacancies', query: { ...route.query, org: undefined } })
}
</script>

<template>
  <DsStandardPage
    title="Вакансии"
    description="Актуальный перечень вакантных должностей в администрации Сургутского района. Квалификационные требования, оплата труда и условия поступления на муниципальную службу — в одном разделе."
  >
    <DsContentSection
      title="Актуальные вакансии"
      description="Выберите подходящую должность, уточните условия и откликнитесь онлайн"
      overline="Вакансии"
      heading-id="vacancies-list"
      spacing="lg"
    >
      <div class="space-y-6">
        <DsSurface
          elevation="none"
          padding="lg"
          class="w-full"
        >
          <DsFilterBar
            embedded
            :filter-defs="vacancyFilterDefs"
            :total="vacanciesData?.length ?? 0"
            @change="onFiltersChange"
            @reset="onFiltersReset"
          >
            <div
              v-if="orgFilter"
              class="mt-4 flex flex-wrap items-center gap-2"
            >
              <UBadge
                color="neutral"
                variant="subtle"
                size="lg"
              >
                Орган: {{ orgFilter }}
              </UBadge>
              <UButton
                label="Сбросить орган"
                color="neutral"
                variant="link"
                size="lg"
                @click="clearOrgFilter"
              />
            </div>
          </DsFilterBar>
        </DsSurface>

        <VacancyCards
          embedded
          title=""
          :vacancies="vacanciesData ?? []"
          :pending="pending"
          :skeleton-count="6"
        />
      </div>
    </DsContentSection>

    <DsContentSection
      heading-id="vacancies-subscribe"
      toc-label="Подписка на вакансии"
      spacing="lg"
    >
      <VacancySubscribeForm
        block
        heading-id="vacancies-subscribe"
        :initial-branch="orgFilter"
      />
    </DsContentSection>

    <DsContentSection
      title="Документы"
      description="Нормативные и информационные материалы о поступлении на муниципальную службу и работе с вакансиями администрации Сургутского района."
      overline="Материалы"
      heading-id="vacancies-documents"
      spacing="lg"
    >
      <VacancyDocumentsList />
    </DsContentSection>

    <DsContentSection
      title="Связанные разделы"
      description="Конкурсы на замещение должностей и программа кадрового резерва администрации Сургутского района"
      overline="Карьера"
      heading-id="vacancies-related"
      spacing="lg"
    >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <UPageCard
          title="Конкурсы"
          description="Действующие конкурсы на замещение вакантных должностей и на включение в кадровый резерв."
          icon="i-lucide-clipboard-list"
          to="/tenders"
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
