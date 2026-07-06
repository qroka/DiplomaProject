<template>

  <DsContentSection

    :title="title"

    :description="subtitle"

    overline="Органы администрации"

    heading-id="admin-structure"

    spacing="lg"

  >

    <div

      v-if="pending"

      class="text-sm text-muted"

    >

      Загрузка структуры администрации…

    </div>



    <div

      v-else-if="deputies.length"

      class="grid gap-6 lg:grid-cols-[minmax(240px,280px)_minmax(0,1fr)] lg:gap-8"

    >

      <nav
        class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 lg:sticky lg:top-[calc(var(--ui-header-height,4rem)+3rem+1rem)] lg:self-start"
        aria-label="Заместители главы района"
      >

        <button

          v-for="(deputy, index) in deputies"

          :key="`${deputy.surname}-${deputy.name}`"

          type="button"

          class="group flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"

          :class="selectedIndex === index

            ? 'border-primary/40 bg-primary/5 ring-1 ring-primary/20'

            : 'border-default bg-elevated/30 hover:border-primary/20 hover:bg-elevated/60'"

          :aria-pressed="selectedIndex === index"

          @click="selectedIndex = index"

        >

          <img
            v-if="deputy.image"
            :src="deputy.image"
            :alt="deputyFullName(deputy)"
            class="size-12 shrink-0 rounded-full object-cover ring-2 ring-default"
            loading="lazy"
          >
          <div
            v-else
            class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-2 ring-default"
            aria-hidden="true"
          >
            {{ deputy.name.charAt(0) }}{{ deputy.surname.charAt(0) }}
          </div>



          <div class="min-w-0">

            <p

              class="text-xs font-medium leading-snug"

              :class="selectedIndex === index ? 'text-primary' : 'text-muted'"

            >

              {{ deputy.role }}

            </p>

            <p class="mt-1 text-sm font-semibold text-highlighted leading-snug">

              {{ deputyShortName(deputy) }}

            </p>

            <p class="mt-1 text-xs text-muted">

              {{ deputy.departmentSlugs.length }}

              {{ pluralOrgans(deputy.departmentSlugs.length) }}

            </p>

          </div>

        </button>

      </nav>



      <div class="min-w-0 space-y-5">

        <div class="flex items-start gap-4">

          <img
            v-if="selectedDeputy.image"
            :src="selectedDeputy.image"
            :alt="deputyFullName(selectedDeputy)"
            class="size-24 shrink-0 rounded-full object-cover ring-2 ring-default"
            loading="lazy"
          >
          <div
            v-else
            class="flex size-24 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary ring-2 ring-default"
            aria-hidden="true"
          >
            {{ selectedDeputy.name.charAt(0) }}{{ selectedDeputy.surname.charAt(0) }}
          </div>



          <div class="min-w-0 flex flex-1 flex-col gap-2">

            <UBadge

              :label="selectedDeputy.role"

              color="primary"

              variant="subtle"

              size="lg"

              class="w-fit rounded-full"

            />

            <h3 class="text-h3 text-text-primary text-balance">

              {{ deputyFullName(selectedDeputy) }}

            </h3>

            <p class="text-body text-text-secondary">

              Курирует {{ selectedDeputy.departmentSlugs.length }}

              {{ pluralOrgans(selectedDeputy.departmentSlugs.length) }} администрации

            </p>

          </div>

        </div>



        <div class="grid gap-3 sm:grid-cols-2">

          <NuxtLink

            v-for="slug in selectedDeputy.departmentSlugs"

            :key="slug"

            :to="`/about/departments/${slug}`"

            class="group block h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl"

          >

            <UCard

              variant="subtle"

              :ui="{

                root: 'h-full transition-all duration-200 group-hover:ring-1 group-hover:ring-primary/25 group-hover:bg-elevated/70',

                body: 'flex items-center gap-3 p-4',

              }"

            >

              <div

                class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-inverted"

                aria-hidden="true"

              >

                <UIcon

                  name="i-lucide-building-2"

                  class="size-5"

                />

              </div>



              <div class="min-w-0 flex-1">

                <p class="text-sm font-medium text-highlighted leading-snug text-pretty group-hover:text-primary transition-colors duration-200">

                  {{ departmentName(slug) }}

                </p>

              </div>



              <UIcon

                name="i-lucide-arrow-right"

                class="size-4 shrink-0 text-dimmed transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary"

                aria-hidden="true"

              />

            </UCard>

          </NuxtLink>

        </div>

      </div>

    </div>

  </DsContentSection>

</template>



<script setup lang="ts">

import type { Deputy } from '~/data/departments'



withDefaults(defineProps<{

  title?: string

  subtitle?: string

}>(), {

  title: 'Структура администрации',

  subtitle: 'Отраслевые (функциональные) органы по курирующим заместителям главы',

})



const selectedIndex = ref(0)

const { data: deputiesData, pending } = await useDeputiesList()

const { departmentName } = useDepartmentNameMap()



const deputies = computed(() => deputiesData.value ?? [])



const selectedDeputy = computed(() => deputies.value[selectedIndex.value]!)



watch(deputies, (items) => {

  if (selectedIndex.value >= items.length) {

    selectedIndex.value = 0

  }

})



function deputyFullName(deputy: Deputy) {

  return `${deputy.surname} ${deputy.name} ${deputy.patronymic}`

}



function deputyShortName(deputy: Deputy) {

  return `${deputy.surname} ${deputy.name.charAt(0)}.${deputy.patronymic.charAt(0)}.`

}



function pluralOrgans(count: number) {

  const mod10 = count % 10

  const mod100 = count % 100



  if (mod10 === 1 && mod100 !== 11) return 'орган'

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'органа'

  return 'органов'

}

</script>


