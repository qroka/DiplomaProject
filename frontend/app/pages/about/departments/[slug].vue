<template>
  <div v-if="department">
    <DsPageHero
      variant="inner"
      :title="department.name"
      :description="department.intro ?? ''"
      :image="department.image ?? fallbackHero.src"
      :image-alt="department.name"
    />

    <DsBreadcrumbs :items="breadcrumbItems" />

    <UContainer class="py-8 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <section v-if="department.units?.length">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              В состав управления входят
            </h2>
            <ul class="space-y-2">
              <li
                v-for="unit in department.units"
                :key="unit"
                class="flex gap-2 text-gray-700 dark:text-gray-300"
              >
                <UIcon name="i-lucide-check" class="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span>{{ unit }}</span>
              </li>
            </ul>
          </section>

          <section v-if="department.tasks?.length">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ключевые задачи
            </h2>
            <ul class="space-y-3">
              <li
                v-for="task in department.tasks"
                :key="task"
                class="flex gap-2 text-gray-700 dark:text-gray-300"
              >
                <UIcon name="i-lucide-circle-check" class="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>{{ task }}</span>
              </li>
            </ul>
          </section>

          <section v-if="!department.units?.length && !department.tasks?.length">
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ department.intro }}
            </p>
            <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Подробное описание функций и задач органа будет дополнено администрацией.
            </p>
          </section>
        </div>

        <aside class="space-y-6">
          <div
            v-if="department.head"
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"
          >
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Руководитель
            </h2>
            <p class="font-medium text-gray-900 dark:text-white">
              {{ department.head.name }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {{ department.head.role }}
            </p>
            <div v-if="department.head.phone" class="mt-4 flex gap-2 text-sm text-gray-600 dark:text-gray-300">
              <UIcon name="i-lucide-phone" class="h-4 w-4 shrink-0 mt-0.5" />
              <span>{{ department.head.phone }}</span>
            </div>
            <div v-if="department.head.email" class="mt-2 flex gap-2 text-sm">
              <UIcon name="i-lucide-mail" class="h-4 w-4 shrink-0 mt-0.5 text-gray-500" />
              <a
                :href="`mailto:${department.head.email}`"
                class="text-primary-600 dark:text-primary-400 hover:underline"
              >
                {{ department.head.email }}
              </a>
            </div>
          </div>

          <div
            v-else-if="department.phone || department.email"
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"
          >
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Контакты
            </h2>
            <div v-if="department.phone" class="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
              <UIcon name="i-lucide-phone" class="h-4 w-4 shrink-0" />
              <span>{{ department.phone }}</span>
            </div>
            <div v-if="department.email" class="mt-2 flex gap-2 text-sm">
              <UIcon name="i-lucide-mail" class="h-4 w-4 shrink-0 text-gray-500" />
              <a
                :href="`mailto:${department.email}`"
                class="text-primary-600 dark:text-primary-400 hover:underline"
              >
                {{ department.email }}
              </a>
            </div>
          </div>

          <div
            v-if="relatedVacancies.length"
            class="rounded-xl border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-950/20 p-6"
          >
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Открытые вакансии
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              В этом органе есть {{ relatedVacancies.length }} актуальных вакансий
            </p>
            <UButton
              label="Смотреть вакансии"
              :to="vacanciesLink"
              color="primary"
              block
            />
          </div>
        </aside>
      </div>

      <div class="mt-10">
        <UButton
          label="← Вернуться к разделу «О нас»"
          to="/about"
          color="neutral"
          variant="ghost"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { getDepartment } from '~/data/departments'
import { buildBreadcrumbs } from '~/data/breadcrumbs'

const route = useRoute()
const config = useRuntimeConfig()
const slug = computed(() => String(route.params.slug))

const department = computed(() => getDepartment(slug.value))
const fallbackHero = useHeroImage('about')

const breadcrumbItems = computed(() => {
  if (!department.value) return buildBreadcrumbs({ label: 'Орган' })
  return buildBreadcrumbs(
    { label: 'О нас', to: '/about' },
    { label: department.value.name },
  )
})

watchEffect(() => {
  if (!department.value) {
    throw createError({ statusCode: 404, statusMessage: 'Орган не найден' })
  }
})

useHead(() => ({ title: department.value?.name ?? 'Орган' }))

const { data: allVacancies } = await useAsyncData(
  `vacancies-dept-${slug.value}`,
  () => $fetch(`${config.public.apiBaseUrl}/api/vacancies/`),
  { server: false }
)

const relatedVacancies = computed(() => {
  const branch = department.value?.vacancyBranch
  if (!branch || !allVacancies.value) return []
  const target = branch.toLowerCase()
  return allVacancies.value.filter((v: { branch?: string; is_active?: boolean }) => {
    if (v.is_active === false) return false
    const b = (v.branch || '').toLowerCase()
    return b.includes(target) || target.includes(b)
  })
})

const vacanciesLink = computed(() => {
  const branch = department.value?.vacancyBranch
  return branch ? `/vacancies?org=${encodeURIComponent(branch)}` : '/vacancies'
})
</script>
