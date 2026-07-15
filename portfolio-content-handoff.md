# Personal Portfolio Website — Content and CV Handoff

> **Companion file:** `portfolio-implementation-handoff.md`  
> This document supplies the personal content strategy, project inventory, skills taxonomy, and CV recommendations that were intentionally deferred in the implementation handoff.

---

## 1. How This File Relates to the Implementation Handoff

Codex should read both files before changing the site:

1. `portfolio-implementation-handoff.md`
   - controls the stack
   - controls architecture
   - controls visual and accessibility principles
   - controls implementation order
   - controls dependency and scope limits

2. `portfolio-content-handoff.md`
   - controls personal positioning
   - identifies real projects and skills
   - prioritizes what should appear
   - defines what belongs on the website versus the CV
   - supplies initial content direction
   - identifies facts that still require confirmation

Where this file replaces a placeholder from the implementation handoff, use this file.

The implementation handoff's rules against inventing facts, employers, metrics, outcomes, dates, and links remain fully active.

---

## 2. Primary Portfolio Goal

The site should help Can Öcek apply for:

- working-student and part-time roles
- bachelor's thesis opportunities
- early-career technical or technical-business roles
- AI, data, marketing technology, Salesforce, or project-oriented roles
- music, audio, media, and creative-technology collaborations

The portfolio should not force him into a single narrow professional identity.

It should show that his range has a coherent center:

> Can understands systems, connects technical and creative disciplines, and takes responsibility for turning incomplete ideas into working outcomes.

The site should make him appear:

- technically credible
- creatively serious
- strategically aware
- unusually adaptable
- capable of owning ambiguous work
- more substantial than a generic student portfolio

---

## 3. Recommended Positioning

### Core Positioning

Use the following idea as the basis for the site:

> **A multidisciplinary builder working across technology, strategy, and music.**

A slightly more explicit version:

> **I build systems, shape ideas, and make projects work across software, business, and music.**

A more professional CV-oriented version:

> **Management & Technology student with a computer-science foundation and hands-on experience in data systems, AI-assisted retrieval, CRM design, music production, and creative media.**

These are working directions, not immutable final slogans.

### The Unifying Story

The site's narrative should not be:

> “I know many unrelated tools.”

It should be:

> “I can understand the whole system, identify what is missing, and work across disciplines to deliver the result.”

This connects:

- programming
- web scraping
- data architecture
- RAG and LLM systems
- business-model work
- Salesforce
- music performance
- audio production
- photography and video
- maker and engineering projects

### Important Tone

The writing should be:

- direct
- self-assured
- specific
- reflective without being overly personal
- free of corporate clichés
- honest about student or self-directed project contexts

Avoid phrases such as:

- passionate individual
- hardworking team player
- results-driven professional
- coding enthusiast
- lifelong learner
- 10/10 skill ratings
- expert in everything

Show those traits through project evidence instead.

---

## 4. Recommended Portfolio Hierarchy

The website should not give equal weight to every project Can has ever completed.

Use three levels.

### Tier 1 — Flagship Work

These deserve full case-study pages and homepage prominence:

1. Web Intelligence and RAG Pipeline
2. Music Performance and Production
3. One strong business/startup or cross-disciplinary project

### Tier 2 — Supporting Case Studies

These prove range and can receive shorter project pages:

4. Salesforce Record-Label CRM Design
5. Procedural Planet / Chunk Generation Project
6. Algorithm Comparison: Dijkstra and A*
7. Personal Creative Archive or File-Manager Project, once sufficiently developed

### Tier 3 — Archive / Earlier Work

These can appear in a compact timeline or “Earlier experiments” section:

- TÜBİTAK / MEF physics and Arduino project
- university campus application
- Unity game-development experiments
- Minecraft-like procedural chunk and mesh experiments
- Arduino and electronics projects
- 3D printing, Fusion 360, RC aircraft, woodworking, laser cutting, and soldering projects

Do not build full pages for all Tier 3 items unless strong evidence, images, or documentation exists.

---

## 5. Flagship Project 1 — Web Intelligence and RAG Pipeline

### Recommended Public Title

**Web Intelligence and Semantic Retrieval Pipeline**

