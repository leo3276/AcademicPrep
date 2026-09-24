// Ghanaian JHS 2 Integrated Science Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// 15 Standardized Topics across Terms 1, 2, and 3

import { CurriculumTopic } from './types';

export const JHS2_SCIENCE_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs2-sci-t1-digestion",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "The Human Digestive System & Enzymes",
    "description": "Explore the anatomy of the alimentary canal, mechanical and chemical digestion, digestive juices, enzymes, absorption in the ileum, and egestion.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Digestion is the breakdown of large, insoluble food molecules into smaller, water-soluble molecules for absorption into the bloodstream.\n• Alimentary Canal Organs: Mouth -> Oesophagus -> Stomach -> Small Intestine (Duodenum & Ileum) -> Large Intestine (Colon & Rectum) -> Anus.\n• Mechanical Digestion: Physical breakdown without chemical change (teeth chewing, stomach churning, peristalsis, bile emulsifying fats into droplets).\n• Chemical Digestion (Enzymes):\n  - Mouth: Salivary amylase (ptyalin) breaks cooked starch into maltose (neutral/slightly alkaline pH).\n  - Stomach: Gastric juice contains Hydrochloric Acid (kills bacteria, activates pepsin) and Pepsin (breaks proteins into peptones/polypeptides in acidic pH).\n  - Duodenum: Bile (from liver, stored in gallbladder) neutralizes acidic chyme and emulsifies fats; Pancreatic juice contains pancreatic amylase, trypsin (proteins -> peptides), and lipase (fats -> fatty acids and glycerol).\n  - Ileum: Intestinal peptidases and maltase complete breakdown into simple sugars, amino acids, fatty acids, and glycerol.\n• Absorption: Villi and microvilli in the ileum provide a huge surface area, thin walls, and dense capillary networks to absorb nutrients into the blood and lacteals.\n• Egestion: Elimination of undigested, unabsorbed waste (feces) through the anus. (Distinct from excretion, which removes metabolic waste).",
    "examples": [
      {
        "id": "ex-jhs2sci-t1-1",
        "title": "Tracing the Digestion of Carbohydrates in Banku",
        "problem": "A student eats a lunch of banku (corn and cassava dough). Describe step-by-step how the starch in banku is digested chemically as it travels through the alimentary canal.",
        "stepByStepSolution": [
          "Step 1 (In the Mouth): Chewing mixes banku with saliva. Salivary amylase (ptyalin) starts breaking down cooked starch into the disaccharide maltose.",
          "Step 2 (In the Stomach): Acidic gastric juice stops the action of salivary amylase (which needs an alkaline/neutral pH). Starch digestion pauses while the stomach churns the food into chyme.",
          "Step 3 (In the Duodenum): Pancreatic amylase in pancreatic juice continues breaking remaining starch into maltose in an alkaline environment provided by bile and sodium bicarbonate.",
          "Step 4 (In the Ileum): Maltase in intestinal juice completes the chemical breakdown of maltose into simple glucose molecules.",
          "Step 5 (Absorption): Glucose molecules diffuse across the thin epithelial walls of the villi into blood capillaries to be transported to body cells for energy release."
        ],
        "keyTakeaway": "Starch digestion begins in the mouth with salivary amylase, pauses in the acidic stomach, and is completed in the small intestine by pancreatic amylase and maltase to form glucose."
      },
      {
        "id": "ex-jhs2sci-t1-2",
        "title": "Role of Bile in Fat Digestion",
        "problem": "Why is bile essential for efficient fat digestion even though it contains no digestive enzymes?",
        "stepByStepSolution": [
          "Step 1 (Neutralization): Bile is alkaline. It neutralizes acidic chyme arriving from the stomach, creating the alkaline pH required for pancreatic lipase to function.",
          "Step 2 (Emulsification): Bile salts mechanically break large lipid globules into tiny fat droplets (emulsification).",
          "Step 3 (Surface Area Increase): Emulsification dramatically increases the total surface area of fats available for the enzyme lipase.",
          "Step 4 (Enzymatic Hydrolysis): Lipase can now rapidly hydrolyze the fat droplets into fatty acids and glycerol."
        ],
        "keyTakeaway": "Bile acts mechanically: it neutralizes acid and emulsifies fats into micro-droplets, allowing lipase to digest lipids efficiently."
      }
    ]
  },
  {
    "id": "jhs2-sci-t2-matter-atoms",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Elements, Compounds, Mixtures & Basic Atomic Structure",
    "description": "Learn the first 20 elements, symbols, subatomic particles, electron configuration, atomic number, mass number, and separation of mixtures.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "All matter is composed of basic chemical elements made up of microscopic atoms.\n• Elements: Pure substances containing only one kind of atom that cannot be split into simpler substances by chemical means.\n  - First 20 Elements: H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca.\n• Subatomic Particles:\n  - Protons (p⁺): Positively charged (+1), mass = 1 amu, located in the nucleus.\n  - Neutrons (n⁰): Neutral (0 charge), mass = 1 amu, located in the nucleus.\n  - Electrons (e⁻): Negatively charged (-1), negligible mass (1/1840 amu), orbit in shells.\n• Atomic Structure & Notation (A / Z X):\n  - Atomic Number (Z): Number of protons in the nucleus (defines the element; equals electrons in a neutral atom).\n  - Mass Number (A): Total number of protons + neutrons in the nucleus (A = Z + N).\n  - Number of Neutrons (N): N = A - Z.\n• Electron Configuration: Shell capacities follow 2, 8, 8, 2 for the first 20 elements (K-shell: 2, L-shell: 8, M-shell: 8, N-shell: 2).\n• Compounds vs Mixtures:\n  - Compound: Two or more elements chemically combined in fixed proportions (e.g. H₂O, NaCl, CO₂). Formed by chemical reaction with energy change; can only be separated chemically.\n  - Mixture: Two or more substances physically mixed in any ratio without chemical bonds (e.g. air, sea water, brass). Constituents retain individual properties and are separable by physical methods (filtration, evaporation, distillation, chromatography).",
    "examples": [
      {
        "id": "ex-jhs2sci-t2-1",
        "title": "Determining Subatomic Particles and Electron Configuration",
        "problem": "An atom of Sodium has atomic number 11 and mass number 23 (²³₁₁Na). Determine: (i) number of protons, (ii) number of electrons, (iii) number of neutrons, (iv) its electron configuration.",
        "stepByStepSolution": [
          "Step 1 (Protons): Number of protons = Atomic Number (Z) = 11.",
          "Step 2 (Electrons): In a neutral atom, electrons = protons = 11.",
          "Step 3 (Neutrons): Neutrons N = Mass Number (A) - Atomic Number (Z) = 23 - 11 = 12 neutrons.",
          "Step 4 (Electron Configuration): Distribute 11 electrons into shells: K-shell takes 2, L-shell takes 8, M-shell takes 1. Electron configuration = 2, 8, 1."
        ],
        "keyTakeaway": "Protons equal electrons in a neutral atom. Neutrons = Mass number - Atomic number. Sodium (Z=11) has arrangement 2, 8, 1."
      },
      {
        "id": "ex-jhs2sci-t2-2",
        "title": "Separating a Mixture of Sand, Salt, and Iron Filings",
        "problem": "Design a step-by-step laboratory procedure to separate a dry mixture containing iron filings, common salt (NaCl), and fine sand into pure components.",
        "stepByStepSolution": [
          "Step 1 (Magnetic Separation): Pass a bar magnet repeatedly over the mixture. The magnetic iron filings are attracted and removed, leaving sand and salt.",
          "Step 2 (Dissolution): Add distilled water to the remaining sand and salt mixture and stir thoroughly. Salt dissolves completely; insoluble sand remains suspended.",
          "Step 3 (Filtration): Pour the suspension through filter paper in a funnel. The insoluble sand is collected as the residue on the filter paper; wash and dry it.",
          "Step 4 (Evaporation / Crystallization): Heat the salt solution (filtrate) in an evaporating dish until all water evaporates, leaving behind pure sodium chloride crystals."
        ],
        "keyTakeaway": "Mixtures are separated physically by exploiting differences in properties: magnetism (iron), solubility (salt vs sand), particle size (filtration), and boiling points (evaporation)."
      }
    ]
  },
  {
    "id": "jhs2-sci-t3-respiration",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 3,
    "title": "The Human Respiratory System & Gas Exchange",
    "description": "Understand the breathing mechanism, gaseous exchange in alveoli, composition of inhaled and exhaled air, and cellular aerobic respiration.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Respiration is the biological process by which living organisms oxidize food substances inside cells to release energy in the form of ATP.\n• External Respiration (Breathing / Ventilation): Physical inhalation and exhalation of air.\n  - Inhalation (Breathing In): Diaphragm contracts and flattens; external intercostal muscles contract, pulling ribs upward and outward; thoracic volume increases; air pressure inside lungs drops below atmospheric pressure; air rushes in.\n  - Exhalation (Breathing Out): Diaphragm relaxes and curves upward (dome-shaped); intercostal muscles relax, ribs move downward and inward; thoracic volume decreases; internal lung pressure rises; air is forced out.\n• Gas Exchange at Alveoli:\n  - Alveoli Adaptations: Millions of microscopic air sacs provide an immense surface area; one-cell-thick moist walls; surrounded by dense capillary networks.\n  - Oxygen diffuses from high concentration in alveoli into blood capillaries, binding to hemoglobin in red blood cells.\n  - Carbon dioxide diffuses from blood capillary plasma into alveoli to be exhaled.\n• Air Composition Comparison:\n  - Inhaled Air: ~21% Oxygen, ~0.04% Carbon dioxide, ~78% Nitrogen, variable water vapor.\n  - Exhaled Air: ~16% Oxygen, ~4% Carbon dioxide, ~78% Nitrogen, saturated with water vapor, warmer temperature.\n• Cellular Aerobic Respiration Equation:\n  Glucose (C₆H₁₂O₆) + Oxygen (6O₂) -> Carbon Dioxide (6CO₂) + Water (6H₂O) + Energy (ATP).",
    "examples": [
      {
        "id": "ex-jhs2sci-t3-1",
        "title": "Explaining the Bell-Jar Model of the Human Lungs",
        "problem": "In a laboratory bell-jar model: a Y-tube represents the trachea and bronchi, two balloons represent the lungs, and a rubber sheet at the bottom represents the diaphragm. What happens inside the bell-jar when the rubber sheet is pulled downward?",
        "stepByStepSolution": [
          "Step 1 (Volume Change): Pulling the rubber sheet downward increases the internal volume of the glass bell-jar.",
          "Step 2 (Pressure Change): The increased volume causes the air pressure inside the bell-jar to decrease below atmospheric pressure outside.",
          "Step 3 (Air Movement): Atmospheric air rushes in through the Y-tube into the balloons.",
          "Step 4 (Balloon Inflation): The balloons inflate (expand), demonstrating what happens to the lungs during inhalation."
        ],
        "keyTakeaway": "Pulling the rubber sheet down models diaphragm contraction: it increases volume, lowers thoracic pressure, and inflates the lungs."
      },
      {
        "id": "ex-jhs2sci-t3-2",
        "title": "Comparing Cellular Respiration with Breathing",
        "problem": "State three key differences between external breathing (ventilation) and cellular respiration.",
        "stepByStepSolution": [
          "Point 1 (Nature of Process): Breathing is a physical/mechanical process involving muscular movement; Cellular respiration is a biochemical oxidation reaction catalyzed by enzymes.",
          "Point 2 (Site of Occurrence): Breathing takes place in the respiratory organs (nasal passages, trachea, lungs); Cellular respiration takes place inside every living body cell (specifically mitochondria).",
          "Point 3 (Energy Conversion): Breathing consumes energy for muscular contraction; Cellular respiration releases energy in the form of ATP from nutrient breakdown."
        ],
        "keyTakeaway": "Breathing is the physical gas exchange process; cellular respiration is the chemical breakdown of glucose inside mitochondria to release energy."
      }
    ]
  },
  {
    "id": "jhs2-sci-t4-heat-transfer",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 4,
    "title": "Thermal Energy & Methods of Heat Transfer",
    "description": "Master heat vs temperature, conduction, convection currents (sea and land breezes), radiation, and the design principles of the vacuum flask.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Heat is thermal energy in transit from a body of higher temperature to one of lower temperature. Temperature is the degree of hotness or coldness of a body.\n• Conduction: Heat transfer through solids without bulk movement of the medium.\n  - Particles vibrate faster and collide with neighbors, transferring kinetic energy.\n  - Good Conductors: Metals (copper, aluminum, iron) due to free delocalized electrons.\n  - Poor Conductors (Insulators): Wood, plastic, glass, air, cork, rubber.\n• Convection: Heat transfer in fluids (liquids and gases) through actual movement of heated particles.\n  - Heated fluid expands -> density decreases -> lighter fluid rises -> cooler, denser fluid sinks to replace it, establishing a convection current.\n  - Natural Examples: Sea breeze (daytime: land heats faster, air rises, cool sea air blows inland) and Land breeze (nighttime: sea retains heat, warm air rises over sea, cool land breeze blows seaward).\n• Radiation: Heat transfer through electromagnetic infrared waves without requiring any material medium (can travel through vacuum / outer space).\n  - Matt black / dark surfaces: Best absorbers and best emitters of radiant heat.\n  - Shiny / white / silver surfaces: Best reflectors and poorest absorbers/emitters of radiant heat.\n• The Vacuum (Thermos) Flask:\n  - Double-walled glass container with a vacuum between walls: Eliminates conduction and convection.\n  - Silvered inner surfaces facing each other: Reflects radiant heat back into liquid, minimizing radiation.\n  - Insulated cork / plastic stopper: Prevents heat loss by convection and evaporation.",
    "examples": [
      {
        "id": "ex-jhs2sci-t4-1",
        "title": "Explaining How a Vacuum Flask Keeps Hot Water Hot",
        "problem": "Identify three construction features of a vacuum flask and state the specific mode of heat transfer each feature prevents.",
        "stepByStepSolution": [
          "Feature 1 (Vacuum Space between Glass Walls): Since there are no gas or matter particles in a vacuum, heat loss by conduction and convection is completely eliminated.",
          "Feature 2 (Silvered Coating on Walls): The mirror-like silver surfaces reflect infrared radiation back into the hot liquid, preventing heat loss by radiation.",
          "Feature 3 (Plastic or Cork Stopper): Plastic and cork are poor conductors of heat (insulators), and the sealed stopper prevents warm air currents and steam from escaping, preventing heat loss by conduction, convection, and evaporation."
        ],
        "keyTakeaway": "A vacuum flask addresses all three heat transfer mechanisms: vacuum prevents conduction and convection, silvering reflects radiation, and the stopper blocks convection."
      },
      {
        "id": "ex-jhs2sci-t4-2",
        "title": "Differentiating Sea Breeze and Land Breeze",
        "problem": "Explain why a sea breeze occurs during the daytime in coastal towns like Cape Coast and Tema.",
        "stepByStepSolution": [
          "Step 1 (Differential Heating): During daytime, solar radiation heats the land much faster than the sea because land has a lower specific heat capacity than water.",
          "Step 2 (Air Density Change): The air above the hot land warms up, expands, becomes less dense, and rises.",
          "Step 3 (Convection Air Current): The cooler, denser air over the ocean moves inland to take the place of the rising warm air.",
          "Step 4 (Resulting Breeze): This creates a refreshing cool wind blowing from the sea onto the land, known as a sea breeze."
        ],
        "keyTakeaway": "A sea breeze blows from the cool sea to warm land during the day due to convection currents set up by unequal heating rates."
      }
    ]
  },
  {
    "id": "jhs2-sci-t5-water-treatment",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 5,
    "title": "Water Quality, Hardness & Purification",
    "description": "Explore the physical and chemical properties of water, soft vs hard water, temporary vs permanent hardness, and municipal water purification.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Water (H₂O) is a universal solvent essential for all biochemical and physiological processes.\n• Pure Water Properties: Colorless, odorless, tasteless, neutral pH (7), freezes at 0°C, boils at 100°C at standard pressure (1 atm), density of 1.0 g/cm³ at 4°C.\n• Hard Water vs Soft Water:\n  - Soft Water: Readily forms a rich lather with soap with minimal soap usage (e.g. rainwater, distilled water).\n  - Hard Water: Does not lather easily with soap; forms a grey insoluble curdy precipitate called scum (e.g. well water, borehole water in limestone areas).\n• Types of Water Hardness:\n  1. Temporary Hardness: Caused by dissolved calcium hydrogen carbonate [Ca(HCO₃)₂] or magnesium hydrogen carbonate [Mg(HCO₃)₂].\n     - Removal: Heating / Boiling precipitates insoluble calcium carbonate:\n       Ca(HCO₃)₂(aq) -> CaCO₃(s) + H₂O(l) + CO₂(g).\n  2. Permanent Hardness: Caused by dissolved calcium sulfate (CaSO₄), magnesium sulfate (MgSO₄), or chlorides (CaCl₂).\n     - Removal: Cannot be removed by boiling. Removed by adding washing soda (sodium carbonate, Na₂CO₃) or ion-exchange resins:\n       CaSO₄(aq) + Na₂CO₃(aq) -> CaCO₃(s) + Na₂SO₄(aq).\n• Municipal Water Treatment Stages (GWCL Weija/Kpong):\n  1. Screening: Coarse metal grids remove large floating debris (branches, plastics, leaves).\n  2. Aeration: Spraying water into air expels dissolved smelly gases (H₂S) and oxidizes dissolved iron.\n  3. Coagulation & Flocculation: Adding alum (aluminum sulfate) neutralizes colloidal charges, causing fine mud particles to clump into heavy flocs.\n  4. Sedimentation: Water sits in large settling tanks where heavy flocs settle to the bottom.\n  5. Sand Filtration: Water percolates through layers of graded sand and gravel, trapping fine microbes and suspended silt.\n  6. Chlorination: Adding controlled chlorine gas or sodium hypochlorite destroys pathogenic bacteria and parasites.\n  7. Storage and Pumping: Safe treated potable water is pumped into reservoirs for piped distribution.",
    "examples": [
      {
        "id": "ex-jhs2sci-t5-1",
        "title": "Removing Temporary Water Hardness by Boiling",
        "problem": "Explain the chemical change that occurs when temporary hard water containing calcium hydrogen carbonate is boiled in an electric kettle, and describe the disadvantage observed.",
        "stepByStepSolution": [
          "Step 1 (Chemical Reaction): Heating decomposes soluble calcium hydrogen carbonate into insoluble calcium carbonate, water, and carbon dioxide gas: Ca(HCO₃)₂(aq) -> CaCO₃(s) + H₂O(l) + CO₂(g).",
          "Step 2 (Removal of Hardness): The calcium ions are precipitated out of the water as solid CaCO₃, leaving the water soft.",
          "Step 3 (Disadvantage): The solid CaCO₃ forms a white chalky crust called \"kettle fur\" or boiler scale on the heating element, reducing thermal efficiency and wasting electricity."
        ],
        "keyTakeaway": "Boiling decomposes soluble hydrogen carbonates into insoluble carbonate scale (CaCO₃), softening the water while depositing kettle fur."
      },
      {
        "id": "ex-jhs2sci-t5-2",
        "title": "Role of Alum in Municipal Water Treatment",
        "problem": "What is the specific role of alum (aluminum sulfate) in the water purification process at the Ghana Water Company Limited (GWCL) treatment plant?",
        "stepByStepSolution": [
          "Step 1 (Nature of Untreated Water): Raw river water contains extremely fine, negatively charged colloidal clay and mud particles that remain suspended indefinitely because they repel each other.",
          "Step 2 (Coagulation): Alum provides positive aluminum ions (Al³⁺) that neutralize the negative electrostatic charges on the clay particles.",
          "Step 3 (Flocculation): The neutralized particles collide, stick together, and aggregate into larger, heavier clumps called flocs.",
          "Step 4 (Settling): In the sedimentation basin, these heavy flocs quickly sink to the bottom under gravity, clarifying the water before filtration."
        ],
        "keyTakeaway": "Alum is a coagulant: it neutralizes colloidal surface charges so fine silt aggregates into heavy flocs that settle rapidly by gravity."
      }
    ]
  },
  {
    "id": "jhs2-sci-t6-circulatory-system",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 6,
    "title": "The Human Circulatory System & Blood Components",
    "description": "Master heart structure, blood vessels (arteries, veins, capillaries), blood components and functions, double circulation, and blood grouping.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "The circulatory system transports oxygen, nutrients, hormones, antibodies, and metabolic wastes throughout the human body.\n• The Heart: A muscular organ composed of cardiac muscle with four chambers.\n  - Right Atrium & Ventricle: Receive deoxygenated blood from the body (via Vena Cava) and pump it to the lungs (via Pulmonary Artery).\n  - Left Atrium & Ventricle: Receive oxygenated blood from the lungs (via Pulmonary Veins) and pump it to the entire body (via Aorta).\n  - Left Ventricle Wall: Much thicker and more muscular than the right ventricle because it must generate high pressure to pump blood to the entire body.\n  - Valves (Tricuspid, Bicuspid/Mitral, Semilunar): Prevent the backflow of blood, ensuring one-way circulation.\n• Blood Vessels:\n  - Arteries: Carry blood AWAY from the heart under high pressure; thick, elastic muscular walls; narrow lumen; no valves (except pulmonary artery).\n  - Veins: Carry blood TOWARDS the heart under low pressure; thinner walls; wide lumen; contain pocket valves to prevent backflow.\n  - Capillaries: Microscopic, one-cell-thick permeable walls connecting arterioles and venules; site of nutrient, gas, and waste exchange with tissues.\n• Blood Components:\n  - Red Blood Cells (Erythrocytes): Biconcave discs with no nucleus; contain hemoglobin to bind and transport oxygen.\n  - White Blood Cells (Leukocytes): Phagocytes (engulf pathogens) and Lymphocytes (produce antibodies); defend against infection.\n  - Platelets (Thrombocytes): Cell fragments that initiate blood clotting to prevent blood loss and microbe entry.\n  - Plasma: Pale yellow liquid (55% of blood) transporting dissolved glucose, amino acids, hormones, urea, CO₂, and mineral ions.\n• Double Circulation: Blood passes through the heart TWICE during each complete circuit (Pulmonary circulation to lungs + Systemic circulation to body).\n• Blood Groups (ABO System): Groups A, B, AB (universal recipient), and O (universal donor); Rhesus factor (+ or -).",
    "examples": [
      {
        "id": "ex-jhs2sci-t6-1",
        "title": "Why the Left Ventricular Wall is Thicker than the Right",
        "problem": "In a dissecting class, students notice that the muscular wall of the left ventricle of a mammalian heart is roughly three times thicker than that of the right ventricle. Explain the physiological reason for this difference.",
        "stepByStepSolution": [
          "Step 1 (Right Ventricle Destination): The right ventricle only pumps deoxygenated blood a short distance to the nearby lungs through the pulmonary circulation under low pressure.",
          "Step 2 (Left Ventricle Destination): The left ventricle must pump oxygenated blood through the systemic circulation to the entire body, from brain to toes.",
          "Step 3 (Pressure Requirement): Pumping blood against systemic vascular resistance requires much greater contractile force and high pressure.",
          "Step 4 (Adaptation): The left ventricle has a much thicker layer of cardiac muscle myocardium to generate this high pumping force."
        ],
        "keyTakeaway": "The left ventricle has a thicker muscular wall because it must generate enough pressure to circulate blood to the entire body, whereas the right ventricle only pumps to the adjacent lungs."
      },
      {
        "id": "ex-jhs2sci-t6-2",
        "title": "Comparing Arteries and Veins Structure and Function",
        "problem": "Tabulate three structural differences between arteries and veins and explain how each structure relates to its function.",
        "stepByStepSolution": [
          "Point 1 (Wall Thickness): Arteries have thick, muscular, elastic walls to withstand and maintain high blood pressure from the heart; Veins have thinner walls because blood flows under low pressure.",
          "Point 2 (Lumen Diameter): Arteries have a narrow lumen to sustain pressure; Veins have a wide lumen to offer low resistance to returning blood.",
          "Point 3 (Presence of Valves): Arteries lack valves because high pressure keeps blood moving forward; Veins contain semilunar pocket valves to prevent blood from flowing backward under gravity."
        ],
        "keyTakeaway": "Arteries have thick walls and narrow lumens to withstand high pressure; veins have wider lumens and valves to maintain unidirectional low-pressure return."
      }
    ]
  },
  {
    "id": "jhs2-sci-t7-photosynthesis",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 7,
    "title": "Photosynthesis & Plant Nutrition",
    "description": "Learn the chemical equation of photosynthesis, conditions required, internal leaf adaptations, the starch test experiment, and ecological importance.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Photosynthesis is the biochemical process by which green plants manufacture organic carbohydrates (glucose) from carbon dioxide and water using sunlight energy trapped by chlorophyll.\n• Balanced Chemical Equation:\n  6CO₂ + 6H₂O ->[Light, Chlorophyll] C₆H₁₂O₆ + 6O₂.\n• Word Equation:\n  Carbon dioxide + Water ->[Light, Chlorophyll] Glucose + Oxygen.\n• Essential Conditions:\n  - Sunlight: Provides photonic energy for photolysis (splitting of water).\n  - Chlorophyll: Green pigment located in chloroplasts that absorbs light energy (primarily red and blue wavelengths).\n  - Carbon Dioxide: Enters through stomata from atmospheric air by diffusion.\n  - Water: Absorbed from soil by root hairs and transported upward through xylem vessels.\n• Internal Leaf Adaptations:\n  - Broad, flat lamina: Maximizes surface area for sunlight absorption.\n  - Thin lamina: Short diffusion distance for gases to reach mesophyll cells.\n  - Transparent upper cuticle & epidermis: Allows sunlight to penetrate directly to photosynthetic tissue.\n  - Palisade Mesophyll: Densely packed vertically with abundant chloroplasts for maximum light capture.\n  - Spongy Mesophyll: Loose arrangement with large air spaces for rapid diffusion of CO₂ and O₂.\n  - Stomata and Guard Cells: Regulate gas exchange and water loss.\n  - Xylem & Phloem (Veins): Deliver water/minerals and transport manufactured sugars away.\n• Experiment: Testing a Green Leaf for Starch:\n  1. Boil leaf in water for 1 minute (kills cells, breaks cell membranes).\n  2. Boil leaf in ethanol in a water bath (dissolves and removes green chlorophyll; water bath avoids fire since ethanol is flammable).\n  3. Dip leaf in warm water (softens brittle leaf).\n  4. Spread leaf on white tile and add drops of iodine solution.\n  5. Observation: Color turns blue-black (starch is present). If no starch, iodine remains yellow-brown.",
    "examples": [
      {
        "id": "ex-jhs2sci-t7-1",
        "title": "Safety Precautions in the Starch Test for a Leaf",
        "problem": "In testing a leaf for starch, why is the leaf boiled in ethanol using a water bath instead of heating the test tube directly over a Bunsen flame?",
        "stepByStepSolution": [
          "Step 1 (Purpose of Ethanol): Ethanol is used to extract and dissolve chlorophyll pigment from the leaf so that any color change with iodine can be seen clearly.",
          "Step 2 (Hazard of Ethanol): Ethanol (alcohol) is highly volatile and highly flammable.",
          "Step 3 (Safety Risk): If heated directly over an open naked flame, ethanol vapors could easily catch fire and explode.",
          "Step 4 (Precaution): Turning off the flame or placing the test tube in a beaker of hot water (water bath) removes the direct heat source and ensures safe heating."
        ],
        "keyTakeaway": "Ethanol is flammable and its vapors catch fire easily; it must always be heated in a water bath without direct exposure to a flame."
      },
      {
        "id": "ex-jhs2sci-t7-2",
        "title": "Proving that Light is Necessary for Photosynthesis",
        "problem": "Outline an experiment to prove that sunlight is necessary for photosynthesis using a potted plant.",
        "stepByStepSolution": [
          "Step 1 (Destarching): Keep a potted plant in a dark cupboard for 48 hours so leaves consume all pre-existing starch reserves.",
          "Step 2 (Light Exclusion): Clip a strip of opaque black paper or aluminum foil across the middle of one attached leaf.",
          "Step 3 (Light Exposure): Place the plant in bright sunlight for 4 to 6 hours.",
          "Step 4 (Testing): Pluck the leaf, remove the black paper, and perform the standard starch test (boil in water, boil in alcohol, soften, add iodine).",
          "Step 5 (Result & Conclusion): The uncovered parts exposed to light turn blue-black (starch made); the covered central strip remains yellow-brown (no starch). This proves light is essential."
        ],
        "keyTakeaway": "Destarching ensures only newly made starch is tested. Uncovered areas turn blue-black with iodine while covered areas remain yellow-brown."
      }
    ]
  },
  {
    "id": "jhs2-sci-t8-plant-transport",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 8,
    "title": "Transport Systems in Flowering Plants",
    "description": "Examine root hair absorption, xylem vs phloem structures and functions, transpiration pull, and factors controlling transpiration rates.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Flowering plants possess specialized vascular tissues (vascular bundles) to transport water, dissolved minerals, and synthesized organic food throughout the plant body.\n• Root Hair Absorption:\n  - Root hairs are microscopic extensions of root epidermal cells that provide a very large surface area.\n  - Water Absorption: Absorbed from soil water into root hair cells by OSMOSIS (movement of water molecules from high water potential in soil to lower water potential in cell sap across a semi-permeable membrane).\n  - Mineral Absorption: Mineral ions (nitrates, phosphates, potassium) are absorbed by ACTIVE TRANSPORT (against concentration gradient using cellular energy) and diffusion.\n• Vascular Tissues:\n  - Xylem: Composed of non-living, hollow, elongated tubular vessels with thick walls reinforced with lignin. Transports water and dissolved mineral salts UNIDIRECTIONALLY upward from roots to stems and leaves.\n  - Phloem: Composed of living sieve tube elements with perforated sieve plates and companion cells containing active mitochondria. Translocates manufactured sucrose and amino acids BIDIRECTIONALLY from leaves (source) to storage organs and growing points (sink).\n• Transpiration:\n  - The loss of water vapor from the aerial parts of plants, primarily through the stomata of leaves by evaporation.\n  - Transpiration Pull: The continuous suction force generated in leaves that pulls a continuous water column up xylem vessels from roots (aided by cohesion between water molecules and adhesion to xylem walls).\n• Factors Affecting Transpiration Rate:\n  - Temperature: Higher temperature increases kinetic energy and evaporation rate -> increases transpiration.\n  - Humidity: High air humidity decreases concentration gradient between leaf interior and air -> decreases transpiration.\n  - Wind Speed / Air Movement: Blows away humid boundary layer near stomata -> increases transpiration.\n  - Light Intensity: Light stimulates stomata to open for photosynthesis -> increases transpiration.\n• Wilting: Occurs when the rate of water loss by transpiration exceeds the rate of water absorption by roots, causing cells to lose turgidity.",
    "examples": [
      {
        "id": "ex-jhs2sci-t8-1",
        "title": "Investigating Water Transport in a Balsam Plant Shoot",
        "problem": "A leafy shoot of a balsam plant with translucent stems is placed in a beaker containing red eosin dye solution for 4 hours. When transverse sections of the stem and leaves are examined under a hand lens, only specific vascular regions are stained red. (a) Which tissue is stained? (b) What does this demonstrate?",
        "stepByStepSolution": [
          "Step 1 (Tissue Stained): Only the XYLEM vessels in the vascular bundles are stained red.",
          "Step 2 (Explanation): Xylem vessels are responsible for the upward conduction of water and dissolved minerals from roots to stems and leaves.",
          "Step 3 (Demonstration): This experiment conclusively demonstrates that water moves upward through the plant specifically through xylem tissue, powered by transpiration pull."
        ],
        "keyTakeaway": "Eosin dye stains only xylem vessels, proving that water and dissolved mineral solutes travel upward through xylem tissue."
      },
      {
        "id": "ex-jhs2sci-t8-2",
        "title": "Why Farmers Transplant Seedlings in Late Afternoon",
        "problem": "In Ghanaian agriculture, vegetable farmers transplant tomato and pepper seedlings in the late afternoon rather than at midday. Explain the biological reason.",
        "stepByStepSolution": [
          "Step 1 (Root Disturbance): Uprooting seedlings damages delicate root hairs, temporarily reducing their water absorption capacity.",
          "Step 2 (Midday Conditions): Midday brings high solar radiation, high temperatures, and intense light, which maximize transpiration rate.",
          "Step 3 (Risk of Wilting): Excessive water loss exceeding root uptake causes rapid cellular flaccidity, severe wilting, and seedling death.",
          "Step 4 (Late Afternoon Advantage): In late afternoon and night, temperatures drop, light fades, stomata close, and transpiration drops sharply, allowing seedlings to recover and establish new root hairs before morning sun."
        ],
        "keyTakeaway": "Transplanting in late afternoon minimizes transpiration water loss while damaged root hairs recover overnight."
      }
    ]
  },
  {
    "id": "jhs2-sci-t9-chemical-reactions",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 9,
    "title": "Chemical Equations, Acids, Bases & Indicators",
    "description": "Write word and balanced equations, classify acids and alkalis, use indicators and the pH scale, and explore practical neutralization reactions.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Chemical reactions transform reactants into new substances (products) with different properties, obeying the Law of Conservation of Mass.\n• Chemical Equations:\n  - Reactants -> Products. State symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.\n  - Balanced Equation: Number of atoms of each element on LHS must equal RHS.\n    Example: 2H₂ + O₂ -> 2H₂O; 2Mg + O₂ -> 2MgO; Zn + 2HCl -> ZnCl₂ + H₂.\n• Acids:\n  - Substances that produce hydrogen ions (H⁺) when dissolved in water.\n  - Properties: Sour taste, corrosive, turn blue litmus paper RED, pH < 7.\n  - Mineral Acids: Hydrochloric acid (HCl), Tetraoxosulphate(VI) acid (H₂SO₄), Trioxonitrate(V) acid (HNO₃).\n  - Organic Acids: Ethanoic acid (vinegar), Citric acid (oranges/lemons), Lactic acid (sour milk), Methanoic acid (ant stings).\n  - Reactions of Acids:\n    1. Acid + Metal -> Salt + Hydrogen gas (e.g. Mg + 2HCl -> MgCl₂ + H₂).\n    2. Acid + Base -> Salt + Water (Neutralization).\n    3. Acid + Carbonate -> Salt + Water + Carbon Dioxide (e.g. CaCO₃ + 2HCl -> CaCl₂ + H₂O + CO₂).\n• Bases and Alkalis:\n  - Base: Metal oxide or hydroxide that neutralizes an acid to produce salt and water only.\n  - Alkali: A water-soluble base producing hydroxide ions (OH⁻) in aqueous solution (e.g. NaOH, KOH, Ca(OH)₂).\n  - Properties: Bitter taste, soapy/slippery feel, turn red litmus paper BLUE, pH > 7.\n• Indicators and the pH Scale:\n  - pH Scale: 0 to 14. pH 0-6 = Acidic (0-3 strong, 4-6 weak); pH 7 = Neutral (pure water); pH 8-14 = Alkaline (8-10 weak, 11-14 strong).\n  - Litmus Paper: Blue litmus turns RED in acid; Red litmus turns BLUE in alkali.\n  - Universal Indicator: Shows a spectrum of colors corresponding to exact pH values.\n• Practical Applications of Neutralization:\n  - Antacid tablets (contain magnesium hydroxide / aluminum hydroxide) neutralize excess stomach HCl to relieve indigestion.\n  - Farmers apply slaked lime [Ca(OH)₂] or agricultural limestone to neutralize acidic soils and restore crop yield.\n  - Toothpaste (mildly alkaline) neutralizes mouth acids produced by plaque bacteria to prevent tooth decay.",
    "examples": [
      {
        "id": "ex-jhs2sci-t9-1",
        "title": "Balancing a Chemical Reaction Between Zinc and Hydrochloric Acid",
        "problem": "Write a balanced chemical equation with state symbols for the reaction between solid zinc metal and dilute hydrochloric acid to produce zinc chloride solution and hydrogen gas.",
        "stepByStepSolution": [
          "Step 1 (Word Equation): Zinc + Hydrochloric Acid -> Zinc Chloride + Hydrogen.",
          "Step 2 (Chemical Formulae): Zn(s) + HCl(aq) -> ZnCl₂(aq) + H₂(g).",
          "Step 3 (Count Atoms): LHS has 1 Zn, 1 H, 1 Cl; RHS has 1 Zn, 2 H, 2 Cl.",
          "Step 4 (Balance Atoms): Place coefficient 2 in front of HCl on LHS: Zn(s) + 2HCl(aq) -> ZnCl₂(aq) + H₂(g).",
          "Step 5 (Verify): LHS: 1 Zn, 2 H, 2 Cl. RHS: 1 Zn, 2 H, 2 Cl. The equation is completely balanced."
        ],
        "keyTakeaway": "Balance equations by adjusting leading stoichiometric coefficients; never change subscripts inside chemical formulae."
      },
      {
        "id": "ex-jhs2sci-t9-2",
        "title": "Neutralization of Stomach Acidity Using Antacids",
        "problem": "A patient complaining of heartburn takes an antacid containing magnesium hydroxide [Mg(OH)₂]. Write the word and balanced chemical equation for the neutralization reaction in the stomach.",
        "stepByStepSolution": [
          "Step 1 (Identify Reactants): Stomach acid is Hydrochloric Acid (HCl); antacid base is Magnesium Hydroxide [Mg(OH)₂].",
          "Step 2 (Word Equation): Magnesium Hydroxide + Hydrochloric Acid -> Magnesium Chloride + Water.",
          "Step 3 (Formulae): Mg(OH)₂(s) + HCl(aq) -> MgCl₂(aq) + H₂O(l).",
          "Step 4 (Balancing): Mg(OH)₂ has 2 OH groups, requiring 2 HCl molecules, which produce 2 H₂O molecules: Mg(OH)₂(s) + 2HCl(aq) -> MgCl₂(aq) + 2H₂O(l).",
          "Step 5 (Clinical Effect): The caustic acid is converted into neutral magnesium chloride salt and harmless water, relieving the burning sensation."
        ],
        "keyTakeaway": "Antacids neutralize excess hydrochloric acid in the stomach to form harmless salt and water: Acid + Base -> Salt + Water."
      }
    ]
  },
  {
    "id": "jhs2-sci-t10-energy-sources",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 10,
    "title": "Energy Forms, Transformations & Conservation",
    "description": "Explore potential and kinetic energy, energy transformations, the Law of Conservation of Energy, and renewable vs non-renewable energy in Ghana.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Energy is the capacity to do work, measured in Joules (J).\n• Two Primary States of Mechanical Energy:\n  - Potential Energy (PE): Stored energy possessed by an object due to its position or state.\n    Gravitational PE formula: PE = m × g × h (where m = mass in kg, g = acceleration due to gravity ≈ 9.8 or 10 m/s², h = height in meters).\n  - Kinetic Energy (KE): Energy possessed by an object due to its motion.\n    KE formula: KE = 1/2 m v² (where m = mass in kg, v = velocity in m/s).\n• Other Common Forms of Energy: Chemical, Electrical, Thermal (Heat), Light, Sound, Nuclear.\n• The Law of Conservation of Energy:\n  - Energy cannot be created nor destroyed; it can only be transformed from one form to another. Total energy in an isolated system remains constant.\n• Common Energy Transformations:\n  - Hydroelectric Power Station (Akosombo / Bui Dam): Potential Energy of water in reservoir -> Kinetic Energy of falling water -> Mechanical Kinetic Energy of turbine -> Electrical Energy in generator.\n  - Battery Torch: Chemical Energy (cells) -> Electrical Energy -> Light Energy + Heat Energy.\n  - Solar PV Panel: Solar Light Energy -> Electrical Energy.\n  - Electric Iron: Electrical Energy -> Thermal Energy.\n• Renewable vs Non-Renewable Energy Sources:\n  - Renewable (Sustainable, naturally replenished): Solar, Wind, Hydroelectric, Biomass/Biogas, Geothermal, Tidal.\n  - Non-Renewable (Finite, deplete over time, emit greenhouse gases): Crude oil (petrol, diesel), Natural gas, Coal.\n• Energy Conservation Practices in Ghana: Using LED bulbs, turning off unused appliances, solar water heaters, mass public transport.",
    "examples": [
      {
        "id": "ex-jhs2sci-t10-1",
        "title": "Calculating Potential Energy and Kinetic Energy",
        "problem": "A mango of mass 0.5 kg hangs from a branch 6 meters above the ground. Taking g = 10 m/s²: (a) Calculate its gravitational potential energy. (b) What will be its kinetic energy just before it hits the ground when it falls?",
        "stepByStepSolution": [
          "Step 1 (Potential Energy Calculation): PE = m × g × h = 0.5 kg × 10 m/s² × 6 m = 30 Joules.",
          "Step 2 (Application of Conservation Law): According to the Law of Conservation of Energy, assuming negligible air resistance, all initial gravitational potential energy is converted entirely into kinetic energy as the mango falls.",
          "Step 3 (Kinetic Energy at Ground Impact): Kinetic Energy (KE) just before hitting ground = Initial Potential Energy = 30 Joules."
        ],
        "keyTakeaway": "At maximum height, energy is purely potential; as an object falls, PE converts into KE, so KE just before impact equals initial PE."
      },
      {
        "id": "ex-jhs2sci-t10-2",
        "title": "Tracing Energy Transformations at Akosombo Dam",
        "problem": "Trace the sequence of energy transformations that occur from the water stored in Lake Volta until electricity is delivered to homes in Accra.",
        "stepByStepSolution": [
          "Step 1 (Reservoir): Water stored at a high elevation behind the Akosombo Dam possesses Gravitational Potential Energy.",
          "Step 2 (Penstocks): As penstock gates open, water rushes downward through tunnels, converting potential energy into Kinetic Energy.",
          "Step 3 (Turbines): High-speed water strikes turbine blades, converting fluid kinetic energy into Mechanical Rotational Kinetic Energy.",
          "Step 4 (Generators): Rotating turbines spin electromagnets inside copper wire coils in the generator, converting mechanical energy into Electrical Energy.",
          "Step 5 (Transmission & Homes): Electricity transmitted along high-voltage grid lines transforms into Light Energy in bulbs, Thermal Energy in irons, and Kinetic Energy in fans."
        ],
        "keyTakeaway": "Hydroelectric generation: Potential Energy (stored water) -> Kinetic Energy (rushing water) -> Mechanical Energy (turbine) -> Electrical Energy (generator)."
      }
    ]
  },
  {
    "id": "jhs2-sci-t11-magnetism",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 11,
    "title": "Magnetism & Magnetic Fields",
    "description": "Explore magnetic materials, magnetic poles, field patterns, methods of making and demagnetizing magnets, and practical electromagnetism.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "A magnet is a material or object that produces a magnetic field and attracts ferromagnetic substances.\n• Magnetic vs Non-Magnetic Materials:\n  - Magnetic Materials (Ferromagnetic): Strongly attracted to magnets and can be magnetized (e.g. Iron, Steel, Cobalt, Nickel).\n  - Non-Magnetic Materials: Not attracted to magnets (e.g. Wood, Plastic, Glass, Copper, Aluminum, Brass).\n• Properties of Magnets:\n  - A freely suspended magnet always comes to rest pointing in the geographic North-South direction.\n  - Magnetic Poles: Points near the ends of a magnet where magnetic attraction is strongest (North pole and South pole).\n  - Fundamental Law of Magnetism: LIKE poles REPEL (N-N or S-S); UNLIKE poles ATTRACT (N-S).\n  - Magnetic poles always exist in pairs (dipoles); breaking a magnet creates two smaller complete magnets.\n• Magnetic Field:\n  - The region around a magnet where magnetic forces can be detected.\n  - Lines of Magnetic Force: Continuous lines directed from NORTH to SOUTH outside the magnet; they never cross each other; crowded lines indicate a strong field.\n• Methods of Magnetization:\n  1. Stroking Method: Rubbing a steel bar repeatedly in one direction with one pole of a permanent magnet (single touch or divided touch).\n  2. Electrical Method: Placing a steel bar inside a solenoid (coil of wire) connected to Direct Current (DC). This produces the strongest magnets.\n• Methods of Demagnetization:\n  - Heating the magnet to red hot.\n  - Hammering / hitting violently when aligned East-West.\n  - Placing inside a solenoid carrying Alternating Current (AC) and withdrawing it slowly along an East-West axis.\n• Electromagnets:\n  - Temporary magnet made by winding an insulated wire around a soft iron core and passing direct current through it.\n  - Advantages: Magnetic strength can be varied by changing current or number of coil turns; can be switched ON and OFF instantaneously.\n  - Applications: Electric bells, scrapyard lifting cranes, loudspeaker coils, magnetic circuit breakers.",
    "examples": [
      {
        "id": "ex-jhs2sci-t11-1",
        "title": "Why Repulsion is the Only Sure Test for Magnetism",
        "problem": "A student brings one end of a metal bar near the North pole of a suspended compass needle and observes attraction. Can she conclude that the metal bar is a permanent magnet? Explain.",
        "stepByStepSolution": [
          "Step 1 (Phenomenon Analysis): A North pole attracts both an unlike magnetic pole (South pole) AND an unmagnetized piece of magnetic material (like soft iron) through induced magnetism.",
          "Step 2 (Limitation of Attraction): Since attraction occurs between a magnet and an unmagnetized iron bar, attraction does not confirm that the bar itself is magnetized.",
          "Step 3 (Role of Repulsion): Repulsion can ONLY occur between two like magnetic poles (North repels North, or South repels South).",
          "Step 4 (Conclusion): Therefore, REPULSION is the only foolproof, definitive test to confirm that an object is a permanent magnet."
        ],
        "keyTakeaway": "Repulsion is the only sure test for magnetism because an unmagnetized magnetic material can be attracted by either pole, but only a like pole can repel."
      },
      {
        "id": "ex-jhs2sci-t11-2",
        "title": "How an Electric Bell Operates Using an Electromagnet",
        "problem": "Describe how an electromagnet operates an electric school bell when the switch is pressed.",
        "stepByStepSolution": [
          "Step 1 (Circuit Closure): Pressing the push switch completes the electrical circuit, allowing direct current to flow through the electromagnet coils.",
          "Step 2 (Magnetic Attraction): The energized soft iron core becomes a powerful electromagnet and attracts the soft iron armature attached to the hammer.",
          "Step 3 (Striking Gong): The moving hammer strikes the metal gong, producing a loud ringing sound.",
          "Step 4 (Circuit Break): As the armature moves forward, it pulls away from the contact screw, breaking the electrical circuit.",
          "Step 5 (Reset): The electromagnet instantly loses magnetism; the spring pulls the armature back against the contact screw, completing the circuit again to repeat the cycle rapidly."
        ],
        "keyTakeaway": "An electric bell uses a make-and-break circuit: the electromagnet attracts the hammer to strike the gong, breaks the contact, demagnetizes, and springs back to repeat."
      }
    ]
  },
  {
    "id": "jhs2-sci-t12-simple-machines",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Work, Energy & Simple Machines",
    "description": "Master work done, Mechanical Advantage, Velocity Ratio, Efficiency, classification of levers, pulleys, and inclined planes.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "A simple machine is a mechanical device that makes work easier by allowing a small effort to overcome a large load, or by increasing the speed or changing the direction of applied force.\n• Work Done:\n  - Work = Force (N) × Distance moved in the direction of force (m).\n  - Measured in Joules (J). 1 Joule = 1 Newton-meter (N·m).\n• Key Machine Parameters:\n  - Mechanical Advantage (MA): Ratio of Load overcome to Effort applied: MA = Load / Effort. (Has no units).\n  - Velocity Ratio (VR): Ratio of distance moved by Effort to distance moved by Load in the same time: VR = Distance of Effort / Distance of Load. (Has no units).\n  - Work Output: Useful work done on the load = Load × Distance of Load.\n  - Work Input: Total work done by the effort = Effort × Distance of Effort.\n  - Efficiency (η): Ratio of useful work output to total work input:\n    Efficiency (η) = (Work Output / Work Input) × 100% = (MA / VR) × 100%.\n  - Why Efficiency is ALWAYS less than 100%: In real machines, some work input is always wasted overcoming friction between moving parts and lifting the machine's own weight.\n• Classification of Levers (FLE Rule - what is in the middle):\n  - First Class (Fulcrum in middle): Seesaw, crowbar, pair of scissors, pliers, claw hammer removing nail.\n  - Second Class (Load in middle): Wheelbarrow, bottle opener, nutcracker, paper guillotine. (MA > 1, force multiplier).\n  - Third Class (Effort in middle): Human forearm lifting weight, pair of tweezers/tongs, fishing rod, broom sweeping. (Speed/distance multiplier, MA < 1).\n• Other Simple Machines:\n  - Pulleys: Single fixed pulley (VR = 1, changes direction); Single movable pulley (VR = 2); Block and tackle system (VR = total number of pulleys or rope segments supporting the load).\n  - Inclined Plane: Slanted ramp used to lift heavy loads. VR = Length of slope (L) / Vertical height (h).",
    "examples": [
      {
        "id": "ex-jhs2sci-t12-1",
        "title": "Calculating MA, VR, and Efficiency of a Pulley System",
        "problem": "A block and tackle pulley system with 4 pulleys is used to lift a load of 600 N by applying an effort of 200 N. Calculate: (i) Mechanical Advantage (MA), (ii) Velocity Ratio (VR), (iii) Efficiency of the pulley system.",
        "stepByStepSolution": [
          "Step 1 (Mechanical Advantage): MA = Load / Effort = 600 N / 200 N = 3.0.",
          "Step 2 (Velocity Ratio): For a block and tackle system with 4 pulleys, the Velocity Ratio equals the number of pulleys: VR = 4.",
          "Step 3 (Efficiency Formula): Efficiency = (MA / VR) × 100%.",
          "Step 4 (Calculation): Efficiency = (3 / 4) × 100% = 75%.",
          "Step 5 (Interpretation): 75% of the effort energy does useful work lifting the load; 25% is wasted overcoming friction and rope weight."
        ],
        "keyTakeaway": "For a block and tackle, VR equals the number of pulleys. Efficiency is calculated as (MA / VR) × 100% and is always under 100% due to friction."
      },
      {
        "id": "ex-jhs2sci-t12-2",
        "title": "Identifying Lever Classes Using the FLE Mnemonic",
        "problem": "Classify each of the following everyday tools as a 1st class, 2nd class, or 3rd class lever: (a) A wheelbarrow carrying cement, (b) A pair of scissors cutting cloth, (c) A pair of sugar tongs picking ice.",
        "stepByStepSolution": [
          "Step 1 (Mnemonic FLE): 1 = Fulcrum in middle, 2 = Load in middle, 3 = Effort in middle.",
          "Step 2 (Wheelbarrow): The wheel is the fulcrum at one end, hands apply effort at the handles, and the heavy cement load is in the middle. Load in middle -> SECOND CLASS LEVER.",
          "Step 3 (Scissors): The central pivot screw is the fulcrum, effort is applied at handles, and cloth load is cut at the blades. Fulcrum in middle -> FIRST CLASS LEVER.",
          "Step 4 (Sugar Tongs): The joined hinge is the fulcrum at the end, the load is grasped at the tips, and fingers press the middle to apply effort. Effort in middle -> THIRD CLASS LEVER."
        ],
        "keyTakeaway": "Remember the \"FLE\" rule for the middle component: 1 = Fulcrum (scissors), 2 = Load (wheelbarrow), 3 = Effort (tongs)."
      }
    ]
  },
  {
    "id": "jhs2-sci-t13-carbon-cycle",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 13,
    "title": "Cycles in Nature: The Carbon and Nitrogen Cycles",
    "description": "Explore the pathways of carbon and nitrogen cycling in nature, greenhouse effect, climate change, and nitrogen fixation for soil fertility.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Biogeochemical cycles circulate essential chemical elements continuously through living organisms (biotic component) and the non-living environment (abiotic component).\n• The Carbon Cycle:\n  - Processes that RELEASE Carbon Dioxide (CO₂) into the atmosphere:\n    1. Cellular Respiration: All aerobic living organisms (plants, animals, microbes) oxidize glucose and release CO₂.\n    2. Combustion: Burning of fossil fuels (petrol, diesel, coal) and biomass/wood in vehicles, factories, and bushfires.\n    3. Decomposition: Decomposers (bacteria and fungi) break down dead organic matter and release CO₂.\n  - Processes that REMOVE Carbon Dioxide from the atmosphere:\n    1. Photosynthesis: Green plants and marine phytoplankton absorb atmospheric CO₂ to synthesize organic carbohydrates. (Primary natural sink).\n    2. Dissolution in Oceans: CO₂ dissolves in seawater, forming carbonates used by shellfish and coral.\n  - Fossil Fuel Formation: Dead plants and animals buried under high pressure and temperature over millions of years form petroleum, coal, and natural gas.\n• Greenhouse Effect & Climate Change:\n  - Greenhouse Gases: Carbon dioxide (CO₂), Methane (CH₄), Water vapor, Nitrous oxide.\n  - Natural Greenhouse Effect: Traps reflected infrared heat radiation to maintain Earth at a livable temperature (~15°C).\n  - Enhanced Greenhouse Effect (Global Warming): Excessive burning of fossil fuels and deforestation increase atmospheric CO₂, trapping excess heat.\n  - Consequences: Rising sea levels, severe droughts in northern Ghana, erratic rainfall patterns, coastal erosion at Keta and Ada.\n• The Nitrogen Cycle:\n  - Nitrogen is essential for synthesizing amino acids, proteins, and nucleic acids (DNA).\n  - Air contains ~78% inert nitrogen gas (N₂), which plants cannot absorb directly.\n  - Pathways of Nitrogen Fixation:\n    1. Biological Fixation: Rhizobium bacteria living symbiotically in root nodules of leguminous plants (cowpea, groundnut, beans) convert N₂ into ammonium/nitrates.\n    2. Atmospheric Fixation: Lightning provides high electrical energy to combine N₂ and O₂ into nitrogen oxides that dissolve in rain as nitrates.\n    3. Industrial Fixation: Haber process manufactures artificial nitrogenous fertilizers (e.g. NPK, urea).\n  - Nitrification: Nitrosomonas bacteria convert ammonia to nitrites; Nitrobacter bacteria convert nitrites into absorbable nitrates (NO₃⁻).\n  - Denitrification: Denitrifying bacteria in waterlogged anaerobic soils convert nitrates back into atmospheric N₂ gas, completing the cycle.",
    "examples": [
      {
        "id": "ex-jhs2sci-t13-1",
        "title": "Why Farmers Plant Cowpea or Groundnuts in Crop Rotation",
        "problem": "A maize farmer in the Bono Region of Ghana notices declining crop yields. The agricultural extension officer advises her to rotate maize with cowpea or groundnuts. Explain the biological justification.",
        "stepByStepSolution": [
          "Step 1 (Maize Depletion): Maize is a heavy feeder that rapidly exhausts soil nitrates for vegetative leaf growth.",
          "Step 2 (Legume Symbiosis): Cowpeas and groundnuts are leguminous plants whose root nodules host symbiotic Rhizobium bacteria.",
          "Step 3 (Biological Fixation): Rhizobium absorbs free nitrogen gas from soil air and converts it into water-soluble nitrates.",
          "Step 4 (Soil Enrichment): When the legumes are harvested and their root residues decompose, the fixed nitrates naturally enrich soil fertility, eliminating the need for expensive chemical fertilizers for subsequent maize crops."
        ],
        "keyTakeaway": "Leguminous crops harbor Rhizobium bacteria that fix free atmospheric nitrogen into nitrates, naturally restoring soil fertility."
      },
      {
        "id": "ex-jhs2sci-t13-2",
        "title": "Explaining How Deforestation Accelerates Global Warming",
        "problem": "How does the clearing of tropical rainforests in Ghana for timber and farming directly contribute to the enhanced greenhouse effect?",
        "stepByStepSolution": [
          "Step 1 (Loss of Carbon Sink): Trees and dense tropical forests are the largest terrestrial carbon sinks, constantly absorbing millions of tons of CO₂ from the atmosphere for photosynthesis.",
          "Step 2 (Release of Stored Carbon): When forests are cut down and burned (slash-and-burn farming), the carbon locked in tree trunks is immediately released into the atmosphere as CO₂ gas.",
          "Step 3 (Greenhouse Heat Trapping): Elevated atmospheric CO₂ traps escaping infrared thermal radiation, intensifying the greenhouse effect and accelerating planetary warming."
        ],
        "keyTakeaway": "Deforestation removes the primary photosynthetic sink for carbon dioxide and releases stored carbon upon combustion, accelerating global warming."
      }
    ]
  },
  {
    "id": "jhs2-sci-t14-diseases-health",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 14,
    "title": "Communicable and Non-Communicable Diseases",
    "description": "Differentiate communicable and non-communicable diseases, explore pathogen types, malaria life cycle, cholera, typhoid, hypertension, and diabetes.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "A disease is any impairment of normal physiological function in an organism affecting one or more organs.\n• Terminology:\n  - Pathogen: Disease-causing microorganism (bacterium, virus, fungus, protozoan).\n  - Vector: An organism that transmits a pathogen from an infected person to an uninfected host (e.g. female Anopheles mosquito, housefly, tsetse fly).\n• Communicable (Infectious) Diseases:\n  - Can be transmitted from one person to another via air, water, food, vectors, or direct physical contact.\n  1. Malaria:\n     - Causative Agent: Protozoan parasite Plasmodium (P. falciparum in Ghana).\n     - Vector: Female Anopheles mosquito.\n     - Symptoms: High fever, shivering, profuse sweating, headache, anemia, joint pain.\n     - Prevention: Sleeping under insecticide-treated bed nets (ITNs), clearing stagnant water breeding sites, indoor residual spraying, taking antimalarials.\n  2. Cholera:\n     - Causative Agent: Bacterium Vibrio cholerae.\n     - Mode of Transmission: Ingesting food or water contaminated with fecal matter.\n     - Symptoms: Severe watery diarrhea (\"rice-water stools\"), vomiting, extreme dehydration.\n     - Prevention: Washing hands with soap, drinking boiled or chlorinated water, proper sewage disposal, oral rehydration therapy (ORT).\n  3. Typhoid Fever:\n     - Causative Agent: Bacterium Salmonella typhi (spread by contaminated food/water and houseflies).\n  4. Tuberculosis (TB):\n     - Causative Agent: Bacterium Mycobacterium tuberculosis (spread by airborne droplets from coughing).\n  5. Viral Diseases: Common cold, Influenza, Measles, HIV/AIDS, Hepatitis B.\n• Non-Communicable (Non-Infectious) Diseases:\n  - Cannot be transmitted from person to person. Caused by genetics, malnutrition, lifestyle, or organ degeneration.\n  1. Hypertension (High Blood Pressure): Chronic pressure above 140/90 mmHg; caused by high salt intake, lack of exercise, obesity, chronic stress. Can cause stroke and heart failure.\n  2. Diabetes Mellitus: Inability of pancreas to produce sufficient insulin or body cells failing to respond to insulin, leading to high blood glucose. Symptoms: frequent urination, excessive thirst, slow wound healing.\n  3. Sickle Cell Anemia: Inherited genetic blood disorder where abnormal hemoglobin (HbS) causes red blood cells to distort into sickle shapes, blocking capillaries and causing severe bone pain crises.\n  4. Nutritional Deficiency: Kwashiorkor (protein deficiency), Marasmus (calorie starvation), Rickets (Vitamin D / calcium), Anemia (Iron deficiency).",
    "examples": [
      {
        "id": "ex-jhs2sci-t14-1",
        "title": "Breaking the Malaria Transmission Cycle",
        "problem": "State three distinct environmental sanitation measures a community in Ghana can take to break the life cycle of the malaria vector.",
        "stepByStepSolution": [
          "Measure 1 (Eliminating Breeding Sites): Drain or fill in all potholes, empty cans, discarded coconut shells, and open stagnant puddles of water where female Anopheles mosquitoes lay eggs.",
          "Measure 2 (Clearing Bushes): Clear thick overgrown weeds and bushes around living compounds where adult mosquitoes rest during daytime.",
          "Measure 3 (Larviciding): Apply biological larvicides or thin oil films on the surface of non-drainable standing water bodies to suffocate mosquito larvae and pupae."
        ],
        "keyTakeaway": "Breaking the malaria transmission cycle requires targeting mosquito breeding sites (standing water) and adult resting habitats."
      },
      {
        "id": "ex-jhs2sci-t14-2",
        "title": "Differentiating Communicable from Non-Communicable Diseases",
        "problem": "A student claims that since both cholera and diabetes can cause severe weakness and hospitalization, they are both infectious diseases. Correct this misconception with two scientific facts.",
        "stepByStepSolution": [
          "Point 1 (Causative Agent): Cholera is caused by a living biological pathogen (the bacterium Vibrio cholerae) that multiplies in the gut; Diabetes is not caused by any microorganism, but by physiological failure of the pancreas to secrete adequate insulin.",
          "Point 2 (Transmissibility): Cholera is communicable (infectious) and can spread rapidly from person to person via contaminated water or food; Diabetes is non-communicable and cannot be caught from another person by contact, air, or food."
        ],
        "keyTakeaway": "Communicable diseases are caused by microscopic pathogens and transmitted between people; non-communicable diseases stem from internal organ malfunction, lifestyle, or genetics."
      }
    ]
  },
  {
    "id": "jhs2-sci-t15-environment-mining",
    "subjectId": "science",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 15,
    "title": "Environmental Conservation & Impact of Galamsey Mining",
    "description": "Examine environmental degradation, deforestation, heavy metal pollution from illegal small-scale mining (galamsey), and sustainable conservation practices.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "Environmental conservation is the sustainable management and protection of natural ecosystems, biodiversity, soil, air, and water resources for present and future generations.\n• Environmental Degradation in Ghana:\n  - Deforestation: Indiscriminate logging and bush burning destroy Ghana's tropical forest reserves (e.g. Atewa Forest, Pra Anum, Desiri).\n  - Soil Erosion: Removal of vegetative cover by overgrazing and construction leads to fertile topsoil wash-out by torrential rains.\n  - Air Pollution: Industrial emissions, vehicular exhaust, and burning of electronic waste at Agbogbloshie release toxic dioxins and lead particulates.\n• The Impact of Illegal Small-Scale Gold Mining (Galamsey):\n  - Water Body Pollution:\n    * Heavy siltation and turbidity: Rivers like the Pra, Birim, Ankobra, Offin, and Tano have turned into thick muddy brown sludge.\n    * Toxic Chemical Contamination: Galamsey operators use poisonous mercury (for gold amalgamation) and cyanide. These heavy metals do not decompose; they bioaccumulate up the aquatic food chain into fish consumed by humans, causing kidney damage, brain impairment, and birth defects.\n    * Water Treatment Crisis: GWCL treatment plants (e.g. Bunso, Kyebi, Daboase) frequently shut down or incur astronomical costs for aluminum sulfate and chlorine to treat heavily silted river water.\n  - Farmland Destruction:\n    * Excavators and bulldozers gouge out fertile topsoil, destroying hundreds of thousands of acres of productive cocoa, oil palm, and cassava plantations.\n    * Unfilled mining pits become death traps for locals and stagnant breeding grounds for disease-carrying mosquitoes.\n• Conservation Strategies & Sustainable Reclamation:\n  - Enforcement of environmental laws by the Environmental Protection Agency (EPA) and Minerals Commission.\n  - Ban on mining inside forest reserves and within 100-meter buffer zones of river basins.\n  - Land Reclamation: Backfilling abandoned mining pits with subsoil, grading, restoring fertile topsoil, and replanting indigenous tree species (reforestation).\n  - Alternative Livelihoods: Training local youth in modern aquaculture, commercial horticulture, and agroforestry.",
    "examples": [
      {
        "id": "ex-jhs2sci-t15-1",
        "title": "Explaining Bioaccumulation of Mercury from Galamsey",
        "problem": "Explain how mercury used by illegal gold miners at an inland riverbank in the Eastern Region can ultimately poison a family living 50 kilometers downstream who do not mine gold.",
        "stepByStepSolution": [
          "Step 1 (Chemical Release): Miners wash gold-mercury amalgam in the river, discharging elemental mercury into the aquatic ecosystem.",
          "Step 2 (Bacterial Methylation): Anaerobic bacteria on the riverbed convert inorganic mercury into highly toxic methylmercury.",
          "Step 3 (Bioaccumulation): Microscopic algae absorb methylmercury; small fish consume huge quantities of algae; predatory large fish eat many small fish, concentrating the toxic mercury in their muscle tissue (biomagnification).",
          "Step 4 (Human Ingestion): The downstream family catches and eats the fish over months, absorbing the concentrated mercury, which accumulates in body organs and causes neurological and kidney damage."
        ],
        "keyTakeaway": "Mercury released into rivers undergoes biomagnification up the aquatic food chain, accumulating in high concentrations in predatory fish eaten by humans."
      },
      {
        "id": "ex-jhs2sci-t15-2",
        "title": "Steps for Ecological Reclamation of Degraded Mining Sites",
        "problem": "Outline three practical technical steps necessary to restore an abandoned, crater-filled galamsey site back into productive agricultural land.",
        "stepByStepSolution": [
          "Step 1 (Pit Backfilling and Grading): Use heavy earthmovers to backfill deep abandoned craters with waste rocks and subsoil, leveling and compacting the ground to prevent soil collapse.",
          "Step 2 (Topsoil Restoration): Spread a thick layer of preserved organic topsoil mixed with compost or animal manure over the graded land to restore essential nitrogen, phosphorus, and soil microbial life.",
          "Step 3 (Re-vegetation): Plant fast-growing nitrogen-fixing cover crops (like Mucuna or legumes) and indigenous trees (like mahogany and acacia) to anchor the soil, prevent erosion, and restore the ecosystem."
        ],
        "keyTakeaway": "Land reclamation requires backfilling hazardous pits, spreading nutrient-rich topsoil, and replanting cover crops and native trees to re-establish soil fertility."
      }
    ]
  }
];
