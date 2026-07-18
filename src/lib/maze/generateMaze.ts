import { braidMaze } from "./braidMaze";
import { createMaze, getAllNeighbors, openPassage, pointKey } from "./maze";
import { SeededRandom } from "./rng";
import type { Cell, Maze, MazeGenerationOptions } from "./types";

export function generateMaze(options: MazeGenerationOptions): Maze {
  const maze = createMaze(options.size);
  const rng = new SeededRandom(options.seed);
  const visited = new Set<string>();
  const stack: Cell[] = [maze.cells[0][0]];

  visited.add(pointKey(maze.cells[0][0]));

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) {
      break;
    }

    const unvisitedNeighbors = getAllNeighbors(maze, current).filter(
      (neighbor) => !visited.has(pointKey(neighbor)),
    );

    if (unvisitedNeighbors.length > 0) {
      stack.push(current);
      const chosen = rng.pick(unvisitedNeighbors);
      openPassage(maze, current, chosen);
      visited.add(pointKey(chosen));
      stack.push(chosen);
    }
  }

  if (options.braid) {
    braidMaze(maze, rng);
  }

  return maze;
}
