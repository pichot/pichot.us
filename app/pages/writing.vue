<script setup lang="ts">
useHead({
  title: 'Writing - Jonathan Pichot',
})

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('date', 'DESC').all()
)

// Group posts by year
const postsByYear = computed(() => {
  if (!posts.value) return []

  const grouped = posts.value.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {} as Record<string, typeof posts.value>)

  return Object.entries(grouped)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .map(([year, items]) => ({ year, items }))
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

function getPostSlug(post: { stem?: string }) {
  // stem is like "posts/2020-03-31-back-to-basics"
  // we need to extract year and slug
  const filename = post.stem?.split('/').pop() || ''
  const match = filename.match(/^(\d{4})-\d{2}-\d{2}-(.+)$/)
  if (match) {
    return `/${match[1]}/${match[2]}/`
  }
  return `/${filename}/`
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">
      Writing
    </h1>

    <ul class="space-y-8">
      <li v-for="group in postsByYear" :key="group.year">
        <h2 class="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-4">
          {{ group.year }}
        </h2>
        <ul class="space-y-3">
          <li v-for="post in group.items" :key="post.stem" class="flex items-baseline gap-4">
            <span class="text-sm text-gray-400 dark:text-gray-500 w-16 shrink-0">
              {{ formatDate(post.date) }}
            </span>
            <NuxtLink
              :to="getPostSlug(post)"
              class="text-blue dark:text-cyan hover:underline"
            >
              {{ post.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
