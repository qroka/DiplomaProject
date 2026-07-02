<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

interface YouthInfo {
  intro?: string
  practice_steps?: string
  internship_content?: string
  school_content?: string
  updated_at?: string
}

useHead({ title: 'Муниципальная служба для молодёжи' })

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

type YouthTab = 'practice' | 'internship' | 'school'

const activeTab = ref<YouthTab>('practice')

const tabItems: TabsItem[] = [
  { label: 'Практика', value: 'practice', icon: 'i-lucide-clipboard-list' },
  { label: 'Стажировка', value: 'internship', icon: 'i-lucide-briefcase' },
  { label: 'Школьникам', value: 'school', icon: 'i-lucide-school' },
]

function resolveTab(value: unknown): YouthTab {
  return value === 'internship' || value === 'school' ? value : 'practice'
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
  if (value === 'practice') {
    delete nextQuery.tab
  }
  else {
    nextQuery.tab = value
  }
  if (route.query.tab !== nextQuery.tab) {
    router.replace({ query: nextQuery })
  }
})

const { data: info, pending } = await useAsyncData('youth-info', () =>
  $fetch<YouthInfo>(`${config.public.apiBaseUrl}/api/youth/`), {
  server: false,
})

const practiceSteps = computed(() => {
  const raw = info.value?.practice_steps?.trim()
  if (!raw) return []
  return raw.split('\n').map(line => line.trim()).filter(Boolean)
})

type StepPart =
  | { type: 'text', value: string }
  | { type: 'link', label: string, to: string }

function stripStepNumber(step: string) {
  return step.replace(/^\d+[\).\s-]+/, '')
}

function parseStepParts(step: string): StepPart[] {
  const text = stripStepNumber(step)
  const parts: StepPart[] = []
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) })
    }
    parts.push({ type: 'link', label: match[1], to: match[2] })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) })
  }

  if (!parts.length) {
    parts.push({ type: 'text', value: text })
  }

  return parts
}
</script>

<template>
  <DsStandardPage
    title="Муниципальная служба для молодёжи"
    description="Раздел предназначен для популяризации муниципальной службы и ранней профориентации. Здесь собраны материалы о практике, стажировке и программах для школьников в администрации Сургутского района."
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
        <div
          v-if="item.value === 'practice'"
          class="mt-6 space-y-10 lg:space-y-12"
        >
          <DsContentSection
            title="Как попасть на практику в администрации Сургутского района"
            description="Пошаговый порядок для студентов, которые планируют пройти практику в органах местного самоуправления"
            overline="Этапы"
            heading-id="youth-practice-steps"
            spacing="lg"
          >
            <div
              v-if="pending"
              class="space-y-3"
              aria-busy="true"
            >
              <USkeleton
                v-for="index in 4"
                :key="index"
                class="h-14 w-full rounded-xl"
              />
            </div>

            <ol
              v-else-if="practiceSteps.length"
              class="flex flex-col gap-3"
            >
              <li
                v-for="(step, index) in practiceSteps"
                :key="index"
              >
                <UCard
                  variant="subtle"
                  :ui="{
                    root: 'rounded-xl',
                    body: 'flex items-start gap-4 p-4 lg:p-5',
                  }"
                >
                  <span
                    class="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-caption font-semibold text-primary tabular-nums"
                    aria-hidden="true"
                  >
                    {{ index + 1 }}
                  </span>
                  <p class="text-body text-text-secondary leading-relaxed text-pretty pt-0.5">
                    <template
                      v-for="(part, partIndex) in parseStepParts(step)"
                      :key="partIndex"
                    >
                      <NuxtLink
                        v-if="part.type === 'link'"
                        :to="part.to"
                        class="text-primary underline-offset-2 hover:underline"
                      >
                        {{ part.label }}
                      </NuxtLink>
                      <span v-else>{{ part.value }}</span>
                    </template>
                  </p>
                </UCard>
              </li>
            </ol>

            <DsEmptyState
              v-else
              icon="i-lucide-list-ordered"
              title="Этапы прохождения практики"
              description="Инструкция по подаче документов и согласованию практики будет опубликована в ближайшее время."
            />
          </DsContentSection>

          <DsContentSection
            title="Заявка на практику"
            description="Заполните форму — специалист управления муниципальной службы, кадров и наград свяжется с вами для согласования прохождения практики"
            overline="Подать заявку"
            heading-id="youth-practice-form"
            spacing="lg"
          >
            <PracticeApplicationForm />
          </DsContentSection>
        </div>

        <div
          v-else-if="item.value === 'internship'"
          class="mt-6"
        >
          <DsContentSection
            title="Стажировка"
            description="Программы стажировки для молодых специалистов в администрации Сургутского района"
            overline="Раздел в разработке"
            heading-id="youth-internship"
            spacing="lg"
          >
            <p
              v-if="info?.internship_content"
              class="text-body text-text-secondary leading-relaxed whitespace-pre-line text-pretty"
            >
              {{ info.internship_content }}
            </p>

            <DsEmptyState
              v-else
              icon="i-lucide-briefcase"
              title="Раздел в разработке"
              description="Материалы о стажировках будут размещены дополнительно. Следите за обновлениями на портале."
            />
          </DsContentSection>
        </div>

        <div
          v-else-if="item.value === 'school'"
          class="mt-6"
        >
          <DsContentSection
            title="Школьникам"
            description="Профориентационные материалы и программы для школьников, интересующихся муниципальной службой"
            overline="Раздел в разработке"
            heading-id="youth-school"
            spacing="lg"
          >
            <p
              v-if="info?.school_content"
              class="text-body text-text-secondary leading-relaxed whitespace-pre-line text-pretty"
            >
              {{ info.school_content }}
            </p>

            <DsEmptyState
              v-else
              icon="i-lucide-school"
              title="Раздел в разработке"
              description="Материалы для школьников будут размещены дополнительно. Следите за обновлениями на портале."
            />
          </DsContentSection>
        </div>
      </template>
    </UTabs>
  </DsStandardPage>
</template>
