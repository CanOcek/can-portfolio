# Procedural Terrain and Flight Simulator Source Summary

Source documents:

- `pdfs/Crit_A_Planning.docx`
- `pdfs/Crit_B_Design.docx`
- `pdfs/Crit_B_Record_of_tasks.docx`
- `pdfs/Crit_C_Development.docx`
- `pdfs/Crit_E_Evaluation.docx`
- `pdfs/Appendix.docx`
- `pdfs/Appendix_Code.docx`

Extraction note:

- The DOCX text was extracted from Word XML. Text content was readable. Some figures, screenshots, flowcharts, UML diagrams, and code excerpts appear to be embedded as images and were not fully extracted into text.

## Project Identity

Working public title:

- Procedural Terrain and Flight Simulator

Existing site title:

- Procedural Planet and Chunk-Based World Generation

Project context:

- IB Computer Science internal assessment style project from 2020.
- Built for a specific client, a school friend.
- Developed in Unity using C#.
- Goal was a relaxing game combining aircraft flight with infinite, editable, procedural terrain.

## Client Problem

The client wanted a game to de-stress after school and was interested in both astronomy and flying planes. Existing games were described as either flight-focused or exploration-focused, but not a simple combination of both.

Client needs from the source:

- Fly over a landmass.
- Explore terrain without stressful objectives.
- Randomly generated and potentially infinite landmass.
- Ability to save or reload a terrain by seed.
- Ability to alter the appearance of the terrain without editing source files.
- Ability to adjust aircraft behavior without editing code.
- Ability to run on both Windows and Mac.

## Proposed Product

The proposed product was a Unity game where the player flies a plane over a space-like or planetary landscape with alterable appearance.

Key intended features:

- Keyboard-controlled plane with pitch, roll, yaw, and throttle.
- Public parameters for control authority, engine power, drag, and terrain settings.
- Procedurally generated terrain.
- Infinite terrain loading through chunks.
- Seed-based terrain replayability.
- Editable terrain colors.
- Editable terrain features such as scale, mountain shape, and map size.
- View from the plane that allows observing the terrain below.
- Adjustable render or view distance for different computer capabilities.
- Standalone limited builds for Windows and Mac OS.

## Implementation Stack

- Unity.
- C#.
- Unity MonoBehaviour scripts.
- Unity Inspector for editable public variables.
- Unity Mesh API for terrain meshes.
- Unity Perlin noise via `Mathf.PerlinNoise`.

Named scripts from the source:

- `MeshGenerator`
- `MapDisplay`
- `TextureGenerator`
- `NoiseGeneration`
- `MapGeneration`
- `PlaneController`

## Main Technical Systems

### Procedural Terrain

The terrain was generated from 2D grids of noise values.

Techniques:

- Two-dimensional arrays for grid data.
- Nested loops to iterate over points in the grid.
- Multiple octaves of Perlin noise.
- Frequency and amplitude changes across octaves.
- Terrain settings exposed through public Unity variables.
- Terrain types stored as structs, including name, color, and height range.
- Color maps applied to terrain rather than recalculating each pixel every time.

Important terrain parameters:

- Map width and length.
- Scale.
- Octave amount.
- Persistence.
- Lacunarity.
- Offset values.
- Random offsets.
- Terrain type height ranges and colors.

### Chunk Loading

The terrain used chunks: small terrain segments loaded around the player instead of trying to load an unmanageable world.

Purpose:

- Support large or effectively infinite spaces.
- Control render distance.
- Load new chunks as the plane moves outward.
- Keep the amount of active terrain manageable.

Source caveat:

- The client later noted that seams between chunks were somewhat visible or bothersome.

### Mesh Generation

Terrain mesh generation used Unity's Mesh class.

Mesh data included:

- Vertices.
- Triangles.
- UVs.

Notable implementation detail:

- The project converted 2D grid coordinates into 1D array indices because Unity mesh data expects 1D arrays.
- The triangle-generation logic built two triangles per square cell by adding six triangle indices.

### Flight Simulation

The plane used keyboard controls and simple physics-inspired speed handling.

Controls listed in the design test plan:

- `W`: speed increase.
- `S`: significant speed decrease.
- `A`: yaw left.
- `D`: yaw right.
- `I`: pitch down.
- `K`: pitch up.
- `J`: roll left.
- `L`: roll right.

Flight behavior:

