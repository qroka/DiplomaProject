<template>
  <UContainer class="py-8 lg:py-12">
    <div class="max-w-3xl mb-8">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-lg text-gray-500 dark:text-gray-400">
        {{ subtitle }}
      </p>
    </div>

    <div class="space-y-6">
      <div
        v-for="deputy in deputies"
        :key="`${deputy.surname}-${deputy.name}`"
        class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm overflow-hidden"
      >
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/40">
          <p class="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
            {{ deputy.role }}
          </p>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">
            {{ deputy.surname }} {{ deputy.name }} {{ deputy.patronymic }}
          </h3>
        </div>

        <ul class="divide-y divide-gray-100 dark:divide-gray-800">
          <li
            v-for="slug in deputy.departmentSlugs"
            :key="slug"
          >
            <NuxtLink
              :to="`/about/departments/${slug}`"
              class="group flex items-center justify-between gap-4 px-6 py-4 text-gray-800 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors"
            >
              <span class="group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                {{ departmentName(slug) }}
              </span>
              <UIcon
                name="i-lucide-arrow-right"
                class="h-5 w-5 text-gray-400 group-hover:text-primary-500 shrink-0 transition-colors"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { deputies, departments } from '~/data/departments'

defineProps({
  title: {
    type: String,
    default: 'Структура администрации'
  },
  subtitle: {
    type: String,
    default: 'Отраслевые (функциональные) органы по курирующим заместителям главы'
  }
})

function departmentName(slug: string) {
  return departments[slug]?.name ?? slug
}
</script>
