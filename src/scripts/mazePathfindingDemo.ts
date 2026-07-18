import { solveAStar } from "../lib/maze/aStar";
import { solveDijkstra } from "../lib/maze/dijkstra";
import { generateMaze } from "../lib/maze/generateMaze";
import { pointKey } from "../lib/maze/maze";
import type { AlgorithmName, Maze, MazeGenerationOptions, Point, SolverEvent, SolverTrace } from "../lib/maze/types";

type Mode = AlgorithmName | "compare";

interface PanelState {
  algorithm: AlgorithmName;
  canvas: HTMLCanvasElement;
  summary: HTMLElement;
  metrics: HTMLElement;
  trace: SolverTrace;
  cursor: number;
  discovered: Set<string>;
  expanded: Set<string>;
  path: Point[];
}

interface DemoState {
  maze: Maze;
  options: MazeGenerationOptions;
  start: Point;
  goal: Point;
  traces: Record<AlgorithmName, SolverTrace>;
  panels: Record<AlgorithmName, PanelState>;
  mode: Mode;
  speed: number;
  running: boolean;
  frameId: number | null;
}

const colors = {
  background: "#0c0f13",
  cell: "#111822",
  wall: "rgba(244, 241, 234, 0.88)",
  explored: "rgba(122, 167, 255, 0.42)",
  discovered: "rgba(244, 241, 234, 0.12)",
  path: "#7ec7be",
  start: "#d58b54",
  goal: "#e66b7a",
};

function clampInteger(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.max(min, Math.min(max, Math.round(value)));
}

