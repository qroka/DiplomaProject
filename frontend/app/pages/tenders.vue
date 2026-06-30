<template>
  <div>
    <DsPageHero
      variant="inner"
      title="Конкурсы"
      description="Конкурсы на замещение вакантных должностей и формирование кадрового резерва"
      :image="hero.src"
      :image-alt="hero.alt"
    />
    <DsBreadcrumbs :items="breadcrumbItems" />
    <ActiveCompetitions />
    <TabsTenders />
  </div>
</template>

<script setup>
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Конкурсы' })

const breadcrumbItems = buildBreadcrumbs({ label: 'Конкурсы' })
const hero = useHeroImage('tenders')
</script>
