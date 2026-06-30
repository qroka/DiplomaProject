<template>
  <div>
    <DsPageHero
      variant="inner"
      title="Муниципальная служба для молодёжи"
      description="Популяризация муниципальной службы и ранняя профориентация"
      :image="hero.src"
      :image-alt="hero.alt"
    />

    <DsBreadcrumbs :items="breadcrumbItems" />

    <UContainer class="py-8 lg:py-12">
      <p
        v-if="info?.intro"
        class="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl"
      >
        {{ info.intro }}
      </p>

      <UTabs
        v-model="activeTab"
        color="primary"
        variant="pill"
        size="lg"
        :items="tabItems"
        :unmount-on-hide="false"
      >
        <template #content="{ item }">
          <!-- Практика -->
          <div v-if="item.value === 'practice'" class="mt-6 space-y-8">
            <section v-if="info?.institutionsList?.length">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Учебные заведения, с которыми заключены соглашения
              </h2>
              <ul class="space-y-2">
                <li
                  v-for="institution in info.institutionsList"
                  :key="institution"
                  class="flex gap-2 text-gray-700 dark:text-gray-300"
                >
                  <UIcon name="i-lucide-graduation-cap" class="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>{{ institution }}</span>
                </li>
              </ul>
            </section>

            <section v-if="info?.practice_steps">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Как попасть на практику в администрации Сургутского района
              </h2>
              <div class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {{ info.practice_steps }}
              </div>
            </section>

            <PracticeApplicationForm />
          </div>

          <!-- Стажировка -->
          <div v-else-if="item.value === 'internship'" class="mt-6">
            <div
              v-if="info?.internship_content"
              class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
            >
              {{ info.internship_content }}
            </div>
            <p v-else class="text-gray-500 dark:text-gray-400">
              Информация о стажировках будет размещена дополнительно.
            </p>
          </div>

          <!-- Школьникам -->
          <div v-else class="mt-6">
            <div
              v-if="info?.school_content"
              class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
            >
              {{ info.school_content }}
            </div>
            <p v-else class="text-gray-500 dark:text-gray-400">
              Информация для школьников будет размещена дополнительно.
            </p>
          </div>
        </template>
      </UTabs>
    </UContainer>
  </div>
</template>

<script setup>
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Муниципальная служба для молодёжи' })

const breadcrumbItems = buildBreadcrumbs({ label: 'Молодёжь' })
const hero = useHeroImage('youth')

const route = useRoute()
const config = useRuntimeConfig()

const tabItems = [
  { label: 'Практика', value: 'practice' },
  { label: 'Стажировка', value: 'internship' },
  { label: 'Школьникам', value: 'school' }
]

const activeTab = ref('practice')

const validTabs = ['practice', 'internship', 'school']

onMounted(() => {
  const tab = String(route.query.tab || '')
  if (validTabs.includes(tab)) {
    activeTab.value = tab
  }
})

const { data: info } = await useAsyncData('youth-info', () =>
  $fetch(`${config.public.apiBaseUrl}/api/youth/`), { server: false }
)
</script>
