<template>
  <div class="ds-container pb-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <div
        class="flex flex-wrap gap-3"
        role="group"
        :aria-label="ariaLabel"
      >
        <DropdownFilters
          v-for="filter in filterDefs"
          :key="filter.field"
          :ref="(el) => setFilterRef(filter.field, el)"
          :field="filter.field"
          :label="filter.label"
          :model-value="activeFilters[filter.field]?.value ?? null"
          @update:model-value="(payload) => onFilterUpdate(filter.field, payload)"
        />
      </div>

      <div class="flex items-center gap-3 sm:ml-auto">
        <p
          class="text-caption text-text-secondary"
          aria-live="polite"
          aria-atomic="true"
        >
          Найдено: <span class="font-semibold text-text-primary">{{ total }}</span>
        </p>
        <UButton
          v-if="hasActiveFilters"
          label="Сбросить всё"
          color="error"
          variant="outline"
          size="lg"
          aria-label="Сбросить все фильтры"
          @click="resetAll"
        />
      </div>
    </div>

    <div
      v-if="activeChips.length"
      class="flex flex-wrap gap-2 mt-4"
      role="list"
      aria-label="Активные фильтры"
    >
      <UBadge
        v-for="chip in activeChips"
        :key="chip.field"
        color="neutral"
        variant="subtle"
        size="lg"
        role="listitem"
        class="cursor-pointer gap-1 min-h-9 px-3"
        :aria-label="`Убрать фильтр: ${chip.label}`"
        @click="clearFilter(chip.field)"
      >
        {{ chip.label }}
        <UIcon
          name="i-lucide-x"
          class="h-3.5 w-3.5"
          aria-hidden="true"
        />
      </UBadge>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
interface FilterDef {
  field: string
  label: string
}

interface FilterValue {
  value: number | string | null
  label: string | null
}

const props = withDefaults(defineProps<{
  filterDefs: FilterDef[]
  total: number
  ariaLabel?: string
}>(), {
  ariaLabel: 'Фильтры вакансий',
})

const emit = defineEmits<{
  change: [filters: Record<string, number | string | null>]
  reset: []
}>()

const activeFilters = reactive<Record<string, FilterValue>>({})
const filterRefs = ref<Record<string, { reset: () => void } | null>>({})

function setFilterRef(field: string, el: unknown) {
  if (el && typeof el === 'object' && 'reset' in el) {
    filterRefs.value[field] = el as { reset: () => void }
  }
}

function onFilterUpdate(field: string, payload: { value: number | null, label: string | null }) {
  if (payload.value == null) {
    delete activeFilters[field]
  } else {
    activeFilters[field] = payload
  }
  emitChange()
}

function emitChange() {
  const result: Record<string, number | string | null> = {}
  for (const [field, data] of Object.entries(activeFilters)) {
    result[field] = data.value
  }
  emit('change', result)
}

const activeChips = computed(() =>
  Object.entries(activeFilters)
    .filter(([, data]) => data.label)
    .map(([field, data]) => ({ field, label: data.label as string }))
)

const hasActiveFilters = computed(() => activeChips.value.length > 0)

function clearFilter(field: string) {
  delete activeFilters[field]
  filterRefs.value[field]?.reset()
  emitChange()
}

function resetAll() {
  for (const field of Object.keys(activeFilters)) {
    filterRefs.value[field]?.reset()
  }
  for (const key of Object.keys(activeFilters)) {
    delete activeFilters[key]
  }
  emit('change', {})
  emit('reset')
}
</script>
