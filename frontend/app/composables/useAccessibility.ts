export type A11yFontScale = 'normal' | 'large' | 'xlarge'
export type A11yContrast = 'default' | 'high' | 'inverted'

interface A11ySettings {
  enabled: boolean
  fontScale: A11yFontScale
  contrast: A11yContrast
}

const STORAGE_KEY = 'hr-portal-a11y'

function readSettings(): A11ySettings {
  if (!import.meta.client) {
    return { enabled: false, fontScale: 'normal', contrast: 'default' }
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as A11ySettings
  } catch {
    /* ignore */
  }
  return { enabled: false, fontScale: 'normal', contrast: 'default' }
}

function applyToDocument(settings: A11ySettings) {
  if (!import.meta.client) return
  const html = document.documentElement
  html.classList.toggle('a11y-enabled', settings.enabled)
  html.classList.toggle('a11y-solid-surfaces', settings.enabled)
  html.classList.remove(
    'a11y-font-large',
    'a11y-font-xlarge',
    'a11y-contrast-high',
    'a11y-contrast-inverted'
  )
  if (!settings.enabled) return
  if (settings.fontScale === 'large') html.classList.add('a11y-font-large')
  if (settings.fontScale === 'xlarge') html.classList.add('a11y-font-xlarge')
  if (settings.contrast === 'high') html.classList.add('a11y-contrast-high')
  if (settings.contrast === 'inverted') html.classList.add('a11y-contrast-inverted')
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

  function reset() {
    settings.value = { enabled: false, fontScale: 'normal', contrast: 'default' }
    persist()
  }

  return {
    settings,
    init,
    toggleEnabled,
    setFontScale,
    setContrast,
    reset,
  }
}
