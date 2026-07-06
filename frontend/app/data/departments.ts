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
  aboutParagraphs?: string[]
  units?: string[]
  tasks?: string[]
  head?: DepartmentHead
  phone?: string
  email?: string
  image?: string | null
  vacancyBranch?: string
}

export interface Deputy {
  role: string
  surname: string
  name: string
  patronymic: string
  image: string
  departmentSlugs: string[]
}

export const headOfDistrict = {
  role: 'Глава Сургутского района',
  surname: 'Трубецкой',
  name: 'Андрей',
  patronymic: 'Александрович',
  image: '/images/people/glava.jpg',
  quote:
    'За каждым, даже скромным, улучшением жизни в Сургутском районе стоит конкретный человек в администрации Сургутского района. Мы верим, что вы внесёте свой вклад в развитие района и будете гордиться тем, что являетесь членом нашей команды.'
}

export const defaultDepartmentImage = '/images/Picture.png'
