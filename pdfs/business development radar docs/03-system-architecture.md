# System Architecture

Primary source: `docs/Business Development Radar - Project Study.docx`.

## Architecture Summary

The Business Development Radar is a modular pipeline that turns public company information into evidence-based business development insights. The report and architecture diagram define six layers:

| Layer | Role |
| --- | --- |
| 1. Data Collection | Collect official company websites, news/jobs pages, RSS feeds, PDFs, and North Data API outputs. |
| 2. Processing | Extract HTML text, parse and segment PDFs, chunk raw text, clean and deduplicate content, and persist raw/processed data. |
| 3. Signal Classification | Run LLM1 over individual evidence units and store structured enrichments or noise records. |
| 4. Vector Storage & Retrieval | Generate embeddings, store vectors, and retrieve signals through metadata filters and semantic search. |
| 5. Company-Level Synthesis | Run LLM2 over retrieved structured signals to identify patterns, opportunities, risks, and actions. |
| 6. User Interface | Let users select companies/categories, run retrieval and synthesis, and inspect takeaways, findings, evidence, and company context. |

## Core Design Decision: Staged Reasoning

The report repeatedly emphasizes that the radar is not one model call over scraped text. The system separates lower-level evidence classification from higher-level company reasoning:

- LLM1 evaluates one evidence unit at a time.
- LLM2 reasons across already-classified evidence records.

This separation was chosen for control, traceability, cost, and reuse. LLM1 produces structured intermediate records that can be stored, filtered, inspected, and reused without rerunning inference on unchanged source content. LLM2 can then focus on cross-signal synthesis instead of redoing extraction and classification.

## Persistent Storage Before LLMs

Raw and processed content is stored before classification. This avoids a "scrape, summarize, forget" workflow. The database is the persistent foundation for:

- reusing collected source material;
- avoiding repeated model calls;
- tracing model outputs back to source evidence;
- supporting retrieval and UI evidence inspection;
- separating relevant enrichments from noise outputs.

## Raw-To-Insight Flow

The intended flow is:

1. Public sources are collected through source-specific but responsible collection methods.
2. HTML, PDFs, and API outputs are normalized into processable text units.
3. Duplicates and low-quality inputs are filtered before expensive downstream processing.
4. LLM1 labels each evidence unit as `main`, `weak`, or `noise`.
5. Relevant LLM1 outputs are stored as enriched signal records.
6. Embeddings are generated for raw chunks and enrichment fields.
7. Retrieval selects company/category/direction-relevant signals.
8. LLM2 groups related signals into company-level findings.
9. The UI presents synthesis first and preserves access to supporting evidence.

## Traceability Principle

High-level outputs should remain grounded in stored evidence. This is why:

- LLM1 stores `evidence`, `short_summary`, `why_it_matters_for_pntn`, confidence, direction, and category.
- LLM2 receives retrieved LLM1 records, not unrestricted raw source dumps.
- The UI includes an Evidence tab where users can inspect the records behind findings.

The report treats this evidence visibility as necessary for trust in business-intelligence use cases.

## Cost And Scalability Logic

The staged architecture also reflects cost constraints:

- high-volume evidence classification uses GPT-4.1 mini;
- lower-volume company synthesis uses a more capable LLM2 model;
- preprocessing and deduplication reduce LLM1 input volume;
- LLM1 summaries reduce LLM2 input volume by a large factor compared with raw-text synthesis.

This makes recurring monitoring more realistic than a single large end-to-end prompt over all collected material.

## Repository Orientation

Future sessions should verify exact file mappings from code, but the report-level intent maps naturally to:

- `busdevrad-collector`: collection, processing, storage, LLM1, embeddings, scheduler jobs, canonical schema, and evaluation exports.
- `streamlit-radar-demo`: active retrieval implementation, Streamlit dashboard, LLM2 synthesis interaction, evidence display, and company context tabs.

Do not treat this as confirmed module ownership without inspecting the repos in the relevant session.
