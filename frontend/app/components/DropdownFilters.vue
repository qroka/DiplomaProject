<template>
  <UDropdownMenu
    :items="menuItems"
    :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width)' }"
    @update:open="isOpen = $event"
  >
    <UButton
      :label="displayLabel"
      :trailing-icon="isOpen ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
      color="neutral"
      variant="outline"
      :aria-expanded="isOpen"
    />
  </UDropdownMenu>
</template>

<script setup lang="ts">
interface FilterOption {
  id: number
  name: string
}

const props = defineProps({
  field: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Number,
    default: null,
  },
})

const emit = defineEmits<{
  change: [{ field: string, value: number | null, label: string | null }]
  'update:modelValue': [{ value: number | null, label: string | null }]
}>()

const config = useRuntimeConfig()
const isOpen = ref(false)
const selectedItem = ref<FilterOption | null>(null)

const { data: filterOptions } = await useAsyncData(
  `filters-${props.field}`,
  () => $fetch<FilterOption[]>(`${config.public.apiBaseUrl}/api/vacancy-filters/${props.field}/`),
  { server: false }
)

watch(() => props.modelValue, (val) => {
  if (val == null) {
    selectedItem.value = null
    return
  }
  const match = (filterOptions.value ?? []).find(o => o.id === val)
  if (match) selectedItem.value = match
}, { immediate: true })

const displayLabel = computed(() => selectedItem.value?.name || props.label || props.field)

function selectOption(option: FilterOption | null) {
  selectedItem.value = option
  const value = option?.id ?? null
  const label = option?.name ?? null
  emit('update:modelValue', { value, label })
  emit('change', { field: props.field, value, label })
}

const menuItems = computed(() => {
  const items = [
    {
      label: 'Все',
      onSelect: () => selectOption(null),
    },
  ]

  for (const option of (filterOptions.value ?? [])) {
    items.push({
      label: option.name,
      icon: selectedItem.value?.id === option.id ? 'i-lucide-check' : undefined,
      onSelect: () => selectOption(option),
    })
  }

  return [items]
})

function reset() {
  selectOption(null)
}

defineExpose({ reset })
</script>
