<script setup lang="ts">
import type { Vacancy } from '~/components/VacancyCard.vue'
import type { Department } from '~/data/departments'

const route = useRoute()
const config = useRuntimeConfig()
const toast = useToast()

const vacancyId = computed(() => String(route.params.id))

const { data: vacancy, pending, error } = await useAsyncData(
  () => `vacancy-${vacancyId.value}`,
  () => $fetch<Vacancy>(`${config.public.apiBaseUrl}/api/vacancies/${vacancyId.value}/`),
  {
    server: false,
    watch: [vacancyId],
  },
)

const { data: departments } = await useDepartmentsList()

const isApplicationFormOpen = ref(false)

useHead(() => ({
  title: vacancy.value?.title ?? 'Вакансия',
}))

const pageDescription = computed(() => {
  if (!vacancy.value) {
    return 'Подробная информация о вакантной должности в администрации Сургутского района'
  }

  const parts = [
    vacancy.value.branch,
    vacancy.value.location,
    vacancy.value.salary,
  ].filter(Boolean)

  return parts.length
    ? parts.join(' · ')
    : 'Подробная информация о вакантной должности в администрации Сургутского района'
})

const publishedLabel = computed(() => {
  const raw = vacancy.value?.created_at
  if (!raw) return ''

  return new Date(raw).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})

const skills = computed(() => vacancy.value?.skills?.filter(Boolean) ?? [])

const relatedDepartment = computed<Department | null>(() => {
  const branch = vacancy.value?.branch?.trim()
  if (!branch || !departments.value?.length) return null

  return departments.value.find((department) => {
    const matchBranch = department.vacancyBranch?.trim() || department.name.trim()
    return matchBranch === branch || department.name === branch
  }) ?? null
})

const orgVacanciesLink = computed(() => {
  const branch = vacancy.value?.branch?.trim()
  return branch ? `/vacancies?org=${encodeURIComponent(branch)}` : '/vacancies'
})

interface ConditionItem {
  key: string
  title: string
  value: string
  icon: string
}

const conditionItems = computed<ConditionItem[]>(() => {
  if (!vacancy.value) return []

  const items: Array<ConditionItem | null> = [
    vacancy.value.branch
      ? { key: 'branch', title: 'Подразделение', value: vacancy.value.branch, icon: 'i-lucide-building-2' }
      : null,
    vacancy.value.location
      ? { key: 'location', title: 'Локация', value: vacancy.value.location, icon: 'i-lucide-map-pin' }
      : null,
    vacancy.value.salary
      ? { key: 'salary', title: 'Оплата труда', value: vacancy.value.salary, icon: 'i-lucide-wallet' }
      : null,
    (vacancy.value.requiredExperience || vacancy.value.experience)
      ? {
          key: 'experience',
          title: 'Опыт',
          value: vacancy.value.requiredExperience || vacancy.value.experience || '',
          icon: 'i-lucide-award',
        }
      : null,
    vacancy.value.workSchedule
      ? { key: 'schedule', title: 'График работы', value: vacancy.value.workSchedule, icon: 'i-lucide-clock' }
      : null,
    vacancy.value.workingHours
      ? { key: 'hours', title: 'Режим работы', value: vacancy.value.workingHours, icon: 'i-lucide-calendar-clock' }
      : null,
    vacancy.value.employmentType
      ? { key: 'employment', title: 'Тип занятости', value: vacancy.value.employmentType, icon: 'i-lucide-briefcase' }
      : null,
    vacancy.value.jobType
      ? { key: 'job-type', title: 'Тип должности', value: vacancy.value.jobType, icon: 'i-lucide-id-card' }
      : null,
  ]

  return items.filter((item): item is ConditionItem => item !== null)
})

const tagItems = computed(() => {
  if (!vacancy.value) return []

  return [
    vacancy.value.isNew ? 'Новая вакансия' : null,
    vacancy.value.workSchedule,
    vacancy.value.jobType,
    vacancy.value.employmentType,
  ].filter((item): item is string => Boolean(item))
})

function openApplicationForm() {
  isApplicationFormOpen.value = true
}

function closeApplicationForm() {
  isApplicationFormOpen.value = false
}

