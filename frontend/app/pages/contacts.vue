<template>
  <DsPageHero
    variant="inner"
    title="Контакты"
    description="Телефоны, адреса и режим работы отделов кадровой политики администрации Сургутского района"
    :image="hero.src"
    :image-alt="hero.alt"
  />
  <DsBreadcrumbs :items="breadcrumbItems" />
  <ContactsTable />
</template>

<script setup lang="ts">
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'Контакты' })

const breadcrumbItems = buildBreadcrumbs({ label: 'Контакты' })
const hero = useHeroImage('contacts')
</script>
