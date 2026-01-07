<script setup lang="ts">
useHead({
  title: 'Work & Projects - Jonathan Pichot',
})

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('date', 'DESC').all()
)

// Group projects by year
const projectsByYear = computed(() => {
  if (!projects.value) return []

  const grouped = projects.value.reduce((acc, project) => {
    const year = new Date(project.date).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(project)
    return acc
  }, {} as Record<string, typeof projects.value>)

  return Object.entries(grouped)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .map(([year, items]) => ({ year, items }))
})

function getProjectSlug(project: { stem?: string }) {
  const filename = project.stem?.split('/').pop() || ''
  return `/projects/${filename}/`
}

const categoryColors: Record<string, string> = {
  talk: 'bg-blue text-white',
  project: 'bg-green text-white',
  org: 'bg-orange text-white',
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">
      Work & Projects
    </h1>

    <ul class="space-y-8">
      <li v-for="group in projectsByYear" :key="group.year">
        <h2 class="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-4">
          {{ group.year }}
        </h2>
        <ul class="space-y-4">
          <li v-for="project in group.items" :key="project.stem">
            <div class="flex items-start gap-3">
              <span
                v-if="project.category"
                class="text-xs px-2 py-1 rounded shrink-0"
                :class="categoryColors[project.category] || 'bg-gray-200 text-gray-700'"
              >
                {{ project.category }}
              </span>
              <div>
                <NuxtLink
                  :to="getProjectSlug(project)"
                  class="text-blue dark:text-cyan hover:underline font-medium"
                >
                  {{ project.title }}
                </NuxtLink>
                <p v-if="project.organization" class="text-sm text-gray-500 dark:text-gray-400">
                  {{ project.organization }}
                  <span v-if="project.event"> &bull; {{ project.event }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
