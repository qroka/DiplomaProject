<template>
  <section class="border-y border-default bg-elevated/40">
    <UContainer class="flex flex-col items-center gap-10 px-0 lg:px-0 xl:px-0  py-16 text-center lg:py-20">
      <div class="flex max-w-2xl flex-col items-center gap-3">
        <h2 class="text-3xl font-bold tracking-tight text-highlighted text-balance sm:text-4xl">
          С нами работают
        </h2>
        <p class="text-pretty text-lg leading-8 text-muted">
          Федеральные и региональные организации, с которыми мы выстраиваем прозрачную кадровую политику и социальные гарантии для сотрудников.
        </p>
      </div>

      <!-- Mobile / reduced motion: static grid -->
      <div class="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden motion-reduce:lg:grid">
        <PartnerLogoLink
          v-for="(logo, index) in partners"
          :key="`grid-${index}`"
          :logo="logo"
        />
      </div>

      <!-- Desktop: marquee -->
      <div class="relative hidden w-full lg:block motion-reduce:hidden">
        <UMarquee
          pause-on-hover
          :overlay="false"
          :ui="{ root: '[--duration:40s] [--gap:1rem]' }"
        >
          <PartnerLogoLink
            v-for="(logo, index) in partners"
            :key="`marquee-${index}`"
            :logo="logo"
            class="min-w-52"
          />
        </UMarquee>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const partners = [
  { url: 'https://lk.fss.ru/', image: '/Icons/i-custom-fss.svg', alt: 'Фонд социального страхования' },
  { url: 'https://mintrud.gov.ru', image: '/Icons/i-custom-mintrud.svg', alt: 'Министерство труда России' },
  { url: 'https://admsr.ru', image: '/Icons/i-custom-admsr.svg', alt: 'Администрация Сургутского района' },
  { url: 'https://admsurgut.ru', image: '/Icons/i-custom-admsur.svg', alt: 'Администрация города Сургута' },
]
</script>
