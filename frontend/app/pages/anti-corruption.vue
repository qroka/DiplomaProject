<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import type { AntiCorruptionDocument } from '~/components/AntiCorruptionDocumentsList.vue'
import { antiCorruptionCategoryIcon } from '~/data/anti-corruption-categories'

interface AntiCorruptionInfo {
  intro?: string
  work_schedule?: string
  address?: string
  officialsList?: string[]
  esia_feedback_url?: string
}

export interface AntiCorruptionCategory {
  id: number
  slug: string
  tab_label: string
  title: string
  order: number
  documents: AntiCorruptionDocument[]
}

interface ParsedOfficial {
  name: string
  position?: string
  phone?: string
}

useHead({ title: 'Противодействие коррупции' })

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

const activeDocTab = ref('')

const { data: info, pending: infoPending } = await useAsyncData('anti-corruption-info', () =>
  $fetch<AntiCorruptionInfo>(`${config.public.apiBaseUrl}/api/anti-corruption-info/`), {
  server: false,
})

const { data: categories, pending: docsPending } = await useAsyncData('anti-corruption-docs', () =>
  $fetch<AntiCorruptionCategory[]>(`${config.public.apiBaseUrl}/api/anti-corruption-documents/`), {
  server: false,
})

const documentTabs = computed<TabsItem[]>(() =>
  (categories.value ?? []).map(category => ({
    label: category.tab_label,
    value: category.slug,
    icon: antiCorruptionCategoryIcon(category.slug),
  })),
)

const defaultDocTab = computed(() => categories.value?.[0]?.slug ?? '')

function resolveDocTab(value: unknown): string {
  const allowed = (categories.value ?? []).map(category => category.slug)
  if (typeof value === 'string' && allowed.includes(value)) {
    return value
  }
  return defaultDocTab.value
}

watch(
  () => [route.query.tab, categories.value] as const,
  ([value]) => {
    if (!categories.value?.length) return
    activeDocTab.value = resolveDocTab(value)
  },
  { immediate: true },
)

watch(activeDocTab, (value) => {
  if (!value) return

  const nextQuery = { ...route.query }
  if (value === defaultDocTab.value) {
    delete nextQuery.tab
  }
  else {
    nextQuery.tab = value
  }
  if (route.query.tab !== nextQuery.tab) {
    router.replace({ query: nextQuery })
  }
})

const esiaUrl = computed(() =>
  info.value?.esia_feedback_url
  || config.public.esiaFeedbackUrl
  || 'https://pos.gosuslugi.ru/landing/',
)

const officials = computed(() =>
  (info.value?.officialsList ?? []).map(parseOfficial),
)

function parseOfficial(line: string): ParsedOfficial {
  const parts = line.split(',').map(part => part.trim()).filter(Boolean)

  if (parts.length >= 3) {
    const phone = parts[parts.length - 1]
    const position = parts[parts.length - 2]
    const name = parts.slice(0, -2).join(', ')
    return { name, position, phone }
  }

  if (parts.length === 2) {
    return { name: parts[0]!, position: parts[1]! }
  }

  return { name: line }
}

function docsForTab(slug: string) {
  return categories.value?.find(category => category.slug === slug)?.documents ?? []
}

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
</script>

