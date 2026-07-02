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
          class="mt-0.5 size-5 shrink-0 text-primary"
          aria-hidden="true"
        />
        <div class="min-w-0 space-y-1">
          <p class="text-body font-medium text-text-primary">
            Сообщение для команды портала
          </p>
          <p class="text-caption leading-relaxed text-pretty text-text-secondary">
            Форма предназначена для вопросов, предложений и замечаний к работе кадрового портала. Для официальных обращений используйте вкладку «Госуслуги».
          </p>
        </div>
      </div>

      <UFormField name="message">
        <template #label>
          <DsRequiredLabel label="Сообщение" />
        </template>
        <UTextarea
          v-model="form.message"
          :rows="6"
          size="lg"
          placeholder="Опишите вопрос, предложение или замечание"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Фото (необязательно)"
        name="photo"
        hint="JPG, PNG или GIF — для иллюстрации проблемы или предложения"
      >
        <UFileUpload
          v-model="form.photo"
          variant="button"
          size="lg"
          accept="image/*"
          label="Прикрепить изображение"
          description="JPG, PNG или GIF"
          class="w-full"
        />
      </UFormField>

      <UButton
        type="submit"
        label="Отправить сообщение"
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
const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)

const form = reactive({
  message: '',
  photo: null as File | null,
})

function validate(state: typeof form) {
  const errors: { name: string, message: string }[] = []
  if (!state.message?.trim()) {
    errors.push({ name: 'message', message: 'Введите сообщение' })
  }
  return errors
}

function resetForm() {
  form.message = ''
  form.photo = null
}

async function onSubmit() {
  loading.value = true

  try {
    const formData = new FormData()
    formData.append('message', form.message.trim())
    if (form.photo) {
      formData.append('photo', form.photo)
    }

    const data = await $fetch<{ message: string }>(`${config.public.apiBaseUrl}/api/submit-feedback/`, {
      method: 'POST',
      body: formData,
    })

    toast.add({
      title: 'Сообщение отправлено',
      description: data.message || 'Мы рассмотрим ваше обращение в ближайшее время.',
      color: 'success',
    })
    resetForm()
  }
  catch (error: unknown) {
    const err = error as { data?: { error?: string } }
    toast.add({
      title: 'Не удалось отправить',
      description: err.data?.error || 'Произошла ошибка при отправке. Попробуйте позже.',
      color: 'error',
    })
  }
  finally {
    loading.value = false
  }
}
</script>
