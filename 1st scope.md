# First Implementation Scope

Goal: build a clean, credible static portfolio foundation without pretending the content is finished.

## 1. Keep the Stack Minimal

Use Astro only, with the existing strict TypeScript setup. Keep plain CSS with custom properties. Add no React, Tailwind, animation libraries, CMS, backend, analytics, or form handling.

## 2. Create the Core Site Structure

Implement these routes:

```text
/
/work/
/music/
/about/
/cv/
/contact/
```

Each page should have real structure, but restrained draft copy. No invented dates, links, metrics, employers, awards, or project outcomes.

Use `cv-parsed-content.md` as a factual source where it is relevant, but do not publish sensitive personal data from the CV by default.

## 3. Use a Small Component Set

Start with only:

```text
src/layouts/BaseLayout.astro
src/components/Header.astro
src/components/Footer.astro
src/components/ProjectCard.astro
src/components/TagList.astro
```

Maybe add `PageIntro.astro` only if the same intro pattern appears on several pages. Defer `SectionHeading`, `ProjectGrid`, `ProjectMeta`, `ExternalLink`, `MediaPlaceholder`, and utility modules until there is real repetition.

## 4. Add a Simple Visual System

Use:

```text
src/styles/tokens.css
src/styles/global.css
```

Define colors, font stacks, spacing, content widths, border color, focus states, and basic responsive rules. Keep the design editorial and restrained, but do not overdesign before real media exists.

## 5. Add a Minimal Project Collection

Create `src/content.config.ts` and `src/content/projects/`.

Use a small schema:

```ts
title
description
categories
technologies
role
featured
status
draft
date?
```

Make `date` optional for now. Add optional `externalUrl`, `repositoryUrl`, and `image` later when real links/assets are confirmed.

## 6. Create Draft Project Entries

Add only these initial draft entries:

```text
web-intelligence-rag-pipeline
music-performance-production
salesforce-record-label-crm
procedural-planet-generation
dijkstra-vs-a-star
```

Keep each entry short. Use the content handoff wording where it is already careful. Add TODO markers for unconfirmed role, dates, metrics, links, and source material.

Do not add the startup project yet unless its actual documents are available.

Use CV-confirmed dates/details only when they directly match one of these entries. Do not expand the first project set just because more CV items are available.

## 7. Build Work Pages

Create:

```text
src/pages/work/index.astro
src/pages/work/[id].astro
```

The work index lists draft project cards. The detail page can use a simple case-study shell:

```text
Context
Role
What It Involves
What Needs Confirmation
```

Avoid polished final case studies until source material exists.

## 8. Homepage Scope

The homepage should include only:

- hero with name and draft positioning
- three featured areas: RAG pipeline, music, Salesforce or procedural work
- short "working across disciplines" section
- contact link

Defer long capability grids, archive sections, testimonials, metrics, and elaborate media areas.

## 9. Music Page

Give music its own substantial page, but keep it honest:

- short positioning paragraph
- areas of work: performance, arrangement, recording, production, live audio
- TODO area for recordings/videos/images

No fake embeds or claimed releases.

## 10. CV Page

Create a web CV outline based on `cv-parsed-content.md`, excluding private personal data unless explicitly approved for publication.

Sections:

- profile draft
- education, using confirmed CV dates where appropriate
- selected projects
- skills grouped by evidence
- languages, including German B2 from the CV

Add a downloadable CV link only after confirming that the PDF should be public and placing a publishable copy under `public/`.

## 11. Contact Page

Simple placeholder contact structure. Include only confirmed links. If email/GitHub/LinkedIn are not confirmed, show TODO text rather than fake links.

## 12. Validation

After implementation:

```sh
npm run build
```

Optionally run Astro check only if the needed package support is already present or added deliberately. Use the AGENTS instruction for dev server if needed:

```sh
astro dev --background
```

## Explicitly Deferred

- sitemap
- robots.txt beyond a simple static file if needed
- Open Graph image system
- advanced metadata abstraction
- project filtering
- MDX
- media player
- animations beyond basic hover/focus transitions
- downloadable CV until the PDF is confirmed as public and moved under `public/`
- archive timeline
- full case-study pages
- GitHub Actions deployment
- content for startup, TUBITAK/MEF, campus app, or future file manager

This first version should prove the structure, tone, and visual direction. It should not try to look like a finished career archive before the factual material is ready.
