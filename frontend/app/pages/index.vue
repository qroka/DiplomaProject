<template>
  <div class="relative">
    <AppContainerGuides />

    <HomeHero />

    <PartnersLogos />

    <HomeHighlights />

    <HomeNews :posts="posts" />

    <HomeValuesBento />

    <VacancyCarousel
      title="Актуальные вакансии"
      subtitle="Открытые должности в администрации Сургутского района"
      :vacancies="vacanciesData ?? []"
      :pending="vacanciesPending"
    />

    <VacancySubscribeForm promo />

    <HomeFaq />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Главная' })

const config = useRuntimeConfig()

const { data: vacanciesData, pending: vacanciesPending } = await useAsyncData('vacancies', () =>
  $fetch(`${config.public.apiBaseUrl}/api/vacancies/`), { server: false })

const { data: posts } = await useAsyncData('news-posts', () =>
  $fetch(`${config.public.apiBaseUrl}/api/news/`), { server: false })
</script>
