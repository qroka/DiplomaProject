<template>
  <DsPageHero
    variant="inner"
    :title="privacyPolicyIntro"
    description="Порядок обработки персональных данных и меры по их защите"
    :image="hero.src"
    :image-alt="hero.alt"
  />
  <DsBreadcrumbs :items="breadcrumbItems" />

  <UContainer class="py-8 lg:py-12">
    <article class="ds-prose max-w-none">
      <section
        v-for="section in privacyPolicySections"
        :key="section.id"
        class="not-first:mt-10"
      >
        <h2>{{ section.title }}</h2>

        <p
          v-for="(paragraph, index) in section.paragraphs ?? []"
          :key="`${section.id}-p-${index}`"
        >
          {{ paragraph }}
        </p>

        <div
          v-for="(list, listIndex) in section.lists ?? []"
          :key="`${section.id}-l-${listIndex}`"
          class="not-first:mt-4"
        >
          <p v-if="list.title">
            <strong>{{ list.title }}</strong>
          </p>
          <ul>
            <li
              v-for="(item, itemIndex) in list.items"
              :key="`${section.id}-li-${itemIndex}`"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </section>

      <p class="mt-10 text-muted">
        По вопросам обработки персональных данных также можно обратиться через раздел
        <NuxtLink to="/contacts">Контакты</NuxtLink>.
      </p>
    </article>
  </UContainer>
</template>

<script setup lang="ts">
import { buildBreadcrumbs } from '~/data/breadcrumbs'
import { privacyPolicyIntro, privacyPolicySections } from '~/data/privacy-policy'

useHead({ title: privacyPolicyIntro })

const breadcrumbItems = buildBreadcrumbs({ label: privacyPolicyIntro })
const hero = useHeroImage('privacy')
</script>
