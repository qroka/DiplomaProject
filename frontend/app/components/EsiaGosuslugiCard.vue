<template>
  <UPageCard
    :title="title"
    :description="description"
    :to="to"
    target="_blank"
    external
    variant="solid"
    class="esia-gosuslugi-card cursor-pointer"
    :aria-label="`${title}. Откроется на Госуслугах в новой вкладке`"
    :ui="{
      root: 'rounded-xl ring-0',
      container: 'gap-y-3 p-5 sm:p-6',
      leading: 'mb-1',
      title: 'esia-gosuslugi-card__title text-lg sm:text-xl',
      description: 'esia-gosuslugi-card__description text-[15px] leading-6',
    }"
  >
    <template #leading>
      <div class="flex flex-wrap items-center gap-2">
        <UBadge
          v-if="showBadge"
          label="Госуслуги · ЕСИА"
          color="neutral"
          variant="subtle"
          size="lg"
          class="esia-gosuslugi-card__badge rounded-full border border-white/20"
        />
        <UIcon
          :name="icon"
          class="esia-gosuslugi-card__icon size-5"
          aria-hidden="true"
        />
      </div>
    </template>
  </UPageCard>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  to: string
  icon?: string
  showBadge?: boolean
}>(), {
  description: undefined,
  icon: 'i-lucide-external-link',
  showBadge: true,
})
</script>
