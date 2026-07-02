<script setup lang="ts">
import type { HonorBoardMember } from '~/components/HonorBoardMemberCard.vue'

useHead({ title: 'Доска почёта' })

const config = useRuntimeConfig()

const { data: staffItems, pending } = await useAsyncData('honorboard-staff', () =>
  $fetch<HonorBoardMember[]>(`${config.public.apiBaseUrl}/api/staff/?honorboard=true`), {
  server: false,
})

const honorees = computed(() => staffItems.value ?? [])

const honoreeLabel = computed(() => {
  const count = honorees.value.length
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) return 'сотрудник'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'сотрудника'
  return 'сотрудников'
})
</script>

<template>
  <DsStandardPage
    title="Доска почёта"
    description="Сотрудники администрации, отмеченные за профессионализм, вклад в развитие района и служение жителям"
  >
    <DsContentSection
      title="Лауреаты доски почёта"
      :description="honorees.length
        ? `Сейчас в разделе ${honorees.length} ${honoreeLabel}`
        : 'Список лауреатов обновляется администрацией'"
      overline="Команда"
      heading-id="honor-members"
      spacing="lg"
    >
      <StaffCard
        :items="honorees"
        :pending="pending"
      />
    </DsContentSection>

    <DsContentSection
      title="Станьте частью команды"
      description="Узнайте об открытых вакансиях и возможностях профессионального роста в администрации района"
      overline="Карьера"
      heading-id="honor-career"
      spacing="lg"
    >
      <DsCalloutPanel
        title="Присоединяйтесь к администрации Сургутского района"
        description="Муниципальная служба — это возможность вносить реальный вклад в развитие района и расти вместе с командой профессионалов."
        icon="i-lucide-briefcase"
        color="primary"
        variant="soft"
      >
        <div class="flex flex-wrap gap-3">
          <UButton
            label="Смотреть вакансии"
            to="/vacancies"
            color="primary"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="cursor-pointer"
          />
          <UButton
            label="О команде"
            to="/about"
            color="neutral"
            variant="outline"
            size="lg"
            class="cursor-pointer transition-colors duration-200"
          />
        </div>
      </DsCalloutPanel>
    </DsContentSection>
  </DsStandardPage>
</template>
