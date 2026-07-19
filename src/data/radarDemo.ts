export type RadarSignal = {
  id: string;
  companyId: string;
  title: string;
  date: string;
  category: string;
  secondaryCategories: string[];
  bucket: "main" | "weak";
  direction: "opportunity" | "neutral" | "risk";
  confidence: "high" | "medium" | "low";
  sourceType: "webpages" | "pdfs" | "northdata_publications" | "northdata_events";
  sourceLabel: string;
  sourceUrl: string;
  shortSummary: string;
  evidence: string;
  whyItMatters: string;
  suggestion: string;
  similarity: Record<string, number>;
};

export type RadarFinding = {
  id: string;
  title: string;
  direction: "opportunity" | "neutral" | "risk";
  confidence: "high" | "medium" | "low";
  categories: string[];
  summary: string;
  supportingSignalIds: string[];
};

export type RadarCompany = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  synthesis: {
    outlook: string;
    strategicDirection: string;
    confidence: "high" | "medium" | "low";
    keyTakeaways: string[];
    topOpportunities: string[];
    emergingOpportunities: string[];
    topRisks: string[];
    followUpActions: string[];
    findings: RadarFinding[];
  };
  structure: {
    relatedCompanies: Array<{ name: string; relationship: string; status: string }>;
    relatedPeople: Array<{ name: string; role: string; note: string }>;
  };
  financials: Array<{ label: string; value: string; note: string }>;
  patents: Array<{ title: string; date: string; note: string }>;
  trademarks: Array<{ title: string; date: string; note: string }>;
};

