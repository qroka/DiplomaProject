import { logoAsrPath } from '~/data/logo'

function buildFaviconHref(primaryColor: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="${logoAsrPath}" fill="${primaryColor}"/></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

function readPrimaryColor() {
  if (!import.meta.client) {
    return ''
  }

  return getComputedStyle(document.documentElement)
    .getPropertyValue('--ui-primary')
    .trim()
}

export function usePrimaryFavicon() {
  const colorMode = useColorMode()
  const faviconHref = ref('')

  function syncFavicon() {
    if (!import.meta.client) {
      return
    }

    nextTick(() => {
      requestAnimationFrame(() => {
        const primary = readPrimaryColor()
        if (primary) {
          faviconHref.value = buildFaviconHref(primary)
        }
      })
    })
  }

  watch(() => colorMode.value, syncFavicon, { immediate: true })

  onMounted(() => {
    syncFavicon()
  })

  useHead({
    link: computed(() => {
      const href = faviconHref.value || '/logos/logoASR.svg'

      return [
        { rel: 'icon', type: 'image/svg+xml', href },
        { rel: 'apple-touch-icon', href },
      ]
    }),
  })
}
