<script setup lang="ts">
interface StaffReservePosition {
  id: number
  title: string
  description: string
  order: number
}

interface StaffReserveInfo {
  purpose?: string
  positions?: StaffReservePosition[]
  additional_content?: string
  updated_at?: string
}

useHead({ title: 'Кадровый резерв' })

const config = useRuntimeConfig()

const { data: info, pending } = await useAsyncData('staff-reserve-info', () =>
  $fetch<StaffReserveInfo>(`${config.public.apiBaseUrl}/api/staff-reserve/`), {
  server: false,
})

const positions = computed(() => info.value?.positions ?? [])
</script>

<template>
  <DsStandardPage
    title="Кадровый резерв"
    description="Информация об организации кадрового резерва в администрации Сургутского района: цели формирования, должности для включения в резерв и архив результатов конкурсов."
  >
    <DsContentSection
      title="Цель формирования кадрового резерва"
      overline="О резерве"
      heading-id="reserve-purpose"
      spacing="lg"
    >
      <div
        v-if="pending"
        class="space-y-3"
        aria-busy="true"
        aria-label="Загрузка информации о кадровом резерве"
      >
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-3/4" />
      </div>

      <p
        v-else
        class="text-body-lg text-text-secondary leading-relaxed whitespace-pre-line text-pretty"
      >
        {{ info?.purpose }}
      </p>
    </DsContentSection>

    <DsContentSection
      v-if="pending || positions.length"
      title="Должности, на которые формируется резерв"
      description="Перечень должностей муниципальной службы с описанием требований к кандидатам для включения в кадровый резерв"
      overline="Должности"
      heading-id="reserve-positions"
      spacing="lg"
    >
      <ul
        v-if="pending"
        class="flex flex-col gap-4"
        aria-busy="true"
      >
        <li
          v-for="index in 3"
          :key="index"
        >
          <UCard
            variant="subtle"
            :ui="{ body: 'p-5 lg:p-6 space-y-3' }"
          >
            <USkeleton class="h-6 w-2/3" />
            <USkeleton class="h-16 w-full" />
          </UCard>
        </li>
      </ul>

      <ul
        v-else
        class="flex flex-col gap-4"
      >
        <li
          v-for="position in positions"
          :key="position.id"
        >
          <UCard
            variant="subtle"
            :ui="{
              root: 'rounded-xl',
              body: 'p-5 lg:p-6 space-y-3',
            }"
          >
            <h3 class="text-h3 text-text-primary text-balance">
              {{ position.title }}
            </h3>
            <p class="text-body text-text-secondary leading-relaxed text-pretty">
              {{ position.description }}
            </p>
          </UCard>
        </li>
      </ul>
    </DsContentSection>

    <DsContentSection
      v-if="info?.additional_content"
      title="Дополнительная информация"
      heading-id="reserve-extra"
      spacing="lg"
    >
      <p class="text-body text-text-secondary leading-relaxed whitespace-pre-line text-pretty">
        {{ info.additional_content }}
      </p>
    </DsContentSection>

    <DsContentSection
      title="Результаты конкурсов"
      description="Архив завершённых конкурсов на формирование кадрового резерва: постановление о проведении и постановление о результатах в виде прикреплённых файлов."
      overline="Архив"
      heading-id="competition-results"
      spacing="lg"
    >
      <CompetitionResultsList type-filter="reserve" />
    </DsContentSection>

    <DsContentSection
      title="Связанные разделы"
      description="Другие разделы карьерного портала администрации Сургутского района"
      overline="Карьера"
      heading-id="reserve-related"
      spacing="lg"
    >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <UPageCard
          title="Вакансии"
          description="Актуальный перечень вакантных должностей в администрации Сургутского района."
          icon="i-lucide-briefcase"
          to="/vacancies"
          variant="subtle"
          class="h-full cursor-pointer"
          :ui="{
            root: 'h-full',
            container: 'h-full',
            wrapper: 'h-full',
          }"
        />

        <UPageCard
          title="Конкурсы"
          description="Действующие конкурсы на замещение должностей и формирование кадрового резерва."
          icon="i-lucide-file-badge"
          to="/tenders?type=reserve"
          variant="subtle"
          class="h-full cursor-pointer"
          :ui="{
            root: 'h-full',
            container: 'h-full',
            wrapper: 'h-full',
          }"
        />
      </div>
    </DsContentSection>
  </DsStandardPage>
</template>
