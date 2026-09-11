<script setup lang="ts">
useHead({
  title: 'Writing - Jonathan Pichot',
})

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('date', 'DESC').all()
)

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}
</script>

<template>
  <div>
    <BackLink />

    <h1 class="mb-8 text-2xl font-bold leading-tight tracking-tight">
      Writing
    </h1>

    <ul class="list-none">
      <li
        v-for="post in posts"
        :key="post.stem"
        class="mb-6 border-b border-edge pb-6 last:mb-0 last:border-b-0 last:pb-0"
      >
        <h2 class="mb-1 font-medium leading-snug">
          <a
            v-if="post.externalUrl"
            :href="post.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link-serif"
          >{{ post.title }} &nearr;</a>
          <NuxtLink v-else :to="postPath(post.stem)" class="link-serif">
            {{ post.title }}
          </NuxtLink>
        </h2>
        <p v-if="post.description" class="mb-2 line-clamp-2 text-sm text-subtle">
          {{ post.description }}
        </p>
        <p class="font-mono text-xs tracking-wide text-subtle">
          {{ formatDate(post.date) }}
        </p>
      </li>
    </ul>
  </div>
</template>
