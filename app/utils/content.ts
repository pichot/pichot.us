// Shared helpers for turning @nuxt/content stems into route paths and
// mapping project categories to chip styling.

export function postPath(stem?: string): string {
  // stem is like "posts/2020-03-31-back-to-basics" → "/2020/back-to-basics/"
  const filename = stem?.split('/').pop() ?? ''
  const match = filename.match(/^(\d{4})-\d{2}-\d{2}-(.+)$/)
  return match ? `/${match[1]}/${match[2]}/` : `/${filename}/`
}

export function projectPath(stem?: string): string {
  return `/projects/${stem?.split('/').pop() ?? ''}/`
}

export const categoryChip: Record<string, string> = {
  talk: 'chip-talk',
  project: 'chip-project',
  org: 'chip-org',
  teaching: 'chip-teach',
  residency: 'chip-residency',
}

export const categoryLabel: Record<string, string> = {
  talk: 'Talk',
  project: 'Project',
  org: 'Org',
  teaching: 'Teaching',
  residency: 'Residency',
}
