# Project Purpose And Scope

Primary source: `docs/Business Development Radar - Project Study.docx`.

## Motivation

Companies reveal strategic direction through public digital activity before it is explicitly announced: hiring patterns, product launches, partnerships, financial reports, innovation pages, and governance updates. Business development teams can benefit from these early signals, but manual monitoring is fragmented, slow, inconsistent, and difficult to scale.

The Business Development Radar was built to make this monitoring systematic for Plan.Net TechNest. The target use case is preparation for business development conversations, including client-facing events where current company-specific context is needed quickly.

## Problem

The project assumes that relevant company information is often publicly available. The hard problem is not only access, but timely interpretation:

- relevant data is spread across heterogeneous sources;
- signals vary in strength, from explicit announcements to weak indicators;
- individual analysts use inconsistent tools and judgement;
- isolated weak signals often become meaningful only when combined;
- unstructured text cannot be reliably interpreted with keyword rules alone.

The central problem is the lack of a scalable, systematic method for detecting, classifying, and interpreting company signals for business development.

## Objectives

The report defines three project objectives:

1. Build an automated Business Development Radar that collects and processes relevant company signals from public web-based sources.
2. Distinguish noise, weak signals, and strong signals at scale, while preserving strategically relevant weak indicators for later pattern analysis.
3. Translate detected signals into structured insights and actionable recommendations that support business development decisions.

The intended deliverable is a functional prototype that demonstrates feasibility and analytical value, not a production-ready enterprise monitoring product.

## Intended Users

The main user is a Plan.Net TechNest business development manager or consultant preparing for a company conversation or prioritization decision.

Two usage modes are expected:

- Fast orientation: read the key takeaways, direction, opportunities, and risks.
- Verification: inspect grouped findings and underlying evidence before acting.

The tool supports human judgement. It does not replace business development decision-makers and should not automatically initiate outreach.

## Scope

The prototype focuses on Plan.Net TechNest business development needs and a limited monitored company set. The report describes source discovery starting from 21 companies provided by Plan.Net TechNest; the final evaluation tables include 22 company rows.

The monitored signal categories are:

- Financials
- News / Products
- Partnerships / Acquisitions
- Hiring
- Innovative Themes
- Legal & C-Level Updates

The source families are:

- official company websites;
- news, press, RSS, and sitemap sources;
- job and career pages;
- financial reports and investor relations PDFs;
- North Data registry and company information outputs.

## Non-Goals

The report is explicit about what the radar does not do:

- It does not forecast company financial performance.
- It does not automatically generate or dispatch commercial offers.
- It does not scrape restricted sources through login, authentication, or bypass techniques.
- It does not claim complete coverage of all relevant company activity.
- It is not a finished operational product with longitudinal validation.

## Design Intent

The prototype deliberately prioritizes interpretive depth, evidence traceability, and analytical usefulness over maximum automation breadth. The architecture was designed so future development can extend coverage, add data sources, automate refreshes, and integrate into organizational workflows without replacing the staged evidence-first model.
