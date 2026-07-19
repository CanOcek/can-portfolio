# Results, Evaluation, And Next Steps

Presentation source:

- `docs/Presentation.pptx`
- Main supporting slides: 34-38

## Quantitative Evaluation

The final evaluation slide reports:

| Metric | Value |
| --- | ---: |
| Evidence units classified by LLM1 | 13,753 |
| Useful signals kept after filtering | 1,523 |
| Main signals | 646 |
| Weak signals | 877 |
| Noise units filtered out before synthesis | about 12,230 |
| Relevance rate | about 11% |
| Full LLM1 classification run cost | about USD 32 |
| Duplicate web pages removed | 537 |
| Webpage bloat avoided through deduplication | 23.3% |
| LLM2 input reduction through two-stage design | 54.41x |

Interpretation:

- The useful-signal retention rate is low by design. Most public-source text is not useful for BD reasoning.
- The two-stage design is both a quality and cost-control mechanism because LLM2 receives a much smaller evidence set.
- The cost claim should be rounded publicly unless exact run metadata is being shown.

## Company Data Breakdown

The company breakdown slide shows 1,523 relevant LLM1 signals across 21 monitored companies.

| Company | Relevant entries |
| --- | ---: |
| BMW | 305 |
| Olympus | 255 |
| Lufthansa | 145 |
| Raiffeisen | 114 |
| EON | 105 |
| B. Braun | 92 |
| BNP Paribas | 87 |
| Smart | 74 |
| ECE | 52 |
| Berlin Airport | 52 |
| Epson | 49 |
| Dertour | 44 |
| Greiner Bio One | 40 |
| Scalable Capital | 32 |
| Stiebel Eltron | 23 |
| AIDA | 22 |
| Penny | 17 |
| IHK | 6 |
| EWie Einfach | 5 |
| Ehrmann | 3 |
| Stiftung Warentest | 1 |
| Total | 1,523 |

The stacked chart groups useful LLM1 signals by primary category:

- Financials.
- News / Products.
- Partnerships / Acquisitions.
- Hiring.
- Innovative Themes.
- Legal and C-Level Updates.

Public-copy caveat:

- The chart contains named companies. Before publishing a graphic or exact ranked list, decide whether the portfolio page should show real company names, anonymized examples, or only aggregate counts.

## Qualitative Evaluation

The presentation reports stakeholder testing with Plan.Net TechNest managers:

- Bernhard Engl.
- Ret Lauterbach.

The Olympus case was highlighted:

- Outputs were directionally correct.
- The radar surfaced developments that managers had only recently learned through other channels.

The layered design was highlighted as the key trust driver:

- Takeaways.
- Findings.
- Evidence.

Interpretation for portfolio:

- The strongest defensible claim is stakeholder validation of directional usefulness and trust-building UI structure.
- Do not claim benchmarked accuracy or long-term operational performance.

## Limitations

The presentation lists four main limitations:

1. Prompt sensitivity

Small wording changes shift how strictly signals are classified.

2. Cost vs. capability

The lightweight LLM1 misses some nuance, while the stronger LLM2 is more expensive to run.

3. Source coverage gaps

LinkedIn and Cloudflare-protected sources are excluded on legal or ethical grounds.

4. Evaluation scope

Feasibility is shown, but there is no long-term study or benchmark study yet.

## Future Work

The presentation lists these next steps:

- Expand the database with LinkedIn through the official API, third-party news, and Dealfront.
- Automate source discovery, currently manual and described as the key step to scaling beyond about 20 companies.
- Add a reliability layer for evaluation and robustness checks on synthesis quality.
- Add proactive alerting for high-priority signals.
- Add vector clustering instead of relying on manual checking.
- Deploy a scheduling pipeline.
- Add a conversational RAG/chat interface.

## Public Portfolio Guardrails

Use:

- "Prototype" or "functional prototype."
- "Public-source business-development intelligence."
- "Directionally validated with stakeholders."
- "Traceable recommendations linked back to evidence."
- "Two-stage LLM pipeline reduced synthesis input by 54.41x."

Avoid:

- Claiming production monitoring unless deployment and scheduling are separately verified.
- Publishing internal passwords, demo links, or private app access details.
- Overstating legal review as legal advice.
- Naming validation stakeholders publicly without approval.
- Showing company-specific findings if they reveal internal BD targeting logic.
- Saying that the system covers LinkedIn or restricted sites; the presentation says those were excluded, with official API access listed only as future work.

## Reusable Metrics For Portfolio Copy

Most reusable numbers:

- 21 companies monitored.
- 67 configured public web sources.
- 18 North Data sources integrated.
- 13,753 evidence units classified.
- 1,523 useful signals retained.
- About 11% relevance rate after filtering.
- 537 duplicate web pages removed.
- 23.3% webpage bloat avoided.
- 54.41x smaller LLM2 input through the two-stage design.
- About USD 32 for the full LLM1 classification run.

Keep the numbers grouped as scale, filtering, and efficiency metrics rather than presenting them as business outcomes.
