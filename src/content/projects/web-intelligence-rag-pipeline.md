---
title: "Business Development Radar: Web Intelligence and RAG Pipeline"
description: "A RAG-based business-development radar that collected public company data, classified strategic signals with an LLM, retrieved evidence through PostgreSQL and pgvector, and synthesized company-level insights in a Streamlit dashboard."
categories:
  - Software & Data
  - AI Systems
  - Business Intelligence
technologies:
  - Python
  - Scrapy
  - Playwright
  - Trafilatura
  - IBM Docling
  - PostgreSQL
  - pgvector
  - OpenAI embeddings
  - GPT-4.1 mini
  - Streamlit
role: "Technical implementation across public-source collection, document processing, deduplication, LLM signal classification, vector retrieval, synthesis, and the Streamlit prototype workflow."
featured: true
status: "Source-backed draft with result visuals and demo placeholder"
draft: true
date: "2025 - 2026"
cover:
  src: "/images/projects/radar-extracted/radar-pdf-obj-203.png"
  alt: "Six-layer architecture diagram for the Business Development Radar pipeline."
  caption: "Six-layer architecture: collection, processing, signal classification, vector retrieval, synthesis, and user interface."
visual:
  kind: "pipeline"
  label: "Radar architecture"
  caption: "The pipeline turns public company sources into structured evidence, semantic retrieval, and company-level business-development recommendations."
---

## What I Built

This project explored how a business development team could monitor public company activity without manually reading scattered websites, job pages, press releases, annual reports, RSS feeds, and registry records. The prototype was built around a Plan.Net TechNest use case: surface developments that might matter for digital transformation, marketing technology, platform, data, commerce, or product opportunities.

The goal was not to create an autonomous sales-decision system. The goal was to build an evidence-backed radar: collect public information, filter it aggressively, preserve traceability, and help a human reviewer see why a company may be worth attention.

## Results At A Glance

The final prototype monitored `21` companies across `67` configured public web sources and `18` North Data integrations. Most collected material was intentionally rejected before synthesis because the useful business-development signals were sparse.

<figure class="benchmark-figure">
  <img src="/images/projects/radar-presentation/evaluation-summary.jpg" alt="Evaluation summary showing 13,753 classified evidence units, 1,523 useful signals, 646 main signals, 877 weak signals, 537 duplicate pages removed, and 54.41 times less LLM2 input." />
  <figcaption>Final presentation evaluation: LLM1 classified 13,753 evidence units, retained 1,523 useful signals, filtered roughly 12,230 records as noise, and reduced downstream synthesis input by 54.41x.</figcaption>
</figure>

| Area | Result |
| --- | ---: |
| Companies monitored | 21 |
| Configured public web sources | 67 |
| North Data sources integrated | 18 |
| PDFs collected | 872 |
| PDF segments parsed | 11,460 |
| LLM1 evidence units classified | 13,753 |
| Useful signals retained | 1,523 |
| Main signals | 646 |
| Weak signals | 877 |
| Duplicate web pages removed | 537 |
| Webpage bloat avoided | 23.3% |
| LLM1 classification cost | about USD 32 |
| LLM2 input reduction | 54.41x |

## System Architecture

The system was designed as a staged RAG pipeline rather than one large prompt over raw web data. Each stage reduced noise, added metadata, and made the next stage cheaper and easier to verify.

![Business Development Radar architecture diagram](/images/projects/radar-extracted/radar-pdf-obj-203.png)

The six layers were:

- Public-source collection from official websites, RSS feeds, job pages, public reports, North Data records, and selected dynamic pages.
- Processing with HTML extraction, PDF parsing, segmentation, chunking, normalization, and deduplication.
- LLM1 signal classification on individual evidence units.
- PostgreSQL and pgvector storage for metadata filtering and semantic retrieval.
- LLM2 company-level synthesis over retrieved classified signals.
- A Streamlit dashboard for takeaways, grouped findings, evidence review, company context, financial metrics, and patents or trademarks.

## Source Collection And Governance

The source layer used Scrapy, Playwright, sitemap crawling, RSS ingestion, public PDF discovery, and North Data API retrieval. Candidate sources were reviewed for posting frequency, signal category, `robots.txt`, legal notice, RSS availability, sitemap suitability, and business relevance before integration.

<figure class="benchmark-figure">
  <img src="/images/projects/radar-presentation/source-count-per-scraping-method.png" alt="Bar chart showing source counts by scraping method: recursive 20, sitemap 18, single site PDF 11, Playwright 9, RSS feed 5, and Playwright with item interaction 4." />
  <figcaption>The final 67 configured public web sources used different collection strategies depending on source structure and technical constraints.</figcaption>
</figure>

The pipeline avoided private or restricted sources. LinkedIn and Cloudflare-protected sources were excluded where access would require login, scraping circumvention, or profile-level personal data. That constraint was treated as part of the system design, not an afterthought.

## Processing Public Web And PDF Data

Processing focused on reducing noisy input before any expensive model call:

