import { SeededRandom } from "./rng";
import { countLinks, forEachCell, getClosedNeighbors, openPassage } from "./maze";
import type { Maze } from "./types";

export function braidMaze(maze: Maze, rng: SeededRandom): void {
  const deadEnds = new Set<string>();

  forEachCell(maze, (cell) => {
    if (countLinks(cell) === 1) {
      deadEnds.add(`${cell.x},${cell.y}`);
    }
  });

  forEachCell(maze, (cell) => {
    if (!deadEnds.has(`${cell.x},${cell.y}`) || countLinks(cell) !== 1) {
      return;
    }

    const closedNeighbors = getClosedNeighbors(maze, cell);
    if (closedNeighbors.length > 0) {
      openPassage(maze, cell, rng.pick(closedNeighbors));
    }
  });
}
