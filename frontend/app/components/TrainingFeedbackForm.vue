<template>
  <div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      Предложения по организации обучения
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
      Форма не предназначена для подачи официальных обращений. Идентификация не требуется.
    </p>

    <UForm :state="form" :validate="validate" class="space-y-4" @submit="onSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UFormField label="Имя (необязательно)" name="name">
          <UInput v-model="form.name" placeholder="Как к вам обращаться" />
        </UFormField>
        <UFormField label="Подразделение (необязательно)" name="department">
          <UInput v-model="form.department" placeholder="Орган / управление" />
        </UFormField>
      </div>

      <UFormField label="Ваше предложение" name="message" required>
        <UTextarea
          v-model="form.message"
          :rows="4"
          placeholder="Опишите тему, формат или пожелания по обучению"
        />
      </UFormField>

      <UButton type="submit" label="Отправить предложение" color="primary" :loading="loading" />
    </UForm>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)

const form = reactive({
  name: '',
  department: '',
  message: ''
})

function validate(state: typeof form) {
  const errors: { name: string; message: string }[] = []
  if (!state.message?.trim()) errors.push({ name: 'message', message: 'Введите текст предложения' })
  return errors
}

async function onSubmit() {
  loading.value = true
  try {
    await $fetch(`${config.public.apiBaseUrl}/api/training-feedback/`, {
      method: 'POST',
      body: {
        name: form.name.trim(),
        department: form.department.trim(),
        message: form.message.trim()
      }
    })
    toast.add({
      title: 'Предложение отправлено',
      description: 'Спасибо за обратную связь!',
      color: 'success'
    })
    form.name = ''
    form.department = ''
    form.message = ''
  } catch (error: unknown) {
    const err = error as { data?: { error?: string } }
    toast.add({
      title: 'Не удалось отправить',
      description: err.data?.error || 'Попробуйте позже',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>
