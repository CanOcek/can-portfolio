import type { MazeGenerationOptions, MazeRunMetrics, SolverResult } from "./types";

export function toMetrics(options: MazeGenerationOptions, result: SolverResult): MazeRunMetrics {
  return {
    size: options.size,
    seed: options.seed,
    braid: options.braid,
    algorithm: result.algorithm,
    runtimeMs: result.runtimeMs,
    pathLength: result.path.length,
    expandedCells: result.expandedCount,
  };
}
