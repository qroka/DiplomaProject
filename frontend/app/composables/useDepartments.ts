import type { Department, Deputy } from '~/data/departments'

export function useDepartmentsList() {
  const config = useRuntimeConfig()

  return useAsyncData('departments', () =>
    $fetch<Department[]>(`${config.public.apiBaseUrl}/api/departments/`), {
    server: false,
  })
}

export function useDepartmentBySlug(slug: MaybeRefOrGetter<string>) {
  const config = useRuntimeConfig()
  const slugValue = computed(() => toValue(slug))

  return useAsyncData(
    () => `department-${slugValue.value}`,
    () => $fetch<Department>(`${config.public.apiBaseUrl}/api/departments/${slugValue.value}/`),
    {
      server: false,
      watch: [slugValue],
    },
  )
}

export function useDeputiesList() {
  const config = useRuntimeConfig()

  return useAsyncData('deputies', () =>
    $fetch<Deputy[]>(`${config.public.apiBaseUrl}/api/deputies/`), {
    server: false,
  })
}

export function useDepartmentNameMap() {
  const { data: departments } = useDepartmentsList()

  const departmentNames = computed(() => {
    const map: Record<string, string> = {}
    for (const department of departments.value ?? []) {
      map[department.slug] = department.name
    }
    return map
  })

  function departmentName(slug: string) {
    return departmentNames.value[slug] ?? slug
  }

  return { departments, departmentNames, departmentName }
}
