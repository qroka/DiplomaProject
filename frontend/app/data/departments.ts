export interface DepartmentHead {
  name: string
  role: string
  phone?: string
  email?: string
}

export interface Department {
  slug: string
  name: string
  intro?: string
  units?: string[]
  tasks?: string[]
  head?: DepartmentHead
  phone?: string
  email?: string
  image?: string
  vacancyBranch?: string
}

export interface Deputy {
  role: string
  surname: string
  name: string
  patronymic: string
  departmentSlugs: string[]
}

export const headOfDistrict = {
  role: 'Глава Сургутского района',
  surname: 'Трубецкой',
  name: 'Андрей',
  patronymic: 'Александрович',
  image: '/images/office.png',
  quote:
    'За каждым, даже скромным, улучшением жизни в Сургутском районе стоит конкретный человек в администрации Сургутского района. Мы верим, что вы внесёте свой вклад в развитие района и будете гордиться тем, что являетесь членом нашей команды.'
}

export const deputies: Deputy[] = [
  {
    role: 'Первый заместитель главы',
    surname: 'Марценковский',
    name: 'Руслан',
    patronymic: 'Федорович',
    departmentSlugs: [
      'dep-vnutrenney-politiki',
      'yuridicheskiy-komitet',
      'uo-it-cifra',
      'uo-municipal-sluzhba',
      'uo-organizacii-deyatelnosti'
    ]
  },
  {
    role: 'Заместитель главы',
    surname: 'Маркова',
    name: 'Юлия',
    patronymic: 'Витальевна',
    departmentSlugs: [
      'dep-municipal-imushchestvo',
      'dep-stroitelstvo-zemlya',
      'dep-zhkh-ekologiya',
      'uo-investicii-predprinimatelstvo'
    ]
  },
  {
    role: 'Заместитель главы',
    surname: 'Журавская',
    name: 'Ольга',
    patronymic: 'Руслановна',
    departmentSlugs: [
      'dep-obrazovaniya',
      'uo-molodezhnaya-politika',
      'uo-kultury',
      'uo-fizkultury-sport',
      'otdel-komissii-nesovershennoletnih'
    ]
  },
  {
    role: 'Заместитель главы',
    surname: 'Нигматуллин',
    name: 'Максим',
    patronymic: 'Эдуардович',
    departmentSlugs: [
      'dep-finansov',
      'dep-ekonomicheskogo-razvitiya',
      'uo-finansovyy-kontrol',
      'otdel-buhgalterii'
    ]
  },
  {
    role: 'Заместитель главы',
    surname: 'Сидоров',
    name: 'Павел',
    patronymic: 'Анатольевич',
    departmentSlugs: [
      'dep-obschestvennoy-bezopasnosti',
      'uo-go-chs',
      'otdel-zags',
      'specsluzhba'
    ]
  }
]

export const socialLinks = [
  { label: 'ВКонтакте', url: 'https://vk.com/admsr', icon: 'i-simple-icons-vk' },
  { label: 'MAX', url: 'https://max.ru/' }
]

const defaultIntro =
  'Отраслевой (функциональный) орган администрации Сургутского района обеспечивает реализацию полномочий в своей сфере деятельности и взаимодействует с жителями района.'

