<template>
  <DsSurface
    elevation="none"
    padding="lg"
    class="w-full"
  >
    <div class="grid grid-cols-1 gap-8 xl:grid-cols-12 xl:gap-10">
      <div class="xl:col-span-7">
        <UForm
          :state="form"
          :validate="validate"
          class="flex flex-col gap-8"
          @submit="onSubmit"
        >
          <section
            class="space-y-4"
            aria-labelledby="practice-form-personal"
          >
            <h3
              id="practice-form-personal"
              class="border-b border-default pb-2 text-h3 text-text-primary"
            >
              Личные данные
            </h3>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <UFormField name="lastName">
                <template #label>
                  <DsRequiredLabel label="Фамилия" />
                </template>
                <UInput
                  v-model="form.lastName"
                  size="lg"
                  placeholder="Иванов"
                  autocomplete="family-name"
                  class="w-full"
                />
              </UFormField>

              <UFormField name="firstName">
                <template #label>
                  <DsRequiredLabel label="Имя" />
                </template>
                <UInput
                  v-model="form.firstName"
                  size="lg"
                  placeholder="Иван"
                  autocomplete="given-name"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UFormField
              label="Отчество"
              name="middleName"
            >
              <UInput
                v-model="form.middleName"
                size="lg"
                placeholder="Иванович"
                autocomplete="additional-name"
                class="w-full"
              />
            </UFormField>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <UFormField name="birthDate">
                <template #label>
                  <DsRequiredLabel label="Дата рождения" />
                </template>
                <UInputDate
                  v-model="form.birthDate"
                  size="lg"
                  icon="i-lucide-calendar"
                  class="w-full min-w-0"
                />
              </UFormField>

              <UFormField name="phone">
                <template #label>
                  <DsRequiredLabel label="Телефон" />
                </template>
                <UInput
                  v-model="form.phone"
                  type="tel"
                  size="lg"
                  placeholder="+7 (XXX) XXX-XX-XX"
                  autocomplete="tel"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UFormField name="email">
              <template #label>
                <DsRequiredLabel label="Email" />
              </template>
              <UInput
                v-model="form.email"
                type="email"
                size="lg"
                placeholder="example@email.com"
                autocomplete="email"
                class="w-full"
              />
            </UFormField>
          </section>

          <section
            class="space-y-4"
            aria-labelledby="practice-form-education"
          >
            <h3
              id="practice-form-education"
              class="border-b border-default pb-2 text-h3 text-text-primary"
            >
              Образование
            </h3>

            <UFormField name="educationalInstitution">
              <template #label>
                <DsRequiredLabel label="Учебное заведение" />
              </template>
              <UInput
                v-model="form.educationalInstitution"
                size="lg"
                placeholder="Полное название вуза или колледжа"
                class="w-full"
              />
            </UFormField>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <UFormField name="course">
                <template #label>
                  <DsRequiredLabel label="Курс" />
                </template>
                <UInput
                  v-model="form.course"
                  size="lg"
                  placeholder="Например: 3"
                  class="w-full"
                />
              </UFormField>

              <UFormField name="specialty">
                <template #label>
                  <DsRequiredLabel label="Специальность" />
                </template>
                <UInput
                  v-model="form.specialty"
                  size="lg"
                  placeholder="Направление подготовки"
                  class="w-full"
                />
              </UFormField>
            </div>
          </section>

          <section
            class="space-y-4"
            aria-labelledby="practice-form-practice"
          >
            <h3
              id="practice-form-practice"
              class="border-b border-default pb-2 text-h3 text-text-primary"
            >
              Практика
            </h3>

            <UFormField name="practicePeriod">
              <template #label>
                <DsRequiredLabel label="Желаемый период практики" />
              </template>
              <UInput
                v-model="form.practicePeriod"
                size="lg"
                placeholder="Например: июнь–июль 2026"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="Желаемый орган"
              name="preferredDepartment"
            >
              <template #description>
                <span class="text-pretty text-caption text-text-muted leading-relaxed">
                  С органами администрации можно ознакомиться в разделе
                  <NuxtLink
                    to="/about#admin-structure"
                    class="text-primary underline-offset-2 hover:underline"
                  >
                    «О нас»
                  </NuxtLink>.
                </span>
              </template>
              <USelectMenu
                v-model="form.preferredDepartment"
                :items="departmentOptions"
                size="lg"
                value-key="value"
                placeholder="Выберите отраслевой орган"
                :search-input="{
                  placeholder: 'Поиск ОФО…',
                  icon: 'i-lucide-search',
                }"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="Комментарий"
              name="comment"
            >
              <UTextarea
                v-model="form.comment"
                :rows="4"
                size="lg"
                placeholder="Дополнительная информация"
                class="w-full"
              />
            </UFormField>
          </section>

          <section
            class="space-y-4"
            aria-labelledby="practice-form-files"
          >
            <h3
              id="practice-form-files"
              class="border-b border-default pb-2 text-h3 text-text-primary"
            >
              Документы
            </h3>

            <UFormField
              label="Сопроводительное письмо"
              name="applicationLetter"
            >
              <UFileUpload
                v-model="form.applicationLetter"
                variant="button"
                size="lg"
                accept=".pdf,.doc,.docx"
                label="Прикрепить файл"
                description="PDF, DOC или DOCX (макс. 10 МБ)"
                class="w-full"
              />
            </UFormField>
          </section>

          <div class="rounded-xl border border-default bg-elevated/50 p-4 sm:p-5">
            <UFormField name="consentPersonalData">
              <UCheckbox
                v-model="form.consentPersonalData"
                required
              >
                <template #label>
                  <span class="text-pretty text-body text-text-secondary leading-relaxed">
                    Даю согласие на
                    <NuxtLink
                      to="/privacy"
                      class="text-primary underline-offset-2 hover:underline"
                    >
                      обработку персональных данных
                    </NuxtLink>
                    в соответствии с Федеральным законом № 152-ФЗ
                    <span
                      class="text-error"
                      aria-hidden="true"
                    > *</span>
                  </span>
                </template>
              </UCheckbox>
            </UFormField>
          </div>

          <UButton
            type="submit"
            label="Отправить заявку"
            color="primary"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            :loading="loading"
            class="w-full justify-center sm:w-auto"
          />
        </UForm>
      </div>

      <aside
        class="xl:col-span-5"
        aria-label="Пояснения к полям формы"
      >
        <div class="flex flex-col gap-4 xl:sticky xl:top-24">
          <UCard
            v-for="guide in formGuides"
            :key="guide.id"
            variant="subtle"
            :ui="{ body: 'space-y-2 p-5' }"
          >
            <div class="flex items-start gap-3">
              <span
                class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                aria-hidden="true"
              >
                <UIcon
                  :name="guide.icon"
                  class="size-5"
                />
              </span>
              <div class="min-w-0 space-y-2">
                <h4 class="text-body font-semibold text-text-primary">
                  {{ guide.title }}
                </h4>
                <ul class="space-y-1.5 text-caption text-text-secondary leading-relaxed">
                  <li
                    v-for="(item, index) in guide.items"
                    :key="index"
                    class="flex gap-2"
                  >
                    <span
                      class="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span class="text-pretty">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </aside>
    </div>
  </DsSurface>
