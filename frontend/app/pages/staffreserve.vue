<template>
  <div>
    <DsPageHero
      variant="inner"
      title="Кадровый резерв"
      description="Организация кадрового резерва администрации Сургутского района"
      :image="hero.src"
      :image-alt="hero.alt"
    />

    <DsBreadcrumbs :items="breadcrumbItems" />

    <UContainer class="py-8 lg:py-12 space-y-10">
      <section v-if="info">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          О кадровом резерве
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {{ info.purpose }}
        </p>
      </section>

      <section v-if="info?.positionsList?.length">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Должности, на которые формируется резерв
        </h2>
        <ul class="space-y-2">
          <li
            v-for="position in info.positionsList"
            :key="position"
            class="flex gap-2 text-gray-700 dark:text-gray-300"
          >
            <UIcon name="i-lucide-briefcase" class="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
            <span>{{ position }}</span>
          </li>
        </ul>
      </section>

      <section v-if="info?.additional_content">
        <div class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {{ info.additional_content }}
        </div>
      </section>

      <section class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Действующие конкурсы на формирование кадрового резерва
        </h2>
        <p class="text-gray-500 dark:text-gray-400 mb-4">
          Актуальная информация о приёме документов размещена в разделе «Конкурсы».
        </p>
        <UButton
          label="Перейти к конкурсам на кадровый резерв"
          to="/tenders?type=reserve"
          color="primary"
          trailing-icon="i-lucide-arrow-right"
        />
      </section>

      <section class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Результаты конкурсов
        </h2>
        <p class="text-gray-500 dark:text-gray-400 mb-4">
          Архивные документы по завершённым конкурсам хранятся в разделе «Конкурсы».
        </p>
        <UButton
          label="Смотреть результаты конкурсов"
          to="/tenders?tab=results"
          color="neutral"
          variant="outline"
          trailing-icon="i-lucide-arrow-right"
        />
      </section>

      <div class="flex flex-wrap gap-3 pt-2">
        <UButton label="Вакансии" to="/vacancies" color="neutral" variant="ghost" />
        <UButton label="Все конкурсы" to="/tenders" color="neutral" variant="ghost" />
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Кадровый резерв' })

const breadcrumbItems = buildBreadcrumbs({ label: 'Кадровый резерв' })
const hero = useHeroImage('staffreserve')

const config = useRuntimeConfig()

const { data: info } = await useAsyncData('staff-reserve-info', () =>
  $fetch(`${config.public.apiBaseUrl}/api/staff-reserve/`), { server: false }
)
</script>
