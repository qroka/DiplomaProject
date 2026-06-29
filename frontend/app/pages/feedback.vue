<template>
  <UContainer class="py-8 lg:py-12">
    <!-- Breadcrumb -->
    <UBreadcrumb :items="breadcrumbItems" separator-icon="i-lucide-chevron-right" class="mb-6" />

    <!-- Page Title -->
    <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
      Обратная связь
    </h1>

    <div class="bg-white dark:bg-gray-900/50 rounded-xl p-6 lg:p-8 ring-1 ring-gray-200 dark:ring-gray-800 mb-6">
      <p class="text-base lg:text-lg text-gray-900 dark:text-white mb-6">
        Если у вас есть вопросы, предложения или замечания к работе кадрового портала,
        пожалуйста, заполните форму ниже. Мы обязательно рассмотрим ваше обращение.
      </p>

      <div
        v-if="formSuccess"
        class="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
      >
        {{ formSuccess }}
      </div>

      <div
        v-if="formError"
        class="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
      >
        {{ formError }}
      </div>

      <UForm
        :state="formState"
        :validate="validateForm"
        @submit="submitFeedback"
        class="space-y-5"
      >
        <UFormField label="Сообщение" name="message" required>
          <UTextarea
            v-model="formState.message"
            :rows="5"
            placeholder="Напишите ваше сообщение"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Прикрепить фото" name="photo">
          <UFileUpload
            v-model="formState.photo"
            accept="image/*"
            label="Выберите фото"
            description="JPG, PNG или GIF (макс. 5MB)"
          />
        </UFormField>

        <UButton
          type="submit"
          color="primary"
          variant="solid"
          :loading="formLoading"
          class="mt-2"
        >
          Отправить
        </UButton>
      </UForm>
    </div>
  </UContainer>
</template>

<script setup>
useHead({ title: 'Обратная связь' })

const breadcrumbItems = [
  { label: 'Главная', to: '/' },
  { label: 'Обратная связь', to: '/feedback' }
]

const config = useRuntimeConfig()
const formLoading = ref(false)
const formSuccess = ref('')
const formError = ref('')

const formState = reactive({
  message: '',
  photo: null
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
      body: formData
    })

    formSuccess.value = data.message

    // Reset form
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
