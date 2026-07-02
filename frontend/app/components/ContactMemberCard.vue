<template>
  <UCard
    variant="subtle"
    :ui="{
      root: 'h-full min-w-0 transition-colors duration-200',
      body: 'flex h-full flex-col gap-4 p-5',
    }"
  >
    <div class="min-w-0 space-y-2">
      <h3 class="text-h3 text-text-primary text-balance">
        {{ fullName }}
      </h3>
      <StaffRoleLabel :role="member.role" />
    </div>

    <ul class="mt-auto space-y-3">
      <li
        v-if="member.phone"
        class="flex items-start gap-3 text-body text-text-secondary"
      >
        <UIcon
          name="i-lucide-phone"
          class="size-4 shrink-0 text-primary mt-0.5"
          aria-hidden="true"
        />
        <a
          v-if="phoneHref"
          :href="phoneHref"
          class="text-primary hover:underline transition-colors duration-200"
        >
          {{ member.phone }}
        </a>
        <span v-else>{{ member.phone }}</span>
      </li>

      <li
        v-if="member.email"
        class="flex items-start gap-3 text-body text-text-secondary"
      >
        <UIcon
          name="i-lucide-mail"
          class="size-4 shrink-0 text-primary mt-0.5"
          aria-hidden="true"
        />
        <a
          :href="`mailto:${member.email}`"
          class="text-primary hover:underline break-all transition-colors duration-200"
        >
          {{ member.email }}
        </a>
      </li>

      <li
        v-if="member.cabinet_number"
        class="flex items-start gap-3 text-body text-text-secondary"
      >
        <UIcon
          name="i-lucide-door-open"
          class="size-4 shrink-0 text-primary mt-0.5"
          aria-hidden="true"
        />
        <span>Кабинет {{ member.cabinet_number }}</span>
      </li>
    </ul>
  </UCard>
</template>

<script setup lang="ts">
export interface StaffContact {
  name?: string
  surname?: string
  patronym?: string
  role?: string
  phone?: string
  email?: string
  cabinet_number?: string
  branch_name?: string
  branch_address?: string
  is_management_head?: boolean
}

const props = defineProps<{
  member: StaffContact
}>()

const fullName = computed(() => {
  const parts = [props.member.surname, props.member.name, props.member.patronym]
    .filter(Boolean)
  return parts.join(' ') || 'Сотрудник'
})

const phoneHref = computed(() => {
  const digits = (props.member.phone ?? '').replace(/[^\d+]/g, '')
  return digits ? `tel:${digits}` : undefined
})
</script>
