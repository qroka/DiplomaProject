<template>
  <div class="space-y-8">
    <div
      v-if="pending"
      class="space-y-8"
      aria-busy="true"
      aria-label="Загрузка контактов"
    >
      <div
        v-for="index in 2"
        :key="index"
        class="space-y-4"
      >
        <USkeleton class="h-16 w-full rounded-xl" />
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <UCard
            v-for="cardIndex in 3"
            :key="cardIndex"
            variant="subtle"
            :ui="{ body: 'space-y-3 p-5' }"
          >
            <USkeleton class="h-6 w-3/4" />
            <USkeleton class="h-5 w-1/2 rounded-full" />
            <USkeleton class="h-16 w-full" />
          </UCard>
        </div>
      </div>
    </div>

    <DsEmptyState
      v-else-if="groupedStaff.length === 0"
      icon="i-lucide-phone-off"
      title="Контакты не найдены"
      description="Данные о сотрудниках временно недоступны."
    />

    <div
      v-else
      class="space-y-10"
    >
      <section
        v-for="group in groupedStaff"
        :key="group.branchId"
        class="space-y-4"
        :aria-labelledby="`branch-${group.branchId}`"
      >
        <UCard
          variant="subtle"
          :ui="{ body: 'flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:gap-4' }"
        >
          <div
            class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
            aria-hidden="true"
          >
            <UIcon
              name="i-lucide-building-2"
              class="size-5"
            />
          </div>
          <div class="min-w-0">
            <h3
              :id="`branch-${group.branchId}`"
              class="text-h3 text-text-primary text-balance"
            >
              {{ group.branchName }}
            </h3>
            <p
              v-if="group.branchAddress"
              class="mt-1 flex items-start gap-2 text-body text-text-muted"
            >
              <UIcon
                name="i-lucide-map-pin"
                class="size-4 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              {{ group.branchAddress }}
            </p>
          </div>
          <UBadge
            :label="`${group.members.length} ${groupMemberLabel(group.members.length)}`"
            color="neutral"
            variant="subtle"
            size="lg"
            class="w-fit rounded-full sm:ms-auto"
          />
        </UCard>

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <ContactMemberCard
            v-for="member in group.members"
            :key="memberKey(member)"
            :member="member"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StaffContact } from '~/components/ContactMemberCard.vue'

interface StaffGroup {
  branchId: string
  branchName: string
  branchAddress: string
  members: StaffContact[]
}

const config = useRuntimeConfig()

const { data: allStaff, pending } = await useAsyncData('contacts-staff', () =>
  $fetch<StaffContact[]>(`${config.public.apiBaseUrl}/api/staff/?contacts=true`), {
  server: false,
})

const groupedStaff = computed<StaffGroup[]>(() => {
  const items = (allStaff.value ?? []).filter(member => !isPinnedHead(member))
  const groups: Record<string, StaffGroup> = {}

  for (const member of items) {
    const key = member.branch_name || '__none__'
    if (!groups[key]) {
      groups[key] = {
        branchId: key,
        branchName: member.branch_name || 'Без отдела',
        branchAddress: member.branch_address || '',
        members: [],
      }
    }
    groups[key].members.push(member)
  }

  return Object.values(groups)
})

function isPinnedHead(member: StaffContact) {
  return member.is_management_head === true
}

function groupMemberLabel(count: number) {
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) return 'сотрудник'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'сотрудника'
  return 'сотрудников'
}

function memberKey(member: StaffContact) {
  return `${member.surname}-${member.name}-${member.patronym}-${member.role}`
}
</script>
