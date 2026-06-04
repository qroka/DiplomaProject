<!-- components/PageHero.vue -->
<template>
  <div class="flex-1">
    <UPageHero :ui="uiConfig">
      <!-- Left content — all in one rounded rectangle -->
      <template #title>
        <div class="bg-white/60 dark:bg-gray-900/50 rounded-2xl p-6 lg:p-8">
          <h1 class="text-2xl text-black dark:text-white font-bold">
            {{ title }}
          </h1>
          <p class="text-lg text-gray-500 dark:text-gray-400 mt-4">
            {{ description }}
          </p>
          <UButton
            :label="buttonLabel"
            :to="buttonLink"
            size="xl"
            class="mt-6 bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2"
          />
        </div>
      </template>

      <!-- Right image -->
      <template #default>
        <img 
          :src="image" 
          :alt="imageAlt"
          class="rounded-lg shadow-2xl hidden lg:block" 
        />
      </template>
    </UPageHero>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonLabel: {
    type: String,
    default: 'Learn More'
  },
  buttonLink: {
    type: String,
    default: '#'
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: 'Hero image'
  }
})

// Extract UI config to keep template clean
const uiConfig = {
  container: 'items-center grid-cols-2 lg:gap-10 sm:py-6 md:py-6 lg:py-12 xl:py-12'
}
</script>