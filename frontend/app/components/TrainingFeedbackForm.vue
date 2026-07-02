<template>
  <DsSurface
    elevation="none"
    padding="lg"
    class="w-full"
  >
    <UForm
      :state="form"
      :validate="validate"
      class="flex flex-col gap-6"
      @submit="onSubmit"
    >
      <div
        class="flex items-start gap-3 rounded-xl border border-default bg-elevated/40 px-4 py-4 sm:px-5"
        role="note"
      >
        <UIcon
          name="i-lucide-info"
          class="size-5 shrink-0 text-primary mt-0.5"
          aria-hidden="true"
        />
        <div class="min-w-0 space-y-1">
          <p class="text-body font-medium text-text-primary">
            Не для официальных обращений
          </p>
          <p class="text-caption text-text-secondary leading-relaxed text-pretty">
            Форма предназначена для предложений по организации обучения. Идентификация не требуется — имя и подразделение можно не указывать.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <UFormField
          label="Имя"
          name="name"
        >
          <UInput
            v-model="form.name"
            size="lg"
            placeholder="Как к вам обращаться"
            autocomplete="name"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Подразделение"
          name="department"
        >
          <USelectMenu
            v-model="form.department"
            :items="departmentOptions"
            size="lg"
            value-key="value"
            placeholder="Выберите орган"
            :search-input="{
              placeholder: 'Поиск ОФО…',
              icon: 'i-lucide-search',
            }"
            class="w-full"
          />
        </UFormField>
      </div>

      <UFormField name="message">
        <template #label>
          <DsRequiredLabel label="Ваше предложение" />
        </template>
        <UTextarea
          v-model="form.message"
          :rows="5"
          size="lg"
          placeholder="Опишите тему, формат или пожелания по обучению, встречам и мастер-классам"
          class="w-full"
        />
      </UFormField>

      <UButton
        type="submit"
        label="Отправить предложение"
        color="primary"
        size="lg"
        trailing-icon="i-lucide-arrow-right"
        :loading="loading"
        class="w-full justify-center sm:w-auto"
      />
    </UForm>
  </DsSurface>
</template>

<script setup lang="ts">
import { ofoAnyValue, ofoApiBranch, ofoList } from '~/data/ofo-list'

const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)

const departmentOptions = [
  { label: 'Не указано', value: ofoAnyValue },
  ...ofoList.map(name => ({ label: name, value: name })),
]

const form = reactive({
  name: '',
  department: ofoAnyValue,
  message: '',
})

function validate(state: typeof form) {
  const errors: { name: string, message: string }[] = []
  if (!state.message?.trim()) errors.push({ name: 'message', message: 'Введите текст предложения' })
  return errors
}

function resetForm() {
  form.name = ''
  form.department = ofoAnyValue
  form.message = ''
}

async function onSubmit() {
  loading.value = true
  try {
    const department = ofoApiBranch(form.department)
    await $fetch(`${config.public.apiBaseUrl}/api/training-feedback/`, {
      method: 'POST',
      body: {
        name: form.name.trim(),
        department,
        message: form.message.trim(),
      },
    })
    toast.add({
      title: 'Предложение отправлено',
      description: 'Спасибо за обратную связь по организации обучения.',
      color: 'success',
    })
    resetForm()
  }
  catch (error: unknown) {
    const err = error as { data?: { error?: string } }
    toast.add({
      title: 'Не удалось отправить',
      description: err.data?.error || 'Попробуйте позже',
      color: 'error',
    })
  }
  finally {
    loading.value = false
  }
}
</script>
