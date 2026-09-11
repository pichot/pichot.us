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
  })
}

const byline = computed(() =>
  [project.value?.organization, formatDate(project.value!.date)]
    .filter(Boolean)
    .join(' · ')
)
</script>

<template>
  <article v-if="project">
    <BackLink />

    <div v-if="project.category" class="mb-3">
      <span class="chip" :class="categoryChip[project.category]">
        {{ categoryLabel[project.category] ?? project.category }}
      </span>
    </div>

    <h1 class="mb-2 text-3xl font-semibold leading-snug tracking-tight text-balance">
      {{ project.title }}
    </h1>

    <p v-if="project.event || project.description" class="mb-3 text-muted">
      {{ project.event || project.description }}
    </p>

    <p class="mb-10 font-mono text-xs tracking-wide text-subtle">
      {{ byline }}
    </p>

    <div class="article">
      <ContentRenderer :value="project" />
    </div>
  </article>
</template>
