---
title: "Comparing Dijkstra's Algorithm and A* on Procedural Mazes"
description: "A Computer Science Extended Essay comparing the runtime of Dijkstra's algorithm and A* across procedurally generated braided mazes of increasing size."
categories:
  - Software & Data
  - Research
technologies:
  - C#
  - TypeScript
  - Canvas
  - Algorithms
  - Procedural mazes
  - Recursive backtracking
  - Dead-end culling
  - Priority queues
  - Performance comparison
role: "Researcher and developer for the maze generator, pathfinding implementations, benchmark runs, and analysis."
featured: false
status: "Source-backed draft with interactive demo"
draft: true
date: "03/2020 - 11/2020"
cover:
  src: "/images/projects/maze-pathfinding-cover.png"
  alt: "Generated maze grid used as a cover image for the pathfinding comparison project."
  caption: "Generated maze cover image."
visual:
  kind: "pathfinding"
  label: "Procedural maze and pathfinding comparison"
  caption: "The project generated braided mazes, solved them with Dijkstra and A*, and compared runtime as maze size increased."
---

## Context

This was an IB Computer Science Extended Essay built around a focused research question: how does the runtime efficiency of Dijkstra's algorithm compare with A* when both are used to find shortest paths through procedurally generated mazes of different sizes?

The project treated pathfinding as both a computer-science problem and a practical design concern. Navigation systems, games, logistics, and robotics all depend on algorithms that can find usable routes quickly. The essay narrowed that broad topic into a controlled maze-solving experiment.

## System

The test pipeline was implemented in C#:

- Generate mazes with recursive backtracking.
- Apply dead-end culling to turn perfect mazes into braided mazes with multiple possible paths.
- Solve the same generated maze with Dijkstra's algorithm.
- Solve it again with A*.
- Measure runtime with `System.Diagnostics.Stopwatch`.
- Record runtime and shortest path length for analysis in Excel.

The portfolio version adds a browser-native TypeScript visualization of the same core idea. It keeps the recursive-backtracking maze generation and braided-maze behavior, while modernizing the pathfinding implementations with priority queues and a corrected A* cost model.

Both pathfinding algorithms were expected to find shortest paths. The useful comparison was therefore not whether one was correct and the other was not, but how much runtime changed when A* used a heuristic to guide the search toward the goal.

## Method

The experiment tested mazes from `40x40` to `320x320`, increasing by 40 cells per side. Each size was tested 10 times.

The start and end points were placed at contrasting fifths of the grid rather than at the extreme corners. This gave the algorithms space to search around the target instead of forcing a single corner-to-corner pattern.

Several variables were deliberately kept simple:

- No diagonal movement.
- No weighted paths.
- No partial braiding.
- Same code and computer across tests, except for the maze size.

That made the experiment easier to interpret, while also creating limitations for how directly the results map to games, roads, or weighted navigation problems.

## Findings

Both algorithms returned the same shortest path lengths on the same mazes, which supported that the implementations were solving the same problem correctly.

For the portfolio version, I regenerated the benchmark with the modern TypeScript implementation rather than only reusing the original 2020 C# table. The regenerated run used braided mazes from `40x40` to `320x320` in increments of 40, with 50 seeded trials per maze size. The bars show medians and the error bars show the interquartile range.

<figure class="benchmark-figure">
  <img src="/images/projects/maze-benchmark/runtime-by-maze-size.png" alt="Grouped bar chart comparing Dijkstra and A* runtime across braided maze sizes from 40x40 to 320x320." />
  <figcaption>Regenerated benchmark from the modern TypeScript implementation. Each bar shows the median of 50 seeded braided maze trials; error bars show the interquartile range.</figcaption>
</figure>

Across the regenerated benchmark, Dijkstra searched a median average of `90.2%` of each maze, while A* searched `52.7%`. That means A* searched about `37.5` percentage points less of the maze overall, or roughly `41.5%` fewer cells relative to Dijkstra.

The regenerated results support the same broad conclusion as the original report: A* reached the same shortest paths while searching less of the maze and running faster in this non-weighted setup. Runtime still depends on the machine and JavaScript runtime used for the benchmark, so the searched-cell comparison is the stronger algorithmic signal.

## What I Would Improve Now

The largest weakness was experimental precision. Different mazes of the same size can still have different solution lengths and different complexity, which produced high uncertainty in the runtime results.

Better follow-up work would use shortest path length as the independent variable, run many more trials, and test partially braided or weighted mazes to better represent game maps or street-like networks.
