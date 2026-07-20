# Portfolio Page Content: Voxel Chunk Mesh Generation Prototype

This file outlines content for a single-page portfolio presentation. The page can visually resemble a Steam library/game page: title, hero media, short description, screenshots, feature tags, technical notes, and a development story.

In this file, **placeholder** means an image or video slot to capture and later drop into the webpage.

The project should be presented as a **self-directed high-school mesh-generation challenge**, with later revival/polish clearly separated from the original work.

## Page Title

**Voxel Chunk Mesh Generation Prototype**

Alternative titles:

- **Voxel Terrain Mesh Generation**
- **Minecraft-Style Chunk Mesh Prototype**
- **Block-To-Mesh Voxel Terrain Challenge**

Best subtitle:

> A self-directed Unity challenge focused on converting block data into generated chunk meshes.

## One-Sentence Summary

> A high-school Unity prototype where I explored how to convert a 3D block array into visible voxel terrain by manually generating mesh vertices and triangle indices.

## Short Description

Use near the top of the page, below the hero media:

> This project began as a personal challenge in my final year of high school: could I replace a naive Minecraft-style block world made from individual cube GameObjects with generated chunk meshes? I used only a very short reference explaining vertices and triangle indices, then worked out the block-to-mesh logic myself from diagrams and experimentation.

## Longer Overview

Use in an "About This Project" or "Overview" section:

> The prototype represents terrain as a 3D array of blocks. For each solid block, the mesh generator checks the six neighboring positions. If a neighbor is empty, it creates the exposed face using four vertices and two triangles. Faces between two solid blocks are skipped, reducing unnecessary geometry.
>
> The original work was not a finished game. It was a focused technical challenge: understand enough about Unity meshes to generate voxel chunk geometry manually. I later revived the project for demonstration by fixing startup issues, adding grass/dirt/stone materials, and adding simple first-person movement and block editing so the mesh system can be inspected interactively.

## Key Tags / Badges

Use these as small tags near the top of the page:

- Unity
- C#
- Procedural Generation
- Mesh Generation
- Voxel Terrain
- Chunk System
- Self-Directed Challenge
- High School Project
- Pre-AI Project
- Geometry
- Spatial Reasoning

## Media Placeholder Inventory

This is the practical capture list. If only a few assets are produced, prioritize the required media first.

### Required Media

| Slot | Type | Suggested filename | Purpose |
| --- | --- | --- | --- |
| Hero media | image or short video | `hero_chunk_terrain.png` or `hero_chunk_terrain.mp4` | First impression: generated voxel terrain |
| Wide terrain | image | `wide_chunk_terrain.png` | Shows multiple generated chunks |
| Wireframe proof | image | `wireframe_chunk_mesh.png` | Shows this is generated mesh geometry |
| Core code | image | `chunkmesh_core_loop.png` | Shows the algorithm behind the result |

### Strongly Recommended Media

| Slot | Type | Suggested filename | Purpose |
| --- | --- | --- | --- |
| Cutaway / exposed faces | image | `exposed_faces_cutaway.png` | Shows grass/dirt/stone layers and visible-face logic |
| Block edit moment | image or GIF | `block_edit_moment.png` or `block_edit_moment.gif` | Shows the revived playable inspection layer |
| Unity inspector proof | image | `chunk_inspector_mesh_components.png` | Shows chunk objects use mesh components |
| Neighbor diagram | image | `neighbor_face_diagram.png` | Explains the six-neighbor idea |
| Triangle diagram | image | `quad_triangles_diagram.png` | Explains four vertices / two triangles |

### Optional Media

| Slot | Type | Suggested filename | Purpose |
| --- | --- | --- | --- |
| Gameplay inspection | video | `terrain_walk_edit_demo.mp4` | Short movement/editing demo |
| Editor wireframe toggle | video | `editor_wireframe_demo.mp4` | Strong proof that terrain is mesh-based |
| Before/after comparison | image | `cube_vs_chunk_comparison.png` | Shows old cube-per-block approach vs mesh chunks |
| Original sketch recreation | image | `mesh_logic_sketch.png` | Personalizes the 90-minute reasoning story |

