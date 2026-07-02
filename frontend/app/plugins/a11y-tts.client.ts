function normalizeText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/[«»]/g, '"')
    .trim()
}

function resolveSpeakText(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) return null

  // Ignore form fields / interactive controls
  const interactive = target.closest('input, textarea, select, button, [role="button"], [role="checkbox"], [role="switch"], [role="menuitem"], [role="tab"], a')
  if (interactive) return null

  const el = target.closest('p, li, h1, h2, h3, h4, h5, h6, blockquote, figcaption, dt, dd, td, th, label, article, section, main') ?? target

  const aria = el.getAttribute('aria-label')
  if (aria) return normalizeText(aria)

  const text = normalizeText(el.textContent ?? '')
  if (!text) return null

  // Keep it short to avoid reading the whole page by accident
  return text.length > 420 ? `${text.slice(0, 420)}…` : text
}

export default defineNuxtPlugin(() => {
  if (!import.meta.client) return
  if (!('speechSynthesis' in window)) return

  const { settings } = useAccessibility()

  let handler: ((e: MouseEvent) => void) | null = null

  function stop() {
    try {
      window.speechSynthesis.cancel()
    } catch {
      // ignore
    }
  }

  function enable() {
    if (handler) return
    handler = (e: MouseEvent) => {
      // Skip clicks inside the a11y popover itself
      const target = e.target as Element | null
      if (target?.closest?.('[data-a11y-panel]')) return

      const text = resolveSpeakText(e.target)
      if (!text) return

      stop()
      const u = new SpeechSynthesisUtterance(text)
      u.lang = 'ru-RU'
      u.rate = 1
      u.pitch = 1
      u.volume = 1
      window.speechSynthesis.speak(u)
    }
    document.addEventListener('click', handler, true)
  }

  function disable() {
    if (!handler) return
    document.removeEventListener('click', handler, true)
    handler = null
    stop()
  }

  watch(
    () => [settings.value.enabled, settings.value.screenReaderMode] as const,
    ([enabled, screenReaderMode]) => {
      if (enabled && screenReaderMode) enable()
      else disable()
    },
    { immediate: true },
  )
})

