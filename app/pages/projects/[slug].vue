<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, async () => {
  const projects = await queryCollection('projects').all()
  return projects.find((p) => {
    const filename = p.stem?.split('/').pop() || ''
    return filename === slug
  })
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
  })
}

useHead({
  title: `${project.value.title} - Jonathan Pichot`,
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const categoryColors: Record<string, string> = {
  talk: 'bg-blue text-white',
  project: 'bg-green text-white',
  org: 'bg-orange text-white',
}
</script>

<template>
  <article v-if="project" class="prose dark:prose-dark max-w-none">
    <header class="mb-8">
      <div class="flex items-center gap-3 mb-2">
        <span
          v-if="project.category"
          class="text-xs px-2 py-1 rounded"
          :class="categoryColors[project.category] || 'bg-gray-200 text-gray-700'"
        >
          {{ project.category }}
        </span>
      </div>
      <h1 class="text-3xl font-bold mb-2">
        {{ project.title }}
      </h1>
      <p v-if="project.organization || project.event" class="text-gray-500 dark:text-gray-400">
        <span v-if="project.organization">{{ project.organization }}</span>
        <span v-if="project.organization && project.event"> &bull; </span>
        <span v-if="project.event">{{ project.event }}</span>
      </p>
      <time class="text-sm text-gray-400 dark:text-gray-500">
        {{ formatDate(project.date) }}
      </time>
    </header>

    <ContentRenderer :value="project" />
  </article>
</template>
