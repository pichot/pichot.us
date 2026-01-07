## ADDED Requirements

### Requirement: Homepage Display
The homepage SHALL display an introduction section with:
- Profile photo
- Greeting and name
- Professional summary
- Work history with links
- Current availability status
- Contact email link

#### Scenario: User visits homepage
- **WHEN** user navigates to `/`
- **THEN** the intro section is displayed with all content
- **AND** all external links are functional

### Requirement: Site Navigation
The site SHALL provide a masthead navigation with:
- Logo/brand link to homepage ("JP")
- Link to "Work & Projects" page
- Link to "Writing" page

#### Scenario: Navigation from any page
- **WHEN** user is on any page
- **THEN** the masthead navigation is visible
- **AND** clicking logo returns to homepage
- **AND** clicking nav links navigates to respective pages

### Requirement: Writing Listing Page
The writing page SHALL display all blog posts grouped by year in reverse chronological order.

#### Scenario: User views writing page
- **WHEN** user navigates to `/writing`
- **THEN** posts are displayed grouped by year
- **AND** years are sorted newest first
- **AND** each post shows title and date
- **AND** clicking a post navigates to the full post

### Requirement: Projects Listing Page
The projects page SHALL display all projects/talks grouped by year with category tags.

#### Scenario: User views projects page
- **WHEN** user navigates to `/projects`
- **THEN** projects are displayed grouped by year
- **AND** each project shows category tag (talk, project, etc.)
- **AND** each project shows title, organization, and date
- **AND** clicking a project navigates to the full project page

### Requirement: Blog Post Display
Individual blog posts SHALL be accessible at `/:year/:title/` URLs and display:
- Post title
- Publication date
- Full markdown content rendered as HTML

#### Scenario: User reads a blog post
- **WHEN** user navigates to `/2020/back-to-basics/`
- **THEN** the post title "Back to basics" is displayed
- **AND** the publication date is shown
- **AND** the full post content is rendered

### Requirement: Project Display
Individual projects SHALL display:
- Project title
- Event/organization name
- Date
- Category tag
- Full content with embedded media

#### Scenario: User views a project with video
- **WHEN** user navigates to a project page with Vimeo embed
- **THEN** the Vimeo video player is embedded and playable
- **AND** project metadata is displayed

### Requirement: Media Embeds
The content system SHALL support embedding external media via MDC components:
- Vimeo videos
- YouTube videos
- Google Slides presentations

#### Scenario: Vimeo embed in markdown
- **WHEN** content includes `::embed-vimeo{id="360018527"}::`
- **THEN** a responsive Vimeo player is rendered

#### Scenario: Google Slides embed in markdown
- **WHEN** content includes `::embed-google-slides{id="..."}::`
- **THEN** an embedded Google Slides presentation is rendered

### Requirement: Responsive Design
The site SHALL be responsive and functional on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

#### Scenario: Mobile navigation
- **WHEN** user views site on mobile device
- **THEN** navigation remains accessible
- **AND** content is readable without horizontal scrolling

### Requirement: Dark Mode
The site SHALL support dark mode with:
- Toggle button in the header
- Persistence of user preference in localStorage
- Automatic detection of system preference (prefers-color-scheme)
- Appropriate color scheme for all components in dark mode

#### Scenario: User enables dark mode
- **WHEN** user clicks the dark mode toggle
- **THEN** the site switches to dark color scheme
- **AND** the preference is saved to localStorage

#### Scenario: User returns with saved preference
- **WHEN** user returns to the site with dark mode previously enabled
- **THEN** dark mode is automatically applied on page load

#### Scenario: System preference detection
- **WHEN** user visits for the first time with system dark mode enabled
- **THEN** the site defaults to dark mode

### Requirement: Static Generation
The site SHALL support static generation for Cloudflare Workers deployment.

#### Scenario: Production build
- **WHEN** `pnpm build` is executed
- **THEN** static HTML files are generated for all routes
- **AND** the output is compatible with Cloudflare Workers
