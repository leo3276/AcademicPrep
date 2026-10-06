// Ghanaian JHS 1 Integrated Science Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum

import { CurriculumTopic } from './types';

export const JHS1_SCIENCE_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs1-sci-t1-intro",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Introduction to Integrated Science & Laboratory Safety",
    "description": "Understand the branches of science, laboratory safety guidelines, hazard warning symbols, and basic science apparatus.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=VRWRmIEHr3A",
    "youtubeId": "VRWRmIEHr3A",
    "keyNotes": "Integrated Science combines Biology, Chemistry, Physics, and Agricultural Science into a unified study of the natural world.\n• Laboratory Safety Rules: Never run, eat, or drink in the lab; always wear safety goggles and lab coats; never smell or taste unknown chemicals directly.\n• Hazard Symbols:\n  - Toxic (Skull & Crossbones): Poisonous and can cause death if swallowed or inhaled.\n  - Flammable (Flame): Catches fire easily (e.g. ethanol, methylated spirit).\n  - Corrosive (Liquid spilling on hand/surface): Burns skin and corrodes metals (e.g. concentrated acids).\n  - Explosive (Exploding bomb): Can explode when heated or shocked.\n  - Oxidizing (Flame above circle): Releases oxygen and intensifies combustion.\n• Common Apparatus: Beaker, Test Tube, Measuring Cylinder, Bunsen Burner, Tripod Stand, Conical Flask, Retort Stand.",
    "examples": [
      {
        "id": "ex-sci-intro-1",
        "title": "Identifying Chemical Hazard Warning Labels",
        "problem": "A bottle of concentrated tetraoxosulphate(VI) acid in a school laboratory has a label showing two test tubes pouring liquid onto a metal bar and a human hand. (a) What hazard symbol is this? (b) What immediate safety action should a student take if a drop spills on their forearm?",
        "stepByStepSolution": [
          "Step 1 (Symbol Identification): The symbol represents a CORROSIVE substance.",
          "Step 2 (Safety Action): Immediately flush the affected skin under running tap water for at least 15 minutes, remove contaminated clothing, and immediately inform the laboratory technician or teacher."
        ],
        "keyTakeaway": "Corrosive chemicals destroy living tissue and metals. Always flood acid burns with cold running water."
      },
      {
        "id": "ex-sci-intro-2",
        "title": "Proper Use of the Bunsen Burner Flame",
        "problem": "A student needs to heat water in a beaker. Should they use a luminous (yellow) flame or a non-luminous (blue) flame, and how is the chosen flame produced?",
        "stepByStepSolution": [
          "Step 1 (Flame Choice): The student must use the NON-LUMINOUS (blue) flame.",
          "Step 2 (Reasoning): The non-luminous flame is hotter, does not deposit black soot on the beaker, and allows complete combustion.",
          "Step 3 (Adjustment): Open the air hole of the Bunsen burner to allow maximum oxygen inflow."
        ],
        "keyTakeaway": "The non-luminous blue flame with open air hole is used for laboratory heating because it produces maximum heat and zero soot."
      }
    ]
  },
  {
    "id": "jhs1-sci-t2-measurement",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Measurement of Physical Quantities & Density",
    "description": "Master SI units for length, mass, time, volume, and calculate the density of regular and irregular solids.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=1004h1G0zfg",
    "youtubeId": "1004h1G0zfg",
    "keyNotes": "Measurement is the comparison of an unknown physical quantity with a known standard unit.\n• Fundamental Quantities & SI Units:\n  - Length: Metre (m) [measured with metre rule, tape measure, vernier caliper].\n  - Mass: Kilogram (kg) [measured with beam balance, electronic balance].\n  - Time: Second (s) [measured with stopwatch, clock].\n  - Temperature: Kelvin (K) or Degree Celsius (°C) [measured with thermometer].\n• Derived Quantities:\n  - Volume (m³ or cm³): Space occupied by matter. For cuboid: V = l × w × h.\n  - Density (kg/m³ or g/cm³): Mass per unit volume. Formula: Density (ρ) = Mass (m) / Volume (V).\n• Measuring Irregular Solids: Volume by water displacement using a measuring cylinder or eureka (displacement) can.",
    "examples": [
      {
        "id": "ex-sci-meas-1",
        "title": "Calculating Density of a Regular Wooden Block",
        "problem": "A rectangular wooden block has length 8 cm, width 5 cm, and height 4 cm. If its mass is measured on a balance as 120 g, calculate the density of the wood in g/cm³.",
        "stepByStepSolution": [
          "Step 1: Calculate volume of the block: Volume = length × width × height = 8 cm × 5 cm × 4 cm = 160 cm³.",
          "Step 2: State density formula: Density = Mass ÷ Volume.",
          "Step 3: Substitute values: Density = 120 g ÷ 160 cm³ = 0.75 g/cm³."
        ],
        "keyTakeaway": "Since 0.75 g/cm³ is less than water (1.0 g/cm³), the wooden block will float in water."
      },
      {
        "id": "ex-sci-meas-2",
        "title": "Volume and Density of an Irregular Stone by Displacement",
        "problem": "A measuring cylinder contains 50 cm³ of water. When an irregular stone of mass 78 g is lowered gently into the water, the water level rises to 80 cm³. Calculate: (i) The volume of the stone (ii) The density of the stone.",
        "stepByStepSolution": [
          "Step 1 (Volume): Volume of stone = Final volume - Initial volume = 80 cm³ - 50 cm³ = 30 cm³.",
          "Step 2 (Density): Density = Mass ÷ Volume = 78 g ÷ 30 cm³ = 2.6 g/cm³."
        ],
        "keyTakeaway": "Water displacement determines the volume of an irregular solid: Volume = V2 - V1."
      }
    ]
  },
  {
    "id": "jhs1-sci-t3-matter",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 3,
    "title": "The Particulate Nature of Matter & Changes of State",
    "description": "Explore the particulate theory of matter, kinetic theory, diffusion, osmosis, and changes of state.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=wclY8F-UoTE",
    "youtubeId": "wclY8F-UoTE",
    "keyNotes": "Matter is made up of tiny particles (atoms, molecules, or ions) in continuous random motion.\n• The Three States of Matter:\n  - Solid: Particles tightly packed in regular lattice; vibrate about fixed positions; definite shape and fixed volume.\n  - Liquid: Particles loosely packed, can slide past one another; fixed volume but takes shape of container.\n  - Gas: Particles far apart with negligible intermolecular forces; high kinetic energy; no fixed shape or volume.\n• Evidence for Particle Theory:\n  - Diffusion: Spreading of particles from a region of higher concentration to lower concentration (e.g. perfume spreading, potassium permanganate dissolving in water).\n  - Brownian Motion: Random erratic motion of pollen grains or smoke particles under a microscope.\n• Changes of State:\n  - Melting (Solid → Liquid), Freezing (Liquid → Solid).\n  - Boiling/Evaporation (Liquid → Gas), Condensation (Gas → Liquid).\n  - Sublimation (Solid → Gas without liquid phase, e.g. camphor, iodine crystals, ammonium chloride).",
    "examples": [
      {
        "id": "ex-sci-mat-1",
        "title": "Explaining Diffusion Using the Particle Theory",
        "problem": "When a crystal of potassium permanganate (KMnO₄) is dropped at the bottom of a beaker of undisturbed water, the purple color spreads throughout the liquid over time. Explain this observation using the particulate theory of matter.",
        "stepByStepSolution": [
          "Step 1: The solid crystal consists of tightly packed particles of potassium permanganate.",
          "Step 2: When placed in water, water molecules collide with the crystal surface, breaking particles loose.",
          "Step 3: Because particles in both the solid and liquid are in continuous random motion, the purple solute particles diffuse into the spaces between the water molecules until evenly distributed."
        ],
        "keyTakeaway": "Diffusion proves that matter is made of discrete particles and that particles in liquids and gases are in continuous motion."
      },
      {
        "id": "ex-sci-mat-2",
        "title": "Differentiating Evaporation from Boiling",
        "problem": "State three key differences between evaporation and boiling.",
        "stepByStepSolution": [
          "1. Evaporation occurs at any temperature; boiling occurs at a specific fixed boiling point (100°C for pure water).",
          "2. Evaporation is a surface phenomenon (occurs only at the liquid surface); boiling occurs throughout the entire body of the liquid with bubble formation.",
          "3. Evaporation causes cooling of the remaining liquid; boiling temperature remains constant while heat is applied."
        ],
        "keyTakeaway": "Evaporation happens silently at the surface at any temperature; boiling is a vigorous bulk process at a fixed boiling point."
      }
    ]
  },
  {
    "id": "jhs1-sci-t4-elements",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 4,
    "title": "Elements, Compounds & Chemical Symbols",
    "description": "Learn the first 20 elements, Berzelius chemical symbols, atomicity, differences between elements and compounds.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=AfXxZwNLvPA",
    "youtubeId": "AfXxZwNLvPA",
    "keyNotes": "• Element: A pure substance that cannot be broken down into simpler substances by any chemical method (e.g. Iron, Oxygen, Carbon).\n• Compound: A substance formed when two or more different elements chemically combine in a fixed ratio (e.g. Water H₂O, Carbon dioxide CO₂, Sodium chloride NaCl).\n• Chemical Symbols (Berzelius system):\n  - Single letter: Hydrogen (H), Carbon (C), Nitrogen (N), Oxygen (O).\n  - Two letters (First capital, second lowercase): Calcium (Ca), Aluminium (Al), Magnesium (Mg).\n  - Derived from Latin names: Sodium (Natrium - Na), Potassium (Kalium - K), Iron (Ferrum - Fe), Copper (Cuprum - Cu), Gold (Aurum - Au), Silver (Argentum - Ag).\n• First 20 Elements (H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca).\n• Differences Between Elements and Compounds: Elements contain one type of atom; compounds contain different types of chemically bonded atoms with entirely new properties.",
    "examples": [
      {
        "id": "ex-sci-elem-1",
        "title": "Writing Latin-Derived Chemical Symbols",
        "problem": "Give the chemical symbols and Latin origins for: (a) Sodium (b) Potassium (c) Iron (d) Copper.",
        "stepByStepSolution": [
          "Sodium comes from Latin \"Natrium\" -> Symbol is Na.",
          "Potassium comes from Latin \"Kalium\" -> Symbol is K.",
          "Iron comes from Latin \"Ferrum\" -> Symbol is Fe.",
          "Copper comes from Latin \"Cuprum\" -> Symbol is Cu."
        ],
        "keyTakeaway": "Never capitalize both letters in a two-letter chemical symbol (write Na, not NA; Ca, not CA)."
      },
      {
        "id": "ex-sci-elem-2",
        "title": "Explaining Why Water is a Compound, Not a Mixture",
        "problem": "Give two scientific reasons why water (H₂O) is classified as a chemical compound rather than a mixture of hydrogen and oxygen.",
        "stepByStepSolution": [
          "Reason 1: Hydrogen and oxygen in water are chemically bonded in a fixed mass ratio (1:8), and cannot be separated by physical means.",
          "Reason 2: Water has completely distinct physical and chemical properties from its constituent gases (hydrogen is flammable and oxygen supports burning, but water extinguishes fire)."
        ],
        "keyTakeaway": "Compounds have new chemical properties and fixed proportions; mixtures retain the original properties of their constituents."
      }
    ]
  },
  {
    "id": "jhs1-sci-t5-mixtures",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 5,
    "title": "Mixtures & Methods of Separating Mixtures",
    "description": "Differentiate mixtures from compounds, and master separation techniques: filtration, evaporation, distillation, magnetic separation, and chromatography.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=q3pE1r5sLqY",
    "youtubeId": "q3pE1r5sLqY",
    "keyNotes": "A mixture consists of two or more substances physically combined in any proportion without chemical bonding.\n• Homogeneous Mixture (Solution): Uniform composition throughout (e.g. salt dissolved in water, air).\n• Heterogeneous Mixture (Suspension): Non-uniform composition with visible boundaries (e.g. muddy water, sand and iron filings).\n• Separation Techniques:\n  - Filtration: Separates an insoluble solid from a liquid using filter paper (e.g. sand and water). Residue remains on filter; filtrate passes through.\n  - Evaporation: Recovers a dissolved solid solute from a solvent by boiling away the liquid (e.g. obtaining salt from salt solution).\n  - Simple Distillation: Recovers both the pure liquid solvent and the dissolved solute (e.g. pure water from sea water). Uses Liebig condenser.\n  - Magnetic Separation: Separates magnetic substances (iron, steel) from non-magnetic mixtures (e.g. iron filings from sulfur).\n  - Paper Chromatography: Separates mixtures of colored pigments or dyes based on their differential solubility and travel speed on paper.\n  - Sublimation: Separates a sublimable solid (ammonium chloride, camphor, iodine) from non-sublimable solids (salt, sand).",
    "examples": [
      {
        "id": "ex-sci-mix-1",
        "title": "Separating a Mixture of Sand, Salt, and Iron Filings",
        "problem": "Describe a step-by-step laboratory procedure to separate a dry mixture of iron filings, common salt (sodium chloride), and fine sand.",
        "stepByStepSolution": [
          "Step 1 (Magnetic Separation): Pass a bar magnet over the dry mixture to attract and remove all the iron filings.",
          "Step 2 (Dissolution): Add distilled water to the remaining sand and salt mixture and stir thoroughly. The salt dissolves completely while the sand remains insoluble.",
          "Step 3 (Filtration): Pour the mixture through a filter funnel lined with filter paper. Sand is collected as the residue on the filter paper; wash and dry the sand.",
          "Step 4 (Evaporation): Pour the salt solution filtrate into an evaporating dish and heat gently over a Bunsen burner to evaporate the water, leaving dry pure salt crystals."
        ],
        "keyTakeaway": "Always choose separation methods based on contrasting physical properties: magnetism -> solubility -> filtration -> evaporation."
      },
      {
        "id": "ex-sci-mix-2",
        "title": "Separating Common Salt from Ammonium Chloride",
        "problem": "Which method is most suitable for separating a mixture of ammonium chloride and sodium chloride, and why?",
        "stepByStepSolution": [
          "Step 1 (Method): Sublimation.",
          "Step 2 (Procedure): Place the mixture in an evaporating dish covered with an inverted glass funnel plugged with cotton wool at the top, and apply gentle heat.",
          "Step 3 (Principle): Ammonium chloride sublimes directly into vapor upon heating and recrystallizes on the cool inner walls of the funnel as a sublimate, leaving sodium chloride behind in the dish."
        ],
        "keyTakeaway": "Sublimation works whenever one substance changes directly from solid to vapor upon heating while the other does not."
      }
    ]
  },
  {
    "id": "jhs1-sci-t6-cells",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 6,
    "title": "Living Cells: Plant & Animal Cell Structure",
    "description": "Study cell organelles, functions of nucleus, cytoplasm, membrane, cell wall, chloroplasts, and compare plant and animal cells under a microscope.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=URUJD5NEXC8",
    "youtubeId": "URUJD5NEXC8",
    "keyNotes": "The cell is the basic building block and functional unit of all living things.\n• Main Parts of a Cell:\n  - Nucleus: The control center of the cell; directs all activities and contains genetic information.\n  - Cell Membrane: A thin, flexible outer skin that controls what enters and leaves the cell.\n  - Cytoplasm: The jelly-like substance where cell parts float and chemical reactions happen.\n  - Mitochondrion: Often called the powerhouse of the cell because it releases energy from food.\n  - Vacuole: A fluid-filled sac that stores water, cell sap, and nutrients.\n• Extra Parts Found ONLY in Plant Cells:\n  - Cell Wall: A tough outer layer made of cellulose that gives plant cells support and a firm rectangular shape.\n  - Chloroplasts: Contain green chlorophyll which absorbs sunlight to make food (photosynthesis).\n  - Large Central Vacuole: Helps the plant cell stay firm and upright.\n• Differences Between Plant and Animal Cells:\n  - Plant Cell: Regular rectangular shape, has a cell wall, has chloroplasts, has one large central vacuole.\n  - Animal Cell: Irregular rounded shape, NO cell wall, NO chloroplasts, only small temporary vacuoles.",
    "examples": [
      {
        "id": "ex-sci-cell-1",
        "title": "Distinguishing Plant Cells from Animal Cells in the Lab",
        "problem": "A student observes an unknown slide under a school light microscope and notes: a distinct green color, rigid rectangular boundaries, and a large central vacuole pushing the nucleus to the periphery. Is this a plant or animal cell? Give two reasons.",
        "stepByStepSolution": [
          "Conclusion: It is a PLANT cell.",
          "Reason 1: The presence of chloroplasts (indicated by the distinct green pigment chlorophyll).",
          "Reason 2: The presence of a rigid cellulose cell wall giving a fixed rectangular shape.",
          "Reason 3: A large permanent central vacuole that displaces the nucleus to the side."
        ],
        "keyTakeaway": "Cell wall, chloroplasts, and a large central vacuole are the three decisive microscopic indicators of a plant cell."
      },
      {
        "id": "ex-sci-cell-2",
        "title": "Comparing Plant and Animal Cell Shapes",
        "problem": "Why do plant cells have a regular, fixed box-like shape while animal cells have flexible, irregular shapes?",
        "stepByStepSolution": [
          "Step 1: Plant cells have a tough, rigid outer cell wall made of cellulose that maintains their fixed rectangular structure.",
          "Step 2: Animal cells have only a thin, flexible cell membrane without any rigid cell wall, allowing them to change shape easily."
        ],
        "keyTakeaway": "The cellulose cell wall gives plant cells their rigid, fixed structure."
      }
    ]
  },
  {
    "id": "jhs1-sci-t7-classification",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 7,
    "title": "Classification of Living Organisms & Kingdoms",
    "description": "Learn the characteristics of living organisms (MR NIGER D) and the five-kingdom classification system (Monera, Protista, Fungi, Plantae, Animalia).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=vQXomJIBGcY",
    "youtubeId": "vQXomJIBGcY",
    "keyNotes": "• The 7 Characteristics of Living Organisms (MR NIGER D):\n  - Movement, Respiration, Nutrition, Irritability (Sensitivity), Growth, Excretion, Reproduction, and Death.\n• Why We Classify:\n  - To bring order to the enormous diversity of living organisms and facilitate easy identification and scientific communication.\n• The Five Kingdoms of Living Things:\n  1. Monera (Prokaryotes): Single-celled microscopic organisms without a true nucleus (e.g. Bacteria, Blue-green algae).\n  2. Protista (Protoctista): Single-celled eukaryotes with a true nucleus (e.g. Amoeba, Paramecium, Euglena, Spirogyra).\n  3. Fungi: Non-green organisms with chitinous cell walls that feed saprophytically on decaying matter (e.g. Mushrooms, Yeast, Bread mold / Rhizopus).\n  4. Plantae: Multicellular autotrophic green plants with cellulose cell walls capable of photosynthesis (e.g. Maize, Ferns, Mosses, Mango trees).\n  5. Animalia: Multicellular heterotrophic organisms without cell walls capable of locomotion (e.g. Insects, Fish, Birds, Mammals).",
    "examples": [
      {
        "id": "ex-sci-class-1",
        "title": "Explaining Why Fungi are Not Classified as Plants",
        "problem": "Historically, mushrooms were classified as plants. Give two biological reasons why modern science classifies Fungi in their own distinct kingdom separate from Plantae.",
        "stepByStepSolution": [
          "Reason 1 (Lack of Chlorophyll): Fungi do not possess chlorophyll and cannot carry out photosynthesis; they feed heterotrophically (saprophytically).",
          "Reason 2 (Cell Wall Composition): The cell walls of fungi are made of chitin, whereas plant cell walls are made of cellulose."
        ],
        "keyTakeaway": "Fungi cannot synthesize their own food (heterotrophic) and have chitin walls, making them fundamentally distinct from Plantae."
      },
      {
        "id": "ex-sci-class-2",
        "title": "Identifying Organisms from the Kingdom Protista",
        "problem": "Which of the following organisms belongs to Kingdom Protista: (a) Salmonella (b) Amoeba (c) Yeast (d) Moss? Justify your choice.",
        "stepByStepSolution": [
          "Answer: (b) Amoeba.",
          "Justification: Amoeba is a single-celled eukaryotic organism possessing a true membrane-bound nucleus and organelles.",
          "Comparison: Salmonella is a bacterium (Monera); Yeast is a single-celled fungus (Fungi); Moss is a non-vascular plant (Plantae)."
        ],
        "keyTakeaway": "Amoeba and Paramecium are classic examples of single-celled eukaryotic organisms belonging to Kingdom Protista."
      }
    ]
  },
  {
    "id": "jhs1-sci-t8-digestion",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 8,
    "title": "The Human Digestive System & Enzymes",
    "description": "Explore the human alimentary canal, mechanical and chemical digestion, digestive enzymes, and absorption in the small intestine.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=b20VRR9C37Q",
    "youtubeId": "b20VRR9C37Q",
    "keyNotes": "Digestion is the breakdown of large, complex, insoluble food molecules into small, simple, soluble molecules that can be absorbed into the bloodstream.\n• Alimentary Canal Organs & Sequence:\n  - Mouth (Teeth chew food mechanically; Salivary Amylase / Ptyalin breaks starch into maltose).\n  - Oesophagus (Gullet): Food bolus moves down by Peristalsis (rhythmic wave-like muscular contractions).\n  - Stomach: Secretes Gastric Juice containing Hydrochloric Acid (kills bacteria, provides acidic pH) and Pepsin (digests proteins into peptones).\n  - Duodenum: First part of small intestine; receives Bile (from liver/gall bladder to emulsify fats) and Pancreatic Juice (Amylase, Trypsin, Lipase).\n  - Ileum (Small Intestine): Longest section; completes digestion of all food classes; lined with Villi for absorption of nutrients into capillaries.\n  - Large Intestine (Colon): Absorbs water and mineral salts from undigested residue.\n  - Rectum & Anus: Stores and eliminates faeces (Egestion).\n• Three Main Digestive Enzyme Groups:\n  - Carbohydrases (Amylase): Starch → Maltose → Glucose.\n  - Proteases (Pepsin, Trypsin): Proteins → Peptides → Amino acids.\n  - Lipases: Fats and oils (Lipids) → Fatty acids and Glycerol.",
    "examples": [
      {
        "id": "ex-sci-dig-1",
        "title": "Action of Salivary Amylase on Boiled Starch",
        "problem": "A student chews a piece of plain boiled yam or bread for two full minutes without swallowing. (a) What taste sensation develops in the mouth? (b) Name the enzyme and chemical reaction responsible.",
        "stepByStepSolution": [
          "Part (a): A sweet taste develops in the mouth.",
          "Part (b): The enzyme responsible is Salivary Amylase (Ptyalin).",
          "Explanation: Salivary amylase in saliva hydrolyzes insoluble complex starch in yam into maltose (a sweet soluble disaccharide sugar)."
        ],
        "keyTakeaway": "Chemical digestion of starch begins in the mouth through the catalytic action of salivary amylase."
      },
      {
        "id": "ex-sci-dig-2",
        "title": "Role of Villi in Nutrient Absorption",
        "problem": "State three structural adaptations of the ileum (small intestine) that facilitate rapid absorption of digested food.",
        "stepByStepSolution": [
          "1. Highly folded inner surface with millions of microscopic finger-like projections called villi and microvilli, enormously increasing the surface area for absorption.",
          "2. Very thin epithelial wall (only one cell thick), ensuring a very short diffusion pathway for nutrients.",
          "3. Rich network of blood capillaries and lacteals inside each villus for immediate transport of absorbed glucose, amino acids, and fatty acids."
        ],
        "keyTakeaway": "Villi maximize surface area, have one-cell-thick walls for rapid diffusion, and maintain a rich capillary network."
      }
    ]
  },
  {
    "id": "jhs1-sci-t9-respiration",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "The Human Respiratory System & Gaseous Exchange",
    "description": "Understand breathing mechanics, the respiratory organs, gaseous exchange in alveoli, and cellular respiration.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=mOKmjYwfDGU",
    "youtubeId": "mOKmjYwfDGU",
    "keyNotes": "• Respiration vs Breathing:\n  - Breathing (Ventilation): The physical inhalation and exhalation of air into and out of the lungs.\n  - Cellular Respiration: The biochemical release of energy (ATP) from glucose inside living cells (mitochondria).\n• Word Equation for Aerobic Respiration:\n  - Glucose + Oxygen → Carbon Dioxide + Water + Energy (ATP).\n• Pathway of Air:\n  - Nostrils (lined with hairs and mucus to trap dust and pathogens) → Pharynx → Larynx (voice box) → Trachea (supported by C-shaped cartilage rings) → Bronchi → Bronchioles → Alveoli (air sacs).\n• Inhalation (Breathing In):\n  - External intercostal muscles contract, pulling ribs up and outwards.\n  - Diaphragm contracts and flattens downwards.\n  - Volume of thorax increases, pressure inside lungs decreases below atmospheric pressure, air rushes in.\n• Exhalation (Breathing Out):\n  - Intercostal muscles relax, ribs move downwards and inwards.\n  - Diaphragm relaxes and arches upwards into a dome shape.\n  - Volume of thorax decreases, pressure increases, air is pushed out.\n• Adaptations of Alveoli for Gas Exchange: Large surface area, one-cell-thick walls, moist surface, dense capillary network.",
    "examples": [
      {
        "id": "ex-sci-resp-1",
        "title": "Demonstrating Carbon Dioxide in Exhaled Air",
        "problem": "A student uses a drinking straw to blow exhaled air into a test tube of clear limewater [calcium hydroxide solution, Ca(OH)₂] for 30 seconds. (a) What observation is made? (b) What does this observation prove?",
        "stepByStepSolution": [
          "Part (a) Observation: The clear limewater turns milky (cloudy white).",
          "Part (b) Conclusion: This proves that exhaled air contains carbon dioxide gas (which reacts with calcium hydroxide to precipitate insoluble calcium carbonate)."
        ],
        "keyTakeaway": "Limewater turning milky is the standard confirmatory test for carbon dioxide gas released during respiration."
      },
      {
        "id": "ex-sci-resp-2",
        "title": "Comparing Inhaled Air with Exhaled Air",
        "problem": "How do the percentages of oxygen and carbon dioxide differ between inhaled air and exhaled air, and why?",
        "stepByStepSolution": [
          "1. Oxygen drops from ~21% in inhaled air to ~16% in exhaled air because cells absorb oxygen for cellular respiration.",
          "2. Carbon dioxide rises from ~0.04% in inhaled air to ~4% in exhaled air because cells produce CO₂ as a metabolic waste product.",
          "3. Nitrogen remains unchanged at ~78% because human cells cannot metabolize gaseous atmospheric nitrogen."
        ],
        "keyTakeaway": "Exhaled air contains less oxygen (~16%) and significantly more carbon dioxide (~4%) than inhaled air."
      }
    ]
  },
  {
    "id": "jhs1-sci-t10-photosynthesis",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Photosynthesis, Plant Nutrition & Transport",
    "description": "Learn the photosynthesis equation, conditions necessary for photosynthesis, testing a green leaf for starch, and plant transport vessels.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=UPBMG5EIsh8",
    "youtubeId": "UPBMG5EIsh8",
    "keyNotes": "Photosynthesis is the process by which green plants manufacture carbohydrates (glucose/starch) from carbon dioxide and water using sunlight absorbed by chlorophyll.\n• Word Equation:\n  - Carbon dioxide + Water --[Sunlight / Chlorophyll]--> Glucose + Oxygen.\n• Chemical Equation:\n  - 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.\n• Essential Conditions for Photosynthesis:\n  - Sunlight (provides light energy).\n  - Chlorophyll (green pigment that traps solar energy).\n  - Carbon dioxide (enters leaf through stomata by diffusion).\n  - Water (absorbed from soil by root hairs and conducted by xylem).\n• Testing a Green Leaf for Starch:\n  1. Boil leaf in water for 1 minute (kills leaf cells and stops enzymatic reactions).\n  2. Boil leaf in methylated spirit / ethanol in a water bath (decolorizes leaf by dissolving chlorophyll). [NEVER heat ethanol over an open flame - it is flammable!].\n  3. Dip leaf in warm water (softens the brittle leaf).\n  4. Spread leaf on a white tile and add drops of Iodine solution: Blue-black color confirms presence of starch; yellow-brown indicates no starch.\n• Vascular Bundles:\n  - Xylem: Transports water and dissolved mineral salts upwards from roots to leaves.\n  - Phloem: Transports manufactured food (sucrose) from leaves to all parts of the plant (Translocation).",
    "examples": [
      {
        "id": "ex-sci-photo-1",
        "title": "Safety Precautions in the Leaf Starch Test",
        "problem": "In the practical test for starch in a green leaf, why must the test tube containing ethanol and the leaf be heated in a boiling water bath rather than directly over the Bunsen flame?",
        "stepByStepSolution": [
          "Step 1: Ethanol (methylated spirit) is a highly volatile and flammable liquid.",
          "Step 2: If heated directly over an open flame, the ethanol vapors could ignite violently, causing a laboratory fire and severe burns.",
          "Step 3: A hot water bath safely transfers heat without exposing flammable alcohol vapors to an open flame."
        ],
        "keyTakeaway": "Always heat flammable organic liquids like ethanol in a water bath with the Bunsen flame extinguished or shielded."
      },
      {
        "id": "ex-sci-photo-2",
        "title": "Interpreting the Iodine Test on a Variegated Leaf",
        "problem": "A variegated leaf (with green patches and white patches) is picked after 6 hours in bright sunlight and tested for starch with iodine solution. Predict and explain the observations in the green and white areas.",
        "stepByStepSolution": [
          "Observation in Green Area: Turns blue-black.",
          "Explanation for Green Area: Contained chlorophyll, enabling photosynthesis and starch synthesis.",
          "Observation in White Area: Remains yellow-brown (iodine color).",
          "Explanation for White Area: Lacked chlorophyll, so no photosynthesis occurred and no starch was produced."
        ],
        "keyTakeaway": "This experiment proves that chlorophyll is an indispensable requirement for photosynthesis."
      }
    ]
  },
  {
    "id": "jhs1-sci-t11-solarsystem",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 11,
    "title": "The Solar System, Earth Movements & Moon Phases",
    "description": "Study the Sun and eight planets, rotation and revolution of the Earth, day and night, seasons, and solar and lunar eclipses.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=libKVRa01L8",
    "youtubeId": "libKVRa01L8",
    "keyNotes": "• The Solar System: Consists of the central star (Sun), eight planets revolving in elliptical orbits, dwarf planets, moons, asteroids, and comets.\n• Order of 8 Planets from the Sun:\n  - Mercury, Venus, Earth, Mars (Terrestrial rocky inner planets).\n  - Jupiter, Saturn, Uranus, Neptune (Gas and ice giants).\n  - Mnemonic: \"My Very Educated Mother Just Served Us Noodles\".\n• Earth's Movements:\n  - Rotation: Earth spins on its tilted axis (23.5°) from West to East once every 24 hours. Causes Day and Night.\n  - Revolution: Earth orbits the Sun once every 365¼ days (one year). Combined with the Earth's axial tilt, revolution causes the Four Seasons and variation in day length.\n• Eclipses:\n  - Solar Eclipse: The Moon passes directly between the Sun and the Earth, casting its shadow on Earth. (Order: Sun - Moon - Earth).\n  - Lunar Eclipse: The Earth passes directly between the Sun and the Moon, casting its shadow on the Moon. (Order: Sun - Earth - Moon).",
    "examples": [
      {
        "id": "ex-sci-solar-1",
        "title": "Explaining How Day and Night Occur",
        "problem": "Why do we experience day and night on Earth? State the direction of Earth's rotation and the duration of one complete turn.",
        "stepByStepSolution": [
          "Step 1 (Mechanism): The Earth is an opaque sphere illuminated by the Sun. As the Earth rotates on its axis, the hemisphere facing the Sun experiences daylight, while the opposite hemisphere facing away experiences night.",
          "Step 2 (Direction): The Earth rotates from West to East, which makes celestial bodies appear to rise in the East and set in the West.",
          "Step 3 (Duration): One complete rotation takes approximately 24 hours (one solar day)."
        ],
        "keyTakeaway": "Day and night are caused strictly by the Earth's rotation on its axis every 24 hours."
      },
      {
        "id": "ex-sci-solar-2",
        "title": "Distinguishing Solar Eclipse from Lunar Eclipse",
        "problem": "Draw the relative spatial arrangement of the Sun, Earth, and Moon during: (i) A Solar Eclipse (ii) A Lunar Eclipse.",
        "stepByStepSolution": [
          "Part (i) Solar Eclipse Alignment: Sun -> MOON -> Earth. The Moon is in the middle, blocking sunlight from reaching portions of the Earth.",
          "Part (ii) Lunar Eclipse Alignment: Sun -> EARTH -> Moon. The Earth is in the middle, blocking sunlight from striking the Moon."
        ],
        "keyTakeaway": "Remember: In a Solar eclipse the MOON is in the middle; in a Lunar eclipse the EARTH is in the middle."
      }
    ]
  },
  {
    "id": "jhs1-sci-t12-water",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 12,
    "title": "Water: Properties, Water Cycle & Purification",
    "description": "Explore physical and chemical properties of water, the hydrological cycle, water pollution, hard vs soft water, and purification methods.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=al-do-HGuIk",
    "youtubeId": "al-do-HGuIk",
    "keyNotes": "Water (H₂O) is an essential transparent liquid compound indispensable to all living organisms.\n• Physical Properties of Pure Water:\n  - Pure water boils at exactly 100°C and freezes at 0°C at standard atmospheric pressure (1 atm).\n  - Density is maximum at 4°C (1.0 g/cm³).\n  - Universal solvent: Dissolves more substances than any other common liquid.\n  - Pure water is neutral to litmus paper (pH = 7.0).\n• The Water Cycle (Hydrological Cycle):\n  - Evaporation (solar heat turns surface water into vapor).\n  - Transpiration (water vapor released by plant leaves).\n  - Condensation (water vapor cools and aggregates into clouds).\n  - Precipitation (rain, drizzle, or hail falling to Earth).\n  - Infiltration and Surface Run-off (replenishing rivers, lakes, and aquifers).\n• Hard Water vs Soft Water:\n  - Soft Water: Lathers easily with soap (e.g. rainwater).\n  - Hard Water: Does not lather easily with soap, forms grey scum; contains dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) ions.\n• Water Purification Methods:\n  - Domestic: Boiling (kills germs), filtration, chlorination.\n  - Large-Scale Water Treatment (e.g. Ghana Water Company Limited): Screening → Aeration → Coagulation/Flocculation (adding alum) → Sedimentation → Sand Filtration → Chlorination (disinfection).",
    "examples": [
      {
        "id": "ex-sci-wat-1",
        "title": "Purity Test for Liquid Water",
        "problem": "A clear colorless liquid is provided in a beaker. Describe a physical test to determine whether the liquid is pure water.",
        "stepByStepSolution": [
          "Step 1: Set up apparatus to determine the boiling point of the liquid using a thermometer and heat source.",
          "Step 2: Heat the liquid until it boils vigorously and record the temperature.",
          "Step 3: If the liquid boils sharply at exactly 100°C at normal atmospheric pressure, it is pure water.",
          "Alternative: Determine its freezing point; pure water freezes sharply at 0°C."
        ],
        "keyTakeaway": "Impurities raise the boiling point above 100°C and lower the freezing point below 0°C."
      },
      {
        "id": "ex-sci-wat-2",
        "title": "Explaining How Alum Purifies Water",
        "problem": "In community and municipal water treatment in Ghana, why is alum (potassium aluminum sulphate) added to turbid muddy water?",
        "stepByStepSolution": [
          "Step 1: Alum acts as a coagulant (chemical flocculating agent).",
          "Step 2: It neutralizes negative electrical charges on tiny suspended colloidal clay and dirt particles.",
          "Step 3: The particles clump together into larger, heavier flakes called \"flocs\" that settle rapidly to the bottom by sedimentation."
        ],
        "keyTakeaway": "Coagulation with alum aggregates microscopic suspended dirt particles so they settle quickly."
      }
    ]
  },
  {
    "id": "jhs1-sci-t13-energy",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 13,
    "title": "Forms of Energy, Transformations & Conservation",
    "description": "Understand the Law of Conservation of Energy, kinetic and potential energy, renewable vs non-renewable sources, and energy transformations.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=jCrOtF4y2HY",
    "youtubeId": "jCrOtF4y2HY",
    "keyNotes": "Energy is defined as the capacity or ability to do work. The SI unit of energy is the Joule (J).\n• Forms of Energy:\n  - Kinetic Energy: Energy possessed by any moving body (e.g. running student, moving vehicle, rolling ball).\n  - Potential Energy: Stored energy due to position, condition, or chemical state (e.g. stretched catapult rubber, stone held up high, energy stored in food or dry cells).\n  - Other Forms: Light, Sound, Thermal (Heat), Chemical (in food, batteries, charcoal), and Electrical energy.\n• The Law of Conservation of Energy:\n  - Energy cannot be created or destroyed; it can only be transformed from one form to another.\n• Everyday Energy Transformations:\n  - Torch / Flashlight: Chemical energy (battery) → Electrical energy → Light energy + Heat energy.\n  - Electric Iron: Electrical energy → Heat (thermal) energy.\n  - Radio / Phone Speaker: Electrical energy → Sound energy.\n  - Akosombo Dam: Potential energy (dam water) → Kinetic energy (falling water) → Mechanical energy (turbine) → Electrical energy (generator).\n• Sources of Energy in Ghana:\n  - Renewable (naturally replaced, cannot run out): Solar (sunlight), Wind, Hydroelectric (Akosombo and Bui dams), Biomass.\n  - Non-Renewable (finite, can be used up): Petroleum (crude oil, petrol, diesel), Coal, Natural gas.",
    "examples": [
      {
        "id": "ex-sci-eng-1",
        "title": "Tracing Energy Transformations in an Electric Iron",
        "problem": "State the energy changes that occur when an electric flat iron plugged into a wall socket is used to press clothes.",
        "stepByStepSolution": [
          "Step 1: Electrical energy from the mains socket flows into the heating wire of the iron.",
          "Step 2: The heating element converts the electrical energy into Thermal (heat) energy.",
          "Step 3: A small fraction may convert into light energy if the power indicator lamp turns on."
        ],
        "keyTakeaway": "In heating appliances: Electrical energy transforms into Thermal (heat) energy."
      },
      {
        "id": "ex-sci-eng-2",
        "title": "Classifying Energy Sources in Ghana",
        "problem": "Classify the following Ghanaian energy sources as RENEWABLE or NON-RENEWABLE: (a) Solar panels in Navrongo; (b) Petrol used in tro-tros; (c) Flowing water at Akosombo Dam.",
        "stepByStepSolution": [
          "Step 1: Solar energy from sunlight is naturally replenished and never runs out -> RENEWABLE.",
          "Step 2: Petrol comes from crude oil deposits that cannot be replaced once pumped out -> NON-RENEWABLE.",
          "Step 3: River water flow is continuously replenished by the water cycle -> RENEWABLE."
        ],
        "keyTakeaway": "Renewable sources (sunlight, flowing water) replenish naturally; fossil fuels (petrol, diesel) can be exhausted."
      }
    ]
  },
  {
    "id": "jhs1-sci-t14-circuits",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 14,
    "title": "Basic Electric Circuits, Conductors & Insulators",
    "description": "Learn circuit symbols, series vs parallel circuits, conductors vs insulators, and electrical safety at home.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=js7Q-r7G9ug",
    "youtubeId": "js7Q-r7G9ug",
    "keyNotes": "An electric circuit is a complete, closed conducting path through which electric current can flow.\n• Circuit Components & Circuit Symbols:\n  - Cell / Battery: Source of electrical energy (longer thin line is positive +, shorter thick line is negative -).\n  - Switch (Key): Opens or closes the conducting loop.\n  - Connecting Wires: Carries electric current (usually copper insulated with PVC).\n  - Bulb / Lamp: Converts electrical energy into light and heat.\n  - Resistor: Opposes electric current flow.\n  - Ammeter (measures electric current in Amperes, connected in series).\n  - Voltmeter (measures voltage / potential difference in Volts, connected in parallel).\n• Conductors vs Insulators:\n  - Electrical Conductors: Materials that allow electric current to flow through easily because of free electrons (e.g. Copper, Aluminium, Silver, Iron, Saltwater, Graphite).\n  - Electrical Insulators: Materials that resist electric current flow because electrons are tightly bound (e.g. Rubber, Plastic, Dry wood, Glass, Ceramic).\n• Circuit Configurations:\n  - Series Circuit: Single pathway for current. If one bulb blows or is removed, the entire circuit is broken and all bulbs go out.\n  - Parallel Circuit: Multiple separate branches. If one bulb goes out, other branches remain functioning independently. Domestic home wiring is connected in parallel.",
    "examples": [
      {
        "id": "ex-sci-circ-1",
        "title": "Why Domestic Home Wiring is Connected in Parallel",
        "problem": "Give two practical reasons why electrical appliances and lighting points in Ghanaian homes are wired in parallel rather than in series.",
        "stepByStepSolution": [
          "Reason 1: Each appliance operates independently with its own switch; switching off or removing one bulb does not disconnect or shut down other appliances.",
          "Reason 2: In a parallel circuit, every appliance receives the full mains voltage (230V in Ghana), ensuring optimal brightness and power output."
        ],
        "keyTakeaway": "Parallel circuits provide independent appliance operation and supply equal full mains voltage to all connected branches."
      },
      {
        "id": "ex-sci-circ-2",
        "title": "Identifying the Only Non-Metal Conductor of Electricity",
        "problem": "Which allotrope of carbon conducts electricity, and what structural feature makes it an electrical conductor?",
        "stepByStepSolution": [
          "Answer: GRAPHITE (found in pencil lead and dry cell battery electrodes).",
          "Reason: In graphite, each carbon atom is bonded to three other carbon atoms in hexagonal layers, leaving one free delocalized electron per carbon atom to carry electric charge."
        ],
        "keyTakeaway": "Graphite is the only common non-metallic element that conducts electricity due to delocalized electrons."
      }
    ]
  },
  {
    "id": "jhs1-sci-t15-environment",
    "subjectId": "science",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 15,
    "title": "Environmental Pollution, Diseases & Waste Management",
    "description": "Explore air, water, and land pollution, life cycle and control of malaria and cholera vectors, and the 3Rs of waste management.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=gEk6JLJNg0U",
    "youtubeId": "gEk6JLJNg0U",
    "keyNotes": "• Environmental Pollution: The introduction of harmful substances or contaminants (pollutants) into the environment.\n  - Water Pollution: Untreated sewage, industrial effluents, illegal mining (Galamsey), agrochemicals (fertilizers/pesticides).\n  - Air Pollution: Vehicle exhaust fumes, bush burning, factory smoke (SO₂, CO, smoke particles).\n  - Land / Soil Pollution: Non-biodegradable plastics, improper solid waste dumping, mining waste.\n• Common Communicable Diseases in Ghana:\n  - Malaria:\n    * Causative Organism: Plasmodium parasite (protozoan).\n    * Vector: Female Anopheles mosquito (bites at night).\n    * Prevention: Sleeping under insecticide-treated bed nets (ITNs), eliminating stagnant water (breeding sites), using mosquito repellents, indoor residual spraying.\n  - Cholera:\n    * Causative Organism: Vibrio cholerae (bacterium).\n    * Mode of Transmission: Ingestion of water or food contaminated with human faeces (faecal-oral route). Housefly acts as mechanical vector.\n    * Symptoms: Sudden severe watery diarrhea (\"rice-water stools\") and vomiting leading to fatal dehydration.\n    * Prevention: Drinking treated/boiled water, washing hands with soap after visiting the toilet, covering food.\n• Solid Waste Management & The 3Rs:\n  - Reduce: Minimize waste generation.\n  - Reuse: Use items repeatedly instead of discarding.\n  - Recycle: Reprocess waste materials (plastics, glass, paper, metals) into new products.\n  - Biodegradable Waste (decomposes naturally, e.g. food scraps, plant leaves) vs Non-Biodegradable (persists for centuries, e.g. polythene bags, plastic bottles).",
    "examples": [
      {
        "id": "ex-sci-env-1",
        "title": "Controlling the Mosquito Vector at the Larval Stage",
        "problem": "Explain why pouring a thin layer of oil on stagnant puddles of water is an effective biological control method against mosquito breeding.",
        "stepByStepSolution": [
          "Step 1: Mosquito larvae and pupae live just below the surface of stagnant water and breathe atmospheric air through respiratory siphons (breathing tubes).",
          "Step 2: The thin film of oil creates a barrier on the water surface with high surface tension.",
          "Step 3: This blocks the siphons of the larvae, suffocating and killing them before they can develop into adult biting mosquitoes."
        ],
        "keyTakeaway": "Oil on stagnant water breaks the mosquito life cycle by cutting off oxygen supply to the aquatic larval and pupal stages."
      },
      {
        "id": "ex-sci-env-2",
        "title": "Differentiating Biodegradable from Non-Biodegradable Waste",
        "problem": "Classify the following waste items as either biodegradable or non-biodegradable: (a) Cassava peels (b) Polythene shopping bag (c) Dry plantain leaves (d) Empty glass soda bottle.",
        "stepByStepSolution": [
          "Biodegradable: (a) Cassava peels and (c) Dry plantain leaves. They can be broken down naturally by microorganisms (bacteria and fungi) into harmless humus.",
          "Non-Biodegradable: (b) Polythene shopping bag and (d) Empty glass bottle. They cannot be decomposed by biological decomposers and persist in the environment for hundreds of years."
        ],
        "keyTakeaway": "Biodegradable wastes rot and recycle naturally; non-biodegradables persist and cause environmental degradation unless recycled."
      }
    ]
  }
];
