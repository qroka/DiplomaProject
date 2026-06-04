<template>
  <!-- Первое главное -->
  <PageHeroIndex
    title="Успешная команда - успешный район"
    description="Отправляй свое резюме сейчас и наш специалист свяжется с вами"
    button-label="Наши вакансии"
    button-link="/vacancies"
    image="/images/office.png"
    image-alt="Office workspace"
  />

  <!-- Вот с кем мы работаем -->
  <div>
    <USeparator 
      label="С нами работают" 
      class="my-6"
    />
  </div>

  <!-- Листающиеся логотипы -->
  <!-- TODO: при маленком разрешении они стоят в ряд не шевелясь -->
  <div class="group **:data-marquee:hover:[animation-play-state:paused] **:data-marquee:focus-within:[animation-play-state:paused]">
    <UMarquee
      pause-on-hover
      :overlay="false"
      :ui="{ root: '[--gap:16px]' }"
    >
      <NuxtLink
        v-for="(logo, index) in [
          { url: 'https://lk.fss.ru/', image: '/Icons/i-custom-fss.svg', alt: 'FSS Logo' },
          { url: 'https://mintrud.gov.ru', image: '/Icons/i-custom-mintrud.svg', alt: 'Ministry of Labor Logo' },
          { url: 'https://admsr.ru', image: '/Icons/i-custom-admsr.svg', alt: 'Surgut District Administration Logo' },
          { url: 'https://admsurgut.ru', image: '/Icons/i-custom-admsur.svg', alt: 'Surgut City Administration Logo' }
        ]"
        :key="index"
        :to="logo.url"
        target="_blank"
        class="flex items-center justify-center px-6 mb-6 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 focus-visible:rounded-lg"
      >
        <img :src="logo.image" :alt="logo.alt" class="h-12 w-12 opacity-75 hover:opacity-100 transition object-contain" />
      </NuxtLink>
    </UMarquee>
  </div>

  <!-- Деятельность -->
  <UContainer class="py-6 lg:py-12">
    <UBlogPosts
      class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
      :posts="posts"
    />
  </UContainer>

  <!-- Почему работать именно с нами -->
  <UContainer class="py-6 lg:py-12">
    <!-- Header -->
    <div class="max-w-2xl mb-6">
      <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Почему именно мы?
      </h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg">
        Вот коротко почему именно мы
      </p>
    </div>
    <!-- Features Grid -->
    <UPageGrid class="lg:grid-cols-3 gap-8">
      <UPageCard
        v-for="feature in features"
        :key="feature.title"
        :title="feature.title"
        :description="feature.description"
        :icon="feature.icon"
        class="bg-white/60 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 backdrop-blur-sm"
      />
    </UPageGrid>
  </UContainer>
    <VacancyCarousel
      title="Последние вакансии"
      subtitle="Актуальные предложения от работодателей"
      :vacancies="vacanciesData ?? []"
    />

  <UContainer class="py-6 lg:py-12">
    <!-- Header -->
    <div class=" max-w-2xl mx-2 mb-2">
      <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Часто Задаваемые <span class="text-green-600 dark:text-green-400">Вопросы</span>
      </h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg">
        Everything you need to know about our productivity platform.
      </p>
    </div>
    <!-- FAQ Accordion -->
    <div class="py-6 lg:py-12">
      <UAccordion
        :items="FAQ_items"
        :ui="{
          wrapper: 'flex flex-col gap-4',
          item: 'bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden mb-4 backdrop-blur-sm',
          header: 'px-4 py-2 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800/50 transition',
          body: 'px-6 py-2 text-gray-500 dark:text-gray-400',
          trailing: 'text-orange-500'
        }"
        multiple
      />
    </div>
  </UContainer>
  
</template>

<script setup>
useHead({ title: 'Главная' })
import VacancyCarousel from '~/components/VacancyCarousel.vue'

const config = useRuntimeConfig()
const { data: vacanciesData } = await useAsyncData('vacancies', () =>
  $fetch(`${config.public.apiBaseUrl}/api/vacancies/`), { server: false }
)
const features = [
  {
    title: 'Стабильность занятости',
    description: 'Государство редко проводит массовые сокращения, как частные компании во время кризисов. Уволить госслужащего по инициативе нанимателя сложнее — требуется соблюдение множества процедур.',
    icon: 'i-lucide-sparkles'
  },
  {
    title: 'Предсказуемый карьерный рост.',
    description: 'Часто существует четкая сетка званий, разрядов или классов (например, в России — классные чины). Повышение может зависеть от выслуги лет, а не только от личных достижений или рыночной конъюнктуры.',
    icon: 'i-lucide-sparkles'
  },
  {
    title: 'Режим работы и переработки',
    description: 'Формально — нормированный день, хотя на практике переработки возможны. Но они часто компенсируются отгулами или надбавками, а не бесплатной работой.',
    icon: 'i-lucide-sparkles'
  },
  {
    title: 'Защищенность от рыночных рисков.',
    description: ' Госслужащий не потеряет зарплату из-за банкротства работодателя, санкций, падения спроса на продукцию и т.п.',
    icon: 'i-lucide-sparkles'
  },
  {
    title: 'Медицинское обслуживание',
    description: 'Ведомственные поликлиники, санатории, путевки по льготной цене.',
    icon: 'i-lucide-sparkles'
  },
  {
    title: 'Пенсионное обеспечение',
    description: 'Пенсионное обеспечение государственных служащих часто является более выгодным по сравнению с работниками частного бизнеса благодаря возможности получать не только страховую, но и специальную государственную пенсию за выслугу лет.',
    icon: 'i-lucide-sparkles'
  },
]

