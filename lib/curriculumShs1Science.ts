// Ghanaian SHS 1 Integrated Science Curriculum
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// 15 Comprehensive Topics covering Terms 1, 2, and 3 with Videos, Worked Examples, and Quizzes

import { CurriculumTopic } from './types';
import { SHS1_SCIENCE_QUIZZES } from './curriculumShs1ScienceQuizzes';

export const SHS1_SCIENCE_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs1-sci-t1-intro-science-measurement",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Introduction to Integrated Science, Laboratory Safety & Measurement",
    "description": "The scientific method, safety precautions and hazard symbols in the laboratory, SI base and derived units, and high-precision instruments: vernier calipers and micrometer screw gauges.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=3g2L43d6PqE",
    "youtubeId": "3g2L43d6PqE",
    "keyNotes": "• Nature of Science:\n  - Science is a systematic process of inquiry using observation, hypothesis formulation, experimentation, data collection, analysis, and drawing conclusions.\n  - Integrated Science unifies Biology, Chemistry, Physics, and Agricultural Science into a coherent understanding of the physical and natural world.\n• Laboratory Safety & Hazard Symbols:\n  - Toxic / Poisonous (Skull & Crossbones): Ingestion or inhalation can cause severe illness or death.\n  - Corrosive (Liquid spilling on hand/surface): Causes chemical burns on living tissue (e.g. concentrated H₂SO₄, NaOH).\n  - Flammable (Flame): Ignites easily in air (e.g. ethanol, acetone, petroleum ether).\n  - Oxidizing (Flame over circle): Releases oxygen that vigorously intensifies combustion (e.g. KMnO₄, concentrated HNO₃).\n  - Harmful / Irritant (Exclamation mark / St. Andrew cross): Can irritate skin, eyes, or respiratory tract.\n  - Explosive (Exploding bomb): Can violently detonate under heat or shock (e.g. picric acid, ammonium nitrate).\n• Measurement & SI Units:\n  - Base quantities & SI units: Length (meter, m), Mass (kilogram, kg), Time (second, s), Electric current (ampere, A), Temperature (kelvin, K), Amount of substance (mole, mol), Luminous intensity (candela, cd).\n  - Derived quantities: Volume (m³), Density (kg/m³), Force (Newton, N = kg·m/s²), Pressure (Pascal, Pa = N/m²), Work/Energy (Joule, J = N·m).\n• Precision Measuring Instruments:\n  - Vernier Calipers: Measures internal diameter, external diameter, and depth. Precision = 0.01 cm (0.1 mm). Reading = Main scale reading + (Vernier coincidence mark × 0.01 cm).\n  - Micrometer Screw Gauge: Measures thickness of wire, paper, or small spheres. Precision = 0.01 mm (0.001 cm). Reading = Main sleeve reading + (Thimble coincidence mark × 0.01 mm). Zero error must always be corrected.",
    "detailedNotes": {
      "introduction": "Measurement is the bedrock of empirical science. In this introductory topic, SHS 1 students master the scientific method, laboratory safety codes, SI units, and the exact operation of precision instruments that are directly assessed in the WASSCE Practical Science Paper (Paper 3).",
      "realWorldContext": "In Ghana, quality assurance bodies like the Ghana Standards Authority (GSA) and Food and Drugs Authority (FDA) use calibrated precision balances and titrimetric instruments to test sachet water, pharmaceuticals, and imported fuel density at Tema Harbour.",
      "objectives": [
        "Explain the scientific method and outline laboratory safety rules and hazard warnings",
        "Distinguish between the 7 SI base quantities and their derived units",
        "Read and record measurements from vernier calipers and micrometer screw gauges with correct precision",
        "Identify common sources of experimental error (parallax, zero error) and explain how to eliminate them"
      ],
      "sections": [
        {
          "title": "Precision Instruments: Vernier Calipers & Micrometer Screw Gauge",
          "content": "The meter rule has a minimum division of 1 mm (0.1 cm), which introduces significant percentage error when measuring tiny objects such as the diameter of a test tube or the thickness of copper wire. The vernier caliper improves precision to 0.01 cm, while the micrometer screw gauge achieves 0.01 mm.",
          "bulletPoints": [
            "Vernier caliper: Main scale reads in centimeters; sliding vernier scale has 10 divisions spanning 9 mm (each division = 0.9 mm = 0.09 cm).",
            "Micrometer screw gauge: Consists of an anvil, spindle, sleeve/pitch scale (calibrated in 0.5 mm), thimble (50 divisions), and a ratchet knob to prevent over-tightening.",
            "Zero Error Correction: If jaws are closed and zero mark does not align: Positive zero error is subtracted from the observed reading; negative zero error is added."
          ],
          "keyTakeaway": "Always check and record the zero error before taking any measurement with calipers or micrometers.",
          "realWorldExample": "Artisans at Suame Magazine in Kumasi use vernier calipers to measure engine cylinder bores and piston rings to prevent engine oil leakage."
        },
        {
          "title": "Laboratory Safety Practices & First Aid Protocols",
          "content": "Science laboratories contain corrosive reagents, pressurized gas cylinders, and volatile organic solvents. Strict personal protective equipment (PPE) and rapid emergency response procedures protect students from irreversible injury.",
          "bulletPoints": [
            "Never pour water into concentrated acid (acid into water, slowly with stirring) to avoid violent splashing due to exothermic heat.",
            "Acid spills on skin: Wash immediately with copious running water, then neutralize with mild base like dilute sodium bicarbonate solution.",
            "Base spills on skin: Wash immediately with running water, then treat with dilute weak acid (e.g. vinegar / dilute ethanoic acid).",
            "Chemical splash in eye: Flush at eye-wash station continuously for at least 15 minutes."
          ],
          "keyTakeaway": "Always add concentrated acid to water slowly down the side of the container with continuous stirring, never the reverse.",
          "realWorldExample": "In high school chemistry labs across Ghana, sand buckets and CO₂ extinguishers are placed near prep rooms to extinguish sudden solvent or electrical blazes."
        }
      ],
      "wassceExamTips": [
        "In WASSCE Paper 3 practicals, examiners deduct marks if units are omitted in tabular readings (e.g., writing 3.42 instead of 3.42 cm).",
        "When reading a micrometer screw gauge, remember to check whether the 0.5 mm subdivision mark on the lower sleeve is uncovered before adding thimble divisions.",
        "Always state the zero error with its sign (+ or -) before computing the corrected true reading."
      ],
      "commonMistakes": [
        "Reading the top edge of the meniscus instead of the bottom when measuring water in a graduated cylinder.",
        "Forgetting to multiply the coinciding vernier division by 0.01 cm before adding it to the main scale.",
        "Pouring concentrated acid into a sink without flushing with excess running tap water."
      ],
      "summaryChecklist": [
        "Can I recite the 7 SI base units and their symbols?",
        "Can I read any vernier caliper reading accurately to 2 decimal places in cm?",
        "Can I read any micrometer screw gauge reading to 2 decimal places in mm?",
        "Do I recognize all 6 standard hazard warning symbols?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-meas-1",
        "title": "Vernier Caliper Reading with Zero Error",
        "problem": "A student uses a vernier caliper to measure the internal diameter of a beaker. Before measurement, with the jaws closed, the vernier zero mark is 0.03 cm to the right of the main scale zero mark. During measurement, the main scale reads 4.7 cm and the 4th vernier division aligns perfectly with a main scale division. Calculate: (a) The observed reading. (b) The corrected true diameter.",
        "stepByStepSolution": [
          "Step 1: Identify given components: Main scale reading = 4.7 cm, Coincident mark = 4, Precision = 0.01 cm. [M1]",
          "Step 2: Calculate Vernier scale contribution = 4 × 0.01 cm = 0.04 cm.",
          "Step 3: Calculate Observed Reading = Main scale + Vernier scale = 4.7 + 0.04 = 4.74 cm. [A1]",
          "Step 4: Determine zero error: Since vernier zero was to the right of main scale zero, it is a positive zero error (+0.03 cm). [B1]",
          "Step 5: Calculate Corrected Reading = Observed reading - Zero error = 4.74 cm - (+0.03 cm) = 4.71 cm. [A1]"
        ],
        "keyTakeaway": "Positive zero error is always subtracted from the observed reading to obtain the accurate physical dimension."
      },
      {
        "id": "ex-shs1-sci-meas-2",
        "title": "Micrometer Screw Gauge Calculation",
        "problem": "A micrometer screw gauge with pitch 0.5 mm and 50 circular divisions is used to measure the diameter of a pendulum wire. The sleeve shows 2.5 mm, and the 28th circular scale division coincides with the datum line. If the instrument has a negative zero error of -0.02 mm, find the true diameter of the wire.",
        "stepByStepSolution": [
          "Step 1: Calculate least count = Pitch / Divisions = 0.5 mm / 50 = 0.01 mm.",
          "Step 2: Calculate thimble reading = 28 × 0.01 mm = 0.28 mm. [M1]",
          "Step 3: Calculate observed reading = Sleeve reading + Thimble reading = 2.5 mm + 0.28 mm = 2.78 mm. [A1]",
          "Step 4: Correct for negative zero error: True reading = Observed - (-0.02 mm) = 2.78 mm + 0.02 mm = 2.80 mm. [M1, A1]"
        ],
        "keyTakeaway": "A negative zero error means the instrument under-reads; subtracting a negative number adds the offset to correct the reading."
      }
    ]
  },
  {
    "id": "shs1-sci-t1-cell-biology",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Cell Structure, Organization, Microscopy & Transport Mechanisms",
    "description": "Ultra-structure of plant and animal cells, organelle functions (nucleus, mitochondria, chloroplasts, ribosomes), specialized cells, and membrane transport (diffusion, osmosis, and active transport).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=URUJD5NEXC8",
    "youtubeId": "URUJD5NEXC8",
    "keyNotes": "• Cell Theory:\n  - All living organisms are composed of one or more cells.\n  - The cell is the basic structural and functional unit of life.\n  - All cells arise from pre-existing cells through cell division.\n• Plant Cell vs Animal Cell:\n  - Plant cells possess: Rigid cellulose cell wall, large permanent central vacuole, chloroplasts with chlorophyll, fixed rectangular shape.\n  - Animal cells possess: Flexible cell membrane only, small temporary vacuoles, centrosomes/centrioles, irregular flexible shape, glycogen granules.\n• Organelle Functions:\n  - Nucleus: Encloses chromatin (DNA) and nucleolus; controls cellular metabolism and inheritance.\n  - Mitochondrion: Double-membraned organelle; site of aerobic cellular respiration and ATP synthesis.\n  - Chloroplast: Double-membraned; contains thylakoids and chlorophyll; site of photosynthesis.\n  - Ribosomes: Non-membranous; site of protein synthesis.\n  - Endoplasmic Reticulum: Rough ER (studded with ribosomes) synthesizes and transports proteins; Smooth ER synthesizes lipids and detoxifies poisons.\n• Membrane Transport Mechanisms:\n  - Diffusion: Passive movement of particles from high to low concentration down a concentration gradient until equilibrium is reached.\n  - Osmosis: Special form of diffusion involving movement of water molecules from a region of higher water potential (dilute solution) to lower water potential (concentrated solution) across a selectively permeable membrane.\n  - Active Transport: Movement of substances against their concentration gradient (from low to high concentration) using metabolic energy (ATP) and carrier proteins (e.g. uptake of mineral ions by root hair cells).",
    "detailedNotes": {
      "introduction": "Cells are the fundamental building blocks of all living matter. Understanding cell ultrastructure, microscopy, and physiological transport processes (diffusion, osmosis, and active transport) provides the scientific basis for human physiology, plant nutrition, and pathology in the WASSCE curriculum.",
      "realWorldContext": "In Ghana, food preservation techniques such as salting fresh fish (koobi, momoni) and sun-drying cassava chips rely on osmosis to draw water out of microbial cells, preventing bacterial decay and preserving food without refrigeration.",
      "objectives": [
        "Differentiate between light microscopes and electron microscopes in magnification and resolution",
        "Compare the ultrastructure and organelles of plant and animal cells with clear labeled drawings",
        "Explain how specialized cells (red blood cells, root hair cells, xylem vessels) are adapted to their functions",
        "Distinguish between diffusion, osmosis, and active transport with biological examples and experimental demonstrations"
      ],
      "sections": [
        {
          "title": "Cell Specialization & Levels of Biological Organization",
          "content": "Multicellular organisms exhibit division of labour through specialized cells. These cells group together into tissues, tissues organize into organs, organs cooperate within systems, and systems sustain the multicellular organism.",
          "bulletPoints": [
            "Red Blood Cell (Erythrocyte): Biconcave disc shape increases surface area to volume ratio; lacks nucleus to maximize space for hemoglobin; flexible to squeeze through narrow capillaries.",
            "Root Hair Cell: Slender cytoplasmic projection maximizes surface area for water and mineral ion uptake; high solute concentration in sap maintains osmotic gradient.",
            "Xylem Vessel: Dead hollow tubes with lignified walls provide mechanical support and enable uninterrupted transpiration pull of water and mineral salts.",
            "Hierarchy: Epithelial cell → Epithelial tissue → Stomach (organ) → Digestive system → Human (organism)."
          ],
          "keyTakeaway": "Cell structure is intimately adapted to its specialized physiological role in the multicellular organism.",
          "realWorldExample": "In cocoa seedlings across the Eastern and Ashanti regions, root hair density determines seedling drought resistance during dry Harmattan spells."
        },
        {
          "title": "Osmosis in Plant and Animal Cells: Turgor, Plasmolysis & Crenation",
          "content": "Water moves into or out of cells depending on the osmotic potential of the surrounding medium (hypotonic, hypertonic, or isotonic).",
          "bulletPoints": [
            "Plant cells in pure water (hypotonic): Water enters by osmosis; vacuole swells pushing protoplast against cell wall; cell wall exerts opposing pressure; cell becomes turgid (crucial for supporting non-woody herbaceous stems).",
            "Plant cells in concentrated salt/sugar solution (hypertonic): Water leaves vacuole; cytoplasm shrinks away from cell wall; cell becomes flaccid and undergoes plasmolysis.",
            "Animal cells in pure water: Water enters; lacking a cell wall, the cell swells and bursts (lysis / hemolysis in RBCs).",
            "Animal cells in concentrated solution: Water leaves; cell shrinks and shrivels (crenation)."
          ],
          "keyTakeaway": "The rigid cellulose cell wall prevents plant cells from bursting in hypotonic environments, generating turgor pressure that supports plant upright posture.",
          "realWorldExample": "Wilting of fresh garden eggs or lettuce leaves when exposed to dry warm air is caused by loss of turgor pressure through water evaporation."
        }
      ],
      "wassceExamTips": [
        "In biological drawings for WAEC, use sharp HB pencils, do not shade, keep label lines horizontal and straight with a ruler, and always specify the magnification (e.g. ×400).",
        "When defining osmosis, you MUST mention: \"movement of water molecules\", \"region of higher water potential to lower water potential\", and \"through a selectively permeable membrane\" to obtain full marks (M1, A1).",
        "Never state that water moves from \"a concentrated solution to a dilute solution\" - that will lose all definition marks."
      ],
      "commonMistakes": [
        "Stating that animal cells become turgid (animal cells lack cell walls and burst instead).",
        "Confusing diffusion (does not require a semi-permeable membrane) with osmosis.",
        "Drawing arrowheads on label lines in biological diagrams."
      ],
      "summaryChecklist": [
        "Can I list 4 distinct differences between plant and animal cells?",
        "Can I describe the procedure for observing onion epidermal cells under a light microscope?",
        "Can I define plasmolysis and explain how it can be reversed (deplasmolysis)?",
        "Can I explain why marine fish perish when placed in freshwater streams?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-cell-1",
        "title": "Osmosis Potato Osmoscope Experiment",
        "problem": "A peeled potato cylinder of initial length 50.0 mm and mass 12.0 g is placed in a 20% sucrose solution for 4 hours. Explain the expected changes in: (a) Length and mass of the cylinder. (b) Texture of the tissue. (c) The physiological mechanism responsible.",
        "stepByStepSolution": [
          "Step 1: Compare water potentials: 20% sucrose solution has a lower water potential (hypertonic) compared to the potato cell sap. [M1]",
          "Step 2: Water leaves potato cells into the sucrose solution by osmosis across the selectively permeable cell membranes. [M1]",
          "Step 3: Expected changes: Length decreases (< 50.0 mm) and mass decreases (< 12.0 g) due to net water loss. [A1]",
          "Step 4: Texture becomes soft, limp, and flaccid because cells have lost turgor pressure and become plasmolysed. [A1]"
        ],
        "keyTakeaway": "In hypertonic external solutions, plant tissues lose mass, shrink in dimension, and become limp due to exosmosis."
      },
      {
        "id": "ex-shs1-sci-cell-2",
        "title": "Microscope Magnification Calculation",
        "problem": "A student observes an epidermal cell under a light microscope using an eyepiece lens marked ×10 and an objective lens marked ×40. If the measured image length of the cell on the drawing paper is 60 mm, calculate: (a) Total magnification of the microscope. (b) Actual size of the cell in micrometers (μm).",
        "stepByStepSolution": [
          "Step 1: Total Magnification = Eyepiece Magnification × Objective Magnification = 10 × 40 = ×400. [A1]",
          "Step 2: Use the magnification formula: Actual size = Image size / Magnification. [M1]",
          "Step 3: Convert image size to micrometers: 60 mm = 60 × 1,000 μm = 60,000 μm.",
          "Step 4: Actual size = 60,000 μm / 400 = 150 μm (or 0.15 mm). [A1]"
        ],
        "keyTakeaway": "Total magnification equals eyepiece power multiplied by objective power; always convert measurements to consistent units before computing actual dimensions."
      }
    ]
  },
  {
    "id": "shs1-sci-t1-particulate-nature-matter",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 3,
    "title": "Particulate Nature of Matter & Physical States",
    "description": "Kinetic theory of matter, states of matter (solids, liquids, gases), Brownian motion, diffusion, and phase changes (melting, vaporization, condensation, freezing, sublimation).",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=npv74D2MO60",
    "youtubeId": "npv74D2MO60",
    "keyNotes": "• Kinetic Theory of Matter:\n  - All matter is composed of tiny, discrete particles (atoms, molecules, or ions) in constant, continuous, random motion.\n  - The temperature of a substance is a direct measure of the average kinetic energy of its particles.\n  - Intermolecular forces of attraction pull particles together, while kinetic energy drives them apart.\n• The Three States of Matter:\n  - Solids: Fixed shape and volume; particles closely packed in regular crystalline lattice; vibrate about fixed positions; strong intermolecular forces; incompressible.\n  - Liquids: Definite volume but no fixed shape (takes shape of container); particles closely packed but can slide over one another; moderate intermolecular forces; virtually incompressible.\n  - Gases: Neither definite shape nor volume (fills entire container); particles far apart and move rapidly in straight lines colliding elastically; negligible intermolecular forces; highly compressible.\n• Evidence for Particulate Nature:\n  - Brownian Motion: Random, haphazard, zigzag motion of suspended microscopic particles (e.g. smoke particles in air, pollen grains in water) caused by unequal bombardment by invisible, fast-moving fluid molecules.\n  - Diffusion: Spontaneous spreading and intermingling of particles from high to low concentration (e.g. scent of perfume spreading across a room, KMnO₄ crystals dissolving in water). Graham’s Law: Lighter gas molecules diffuse faster than heavier gas molecules.\n• Phase Changes & Latent Energy:\n  - Melting: Solid → Liquid (energy absorbed to overcome lattice forces).\n  - Boiling / Vaporization: Liquid → Gas throughout liquid at fixed boiling point.\n  - Evaporation: Liquid → Gas occurring only at the surface at any temperature.\n  - Sublimation: Solid → Gas directly without passing through liquid state (e.g. iodine, camphor, ammonium chloride, dry ice CO₂).\n  - Condensation: Gas → Liquid (energy released).\n  - Freezing: Liquid → Solid (energy released).",
    "detailedNotes": {
      "introduction": "The particulate theory of matter explains macroscopic properties (density, compressibility, pressure, temperature) through the microscopic kinetic behaviour and arrangement of atoms and molecules. This forms the foundation of physical chemistry and thermal physics.",
      "realWorldContext": "In traditional Ghanaian charcoal coolers used to preserve vegetables in rural farming communities, water evaporates from moist sack walls, absorbing latent heat of vaporization from the interior and keeping produce cool and fresh.",
      "objectives": [
        "State the fundamental assumptions of the kinetic theory of matter",
        "Compare the arrangement, motion, and forces between particles in solids, liquids, and gases",
        "Explain Brownian motion and diffusion as conclusive evidence for the particulate nature of matter",
        "Interpret heating and cooling curves and explain latent heat in phase changes"
      ],
      "sections": [
        {
          "title": "Brownian Motion & The Smoke Cell Experiment",
          "content": "First observed by Robert Brown in 1827 with pollen grains, Brownian motion provides direct visual evidence that fluid molecules are in ceaseless, chaotic motion.",
          "bulletPoints": [
            "Apparatus: A small glass cell containing illuminated smoke particles viewed through a high-power microscope.",
            "Observation: Bright specks of light darting in an irregular, zigzag, haphazard pathway.",
            "Explanation: The smoke particles are constantly and unevenly bombarded from all directions by invisible, rapidly moving air molecules.",
            "Effect of temperature: Heating the cell increases the kinetic energy and average velocity of air molecules, making Brownian motion more rapid and vigorous."
          ],
          "keyTakeaway": "Brownian motion proves the existence of invisible moving particles that continuously collide with larger visible microscopic bodies.",
          "realWorldExample": "Dust specks dancing erratically across a sunbeam entering a darkened classroom illustrate Brownian motion in air."
        },
        {
          "title": "Evaporation vs Boiling & The Cooling Effect",
          "content": "While both evaporation and boiling convert liquids into gases, their operating mechanisms differ in critical thermodynamic aspects.",
          "bulletPoints": [
            "Evaporation occurs only at the liquid surface, at any temperature below the boiling point, without forming visible bubbles.",
            "Boiling occurs throughout the entire body of the liquid at a fixed temperature (boiling point) where vapor pressure equals atmospheric pressure, forming bubbles.",
            "Cooling Effect: During evaporation, only molecules with the highest kinetic energy escape the liquid surface. The average kinetic energy of the remaining liquid molecules decreases, causing temperature to drop."
          ],
          "keyTakeaway": "Evaporation causes cooling because high-energy molecules escape, leaving behind molecules with lower average kinetic energy.",
          "realWorldExample": "Spraying lavender water or methylated spirit on the forehead of a feverish patient in a clinic cools the skin rapidly by evaporation."
        }
      ],
      "wassceExamTips": [
        "When sketching a heating curve, ensure the plateau lines (melting point and boiling point) are completely flat/horizontal, indicating that temperature remains constant while latent heat is absorbed.",
        "Distinguish between evaporation and boiling: WAEC frequently awards 3 marks for giving 3 clear differences (surface vs throughout, any temp vs fixed temp, no bubbles vs bubbling).",
        "List at least two substances that sublime: Iodine and Ammonium chloride (NH₄Cl) are top WAEC answers."
      ],
      "commonMistakes": [
        "Believing that smoke particles move because they are alive or burning; they move due to collisions by air molecules.",
        "Stating that temperature rises during a phase change; temperature stays strictly constant until the phase transition is complete.",
        "Confusing gas with vapor; vapor is the gaseous state of a substance that is normally a liquid or solid at room temperature."
      ],
      "summaryChecklist": [
        "Can I describe the smoke cell experiment and state its observation and conclusion?",
        "Can I list 3 distinct differences between boiling and evaporation?",
        "Can I explain why wet clothes dry faster on a windy, warm, dry day?",
        "Can I draw and label a heating curve for ice transitioning to steam?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-matter-1",
        "title": "Diffusion of Ammonia and Hydrogen Chloride Gases",
        "problem": "In a classic laboratory demonstration, cotton wool soaked in concentrated ammonia solution (NH₃, molar mass = 17 g/mol) is placed at one end of a long glass tube, and cotton wool soaked in concentrated hydrochloric acid (HCl, molar mass = 36.5 g/mol) is placed at the opposite end. Both ends are stoppered simultaneously. (a) State what is observed inside the tube. (b) Explain the position where the observation occurs. (c) Write the chemical equation for the reaction.",
        "stepByStepSolution": [
          "Step 1: Observation: A dense white ring/cloud of ammonium chloride (NH₄Cl) forms inside the tube. [B1]",
          "Step 2: Position: The white ring forms closer to the HCl end of the tube, rather than at the midpoint. [B1]",
          "Step 3: Explanation: By Graham’s law of diffusion, the rate of diffusion of a gas is inversely proportional to the square root of its molar mass. [M1]",
          "Step 4: NH₃ (17 g/mol) is lighter and diffuses faster than the heavier HCl gas (36.5 g/mol). Thus, NH₃ travels a greater distance in the same time. [A1]",
          "Step 5: Equation: NH₃(g) + HCl(g) → NH₄Cl(s). [A1]"
        ],
        "keyTakeaway": "Gases with lower molecular masses diffuse faster than denser gases under identical temperature and pressure conditions."
      },
      {
        "id": "ex-shs1-sci-matter-2",
        "title": "Interpreting a Cooling Curve",
        "problem": "A pure liquid substance is allowed to cool from 100°C to room temperature (25°C). The temperature drops steadily until 65°C, remains steady at 65°C for 6 minutes, and then continues dropping to 25°C. (a) What is the melting/freezing point of the substance? (b) Explain why temperature remained constant for 6 minutes. (c) What physical states exist at 65°C?",
        "stepByStepSolution": [
          "Step 1: Freezing point = 65°C (the temperature of the horizontal plateau). [A1]",
          "Step 2: The temperature remains constant because latent heat of fusion is being released as particles form crystalline lattice bonds, exactly counteracting heat loss to the surroundings. [M1, A1]",
          "Step 3: During the 6-minute transition at 65°C, both liquid and solid states coexist in equilibrium. [A1]"
        ],
        "keyTakeaway": "During solidification, latent heat is released as bonds form, keeping the temperature constant until the entire liquid has frozen."
      }
    ]
  },
  {
    "id": "shs1-sci-t1-atomic-structure-periodicity",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 4,
    "title": "Atomic Structure, Isotopy & Periodic Classification",
    "description": "Subatomic particles (protons, neutrons, electrons), atomic number, mass number, isotopes, electron configuration (first 20 elements), groups, periods, and periodic trends (atomic radius, electronegativity, ionization energy).",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=FSyAehMdpyI",
    "youtubeId": "FSyAehMdpyI",
    "keyNotes": "• Subatomic Particles:\n  - Proton (p⁺): Relative mass = 1, Charge = +1, located in central dense nucleus.\n  - Neutron (n⁰): Relative mass = 1, Charge = 0, located in central dense nucleus.\n  - Electron (e⁻): Relative mass = 1/1840 (negligible), Charge = -1, orbits nucleus in discrete energy levels (shells).\n• Atomic Notations:\n  - Atomic Number (Z) = Number of protons in the nucleus = Number of electrons in a neutral atom.\n  - Mass Number / Nucleon Number (A) = Number of protons + Number of neutrons.\n  - Neutrons (n) = A - Z.\n  - Standard notation: ᴬ_Z X.\n• Isotopes & Relative Atomic Mass (RAM):\n  - Isotopes are atoms of the same element having the same atomic number (protons) but different mass numbers (neutrons).\n  - Examples: ³⁵Cl and ³⁷Cl; ¹²C, ¹³C, and ¹⁴C; ¹H (protium), ²H (deuterium), ³H (tritium).\n  - RAM = ∑(Isotopic mass × % abundance) / 100.\n• Electronic Configuration (Bohr Model):\n  - Shell capacities: K shell (n=1) holds max 2 electrons; L shell (n=2) holds max 8; M shell (n=3) holds max 8 (for first 20 elements).\n  - Calcium (Z=20): 2, 8, 8, 2.\n• Periodic Table Structure:\n  - Periods (rows 1-7): Number of occupied electron shells.\n  - Groups (columns I-VIII/0): Number of valence (outermost) electrons.\n  - Group I (Alkali Metals): Li, Na, K - very reactive metals, 1 valence electron, form +1 ions.\n  - Group II (Alkaline Earth Metals): Be, Mg, Ca - 2 valence electrons, form +2 ions.\n  - Group VII (Halogens): F, Cl, Br, I - reactive non-metals, 7 valence electrons, form -1 halide ions.\n  - Group VIII/0 (Noble Gases): He, Ne, Ar - complete octet/duplet, chemically unreactive / inert.",
    "detailedNotes": {
      "introduction": "Atomic structure is the foundational key that unlocks the behavior of all matter. In this topic, students learn the subatomic composition of atoms, master electron configuration, and discover how the periodic table organizes elements by recurring physical and chemical trends.",
      "realWorldContext": "In Ghana, nuclear medicine at the National Centre for Radiotherapy and Nuclear Medicine (Korle-Bu Teaching Hospital) uses radioactive isotopes such as Iodine-131 to treat thyroid cancer and Cobalt-60 for tumor irradiation.",
      "objectives": [
        "Describe the properties and locations of protons, neutrons, and electrons within the atom",
        "Calculate mass numbers, atomic numbers, neutron counts, and relative atomic mass from isotopic abundances",
        "Write electronic configurations for the first 20 elements using the 2,8,8 notation",
        "Explain periodic trends across periods and down groups (atomic radius, ionization energy, electronegativity)"
      ],
      "sections": [
        {
          "title": "Periodic Trends Down Groups and Across Periods",
          "content": "The chemical reactivity and physical properties of elements vary systematically based on nuclear charge and electron shielding.",
          "bulletPoints": [
            "Across a Period (left to right): Nuclear charge (protons) increases while electrons are added to the same shell. Stronger electrostatic attraction pulls electrons inward: Atomic radius decreases; Electronegativity increases; First ionization energy increases.",
            "Down a Group (top to bottom): An additional electron shell is added at each step, increasing electron shielding of outer electrons: Atomic radius increases; Ionization energy decreases; Reactivity of metals increases, while reactivity of halogens decreases.",
            "Noble Gases: Have stable duplet (He: 2) or octet (Ne, Ar: 2,8; 2,8,8) configurations, requiring immense energy to gain or lose electrons, rendering them chemically inert."
          ],
          "keyTakeaway": "Atomic radius decreases across a period due to increasing nuclear charge pulling electrons closer, and increases down a group due to additional electron shells.",
          "realWorldExample": "Sodium metal stored under kerosene must be handled with forceps in high school labs because it reacts violently with moisture on contact."
        },
        {
          "title": "Isotopes & Relative Atomic Mass Calculation",
          "content": "Elements exist naturally as mixtures of isotopes. The relative atomic mass shown on the periodic table is a weighted average reflecting natural isotopic abundance.",
          "bulletPoints": [
            "Chlorine exists as 75% ³⁵Cl and 25% ³⁷Cl. Its RAM is 35.5, which is why atomic masses are not always whole numbers.",
            "Carbon-12 is the international standard against which all atomic masses are compared (defined as exactly 12.000 atomic mass units).",
            "Chemical properties of isotopes are identical because they have the same number of valence electrons; physical properties (density, boiling point) differ slightly due to mass difference."
          ],
          "keyTakeaway": "Isotopes share identical chemical reactivity because chemical bonding depends solely on valence electrons, not neutron mass.",
          "realWorldExample": "Radiocarbon dating of wooden artifacts from the ancient Ashanti Empire relies on the steady radioactive decay of Carbon-14."
        }
      ],
      "wassceExamTips": [
        "When writing electronic configurations, never write commas as dots; use commas (e.g. 2, 8, 8, 1).",
        "When asked why isotopes have identical chemical properties, the WAEC marking key expects: \"They have the same number of valence electrons / same electronic configuration\".",
        "Distinguish clearly between mass number (whole integer for a single atom) and relative atomic mass (weighted average, often fractional)."
      ],
      "commonMistakes": [
        "Confusing atomic number (protons) with mass number (protons + neutrons).",
        "Writing that isotopes have different numbers of protons (which would make them completely different elements).",
        "Placing more than 8 electrons in the second or third energy level for elements up to Calcium."
      ],
      "summaryChecklist": [
        "Can I calculate the relative atomic mass given isotopic percentages?",
        "Can I write the electronic configuration for any element from Hydrogen (1) to Calcium (20)?",
        "Can I deduce the Group and Period of an element directly from its electronic configuration?",
        "Can I explain why atomic radius decreases from Sodium to Chlorine across Period 3?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-atom-1",
        "title": "Calculating Relative Atomic Mass of Chlorine",
        "problem": "Naturally occurring chlorine consists of two isotopes: 75.77% of ³⁵₁₇Cl with an isotopic mass of 34.97 amu, and 24.23% of ³⁷₁₇Cl with an isotopic mass of 36.97 amu. Calculate the relative atomic mass of chlorine to two decimal places.",
        "stepByStepSolution": [
          "Step 1: State the formula: RAM = ∑(Mass × % Abundance) / 100. [M1]",
          "Step 2: Substitute values: RAM = [(34.97 × 75.77) + (36.97 × 24.23)] / 100. [M1]",
          "Step 3: Calculate products: (2649.68 + 895.78) / 100.",
          "Step 4: Sum = 3545.46 / 100 = 35.4546. [M1]",
          "Step 5: Round to 2 decimal places: RAM = 35.45 (or 35.5). [A1]"
        ],
        "keyTakeaway": "Relative atomic mass is a weighted average and reflects both the mass and natural percentage abundance of all stable isotopes."
      },
      {
        "id": "ex-shs1-sci-atom-2",
        "title": "Deducing Group, Period and Ion from Configuration",
        "problem": "An atom of an element Y has 19 protons and 20 neutrons. (a) Write its mass number and atomic symbol. (b) Write its electronic configuration. (c) State its group and period in the periodic table. (d) Predict the formula and charge of the ion formed by Y.",
        "stepByStepSolution": [
          "Step 1: Mass number A = Protons + Neutrons = 19 + 20 = 39. Symbol = ³⁹₁₉Y (Potassium, K). [A1]",
          "Step 2: Electronic configuration (19 electrons) = 2, 8, 8, 1. [A1]",
          "Step 3: Period = 4 (since it has 4 occupied electron shells). [B1]",
          "Step 4: Group = I (since it has 1 valence electron in its outermost shell). [B1]",
          "Step 5: Ion formation: Y loses its single outer electron to attain a stable octet (2,8,8), forming the cation Y⁺. [A1]"
        ],
        "keyTakeaway": "The number of shells determines the period; the number of valence electrons determines the periodic group and ionic charge."
      }
    ]
  },
  {
    "id": "shs1-sci-t1-chemical-bonding-formulas",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 5,
    "title": "Chemical Bonding, Formulas & Chemical Equations",
    "description": "Ionic (electrovalent) bonding, covalent bonding, metallic bonding, writing chemical formulas using valency, balancing chemical equations, and physical properties of bonded substances.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=CGA8sRwqIFg",
    "youtubeId": "CGA8sRwqIFg",
    "keyNotes": "• Octet Rule & Driving Force of Bonding:\n  - Atoms gain, lose, or share valence electrons to achieve a stable electronic configuration with a full valence shell (octet of 8, or duplet of 2 like helium).\n• Types of Chemical Bonds:\n  - Ionic / Electrovalent Bond: Electrostatic attraction between oppositely charged ions formed by complete transfer of electrons from a metal (cation) to a non-metal (anion). E.g. NaCl, MgO, CaCl₂.\n  - Covalent Bond: Formed when pairs of electrons are shared between two non-metal atoms. E.g. H₂O, CO₂, CH₄, NH₃, Cl₂.\n  - Coordinate / Dative Covalent: One atom donates both electrons of the shared pair (e.g. NH₄⁺, H₃O⁺).\n  - Metallic Bond: Strong electrostatic attraction between a lattice of positive metal ions (cations) and a mobile sea of delocalized valence electrons.\n• Physical Properties by Bond Type:\n  - Ionic: Giant ionic lattice, high melting/boiling points, soluble in water, conduct electricity when molten or aqueous (free mobile ions), non-conductors when solid.\n  - Simple Covalent: Low melting/boiling points (weak intermolecular forces), non-conductors of electricity (no free ions or mobile electrons), insoluble in water, soluble in organic solvents.\n  - Giant Covalent: Diamond, graphite, SiO₂. Very high melting points. Graphite conducts electricity (delocalized electrons between hexagonal layers).\n  - Metallic: High electrical and thermal conductivity (delocalized electrons), malleable (can be hammered into sheets), ductile (can be drawn into wires).\n• Writing Formulas & Balancing Equations:\n  - Criss-cross valency method: Aluminum (valency 3) + Oxygen (valency 2) → Al₂O₃.\n  - Law of Conservation of Mass: Total number of atoms of each element on reactants side must equal products side.",
    "detailedNotes": {
      "introduction": "Chemical bonding explains how the 118 known elements combine to form millions of diverse compounds. Mastery of ionic, covalent, and metallic bonding enables students to deduce chemical formulas, balance stoichiometric reactions, and understand material properties in industry.",
      "realWorldContext": "In Ghana, the extraction of gold at Obuasi and Tarkwa relies on sodium cyanide (an ionic compound) to dissolve gold, while aluminum smelting at VALCO (Tema) harnesses the electrical conductivity of molten cryolite (Na₃AlF₆) to produce metallic aluminum.",
      "objectives": [
        "Explain ionic, covalent, and metallic bonding using dot-and-cross Lewis diagrams",
        "Compare the physical properties of ionic, simple molecular, giant covalent, and metallic substances",
        "Write chemical formulas of binary compounds and radical compounds using valency rules",
        "Balance chemical equations and state symbols (s, l, g, aq) accurately"
      ],
      "sections": [
        {
          "title": "Ionic vs Covalent Bonding: Formation & Dot-and-Cross Diagrams",
          "content": "The electronegativity difference between combining atoms determines whether electrons are completely transferred (ionic) or shared (covalent).",
          "bulletPoints": [
            "Formation of NaCl: Sodium (2,8,1) transfers 1 electron to Chlorine (2,8,7). Forms Na⁺ [2,8] and Cl⁻ [2,8,8]. Both attain noble gas structures held by strong ionic attraction.",
            "Formation of H₂O: Oxygen (2,6) shares two pairs of electrons with two Hydrogen atoms (1), forming two single covalent O-H bonds with two lone pairs on oxygen.",
            "Double and Triple Bonds: O₂ shares two pairs (O=O); N₂ shares three pairs (N≡N), giving molecular nitrogen immense chemical stability."
          ],
          "keyTakeaway": "Metals lose electrons to form cations; non-metals gain electrons to form anions in ionic bonds. Non-metals share electrons in covalent bonds.",
          "realWorldExample": "Table salt (NaCl) mined at the Ada Songor lagoon forms hard crystalline cubes because of the rigid alternating 3D ionic lattice of Na⁺ and Cl⁻ ions."
        },
        {
          "title": "Balancing Chemical Equations & Radicals",
          "content": "Chemical equations reflect the Law of Conservation of Mass: matter cannot be created or destroyed in chemical reactions.",
          "bulletPoints": [
            "Common Polyatomic Radicals: Ammonium (NH₄⁺), Hydroxide (OH⁻), Nitrate (NO₃⁻), Carbonate (CO₃²⁻), Sulfate (SO₄²⁻), Phosphate (PO₄³⁻).",
            "Rules for balancing: Never change subscripts in a chemical formula; only alter stoichiometric balancing coefficients in front of formulas.",
            "Always inspect and balance elements in order: Metals first, then non-metals, then hydrogen, and oxygen last."
          ],
          "keyTakeaway": "Chemical coefficients balance atom counts; chemical subscripts define molecular identities and must never be altered.",
          "realWorldExample": "When baking soda (NaHCO₃) is heated in bread making in bakeries, it decomposes into sodium carbonate, water vapor, and carbon dioxide gas, causing dough to rise."
        }
      ],
      "wassceExamTips": [
        "In dot-and-cross diagrams, use dots (•) for electrons of one atom and crosses (×) for the other to distinguish their origins clearly.",
        "Always include state symbols [ (s), (l), (g), (aq) ] when requested by WAEC questions; omitting them costs A1 marks.",
        "Remember that graphite conducts electricity because each carbon atom forms only 3 covalent bonds, leaving 1 delocalized electron per carbon atom."
      ],
      "commonMistakes": [
        "Attempting to balance equations by changing chemical formula subscripts (e.g. changing H₂O to H₂O₂).",
        "Stating that solid NaCl conducts electricity (in solids, ions are held rigidly in the lattice and cannot move).",
        "Forgetting parentheses when multiplying polyatomic radicals (e.g. writing CaOH₂ instead of Ca(OH)₂)."
      ],
      "summaryChecklist": [
        "Can I draw dot-and-cross diagrams for NaCl, MgO, H₂O, and CH₄?",
        "Can I write the correct formula for Aluminum Sulfate [Al₂(SO₄)₃] using valency?",
        "Can I balance the combustion equation of propane: C₃H₈ + O₂ → CO₂ + H₂O?",
        "Can I explain why diamond does not conduct electricity whereas graphite does?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-bond-1",
        "title": "Writing Chemical Formulas Using Valency",
        "problem": "Write the chemical formulas for: (a) Calcium phosphate. (b) Iron(III) oxide. (c) Ammonium carbonate.",
        "stepByStepSolution": [
          "Step 1: Calcium phosphate: Calcium ion is Ca²⁺ (valency 2); Phosphate ion is PO₄³⁻ (valency 3). [M1]",
          "Criss-cross valencies: Ca₃(PO₄)₂. [A1]",
          "Step 2: Iron(III) oxide: Iron(III) is Fe³⁺ (valency 3); Oxide ion is O²⁻ (valency 2). [M1]",
          "Criss-cross valencies: Fe₂O₃. [A1]",
          "Step 3: Ammonium carbonate: Ammonium is NH₄⁺ (valency 1); Carbonate is CO₃²⁻ (valency 2).",
          "Criss-cross valencies: (NH₄)₂CO₃. [A1]"
        ],
        "keyTakeaway": "When a polyatomic radical occurs more than once in a formula, enclose it in brackets before appending the subscript."
      },
      {
        "id": "ex-shs1-sci-bond-2",
        "title": "Balancing a Complex Chemical Equation",
        "problem": "Balance the following chemical equation and include state symbols: Al(s) + H₂SO₄(aq) → Al₂(SO₄)₃(aq) + H₂(g).",
        "stepByStepSolution": [
          "Step 1: Count atoms on both sides: Left: Al=1, H=2, SO₄=1. Right: Al=2, H=2, SO₄=3. [M1]",
          "Step 2: Balance Aluminum by placing coefficient 2 before Al: 2Al + H₂SO₄ → Al₂(SO₄)₃ + H₂.",
          "Step 3: Balance Sulfate radicals by placing coefficient 3 before H₂SO₄: 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + H₂. [M1]",
          "Step 4: Now Left has 3 × 2 = 6 H atoms. Balance Hydrogen on the right by placing 3 before H₂: 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂. [M1]",
          "Step 5: Add state symbols: 2Al(s) + 3H₂SO₄(aq) → Al₂(SO₄)₃(aq) + 3H₂(g). [A1]"
        ],
        "keyTakeaway": "Treat intact polyatomic radicals as single units when balancing chemical equations to streamline the process."
      }
    ]
  },
  {
    "id": "shs1-sci-t2-motion-force-newton",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 6,
    "title": "Linear Motion, Forces & Newton’s Laws of Motion",
    "description": "Distance, displacement, speed, velocity, uniform acceleration, graphical analysis of motion, Newton’s three laws of motion, momentum, friction, and circular motion basics.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=kKKM8Y-u7ds",
    "youtubeId": "kKKM8Y-u7ds",
    "keyNotes": "• Kinematic Definitions:\n  - Distance (scalar, m): Total path length traversed.\n  - Displacement (vector, m): Shortest straight-line distance from start to finish in a specified direction.\n  - Speed (scalar, m/s) = Distance / Time.\n  - Velocity (vector, m/s) = Displacement / Time.\n  - Acceleration (vector, m/s²) = Rate of change of velocity = (v - u) / t.\n• Equations of Uniformly Accelerated Linear Motion:\n  1. v = u + at\n  2. s = ut + (1/2)at²\n  3. v² = u² + 2as\n  4. s = [(u + v) / 2] × t\n  (Where u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement).\n• Graphical Representation:\n  - Distance-Time Graph: Gradient = Speed.\n  - Velocity-Time Graph: Gradient = Acceleration. Area under the curve = Distance / Displacement traveled.\n• Newton’s Laws of Motion:\n  - First Law (Law of Inertia): An object continues in its state of rest or uniform motion in a straight line unless compelled to change that state by an external net unbalanced force.\n  - Second Law: The rate of change of momentum is directly proportional to the applied force and acts in the direction of the force: F = m × a.\n  - Third Law: To every action force, there is an equal and opposite reaction force (F_action = -F_reaction).\n• Momentum & Impulse:\n  - Linear Momentum p = mass × velocity (kg·m/s).\n  - Principle of Conservation of Linear Momentum: In a closed system, total momentum before collision equals total momentum after collision (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).\n• Friction:\n  - Opposing force that resists relative motion between surfaces in contact. Limiting static friction > Dynamic kinetic friction.",
    "detailedNotes": {
      "introduction": "Classical mechanics underpins all physical engineering and vehicular transport. In this topic, students analyze motion mathematically, interpret motion graphs, and apply Newton’s fundamental laws of motion to collisions, vehicle safety, and everyday forces.",
      "realWorldContext": "On the Accra-Tema Motorway, vehicle braking distances depend quadratically on velocity (v² = u² + 2as). Doubling speed quadruples the stopping distance, explaining why road safety campaigns emphasize speed limits to prevent fatal rear-end collisions.",
      "objectives": [
        "Differentiate between scalar and vector quantities in kinematics",
        "Solve multi-step problems using the four equations of uniformly accelerated motion",
        "Interpret velocity-time graphs to calculate acceleration and total distance traveled",
        "State and apply Newton’s three laws of motion and solve linear momentum collision problems"
      ],
      "sections": [
        {
          "title": "Velocity-Time Graphs & Motion Analysis",
          "content": "Velocity-time graphs provide complete kinematic histories of journeys. The slope gives instantaneous acceleration, and the geometric area beneath represents distance covered.",
          "bulletPoints": [
            "Horizontal straight line: Constant velocity (zero acceleration).",
            "Straight sloping line upwards: Constant uniform acceleration.",
            "Straight sloping line downwards: Constant uniform deceleration / retardation.",
            "Area calculations: Break complex graphs into rectangles (length × width) and triangles (1/2 × base × height), or a single trapezium [1/2 × (a + b) × h]."
          ],
          "keyTakeaway": "Slope of v-t graph = acceleration; Area under v-t graph = distance traveled.",
          "realWorldExample": "A trotro accelerating away from a bus stop at Circle, cruising at 60 km/h, and braking at traffic lights produces a classic trapezoidal velocity-time graph."
        },
        {
          "title": "Newton’s Second Law, Momentum & Impulse",
          "content": "Force changes momentum over time. Impulse (Force × time) equals the change in momentum (m(v - u)).",
          "bulletPoints": [
            "Vehicle Safety Features: Crumple zones, seat belts, and airbags increase the impact collision time (Δt), drastically reducing the impact force (F = Δp / Δt) experienced by passengers.",
            "Inelastic vs Elastic Collisions: In elastic collisions, both kinetic energy and momentum are conserved. In inelastic collisions (e.g. two cars locking bumpers), kinetic energy is converted into heat and sound, but total momentum is still conserved."
          ],
          "keyTakeaway": "Increasing impact duration reduces the peak force exerted on a body during sudden deceleration.",
          "realWorldExample": "Goalkeepers at the Accra Sports Stadium cushion the ball by pulling their arms backward as they catch it, increasing collision time and reducing impact force on their palms."
        }
      ],
      "wassceExamTips": [
        "When calculating deceleration from a graph, remember that deceleration is positive retardation; if writing acceleration, include the negative sign (e.g. a = -2.5 m/s² or deceleration = 2.5 m/s²).",
        "In momentum conservation equations, assign vector direction signs (+ for right/east, - for left/west).",
        "Always state the equations of motion clearly before substituting numerical figures."
      ],
      "commonMistakes": [
        "Confusing mass (scalar, kg, constant everywhere) with weight (vector force, N, changes with gravity: W = mg).",
        "Using distance = speed × time when acceleration is present (that formula only applies to constant velocity).",
        "Forgetting to convert time in minutes to seconds before calculating acceleration."
      ],
      "summaryChecklist": [
        "Can I state Newton’s three laws of motion accurately in formal scientific prose?",
        "Can I calculate total distance by computing the area under a trapezoidal velocity-time graph?",
        "Can I solve a collision problem using m₁u₁ + m₂u₂ = (m₁ + m₂)v for two bodies coalescing together?",
        "Can I explain the physics behind seat belts and airbags using impulse and momentum?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-mot-1",
        "title": "Trapezoidal Velocity-Time Graph Analysis",
        "problem": "A bus starts from rest and accelerates uniformly at 2.0 m/s² for 10 seconds until it reaches top speed. It maintains this constant speed for 40 seconds, then decelerates uniformly to rest in 15 seconds. Calculate: (a) The maximum speed reached. (b) The deceleration during the final phase. (c) The total distance traveled by the bus.",
        "stepByStepSolution": [
          "Step 1: Calculate max speed using v = u + at: v = 0 + (2.0 × 10) = 20 m/s. [A1]",
          "Step 2: Deceleration = (v - u) / t = (0 - 20) / 15 = -1.33 m/s². Deceleration = 1.33 m/s². [A1]",
          "Step 3: Total time of journey = 10 + 40 + 15 = 65 seconds.",
          "Step 4: Duration of constant speed = 40 seconds.",
          "Step 5: The graph forms a trapezium with parallel sides a = 40 s and b = 65 s, height h = 20 m/s. [M1]",
          "Step 6: Area = (1/2) × (a + b) × h = (1/2) × (40 + 65) × 20 = (1/2) × 105 × 20 = 1,050 meters. [A1]"
        ],
        "keyTakeaway": "The total distance under any multi-stage linear journey is found rapidly using the area of a trapezium: (1/2)(a + b)h."
      },
      {
        "id": "ex-shs1-sci-mot-2",
        "title": "Conservation of Linear Momentum",
        "problem": "A car of mass 1,000 kg traveling at 25 m/s collides with a stationary truck of mass 4,000 kg. After collision, the two vehicles lock bumpers and move together as a single body. Calculate their common final velocity immediately after the collision.",
        "stepByStepSolution": [
          "Step 1: State the principle of conservation of momentum: Total momentum before = Total momentum after. [B1]",
          "Step 2: Formula: m₁u₁ + m₂u₂ = (m₁ + m₂)v. [M1]",
          "Step 3: Substitute given parameters: (1,000 × 25) + (4,000 × 0) = (1,000 + 4,000) × v. [M1]",
          "Step 4: 25,000 + 0 = 5,000 × v.",
          "Step 5: v = 25,000 / 5,000 = 5.0 m/s in the initial direction of the car. [A1]"
        ],
        "keyTakeaway": "In an inelastic collision where bodies stick together, their combined mass moves with a reduced common velocity."
      }
    ]
  },
  {
    "id": "shs1-sci-t2-work-energy-power",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 7,
    "title": "Work, Energy, Power & Energy Transformations",
    "description": "Work done by a force, forms of energy, kinetic and gravitational potential energy, law of conservation of energy, power calculations, and renewable vs non-renewable energy in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=w4QFJb9a8vo",
    "youtubeId": "w4QFJb9a8vo",
    "keyNotes": "• Work Done:\n  - Work is done when an applied force moves an object through a distance in the direction of the force.\n  - Formula: W = F × s (Joules, J = N·m).\n  - If force is inclined at angle θ: W = F × s × cos θ.\n  - If force produces no displacement (e.g. pushing a stationary concrete wall), Work Done = 0 Joules.\n• Energy & Its Forms:\n  - Energy is the capacity or ability to do work (SI unit: Joule, J).\n  - Kinetic Energy (KE): Energy possessed by a body due to its motion: KE = (1/2)mv².\n  - Gravitational Potential Energy (PE): Energy stored in a body due to its position above the ground in a gravitational field: PE = mgh.\n• Principle of Conservation of Energy:\n  - Energy cannot be created or destroyed; it can only be transformed from one form to another. Total energy in an isolated system remains constant.\n  - Falling object: Loss in Potential Energy = Gain in Kinetic Energy (mgh = (1/2)mv² → v = √(2gh)).\n• Power:\n  - Rate of doing work or rate of energy conversion.\n  - Formula: P = Work / Time = Energy / Time = (F × s) / t = F × v.\n  - SI unit: Watt (W = J/s). 1 kilowatt (kW) = 1,000 W; 1 Horsepower (hp) ≈ 746 W.\n• Energy Resources in Ghana:\n  - Renewable (naturally replenished): Solar, Hydroelectric (Akosombo, Bui), Wind, Biomass/Biogas.\n  - Non-Renewable (finite reserves): Fossil fuels (crude oil from Jubilee field, natural gas from Sankofa, charcoal from logging).",
    "detailedNotes": {
      "introduction": "Work, energy, and power govern all physical transformations in nature and industry. Students master mechanical energy calculations, energy conservation proofs, and examine Ghana’s national energy mix and sustainability transitions.",
      "realWorldContext": "The Akosombo Dam converts gravitational potential energy of Lake Volta water into kinetic energy of rushing water through penstocks, turning hydro-turbines into mechanical rotational energy, which generators convert into electrical energy distributed by GRIDCo.",
      "objectives": [
        "Define work, energy, and power with their respective SI units and formulas",
        "Derive and calculate Kinetic Energy (1/2 mv²) and Gravitational Potential Energy (mgh)",
        "Demonstrate the Law of Conservation of Energy for freely falling bodies and swinging pendulums",
        "Analyze renewable vs non-renewable energy sources and discuss Ghana’s renewable energy targets"
      ],
      "sections": [
        {
          "title": "Mechanical Energy Transformations & Conservation",
          "content": "Mechanical energy is the sum of kinetic and potential energy: E_total = KE + PE = constant (in the absence of air resistance and friction).",
          "bulletPoints": [
            "Simple Pendulum: At highest amplitude points, velocity = 0, so KE = 0 and PE is maximum. At equilibrium midpoint, height is minimum, so PE is minimum and KE (speed) is maximum.",
            "Rollercoaster / Free Fall: As an apple falls from a tree, its potential energy converts continuously into kinetic energy. Just before hitting the ground, all initial PE is converted into KE: v = √(2gh).",
            "Dissipation of Energy: In real systems, friction and air resistance convert some mechanical energy into non-recoverable thermal energy (heat) and sound."
          ],
          "keyTakeaway": "The total mechanical energy remains conserved during free motion; potential energy lost equals kinetic energy gained.",
          "realWorldExample": "Pounding fufu with a pestle involves lifting the wooden pestle (gaining PE = mgh) and accelerating it downward so that KE crushes cassava and plantain in the mortar."
        },
        {
          "title": "Power & Electrical Energy Consumption in Ghana",
          "content": "Power measures how rapidly work is performed or electricity is consumed. Energy billing by ECG uses kilowatt-hours (kWh).",
          "bulletPoints": [
            "Kilowatt-hour (kWh): Commercial unit of electrical energy. 1 kWh = 1,000 W × 3,600 s = 3,600,000 Joules (3.6 MJ).",
            "Energy Efficiency: Energy rating labels (1 to 5 stars) on refrigerators and air conditioners in Ghana signify appliances that perform the same work while drawing less electric power."
          ],
          "keyTakeaway": "Commercial electricity meters measure total energy consumed in kilowatt-hours (kWh), not instantaneous power.",
          "realWorldExample": "Replacing incandescent filament lamps with modern LED bulbs reduces power demand from 60 W to 9 W, lowering monthly household ECG utility bills."
        }
      ],
      "wassceExamTips": [
        "Do not confuse power (Watts) with work/energy (Joules). Writing \"Work done = 50 W\" will cause you to forfeit the final mark.",
        "When using g in calculations, check the examination instructions: WAEC standard is g = 10 m/s² unless explicitly instructed to use 9.8 m/s².",
        "State formulas before substituting numbers: writing W = mgh or KE = 1/2 mv² secures the method mark (M1)."
      ],
      "commonMistakes": [
        "Squaring both mass and velocity in KE = 1/2 mv² instead of squaring only the velocity.",
        "Assuming work is done when a porter carries a load on their head while walking horizontally at constant speed (force is vertical, motion is horizontal, angle θ = 90°, cos 90° = 0, so work done against gravity = 0).",
        "Confusing renewable energy with clean energy (biomass burning is renewable but produces smoke/carbon emissions)."
      ],
      "summaryChecklist": [
        "Can I calculate work done when a force acts at an angle to the displacement?",
        "Can I prove that v = √(2gh) for an object dropped from height h under gravity?",
        "Can I convert 5 kilowatt-hours into Joules?",
        "Can I list 3 advantages and 2 disadvantages of solar energy in Northern Ghana?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-wep-1",
        "title": "Work Done Against Gravity & Power Calculation",
        "problem": "An electric pump lifts 1,200 kg of water from a borehole into an overhead Polytank at a vertical height of 15 meters in 2 minutes. Taking g = 10 m/s², calculate: (a) The work done against gravity. (b) The power output of the pump.",
        "stepByStepSolution": [
          "Step 1: Calculate work done against gravity: W = mgh. [M1]",
          "Step 2: W = 1,200 kg × 10 m/s² × 15 m = 180,000 Joules (180 kJ). [A1]",
          "Step 3: Convert time to seconds: t = 2 minutes = 2 × 60 = 120 seconds. [B1]",
          "Step 4: Calculate power: P = Work / Time = 180,000 J / 120 s. [M1]",
          "Step 5: P = 1,500 Watts (1.5 kW). [A1]"
        ],
        "keyTakeaway": "Always convert time to seconds before computing power in Watts (Joules per second)."
      },
      {
        "id": "ex-shs1-sci-wep-2",
        "title": "Conservation of Mechanical Energy in Free Fall",
        "problem": "A mango of mass 0.5 kg falls from a tree branch 8.0 meters above the ground. Neglecting air resistance and taking g = 10 m/s², calculate: (a) Its gravitational potential energy at the branch. (b) Its velocity just before striking the ground.",
        "stepByStepSolution": [
          "Step 1: Calculate potential energy at height h: PE = mgh = 0.5 kg × 10 m/s² × 8.0 m = 40 Joules. [A1]",
          "Step 2: Apply the Principle of Conservation of Energy: Loss in PE = Gain in KE at ground level. [M1]",
          "Step 3: (1/2)mv² = 40 J → (1/2) × 0.5 × v² = 40.",
          "Step 4: 0.25 × v² = 40 → v² = 40 / 0.25 = 160. [M1]",
          "Step 5: v = √160 ≈ 12.65 m/s. [A1]"
        ],
        "keyTakeaway": "By conservation of energy, the kinetic energy of a freely falling object at ground level equals its initial potential energy at the drop height."
      }
    ]
  },
  {
    "id": "shs1-sci-t2-simple-machines-levers",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 8,
    "title": "Simple Machines, Levers, Pulleys & Mechanical Efficiency",
    "description": "Mechanical Advantage (MA), Velocity Ratio (VR), Efficiency (η), classes of levers (1st, 2nd, 3rd class), inclined planes, wheel and axle, and pulley systems.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=fvOma4m844o",
    "youtubeId": "fvOma4m844o",
    "keyNotes": "• Machine Concepts:\n  - A machine is a device that overcomes a large resisting force (Load) at one point by applying a comparatively smaller force (Effort) at another point.\n  - Mechanical Advantage (MA) = Load / Effort (ratio with no units).\n  - Velocity Ratio (VR) = Distance moved by Effort / Distance moved by Load (ratio with no units).\n  - Work Input = Effort × Distance moved by Effort.\n  - Work Output = Load × Distance moved by Load.\n  - Efficiency (η) = (Work Output / Work Input) × 100% = (MA / VR) × 100%.\n  - Why Efficiency is NEVER 100%: In real machines, work is lost in overcoming friction between moving parts and lifting moving components (e.g. weight of pulleys).\n• Classes of Levers (FLE Rule):\n  - 1st Class (Fulcrum in middle): Effort - Fulcrum - Load. E.g. Crowbar, pair of scissors, see-saw, claw hammer pulling nails. MA can be > 1, = 1, or < 1.\n  - 2nd Class (Load in middle): Fulcrum - Load - Effort. E.g. Wheelbarrow, nutcracker, bottle opener. Load is between fulcrum and effort. MA is always > 1 (force multiplier).\n  - 3rd Class (Effort in middle): Fulcrum - Effort - Load. E.g. Pair of tongs, tweezers, human forearm lifting weights. Effort is between fulcrum and load. MA is always < 1 (distance/speed multiplier).\n• Other Common Simple Machines:\n  - Inclined Plane: VR = Length of plane (L) / Vertical height (h) = 1 / sin θ.\n  - Pulley Systems: For a block and tackle system, VR = total number of pulley wheels (or number of rope segments supporting the moving block).\n  - Wheel and Axle: VR = Radius of wheel (R) / Radius of axle (r).\n  - Screw Jack: VR = 2πr / Pitch (p).",
    "detailedNotes": {
      "introduction": "Simple machines transform human mechanical effort to make work easier and safer. Understanding the relationship between Mechanical Advantage, Velocity Ratio, and Efficiency equips students to analyze mechanical systems, from everyday hand tools to heavy cranes at Ghana’s commercial ports.",
      "realWorldContext": "Head porters (kayayei) and traders at Agbogbloshie market use wooden wheelbarrows (second-class levers) to transport heavy crates of tomatoes and yams, using mechanical advantage to lift hundreds of kilograms with minimal muscular effort.",
      "objectives": [
        "Define Mechanical Advantage, Velocity Ratio, and Efficiency and derive η = (MA / VR) × 100%",
        "Classify levers into first, second, and third classes using the FLE mnemonic with diagrams",
        "Calculate MA, VR, and Efficiency for inclined planes, pulley systems, and wheel-and-axles",
        "Explain why practical machines can never achieve 100% efficiency and describe methods to increase efficiency"
      ],
      "sections": [
        {
          "title": "The FLE Rule for Lever Classification",
          "content": "Levers pivot on a fixed fulcrum. The relative positions of the Fulcrum, Load, and Effort dictate the mechanical characteristics and classification of the lever.",
          "bulletPoints": [
            "1st Class (F is central): Fulcrum is between Effort and Load. Changing fulcrum position changes whether the tool multiplies force or speed.",
            "2nd Class (L is central): Load is between Fulcrum and Effort. The effort arm is always longer than the load arm, so MA > 1. Always multiplies force.",
            "3rd Class (E is central): Effort is between Fulcrum and Load. The load arm is longer than the effort arm, so MA < 1. Multiplies speed and precision, but requires effort greater than the load."
          ],
          "keyTakeaway": "Remember the order 1-2-3 = F-L-E: 1st class has Fulcrum central, 2nd class has Load central, 3rd class has Effort central.",
          "realWorldExample": "Using a pair of kitchen tongs to pick hot roasted plantain (kofi brokeman) is a third-class lever that gives precision and safety rather than force magnification."
        },
        {
          "title": "Pulley Systems & Improving Mechanical Efficiency",
          "content": "Pulleys redirect tension forces through flexible cords. In a block and tackle system, adding pulleys increases the Velocity Ratio.",
          "bulletPoints": [
            "Velocity Ratio of Pulley: Exactly equals the number of pulleys in the system (or number of rope strings supporting the movable block). VR depends purely on geometry and does not change with friction.",
            "Mechanical Advantage: Decreases as friction increases or pulley weight increases. Therefore MA is always less than VR in real systems.",
            "Methods to improve efficiency: Lubricating bearings with grease/oil to reduce friction; using lighter materials for pulleys; using smooth, light, non-stretching ropes."
          ],
          "keyTakeaway": "Velocity ratio depends solely on machine geometry and remains constant; mechanical advantage decreases with friction.",
          "realWorldExample": "At Tema Harbour container terminals, giant gantry cranes use multiple-pulley block-and-tackle systems to hoist 40-foot shipping containers."
        }
      ],
      "wassceExamTips": [
        "Remember that VR has no units and is always a whole number for pulley systems.",
        "Never state that friction can be eliminated completely; state that friction can be minimized by lubrication.",
        "Show all working when calculating efficiency: write Efficiency = (MA / VR) × 100% before substituting."
      ],
      "commonMistakes": [
        "Stating that a machine can produce more work than is put into it (violates conservation of energy; Work output < Work input).",
        "Confusing the positions in 2nd and 3rd class levers.",
        "Giving units to Mechanical Advantage or Velocity Ratio (they are dimensionless ratios)."
      ],
      "summaryChecklist": [
        "Can I derive the formula: Efficiency = (MA / VR) × 100%?",
        "Can I identify the lever class of a bottle opener, pair of scissors, and fishing rod?",
        "Can I calculate the VR of an inclined plane given length and height?",
        "Can I explain two practical methods for increasing the efficiency of a block and tackle pulley system?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-mach-1",
        "title": "Block and Tackle Pulley Calculations",
        "problem": "A block and tackle pulley system consists of 5 pulley wheels in total. An effort of 250 N is required to raise a load of 1,000 N. Calculate: (a) The Velocity Ratio (VR). (b) The Mechanical Advantage (MA). (c) The Efficiency of the machine. (d) The work wasted if the load is raised through 4.0 meters.",
        "stepByStepSolution": [
          "Step 1: Velocity Ratio (VR) = total number of pulleys = 5. [B1]",
          "Step 2: Mechanical Advantage (MA) = Load / Effort = 1,000 N / 250 N = 4.0. [A1]",
          "Step 3: Efficiency η = (MA / VR) × 100% = (4.0 / 5) × 100% = 80%. [M1, A1]",
          "Step 4: Useful Work Output = Load × Load Distance = 1,000 N × 4.0 m = 4,000 J. [M1]",
          "Step 5: Effort distance = VR × Load distance = 5 × 4.0 m = 20.0 m.",
          "Step 6: Work Input = Effort × Effort Distance = 250 N × 20.0 m = 5,000 J.",
          "Step 7: Work wasted = Work Input - Work Output = 5,000 J - 4,000 J = 1,000 Joules. [A1]"
        ],
        "keyTakeaway": "The difference between work input and useful work output represents energy dissipated against friction and lifting movable pulley parts."
      },
      {
        "id": "ex-shs1-sci-mach-2",
        "title": "Inclined Plane Efficiency Calculation",
        "problem": "A heavy crate weighing 600 N is pulled up a smooth inclined plank of length 5.0 meters onto a lorry platform 1.5 meters high. The pulling effort applied parallel to the ramp is 240 N. Calculate: (a) The Velocity Ratio of the plane. (b) The Mechanical Advantage. (c) The efficiency of the inclined plane.",
        "stepByStepSolution": [
          "Step 1: Velocity Ratio VR = Length of plane / Height = 5.0 m / 1.5 m = 3.33. [M1, A1]",
          "Step 2: Mechanical Advantage MA = Load / Effort = 600 N / 240 N = 2.50. [A1]",
          "Step 3: Efficiency η = (MA / VR) × 100% = (2.50 / 3.33) × 100% = 75.0%. [M1, A1]"
        ],
        "keyTakeaway": "An inclined plane acts as a force multiplier by allowing an effort to move through a longer distance to raise a heavy load through a small height."
      }
    ]
  },
  {
    "id": "shs1-sci-t2-density-relative-density",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "Density, Relative Density & Archimedes’ Principle",
    "description": "Density of regular and irregular solids, density of liquids, relative density using hydrometers, Archimedes’ principle, upthrust, and the law of flotation.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=0v86Yk14rf8",
    "youtubeId": "0v86Yk14rf8",
    "keyNotes": "• Density (ρ):\n  - Defined as mass per unit volume of a substance: ρ = m / V.\n  - SI unit: kg/m³. CGS unit: g/cm³.\n  - Conversion: 1 g/cm³ = 1,000 kg/m³. Density of pure water = 1.0 g/cm³ = 1,000 kg/m³.\n• Measuring Volumes:\n  - Regular solids: Geometry formulas (Cube: s³; Rectangular block: l × w × h; Cylinder: πr²h; Sphere: 4/3 πr³).\n  - Irregular solids: Water displacement method using a graduated measuring cylinder or Eureka (overflow / displacement) can.\n• Relative Density (R.D.):\n  - Ratio of the density of a substance to the density of pure water at 4°C.\n  - R.D. = Density of substance / Density of water = Mass of substance / Mass of an equal volume of water.\n  - R.D. is a dimensionless ratio and HAS NO UNITS.\n  - If R.D. < 1, the substance floats in water; if R.D. > 1, it sinks.\n• Archimedes’ Principle:\n  - When a body is completely or partially immersed in a fluid, it experiences an upward buoyant force (Upthrust) equal to the weight of fluid displaced.\n  - Upthrust U = Weight in air - Apparent weight in fluid = Weight of displaced fluid = V_immersed × ρ_fluid × g.\n• Law of Flotation:\n  - A floating body displaces its own weight of the fluid in which it floats.\n  - Weight of floating body = Upthrust = Weight of displaced fluid.\n• Hydrometers:\n  - Weighted glass instruments that float vertically in liquids to measure relative density directly.\n  - Sinks deeper in less dense liquids; floats higher in denser liquids (scale is calibrated with highest density at the bottom).",
    "detailedNotes": {
      "introduction": "Fluids exert upward buoyant forces that determine whether ships float or submarines submerge. In this topic, students master mass-volume measurements, Archimedes’ principle, upthrust calculations, and the industrial use of hydrometers.",
      "realWorldContext": "In Ghana, oil companies at the Jubilee and TEN fields measure the API gravity (relative density) of crude oil using hydrometers. Dense, heavy crude sells at different international prices than light, sweet crude.",
      "objectives": [
        "Define density and relative density and convert between g/cm³ and kg/m³",
        "Determine the density of irregular solids and liquids experimentally using displacement cans and relative density bottles",
        "State Archimedes’ principle and the law of flotation and use them to solve upthrust problems",
        "Explain the operation of a hydrometer and how modern ships made of dense steel can float"
      ],
      "sections": [
        {
          "title": "Archimedes’ Principle & Buoyancy Calculations",
          "content": "Upthrust is the net upward force exerted by fluid pressure, which increases with depth.",
          "bulletPoints": [
            "Apparent Weight Loss: A stone weighs less when weighed immersed in water than in air because the upward buoyant force partially supports its weight.",
            "Upthrust Formula: U = Weight in air - Weight in liquid. By Archimedes’ principle: U = mass of displaced liquid × g = (Volume × Density of liquid) × g.",
            "Why steel ships float: A solid block of steel sinks because its density (~7,800 kg/m³) is far greater than water (1,000 kg/m³). However, a ship is hollowed out, containing vast volumes of air, making the average density of the entire vessel much less than water."
          ],
          "keyTakeaway": "Upthrust strictly equals the weight of the fluid displaced by the immersed portion of the body.",
          "realWorldExample": "Wooden fishing canoes at James Town in Accra displace a volume of seawater whose weight exactly equals the combined weight of the canoe, fishermen, and catch."
        },
        {
          "title": "The Relative Density Bottle & Hydrometer Applications",
          "content": "The relative density bottle (pycnometer) provides high accuracy by ensuring identical volumes of liquid are compared.",
          "bulletPoints": [
            "Pycnometer method: Mass of empty dry bottle (m₁); Mass of bottle + liquid X (m₂); Mass of bottle + pure water (m₃).",
            "Relative Density of liquid X = (m₂ - m₁) / (m₃ - m₁).",
            "Hydrometer in Dairy & Brewing: Used as a lactometer to test whether fresh cow milk has been diluted with water, and as a saccharometer to measure sugar fermentation in Ghanaian breweries."
          ],
          "keyTakeaway": "The relative density bottle measures R.D. by comparing the mass of a substance to the mass of an identical volume of water.",
          "realWorldExample": "Automobile mechanics at Abossey Okai use battery hydrometers (battery syringes) to measure the relative density of sulfuric acid in car batteries to determine battery charge level."
        }
      ],
      "wassceExamTips": [
        "Never attach units to Relative Density; writing \"R.D. = 2.5 g/cm³\" is penalized heavily by WAEC examiners.",
        "When using Eureka cans, always ensure water fills the can until it overflows through the spout and stops dripping before introducing the solid.",
        "Remember to state Archimedes’ principle precisely: \"When a body is wholly or partially immersed in a fluid...\""
      ],
      "commonMistakes": [
        "Confusing density (has units kg/m³ or g/cm³) with relative density (dimensionless ratio).",
        "Forgetting that Archimedes’ principle applies to all fluids (both liquids and gases), not just water.",
        "Dividing by 1,000 instead of multiplying by 1,000 when converting g/cm³ to kg/m³."
      ],
      "summaryChecklist": [
        "Can I convert 2.7 g/cm³ into kg/m³?",
        "Can I outline the experimental steps to determine the density of an irregular stone using a Eureka can?",
        "Can I state the Law of Flotation and apply it to an iceberg or floating timber log?",
        "Can I calculate the relative density of a liquid using a 50 cm³ density bottle?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-dens-1",
        "title": "Archimedes’ Principle & Relative Density of a Solid",
        "problem": "A piece of metal alloy weighs 4.8 N in air, 3.2 N when completely immersed in water, and 3.6 N when immersed in an unknown oil. Taking g = 10 m/s² and density of water = 1,000 kg/m³, calculate: (a) The upthrust in water. (b) The relative density of the metal. (c) The density of the unknown oil.",
        "stepByStepSolution": [
          "Step 1: Upthrust in water U_water = Weight in air - Weight in water = 4.8 N - 3.2 N = 1.6 N. [A1]",
          "Step 2: By Archimedes’ principle, U_water = Weight of equal volume of water = 1.6 N.",
          "Step 3: Relative Density of metal = Weight in air / Upthrust in water = 4.8 N / 1.6 N = 3.0. [M1, A1]",
          "Step 4: Upthrust in oil U_oil = Weight in air - Weight in oil = 4.8 N - 3.6 N = 1.2 N. [B1]",
          "Step 5: Relative Density of oil = U_oil / U_water = 1.2 N / 1.6 N = 0.75. [M1]",
          "Step 6: Density of oil = R.D. × Density of water = 0.75 × 1,000 kg/m³ = 750 kg/m³. [A1]"
        ],
        "keyTakeaway": "The ratio of upthrust in an unknown liquid to upthrust in water directly yields the relative density of the liquid."
      },
      {
        "id": "ex-shs1-sci-dens-2",
        "title": "Law of Flotation for Floating Timber",
        "problem": "A wooden log of volume 0.8 m³ and density 700 kg/m³ floats in fresh water (density 1,000 kg/m³). Calculate: (a) The total mass of the log. (b) The volume of the log submerged beneath the water surface.",
        "stepByStepSolution": [
          "Step 1: Calculate total mass: mass = density × volume = 700 kg/m³ × 0.8 m³ = 560 kg. [A1]",
          "Step 2: Total weight of log W = m × g = 560 kg × 10 m/s² = 5,600 N. [B1]",
          "Step 3: Apply the Law of Flotation: Weight of floating body = Weight of displaced water = Upthrust. [M1]",
          "Step 4: 5,600 N = V_submerged × ρ_water × g → 5,600 = V_submerged × 1,000 × 10.",
          "Step 5: 5,600 = 10,000 × V_submerged → V_submerged = 5,600 / 10,000 = 0.56 m³. [A1]",
          "Step 6: Fraction submerged = 0.56 / 0.8 = 0.70 (70% submerged)."
        ],
        "keyTakeaway": "The fraction of a floating body that is submerged equals the ratio of the body’s density to the fluid’s density."
      }
    ]
  },
  {
    "id": "shs1-sci-t2-ecosystems-ecology",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Ecosystems, Ecological Interactions & Biogeochemical Cycles",
    "description": "Ecosystem components (biotic and abiotic factors), trophic levels, food chains, food webs, ecological pyramids, symbiotic relationships (mutualism, commensalism, parasitism), and nutrient cycles (carbon and nitrogen cycles).",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=sKJoXdrb70Q",
    "youtubeId": "sKJoXdrb70Q",
    "keyNotes": "• Ecosystem Definitions:\n  - Ecosystem: A self-sustaining biological community of interacting organisms (biotic) and their physical non-living environment (abiotic).\n  - Habitat: The natural home or environment of an organism.\n  - Population: Group of individuals of the same species living in a specified habitat at a given time.\n  - Community: All different populations of living organisms coexisting in a habitat.\n  - Ecological Niche: The functional role and status of an organism within its community.\n• Trophic Levels & Energy Flow:\n  - Trophic Level 1: Primary Producers (autotrophs: green plants, phytoplankton) convert solar energy into chemical energy via photosynthesis.\n  - Trophic Level 2: Primary Consumers (herbivores: grasshoppers, cattle).\n  - Trophic Level 3: Secondary Consumers (carnivores: frogs, lizards).\n  - Trophic Level 4: Tertiary Consumers / Top predators (hawks, lions).\n  - Decomposers: Saprophytic bacteria and fungi that break down dead organic matter, recycling minerals back to soil.\n  - 10% Energy Transfer Rule: Only approximately 10% of energy is transferred from one trophic level to the next; 90% is lost as metabolic heat, respiration, and undigested waste.\n• Ecological Pyramids:\n  - Pyramid of Numbers, Pyramid of Biomass, Pyramid of Energy.\n  - Pyramid of Energy is ALWAYS upright (energy continuously dissipates as heat).\n• Symbiotic Interactions:\n  - Mutualism (+/+): Both species benefit (e.g. Rhizobium bacteria in root nodules of cowpea fixing nitrogen; pollination of cocoa flowers by midges).\n  - Commensalism (+/0): One benefits, the other is neither harmed nor helped (e.g. epiphytic ferns on palm trees).\n  - Parasitism (+/-): Parasite benefits at host’s expense (e.g. Plasmodium protozoa causing malaria in humans; mistletoe on cocoa trees).\n• Biogeochemical Cycles:\n  - Carbon Cycle: Photosynthesis removes CO₂; Respiration, combustion, and decomposition return CO₂.\n  - Nitrogen Cycle: Nitrogen fixation (Rhizobium, Lightning), Nitrification (Nitrosomonas: NH₄⁺ → NO₂⁻; Nitrobacter: NO₂⁻ → NO₃⁻), Assimilation, Denitrification (Pseudomonas converts NO₃⁻ → N₂ gas).",
    "detailedNotes": {
      "introduction": "Ecology investigates the delicate interconnections between living organisms and their environment. Understanding energy pathways, ecological niches, and nutrient cycling is essential for managing natural resources, combating deforestation, and conserving biodiversity in Ghana.",
      "realWorldContext": "In the Kakum National Park in the Central Region, the tropical rainforest canopy food web links kapok trees, fruit bats, monkeys, and crowned eagles. Disrupting canopy trees threatens the survival of interdependent pollinators and seed dispersers.",
      "objectives": [
        "Differentiate between abiotic (temperature, light, pH) and biotic ecological factors",
        "Construct and interpret food chains, food webs, and pyramids of numbers, biomass, and energy",
        "Explain the 10% energy transfer rule and why food chains rarely exceed four or five trophic levels",
        "Describe the nitrogen and carbon cycles and explain how human activities (bush burning, deforestation) disturb ecological balance"
      ],
      "sections": [
        {
          "title": "Energy Flow & Ecological Pyramids",
          "content": "Energy enters ecosystems as sunlight and flows unidirectionally through food webs, dissipating continuously as metabolic heat.",
          "bulletPoints": [
            "Food Chain: Linear feeding sequence: Guinea grass → Grasshopper → Toad → Black kite.",
            "Food Web: Complex network of interconnected food chains reflecting natural feeding versatility.",
            "Why Pyramids of Energy are always upright: Energy cannot be recycled; at every transfer step, roughly 90% is lost via cellular respiration, excretion, and movement.",
            "Limitation on trophic levels: By the 4th or 5th trophic level, remaining energy is insufficient to support a viable population of top predators."
          ],
          "keyTakeaway": "Energy flows unidirectionally and diminishes by ~90% at each successive trophic transfer; nutrients cycle continuously.",
          "realWorldExample": "In Lake Volta, microscopic phytoplankton are consumed by zooplankton, eaten by small cichlid fish (tilapia fry), which are preyed upon by electric catfish and Nile perch."
        },
        {
          "title": "The Nitrogen Cycle & Agricultural Productivity",
          "content": "Atmospheric nitrogen (N₂, 78%) is inert and cannot be directly assimilated by plants without fixation into ammonium or nitrates.",
          "bulletPoints": [
            "Biological Fixation: Symbiotic Rhizobium in root nodules of leguminous crops (cowpeas, groundnuts, soybeans) convert N₂ into ammonium ions.",
            "Nitrification: Soil bacteria oxidize ammonia: Nitrosomonas converts NH₄⁺ to nitrites (NO₂⁻); Nitrobacter converts NO₂⁻ to nitrates (NO₃⁻), which plants absorb.",
            "Denitrification: In waterlogged, anaerobic soils, denitrifying bacteria convert nitrates back into N₂ gas, reducing soil fertility."
          ],
          "keyTakeaway": "Nitrifying bacteria require aerobic oxygenated soils to produce soluble nitrates for plant root uptake.",
          "realWorldExample": "Farmers in the Northern Region intercrop maize with groundnuts to naturally replenish soil nitrates without expensive synthetic chemical fertilizers."
        }
      ],
      "wassceExamTips": [
        "In food chains, arrowheads must point from the organism being eaten to the consumer that eats it (indicating direction of energy flow).",
        "State clearly that the pyramid of energy can NEVER be inverted, unlike pyramids of numbers which can be inverted (e.g. one huge oak tree supporting thousands of caterpillars).",
        "Name both nitrifying bacteria correctly: Nitrosomonas converts ammonia to nitrite; Nitrobacter converts nitrite to nitrate."
      ],
      "commonMistakes": [
        "Drawing food chain arrows backwards (pointing to food instead of consumer).",
        "Assuming nitrogen gas can be directly absorbed through plant stomata (plants only take up nitrates/ammonium through roots).",
        "Confusing commensalism with mutualism."
      ],
      "summaryChecklist": [
        "Can I construct a 4-level food chain from a terrestrial grassland habitat?",
        "Can I explain why energy does not cycle in an ecosystem whereas carbon and nitrogen do?",
        "Can I outline the 4 main stages of the nitrogen cycle?",
        "Can I provide an example of mutualism found in Ghanaian agriculture?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-eco-1",
        "title": "Energy Calculation in a Trophic Food Chain",
        "problem": "In a grassland ecosystem, guinea grass captures 50,000 kJ of solar energy during photosynthesis. Assuming a 10% efficiency of energy transfer across successive trophic levels: (a) Construct a 4-step food chain including grass, hawk, grasshopper, and lizard. (b) Calculate the energy available to the tertiary consumer. (c) State two ways energy is lost between trophic levels.",
        "stepByStepSolution": [
          "Step 1: Construct the food chain showing correct energy flow: Guinea grass → Grasshopper → Lizard → Hawk. [B1]",
          "Step 2: Trophic level 1 (Producer: Guinea grass) = 50,000 kJ. [M1]",
          "Step 3: Trophic level 2 (Primary consumer: Grasshopper) = 10% of 50,000 kJ = 5,000 kJ.",
          "Step 4: Trophic level 3 (Secondary consumer: Lizard) = 10% of 5,000 kJ = 500 kJ.",
          "Step 5: Trophic level 4 (Tertiary consumer: Hawk) = 10% of 500 kJ = 50 kJ. [A1]",
          "Step 6: Ways energy is lost: (i) Released as heat during cellular respiration. (ii) Undigested food passed out in feces/urine. [B1]"
        ],
        "keyTakeaway": "Due to the 10% transfer rule, top apex predators receive only a minute fraction of the initial energy captured by primary producers."
      },
      {
        "id": "ex-shs1-sci-eco-2",
        "title": "Pyramid of Numbers vs Pyramid of Biomass",
        "problem": "A single huge baobab tree supports 20,000 aphids, which are preyed upon by 500 ladybird beetles, which in turn are eaten by 4 weaver birds. (a) Draw a sketch of the pyramid of numbers. (b) Explain why the pyramid of numbers is inverted at the base. (c) Predict the shape of the pyramid of biomass for this same community.",
        "stepByStepSolution": [
          "Step 1: Sketch Pyramid of Numbers: Bottom tier is very narrow (1 Baobab), second tier is extremely wide (20,000 aphids), third tier is medium (500 ladybirds), top tier is tiny (4 birds). [B1]",
          "Step 2: Reason for inverted base: A single primary producer has immense physical size and biomass capable of sustaining tens of thousands of tiny individual primary consumers. [A1]",
          "Step 3: Shape of Pyramid of Biomass: Completely upright and normal. The dry mass of one giant baobab tree far exceeds the total mass of 20,000 aphids. [A1]"
        ],
        "keyTakeaway": "Pyramids of numbers can be inverted when the producer is a large tree, but pyramids of biomass and energy remain upright."
      }
    ]
  },
  {
    "id": "shs1-sci-t3-acids-bases-salts",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 11,
    "title": "Acids, Bases, Salts & Acid-Base Titration",
    "description": "Properties of acids and bases, Arrhenius and Brønsted-Lowry definitions, pH scale, chemical indicators, neutralization reactions, salt preparation methods, and acid-base volumetric titration.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=ANi709MYnWg",
    "youtubeId": "ANi709MYnWg",
    "keyNotes": "• Definitions:\n  - Arrhenius: Acid produces H⁺ (or H₃O⁺) in water; Base produces OH⁻ in water.\n  - Brønsted-Lowry: Acid is a proton (H⁺) donor; Base is a proton (H⁺) acceptor.\n  - Strong vs Weak Acids: Strong acids ionize completely in water (HCl, HNO₃, H₂SO₄). Weak acids ionize only partially (CH₃COOH, H₂CO₃, citric acid).\n  - Strong vs Weak Bases: Strong bases dissociate completely (NaOH, KOH). Weak bases dissociate partially (NH₃(aq), Ca(OH)₂).\n• The pH Scale (0 to 14):\n  - pH = -log₁₀[H⁺].\n  - Acidic: pH < 7 ([H⁺] > [OH⁻]).\n  - Neutral: pH = 7 at 25°C (pure water: [H⁺] = [OH⁻] = 10⁻⁷ M).\n  - Basic / Alkaline: pH > 7 ([OH⁻] > [H⁺]).\n• Indicators:\n  - Litmus: Acid = Red, Base = Blue.\n  - Phenolphthalein: Acid = Colorless, Alkali = Deep Pink (pH range 8.3 - 10.0).\n  - Methyl Orange: Acid = Red, Alkali = Yellow (pH range 3.1 - 4.4; endpoint = orange).\n• Neutralization & Salt Formation:\n  - Acid + Base → Salt + Water: H⁺(aq) + OH⁻(aq) → H₂O(l) (exothermic).\n  - Acid + Metal → Salt + H₂(g).\n  - Acid + Metal Carbonate → Salt + H₂O + CO₂(g).\n• Methods of Preparing Salts:\n  - Titration: Soluble salts of alkali metals and ammonium (e.g. NaCl, (NH₄)₂SO₄).\n  - Acid + Insoluble Base/Carbonate/Metal: Soluble salts (e.g. CuSO₄ from CuO + H₂SO₄).\n  - Precipitation (Double Decomposition): Insoluble salts (e.g. BaSO₄, PbI₂, AgCl).",
    "detailedNotes": {
      "introduction": "Acids, bases, and salts are ubiquitous in industry, agriculture, and biological fluids. This topic develops theoretical understanding of proton transfers and equips students with laboratory titration skills tested in the WASSCE Practical Chemistry section.",
      "realWorldContext": "In Ghanaian agriculture, acidic soils in high-rainfall forest zones (Western and Eastern Regions) are limed with powdered limestone (calcium carbonate, CaCO₃) or slaked lime (Ca(OH)₂) to raise soil pH to optimal levels for cocoa and cassava cultivation.",
      "objectives": [
        "Differentiate between strong and weak acids/bases and define pH mathematically and conceptually",
        "Compare indicators (litmus, phenolphthalein, methyl orange) and choose appropriate indicators for specific titrations",
        "Outline four distinct chemical methods for preparing soluble and insoluble salts with balanced equations",
        "Perform acid-base titration calculations using C_a V_a / C_b V_b = n_a / n_b"
      ],
      "sections": [
        {
          "title": "Volumetric Analysis: Acid-Base Titration Technique",
          "content": "Titration determines the unknown concentration of an acid or base solution by reacting it with a standard solution of known concentration.",
          "bulletPoints": [
            "Apparatus: Pipette delivers fixed volume of base into conical flask; Burette dispenses variable volume of acid with stopcock control.",
            "Titre Concordancy: Titrations are repeated until at least two or three titre values agree within ±0.10 cm³ (concordant titres).",
            "Indicator Choice: Strong Acid + Strong Base = any indicator; Strong Acid + Weak Base = Methyl orange; Weak Acid + Strong Base = Phenolphthalein."
          ],
          "keyTakeaway": "Concordant titres must fall within 0.10 cm³ of each other; the initial reading must be subtracted from the final burette reading.",
          "realWorldExample": "Quality control chemists at pharmaceutical plants in Accra titrate antacid tablets against standardized HCl to verify active magnesium hydroxide content."
        },
        {
          "title": "Classification & Solubility of Salts",
          "content": "Salts are ionic compounds composed of a metallic cation (or NH₄⁺) and an acid anion.",
          "bulletPoints": [
            "All nitrates (NO₃⁻) and all ethanoates are completely soluble in water.",
            "All sodium, potassium, and ammonium salts are soluble.",
            "Most chlorides are soluble EXCEPT Lead(II) chloride (soluble in hot water) and Silver chloride (AgCl).",
            "Most sulfates are soluble EXCEPT Barium sulfate (BaSO₄), Lead(II) sulfate (PbSO₄), and Calcium sulfate (slightly soluble).",
            "All carbonates are INSOLUBLE EXCEPT Group 1 carbonates (Na₂CO₃, K₂CO₃) and (NH₄)₂CO₃."
          ],
          "keyTakeaway": "Insoluble salts like BaSO₄ and AgCl are prepared by precipitation (mixing two soluble aqueous salt solutions).",
          "realWorldExample": "The white precipitate produced when testing for sulfate ions using barium chloride solution confirms whether well water contains dissolved sulfate minerals."
        }
      ],
      "wassceExamTips": [
        "In titration tables, always record burette readings to two decimal places (e.g. 24.50 cm³, not 24.5 cm³).",
        "Average titre must only be calculated from concordant titres (values within 0.10 cm³ of each other).",
        "State the formula: C_a V_a / C_b V_b = n_a / n_b clearly before substituting values to secure method marks."
      ],
      "commonMistakes": [
        "Using dirty burettes or blowing out the last drop of liquid retained in the tip of a pipette (pipettes are calibrated to retain that drop).",
        "Confusing acid strength (degree of ionization) with acid concentration (amount of solute dissolved per dm³).",
        "Choosing phenolphthalein for a strong acid-weak base titration (endpoint occurs in the acidic range, requiring methyl orange)."
      ],
      "summaryChecklist": [
        "Can I calculate pH given hydrogen ion concentration [H⁺]?",
        "Can I write balanced equations for the 4 methods of salt preparation?",
        "Can I calculate the molar concentration of an unknown acid from titration data?",
        "Can I list which chlorides, sulfates, and carbonates are insoluble in water?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-abs-1",
        "title": "Acid-Base Titration Molarity Calculation",
        "problem": "In a titration experiment, 25.0 cm³ of 0.10 mol/dm³ sodium hydroxide (NaOH) solution required exactly 20.0 cm³ of a dilute hydrochloric acid (HCl) solution for complete neutralization. Calculate: (a) The chemical equation for the reaction. (b) The molar concentration of the hydrochloric acid in mol/dm³. (c) The mass concentration of the acid in g/dm³ (Molar mass: H=1, Cl=35.5).",
        "stepByStepSolution": [
          "Step 1: Chemical equation: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l). Mole ratio n_a / n_b = 1 / 1. [A1]",
          "Step 2: State titration formula: (C_a × V_a) / (C_b × V_b) = n_a / n_b. [M1]",
          "Step 3: Substitute knowns: (C_a × 20.0) / (0.10 × 25.0) = 1 / 1. [M1]",
          "Step 4: C_a × 20.0 = 2.50 → C_a = 2.50 / 20.0 = 0.125 mol/dm³. [A1]",
          "Step 5: Calculate molar mass of HCl = 1 + 35.5 = 36.5 g/mol.",
          "Step 6: Mass concentration = Molar concentration × Molar mass = 0.125 mol/dm³ × 36.5 g/mol = 4.56 g/dm³. [A1]"
        ],
        "keyTakeaway": "Always check the stoichiometric mole ratio in the balanced equation before substituting into the titration equation."
      },
      {
        "id": "ex-shs1-sci-abs-2",
        "title": "Preparation of Insoluble Salt by Precipitation",
        "problem": "Describe how a pure, dry sample of barium sulfate (BaSO₄) can be prepared in the laboratory starting from barium chloride crystals and dilute sulfuric acid.",
        "stepByStepSolution": [
          "Step 1: Dissolve barium chloride crystals in distilled water in a beaker to form aqueous BaCl₂(aq). [B1]",
          "Step 2: Add dilute sulfuric acid (H₂SO₄(aq)) slowly with continuous stirring; a dense white precipitate of BaSO₄ forms immediately. [B1]",
          "Step 3: Equation: BaCl₂(aq) + H₂SO₄(aq) → BaSO₄(s) + 2HCl(aq). [A1]",
          "Step 4: Filter the mixture using filter paper and funnel to collect the barium sulfate residue. [B1]",
          "Step 5: Wash the residue with distilled water to remove traces of hydrochloric acid and unreacted ions. [B1]",
          "Step 6: Dry the precipitate between sheets of filter paper or in a low-temperature drying oven. [B1]"
        ],
        "keyTakeaway": "Precipitation reactions require mixing two soluble salts, filtering the precipitate, washing the residue with distilled water, and drying."
      }
    ]
  },
  {
    "id": "shs1-sci-t3-water-treatment-purification",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 12,
    "title": "Water Treatment, Purification & Hardness of Water",
    "description": "Sources of water in Ghana, stages of municipal water treatment, physical and chemical tests for pure water, causes and effects of water hardness (temporary vs permanent), and softening methods.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=9z14l51ISwg",
    "youtubeId": "9z14l51ISwg",
    "keyNotes": "• Water Sources & Composition:\n  - Surface water (rivers, lakes, streams) and Ground water (boreholes, wells, aquifers).\n  - Impurities: Suspended solids (clay, silt), dissolved minerals (Ca²⁺, Mg²⁺, Fe³⁺), dissolved gases, and microorganisms (pathogenic bacteria, amoebae).\n• Municipal Water Treatment Stages (Ghana Water Company Limited - GWCL):\n  1. Screening: Metal screens remove large floating debris (twigs, plastic, leaves).\n  2. Aeration: Water sprayed into air to oxidize dissolved iron/manganese and expel foul volatile gases (H₂S).\n  3. Coagulation & Flocculation: Alum (aluminum sulfate) added to neutralize charges on colloidal clay; gentle mixing forms visible clumps (flocs).\n  4. Sedimentation: Water rests in settling tanks where heavy flocs settle to the bottom as sludge.\n  5. Filtration: Water passes through layers of coarse sand, fine sand, and gravel to trap microscopic particles.\n  6. Disinfection / Chlorination: Chlorine gas or sodium hypochlorite added to kill pathogenic microorganisms; lime added to adjust pH.\n• Tests for Pure Water:\n  - Physical: Boiling point = 100°C at 1 atm; Freezing point = 0°C; Density = 1.0 g/cm³ at 4°C.\n  - Chemical: Turns anhydrous copper(II) sulfate from white to blue; Turns dry cobalt(II) chloride paper from blue to pink.\n• Hardness of Water:\n  - Hard water does not lather readily with soap, forming an insoluble curd (scum).\n  - Caused by dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) ions.\n  - Temporary Hardness: Caused by dissolved calcium hydrogen carbonate (Ca(HCO₃)₂). Removed by boiling: Ca(HCO₃)₂(aq) → CaCO₃(s) + H₂O(l) + CO₂(g).\n  - Permanent Hardness: Caused by dissolved calcium sulfate (CaSO₄) or magnesium chloride (MgCl₂). Cannot be removed by boiling; removed by adding washing soda (Na₂CO₃) or ion-exchange resins.\n• Advantages & Disadvantages of Hard Water:\n  - Advantages: Calcium strengthens bones and teeth; tastes better due to dissolved minerals; forms protective carbonate layer in lead pipes preventing lead poisoning.\n  - Disadvantages: Wastes soap; forms fur/limescale in kettles and boilers (wasting fuel and causing boiler explosions); stains fabrics in laundries.",
    "detailedNotes": {
      "introduction": "Access to safe drinking water is a fundamental pillar of public health and economic development. In this topic, students trace the industrial treatment of municipal water in Ghana, perform physical and chemical tests for purity, and examine the chemistry and economic impact of hard water.",
      "realWorldContext": "The Weija Water Works and Kpong Water Treatment Plants supply millions of residents in the Greater Accra Metropolitan Area by purifying water abstracted from the Densu River and Volta River through multi-stage industrial clarification and chlorination.",
      "objectives": [
        "Describe the 6 major stages of municipal water purification used by Ghana Water Company Limited",
        "State the physical and chemical tests used to identify water and verify purity",
        "Distinguish between temporary and permanent hardness of water by their chemical causes and removal techniques",
        "Evaluate the industrial, economic, and health consequences of hard water vs soft water"
      ],
      "sections": [
        {
          "title": "Municipal Water Purification by GWCL",
          "content": "River waters contain suspended mud, microbial pathogens, and organic matter. Converting raw river water into potable drinking water requires systematic physical and chemical processing.",
          "bulletPoints": [
            "Coagulation Chemistry: Alum [Al₂(SO₄)₃] hydrolyzes in water to form gelatinous aluminum hydroxide [Al(OH)₃] which binds negatively charged colloidal clay particles into heavy settleable flocs.",
            "Disinfection: Chlorine forms hypochlorous acid (HOCl), a powerful oxidizing agent that penetrates bacterial cell walls and inactivates metabolic enzymes.",
            "Residual Chlorine: GWCL maintains a small residual concentration of free chlorine (~0.2 - 0.5 mg/L) in distribution mains to prevent bacterial re-growth during piping to homes."
          ],
          "keyTakeaway": "Coagulation aggregates colloidal particles for sedimentation; chlorination destroys pathogenic microorganisms.",
          "realWorldExample": "During heavy rainfall in the Birim and Pra river basins polluted by galamsey mining, GWCL must use triple the normal dose of alum to clarify high-turbidity raw water."
        },
        {
          "title": "Chemistry of Water Hardness: Scum & Scale Formation",
          "content": "Hardness arises when rainwater absorbing atmospheric CO₂ forms dilute carbonic acid (H₂CO₃), which dissolves limestone rocks (CaCO₃) underground to form soluble Ca(HCO₃)₂.",
          "bulletPoints": [
            "Scum Formation: Soap (sodium stearate, C₁₇H₃₅COONa) reacts with Ca²⁺ to precipitate insoluble calcium stearate: 2C₁₇H₃₅COO⁻ + Ca²⁺ → (C₁₇H₃₅COO)₂Ca(s).",
            "Kettle Scale (Fur): Boiling temporary hard water decomposes calcium hydrogen carbonate into insoluble calcium carbonate (CaCO₃ scale), which coats heating elements and reduces thermal efficiency.",
            "Ion-Exchange Resin (Permutit): Hard water passes through a column containing zeolite (sodium aluminosilicate, Na₂Z). Ca²⁺ and Mg²⁺ ions displace Na⁺ ions into solution, completely softening both temporary and permanent hard water."
          ],
          "keyTakeaway": "Boiling removes only temporary hardness by precipitating CaCO₃; permanent hardness requires chemical precipitants or ion-exchange resins.",
          "realWorldExample": "Electric kettles in Tema and Cape Coast develop thick crusts of white limescale after months of boiling borehole water."
        }
      ],
      "wassceExamTips": [
        "Distinguish between a test for water (turns anhydrous CuSO₄ from white to blue) and a test for PURE water (boils sharply at 100°C at 1 atmosphere).",
        "When asked to write the equation for removing temporary hardness by boiling, write: Ca(HCO₃)₂(aq) → CaCO₃(s) + H₂O(l) + CO₂(g).",
        "State clearly that synthetic detergents do NOT form scum with hard water because their calcium and magnesium salts are water-soluble."
      ],
      "commonMistakes": [
        "Claiming that boiling removes permanent hardness (boiling has zero effect on CaSO₄ or MgCl₂).",
        "Stating that anhydrous copper sulfate turns pink (it turns blue; cobalt chloride turns pink).",
        "Confusing distilled water (pure H₂O) with potable water (safe to drink, but contains dissolved beneficial minerals)."
      ],
      "summaryChecklist": [
        "Can I list the six stages of municipal water purification in chronological order?",
        "Can I write balanced equations for the thermal decomposition of Ca(HCO₃)₂?",
        "Can I explain how an ion-exchange resin softens water?",
        "Can I list two industrial disadvantages and two health benefits of hard water?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-wat-1",
        "title": "Distinguishing Between Water Samples A, B, and C",
        "problem": "A laboratory receives three unlabelled water samples: Sample A, Sample B, and Sample C. Equal volumes of each are tested with soap solution before and after boiling. The results are: Sample A: Lathers easily without boiling. Sample B: Does not lather initially, but after boiling lathers easily with soap. Sample C: Does not lather initially, and boiling does not improve lathering; requires addition of washing soda to lather. Identify each water sample and explain the chemical reasoning.",
        "stepByStepSolution": [
          "Step 1: Identify Sample A: Soft water. Explanation: Contains no significant dissolved Ca²⁺ or Mg²⁺ ions, so soap molecules remain unprecipitated and form foam immediately. [A1]",
          "Step 2: Identify Sample B: Temporary hard water. Explanation: Contains dissolved calcium hydrogen carbonate [Ca(HCO₃)₂]. Boiling decomposes it into insoluble CaCO₃ precipitate, removing Ca²⁺ ions and softening the water. [A1]",
          "Step 3: Equation for B: Ca(HCO₃)₂(aq) → CaCO₃(s) + H₂O(l) + CO₂(g). [B1]",
          "Step 4: Identify Sample C: Permanent hard water. Explanation: Contains dissolved calcium or magnesium sulfates/chlorides (e.g. CaSO₄) which are thermally stable and do not precipitate upon boiling. [A1]",
          "Step 5: Washing soda (Na₂CO₃) precipitates the calcium ions as insoluble carbonate: Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s). [B1]"
        ],
        "keyTakeaway": "Water softened by boiling has temporary hardness; water softened only by chemical reagents or ion exchange has permanent hardness."
      },
      {
        "id": "ex-shs1-sci-wat-2",
        "title": "Economic Impact of Kettle Scale Formation",
        "problem": "An electric kettle in a catering school has a heating element covered with 2.0 mm of calcium carbonate scale. Explain: (a) Why boiling water takes longer and consumes more electricity. (b) How the scale can be removed safely using a mild household chemical, stating the chemical reaction.",
        "stepByStepSolution": [
          "Step 1: Reason for heat loss: Calcium carbonate (limescale) is a poor thermal conductor. It forms an insulating barrier that slows heat transfer from the electric element into the water, requiring longer boiling times and wasting electrical energy. [A1]",
          "Step 2: Removal chemical: Mild dilute acid such as vinegar (ethanoic acid, CH₃COOH) or lemon juice (citric acid). [B1]",
          "Step 3: Reaction explanation: The weak acid reacts with insoluble calcium carbonate to form soluble calcium ethanoate, water, and carbon dioxide gas, dissolving away the crust: CaCO₃(s) + 2CH₃COOH(aq) → (CH₃COO)₂Ca(aq) + H₂O(l) + CO₂(g). [M1, A1]"
        ],
        "keyTakeaway": "Kettle fur can be descaled cleanly using mild organic acids that dissolve insoluble carbonate minerals without corroding metallic heating elements."
      }
    ]
  },
  {
    "id": "shs1-sci-t3-soil-science-types-erosion",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 13,
    "title": "Soil Science, Soil Profile, Soil Types & Erosion Control",
    "description": "Physical and chemical composition of soil, soil profile horizons, physical properties (texture, structure, porosity, water-holding capacity), sandy vs clayey vs loamy soils, soil erosion causes, types, and conservation methods.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=if29mjcd5bc",
    "youtubeId": "if29mjcd5bc",
    "keyNotes": "• Soil Composition:\n  - Mineral matter (~45%): Disintegrated rock particles (sand, silt, clay).\n  - Organic matter / Humus (~5%): Decomposed plant and animal tissues; provides nutrients, improves water retention and soil aggregation.\n  - Soil water (~25%): Contains dissolved mineral ions required by plant roots.\n  - Soil air (~25%): Supplies oxygen for root respiration and aerobic soil microbes.\n  - Living organisms: Earthworms, bacteria, fungi, nematodes.\n• Soil Profile (Vertical cross-section showing distinct layers/horizons):\n  - O Horizon: Organic surface litter (fresh leaves, decomposing mulch).\n  - A Horizon (Topsoil): Dark-colored, rich in humus and mineral nutrients, highest biological activity.\n  - B Horizon (Subsoil): Lighter color, contains clay and minerals leached down from topsoil.\n  - C Horizon (Weathered parent material): Partially weathered fractured rock fragments.\n  - R Horizon (Bedrock): Solid unweathered rock foundation.\n• Comparison of Soil Types:\n  - Sandy Soil: Large particle size (> 0.02 mm), large pore spaces, excellent drainage and aeration, very low water-holding capacity, poor nutrient retention, easily leached.\n  - Clayey Soil: Minute particle size (< 0.002 mm), tiny pore spaces, poor drainage and aeration, waterlogs easily, very high water-holding capacity, sticky when wet and cracks when dry.\n  - Loamy Soil: Ideal mixture (~40% sand, ~40% silt, ~20% clay) with high humus content. Optimum aeration, drainage, and water retention; best soil for crop cultivation.\n• Soil Erosion:\n  - Detachment, transportation, and deposition of fertile topsoil by wind or running water.\n  - Types: Splash erosion, Sheet erosion, Rill erosion, Gully erosion.\n  - Conservation Methods: Terracing on steep slopes, contour plowing, strip cropping, planting cover crops (Centrosema, Mucuna), windbreaks/shelterbelts, mulching, afforestation.",
    "detailedNotes": {
      "introduction": "Soil is the foundation of terrestrial agriculture and food security. In this topic, students analyze soil physical characteristics, investigate soil profiles, and evaluate modern conservation strategies to combat severe land degradation across Ghana’s agricultural belts.",
      "realWorldContext": "In the Guinea Savannah zone of the Upper East and Upper West Regions, severe sheet and gully erosion during intense torrential downpours strips topsoil, prompting farmers to adopt stone bunding, zai pits, and vetiver grass contour hedges to trap moisture and soil.",
      "objectives": [
        "Identify the 5 major components of fertile soil and explain their agricultural functions",
        "Draw and describe the vertical horizons of an idealized soil profile",
        "Compare sandy, clayey, and loamy soils in terms of particle size, drainage, capillarity, and nutrient retention",
        "Explain the agents, stages, and modern physical/biological methods of controlling soil erosion"
      ],
      "sections": [
        {
          "title": "Soil Physical Properties: Drainage, Capillarity & Aeration",
          "content": "The proportion of sand, silt, and clay (soil texture) determines how water moves through and is retained by soil.",
          "bulletPoints": [
            "Drainage Experiment: Equal masses of sand, loam, and clay placed in filter funnels over measuring cylinders; equal water added. Sand drains most rapidly with highest filtrate volume; clay drains slowest.",
            "Capillarity Experiment: Glass tubes packed with different soils dipped into water. Water rises fastest and highest in clay soil over time due to extremely fine, continuous capillary pores.",
            "Soil Air: Crucial for cellular respiration in root hairs. Waterlogged clay soil expels soil air, suffocating roots and causing root rot."
          ],
          "keyTakeaway": "Sandy soil has superior drainage but poor water retention; clay soil exhibits high capillarity and water retention but poor aeration.",
          "realWorldExample": "Cocoa trees flourish exclusively on deep, well-drained forest loams in the Western Region, perishing rapidly if planted in waterlogged heavy clay."
        },
        {
          "title": "Mechanisms and Mitigation of Soil Erosion in Ghana",
          "content": "Uncontrolled deforestation, overgrazing, and continuous tillage expose bare topsoil to erosive forces.",
          "bulletPoints": [
            "Four Stages of Water Erosion: (1) Splash (raindrop impact shatters aggregates) → (2) Sheet (uniform removal of thin topsoil layer) → (3) Rill (formation of small distinct channels) → (4) Gully (deep chasms that destroy farm tracks).",
            "Cover Cropping: Fast-growing creeping legumes (e.g. Centrosema pubescens, velvet bean) cover the soil surface, cushioning raindrop impact and binding soil particles with fibrous roots.",
            "Contour Plowing: Plowing ridges horizontally across slopes perpendicular to runoff flow creates micro-dams that slow water velocity, encouraging infiltration."
          ],
          "keyTakeaway": "Vegetative cover provides the most cost-effective protection against soil erosion by dissipating raindrop kinetic energy.",
          "realWorldExample": "Planting cashew trees and vetiver grass barriers across slopes in the Bono East Region prevents productive farm lands from developing impassable erosion gullies."
        }
      ],
      "wassceExamTips": [
        "In soil profile diagrams, remember that the A horizon (topsoil) is darker than the B horizon due to organic humus content.",
        "When distinguishing between drainage and capillarity, remember: drainage measures downward gravity flow; capillarity measures upward tension movement.",
        "Name at least two cover crops recognized in West Africa: Centrosema pubescens, Pueraria phaseoloides, or Mucuna pruriens."
      ],
      "commonMistakes": [
        "Confusing soil texture (permanent physical proportion of sand/silt/clay) with soil structure (arrangement of soil particles into aggregates/peds).",
        "Stating that clay soil has no pore spaces (it actually has more total pore volume than sand, but individual pores are microporous).",
        "Plowing along the slope instead of across the slope (plowing up and down hills accelerates gully formation)."
      ],
      "summaryChecklist": [
        "Can I draw a well-labeled diagram of an idealized soil profile showing horizons O, A, B, C, and R?",
        "Can I describe an experiment to determine the percentage of air in a fresh soil sample?",
        "Can I rank sand, loam, and clay in order of increasing water-holding capacity?",
        "Can I explain the differences between sheet erosion and gully erosion?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-soil-1",
        "title": "Determining the Percentage of Air in a Soil Sample",
        "problem": "A student places 100 cm³ of dry garden soil into a graduated cylinder. The student then adds 100 cm³ of water from another cylinder. The total volume of the mixture after stirring with a glass rod and settling reads 165 cm³. Calculate: (a) The volume of pore air expelled. (b) The percentage of air in the garden soil.",
        "stepByStepSolution": [
          "Step 1: Expected total volume without pore air = Volume of soil + Volume of water = 100 cm³ + 100 cm³ = 200 cm³. [M1]",
          "Step 2: Observed mixture volume = 165 cm³.",
          "Step 3: Volume of air displaced = Expected volume - Observed volume = 200 cm³ - 165 cm³ = 35 cm³. [A1]",
          "Step 4: Percentage of air = (Volume of air / Initial volume of soil) × 100%. [M1]",
          "Step 5: Percentage of air = (35 cm³ / 100 cm³) × 100% = 35.0%. [A1]"
        ],
        "keyTakeaway": "The volume decrease when soil is mixed with water represents the air previously occupying soil pore spaces."
      },
      {
        "id": "ex-shs1-sci-soil-2",
        "title": "Determining Soil Water-Holding Capacity",
        "problem": "A mass of 50.0 g of oven-dried soil is placed in a filter paper cone inside a funnel. 100.0 cm³ of water is poured over it. The volume of water that drains through into a measuring cylinder below is 68.0 cm³. Calculate: (a) The volume of water retained by the soil. (b) The percentage water retention capacity of the soil.",
        "stepByStepSolution": [
          "Step 1: Volume of water poured = 100.0 cm³; Volume of water drained = 68.0 cm³.",
          "Step 2: Volume of water retained by soil = 100.0 cm³ - 68.0 cm³ = 32.0 cm³ (mass = 32.0 g, since density of water = 1.0 g/cm³). [A1]",
          "Step 3: Water retention capacity = (Mass of water retained / Mass of dry soil) × 100%. [M1]",
          "Step 4: Percentage = (32.0 g / 50.0 g) × 100% = 64.0%. [A1]"
        ],
        "keyTakeaway": "Water-holding capacity reflects the proportion of applied water trapped against gravity within capillary pore networks."
      }
    ]
  },
  {
    "id": "shs1-sci-t3-crop-production-husbandry",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 14,
    "title": "Principles of Crop Production, Husbandry & Post-Harvest Technology",
    "description": "Classification of crops, site selection, land preparation, nursery practices, planting methods, cultural practices (weeding, thinning, supplying, pricking out, staking, mulching), pest and disease management, harvesting, and post-harvest storage.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=kYI_G-oZcOE",
    "youtubeId": "kYI_G-oZcOE",
    "keyNotes": "• Classification of Crops:\n  - By Life Cycle: Annuals (complete lifecycle in 1 season/year: maize, cowpea, rice); Biennials (2 years: cassava, carrot, cabbage); Perennials (> 2 years: cocoa, oil palm, citrus, cashew).\n  - By Use / Economic Importance: Cereals (maize, rice, sorghum); Legumes (groundnut, cowpea, soybean); Root & Tuber crops (cassava, yam, cocoyam); Tree/Cash crops (cocoa, coffee, rubber); Vegetables (tomato, garden eggs, pepper); Fibre crops (cotton, jute).\n• Site Selection Criteria:\n  - Proximity to perennial water source for irrigation, fertile well-drained loamy soil, gentle slope to minimize erosion, proximity to good roads and target markets.\n• Land Preparation & Nursery Management:\n  - Land preparation: Slashing, destumping, plowing, harrowing, ridging, bed formation.\n  - Nursery Practices: Tiny seeds (tomato, pepper, cabbage) raised in nursery beds/trays under shade netting.\n  - Nursery Operations: Pricking out (transplanting crowded seedlings into secondary boxes), thinning (removing sickly seedlings), hardening off (gradually exposing seedlings to full sunlight and reduced watering 1-2 weeks before transplanting).\n• Cultural Practices in the Field:\n  - Thinning: Removal of excess seedlings per stand to avoid competition.\n  - Supplying: Replacing seeds or seedlings that failed to germinate or survive transplanting.\n  - Staking: Supporting climbing or heavy-bearing plants (yam, indeterminate tomatoes) with sticks/trellises.\n  - Mulching: Covering soil with dry grass or polythene to conserve moisture, suppress weeds, and regulate soil temperature.\n  - Earthing up: Mounding soil around base of crops (cassava, sweet potato, groundnut) to encourage root expansion and peg development.\n• Harvesting & Post-Harvest Losses:\n  - Physiological maturity vs commercial maturity.\n  - Methods of drying and grain storage: Solar dryers, cribs with rat guards, metal silos, Purdue Improved Crop Storage (PICS) hermetic bags.",
    "detailedNotes": {
      "introduction": "Agriculture forms the backbone of Ghana’s rural economy and national gross domestic product. In this topic, students master scientific crop husbandry techniques, from seedbed establishment and field cultural practices to modern hermetic post-harvest storage.",
      "realWorldContext": "In the cocoa belt of Sefwi Wiawso and Enchi, the Ghana Cocoa Board (COCOBOD) trains farmers on nursery raising of hybrid cocoa varieties, systematic pruning, mistletoe removal, and fermentation on plantain leaves to ensure high-grade export cocoa.",
      "objectives": [
        "Classify major Ghanaian agricultural crops by life cycle and commercial use",
        "Outline site selection parameters and explain nursery management practices including hardening off",
        "Describe routine field cultural practices (thinning, supplying, mulching, staking, earthing up) and explain their physiological benefits",
        "Analyze causes of post-harvest food losses and evaluate traditional and modern storage methods (cribs, silos, PICS bags)"
      ],
      "sections": [
        {
          "title": "Nursery Operations & Transplanting of Vegetable Seedlings",
          "content": "Small-seeded vegetables cannot withstand torrential tropical rains and scorching sun during early germination, requiring intensive nursery protection.",
          "bulletPoints": [
            "Seedbed Preparation: Fine tilth soil enriched with well-rotted farmyard manure, solarized or sterilized with hot water to kill fungal spores (damping-off pathogens).",
            "Pricking Out: Transferring crowded seedlings at the 2-leaf stage into seedling trays or nursery polybags to encourage robust root systems.",
            "Hardening Off: Reducing watering frequency and gradually removing protective shade 7 to 14 days before transplanting to condition seedling cell walls for harsh outdoor field conditions.",
            "Transplanting rules: Best performed late in the afternoon (3:00 - 5:00 PM) or on an overcast cloudy day to minimize transpiration shock."
          ],
          "keyTakeaway": "Hardening off prepares nursery seedlings for outdoor weather extremes, dramatically increasing transplant survival rates.",
          "realWorldExample": "Commercial tomato growers at Akomadan in the Ashanti Region raise hybrid seedlings in polybags under shade nets before transplanting onto drip-irrigated field beds."
        },
        {
          "title": "Post-Harvest Grain Storage & PICS Hermetic Technology",
          "content": "Up to 30% of harvested maize and grain in West Africa is lost to weevils (Sitophilus zeamais) and fungal mold (Aspergillus flavus producing aflatoxins).",
          "bulletPoints": [
            "Traditional Crib Storage: Slatted wooden cribs with wire mesh and conical rat guards placed on supporting stilts allow continuous natural air drying of maize cobs.",
            "Hermetic Storage (PICS Bags): Multi-layer polyethylene bags sealed airtight. Insects, larvae, and fungi rapidly consume available oxygen, raising CO₂ levels and suffocating pests without hazardous chemical pesticides."
          ],
          "keyTakeaway": "Hermetic storage preserves dried grains by depriving storage pests of oxygen, eliminating the need for toxic synthetic insecticides.",
          "realWorldExample": "Maize and cowpea farmers in Tamale and Techiman store grain safely for over 12 months using triple-layer PICS bags to protect against cowpea bruchids."
        }
      ],
      "wassceExamTips": [
        "Always specify the time of day for transplanting seedlings: \"Late in the afternoon or on a cloudy day\" is the standard WAEC answer.",
        "Distinguish between thinning (removing excess seedlings) and supplying (replanting empty stands).",
        "Name two reasons for staking crops: Keeps fruit off the damp soil (preventing fungal rot) and maximizes sunlight capture for photosynthesis."
      ],
      "commonMistakes": [
        "Transplanting seedlings at midday under blazing sunlight (causes severe transpiration shock and seedling mortality).",
        "Storing damp grains in airtight silos (promotes fungal mold growth and fatal aflatoxin contamination).",
        "Using green fresh grass as mulch without drying (can sprout as weeds or ferment and generate damaging heat)."
      ],
      "summaryChecklist": [
        "Can I classify maize, cassava, cocoa, and tomato by life cycle?",
        "Can I describe the procedure of \"hardening off\" and explain its necessity?",
        "Can I list 4 cultural practices carried out after transplanting and explain their purposes?",
        "Can I explain the working principle of a PICS bag in post-harvest grain storage?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-crop-1",
        "title": "Calculating Plant Population per Hectare",
        "problem": "A farmer prepares a 1-hectare field (10,000 m²) to cultivate maize at a spacing of 75 cm between rows and 40 cm between stands within rows. If 2 seeds are sown per stand and germination rate is 100%: (a) Calculate the total number of stands per hectare. (b) Calculate the total plant population.",
        "stepByStepSolution": [
          "Step 1: Convert spacing to meters: Row spacing = 75 cm = 0.75 m; Stand spacing = 40 cm = 0.40 m. [M1]",
          "Step 2: Calculate area occupied by one stand = 0.75 m × 0.40 m = 0.30 m². [A1]",
          "Step 3: Total number of stands = Field area / Area per stand = 10,000 m² / 0.30 m² = 33,333.3 stands. [M1, A1]",
          "Step 4: Since there are 2 plants per stand, Total plant population = 33,333 × 2 = 66,666 plants per hectare. [A1]"
        ],
        "keyTakeaway": "Plant population equals total field area divided by area per stand, multiplied by the number of plants maintained per stand."
      },
      {
        "id": "ex-shs1-sci-crop-2",
        "title": "Solving Damping-Off Disease in a Vegetable Nursery",
        "problem": "A farmer observes that 5 days after tomato seeds germinate, hundreds of tender seedlings collapse at soil level and rot rapidly. (a) Identify the disease affecting the seedlings. (b) Name the causal microorganism group. (c) Suggest three cultural methods to prevent this occurrence in future nursery beds.",
        "stepByStepSolution": [
          "Step 1: Disease identification: Damping-off disease. [B1]",
          "Step 2: Causal agent: Soil-borne fungi (e.g. Pythium, Rhizoctonia species). [B1]",
          "Step 3: Preventative cultural practices: (i) Sterilize nursery soil by heat/solarization before sowing seeds. [A1] (ii) Avoid overwatering and ensure good drainage in nursery beds. [A1] (iii) Avoid overcrowded sowing by practicing thin seed drilling to allow proper air circulation. [A1]"
        ],
        "keyTakeaway": "Damping-off fungal disease thrives in over-watered, crowded, non-sterilized nursery soils."
      }
    ]
  },
  {
    "id": "shs1-sci-t3-personal-environmental-health",
    "subjectId": "science",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 15,
    "title": "Personal Hygiene, Sanitation & Infectious Disease Control",
    "description": "Pathogens and vectors, infectious vs non-infectious diseases, life cycles and control of disease vectors (mosquito, housefly, tsetse fly), water-borne diseases (cholera, typhoid), malaria pathogenesis, and modern sanitation waste management.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=J1Z5k9n0kY0",
    "youtubeId": "J1Z5k9n0kY0",
    "keyNotes": "• Pathogens, Vectors & Transmission:\n  - Pathogen: Disease-causing microorganism (viruses, bacteria, fungi, protozoa).\n  - Vector: An organism that transmits a pathogen from an infected host to a susceptible individual (e.g. female Anopheles mosquito transmits Plasmodium; housefly transmits Vibrio cholerae mechanically).\n  - Infectious (Communicable): Transmissible from person to person (tuberculosis, cholera, COVID-19, malaria).\n  - Non-Infectious (Non-communicable): Cannot be transmitted; caused by genetics, lifestyle, or deficiency (hypertension, diabetes, sickle cell anemia, scurvy).\n• Malaria & The Anopheles Mosquito:\n  - Causal Organism: Protozoan parasite Plasmodium (P. falciparum most lethal in Ghana).\n  - Vector: Female Anopheles mosquito (requires blood meal for egg development).\n  - Life Cycle: Egg → Larva (hangs at water surface at an angle, spiracle breathing) → Pupa (comma-shaped) → Adult mosquito. Breeds in clean, stagnant water pools.\n  - Symptoms: Periodic chills, high fever, profuse sweating, headache, anemia, joint pain.\n  - Control Strategies:\n    * Biological: Gambusia fish (larvivorous fish eating larvae), Bacillus thuringiensis israelensis (BTI bacteria).\n    * Chemical: Indoor Residual Spraying (IRS), applying oil/kerosene film on standing water (suffocates larvae).\n    * Physical / Environmental: Insecticide-Treated Mosquito Nets (ITNs), clearing bushes, draining stagnant puddles.\n    * Chemotherapy / Prophylaxis: Artemisinin-based Combination Therapy (ACT), RTS,S / R21 malaria vaccines.\n• Water-Borne & Enteric Diseases:\n  - Cholera: Caused by bacterium Vibrio cholerae. Transmitted via fecal-oral contamination of drinking water and food. Symptoms: Profuse painless watery diarrhea (\"rice-water stools\"), severe dehydration. Treatment: Oral Rehydration Salts (ORS), IV fluids, antibiotics.\n  - Typhoid Fever: Caused by bacterium Salmonella typhi. Spread via food contaminated with human feces.\n• Environmental Sanitation & Waste Management:\n  - Solid Waste: Refuse classification (biodegradable vs non-biodegradable plastics). The 3Rs: Reduce, Reuse, Recycle. Composting organic waste.\n  - Liquid Waste: Septic tank systems, sewage treatment plants, bio-digesters.",
    "detailedNotes": {
      "introduction": "Public health and sanitation are vital for national productivity and life expectancy. In this topic, students analyze infectious disease epidemiology, investigate mosquito and housefly vectors, examine cholera pathophysiology, and explore sustainable municipal waste management systems in Ghana.",
      "realWorldContext": "In urban centers like Accra and Kumasi, uncollected plastic waste chokes drainage channels (e.g. the Odaw River and Korle Lagoon), precipitating severe flash floods and explosive seasonal outbreaks of cholera and malaria during rainy seasons.",
      "objectives": [
        "Distinguish between infectious and non-infectious diseases with epidemiological examples",
        "Describe the complete life cycle of the female Anopheles mosquito and outline integrated vector control measures",
        "Explain the transmission, symptoms, prevention, and emergency ORS treatment of cholera",
        "Evaluate modern waste management strategies (the 3Rs, composting, sanitary landfills, biogas digesters) for environmental sustainability"
      ],
      "sections": [
        {
          "title": "Malaria: Pathogenesis, Vector Biology & Integrated Management",
          "content": "Malaria remains one of the leading causes of outpatient morbidity and under-five mortality in sub-Saharan Africa.",
          "bulletPoints": [
            "Plasmodium Life Cycle: Sporozoites injected by female Anopheles migrate to liver cells (schizogony); mature merozoites burst liver cells and infect erythrocytes (red blood cells). Cyclical rupture of RBCs releases toxic hemozoin, triggering the classic fever and shivering paroxysms.",
            "Vector Adaptations: Anopheles eggs possess lateral air floats; larvae lie horizontally beneath the water surface breathing through a spiracle plate (unlike Culex larvae which hang at an angle via a siphon tube).",
            "Integrated Vector Management (IVM): Combining Long-Lasting Insecticidal Nets (LLINs), indoor residual spraying, larviciding stagnant drains, and environmental drainage."
          ],
          "keyTakeaway": "Disrupting mosquito larval stages in stagnant water eliminates vector populations before adult transmission occurs.",
          "realWorldExample": "The National Malaria Elimination Programme (NMEP) distributes millions of long-lasting insecticide-treated bed nets to pregnant women and children across Ghana."
        },
        {
          "title": "Cholera & Oral Rehydration Therapy (ORT)",
          "content": "Vibrio cholerae produces a potent enterotoxin that triggers massive secretion of water and chloride ions into the intestinal lumen, causing life-threatening hypovolemic shock within hours.",
          "bulletPoints": [
            "Transmission Pathway: Fecal-oral route via contaminated well water, street food handled with unwashed hands, and open defecation.",
            "Oral Rehydration Salt (ORS) Formulation: 1 level teaspoon of salt (NaCl, providing electrolytes) + 8 level teaspoons of sugar (glucose, facilitating sodium-glucose co-transport across gut enterocytes) dissolved in 1 liter of boiled, cooled water.",
            "Sanitation Barriers: Washing hands with soap under running water before eating and after visiting the toilet; chlorinating drinking water; covering food to exclude houseflies."
          ],
          "keyTakeaway": "ORS does not cure cholera; it rapidly replaces lost water and vital electrolytes while the immune system and antibiotics clear the infection.",
          "realWorldExample": "During cholera outbreaks in coastal slums, community health workers establish emergency ORS stations at local clinics to treat dehydrated patients immediately."
        }
      ],
      "wassceExamTips": [
        "Clearly distinguish between a vector (living carrier like mosquito) and a pathogen (the actual microscopic organism causing disease like Plasmodium).",
        "State the exact proportions for preparing emergency home-made ORS: 1 level teaspoon of salt and 8 level teaspoons of sugar in 1 liter of clean water.",
        "Distinguish between Anopheles and Culex larvae: Anopheles lies parallel/horizontal to the surface of the water; Culex hangs at an angle."
      ],
      "commonMistakes": [
        "Stating that mosquitoes cause malaria (mosquitoes transmit the parasite; Plasmodium is the causal agent).",
        "Boiling ORS solution after dissolving the salts (boil the water FIRST, allow it to cool, then dissolve the sugar and salt).",
        "Confusing biological control (using living natural predators like Gambusia fish) with chemical control."
      ],
      "summaryChecklist": [
        "Can I distinguish between infectious and non-infectious diseases with two examples each?",
        "Can I diagram and describe the four stages of the Anopheles mosquito life cycle?",
        "Can I state the formula and preparation procedure for home-made Oral Rehydration Solution?",
        "Can I explain the 3Rs of solid waste management with local examples?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-sci-hlth-1",
        "title": "Preparation and Mechanism of Oral Rehydration Solution",
        "problem": "A mother brings a 4-year-old child suffering from severe acute diarrhea and vomiting to a rural clinic in the Volta Region. (a) Describe how to prepare a standard home-made Oral Rehydration Solution (ORS). (b) Explain the physiological role of the sugar (glucose) and salt (sodium chloride) in rehydrating the child.",
        "stepByStepSolution": [
          "Step 1: Preparation: Boil 1 liter of clean water and allow it to cool to room temperature. [B1]",
          "Step 2: Add 1 level teaspoon of salt (sodium chloride) and 8 level teaspoons of sugar (sucrose/glucose). Stir thoroughly until completely dissolved. [B1]",
          "Step 3: Role of salt: Restores essential sodium and chloride electrolytes lost in watery diarrhea, maintaining osmotic pressure and cardiac rhythm. [A1]",
          "Step 4: Role of glucose: In the small intestine, sodium ions are absorbed across intestinal mucosal cells via sodium-glucose co-transporters (SGLT-1). Glucose facilitates rapid active absorption of sodium, which in turn draws water back into blood vessels by osmosis. [M1, A1]"
        ],
        "keyTakeaway": "Glucose and sodium work synergistically via gut co-transporters to reabsorb water back into circulating blood."
      },
      {
        "id": "ex-shs1-sci-hlth-2",
        "title": "Integrated Mosquito Vector Control",
        "problem": "A secondary boarding school in Ghana experiences an alarming surge in malaria cases among students. Suggest an integrated vector control plan addressing: (a) Larval aquatic stages. (b) Adult mosquito stages. (c) Personal student protection.",
        "stepByStepSolution": [
          "Step 1: Larval control: Drain all stagnant water pools and uncovered puddles on campus; clear blocked gutters; apply thin kerosene/oil film or BTI bacterial larvicide on standing breeding reservoirs to suffocate larvae. [A1]",
          "Step 2: Adult mosquito control: Clear tall weeds and dense bush around student dormitories to eliminate resting sites; spray interior dormitory walls with long-lasting Indoor Residual Spraying (IRS). [A1]",
          "Step 3: Personal protection: Ensure all dormitory beds are fitted with Long-Lasting Insecticide-Treated Nets (LLINs); install fine insect wire mesh on all dormitory windows and ventilation louvers. [A1]"
        ],
        "keyTakeaway": "Effective malaria eradication demands simultaneous biological, environmental, and physical interventions targeting both immature aquatic larvae and adult mosquitoes."
      }
    ]
  }
]
;

// Attach quizzes
SHS1_SCIENCE_TOPICS.forEach(topic => {
  topic.quiz = SHS1_SCIENCE_QUIZZES[topic.id];
});
