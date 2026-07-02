<template>
  <div class="flex min-w-0 w-full max-w-full flex-col gap-6">
    <div class="space-y-3 border-b border-default pb-5">
      <UBadge
        v-if="vacancy?.title"
        :label="vacancy.title"
        color="primary"
        variant="subtle"
        size="lg"
        class="max-w-full rounded-full whitespace-normal text-start leading-snug"
      />
      <div class="space-y-1">
        <h2 class="text-h2 text-text-primary text-balance">
          Отклик на вакансию
        </h2>
        <p class="text-body text-text-secondary text-pretty">
          Заполните анкету по шагам. Поля со звёздочкой обязательны.
        </p>
      </div>
    </div>

    <UStepper
      v-model="currentStep"
      :items="stepItems"
      linear
      size="lg"
      color="primary"
      class="w-full min-w-0"
      :ui="{ title: 'text-caption sm:text-body' }"
    />

    <div
      v-if="currentGuide"
      class="flex items-start gap-3 rounded-xl border border-default bg-elevated/40 px-4 py-4 sm:px-5"
      role="note"
    >
      <UIcon
        :name="currentGuide.icon"
        class="mt-0.5 size-5 shrink-0 text-primary"
        aria-hidden="true"
      />
      <div class="min-w-0 space-y-2">
        <p class="text-body font-medium text-text-primary">
          {{ currentGuide.title }}
        </p>
        <ul class="space-y-1.5 text-caption text-text-secondary leading-relaxed">
          <li
            v-for="(item, index) in currentGuide.items"
            :key="index"
            class="flex gap-2 text-pretty"
          >
            <span
              class="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div
      aria-live="polite"
      aria-atomic="true"
      class="sr-only"
    >
      {{ liveMessage }}
    </div>

    <UForm
      :state="formState"
      :validate="validate"
      class="flex min-w-0 flex-col gap-6"
      @submit="handleSubmit"
      @error="onError"
    >
      <div
        v-show="currentStep === 0"
        class="space-y-4"
      >
        <DsSurface
          elevation="none"
          padding="lg"
          class="w-full"
        >
          <div class="space-y-4">
            <div class="space-y-1">
              <h3 class="text-h3 text-text-primary">
                Обязательные согласия
              </h3>
              <p class="text-body text-text-secondary text-pretty">
                Для подачи заявки необходимо отметить все пункты ниже.
              </p>
            </div>

            <UCollapsible>
              <UButton
                label="Что означает каждый пункт?"
                color="neutral"
                variant="link"
                size="lg"
                trailing-icon="i-lucide-chevron-down"
                class="h-auto px-0"
              />
              <template #content>
                <ul class="mt-2 list-disc space-y-2 pl-5 text-caption text-text-secondary leading-relaxed">
                  <li>Подтверждение достоверности сведений и соответствия квалификации.</li>
                  <li>Согласие на проверочные мероприятия при отборе кандидатов.</li>
                  <li>Согласие на обработку персональных данных по 152-ФЗ.</li>
                  <li>Согласие на направление анкеты в муниципальные организации района.</li>
                </ul>
              </template>
            </UCollapsible>

            <div class="space-y-4">
              <UFormField
                v-for="consent in consentFields"
                :key="consent.name"
                :name="consent.name"
              >
                <UCheckbox
                  v-model="formState[consent.name]"
                  :ui="{
                    root: 'relative flex items-start gap-3',
                    wrapper: 'min-w-0 flex-1',
                    label: 'min-w-0 text-pretty',
                  }"
                >
                  <template #label>
                    <span class="text-body leading-relaxed text-text-secondary">
                      {{ consent.label }}
                      <span
                        class="text-error"
                        aria-hidden="true"
                      > *</span>
                    </span>
                  </template>
                </UCheckbox>
              </UFormField>
            </div>
          </div>
        </DsSurface>
      </div>

      <section
        v-show="currentStep === 1"
        class="space-y-4"
        aria-labelledby="apply-form-personal"
      >
        <h3
          id="apply-form-personal"
          class="border-b border-default pb-2 text-h3 text-text-primary"
        >
          Личные данные
        </h3>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UFormField name="lastName">
            <template #label>
              <DsRequiredLabel label="Фамилия" />
            </template>
            <UInput
              v-model="formState.lastName"
              size="lg"
              placeholder="Иванов"
              autocomplete="family-name"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField name="firstName">
            <template #label>
              <DsRequiredLabel label="Имя" />
            </template>
            <UInput
              v-model="formState.firstName"
              size="lg"
              placeholder="Иван"
              autocomplete="given-name"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField
            label="Отчество"
            name="middleName"
            class="sm:col-span-2 lg:col-span-1"
          >
            <UInput
              v-model="formState.middleName"
              size="lg"
              placeholder="Иванович"
              autocomplete="additional-name"
              class="w-full min-w-0"
            />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <UFormField name="birthDate">
            <template #label>
              <DsRequiredLabel label="Дата рождения" />
            </template>
            <UInputDate
              v-model="formState.birthDate"
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
              v-model="formState.phone"
              type="tel"
              size="lg"
              placeholder="+7 (XXX) XXX-XX-XX"
              autocomplete="tel"
              class="w-full min-w-0"
            />
          </UFormField>
        </div>

        <UFormField name="email">
          <template #label>
            <DsRequiredLabel label="Email" />
          </template>
          <UInput
            v-model="formState.email"
            type="email"
            size="lg"
            placeholder="example@email.com"
            autocomplete="email"
            class="w-full min-w-0"
          />
        </UFormField>
      </section>

      <section
        v-show="currentStep === 2"
        class="space-y-4"
        aria-labelledby="apply-form-address"
      >
        <h3
          id="apply-form-address"
          class="border-b border-default pb-2 text-h3 text-text-primary"
        >
          Адресные данные
        </h3>

        <UFormField name="registrationAddress">
          <template #label>
            <DsRequiredLabel label="Адрес прописки" />
          </template>
          <UInput
            v-model="formState.registrationAddress"
            size="lg"
            placeholder="Город, улица, дом, квартира"
            autocomplete="street-address"
            class="w-full min-w-0"
          />
        </UFormField>

        <UFormField name="residenceAddress">
          <template #label>
            <DsRequiredLabel label="Адрес проживания" />
          </template>
          <UInput
            v-model="formState.residenceAddress"
            size="lg"
            placeholder="Город, улица, дом, квартира"
            class="w-full min-w-0"
          />
        </UFormField>

        <UFormField name="citizenship">
          <template #label>
            <DsRequiredLabel label="Гражданство" />
          </template>
          <UInput
            v-model="formState.citizenship"
            size="lg"
            placeholder="Российская Федерация"
            class="w-full min-w-0"
          />
        </UFormField>
      </section>

      <section
        v-show="currentStep === 3"
        class="space-y-6"
        aria-labelledby="apply-form-education"
      >
        <div class="space-y-4">
          <h3
            id="apply-form-education"
            class="border-b border-default pb-2 text-h3 text-text-primary"
          >
            Образование и опыт
          </h3>

          <UFormField name="education">
            <template #label>
              <DsRequiredLabel label="Образование" />
            </template>
            <UInput
              v-model="formState.education"
              size="lg"
              placeholder="Уровень и учебное заведение"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField name="specialty">
            <template #label>
              <DsRequiredLabel label="Специальность" />
            </template>
            <UInput
              v-model="formState.specialty"
              size="lg"
              placeholder="Направление подготовки"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField
            label="Стаж муниципальной службы"
            name="municipalExperience"
          >
            <UInput
              v-model="formState.municipalExperience"
              size="lg"
              placeholder="Например: 2 года"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField
            label="Трудовая деятельность"
            name="workExperience"
          >
            <UTextarea
              v-model="formState.workExperience"
              size="lg"
              placeholder="Сведения из трудовой книжки"
              :rows="4"
              class="w-full min-w-0"
            />
          </UFormField>
        </div>

        <div class="space-y-4">
          <h3 class="border-b border-default pb-2 text-h3 text-text-primary">
            Семейное положение
          </h3>

          <UFormField name="maritalStatus">
            <template #label>
              <DsRequiredLabel label="Семейное положение" />
            </template>
            <URadioGroup
              v-model="formState.maritalStatus"
              :items="maritalStatusOptions"
              size="lg"
            />
          </UFormField>

          <UFormField
            label="Наличие детей"
            name="children"
          >
            <UInput
              v-model="formState.children"
              size="lg"
              placeholder="Количество и возраст детей"
              class="w-full min-w-0"
            />
          </UFormField>
        </div>

        <div class="space-y-4">
          <h3 class="border-b border-default pb-2 text-h3 text-text-primary">
            Документы
          </h3>

          <UFormField
            label="Фото"
            name="photo"
            hint="JPG, PNG или GIF — необязательно"
          >
            <UFileUpload
              v-model="formState.photo"
              variant="button"
              size="lg"
              accept="image/*"
              label="Прикрепить фото"
              description="JPG, PNG или GIF (макс. 5 МБ)"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField name="resume">
            <template #label>
              <DsRequiredLabel label="Резюме" />
            </template>
            <UFileUpload
              v-model="formState.resume"
              variant="button"
              size="lg"
              accept=".pdf,.doc,.docx"
              label="Прикрепить резюме"
              description="PDF, DOC или DOCX (макс. 10 МБ)"
              class="w-full min-w-0"
            />
          </UFormField>
        </div>

        <UFormField
          label="О вакансии узнал(а)"
          name="vacancySource"
        >
          <UTextarea
            v-model="formState.vacancySource"
            size="lg"
            placeholder="Источник информации о вакансии"
            :rows="3"
            class="w-full min-w-0"
          />
        </UFormField>
      </section>

      <div class="flex flex-col-reverse gap-3 border-t border-default pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-col gap-2 sm:flex-row">
          <UButton
            v-if="currentStep > 0"
            label="Назад"
            color="neutral"
            variant="outline"
            size="lg"
            type="button"
            class="w-full justify-center sm:w-auto"
            @click="prevStep"
          />
          <UButton
            label="Отмена"
            color="neutral"
            variant="ghost"
            size="lg"
            type="button"
            class="w-full justify-center sm:w-auto"
            @click="$emit('cancel')"
          />
        </div>

        <UButton
          v-if="currentStep < lastStep"
          label="Далее"
          color="primary"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
          type="button"
          class="w-full justify-center rounded-full sm:w-auto"
          @click="nextStep"
        />
        <UButton
          v-else
          label="Отправить заявку"
          color="primary"
          size="lg"
          trailing-icon="i-lucide-send"
          type="submit"
          :loading="isSubmitting"
          class="w-full justify-center rounded-full sm:w-auto"
        />
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import type { Vacancy } from '~/components/VacancyCard.vue'