Alternative:

**Business Insight Generator — Data Collection, Analysis, and RAG**

Use the actual official project name if one exists.

### Why It Should Be the Main Technical Case Study

This is the clearest evidence that Can can work across:

- data collection
- backend architecture
- databases
- LLM-assisted analysis
- retrieval
- systems design
- cost awareness
- teamwork
- presentation

It is more convincing than listing isolated programming languages.

### Known Context

The project was a university team project involving a business-insight or intelligence system.

Can reported doing most of the coding. This must be phrased carefully and should be confirmed before publication.

The system included:

- Python
- Scrapy
- `scrapy-playwright`
- Playwright
- JavaScript-rendered web content
- automatic page scrolling
- interaction with expandable or dynamic page elements
- relational data storage
- PostgreSQL
- pgvector
- vector embeddings
- SQL filtering
- semantic similarity search
- LLM-assisted first-stage analysis
- downstream synthesis
- preservation of source relationships and metadata
- raw and processed data storage
- deduplication or similarity techniques
- SHA-256 usage

Reported project figures include:

- approximately 44,867 raw entries
- approximately 7,615 enriched entries
- approximately USD 1.38 in a referenced processing-cost calculation

**All figures must be verified against the project documentation before publication.**

### Core Problem Narrative

The case study should explain:

1. Web sources contained both static and JavaScript-rendered content.
2. Basic scraping was insufficient for some sources.
3. The system needed traceability between raw data and analysis results.
4. SQL filtering worked for constrained questions but returned too much information for broader multi-company reasoning.
5. Vector embeddings and pgvector enabled semantic ranking and more targeted retrieval.
6. The system combined relational filtering with vector similarity search.

### Recommended Case-Study Structure

#### Context

A university project required collecting heterogeneous public web data and turning it into usable business insights.

#### Problem

The system needed to handle dynamic web content, preserve traceability, and retrieve only the information relevant to a user query.

#### Can's Role

Use verified wording based on the actual team split.

Potential draft:

> I was responsible for a substantial part of the technical implementation, including data collection, storage architecture, retrieval logic, and integration between pipeline stages.

Do not publish “I built everything” unless that is accurate and appropriate.

#### Technical Decisions

Cover:

- why Scrapy was used
- why Playwright was added
- why relational storage mattered
- why raw and processed data were both preserved
- why plain SQL filtering became insufficient
- why pgvector was chosen
- how semantic retrieval complemented metadata filters

#### Outcome

Use only outcomes supported by documentation.

Possible evidence categories:

- working pipeline
- number of collected records
- number of enriched records
- retrieval demonstrations
- project presentation
- cost analysis
- architecture diagram
- sample query and result

#### What It Demonstrates

- Python engineering
- web scraping
- practical browser automation
- SQL and PostgreSQL
- vector search
- LLM system architecture
- technical decision-making
- communicating architecture to non-specialists

### Recommended Media

Include:

- one clean system architecture diagram
- one data-flow diagram
- one screenshot of a retrieved result
- one small metric strip
- optional short code excerpts
- optional before/after explanation of SQL-only versus hybrid retrieval

Do not expose confidential, copyrighted, or sensitive source data.

---

## 6. Flagship Project 2 — Music Performance and Production

### Recommended Public Title

**Music Performance, Arrangement, and Production**

This should not be framed as a casual hobby card.

### Why It Matters

Music is Can's longest-developed discipline and central professional interest.

Relevant experience includes:

- approximately 15 years of guitar
- classical nylon-string guitar
- acoustic steel-string guitar
- electric guitar
- advanced classical repertoire and tremolo technique
- metal rhythm and lead playing
- improvisation
- music theory
- strong ear and intonation
- approximately six years of vocal development
- baritone vocals
- arranging
- recording
- mixing
- live-audio setup
- video production

The exact duration of vocal experience should be confirmed before publication.

### Musical Direction

The site can describe Can's direction as combining:

- low baritone vocals
- intimate or airy vocal textures
- classical and electric guitar technique
- indie, folk, country, ambient, and alternative influences
- restrained arrangements
- production and visual presentation

Avoid publishing an exact vocal range unless it is genuinely useful. It is better suited to a musician bio or technical note than the main CV.

