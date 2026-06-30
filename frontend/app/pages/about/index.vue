<script setup lang="ts">
import { headOfDistrict, socialLinks } from '~/data/departments'
import { buildBreadcrumbs } from '~/data/breadcrumbs'

useHead({ title: 'О нас' })

const headFullName = `${headOfDistrict.surname} ${headOfDistrict.name} ${headOfDistrict.patronymic}`
const breadcrumbItems = buildBreadcrumbs({ label: 'О нас' })
const hero = useHeroImage('about')
</script>

<template>
  <DsPageHero
    variant="inner"
    title="О нас"
    description="Администрация Сургутского района: миссия, полномочия и структура"
    :image="hero.src"
    :image-alt="hero.alt"
  />

  <DsBreadcrumbs :items="breadcrumbItems" />

  <UContainer class="py-8 lg:py-12">
    <div class="max-w-3xl mx-auto text-center mb-4">
      <p class="text-body-lg text-text-secondary leading-relaxed">
        Администрация Сургутского района — орган местного самоуправления, который обеспечивает
        реализацию полномочий муниципального образования, координирует работу отраслевых органов
        и отвечает за развитие района и благополучие его жителей.
      </p>
    </div>
  </UContainer>

  <Testimonial
    :image="headOfDistrict.image"
    :quote="headOfDistrict.quote"
    :author="`${headOfDistrict.role} ${headFullName}`"
    :alt="`Фото: ${headFullName}`"
  />

  <DeputyStructure />

  <UContainer class="py-8 lg:py-12">
    <DsSurface
      elevation="sm"
      padding="lg"
      class="text-center"
    >
      <h2 class="text-h2 text-text-primary mb-2">
        Команда Сургутского района
      </h2>
      <p class="text-body text-text-secondary mb-6">
        Следите за новостями и жизнью администрации в официальных социальных сетях
      </p>
      <div class="flex flex-wrap justify-center gap-3">
        <UButton
          v-for="link in socialLinks"
          :key="link.url"
          :to="link.url"
          target="_blank"
          :icon="link.icon"
          :label="link.label"
          color="neutral"
          variant="outline"
          class="min-h-11"
        />
      </div>
    </DsSurface>

    <div class="flex flex-wrap justify-center gap-4 mt-10">
      <UButton
        label="Доска почёта"
        to="/honorboard"
        color="primary"
        variant="solid"
        size="lg"
        trailing-icon="i-lucide-arrow-right"
        class="min-h-11 font-medium"
      />
      <UButton
        label="Кадровый резерв"
        to="/staffreserve"
        color="primary"
        variant="outline"
        size="lg"
        trailing-icon="i-lucide-arrow-right"
        class="min-h-11 font-medium"
      />
    </div>
  </UContainer>
</template>
