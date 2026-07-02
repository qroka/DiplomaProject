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
    description="Разделы сайта, вакансии, контакты и документы"
    :ui="{ content: 'sm:max-w-xl' }"
  >
    <template #content>
      <UCommandPalette
        v-model:search-term="searchTerm"
        :groups="groups"
        placeholder="Введите вакансию, контакт или документ…"
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

interface PortalSearchResponse {
  vacancies: Array<{ id: number, title: string, branch?: string | null }>
  contacts: Array<{
    id: number
    surname?: string | null
    name?: string | null
    patronym?: string | null
    role?: string | null
    phone?: string | null
    email?: string | null
  }>
  documents: Array<{
    kind: string
    id: number
    title: string
    section: string
    to: string
  }>
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
const contactItems = ref<typeof vacancyItems.value>([])
const documentItems = ref<typeof vacancyItems.value>([])

const extraPages = [
  { label: 'Обратная связь', to: '/feedback', icon: navIcons['/feedback'] ?? 'i-lucide-arrow-right' },
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

  if (contactItems.value.length) {
    result.push({
      id: 'contacts',
      label: 'Контакты',
      ignoreFilter: true,
      items: contactItems.value,
    })
  }

  if (documentItems.value.length) {
    result.push({
      id: 'documents',
      label: 'Документы',
      ignoreFilter: true,
      items: documentItems.value,
    })
  }

  return result
})

function formatFullName(value: { surname?: string | null, name?: string | null, patronym?: string | null }) {
  return [value.surname, value.name, value.patronym].filter(Boolean).join(' ').trim()
}

const fetchPortalSearch = useDebounceFn(async (term: string) => {
  const query = term.trim()
  if (query.length < 2) {
    vacancyItems.value = []
    contactItems.value = []
    documentItems.value = []
    return
  }

  try {
    const data = await $fetch<PortalSearchResponse>(`${config.public.apiBaseUrl}/api/search/`, {
      params: { q: query },
    })

    vacancyItems.value = (data.vacancies ?? []).slice(0, 8).map(v => ({
      label: v.title,
      description: v.branch || 'Администрация Сургутского района',
      to: `/vacancyinfo/${v.id}`,
      icon: 'i-lucide-briefcase',
    }))

    contactItems.value = (data.contacts ?? []).slice(0, 8).map(c => {
      const fullName = formatFullName(c) || 'Сотрудник'
      const details = [c.role, c.phone, c.email].filter(Boolean).join(' · ')
      return {
        label: fullName,
        description: details || 'Справочник сотрудников',
        to: '/contacts#contacts-directory',
        icon: 'i-lucide-users',
      }
    })

    documentItems.value = (data.documents ?? []).slice(0, 8).map(d => ({
      label: d.title,
      description: d.section,
      to: d.to,
      icon: 'i-lucide-file-text',
    }))
  } catch {
    vacancyItems.value = []
    contactItems.value = []
    documentItems.value = []
  }
}, 300)

watch(searchTerm, fetchPortalSearch)

watch(open, (isOpen) => {
  if (!isOpen) {
    searchTerm.value = ''
    vacancyItems.value = []
    contactItems.value = []
    documentItems.value = []
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