</template>

<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { ofoAnyValue, ofoApiBranch, ofoList } from '~/data/ofo-list'

const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)

const departmentOptions = [
  { label: 'Не выбрано', value: ofoAnyValue },
  ...ofoList.map(name => ({ label: name, value: name })),
]

const formGuides = [
  {
    id: 'personal',
    title: 'Личные данные',
    icon: 'i-lucide-user',
    items: [
      'Укажите ФИО так, как в паспорте и документах учебного заведения.',
      'Дата рождения нужна для оформления согласия на практику.',
      'Телефон и email — для связи по заявке и согласования сроков.',
    ],
  },
  {
    id: 'education',
    title: 'Образование',
    icon: 'i-lucide-graduation-cap',
    items: [
      'Название вуза или колледжа — полностью, без сокращений.',
      'Курс и специальность должны совпадать с данными из учебного заведения.',
    ],
  },
  {
    id: 'practice',
    title: 'Практика',
    icon: 'i-lucide-briefcase',
    items: [
      'Период практики согласуйте заранее с учебным заведением.',
      'В списке выберите отраслевой орган администрации района. Подробнее о структуре — в разделе «О нас».',
      'В комментарии можно указать пожелания по задачам или графику.',
    ],
  },
  {
    id: 'documents',
    title: 'Документы и отправка',
    icon: 'i-lucide-file-text',
    items: [
      'Сопроводительное письмо можно приложить в формате PDF, DOC или DOCX.',
      'После отправки специалист управления муниципальной службы, кадров и наград свяжется с вами.',
    ],
  },
]

