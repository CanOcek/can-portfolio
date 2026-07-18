# Business Development Radar Context

This folder converts the final project report into repo-native Markdown context for future development sessions.

Primary source: `docs/Business Development Radar - Project Study.docx`.

PDF fallback: `docs/Business Development Radar - Project Study Report.pdf` was not needed. The DOCX extraction preserved the relevant tables, figure captions, and embedded media; the embedded images were checked for architecture, LLM flow, UI screenshots, PDF parsing example, and appendix crawling flow.

The application code lives in two sibling repositories:

- `busdevrad-collector`: current source of truth for data collection, processing, persistence, LLM1 enrichment, embedding jobs, scheduling, schema, and evaluation-oriented exports.
- `streamlit-radar-demo`: Streamlit dashboard, user-facing retrieval/synthesis flows, UI presentation, and deployment support.

The older `business-development-radar` folder was the previous combined
workspace. Do not treat it as the active handoff target for new backend work.

These docs intentionally avoid a full code inspection. They document the intentions, constraints, and design rationale from the report so future sessions can inspect code with the correct project model in mind.

## File Map

- [01-project-purpose-and-scope.md](01-project-purpose-and-scope.md): project goal, users, prototype scope, and non-goals.
- [02-legal-source-governance.md](02-legal-source-governance.md): source assessment criteria, risk classes, exclusions, and responsible access rules.
- [03-system-architecture.md](03-system-architecture.md): six-layer architecture and rationale for staged processing.
- [04-data-ingestion-and-preparation.md](04-data-ingestion-and-preparation.md): source selection, scraping methods, HTML/PDF processing, persistence, deduplication, and North Data.
- [05-llm1-signal-classification.md](05-llm1-signal-classification.md): LLM1 task, taxonomy, output schema, prompt rationale, ambiguity handling, and cost design.
- [06-retrieval-and-llm2-synthesis.md](06-retrieval-and-llm2-synthesis.md): metadata retrieval, vector retrieval, embeddings, LLM2 synthesis, and synthesis risks.
- [07-ui-and-user-workflows.md](07-ui-and-user-workflows.md): target users, layered interaction model, six-tab Streamlit structure, and evidence review intent.
- [08-evaluation-limits-future-work.md](08-evaluation-limits-future-work.md): quantitative results, stakeholder validation, errors, limitations, and future work.

## Core Mental Model

The Business Development Radar transforms public company information into evidence-backed business development signals.

It is not a single "AI summary" feature. It is a staged pipeline:

1. Collect public company data from selected, legally assessed sources.
2. Clean, parse, deduplicate, segment, and persist raw/processed content.
3. Run LLM1 on individual evidence units to classify signals into structured records.
4. Store and retrieve enriched records with metadata filters and vector search.
5. Run LLM2 over retrieved LLM1 records to synthesize company-level findings.
6. Present takeaways, grouped findings, evidence, and company context in
   Streamlit.

The key design principle is traceability: high-level business conclusions should remain connected to stored evidence records rather than appearing as unsupported model output.