## Hero Section

### Hero Media Placeholder

`[MEDIA PLACEHOLDER: hero_chunk_terrain.png or hero_chunk_terrain.mp4]`

Recommended content:

- Wide view of generated voxel terrain.
- Camera angled downward.
- Crosshair/hotbar visible only if it improves the presentation.
- Ideally show colored grass/dirt/stone terrain.

Suggested caption:

> Generated chunk terrain rendered from block data rather than individual cube GameObjects.

### Hero Text

Possible hero text:

> A Unity voxel terrain prototype built around one question: how do you turn blocks into a mesh?

Shorter version:

> Turning a 3D block array into generated chunk meshes.

## Quick Facts Panel

Use this as a compact metadata/sidebar section:

- **Type:** Technical prototype
- **Engine:** Unity
- **Language:** C#
- **Original timeframe:** Final year of high school
- **Focus:** Manual mesh generation from voxel data
- **Original goal:** Replace cube-per-block terrain with optimized chunk meshes
- **Current status:** Revived prototype with simple movement and block editing
- **Role:** Solo project
- **AI use in original project:** None
- **AI use in revival:** Used later only to help inspect, repair, document, and prepare presentation

Optional:

- **Target chunk size:** `16 x 16`
- **Generated area:** fixed chunk grid for demonstration
- **Interaction:** move, look, remove blocks, place blocks

## Primary Screenshots Section

Create a screenshot carousel/grid with captions.

### Screenshot 1: Wide Terrain View

`[MEDIA PLACEHOLDER: wide_chunk_terrain.png]`

Caption:

> A generated voxel terrain area made from multiple chunk meshes.

What it should show:

- Multiple chunks visible.
- Clear grass/dirt/stone color contrast.
- Some terrain height variation.

### Screenshot 2: Exposed Faces / Cutaway

`[MEDIA PLACEHOLDER: exposed_faces_cutaway.png]`

Caption:

> Exposed faces are generated only where a block touches empty space; internal faces are skipped.

What it should show:

- A carved patch, cliff, or block removal area.
- Visible grass top layer, dirt underlayer, and stone deeper layer.

### Screenshot 3: Wireframe / Scene View

`[MEDIA PLACEHOLDER: wireframe_chunk_mesh.png]`

Caption:

> Wireframe view showing generated mesh geometry instead of thousands of individual cube objects.

What it should show:

- Chunk mesh geometry.
- Ideally include terrain in shaded wireframe.
- This is one of the strongest proof-of-work screenshots.

### Screenshot 4: Block Editing Moment

`[MEDIA PLACEHOLDER: block_edit_moment.png or block_edit_moment.gif]`

Caption:

> The revived prototype includes simple block removal and placement so the chunk mesh can be inspected interactively.

What it should show:

- Crosshair aimed at terrain.
- Hotbar visible.
- A few placed or removed blocks.

### Screenshot 5: Unity Inspector / Hierarchy Proof

`[MEDIA PLACEHOLDER: chunk_inspector_mesh_components.png]`

Caption:

> Each generated chunk is a mesh object with a `MeshFilter`, `MeshRenderer`, and runtime collider.

What it should show:

- Several chunk GameObjects in hierarchy.
- Inspector showing mesh-related components.

### Screenshot 6: Code Screenshot

`[MEDIA PLACEHOLDER: chunkmesh_core_loop.png]`

Caption:

> The core algorithm loops through block data, checks neighbors, and emits only visible faces.

What it should show:

- `Block[,,]` iteration.
- Null block skip.
- Neighbor check.
- Face generation call.

## Video / GIF Placeholders

Optional but recommended if the page resembles a game page.

### Video 1: Short Gameplay Inspection

