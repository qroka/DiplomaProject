export interface NavItem {
  label: string
  to: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

/** Группы навигации v2 */
export const navGroups: NavGroup[] = [
  {
    label: 'О кадрах',
    items: [
      { label: 'О нас', to: '/about' },
      { label: 'Доска почёта', to: '/honorboard' },
      { label: 'Контакты', to: '/contacts' },
    ],
  },
  {
    label: 'Карьера',
    items: [
      { label: 'Вакансии', to: '/vacancies' },
      { label: 'Конкурсы', to: '/tenders' },
      { label: 'Кадровый резерв', to: '/staffreserve' },
      { label: 'Молодёжь', to: '/youth' },
      { label: 'Профразвитие', to: '/profdev' },
    ],
  },
  {
    label: 'Прозрачность',
    items: [
      { label: 'Нет коррупции!', to: '/anti-corruption' },
    ],
  },
]

/** Плоский список для футера и обратной совместимости */
export const mainNavItems: NavItem[] = [
  { label: 'Главная', to: '/' },
  ...navGroups.flatMap(group => group.items),
]

export const footerNavItems: NavItem[] = mainNavItems

export interface NavigationMenuItem {
  label: string
  to?: string
  type?: 'label' | 'trigger' | 'link'
  children?: NavigationMenuItem[]
}

/** Desktop: Главная + dropdown-группы */
export function buildDesktopNavItems(): NavigationMenuItem[] {
  return [
    { label: 'Главная', to: '/' },
    ...navGroups.map(group => ({
      label: group.label,
      children: group.items.map(item => ({
        label: item.label,
        to: item.to,
      })),
    })),
  ]
}

/** Mobile drawer: аккордеон групп */
export function buildMobileNavItems(): NavigationMenuItem[] {
  return [
    { label: 'Главная', to: '/' },
    ...navGroups.map(group => ({
      label: group.label,
      children: group.items.map(item => ({
        label: item.label,
        to: item.to,
      })),
    })),
  ]
}
