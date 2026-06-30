<template>
  <div class="application-form">
    <div class="text-center py-4 border-b border-border-default mb-6">
      <UIcon
        name="i-lucide-file-text"
        class="h-10 w-10 mx-auto mb-3 text-primary-500"
        aria-hidden="true"
      />
      <h2 class="text-h2 text-text-primary">
        Форма отклика на вакансию
      </h2>
      <p
        v-if="vacancy"
        class="text-caption text-text-muted mt-2"
      >
        Вакансия: {{ vacancy.title }}
      </p>
    </div>

    <UStepper
      v-model="currentStep"
      :items="stepItems"
      linear
      class="mb-6"
      :ui="{ title: 'hidden sm:block text-caption' }"
    />

    <!-- aria-live для экранных читалок -->
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
      class="space-y-6 pb-24 md:pb-0"
      @submit="handleSubmit"
      @error="onError"
    >
      <!-- Шаг 0: Согласия -->
      <div v-show="currentStep === 0" class="space-y-4">
        <DsSurface
          elevation="none"
          padding="md"
          class="bg-surface-sunken border-amber-200 dark:border-amber-800"
        >
          <h3 class="text-h3 text-text-primary mb-2">
            Обязательные согласия
          </h3>
          <p class="text-body text-text-secondary mb-4">
            Для подачи заявки необходимо отметить все пункты ниже.
          </p>

          <UCollapsible class="mb-4">
            <UButton
              label="Что означает каждый пункт?"
              color="neutral"
              variant="link"
              trailing-icon="i-lucide-chevron-down"
              class="px-0 min-h-11"
            />
            <template #content>
              <ul class="mt-2 space-y-2 text-caption text-text-secondary list-disc pl-5">
                <li>Подтверждение достоверности сведений и соответствия квалификации.</li>
                <li>Согласие на проверочные мероприятия при отборе кандидатов.</li>
                <li>Согласие на обработку персональных данных по 152-ФЗ.</li>
                <li>Согласие на направление анкеты в муниципальные организации района.</li>
              </ul>
            </template>
          </UCollapsible>

          <div class="space-y-3">
            <UFormField name="consentFalseInfo">
              <UCheckbox v-model="formState.consentFalseInfo" required>
                <template #label>
                  <span class="text-body text-text-secondary">
                    Мне известно, что сообщение заведомо ложных сведений и несоответствие квалификационным требованиям могут повлечь отказ в приёме на должность
                  </span>
                </template>
              </UCheckbox>
            </UFormField>

            <UFormField name="consentVerification">
              <UCheckbox v-model="formState.consentVerification" required>
                <template #label>
                  <span class="text-body text-text-secondary">
                    На проведение в отношении меня проверочных мероприятий согласен (согласна)
                  </span>
                </template>
              </UCheckbox>
            </UFormField>

            <UFormField name="consentPersonalData">
              <UCheckbox v-model="formState.consentPersonalData" required>
                <template #label>
                  <span class="text-body text-text-secondary">
                    Даю согласие на обработку персональных данных в целях, связанных с возможным трудоустройством (152-ФЗ)
                  </span>
                </template>
              </UCheckbox>
            </UFormField>

            <UFormField name="consentResumeForwarding">
              <UCheckbox v-model="formState.consentResumeForwarding" required>
                <template #label>
                  <span class="text-body text-text-secondary">
                    На направление моей анкеты в муниципальные организации Сургутского района согласен (согласна)
                  </span>
                </template>
              </UCheckbox>
            </UFormField>
          </div>
        </DsSurface>
      </div>

      <!-- Шаг 1: Личные данные -->
      <div v-show="currentStep === 1" class="space-y-4">
        <h3 class="text-h3 text-text-primary border-b border-border-default pb-2">
          Личные данные
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UFormField label="Фамилия" name="lastName" required>
            <UInput v-model="formState.lastName" placeholder="Введите фамилию" />
          </UFormField>
          <UFormField label="Имя" name="firstName" required>
            <UInput v-model="formState.firstName" placeholder="Введите имя" />
          </UFormField>
          <UFormField label="Отчество" name="middleName">
            <UInput v-model="formState.middleName" placeholder="Введите отчество" />
          </UFormField>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormField label="Дата рождения" name="birthDate" required>
            <UInputDate v-model="formState.birthDate" icon="i-lucide-calendar" />
          </UFormField>
          <UFormField label="Номер телефона" name="phone" required>
            <UInput v-model="formState.phone" placeholder="+7 (XXX) XXX-XX-XX" type="tel" />
          </UFormField>
        </div>
        <UFormField label="E-mail" name="email" required>
          <UInput v-model="formState.email" placeholder="example@email.com" type="email" />
        </UFormField>
      </div>

      <!-- Шаг 2: Адрес -->
      <div v-show="currentStep === 2" class="space-y-4">
        <h3 class="text-h3 text-text-primary border-b border-border-default pb-2">
          Адресные данные
        </h3>
        <UFormField label="Адрес прописки" name="registrationAddress" required>
          <UInput v-model="formState.registrationAddress" placeholder="Введите адрес прописки" />
        </UFormField>
        <UFormField label="Адрес проживания" name="residenceAddress" required>
          <UInput v-model="formState.residenceAddress" placeholder="Введите адрес проживания" />
        </UFormField>
        <UFormField label="Гражданство" name="citizenship" required>
          <UInput v-model="formState.citizenship" placeholder="Введите гражданство" />
        </UFormField>
      </div>

      <!-- Шаг 3: Образование и файлы -->
      <div v-show="currentStep === 3" class="space-y-6">
        <div class="space-y-4">
          <h3 class="text-h3 text-text-primary border-b border-border-default pb-2">
            Образование и опыт
          </h3>
          <UFormField label="Образование" name="education" required>
            <UInput v-model="formState.education" placeholder="Введите образование" />
          </UFormField>
          <UFormField label="Специальность" name="specialty" required>
            <UInput v-model="formState.specialty" placeholder="Введите специальность" />
          </UFormField>
          <UFormField label="Стаж муниципальной службы" name="municipalExperience">
            <UInput v-model="formState.municipalExperience" placeholder="Введите стаж" />
          </UFormField>
          <UFormField label="Трудовая деятельность" name="workExperience">
            <UTextarea v-model="formState.workExperience" placeholder="Сведения из трудовой книжки" :rows="3" />
          </UFormField>
        </div>

        <div class="space-y-4">
          <h3 class="text-h3 text-text-primary border-b border-border-default pb-2">
            Семейное положение
          </h3>
          <UFormField label="Семейное положение" name="maritalStatus" required>
            <URadioGroup v-model="formState.maritalStatus" :items="maritalStatusOptions" />
          </UFormField>
          <UFormField label="Наличие детей" name="children">
            <UInput v-model="formState.children" placeholder="Количество и возраст детей" />
          </UFormField>
        </div>

        <div class="space-y-4">
          <h3 class="text-h3 text-text-primary border-b border-border-default pb-2">
            Файлы
          </h3>
          <UFormField label="Фото" name="photo">
            <UFileUpload v-model="formState.photo" accept="image/*" label="Загрузите фото" description="JPG, PNG или GIF (макс. 5 МБ)" />
          </UFormField>
          <UFormField label="Резюме" name="resume" required>
            <UFileUpload v-model="formState.resume" accept=".pdf,.doc,.docx" label="Загрузите резюме" description="PDF, DOC или DOCX (макс. 10 МБ)" />
          </UFormField>
        </div>

        <UFormField label="О вакансии узнал(а)" name="vacancySource">
          <UTextarea v-model="formState.vacancySource" placeholder="Источник информации о вакансии" :rows="2" />
        </UFormField>
      </div>

      <!-- Sticky footer: mobile + desktop -->
      <div class="application-form__footer sticky bottom-0 left-0 right-0 z-10 -mx-4 px-4 py-3 md:mx-0 md:px-0 md:py-0 md:static bg-surface-raised/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-t border-border-default md:border-t-0 md:pt-6 flex flex-wrap justify-between gap-3 mt-4">
        <div class="flex gap-2">
          <UButton
            v-if="currentStep > 0"
            label="Назад"
            color="neutral"
            variant="outline"
            type="button"
            class="min-h-11"
            @click="prevStep"
          />
          <UButton
            label="Отмена"
            color="neutral"
            variant="ghost"
            type="button"
            class="min-h-11"
            @click="$emit('cancel')"
          />
        </div>

        <UButton
          v-if="currentStep < lastStep"
          label="Далее"
          color="primary"
          variant="solid"
          type="button"
          class="min-h-11 font-medium ml-auto"
          @click="nextStep"
        />
        <UButton
          v-else
          label="Отправить"
          color="primary"
          variant="solid"
          type="submit"
          :loading="isSubmitting"
          class="min-h-11 font-medium ml-auto"
        />
      </div>
    </UForm>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const props = defineProps({
  vacancy: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['submit', 'cancel'])

const currentStep = ref(0)
const lastStep = 3
const isSubmitting = ref(false)
const liveMessage = ref('')

const stepItems = [
  { value: 0, title: 'Согласия', icon: 'i-lucide-shield-check' },
  { value: 1, title: 'Личные', icon: 'i-lucide-user' },
  { value: 2, title: 'Адрес', icon: 'i-lucide-map-pin' },
  { value: 3, title: 'Образование', icon: 'i-lucide-graduation-cap' },
]

const formState = reactive({
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

function validateStep(step) {
  const errors = []

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
    if (!formState.resume || (Array.isArray(formState.resume) && formState.resume.length === 0)) {
      errors.push({ name: 'resume', message: 'Загрузите резюме' })
    }
  }

  return errors
}

const validate = (state) => {
  let errors = []
  for (let step = 0; step <= lastStep; step++) {
    errors = errors.concat(validateStep(step))
  }
  return errors
}

function nextStep() {
  const errors = validateStep(currentStep.value)
  if (errors.length) {
    liveMessage.value = errors[0].message
    onError(errors)
    return
  }
  if (currentStep.value < lastStep) {
    currentStep.value++
    liveMessage.value = `Шаг ${currentStep.value + 1} из ${lastStep + 1}: ${stepItems[currentStep.value].title}`
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
    liveMessage.value = `Шаг ${currentStep.value + 1} из ${lastStep + 1}: ${stepItems[currentStep.value].title}`
  }
}

const onError = (event) => {
  const errors = Array.isArray(event) ? event : event?.errors ?? []
  if (errors?.length > 0) {
    const id = errors[0].id
    const el = id ? document.getElementById(id) : document.querySelector(`[name="${errors[0].name}"]`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    el?.focus()
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    emit('submit', { ...formState })
    liveMessage.value = 'Заявка отправлена. Спасибо за отклик.'
    Object.keys(formState).forEach((key) => {
      if (key === 'maritalStatus') formState[key] = ''
      else if (key === 'photo' || key === 'resume') formState[key] = null
      else if (key.startsWith('consent')) formState[key] = false
      else formState[key] = ''
    })
    currentStep.value = 0
  } catch (error) {
    console.error('Form submission error:', error)
    liveMessage.value = 'Не удалось отправить заявку. Проверьте данные и попробуйте снова.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
