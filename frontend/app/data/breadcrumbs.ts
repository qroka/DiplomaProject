export interface BreadcrumbItem {
  label: string
  to?: string
  icon?: string
}

/** Построить цепочку: Главная → … → текущая страница */
export function buildBreadcrumbs(
  ...segments: Array<{ label: string, to?: string }>
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'Главная', to: '/', icon: 'i-lucide-home' },
  ]

  for (const segment of segments) {
    if (segment.to) {
      items.push({ label: segment.label, to: segment.to })
    } else {
      items.push({ label: segment.label })
    }
  }

  return items
}