function getControl<T extends HTMLElement>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Missing maze demo element: ${selector}`);
  }

  return element;
}

function getOptions(root: HTMLElement): { options: MazeGenerationOptions; mode: Mode; speed: number } {
  const algorithm = getControl<HTMLSelectElement>(root, '[data-control="algorithm"]').value as Mode;
  const size = clampInteger(Number(getControl<HTMLInputElement>(root, '[data-control="size"]').value), 8, 60);
  const seed = clampInteger(Number(getControl<HTMLInputElement>(root, '[data-control="seed"]').value), 1, 999999999);
  const braid = getControl<HTMLInputElement>(root, '[data-control="braid"]').checked;
  const speed = clampInteger(Number(getControl<HTMLInputElement>(root, '[data-control="speed"]').value), 1, 240);

  return {
    options: { size, seed, braid },
    mode: algorithm === "astar" || algorithm === "dijkstra" ? algorithm : "compare",
    speed,
  };
}

function fifthPoints(size: number): { start: Point; goal: Point } {
  return {
    start: { x: Math.floor(size / 5), y: Math.floor(size / 5) },
    goal: { x: Math.floor((4 * size) / 5), y: Math.floor((4 * size) / 5) },
  };
}

function createTrace(options: MazeGenerationOptions): {
  maze: Maze;
  start: Point;
  goal: Point;
  traces: Record<AlgorithmName, SolverTrace>;
} {
  const maze = generateMaze(options);
  const { start, goal } = fifthPoints(options.size);
  const input = { maze, start, goal };

  return {
    maze,
    start,
    goal,
    traces: {
      dijkstra: solveDijkstra(input),
      astar: solveAStar(input),
    },
  };
}

function createPanel(
  root: HTMLElement,
  algorithm: AlgorithmName,
  trace: SolverTrace,
): PanelState {
  return {
    algorithm,
    canvas: getControl<HTMLCanvasElement>(root, `[data-canvas="${algorithm}"]`),
    summary: getControl<HTMLElement>(root, `[data-summary="${algorithm}"]`),
    metrics: getControl<HTMLElement>(root, `[data-metrics="${algorithm}"]`),
    trace,
    cursor: 0,
    discovered: new Set(),
    expanded: new Set(),
    path: [],
  };
}

function resetPanel(panel: PanelState, trace = panel.trace): void {
  panel.trace = trace;
  panel.cursor = 0;
  panel.discovered.clear();
  panel.expanded.clear();
  panel.path = [];
}

function applyEvent(panel: PanelState, event: SolverEvent): void {
  if (event.type === "discover") {
    panel.discovered.add(pointKey(event.point));
  }

  if (event.type === "expand") {
    const key = pointKey(event.point);
    panel.expanded.add(key);
    panel.discovered.delete(key);
  }

  if (event.type === "path") {
    panel.path = event.points;
  }
}

function stepPanel(panel: PanelState, steps: number): boolean {
  for (let index = 0; index < steps && panel.cursor < panel.trace.events.length; index += 1) {
    applyEvent(panel, panel.trace.events[panel.cursor]);
    panel.cursor += 1;
  }

  return panel.cursor < panel.trace.events.length;
}

function activeAlgorithms(mode: Mode): AlgorithmName[] {
  return mode === "compare" ? ["dijkstra", "astar"] : [mode];
}

function syncCanvas(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const rect = canvas.getBoundingClientRect();
  const scale = Math.max(1, window.devicePixelRatio || 1);
  const width = Math.max(320, Math.floor(rect.width * scale));
  const height = width;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas 2D context is unavailable");
  }

  context.setTransform(scale, 0, 0, scale, 0, 0);
  return context;
}

function renderPanel(panel: PanelState, maze: Maze, start: Point, goal: Point): void {
  const context = syncCanvas(panel.canvas);
  const width = panel.canvas.width / Math.max(1, window.devicePixelRatio || 1);
  const size = maze.size;
  const padding = 12;
  const gridSize = width - padding * 2;
  const cellSize = gridSize / size;

  context.clearRect(0, 0, width, width);
  context.fillStyle = colors.background;
  context.fillRect(0, 0, width, width);

  context.fillStyle = colors.cell;
  context.fillRect(padding, padding, gridSize, gridSize);

  for (const key of panel.discovered) {
    const [x, y] = key.split(",").map(Number);
    context.fillStyle = colors.discovered;
    context.fillRect(padding + x * cellSize, padding + y * cellSize, cellSize, cellSize);
  }

  for (const key of panel.expanded) {
    const [x, y] = key.split(",").map(Number);
    context.fillStyle = colors.explored;
    context.fillRect(padding + x * cellSize, padding + y * cellSize, cellSize, cellSize);
  }

  if (panel.path.length > 0) {
    context.strokeStyle = colors.path;
    context.lineWidth = Math.max(2, cellSize * 0.28);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    panel.path.forEach((point, index) => {
      const x = padding + point.x * cellSize + cellSize / 2;
      const y = padding + point.y * cellSize + cellSize / 2;
      if (index === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    });
    context.stroke();
  }

  drawMarker(context, start, cellSize, padding, colors.start);
  drawMarker(context, goal, cellSize, padding, colors.goal);

  context.strokeStyle = colors.wall;
  context.lineWidth = Math.max(1.1, Math.min(2, cellSize * 0.12));
  context.beginPath();

  for (const row of maze.cells) {
    for (const cell of row) {
      const x = padding + cell.x * cellSize;
      const y = padding + cell.y * cellSize;

      if (!cell.links.north) {
        context.moveTo(x, y);
        context.lineTo(x + cellSize, y);
      }
      if (!cell.links.east) {
        context.moveTo(x + cellSize, y);
        context.lineTo(x + cellSize, y + cellSize);
      }
      if (!cell.links.south) {
        context.moveTo(x, y + cellSize);
        context.lineTo(x + cellSize, y + cellSize);
      }
      if (!cell.links.west) {
        context.moveTo(x, y);
        context.lineTo(x, y + cellSize);
      }
    }
  }

  context.stroke();

  renderMetrics(panel, maze);
}

function renderMetrics(panel: PanelState, maze: Maze): void {
  const result = panel.trace.result;
  const totalCells = maze.size * maze.size;
  const expandedPercent = totalCells === 0 ? 0 : (result.expandedCount / totalCells) * 100;
  const pathLabel = result.found ? result.path.length.toString() : "None";
  const runtime =
    result.runtimeMs >= 10 ? result.runtimeMs.toFixed(1) : result.runtimeMs.toFixed(2);

  panel.summary.textContent = result.found
    ? `Shortest route found after searching ${expandedPercent.toFixed(1)}% of the maze.`
    : "No route found.";

  panel.metrics.innerHTML = `
    <div class="maze-panel__metric-grid">
      <div class="maze-panel__metric">
        <strong>${pathLabel}</strong>
        <span>path cells</span>
      </div>
      <div class="maze-panel__metric">
        <strong>${result.expandedCount}</strong>
        <span>cells searched</span>
      </div>
      <div class="maze-panel__metric">
        <strong>${runtime}</strong>
        <span>algorithm ms</span>
      </div>
    </div>
  `;
}

function drawMarker(
  context: CanvasRenderingContext2D,
  point: Point,
  cellSize: number,
  padding: number,
  color: string,
): void {
  context.fillStyle = color;
  context.beginPath();
  context.arc(
    padding + point.x * cellSize + cellSize / 2,
    padding + point.y * cellSize + cellSize / 2,
    Math.max(3, cellSize * 0.31),
    0,
    Math.PI * 2,
  );
  context.fill();
}

function render(state: DemoState, root: HTMLElement): void {
  const grid = getControl<HTMLElement>(root, "[data-panel-grid]");

  for (const algorithm of ["dijkstra", "astar"] as const) {
    const panelElement = getControl<HTMLElement>(root, `[data-panel="${algorithm}"]`);
    panelElement.hidden = state.mode !== "compare" && state.mode !== algorithm;
    renderPanel(state.panels[algorithm], state.maze, state.start, state.goal);
  }

  grid.classList.toggle("is-single", state.mode !== "compare");
}

function stop(state: DemoState): void {
  state.running = false;
  if (state.frameId !== null) {
    window.cancelAnimationFrame(state.frameId);
    state.frameId = null;
  }
}

function play(state: DemoState, root: HTMLElement): void {
  stop(state);
  state.running = true;

  const tick = () => {
    let hasRemaining = false;

    for (const algorithm of activeAlgorithms(state.mode)) {
      hasRemaining = stepPanel(state.panels[algorithm], state.speed) || hasRemaining;
    }

    render(state, root);

    if (hasRemaining && state.running) {
      state.frameId = window.requestAnimationFrame(tick);
    } else {
      stop(state);
    }
  };

  tick();
}

function rebuild(root: HTMLElement, existingState?: DemoState): DemoState {
  if (existingState) {
    stop(existingState);
  }

  const { options, mode, speed } = getOptions(root);
  const { maze, start, goal, traces } = createTrace(options);
  const panels = {
    dijkstra: createPanel(root, "dijkstra", traces.dijkstra),
    astar: createPanel(root, "astar", traces.astar),
  };

  return {
    maze,
    options,
    start,
    goal,
    traces,
    panels,
    mode,
    speed,
    running: false,
    frameId: null,
  };
}

function resetAnimation(state: DemoState): void {
  resetPanel(state.panels.dijkstra, state.traces.dijkstra);
  resetPanel(state.panels.astar, state.traces.astar);
}

function initializeDemo(root: HTMLElement): void {
  let state = rebuild(root);
  const sizeControl = getControl<HTMLInputElement>(root, '[data-control="size"]');
  const speedControl = getControl<HTMLInputElement>(root, '[data-control="speed"]');
  const sizeOutput = getControl<HTMLOutputElement>(root, '[data-output="size"]');
  const speedOutput = getControl<HTMLOutputElement>(root, '[data-output="speed"]');
  const seedControl = getControl<HTMLInputElement>(root, '[data-control="seed"]');

  const syncOutputs = () => {
    sizeOutput.value = sizeControl.value;
    speedOutput.value = speedControl.value;
  };

  const regenerate = () => {
    syncOutputs();
    state = rebuild(root, state);
    render(state, root);
  };

  root.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.matches("[data-control]")) {
      return;
    }

    if (target === speedControl) {
      state.speed = clampInteger(Number(speedControl.value), 1, 240);
      syncOutputs();
      return;
    }

    regenerate();
  });

  root.addEventListener("change", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.matches("[data-control]")) {
      regenerate();
    }
  });

  root.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const action = target.dataset.action;
    if (!action) {
      return;
    }

    if (action === "new-seed") {
      seedControl.value = String(Math.floor(Math.random() * 999999999) + 1);
      regenerate();
    }

    if (action === "run") {
      const completed = activeAlgorithms(state.mode).every(
        (algorithm) => state.panels[algorithm].cursor >= state.panels[algorithm].trace.events.length,
      );
      if (completed) {
        resetAnimation(state);
      }
      play(state, root);
    }

    if (action === "pause") {
      stop(state);
    }

    if (action === "reset") {
      stop(state);
      resetAnimation(state);
      render(state, root);
    }
  });

  const observer = new ResizeObserver(() => render(state, root));
  observer.observe(root);

  syncOutputs();
  render(state, root);
}

for (const root of document.querySelectorAll<HTMLElement>("[data-maze-demo]")) {
  initializeDemo(root);
}
