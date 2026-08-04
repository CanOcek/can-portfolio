Portfolio Refinement — Authoritative Codex Handoff

Target model: GPT-5.5 HighLive reference: [https://can-portfolio-seven.vercel.app/](https://can-portfolio-seven.vercel.app/)

This document supersedes every earlier portfolio handoff. Implement it against the latest repository state; do not combine it with older instructions where they conflict.

Mission

Refine the existing Astro portfolio through a focused information-hierarchy, navigation, responsive-type, and consistency pass. This is not a redesign. Preserve the site's established visual identity and its working interactive pieces while moving supporting material away from the homepage so project evidence appears sooner.

Work autonomously through repository inspection, implementation, build checks, and browser QA. Preserve unrelated changes in a dirty worktree and do not revert work you did not create.

Hard constraints from the owner

These override any inference or prior recommendation:

Do not put the RC Aircraft / UAV project on the homepage. Keep it discoverable in the project archive and on its own route, but do not add it to Selected Work, More Proof Points, or any other homepage block.

Move Working Method off the homepage and into About. It must replace the existing “The useful pattern” section rather than being added as another section. Do not leave duplicate Working Method content on the homepage.

Move the homepage Tools section to the CV. Merge it thoughtfully with the CV's existing skills/tool content. Do not leave a duplicate Tools section on the homepage. Do not add it to About in this implementation; About is already receiving Working Method.

Leave the fake play icons exactly as they are. They are intentional reminders for future videos. Do not remove, restyle, relabel, disable, or replace them, even when they currently look interactive.

Do not rewrite the site's main prose. The owner will manually replace AI-generated copy and validate claims later. Make only tiny text changes required for navigation, labels, or accessibility.

Do not complete unfinished project pages or invent evidence. No fabricated screenshots, videos, imagery, metrics, testimonials, outcomes, or claims.

The Business Development Radar demo architecture is complete. Its public viewer intentionally shows pre-generated answers in the same UI as the password-protected full version. Current Streamlit Community Cloud slowness is temporary; hosting will move to a subdomain. Do not redesign the viewer or solve hosting in this task.

Preserve

Astro and the current static/content-driven architecture

the dark palette, subtle grid, serif/sans pairing, and restrained orange/teal accents

the homepage's three-lens concept and selected-work tabs

current project routes and content sources

the Media page and photography lightbox

the Dijkstra/A* interactive maze and all of its controls

restrained motion and existing reduced-motion support

current fake video/play placeholders

all legitimate existing skill and language entries

Do not add WebGL, a theme switcher, loading screens, a new framework, heavy animation libraries, or dependencies that existing CSS/JavaScript can replace.

Start by inspecting, not assuming

Read repository-level instructions and inspect git status before editing.

Find the page layouts, shared header, homepage sections, About sections, CV data, project metadata, reveal/anchor logic, and typography styles.

Run the current site using the repository's package manager and commands.

Inspect the latest implementation in a browser at desktop and mobile widths before choosing exact selectors or component boundaries.

Reuse existing components and data where practical. Move components rather than copying them.

Required implementation

1. Make the homepage proof-first

Remove the Working Method and Tools sections from the homepage and relocate them as specified below. After the move, the homepage's high-level order should be:

Hero

Selected Work

More Proof Points

Media

Final CTA/footer

Requirements:

Do not change the current More Proof Points project selection merely to fill space. In particular, do not add RC Aircraft / UAV there.

Preserve the three-lens navigation and selected-work interactions.

Remove obsolete homepage anchors, navigation entries, props, imports, and CSS only when no longer used elsewhere.

Rebalance the newly adjacent section spacing. Keep editorial breathing room, but avoid a new near-empty viewport where the removed sections used to be.

Confirm that hero entry points still land on visible, correct selected-work content.

2. Replace About's “The useful pattern” with Working Method

Relocate the existing Working Method experience—Frame, Build, Test, Communicate—from the homepage into the location currently occupied by “The useful pattern.” The old Useful Pattern content should not remain as a second parallel framework.

Requirements:

Preserve the four Working Method states and their existing content unless a very small label adjustment is technically required.

Preserve or improve keyboard-accessible tab semantics: correct roles, relationships, focus behavior, and selected state.

Keep the component compact enough to function as one About-page section. Prefer a horizontal or two-column layout on wide screens and a clear stacked layout on mobile.

Avoid fixed/minimum heights that create a full empty viewport or large jumps when switching tabs.

The active panel must be visible without relying on a delayed reveal observer.

Keep “Principles I work by” and “Books that shape my work.” Working Method should communicate operating process; Principles should remain values-oriented. Do not rewrite either merely to eliminate every conceptual echo—the owner will revise prose later.

Remove the original Useful Pattern markup/data if nothing else uses it. Do not leave inaccessible hidden duplication.

3. Move Tools into the CV and consolidate the taxonomy

Remove “Tools I keep close to the work” from the homepage and make the CV the single source of truth for this inventory. Merge it with the CV's existing Skills/Tools area rather than appending another repetitive block.

Use the repository's actual existing entries as authoritative. Preserve real items currently found on either page, including Swift, R, FL Studio, Photoshop, and Illustrator. Deduplicate repeated items. Keep Languages as a separate category.

Recommended grouping, adjusted only when the repository's exact inventory warrants it:

Data & automation: Python, SQL, PostgreSQL, pgvector, Scrapy, Playwright, Streamlit, R

Web & interfaces: TypeScript, Astro, HTML/CSS, HTML Canvas or Canvas API

Software & game systems: Java, C#, Unity, libGDX, Swift

Media & audio: Reaper, FL Studio, DaVinci Resolve, Photoshop, Illustrator

Languages: Turkish — native; English — highly proficient; German — B2

Rules:

Rename ambiguous “Canvas” to “HTML Canvas” or “Canvas API,” whichever matches actual usage.

Put SQL under Data & automation, not Web.

Do not invent proficiency percentages, progress bars, years of experience, or new skills.

Use the site's existing CV visual system. Pills or compact text groupings are fine; do not turn this into a logo wall.

If skills are data-driven, consolidate the data rather than maintaining two hard-coded arrays.

4. Fix anchors, tabs, and reveal timing

Current intentional jumps must land with visible content below the sticky header. Audit all hash and programmatic navigation, including homepage lens entry points, Media's photography jump, Radar's internal “Read case study” jump, and any surviving project/local navigation.

Implementation requirements:

Apply an appropriate scroll-margin-top or equivalent that accounts for the sticky header plus breathing room.

On direct load with a valid hash, targeted content and relevant reveal ancestors must be visible immediately or during the normal short transition—not a blank viewport waiting for IntersectionObserver.

If a link targets content in an inactive tab, activate the tab first, allow layout to settle, then calculate/perform the scroll.

Keep URL state, browser back/forward, and focus behavior sensible.

Honor prefers-reduced-motion: no delayed opacity reveal and no forced smooth scrolling for those users.

Do not globally remove all motion if a targeted fix is reliable.

Acceptance criteria:

No target heading is covered by the sticky header.

Every homepage lens entry activates the correct content before landing.

Direct hash URLs work on first load.

Back/forward navigation restores a coherent state.

Reduced-motion mode never presents a temporarily invisible target.

5. Use a selective long-title scale on project pages

Long detail-page titles currently consume too much of the initial viewport, particularly the Dijkstra/A* and Radar titles. Fix this without weakening short titles or the homepage hero.

Requirements:

Create a project-detail title treatment that can distinguish exceptionally long titles. Use a data attribute, explicit content metadata, modifier class, or a robust length/layout-aware approach; do not shrink every H1 globally.

Use responsive clamp() sizing and improve usable text measure where appropriate.

Reduce excessive detail-hero padding/min-height only where it contributes to the problem.

Keep deliberate wrapping and readability; a one-line title is not the goal.

Allow a meaningful hint of the first cover, diagram, demo, or proof block to appear sooner on ordinary desktop screens when the page structure permits.

Verify both long and short project titles. Short titles must retain authority.

6. Make the small header context label page-specific

The contextual label beside the name should describe the current area instead of remaining /Portfolio everywhere.

Drive the label through page/layout metadata or props, not scattered pathname checks.

Use concise labels such as /About, /CV, /Contact, /Projects, and /Media; use a concise project/case-study context on project pages.

Preserve reliable homepage section-aware behavior.

Do not replace real headings, active primary-nav state, or accessible breadcrumbs with this decorative context label.

Avoid hydration flicker or mismatch.

7. Standardize the owner's name

Audit visible chrome and document metadata for inconsistent Can Oce.../ASCII variants. Use Can Öcek consistently where the full personal name appears, including page titles, metadata, sidebars, and shared layout strings. Do not alter route slugs, email addresses, external usernames, filenames, or URLs merely to add diacritics.

8. Improve project-archive hierarchy without changing homepage curation

Keep the Radar flagship treatment, make the Dijkstra/A* interactive project easy to find, and make broader work scannable without treating every archive item as equally important.

Prefer clear static grouping derived from existing metadata over complex filters.

Suitable conceptual levels are flagship/featured work, selected or interactive case studies, and the broader archive. Derive final labels from real metadata and avoid invented claims about professional status.

Keep RC Aircraft / UAV findable and visually meaningful in the archive and on its detail page—but never promote it to the homepage.

Do not delete projects, break routes, or hide earlier/school work.

Make the smallest content-schema extension needed if reliable grouping is impossible with current data, and document it.

9. Add a real About image only if an approved asset already exists

Search existing public/approved repository assets for one strong image actually featuring Can: portrait, studio, performance, production, or maker/workbench imagery.

Do not generate, scrape, or fabricate an image.

Do not expose a private/unapproved asset.

If a suitable asset exists, use one editorial crop near the About opening or trajectory content, provide accurate alt text, and optimize it through the existing image pipeline.

If no suitable asset exists, add no placeholder and make no visible layout change for it. Report a recommendation for a future asset: approximately 4:5 or 3:4 portrait orientation, at least 1600 px on the long edge, environmental composition with usable negative space.

10. Perform targeted spacing and mobile-flow cleanup

After all relocations, inspect rather than globally reducing spacing tokens. Focus on:

homepage transitions from Selected Work to More Proof Points to Media

About rhythm around relocated Working Method, Principles, and Books

CV rhythm around consolidated Skills/Tools and Languages

project-detail distance between hero and first proof/demo

mobile gaps caused by desktop minimum heights

long Radar figure/heading spacing

Maintain generous editorial separation, but remove unexplained near-empty full-screen gaps and avoid horizontal overflow.

11. Radar local navigation is conditional

The long Radar case study may receive a compact table of contents or section index only if it can be generated reliably from stable headings/metadata and will survive later copy rewrites.
