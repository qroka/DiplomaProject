<template>
  <DsStandardPage
    title="Противодействие коррупции"
    description="Информация управления муниципальной службы, кадров и наград администрации Сургутского района"
    :intro="info?.intro"
  >
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
      <DsInfoCard
        title="График работы"
        icon="i-lucide-clock"
      >
        <div class="whitespace-pre-line text-sm">
          {{ info?.work_schedule }}
        </div>
      </DsInfoCard>

      <DsInfoCard
        title="Адрес"
        icon="i-lucide-map-pin"
      >
        {{ info?.address }}
      </DsInfoCard>

      <DsInfoCard
        title="Ответственные лица"
        icon="i-lucide-user-check"
      >
        <ul
          v-if="info?.officialsList?.length"
          class="space-y-2 text-sm"
        >
          <li
            v-for="official in info.officialsList"
            :key="official"
          >
            {{ official }}
          </li>
        </ul>
        <p
          v-else
          class="text-sm text-text-muted"
        >
          Сведения уточняются в управлении муниципальной службы, кадров и наград.
        </p>
      </DsInfoCard>
    </section>

    <DsContentSection title="Документы">
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
            <UCard
              v-for="doc in docsByCategory(item.value)"
              :key="doc.id"
              variant="subtle"
              :ui="{ body: 'p-4 flex flex-wrap items-center justify-between gap-3' }"
            >
              <span class="text-body font-medium text-text-primary">{{ doc.name }}</span>
              <UButton
                v-if="doc.file"
                label="Скачать"
                icon="i-lucide-download"
                :to="doc.file"
                target="_blank"
                external
                color="primary"
                size="lg"
              />
            </UCard>

            <DsEmptyState
              v-if="!docsByCategory(item.value).length"
              icon="i-lucide-file-x"
              title="Документы отсутствуют"
              description="В этой категории пока нет опубликованных материалов"
            />
          </div>
        </template>
      </UTabs>
    </DsContentSection>

    <DsCalloutPanel
      title="Сообщить о коррупционном правонарушении"
      icon="i-lucide-shield-alert"
      color="warning"
      variant="soft"
    >
      <p>
        В соответствии с Федеральным законом от 02.05.2006 № 59-ФЗ направление обращения
        о коррупционных правонарушениях муниципальных служащих через информационную систему
        возможно только после идентификации и (или) аутентификации заявителя через
        Единую систему идентификации и аутентификации (ЕСИА).
      </p>
      <p class="text-text-muted text-sm">
        Для подачи обращения перейдите на Платформу обратной связи с авторизацией через Госуслуги.
        Размер каждого вложения — не более 10 МБ, суммарно — не более 10 МБ (pdf, jpg, png, docx
        и иные форматы по п. 4.9 Распоряжения № 497-р).
      </p>
      <template #actions>
        <UButton
          label="Перейти к подаче обращения через ЕСИА"
          :to="esiaUrl"
          target="_blank"
          external
          color="primary"
          trailing-icon="i-lucide-external-link"
        />
      </template>
    </DsCalloutPanel>
  </DsStandardPage>
</template>

<script setup>
useHead({ title: 'Противодействие коррупции' })

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
  $fetch(`${config.public.apiBaseUrl}/api/anti-corruption-info/`), { server: false })

const { data: documents } = await useAsyncData('anti-corruption-docs', () =>
  $fetch(`${config.public.apiBaseUrl}/api/anti-corruption-documents/`), { server: false })

const esiaUrl = computed(() =>
  info.value?.esia_feedback_url
  || config.public.esiaFeedbackUrl
  || 'https://pos.gosuslugi.ru/landing/',
)

function docsByCategory(category) {
  return (documents.value ?? []).filter(doc => doc.category === category)
}
</script>
