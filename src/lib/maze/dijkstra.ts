import { getCell, getLinkedNeighbors, pointKey, pointsEqual } from "./maze";
import { PriorityQueue } from "./priorityQueue";
import { completeTrace, nowMs, reconstructPath } from "./solverEvents";
import type { Point, SolverEvent, SolverInput, SolverResult, SolverTrace } from "./types";

export function solveDijkstra(input: SolverInput): SolverTrace {
  const startTime = nowMs();
  const start = getCell(input.maze, input.start.x, input.start.y);
  const goal = getCell(input.maze, input.goal.x, input.goal.y);
  const startKey = pointKey(start);
  const goalKey = pointKey(goal);
  const distances = new Map<string, number>([[startKey, 0]]);
  const cameFrom = new Map<string, string>();
  const expanded = new Set<string>();
  const explored: Point[] = [];
  const events: SolverEvent[] = [{ type: "start", point: start }];
  const queue = new PriorityQueue<Point>();

  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    const entry = queue.dequeue();
    if (!entry) {
      break;
    }

    const current = getCell(input.maze, entry.item.x, entry.item.y);
    const currentKey = pointKey(current);
    const currentDistance = distances.get(currentKey);

    if (currentDistance === undefined || entry.priority !== currentDistance || expanded.has(currentKey)) {
      continue;
    }

    expanded.add(currentKey);
    explored.push({ x: current.x, y: current.y });
    events.push({ type: "expand", point: current });

    if (pointsEqual(current, goal)) {
      break;
    }

    for (const neighbor of getLinkedNeighbors(input.maze, current)) {
      const neighborKey = pointKey(neighbor);
      const tentativeDistance = currentDistance + 1;

      if (tentativeDistance < (distances.get(neighborKey) ?? Number.POSITIVE_INFINITY)) {
        distances.set(neighborKey, tentativeDistance);
        cameFrom.set(neighborKey, currentKey);
        queue.enqueue(neighbor, tentativeDistance);
        events.push({ type: "discover", point: neighbor });
      }
    }
  }

  const path = reconstructPath(cameFrom, startKey, goalKey);
  const result: SolverResult = {
    algorithm: "dijkstra",
    path,
    explored,
    expandedCount: explored.length,
    runtimeMs: nowMs() - startTime,
    found: path.length > 0,
  };

  return completeTrace(events, result);
}
