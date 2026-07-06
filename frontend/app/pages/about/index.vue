<script setup lang="ts">
import { headOfDistrict } from '~/data/departments'
import { socialLinks } from '~/data/navigation'

useHead({ title: 'О нас' })

const headFullName = `${headOfDistrict.surname} ${headOfDistrict.name} ${headOfDistrict.patronymic}`

const missionCards = [
  {
    title: 'Муниципальное управление',
    icon: 'i-lucide-landmark',
    description: 'Реализуем полномочия местного самоуправления и обеспечиваем устойчивое развитие Сургутского района.',
  },
  {
    title: 'Команда профессионалов',
    icon: 'i-lucide-users',
    description: 'Объединяем специалистов отраслевых органов, которые ежедневно работают на благополучие жителей.',
  },
  {
    title: 'Открытость и доверие',
    icon: 'i-lucide-shield-check',
    description: 'Делимся информацией о кадровой политике, вакансиях и возможностях профессионального роста.',
  },
]
</script>

<template>
  <DsStandardPage
    title="О нас"
    description="Администрация Сургутского района — орган местного самоуправления, который обеспечивает реализацию полномочий муниципального образования, координирует работу отраслевых органов и отвечает за развитие района и благополучие его жителей."
  >
    <DsContentSection
      title="Направления работы"
      description="Ключевые принципы, на которых строится деятельность администрации Сургутского района"
      overline="Миссия"
      heading-id="about-mission"
      spacing="lg"
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <DsInfoCard
          v-for="card in missionCards"
          :key="card.title"
          :title="card.title"
          :icon="card.icon"
        >
          {{ card.description }}
        </DsInfoCard>
      </div>
    </DsContentSection>

    <DsContentSection
      title="Слово главы района"
      description="О команде, ответственности и вкладе каждого сотрудника в развитие муниципалитета"
      overline="Руководство"
      heading-id="about-leader"
      spacing="lg"
    >
      <Testimonial
        :image="headOfDistrict.image"
        :quote="headOfDistrict.quote"
        :author="headFullName"
        :role="headOfDistrict.role"
        :alt="`Фото: ${headFullName}`"
      />
    </DsContentSection>

    <DeputyStructure />

    <DsContentSection
      title="Будьте в курсе жизни администрации"
      description="Новости, события и проекты района — в официальных социальных сетях"
      overline="Сообщество"
      heading-id="about-community"
      spacing="lg"
    >
      <DsCalloutPanel
        title="Присоединяйтесь к команде Сургутского района"
        description="Следите за новостями администрации и узнайте, как стать частью муниципальной службы."
        icon="i-lucide-users"
        color="primary"
        variant="soft"
      >
        <div class="flex flex-wrap gap-2">
          <UButton
            v-for="link in socialLinks"
            :key="link.to"
            :to="link.to"
            target="_blank"
            rel="noopener noreferrer"
            :icon="link.image ? undefined : link.icon"
            :label="link.label"
            color="neutral"
            variant="outline"
            class="cursor-pointer transition-colors duration-200"
          >
            <template
              v-if="link.image"
              #leading
            >
              <span
                class="size-5 bg-current mask-[url('/Icons/max.svg')] mask-contain mask-center mask-no-repeat"
                aria-hidden="true"
              />
            </template>
          </UButton>
        </div>
      </DsCalloutPanel>
    </DsContentSection>
  </DsStandardPage>
</template>