type ConsentFieldName =
  | 'consentFalseInfo'
  | 'consentVerification'
  | 'consentPersonalData'
  | 'consentResumeForwarding'

interface FormState {
  lastName: string
  firstName: string
  middleName: string
  birthDate: DateValue | null
  phone: string
  email: string
  registrationAddress: string
  residenceAddress: string
  citizenship: string
  education: string
  specialty: string
  municipalExperience: string
  workExperience: string
  maritalStatus: string
  children: string
  photo: File | File[] | null
  resume: File | File[] | null
  vacancySource: string
  consentFalseInfo: boolean
  consentVerification: boolean
  consentPersonalData: boolean
  consentResumeForwarding: boolean
}

defineProps<{
  vacancy?: Vacancy | null
}>()

const emit = defineEmits<{
  submit: [formData: FormState]
  cancel: []
}>()

const currentStep = ref(0)
const lastStep = 3
const isSubmitting = ref(false)
const liveMessage = ref('')

const stepItems = [
  { value: 0, title: 'Согласия', icon: 'i-lucide-shield-check' },
  { value: 1, title: 'Личные', icon: 'i-lucide-user' },
  { value: 2, title: 'Адрес', icon: 'i-lucide-map-pin' },
  { value: 3, title: 'Документы', icon: 'i-lucide-graduation-cap' },
]

