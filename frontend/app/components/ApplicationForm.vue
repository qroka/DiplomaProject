<template>
  <div>
    <div class="text-center py-6 border-b border-gray-300 dark:border-gray-800 mb-6">
      <UIcon name="i-lucide-file-text" class="h-12 w-12 mx-auto mb-4 text-primary-500" />
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Форма отклика на вакансию</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-2" v-if="vacancy">Вакансия: {{ vacancy.title }}</p>
    </div>

    <UForm :state="formState" :validate="validate" @submit="handleSubmit" @error="onError" class="space-y-6">
      <!-- Required Consent Checkboxes Section -->
      <div class="space-y-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-amber-200 dark:border-amber-800 pb-2">Обязательные согласия</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Для подачи заявки необходимо отметить все согласия:</p>

        <UFormField name="consentFalseInfo">
          <UCheckbox v-model="formState.consentFalseInfo" :required="true">
            <template #label>
              <span class="text-sm text-gray-700 dark:text-gray-300">
                Мне известно, что сообщение о себе в анкете заведомо ложных сведений и мое несоответствие квалификационным требованиям могут повлечь отказ в приеме на должность, поступлении на государственную гражданскую службу РФ или на муниципальную службу
              </span>
            </template>
          </UCheckbox>
        </UFormField>

        <UFormField name="consentVerification">
          <UCheckbox v-model="formState.consentVerification" :required="true">
            <template #label>
              <span class="text-sm text-gray-700 dark:text-gray-300">
                На проведение в отношении меня проверочных мероприятий согласен (согласна)
              </span>
            </template>
          </UCheckbox>
        </UFormField>

        <UFormField name="consentPersonalData">
          <UCheckbox v-model="formState.consentPersonalData" :required="true">
            <template #label>
              <span class="text-sm text-gray-700 dark:text-gray-300">
                Согласно Федеральному закону от 27.07.2006 № 152-ФЗ «О персональных данных» даю согласие на обработку и использование моих персональных данных в целях, связанных с возможным трудоустройством
              </span>
            </template>
          </UCheckbox>
        </UFormField>

        <UFormField name="consentResumeForwarding">
          <UCheckbox v-model="formState.consentResumeForwarding" :required="true">
            <template #label>
              <span class="text-sm text-gray-700 dark:text-gray-300">
                На направление моей анкеты (резюме) в городские и сельские поселения Сургутского района, в муниципальные организации Сургутского района согласен (согласна)
              </span>
            </template>
          </UCheckbox>
        </UFormField>
      </div>

      <!-- Personal Information Section -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-800 pb-2">Личные данные</h3>

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

      <!-- Address Information Section -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-800 pb-2">Адресные данные</h3>

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

      <!-- Education and Work Section -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-800 pb-2">Образование и опыт работы</h3>

        <UFormField label="Образование" name="education" required>
          <UInput v-model="formState.education" placeholder="Введите образование" />
        </UFormField>

        <UFormField label="Специальность" name="specialty" required>
          <UInput v-model="formState.specialty" placeholder="Введите специальность" />
        </UFormField>

        <UFormField label="Стаж муниципальной службы" name="municipalExperience">
          <UInput v-model="formState.municipalExperience" placeholder="Введите стаж" />
        </UFormField>

        <UFormField label="Трудовая деятельность (сведения из трудовой книжки)" name="workExperience">
          <UTextarea v-model="formState.workExperience" placeholder="Опишите трудовую деятельность" :rows="3" />
        </UFormField>
      </div>

      <!-- Family Information Section -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-800 pb-2">Семейное положение</h3>

        <UFormField label="Семейное положение" name="maritalStatus" required>
          <URadioGroup v-model="formState.maritalStatus" :items="maritalStatusOptions" legend="Семейное положение" />
        </UFormField>

        <UFormField label="Наличие детей" name="children">
          <UInput v-model="formState.children" placeholder="Укажите количество и возраст детей" />
        </UFormField>
      </div>

      <!-- File Upload Section -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-800 pb-2">Прикрепленные файлы</h3>

        <UFormField label="Фото" name="photo">
          <UFileUpload v-model="formState.photo" accept="image/*" label="Загрузите ваше фото" description="JPG, PNG или GIF (макс. 5MB)" />
        </UFormField>

        <UFormField label="Файл с резюме" name="resume" required>
          <UFileUpload v-model="formState.resume" accept=".pdf,.doc,.docx" label="Загрузите ваше резюме" description="PDF, DOC или DOCX (макс. 10MB)" />
        </UFormField>
      </div>

      <!-- Additional Information -->
      <div class="space-y-4">
        <UFormField label="О вакансии узнал(а)" name="vacancySource">
          <UTextarea v-model="formState.vacancySource" placeholder="Укажите, где вы узнали о вакансии" :rows="2" />
        </UFormField>
      </div>

      <!-- Action buttons -->
      <div class="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-300 dark:border-gray-800">
        <UButton
          label="Отмена"
          color="neutral"
          variant="outline"
          @click="$emit('cancel')"
        />
        <UButton
          label="Отправить"
          color="primary"
          type="submit"
          :loading="isSubmitting"
        />
      </div>
    </UForm>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  vacancy: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['submit', 'cancel'])

