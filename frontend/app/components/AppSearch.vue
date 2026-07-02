<template>
  <UButton
    icon="i-lucide-search"
    color="neutral"
    variant="ghost"
    size="lg"
    aria-label="Поиск по порталу"
    @click="open = true"
  />

  <UModal
    v-model:open="open"
    title="Поиск по порталу"
    description="Разделы сайта и актуальные вакансии"
    :ui="{ content: 'sm:max-w-xl' }"
  >
    <template #content>
      <UCommandPalette
        v-model:search-term="searchTerm"
        :groups="groups"
        placeholder="Введите раздел или название вакансии…"
        :input="{ fixed: true }"
        preserve-group-order
        @update:model-value="onSelect"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { mainNavItems, navIcons } from '~/data/navigation'

interface SearchVacancy {
  id: number
  title: string
  branch?: string
  company?: string
}

const { open, closeSearch } = usePortalSearch()
const searchTerm = ref('')
const config = useRuntimeConfig()
const vacancyItems = ref<Array<{
  label: string
  description?: string
  to: string
  icon: string
}>>([])

const extraPages = [
  { label: 'Обратная связь', to: '/feedback', icon: navIcons['/feedback'] },
  { label: 'Политика конфиденциальности', to: '/privacy', icon: 'i-lucide-shield' },
]

const groups = computed(() => {
  const result: Array<{
    id: string
    label: string
    ignoreFilter?: boolean
    items: Array<{
      label: string
      to: string
      icon: string
      description?: string
    }>
  }> = [
    {
      id: 'pages',
      label: 'Разделы',
      items: [
        ...mainNavItems.map(item => ({
          label: item.label,
          to: item.to,
          icon: navIcons[item.to] ?? 'i-lucide-arrow-right',
        })),
        ...extraPages,
      ],
    },
  ]

  if (vacancyItems.value.length) {
    result.push({
      id: 'vacancies',
      label: 'Вакансии',
      ignoreFilter: true,
      items: vacancyItems.value,
    })
  }

  return result
})

const fetchVacancies = useDebounceFn(async (term: string) => {
  const query = term.trim()
  if (query.length < 2) {
    vacancyItems.value = []
    return
  }

  try {
    const data = await $fetch<SearchVacancy[]>(`${config.public.apiBaseUrl}/api/vacancies/`)
    const lower = query.toLowerCase()
    vacancyItems.value = data
      .filter(v => v.title?.toLowerCase().includes(lower))
      .slice(0, 8)
      .map(v => ({
        label: v.title,
        description: v.branch || v.company || 'Администрация Сургутского района',
        to: `/vacancyinfo/${v.id}`,
        icon: 'i-lucide-briefcase',
      }))
  } catch {
    vacancyItems.value = []
  }
}, 300)

watch(searchTerm, fetchVacancies)

watch(open, (isOpen) => {
  if (!isOpen) {
    searchTerm.value = ''
    vacancyItems.value = []
  }
})

function onSelect() {
  closeSearch()
  searchTerm.value = ''
  vacancyItems.value = []
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      open.value = !open.value
    },
  },
})
</script>