export const radarDemoData = {
  categories: [
    "Financials",
    "News / Products",
    "Partnerships / Acquisitions",
    "Hiring",
    "Innovative Themes",
    "Legal & C-Level Updates",
  ],
  vectorQueries: [
    {
      id: "digital-platform",
      label: "Digital platform investment",
      description: "Signals about digital services, cloud platforms, customer portals, or connected products.",
    },
    {
      id: "data-ai",
      label: "Data and AI capabilities",
      description: "Hiring, product, or innovation signals related to analytics, automation, AI, and data teams.",
    },
    {
      id: "partnership-activity",
      label: "Partnership activity",
      description: "Collaboration, acquisition, alliance, and ecosystem signals.",
    },
    {
      id: "financial-pressure",
      label: "Financial pressure",
      description: "Signals that may indicate budget pressure, restructuring, investment needs, or risk.",
    },
  ],
  companies: [
    {
      id: "olympus",
      name: "Olympus sample",
      fullName: "Olympus Europa sample profile",
      description:
        "Medical technology and imaging sample profile based on the original radar workflow. Text is shortened and redacted for portfolio demonstration.",
      synthesis: {
        outlook:
          "Olympus shows a strong pattern around digital health, service expansion, and workflow integration. The strongest BD angle is not a generic digital transformation pitch, but a focused conversation around connected clinical workflows, platform enablement, and data-supported customer experiences.",
        strategicDirection:
          "Prioritize evidence-backed outreach around digital service models and customer-facing platform work. Keep regulatory and procurement complexity visible as risks.",
        confidence: "high",
        keyTakeaways: [
          "Multiple useful signals point to digital workflow and service expansion.",
          "Hiring and product signals reinforce a platform-oriented direction.",
          "Partnership activity suggests ecosystem work where external implementation support may be relevant.",
        ],
        topOpportunities: [
          "Digital customer portal and service-experience discovery.",
          "Evidence-backed pitch for connected product content and workflow support.",
          "Data and analytics enablement around customer-facing services.",
        ],
        emergingOpportunities: [
          "AI-assisted documentation and clinical workflow support.",
          "Partner ecosystem coordination for digital health initiatives.",
        ],
        topRisks: [
          "Healthcare procurement cycles can slow engagement.",
          "Regulatory constraints may limit speed and public referenceability.",
        ],
        followUpActions: [
          "Prepare a short account brief focused on platform and workflow evidence.",
          "Map the strongest digital-health signals to existing PNTN capabilities.",
          "Review source evidence before using any company-specific claim externally.",
        ],
        findings: [
          {
            id: "olympus-f1",
            title: "Digital workflow signals are consistent across products and hiring.",
            direction: "opportunity",
            confidence: "high",
            categories: ["News / Products", "Hiring", "Innovative Themes"],
            summary:
              "Product updates, digital-health language, and hiring signals point in the same direction: more connected customer and clinical workflows.",
            supportingSignalIds: ["ol-1", "ol-2", "ol-4"],
          },
          {
            id: "olympus-f2",
            title: "Partnership signals suggest ecosystem coordination needs.",
            direction: "opportunity",
            confidence: "medium",
            categories: ["Partnerships / Acquisitions"],
            summary:
              "Collaboration-oriented signals indicate that coordination, integration, and go-to-market support may matter as initiatives mature.",
            supportingSignalIds: ["ol-3", "ol-5"],
          },
          {
            id: "olympus-f3",
            title: "Regulatory and procurement context should shape outreach.",
            direction: "risk",
            confidence: "medium",
            categories: ["Legal & C-Level Updates", "Financials"],
            summary:
              "The strongest commercial angle still needs careful framing because healthcare buying processes and compliance constraints can slow action.",
            supportingSignalIds: ["ol-6"],
          },
        ],
      },
      structure: {
        relatedCompanies: [
          { name: "Olympus Medical Systems sample unit", relationship: "Operating subsidiary", status: "Active" },
          { name: "Digital services sample entity", relationship: "Related service unit", status: "Active" },
        ],
        relatedPeople: [
          { name: "Redacted executive", role: "Regional leadership", note: "Shown as sample North Data-style context." },
          { name: "Redacted director", role: "Digital operations", note: "Role included for interface demonstration only." },
        ],
      },
      financials: [
        { label: "Revenue trend", value: "Stable to growing", note: "Sample summary from structured financial context." },
        { label: "Investment posture", value: "Selective growth", note: "Useful for BD prioritization, not a standalone claim." },
        { label: "Data coverage", value: "Medium", note: "Some financial fields are incomplete in the sample context." },
      ],
      patents: [
        { title: "Endoscopy image-processing method", date: "2025", note: "Sample patent-style innovation signal." },
        { title: "Clinical workflow support system", date: "2024", note: "Useful as an innovation theme indicator." },
      ],
      trademarks: [
        { title: "Digital service brand sample", date: "2025", note: "Sample trademark-style market signal." },
      ],
    },
    {
      id: "epson",
      name: "Epson sample",
      fullName: "Epson Deutschland sample profile",
      description:
        "Technology and hardware sample profile showing product, sustainability, and B2B service signals.",
      synthesis: {
        outlook:
          "Epson shows a practical opportunity profile around B2B product communication, sustainable workplace technology, and partner-led market activation. The evidence points toward incremental but concrete BD opportunities rather than a broad transformation narrative.",
        strategicDirection:
          "Lead with product and channel activation, then connect sustainability and workplace technology signals to campaign and platform execution.",
        confidence: "medium",
        keyTakeaways: [
          "Product and sustainability messages appear repeatedly in public materials.",
          "Partner and channel signals are commercially relevant.",
          "The signal set is useful but less concentrated than the Olympus sample.",
        ],
        topOpportunities: [
          "B2B campaign support around sustainable workplace technology.",
          "Partner portal or channel enablement content.",
          "Product-launch messaging and evidence-backed account preparation.",
        ],
        emergingOpportunities: [
          "Workplace analytics and managed-service positioning.",
        ],
        topRisks: [
          "Signals are distributed across product lines, so outreach needs a narrow scope.",
        ],
        followUpActions: [
          "Filter evidence to product and partnership categories before outreach.",
          "Build a short opportunity note around sustainable workplace technology.",
        ],
        findings: [
          {
            id: "epson-f1",
            title: "Sustainability and workplace technology create a focused campaign angle.",
            direction: "opportunity",
            confidence: "medium",
            categories: ["News / Products", "Innovative Themes"],
            summary:
              "Product announcements and sustainability language create a clear but bounded B2B communication opportunity.",
            supportingSignalIds: ["ep-1", "ep-2"],
          },
          {
            id: "epson-f2",
            title: "Channel signals suggest partner enablement value.",
            direction: "opportunity",
            confidence: "medium",
            categories: ["Partnerships / Acquisitions"],
            summary:
              "Partner-oriented evidence indicates that channel tooling and campaign coordination may be relevant.",
            supportingSignalIds: ["ep-3", "ep-4"],
          },
        ],
      },
      structure: {
        relatedCompanies: [
          { name: "Epson Europe sample unit", relationship: "Parent or regional unit", status: "Active" },
        ],
        relatedPeople: [
          { name: "Redacted manager", role: "Commercial leadership", note: "Sample relationship record." },
        ],
      },
      financials: [
        { label: "Revenue trend", value: "Mixed", note: "Sample indication from public context." },
        { label: "Cost posture", value: "Efficiency focus", note: "May affect scope and timing." },
      ],
      patents: [
        { title: "Projection system efficiency method", date: "2025", note: "Sample hardware innovation signal." },
      ],
      trademarks: [
        { title: "Workplace print service mark", date: "2024", note: "Sample product/service signal." },
      ],
    },
    {
      id: "raiffeisen",
      name: "Raiffeisen sample",
      fullName: "Raiffeisen Bank sample profile",
      description:
        "Financial-services sample profile centered on digital banking, risk, and platform modernization signals.",
      synthesis: {
        outlook:
          "Raiffeisen shows a mixed opportunity and risk profile. Digital banking and data signals are commercially interesting, but financial and regulatory context should shape any BD outreach.",
        strategicDirection:
          "Use evidence review to separate digital platform opportunities from budget and compliance risks before making recommendations.",
        confidence: "medium",
        keyTakeaways: [
          "Digital banking and data roles appear as useful opportunity signals.",
          "Financial and legal context introduce risk that should be visible in the BD brief.",
          "The best demo angle is traceability: users can inspect why the same company has opportunity and risk signals.",
        ],
        topOpportunities: [
          "Digital self-service journey improvement.",
          "Data-enabled customer lifecycle use cases.",
        ],
        emergingOpportunities: [
          "AI-assisted internal workflow and risk operations.",
        ],
        topRisks: [
          "Regulatory requirements can slow execution.",
          "Financial pressure may narrow project scope.",
        ],
        followUpActions: [
          "Review financial and legal signals before prioritizing outreach.",
          "Prepare a narrow banking-platform modernization angle.",
        ],
        findings: [
          {
            id: "rai-f1",
            title: "Digital banking signals create a platform modernization angle.",
            direction: "opportunity",
            confidence: "medium",
            categories: ["News / Products", "Hiring"],
            summary:
              "Public evidence suggests continued work around customer-facing digital banking and data-enabled services.",
            supportingSignalIds: ["ra-1", "ra-2"],
          },
          {
            id: "rai-f2",
            title: "Financial and regulatory signals require cautious prioritization.",
            direction: "risk",
            confidence: "medium",
            categories: ["Financials", "Legal & C-Level Updates"],
            summary:
              "Risk-oriented records do not block opportunity, but they change the tone and scope of business-development recommendations.",
            supportingSignalIds: ["ra-3", "ra-4"],
          },
        ],
      },
      structure: {
        relatedCompanies: [
          { name: "Digital banking sample subsidiary", relationship: "Related operating unit", status: "Active" },
          { name: "Regional holding sample", relationship: "Control relationship", status: "Active" },
        ],
        relatedPeople: [
          { name: "Redacted board member", role: "Executive role", note: "Sample C-level context." },
        ],
      },
      financials: [
        { label: "Revenue trend", value: "Variable", note: "Financials should be reviewed before outreach." },
        { label: "Risk posture", value: "Elevated", note: "Use as a framing constraint." },
      ],
      patents: [
        { title: "Secure transaction workflow", date: "2024", note: "Sample innovation signal." },
      ],
      trademarks: [
        { title: "Mobile banking feature brand", date: "2025", note: "Sample digital banking signal." },
      ],
    },
  ],
  signals: [
    {
      id: "ol-1",
      companyId: "olympus",
      title: "Digital workflow product update",
      date: "2026-04-18",
      category: "News / Products",
      secondaryCategories: ["Innovative Themes"],
      bucket: "main",
      direction: "opportunity",
      confidence: "high",
      sourceType: "webpages",
      sourceLabel: "Official product news",
      sourceUrl: "https://example.com/olympus/product-update",
      shortSummary: "A public product update emphasizes connected workflow support and digital service touchpoints.",
      evidence: "The announcement describes expanded digital workflow capabilities and service integration for clinical users.",
      whyItMatters:
        "This is a strong business-development signal because platform, content, and customer-experience work may support adoption.",
      suggestion: "Prepare an account note around connected clinical workflows and digital service enablement.",
      similarity: { "digital-platform": 0.93, "data-ai": 0.72, "partnership-activity": 0.34, "financial-pressure": 0.12 },
    },
    {
      id: "ol-2",
      companyId: "olympus",
      title: "Hiring for data and workflow roles",
      date: "2026-03-27",
      category: "Hiring",
      secondaryCategories: ["Innovative Themes"],
      bucket: "main",
      direction: "opportunity",
      confidence: "high",
      sourceType: "webpages",
      sourceLabel: "Careers page",
      sourceUrl: "https://example.com/olympus/careers",
      shortSummary: "Hiring signals point to data, digital product, and workflow coordination roles.",
      evidence: "Several role descriptions mention data products, platform coordination, and digital workflow improvement.",
      whyItMatters:
        "Hiring indicates capability building and can reveal where external support may complement internal teams.",
      suggestion: "Match the hiring signal to PNTN capabilities in data, platform, and customer journey work.",
      similarity: { "digital-platform": 0.79, "data-ai": 0.9, "partnership-activity": 0.22, "financial-pressure": 0.08 },
    },
    {
      id: "ol-3",
      companyId: "olympus",
      title: "Partner ecosystem announcement",
      date: "2026-02-11",
      category: "Partnerships / Acquisitions",
      secondaryCategories: ["News / Products"],
      bucket: "weak",
      direction: "opportunity",
      confidence: "medium",
      sourceType: "webpages",
      sourceLabel: "Press release",
      sourceUrl: "https://example.com/olympus/partner",
      shortSummary: "A collaboration announcement suggests continued ecosystem activity around digital service delivery.",
      evidence: "The public release describes collaboration with a technology partner for integrated service workflows.",
      whyItMatters:
        "Partnerships can create integration, campaign, enablement, and rollout needs.",
      suggestion: "Use as supporting evidence, not the main outreach hook.",
      similarity: { "digital-platform": 0.63, "data-ai": 0.41, "partnership-activity": 0.94, "financial-pressure": 0.1 },
    },
    {
      id: "ol-4",
      companyId: "olympus",
      title: "AI-assisted documentation theme",
      date: "2025-12-08",
      category: "Innovative Themes",
      secondaryCategories: ["News / Products"],
      bucket: "main",
      direction: "opportunity",
      confidence: "medium",
      sourceType: "pdfs",
      sourceLabel: "Annual report segment",
      sourceUrl: "https://example.com/olympus/report",
      shortSummary: "A report segment discusses AI-assisted documentation and workflow support.",
      evidence: "The PDF segment frames automation and documentation support as strategic innovation areas.",
      whyItMatters:
        "AI workflow language can open a more specific conversation than generic transformation messaging.",
      suggestion: "Prepare a discovery angle around AI-assisted service and content workflows.",
      similarity: { "digital-platform": 0.74, "data-ai": 0.91, "partnership-activity": 0.2, "financial-pressure": 0.07 },
    },
    {
      id: "ol-5",
      companyId: "olympus",
      title: "Service network expansion",
      date: "2025-10-22",
      category: "Partnerships / Acquisitions",
      secondaryCategories: ["Financials"],
      bucket: "weak",
      direction: "neutral",
      confidence: "medium",
      sourceType: "northdata_events",
      sourceLabel: "Registry-style event",
      sourceUrl: "https://example.com/olympus/event",
      shortSummary: "A public event indicates changes around service network structure.",
      evidence: "The registry-style record points to an operational service relationship.",
      whyItMatters:
        "Operational network changes can support or complicate digital service rollout.",
      suggestion: "Keep as context for account preparation.",
      similarity: { "digital-platform": 0.38, "data-ai": 0.2, "partnership-activity": 0.76, "financial-pressure": 0.21 },
    },
    {
      id: "ol-6",
      companyId: "olympus",
      title: "Regulatory context note",
      date: "2025-09-19",
      category: "Legal & C-Level Updates",
      secondaryCategories: ["Financials"],
      bucket: "weak",
      direction: "risk",
      confidence: "medium",
      sourceType: "northdata_publications",
      sourceLabel: "Public filing",
      sourceUrl: "https://example.com/olympus/filing",
      shortSummary: "A public filing indicates compliance and governance context relevant to outreach timing.",
      evidence: "The filing contains governance and compliance language that should shape any BD recommendation.",
      whyItMatters:
        "Healthcare and compliance context can slow delivery and constrain messaging.",
      suggestion: "Use cautious wording and validate claims before external outreach.",
      similarity: { "digital-platform": 0.19, "data-ai": 0.17, "partnership-activity": 0.15, "financial-pressure": 0.58 },
    },
    {
      id: "ep-1",
      companyId: "epson",
      title: "Sustainable workplace product announcement",
      date: "2026-05-04",
      category: "News / Products",
      secondaryCategories: ["Innovative Themes"],
      bucket: "main",
      direction: "opportunity",
      confidence: "medium",
      sourceType: "webpages",
      sourceLabel: "Official news",
      sourceUrl: "https://example.com/epson/news",
      shortSummary: "A product announcement emphasizes energy-efficient workplace technology.",
      evidence: "The source connects workplace hardware with sustainability and operating-cost messaging.",
      whyItMatters:
        "This creates a concrete B2B campaign and sales-enablement angle.",
      suggestion: "Frame outreach around sustainable workplace technology and channel activation.",
      similarity: { "digital-platform": 0.52, "data-ai": 0.24, "partnership-activity": 0.29, "financial-pressure": 0.31 },
    },
    {
      id: "ep-2",
      companyId: "epson",
      title: "Managed print service content",
      date: "2026-01-14",
      category: "News / Products",
      secondaryCategories: ["Financials"],
      bucket: "weak",
      direction: "opportunity",
      confidence: "medium",
      sourceType: "pdfs",
      sourceLabel: "Brochure PDF",
      sourceUrl: "https://example.com/epson/brochure",
      shortSummary: "A PDF describes managed-service positioning for workplace technology.",
      evidence: "The material links device fleets, service operations, and business efficiency.",
      whyItMatters:
        "Managed-service messaging often needs clear digital content and account-based campaign material.",
      suggestion: "Inspect whether partner enablement or content localization is the stronger angle.",
      similarity: { "digital-platform": 0.48, "data-ai": 0.18, "partnership-activity": 0.35, "financial-pressure": 0.42 },
    },
    {
      id: "ep-3",
      companyId: "epson",
      title: "Partner program update",
      date: "2025-11-30",
      category: "Partnerships / Acquisitions",
      secondaryCategories: ["News / Products"],
      bucket: "main",
      direction: "opportunity",
      confidence: "medium",
      sourceType: "webpages",
      sourceLabel: "Partner page",
      sourceUrl: "https://example.com/epson/partners",
      shortSummary: "A partner update suggests continued channel and enablement work.",
      evidence: "The public page describes partner support, training, and market activation resources.",
      whyItMatters:
        "Partner activity can create needs around portals, campaign kits, and content operations.",
      suggestion: "Use channel enablement as a focused BD conversation starter.",
      similarity: { "digital-platform": 0.43, "data-ai": 0.14, "partnership-activity": 0.89, "financial-pressure": 0.18 },
    },
    {
      id: "ep-4",
      companyId: "epson",
      title: "Workplace analytics hiring signal",
      date: "2025-08-02",
      category: "Hiring",
      secondaryCategories: ["Innovative Themes"],
      bucket: "weak",
      direction: "opportunity",
      confidence: "low",
      sourceType: "webpages",
      sourceLabel: "Careers page",
      sourceUrl: "https://example.com/epson/careers",
      shortSummary: "A role description references workplace analytics and customer data.",
      evidence: "The job text mentions reporting, customer insights, and product usage analysis.",
      whyItMatters:
        "The signal is weak but may support a broader data-enabled service narrative.",
      suggestion: "Keep as supporting evidence only.",
      similarity: { "digital-platform": 0.36, "data-ai": 0.74, "partnership-activity": 0.16, "financial-pressure": 0.12 },
    },
    {
      id: "ra-1",
      companyId: "raiffeisen",
      title: "Digital banking platform update",
      date: "2026-04-02",
      category: "News / Products",
      secondaryCategories: ["Innovative Themes"],
      bucket: "main",
      direction: "opportunity",
      confidence: "medium",
      sourceType: "webpages",
      sourceLabel: "Digital banking news",
      sourceUrl: "https://example.com/raiffeisen/digital",
      shortSummary: "A public update points to continued investment in digital banking experiences.",
      evidence: "The source references self-service journeys, digital channels, and platform improvements.",
      whyItMatters:
        "Banking platform work can map to experience design, content, and implementation support.",
      suggestion: "Frame the angle around a narrow digital banking journey, not broad transformation.",
      similarity: { "digital-platform": 0.91, "data-ai": 0.51, "partnership-activity": 0.2, "financial-pressure": 0.33 },
    },
    {
      id: "ra-2",
      companyId: "raiffeisen",
      title: "Data product role",
      date: "2026-01-28",
      category: "Hiring",
      secondaryCategories: ["Innovative Themes"],
      bucket: "main",
      direction: "opportunity",
      confidence: "medium",
      sourceType: "webpages",
      sourceLabel: "Careers page",
      sourceUrl: "https://example.com/raiffeisen/careers",
      shortSummary: "Hiring text points to data product and customer lifecycle capabilities.",
      evidence: "The role includes data products, customer segmentation, and internal stakeholder coordination.",
      whyItMatters:
        "Hiring suggests internal capability building where external acceleration may still be relevant.",
      suggestion: "Connect to lifecycle and personalization use cases.",
      similarity: { "digital-platform": 0.66, "data-ai": 0.88, "partnership-activity": 0.11, "financial-pressure": 0.22 },
    },
    {
      id: "ra-3",
      companyId: "raiffeisen",
      title: "Financial pressure filing",
      date: "2025-12-20",
      category: "Financials",
      secondaryCategories: ["Legal & C-Level Updates"],
      bucket: "main",
      direction: "risk",
      confidence: "medium",
      sourceType: "northdata_publications",
      sourceLabel: "Public financial context",
      sourceUrl: "https://example.com/raiffeisen/financials",
      shortSummary: "A financial context record suggests a cautious budget environment.",
      evidence: "The public record indicates pressure that may affect prioritization and project scope.",
      whyItMatters:
        "Budget context matters for BD timing and proposal size.",
      suggestion: "Use a phased low-risk entry proposal if outreach proceeds.",
      similarity: { "digital-platform": 0.22, "data-ai": 0.2, "partnership-activity": 0.14, "financial-pressure": 0.92 },
    },
    {
      id: "ra-4",
      companyId: "raiffeisen",
      title: "Governance update",
      date: "2025-10-06",
      category: "Legal & C-Level Updates",
      secondaryCategories: ["Financials"],
      bucket: "weak",
      direction: "risk",
      confidence: "medium",
      sourceType: "northdata_events",
      sourceLabel: "Registry event",
      sourceUrl: "https://example.com/raiffeisen/event",
      shortSummary: "A governance-related event indicates stakeholder and compliance context.",
      evidence: "The record points to changes that should be considered in account preparation.",
      whyItMatters:
        "Governance context can change decision paths and messaging.",
      suggestion: "Review alongside financial signals before prioritizing outreach.",
      similarity: { "digital-platform": 0.18, "data-ai": 0.13, "partnership-activity": 0.17, "financial-pressure": 0.68 },
    },
  ],
};
