# Product Roadmap

1. [ ] Nuxt 4 Project Setup — Initialize a new Nuxt 4 project with TypeScript configuration, replacing the existing Jekyll structure while preserving content files. `S`

2. [ ] Nuxt Content Integration — Install and configure the Nuxt Content module to read markdown files from the content directory, with proper frontmatter schema definitions. `S`

3. [ ] Content Migration — Migrate existing Jekyll markdown posts and projects to Nuxt Content format, updating frontmatter fields and directory structure as needed. `M`

4. [ ] Base Layout and Navigation — Create the main layout component with header navigation (Home, Projects, Writing) and footer, matching the current site structure. `S`

5. [ ] Home Page — Build the home page with introduction content, replicating the current intro section design. `XS`

6. [ ] Projects Portfolio Page — Create the projects listing page that queries and displays all project content with titles, descriptions, and links. `S`

7. [ ] Individual Project Pages — Implement dynamic routing for individual project pages, rendering markdown content with proper styling. `S`

8. [ ] Blog Listing Page — Create the writing/blog listing page showing posts in reverse chronological order with titles and dates. `S`

9. [ ] Individual Blog Post Pages — Implement dynamic routing for blog posts with full markdown rendering, including code syntax highlighting. `S`

10. [ ] Styling and Visual Parity — Apply CSS styling to match the current site design, including typography, spacing, colors, and responsive layout. `M`

11. [ ] Nuxt Studio Module Setup — Install and configure the Nuxt Studio module with GitHub authentication and repository connection for visual content editing. `S`

12. [ ] Cloudflare Workers Deployment — Configure Nuxt for Cloudflare Workers deployment, set up the Cloudflare project, and establish the deployment pipeline. `M`

13. [ ] Domain and DNS Configuration — Point the pichot.us domain to Cloudflare Workers and configure SSL/TLS settings. `XS`

14. [ ] Final Testing and Launch — Test all pages, content editing workflow, and deployment pipeline before switching from the old Jekyll site. `S`

> Notes
> - Order items by technical dependencies and product architecture
> - Each item should represent an end-to-end functional and testable feature
> - Content migration (item 3) can be refined iteratively as page templates are built
> - Visual styling (item 10) may be addressed incrementally during page development