const form = reactive({
  lastName: '',
  firstName: '',
  middleName: '',
  birthDate: null as DateValue | null,
  phone: '',
  email: '',
  educationalInstitution: '',
  course: '',
  specialty: '',
  practicePeriod: '',
  preferredDepartment: ofoAnyValue,
  comment: '',
  applicationLetter: null as File | null,
  consentPersonalData: false,
})

function formatBirthDateForApi(value: DateValue | Date | null) {
  if (!value) return null
  if (value instanceof Date) {
    return value.toISOString().split('T')[0]
  }
  const month = String(value.month).padStart(2, '0')
  const day = String(value.day).padStart(2, '0')
  return `${value.year}-${month}-${day}`
}

function validate(state: typeof form) {
  const errors: { name: string, message: string }[] = []
  if (!state.lastName?.trim()) errors.push({ name: 'lastName', message: 'Введите фамилию' })
  if (!state.firstName?.trim()) errors.push({ name: 'firstName', message: 'Введите имя' })
  if (!state.birthDate) errors.push({ name: 'birthDate', message: 'Укажите дату рождения' })
  if (!state.phone?.trim()) errors.push({ name: 'phone', message: 'Введите телефон' })
  if (!state.email?.trim()) errors.push({ name: 'email', message: 'Введите email' })
  if (!state.educationalInstitution?.trim()) errors.push({ name: 'educationalInstitution', message: 'Укажите учебное заведение' })
  if (!state.course?.trim()) errors.push({ name: 'course', message: 'Укажите курс' })
  if (!state.specialty?.trim()) errors.push({ name: 'specialty', message: 'Укажите специальность' })
  if (!state.practicePeriod?.trim()) errors.push({ name: 'practicePeriod', message: 'Укажите период практики' })
  if (!state.consentPersonalData) errors.push({ name: 'consentPersonalData', message: 'Необходимо согласие' })
  return errors
}

function resetForm() {
  form.lastName = ''
  form.firstName = ''
  form.middleName = ''
  form.birthDate = null
  form.phone = ''
  form.email = ''
  form.educationalInstitution = ''
  form.course = ''
  form.specialty = ''
  form.practicePeriod = ''
  form.preferredDepartment = ofoAnyValue
  form.comment = ''
  form.applicationLetter = null
  form.consentPersonalData = false
}

async function onSubmit() {
  loading.value = true
  try {
    const birthDate = formatBirthDateForApi(form.birthDate)
    const preferredDepartment = ofoApiBranch(form.preferredDepartment)
    const data = new FormData()
    data.append('last_name', form.lastName.trim())
    data.append('first_name', form.firstName.trim())
    if (form.middleName.trim()) data.append('middle_name', form.middleName.trim())
    if (birthDate) data.append('birth_date', birthDate)
    data.append('phone', form.phone.trim())
    data.append('email', form.email.trim())
    data.append('educational_institution', form.educationalInstitution.trim())
    data.append('course', form.course.trim())
    data.append('specialty', form.specialty.trim())
    data.append('practice_period', form.practicePeriod.trim())
    if (preferredDepartment) data.append('preferred_department', preferredDepartment)
    if (form.comment.trim()) data.append('comment', form.comment.trim())
    if (form.applicationLetter) data.append('application_letter', form.applicationLetter)
    data.append('consent_personal_data', form.consentPersonalData ? 'true' : 'false')

    await $fetch(`${config.public.apiBaseUrl}/api/youth/practice-apply/`, {
      method: 'POST',
      body: data,
    })

    toast.add({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами для согласования практики.',
      color: 'success',
    })
    resetForm()
  }
  catch {
    toast.add({
      title: 'Не удалось отправить заявку',
      description: 'Проверьте данные и попробуйте снова',
      color: 'error',
    })
  }
  finally {
    loading.value = false
  }
}
</script>
