---
title: "Procedural Terrain and Flight Simulator"
description: "A Unity and C# student project that combined procedural terrain generation, chunk-based world loading, editable terrain parameters, and simple aircraft controls."
categories:
  - Software & Data
  - Earlier Technical Work
technologies:
  - Unity
  - C#
  - Procedural generation
  - Perlin noise
  - Mesh generation
  - Flight controls
role: "Solo student developer responsible for planning, Unity/C# implementation, client testing, and evaluation."
featured: false
status: "Source-backed draft, more media pending"
draft: true
date: "2020"
cover:
  src: "/images/projects/procedural-terrain-cover.png"
  alt: "In-game view from behind a plane flying above generated mountainous terrain under a starry sky."
  caption: "In-game terrain and flight view from the Unity prototype."
visual:
  kind: "procedural"
  label: "Chunk-based terrain and flight prototype"
  caption: "A Unity prototype built around editable procedural terrain, chunk loading, and keyboard-controlled flight."
---

## Context

This was a client-driven IB Computer Science project built in Unity with C#. The client wanted a relaxing game for flying over unusual terrain without the pressure of missions, complex objectives, or heavy simulation management.

The project brief combined two interests: aircraft flight and planetary or space-like exploration. The final prototype focused on a plane flying over procedurally generated terrain whose appearance and generation parameters could be changed without editing source code.

## Product Goals

The product was designed around explicit success criteria:

- Let the player control pitch, roll, yaw, and throttle with the keyboard.
- Allow aircraft handling parameters to be adjusted through Unity's Inspector.
- Generate replayable terrain from a seed.
- Load terrain in chunks so the playable area could continue as the player moved.
- Allow terrain colors and shape parameters to be changed without code edits.
- Let the player see the generated terrain clearly from the aircraft view.
- Let view distance be adjusted for different computer capabilities.
- Provide limited standalone builds for both Windows and Mac OS.

## Technical System

The terrain system was built from 2D arrays of generated noise values. Multiple octaves of Perlin noise were combined so the terrain could have both large forms and smaller detail. Parameters such as scale, octave amount, persistence, lacunarity, offsets, terrain colors, and height ranges were exposed through Unity public variables.

The terrain was loaded in chunks rather than as one huge mesh. As the plane moved outward, new terrain segments could be generated and shown around the player. This kept the world manageable while supporting the feeling of a larger continuous landscape.

The mesh-generation code converted 2D grid positions into the 1D arrays Unity expects for mesh data. It generated vertices, triangle indices, and UV values, then passed that data into Unity's Mesh API.

## Flight Controls

The plane was controlled through keyboard input:

- `W` and `S` adjusted speed.
- `A` and `D` controlled yaw.
- `I` and `K` controlled pitch.
- `J` and `L` controlled roll.

The speed model used a simplified force calculation. Throttle added acceleration, drag slowed the aircraft, and `Time.deltaTime` was used to update movement smoothly each frame. The source documentation notes that the drag model was simplified, but it was sufficient for a lightweight prototype.

## Validation

The evaluation marked the success criteria as met. The client could fly the plane, change terrain parameters, regenerate consistent terrain from the same seed, adjust view distance, and run the standalone version on both Windows and Mac.

Client feedback was useful rather than only positive. The controls were described as intuitive and the terrain customization was engaging, but the client also noted that chunk seams were visible. Requested improvements included a pause menu, optional objectives, real crash-and-restart behavior, more realistic lift or engine physics, and camera panning.

## What It Shows

This project is strongest as an early technical retrospective. It shows:

- Translating a client's preferences into success criteria.
- Building a Unity prototype in C#.
- Using procedural generation for terrain.
- Handling mesh data and terrain chunks.
- Designing adjustable parameters for a non-programmer user.
- Testing against a written plan and responding to feedback.

## What I Would Improve Now

The next version would focus on smoother chunk seams, better camera control, actual collision and restart behavior, a pause menu, and a more realistic flight model with lift and torque. I would also separate the terrain-generation system more cleanly from the gameplay layer so the procedural system could be tested and shown independently.