<template>
  <DsStandardPage
    title="Противодействие коррупции"
    description="Информация управления муниципальной службы, кадров и наград администрации Сургутского района: контакты, нормативные документы и порядок подачи обращений о коррупционных правонарушениях."
    :intro="info?.intro"
  >
    <DsContentSection
      title="Контакты управления"
      description="График работы, адрес и ответственные должностные лица управления муниципальной службы, кадров и наград"
      overline="Контакты"
      heading-id="anticorruption-contacts"
      spacing="lg"
    >
      <div
        v-if="infoPending"
        class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6"
        aria-busy="true"
      >
        <UCard
          v-for="index in 3"
          :key="index"
          variant="subtle"
          :ui="{ body: 'p-5 lg:p-6 space-y-3' }"
        >
          <USkeleton class="h-6 w-1/2" />
          <USkeleton class="h-20 w-full" />
        </UCard>
      </div>

      <div
        v-else
        class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6"
      >
        <DsInfoCard
          title="График работы"
          icon="i-lucide-clock"
        >
          <p class="whitespace-pre-line text-pretty">
            {{ info?.work_schedule || 'Сведения уточняются в управлении муниципальной службы, кадров и наград.' }}
          </p>
        </DsInfoCard>

        <DsInfoCard
          title="Адрес"
          icon="i-lucide-map-pin"
        >
          <p class="text-pretty">
            {{ info?.address || 'Сведения уточняются в управлении муниципальной службы, кадров и наград.' }}
          </p>
        </DsInfoCard>

        <DsInfoCard
          title="Ответственные лица"
          icon="i-lucide-user-check"
        >
          <ul
            v-if="officials.length"
            class="space-y-4"
          >
            <li
              v-for="official in officials"
              :key="`${official.name}-${official.position}`"
              class="space-y-1"
            >
              <p class="font-medium text-text-primary">
                {{ official.name }}
              </p>
              <p
                v-if="official.position"
                class="text-caption text-text-secondary"
              >
                {{ official.position }}
              </p>
              <a
                v-if="official.phone"
                :href="phoneHref(official.phone)"
                class="inline-flex items-center gap-1.5 text-body text-primary underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <UIcon
                  name="i-lucide-phone"
                  class="size-4 shrink-0"
                  aria-hidden="true"
                />
                {{ official.phone }}
              </a>
            </li>
          </ul>
          <p
            v-else
            class="text-text-muted"
          >
            Сведения уточняются в управлении муниципальной службы, кадров и наград.
          </p>
        </DsInfoCard>
      </div>
    </DsContentSection>

    <DsContentSection
      title="Нормативные документы"
      description="Нормативные правовые и муниципальные правовые акты в сфере противодействия коррупции, методические материалы и формы документов"
      overline="Документы"
      heading-id="anticorruption-documents"
      spacing="lg"
    >
      <div
        v-if="docsPending"
        class="space-y-4"
        aria-busy="true"
      >
        <USkeleton class="h-11 w-full max-w-xl rounded-full" />
        <UCard
          v-for="index in 3"
          :key="index"
          variant="subtle"
          :ui="{ body: 'p-4 lg:p-5 space-y-3' }"
        >
          <USkeleton class="h-5 w-3/4" />
          <USkeleton class="h-9 w-28" />
        </UCard>
      </div>

      <template v-else-if="documentTabs.length">
        <p
          class="mb-4 text-caption leading-relaxed text-text-muted text-pretty"
          role="note"
        >
          Документы в формате PDF подготовлены в соответствии с ГОСТ&nbsp;Р&nbsp;70176-2022. При затруднениях с чтением файла обратитесь в управление муниципальной службы, кадров и наград.
        </p>

        <UTabs
          v-model="activeDocTab"
          color="primary"
          variant="pill"
          size="lg"
          :items="documentTabs"
          :unmount-on-hide="false"
          class="w-full"
        >
          <template #content="{ item }">
            <div class="mt-6">
              <AntiCorruptionDocumentsList
                :documents="docsForTab(item.value as string)"
              />
            </div>
          </template>
        </UTabs>
      </template>

      <DsEmptyState
        v-else
        icon="i-lucide-file-x"
        title="Категории документов не настроены"
        description="Добавьте категории и документы в разделе администрирования «Антикоррупция»."
      />
    </DsContentSection>

    <DsContentSection
      title="Сообщить о коррупционном правонарушении"
      description="Подача онлайн-обращения о коррупционных правонарушениях, совершённых муниципальными служащими"
      overline="Обращение"
      heading-id="anticorruption-report"
      spacing="lg"
    >
      <EsiaGosuslugiCard
        title="Перейти к подаче обращения через ЕСИА"
        description="Официальная подача обращения о коррупционных правонарушениях на платформе Госуслуг"
        :to="esiaUrl"
      />
    </DsContentSection>
  </DsStandardPage>
</template>
