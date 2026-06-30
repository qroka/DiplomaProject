<template>
  <div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      Заявка на практику
    </h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
      Заполните форму — специалист свяжется с вами для согласования прохождения практики в администрации Сургутского района.
    </p>

    <UForm :state="form" :validate="validate" class="space-y-5" @submit="onSubmit">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UFormField label="Фамилия" name="lastName" required>
          <UInput v-model="form.lastName" placeholder="Иванов" />
        </UFormField>
        <UFormField label="Имя" name="firstName" required>
          <UInput v-model="form.firstName" placeholder="Иван" />
        </UFormField>
        <UFormField label="Отчество" name="middleName">
          <UInput v-model="form.middleName" placeholder="Иванович" />
        </UFormField>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UFormField label="Дата рождения" name="birthDate" required>
          <UInputDate v-model="form.birthDate" icon="i-lucide-calendar" />
        </UFormField>
        <UFormField label="Телефон" name="phone" required>
          <UInput v-model="form.phone" type="tel" placeholder="+7 (XXX) XXX-XX-XX" />
        </UFormField>
      </div>

      <UFormField label="Email" name="email" required>
        <UInput v-model="form.email" type="email" placeholder="example@email.com" />
      </UFormField>

      <UFormField label="Учебное заведение" name="educationalInstitution" required>
        <UInput v-model="form.educationalInstitution" placeholder="Полное название вуза / колледжа" />
      </UFormField>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UFormField label="Курс" name="course" required>
          <UInput v-model="form.course" placeholder="Например: 3" />
        </UFormField>
        <UFormField label="Специальность" name="specialty" required>
          <UInput v-model="form.specialty" placeholder="Направление подготовки" />
        </UFormField>
      </div>

      <UFormField label="Желаемый период практики" name="practicePeriod" required>
        <UInput v-model="form.practicePeriod" placeholder="Например: июнь–июль 2026" />
      </UFormField>

      <UFormField label="Желаемое подразделение (необязательно)" name="preferredDepartment">
        <UInput v-model="form.preferredDepartment" placeholder="Орган / управление администрации" />
      </UFormField>

      <UFormField label="Комментарий" name="comment">
        <UTextarea v-model="form.comment" :rows="3" placeholder="Дополнительная информация" />
      </UFormField>

      <UFormField label="Сопроводительное письмо" name="applicationLetter">
        <UFileUpload
          v-model="form.applicationLetter"
          accept=".pdf,.doc,.docx"
          label="Прикрепить файл"
          description="PDF, DOC или DOCX (макс. 10 МБ)"
        />
      </UFormField>

      <UFormField name="consentPersonalData">
        <UCheckbox v-model="form.consentPersonalData" required>
          <template #label>
            <span class="text-sm text-gray-700 dark:text-gray-300">
              Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ
            </span>
          </template>
        </UCheckbox>
      </UFormField>

      <UButton type="submit" label="Отправить заявку" color="primary" :loading="loading" />
    </UForm>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)

const form = reactive({
  lastName: '',
  firstName: '',
  middleName: '',
  birthDate: null as Date | null,
  phone: '',
  email: '',
  educationalInstitution: '',
  course: '',
  specialty: '',
  practicePeriod: '',
  preferredDepartment: '',
  comment: '',
  applicationLetter: null as File | null,
  consentPersonalData: false
})

function validate(state: typeof form) {
  const errors: { name: string; message: string }[] = []
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
  form.preferredDepartment = ''
  form.comment = ''
  form.applicationLetter = null
  form.consentPersonalData = false
}

async function onSubmit() {
  loading.value = true
  try {
    const data = new FormData()
    data.append('last_name', form.lastName.trim())
    data.append('first_name', form.firstName.trim())
    if (form.middleName.trim()) data.append('middle_name', form.middleName.trim())
    if (form.birthDate) data.append('birth_date', form.birthDate.toISOString().split('T')[0])
    data.append('phone', form.phone.trim())
    data.append('email', form.email.trim())
    data.append('educational_institution', form.educationalInstitution.trim())
    data.append('course', form.course.trim())
    data.append('specialty', form.specialty.trim())
    data.append('practice_period', form.practicePeriod.trim())
    if (form.preferredDepartment.trim()) data.append('preferred_department', form.preferredDepartment.trim())
    if (form.comment.trim()) data.append('comment', form.comment.trim())
    if (form.applicationLetter) data.append('application_letter', form.applicationLetter)
    data.append('consent_personal_data', form.consentPersonalData ? 'true' : 'false')

    await $fetch(`${config.public.apiBaseUrl}/api/youth/practice-apply/`, {
      method: 'POST',
      body: data
    })

    toast.add({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами для согласования практики.',
      color: 'success'
    })
    resetForm()
  } catch {
    toast.add({
      title: 'Не удалось отправить заявку',
      description: 'Проверьте данные и попробуйте снова',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>
