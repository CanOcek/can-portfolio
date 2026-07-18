# Evaluation, Limits, And Future Work

Primary source: `docs/Business Development Radar - Project Study.docx`.

## Quantitative Results

The final prototype database contained a broad but uneven dataset.

### Collection

| Source Type | Collected Entries | Source Count | Company Count |
| --- | ---: | ---: | ---: |
| Webpages total | 2,330 | 52 | 21 |
| Webpages - news/innovation | 956 | 28 | 17 |
| Webpages - job postings | 1,324 | 19 | 19 |
| Webpages - other | 50 | 5 | 4 |
| PDFs | 872 | 27 | 16 |
| PDF segments | 11,460 | 27 | 16 |
| North Data publications | 211 | 19 | 19 |
| North Data other records | 1,167 | 19 | 19 |

The PDF pipeline parsed 858 of 872 PDFs into 11,460 segments and 65,499 chunks.

### Deduplication

The webpage deduplication layer eliminated 537 duplicate webpages:

- 226 exact-content duplicates;
- 311 fuzzy duplicates through MinHash LSH;
- most fuzzy duplicates were job postings.

Without deduplication, collected webpages would have increased from 2,330 to 2,867, creating about 23.3% more webpage records and risking repeated evidence being over-weighted.

### LLM1 Classification

LLM1 classified 13,753 entries and retained 1,523 useful results:

- 646 main signals;
- 877 weak signals;
- 12,230 noise outputs;
- estimated LLM1 cost: USD 32.1481.

| Source Type | Classified Entries | Useful Enrichments | Relevance Rate | LLM1 Cost |
| --- | ---: | ---: | ---: | ---: |
| All source types | 13,753 | 1,523 | 11.1% | USD 32.1481 |
| Webpages total | 2,304 | 714 | 31.0% | USD 5.2515 |
| PDF segments | 11,306 | 801 | 7.1% | USD 26.7107 |
| North Data publications | 21 | 8 | 38.1% | USD 0.0766 |
| North Data events | 122 | 0 | 0.0% | USD 0.1093 |

The report notes an important cost insight: PDF segments produced a similar number of useful enrichments as webpages, but at much higher LLM1 cost because many more PDF segments had to be classified.

### Category Coverage

Primary category counts:

- Hiring: 547
- Innovative Themes: 293
- Financials: 262
- Partnerships / Acquisitions: 194
- News / Products: 191
- Legal & C-Level Updates: 36

Primary-or-secondary category counts:

- Innovative Themes: 712
- Hiring: 576
- Financials: 471
- News / Products: 316
- Partnerships / Acquisitions: 303
- Legal & C-Level Updates: 48

Company coverage was sufficient for many but not all companies:

- 9 companies had all six categories;
- 17 of 22 companies had at least five categories;
- SPD had no relevant results;
- several companies had sparse coverage due to source limitations.

### Direction Distribution

Among 1,523 useful enrichments:

- opportunity: 45, or 3.0%;
- risk: 455, or 29.9%;
- neutral: 1,023, or 67.2%.

Opportunities were intentionally scarce because the prompt was tightened to require a clearer Plan.Net TechNest delivery surface.

### Storage And Token Reduction

The system generated:

- 44,867 raw chunk embeddings;
- 7,615 enrichment embeddings;
- combined embedding cost: about USD 1.3776.

The report compares LLM2 input volume scenarios:

| Scenario | Entry Count | Total Input Tokens | Multiple |
| --- | ---: | ---: | ---: |
| LLM1-generated useful-signal content | 1,523 | 318,248 | 1.00 |
| Only LLM1 filtering but raw text passed | 1,523 | 2,708,600 | 8.51 |
| No LLM1 step | 14,129 | 17,314,357 | 54.41 |

This supports the staged architecture: LLM1 both filters and condenses evidence before synthesis.

## Qualitative Validation

Plan.Net TechNest stakeholders reviewed the prototype. Feedback indicated that the system was useful as a foundation for business development monitoring, especially because it accelerates early company assessment while preserving traceable evidence.

Two validation examples matter:

- ECE Group: the system inferred internal analytics and data-platform capability buildup from multiple hiring signals. Stakeholders recognized this as a real market-level pattern.
- Olympus: the system surfaced an emerging opportunity around supply-chain, ESG, compliance, risk, and governance modernization, matching developments stakeholders had recently learned from other channels.

Stakeholders still viewed the system as a functional prototype requiring further refinement before broader operational use.

## Error Analysis

Recurring issues:

- Opportunity vs neutral vs risk: early prompts over-classified generic positive developments as opportunities, so opportunity logic was tightened.
- Main vs weak: borderline fragments sometimes moved between strong and weak depending on phrasing and context.
- Source quality: incomplete PDF segments, boilerplate, duplicate wording, navigation text, and context-poor pages affected classification quality.
- LLM2 dependency: synthesis quality depends on retrieval scope and upstream evidence availability.

## Limitations

Prompt sensitivity remains a central limitation. Even with a fixed schema, small prompt changes can alter how the model treats opportunities, weak signals, and ambiguous cases.

Cost constraints shaped model choices. LLM1 used a smaller model for high-volume classification. LLM2 used a stronger model for lower-volume reasoning, but LLM2 cost was not tracked systematically.

Legal and technical source constraints limit coverage. LinkedIn and protected sources were excluded, which reduces signal availability for some companies and categories.

Evaluation scope was limited. The project did not include a long-term deployment, systematic user study, or representative benchmark against manual analyst performance.

## Future Work

The report identifies these priorities:

- Additional data sources: official LinkedIn API access, third-party news, industry publications, press portals, and Dealfront-style B2B intelligence.
- Automated source discovery: reduce manual work needed to onboard new companies and sources.
- Automated refresh: deploy collection and processing to cloud or company infrastructure for daily or weekly updates.
- Reliability and robustness evaluation: test whether summaries remain accurate and stable under retrieval changes.
- Proactive alerting: notify users when high-priority signals appear; vector clustering could help detect patterns automatically.
- Conversational/RAG interface: a future chat or MCP-style integration could
  expose the existing retrieval and LLM2 stack through a conversational client.
- Efficiency improvements: parallelize scrapers, batch LLM1 prompts, optimize prompt size.
- Financial analysis layer: incorporate structured financial figures into company direction inference.

## Practical Takeaway

The prototype achieved its main goal: it showed that public company information can be transformed into structured signals, synthesized into company-level insights, and presented in a way that supports business development users.

It should still be treated as a strong prototype, not a production-grade monitoring system. Output quality depends on source coverage, prompt design, retrieval settings, and evidence availability.
