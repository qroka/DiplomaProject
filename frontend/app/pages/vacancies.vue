<template>
  <PageHeroElse
      title="Наша команда"
      description="Познакомьтесь с нашей командой!"
      image="/images/office.png"
      image-alt="Office workspace"
  />

  <div class="flex flex-wrap gap-4 justify-center mb-8">
    <DropdownFilters field="work_schedule" label="График работы" @change="onFilterChange" />
    <DropdownFilters field="required_experience" label="Опыт работы" @change="onFilterChange" />
    <DropdownFilters field="job_type" label="Тип должности" @change="onFilterChange" />
  </div>

  <VacancyCards
      title="Последние вакансии"
      subtitle="Актуальные предложения от работодателей"
      :vacancies="vacanciesData ?? []"
    />
  </template>

<script setup>
useHead({ title: 'Вакансии' })
import VacancyCards from '~/components/VacancyCards.vue'

const config = useRuntimeConfig()
const filters = reactive({})

const { data: vacanciesData, refresh } = await useAsyncData('vacancies-page', () => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, val]) => {
    if (val != null) params.append(key, val)
  })
  const queryString = params.toString()
  const url = `${config.public.apiBaseUrl}/api/vacancies/${queryString ? '?' + queryString : ''}`
  return $fetch(url)
}, { server: false })

function onFilterChange({ field, value }) {
  filters[field] = value
  refresh()
}
</script>
