<script setup lang="ts">
const route = useRoute()
const year = route.params.year as string
const slug = route.params.slug as string

// Find the post by matching the filename pattern
const { data: post } = await useAsyncData(`post-${year}-${slug}`, async () => {
  const posts = await queryCollection('posts').all()
  return posts.find((p) => {
    const filename = p.stem?.split('/').pop() || ''
    const match = filename.match(/^(\d{4})-\d{2}-\d{2}-(.+)$/)
    return match && match[1] === year && match[2] === slug
  })
})

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

useHead({
  title: `${post.value.title} - Jonathan Pichot`,
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article v-if="post" class="prose dark:prose-dark max-w-none">
    <header class="mb-8">
      <h1 class="text-3xl font-bold mb-2">
        {{ post.title }}
      </h1>
      <time class="text-gray-500 dark:text-gray-400">
        {{ formatDate(post.date) }}
      </time>
    </header>

    <ContentRenderer :value="post" />
  </article>
</template>
