<template>
  <div>
    <DsSection
      spacing="lg"
      variant="brand"
    >
      <div class="max-w-3xl">
        <h1 class="text-display text-text-inverse text-balance">
          Дизайн-система v2
        </h1>
        <p class="text-body-lg text-text-inverse/80 mt-4 text-pretty">
          Тестовая страница примитивов ds/*. Используется для проверки токенов перед миграцией страниц.
        </p>
      </div>
    </DsSection>

    <DsSection spacing="md">
      <DsSectionHeading
        title="Типографика"
        description="Шкала PT Sans: display, h1-h3, body, caption"
        heading-id="typography"
      />

      <div class="grid gap-4">
        <p class="text-display text-text-primary">Display — 48px desktop</p>
        <p class="text-h1 text-text-primary">H1 — заголовок страницы</p>
        <p class="text-h2 text-text-accent">H2 — заголовок секции</p>
        <p class="text-h3 text-text-primary">H3 — подзаголовок карточки</p>
        <p class="text-body text-text-secondary">Body — основной текст портала кадровой политики.</p>
        <p class="text-caption text-text-muted">Caption — метаданные и даты</p>
      </div>
    </DsSection>

    <DsSection
      spacing="md"
      variant="muted"
    >
      <DsSectionHeading
        title="Поверхности"
        description="Непрозрачные карточки вместо glass по умолчанию"
        heading-id="surfaces"
      />

      <div class="grid-cards">
        <DsSurface
          elevation="xs"
          padding="lg"
        >
          <h3 class="text-h3 text-text-primary">Elevation xs</h3>
          <p class="text-body text-text-secondary mt-2">Тонкая тень для вложенных блоков.</p>
        </DsSurface>

        <DsSurface
          elevation="sm"
          padding="lg"
          interactive
        >
          <h3 class="text-h3 text-text-primary">Elevation sm + hover</h3>
          <p class="text-body text-text-secondary mt-2">Интерактивная карточка с подъёмом при наведении.</p>
        </DsSurface>

        <DsSurface
          elevation="md"
          padding="lg"
        >
          <h3 class="text-h3 text-text-primary">Elevation md</h3>
          <p class="text-body text-text-secondary mt-2">Акцентные блоки и модальные панели.</p>
        </DsSurface>
      </div>
    </DsSection>

    <DsSection spacing="md">
      <DsSectionDivider
        label="Разделитель с подписью"
        variant="brand"
      />

      <DsSectionHeading
        title="Кнопки (Nuxt UI)"
        description="Семантика primary / secondary / neutral"
        heading-id="buttons"
      >
        <template #action>
          <UButton
            color="primary"
            variant="outline"
            to="/vacancies"
            label="Вакансии"
          />
        </template>
      </DsSectionHeading>

      <div class="flex flex-wrap gap-3">
        <UButton
          color="primary"
          variant="solid"
          label="Primary"
        />
        <UButton
          color="primary"
          variant="outline"
          label="Secondary"
        />
        <UButton
          color="neutral"
          variant="outline"
          label="Neutral"
        />
        <UButton
          color="neutral"
          variant="ghost"
          label="Ghost"
        />
      </div>

      <DsSectionDivider
        spacing="lg"
      />
    </DsSection>

    <DsSection
      spacing="md"
      variant="muted"
    >
      <article class="ds-prose">
        <h2>Prose-блок</h2>
        <p>
          Длинный текстовый контент ограничен шириной 65 символов для комфортного чтения.
          Ссылки выделяются цветом акцента.
        </p>
        <p>
          <a href="/about">О кадровой политике</a> — пример ссылки внутри prose.
        </p>
      </article>
    </DsSection>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Дизайн-система v2',
  robots: 'noindex, nofollow',
})
</script>
