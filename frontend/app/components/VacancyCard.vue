<template>
  <DsSurface
    :class="[
      vacancy.isNew && 'ring-2 ring-border-brand',
      'h-full flex flex-col',
    ]"
    elevation="sm"
    padding="none"
    :interactive="true"
    tag="article"
  >
    <div class="flex flex-col h-full p-4 sm:p-6">
      <!-- Header -->
      <div class="flex justify-between items-start gap-3 mb-4">
        <div class="min-w-0 flex-1">
          <h3 class="text-h3 text-text-primary mb-2 text-balance">
            {{ vacancy.title }}
          </h3>
          <div class="flex items-center gap-2 text-caption text-text-muted">
            <UIcon
              name="i-lucide-building-2"
              class="h-4 w-4 shrink-0"
              aria-hidden="true"
            />
            <span class="truncate">{{ vacancy.company || vacancy.branch || 'Администрация Сургутского района' }}</span>
          </div>
        </div>
        <div class="flex flex-col items-end gap-2 shrink-0">
          <UBadge
            v-if="vacancy.isNew"
            color="primary"
            variant="subtle"
            size="sm"
          >
            Новое
          </UBadge>
          <time
            v-if="formattedDate"
            :datetime="vacancy.created_at"
            class="text-caption text-text-muted whitespace-nowrap"
          >
            {{ formattedDate }}
          </time>
        </div>
      </div>

      <!-- Details -->
      <div class="space-y-2.5 mb-4 flex-1">
        <div
          v-if="vacancy.location"
          class="flex items-center gap-2 text-body text-text-secondary"
        >
          <UIcon
            name="i-lucide-map-pin"
            class="h-4 w-4 shrink-0 text-text-muted"
            aria-hidden="true"
          />
          <span>{{ vacancy.location }}</span>
        </div>

        <div
          v-if="vacancy.salary"
          class="flex items-center gap-2 text-body font-semibold text-text-success"
        >
          <UIcon
            name="i-lucide-wallet"
            class="h-4 w-4 shrink-0"
            aria-hidden="true"
          />
          <span>{{ vacancy.salary }}</span>
        </div>

        <div
          v-if="vacancy.employmentType"
          class="flex items-center gap-2 text-caption text-text-muted"
        >
          <UIcon
            name="i-lucide-briefcase"
            class="h-4 w-4 shrink-0"
            aria-hidden="true"
          />
          <span>{{ vacancy.employmentType }}</span>
        </div>

        <div
          v-if="vacancy.experience"
          class="flex items-center gap-2 text-caption text-text-muted"
        >
          <UIcon
            name="i-lucide-award"
            class="h-4 w-4 shrink-0"
            aria-hidden="true"
          />
          <span>Опыт: {{ vacancy.experience }}</span>
        </div>
      </div>

      <!-- Skills -->
      <div
        v-if="vacancy.skills?.length"
        class="flex flex-wrap gap-2 mb-5"
      >
        <UBadge
          v-for="(skill, skillIndex) in vacancy.skills.slice(0, 4)"
          :key="skillIndex"
          color="neutral"
          variant="subtle"
          size="sm"
        >
          {{ skill }}
        </UBadge>
      </div>

      <!-- CTA: primary Откликнуться (flex-2), secondary Подробнее (flex-1) -->
      <div class="flex gap-3 mt-auto pt-4 border-t border-border-default">
        <UButton
          label="Откликнуться"
          :aria-label="'Откликнуться на вакансию: ' + vacancy.title"
          color="primary"
          variant="solid"
          class="flex-2 min-h-11 font-medium justify-center"
          @click="$emit('apply', vacancy)"
        />
        <UButton
          label="Подробнее"
          :aria-label="'Подробнее о вакансии: ' + vacancy.title"
          color="primary"
          variant="outline"
          class="flex-1 min-h-11 font-medium justify-center"
          :to="vacancy.detailsLink"
        />
      </div>
    </div>
  </DsSurface>
</template>

<script setup lang="ts">
const props = defineProps({
  vacancy: {
    type: Object,
    required: true,
  },
})

defineEmits(['apply'])

const formattedDate = computed(() => {
  const raw = props.vacancy.created_at
  if (!raw) return ''
  try {
    return new Date(raw).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return ''
  }
})
</script>
