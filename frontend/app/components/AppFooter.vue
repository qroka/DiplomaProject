<script setup lang="ts">
import {
  careerNavGroup,
  footerLegalLinks,
  footerResourceLinks,
  footerCareerLinks,
  siteContact,
  socialLinks,
  teamNavGroup,
} from '~/data/navigation'

const currentYear = new Date().getFullYear()
const teamLinks = teamNavGroup.items

function isExternal(url: string) {
  return url.startsWith('http')
}
</script>

<template>
  <footer class="border-t border-default bg-default">
    <UContainer class="py-12 lg:py-16">
      <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div class="flex flex-col gap-5 lg:col-span-4">
          <NuxtLink
            to="/"
            class="flex items-center gap-2.5 rounded-md"
            aria-label="На главную — Кадровый портал Администрации Сургутского района"
          >
            <AppLogo :size="28" />
            <div class="flex min-w-0 flex-col">
              <span class="font-semibold text-highlighted">
                {{ siteContact.portalName }}
              </span>
              <span class="text-xs text-muted">
                {{ siteContact.organization }}
              </span>
            </div>
          </NuxtLink>

          <p class="max-w-sm text-sm leading-6 text-muted text-pretty">
            Официальный портал о карьере, вакансиях и развитии сотрудников администрации Сургутского района.
          </p>

          <div class="flex flex-wrap gap-2.5">
            <NuxtLink
              v-for="social in socialLinks"
              :key="social.label"
              :to="social.to"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="inline-flex size-10 items-center justify-center rounded-xl bg-elevated text-muted transition hover:bg-primary/10 hover:text-primary motion-reduce:transition-none"
            >
              <span
                v-if="social.image"
                class="size-5 bg-current mask-[url('/Icons/max.svg')] mask-contain mask-center mask-no-repeat"
                aria-hidden="true"
              />
              <UIcon
                v-else
                :name="social.icon"
                class="size-5"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:col-span-5">
          <div class="flex flex-col gap-3">
            <h2 class="text-sm font-semibold text-highlighted">
              {{ teamNavGroup.label }}
            </h2>
            <ul class="flex flex-col gap-2">
              <li
                v-for="item in teamLinks"
                :key="item.to"
              >
                <NuxtLink
                  :to="item.to"
                  class="text-sm text-muted transition hover:text-primary motion-reduce:transition-none"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-3">
            <h2 class="text-sm font-semibold text-highlighted">
              {{ careerNavGroup.label }}
            </h2>
            <ul class="flex flex-col gap-2">
              <li
                v-for="item in footerCareerLinks"
                :key="item.to"
              >
                <NuxtLink
                  :to="item.to"
                  class="text-sm text-muted transition hover:text-primary motion-reduce:transition-none"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-3">
          <h2 class="text-sm font-semibold text-highlighted">
            Контакты
          </h2>

          <ul class="flex flex-col gap-3 text-sm text-muted">
            <li class="flex gap-3">
              <UIcon
                name="i-lucide-map-pin"
                class="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span class="text-pretty leading-6">
                {{ siteContact.address }}
              </span>
            </li>
            <li class="flex gap-3">
              <UIcon
                name="i-lucide-phone"
                class="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <a
                :href="siteContact.phoneHref"
                class="transition hover:text-primary motion-reduce:transition-none"
              >
                {{ siteContact.phone }}
              </a>
            </li>
            <li class="flex gap-3">
              <UIcon
                name="i-lucide-mail"
                class="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <a
                :href="`mailto:${siteContact.email}`"
                class="transition hover:text-primary motion-reduce:transition-none"
              >
                {{ siteContact.email }}
              </a>
            </li>
            <li class="flex gap-3">
              <UIcon
                name="i-lucide-clock"
                class="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>{{ siteContact.hours }}</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 pt-1">
            <UButton
              to="/contacts"
              label="Все контакты"
              icon="i-lucide-phone"
              color="neutral"
              variant="soft"
              size="md"
              class="rounded-full"
            />
            <UButton
              to="/feedback"
              label="Обратная связь"
              icon="i-lucide-message-square"
              color="primary"
              variant="soft"
              size="md"
              class="rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-default pt-8">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-xs font-medium uppercase tracking-wide text-muted">
              Полезные ресурсы
            </p>
            <ul class="flex flex-wrap gap-x-5 gap-y-2">
              <li
                v-for="item in footerResourceLinks"
                :key="item.to"
              >
                <NuxtLink
                  :to="item.to"
                  :target="isExternal(item.to) ? '_blank' : undefined"
                  :rel="isExternal(item.to) ? 'noopener noreferrer' : undefined"
                  class="text-sm text-muted transition hover:text-primary motion-reduce:transition-none"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UContainer>

    <div class="border-t border-default bg-elevated/30">
      <UContainer class="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-muted">
          © {{ currentYear }} {{ siteContact.organization }}
        </p>

        <ul class="flex flex-wrap gap-x-5 gap-y-2">
          <li
            v-for="item in footerLegalLinks"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="text-sm text-muted transition hover:text-primary motion-reduce:transition-none"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </UContainer>
    </div>
  </footer>
</template>
