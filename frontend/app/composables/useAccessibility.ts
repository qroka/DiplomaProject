export type A11yFontScale = 'normal' | 'large' | 'xlarge' | 'xxlarge'
export type A11yContrast = 'default' | 'high' | 'inverted'
export type A11yColorScheme = 'default' | 'bw' | 'wb' | 'brown' | 'blue'

interface A11ySettings {
  enabled: boolean
  fontScale: A11yFontScale
  contrast: A11yContrast
  colorScheme: A11yColorScheme
  imagesEnabled: boolean
  screenReaderMode: boolean
  bigCursor: boolean
}

const STORAGE_KEY = 'hr-portal-a11y'

function readSettings(): A11ySettings {
  if (!import.meta.client) {
    return {
      enabled: false,
      fontScale: 'normal',
      contrast: 'default',
      colorScheme: 'default',
      imagesEnabled: true,
      screenReaderMode: false,
      bigCursor: false,
    }
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<A11ySettings>
      return {
        enabled: Boolean(parsed.enabled),
        fontScale: parsed.fontScale ?? 'normal',
        contrast: parsed.contrast ?? 'default',
        colorScheme: parsed.colorScheme ?? 'default',
        imagesEnabled: parsed.imagesEnabled ?? true,
        screenReaderMode: parsed.screenReaderMode ?? false,
        bigCursor: parsed.bigCursor ?? false,
      }
    }
  } catch {
    /* ignore */
  }
  return {
    enabled: false,
    fontScale: 'normal',
    contrast: 'default',
    colorScheme: 'default',
    imagesEnabled: true,
    screenReaderMode: false,
    bigCursor: false,
  }
}

function applyToDocument(settings: A11ySettings) {
  if (!import.meta.client) return
  const html = document.documentElement
  html.classList.toggle('a11y-enabled', settings.enabled)
  html.classList.toggle('a11y-solid-surfaces', settings.enabled)
  html.classList.remove(
    'a11y-contrast-high',
    'a11y-contrast-inverted',
    'a11y-scheme-bw',
    'a11y-scheme-wb',
    'a11y-scheme-brown',
    'a11y-scheme-blue',
    'a11y-images-off',
    'a11y-screenreader',
    'a11y-big-cursor',
  )
  if (!settings.enabled) return
  if (settings.contrast === 'high') html.classList.add('a11y-contrast-high')
  if (settings.contrast === 'inverted') html.classList.add('a11y-contrast-inverted')
  if (settings.colorScheme === 'bw') html.classList.add('a11y-scheme-bw')
  if (settings.colorScheme === 'wb') html.classList.add('a11y-scheme-wb')
  if (settings.colorScheme === 'brown') html.classList.add('a11y-scheme-brown')
  if (settings.colorScheme === 'blue') html.classList.add('a11y-scheme-blue')
  if (!settings.imagesEnabled) html.classList.add('a11y-images-off')
  if (settings.screenReaderMode) html.classList.add('a11y-screenreader')
  if (settings.bigCursor) html.classList.add('a11y-big-cursor')
}

export function useAccessibility() {
  const settings = useState<A11ySettings>('a11y-settings', readSettings)

  function persist() {
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings.value))
      applyToDocument(settings.value)
    }
  }

  function init() {
    applyToDocument(settings.value)
  }

  function toggleEnabled() {
    settings.value.enabled = !settings.value.enabled
    persist()
  }

  function setFontScale(scale: A11yFontScale) {
    settings.value.fontScale = scale
    settings.value.enabled = true
    persist()
  }

  function setContrast(contrast: A11yContrast) {
    settings.value.contrast = contrast
    settings.value.enabled = true
    persist()
  }

  function setColorScheme(scheme: A11yColorScheme) {
    settings.value.colorScheme = scheme
    settings.value.enabled = true
    persist()
  }

  function setImagesEnabled(value: boolean) {
    settings.value.imagesEnabled = value
    settings.value.enabled = true
    persist()
  }

  function setScreenReaderMode(value: boolean) {
    settings.value.screenReaderMode = value
    settings.value.enabled = true
    persist()
  }

  function setBigCursor(value: boolean) {
    settings.value.bigCursor = value
    settings.value.enabled = true
    persist()
  }

  function reset() {
    settings.value = {
      enabled: false,
      fontScale: 'normal',
      contrast: 'default',
      colorScheme: 'default',
      imagesEnabled: true,
      screenReaderMode: false,
      bigCursor: false,
    }
    persist()
  }

  return {
    settings,
    init,
    toggleEnabled,
    setFontScale,
    setContrast,
    setColorScheme,
    setImagesEnabled,
    setScreenReaderMode,
    setBigCursor,
    reset,
  }
}
