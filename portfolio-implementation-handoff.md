# Personal Portfolio Website — Implementation Handoff

## 1. Project Purpose

Build a personal portfolio and CV website for **Can Öcek**.

The site should eventually present work across:

- technology and software
- data and AI projects
- business and strategy
- music performance
- audio production
- multidisciplinary project execution

The first implementation should focus on the site's **technical foundation, reusable structure, and visual system**.

Actual personal copy, detailed project descriptions, images, links, and CV content will be supplied later.

---

## 2. Core Positioning

The website must not present Can as only a software developer or business student.

The broader positioning is:

> A multidisciplinary builder working across systems, strategy, technology, and music.

A recurring theme should be the ability to:

- understand complex systems
- identify missing pieces
- learn what is necessary
- coordinate different disciplines
- turn incomplete ideas into working outcomes

Music should be treated as a central discipline, not as a minor hobby section.

Do not write final positioning copy yet. Use clearly marked placeholders.

---

## 3. Recommended Stack

### Framework

Use **Astro**.

Reasons:

- the site is primarily content-driven
- Astro generates static HTML by default
- minimal client-side JavaScript is required
- pages remain fast and SEO-friendly
- content can be separated cleanly from presentation
- isolated interactive components can be added later
- the file structure is predictable for future Codex work

### Language

Use **TypeScript** with strict mode enabled.

TypeScript should be used for:

- component props
- content schemas
- utility functions
- structured metadata
- future interactive components

### Styling

Use **plain CSS** with CSS custom properties.

Do not use Tailwind.

Create a small design system using variables for:

- colors
- typography
- spacing
- content widths
- border styles
- radii
- transitions
- breakpoints

Keep global styles centralized and component-specific styles local where appropriate.

### Content

Use **Astro Content Collections**.

Use Markdown for standard case studies and written entries.

Use MDX only later if a page genuinely requires embedded custom components.

### Deployment

The initial target should be a static deployment.

Preferred first deployment option:

- GitHub Pages
- GitHub Actions

Deployment configuration may be added after the site structure is stable.

### Interactivity

Prefer static Astro components and lightweight vanilla TypeScript.

Do not add React, Vue, Svelte, or another UI framework unless a future feature clearly requires it.

Potential future interactive features may include:

- project filtering
- a custom music player
- interactive diagrams
- small project demonstrations

---

## 4. Explicit Non-Goals for the First Version

Do not add:

- a backend
- a database
- authentication
- a CMS
- a contact form backend
- analytics
- Tailwind
- React
- large animation libraries
- WebGL
- page transition frameworks
- elaborate loading screens
- a blog system
- a theme switcher
- unnecessary dependencies

Do not optimize for hypothetical complexity before the real content exists.

---

## 5. Initial Information Architecture

Create the following top-level pages:

```text
/
├── work/
├── music/
├── about/
├── cv/
└── contact/
```

### Home

The home page should eventually contain:

- name
- concise positioning statement
- short introduction
- featured work
- short music section
- selected capabilities
- contact call to action

For now, use restrained placeholder content.

### Work

The work index should display project entries from the content collection.

Each project should eventually support:

- title
- short description
- date
- category
- technologies
- role
- featured status
- cover image
- project status
- full case study

### Individual Project Pages

Each project page should support this narrative structure:

1. Context
2. Problem
3. Role
4. Process
5. Decisions
6. Outcome
7. Lessons

The exact headings should remain flexible.

### Music

The music page should eventually support:

- musical background
- performance work
- instruments
- vocals
- arrangement
- recording
- mixing
- production
- live audio
- embedded recordings or videos
- future releases

For now, create the page structure without inventing achievements or external links.

### About

The about page should eventually explain:

- multidisciplinary working style
- education
- technical and creative background
- languages
- working principles
- current direction

Use placeholders until final copy is provided.

### CV

The CV page should eventually provide:

- a concise web-based summary
- education
- selected experience
- relevant projects
- skills
- languages
- a downloadable PDF CV

Use a placeholder link to `/cv.pdf`.

### Contact

Use simple links only.

Potential fields:

- email
- GitHub
- LinkedIn
- music profiles
- other relevant platforms

Do not create a backend contact form.

---

## 6. Recommended Repository Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Navigation.astro
│   ├── common/
│   │   ├── SectionHeading.astro
│   │   ├── PageIntro.astro
│   │   ├── TagList.astro
│   │   └── ExternalLink.astro
│   ├── projects/
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   └── ProjectMeta.astro
│   └── music/
│       ├── MusicEntry.astro
│       └── MediaPlaceholder.astro
│
├── content/
│   └── projects/
│       └── example-project.md
│
├── layouts/
│   ├── BaseLayout.astro
│   └── ProjectLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── music.astro
│   ├── cv.astro
│   ├── contact.astro
│   └── work/
│       ├── index.astro
│       └── [id].astro
│
├── styles/
│   ├── tokens.css
│   ├── global.css
│   ├── typography.css
│   └── utilities.css
│
├── utils/
│   ├── projects.ts
│   └── dates.ts
│
└── content.config.ts

