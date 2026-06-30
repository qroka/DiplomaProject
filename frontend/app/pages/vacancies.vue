<template>
  <div>
    <DsPageHero
      variant="inner"
      title="Вакансии"
      description="Актуальный перечень вакантных должностей в администрации Сургутского района"
      :image="hero.src"
      :image-alt="hero.alt"
    />

    <DsBreadcrumbs :items="breadcrumbItems" />

    <DsFilterBar
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
          color="secondary"
          variant="subtle"
          size="md"
        >
          Орган: {{ orgFilter }}
        </UBadge>
        <UButton
          label="Сбросить орган"
          color="neutral"
          variant="link"
          size="sm"
          @click="clearOrgFilter"
        />
      </div>
    </DsFilterBar>

    <div class="ds-container pb-4">
      <UButton
        label="Конкурсы на замещение должностей"
        to="/tenders"
        color="primary"
        variant="outline"
        trailing-icon="i-lucide-arrow-right"
        class="min-h-11 font-medium"
      />
    </div>

    <VacancyCards
      title="Актуальные вакансии"
      subtitle="Квалификационные требования, оплата труда и условия поступления на муниципальную службу"
      :vacancies="vacanciesData ?? []"
      :pending="pending"
      :skeleton-count="6"
    />

    <VacancySubscribeForm
      embedded
      :initial-branch="orgFilter"
    />
  </div>
</template>

<script setup lang="ts">
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Вакансии' })

const breadcrumbItems = buildBreadcrumbs({ label: 'Вакансии' })
const hero = useHeroImage('vacancies')

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
