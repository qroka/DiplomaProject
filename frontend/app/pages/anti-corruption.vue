<template>
  <UContainer class="py-8 lg:py-12">
    <!-- Breadcrumb -->
    <UBreadcrumb :items="breadcrumbItems" separator-icon="i-lucide-chevron-right" class="mb-6" />

    <!-- Page Title -->
    <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
      Противодействие коррупции
    </h1>

    <div class="bg-white dark:bg-gray-900/50 rounded-xl p-6 ring-1 ring-gray-200 dark:ring-gray-800 mb-6">
        <p class="text-base lg:text-lg text-gray-900 dark:text-white">
            Федеральный закон от 25 декабря 2008 г. N 273-ФЗ «О противодействии коррупции» является основополагающим документом, 
            устанавливающим правовые и организационные основы борьбы с коррупцией в России. 
            Он вводит четкое определение коррупции как злоупотребления служебным положением, 
            дачи и получения взятки, коммерческого подкупа и иных подобных деяний, 
            совершаемых для получения незаконной выгоды. 
            Закон определяет три главных направления противодействия: 
            предупреждение (профилактика) коррупции, 
            борьба с ней (выявление, пресечение и расследование правонарушений), 
            а также минимизация и ликвидация последствий коррупционных деяний. 
            Ключевыми принципами закона являются законность, 
            публичность и открытость работы госорганов, 
            неотвратимость ответственности для нарушителей, 
            а также приоритетное применение именно профилактических мер.
        </p>
    </div>

    <!-- Listbox wrapper -->
    <div class="bg-white dark:bg-gray-900/50 rounded-xl p-6 lg:p-8 ring-1 ring-gray-200 dark:ring-gray-800 mb-6">
      <div>
        <UListbox
          v-model="selectedCategory"
          :items="categories"
          size="lg"
          class="w-full"
        />
      </div>
    </div>

    <!-- Content card with smooth height transition -->
    <div
      ref="contentCardRef"
      class="bg-white dark:bg-gray-900/50 rounded-xl p-6 lg:p-8 ring-1 ring-gray-200 dark:ring-gray-800 overflow-hidden"
      :style="{ height: contentHeight }"
      style="transition: height 0.3s ease"
      @transitionend="onHeightTransitionEnd"
    >
      <div ref="contentRef" :key="selectedCategory?.value ?? ''">
        <!-- Feedback Form -->
        <template v-if="selectedCategory?.value === 'feedback'">
          <div class="max-w-2xl">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Обратная связь для сообщений о фактах коррупции
            </h2>
            <p class="text-gray-500 dark:text-gray-400 mb-6">
              Если вы стали свидетелем коррупционных действий, пожалуйста, сообщите об этом через форму ниже.
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
              @submit="submitReport"
              class="space-y-5"
            >
              <UFormField label="ФИО нарушителя" name="fullName" required>
                <UInput
                  v-model="formState.fullName"
                  placeholder="Введите ФИО нарушителя"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Email" name="email" required>
                <UInput
                  v-model="formState.email"
                  type="email"
                  placeholder="Введите ваш email"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Сообщение" name="message" required>
                <UTextarea
                  v-model="formState.message"
                  :rows="5"
                  placeholder="Опишите факты коррупции"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Прикрепить файл" name="attachment">
                <UFileUpload
                  v-model="formState.attachment"
                  label="Выберите файл"
                  description="PDF, DOC, DOCX, JPG, PNG (макс. 10MB)"
                />
              </UFormField>

              <UButton
                type="submit"
                color="primary"
                variant="solid"
                :loading="formLoading"
                class="mt-2"
              >
                Отправить сообщение
              </UButton>
            </UForm>
          </div>
        </template>

        <!-- Document List -->
        <template v-else>
          <div class="space-y-3">
            <div
              v-for="doc in filteredDocuments"
              :key="doc.id"
              class="flex items-center justify-between bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-green-500/20 transition-all duration-300"
            >
              <span class="text-gray-900 dark:text-white font-medium">{{ doc.name }}</span>
              <NuxtLink
                :to="doc.file"
                target="_blank"
                external
                :aria-label="'Скачать: ' + doc.name"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 transition-colors text-sm shrink-0"
              >
                <UIcon name="i-lucide-download" class="h-4 w-4" />
                Скачать
              </NuxtLink>
            </div>

            <div
              v-if="filteredDocuments.length === 0"
              class="text-center py-12 text-gray-500 dark:text-gray-400"
            >
              Нет документов в этой категории
            </div>
          </div>
        </template>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
