<template>
  <div>
    <div
      v-if="pending"
      class="space-y-3"
      aria-busy="true"
      aria-label="Загрузка документов"
    >
      <UCard
        v-for="index in 3"
        :key="index"
        variant="subtle"
        :ui="{ body: 'p-4 lg:p-5 space-y-3' }"
      >
        <USkeleton class="h-5 w-3/4" />
        <USkeleton class="h-9 w-28" />
      </UCard>
    </div>

    <DsEmptyState
      v-else-if="!documents.length"
      icon="i-lucide-file-x"
      title="Документы отсутствуют"
      description="В этой категории пока нет опубликованных материалов"
    />

    <ul
      v-else
      class="flex flex-col gap-3"
    >
      <li
        v-for="doc in documents"
        :key="doc.id"
      >
        <UCard
          variant="subtle"
          :ui="{
            root: 'rounded-xl transition-colors duration-200',
            body: 'flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between lg:p-5',
          }"
        >
          <div class="flex min-w-0 items-start gap-3">
            <div
              class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <UIcon
                name="i-lucide-file-text"
                class="size-5"
              />
            </div>

            <div class="min-w-0 space-y-1">
              <p class="text-body font-medium text-text-primary leading-snug text-pretty">
                {{ doc.name }}
              </p>
              <time
                v-if="doc.created_at"
                :datetime="doc.created_at"
                class="text-caption text-text-muted"
              >
                {{ formatDate(doc.created_at) }}
              </time>
            </div>
          </div>

          <UButton
            v-if="doc.file"
            label="Скачать"
            icon="i-lucide-download"
            :to="doc.file"
            target="_blank"
            external
            color="primary"
            size="lg"
            class="w-full shrink-0 cursor-pointer sm:w-auto"
            :aria-label="`Скачать документ: ${doc.name}`"
          />
        </UCard>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export interface AntiCorruptionDocument {
  id: number
  category: string
  name: string
  file?: string | null
  created_at?: string
}

withDefaults(defineProps<{
  documents: AntiCorruptionDocument[]
  pending?: boolean
}>(), {
  pending: false,
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
