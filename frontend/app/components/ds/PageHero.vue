<template>
  <!-- home: 2-col gradient frame -->
  <div
    v-if="variant === 'home'"
    class="ds-container py-8 lg:py-12"
  >
    <div class="rounded-xl ring-1 ring-border-default bg-gradient-brand p-1">
      <div class="grid-hero rounded-[calc(0.75rem-4px)] bg-surface-raised p-6 lg:p-10">
        <div class="flex flex-col justify-center">
          <UBadge
            v-if="badge"
            color="primary"
            variant="subtle"
            size="sm"
            class="w-fit mb-4"
          >
            {{ badge }}
          </UBadge>
          <h1 class="text-display text-text-primary text-balance">
            {{ title }}
          </h1>
          <p
            v-if="description"
            class="text-body-lg text-text-secondary mt-4 text-pretty max-w-prose"
          >
            {{ description }}
          </p>
          <div
            v-if="$slots.actions"
            class="mt-6 flex flex-wrap gap-3"
          >
            <slot name="actions" />
          </div>
          <UButton
            v-else-if="buttonLabel && buttonLink"
            :label="buttonLabel"
            :to="buttonLink"
            color="primary"
            size="lg"
            class="mt-6 min-h-11 font-medium w-fit"
          />
        </div>
        <img
          v-if="resolvedImage"
          :src="resolvedImage"
          :alt="imageAlt"
          :class="[
            'rounded-lg shadow-md w-full aspect-[4/3] hidden lg:block',
            isIllustration
              ? 'object-contain bg-surface-sunken p-6'
              : 'object-cover',
          ]"
        >
      </div>
    </div>
  </div>

  <!-- inner: image overlay -->
  <section
    v-else-if="variant === 'inner'"
    class="relative w-full min-h-[280px] lg:min-h-[360px] flex items-end"
  >
    <div
      v-if="resolvedImage"
      class="absolute inset-0 -z-10"
    >
      <div class="absolute inset-0 bg-linear-to-r from-secondary-900/80 via-secondary-800/70 to-secondary-700/50" />
      <img
        :src="resolvedImage"
        :alt="imageAlt"
        :class="[
          'h-full',
          isIllustration
            ? 'w-2/3 ml-auto object-contain object-right opacity-35 lg:opacity-45'
            : 'w-full object-cover',
        ]"
      >
    </div>
    <div
      v-else
      class="absolute inset-0 -z-10 bg-surface-brand"
    />
    <div class="ds-container py-12 lg:py-16 w-full">
      <div class="max-w-3xl">
        <UBadge
          v-if="badge"
          color="primary"
          variant="subtle"
          size="sm"
          class="w-fit mb-4"
        >
          {{ badge }}
        </UBadge>
        <h1 class="text-h1 lg:text-display text-text-inverse text-balance">
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="text-body-lg text-text-inverse/85 mt-4 text-pretty max-w-2xl"
        >
          {{ description }}
        </p>
        <div
          v-if="$slots.actions"
          class="mt-6 flex flex-wrap gap-3"
        >
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>

  <!-- compact: text only -->
  <section
    v-else
    class="bg-surface-brand-muted border-b border-border-default"
  >
    <div class="ds-container py-10 lg:py-14">
      <UBadge
        v-if="badge"
        color="secondary"
        variant="subtle"
        size="sm"
        class="w-fit mb-3"
      >
        {{ badge }}
      </UBadge>
      <h1 class="text-h1 text-text-accent text-balance">
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="text-body-lg text-text-secondary mt-3 text-pretty max-w-2xl"
      >
        {{ description }}
      </p>
      <div
        v-if="$slots.actions"
        class="mt-5 flex flex-wrap gap-3"
      >
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toValue } from 'vue'

type HeroVariant = 'home' | 'inner' | 'compact'

const props = withDefaults(defineProps<{
  title: string
  description?: string
  variant?: HeroVariant
  image?: string
  imageAlt?: string
  badge?: string
  buttonLabel?: string
  buttonLink?: string
}>(), {
  description: undefined,
  variant: 'inner',
  image: undefined,
  imageAlt: 'Иллюстрация раздела',
  badge: undefined,
  buttonLabel: undefined,
  buttonLink: undefined,
})

const resolvedImage = computed(() => {
  const value = toValue(props.image)
  return typeof value === 'string' ? value : undefined
})

const isIllustration = computed(() => resolvedImage.value?.endsWith('.svg') ?? false)
</script>
