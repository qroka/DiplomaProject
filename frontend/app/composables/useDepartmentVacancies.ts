import type { Department } from '~/data/departments'

interface VacancyListItem {
  branch?: string
  is_active?: boolean
}

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
      const items = await $fetch<VacancyListItem[]>(
        `${config.public.apiBaseUrl}/api/vacancies/?${params.toString()}`,
      )

      return items.filter((vacancy) => {
        const value = (vacancy.branch || '').trim()
        return value.length > 0 && vacancy.is_active !== false
      })
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
