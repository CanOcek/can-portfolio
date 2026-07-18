# Data Ingestion And Preparation

Primary source: `docs/Business Development Radar - Project Study.docx`.

## Source Strategy

The radar uses a category-first source strategy. The team first defined the signal categories needed by Plan.Net TechNest, then selected public source types likely to reveal those signals.

Signal categories:

- Financials
- News / Products
- Partnerships / Acquisitions
- Hiring
- Innovative Themes
- Legal & C-Level Updates

Source families:

- official company websites;
- news and press pages;
- RSS feeds and sitemaps;
- career and job pages;
- financial reports and investor-relations PDFs;
- North Data registry and company information outputs.

Two planning artifacts shaped source selection:

- Source Map: URL-level source inventory with usefulness, freshness, legal/robots/access metadata, RSS/sitemap availability, login requirements, and notes.
- Coverage Map: company/category-level coverage view that exposes gaps and uneven source availability.

The report highlights that Products & News and Hiring had the strongest coverage. Financials was uneven: public companies had investor relations and annual reports, while private companies often depended on North Data.

## Scraping Methods

Scrapy is the main crawling framework. The project used the simplest reliable method per source.

| Method | Source Count | Intent |
| --- | ---: | --- |
| Recursive crawling | 20 | Fallback for sites without complete RSS/sitemap coverage. |
| Sitemap crawling | 18 | Structured discovery using sitemap metadata. |
| Single-site PDF collection | 11 | Collect PDFs linked from known document pages. |
| Dynamic Playwright crawling | 9 | Render JavaScript-generated public content. |
| RSS feed crawling | 6 | Efficient discovery of frequently updated pages. |
| Dynamic Playwright item interactions | 4 | Handle load-more buttons, pagination, accordions, or similar source-specific interactions. |
| Total | 67 | Configured public sources. |

Recursive crawling is depth-limited and tracks followed links to avoid repeated collection. Playwright interactions are used selectively because they raise runtime and maintenance cost.

## Filtering And Responsible Collection

Filtering is applied before downstream storage and LLM processing:

- source-specific configuration restricts crawl scope;
- irrelevant pages such as low-level jobs can be excluded;
- company metadata is attached during collection;
- webpage content older than one year is filtered out;
- PDFs older than two years are filtered out.

Responsible collection constraints:

- obey `robots.txt`;
- identify as a bot through Scrapy settings;
- use Playwright to render public content, not impersonate users;
- exclude sources that require login, circumvention, or bypassing protection.

## HTML Extraction

Trafilatura is the default HTML text extraction library. It was chosen because the project had heterogeneous company websites and needed a scalable heuristic extractor for main content, titles, dates, and metadata without writing custom rules for every source.

CSS selectors are used for edge cases:

- pages where Trafilatura fails or extracts poorly;
- pages where relevant content is hidden under specific HTML blocks;
- PDF download link extraction;
- dynamic pages requiring precise element targeting.

The intent is to keep generic extraction broad and cheap while allowing targeted selectors where source-specific structure is unavoidable.

## Database Persistence And Deduplication

Collected items are persisted before LLM classification. This gives later stages stable and reusable entries.

The report describes three duplicate defenses:

- URL normalization: removes markers such as language parameters and URL variations.
- Exact content hash: detects identical text efficiently.
- MinHash Locality Sensitive Hashing: detects near-duplicate text through shingles, MinHash signatures, band hashes, candidate lookup, and a similarity threshold.

Appendix C describes the fuzzy duplicate logic:

1. Clean and normalize text.
2. Tokenize to lowercase words.
3. Create 5-word shingles.
4. Generate a 128-value MinHash signature.
5. Split into 16 bands of 8 values.
6. Store band hashes.
7. On insertion, compare only candidate duplicates sharing at least one band.
8. Treat the highest similarity score at or above 0.80 as a fuzzy duplicate.

Deduplication matters because repeated pages can falsely strengthen downstream patterns if treated as independent evidence.

## North Data Integration

North Data fills gaps not covered by company-owned websites, especially for private companies or governance/registry topics.

The weekly North Data API retrieval covers:

- company information;
- financial history and KPIs;
- ownership and company relationships;
- recent balance-sheet data;
- management changes;
- trademark and patent filings;
- mergers, acquisitions, and other corporate events.

The report states that Scrapy spiders were used for North Data API endpoints because Scrapy was already the backbone of the data pipeline. North Data outputs also support separate UI context tabs for company structure, financial metrics, and patents/trademarks.

## PDF Processing

PDFs, especially financial reports, are treated as a distinct source type because they contain structured but difficult-to-extract business information.

The pipeline uses IBM Docling for PDF parsing. Reasons given:

- reliable extraction of document structure;
- table and heading preservation;
- embedded image extraction;
- support for generating natural-language chart/figure descriptions.

The report describes sending extracted images to GPT-4.1 mini with a concise three-sentence image-description prompt. The DOCX media example shows a B. Braun revenue chart transformed into parsed markdown plus an English image description of the chart trend.

After parsing:

- documents are chunked for embeddings;
- chunk size is limited to about 512 tokens for the embedding model constraint described in the report;
- Docling hybrid chunking is used to preserve headings, tables, and context where possible;
- chunks sharing the same Docling heading are merged into larger semantic segments for LLM1 analysis;
- adjacent small segments may be merged up to about 500 tokens.

## Key Data Quality Assumption

LLM quality depends heavily on the data layer. Source coverage gaps, boilerplate, incomplete PDF segments, duplicate pages, and noisy extraction all propagate into classification, retrieval, and synthesis. Later sessions should treat ingestion quality as a first-class product concern, not as backend plumbing.
