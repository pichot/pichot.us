# Migration Tasks

## 1. Foundation Setup
- [x] 1.1 Configure Nuxt for static generation (Cloudflare Workers)
- [x] 1.2 Set up Tailwind CSS (replacing SCSS port)
- [x] 1.3 Create base layout (`app/layouts/default.vue`)
- [x] 1.4 Configure Nuxt Content collections for posts and projects

## 2. Core Components
- [x] 2.1 Create `AppHeader.vue` with logo and navigation
- [x] 2.2 Create `AppFooter.vue` with footer content
- [x] 2.3 Create `IntroSection.vue` for homepage
- [x] 2.4 Create `ThemeToggle.vue` for dark mode

## 3. Content Collections
- [x] 3.1 Define `posts` collection schema in `content.config.ts`
- [x] 3.2 Define `projects` collection schema in `content.config.ts`
- [x] 3.3 Migrate blog posts to `content/posts/`
- [x] 3.4 Migrate projects to `content/projects/`
- [x] 3.5 Convert Jekyll frontmatter to Nuxt Content format

## 4. Page Routes
- [x] 4.1 Create homepage (`app/pages/index.vue`)
- [x] 4.2 Create writing listing page (`app/pages/writing.vue`)
- [x] 4.3 Create projects listing page (`app/pages/projects/index.vue`)
- [x] 4.4 Create dynamic post route with year-based URL (`app/pages/[year]/[slug].vue`)
- [x] 4.5 Create dynamic project route (`app/pages/projects/[slug].vue`)
- [ ] 4.6 Create 404 page

## 5. Listing Components
- [x] 5.1 Year grouping in writing page (inline)
- [x] 5.2 Year grouping and category tags in projects page (inline)
- [x] 5.3 Style listing grids with Tailwind

## 6. Embed Components (MDC)
- [x] 6.1 Create `EmbedVimeo.vue` component
- [x] 6.2 Create `EmbedYoutube.vue` component
- [x] 6.3 Create `EmbedGoogleSlides.vue` component
- [x] 6.4 Update project markdown to use new embed syntax

## 7. Styling with Tailwind
- [x] 7.1 Install and configure Tailwind CSS
- [x] 7.2 Extract design tokens from Jekyll SCSS (colors, fonts, spacing)
- [x] 7.3 Configure Tailwind theme with extracted values
- [x] 7.4 Style typography and base elements
- [x] 7.5 Configure prose styles for markdown content
- [ ] 7.6 Add syntax highlighting for code blocks

## 8. Dark Mode
- [x] 8.1 Configure Tailwind dark mode (class strategy)
- [x] 8.2 Create `ThemeToggle.vue` component
- [x] 8.3 Add dark mode toggle to header
- [x] 8.4 Implement localStorage persistence (via @nuxtjs/color-mode)
- [x] 8.5 Add system preference detection (via @nuxtjs/color-mode)
- [x] 8.6 Apply dark: variants to all components
- [ ] 8.7 Adjust syntax highlighting for dark mode

## 9. Assets & Static Files
- [x] 9.1 Copy images to `public/`
- [x] 9.2 Set up profile photo
- [ ] 9.3 Configure favicon if exists

## 10. URL Compatibility
- [x] 10.1 Configure routes to match `/:year/:title/` pattern
- [x] 10.2 Test all existing URLs work correctly
- [ ] 10.3 Set up redirects if needed

## 11. Final Verification
- [x] 11.1 Test all pages render correctly
- [ ] 11.2 Test responsive design
- [x] 11.3 Test dark mode toggle and persistence
- [x] 11.4 Verify embeds work (Vimeo, YouTube, Google Slides)
- [x] 11.5 Build for production (`pnpm build`)
- [ ] 11.6 Test Cloudflare Workers deployment locally
