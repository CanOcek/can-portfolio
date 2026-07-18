import { getCell, getLinkedNeighbors, pointKey } from "./maze";
import type { Maze, Point } from "./types";

export function reachableCellCount(maze: Maze, start: Point = { x: 0, y: 0 }): number {
  const queue = [getCell(maze, start.x, start.y)];
  const visited = new Set<string>([pointKey(queue[0])]);

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) {
      break;
    }

    for (const neighbor of getLinkedNeighbors(maze, current)) {
      const key = pointKey(neighbor);
      if (!visited.has(key)) {
        visited.add(key);
        queue.push(neighbor);
      }
    }
  }

  return visited.size;
}

export function isFullyReachable(maze: Maze): boolean {
  return reachableCellCount(maze) === maze.size * maze.size;
}

export function isValidPath(maze: Maze, path: Point[]): boolean {
  if (path.length === 0) {
    return false;
  }

  for (let index = 1; index < path.length; index += 1) {
    const previous = getCell(maze, path[index - 1].x, path[index - 1].y);
    const current = path[index];
    const linked = getLinkedNeighbors(maze, previous).some(
      (neighbor) => neighbor.x === current.x && neighbor.y === current.y,
    );

    if (!linked) {
      return false;
    }
  }

  return true;
}
