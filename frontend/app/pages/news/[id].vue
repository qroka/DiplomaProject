<template>
  <div class="bg-default">
    <article>
      <header class="border-b border-default">
        <UContainer class="flex flex-col gap-6 py-10 lg:gap-8 lg:py-14">
          <div
            v-if="pending"
            class="mx-auto w-full max-w-3xl space-y-4"
            aria-busy="true"
            aria-label="Загрузка новости"
          >
            <USkeleton class="h-6 w-28 rounded-full" />
            <USkeleton class="h-12 w-full" />
            <USkeleton class="h-12 w-5/6" />
            <USkeleton class="h-20 w-full" />
          </div>

          <template v-else-if="post">
            <div class="mx-auto flex w-full max-w-3xl flex-col items-start gap-4">
              <UBadge
                v-if="post.date"
                color="primary"
                variant="subtle"
                size="lg"
                class="rounded-full"
              >
                <time :datetime="post.date">
                  {{ formatDate(post.date) }}
                </time>
              </UBadge>

              <h1 class="text-balance text-3xl font-bold tracking-tight text-highlighted sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                {{ post.title }}
              </h1>

              <p
                v-if="post.description"
                class="max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl sm:leading-9"
              >
                {{ post.description }}
              </p>
            </div>

            <figure
              v-if="post.imageUrl"
              class="mx-auto mt-2 w-full max-w-5xl overflow-hidden rounded-3xl border border-default bg-elevated shadow-sm"
            >
              <img
                :src="post.imageUrl"
                :alt="post.title"
                width="1280"
                height="720"
                loading="eager"
                class="aspect-video w-full object-cover"
              >
            </figure>
          </template>
        </UContainer>
      </header>

      <UContainer class="py-10 lg:py-14">
        <div
          v-if="pending"
          class="mx-auto max-w-2xl space-y-3"
          aria-hidden="true"
        >
          <USkeleton class="h-5 w-full" />
          <USkeleton class="h-5 w-full" />
          <USkeleton class="h-5 w-11/12" />
          <USkeleton class="h-5 w-4/5" />
        </div>

        <div
          v-else
          class="mx-auto max-w-2xl"
        >
          <div
            v-if="contentParagraphs.length"
            class="space-y-5 border-s-2 border-primary/25 ps-5 sm:ps-6"
          >
            <p
              v-for="(paragraph, index) in contentParagraphs"
              :key="index"
              class="text-pretty text-base leading-8 text-text-secondary sm:text-lg sm:leading-8"
              :class="index === 0 ? 'text-lg text-highlighted sm:text-xl' : undefined"
            >
              {{ paragraph }}
            </p>
          </div>

          <DsEmptyState
            v-else
            icon="i-lucide-file-text"
            title="Полный текст готовится"
            description="Мы опубликуем материал в ближайшее время."
          />
        </div>
      </UContainer>
    </article>

    <section
      v-if="!pending && relatedPosts.length"
      class="border-t border-default bg-elevated/40"
    >
      <UContainer class="flex flex-col gap-8 py-16 lg:py-20">
        <div class="flex max-w-2xl flex-col gap-3">
          <UBadge
            label="Также интересно"
            color="primary"
            variant="subtle"
            size="lg"
            class="w-fit rounded-full"
          />
          <h2
            id="news-related"
            class="text-3xl font-bold tracking-tight text-highlighted text-balance sm:text-4xl"
          >
            Ещё новости
          </h2>
          <p class="text-pretty text-lg leading-8 text-muted">
            Другие события и материалы
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(item, index) in relatedPosts"
            :key="item.id"
            class="group"
          >
            <NuxtLink
              :to="`/news/${item.id}`"
              class="flex h-full flex-col overflow-hidden rounded-2xl border border-default bg-default transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none"
            >
              <div
                v-if="item.imageUrl"
                class="aspect-3/2 overflow-hidden bg-elevated"
              >
                <img
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="size-full object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                >
              </div>

              <div class="flex flex-1 flex-col gap-2 p-4">
                <UBadge
                  v-if="item.date"
                  color="primary"
                  variant="subtle"
                  size="lg"
                  class="w-fit rounded-full"
                >
                  <time :datetime="item.date">
                    {{ formatDate(item.date) }}
                  </time>
                </UBadge>

                <h3 class="text-base font-semibold leading-snug text-highlighted line-clamp-2 group-hover:text-primary">
                  {{ item.title }}
                </h3>

                <p
                  v-if="item.description"
                  class="text-sm leading-5 text-muted line-clamp-2"
                >
                  {{ item.description }}
                </p>
              </div>
            </NuxtLink>
          </article>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
interface NewsPost {
  id: number | string
  title: string
  description?: string
  content?: string
  date?: string
  imageUrl?: string
}

const config = useRuntimeConfig()
const route = useRoute()

const postId = computed(() => String(route.params.id ?? ''))

const { data: post, pending } = await useAsyncData(
  () => `news-post-${postId.value}`,
  () => $fetch<NewsPost>(`${config.public.apiBaseUrl}/api/news/${postId.value}/`),
  { server: false },
)

useHead(() => ({
  title: post.value?.title ?? 'Новость',
  meta: post.value?.description
    ? [{ name: 'description', content: post.value.description }]
    : [],
}))

const { data: list } = await useAsyncData(
  'news-posts-related',
  () => $fetch<NewsPost[]>(`${config.public.apiBaseUrl}/api/news/`),
  { server: false },
)

const relatedPosts = computed(() =>
  (list.value ?? [])
    .filter(item => String(item.id) !== postId.value)
    .slice(0, 3),
)

const contentParagraphs = computed(() => {
  const raw = post.value?.content?.trim()
  if (!raw) return []
  return raw
    .split(/\n{2,}/g)
    .map(p => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
})

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
