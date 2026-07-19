# Pipeline And Data Collection

Presentation source:

- `docs/Presentation.pptx`
- Main supporting slides: 7-23

## Six-Layer Architecture

The system architecture diagram presents six layers:

1. Data Collection
2. Processing
3. Signal Classification
4. Vector Storage and Retrieval
5. Company-Level Synthesis
6. User Interface

Layer 1, Data Collection:

- Official company websites, including news and jobs.
- Official company RSS feeds.
- North Data API.

Layer 2, Processing:

- HTML text extraction.
- PDF parsing and segmentation.
- Raw text chunking.
- Storage after processing.

Layer 3, Signal Classification:

- LLM1 analysis.
- Structured fields include category, bucket, direction, and confidence.
- Storage after signal classification.

Layer 4, Vector Storage and Retrieval:

- Embedding generation.
- Storage.
- Signal retrieval.

Layer 5, Company-Level Synthesis:

- LLM2 analysis over retrieved signals.
- Pattern recognition.
- Top opportunities.
- Top risks.
- Recommended actions.

Layer 6, User Interface:

- Key takeaways.
- Grouped findings.
- Evidence review.
- Company context.

## Legal And Ethical Source Review

Because the system uses automated collection, each source was reviewed before integration.

The presentation highlights two checks:

- `robots.txt`: a technical document specifying which website areas can be reached by automated tools.
- Legal notice or imprint: legal terms relevant to site access, processing, and storage of published data.

The final dataset relies on publicly accessible, non-personal, company-level information. LinkedIn was excluded because the presentation says it explicitly prohibits scraping and often involves personal data.

Example legal/source decisions shown in the deck:

| Company/source example | Robots status | Legal impression | Scraping decision | Notes |
| --- | --- | --- | --- | --- |
| IHK Muenchen | Yes, partly | No explicit anti-scraping ban in reviewed legal text | Yes | Partial access permitted |
| DERTOUR | Yes, but restricted | No explicit ban in reviewed imprint | Yes | Restricted access; proceed with caution |
| Stiftung Warentest | Mostly no, strongly restricted | Scraping explicitly forbidden; consent required for text/data mining | No | Strict prohibition; no automated access |
| Stiebel Eltron | Yes, but limited | No explicit scraping ban found, only general copyright restriction | Yes | Limited to non-commercial use |

Public copy should avoid implying that legal review creates a universal right to scrape. Frame it as source governance and risk assessment.

## Source Strategy

The source strategy slide shows a source-audit spreadsheet, not just a source list. Candidate sources were assessed by:

- Company name.
- Link to source.
- Average posting frequency.
- Post categories.
- `robots.txt` status and legal imprint status.
- RSS feed availability.
- Business usefulness category.
- Sitemap availability and suitability.

The presentation states:

- 104 potential candidates identified.
- 67 web sources integrated into the final prototype.

The source count by scraping method:

| Method | Source count |
| --- | ---: |
| Recursive | 20 |
| Sitemap | 18 |
| Single Site PDF | 11 |
| Playwright | 9 |
| RSS Feed | 5 |
| Playwright With Item Interaction | 4 |
| Total | 67 |

## Scrapy-Based Collection

Scrapy was used as the modular and scalable framework for automated data collection.

The deck names these collection modes:

- Recursive scraping.
- PDF link extraction for standalone web pages.
- RSS news feeds.
- Sitemaps.
- Modular configurations for new source additions.

The presentation frames RSS feeds and sitemaps as the first priority when available because they are simpler and more reliable.

Recursive scraping was used when websites did not expose relevant content in a structured format. The crawler starts from a page, extracts relevant links, and repeats until the configured stopping conditions are met.

Standalone web page scraping was used primarily for extracting PDFs from download-center style pages.

## Dynamic Scraping With Playwright

Playwright was used when static HTML was insufficient because important content was rendered through JavaScript.

Capabilities named in the deck:

- Render JavaScript-loaded content.
- Scroll through pages to load additional content.
- Interact with JavaScript UI elements such as buttons and drop-down menus.
- Run in a headless browser.
- Integrate through Scrapy-Playwright as an extension to the existing Scrapy framework.

Tradeoff:

- Dynamic extraction is slower because pages need browser loading and waiting time.

## North Data

North Data is described as:

- A DACH-region company information aggregator.
- Accessed through an academic-license API.
- Valuable for company financial health, mergers, acquisitions, insolvencies, and related company context.

Source types named on the slide:

- Trade registries.
- Patent registries.
- Annual reports.

## Processing Tools

The deck compares three processing approaches:

| Tool | Purpose | Strengths | Weaknesses |
| --- | --- | --- | --- |
| Trafilatura | HTML-to-text conversion | Heuristic extraction rules; one-size-fits-all approach | No targeted extraction; extraction sometimes fails |
| CSS selectors | HTML-to-text conversion | Deterministic, exact extraction | Time-costly and inefficient at scale |
| Docling | PDF parsing | Machine-learning-assisted parsing | Long processing times |

HTML example:

- Raw embedded HTML was converted into structured text.
- The example shows a BMW Technology Trend Radar page where messy HTML was turned into readable section/button text.

PDF example:

- Docling parsed a raw B. Braun PDF report into Markdown-like structured text.
- The example retained headings and paragraph text and added a chart description for a revenue-development bar chart.

## PDF Processing Results

The PDF processing chart reports:

| Metric | Value |
| --- | ---: |
| Collected PDF rows | 872 |
| Parsed PDFs | 858 |
| Parsed PDF rate | 98% |
| Average segments per parsed PDF | 13.4 |
| Average chunks per segment | 5.7 |
| LLM1-ready segments | 11,460 |
| Raw PDF chunks | 65,499 |

## Filtering And Deduplication

The processing layer used both content filters and deduplication.

Content-based filters removed algorithmically detectable irrelevant data, including:

- Low-level jobs such as cashiers and cleaning personnel.
- Old news articles and PDFs.
- Unrelated sections or domains.

Deduplication methods:

- Exact hashing to detect identical extracted content.
- Fuzzy hashing with locality-sensitive hashing to estimate similarity and remove close matches.

Deduplication results from the deck:

| Method | Duplicates removed |
| --- | ---: |
| Exact hashing | 226 |
| Fuzzy hashing / LSH | 311 |
| Total | 537 |

The evaluation slide states that removing 537 duplicate web pages avoided 23.3% webpage bloat.

Key interpretation:

- Filtering and deduplication cleaned the dataset before model calls.
- Deduplication also reduced the risk that later synthesis would interpret repeated copies as independent evidence.