const isSubmitting = ref(false)

// Form validation — marks required fields red and prevents submission
const validate = (state) => {
  const errors = []

  if (!state.lastName?.trim()) errors.push({ name: 'lastName', message: 'Введите фамилию' })
  if (!state.firstName?.trim()) errors.push({ name: 'firstName', message: 'Введите имя' })
  if (!state.birthDate) errors.push({ name: 'birthDate', message: 'Выберите дату рождения' })
  if (!state.phone?.trim()) errors.push({ name: 'phone', message: 'Введите номер телефона' })
  if (!state.email?.trim()) errors.push({ name: 'email', message: 'Введите email' })
  if (!state.registrationAddress?.trim()) errors.push({ name: 'registrationAddress', message: 'Введите адрес прописки' })
  if (!state.residenceAddress?.trim()) errors.push({ name: 'residenceAddress', message: 'Введите адрес проживания' })
  if (!state.citizenship?.trim()) errors.push({ name: 'citizenship', message: 'Введите гражданство' })
  if (!state.education?.trim()) errors.push({ name: 'education', message: 'Введите образование' })
  if (!state.specialty?.trim()) errors.push({ name: 'specialty', message: 'Введите специальность' })
  if (!state.maritalStatus) errors.push({ name: 'maritalStatus', message: 'Выберите семейное положение' })
  if (!state.resume || (Array.isArray(state.resume) && state.resume.length === 0)) {
    errors.push({ name: 'resume', message: 'Загрузите резюме' })
  }

  // Consent checkboxes validation
  if (!state.consentFalseInfo) errors.push({ name: 'consentFalseInfo', message: 'Необходимо согласие' })
  if (!state.consentVerification) errors.push({ name: 'consentVerification', message: 'Необходимо согласие' })
  if (!state.consentPersonalData) errors.push({ name: 'consentPersonalData', message: 'Необходимо согласие' })
  if (!state.consentResumeForwarding) errors.push({ name: 'consentResumeForwarding', message: 'Необходимо согласие' })

  return errors
}

// Scroll to the first field with an error
const onError = (event) => {
  const errors = event
  if (errors?.length > 0) {
    const id = errors[0].id
    const el = id ? document.getElementById(id) : document.querySelector(`[name="${errors[0].name}"]`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    el?.focus()
  }
}

// Form state
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
  // Required consent checkboxes
  consentFalseInfo: false,
  consentVerification: false,
  consentPersonalData: false,
  consentResumeForwarding: false
})

// Marital status options
const maritalStatusOptions = [
  { value: 'single', label: 'Холост/Не замужем' },
  { value: 'married', label: 'Женат/Замужем' },
  { value: 'divorced', label: 'Разведен(а)' },
  { value: 'widowed', label: 'Вдовец/Вдова' }
]

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // For now, just emit the form data
    // In a real app, you would validate and send to backend here
    emit('submit', { ...formState })

    // Reset form after successful submission
    Object.keys(formState).forEach(key => {
      if (key === 'maritalStatus') {
        formState[key] = ''
      } else if (key === 'photo' || key === 'resume') {
        formState[key] = null
      } else if (key.startsWith('consent')) {
        formState[key] = false
      } else {
        formState[key] = ''
      }
    })
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>