<template>
  <div
    :class="panelClass"
    aria-live="polite"
  >
    <div
      v-if="submitted"
      class="flex flex-col items-center gap-4 py-4 text-center"
    >
      <span class="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <UIcon
          name="i-lucide-check"
          class="size-7"
          aria-hidden="true"
        />
      </span>
      <div class="flex flex-col gap-2">
        <h3 class="text-xl font-semibold text-highlighted">
          Подписка оформлена
        </h3>
        <p class="text-pretty text-sm leading-6 text-muted">
          Уведомления{{ submittedOfoHint }} будут приходить на {{ submittedEmail }}
        </p>
      </div>
      <UButton
        label="Подписать другой email"
        color="neutral"
        variant="link"
        class="rounded-full"
        @click="$emit('reset')"
      />
    </div>

    <UForm
      v-else
      :state="form"
      :validate="validate"
      class="flex min-w-0 w-full max-w-full flex-col gap-4"
      @submit="$emit('submit')"
    >
      <UFormField name="name">
        <template #label>
          <DsRequiredLabel label="Имя" />
        </template>
        <UInput
          v-model="form.name"
          type="text"
          size="lg"
          placeholder="Иван Иванов"
          autocomplete="name"
          class="w-full min-w-0"
        />
      </UFormField>

      <UFormField name="email">
        <template #label>
          <DsRequiredLabel label="Email" />
        </template>
        <UInput
          v-model="form.email"
          type="email"
          size="lg"
          placeholder="name@example.com"
          autocomplete="email"
          class="w-full min-w-0"
        />
      </UFormField>

      <UFormField
        label="Отраслевой функциональный орган"
        name="branch"
        class="min-w-0 w-full"
      >
        <USelectMenu
          v-model="form.branch"
          :items="ofoOptions"
          size="lg"
          value-key="value"
          :search-input="{
            placeholder: 'Поиск ОФО…',
            icon: 'i-lucide-search',
          }"
          class="w-full min-w-0 max-w-full"
          :ui="{
            base: 'w-full min-w-0 max-w-full',
            value: 'truncate',
            trailing: 'shrink-0',
            trailingIcon: 'shrink-0',
          }"
        />
      </UFormField>

      <UFormField
        name="consentPersonalData"
        class="min-w-0 w-full"
      >
        <UCheckbox
          v-model="form.consentPersonalData"
          :ui="{
            root: 'relative flex items-start gap-1',
            wrapper: 'min-w-0 flex-1',
            label: 'min-w-0 text-pretty',
          }"
        >
          <template #label>
            <span class="block min-w-0 text-pretty text-sm leading-6 text-muted">
              Согласен на
              <NuxtLink
                to="/privacy"
                class="text-primary underline-offset-2 hover:underline"
              >
                обработку персональных данных
              </NuxtLink>
              (152-ФЗ)
              <span
                class="text-error"
                aria-hidden="true"
              > *</span>
              <span class="text-xs text-muted"> обязательно</span>
            </span>
          </template>
        </UCheckbox>
      </UFormField>

      <UButton
        type="submit"
        label="Подписаться"
        trailing-icon="i-lucide-arrow-right"
        size="lg"
        color="primary"
        :loading="loading"
        class="w-full justify-center rounded-full"
      />
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { ofoAnyLabel, ofoOptions } from '~/data/ofo-list'

interface SubscribeForm {
  name: string
  email: string
  branch: string
  consentPersonalData: boolean
}

const props = withDefaults(defineProps<{
  form: SubscribeForm
  loading: boolean
  submitted: boolean
  submittedEmail: string
  submittedOfo: string
  validate: (state: SubscribeForm) => { name: string, message: string }[]
  plain?: boolean
  accent?: boolean
}>(), {
  plain: false,
  accent: false,
})

defineEmits<{
  submit: []
  reset: []
}>()

const submittedOfoHint = computed(() =>
  props.submittedOfo === ofoAnyLabel
    ? ' о новых вакансиях'
    : ` о вакансиях в «${props.submittedOfo}»`,
)

const panelClass = computed(() => {
  const base = 'min-w-0 w-full max-w-full rounded-2xl border border-default bg-default'
  if (props.accent || props.plain) {
    return `${base} p-4 sm:p-6 lg:p-8`
  }
  return `${base} p-4 sm:p-5 lg:p-6`
})
</script>