const stepGuides = [
  {
    title: 'Перед началом',
    icon: 'i-lucide-shield-check',
    items: [
      'Все согласия обязательны для подачи заявки на вакансию.',
      'Текст согласий соответствует требованиям муниципальной службы и 152-ФЗ.',
    ],
  },
  {
    title: 'Личные данные',
    icon: 'i-lucide-user',
    items: [
      'Указывайте ФИО так, как в паспорте и документах об образовании.',
      'Телефон и email нужны для связи по вашей заявке.',
    ],
  },
  {
    title: 'Адресные данные',
    icon: 'i-lucide-map-pin',
    items: [
      'Адрес прописки и проживания указываются полностью.',
      'Гражданство — по документу, удостоверяющему личность.',
    ],
  },
  {
    title: 'Образование и документы',
    icon: 'i-lucide-file-text',
    items: [
      'Резюме обязательно: PDF, DOC или DOCX до 10 МБ.',
      'Фото необязательно, но поможет кадровой службе быстрее обработать заявку.',
    ],
  },
]

const consentFields: Array<{ name: ConsentFieldName, label: string }> = [
  {
    name: 'consentFalseInfo',
    label: 'Мне известно, что сообщение заведомо ложных сведений и несоответствие квалификационным требованиям могут повлечь отказ в приёме на должность',
  },
  {
    name: 'consentVerification',
    label: 'На проведение в отношении меня проверочных мероприятий согласен (согласна)',
  },
  {
    name: 'consentPersonalData',
    label: 'Даю согласие на обработку персональных данных в целях, связанных с возможным трудоустройством (152-ФЗ)',
  },
  {
    name: 'consentResumeForwarding',
    label: 'На направление моей анкеты в муниципальные организации Сургутского района согласен (согласна)',
  },
]

