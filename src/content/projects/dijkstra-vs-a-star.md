---
title: "Comparing Dijkstra's Algorithm and A* on Procedural Mazes"
description: "A Computer Science Extended Essay comparing the runtime of Dijkstra's algorithm and A* across procedurally generated braided mazes of increasing size."
categories:
  - Software & Data
  - Research
technologies:
  - C#
  - Algorithms
  - Procedural mazes
  - Recursive backtracking
  - Dead-end culling
  - Performance comparison
role: "Researcher and developer for the maze generator, pathfinding implementations, benchmark runs, and analysis."
featured: false
status: "Source-backed draft, visuals pending"
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

The benchmark showed A* was consistently faster in the tested cases:

| Maze size | Dijkstra runtime | A* runtime | Dijkstra/A* ratio |
| --- | ---: | ---: | ---: |
| 40x40 | 26.6 ms | 10.3 ms | 2.58x |
| 80x80 | 417.9 ms | 134.0 ms | 3.10x |
| 120x120 | 2131.8 ms | 802.0 ms | 2.60x |
| 160x160 | 7780.9 ms | 2706.9 ms | 2.87x |
| 200x200 | 23049.9 ms | 9733.8 ms | 2.30x |
| 240x240 | 51978.3 ms | 24833.6 ms | 2.10x |
| 280x280 | 109061.1 ms | 65271.1 ms | 1.67x |
| 320x320 | 184742.9 ms | 121041.2 ms | 1.50x |

The original conclusion was careful: A* performed much faster in this non-weighted maze setup, but the difference narrowed as maze size increased.

## What I Would Improve Now

The largest weakness was experimental precision. Different mazes of the same size can still have different solution lengths and different complexity, which produced high uncertainty in the runtime results.

Better follow-up work would use shortest path length as the independent variable, run many more trials, and test partially braided or weighted mazes to better represent game maps or street-like networks.
