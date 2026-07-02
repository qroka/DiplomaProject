<template>
  <UPopover :ui="{ content: 'p-4 w-80 max-w-[calc(100vw-2rem)]' }">
    <UButton
      icon="i-lucide-eye"
      :label="compact ? undefined : 'Для слабовидящих'"
      color="neutral"
      variant="ghost"
      size="lg"
      :aria-label="settings.enabled ? 'Настройки версии для слабовидящих (включена)' : 'Включить версию для слабовидящих'"
      :aria-pressed="settings.enabled"
    />

    <template #content>
      <div class="space-y-5" data-a11y-panel>
        <p class="text-sm font-semibold text-text-primary">
          Версия для слабовидящих
        </p>

        <div class="space-y-2">
          <p class="text-xs font-medium text-text-secondary">Цветовая схема</p>
          <div class="flex flex-wrap gap-2">
            <UButton
              size="lg"
              :variant="settings.colorScheme === 'default' ? 'solid' : 'outline'"
              label="Стандарт"
              @click="setColorScheme('default')"
            />
            <UButton
              size="lg"
              :variant="settings.colorScheme === 'bw' ? 'solid' : 'outline'"
              label="Ч/Б"
              @click="setColorScheme('bw')"
            />
            <UButton
              size="lg"
              :variant="settings.colorScheme === 'brown' ? 'solid' : 'outline'"
              label="Коричн."
              @click="setColorScheme('brown')"
            />
            <UButton
              size="lg"
              :variant="settings.colorScheme === 'blue' ? 'solid' : 'outline'"
              label="Синяя"
              @click="setColorScheme('blue')"
            />
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-xs font-medium text-text-secondary">Изображения</p>
          <div class="flex flex-wrap gap-2">
            <UButton
              size="lg"
              :variant="settings.imagesEnabled ? 'solid' : 'outline'"
              label="Вкл"
              @click="setImagesEnabled(true)"
            />
            <UButton
              size="lg"
              :variant="!settings.imagesEnabled ? 'solid' : 'outline'"
              label="Выкл"
              @click="setImagesEnabled(false)"
            />
          </div>
        </div>

        <UButton
          block
          size="lg"
          color="neutral"
          variant="soft"
          label="Сбросить настройки"
          @click="reset"
        />
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})

const {
  settings,
  setColorScheme,
  setImagesEnabled,
  reset,
} = useAccessibility()
</script>
