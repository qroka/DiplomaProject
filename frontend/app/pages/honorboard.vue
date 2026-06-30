<script setup>
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Доска почёта' })
const config = useRuntimeConfig()
const { data: staffItems } = await useAsyncData('staff', () =>
  $fetch(`${config.public.apiBaseUrl}/api/staff/?honorboard=true`), { server: false })

const breadcrumbItems = buildBreadcrumbs({ label: 'Доска почёта' })
const hero = useHeroImage('honorboard')
</script>

<template>
  <DsPageHero
    variant="inner"
    title="Доска почёта"
    description="Сотрудники администрации, отмеченные за профессионализм, вклад в развитие района и служение жителям"
    :image="hero.src"
    :image-alt="hero.alt"
  />
  <DsBreadcrumbs :items="breadcrumbItems" />
  <StaffCard
    title="Наша команда"
    subtitle="Познакомьтесь с нашими сотрудниками"
    :items="staffItems ?? []"
  />
</template>
