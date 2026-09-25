// Ghanaian JHS 3 Career Technology Detailed Study Notes
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// 12 Comprehensive, Textbook-Grade Study Notes matching DetailedNotes schema

import { DetailedNotes } from './types';

export const JHS3_CAREER_TECH_DETAILED_NOTES: Record<string, DetailedNotes> = {
  "jhs3-ctech-t1-health-safety-workshop": {
    "topicId": "jhs3-ctech-t1-health-safety-workshop",
    "title": "Workshop Safety, Hazards, Personal Protective Equipment (PPE) and First Aid",
    "overview": "A comprehensive, practical guide to creating an accident-free environment in technical workshops and industrial production sites, covering hazard analysis, risk management, safety legislation, protective equipment, fire science, and life-saving first aid techniques.",
    "introduction": "Every technical enterprise relies on a culture of safety. In school workshops, carpentry shops, fabrication bays, and food laboratories across Ghana, hazards exist that can cause severe physical harm, disability, or loss of life if not systematically managed. Mastering workshop safety is not simply about obeying rules; it is about engineering safe workflows, recognizing latent hazards, choosing appropriate personal protective equipment, and taking prompt, calm, life-saving action when injuries occur.",
    "realWorldContext": "In Ghana's expanding manufacturing and construction sectors, technical firms certified by the Factories, Offices and Shops Act (Act 328) mandate strict safety enforcement. From Suame Magazine in Kumasi to Tema heavy industrial area, failure to wear eye protection or secure machine guards leads to permanent blindness and amputations. Practicing high safety standards equips students for real-world industrial compliance.",
    "objectives": [
      "Distinguish between unsafe acts and unsafe conditions with typical workshop examples.",
      "Categorize workshop hazards into mechanical, chemical, electrical, ergonomic, and thermal types.",
      "Select and properly wear appropriate Personal Protective Equipment (PPE) for diverse technical operations.",
      "Identify classes of fire (A, B, C, D) and correctly operate corresponding fire extinguishers.",
      "Execute standard first aid responses for severe bleeding, shock, chemical splashes, and thermal burns."
    ],
    "sections": [
      {
        "title": "1. The Anatomy of Accidents: Unsafe Acts vs Unsafe Conditions",
        "content": "Industrial investigations demonstrate that over 85% of workshop accidents stem from human error termed 'unsafe acts', while the remainder result from environmental defects termed 'unsafe conditions'. Understanding this distinction is vital for incident prevention.",
        "bulletPoints": [
          "Unsafe Acts: Human behaviors that bypass safety protocols (e.g. running or horseplay in the workshop, operating machinery without authorization, failing to wear safety goggles while grinding, wearing loose long sleeves or ties near rotating chucks, using a blunt chisel or cracked hammer handle).",
          "Unsafe Conditions: Physical and environmental hazards in the work area (e.g. oil or coolant puddles on walking aisles, exposed live electric cables, unguarded circular saw blades or lathe gears, inadequate ventilation in spray-painting bays, defective ground earthing).",
          "The 'Swiss Cheese' Model: Catastrophic accidents occur when multiple safety defenses fail simultaneously, aligning defects in machine guards, training, and human vigilance."
        ],
        "keyTakeaway": "Unsafe conditions invite accidents, but unsafe acts trigger them; eliminating both creates an accident-free workshop.",
        "realWorldExample": "A carpenter working on an unguarded circular saw (unsafe condition) rushes to complete a job while talking to a visitor (unsafe act), resulting in a severed tendon."
      },
      {
        "title": "2. Personal Protective Equipment (PPE) and Ergonomics",
        "content": "PPE forms the final barrier between a technician and hazardous energy or substances. It does not remove the hazard, but protects the worker's body against irreversible physical damage.",
        "bulletPoints": [
          "Eye and Face Protection: Impact-resistant polycarbonate goggles for metal turning and grinding; shaded face shields (shade 10-12) for electric arc welding to block harmful ultraviolet and infrared radiation.",
          "Hearing Protection: Ear plugs and acoustically lined ear muffs for noise levels exceeding 85 decibels (dB), such as thickness planer or drop hammer operations.",
          "Respiratory Protection: Disposable dust masks (N95/FFP2) for sanding timber; dual-cartridge chemical respirators with organic vapor filters for solvent spraying and resin casting.",
          "Hand and Foot Protection: Chrome leather gloves for handling hot metal or rough steel sheets (never worn near rotating machine spindles); steel-toe safety boots with puncture-resistant soles to protect against dropped tools and protruding nails.",
          "Ergonomics: Positioning workbenches at elbow height, lifting heavy loads using leg quadriceps rather than the lumbar spine, and maintaining a straight back to prevent chronic musculoskeletal disorders."
        ],
        "keyTakeaway": "Never compromise on PPE; a single flying steel splinter or hot metal spark can blind an unprotected eye in a fraction of a second.",
        "realWorldExample": "A sheet-metal fabricator in Kokomlemle wearing steel-toe boots avoids broken metatarsals when a 25 kg steel plate slips from a workbench."
      },
      {
        "title": "3. Fire Science, Classification, and Emergency First Aid",
        "content": "Fires in technical workshops can rapidly consume timber, flammable solvents, and structures. Understanding combustion chemistry and basic life support is crucial for every technical student.",
        "bulletPoints": [
          "The Fire Triangle: Combustion requires Fuel (combustible material), Heat (ignition energy), and Oxygen (air). Fire extinguishment works by removing one element: Starvation (cutting off fuel), Cooling (reducing heat with water), or Smothering (depriving fire of oxygen).",
          "Class A Fires: Ordinary solid combustibles (wood, paper, textiles, rubber); extinguished with Pressurized Water or Foam (Cooling).",
          "Class B Fires: Flammable liquids and liquefiable solids (petrol, diesel, paint thinners, kerosene, lubricating oils); extinguished using Foam, Dry Chemical Powder (DCP), or CO2 (Smothering). NEVER USE WATER on Class B fires.",
          "Class C & D Fires: Flammable gases (LPG, acetylene); Combustible metals (magnesium, titanium). Electrical fires involving energized equipment require CO2 or Dry Chemical Powder to prevent electrocution.",
          "First Aid Protocol: The ABC of resuscitation (Airway clear, Breathing confirmed, Circulation monitored).",
          "Managing Burns & Scalds: Immediately cool the affected area under gentle running tap water for at least 10–15 minutes. Never apply gentian violet, toothpaste, butter, or engine oil; do not pop blisters; cover with a sterile dry dressing.",
          "Severe Bleeding Control: Put on gloves; apply direct digital pressure over the wound using a sterile dressing pad; elevate the bleeding limb above the heart level; secure firmly with a roller bandage."
        ],
        "keyTakeaway": "Water poured onto burning petrol causes an explosive fireball; remember P-A-S-S when using extinguishers: Pull the pin, Aim at the base, Squeeze the lever, Sweep side to side.",
        "realWorldExample": "A mechanic uses a CO2 extinguisher at the base of an alternator electrical fire, successfully extinguishing the blaze without conducting electricity."
      }
    ],
    "summaryChecklist": [
      "Can explain the difference between unsafe acts and unsafe conditions.",
      "Knows the correct PPE for eye, ear, head, lung, hand, and foot protection.",
      "Memorized the four fire classes (A, B, C, D) and their extinguishing agents.",
      "Understands why water must NEVER be used on petrol or electrical fires.",
      "Can demonstrate the four-step first aid procedure for controlling heavy arterial bleeding.",
      "Knows the immediate cooling procedure (10-15 mins running water) for thermal burns."
    ],
    "commonMistakes": [
      "Pouring water onto a flaming oil or solvent pan, causing burning liquid to splash and explode.",
      "Wearing cotton or leather gloves while operating high-speed rotating machines (drills, lathes), which can pull fingers into the chuck.",
      "Applying butter, flour, grease, or herbal paste to fresh burn wounds, trapping heat and causing severe infections.",
      "Forgetting to check the pressure gauge on dry powder fire extinguishers before emergencies."
    ],
    "beceExamTips": [
      "In BECE Section B, always identify the fire class BEFORE naming the extinguisher type.",
      "When asked how to control bleeding, always mention 'direct pressure', 'elevation of limb', and 'sterile pad'.",
      "Explain the water danger on petrol fires clearly: 'Petrol is less dense than water and floats on top, spreading flames outward'."
    ]
  },
  "jhs3-ctech-t2-materials-timber-conversion": {
    "topicId": "jhs3-ctech-t2-materials-timber-conversion",
    "title": "Wood & Timber Technology: Classification, Seasoning, Defects and Conversion",
    "overview": "A deep technical exploration of timber science: the biological structure of trees, classification into hardwoods and softwoods, industrial log conversion, moisture content calculations, seasoning thermodynamics, and identification of wood defects.",
    "introduction": "Wood is one of humanity's oldest and most versatile engineering materials. In Ghana, our rich tropical rainforests have historically provided world-renowned commercial timbers like Odum (Iroko), Mahogany, Sapele, and Wawa. To design and construct durable structures, doors, roofs, and furniture, a career technologist must understand the anatomy of the tree trunk, how raw logs are converted into commercial boards, how timber loses moisture during seasoning, and how natural and drying defects affect structural integrity.",
    "realWorldContext": "Ghana's Forestry Commission regulates commercial timber harvesting. Sawmills in Kumasi, Takoradi, and Sunyani convert logs into kiln-dried lumber for local housing construction and export. Using improperly seasoned timber in building construction causes roof trusses to sag, doors to stick during the wet season, and parquet floors to buckle.",
    "objectives": [
      "Differentiate between botanical hardwoods (deciduous) and softwoods (coniferous) with Ghanaian examples.",
      "Identify and state the functions of trunk cross-section features (bark, cambium, sapwood, heartwood, pith, rays).",
      "Compare conversion techniques: through-and-through, quarter-sawing, and tangential sawing.",
      "Calculate percentage moisture content using the oven-dry method.",
      "Contrast natural air seasoning with artificial kiln seasoning and identify common timber defects."
    ],
    "sections": [
      {
        "title": "1. Botanical Classification and Tree Anatomy",
        "content": "Wood is classified botanically based on tree reproduction and seed structure, rather than physical hardness alone.",
        "bulletPoints": [
          "Hardwoods (Angiosperms): Broad-leaved, deciduous trees whose seeds are enclosed within a fruit or nut. They possess complex porous cell structures containing open vessels/pores. Examples in Ghana: Odum (Milicia excelsa), African Mahogany (Khaya ivorensis), Sapele, Wawa (Triplochiton scleroxylon), Teak, and Emire.",
          "Softwoods (Gymnosperms): Needle- or scale-leaved, evergreen cone-bearing trees whose seeds are naked (conifers). Cell structure is simpler, consisting mainly of tracheids without true vessel pores. Examples: Scots Pine, Douglas Fir, Cedar, Cypress (largely imported or grown in temperate uplands).",
          "Pith (Medulla): The soft, spongy central core of the tree formed during its initial seedling growth.",
          "Heartwood (Duramen): The dark, dense, non-living central column of mature wood. Cell pores are blocked by resins, gums, and tannins (tyloses), making heartwood mechanically strong, heavy, and naturally resistant to fungal decay and termites.",
          "Sapwood (Alburnum): The pale, outer, living ring of wood that conducts water and dissolved mineral salts from roots to leaves. It contains living parenchyma cells rich in starches, making it highly susceptible to powder-post beetle and rot attack.",
          "Cambium Layer: A microscopic ring of actively dividing meristematic cells between the sapwood and the inner bark; produces new wood cells internally and new bark externally.",
          "Inner Bark (Bast/Phloem) & Outer Bark (Cortex): Transports synthesized food sugars downwards from leaves; outer bark protects the tree against desiccation, insect invasion, and fire.",
          "Medullary Rays: Radial bands of parenchyma cells running from pith to bark; store nutrients and transfer sap horizontally across the trunk."
        ],
        "keyTakeaway": "Heartwood provides superior structural lumber for furniture and exterior building; sapwood should always be treated with preservatives or discarded.",
        "realWorldExample": "A carpenter in Sunyani specifies Odum heartwood for exterior door frames because its natural tannins resist termites and tropical rotting without artificial chemicals."
      },
      {
        "title": "2. Timber Conversion: Sawing Logs into Lumber",
        "content": "Conversion is the process of sawing freshly felled, debarked tree logs into commercial planks, boards, and scantlings using bandsaws or circular saw heads.",
        "bulletPoints": [
          "Through-and-Through (Plain / Slash) Sawing: The simplest, quickest, and cheapest method. The log is sawn parallel down its entire length in successive parallel cuts. Yields wide boards with cathedral grain figures, but center boards are prone to severe cupping and warping during drying.",
          "Quarter Sawing: The log is first divided into four quadrants, and each quadrant is sawn radially perpendicular to the annual growth rings. Advantages: Highly stable boards with minimum shrinkage across the width, maximum wear resistance, and prominent medullary ray figure (silver grain). Disadvantage: Expensive, generates more sawmill waste, produces narrower boards.",
          "Tangential Sawing: Cuts are made tangential to the annual rings. Yields decorative face grain and high strength under beam bending, but boards shrink noticeably across their width."
        ],
        "keyTakeaway": "Quarter-sawn boards remain flat and stable; through-and-through boards are economical but require careful stacking to minimize warping.",
        "realWorldExample": "Sawmills in Apremdo use quarter-sawing for premium Teak flooring planks to ensure they will not cup or gap when installed in luxury homes."
      },
      {
        "title": "3. Timber Seasoning, Moisture Calculations, and Defects",
        "content": "Newly converted green timber contains free water in cell cavities and bound water in cell walls. Seasoning is the controlled removal of this moisture until the timber reaches Equilibrium Moisture Content (EMC).",
        "bulletPoints": [
          "Equilibrium Moisture Content (EMC): In southern Ghana, indoor EMC ranges from 12% to 15%; outdoor timber stabilizes around 15% to 18%.",
          "Moisture Content Formula: Percentage Moisture Content (%) = [(Initial Wet Weight - Constant Dry Weight) / Constant Dry Weight] × 100%.",
          "Air (Natural) Seasoning: Timber planks are stacked on level concrete plinths under a protective roof shed, separated by wooden stickers (25 mm square battens) to allow free natural cross-ventilation. Takes 6–18 months. Low cost, but weather-dependent and cannot dry below ambient humidity.",
          "Kiln (Artificial) Seasoning: Timber is stacked in a sealed insulated masonry chamber where temperature, steam humidity, and air circulation are controlled with boilers and fans. Takes 3–14 days. Dries timber down to 8–10%, kills insect larvae and fungal spores, but requires high electrical and capital costs.",
          "Natural Defects: Knots (live/dead branch bases), Heart Shake (radial cracks from pith), Cup Shake (separation between annual rings), and Star Shake.",
          "Seasoning/Conversion Defects: Cupping (curvature across board width), Bowing (curvature along face length), Springing (curvature along edge length), Twisting (spiral distortion across diagonals), and Surface Checks/Splits."
        ],
        "keyTakeaway": "Seasoning prevents rot, increases timber strength, allows glue and paint to adhere, and stops shrinkage after installation.",
        "realWorldExample": "A woodworker measures a wet board at 400g and dry at 320g: MC = [(400-320)/320]*100 = 25%. This is too moist for indoor furniture in Ghana, requiring further seasoning down to 14%."
      }
    ],
    "summaryChecklist": [
      "Can explain the difference between hardwoods and softwoods with Ghanaian timber species.",
      "Can label all six parts of a tree trunk cross-section and state their functions.",
      "Can describe plain sawing, quarter sawing, and tangential sawing.",
      "Mastered the moisture content mathematical formula and can calculate MC accurately.",
      "Can differentiate natural air seasoning from artificial kiln seasoning.",
      "Can identify natural defects (knots, shakes) and drying defects (cupping, bowing, twisting)."
    ],
    "commonMistakes": [
      "Assuming all hardwoods are physically dense and all softwoods are light (e.g. Balsa is botanically a hardwood yet extremely soft).",
      "Dividing by wet weight instead of dry weight when calculating percentage moisture content.",
      "Confusing 'Sapwood' (living, light-colored sap conduit) with 'Heartwood' (dead, dark, durable center).",
      "Using green, unseasoned timber for roofing trusses, which sag and buckle under the tropical sun."
    ],
    "beceExamTips": [
      "In BECE calculations, always state the formula clearly: MC (%) = [(W1 - W2) / W2] × 100, where W1 is wet weight and W2 is dry weight.",
      "When drawing the tree trunk cross-section, label the layers from center outwards: Pith -> Heartwood -> Sapwood -> Cambium -> Bark.",
      "State at least two reasons for seasoning: to increase mechanical strength, prevent fungal decay, and prevent distortion after fabrication."
    ]
  },
  "jhs3-ctech-t3-materials-metals-plastics": {
    "topicId": "jhs3-ctech-t3-materials-metals-plastics",
    "title": "Metals & Plastics Technology: Ferrous, Non-Ferrous Alloys, Thermoplastics and Thermosets",
    "overview": "A comprehensive material science study of engineering metals, non-ferrous alloys, and synthetic polymers: classification, extraction metallurgy, mechanical properties, and manufacturing applications in modern Ghanaian industry.",
    "introduction": "Modern industrial civilization is built upon metals and polymers. The bridges spanning our rivers, the vehicles on our highways, the tools in our workshops, and the electronic gadgets in our pockets are fabricated from specific metals, alloys, and plastics. Understanding the unique mechanical, electrical, and thermal properties of these materials allows career technologists to choose the exact material required for any engineering component.",
    "realWorldContext": "Ghana's automotive assembly plants (Kantanka, Toyota, VW) and plastics manufacturing enterprises in the North Industrial Area of Accra rely on rigorous material testing. Technicians must understand why vehicle chassis use mild steel, electrical wiring uses pure copper, aircraft use duralumin, and electrical switchgear uses Bakelite.",
    "objectives": [
      "Classify metals into ferrous and non-ferrous categories with key mechanical characteristics.",
      "Describe the composition, properties, and applications of mild steel, high-carbon steel, and cast iron.",
      "Explain the composition and uses of common engineering alloys (brass, bronze, duralumin, solder).",
      "Differentiate between thermoplastics and thermosetting plastics based on polymer molecular structure.",
      "Match engineering applications to appropriate materials based on tensile strength, conductivity, and heat resistance."
    ],
    "sections": [
      {
        "title": "1. Ferrous Metals and the Carbon Steel Spectrum",
        "content": "Ferrous metals contain iron as their chief element. The percentage of carbon dissolved in iron fundamentally alters its hardness, ductility, tensile strength, and weldability.",
        "bulletPoints": [
          "Pig Iron: The raw product extracted from iron ore (hematite/magnetite) in a blast furnace with coke and limestone flux; contains 4%–5% carbon and is very brittle.",
          "Cast Iron (2%–4% Carbon): Hard, brittle, cannot be bent or forged, but possesses exceptional compressive strength, low melting point, and vibration-damping capacity. Used for heavy machine tool beds, lathe beds, bench vice bodies, engine cylinder blocks, and manhole covers.",
          "Wrought Iron (<0.1% Carbon): Nearly pure iron containing slag fibers; highly malleable, ductile, tough, and corrosion resistant; historically used for ornamental gates, chains, and crane hooks.",
          "Mild Steel (Low Carbon: 0.15%–0.30% C): Highly ductile, malleable, easily welded, bent, and machined; cannot be directly hardened by quenching. Used for building re-bars, bolts, nuts, sheet metal car panels, and school desk frames.",
          "Medium Carbon Steel (0.3%–0.6% C): Offers balanced strength and toughness; heat-treatable; used for vehicle axles, crankshafts, connecting rods, and railway rails.",
          "High Carbon Steel (Tool Steel: 0.7%–1.5% C): Extremely hard, wear resistant, but brittle; can be heat-treated (hardened and tempered); used for cutting tools, drill bits, cold chisels, files, and saw blades."
        ],
        "keyTakeaway": "Increasing carbon content increases hardness and tensile strength, but decreases ductility, malleability, and weldability.",
        "realWorldExample": "A blacksmith in Suame Magazine uses high-carbon steel from an old vehicle leaf spring to forge durable cold chisels and farm machetes."
      },
      {
        "title": "2. Non-Ferrous Metals and Engineering Alloys",
        "content": "Non-ferrous metals contain no iron, are non-magnetic, and do not rust (though some form protective surface oxide films). Combining two or more metals creates an alloy with enhanced mechanical properties.",
        "bulletPoints": [
          "Copper (Cu): Reddish-brown metal; exceptional electrical and thermal conductivity, highly malleable and ductile, corrosion resistant. Used for electrical cables, domestic water plumbing pipes, and heat exchangers.",
          "Aluminum (Al): Extracted from bauxite (processed at VALCO in Tema); silvery-white, very light (density 2.7 g/cm³), excellent thermal/electrical conductor, naturally forms a protective self-healing oxide film (Al2O3). Used for cookware, overhead high-voltage power transmission cables, and window frames.",
          "Zinc (Zn): Bluish-white, low melting point (419°C), highly corrosion-resistant. Chiefly used as a protective sacrificial coating on steel (galvanizing) and in dry-cell battery casings.",
          "Lead (Pb): Extremely dense, soft, low melting point; used for lead-acid automotive battery plates and radiation shielding.",
          "Tin (Sn): Silvery-white, non-toxic, corrosion-resistant; used to plate steel tin cans for food preservation.",
          "Brass (Alloy: 60-70% Copper + 30-40% Zinc): Golden appearance, corrosion resistant, easy to machine and cast; used for water taps, locks, screws, musical trumpets, and decorative hardware.",
          "Bronze (Alloy: 88-90% Copper + 10-12% Tin): Harder and tougher than brass, highly resistant to seawater corrosion; used for marine ship propellers, heavy-duty bearings, and commemorative statues.",
          "Soft Solder (Alloy: 60% Tin + 40% Lead): Low melting point (approx. 188°C); flows easily into joint gaps; used for joining electrical copper circuits and copper plumbing.",
          "Duralumin (Alloy: 95% Aluminum + 4% Copper + 1% Magnesium/Manganese): Light like aluminum but heat-treated to achieve the tensile strength of mild steel; used for aircraft structures and bicycle frames."
        ],
        "keyTakeaway": "Alloying combines individual metallic virtues to produce materials stronger, harder, or more corrosion-resistant than pure base metals.",
        "realWorldExample": "An electrician rewires a school computer lab using pure copper wire for high conductivity, joined with 60/40 tin-lead solder for solid electrical joints."
      },
      {
        "title": "3. Polymer Science: Thermoplastics vs Thermosetting Plastics",
        "content": "Plastics are synthetic organic polymer materials formed by chemically linking long repeating chains of hydrocarbon monomer molecules.",
        "bulletPoints": [
          "Thermoplastics (Linear Polymers): Composed of long molecular chains held together by weak secondary intermolecular (Van der Waals) bonds. When heated, the weak bonds loosen, allowing chains to slide past one another so the plastic softens and melts; upon cooling, it resolidifies. This heating and remolding cycle can be repeated indefinitely. They are 100% recyclable.",
          "Examples of Thermoplastics: Polyvinyl Chloride (PVC - rigid drainage pipes, wire insulation), Acrylic / Perspex (clear shatterproof sheets, car taillights), Polyethylene (polythene water sachets, Jerry cans), Polystyrene (insulated ice coolers, packaging foam), and Nylon (gears, fishing lines).",
          "Thermosetting Plastics (Cross-linked Polymers): Formed by polymer chains permanently connected by strong, rigid covalent cross-links in a three-dimensional network during primary heat curing. Once cured and set, reheating CANNOT loosen the chemical bonds. Further extreme heating causes them to char and burn rather than melt. They cannot be reshaped or recycled by melting.",
          "Examples of Thermosetting Plastics: Bakelite (Phenol-formaldehyde - electrical 3-pin plugs, sockets, saucepan handles), Melamine formaldehyde (laminated kitchen countertops, durable picnic plates), Urea-formaldehyde (electrical switch plates, wood adhesives), and Epoxy Resin (two-part structural adhesives)."
        ],
        "keyTakeaway": "Thermoplastics soften repeatedly with heat and can be recycled; thermosets undergo irreversible chemical cross-linking and never melt.",
        "realWorldExample": "An electrical contractor installs Bakelite switch plates because if an internal short circuit occurs, the Bakelite will not melt or catch fire, preventing electrical fires."
      }
    ],
    "summaryChecklist": [
      "Can list ferrous metals in order of carbon content (wrought iron, mild steel, medium steel, high-carbon steel, cast iron).",
      "Understands why cast iron is used for lathe beds (compressive strength and vibration damping).",
      "Memorized the compositions of Brass (Cu+Zn), Bronze (Cu+Sn), and Soft Solder (Sn+Pb).",
      "Can explain the molecular difference between thermoplastics (linear) and thermosets (cross-linked).",
      "Can give two practical applications each for PVC, Acrylic, Bakelite, and Melamine."
    ],
    "commonMistakes": [
      "Thinking that all metals rust; only ferrous metals containing iron can rust (forming iron oxide). Non-ferrous metals corrode or oxidize, but do not rust.",
      "Confusing Brass (Copper + Zinc) with Bronze (Copper + Tin).",
      "Believing that thermosetting plastics can be melted down and recycled like plastic water bottles.",
      "Assuming aluminum wire conducts electricity better than copper; copper is a superior conductor, though aluminum is lighter and cheaper for overhead cables."
    ],
    "beceExamTips": [
      "In BECE matching questions, associate Bakelite with electrical plugs and pan handles, and PVC with plumbing conduits.",
      "Always state the specific carbon percentage range when discussing mild steel (0.15%–0.30%) versus high carbon steel (0.7%–1.5%).",
      "For alloy questions, write the full names of the constituent metals clearly (e.g. Copper and Zinc for Brass)."
    ]
  },
  "jhs3-ctech-t4-technical-drawing-orthographic": {
    "topicId": "jhs3-ctech-t4-technical-drawing-orthographic",
    "title": "Technical & Engineering Drawing: Orthographic (1st & 3rd Angle) and Pictorial Projections",
    "overview": "The international language of engineers and designers: standard line conventions, precision dimensioning, first and third angle orthographic projection, and 3D pictorial sketching techniques (isometric and oblique).",
    "introduction": "In technical vocations, ideas must be communicated with geometric precision before fabrication begins. A verbal description or freehand artistic sketch is insufficient to build a mechanical gear, an engine cylinder, or an architectural roof truss. Technical drawing provides a universal graphical language governed by international standards (ISO / BS 8888) that allows any craftsman worldwide to fabricate an artifact to exact dimensions without ambiguity.",
    "realWorldContext": "Architects, structural engineers, and TVET machinists across Ghana rely on orthographic blueprints. When constructing the Pokuase Interchange or building school furniture, technicians read two-dimensional plans and elevations to machine steel components and pour reinforced concrete to millimeter accuracy.",
    "objectives": [
      "Apply standard BS 8888 line conventions (continuous thick, continuous thin, dashed, chain thin).",
      "Apply international rules of engineering dimensioning correctly.",
      "Construct First Angle and Third Angle orthographic projections from a 3D pictorial model.",
      "Differentiate between First and Third angle projection symbols.",
      "Construct 3D Isometric drawings (30° axes) and Oblique drawings (45° cavalier and cabinet)."
    ],
    "sections": [
      {
        "title": "1. Drawing Instruments and Standard Line Conventions",
        "content": "Every technical drawing utilizes standardized line weights and profiles to convey specific physical meanings according to BS 8888 / ISO conventions.",
        "bulletPoints": [
          "Drawing Instruments: T-square (for drawing horizontal lines and supporting set squares), 30°/60° set square, 45° set square, drawing board, compasses, dividers, and French curves.",
          "Continuous Thick Line (0.5–0.7 mm): Used for visible outlines, prominent borders, and visible edges of the component.",
          "Continuous Thin Line (0.25–0.35 mm): Used for projection/extension lines, dimension lines, leader lines, hatching lines (drawn at 45° for sections), and construction guidelines.",
          "Dashed Thin Line (0.35 mm): Formed by short, even dashes (approx. 3 mm long with 1 mm gaps); used to indicate hidden outlines and edges not visible from the viewing direction.",
          "Chain Thin Line (Long-and-Short Dash): Consists of an alternating long dash (10–12 mm) and a short dot/dash (1–2 mm); used for center lines of cylinders, circles, pitch circles, and planes of symmetry.",
          "Continuous Thin Wavy / Zig-zag Line: Used to show the boundary of an interrupted or broken view."
        ],
        "keyTakeaway": "Line contrast is the hallmark of professional technical drawing; visible outlines must stand out boldly against faint construction and dimension lines.",
        "realWorldExample": "A draftsperson drawing a machine casting uses bold continuous lines for the outer casting body and chain thin lines to denote the center of drilled bolt holes."
      },
      {
        "title": "2. Rules and Methods of Dimensioning",
        "content": "Dimensioning is the systematic process of adding numerical measurements, tolerances, and surface notes to a technical drawing.",
        "bulletPoints": [
          "Extension Lines: Thin continuous lines projected perpendicular to the feature being measured; must start with a visible 1 mm gap from the object outline and extend 2–3 mm beyond the dimension line.",
          "Dimension Lines: Thin lines placed parallel to the dimensioned feature, terminating in sharp, closed, filled arrowheads (length-to-width ratio of 3:1).",
          "Dimension Hierarchy: Smaller dimensions must be placed closest to the object outline, with larger overall dimensions placed progressively outward. Dimension lines must never cross extension lines or each other unnecessarily.",
          "Units Convention: All dimensions in engineering drawings are understood to be in millimeters (mm); the letters 'mm' are strictly omitted from the numerals on the drawing sheet.",
          "Aligned Dimensioning System: Numerals are placed centrally above the horizontal dimension line and aligned parallel to inclined dimension lines so they can be read from the bottom or right side of the sheet.",
          "Unidirectional Dimensioning System: All numerals are placed horizontally in a central break in the dimension line and read strictly from the bottom of the drawing sheet."
        ],
        "keyTakeaway": "Never crowd dimensions inside the body of the drawing; keep them outside object outlines with clean arrowheads.",
        "realWorldExample": "A student drawing a mortise and tenon joint dimensions the 15 mm tenon thickness outside the elevation, using aligned text above the dimension line."
      },
      {
        "title": "3. Orthographic and Pictorial Projections",
        "content": "Orthographic projection flattens a three-dimensional object into two-dimensional views viewed perpendicular to the projection planes.",
        "bulletPoints": [
          "First-Angle Orthographic Projection: Widely used in Ghana and the UK. The object is positioned in the first quadrant (between the observer and the projection plane). What is seen from above (Plan) is projected onto the bottom plane and drawn BELOW the Front Elevation. What is seen from the left is drawn on the RIGHT of the Front Elevation.",
          "Third-Angle Orthographic Projection: Widely used in the USA and Canada. The projection plane is positioned between the observer and the object. The Plan is drawn ABOVE the Front Elevation; the Left End view is drawn on the LEFT side.",
          "Projection Symbols: Both projections are identified by standard symbols featuring a truncated cone (frustum). In First Angle, the concentric circle view is placed to the right of the tapered frustum. In Third Angle, the circles are placed to the left.",
          "Isometric Projection: A 3D pictorial drawing where features are aligned along three isometric axes: one vertical axis and two receding axes inclined at 30° to the horizontal baseline. Circles on isometric planes appear as ellipses drawn using the four-center arc method.",
          "Oblique Projection: The front face is drawn true to shape and size parallel to the viewer. Receding lines are angled at 45°: in Cavalier projection, receding lines are drawn to full scale; in Cabinet projection, receding lines are drawn to half-scale (1:2) to produce a realistic, un-distorted visual appearance."
        ],
        "keyTakeaway": "In First Angle: Plan is BELOW Front Elevation; in Third Angle: Plan is ABOVE Front Elevation.",
        "realWorldExample": "A Ghanaian BECE candidate draws the three orthographic views of a shaped wooden stepping block, placing the Plan directly below the Front Elevation in accordance with First Angle rules."
      }
    ],
    "summaryChecklist": [
      "Can identify and draw the four standard line types (thick, thin, dashed, chain).",
      "Knows the correct dimensioning rules (1 mm gap, filled 3:1 arrowheads, mm omitted).",
      "Can draw the First Angle orthographic layout: Front Elevation, Plan below, End view adjacent.",
      "Recognizes the standard truncated cone frustum symbol for First and Third angle projection.",
      "Can set up isometric 30° axes and oblique 45° axes accurately."
    ],
    "commonMistakes": [
      "Drawing the Plan above the Front Elevation in First Angle projection (that is Third Angle).",
      "Writing 'mm' after every dimension numeral on the drawing sheet.",
      "Drawing open, un-filled, or blunt arrowheads on dimension lines.",
      "Using a 45° angle instead of 30° for isometric receding axes."
    ],
    "beceExamTips": [
      "Always use your T-square and 30°/60° set square together on the drawing board to guarantee sharp, parallel lines.",
      "When projecting between views, use faint 45° mitre projection lines in the bottom-right corner to transfer dimensions from the Plan to the End Elevation.",
      "Remember that hidden detail must be drawn with neat, evenly spaced dashed lines."
    ]
  },
  "jhs3-ctech-t5-measuring-marking-tools": {
    "topicId": "jhs3-ctech-t5-measuring-marking-tools",
    "title": "Measuring, Marking-Out, and Testing Tools in Production Workshops",
    "overview": "A rigorous guide to measurement science and layout techniques across woodworking, metal fabrication, and masonry: precision linear rules, squares, bevels, gauges, punches, dividers, and precision micrometers.",
    "introduction": "The timeless craftsmen's maxim says: 'Measure twice, cut once.' Every successful manufacturing enterprise depends upon exact measurement and marking-out. If a component is marked out just two millimeters too small, it cannot be added back; it becomes expensive scrap timber or steel. Mastering measuring, squaring, and precision layout instruments is the foundational skill separating an amateur from a master technician.",
    "realWorldContext": "In precision engineering workshops across Takoradi Port and Tema drydocks, components like engine valves, pump shafts, and gear teeth must be machined to tolerances of 0.01 mm. Technicians use Vernier calipers and micrometer screw gauges daily to verify exact physical dimensions against engineering blueprints.",
    "objectives": [
      "Differentiate between measuring tools, marking-out tools, and testing tools.",
      "Describe the parts, maintenance, and functions of the try square, sliding bevel, and spirit level.",
      "Differentiate between woodworking gauges: marking gauge, mortise gauge, and cutting gauge.",
      "Demonstrate the use of metalworking layout tools: scriber, center punch, dot punch, and surface plate.",
      "Read linear measurements accurately on a metric Vernier Caliper (0.02 mm) and Micrometer Screw Gauge (0.01 mm)."
    ],
    "sections": [
      {
        "title": "1. Linear Measuring and Geometric Testing Tools",
        "content": "Tools in this category are designed to establish physical dimensions or verify geometric relationships such as 90° squareness and flatness.",
        "bulletPoints": [
          "Steel Rule: Made of tempered stainless or spring steel; graduated in millimeters, half-millimeters, and inches. Has zero datum located exactly on the end edge to allow direct butt measurements.",
          "Flexible Steel Tape Measure: Spring-loaded retractable tape housed in a plastic/metal casing with a self-adjusting sliding hook at the tip (the rivet play compensates for the hook thickness during inside vs outside measurements).",
          "Try Square: Consists of a thick wood (rosewood/ebony) or cast-iron stock with a brass face and a thin steel blade fixed at an exact 90° angle. Used for testing the squareness of planed surfaces and scribing lines perpendicular to a true face edge.",
          "Miter Square: Similar to a try square, but the blade is permanently set at 45° to the stock; used for marking and testing 45° picture frames and miter joints.",
          "Sliding Bevel: Features an adjustable steel blade that pivots in a slotted stock and clamps tightly at any desired angle with a knurled brass thumbscrew; used for transferring and testing bevels and chamfers.",
          "Spirit Level: Uses a slightly curved sealed glass vial filled with alcohol or spirit containing a single air bubble; indicates true horizontal level or vertical plumb when the bubble centers between two index lines."
        ],
        "keyTakeaway": "Never drop a try square; impact springs the 90° blade joint out of true, rendering all subsequent woodwork inaccurate.",
        "realWorldExample": "A carpenter preparing mahogany timber for a dining table checks the edge with a try square to ensure the face edge is at an exact 90° angle to the face side."
      },
      {
        "title": "2. Woodworking Marking-Out Gauges",
        "content": "Gauges are specialized woodworking layout tools used to scribe lines parallel to a prepared face edge or face side along the grain.",
        "bulletPoints": [
          "Marking Gauge: Consists of a wooden stock (head) that slides along a graduated stem (beam) and is locked in place with a thumbscrew. A single steel conical spur (pin) projects from the stem. Used to scribe a single line parallel to an edge along the grain.",
          "Mortise Gauge: Features two spurs on the stem: one fixed spur and one movable spur actuated by a brass thumb-slide or screw at the end of the stem. Allows both parallel boundary lines of a mortise or tenon to be scribed simultaneously in one stroke, matching the chisel width perfectly.",
          "Cutting Gauge: Similar to a marking gauge, but the conical spur is replaced by a miniature, razor-sharp steel knife blade held by a wedge or brass screw. Specifically designed for marking across the wood grain, slicing severed fibers cleanly without tearing them.",
          "Marking Knife: A steel knife with a single-bevel cutting edge; used alongside a try square to score deep, clean layout lines across timber fibers for tenon shoulders and dovetails."
        ],
        "keyTakeaway": "Use a marking gauge along the grain, but switch to a cutting gauge or marking knife when laying out lines across the grain.",
        "realWorldExample": "When cutting tenons for a classroom door frame, a woodworker sets the mortise gauge to 15 mm (matching the 15 mm mortise chisel) and scores both tenon cheeks in a single pass."
      },
      {
        "title": "3. Metalworking Layout Tools and Precision Instruments",
        "content": "Metal surfaces require harder layout tools that can scratch clear witness lines into metal oxide coatings, as well as micrometer instruments for micro-scale measurements.",
        "bulletPoints": [
          "Scriber: Made of hardened high-carbon tool steel with needle-sharp tips ground to an included angle of 15°–20°; used like a pencil to scratch fine, permanent lines on metal surfaces coated with layout dye/chalk.",
          "Center Punch (90° Point): Used with a ball-peen hammer to create a broad conical indentation that guides and centers the chisel edge of a twist drill, preventing drill wander.",
          "Dot / Prick Punch (60° Point): Features a sharper 60° (or 30°) point; used to make small, light indentation witness dots along scribed layout lines so the profile remains visible if layout dye rubs off.",
          "Engineers' Dividers: Steel legs with hardened conical points; used for scribing arcs, circles, and stepping off equal pitch distances on metal.",
          "Outside and Inside Calipers: Bow-legged (outside) and straight-legged (inside) calipers used to transfer external and internal diameters from workpieces to steel rules.",
          "Micrometer Screw Gauge (0.01 mm precision): Works on the lead-screw principle (pitch = 0.50 mm per complete rotation of the thimble; thimble is divided into 50 equal divisions, giving 0.50 / 50 = 0.01 mm). Reading formula: Main Sleeve (mm) + Half-mm (if exposed) + (Thimble division × 0.01 mm).",
          "Vernier Caliper (0.02 mm precision): Features a fixed main scale in millimeters and a sliding Vernier scale (49 mm divided into 50 divisions, yielding a difference of 0.02 mm). Reading formula: Main scale mm + (Coinciding Vernier line × 0.02 mm)."
        ],
        "keyTakeaway": "Center punch = 90° for seating drill bits; Dot punch = 60° for layout witness marks; Micrometer reads to 0.01 mm.",
        "realWorldExample": "A machine operator measures the diameter of a turned bronze bushing using a 0–25 mm micrometer: sleeve shows 18.5 mm, thimble line 22 aligns = 18.50 + 0.22 = 18.72 mm."
      }
    ],
    "summaryChecklist": [
      "Can explain the difference between a try square, sliding bevel, and miter square.",
      "Understands why a cutting gauge is used across the grain instead of a marking gauge.",
      "Can differentiate the point angles and functions of a Center Punch (90°) and Dot Punch (60°).",
      "Can calculate micrometer readings to 0.01 mm accuracy.",
      "Can calculate Vernier caliper readings to 0.02 mm accuracy.",
      "Knows how to care for and store precision measuring instruments."
    ],
    "commonMistakes": [
      "Using a 60° dot punch to center a large twist drill, causing the drill tip to skate off mark.",
      "Using a pencil on hot metal or oily steel instead of a hardened steel scriber.",
      "Over-tightening the ratchet thimble on a micrometer, springing the U-frame out of calibration.",
      "Forgetting to add the 0.50 mm lower sleeve line when reading an external micrometer."
    ],
    "beceExamTips": [
      "When asked the point angle of a center punch, write 90° and state its purpose: 'to seat and locate the tip of a drill bit'.",
      "Explain the sliding hook on a tape measure: 'the loose rivets allow the hook to slide by its own thickness, giving accurate inside and outside measurements'.",
      "Practice reading micrometer diagrams carefully: verify whether the bottom 0.5 mm line is exposed before the thimble edge."
    ]
  },
  "jhs3-ctech-t6-cutting-shaping-tools": {
    "topicId": "jhs3-ctech-t6-cutting-shaping-tools",
    "title": "Cutting, Shaping, Boring and Abrading Tools: Saws, Chisels, Planes and Drills",
    "overview": "A comprehensive technical study of stock removal tools in woodworking and metal fabrication: saw tooth geometry and kerf, bench plane mechanics, chisel edge sharpening, boring bits, files, and workshop abrasives.",
    "introduction": "Shaping raw stock into functional components requires cutting, paring, planing, boring, and smoothing. Every cutting tool operates on the fundamental physical principle of the wedge: converting driving force into shearing action that severs material fibers. To achieve fine craftsmanship, a technician must understand how cutting angles, tool maintenance, and proper body mechanics interact to produce smooth, accurate cuts.",
    "realWorldContext": "In commercial joinery shops in Kumasi and furniture factories in Accra, woodworkers shape hardwoods into fine cabinetry. Using the wrong saw tears delicate wood grain, while using a plane with a poorly adjusted cap iron causes deep grain tear-out. Mastery of these hand tools is the hallmark of professional craftsmanship.",
    "objectives": [
      "Explain saw tooth geometry (rip vs crosscut) and the mechanical purpose of saw kerf.",
      "Identify the parts and explain the operational tuning of an adjustable bench plane.",
      "Classify woodworking chisels (firmer, bevelled-edge, mortise) and metal cold chisels.",
      "Describe boring tools (ratchet brace, hand drill, twist drills, auger bits, Forstner bits).",
      "Classify metal files by cut and tooth coarseness, and explain file carding."
    ],
    "sections": [
      {
        "title": "1. Woodworking Saws: Tooth Geometry, Kerf, and Set",
        "content": "Hand saws are engineered with distinct tooth shapes depending on whether cutting occurs parallel to or across the wood fibers.",
        "bulletPoints": [
          "Saw Kerf: The width of the cut slot made by the saw blade in the workpiece.",
          "Saw Tooth Set: Bending alternate saw teeth slightly to the left and right. This produces a kerf slightly wider than the saw blade plate, preventing the saw from binding, rubbing, or jamming due to side friction.",
          "Rip Saw (4–6 points per inch): Teeth are filed flat across the front at an angle of 90° to the blade, acting like a series of tiny vertical chisels; designed strictly for cutting parallel to the grain (ripping).",
          "Crosscut Saw (6–8 points per inch): Teeth are filed with bevels (at 45° to the blade face), acting like a series of razor-sharp knife edges that score and slice severed fibers across the grain.",
          "Tenon Saw (12–14 points per inch): A fine-toothed crosscut saw with a heavy brass or steel stiffening rib fitted along the top edge; keeps the thin blade perfectly rigid for accurate joinery cutting (tenons, shoulders).",
          "Dovetail Saw (16–22 points per inch): A smaller, delicate version of the tenon saw with very fine teeth and a thin blade; used for cutting delicate dovetail pins and tails.",
          "Coping Saw: Features a thin, flexible steel blade held in a C-shaped steel wire frame; the blade can be rotated 360° to cut tight curves, circles, and internal cutouts in thin timber and plastics."
        ],
        "keyTakeaway": "Rip teeth chisel parallel to grain; crosscut teeth slice across grain; alternate tooth set prevents blade jamming.",
        "realWorldExample": "When cutting the cheeks of a tenon, a carpenter uses a tenon saw with its stiff brass back to cut dead straight down the grain line without blade wobble."
      },
      {
        "title": "2. Bench Planes: Anatomy, Function, and Tuning",
        "content": "Bench planes use an adjustable cutting iron held in an iron or wooden body to shave thin, uniform layers of wood from surfaces and edges.",
        "bulletPoints": [
          "Jack Plane (350–380 mm long): The general-purpose workhorse plane used for initial truing, leveling rough-sawn surfaces, and rapid stock removal.",
          "Trying Plane (Jointer Plane: 550–600 mm long): Features an exceptionally long flat sole that bridges hollows and high spots; used to shoot long, perfectly straight edges for edge-to-edge glue joints.",
          "Smoothing Plane (200–230 mm long): Short, compact plane (200–230 mm) used for taking micro-thin shavings for the final surface finish before sanding.",
          "Spoke Shave: A short-soled plane with two lateral handles; used for smoothing curved surfaces (convex and concave shapes like chair legs and tool handles).",
          "Cutting Iron (Blade): Made of high-carbon or tool steel; ground to a 25° bevel angle and honed on an oilstone to a 30° cutting angle.",
          "Cap Iron (Chip Breaker): A curved steel plate screwed tightly to the front of the cutting iron, set 0.5–1.0 mm behind the cutting edge. Performs two vital functions: 1. It stiffens the blade to eliminate chatter; 2. Its curved lip curls and snaps wood shavings immediately after they lift, preventing the shaving from splitting the wood grain ahead of the cut.",
          "The Frog: The internal wedge casting that supports the cutting iron at a standard pitch angle of 45° to the sole.",
          "Adjusting Mechanism: Brass knurled nut controls depth of cut; lateral adjustment lever levels the blade horizontally across the mouth."
        ],
        "keyTakeaway": "A properly tuned plane with its cap iron set 0.5 mm from the sharp cutting edge produces glass-smooth surfaces without grain tear-out.",
        "realWorldExample": "A woodworker smoothing an interlocked Sapele grain sets the cap iron very close (0.5 mm) to the cutting edge to prevent tear-out on reversing grain."
      },
      {
        "title": "3. Chisels, Boring Tools, Files, and Maintenance",
        "content": "Precision shaping requires specialized hand tools for paring sockets, boring clean cylindrical holes, and abrading metals.",
        "bulletPoints": [
          "Firmer Chisel: A general-purpose chisel with square rectangular edges; strong enough for light mallet work and general paring.",
          "Bevel-Edge Chisel: The longitudinal edges are chamfered along the blade, allowing the cutting corner to reach into acute internal angles (essential for cleaning out dovetail corners).",
          "Mortise Chisel: Has a very thick, heavy rectangular blade designed to withstand heavy mallet blows and prying leverage when cutting deep mortises.",
          "Cold Chisel (for metals): Made of octagonal high-carbon steel; cutting edge is ground to an included angle of 60° for mild steel. Types: Flat chisel (cutting sheet metal/rivets), Cross-cut chisel (cutting keyways), Diamond-point (cutting V-grooves).",
          "Boring Tools: Carpenters' Ratchet Brace (rotates bits in confined spaces); Hand Drill (for holes up to 6 mm in wood/metal); Twist Drill Bits (helical flutes clear swarf); Auger Bits (screw-threaded lead point and spurs for deep clean holes in timber); Forstner Bits (flat-bottomed holes for concealed cabinet hinges).",
          "Files: Classifications: Cut (Single cut for smooth finishing; Double cut for rapid metal removal; Rasp cut with individual raised teeth for wood/leather). Tooth coarseness: Rough, Bastard, Second-cut, Smooth, and Dead-smooth.",
          "Pinning of Files: Soft metal chips clogging the file teeth; removed with a File Card (a stiff wire brush mounted on wood). Applying chalk to file teeth reduces pinning during aluminum filing."
        ],
        "keyTakeaway": "Always push chisels away from yourself; never use a metal hammer on a wooden chisel handle; clean files with a file card.",
        "realWorldExample": "A student cutting a mortise uses a wooden mallet with a mortise chisel, keeping both hands behind the cutting edge for absolute safety."
      }
    ],
    "summaryChecklist": [
      "Can explain why hand saw teeth are set alternately to produce a clearance kerf.",
      "Differentiates between Rip saw teeth (chisels) and Crosscut saw teeth (knives).",
      "Can label parts of a bench plane (sole, frog, cutting iron, cap iron, mouth).",
      "Explains the two functions of the cap iron (chip breaker).",
      "Differentiates Firmer, Bevel-edge, and Mortise chisels.",
      "Explains file pinning and how to use a file card."
    ],
    "commonMistakes": [
      "Using a metal ball-peen hammer on a wooden chisel handle, causing the wooden ferrule to split.",
      "Holding the workpiece with one hand while paring with a chisel in the other (slips cause severe hand wounds).",
      "Filing on the backward stroke, which rounds and blunts the forward-cutting file teeth.",
      "Operating a plane without setting the cap iron close to the cutting edge, leading to torn timber grain."
    ],
    "beceExamTips": [
      "When asked the grinding and honing angles of a woodworking plane iron: Grinding angle = 25°, Honing/sharpening angle = 30°.",
      "In BECE saw identification questions, look for the brass stiffener: with brass back = Tenon saw; thin blade in frame = Coping saw.",
      "State the function of saw set clearly: 'to make the kerf wider than the saw blade to prevent binding and friction'."
    ]
  },
  "jhs3-ctech-t7-wood-metal-joining": {
    "topicId": "jhs3-ctech-t7-wood-metal-joining",
    "title": "Joining and Fastening Methods: Woodworking Joints, Soldering, Brazing and Mechanical Fasteners",
    "overview": "A comprehensive analysis of fabrication joinery: woodworking framing and carcass joints, modern adhesives, mechanical threaded fasteners, and thermal metal joining (soft soldering, hard soldering, and brazing).",
    "introduction": "No complex technical structure can be fabricated from a single piece of raw stock. Chairs, roof trusses, water pipes, vehicle frames, and electrical appliances are assemblies of individual components joined together. Whether through interlocking timber joints, high-strength chemical adhesives, threaded fasteners, or thermal fusion, a technologist must select the ideal joining method to balance structural strength, aesthetics, and ease of assembly.",
    "realWorldContext": "In Ghana's furniture workshops and building construction sites, joints dictate structural lifespan. A dining table joined with correctly proportioned mortise and tenons lasts for generations, while a poorly proportioned butt joint collapses under heavy loads. Similarly, plumbing in Ghanaian multi-story buildings relies on brazed copper fittings that withstand high hydraulic pressure.",
    "objectives": [
      "Classify woodworking joints into framing, widening, and carcass/box categories.",
      "Calculate proportional dimensions for a standard mortise and tenon joint.",
      "Select appropriate modern adhesives (PVA, contact cement, epoxy resin) for specific materials.",
      "Identify threaded fasteners (wood screws, coach bolts, machine screws, rivets).",
      "Compare soft soldering and brazing in terms of temperature, flux, filler rod, and joint strength."
    ],
    "sections": [
      {
        "title": "1. Woodworking Framing, Carcass, and Widening Joints",
        "content": "Wood joints are designed to counteract timber shrinkage and transfer mechanical loads across interconnected members.",
        "bulletPoints": [
          "Framing Joints: Used for skeletal frameworks (doors, window sashes, chair legs, table aprons). Examples: Mortise and Tenon, Haunched Mortise and Tenon, Bridle Joint, Miter Joint, and Halving Joints (corner, tee, and cross-halving).",
          "Mortise and Tenon Proportional Rule: The thickness of the tenon should be one-third (1/3) of the overall thickness of the framing timber member. For a 45 mm thick rail, tenon thickness = 15 mm. The tenon width should not exceed 5–6 times its thickness to prevent joint distortion.",
          "Haunched Mortise and Tenon: Features a shortened stub (haunch) at the outer edge of the tenon. The haunch fills the panel groove, prevents the rail from twisting, and preserves a solid end margin (relish) on the stile, preventing the corner from blowing out under wedging.",
          "Carcass / Box Joints: Used for solid cabinets, bookcases, and drawers. Examples: Through Dovetail, Lap/Half-blind Dovetail (for drawer fronts so end-grain is hidden), Common Housing, and Stopped Housing (groove terminates before face).",
          "The Dovetail Principle: Wedge-shaped 'tails' interlock mechanically with 'pins'. The joint resists tensile pulling forces completely in one direction, making it the premier joint for drawer construction.",
          "Widening Joints: Used to glue narrow planks edge-to-edge to form wide panels (tabletops, desktop surfaces). Examples: Plain butt edge-to-edge joint, Dowelled joint, Tongue and Groove (T&G), and Loose Tongue joint."
        ],
        "keyTakeaway": "Tenon thickness equals 1/3 timber thickness; dovetails resist tensile pull; haunches prevent framing rails from twisting.",
        "realWorldExample": "A carpenter building high school student desks uses mortise and tenon joints pegged with hardwood dowels to ensure the desks withstand decades of heavy use."
      },
      {
        "title": "2. Adhesives and Mechanical Fasteners",
        "content": "Modern synthetic adhesives and metal fasteners provide rapid, rigid connections across timber, plastics, and metals.",
        "bulletPoints": [
          "Polyvinyl Acetate (PVA): White, water-based non-toxic glue; excellent for interior furniture joinery; requires clamping pressure for 2–4 hours; non-waterproof (unless formulated as exterior D3/D4).",
          "Contact Adhesive (Neoprene / Rubber-based): Applied thinly to both mating surfaces, allowed to air-dry until tacky (10–15 mins), then pressed together; bonds instantly on contact without clamping. Used for bonding Formica / plastic laminates to wood countertops.",
          "Epoxy Resin: A two-part thermosetting adhesive (resin + polyamine hardener mixed in equal parts); fills gaps completely, cures by chemical reaction without shrinking, 100% waterproof; bonds wood, metal, glass, and ceramics.",
          "Urea-Formaldehyde (Synthetic Resin): Powder mixed with water; produces exceptionally strong, rigid, water-resistant joints for exterior doors and boatbuilding.",
          "Wood Screws: Feature a threaded shank that cuts into wood fibers. Heads: Countersunk (sits flush), Round head (decorative, holds thin metal), Raised head. Drive slots: Traditional slotted or Phillips/Pozidriv cross-head.",
          "Bolts and Washers: Machine bolts and Coach bolts (square neck beneath round head locks into wood to prevent spinning when nut is tightened); washers distribute clamping pressure and prevent surface crushing.",
          "Pop Rivets: Blind fasteners installed using a lazy-tong or hand riveter to join sheet metal panels where access is available from only one side."
        ],
        "keyTakeaway": "Use PVA for wooden furniture, Contact adhesive for countertop laminates, and Epoxy for gap-filling bonds between dissimilar materials.",
        "realWorldExample": "A kitchen cabinet installer coats plywood with contact adhesive to bond a sheet of Formica laminate, rolling it firmly for instant adhesion without clamps."
      },
      {
        "title": "3. Thermal Metal Joining: Soft Soldering, Brazing, and Welding",
        "content": "Thermal joining uses heat to bond metals, either by melting a lower-melting-point filler metal (soldering/brazing) or by melting the parent metals together (welding).",
        "bulletPoints": [
          "The Role of Flux: When metals are heated in air, oxygen instantly reacts to form an insulating oxide film that prevents molten filler metal from wetting or bonding to the base metal. Flux chemically dissolves existing surface oxides, prevents re-oxidation during heating, and reduces liquid surface tension, allowing molten filler metal to flow into the joint capillary space.",
          "Soft Soldering: Operates strictly BELOW 450°C (typically 180°C–230°C). Filler metal: Soft solder alloy of Tin (60%) and Lead (40%), or lead-free tin-copper-silver. Flux: Active Zinc Chloride ('killed spirits') for sheet metal plumbing, or passive Resin for electronic circuits (acid fluxes corrode delicate electronics). Joint strength: Low to moderate shear strength; excellent for electrical connections and leak-tight liquid seams.",
          "Brazing (Hard Soldering): Operates strictly ABOVE 450°C (typically 650°C–850°C) using an oxy-acetylene torch or gas-air torch. Filler rod: Brass spelter (Copper-Zinc alloy) or Silver-brazing alloy. Flux: Borax paste mixed with water. Joint strength: Very high mechanical strength, approaching the strength of the base parent metal.",
          "Capillary Attraction: The physical force that draws molten solder or braze alloy into the microscopic gap (0.05–0.15 mm) between closely fitted metal components.",
          "Fusion Welding: Parent metals are heated to their actual melting points (e.g. steel at 1450°C–1530°C) using an Electric Arc or Oxy-acetylene flame to fuse them into a single monolithic pool."
        ],
        "keyTakeaway": "Soft soldering: <450°C with Tin/Lead solder; Brazing: >450°C with Brass spelter; Flux dissolves oxides so molten filler metal wets the joint.",
        "realWorldExample": "An air conditioning technician in Tema brazes copper refrigeration pipes using an oxy-acetylene torch and silver-brazing alloy with borax flux to handle high gas pressure."
      }
    ],
    "summaryChecklist": [
      "Can state the 1/3 proportional rule for mortise and tenon joint calculations.",
      "Explains why dovetail joints are used for drawers (mechanical tensile pull resistance).",
      "Selects the right adhesive: PVA (wood), Contact cement (laminate), Epoxy (metals/gap-filling).",
      "Understands the function of flux in soldering and brazing.",
      "Contrasts soft soldering (<450°C) with brazing (>450°C) under temperature, filler metal, and strength."
    ],
    "commonMistakes": [
      "Using acid flux (zinc chloride) on electronic circuit boards, which corrodes fine copper tracks.",
      "Trying to solder or braze metal surfaces without cleaning off rust, grease, or scale first.",
      "Cutting tenons half the timber thickness instead of one-third (1/3), leaving the mortise walls too thin.",
      "Assembling contact adhesive joints wet, instead of allowing both surfaces to dry to a tacky state."
    ],
    "beceExamTips": [
      "Always state the mathematical rule in mortise and tenon calculations: Tenon thickness = (1/3) × Timber thickness.",
      "In BECE soldering questions, define flux accurately: 'a chemical agent that dissolves oxides, prevents re-oxidation, and aids molten filler flow'.",
      "Remember that soft soldering operates below 450°C, while brazing operates above 450°C."
    ]
  },
  "jhs3-ctech-t8-food-commodities-preservation": {
    "topicId": "jhs3-ctech-t8-food-commodities-preservation",
    "title": "Food Commodities, Spoilage, and Traditional & Modern Preservation Technologies",
    "overview": "A scientific exploration of agricultural food commodities, the biochemistry of food spoilage, indigenous Ghanaian preservation systems (sun-drying, hot smoking, salting, fermentation), and modern industrial preservation technologies.",
    "introduction": "Food is essential for human survival, yet agricultural produce begins to deteriorate immediately after harvest or slaughter. In tropical climates like Ghana's, elevated ambient temperatures and high relative humidity accelerate food spoilage. Without effective preservation technologies, substantial portions of our fish, meat, cassava, tomatoes, and grains would be lost to post-harvest decay. Career technology equips students with the scientific principles needed to extend food shelf life, maintain nutritional quality, and prevent fatal food-borne intoxications.",
    "realWorldContext": "Post-harvest loss in Ghana affects up to 30% of harvested grains and 50% of perishable vegetables like tomatoes. Agro-processing enterprises in Techiman, Tamale, and coastal fishing communities in Elmina and Chorkor use smoking, drying, and modern vacuum packaging to transform perishable raw harvests into stable commodities for national distribution and export.",
    "objectives": [
      "Classify food commodities according to origin and perishability (perishable, semi-perishable, shelf-stable).",
      "Identify the primary agents of food spoilage: enzymes, microorganisms, and chemical oxidation.",
      "Explain the environmental conditions required for microbial growth (temperature danger zone, moisture, pH).",
      "Explain the scientific principles of traditional Ghanaian food preservation: smoking, dry-salting, sun-drying, and fermentation.",
      "Compare modern preservation techniques: refrigeration, freezing, pasteurization, canning, and chemical additives."
    ],
    "sections": [
      {
        "title": "1. Food Commodities and the Mechanisms of Spoilage",
        "content": "Food commodities are biological tissues of plant or animal origin that undergo natural decay through internal biochemical reactions and microbial colonization.",
        "bulletPoints": [
          "Classification by Perishability: Perishable foods spoil within 1–2 days at room temperature (fresh fish, meat, milk, leafy vegetables, ripe tomatoes); Semi-perishable foods keep for 1–3 weeks in cool, dry storage (tubers like yam, cassava, sweet potato, onions, plantains); Shelf-stable (Non-perishable) foods keep for months or years without spoiling if kept dry (dry maize, cowpeas, millet, sorghum, rice, refined sugar).",
          "Autolysis by Endogenous Enzymes: Biological enzymes naturally present in plant and animal tissues continue to catalyze chemical reactions after harvest/death. For example, polyphenol oxidase causes enzymatic browning in peeled plantains and yams; proteolytic enzymes break down muscle proteins, making meat soft and watery.",
          "Microbial Spoilage: 1. Bacteria: Single-celled prokaryotes that cause putrefaction, souring of milk, and food poisoning; 2. Molds: Multicellular filamentous fungi that form fuzzy mycelium on bread, grains, and citrus; produce deadly mycotoxins like Aflatoxin on improperly dried groundnuts and maize; 3. Yeasts: Single-celled fungi that ferment sugars into alcohol and carbon dioxide, causing fruit juices to ferment and turn sour.",
          "Oxidation & Rancidity: Atmospheric oxygen reacts with unsaturated fatty acids in vegetable oils, fish oil, and animal fats, creating peroxides that produce foul, sour 'rancid' odors and toxic free radicals.",
          "The Bacterial Growth 'Danger Zone': Microorganisms multiply exponentially between 5°C and 63°C, with optimum growth near human body temperature (37°C). Keeping food hotter than 63°C or colder than 5°C suppresses microbial growth."
        ],
        "keyTakeaway": "Food spoilage is caused by natural enzymes, bacteria, molds, yeasts, and lipid oxidation; keeping food outside the 5°C–63°C danger zone prevents decay.",
        "realWorldExample": "A market trader in Agbogbloshie notices sliced yams turning brown within minutes; this is enzymatic browning catalyzed by polyphenol oxidase reacting with atmospheric oxygen."
      },
      {
        "title": "2. Traditional Ghanaian Food Preservation Technologies",
        "content": "Indigenous Ghanaian food technologies leverage natural thermodynamic and chemical principles to preserve seasonal bumper harvests.",
        "bulletPoints": [
          "Sun Drying: The oldest and cheapest preservation method. Grains (maize, rice, sorghum), legumes (cowpeas), and cocoa beans are spread on mats or concrete drying floors under direct solar radiation. Solar heat evaporates free moisture, reducing water activity ($A_w$) below 0.65, where microorganisms and molds cannot metabolize or reproduce.",
          "Smoke Curing (Hot Smoking): Widely practiced in coastal and riverine Ghana (e.g. Chorkor smoker oven for herrings, mackerel, catfish). Wood smoke contains volatile phenolic compounds, formaldehyde, and acetic acid that act as potent natural bactericides and antioxidants. Simultaneously, convective heat from the fire dries out moisture from fish tissues, forming a firm, protective outer pellicle.",
          "Dry Salting (Osmotic Dehydration): Used to prepare 'Koobi' (salted tilapia), 'Momoni', and salted beef. Solid sodium chloride applied heavily to the surface creates an intensely hypertonic environment. Water is drawn out of bacterial cells and muscle tissues through Osmosis. Dehydrated bacterial cells undergo plasmolysis, causing cellular collapse and arresting putrefactive enzyme activity.",
          "Fermentation: Used to produce Ga Kenkey, Fante Kenkey, Gari, and Agbelima. Clean soaked maize or cassava is inoculated with natural lactic acid bacteria (Lactobacillus species). The bacteria ferment starches into lactic acid, dropping the pH below 4.0. Pathogenic bacteria like Salmonella and Vibrio cholerae cannot survive in this acidic environment."
        ],
        "keyTakeaway": "Sun-drying reduces moisture; smoking deposits antimicrobial chemicals; salting dehydrates via osmosis; fermentation lowers pH with lactic acid.",
        "realWorldExample": "Fishermen in Tema preserve excess sardinella catches in a Chorkor smoker oven, reducing moisture content and impregnating the fish with antimicrobial smoke phenols to preserve it for up to six months."
      },
      {
        "title": "3. Modern Food Preservation and Food Safety Regulations",
        "content": "Modern industrial food processing relies on precisely calibrated thermal engineering, cold chain logistics, and hermetic packaging.",
        "bulletPoints": [
          "Refrigeration (0°C to 4°C): Lowers temperature to slow down bacterial reproduction and enzymatic action; extends shelf life of perishables by days without altering taste, texture, or vitamins.",
          "Freezing (-18°C or below): Converts liquid water into ice crystals, arresting all microbial growth and enzyme reactions; preserves fish and meat for 6–12 months.",
          "Pasteurization: High-Temperature Short-Time (HTST) treatment: milk is heated to 72°C for 15 seconds, followed by immediate rapid cooling below 4°C. Eliminates vegetative pathogenic bacteria (Mycobacterium tuberculosis, Salmonella) without denaturing heat-sensitive vitamins.",
          "Sterilization / Canning: Food is packed into airtight tin cans or glass jars, hermetically sealed under vacuum, and heated in a pressure retort at 121°C for 15–20 minutes. The high pressurized steam destroys all vegetative cells and heat-resistant bacterial endospores (specifically Clostridium botulinum). Unopened cans remain shelf-stable at room temperature for years.",
          "Chemical Preservatives: Sodium benzoate (in fruit drinks), sodium nitrite (in cured meats), and sulfur dioxide (in dried fruits) inhibit microbial proliferation.",
          "Food Standards Authority: In Ghana, the Food and Drugs Authority (FDA Ghana) and Ghana Standards Authority (GSA) enforce hygienic packaging, date marking (Best Before vs Expiry Date), and food safety testing."
        ],
        "keyTakeaway": "Pasteurization destroys pathogens while preserving fresh quality (requires refrigeration); canning sterilizes at 121°C, creating room-temperature shelf-stable products.",
        "realWorldExample": "A dairy factory in Shai Hills pasteurizes fresh cow's milk at 72°C for 15 seconds, killing pathogenic bacteria while preserving vital calcium and vitamin D."
      }
    ],
    "summaryChecklist": [
      "Can classify food commodities into perishable, semi-perishable, and shelf-stable.",
      "Explains the three main agents of spoilage (enzymes, microorganisms, oxidation).",
      "Defines the microbial temperature danger zone (5°C to 63°C).",
      "Explains the scientific mechanism of salting fish (osmosis and plasmolysis).",
      "Explains the antimicrobial and drying effects of hot smoking using the Chorkor smoker.",
      "Contrasts pasteurization (72°C) with canning sterilization (121°C in retort)."
    ],
    "commonMistakes": [
      "Believing that freezing food kills all bacteria; freezing only suspends bacterial activity; bacteria resume multiplication when food thaws.",
      "Refreezing thawed meat or fish, which causes rapid bacterial blooming and severe food poisoning risks.",
      "Confusing 'Best Before' date (quality indicator) with 'Use By / Expiry' date (strict health safety deadline).",
      "Assuming pasteurized milk can be stored safely at warm room temperature; it must remain refrigerated."
    ],
    "beceExamTips": [
      "When explaining 'Koobi' preparation, always use the scientific terms 'Osmosis', 'hypertonic solution', and 'plasmolysis'.",
      "In questions regarding the danger zone, write the exact temperatures: 5°C to 63°C.",
      "State two chemical compounds found in wood smoke that aid preservation: Phenols and Formaldehyde/Acetic acid."
    ]
  },
  "jhs3-ctech-t9-ghanaian-cookery-meal-planning": {
    "topicId": "jhs3-ctech-t9-ghanaian-cookery-meal-planning",
    "title": "Meal Planning, Ghanaian Indigenous Cookery and Special Dietary Requirements",
    "overview": "A nutritional and culinary science guide to meal planning, dietary analysis, indigenous Ghanaian cookery, nutritional multi-mixes, and dietary management for vulnerable and medical groups.",
    "introduction": "Good nutrition is the cornerstone of human health, intellectual performance, and productivity. Ghana possesses an extraordinary abundance of wholesome indigenous food commodities—plantains, yams, cassava, cocoyam leaves (kontomire), cowpeas, groundnuts, shea butter, and sea fish. However, possessing raw food ingredients is not enough; one must understand how to combine, balance, and hygienically cook them to nourish the human body at every stage of the life cycle.",
    "realWorldContext": "The Ghana Health Service (GHS) and school feeding programs utilize the Ghanaian '3-Star Diet' and multi-mix food grouping to combat childhood stunting, maternal anemia, and rising lifestyle diseases such as hypertension and Type 2 diabetes in our urban centers.",
    "objectives": [
      "Identify the six essential food nutrients, their functions, and their dietary deficiency diseases.",
      "Apply the Ghanaian 3-Star Diet and Multi-mix principles in balancing meals.",
      "Analyze factors influencing meal planning across diverse families.",
      "Plan therapeutic and balanced diets for special groups: adolescents, pregnant women, diabetics, hypertensives, and manual workers.",
      "Execute indigenous Ghanaian culinary preparations (Banku, Fufu, Ampesi, Red-red) using hygienic cooking practices."
    ],
    "sections": [
      {
        "title": "1. The Six Food Nutrients and Deficiency Pathology",
        "content": "Nutrients are chemical compounds in food that the human body absorbs to produce energy, build new tissues, catalyze biological processes, and defend against pathogens.",
        "bulletPoints": [
          "Carbohydrates (Energy-giving foods): Starchy roots, tubers (yam, cassava), cereals (maize, rice, millet), and plantains. Provide glucose for cellular respiration (17 kJ/g). Excess is stored as glycogen and adipose fat.",
          "Proteins (Body-building & tissue repair foods): Made of 20 amino acids. Animal sources (First-class / complete protein: meat, fish, eggs, dairy) contain all essential amino acids. Plant sources (Second-class / incomplete protein: beans, groundnuts, soya) lack one or more essential amino acids.",
          "Fats and Lipids: Concentrated energy reserves (37 kJ/g), cellular membrane structure, thermal insulation, and carrier for fat-soluble vitamins (A, D, E, K). Sources: Palm oil, coconut oil, shea butter, groundnut oil.",
          "Vitamins: Organic micro-nutrients: Vitamin A (retinol - vision, immune epithelial lining; deficiency causes night blindness); Vitamin C (ascorbic acid - collagen synthesis, iron absorption; deficiency causes scurvy); Vitamin D (calcium absorption; deficiency causes rickets in children and osteomalacia in adults); B-complex (cellular energy metabolism).",
          "Minerals: Inorganic elements: Iron (heme synthesis; deficiency causes nutritional anemia); Calcium & Phosphorus (skeletal bone and teeth mineralization); Iodine (thyroid hormones; deficiency causes goiter).",
          "Water and Dietary Fiber (Roughage): Water forms 60-70% of body mass, acts as metabolic solvent and thermoregulator; insoluble fiber from whole grains and vegetables stimulates intestinal peristalsis, preventing constipation, hemorrhoids, and colon cancer.",
          "Deficiency Diseases: Kwashiorkor (protein deficiency: swollen belly, edema of legs, reddish-blonde hair, peeling dermatosis); Marasmus (gross protein-calorie starvation: severe emaciation, shriveled 'old man' face); Anemia (iron deficiency: fatigue, pallor, dizziness)."
        ],
        "keyTakeaway": "A balanced diet provides all six nutrients in correct proportions; protein complementarity combines cereals and legumes to achieve high biological value.",
        "realWorldExample": "A mother in Tamale combines millet porridge with soya bean flour to provide complete protein, preventing kwashiorkor in her toddler."
      },
      {
        "title": "2. The Ghanaian Multi-Mix Concept and Meal Planning Factors",
        "content": "The multi-mix food grouping strategy allows nutritious balanced meals to be planned affordably using locally available Ghanaian foodstuffs.",
        "bulletPoints": [
          "The 3-Star Diet Concept: Promoted by Ghana Health Service: Star 1: Energy staple (maize, yam, cassava, rice, plantain); Star 2: Body-building protein (fish, beans, meat, eggs, groundnuts); Star 3: Protective vitamins & minerals (kontomire, gboma, carrots, oranges, mangoes).",
          "Two-Mix Meal: Staple grain/tuber + Legume/animal protein (e.g. Rice and bean stew, or Boiled yam with fish stew).",
          "Three-Mix Meal: Staple + Protein source + Protective vegetable/fruit (e.g. Boiled unripe plantain ampesi + Kontomire stew with smoked fish + Orange slice).",
          "Four-Mix Meal: Staple + Animal protein + Plant protein + Vegetables/fruits + Fat (e.g. Fufu + Light soup containing goat meat, cowpeas, garden eggs, and fresh tomatoes).",
          "Factors Influencing Meal Planning: 1. Age (growing children need more protein and calcium; elderly need less energy but more fiber); 2. Health & Medical Status (diabetics need low glycemic foods); 3. Occupation / Activity Level (manual quarry workers need dense carbohydrates; office workers need fewer calories); 4. Family Income / Budget; 5. Climate / Weather (warm soups in rainy seasons); 6. Religious Taboos (Halal for Muslims, vegetarian diets)."
        ],
        "keyTakeaway": "Always build meals using the 3-star principle: Energy staple + Protein source + Protective vegetables.",
        "realWorldExample": "A school caterer plans a Three-Mix BECE lunch: Ga Kenkey (staple) + Fried fish (protein) + Fresh raw pepper, onion, and tomato salsa with shito (protective)."
      },
      {
        "title": "3. Special Dietary Management and Indigenous Ghanaian Cookery",
        "content": "Tailoring diets to specific physiological needs while mastering hygienic indigenous cooking techniques.",
        "bulletPoints": [
          "Adolescents: Experiencing rapid skeletal and hormonal growth spurts; require high-biological-value protein, iron (especially menstruating females to prevent anemia), calcium for bone density, and complex carbohydrates.",
          "Pregnant and Lactating Women: Increased nutritional demand for fetal development and breast milk synthesis; elevated iron and folic acid (prevents neural tube defects like spina bifida), calcium, protein, and fluids; avoid unpasteurized dairy and raw eggs.",
          "Diabetic Patients (Type 2 Diabetes): Require strict regulation of blood glucose levels; meals must feature complex low-glycemic-index carbohydrates that break down slowly (unripe plantain ampesi, whole-grain brown rice, oats), high soluble fiber (kontomire, garden eggs, okra), lean proteins (fish, chicken without skin), and strict avoidance of refined sucrose and sweetened beverages.",
          "Hypertensive Patients: Require blood pressure control; strict reduction of dietary sodium chloride (minimize table salt, salty preserved fish like momoni/koobi, and MSG stock cubes); increase dietary potassium from fresh vegetables, watermelon, and bananas.",
          "Indigenous Cooking Methods: Boiling (Fufu, Ampesi); Steaming (Kenkey wrapped in cornhusks/plantain leaves); Roasting/Baking (Roasted plantain/kofi brokeman, roasted groundnuts); Stewing (Kontomire stew, Garden egg abom); Frying (Red-red fried plantain, Tatale)."
        ],
        "keyTakeaway": "Diabetics require low glycemic index ampesi and high fiber; hypertensives require strict sodium reduction and potassium-rich kontomire.",
        "realWorldExample": "A daughter prepares a diabetic-friendly dinner for her father: boiled unripe plantain ampesi with garden egg abom and steamed tilapia, completely avoiding refined sugar and stock cubes."
      }
    ],
    "summaryChecklist": [
      "Can list the six nutrients, their dietary roles, and their clinical deficiency signs.",
      "Understands protein complementarity (cereals lack lysine; legumes lack methionine).",
      "Can apply the Ghanaian 3-Star Diet and Multi-mix meal combinations.",
      "Can plan a therapeutic diet for a diabetic patient (unripe plantain ampesi, high fiber, zero refined sugar).",
      "Can plan a low-sodium diet for a hypertensive patient.",
      "Knows the correct hygienic steps for preparing indigenous Ghanaian foods."
    ],
    "commonMistakes": [
      "Serving high-glycemic ripe sweet plantains, white sugar, or soft drinks to diabetic patients.",
      "Cooking vegetables in open pots for excessive periods, destroying heat-sensitive Vitamin C.",
      "Using heavy quantities of high-sodium stock cubes and un-desalted koobi in meals for hypertensive individuals.",
      "Confusing Kwashiorkor (protein deficiency with edema) with Marasmus (gross calorie starvation without edema)."
    ],
    "beceExamTips": [
      "When planning menus in Section B, specify the food item, the nutrient it supplies, and why it is included for that individual.",
      "In questions on adolescents, always mention 'Iron for blood volume/menstruation' and 'Calcium for bone growth'.",
      "For diabetic meals, explain the rationale: 'unripe plantain has a low glycemic index, releasing glucose slowly into the bloodstream'."
    ]
  },
  "jhs3-ctech-t10-garment-design-stitches": {
    "topicId": "jhs3-ctech-t10-garment-design-stitches",
    "title": "Garment Making: Stitches, Seams, Pattern Drafting and Clothing Construction",
    "overview": "A comprehensive manual of clothing construction: sewing tools, sewing machine mechanics, classification of temporary and permanent hand stitches, seam engineering, fullness control (darts, pleats, gathers), and flat pattern drafting.",
    "introduction": "Clothing is a fundamental human necessity that fulfills protective, aesthetic, cultural, and psychological functions. In Ghana, our rich textile heritage—from handwoven Kente and Gonja cloth to vibrant African wax prints—thrives within a dynamic garment and fashion industry. Garment making combines creative design with engineering precision: taking flat two-dimensional textiles and cutting, joining, and shaping them into three-dimensional garments that fit the human body comfortably.",
    "realWorldContext": "Fashion designers, bespoke tailors, and industrial apparel manufacturers in Osu, Kumasi, and Tamale produce high-value apparel for domestic and international markets. Mastering stitch mechanics, robust seam construction, and dart manipulation enables technicians to produce garments that withstand laundering and retain structural elegance.",
    "objectives": [
      "Identify the parts and demonstrate maintenance of a domestic sewing machine.",
      "Classify hand sewing stitches into temporary, permanent joining, and neatening categories.",
      "Construct three primary seams: plain flat seam, French seam, and run-and-fell seam.",
      "Explain the methods of controlling fullness: darts, pleats, gathers, and tucks.",
      "Draft and modify basic pattern templates using standard body measurements."
    ],
    "sections": [
      {
        "title": "1. Sewing Equipment and Sewing Machine Mechanics",
        "content": "Sewing machines use synchronized upper and lower threads to form lockstitches at high speed.",
        "bulletPoints": [
          "Sewing Tools: Shears (large offset blades for cutting fabric flat on tables), Embroidery scissors (small sharp blades for snipping threads), Pinking shears (zigzag blades to finish fraying edges), Tailor's chalk (wax or clay for marking layout lines), Tape measure, Thimble (protects index/middle finger when pushing needles).",
          "Parts of the Sewing Machine: 1. Spool pin (holds upper thread spool); 2. Thread guide and take-up lever (controls thread feed); 3. Tension discs and regulator (regulates upper thread tightness); 4. Needle bar and clamp (holds the needle firmly); 5. Presser foot (holds fabric firmly against the feed dog); 6. Feed dog (toothed rack that advances fabric forward between stitches); 7. Throat plate (metal plate with needle hole and seam allowance guidelines); 8. Bobbin case and shuttle hook (houses lower bobbin thread and loops it around upper needle thread); 9. Balance wheel (manually raises and lowers the needle).",
          "Lockstitch Formation: The needle pierces the fabric, carrying the upper thread down. As the needle rises slightly, a loop forms; the rotating shuttle hook catches this loop and carries it around the bobbin case containing the lower thread, interlocking the two threads precisely in the center of the fabric plies.",
          "Thread Tension Troubleshooting: If the upper tension is too tight, the lower thread is pulled to the top surface, causing fabric puckering; if the upper tension is too loose, loops of thread appear on the underside of the fabric.",
          "Machine Maintenance: Regularly dusting the bobbin race with a lint brush, oiling bearings with sewing machine oil, and replacing blunt or bent needles."
        ],
        "keyTakeaway": "A balanced lockstitch interlocks upper and lower threads invisibly in the center of the fabric layers; keep feed dogs lint-free and oiled.",
        "realWorldExample": "A tailor in Makola Market troubleshoots thread loops under the fabric by tightening the upper tension regulator disc by half a turn."
      },
      {
        "title": "2. Classification of Hand Sewing Stitches",
        "content": "Stitches are classified into temporary holding stitches, permanent joining stitches, and edge-neatening stitches.",
        "bulletPoints": [
          "Temporary Stitches (Basting / Tacking): Used to hold fabric plies together temporarily during fitting and are pulled out after permanent machine stitching. Types: 1. Even Basting: Stitches and spaces are equal (approx. 6 mm); used where tension and strain occur during fitting; 2. Uneven Basting: Long stitch on top (12 mm), short stitch beneath (3 mm); used for rapid marking and holding wide hem folds; 3. Diagonal Basting: Used to hold slippery lining fabrics to outer cloth; 4. Tailor's Tacks: Thread loops cut between two fabric plies to transfer pattern markings (dart points, pocket placements) simultaneously to both fabric pieces.",
          "Permanent Joining Stitches: 1. Running Stitch: Small, even stitches (2–3 mm) used for delicate gathering, mending, and hand seaming; 2. Backstitch: The strongest hand stitch; the needle takes a stitch backward into the end of the previous stitch; resembles machine stitching on top; used for heavy seams and repairing split seams; 3. Over-sewing (Top-sewing): Strong, small stitches worked over folded edges.",
          "Permanent Hemming Stitches: 1. Hemming Stitch: Slanted stitches catching one thread of the garment body and the folded hem edge; 2. Slip Basting / Slip Hemming: Invisible from the right side, needle slips inside the folded hem edge; used for fine silk and high-end dresses.",
          "Neatening / Edge Stitches: 1. Overcasting: Diagonal stitches over raw cut edges to prevent fraying; 2. Blanket Stitch: Decorative looped edge stitch; 3. Buttonhole Stitch: Tightly packed perpendicular stitches with a reinforced knotted purl edge to withstand button friction."
        ],
        "keyTakeaway": "Even basting holds under strain; backstitch is the strongest permanent hand joining stitch; overcasting prevents raw edges from fraying.",
        "realWorldExample": "A fashion student uses tailor's tacks with contrasting thread to transfer bust dart points from a paper pattern onto both left and right bodice pieces."
      },
      {
        "title": "3. Seam Engineering and Fullness Manipulation",
        "content": "Seams join fabric pieces structurally, while fullness control shapes flat woven textiles over three-dimensional human anatomical curves.",
        "bulletPoints": [
          "Plain (Flat) Seam: The foundational seam. Two fabric plies are placed with RIGHT sides together; stitched 15 mm from the raw edge along the seam line; seam allowances are pressed open and raw edges neatened (by pinking, zigzagging, or overcasting). Used for general dressmaking.",
          "French Seam: A self-neatening, enclosed seam worked in two separate stages: 1. Fabric plies are placed with WRONG sides together; stitched 6 mm outside the fitting line; seam allowances are trimmed down to 3 mm; 2. Fabric is pressed and turned with RIGHT sides together so the previous seam line sits right on the edge; a second row of stitching is made 6 mm from the fold on the wrong side, completely enclosing all raw edges. Ideal for sheer, delicate, transparent fabrics (chiffon, organza, silk) that fray easily.",
          "Run and Fell (Machine Fell) Seam: A flat, exceptionally durable, double-stitched seam. Plies are placed wrong sides together, stitched, one seam allowance trimmed to half, the wider allowance folded over the narrow one and edge-stitched flat. Used for denim jeans, school uniform shorts, men's shirts, and sportswear.",
          "Controlling Fullness - Darts: Triangular folds of fabric stitched tapering to a fine point. Function: Converts flat 2D cloth into a 3D cup to accommodate anatomical curves (bust, hips, waist, shoulder blades). Single-pointed darts taper to one point; double-pointed (fish) darts taper to two points (used in one-piece dresses).",
          "Gathers: Small, soft, evenly spaced folds produced by pulling two parallel rows of loose basting stitches; used in sleeves, skirts, and children's dresses.",
          "Pleats: Crisp, deliberate folds of fabric pressed flat: 1. Knife pleats (all folds face the same direction); 2. Box pleats (two knife pleats facing opposite directions away from each other); 3. Inverted pleats (two folds facing towards each other)."
        ],
        "keyTakeaway": "French seams enclose raw edges for delicate sheers; run-and-fell seams provide rugged strength for denim; darts shape flat fabric over body curves.",
        "realWorldExample": "A dressmaker constructs a sheer chiffon wedding guest dress using French seams, ensuring no unsightly fraying threads are visible through the transparent fabric."
      }
    ],
    "summaryChecklist": [
      "Can label parts of the domestic sewing machine (tension discs, presser foot, feed dog, bobbin).",
      "Differentiates even basting, uneven basting, and tailor's tacks.",
      "Can explain the two-stage construction of a French seam with seam allowance measurements.",
      "Explains why run-and-fell seams are used for jeans and school uniform shorts.",
      "Explains the anatomical purpose of sewing darts in flat fabric.",
      "Differentiates knife pleats, box pleats, and gathers."
    ],
    "commonMistakes": [
      "Sewing a French seam right sides together first; this places the finished seam on the outside of the garment.",
      "Pressing darts toward the center of the body incorrectly; vertical darts press towards center front/back; horizontal darts press downwards.",
      "Pulling fabric through the sewing machine with your hands, which bends and snaps the sewing needle; let the feed dog advance the fabric.",
      "Stitching past the dart apex, creating a sharp puckered 'bubble' on the bust curve."
    ],
    "beceExamTips": [
      "In BECE seam questions, always identify the fabric type: chiffon/organza = French seam; denim/khaki = Run and fell seam.",
      "State the two steps of a French seam clearly: 1st row wrong sides together, trim to 3 mm; 2nd row right sides together enclosing raw edges.",
      "State the function of darts: 'to shape flat 2D fabric to fit the 3D curves of the human body'."
    ]
  },
  "jhs3-ctech-t11-surface-finishes-maintenance": {
    "topicId": "jhs3-ctech-t11-surface-finishes-maintenance",
    "title": "Finishing Technologies, Surface Preservation, Corrosion Control and Workshop Maintenance",
    "overview": "A comprehensive material preservation study: progressive abrasive surface preparation, wood finishing chemistry (stains, sealers, polyurethane, French polish), electrochemical corrosion prevention in metals (galvanizing, anodizing, electroplating), and workshop 5S maintenance systems.",
    "introduction": "Fabricating a wooden cabinet, a sheet metal storage box, or a steel security gate is incomplete until protective and aesthetic surface finishes are applied. Raw timber absorbs humidity, swells, and harbors fungi; unpainted steel rusts into crumbling iron oxide; untreated plastics degrade under ultraviolet sunlight. Applying surface finishes seals materials against environmental degradation while enhancing their beauty and commercial value.",
    "realWorldContext": "In Ghana's coastal communities like Accra, Cape Coast, and Sekondi-Takoradi, salt spray from the Atlantic Ocean accelerates metal corrosion and wood rot. Exterior burglar-proof gates rust within months if not primed with red oxide and coated with gloss enamel. Technologists who master corrosion prevention save property owners billions of cedis in replacement costs.",
    "objectives": [
      "State the dual objectives of applying surface finishes: aesthetic beautification and environmental protection.",
      "Execute the sequential surface preparation of wood (scraping, filling, progressive grit sanding along the grain).",
      "Compare wood finishes: stains, sanding sealers, polyurethane varnishes, and French polish (shellac).",
      "Explain the electrochemical mechanism of corrosion (rusting) and methods of prevention (galvanizing, electroplating, painting).",
      "Apply the Japanese 5S system and routine lubrication protocols for workshop tool maintenance."
    ],
    "sections": [
      {
        "title": "1. Wood Surface Preparation and Finishing Systems",
        "content": "A flawless finish depends 90% on meticulous surface preparation; finishes do not hide defects—they magnify them.",
        "bulletPoints": [
          "Step 1 - Defect Removal: Scrape off dried glue squeezes with a sharp hand scraper or chisel; fill nail holes and cracks with wood filler or tinted plastic wood matching the timber species.",
          "Step 2 - Progressive Abrasive Sanding: Always sand strictly along the longitudinal direction of the wood grain using a flat wooden sanding block. Sanding across the grain severs wood fibers, leaving cross-scratches that absorb stains unevenly, creating ugly dark blemishes. Progression: Coarse (80 grit) -> Medium (120 grit) -> Fine (180–240 grit).",
          "Step 3 - Dust Removal: Wipe the sanded timber thoroughly with a clean tack cloth or spirit-dampened rag.",
          "Wood Stains: Water-based, spirit-based, or oil-based transparent colorants that penetrate wood pores to enhance natural figure or simulate expensive species (e.g. staining Wawa to look like Mahogany) without obscuring the grain.",
          "Sanding Sealer: A fast-drying shellac- or nitrocellulose-based formulation that fills porous open cells and stiffens protruding wood fibers. Once dry, light 'denibbing' with 320-grit paper produces an ultra-smooth base.",
          "Polyurethane Varnish: A synthetic resin finish that cures into a tough, transparent, waterproof, heat- and scratch-resistant protective film; ideal for school desks, dining tables, and exterior doors.",
          "French Polish (Shellac): Natural resin secreted by the lac insect dissolved in methylated spirit; applied with a cotton 'fad' or rubber in circular motion; produces an exquisite, deep mirror-like gloss on luxury antique furniture; sensitive to heat, water, and alcohol spills.",
          "Paints (Gloss & Emulsion): Provide an opaque pigmented barrier film that shields timber from UV light and weather."
        ],
        "keyTakeaway": "Always sand along the grain using progressively finer grits; polyurethane provides rugged waterproof protection; French polish delivers mirror gloss.",
        "realWorldExample": "A cabinetmaker in Adum, Kumasi prepares a solid Odum conference table, sanding with 120 then 240 grit before applying three coats of polyurethane varnish."
      },
      {
        "title": "2. Metal Corrosion Mechanisms and Protective Technologies",
        "content": "Corrosion is the electrochemical deterioration of refined metals into their thermodynamic oxide state through atmospheric reaction.",
        "bulletPoints": [
          "The Chemistry of Rusting: Rust is hydrated iron(III) oxide [$Fe_2O_3 \\cdot nH_2O$]. Rusting requires the SIMULTANEOUS presence of both Oxygen (air) and Moisture (water). Electrolytes like ocean salt spray ($NaCl$) and industrial acid rain drastically accelerate the electrochemical reaction.",
          "Barrier Protection - Priming and Painting: Prevents air and water from touching the metal substrate. Step 1: Degrease with solvent; wire-brush off mill scale and rust; Step 2: Apply an anti-corrosive primer such as Red Oxide (iron oxide) or Zinc Chromate; Step 3: Apply two coats of synthetic alkyd gloss enamel paint.",
          "Galvanizing (Sacrificial Protection): Coating steel with a continuous layer of molten Zinc (Hot-dip galvanizing at 450°C). Dual Protection: 1. Zinc acts as a physical barrier; 2. Sacrificial Cathodic Protection: Zinc is more reactive than Iron in the electrochemical reactivity series. If the coating is scratched and moisture connects both metals, a galvanic cell forms where zinc oxidizes sacrificially ($Zn \\rightarrow Zn^{2+} + 2e^-$), supplying electrons to the iron cathode to prevent iron oxidation. Steel will not rust as long as zinc remains nearby.",
          "Electroplating: Using electrolysis to deposit a micro-thin layer of decorative, corrosion-resistant metal (Chromium, Nickel, Silver, Gold) onto a base metal (e.g. chrome-plated car bumpers, motorcycle exhaust pipes, plumbing taps).",
          "Anodizing: An electrolytic passivation process used for Aluminum. The aluminum workpiece is made the anode in an acid electrolyte bath, thickening the natural protective aluminum oxide ($Al_2O_3$) film from 0.002 mm to over 0.025 mm; pores can absorb vibrant dyes for architectural windows and tablet casings."
        ],
        "keyTakeaway": "Rusting requires oxygen and water; galvanizing protects steel sacrificially because zinc is more reactive than iron.",
        "realWorldExample": "A fabricator in Tema hot-dip galvanizes outdoor steel street lighting poles, ensuring they will resist marine salt air corrosion for over 30 years."
      },
      {
        "title": "3. Workshop Maintenance Systems and the 5S Methodology",
        "content": "Proactive, preventative maintenance maximizes machine tool lifespan, eliminates breakdown downtime, and guarantees workshop safety.",
        "bulletPoints": [
          "Routine Preventative Maintenance: 1. Clean machine tables of chips and sawdust daily; 2. Wipe bare metal surfaces (lathe beds, plane soles, saw tables) with a light film of machine oil to prevent atmospheric flash rust; 3. Grease roller bearings and check drive belt tensions; 4. Re-grind and hone cutting edges of chisels and drill bits.",
          "The Japanese 5S System for Workshop Management: 1. Sort (Seiri): Eliminate all unnecessary tools, scrap wood, and broken parts from the workspace; 2. Set in Order (Seiton): Arrange necessary tools in dedicated, labeled shadow boards ('A place for everything, and everything in its place'); 3. Shine (Seiso): Sweep floors, clean machines, wipe oil leaks daily; 4. Standardize (Seiketsu): Establish uniform cleaning schedules and operating checklists; 5. Sustain (Shitsuke): Cultivate self-discipline and habitual adherence to workshop safety standards.",
          "Storage of Sharp Tools: Hand saws must hang vertically from handles; chisels must be stored in wooden racks with cutting edges facing downward or capped with plastic edge guards; files must never be tossed together in a drawer, as their hardened teeth chip and dull one another."
        ],
        "keyTakeaway": "A clean, organized workshop is an accident-free workshop; practice 5S daily and lubricate metal surfaces to halt corrosion.",
        "realWorldExample": "A school technical workshop implements a tool shadow board (Set in Order), allowing teachers and students to instantly spot missing chisels at the end of class."
      }
    ],
    "summaryChecklist": [
      "Can explain why sandpaper must never be dragged across the wood grain.",
      "Lists the steps in finishing timber with polyurethane varnish.",
      "Explains the chemical conditions needed for rusting (iron + water + oxygen).",
      "Explains how galvanizing protects steel sacrificially via zinc oxidation.",
      "Differentiates electroplating from anodizing.",
      "Can recite the five components of the 5S workshop management system."
    ],
    "commonMistakes": [
      "Sanding across the grain, leaving deep cross-scratches that ruin the final stained appearance.",
      "Painting over greasy, rusty steel without wire-brushing or applying red oxide primer.",
      "Applying French polish to an outdoor dining table; shellac degrades rapidly under rain and hot sun.",
      "Stacking sharp chisels and files loosely in a metal toolbox, blunting cutting edges."
    ],
    "beceExamTips": [
      "In BECE rusting questions, always state both conditions: 'Oxygen (air) and Water (moisture)'.",
      "When explaining galvanizing, mention the metal used: 'Zinc' and the term 'sacrificial protection'.",
      "State the two primary purposes of finishing clearly: 1. Protection against moisture/decay; 2. Beautification/aesthetic appeal."
    ]
  },
  "jhs3-ctech-t12-costing-budgeting-entrepreneurship": {
    "topicId": "jhs3-ctech-t12-costing-budgeting-entrepreneurship",
    "title": "Entrepreneurship, Production Costing, Enterprise Budgeting and Career Pathways in Technology",
    "overview": "A business and economic blueprint for technical vocations: entrepreneurial traits, production cost equations (prime cost, factory cost, selling price), enterprise budgeting, marketing mix (4 Ps), and career opportunities in Ghana's TVET landscape.",
    "introduction": "Technical skill without commercial acumen leads to economic frustration. A master carpenter can craft an exquisite wardrobe, an electrician can wire a mansion, and a caterer can prepare delectable pastries; but if they cannot calculate accurate production costs, price their goods to yield a sustainable profit, and market their services effectively, their businesses will fail. Entrepreneurship transforms vocational craftsmanship into thriving, wealth-generating commercial enterprises.",
    "realWorldContext": "The Government of Ghana, through the Commission for Technical and Vocational Education and Training (CTVET) and the Ghana Enterprises Agency (GEA), empowers young technical entrepreneurs with startup capital, modern apprenticeships, and incubators. From metal fabrication hubs in Suame Magazine to fashion design houses in Osu, technical entrepreneurs drive Ghana's industrial growth.",
    "objectives": [
      "Identify the core personal attributes of successful technical entrepreneurs.",
      "Calculate the elements of production cost: Direct Material, Direct Labor, Prime Cost, Factory Cost, and Total Cost.",
      "Determine profitable selling prices based on target percentage mark-up and profit margins.",
      "Prepare a simple operational cash budget for a small technical enterprise.",
      "Apply the 4 Ps of Marketing (Product, Price, Place, Promotion) and chart TVET career pathways."
    ],
    "sections": [
      {
        "title": "1. The Entrepreneurial Mindset and Opportunity Recognition",
        "content": "Entrepreneurship is the creative process of identifying commercial opportunities, mobilizing resources, assuming calculated financial risks, and managing an enterprise to satisfy market needs profitably.",
        "bulletPoints": [
          "Key Entrepreneurial Characteristics: 1. Calculated Risk-Taking: Investing savings into new ventures after thorough market feasibility studies; 2. Innovativeness and Creativity: Devising new products, services, or efficient production methods (e.g. converting waste sawdust into fuel briquettes); 3. Perseverance & Resilience: Overcoming initial market setbacks, cash flow shortages, and economic shocks; 4. Integrity and Trustworthiness: Delivering quality work on time to build repeat clientele; 5. Goal Orientation and Vision: Setting measurable milestones.",
          "Business Opportunity Identification: Entrepreneurs identify gaps in the market through: 1. Unmet consumer needs (e.g. lack of ergonomic school furniture in rural communities); 2. Abundant local raw materials (e.g. processing local cassava into starch for export); 3. Inefficiencies in existing services (e.g. establishing mobile solar-powered cold-storage vans for coastal fishmongers).",
          "Business Plan Components: Executive summary, Product/Service description, Market analysis, Marketing strategy, Production & operational plan, Management team, and Financial projections."
        ],
        "keyTakeaway": "Entrepreneurs solve community problems profitably through innovation, calculated risk-taking, and relentless perseverance.",
        "realWorldExample": "A JHS graduate in Tamale notices that mangoes rot during harvest gluts; she buys a solar dehydrator to package dried mango slices, building a profitable enterprise."
      },
      {
        "title": "2. The Mathematical Architecture of Production Costing",
        "content": "Accurate costing ensures that every pesewa spent on materials, wages, and workshop overheads is recovered with a fair profit.",
        "bulletPoints": [
          "Direct Materials Cost: Cost of raw materials that become an integral, identifiable part of the finished product (e.g. timber for a table, fabric for a shirt, steel pipes for a gate, flour for bread).",
          "Direct Labor Cost: Wages paid directly to craftsmen who physically work on fabricating the product (e.g. wages paid to the carpenter, machinist, welder, tailor, or baker).",
          "Direct Expenses: Special costs incurred exclusively for that specific job (e.g. hiring a special concrete mixer, buying a custom laser-cutting template).",
          "Prime Cost Equation: Prime Cost = Direct Materials Cost + Direct Labor Cost + Direct Expenses.",
          "Overhead Expenses (Indirect Costs): Operating costs necessary to run the business that cannot be directly traced to a single unit: 1. Factory Overheads: Workshop rent, electricity, sandpaper, grease, machine depreciation, supervisor salary; 2. Administration Overheads: Office stationery, manager salary, legal fees; 3. Selling & Distribution Overheads: Delivery van fuel, advertising, salesman commission.",
          "Factory Cost: Factory Cost = Prime Cost + Factory Overheads.",
          "Total Production Cost: Total Cost = Factory Cost + Administration & Selling Overheads.",
          "Profit and Selling Price: Target Profit = Percentage Margin × Total Cost. Selling Price = Total Production Cost + Desired Profit."
        ],
        "keyTakeaway": "Prime Cost = Direct Materials + Direct Labor; Total Cost = Prime Cost + Overheads; Selling Price = Total Cost + Profit.",
        "realWorldExample": "A welding enterprise makes a security gate: Direct steel = GH₵800, Direct welding labor = GH₵300 -> Prime Cost = GH₵1,100. Workshop electricity and rent = GH₵150 -> Total Cost = GH₵1,250. With 20% profit (GH₵250), Selling Price = GH₵1,500."
      },
      {
        "title": "3. Enterprise Budgeting, Marketing, and Career Pathways",
        "content": "A technical enterprise thrives by maintaining positive cash flow liquidity, executing targeted marketing, and pursuing professional TVET qualifications.",
        "bulletPoints": [
          "Enterprise Budgeting: A budget is a formal financial forecast of estimated income (cash inflows from sales/services) and estimated expenditures (cash outflows for materials, rent, wages) over a future operational period (monthly or annually). It prevents cash crunches, curbs impulsive spending, and tracks financial performance.",
          "The Marketing Mix (The 4 Ps): 1. Product: Quality, design, durable construction, attractive packaging, and warranties tailored to customer desires; 2. Price: A competitive pricing strategy that reflects product value while covering total costs and generating profit; 3. Place: Strategic distribution channels ensuring customers can easily buy the product (e.g. roadside showroom, online WhatsApp catalog, retail stores); 4. Promotion: Communicating product benefits through social media advertising, word-of-mouth referrals, banners, and introductory discounts.",
          "Technical Career Pathways in Ghana: 1. Engineering Technologies (Mechanical, Civil, Electrical, Automotive); 2. Built Environment (Architecture, Masonry, Carpentry, Plumbing); 3. Hospitality & Food Processing (Catering, Baking, Food Technology); 4. Fashion & Textiles (Garment Making, Pattern Drafting, Textile Chemistry); 5. Creative Arts & Media (Graphic Design, Technical Drafting).",
          "Educational Progression: JHS -> Technical Institutes (TVET) / Senior High Technical Schools -> Technical Universities (BTech, MTech) -> Professional Engineering and Architectural Council Certification."
        ],
        "keyTakeaway": "Combine the 4 Ps of marketing with prudent cash budgeting to build a sustainable technical brand in Ghana's modern economy.",
        "realWorldExample": "A fashion boutique in East Legon uses Instagram (Promotion and Place) to showcase African print blazer suits (Product) priced at GH₵350 (Price), tracking profits with monthly cash budgets."
      }
    ],
    "summaryChecklist": [
      "Can list four key traits of successful entrepreneurs (risk-taking, perseverance, innovation, integrity).",
      "Can write and calculate the Prime Cost formula (Direct Materials + Direct Labor + Direct Expenses).",
      "Can calculate Factory Cost and Total Cost including overheads.",
      "Can calculate Selling Price given total cost and percentage profit margin.",
      "Explains the 4 Ps of the Marketing Mix (Product, Price, Place, Promotion).",
      "Can map out career progression in Ghana from TVET to Technical University degrees."
    ],
    "commonMistakes": [
      "Equating Prime Cost to Total Cost by forgetting to add workshop overhead expenses (electricity, rent, depreciation).",
      "Confusing Profit Margin (profit divided by selling price) with Mark-up (profit divided by cost price).",
      "Believing that entrepreneurship is only for people who cannot find government jobs; entrepreneurs create employment and drive economic innovation.",
      "Failing to keep business funds separate from personal living expenses, leading to enterprise bankruptcy."
    ],
    "beceExamTips": [
      "In BECE costing calculations, show all intermediate steps: Step 1 Direct Materials, Step 2 Direct Labor, Step 3 Prime Cost, Step 4 Overheads, Step 5 Selling Price.",
      "State the formula for Selling Price clearly: Selling Price = Total Cost + Profit.",
      "When asked to define an entrepreneur, include: 'an individual who identifies opportunities, mobilizes resources, takes calculated risks, and organizes an enterprise for profit'."
    ]
  }
};