### Tools and Equipment Worth Mentioning

Mention software and production capability, not a full gear inventory.

Relevant tools:

- Reaper
- FL Studio
- DaVinci Resolve
- audio recording and editing
- EQ
- compression
- loudness management
- noise reduction
- microphone technique
- live signal routing

Selected equipment may appear on a music page only where it supports credibility:

- Shure SM57
- Shure SM58
- Rode NT1-A
- Focusrite Scarlett 2i2
- Novation Launchkey 49
- guitar amplification and effects
- Canon EOS 4000D

Do not turn the portfolio into a gear list.

### Recommended Content

The music page should eventually contain:

- a concise artist/creator statement
- selected performance videos
- selected audio recordings
- arrangement notes
- production notes
- guitar and vocal background
- live-performance or session work
- photography/video presentation
- future releases or current creative direction

### Potential Subprojects

Once evidence exists, individual music entries could include:

- a polished cover-video series
- a live-room performance session
- a self-produced original recording
- an arrangement breakdown
- a live-audio setup case study
- a small local-artist session project

### What It Demonstrates

- long-term deliberate practice
- artistic judgment
- technical audio capability
- visual presentation
- self-direction
- integration of multiple creative disciplines
- ability to move from concept to finished media

### Recommended Media

- one strong performance video above the fold
- two or three carefully selected recordings
- high-quality still photographs
- a compact production breakdown
- optional signal-chain or arrangement notes

Quality matters more than quantity.

---

## 7. Flagship Project 3 — Business or Startup Project

### Recommended Working Title

**Startup Concept, Market Analysis, and Five-Minute Pitch**

The exact startup name and concept should be added from the course documents.

### Known Context

The project involved:

- a university startup course
- market analysis
- business-model development
- teamwork
- a maximum five-minute pitch
- script and presentation development
- audio and visual refinement

Project materials referenced Mexico City, but the exact concept should not be inferred without reviewing the original submissions.

### Why It Belongs

This project demonstrates the business side of Can's profile:

- market reasoning
- synthesis
- structured communication
- pitching
- narrative design
- presentation development
- working within strict time constraints
- integrating team contributions

### Required Before Publication

Retrieve and review the actual project documents to determine:

- startup name
- customer problem
- proposed solution
- target market
- Can's role
- research performed
- business model
- final outcome
- pitch visuals
- whether any claims or numbers can be published

### What It Should Demonstrate

- strategic thinking
- business-model reasoning
- concise communication
- presentation design
- team coordination
- ability to transform research into a persuasive narrative

If the project is not strong enough after review, replace it as the third homepage flagship with the Salesforce case study or a future personal project.

---

## 8. Supporting Project — Salesforce Record-Label CRM Design

### Recommended Public Title

**Salesforce CRM Architecture for a Record Label**

### Context

Can completed a two-week Salesforce internship and worked with Salesforce concepts including data modeling, automation, roll-ups, and flows.

A record-label CRM design exercise included entities such as:

- artists
- tracks
- releases
- contracts
- royalties
- campaigns
- events
- streaming reports
- payments

Potential Salesforce objects included standard and custom objects, relationships, automation, formulas, roll-up summaries, and dashboards.

### Important Framing Rule

Do not present the record-label scenario as a deployed client system unless it truly was one.

Use language such as:

- design exercise
- prototype
- internship exercise
- CRM concept
- data-model case study

### Strong Case-Study Angle

Focus on translating a real business domain into:

- a relational object model
- workflows
- role-based access
- automation
- reporting
- clearer operational visibility

### What It Demonstrates

- Salesforce platform understanding
- CRM architecture
- business-process analysis
- data modeling
- automation logic
- ability to bridge technical and commercial needs
- knowledge of music-industry workflows

This is a valuable bridge between Can's technical, business, and music interests.

---

## 9. Supporting Project — Procedural Planet / Chunk Generation

### Recommended Public Title

**Procedural Planet and Chunk-Based World Generation**

### Known Context

This originated as an IB internal-assessment or game-development project.

It involved:

- Unity
- C#
- procedural generation
- chunk-based terrain or planet construction
- flying or movement mechanics
- difficult mesh-handling problems
- game-development experimentation

