# LLM1 Signal Classification

Primary source: `docs/Business Development Radar - Project Study.docx`.

## Role

LLM1 is the first language-model stage. It classifies individual evidence units after scraping, cleaning, deduplication, chunking/segmentation, and persistence.

Its job is narrow:

- decide whether a text unit contains a business-relevant signal for Plan.Net TechNest;
- classify useful signals into a fixed schema;
- preserve weak indicators instead of discarding them;
- store noise separately so it does not overload retrieval or synthesis.

LLM1 does not produce final company-level assessments. LLM2 handles cross-signal reasoning.

## Model Choice

The report states that GPT-4.1 mini was selected for LLM1 because the task is high-volume but bounded. LLM1 needs contextual judgement over heterogeneous text, but it is not expected to write broad strategic narratives.

The design intent is to use a smaller model for repeated evidence-unit classification and reserve a stronger model for lower-volume synthesis.

## Signal Categories

Each useful signal has one primary category and may have secondary categories.

Allowed categories:

- Financials
- News / Products
- Partnerships / Acquisitions
- Hiring
- Innovative Themes
- Legal & C-Level Updates

Secondary categories are important because many business signals are cross-cutting. A senior AI-platform hire can be both Hiring and Innovative Themes.

## Buckets

LLM1 assigns each evidence unit to one of three buckets:

| Bucket | Meaning | Downstream Use |
| --- | --- | --- |
| `main` | Explicit, strong signal. | Stored as enriched evidence and made available for retrieval/synthesis. |
| `weak` | Early or indirect indicator. | Preserved because multiple weak signals can form a pattern. |
| `noise` | Irrelevant or unsupported content. | Stored separately and excluded from synthesis. |

This three-bucket design is central. The report argues that binary relevant/irrelevant classification would discard weak strategic signals that may become useful when interpreted together.

## Direction And Confidence

Direction is an early business-development framing:

- `opportunity`
- `risk`
- `neutral`

Confidence describes how clearly the source text supports the classification, not whether the underlying event is true:

- `low`
- `medium`
- `high`

Low confidence often reflects short fragments, boilerplate, partial extraction, or context-poor PDF sections.

## Output Schema

Relevant outputs are inserted into `source_enrichments`. Noise outputs are inserted into `source_enrichments_noise` because they have a different structure.

Relevant output fields:

| Field | Purpose | Allowed Values / Shape |
| --- | --- | --- |
| `is_relevant` | Whether the chunk contains a signal. | `true` |
| `bucket` | Signal strength tier. | `main`, `weak` |
| `category` | Primary signal topic. | one allowed category |
| `secondary_categories` | Cross-category signal topics. | allowed category list |
| `signal_strength` | Strength label tied to bucket. | `strong` for main, `medium` for weak |
| `pntn_fit_check` | Whether there is a concrete Plan.Net TechNest delivery surface. | `yes`, `no` |
| `direction` | Business-development framing. | `opportunity`, `risk`, `neutral` |
| `evidence` | Source excerpt supporting the classification. | free text |
| `short_summary` | One-sentence strategic implication. | free text |
| `why_it_matters_for_pntn` | Commercial relevance explanation. | free text |
| `possible_business_suggestion` | Specific observation or next-step idea. | free text |
| `confidence` | Clarity of source support. | `low`, `medium`, `high` |

Noise output is intentionally smaller:

- `is_relevant: false`
- result code
- brief reason

## Prompt Design Intent

The LLM1 prompt was designed around:

- role framing: the model acts as a business development analyst for Plan.Net TechNest;
- explicit taxonomy: categories, buckets, direction, confidence, and output fields are enumerated;
- strict JSON output: field names and allowed values are fixed;
- commercial filtering: `pntn_fit_check` asks whether the signal creates a realistic delivery surface for PNTN.

The report highlights that schema enforcement is not just a convenience. It prevents downstream database and UI failures caused by inconsistent field names or free-form output.

## Ambiguity Handling

Ambiguity is expected. Examples include:

- vague strategy statements;
- partial PDF segments;
- job postings that hint at internal capability buildup;
- background company descriptions;
- residual navigation or boilerplate;
- signals that only matter when combined with others.

The response is not to force certainty. Ambiguous but potentially useful material can be classified as `weak`. This keeps it available for LLM2 pattern analysis without giving it the same weight as a clear `main` signal.

## Consistency Measures

The team improved consistency through:

- enumerated labels and exact field names;
- category and bucket definitions in the prompt;
- fixed schema and machine-readable JSON;
- iterative prompt tightening around borderline cases;
- stricter opportunity criteria requiring clearer delivery surface.

Residual inconsistency remains possible for genuinely ambiguous inputs.

## Cost And Scaling Logic

LLM1 is the expensive high-volume stage, so upstream filtering matters:

- exclude stale webpages and PDFs;
- remove low-seniority or irrelevant postings where configured;
- deduplicate before classification;
- store classified outputs for reuse;
- keep the model smaller than LLM2.

The report's evaluation estimates LLM1 classification cost at about USD 32.15 for the final dataset.
