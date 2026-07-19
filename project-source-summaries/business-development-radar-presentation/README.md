# Business Development Radar Presentation Extraction

Source document:

- `../docs/Presentation.pptx` from the shared workspace root.

Extraction date:

- 2026-07-18

Purpose:

- Preserve knowledge from the final Business Development Radar presentation for future work on the `can-portfolio` project page.
- Treat this as presentation-derived reference material, separate from the older report-derived notes in `pdfs/business development radar docs`.

Extraction method:

- Slide XML text was extracted from the PPTX archive.
- Speaker notes were extracted from `ppt/notesSlides`.
- Important visual-only slides were inspected manually from embedded media, including the business challenge, objective, research gap, architecture, legal review, source strategy, source-count chart, PDF processing chart, two-step LLM workflow, input-reduction chart, evaluation slide, and company data breakdown.
- The deck did not contain separate chart workbook XML. Several charts are embedded as images, so chart facts here come from manual inspection of those slide images.

## File Map

- [01-project-story-and-positioning.md](01-project-story-and-positioning.md): problem, objective, research gap, contribution, and public page angle.
- [02-pipeline-and-data-collection.md](02-pipeline-and-data-collection.md): architecture, legal/source governance, scraping methods, North Data, processing, filtering, and deduplication.
- [03-ai-retrieval-synthesis-and-ui.md](03-ai-retrieval-synthesis-and-ui.md): database retrieval, vector search, LLM1, LLM2, traceability, and prototype UI outputs.
- [04-results-evaluation-and-next-steps.md](04-results-evaluation-and-next-steps.md): quantitative metrics, company breakdown, validation, limitations, future work, and publication guardrails.

## Repository Mapping

Use this mapping when turning the notes into portfolio content:

- `busdevrad-collector`: data collection, source configuration, scraping, processing, persistence, filtering, deduplication, North Data ingestion, LLM1 classification, embeddings, and related jobs.
- `streamlit-radar-demo`: retrieval, LLM2 synthesis, evidence-backed result presentation, and the Streamlit frontend prototype.
- `can-portfolio`: future public-facing case study page and supporting project assets.

## Core Presentation Message

The Business Development Radar is an end-to-end AI workflow for turning public company information into traceable business-development signals. It monitors public sources, cleans and structures raw data, classifies evidence units with a first LLM, retrieves relevant structured signals with SQL and vector search, synthesizes a company-level business picture with a second LLM, and presents the results in a review-oriented dashboard.

The strongest portfolio framing is not "AI summary tool." The stronger claim is:

- A staged, evidence-backed RAG pipeline for business development intelligence, built with public-source collection, structured signal classification, vector retrieval, company-level synthesis, and traceable evidence review.
