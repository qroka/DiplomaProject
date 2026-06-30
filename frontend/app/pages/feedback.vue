<template>
  <DsPageHero
    variant="compact"
    title="Обратная связь"
    description="Вопросы, предложения и замечания к работе кадрового портала"
  />
  <DsBreadcrumbs :items="breadcrumbItems" />

  <UContainer class="py-8 lg:py-12">
    <DsSurface
      elevation="sm"
      padding="lg"
      class="mb-6"
    >
      <p class="text-body-lg text-text-primary mb-6">
        Если у вас есть вопросы, предложения или замечания к работе кадрового портала,
        пожалуйста, заполните форму ниже. Мы обязательно рассмотрим ваше обращение.
      </p>

      <div
        v-if="formSuccess"
        role="status"
        aria-live="polite"
        class="mb-6 p-4 bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800 rounded-lg text-text-primary"
      >
        {{ formSuccess }}
      </div>

      <div
        v-if="formError"
        role="alert"
        aria-live="assertive"
        class="mb-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"
      >
        {{ formError }}
      </div>

      <UForm
        :state="formState"
        :validate="validateForm"
        class="space-y-5"
        @submit="submitFeedback"
      >
        <UFormField
          label="Сообщение"
          name="message"
          required
        >
          <UTextarea
            v-model="formState.message"
            :rows="5"
            placeholder="Опишите ваш вопрос или предложение"
          />
        </UFormField>

        <UFormField
          label="Фото (необязательно)"
          name="photo"
        >
          <UFileUpload
            v-model="formState.photo"
            accept="image/*"
            label="Прикрепить изображение"
            description="JPG, PNG или GIF"
          />
        </UFormField>

        <div class="flex justify-end gap-3 pt-2">
          <UButton
            label="Отправить"
            color="primary"
            type="submit"
            :loading="formLoading"
          />
        </div>
      </UForm>
    </DsSurface>
  </UContainer>
</template>

<script setup>
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Обратная связь' })

const breadcrumbItems = buildBreadcrumbs({ label: 'Обратная связь' })

const config = useRuntimeConfig()
const formLoading = ref(false)
const formSuccess = ref('')
const formError = ref('')

const formState = reactive({
  message: '',
  photo: null,
})

const validateForm = (state) => {
  const errors = []
  if (!state.message?.trim()) errors.push({ name: 'message', message: 'Введите сообщение' })
  return errors
}

const submitFeedback = async () => {
  formLoading.value = true
  formSuccess.value = ''
  formError.value = ''

  try {
    const formData = new FormData()
    formData.append('message', formState.message)
    if (formState.photo) {
      formData.append('photo', formState.photo)
    }

    const data = await $fetch(`${config.public.apiBaseUrl}/api/submit-feedback/`, {
      method: 'POST',
      body: formData,
    })

    formSuccess.value = data.message
    formState.message = ''
    formState.photo = null
  } catch (error) {
    if (error.data?.error) {
      formError.value = error.data.error
    } else {
      formError.value = 'Произошла ошибка при отправке. Попробуйте позже.'
    }
  } finally {
    formLoading.value = false
  }
}
</script>