- Trafilatura extracted main text from web pages.
- CSS selectors were used where deterministic extraction was worth the source-specific effort.
- IBM Docling parsed PDFs into structured segments.
- GPT-4.1 mini generated chart and figure descriptions for selected PDF visuals.
- URL normalization, exact hashes, and MinHash LSH removed duplicate or near-duplicate pages.
- Old articles, low-signal job titles, unrelated sections, and irrelevant domains were filtered before enrichment.

<figure class="benchmark-figure">
  <img src="/images/projects/radar-presentation/pdf-processing-results.png" alt="PDF processing chart showing 872 collected PDF rows, 858 parsed PDFs, 11,460 LLM1-ready segments, 65,499 raw PDF chunks, a 98 percent parsed PDF rate, 13.4 average segments per parsed PDF, and 5.7 average chunks per segment." />
  <figcaption>Docling parsed 858 of 872 collected PDF rows into 11,460 LLM1-ready segments. PDF reports were important because they often contained structured strategic and financial evidence.</figcaption>
</figure>

## LLM1: Signal Classification

The first LLM stage classified individual evidence units before anything reached company-level synthesis. This was the main noise-control layer.

![LLM1 signal classification workflow](/images/projects/radar-extracted/radar-pdf-obj-270.png)

LLM1 used GPT-4.1 mini to assign each record to `main`, `weak`, or `noise`. Relevant records also received structured fields such as category, direction, confidence, evidence, short summary, why it matters for Plan.Net TechNest, and a possible business suggestion.

Signal categories included financials, news and products, partnerships and acquisitions, hiring, innovative themes, and legal or C-level updates. This stage deliberately allowed most records to be rejected as noise so later retrieval and synthesis could work with a smaller, more inspectable evidence base.

## Retrieval And Synthesis

The retrieval layer combined SQL filters with vector search. Raw chunks, LLM1 summary fields, and combined enrichment blocks were embedded with `text-embedding-3-large` and stored in PostgreSQL using pgvector. Keeping structured metadata and embeddings in the same database made it possible to filter by company, source type, category, signal strength, confidence, and direction before semantic search.

LLM2 then synthesized a company-level view from retrieved LLM1 outputs rather than raw unfiltered web dumps. The synthesis output included a BD outlook, key takeaways, grouped findings, top opportunities, emerging opportunities, risks, and suggested follow-up actions.

<figure class="benchmark-figure">
  <img src="/images/projects/radar-presentation/llm2-input-reduction.png" alt="Bar chart comparing LLM2 input volume: 318.2k tokens for relevant summarized text, 2.7 million tokens for relevant raw text, and 17.3 million tokens for relevant and noise raw text." />
  <figcaption>The staged design reduced LLM2 input from 17.3M raw relevant-and-noise tokens to 318.2k summarized relevant tokens, a 54.41x reduction.</figcaption>
</figure>

## Dashboard Workflow

The Streamlit dashboard was built for review rather than passive reporting. A user could move from a high-level company outlook into grouped findings, supporting evidence, company structure, financial metrics, and patent or trademark context.

![Streamlit dashboard showing business development key takeaways](/images/projects/radar-extracted/radar-pdf-obj-320.png)

The trust model was the important part: final recommendations were not standalone generated prose. Every finding could be traced back through LLM2 reasoning, LLM1 signal records, and the original public evidence fragment.

## Signal Distribution

The retained signal set was uneven across companies and categories, which is expected in a radar workflow. Some companies produced many useful public signals, while others had sparse or legally constrained source coverage.

<figure class="benchmark-figure">
  <img src="/images/projects/radar-presentation/company-data-breakdown.png" alt="Stacked bar chart showing useful LLM1 signals by company and primary category, with BMW at 305 relevant entries, Olympus at 255, Lufthansa at 145, Raiffeisen at 114, and EON at 105." />
  <figcaption>Useful LLM1 signals by company and primary category. For public presentation, company-specific findings should be shown carefully or anonymized where needed.</figcaption>
</figure>

## Scoped Portfolio Demo Plan

The portfolio demo should be interactive but bounded. It should not run live LLM synthesis on demand. Instead, it should use a small redacted dataset with pre-generated company-level outputs, while making the retrieval layer visible.

The first demo version should support:

- Company selection across a small anonymized or approved sample.
- Category and signal-strength filters over pre-generated LLM1 records.
- Functional semantic search over local embeddings or a lightweight browser-side similarity index.
- A pre-generated synthesis panel that changes only when the selected company changes.
- Evidence drill-down showing the source fragment, LLM1 classification, confidence, and why the signal matters.

That would demonstrate the actual product logic without exposing private business context, internal prompts, live API keys, or unbounded generation.

## What I Would Improve Next

The prototype showed that a public-source RAG radar can produce useful, traceable company intelligence, but several areas would need hardening before production use:

- Stronger evaluation with reviewer labels and repeatable quality benchmarks.
- Automated source discovery and refresh scheduling.
- A reliability layer for synthesis-quality checks and prompt-version comparison.
- Proactive alerting when new high-confidence signals appear.
- Vector clustering for emerging themes across companies.
- More careful public-facing redaction of company-specific examples and internal business context.
