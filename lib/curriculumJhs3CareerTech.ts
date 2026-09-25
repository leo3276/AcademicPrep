// Ghanaian JHS 3 Career Technology Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// 12 Topics with comprehensive notes, video references, and BECE worked examples with marking rubrics

import { CurriculumTopic } from './types';

export const JHS3_CAREER_TECH_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs3-ctech-t1-health-safety-workshop",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Workshop Safety, Hazards, Personal Protective Equipment (PPE) and First Aid",
    "description": "Industrial safety regulations, identification of mechanical, chemical, electrical, and ergonomic hazards, PPE selection, fire classification (Classes A-D), and emergency First Aid procedures.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=safety-workshop-bece",
    "youtubeId": "safety-workshop-bece",
    "keyNotes": "• Workshop Safety Principles:\n  - Safety eliminates unsafe acts (carelessness, horseplay) and unsafe conditions (oil spills, exposed live wires, unguarded rotating parts).\n• Personal Protective Equipment (PPE):\n  - Eye protectors against metal chips; respirators against toxic wood dust/fumes; ear defenders against >85dB noise; steel-toe boots against falling heavy stock.\n• Fire Science & Extinguisher Classes:\n  - Fire Triangle: Fuel, Heat, and Oxygen. Removing any element stops combustion.\n  - Class A (ordinary combustibles: wood/paper) -> Water/Foam.\n  - Class B (flammable liquids: petrol/thinners) -> Foam, Dry Powder, CO2 (NEVER WATER).\n  - Class C (flammable gases); Class D (combustible metals); Electrical fires -> CO2 or Dry Powder.\n• Emergency First Aid Procedures:\n  - Thermal burns: Flood immediately with cool running water for 10-15 minutes; do not burst blisters or apply greasy ointments.\n  - Arterial bleeding: Apply direct digital pressure with a sterile pad, elevate limb above heart level, and bandage firmly.",
    "examples": [
      {
        "id": "ex-jhs3ctech-t1-1",
        "title": "Differentiating Unsafe Acts vs Unsafe Conditions & Class B Fire Hazards",
        "problem": "(a) Differentiate between an 'unsafe act' and an 'unsafe condition' in a workshop, giving one example of each.\n(b) State the correct extinguisher for a petrol fire, explaining why water must never be used.",
        "stepByStepSolution": [
          "Step 1: Distinguish unsafe act vs condition: An unsafe act is an improper human behavior violating safety protocols (e.g. grinding without eye goggles) [B1 mark]. An unsafe condition is a physical/environmental defect in the work area (e.g. oil spilt on a walkway or unguarded saw blade) [B1 mark].",
          "Step 2: Petrol fire extinguisher: Foam extinguisher or Dry Chemical Powder (DCP) / Carbon Dioxide (CO2) [M1 mark].",
          "Step 3: Why water cannot be used: Petrol has a lower density than water and is immiscible; pouring water causes the burning petrol to float on top and spread across the floor, rapidly spreading the flames [A1 mark]."
        ],
        "keyTakeaway": "Unsafe acts stem from human error; unsafe conditions stem from physical defects; water causes burning petrol to float and spread."
      },
      {
        "id": "ex-jhs3ctech-t1-2",
        "title": "Emergency First Aid Protocol for Deep Arterial Bleeding",
        "problem": "A student sustains a deep bleeding laceration on the forearm from sheet metal. Outline four sequential emergency first aid steps.",
        "stepByStepSolution": [
          "Step 1: Wear disposable latex/nitrile gloves to protect against blood-borne pathogens [B1 mark].",
          "Step 2: Apply firm direct digital pressure over the wound using a sterile dressing pad [M1 mark].",
          "Step 3: Elevate the injured forearm above the level of the casualty's heart [M1 mark].",
          "Step 4: Secure the pressure pad firmly with a roller bandage without cutting off finger circulation, and transfer promptly to a clinic [A1 mark]."
        ],
        "keyTakeaway": "Direct pressure and limb elevation stop severe arterial bleeding without compromising circulation."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t2-materials-timber-conversion",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 2,
    "title": "Wood & Timber Technology: Classification, Seasoning, Defects and Conversion",
    "description": "Classification into hardwoods and softwoods, trunk anatomy (pith, heartwood, sapwood, cambium, bark), conversion methods, moisture content calculations, and timber defects.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=timber-technology-ghana",
    "youtubeId": "timber-technology-ghana",
    "keyNotes": "• Botanical Classification:\n  - Hardwoods: Broad-leaved deciduous angiosperms (Odum, Mahogany, Sapele, Wawa, Teak); have open porous vessels.\n  - Softwoods: Needle-leaved evergreen gymnosperms (Pine, Fir, Cedar); simpler tracheid cellular structure.\n• Tree Trunk Cross-Section (Center Outwards):\n  - Pith (soft central core) -> Heartwood (dark, dense, decay-resistant dead wood) -> Sapwood (pale, living, conducts sap, prone to beetles) -> Cambium layer (active cell division ring) -> Inner bark (phloem) -> Outer protective bark.\n• Timber Conversion:\n  - Through-and-through (Plain) sawing: Cheap, fast, but boards are prone to cupping.\n  - Quarter sawing: Radial cuts across growth rings; producing stable, flat, wear-resistant boards with decorative ray figure.\n• Seasoning & Moisture Content:\n  - EMC in southern Ghana is 12% to 15% indoors.\n  - Moisture Content (%) = [(Wet Weight - Dry Weight) / Dry Weight] × 100%.\n  - Natural Air Seasoning (6-18 months) vs Artificial Kiln Seasoning (3-14 days; kills insect larvae).\n• Defects:\n  - Natural (Knots, Heart shake, Cup shake) vs Drying/Seasoning (Cupping across width, Bowing along face, Twisting).",
    "examples": [
      {
        "id": "ex-jhs3ctech-t2-1",
        "title": "Calculating Percentage Moisture Content and Evaluating Seasoning Suitability",
        "problem": "A green Odum timber sample weighed 350 g. After oven drying at 105°C, its constant dry weight was 280 g.\n(a) Calculate the percentage moisture content.\n(b) State whether this timber is suitable for immediate interior furniture in Accra, justifying your answer.",
        "stepByStepSolution": [
          "Step 1: State formula: Moisture Content (%) = [(Wet Weight - Dry Weight) / Dry Weight] × 100 [B1 mark].",
          "Step 2: Calculate: Weight of moisture = 350 - 280 = 70 g. MC (%) = (70 / 280) × 100 = 25% [M1, A1 marks].",
          "Step 3: Suitability: No, it is NOT suitable [B1 mark]. The indoor equilibrium moisture content (EMC) in Ghana is 12%–15%; at 25%, the wood will shrink, warp, loosen glued joints, and crack [B1 mark]."
        ],
        "keyTakeaway": "Always divide weight loss by constant DRY weight; indoor EMC in Ghana is 12%–15%."
      },
      {
        "id": "ex-jhs3ctech-t2-2",
        "title": "Comparing Natural Air Seasoning vs Artificial Kiln Seasoning",
        "problem": "Compare Air Seasoning and Kiln Seasoning based on: (a) Drying speed, (b) Capital cost, (c) Control over moisture content.",
        "stepByStepSolution": [
          "Step 1: Drying speed: Air seasoning is slow (months to over a year); Kiln seasoning is rapid (3–14 days) [B1 mark].",
          "Step 2: Capital cost: Air seasoning requires low capital (simple sheds/stickers); Kiln seasoning requires high capital for boilers, insulated chambers, and fans [B1 mark].",
          "Step 3: Moisture control: Air seasoning is weather-dependent; Kiln seasoning allows precise automated control down to 8%–10% and sterilizes wood [B1, A1 marks]."
        ],
        "keyTakeaway": "Kiln seasoning dries timber in days under precise temperature control; air seasoning takes months."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t3-materials-metals-plastics",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 3,
    "title": "Metals & Plastics Technology: Ferrous, Non-Ferrous Alloys, Thermoplastics and Thermosets",
    "description": "Ferrous metals and carbon content, non-ferrous metals, engineering alloys (brass, bronze, solder), and polymer classification (thermoplastics vs thermosetting plastics).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=metals-plastics-technology",
    "youtubeId": "metals-plastics-technology",
    "keyNotes": "• Ferrous Metals (Contain Iron, Magnetic, Prone to Rusting):\n  - Mild Steel (0.15%-0.30% C): Ductile, malleable, easily welded; used for car panels, bolts, desk frames.\n  - High Carbon Steel (0.7%-1.5% C): Extremely hard and wear-resistant; used for cutting tools, chisels, files.\n  - Cast Iron (2%-4% C): High compressive strength, excellent vibration damping; used for lathe beds, engine blocks.\n• Non-Ferrous Metals & Alloys (No Iron, Non-Magnetic, Corrosion-Resistant):\n  - Copper (cables, plumbing); Aluminum (cookware, overhead power cables, bauxite origin).\n  - Brass = Copper + Zinc (water taps, locks, screws).\n  - Bronze = Copper + Tin (marine ship propellers, statues).\n  - Soft Solder = Tin + Lead (electrical circuit soldering, low melting point ~188°C).\n• Plastics & Polymers:\n  - Thermoplastics: Linear polymer chains with weak secondary bonds; soften and melt repeatedly on heating; recyclable (PVC pipes, Acrylic, Polyethylene).\n  - Thermosetting Plastics: Permanently cross-linked molecular network; do not melt upon reheating (char instead); non-recyclable; excellent heat/electrical insulation (Bakelite plugs, Melamine countertops).",
    "examples": [
      {
        "id": "ex-jhs3ctech-t3-1",
        "title": "Ferrous vs Non-Ferrous Metals and Alloy Constituents",
        "problem": "(a) Distinguish between ferrous and non-ferrous metals with two examples of each.\n(b) State the constituents of: (i) Brass, (ii) Bronze, (iii) Soft Solder.",
        "stepByStepSolution": [
          "Step 1: Distinction: Ferrous metals contain iron, are generally magnetic, and rust (e.g. Mild steel, Cast iron) [B1 mark]. Non-ferrous metals contain no iron, are non-magnetic, and do not rust (e.g. Copper, Aluminum) [B1 mark].",
          "Step 2: Alloy constituents: (i) Brass: Copper and Zinc [M1 mark]; (ii) Bronze: Copper and Tin [M1 mark]; (iii) Soft Solder: Tin and Lead [A1 mark]."
        ],
        "keyTakeaway": "Brass is Copper + Zinc; Bronze is Copper + Tin; Solder is Tin + Lead."
      },
      {
        "id": "ex-jhs3ctech-t3-2",
        "title": "Why Electrical Plugs and Pan Handles Use Thermosets (Bakelite)",
        "problem": "Explain three reasons why 3-pin plug bodies and pan handles are made from thermosetting plastics (Bakelite) rather than thermoplastics (PVC).",
        "stepByStepSolution": [
          "Step 1: Thermal stability: Thermosetting plastics have rigid cross-linked polymer chains that do not soften, deform, or melt under high heat [B1 mark].",
          "Step 2: Electrical insulation: Bakelite has high dielectric strength and electrical resistivity, preventing electrocution from internal live contacts [M1 mark].",
          "Step 3: Mechanical rigidity: Under terminal clamping pressure and physical impact, thermosets maintain exact dimensional stability without creep [A1 mark]."
        ],
        "keyTakeaway": "Thermosetting plastics like Bakelite do not melt under heat and provide outstanding electrical insulation."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t4-technical-drawing-orthographic",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 4,
    "title": "Technical & Engineering Drawing: Orthographic (1st & 3rd Angle) and Pictorial Projections",
    "description": "Standard BS 8888 line types, dimensioning rules, first-angle and third-angle orthographic projections, projection symbols, and 3D pictorial drawing (isometric and oblique).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=technical-drawing-orthographic",
    "youtubeId": "technical-drawing-orthographic",
    "keyNotes": "• Standard Line Conventions (BS 8888):\n  - Continuous thick (0.5-0.7 mm): Visible outlines and edges.\n  - Continuous thin (0.25-0.35 mm): Dimension, extension, hatching lines.\n  - Thin dashed line: Hidden outlines and edges.\n  - Chain thin line (long-and-short dash): Center lines, axes of symmetry.\n• Rules of Dimensioning:\n  - 1 mm clearance gap between object outline and extension line; closed, filled arrowheads (3:1 ratio); all units in millimeters (mm omitted from numerals).\n• Orthographic Projections:\n  - First-Angle: Plan is drawn BELOW Front Elevation; Left view on Right side.\n  - Third-Angle: Plan is drawn ABOVE Front Elevation; Left view on Left side.\n  - Projection symbol: Truncated cone (frustum) and concentric circles.\n• Pictorial Projections:\n  - Isometric: Three axes (one vertical, two at 30° to horizontal).\n  - Oblique: Front face true to size; receding axes at 45° (Cavalier = full scale; Cabinet = half scale 1:2).",
    "examples": [
      {
        "id": "ex-jhs3ctech-t4-1",
        "title": "First Angle vs Third Angle Orthographic Layout Comparison",
        "problem": "(a) Describe the graphical projection symbol for First Angle projection.\n(b) Compare the relative layout of Front Elevation, Plan, and Left End Elevation in First Angle vs Third Angle projection.",
        "stepByStepSolution": [
          "Step 1: Symbol: A truncated cone frustum and two concentric circles placed to the right of the frustum [B1 mark].",
          "Step 2: First Angle Layout: Front Elevation is at the top; Plan is placed directly BELOW Front Elevation; Left view is drawn on the RIGHT [M1, A1 marks].",
          "Step 3: Third Angle Layout: Front Elevation is lower; Plan is placed directly ABOVE Front Elevation; Left view is drawn on the LEFT [B1 mark]."
        ],
        "keyTakeaway": "In First Angle: Plan is BELOW Front Elevation; in Third Angle: Plan is ABOVE Front Elevation."
      },
      {
        "id": "ex-jhs3ctech-t4-2",
        "title": "Essential Rules of Engineering Dimensioning",
        "problem": "State four essential rules of dimensioning engineering drawings according to standard conventions (BS 8888).",
        "stepByStepSolution": [
          "Step 1: Extension lines must leave a 1 mm gap from the object outline and extend 2–3 mm beyond the dimension line [B1 mark].",
          "Step 2: Dimension lines must terminate with closed, filled arrowheads with a 3:1 length-to-width proportion [B1 mark].",
          "Step 3: Smaller dimensions are placed closer to the object; larger overall dimensions are placed outside to avoid crossing lines [M1 mark].",
          "Step 4: All dimensions are in millimeters, with the unit abbreviation 'mm' strictly omitted from numerals [A1 mark]."
        ],
        "keyTakeaway": "Arrowheads are filled 3:1 triangles; dimensions are in millimeters without writing 'mm'."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t5-measuring-marking-tools",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 5,
    "title": "Measuring, Marking-Out, and Testing Tools in Production Workshops",
    "description": "Precision measuring rules, try squares, sliding bevels, gauges (marking, mortise, cutting), metalworking layout tools (punches, scriber, surface plate), and micrometer reading.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=measuring-marking-tools",
    "youtubeId": "measuring-marking-tools",
    "keyNotes": "• Testing Tools:\n  - Try Square: Tests 90° squareness and marks perpendicular lines.\n  - Sliding Bevel: Adjustable blade clamps at any angle for bevels/chamfers.\n  - Spirit Level: Curved vial with bubble indicates horizontal level and vertical plumb.\n• Woodworking Gauges:\n  - Marking Gauge: Single spur for scribing lines parallel to a face edge along grain.\n  - Mortise Gauge: Two spurs (one fixed, one adjustable) to scribe both mortise lines simultaneously.\n  - Cutting Gauge: Miniature knife blade slices cleanly across grain without tearing fibers.\n• Metalworking Layout Tools:\n  - Scriber: Hardened tool steel point (15°-20°) scratches fine lines on metal.\n  - Center Punch (90° point): Creates wide conical indentation to seat drill bits.\n  - Dot Punch (60° point): Small witness indentations along layout lines.\n• Precision Instruments:\n  - External Micrometer: Measures to 0.01 mm. Reading = Sleeve (mm) + Half-mm (if visible) + (Thimble division × 0.01 mm).\n  - Vernier Caliper: Measures internal, external, and depth to 0.02 mm.",
    "examples": [
      {
        "id": "ex-jhs3ctech-t5-1",
        "title": "Reading an External Micrometer and Comparing Punch Point Angles",
        "problem": "(a) Calculate the reading of a micrometer whose sleeve shows 14.5 mm and whose thimble line 38 aligns with the datum index line.\n(b) Differentiate between the point angle and function of a Center Punch and a Dot Punch.",
        "stepByStepSolution": [
          "Step 1: Micrometer reading: Sleeve = 14.50 mm. Thimble = 38 × 0.01 = 0.38 mm. Total = 14.50 + 0.38 = 14.88 mm [M1, A1 marks].",
          "Step 2: Center Punch vs Dot Punch: Center Punch has a 90° point angle used to seat and guide twist drill tips [B1 mark]. Dot Punch has a 60° point angle used to make light witness marks along scribed lines [B1 mark]."
        ],
        "keyTakeaway": "Micrometer total = Sleeve + Thimble (0.01 mm); Center punch = 90°; Dot punch = 60°."
      },
      {
        "id": "ex-jhs3ctech-t5-2",
        "title": "Marking Gauge vs Mortise Gauge and Cutting Gauge Application",
        "problem": "Differentiate between a Marking Gauge and Mortise Gauge, and explain why a Cutting Gauge is used across the wood grain.",
        "stepByStepSolution": [
          "Step 1: Marking vs Mortise gauge: Marking gauge has a single spur to score one line; Mortise gauge has two spurs to score both mortise walls simultaneously [B1 mark].",
          "Step 2: Why Cutting gauge across grain: Conical spurs tear longitudinal fibers across the grain; a cutting gauge has a small sharp knife blade that cleanly slices fibers without splintering [M1, A1 marks]."
        ],
        "keyTakeaway": "Mortise gauge scores both sides of a mortise; cutting gauge uses a knife blade across the grain."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t6-cutting-shaping-tools",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 6,
    "title": "Cutting, Shaping, Boring and Abrading Tools: Saws, Chisels, Planes and Drills",
    "description": "Saw tooth geometry and set, bench plane anatomy and tuning, chisel types, boring tools, cold chisels, files, and workshop abrasives.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=cutting-shaping-tools",
    "youtubeId": "cutting-shaping-tools",
    "keyNotes": "• Saws & Kerf Geometry:\n  - Saw Kerf: Width of cut slot. Saw teeth are set (bent alternately) to make kerf wider than the blade, preventing friction binding.\n  - Rip Saw (chisel-like teeth for ripping parallel to grain); Crosscut Saw (knife-like teeth for cutting across grain); Tenon Saw (brass back for joinery); Coping Saw (flexible blade in C-frame for curves).\n• Bench Planes:\n  - Jack Plane (truing rough timber); Trying Plane (longest sole 550-600 mm for straight edges); Smoothing Plane (final surface finish).\n  - Cap Iron (Chip Breaker): Screwed 0.5-1.0 mm behind cutting edge; curls and breaks shavings to prevent grain tear-out and damps chatter.\n  - Cutting iron: 25° grinding angle, 30° honing angle on oilstone.\n• Chisels:\n  - Firmer (general paring); Bevel-edge (reaches acute dovetail corners); Mortise (thick heavy blade for mortising with mallet); Cold Chisel (60° cutting angle for mild steel).\n• Files & Rasps:\n  - Cut: Single cut, Double cut, Rasp cut. Pinning is soft metal clogging teeth; cleared with a wire File Card.",
    "examples": [
      {
        "id": "ex-jhs3ctech-t6-1",
        "title": "Saw Kerf Mechanics and the Function of the Plane Cap Iron",
        "problem": "(a) What is 'saw kerf', and why are alternate teeth of a hand saw set?\n(b) Explain the function of the Cap Iron (chip breaker) in an adjustable bench plane.",
        "stepByStepSolution": [
          "Step 1: Saw kerf & set: Kerf is the width of the cut slot [B1 mark]. Setting teeth alternately makes the kerf wider than the saw blade thickness, preventing friction binding and blade jamming [M1, A1 marks].",
          "Step 2: Function of Cap Iron: Curls and breaks wood shavings immediately after lifting, preventing them from splitting wood grain ahead of the cut, and stiffens the blade against chatter [B1, A1 marks]."
        ],
        "keyTakeaway": "Saw set creates a wide kerf preventing blade binding; the cap iron curls shavings to prevent grain tearing."
      },
      {
        "id": "ex-jhs3ctech-t6-2",
        "title": "Safety and Maintenance Rules for Woodworking Chisels",
        "problem": "State three critical safety and maintenance rules when using bench chisels in a woodworking workshop.",
        "stepByStepSolution": [
          "Step 1: Always keep both hands behind the cutting edge of the chisel; clamp the workpiece firmly in a vice [B1 mark].",
          "Step 2: Always push the chisel away from your body, never towards yourself or others [B1 mark].",
          "Step 3: Never use a steel hammer on wooden chisel handles; use only a wooden carpenter's mallet to prevent handle splitting [M1, A1 marks]."
        ],
        "keyTakeaway": "Keep both hands behind the chisel edge, pare away from your body, and use a wooden mallet."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t7-wood-metal-joining",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 7,
    "title": "Joining and Fastening Methods: Woodworking Joints, Soldering, Brazing and Mechanical Fasteners",
    "description": "Woodworking framing and carcass joints, proportional rules, adhesives (PVA, contact cement, epoxy), and thermal metal joining (soft soldering vs brazing).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=wood-metal-joining",
    "youtubeId": "wood-metal-joining",
    "keyNotes": "• Woodworking Joints:\n  - Framing: Mortise and Tenon (tenon thickness = 1/3 timber thickness); Haunched Tenon (stub fills groove, stops twisting, protects stile relish); Halving; Bridle.\n  - Carcass/Box: Through Dovetail (wedge tails resist tensile pull in drawers); Lap Dovetail; Housing.\n  - Widening: Butt edge-to-edge, Tongue and Groove (T&G), Dowelled.\n• Modern Adhesives:\n  - PVA: Water-based white glue for interior timber joinery.\n  - Contact Adhesive: Applied to both sides, dried until tacky, bonds instantly without clamping (Formica laminates).\n  - Epoxy Resin: Two-part (resin + hardener), gap-filling, 100% waterproof for metals/wood/ceramics.\n• Thermal Metal Joining:\n  - Flux: Dissolves surface oxides, prevents re-oxidation, and promotes molten filler metal flow.\n  - Soft Soldering: Operates <450°C using Tin-Lead alloy (electronic circuits, copper plumbing).\n  - Brazing: Operates >450°C using Brass spelter rod (Copper-Zinc) and Borax flux; high structural strength.",
    "examples": [
      {
        "id": "ex-jhs3ctech-t7-1",
        "title": "Proportional Tenon Calculation and Purpose of the Haunch",
        "problem": "(a) What is the proportional rule for a tenon in a Mortise and Tenon joint?\n(b) Calculate the tenon thickness for a 45 mm thick rail.\n(c) Explain the purpose of the haunch in a door frame corner joint.",
        "stepByStepSolution": [
          "Step 1: Rule: Tenon thickness equals one-third (1/3) of overall rail thickness [B1 mark].",
          "Step 2: Calculation: 45 mm ÷ 3 = 15 mm tenon thickness [M1, A1 marks].",
          "Step 3: Purpose of Haunch: Fills the panel groove, prevents rail twisting, and leaves a solid relish on the stile end so it does not split under wedging [B1, A1 marks]."
        ],
        "keyTakeaway": "Tenon thickness = (1/3) × Timber thickness; the haunch fills the groove and prevents twisting."
      },
      {
        "id": "ex-jhs3ctech-t7-2",
        "title": "Role of Flux and Soft Soldering vs Brazing Comparison",
        "problem": "(a) State the role of flux in soldering.\n(b) Differentiate between Soft Soldering and Brazing based on temperature, filler metal, and joint strength.",
        "stepByStepSolution": [
          "Step 1: Role of flux: Dissolves surface oxides, prevents re-oxidation during heating, and promotes molten filler wetting [B1 mark].",
          "Step 2: Temperature: Soft soldering <450°C; Brazing >450°C [B1 mark].",
          "Step 3: Filler metal: Soft soldering uses Tin-Lead alloy; Brazing uses Brass spelter (Copper-Zinc) [M1 mark].",
          "Step 4: Strength: Soft soldering has moderate shear strength for sealing/electronics; Brazing has high structural strength approaching base metal [A1 mark]."
        ],
        "keyTakeaway": "Soft soldering: <450°C with Tin-Lead; Brazing: >450°C with Brass spelter."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t8-food-commodities-preservation",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Food Commodities, Spoilage, and Traditional & Modern Preservation Technologies",
    "description": "Classification of food commodities, causes of spoilage, microbial danger zone (5°C-63°C), traditional Ghanaian preservation (smoking, salting, drying, fermentation), and modern canning/pasteurization.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=food-preservation-ghana",
    "youtubeId": "food-preservation-ghana",
    "keyNotes": "• Food Commodity Perishability:\n  - Perishable (spoil in 1-2 days: fresh fish, meat, milk, tomatoes); Semi-perishable (1-3 weeks: yams, cassava, onions); Shelf-stable (months/years: dry maize, cowpeas, rice).\n• Spoilage Causes & Conditions:\n  - Endogenous enzymes (autolysis/browning); Microorganisms (bacteria, molds, yeasts); Lipid oxidation (rancidity).\n  - Microbial Danger Zone: 5°C to 63°C (exponential reproduction; optimum at 37°C).\n• Traditional Ghanaian Technologies:\n  - Sun Drying: Reduces water activity ($A_w < 0.65$), halting microbial enzyme function.\n  - Hot Smoking: Chorkor smoker deposits antimicrobial phenols/formaldehyde and dries fish.\n  - Dry Salting (Koobi): Hypertonic salt draws water out via Osmosis, causing bacterial plasmolysis.\n  - Fermentation (Kenkey, Gari): Lactic acid bacteria drop pH < 4.0, inhibiting pathogens.\n• Modern Technologies:\n  - Pasteurization: 72°C for 15 seconds (HTST) destroys pathogens; requires refrigeration.\n  - Canning (Sterilization): 121°C pressurized retort destroys Clostridium botulinum spores for ambient shelf stability.\n  - Freezing (-18°C): Suspends microbial multiplication without completely killing all bacteria.",
    "examples": [
      {
        "id": "ex-jhs3ctech-t8-1",
        "title": "Bacterial Growth Conditions and the Scientific Principle of Salting Fish (Koobi)",
        "problem": "(a) State four conditions microorganisms require to multiply and cause food spoilage.\n(b) Explain the scientific principle behind preserving tilapia into 'Koobi' using heavy dry salting.",
        "stepByStepSolution": [
          "Step 1: Four growth conditions: Warmth (5°C–63°C), Moisture (water activity), Nutrients (protein/carbs), and Favorable pH/Oxygen [B1 mark].",
          "Step 2: Salting principle: High salt creates a hypertonic external environment [M1 mark].",
          "Step 3: Osmotic action: Water moves out of fish muscle tissue and bacterial cells across semi-permeable membranes via Osmosis [M1 mark].",
          "Step 4: Plasmolysis: Bacterial cells undergo cellular plasmolysis (shrinkage) and are unable to metabolize or multiply, arresting decay [A1 mark]."
        ],
        "keyTakeaway": "Salting preserves fish by Osmosis, dehydrating bacterial cells and arresting spoilage."
      },
      {
        "id": "ex-jhs3ctech-t8-2",
        "title": "Pasteurization vs Canning Sterilization Comparison",
        "problem": "Compare Pasteurization and Canning Sterilization based on: (a) Temperature, (b) Effect on spores, (c) Storage requirements.",
        "stepByStepSolution": [
          "Step 1: Temperature: Pasteurization uses moderate heat (72°C for 15 seconds); Canning uses pressurized steam at 121°C for 15–20 minutes [B1 mark].",
          "Step 2: Effect on spores: Pasteurization kills vegetative pathogens but spores survive; Canning destroys all microorganisms including Clostridium botulinum endospores [M1 mark].",
          "Step 3: Storage: Pasteurized products require refrigeration (<4°C) with short shelf life; Canned foods are shelf-stable at room temperature for years [A1 mark]."
        ],
        "keyTakeaway": "Pasteurization requires refrigeration; canning achieves commercial sterility at 121°C for room-temperature storage."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t9-ghanaian-cookery-meal-planning",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 9,
    "title": "Meal Planning, Ghanaian Indigenous Cookery and Special Dietary Requirements",
    "description": "The six nutrients and deficiency diseases, Ghanaian 3-Star Diet and multi-mix planning, special diets (diabetics, hypertensives, adolescents), and hygienic indigenous cookery.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=ghanaian-cookery-meal-planning",
    "youtubeId": "ghanaian-cookery-meal-planning",
    "keyNotes": "• Six Essential Nutrients & Deficiencies:\n  - Carbohydrates (energy); Proteins (body-building; Kwashiorkor = protein deficiency with edema; Marasmus = total calorie starvation).\n  - Fats (concentrated energy, A/D/E/K carrier); Vitamins (Vit A = night blindness, Vit C = scurvy, Vit D = rickets).\n  - Minerals (Iron = nutritional anemia; Calcium = bones/teeth; Iodine = goiter); Water and Fiber (peristalsis).\n• Ghanaian 3-Star Diet Concept:\n  - Star 1: Energy staple (maize, yam, cassava, plantain).\n  - Star 2: Body-building protein (fish, beans, meat, eggs).\n  - Star 3: Protective food (kontomire leafy greens, fresh fruits).\n• Protein Complementarity:\n  - Cereals lack Lysine (have Methionine); Legumes lack Methionine (have Lysine). Combining them (Red-red: beans + gari/plantain) yields complete protein.\n• Special Diets:\n  - Diabetics: Unripe plantain ampesi (low glycemic index, slow glucose release), high fiber, zero refined sugars.\n  - Hypertensives: Strict reduction of dietary sodium (table salt, stock cubes, salty momoni); potassium-rich kontomire.\n  - Adolescents: Elevated protein, iron for blood volume/menstruation, calcium for bone growth.",
    "examples": [
      {
        "id": "ex-jhs3ctech-t9-1",
        "title": "Therapeutic Ghanaian Lunch Menu Planning for a Diabetic and Hypertensive Patient",
        "problem": "Plan a nutritious traditional Ghanaian lunch for a 65-year-old grandmother diagnosed with Type 2 Diabetes and Hypertension, justifying your choices and listing prohibitions.",
        "stepByStepSolution": [
          "Step 1: Menu: Boiled unripe plantain ampesi with Kontomire and smoked salmon stew, fresh pawpaw slice, and unsweetened Sobolo drink [B1 mark].",
          "Step 2: Diabetes rationale: Unripe plantain has a low glycemic index and resistant starch, releasing glucose slowly into the blood without sugar spikes [B1 mark].",
          "Step 3: Hypertension rationale: Kontomire supplies potassium to lower blood pressure; salmon provides lean omega-3 protein [M1 mark].",
          "Step 4: Prohibitions: Strictly avoid excessive table salt, bouillon MSG cubes, deep frying, and refined white sugar [A1 mark]."
        ],
        "keyTakeaway": "Unripe plantain ampesi has a low glycemic index; reduce sodium and avoid sugar for diabetic hypertensives."
      },
      {
        "id": "ex-jhs3ctech-t9-2",
        "title": "Explaining Protein Complementarity in Ghanaian Dishes",
        "problem": "Explain the nutritional concept of 'Protein Complementarity' using the traditional dish 'Red-Red' (cowpeas and plantain/gari).",
        "stepByStepSolution": [
          "Step 1: Define incomplete proteins: Plant proteins lack one or more essential amino acids [B1 mark].",
          "Step 2: Specific amino acid contrast: Cereals/gari are deficient in Lysine but contain Methionine; Legumes/cowpeas are rich in Lysine but deficient in Methionine [M1 mark].",
          "Step 3: Complementary outcome: Consumed together in Red-Red, they complement each other, providing all essential amino acids with a biological value equivalent to animal protein [A1 mark]."
        ],
        "keyTakeaway": "Combining cereals (low lysine) and legumes (low methionine) produces a complete protein profile."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t10-garment-design-stitches",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 10,
    "title": "Garment Making: Stitches, Seams, Pattern Drafting and Clothing Construction",
    "description": "Sewing machine mechanisms, temporary vs permanent stitches, seam construction (plain, French, run-and-fell), and fullness control (darts, pleats, gathers).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=garment-making-stitches",
    "youtubeId": "garment-making-stitches",
    "keyNotes": "• Sewing Machine Mechanics:\n  - Feed dog advances fabric forward; presser foot holds cloth flat; tension discs regulate upper thread; shuttle hook forms lockstitch with bobbin.\n• Hand Stitches Classification:\n  - Temporary: Even basting (equal 6 mm stitches/spaces for fitting under strain); Uneven basting (quick tacking); Tailor's tacks (transferring pattern markings).\n  - Permanent Joining: Backstitch (strongest hand stitch, resembles machine stitching); Running stitch.\n  - Neatening: Overcasting (prevents raw edges from fraying); Blanket stitch; Buttonhole stitch.\n• Seam Construction:\n  - Plain Seam: Right sides together, stitched 15 mm from edge, pressed open, neatened.\n  - French Seam: Self-neatening enclosed seam worked in two steps (1st wrong sides together, trim to 3 mm; 2nd right sides together enclosing raw edges); ideal for sheer fabrics (chiffon, organza).\n  - Run and Fell (Machine Fell) Seam: Double-stitched, flat, exceptionally strong; used for denim jeans and school uniform shorts.\n• Fullness Control:\n  - Darts: Triangular folds stitched tapering to a point; shape flat 2D fabric over 3D body curves (bust, hips, waist).\n  - Pleats: Knife, box, and inverted pleats; Gathers: pulled loose stitches for soft fullness.",
    "examples": [
      {
        "id": "ex-jhs3ctech-t10-1",
        "title": "Seam Selection for Chiffon and Khaki Shorts & French Seam Procedure",
        "problem": "(a) Name the appropriate seam for: (i) transparent chiffon blouse, (ii) heavy khaki school shorts, giving reasons.\n(b) Outline the steps for making a French Seam.",
        "stepByStepSolution": [
          "Step 1: Chiffon seam: French seam because chiffon is sheer and frays easily; the French seam encloses all raw edges invisibly [B1 mark].",
          "Step 2: Khaki shorts seam: Run and fell seam because it is rugged, double-stitched, and lies flat without chafing [B1 mark].",
          "Step 3: French seam procedure: 1. Place WRONG sides together, stitch 6 mm from edge, and trim seam allowances to 3 mm [M1 mark]. 2. Press, turn RIGHT sides together, and stitch a second row on the wrong side along the fitting line, enclosing raw edges [A1 mark]."
        ],
        "keyTakeaway": "French seams enclose raw edges for sheer fabrics; run-and-fell seams provide rugged strength for khaki shorts."
      },
      {
        "id": "ex-jhs3ctech-t10-2",
        "title": "Purpose of Darts and Even vs Uneven Basting Stitches",
        "problem": "(a) Explain the purpose of sewing darts in garment making.\n(b) Differentiate between Even Basting and Uneven Basting stitches.",
        "stepByStepSolution": [
          "Step 1: Purpose of darts: Darts fold away excess fabric fullness, shaping flat two-dimensional cloth to fit three-dimensional human body curves (bust, hips, waist) [B1 mark].",
          "Step 2: Even basting: Stitches and spaces are equal (approx. 6 mm) on both sides; holds seams firmly under tension during fitting [M1 mark].",
          "Step 3: Uneven basting: Features a long stitch on top (12 mm) and short stitch underneath (3 mm); used for quick tacking along straight lines with little strain [A1 mark]."
        ],
        "keyTakeaway": "Darts shape flat fabric to fit 3D anatomical curves; even basting holds seams under fitting strain."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t11-surface-finishes-maintenance",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Finishing Technologies, Surface Preservation, Corrosion Control and Workshop Maintenance",
    "description": "Wood surface preparation, wood finishes (stains, sealers, polyurethane, French polish), metal corrosion prevention (red oxide, galvanizing, anodizing), and the 5S maintenance system.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=surface-finishing-maintenance",
    "youtubeId": "surface-finishing-maintenance",
    "keyNotes": "• Objectives of Finishing: 1. Aesthetic beautification; 2. Environmental protection against moisture, rot, and corrosion.\n• Wood Surface Preparation:\n  - Scrape dried glue; fill holes; sand strictly along the grain using progressive grits (80 -> 120 -> 240 grit). Sanding across grain severs fibers, causing ugly dark stain scratches.\n• Wood Finishes:\n  - Stains (enhance color without hiding grain); Sanding sealer (seals porous cells); Polyurethane varnish (tough, waterproof, scratch-resistant film for tables/doors); French polish (shellac in methylated spirit for antique mirror gloss).\n• Metal Corrosion Prevention:\n  - Rusting requires Oxygen (air) and Moisture (water) simultaneously.\n  - Barrier protection: Red oxide or zinc chromate primer followed by synthetic gloss enamel paint.\n  - Galvanizing: Hot-dip coating steel with Zinc. Zinc acts as a sacrificial anode, oxidizing preferentially to protect steel cathodically even when scratched.\n  - Anodizing: Electrolytically thickening aluminum oxide ($Al_2O_3$) protective film.\n• Workshop Maintenance & 5S:\n  - Sort (Seiri), Set in order (Seiton: shadow boards), Shine (Seiso), Standardize (Seiketsu), Sustain (Shitsuke).\n  - Wipe bare steel tools with light machine oil after use to prevent flash rusting.",
    "examples": [
      {
        "id": "ex-jhs3ctech-t11-1",
        "title": "Reasons for Finishing and Polyurethane Varnish Application Steps",
        "problem": "(a) State two reasons for applying a surface finish to a wooden coffee table.\n(b) Outline the steps in applying a polyurethane varnish finish.\n(c) Why must sandpaper never be rubbed across the wood grain?",
        "stepByStepSolution": [
          "Step 1: Reasons: Protection against moisture/stains/insects, and aesthetic beautification of wood grain [B1 mark].",
          "Step 2: Application steps: Scrape glue, sand along grain (80->120->240 grit), wipe dust with tack cloth, apply sanding sealer, denib with 320 grit, apply polyurethane topcoats [M1 mark].",
          "Step 3: Cross-grain danger: Sanding across the grain severs longitudinal fibers transversely, leaving microscopic cross-scratches that absorb finish unevenly, appearing as unsightly dark blemishes [A1 mark]."
        ],
        "keyTakeaway": "Always sand along the grain with progressively finer grits; polyurethane provides rugged waterproof protection."
      },
      {
        "id": "ex-jhs3ctech-t11-2",
        "title": "Electrochemical Mechanism of Sacrificial Galvanizing",
        "problem": "Explain the electrochemical mechanism by which Galvanizing (coating steel with Zinc) protects a metal security gate against rusting even when scratched.",
        "stepByStepSolution": [
          "Step 1: Dual protection: Provides both a physical barrier and sacrificial (cathodic) protection [B1 mark].",
          "Step 2: Reactivity contrast: Zinc is more reactive (more negative electrode potential) than Iron in the reactivity series [M1 mark].",
          "Step 3: Sacrificial galvanic action: When scratched, moisture creates a galvanic cell where Zinc oxidizes sacrificially ($Zn \\rightarrow Zn^{2+} + 2e^-$), supplying electrons to the exposed iron cathode to prevent iron oxidation [A1 mark]."
        ],
        "keyTakeaway": "Zinc protects steel sacrificially because it is more reactive and corrodes first, preventing iron oxidation."
      }
    ]
  },
  {
    "id": "jhs3-ctech-t12-costing-budgeting-entrepreneurship",
    "subjectId": "career-tech",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Entrepreneurship, Production Costing, Enterprise Budgeting and Career Pathways in Technology",
    "description": "Entrepreneurial traits, production cost equations (prime cost, factory cost, selling price), operational cash budgeting, marketing mix (4 Ps), and CTVET career pathways.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=entrepreneurship-costing-tech",
    "youtubeId": "entrepreneurship-costing-tech",
    "keyNotes": "• Entrepreneurial Mindset:\n  - Calculated risk-taking, innovativeness, resilience, integrity, identifying market gaps to provide goods/services at a profit.\n• Cost Equations:\n  - Direct Materials: Raw materials directly in the product (timber, fabric, steel).\n  - Direct Labor: Wages paid directly to craftsmen (carpenter, tailor, welder).\n  - Prime Cost = Direct Materials + Direct Labor + Direct Expenses.\n  - Factory Cost = Prime Cost + Factory Overheads (workshop rent, electricity, sandpaper).\n  - Total Production Cost = Factory Cost + Administrative & Selling Overheads.\n  - Selling Price = Total Production Cost + Desired Profit.\n• Enterprise Budgeting:\n  - A cash budget is a financial forecast of estimated income and expenditures over a future period, preventing cash deficits.\n• The Marketing Mix (4 Ps):\n  - Product (quality, design), Price (cost-based, competitive), Place (distribution channels), Promotion (advertising, social media).\n• TVET Pathways in Ghana:\n  - Commission for Technical and Vocational Education and Training (CTVET) oversees qualifications from technical institutes to Technical Universities (BTech/MTech).",
    "examples": [
      {
        "id": "ex-jhs3ctech-t12-1",
        "title": "Calculating Prime Cost, Total Cost, Unit Cost, and Selling Price",
        "problem": "A club produced 20 wooden chairs. Timber: GH₵ 1,200; Hardware/glue: GH₵ 200; Finish/abrasives: GH₵ 180; Carpenter wages: GH₵ 600; Electricity/rent: GH₵ 220.\n(a) Calculate Prime Cost, Total Cost, and Unit Cost.\n(b) With 25% profit margin, calculate the Selling Price of one chair.",
        "stepByStepSolution": [
          "Step 1: Direct Materials = 1,200 + 200 + 180 = GH₵ 1,580. Direct Labor = GH₵ 600. Prime Cost = 1,580 + 600 = GH₵ 2,180 [M1 mark].",
          "Step 2: Total Cost = Prime Cost + Overheads = 2,180 + 220 = GH₵ 2,400 [M1 mark].",
          "Step 3: Unit Cost = GH₵ 2,400 ÷ 20 = GH₵ 120 per chair [A1 mark].",
          "Step 4: Profit per chair = 25% of GH₵ 120 = GH₵ 30. Selling Price = 120 + 30 = GH₵ 150 per chair [M1, A1 marks]."
        ],
        "keyTakeaway": "Prime Cost = Direct Materials + Direct Labor; Unit Cost = Total Cost ÷ Quantity; Selling Price = Unit Cost + Profit."
      },
      {
        "id": "ex-jhs3ctech-t12-2",
        "title": "Applying the 4 Ps of Marketing to a Ghanaian Fashion Boutique",
        "problem": "Explain how a young fashion entrepreneur in Accra can apply the 4 Ps of the Marketing Mix to succeed commercially.",
        "stepByStepSolution": [
          "Step 1: Product: Design well-tailored, stylish garments using quality African wax prints and neat seams [B1 mark].",
          "Step 2: Price: Determine total production costs and price competitively to generate profit while offering value [B1 mark].",
          "Step 3: Place: Set up shop in an accessible commercial area supplemented by an online WhatsApp/Instagram catalog with delivery [M1 mark].",
          "Step 4: Promotion: Run targeted social media ads, offer introductory discounts, and build word-of-mouth referrals [A1 mark]."
        ],
        "keyTakeaway": "Product, Price, Place, and Promotion work together to build a successful technical business."
      }
    ]
  }
];