public/
├── images/
├── audio/
├── documents/
└── cv.pdf
```

The exact structure may be adjusted if Astro conventions require it, but responsibilities must remain clearly separated.

---

## 7. Content Collection Schema

Create a project collection with a schema similar to:

```ts
{
  title: string;
  description: string;
  date: Date;
  categories: string[];
  technologies: string[];
  role: string;
  featured: boolean;
  status?: "completed" | "ongoing" | "archived";
  image?: string;
  imageAlt?: string;
  externalUrl?: string;
  repositoryUrl?: string;
  draft?: boolean;
}
```

Requirements:

- validate all fields
- provide sensible optional fields
- avoid making every field mandatory
- support draft entries
- sort projects by date
- allow featured projects on the home page
- do not encode visual styling into content data

---

## 8. Placeholder Policy

Content will be added later.

Until then:

- use neutral placeholder copy
- mark editable areas with `TODO` comments
- do not invent employers
- do not invent job titles
- do not invent metrics
- do not invent project outcomes
- do not invent awards
- do not invent dates
- do not invent social links
- do not invent testimonials

Example:

```astro
<!-- TODO: Replace with final personal positioning copy -->
<p>
  Multidisciplinary work across technology, strategy, and music.
</p>
```

Placeholder text should still be readable enough to evaluate layout.

Do not use long blocks of lorem ipsum.

---

## 9. Design Direction

The design should feel like a combination of:

- an editorial portfolio
- a small creative studio
- a serious technical case-study site
- a restrained artist website

### Visual Character

Use:

- a warm near-black background
- off-white text
- one muted accent color
- subtle borders
- strong typography
- generous whitespace
- asymmetrical editorial layouts where appropriate
- restrained transitions
- clear content hierarchy

Potential accent directions:

- muted bronze
- desaturated blue
- burgundy
- warm stone

Choose one initial accent and define it as a replaceable design token.

### Typography

Use:

- one display serif for major headings
- one highly readable sans-serif for body text

Prefer local system stacks initially or a privacy-conscious font-loading approach.

Do not add font files to the repository unless explicitly requested later.

### Avoid

Do not use:

- neon developer aesthetics
- fake terminal windows
- glowing gradients
- animated background particles
- excessive rounded cards
- glassmorphism
- generic SaaS sections
- skill progress bars
- rotating job-title text
- autoplay audio
- excessive hover animation
- massive hero portraits
- decorative effects that reduce readability

### Music Section

The music section may be slightly more atmospheric than the rest of the site.

It must still use the same core design system.

The difference should come from:

- pacing
- imagery
- typography scale
- layout
- media presentation

Do not create a completely separate visual theme.

---

## 10. Responsive Behaviour

The site must work well on:

- mobile phones
- tablets
- laptops
- wide desktop screens

Use a content-first mobile layout.

Requirements:

- readable line lengths
- no horizontal overflow
- touch-friendly navigation
- project cards that reflow cleanly
- images with stable aspect ratios
- sensible spacing reductions on small screens
- navigation that remains accessible without JavaScript where possible

---

## 11. Accessibility Requirements

Use semantic HTML.

Required considerations:

- correct heading hierarchy
- keyboard-accessible navigation
- visible focus states
- meaningful link text
- alternative text for images
- sufficient contrast
- support for `prefers-reduced-motion`
- no essential information communicated only through color
- no autoplay media
- skip-to-content link
- correct landmark elements
- descriptive page titles

Do not add ARIA attributes where native HTML already provides the correct semantics.

---

## 12. SEO and Metadata

Create a reusable metadata system supporting:

- page title
- description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- page type
- no-index support for drafts if needed

Add:

- sitemap support
- robots.txt
- favicon placeholders
- structured page titles

Do not overengineer structured data before final content exists.

---

## 13. Image Handling

Use Astro's image tooling for imported project images where possible.

Requirements:

- responsive image sizes
- explicit width and height where possible
- useful alternative text
- lazy loading below the fold
- appropriate modern formats
- no large unoptimized images
- no decorative image without a clear purpose

For external embeds, use a lightweight placeholder or user-initiated loading approach where practical.

---

## 14. Coding Conventions

### Components

Components should:

- have a single clear purpose
- expose typed props
- avoid unnecessary client-side JavaScript
- avoid deeply nested abstractions
- remain readable without excessive indirection

### CSS

Use:

- low-specificity selectors
- design tokens
- consistent naming
- modern layout tools
- logical properties where useful

Avoid:

- `!important`
- deeply nested selectors
- arbitrary one-off values when a token is appropriate
- styling through inline attributes
- excessive utility-class duplication

### TypeScript

Use:

- strict typing
- explicit types where inference is unclear
- small utility functions
- no `any` unless unavoidable and documented
- no unnecessary classes

### Dependencies

Before adding a dependency, determine whether the feature can be implemented clearly with Astro, CSS, or a small amount of TypeScript.

Keep the dependency list minimal.

---

## 15. Navigation Behaviour

The primary navigation should include:

```text
Work
Music
About
CV
Contact
```

Requirements:

- current page should be visually indicated
- navigation should work without client-side routing
- mobile navigation must be keyboard accessible
- avoid elaborate animated menus
- the name or wordmark should link to the home page

---

## 16. Initial Components

Build these reusable components first:

```text
BaseLayout
Header
Navigation
Footer
PageIntro
SectionHeading
ProjectCard
ProjectGrid
ProjectMeta
TagList
ExternalLink
MediaPlaceholder
```

Do not create components for single-use fragments unless they improve clarity.

---

## 17. Initial Project Entries

Create no more than three placeholder project entries.

Possible categories for layout testing:

1. Technical systems project
2. Business or strategy project
3. Music or production project

These entries must be clearly fictionalized placeholders in wording and must not claim real outcomes.

Their purpose is only to test:

- project cards
- tags
- content collection routing
- case-study layouts
- featured project rendering

---

## 18. Quality Checks

Before considering the foundation complete, run:

```bash
npm run dev
npx astro check
npm run build
```

The implementation is acceptable only when:

- the site runs locally
- Astro reports no errors
- TypeScript reports no errors
- the production build succeeds
- all routes load
- project collection routes generate correctly
- mobile layouts are usable
- keyboard navigation works
- no placeholder link causes a broken page
- there are no unnecessary dependencies

---

## 19. Git Workflow

Use small, meaningful commits.

Recommended initial commits:

```text
Initialize Astro portfolio
Add global design tokens and base layout
Add content collection and project routes
Add responsive page structure
Add accessibility and metadata foundations
```

Do not combine unrelated architectural changes into one large commit.

---

## 20. Suggested Implementation Order

### Phase 1 — Foundation

1. Inspect the existing Astro repository.
2. Confirm TypeScript strict mode.
3. Remove unused starter code.
4. Create the design-token files.
5. Create the base layout.
6. Create header, navigation, and footer.
7. Add global accessibility foundations.

### Phase 2 — Content Architecture

1. Configure the project content collection.
2. Add placeholder project entries.
3. Build project utility functions.
4. Build project cards and metadata components.
5. Generate individual project routes.

### Phase 3 — Page Structure

1. Build the home page.
2. Build the work index.
3. Build project detail pages.
4. Build the music page.
5. Build the about page.
6. Build the CV page.
7. Build the contact page.

### Phase 4 — Responsive and Visual Refinement

1. Refine typography.
2. Refine spacing.
3. Test mobile navigation.
4. Test project layouts at multiple widths.
5. Add restrained transitions.
6. Add reduced-motion behaviour.

### Phase 5 — Validation

1. Run Astro checks.
2. Run the production build.
3. Fix all warnings and errors.
4. Review keyboard navigation.
5. Review contrast and focus states.
6. Confirm that no personal facts were invented.

---

## 21. Acceptance Criteria for the Content-Free Foundation

The first foundation is complete when:

- the full page structure exists
- reusable layouts are implemented
- the project collection works
- placeholder project pages are generated
- the visual system is coherent
- the site is responsive
- accessibility basics are present
- metadata is supported
- the CV download path exists
- all placeholder content is clearly marked
- no factual personal claims were invented
- the site passes type checks and builds successfully

The site does not need to feel finished until real content and media are added.

---

## 22. Codex Working Instructions

Use the following principles while implementing:

1. Inspect the repository before changing files.
2. State a concise implementation plan.
3. Work in the implementation order defined above.
4. Prefer simple Astro-native solutions.
5. Keep content separate from presentation.
6. Do not introduce frameworks or dependencies without necessity.
7. Do not invent personal content.
8. Mark missing content clearly with TODO comments.
9. Validate after meaningful milestones.
10. Run final checks and fix all errors before stopping.
11. Do not add features outside this handoff.
12. Explain major architectural deviations in the README.

---

## 23. Recommended Initial Codex Prompt

```text
Read PORTFOLIO_HANDOFF.md and inspect the current Astro repository.

Implement only the content-free technical foundation described in the handoff.

Priorities:
1. clean Astro and TypeScript architecture
2. content collection for projects
3. reusable layouts and components
4. responsive editorial design system
5. accessibility
6. placeholder content that is clearly marked for replacement

Do not invent personal facts, project outcomes, employers, dates, statistics,
or external links.

Do not add React, Tailwind, a backend, a CMS, analytics, or unnecessary
dependencies.

Before coding, provide a concise implementation plan.

After implementation:
- run Astro checks
- run the production build
- fix all errors
- summarize the files created and the remaining TODO content areas
```

---

## 24. Future Content Handoff

A separate content handoff will later define:

- final personal positioning
- biography
- selected projects
- project case-study copy
- music background
- technical skills
- business and strategy experience
- education
- contact details
- social links
- CV content
- project imagery
- recordings and video embeds
- final calls to action

Do not attempt to fill those sections before that content handoff is provided.