There were also Minecraft-like chunk-generation experiments.

### Why It Is Useful

It shows that Can's programming history predates the recent AI project and includes:

- spatial reasoning
- algorithms
- debugging
- performance constraints
- geometry
- game systems
- self-directed technical exploration

### Recommended Scope

Use a shorter retrospective page with:

- old screenshots or video if available
- the original technical challenge
- what worked
- what failed
- what Can would change now
- a concise explanation of chunking and mesh generation

Do not spend more homepage space on it than on current work.

---

## 10. Supporting Project — Dijkstra vs. A*

### Recommended Public Title

**Comparing Dijkstra's Algorithm and A* on Procedural Mazes**

### Known Context

This was an IB Extended Essay or substantial school research project.

It compared:

- Dijkstra's algorithm
- A*
- procedural mazes
- pathfinding performance

### Why It Is Useful

It demonstrates:

- algorithmic thinking
- experimental design
- performance comparison
- research writing
- understanding tradeoffs rather than merely implementing an algorithm

### Recommended Presentation

A compact technical retrospective could include:

- research question
- experimental setup
- visualization of explored nodes
- performance comparison
- conclusion
- what Can now understands differently

Use the original paper as the source. Do not invent measured results.

---

## 11. Supporting Project — Personal Creative Archive / File Manager

### Status

**Future or work-in-progress project**

### Known Direction

Can has considered building a personal file-management system combining or organizing:

- Simplenote notes
- music documents
- university documents
- photography files
- creative material

The project was intended to be useful personally and showable on a portfolio site.

### Why It Could Become Strong

It naturally combines:

- information architecture
- personal knowledge management
- search
- file organization
- creative workflows
- potentially embeddings or AI-assisted retrieval
- frontend design
- privacy-conscious local tooling

### Publishing Rule

Do not include it as a completed flagship until a functional version exists.

A WIP badge is acceptable only if there is something meaningful to demonstrate.

---

## 12. Earlier Project and Achievement Inventory

These are potentially valuable, but require verification and careful prioritization.

### TÜBİTAK / MEF Physics and Arduino Project

Known details:

- physics project
- basic Arduino code
- reported first place at MEF

Before publishing, confirm:

- full competition name
- year
- project title
- team composition
- exact award wording
- what Can personally built

This can be a strong early achievement if documented.

### University Campus Application

Known only at a high level.

Before inclusion, determine:

- course
- stack
- problem
- Can's role
- current screenshots or repository
- whether it adds anything not already shown by stronger projects

### Unity and Early Game Projects

Can experimented with:

- a WoW-like project
- procedural environments
- Minecraft-like chunks
- mesh generation

These are useful as a short history of technical curiosity, not necessarily separate portfolio cards.

### Maker Skills and Projects

Relevant experience includes:

- Arduino and electronics
- 3D printing
- Fusion 360
- RC model aircraft
- foamboard modeling
- woodworking
- laser cutting
- soldering

These may appear in an “Additional making” strip or About-page paragraph.

Do not list every tool as a professional-level competency without evidence.

---

## 13. Skills Strategy

The skills section should be evidence-based.

Each prominent skill should connect to a visible project.

Avoid large logo walls or progress bars.

### A. Programming and Data

Strong or well-supported areas:

- Python
- SQL
- PostgreSQL
- Scrapy
- Playwright
- web scraping
- browser automation
- relational data modeling
- vector embeddings
- pgvector
- semantic search
- RAG architecture
- LLM-assisted processing
- Git

Additional programming background:

- Java
- C#
- Unity
- TypeScript
- basic web development
- algorithms and pathfinding

Do not imply identical proficiency across all languages.

### B. AI and Information Systems

Relevant capabilities:

- retrieval-augmented generation
- embedding generation and storage
- semantic similarity search
- hybrid SQL and vector retrieval
- content chunking
- metadata filtering
- LLM pipeline integration
- traceability between raw and processed data
- cost-aware experimentation
- data deduplication concepts

Avoid the vague standalone label “AI expert.”

### C. Business and Platforms

Relevant capabilities:

- business-model development
- market analysis
- startup pitching
- presentation design
- strategic synthesis
- Salesforce data modeling
- Salesforce Flow concepts
- formulas and roll-up summaries
- CRM process design
- marketing-oriented thinking
- cross-functional project work

Use concrete nouns and systems rather than generic “management skills.”

### D. Music and Audio

Relevant capabilities:

- advanced guitar performance
- classical, acoustic, and electric guitar
- vocals
- arrangement
- ear training
- music theory
- recording
- editing
- mixing
- EQ and compression
- noise reduction
- loudness management
- live-audio routing
- Reaper
- FL Studio

Use “advanced” selectively. Guitar has the strongest basis for that label.

### E. Visual and Media

Relevant capabilities:

- concert photography
- music-video production
- video editing
- DaVinci Resolve
- camera operation
- lighting
- audio-video synchronization
- presentation graphics
- diagrams
- visual storytelling

### F. Design and Making

Relevant capabilities:

- Fusion 360
- 3D printing
- prototyping
- basic electronics
- Arduino
- soldering
- woodworking
- laser cutting
- RC and foamboard construction

These should be secondary unless applying to a maker, product, or engineering-oriented role.

### G. Languages

Known:

- Turkish — native
- English — fluent
- German — intermediate

Confirm the preferred German CEFR level before publishing one.

---

## 14. How Skills Should Appear on the Website

Recommended grouping:

```text
Software & Data
AI & Retrieval Systems
Business & CRM
Music & Audio
Visual Media
Making & Prototyping
```

Each group should contain no more than approximately six to ten visible items.

The site can provide a fuller expandable inventory later, but the first view should stay selective.

### Recommended Evidence Links

Examples:

- Python → RAG pipeline
- PostgreSQL → RAG pipeline
- pgvector → RAG pipeline
- Scrapy and Playwright → RAG pipeline
- Salesforce → CRM case study
- market analysis → startup project
- guitar, vocals, and mixing → music page
- DaVinci Resolve → music and pitch media
- Unity and C# → procedural-generation project
- algorithms → Dijkstra/A* project

This is more credible than isolated badges.

---

## 15. Personal Working Style

Can's working style can be described using evidence from his projects.

Recommended themes:

- systems thinking
- operational awareness
- multidisciplinary problem-solving
- rapid learning
- technical-business translation
- ownership of ambiguous gaps
- facilitative leadership
- practical execution
- adaptability
- attention to both structure and presentation

A useful internal phrase is:

> **I make things happen.**

For public copy, expand it into something more specific:

> I tend to understand the wider system, identify the missing pieces, and either build them myself or coordinate the work needed to move the project forward.

Do not present this as an unsupported personality claim. Connect it to examples.

---

## 16. Education Strategy

### Known Education

- Technische Universität München
- Management & Technology / TUM-BWL
- previously studied Informatik for three semesters before switching
- technical foundation remains relevant to current work

### Recommended CV Presentation

List the current degree clearly.

Example structure:

```text
B.Sc. Management & Technology
Technical University of Munich
[Start year]–[Expected graduation date]
Relevant focus: [confirm]
```

Do not publish the exact expected graduation date until confirmed.

### Whether to Mention the Informatik Start

On a one-page CV:

- usually do not create a separate incomplete-degree entry
- let technical projects and skills demonstrate the computer-science foundation

On the About page:

- it can be part of a coherent narrative
- explain that Can began in Informatik and later moved into Management & Technology while continuing to build technical systems

The tone should be intentional, not apologetic.

---

## 17. Experience Strategy

Known experience includes:

- a two-week Salesforce internship
- university team projects
- music performance and production
- photography and video work
- self-directed technical projects

### Salesforce Internship

Include it in the CV if there is enough concrete content.

The entry should focus on:

- platform exposure
- data modeling
- CRM workflows
- automation concepts
- any actual tasks performed

Do not pad a short internship with inflated claims.

### Project Experience

For a student CV, substantial projects can carry nearly as much weight as employment.

Use a section titled:

- Selected Projects
- Technical & Creative Projects
- Project Experience

### Music and Freelance-Like Work

Include performance, production, photography, or video work only where there is concrete output.

It may appear as:

- Creative Work
- Selected Media Work
- Music & Production

