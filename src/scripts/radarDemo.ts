import type { RadarCompany, RadarSignal } from "../data/radarDemo";

type RadarData = {
  categories: string[];
  vectorQueries: Array<{ id: string; label: string; description: string }>;
  companies: RadarCompany[];
  signals: RadarSignal[];
};

type DemoState = {
  companyId: string;
  categories: Set<string>;
  buckets: Set<string>;
  directions: Set<string>;
  confidences: Set<string>;
  sourceTypes: Set<string>;
  strategy: "exact" | "vector";
  vectorQueryId: string;
  minSimilarity: number;
  evidenceLimit: number;
  includeSecondaryCategories: boolean;
  activeTab: string;
};

const TAB_LABELS = [
  "Key Takeaways",
  "Findings",
  "Evidence",
  "Company Structure",
  "Financial Metrics",
  "Patents & Trademarks",
];

function requireElement<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Missing radar demo element: ${selector}`);
  }
  return element;
}

function parseData(root: HTMLElement): RadarData {
  const dataScript = requireElement<HTMLScriptElement>(root, "[data-radar-demo-data]");
  return JSON.parse(dataScript.textContent || "{}") as RadarData;
}

function labelForSourceType(sourceType: string): string {
  return {
    webpages: "Webpage",
    pdfs: "PDF",
    northdata_publications: "North Data publication",
    northdata_events: "North Data event",
  }[sourceType] || sourceType;
}

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

function titleCase(value: string): string {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

function badgeClass(value: string): string {
  return `is-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function getCompany(data: RadarData, state: DemoState): RadarCompany {
  return data.companies.find((company) => company.id === state.companyId) || data.companies[0];
}

function signalMatchesCategory(signal: RadarSignal, state: DemoState): boolean {
  if (state.categories.has(signal.category)) {
    return true;
  }

  if (!state.includeSecondaryCategories) {
    return false;
  }

  return signal.secondaryCategories.some((category) => state.categories.has(category));
}

function getFilteredSignals(data: RadarData, state: DemoState): RadarSignal[] {
  const signals = data.signals
    .filter((signal) => signal.companyId === state.companyId)
    .filter((signal) => signalMatchesCategory(signal, state))
    .filter((signal) => state.buckets.has(signal.bucket))
    .filter((signal) => state.directions.has(signal.direction))
    .filter((signal) => state.confidences.has(signal.confidence))
    .filter((signal) => state.sourceTypes.has(signal.sourceType));

  const ranked = signals
    .map((signal) => ({
      signal,
      similarity: state.strategy === "vector" ? signal.similarity[state.vectorQueryId] || 0 : 1,
    }))
    .filter((entry) => state.strategy === "exact" || entry.similarity >= state.minSimilarity)
    .sort((a, b) => {
      if (state.strategy === "vector" && b.similarity !== a.similarity) {
        return b.similarity - a.similarity;
      }
      if (a.signal.bucket !== b.signal.bucket) {
        return a.signal.bucket === "main" ? -1 : 1;
      }
      return b.signal.date.localeCompare(a.signal.date);
    });

  return ranked.slice(0, state.evidenceLimit).map((entry) => entry.signal);
}

function countBy<T extends string>(values: T[]): Record<T, number> {
  return values.reduce(
    (acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    },
    {} as Record<T, number>,
  );
}

function renderCheckboxGroup(container: HTMLElement, values: string[], selected: Set<string>, name: string): void {
  container.innerHTML = values
    .map((value) => {
      const checked = selected.has(value) ? "checked" : "";
      return `
        <label class="radar-demo-app__check">
          <input type="checkbox" name="${name}" value="${value}" ${checked} />
          <span>${value}</span>
        </label>
      `;
    })
    .join("");
}

