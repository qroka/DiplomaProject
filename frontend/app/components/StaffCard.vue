<template>
  <div class="w-4/5 mx-auto py-6">
    <!-- Header -->
    <div v-if="title || subtitle" class="mb-6">
      <h2 v-if="title" class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-lg text-gray-500 dark:text-gray-400">
        {{ subtitle }}
      </p>
    </div>

    <!-- Staff Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <UCard
        v-for="(item, index) in items"
        :key="index"
        class="bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-800 hover:border-green-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/70"
        :ui="{ root: 'h-full flex flex-col', body: 'flex-1' }"
      >
        <template #header>
          <div class="flex flex-col items-center text-center">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.name"
              class="w-45 h-60  object-cover mb-4 ring-2 ring-primary-500"
            />
            <UIcon
              v-else
              name="i-lucide-user"
              class="w-24 h-24 mb-4 text-gray-400"
            />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ item.surname }} {{ item.name }} {{ item.patronym }}</h3>
            <p class="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">{{ item.role }}</p>
          </div>
        </template>

        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          {{ item.description }}
        </p>
      </UCard>

      <DsEmptyState
        v-if="items.length === 0"
        icon="i-lucide-users"
        title="Нет данных"
        description="Информация о сотрудниках появится позже"
        class="col-span-full"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
