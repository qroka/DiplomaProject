<template>
  <DsSection
    spacing="md"
    variant="muted"
  >
    <DsSectionDivider
      label="С нами работают"
      variant="brand"
      spacing="sm"
    />

    <!-- Mobile + desktop при prefers-reduced-motion: статичная сетка -->
    <div class="grid-logos md:hidden motion-reduce:md:grid mb-2">
      <PartnerLogoLink
        v-for="(logo, index) in partners"
        :key="`grid-${index}`"
        :logo="logo"
      />
    </div>

    <!-- Desktop: marquee (скрыт при reduced motion) -->
    <div
      class="hidden md:block motion-reduce:hidden group **:data-marquee:hover:[animation-play-state:paused] **:data-marquee:focus-within:[animation-play-state:paused]"
    >
      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:24px]' }"
      >
        <PartnerLogoLink
          v-for="(logo, index) in partners"
          :key="`marquee-${index}`"
          :logo="logo"
          class="px-4"
        />
      </UMarquee>
    </div>
  </DsSection>
</template>

<script setup lang="ts">
const partners = [
  { url: 'https://lk.fss.ru/', image: '/Icons/i-custom-fss.svg', alt: 'Фонд социального страхования' },
  { url: 'https://mintrud.gov.ru', image: '/Icons/i-custom-mintrud.svg', alt: 'Министерство труда России' },
  { url: 'https://admsr.ru', image: '/Icons/i-custom-admsr.svg', alt: 'Администрация Сургутского района' },
  { url: 'https://admsurgut.ru', image: '/Icons/i-custom-admsur.svg', alt: 'Администрация города Сургута' },
]
</script>
