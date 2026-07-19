# AI Retrieval, Synthesis, And UI

Presentation source:

- `docs/Presentation.pptx`
- Main supporting slides: 24-33, 37

## Why Retrieval Matters

The presentation frames database retrieval as the bridge between collected evidence and AI synthesis.

Basic retrieval:

- Finds relevant data efficiently through discrete metadata such as company name and category.
- Uses raw and processed data stored in a relational database.
- Enables SQL search.
- Limitation: metadata filtering can still return datasets too large or too noisy for synthesis.

Vector retrieval:

- Searches for top evidence by semantic similarity.
- Embeddings are generated ahead of time for raw text chunks and LLM1 analyses.
- At runtime, the user query is embedded and compared against stored vectors.
- PostgreSQL plus pgvector enables combined relational and vector retrieval.

Portfolio framing:

- The retrieval layer is not just search; it is the control point that keeps LLM2 grounded in selected evidence rather than unfiltered web data.

## Two-Step Intelligence Layer

The presentation uses the phrase:

- "A two-stage reasoning pipeline from raw public data to business development intelligence."

It also frames the system around the question:

- "How the system knows what it knows."

The workflow has three conceptual stages:

1. Data foundation.
2. LLM1 signal layer.
3. LLM2 reasoning layer.

Data foundation:

- Multiple public sources are scraped continuously.
- Examples include job postings, company news, financial filings, and North Data registry entries.
- Data arrives in inconsistent formats and quality.
- Raw text has no structure, no relevance label, and no business context.

LLM1 signal layer:

- Reads one evidence unit at a time.
- Classifies whether the evidence is relevant.
- Assigns a category.
- Determines direction, for example opportunity or risk for Plan.Net TechNest.
- Assigns confidence.
- Outputs a structured signal with evidence, confidence score, short summary, and a concrete PNTN business framing.

LLM2 reasoning layer:

- Receives retrieved signals for a company, not raw text.
- Reads across the signals to identify patterns.
- Produces a company-level business development picture.

## LLM1 Signal Classifier

The presentation calls LLM1:

- "The Signal Classifier."

Its job:

- Turn one evidence unit at a time into a structured, business-contextualized signal.
- Create the evidence base for later reasoning.
- Convert hundreds of raw fragments into comparable, filterable, retrievable structured signals.

Why it matters:

- LLM1 reduces noise before synthesis.
- It makes signals comparable across source types.
- It gives later retrieval metadata and short summaries to work with.

The deck refers to signal classes as:

- Noise.
- Weak signals.
- Strong or main signals.

The deck also uses category, bucket, direction, and confidence as key structured fields.

## LLM1 Output Reduction

The presentation explicitly states that LLM1 reduces the input volume for LLM2 so that the second stage works only on relevant signals in a shorter form containing information a BD team would need.

Token/input-volume chart:

| Input variant | Total input tokens | Reduction ratio shown |
| --- | ---: | ---: |
| Relevant only, summarized text size | 318.2k | 1.00x |
| Relevant only, raw text size | 2.7M | 8.51x |
| Relevant and noise, raw text size | 17.3M | 54.41x |

Interpretation:

- The strongest reduction claim is that the two-stage design made LLM2 input 54.41x smaller than using raw relevant-and-noise text.
- Even compared with relevant-only raw text, summarized LLM1 output is 8.51x smaller.

## LLM2 Company Reasoner

The presentation calls LLM2:

- "The Company Reasoner."

Its job:

- Turn individual signals into a company-level business development picture.
- Interpret patterns across retrieved LLM1 signals.
- Generate the final BD-oriented output shown in the interface.

The output types named on the traceability slide:

- BD Outlook: company-level assessment and positioning.
- Key Takeaways: most decision-relevant signals surfaced.
- Grouped Findings: signals clustered by theme or signal type.
- Top Opportunities: high-confidence BD leads with business framing.
- Emerging Opportunities: early watchpoints that are not yet confirmed.
- Top Risks: factors that could limit PNTN engagement.
- Follow-up Actions: concrete next steps for the BD team.

## Traceability Model

The presentation emphasizes:

- Users do not blindly trust a generated summary.
- Every finding links back through the chain to the specific signal and evidence that produced it.

Traceability chain:

1. Raw evidence: source fragments from jobs, news, filings, and related public sources.
2. LLM1 signals: structured per-evidence classifications.
3. LLM2 reasoning: company-level pattern interpretation.
4. Final BD output: what the BD team sees in the interface.

This is one of the most important portfolio claims because it separates the project from generic AI summarization.

## User Interface And Prototype

The architecture slide lists these user-facing interface sections:

- Key takeaways.
- Grouped findings.
- Evidence review.
- Company context.

The later traceability slide expands the generated output into:

- BD Outlook.
- Key Takeaways.
- Grouped Findings.
- Top Opportunities.
- Emerging Opportunities.
- Top Risks.
- Follow-up Actions.

The demo slide shows a password-protected Business Development Radar app screen. It appears to be hosted as an interactive app with a password gate, but the deck image alone should not be used as proof of a public deployment.

## Portfolio Page Implications

Good technical page structure:

1. Problem: BD teams need timely, company-specific signals from scattered public sources.
2. Data foundation: audited public sources, scraping, PDFs, North Data, processing, deduplication.
3. Signal layer: LLM1 converts evidence units into structured, comparable signals.
4. Retrieval layer: SQL and pgvector retrieve relevant evidence for a company and question.
5. Reasoning layer: LLM2 synthesizes retrieved signals into a BD outlook and actions.
6. Interface: layered dashboard with takeaways, findings, evidence, and company context.
7. Evaluation: quantify scale, relevance filtering, token reduction, cost, and stakeholder validation.
