import type { ContentTocLink } from '@nuxt/ui'
import type { InjectionKey, MaybeRefOrGetter, Ref } from 'vue'
import { toValue } from 'vue'

export interface StandardPageTocItem {
  id: string
  label: string
}

interface StandardPageTocContext {
  register: (item: StandardPageTocItem) => void
  unregister: (id: string) => void
  tocLinks: Ref<ContentTocLink[]>
}

export const standardPageTocKey: InjectionKey<StandardPageTocContext> = Symbol('standard-page-toc')

export function provideStandardPageToc() {
  const items = ref<StandardPageTocItem[]>([])

  function register(item: StandardPageTocItem) {
    if (items.value.some(existing => existing.id === item.id)) return
    items.value = [...items.value, item]
  }

  function unregister(id: string) {
    items.value = items.value.filter(item => item.id !== id)
  }

  const tocLinks = computed<ContentTocLink[]>(() =>
    items.value.map(item => ({
      id: item.id,
      depth: 2,
      text: item.label,
    })),
  )

  const context: StandardPageTocContext = { register, unregister, tocLinks }

  provide(standardPageTocKey, context)

  return context
}

export function useStandardPageTocRegister(
  item: StandardPageTocItem,
  active: MaybeRefOrGetter<boolean> = true,
) {
  const context = inject(standardPageTocKey, null)

  if (!context) return

  function syncRegistration() {
    if (toValue(active)) {
      context.register(item)
    }
    else {
      context.unregister(item.id)
    }
  }

  onMounted(() => {
    syncRegistration()
    watch(() => toValue(active), syncRegistration)
  })

  onUnmounted(() => context.unregister(item.id))
}
