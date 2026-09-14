import { MazeGrid, Point } from '../types';

/**
 * Seeded pseudo-random number generator (Linear Congruential Generator)
 */
export function createRng(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Generates a perfect orthogonal maze using randomized Depth-First Search with backtracking
 * @param dimension Must be an odd number (e.g. 7, 9, 11, 13, 15)
 * @param seed Random seed for deterministic reproduction
 */
export function generateMaze(dimension: number, seed: number = 42): {
  grid: MazeGrid;
  start: Point;
  goal: Point;
} {
  // Ensure dimension is odd
  const size = dimension % 2 === 0 ? dimension + 1 : dimension;
  const rng = createRng(seed);

  // Initialize grid with all walls (1 = wall, 0 = path)
  const grid: MazeGrid = Array.from({ length: size }, () =>
    Array(size).fill(1)
  );

  const start: Point = { x: 1, y: 1 };
  const goal: Point = { x: size - 2, y: size - 2 };

  // DFS Carving
  const stack: Point[] = [];
  grid[start.y][start.x] = 0;
  stack.push(start);

  const directions = [
    { dx: 0, dy: -2 }, // Up
    { dx: 2, dy: 0 },  // Right
    { dx: 0, dy: 2 },  // Down
    { dx: -2, dy: 0 }, // Left
  ];

  while (stack.length > 0) {
    const current = stack[stack.length - 1];

    // Find unvisited neighbors at distance 2
    const neighbors: { next: Point; wall: Point }[] = [];

    for (const d of directions) {
      const nx = current.x + d.dx;
      const ny = current.y + d.dy;

      if (nx > 0 && nx < size - 1 && ny > 0 && ny < size - 1 && grid[ny][nx] === 1) {
        neighbors.push({
          next: { x: nx, y: ny },
          wall: { x: current.x + d.dx / 2, y: current.y + d.dy / 2 }
        });
      }
    }

    if (neighbors.length > 0) {
      // Pick random neighbor using seeded RNG
      const idx = Math.floor(rng() * neighbors.length);
      const chosen = neighbors[idx];

      // Carve wall and destination
      grid[chosen.wall.y][chosen.wall.x] = 0;
      grid[chosen.next.y][chosen.next.x] = 0;

      stack.push(chosen.next);
    } else {
      stack.pop();
    }
  }

  // Ensure start and goal are open
  grid[start.y][start.x] = 0;
  grid[goal.y][goal.x] = 0;

  // Add occasional subtle cross-loops to allow interesting detours or multi-paths
  if (size >= 11) {
    for (let y = 3; y < size - 3; y += 2) {
      for (let x = 3; x < size - 3; x += 2) {
        if (grid[y][x] === 1 && rng() > 0.85) {
          // Check if connecting two paths
          const horiz = grid[y][x - 1] === 0 && grid[y][x + 1] === 0;
          const vert = grid[y - 1][x] === 0 && grid[y + 1][x] === 0;
          if (horiz !== vert) {
            grid[y][x] = 0;
          }
        }
      }
    }
  }

  return { grid, start, goal };
}
