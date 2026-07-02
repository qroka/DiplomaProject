<template>
  <DsStandardPage
    :title="department.name"
    :description="heroDescription"
    badge="Наша команда"
  >
    <UCard
      variant="subtle"
      :ui="{
        root: 'overflow-hidden',
        body: 'p-0',
      }"
    >
      <div class="relative aspect-[21/9] min-h-48 sm:min-h-56 lg:min-h-64">
        <img
          :src="departmentImage"
          :alt="`Фото: ${department.name}`"
          class="size-full object-cover"
          loading="eager"
        >
        <div
          class="absolute inset-0 bg-linear-to-t from-default/70 via-default/10 to-transparent"
          aria-hidden="true"
        />
      </div>
    </UCard>

    <DsContentSection
      title="Функции и задачи"
      description="Краткое описание деятельности отраслевого (функционального) органа"
      overline="Деятельность"
      heading-id="dept-activity"
      spacing="lg"
    >
      <div
        v-if="aboutParagraphs.length"
        class="space-y-4"
      >
        <p
          v-for="(paragraph, index) in aboutParagraphs"
          :key="index"
          class="text-body-lg text-text-secondary leading-relaxed text-pretty"
        >
          {{ paragraph }}
        </p>
      </div>

      <div
        v-if="department.units?.length"
        class="space-y-4"
      >
        <h3 class="text-h3 text-text-primary">
          {{ unitsHeading }}
        </h3>
        <ul class="grid gap-2 sm:grid-cols-2">
          <li
            v-for="unit in department.units"
            :key="unit"
            class="flex items-center gap-2 rounded-lg border border-default bg-elevated/25 px-3 py-2.5 text-body text-text-secondary"
          >
            <UIcon
              name="i-lucide-check"
              class="size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            {{ unit }}
          </li>
        </ul>
      </div>

      <div
        v-if="department.tasks?.length"
        class="space-y-4"
      >
        <h3 class="text-h3 text-text-primary">
          {{ tasksHeading }}
        </h3>
        <div class="grid gap-3 sm:grid-cols-2">
          <div
            v-for="task in department.tasks"
            :key="task"
            class="flex gap-3 rounded-xl border border-default bg-elevated/30 p-4"
          >
            <UIcon
              name="i-lucide-circle-check"
              class="size-5 shrink-0 text-primary mt-0.5"
              aria-hidden="true"
            />
            <p class="text-body text-text-secondary leading-relaxed">
              {{ task }}
            </p>
          </div>
        </div>
      </div>

      <p
        v-if="!aboutParagraphs.length && !department.tasks?.length && !department.units?.length"
        class="text-body text-text-muted"
      >
        Подробное описание функций и задач органа будет дополнено администрацией.
      </p>
    </DsContentSection>

    <DsContentSection
      title="Контакты"
      description="Телефон и адрес электронной почты для связи с органом"
      overline="Связь"
      heading-id="dept-contacts"
      spacing="lg"
    >
      <div class="grid gap-4 sm:grid-cols-2">
        <DsInfoCard
          v-if="contactPhone"
          title="Телефон"
          icon="i-lucide-phone"
        >
          <a
            v-if="phoneHref"
            :href="phoneHref"
            class="text-primary hover:underline transition-colors duration-200"
          >
            {{ contactPhone }}
          </a>
          <span v-else>{{ contactPhone }}</span>
        </DsInfoCard>

        <DsInfoCard
          v-if="contactEmail"
          title="Электронная почта"
          icon="i-lucide-mail"
        >
          <a
            :href="`mailto:${contactEmail}`"
            class="text-primary hover:underline break-all transition-colors duration-200"
          >
            {{ contactEmail }}
          </a>
        </DsInfoCard>
      </div>

      <UCard
        v-if="department.head"
        variant="subtle"
        :ui="{ body: 'p-5 lg:p-6' }"
      >
        <p class="text-overline uppercase tracking-wide text-text-muted mb-2">
          Руководитель
        </p>
        <p class="text-body font-semibold text-text-primary">
          {{ department.head.name }}
        </p>
        <p class="text-body text-text-secondary mt-1">
          {{ department.head.role }}
        </p>
      </UCard>

      <p
        v-if="!contactPhone && !contactEmail"
        class="text-body text-text-muted"
      >
        Контактная информация будет опубликована администрацией.
      </p>
    </DsContentSection>

    <DsContentSection
      v-if="!vacanciesPending"
      title="Открытые вакансии"
      :description="careerDescription"
      overline="Карьера"
      heading-id="dept-vacancies"
      spacing="lg"
    >
      <DsCalloutPanel
        v-if="relatedVacancies.length"
        title="Присоединяйтесь к команде"
        :description="`Актуальные вакансии в «${department.name}» доступны в разделе «Вакансии».`"
        icon="i-lucide-briefcase"
        color="primary"
        variant="soft"
      >
        <template #actions>
          <UButton
            :label="`Смотреть вакансии (${relatedVacancies.length})`"
            :to="vacanciesLink"
            color="primary"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="cursor-pointer"
          />
        </template>
      </DsCalloutPanel>

      <DsCalloutPanel
        v-else
        title="Свободных вакансий пока нет"
        description="В данном органе пока нет свободных вакансий, но вы можете найти что-то другое в общем разделе."
        icon="i-lucide-briefcase"
        color="primary"
        variant="soft"
      >
        <template #actions>
          <UButton
            label="Смотреть все вакансии"
            to="/vacancies"
            color="primary"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="cursor-pointer"
          />
        </template>
      </DsCalloutPanel>
    </DsContentSection>

    <div class="pt-2">
      <UButton
        label="К структуре администрации"
        to="/about#admin-structure"
        color="neutral"
        variant="ghost"
        icon="i-lucide-arrow-left"
        class="cursor-pointer"
      />
    </div>
  </DsStandardPage>
</template>

<script setup lang="ts">
import {
  defaultDepartmentImage,
  type Department,
} from '~/data/departments'

const props = defineProps<{
  department: Department
  relatedVacancies: unknown[]
  vacanciesLink: string
  vacanciesPending?: boolean
}>()

const departmentImage = computed(
  () => props.department.image ?? defaultDepartmentImage,
)

const aboutParagraphs = computed(
  () => props.department.aboutParagraphs
    ?? (props.department.intro ? [props.department.intro] : []),
)

const heroDescription = computed(() => {
  if (props.department.aboutParagraphs?.length) {
    return props.department.aboutParagraphs.join(' ')
  }
  return props.department.intro
})

const unitsHeading = computed(() =>
  props.department.aboutParagraphs?.length
    ? 'В состав управления входят'
    : 'Структурные подразделения',
)

const tasksHeading = computed(() =>
  props.department.aboutParagraphs?.length
    ? 'Ключевые задачи в работе управления'
    : 'Ключевые задачи',
)

const contactPhone = computed(
  () => props.department.phone ?? props.department.head?.phone,
)

const contactEmail = computed(
  () => props.department.email ?? props.department.head?.email,
)

const phoneHref = computed(() => {
  const digits = (contactPhone.value ?? '').replace(/[^\d+]/g, '')
  return digits ? `tel:${digits}` : undefined
})

const vacancyLabel = computed(() => {
  const count = props.relatedVacancies.length
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) return 'актуальная вакансия'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'актуальные вакансии'
  return 'актуальных вакансий'
})

const careerDescription = computed(() => {
  if (props.relatedVacancies.length) {
    return `В органе сейчас ${props.relatedVacancies.length} ${vacancyLabel.value}`
  }
  return 'Актуальные предложения по работе в администрации Сургутского района'
})
</script>