export const departments: Record<string, Department> = {
  'dep-vnutrenney-politiki': {
    slug: 'dep-vnutrenney-politiki',
    name: 'Департамент внутренней и информационной политики',
    intro: defaultIntro,
    vacancyBranch: 'Департамент внутренней и информационной политики'
  },
  'yuridicheskiy-komitet': {
    slug: 'yuridicheskiy-komitet',
    name: 'Юридический комитет',
    intro: defaultIntro,
    vacancyBranch: 'Юридический комитет'
  },
  'uo-it-cifra': {
    slug: 'uo-it-cifra',
    name: 'Управление информационных технологий и цифрового развития',
    intro: defaultIntro,
    vacancyBranch: 'Управление информационных технологий и цифрового развития'
  },
  'uo-municipal-sluzhba': {
    slug: 'uo-municipal-sluzhba',
    name: 'Управление муниципальной службы, кадров и наград',
    intro: defaultIntro,
    vacancyBranch: 'Управление муниципальной службы, кадров и наград'
  },
  'uo-organizacii-deyatelnosti': {
    slug: 'uo-organizacii-deyatelnosti',
    name: 'Управление по организации деятельности администрации района',
    intro:
      'Это настоящие «мозг» и «сердце» нашей команды! Их работа важна и многогранна. Это чёткий, отлаженный механизм, который регулирует деятельность всей администрации.',
    units: [
      'архивный отдел',
      'отдел делопроизводства',
      'отдел контроля и организационной работы',
      'отдел протокола',
      'отдел по работе с Думой Сургутского района'
    ],
    tasks: [
      'организация деятельности — обеспечение работы главы, его первых заместителей, заместителей, Думы Сургутского района, председателя Думы Сургутского района и Контрольно-счётной палаты (КСП) Сургутского района',
      'документооборот — обработка всей корреспонденции, поступающей на имя главы',
      'контроль за исполнением поступающих документов — мало подписать документ, нужно проследить, чтобы его исполнили в срок',
      'хранители истории — учёт и хранение всех документов муниципального образования',
      'протокол и этикет — визиты, совещания, мероприятия и церемонии вручения наград',
      'работа с гражданами и помощь коллегам — своевременная реакция на обращения граждан, методическая помощь по делопроизводству',
      'обеспечение справедливости — составление списков кандидатов в присяжные заседатели'
    ],
    head: {
      name: 'Ковыляев Денис Леонидович',
      role: 'Начальник управления по организации деятельности',
      phone: '8 (3462) 52-65-07, внутр. 1507',
      email: 'kdl@admsr.ru'
    },
    vacancyBranch: 'Управление по организации деятельности администрации района'
  },
  'dep-municipal-imushchestvo': {
    slug: 'dep-municipal-imushchestvo',
    name: 'Департамент управления муниципальным имуществом и жилищной политики',
    intro: defaultIntro,
    vacancyBranch: 'Департамент управления муниципальным имуществом и жилищной политики'
  },
  'dep-stroitelstvo-zemlya': {
    slug: 'dep-stroitelstvo-zemlya',
    name: 'Департамент строительства и земельных отношений',
    intro: defaultIntro,
    vacancyBranch: 'Департамент строительства и земельных отношений'
  },
  'dep-zhkh-ekologiya': {
    slug: 'dep-zhkh-ekologiya',
    name: 'Департамент жилищно-коммунального хозяйства, экологии, транспорта и связи',
    intro: defaultIntro,
    vacancyBranch: 'Департамент жилищно-коммунального хозяйства, экологии, транспорта и связи'
  },
  'uo-investicii-predprinimatelstvo': {
    slug: 'uo-investicii-predprinimatelstvo',
    name: 'Управление инвестиционной политики, развития предпринимательства и проектного управления',
    intro: defaultIntro,
    vacancyBranch: 'Управление инвестиционной политики, развития предпринимательства и проектного управления'
  },
  'dep-obrazovaniya': {
    slug: 'dep-obrazovaniya',
    name: 'Департамент образования',
    intro: defaultIntro,
    vacancyBranch: 'Департамент образования'
  },
  'uo-molodezhnaya-politika': {
    slug: 'uo-molodezhnaya-politika',
    name: 'Управление молодёжной политики и реализации социальных инициатив',
    intro: defaultIntro,
    vacancyBranch: 'Управление молодёжной политики и реализации социальных инициатив'
  },
  'uo-kultury': {
    slug: 'uo-kultury',
    name: 'Управление культуры',
    intro: defaultIntro,
    vacancyBranch: 'Управление культуры'
  },
  'uo-fizkultury-sport': {
    slug: 'uo-fizkultury-sport',
    name: 'Управление физической культуры, туризма и спорта',
    intro: defaultIntro,
    vacancyBranch: 'Управление физической культуры, туризма и спорта'
  },
  'otdel-komissii-nesovershennoletnih': {
    slug: 'otdel-komissii-nesovershennoletnih',
    name: 'Отдел по осуществлению комиссии по делам несовершеннолетних и защите их прав',
    intro: defaultIntro,
    vacancyBranch: 'Отдел по осуществлению комиссии по делам несовершеннолетних и защите их прав'
  },
  'dep-finansov': {
    slug: 'dep-finansov',
    name: 'Департамент финансов',
    intro: defaultIntro,
    vacancyBranch: 'Департамент финансов'
  },
  'dep-ekonomicheskogo-razvitiya': {
    slug: 'dep-ekonomicheskogo-razvitiya',
    name: 'Департамент экономического развития',
    intro: defaultIntro,
    vacancyBranch: 'Департамент экономического развития'
  },
  'uo-finansovyy-kontrol': {
    slug: 'uo-finansovyy-kontrol',
    name: 'Управление внутреннего муниципального финансового контроля',
    intro: defaultIntro,
    vacancyBranch: 'Управление внутреннего муниципального финансового контроля'
  },
  'otdel-buhgalterii': {
    slug: 'otdel-buhgalterii',
    name: 'Отдел бухгалтерского учёта и отчётности',
    intro: defaultIntro,
    vacancyBranch: 'Отдел бухгалтерского учёта и отчётности'
  },
  'dep-obschestvennoy-bezopasnosti': {
    slug: 'dep-obschestvennoy-bezopasnosti',
    name: 'Департамент общественной безопасности',
    intro: defaultIntro,
    vacancyBranch: 'Департамент общественной безопасности'
  },
  'uo-go-chs': {
    slug: 'uo-go-chs',
    name: 'Управление по делам гражданской обороны и чрезвычайным ситуациям',
    intro: defaultIntro,
    vacancyBranch: 'Управление по делам гражданской обороны и чрезвычайным ситуациям'
  },
  'otdel-zags': {
    slug: 'otdel-zags',
    name: 'Отдел ЗАГС',
    intro: defaultIntro,
    vacancyBranch: 'Отдел ЗАГС'
  },
  specsluzhba: {
    slug: 'specsluzhba',
    name: 'Специальная служба',
    intro: defaultIntro,
    vacancyBranch: 'Специальная служба'
  }
}

export function getDepartment(slug: string): Department | undefined {
  return departments[slug]
}

export function getDepartmentList(): Department[] {
  return Object.values(departments)
}