async function handleFormSubmit(formData: Record<string, unknown>) {
  try {
    const data = new FormData()
    data.append('vacancy_title', vacancy.value?.title || '')

    for (const [key, value] of Object.entries(formData)) {
      if (value instanceof File || (Array.isArray(value) && value[0] instanceof File)) {
        const files = Array.isArray(value) ? value : [value]
        for (const file of files) {
          if (file instanceof File) {
            data.append(key, file)
          }
        }
      }
      else if (value !== null && value !== undefined) {
        let fieldName = key.replace(/([A-Z])/g, '_$1').toLowerCase()

        const fieldMap: Record<string, string> = {
          last_name: 'last_name',
          first_name: 'first_name',
          middle_name: 'middle_name',
          birth_date: 'birth_date',
          registration_address: 'registration_address',
          residence_address: 'residence_address',
          municipal_experience: 'municipal_experience',
          work_experience: 'work_experience',
          marital_status: 'marital_status',
          vacancy_source: 'vacancy_source',
          consent_false_info: 'consent_false_info',
          consent_verification: 'consent_verification',
          consent_personal_data: 'consent_personal_data',
          consent_resume_forwarding: 'consent_resume_forwarding',
        }
        fieldName = fieldMap[fieldName] || fieldName

        if (typeof value === 'boolean') {
          data.append(fieldName, value ? 'true' : 'false')
        }
        else if (value instanceof Date) {
          data.append(fieldName, value.toISOString().split('T')[0])
        }
        else {
          data.append(fieldName, String(value))
        }
      }
    }

    await $fetch(`${config.public.apiBaseUrl}/api/apply/`, {
      method: 'POST',
      body: data,
    })

    toast.add({
      title: 'Заявка отправлена',
      description: 'Ваша заявка на вакансию успешно отправлена.',
      color: 'success',
    })
    setTimeout(closeApplicationForm, 2000)
  }
  catch {
    toast.add({
      title: 'Не удалось отправить заявку',
      description: 'Проверьте данные и попробуйте снова',
      color: 'error',
    })
  }
}
</script>

