# Design: Jekyll to Nuxt Migration

## Context
Migrating pichot.us from Jekyll (static Ruby site generator) to Nuxt 4 (Vue 3 framework). The site has been running on Jekyll since ~2021 and needs modernization for better deployment options and developer experience.

## Goals / Non-Goals

**Goals:**
- Preserve existing visual design and UX
- Maintain URL structure for SEO
- Enable Cloudflare Workers deployment
- Support markdown content with Vue component embeds
- Keep content authoring simple (markdown files)

**Non-Goals:**
- Complete visual redesign (keep existing look)
- Complex CMS or admin interface
- Analytics integration (defer to later)
- RSS feed (not migrating atom.xml)

## Decisions

### Content Structure
**Decision:** Use Nuxt Content v3 collections with separate directories for posts and projects.

```
content/
├── posts/           # Blog posts (date-prefixed filenames)
│   └── 2020-03-31-back-to-basics.md
├── projects/        # Projects/talks
│   └── plantech-case-of-nyc-planning-labs.md
└── index.md         # Can be removed (use Vue page instead)
```

**Rationale:** Nuxt Content v3 collections provide type-safe querying and better organization than a flat structure.

### URL Routing Strategy
**Decision:** Use `[year]/[slug].vue` dynamic route for posts to preserve `/:year/:title/` URLs.

**Alternatives considered:**
- Catch-all route: More flexible but harder to type
- Flat URLs: Simpler but breaks existing links

### Styling Approach
**Decision:** Use Tailwind CSS 4 for styling, referencing Jekyll's SCSS for design values.

**Approach:**
1. Extract design tokens from Jekyll SCSS (colors, spacing, typography)
2. Configure Tailwind theme with these values
3. Rebuild styles using Tailwind utility classes
4. Use `@apply` sparingly for complex repeated patterns

**Rationale:** Tailwind provides a modern, maintainable approach. While it requires rebuilding styles rather than porting, it results in a more consistent and easier-to-maintain codebase.

### Dark Mode
**Decision:** Implement dark mode using Tailwind's `class` strategy with system preference detection.

**Approach:**
1. Configure Tailwind with `darkMode: 'class'`
2. Add toggle component in header
3. Persist preference in localStorage
4. Default to system preference (`prefers-color-scheme`)
5. Apply `dark:` variants throughout components

**Color strategy:** Invert the existing light theme - dark background with light text, adjusted link colors for accessibility.

### Embed Components
**Decision:** Create Vue components that can be used in markdown via MDC syntax.

Jekyll:
```liquid
{% include embed_vimeo.html id="360018527" %}
```

Nuxt Content (MDC):
```markdown
::embed-vimeo{id="360018527"}
::
```

### Layout Architecture
```
app/
├── layouts/
│   └── default.vue    # Shell with header/footer
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── IntroSection.vue
│   ├── PostList.vue
│   ├── ProjectList.vue
│   └── content/       # MDC components
│       ├── EmbedVimeo.vue
│       ├── EmbedYouTube.vue
│       └── EmbedGoogleSlides.vue
└── pages/
    ├── index.vue
    ├── writing.vue
    ├── projects.vue
    └── [year]/
        └── [slug].vue
```

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| URL changes break SEO | Test all URLs, add redirects if needed |
| Style regression | Side-by-side comparison during dev |
| Embed compatibility | Test each embed type thoroughly |
| Build size increase | Monitor bundle, use static generation |

## Migration Plan

1. **Phase 1 - Foundation**: Set up layouts, styles, header/footer
2. **Phase 2 - Homepage**: Migrate intro section
3. **Phase 3 - Content**: Migrate posts and projects
4. **Phase 4 - Listings**: Build writing and projects pages
5. **Phase 5 - Polish**: Embeds, 404, final testing

**Rollback:** Keep Jekyll site in `jekyll/` directory until fully verified.

## Open Questions

- [ ] Analytics provider preference? (defer to future change)

## Resolved Questions

- ~~RSS feed~~ → Not migrating (atom.xml dropped)
- ~~Dark mode~~ → Yes, implementing with Tailwind's dark mode
