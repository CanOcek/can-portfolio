# Legal And Source Governance

Primary source: `docs/Business Development Radar - Project Study.docx`.

## Purpose

The radar depends on automated collection of public company information. Source selection therefore had to consider legal, ethical, and technical constraints, not only business usefulness or scraping feasibility.

The report frames the legal assessment as a practical boundary-setting process for the prototype, not as a comprehensive legal opinion.

## Assessment Criteria

Candidate sources were assessed on four criteria:

- Public accessibility: source must be reachable without login or technical circumvention.
- Robots and technical restrictions: `robots.txt` and access behavior were treated as responsible access indicators.
- Terms, legal notice, or impressum restrictions: explicit scraping, automation, or commercial-use restrictions were checked.
- Data type: company-level information was preferred; personal profile data was avoided due to GDPR and ethical considerations.

The radar is intended for internal business intelligence and company-level signals, so the collection strategy minimizes personal data exposure.

## Six-Step Source Procedure

The report documents a repeatable assessment flow:

| Step | Assessment Question | Decision Use |
| --- | --- | --- |
| Identify source purpose | What signal category could this source support? | Prevents scraping sources merely because they are available. |
| Check public access | Is it reachable without login or circumvention? | Excludes private or gated sources. |
| Check `robots.txt` and technical restrictions | Does the source disallow or block automated access? | Guides responsible access and feasibility decisions. |
| Review legal notice / terms | Are automated access or commercial-use restrictions stated? | Captures contractual risk beyond technical access. |
| Assess data type | Is the source company-level or personal? | Reduces GDPR and privacy risk. |
| Decide inclusion | Include, include with constraints, or exclude? | Creates an auditable source decision. |

## Risk Classes

| Risk Level | Criteria | Project Decision |
| --- | --- | --- |
| Low risk | Public, company-level, no relevant restrictions found. | Include. |
| Medium risk | Ambiguous restrictions, mixed content, or source requires careful limitation. | Test with responsible access methods and constraints. |
| High risk | Login, explicit restrictions, personal profile data, or circumvention required. | Exclude. |

The prototype prioritizes low-risk sources and includes medium-risk sources only when responsible access remains viable.

## Excluded Sources And Behaviors

LinkedIn was excluded from automated scraping. The reasons were platform restrictions, personal-data concerns, and the mismatch between available official access routes and the radar's broad signal extraction requirements.

Cloudflare-protected and technically restricted sources were also excluded where access would require bypassing protective mechanisms. The project treats this as a responsible-scraping boundary, even when business value might be high.

The system does not impersonate human users. Playwright is used to render dynamic pages, not to bypass access protections.

## Responsible Access Rules

The scraping pipeline was designed around these operational constraints:

- identify clearly as a bot using Scrapy defaults;
- obey `robots.txt`;
- prefer structured sources such as RSS feeds and sitemaps;
- use headless browser rendering only when needed for JavaScript-rendered public content;
- avoid login-required or circumvention-based access;
- document source decisions in Source Map and Coverage Map artifacts.

## Impact On Product Interpretation

Legal and technical boundaries create uneven coverage. Some companies and categories have fewer accessible sources, especially private companies and sources behind restrictions. Downstream LLM2 synthesis can only reason from the evidence that entered the system.

Future users should interpret radar outputs as structured decision support based on available evidence, not as a complete representation of all relevant company activity.
