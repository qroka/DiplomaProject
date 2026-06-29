<template>
  <div class="w-4/5 mx-auto py-6">
    <!-- Header -->
    <div class="mb-6">
      <h2 v-if="title" class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-lg text-gray-500 dark:text-gray-400">
        {{ subtitle }}
      </p>
    </div>

    <UAccordion
      :items="accordionItems"
      :ui="{
        wrapper: 'flex flex-col gap-4',
        item: 'bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden mb-4 backdrop-blur-sm',
        header: 'px-4 py-2 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800/50 transition',
        body: 'px-6 py-2 text-gray-500 dark:text-gray-400',
        trailing: 'text-orange-500'
      }"
    >
      <template #departments>
        <ul class="space-y-1">
          <li
            v-for="dept in departments ?? []"
            :key="dept.id"
          >
            <ULink
              :to="dept.link"
              target="_blank"
              external
              class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors duration-200"
            >
              {{ dept.name }}
            </ULink>
          </li>
        </ul>
      </template>
    </UAccordion>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Структура администрации'
  },
  subtitle: {
    type: String,
    default: 'Отделы и департаменты администрации Сургутского района'
  }
})

const config = useRuntimeConfig()

const { data: departments } = await useAsyncData('branchesGlobal', () =>
  $fetch(`${config.public.apiBaseUrl}/api/branches-global/`), { server: false }
)

const accordionItems = [
  {
    label: 'Отделы администрации Сургутского района',
    icon: 'i-lucide-building',
    slot: 'departments'
  }
]
</script>
