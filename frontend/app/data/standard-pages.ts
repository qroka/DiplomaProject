import type { NavigationMenuItem, PageLink } from '@nuxt/ui'
import {
  careerNavGroup,
  navIcons,
  teamNavGroup,
  type NavItem,
} from '~/data/navigation'

export type StandardSectionId = 'team' | 'career'

export interface StandardSection {
  id: StandardSectionId
  label: string
  items: NavItem[]
}

export const standardSections: StandardSection[] = [
  { id: 'team', label: teamNavGroup.label, items: teamNavGroup.items },
  { id: 'career', label: careerNavGroup.label, items: careerNavGroup.items },
]

const sectionByPath = new Map<string, StandardSectionId>(
  standardSections.flatMap(section =>
    section.items.map(item => [item.to, section.id] as const),
  ),
)

export function resolveStandardSection(path: string): StandardSection | undefined {
  if (path.startsWith('/about/departments/')) {
    return standardSections.find(section => section.id === 'team')
  }

  const id = sectionByPath.get(path)
  return id ? standardSections.find(section => section.id === id) : undefined
}

export function toPageLinks(
  items: NavItem[],
  currentPath: string,
): PageLink[] {
  return items.map(item => ({
    label: item.label,
    to: item.to,
    icon: navIcons[item.to],
    active: item.to === currentPath
      || (item.to === '/about' && currentPath.startsWith('/about/')),
  }))
}

/** Быстрые ссылки для одиночных разделов верхнего уровня */
export const portalQuickLinks: Record<string, PageLink[]> = {
  '/vacancies': [
    { label: 'Вакансии', to: '/vacancies', icon: 'i-lucide-briefcase', active: true },
  ],
  '/anti-corruption': [
    { label: 'Нет коррупции!', to: '/anti-corruption', icon: 'i-lucide-shield-alert', active: true },
  ],
  '/privacy': [
    { label: 'Политика персональных данных', to: '/privacy', icon: 'i-lucide-shield-check', active: true },
  ],
}

export function toNavigationMenuItems(links: PageLink[]): NavigationMenuItem[] {
  return links.map(link => ({
    label: link.label,
    to: link.to,
    icon: link.icon,
    active: link.active,
  }))
}

export function resolveSidebarLinks(path: string): {
  title: string
  links: PageLink[]
} | null {
  const section = resolveStandardSection(path)
  if (section) {
    return {
      title: section.label,
      links: toPageLinks(section.items, path),
    }
  }

  const quick = portalQuickLinks[path]
  if (quick) {
    const titles: Record<string, string> = {
      '/vacancies': 'Карьера',
      '/anti-corruption': 'Противодействие коррупции',
      '/privacy': 'Правовая информация',
    }
    return {
      title: titles[path] ?? 'Разделы портала',
      links: quick,
    }
  }

  return null
}
