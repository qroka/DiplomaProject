<template>
  <DsStandardPage
    :title="post?.title ?? 'Новость'"
    badge="Новости"
  >
    <DsContentSection
      v-if="pending"
      spacing="md"
    >
      <div class="mx-auto max-w-4xl space-y-4" aria-busy="true">
        <UCard variant="subtle" :ui="{ body: 'p-5 space-y-3' }">
          <USkeleton class="h-8 w-3/4" />
          <USkeleton class="h-5 w-full" />
          <USkeleton class="h-5 w-5/6" />
        </UCard>
        <UCard variant="subtle" :ui="{ body: 'p-5 space-y-3' }">
          <USkeleton class="h-5 w-full" />
          <USkeleton class="h-5 w-11/12" />
          <USkeleton class="h-5 w-4/5" />
        </UCard>
      </div>
    </DsContentSection>

    <DsContentSection
      v-else
      spacing="md"
    >
      <div class="mx-auto w-full max-w-5xl">
        <DsSurface
          elevation="none"
          padding="none"
          class="overflow-hidden rounded-3xl border border-default bg-default"
        >
          <div
            class="grid min-w-0 gap-0"
            :class="post?.imageUrl ? 'grid-cols-3' : 'grid-cols-1'"
          >
            <!-- Media (left) -->
            <div
              v-if="post?.imageUrl"
              class="relative col-span-1 min-w-0 border-r border-default bg-elevated"
            >
              <div class="aspect-video w-full">
                <img
                  :src="post.imageUrl"
                  :alt="post.title"
                  class="size-full object-cover"
                  loading="eager"
                >
              </div>

              <UBadge
                v-if="post?.date"
                color="primary"
                variant="subtle"
                size="lg"
                class="absolute left-4 top-4 rounded-full backdrop-blur supports-backdrop-filter:bg-default/80"
              >
                <time :datetime="post.date">
                  {{ formatDate(post.date) }}
                </time>
              </UBadge>
            </div>

            <!-- Content (right) -->
            <div
              class="min-w-0 p-5 sm:p-6 md:p-8"
              :class="post?.imageUrl ? 'col-span-2' : 'col-span-1'"
            >
              <div class="space-y-4">
                <article class="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <template v-if="contentParagraphs.length">
                    <p
                      v-for="(p, idx) in contentParagraphs"
                      :key="idx"
                    >
                      {{ p }}
                    </p>
                  </template>

                  <div v-else class="not-prose">
                    <div class="flex items-start gap-3 rounded-2xl border border-dashed border-default bg-elevated/40 p-4">
                      <UIcon name="i-lucide-file-text" class="mt-0.5 size-5 text-muted" aria-hidden="true" />
                      <div class="min-w-0">
                        <p class="font-semibold text-highlighted">Полный текст готовится</p>
                        <p class="mt-1 text-sm text-muted text-pretty">Мы опубликуем материал в ближайшее время.</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </DsSurface>
      </div>
    </DsContentSection>

    <DsContentSection
      v-if="relatedPosts.length"
      title="Ещё новости"
      description="Другие события и материалы"
      overline="Также интересно"
      spacing="lg"
    >
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
    </DsContentSection>
  </DsStandardPage>
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
  title: post.value?.title ? post.value.title : 'Новость',
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