`[MEDIA PLACEHOLDER: terrain_walk_edit_demo.mp4 or terrain_walk_edit_demo.gif]`

Suggested sequence:

1. Start with wide terrain view.
2. Walk toward a small hill/cutaway.
3. Remove one block.
4. Place one block.
5. End with a quick look across the terrain.

Caption:

> Simple first-person controls were added during revival to make the mesh terrain inspectable.

### Video 2: Scene/Wireframe Proof

`[MEDIA PLACEHOLDER: editor_wireframe_demo.mp4]`

Caption:

> The terrain is generated as chunk mesh geometry, not assembled from individual cube GameObjects.

## Technical Breakdown Section

Use this section to explain the implementation in readable terms.

### Problem

> A cube-per-block world is easy to understand, but it creates a large number of GameObjects. I wanted to understand how a Minecraft-style terrain could instead be represented as block data and rendered as chunk meshes.

### Data Representation

> Each chunk stores blocks in a 3D array. A filled slot represents a block; an empty slot represents air.

Media slot:

`[MEDIA PLACEHOLDER: block_array_chunk_diagram.png]`

### Mesh Logic

> For each solid block, the generator checks six neighbors: left, right, front, back, up, and down. If the neighbor is air, the face between the block and air is added to the mesh. If the neighbor is solid, no face is needed because it would be hidden.

Media slot:

`[MEDIA PLACEHOLDER: neighbor_face_diagram.png]`

### Face Construction

> Each visible square face is made from four vertices and two triangles. The triangle index order controls which side of the face is visible.

Media slot:

`[MEDIA PLACEHOLDER: quad_triangles_diagram.png]`

### Chunk Materials

> The revived version groups faces into submeshes so grass, dirt, and stone can use separate materials while still rendering as chunk meshes.

Media slot:

`[MEDIA PLACEHOLDER: material_layers_crop.png]`

## Original Algorithm Pseudocode

Use this in a collapsible "Algorithm" section or code-style panel:

```text
GenerateMeshData(allBlocks):
    create empty vertices list
    create empty triangles list

    for each x in chunk length:
        for each z in chunk width:
            for each y in chunk height:
                currentBlock = allBlocks[x, z, y]

                if currentBlock is not empty:
                    for each of the six directions:
                        neighbor = block next to currentBlock in that direction

                        if neighbor is empty:
                            add the face between currentBlock and empty space

    return vertices and triangles
```

```text
AddFace(face):
    define four corner vertices
    add or reuse those vertices
    add triangle 1 using three vertex indices
    add triangle 2 using three vertex indices
```

Short explanation:

> The key realization was that the terrain does not need every cube face. It only needs the faces the player can actually see.

## Development Story Section

Use this to communicate personality and thought process.

Suggested copy:

> I remember this project less as a finished game and more as one of the first times programming felt like solving a physical puzzle. I had a very short explanation of how meshes worked, but not a full tutorial for voxel terrain. I spent around 90 minutes staring at a diagram I drew, trying to reason out how vertices, triangle indices, neighboring blocks, and hidden faces connected. That process was the fun part.
>
> The original result was rough, but it captured something important: I was willing to sit with an unfamiliar technical idea, build a mental model, and test my way toward a working implementation.

Optional shorter version:

> This was a small project, but an important one for me. It showed me that I enjoyed the process of reasoning through unfamiliar systems from first principles.

## Revival Note

This should be included somewhere, especially if presenting to technical reviewers.

Suggested copy:

> The original high-school prototype contained the block data model, chunk mesh direction, and initial visible-face generation logic. During revival, I repaired startup issues, fixed chunk boundary face generation, added grass/dirt/stone submeshes, added runtime mesh colliders, and added simple first-person editing controls so the old work could be demonstrated interactively.

Shorter version:

> The playable layer and presentation polish were added later during project revival; the original challenge was the block-to-mesh logic.

## Features List

