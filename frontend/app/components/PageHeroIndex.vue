<template>
  <div class="flex-1">
    <div class="bg-gradient-brand dark:bg-gray-900/50 rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 mx-4 sm:mx-6 lg:mx-10 my-6 lg:my-12">
      <UPageHero
        orientation="horizontal"
        :ui="{
          container: 'items-center grid-cols-2 gap-6 lg:gap-10 p-6 lg:p-8'
        }"
      >
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
              color="primary"
              class="mt-6"
            />
          </div>
        </template>

        <template #default>
          <img
            :src="image"
            :alt="imageAlt"
            class="rounded-lg shadow-2xl hidden lg:block"
          />
        </template>
      </UPageHero>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  buttonLabel: { type: String, default: 'Learn More' },
  buttonLink: { type: String, default: '#' },
  image: { type: String, required: true },
  imageAlt: { type: String, default: 'Hero image' }
})
</script>
