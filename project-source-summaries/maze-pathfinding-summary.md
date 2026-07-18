# Maze Pathfinding Project Source Summary

Source document:

- `pdfs/CÖ_ComputerScience_EE_Final_26.11.pdf`

Extraction note:

- The PDF is a Word-exported PDF with mixed direct text and custom font encoding. The extracted text was readable enough for factual summarization, but some glyphs were corrupted in the temporary extraction. Algorithm names and section meaning were inferred only where the source context was clear.

## Project Identity

Working public title:

- Comparing Dijkstra's Algorithm and A* on Procedural Mazes

Original document title:

- The Runtime Difference Between Dijkstra's and A* Pathfinding Algorithms in Solving Maze Problems

Original research question:

- What is the difference between the runtime efficiency of Dijkstra's and A* pathfinding algorithms in finding the shortest path in mazes with varying size?

Project context:

- IB Computer Science Extended Essay.
- Research and implementation project from 2020.
- Implemented in C#.
- Focused on algorithmic comparison, procedural maze generation, runtime measurement, and result analysis.

## What Was Built

The project implemented a full test pipeline:

- Procedural maze generation using recursive backtracking.
- Dead-end culling to convert generated perfect mazes into braided mazes.
- Dijkstra's pathfinding algorithm.
- A* pathfinding algorithm.
- Runtime measurement using C# `System.Diagnostics.Stopwatch`.
- Console output designed to be transferred into Microsoft Excel for analysis.

The generated mazes were solved by both algorithms, and the runtime plus shortest path length were recorded.

## Technical Concepts

Core concepts covered:

- Graph search on grid-based mazes.
- Maze cells or nodes connected by possible passages.
- Perfect mazes, braided mazes, partial braided mazes, and elitism.
- Recursive backtracking as a depth-first-search-based maze generator.
- Dead-end culling to remove dead ends and create more looped paths.
- Dijkstra's outward expansion from the starting point.
- A* as a heuristic-guided extension of Dijkstra's algorithm.
- `f`, `g`, and `h` costs in A*.
- Pythagorean-distance heuristic for A*.
- Best, worst, and average-case time complexity discussion.

## Methodology

Controlled setup:

- Same computer throughout testing: MacBook Air 2017.
- Same code except for maze size.
- C# implementation in Visual Studio.
- No diagonal movement.
- Start and end points placed at contrasting fifths of the grid, for example `(20, 20)` and `(80, 80)` on a `100x100` grid.
- Maze characteristics were controlled as far as practical: no partial braiding and no random tile weights.

Procedure:

1. Generate mazes from `40x40` to `320x320` in increments of 40.
2. Run 10 trials for each maze size.
3. Generate each maze using recursive backtracking.
4. Apply dead-end culling to create braided mazes.
5. Solve each maze with Dijkstra's algorithm and A*.
6. Record runtime and shortest path length.
7. Transfer output into Excel for averages, uncertainties, tables, and graphs.

## Results

Both algorithms found the same shortest path on the same mazes, which supports that both implementations solved the pathfinding problem correctly.

Average shortest path length increased roughly linearly with maze side length:

| Maze size | Average shortest path |
| --- | --- |
| 40x40 | 78 +/- 20 |
| 80x80 | 148 +/- 15 |
| 120x120 | 219 +/- 19 |
| 160x160 | 287 +/- 21 |
| 200x200 | 367 +/- 33 |
| 240x240 | 426 +/- 35 |
| 280x280 | 494 +/- 25 |
| 320x320 | 559 +/- 45 |

Runtime comparison:

| Maze size | Dijkstra runtime ms | A* runtime ms | Dijkstra/A* ratio |
| --- | ---: | ---: | ---: |
| 40x40 | 26.6 +/- 4.0 | 10.3 +/- 8.0 | 2.58 |
| 80x80 | 417.9 +/- 19.5 | 134.0 +/- 58.0 | 3.10 |
| 120x120 | 2131.8 +/- 60.5 | 802.0 +/- 317.0 | 2.60 |
| 160x160 | 7780.9 +/- 827.5 | 2706.9 +/- 762.0 | 2.87 |
| 200x200 | 23049.9 +/- 2226.5 | 9733.8 +/- 4736.5 | 2.30 |
| 240x240 | 51978.3 +/- 3651.0 | 24833.6 +/- 13527.0 | 2.10 |
| 280x280 | 109061.1 +/- 29995.0 | 65271.1 +/- 19982.5 | 1.67 |
| 320x320 | 184742.9 +/- 20941.0 | 121041.2 +/- 57608.0 | 1.50 |

Main finding:

- A* was consistently faster than Dijkstra's algorithm on the tested mazes.
- The runtime of both algorithms rose sharply as maze size increased.
- The performance gap narrowed as maze size increased, from roughly 3x faster in smaller cases to roughly 1.5x faster at `320x320`.

## Interpretation

The hypothesis correctly predicted that A* would be faster on average because the heuristic guides the search toward the goal.

The hypothesis did not fully match the observed change in runtime ratio. The document expected the difference to decrease as maze size got smaller, but the observed ratio generally decreased as maze size got larger.

The source suggests this may be because the heuristic became less able to approximate the `h` cost well in larger mazes.

## Limitations

Important limitations from the source:

- Runtime values had high uncertainty.
- Different mazes of the same size can have different complexity, shortest path length, and elitism.
- Only 10 trials were run for each maze size.
- The test did not include all possible mazes of each size.
- Fully braided mazes may not represent game maps, city streets, or other real pathfinding cases as well as partial braiding would.
- Edge weights were not varied.
- Larger maze sizes were not tested, so the source does not prove whether A* remains superior indefinitely.

## Further Development Ideas

Ideas directly supported by the source:

- Use shortest path length, not maze size, as the independent variable.
- Generate mazes until a desired shortest path length is found, then compare algorithms.
- Test all mazes of a given size using uniform maze-generation algorithms such as Wilson's or Aldous-Broder.
- Add partial braiding to better resemble real maps or games.
- Add path weights to represent harder or slower traversal.
- Use more trials to reduce random error.

## Portfolio Page Angle

This project is useful as a compact technical retrospective. It demonstrates:

- Algorithmic thinking.
- Experimental design.
- Procedural test-data generation.
- Runtime benchmarking.
- Understanding tradeoffs between correctness and performance.
- Honest treatment of uncertainty and methodology limits.

Recommended case-study frame:

- Start with the question: both algorithms find shortest paths, but how does runtime differ as generated maze size grows?
- Show the pipeline: generate maze, braid maze, solve with Dijkstra, solve with A*, record runtime, analyze in Excel.
- Include one maze visualization and one graph if extracted or recreated from source.
- Keep the conclusion precise: A* was faster in these tests, but the experimental setup had high uncertainty.

## Public-Copy Guardrails

Do not publish without checking:

- Whether the original PDF can be linked or shown publicly.
- Whether raw code from the appendix should be published.
- Whether charts should be recreated from the data or screenshotted from the PDF.
- Whether the exact IB context should be named on the public page.

Avoid claiming:

- That the results generalize to all pathfinding problems.
- That A* is always faster in every graph or weighted environment.
- That the methodology was production-grade benchmarking.

