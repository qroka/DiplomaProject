<template>
  <DsSurface
    elevation="none"
    padding="lg"
    class="w-full"
  >
    <div class="space-y-5">
      <h3
        :id="headingId"
        class="text-h3 text-text-primary text-balance scroll-mt-28"
      >
        {{ section.title }}
      </h3>

      <div class="space-y-4 text-body text-text-secondary leading-relaxed">
        <p
          v-for="(paragraph, index) in section.paragraphs ?? []"
          :key="`${section.id}-p-${index}`"
          class="text-pretty"
        >
          {{ paragraph }}
        </p>

        <div
          v-for="(list, listIndex) in section.lists ?? []"
          :key="`${section.id}-l-${listIndex}`"
          class="space-y-3"
        >
          <p
            v-if="list.title"
            class="font-medium text-text-primary"
          >
            {{ list.title }}
          </p>
          <ul class="list-disc space-y-2 ps-5 marker:text-primary/70">
            <li
              v-for="(item, itemIndex) in list.items"
              :key="`${section.id}-li-${itemIndex}`"
              class="text-pretty"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </DsSurface>
</template>

<script setup lang="ts">
import type { PrivacyPolicySection } from '~/data/privacy-policy'

const props = defineProps<{
  section: PrivacyPolicySection
}>()

const headingId = computed(() => `privacy-${props.section.id}`)

if (props.section.title) {
  useStandardPageTocRegister({
    id: headingId.value,
    label: props.section.title.replace(/^\d+\.\s*/, ''),
  })
}
</script>
