<template>
  <section class="border-t border-default">
    <UContainer class="flex flex-col gap-10 py-16 lg:py-20">
      <div class="flex max-w-2xl flex-col gap-3">
        <UBadge
          label="Новости"
          color="primary"
          variant="subtle"
          class="w-fit rounded-full"
        />
        <h2
          id="news"
          class="text-3xl font-bold tracking-tight text-highlighted text-balance sm:text-4xl"
        >
          Как живёт команда
        </h2>
        <p class="text-pretty text-lg leading-8 text-muted">
          События и достижения — коротко о том, что происходит в администрации района прямо сейчас.
        </p>
      </div>

      <div
        v-if="posts?.length"
        class="grid gap-4 lg:grid-cols-12"
      >
        <article
          v-if="featured"
          class="group flex flex-col overflow-hidden rounded-2xl border border-default bg-default transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none lg:col-span-7"
        >
          <NuxtLink
            :to="postLink(featured)"
            class="flex flex-1 flex-col"
          >
            <div
              v-if="featured.imageUrl"
              class="aspect-16/10 overflow-hidden bg-elevated"
            >
              <img
                :src="featured.imageUrl"
                :alt="featured.title"
                class="size-full object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                loading="eager"
              >
            </div>

            <div class="flex flex-col gap-4 p-6 lg:p-8">
              <time
                v-if="featured.date"
                :datetime="featured.date"
                class="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {{ formatDate(featured.date) }}
              </time>

              <div class="flex flex-col gap-3">
                <h3 class="text-2xl font-semibold tracking-tight text-highlighted text-balance sm:text-3xl">
                  {{ featured.title }}
                </h3>
                <p
                  v-if="featured.description"
                  class="text-pretty text-base leading-7 text-muted line-clamp-3"
                >
                  {{ featured.description }}
                </p>
              </div>

              <span class="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Читать
                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-4 transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </NuxtLink>
        </article>

        <div
          v-if="rest.length"
          class="flex flex-col gap-4 lg:col-span-5"
        >
          <article
            v-for="post in rest"
            :key="post.id"
            class="group flex flex-1 flex-col rounded-2xl border border-default bg-default transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none"
          >
            <NuxtLink
              :to="postLink(post)"
              class="flex flex-1 flex-col gap-4 p-5 sm:flex-row sm:items-start"
            >
              <div
                v-if="post.imageUrl"
                class="aspect-video w-full shrink-0 overflow-hidden rounded-xl bg-elevated sm:w-28"
              >
                <img
                  :src="post.imageUrl"
                  :alt="post.title"
                  class="size-full object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  loading="lazy"
                >
              </div>

              <div class="flex min-w-0 flex-1 flex-col gap-3">
                <time
                  v-if="post.date"
                  :datetime="post.date"
                  class="text-xs font-medium text-muted"
                >
                  {{ formatDate(post.date) }}
                </time>

                <h3 class="font-semibold text-highlighted line-clamp-2">
                  {{ post.title }}
                </h3>

                <p
                  v-if="post.description"
                  class="text-sm leading-6 text-muted line-clamp-2"
                >
                  {{ post.description }}
                </p>

                <span class="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Читать
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-4 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>

      <div
        v-else
        class="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-default bg-elevated/40 px-6 py-14 text-center"
      >
        <UIcon
          name="i-lucide-newspaper"
          class="size-10 text-muted"
          aria-hidden="true"
        />
        <div class="flex flex-col gap-2">
          <p class="font-semibold text-highlighted">
            Новости скоро появятся
          </p>
          <p class="max-w-md text-sm text-muted text-pretty">
            Мы готовим материалы о мероприятиях и достижениях команды
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface NewsPost {
  id: number | string
  title: string
  description?: string
  date?: string
  imageUrl?: string
  url?: string
}

const props = defineProps<{
  posts?: NewsPost[] | null
}>()

const featured = computed(() => props.posts?.[0])
const rest = computed(() => props.posts?.slice(1, 3) ?? [])

function postLink(post: NewsPost) {
  return post.url ?? `/news/${post.id}`
}

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(value))
  } catch {
    return value
  }
}
</script>
