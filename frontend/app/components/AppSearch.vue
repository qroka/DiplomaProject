<template>
  <UButton
    icon="i-lucide-search"
    color="neutral"
    variant="ghost"
    size="sm"
    aria-label="Поиск по порталу (Ctrl+K)"
    class="hidden md:inline-flex min-h-11"
    @click="open = true"
  >
    <template #trailing>
      <UKbd
        value="meta"
        variant="subtle"
        class="hidden lg:inline-flex"
      />
      <UKbd
        value="K"
        variant="subtle"
        class="hidden lg:inline-flex"
      />
    </template>
  </UButton>

  <UButton
    icon="i-lucide-search"
    color="neutral"
    variant="ghost"
    size="sm"
    aria-label="Поиск по порталу"
    class="md:hidden min-h-11"
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
import { mainNavItems } from '~/data/navigation'

interface SearchVacancy {
  id: number
  title: string
  branch?: string
  company?: string
}

const open = ref(false)
const searchTerm = ref('')
const config = useRuntimeConfig()
const vacancyItems = ref<Array<{
  label: string
  description?: string
  to: string
  icon: string
}>>([])

const pageIcons: Record<string, string> = {
  '/': 'i-lucide-home',
  '/about': 'i-lucide-building-2',
  '/honorboard': 'i-lucide-award',
  '/contacts': 'i-lucide-phone',
  '/vacancies': 'i-lucide-briefcase',
  '/tenders': 'i-lucide-file-badge',
  '/staffreserve': 'i-lucide-users',
  '/youth': 'i-lucide-graduation-cap',
  '/profdev': 'i-lucide-book-open',
  '/anti-corruption': 'i-lucide-shield-alert',
}

const extraPages = [
  { label: 'Обратная связь', to: '/feedback', icon: 'i-lucide-message-square' },
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
          icon: pageIcons[item.to] ?? 'i-lucide-arrow-right',
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
  open.value = false
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
