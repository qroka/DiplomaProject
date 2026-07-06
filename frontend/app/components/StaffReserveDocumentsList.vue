<template>
  <div>
    <div
      v-if="pending"
      class="space-y-3"
      aria-busy="true"
      aria-label="Загрузка документов кадрового резерва"
    >
      <UCard
        v-for="index in 3"
        :key="index"
        variant="subtle"
        :ui="{ body: 'p-4 flex items-center justify-between gap-3' }"
      >
        <USkeleton class="h-5 w-2/3" />
        <USkeleton class="h-8 w-24" />
      </UCard>
    </div>

    <DsEmptyState
      v-else-if="!documents.length"
      icon="i-lucide-file-x"
      title="Документы отсутствуют"
      description="Опубликованные документы появятся здесь после размещения в административной панели."
    />

    <div
      v-else
      class="space-y-3"
    >
      <UCard
        v-for="entry in paginatedDocuments"
        :key="entry.id"
        variant="subtle"
        :ui="{
          root: 'rounded-xl transition-colors duration-200',
          body: 'p-4 lg:p-5 flex flex-wrap items-center justify-between gap-3',
        }"
      >
        <span class="text-body font-medium text-text-primary text-pretty min-w-0">
          {{ entry.name }}
        </span>
        <UButton
          v-if="entry.link"
          label="Скачать"
          icon="i-lucide-download"
          :to="entry.link"
          target="_blank"
          external
          color="primary"
          size="lg"
          class="cursor-pointer shrink-0"
          :aria-label="`Скачать: ${entry.name}`"
        />
      </UCard>

      <div
        v-if="documents.length > itemsPerPage"
        class="flex justify-center pt-2"
      >
        <UPagination
          v-model:page="currentPage"
          :total="documents.length"
          :items-per-page="itemsPerPage"
          color="primary"
          size="lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface StaffReserveDocumentItem {
  id: number
  name: string
  link?: string | null
}

const itemsPerPage = 5
const currentPage = ref(1)
const config = useRuntimeConfig()

const { data: documentsData, pending } = await useAsyncData(
  'staff-reserve-documents',
  () => $fetch<StaffReserveDocumentItem[]>(`${config.public.apiBaseUrl}/api/staff-reserve/documents/`),
  { server: false },
)

const documents = computed(() => documentsData.value ?? [])

const paginatedDocuments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return documents.value.slice(start, start + itemsPerPage)
})
</script>
