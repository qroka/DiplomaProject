<template>
  <div :class="embedded ? undefined : 'ds-container py-8 lg:py-10'">
    <DsSurface
      :elevation="promo ? 'sm' : 'sm'"
      :padding="promo ? 'lg' : 'lg'"
      :class="promo ? 'ring-1 ring-border-brand/30' : undefined"
    >
      <div :class="promo ? 'grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 items-start' : 'max-w-2xl'">
        <div v-if="promo">
          <UBadge
            color="primary"
            variant="subtle"
            size="sm"
            class="mb-3"
          >
            Уведомления
          </UBadge>
          <h2 class="text-h2 text-text-primary text-balance mb-3">
            Подписка на новые вакансии
          </h2>
          <p class="text-body text-text-secondary mb-6 text-pretty">
            Укажите email и критерии — мы сообщим о публикации подходящих вакансий в администрации района.
          </p>
          <ul class="space-y-3 text-body text-text-secondary">
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-bell"
                class="h-5 w-5 shrink-0 text-primary-500 mt-0.5"
                aria-hidden="true"
              />
              <span>Уведомления только по выбранным критериям</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-shield-check"
                class="h-5 w-5 shrink-0 text-primary-500 mt-0.5"
                aria-hidden="true"
              />
              <span>Данные обрабатываются в соответствии с 152-ФЗ</span>
            </li>
          </ul>
        </div>

        <div>
          <template v-if="!promo">
            <h2 class="text-h2 text-text-primary mb-2">
              Подписка на новые вакансии
            </h2>
            <p class="text-body text-text-secondary mb-6">
              Укажите email и критерии — мы сообщим о публикации подходящих вакансий
            </p>
          </template>

          <UForm
            :state="form"
            :validate="validate"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormField
              label="Email"
              name="email"
              required
            >
              <UInput
                v-model="form.email"
                type="email"
                placeholder="example@email.com"
                autocomplete="email"
              />
            </UFormField>

            <UFormField
              label="Орган / отдел (необязательно)"
              name="branch"
            >
              <UInput
                v-model="form.branch"
                placeholder="Например: Департамент образования"
              />
            </UFormField>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <UFormField
                label="График работы"
                name="work_schedule"
              >
                <USelect
                  v-model="form.work_schedule"
                  :items="workScheduleOptions"
                  placeholder="Любой"
                  value-key="value"
                />
              </UFormField>

              <UFormField
                label="Опыт работы"
                name="required_experience"
              >
                <USelect
                  v-model="form.required_experience"
                  :items="experienceOptions"
                  placeholder="Любой"
                  value-key="value"
                />
              </UFormField>

              <UFormField
                label="Тип должности"
                name="job_type"
              >
                <USelect
                  v-model="form.job_type"
                  :items="jobTypeOptions"
                  placeholder="Любой"
                  value-key="value"
                />
              </UFormField>
            </div>

            <UFormField name="consentPersonalData">
              <UCheckbox
                v-model="form.consentPersonalData"
                required
              >
                <template #label>
                  <span class="text-sm text-text-secondary">
                    Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ
                  </span>
                </template>
              </UCheckbox>
            </UFormField>

            <UButton
              type="submit"
              label="Подписаться"
              color="primary"
              :loading="loading"
            />
          </UForm>
        </div>
      </div>
    </DsSurface>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  initialBranch: {
    type: String,
    default: '',
  },
  /** Встроенный блок без внешнего контейнера страницы */
  embedded: {
    type: Boolean,
    default: false,
  },
  /** Промо-раскладка для главной: текст слева, форма справа */
  promo: {
    type: Boolean,
    default: false,
  },
})

const config = useRuntimeConfig()
const toast = useToast()
const loading = ref(false)

const form = reactive({
  email: '',
  branch: props.initialBranch,
  work_schedule: null as number | null,
  required_experience: null as number | null,
  job_type: null as number | null,
  consentPersonalData: false,
})

watch(() => props.initialBranch, (value) => {
  if (value) form.branch = value
})

const { data: workSchedules } = await useAsyncData('sub-ws', () =>
  $fetch(`${config.public.apiBaseUrl}/api/vacancy-filters/work_schedule/`), { server: false })
const { data: experiences } = await useAsyncData('sub-exp', () =>
  $fetch(`${config.public.apiBaseUrl}/api/vacancy-filters/required_experience/`), { server: false })
const { data: jobTypes } = await useAsyncData('sub-jt', () =>
  $fetch(`${config.public.apiBaseUrl}/api/vacancy-filters/job_type/`), { server: false })

const toOptions = (items: { id: number, name: string }[] | null) =>
  (items ?? []).map(i => ({ label: i.name, value: i.id }))

const workScheduleOptions = computed(() => toOptions(workSchedules.value))
const experienceOptions = computed(() => toOptions(experiences.value))
const jobTypeOptions = computed(() => toOptions(jobTypes.value))

function validate(state: typeof form) {
  const errors: { name: string, message: string }[] = []
  if (!state.email?.trim()) errors.push({ name: 'email', message: 'Укажите email' })
  if (!state.consentPersonalData) errors.push({ name: 'consentPersonalData', message: 'Необходимо согласие' })
  return errors
}

async function onSubmit() {
  loading.value = true
  try {
    await $fetch(`${config.public.apiBaseUrl}/api/vacancy-subscribe/`, {
      method: 'POST',
      body: {
        email: form.email.trim(),
        branch: form.branch.trim(),
        work_schedule: form.work_schedule || null,
        required_experience: form.required_experience || null,
        job_type: form.job_type || null,
      },
    })
    toast.add({
      title: 'Подписка оформлена',
      description: 'Уведомления о новых вакансиях будут приходить на указанный email.',
      color: 'success',
    })
    form.email = ''
    form.branch = props.initialBranch
    form.work_schedule = null
    form.required_experience = null
    form.job_type = null
    form.consentPersonalData = false
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
