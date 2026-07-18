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
status: "Source-backed draft, media and public wording pending"
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

## Context

This project explored how a business development team could monitor public company activity without manually reading scattered websites, reports, job postings, press releases, RSS feeds, and registry data. The prototype was built around a Plan.Net TechNest use case: find signals that might matter for future digital transformation, marketing technology, platform, data, commerce, or product opportunities.

The goal was not to create a fully automated sales decision-maker. The goal was to build an evidence-backed radar: collect public information, filter it aggressively, preserve traceability, and help a human reviewer understand why a company might be worth attention.

## System Architecture

The system was designed as a staged RAG pipeline rather than a single large prompt over raw web data. Each stage reduced noise, preserved metadata, and made the next stage cheaper and easier to verify.

![Business Development Radar architecture diagram](/images/projects/radar-extracted/radar-pdf-obj-203.png)

The six main layers were:

- Data collection from official websites, RSS feeds, public reports, job pages, North Data records, and selected dynamic pages.
- Processing with HTML extraction, PDF parsing, chunking, metadata normalization, and deduplication.
- LLM1 signal classification on individual evidence units.
- PostgreSQL and pgvector storage for metadata filtering and semantic retrieval.
- LLM2 company-level synthesis over retrieved classified signals.
- A Streamlit dashboard for key takeaways, findings, evidence review, company context, financial metrics, and patents or trademarks.

## Data Collection And Preparation

The collection layer used a mix of Scrapy, Playwright, sitemap crawling, RSS ingestion, public PDF discovery, and North Data API retrieval. The final source configuration covered 67 public sources across recursive crawlers, sitemaps, RSS feeds, PDF collection, and dynamic web pages.

![Recursive crawling workflow used by the ingestion layer](/images/projects/radar-extracted/radar-pdf-obj-494.png)

The pipeline avoided private or restricted sources. LinkedIn and Cloudflare-protected sources were excluded where access would require login, scraping circumvention, or profile-level personal data. The project emphasized public, company-level information and kept source governance separate from technical feasibility.

Processing focused on reducing noisy input before any expensive model call:

- Trafilatura extracted main text from web pages.
- IBM Docling parsed PDFs while preserving structure, headings, tables, and figures.
- GPT-4.1 mini generated chart and figure descriptions for selected PDF visuals.
- URL normalization, exact content hashes, and MinHash LSH removed duplicate or near-duplicate pages.
- Older web pages and reports were filtered by recency rules before enrichment.

![Parsed report segment with generated chart description](/images/projects/radar-extracted/radar-pdf-obj-254.png)

## LLM1 Signal Classification

The first LLM stage classified individual pieces of evidence before anything reached the company-level synthesis step. This was the main noise-control layer.

![LLM1 signal classification workflow](/images/projects/radar-extracted/radar-pdf-obj-270.png)

LLM1 used GPT-4.1 mini to assign each record to `main`, `weak`, or `noise`. Relevant records also received structured fields such as category, direction, confidence, evidence, short summary, why it matters for Plan.Net TechNest, and a possible business suggestion.

The signal categories were:

- Financials
- News and products
- Partnerships and acquisitions
- Hiring
- Innovative themes
- Legal and C-level updates

This stage deliberately allowed many records to be rejected as noise. That made the later RAG step smaller, cheaper, and easier to inspect.

## Retrieval And Synthesis

The retrieval layer combined SQL filters with vector search. Raw chunks, LLM1 summary fields, and combined enrichment blocks were embedded with `text-embedding-3-large` and stored in PostgreSQL using pgvector. Keeping structured metadata and embeddings in the same database made it possible to filter by company, source type, category, signal strength, confidence, and direction before semantic search.

LLM2 then synthesized a company-level view from retrieved LLM1 outputs rather than raw unfiltered web dumps. The synthesis output included an executive summary, strategic direction, grouped findings, top opportunities, emerging opportunities, risks, and suggested actions.

This two-stage design was important: LLM1 judged small evidence units, while LLM2 reasoned across the retained evidence for a company.

## Dashboard Workflow

The Streamlit dashboard was built for review rather than passive reporting. A user could move from a high-level company outlook into grouped findings, supporting evidence, company structure, financial metrics, and patent or trademark context.

![Streamlit dashboard showing business development key takeaways](/images/projects/radar-extracted/radar-pdf-obj-320.png)

The main tabs were:

- Key Takeaways
- Findings
- Evidence
- Company Structure
- Financial Metrics
- Patents and Trademarks

This separation kept generated synthesis distinct from source records and registry data, which made the prototype easier to audit.

## Evaluation

The final report measured the pipeline across collection, deduplication, classification, embeddings, and synthesis cost.

| Area | Result |
| --- | ---: |
| Web pages collected | 2,330 |
| PDFs collected | 872 |
| PDF segments parsed | 11,460 |
| North Data publications | 211 |
| Other North Data records | 1,167 |
| Duplicate web pages removed | 537 |
| LLM1 records classified | 13,753 |
| Useful signals retained | 1,523 |
| Main signals | 646 |
| Weak signals | 877 |
| Noise records | 12,230 |
| LLM1 classification cost | USD 32.15 |
| Raw chunk embeddings | 44,867 |
| Enrichment embeddings | 7,615 |
| Embedding cost | USD 1.38 |

Deduplication removed 537 duplicate web pages, which would otherwise have increased the web dataset by 23.3 percent. LLM1 retained about 11.1 percent of classified entries as useful signals, showing how much public-source material had to be filtered before it became useful for business development analysis.

The staged design also reduced the amount of text that later synthesis had to handle. Passing only LLM1 useful-signal content was about 54 times smaller than sending the unfiltered corpus into the synthesis layer.

## What I Would Improve Next

The prototype showed that a public-source RAG radar can produce useful, traceable company intelligence, but several areas would need hardening before production use.

The next improvements would be:

- Stronger evaluation with reviewer labels and repeatable quality benchmarks.
- More automated source discovery and refresh scheduling.
- More robust alerting when new high-confidence signals appear.
- Better prompt-version tracking and comparison.
- Parallelized scraping and batched LLM1 processing for scale.
- A conversational interface for asking evidence-backed follow-up questions.
- More careful public-facing redaction of company-specific examples and internal business context.
