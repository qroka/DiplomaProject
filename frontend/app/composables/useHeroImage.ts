import {
  type HeroImageKey,
  resolveHeroImageAlt,
  resolveHeroImagePath,
} from '~/data/hero-images'

export function useHeroImage(key: HeroImageKey) {
  const colorMode = useColorMode()

  const src = computed(() => {
    const mode = colorMode.value === 'dark' ? 'dark' : 'light'
    return resolveHeroImagePath(key, mode)
  })

  const alt = resolveHeroImageAlt(key)

  return { src, alt }
}
