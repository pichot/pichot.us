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

const RECENT = 10
const route = useRoute()
const router = useRouter()
const showAll = ref(false)

// Filter lives in the URL (?type=talk) so a filtered view can be shared
const filter = computed(() => route.query.type as string | undefined)
const categories = computed(() =>
  Object.keys(categoryLabel).filter(c => works.value?.some(w => w.category === c))
)
const filtered = computed(() =>
  (works.value ?? []).filter(w => !filter.value || w.category === filter.value)
)
// A filtered list is short enough to show whole; the full list starts at the most recent
const canExpand = computed(() => !filter.value && filtered.value.length > RECENT)
const visible = computed(() =>
  canExpand.value && !showAll.value ? filtered.value.slice(0, RECENT) : filtered.value
)

function setFilter(type?: string) {
  router.replace({ query: type ? { type } : {} })
}
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

    <div class="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter by type">
      <button
        type="button"
        class="chip chip-all"
        :class="{ 'chip-off': filter }"
        :aria-pressed="!filter"
        @click="setFilter()"
      >
        All
      </button>
      <button
        v-for="c in categories"
        :key="c"
        type="button"
        class="chip"
        :class="[categoryChip[c], { 'chip-off': filter !== c }]"
        :aria-pressed="filter === c"
        @click="setFilter(filter === c ? undefined : c)"
      >
        {{ categoryLabel[c] }}
      </button>
    </div>

    <ul class="work" :class="canExpand ? 'mb-4' : 'mb-12'">
      <li v-for="work in visible" :key="work.stem">
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

    <button
      v-if="canExpand"
      type="button"
      class="link-mono mb-12"
      :aria-expanded="showAll"
      @click="showAll = !showAll"
    >
      {{ showAll ? 'Show recent only' : `Show all ${filtered.length}` }}
    </button>

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
