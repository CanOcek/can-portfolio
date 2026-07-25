# Procedural Terrain + Flight Simulator — Project Context

## Original context

This is a solo Unity/C# project created in 2020 for an IB Computer Science client project. The client wanted a relaxing game to unwind with after school, combining two interests: flying aircraft and exploring astronomy-inspired landscapes. The intended experience was low-pressure and open-ended—flying over unusual terrain without missions, combat, or demanding simulation management.

The project should be understood as an early, client-tested technical prototype rather than a shipped game or realistic flight simulator.

## Core idea

The player flies over a large, space-like procedural landscape that continues generating as they travel. The terrain is the technical heart of the project; the aircraft provides a way to explore and evaluate it.

The original system combined:

- Layered Perlin-noise height maps with scale, octaves, persistence, lacunarity, seed, and offset controls.
- Runtime mesh construction using vertices, triangle indices, UVs, and terrain color ranges.
- Chunk-based loading around the player to create an effectively continuous world with adjustable view distance.
- Seeded generation so the same world can be regenerated.
- Inspector-exposed terrain, color, and aircraft-handling parameters so the experience can be tuned without editing code.
- Simple keyboard flight controls for throttle, yaw, pitch, and roll.

The documented scripts include `MeshGenerator`, `MapDisplay`, `TextureGenerator`, `NoiseGeneration`, `MapGeneration`, and `PlaneController`, although the surviving codebase should be treated as the authority on its current structure.

## Product goals

Preserve the feeling of calm aerial exploration and make the procedural system easy to understand, tune, and demonstrate. A successful version should:

1. Generate visually varied, deterministic terrain from a seed.
2. Stream terrain chunks as the aircraft moves without obvious interruptions.
3. Keep terrain and flight parameters accessible in the Unity Inspector.
4. Offer responsive, approachable controls rather than claiming full aerodynamic realism.
5. Keep the terrain visible and readable from the aircraft camera.
6. Remain practical on different hardware through adjustable view distance and generation settings.

The original control scheme was `W/S` for speed, `A/D` for yaw, `I/K` for pitch, and `J/L` for roll. These bindings are historical context, not necessarily a requirement if the input system is being modernized.

## Known limitations and useful directions

Client testing found the controls intuitive and terrain customization engaging. The main visible technical issue was seams between chunks. Other requested improvements were camera panning, a pause/menu flow, proper collision and crash/restart behavior, optional objectives, and a more convincing flight model with lift, torque, and engine behavior.

If the code is being revived or refactored, the most valuable architectural improvement would be to separate procedural generation from gameplay and presentation. The terrain pipeline should be testable on its own, especially seed determinism, neighboring-chunk continuity, mesh output, and chunk lifecycle behavior.

## Tone and visual identity

The surviving portfolio image shows a dark aircraft above exaggerated mountainous terrain beneath a star-filled sky. The visual identity is closer to atmospheric planetary exploration than a conventional Earth flight simulator. Technical improvements should support that exploratory mood without overstating the prototype's original scope.
