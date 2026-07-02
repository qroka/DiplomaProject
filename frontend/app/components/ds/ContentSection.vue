<template>
  <section
    :class="spacing === 'lg' ? 'space-y-6' : 'space-y-4'"
    :aria-labelledby="headingId || undefined"
  >
    <DsSectionHeading
      v-if="title"
      :title="title"
      :description="description"
      :overline="overline"
      :heading-id="headingId"
    >
      <template
        v-if="$slots.action"
        #action
      >
        <slot name="action" />
      </template>
    </DsSectionHeading>
    <slot />
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  description?: string
  overline?: string
  headingId?: string
  spacing?: 'md' | 'lg'
}>(), {
  title: undefined,
  description: undefined,
  overline: undefined,
  headingId: undefined,
  spacing: 'md',
})

if (props.headingId && props.title) {
  useStandardPageTocRegister({
    id: props.headingId,
    label: props.title,
  })
}
</script>
