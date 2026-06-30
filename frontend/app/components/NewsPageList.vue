<template>
  <div class="ds-container py-6">
    <!-- Header -->
    <div v-if="title || subtitle" class="mb-6">
      <h2 v-if="title" class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-lg text-gray-500 dark:text-gray-400">
        {{ subtitle }}
      </p>
    </div>

    <!-- News List with divide between cards -->
    <div class="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden bg-white/60 dark:bg-transparent backdrop-blur-sm">
      <div class="divide-y divide-gray-300 dark:divide-gray-700">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="p-6 lg:p-10 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-300"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            <!-- Content -->
            <div class="lg:col-span-7">
              <h3 v-if="item.title" class="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ item.title }}
              </h3>
              <p v-if="item.description" class="text-gray-500 dark:text-gray-400 text-[17px] leading-relaxed">
                {{ item.description }}
              </p>
            </div>

            <!-- Image -->
            <div v-if="item.image" class="lg:col-span-5">
              <div class="relative overflow-hidden rounded-xl aspect-video bg-gray-200 dark:bg-gray-950">
                <NuxtImg
                  :src="item.image"
                  :alt="item.imageAlt || item.title || 'News image'"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  sizes="100vw lg:600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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