# Change: Migrate Jekyll Site to Nuxt 4

## Why
The site currently runs on Jekyll (Ruby-based) but needs to be modernized to Nuxt 4 for:
- Better developer experience with Vue 3 and TypeScript
- Cloudflare Workers deployment compatibility
- More flexible content management with Nuxt Content v3
- Interactive component capabilities in markdown (MDC syntax)

## What Changes
- **Homepage**: Migrate intro content and layout to Nuxt
- **Navigation**: Recreate masthead with logo and nav links
- **Writing section**: Migrate 6 blog posts with year-grouped listing
- **Projects section**: Migrate 7 projects with category tags and year grouping
- **Layouts**: Convert Jekyll layouts (default, page, post) to Nuxt layouts/components
- **Styling**: Rebuild design using Tailwind CSS 4
- **Dark mode**: Add dark mode toggle with system preference detection
- **Embeds**: Create Vue components for Vimeo, YouTube, Google Slides
- **URL structure**: Preserve `/:year/:title/` permalink format
- **Assets**: Migrate images and static files

## Not Migrating
- RSS feed (atom.xml) - dropped

## Impact
- Affected specs: `site-content` (new capability)
- Affected code:
  - `app/pages/` - All page routes
  - `app/components/` - Layouts and embeds
  - `app/layouts/` - Base layout
  - `content/` - All markdown content
  - `assets/` - SCSS styles
  - `public/` - Static assets

## Migration Inventory

### Content to Migrate
| Type | Count | Source |
|------|-------|--------|
| Blog posts | 6 | `jekyll/_posts/` |
| Projects | 7 | `jekyll/_projects/` |
| Static pages | 3 | `index.html`, `writing.html`, `projects.html` |

### Components to Create
| Component | Purpose |
|-----------|---------|
| `AppHeader.vue` | Masthead with nav |
| `AppFooter.vue` | Footer content |
| `IntroSection.vue` | Homepage intro |
| `PostList.vue` | Year-grouped post listing |
| `ProjectList.vue` | Year-grouped project listing with tags |
| `EmbedVimeo.vue` | Vimeo video embed |
| `EmbedYouTube.vue` | YouTube video embed |
| `EmbedGoogleSlides.vue` | Google Slides embed |
| `ThemeToggle.vue` | Dark/light mode toggle |

### Styling
Rebuild design using Tailwind CSS 4, extracting design tokens (colors, spacing, typography) from the existing 14 SCSS partials. Includes dark mode support.
