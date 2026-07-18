import { directionDelta, directions, oppositeDirection } from "./directions";
import type { Cell, Direction, Maze, Point } from "./types";

export function createMaze(size: number): Maze {
  if (!Number.isInteger(size) || size < 2) {
    throw new Error(`Maze size must be an integer of at least 2, received ${size}`);
  }

  const cells: Cell[][] = Array.from({ length: size }, (_, y) =>
    Array.from({ length: size }, (_, x) => ({
      x,
      y,
      links: {
        north: false,
        east: false,
        south: false,
        west: false,
      },
    })),
  );

  return { size, cells };
}

export function pointKey(point: Point): string {
  return `${point.x},${point.y}`;
}

export function pointFromKey(key: string): Point {
  const [x, y] = key.split(",").map(Number);
  return { x, y };
}

export function pointsEqual(a: Point, b: Point): boolean {
  return a.x === b.x && a.y === b.y;
}

export function inBounds(maze: Maze, x: number, y: number): boolean {
  return x >= 0 && y >= 0 && x < maze.size && y < maze.size;
}

export function getCell(maze: Maze, x: number, y: number): Cell {
  if (!inBounds(maze, x, y)) {
    throw new Error(`Cell is outside maze bounds: ${x},${y}`);
  }

  return maze.cells[y][x];
}

export function getNeighbor(maze: Maze, cell: Cell, direction: Direction): Cell | null {
  const delta = directionDelta[direction];
  const x = cell.x + delta.dx;
  const y = cell.y + delta.dy;
  return inBounds(maze, x, y) ? maze.cells[y][x] : null;
}

export function getAllNeighbors(maze: Maze, cell: Cell): Cell[] {
  return directions
    .map((direction) => getNeighbor(maze, cell, direction))
    .filter((neighbor): neighbor is Cell => neighbor !== null);
}

export function getClosedNeighbors(maze: Maze, cell: Cell): Cell[] {
  return directions
    .filter((direction) => !cell.links[direction])
    .map((direction) => getNeighbor(maze, cell, direction))
    .filter((neighbor): neighbor is Cell => neighbor !== null);
}

export function getLinkedNeighbors(maze: Maze, cell: Cell): Cell[] {
  return directions
    .filter((direction) => cell.links[direction])
    .map((direction) => getNeighbor(maze, cell, direction))
    .filter((neighbor): neighbor is Cell => neighbor !== null);
}

export function openPassage(maze: Maze, a: Cell, b: Cell): void {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const direction = directions.find((candidate) => {
    const delta = directionDelta[candidate];
    return delta.dx === dx && delta.dy === dy;
  });

  if (!direction || !inBounds(maze, b.x, b.y)) {
    throw new Error(`Cells must be orthogonally adjacent: ${pointKey(a)} -> ${pointKey(b)}`);
  }

  a.links[direction] = true;
  b.links[oppositeDirection[direction]] = true;
}

export function countLinks(cell: Cell): number {
  return directions.filter((direction) => cell.links[direction]).length;
}

export function forEachCell(maze: Maze, callback: (cell: Cell) => void): void {
  for (const row of maze.cells) {
    for (const cell of row) {
      callback(cell);
    }
  }
}

export function serializeMaze(maze: Maze): string {
  const rows: string[] = [];

  for (const row of maze.cells) {
    rows.push(
      row
        .map((cell) => directions.map((direction) => (cell.links[direction] ? "1" : "0")).join(""))
        .join("|"),
    );
  }

  return rows.join("\n");
}
