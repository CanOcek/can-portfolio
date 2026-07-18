---
title: "Adjustable Magnetic Liquid Lens Microscope"
description: "A high-school physics and engineering project that used ferrofluid, magnetic actuation, and later Arduino-controlled current regulation to build adjustable liquid lenses and combine them into a microscope."
categories:
  - Hardware & Engineering
  - Physics
  - Research
technologies:
  - Optics
  - Electromagnetism
  - Ferrofluid
  - Arduino
  - Experimental design
  - Prototyping
  - Data collection
role: "Designed and built the liquid-lens microscope prototype as part of a two-student high-school physics project, combining optical theory, magnetic actuation, measurement, and later Arduino-based control."
featured: false
status: "Source-backed draft, final Arduino media pending"
draft: true
date: "09/2017 - 05/2018"
cover:
  src: "/images/projects/magnetic-liquid-lens/cover-piston.png"
  alt: "Prototype magnetic piston setup used to create an adjustable liquid lens."
  caption: "Magnetic piston prototype from the project report."
visual:
  kind: "hardware"
  label: "Magnetically actuated liquid lens"
  caption: "The prototype used current-controlled magnetic force to move a piston, reshape a water lens, and tune focal distance."
---

## Context

This was an early physics and engineering project built around a practical question: could a liquid lens be adjusted by magnetic field and then used as part of a microscope?

The project started from optics and electromagnetism rather than from a ready-made kit. The core challenge was to create a curved liquid surface that could be moved repeatedly, measured, and controlled without the ferrofluid contaminating the water used as the optical lens.

## Achievement

The project won first place in Physics at the 2018 Dr. Ibrahim Arikan MEF Education Institutions Research Projects Competition.

Public records from Gelişim Koleji also name the project team as Can Ocek and Zafer Mert Ozkeroglu, advised by physics teacher Incifer Tekeli, and state that the project qualified in the TUBITAK high-school project competition. The exact TUBITAK stage wording should be checked before using this as final public copy.

## What We Built

The prototype used a magnetic piston to change the shape of a water lens. A coil generated a magnetic field, a magnet acted as the piston, ferrofluid reduced friction around the moving part, and an air layer separated the ferrofluid from the water so the lens surface would stay clear.

![Schematic of the electromagnet and liquid lens mechanism](/images/projects/magnetic-liquid-lens/mechanism-schematic.png)

The PDF documents three connected builds:

- A converging liquid lens created by moving the piston downward.
- A diverging liquid lens created by moving the piston upward.
- A microscope assembled from two liquid-lens mechanisms.

The final version later added Arduino control. The Arduino circuit regulated current through the electromagnet, which made the piston movement and magnification adjustment more precise.

## Design Decisions

The most important design decision was the magnetic piston. Instead of relying on a conventional mechanical actuator, the system balanced the piston magnet's weight with another magnet. Once that balance was close, small changes in current through the coil could move the piston.

Ferrofluid solved a different problem. It reduced friction around the moving magnet and helped seal the air layer, while the air layer prevented ferrofluid from mixing with the water lens. That mattered because direct ferrofluid-water interaction could disturb the lens surface and ruin the optical behavior.

Pure water was used as the lens liquid because its surface-tension behavior helped create a stable curved surface.

![Close-up of the converging liquid lens setup](/images/projects/magnetic-liquid-lens/converging-lens.png)

## Method

The experiment was calibrated so the liquid surface was flat at roughly `1 A`. From there, changing the current changed the piston's position and therefore changed the lens curvature.

For focal-distance measurements, the report used a `660 nm` laser diode module. The measured values were compared against calculations based on the geometry of the curved liquid surface and the lensmaker relationship.

## Results

For the converging lens, reducing current lowered the measured focal distance:

| Current | Measured focal distance |
| ---: | ---: |
| 0.75 A | 11 cm |
| 0.65 A | 9.5 cm |
| 0.55 A | 8.25 cm |
| 0.50 A | 7 cm |
| 0.45 A | 6 cm |
| 0.40 A | 5.5 cm |
| 0.30 A | 5.25 cm |
| 0.25 A | 4.75 cm |
| 0.20 A | 4 cm |
| 0.15 A | 3.75 cm |

For the diverging lens, increasing current produced negative focal distances:

| Current | Measured focal distance |
| ---: | ---: |
| 1.10 A | -40 cm |
| 1.30 A | -20 cm |
| 1.40 A | -15.64 cm |
| 1.50 A | -10.9 cm |
| 1.60 A | -10.4 cm |

The assembled microscope reached an estimated `107x` magnification. The report calculated this by comparing a phone screen's pixel density with the pixel density visible through the microscope image.

![Phone pixels observed through the liquid-lens microscope](/images/projects/magnetic-liquid-lens/pixel-result.png)

## What It Demonstrates

This project is useful on the portfolio because it shows early hands-on engineering rather than only coursework. It combined physical prototyping, measurement, scientific writing, and later microcontroller-based control.

It also connects several disciplines:

- Optics and focal-distance measurement.
- Electromagnetism and coil-driven magnetic force.
- Ferrofluid behavior and surface tension.
- Mechanical design around friction, sealing, and repeatability.
- Arduino-based controllability in the final version.

## What I Would Improve Now

The strongest next step would be to rebuild the project with cleaner mechanical tolerances, a more controlled current driver, and better imaging documentation.

I would also separate the experimental data pipeline more clearly: current, piston displacement, lens curvature, focal distance, and resulting magnification should each be captured in a way that can be repeated and plotted with uncertainty.

For the public portfolio page, the next media upgrade should be a short video of the Arduino-controlled lens changing focal distance, plus higher-resolution photos of the final microscope setup.

## Source Notes

The Turkish PDF is the most complete written collection, but it is not the final version of the project. The Arduino control and award context come from later notes and public competition records.

The official MEF page found online identifies the 2018 event as the Dr. Ibrahim Arikan MEF Education Institutions Research Projects Competition and lists this project as the national first-place Physics project from Gelisim Koleji / Izmir. Older CV text uses a different event ordinal, so the public page avoids the ordinal number for now.
