<script setup lang="ts">
useHead({
  title: 'Projects & Talks - Jonathan Pichot',
})

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <BackLink />

    <h1 class="mb-8 text-2xl font-bold leading-tight tracking-tight">
      Projects &amp; Talks
    </h1>

    <ul class="work">
      <li v-for="project in projects" :key="project.stem">
        <span class="work-text">
          <NuxtLink :to="projectPath(project.stem)" class="work-name">
            {{ project.title }}
          </NuxtLink>
          <span v-if="project.event || project.description" class="work-desc">
            {{ project.event || project.description }}
          </span>
        </span>
        <span
          v-if="project.category"
          class="chip"
          :class="categoryChip[project.category]"
        >
          {{ categoryLabel[project.category] ?? project.category }}
        </span>
      </li>
    </ul>
  </div>
</template>
