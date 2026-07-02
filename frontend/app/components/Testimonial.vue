<template>
  <UCard
    variant="subtle"
    :ui="{
      root: 'overflow-hidden',
      body: 'p-0',
    }"
  >
    <div class="grid grid-cols-1 lg:grid-cols-5">
      <div class="relative lg:col-span-2 min-h-56 lg:min-h-full">
        <img
          :src="image"
          :alt="alt"
          class="size-full object-cover"
          loading="lazy"
        >
        <div
          class="absolute inset-0 bg-linear-to-t from-default/80 via-default/20 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-default/10 lg:to-default/40"
          aria-hidden="true"
        />
      </div>

      <div class="flex flex-col justify-center gap-5 p-6 lg:col-span-3 lg:p-8 lg:pl-6">
        <UIcon
          name="i-lucide-quote"
          class="size-8 text-primary/70"
          aria-hidden="true"
        />

        <blockquote class="text-body-lg lg:text-xl text-text-secondary leading-relaxed text-pretty">
          «{{ quote }}»
        </blockquote>

        <footer class="flex items-center gap-3 border-t border-border-default pt-5">
          <div>
            <p class="text-body font-semibold text-text-primary">
              {{ author }}
            </p>
            <p
              v-if="role"
              class="text-caption text-text-muted"
            >
              {{ role }}
            </p>
          </div>
        </footer>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  image: string
  quote: string
  author: string
  role?: string
  alt?: string
}>(), {
  role: undefined,
  alt: 'Фото руководителя',
})
</script>