const posts = [
  { 
    title: 'Спортивный конкурс между отделами', 
    description: 'Такого-то числа у нас проходит конкурс...', 
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png', 
    date: '2024-11-25' 
  },
  { 
    title: 'Время близится к первому декабря, заплатил налог?', 
    description: 'Приходите в налоговую...', 
    image: 'https://nuxt.com/assets/blog/v3.14.png', 
    date: '2024-11-04' 
  },
  { 
    title: 'Поздравляем с Днем госслужащего!', 
    description: 'Глава нашего Сургутского района спешит вас поздравить...', 
    image: 'https://nuxt.com/assets/blog/v3.13.png', 
    date: '2024-08-22' 
  }
]

const FAQ_items = [
  {
    label: 'Как к нам устроиться на работу?',
    icon: 'i-lucide-smile',
    content: 'Подавайте заявку через вкладку вакансийб выбирайте нужную и в всплывающей форме заполняйте ваши данные.'
  },
  {
    label: 'Какие преимущества у госслужащих по сравнению с обычными рабочими частного бизнеса?',
    icon: 'i-lucide-swatch-book',
    content: ' Во-первых, государственные служащие обладают значительно более высокой стабильностью занятости по сравнению с работниками частного бизнеса: государство крайне редко проводит массовые сокращения, подобные тем, что случаются в частных компаниях во время экономических кризисов или при смене собственника, а процедура увольнения госслужащего по инициативе нанимателя сильно затруднена и требует соблюдения множества юридических формальностей. Во-вторых, на госслужбе существует четкий и предсказуемый карьерный рост, основанный на системе званий, разрядов или классных чинов, где повышение часто зависит от выслуги лет и формального соответствия критериям, а не только от личных достижений или текущей рыночной конъюнктуры, что делает карьеру более планируемой. В-третьих, государство предоставляет расширенные социальные гарантии, включая полностью оплачиваемый больничный любой продолжительности, ежегодный оплачиваемый отпуск, который, как правило, длиннее стандартного (например, в России от 30 дней плюс дополнительные дни за выслугу лет), а также более выгодное пенсионное обеспечение, часто включающее пенсию за выслугу лет.'
  },
  {
    label: 'Действительно ли больничный оплатят полностью, даже если я болею несколько месяцев?',
    icon: 'i-lucide-box',
    content: 'Да, полностью и без попыток уволить. В отличие от частного бизнеса, где длительный больничный — частая причина для сокращения или давления с просьбой «уйти по собственному», госслужащий защищен законом. Вам оплатят весь период нетрудоспособности, а ваше рабочее место сохранится. Более того, после выхода на работу вас не могут понизить в должности или чине из-за болезни.'
  },
  {
    label: 'Правда ли, что у госслужащих нормированный день и переработки компенсируют, или на деле я буду работать допоздна бесплатно, как во многих частных компаниях?',
    icon: 'i-lucide-smile',
    content: 'Формально у вас нормированный рабочий день (например, с 9 до 18), а любая переработка по инициативе начальника должна компенсироваться — либо деньгами (сверхурочными по повышенной ставке), либо дополнительными отгулами. Однако на практике переработки на госслужбе случаются часто (сессии, проверки, отчеты), и вот ключевое отличие от частного бизнеса: в частной компании вас могут заставить работать допоздна бесплатно под угрозой увольнения, а госслужащий защищен — он может письменно отказаться от неоплачиваемой сверхурочной работы, и его не уволят за это (хотя отношения с начальством могут испортиться). Более того, если вы фиксируете переработки, вам обязаны либо заплатить, либо предоставить отгул в удобное для вас время — в отличие от частного сектора, где «бесплатные переработки» часто считаются нормой.'
  },
  {
    label: 'А у вас хороший коллектив?',
    icon: 'i-lucide-smile',
    content: 'Да, конечно! Пополняйте ряды таких же профессионалов как вы и приходите к нам на работу как во второй дом :) (не финальный текст)'
  }
]

</script>