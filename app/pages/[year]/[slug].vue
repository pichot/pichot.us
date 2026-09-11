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
  <article v-if="post">
    <BackLink to="/writing" label="Writing" />

    <h1 class="mb-3 text-3xl font-semibold leading-snug tracking-tight text-balance">
      {{ post.title }}
    </h1>

    <p class="mb-10 font-mono text-xs tracking-wide text-subtle">
      {{ formatDate(post.date) }}
    </p>

    <div class="article">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
