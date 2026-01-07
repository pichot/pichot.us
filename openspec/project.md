# Project Context

## Purpose
Personal portfolio website for Jonathan Pichot (pichot.us). The site showcases projects, talks, and professional work, with occasional blog posts. Currently being migrated from Jekyll to Nuxt 4.

## Tech Stack
- **Framework**: Nuxt 4 (Vue 3)
- **Language**: TypeScript
- **Content**: Nuxt Content v3 (markdown-based)
- **Package Manager**: pnpm
- **Linting**: ESLint with @nuxt/eslint
- **Fonts**: @nuxt/fonts
- **Database**: better-sqlite3 (used by Nuxt Content)
- **Deployment Target**: Cloudflare Workers
- **CSS**: Tailwind CSS 4

## Project Conventions

### Code Style
- Use ESLint with Nuxt's default configuration
- Vue Single File Components (.vue) with `<script setup>` syntax
- In Vue components, order the sections: `<script setup>`, `<template>`, and `<style>`
- TypeScript for type safety
- Composition API preferred over Options API
- Always use Tailwind CSS classes whenever possible. Notify the user and document any exceptions.

### Architecture Patterns
- **File-based routing**: Pages in `app/pages/`
- **Content-driven**: Markdown files in `content/` rendered via Nuxt Content
- **Component colocation**: Vue components in `app/components/`
- **Catch-all routing**: `[...slug].vue` for dynamic content pages

### Testing Strategy
No testing setup currently. May add Vitest in the future.

### Git Workflow
- Feature branch workflow
- Create branches for changes, merge via pull request
- Main branch: `master`

## Domain Context
- **Content types**: Blog posts (writing), projects/talks, and static pages
- **Legacy content**: Jekyll-based content exists in `jekyll/` directory and needs migration
- **Content features**: Markdown with Vue component integration (MDC syntax)

## Important Constraints
- Must support static site generation for Cloudflare Workers deployment
- Content should remain in markdown for easy editing
- Preserve URL structure from Jekyll site where possible (permalinks: `/:year/:title/`)

## External Dependencies
- **Cloudflare Workers**: Hosting platform
- **Vimeo**: Embedded video content
- **Google Slides**: Embedded presentation content
