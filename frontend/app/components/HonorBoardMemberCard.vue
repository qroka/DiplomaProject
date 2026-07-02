<template>
  <UCard
    variant="subtle"
    class="group min-w-0"
    :ui="{
      root: 'overflow-hidden rounded-xl transition-colors duration-200 hover:ring-1 hover:ring-primary/20',
      body: 'p-0',
    }"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="relative min-h-52 lg:col-span-4 lg:min-h-60">
        <img
          v-if="member.image"
          :src="member.image"
          :alt="fullName"
          class="absolute inset-0 size-full object-cover object-top motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
          loading="lazy"
        >
        <div
          v-else
          class="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary/30"
        >
          <UIcon
            name="i-lucide-user"
            class="size-16"
            aria-hidden="true"
          />
        </div>

        <div
          class="absolute inset-0 bg-linear-to-t from-default/80 via-default/15 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-default/10 lg:to-default/50"
          aria-hidden="true"
        />
      </div>

      <div class="flex flex-col gap-4 p-5 sm:p-6 lg:col-span-8 lg:justify-center lg:gap-5 lg:p-8">
        <div class="flex items-center gap-2.5 text-primary">
          <UIcon
            name="i-lucide-award"
            class="size-5 shrink-0"
            aria-hidden="true"
          />
          <span class="text-overline uppercase tracking-wide text-primary">
            Лауреат доски почёта
          </span>
        </div>

        <p
          v-if="member.description"
          class="text-body-lg text-text-secondary leading-relaxed text-pretty"
        >
          {{ member.description }}
        </p>
        <p
          v-else
          class="text-body text-text-muted italic"
        >
          Благодарность за профессиональный вклад в развитие администрации Сургутского района.
        </p>

        <footer class="mt-auto border-t border-default pt-4">
          <p class="text-body font-semibold text-text-primary text-balance">
            {{ fullName }}
          </p>
          <p
            v-if="member.role"
            class="mt-1 text-body text-text-secondary text-pretty"
          >
            {{ member.role }}
          </p>
          <p
            v-if="member.branch_name"
            class="mt-1 text-caption text-text-muted text-pretty"
          >
            {{ member.branch_name }}
          </p>
        </footer>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
export interface HonorBoardMember {
  name?: string
  surname?: string
  patronym?: string
  role?: string
  description?: string
  image?: string | null
  branch_name?: string
}

const props = defineProps<{
  member: HonorBoardMember
}>()

const fullName = computed(() => {
  const parts = [props.member.surname, props.member.name, props.member.patronym]
    .filter(Boolean)
  return parts.join(' ') || 'Сотрудник'
})
</script>
