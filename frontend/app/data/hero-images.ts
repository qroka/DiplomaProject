export type HeroImageKey =
  | 'home'
  | 'about'
  | 'honorboard'
  | 'contacts'
  | 'vacancies'
  | 'tenders'
  | 'staffreserve'
  | 'youth'
  | 'profdev'
  | 'antiCorruption'
  | 'privacy'
  | 'default'

interface HeroImageMeta {
  file: string
  alt: string
}

/** Уникальные SVG-иллюстрации по разделам (light/dark в public/images/) */
export const heroImages: Record<HeroImageKey, HeroImageMeta> = {
  home: {
    file: 'connect',
    alt: 'Команда администрации Сургутского района',
  },
  about: {
    file: 'line-1',
    alt: 'О кадровой политике администрации района',
  },
  honorboard: {
    file: 'line-6',
    alt: 'Доска почёта сотрудников',
  },
  contacts: {
    file: 'line-7',
    alt: 'Контакты отдела кадров',
  },
  vacancies: {
    file: 'optimize',
    alt: 'Вакансии администрации Сургутского района',
  },
  tenders: {
    file: 'track',
    alt: 'Конкурсы на замещение должностей',
  },
  staffreserve: {
    file: 'line-2',
    alt: 'Кадровый резерв',
  },
  youth: {
    file: 'line-3',
    alt: 'Молодёжная политика и стажировки',
  },
  profdev: {
    file: 'line-4',
    alt: 'Профессиональное развитие сотрудников',
  },
  antiCorruption: {
    file: 'line-5',
    alt: 'Противодействие коррупции',
  },
  privacy: {
    file: 'connect',
    alt: 'Политика конфиденциальности',
  },
  default: {
    file: 'connect',
    alt: 'Кадровый портал Сургутского района',
  },
}

export function resolveHeroImagePath(key: HeroImageKey, colorMode: 'light' | 'dark' = 'light'): string {
  const meta = heroImages[key] ?? heroImages.default
  return `/images/${colorMode}/${meta.file}.svg`
}

export function resolveHeroImageAlt(key: HeroImageKey): string {
  return (heroImages[key] ?? heroImages.default).alt
}
