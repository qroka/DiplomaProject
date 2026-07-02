<template>
  <div>
    <ul
      v-if="pending"
      class="flex flex-col gap-6 lg:gap-8"
      aria-busy="true"
      aria-label="Загрузка лауреатов"
    >
      <li
        v-for="index in 3"
        :key="index"
      >
        <UCard
          variant="subtle"
          :ui="{ root: 'overflow-hidden rounded-xl', body: 'p-0' }"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12">
            <USkeleton class="min-h-52 lg:col-span-4 lg:min-h-60" />
            <div class="space-y-4 p-5 sm:p-6 lg:col-span-8 lg:p-8">
              <USkeleton class="h-4 w-40" />
              <USkeleton class="h-20 w-full" />
              <div class="space-y-2 border-t border-default pt-4">
                <USkeleton class="h-6 w-2/3" />
                <USkeleton class="h-4 w-1/2" />
              </div>
            </div>
          </div>
        </UCard>
      </li>
    </ul>

    <ul
      v-else-if="items.length"
      class="flex flex-col gap-6 lg:gap-8"
    >
      <li
        v-for="(item, index) in items"
        :key="`${item.surname}-${item.name}-${index}`"
      >
        <HonorBoardMemberCard :member="item" />
      </li>
    </ul>

    <DsEmptyState
      v-else
      icon="i-lucide-award"
      title="Пока нет записей"
      description="Информация о сотрудниках, отмеченных на доске почёта, появится позже."
    >
      <template #action>
        <UButton
          label="Вакансии администрации"
          to="/vacancies"
          color="primary"
          variant="soft"
          trailing-icon="i-lucide-arrow-right"
          class="cursor-pointer"
        />
      </template>
    </DsEmptyState>
  </div>
</template>

<script setup lang="ts">
import type { HonorBoardMember } from '~/components/HonorBoardMemberCard.vue'

withDefaults(defineProps<{
  items: HonorBoardMember[]
  pending?: boolean
}>(), {
  pending: false,
})
</script>
