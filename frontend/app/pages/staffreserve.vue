<template>
  <PageHeroElse
    title="Кадровый резерв"
    description="Сотрудники, состоящие в кадровом резерве"
    image="/images/office.png"
    image-alt="Office workspace"
  />
  <StaffCard
    title="Резерв кадров"
    subtitle="Сотрудники в кадровом резерве администрации Сургутского района"
    :items="reserveStaff ?? []"
  />
</template>

<script setup lang="ts">
useHead({ title: 'Кадровый резерв' })

const config = useRuntimeConfig()
const { data: reserveStaff } = await useAsyncData('staffReserve', () =>
  $fetch(`${config.public.apiBaseUrl}/api/staff/?reserve=true`), { server: false }
)
</script>
