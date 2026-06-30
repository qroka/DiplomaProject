<template>
  <UPopover :ui="{ content: 'p-4 w-72' }">
    <UButton
      icon="i-lucide-eye"
      :label="compact ? undefined : 'Для слабовидящих'"
      color="neutral"
      variant="ghost"
      size="sm"
      :aria-label="settings.enabled ? 'Настройки версии для слабовидящих (включена)' : 'Включить версию для слабовидящих'"
      :aria-pressed="settings.enabled"
    />

    <template #content>
      <div class="space-y-4">
        <p class="text-sm font-semibold text-gray-900 dark:text-white">
          Версия для слабовидящих
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Масштабирование текста и контрастная схема (ГОСТ Р 52872-2024)
        </p>

        <div class="space-y-2">
          <p class="text-xs font-medium text-gray-700 dark:text-gray-300">Размер текста</p>
          <div class="flex flex-wrap gap-2">
            <UButton
              size="xs"
              :variant="settings.fontScale === 'normal' ? 'solid' : 'outline'"
              label="Обычный"
              @click="setFontScale('normal')"
            />
            <UButton
              size="xs"
              :variant="settings.fontScale === 'large' ? 'solid' : 'outline'"
              label="Крупный"
              @click="setFontScale('large')"
            />
            <UButton
              size="xs"
              :variant="settings.fontScale === 'xlarge' ? 'solid' : 'outline'"
              label="Очень крупный"
              @click="setFontScale('xlarge')"
            />
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-xs font-medium text-gray-700 dark:text-gray-300">Контраст</p>
          <div class="flex flex-wrap gap-2">
            <UButton
              size="xs"
              :variant="settings.contrast === 'default' ? 'solid' : 'outline'"
              label="Стандарт"
              @click="setContrast('default')"
            />
            <UButton
              size="xs"
              :variant="settings.contrast === 'high' ? 'solid' : 'outline'"
              label="Высокий"
              @click="setContrast('high')"
            />
            <UButton
              size="xs"
              :variant="settings.contrast === 'inverted' ? 'solid' : 'outline'"
              label="Инверсия"
              @click="setContrast('inverted')"
            />
          </div>
        </div>

        <UButton
          block
          size="sm"
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

const { settings, setFontScale, setContrast, reset } = useAccessibility()
</script>