Avoid calling work “freelance” unless it was genuinely undertaken in that form.

---

## 18. Recommended One-Page CV Structure

The downloadable CV should be more focused than the website.

### Header

Include:

- Can Öcek
- Munich, Germany
- email
- portfolio URL
- LinkedIn
- GitHub
- optional music link when relevant

Do not include:

- full street address
- photograph unless deliberately chosen for the German market
- age
- marital status
- nationality unless administratively necessary
- unnecessary personal data

### Profile Summary

Use two or three lines.

Draft:

> Management & Technology student at TUM with a computer-science foundation and hands-on experience building data pipelines, AI-assisted retrieval systems, CRM models, and creative media. Strong at connecting technical implementation with business context and taking ownership of ambiguous project needs.

Refine after the target role is known.

### Education

Include:

- current TUM degree
- expected graduation date once confirmed
- selected relevant coursework only if useful
- no long course list

### Experience

Include:

- Salesforce internship
- any later relevant employment
- concrete creative or technical work where appropriate

### Selected Projects

Prioritize:

1. Web Intelligence and RAG Pipeline
2. Startup / business project or Salesforce CRM case study
3. Music performance and production, when relevant to the application
4. Procedural generation or pathfinding research, if space permits

Each entry should include:

- project name
- context
- one line on the problem
- one or two lines on Can's contribution
- stack
- one verified result

### Skills

Use grouped text, not charts.

Example:

```text
Programming & Data: Python, SQL, PostgreSQL, Scrapy, Playwright, pgvector, Git
AI Systems: RAG, embeddings, semantic search, LLM pipelines
Business Platforms: Salesforce, CRM data modeling, Flow concepts
Creative: Reaper, FL Studio, DaVinci Resolve, audio production, photography
Languages: Turkish (native), English (fluent), German ([confirm level])
```

### Optional Interests

For a general CV, a small interests line can include:

- music performance and production
- photography
- sailing
- making and prototyping

Do not let interests displace evidence.

---

## 19. Recommended CV Variants

Maintain one source-of-truth CV and export targeted versions.

### Technical / AI Version

Emphasize:

- Python
- scraping
- PostgreSQL
- pgvector
- RAG
- retrieval
- system architecture
- algorithms
- GitHub links

### Technical-Business / Salesforce Version

Emphasize:

- Management & Technology
- CRM design
- Salesforce internship
- data modeling
- workflows
- business analysis
- pitching
- technical-business translation

### Creative Technology / Music Version

Emphasize:

- music performance
- recording
- production
- video
- audio systems
- creative project ownership
- technical tools supporting media work

The website can remain broad. The PDF CV should adapt to the opportunity.

---

## 20. Recommended Homepage Content Order

The homepage should tell a coherent story in this order:

### 1. Hero

Include:

- name
- one-line positioning
- concise supporting paragraph
- links to Work and Music

Draft direction:

> I build systems, shape ideas, and make projects work across technology, strategy, and music.

Supporting direction:

> I am a Management & Technology student at TUM with a computer-science foundation, working across data systems, AI-assisted retrieval, business projects, music, and media production.

### 2. Featured Work

Show three projects:

1. RAG pipeline
2. Music performance and production
3. startup or Salesforce project

### 3. Working Across Disciplines

A short section explaining the shared method:

- understand the system
- find the bottleneck
- choose the right tools
- execute across boundaries
- communicate the result

### 4. Music Feature

Music deserves a substantial visual section, not a small hobby badge.

Include:

- one performance or image
- a concise statement
- a link to the full music page

### 5. Selected Capabilities

Use grouped capabilities tied to projects.

### 6. About Preview

Include:

- TUM
- Munich
- multidisciplinary background
- current direction

### 7. Contact

Simple invitation to discuss:

- project work
- internships
- bachelor's theses
- creative collaboration

Do not claim availability unless confirmed.

---

## 21. Recommended Work Index

The Work page should support categories such as:

- Software & Data
- AI Systems
- Business & Strategy
- Music & Audio
- Creative Media
- Earlier Technical Work

Do not implement complicated filtering until enough projects exist.

Initially, editorial grouping is enough.

Recommended first visible set:

1. Web Intelligence and RAG Pipeline
2. Music Performance and Production
3. Startup Course Project
4. Salesforce Record-Label CRM
5. Procedural Planet Generation
6. Dijkstra vs. A*

The WIP file-manager project should appear only once demonstrable.

---

## 22. Recommended About-Page Content

The About page should explain the trajectory without becoming an autobiography.

Suggested structure:

### Opening

Can works across technology, business, and music, with a tendency to move toward the difficult gaps between disciplines.

### Education and Technical Foundation

He began studying Informatik at TUM and later moved into Management & Technology, retaining the technical side through programming and systems projects.

### How He Works

He is strongest when:

- the problem is ambiguous
- multiple disciplines must connect
- someone must understand the full system
- missing pieces need to be built
- technical work must be explained clearly

### Creative Center

Music is the longest-running and most personally important discipline, supported by years of guitar, vocals, arrangement, recording, and production.

### Current Direction

This section must be updated once Can decides what opportunities he wants the site to prioritize.

Potential categories:

- AI and data systems
- Salesforce and technical-business roles
- marketing technology
- music production
- creative technology
- bachelor's thesis projects

---

## 23. Recommended Music-Page Structure

### Hero Media

One strongest recording or performance.

### Short Music Statement

Focus on Can's combination of:

- guitar
- baritone vocals
- arrangement
- production
- restrained emotional presentation

### Selected Performances

Use a small curated set.

### Production and Audio

Show:

- recording
- mixing
- live setup
- DAW work
- arrangement decisions

### Visual Work

Include music photography and video where relevant.

### Current Direction

Possible future elements:

- original releases
- cover series
- live-room sessions
- collaborations
- local artist sessions

Do not publish planned work as completed work.

---

## 24. Content That Should Not Be Included

Do not include personal information merely because it exists in conversation history.

Exclude:

- mental-health history
- trauma
- relationship history
- sexual orientation unless Can explicitly chooses to include it
- substance history
- detailed medical information
- gaming history as a central professional section
- political opinions
- precise home address
- irrelevant administrative history
- university difficulties or lost credits
- private family information

Also avoid:

- exhaustive gear lists
- every hobby
- every programming experiment
- unsupported proficiency ratings
- generic personality-test language
- long lists of course modules
- screenshots without explanation
- confidential university or company material

---

## 25. Facts That Must Be Confirmed Before Publication

Codex must preserve these as TODOs rather than guessing:

- exact degree title formatting
- degree start date
- expected graduation date
- relevant study focus or specialization
- exact Salesforce internship dates
- internship company name, if publishable
- exact internship responsibilities
- final title of the RAG project
- exact team size
- precise ownership of each technical component
- all RAG project metrics
- whether project repositories can be made public
- startup project name and concept
- startup project role and outcome
- exact music links
- exact number of years of vocal experience
- German language level
- LinkedIn URL
- GitHub URL
- contact email
- award title and year for the MEF/TÜBİTAK project
- copyright and confidentiality status of images and diagrams
- which projects may be shown publicly

---

## 26. Project Content Data Recommendations

The implementation handoff defined a project content collection.

