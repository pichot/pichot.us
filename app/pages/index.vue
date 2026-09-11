<script setup lang="ts">
useHead({
  title: 'Jonathan Pichot',
})

const roles = [
  { org: 'Helpful Places', title: 'Product lead & EU market lead', url: 'https://helpfulplaces.com' },
  { org: 'Urban Archive', title: 'Product engineer', url: 'https://www.urbanarchive.org' },
  { org: 'Gehl', title: 'Technical lead, occasionally', url: 'https://gehlpeople.com' },
]

const { data: works } = await useAsyncData('works', () =>
  queryCollection('projects').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <h1 class="mb-4 text-3xl font-bold leading-tight tracking-tight">
      Jonathan Pichot
    </h1>

    <p class="mb-12 text-muted">
      Passionate urbanist, skeptical technologist
    </p>

    <section class="mb-12 rounded border border-edge bg-surface px-5 py-4">
      <h2 class="mb-2 font-mono text-xs uppercase tracking-widest text-subtle">
        Currently
      </h2>
      <p class="mb-3 text-base text-muted">
        I contract through Urbancodes, my own company, for:
      </p>
      <ul class="work">
        <li v-for="role in roles" :key="role.org" class="!mb-1">
          <span class="work-text">
            <a :href="role.url" target="_blank" rel="noopener noreferrer" class="work-name">{{ role.org }}</a>
            <span class="work-desc ml-1.5 inline">{{ role.title }}</span>
          </span>
        </li>
      </ul>
    </section>

    <ul class="work mb-12">
      <li v-for="work in works" :key="work.stem">
        <span class="work-text">
          <NuxtLink :to="projectPath(work.stem)" class="work-name">
            {{ work.title }}
          </NuxtLink>
          <span v-if="work.event || work.description" class="work-desc">
            {{ work.event || work.description }}
          </span>
        </span>
        <span
          v-if="work.category"
          class="chip"
          :class="categoryChip[work.category]"
        >
          {{ categoryLabel[work.category] ?? work.category }}
        </span>
      </li>
    </ul>

    <nav class="flex flex-wrap gap-5">
      <NuxtLink to="/about" class="link-mono">About</NuxtLink>
      <NuxtLink to="/writing" class="link-mono">Writing</NuxtLink>
      <a
        href="https://bsky.app/profile/pichot.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
        class="link-mono"
      >Bluesky</a>
      <a
        href="https://www.linkedin.com/in/jonathanpichot/"
        target="_blank"
        rel="noopener noreferrer"
        class="link-mono"
      >LinkedIn</a>
      <a
        href="https://github.com/pichot"
        target="_blank"
        rel="noopener noreferrer"
        class="link-mono"
      >GitHub</a>
      <a href="mailto:jonathan@pichot.us" class="link-mono">Email</a>
    </nav>
  </div>
</template>
