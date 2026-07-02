<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

useHead({ title: 'Обратная связь' })

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

type FeedbackTab = 'message' | 'esia'

const activeTab = ref<FeedbackTab>('message')

const tabItems: TabsItem[] = [
  { label: 'Сообщение на портале', value: 'message', icon: 'i-lucide-message-square' },
  { label: 'Госуслуги', value: 'esia', icon: 'i-lucide-landmark' },
]

const esiaUrl = computed(() =>
  config.public.esiaFeedbackUrl || 'https://pos.gosuslugi.ru/landing/',
)

function resolveTab(value: unknown): FeedbackTab {
  return value === 'esia' ? 'esia' : 'message'
}

watch(
  () => route.query.tab,
  (value) => {
    activeTab.value = resolveTab(value)
  },
  { immediate: true },
)

watch(activeTab, (value) => {
  const nextQuery = { ...route.query }
  if (value === 'message') {
    delete nextQuery.tab
  }
  else {
    nextQuery.tab = value
  }
  if (route.query.tab !== nextQuery.tab) {
    router.replace({ query: nextQuery })
  }
})
</script>

<template>
  <DsStandardPage
    title="Обратная связь"
    description="Вопросы, предложения и замечания к работе кадрового портала, а также порядок подачи официальных обращений через платформу Госуслуг."
    badge="Сервисы портала"
  >
    <UTabs
      v-model="activeTab"
      color="primary"
      variant="pill"
      size="lg"
      :items="tabItems"
      :unmount-on-hide="false"
      class="w-full"
    >
      <template #content="{ item }">
        <div class="mt-6 space-y-10 lg:space-y-12">
          <DsContentSection
            v-if="item.value === 'message'"
            title="Сообщение команде портала"
            description="Расскажите, что можно улучшить на сайте, или задайте вопрос по работе разделов кадрового портала"
            overline="Обратная связь"
            heading-id="feedback-message"
            :toc-active="activeTab === 'message'"
            spacing="lg"
          >
            <FeedbackForm />
          </DsContentSection>

          <DsContentSection
            v-if="activeTab === item.value && item.value === 'esia'"
            title="Официальное обращение через Госуслуги"
            description="Для подачи обращения в органы власти с использованием единой системы идентификации и аутентификации (ЕСИА)"
            overline="Госуслуги"
            heading-id="feedback-esia"
            spacing="lg"
          >
            <div class="space-y-4">
              <div
                class="flex items-start gap-3 rounded-xl border border-default bg-elevated/40 px-4 py-4 sm:px-5"
                role="note"
              >
                <UIcon
                  name="i-lucide-shield-check"
                  class="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div class="min-w-0 space-y-1">
                  <p class="text-body font-medium text-text-primary">
                    Официальный канал обращений
                  </p>
                  <p class="text-caption leading-relaxed text-pretty text-text-secondary">
                    Платформа обратной связи Госуслуг предназначена для направления официальных обращений граждан и организаций. Потребуется авторизация через Госуслуги.
                  </p>
                </div>
              </div>

              <EsiaGosuslugiCard
                title="Перейти на платформу обратной связи"
                description="Подать обращение через ЕСИА на портале Госуслуг"
                :to="esiaUrl"
              />
            </div>
          </DsContentSection>
        </div>
      </template>
    </UTabs>

    <DsContentSection
      title="Связанные разделы"
      description="Контакты кадровых подразделений и политика обработки персональных данных"
      overline="Полезные ссылки"
      heading-id="feedback-related"
      spacing="lg"
    >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <UPageCard
          title="Контакты"
          description="Телефоны, адреса и справочник сотрудников отделов кадровой политики."
          icon="i-lucide-phone"
          to="/contacts"
          variant="subtle"
          class="h-full cursor-pointer"
          :ui="{
            root: 'h-full',
            container: 'h-full',
            wrapper: 'h-full',
          }"
        />

        <UPageCard
          title="Политика персональных данных"
          description="Порядок обработки персональных данных в соответствии с 152-ФЗ."
          icon="i-lucide-shield-check"
          to="/privacy"
          variant="subtle"
          class="h-full cursor-pointer"
          :ui="{
            root: 'h-full',
            container: 'h-full',
            wrapper: 'h-full',
          }"
        />
      </div>
    </DsContentSection>
  </DsStandardPage>
</template>
