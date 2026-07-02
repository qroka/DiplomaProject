<template>
  <DsStandardPage
    :title="privacyPolicyIntro"
    description="Порядок обработки персональных данных и меры по их защите"
    intro="Документ определяет порядок обработки персональных данных посетителей кадрового портала и меры по их защите в соответствии с законодательством Российской Федерации."
  >
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

      <UCard
        variant="subtle"
        class="mt-10"
        :ui="{ body: 'p-5 text-body text-text-secondary' }"
      >
        По вопросам обработки персональных данных также можно обратиться через раздел
        <NuxtLink
          to="/contacts"
          class="text-text-accent hover:underline"
        >Контакты</NuxtLink>.
      </UCard>
    </article>
  </DsStandardPage>
</template>

<script setup lang="ts">
import { privacyPolicyIntro, privacyPolicySections } from '~/data/privacy-policy'

useHead({ title: privacyPolicyIntro })
</script>
