<template>
  <section class="border-t border-default bg-elevated/40">
    <UContainer class="flex flex-col gap-8 py-16 lg:py-20">
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
        v-if="displayPosts.length"
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="(post, index) in displayPosts"
          :key="post.id"
          class="group"
        >
          <NuxtLink
            :to="postLink(post)"
            class="flex h-full flex-col overflow-hidden rounded-2xl border border-default bg-default transition hover:border-primary/40 hover:bg-elevated motion-reduce:transition-none"
          >
            <div
              v-if="post.imageUrl"
              class="aspect-3/2 overflow-hidden bg-elevated"
            >
              <img
                :src="post.imageUrl"
                :alt="post.title"
                class="size-full object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                :loading="index === 0 ? 'eager' : 'lazy'"
              >
            </div>

            <div class="flex flex-1 flex-col gap-2 p-4">
              <time
                v-if="post.date"
                :datetime="post.date"
                class="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {{ formatDate(post.date) }}
              </time>

              <h3 class="text-base font-semibold leading-snug text-highlighted line-clamp-2 group-hover:text-primary">
                {{ post.title }}
              </h3>

              <p
                v-if="post.description"
                class="text-sm leading-5 text-muted line-clamp-2"
              >
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </article>
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

const displayPosts = computed(() => props.posts?.slice(0, 3) ?? [])

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
