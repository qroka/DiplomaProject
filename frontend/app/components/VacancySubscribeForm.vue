<template>
  <component
    :is="promo ? 'section' : 'div'"
    :class="promo ? 'border-t border-default bg-default overflow-x-clip' : embedded ? undefined : block ? undefined : 'ds-container py-8 lg:py-10'"
  >
    <UContainer
      v-if="promo"
      class="min-w-0 py-12 sm:py-16 lg:py-20"
    >
      <article class="min-w-0 w-full overflow-hidden rounded-2xl border border-default bg-elevated/30 p-4 sm:rounded-3xl sm:p-6 lg:p-10 xl:p-12">
        <PromoCardContent
          :heading-id="headingId"
          :highlights="highlights"
          :form="form"
          :loading="loading"
          :submitted="submitted"
          :submitted-email="submittedEmail"
          :submitted-ofo="submittedOfo"
          :validate="validate"
          @submit="onSubmit"
          @reset="resetForm"
        />
      </article>
    </UContainer>

    <article
      v-else-if="block"
      class="min-w-0 w-full overflow-hidden rounded-2xl border border-default bg-elevated/30 p-4 sm:rounded-3xl sm:p-6 lg:p-10 xl:p-12"
    >
      <PromoCardContent
        compact
        :heading-id="headingId"
        :highlights="[]"
        :form="form"
        :loading="loading"
        :submitted="submitted"
        :submitted-email="submittedEmail"
        :submitted-ofo="submittedOfo"
        :validate="validate"
        @submit="onSubmit"
        @reset="resetForm"
      />
    </article>

    <div
      v-else
      :class="embedded && !bare ? 'ds-container py-8 lg:py-10' : undefined"
    >
      <div class="mx-auto flex max-w-2xl flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h2 class="text-2xl font-bold tracking-tight text-highlighted sm:text-3xl">
            Подписка на новые вакансии
          </h2>
          <p class="text-pretty leading-7 text-muted">
            Укажите email и выберите отраслевой функциональный орган — мы сообщим о новых вакансиях.
          </p>
        </div>

        <SubscribeFormPanel
          :form="form"
          :loading="loading"
          :submitted="submitted"
          :submitted-email="submittedEmail"
          :submitted-ofo="submittedOfo"
          :validate="validate"
          @submit="onSubmit"
          @reset="resetForm"
        />
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import PromoCardContent from './VacancySubscribePromoCard.vue'
import SubscribeFormPanel from './VacancySubscribeFormPanel.vue'
import { ofoAnyValue, ofoApiBranch, ofoLabel, ofoList } from '~/data/ofo-list'

const props = defineProps({
  initialBranch: {
    type: String,
    default: '',
  },
  embedded: {
    type: Boolean,
    default: false,
  },
  bare: {
    type: Boolean,
    default: false,
  },
  promo: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  headingId: {
    type: String,
    default: 'vacancy-subscribe',
  },
})

const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)
const submitted = ref(false)
const submittedEmail = ref('')
const submittedOfo = ref('')

const highlights = [
  {
    icon: 'i-lucide-bell',
    title: 'По выбранному ОФО',
    text: 'Или сразу по всем вакансиям — пункт «Любой ОФО / не имеет значения»',
  },
  {
    icon: 'i-lucide-briefcase',
    title: 'Актуальные должности',
    text: 'Смотреть открытые вакансии на сайте',
    to: '/vacancies',
  },
]

const form = reactive({
  name: '',
  email: '',
  branch: resolveInitialBranch(props.initialBranch) || ofoAnyValue,
  consentPersonalData: false,
})

watch(() => props.initialBranch, (value) => {
  if (value) form.branch = resolveInitialBranch(value)
})

function resolveInitialBranch(value: string): string {
  if (!value) return ofoAnyValue
  const match = ofoList.find(ofo => ofo === value || value.includes(ofo) || ofo.includes(value))
  return match ?? ofoAnyValue
}

function validate(state: typeof form) {
  const errors: { name: string, message: string }[] = []
  if (!state.name?.trim()) errors.push({ name: 'name', message: 'Укажите имя' })
  if (!state.email?.trim()) errors.push({ name: 'email', message: 'Укажите email' })
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
    errors.push({ name: 'email', message: 'Проверьте формат email' })
  }
  if (!state.consentPersonalData) errors.push({ name: 'consentPersonalData', message: 'Необходимо согласие' })
  return errors
}

function clearFields() {
  form.name = ''
  form.email = ''
  form.branch = resolveInitialBranch(props.initialBranch)
  form.consentPersonalData = false
}

function resetForm() {
  submitted.value = false
  submittedEmail.value = ''
  submittedOfo.value = ''
  clearFields()
}

async function onSubmit() {
  loading.value = true
  try {
    await $fetch(`${config.public.apiBaseUrl}/api/vacancy-subscribe/`, {
      method: 'POST',
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        branch: ofoApiBranch(form.branch),
      },
    })

    submittedEmail.value = form.email.trim()
    submittedOfo.value = ofoLabel(form.branch)
    submitted.value = true

    toast.add({
      title: 'Подписка оформлена',
      description: 'Уведомления о новых вакансиях будут приходить на указанный email.',
      color: 'success',
    })

    clearFields()
  } catch {
    toast.add({
      title: 'Не удалось оформить подписку',
      description: 'Проверьте данные и попробуйте снова',
      color: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>
