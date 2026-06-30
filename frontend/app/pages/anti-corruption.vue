<template>
  <div>
    <DsPageHero
      variant="inner"
      title="Противодействие коррупции"
      description="Информация управления муниципальной службы, кадров и наград администрации Сургутского района"
      :image="hero.src"
      :image-alt="hero.alt"
    />

    <DsBreadcrumbs :items="breadcrumbItems" />

    <UContainer class="py-8 lg:py-12 space-y-10">
      <p
        v-if="info?.intro"
        class="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl"
      >
        {{ info.intro }}
      </p>

      <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6">
          <div class="flex items-center gap-2 mb-3">
            <UIcon name="i-lucide-clock" class="h-5 w-5 text-primary-500" />
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
              График работы
            </h2>
          </div>
          <div class="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm leading-relaxed">
            {{ info?.work_schedule }}
          </div>
        </div>

        <div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6">
          <div class="flex items-center gap-2 mb-3">
            <UIcon name="i-lucide-map-pin" class="h-5 w-5 text-primary-500" />
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
              Адрес
            </h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {{ info?.address }}
          </p>
        </div>

        <div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6">
          <div class="flex items-center gap-2 mb-3">
            <UIcon name="i-lucide-user-check" class="h-5 w-5 text-primary-500" />
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
              Ответственные лица
            </h2>
          </div>
          <ul v-if="info?.officialsList?.length" class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li v-for="official in info.officialsList" :key="official">
              {{ official }}
            </li>
          </ul>
          <p v-else class="text-sm text-gray-500 dark:text-gray-400">
            Сведения уточняются в управлении муниципальной службы, кадров и наград.
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Документы
        </h2>

        <UTabs
          v-model="activeDocTab"
          color="primary"
          variant="pill"
          size="lg"
          :items="documentTabs"
          :unmount-on-hide="false"
        >
          <template #content="{ item }">
            <div class="mt-6 space-y-3">
              <div
                v-for="doc in docsByCategory(item.value)"
                :key="doc.id"
                class="flex flex-wrap items-center justify-between gap-3 bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-4"
              >
                <span class="text-gray-900 dark:text-white font-medium">{{ doc.name }}</span>
                <UButton
                  v-if="doc.file"
                  label="Скачать"
                  icon="i-lucide-download"
                  :to="doc.file"
                  target="_blank"
                  external
                  color="primary"
                  size="sm"
                />
              </div>

              <DsEmptyState
                v-if="!docsByCategory(item.value).length"
                icon="i-lucide-file-x"
                title="Документы отсутствуют"
                description="В этой категории пока нет опубликованных материалов"
              />
            </div>
          </template>
        </UTabs>
      </section>

      <section class="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-900/20 p-6 lg:p-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Сообщить о коррупционном правонарушении
        </h2>
        <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
          В соответствии с Федеральным законом от 02.05.2006 № 59-ФЗ направление обращения
          о коррупционных правонарушениях муниципальных служащих через информационную систему
          возможно только после идентификации и (или) аутентификации заявителя через
          Единую систему идентификации и аутентификации (ЕСИА).
        </p>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Для подачи обращения перейдите на Платформу обратной связи с авторизацией через Госуслуги.
          Размер каждого вложения — не более 10 МБ, суммарно — не более 10 МБ (pdf, jpg, png, docx
          и иные форматы по п. 4.9 Распоряжения № 497-р).
        </p>
        <UButton
          label="Перейти к подаче обращения через ЕСИА"
          :to="esiaUrl"
          target="_blank"
          external
          color="primary"
          trailing-icon="i-lucide-external-link"
        />
      </section>
    </UContainer>
  </div>
</template>

<script setup>
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Противодействие коррупции' })

const breadcrumbItems = buildBreadcrumbs({ label: 'Нет коррупции!' })
const hero = useHeroImage('antiCorruption')

const config = useRuntimeConfig()

const documentTabs = [
  {
    label: 'Нормативные акты',
    value: 'Нормативные, правовые и иные акты в сфере противодействия коррупции',
  },
  {
    label: 'Экспертиза',
    value: 'Антикоррупционная экспертиза',
  },
  {
    label: 'Методические материалы',
    value: 'Методические материалы',
  },
  {
    label: 'Формы документов',
    value: 'Формы документов, связанные с противодействием коррупции, для заполнения',
  },
  {
    label: 'Комиссия',
    value: 'Комиссия по соблюдению требований к служебному поведению и урегулированию конфликта интересов',
  },
]

const activeDocTab = ref(documentTabs[0].value)

const { data: info } = await useAsyncData('anti-corruption-info', () =>
  $fetch(`${config.public.apiBaseUrl}/api/anti-corruption-info/`), { server: false }
)

const { data: documents } = await useAsyncData('anti-corruption-docs', () =>
  $fetch(`${config.public.apiBaseUrl}/api/anti-corruption-documents/`), { server: false }
)

const esiaUrl = computed(() =>
  info.value?.esia_feedback_url
  || config.public.esiaFeedbackUrl
  || 'https://pos.gosuslugi.ru/landing/'
)

function docsByCategory(category) {
  return (documents.value ?? []).filter(doc => doc.category === category)
}
</script>