const formState = reactive<FormState>({
  lastName: '',
  firstName: '',
  middleName: '',
  birthDate: null,
  phone: '',
  email: '',
  registrationAddress: '',
  residenceAddress: '',
  citizenship: '',
  education: '',
  specialty: '',
  municipalExperience: '',
  workExperience: '',
  maritalStatus: '',
  children: '',
  photo: null,
  resume: null,
  vacancySource: '',
  consentFalseInfo: false,
  consentVerification: false,
  consentPersonalData: false,
  consentResumeForwarding: false,
})

const maritalStatusOptions = [
  { value: 'single', label: 'Холост/Не замужем' },
  { value: 'married', label: 'Женат/Замужем' },
  { value: 'divorced', label: 'Разведен(а)' },
  { value: 'widowed', label: 'Вдовец/Вдова' },
]

const currentGuide = computed(() => stepGuides[currentStep.value])

function hasResumeFile(value: FormState['resume']) {
  if (!value) return false
  if (Array.isArray(value)) return value.length > 0
  return true
}

function validateStep(step: number) {
  const errors: { name: string, message: string }[] = []

  if (step === 0) {
    if (!formState.consentFalseInfo) errors.push({ name: 'consentFalseInfo', message: 'Необходимо согласие' })
    if (!formState.consentVerification) errors.push({ name: 'consentVerification', message: 'Необходимо согласие' })
    if (!formState.consentPersonalData) errors.push({ name: 'consentPersonalData', message: 'Необходимо согласие' })
    if (!formState.consentResumeForwarding) errors.push({ name: 'consentResumeForwarding', message: 'Необходимо согласие' })
  }

  if (step === 1) {
    if (!formState.lastName?.trim()) errors.push({ name: 'lastName', message: 'Введите фамилию' })
    if (!formState.firstName?.trim()) errors.push({ name: 'firstName', message: 'Введите имя' })
    if (!formState.birthDate) errors.push({ name: 'birthDate', message: 'Выберите дату рождения' })
    if (!formState.phone?.trim()) errors.push({ name: 'phone', message: 'Введите номер телефона' })
    if (!formState.email?.trim()) errors.push({ name: 'email', message: 'Введите email' })
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      errors.push({ name: 'email', message: 'Проверьте формат email' })
    }
  }

  if (step === 2) {
    if (!formState.registrationAddress?.trim()) errors.push({ name: 'registrationAddress', message: 'Введите адрес прописки' })
    if (!formState.residenceAddress?.trim()) errors.push({ name: 'residenceAddress', message: 'Введите адрес проживания' })
    if (!formState.citizenship?.trim()) errors.push({ name: 'citizenship', message: 'Введите гражданство' })
  }

  if (step === 3) {
    if (!formState.education?.trim()) errors.push({ name: 'education', message: 'Введите образование' })
    if (!formState.specialty?.trim()) errors.push({ name: 'specialty', message: 'Введите специальность' })
    if (!formState.maritalStatus) errors.push({ name: 'maritalStatus', message: 'Выберите семейное положение' })
    if (!hasResumeFile(formState.resume)) errors.push({ name: 'resume', message: 'Загрузите резюме' })
  }

  return errors
}

