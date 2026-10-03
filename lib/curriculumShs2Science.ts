// Ghanaian SHS 2 Integrated Science Curriculum
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// 17 Comprehensive Topics covering Terms 1, 2, and 3 with Videos, Worked Examples, and Quizzes

import { CurriculumTopic } from './types';
import { SHS2_SCIENCE_QUIZZES } from './curriculumShs2ScienceQuizzes';

export const SHS2_SCIENCE_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs2-sci-t1-digestive-system-nutrition",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Digestive System, Enzymes & Balanced Diet",
    "description": "Human alimentary canal, mechanical and chemical digestion, digestive enzymes, absorption in villi, assimilation, and nutritional deficiency diseases (kwashiorkor, marasmus, scurvy).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Og5xAdC8EUI",
    "youtubeId": "Og5xAdC8EUI",
    "keyNotes": "• Digestive Pathway & Functions:\n  - Mouth: Mastication; salivary amylase (ptyalin) hydrolyzes starch into maltose at pH 6.8-7.0.\n  - Stomach: Gastric juice containing HCl (kills microbes, activates pepsinogen to pepsin) and pepsin (hydrolyzes proteins into peptides). Chyme is formed.\n  - Duodenum: Receives bile from liver/gall bladder (emulsifies lipids) and pancreatic juice (amylase, trypsin, lipase) buffered by NaHCO₃.\n  - Ileum: Intestinal enzymes (maltase, sucrase, lactase, peptidase) complete digestion. Villi and microvilli absorb glucose, amino acids, and minerals into blood capillaries; fatty acids and glycerol into central lacteals.\n• Balanced Diet & Deficiencies:\n  - Components: Carbohydrates, proteins, lipids, vitamins, minerals, dietary fiber (roughage), and water.\n  - Kwashiorkor: Severe protein deficiency in children with sufficient calories; characterized by protruding abdomen, edema, cracked skin, thin reddish hair.\n  - Marasmus: General starvation/caloric and protein deficiency; marked by severe muscle wasting and emaciation (\"old man face\").",
    "detailedNotes": {
      "introduction": "Digestion breaks complex, insoluble macronutrients into microscopic soluble molecules that can be absorbed across the intestinal epithelium into the bloodstream.",
      "realWorldContext": "In Ghana, traditional diets based on fermented cassava, yam, and plantain provide abundant carbohydrates. Public health campaigns by the Ghana Health Service encourage adding beans, agushie, fish, and moringa leaves to combat childhood kwashiorkor and stunting.",
      "objectives": [
        "Identify organs of the alimentary canal and describe their physiological functions",
        "Explain the action and optimum conditions of salivary amylase, pepsin, and pancreatic lipase",
        "Describe the structural adaptations of intestinal villi for nutrient absorption",
        "Compare the symptoms, causes, and dietary management of kwashiorkor and marasmus"
      ],
      "sections": [
        {
          "title": "Enzymatic Digestion in the Stomach & Duodenum",
          "content": "Chemical digestion relies on site-specific hydrolytic enzymes adapted to distinct pH micro-environments.",
          "bulletPoints": [
            "Pepsin operates at optimum pH 1.5 - 2.0; it is rapidly denatured when entering the alkaline duodenum.",
            "Bile contains no enzymes; it neutralizes acidic chyme and mechanically emulsifies fats into micro-droplets, increasing the surface area for pancreatic lipase.",
            "Pancreatic enzymes (lipase, amylase, trypsin) require an alkaline pH (~8.0) provided by sodium hydrogencarbonate."
          ],
          "keyTakeaway": "Bile emulsifies fats mechanically; pancreatic lipase hydrolyzes emulsified lipids chemically into fatty acids and glycerol.",
          "realWorldExample": "Consuming fatty foods like fried pork or chofi stimulates the gall bladder to discharge bile into the duodenum to accelerate fat digestion."
        }
      ],
      "wassceExamTips": [
        "When describing the adaptation of villi, mention: large surface area (millions of microvilli), one-cell thick epithelium, and presence of both capillaries and lacteals.",
        "Distinguish clearly between kwashiorkor (protein deficiency with edema) and marasmus (general emaciation without edema).",
        "State that bile emulsifies fats mechanically, not chemically."
      ],
      "commonMistakes": [
        "Stating that digestion occurs in the esophagus (it only conducts food via peristalsis).",
        "Claiming that bile contains digestive enzymes.",
        "Confusing absorption (entry into bloodstream) with assimilation (utilization by body cells)."
      ],
      "summaryChecklist": [
        "Can I trace a piece of boiled egg from mouth to ileum and name every enzyme acting on it?",
        "Can I sketch and label a single intestinal villus?",
        "Can I distinguish between the causes of kwashiorkor and marasmus?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-dig-1",
        "title": "Action of Salivary Amylase on Starch",
        "problem": "In an experiment, 2 cm³ of 1% starch solution and 1 cm³ of fresh saliva are incubated at 37°C. Drops are tested with iodine solution every 60 seconds. Initially the test gives a dark blue-black color; after 5 minutes, it remains yellowish-brown. Explain this observation and state what would happen if the test tube were kept at 80°C.",
        "stepByStepSolution": [
          "Step 1: Starch turns blue-black with iodine initially because it is an intact polysaccharide. [B1]",
          "Step 2: Salivary amylase hydrolyzes starch into maltose (a reducing sugar that does not turn iodine blue-black), so the solution tests negative (yellowish-brown) after 5 minutes. [M1, A1]",
          "Step 3: At 80°C, the enzyme is thermally denatured because high temperature disrupts hydrogen and ionic bonds stabilizing its active site. [M1]",
          "Step 4: As a result, starch is not digested, and iodine remains blue-black permanently. [A1]"
        ],
        "keyTakeaway": "Enzymes denature at high temperatures, permanently losing catalytic activity."
      },
      {
        "id": "ex-shs2-sci-dig-2",
        "title": "Villus Structural Adaptations",
        "problem": "State four structural adaptations of the human ileum that ensure efficient absorption of digested food molecules.",
        "stepByStepSolution": [
          "1. Enormous surface area: Highly folded intestinal lining with millions of microscopic villi and microvilli. [A1]",
          "2. Thin diffusion barrier: Epithelial wall is only one cell thick, minimizing diffusion distance. [A1]",
          "3. Rich blood capillary network: Constantly carries away absorbed glucose and amino acids, maintaining a steep concentration gradient. [A1]",
          "4. Central lacteal: Dedicated lymphatic vessel that efficiently absorbs fatty acids and glycerol. [A1]"
        ],
        "keyTakeaway": "Surface area, minimal diffusion distance, and steep concentration gradients govern intestinal absorption."
      }
    ]
  },
  {
    "id": "shs2-sci-t1-circulatory-system-blood",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Circulatory System, Blood Composition & Heart Dynamics",
    "description": "Double circulatory system, structure of the heart, cardiac cycle, blood vessels (arteries, veins, capillaries), blood cells, clotting cascade, ABO blood grouping, and cardiovascular diseases.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=q0s-1MC1HCc",
    "youtubeId": "q0s-1MC1HCc",
    "keyNotes": "• Double Circulation:\n  - Pulmonary Circulation: Right ventricle → Pulmonary artery → Lungs (oxygenation) → Pulmonary veins → Left atrium.\n  - Systemic Circulation: Left ventricle → Aorta → Body organs/tissues → Vena cava → Right atrium.\n• Heart Chambers & Valves:\n  - Left ventricle has the thickest muscular wall (myocardium) to pump blood under high pressure across systemic resistance.\n  - Atrioventricular (AV) valves: Tricuspid (right) and Bicuspid/Mitral (left) prevent backflow into atria during systole.\n  - Semilunar valves: At bases of aorta and pulmonary artery prevent backflow into ventricles during diastole.\n• Blood Components:\n  - Erythrocytes (RBCs): Biconcave discs, no nucleus, packed with hemoglobin to carry oxygen (oxyhemoglobin).\n  - Leukocytes (WBCs): Phagocytes (engulf bacteria) and Lymphocytes (produce antibodies).\n  - Thrombocytes (Platelets): Clotting fragments (Thromboplastin + Ca²⁺ → Prothrombin to Thrombin → Fibrinogen to Fibrin mesh).\n  - Plasma: Transports CO₂ (as HCO₃⁻), glucose, urea, hormones, and heat.",
    "detailedNotes": {
      "introduction": "The cardiovascular system delivers oxygen and nutrients to every living cell while removing carbon dioxide and metabolic wastes.",
      "realWorldContext": "Hypertension (high blood pressure) is a major public health challenge in Ghana. The National Cardiothoracic Centre at Korle-Bu treats coronary heart disease, often exacerbated by high dietary salt and physical inactivity.",
      "objectives": [
        "Diagram and label the internal structure of the human heart",
        "Trace the path of blood through pulmonary and systemic circulatory loops",
        "Compare the histological structure and function of arteries, veins, and capillaries",
        "Explain the enzymatic cascade of blood clotting and ABO blood group compatibility"
      ],
      "sections": [
        {
          "title": "Structure of Blood Vessels & Hemodynamics",
          "content": "Blood vessels are engineered specifically for their pressure regimes.",
          "bulletPoints": [
            "Arteries have thick elastic and muscular walls to withstand and smooth pulsating high pressure from ventricular systole.",
            "Veins have wide lumens, thin walls, and internal pocket valves to keep low-pressure blood flowing unidirectionally toward the heart.",
            "Capillaries consist of a single layer of endothelial cells, enabling rapid metabolic exchange."
          ],
          "keyTakeaway": "Arteries carry pulsating blood away under high pressure; veins carry non-pulsating blood toward the heart under low pressure with valves.",
          "realWorldExample": "Sitting stationary in long-distance trotro buses causes blood pooling in lower leg veins, increasing the risk of deep vein thrombosis."
        }
      ],
      "wassceExamTips": [
        "Always remember: Left ventricle has the thickest wall because it pumps blood around the entire body.",
        "Pulmonary artery is the only artery carrying deoxygenated blood; pulmonary vein is the only vein carrying oxygenated blood.",
        "State the role of calcium ions (Ca²⁺) and vitamin K in blood clotting."
      ],
      "commonMistakes": [
        "Confusing atria (top receiving chambers) with ventricles (bottom pumping chambers).",
        "Stating that all arteries carry oxygenated blood (forgetting the pulmonary artery).",
        "Writing that platelets produce antibodies (lymphocytes produce antibodies; platelets form clots)."
      ],
      "summaryChecklist": [
        "Can I trace a red blood cell from the big toe through the heart to the lungs and back?",
        "Can I write out the 3-step clotting cascade from thromboplastin to fibrin?",
        "Can I explain why someone with blood group O is a universal donor?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-circ-1",
        "title": "Cardiac Output Calculation",
        "problem": "A sprinter has a resting heart rate of 70 beats per minute and a stroke volume of 75 cm³ per beat. During a 400m race at the Baba Yara Stadium, their heart rate rises to 160 beats per minute and stroke volume increases to 110 cm³. Calculate: (a) Resting cardiac output in dm³/min. (b) Cardiac output during the race in dm³/min.",
        "stepByStepSolution": [
          "Step 1: Formula: Cardiac Output = Heart Rate × Stroke Volume. [M1]",
          "Step 2: Resting = 70 beats/min × 75 cm³ = 5,250 cm³/min = 5.25 dm³/min. [A1]",
          "Step 3: Exercise = 160 beats/min × 110 cm³ = 17,600 cm³/min = 17.60 dm³/min. [A1]"
        ],
        "keyTakeaway": "Cardiac output increases dramatically during exertion to meet muscle oxygen and glucose demands."
      },
      {
        "id": "ex-shs2-sci-circ-2",
        "title": "Blood Clotting Mechanism",
        "problem": "Outline the sequence of biochemical reactions that lead to blood clot formation when a skin capillary is cut.",
        "stepByStepSolution": [
          "Step 1: Damaged tissues and ruptured platelets release the enzyme thromboplastin (thrombokinase). [B1]",
          "Step 2: Thromboplastin, in the presence of calcium ions (Ca²⁺) and vitamin K, converts inactive prothrombin into active thrombin. [M1, A1]",
          "Step 3: Thrombin acts enzymatically on soluble fibrinogen plasma protein, converting it into insoluble threads of fibrin. [M1, A1]",
          "Step 4: Fibrin forms an entangled mesh that traps red blood cells and platelets, forming a solid clot that seals the wound. [A1]"
        ],
        "keyTakeaway": "Soluble fibrinogen is converted into insoluble fibrin mesh by the action of thrombin and calcium."
      }
    ]
  },
  {
    "id": "shs2-sci-t1-respiratory-system-respiration",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 3,
    "title": "Respiratory System, Gas Exchange & Cellular Respiration",
    "description": "Structure of the respiratory tract, mechanics of breathing (ventilation), gas exchange at the alveoli, aerobic vs anaerobic respiration, and effects of smoking.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=mOKmjYwfDGU",
    "youtubeId": "mOKmjYwfDGU",
    "keyNotes": "• Breathing Mechanics (Inhalation vs Exhalation):\n  - Inhalation: Diaphragm contracts and flattens; external intercostal muscles contract pulling ribs upward and outward; thoracic volume increases; thoracic pressure drops below atmospheric pressure; air rushes into lungs.\n  - Exhalation: Diaphragm relaxes into dome shape; external intercostals relax and ribs move down and in; thoracic volume decreases; pressure rises above atmospheric; air forced out.\n• Alveolar Adaptations for Gas Exchange:\n  - Enormous surface area; single-cell thin squamous epithelium; dense capillary network; moist internal lining.\n• Cellular Respiration:\n  - Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 36-38 ATP (complete breakdown in mitochondria).\n  - Anaerobic in animals: Glucose → 2 Lactic acid + 2 ATP (oxygen debt incurred).\n  - Anaerobic in yeast (fermentation): Glucose → 2 Ethanol + 2 CO₂ + 2 ATP.",
    "detailedNotes": {
      "introduction": "Respiration releases the chemical energy locked in food molecules through aerobic or anaerobic catabolic pathways.",
      "realWorldContext": "In traditional Ghanaian bread baking and palm wine production, yeast cells ferment sugars anaerobically, generating carbon dioxide that makes dough rise and ethanol in fermented beverages.",
      "objectives": [
        "Describe the mechanism of inspiration and expiration in humans",
        "Explain how the alveoli are structurally adapted for rapid gaseous exchange",
        "Compare aerobic and anaerobic respiration in terms of products and energy yield",
        "Explain the concept of oxygen debt during intense physical exertion"
      ],
      "sections": [
        {
          "title": "Oxygen Debt & Muscle Fatigue",
          "content": "During sprint activities, muscle cells consume oxygen faster than the circulatory system can deliver it, forcing cells into anaerobic glycolysis.",
          "bulletPoints": [
            "Lactic acid accumulates in muscle fibers, lowering intracellular pH and inhibiting contractile enzymes (muscle cramps).",
            "Oxygen Debt: Post-exercise deep, rapid breathing supplies extra oxygen to the liver to oxidize lactate back to pyruvate and glycogen."
          ],
          "keyTakeaway": "Anaerobic respiration provides rapid bursts of ATP but produces an oxygen debt that must be repaid during recovery.",
          "realWorldExample": "Athletes at Inter-Schools athletics competitions breathe heavily for minutes after sprinting 100 meters to repay oxygen debt."
        }
      ],
      "wassceExamTips": [
        "When writing the respiration equation, verify that coefficients are balanced: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.",
        "Distinguish between breathing/ventilation (physical pumping of air) and cellular respiration (biochemical ATP generation in cells).",
        "Remember that anaerobic respiration in yeast produces CO₂ and ethanol, whereas in human muscle it produces lactic acid only."
      ],
      "commonMistakes": [
        "Saying we breathe in pure oxygen and breathe out pure carbon dioxide (inhaled air is 21% O₂; exhaled air is 16% O₂ and 4% CO₂).",
        "Confusing respiration with photosynthesis.",
        "Believing that oxygen debt is paid off during the exercise itself."
      ],
      "summaryChecklist": [
        "Can I describe the positions of the diaphragm and ribcage during active exhalation?",
        "Can I state 4 distinct differences between aerobic and anaerobic respiration?",
        "Can I describe the chemical test for carbon dioxide using limewater?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-resp-1",
        "title": "Comparing Inhaled vs Exhaled Air",
        "problem": "Explain why exhaled air has a lower percentage of oxygen (16% vs 21%) and a higher percentage of carbon dioxide (4% vs 0.04%) than atmospheric air.",
        "stepByStepSolution": [
          "Step 1: Atmospheric oxygen diffuses from alveoli into pulmonary blood capillaries to be consumed in cellular respiration across all body tissues, lowering exhaled O₂ to ~16%. [M1, A1]",
          "Step 2: Cellular respiration in body cells continuously produces carbon dioxide as a waste product. [B1]",
          "Step 3: CO₂ is transported to the lungs, diffuses into the alveoli, and is expelled, elevating expired CO₂ to ~4%. [A1]"
        ],
        "keyTakeaway": "The gas composition differences directly reflect metabolic oxygen consumption and carbon dioxide excretion."
      },
      {
        "id": "ex-shs2-sci-resp-2",
        "title": "Aerobic vs Anaerobic Energy Yield",
        "problem": "Explain why aerobic respiration yields significantly more energy (36-38 ATP) per glucose molecule than anaerobic respiration (2 ATP).",
        "stepByStepSolution": [
          "Step 1: Aerobic respiration completely oxidizes glucose into inorganic CO₂ and H₂O through glycolysis, Krebs cycle, and oxidative phosphorylation. [M1, A1]",
          "Step 2: Anaerobic respiration only partially breaks down glucose into lactic acid (or ethanol), leaving most chemical potential energy locked in unoxidized organic bonds. [M1, A1]"
        ],
        "keyTakeaway": "Complete oxidation of glucose in aerobic respiration yields up to 19 times more ATP than anaerobic glycolysis."
      }
    ]
  },
  {
    "id": "shs2-sci-t1-thermal-physics-expansion",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 4,
    "title": "Thermal Physics I: Heat vs Temperature & Thermal Expansion",
    "description": "Concepts of heat and temperature, linear expansivity (α), area and volume expansivity, bimetallic strips and thermostat switches, anomalous expansion of water, and real-world expansion engineering.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=f1eAO34Pr4Q",
    "youtubeId": "f1eAO34Pr4Q",
    "keyNotes": "• Heat vs Temperature:\n  - Heat: Total thermal energy in transit (Joules, J).\n  - Temperature: Measure of the average kinetic energy of constituent particles (Kelvin, K or °C).\n• Linear Expansivity (α):\n  - Increase in length per unit original length per unit temperature rise: α = ΔL / (L₁ × Δθ) (K⁻¹ or °C⁻¹).\n  - New length L₂ = L₁ (1 + αΔθ). Area expansivity β ≈ 2α; Volume expansivity γ ≈ 3α.\n• Bimetallic Strip:\n  - Two dissimilar metal strips (e.g. brass and iron) welded together.\n  - Since brass expands more than iron (α_brass > α_iron), the strip curves with brass on the convex outer side when heated.\n  - Used in thermostats (electric irons, fire alarms, refrigerators).\n• Anomalous Expansion of Water:\n  - Between 0°C and 4°C, water contracts when heated and expands when cooled.\n  - Density of water is maximum at 4°C (1,000 kg/m³).\n  - Preserves aquatic life: ice floats as an insulating surface layer while water below remains liquid at 4°C.",
    "detailedNotes": {
      "introduction": "Thermal expansion affects all physical structures exposed to temperature variations. Understanding linear and volume expansivity ensures engineers can design durable railway tracks, bridges, pipelines, and automatic thermostat switches.",
      "realWorldContext": "On the Tema-Mpakadan railway line, engineers install expansion joints between steel rail segments to accommodate midday expansion in Ghana’s tropical climate, preventing catastrophic track buckling.",
      "objectives": [
        "Differentiate between heat and temperature with SI units",
        "Define linear expansivity and calculate dimensional changes in heated solids",
        "Explain the operation of a bimetallic strip in thermostats and fire alarms",
        "Describe the anomalous expansion of water and its biological significance"
      ],
      "sections": [
        {
          "title": "Thermostat Operation Using Bimetallic Strips",
          "content": "A thermostat maintains a set temperature by automatically breaking and making an electrical contact.",
          "bulletPoints": [
            "As temperature rises above the set limit, differential expansion bends the strip away from the electrical contact point, breaking the circuit and cutting power to the heating element.",
            "As the appliance cools, the strip straightens, re-establishing contact and restoring power."
          ],
          "keyTakeaway": "The metal with higher expansivity forms the outer convex curve when heated and the inner concave curve when cooled.",
          "realWorldExample": "In an electric clothing iron, turning the control knob adjusts the distance between the bimetallic strip and the contact screw, selecting temperature."
        }
      ],
      "wassceExamTips": [
        "Always state the unit of linear expansivity: K⁻¹ or °C⁻¹.",
        "In linear expansion calculations, convert all lengths to the same unit (meters or centimeters) before substituting.",
        "Remember that water has minimum volume and maximum density at 4°C."
      ],
      "commonMistakes": [
        "Assuming all metals expand at the same rate.",
        "Forgetting that bimetallic strips bend toward the metal with the lower expansivity upon heating.",
        "Confusing linear expansivity with heat capacity."
      ],
      "summaryChecklist": [
        "Can I solve for final length using L₂ = L₁(1 + αΔθ)?",
        "Can I draw a bimetallic strip in both hot and cold states?",
        "Can I explain why a glass bottle filled completely with water shatters when frozen in a freezer?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-exp-1",
        "title": "Linear Expansion of a Steel Bridge",
        "problem": "A steel bridge span measures 120.0 meters in length at an early morning temperature of 20°C. In the afternoon sun, its temperature reaches 45°C. If the linear expansivity of steel is 1.2 × 10⁻⁵ K⁻¹, calculate: (a) The increase in length of the bridge. (b) The new total length.",
        "stepByStepSolution": [
          "Step 1: Identify given variables: L₁ = 120.0 m, Δθ = 45 - 20 = 25 K, α = 1.2 × 10⁻⁵ K⁻¹. [M1]",
          "Step 2: Calculate expansion: ΔL = L₁ × α × Δθ = 120.0 × (1.2 × 10⁻⁵) × 25. [M1]",
          "Step 3: ΔL = 0.036 meters (3.6 cm). [A1]",
          "Step 4: New total length L₂ = L₁ + ΔL = 120.0 + 0.036 = 120.036 meters. [A1]"
        ],
        "keyTakeaway": "Engineers must leave expansion gaps or install roller supports to accommodate linear expansion."
      },
      {
        "id": "ex-shs2-sci-exp-2",
        "title": "Bimetallic Strip Fire Alarm",
        "problem": "Explain with the aid of a circuit description how a bimetallic strip made of copper (α = 1.7 × 10⁻⁵ K⁻¹) and invar (α = 0.1 × 10⁻⁵ K⁻¹) operates a fire alarm bell.",
        "stepByStepSolution": [
          "Step 1: The bimetallic strip is arranged in series with an electric bell and battery. [B1]",
          "Step 2: Under normal temperatures, the circuit is open at an adjustable contact screw. [B1]",
          "Step 3: When a fire breaks out, the elevated room temperature causes the strip to expand. [M1]",
          "Step 4: Since copper expands much more than invar, the strip bends toward the invar side, touching the contact screw. [A1]",
          "Step 5: The electrical circuit is completed, current flows, and the alarm bell rings continuously. [A1]"
        ],
        "keyTakeaway": "Differential expansion converts thermal energy directly into mechanical bending to complete an electric circuit."
      }
    ]
  },
  {
    "id": "shs2-sci-t1-thermal-physics-heat-transfer",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 5,
    "title": "Thermal Physics II: Conduction, Convection, Radiation & Latent Heat",
    "description": "Mechanisms of heat transfer, conductors and insulators, convection in fluids and coastal breezes, radiation laws, vacuum flask design, specific heat capacity (Q = mcΔθ), and latent heat.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=9joLYfCl44g",
    "youtubeId": "9joLYfCl44g",
    "keyNotes": "• Heat Transfer Modes:\n  - Conduction: Heat transfer through solids by atomic lattice vibrations and free delocalized electron diffusion (metals are superior conductors).\n  - Convection: Heat transfer in fluids (liquids and gases) via circulating convection currents driven by thermal buoyancy.\n  - Radiation: Heat transfer via electromagnetic infrared waves requiring no material medium (travels through a vacuum at the speed of light).\n  - Good/Bad Emitters & Absorbers: Dull matte black surfaces absorb and emit radiation best; shiny polished silver surfaces reflect radiation and emit poorly.\n• Specific Heat Capacity (c):\n  - Heat required to raise temperature of 1 kg of a substance by 1 K: Q = m × c × Δθ (J/kg·K).\n  - High specific heat capacity of water (4,200 J/kg·K) makes it an excellent industrial and automobile coolant.\n• Latent Heat (L):\n  - Heat absorbed or released during a phase change at constant temperature: Q = m × L.\n  - Latent heat of fusion: Solid ↔ Liquid; Latent heat of vaporization: Liquid ↔ Gas.",
    "detailedNotes": {
      "introduction": "Thermal energy transfers spontaneously from regions of higher temperature to lower temperature. Mastering conduction, convection, radiation, and calorimetry enables efficient thermal insulation and energy management.",
      "realWorldContext": "In traditional northern Ghanaian round huts, thick mud walls and thatched grass roofs provide superb thermal insulation, keeping interiors cool during scorching daytime heat and warm during chilly Harmattan nights.",
      "objectives": [
        "Compare conduction, convection, and radiation with everyday examples",
        "Explain how the construction of a vacuum flask prevents all three modes of heat transfer",
        "Calculate heat quantities using Q = mcΔθ and apply the method of mixtures",
        "Explain latent heat of fusion and vaporization during phase changes"
      ],
      "sections": [
        {
          "title": "The Vacuum Flask (Thermos) Engineering",
          "content": "A vacuum flask minimizes heat exchange with the surrounding environment.",
          "bulletPoints": [
            "Conduction & Convection: Eliminated by the evacuated vacuum space between the double glass walls.",
            "Radiation: Minimized by silvered surfaces on the interior glass walls, reflecting radiant infrared heat back into the flask.",
            "Convection & Evaporation from top: Prevented by a tight-fitting insulating plastic/cork stopper."
          ],
          "keyTakeaway": "The vacuum space prevents conduction and convection; silvered mirror surfaces prevent radiation loss.",
          "realWorldExample": "Tea vendors (baristas) in Ghanaian markets use vacuum flasks to keep cocoa, coffee, and porridge steaming hot throughout the morning."
        }
      ],
      "wassceExamTips": [
        "State the formula Q = mcΔθ clearly before substituting numbers to earn method marks.",
        "Remember that temperature does not change during a phase change; use Q = mL, not Q = mcΔθ.",
        "In heat mixture problems, assume Heat Lost by hot body = Heat Gained by cold body + calorimeter."
      ],
      "commonMistakes": [
        "Forgetting to convert mass in grams to kilograms when specific heat capacity is given in J/(kg·K).",
        "Stating that vacuum prevents heat radiation (radiation travels freely through a vacuum).",
        "Thinking dull black surfaces are poor emitters (they are both the best absorbers and best emitters)."
      ],
      "summaryChecklist": [
        "Can I calculate the final equilibrium temperature when hot metal is dropped into cold water?",
        "Can I explain how land and sea breezes form using specific heat capacities?",
        "Can I explain why steam at 100°C causes more severe burns than water at 100°C?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-ht-1",
        "title": "Calorimetry Method of Mixtures",
        "problem": "A copper block of mass 0.5 kg at 100°C is placed in 0.2 kg of water at 20°C contained in a well-lagged copper calorimeter of mass 0.1 kg. Calculate the final steady temperature of the mixture. (Specific heat capacity of copper = 400 J/kg·K; water = 4,200 J/kg·K).",
        "stepByStepSolution": [
          "Step 1: Let final steady temperature = T. Temperature drop of copper block = (100 - T); Temperature rise of water and calorimeter = (T - 20). [M1]",
          "Step 2: Heat lost by hot copper = m_c × c_c × (100 - T) = 0.5 × 400 × (100 - T) = 200(100 - T) = 20,000 - 200T. [M1]",
          "Step 3: Heat gained by water = 0.2 × 4,200 × (T - 20) = 840(T - 20) = 840T - 16,800.",
          "Step 4: Heat gained by calorimeter = 0.1 × 400 × (T - 20) = 40(T - 20) = 40T - 800.",
          "Step 5: Heat lost = Heat gained: 20,000 - 200T = (840T - 16,800) + (40T - 800). [M1]",
          "Step 6: 20,000 - 200T = 880T - 17,600 → 1,080T = 37,600 → T = 37,600 / 1,080 ≈ 34.8°C. [A1]"
        ],
        "keyTakeaway": "In calorimetry, equate heat lost by hot bodies to total heat gained by cold water and the containing vessel."
      },
      {
        "id": "ex-shs2-sci-ht-2",
        "title": "Latent Heat of Fusion Calculation",
        "problem": "Calculate the total heat energy required to convert 0.2 kg of ice at 0°C into water at 50°C. (Specific latent heat of fusion of ice = 3.36 × 10⁵ J/kg; specific heat capacity of water = 4,200 J/kg·K).",
        "stepByStepSolution": [
          "Step 1: Heat to melt ice at 0°C: Q₁ = m × L_f = 0.2 kg × (3.36 × 10⁵ J/kg) = 67,200 J. [M1, A1]",
          "Step 2: Heat to warm water from 0°C to 50°C: Q₂ = m × c × Δθ = 0.2 × 4,200 × (50 - 0) = 42,000 J. [M1, A1]",
          "Step 3: Total heat Q_total = Q₁ + Q₂ = 67,200 + 42,000 = 109,200 J (109.2 kJ). [A1]"
        ],
        "keyTakeaway": "Always calculate phase change energy and subsequent temperature rise energy separately before summing."
      }
    ]
  },
  {
    "id": "shs2-sci-t2-metals-reactivity-corrosion",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 6,
    "title": "Metals, Reactivity Series, Extraction & Rust Prevention",
    "description": "Reactivity series of metals, displacement reactions, iron extraction in the blast furnace, aluminum extraction by electrolysis, conditions for rusting, and corrosion prevention methods (galvanizing, sacrificial anodes).",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=5R0A8l2n8Qk",
    "youtubeId": "5R0A8l2n8Qk",
    "keyNotes": "• Reactivity Series Order:\n  - K > Na > Ca > Mg > Al > (C) > Zn > Fe > Sn > Pb > (H) > Cu > Ag > Au.\n  - Highly reactive metals (K to Al): Extracted by electrolysis of molten salts.\n  - Moderately reactive metals (Zn to Pb): Extracted by reduction with carbon/CO in a furnace.\n  - Unreactive metals (Cu, Ag, Au): Found native or extracted by thermal decomposition.\n• Blast Furnace Extraction of Iron:\n  - Raw Materials: Hematite (Fe₂O₃), Coke (C), Limestone (CaCO₃), Hot air blast.\n  - Reactions: C + O₂ → CO₂; CO₂ + C → 2CO; Fe₂O₃ + 3CO → 2Fe(l) + 3CO₂.\n  - Slag formation: CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (molten slag floats on iron).\n• Rusting & Prevention:\n  - Conditions: Both oxygen (air) and water (moisture) are required.\n  - Sacrificial Protection: Attaching zinc or magnesium blocks to iron structures; the more reactive metal oxidizes preferentially, protecting the iron.\n  - Galvanization: Coating iron with zinc (provides barrier + sacrificial protection even if scratched).",
    "detailedNotes": {
      "introduction": "Metals drive industrial infrastructure and manufacturing. The reactivity series dictates how metals are extracted from mineral ores and how they corrode in tropical environments.",
      "realWorldContext": "In coastal Ghanaian communities like Tema, salt-laden sea breezes accelerate the rusting of corrugated iron roofing sheets and automobile chassis, making galvanized sheets and anti-corrosive epoxy paints essential investments.",
      "objectives": [
        "Arrange common metals in order of chemical reactivity using experimental observations",
        "Write balanced equations for metal extraction reactions in the blast furnace",
        "Demonstrate that oxygen and moisture are both essential for iron rusting",
        "Evaluate methods of corrosion prevention: painting, greasing, galvanizing, and sacrificial protection"
      ],
      "sections": [
        {
          "title": "Chemistry of the Blast Furnace for Iron",
          "content": "The blast furnace is a continuous chemical reactor reducing iron ore to molten pig iron.",
          "bulletPoints": [
            "Zone of Combustion: Coke burns in hot air: C + O₂ → CO₂ (strongly exothermic, ~1900°C).",
            "Zone of Reduction: CO₂ reacts with coke to form reducing agent CO: CO₂ + C → 2CO. Carbon monoxide reduces iron(III) oxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
            "Zone of Slag Formation: Limestone removes sandy silica impurities: CaO + SiO₂ → CaSiO₃ (slag)."
          ],
          "keyTakeaway": "Carbon monoxide (CO) is the primary reducing agent that reduces iron ore in the blast furnace.",
          "realWorldExample": "Scrap iron collectors across Accra and Kumasi gather discarded vehicle bodies for recycling at Tema steel rolling mills."
        }
      ],
      "wassceExamTips": [
        "When asked for the conditions for rusting, you MUST mention BOTH oxygen and water/moisture.",
        "State the formula of rust: Hydrated iron(III) oxide, Fe₂O₃·xH₂O.",
        "Explain why aluminum does not corrode readily despite high reactivity: it forms an impervious protective layer of aluminum oxide (Al₂O₃)."
      ],
      "commonMistakes": [
        "Thinking that galvanizing uses tin (galvanizing specifically uses zinc; tin-plating uses tin).",
        "Stating that rusting and corrosion are identical (corrosion affects all metals; rusting applies specifically to iron and steel).",
        "Listing coke as the primary reducing agent in the upper blast furnace (CO is the actual gas reducing iron ore)."
      ],
      "summaryChecklist": [
        "Can I predict whether a metal will displace hydrogen from dilute acids?",
        "Can I write chemical equations for the reduction of hematite in the blast furnace?",
        "Can I describe an experiment proving that boiled water with an oil seal prevents rusting?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-met-1",
        "title": "Metal Displacement Reaction",
        "problem": "A strip of magnesium ribbon is placed in a blue copper(II) sulfate (CuSO₄) solution. (a) Describe the observable changes. (b) Write the ionic equation for the reaction. (c) Explain why this reaction occurs.",
        "stepByStepSolution": [
          "Step 1: Observable changes: The blue solution gradually fades to colorless; reddish-brown deposits of copper metal form on the magnesium ribbon; heat is released (exothermic). [A1]",
          "Step 2: Ionic equation: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s). [A1]",
          "Step 3: Explanation: Magnesium is higher in the reactivity series than copper; it has a greater tendency to lose electrons (oxidize) and displaces Cu²⁺ ions from solution. [M1, A1]"
        ],
        "keyTakeaway": "A more electropositive metal displaces ions of a less electropositive metal from aqueous solution."
      },
      {
        "id": "ex-shs2-sci-met-2",
        "title": "Sacrificial Protection Calculation",
        "problem": "Explain how zinc blocks attached to the steel hull of an oil tanker operating in the Gulf of Guinea prevent rusting, even if the steel hull gets scratched.",
        "stepByStepSolution": [
          "Step 1: Zinc is higher in the reactivity series than iron (Zn > Fe). [B1]",
          "Step 2: Zinc atoms lose electrons more readily than iron: Zn → Zn²⁺ + 2e⁻. [M1]",
          "Step 3: The released electrons flow into the steel hull, preventing iron atoms from losing electrons and oxidizing to Fe²⁺/Fe³⁺. [M1, A1]",
          "Step 4: Zinc corrodes sacrificially in place of iron and can be replaced periodically during dry-dock maintenance. [A1]"
        ],
        "keyTakeaway": "In sacrificial protection, the more reactive anode corrodes preferentially to protect cathode structures."
      }
    ]
  },
  {
    "id": "shs2-sci-t2-current-electricity-ohms-law",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 7,
    "title": "Current Electricity, Ohm’s Law & Electrical Circuits",
    "description": "Electric current, potential difference, electromotive force (emf), internal resistance, Ohm’s law, series and parallel resistor networks, and electrical power formulas (P = VI, I²R, V²/R).",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=F1p3fgbDnkY",
    "youtubeId": "F1p3fgbDnkY",
    "keyNotes": "• Fundamental Quantities:\n  - Electric Current (I): Rate of flow of electric charge: I = Q / t (Amperes, A = C/s).\n  - Potential Difference (V): Work done per unit charge in moving charge between two points: V = W / Q (Volts, V = J/C).\n• Ohm’s Law:\n  - Current flowing through a metallic conductor is directly proportional to potential difference across it, provided temperature and other physical conditions remain constant: V = I × R.\n• Resistor Combinations:\n  - Series: R_total = R₁ + R₂ + R₃ (same current through all resistors; voltage divides).\n  - Parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ (same voltage across all branches; current divides).\n• Electrical Power:\n  - P = V × I = I²R = V² / R (Watts, W).",
    "detailedNotes": {
      "introduction": "Current electricity powers our digital and industrial world. Mastering circuit analysis, Ohm’s law, and resistor network calculations provides the technical foundation for electrical engineering.",
      "realWorldContext": "In mobile phone charging centers in Kejetia Market, technicians wire charging ports in parallel circuits so that plugging in or removing one phone does not alter the 5V charging potential supplied to other connected devices.",
      "objectives": [
        "State Ohm’s law and specify the experimental conditions under which it holds true",
        "Calculate equivalent resistance for complex series-parallel resistor networks",
        "Measure current and voltage accurately using ammeters and voltmeters in circuits",
        "Apply electric power formulas to evaluate energy dissipation in resistive circuits"
      ],
      "sections": [
        {
          "title": "Resistors in Series vs Parallel Circuits",
          "content": "The configuration of circuit components determines how current and voltage are distributed.",
          "bulletPoints": [
            "Series Circuit: Current is identical everywhere. If one component fails, the entire circuit is broken. Total resistance is greater than the largest individual resistor.",
            "Parallel Circuit: Voltage across each branch is identical. If one branch is disconnected, other branches continue operating. Total equivalent resistance is smaller than the smallest branch resistor."
          ],
          "keyTakeaway": "Parallel connections decrease total resistance and allow independent device control.",
          "realWorldExample": "Decorative Christmas/festival string lights wired in parallel remain illuminated even if a single bulb blows."
        }
      ],
      "wassceExamTips": [
        "Remember that ammeters must be connected in SERIES (low resistance) and voltmeters in PARALLEL (high resistance).",
        "When stating Ohm’s law, never omit the condition: \"provided temperature and other physical conditions remain constant\".",
        "For two parallel resistors, use the shortcut: R_total = (R₁ × R₂) / (R₁ + R₂)."
      ],
      "commonMistakes": [
        "Connecting a voltmeter in series or an ammeter in parallel (which can blow the ammeter fuse).",
        "Forgetting to invert the answer after computing 1/R_total in parallel resistor calculations.",
        "Assuming Ohm’s law applies to filament lamps and diodes (they are non-ohmic conductors)."
      ],
      "summaryChecklist": [
        "Can I calculate the combined resistance of a 6 Ω resistor in series with two 4 Ω parallel resistors?",
        "Can I calculate the power dissipated across a resistor using P = I²R?",
        "Can I explain the V-I characteristic curve of an ohmic metallic conductor versus a semiconductor diode?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-ohm-1",
        "title": "Series-Parallel Resistor Network",
        "problem": "A circuit consists of a 4 Ω resistor connected in series with a parallel combination of two resistors of 6 Ω and 3 Ω. The combination is connected across a 12 V battery with negligible internal resistance. Calculate: (a) Total equivalent resistance. (b) Total current supplied by the battery. (c) Potential difference across the 4 Ω resistor.",
        "stepByStepSolution": [
          "Step 1: Calculate parallel combination R_p: 1/R_p = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → R_p = 2 Ω. [M1, A1]",
          "Step 2: Calculate total resistance R_total = R_series + R_p = 4 Ω + 2 Ω = 6 Ω. [A1]",
          "Step 3: Total current from battery: I = V / R_total = 12 V / 6 Ω = 2.0 A. [M1, A1]",
          "Step 4: Potential difference across 4 Ω resistor: V₄ = I × R = 2.0 A × 4 Ω = 8.0 V. [A1]"
        ],
        "keyTakeaway": "Simplify parallel branches into single equivalent resistances before adding series resistors."
      },
      {
        "id": "ex-shs2-sci-ohm-2",
        "title": "Power Dissipation Calculation",
        "problem": "An electric water immersion heater has a resistance of 20 Ω and operates on a 240 V mains supply. Calculate: (a) The current drawn. (b) The power rating of the heater. (c) The heat energy produced in 10 minutes.",
        "stepByStepSolution": [
          "Step 1: Current drawn: I = V / R = 240 V / 20 Ω = 12 A. [A1]",
          "Step 2: Power rating: P = V × I = 240 V × 12 A = 2,880 W (2.88 kW). [M1, A1]",
          "Step 3: Time in seconds: t = 10 minutes = 10 × 60 = 600 seconds. [B1]",
          "Step 4: Heat energy E = P × t = 2,880 W × 600 s = 1,728,000 Joules (1.728 MJ). [A1]"
        ],
        "keyTakeaway": "Always convert time to seconds before calculating electrical energy in Joules."
      }
    ]
  },
  {
    "id": "shs2-sci-t2-household-wiring-electrical-safety",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 8,
    "title": "Household Wiring, Electrical Safety & ECG Power Calculations",
    "description": "Domestic three-wire AC electrical system (Live, Neutral, Earth), 3-pin plug wiring, safety devices (fuses, circuit breakers, earthing, RCCBs), electrical hazards, and electricity billing in kilowatt-hours (kWh).",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=FqfNf3pP5z8",
    "youtubeId": "FqfNf3pP5z8",
    "keyNotes": "• Domestic Electrical Wiring System:\n  - Live Wire (Brown): Carries alternating high potential (~230-240 V) from mains to appliance.\n  - Neutral Wire (Blue): Completes electrical circuit back to substation; maintained near 0 V.\n  - Earth Wire (Green/Yellow striped): Safety line connected to metal appliance casing and buried copper earth rod.\n• Safety Devices:\n  - Fuses & Switches: MUST ALWAYS BE INSTALLED IN THE LIVE WIRE.\n  - Fuse: Thin wire of low melting point that melts and breaks circuit if current exceeds rating.\n  - Miniature Circuit Breaker (MCB): Electromechanical switch that trips automatically on overcurrent.\n  - Residual Current Device (RCD / RCCB): Disconnects supply in <30 ms upon detecting ground leakage (>30 mA).\n• Electricity Billing:\n  - 1 ECG Unit = 1 kilowatt-hour (kWh).\n  - Energy (kWh) = Power (kW) × Time (hours). Cost = Energy (kWh) × Tariff per unit.",
    "detailedNotes": {
      "introduction": "Safe domestic electrification requires rigorous adherence to wiring standards, protective fusing, and earthing to prevent electric shocks and electrical fire outbreaks.",
      "realWorldContext": "In Ghana, the Energy Commission enforces the National Electrical Wiring Regulations. Certified electrical contractors wire homes using approved flame-retardant cables and install earth rods to safeguard lives against voltage surges.",
      "objectives": [
        "Identify Live, Neutral, and Earth wires by international color insulation codes",
        "Explain why switches and fuses must always be placed in the Live wire",
        "Explain the protective mechanism of earthing and residual current devices",
        "Calculate electricity consumption in kilowatt-hours (kWh) and determine monthly ECG bills"
      ],
      "sections": [
        {
          "title": "The Protective Mechanism of the Earth Wire",
          "content": "The earth wire protects people from fatal electric shocks caused by faulty appliance insulation.",
          "bulletPoints": [
            "If a fraying Live wire accidentally contacts the metal chassis of an electric cooker, the chassis becomes energized at 240 V.",
            "The low-resistance Earth wire connected to the metal chassis creates a sudden path of very low impedance to ground.",
            "A massive surge of current flows to earth, immediately melting the fuse or tripping the circuit breaker, isolating the live circuit safely."
          ],
          "keyTakeaway": "Earthing provides a low-resistance path that channels fault current to ground, rapidly blowing the fuse.",
          "realWorldExample": "Without earthing, touching an energized refrigerator chassis causes current to flow through the human body to ground, causing electrocution."
        }
      ],
      "wassceExamTips": [
        "Memorize wire colors: Brown = Live, Blue = Neutral, Green/Yellow = Earth.",
        "When explaining why fuses are placed in the Live wire: \"So that when the fuse melts, the appliance is disconnected from high voltage and made completely safe\".",
        "In kWh calculations, always divide power in Watts by 1,000 to get Kilowatts before multiplying by hours."
      ],
      "commonMistakes": [
        "Placing a fuse in the neutral wire (if it blows, the appliance remains live at 240 V, posing electrocution risk).",
        "Using an oversized fuse rating (e.g. 30 A fuse on an appliance drawing 3 A; the fuse will fail to blow during faults).",
        "Multiplying power in Watts directly by time in minutes instead of converting to kW and hours."
      ],
      "summaryChecklist": [
        "Can I wire a 3-pin plug correctly and describe each wire’s safety role?",
        "Can I choose an appropriate fuse rating (3A, 5A, 13A) for an appliance?",
        "Can I calculate the ECG electricity bill for a household over 30 days?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-wire-1",
        "title": "Choosing Fuse Rating",
        "problem": "An electric kettle is rated at 2,000 W and operates on a 240 V AC supply. The available fuse ratings are 3 A, 5 A, 10 A, and 13 A. (a) Calculate the normal operating current. (b) Select the most suitable fuse rating and justify your choice.",
        "stepByStepSolution": [
          "Step 1: Calculate normal current: I = P / V = 2,000 W / 240 V = 8.33 A. [M1, A1]",
          "Step 2: 3 A and 5 A fuses would blow immediately during normal kettle operation. [B1]",
          "Step 3: A 13 A fuse is too far above 8.33 A and would allow excessive dangerous currents before blowing. [B1]",
          "Step 4: The 10 A fuse is the most suitable because it is rated just slightly above normal working current (8.33 A). [A1]"
        ],
        "keyTakeaway": "Select a fuse rating rated just above normal operating current."
      },
      {
        "id": "ex-shs2-sci-wire-2",
        "title": "ECG Electricity Bill Calculation",
        "problem": "A household in Takoradi operates the following appliances daily: Four 60 W bulbs for 5 hours each; one 1.5 kW electric water heater for 2 hours; and a 200 W refrigerator running for 10 hours. If ECG charges GH₵ 1.50 per kWh, calculate the total cost for 30 days.",
        "stepByStepSolution": [
          "Step 1: Bulbs energy = 4 × 0.06 kW × 5 h = 1.20 kWh/day. [M1]",
          "Step 2: Water heater energy = 1.5 kW × 2 h = 3.00 kWh/day.",
          "Step 3: Refrigerator energy = 0.2 kW × 10 h = 2.00 kWh/day.",
          "Step 4: Total daily energy = 1.20 + 3.00 + 2.00 = 6.20 kWh/day. [A1]",
          "Step 5: Total monthly energy (30 days) = 6.20 × 30 = 186.0 kWh. [M1]",
          "Step 6: Total cost = 186.0 kWh × GH₵ 1.50 = GH₵ 279.00. [A1]"
        ],
        "keyTakeaway": "Sum the daily energy consumptions in kWh and multiply by total days and unit tariff rate."
      }
    ]
  },
  {
    "id": "shs2-sci-t2-magnetism-electromagnetism",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 9,
    "title": "Magnetism, Magnetic Fields, Electromagnets & Applications",
    "description": "Magnetic materials and poles, magnetic fields and flux lines, making and demagnetizing magnets, electromagnets, Fleming’s Left-Hand Rule, electric motors, and electromagnetic induction in transformers.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=yA3Zs_o7Yv4",
    "youtubeId": "yA3Zs_o7Yv4",
    "keyNotes": "• Magnetism Fundamentals:\n  - Like poles repel; unlike poles attract. Repulsion is the only sure test for magnetism.\n  - Soft iron: Magnetizes easily, loses magnetism quickly (temporary magnet, used in electromagnets and transformers).\n  - Steel: Hard to magnetize, retains magnetism strongly (permanent magnet).\n• Magnetic Field Lines:\n  - Directed from North pole to South pole externally; continuous closed loops. Density of lines indicates field strength.\n• Electromagnetism & Motor Effect:\n  - A current-carrying wire in a magnetic field experiences a mechanical force: F = B I L sin θ.\n  - Fleming’s Left-Hand Rule: Thumb = Force/Motion, Forefinger = Magnetic Field, Second finger = Current (FBI).\n• Electromagnetic Induction & Transformers:\n  - Faraday’s Law: Induced electromotive force (emf) is proportional to rate of change of magnetic flux linkage.\n  - Transformer equation: V_s / V_p = N_s / N_p = I_p / I_s (for 100% efficient ideal transformer).",
    "detailedNotes": {
      "introduction": "Electromagnetism links electricity with magnetic forces, enabling electric generators, transformers, loudspeakers, and industrial motors.",
      "realWorldContext": "Ghana’s national power grid (GRIDCo) uses giant step-up transformers at Akosombo to step generation voltage up to 161 kV for low-loss transmission to Kumasi, where step-down transformers reduce it for distribution.",
      "objectives": [
        "Differentiate between ferromagnetic materials, soft iron, and permanent steel magnets",
        "Map magnetic fields around bar magnets and current-carrying solenoids using compasses",
        "Apply Fleming’s Left-Hand Rule to determine the direction of force in an electric motor",
        "Solve transformer calculation problems using turn ratios and voltage relationships"
      ],
      "sections": [
        {
          "title": "Operation of Step-Up and Step-Down Transformers",
          "content": "Transformers adjust alternating voltages through mutual induction.",
          "bulletPoints": [
            "Consists of two insulated coils wound around a laminated soft iron core.",
            "Step-up transformer: Secondary turns exceed primary turns (N_s > N_p); increases voltage (V_s > V_p), reduces current.",
            "Step-down transformer: Primary turns exceed secondary turns (N_p > N_s); decreases voltage (V_s < V_p)."
          ],
          "keyTakeaway": "Transformers step voltage up or down via alternating magnetic flux; they do not work on steady direct current (DC).",
          "realWorldExample": "Smartphone chargers contain tiny step-down electronic transformers that convert 240 V mains AC to 5 V DC."
        }
      ],
      "wassceExamTips": [
        "Fleming’s Left-Hand Rule is for motors; Fleming’s Right-Hand Rule is for generators/induction.",
        "Always specify why transformers cannot work with direct current: DC produces a steady constant magnetic field, with zero change in flux (dΦ/dt = 0), inducing no secondary emf.",
        "State why transformer cores are laminated: to minimize energy loss from circulating eddy currents."
      ],
      "commonMistakes": [
        "Using Fleming’s Right-Hand Rule for the motor effect.",
        "Stating that attraction is proof of magnetism (an unmagnetized iron nail is also attracted to a magnet).",
        "Writing that transformers change electrical frequency (frequency remains constant at 50 Hz)."
      ],
      "summaryChecklist": [
        "Can I sketch magnetic field patterns between two attracting and two repelling poles?",
        "Can I list 3 methods of making an electromagnet stronger?",
        "Can I solve for secondary voltage and current given transformer turn ratios?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-mag-1",
        "title": "Transformer Calculations",
        "problem": "An ideal transformer has 2,400 turns on its primary coil and 120 turns on its secondary coil. The primary coil is connected to a 240 V AC supply. If a 12 V, 24 W lamp is connected across the secondary coil: (a) Calculate the secondary voltage. (b) Calculate the secondary current. (c) Calculate the primary current.",
        "stepByStepSolution": [
          "Step 1: Use transformer formula: V_s / V_p = N_s / N_p. [M1]",
          "Step 2: V_s = V_p × (N_s / N_p) = 240 V × (120 / 2,400) = 240 × 0.05 = 12.0 V. [A1]",
          "Step 3: Secondary current: I_s = Power / V_s = 24 W / 12 V = 2.0 A. [A1]",
          "Step 4: For an ideal transformer, Input Power = Output Power: V_p × I_p = V_s × I_s. [M1]",
          "Step 5: 240 × I_p = 24 W → I_p = 24 / 240 = 0.10 A. [A1]"
        ],
        "keyTakeaway": "Stepping down voltage by a factor of 20 steps up current by a factor of 20, conserving electrical power."
      },
      {
        "id": "ex-shs2-sci-mag-2",
        "title": "Fleming’s Left-Hand Rule",
        "problem": "A straight horizontal copper wire carrying an electric current from South to North is placed in a magnetic field directed vertically downwards into the ground. Determine the direction of the magnetic force exerted on the wire.",
        "stepByStepSolution": [
          "Step 1: Apply Fleming’s Left-Hand Rule (Thumb = Force, Forefinger = Field, Middle finger = Current). [B1]",
          "Step 2: Point Forefinger downwards (representing magnetic field into the ground). [M1]",
          "Step 3: Orient Middle finger pointing North (direction of conventional current). [M1]",
          "Step 4: The outstretched Thumb points towards the West. [A1]",
          "Step 5: The wire experiences a resultant magnetic force directed towards the West. [A1]"
        ],
        "keyTakeaway": "Ensure the three fingers are held mutually perpendicular when determining magnetic force directions."
      }
    ]
  },
  {
    "id": "shs2-sci-t2-light-reflection-mirrors",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 10,
    "title": "Light Reflection, Plane & Curved Mirrors",
    "description": "Rectilinear propagation of light, laws of reflection, image formation in plane mirrors, multiple reflections in inclined mirrors, concave and convex spherical mirrors, mirror formula, and optical applications.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=0h0X_v9nC7A",
    "youtubeId": "0h0X_v9nC7A",
    "keyNotes": "• Laws of Reflection:\n  1. The incident ray, reflected ray, and normal at point of incidence all lie in the same plane.\n  2. Angle of incidence equals angle of reflection: i = r.\n• Plane Mirror Properties:\n  - Virtual, erect, laterally inverted, same size as object, image distance behind mirror equals object distance in front.\n  - Number of images between inclined mirrors: n = (360° / θ) - 1.\n• Curved Spherical Mirrors:\n  - Focal length f = r / 2 (where r = radius of curvature).\n  - Mirror Formula: 1/f = 1/u + 1/v. Linear magnification m = v / u = h_i / h_o.\n  - Concave (Converging): Real inverted images (except when object is between F and Pole, which yields a magnified virtual erect image used for shaving/dentist mirrors).\n  - Convex (Diverging): Always produces virtual, erect, diminished images with wide field of view (ideal for vehicle wing mirrors).",
    "detailedNotes": {
      "introduction": "Reflection describes how light bounces off surfaces, forming the foundation of geometric optics, mirrors, solar concentrators, and periscopes.",
      "realWorldContext": "Commercial trotro drivers in Accra rely on convex rear-view mirrors to give an expanded field of view of flanking motorcycles and overtaking vehicles in heavy traffic.",
      "objectives": [
        "State and experimentally verify the two laws of reflection of light",
        "List 5 distinct characteristics of images formed in plane mirrors",
        "Calculate number of images formed by mirrors inclined at an angle",
        "Construct ray diagrams and solve mirror formula problems for concave and convex mirrors"
      ],
      "sections": [
        {
          "title": "Ray Tracing in Concave and Convex Mirrors",
          "content": "Three standard rays predict the position, size, and nature of images in spherical mirrors.",
          "bulletPoints": [
            "Ray 1: Parallel to principal axis reflects through the principal focus (F).",
            "Ray 2: Passing through the focus (F) reflects parallel to the principal axis.",
            "Ray 3: Passing through the center of curvature (C) reflects straight back along its own path."
          ],
          "keyTakeaway": "Real images can be captured on a screen; virtual images cannot be captured on a screen and appear behind mirrors.",
          "realWorldExample": "Solar cookers designed by rural development projects in Northern Ghana use concave parabolic mirrors to focus solar rays onto cooking pots."
        }
      ],
      "wassceExamTips": [
        "Always include directional arrowheads on all light rays; omitting arrowheads forfeits marks.",
        "Use the sign convention: Real is positive, Virtual is negative (f is positive for concave, negative for convex).",
        "When calculating images between inclined mirrors, remember to subtract 1: n = (360/θ) - 1."
      ],
      "commonMistakes": [
        "Omitting arrowheads on reflected or incident rays in ray diagrams.",
        "Confusing lateral inversion (left-to-right reversal) with vertical inversion (upside down).",
        "Applying convex mirror properties to concave mirrors."
      ],
      "summaryChecklist": [
        "Can I calculate the number of images formed when two plane mirrors are at 45°?",
        "Can I draw a ray diagram for an object between F and P in a concave mirror?",
        "Can I solve for image distance using 1/f = 1/u + 1/v?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-refl-1",
        "title": "Concave Mirror Formula Calculation",
        "problem": "An object 4.0 cm tall is placed 15.0 cm in front of a concave mirror of focal length 10.0 cm. Calculate: (a) The position of the image. (b) The height of the image. (c) The nature of the image.",
        "stepByStepSolution": [
          "Step 1: Identify given variables: u = +15.0 cm, f = +10.0 cm (concave mirror). [M1]",
          "Step 2: Use mirror formula: 1/f = 1/u + 1/v → 1/10 = 1/15 + 1/v. [M1]",
          "Step 3: 1/v = 1/10 - 1/15 = (3 - 2) / 30 = 1/30 → v = +30.0 cm. [A1]",
          "Step 4: Image distance v is positive, so image is REAL and located 30.0 cm in front of the mirror. [B1]",
          "Step 5: Magnification m = v / u = 30.0 / 15.0 = 2.0. [M1]",
          "Step 6: Image height h_i = m × h_o = 2.0 × 4.0 cm = 8.0 cm tall, inverted. [A1]"
        ],
        "keyTakeaway": "A positive image distance indicates a real image formed on the same side as the object in front of a mirror."
      },
      {
        "id": "ex-shs2-sci-refl-2",
        "title": "Multiple Images in Inclined Mirrors",
        "problem": "Two plane mirrors are placed at an angle of 90° to each other. An illuminated candle is placed between them. (a) Calculate the number of images formed. (b) Explain why a kaleidoscope produces beautiful symmetrical patterns.",
        "stepByStepSolution": [
          "Step 1: Formula: n = (360° / θ) - 1. [M1]",
          "Step 2: Substitute θ = 90°: n = (360 / 90) - 1 = 4 - 1 = 3 images. [A1]",
          "Step 3: A kaleidoscope uses two or three mirrors inclined at 60° to form multiple symmetrically reflected virtual images of colorful beads. [B1]"
        ],
        "keyTakeaway": "Decreasing the angle between inclined plane mirrors increases the number of virtual images formed."
      }
    ]
  },
  {
    "id": "shs2-sci-t2-light-refraction-lenses",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 11,
    "title": "Light Refraction, Lenses & Optical Instruments",
    "description": "Refraction principles, Snell’s Law, critical angle, total internal reflection, fiber optics, convex and concave lenses, lens formula, the human eye vs camera, and correcting myopia and hypermetropia.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=gDA_nDXM-ck",
    "youtubeId": "gDA_nDXM-ck",
    "keyNotes": "• Refraction & Snell’s Law:\n  - Bending of light caused by velocity changes between media of differing optical density.\n  - Less dense to denser medium: Bends towards normal (r < i); Denser to less dense: Bends away from normal (r > i).\n  - Snell’s Law: n = (sin i) / (sin r) = Speed of light in vacuum (c) / Speed of light in medium (v) = Real depth / Apparent depth.\n• Total Internal Reflection (TIR):\n  - Occurs when: (1) Light travels from denser to less dense medium; (2) Angle of incidence exceeds critical angle (i > c).\n  - Critical angle: sin c = 1 / n. Used in fiber optic cables, endoscopes, and bicycle prism reflectors.\n• Lenses & Corrections:\n  - Convex Lens: Converging, real focus. Lens Formula: 1/f = 1/u + 1/v.\n  - Concave Lens: Diverging, virtual focus.\n  - Myopia (Short-sightedness): Distant rays focus in front of retina; corrected with concave (diverging) lens.\n  - Hypermetropia (Long-sightedness): Near rays focus behind retina; corrected with convex (converging) lens.",
    "detailedNotes": {
      "introduction": "Refraction explains how lenses focus light to produce sharp images in human eyes, cameras, microscopes, and high-speed fiber-optic telecommunications networks.",
      "realWorldContext": "Undersea fiber optic cables landing at the shores of Accra transmit gigabits of global internet data across the Atlantic via total internal reflection inside silica glass fibers.",
      "objectives": [
        "State Snell’s law and calculate refractive indices using angles, wave speeds, and apparent depth",
        "State the two conditions required for total internal reflection and describe fiber optic applications",
        "Construct ray diagrams for convex and concave lenses to determine image position and magnification",
        "Compare the human eye to a camera and explain lens corrections for myopia and hypermetropia"
      ],
      "sections": [
        {
          "title": "Total Internal Reflection & Fiber Optics",
          "content": "When the angle of incidence in an optically dense medium exceeds the critical angle, all light is reflected internally with zero energy loss.",
          "bulletPoints": [
            "Critical Angle: The angle of incidence in the denser medium for which the angle of refraction in the less dense medium is exactly 90°: sin c = 1 / n.",
            "Fiber Optic Core: Light enters one end of an optical fiber at an angle greater than c and bounces repeatedly along the core by TIR."
          ],
          "keyTakeaway": "Total internal reflection occurs only when light moves from dense to rare media at an incidence angle greater than the critical angle.",
          "realWorldExample": "Medical doctors at Korle-Bu perform minimally invasive laparoscopic surgeries using flexible endoscopes illuminated by fiber optic bundles."
        }
      ],
      "wassceExamTips": [
        "In lens calculations, use the real-is-positive convention: f is positive for convex lenses, negative for concave lenses.",
        "Distinguish clearly between myopia (corrected with concave lens) and hypermetropia (corrected with convex lens).",
        "Always draw arrowheads on all light rays in optical diagrams."
      ],
      "commonMistakes": [
        "Calculating apparent depth as Apparent depth = Real depth × n (the correct formula is Apparent depth = Real depth / n).",
        "Suggesting that total internal reflection can happen when light goes from air into glass (it only happens from dense to rare).",
        "Forgetting that a magnifying glass requires the object to be placed within the focal length of a convex lens."
      ],
      "summaryChecklist": [
        "Can I calculate the critical angle for crown glass with refractive index 1.50?",
        "Can I solve a lens problem using 1/f = 1/u + 1/v?",
        "Can I draw the ray diagram showing correction of short sight using a concave lens?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-refr-1",
        "title": "Snell’s Law & Critical Angle Calculation",
        "problem": "A ray of light traveling in air strikes the flat surface of a glass block at an angle of incidence of 45°. The angle of refraction inside the glass is 28°. Calculate: (a) The refractive index of the glass. (b) The critical angle for the glass-air interface.",
        "stepByStepSolution": [
          "Step 1: State Snell’s Law: n = (sin i) / (sin r). [M1]",
          "Step 2: Substitute angles: n = sin 45° / sin 28° = 0.7071 / 0.4695 ≈ 1.506 (or 1.51). [A1]",
          "Step 3: Critical angle formula: sin c = 1 / n = 1 / 1.506 = 0.6640. [M1]",
          "Step 4: c = sin⁻¹(0.6640) ≈ 41.6°. [A1]"
        ],
        "keyTakeaway": "The critical angle is determined directly from the reciprocal of the refractive index: sin c = 1/n."
      },
      {
        "id": "ex-shs2-sci-refr-2",
        "title": "Convex Lens Image Formation",
        "problem": "A convex lens of focal length 12.0 cm forms a sharp image of a lighted candle placed 20.0 cm from the lens. Calculate: (a) The image distance from the lens. (b) The magnification of the image.",
        "stepByStepSolution": [
          "Step 1: Identify given variables: f = +12.0 cm, u = +20.0 cm. [M1]",
          "Step 2: Apply lens formula: 1/f = 1/u + 1/v → 1/12 = 1/20 + 1/v. [M1]",
          "Step 3: 1/v = 1/12 - 1/20 = (5 - 3) / 60 = 2/60 = 1/30 → v = +30.0 cm. [A1]",
          "Step 4: Magnification m = v / u = 30.0 / 20.0 = 1.5. [A1]"
        ],
        "keyTakeaway": "The image is real, inverted, magnified 1.5 times, and located 30.0 cm behind the convex lens."
      }
    ]
  },
  {
    "id": "shs2-sci-t3-animal-husbandry-ruminants",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Agricultural Science: Farm Animal Husbandry (Ruminants vs Non-Ruminants)",
    "description": "Anatomy and physiology of ruminant digestion (cattle, sheep, goats) vs non-ruminants (pigs, poultry), microbial fermentation of cellulose, poultry digestive adaptations, livestock housing, nutrition rations, and routine management practices.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=F3i9v1-vG-M",
    "youtubeId": "F3i9v1-vG-M",
    "keyNotes": "• Ruminant Digestive System (4 Compartments):\n  - Rumen (Paunch): Largest chamber; anaerobic microbial fermentation by bacteria, protozoa, and fungi breaks cellulose down into volatile fatty acids (VFAs).\n  - Reticulum (Honeycomb): Traps foreign heavy objects; aids in regurgitation of bolus for cud chewing (rumination).\n  - Omasum (Manyplies): Muscular leaves absorb water and bicarbonate ions from digested cud.\n  - Abomasum (True Stomach): Glandular chamber secreting gastric juice, HCl, and pepsin for protein and microbial biomass digestion.\n• Non-Ruminant / Avian Adaptations:\n  - Poultry (Fowls): No teeth; Crop stores and softens feed; Proventriculus secretes gastric juice; Muscular Gizzard containing ingested stones/grit grinds feed mechanically.\n• Routine Management Practices:\n  - Debeaking (poultry): Trimming beaks to stop cannibalism and egg eating.\n  - Dehorning (cattle): Removing horns to prevent injury and make animals docile.\n  - Castration: Eliminates testes in non-breeding males to improve docility, growth rate, and meat quality.\n  - Colostrum Feeding: First mother’s milk within 24 hours providing maternal antibodies (passive immunity).",
    "detailedNotes": {
      "introduction": "Animal husbandry applies scientific breeding, feeding, and veterinary health management to maximize milk, meat, and egg production sustainably.",
      "realWorldContext": "In the Accra Plains and Northern Region, livestock farmers raise N’Dama cattle, West African Dwarf goats, and guinea fowls, utilizing rangeland forage converted into high-protein animal products through ruminant microbial fermentation.",
      "objectives": [
        "Diagram and sequence the four chambers of the ruminant digestive tract",
        "Explain the role of rumen symbiotic microorganisms in fermenting fibrous cellulose",
        "Compare ruminant digestion with avian poultry digestion (crop, proventriculus, gizzard)",
        "Describe routine livestock management operations: castration, dehorning, and debeaking"
      ],
      "sections": [
        {
          "title": "Microbial Digestion of Cellulose in the Rumen",
          "content": "Mammalian enzymes cannot break beta-1,4-glycosidic bonds in cellulose; ruminants depend entirely on microbial symbionts.",
          "bulletPoints": [
            "Cellulolytic bacteria and ciliates secrete cellulase enzymes, fermenting structural carbohydrates into volatile fatty acids (acetate, propionate, butyrate).",
            "VFAs are absorbed directly across the rumen wall into the bloodstream as the primary energy source.",
            "Dead microbial cells pass into the abomasum and small intestine, providing high-quality microbial protein and B-vitamins."
          ],
          "keyTakeaway": "Rumen microbes convert indigestible plant fiber into volatile fatty acids and high-grade microbial protein.",
          "realWorldExample": "Feeding urea and molasses blocks to cattle during Harmattan dry seasons provides non-protein nitrogen to nourish rumen bacteria when natural pastures are dry."
        }
      ],
      "wassceExamTips": [
        "List the four ruminant stomach chambers in correct sequential order: Rumen → Reticulum → Omasum → Abomasum.",
        "Identify the \"true stomach\" of a ruminant as the Abomasum.",
        "State why swallowed grit/stones in a chicken’s gizzard are necessary: they act as teeth to grind hard grains."
      ],
      "commonMistakes": [
        "Calling the gizzard the \"crop\" (the crop stores food; the gizzard grinds it).",
        "Believing that cows produce cellulase enzymes directly from their stomach walls.",
        "Omitting colostrum feeding in the management of newborn farm animals."
      ],
      "summaryChecklist": [
        "Can I state the specific function of each of the 4 ruminant stomach compartments?",
        "Can I compare the digestive system of a pig (monogastric) with that of a goat (ruminant)?",
        "Can I explain the importance of feeding colostrum to newborn calves within 24 hours of birth?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-anim-1",
        "title": "Avian Digestive Adaptations",
        "problem": "Explain the physiological functions of: (a) The Crop. (b) The Proventriculus. (c) The Gizzard in the domestic fowl.",
        "stepByStepSolution": [
          "Step 1: Crop: A pouch-like swelling of the esophagus that stores, moistens, and softens ingested grains before digestion. [A1]",
          "Step 2: Proventriculus: The glandular stomach of the fowl that secretes gastric juice, hydrochloric acid, and pepsin to begin chemical protein digestion. [A1]",
          "Step 3: Gizzard (Ventriculus): A thick, muscular chamber with a tough koilin lining that uses swallowed grit/stones to mechanically grind tough grains into a fine paste. [A1]"
        ],
        "keyTakeaway": "The avian crop and gizzard compensate mechanically for the absence of teeth in birds."
      },
      {
        "id": "ex-shs2-sci-anim-2",
        "title": "Nutritional Ration Formulation",
        "problem": "Distinguish between a maintenance ration and a production ration for dairy cattle.",
        "stepByStepSolution": [
          "Step 1: Maintenance Ration: The minimum amount of feed supplied to an animal to keep its body weight, basal metabolic processes, and vital functions constant without gaining or losing weight, nor yielding any product. [A1]",
          "Step 2: Production Ration: The extra quantity of nutrient-dense feed supplied above maintenance requirements to support growth, milk synthesis, egg laying, or pregnancy. [A1]"
        ],
        "keyTakeaway": "Total feed intake must cover maintenance requirements before surplus nutrients support production."
      }
    ]
  },
  {
    "id": "shs2-sci-t3-genetics-mendel-crosses",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 13,
    "title": "Genetics I: Mendel’s Laws of Inheritance & Monohybrid Crosses",
    "description": "Foundations of heredity, Mendel’s laws (Law of Segregation), monohybrid crosses, Punnett squares, dominant and recessive alleles, homozygous vs heterozygous genotypes, and test crosses.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=CBezq1fFUEA",
    "youtubeId": "CBezq1fFUEA",
    "keyNotes": "• Genetic Terminology:\n  - Gene: Basic hereditary unit occupying a specific locus on a chromosome.\n  - Allele: Alternative version of a gene (e.g. T for tall, t for dwarf).\n  - Genotype: Genetic makeup of an organism (e.g. TT, Tt, tt).\n  - Phenotype: Observable physical or physiological manifestation of a trait.\n  - Homozygous: Having identical alleles for a gene (TT = homozygous dominant; tt = homozygous recessive).\n  - Heterozygous: Having two different alleles for a gene (Tt).\n• Mendel’s First Law (Law of Segregation):\n  - The traits of an organism are determined by pairs of alleles that segregate during meiosis so that each gamete receives only one allele.\n• Monohybrid Inheritance:\n  - P₁: Homozygous Tall (TT) × Homozygous Dwarf (tt) → F₁: 100% Heterozygous Tall (Tt).\n  - F₁ selfing: Tt × Tt → F₂ Genotypic Ratio: 1 TT : 2 Tt : 1 tt (1:2:1).\n  - F₂ Phenotypic Ratio: 3 Tall : 1 Dwarf (3:1).\n• Test Cross (Backcross):\n  - Crossing an individual of dominant phenotype with a homozygous recessive individual (tt) to establish whether the dominant parent is TT or Tt.",
    "detailedNotes": {
      "introduction": "Mendelian genetics reveals the quantitative laws governing how inherited traits are transmitted from parents to offspring across generations.",
      "realWorldContext": "Plant breeders at the Crops Research Institute (CSIR) in Fumesua use Mendelian genetic crosses to breed drought-tolerant, high-yielding hybrid maize varieties that resist fall armyworms.",
      "objectives": [
        "Define key genetic terms: gene, allele, locus, genotype, phenotype, homozygous, and heterozygous",
        "State Mendel’s First Law of Inheritance (Law of Segregation)",
        "Construct complete Punnett squares for monohybrid crosses and deduce F₁ and F₂ ratios",
        "Explain how a test cross determines an unknown parental genotype"
      ],
      "sections": [
        {
          "title": "Monohybrid Crosses & Punnett Squares",
          "content": "A monohybrid cross tracks the inheritance of a single contrasting genetic characteristic.",
          "bulletPoints": [
            "Parental gametes segregate independently during meiosis.",
            "A 2×2 Punnett grid visualizes all possible random fertilization events between male and female gametes.",
            "Phenotypic ratio is 3 dominant : 1 recessive; genotypic ratio is 1:2:1."
          ],
          "keyTakeaway": "A 3:1 phenotypic ratio in offspring is the classic signature of a monohybrid cross between two heterozygotes.",
          "realWorldExample": "Crossing heterozygous black-coated goats (Bb) yields approximately 75% black-coated kids and 25% brown-coated kids (bb)."
        }
      ],
      "wassceExamTips": [
        "Always follow the formal 5-step genetics layout: (1) Parental phenotypes, (2) Parental genotypes, (3) Gametes (in circles), (4) Punnett square, (5) Offspring genotypic and phenotypic ratios.",
        "Circle all gametes in your working; WAEC marking schemes deduct marks if gametes are written uncircled.",
        "Distinguish clearly between the genotypic ratio (1:2:1) and phenotypic ratio (3:1)."
      ],
      "commonMistakes": [
        "Using different letters for the same gene (e.g. using T for tall and S for short; use T and t).",
        "Confusing homozygous with heterozygous.",
        "Forgetting that gametes are haploid and contain only ONE letter/allele."
      ],
      "summaryChecklist": [
        "Can I state Mendel’s Law of Segregation word-for-word?",
        "Can I set up and solve a monohybrid genetic cross from P₁ to F₂?",
        "Can I interpret the results of a test cross showing a 1:1 offspring ratio?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-gen1-1",
        "title": "Classic Monohybrid Pea Cross",
        "problem": "In pea plants, the allele for purple flowers (P) is dominant over the allele for white flowers (p). A homozygous purple-flowered plant is crossed with a white-flowered plant. Determine: (a) The genotype and phenotype of the F₁ generation. (b) The genotypic and phenotypic ratios of the F₂ generation obtained by selfing the F₁ plants.",
        "stepByStepSolution": [
          "Step 1: Parents: PP (purple) × pp (white). Gametes: P from parent 1, p from parent 2. [M1]",
          "Step 2: F₁ genotype: 100% Pp; F₁ phenotype: 100% Purple-flowered plants. [A1]",
          "Step 3: F₁ self-cross: Pp × Pp. Gametes: P, p from each parent. [M1]",
          "Step 4: Punnett square combinations: PP, Pp, Pp, pp. [M1]",
          "Step 5: F₂ Genotypic ratio: 1 PP : 2 Pp : 1 pp (1:2:1). [A1]",
          "Step 6: F₂ Phenotypic ratio: 3 Purple : 1 White (3:1). [A1]"
        ],
        "keyTakeaway": "The recessive phenotype reappears in the F₂ generation in a 3:1 ratio because alleles segregate without blending."
      },
      {
        "id": "ex-shs2-sci-gen1-2",
        "title": "Conducting a Test Cross",
        "problem": "A farmer purchases a black guinea pig (black coat B is dominant over white coat b) and wishes to know whether it is homozygous (BB) or heterozygous (Bb). Explain how the farmer can determine the genotype using a test cross.",
        "stepByStepSolution": [
          "Step 1: Cross the black guinea pig with a known homozygous recessive white guinea pig (bb). [M1]",
          "Step 2: Case 1: If the parent is BB, cross is BB × bb → 100% Bb (all offspring will be black). [A1]",
          "Step 3: Case 2: If the parent is Bb, cross is Bb × bb → 50% Bb (black) and 50% bb (white) (1:1 ratio). [M1, A1]",
          "Step 4: Conclusion: If even a single white offspring appears in the litter, the black parent is conclusively heterozygous (Bb). [A1]"
        ],
        "keyTakeaway": "A 1:1 phenotypic ratio in a test cross confirms the dominant parent is heterozygous."
      }
    ]
  },
  {
    "id": "shs2-sci-t3-genetics-sex-sickle-cell",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 14,
    "title": "Genetics II: Sex Determination, Sex-Linked Traits & Sickle Cell Anemia",
    "description": "Human karyotype, XX-XY chromosomal sex determination, sex-linked traits (color blindness, hemophilia), sickle cell inheritance, malaria resistance in carriers (heterozygote advantage), and genetic counseling.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=h2xufrHWG3E",
    "youtubeId": "h2xufrHWG3E",
    "keyNotes": "• Chromosomal Sex Determination:\n  - Humans have 46 chromosomes (23 pairs): 22 pairs of autosomes and 1 pair of sex chromosomes.\n  - Females are homogametic (XX); Males are heterogametic (XY).\n  - Father’s sperm determines biological sex of offspring: X-sperm gives a girl (XX); Y-sperm gives a boy (XY). Probability is exactly 50% (1:1) in every pregnancy.\n• Sex-Linked Recessive Inheritance:\n  - Genes located on the differential region of the X chromosome with no matching locus on the Y chromosome.\n  - Examples: Red-green color blindness and hemophilia.\n  - Males (XᵇY) express the trait with a single copy (hemizygous); females need two copies (XᵇXᵇ).\n• Sickle Cell Anemia:\n  - Caused by a point mutation in the beta-globin gene, producing abnormal hemoglobin HbS.\n  - Genotypes: HbA HbA (normal); HbA HbS (sickle cell trait/carrier); HbS HbS (sickle cell anemia).\n  - Heterozygote Advantage: HbA HbS carriers have selective resistance against severe Falciparum malaria.",
    "detailedNotes": {
      "introduction": "Sex determination and genetic diseases follow precise chromosomal inheritance patterns. Understanding sickle cell anemia and sex-linked traits is vital for personal healthcare and pre-marital genetic counseling in West Africa.",
      "realWorldContext": "In Ghana, approximately 2% of newborns are born with sickle cell disease (HbS HbS), and over 25% of the population carry the sickle cell trait (HbA HbS). The Sickle Cell Foundation of Ghana advocates universal newborn screening and pre-marital testing.",
      "objectives": [
        "Explain the chromosomal basis of biological sex determination in humans",
        "Analyze pedigrees and crosses for sex-linked conditions (color blindness, hemophilia)",
        "Explain the molecular basis and clinical manifestations of sickle cell anemia",
        "Explain heterozygote advantage in malaria-endemic zones and the role of genetic counseling"
      ],
      "sections": [
        {
          "title": "Sickle Cell Anemia & Heterozygote Advantage",
          "content": "Sickle cell disease is caused by an autosomal recessive point mutation that alters the sixth amino acid of the hemoglobin beta chain.",
          "bulletPoints": [
            "Under low oxygen conditions, HbS molecules polymerize into rigid fibrous rods, deforming red blood cells into stiff sickled crescents.",
            "Sickled cells obstruct capillaries, causing painful vaso-occlusive crises, anemia, and organ damage.",
            "Malaria Resistance: Plasmodium falciparum parasites consume hemoglobin and reduce intracellular oxygen, inducing early sickling of infected HbA HbS cells, which are promptly destroyed by the spleen before parasites reproduce."
          ],
          "keyTakeaway": "The sickle cell allele persists at high frequencies in Ghana because carriers (HbA HbS) are protected from fatal malaria.",
          "realWorldExample": "Pre-marital genotype testing clinics in hospitals across Ghana counsel couples who both carry the trait (AS × AS) about the 25% risk of having a child with sickle cell disease."
        }
      ],
      "wassceExamTips": [
        "When representing sex-linked traits, always attach the allele as a superscript on the X chromosome: e.g. XᴮXᵇ for carrier female, XᵇY for affected male.",
        "Never attach alleles to the Y chromosome in sex-linked crosses.",
        "State clearly that prospective couples who are both AS (carrier) have a 25% (1 in 4) chance of having an SS child in each pregnancy."
      ],
      "commonMistakes": [
        "Blaming the mother for the sex of a baby (it is the father’s sperm which contributes either an X or a Y chromosome).",
        "Thinking that having one healthy child reduces the 25% risk for subsequent pregnancies (probabilities reset for each pregnancy).",
        "Writing that sickle cell disease is infectious (it is strictly inherited, non-communicable)."
      ],
      "summaryChecklist": [
        "Can I draw a Punnett square showing the 50% probability of having a male or female child?",
        "Can I solve a pedigree cross for a carrier mother and normal father for red-green color blindness?",
        "Can I explain the medical and evolutionary significance of the sickle cell trait in Ghana?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-gen2-1",
        "title": "Sickle Cell Cross Between Two Carriers",
        "problem": "Two individuals with the sickle cell trait (HbA HbS) intend to marry. (a) Construct a genetic cross to determine the genotypic and phenotypic ratios of their prospective offspring. (b) Calculate the probability of them having a child with sickle cell disease.",
        "stepByStepSolution": [
          "Step 1: Parental genotypes: HbA HbS × HbA HbS. Gametes: HbA, HbS from both parents. [M1]",
          "Step 2: Punnett square combinations: 1 HbA HbA : 2 HbA HbS : 1 HbS HbS. [M1]",
          "Step 3: Phenotypes: 25% Normal (HbA HbA), 50% Sickle cell trait carrier (HbA HbS), 25% Sickle cell anemia (HbS HbS). [A1]",
          "Step 4: The probability of having an affected child (HbS HbS) in each pregnancy is 1/4 or 25%. [A1]"
        ],
        "keyTakeaway": "Two carrier parents have a 75% chance of an unaffected child (25% normal + 50% carrier) and a 25% chance of an affected child."
      },
      {
        "id": "ex-shs2-sci-gen2-2",
        "title": "Sex-Linked Color Blindness Inheritance",
        "problem": "A man with normal color vision (XᴮY) marries a carrier woman (XᴮXᵇ). Determine the percentage probability of: (a) Their sons being color-blind. (b) Their daughters being color-blind.",
        "stepByStepSolution": [
          "Step 1: Parents: XᴮY (father) × XᴮXᵇ (mother). [M1]",
          "Step 2: Offspring combinations: XᴮXᴮ (normal female), XᴮXᵇ (carrier female), XᴮY (normal male), XᵇY (color-blind male). [M1, A1]",
          "Step 3: Sons receive Y from father and either Xᴮ or Xᵇ from mother. Probability of a son being color-blind = 1 out of 2 = 50%. [A1]",
          "Step 4: All daughters receive Xᴮ from their father, so 0% of daughters are color-blind (50% are carriers, 50% homozygous normal). [A1]"
        ],
        "keyTakeaway": "A father cannot pass an X-linked recessive condition to his sons because he only donates his Y chromosome to them."
      }
    ]
  },
  {
    "id": "shs2-sci-t3-solutions-solubility-colloids",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 15,
    "title": "Solutions, Solubility Curves, Suspensions & Colloidal Systems",
    "description": "Solute, solvent, and solution types, saturated, unsaturated, and supersaturated solutions, solubility curves and calculations, fractional crystallization, and true solutions vs colloids (Tyndall effect) vs suspensions.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=kYI_G-oZcOE",
    "youtubeId": "kYI_G-oZcOE",
    "keyNotes": "• Solution Terminology:\n  - Saturated Solution: Contains maximum mass of dissolved solute in equilibrium with undissolved solute at a specific temperature.\n  - Unsaturated Solution: Can dissolve more solute at that temperature.\n  - Supersaturated Solution: Holds more dissolved solute than normal saturation capacity; meta-stable.\n• Solubility & Solubility Curves:\n  - Solubility: Maximum mass of solute (grams) that dissolves in 100 g of solvent at a given temperature.\n  - For most solid salts (e.g. KNO₃), solubility increases as temperature rises. For gases, solubility decreases as temperature rises.\n  - Fractional Crystallization: Separating two dissolved solutes based on differences in their solubility curves upon cooling.\n• Classification of Dispersions:\n  - True Solution: Particle size < 1 nm; transparent, homogeneous, does not settle, passes through filter paper.\n  - Colloid: Particle size 1 - 100 nm; translucent/cloudy, exhibits Tyndall effect (scatters light), does not settle (e.g. milk, mayonnaise, smoke).\n  - Suspension: Particle size > 100 nm; opaque, heterogeneous, particles settle upon standing (e.g. muddy water).",
    "detailedNotes": {
      "introduction": "Solutions and colloidal systems are fundamental to industrial chemistry, food formulation, pharmaceuticals, and environmental water treatment.",
      "realWorldContext": "In the salt industries of Ada Songor and Keta lagoons, seawater is channeled into shallow evaporation pans. Evaporating water saturates the brine, crystallizing out food-grade sodium chloride crystals via fractional crystallization.",
      "objectives": [
        "Define solubility quantitatively in g per 100 g of water and interpret solubility curves",
        "Calculate the mass of solute crystallizing out when a hot saturated solution is cooled",
        "Explain fractional crystallization and its application in salt and mineral extraction",
        "Compare true solutions, colloids, and suspensions using particle size and the Tyndall effect"
      ],
      "sections": [
        {
          "title": "Interpreting Solubility Curves & Crystallization",
          "content": "A solubility curve plots maximum solute dissolved against temperature.",
          "bulletPoints": [
            "Any point ON the curve represents a saturated solution.",
            "Any point BELOW the curve represents an unsaturated solution.",
            "Any point ABOVE the curve represents an unstable supersaturated state.",
            "Crystallization on Cooling: Mass crystallized = Solubility at T_hot - Solubility at T_cold (per 100 g of water)."
          ],
          "keyTakeaway": "When a hot saturated solution cools, the excess solute precipitates out as pure crystals.",
          "realWorldExample": "Producing traditional alum or rock sugar crystals involves cooling concentrated hot sugar solutions slowly on suspended strings."
        }
      ],
      "wassceExamTips": [
        "Always check whether solubility is expressed per 100 g of water or per dm³ of solution.",
        "When defining a saturated solution, you MUST state: \"at a specified temperature\".",
        "Name the Tyndall effect when explaining why light beams are visible in colloidal dispersions."
      ],
      "commonMistakes": [
        "Confusing a colloid (stable non-settling dispersion like milk) with a suspension (settles over time like muddy water).",
        "Forgetting to scale solubility values when the mass of water is different from 100 g.",
        "Thinking gas solubility increases with temperature (gas solubility always decreases with heating)."
      ],
      "summaryChecklist": [
        "Can I calculate the mass of KNO₃ that precipitates when 250 g of water cools from 60°C to 20°C?",
        "Can I describe the Tyndall effect and list two examples of colloids?",
        "Can I outline the steps of fractional crystallization?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-sol-1",
        "title": "Crystallization from Solubility Curve",
        "problem": "The solubility of potassium chlorate(V) (KClO₃) is 40.0 g per 100 g of water at 80°C and 10.0 g per 100 g of water at 25°C. Calculate the mass of KClO₃ crystals deposited when 200 g of a saturated solution of KClO₃ at 80°C is cooled to 25°C.",
        "stepByStepSolution": [
          "Step 1: At 80°C, 40.0 g of KClO₃ dissolves in 100 g of water, giving 140.0 g of saturated solution. [M1]",
          "Step 2: Find mass of water in 200 g of saturated solution: Mass of water = (100 / 140) × 200 g = 142.86 g of water. [M1, A1]",
          "Step 3: Mass of solute in this solution at 80°C = 200 - 142.86 = 57.14 g. [A1]",
          "Step 4: At 25°C, 100 g of water retains only 10.0 g of KClO₃. Solute retained in 142.86 g water = (10.0 / 100) × 142.86 = 14.29 g. [M1]",
          "Step 5: Mass of crystals deposited = Initial solute - Retained solute = 57.14 g - 14.29 g = 42.85 g. [A1]"
        ],
        "keyTakeaway": "Always determine the exact mass of water present before calculating crystals deposited upon cooling."
      },
      {
        "id": "ex-shs2-sci-sol-2",
        "title": "Differentiating Colloids from Suspensions",
        "problem": "A laboratory technician tests two opaque liquids, Sample X and Sample Y. Sample X passes through filter paper without leaving residue and scatters a laser beam. Sample Y leaves a brown residue on filter paper and separates into two layers after standing for 30 minutes. Classify Samples X and Y with scientific reasoning.",
        "stepByStepSolution": [
          "Step 1: Sample X is a Colloid. Reasoning: Colloid particles (1-100 nm) are small enough to pass through standard filter paper pores but large enough to scatter visible light (Tyndall effect). [A1]",
          "Step 2: Sample Y is a Suspension. Reasoning: Suspension particles are large (> 100 nm), trapped by filter paper, and settle under gravity over time. [A1]"
        ],
        "keyTakeaway": "Colloids do not settle and scatter light; suspensions settle upon standing and can be filtered."
      }
    ]
  },
  {
    "id": "shs2-sci-t3-atmosphere-climate-change",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 16,
    "title": "Atmosphere, Ozone Layer Depletion, Global Warming & Climate Change",
    "description": "Atmospheric layers (troposphere to exosphere), stratospheric ozone protection, mechanism of ozone depletion by CFCs, natural vs enhanced greenhouse effect, greenhouse gases (CO₂, CH₄, N₂O), and impacts of climate change in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=dcBXmj1nMTQ",
    "youtubeId": "dcBXmj1nMTQ",
    "keyNotes": "• Structure of the Atmosphere:\n  - Troposphere (0 - 12 km): Contains ~75% of atmospheric mass and all water vapor; where all weather occurs. Temperature decreases with altitude.\n  - Stratosphere (12 - 50 km): Contains the ozone layer (O₃); temperature increases with altitude.\n• The Stratospheric Ozone Shield:\n  - Ozone (O₃) absorbs dangerous solar ultraviolet radiation (UV-B and UV-C), preventing skin cancers, eye cataracts, and crop yield decline.\n  - Depletion by CFCs: UV light breaks CFCs, releasing reactive chlorine free radicals: Cl• + O₃ → ClO• + O₂. One chlorine atom destroys over 100,000 ozone molecules. Montreal Protocol (1987) phased out CFCs.\n• Enhanced Greenhouse Effect & Global Warming:\n  - Greenhouse gases: Carbon dioxide (CO₂), Methane (CH₄), Nitrous oxide (N₂O), Fluorinated gases, Water vapor.\n  - Mechanism: Solar short-wave radiation warms Earth; Earth radiates long-wave infrared heat; greenhouse gases absorb and re-emit infrared, warming the lower troposphere.\n  - Impacts in Ghana: Coastal erosion in Keta and Ada from rising sea levels, desertification in Northern Ghana, unpredictable rainfall patterns affecting cocoa and maize yields.",
    "detailedNotes": {
      "introduction": "Human industrial activities and fossil fuel combustion have significantly altered atmospheric composition, causing global warming, climate instability, and stratospheric ozone depletion.",
      "realWorldContext": "In coastal Ghana, rising sea levels and intense storm surges have swallowed residential homes in communities like Fuveme near Keta, forcing the Ghanaian government to construct multi-million-dollar coastal sea defence walls.",
      "objectives": [
        "Diagram the layers of Earth’s atmosphere and explain the ozone layer’s protective role",
        "Explain the catalytic mechanism by which chlorofluorocarbons (CFCs) destroy stratospheric ozone",
        "Distinguish between the natural greenhouse effect and the anthropogenic enhanced greenhouse effect",
        "Evaluate climate change adaptation and mitigation strategies in Ghanaian agriculture and forestry"
      ],
      "sections": [
        {
          "title": "The Greenhouse Mechanism & Anthropogenic Drivers",
          "content": "Greenhouse gases act like a thermal blanket surrounding the Earth.",
          "bulletPoints": [
            "Without the natural greenhouse effect, Earth’s average surface temperature would be a frozen -18°C rather than our hospitable +15°C.",
            "Combustion of petroleum, coal, and natural gas, coupled with tropical deforestation, has driven atmospheric CO₂ concentrations from 280 ppm to over 420 ppm.",
            "Methane (CH₄) from flooded rice fields and livestock belching is 28 times more potent than CO₂ over a century."
          ],
          "keyTakeaway": "The enhanced greenhouse effect traps excess infrared heat, driving global temperature rise.",
          "realWorldExample": "Ghana’s \"Green Ghana Day\" initiative plants millions of tree seedlings annually to expand vegetative carbon sinks that absorb CO₂ from the atmosphere."
        }
      ],
      "wassceExamTips": [
        "Do not confuse ozone layer depletion (caused by CFCs, admitting UV rays) with global warming (caused by greenhouse gases trapping infrared heat).",
        "State the international treaty that banned CFCs: The Montreal Protocol (1987).",
        "Name at least three major greenhouse gases: Carbon dioxide, Methane, Nitrous oxide."
      ],
      "commonMistakes": [
        "Claiming that the greenhouse effect is entirely bad (without the natural greenhouse effect, Earth would be completely frozen).",
        "Saying the ozone hole causes global warming (they are distinct atmospheric environmental issues).",
        "Listing nitrogen or oxygen as greenhouse gases (diatomic symmetrical gases do not absorb infrared radiation)."
      ],
      "summaryChecklist": [
        "Can I list the atmospheric layers in order starting from Earth’s surface?",
        "Can I write out the catalytic equations for ozone breakdown by chlorine radicals?",
        "Can I explain 3 specific impacts of climate change currently observed in Ghana?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-atm-1",
        "title": "Ozone Depletion Catalytic Cycle",
        "problem": "Explain chemically how a single chlorofluorocarbon (CFC) molecule such as trichlorofluoromethane (CFCl₃) destroys thousands of ozone molecules in the stratosphere.",
        "stepByStepSolution": [
          "Step 1: In the stratosphere, high-energy UV radiation photolytically cleaves a C-Cl bond: CFCl₃ + UV → CFCl₂• + Cl• (releasing a free chlorine radical). [M1, A1]",
          "Step 2: The chlorine radical reacts with ozone: Cl• + O₃ → ClO• + O₂. [M1]",
          "Step 3: The chlorine monoxide radical reacts with atomic oxygen: ClO• + O → Cl• + O₂. [M1]",
          "Step 4: The chlorine radical (Cl•) is regenerated intact, free to attack another ozone molecule. This catalytic chain repeats over 100,000 times before termination. [A1]"
        ],
        "keyTakeaway": "Chlorine acts as a catalyst in ozone depletion, emerging unconsumed to destroy thousands of ozone molecules."
      },
      {
        "id": "ex-shs2-sci-atm-2",
        "title": "Differentiating Greenhouse Effect from Ozone Depletion",
        "problem": "Construct a comparison table differentiating between the Greenhouse Effect and Ozone Layer Depletion under: (a) Primary causal pollutants. (b) Part of the atmosphere affected. (c) Major environmental consequences.",
        "stepByStepSolution": [
          "Step 1: Greenhouse Effect: Caused by CO₂, CH₄, N₂O in the troposphere; traps infrared heat; causes global warming, rising sea levels, and droughts. [A1]",
          "Step 2: Ozone Layer Depletion: Caused by CFCs and halons in the stratosphere; allows harmful UV radiation to reach Earth; causes skin cancer, cataracts, and crop damage. [A1]"
        ],
        "keyTakeaway": "Greenhouse warming involves trapped infrared radiation in the troposphere; ozone depletion involves excessive ultraviolet penetration in the stratosphere."
      }
    ]
  },
  {
    "id": "shs2-sci-t3-animal-pests-diseases",
    "subjectId": "science",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 17,
    "title": "Agricultural Science: Pests, Parasites & Diseases of Farm Animals",
    "description": "Ectoparasites (ticks, lice, tsetse flies) and endoparasites (tapeworms, liver flukes, roundworms), transmission of nagana, viral diseases (Newcastle, Foot-and-Mouth), bacterial diseases (Anthrax, Brucellosis), and integrated disease control.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=mH2r1_6yT-w",
    "youtubeId": "mH2r1_6yT-w",
    "keyNotes": "• Livestock Parasites:\n  - Ectoparasites: Live on external body surfaces (Ticks transmit Heartwater/Redwater; Tsetse flies transmit Nagana; Mites cause Mange; Lice). Controlled by dipping/spraying with acaricides.\n  - Endoparasites: Live inside internal organs (Taenia solium pork tapeworm in muscle/gut; Fasciola hepatica liver fluke in bile ducts; Ascaris roundworm). Controlled by routine deworming (antihelminthics).\n• Major Farm Animal Diseases:\n  - Anthrax (Bacterial: Bacillus anthracis): Sudden death, blood oozing from orifices that fails to clot; zoonotic. DO NOT AUTOPSY CARCASS.\n  - Brucellosis (Bacterial: Brucella abortus): Causes contagious abortion in cows; causes undulant fever in humans via raw milk.\n  - Newcastle Disease (Viral): In poultry; causes greenish diarrhea, twisted neck (torticollis), high mortality; prevented by vaccination.\n  - Foot-and-Mouth Disease (Viral): Vesicular blisters on mouth, tongue, and hooves of cloven-hoofed animals.\n• Trypanosomiasis (Nagana):\n  - Transmitted by Tsetse fly (Glossina). Indigenous N'Dama cattle are genetically trypanotolerant.",
    "detailedNotes": {
      "introduction": "Parasites and microbial pathogens cause immense economic loss in livestock production through mortality, stunted growth, reduced milk yield, and zoonotic infections transmitted to humans.",
      "realWorldContext": "In poultry hubs around Dormaa Ahenkro and Kumasi, veterinary officers enforce strict biosecurity protocols, footbaths, and scheduled vaccination calendars to protect commercial flocks against Newcastle and Gumboro diseases.",
      "objectives": [
        "Classify livestock parasites into ectoparasites and endoparasites with life cycle examples",
        "Describe the transmission, symptoms, and control of Trypanosomiasis (Nagana) and its vector",
        "Identify major bacterial and viral livestock diseases (Anthrax, Newcastle, Brucellosis, FMD)",
        "Formulate biosecurity and integrated parasite management plans for commercial farms"
      ],
      "sections": [
        {
          "title": "Anthrax & Veterinary Biosecurity Precautions",
          "content": "Anthrax is an acute, fatal zoonotic bacterial disease affecting all warm-blooded animals.",
          "bulletPoints": [
            "Causal agent: Bacillus anthracis forms extremely resilient bacterial spores that survive in soil for decades.",
            "Classic Symptom: Sudden unexpected mortality with tarry, dark unclotted blood oozing from mouth, nostrils, and anus.",
            "Golden Rule: Never cut open (autopsy) an anthrax carcass; exposure to atmospheric oxygen triggers spore formation that permanently contaminates pastures."
          ],
          "keyTakeaway": "Suspected anthrax carcasses must be buried at least 2 meters deep covered with quicklime or incinerated completely.",
          "realWorldExample": "Annual veterinary vaccination campaigns in the Upper East Region protect cattle against anthrax outbreaks prior to the rainy season."
        }
      ],
      "wassceExamTips": [
        "State why suspected anthrax carcasses must never be opened: \"Exposure to atmospheric oxygen induces spore formation\".",
        "Name the trypanotolerant cattle breed of West Africa: N’Dama or West African Shorthorn.",
        "Distinguish between an acaricide (kills ticks/mites) and an antihelminthic (dewormer that kills internal worms)."
      ],
      "commonMistakes": [
        "Treating viral diseases like Newcastle or Foot-and-Mouth with antibiotics (antibiotics only kill bacteria, not viruses).",
        "Confusing endoparasites with ectoparasites.",
        "Failing to identify the intermediate host of the liver fluke (water snail, Lymnaea)."
      ],
      "summaryChecklist": [
        "Can I outline the life cycle of the pork tapeworm (Taenia solium)?",
        "Can I describe 3 symptoms of Newcastle disease in chickens?",
        "Can I list 4 biosecurity measures practiced on a modern pig farm?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-sci-dis-1",
        "title": "Life Cycle & Control of Pork Tapeworm",
        "problem": "Explain the transmission life cycle of the pork tapeworm (Taenia solium) between pigs and humans, and suggest two veterinary/public health control measures.",
        "stepByStepSolution": [
          "Step 1: Adult tapeworm lives in the human small intestine, shedding proglottids containing thousands of ripe eggs in human feces. [B1]",
          "Step 2: Free-roaming scavenging pigs ingest eggs from human feces; embryos hatch, burrow into intestinal walls, and encyst as bladder worms (Cysticercus cellulosae) in pig muscle tissue (\"measly pork\"). [M1, A1]",
          "Step 3: Humans contract tapeworms by eating raw or undercooked pork containing viable cysticerci. [M1]",
          "Step 4: Control measures: (i) Confine pigs in hygienic pens to prevent access to human feces. (ii) Thoroughly cook pork at high temperatures to kill cysticerci. (iii) Meat inspection at abattoirs. [A1]"
        ],
        "keyTakeaway": "Proper cooking of pork and hygienic pig housing breaks the tapeworm life cycle."
      },
      {
        "id": "ex-shs2-sci-dis-2",
        "title": "Integrated Control of Cattle Ticks",
        "problem": "A cattle rancher on the Accra Plains observes heavy tick infestation causing Babesiosis (Redwater) in cattle. Design an integrated tick management program.",
        "stepByStepSolution": [
          "Step 1: Chemical Control: Pass cattle through an acaricide plunge dip or spray race every 7 to 14 days using approved pyrethroids or organophosphates. [A1]",
          "Step 2: Pasture Management: Practice rotational grazing; leave tick-infested pastures fallow for several months to starve larval ticks. [A1]",
          "Step 3: Biological Control: Encourage tick-eating birds (oxpeckers and egrets) in grazing paddocks. [A1]",
          "Step 4: Genetic Selection: Breed tick-resistant indigenous cattle (e.g. West African Shorthorn or Sanga). [A1]"
        ],
        "keyTakeaway": "Combining acaricide dipping with pasture rotation and tick-resistant genetics provides sustainable tick control."
      }
    ]
  }
]
;

// Attach quizzes
SHS2_SCIENCE_TOPICS.forEach(topic => {
  topic.quiz = SHS2_SCIENCE_QUIZZES[topic.id];
});
