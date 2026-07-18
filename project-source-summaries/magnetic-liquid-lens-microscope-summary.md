# Magnetic Liquid Lens Microscope Source Summary

Source documents and references:

- `pdfs/Manyetik Alan İle Ayarlanabilen Sıvı Mercek Yapımı ve Mikroskop Tasarımı.pdf`
- `cv-parsed-content.md`
- MEF official award page: https://www.mef.k12.tr/27-arastirma-projeleri/
- Gelişim Koleji TÜBİTAK announcement: https://www.gelisim.k12.tr/TR/418/232/49.TUBITAK-ORTAO%C4%9ERETIM-O%C4%9ERENCILERI-PROJE-YARISMASI-FINALE-KATILMA-HAKKI.htm
- TÜBİTAK 49th High School Research Projects final announcement: https://tubitak.gov.tr/tr/haber/49-lise-ogrencileri-arastirma-projeleri-final-yarismasi-basliyor

Extraction note:

- The source PDF is in Turkish and contains 22 pages.
- PDF metadata reports creation and modification on `2018-01-16`.
- The extracted text is readable. Some mathematical symbols and figure labels were corrupted by PDF font encoding, but the project structure, methods, measurements, and conclusions are clear.
- This PDF is not the final version of the project. Later/final project context, including Arduino controllability and the MEF first-place award, comes from the user note, parsed CV, and public web references.

## Project Identity

Working public title:

- Adjustable Magnetic Liquid Lens Microscope

Original Turkish title:

- Manyetik Alan İle Ayarlanabilen Sıvı Mercek Yapımı ve Mikroskop Tasarımı

English title:

- Design of a Microscope Using Liquid Lenses Adjustable by Magnetic Field

Project context:

- High-school physics and engineering project from the 2017-2018 period.
- Built around optics, electromagnetism, ferrofluid behavior, mechanical prototyping, and microscope design.
- The PDF describes the most complete early written collection, but not the final Arduino-controlled version.
- The public award evidence places the project in 2018.

Known team/context from supporting sources:

- Gelişim Koleji's public TÜBİTAK announcement names Can Öcek and Zafer Mert Özkeroğlu as 10th-grade students, with physics teacher İncifer Tekeli as advisor.
- The same school page states that the project qualified for the TÜBİTAK high-school project competition final.
- Existing CV notes describe the project as a TÜBİTAK regional-stage participant in the design category. This is inconsistent with the Gelişim Koleji wording and should be verified before public copy.

## Core Idea

The project aimed to build a liquid lens whose focal length could be adjusted by magnetic-field-driven motion, then use two such liquid lens assemblies to create an alternative adjustable microscope.

The design used:

- Pure water as the optical liquid.
- Ferrofluid around the magnetic piston area.
- Magnets to form and balance a piston-like actuator.
- A coil/electromagnet to change magnetic force through electric current.
- A thin air layer to separate the ferrofluid from the water and preserve the lens surface.
- A 660 nm laser diode module to measure focal distances.

The intended advantage over fixed solid lenses was adjustable magnification without mechanically swapping lenses. The project also emphasized low-cost construction and small focal lengths suitable for microscope use.

## What Was Built

The PDF describes a working adjustable liquid-lens setup and a microscope assembled from two liquid lens systems.

Main built elements:

- A magnetic piston mechanism.
- A converging liquid lens produced by moving the piston downward.
- A diverging liquid lens produced by moving the piston upward.
- A microscope setup using the two liquid lens assemblies together.
- An experimental measurement setup for focal length using a laser beam.

Later/final-version addition:

- The final project added Arduino-based controllability. According to the user note and parsed CV, an Arduino-controlled circuit was used to regulate current through the electromagnet. That current moved the magnet acting as a piston, which changed the liquid lens curvature and allowed more precise magnification control.

## Technical Concepts

The report covers:

- Refraction and Snell's law.
- Lens geometry and focal length.
- Convex and concave lenses.
- Angular magnification.
- Simple magnifiers and compound microscopes.
- Electromagnetism and solenoid magnetic fields.
- Magnetic force.
- Ferrofluids and superparamagnetic particle behavior.
- Cohesion, adhesion, surface tension, and liquid surface shape.

The practical engineering challenge was not only creating a curved liquid surface, but doing so repeatedly, controllably, and without the ferrofluid mixing with the water.

## Design Decisions

Magnetic piston:

- The piston used magnets and ferrofluid to create low-friction movement.
- A second magnet helped balance the weight of the magnet acting as the piston mouth.
- Once the magnet's weight was balanced, small changes in coil current could move the piston up or down.

Ferrofluid and air layer:

- Ferrofluid reduced friction around the moving magnetic piston.
- The report states that ferrofluid also helped keep air sealed inside the setup.
- An air layer was placed between the magnet/ferrofluid and the water, preventing direct ferrofluid-water contact that would otherwise disturb or cloud the liquid lens.

Pure water:

- Pure water was chosen for favorable surface-tension behavior.
- The report argues that this improved lens stability and lifetime.

## Methodology

The project followed this broad process:

1. Review literature on adaptive liquid lenses, optics, electromagnetism, ferrofluids, and surface tension.
2. Build a magnetic piston mechanism with magnets, coils, plastic tubing, ferrofluid, pure water, and an air layer.
3. Calibrate the liquid surface as flat at approximately 1 A.
4. Decrease current to move the piston downward and create a convex/converging liquid lens.
5. Increase current to move the piston upward and create a concave/diverging liquid lens.
6. Use a 660 nm laser diode module to measure focal distances.
7. Compare measured focal distances against calculated values from lens geometry.
8. Combine two liquid lens assemblies into a microscope.
9. Estimate microscope magnification using a phone screen's pixel density.