function readCheckboxGroup(root: HTMLElement, name: string): Set<string> {
  return new Set(
    Array.from(root.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`)).map(
      (input) => input.value,
    ),
  );
}

function renderControls(root: HTMLElement, data: RadarData, state: DemoState): void {
  const companySelect = requireElement<HTMLSelectElement>(root, "[data-control='company']");
  companySelect.innerHTML = data.companies
    .map((company) => `<option value="${company.id}">${company.name}</option>`)
    .join("");
  companySelect.value = state.companyId;

  renderCheckboxGroup(requireElement(root, "[data-control-group='categories']"), data.categories, state.categories, "category");
  renderCheckboxGroup(requireElement(root, "[data-control-group='buckets']"), ["main", "weak"], state.buckets, "bucket");
  renderCheckboxGroup(requireElement(root, "[data-control-group='directions']"), ["opportunity", "neutral", "risk"], state.directions, "direction");
  renderCheckboxGroup(requireElement(root, "[data-control-group='confidences']"), ["high", "medium", "low"], state.confidences, "confidence");
  renderCheckboxGroup(
    requireElement(root, "[data-control-group='source-types']"),
    ["webpages", "pdfs", "northdata_publications", "northdata_events"],
    state.sourceTypes,
    "sourceType",
  );

  const strategySelect = requireElement<HTMLSelectElement>(root, "[data-control='strategy']");
  strategySelect.value = state.strategy;

  const querySelect = requireElement<HTMLSelectElement>(root, "[data-control='vector-query']");
  querySelect.innerHTML = data.vectorQueries
    .map((query) => `<option value="${query.id}">${query.label}</option>`)
    .join("");
  querySelect.value = state.vectorQueryId;

  const similarityInput = requireElement<HTMLInputElement>(root, "[data-control='similarity']");
  similarityInput.value = String(Math.round(state.minSimilarity * 100));
  similarityInput.disabled = state.strategy === "exact";

  const limitInput = requireElement<HTMLInputElement>(root, "[data-control='limit']");
  limitInput.value = String(state.evidenceLimit);

  const secondaryInput = requireElement<HTMLInputElement>(root, "[data-control='secondary']");
  secondaryInput.checked = state.includeSecondaryCategories;
}

function readControls(root: HTMLElement, state: DemoState): DemoState {
  const next: DemoState = {
    ...state,
    companyId: requireElement<HTMLSelectElement>(root, "[data-control='company']").value,
    categories: readCheckboxGroup(root, "category"),
    buckets: readCheckboxGroup(root, "bucket"),
    directions: readCheckboxGroup(root, "direction"),
    confidences: readCheckboxGroup(root, "confidence"),
    sourceTypes: readCheckboxGroup(root, "sourceType"),
    strategy: requireElement<HTMLSelectElement>(root, "[data-control='strategy']").value as DemoState["strategy"],
    vectorQueryId: requireElement<HTMLSelectElement>(root, "[data-control='vector-query']").value,
    minSimilarity: Number(requireElement<HTMLInputElement>(root, "[data-control='similarity']").value) / 100,
    evidenceLimit: Number(requireElement<HTMLInputElement>(root, "[data-control='limit']").value),
    includeSecondaryCategories: requireElement<HTMLInputElement>(root, "[data-control='secondary']").checked,
  };

  if (next.categories.size === 0) next.categories = new Set(state.categories);
  if (next.buckets.size === 0) next.buckets = new Set(state.buckets);
  if (next.directions.size === 0) next.directions = new Set(state.directions);
  if (next.confidences.size === 0) next.confidences = new Set(state.confidences);
  if (next.sourceTypes.size === 0) next.sourceTypes = new Set(state.sourceTypes);

  return next;
}

function renderStatus(root: HTMLElement, data: RadarData, state: DemoState, signals: RadarSignal[]): void {
  const query = data.vectorQueries.find((item) => item.id === state.vectorQueryId);
  requireElement(root, "[data-status='retrieval']").textContent =
    state.strategy === "vector"
      ? `${signals.length} accepted evidence rows ranked for "${query?.label || "selected query"}".`
      : `${signals.length} accepted evidence rows from metadata filters.`;
  requireElement(root, "[data-status='synthesis']").textContent =
    "Synthesis panel loaded from pre-generated sample output. No live LLM call is made.";
}

function renderMetrics(root: HTMLElement, company: RadarCompany, signals: RadarSignal[]): void {
  const bucketCounts = countBy(signals.map((signal) => signal.bucket));
  const directionCounts = countBy(signals.map((signal) => signal.direction));
  const categoryCount = new Set(signals.map((signal) => signal.category)).size;
  requireElement(root, "[data-metrics]").innerHTML = `
    <article><strong>${signals.length}</strong><span>Retrieved signals</span></article>
    <article><strong>${bucketCounts.main || 0}</strong><span>Main signals</span></article>
    <article><strong>${directionCounts.opportunity || 0}</strong><span>Opportunities</span></article>
    <article><strong>${directionCounts.risk || 0}</strong><span>Risks</span></article>
    <article><strong>${categoryCount}</strong><span>Active categories</span></article>
    <article><strong>${titleCase(company.synthesis.confidence)}</strong><span>Synthesis confidence</span></article>
  `;
}

function renderTabs(root: HTMLElement, state: DemoState): void {
  const tabs = requireElement(root, "[data-tabs]");
  tabs.innerHTML = TAB_LABELS.map(
    (label) => `
      <button type="button" data-tab="${label}" aria-pressed="${state.activeTab === label}">
        ${label}
      </button>
    `,
  ).join("");
}

function renderOverview(container: HTMLElement, company: RadarCompany): void {
  container.innerHTML = `
    <section class="radar-demo-app__overview">
      <div class="radar-demo-app__outlook">
        <p class="radar-demo-app__panel-label">BD outlook</p>
        <h3>${company.fullName}</h3>
        <p>${company.synthesis.outlook}</p>
        <div class="radar-demo-app__position-card">
          <strong>Strategic direction</strong>
          <span>${company.synthesis.strategicDirection}</span>
        </div>
      </div>
      <div class="radar-demo-app__takeaway-list">
        <p class="radar-demo-app__panel-label">Key takeaways</p>
        ${company.synthesis.keyTakeaways.map((item) => `<article>${item}</article>`).join("")}
      </div>
      <div class="radar-demo-app__priority-grid">
        ${renderPriorityCard("Top opportunities", company.synthesis.topOpportunities, "opportunity")}
        ${renderPriorityCard("Emerging opportunities", company.synthesis.emergingOpportunities, "neutral")}
        ${renderPriorityCard("Top risks", company.synthesis.topRisks, "risk")}
      </div>
      <div class="radar-demo-app__actions-panel">
        <p class="radar-demo-app__panel-label">Follow-up actions</p>
        <ol>${company.synthesis.followUpActions.map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>
    </section>
  `;
}

function renderPriorityCard(title: string, items: string[], tone: string): string {
  return `
    <article class="radar-demo-app__priority-card ${badgeClass(tone)}">
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function renderFindings(container: HTMLElement, company: RadarCompany, signals: RadarSignal[]): void {
  const signalMap = new Map(signals.map((signal) => [signal.id, signal]));
  container.innerHTML = `
    <section class="radar-demo-app__findings">
      <div class="radar-demo-app__section-heading">
        <h3>Important findings from signals</h3>
        <p>Grouped company developments synthesized from the retrieved evidence set.</p>
      </div>
      <div class="radar-demo-app__finding-list">
        ${company.synthesis.findings
          .map((finding) => {
            const supportCount = finding.supportingSignalIds.filter((id) => signalMap.has(id)).length;
            return `
              <article class="radar-demo-app__finding-card">
                <div class="radar-demo-app__finding-head">
                  <h4>${finding.title}</h4>
                  <span class="radar-demo-app__badge ${badgeClass(finding.direction)}">${titleCase(finding.direction)}</span>
                </div>
                <p>${finding.summary}</p>
                <div class="radar-demo-app__tag-row">
                  ${finding.categories.map((category) => `<span>${category}</span>`).join("")}
                </div>
                <p class="radar-demo-app__link-note">${supportCount} of ${finding.supportingSignalIds.length} cited signals visible under current filters.</p>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderEvidence(container: HTMLElement, state: DemoState, signals: RadarSignal[]): void {
  container.innerHTML = `
    <section class="radar-demo-app__evidence">
      <div class="radar-demo-app__section-heading">
        <h3>Underlying LLM1 evidence</h3>
        <p>Accepted evidence rows remain available for pre-generated synthesis and traceability.</p>
      </div>
      <div class="radar-demo-app__category-summary">
        ${renderCategorySummary(signals)}
      </div>
      <div class="radar-demo-app__evidence-list">
        ${signals.map((signal) => renderSignal(signal, state)).join("") || "<p>No evidence matches the selected filters.</p>"}
      </div>
    </section>
  `;
}

function renderCategorySummary(signals: RadarSignal[]): string {
  const counts = countBy(signals.map((signal) => signal.category));
  return Object.entries(counts)
    .map(([category, count]) => `<article><strong>${count}</strong><span>${category}</span></article>`)
    .join("");
}

function renderSignal(signal: RadarSignal, state: DemoState): string {
  const similarity = signal.similarity[state.vectorQueryId] || 0;
  const similarityBadge =
    state.strategy === "vector" ? `<span class="radar-demo-app__badge is-similarity">Similarity ${formatPercent(similarity)}</span>` : "";

  return `
    <article class="radar-demo-app__signal-card">
      <div class="radar-demo-app__signal-head">
        <div>
          <h4>${signal.id.toUpperCase()} - ${signal.title}</h4>
          <p>${signal.companyId} - ${signal.date} - ${labelForSourceType(signal.sourceType)}</p>
        </div>
        <div class="radar-demo-app__badge-row">
          <span class="radar-demo-app__badge ${badgeClass(signal.bucket)}">${titleCase(signal.bucket)}</span>
          <span class="radar-demo-app__badge ${badgeClass(signal.direction)}">${titleCase(signal.direction)}</span>
          <span class="radar-demo-app__badge ${badgeClass(signal.confidence)}">${titleCase(signal.confidence)}</span>
          ${similarityBadge}
        </div>
      </div>
      <div class="radar-demo-app__signal-grid">
        <div><strong>Primary category</strong><span>${signal.category}</span></div>
        <div><strong>Secondary categories</strong><span>${signal.secondaryCategories.join(", ") || "-"}</span></div>
        <div><strong>Source</strong><span>${signal.sourceLabel}</span></div>
      </div>
      <details>
        <summary>Show evidence details</summary>
        <div class="radar-demo-app__detail-grid">
          ${renderTextBlock("Short summary", signal.shortSummary)}
          ${renderTextBlock("Evidence", signal.evidence)}
          ${renderTextBlock("Why it matters for PNTN", signal.whyItMatters)}
          ${renderTextBlock("Possible business suggestion", signal.suggestion)}
          ${renderTextBlock("Traceability", `source_id=${signal.id} | source=${signal.sourceUrl}`)}
        </div>
      </details>
    </article>
  `;
}

function renderTextBlock(title: string, value: string): string {
  return `<section><strong>${title}</strong><p>${value}</p></section>`;
}

function renderCompanyStructure(container: HTMLElement, company: RadarCompany): void {
  container.innerHTML = `
    <section class="radar-demo-app__context-grid">
      <div>
        <h3>Related companies</h3>
        ${company.structure.relatedCompanies
          .map(
            (item) => `
              <article class="radar-demo-app__context-card">
                <h4>${item.name}</h4>
                <p>${item.relationship}</p>
                <span>${item.status}</span>
              </article>
            `,
          )
          .join("")}
      </div>
      <div>
        <h3>Related persons</h3>
        ${company.structure.relatedPeople
          .map(
            (item) => `
              <article class="radar-demo-app__context-card">
                <h4>${item.name}</h4>
                <p>${item.role}</p>
                <span>${item.note}</span>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFinancials(container: HTMLElement, company: RadarCompany): void {
  container.innerHTML = `
    <section class="radar-demo-app__context-grid is-three">
      ${company.financials
        .map(
          (item) => `
            <article class="radar-demo-app__context-card">
              <p class="radar-demo-app__panel-label">${item.label}</p>
              <h3>${item.value}</h3>
              <p>${item.note}</p>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderPatents(container: HTMLElement, company: RadarCompany): void {
  container.innerHTML = `
    <section class="radar-demo-app__context-grid">
      <div>
        <h3>Patents</h3>
        ${company.patents.map((item) => renderIpCard(item)).join("")}
      </div>
      <div>
        <h3>Trademarks</h3>
        ${company.trademarks.map((item) => renderIpCard(item)).join("")}
      </div>
    </section>
  `;
}

function renderIpCard(item: { title: string; date: string; note: string }): string {
  return `
    <article class="radar-demo-app__context-card">
      <h4>${item.title}</h4>
      <p>${item.note}</p>
      <span>${item.date}</span>
    </article>
  `;
}

function renderPanel(root: HTMLElement, data: RadarData, state: DemoState, signals: RadarSignal[]): void {
  const company = getCompany(data, state);
  const panel = requireElement(root, "[data-panel]");
  if (state.activeTab === "Key Takeaways") renderOverview(panel, company);
  if (state.activeTab === "Findings") renderFindings(panel, company, signals);
  if (state.activeTab === "Evidence") renderEvidence(panel, state, signals);
  if (state.activeTab === "Company Structure") renderCompanyStructure(panel, company);
  if (state.activeTab === "Financial Metrics") renderFinancials(panel, company);
  if (state.activeTab === "Patents & Trademarks") renderPatents(panel, company);
}

function renderQueryDescription(root: HTMLElement, data: RadarData, state: DemoState): void {
  const query = data.vectorQueries.find((item) => item.id === state.vectorQueryId);
  requireElement(root, "[data-query-description]").textContent =
    state.strategy === "vector"
      ? query?.description || ""
      : "Exact metadata mode ignores semantic similarity and uses the selected scope and filters.";
}

function render(root: HTMLElement, data: RadarData, state: DemoState): void {
  const company = getCompany(data, state);
  const signals = getFilteredSignals(data, state);
  renderQueryDescription(root, data, state);
  renderStatus(root, data, state, signals);
  renderMetrics(root, company, signals);
  renderTabs(root, state);
  renderPanel(root, data, state, signals);
  requireElement(root, "[data-company-description]").textContent = company.description;
}

function initialize(root: HTMLElement): void {
  const data = parseData(root);
  let state: DemoState = {
    companyId: data.companies[0]?.id || "",
    categories: new Set(data.categories),
    buckets: new Set(["main", "weak"]),
    directions: new Set(["opportunity", "neutral", "risk"]),
    confidences: new Set(["high", "medium", "low"]),
    sourceTypes: new Set(["webpages", "pdfs", "northdata_publications", "northdata_events"]),
    strategy: "vector",
    vectorQueryId: data.vectorQueries[0]?.id || "",
    minSimilarity: 0.25,
    evidenceLimit: 50,
    includeSecondaryCategories: true,
    activeTab: "Key Takeaways",
  };

  renderControls(root, data, state);
  render(root, data, state);

  root.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
    state = readControls(root, state);
    renderControls(root, data, state);
    render(root, data, state);
  });

  root.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const tab = target.closest<HTMLElement>("[data-tab]");
    if (tab?.dataset.tab) {
      state = { ...state, activeTab: tab.dataset.tab };
      render(root, data, state);
      return;
    }

    const action = target.closest<HTMLElement>("[data-action]");
    if (action?.dataset.action === "reset") {
      state = {
        ...state,
        categories: new Set(data.categories),
        buckets: new Set(["main", "weak"]),
        directions: new Set(["opportunity", "neutral", "risk"]),
        confidences: new Set(["high", "medium", "low"]),
        sourceTypes: new Set(["webpages", "pdfs", "northdata_publications", "northdata_events"]),
        strategy: "vector",
        vectorQueryId: data.vectorQueries[0]?.id || "",
        minSimilarity: 0.25,
        evidenceLimit: 50,
        includeSecondaryCategories: true,
      };
      renderControls(root, data, state);
      render(root, data, state);
    }
  });
}

for (const root of document.querySelectorAll<HTMLElement>("[data-radar-demo-app]")) {
  initialize(root);
}
