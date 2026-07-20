---
title: "Bomber Quest"
description: "A Java and libGDX desktop game where the player drops book-bombs, destroys walls, collects upgrades, defeats enemies, and escapes through an unlocked exit."
categories:
  - Software & Data
  - Game Development
  - Earlier Technical Work
technologies:
  - Java
  - libGDX
  - Box2D
  - Gradle
  - Game loops
  - Input handling
  - 2D game systems
role: "Student game developer on a university libGDX project, working with gameplay objects, map state, collision behavior, UI screens, and asset-driven rendering."
featured: false
status: "Source-backed draft, gameplay media pending"
draft: true
date: "12/2024 - 02/2025"
visual:
  kind: "game"
  label: "Bomber Quest gameplay media placeholder"
  caption: "Replace with gameplay screenshots, short clips, menu captures, and architecture notes from the libGDX build."
---

## Context

Bomber Quest is a Java/libGDX desktop game built around a Bomberman-style loop with a student-themed twist: books act as timed bombs. The player moves through a top-down tile map, places book-bombs, destroys destructible walls, reveals upgrades, defeats enemies, and reaches the exit after the map is cleared.

The game uses libGDX for rendering, input, audio, and screen management, Box2D for collision detection, and Gradle for the desktop build. It is organized as a standard libGDX project with a shared `core` module and a `desktop` launcher.

## Implemented Systems

- Menu, gameplay, pause/continue, and end screens.
- WASD and arrow-key movement with space-bar bomb placement.
- Timed book-bombs that explode after a short countdown.
- Blast propagation across the grid, blocked by indestructible walls.
- Destructible walls that can reveal upgrades or the exit.
- Blast-radius and concurrent-bomb-limit upgrades.
- Enemy entities with simple wandering behavior and collision danger.
- Box2D contact handling for blasts, enemies, powerups, walls, exit, and player death.
- HUD display for timer, bomb capacity, blast radius, enemy progress, and exit unlock state.
- Map loading from `.properties` files plus a native desktop file chooser.
- Pixel-art sprite sheets, UI skin, sound effects, and background music.

## Media To Add

Priority media slots:

- Hero gameplay screenshot showing the player, walls, enemies, bombs, and HUD.
- Short clip of dropping a book-bomb and the blast spreading.
- Menu and map-loading capture.
- Upgrade pickup moment showing the HUD changing.
- End screen capture with score.

