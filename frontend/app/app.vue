<template>
  <UApp>
    <LoadingOverlay />
    <div class="min-h-screen">
      <AppHeader />
      <UMain>
        <NuxtPage />
      </UMain>
      <AppFooter />
    </div>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s — Кадровый портал Сургутского района',
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>