<template>
  <UApp :toaster="{ position: 'bottom-right' }">
    <LoadingOverlay />
    <div class="min-h-screen">
      <AppHeader />
      <UMain id="main-content">
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

usePrimaryFavicon()

const cookieConsent = useCookie('cookieConsent', {
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax',
  path: '/'
})
const toast = useToast()

onMounted(() => {
  init()

  if (!cookieConsent.value) {
    toast.add({
      id: 'cookie-consent',
      title: 'Файлы cookie',
      description: 'Используем cookie для корректной работы сайта и сохранения пользовательских настроек.',
      icon: 'i-lucide-cookie',
      color: 'neutral',
      duration: 0,
      progress: false,
      actions: [{
        label: 'Понятно',
        color: 'primary',
        onClick: (event) => {
          event?.stopPropagation()
          cookieConsent.value = 'true'
          toast.remove('cookie-consent')
        }
      }]
    })
  }
})
</script>