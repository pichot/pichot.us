# Product Mission

## Pitch

pichot.us is a personal website that helps visitors quickly find information about Jonathan Pichot, explore his projects, and read his occasional blog posts, while providing the site owner with a modern, streamlined content management experience through Nuxt Studio.

## Users

### Primary Audiences

- **External Visitors:** People seeking information about Jonathan Pichot, his professional background, projects, and writing
- **Site Owner:** Jonathan, managing and updating content through a visual editing interface

### User Personas

**Professional Contact** (25-55)
- **Role:** Recruiter, potential collaborator, or industry peer
- **Context:** Researching Jonathan's background for professional opportunities
- **Pain Points:** Needs to quickly assess expertise and past work
- **Goals:** Find relevant project examples, contact information, and professional context

**Casual Reader** (20-60)
- **Role:** Blog reader, industry follower
- **Context:** Discovered a blog post through search or social media
- **Pain Points:** Wants to read content without friction
- **Goals:** Read blog posts, explore related content, learn about the author

**Site Owner** (Internal)
- **Role:** Content creator and site administrator
- **Context:** Occasionally updating projects or publishing blog posts
- **Pain Points:** Jekyll workflow requires local development and CLI commands
- **Goals:** Edit and publish content quickly through a visual interface without touching code

## The Problem

### Outdated Development Workflow

The current Jekyll-based site requires a local development environment and command-line knowledge to make content updates. For a site updated only occasionally, this creates unnecessary friction.

**Our Solution:** Migrate to Nuxt 4 with Nuxt Content and Nuxt Studio, enabling visual content editing directly in production while maintaining the simplicity of markdown-based content.

### Modern Hosting Requirements

Static site hosting has evolved, and modern edge deployment offers better performance and developer experience.

**Our Solution:** Deploy on Cloudflare Workers for fast, globally-distributed hosting with minimal configuration.

## Differentiators

### Visual Content Management

Unlike traditional static site generators that require CLI workflows, Nuxt Studio provides a visual editing interface directly on the live site. This results in faster content updates without needing to set up a local development environment.

### Markdown-First Architecture

Content remains in version-controlled markdown files, preserving full ownership and portability. No database lock-in or proprietary content formats.

### Edge-First Deployment

Cloudflare Workers deployment provides sub-50ms response times globally, with automatic scaling and no server management.

## Key Features

### Core Features

- **Home Page:** Quick introduction and overview of who Jonathan is
- **Projects Portfolio:** Showcase of professional work and side projects with descriptions and links
- **Blog:** Markdown-based posts with occasional updates on technology, product, and industry topics
- **About/Contact:** Professional background and contact information

### Content Management Features

- **Nuxt Studio Integration:** Visual editor for creating and updating content without code
- **Markdown Content:** All content stored as markdown files in the repository
- **Git-Based Publishing:** Changes committed directly to the repository from the Studio interface

### Technical Features

- **Nuxt 4 Framework:** Modern Vue-based framework with excellent performance
- **Nuxt Content Module:** File-based CMS with powerful querying and rendering
- **Cloudflare Workers Hosting:** Edge deployment for global performance