function validate() {
  let errors: { name: string, message: string }[] = []
  for (let step = 0; step <= lastStep; step++) {
    errors = errors.concat(validateStep(step))
  }
  return errors
}

function nextStep() {
  const errors = validateStep(currentStep.value)
  if (errors.length) {
    liveMessage.value = errors[0]!.message
    onError(errors)
    return
  }

  if (currentStep.value < lastStep) {
    currentStep.value++
    liveMessage.value = `Шаг ${currentStep.value + 1} из ${lastStep + 1}: ${stepItems[currentStep.value]?.title ?? ''}`
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
    liveMessage.value = `Шаг ${currentStep.value + 1} из ${lastStep + 1}: ${stepItems[currentStep.value]?.title ?? ''}`
  }
}

function onError(event: unknown) {
  const errors = Array.isArray(event) ? event : (event as { errors?: Array<{ id?: string, name: string }> })?.errors ?? []
  if (errors.length > 0) {
    const first = errors[0]!
    const el = first.id
      ? document.getElementById(first.id)
      : document.querySelector(`[name="${first.name}"]`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    if (el instanceof HTMLElement) el.focus()
  }
}

function resetForm() {
  Object.assign(formState, {
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: null,
    phone: '',
    email: '',
    registrationAddress: '',
    residenceAddress: '',
    citizenship: '',
    education: '',
    specialty: '',
    municipalExperience: '',
    workExperience: '',
    maritalStatus: '',
    children: '',
    photo: null,
    resume: null,
    vacancySource: '',
    consentFalseInfo: false,
    consentVerification: false,
    consentPersonalData: false,
    consentResumeForwarding: false,
  })
  currentStep.value = 0
}

async function handleSubmit() {
  isSubmitting.value = true
  try {
    emit('submit', { ...formState })
    liveMessage.value = 'Заявка отправлена. Спасибо за отклик.'
    resetForm()
  }
  catch (error) {
    console.error('Form submission error:', error)
    liveMessage.value = 'Не удалось отправить заявку. Проверьте данные и попробуйте снова.'
  }
  finally {
    isSubmitting.value = false
  }
}
</script>