## Experimental Results

### Converging Lens

The system was calibrated so the liquid surface was flat at around `1 A`. Reducing current moved the piston downward, increasing the convex surface and reducing focal length.

Measured focal distances for the thin-edged/converging liquid lens:

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

The report states that measured values were consistent with the calculated trend: as piston displacement increased, the water droplet height and spherical surface geometry changed, reducing focal distance.

### Diverging Lens

Increasing current from the 1 A calibration point moved the piston upward, creating a concave surface that acted as a thick-edged/diverging lens.

Measured focal distances for the diverging liquid lens:

| Current | Measured focal distance |
| ---: | ---: |
| 1.10 A | -40 cm |
| 1.30 A | -20 cm |
| 1.40 A | -15.64 cm |
| 1.50 A | -10.9 cm |
| 1.60 A | -10.4 cm |

The report says the setup could take measurements up to about `1.7 A`.

### Microscope

The microscope magnification was estimated using a phone display:

- Phone screen width: `6 cm`.
- Phone screen height: `10.5 cm`.
- Pixel dimensions: `540 x 960`.
- Approximate pixel density: `90-91 pixels/cm`.
- Approximate source display density: `8190 pixels/cm2`.
- Observed microscope image: `76 pixels/cm2`.
- Estimated magnification: `107x`.

The report says phone pixels were observed clearly through the microscope.

## Conclusions From The PDF

The PDF concludes that:

- The magnetic piston design allowed small current changes to move the piston.
- Balancing the magnet's weight reduced required current and improved controllability.
- Ferrofluid reduced friction during piston movement.
- The air layer prevented ferrofluid from disturbing the water lens.
- Pure water helped create a stable liquid lens.
- Converging lens focal distance could be adjusted with low current values.
- Diverging lens focal distance could also be adjusted, but required higher current values.
- Two adjustable liquid lens systems could be used together to build a microscope.
- The resulting microscope reached an estimated `107x` magnification.
- The project produced a low-cost alternative to fixed-magnification solid-lens microscopes.

## Suggested Public Case-Study Angle

This should be framed as an early physics-engineering project, not only as a science-fair award.

Useful framing:

- Built a controllable liquid lens using magnetism, ferrofluid, water, and a custom piston mechanism.
- Combined physics theory with hands-on prototyping and measurement.
- Extended the prototype into an adjustable microscope.
- Later added Arduino control to regulate electromagnet current and tune magnification more precisely.
- Won first place in Physics at the 2018 MEF research projects competition.

Avoid overclaiming:

- Do not present this as a medical-grade microscope.
- Do not imply the Arduino version is documented in the PDF.
- Do not publish the exact MEF ordinal until the discrepancy is resolved. The official MEF page found online identifies the 2018 event as the 27th Dr. İbrahim Arıkan MEF Education Institutions Research Projects Competition, while older CV text says 29th.
- Verify exact TÜBİTAK stage before publishing. Gelişim Koleji says the project qualified for the TÜBİTAK final; older CV notes say regional-stage participant.

## Competition Evidence

MEF:

- The MEF official 2018 award page lists `Manyetik Alan İle Ayarlanabilen Sıvı Mercek Yapımı ve Mikroskop Tasarımı` as the national first-place Physics project from Gelişim Koleji / İzmir.
- The event was the Dr. İbrahim Arıkan MEF Education Institutions Research Projects Competition.
- The page says 90 projects by 152 students were selected for exhibition after preliminary evaluation, with entries from Turkey and multiple other countries.

TÜBİTAK:

- Gelişim Koleji's 2018 announcement states that Can Öcek and Zafer Mert Özkeroğlu, advised by physics teacher İncifer Tekeli, qualified with this project in the TÜBİTAK high-school project competition.
- TÜBİTAK's public 49th High School Research Projects final announcement says 16,181 projects were submitted, 1,200 were displayed at regional exhibitions, and 219 were selected as finalists.

## Potential Visuals In The PDF

The PDF includes several visual candidates that could support a future page:

- Magnetic piston schematic.
- Graph of magnetic field along an axis.
- Converging lens geometry diagram.
- Photo of the magnetic piston.
- Photo of the converging lens.
- Diverging lens geometry diagram.
- Photo of the diverging lens.
- Microscope setup photos.
- Phone pixel image observed through the microscope.
- Focal-distance and current/displacement graphs.

If this becomes a project page, useful media would be:

- One hero image of the final microscope or Arduino-controlled setup if available.
- One schematic showing how current moves the magnetic piston.
- One before/after or measurement image showing magnification.
- One award/project exhibition photo if public and approved.

## Public Page Metadata Draft

Possible title:

- Adjustable Magnetic Liquid Lens Microscope

Possible description:

- A high-school physics and engineering project that used ferrofluid, magnetic actuation, and later Arduino-controlled current regulation to build adjustable liquid lenses and combine them into a microscope.

Possible categories:

- Physics
- Engineering
- Hardware
- Early Projects

Possible technologies/themes:

- Optics
- Electromagnetism
- Ferrofluid
- Arduino
- Experimental design
- Prototyping
- Data collection

Possible role wording:

- Designed and built the liquid-lens microscope prototype as part of a two-student high-school physics project, combining optical theory, magnetic actuation, measurement, and later Arduino-based control.

Status wording:

- Source-backed summary; PDF documents the main prototype, while Arduino control and competition details come from later notes and public award sources.