useHead({ title: 'Противодействие коррупции' })
import type { ListboxItem } from '@nuxt/ui'

const config = useRuntimeConfig()

// Breadcrumb
const breadcrumbItems = [
  { label: 'Главная', icon: 'i-lucide-home', to: '/' },
  { label: 'Противодействие коррупции' },
]

// Categories
const categories: ListboxItem[] = [
  {
    label: 'Нормативные, правовые и иные акты в сфере противодействия коррупции',
    icon: 'i-lucide-scale',
    value: 'normative',
  },
  {
    label: 'Антикоррупционная экспертиза',
    icon: 'i-lucide-search-check',
    value: 'expertise',
  },
  {
    label: 'Методические материалы',
    icon: 'i-lucide-book-open',
    value: 'methodology',
  },
  {
    label: 'Формы документов, связанные с противодействием коррупции, для заполнения',
    icon: 'i-lucide-file-text',
    value: 'forms',
  },
  {
    label: 'Комиссия по соблюдению требований к служебному поведению и урегулированию конфликта интересов',
    icon: 'i-lucide-users',
    value: 'commission',
  },
  {
    label: 'Обратная связь для сообщений о фактах коррупции',
    icon: 'i-lucide-message-square-warning',
    value: 'feedback',
  },
]

const selectedCategory = ref<ListboxItem>(categories[0])

// Height transition
const contentRef = ref<HTMLElement | null>(null)
const contentCardRef = ref<HTMLElement | null>(null)
const contentHeight = ref<string>('auto')

function getCardPadding(): number {
  if (!contentCardRef.value) return 48
  const style = getComputedStyle(contentCardRef.value)
  const pt = parseFloat(style.paddingTop)
  const pb = parseFloat(style.paddingBottom)
  return (isNaN(pt) ? 24 : pt) + (isNaN(pb) ? 24 : pb)
}

watch(selectedCategory, async () => {
  if (!contentRef.value) return

  // Lock wrapper to current total height before DOM swaps
  contentHeight.value = contentRef.value.scrollHeight + getCardPadding() + 'px'

  await nextTick()

  // Content swapped — read new total height and animate to it
  if (contentRef.value) {
    contentHeight.value = contentRef.value.scrollHeight + getCardPadding() + 'px'
  }
})

function onHeightTransitionEnd(e: TransitionEvent) {
  if (e.propertyName === 'height') {
    contentHeight.value = 'auto'
  }
}

// Fetch documents
const { data: documents } = await useAsyncData(
  'anti-corruption-docs',
  () => $fetch(`${config.public.apiBaseUrl}/api/anti-corruption-documents/`),
  { server: false },
)

const filteredDocuments = computed(() => {
  if (!documents.value) return []
  return (documents.value as any[]).filter(
    (doc: any) => doc.category === selectedCategory.value.label,
  )
})

// Form state
const formState = reactive({
  fullName: '',
  email: '',
  message: '',
  attachment: null as File | null,
})

const formLoading = ref(false)
const formSuccess = ref('')
const formError = ref('')

function validateForm(state: typeof formState): { name: string; message: string }[] {
  const errors: { name: string; message: string }[] = []

  if (!state.fullName?.trim()) {
    errors.push({ name: 'fullName', message: 'Поле обязательно для заполнения' })
  }
  if (!state.email?.trim()) {
    errors.push({ name: 'email', message: 'Поле обязательно для заполнения' })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.push({ name: 'email', message: 'Введите корректный email' })
  }
  if (!state.message?.trim()) {
    errors.push({ name: 'message', message: 'Поле обязательно для заполнения' })
  }

  return errors
}

async function submitReport() {
  formLoading.value = true
  formSuccess.value = ''
  formError.value = ''

  try {
    const data = new FormData()
    data.append('full_name', formState.fullName)
    data.append('email', formState.email)
    data.append('message', formState.message)

    if (formState.attachment) {
      data.append('attachment', formState.attachment)
    }

    await $fetch(`${config.public.apiBaseUrl}/api/submit-corruption-report/`, {
      method: 'POST',
      body: data,
    })

    formSuccess.value = 'Сообщение успешно отправлено!'
    formState.fullName = ''
    formState.email = ''
    formState.message = ''
    formState.attachment = null
  } catch (err: any) {
    formError.value = err?.data?.message || 'Ошибка при отправке. Попробуйте позже.'
  } finally {
    formLoading.value = false
  }
}
</script>
