<template>
  <DepartmentPageView
    v-if="department"
    :department="department"
    :related-vacancies="relatedVacancies"
    :vacancies-link="vacanciesLink"
    :vacancies-pending="vacanciesPending"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: department, error, status } = await useDepartmentBySlug(slug)

watchEffect(() => {
  if (status.value === 'error' || (status.value === 'success' && !department.value)) {
    throw createError({ statusCode: 404, statusMessage: 'Орган не найден' })
  }
})

useHead(() => ({ title: department.value?.name ?? 'Орган' }))

const departmentRef = computed(() => department.value ?? undefined)
const { relatedVacancies, vacanciesLink, pending: vacanciesPending } = useDepartmentVacancies(departmentRef)
</script>
