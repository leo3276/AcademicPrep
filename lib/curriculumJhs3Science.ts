// Ghanaian JHS 3 Integrated Science Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) BECE Candidate Syllabus
// 14 Comprehensive Topics across Terms 1, 2, and 3

import { CurriculumTopic } from './types';

export const JHS3_SCIENCE_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs3-sci-t1-atomic-structure-bonding",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Atomic Structure, Periodic Table & Chemical Bonding",
    "description": "Explore subatomic particles (protons, neutrons, electrons), atomic number, mass number, electron configuration (2,8,8), groups and periods in the Periodic Table, and ionic vs covalent bonding.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=FSyAehMdpyI",
    "youtubeId": "FSyAehMdpyI",
    "keyNotes": "• Subatomic Particles & Structure:\n  - Protons (p⁺): Relative mass = 1, Charge = +1, located in dense nucleus.\n  - Neutrons (n⁰): Relative mass = 1, Charge = 0, located in nucleus.\n  - Electrons (e⁻): Relative mass = 1/1840, Charge = -1, orbit in shells/energy levels.\n• Atomic Number (Z) & Mass Number (A):\n  - Atomic number Z = Number of protons (also number of electrons in a neutral atom).\n  - Mass number A = Number of protons + Number of neutrons (A = Z + n).\n  - Neutrons = A - Z.\n• Electron Configuration (Bohr Model):\n  - Shell capacities: 1st shell (K) = max 2 electrons; 2nd shell (L) = max 8; 3rd shell (M) = max 8 (for first 20 elements).\n  - Example: Sodium (₁₁Na) = 2,8,1; Chlorine (₁₇Cl) = 2,8,7; Calcium (₂₀Ca) = 2,8,8,2.\n• Periodic Table Arrangement:\n  - Periods (Horizontal rows 1 to 7): Number of electron shells occupied.\n  - Groups (Vertical columns I to VIII/0): Number of valence (outermost) electrons.\n  - Group I = Alkali Metals; Group II = Alkaline Earth Metals; Group VII = Halogens; Group VIII/0 = Noble/Inert Gases.\n• Chemical Bonding:\n  - Octet/Duplet Rule: Atoms react to attain stable noble gas electron configurations (8 outer electrons, or 2 for He).\n  - Ionic (Electrovalent) Bonding: Transfer of electrons from metal to non-metal forming cations (+) and anions (-). E.g. Na (2,8,1) loses 1e⁻ -> Na⁺ (2,8); Cl (2,8,7) gains 1e⁻ -> Cl⁻ (2,8,8). Electrostatic attraction forms NaCl.\n  - Covalent Bonding: Sharing of electron pairs between non-metal atoms (e.g. H₂O, CH₄, O₂, Cl₂).\n• Chief Examiner BECE Warning:\n  - Candidates often confuse atomic number with mass number. Mass number is ALWAYS greater than or equal to atomic number.\n  - In ionic bonding diagrams, always show square brackets and charges on resulting ions.",
    "examples": [
      {
        "id": "ex-jhs3sci-t1-1",
        "title": "Deducing Subatomic Particles and Ion Formation (BECE Section B)",
        "problem": "An atom X has 13 protons and 14 neutrons. (a) Write down its atomic number and mass number. (b) Write its electronic configuration. (c) Deduce the charge and formula of its stable ion.",
        "stepByStepSolution": [
          "Step 1 (Part a): Atomic number = number of protons = 13 [B1 mark].",
          "Step 2: Mass number = protons + neutrons = 13 + 14 = 27 [B1 mark]. (Element X is Aluminium, ²⁷₁₃Al).",
          "Step 3 (Part b): Fill electron shells (max 2 in 1st, 8 in 2nd): 13 electrons distribute as 2, 8, 3 [B1 mark].",
          "Step 4 (Part c): Atom X has 3 valence electrons. To attain octet stability, it loses 3 electrons [M1 mark].",
          "Step 5: Losing 3 negative electrons leaves an excess of 3 positive protons: Ion charge = +3, Ion formula = X³⁺ [A1 mark]."
        ],
        "keyTakeaway": "Atoms with 1, 2, or 3 valence electrons lose them to form positive ions (cations); atoms with 5, 6, or 7 gain electrons to form negative ions (anions)."
      },
      {
        "id": "ex-jhs3sci-t1-2",
        "title": "Comparing Ionic and Covalent Compounds",
        "problem": "State two physical differences between sodium chloride (ionic) and methane/wax (covalent), and explain why solid sodium chloride does not conduct electricity whereas molten sodium chloride does.",
        "stepByStepSolution": [
          "Step 1: Physical differences: (1) Ionic compounds have high melting and boiling points, whereas covalent compounds have low melting/boiling points. (2) Ionic compounds are typically soluble in water, whereas covalent compounds dissolve in non-polar organic solvents [B2 marks].",
          "Step 2: Conduction in solid NaCl: In the solid state, Na⁺ and Cl⁻ ions are held rigidly in fixed positions in the crystal lattice by strong electrostatic forces and CANNOT move [M1 mark].",
          "Step 3: Conduction in molten NaCl: When melted (or dissolved in water), the crystal lattice breaks down and ions become mobile / free to migrate towards oppositely charged electrodes, carrying electric current [A1 mark]."
        ],
        "keyTakeaway": "WAEC Examiner Requirement: Always state 'free/mobile ions' for ionic conductors, NOT 'free electrons'. Metals conduct with free electrons; electrolytes conduct with mobile ions."
      }
    ]
  },
  {
    "id": "jhs3-sci-t2-acids-bases-salts",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 2,
    "title": "Acids, Bases, Salts, pH Scale & Neutralization",
    "description": "Understand properties of acids and bases, natural vs mineral acids, indicators (litmus, phenolphthalein, methyl orange, universal indicator), the pH scale (0–14), neutralization reactions, and salt preparation.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=mnbS56HQbaU",
    "youtubeId": "mnbS56HQbaU",
    "keyNotes": "• Acids:\n  - Definition: Substances that produce hydrogen ions (H⁺ or H₃O⁺) as the only positive ion when dissolved in water.\n  - Physical properties: Sour taste, turn blue litmus paper RED, pH < 7, conduct electricity in aqueous solution.\n  - Chemical properties: Acid + Metal -> Salt + Hydrogen gas (test: popping sound with glowing splint); Acid + Base -> Salt + Water; Acid + Carbonate -> Salt + Water + Carbon dioxide (turns lime water cloudy).\n  - Mineral acids: HCl (hydrochloric), H₂SO₄ (sulfuric), HNO₃ (nitric). Organic/natural acids: Ethanoic/acetic (vinegar), citric (oranges/lemons), lactic (sour milk).\n• Bases and Alkalis:\n  - Base: Metal oxide or hydroxide that reacts with an acid to form salt and water only (e.g. CuO, MgO, NaOH).\n  - Alkali: A soluble base that dissociates in water to yield hydroxide ions (OH⁻). Examples: NaOH, KOH, Ca(OH)₂.\n  - Properties: Bitter taste, soapy/slippery feel, turn red litmus paper BLUE, pH > 7.\n• pH Scale & Indicators:\n  - pH 0 to 6: Acidic (pH 1-2 = strong acid; pH 5-6 = weak acid).\n  - pH 7: Neutral (pure water).\n  - pH 8 to 14: Alkaline (pH 8-9 = weak alkali; pH 13-14 = strong alkali).\n  - Universal indicator shows distinct colors: Red (strong acid), Yellow (weak acid), Green (neutral), Blue/Purple (alkali).\n• Neutralization Reaction:\n  - Acid + Alkali -> Salt + Water. Ionic equation: H⁺(aq) + OH⁻(aq) -> H₂O(l).\n  - Real-world applications: Antacids (magnesium hydroxide / milk of magnesia) relieving stomach acidity; liming acidic agricultural soils with slaked lime (Ca(OH)₂); baking soda soothing bee stings (acidic venom); vinegar soothing wasp stings (alkaline venom).\n• Chief Examiner Warning:\n  - In neutralization equations, water (H₂O) must have state symbol (l), not (aq).\n  - Remember: All alkalis are bases, but not all bases are alkalis (only soluble bases are alkalis).",
    "examples": [
      {
        "id": "ex-jhs3sci-t2-1",
        "title": "Investigating Unknown Laboratory Liquids with Indicators (BECE Section B)",
        "problem": "Three unlabelled beakers P, Q, and R contain dilute hydrochloric acid, distilled water, and sodium hydroxide solution. (a) Describe how you would identify each liquid using red and blue litmus papers. (b) What would you observe if universal indicator is added to each?",
        "stepByStepSolution": [
          "Step 1 (Testing with litmus): Dip red and blue litmus papers into each liquid [B1 mark].",
          "Step 2 (Deducing P - Acid): Liquid P turns blue litmus red and has no effect on red litmus. Liquid P is dilute hydrochloric acid (HCl) [B1 mark].",
          "Step 3 (Deducing Q - Neutral): Liquid Q leaves both red and blue litmus papers unchanged in color. Liquid Q is distilled water [B1 mark].",
          "Step 4 (Deducing R - Alkali): Liquid R turns red litmus blue and leaves blue litmus unchanged. Liquid R is sodium hydroxide solution (NaOH) [B1 mark].",
          "Step 5 (Universal Indicator observations): P turns red/orange (pH ≈ 1-2); Q turns green (pH 7); R turns purple/violet (pH ≈ 13-14) [B1 mark]."
        ],
        "keyTakeaway": "Blue litmus turning red indicates acidity; red litmus turning blue indicates alkalinity; no color change on both indicates neutral pH."
      },
      {
        "id": "ex-jhs3sci-t2-2",
        "title": "Writing and Balancing Neutralization Equations",
        "problem": "Write a balanced chemical equation for the reaction between dilute sulfuric acid (H₂SO₄) and sodium hydroxide solution (NaOH). Include state symbols and name the salt formed.",
        "stepByStepSolution": [
          "Step 1: Write unbalanced word equation: Sulfuric acid + Sodium hydroxide -> Sodium sulfate + Water.",
          "Step 2: Chemical formulas: H₂SO₄(aq) + NaOH(aq) -> Na₂SO₄(aq) + H₂O(l) [M1 mark].",
          "Step 3: Balance sodium atoms: Sodium sulfate has 2 Na atoms, so place coefficient 2 before NaOH: H₂SO₄ + 2NaOH -> Na₂SO₄ + H₂O [M1 mark].",
          "Step 4: Balance hydrogen and oxygen: Left side has 2 + 2 = 4 H atoms; right side needs 2 before H₂O: H₂SO₄(aq) + 2NaOH(aq) -> Na₂SO₄(aq) + 2H₂O(l) [A1 mark].",
          "Step 5: Name the salt formed: Sodium sulfate [B1 mark]."
        ],
        "keyTakeaway": "Sulfuric acid produces sulfate salts; hydrochloric acid produces chloride salts; nitric acid produces nitrate salts."
      }
    ]
  },
  {
    "id": "jhs3-sci-t3-chemical-reactions-equations",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 3,
    "title": "Chemical Reactions, Types & Balancing Equations",
    "description": "Distinguish physical vs chemical changes, understand signs of chemical reaction, master writing and balancing chemical equations with state symbols, and classify reaction types (synthesis, decomposition, displacement, neutralization).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=2Juem0lcifE",
    "youtubeId": "2Juem0lcifE",
    "keyNotes": "• Physical vs Chemical Changes:\n  - Physical change: No new substance formed; easily reversible; mass of system conserved; energy change usually small (e.g. melting ice, dissolving sugar, boiling water, magnetizing iron).\n  - Chemical change: One or more new substances formed; irreversible or difficult to reverse; significant energy absorbed or released; bonds broken and formed (e.g. rusting iron, burning firewood, souring milk, photosynthesis).\n• Signs of a Chemical Reaction:\n  1. Evolution of gas (effervescence / bubbling).\n  2. Color change.\n  3. Formation of a precipitate (insoluble solid).\n  4. Temperature change (exothermic = heat given out; endothermic = heat absorbed).\n• Law of Conservation of Mass:\n  - Matter is neither created nor destroyed in a chemical reaction.\n  - The total mass of reactants must equal the total mass of products.\n  - The number of atoms of each element on the reactant side must equal that on the product side.\n• State Symbols:\n  - (s) = solid; (l) = liquid; (g) = gas; (aq) = aqueous (dissolved in water).\n• Classification of Chemical Reactions:\n  1. Combination / Synthesis: Two or more reactants combine to form a single product. 2Mg(s) + O₂(g) -> 2MgO(s).\n  2. Decomposition: A single compound breaks down into two or more simpler substances upon heating or electrolysis. CaCO₃(s) -> CaO(s) + CO₂(g).\n  3. Single Displacement: A more reactive element displaces a less reactive element from its salt solution. Zn(s) + CuSO₄(aq) -> ZnSO₄(aq) + Cu(s).\n  4. Double Displacement (Precipitation): Mutual exchange of ions between two aqueous solutions forming a precipitate. AgNO₃(aq) + NaCl(aq) -> AgCl(s)↓ + NaNO₃(aq).\n• Chief Examiner Warning:\n  - NEVER alter the chemical subscripts of a formula to balance an equation (e.g. writing H₂O₂ instead of 2H₂O changes water to hydrogen peroxide!). Only change stoichiometric coefficients in front of formulas.",
    "examples": [
      {
        "id": "ex-jhs3sci-t3-1",
        "title": "Balancing Combustion and Gas Evolution Reactions (BECE Section B)",
        "problem": "Balance the following chemical equations: (a) CH₄(g) + O₂(g) -> CO₂(g) + H₂O(g)  and  (b) Al(s) + HCl(aq) -> AlCl₃(aq) + H₂(g).",
        "stepByStepSolution": [
          "Step 1 (Part a): Carbon is 1 on left, 1 on right (balanced). Left has 4 H; right has 2 in H₂O. Put 2 before H₂O: CH₄ + O₂ -> CO₂ + 2H₂O [M1 mark].",
          "Step 2: Count O on right: 2 (in CO₂) + 2 (in 2H₂O) = 4 O atoms. Put 2 before O₂ on left: CH₄(g) + 2O₂(g) -> CO₂(g) + 2H₂O(g) [A1 mark].",
          "Step 3 (Part b): AlCl₃ has 3 Cl atoms; H₂ has 2 H atoms. LCM of 2 and 3 is 6. Place 6 before HCl: 6HCl [M1 mark].",
          "Step 4: Balance Al and H: 6HCl provides 6 Cl (needs 2AlCl₃) and 6 H (needs 3H₂). 2AlCl₃ requires 2Al on left [M1 mark].",
          "Step 5: Final balanced equation: 2Al(s) + 6HCl(aq) -> 2AlCl₃(aq) + 3H₂(g) [A1 mark]."
        ],
        "keyTakeaway": "Balance metals first, followed by non-metals, then hydrogen and oxygen atoms last."
      },
      {
        "id": "ex-jhs3sci-t3-2",
        "title": "Investigating the Rusting of Iron (Corrosion Experiment)",
        "problem": "In an experiment to investigate rusting, three clean iron nails were placed in three test tubes: Tube 1 (nail in water exposed to air), Tube 2 (nail in boiled water sealed with oil), Tube 3 (nail in dry air with anhydrous calcium chloride). (a) In which tube(s) will rusting occur? (b) State the essential conditions required for rusting. (c) Give two practical methods for preventing iron from rusting.",
        "stepByStepSolution": [
          "Step 1 (Part a): Rusting will occur ONLY in Tube 1 [B1 mark]. Tubes 2 and 3 will show no rust.",
          "Step 2: Tube 2 has water but no oxygen (boiled to expel dissolved oxygen, oil seals out atmospheric air). Tube 3 has oxygen but no moisture (calcium chloride absorbs all water vapor) [B1 mark].",
          "Step 3 (Part b): The two essential conditions for iron rusting are: Moisture (water) AND Oxygen (air) [B1 mark].",
          "Step 4 (Part c): Rust prevention methods: (1) Painting / Oiling / Greasing (forms a barrier preventing contact with air and moisture); (2) Galvanization (coating iron with a layer of zinc) [B2 marks]."
        ],
        "keyTakeaway": "Both oxygen AND moisture are strictly required for iron to rust. Removing either condition prevents rusting completely."
      }
    ]
  },
  {
    "id": "jhs3-sci-t4-carbon-nitrogen-cycles",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 4,
    "title": "Carbon Cycle, Nitrogen Cycle & Environmental Balance",
    "description": "Understand the biochemical cycling of matter: processes adding and removing CO₂ from the atmosphere, the nitrogen cycle (fixation, nitrification, denitrification), greenhouse effect, global warming, and climate change.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=A495e31cDdE",
    "youtubeId": "A495e31cDdE",
    "keyNotes": "• The Carbon Cycle:\n  - Processes removing CO₂ from atmosphere:\n    1. Photosynthesis: Green plants absorb CO₂ to synthesize glucose: 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂.\n    2. Dissolution in oceans: Marine bodies absorb CO₂ forming carbonates in shells.\n  - Processes releasing CO₂ into atmosphere:\n    1. Respiration: Living organisms oxidize food: C₆H₁₂O₆ + 6O₂ -> 6CO₂ + 6H₂O + Energy.\n    2. Combustion: Burning fossil fuels (coal, petroleum, gas) and biomass/wood.\n    3. Decomposition: Decomposers (bacteria, fungi) break down dead organic matter.\n• The Greenhouse Effect & Global Warming:\n  - Greenhouse gases: Carbon dioxide (CO₂), Methane (CH₄), Nitrous oxide (N₂O), Water vapor.\n  - Mechanism: Short-wave solar radiation passes through atmosphere; earth absorbs and re-radiates long-wave infrared heat; greenhouse gases trap heat, warming the planet.\n  - Consequences: Melting polar ice caps, sea-level rise, severe flooding in coastal Ghana (e.g. Keta), droughts, food insecurity.\n• The Nitrogen Cycle:\n  - Atmospheric N₂ is unreactive (~78% of air) and cannot be absorbed directly by plants.\n  - Nitrogen Fixation:\n    1. Biological: Rhizobium bacteria in root nodules of leguminous plants (beans, groundnuts, cowpeas) convert N₂ into nitrates (NO₃⁻).\n    2. Atmospheric: Lightning provides high energy to combine N₂ and O₂ into nitrogen oxides which dissolve in rainwater.\n    3. Industrial: Haber process producing artificial ammonium/nitrate fertilizers.\n  - Nitrification: Nitrosomonas converts ammonium (NH₄⁺) to nitrites (NO₂⁻); Nitrobacter converts nitrites to nitrates (NO₃⁻).\n  - Assimilation: Plants absorb nitrates through roots to make plant proteins; animals eat plants to form animal proteins.\n  - Denitrification: Denitrifying bacteria (e.g. Pseudomonas) in waterlogged soils convert nitrates back into atmospheric nitrogen gas (N₂).\n• Chief Examiner Warning:\n  - Candidates frequently confuse nitrifying bacteria with nitrogen-fixing bacteria. Nitrogen-fixing converts free N₂ into nitrates; nitrifying converts ammonium compounds into nitrates.",
    "examples": [
      {
        "id": "ex-jhs3sci-t4-1",
        "title": "Analyzing the Nitrogen Cycle and Legume Crop Rotation (BECE Section B)",
        "problem": "A farmer in the Afram Plains notices declining maize yields. An agricultural extension officer advises her to rotate maize with cowpea (a legume) instead of applying expensive synthetic fertilizers. (a) Explain scientifically how cowpea improves soil fertility. (b) Name the specific bacterium involved and where it resides. (c) What is the role of denitrifying bacteria in the nitrogen cycle?",
        "stepByStepSolution": [
          "Step 1 (Part a): Cowpea has root nodules containing symbiotic bacteria that absorb atmospheric nitrogen gas and convert (fix) it into usable nitrates in the soil [B2 marks].",
          "Step 2: When the cowpea plant dies and decays, organic nitrogen is mineralized into ammonium and nitrate compounds, enriching the soil with nitrogen for the next maize crop [B1 mark].",
          "Step 3 (Part b): The bacterium is Rhizobium [B1 mark]. It resides in the root nodules of the legume [B1 mark].",
          "Step 4 (Part c): Denitrifying bacteria convert soil nitrates back into gaseous elemental nitrogen (N₂), releasing it into the atmosphere, thus completing the nitrogen cycle [B1 mark]."
        ],
        "keyTakeaway": "Crop rotation with legumes naturally restores soil nitrates without chemical fertilizer run-off, embodying sustainable agriculture."
      },
      {
        "id": "ex-jhs3sci-t4-2",
        "title": "Disruptions to the Carbon Cycle and Climate Change",
        "problem": "Explain two human activities that contribute to the enhanced greenhouse effect and describe two practical actions Ghana can take to mitigate global climate change.",
        "stepByStepSolution": [
          "Step 1 (Human activities): (1) Excessive burning of fossil fuels (petrol/diesel in vehicles and industries) releases vast amounts of CO₂ into the atmosphere. (2) Deforestation and slash-and-burn farming remove trees that naturally act as carbon sinks absorbing CO₂ via photosynthesis [B2 marks].",
          "Step 2 (Mitigation actions): (1) Afforestation and reforestation (e.g. the Green Ghana Project) to plant millions of trees to sequester CO₂. (2) Transitioning to renewable energy sources such as solar and hydroelectric power rather than heavy oil generators [B2 marks]."
        ],
        "keyTakeaway": "Planting trees directly lowers atmospheric carbon dioxide by capturing carbon into plant biomass through photosynthesis."
      }
    ]
  },
  {
    "id": "jhs3-sci-t5-plant-reproduction-pollination",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 5,
    "title": "Reproduction in Flowering Plants, Pollination & Seed Dispersal",
    "description": "Detailed study of flower structure (calyx, corolla, androecium, gynoecium), self vs cross-pollination, wind vs insect-pollinated flowers, fertilization, seed structure (dicot vs monocot), and mechanisms of seed dispersal.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=ta154f5-56E",
    "youtubeId": "ta154f5-56E",
    "keyNotes": "• Floral Structure & Functions:\n  - Calyx (Sepals): Protect flower bud before opening.\n  - Corolla (Petals): Brightly colored, scented, produce nectar to attract insect pollinators.\n  - Androecium (Male organs / Stamens):\n    * Anther: Produces pollen grains containing male gametes.\n    * Filament: Slender stalk supporting the anther.\n  - Gynoecium / Pistil (Female organs / Carpel):\n    * Stigma: Sticky surface that receives pollen grains.\n    * Style: Slender tube connecting stigma to ovary through which pollen tube grows.\n    * Ovary: Swollen base containing ovules (female gametes); develops into the fruit after fertilization.\n    * Ovules: Develop into seeds after fertilization.\n• Pollination:\n  - Definition: Transfer of pollen grains from the anther to the mature stigma of a flower.\n  - Self-pollination: Transfer within same flower or between flowers on the same plant.\n  - Cross-pollination: Transfer between flowers on different plants of the same species (increases genetic diversity).\n• Insect-Pollinated vs Wind-Pollinated Flowers:\n  - Insect-pollinated (e.g. Hibiscus, Pride of Barbados): Large brightly colored petals, sweet scent, nectar present, sticky/spiky pollen, small sticky stigma enclosed within petals.\n  - Wind-pollinated (e.g. Maize, Grass): Small dull petals (or absent), no scent/nectar, light smooth powdery pollen in large quantities, long feathery stigmas and versatile stamens hanging outside the flower.\n• Fertilization:\n  - Pollen grain germinates on stigma -> pollen tube grows down style into ovary -> male nucleus fuses with female egg cell (ovule) to form a zygote.\n• Seed Dispersal Agents & Adaptations:\n  - Wind: Light, winged seeds or parachutes of hairs (e.g. Silk cotton / Ceiba, Tridax).\n  - Water: Fibrous buoyant husks containing air spaces (e.g. Coconut).\n  - Animals: Succulent edible flesh (e.g. Mango, Tomato) or hooked burrs that cling to fur/clothing (e.g. Desmodium, Boerhavia).\n  - Explosive mechanism (Self-dispersal): Dry pod splits suddenly along lines of weakness when dry, flinging seeds out (e.g. Crotalaria, Pride of Barbados, Balsam).\n• Chief Examiner Warning:\n  - WAEC candidates often state that ovary becomes seed and ovule becomes fruit. Remember: OVARY becomes FRUIT; OVULE becomes SEED.",
    "examples": [
      {
        "id": "ex-jhs3sci-t5-1",
        "title": "Contrasting Wind and Insect Pollinated Flowers (BECE Practical Specimen)",
        "problem": "Specimen A is a complete Hibiscus flower and Specimen B is an inflorescence of Maize (corn). (a) State the agent of pollination for each specimen. (b) Give three structural differences between Specimen A and Specimen B that adapt them to their modes of pollination.",
        "stepByStepSolution": [
          "Step 1 (Part a): Specimen A (Hibiscus) is pollinated by insects [B1 mark]. Specimen B (Maize) is pollinated by wind [B1 mark].",
          "Step 2 (Structural differences - Petals): Specimen A has large, brightly colored petals to attract insects; Specimen B has inconspicuous, dull green petals without nectar [B1 mark].",
          "Step 3 (Stigma differences): Specimen A has a compact, sticky stigma inside the flower; Specimen B has long, feathery stigmas (silks) protruding outside to catch airborne pollen [B1 mark].",
          "Step 4 (Pollen differences): Specimen A produces relatively few, large, sticky pollen grains; Specimen B produces vast quantities of tiny, light, smooth pollen that floats easily in air currents [B1 mark]."
        ],
        "keyTakeaway": "Match structural adaptations directly to the physical requirements of the pollinating agent (insects need visual attraction; wind requires aerodynamic lightness)."
      },
      {
        "id": "ex-jhs3sci-t5-2",
        "title": "Seed Structure and Conditions for Germination",
        "problem": "State the functions of the following parts of a seed: (a) Micropyle, (b) Testa, (c) Cotyledon, (d) Plumule, (e) Radicle. List the three environmental factors strictly necessary for seed germination.",
        "stepByStepSolution": [
          "Step 1: Micropyle: Tiny pore that allows entry of water and dissolved oxygen into the seed during germination [B1 mark].",
          "Step 2: Testa (seed coat): Tough outer coat that protects the delicate embryo from mechanical damage and pathogen attack [B1 mark].",
          "Step 3: Cotyledon: Stores food reserves (starch, protein, lipid) to nourish the young embryo until first foliage leaves develop [B1 mark].",
          "Step 4: Plumule develops into the shoot system; Radicle develops into the root system [B1 mark].",
          "Step 5: Three essential conditions for seed germination: Water (moisture), Oxygen, and Suitable temperature (warmth). (Note: Light and soil are NOT required for germination!) [B2 marks]."
        ],
        "keyTakeaway": "Remember WOW for germination: Water, Oxygen, Warmth. Seeds do NOT require light or soil to germinate!"
      }
    ]
  },
  {
    "id": "jhs3-sci-t6-human-nervous-endocrine",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 6,
    "title": "Human Nervous & Endocrine Systems",
    "description": "Detailed coordination in humans: Central Nervous System (Brain & Spinal Cord), sensory vs motor neurons, reflex arc, structure and defects of the mammalian eye, and endocrine glands and hormones (pituitary, thyroid, pancreas, adrenal, gonads).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Hnd_4bS8ZgM",
    "youtubeId": "Hnd_4bS8ZgM",
    "keyNotes": "• Nervous System Organization:\n  - Central Nervous System (CNS): Brain and Spinal Cord (coordinates and interprets information).\n  - Peripheral Nervous System (PNS): Cranial nerves and spinal nerves transmitting impulses between CNS and body tissues.\n• Neurons (Nerve Cells):\n  - Sensory (Afferent) Neuron: Carries impulses from sense organs/receptors to the CNS.\n  - Relay (Intermediate) Neuron: Connects sensory and motor neurons within spinal cord/brain.\n  - Motor (Efferent) Neuron: Carries impulses from CNS to effectors (muscles or glands) to trigger response.\n• Reflex Action & Reflex Arc:\n  - Reflex action: Rapid, automatic, involuntary response to a stimulus without conscious thought (e.g. knee jerk, withdrawing hand from hot object, blinking).\n  - Pathway (Reflex Arc): Stimulus -> Receptor -> Sensory Neuron -> Relay Neuron (Spinal Cord) -> Motor Neuron -> Effector (Muscle) -> Response.\n• The Human Eye:\n  - Cornea: Transparent front layer that refracts light into the eye.\n  - Iris: Colored muscular ring that controls pupil size and regulates light entering eye.\n  - Lens: Biconvex flexible structure that fine-focuses light rays onto retina (Accommodation).\n  - Retina: Light-sensitive inner layer containing rods (dim light/black-white) and cones (bright light/color).\n  - Optic Nerve: Transmits electrical nerve impulses from retina to the visual cortex of the brain.\n  - Eye Defects & Corrections:\n    1. Short sight (Myopia): Can see near objects clearly but distant objects are blurred (image forms in front of retina). Corrected with CONCAVE (diverging) lens.\n    2. Long sight (Hypermetropia): Can see distant objects clearly but near objects are blurred (image forms behind retina). Corrected with CONVEX (converging) lens.\n• The Endocrine (Hormonal) System:\n  - Ductless glands releasing chemical messengers (hormones) directly into the bloodstream.\n  - Pituitary Gland: 'Master gland' producing Growth Hormone (GH) and Thyroid Stimulating Hormone (TSH).\n  - Thyroid Gland: Secretes Thyroxine (regulates basal metabolic rate; deficiency causes goitre).\n  - Pancreas (Islets of Langerhans): Secretes Insulin (converts glucose -> glycogen, lowering blood sugar; deficiency causes Diabetes mellitus) and Glucagon (raises blood sugar).\n  - Adrenal Gland: Secretes Adrenaline ('fight or flight' hormone: increases heart rate, dilates bronchioles).\n  - Testes: Produce Testosterone (male secondary sexual characteristics).\n  - Ovaries: Produce Estrogen and Progesterone (menstrual cycle, female secondary sexual characteristics).\n• Chief Examiner Warning:\n  - Do NOT confuse nervous coordination with hormonal coordination. Nervous is fast, electrical, short-lived, and travels along nerves; hormonal is slower, chemical, long-lasting, and travels via blood.",
    "examples": [
      {
        "id": "ex-jhs3sci-t6-1",
        "title": "Tracing the Reflex Arc and Eye Accomodation (BECE Section B)",
        "problem": "A student accidentally steps barefoot on a sharp needle and instantly withdraws her foot before feeling conscious pain. (a) State the type of action demonstrated. (b) Trace the pathway of nerve impulses from stimulus to response. (c) Why does the withdrawal occur before conscious pain is registered?",
        "stepByStepSolution": [
          "Step 1 (Part a): This is a spinal reflex action (involuntary, rapid response) [B1 mark].",
          "Step 2 (Part b): Pathway: Sharp needle pricks pain receptors in foot skin -> Sensory neuron -> Relay/connector neuron in gray matter of spinal cord -> Motor neuron -> Effector (leg flexor muscles contract) -> Foot withdrawn [B3 marks].",
          "Step 3 (Part c): The impulse passes directly through the spinal cord for immediate motor response without waiting for impulses to travel up the sensory tract to the cerebral cortex of the brain, thereby protecting the body from severe tissue damage [B1 mark]."
        ],
        "keyTakeaway": "Reflex arcs bypass conscious brain processing to ensure instantaneous protective motor action."
      },
      {
        "id": "ex-jhs3sci-t6-2",
        "title": "Correcting Eye Defects and Blood Sugar Regulation",
        "problem": "(a) Draw a ray diagram showing how short-sightedness (myopia) is corrected using an optical lens. (b) Explain the homeostatic role of the pancreas when a person drinks a highly concentrated glucose drink.",
        "stepByStepSolution": [
          "Step 1 (Part a): In myopia, light rays from a distant object focus in front of the retina because the eyeball is too long or the lens is too curved [B1 mark].",
          "Step 2: Placing a CONCAVE (diverging) lens in front of the eye diverges incoming parallel rays slightly before entering the eye, allowing the crystalline lens to focus the sharp image directly onto the retina [B1 mark].",
          "Step 3 (Part b): High glucose intake raises blood sugar above normal (~90 mg/100 mL). The beta cells of the Islets of Langerhans in the pancreas detect this and secrete INSULIN into the blood [B1 mark].",
          "Step 4: Insulin stimulates liver and skeletal muscle cells to absorb glucose and convert excess glucose into insoluble GLYCOGEN for storage, returning blood glucose levels to normal [B1 mark]."
        ],
        "keyTakeaway": "Insulin lowers blood glucose by converting it to glycogen; glucagon raises blood glucose by breaking down glycogen into glucose."
      }
    ]
  },
  {
    "id": "jhs3-sci-t7-human-excretory-system",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 7,
    "title": "Human Excretory System: Kidneys, Nephron & Skin",
    "description": "Distinguish excretion vs egestion, identify excretory organs and products (lungs, kidneys, skin, liver), explore kidney structure and nephron ultrafiltration/selective reabsorption, osmoregulation, and skin structure.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=TZMJeZZkHj8",
    "youtubeId": "TZMJeZZkHj8",
    "keyNotes": "• Excretion vs Egestion:\n  - Excretion: The removal of toxic metabolic waste products of cellular activity from the body (e.g. urea, uric acid, carbon dioxide, excess water and mineral salts).\n  - Egestion: The removal of undigested, unabsorbed food substances (faeces) from the alimentary canal through the anus. (Faeces is NOT an excretory product!).\n• Major Human Excretory Organs & Products:\n  1. Kidneys: Excrete urine (urea, uric acid, mineral salts, excess water).\n  2. Lungs: Excrete carbon dioxide and water vapor during exhalation.\n  3. Skin: Excretes sweat (water, mineral salts/NaCl, trace urea) through sweat glands; also performs thermoregulation.\n  4. Liver: Deamination of excess amino acids to form urea; breaks down hemoglobin into bile pigments (bilirubin/biliverdin).\n• Structure of the Urinary System:\n  - Renal Artery: Carries oxygenated, waste-rich blood from aorta into kidneys.\n  - Kidneys (Cortex, Medulla, Pelvis): Filter blood and produce urine.\n  - Ureters: Narrow muscular tubes carrying urine from kidney pelvis to bladder.\n  - Urinary Bladder: Muscular sac that temporarily stores urine.\n  - Urethra: Canal carrying urine from bladder to the exterior.\n  - Renal Vein: Carries deoxygenated, purified blood from kidneys back to vena cava.\n• The Nephron (Functional Unit of Kidney):\n  1. Ultrafiltration (Bowman's Capsule & Glomerulus): High hydrostatic pressure in glomerulus forces water, glucose, amino acids, urea, and salts across basement membrane into Bowman's capsule forming glomerular filtrate. Blood cells and large plasma proteins are retained.\n  2. Selective Reabsorption (Proximal Convoluted Tubule & Loop of Henle): 100% of glucose and amino acids, plus essential water and salts, are reabsorbed back into peritubular capillaries by active transport and osmosis.\n  3. Secretion and Concentration (Distal Tubule & Collecting Duct): Remaining liquid containing concentrated urea and excess salts forms URINE.\n• Osmoregulation & Skin Thermoregulation:\n  - Antidiuretic Hormone (ADH) from pituitary gland controls water reabsorption in collecting ducts. High dehydration -> high ADH -> concentrated, dark yellow urine.\n  - Skin layers: Epidermis (cornified, granular, Malpighian layers) and Dermis (sweat glands, sebaceous glands, hair follicles, erector muscles, capillaries).\n• Chief Examiner Warning:\n  - Never list faeces or defecation as excretion in BECE! Doing so loses all marks for that question.",
    "examples": [
      {
        "id": "ex-jhs3sci-t7-1",
        "title": "Analyzing Glomerular Filtrate vs Urine Composition (BECE Section B)",
        "problem": "A clinical laboratory analyzed samples from three locations in a healthy person's excretory system: (1) Blood plasma in renal artery, (2) Glomerular filtrate in Bowman's capsule, (3) Urine in collecting duct. (a) Explain why glucose is present in the glomerular filtrate but completely absent in normal urine. (b) Explain why proteins and red blood cells are found in the renal artery but absent in the glomerular filtrate.",
        "stepByStepSolution": [
          "Step 1 (Part a): Glucose molecules are small and filter readily under high pressure across the glomerular membrane into Bowman's capsule [B1 mark].",
          "Step 2: In a healthy person, 100% of this filtered glucose is selectively reabsorbed back into the blood capillaries along the proximal convoluted tubule via active transport, so zero glucose appears in normal urine [B2 marks]. (Presence of glucose indicates diabetes).",
          "Step 3 (Part b): Plasma proteins and red blood cells are macromolecules / large cellular structures that cannot pass through the microscopic pores of the glomerular filter membrane during ultrafiltration, hence they remain in the bloodstream [B2 marks]."
        ],
        "keyTakeaway": "Ultrafiltration separates by particle size; selective reabsorption retrieves valuable nutrients (glucose, amino acids) back into circulation."
      },
      {
        "id": "ex-jhs3sci-t7-2",
        "title": "Thermoregulation by the Skin on a Hot Afternoon",
        "problem": "Describe two physiological responses of the human skin when the environmental temperature rises to 38°C on a sunny afternoon in Tamale.",
        "stepByStepSolution": [
          "Step 1 (Vasodilation): Arterioles supplying blood capillaries in the dermis dilate (widen). More warm blood flows near the skin surface, increasing heat loss by radiation and convection [B2 marks].",
          "Step 2 (Sweating): Sweat glands become stimulated and secrete sweat (water and salts) onto the skin surface. As the sweat evaporates, it absorbs latent heat of vaporization from the body, cooling the skin [B2 marks]."
        ],
        "keyTakeaway": "Skin thermoregulation in heat relies on vasodilation and evaporative cooling through sweating."
      }
    ]
  },
  {
    "id": "jhs3-sci-t8-electric-circuits-magnetism",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Electric Circuits, Ohm's Law & Magnetism",
    "description": "Current, voltage, and resistance; Ohm's Law (V = IR); series and parallel circuit calculations; domestic electrical safety (fuses, earth wire, 3-pin plug); magnetic fields, electromagnets, and electromagnetic induction.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=F1p3fgbDnkY",
    "youtubeId": "F1p3fgbDnkY",
    "keyNotes": "• Fundamental Electrical Quantities & Units:\n  - Electric Current (I): Rate of flow of electric charge (I = Q/t). Unit: Ampere (A). Measured with Ammeter in SERIES.\n  - Potential Difference / Voltage (V): Work done per unit charge (V = W/Q). Unit: Volt (V). Measured with Voltmeter in PARALLEL.\n  - Resistance (R): Opposition to the flow of current. Unit: Ohm (Ω).\n• Ohm's Law:\n  - The electric current passing through a metallic conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant: V = I × R (I = V/R, R = V/I).\n• Resistors in Circuit Configurations:\n  - Series Circuit:\n    * Total Resistance R_T = R₁ + R₂ + R₃.\n    * Current is IDENTICAL at all points: I_T = I₁ = I₂.\n    * Total Voltage V_T = V₁ + V₂ + V₃.\n  - Parallel Circuit:\n    * 1/R_T = 1/R₁ + 1/R₂ (or R_T = (R₁ × R₂) / (R₁ + R₂)).\n    * Voltage is IDENTICAL across each parallel branch: V_T = V₁ = V₂.\n    * Total Current splits: I_T = I₁ + I₂.\n• Domestic Electricity & Electrical Safety:\n  - The 3-Pin Plug wiring color codes:\n    * Live wire (L): BROWN (carries high alternating potential ~230V to appliance).\n    * Neutral wire (N): BLUE (completes circuit, returns at ~0V).\n    * Earth wire (E): GREEN and YELLOW stripes (safety wire connected to metal casing).\n  - Fuse: Safety device containing a thin wire with a low melting point that melts ('blows') when current exceeds its rating, breaking the circuit. Always fitted on the LIVE wire!\n  - Circuit Breakers: Electromagnetic switches that trip off automatically during overcurrent.\n• Magnetism & Electromagnetism:\n  - Magnetic poles: Like poles repel, unlike poles attract.\n  - Magnetic field lines: Travel from North pole to South pole externally; never cross each other.\n  - Electromagnet: Coil of insulated wire (solenoid) wound around a soft iron core. Magnetic field exists only when current flows. Strength increased by: increasing current, increasing number of turns, using soft iron core.\n• Chief Examiner Warning:\n  - Ammeters MUST be connected in series; voltmeters MUST be connected in parallel. Swapping them burns out the ammeter or creates an open circuit.\n  - A fuse must always be connected into the LIVE wire, never the neutral wire.",
    "examples": [
      {
        "id": "ex-jhs3sci-t8-1",
        "title": "Solving Series-Parallel Circuit Combinations (BECE Section B)",
        "problem": "Two resistors of 6 Ω and 3 Ω are connected in parallel. This parallel pair is then connected in series with a 4 Ω resistor and a 12 V DC battery of negligible internal resistance. (a) Calculate the total effective resistance of the circuit. (b) Calculate the total circuit current. (c) Determine the potential difference across the 4 Ω resistor.",
        "stepByStepSolution": [
          "Step 1 (Parallel combination): 1/R_p = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore R_p = 2 Ω [M1, A1 marks].",
          "Step 2 (Total resistance): The 4 Ω resistor is in series with R_p: R_T = R_p + 4 = 2 + 4 = 6 Ω [B1 mark].",
          "Step 3 (Total current): Use Ohm's Law: I_T = V / R_T = 12 V / 6 Ω = 2 A [M1, A1 marks].",
          "Step 4 (Voltage across 4 Ω resistor): In series, total current 2 A flows through the 4 Ω resistor: V_4 = I × R = 2 A × 4 Ω = 8 V [A1 mark]."
        ],
        "keyTakeaway": "Combine parallel resistors into an equivalent single resistor first before adding series resistances."
      },
      {
        "id": "ex-jhs3sci-t8-2",
        "title": "Domestic Wiring and Electrical Power Calculation",
        "problem": "An electric iron rated at 1,150 W is connected to a 230 V Ghanaian mains supply. (a) Calculate the normal operating current of the iron. (b) Which of the following fuse ratings is most suitable to protect the iron: 3 A, 5 A, or 13 A? Give a reason.",
        "stepByStepSolution": [
          "Step 1 (Part a): Electric Power P = V × I => I = P / V [M1 mark].",
          "Step 2: I = 1,150 W / 230 V = 5.0 A [A1 mark].",
          "Step 3 (Part b): The 5.0 A fuse would blow during minor fluctuations. The 3 A fuse is too small and would blow immediately. The most suitable fuse rating is the NEXT standard rating above normal operating current [B1 mark].",
          "Step 4: A 13 A fuse would allow too much dangerous current before blowing. If standard 7A or 10A is absent, 13A is the British standard plug fuse rated just above 5A appliances [B1 mark]."
        ],
        "keyTakeaway": "Fuse ratings must be just slightly higher than the device's normal operating current to prevent nuisance tripping while ensuring safety."
      }
    ]
  },
  {
    "id": "jhs3-sci-t9-electronics-semiconductors",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 9,
    "title": "Basic Electronics: Diodes, LEDs, Transistors & Logic Gates",
    "description": "Semiconductor physics (intrinsic vs extrinsic, p-type and n-type), p-n junction diode and rectifiers, Light Emitting Diodes (LEDs), bipolar junction transistors as switches/amplifiers, and fundamental digital logic gates (AND, OR, NOT).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=gT8_1B_7w7w",
    "youtubeId": "gT8_1B_7w7w",
    "keyNotes": "• Semiconductors & Doping:\n  - Semiconductors: Materials with electrical conductivity between conductors (copper) and insulators (glass). Examples: Silicon (Si) and Germanium (Ge), Group IV elements with 4 valence electrons.\n  - Doping: The deliberate addition of minute impurities to pure (intrinsic) semiconductor crystal to dramatically increase its electrical conductivity.\n  - N-type semiconductor: Doped with pentavalent atoms (5 valence electrons, e.g. Phosphorus, Arsenic). Majority charge carriers are free electrons; minority carriers are holes.\n  - P-type semiconductor: Doped with trivalent atoms (3 valence electrons, e.g. Boron, Gallium). Majority charge carriers are positive holes; minority carriers are electrons.\n• P-N Junction Diode:\n  - Formed by joining p-type and n-type materials together.\n  - Forward Bias: Anode (p-side) connected to positive terminal; Cathode (n-side) connected to negative terminal. Depletion layer narrows; diode conducts current easily.\n  - Reverse Bias: Anode (p-side) connected to negative; Cathode (n-side) connected to positive. Depletion layer widens; no current flows (except negligible leakage).\n  - Function: Acts as an electrical one-way valve. Used for RECTIFICATION (converting AC into DC).\n• Light Emitting Diode (LED):\n  - Emits visible light when forward biased.\n  - Longer lead is positive (Anode); shorter lead or flat edge is negative (Cathode).\n  - Must always be protected with a current-limiting series resistor to prevent burnout.\n• Transistor (Bipolar Junction Transistor - BJT):\n  - Three terminals: Base (B), Collector (C), Emitter (E).\n  - NPN and PNP configurations.\n  - Operation: A small base current (I_B) controls a much larger collector current (I_C).\n  - Applications: Electronic switch (automatic street lights, alarm systems) and amplifier.\n• Fundamental Logic Gates & Truth Tables:\n  - Binary states: High voltage = Logic 1; Low voltage = Logic 0.\n  - NOT Gate (Inverter): 1 input, 1 output. Output is opposite of input (Output = A'). (0 -> 1; 1 -> 0).\n  - AND Gate: 2 inputs, 1 output. Output is 1 ONLY IF BOTH inputs are 1 (Output = A · B).\n  - OR Gate: 2 inputs, 1 output. Output is 1 IF AT LEAST ONE input is 1 (Output = A + B).\n• Chief Examiner Warning:\n  - Ensure correct gate symbols: AND has a flat back and rounded nose; OR has a curved back and pointed nose; NOT has a triangle with an inversion bubble at the tip.",
    "examples": [
      {
        "id": "ex-jhs3sci-t9-1",
        "title": "Constructing Truth Tables for Combined Logic Gates (BECE Section B)",
        "problem": "A logic circuit consists of two inputs A and B fed into an AND gate, whose output is then connected to the input of a NOT gate (NAND arrangement). (a) Draw the logic circuit diagram. (b) Construct a truth table showing the intermediate output and final output for all possible combinations of inputs A and B.",
        "stepByStepSolution": [
          "Step 1 (Part a): Draw standard AND gate symbol receiving inputs A and B, connecting its single output line directly to the triangular NOT gate with a bubble [B1 mark].",
          "Step 2 (Part b - Inputs): Set up 4 possible binary input combinations: (0,0), (0,1), (1,0), (1,1) [B1 mark].",
          "Step 3 (AND Gate intermediate output X = A·B): 0·0 = 0; 0·1 = 0; 1·0 = 0; 1·1 = 1 [M1 mark].",
          "Step 4 (NOT Gate inversion final output Y = X'): Invert each value of X: When X=0, Y=1; when X=0, Y=1; when X=0, Y=1; when X=1, Y=0 [A1 mark].",
          "Step 5: Final output column reads: 1, 1, 1, 0 [B1 mark]."
        ],
        "keyTakeaway": "NAND logic yields 1 whenever any input is 0, and produces 0 only when both inputs are 1."
      },
      {
        "id": "ex-jhs3sci-t9-2",
        "title": "Forward vs Reverse Biasing of a Diode",
        "problem": "Explain why an LED connected in a circuit lights up when connected in one orientation but fails to light up when the battery terminals are reversed.",
        "stepByStepSolution": [
          "Step 1: In the first orientation, the LED is forward-biased: the positive battery terminal connects to the anode (p-type) and the negative terminal to the cathode (n-type) [B1 mark].",
          "Step 2: This forward voltage overcomes the barrier potential, allowing electrons and holes to cross the junction and recombine, releasing energy as photons of visible light [B1 mark].",
          "Step 3: When battery terminals are reversed, the LED is reverse-biased: the depletion region widens, creating an extremely high electrical resistance that completely blocks electric current, so no light is emitted [B2 marks]."
        ],
        "keyTakeaway": "Diodes conduct current and emit light only when forward-biased (anode to positive, cathode to negative)."
      }
    ]
  },
  {
    "id": "jhs3-sci-t10-forces-pressure-energy",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 10,
    "title": "Forces, Pressure in Fluids, Work, Energy & Power",
    "description": "Types of forces (frictional, gravitational, magnetic, electrostatic), Newton's laws of motion, pressure in solids and liquids (P = ρgh), atmospheric pressure, hydraulic systems, Archimedes' Principle, work done, kinetic and potential energy, and mechanical power.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=b4O6N4tB3rM",
    "youtubeId": "b4O6N4tB3rM",
    "keyNotes": "• Forces & Newton's Laws of Motion:\n  - Force: A push or pull that changes an object's state of rest, speed, or direction of motion. Unit: Newton (N).\n  - Contact forces (Friction, Tension, Normal) vs Non-contact forces (Gravity, Magnetism, Electrostatics).\n  - Newton's 1st Law: An object remains at rest or in uniform motion in a straight line unless acted upon by a net external force (Inertia).\n  - Newton's 2nd Law: Force is proportional to the rate of change of momentum: F = m × a (Force = Mass × Acceleration).\n  - Newton's 3rd Law: For every action, there is an equal and opposite reaction.\n• Pressure in Solids and Fluids:\n  - Pressure (P) = Force (F) / Area (A). Unit: Pascal (Pa) or N/m².\n  - High pressure: Small surface area (e.g. sharp knife, syringe needle, high stiletto heels).\n  - Low pressure: Large surface area (e.g. tractor tires, camel hooves, snow shoes).\n  - Pressure in Liquids: P = ρ × g × h (where ρ = liquid density, g = 9.8 or 10 m/s², h = depth).\n    * Pressure increases directly with depth.\n    * Acts equally in all directions at the same depth.\n    * Independent of vessel shape.\n  - Atmospheric Pressure: Weight of the air column pressing on earth (~101,300 Pa at sea level). Decreases with altitude. Measured using a Mercury Barometer.\n  - Pascal's Principle (Hydraulics): Pressure applied to an enclosed liquid is transmitted undiminished to every portion of the fluid: F₁/A₁ = F₂/A₂. Used in hydraulic car jacks and hydraulic brakes.\n• Archimedes' Principle & Flotation:\n  - Archimedes' Principle: When a body is completely or partially submerged in a fluid, it experiences an upthrust equal to the weight of fluid displaced.\n  - Law of Flotation: A floating body displaces its own weight of the fluid in which it floats.\n• Work, Energy, and Power:\n  - Work Done (W) = Force (F) × Distance moved in direction of force (d). Unit: Joule (J).\n  - Kinetic Energy: KE = 1/2 × m × v².\n  - Gravitational Potential Energy: PE = m × g × h.\n  - Power (P) = Work Done / Time taken (or Energy / Time). Unit: Watt (W) = J/s.\n• Chief Examiner Warning:\n  - Always convert mass to kilograms (kg), distance to metres (m), and area to m² before calculating force, work, or pressure.",
    "examples": [
      {
        "id": "ex-jhs3sci-t10-1",
        "title": "Calculating Hydraulic Pressure and Mechanical Advantage (BECE Section B)",
        "problem": "In a hydraulic car lift, the effort piston has a cross-sectional area of 0.02 m² and the load piston supporting a vehicle has an area of 1.2 m². (a) What effort force must be applied to the small piston to lift a vehicle of mass 1,800 kg? (Take g = 10 m/s²). (b) Explain the scientific principle behind this device.",
        "stepByStepSolution": [
          "Step 1: Calculate the load force (weight of car): F₂ = m × g = 1,800 kg × 10 m/s² = 18,000 N [B1 mark].",
          "Step 2: Apply Pascal's Principle: Pressure at small piston = Pressure at large piston => F₁ / A₁ = F₂ / A₂ [M1 mark].",
          "Step 3: Substitute values: F₁ / 0.02 = 18,000 / 1.2 [M1 mark].",
          "Step 4: Solve for F₁: F₁ = (18,000 × 0.02) / 1.2 = 360 / 1.2 = 300 N [A1 mark].",
          "Step 5 (Part b): Pascal's Principle states that pressure applied to an enclosed incompressible liquid is transmitted equally and undiminished in all directions, multiplying the force by the ratio of the piston areas [B1 mark]."
        ],
        "keyTakeaway": "A small effort on a small area creates a pressure that lifts a massive load on a large area (force multiplier)."
      },
      {
        "id": "ex-jhs3sci-t10-2",
        "title": "Work, Kinetic Energy and Power Calculations",
        "problem": "A crane lifts an iron girder of mass 500 kg vertically upwards through a height of 16 m in 20 seconds at constant speed. (Take g = 10 m/s²). Calculate: (a) The work done by the crane, (b) The power developed by the crane in kilowatts (kW).",
        "stepByStepSolution": [
          "Step 1: Weight of girder F = m × g = 500 kg × 10 m/s² = 5,000 N [B1 mark].",
          "Step 2: Work done W = F × d = 5,000 N × 16 m = 80,000 Joules (J) [M1, A1 marks].",
          "Step 3: Power P = Work / Time = 80,000 J / 20 s = 4,000 Watts (W) [M1, A1 marks].",
          "Step 4: Convert to kilowatts: 4,000 W / 1,000 = 4.0 kW [B1 mark]."
        ],
        "keyTakeaway": "Power is the rate of doing work. Always divide Watts by 1,000 to convert to kilowatts when requested."
      }
    ]
  },
  {
    "id": "jhs3-sci-t11-solar-system-space",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "The Solar System, Moon Phases, Tides & Space Exploration",
    "description": "Composition of the solar system (Sun, 8 planets, asteroid belt, comets, meteors), inner terrestrial vs outer gas giants, phases of the Moon, solar and lunar eclipses, oceanic tides, and modern space exploration (satellites, GPS, weather forecasting).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=libKVRa01L8",
    "youtubeId": "libKVRa01L8",
    "keyNotes": "• The Solar System:\n  - The Sun: A medium-sized yellow dwarf star at the center; provides light and heat via nuclear fusion.\n  - The 8 Planets in order of distance from Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. (Mnemonic: My Very Educated Mother Just Served Us Noodles).\n  - Terrestrial (Inner) Planets: Mercury, Venus, Earth, Mars (rocky, dense, small, few/no moons).\n  - Jovian / Gas Giant (Outer) Planets: Jupiter, Saturn, Uranus, Neptune (massive, gaseous/icy, ring systems, many moons).\n  - Asteroid Belt: Region of rocky debris between the orbits of Mars and Jupiter.\n  - Comets: Cosmic snowballs of frozen gases, rock, and dust orbiting the Sun in highly elliptical orbits; develop glowing tails pointing AWAY from the Sun.\n• The Moon, Phases, and Tides:\n  - The Moon is Earth's only natural satellite; reflects sunlight; takes ~29.5 days to complete lunar phase cycle.\n  - Phases: New Moon -> Waxing Crescent -> First Quarter -> Waxing Gibbous -> Full Moon -> Waning Gibbous -> Third Quarter -> Waning Crescent.\n  - Tides: Periodic rise and fall of ocean sea levels caused primarily by the gravitational pull of the Moon and the Sun.\n    * Spring Tides: Highest high tides and lowest low tides; occur when Sun, Earth, and Moon are aligned in a straight line (New Moon and Full Moon).\n    * Neap Tides: Moderate tides with lowest tidal range; occur when Moon and Sun are at right angles (90°) relative to Earth (First and Third Quarters).\n• Eclipses:\n  - Solar Eclipse: Moon passes directly between Sun and Earth, casting its shadow (umbra/penumbra) onto Earth during daytime.\n  - Lunar Eclipse: Earth passes directly between Sun and Moon, casting Earth's shadow onto the full Moon at night.\n• Artificial Satellites & Space Exploration:\n  - Geostationary Satellites: Orbit at ~36,000 km directly above the equator, matching Earth's rotation (24 hours); used for telecommunications, live television broadcasting, and weather monitoring.\n  - Low Earth Orbit (LEO) Satellites: Earth observation, scientific research (International Space Station), Global Positioning System (GPS).\n• Chief Examiner Warning:\n  - In eclipse diagrams, rays from top and bottom of the Sun must cross correctly to produce the dark central umbra and lighter outer penumbra.",
    "examples": [
      {
        "id": "ex-jhs3sci-t11-1",
        "title": "Differentiating Solar and Lunar Eclipses (BECE Section B)",
        "problem": "(a) Draw a well-labelled ray diagram illustrating a Total Solar Eclipse. (b) Explain why a solar eclipse lasts for only a few minutes at any specific spot on Earth, whereas a lunar eclipse can be observed for several hours.",
        "stepByStepSolution": [
          "Step 1 (Part a diagram labels): Draw Sun, Moon, and Earth in order. Draw two pairs of light rays from outer edges of the Sun tangents to the Moon, casting a tiny pinpoint dark shadow cone (umbra) onto Earth's surface and a wider penumbra [B2 marks].",
          "Step 2: Correctly label: Sun, Moon, Earth, Umbra (zone of total darkness), Penumbra (zone of partial darkness) [B1 mark].",
          "Step 3 (Part b): The Moon is much smaller than the Earth, so its dark umbral shadow cast onto Earth is very small (rarely more than 150 km wide) and sweeps rapidly across the rotating Earth, lasting only 2 to 7 minutes at any single location [B1 mark].",
          "Step 4: In contrast, the Earth is much larger than the Moon, casting a massive shadow cone that completely engulfs the entire Moon for up to several hours during a lunar eclipse [B1 mark]."
        ],
        "keyTakeaway": "Solar eclipse order is Sun - Moon - Earth; Lunar eclipse order is Sun - Earth - Moon."
      },
      {
        "id": "ex-jhs3sci-t11-2",
        "title": "Planetary Classification and Artificial Satellites",
        "problem": "State two differences between terrestrial planets and gas giants. Give two practical benefits of artificial satellites to the socio-economic development of Ghana.",
        "stepByStepSolution": [
          "Step 1 (Planetary differences): (1) Terrestrial planets have solid rocky surfaces and high density, whereas gas giants are composed predominantly of hydrogen, helium, and methane with low density. (2) Terrestrial planets are smaller with few or no moons, whereas gas giants are massive with extensive ring systems and dozens of moons [B2 marks].",
          "Step 2 (Satellite benefits to Ghana): (1) Telecommunications and Internet: Satellites enable mobile phone networks, satellite broadband, and digital television broadcasting nationwide. (2) Disaster management and weather forecasting: Satellite imaging tracks rainstorms, coastal erosion, deforestation, and monitors illegal mining (galamsey) [B2 marks]."
        ],
        "keyTakeaway": "Earth observation satellites provide vital environmental and meteorological data for national planning and emergency response."
      }
    ]
  },
  {
    "id": "jhs3-sci-t12-ecosystems-balance",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Ecosystems, Food Webs, Trophic Levels & Ecological Balance",
    "description": "Ecosystem components (biotic vs abiotic factors), food chains, complex food webs, trophic levels, ecological pyramids (pyramid of numbers vs energy), energy flow (10% rule), and factors disrupting ecological balance.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=b4O6N4tB3rM",
    "youtubeId": "b4O6N4tB3rM",
    "keyNotes": "• Ecosystem Components:\n  - Ecosystem: A self-sustaining biological community of interacting organisms and their physical environment.\n  - Biotic Factors: Living components: Producers (autotrophs / green plants), Consumers (heterotrophs: herbivores, carnivores, omnivores), Decomposers (saprophytes: bacteria, fungi).\n  - Abiotic Factors: Non-living physical and chemical components: Sunlight, temperature, rainfall/moisture, soil pH, salinity, wind.\n• Food Chains & Food Webs:\n  - Food Chain: Linear sequence showing transfer of food energy from one organism to another:\n    * Grass (Producer) -> Grasshopper (Primary Consumer) -> Toad (Secondary Consumer) -> Snake (Tertiary Consumer) -> Hawk (Apex Predator).\n  - Direction of Arrow: The arrow ALWAYS points from the organism eaten to the organism that eats it (representing the flow of energy: Grass -> Cow, NOT Cow -> Grass!).\n  - Food Web: A network of interconnected food chains within an ecological community showing realistic feeding relationships.\n• Trophic Levels & Energy Flow:\n  - Trophic level: The feeding position of an organism in a food chain (Trophic level 1 = Producers; Level 2 = Primary consumers; Level 3 = Secondary consumers; etc.).\n  - The 10% Energy Transfer Rule: Only about 10% of the energy stored in the biomass of one trophic level is transferred to the next higher level. The remaining 90% is lost through metabolic respiration, heat, excretion, and unconsumed parts.\n  - This thermodynamic inefficiency limits food chains to 4 or 5 trophic levels.\n• Ecological Pyramids:\n  - Pyramid of Numbers: Shows the total number of individual organisms at each trophic level. Can be inverted (e.g. 1 huge oak tree supporting 10,000 caterpillars and 5 birds).\n  - Pyramid of Energy: Shows total energy content at each trophic level over time. ALWAYS upright and broad-based because energy is progressively lost as heat.\n• Human Impacts on Ecological Balance:\n  - Deforestation and habitat destruction.\n  - Overfishing and bushmeat hunting.\n  - Bioaccumulation & Biomagnification: Toxic non-biodegradable chemicals (e.g. DDT, heavy metals like mercury from galamsey) become progressively concentrated at higher trophic levels, severely poisoning apex predators and humans.\n• Chief Examiner Warning:\n  - When constructing food chains, arrows MUST point in the direction of energy flow (from prey to predator). Reversing arrows is an automatic zero in BECE marking schemes.",
    "examples": [
      {
        "id": "ex-jhs3sci-t12-1",
        "title": "Constructing and Interpreting a Freshwater Food Web (BECE Section B)",
        "problem": "In a Ghanaian freshwater pond: Phytoplankton (microscopic algae) are eaten by Water Fleas and Tadpoles. Water Fleas are eaten by Tilapia fry. Tadpoles and Tilapia fry are eaten by Mudfish. Water Snakes prey on Mudfish, and Fish Eagles prey on both Mudfish and Water Snakes. (a) Construct a food web. (b) Identify the producer and apex predator. (c) Predict what would happen to the Tadpole population if all Mudfish are removed by overfishing.",
        "stepByStepSolution": [
          "Step 1 (Part a): Draw interconnected arrows: Phytoplankton -> Water Fleas -> Tilapia fry -> Mudfish -> Water Snakes -> Fish Eagles. Also Phytoplankton -> Tadpoles -> Mudfish -> Fish Eagles [B2 marks].",
          "Step 2: Check all arrow directions point from food source to feeder [B1 mark].",
          "Step 3 (Part b): Producer = Phytoplankton [B1 mark]. Apex Predator = Fish Eagle (top carnivore with no natural predator in this system) [B1 mark].",
          "Step 4 (Part c): If Mudfish are removed, the Tadpole population will initially INCREASE rapidly due to the removal of their primary predator [B1 mark].",
          "Step 5: Subsequently, excessive tadpoles will overgraze phytoplankton, causing algal depletion, food scarcity, and eventual population crash [B1 mark]."
        ],
        "keyTakeaway": "Removing a key predator triggers trophic cascades that destabilize the balance of the entire ecosystem."
      },
      {
        "id": "ex-jhs3sci-t12-2",
        "title": "Energy Transfer and the 10% Rule",
        "problem": "If green plants in a savannah ecosystem capture 50,000 kJ of solar energy into plant tissue, calculate the approximate energy available to the tertiary consumer (lion) in the food chain: Grass -> Antelope -> Cheetah -> Lion.",
        "stepByStepSolution": [
          "Step 1: Trophic Level 1 (Grass / Producer) = 50,000 kJ.",
          "Step 2: Trophic Level 2 (Antelope / Primary Consumer) receives 10%: 50,000 × 0.10 = 5,000 kJ [B1 mark].",
          "Step 3: Trophic Level 3 (Cheetah / Secondary Consumer) receives 10%: 5,000 × 0.10 = 500 kJ [B1 mark].",
          "Step 4: Trophic Level 4 (Lion / Tertiary Consumer) receives 10%: 500 × 0.10 = 50 kJ [A1 mark]."
        ],
        "keyTakeaway": "Due to 90% energy dissipation at each step, top predators require vast territories to hunt sufficient biomass to meet energy needs."
      }
    ]
  },
  {
    "id": "jhs3-sci-t13-soil-water-conservation",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 13,
    "title": "Soil Management, Galamsey Remediation & Water Purification",
    "description": "Soil erosion types, causes, and control measures; soil fertility management (organic vs inorganic fertilizers, composting); causes and severe impacts of illegal artisanal gold mining (galamsey) on water bodies and agricultural lands; and municipal water treatment stages.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=2Juem0lcifE",
    "youtubeId": "2Juem0lcifE",
    "keyNotes": "• Soil Erosion & Conservation:\n  - Soil Erosion: The detachment and removal of topsoil by natural agents (running water and wind).\n  - Types of Water Erosion:\n    1. Splash erosion: Direct impact of falling raindrops dislodging soil crumbs.\n    2. Sheet erosion: Uniform removal of a thin layer of topsoil across gentle slopes.\n    3. Rill erosion: Small, well-defined finger-like channels formed by runoff.\n    4. Gully erosion: Deep, wide ravines formed when rills widen and deepen; renders land uncultivable.\n  - Soil Conservation Methods:\n    * Terracing and Contour plowing on steep slopes.\n    * Cover cropping (planting leguminous ground cover e.g. Mucuna, Centrosema).\n    * Strip cropping and crop rotation.\n    * Afforestation, reforestation, and windbreaks (shelterbelts).\n    * Mulching: Covering soil with dry grass or crop residues to conserve moisture and reduce impact of raindrops.\n• Soil Fertility Management:\n  - Organic Manures: Farmyard manure, poultry droppings, green manure, compost. Improve soil structure, aeration, and water-holding capacity; release nutrients slowly without chemical burning.\n  - Inorganic (Synthetic) Fertilizers: NPK (Nitrogen-Phosphorus-Potassium), Urea, Sulfate of Ammonia. High concentration of specific nutrients; fast acting, but risk soil acidification and eutrophication of nearby streams.\n• Environmental Crisis: Illegal Mining (Galamsey):\n  - Nature: Unregulated artisanal gold mining using heavy excavators, changfas (washing machines), and toxic chemicals.\n  - Severe Impacts:\n    1. Destruction of pristine cocoa farms and virgin forest reserves.\n    2. Siltation, heavy turbidity, and drying up of major river basins (Pra, Birim, Ankobra, Offin).\n    3. Heavy metal contamination: Mercury (used in gold amalgamation) and Lead accumulate in aquatic food chains, causing neurological damage, congenital disabilities (Minamata disease), and organ failure in humans.\n    4. Enormous craters and open abandoned pits that trap rainwater, drown livestock/children, and breed disease vectors.\n  - Remediation: Land reclamation (backfilling excavated pits with overburden, adding compost, re-vegetating with pioneer trees), strict enforcement of mining laws, and alternative livelihood programs.\n• Municipal Water Treatment Process:\n  1. Screening: Coarse metal grates filter out floating debris (twigs, plastic, leaves).\n  2. Aeration: Water sprayed into air to expel dissolved foul gases (H₂S) and oxidize iron and manganese.\n  3. Coagulation & Flocculation: Alum (aluminum sulfate) added; neutralizes colloidal charges, causing tiny suspended clay particles to clump together into larger flocs.\n  4. Sedimentation: Water rests in settling tanks where heavy flocs settle to the bottom as sludge.\n  5. Filtration: Water passes through layers of fine sand, coarse sand, and gravel to trap micro-particulates.\n  6. Chlorination / Disinfection: Chlorine gas or sodium hypochlorite added to kill pathogenic microorganisms (bacteria, viruses).\n  7. pH Adjustment: Lime added to neutralize acidity and prevent pipe corrosion before distribution.\n• Chief Examiner Warning:\n  - Candidates often describe boiling as a stage in municipal water treatment. Municipal water works NEVER boil millions of gallons of water! Disinfection is achieved chemically using chlorination.",
    "examples": [
      {
        "id": "ex-jhs3sci-t13-1",
        "title": "Step-by-Step Municipal Water Purification Stages (BECE Section B)",
        "problem": "Raw muddy water is pumped from the River Pra into a water treatment station. (a) Name the chemical substance added to cause tiny suspended mud particles to clump together and state the name of this process. (b) What is the purpose of passing water through sand filters? (c) Why is chlorine added to the purified water before pumping to consumers?",
        "stepByStepSolution": [
          "Step 1 (Part a): The chemical added is Alum (Aluminum sulfate) [B1 mark]. The process is called Coagulation (or Flocculation) [B1 mark].",
          "Step 2 (Part b): Sand filtration removes very fine suspended particles, microorganisms, and remaining flocs that failed to settle in the sedimentation basin [B1 mark].",
          "Step 3 (Part c): Chlorine is added as a chemical disinfectant to kill pathogenic microorganisms (disease-causing bacteria like Salmonella and Vibrio cholerae) [B1 mark].",
          "Step 4: It also provides residual chlorination that keeps water sterile as it travels through municipal distribution pipelines [B1 mark]."
        ],
        "keyTakeaway": "Alum causes coagulation of dirt; sand filters remove particulates; chlorine kills pathogens."
      },
      {
        "id": "ex-jhs3sci-t13-2",
        "title": "Galamsey Remediation and Heavy Metal Bioaccumulation",
        "problem": "Explain why mercury used in artisanal gold mining presents a severe health hazard to local communities eating fish from nearby rivers, even if they do not drink the river water directly.",
        "stepByStepSolution": [
          "Step 1: Mercury washed into rivers is transformed by aquatic bacteria into highly toxic, lipid-soluble methylmercury [B1 mark].",
          "Step 2: Phytoplankton absorb methylmercury, which is eaten by small fish. Because heavy metals cannot be easily excreted or metabolized, they accumulate in the fatty tissues (Bioaccumulation) [B1 mark].",
          "Step 3: At each successive trophic level, the concentration of mercury multiplies dramatically (Biomagnification), reaching hazardous levels in large predatory fish [B1 mark].",
          "Step 4: When humans consume these fish, they ingest massive toxic doses of mercury, causing severe brain, kidney, and central nervous system damage and birth defects [B1 mark]."
        ],
        "keyTakeaway": "Biomagnification causes non-biodegradable toxins to reach dangerous concentrations in top trophic level consumers like humans."
      }
    ]
  },
  {
    "id": "jhs3-sci-t14-food-preservation-infectious-diseases",
    "subjectId": "science",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 14,
    "title": "Food Preservation & Infectious Diseases (STIs, Malaria, Vaccines)",
    "description": "Principles and modern/traditional methods of food preservation (salting, drying, smoking, canning, refrigeration, pasteurization); food spoilage microorganisms; infectious vs non-infectious diseases; transmission and prevention of STIs (HIV/AIDS, Gonorrhea, Syphilis), Malaria life cycle, and immunization.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=FSyAehMdpyI",
    "youtubeId": "FSyAehMdpyI",
    "keyNotes": "• Food Spoilage & Principles of Food Preservation:\n  - Causes of food spoilage: Microorganisms (bacteria, moulds, yeasts) and autolytic food enzymes.\n  - Essential conditions for microbial growth: Moisture (water), warmth, oxygen, suitable pH, and food substrate.\n  - Principles of Preservation:\n    1. Removal of moisture (Dehydration/Drying, Salting, Smoking).\n    2. Application of heat to destroy microbes and enzymes (Boiling, Canning, Pasteurization).\n    3. Low temperature to inhibit microbial growth and enzyme activity (Chilling, Freezing).\n    4. Altering pH to create hostile environment (Pickling in vinegar/acid).\n    5. Exclusion of air/oxygen (Vacuum packing, Canning).\n  - Traditional Ghanaian Methods: Sun-drying (corn, cassava chips/kokonte, fish), smoking (fish, game/bushmeat), salting (koobi, kako, momoni), fermentation (corn dough for kenkey).\n  - Modern Methods: Pasteurization (heating milk to 72°C for 15 seconds then rapidly chilling), refrigeration (0–4°C slows growth), deep-freezing (-18°C halts growth and freezes water), canning (hermetically sealed and heat-sterilized).\n• Infectious vs Non-Infectious Diseases:\n  - Infectious (Communicable): Caused by pathogens (bacteria, viruses, protozoa, fungi) and transmissible from one person to another (e.g. Cholera, Malaria, Tuberculosis, COVID-19, STIs).\n  - Non-infectious (Non-communicable): Not caused by pathogens and cannot spread between individuals; caused by genetic defects, lifestyle, or malnutrition (e.g. Hypertension, Diabetes, Sickle cell disease, Kwashiorkor).\n• Sexually Transmitted Infections (STIs):\n  - HIV/AIDS: Caused by Human Immunodeficiency Virus (retrovirus); attacks CD4+ helper T-cells, destroying immune system. Transmission: Unprotected sex, infected blood transfusions, shared needles, mother-to-child during birth/breastfeeding. Prevention: Abstinence, faithfulness to uninfected partner, condom use, antiretroviral therapy (ART).\n  - Gonorrhea: Caused by bacterium Neisseria gonorrhoeae. Symptoms: Thick yellowish-green urethral/vaginal discharge, burning sensation during urination. Treated with antibiotics.\n  - Syphilis: Caused by spirochete bacterium Treponema pallidum. Primary stage: painless sore (chancre); secondary stage: skin rashes; tertiary stage: severe neurological damage.\n• Malaria: Vector, Pathogen & Control:\n  - Causative Agent: Protozoan parasite Plasmodium (P. falciparum, P. malariae, P. vivax, P. ovale).\n  - Vector: Female Anopheles mosquito (bites at night to obtain blood meal for egg development).\n  - Control Strategies:\n    1. Destruction of breeding sites: Clearing stagnant water, tin cans, unblocked gutters.\n    2. Chemical control: Indoor residual spraying, applying kerosene/oil film or larvicide to stagnant water to suffocate mosquito larvae.\n    3. Biological control: Introducing mosquito-eating fish (Tilapia fry, Gambusia) to ponds.\n    4. Personal protection: Sleeping inside Long-Lasting Insecticide-Treated Nets (LLINs), wearing long-sleeved clothing, window netting.\n• Immunity & Immunization:\n  - Natural Active: Gained after surviving an infection.\n  - Artificial Active: Induced through VACCINATION (injecting weakened/attenuated or killed pathogens to stimulate antibodies and memory cells).\n  - Passive Immunity: Receiving pre-formed antibodies (e.g. maternal antibodies across placenta/colostrum, antivenom).\n• Chief Examiner Warning:\n  - The mosquito does NOT cause malaria; the mosquito is the VECTOR (carrier). The causative organism is the PROTOZOAN PLASMODIUM. Stating mosquito as the causative agent loses all marks in BECE!",
    "examples": [
      {
        "id": "ex-jhs3sci-t14-1",
        "title": "Scientific Principles of Traditional Ghanaian Food Preservation (BECE Section B)",
        "problem": "Explain the biological and physical principles behind why: (a) Fresh tilapia fish treated with heavy dry rock salt (koobi) resists spoilage for months without refrigeration. (b) Milk that has undergone pasteurization remains fresh longer than raw untreated milk.",
        "stepByStepSolution": [
          "Step 1 (Part a - Salting mechanism): Adding high salt concentration creates a hypertonic external environment around the fish tissue and any contaminating bacteria [B1 mark].",
          "Step 2: Water is drawn out of bacterial cells by OSMOSIS (plasmolysis). Dehydrated bacteria and mould spores cannot metabolize or reproduce, halting decay [B2 marks].",
          "Step 3 (Part b - Pasteurization): Pasteurization heats milk to 72°C for 15 seconds, destroying pathogenic bacteria (like Mycobacterium bovis and Salmonella) and inactivating spoilage enzymes [B1 mark].",
          "Step 4: Rapid cooling to below 4°C immediately after prevents any surviving heat-resistant bacterial spores from germinating [B1 mark]."
        ],
        "keyTakeaway": "Salting removes cellular moisture by osmosis; pasteurization uses precise heat treatment to kill pathogens without denaturing milk proteins."
      },
      {
        "id": "ex-jhs3sci-t14-2",
        "title": "Vector Control vs Pathogen Eradication in Malaria",
        "problem": "(a) Distinguish between a disease vector and a disease pathogen using malaria as an example. (b) Give two reasons why draining stagnant water around school compounds reduces malaria incidence.",
        "stepByStepSolution": [
          "Step 1 (Part a): A pathogen is the microscopic causative organism that directly produces disease pathology in the host (e.g. the protozoan Plasmodium) [B1 mark].",
          "Step 2: A vector is the intermediate living organism that carries and transmits the pathogen from an infected person to a healthy host without suffering the disease itself (e.g. the female Anopheles mosquito) [B1 mark].",
          "Step 3 (Part b): Female Anopheles mosquitoes lay eggs exclusively in clean, calm, stagnant water. Draining stagnant water destroys their breeding grounds, preventing mosquito eggs from hatching into larvae and pupae [B1 mark].",
          "Step 4: This breaks the mosquito life cycle, drastically reducing adult vector population and interrupting transmission of Plasmodium to students [B1 mark]."
        ],
        "keyTakeaway": "Eliminating breeding sites eliminates the vector, effectively halting disease transmission even before medical treatment is required."
      }
    ]
  }
];
