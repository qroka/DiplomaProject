<template>
  <UApp :toaster="{ position: 'bottom-right' }">
    <a href="#main-content" class="skip-link">Перейти к основному содержимому</a>
    <LoadingOverlay />
    <div class="min-h-screen">
      <AppHeader />
      <UMain id="main-content" tabindex="-1">
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

const { init } = useAccessibility()

const cookieConsent = useCookie('cookieConsent')
const toast = useToast()

onMounted(() => {
  init()
  refreshCookie('cookieConsent')
  if (!cookieConsent.value) {
    toast.add({
      id: 'cookie-consent',
      title: 'Мы используем куки',
      description: 'Для удобства работы с сайтом мы используем файлы cookie.',
      close: false,
      duration: 0,
      actions: [{
        label: 'Понимаю',
        color: 'primary',
        onSelect: () => {
          const expiryDate = new Date()
          expiryDate.setFullYear(expiryDate.getFullYear() + 1)
          document.cookie = `cookieConsent=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
          cookieConsent.value = 'true'
          toast.remove('cookie-consent')
        }
      }]
    })
  }
})
</script>