# Project Story And Positioning

Presentation source:

- `docs/Presentation.pptx`
- Main supporting slides: 1-7, 34-36

## Working Title

- AI-Powered Business Development Radar
- Presented as a TUM x Plan.Net TechNest project study final presentation.

## Business Challenge

Plan.Net TechNest business development needs a current view of what is happening inside client and prospect companies before outreach, meetings, events, or offer preparation.

The presentation frames three practical needs:

- Current market knowledge: stay up to date on client and prospect activities such as expansions, product or news launches, partnerships, financial changes, and innovation initiatives.
- Fast client preparation: prepare tailored client decks and business offers quickly with the right, current information.
- Early opportunity and risk detection: identify business opportunities and risks early, before competitors act or before clients build the needed capabilities internally.

The tracked signal examples are:

- Hiring: new hires, leadership changes, team expansion.
- Product and news launches: new products, features, or announcements.
- Partnerships: new partners, collaborations, alliances.
- Financial developments: funding, M&A, investments, financial results.
- Innovation: research, patents, technology initiatives.

The current manual challenges are:

- Information is scattered across sources.
- Manual research is time-consuming.
- Important signals are easy to miss.
- Missing intelligence can lead to generic offers or outreach that ignores what the client is already building internally.

## Project Goal

The goal was to develop an AI-powered Business Development Radar that gives the BD team the right insights at the right time so they can create relevant offers, close deals faster, and stay ahead of the market.

The presentation states three objectives:

- Automate signal collection.
- Distinguish noise, weak signals, and strong signals.
- Generate actionable business insights.

Prototype scope from the presentation:

- 21 companies monitored.
- 18 North Data sources integrated.
- 67 web pages or web sources monitored.

Note: the deck uses both "67 web pages monitored" and "67 web sources integrated." For future public copy, use "67 configured public web sources" unless the exact wording is verified against code or source configuration.

## Research Gap And Contribution

The presentation positions the project against existing work:

- Methods already exist to collect market data, including web scraping, databases, and news feeds.
- LLMs are already used for text summarisation, classification, and analysis.
- The gap is that these capabilities are often isolated and not fully integrated into business development workflows.

The project contribution is described in three parts:

- Integrated AI workflow: combines automated signal extraction with AI-based business interpretation to support business development.
- Two-step LLM workflow: separates signal classification from business insight generation for more accurate and reliable results.
- Plan.Net TechNest collaboration: designed and validated against a real business development use case.

The high-level workflow on the research-gap slide is:

1. Data collection.
2. Signal extraction.
3. AI interpretation.
4. Business insights.

## Portfolio Case-Study Angle

Recommended public positioning:

- "I built a staged RAG and web-intelligence pipeline that transforms public company data into traceable business-development signals."
- "The system uses source governance, scraping, document processing, LLM-based signal classification, vector retrieval, and company-level synthesis to support BD research."
- "The prototype was validated with Plan.Net TechNest stakeholders and showed that the layered Takeaways -> Findings -> Evidence design was important for trust."

Avoid positioning it as:

- A fully autonomous sales-decision system.
- A generic chatbot.
- A black-box AI summary over raw web data.
- A production monitoring platform unless the deployment and scheduling state is separately verified.

## Strong Differentiators To Reuse

- End-to-end system: collection, processing, persistence, retrieval, synthesis, and frontend.
- Public-source and legally reviewed data strategy.
- Two-stage LLM design: LLM1 creates structured evidence signals; LLM2 reasons over retrieved signals.
- Traceability from final recommendation back to raw evidence.
- Quantified noise reduction and cost control.
- Stakeholder validation with a real business development team.
