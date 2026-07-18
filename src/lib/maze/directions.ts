import type { Direction } from "./types";

export const directions: Direction[] = ["north", "east", "south", "west"];

export const directionDelta: Record<Direction, { dx: number; dy: number }> = {
  north: { dx: 0, dy: -1 },
  east: { dx: 1, dy: 0 },
  south: { dx: 0, dy: 1 },
  west: { dx: -1, dy: 0 },
};

export const oppositeDirection: Record<Direction, Direction> = {
  north: "south",
  east: "west",
  south: "north",
  west: "east",
};
