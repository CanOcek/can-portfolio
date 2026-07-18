# UI And User Workflows

Primary source: `docs/Business Development Radar - Project Study.docx`.

## UI Goal

The Streamlit interface exists to make the technical pipeline usable for business development managers and consultants. Its job is to present synthesized insights quickly while preserving access to the evidence behind them.

The report identifies two user modes:

- preparation user: wants a fast overview before a client conversation or prioritization decision;
- verification user: wants to inspect why the system made a claim before acting.

The interface supports both through layered navigation rather than separate products.

## Design Principles

The report names three principles:

- Layered access: synthesis appears first; detailed evidence remains available.
- Business-facing language: labels and sections answer business development questions rather than exposing pipeline internals.
- Evidence visibility: users can inspect LLM1 records supporting LLM2 findings.

This design is meant to create trust without requiring users to understand Scrapy, embeddings, schemas, or prompts.

## Core Flow

The main interaction flow is:

1. Select one or more companies.
2. Select relevant signal categories.
3. Retrieve classified signals from the database.
4. Trigger LLM2 synthesis for the selected scope.
5. Explore results through Key Takeaways, Findings, and Evidence.

Direction filtering lets users focus on opportunities, risks, or neutral developments. Since direction is assigned at LLM1 and preserved through synthesis, filtering changes both evidence selection and interpretation.

## Six Tabs

The main dashboard is organized as a six-tab Streamlit application:

| Tab | Purpose |
| --- | --- |
| Key Takeaways | Fast business overview with executive summary, direction, confidence, signal count, opportunities, emerging opportunities, risks, and suggested actions. |
| Findings | Expandable LLM2 grouped findings with direction, confidence, categories, business relevance, and supporting signals. |
| Evidence | LLM1-level records with category, direction, confidence, evidence text, and `why_it_matters_for_pntn`. |
| Company Structure | North Data-derived organizational and ownership context. |
| Financial Metrics | North Data-derived financial KPIs such as revenue, earnings, equity, return on sales, and employees. |
| Patents & Trademarks | North Data-derived intellectual property filings. |

The North Data context tabs are separated from the LLM synthesis flow to avoid blurring factual registry data with model-generated signal interpretation.

## Key Takeaways

This is the primary entry view. It should let a user understand the current company picture in a few minutes.

The report's screenshot example for Raiffeisen shows:

- a business development outlook;
- overall direction, confidence, and signal count;
- top opportunities;
- emerging opportunities;
- top risks;
- suggested actions.

The screenshot also demonstrates the desired tone of recommendations: concrete enough to guide outreach planning, but grounded in supporting findings.

## Findings

Findings are grouped LLM2 interpretations, not raw evidence rows. A finding can combine several signals into one broader observation.

Each finding should show:

- direction;
- confidence;
- related categories;
- finding text;
- business development relevance;
- expandable supporting signal count and details.

The report treats this tab as the bridge between summary and verification.

## Evidence

The Evidence tab is the trust layer. It exposes the LLM1 records behind grouped findings.

Each evidence record should help a user answer:

- what source text supported this signal?
- what category and direction were assigned?
- how confident was the system?
- why does this matter for Plan.Net TechNest?
- does the evidence justify the LLM2 finding?

This tab is especially important because LLM2 can overgeneralize if retrieval is thin.

## Supporting Company Context

Company Structure, Financial Metrics, and Patents & Trademarks provide factual background from North Data. They help users interpret signals, but they should not be treated as the same thing as LLM-generated findings.

The report's Financial Metrics screenshot shows the intended display style: compact metric cards for a selected company and fiscal year.

## Product Interpretation

The UI should communicate that the radar is decision support. It helps users orient themselves, prioritize questions, and inspect evidence. It should not present synthesis as a definitive verdict or hide the uncertainty caused by source coverage, prompt sensitivity, and retrieval scope.