Use the existing schema, but consider these additional optional fields:

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

  // Recommended additions
  context?: string;
  contribution?: string[];
  highlights?: string[];
  verificationStatus?: "verified" | "needs-review";
  confidential?: boolean;
}
```

Do not expose `verificationStatus` publicly unless useful.

It can be used internally to prevent unfinished claims from being published.

---

## 27. Recommended Initial Project Slugs

Use stable, descriptive slugs:

```text
web-intelligence-rag-pipeline
music-performance-production
startup-course-project
salesforce-record-label-crm
procedural-planet-generation
dijkstra-vs-a-star
personal-creative-archive
```

The startup slug can be renamed once its actual name is confirmed.

---

## 28. Recommended Initial Content Status

### Ready for a Draft Page

- Web Intelligence and RAG Pipeline
- Music Performance and Production
- Salesforce Record-Label CRM
- Procedural Planet Generation
- Dijkstra vs. A*

### Requires Source Documents Before Meaningful Drafting

- Startup Course Project
- TÜBİTAK / MEF Project
- University Campus Application

### Future / Work in Progress

- Personal Creative Archive / File Manager
- cover-video series
- live-room artist sessions
- original music releases

---

## 29. Codex Content Rules

When implementing content from this file:

1. Do not invent missing facts.
2. Use TODO markers for unresolved details.
3. Keep unverified metrics out of prominent public copy.
4. Mark source-dependent projects as drafts.
5. Do not publish confidential code or documents.
6. Preserve the distinction between professional, academic, personal, and training work.
7. Do not describe prototypes as deployed products.
8. Do not describe plans as completed projects.
9. Do not flatten every skill to the same level.
10. Keep music central to the site's identity.
11. Keep the RAG pipeline as the main technical case study.
12. Keep the site coherent around systems thinking and multidisciplinary execution.
13. Prefer evidence over adjectives.
14. Keep CV content more selective than website content.
15. Keep sensitive personal history out of the site.

---

## 30. Recommended Next Codex Prompt

```text
Read both:
- portfolio-implementation-handoff.md
- portfolio-content-handoff.md

Use the implementation handoff for architecture, stack, design, accessibility,
and scope. Use the content handoff for positioning, project priorities, skills,
and CV structure.

Replace generic placeholder content with careful first-draft content only where
the content handoff provides enough verified information.

Create draft project entries for:
1. Web Intelligence and RAG Pipeline
2. Music Performance and Production
3. Salesforce Record-Label CRM
4. Procedural Planet Generation
5. Dijkstra vs. A*

Do not create substantive startup-project copy until its source documents are
provided.

Requirements:
- preserve TODO markers for unconfirmed facts
- do not invent dates, outcomes, employers, awards, links, or metrics
- distinguish academic, personal, internship, and training projects
- keep the RAG project as the main technical case study
- treat music as a central discipline
- keep the CV selective and role-oriented
- connect skills to project evidence
- keep sensitive personal information out of the site

After editing:
- run Astro checks
- run the production build
- fix all errors
- list every remaining factual TODO
```

---

## 31. Recommended Content-Collection Drafts

The first project entries should contain concise, layout-ready summaries rather than complete final case studies.

### Web Intelligence and RAG Pipeline

Draft description:

> A university-built data pipeline that collected static and JavaScript-rendered web content, preserved traceable raw and processed records, and combined PostgreSQL filtering with pgvector semantic retrieval for downstream business analysis.

Draft role:

> Technical implementation across data collection, storage, and retrieval. Exact team responsibilities require confirmation.

### Music Performance and Production

Draft description:

> A long-term body of work spanning classical, acoustic, and electric guitar, baritone vocals, arrangement, recording, mixing, live audio, and music-focused video production.

Draft role:

> Performer, arranger, recording engineer, producer, and video creator.

### Salesforce Record-Label CRM

Draft description:

> A Salesforce data-model and workflow design for managing artists, releases, contracts, royalties, campaigns, events, and reporting within a record-label context.

Draft role:

> CRM and data-model design in an internship or training context. Exact scope requires confirmation.

### Procedural Planet Generation

Draft description:

> A Unity and C# project exploring chunk-based procedural planet generation, mesh construction, and flight within a generated environment.

Draft role:

> Solo student developer. Confirm the original project context and final scope.

### Dijkstra vs. A*

Draft description:

> A research project comparing Dijkstra's algorithm and A* across procedurally generated mazes, focusing on search behavior, performance, and tradeoffs.

Draft role:

> Researcher and developer. Results must be sourced from the original paper.

---

## 32. Final Strategic Recommendation

The strongest version of this portfolio is not a conventional developer page with a music tab attached.

It should communicate:

> Can is a technically capable generalist whose deepest strengths are systems thinking, creative judgment, and the ability to operate between disciplines.

The portfolio should prove this through three visible pillars:

1. **Systems**  
   Data pipelines, retrieval, software, databases, Salesforce, algorithms.

2. **Strategy**  
   Business analysis, startup work, communication, project structure, technical-business translation.

3. **Sound and Media**  
   Guitar, vocals, arrangement, recording, production, photography, and video.

The site succeeds when these pillars feel like parts of one person rather than unrelated collections of skills.
