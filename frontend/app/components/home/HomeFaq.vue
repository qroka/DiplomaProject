<template>
  <section class="border-t border-default bg-elevated/40">
    <UContainer class="flex flex-col gap-10 py-16 lg:py-20">
      <div class="flex max-w-2xl flex-col gap-3">
        <UBadge
          label="FAQ"
          color="primary"
          variant="subtle"
          class="w-fit rounded-full"
        />
        <h2
          id="faq"
          class="text-3xl font-bold tracking-tight text-highlighted text-balance sm:text-4xl"
        >
          Что важно знать перед откликом
        </h2>
        <p class="text-pretty text-lg leading-8 text-muted">
          Короткие ответы на вопросы, которые помогают принять решение о работе в администрации.
        </p>
      </div>

      <div class="grid gap-4 lg:grid-cols-12">
        <div
          class="flex flex-col gap-2 lg:col-span-4"
          role="tablist"
          aria-label="Вопросы перед откликом"
        >
          <button
            v-for="(item, index) in items"
            :id="`faq-tab-${item.id}`"
            :key="item.id"
            type="button"
            role="tab"
            :aria-selected="selectedId === item.id"
            aria-controls="faq-panel"
            class="flex items-start gap-4 rounded-2xl border p-4 text-left transition motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            :class="selectedId === item.id
              ? 'border-primary/50 bg-elevated'
              : 'border-default bg-default hover:border-primary/30 hover:bg-elevated/60'"
            @click="selectedId = item.id"
          >
            <span
              class="inline-flex size-10 shrink-0 items-center justify-center rounded-xl transition motion-reduce:transition-none"
              :class="selectedId === item.id
                ? 'bg-primary text-inverted'
                : 'bg-primary/10 text-primary'"
            >
              <UIcon
                :name="item.icon"
                class="size-5"
                aria-hidden="true"
              />
            </span>
            <span class="flex min-w-0 flex-col gap-1">
              <span class="text-xs font-medium tabular-nums text-muted">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="font-semibold text-highlighted text-balance">
                {{ item.label }}
              </span>
            </span>
          </button>
        </div>

        <article
          v-if="activeItem"
          id="faq-panel"
          role="tabpanel"
          :aria-labelledby="`faq-tab-${activeItem.id}`"
          class="flex flex-col gap-6 rounded-2xl border border-default bg-default p-6 lg:col-span-8 lg:p-8"
        >
          <div class="flex items-start gap-4">
            <span class="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon
                :name="activeItem.icon"
                class="size-6"
                aria-hidden="true"
              />
            </span>
            <div class="flex min-w-0 flex-col gap-2">
              <p class="text-sm font-medium text-primary">
                Вопрос {{ activeIndex + 1 }} из {{ items.length }}
              </p>
              <h3 class="text-xl font-semibold text-highlighted sm:text-2xl text-balance">
                {{ activeItem.label }}
              </h3>
            </div>
          </div>

          <p class="text-pretty leading-7 text-muted">
            {{ activeItem.content }}
          </p>

          <div class="flex flex-col gap-4 rounded-2xl border border-default bg-elevated/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div class="flex flex-col gap-1">
              <p class="font-semibold text-highlighted">
                Не нашли нужного ответа?
              </p>
              <p class="text-sm leading-6 text-muted text-pretty">
                Отдел кадров подскажет, какие документы нужны именно вам.
              </p>
            </div>
            <div class="flex shrink-0 flex-col gap-2 sm:flex-row">
              <UButton
                label="Контакты"
                to="/contacts"
                color="primary"
                class="rounded-full"
              />
              <UButton
                label="Обратная связь"
                to="/feedback"
                color="neutral"
                variant="outline"
                class="rounded-full"
              />
            </div>
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface FaqItem {
  id: string
  label: string
  icon: string
  content: string
}

const items: FaqItem[] = [
  {
    id: 'apply',
    label: 'Как устроиться на работу?',
    icon: 'i-lucide-file-text',
    content: 'Откройте раздел «Вакансии», выберите должность и заполните форму отклика. После отправки с вами свяжется специалист отдела кадров.',
  },
  {
    id: 'benefits',
    label: 'Какие преимущества у муниципальной службы?',
    icon: 'i-lucide-shield-check',
    content: 'Стабильная занятость, социальные гарантии, оплачиваемый отпуск и больничный, предсказуемый карьерный рост по установленным правилам и программы профессионального развития.',
  },
  {
    id: 'sick-leave',
    label: 'Оплачивается ли длительный больничный?',
    icon: 'i-lucide-heart-pulse',
    content: 'Да. Период нетрудоспособности оплачивается в соответствии с законодательством, рабочее место сохраняется. После выхода на работу нельзя понизить в должности из-за болезни.',
  },
  {
    id: 'overtime',
    label: 'Как устроены переработки?',
    icon: 'i-lucide-clock',
    content: 'Рабочий день нормирован. Переработки компенсируются деньгами или дополнительными выходными. Неоплачиваемые сверхурочные без согласия сотрудника не допускаются.',
  },
  {
    id: 'team',
    label: 'Какой у вас коллектив?',
    icon: 'i-lucide-users',
    content: 'Команда профессионалов, ориентированных на развитие района и поддержку жителей. Мы ценим взаимовыручку, наставничество и открытый диалог внутри коллектива.',
  },
]

const selectedId = ref(items[0]!.id)

const activeItem = computed(() => items.find(item => item.id === selectedId.value))

const activeIndex = computed(() => items.findIndex(item => item.id === selectedId.value))
</script>
