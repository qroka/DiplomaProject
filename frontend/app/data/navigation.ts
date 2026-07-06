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
        description: 'Телефоны и адреса кадровых отделов',
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

export const teamNavGroup = navGroups[0]!
export const careerNavGroup = navGroups[1]!

/** Плоский список для футера и поиска */
export const mainNavItems: NavItem[] = [
  { label: 'Главная', to: '/' },
  ...navGroups.flatMap(group => group.items),
  { label: 'Вакансии', to: '/vacancies' },
  { label: 'Нет коррупции!', to: '/anti-corruption' },
]

export const footerNavItems: NavItem[] = mainNavItems

export const siteContact = {
  organization: 'Администрация Сургутского района',
  portalName: 'Кадровый портал',
  address: '628400, ХМАО-Югра, г. Сургут, ул. Энгельса, 10',
  phone: '+7 (3462) 52-00-00',
  phoneHref: 'tel:+73462520000',
  email: 'info@admsr.ru',
  hours: 'ПН 08:30-17:00, ВТ-ПТ 08:30-16:00',
}

export const footerResourceLinks: NavItem[] = [
  { label: 'Администрация Сургутского района', to: 'https://admsr.ru' },
  { label: 'ФСС России', to: 'https://lk.fss.ru/' },
  { label: 'Минтруд России', to: 'https://mintrud.gov.ru' },
]

export const footerLegalLinks: NavItem[] = [
  { label: 'Обратная связь', to: '/feedback' },
  { label: 'Политика персональных данных', to: '/privacy' },
  { label: 'Анти-коррупционная политика', to: '/anti-corruption' },
]

export interface SocialLink {
  label: string
  to: string
  icon: string
  /** Прямой путь к SVG, если иконку нельзя подключить через Iconify */
  image?: string
}

/** Официальные соцсети HR-портала администрации Сургутского района */
export const socialLinks: SocialLink[] = [
  { label: 'ВКонтакте', to: 'https://vk.com/hradmsr', icon: 'i-simple-icons-vk' },
  {
    label: 'MAX',
    to: 'https://max.ru/join/bjPxpiPjAkD8_jk7eHTtAM8RQSKgshB4moGTlOm5Ggc',
    icon: 'i-custom-max-messenger',
    image: '/Icons/max.svg',
  },
]

export const footerCareerLinks: NavItem[] = [
  ...careerNavGroup.items,
  { label: 'Вакансии', to: '/vacancies' },
  { label: 'Нет коррупции!', to: '/anti-corruption' },
]

export interface NavigationMenuItem {
  label: string
  to?: string
  icon?: string
  description?: string
  type?: 'label' | 'trigger' | 'link'
  active?: boolean
  children?: NavigationMenuItem[]
}

function isNavPathActive(currentPath: string, itemPath: string): boolean {
  if (currentPath === itemPath) return true
  if (itemPath !== '/' && currentPath.startsWith(`${itemPath}/`)) return true
  return false
}

function applyNavActiveState(
  items: NavigationMenuItem[],
  currentPath: string,
): NavigationMenuItem[] {
  return items.map((item) => {
    if (item.children?.length) {
      const children = item.children.map(child => ({
        ...child,
        active: child.to ? isNavPathActive(currentPath, child.to) : false,
      }))
      const active = children.some(child => child.active)

      return { ...item, children, active }
    }

    return {
      ...item,
      active: item.to ? isNavPathActive(currentPath, item.to) : false,
    }
  })
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
export function buildDesktopNavItems(currentPath: string): NavigationMenuItem[] {
  return applyNavActiveState([
    { label: 'Главная', to: '/' },
    ...navGroups.map(group => ({
      label: group.label,
      children: mapGroupChildren(group.items),
    })),
    { label: 'Нет коррупции!', to: '/anti-corruption' },
  ], currentPath)
}

/** Mobile drawer: аккордеон групп */
export function buildMobileNavItems(currentPath: string): NavigationMenuItem[] {
  return applyNavActiveState([
    { label: 'Главная', to: '/' },
    ...navGroups.map(group => ({
      label: group.label,
      children: mapGroupChildren(group.items),
    })),
    { label: 'Нет коррупции!', to: '/anti-corruption' },
  ], currentPath)
}
