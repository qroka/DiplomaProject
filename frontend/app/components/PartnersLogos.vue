<template>
  <section
    v-if="pending || partners.length"
    class="border-t border-default bg-elevated/40"
  >
    <UContainer class="flex flex-col items-center gap-10 py-16 text-center lg:py-20">
      <div class="flex max-w-2xl flex-col items-center gap-3">
        <h2 class="text-3xl font-bold tracking-tight text-highlighted text-balance sm:text-4xl">
          С нами работают
        </h2>
        <p class="text-pretty text-lg leading-8 text-muted">
          Федеральные и региональные организации, с которыми мы выстраиваем прозрачную кадровую политику и социальные гарантии для сотрудников.
        </p>
      </div>

      <div
        v-if="pending"
        class="flex w-full gap-4 overflow-hidden"
        aria-busy="true"
        aria-label="Загрузка партнёров"
      >
        <USkeleton
          v-for="index in 4"
          :key="index"
          class="h-28 w-48 shrink-0 rounded-2xl"
        />
      </div>

      <UCarousel
        v-else
        v-slot="{ item }"
        :items="partners"
        arrows
        dots
        loop
        align="start"
        :ui="carouselUi"
        class="w-full max-w-5xl"
        aria-label="Партнёры администрации"
      >
        <PartnerLogoLink
          :logo="item"
          class="h-full"
        />
      </UCarousel>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
export interface WorkPartnerItem {
  id: number
  name: string
  url: string
  image: string
}

const config = useRuntimeConfig()

const { data: partnersData, pending } = await useAsyncData(
  'work-partners',
  () => $fetch<WorkPartnerItem[]>(`${config.public.apiBaseUrl}/api/work-partners/`),
  { server: false },
)

const partners = computed(() => partnersData.value ?? [])

const carouselUi = {
  item: 'basis-[85%] min-[480px]:basis-1/2 lg:basis-1/3 px-2',
  controls: 'mt-6',
}
</script>