<template>
  <div>
    <UModal
      v-model:open="isApplicationFormOpen"
      :ui="{ content: 'max-w-3xl w-[calc(100vw-2rem)] sm:w-full' }"
    >
      <template #body>
        <ApplicationForm
          :vacancy="vacancy"
          @submit="handleFormSubmit"
          @cancel="closeApplicationForm"
        />
      </template>
    </UModal>

    <DsStandardPage
      :title="pending ? 'Загрузка вакансии…' : vacancy?.title ?? 'Вакансия'"
      :description="pageDescription"
      badge="Карьера"
    >
      <template
        v-if="vacancy && !error"
        #heroActions
      >
        <UButton
          label="Откликнуться"
          color="primary"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
          class="cursor-pointer rounded-full"
          @click="openApplicationForm"
        />
      </template>

      <div
        v-if="pending"
        class="space-y-6"
        aria-busy="true"
      >
        <USkeleton class="h-8 w-48 rounded-lg" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <USkeleton
            v-for="index in 6"
            :key="index"
            class="h-28 rounded-xl"
          />
        </div>
        <USkeleton class="h-40 rounded-xl" />
      </div>

      <DsEmptyState
        v-else-if="error || !vacancy"
        icon="i-lucide-search-x"
        title="Вакансия не найдена"
        description="Вакансия с таким идентификатором не существует или была снята с публикации."
      >
        <template #action>
          <UButton
            label="Вернуться к вакансиям"
            to="/vacancies"
            color="primary"
            size="lg"
            class="cursor-pointer rounded-full"
          />
        </template>
      </DsEmptyState>

      <template v-else>
        <DsContentSection
          title="Условия и параметры"
          description="Ключевые сведения о должности, подразделении и формате работы"
          overline="Вакансия"
          heading-id="vacancy-conditions"
          spacing="lg"
        >
          <div class="space-y-5">
            <div
              v-if="tagItems.length || publishedLabel"
              class="flex flex-wrap items-center gap-2"
            >
              <UBadge
                v-for="tag in tagItems"
                :key="tag"
                :label="tag"
                color="primary"
                variant="subtle"
                size="lg"
                class="rounded-full"
              />
              <span
                v-if="publishedLabel"
                class="text-caption text-text-muted"
              >
                Опубликовано {{ publishedLabel }}
              </span>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <DsInfoCard
                v-for="item in conditionItems"
                :key="item.key"
                :title="item.title"
                :icon="item.icon"
              >
                <p class="text-pretty">
                  {{ item.value }}
                </p>
              </DsInfoCard>
            </div>
          </div>
        </DsContentSection>

        <DsContentSection
          v-if="vacancy.description"
          title="Описание вакансии"
          description="Обязанности, задачи и дополнительные сведения о должности"
          overline="Подробности"
          heading-id="vacancy-description"
          spacing="lg"
        >
          <DsSurface
            elevation="none"
            padding="lg"
            class="w-full"
          >
            <p class="whitespace-pre-line text-pretty text-body-lg leading-relaxed text-text-secondary">
              {{ vacancy.description }}
            </p>
          </DsSurface>
        </DsContentSection>

        <DsContentSection
          v-if="skills.length"
          title="Навыки и требования"
          description="Ключевые компетенции и ожидания к кандидату"
          overline="Требования"
          heading-id="vacancy-skills"
          spacing="lg"
        >
          <ul class="grid gap-3 sm:grid-cols-2">
            <li
              v-for="skill in skills"
              :key="skill"
              class="flex items-start gap-3 rounded-xl border border-default bg-elevated/30 p-4"
            >
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span class="text-body text-text-secondary leading-relaxed text-pretty">
                {{ skill }}
              </span>
            </li>
          </ul>
        </DsContentSection>

        <DsContentSection
          title="Отклик на вакансию"
          description="Заполните анкету онлайн — заявка поступит в кадровую службу администрации района"
          overline="Отклик"
          heading-id="vacancy-apply"
          spacing="lg"
        >
          <DsCalloutPanel
            title="Готовы присоединиться к команде?"
            description="Нажмите «Откликнуться», чтобы заполнить форму. Понадобятся контактные данные, сведения об опыте и согласие на обработку персональных данных."
            icon="i-lucide-send"
            color="primary"
            variant="soft"
          >
            <template #actions>
              <UButton
                label="Откликнуться"
                color="primary"
                size="lg"
                trailing-icon="i-lucide-arrow-right"
                class="w-full cursor-pointer justify-center rounded-full sm:w-auto"
                @click="openApplicationForm"
              />
            </template>
          </DsCalloutPanel>
        </DsContentSection>

        <DsContentSection
          title="Связанные разделы"
          description="Другие материалы кадрового портала, которые могут быть полезны при выборе карьерного пути"
          overline="Карьера"
          heading-id="vacancy-related"
          spacing="lg"
        >
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <UPageCard
              title="Все вакансии"
              description="Вернуться к полному списку открытых должностей администрации района."
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
              v-if="vacancy.branch"
              title="Вакансии подразделения"
              :description="`Другие открытые должности в «${vacancy.branch}».`"
              icon="i-lucide-building-2"
              :to="orgVacanciesLink"
              variant="subtle"
              class="h-full cursor-pointer"
              :ui="{
                root: 'h-full',
                container: 'h-full',
                wrapper: 'h-full',
              }"
            />

            <UPageCard
              v-if="relatedDepartment"
              title="Страница подразделения"
              :description="`Подробнее о деятельности «${relatedDepartment.name}».`"
              icon="i-lucide-network"
              :to="`/about/departments/${relatedDepartment.slug}`"
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
              description="Действующие конкурсы на замещение должностей и кадровый резерв."
              icon="i-lucide-clipboard-list"
              to="/tenders"
              variant="subtle"
              class="h-full cursor-pointer"
              :ui="{
                root: 'h-full',
                container: 'h-full',
                wrapper: 'h-full',
              }"
            />

            <UPageCard
              title="Кадровый резерв"
              description="Как вступить в резерв и развивать карьеру в администрации района."
              icon="i-lucide-users"
              to="/staffreserve"
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
      </template>
    </DsStandardPage>
  </div>
</template>
