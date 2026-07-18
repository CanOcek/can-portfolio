import { getCell, getLinkedNeighbors, pointKey, pointsEqual } from "./maze";
import { PriorityQueue } from "./priorityQueue";
import { completeTrace, nowMs, reconstructPath } from "./solverEvents";
import type { Point, SolverEvent, SolverInput, SolverResult, SolverTrace } from "./types";

function manhattan(a: Point, b: Point): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function solveAStar(input: SolverInput): SolverTrace {
  const startTime = nowMs();
  const start = getCell(input.maze, input.start.x, input.start.y);
  const goal = getCell(input.maze, input.goal.x, input.goal.y);
  const startKey = pointKey(start);
  const goalKey = pointKey(goal);
  const gScore = new Map<string, number>([[startKey, 0]]);
  const cameFrom = new Map<string, string>();
  const expanded = new Set<string>();
  const explored: Point[] = [];
  const events: SolverEvent[] = [{ type: "start", point: start }];
  const queue = new PriorityQueue<Point>();

  queue.enqueue(start, manhattan(start, goal));

  while (!queue.isEmpty()) {
    const entry = queue.dequeue();
    if (!entry) {
      break;
    }

    const current = getCell(input.maze, entry.item.x, entry.item.y);
    const currentKey = pointKey(current);
    const currentGScore = gScore.get(currentKey);
    const expectedPriority =
      currentGScore === undefined ? Number.POSITIVE_INFINITY : currentGScore + manhattan(current, goal);

    if (currentGScore === undefined || entry.priority !== expectedPriority || expanded.has(currentKey)) {
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
      const tentativeGScore = currentGScore + 1;

      if (tentativeGScore < (gScore.get(neighborKey) ?? Number.POSITIVE_INFINITY)) {
        cameFrom.set(neighborKey, currentKey);
        gScore.set(neighborKey, tentativeGScore);
        queue.enqueue(neighbor, tentativeGScore + manhattan(neighbor, goal));
        events.push({ type: "discover", point: neighbor });
      }
    }
  }

  const path = reconstructPath(cameFrom, startKey, goalKey);
  const result: SolverResult = {
    algorithm: "astar",
    path,
    explored,
    expandedCount: explored.length,
    runtimeMs: nowMs() - startTime,
    found: path.length > 0,
  };

  return completeTrace(events, result);
}
