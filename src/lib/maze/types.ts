export type Direction = "north" | "east" | "south" | "west";

export type AlgorithmName = "dijkstra" | "astar";

export interface Point {
  x: number;
  y: number;
}

export interface Cell extends Point {
  links: Record<Direction, boolean>;
}

export interface Maze {
  size: number;
  cells: Cell[][];
}

export interface MazeGenerationOptions {
  size: number;
  seed: number;
  braid: boolean;
}

export interface SolverInput {
  maze: Maze;
  start: Point;
  goal: Point;
}

export interface SolverResult {
  algorithm: AlgorithmName;
  path: Point[];
  explored: Point[];
  expandedCount: number;
  runtimeMs: number;
  found: boolean;
}

export type SolverEvent =
  | { type: "start"; point: Point }
  | { type: "discover"; point: Point }
  | { type: "expand"; point: Point }
  | { type: "path"; points: Point[] }
  | { type: "done"; result: SolverResult };

export interface SolverTrace {
  events: SolverEvent[];
  result: SolverResult;
}

export interface MazeRunMetrics {
  size: number;
  seed: number;
  braid: boolean;
  algorithm: AlgorithmName;
  runtimeMs: number;
  pathLength: number;
  expandedCells: number;
}
