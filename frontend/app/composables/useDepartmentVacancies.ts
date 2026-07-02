import type { Vacancy } from '~/components/VacancyCard.vue'
import type { Department } from '~/data/departments'

export function useDepartmentVacancies(department: Ref<Department | undefined>) {
  const config = useRuntimeConfig()

  const vacancyBranch = computed(() => department.value?.vacancyBranch?.trim() ?? '')

  const cacheKey = computed(
    () => `vacancies-dept-${department.value?.slug ?? 'unknown'}-${vacancyBranch.value}`,
  )

  const { data: relatedVacancies, pending } = useAsyncData(
    cacheKey,
    async () => {
      const branch = vacancyBranch.value
      if (!branch) return []

      const params = new URLSearchParams({ org: branch })
      return $fetch<Vacancy[]>(
        `${config.public.apiBaseUrl}/api/vacancies/?${params.toString()}`,
      )
    },
    {
      server: false,
      watch: [vacancyBranch],
    },
  )

  const vacanciesLink = computed(() => {
    const branch = vacancyBranch.value
    return branch ? `/vacancies?org=${encodeURIComponent(branch)}` : '/vacancies'
  })

  return {
    relatedVacancies: computed(() => relatedVacancies.value ?? []),
    vacanciesLink,
    pending,
  }
}
