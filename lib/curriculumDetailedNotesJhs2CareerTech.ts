// Ghanaian JHS 2 Career Technology Detailed Study Notes
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// 13 Topics with in-depth sections, learning objectives, common mistakes, BECE tips, and checklists

import { DetailedNotes } from './types';

export const JHS2_CAREER_TECH_DETAILED_NOTES: Record<string, DetailedNotes> = {
  "jhs2-ctech-t1-health-safety-workshop": {
    "topicId": "jhs2-ctech-t1-health-safety-workshop",
    "title": "Workshop Health, Safety Regulations & Personal Protective Equipment (PPE)",
    "overview": "A school technical workshop is an industrial learning environment containing rotating machine parts, sharp hand tools, flammable solvents, and electrical circuits. Safety in the workshop is defined as the state of being protected against physical, chemical, electrical, or biological harm. All workshop hazards fall into two distinct categories: Unsafe Acts and Unsafe Conditions.",
    "introduction": "A school technical workshop is an industrial learning environment containing rotating machine parts, sharp hand tools, flammable solvents, and electrical circuits. Safety in the workshop is defined as the state of being protected against physical, chemical, electrical, or biological harm. All workshop hazards fall into two distinct categories: Unsafe Acts and Unsafe Conditions.",
    "realWorldContext": "A student wearing an untucked long-sleeved shirt near a bench drill can have the fabric grabbed by the rotating chuck in a fraction of a second, causing severe limb injury.",
    "objectives": [
      "Identify the primary causes of workshop accidents into unsafe acts and unsafe conditions",
      "Categorize workshop fires (Classes A, B, C, D and Electrical) and select the correct extinguishing medium",
      "Specify the function and correct selection of Personal Protective Equipment (PPE) for diverse workshop tasks",
      "Execute standard workshop first aid procedures for lacerations, burns, and foreign bodies in the eye"
    ],
    "sections": [
      {
        "title": "1. Fundamentals of Workshop Safety & Accident Causation",
        "content": "A school technical workshop is an industrial learning environment containing rotating machine parts, sharp hand tools, flammable solvents, and electrical circuits. Safety in the workshop is defined as the state of being protected against physical, chemical, electrical, or biological harm. All workshop hazards fall into two distinct categories: Unsafe Acts and Unsafe Conditions.",
        "bulletPoints": [
          "Unsafe Acts (Human Factors): Horseplay, practical jokes, lack of concentration, operating machinery without authorization, failure to wear required PPE, using dull or broken tools, and wearing loose ties or untucked clothing.",
          "Unsafe Conditions (Environmental Factors): Oily or wet floors, poor lighting (inadequate lumens causing shadows), obstructed gangways, lack of ventilation, unguarded drive belts, and ungrounded power tools.",
          "The Safety Hierarchy: Elimination of hazard -> Substitution -> Engineering controls (guards/interlocks) -> Administrative controls (warning signs) -> Personal Protective Equipment (PPE)."
        ],
        "keyTakeaway": "Over 85% of workshop accidents are caused by unsafe human acts; vigilance and discipline prevent injuries.",
        "realWorldExample": "A student wearing an untucked long-sleeved shirt near a bench drill can have the fabric grabbed by the rotating chuck in a fraction of a second, causing severe limb injury."
      },
      {
        "title": "2. Personal Protective Equipment (PPE) Standards",
        "content": "Personal Protective Equipment acts as the last line of defense between the technician and hazardous physical or chemical agents. PPE must be fitted correctly, maintained in clean working order, and worn whenever operations are conducted.",
        "bulletPoints": [
          "Eye & Face Protection: Polycarbonate safety goggles protect against flying sawdust and metal swarf; clear full-face shields protect against chemical splashes and grinding sparks; dark shade welding helmets protect eyes from ultraviolet (UV) and infrared (IR) arc flash radiation.",
          "Hearing Protection: Industrial earplugs and acoustic earmuffs reduce harmful sound levels when operating planers, circular saws, or angle grinders exceeding 85 decibels (dB).",
          "Respiratory Protection: N95 particulate dust masks filter airborne timber dust (especially toxic species like Mansonia and Iroko); chemical cartridge respirators filter organic solvent vapors during spraying.",
          "Body & Hand Protection: Heavy cotton or leather work apron with no dangling ties; heavy split-cowhide leather gloves for oxy-acetylene welding and sheet metal handling; rubber nitrile gloves for solvents.",
          "Foot Protection: Heavy leather boots with steel toe caps (resisting 200 Joules of impact energy) and puncture-proof oil-resistant soles."
        ],
        "keyTakeaway": "Match the PPE strictly to the specific workshop operation; never wear gloves when operating rotating machinery like drills or lathes.",
        "realWorldExample": "Steel-toed boots protect a carpenter's foot when an 8-kilogram cast iron engineering vice accidentally slips from the workbench."
      },
      {
        "title": "3. Classification of Fires & Extinguisher Operation",
        "content": "Fires are classified according to the nature of the combustible fuel involved. Using the wrong fire extinguishing medium can cause violent explosion, flashovers, or fatal electric shocks.",
        "bulletPoints": [
          "Class A (Ordinary Combustibles): Wood, timber offcuts, paper, cardboard, textiles, and plastics. Extinguishing agent: Water jet/spray, Foam, or Multi-purpose ABC Dry Powder (cools fuel below ignition point).",
          "Class B (Flammable Liquids): Petrol, diesel, kerosene, wood stains, paints, and spirit thinners. Extinguishing agent: Carbon Dioxide (CO2), Foam, or Dry Chemical Powder. DANGER: NEVER USE WATER, as burning liquid floats and spreads.",
          "Class C (Flammable Gases): LPG, butane, propane, and acetylene gas cylinders. Extinguishing agent: Shut off cylinder valve immediately, then use Dry Chemical Powder.",
          "Class D (Combustible Metals): Magnesium shavings, sodium, potassium. Extinguishing agent: Specialized Dry Powder (Class D) or dry sand. Never use water or CO2.",
          "Electrical Fires: Energized electrical wiring, motors, switchboards. Extinguishing agent: Carbon Dioxide (CO2) gas or ABC Dry Chemical Powder. Water conducts high voltage and causes fatal electrocution.",
          "Operating Extinguishers with PASS: Pull the pin -> Aim the nozzle at the base of the fire -> Squeeze the trigger -> Sweep from side to side."
        ],
        "keyTakeaway": "Never use water on Class B liquid or electrical fires; always aim extinguisher nozzles at the base of flames using PASS.",
        "realWorldExample": "When an electrical sparks ignites a puddle of lacquer thinner, an alert technician isolates the power breaker and discharges a CO2 extinguisher at the base of the fire."
      },
      {
        "title": "4. Emergency First Aid Procedures in the Workshop",
        "content": "First aid is the immediate temporary care provided to an injured individual before professional medical services arrive. Prompt, calm, and correct intervention preserves life, prevents condition worsening, and promotes recovery.",
        "bulletPoints": [
          "Severe Bleeding / Lacerations: Don disposable gloves -> Apply firm direct pressure over wound with sterile dressing -> Elevate injured limb above heart level -> Secure dressing with roller bandage -> Never apply a tourniquet unless trained.",
          "Thermal & Chemical Burns: Cool thermal burn immediately under clean, running cold water for at least 10 to 20 minutes; do NOT apply butter, toothpaste, or grease; do not burst blisters; cover with clean sterile non-adherent dressing. For chemical splashes, flush copiously with running water for 15 minutes.",
          "Foreign Objects in the Eye: Wash copiously with clean eyewash saline solution; do NOT rub the eye; if an iron particle or splinter is embedded, cover both eyes with sterile pads and transport immediately to an eye clinic.",
          "Fainting / Shock: Lay casualty flat on back with legs elevated 30 cm; loosen tight collars and belts; ensure abundant fresh air; never administer oral liquids to an unconscious person."
        ],
        "keyTakeaway": "Cool burns with cold running water for 10-20 minutes; control bleeding by direct pressure and limb elevation.",
        "realWorldExample": "When hot glue drips onto a student's finger, immediate cooling under a cold water tap stops the heat from blistering deep tissue layers."
      }
    ],
    "commonMistakes": [
      "Pouring water onto a burning pot of oil or solvent spill in the workshop. (Correction: Water sinks under boiling oil, violently vaporizes to steam, and erupts an explosive fireball. Smother with a fire blanket, metal lid, or CO2 extinguisher.)",
      "Wearing loose gloves while drilling holes on a pillar drill machine. (Correction: The rotating drill bit or chuck can snag the glove fabric, dragging the entire hand into the rotating machinery. Never wear gloves around rotating machine spindles.)"
    ],
    "beceExamTips": [
      "In BECE Section B, always identify the class of fire and its matching extinguisher color and medium (Water=Red, Foam=Cream, CO2=Black, Powder=Blue).",
      "Remember the PASS mnemonic for operating extinguishers: Pull, Aim, Squeeze, Sweep."
    ],
    "summaryChecklist": [
      "I know the difference between unsafe acts and unsafe conditions.",
      "I can state the 5 classes of fire and their correct extinguishing media.",
      "I know which PPE is required for woodwork, metalwork, and welding.",
      "I can explain first aid treatment for cuts, burns, and eye splashes."
    ]
  },
  "jhs2-ctech-t2-materials-timber-wood": {
    "topicId": "jhs2-ctech-t2-materials-timber-wood",
    "title": "Classification, Properties & Conversion of Timber (Hardwoods & Softwoods)",
    "overview": "Timber is one of humanity's most versatile natural structural materials. Understanding the biological structure of a tree trunk reveals why timber possesses directional grain, shrinks non-uniformly, and behaves anisotropically.",
    "introduction": "Timber is one of humanity's most versatile natural structural materials. Understanding the biological structure of a tree trunk reveals why timber possesses directional grain, shrinks non-uniformly, and behaves anisotropically.",
    "realWorldContext": "In Ghanaian timber yards, seasoned Odum heartwood is preferred over sapwood for exterior window frames because natural tannins repel termites.",
    "objectives": [
      "Examine the cross-sectional anatomy of a tree trunk and describe the function of each layer",
      "Distinguish between hardwoods and softwoods by botanical classification, cellular structure, and properties",
      "Compare plain sawing and quarter sawing methods of timber conversion",
      "Calculate moisture content and explain air seasoning vs kiln seasoning techniques"
    ],
    "sections": [
      {
        "title": "1. Cross-Sectional Anatomy of a Tree Trunk",
        "content": "Timber is one of humanity's most versatile natural structural materials. Understanding the biological structure of a tree trunk reveals why timber possesses directional grain, shrinks non-uniformly, and behaves anisotropically.",
        "bulletPoints": [
          "Outer Bark (Cortex): Tough, dead corky outer layer that shields the tree from insect attack, fungal infection, mechanical abrasion, and forest bushfires.",
          "Inner Bark (Bast / Phloem): Living soft vascular layer that transports manufactured carbohydrates (food) downward from leaves to roots.",
          "Cambium Layer: Microscopic single layer of living cells between phloem and xylem; divides rapidly each growing season to create new wood cells inwardly and new bark cells outwardly.",
          "Sapwood (Alburnum): Outer band of living wood cells that conducts water and dissolved mineral salts upward from roots to the canopy; pale in color, high in sap moisture, and highly prone to powder-post beetle attack.",
          "Heartwood (Duramen): Inner central cylinder of mature, dead cells. Infiltration with resins, gums, tannins, and essential oils darkens the wood, increases density, and imparts natural decay resistance.",
          "Pith (Medulla): Center core representing the original juvenile sapling stem; soft and structurally weak.",
          "Medullary Rays: Radial sheets of parenchyma cells extending horizontally from pith to bark; store nutrients and bind growth rings radially."
        ],
        "keyTakeaway": "Heartwood is denser, darker, and naturally durable, making it far superior to sapwood for furniture and construction.",
        "realWorldExample": "In Ghanaian timber yards, seasoned Odum heartwood is preferred over sapwood for exterior window frames because natural tannins repel termites."
      },
      {
        "title": "2. Classification: Hardwoods vs Softwoods",
        "content": "Timber is classified into two major botanical families based on reproduction, foliage, and internal vessel structure. Notably, the botanical terms 'hardwood' and 'softwood' do not strictly describe the physical hardness of the timber.",
        "bulletPoints": [
          "Hardwoods (Angiosperms / Broad-Leaved Trees): Possess broad flat leaves, reproduce via enclosed seeds in fruits or pods, and have specialized hollow vessels (pores) for sap conduction. Typically slow-growing, heavy, and dense.",
          "Prominent Ghanaian Hardwoods: Odum/Iroko (Milicia excelsa - rot resistant, construction), Mahogany/Khaya (Khaya senegalensis - luxury furniture, carving), Sapele (Entandrophragma cylindricum - ribbon grain furniture), Dahoma (Piptadeniastrum africanum - heavy marine piling), Wawa (Triplochiton scleroxylon - lightweight hardwood used for plywood and ceiling battens).",
          "Softwoods (Gymnosperms / Conifers): Cone-bearing trees with needle-like or scale-like evergreen leaves. Cells consist almost exclusively of long tracheids with no open vessel pores. Faster growing, lighter in color, resinous.",
          "Examples of Softwoods: Scots Pine, Douglas Fir, Norway Spruce, Western Red Cedar, Larch (predominantly temperate species imported for specialized framing)."
        ],
        "keyTakeaway": "Hardwoods have vessel pores and enclosed seeds; softwoods have needle leaves, cones, and uniform tracheid cells.",
        "realWorldExample": "Wawa is physically soft and easy to indent with a fingernail, but it is botanically classified as a hardwood because it has broad leaves and vessel pores."
      },
      {
        "title": "3. Timber Conversion Methods",
        "content": "Conversion is the industrial process of sawing felled tree logs into marketable commercial planks, boards, scantlings, and baulks using circular saws, band saws, or frame saws.",
        "bulletPoints": [
          "Plain / Slash / Flat Sawing (Through-and-Through): Log is cut by parallel longitudinal cuts across the entire diameter. Advantages: Fastest, cheapest, minimal saw blade adjustments, least offcut wastage. Disadvantages: Boards cupping and warping severely during drying because annual rings run tangentially.",
          "Quarter / Radial Sawing: Log is divided into four quarters, and cuts are made roughly perpendicular to annual growth rings towards the center. Advantages: Boards show beautiful radial silver grain (medullary rays), shrink minimally in width, and resist cupping. Disadvantages: Slower, requires skilled labor, produces more offcut wedge waste.",
          "Rift Sawing: Cuts made strictly radial to all growth rings; produces exceptionally straight grain but generates the highest percentage of waste."
        ],
        "keyTakeaway": "Plain sawing is economical but warps easily; quarter sawing produces dimensionally stable, decorative boards with higher waste.",
        "realWorldExample": "Musical instruments like violin backs and high-end acoustic guitar soundboards are always made from quarter-sawn spruce or mahogany to prevent warping."
      },
      {
        "title": "4. Seasoning of Timber & Defects",
        "content": "Freshly felled green timber contains 50% to over 100% moisture relative to dry mass. Seasoning is the controlled extraction of moisture from timber down to the Equilibrium Moisture Content (EMC) of 10% - 15% to prevent shrinking, splitting, and rot.",
        "bulletPoints": [
          "Calculating Moisture Content: MC (%) = [(Initial Wet Weight - Oven Dry Weight) / Oven Dry Weight] × 100%.",
          "Air (Natural) Seasoning: Timber boards stacked horizontally on level concrete piers under an open-sided roofed shed. Boards are separated by wooden stickers (spacers) to allow ambient airflow. Inexpensive, requires no energy, but takes 6 to 24 months and cannot dry below 15% MC in humid climates.",
          "Kiln (Artificial) Seasoning: Timber stacked inside a sealed masonry chamber where steam, temperature (40°C - 80°C), and forced fan circulation are precisely regulated. Dries timber in days/weeks, kills all wood-boring beetle eggs and fungi, and achieves 8-10% MC for air-conditioned interior joinery.",
          "Common Defects: Natural defects include knots (embedded branch stubs), shakes (cup, ring, star, heart shakes caused by wind and shrinkage), and pitch pockets. Seasoning defects include cupping (curvature across width), bowing (curvature along face), twisting, checking, and honeycombing."
        ],
        "keyTakeaway": "Proper seasoning to below 15% moisture content prevents warping, increases timber strength, and stops fungal dry rot.",
        "realWorldExample": "Unseasoned window frames installed in a newly built classroom will shrink over the dry harmattan season, leaving wide drafts and jammed hinges."
      }
    ],
    "commonMistakes": [
      "Assuming that all hardwoods are physically dense and hard, while all softwoods are soft. (Correction: Classification is strictly botanical (Angiosperm vs Gymnosperm). Balsa and Wawa are hardwoods despite being soft; Yew is a softwood despite being harder than many hardwoods.)",
      "Calculating timber moisture content using the wet weight as the denominator. (Correction: Moisture content is always expressed relative to the dry oven weight: MC = (Wet Weight - Dry Weight) / Dry Weight × 100.)"
    ],
    "beceExamTips": [
      "Be prepared to sketch and label the cross-section of a tree trunk: Bark, Phloem, Cambium, Sapwood, Heartwood, Pith, and Medullary Rays.",
      "In BECE calculations, remember: Weight of water lost = Wet weight - Dry weight."
    ],
    "summaryChecklist": [
      "I can label all seven parts of a tree trunk cross-section.",
      "I can explain why heartwood is more durable than sapwood.",
      "I know the difference between slash sawing and quarter sawing.",
      "I can calculate the percentage moisture content of a timber sample."
    ]
  },
  "jhs2-ctech-t3-materials-metals-plastics": {
    "topicId": "jhs2-ctech-t3-materials-metals-plastics",
    "title": "Ferrous & Non-Ferrous Metals, Alloys and Thermoplastics vs Thermosetting Plastics",
    "overview": "Ferrous metals contain iron as their primary element. With the exception of wrought iron and stainless steel, most ferrous metals are magnetic, possess high tensile strength, and corrode (rust) into hydrated iron(III) oxide when exposed to moisture and oxygen.",
    "introduction": "Ferrous metals contain iron as their primary element. With the exception of wrought iron and stainless steel, most ferrous metals are magnetic, possess high tensile strength, and corrode (rust) into hydrated iron(III) oxide when exposed to moisture and oxygen.",
    "realWorldContext": "A cold chisel is manufactured from high carbon steel so its cutting edge can penetrate mild steel bars without dulling or mushrooming.",
    "objectives": [
      "Differentiate ferrous metals from non-ferrous metals and compare carbon steel grades",
      "Identify common industrial alloys (brass, bronze, duralumin, solder) and their constituents",
      "Distinguish thermoplastics from thermosetting polymers based on molecular structure and recyclability",
      "Select appropriate metallic or polymeric materials for given engineering and household applications"
    ],
    "sections": [
      {
        "title": "1. Ferrous Metals & Carbon Steels",
        "content": "Ferrous metals contain iron as their primary element. With the exception of wrought iron and stainless steel, most ferrous metals are magnetic, possess high tensile strength, and corrode (rust) into hydrated iron(III) oxide when exposed to moisture and oxygen.",
        "bulletPoints": [
          "Pig Iron: The raw product tapped from an iron ore blast furnace (smelted with coke and limestone). Contains 3.5% - 4.5% carbon; brittle with limited direct engineering use.",
          "Cast Iron (2% - 4% Carbon): Melted pig iron remelted with scrap in a cupola furnace. Extremely rigid, high compressive strength, excellent vibration damping, self-lubricating graphite, but brittle under tension and cannot be forged. Used for machine beds, engine cylinder blocks, and vices.",
          "Wrought Iron (< 0.1% Carbon): Nearly pure iron with fibrous slag streaks. Highly ductile, malleable, tough, and resists atmospheric corrosion. Used for decorative ornamental gates, heavy crane chains, and anchor cables.",
          "Low Carbon / Mild Steel (0.15% - 0.3% Carbon): Ductile, malleable, easily bent, drilled, and welded. Used for structural steel beams (I-beams), car body panels, nails, bolts, and rebar in reinforced concrete.",
          "Medium Carbon Steel (0.3% - 0.6% Carbon): Balanced toughness and hardness; heat treatable. Used for railway tracks, vehicle axles, transmission shafts, and hammer heads.",
          "High Carbon / Tool Steel (0.6% - 1.5% Carbon): Very hard, wear-resistant, can be hardened and tempered to hold a sharp cutting edge. Used for cold chisels, drills, hacksaw blades, taps, dies, and files."
        ],
        "keyTakeaway": "Carbon content controls steel properties: higher carbon yields greater hardness and strength, but reduces ductility and weldability.",
        "realWorldExample": "A cold chisel is manufactured from high carbon steel so its cutting edge can penetrate mild steel bars without dulling or mushrooming."
      },
      {
        "title": "2. Non-Ferrous Metals & Engineering Alloys",
        "content": "Non-ferrous metals contain no iron. They are non-magnetic, resist atmospheric rust, exhibit lower densities, and offer exceptional electrical and thermal conductivity.",
        "bulletPoints": [
          "Copper (Cu): Reddish-orange metal, exceptionally ductile and malleable; second highest electrical conductivity after silver. Used for domestic electrical cables, printed circuit tracks, and central heating pipes.",
          "Aluminium (Al): Silvery-white, lightweight (density 2.7 g/cm³), self-forming corrosion-resistant aluminium oxide skin, high thermal conductivity. Used for overhead high-voltage power cables, cooking pots, window frames, and aircraft skins.",
          "Lead (Pb): Heavy, soft, bluish-grey metal with low melting point (327°C) and high resistance to chemical acids and X-ray radiation. Used for car battery plates and nuclear radiation shielding.",
          "Zinc (Zn): Bluish-white metal used primarily in galvanizing steel to prevent rusting.",
          "Alloys: An alloy is a homogeneous mixture of two or more metals, or a metal with a non-metal, fused to produce superior mechanical properties.",
          "Common Alloys: Brass = Copper (65-70%) + Zinc (30-35%) [door locks, musical instruments, valves]; Bronze = Copper (88-90%) + Tin (10-12%) [bells, ship propellers, bearings]; Duralumin = Aluminium (94%) + Copper (4%) + Magnesium (1%) + Manganese (1%) [aircraft structural frames]; Solder = Tin (60%) + Lead (40%) [electrical joining]."
        ],
        "keyTakeaway": "Alloys like brass and bronze combine the conductivity and corrosion resistance of copper with the strength of zinc or tin.",
        "realWorldExample": "Ship propellers operating in salty Atlantic seawater are cast from manganese bronze because pure iron would rapidly corrode away."
      },
      {
        "title": "3. Polymers: Thermoplastics vs Thermosetting Plastics",
        "content": "Plastics are synthetic organic polymers made of long-chain carbon macromolecules derived from petroleum cracking. They are categorized into two fundamental groups based on their response to thermal energy.",
        "bulletPoints": [
          "Thermoplastics (Linear Polymers): Polymer chains are arranged side by side and held only by weak intermolecular van der Waals forces. When heated, molecular chains slide freely over one another, causing softening and melting. Upon cooling, they solidify into any mold shape. This cycle can be repeated indefinitely, making thermoplastics fully recyclable.",
          "Examples of Thermoplastics: Polyethylene / Polythene (packaging bags, jerrycans), Polyvinyl Chloride / PVC (electrical conduit, plumbing drainage pipes, vinyl records), Polystyrene (protective styrofoam packaging, disposable cups), Polypropylene (automobile battery casings, ropes), Acrylic / Perspex (clear display cases, safety screens).",
          "Thermosetting Plastics (Cross-linked Polymers): Linear polymer chains undergo a permanent chemical curing reaction during molding that forms strong, irreversible 3-dimensional covalent cross-links. Once cured, thermosets cannot be softened or remelted; excess heat causes thermal degradation, scorching, and charring. Non-recyclable.",
          "Examples of Thermosetting Plastics: Bakelite / Phenol Formaldehyde (saucepan handles, electrical 13A plugs and sockets), Melamine Formaldehyde (decorative Formica table laminates, heat-resistant picnic plates), Urea Formaldehyde (light wall switches, electrical junction boxes), Epoxy Resin (high-strength two-component adhesives, boat fiberglass resin)."
        ],
        "keyTakeaway": "Thermoplastics soften repeatedly on heating and are recyclable; thermosetting plastics have permanent cross-links and never melt.",
        "realWorldExample": "Saucepan handles are molded from Bakelite so that when a cook leaves the pot on a high gas flame, the handle does not melt, droop, or conduct heat."
      },
      {
        "title": "4. Material Selection in Design & Fabrication",
        "content": "A successful career technologist selects materials by balancing functional properties, cost, availability, ease of manufacturing, and environmental sustainability.",
        "bulletPoints": [
          "Strength-to-Weight Ratio: Critical in transportation; aluminium and duralumin replace steel in aerospace to decrease fuel consumption.",
          "Corrosion Resistance: Outdoor playground equipment uses galvanized mild steel or PVC-coated metal to survive tropical monsoons.",
          "Thermal & Electrical Insulation: Electric kettle bodies use heat-resistant polypropylene, while heating elements are stainless steel enclosing nichrome resistance wire, and bases use copper contacts enclosed in thermosetting plastic.",
          "Recycling & Circular Economy: Segregating thermoplastics (PET bottles, HDPE containers) reduces plastic waste in Ghanaian drainage channels and shores."
        ],
        "keyTakeaway": "Engineers match mechanical properties, environmental conditions, and manufacturing costs to product functional requirements.",
        "realWorldExample": "Electrical screwdriver handles are molded from cellulose acetate or PVC to provide 1000V electrical insulation while the shank is chrome vanadium steel."
      }
    ],
    "commonMistakes": [
      "Calling brass a pure metal and thinking it contains gold because of its shiny yellow appearance. (Correction: Brass is an alloy composed of copper and zinc. It contains no gold.)",
      "Attempting to heat and weld or remold broken Bakelite electrical plugs. (Correction: Bakelite is a thermosetting plastic with rigid covalent cross-links; it will char, smoke, and burn rather than soften or melt.)"
    ],
    "beceExamTips": [
      "Memorize the constituents of Brass (Copper + Zinc) and Bronze (Copper + Tin). BECE frequently tests this exact pair.",
      "Remember that Cast Iron has high compressive strength and is used for machine beds, but is brittle under impact."
    ],
    "summaryChecklist": [
      "I can explain why high carbon steel is used for cutting tools.",
      "I know the compositions and uses of brass, bronze, duralumin, and solder.",
      "I can explain the molecular structural difference between thermoplastics and thermosets.",
      "I can give three examples each of thermoplastics and thermosetting plastics."
    ]
  },
  "jhs2-ctech-t4-technical-drawing-instruments": {
    "topicId": "jhs2-ctech-t4-technical-drawing-instruments",
    "title": "Technical Drawing Instruments, Standard Lines & Freehand Sketching",
    "overview": "Technical drawing is the universal graphic language used by architects, engineers, and technicians to communicate design specifications without linguistic ambiguity. Accurate drafting requires systematic board preparation.",
    "introduction": "Technical drawing is the universal graphic language used by architects, engineers, and technicians to communicate design specifications without linguistic ambiguity. Accurate drafting requires systematic board preparation.",
    "realWorldContext": "In an architectural studio, an incorrectly aligned T-square will introduce cumulative angular errors that skew an entire building floor plan.",
    "objectives": [
      "Set up drawing paper on a drawing board using drafting tape and align accurately with a T-square",
      "Manipulate 30°/60° and 45° set squares in combination with a T-square to construct angles in 15° increments",
      "Identify and draw standard ISO / BS 8888 line types and apply standard single-stroke title block lettering",
      "Produce accurate freehand pictorial sketches in Oblique and Isometric projections"
    ],
    "sections": [
      {
        "title": "1. Drawing Board Setup & Instrument Handling",
        "content": "Technical drawing is the universal graphic language used by architects, engineers, and technicians to communicate design specifications without linguistic ambiguity. Accurate drafting requires systematic board preparation.",
        "bulletPoints": [
          "The Drawing Board: Crafted from seasoned softwood (e.g. pine or linden) with an inset ebony or hardwood straightedge on the left working side. The board must remain perfectly flat and free of gouges.",
          "The T-Square: Comprises a wooden or acrylic stock (head) rigidly fixed at 90° to a long straight blade. The stock must always be held firmly pressed against the ebony working edge of the board with the left hand (for right-handed drafters). Used exclusively for drawing horizontal lines from left to right and supporting set squares.",
          "Paper Alignment Procedure: Place drafting paper near the top-left quadrant of the board -> Rest the T-square blade across the paper -> Align the top border of the paper flush with the upper edge of the blade -> Secure corners using drafting tape or masking tape (never metal thumbtacks that pit the wood surface).",
          "Drafting Pencils: Hardness scale runs from 9H (hardest) down through 4H, 2H, H, HB, B, to 9B (softest). In technical drawing: 2H/3H are used for light construction lines; H/HB are used for visible outlines, dimensions, and lettering."
        ],
        "keyTakeaway": "Keep the T-square stock pressed firmly against the board's edge; never use the lower edge of the T-square for drawing.",
        "realWorldExample": "In an architectural studio, an incorrectly aligned T-square will introduce cumulative angular errors that skew an entire building floor plan."
      },
      {
        "title": "2. Set Squares & Angle Increments",
        "content": "Set squares are precision triangular acrylic drafting tools used in conjunction with a horizontal T-square to draw vertical lines and oblique angles.",
        "bulletPoints": [
          "The 45° Set Square: Right-angled isosceles triangle with angles of 45°, 45°, and 90°.",
          "The 30°/60° Set Square: Scalene right-angled triangle containing angles of 30°, 60°, and 90°.",
          "Drawing Vertical Lines: Place the stock of the T-square against the board edge, hold the blade down, place the set square on the blade with its vertical edge facing left, and strike lines upward from bottom to top.",
          "Combining Set Squares for 15° Increments: By resting one set square on the T-square and sliding the second against its hypotenuse, angles in multiples of 15° can be drawn directly without a protractor: 15° (45° - 30°), 75° (45° + 30°), 105° (45° + 60°), 120° (180° - 60°), 135° (90° + 45°), 150° (180° - 30°)."
        ],
        "keyTakeaway": "Combining 45° and 30°/60° set squares on a T-square enables rapid, precise drafting of any 15° angle multiple.",
        "realWorldExample": "A drafter laying out the 75° isometric hatching lines on a mechanical section uses combined set squares in one motion."
      },
      {
        "title": "3. ISO Standard Line Types & Title Block Lettering",
        "content": "Engineering standards (ISO and BS 8888) designate specific line thicknesses and stroke styles to convey distinct geometric meanings on technical drawings.",
        "bulletPoints": [
          "Continuous Thick Line (0.5 - 0.7 mm): Used for visible outlines, visible edges, and sheet borders.",
          "Continuous Thin Line (0.25 - 0.35 mm): Used for construction lines, projection lines, dimension lines, extension lines, hatching lines, and leader lines.",
          "Dashed Thin Line: Equal dashes 3 mm long with 1 mm spaces; represents hidden outlines and hidden edges.",
          "Long Dash-Dot Thin Line (Chain Line): Long dash (10-12 mm), 1 mm space, dot/short dash (1 mm), 1 mm space; marks center lines, pitch circles, and axes of symmetry.",
          "Title Block Conventions: Positioned at the bottom-right corner of the sheet. Contains: Student Name, School, Title of Drawing, Date, Scale, and Projection Symbol. Standard lettering must use uniform, single-stroke Gothic uppercase characters."
        ],
        "keyTakeaway": "Use thick lines for visible outlines, dashed lines for hidden detail, and chain lines for center axes.",
        "realWorldExample": "A hidden bore hole inside an engine cylinder is drawn with dashed lines to show machinists where internal drilling is required."
      },
      {
        "title": "4. Freehand Sketching: Oblique vs Isometric Projection",
        "content": "Freehand sketching enables designers to capture three-dimensional artifact concepts rapidly on paper without drafting instruments.",
        "bulletPoints": [
          "Oblique Projection: The front face of the object is drawn in true shape and scale parallel to the viewer. Receding depth axes are projected backward at 45° (or 30°). In Cavalier oblique, receding lines are drawn at full scale; in Cabinet oblique, receding lines are drawn at half scale (1:2) to reduce optical distortion.",
          "Isometric Projection: The object is rotated so that three mutually perpendicular principal axes meet at equal 120° angles. The two receding base axes are drawn at 30° to the horizontal baseline, while height lines remain vertical. All dimensions along isometric axes are drawn to scale.",
          "Techniques for Freehand Straight Lines: Hold pencil 30 mm back from point; look at the destination point rather than the pencil tip; draw arm from elbow with feather strokes; rotate paper to maintain comfortable wrist motion."
        ],
        "keyTakeaway": "Oblique drawings have true-shape front faces with 45° receding axes; isometric drawings incline both base axes at 30°.",
        "realWorldExample": "A cabinetmaker sketches a quick isometric view of a customer's proposed wall unit during a home consultation to reach agreement before drafting full plans."
      }
    ],
    "commonMistakes": [
      "Using the bottom edge of a T-square blade to draw horizontal lines. (Correction: Only the precision upper edge of the T-square blade is machined true. Using the bottom edge causes inaccurate, out-of-square lines.)",
      "Drawing hidden outline dashes with unequal, ragged lengths and gaps. (Correction: Dashed lines must be neat and consistent: 3 mm dash, 1 mm gap, touching corner vertices cleanly.)"
    ],
    "beceExamTips": [
      "In BECE Section A, questions often ask which pencil grade is hardest (e.g. 4H is harder than 2H, which is harder than HB).",
      "Remember: In isometric projection, the axes are inclined at 30° to the horizontal, with 120° between any two axes."
    ],
    "summaryChecklist": [
      "I know how to align paper on a drawing board using a T-square.",
      "I can obtain 15°, 75°, 105°, 120°, 135°, and 150° using set squares.",
      "I can draw continuous thick, continuous thin, dashed, and chain lines correctly.",
      "I understand the difference between Cavalier and Cabinet oblique projections."
    ]
  },
  "jhs2-ctech-t5-plane-geometry-angles": {
    "topicId": "jhs2-ctech-t5-plane-geometry-angles",
    "title": "Plane Geometry: Construction of Angles, Triangles & Quadrilaterals",
    "overview": "Bisection means dividing a geometric figure into two exactly equal halves. Precision compass bisections form the bedrock of all engineering geometry.",
    "introduction": "Bisection means dividing a geometric figure into two exactly equal halves. Precision compass bisections form the bedrock of all engineering geometry.",
    "realWorldContext": "Surveyors dividing a boundary line between two building plots construct perpendicular bisectors to ensure fair, equal division.",
    "objectives": [
      "Construct perpendicular bisectors of straight lines and angle bisectors using only compass and straightedge",
      "Construct standard geometrical angles (90°, 60°, 30°, 45°, 75°, 105°, 120°) without using a protractor",
      "Construct triangles given three sides (SSS), two sides and included angle (SAS), and one side and two angles (ASA)",
      "Inscribe and circumscribe regular polygons (hexagons, pentagons, octagons) in circles"
    ],
    "sections": [
      {
        "title": "1. Geometrical Bisection of Lines and Angles",
        "content": "Bisection means dividing a geometric figure into two exactly equal halves. Precision compass bisections form the bedrock of all engineering geometry.",
        "bulletPoints": [
          "Perpendicular Bisector of Line AB: Place compass point on A, set radius to greater than half AB, and strike arcs above and below the line. With the compass unchanged, place point on B and strike intersecting arcs. Draw a straight line through the intersection points. This line cuts AB at 90° at its exact midpoint.",
          "Bisecting an Angle ∠ABC: With compass point on vertex B, draw an arc of convenient radius cutting BA at P and BC at Q. With centers P and Q and equal radii greater than half PQ, strike intersecting arcs at R inside the angle. Join vertex B to R with a straight line. Ray BR bisects the angle into two equal halves."
        ],
        "keyTakeaway": "Always keep compass radius constant when striking intersecting bisection arcs from paired reference points.",
        "realWorldExample": "Surveyors dividing a boundary line between two building plots construct perpendicular bisectors to ensure fair, equal division."
      },
      {
        "title": "2. Construction of Angles with Compass & Straightedge",
        "content": "Under GES and WAEC BECE examination regulations, standard angles must be constructed geometrically using a compass and ruler alone; protractors are permitted only for verification.",
        "bulletPoints": [
          "Constructing 60°: Draw baseline AB. With center A and convenient radius, strike an arc cutting AB at C. With center C and the same radius, strike an arc cutting the first arc at D. Ray AD forms an angle of exactly 60° with AB.",
          "Constructing 30°: Construct a 60° angle and bisect it.",
          "Constructing 90°: Erect a perpendicular at a point by striking arcs on either side along baseline, then striking intersecting arcs above using a larger radius; or bisect the 60° interval between 60° and 120°.",
          "Constructing 45°: Construct a 90° angle and bisect it.",
          "Constructing 75°: Construct 60° and 90° angles on the same baseline. Bisect the 30° angle interval between 60° and 90° (60° + 15° = 75°).",
          "Constructing 105°: Construct 90° and 120° angles; bisect the 30° interval between them (90° + 15° = 105°).",
          "Constructing 120°: Step off two consecutive 60° arcs on a semi-circular arc."
        ],
        "keyTakeaway": "All standard angles derive from the 60° equilateral arc and 90° perpendicular through successive bisections.",
        "realWorldExample": "Carpenters framing roof rafters construct a 45° birdsmouth joint cut using compass bisections when framing pitched roofs."
      },
      {
        "title": "3. Construction of Triangles (SSS, SAS, ASA)",
        "content": "A triangle is a three-sided closed polygon whose interior angles always sum to 180°. Specific given geometric data determines the construction sequence.",
        "bulletPoints": [
          "Side-Side-Side (SSS): Given side lengths a, b, c. Draw base AB = c. Set compass to radius b and strike arc from A. Set compass to radius a and strike intersecting arc from B. The intersection defines vertex C. Join AC and BC with continuous thick lines.",
          "Side-Angle-Side (SAS): Given base AB, angle θ at A, and side AC. Draw base AB. Construct angle θ at vertex A using compass. Measure length AC along the ray. Join C to B.",
          "Angle-Side-Angle (ASA): Given base AB and two base angles α at A and β at B. Draw base AB. Construct angle α at A and angle β at B. The intersection of the two inclined rays forms vertex C."
        ],
        "keyTakeaway": "Leave all construction arc lines visible with thin 2H pencil strokes so examiners can verify construction method.",
        "realWorldExample": "Roof trusses in steel hangars are designed as triangular configurations because triangles are mechanically rigid and cannot deform under loading."
      },
      {
        "title": "4. Regular Polygons & Circle Inscription",
        "content": "A regular polygon has all sides equal in length and all interior angles equal. Constructing polygons inscribed within circles is a foundational drafting skill.",
        "bulletPoints": [
          "Inscribing a Regular Hexagon (6 Sides): The side length of a regular hexagon is exactly equal to the radius R of its circumscribing circle. Draw circle of radius R with center O. Draw horizontal diameter AB. With centers A and B and unchanged radius R, strike arcs cutting the circle at C, D, E, and F. Join adjacent vertices.",
          "Constructing an Octagon in a Square: Draw square ABCD. Draw diagonals AC and BD intersecting at center O. With centers at vertices A, B, C, and D and radius equal to half the diagonal (AO), strike arcs cutting the square edges. Join adjacent intersection points across corners to produce a regular 8-sided octagon.",
          "General Polygon Method: Divide the diameter of a circumscribing circle into N equal parts. With centers at ends of diameter and radius equal to diameter, draw intersecting arcs at P. Project a straight line from P through division 2 to intersect the opposite circumference. The chord from diameter end to intersection is one side of the N-gon."
        ],
        "keyTakeaway": "A regular hexagon's side length always equals the radius of the circle in which it is inscribed.",
        "realWorldExample": "Hexagonal nuts and bolt heads are manufactured based on hexagon geometry so spanners can grip them at 60° turning intervals."
      }
    ],
    "commonMistakes": [
      "Erasing compass construction arcs after drawing the final triangle or angle. (Correction: Never erase construction arcs. WAEC BECE examiners award marks for visible, neat thin construction lines.)",
      "Using a dull, unsharpened pencil lead in the compass. (Correction: Keep the compass pencil sharpened to a chisel edge for pinpoint arc intersections without line thickness blur.)"
    ],
    "beceExamTips": [
      "Always construct 75° by bisecting the interval between 60° and 90°.",
      "To construct a regular hexagon of side 40 mm, simply draw a circle of radius 40 mm and step off the radius around the perimeter."
    ],
    "summaryChecklist": [
      "I can bisect any straight line and any angle with compass and ruler.",
      "I can construct 30°, 45°, 60°, 75°, 90°, 105°, and 120° without a protractor.",
      "I can construct triangles using SSS, SAS, and ASA methods.",
      "I can inscribe a regular hexagon in a circle using the radius method."
    ]
  },
  "jhs2-ctech-t6-measuring-marking-tools": {
    "topicId": "jhs2-ctech-t6-measuring-marking-tools",
    "title": "Measuring, Marking-Out and Testing Tools in Woodwork & Metalwork",
    "overview": "Accurate measurement ensures that individual components fabricated in the workshop fit together snugly during final assembly without binding or excessive play.",
    "introduction": "Accurate measurement ensures that individual components fabricated in the workshop fit together snugly during final assembly without binding or excessive play.",
    "realWorldContext": "A motor vehicle mechanic uses a metric micrometer screw gauge to measure the diameter of engine valve stems to check for microscopic wear.",
    "objectives": [
      "Read and record measurements from steel rules, metric vernier callipers, and micrometer screw gauges",
      "Differentiate between woodworking marking tools (try square, marking gauge, mortise gauge) and metalworking marking tools (scriber, punches, surface plate)",
      "Explain the purpose and proper application of layout dye (Engineers' Blue)",
      "Test wooden surfaces for flatness, squareness, and twist using straight edges, try squares, and winding sticks"
    ],
    "sections": [
      {
        "title": "1. Precision Measuring Instruments",
        "content": "Accurate measurement ensures that individual components fabricated in the workshop fit together snugly during final assembly without binding or excessive play.",
        "bulletPoints": [
          "Steel Rule: Made of tempered stainless or spring steel with polished satin chrome finish; graduated in half-millimeters and millimeters; accuracy 0.5 mm. To avoid parallax errors, always position the eye directly perpendicular to the graduation line.",
          "Vernier Calliper: Measures external dimensions, internal bores, and stepped depths to 0.02 mm accuracy. Comprises a fixed main beam scale and a sliding vernier scale with internal nibs, external jaws, and a depth rod.",
          "Reading a Vernier Calliper: Main scale reading (mm past vernier zero) + (Coinciding vernier mark number × 0.02 mm).",
          "Micrometer Screw Gauge: Ultra-precision tool for wire diameter and sheet metal thickness down to 0.01 mm. Operates on a precision screw thread with 0.5 mm pitch. Features a ratchet stop to apply uniform measuring pressure.",
          "Outside and Inside Callipers: Firm-joint or spring-joint callipers transfer diameters from workpieces to a steel rule for indirect measurement."
        ],
        "keyTakeaway": "Vernier callipers read to 0.02 mm; micrometer screw gauges read to 0.01 mm with ratchet-controlled pressure.",
        "realWorldExample": "A motor vehicle mechanic uses a metric micrometer screw gauge to measure the diameter of engine valve stems to check for microscopic wear."
      },
      {
        "title": "2. Woodworking Marking-Out Tools",
        "content": "Marking out transfers dimensions from working drawings onto timber stock to define cut lines, rebate depths, and joint boundaries.",
        "bulletPoints": [
          "Try Square: Steel blade fixed rigidly at 90° to a wooden or cast iron stock. Functions: Marking lines at right angles to face edges and testing edge squareness.",
          "Mitre Square: Blade fixed permanently at 45° to the stock for laying out mitre joints for picture frames.",
          "Sliding Bevel: Adjustable blade locked by a brass thumbscrew; transfers any arbitrary non-90° angle from a drawing or bevel board.",
          "Marking Gauge: Hardwood stock sliding on a stem, locked with a thumbscrew; carries a single sharpened steel spur to scratch lines parallel to a face side or face edge along the grain.",
          "Mortise Gauge: Carries two spurs on its stem—one stationary and one moved by a brass thumbscrew at the stem end; scribes both sides of a mortise or tenon simultaneously to exact chisel width.",
          "Marking Knife: Bevelled tool steel knife; severs wood fibers across the grain cleanly, leaving a knife line that prevents splintering during sawing."
        ],
        "keyTakeaway": "Mark across grain with a marking knife to prevent fiber tear-out; mark along grain with a marking gauge.",
        "realWorldExample": "A carpenter preparing door frame mortises sets the twin spurs of a mortise gauge exactly to the width of the 12 mm mortise chisel."
      },
      {
        "title": "3. Metalworking Marking-Out Tools",
        "content": "Metal surfaces are too hard and reflective for lead pencils; hardened steel tools and surface preparation dyes are necessary for clear layout marks.",
        "bulletPoints": [
          "Scriber: Slender high carbon steel rod with hardened needle-sharp point (often with one straight tip and one bent tip); scratches thin, precise layout lines into metal surfaces.",
          "Engineers' Blue (Layout Dye): Methylated spirit solution of Prussian blue brushed onto polished metal; dries quickly to a thin matte blue film against which scribed scratches stand out brightly.",
          "Centre Punch: High carbon steel tool with point ground to 90° included angle; struck with a hammer to make dimples that seat the center of twist drills and prevent drill walking.",
          "Dot / Prick Punch: Point ground to 30° or 60° included angle; creates shallow witness marks along faint scribed lines to preserve layout marks if dye rubs off.",
          "Surface Plate & Scribing Block (Surface Gauge): Precision ground cast iron or granite reference table on which workpieces and height gauges rest during precision marking."
        ],
        "keyTakeaway": "Centre punches have 90° tips for drill centering; prick punches have 30°-60° tips for witness line marking.",
        "realWorldExample": "Before drilling a 10 mm hole through a mild steel bracket, a machinist strikes a 90° centre punch mark to prevent the drill bit wandering off center."
      },
      {
        "title": "4. Testing Tools for Flatness, Straightness & Wind",
        "content": "Testing tools ensure that prepared workpiece faces are geometrically true before joints are cut, preventing crooked assemblies.",
        "bulletPoints": [
          "Straight Edge: Precision-ground steel or hardwood bar placed on edge across a workpiece; holding it towards a light source reveals low spots where light shines through beneath the edge.",
          "Winding Sticks: A pair of identical, perfectly parallel hardwood battens placed across opposite ends of a planed timber plank. Sighting across the top edges reveals twist (wind) if the sticks do not align parallel.",
          "Spirit Level: Sealed glass vial containing alcohol or ether with a trapped air bubble. When placed on a surface, centering the bubble between index marks verifies true horizontal level or vertical plumb."
        ],
        "keyTakeaway": "Winding sticks detect twist across long timber boards; straight edges detect hollows and humps.",
        "realWorldExample": "Before gluing four boards together to make a tabletop, a woodworker checks each edge with a try square and sighting across winding sticks."
      }
    ],
    "commonMistakes": [
      "Using a 90° centre punch to mark witness points along a layout line. (Correction: A 90° centre punch makes large crater-like dimples that distort layout lines. Use a 30° or 60° prick punch for witness marking.)",
      "Using a lead pencil to mark joint shoulders across wood grain. (Correction: Lead pencil marks are thick (0.5 mm) and can smear. A marking knife cuts the grain fibers cleanly, giving an exact line for the saw tooth.)"
    ],
    "beceExamTips": [
      "In BECE, remember: The try square has a 90° fixed blade; the mitre square has a 45° fixed blade; the sliding bevel is adjustable.",
      "Differentiate between center punch (90° point for drilling) and dot/prick punch (30°/60° point for layout witness marks)."
    ],
    "summaryChecklist": [
      "I can calculate vernier calliper readings to 0.02 mm accuracy.",
      "I can explain the difference between a marking gauge and a mortise gauge.",
      "I know the included point angles of center punches (90°) and prick punches (30°/60°).",
      "I can describe how winding sticks are used to detect twist in timber."
    ]
  },
  "jhs2-ctech-t7-cutting-shaping-tools": {
    "topicId": "jhs2-ctech-t7-cutting-shaping-tools",
    "title": "Cutting, Impelling and Shaping Tools (Saws, Chisels, Files & Planes)",
    "overview": "A saw is a toothed cutting blade used to sever materials by cutting a narrow slot called a kerf. Without tooth set, the blade binds tightly in the cut due to friction.",
    "introduction": "A saw is a toothed cutting blade used to sever materials by cutting a narrow slot called a kerf. Without tooth set, the blade binds tightly in the cut due to friction.",
    "realWorldContext": "A carpenter cutting tenon shoulders uses a tenon saw resting against a bench hook to achieve square, tear-free shoulder lines.",
    "objectives": [
      "Explain saw tooth geometry, kerf, tooth set, and distinguish rip saws, cross-cut saws, and tenon saws",
      "Identify the parts and adjustment mechanisms of bench planes (Jack, Fore, Smoothing) and special planes",
      "Select and maintain wood chisels and metal cold chisels and state grinding vs honing angles",
      "Select files by cut and grade and execute cross-filing and draw-filing techniques safely"
    ],
    "sections": [
      {
        "title": "1. Hand Saws & Sawing Mechanics",
        "content": "A saw is a toothed cutting blade used to sever materials by cutting a narrow slot called a kerf. Without tooth set, the blade binds tightly in the cut due to friction.",
        "bulletPoints": [
          "Saw Kerf & Tooth Set: Kerf is the slot width cut by saw teeth. Teeth are bent alternately left and right ('set') so the cut slot is wider than the blade plate thickness, preventing binding and allowing free blade movement.",
          "Rip Saw: Large chisel-like teeth (4 to 6 Teeth Per Inch / TPI); cuts parallel to the timber grain fibers, chipping out small wood flakes.",
          "Cross-Cut Saw: Knife-like triangular teeth bevelled on edges (6 to 8 TPI); slices cleanly through wood fibers across the grain like a series of knife blades.",
          "Tenon / Back Saw: Rectangular thin blade reinforced with a heavy brass or steel spine (back) along the top to keep the blade rigid; fine teeth (12 to 14 TPI); used for precision joinery, cutting tenons, and shoulders.",
          "Dovetail Saw: Smaller, lighter tenon saw with very fine teeth (15 to 20 TPI) and thin blade for precision dovetail pins.",
          "Coping Saw: Thin flexible blade held in a deep C-shaped steel frame; cuts intricate curved shapes in thin wood and plastics.",
          "Hacksaw (Metalwork): High-speed steel blade mounted in an adjustable steel frame; teeth point forward (cuts on push stroke). Coarse 14-18 TPI for thick solid steel; fine 24-32 TPI for thin tubing and sheet metal (minimum 3 teeth on work)."
        ],
        "keyTakeaway": "Tenon saws have stiff backs for joint cutting; hacksaws cut metals on the forward push stroke.",
        "realWorldExample": "A carpenter cutting tenon shoulders uses a tenon saw resting against a bench hook to achieve square, tear-free shoulder lines."
      },
      {
        "title": "2. Bench Planes & Wood Shaping",
        "content": "Planes are precision shaving tools used to true, smooth, and dimension wooden surfaces by taking off continuous thin wood shavings.",
        "bulletPoints": [
          "Jack Plane (350 mm long): First plane used on rough-sawn timber to remove rough saw marks and true boards rapidly.",
          "Fore / Trying Plane (450 - 600 mm long): Long sole spans low spots, planing only high humps to produce long, dead-straight edges for glue joints.",
          "Smoothing Plane (200 - 250 mm long): Short sole takes gossamer-thin shavings for final surface finishing prior to sanding.",
          "Special Planes: Rebate (rabbet) plane cuts stepped recesses along edges; Plough plane cuts grooves parallel to edges; Block plane has low-angle blade (12°-20°) with bevel up to slice across stubborn end grain.",
          "Plane Iron Geometry & Adjustments: Grinding angle = 25° (ground on water wheel); Honing angle = 30° (honed on oilstone); Frog bed angle = 45°. The curled cap iron (chipbreaker) is set 1 mm back from the cutting edge to break shavings and prevent grain tear-out."
        ],
        "keyTakeaway": "Jack plane roughs out, trying plane straightens long edges, and smoothing plane produces final polished surfaces.",
        "realWorldExample": "Before joining two boards for an exterior church door, a joiner runs a trying plane down both mating edges to produce light-tight glue joints."
      },
      {
        "title": "3. Chisels for Woodwork & Metalwork",
        "content": "Chisels are wedge-shaped edge tools driven by hand pressure or mallet strikes to pare away, recess, or chop out waste material.",
        "bulletPoints": [
          "Firmer Chisel (Wood): Sturdy rectangular cross-section for general heavy paring and chopping.",
          "Bevel-Edge Chisel (Wood): Long sides bevelled at 45° to allow the blade to reach into acute corners of dovetail sockets without bruising sides.",
          "Mortise Chisel (Wood): Very thick, rigid rectangular cross-section designed to withstand heavy strikes from a wooden mallet when chopping deep mortises.",
          "Safe Chisel Handling: Always chisel away from the body; keep both hands behind the cutting edge; use a wooden mallet (never a steel hammer) on wooden chisel handles.",
          "Cold Chisels (Metalwork): Forged from octagonal high carbon tool steel, hardened and tempered at the cutting tip. Flat cold chisel (cutting sheet, chipping weld spatter); Cross-cut / Cape chisel (cutting keyways and narrow slots); Diamond-point chisel (chipping V-grooves and clearing sharp corners)."
        ],
        "keyTakeaway": "Use wooden mallets on wood chisels; bevel-edge chisels clean dovetail corners; cold chisels cut cold metals.",
        "realWorldExample": "A patternmaker uses a bevel-edge chisel held bevel-down to pare a concave curved mahogany molding smoothly."
      },
      {
        "title": "4. Files, Rasps & Impelling Tools",
        "content": "Files and rasps shape and smooth metal and timber surfaces through abrasive cutting actions of numerous hardened teeth.",
        "bulletPoints": [
          "File Cuts: Single-cut (single row of parallel teeth at 65°-85° for smooth finishing on hard metals); Double-cut (two intersecting rows of teeth forming diamond points for rapid metal removal); Rasp-cut (individually raised coarse triangular teeth for wood and leather).",
          "File Grades: Coarse, Bastard, Second-cut, Smooth, Dead Smooth.",
          "Filing Methods: Cross-filing (pushing file across workpiece at 45° with full forward strokes for shaping); Draw-filing (grasping file with both hands and sliding it sideways along workpiece for fine satin finish).",
          "File Safety: NEVER use a file without a tight wooden or plastic handle (the bare pointed tang can be driven deep into the palm if caught). Clean pinned teeth with a wire file card.",
          "Hammers: Claw hammer (woodwork nail driving and curved claw pulling); Warrington hammer (cross-pein drives small panel pins in rebates); Ball-pein hammer (machinist's hammer; flat face strikes punches, hemispherical ball pein rivets pins); Wooden Mallet (strikes wooden handles)."
        ],
        "keyTakeaway": "Never use a file without a handle; clean teeth with a file card; use ball-pein hammers for metalwork and mallets for wood.",
        "realWorldExample": "When fitting a brass lock plate into a mortise, a joiner draw-files the perimeter edges to remove burrs for a flush fit."
      }
    ],
    "commonMistakes": [
      "Striking a wooden chisel handle with a steel claw hammer. (Correction: Steel hammers shatter wooden chisel handles and mushroom plastic ferrules. Always strike wood chisels with a wooden mallet.)",
      "Applying heavy downward pressure on a hacksaw or file during the backward return stroke. (Correction: Hacksaw and file teeth cut only on the forward push stroke. Dragging them under pressure backward dulls and chips tooth tips.)"
    ],
    "beceExamTips": [
      "In BECE diagrams, identify: Tenon saw (has heavy metal back spine), Coping saw (deep C-frame with thin wire blade), Rip saw (large chisel teeth).",
      "Remember the grinding bevel angle (25°) and honing angle (30°) for bench plane irons and chisels."
    ],
    "summaryChecklist": [
      "I understand why saw teeth are set alternately left and right.",
      "I know the sequential roles of Jack, Trying, and Smoothing planes.",
      "I can explain the difference between a firmer chisel, bevel-edge chisel, and mortise chisel.",
      "I can execute cross-filing and draw-filing safely with a handled file."
    ]
  },
  "jhs2-ctech-t8-wood-metal-joints": {
    "topicId": "jhs2-ctech-t8-wood-metal-joints",
    "title": "Basic Joining Methods: Common Woodworking & Metalworking Joints",
    "overview": "Artifacts are constructed by uniting separate components. The chosen joint must transfer working loads (tension, compression, shear, torsion) without distortion while maintaining aesthetic balance.",
    "introduction": "Artifacts are constructed by uniting separate components. The chosen joint must transfer working loads (tension, compression, shear, torsion) without distortion while maintaining aesthetic balance.",
    "realWorldContext": "School desks combine permanent mortise and tenon timber frames for strength with temporary bolts to attach replacement desktops.",
    "objectives": [
      "Categorize joining techniques into temporary and permanent fasteners",
      "Proportion and construct fundamental woodworking joints: butt, halving, mortise and tenon, housing, and dovetail",
      "Evaluate modern woodworking adhesives (PVA, contact adhesive, synthetic resin)",
      "Explain metal joining methods: mechanical fasteners, soft soldering, brazing, and welding"
    ],
    "sections": [
      {
        "title": "1. Engineering Principles of Joining Materials",
        "content": "Artifacts are constructed by uniting separate components. The chosen joint must transfer working loads (tension, compression, shear, torsion) without distortion while maintaining aesthetic balance.",
        "bulletPoints": [
          "Temporary Fasteners: Permit regular disassembly for maintenance, transport, or repair without damaging components. Examples: Wood screws, machine bolts with hexagonal nuts, knock-down fittings (cams and dowels).",
          "Permanent Fasteners: Form permanent structural bonds that cannot be disassembled without fracturing or damaging the joint. Examples: Glued wood joints, riveted metal plates, soldered electrical circuits, and welded steel frames."
        ],
        "keyTakeaway": "Temporary joints disassemble without damage (screws, bolts); permanent joints are fixed (glue, rivets, welds).",
        "realWorldExample": "School desks combine permanent mortise and tenon timber frames for strength with temporary bolts to attach replacement desktops."
      },
      {
        "title": "2. Common Woodworking Joints & Proportions",
        "content": "Wood joints are designed around grain orientation because wood shrinks significantly across its width while maintaining nearly constant length along its grain.",
        "bulletPoints": [
          "Butt Joint: Plain square end of one member abuts against the face of another; weakest joint because end-grain absorbs glue like a sponge; requires reinforcement with dowels, nails, or corner blocks.",
          "Halving Joints (Corner Halving, T-Halving, Cross Halving): Half the thickness (T/2) of each mating piece is removed so the joined faces lie flush. Used in picture frames, door lattices, and framing.",
          "Mortise & Tenon Joint: The strongest and most reliable frame joint in furniture. A protruding rectangular tongue (tenon) on one rail fits snugly into an excavated socket (mortise) in the upright stile. Standard rule: Tenon thickness = 1/3 of the timber thickness. Variations: Through tenon (passes fully through stile and wedged), Haunched tenon (haunch fills rebate/groove in panel door frames).",
          "Housing Joint (Dado): A trench cut across the grain of a vertical side panel receives the end of a horizontal shelf. Through housing (trench visible at front); Stopped housing (trench stops 10-15 mm short of front to hide joint).",
          "Dovetail Joint: Flared wedge-shaped pins and tails interlock tightly. Outstanding tensile resistance against pulling forces; universally used in cabinet drawer fronts.",
          "Mitre Joint: Two members cut at 45° to form a neat 90° corner without exposing unsightly end grain. Reinforced with splines or dowels."
        ],
        "keyTakeaway": "Mortise and tenon joints have tenons proportioned to one-third of timber thickness; dovetails resist tensile pull.",
        "realWorldExample": "Kitchen cabinet drawers rely on through or lap dovetail joints so the drawer front never detaches under daily pulling."
      },
      {
        "title": "3. Wood Adhesives & Fastening Hardware",
        "content": "Modern glues create adhesive bonds that are often stronger than the shear strength of the surrounding natural wood fibers.",
        "bulletPoints": [
          "Polyvinyl Acetate (PVA / White Wood Glue): Water-based emulsion; non-toxic, easy cleanup with damp cloth, strong bond in dry interior environments; requires clamping with sash cramps for 2 to 4 hours.",
          "Contact Adhesive: Synthetic rubber dissolved in solvent; coated thinly on both mating surfaces, allowed to air dry until tacky (10-15 mins), then pressed firmly together; bonds instantaneously on contact without clamping. Used for laminate sheets (Formica).",
          "Urea-Formaldehyde / Polyurethane Glue: Highly water-resistant, gaps-filling, exterior grade adhesive for outdoor gates and marine boats.",
          "Wood Screws: Steel or brass threaded fasteners; types include Countersunk (sits flush), Round head (sits proud on thin brackets), and Raised head. Always drill clearance hole in top piece, pilot hole in receiving piece, and countersink recess."
        ],
        "keyTakeaway": "PVA is ideal for interior woodwork with clamping; contact adhesive bonds laminates instantly on contact.",
        "realWorldExample": "Laminating a Formica sheet onto a counter involves rolling contact adhesive onto both surfaces and pressing with a rubber roller."
      },
      {
        "title": "4. Metal Joining: Fasteners, Soldering, Brazing & Welding",
        "content": "Metal joining ranges from mechanical clamping to metallurgical thermal fusion.",
        "bulletPoints": [
          "Riveting: Cold or hot mechanical fastening using ductile pins (snap head, countersunk head). Rivet inserted through drilled holes, and protruding shank peined over with a ball-pein hammer and rivet set.",
          "Threaded Fasteners: High tensile bolts, machine screws, and nuts used with flat washers (to distribute load over soft metal) and spring washers (to prevent vibration loosening).",
          "Soft Soldering: Joining clean metal surfaces using a tin-lead or tin-silver alloy (solder) melting below 450°C (approx 180°C - 230°C). Requires chemical flux (zinc chloride or resin) to dissolve oxides and promote wetting. Used in electronics and copper pipes.",
          "Brazing (Hard Soldering): Joining ferrous and non-ferrous metals using a copper-zinc alloy (spelter) and borax flux at temperatures above 450°C (approx 850°C) with an oxy-acetylene or propane torch.",
          "Welding: Fusing parent metal edges by melting them together with or without a filler rod at high temperatures (over 1500°C) using electric arc or oxy-acetylene flame. Forms the strongest permanent metallic bond."
        ],
        "keyTakeaway": "Soft soldering occurs below 450°C; brazing occurs above 450°C; welding melts parent metals together.",
        "realWorldExample": "Plumbing copper water supply pipes are joined by capillary soft soldering using lead-free solder and flux."
      }
    ],
    "commonMistakes": [
      "Sizing a tenon to half or two-thirds of the timber thickness. (Correction: Joinery standards require tenon thickness to equal exactly one-third of the wood thickness, leaving equal one-third shoulders.)",
      "Driving wood screws into hardwood without drilling clearance and pilot holes. (Correction: Driving screws without pilot holes splits hardwood boards or twists screw heads completely off. Drill clearance, pilot, and countersink.)"
    ],
    "beceExamTips": [
      "In BECE joint identification: Dovetail joints have fan-shaped wedge pins; Mortise and tenon joints have a rectangular tongue inserted into a matching hole.",
      "Remember the temperatures: Soft soldering < 450°C; Brazing > 450°C; Welding melts the base metal."
    ],
    "summaryChecklist": [
      "I know the difference between temporary and permanent fasteners.",
      "I can calculate mortise and tenon joint proportions (1/3 rule).",
      "I can explain why dovetail joints are preferred for drawer fronts.",
      "I can differentiate soft soldering, brazing, and fusion welding."
    ]
  },
  "jhs2-ctech-t9-food-commodities-nutrition": {
    "topicId": "jhs2-ctech-t9-food-commodities-nutrition",
    "title": "Food Commodities: Cereals, Starchy Roots, Legumes, Flesh Foods & Nutritional Value",
    "overview": "Food commodities are raw agricultural produce harvested from plants and animals that provide nutrients required for growth, energy, tissue repair, and health maintenance.",
    "introduction": "Food commodities are raw agricultural produce harvested from plants and animals that provide nutrients required for growth, energy, tissue repair, and health maintenance.",
    "realWorldContext": "Kenkey (fermented maize) paired with fried fish and hot pepper provides balanced carbohydrates, complete protein, and Vitamin C.",
    "objectives": [
      "Classify Ghanaian food commodities into cereals, roots/tubers, legumes, flesh foods, and fruits/vegetables",
      "Identify the six classes of nutrients, their physiological functions, and key dietary sources",
      "Explain the concept of protein complementation in local staple meals",
      "Identify nutritional deficiency diseases (kwashiorkor, marasmus, scurvy, rickets, goitre, anaemia)"
    ],
    "sections": [
      {
        "title": "1. Ghanaian Food Commodities & Classification",
        "content": "Food commodities are raw agricultural produce harvested from plants and animals that provide nutrients required for growth, energy, tissue repair, and health maintenance.",
        "bulletPoints": [
          "Cereals and Grains: Maize (corn), rice, millet, sorghum, wheat, oats. High in starch (complex carbohydrates), dietary fiber, and B-complex vitamins in whole grains. Staples: Kenkey, banku, tuo zaafi, koko, bread.",
          "Starchy Roots and Tubers: Cassava, yam, cocoyam, sweet potato, plantain. Dense dietary energy sources; rich in potassium and Vitamin C when fresh; low in protein (< 1-2%). Staples: Fufu, ampesi, gari, konkonte.",
          "Legumes, Pulses and Oilseeds: Cowpeas (beans), bambara groundnuts, soya beans, groundnuts (peanuts). Rich in plant protein (20-40%), iron, soluble fiber, and B-vitamins. Soya bean contains a complete protein profile.",
          "Flesh Foods (Animal Products): Beef, goat meat, mutton, poultry, fish, eggs, dairy milk. Contain High Biological Value (HBV) complete proteins containing all essential amino acids, bioavailable heme iron, Vitamin A, Vitamin B12, calcium, and zinc.",
          "Fruits and Vegetables: Citrus, pawpaw, mangoes, tomatoes, garden eggs, kontomire (cocoyam leaves), gboma, carrots. Rich in Vitamin C (ascorbic acid), beta-carotene (provitamin A), potassium, antioxidants, and water.",
          "Fats and Oils: Red palm oil, coconut oil, groundnut oil, shea butter. Concentrated energy sources (9 kcal/g); vehicles for fat-soluble vitamins (A, D, E, K). Red palm oil is exceptionally rich in carotene."
        ],
        "keyTakeaway": "Cereals and tubers provide staple energy; legumes and flesh foods provide proteins; vegetables provide vitamins and minerals.",
        "realWorldExample": "Kenkey (fermented maize) paired with fried fish and hot pepper provides balanced carbohydrates, complete protein, and Vitamin C."
      },
      {
        "title": "2. Essential Nutrients & Biological Functions",
        "content": "Nutrients are the organic and inorganic chemical constituents in food that the human body metabolizes for physiological function.",
        "bulletPoints": [
          "Carbohydrates: Primary energy source (4 kcal/g). Comprises monosaccharides (glucose, fructose), disaccharides (sucrose, lactose), and polysaccharides (starch, cellulose/dietary fiber).",
          "Proteins: Essential for growth, tissue repair, enzyme and hormone synthesis, and immune antibodies (4 kcal/g). Built from 20 amino acids; 9 are essential and must be supplied directly by diet.",
          "Fats & Lipids: Dense energy reserve (9 kcal/g), insulation against hypothermia, shock-absorbing protection around vital organs, cell membrane structure.",
          "Vitamins (Micronutrients):",
          "  * Fat-Soluble (A, D, E, K): Vitamin A (retinol) for night vision and epithelial health; Vitamin D (calciferol) for calcium absorption and bone mineralization; Vitamin E for antioxidant cellular protection; Vitamin K for prothrombin blood clotting.",
          "  * Water-Soluble (B-Complex, C): B-complex vitamins act as metabolic co-enzymes; Vitamin C (ascorbic acid) synthesizes collagen connective tissue and boosts iron absorption.",
          "Minerals: Calcium and phosphorus build bone and teeth matrix; Iron builds hemoglobin to transport oxygen in blood; Iodine synthesizes thyroid hormones regulating metabolic rate.",
          "Water & Dietary Fiber (Roughage): Water maintains blood volume, body temperature, and chemical reactions. Fiber stimulates intestinal peristalsis and prevents constipation."
        ],
        "keyTakeaway": "Carbohydrates provide fuel, proteins build body tissues, and vitamins/minerals regulate bodily processes.",
        "realWorldExample": "Drinking freshly squeezed orange juice with a bean meal enhances the absorption of plant-based non-heme iron due to Vitamin C."
      },
      {
        "title": "3. Protein Complementation & Quality",
        "content": "Proteins differ in nutritional quality based on their essential amino acid profile. Animal proteins possess High Biological Value (HBV), whereas most plant proteins are Low Biological Value (LBV) due to limiting amino acids.",
        "bulletPoints": [
          "Limiting Amino Acids: Cereals are deficient in the essential amino acid lysine but contain methionine. Legumes (beans, groundnuts) are rich in lysine but limited in methionine.",
          "Protein Complementation Principle: Combining two or more incomplete plant protein sources in the same meal allows the amino acid excess of one food to compensate for the deficiency of the other, yielding a combined protein quality comparable to meat or eggs.",
          "Ghanaian Complementary Dishes: Gari and Beans (Red-Red), Rice and Beans (Waakye), Koko and Koose (millet porridge with cowpea fritters), Corn dough and Groundnut paste."
        ],
        "keyTakeaway": "Pairing cereals with legumes (e.g. Waakye, Red-Red) creates complete protein meals without needing expensive meat.",
        "realWorldExample": "A boarding school student eating Waakye (rice and cowpeas) receives all 9 essential amino acids needed for adolescent muscle growth."
      },
      {
        "title": "4. Nutritional Deficiency Diseases & Remediation",
        "content": "Malnutrition encompasses both undernutrition (deficiencies) and overnutrition (obesity). In developing regions, micronutrient and protein deficiencies remain critical public health issues.",
        "bulletPoints": [
          "Kwashiorkor: Severe protein deficiency in the presence of adequate carbohydrate intake. Clinical signs: Oedema (swollen feet and pot belly), peeling dermatitis, thinning brittle reddish-orange hair, apathy, and muscle wasting. Remediation: High-protein weaning foods (milk, eggs, soya powder, mashed fish).",
          "Marasmus: Severe deficiency of all calories (total starvation). Clinical signs: Extreme emaciation, ribs clearly visible, 'old person' wrinkled face, voracious hunger, dry skin.",
          "Anaemia: Iron deficiency causing low hemoglobin. Symptoms: Chronic fatigue, pale conjunctiva and fingernails, dizziness, shortness of breath. Remediation: Liver, kontomire, green vegetables, iron supplementation.",
          "Night Blindness & Xerophthalmia: Vitamin A deficiency causing inability to see in dim light and drying of cornea. Remediation: Palm oil, carrots, mangoes, liver.",
          "Scurvy: Vitamin C deficiency causing swollen bleeding gums, pinpoint skin hemorrhages, delayed wound healing. Remediation: Fresh citrus fruits, tomatoes, pawpaw.",
          "Rickets (Children) & Osteomalacia (Adults): Vitamin D and calcium deficiency causing soft, bowed legs and bone deformities. Remediation: Morning sunlight exposure, fortified milk, eggs, small fish eaten with bones.",
          "Goitre: Iodine deficiency causing thyroid gland swelling in the neck. Remediation: Iodated table salt, marine seafood."
        ],
        "keyTakeaway": "Kwashiorkor is protein deficiency with oedema; marasmus is total starvation; anaemia is iron deficiency.",
        "realWorldExample": "Adding iodated salt to household food preparation prevents goitre and promotes healthy brain development in infants."
      }
    ],
    "commonMistakes": [
      "Confusing Kwashiorkor with Marasmus. (Correction: Kwashiorkor is protein deficiency characterized by swollen belly (oedema) and reddish hair; Marasmus is total caloric starvation with severe emaciation and no swelling.)",
      "Assuming that plant-based meals cannot provide complete protein. (Correction: Through protein complementation, pairing legumes with grains (e.g., rice and beans) yields a complete essential amino acid profile.)"
    ],
    "beceExamTips": [
      "In BECE questions on deficiency diseases, pair: Vitamin A - Night blindness; Vitamin C - Scurvy; Vitamin D - Rickets; Iron - Anaemia; Iodine - Goitre.",
      "Remember that cassava and yam are rich in carbohydrates but very poor in protein."
    ],
    "summaryChecklist": [
      "I can classify Ghanaian foods into the 6 major food commodity groups.",
      "I know the physiological functions of carbohydrates, proteins, fats, vitamins, and minerals.",
      "I can explain how protein complementation works using Waakye or Red-Red as examples.",
      "I can list 6 nutritional deficiency diseases and their dietary corrections."
    ]
  },
  "jhs2-ctech-t10-food-preparation-cooking": {
    "topicId": "jhs2-ctech-t10-food-preparation-cooking",
    "title": "Principles of Food Preparation & Cooking Methods (Moist Heat, Dry Heat & Frying)",
    "overview": "Cooking is the application of heat to raw food ingredients to induce physical and chemical transformations that enhance safety, digestibility, palatability, and preservation.",
    "introduction": "Cooking is the application of heat to raw food ingredients to induce physical and chemical transformations that enhance safety, digestibility, palatability, and preservation.",
    "realWorldContext": "Cooking dried red kidney beans at boiling temperatures for 10 minutes destroys the toxic phytohaemagglutinin lectin, making them completely safe.",
    "objectives": [
      "Explain the culinary, physiological, and hygiene reasons for cooking food",
      "Apply strict kitchen hygiene rules and food temperature danger zone controls to prevent cross-contamination",
      "Compare moist heat cooking methods (boiling, steaming, stewing, poaching) regarding nutrient retention",
      "Execute dry heat and frying methods safely and manage kitchen chip-pan fires correctly"
    ],
    "sections": [
      {
        "title": "1. Culinary Science & Reasons for Cooking Food",
        "content": "Cooking is the application of heat to raw food ingredients to induce physical and chemical transformations that enhance safety, digestibility, palatability, and preservation.",
        "bulletPoints": [
          "Destruction of Pathogens: Heating food above 75°C destroys disease-causing bacteria (Salmonella, Escherichia coli, Listeria) and parasites, preventing foodborne infections.",
          "Improves Digestibility: Heat denatures tough animal muscle fibers, converts insoluble collagen into tender gelatin, and gelatinizes insoluble plant starch granules so digestive enzymes can hydrolyze them easily.",
          "Enhances Sensory Qualities: Develops appetizing aromas, rich flavors, golden crusts, and pleasing textures through caramelization of sugars and the Maillard browning reaction.",
          "Preservation: Heat deactivates natural food spoilage enzymes and pasteurizes foods, extending storage shelf life."
        ],
        "keyTakeaway": "Cooking destroys foodborne pathogens, softens tough connective fibers, and enhances flavor and shelf life.",
        "realWorldExample": "Cooking dried red kidney beans at boiling temperatures for 10 minutes destroys the toxic phytohaemagglutinin lectin, making them completely safe."
      },
      {
        "title": "2. Kitchen Hygiene, Safety & The Danger Zone",
        "content": "Food poisoning results from consuming foods contaminated by pathogenic microorganisms, their toxins, or harmful chemical residues. Rigorous sanitation prevents outbreaks.",
        "bulletPoints": [
          "The Food Temperature Danger Zone (5°C to 60°C): Bacteria multiply logarithmically between 5°C and 60°C, doubling their population every 20 minutes at body temperature (37°C).",
          "Critical Controls: Keep cold perishable foods stored below 5°C in the refrigerator; keep hot prepared foods holding above 60°C until serving; reheat leftovers thoroughly to a core temperature of at least 75°C.",
          "Personal Hygiene Standards: Wash hands with antibacterial soap under warm running water for 20 seconds before food prep; tie back hair and wear a clean chef's cap/hairnet; remove hand jewelry; cover skin cuts with waterproof blue plasters.",
          "Preventing Cross-Contamination: Strictly segregate raw meats/seafood from ready-to-eat cooked foods. Use dedicated color-coded chopping boards (Red = raw meat, Yellow = raw poultry, Blue = raw seafood, Green = vegetables, White = dairy/bakery)."
        ],
        "keyTakeaway": "Keep hot foods above 60°C, cold foods below 5°C, and use separate cutting boards to stop cross-contamination.",
        "realWorldExample": "Never cut raw chicken on a wooden cutting board and then use the same unwashed board to slice tomatoes for a fresh salad."
      },
      {
        "title": "3. Moist Heat Cooking Methods",
        "content": "Moist heat methods transfer thermal energy to food via liquid (water, stock, milk) or steam.",
        "bulletPoints": [
          "Boiling: Cooking food completely immersed in rapidly bubbling liquid at 100°C. Suitable for starchy tubers (yam, cassava), root crops, and hard-boiled eggs. Drawback: High loss of water-soluble vitamins (B and C) through leaching and prolonged heat degradation.",
          "Steaming: Cooking food suspended above boiling water in the vapor stream inside a tightly covered steamer at 100°C. The food never touches the boiling water. Excellent retention of water-soluble vitamins, minerals, crisp texture, and natural color. Examples: Kpokpoi, abolo, steamed fish fillets, green vegetables.",
          "Stewing: Slow, gentle simmering of food in a small quantity of seasoned liquid at 85°C - 90°C in a tightly covered casserole for a prolonged duration. The cooking liquor becomes an integral part of the gravy, retaining all leached minerals and vitamins. Excellent for tenderizing tough, inexpensive cuts of meat.",
          "Poaching: Cooking delicate foods submerged in liquid held just below simmering point (71°C - 82°C) with no visible surface boiling bubbles. Suitable for delicate fish, eggs, and fruit compotes."
        ],
        "keyTakeaway": "Steaming preserves the highest percentage of vitamins; stewing retains leached nutrients in the served gravy.",
        "realWorldExample": "Ga communities steam kpokpoi (fermented cornmeal) in perforated steamers during the Homowo festival, creating a light, nutrient-rich dish."
      },
      {
        "title": "4. Dry Heat Methods & Frying Principles",
        "content": "Dry heat methods cook food without liquid, utilizing dry heated air, radiant heat, or hot cooking oil.",
        "bulletPoints": [
          "Baking: Cooking by dry convective hot air in an enclosed oven (150°C - 230°C). Causes starch gelatinization, protein coagulation, and surface caramelization. Examples: Bread, pastries, sponge cakes, meat pies.",
          "Roasting: Cooking whole cuts of meat or root vegetables exposed to dry oven heat or rotated over an open charcoal fire/spit. Examples: Roasted chicken, roasted plantain (kofi brokeman), roasted yam.",
          "Grilling / Broiling: Cooking by direct, intense radiant heat from above (overhead grill) or below (charcoal brazier). Fast cooking method suitable for tender meat steaks, fish, and kebabs.",
          "Shallow / Pan Frying: Cooking food in a thin layer of hot cooking oil in a skillet (tatale, kaklo, fried eggs).",
          "Deep Frying: Cooking food completely submerged in a deep reservoir of preheated cooking oil at 175°C - 190°C. The intense heat flashes surface moisture to steam, forming a crisp golden outer barrier that seals in juices and prevents oil penetration. Examples: Bofrot (doughnuts), fried fish, plantain chips.",
          "Safety in Deep Frying: Never fill oil pan more than half full; pat food dry before adding to hot oil to prevent explosive splattering; never leave heating oil unattended. IN CASE OF OIL FIRE: Turn off gas/heat source; slide a metal lid or damp wrung-out cloth over pan to smother oxygen. NEVER POUR WATER ON BURNING OIL."
        ],
        "keyTakeaway": "Never pour water on an oil fire; smother with a metal lid or fire blanket and isolate the heat source.",
        "realWorldExample": "Street food vendors frying bofrot maintain oil at 180°C; if oil temperature drops below 160°C, the bofrot absorbs excess oil and becomes greasy and heavy."
      }
    ],
    "commonMistakes": [
      "Pouring cold water into a chip pan that has caught fire on the stove. (Correction: Water instantly vaporizes into steam beneath the burning oil, throwing an explosive cloud of burning droplets into the kitchen. Smother with a pot lid or damp blanket.)",
      "Chopping and washing green leafy vegetables after slicing them. (Correction: Washing vegetables after shredding leaches out water-soluble vitamins B and C into the rinse water. Wash whole leaves first, then slice.)"
    ],
    "beceExamTips": [
      "In BECE, explain the difference between boiling (100°C, immersed in water) and steaming (cooked by steam vapor, food does not touch liquid).",
      "Remember the Food Danger Zone range: 5°C to 60°C."
    ],
    "summaryChecklist": [
      "I can explain 4 reasons for cooking food.",
      "I know the temperature limits of the Food Danger Zone (5°C - 60°C).",
      "I can compare nutrient retention between boiling, steaming, and stewing.",
      "I know the exact procedure for extinguishing a burning frying oil pan."
    ]
  },
  "jhs2-ctech-t11-sewing-tools-equipment": {
    "topicId": "jhs2-ctech-t11-sewing-tools-equipment",
    "title": "Sewing Tools, Equipment & Basic Stitches in Garment Making",
    "overview": "Garment construction requires specialized equipment designed to handle flexible woven and knitted textiles with accuracy.",
    "introduction": "Garment construction requires specialized equipment designed to handle flexible woven and knitted textiles with accuracy.",
    "realWorldContext": "A fashion student uses dressmaker's shears to cut pattern pieces along grainlines without distorting the fabric layers.",
    "objectives": [
      "Classify sewing tools into measuring, marking, cutting, sewing, and pressing categories",
      "Identify the operating mechanisms and parts of a domestic sewing machine and diagnose common stitching faults",
      "Execute temporary stitches (even, uneven, diagonal tacking) and permanent stitches (running, backstitch, hemming, overcasting)",
      "Maintain sewing equipment through cleaning, oiling, and safe needle disposal"
    ],
    "sections": [
      {
        "title": "1. Classification of Sewing Tools & Equipment",
        "content": "Garment construction requires specialized equipment designed to handle flexible woven and knitted textiles with accuracy.",
        "bulletPoints": [
          "Measuring Tools: Flexible plastic-coated fiberglass tape measure (150 cm / 60 inches with metal ends for body measurements); Seam / Hem gauge (small 15 cm metal or card ruler with sliding indicator for measuring hems, pleats, and buttonhole intervals).",
          "Marking Tools: Tailor's chalk (wax or clay chalk slabs for marking darts, seamlines, and matching notches); Tracing wheel and dressmaker's carbon paper (toothed wheel that transfers pattern lines through carbon sheet onto fabric).",
          "Cutting Tools: Dressmaker's shears (20-25 cm blades with bent handles allowing the lower blade to rest flat on the cutting table without lifting fabric); Pinking shears (serrated zigzag blades producing non-fraying seam finishes); Small embroidery scissors (for clipping thread ends and slitting buttonholes); Seam ripper (hooked blade with safety ball to unpick mistakes).",
          "Sewing & Holding Tools: Hand sewing needles (Sharps for general sewing, Betweens for tailoring, Crewel for embroidery); Steel dressmaker pins and pincushion; Thimble (dimpled metal cap worn on the middle finger to push needles through heavy fabrics without injury).",
          "Pressing Equipment: Steam iron, padded ironing board, and tailor's ham (for pressing curved bust and hip seams)."
        ],
        "keyTakeaway": "Dressmaker's shears have angled handles to cut fabric flat on the table; pinking shears produce zigzag anti-fray edges.",
        "realWorldExample": "A fashion student uses dressmaker's shears to cut pattern pieces along grainlines without distorting the fabric layers."
      },
      {
        "title": "2. The Domestic Sewing Machine: Parts & Troubleshooting",
        "content": "The domestic sewing machine uses two threads—an upper spool thread and a lower bobbin thread—that interlock in the middle of fabric layers to form a lockstitch.",
        "bulletPoints": [
          "Key Machine Components: Balance wheel (handwheel rotated towards operator), spool pin, bobbin winder, upper thread tension discs, thread take-up lever (raises and pulls thread to complete stitch), needle clamp screw, presser foot (holds fabric down), presser foot lifter, feed dog (toothed bars under throat plate that advance fabric), bobbin case and shuttle hook.",
          "Common Machine Faults & Remedies:",
          "  * Loops forming underneath fabric: Caused by loose upper thread tension or improper upper threading (thread not seated between tension discs). Remedy: Raise presser foot, rethread upper path completely, and tighten tension dial.",
          "  * Upper thread snapping: Caused by upper tension too tight, blunt needle, needle inserted backwards, or rough knot in thread. Remedy: Loosen tension, insert fresh needle correctly with flat side to needle bar.",
          "  * Needle breaking: Caused by pulling or pushing fabric forcefully while sewing, bent needle, or needle striking presser foot or throat plate.",
          "  * Skipped stitches: Caused by bent needle, blunt point, or needle too fine for heavy fabric.",
          "Machine Maintenance: Brush lint from bobbin area regularly; apply sewing machine oil to designated oil holes; never use cooking oil or engine oil."
        ],
        "keyTakeaway": "Loops forming underneath fabric indicate loose upper thread tension; always turn the handwheel towards yourself.",
        "realWorldExample": "When fixing looped stitches on the underside of a school skirt seam, the student rethreads the upper tension unit rather than adjusting the bobbin."
      },
      {
        "title": "3. Hand Stitches: Temporary vs Permanent",
        "content": "Hand stitches are classified according to whether they are removed after machine stitching or remain permanently as functional structural bonds.",
        "bulletPoints": [
          "Temporary Stitches (Tacking / Basting):",
          "  * Even Basting: Stitches and spaces are equal (approx 6 mm); holds garment seams securely for fitting before final machine stitching.",
          "  * Uneven Basting: Long stitches (12 mm) on the upper side, short stitches (3 mm) on the underside; quickly holds flat seams and guides topstitching.",
          "  * Diagonal / Tailor's Basting: Slanted stitches holding multiple layers (coat lapels, suit interfacings) flat without slipping.",
          "Permanent Stitches:",
          "  * Running Stitch: Fine, equal continuous stitches (2-3 mm); used for gathering, easing fullness, and delicate seams.",
          "  * Backstitch: Strongest hand stitch; resembles machine lockstitching on the right side. The needle steps backward into the end of the previous stitch and advances two stitch lengths forward on the underside.",
          "  * Hemming Stitch: Slanted discreet stitches catching one thread of the garment fabric and passing through the folded hem edge.",
          "  * Slip Stitch (Blind Hemming): Invisible stitches concealed inside the folded hem edge for luxury garments.",
          "  * Overcasting Stitch: Slanted loops sewn over raw fabric edges to prevent woven threads from fraying."
        ],
        "keyTakeaway": "Basting stitches are temporary for fitting; backstitch is the strongest permanent hand stitch.",
        "realWorldExample": "A tailor repairs a torn shoulder seam by hand using backstitch to match the tensile strength of factory machine stitches."
      },
      {
        "title": "4. Decorative Hand Stitches & Seam Finishes",
        "content": "Decorative stitches embellish clothing borders, pocket flaps, and necklines while reinforcing fabric edges against wear.",
        "bulletPoints": [
          "Chain Stitch: Interlocking loops forming a continuous chain pattern; outlines floral motifs and lettering.",
          "Blanket / Buttonhole Stitch: L-shaped locked loops worked along raw edges; finishes thick woolen blanket perimeters and reinforces hand-cut buttonholes.",
          "Satin Stitch: Closely spaced parallel flat stitches covering design areas completely with a smooth, glossy satin appearance.",
          "French Knots: Thread wrapped 2-3 times around needle tip before re-entering fabric; creates raised textured dots for flower centers.",
          "Herringbone Stitch: Crossed diagonal stitches used for catching down raw hem edges on heavy fabrics and decorative border borders."
        ],
        "keyTakeaway": "Decorative stitches add artistic embellishment while strengthening fabric edges and hand-worked buttonholes.",
        "realWorldExample": "Embroidering school crests on blazer pockets combines satin stitch for solid badge areas and chain stitch for outline lettering."
      }
    ],
    "commonMistakes": [
      "Tensioning the bobbin screw when loose loops appear underneath the sewn fabric. (Correction: Loops on the underside are almost always caused by lack of tension in the UPPER thread path. Check upper threading and tension discs first.)",
      "Using pinking shears to cut out basic garment pattern paper pieces. (Correction: Paper dulls the precision serrated cutting edges of pinking shears quickly. Use pinking shears only for trimming fabric seam allowances.)"
    ],
    "beceExamTips": [
      "In BECE stitch diagrams: Backstitch looks like a continuous machine line on top; Running stitch shows equal dashes and gaps.",
      "Identify sewing machine feed dog: The toothed metal mechanism beneath the presser foot that pushes fabric backward as you sew."
    ],
    "summaryChecklist": [
      "I can classify sewing tools into their 5 functional categories.",
      "I know the main parts of a sewing machine and how to diagnose thread looping.",
      "I can differentiate even basting, running stitch, and backstitch.",
      "I know how to execute overcasting and blanket stitches."
    ]
  },
  "jhs2-ctech-t12-finishes-maintenance": {
    "topicId": "jhs2-ctech-t12-finishes-maintenance",
    "title": "Surface Finishes (Paints, Varnishes, Polish) & Maintenance of Tools and Artifacts",
    "overview": "A finish is a protective or decorative liquid, paste, or powdered coating applied to the exterior of an artifact. Unfinished surfaces deteriorate rapidly under tropical weather.",
    "introduction": "A finish is a protective or decorative liquid, paste, or powdered coating applied to the exterior of an artifact. Unfinished surfaces deteriorate rapidly under tropical weather.",
    "realWorldContext": "Coating a school dining table with polyurethane varnish prevents spilled tomato soup from staining the porous timber grain.",
    "objectives": [
      "Explain the protective, sanitary, and aesthetic functions of surface finishes on wood, metal, and plastic",
      "Identify the constituents of paints (pigment, binder, solvent, driers) and the three-coat painting system",
      "Compare transparent wood finishes: stains, polyurethane varnishes, cellulose lacquers, French polish, and wax polish",
      "Execute tool maintenance: rust removal, lubrication, grinding, honing cutting edges, and proper workshop storage"
    ],
    "sections": [
      {
        "title": "1. Purpose of Applying Surface Finishes",
        "content": "A finish is a protective or decorative liquid, paste, or powdered coating applied to the exterior of an artifact. Unfinished surfaces deteriorate rapidly under tropical weather.",
        "bulletPoints": [
          "Preservation & Protection: Protects timber against atmospheric humidity swings that cause cupping and rot; shields steel from oxygen and moisture to prevent rust; prevents UV photodegradation of plastics.",
          "Hygiene & Washability: Seals porous surfaces, preventing dirt, grease, and bacteria from penetrating grain, making artifacts easy to wipe clean and sanitize.",
          "Aesthetics & Decoration: Enhances wood figure, highlights medullary ray silver grain, provides rich color, gloss, or satin sheen, and conceals filler patches or assembly pins."
        ],
        "keyTakeaway": "Finishes protect against rot and rust, seal surfaces for hygiene, and enhance visual appeal.",
        "realWorldExample": "Coating a school dining table with polyurethane varnish prevents spilled tomato soup from staining the porous timber grain."
      },
      {
        "title": "2. Types of Wood Finishes & Application Steps",
        "content": "Surface preparation represents 80% of finishing success. Any imperfection left during sanding will be magnified by high-gloss topcoats.",
        "bulletPoints": [
          "Surface Preparation: Fill nail holes with matching wood filler; sand sequentially with 80-grit, 120-grit, 180-grit, and 240-grit sandpaper STRICTLY parallel to the grain. Never sand across the grain (leaves permanent scratches). Wipe clean with a tack cloth.",
          "Wood Stains: Solutions of dyes or pigments in water, oil, or spirit; alters timber color without obscuring natural grain patterns.",
          "Varnish: Homogeneous solution of drying oil (linseed, tung oil) and synthetic resin (polyurethane, alkyd) in solvent. Dries to a tough, transparent, waterproof, scratch-resistant film.",
          "Cellulose Lacquer: Synthetic resins dissolved in volatile thinners; dries in minutes by solvent evaporation to a mirror-like gloss. Applied via spray guns.",
          "French Polish (Shellac): Natural flakes secreted by the lac insect dissolved in methylated spirit; rubbed onto wood using a cotton wool pad ('rubber') in figure-eight motions; produces an opulent, deep antique gloss.",
          "Wax Polish: Natural beeswax or carnauba wax dissolved in turpentine; buffed with a soft cloth to a warm, low-sheen satin luster.",
          "Paint System (Opaque Coating):",
          "  * Primer: Penetrates and seals porous wood or chemically passivates metal (e.g. red oxide primer).",
          "  * Undercoat: High-pigment intermediate coat providing opacity, color build, and a flat tooth for the gloss.",
          "  * Topcoat (Gloss / Enamel): Provides weather resistance, UV protection, hardness, and final sheen."
        ],
        "keyTakeaway": "Always sand parallel to the wood grain; painting requires Primer, Undercoat, and Topcoat in sequence.",
        "realWorldExample": "A joiner applies a thinned first coat of varnish to seal timber pores, de-nibs with fine sandpaper, and applies two full gloss topcoats."
      },
      {
        "title": "3. Metal Finishes & Corrosion Prevention",
        "content": "Corrosion is the electrochemical oxidation of metals into oxides or salts. Finishes create physical barriers or electrochemical sacrificial protection.",
        "bulletPoints": [
          "Painting Metal: Degrease surface with solvent, wire brush to remove scale, apply zinc chromate or red oxide primer, followed by two coats of synthetic alkyd enamel.",
          "Galvanizing: Dipping cleaned mild steel into a bath of molten zinc at 450°C. Zinc bonds metallurgically to the steel; even if scratched, zinc corrodes preferentially (sacrificial anode protection), keeping the steel rust-free.",
          "Electroplating: Depositing a microscopic coating of corrosion-resistant metal (chromium, nickel, gold, silver) onto the workpiece via electrolysis. Used for vehicle bumpers, water taps, and decorative hardware.",
          "Anodizing: Electrolytic process that thickens the natural protective oxide film on aluminium surfaces, allowing vivid color dyes to be absorbed."
        ],
        "keyTakeaway": "Galvanizing coats steel in molten zinc for sacrificial corrosion protection; electroplating deposits metals electrolytically.",
        "realWorldExample": "Corrugated roofing sheets used across Ghana are galvanized with zinc to withstand decades of monsoon rains without rusting through."
      },
      {
        "title": "4. Preventive Maintenance of Workshop Tools",
        "content": "Systematic tool maintenance reduces operational friction, preserves cutting geometry, prevents accidents, and extends equipment lifespan.",
        "bulletPoints": [
          "Routine Cleaning: Remove wood shavings, sawdust, and metal swarf using a bench brush immediately after work; never blow swarf with mouth (flying particles can injure eyes).",
          "Rust Prevention: Apply a light film of machine oil (3-In-One oil) to bare steel soles of planes, saw blades, and chisels before storage in humid environments.",
          "Sharpening Edge Tools:",
          "  * Grinding: Restoring the 25° primary bevel on a motorized water-cooled grindstone when the edge is nicked or heavily rounded.",
          "  * Honing: Rubbing the cutting bevel on a fine lubricated oilstone at 30° until a wire burr forms, then stropping the flat back dead flat on the stone to snap off the burr.",
          "Storage: Hang saws by handles; store chisels in wooden racks with cutting edges shielded; store planes on their sides so cutting irons do not touch the wooden benchtop; use shadow boards for hand tools."
        ],
        "keyTakeaway": "Store planes on their sides to protect irons; grind bevel at 25° and hone at 30° on an oilstone.",
        "realWorldExample": "At the close of Friday practicals, workshop prefects wipe all steel plane soles with an oily rag before locking the tool cabinets."
      }
    ],
    "commonMistakes": [
      "Sandpapering wood across the grain to remove rough spots faster. (Correction: Sanding across the grain tears wood fibers, leaving permanent white scratch marks that show vividly when varnish or stain is applied. Always sand parallel to the grain.)",
      "Placing a bench plane sole-down directly on a concrete or wooden workbench. (Correction: Placing a plane down on its sole dulls or chips the sharp cutting iron against grit on the bench. Always lay bench planes on their side.)"
    ],
    "beceExamTips": [
      "In BECE questions on paint composition: Pigment gives color; Binder holds particles together; Solvent regulates flow; Drier accelerates drying.",
      "Remember the three coats of painting: 1. Primer, 2. Undercoat, 3. Topcoat/Gloss."
    ],
    "summaryChecklist": [
      "I can state three reasons for applying finishes to artifacts.",
      "I know the sequential steps in painting: primer, undercoat, topcoat.",
      "I can explain how galvanizing protects steel from corrosion.",
      "I know how to sharpen and hone a wood chisel and store bench planes."
    ]
  },
  "jhs2-ctech-t13-entrepreneurship-career": {
    "topicId": "jhs2-ctech-t13-entrepreneurship-career",
    "title": "Entrepreneurship, Career Pathways & Simple Enterprise Budgeting in Technology",
    "overview": "Entrepreneurship is the process of identifying a market need, mobilizing resources (capital, human labor, materials), accepting calculated risks, and launching an enterprise to deliver value at a profit.",
    "introduction": "Entrepreneurship is the process of identifying a market need, mobilizing resources (capital, human labor, materials), accepting calculated risks, and launching an enterprise to deliver value at a profit.",
    "realWorldContext": "A technical school graduate notices that farmers discard bamboo offcuts and launches an enterprise crafting durable bamboo laptop stands.",
    "objectives": [
      "Define entrepreneurship and explain the core personality traits of successful technical entrepreneurs",
      "Identify career pathways in wood technology, mechanical engineering, building construction, catering, and fashion",
      "Perform a basic SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) on a proposed technical enterprise",
      "Calculate direct materials, direct labor, overheads, profit margins, and final selling prices for technical artifacts"
    ],
    "sections": [
      {
        "title": "1. Entrepreneurship & Entrepreneurial Mindset",
        "content": "Entrepreneurship is the process of identifying a market need, mobilizing resources (capital, human labor, materials), accepting calculated risks, and launching an enterprise to deliver value at a profit.",
        "bulletPoints": [
          "Core Entrepreneurial Characteristics:",
          "  * Innovation & Creativity: Designing original solutions, repurposing local waste materials, and improving technical processes.",
          "  * Calculated Risk-Taking: Investing capital and effort after evaluating likelihood of market success versus financial loss.",
          "  * Resilience & Determination: Persisting through technical bottlenecks, machine breakdowns, power interruptions, and slow sales.",
          "  * Integrity & Customer Service: Delivering high-quality fabrication on time to build trustworthy customer relationships.",
          "  * Financial Discipline: Keeping accurate bookkeeping records and separating personal spending from business enterprise cash."
        ],
        "keyTakeaway": "Entrepreneurs turn community problems into viable commercial enterprises through innovation and risk-taking.",
        "realWorldExample": "A technical school graduate notices that farmers discard bamboo offcuts and launches an enterprise crafting durable bamboo laptop stands."
      },
      {
        "title": "2. Career Pathways in Career Technology Fields",
        "content": "Technical training opens diverse career opportunities across traditional manufacturing, modern fabrication, and creative technical design.",
        "bulletPoints": [
          "Wood & Furniture Technology: Joiner, cabinet maker, furniture designer, wood machinist, interior boat fitter, sawmill quality controller.",
          "Building Construction & Drafting: Architectural draftsperson, quantity surveyor, masonry contractor, site supervisor, structural CAD technician.",
          "Mechanical & Metal Trades: Machinist, CNC operator, welder and fabricator, motor vehicle mechanic, sheet metal duct installer.",
          "Electrical & Electronics: Domestic installation electrician, solar PV system technician, motor rewinder, telecom installer.",
          "Food & Hospitality: Executive chef, industrial baker, food processing plant operator, catering entrepreneur, food quality inspector.",
          "Fashion & Garment Technology: Fashion designer, apparel pattern grader, costume designer, industrial sewing machine technician."
        ],
        "keyTakeaway": "Technical skills empower graduates with options for wage employment or self-employed entrepreneurship.",
        "realWorldExample": "A student trained in electrical basics can establish a local business installing and maintaining rooftop solar panel systems."
      },
      {
        "title": "3. Business Idea Generation & SWOT Analysis",
        "content": "Before investing money into a new enterprise, an entrepreneur must validate market demand and analyze strategic viability.",
        "bulletPoints": [
          "Sources of Business Ideas: Observing unsatisfied consumer complaints, identifying unfulfilled neighborhood needs, analyzing foreign trends for local adaptation, and capitalizing on personal technical skills.",
          "SWOT Analysis Framework:",
          "  * Strengths (Internal): Unique technical skills, possession of specialized tools, prime workshop location, low production costs.",
          "  * Weaknesses (Internal): Limited start-up working capital, small production capacity, lack of marketing experience.",
          "  * Opportunities (External): Growing local population, government policies promoting technical goods, new housing estates needing doors and cabinets.",
          "  * Threats (External): Rising prices of imported raw materials, power outages (dumsor), competition from cheap foreign imports."
        ],
        "keyTakeaway": "SWOT analysis balances internal capabilities (strengths/weaknesses) against external conditions (opportunities/threats).",
        "realWorldExample": "A welder conducts a SWOT analysis before opening a container workshop near a new residential development in Kasoa."
      },
      {
        "title": "4. Costing, Pricing & Simple Enterprise Budgeting",
        "content": "Correct costing ensures that an enterprise covers all production expenses, recovers tool depreciation, and yields adequate profit for business growth.",
        "bulletPoints": [
          "Cost Components of Technical Artifacts:",
          "  * Direct Material Cost: Raw materials physically incorporated into the finished product (e.g. mahogany boards, screws, wood glue, varnish).",
          "  * Direct Labor Cost: Wages paid for the actual fabrication hours dedicated to making the artifact (e.g. 8 hours at GH₵ 10/hr = GH₵ 80).",
          "  * Overhead Expenses (Indirect Costs): Running costs not directly tied to a single item, such as workshop rent, electricity, tool wear, sandpaper, transport, and telephone charges.",
          "Costing Formulas:",
          "  * Total Cost of Production = Direct Material Cost + Direct Labor Cost + Overheads.",
          "  * Profit Margin: Targeted percentage return on total cost (typically 20% to 35%). Profit = Total Cost × Profit %.",
          "  * Selling Price = Total Cost + Profit.",
          "Financial Record Keeping: Maintain a Cash Book (tracking all cash inflows and outflows), an Inventory Register (materials in store), and a Sales Receipt book."
        ],
        "keyTakeaway": "Selling Price = Direct Materials + Direct Labor + Overheads + Desired Profit Margin.",
        "realWorldExample": "If a wooden shoe rack costs GH₵ 120 in materials, GH₵ 50 in labor, and GH₵ 30 in overheads (total GH₵ 200), a 25% profit margin (GH₵ 50) sets the selling price at GH₵ 250."
      }
    ],
    "commonMistakes": [
      "Calculating the selling price based only on raw material costs while ignoring labor and overheads. (Correction: Ignoring labor and workshop overheads (electricity, rent, transport) results in hidden financial losses. Every cost component must be included.)",
      "Treating business cash revenue as personal pocket money. (Correction: Failing to separate enterprise funds from personal expenses leads to business insolvency. Pay yourself a fixed wage and keep business capital intact.)"
    ],
    "beceExamTips": [
      "In BECE calculations: Total Cost = Direct Materials + Direct Labor + Overheads. Selling Price = Total Cost + Profit.",
      "SWOT: Strengths and Weaknesses are INTERNAL to the business; Opportunities and Threats are EXTERNAL factors in the environment."
    ],
    "summaryChecklist": [
      "I can state 5 characteristics of a successful technical entrepreneur.",
      "I can identify career paths across woodwork, metalwork, construction, catering, and fashion.",
      "I can perform a 4-part SWOT analysis on a proposed technical enterprise.",
      "I can calculate direct material, labor, overheads, profit, and selling price."
    ]
  }
};
