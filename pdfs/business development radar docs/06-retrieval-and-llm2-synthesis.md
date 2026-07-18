# Retrieval And LLM2 Synthesis

Primary source: `docs/Business Development Radar - Project Study.docx`.

## Retrieval Role

The retrieval layer connects stored LLM1 evidence records to company-level reasoning. Its purpose is to surface a bounded, relevant evidence set for a selected company, category scope, direction, time window, or semantic query.

Retrieval operates over structured LLM1 outputs and raw/chunk embeddings. It is not intended to dump all scraped content into LLM2.

Current code ownership note: active retrieval code lives in
`streamlit-radar-demo/retrieval_core`. The populated database, source
enrichments, and embeddings are produced by `busdevrad-collector`.

## Structured Metadata Retrieval

Structured retrieval uses SQL filters over fields such as:

- company name;
- category;
- secondary category;
- signal direction;
- confidence;
- source type;
- other stored metadata.

This is the default when the user or workflow knows the desired filters. It is transparent, fast, and easy to reason about.

Its limitation is that it only finds records matching predefined labels. It cannot discover semantically related signals if they differ in wording, category, or metadata.

## Vector Search

Vector search supports broader semantic retrieval. It helps when relevant signals do not share exact labels or when a user is looking for a thematic opportunity or strategic change.

The retrieval system supports:

- configurable field filters;
- multiple query inputs;
- similarity thresholds;
- result size limits;
- consolidation at enriched-source level;
- ranking by similarity;
- metadata packaging for LLM2.

## Embeddings

The report states that OpenAI `text-embedding-3-large` was used because of strong semantic similarity performance and multilingual support.

Embeddings are generated for:

- raw text chunks;
- non-discrete LLM1 output fields;
- a combined block for broader retrieval.

Raw text is split into chunks of about 500 tokens with 50-token overlap. PDF chunks are generated upstream through Docling. Embeddings are stored in PostgreSQL with `pgvector`, avoiding a separate vector database and keeping relational metadata and vector search together.

Chunk embeddings and enrichment embeddings are saved in separate tables so retrieval can target raw source content and LLM-derived fields independently.

## LLM2 Role

LLM2 is the company-level reasoning stage. It receives retrieved LLM1 outputs and synthesizes them into a business-facing assessment.

LLM2 answers questions that isolated LLM1 records cannot:

- Which signals belong together?
- Do weak signals form a meaningful pattern?
- Are there contradictory signals?
- Which themes are opportunities, risks, or neutral context?
- What follow-up actions should business development consider?

The report states that LLM2 uses a more capable model than LLM1 because synthesis requires stronger reasoning and runs at lower volume.

## Why LLM2 Uses LLM1 Outputs

LLM2 intentionally receives classified intermediate records rather than raw scraped text:

- avoids reprocessing noisy raw content;
- focuses reasoning on already standardized evidence;
- reduces token volume;
- improves interpretability;
- preserves source traceability through LLM1 evidence fields.

This is a key architectural decision. LLM1 creates structured evidence; LLM2 interprets patterns across that evidence.

## LLM2 Output Shape

The report describes these LLM2 outputs:

- executive summary;
- overall strategic direction;
- confidence estimate;
- grouped findings;
- top opportunities;
- emerging opportunities;
- top risks;
- recommended follow-up actions.

Grouped findings are the most important analytical layer. They combine related LLM1 signals into broader company developments, such as internal analytics capability buildup inferred from multiple hiring signals.

## Example Pattern Logic

The report gives examples:

- Scalable Capital: nine LLM1 signals became three grouped findings around vertical integration and banking platform expansion, new customer-facing products, and strategic hiring.
- ECE Group: separate hiring signals around data engineering, MS Fabric, Power BI, analytics product ownership, and customer analytics leadership were synthesized into a risk that ECE may be internalizing analytics capabilities.
- Olympus: supply-chain, ESG, risk, compliance, and governance signals became an emerging modernization opportunity, but the output remained hedged because evidence suggested internal maturity rather than an explicit external mandate.

## Synthesis Risks

LLM2 quality is upstream-dependent. It cannot know what was missed by:

- inaccessible sources;
- legal exclusions;
- incomplete scraping;
- poor extraction;
- conservative LLM1 classification;
- overly narrow retrieval filters.

The report also flags abstraction risk. The more LLM2 synthesizes across signals, the further its output moves from source material. The UI mitigates this by exposing supporting LLM1 records, but users may not always inspect them.

Future versions should consider passing more company context or user-specified context into synthesis so the same evidence can be interpreted relative to the specific business situation.
