export interface NavItem {
  label: string
  to: string
  description?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export const navIcons: Record<string, string> = {
  '/': 'i-lucide-home',
  '/about': 'i-lucide-building-2',
  '/honorboard': 'i-lucide-award',
  '/contacts': 'i-lucide-phone',
  '/vacancies': 'i-lucide-briefcase',
  '/tenders': 'i-lucide-file-badge',
  '/staffreserve': 'i-lucide-users',
  '/youth': 'i-lucide-graduation-cap',
  '/profdev': 'i-lucide-book-open',
  '/anti-corruption': 'i-lucide-shield-alert',
  '/feedback': 'i-lucide-message-square',
}

/** Группы навигации v2 (без «Вакансии» — отдельный CTA в header) */
export const navGroups: NavGroup[] = [
  {
    label: 'Наша команда',
    items: [
      {
        label: 'О нас',
        to: '/about',
        description: 'Миссия, ценности и структура кадровой службы района',
      },
      {
        label: 'Доска почёта',
        to: '/honorboard',
        description: 'Лучшие сотрудники и наставники администрации',
      },
      {
        label: 'Контакты',
        to: '/contacts',
        description: 'Телефоны и адреса кадровых подразделений',
      },
    ],
  },
  {
    label: 'Карьера',
    items: [
      {
        label: 'Конкурсы',
        to: '/tenders',
        description: 'Открытые конкурсы на замещение должностей',
      },
      {
        label: 'Кадровый резерв',
        to: '/staffreserve',
        description: 'Как вступить в резерв и развивать карьеру',
      },
      {
        label: 'Молодёжь',
        to: '/youth',
        description: 'Стажировки и программы для молодых специалистов',
      },
      {
        label: 'Профразвитие',
        to: '/profdev',
        description: 'Обучение, повышение квалификации и наставничество',
      },
    ],
  },
]

/** Плоский список для футера и поиска */
export const mainNavItems: NavItem[] = [
  { label: 'Главная', to: '/' },
  ...navGroups.flatMap(group => group.items),
  { label: 'Вакансии', to: '/vacancies' },
  { label: 'Нет коррупции!', to: '/anti-corruption' },
]

export const footerNavItems: NavItem[] = mainNavItems

export interface NavigationMenuItem {
  label: string
  to?: string
  icon?: string
  description?: string
  type?: 'label' | 'trigger' | 'link'
  children?: NavigationMenuItem[]
}

function mapGroupChildren(items: NavItem[]): NavigationMenuItem[] {
  return items.map(item => ({
    label: item.label,
    to: item.to,
    icon: navIcons[item.to],
    description: item.description,
  }))
}

/** Desktop: Главная + dropdown-группы + «Нет коррупции!» */
export function buildDesktopNavItems(): NavigationMenuItem[] {
  return [
    { label: 'Главная', to: '/' },
    ...navGroups.map(group => ({
      label: group.label,
      children: mapGroupChildren(group.items),
    })),
    { label: 'Нет коррупции!', to: '/anti-corruption' },
  ]
}

/** Mobile drawer: аккордеон групп */
export function buildMobileNavItems(): NavigationMenuItem[] {
  return [
    { label: 'Главная', to: '/' },
    ...navGroups.map(group => ({
      label: group.label,
      children: mapGroupChildren(group.items),
    })),
    { label: 'Нет коррупции!', to: '/anti-corruption' },
  ]
}