- Throttle applied positive force.
- Drag applied negative force.
- Speed updated per frame using `Time.deltaTime` and Unity's `Update()`.
- Static drag was simplified as directly proportional to forward speed.
- The source acknowledges this is not fully realistic, but good enough for the project without excessive computational cost.

## Programming Techniques Highlighted

The development document explicitly discusses:

- Two-dimensional arrays.
- Nested loops.
- Object-oriented programming with multiple classes and scripts.
- Class inheritance from `MonoBehaviour`.
- Public and private variables.
- Structs.
- Communication between 1D and 2D array indices.
- Iterative triangle mesh generation.
- Procedural and infinitely continuous gradient noise generation.
- Aircraft speed determination.

## Success Criteria and Validation

All listed success criteria were marked as met in the evaluation.

Met outcomes:

- Plane pitch, roll, yaw, and throttle were controllable through keyboard input.
- Plane control parameters could be altered without editing code.
- The player could continue after intersecting terrain, implemented as pulling out of terrain rather than a hard crash and restart.
- The same seed generated the same terrain.
- Terrain was randomly generated and did not visibly repeat.
- New chunks loaded when flying outward.
- Terrain colors could be changed without editing code.
- Terrain shape and generation parameters could be changed without editing code.
- The player could observe terrain below with limited obstruction by the plane.
- View distance could be changed for computer performance.
- Standalone versions ran on both Windows and Mac OS.

Client and supervisor feedback summary:

- Controls were intuitive.
- Terrain customization was engaging and useful.
- Same-seed terrain replayability was seen as potentially useful.
- Chunk loading worked, though visible seams were a concern.
- The client wanted optional objectives, pause/menu functionality, real crash behavior, more realistic lift/torque, and camera panning.
- The supervisor approved the final product and felt the goals were met without overcomplicating the project.

## Timeline

The record of tasks places the main project work in 2020:

- Early client and supervisor meetings: June 2020.
- Design, flowcharts, UML, and test planning: September 2020.
- Procedural terrain implementation: target completion October 1, 2020.
- Flight simulation and plane implementation: target completion October 12, 2020.
- Client beta testing and supervisor feedback: late October 2020.
- Final client feedback and evaluation: November 2020.

Use caution before publishing exact dates as final page copy. They are useful internally, but the public page may only need "2020" or "student project."

## Recommended Portfolio Page Angle

This should be a retrospective on a substantial early technical project, not a polished current game.

Strong angle:

- A client-driven Unity project that combined procedural terrain generation, chunk streaming, editable world parameters, and a simple flight model.

What it demonstrates:

- Translating a client need into technical criteria.
- Working with Unity and C#.
- Procedural generation.
- Mesh construction.
- 2D-to-1D data conversion.
- Chunk-based world loading.
- Public-parameter tooling for non-programmer customization.
- Testing against explicit success criteria.
- Reflecting honestly on limitations.

Suggested page structure:

1. Context: client wanted a relaxing flight/exploration game.
2. Problem: combine terrain generation, flight controls, and user-editable parameters.
3. Role: solo student developer in Unity/C#.
4. System: terrain noise, mesh generation, chunks, flight controller.
5. Validation: success criteria met and client tested builds on Windows/Mac.
6. What I would improve now: chunk seams, pause menu, real collision/restart, lift physics, camera panning, objectives.

## Potential Visual/Media Assets to Extract Later

The source documents reference visual material that could become portfolio media:

- Main game process flowchart.
- Player position updating / flight simulation flowchart.
- Terrain chunk generation flowchart.
- Noise map generation flowchart.
- Color map generation flowchart.
- Mesh data generation flowchart.
- Bird's-eye player view diagram.
- UML diagrams.
- Screenshots of Unity Inspector variables.
- Terrain samples.
- Mesh/triangle diagrams.
- Code screenshots for noise generation, mesh generation, and plane control.

These appear embedded in DOCX files and may need image extraction from the DOCX media folder if used later.

## Public-Copy Guardrails

Do not overstate this as:

- A shipped commercial game.
- A realistic flight simulator.
- A current production-quality terrain engine.
- A deployed client product beyond the school/client context.

Use language such as:

- Student project.
- Unity prototype.
- Client-driven internal assessment project.
- Procedural terrain and flight-control prototype.

Facts to confirm before publishing:

- Whether screenshots or diagrams can be shown publicly.
- Whether the client should remain anonymous.
- Whether the original project files or builds still exist.
- Whether to call it "planet," "space landscape," "terrain," or "flight simulator" in the public title.
- Whether source code can be published or excerpted.

