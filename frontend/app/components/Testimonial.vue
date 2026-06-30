<template>
  <div class="ds-container py-20">
    <UPageCTA
      :ui="{
        root: 'bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl relative overflow-visible backdrop-blur-sm',
        container: 'grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 -my-16 items-center py-6 lg:py-10',
        wrapper: 'col-span-2'
      }"
      orientation="horizontal"
      reverse
    >
      <!-- Image slot - left third (1/3) that bleeds over -->
      <template #default>
        <div class="relative">
          <img
            :src="image"
            :alt="alt"
            class="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </template>

      <!-- Quote text - right two thirds (2/3) -->
      <template #description>
        <p class="text-gray-700 dark:text-gray-300 text-lg lg:text-xl leading-relaxed italic">
          "{{ quote }}"
        </p>
        <p class="text-right text-gray-500 dark:text-gray-400 text-sm lg:text-base font-medium">
          {{ author }}
        </p>
      </template>
    </UPageCTA>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Testimonial image'
  },
  author: {
    type: String,
    required: true
  }
})
</script>