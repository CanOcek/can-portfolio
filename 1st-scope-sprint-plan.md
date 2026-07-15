# First Scope Sprint Plan

This plan implements `1st scope.md`. Keep the build small, static, and honest. Use `cv-parsed-content.md` only as a factual reference, and do not publish sensitive CV details without explicit approval.

## Sprint 0: Baseline and Content Guardrails

Goal: confirm the repo state and the exact first-version boundaries.

Tasks:

- Re-read `1st scope.md`, `cv-parsed-content.md`, and both portfolio handoff files.
- Confirm the current Astro starter state, strict TypeScript config, and scripts.
- Decide the minimal file map before editing.
- Identify publishable vs. private CV fields.
- Ask for approval before publishing the CV PDF, phone number, street address, birth data, citizenship, or any personal data not needed for the portfolio.

Exit criteria:

- No new dependencies planned.
- Clear list of CV facts safe to use immediately.
- Clear list of facts requiring user approval.

## Sprint 1: Site Foundation

Goal: replace the starter page with a reusable static site shell.

Tasks:

- Create `src/layouts/BaseLayout.astro`.
- Create `src/components/Header.astro` and `src/components/Footer.astro`.
- Add `src/styles/tokens.css` and `src/styles/global.css`.
- Add skip link, landmarks, responsive content width, visible focus states, and basic metadata props.
- Replace the starter homepage with the shared layout.

Exit criteria:

- Homepage renders through `BaseLayout`.
- Navigation works without JavaScript.
- `npm run build` passes.

## Sprint 2: Core Pages

Goal: create the top-level route structure.

Tasks:

- Add `/work/`, `/music/`, `/about/`, `/cv/`, and `/contact/`.
- Use restrained draft copy.
- Use CV-confirmed education and German B2 where appropriate.
- Keep contact links limited to confirmed public details.
- Do not add a downloadable CV link until the PDF is approved for public use and moved under `public/`.

Exit criteria:

- All top-level routes build.
- No fake links.
- No private CV data published by default.

## Sprint 3: Project Content Collection

Goal: add the minimal project data structure.

Tasks:

- Create `src/content.config.ts`.
- Create `src/content/projects/`.
- Define the minimal project schema from `1st scope.md`.
- Add only the scoped draft entries:
  - `web-intelligence-rag-pipeline`
  - `music-performance-production`
  - `salesforce-record-label-crm`
  - `procedural-planet-generation`
  - `dijkstra-vs-a-star`
- Use CV-confirmed details only where they directly match these entries.

Exit criteria:

- Content collection validates.
- Project entries stay concise.
- No extra CV projects are added just because they exist.
- `npm run build` passes.

## Sprint 4: Work Listing and Detail Pages

Goal: make project drafts navigable.

Tasks:

- Create `ProjectCard.astro`.
- Create `TagList.astro`.
- Build `/work/` from the project collection.
- Build `/work/[id].astro`.
- Use the detail shell:
  - Context
  - Role
  - What It Involves
  - What Needs Confirmation

Exit criteria:

- Work index lists draft project cards.
- Each project has a generated detail page.
- Draft status and TODOs are clear.
- No broken internal links.

## Sprint 5: Homepage Composition

Goal: communicate the portfolio direction without overfilling the page.

Tasks:

- Add hero with name and draft positioning.
- Feature three areas:
  - RAG pipeline
  - Music
  - Salesforce or procedural work
- Add a short "working across disciplines" section.
- Add a simple contact CTA.

Exit criteria:

- Homepage tells the basic story quickly.
- Music is visibly central.
- Featured items link to existing pages.
- No metrics, awards, or claims are added unless directly supported and suitable for publication.

## Sprint 6: CV, Contact, and Public-Data Pass

Goal: make CV/contact content useful without leaking unnecessary personal data.

Tasks:

- Review `/cv/` against `cv-parsed-content.md`.
- Keep education, selected projects, skills, and languages concise.
- Keep German as B2.
- Remove or withhold street address, birth date/place, citizenship, and phone unless explicitly approved.
- If approved, move the PDF to a publishable `public/` path and link it; otherwise leave the download out.

Exit criteria:

- CV page is credible but selective.
- Contact page uses only approved public contact details.
- Downloadable PDF status is resolved or clearly deferred.

## Sprint 7: Responsive and Accessibility Pass

Goal: make the first version coherent on mobile and desktop.

Tasks:

- Refine spacing, typography, contrast, and borders.
- Check mobile navigation and line lengths.
- Check keyboard focus order.
- Ensure TODOs are useful but not visually messy.
- Remove any abstraction that does not pay for itself.

Exit criteria:

- Mobile layout is readable.
- Keyboard navigation is usable.
- Visual tone is consistent.
- No unnecessary components or dependencies.

## Sprint 8: Final Validation

Goal: confirm the first implementation is buildable and honest.

Tasks:

- Run `npm run build`.
- Use `astro dev --background` if local visual testing is needed.
- Manually check:
  - `/`
  - `/work/`
  - each `/work/[id]/`
  - `/music/`
  - `/about/`
  - `/cv/`
  - `/contact/`
- List remaining factual TODOs.
- Check `git diff` for accidental scope creep.

Exit criteria:

- Build passes.
- All routes load.
- No fake links.
- No invented facts.
- Private CV data is not published by default.
- Remaining TODOs are explicit.
