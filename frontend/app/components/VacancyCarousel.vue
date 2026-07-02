<template>
  <section class="border-t border-default bg-elevated/40">
    <UModal
      v-model:open="isApplicationFormOpen"
      :ui="{ content: 'max-w-3xl w-[calc(100vw-2rem)] sm:w-full' }"
    >
      <template #body>
        <ApplicationForm
          :vacancy="selectedVacancy"
          @submit="handleFormSubmit"
          @cancel="closeApplicationForm"
        />
      </template>
    </UModal>

    <UContainer class="flex flex-col gap-8 py-16 lg:gap-10 lg:py-20">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex max-w-2xl flex-col gap-3">
          <UBadge
            label="Вакансии"
            color="primary"
            variant="subtle"
            class="w-fit rounded-full"
          />
          <h2
            id="vacancies"
            class="text-3xl font-bold tracking-tight text-highlighted text-balance sm:text-4xl"
          >
            {{ title }}
          </h2>
          <p class="text-pretty text-lg leading-8 text-muted">
            {{ subtitle }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <div
            v-if="!pending && props.vacancies.length"
            class="flex items-center gap-1"
          >
            <UButton
              icon="i-lucide-chevron-left"
              color="neutral"
              variant="outline"
              size="lg"
              aria-label="Предыдущие вакансии"
              class="rounded-full"
              :disabled="!canScrollBack"
              @click="scroll('back')"
            />
            <UButton
              icon="i-lucide-chevron-right"
              color="neutral"
              variant="outline"
              size="lg"
              aria-label="Следующие вакансии"
              class="rounded-full"
              :disabled="!canScrollForward"
              @click="scroll('forward')"
            />
          </div>
        </div>
      </div>

      <div
        v-if="pending"
        class="flex gap-4 overflow-hidden"
      >
        <DsSkeletonCard
          v-for="i in 3"
          :key="i"
          class="w-[min(92vw,24rem)] shrink-0 sm:w-104 lg:w-120"
        />
      </div>

      <div
        v-else-if="!props.vacancies.length"
        class="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-default bg-default px-6 py-12 text-center"
      >
        <UIcon
          name="i-lucide-briefcase"
          class="size-10 text-muted"
          aria-hidden="true"
        />
        <div class="flex max-w-md flex-col gap-2">
          <p class="text-lg font-semibold text-highlighted">
            Сейчас нет открытых позиций
          </p>
          <p class="text-pretty text-sm leading-6 text-muted">
            Загляните позже или подпишитесь на обновления.
          </p>
        </div>
        <UButton
          label="Все вакансии"
          to="/vacancies"
          color="primary"
          class="rounded-full"
        />
      </div>

      <div
        v-else
        class="relative -me-4 sm:-me-6 lg:-me-8"
      >
        <div
          ref="trackRef"
          class="vacancy-track flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory ps-4 pe-4 sm:ps-6 sm:pe-6 lg:ps-6 lg:pe-8"
          role="region"
          aria-label="Список вакансий"
          tabindex="0"
          @scroll="updateScrollState"
        >
          <div
            v-for="(item, index) in carouselItems"
            :key="itemKey(item, index)"
            data-vacancy-slide
            class="w-[min(92vw,24rem)] shrink-0 snap-start sm:w-104 lg:w-120"
          >
            <VacancyCard
              v-if="!isPlaceholderItem(item)"
              :vacancy="item"
              size="lg"
              @apply="openApplicationForm"
            />

            <article
              v-else
              class="flex h-full min-h-96 flex-col items-center justify-center gap-5 rounded-2xl border border-dashed border-default bg-default p-8 text-center transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none"
            >
              <div class="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <UIcon
                  name="i-lucide-briefcase"
                  class="size-8"
                  aria-hidden="true"
                />
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-xl font-semibold text-highlighted">
                  Ознакомиться со всеми вакансиями
                </h3>
                <p class="text-pretty text-base leading-7 text-muted">
                  Полный перечень открытых должностей
                </p>
              </div>
              <UButton
                label="Перейти"
                to="/vacancies"
                color="primary"
                trailing-icon="i-lucide-arrow-right"
                class="rounded-full"
              />
            </article>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import ApplicationForm from './ApplicationForm.vue'
import VacancyCard, { type Vacancy } from './VacancyCard.vue'

type PlaceholderItem = { isPlaceholder: true }
type CarouselItem = Vacancy | PlaceholderItem

function isPlaceholderItem(item: CarouselItem): item is PlaceholderItem {
  return 'isPlaceholder' in item
}

function itemKey(item: CarouselItem, index: number): string {
  if (isPlaceholderItem(item)) return 'all-vacancies'
  return String(item.id ?? item.title ?? index)
}

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  vacancies: Vacancy[]
  pending?: boolean
}>(), {
  title: 'Актуальные вакансии',
  subtitle: 'Открытые должности в администрации Сургутского района',
  pending: false,
})

const config = useRuntimeConfig()
const isApplicationFormOpen = ref(false)
const selectedVacancy = ref<Vacancy | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const canScrollBack = ref(false)
const canScrollForward = ref(true)

const carouselItems = computed<CarouselItem[]>(() => {
  const sorted = [...props.vacancies].sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at).getTime() : 0
    const dateB = b.created_at ? new Date(b.created_at).getTime() : 0
    return dateB - dateA
  })

  const items: CarouselItem[] = sorted.slice(0, 5)
  items.push({ isPlaceholder: true })
  return items
})

function updateScrollState() {
  const track = trackRef.value
  if (!track) return

  const maxScroll = track.scrollWidth - track.clientWidth
  canScrollBack.value = track.scrollLeft > 4
  canScrollForward.value = track.scrollLeft < maxScroll - 4
}

function scroll(direction: 'back' | 'forward') {
  const track = trackRef.value
  if (!track) return

  const slide = track.querySelector<HTMLElement>('[data-vacancy-slide]')
  const gap = 16
  const step = (slide?.offsetWidth ?? 320) + gap

  track.scrollBy({
    left: direction === 'forward' ? step : -step,
    behavior: 'smooth',
  })
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('resize', updateScrollState)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScrollState)
})

watch(carouselItems, async () => {
  await nextTick()
  updateScrollState()
})

function openApplicationForm(vacancy: Vacancy) {
  selectedVacancy.value = vacancy
  isApplicationFormOpen.value = true
}

function closeApplicationForm() {
  isApplicationFormOpen.value = false
  selectedVacancy.value = null
}

async function handleFormSubmit(formData: Record<string, unknown>) {
  try {
    const data = new FormData()
    data.append('vacancy_title', String(selectedVacancy.value?.title || ''))

    for (const [key, value] of Object.entries(formData)) {
      if (value instanceof File || (Array.isArray(value) && value[0] instanceof File)) {
        const files = Array.isArray(value) ? value : [value]
        for (const file of files) {
          if (file instanceof File) {
            data.append(key, file)
          }
        }
      } else if (value !== null && value !== undefined) {
        const fieldName = key.replace(/([A-Z])/g, '_$1').toLowerCase()
        if (value instanceof Date) {
          data.append(fieldName, value.toISOString().split('T')[0])
        } else {
          data.append(fieldName, String(value))
        }
      }
    }

    await $fetch(`${config.public.apiBaseUrl}/api/apply/`, {
      method: 'POST',
      body: data,
    })

    setTimeout(() => closeApplicationForm(), 2000)
  } catch (error) {
    console.error('Server error:', error)
  }
}
</script>

<style scoped>
.vacancy-track {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.vacancy-track::-webkit-scrollbar {
  display: none;
}
</style>
