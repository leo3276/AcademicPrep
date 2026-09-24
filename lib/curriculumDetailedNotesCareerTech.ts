// Ghanaian JHS 1 Career Technology Detailed Study Notes
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum

import { DetailedNotes } from './types';

export const JHS1_CAREER_TECH_DETAILED_NOTES: Record<string, DetailedNotes> = {
  "jhs1-ct-t1-health-safety": {
    "topicId": "jhs1-ct-t1-health-safety",
    "introduction": "In technical and vocational education, health and safety forms the bedrock of all practical learning. Career Technology workshops in Ghanaian Junior High Schools contain cutting hand tools, machinery, hot implements, and chemical finishes that demand rigorous personal discipline, protective gear, and established hazard control procedures.",
    "realWorldContext": "When artisans work at Suame Magazine in Kumasi or Kokompe in Accra, wearing steel-toed boots, clear goggles, and heavy aprons prevents debilitating workplace injuries, burns, and eye trauma from high-speed debris.",
    "objectives": [
      "Identify common workshop hazards and describe proactive control measures.",
      "Select and demonstrate proper use of Personal Protective Equipment (PPE).",
      "Apply immediate first aid procedures for workshop cuts, thermal burns, and fainting.",
      "Categorize fire outbreaks (Classes A, B, C, D) and deploy appropriate extinguishers."
    ],
    "sections": [
      {
        "title": "1. Common Workshop Hazards and Prevention",
        "content": "A hazard is any situation or substance with the potential to cause injury, damage, or harm to people or property:",
        "bulletPoints": [
          "Physical Hazards: Sharp off-cuts of sheet metal or timber on walkways, unguarded revolving machine spindles, and slippery wet floor surfaces.",
          "Chemical Hazards: Organic solvents (turpentine, thinner, lacquer, contact adhesive) releasing toxic, flammable fumes requiring ventilation.",
          "Electrical Hazards: Overloaded wall sockets, frayed extension cords, and wet hands operating power tools.",
          "Ergonomic Hazards: Poor lifting posture when hauling timber planks causing chronic lumbar spinal injuries."
        ],
        "keyTakeaway": "Good housekeeping—keeping walkways clear, tools racked, and spills mopped immediately—prevents over 80% of workshop accidents.",
        "realWorldExample": "Wiping up spilled machine oil immediately with sawdust prevents a peer from slipping into an active band saw."
      },
      {
        "title": "2. Personal Protective Equipment (PPE)",
        "content": "PPE provides a vital physical barrier between the artisan and workshop dangers:",
        "bulletPoints": [
          "Safety Goggles / Face Shield: Polycarbonate eye shielding protecting against high-speed sawdust, flying metal chips, and acid splashes.",
          "Dust Mask / Respirator: Filters fine hardwood dust (like Odum dust which irritates mucus membranes) and spray paint aerosols.",
          "Leather Workshop Apron / Overall: Thick flame-resistant duck canvas or leather protecting skin and clothing from snags and hot slag.",
          "Steel-Toe Boots: Hardened steel cap protecting toes from heavy dropped lumber, anvils, or vice castings."
        ],
        "keyTakeaway": "Never wear neckties, loose flowing clothing, dangling wristwatches, or open-toed sandals in any technical workshop.",
        "realWorldExample": "Wearing a dust mask while sanding unseasoned Wawa wood prevents persistent occupational asthma."
      },
      {
        "title": "3. Fire Safety and Extinguishers",
        "content": "Understanding the fire triangle (Heat, Fuel, Oxygen) enables correct extinguisher deployment:",
        "bulletPoints": [
          "Class A Fires (Solids): Wood, paper, rags, and cardboard. Extinguish with Water or AFFF Foam.",
          "Class B Fires (Flammable Liquids): Petrol, kerosene, varnish, thinners, and paints. Extinguish with Foam, CO2, or Dry Chemical Powder (NEVER water).",
          "Class C Fires (Flammable Gases): Butane, LPG gas cylinders. Extinguish with Dry Chemical Powder after shutting supply valve.",
          "Electrical Fires: Faulty switches or short-circuited motors. De-energize circuit breaker, then extinguish using Carbon Dioxide (CO2) or Dry Powder."
        ],
        "keyTakeaway": "Applying water to burning paint thinner spreads the floating, flaming liquid across the floor, escalating the disaster.",
        "realWorldExample": "Deploying a CO2 extinguisher on a short-circuited motor prevents electrical shock while smothering flames."
      }
    ],
    "commonMistakes": [
      "Using water on liquid chemical or electrical fires.",
      "Wearing sandals or unbuttoned loose shirts near revolving drill presses.",
      "Failing to report a frayed electrical cord or dull, cracked chisel blade."
    ],
    "beceExamTips": [
      "In BECE Section B, memorize the 4 fire classes and their matching extinguisher types.",
      "Remember the golden rule of burns: flush with cold running water for 10-15 minutes; do not apply butter or petroleum jelly."
    ],
    "summaryChecklist": [
      "I can identify physical, chemical, and electrical workshop hazards.",
      "I know the exact PPE required for eye, lung, and foot protection.",
      "I can classify fires and select the correct extinguisher."
    ]
  },
  "jhs1-ct-t2-materials-wood": {
    "topicId": "jhs1-ct-t2-materials-wood",
    "introduction": "Wood is one of Ghana's most valuable renewable natural resources. Understanding timber anatomy, the distinction between hardwoods and softwoods, timber conversion methods, and the seasoning process allows designers to select the right wood species for durable building and furniture projects.",
    "realWorldContext": "Ghanaian master carpenters at Timber Market in Accra choose dense Odum (Iroko) for heavy external doorframes and church pews because of its natural rot resistance, while light Wawa is preferred for classroom chalkboard backings and ceiling battens.",
    "objectives": [
      "Classify timber into hardwoods and softwoods with specific Ghanaian examples.",
      "Identify the anatomical cross-section features of a tree trunk (pith, heartwood, sapwood, cambium, bark).",
      "Explain the principles and merits of plain sawing versus quarter sawing.",
      "Distinguish between natural air seasoning and artificial kiln seasoning."
    ],
    "sections": [
      {
        "title": "1. Hardwoods versus Softwoods",
        "content": "The botanical distinction between hardwoods and softwoods is based on tree reproduction and cell anatomy:",
        "bulletPoints": [
          "Hardwoods (Angiosperms): Broad-leaved trees producing covered seeds within a fruit or nut. Broad cellular pores (vessels) provide high density and strength. Examples in Ghana: Odum (Milicia excelsa), Mahogany (Khaya senegalensis), Wawa, Sapele, Teak, Asanfina, Dahoma.",
          "Softwoods (Gymnosperms): Needle-leaved evergreen conifers producing naked seeds in cones. Non-porous tracheid cellular structure. Examples: Pine, Cedar, Spruce, Fir (largely imported into Ghana for packaging and crate work).",
          "Note: 'Hardness' is botanical, not purely physical; balsa is technically a botanical hardwood despite being feather-light."
        ],
        "keyTakeaway": "Hardwoods have broad leaves and covered seeds with vessels; softwoods have needles and cones with tracheids.",
        "realWorldExample": "Choosing mahogany for a high-end dining table provides rich reddish grain that polishes to an exquisite deep luster."
      },
      {
        "title": "2. Cross-Section Anatomy of a Tree Trunk",
        "content": "A radial cut across a mature timber log reveals distinct concentric biological zones:",
        "bulletPoints": [
          "Pith (Medulla): The soft, spongy primary tissue at the exact center of the trunk.",
          "Heartwood: The dead, inactive central timber cylinder. Pores are plugged with gums, tannins, and resins, making it dark, dense, strong, and highly resistant to termites and fungal decay.",
          "Sapwood: The outer living ring that carries moisture and mineral sap up to the crown. Lighter in color, vulnerable to wood-borer attack.",
          "Cambium Layer: The microscopic living layer between sapwood and inner bark where new cells divide annually.",
          "Bark (Inner and Outer): Shields the tree trunk from physical abrasion, wild bushfires, and insect attacks.",
          "Annual Rings: Concentric rings recording seasonal growth (one light early-wood ring + one dark late-wood ring = one year)."
        ],
        "keyTakeaway": "Only seasoned heartwood should be used for permanent structural furniture, as sapwood attracts beetles and rots quickly.",
        "realWorldExample": "Observing 25 distinct rings on a felled teak log confirms the tree grew for a quarter of a century."
      },
      {
        "title": "3. Timber Conversion and Seasoning",
        "content": "Logs felled in the forest must be mechanically sawed into commercial lumber and properly dried:",
        "bulletPoints": [
          "Conversion Methods:",
          "  - Plain / Through-and-Through Sawing: Parallel longitudinal cuts through the log. Cheapest, quickest, least waste, but boards warp easily.",
          "  - Quarter Sawing: Log divided into four quarters, then sliced radially. Produces decorative figure, minimal shrinkage across width, but produces more sawdust waste.",
          "Seasoning (Drying Wood):",
          "  - Air Seasoning: Stacking planks horizontally with spacer sticks (stickers) in ventilated outdoor sheds. Takes 6–12 months. Economical but slow.",
          "  - Kiln Seasoning: Drying timber inside an insulated heated oven with steam injection. Takes 2–3 weeks, kills insects, achieves exact target moisture (10–12%)."
        ],
        "keyTakeaway": "Unseasoned 'green' timber shrinks, cups, bows, and checks as it loses moisture, ruining completed furniture joints.",
        "realWorldExample": "Stacking planks with 25 mm stickers allows tropical breezes to circulate evenly across all board faces during air seasoning."
      }
    ],
    "commonMistakes": [
      "Assuming all hardwoods are physically hard and all softwoods are soft (e.g. balsa is a botanical hardwood).",
      "Using green, wet timber for table tops, which inevitably causes shrinkage splits within months."
    ],
    "beceExamTips": [
      "Be prepared to sketch and label the tree cross-section (pith, heartwood, sapwood, cambium, bark, annual rings).",
      "List at least four indigenous Ghanaian hardwood species: Odum, Mahogany, Wawa, Sapele."
    ],
    "summaryChecklist": [
      "I know the botanical differences between hardwoods and softwoods.",
      "I can draw and label the 6 parts of a tree trunk cross-section.",
      "I can compare plain sawing with quarter sawing.",
      "I understand the necessity of seasoning timber before use."
    ]
  },
  "jhs1-ct-t3-materials-metals": {
    "topicId": "jhs1-ct-t3-materials-metals",
    "introduction": "Metals and their alloys form the backbone of modern engineering, construction, transportation, and industrial fabrication. In Career Technology, students study ferrous metals containing iron, non-ferrous metals, and strategic alloys that provide superior mechanical properties like tensile strength, ductility, and corrosion resistance.",
    "realWorldContext": "Ghanaian metal fabricators build burglar-proof security grilles, gates, and school canopies using mild steel hollow sections, while electrical contractors install high-purity copper conductors for reliable electrification.",
    "objectives": [
      "Distinguish between ferrous and non-ferrous metals with practical examples.",
      "Explain the composition, properties, and applications of common engineering alloys (brass, bronze, solder, stainless steel).",
      "Define key mechanical properties of metals: ductility, malleability, hardness, and tensile strength.",
      "Identify oxidation (rusting) processes in ferrous metals and state anti-corrosion methods."
    ],
    "sections": [
      {
        "title": "1. Ferrous vs Non-Ferrous Metals",
        "content": "The primary classification of metals depends on the presence of iron (Fe):",
        "bulletPoints": [
          "Ferrous Metals (Contain Iron):",
          "  - Strongly magnetic, prone to rust when exposed to moist air.",
          "  - Mild Steel (0.15%–0.30% Carbon): Ductile, malleable, easily welded. Used for structural steel rods, car bodies, gates.",
          "  - High Carbon Steel (0.60%–1.50% Carbon): Extremely hard, wear-resistant, can be heat-treated. Used for chisels, files, hacksaw blades.",
          "  - Cast Iron (2.0%–4.0% Carbon): Brittle, high compressive strength, absorbs machine vibration. Used for vice bodies, engine blocks.",
          "Non-Ferrous Metals (Contain NO Iron):",
          "  - Non-magnetic, naturally resist atmospheric rusting, high electrical and thermal conductivity.",
          "  - Aluminum: Light, silvery, highly malleable, food-safe. Used for cooking pots, airplane skins, window frames.",
          "  - Copper: Reddish, unmatched electrical and thermal conductor, ductile. Used for electric wiring, refrigeration tubes.",
          "  - Zinc: Bluish-white metal used for galvanizing steel roofing sheets."
        ],
        "keyTakeaway": "Ferrous metals contain iron and rust; non-ferrous metals contain no iron and resist rusting."
      },
      {
        "title": "2. Common Engineering Alloys",
        "content": "An alloy is a homogeneous mixture formed by melting two or more metals (or a metal and non-metal) together to achieve superior properties:",
        "bulletPoints": [
          "Brass: Copper (65%) + Zinc (35%). Golden appearance, acoustic resonance, corrosion-resistant. Used for plumbing valves, door locks, trumpet musical instruments.",
          "Bronze: Copper (90%) + Tin (10%). Hard, wear-resistant, resists saltwater corrosion. Used for ship propellers, commemorative medals, bearing bushes.",
          "Stainless Steel: Iron + Chromium (18%) + Nickel (8%) + Carbon (0.1%). Forms an invisible self-healing chromium oxide film that completely prevents rusting. Used for surgical scalpels, kitchen sinks, cutlery.",
          "Solder: Tin (60%) + Lead (40%). Low melting point (~185°C). Used for joining electrical wire connections."
        ],
        "keyTakeaway": "Alloys combine constituent metals to create materials that are harder, tougher, or more corrosion-resistant than the pure parent metals."
      },
      {
        "title": "3. Mechanical Properties of Metals",
        "content": "Engineers select metals based on their specific response to physical forces:",
        "bulletPoints": [
          "Ductility: The ability of a metal to be drawn out into thin, flexible wires under tensile pull without rupturing (e.g. Copper).",
          "Malleability: The ability of a metal to be beaten, hammered, or rolled into thin sheets under compressive impact without cracking (e.g. Aluminum, Gold).",
          "Hardness: The ability of a material's surface to resist scratching, abrasion, indentation, and wear.",
          "Tensile Strength: The maximum resistance of a metal to being pulled apart by opposing axial tension loads.",
          "Brittleness: The tendency of a material to fracture abruptly with negligible deformation when subjected to sudden shock (e.g. Cast Iron)."
        ],
        "keyTakeaway": "Ductility relates to pulling into wires; malleability relates to hammering into sheets."
      }
    ],
    "commonMistakes": [
      "Confusing Brass (Copper + Zinc) with Bronze (Copper + Tin).",
      "Assuming stainless steel is a non-ferrous metal (it is predominantly iron alloyed with chromium).",
      "Using the terms 'ductile' and 'malleable' interchangeably."
    ],
    "beceExamTips": [
      "Always state the exact percentage composition of Brass and Bronze for BECE theory questions.",
      "Remember that iron requires BOTH oxygen and water (moisture) to form hydrated iron(III) oxide (rust)."
    ],
    "summaryChecklist": [
      "I can classify metals into ferrous and non-ferrous.",
      "I know the constituent metals of Brass, Bronze, and Stainless Steel.",
      "I can accurately define ductility, malleability, hardness, and tensile strength."
    ]
  },
  "jhs1-ct-t4-materials-plastics": {
    "topicId": "jhs1-ct-t4-materials-plastics",
    "introduction": "Modern manufacturing relies heavily on synthetic polymers (plastics) and inorganic ceramics. Understanding how thermoplastics differ chemically and thermally from thermosetting plastics empowers students to design useful products while addressing pressing plastic pollution challenges in Ghana.",
    "realWorldContext": "In Ghanaian urban centers, water sachet sleeves (polythene) and takeaway packs (polystyrene) pose environmental threats, while durable Bakelite plug tops and traditional ceramic 'asanka' grinding bowls remain indispensable kitchen fixtures.",
    "objectives": [
      "Classify plastics into thermoplastics and thermosets with everyday examples.",
      "Explain the chemical basis of plastic behavior when heated (linear chains vs cross-linked network).",
      "Discuss environmental impacts of plastic waste in Ghana and practical solutions (Reduce, Reuse, Recycle).",
      "Describe the properties and applications of traditional and modern ceramics."
    ],
    "sections": [
      {
        "title": "1. Thermoplastics vs Thermosetting Plastics",
        "content": "Plastics are synthetic organic polymers grouped by their thermal behavior:",
        "bulletPoints": [
          "Thermoplastics (Thermo-softening):",
          "  - Composed of long, flexible linear polymer chains held together by weak secondary bonds.",
          "  - Soften when heated, can be remolded into new shapes, and solidify when cooled repeatedly. 100% recyclable.",
          "  - Examples: Polyethylene / Polythene (pure water sachets, washbasins), Polyvinyl Chloride / PVC (plumbing pipes, electric conduit), Acrylic / Perspex (motorcycle windshields, display signs), Polystyrene (insulating cooler boxes, packaging peanuts).",
          "Thermosetting Plastics (Thermosets):",
          "  - Undergo chemical cross-linking during initial molding, creating rigid 3D polymer networks.",
          "  - Do NOT melt on reheating; prolonged extreme heat causes burning and charring. CANNOT be reshaped or remelted.",
          "  - Examples: Bakelite / Phenolic resin (cookware handles, electric switch bodies), Melamine (scratch-resistant dinner plates, laminate tabletops), Epoxy resin (heavy-duty structural glue)."
        ],
        "keyTakeaway": "Thermoplastics melt on heating and can be recycled; thermosets decompose on heating and cannot be reshaped."
      },
      {
        "title": "2. Environmental Impact and the 3 R's in Ghana",
        "content": "Plastics are non-biodegradable, persisting in the environment for centuries if improperly disposed of:",
        "bulletPoints": [
          "Problems in Ghana: Clogging stormwater drains causing catastrophic perennial floods in Accra (e.g. Odaw river basin), choking marine and livestock life, air pollution from open burning.",
          "Reduce: Minimize consumption of single-use plastic carrier bags; adopt durable woven jute or cotton shopping bags.",
          "Reuse: Repurpose sturdy plastic containers and gallons for water storage, flower pots, or workshop hardware bins.",
          "Recycle: Segregate clean plastic containers at source and deliver them to local recycling plants to be melted into pellets for new buckets, chairs, and paving tiles."
        ],
        "keyTakeaway": "Source segregation and industrial recycling convert plastic waste into productive economic building materials."
      },
      {
        "title": "3. Ceramics and Clay Products",
        "content": "Ceramics are inorganic, non-metallic materials formed from earthen minerals and fired at high temperatures:",
        "bulletPoints": [
          "Properties: High compressive strength, excellent heat resistance, electrical insulation, chemically inert, but highly brittle (shatter under tensile shock).",
          "Traditional Ghanaian Ceramics: Earthenware cooking pots, water cooling pots, grinding bowls ('asanka' / 'apotoyewa') made from local weathered clay and fired in wood kilns.",
          "Modern Ceramics: Porcelain floor and wall tiles, sanitary ware (WC bowls, sinks), porcelain electrical spark-plug insulators, fired clay building bricks."
        ],
        "keyTakeaway": "High-temperature kiln firing causes vitrification, permanently hardening clay into durable ceramic."
      }
    ],
    "commonMistakes": [
      "Assuming Bakelite saucepan handles can be melted and re-poured into new molds.",
      "Believing that all plastic containers are safe for hot food in microwave ovens."
    ],
    "beceExamTips": [
      "In BECE, remember: Bakelite and Melamine = Thermosetting; PVC and Polythene = Thermoplastic.",
      "State at least three environmental dangers of plastic waste in Ghana."
    ],
    "summaryChecklist": [
      "I can explain why thermoplastics can be remelted whereas thermosets cannot.",
      "I know the 3 R's of plastic waste management.",
      "I understand how clay is transformed into ceramic through kiln firing."
    ]
  },
  "jhs1-ct-t5-measuring-marking": {
    "topicId": "jhs1-ct-t5-measuring-marking",
    "introduction": "Accurate measurement and precise marking out are the non-negotiable foundations of all craftwork. Without exact dimensional transfer, timber components will not fit together, metal joints will misalign, and materials will be wasted. Mastering standard measuring, testing, and marking instruments ensures precision craftsmanship.",
    "realWorldContext": "A joiner manufacturing school desks in Koforidua uses a marking gauge to scribe consistent mortise depths across 40 identical table legs, guaranteeing uniform height and stable joinery.",
    "objectives": [
      "Demonstrate the correct use of linear measuring tools (steel rule, retractable tape measure, calipers).",
      "Use testing tools (try square, sliding bevel, spirit level) to verify perpendicularity and flatness.",
      "Differentiate between a marking gauge and a mortise gauge.",
      "Select and use metal marking tools (scriber, center punch) safely."
    ],
    "sections": [
      {
        "title": "1. Linear Measuring Tools",
        "content": "Measuring tools establish exact metric lengths, widths, and thicknesses:",
        "bulletPoints": [
          "Steel Rule: Tempered stainless steel rule graduated in millimeters and centimeters. Used for measuring short lengths, setting marking gauges, and checking surface flatness using its straight edge.",
          "Retractable Steel Tape Measure: Flexible curved steel tape fitted with a self-adjusting sliding hook end to compensate for blade thickness during inside and outside measurements. Used for measuring long boards and room layouts.",
          "Calipers: Transfer tools with curved legs. Internal calipers measure inside bore diameters; external calipers measure external round rod diameters against a steel rule."
        ],
        "keyTakeaway": "Always align your line of sight directly perpendicular (90°) to the rule graduations to eliminate parallax measurement error."
      },
      {
        "title": "2. Testing and Angle Tools",
        "content": "Testing tools ensure edges and surfaces are true and square:",
        "bulletPoints": [
          "Try Square: Consists of a thick wood/cast-iron stock and a thin steel blade joined at an exact 90° angle. Used for testing face edges for squareness to the face side and scribing perpendicular lines across timber.",
          "Sliding Bevel: Features an adjustable blade locked by a thumbscrew. Used for copying, laying out, and testing any non-90° angle (e.g. roof rafter pitches).",
          "Mitre Square: Fixed at 45° and 135° for laying out picture frame joints.",
          "Spirit Level: Employs slightly curved vials filled with alcohol and a floating air bubble to establish perfectly level horizontal and plumb vertical planes."
        ],
        "keyTakeaway": "Always reference the try square stock firmly against the established face side or face edge."
      },
      {
        "title": "3. Marking-Out Tools in Wood and Metal",
        "content": "Marking tools create physical guidelines for cutting tools to follow:",
        "bulletPoints": [
          "Marking Knife: Slices cleanly across wood grain fibers, creating a knife wall that guides the saw and prevents grain splintering.",
          "Marking Gauge: Has a single spur pin on a stem with a sliding fence; scribes lines parallel to a planed timber edge.",
          "Mortise Gauge: Has two spurs (one fixed, one adjustable via a brass slide screw); scribes both sides of a mortise or tenon simultaneously.",
          "Scriber: Hardened high-carbon steel tool that scratches fine, crisp lines onto sheet metal where pencil marks would easily rub off.",
          "Center Punch: Hardened steel punch with a 90° point struck by a ball-peen hammer to indent metal, centering drill bits."
        ],
        "keyTakeaway": "Never use a pencil to mark mortises; use a mortise gauge to ensure both parallel cheeks match the chisel width exactly."
      }
    ],
    "commonMistakes": [
      "Reading steel rule graduations at an angle (parallax error).",
      "Using a center punch on wood instead of metal.",
      "Failing to hold the try square stock tightly against the true face side."
    ],
    "beceExamTips": [
      "Diagram questions often show a mortise gauge: note the thumb slide screw used to adjust distance between the two spur pins.",
      "Remember the center punch has a 90° point; a prick punch has a 30° point for dot marking."
    ],
    "summaryChecklist": [
      "I know how to read a steel rule without parallax error.",
      "I can test edge squareness using a try square.",
      "I understand the difference between a marking gauge (one pin) and a mortise gauge (two pins)."
    ]
  },
  "jhs1-ct-t6-cutting-shaping": {
    "topicId": "jhs1-ct-t6-cutting-shaping",
    "introduction": "Shaping raw materials into functional components requires specialized cutting, planing, chiseling, and abrading tools. Knowing how each tool operates, its tooth geometry, cutting strokes, and safe handling ensures clean cuts and prevents workshop accidents.",
    "realWorldContext": "When building a solid paneled door, a Ghanaian carpenter uses a rip saw to split long timber boards along the grain, a jack plane to true the edges, a tenon saw to cut rail tenons, and a firmer chisel to pare mortise joints cleanly.",
    "objectives": [
      "Identify various woodworking saws (rip saw, crosscut saw, tenon saw, coping saw) and their specific cutting directions.",
      "Explain the structure, adjustments, and uses of bench planes (jack plane, smoothing plane).",
      "Describe the safe use of woodworking chisels and metal cold chisels.",
      "Select appropriate files and rasps for smoothing curved and flat surfaces."
    ],
    "sections": [
      {
        "title": "1. Woodworking Saws and Metal Saws",
        "content": "Saw selection depends on grain orientation, depth, and cut curvature:",
        "bulletPoints": [
          "Rip Saw (24–28 inches, 4–6 tpi): Teeth shaped like small chisels angled forward; designed specifically to cut parallel along the wood grain.",
          "Crosscut Saw (20–24 inches, 6–8 tpi): Triangular teeth sharpened with knife edges to sever wood grain fibers across cleanly.",
          "Tenon Saw (10–14 inches, 10–14 tpi): Stiffened with a heavy brass or steel spine along the top; produces fine, straight, splinter-free cuts for joinery.",
          "Coping Saw: Thin flexible blade held under tension in a deep C-frame; cuts intricate curves, circles, and fretwork in thin wood and plastics.",
          "Hacksaw: Heavy-duty adjustable frame for holding high-speed steel (HSS) blades to cut metal. Teeth point forward and cut only on the forward push stroke."
        ],
        "keyTakeaway": "Never force a saw; allow the weight of the saw and correct rhythmic stroke to execute the cut smoothly."
      },
      {
        "title": "2. Bench Planes for Wood",
        "content": "Bench planes shave fine wood curls to level, size, and smooth timber surfaces:",
        "bulletPoints": [
          "Jack Plane (350–380 mm): General workhorse plane used first to remove rough mill saw marks and reduce timber to rough dimensions.",
          "Smoothing Plane (200–250 mm): Short compact plane used for final finishing, leaving timber silky smooth without needing heavy sanding.",
          "Trying / Jointer Plane (450–600 mm): Long plane sole bridges low spots, truing edges of long boards for edge-to-edge glue joints.",
          "Plane Adjustments: Depth adjustment nut controls blade projection; lateral adjustment lever squares the cutting iron with the sole."
        ],
        "keyTakeaway": "Always rest a plane on its side when on the workbench to protect the razor-sharp cutting iron from nicks."
      },
      {
        "title": "3. Chisels, Rasps, and Files",
        "content": "Chisels and abrading tools carve recesses and refine profiles:",
        "bulletPoints": [
          "Firmer Chisel: Robust square-edged blade for general trenching and mortising.",
          "Bevel-Edged Chisel: Slanted side edges allow the blade to reach into sharp acute corners of dovetail joints without bruising wood.",
          "Mortise Chisel: Exceptionally thick, stiff blade designed to withstand heavy blows from a wooden mallet when chopping deep mortises.",
          "Cold Chisel: Forged octagonal high-carbon steel tool with a 60° cutting bevel for cutting cold sheet metal, rods, and masonry.",
          "Wood Rasp: Coarse individual raised teeth that rapidly remove material when shaping curved cabriole legs.",
          "Metal Files (Hand, Flat, Half-Round, Triangular): Smooth metal surfaces. Always ensure a tight wooden or plastic handle is fitted onto the tang."
        ],
        "keyTakeaway": "Never strike a wooden chisel handle with a steel hammer; always use a wooden mallet."
      }
    ],
    "commonMistakes": [
      "Using a file without a handle (the sharp bare tang can puncture the palm upon accidental slippage).",
      "Using a rip saw across the grain, which tears and splinters the wood fibers.",
      "Placing a bench plane flat down on its cutting iron on an abrasive workbench."
    ],
    "beceExamTips": [
      "Identify saws by their teeth: chisel-like teeth = rip saw; knife-like triangular teeth = crosscut saw; reinforced spine = tenon saw.",
      "Remember that cold chisels cut cold metal and require a ball-peen hammer; wood chisels require a wooden mallet."
    ],
    "summaryChecklist": [
      "I can choose the right saw for ripping, crosscutting, and joinery.",
      "I know the functions of the jack plane and smoothing plane.",
      "I know why files must always be operated with securely fitted handles."
    ]
  },
  "jhs1-ct-t7-joining-temporary": {
    "topicId": "jhs1-ct-t7-joining-temporary",
    "introduction": "Mechanical fasteners enable technical components to be assembled into functional structures. Temporary and semi-permanent fasteners allow products to be easily dismantled for servicing, repair, flat-pack transportation, and modular reconfiguration without destroying the underlying components.",
    "realWorldContext": "School dual desks across Ghana are assembled using bolts, nuts, and wood screws so loose parts can be tightened periodically and damaged wooden desk tops can be replaced without discarding the steel frame.",
    "objectives": [
      "Distinguish between temporary and permanent fasteners.",
      "Identify standard screw head shapes, drive types, and explain the pilot hole drilling sequence.",
      "Categorize common nail types (wire nails, oval brads, panel pins) and explain skew nailing.",
      "Explain the functions of bolts, nuts, plain washers, and spring washers."
    ],
    "sections": [
      {
        "title": "1. Wood Screws and Driving Technique",
        "content": "Wood screws provide high tensile holding power through threaded engagement with timber fibers:",
        "bulletPoints": [
          "Head Types:",
          "  - Countersunk (CSK): Beveled underside sits flush with or below the timber surface for smooth cabinet faces.",
          "  - Round Head: Flat underside and domed top; holds thin metal brackets or hardware plates to wood.",
          "  - Raised Head: Combines countersunk seating with a decorative dome top.",
          "Drive Slots: Traditional slotted (flat blade), Phillips cross-slot, and Pozidriv (reduces driver cam-out slippage).",
          "Pilot Hole Sequence:",
          "  1. Countersink recess: Matches screw head angle so head finishes flush.",
          "  2. Clearance hole: Drilled through the upper piece equal to the unthreaded shank diameter.",
          "  3. Pilot / Core hole: Drilled into the bottom piece equal to the threaded root core, preventing wood splitting."
        ],
        "keyTakeaway": "Drilling clearance and pilot holes ensures maximum clamping pull without splitting hardwoods."
      },
      {
        "title": "2. Nails and Nailing Techniques",
        "content": "Nails provide rapid, cost-effective semi-permanent fastening:",
        "bulletPoints": [
          "Common Wire Nails: Round shank with large flat head; used for heavy structural framing, rafters, and timber crates.",
          "Oval Brads / Lost Head Nails: Oval cross-section aligned with wood grain to prevent splitting; small head punched below surface and filled with putty.",
          "Panel Pins: Thin wire nails used for fixing plywood backs to wardrobes and tacking small moldings.",
          "Clout Nails: Short, thick shank with extra-large flat head for securing roofing felt, corrugated zinc, and wire netting.",
          "Skew / Dovetail Nailing: Driving alternate nails at opposing 70° angles creates an interlocking wedge with superior withdrawal resistance."
        ],
        "keyTakeaway": "Skew nailing drives nails at opposing angles, dramatically increasing joint pull-out resistance."
      },
      {
        "title": "3. Bolts, Nuts, and Washers",
        "content": "Threaded machine fasteners for high-load structural assemblies:",
        "bulletPoints": [
          "Hexagonal Bolt and Nut: Clamps heavy timber beams or steel brackets; tightened with matching open-ended, ring, or socket spanners.",
          "Coach / Carriage Bolt: Features a smooth rounded dome head with a square collar underneath that locks into wood to prevent spinning during nut tightening.",
          "Plain Flat Washer: Spreads clamping force over a broader surface area, preventing the nut from crushing soft wood fibers.",
          "Spring Washer: Split helical spring that maintains constant tension against the nut, preventing vibration loosening."
        ],
        "keyTakeaway": "Washers distribute clamping load and prevent bolt assemblies from loosening under machinery vibration."
      }
    ],
    "commonMistakes": [
      "Driving wood screws with a hammer (this strips the timber fibers and destroys holding power).",
      "Using the wrong size screwdriver blade, which strips and damages screw head slots.",
      "Omitting pilot holes in dense hardwoods like Odum, causing the board to split."
    ],
    "beceExamTips": [
      "In BECE, explain the 3-step hole drilling procedure for countersunk screws (countersink, clearance hole, pilot hole).",
      "State the primary function of a washer: load distribution and vibration lock."
    ],
    "summaryChecklist": [
      "I know the difference between countersunk and round head screws.",
      "I can explain why skew nailing increases joint strength.",
      "I understand the roles of plain and spring washers."
    ]
  },
  "jhs1-ct-t8-joining-permanent": {
    "topicId": "jhs1-ct-t8-joining-permanent",
    "introduction": "Permanent joints unite materials into unified, rigid, long-lasting structures. Unlike temporary fasteners, permanent woodworking joints, modern chemical adhesives, and metallurgical soft soldering create bonds that cannot be disassembled without fracturing the joined components.",
    "realWorldContext": "Traditional Ashanti royal stools and durable dining chairs rely on mortise-and-tenon joints secured with PVA glue, maintaining structural integrity across decades of heavy use.",
    "objectives": [
      "Identify common woodworking joints (butt, lap, housing, mortise and tenon) and their appropriate applications.",
      "Explain the properties and application procedures for PVA wood glue, contact adhesive, and epoxy resin.",
      "Demonstrate the correct use of G-clamps and sash clamps during glue curing.",
      "Describe the fundamentals of soft soldering for electrical and sheet metal joints."
    ],
    "sections": [
      {
        "title": "1. Woodworking Frame and Carcass Joints",
        "content": "Wood joints interlock components to resist shear, tensile, and racking forces:",
        "bulletPoints": [
          "Butt Joint: Ends of two boards meet squarely at 90°. Weakest joint because glue on porous end-grain has poor adhesion; requires nail or dowel reinforcement.",
          "Halving / Lap Joint: Half the thickness of each overlapping member is removed so joined surfaces sit flush. Used in picture frames and window screens.",
          "Housing Joint (Trench Joint): A groove cut across the grain of an upright panel to receive the end of a shelf. Provides direct mechanical bearing support for bookshelves.",
          "Mortise and Tenon Joint: Strongest frame joint. The tenon (tongue) fits into the mortise (cavity) tightly. Used in chair legs, table aprons, and exterior doors.",
          "Dowel Joint: Precision wooden dowel pegs inserted into matching blind holes. Modern, efficient alternative to mortise and tenon."
        ],
        "keyTakeaway": "End-grain wood absorbs glue like a sponge; strong joints must maximize long-grain to long-grain glue contact."
      },
      {
        "title": "2. Adhesives and Clamping",
        "content": "Modern synthetic adhesives create molecular bonds stronger than natural wood fibers:",
        "bulletPoints": [
          "Polyvinyl Acetate (PVA / White Wood Glue): Water-based emulsion. Non-toxic, dries clear, forms ultra-strong bonds on porous wood. Requires 2–6 hours of clamp pressure.",
          "Contact Adhesive: Synthetic rubber in solvent. Spread on BOTH surfaces, allowed to dry tacky (10–15 min), and bonded instantly upon contact. Used for Formica laminates.",
          "Epoxy Resin: Two-component system (resin + hardener). Waterproof, gap-filling, bonds dissimilar materials (metal to wood, glass, ceramics).",
          "Clamping Tools: G-Clamps for small assemblies; Sash Clamps (long T-bars) for pulling wide doorframes and table carcasses tight while glue cures."
        ],
        "keyTakeaway": "Clamp pressure forces out air bubbles and holds wood surfaces in intimate microscopic contact until the glue matrix solidifies."
      },
      {
        "title": "3. Soft Soldering Basics",
        "content": "Joining thin metals using a molten filler alloy:",
        "bulletPoints": [
          "Process: Heating copper or brass joint with a soldering iron and applying tin-lead or lead-free solder wire.",
          "Role of Flux: Chemical paste (zinc chloride or resin) that cleans metallic oxides off hot copper surfaces, allowing molten solder to 'wet' and flow into the joint.",
          "Applications: Sealing copper water pipes, electronic circuit boards, and galvanized tinplate cans."
        ],
        "keyTakeaway": "Soldering joins metals below 450°C without melting the parent metal; flux is essential to eliminate oxides."
      }
    ],
    "commonMistakes": [
      "Applying PVA glue to only one surface and failing to clamp under steady pressure.",
      "Attempting to re-position Formica after touching surfaces coated with contact adhesive (it bonds permanently on contact).",
      "Soldering dirty, oxidized copper wires without using flux."
    ],
    "beceExamTips": [
      "Be ready to sketch and label a mortise and tenon joint (identify tenon, mortise, shoulder, and cheek).",
      "Name the clamp used for wide frames: Sash Clamp."
    ],
    "summaryChecklist": [
      "I can sketch butt, lap, housing, and mortise-and-tenon joints.",
      "I know when to use PVA glue, contact adhesive, and epoxy resin.",
      "I understand the function of flux in soldering."
    ]
  },
  "jhs1-ct-t9-finishing": {
    "topicId": "jhs1-ct-t9-finishing",
    "introduction": "Surface finishing is the critical final stage of craftsmanship. Applying protective and decorative coatings seals porous timber, preserves metal against moisture and oxygen, prevents insect infestation, and elevates the aesthetic and commercial value of artifacts.",
    "realWorldContext": "Furniture showrooms in Kumasi and Accra command high prices for polished dining sets because artisans meticulously sand surfaces through successive abrasive grits and apply polyurethane varnish for a mirror-like water-resistant finish.",
    "objectives": [
      "Explain the reasons for applying finishes to wood, metal, and plastic.",
      "Demonstrate thorough surface preparation and correct sanding grit progression.",
      "Distinguish between wood stains, sanding sealer, varnish, and lacquer.",
      "Describe anti-corrosive primer systems for metal preservation."
    ],
    "sections": [
      {
        "title": "1. Reasons for Surface Finishing",
        "content": "Finishing transforms raw materials into durable, beautiful finished products:",
        "bulletPoints": [
          "Preservation & Protection: Shields wood from humidity changes (swelling/shrinking), wood-boring beetles, and fungal rot. Protects metal from rust.",
          "Decoration & Aesthetics: Highlights natural grain patterns (flame, ray figures) and imparts rich colors and gloss.",
          "Sanitation & Hygiene: Seals porous surfaces, making tables, school desks, and kitchen counters washable and resistant to staining."
        ],
        "keyTakeaway": "Unfinished wood absorbs atmospheric moisture, leading to warping, fungal staining, and premature joint failure."
      },
      {
        "title": "2. Surface Preparation on Wood",
        "content": "Over 90% of a finish's quality depends on thorough surface preparation before applying any coating:",
        "bulletPoints": [
          "Fill Defects: Press matching wood filler into all nail holes, cracks, and gouges; allow to dry and sand flush.",
          "Remove Glue: Scrape away dried glue beads completely (glue blocks stain penetration, creating unsightly white blemishes).",
          "Sanding Technique: Always wrap abrasive paper around a cork or wood block and sand strictly PARALLEL to the grain direction.",
          "Grit Progression: Coarse (80–100 grit) to remove machining marks -> Medium (120–150 grit) -> Fine (180–240 grit) for silky smoothness."
        ],
        "keyTakeaway": "Never sand across the grain; cross-grain scratches become magnified into ugly blemishes once varnish is applied."
      },
      {
        "title": "3. Wood and Metal Finishes",
        "content": "Different finishes produce distinct protective and visual qualities:",
        "bulletPoints": [
          "Wood Finishes:",
          "  - Wood Stain: Penetrating pigment that enhances or alters wood color (e.g. staining pale Wawa to look like Mahogany) without hiding grain lines.",
          "  - Sanding Sealer: Quick-drying cellulose finish that seals porous wood pores and hardens raised grain fibers for ultra-fine sanding.",
          "  - Varnish: Resinous coating (polyurethane, marine varnish) that dries to a tough, transparent, water-resistant film.",
          "  - Wax Polish: Beeswax buffed to a warm, natural sheen.",
          "Metal Finishes:",
          "  - Surface Cleaning: Wire brushing, grinding, or emery cloth to remove mill scale, grease, and rust.",
          "  - Red Oxide / Zinc Phosphate Primer: Chemically inhibits electrochemical rust before applying gloss enamel topcoat."
        ],
        "keyTakeaway": "Metal surfaces require an anti-corrosive primer before applying decorative topcoat enamel."
      }
    ],
    "commonMistakes": [
      "Sanding across the grain, creating deep permanent scratch lines.",
      "Applying paint or varnish over oily or dusty surfaces without wiping clean with a tack cloth.",
      "Painting steel without an anti-rust primer, causing rust to blister under the paint."
    ],
    "beceExamTips": [
      "State the correct sequence of abrasive paper grits: Coarse -> Medium -> Fine.",
      "Explain the difference between wood stain (colors wood, leaves grain visible) and paint (opaque, hides grain completely)."
    ],
    "summaryChecklist": [
      "I know the 3 main reasons for finishing materials (protection, decoration, hygiene).",
      "I understand how to sand correctly parallel to the wood grain.",
      "I know why red oxide primer is applied to steel before gloss paint."
    ]
  },
  "jhs1-ct-t10-design-process": {
    "topicId": "jhs1-ct-t10-design-process",
    "introduction": "The design process is a structured, creative, iterative problem-solving methodology used by engineers, architects, and product designers worldwide. By analyzing human needs, researching possibilities, generating imaginative ideas, prototyping, and testing, students learn to solve real-world community challenges systematically.",
    "realWorldContext": "Designers in Ghana create solar-powered crop dryers for rural farmers by identifying post-harvest losses, defining a design brief, researching local materials (bamboo, UV plastic, black sheet metal), prototyping, and testing drying efficiency.",
    "objectives": [
      "Define design and outline the sequential stages of the design process.",
      "Formulate a concise, actionable Design Brief from an identified problem.",
      "Conduct research and formulate measurable Design Specifications.",
      "Generate, sketch, evaluate, and prototype innovative design concepts."
    ],
    "sections": [
      {
        "title": "1. The Design Process Cycle",
        "content": "The design process is not a rigid linear track, but an iterative cycle of investigation and refinement:",
        "bulletPoints": [
          "1. Identification of Problem: Observing an authentic human frustration or unmet need (e.g. students lack clean, elevated storage for school lunch bowls).",
          "2. The Design Brief: A clear, concise statement specifying what is to be designed and made without prescribing the final solution.",
          "3. Research and Investigation: Gathering information on user ergonomics (dimensions), existing commercial products, available local materials, and production costs.",
          "4. Design Specification: A checklist of measurable criteria the product must satisfy (e.g. must hold 10 bowls, cost under GHS 60, fold flat, resist water).",
          "5. Idea Generation: Rapid freehand sketching of 3–4 diverse, imaginative concepts.",
          "6. Development: Refining the best concept, selecting materials, determining exact joint details and dimensions.",
          "7. Prototyping (Making): Constructing a working model in the workshop.",
          "8. Evaluation: Testing the prototype against the original specifications and gathering user feedback."
        ],
        "keyTakeaway": "If testing reveals a flaw during evaluation, the designer cycles back to modify the design specifications or joints."
      },
      {
        "title": "2. Formulating the Design Brief and Specifications",
        "content": "Clear definition prevents costly misdirection during product development:",
        "bulletPoints": [
          "Good Design Brief: 'Design and manufacture an ergonomic, lightweight, portable stand to keep six school backpacks off dusty classroom floors.' (Specifies need and scope).",
          "Bad Design Brief: 'Make a wooden box with four screws.' (Overly restrictive; prescribes solution rather than solving the problem).",
          "Design Specifications Criteria (ACCESS FM):",
          "  - Aesthetics: Visual appeal, color, shape, surface texture.",
          "  - Cost: Maximum allowable manufacturing and retail budget.",
          "  - Customer: Target age group, ergonomic measurements, user physical capabilities.",
          "  - Environment: Resistance to tropical rain, humidity, sunlight, or dust.",
          "  - Size: Dimensional constraints to fit available space.",
          "  - Safety: Rounded edges, non-toxic finishes, stable center of gravity.",
          "  - Function: Primary mechanical task it must accomplish reliably.",
          "  - Materials: Availability of local timber, metal, or plastics."
        ],
        "keyTakeaway": "A good design brief states the problem clearly without restricting creative innovation."
      },
      {
        "title": "3. Generating Ideas and Evaluation",
        "content": "Translating concepts into tangible prototypes through sketching and testing:",
        "bulletPoints": [
          "Freehand Sketching: Quickly drawing 3D pictorial sketches annotated with functional notes and materials.",
          "Synthesis & Development: Merging the strongest features of different sketches into one superior final design proposal.",
          "Working Drawings: Producing orthographic projections with precise dimensions for workshop fabrication.",
          "Testing & Evaluation: Subjecting the finished prototype to real-world stress loads and recording user critique."
        ],
        "keyTakeaway": "Evaluation judges whether the final artifact genuinely fulfills every design specification criterion."
      }
    ],
    "commonMistakes": [
      "Writing a design brief that dictates the exact solution rather than describing the problem.",
      "Skipping the research stage and rushing into the workshop to cut materials without working drawings.",
      "Treating evaluation as mere self-praise rather than rigorous testing against specifications."
    ],
    "beceExamTips": [
      "List the stages of the design process in chronological order.",
      "Use the 'ACCESS FM' acronym to remember all 8 design specification categories."
    ],
    "summaryChecklist": [
      "I can explain all 8 stages of the design process cycle.",
      "I can write a proper design brief that avoids prescribing the solution.",
      "I understand how to formulate design specifications using ACCESS FM."
    ]
  },
  "jhs1-ct-t11-tech-drawing-lines": {
    "topicId": "jhs1-ct-t11-tech-drawing-lines",
    "introduction": "Technical drawing is the international graphic language used by architects, engineers, and artisans to communicate structural, dimensional, and fabrication information accurately. Through standardized drawing instruments, distinct line weights, and clear single-stroke lettering, drawings convey unambiguous manufacturing blueprints.",
    "realWorldContext": "When an architect in Accra draws the blueprint for a new school building, masons, carpenters, and plumbers interpret the exact thickness and style of lines to build walls, install roofs, and lay pipes without confusion.",
    "objectives": [
      "Identify and use core technical drawing instruments (drawing board, T-square, set squares, compass).",
      "Differentiate between standard technical line types (continuous thick, continuous thin, dashed, center line).",
      "Construct angles in multiples of 15° using T-square and set squares.",
      "Apply standardized uppercase single-stroke Gothic lettering and construct a complete title block."
    ],
    "sections": [
      {
        "title": "1. Drawing Instruments and Equipment",
        "content": "Technical drawing requires specialized precision instruments:",
        "bulletPoints": [
          "Drawing Board: Smooth wooden board with an ebony straight edge along the left side.",
          "T-Square: Consists of a stock held firmly against the board's ebony edge and a long blade used for drawing true horizontal lines and supporting set squares.",
          "Set Squares (30°/60° and 45°): Acrylic triangles used in conjunction with the T-square to draw true vertical lines and standard angles (15°, 30°, 45°, 60°, 75°, 90°, 105°, 120°, 135°, 150°).",
          "Compass and Dividers: Compasses draw precision arcs and circles; dividers transfer measurements and divide lines into equal segments.",
          "Pencils: Hard grades (2H, 3H) for light construction lines; medium grades (H, HB) for visible outlines and lettering."
        ],
        "keyTakeaway": "Never use the lower edge of a T-square blade to draw lines; always draw along the top edge while pressing the stock firmly against the board."
      },
      {
        "title": "2. Standard Types of Technical Lines",
        "content": "According to ISO and BS 8888 drawing conventions, line styles convey specific geometric information:",
        "bulletPoints": [
          "Continuous Thick Line (0.5–0.7 mm): Visible outlines and prominent edges of the object.",
          "Continuous Thin Line (0.2–0.3 mm): Dimension lines, projection lines, leader lines, hatching lines for section views, and construction guide lines.",
          "Dashed Thin Line (Short dashes ~3 mm with 1 mm spaces): Hidden outlines and edges concealed behind solid features.",
          "Long Chain Thin Line (Long dash 10–12 mm, space, dot, space): Center lines, axes of symmetry, and pitch circles.",
          "Continuous Thin Wavy / Zig-zag Line: Break lines indicating an interrupted or shortened view of a long component."
        ],
        "keyTakeaway": "Line contrast—sharp distinction between thick visible outlines and thin construction/dimension lines—is essential for clarity."
      },
      {
        "title": "3. Lettering and the Title Block",
        "content": "Standardized lettering ensures legibility across engineering workshops:",
        "bulletPoints": [
          "Single-Stroke Gothic Lettering: Standard vertical capital letters drawn between light horizontal guidelines (standard heights: 3 mm, 5 mm, 7 mm).",
          "Rules: Never mix lowercase and uppercase in technical titles; maintain uniform character spacing and stroke thickness.",
          "The Title Block: Placed at the bottom right corner of the drawing sheet inside a 10 mm border line. Contains: Drawing Title, Scale (e.g. 1:1, 1:2), Drafter's Name, Date, Class/School, and Projection Symbol."
        ],
        "keyTakeaway": "Always draw light pencil guidelines before lettering to ensure uniform letter height and alignment."
      }
    ],
    "commonMistakes": [
      "Using the T-square stock along the top or right edge of the drawing board (it belongs exclusively on the left ebony edge).",
      "Drawing visible outlines and dimension lines with the same line thickness.",
      "Freehand lettering without drawing horizontal guide lines."
    ],
    "beceExamTips": [
      "In BECE, memorize: dashed lines = hidden details; long dash and dot = center line; continuous thick = visible outline.",
      "Demonstrate how to combine 45° and 30° set squares to construct a 75° angle."
    ],
    "summaryChecklist": [
      "I can draw horizontal lines with a T-square and vertical lines with a set square.",
      "I know the meaning of continuous thick, thin, dashed, and center lines.",
      "I can design a complete title block with all required information."
    ]
  },
  "jhs1-ct-t12-tech-drawing-projections": {
    "topicId": "jhs1-ct-t12-tech-drawing-projections",
    "introduction": "Engineering communication requires both three-dimensional pictorial drawings for conceptual visualization and two-dimensional orthographic projections for precise workshop manufacturing. Mastering isometric drawings, oblique views, and first-angle orthographic projections allows students to represent any solid artifact accurately.",
    "realWorldContext": "When an engineer designs a water pump casing, they provide an isometric 3D drawing so the client can visualize the final product, alongside a multi-view first-angle orthographic blueprint so the machinist can mill the exact dimensions in the workshop.",
    "objectives": [
      "Distinguish between pictorial (3D) and orthographic (2D) drawings.",
      "Construct isometric drawings on three axes (one vertical, two at 30°).",
      "Construct oblique drawings (Cavalier and Cabinet at 45°).",
      "Draw first-angle orthographic projections showing front elevation, end elevation, and plan."
    ],
    "sections": [
      {
        "title": "1. Pictorial Drawings: Isometric vs Oblique",
        "content": "Pictorial drawings display length, width, and height simultaneously:",
        "bulletPoints": [
          "Isometric Projection:",
          "  - Drawn on three isometric axes meeting at 120°: one vertical axis and two receding axes inclined at 30° to the horizontal baseline.",
          "  - Lines parallel to these axes are called isometric lines and are measured at true full scale.",
          "  - Non-isometric lines cannot be measured directly; their end coordinates must be plotted from isometric reference points.",
          "Oblique Projection:",
          "  - Front face is placed parallel to the viewer, drawn true to shape and size using horizontal and vertical axes.",
          "  - Receding depth lines are drawn at 45° to the horizontal.",
          "  - Cavalier Oblique: Full scale (100%) on the 45° depth axis.",
          "  - Cabinet Oblique: Half scale (50%) on the 45° depth axis, creating a more realistic, undistorted optical perspective."
        ],
        "keyTakeaway": "Isometric uses two 30° receding axes; oblique uses one front face at 90° and receding depth lines at 45°."
      },
      {
        "title": "2. Orthographic Projection Principles",
        "content": "Orthographic projection projects parallel rays perpendicular (at 90°) from the object onto reference planes:",
        "bulletPoints": [
          "Three Principal Views:",
          "  - Front Elevation: View seen when looking directly at the front of the object.",
          "  - End Elevation: View seen when looking from the side (left or right).",
          "  - Plan: View seen when looking directly down from above.",
          "First-Angle Projection (Standard in Ghana):",
          "  - Object is imagined in the first quadrant between the observer and the projection planes.",
          "  - The Plan is projected directly BELOW the Front Elevation.",
          "  - The Left-side Elevation is drawn on the RIGHT of the Front Elevation.",
          "  - Symbol: A truncated cone with the smaller circle projected on the far side."
        ],
        "keyTakeaway": "In First-Angle projection, what you see from the top is drawn at the bottom; what you see from the left is drawn on the right."
      },
      {
        "title": "3. Projecting Views and Transferring Dimensions",
        "content": "Ensuring exact geometric alignment between orthographic views:",
        "bulletPoints": [
          "Use light continuous thin projection lines to transfer heights horizontally between Front and End Elevations.",
          "Use a 45° mitre projection line drawn from the intersection of reference axes to transfer widths between the Plan and End Elevation.",
          "Ensure hidden features in any view are represented using dashed thin lines."
        ],
        "keyTakeaway": "The width of the plan view must always match the width of the end elevation via a 45° mitre line."
      }
    ],
    "commonMistakes": [
      "Drawing isometric axes at 45° instead of 30°.",
      "Placing the Plan view above the Front Elevation in First-Angle projection (that is Third-Angle projection).",
      "Measuring dimensions directly along non-isometric lines."
    ],
    "beceExamTips": [
      "BECE questions frequently ask students to identify the correct Plan view corresponding to a given 3D block.",
      "Always sketch the First-Angle projection symbol (truncated cone with circle on the right)."
    ],
    "summaryChecklist": [
      "I can set up isometric axes using a 30° set square.",
      "I know the difference between Cavalier (full scale) and Cabinet (half scale) oblique drawings.",
      "I can arrange Front Elevation, End Elevation, and Plan correctly in First-Angle projection."
    ]
  },
  "jhs1-ct-t13-food-commodities": {
    "topicId": "jhs1-ct-t13-food-commodities",
    "introduction": "Nutrition and food studies form an integral branch of Career Technology. Understanding the chemical classes of nutrients, indigenous Ghanaian food commodities, balanced meal formulation, and nutritional deficiency diseases equips learners to make healthy dietary choices and prevent malnutrition.",
    "realWorldContext": "Traditional Ghanaian meals like 'Waakye' (rice and cowpeas cooked with sorghum leaves) combined with boiled eggs, fish, and shito provide an exceptionally balanced meal of carbohydrates, plant and animal proteins, dietary fiber, and healthy lipids.",
    "objectives": [
      "Categorize nutrients into carbohydrates, proteins, fats, vitamins, minerals, and water.",
      "Classify indigenous Ghanaian food commodities into their primary nutritional groups.",
      "Plan balanced meals suitable for adolescents and manual workers using affordable local foods.",
      "Identify nutritional deficiency diseases (kwashiorkor, marasmus, scurvy, rickets, goitre, anemia) and their dietary remedies."
    ],
    "sections": [
      {
        "title": "1. The Six Classes of Nutrients",
        "content": "Nutrients perform distinct, complementary metabolic functions:",
        "bulletPoints": [
          "1. Carbohydrates: Body's primary fuel source (yielding 4 kcal/g). Starch found in cassava, yam, plantain, maize; sugars in honey and ripe fruits.",
          "2. Proteins: Building blocks of muscle tissue, enzymes, and hormones (yielding 4 kcal/g). Animal protein (complete): eggs, fish, meat, milk; Plant protein (incomplete): beans, groundnuts, cowpeas, soya.",
          "3. Fats and Oils (Lipids): Concentrated energy store (yielding 9 kcal/g), organ cushioning, and carrier for fat-soluble vitamins (A, D, E, K). Red palm oil, shea butter, groundnut oil.",
          "4. Vitamins: Protective micronutrients regulating bodily biochemistry:",
          "   - Vitamin A: Vision and epithelial health (red palm oil, mango, carrots). Deficiency: Night blindness.",
          "   - Vitamin B1 (Thiamine): Energy release (whole cereals). Deficiency: Beriberi.",
          "   - Vitamin C: Collagen synthesis, gum health, wound healing (citrus, guava, tomatoes). Deficiency: Scurvy.",
          "   - Vitamin D: Calcium absorption (sunlight, egg yolk). Deficiency: Rickets in children, osteomalacia in adults.",
          "5. Minerals: Inorganic metabolic regulators:",
          "   - Iron: Forms hemoglobin in red blood cells (kontomire/cocoyam leaves, liver). Deficiency: Anemia.",
          "   - Calcium & Phosphorus: Bone and tooth density (milk, small whole fish with bones).",
          "   - Iodine: Thyroid hormone production (iodated salt, sea crabs). Deficiency: Goitre.",
          "6. Water & Fiber (Roughage): Water maintains cell hydration and waste removal; dietary fiber promotes intestinal peristalsis, preventing constipation."
        ],
        "keyTakeaway": "A balanced diet provides all six classes of nutrients in the correct proportions required for healthy growth and energy."
      },
      {
        "title": "2. Ghanaian Indigenous Food Commodities",
        "content": "NaCCA classifies Ghanaian local foods into six functional commodity groups:",
        "bulletPoints": [
          "Roots and Tubers: Cassava, yam, cocoyam, sweet potato (energy-rich starches).",
          "Cereals and Grains: Maize, rice, millet, sorghum (staple energy and B-vitamins).",
          "Legumes and Oilseeds: Cowpeas, bambara beans, groundnuts, melon seeds / agushie (rich plant proteins and healthy oils).",
          "Animal Foods: Tilapia, mudfish, herrings, beef, goat meat, eggs, snails, bushmeat (high-biological-value protein, iron, calcium).",
          "Vegetables and Fruits: Kontomire, garden eggs, okro, gboma, tomatoes, oranges, pawpaw, pineapple (vitamins, minerals, dietary fiber).",
          "Fats and Oils: Red palm oil, palm kernel oil, coconut oil, shea butter (concentrated lipids and beta-carotene)."
        ],
        "keyTakeaway": "Combining cereals with legumes (e.g. rice and beans in Waakye) provides complementary amino acids equivalent to animal protein."
      },
      {
        "title": "3. Malnutrition and Deficiency Diseases",
        "content": "Imbalances in nutrient intake cause specific pathological deficiency states:",
        "bulletPoints": [
          "Protein-Energy Malnutrition (PEM):",
          "  - Kwashiorkor: Severe protein deficiency despite adequate carbohydrate calories. Symptoms: protruding belly (edema), swollen moon face, reddish thinning hair, peeling skin dermatitis.",
          "  - Marasmus: Total starvation of both calories and proteins. Symptoms: severe wasting, ribs clearly visible, 'old person' facial appearance, extreme emaciation.",
          "Micronutrient Deficiencies:",
          "  - Anemia: Pale palms, fatigue, dizziness due to lack of iron; cured by eating kontomire and liver.",
          "  - Goitre: Swollen thyroid gland in neck due to lack of iodine; prevented by using iodated cooking salt.",
          "  - Scurvy: Bleeding gums and loose teeth from Vitamin C deficiency; cured by eating citrus fruits."
        ],
        "keyTakeaway": "Kwashiorkor is caused by severe protein deficiency (edema); Marasmus is caused by total starvation of both energy and protein (wasting)."
      }
    ],
    "commonMistakes": [
      "Confusing Kwashiorkor (protein deficiency with swollen belly) with Marasmus (general starvation with emaciation).",
      "Believing that red palm oil is purely fattening (unrefined palm oil is Ghana's richest natural source of pro-Vitamin A / carotene).",
      "Assuming dietary fiber is a nutrient that gets absorbed into the bloodstream (fiber is indigestible cellulose that cleans the bowels)."
    ],
    "beceExamTips": [
      "Know the deficiency diseases for Vitamins A, C, D, Iron, and Iodine.",
      "Be prepared to construct a 3-course balanced Ghanaian menu using local commodities."
    ],
    "summaryChecklist": [
      "I know the 6 classes of nutrients and their functions.",
      "I can classify Ghanaian local foods into commodity groups.",
      "I can distinguish between Kwashiorkor and Marasmus."
    ]
  },
  "jhs1-ct-t14-cooking-hygiene": {
    "topicId": "jhs1-ct-t14-cooking-hygiene",
    "introduction": "Culinary arts and food safety ensure that nourishing meals are prepared hygienically, cooked using optimal thermal methods to retain vitamins and flavor, and preserved effectively against microbial spoilage. Mastering kitchen sanitation, temperature control, and indigenous preservation techniques prevents foodborne illnesses.",
    "realWorldContext": "Traditional fishmongers at coastal landing beaches in Elmina and Tema salt and hot-smoke fresh catches of herrings and mackerel into 'smoked fish' and 'koobi', preserving millions of metric tons of protein for inland markets without refrigeration.",
    "objectives": [
      "State the primary reasons for cooking food.",
      "Distinguish between moist heat, dry heat, and frying cooking methods.",
      "Apply strict kitchen hygiene rules and identify cross-contamination risks.",
      "Explain the scientific principles of traditional food preservation (smoking, salting, sun drying)."
    ],
    "sections": [
      {
        "title": "1. Reasons for Cooking Food and Methods",
        "content": "Cooking applies heat to food to alter its chemical and physical structure:",
        "bulletPoints": [
          "Why We Cook Food: Kills pathogenic bacteria and parasites, softens tough fibers and connective tissues for easier digestion, enhances flavor, aroma, and color, and extends shelf life.",
          "Moist Heat Methods (Uses liquid water or steam):",
          "  - Boiling: Cooking in liquid at 100°C (e.g. boiled plantain, yam, rice).",
          "  - Steaming: Cooking food in hot water vapor above boiling liquid without immersion (e.g. Ga kenkey, abolo). Best method for retaining water-soluble vitamins.",
          "  - Stewing: Simmering food gently in a small amount of seasoned liquid over low heat in a covered pot.",
          "Dry Heat Methods (Uses hot air or radiant heat):",
          "  - Baking: Dry convective heat inside an enclosed oven (e.g. bread, meat pies, cakes).",
          "  - Roasting: Cooking uncovered with hot air or radiant charcoal (e.g. roasted plantain / kofi brokeman, roasted chicken).",
          "  - Grilling: Direct radiant heat on a gridiron over glowing coals (e.g. khebab / suya).",
          "Frying in Hot Fat/Oil:",
          "  - Shallow Frying: Thin layer of oil in a skillet (e.g. fried eggs, pancakes).",
          "  - Deep Frying: Completely submerging food in hot oil at 170°C–190°C (e.g. bofrot, kelewele, tatale)."
        ],
        "keyTakeaway": "Steaming retains more heat-sensitive and water-soluble vitamins (B and C) than rapid boiling in excess water."
      },
      {
        "title": "2. Kitchen Sanitation and Prevention of Food Poisoning",
        "content": "Maintaining strict food hygiene prevents bacterial foodborne contamination:",
        "bulletPoints": [
          "Personal Hygiene: Wash hands thoroughly with soap under running water for at least 20 seconds before food prep; tie back hair with a net or chef cap; wear a clean apron; do not sneeze or cough over food.",
          "Cross-Contamination: The transfer of harmful bacteria from raw foods (raw poultry, unwashed tubers) to ready-to-eat cooked dishes via cutting boards, knives, or unwashed hands.",
          "Food Danger Zone: 5°C to 63°C, the temperature range where foodborne bacteria (Salmonella, E. coli) multiply exponentially. Keep hot foods above 63°C and refrigerate cold foods below 5°C."
        ],
        "keyTakeaway": "Never use the same unwashed cutting board for raw meat and cooked salad vegetables."
      },
      {
        "title": "3. Traditional Ghanaian Food Preservation",
        "content": "Preventing spoilage by inhibiting microbial growth and enzymatic decay:",
        "bulletPoints": [
          "Smoking: Hanging fish or bushmeat in a smokehouse over smoldering wood fires. Heat evaporates water while wood smoke deposits antibacterial phenolic compounds (e.g. smoked catfish, herrings).",
          "Sun Drying: Spreading sliced vegetables (okro, pepper) or cassava chips (kokonte) on raised platforms in direct solar heat. Dehydration deprives bacteria of the moisture needed for survival.",
          "Salting: Packing fish (koobi, momoni) in coarse sea salt. The high salt concentration creates a hypertonic environment, drawing out water by osmosis and killing bacteria."
        ],
        "keyTakeaway": "Preservation methods work by removing moisture (osmosis/dehydration) or creating chemical barriers that inhibit bacterial enzymes."
      }
    ],
    "commonMistakes": [
      "Leaving cooked stew in the temperature danger zone (room temperature) overnight instead of reheating above 63°C or chilling below 5°C.",
      "Discarding vegetable cooking water that contains dissolved Vitamin C and B-complex vitamins.",
      "Touching raw meat and immediately handling cooked bread without washing hands."
    ],
    "beceExamTips": [
      "State the temperature range of the 'Food Danger Zone' (5°C to 63°C).",
      "Explain the scientific mechanism of salting fish: osmosis draws out cellular moisture, inhibiting bacterial growth."
    ],
    "summaryChecklist": [
      "I know the reasons for cooking food and can classify cooking methods.",
      "I understand how to prevent cross-contamination in the kitchen.",
      "I can explain the science of food preservation by smoking, salting, and solar drying."
    ]
  },
  "jhs1-ct-t15-sewing-fabrics": {
    "topicId": "jhs1-ct-t15-sewing-fabrics",
    "introduction": "Textiles and garment construction encompass the creative transformation of textile fibers, yarns, and fabrics into durable clothing and domestic household articles. Mastering measuring tools, temporary holding stitches, permanent assembly seams, and fiber characteristics allows learners to design, mend, and care for garments effectively.",
    "realWorldContext": "Ghanaian fashion designers and seamstresses craft beautiful Kente, Batakari, and African print garments using precise body measurements, sharp shears, reinforced backstitches, and invisible hemming stitches.",
    "objectives": [
      "Identify essential sewing equipment: measuring, marking, cutting, and stitching tools.",
      "Classify hand stitches into temporary (tacking/basting), permanent (running, backstitch, hemming), and decorative stitches.",
      "Differentiate between natural fibers (cotton, linen, wool, silk) and synthetic fibers (nylon, polyester).",
      "Demonstrate garment mending and interpret standard laundry care symbols."
    ],
    "sections": [
      {
        "title": "1. Sewing Equipment and Tools",
        "content": "Successful garment construction depends on selecting appropriate tools:",
        "bulletPoints": [
          "Measuring Tools: Flexible plastic tape measure (150 cm / 60 in) for taking body circumferences and fabric lengths.",
          "Marking Tools: Tailor's chalk (wax or clay) and tracing wheels used with carbon paper to transfer pattern lines without permanently staining fabric.",
          "Cutting Tools: Dressmaker's shears (large angled handles allowing flat cutting across tables), embroidery scissors with fine pointed tips, and seam rippers for safely cutting out mistaken stitches.",
          "Sewing Implements: Needles (sharps, crewels), dressmaker's pins for holding seams, pin cushion, and a metal thimble worn on the middle finger to push needles through heavy fabric."
        ],
        "keyTakeaway": "Never use dressmaker's fabric shears to cut paper or wire, as this rapidly blunts the precision blade edges."
      },
      {
        "title": "2. Classification of Basic Hand Stitches",
        "content": "Hand stitches join fabric layers, finish raw edges, and ornament garments:",
        "bulletPoints": [
          "Temporary Stitches (Removed after permanent machining):",
          "  - Even Tacking / Basting: Equal stitches and spaces (~6 mm) along straight seam lines to hold pieces securely.",
          "  - Uneven Tacking: Long stitch on top, short underneath; holds wide hems and pocket positions.",
          "  - Tailor's Tacks: Thread loops cut apart to mark dart and pocket points symmetrically on two fabric layers.",
          "Permanent Stitches (Remain in the finished garment):",
          "  - Running Stitch: Fine, even in-and-out stitches used for gathering, delicate seams, and mending.",
          "  - Backstitch: Strongest hand stitch; needle enters fabric behind previous stitch, closely duplicating sewing machine seams.",
          "  - Hemming Stitch: Small, slanted stitches catching one thread of outer fabric to secure folded hems almost invisibly.",
          "  - Overcasting Stitch: Slanted loops sewn over raw fabric edges to prevent fraying and unravelling."
        ],
        "keyTakeaway": "Backstitch is the strongest permanent hand stitch, ideal for seam construction and repairing split uniform seams."
      },
      {
        "title": "3. Textile Fibers and Fabric Care",
        "content": "Fibers are fine, hair-like basic units twisted into yarns and woven or knitted into fabrics:",
        "bulletPoints": [
          "Natural Fibers:",
          "  - Plant / Cellulose Fibers: Cotton (absorbent, breathable, strong when wet, burns with paper smell and soft gray ash), Linen (flax fiber; cool, crisp, wrinkles easily).",
          "  - Animal / Protein Fibers: Wool (sheep fleece; warm, resilient, burns with burning-hair odor, shrinks in hot water), Silk (silkworm cocoon; smooth, lustrous, luxurious).",
          "Synthetic / Man-Made Fibers:",
          "  - Petrochemical Polymers: Nylon, Polyester, Acrylic.",
          "  - Characteristics: Very high tensile strength, wrinkle-resistant, quick-drying, hydrophobic, melts into a hard plastic bead under flame.",
          "Garment Care: Washing, ironing at correct fabric temperature settings, and storing dry to prevent mildew."
        ],
        "keyTakeaway": "Under a flame burn test, natural plant fibers burn to soft ash, while synthetic fibers melt into hard plastic beads."
      }
    ],
    "commonMistakes": [
      "Using paper scissors to cut expensive dress fabric (drags and frays the weave).",
      "Using running stitch for a heavy trouser crotch seam instead of the strong, interlocking backstitch.",
      "Ironing synthetic nylon fabric with a high-heat cotton iron setting, which instantly melts the fabric."
    ],
    "beceExamTips": [
      "Identify hand stitches by diagram: alternating equal stitches = even basting; overlapping loop stitch = backstitch; diagonal edge loops = overcasting.",
      "Describe the burn test behavior for cotton vs polyester."
    ],
    "summaryChecklist": [
      "I know the functions of measuring, marking, cutting, and sewing tools.",
      "I can distinguish between temporary tacking stitches and permanent backstitches.",
      "I can classify natural and synthetic fibers and describe their burn test results."
    ]
  }
};