Use as a Steam-style feature bullet list:

- Converts voxel block data into generated Unity meshes.
- Skips hidden faces between adjacent solid blocks.
- Uses chunk-sized terrain sections with Minecraft-style `16 x 16` footprint.
- Generates terrain from Perlin noise height values.
- Separates grass, dirt, and stone into material groups.
- Supports simple first-person inspection.
- Supports block removal and placement in generated chunks.
- Demonstrates the progression from cube-per-block terrain to chunk mesh rendering.

## Controls Section

If the playable version is embedded or linked:

- `WASD`: move
- `Mouse`: look
- `Space`: jump
- `Left Shift`: sprint
- `Left Click`: remove block
- `Right Click`: place block
- `1`: select grass
- `2`: select dirt
- `3`: select stone
- `Esc`: unlock/lock cursor

## Media To Capture / Provide

### Required

- `hero_chunk_terrain.png` or `hero_chunk_terrain.mp4`
- `wide_chunk_terrain.png`
- `wireframe_chunk_mesh.png`
- `chunkmesh_core_loop.png`

### Strongly Recommended

- `exposed_faces_cutaway.png`
- `block_edit_moment.png` or `block_edit_moment.gif`
- `chunk_inspector_mesh_components.png`
- `quad_triangles_diagram.png`
- `neighbor_face_diagram.png`

### Optional

- `terrain_walk_edit_demo.mp4`
- `editor_wireframe_demo.mp4`
- `cube_vs_chunk_comparison.png`
- `mesh_logic_sketch.png`

## Capture Notes

### Hero / Wide Terrain

- Use Play mode or Scene view.
- Show multiple chunks and height variation.
- Avoid aiming at empty sky; make terrain the first read.
- Good composition: camera above the terrain, angled down, with chunks receding into the distance.

### Cutaway / Exposed Faces

- Remove a few blocks or use the generated carved patch.
- Make sure grass, dirt, and stone are all visible.
- The purpose is to visually explain that internal faces are skipped.

### Wireframe Proof

- Use Unity Scene view with wireframe or shaded wireframe enabled.
- Capture enough of the terrain to show continuous generated geometry.
- This should look technical, not cinematic.

### Code Screenshot

- Capture `ChunkMesh.cs`.
- Best lines to show:
  - `GenerateMeshData`
  - `AddVisibleFaces`
  - `IsAir`
  - `AddFace`
- Use a readable font size and avoid showing unrelated editor panels.

### Gameplay Video

- Keep it short: 10-20 seconds.
- Suggested sequence:
  1. Look across terrain.
  2. Walk toward a slope or cutaway.
  3. Remove one block.
  4. Place one block.
  5. Pause with the result visible.

### Diagrams

- These can be simple recreated diagrams, not polished illustrations.
- Best diagrams:
  - one cube with six neighbor directions
  - one square face split into two triangles
  - a small `Block[,,]` chunk grid

## Suggested Page Layout

1. Hero media + title.
2. Short summary and tags.
3. Quick facts panel.
4. Screenshot carousel/grid.
5. "What I Built" technical overview.
6. Algorithm/pseudocode panel.
7. Development story.
8. Revival note.
9. Controls and current status.
10. Extra screenshots / editor proof.

## Tone Guidance

Use a confident but honest tone.

Good:

> I challenged myself to understand mesh construction by implementing a voxel chunk mesh from block data.

Good:

> The revived version adds interaction so the original mesh-generation work can be explored.

Avoid:

> I built a complete Minecraft clone.

Avoid:

> This is a production-ready voxel engine.

Best emphasis:

- curiosity
- spatial reasoning
- persistence
- pre-AI problem solving
- technical self-direction
- willingness to work from a minimal reference

## Portfolio Callout Quote

Optional highlighted quote:

> The most valuable part of this project was not the final terrain. It was the moment I understood how a block, its neighbors, four vertices, and two triangles could become a generated world.
