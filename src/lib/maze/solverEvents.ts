import { pointFromKey } from "./maze";
import type { Point, SolverEvent, SolverResult, SolverTrace } from "./types";

export function nowMs(): number {
  return globalThis.performance?.now() ?? Date.now();
}

export function reconstructPath(cameFrom: Map<string, string>, startKey: string, goalKey: string): Point[] {
  if (startKey === goalKey) {
    return [pointFromKey(startKey)];
  }

  if (!cameFrom.has(goalKey)) {
    return [];
  }

  const pathKeys = [goalKey];
  let currentKey = goalKey;

  while (currentKey !== startKey) {
    const previousKey = cameFrom.get(currentKey);
    if (!previousKey) {
      return [];
    }

    currentKey = previousKey;
    pathKeys.push(currentKey);
  }

  return pathKeys.reverse().map(pointFromKey);
}

export function completeTrace(events: SolverEvent[], result: SolverResult): SolverTrace {
  events.push({ type: "path", points: result.path });
  events.push({ type: "done", result });
  return { events, result };
}
