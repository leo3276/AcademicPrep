// Ghanaian SHS General Science elective — Chemistry
// WASSCE Elective Chemistry syllabus across SHS 1, SHS 2 and SHS 3
// Textbook-grade notes, worked WAEC solutions with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS_CHEMISTRY_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs1-che-t1-classification-matter-separation",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Matter: Classification and Separation Techniques",
    "description": "Matter sorted into elements, compounds and mixtures; physical and chemical change; symbols and formulae; the three states; and the separation kit of filtration, crystallisation, evaporation, distillation, separating funnel and chromatography, with the property each technique actually exploits.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Matter is anything that has mass and occupies space; it is classified by composition into elements, compounds and mixtures, and by state into solid, liquid and gas.\n• An element is a substance that cannot be split into simpler substances by chemical means; it is made of one kind of atom and is represented by a symbol such as Na, Cl, Ca or C.\n• A compound is formed when two or more elements combine chemically in a fixed ratio, so common salt is always sodium and chlorine in the proportion NaCl, and carbon(IV) oxide is always C to O twice over as CO2.\n• A mixture is a physical blend with no fixed ratio and no chemical bonding; the parts keep their own properties and can often be separated by simple physical means.\n• Symbols follow rules: the first letter is a capital, a second letter, if any, is small, so Co is cobalt while CO is carbon monoxide, a totally different substance.\n• A formula tells the kinds and the number of atoms in one unit: H2O has two hydrogen and one oxygen, CaCO3 has one calcium, one carbon and three oxygen atoms.\n• Physical change alters form or state but not composition; melting, dissolving, boiling and tearing are physical and are usually reversible.\n• Chemical change makes new substances with different properties; burning, rusting, curdling and cooking an egg are chemical and are usually hard to reverse.\n• Evidence of a chemical reaction is a gas given off, a colour change, a solid precipitate forming, or a temperature change with light or heat given out.\n• Filtration separates an insoluble solid from a liquid: the residue stays on the filter paper and the filtrate passes through; eye protection and a glass rod to guide the liquid are standard.\n• Evaporation removes the solvent to leave the dissolved solid; it suits a salt like NaCl whose amount does not change with heat, and the dish is removed before all the water is gone to stop spitting.\n• Crystallisation grows pure regular crystals from a hot saturated solution as it cools slowly; it is chosen over evaporation when the solid decomposes on strong heating.\n• Simple distillation separates a liquid from a solution or from a dissolved solid by boiling then condensing the vapour in a Liebig condenser; the thermometer bulb sits level with the side-arm.\n• Fractional distillation separates two or more miscible liquids with different boiling points, using a fractionating column; the lower boiling liquid comes over first.\n• A separating funnel splits two immiscible liquids such as oil and water; the denser lower layer is run off from the tap and the upper layer is poured from the top.\n• Chromatography separates dissolved dyes by their different speeds over paper; the retention factor Rf equals distance moved by the dye divided by distance moved by the solvent front.\n• Choose a technique from the property that differs: solubility for filtration and crystallisation, boiling point for distillation, density for a separating funnel, and rate of travel for chromatography.",
    "detailedNotes": {
      "overview": "This opening topic builds the map of chemistry. You will learn to sort any sample of matter into an element, a compound or a mixture, to read chemical symbols and formulae correctly, to tell a physical change from a chemical one, and to name the three states of matter in terms of how their particles are arranged and move. Around that map sits the practical heart of the lesson, a set of separation techniques, filtration, evaporation, crystallisation, simple and fractional distillation, the separating funnel and paper chromatography, each of which is a way of exploiting one physical property that differs between the parts of a mixture. Every later calculation and every laboratory question you meet in WASSCE assumes you can state what a substance is and how to purify it, so this is foundation work, not a light introduction.",
      "introduction": "Work from real specimens in the school laboratory rather than from memory. Lay out samples of iron filings, sulphur powder, common salt, sand and water, and for each say aloud whether it is an element, a compound or a mixture and which property you would use to separate it. Then carry out one filtration and one chromatography strip yourself, recording the residue, the filtrate and the distances on the paper. Keep a two-column note, technique on one side and the property it relies on on the other, because Paper 3 is marked on your reasoning for the choice, not on the technique name alone.",
      "realWorldContext": "Separation chemistry runs through daily life in Ghana. The sachet water factories at Sakumono and Kasoa clarify borehole water by filtration before it is sterilised and sealed. Salt winnowers at the Keta and Ada lagoons evaporate sea water in shallow ponds, leaving coarse salt crystals that are later recrystallised for the table. A mechanic at Suame Magazine drains engine oil from a sump and lets the water settle out, a crude separating-funnel job, while a laundry at Madina separates kente dye colours and worries about effluent running into the drain. Even cooking waakye, the seller lifts the floating chaff from the boiling pot, a physical separation done by hand.",
      "objectives": [
        "Classify a given substance as an element, a compound or a mixture and justify the choice by its composition",
        "Write and interpret chemical symbols and formulae, naming the elements and counting the atoms present",
        "Distinguish a physical change from a chemical change and cite the observable signs of a chemical reaction",
        "Select a suitable separation technique for a given mixture and state the property on which the choice rests",
        "Set up filtration, evaporation and chromatography safely and describe the residue, filtrate, distillate or spots obtained"
      ],
      "sections": [
        {
          "title": "Elements, Compounds and Mixtures",
          "content": "The first decision in chemistry is what a substance actually is. An element is the simplest kind of matter that chemical action cannot break down; it is built from a single type of atom, and there are just over a hundred of them arranged in the periodic table, examples being sodium, chlorine, calcium, carbon and iron. A compound is produced when two or more elements join chemically in a fixed, unchanging ratio, and the product has properties entirely different from the elements it came from, so sodium is a reactive metal and chlorine a poisonous gas, yet together they form harmless table salt, NaCl. A mixture is only a physical jumble of substances sitting side by side; no bonding occurs, the ratio is not fixed, each part keeps its original properties, and the parts can usually be pulled apart by simple means. Sand mixed with salt is a mixture, but once sodium and chlorine are chemically united the result is the compound salt and no physical trick will separate them again.",
          "bulletPoints": [
            "An element is one kind of atom and cannot be decomposed chemically; symbols such as Na and Cl stand for elements.",
            "A compound is two or more elements chemically joined in a fixed ratio with new properties, for example CO2 and NaCl.",
            "A mixture is a physical blend with variable composition; its parts keep their own properties and separate by physical means.",
            "Contrast: brass is a mixture of metals, whereas carbon(IV) oxide is a compound always in the ratio one carbon to two oxygen.",
            "Test your classification by asking whether the composition is fixed and whether bonding has taken place."
          ],
          "keyTakeaway": "Fixed chemical composition means a compound; a variable physical blend means a mixture; one kind of atom means an element.",
          "realWorldExample": "A gold trader at Tarkwa tests whether a nugget is pure gold or an alloy; pure gold is the element while the paler alloy mixed with other metals is a mixture, and the two give different results when treated with acid."
        },
        {
          "title": "Reading Symbols and Formulae",
          "content": "Chemical language is compact and the examiner expects precision. A symbol is the short code for one atom of an element, always written with a capital first letter, and where a second letter exists it is kept small; this rule is why Co is the element cobalt while CO, read as carbon then oxygen, is the gas carbon monoxide. A formula goes further and describes one unit of a substance, showing which elements are present and how many atoms of each. The small subscript number after an element multiplies only that element, so CaCO3 contains one calcium, one carbon and three oxygen atoms, and in 3H2O the leading 3 multiplies the whole molecule to give six hydrogen and three oxygen atoms. Brackets group atoms that repeat together, so Ca(OH)2 holds one calcium, two oxygen and two hydrogen, and the round brackets in front, as in 2Fe(OH)3, multiply everything inside them. Learning to expand a formula into an atom count is a three-mark staple of Paper 1 and must become automatic.",
          "bulletPoints": [
            "First letter capital, second letter small: Na, Cl, Ca; confusing Na with NA or Co with CO changes the substance.",
            "A subscript multiplies the element before it: O3 means three oxygen atoms bonded in the unit.",
            "A big figure in front multiplies the whole formula: 2H2O is two molecules, four hydrogen and two oxygen atoms.",
            "Brackets group atoms that repeat: Mg(OH)2 is one magnesium, two oxygen, two hydrogen.",
            "Expanding a formula into a clear atom count is quick method mark (M1) in an objective paper."
          ],
          "keyTakeaway": "Read a formula out element by element, letting the subscript multiply only what stands before it.",
          "realWorldExample": "The label on a bag of fertiliser sold at a Agro-inputs shop in Ejura lists compounds such as ammonium nitrate; the farm attendant who can read the formula knows how much nitrogen the crop is actually receiving."
        },
        {
          "title": "Physical and Chemical Change, and the States of Matter",
          "content": "Change is sorted into two classes by whether the substance itself is altered. In a physical change the form or state shifts while the composition stays the same; ice melting to water, sugar dissolving in tea, camphor subliming and a sheet of paper torn are all physical, and no new substance is made, so the process is often reversible. A chemical change, called a chemical reaction, transforms the starting materials into new substances with different properties; iron rusting, wood burning, milk souring and an egg setting on a frying pan are chemical and cannot be easily undone. The signs that tell you a reaction has happened are a gas being given off, a permanent colour change, an insoluble solid called a precipitate appearing, or a temperature change often with light or heat released. The states of matter tie into this. In a solid the particles are tightly packed in a fixed pattern and only vibrate, giving shape and volume; in a liquid they are close but slide over one another, giving volume but no fixed shape; in a gas they are far apart and move fast in all directions, filling any container and compressing easily.",
          "bulletPoints": [
            "Physical change keeps composition and is usually reversible; melting, dissolving, evaporating, bending.",
            "Chemical change forms new substances and is hard to reverse; burning, rusting, curdling, cooking.",
            "Signs of reaction: gas evolved, colour change, precipitate formed, temperature or light change.",
            "Solid keeps shape and volume; liquid keeps volume but takes the shape of the container; gas fills the container.",
            "State changes such as melting or boiling are physical because water remains H2O whatever the state."
          ],
          "keyTakeaway": "Ask whether a new substance appeared; if yes it is chemical, if no it is physical, even when the look has changed.",
          "realWorldExample": "A cook at a chop bar in Sunyani boils water in a pot and fries plantain in another; the boiling water is only a physical change back to steam, but the browning plantain has undergone chemical change that cannot be boiled backwards."
        },
        {
          "title": "Separating the Parts of a Mixture by Property",
          "content": "Every separation technique quietly rests on one property in which the components of a mixture differ, and the mark scheme rewards a student who names that property. Filtration works because one solid will not dissolve in the liquid while the other will, so sand is caught as residue on the filter paper and the salt solution passes through as filtrate. Evaporation to dryness recovers a dissolved solid such as common salt simply by boiling off the water, but the dish is taken off the flame before all the liquid disappears so the hot salt does not spit out. Crystallisation is used instead when the solid breaks down under strong heat; a hot saturated solution is left to cool slowly and pure regular crystals grow out. Simple distillation separates a liquid from a dissolved solid, or one liquid from a solution, by boiling it and condensing the pure vapour in a Liebig condenser, with the thermometer bulb level with the side-arm to read the true boiling point. Fractional distillation goes further and separates two miscible liquids by their different boiling points, the lower-boiling one distilling first down a fractionating column. A separating funnel splits liquids that refuse to mix, like oil and water, letting the denser lower layer drain from the tap. Paper chromatography pulls apart dissolved dyes because each colour travels up the paper at a different rate.",
          "bulletPoints": [
            "Filtration: difference in solubility, residue on paper, filtrate below; guide with a glass rod.",
            "Evaporation: recover a heat-stable dissolved solid; remove heat early to prevent spitting.",
            "Crystallisation: for solids that decompose on strong heating; cool a saturated solution slowly.",
            "Simple distillation: liquid from a solution, boiling then condensing in a Liebig condenser.",
            "Fractional distillation: miscible liquids by boiling point, lower boiling liquid comes over first.",
            "Separating funnel: immiscible liquids by density, lower layer tapped off, upper poured from the top.",
            "Chromatography: dissolved dyes by rate of travel; the Rf value identifies each colour."
          ],
          "keyTakeaway": "Before choosing a method, name the property that differs: solubility, boiling point, density or rate of travel.",
          "realWorldExample": "A small-scale refiner at the Tarkwa goldfields runs water through cloth filters and lets dissolved solids settle in ponds, using the same solubility and density ideas that the school chromatography and distillation sets demonstrate on a bench scale."
        }
      ],
      "commonMistakes": [
        "Writing CO for cobalt or Co for carbon monoxide; the capital and small letters carry the whole meaning, so misreading them turns a metal into a poisonous gas.",
        "Saying a mixture is chemically combined; the parts of a mixture keep their own properties and are only physically mixed, unlike a compound with a fixed ratio.",
        "Calling melting or boiling a chemical change because the appearance altered; the substance is still the same water, so it is physical and reversible.",
        "Heating a salt solution in an evaporating dish until it is bone dry and the solid decomposes and spits; the dish should be taken off the flame while still slightly wet.",
        "Reading the thermometer bulb in a distillation set from too high, giving a false boiling point; the bulb must sit level with the entrance to the side-arm.",
        "Reporting an Rf value with units or as a number greater than one; Rf is a pure ratio and always lies below one because the dye never outruns the solvent front."
      ],
      "wassceExamTips": [
        "In Paper 1 the classification questions are won on the fixed-ratio test: if the composition can vary it is a mixture, if it is chemically fixed it is a compound, if it is one atom type it is an element.",
        "Paper 2 structured questions ask you to name a technique and then justify it; always state the property exploited, because the method alone earns the method mark and the reasoning earns the accuracy mark.",
        "When asked to separate sand from salt water, write a numbered plan, dissolve, filter, then evaporate or crystallise, and label residue and filtrate; examiners award marks step by step.",
        "For a chromatography question, be ready to define Rf as distance moved by dye over distance moved by solvent, and to say a pure substance gives one spot while a mixture gives several.",
        "In Paper 3 the alternative practical expects safe apparatus handling, so mention the glass rod guiding liquid in filtration and eye protection when heating, as these carry presentation marks."
      ],
      "summaryChecklist": [
        "Can I classify a named substance as an element, compound or mixture and defend the choice?",
        "Can I expand a formula such as Ca(OH)2 into the exact number of each atom present?",
        "Can I tell physical from chemical change using the four observable signs of reaction?",
        "Can I choose a separation technique for any mixture and state the property it relies on?",
        "Can I set up filtration and chromatography safely and report residue, filtrate and Rf correctly?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-classification-1",
        "title": "Separating a Mixture of Iron Filings, Sand and Common Salt",
        "problem": "You are given a dry mixture of iron filings, sand and common salt. Describe, in order, how to obtain each of the three components in as pure a form as the school laboratory allows, naming the property each step uses and one safety point.",
        "stepByStepSolution": [
          "Step 1 (M1): Pass a magnet wrapped in paper over the dry mixture; the iron filings cling to the magnet because iron is magnetic while sand and salt are not, and the paper wrapping lets the filings be dropped off cleanly.",
          "Step 2 (M1): Tip the remaining sand and salt into a beaker of clean water and stir well; the common salt dissolves because it is soluble, but the sand does not because it is insoluble, so this step uses the difference in solubility.",
          "Step 3 (M1): Filter the mixture through fold-pressed filter paper in a funnel, guiding the liquid with a glass rod; the sand is retained as the residue on the paper and the salt solution passes through as the filtrate.",
          "Step 4 (M1): Wash the residue with a little clean water and dry it between filter papers to recover pure sand free of clinging salt solution.",
          "Step 5 (M1): Pour the filtrate into a clean evaporating dish and heat gently, wearing eye protection, until crystals just begin to form at the edge.",
          "Step 6 (A1): Remove the dish from the flame and let it cool so common salt crystals form and can be collected, since evaporating to complete dryness would make the hot salt spit and be lost.",
          "Step 7 (A1): Report the three recovered substances in order, iron filings from the magnet, sand from the residue, and salt from the crystals, each obtained by exploiting one physical property."
        ],
        "keyTakeaway": "A multi-part mixture is separated one property at a time, magnetism first, then solubility, then evaporation, and each step must name the property it uses."
      },
      {
        "id": "ex-che-classification-2",
        "title": "Finding the Retention Factor of a Dye by Paper Chromatography",
        "problem": "A drop of green food colouring is spotted on chromatography paper and developed in water. The centre of the green dye spot travels 6.0 cm up the paper while the solvent front reaches 10.0 cm. Calculate the Rf value of the dye and state what a single spot would tell you about the colouring.",
        "stepByStepSolution": [
          "Step 1 (M1): Recall that the retention factor is the ratio of the distance travelled by the substance to the distance travelled by the solvent front, Rf equals distance by dye over distance by solvent.",
          "Step 2 (M1): Measure both distances from the original baseline to the centre of the dye spot and to the solvent front, giving 6.0 cm for the dye and 10.0 cm for the solvent.",
          "Step 3 (M1): Substitute the values into the ratio, Rf = 6.0 cm / 10.0 cm, noting that the centimetre units cancel because a ratio of two lengths has no unit.",
          "Step 4 (A1): Divide to obtain Rf = 0.6, a pure number with no unit and clearly less than one, as required.",
          "Step 5 (M1): Check the answer for sense, since a dye that travels faster than the solvent is impossible, an Rf above 1 would signal an error in the arithmetic.",
          "Step 6 (A1): State the conclusion, an Rf value of 0.6 identifies this dye under these conditions, and if the colouring had shown only one spot it would be a pure substance, whereas several spots would prove it is a mixture of dyes."
        ],
        "keyTakeaway": "Rf is a unit-free ratio below one, and the number of spots on the developed paper tells you whether a coloured substance is pure or a mixture."
      }
    ],
    "quiz": {
      "id": "quiz-che-classification",
      "topicId": "shs1-che-t1-classification-matter-separation",
      "title": "Classification of Matter and Separation Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-class-1",
          "quizId": "quiz-che-classification",
          "questionText": "Which pair of techniques is used to separate the components of a mixture of sand and water, then recover the dissolved salt from a salt solution?",
          "optionA": "Filtration to remove the sand, then evaporation to recover the salt",
          "optionB": "Chromatography to remove the sand, then a separating funnel for the salt",
          "optionC": "A magnet to remove the sand, then crystallisation of the water",
          "optionD": "Fractional distillation to remove the sand, then filtration for the salt",
          "correctOption": "A",
          "subConcept": "Choice of separation technique",
          "explanation": "Sand is insoluble, so filtration catches it, and salt is a dissolved solid that heating drives off the water to leave behind, so evaporation recovers it. A separating funnel and fractional distillation act on liquids, not on an insoluble solid, and no magnet attracts sand.",
          "remediationTip": "Draw a table with the mixture on one side and the differing property, solubility, boiling point or density, on the other, then pick the method from the property."
        },
        {
          "id": "q-che-class-2",
          "quizId": "quiz-che-classification",
          "questionText": "A student melts wax, then lets it re-solidify. Why is this a physical change and not a chemical one?",
          "optionA": "Because the wax gets hot during the process",
          "optionB": "Because the wax changes colour when it melts",
          "optionC": "Because no new substance is formed and the wax remains the same material",
          "optionD": "Because melting can never be reversed",
          "correctOption": "C",
          "subConcept": "Physical versus chemical change",
          "explanation": "Melting only alters the state; the liquid and solid are still the same wax and the change reverses on cooling, so it is physical. Heat and colour are not the test, and physical changes are usually reversible, so the claim that it cannot be reversed is false.",
          "remediationTip": "For any change ask one question only, did a new substance appear; if not, call it physical."
        },
        {
          "id": "q-che-class-3",
          "quizId": "quiz-che-classification",
          "questionText": "In a distillation set-up, where must the bulb of the thermometer be placed to read the true boiling point of the liquid?",
          "optionA": "Deep in the liquid at the bottom of the flask",
          "optionB": "Well above the side-arm in the neck",
          "optionC": "Inside the Liebig condenser water jacket",
          "optionD": "Level with the lower edge of the side-arm leading to the condenser",
          "correctOption": "D",
          "subConcept": "Simple distillation apparatus",
          "explanation": "The bulb must sit where the vapour passes into the side-arm so it records the temperature of the vapour actually distilling. Below it reads superheated liquid, above it the vapour has partly cooled and the reading is low, and the water jacket is far too cold to matter.",
          "remediationTip": "Sketch a labelled distillation flask and mark the side-arm level with one arrow so you remember the bulb position."
        },
        {
          "id": "q-che-class-4",
          "quizId": "quiz-che-classification",
          "questionText": "Which statement correctly describes a compound?",
          "optionA": "Its parts are present in any ratio and keep their own properties",
          "optionB": "Its elements are chemically combined in a fixed ratio and it has new properties",
          "optionC": "It can always be separated by filtration",
          "optionD": "It is made of only one kind of atom",
          "correctOption": "B",
          "subConcept": "Elements, compounds and mixtures",
          "explanation": "A compound has its elements bonded in a fixed proportion with properties different from the parts, as NaCl differs from sodium and chlorine. A variable ratio that keeps properties describes a mixture, one kind of atom describes an element, and a compound cannot be split by a physical method.",
          "remediationTip": "Recite the three-word test for a compound, chemically joined, fixed ratio, new properties."
        },
        {
          "id": "q-che-class-5",
          "quizId": "quiz-che-classification",
          "questionText": "Two liquids that do not mix, such as oil and water, are best separated using",
          "optionA": "a fractionating column",
          "optionB": "fold-pressed filter paper",
          "optionC": "evaporation to dryness",
          "optionD": "a separating funnel, draining off the denser lower layer",
          "correctOption": "D",
          "subConcept": "Separating immiscible liquids",
          "explanation": "Immiscible liquids form two layers of different density, so a separating funnel lets the lower layer run out from the tap. Filtration needs an insoluble solid, evaporation would only remove a dissolved solid, and a fractionating column is for liquids that do mix but boil at different temperatures.",
          "remediationTip": "Link each mixture type to one tool, solid in liquid to filtration, immiscible liquids to the funnel, miscible liquids to fractional distillation."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t1-structure-of-the-atom",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Structure of the Atom, Ions and Isotopy",
    "description": "The three subatomic particles, atomic and mass number, electronic configuration in shells up to 2.8.8, the Bohr picture against the modern idea, how atoms form ions, valency, and isotopes with their uses, including working relative atomic mass from isotopic abundance.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• An atom is the smallest particle of an element that can take part in a chemical reaction; it has a dense central nucleus of protons and neutrons surrounded by electrons moving in shells.\n• The three subatomic particles are the proton, charge +1 and mass 1, the neutron, charge 0 and mass 1, and the electron, charge -1 with negligible mass about 1/1840 of a proton.\n• The nucleus holds nearly all the mass of the atom and is positively charged; the electrons balance this charge in a neutral atom so the atom carries no overall electricity.\n• The atomic number, Z, is the number of protons in the nucleus and equals the number of electrons in a neutral atom; it fixes the identity of the element.\n• The mass number, A, is the total number of protons plus neutrons; the number of neutrons is found as A minus Z.\n• Electrons occupy shells around the nucleus; the first shell holds at most 2, the second at most 8, and for SHS work the third is taken to hold 8 before the fourth fills, giving the 2.8.8 pattern.\n• The maximum electrons in a shell is often written 2n^2, so shell one is 2, shell two is 8, though for the first twenty elements the filling is taught as 2.8.8.\n• Bohr pictured electrons in fixed circular orbits at set energies, while the modern quantum view replaces neat orbits with regions of probability called orbitals where an electron is likely to be found.\n• An ion is a charged particle formed when an atom gains or loses electrons; losing electrons gives a positive ion, a cation, gaining them gives a negative ion, an anion.\n• Metals tend to lose electrons to empty their outer shell and form cations, so sodium Na loses one electron to become Na+, while non-metals gain electrons to complete eight, so chlorine becomes Cl-.\n• Valency is the combining power of an element, equal to the number of electrons an atom loses, gains or shares to reach a stable outer shell; sodium is univalent, oxygen is bivalent, aluminium is trivalent.\n• Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons, hence the same atomic number but different mass numbers.\n• Carbon has isotopes carbon-12 and carbon-14; hydrogen has protium, deuterium and tritium; all share the atomic number but differ in the neutrons they carry.\n• Because isotopes differ in mass, the relative atomic mass is a weighted average, found as the sum of each isotope mass times its percentage abundance divided by one hundred.\n• Uses of isotopes include carbon-14 dating of old organic material, radioactive tracers in medicine and industry, and cobalt-60 in radiotherapy and food irradiation.\n• A stable atom, other than hydrogen and helium, holds eight electrons in its outer shell, the octet rule, which explains why atoms form ions at all.",
    "detailedNotes": {
      "overview": "Here the whole course narrows down to the single particle. You will learn the atom as a nucleus of protons and neutrons ringed by electrons in shells, and the two numbers that describe it, the atomic number that counts protons and the mass number that counts protons plus neutrons. From those numbers you can work out how many neutrons sit in any atom and, once you master the 2.8.8 electronic arrangement, why atoms carry valency and why they form ions. The lesson then treats isotopes, atoms of the same element with different neutron counts, and shows how the relative atomic mass printed in the periodic table is really a weighted average of those isotopes. This is one of the most dependable Paper 1 topics, because a single well-drawn diagram with correct numbers answers whole groups of questions.",
      "introduction": "Build the atom from a table before anything else. Take twenty elements, list for each the atomic number and mass number, then compute the protons, neutrons and electrons and write the arrangement 2.8.8. Use cards to show ion formation, moving one electron off a sodium and onto a chlorine so the charge changes in front of you. Finally work a relative atomic mass from isotopic abundance by hand once and check it, because that calculation appears almost every year and rewards a neat method line.",
      "realWorldContext": "Isotopes are not distant textbook ideas in Ghana. The radiocarbon dating that fixes the age of old brass-casting remains and charcoal from archaeological sites at Begho relies on carbon-14. Cobalt-60 sources at the nuclear facility of the Ghana Atomic Energy Commission near Kwabenya are used to study crop mutants and to sterilise and irradiate foods, while the same facility trains students in tracer methods. Hospitals at Korle Bu and Kumasi use radioisotope tracers in scans, and the strict handling and safety rules attached to these sources are exactly the disciplined particle bookkeeping you practise in this topic.",
      "objectives": [
        "State the charge, relative mass and location of the proton, neutron and electron within the atom",
        "Use atomic number and mass number to find the numbers of protons, neutrons and electrons in an atom or ion",
        "Write the electronic configuration of the first twenty elements in the 2.8.8 pattern and relate it to shell capacity",
        "Explain the difference between the Bohr orbit and the modern orbital view of electron arrangement",
        "Describe how ions form from atoms, assign valency from configuration, and calculate relative atomic mass from isotopic abundance"
      ],
      "sections": [
        {
          "title": "The Nucleus and the Three Particles",
          "content": "Every atom is a study in extremes. At its centre lies the nucleus, a tiny dense core only about a ten-thousandth of the whole atom across, yet it carries practically all the mass. Packed inside are two kinds of particle of roughly equal mass, the proton, which bears a single positive charge, and the neutron, which carries no charge at all and exists to add nuclear stability. Circling far outside, in the emptiness that makes up most of the atom, are the electrons, each with a single negative charge but a mass so small, about one eighteen-hundred-and-fortieth that of a proton, that they contribute nothing worth counting to the mass. In an uncharged atom the number of electrons equals the number of protons, so the positive and negative charges cancel and the atom is electrically neutral. Because the nucleus holds the protons, it is the positive charge of the nucleus that defines the element; change the proton count and you have changed the element itself.",
          "bulletPoints": [
            "Proton: charge +1, relative mass 1, inside the nucleus, its count is the atomic number.",
            "Neutron: charge 0, relative mass 1, inside the nucleus, it adds mass without adding charge.",
            "Electron: charge -1, negligible mass, moving in shells outside the nucleus.",
            "Nucleus: contains protons and neutrons, holds nearly all the mass, and is positively charged.",
            "Neutral atom: number of electrons equals number of protons, so the overall charge cancels to zero."
          ],
          "keyTakeaway": "Protons fix identity, neutrons add mass, electrons fill the space outside and balance the charge.",
          "realWorldExample": "When the Ghana Atomic Energy Commission handles a radioactive source, the safety brief turns on the nucleus, because it is changes inside that nuclear core, not the outer electrons, that make an atom throw out radiation."
        },
        {
          "title": "Atomic Number, Mass Number and Where the Particles Count",
          "content": "Two numbers describe any atom and the whole calculation topic rests on them. The atomic number, usually shown as Z, is simply the number of protons in the nucleus; it is unique to each element, so every atom with 11 protons is sodium and nothing else, and for a neutral atom it also equals the number of electrons. The mass number, shown as A, counts the heavy particles and is the total of protons plus neutrons, since electrons add nothing worth naming. Putting the two together gives the everyday arithmetic of chemistry: the number of neutrons is the mass number minus the atomic number. Written in standard notation a nuclide appears as the symbol with A above and Z below, so an atom of sodium-23 shows A of 23 and Z of 11, from which the neutrons follow as 23 minus 11, giving 12. Learn to move between these three counts fluently and most objective questions on atomic structure answer themselves.",
          "bulletPoints": [
            "Atomic number Z equals the number of protons, and equals electrons only when the atom is neutral.",
            "Mass number A equals protons plus neutrons, the total count of heavy particles.",
            "Neutrons are found as A minus Z; this subtraction is a favourite one-mark test.",
            "Notation places A over Z beside the symbol, so the sodium-23 atom reads A 23, Z 11.",
            "Check your working with sodium: 11 protons, 11 electrons, 12 neutrons, mass number 23."
          ],
          "keyTakeaway": "Atomic number counts protons, mass number counts protons plus neutrons, and neutrons are their difference.",
          "realWorldExample": "An examiner setting an atomic-structure question will pick a nuclide such as calcium-40 and expect candidates to write straight away 20 protons, 20 electrons and 20 neutrons from the two numbers alone."
        },
        {
          "title": "Electronic Configuration and the Two Views of the Electron",
          "content": "Electrons do not roam at random; they occupy shells at increasing distance from the nucleus, and each shell has a capacity. The innermost shell fills first and holds a maximum of 2 electrons, the second holds up to 8, and for the level of work expected in SHS Chemistry the third shell is treated as taking 8 electrons before the fourth begins, which gives the familiar 2.8.8 filling. The general capacity of a shell is often quoted as 2n^2, where n is the shell number, so the first shell is 2, the second is 8 and a complete third would be 18, but the exam syllabus works mainly with the first twenty elements where 2.8.8 describes the arrangement well. To write a configuration you place the electrons one by one into the shells; chlorine with 17 electrons becomes 2.8.7, with seven electrons in its outer shell, and calcium with 20 becomes 2.8.8.2. Two pictures lie behind this. Bohr drew electrons in fixed circular orbits, each orbit a set energy level, a neat planetary model still used for teaching. The modern quantum view drops those tidy tracks and speaks instead of orbitals, three-dimensional regions of probability where an electron is most likely to be found, far less certain than Bohr allowed.",
          "bulletPoints": [
            "Shell capacities for SHS work: first shell 2, second 8, third taken as 8 before the fourth fills.",
            "The general formula 2n^2 gives 2, 8, 18, 32, but the syllabus focuses on 2.8.8 for the first twenty elements.",
            "Fill inner shells first: sodium is 2.8.1, chlorine 2.8.7, calcium 2.8.8.2.",
            "The number in the outer shell is the valence electrons and governs how the atom reacts.",
            "Bohr used fixed orbits at set energies; the modern model uses orbitals of probability instead."
          ],
          "keyTakeaway": "Fill shells 2 then 8 then 8, read the outer shell for reactivity, and remember orbits were replaced by probability regions.",
          "realWorldExample": "A technician at a welding yard in Tema knows that elements giving up outer-shell electrons easily carry current and corrode, a fact the outer-shell count in the 2.8.8 arrangement predicts before any test is run."
        },
        {
          "title": "Ions, Valency and Isotopes",
          "content": "Atoms react to reach a stable outer shell, which for most elements means eight electrons, the octet rule. An atom that loses or gains electrons to reach this stable arrangement becomes a charged particle, an ion. Losing electrons leaves more protons than electrons and produces a positive ion or cation, so sodium, with its lone outer electron in 2.8.1, sheds it to give Na+, now arranged 2.8. Gaining electrons makes a negative ion or anion, so chlorine, 2.8.7, takes one to fill to 2.8.8 and becomes Cl-. Metals typically form cations and non-metals anions, and the number of electrons lost, gained or shared is the valency, the combining power of the element, one for sodium, two for oxygen, three for aluminium. The separate idea of isotopes concerns the nucleus, not the electrons. Isotopes are atoms of the same element with an identical number of protons but a different number of neutrons, so they share the atomic number yet carry different mass numbers. Carbon occurs as carbon-12 and carbon-14, and hydrogen as protium with no neutron, deuterium with one and tritium with two. Because each isotope has a slightly different mass, the relative atomic mass in the periodic table is a weighted average of all the naturally occurring isotopes, computed by multiplying each isotope mass by its percentage abundance, adding the products and dividing by one hundred.",
          "bulletPoints": [
            "An ion forms when an atom loses or gains electrons to reach a stable octet in its outer shell.",
            "Losing electrons gives a positive cation such as Na+; gaining them gives a negative anion such as Cl-.",
            "Metals lose to form cations, non-metals gain to form anions; valency counts the electrons transferred or shared.",
            "Isotopes: same protons and atomic number, different neutrons and mass number, identical chemical behaviour.",
            "Relative atomic mass is a weighted average, sum of isotope mass times abundance, then divided by one hundred."
          ],
          "keyTakeaway": "Ions come from electron change to reach an octet; isotopes come from neutron change, and averaging them gives relative atomic mass.",
          "realWorldExample": "The radiotherapy unit that treats patients in Accra depends on a chosen cobalt isotope, while the dating of ancient Koforidua goldweights and charcoal at Begho depends on the heavier carbon-14 isotope, both cases of isotopes differing only in nuclear mass."
        }
      ],
      "commonMistakes": [
        "Confusing atomic number with mass number and writing neutrons as Z minus A, which gives a negative answer; the rule is neutrons equal A minus Z.",
        "Filling the third shell with 18 electrons for a light element; at SHS level the third shell is taken as 8 before the fourth starts, so calcium is 2.8.8.2 and not 2.8.10.",
        "Saying an atom becomes a different element when it gains or loses electrons; only a change of proton count changes the element, an electron change makes an ion.",
        "Treating isotopes as chemically different; isotopes share the same electronic structure and so react alike, they differ only in mass and nuclear stability.",
        "Averaging isotope masses by simple addition and dividing by two while ignoring abundance; the average must be weighted by each isotope percentage.",
        "Writing the symbol for an ion with no charge or with the charge reversed, so calling Na+ a negative ion when losing an electron always gives a positive cation."
      ],
      "wassceExamTips": [
        "Paper 1 nearly always offers an atomic-structure item; lock in the three counts, protons equal Z, electrons equal Z for a neutral atom, neutrons equal A minus Z, and answer in seconds.",
        "When asked for electronic configuration write the shells separated by dots, 2.8.7, and state the outer-shell number clearly, because the marking scheme gives a mark for a correct arrangement and another for naming the group from the valence count.",
        "In a relative-atomic-mass-from-abundance question show the weighted working as one method line, mass times abundance added then divided by 100, since the method mark is given even if the final figure slips.",
        "For ion questions state both the change and the charge, electrons lost giving a positive ion, electrons gained giving a negative ion, and never write a stable noble-gas arrangement as an atom.",
        "In Paper 3 data questions a nuclide may be given in A-over-Z notation; practise reading it quickly so you extract protons, neutrons and electrons without hesitation."
      ],
      "summaryChecklist": [
        "Can I state the charge, mass and position of the proton, neutron and electron?",
        "Can I find protons, electrons and neutrons from atomic number and mass number in any nuclide?",
        "Can I write the 2.8.8 electronic configuration of the first twenty elements and read off the valence electrons?",
        "Can I explain how a cation and an anion form and assign the valency of an element from its outer shell?",
        "Can I compute a weighted relative atomic mass from given isotopic masses and abundances?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-atom-1",
        "title": "Particle Counts and Configuration of a Chloride Ion",
        "problem": "A chlorine atom has atomic number 17 and mass number 35. It gains one electron to form a chloride ion, Cl-. Determine the number of protons, neutrons and electrons in the ion, and write its electronic configuration, showing how the stable shell is reached.",
        "stepByStepSolution": [
          "Step 1 (M1): Read the atomic number 17 as the number of protons, so the nucleus holds 17 protons, and this proton count is what makes the atom chlorine and nothing else.",
          "Step 2 (M1): Find the neutrons from mass number minus atomic number, 35 minus 17, giving 18 neutrons in the nucleus.",
          "Step 3 (M1): Start from a neutral atom where electrons equal protons, 17 electrons, then add the one gained on ion formation to get 17 plus 1, giving 18 electrons in the ion.",
          "Step 4 (M1): Write the configuration of the neutral atom first, filling shells 2, then 8, then 8, placing the 17 electrons as 2.8.7, with seven electrons in the outer shell.",
          "Step 5 (A1): Add the one gained electron to the outer shell, so 2.8.7 becomes 2.8.8, a full stable outer shell of eight, the noble-gas arrangement of argon.",
          "Step 6 (A1): Record the final answer, the chloride ion has 17 protons, 18 neutrons and 18 electrons, configuration 2.8.8, and because it now has one more electron than proton it carries a single negative charge, written Cl-."
        ],
        "keyTakeaway": "Protons come from atomic number, neutrons from mass number minus atomic number, and the ion gains or loses only electrons while the nucleus stays fixed."
      },
      {
        "id": "ex-che-atom-2",
        "title": "Relative Atomic Mass from Isotopic Abundance",
        "problem": "Naturally occurring chlorine is a mixture of two isotopes, about 75 percent chlorine-35 and about 25 percent chlorine-37. Calculate the relative atomic mass of chlorine to one decimal place, showing the weighted method.",
        "stepByStepSolution": [
          "Step 1 (M1): Recall that relative atomic mass of an element with isotopes is a weighted average, so each isotope mass must be multiplied by the fraction of that isotope present before the results are added.",
          "Step 2 (M1): Convert the percentages to fractions of one hundred and set up the two products, 35 multiplied by 75 and 37 multiplied by 25, keeping everything over 100.",
          "Step 3 (M1): Multiply out the first product, 35 times 75, giving 2625, and the second, 37 times 25, giving 925.",
          "Step 4 (M1): Add the products, 2625 plus 925, giving a total of 3550, then divide by 100 as the weighted-average formula requires.",
          "Step 5 (A1): Divide 3550 by 100 to obtain 35.5, so the relative atomic mass of chlorine is 35.5.",
          "Step 6 (A1): Check the answer lies between the two isotope masses and nearer 35 because the lighter isotope is more plentiful, which confirms 35.5 is reasonable and not an arithmetic slip."
        ],
        "keyTakeaway": "Relative atomic mass is found by multiplying each isotope mass by its abundance, summing, then dividing by 100, giving the average 35.5 for chlorine."
      }
    ],
    "quiz": {
      "id": "quiz-che-atom",
      "topicId": "shs1-che-t1-structure-of-the-atom",
      "title": "Structure of the Atom and Isotopy Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-atom-1",
          "quizId": "quiz-che-atom",
          "questionText": "An atom of element X has atomic number 12 and mass number 24. How many neutrons does its nucleus contain?",
          "optionA": "12",
          "optionB": "36",
          "optionC": "24",
          "optionD": "14",
          "correctOption": "A",
          "subConcept": "Finding neutrons from A and Z",
          "explanation": "Neutrons equal mass number minus atomic number, 24 minus 12, giving 12. Choosing 24 is reading the mass number itself, 36 comes from wrongly adding the two numbers, and 14 is a mis-subtraction.",
          "remediationTip": "Write the three counts on a card each day, protons equal Z, neutrons equal A minus Z, electrons equal Z in a neutral atom."
        },
        {
          "id": "q-che-atom-2",
          "quizId": "quiz-che-atom",
          "questionText": "Which electronic configuration correctly represents a neutral atom of chlorine, atomic number 17?",
          "optionA": "2.8.7",
          "optionB": "2.7.8",
          "optionC": "2.8.8",
          "optionD": "2.8.5.2",
          "correctOption": "A",
          "subConcept": "Electronic configuration",
          "explanation": "Filling the shells 2 then 8 then 8 places 17 electrons as 2.8.7 with seven valence electrons. The 2.8.8 arrangement is the chloride ion after gaining one electron, not the neutral atom, and inner shells must fill before outer ones.",
          "remediationTip": "Always fill the inner shell to capacity before starting the next, then count to confirm the total equals the atomic number."
        },
        {
          "id": "q-che-atom-3",
          "quizId": "quiz-che-atom",
          "questionText": "A sodium atom loses one electron to form a sodium ion. Which statement about the ion is correct?",
          "optionA": "It gains a proton and becomes a new element",
          "optionB": "It becomes a negative ion with 11 electrons",
          "optionC": "It becomes a positive ion with 10 electrons and configuration 2.8",
          "optionD": "Its nucleus loses a neutron so its mass drops by one",
          "correctOption": "C",
          "subConcept": "Cation formation",
          "explanation": "Losing one electron leaves sodium with 10 electrons against 11 protons, giving a single positive charge and a 2.8 stable shell. The nucleus is untouched so the element stays sodium and the mass barely changes, and losing an electron makes a positive, not negative, ion.",
          "remediationTip": "Track the electron balance: lose electrons and protons outnumber them, so the ion is positive."
        },
        {
          "id": "q-che-atom-4",
          "quizId": "quiz-che-atom",
          "questionText": "Isotopes of the same element differ in the number of",
          "optionA": "protons only",
          "optionB": "electrons only",
          "optionC": "neutrons, while the proton number stays the same",
          "optionD": "shells occupied by electrons",
          "correctOption": "C",
          "subConcept": "Definition of isotopes",
          "explanation": "Isotopes share the atomic number, the same protons and same electron structure, but carry different numbers of neutrons, so different mass numbers. A different proton number would make a different element, and a different electron count would make an ion.",
          "remediationTip": "Summarise isotopes as same Z, different A, caused by different neutrons."
        },
        {
          "id": "q-che-atom-5",
          "quizId": "quiz-che-atom",
          "questionText": "Naturally occurring boron is 20 percent boron-10 and 80 percent boron-11. What is its relative atomic mass?",
          "optionA": "10.8",
          "optionB": "10.2",
          "optionC": "11.0",
          "optionD": "10.5",
          "correctOption": "A",
          "subConcept": "Weighted average relative atomic mass",
          "explanation": "The weighted average is (10 times 20 plus 11 times 80) divided by 100, that is (200 plus 880) over 100, giving 1080 over 100 which equals 10.8. The value 10.5 comes from a simple unweighted mean, and 10.2 reverses the two abundances.",
          "remediationTip": "Multiply each isotope mass by its abundance, add the products, then divide by 100 in one clear method line."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t1-atomic-structure-isotopes-relative-mass",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 7,
    "title": "Atomic Structure II: Isotopes, Relative Atomic Mass and Configuration",
    "description": "Subatomic particles and nuclide notation, isotopes and their abundance, weighted relative atomic mass, the electronic configuration of the first twenty elements, the valence shell and stability, and the uses of radioisotopes in medicine and industry.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons, so they share the atomic number but differ in mass number.\n• Nuclide notation writes the mass number A above the atomic number Z beside the symbol, for example carbon-14 is written A 14, Z 6, and neutrons equal A minus Z.\n• Hydrogen has three isotopes, protium (1 proton, 0 neutrons), deuterium (1 proton, 1 neutron) and tritium (1 proton, 2 neutrons); chlorine has Cl-35 and Cl-37.\n• Chemical properties depend on the electron arrangement, so isotopes of one element react almost identically; only their mass and nuclear stability differ.\n• Relative atomic mass is a weighted average of the isotopes: Ar = sum of (isotope mass times percentage abundance) divided by 100.\n• Chlorine with 75 per cent Cl-35 and 25 per cent Cl-37 gives Ar = (35 x 75 + 37 x 25) / 100 = 35.5, which is why many Ar values are not whole numbers.\n• One mole of particles contains Avogadro's number, 6.02 x 10^23 particles, and the Ar in grams is the molar mass of that element.\n• Electrons fill shells in the pattern 2, 8, 8 for the first twenty elements; write configuration as 2.8.8.1 for potassium (Z 19).\n• The outermost shell is the valence shell; the number of electrons in it fixes the valency and the ion an element forms.\n• Atoms are most stable with eight electrons in the outer shell (octet rule); noble gases already have it, which is why they hardly react.\n• Sodium (2.8.1) loses one electron to give Na+, oxygen (2.6) gains two to give O2-, aluminium (2.8.3) loses three to give Al3+.\n• Uses of radioisotopes: carbon-14 for dating organic remains, cobalt-60 for radiotherapy and food irradiation, and radioactive tracers in industry and medicine.",
    "detailedNotes": {
      "overview": "This topic takes the atom you met in the first chemistry course further. You will learn the standard notation for a nuclide, so that A above Z tells you protons, neutrons and electrons at a glance, and you will meet isotopes, atoms of the same element that differ only in their neutron count. Because isotopes differ in mass, the relative atomic mass printed in tables is a weighted average, and computing it from percentage abundance is one of the most reliable mark schemes in WASSCE Paper 1 and Paper 2. The second half of the lesson is the electronic configuration of the first twenty elements in the 2.8.8 pattern, the idea of a valence shell, and why atoms gain, lose or share electrons to reach stability. Finally you will see how radioisotopes are put to work in Ghanaian hospitals, farms and industries.",
      "introduction": "Work from a single table. List the first twenty elements with their atomic numbers and a typical mass number, then fill columns for protons, neutrons and electrons and write the configuration of each in the 2.8.8 pattern. Circle the outer-shell count and label it valency. After that, do the chlorine weighted-average calculation twice by hand and confirm both give 35.5, because examiners award method marks for writing the abundance expression before the division. Keep the ion cards ready: for sodium, magnesium and oxygen show the electron moved and the charge left behind.",
      "realWorldContext": "Radioisotope work is real science in Ghana. At the Ghana Atomic Energy Commission headquarters at Kwabenya near Amasaman, researchers use cobalt-60 sources to irradiate foods such as yam and shito ingredients to delay sprouting and to kill pests, and breed mutant cocoa and rice varieties for better yield. Korle Bu Teaching Hospital and Komfo Anokye Teaching Hospital use radioisotope tracers in scanning and radiotherapy for cancer patients. Archaeologists dating charcoal from old settlement sites at Begho in Bono rely on carbon-14, whose constant decay is exactly the isotope behaviour you are studying, and all of these facilities follow strict safety rules of shielding, distance and limited exposure time.",
      "objectives": [
        "Use nuclide notation A over Z to state the numbers of protons, neutrons and electrons in an atom or a simple ion",
        "Define isotopes and give examples for hydrogen and chlorine, explaining why isotopes share chemical properties",
        "Calculate the weighted relative atomic mass of an element from isotopic masses and percentage abundances",
        "Write the electronic configuration of the first twenty elements and relate the valence shell to stability and ion formation"
      ],
      "sections": [
        {
          "title": "Nuclide Notation and Isotopes",
          "content": "A particular kind of atom is called a nuclide, and chemists describe it with two numbers set beside the symbol: the mass number A on top and the atomic number Z underneath. The atomic number counts protons and identifies the element, the mass number counts protons plus neutrons, and the difference A minus Z gives the neutrons. Isotopes are then easy to define: atoms of the same element, so the same Z, but different numbers of neutrons and therefore different A. Hydrogen illustrates it perfectly: protium has one proton and no neutron, deuterium has one proton and one neutron, and radioactive tritium has one proton and two neutrons. Because chemical behaviour comes from the electrons, and isotopes of an element have the same electron count, they react almost identically; what differs is mass and nuclear stability. Chlorine occurs as Cl-35 and Cl-37, and both form chloride ions with charge 1-.",
          "bulletPoints": [
            "Nuclide notation places A (protons plus neutrons) above Z (protons) beside the symbol.",
            "Neutrons are computed as A minus Z; this one-step subtraction appears constantly in Paper 1.",
            "Isotopes: same protons, different neutrons, same atomic number, different mass numbers.",
            "Protium, deuterium and tritium are the three isotopes of hydrogen, with 0, 1 and 2 neutrons.",
            "Isotopes share chemical properties because chemistry depends on the electrons, not the neutrons."
          ],
          "keyTakeaway": "Read A over Z instantly: Z gives protons and electrons, A minus Z gives neutrons, and same Z with different A means isotopes.",
          "realWorldExample": "Irradiation units at the Ghana Atomic Energy Commission at Kwabenya use cobalt-60, a radioactive isotope of ordinary stable cobalt-59; both are cobalt chemically and only the neutron count and nuclear behaviour differ."
        },
        {
          "title": "Relative Atomic Mass as a Weighted Average",
          "content": "No single chlorine atom actually weighs 35.5, yet the periodic table prints 35.5 for chlorine, and understanding why earns easy marks. Natural chlorine is a mixture of two isotopes, roughly 75 per cent Cl-35 and 25 per cent Cl-37, so the relative atomic mass is the weighted average Ar = (35 x 75 + 37 x 25) / 100, which works out at (2625 + 925) / 100 = 35.5. The general method is always the same: multiply each isotope mass by its percentage abundance, add the products, then divide by 100. This explains why atomic masses are so often not whole numbers; the average sits between the isotope masses in proportion to their abundance. The value also connects directly to the mole: 35.5 g of chlorine contains one mole of chlorine atoms, that is 6.02 x 10^23 atoms, so the weighted average is the number you must use in every reacting-mass calculation involving that element.",
          "bulletPoints": [
            "Ar = sum of (isotope mass x percentage abundance) divided by 100; write the products before dividing.",
            "Chlorine check: (35 x 75 + 37 x 25) / 100 = 3550 / 100 = 35.5.",
            "Non-whole Ar values are averages of isotopes, not the mass of any single atom.",
            "Molar mass in grams numerically equals Ar; one mole holds 6.02 x 10^23 particles.",
            "The average must lie between the two isotope masses; if not, the arithmetic has slipped."
          ],
          "keyTakeaway": "Relative atomic mass is an abundance-weighted average, and it is this average, not any isotope mass, that enters mole calculations.",
          "realWorldExample": "A quality-control officer checking fertiliser compounds cannot weigh individual atoms; like the chemist, the officer works with average values, so the nitrogen content on an analysed bag reflects averaged atomic masses."
        },
        {
          "title": "Electronic Configuration, Valence and Stability",
          "content": "Electrons occupy shells around the nucleus, and at SHS level the first twenty elements fill in the pattern 2, 8, 8: the first shell holds 2, the second 8, and the third takes up to 8 before the fourth begins. So calcium, atomic number 20, is written 2.8.8.2, and chlorine, atomic number 17, is 2.8.7. The outermost occupied shell is the valence shell, and the electrons in it, the valence electrons, decide how the element behaves. Atoms react in order to empty or fill that outer shell to eight, the stable octet followed already by the noble gases, which explains why argon (2.8.8) is inert. Metals with one to three valence electrons lose them, forming cations: sodium becomes Na+ with 2.8, magnesium becomes Mg2+ with 2.8, aluminium becomes Al3+ with 2.8. Non-metals with five to seven gain electrons to form anions: oxygen takes two to become O2- with 2.8, chlorine takes one to become Cl- with 2.8. The number gained, lost or shared is the valency.",
          "bulletPoints": [
            "Fill shells 2, then 8, then 8 for the first twenty elements; write configurations as 2.8.x.",
            "The valence shell is the outermost one; its electron count equals the element's combining power.",
            "Octet rule: eight outer electrons is stable; noble gases have it and barely react.",
            "Metals lose valence electrons: Al (2.8.3) forms Al3+, leaving the stable arrangement 2.8.",
            "Non-metals gain: O (2.6) takes two electrons to reach 2.8 as O2-, so its valency is 2."
          ],
          "keyTakeaway": "Configuration predicts behaviour: count the outer electrons, and you know the ion, the valency and the stability of the element.",
          "realWorldExample": "The sodium and chloride ions dissolved in the brine ponds at Keta are exactly Na+ and Cl-, formed by the electron transfer the 2.8.8 shells show, and evaporating the water simply recovers the same stable ions as crystals."
        }
      ],
      "commonMistakes": [
        "Saying isotopes differ in protons or electrons; they differ only in neutrons, so their atomic number and chemistry are unchanged.",
        "Treating Ar 35.5 for chlorine as the mass of one atom instead of the weighted average of Cl-35 and Cl-37.",
        "Forgetting to divide by 100 at the end of the weighted-average calculation and reporting 3550 as the relative atomic mass.",
        "Writing the configuration of the third shell as 18 straight away; for the first twenty elements the syllabus pattern is 2.8.8 before the fourth shell opens."
      ],
      "wassceExamTips": [
        "In Paper 1, when given a nuclide such as A 40 over Z 20, set out protons = Z, electrons = Z for a neutral atom and neutrons = A minus Z in one clean line; each count can carry its own mark.",
        "In Paper 2 weighted-average questions, the method marks are for showing each mass multiplied by its abundance and summing before dividing; never jump straight to the answer.",
        "State explicitly that isotopes have the same electronic configuration when asked why their chemical properties match; the word configuration is what the scheme looks for.",
        "In Paper 3 and practical vivas, questions on ions expect configurations written as 2.8.8 with the charge shown on the symbol, for example Mg2+, not written separately."
      ],
      "summaryChecklist": [
        "Can I find protons, neutrons and electrons from nuclide notation A over Z, including for simple ions?",
        "Can I define isotopes and give the hydrogen and chlorine examples with their neutron counts?",
        "Can I compute relative atomic mass from isotope masses and percentage abundances in clearly labelled steps?",
        "Can I write the configurations of the first twenty elements in the 2.8.8 pattern?",
        "Can I explain octet stability, valency and ion formation directly from the valence shell?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-atomic-structure-isotopes-relative-mass-1",
        "title": "Weighted Relative Atomic Mass of Chlorine",
        "problem": "Naturally occurring chlorine consists of 75 per cent chlorine-35 and 25 per cent chlorine-37. Calculate the relative atomic mass of chlorine and explain why the value is not a whole number.",
        "stepByStepSolution": [
          "Step 1 (M1): Recall the weighted-average rule, Ar = sum of (isotope mass x percentage abundance) divided by 100.",
          "Step 2 (M1): Multiply each isotope by its abundance: 35 x 75 = 2625 for chlorine-35, and 37 x 25 = 925 for chlorine-37.",
          "Step 3 (M1): Add the products: 2625 + 925 = 3550.",
          "Step 4 (A1): Divide by 100: Ar = 3550 / 100 = 35.5.",
          "Step 5 (M1): Check the reasonableness of the answer: 35.5 lies between 35 and 37 and nearer 35, matching the higher abundance of chlorine-35.",
          "Step 6 (A1): Conclude that the value is not whole because it is an average over two isotopes; no single chlorine atom has mass 35.5, the sample as a whole averages to it."
        ],
        "keyTakeaway": "Relative atomic mass is an abundance-weighted average; show the multiplications and the sum before dividing by 100 to bank the method marks."
      },
      {
        "id": "ex-che-atomic-structure-isotopes-relative-mass-2",
        "title": "Particles and Configuration in the Aluminium Ion",
        "problem": "An aluminium atom is written with mass number 27 and atomic number 13 and forms the ion Al3+. State the numbers of protons, neutrons and electrons in the ion, and write its electronic configuration.",
        "stepByStepSolution": [
          "Step 1 (M1): Read the notation: atomic number 13 gives 13 protons, and mass number 27 gives the nucleon total of protons plus neutrons.",
          "Step 2 (A1): Compute neutrons as A minus Z: 27 - 13 = 14 neutrons.",
          "Step 3 (M1): For the neutral atom, electrons equal protons, so the atom holds 13 electrons with configuration 2.8.3; three electrons sit in the valence shell.",
          "Step 4 (M1): The charge 3+ means three electrons have been lost from the outer shell, so subtract 3 from 13.",
          "Step 5 (A1): The ion Al3+ therefore has 13 protons, 14 neutrons and 10 electrons.",
          "Step 6 (A1): Write the configuration of the ion as 2.8, a complete outer shell of eight, the stable arrangement of neon; this is why aluminium forms Al3+ rather than keeping its three valence electrons."
        ],
        "keyTakeaway": "In a cation, electrons fall short of protons by exactly the charge; the resulting configuration shows the stable octet that drove the atom to ionise."
      }
    ],
    "quiz": {
      "id": "quiz-che-atomic-structure-isotopes-relative-mass",
      "topicId": "shs1-che-t1-atomic-structure-isotopes-relative-mass",
      "title": "Isotopes, Relative Atomic Mass and Configuration Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-atomic-structure-isotopes-relative-mass-1",
          "quizId": "quiz-che-atomic-structure-isotopes-relative-mass",
          "questionText": "Which statement correctly defines a pair of isotopes?",
          "optionA": "Atoms with the same neutrons but different protons",
          "optionB": "Atoms with the same protons but different neutrons",
          "optionC": "Atoms with the same mass number but different electrons",
          "optionD": "Atoms with different protons and different neutrons",
          "correctOption": "B",
          "subConcept": "Definition of isotopes",
          "explanation": "Isotopes are atoms of the same element, so they must share the proton count (atomic number), and they differ only in neutrons, giving different mass numbers. Same neutrons, or same mass number, cannot describe a pair of isotopes of one element.",
          "remediationTip": "Anchor the definition on two words: same protons, different neutrons; recite it with the hydrogen example protium and deuterium."
        },
        {
          "id": "q-che-atomic-structure-isotopes-relative-mass-2",
          "quizId": "quiz-che-atomic-structure-isotopes-relative-mass",
          "questionText": "A nuclide is written with mass number 31 and atomic number 15. How many neutrons does its nucleus contain?",
          "optionA": "15",
          "optionB": "16",
          "optionC": "31",
          "optionD": "46",
          "correctOption": "B",
          "subConcept": "Nuclide notation",
          "explanation": "Neutrons equal mass number minus atomic number, 31 - 15 = 16. The atomic number 15 counts protons, and the mass number 31 counts protons plus neutrons together, so the difference isolates the neutrons.",
          "remediationTip": "Always subtract A minus Z in one written line; the common slip is reporting Z or A unchanged."
        },
        {
          "id": "q-che-atomic-structure-isotopes-relative-mass-3",
          "quizId": "quiz-che-atomic-structure-isotopes-relative-mass",
          "questionText": "Why do the isotopes chlorine-35 and chlorine-37 have nearly identical chemical properties?",
          "optionA": "Because they have the same electronic configuration",
          "optionB": "Because they have the same mass number",
          "optionC": "Because they contain the same number of neutrons",
          "optionD": "Because they are both radioactive",
          "correctOption": "A",
          "subConcept": "Chemical behaviour of isotopes",
          "explanation": "Chemistry is governed by electrons, and both isotopes of chlorine have 17 electrons arranged 2.8.7, so both gain one electron to form chloride ions. Their mass numbers and neutron counts differ, and neither common chlorine isotope is radioactive.",
          "remediationTip": "Link every chemical property question back to one phrase: reactions depend on the electron arrangement."
        },
        {
          "id": "q-che-atomic-structure-isotopes-relative-mass-4",
          "quizId": "quiz-che-atomic-structure-isotopes-relative-mass",
          "questionText": "Boron occurs as 20 per cent boron-10 and 80 per cent boron-11. What is its relative atomic mass?",
          "optionA": "10.0",
          "optionB": "10.5",
          "optionC": "10.8",
          "optionD": "11.0",
          "correctOption": "C",
          "subConcept": "Weighted average from abundance",
          "explanation": "Applying the rule: (10 x 20 + 11 x 80) / 100 = (200 + 880) / 100 = 10.8. The answer sits between 10 and 11 but close to 11, correctly reflecting the 80 per cent dominance of boron-11.",
          "remediationTip": "Estimate first: with the heavier isotope dominant the average must sit nearer 11, which rules out options 10.0 and 10.5 before you calculate."
        },
        {
          "id": "q-che-atomic-structure-isotopes-relative-mass-5",
          "quizId": "quiz-che-atomic-structure-isotopes-relative-mass",
          "questionText": "An atom X has the electronic configuration 2.8.7. Which ion is most likely to form from it?",
          "optionA": "X3+",
          "optionB": "X+",
          "optionC": "X2-",
          "optionD": "X-",
          "correctOption": "D",
          "subConcept": "Valence shell and ion formation",
          "explanation": "With seven valence electrons the atom needs only one more to complete the stable octet of eight, so it gains a single electron and becomes X-. Losing or gaining two or three electrons would break a filled inner shell and is not how a halogen behaves.",
          "remediationTip": "Count how far the outer shell is from eight; that distance is the charge the atom acquires, with gain giving minus and loss giving plus."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t1-reacting-masses-percentage-composition",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 8,
    "title": "Reacting Masses and Percentage Composition",
    "description": "The law of conservation of mass applied in reaction calculations, percentage composition from a formula, empirical formula from analysis data, molecular formula from empirical formula and molar mass, water of crystallisation found by heating, and reacting-mass ratios from balanced equations.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Law of conservation of mass: in a chemical reaction matter is neither created nor destroyed, so the total mass of products equals the total mass of reactants.\n• Reacting masses must come from a balanced equation: 2Mg + O2 -> 2MgO means 48 g of magnesium react with 32 g of oxygen to give 80 g of magnesium oxide.\n• The general recipe for reacting mass: write and balance the equation, convert given mass to moles with n = m/Mr, use the mole ratio, convert back with m = n x Mr.\n• Percentage composition of an element in a compound: (mass of that element in one formula unit / Mr of the compound) x 100.\n• Urea, CO(NH2)2, has Mr 60 and 28 parts of nitrogen, so its percentage nitrogen is (28/60) x 100 = 46.7 per cent, the figure fertiliser bags quote.\n• Empirical formula is the simplest whole-number ratio of atoms; find it by dividing each percentage by its Ar, then divide all by the smallest result.\n• Molecular formula = n x empirical formula, where n = molar mass / empirical formula mass; CH2O with molar mass 180 gives n = 6 and the formula C6H12O6.\n• Water of crystallisation is water held firmly inside the crystal lattice; hydrates such as CuSO4.5H2O and Na2CO3.10H2O carry it.\n• To find x in a hydrate: weigh the hydrated salt, heat off the water of crystallisation in a crucible, cool and reweigh; the mass lost is the water.\n• Convert salt mass and water mass to moles separately and take the ratio; the number of water molecules per formula unit is that ratio made whole.\n• Anhydrous copper(II) sulphate is white and turns blue again with water, the standard test to confirm water is present.\n• Conservation of mass still holds when a gas escapes: the missing mass equals the gas, so open-flask experiments seem to lose mass while closed ones balance exactly.",
    "detailedNotes": {
      "overview": "This topic turns the mole into practical arithmetic. First you apply the law of conservation of mass: because atoms are never created or destroyed, a balanced equation is a recipe of fixed reacting masses, and you learn the standard route from grams to moles, through the ratio, and back to grams. Second you compute percentage composition straight from a formula, the number that appears on fertiliser bags and food labels. Third you work backwards, using analysis data to find the empirical formula, then the molar mass to lift it into the molecular formula. The last strand is water of crystallisation, where careful weighing before and after heating a hydrate reveals how many water molecules sit inside the crystal. Every one of these is a dependable Paper 2 calculation type, and all of them reward clean method lines even when the final figure slips.",
      "introduction": "Set a routine and keep to it. For every reacting-mass problem write four headings: balanced equation, moles of the given substance, mole ratio, mass of the answer. Practise one percentage composition from a formula, one empirical formula from three percentages, and one hydrate calculation where the residue mass and water mass are given, so the division by Ar and the divide-by-smallest steps become automatic. Keep a notebook page of Mr values you have computed, such as CaCO3 100 and CuSO4 160, because re-deriving them under exam pressure wastes time.",
      "realWorldContext": "Numbers from this topic hang on shop shelves across Ghana. Fertiliser dealers at Ejura and Techiman sell urea whose label nitrogen content of about 46 per cent is exactly the percentage composition of CO(NH2)2, and NPK bags are formulated from these same composition sums so farmers know how much plant food is applied. Quality laboratories that test imported fertiliser for adulteration run percentage-composition analysis, because a bag claiming 46 per cent nitrogen but analysing at 30 per cent has been stretched with cheaper filler. At the salt-winning ponds near Keta, the chemistry of refining crude deposits follows the same heating-and-reweighing logic students use to find water of crystallisation in the school laboratory.",
      "objectives": [
        "State the law of conservation of mass and use a balanced equation to find reacting mass ratios between substances",
        "Calculate the percentage composition of each element in a compound from its formula and Ar values",
        "Determine an empirical formula from percentage composition data and convert it to a molecular formula using the molar mass",
        "Describe the heating method for finding water of crystallisation in a hydrate and compute the value of x"
      ],
      "sections": [
        {
          "title": "Conservation of Mass and Reacting Ratios",
          "content": "Lavoisier established that chemical change rearranges atoms without creating or destroying them, so in any reaction the total mass of the products must equal the total mass of the reactants. Try this with burning magnesium: 2Mg + O2 -> 2MgO means two atoms of magnesium (2 x 24 = 48 mass parts) join one molecule of oxygen (32 parts) to give 80 parts of magnesium oxide, and the ash and white smoke together weigh exactly what the ribbon and the consumed oxygen weighed. This fixed proportionality is called the reacting-mass ratio, and the balanced equation is its certificate; wrong coefficients give wrong mass claims. When a reaction appears to lose mass, such as fizzing chalk in an open beaker, the missing weight has simply escaped as carbon(IV) oxide gas; seal the apparatus and the scale stays balanced. The calculation pattern you must own is: n = m/Mr for the given substance, the mole ratio read from the equation, then m = n x Mr for the answer.",
          "bulletPoints": [
            "Conservation of mass: total reactant mass equals total product mass because atoms are rearranged, not destroyed.",
            "2Mg + O2 -> 2MgO reads as 48 g of Mg with 32 g of O2 giving 80 g of MgO.",
            "A balanced equation is a mass recipe; an unbalanced one corrupts every downstream figure.",
            "Open-flask reactions seem to lose mass only when a gas escapes; the gas carries the missing weight.",
            "Route for every question: mass to moles, ratio, moles back to mass."
          ],
          "keyTakeaway": "Balanced first, then calculate: reacting masses are mole ratios translated into grams, and mass is conserved even when fumes appear.",
          "realWorldExample": "A workshop worker burning magnesium alloy turnings sees brilliant white smoke and finds the powdery residue heavier than the metal that went in; oxygen from the air has combined, conserving mass exactly as 2Mg + O2 -> 2MgO dictates."
        },
        {
          "title": "Percentage Composition and the Empirical Formula",
          "content": "Percentage composition answers how much of a compound's mass is a chosen element, and it comes straight from the formula: divide the total mass of the element in one formula unit by the Mr and multiply by 100. In urea, CO(NH2)2, the Mr is 12 + 16 + (14 + 2) x 2 = 60 and the nitrogen contributes 28, so nitrogen is (28/60) x 100 = 46.7 per cent. Working backwards is equally standard. From analysis data, convert each percentage to moles by dividing by the Ar, then divide every figure by the smallest to get a whole-number ratio: a compound with 40.0 per cent carbon, 6.7 per cent hydrogen and 53.3 per cent oxygen gives mole figures 3.33, 6.7 and 3.33, the ratio 1 : 2 : 1, so the empirical formula is CH2O. The empirical formula is only the simplest ratio; the true molecular formula needs the molar mass. Divide molar mass by empirical formula mass: for glucose, 180 / 30 = 6, so multiply every subscript to get C6H12O6.",
          "bulletPoints": [
            "Percentage of an element = (mass of element in formula / Mr) x 100; the answer is a pure percentage.",
            "Urea check: Mr 60, nitrogen share 28, so 46.7 per cent nitrogen, the fertiliser label figure.",
            "Empirical recipe: percent divided by Ar, then divide all results by the smallest of them.",
            "Empirical mass for CH2O is 12 + 2 + 16 = 30; n = molar mass / 30 lifts it to the molecular formula.",
            "180 / 30 = 6, so glucose is C6H12O6, six times its empirical formula CH2O."
          ],
          "keyTakeaway": "Composition flows forward from formula to percentages and backward from percentages to formula; the molar mass chooses which multiple is real.",
          "realWorldExample": "An agro-dealer comparing two nitrogen fertilisers reads percentage composition directly off the bags: urea at about 46.7 per cent nitrogen versus ammonium nitrate at 35 per cent, and the honest analysis protects the farmer's cocoa fertilising budget."
        },
        {
          "title": "Water of Crystallisation",
          "content": "Many crystals trap definite numbers of water molecules inside their lattice, and the solid is called a hydrate: copper(II) sulphate is CuSO4.5H2O, washing soda is Na2CO3.10H2O, and gypsum carries water on which plasterers depend. The water is not liquid damp; it is stoichiometric, always the same count per formula unit, and it can be driven off by heating, leaving the anhydrous solid. The classic school procedure weighs a clean dry crucible with its hydrate, heats gently then strongly, allows cooling and reweighs; the mass lost is the water of crystallisation. Converting both masses to moles gives the ratio: moles of anhydrous salt against moles of water, made whole, names x. If heating a hydrate leaves an anhydrous residue with Mr 160 after a measured mass of water escapes, the two mole figures divide down to the small whole-number ratio written into the formula. The test running the other way is exquisite: anhydrous white copper(II) sulphate turns blue the instant water returns, so it proves water's presence in unknown liquids.",
          "bulletPoints": [
            "A hydrate binds a fixed number of water molecules per formula unit, written as salt.xH2O.",
            "Method: weigh crucible and hydrate, heat, cool, reweigh; loss in mass is the water.",
            "Convert salt mass and water mass to moles separately, then take the whole-number ratio for x.",
            "Anhydrous CuSO4 is white and turns blue with water, the confirmatory test for water.",
            "Heat gently at first and use tongs for the hot crucible; spattering ruins the mass readings."
          ],
          "keyTakeaway": "Loss on heating is water, moles of salt to moles of water is x, and the blue-white colour switch confirms the same fact in reverse.",
          "realWorldExample": "Plaster of Paris used on building sites around Kumasi is gypsum that has been gently heated to drive off part of its water of crystallisation; on site it re-absorbs water and sets, the same reversible water-in-lattice behaviour studied with copper(II) sulphate."
        }
      ],
      "commonMistakes": [
        "Calculating percentage composition with the Ar of one atom when the formula contains several, so nitrogen in urea is wrongly taken as 14/60 instead of 28/60.",
        "Reporting reacting-mass answers without units, or leaving a mole figure where a mass in grams was asked.",
        "Stopping at the empirical formula and calling it the molecular formula, skipping the step n = molar mass / empirical formula mass.",
        "Forgetting to include the crucible and lid consistently, or not reheating and reweighing to constant mass, giving a wrong water loss."
      ],
      "wassceExamTips": [
        "Paper 2 always pays for method: write the balanced equation with state symbols on its own line before any numbers, because a correct ratio taken from a wrong equation cannot score.",
        "In percentage-composition parts, show the element's total mass over Mr inside a bracket before multiplying by 100; the scheme marks the substitution and the final per cent separately.",
        "For empirical-formula questions, lay percentages and Ar values out in a small table, divide, then divide by the smallest; the table earns presentation marks in structured questions.",
        "In Paper 3 hydrate questions, state that strong heating to constant mass gives the anhydrous solid and quote the white anhydrous CuSO4 turning blue test; examiners expect observation paired with conclusion."
      ],
      "summaryChecklist": [
        "Can I state the law of conservation of mass and show it with 2Mg + O2 -> 2MgO masses?",
        "Can I run mass to moles to ratio to mass for any reacting-mass question?",
        "Can I find the percentage of each element in a compound from its formula?",
        "Can I derive an empirical formula from percentages and lift it to a molecular formula with molar mass?",
        "Can I describe the crucible heating method and compute x in a hydrate from mass data?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-reacting-masses-percentage-composition-1",
        "title": "Percentage Nitrogen in Urea",
        "problem": "Urea, CO(NH2)2, is sold to cocoa and maize farmers as a nitrogen fertiliser. Given Ar values C = 12, O = 16, N = 14 and H = 1, calculate the percentage by mass of nitrogen in pure urea.",
        "stepByStepSolution": [
          "Step 1 (M1): Count the atoms in one formula unit: 1 carbon, 1 oxygen, 2 nitrogen and 4 hydrogen, because the bracket (NH2) with subscript 2 doubles to N2H4.",
          "Step 2 (M1): Compute Mr = 12 + 16 + (14 + 2 x 1) x 2 = 12 + 16 + 32 = 60.",
          "Step 3 (M1): Find the total mass of nitrogen in the formula: 2 nitrogen atoms give 2 x 14 = 28.",
          "Step 4 (M1): Apply the percentage formula, nitrogen per cent = (mass of nitrogen / Mr) x 100 = (28 / 60) x 100.",
          "Step 5 (A1): Divide: 28 / 60 = 0.4667, so 0.4667 x 100 = 46.7 per cent.",
          "Step 6 (A1): Conclude that pure urea is 46.7 per cent nitrogen by mass; a bag analysed far below this figure has been adulterated with inert filler."
        ],
        "keyTakeaway": "Expand the bracketed formula first, sum the element's atoms, and only then divide by Mr and multiply by 100."
      },
      {
        "id": "ex-che-reacting-masses-percentage-composition-2",
        "title": "From Analysis Data to the Molecular Formula",
        "problem": "A compound analyses as 40.0 per cent carbon, 6.7 per cent hydrogen and 53.3 per cent oxygen by mass. Its molar mass is 180 g/mol. Find the empirical formula and the molecular formula. (Ar: C = 12, H = 1, O = 16.)",
        "stepByStepSolution": [
          "Step 1 (M1): Convert each percentage to moles of atoms by dividing by Ar: C = 40.0 / 12 = 3.33, H = 6.7 / 1 = 6.7, O = 53.3 / 16 = 3.33.",
          "Step 2 (M1): Identify the smallest mole figure, 3.33, and divide all three mole values by it.",
          "Step 3 (A1): The ratios are C = 3.33/3.33 = 1, H = 6.7/3.33 = 2, O = 3.33/3.33 = 1, so the empirical formula is CH2O.",
          "Step 4 (M1): Compute the empirical formula mass: 12 + 2 x 1 + 16 = 30.",
          "Step 5 (M1): Divide the molar mass by the empirical formula mass: n = 180 / 30 = 6.",
          "Step 6 (A1): Multiply each subscript in CH2O by 6 to obtain the molecular formula C6H12O6, the formula of glucose."
        ],
        "keyTakeaway": "The empirical formula comes from percentages via moles and the smallest ratio; the molecular formula is that ratio scaled by molar mass divided by empirical mass."
      }
    ],
    "quiz": {
      "id": "quiz-che-reacting-masses-percentage-composition",
      "topicId": "shs1-che-t1-reacting-masses-percentage-composition",
      "title": "Reacting Masses and Percentage Composition Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-reacting-masses-percentage-composition-1",
          "quizId": "quiz-che-reacting-masses-percentage-composition",
          "questionText": "Chalk (calcium carbonate) is dropped into dilute hydrochloric acid in an open beaker and the beaker seems to lose mass. Which statement explains the observation correctly?",
          "optionA": "Some of the mass has been converted into energy and vanished",
          "optionB": "The acid destroyed matter, breaking the law of conservation of mass",
          "optionC": "Conservation of mass fails whenever a reaction fizzes",
          "optionD": "Carbon(IV) oxide gas escaped, and its mass accounts exactly for the loss",
          "correctOption": "D",
          "subConcept": "Conservation of mass with gas escape",
          "explanation": "The reaction CaCO3 + 2HCl -> CaCl2 + H2O + CO2 releases carbon(IV) oxide, which leaves an open beaker. Matter is conserved; the apparent loss equals the mass of gas that departed, which a closed flask would retain and weigh.",
          "remediationTip": "Whenever mass seems missing, name the gas that could have escaped and state that a closed system would balance."
        },
        {
          "id": "q-che-reacting-masses-percentage-composition-2",
          "quizId": "quiz-che-reacting-masses-percentage-composition",
          "questionText": "What is the very first step when a reacting-mass calculation gives the mass of one reactant and asks for the mass of a product?",
          "optionA": "Write and balance the equation for the reaction",
          "optionB": "Multiply the given mass by the Mr of the product",
          "optionC": "Divide the answer by Avogadro's number",
          "optionD": "Convert both masses to volumes at s.t.p.",
          "correctOption": "A",
          "subConcept": "Order of operations in stoichiometry",
          "explanation": "The mole ratio that links any two substances exists only through a balanced equation, so it must be correct before mass becomes moles becomes mass again. Skipping the balance corrupts every later figure and forfeits method marks.",
          "remediationTip": "Memorise the four-line template: equation balanced, moles given, ratio used, mass found."
        },
        {
          "id": "q-che-reacting-masses-percentage-composition-3",
          "quizId": "quiz-che-reacting-masses-percentage-composition",
          "questionText": "A 4.8 g sample of magnesium is burned completely in oxygen: 2Mg + O2 -> 2MgO. What mass of magnesium oxide forms? (Ar: Mg = 24, O = 16.)",
          "optionA": "4.8 g",
          "optionB": "6.4 g",
          "optionC": "8.0 g",
          "optionD": "11.2 g",
          "correctOption": "C",
          "subConcept": "Reacting mass from an equation",
          "explanation": "Moles of Mg = 4.8 / 24 = 0.2. The ratio of Mg to MgO is 1 to 1, so 0.2 mol of MgO forms, and with Mr 40 the mass is 0.2 x 40 = 8.0 g. The extra 3.2 g beyond the magnesium is the oxygen taken from the air.",
          "remediationTip": "Check that the product mass exceeds the metal mass, since oxygen has been added; 4.8 g or less would prove an error."
        },
        {
          "id": "q-che-reacting-masses-percentage-composition-4",
          "quizId": "quiz-che-reacting-masses-percentage-composition",
          "questionText": "Which observation confirms that the vapour driven off a heated blue hydrate is water?",
          "optionA": "The gas turns limewater milky",
          "optionB": "White anhydrous copper(II) sulphate turns blue where the vapour condenses",
          "optionC": "The residue fizzes with dilute acid",
          "optionD": "The vapour relights a glowing splint",
          "correctOption": "B",
          "subConcept": "Testing the water driven off a hydrate",
          "explanation": "Water vapour from the hydrate is condensed and dropped onto white anhydrous copper(II) sulphate, which turns blue, the confirmatory test for water. Limewater detects carbon(IV) oxide and a glowing splint tests oxygen, not water.",
          "remediationTip": "Pair the reagent with the result to remember it: white CuSO4 plus water gives blue, always."
        },
        {
          "id": "q-che-reacting-masses-percentage-composition-5",
          "quizId": "quiz-che-reacting-masses-percentage-composition",
          "questionText": "A compound has empirical formula CH2O and molar mass 60 g/mol. What is its molecular formula?",
          "optionA": "CH2O",
          "optionB": "C2H4O",
          "optionC": "C2H6O2",
          "optionD": "C2H4O2",
          "correctOption": "D",
          "subConcept": "Molecular formula from empirical formula",
          "explanation": "The empirical mass of CH2O is 30, and n = 60 / 30 = 2, so every subscript doubles, giving C2H4O2. C2H4O and C2H6O2 scale or multiply the formula wrongly, and CH2O itself would require n = 1.",
          "remediationTip": "Multiply the whole empirical formula by n, never just part of it; recount each element after scaling."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t2-bonding-and-structure",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 3,
    "title": "Chemical Bonding and Structure of Compounds",
    "description": "How atoms combine through ionic, covalent, coordinate and metallic bonding, drawn with electron-dot diagrams; polarity and molecular shape; and the structure-property argument that separates giant lattices from simple molecular substances and explains boiling-point trends.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Atoms bond to reach a stable outer shell, usually eight electrons, the octet rule, which is why the noble gases with full shells hardly react at all.\n• There are three main types of chemical bond, ionic formed by electron transfer, covalent formed by electron sharing, and metallic formed by a sea of delocalised electrons, plus the special covalent variant called coordinate or dative bonding.\n• Ionic bonding happens between a metal and a non-metal; the metal loses electrons to become a cation, the non-metal gains them to become an anion, and the opposite charges attract strongly.\n• In sodium chloride, sodium 2.8.1 gives its one outer electron to chlorine 2.8.7, so both reach stable shells and the ions Na+ and Cl- attract into a giant cubic lattice.\n• Ionic compounds have high melting and boiling points, are hard but brittle, conduct electricity only when molten or dissolved because the ions are then free to move, and usually dissolve in water.\n• Covalent bonding happens between non-metals; atoms share pairs of electrons so each completes its shell without any electron being transferred.\n• A single covalent bond is one shared pair as in H2 and Cl2, a double bond is two shared pairs as in O2 and the carbon to carbon in CO2, and a triple bond is three shared pairs as in N2.\n• Electron-dot diagrams, also called Lewis structures, place dots for valence electrons and show a shared pair as a line or two dots sitting between the two atoms.\n• Coordinate or dative bonding is a covalent bond where both electrons of the shared pair come from one atom only, the donor, as when ammonia NH3 gives its lone pair to a hydrogen ion to form the ammonium ion NH4+.\n• Polarity arises when a covalent bond joins two atoms of different electron-pulling power; in HCl the chlorine hogs the shared pair, becomes slightly negative, and leaves hydrogen slightly positive, giving a polar bond.\n• Metallic bonding is positive ions arranged in a sea of mobile, delocalised valence electrons; this explains why metals conduct electricity and heat, are malleable, ductile and shiny.\n• The three-dimensional shape of a simple molecule is set by the electron pairs around the central atom, so methane is tetrahedral, water is bent or V-shaped, and carbon dioxide is linear.\n• Structure decides properties; a substance may have a giant lattice, ionic, metallic or covalent network, or a simple molecular structure held together only by weak intermolecular forces.\n• Giant covalent structures such as diamond and silica have every atom bonded to its neighbours, so they have very high melting points and do not conduct except graphite, whose layers carry mobile electrons.\n• Simple molecular substances such as iodine, methane and water have low melting and boiling points because only weak forces between molecules must be overcome, not the strong covalent bonds inside them.\n• Boiling point rises as molecules get larger because the weak intermolecular forces strengthen with size, which is why chlorine is a gas, bromine a liquid and iodine a solid at room temperature.",
    "detailedNotes": {
      "overview": "This topic answers the central question of chemistry, why atoms stick together at all. You will learn the four bonding types, ionic from electron transfer, covalent from electron sharing, coordinate from a donated shared pair, and metallic from a sea of mobile electrons, and you will draw each with correct electron-dot diagrams. From there the lesson moves to shape and polarity, why a water molecule is bent and a carbon dioxide molecule is straight, and why one bond can be polar while another is not. It closes on the structure-property argument that WASSCE loves, contrasting giant lattices that melt at very high temperatures with simple molecular substances that melt and boil easily, and showing how boiling-point trends follow molecular size. Almost every theory question on solids and reactions traces back to a correct statement of bonding and structure.",
      "introduction": "Draw before you describe. For each bond type sketch the electron transfer or sharing with dots, then write one sentence naming the particles and the force holding them. Build the four structures side by side, sodium chloride lattice, diamond network, a beaker of simple molecules, and a strip of metal, and for each list melting point, conductivity and solubility. Finally run down the halogens chlorine, bromine and iodine and explain their physical states from molecular size and intermolecular force; that single exercise fixes the whole boiling-point trend.",
      "realWorldContext": "Bonding shows itself in materials around Ghana. The block and mortar sites in Kumasi rely on ionic and network solids, because the calcium compounds in cement set into hard lattices that resist heat. The pure water produced at Sakakama and other water plants is treated with chlorine, a diatomic molecule held by a covalent bond, while aluminium wiring drawn from imported rod is ductile precisely because metallic bonding lets layers of ions slide without breaking. Diamonds are priced and traded in Accra for cutting tools because their giant covalent network makes them the hardest natural substance, and the local shea butter that stays soft at room temperature is a mass of simple molecular fats held by weak forces, a contrast that is pure structure chemistry.",
      "objectives": [
        "Explain why atoms form bonds and relate bonding to the octet rule and stable shells",
        "Distinguish ionic, covalent, coordinate and metallic bonding and draw each with an electron-dot diagram",
        "Predict the formula of an ionic compound from the valencies of the two elements",
        "Relate molecular shape and polarity to the distribution of electrons in a bond",
        "Explain the difference between giant and simple molecular structures and connect structure to melting point, boiling point and conductivity"
      ],
      "sections": [
        {
          "title": "Ionic Bonding and the Electron Transfer",
          "content": "Ionic bonding is the electrostatic attraction between oppositely charged ions, and it is created by a complete transfer of electrons from one atom to another. It occurs between a metal that can afford to give up electrons and a non-metal eager to accept them, because the two have very different pulls on electrons. Take sodium and chlorine: sodium carries the arrangement 2.8.1 with a spare outer electron, and chlorine carries 2.8.7 needing one more to fill its shell, so sodium hands over its single outer electron to chlorine. The sodium, having lost a negative electron, becomes the positive ion Na+ now arranged 2.8, while the chlorine, having gained one, becomes the negative ion Cl- arranged 2.8.8. These charged particles are then locked together by strong attraction between opposite charges, and they stack into a giant regular cubic lattice rather than forming separate NaCl molecules. Because so much energy is needed to break that lattice of attractions, ionic compounds melt and boil at high temperatures, are hard but shatter when struck, dissolve well in water, and conduct electricity only when molten or in solution, when the ions are finally free to carry charge.",
          "bulletPoints": [
            "Ionic bond forms between a metal and a non-metal by complete electron transfer.",
            "Sodium loses one electron to become Na+; chlorine gains one to become Cl-; attraction holds them.",
            "The ions pack into a giant cubic lattice, so there are no individual NaCl molecules.",
            "High melting point, hard but brittle, soluble in water, conducts only when molten or dissolved.",
            "Write ion charges from the shell change: losing electrons gives positive, gaining gives negative."
          ],
          "keyTakeaway": "Ionic bonding is a transfer followed by attraction between charged ions, and its lattice explains the high melting point.",
          "realWorldExample": "The coarse salt harvested from the lagoons at Keta is sodium chloride, and its crystals taste, dissolve and conduct exactly as the ionic lattice predicts, because each grain is a giant array of Na+ and Cl- ions rather than loose molecules."
        },
        {
          "title": "Covalent and Coordinate Bonding",
          "content": "When two non-metals meet, neither can simply take electrons from the other, so they share instead, and that sharing is covalent bonding. Each atom contributes one electron to a shared pair that sits between the two nuclei, and both nuclei hold the pair, so each atom counts the shared electrons towards its own octet. A single bond is one shared pair, seen in hydrogen H2 and chlorine Cl2; a double bond is two shared pairs, as in oxygen O2 and in carbon dioxide where carbon shares two pairs, one with each oxygen; a triple bond of three shared pairs holds the two nitrogen atoms of N2 together very strongly. Electron-dot or Lewis diagrams show valence electrons as dots and represent a shared pair either as two dots between the symbols or as a straight line. Coordinate, or dative, bonding is a special covalent bond in which both electrons of the shared pair come from just one atom, the donor, which owns a lone pair. The classic case is ammonia, NH3, whose nitrogen still carries a lone pair; when ammonia meets a hydrogen ion, which has no electrons of its own, the nitrogen donates its lone pair to form the ammonium ion NH4+. Once formed, a coordinate bond is indistinguishable from any other covalent bond.",
          "bulletPoints": [
            "Covalent bonds join non-metals by sharing one or more pairs of electrons.",
            "Single pair gives H2 and Cl2, two pairs give O2 and CO2, three pairs give the strong N2 bond.",
            "Lewis dot diagrams draw valence electrons as dots and each shared pair as a line or two central dots.",
            "A coordinate bond is a shared pair in which both electrons come from the donor atom alone.",
            "Ammonia donates its lone pair to a hydrogen ion to form ammonium, NH4+."
          ],
          "keyTakeaway": "Covalent bonding shares a pair one electron from each atom; coordinate bonding shares a pair donated wholly by one atom.",
          "realWorldExample": "The hydrogen peroxide used to bleach and disinfect in a Tamale laundry is a small covalent molecule, each oxygen sharing electrons in single bonds, and its behaviour is set entirely by those shared pairs rather than by any transfer."
        },
        {
          "title": "Metallic Bonding, Shape and Polarity",
          "content": "Metals bond by a third method. The atoms of a metal release their few outer electrons into a shared pool, leaving a lattice of positive ions floating in a sea of delocalised electrons that roam freely through the whole structure. It is the strong attraction between the fixed positive ions and this mobile electron cloud that is the metallic bond, and the freedom of the electrons is exactly what lets metals conduct electricity and heat so well, while the non-directional bonding lets the ion layers slide over one another, giving malleability and ductility and the characteristic metallic shine. Bonding also shapes molecules and sets their polarity. Around a central atom the electron pairs push apart as far as they can, so methane with four bonds takes a tetrahedral shape, water with two bonds and two lone pairs bends into a V, and carbon dioxide with its two double bonds stays linear. Polarity depends on whether the sharing is unequal: in a hydrogen chloride bond the more electron-hungry chlorine draws the shared pair towards itself, becomes slightly negative and leaves hydrogen slightly positive, giving a polar bond, whereas in a symmetric molecule like carbon dioxide the two equal bonds cancel and the whole molecule is non-polar.",
          "bulletPoints": [
            "Metallic bonding is positive ions in a sea of mobile delocalised electrons.",
            "Free electrons give conductivity; sliding ion layers give malleability and ductility.",
            "Shape follows pair repulsion: methane tetrahedral, water bent, carbon dioxide linear.",
            "A polar bond forms when one atom pulls the shared pair unequally, as in HCl.",
            "Symmetric molecules can have polar bonds yet be non-polar overall because the pulls cancel."
          ],
          "keyTakeaway": "Metals bond by shared electron seas, and bond polarity and shape come from how electron pairs sit and pull.",
          "realWorldExample": "The copper wire pulled for house wiring in the Suame Magazine workshops bends without snapping and carries current because its metallic bond lets electrons stream through while the copper ion layers slide past one another."
        },
        {
          "title": "Giant Structures against Simple Molecular Substances",
          "content": "The decisive structure-property idea is the contrast between giant lattices and simple molecules, because melting point, boiling point and conductivity all follow from it. A giant structure has its particles bonded continuously through the whole sample. In an ionic lattice such as sodium chloride, in a metallic solid such as iron, or in a giant covalent network such as diamond or silica, every particle is locked to its neighbours by strong bonds, so a great deal of heat energy is needed to break the network, and these substances melt and boil at high temperatures. Diamond, where each carbon is covalently bonded to four others, is extremely hard and does not conduct, while graphite, also giant covalent but arranged in loose layers with spare mobile electrons, is soft and conducts, a neat reminder that structure detail matters. A simple molecular substance, by contrast, is made of small discrete molecules whose internal covalent bonds are strong but whose intermolecular forces between molecules are weak. Melting or boiling such a solid only has to overcome those weak forces, never the covalent bonds inside the molecule, so substances like oxygen, methane, iodine and water melt and boil easily and do not conduct. Within the simple molecular family, boiling point rises as the molecules get larger, because bigger molecules have stronger intermolecular attractions.",
          "bulletPoints": [
            "Giant lattices, ionic, metallic or covalent network, need much heat to break, so they have high melting and boiling points.",
            "Simple molecular substances have strong internal bonds but weak forces between molecules, so they melt and boil easily.",
            "Melting a molecular solid overcomes intermolecular force, never the covalent bond inside the molecule.",
            "Diamond is a hard non-conducting giant covalent network; graphite is soft and conducts because of its layered structure.",
            "Boiling point increases with molecular size, explaining chlorine gas, bromine liquid and iodine solid at room temperature."
          ],
          "keyTakeaway": "High melting point means a giant bonded lattice; low melting point means simple molecules held by weak intermolecular forces.",
          "realWorldExample": "A welder at Tema joining iron uses a metal with a giant lattice that holds a very high melting point, while the candle wax on the same workbench, a simple molecular substance, softens at a low temperature, the two behaviours a direct read-out of their structures."
        }
      ],
      "commonMistakes": [
        "Saying sodium chloride exists as separate NaCl molecules; it is a giant ionic lattice of Na+ and Cl- ions with no individual molecule anywhere.",
        "Drawing covalent bonding as a transfer of electrons; covalent bonds share a pair, one electron from each atom, and only ionic bonding transfers.",
        "Claiming a molten or dissolved ionic compound conducts because the electrons move; it conducts because the ions are free to move, which is a different mechanism from metallic conduction.",
        "Confusing the strength of the covalent bond inside a molecule with the strength of the intermolecular force between molecules; boiling a molecular substance breaks only the weak forces, not the bonds.",
        "Drawing water as a straight line; with two bonding pairs and two lone pairs on oxygen the molecule is bent, which is why it is polar.",
        "Writing a coordinate bond as weaker or different once formed; after formation a dative bond is an ordinary covalent bond, the only difference being that both electrons came from one atom."
      ],
      "wassceExamTips": [
        "In Paper 1 a bond-type question is decided by the elements involved, metal plus non-metal is ionic, non-metal plus non-metal is covalent, a lone-pair donation is coordinate, and a metal is metallic; learn that three-word test cold.",
        "When Paper 2 asks you to draw bonding, use dots and crosses for the two atoms, show the transferred electron for ionic and the shared pair for covalent, and label the ions with their charges to earn the diagram mark.",
        "For structure questions always compare the force being broken: name it, giant lattice bonds versus weak intermolecular forces, then state the melting point consequence; that two-line argument is where the marks sit.",
        "A favourite comparison is diamond against graphite; prepare the full answer, both giant covalent, diamond four bonds per carbon and hard, graphite layered with mobile electrons so soft and conducting.",
        "In the alternative practical Paper 3 you may be asked to identify a substance from its properties, solubility, melting point and conductivity, then classify it as ionic, covalent molecular or metallic; tie every property back to bonding."
      ],
      "summaryChecklist": [
        "Can I say why atoms bond and state the octet rule in my own words?",
        "Can I draw electron-dot diagrams for ionic, covalent and coordinate bonding and name the particles held?",
        "Can I predict the formula of an ionic compound from the valencies of a metal and a non-metal?",
        "Can I relate molecular shape and bond polarity to the way electron pairs are arranged?",
        "Can I explain why a giant structure has a high boiling point while a simple molecular substance has a low one?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-bonding-1",
        "title": "Predicting Ionic Formulae from Valency by the Criss-Cross Method",
        "problem": "Calcium has valency 2 and chlorine valency 1; aluminium has valency 3 and oxygen valency 2. Use the valencies to write the correct formula of calcium chloride and of aluminium oxide, showing how the charges balance.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the ions each element forms, calcium losing two electrons gives Ca2+, chlorine gaining one gives Cl-, aluminium losing three gives Al3+, and oxygen gaining two gives O2-.",
          "Step 2 (M1): State the rule that an ionic compound is electrically neutral, so the total positive charge must equal the total negative charge.",
          "Step 3 (M1): For calcium chloride, apply the criss-cross method, carrying the calcium charge 2 down to become the subscript on chlorine and the chlorine charge 1 up to become the subscript on calcium.",
          "Step 4 (A1): Read off the formula CaCl2, then check the charges balance, one calcium gives plus 2 and two chlorides give minus 2, total zero.",
          "Step 5 (M1): For aluminium oxide, criss-cross the aluminium charge 3 onto oxygen and the oxygen charge 2 onto aluminium.",
          "Step 6 (A1): Write the formula Al2O3 and verify neutrality, two aluminium give plus 6 and three oxygen give minus 6, so the total charge is zero and the formula is correct."
        ],
        "keyTakeaway": "Swap the ion charges across as subscripts by the criss-cross method, then always check that total positive charge equals total negative charge."
      },
      {
        "id": "ex-che-bonding-2",
        "title": "Drawing the Electron-Dot Structures of Water, Carbon Dioxide and Ammonium",
        "problem": "Draw and describe the electron-dot (Lewis) structure of a water molecule, a carbon dioxide molecule, and the ammonium ion formed when ammonia accepts a hydrogen ion, naming every single, double and coordinate bond shown.",
        "stepByStepSolution": [
          "Step 1 (M1): Count the valence electrons, oxygen has 6, each hydrogen has 1, and carbon has 4, so place dots for these electrons before forming any bond.",
          "Step 2 (M1): For water, let oxygen share one pair with each hydrogen, giving two single covalent bonds, and leave oxygen with two lone pairs; the shape is bent because the lone pairs push the O-H bonds down into a V.",
          "Step 3 (A1): Record water as H-O-H with two single bonds and two lone pairs on oxygen, a polar bent molecule.",
          "Step 4 (M1): For carbon dioxide, place carbon between two oxygens and let carbon share two pairs with each oxygen, forming two double covalent bonds, so every atom reaches a full octet.",
          "Step 5 (A1): Write carbon dioxide as O=C=O, two double bonds, arranged in a straight line, hence a non-polar molecule despite its polar bonds.",
          "Step 6 (M1): For the ammonium ion, draw ammonia as nitrogen with three N-H single bonds and one lone pair, then show the nitrogen donating that lone pair to a hydrogen ion that has no electron to contribute.",
          "Step 7 (A1): The result is NH4+ in which three bonds are ordinary covalent and one is a coordinate bond, both electrons coming from nitrogen, yet all four N-H bonds are identical once formed."
        ],
        "keyTakeaway": "Electron-dot diagrams make single, double and coordinate bonds visible, and the shape, bent water or linear carbon dioxide, follows from how the pairs and lone pairs sit."
      }
    ],
    "quiz": {
      "id": "quiz-che-bonding",
      "topicId": "shs1-che-t2-bonding-and-structure",
      "title": "Chemical Bonding and Structure Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-bond-1",
          "quizId": "quiz-che-bonding",
          "questionText": "Which type of bond is formed when a metal transfers electrons to a non-metal and the resulting ions attract?",
          "optionA": "Covalent bond",
          "optionB": "Metallic bond",
          "optionC": "Ionic bond",
          "optionD": "Coordinate bond",
          "correctOption": "C",
          "subConcept": "Ionic bonding",
          "explanation": "Electron transfer from a metal to a non-metal creates oppositely charged ions held by electrostatic attraction, which is ionic bonding. Covalent and coordinate bonds share electrons rather than transfer them, and metallic bonding is the electron sea within a metal.",
          "remediationTip": "Match the mechanism to the bond, transfer means ionic, sharing means covalent, donation from one atom means coordinate."
        },
        {
          "id": "q-che-bond-2",
          "quizId": "quiz-che-bonding",
          "questionText": "A molecule of oxygen, O2, holds its two atoms together by sharing two pairs of electrons. This bond is a",
          "optionA": "single covalent bond",
          "optionB": "coordinate bond",
          "optionC": "double covalent bond",
          "optionD": "triple covalent bond",
          "correctOption": "C",
          "subConcept": "Covalent bond order",
          "explanation": "Two shared pairs make a double covalent bond, as in O2. One pair would be single, three pairs would be triple as in N2, and a coordinate bond differs because both electrons come from only one atom.",
          "remediationTip": "Count the shared pairs, one single, two double, three triple, and remember nitrogen is the common triple example."
        },
        {
          "id": "q-che-bond-3",
          "quizId": "quiz-che-bonding",
          "questionText": "In the ammonium ion NH4+, the fourth N-H bond differs from the other three only in that",
          "optionA": "both its shared electrons came from the nitrogen atom",
          "optionB": "it is much weaker than the other three bonds",
          "optionC": "it was formed by transferring an electron to hydrogen",
          "optionD": "hydrogen donated a pair of electrons to nitrogen",
          "correctOption": "A",
          "subConcept": "Coordinate bonding",
          "explanation": "The fourth bond is a coordinate bond because ammonia donates its lone pair, both electrons, to a hydrogen ion that has none. Once formed the bond is identical to the others, not weaker, no electron is transferred, and it was nitrogen not hydrogen that gave the pair.",
          "remediationTip": "Define a dative bond as a shared pair in which one partner provides both electrons; then note it becomes an ordinary covalent bond."
        },
        {
          "id": "q-che-bond-4",
          "quizId": "quiz-che-bonding",
          "questionText": "Why does sodium chloride have a high melting point?",
          "optionA": "Its molecules are very large",
          "optionB": "A great deal of energy is needed to break the strong attractions in its giant ionic lattice",
          "optionC": "It contains covalent bonds between sodium and chlorine",
          "optionD": "Its ions move freely even in the solid state",
          "correctOption": "B",
          "subConcept": "Structure and melting point",
          "explanation": "Melting an ionic lattice means overcoming many strong attractions between ions, which requires high temperature. There are no molecules to be large, the bonding is ionic not covalent, and ions are fixed in the solid, which is why solid sodium chloride does not conduct.",
          "remediationTip": "For any high-melting solid name the giant lattice and the strong forces that must be broken to melt it."
        },
        {
          "id": "q-che-bond-5",
          "quizId": "quiz-che-bonding",
          "questionText": "Chlorine is a gas, bromine a liquid and iodine a solid at room temperature. The correct explanation is that",
          "optionA": "iodine has covalent bonds stronger than those in chlorine",
          "optionB": "the atomic number falls from chlorine to iodine",
          "optionC": "only iodine forms ionic bonds with itself",
          "optionD": "the molecules grow larger down the group, so the weak intermolecular forces strengthen and raise the boiling point",
          "correctOption": "D",
          "subConcept": "Boiling-point trend",
          "explanation": "All three are simple diatomic molecules held internally by covalent bonds, but as the molecules get bigger the intermolecular forces grow stronger, so more heat is needed, turning gas to liquid to solid. The covalent bonds inside the molecule are not what boiling breaks, and the atomic number rises, not falls, down the group.",
          "remediationTip": "For a boiling-point trend state the molecules get larger so intermolecular forces get stronger; never credit the covalent bond."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t2-laboratory-practice-apparatus-safe-handling",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 5,
    "title": "Laboratory Practice, Apparatus and Safe Handling",
    "description": "The common glassware and instruments of the senior high school chemistry laboratory and the job each does, heating and burning technique, pouring and dilution, first aid for burns, acid and alkali spills and fires, how observations are recorded and averaged, and the two classic sources of error in the balance and the measuring cylinder.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Know each item by use, not by picture: a beaker holds, mixes and heats liquids but is a rough measure only; a conical flask is the titration vessel because swirling without spillage is easy on its sloping walls.\n• A boiling tube takes direct heating for solution reactions; a 250 cm3 conical flask, a test tube and tube rack, a spatula, a dropper and a wash bottle complete the basic working set of the Ghanaian school bench.\n• A measuring cylinder is graduated in 1 cm3 steps, so it reads to about 0.5 cm3 at best; a burette reads to 0.05 cm3 and is recorded to 0.01 cm3, and a graduated pipette delivers one fixed volume such as 25.0 cm3 with a filler, never with the mouth.\n• A tripod, gauze and Bunsen burner carry the heating jobs; an evaporating dish concentrates a solution, a crucible on a pipeclay triangle reaches about 1000 degrees C for strong heating of solids, and crucible tongs, not fingers, lift it.\n• A glass funnel with folded filter paper separates an insoluble solid from a liquid; a separating funnel splits immiscible liquids such as palm oil and water; a condenser tube belongs to the distillation train.\n• A balance must be levelled and zeroed before any mass is taken; chemicals never go straight on the pan, and 0.01 g is the smallest division the class balance really gives.\n• Bunsen technique: air hole closed gives a luminous yellow safety flame, air hole open gives the hot blue non-luminous flame for heating; a roaring or lifting flame means the air collar is too open or the gas pressure too high.\n• Beakers and flasks are heated on wire gauze to spread the heat; a boiling tube is moved through the flame first, held with a holder, never more than one-third full, and its mouth pointed away from every person.\n• Flammable liquids such as ethanol, methylated spirit and petrol are warmed on a water bath with no naked flame anywhere near them.\n• Dilution rule of the laboratory: acid into water, never water into concentrated sulphuric acid, because the heat of dilution can drive the mixture out of the beaker in a spurt of acid.\n• The meniscus of water is read at eye level at the bottom of the curve; reading from above makes the volume too large and reading from below makes it too small, and that is parallax error.\n• A transfer to a flask is quantitative: rinse the beaker and the glass rod with distilled water into the flask so no solute is left behind.\n• First aid has a fixed order: thermal burns cooled in clean water for ten minutes or more with no oil or toothpaste, acid on the skin washed abundantly then treated with dilute sodium hydrogencarbonate solution, alkali washed then treated with boric acid solution, eyes flushed at the eyewash and sent to clinic.\n• A fire on clothing is smothered with the fire blanket or sand, never with water on a spirit or oil fire; hot glass looks exactly like cold glass, so tongs and a marked cooling rack are used every time.\n• Observations are written in ink as they happen, in a table with quantities, units and headings; burette readings are kept to two decimal places such as 22.00 cm3, and a titre is repeated until two are concordant within 0.10 cm3, then their mean is used and the rough titre rejected.\n• The two errors that cost marks: zero error on a balance that was not tared, and parallax on the cylinder or burette; both are systematic, repeatable and entirely preventable.",
    "detailedNotes": {
      "overview": "This topic is the working foundation of the whole chemistry course, because every practical mark in WASSCE Paper 3 is earned with apparatus that must be named, handled, read and cleaned correctly. You will learn the standard glassware of the senior high school laboratory and the single job each item does best, the technique for heating, burning, pouring and diluting, and the first-aid routine for burns, acid and alkali spills and small fires. You will also learn to record observations so that they carry marks, and to identify the two systematic errors, balance zero error and meniscus parallax, that make a school result wrong even when the chemistry is right. Nothing here is decoration: a weak command of apparatus knowledge costs candidates in Paper 1 objectives, Paper 2 structured questions and Paper 3 practical alike.",
      "introduction": "Handle the class collection until the names are automatic: pick up each item, state its use and its limitation in one sentence, and write that sentence in your notebook. Then work the skills in order, lighting and adjusting the burner, heating a liquid on gauze, filtering, measuring 25.0 cm3 of a solution with a pipette and filling a burette without an air lock. Finally rehearse the accident routine as a class drill, so that the water bucket, eyewash, sand bucket, fire blanket and first-aid box can be found in the dark. Keep a data table for the practical and have the teacher initial it, since presentation of results is marked on its own.",
      "realWorldContext": "In a Ghanaian senior high school laboratory the technician keeps one balance for the whole class, a store of beakers that are chipped at the rim, and a single burette rack, so discipline over apparatus decides whether a practical lesson succeeds at all. The water supply may fail, and then distilled water has to be made on the school hot plate or bought from a nearby laboratory. Outside school the same handling rules protect apprentices: block-making yards in Kasoa mix caustic soda solutions and concrete, both alkaline and both burning; the sachet-water plant at Ashaley Botwe doses chlorine and must never mix acid into that stream; and the gold workshops at Tarkwa use cyanide and acid baths where the order of dilution and the eyewash are a matter of life. Read the label, wear the protection, and never improvise with a flame.",
      "objectives": [
        "Name at least ten pieces of common laboratory apparatus and state the one use for which each is best suited",
        "Choose the correct apparatus for a given job and justify the choice by accuracy, safety or the property being used",
        "Carry out heating, filtration, pouring and dilution with the stated safety precautions at each stage",
        "Apply the first-aid routine to burns, acid and alkali spills, fires and fume inhalation, and explain the reason for each step",
        "Record observations in a results table, detect zero error and parallax, and process burette readings to a correct mean titre"
      ],
      "sections": [
        {
          "title": "The Working Glassware and What Each Item Is For",
          "content": "Apparatus is chosen by the job, and every item has a limitation as well as a use. A beaker holds, mixes and heats liquids, but its graduations are rough, so no correct concentration is ever prepared from a beaker reading. A conical flask is the titration vessel, because its sloping walls let the contents be swirled without loss, and only distilled water should be used to rinse down the sides during a titration. A boiling tube takes direct heating for solution reactions, while a test tube on a rack serves for the small samples used in qualitative analysis. Measuring apparatus divides sharply into three grades: the measuring cylinder graduated in 1 cm3 steps for rough volumes, the burette graduated to 0.05 cm3 and read to 0.05 cm3 for variable measured volumes, and the graduated pipette that delivers one fixed volume such as 25.0 cm3 with far less error. A pipette is filled with a pipette filler, never with the mouth, and the jet of a burette must be free of an air lock before the first reading is taken.",
          "bulletPoints": [
            "Beaker for holding and heating; conical flask for titration; boiling tube for heated solution reactions.",
            "Measuring cylinder reads to about 0.5 cm3, burette to 0.05 cm3, pipette delivers one fixed volume accurately.",
            "Burette is rinsed with the solution it will hold, not only with water, and the jet is filled before reading.",
            "Rinse the inside of the conical flask with distilled water only during a titration, never with the alkali.",
            "Watch glass, spatula, dropper, glass rod and wash bottle are named in Paper 3 as often as the glassware."
          ],
          "keyTakeaway": "Match the apparatus to the job by accuracy first: a cylinder is for rough work, a pipette and burette are for quantitative work, and a beaker never gives a volume you may report.",
          "realWorldExample": "A municipal water laboratory at Weija delivers 25.0 cm3 of a treated-water sample with a pipette for hardness titration rather than a cylinder, because a 0.5 cm3 mistake there would misstate the calcium content of the whole supply by a visible margin."
        },
        {
          "title": "Heating, Strong Heating and the Bunsen Flame",
          "content": "Heat is applied with a tripod, gauze and burner, and the burner has two flames with two purposes. With the air hole closed the flame is luminous yellow, cooler and safer to see in the room; with the air hole open it is the hot non-luminous blue flame used for heating, and a roaring or lifting flame tells you the collar is too open or the gas pressure too high. Beakers and conical flasks are always heated on wire gauze so the heat is spread and the glass does not crack, but a boiling tube may be put into the naked flame after being moved through it first to warm it evenly. A boiling tube is gripped a third from the top with a holder, is never more than one-third full, and is pointed away from yourself and every other student, because a sudden burst of steam is delivered straight along its axis. Liquids that catch fire easily, including ethanol, methylated spirit and petrol, are warmed in a water bath with no naked flame anywhere near the bench. For strong heating of a solid to constant mass, a crucible sits on a pipeclay triangle over the blue flame and is lifted only with crucible tongs, since a crucible fresh from the flame will burn through skin at once and will also crack a bench top.",
          "bulletPoints": [
            "Yellow safety flame with the air hole closed; blue heating flame with the air hole open.",
            "Beakers and flasks on gauze; boiling tubes in the naked flame after preliminary warming.",
            "Mouth of a heated tube pointed away from people; contents never more than one-third full.",
            "Water bath for flammable liquids; no naked flame while spirit or ether is open.",
            "Crucible on a pipeclay triangle, moved only with tongs, cooled in a desiccator before weighing."
          ],
          "keyTakeaway": "The flame, the vessel and the holder must all suit the material being heated, and the direction a tube points is part of the safety of everyone in the room.",
          "realWorldExample": "In the school laboratory at Mankessim the technician lights the six burners only after the paraffin and spirit bottles have been locked away, because one heated beaker of methylated spirit over a naked flame has already set a bench cloth alight in the past."
        },
        {
          "title": "Pouring, Measuring and the Two Errors That Survive Every Correction",
          "content": "Liquids are poured down a glass rod held against the lip of the vessel so the stream cannot run down the outside of the bottle and damage the label or the bench. When a solution must be transferred completely for a titration, the beaker and the rod are rinsed with distilled water into the flask, since a film of solution left on the glass is solute lost from the reaction. Reading a volume is a skill of its own: the eye is level with the bottom of the meniscus for water, and a cylinder standing on the bench is read at that level rather than lifted to the eye. Two errors survive carelessness in a school laboratory. Parallax is a systematic error caused by reading from above or below the meniscus, and the mark on the cylinder did not move while your eye did. Zero error on a balance is the reading left on the display when nothing is on the pan, and it must be subtracted, or the pan tared with the empty vessel before any mass is entered. A measuring cylinder with 1 cm3 divisions simply cannot support a mass or volume reported to a precision it does not possess, and an examiner knows this.",
          "bulletPoints": [
            "Pour down a glass rod; rinse beaker and rod into the flask for a quantitative transfer.",
            "Read the meniscus at eye level with the cylinder on the bench.",
            "Parallax from above makes the volume too large; from below it makes it too small.",
            "Zero error is subtracted; a balance is tared with the empty vessel first.",
            "Report only the precision the instrument gives: 25 cm3 from a cylinder, 22.00 cm3 from a burette."
          ],
          "keyTakeaway": "Precision is a property of the instrument, not of your ambition, so quote what the glassware can actually give and remove its zero error before you start.",
          "realWorldExample": "A block-mixing foreman at Kasoa weighing cement by hand scoop will insist on a zeroed platform scale, because an unzeroed reading of a few grams repeated over a hundred bags changes the strength of every block on the site."
        },
        {
          "title": "First Aid, Spills and Fire in the School Laboratory",
          "content": "The school laboratory has hot glass, strong acids, alkalis, flammable spirits and sometimes halogen fumes, and it may have no running water in every room, so the accident routine must be drilled rather than trusted to memory. A thermal burn from a flame, hot glass or a hot plate is cooled under clean running water or from a clean water container for at least ten minutes, rings are removed at once, and no oil, toothpaste or palm oil is applied, because they seal in heat and infect the wound; the area is then covered with a clean cloth and the casualty referred. Acid on the skin is flooded with water for at least ten minutes to dilute and carry it away, then washed with dilute sodium hydrogencarbonate solution, and acid in the eye is flushed at the eyewash with the head turned so the water runs away from the other eye, then sent to hospital. Alkali on the skin is washed then treated with boric acid solution, but alkali in the eye is more dangerous than acid because it digs deep into the tissue, so it is flushed and referred urgently. A spill on the bench is neutralised with sodium hydrogencarbonate for acids or with dilute ethanoic acid for alkalis, then covered with sand and swept up. A fire in a beaker is covered with a watch glass or sand; a fire in clothing is smothered with the blanket, and water is never thrown on a spirit or oil fire. Broken thermometer mercury is reported and collected, not swept, since the beads scatter and give off vapour.",
          "bulletPoints": [
            "Cool a burn in clean water for ten minutes or more; no oil, no toothpaste, then a clean covering.",
            "Acid on skin: flood with water, then dilute sodium hydrogencarbonate solution.",
            "Alkali in the eye is treated as the worst case: flush at the eyewash and refer at once.",
            "Neutralise a bench spill before wiping it up; sand bucket, blanket and extinguisher stay in place.",
            "Never water on a spirit or oil fire; smother with sand, blanket or a dry powder extinguisher."
          ],
          "keyTakeaway": "Water, time and the correct neutralising agent first, then the report; the one thing never done is to hide a small accident.",
          "realWorldExample": "At a chemistry practical in Cape Coast the class keeps a 20 litres keg of clean water and a plastic eyewash bottle by the door because the tap on the laboratory yard runs only at certain hours, and the technician rehearses the burn drill in the first week of term."
        },
        {
          "title": "Recording Observations and Processing Titration Readings",
          "content": "A practical is worth what its record is worth, and the record is made in ink at the moment of the observation, not from memory at the end of the lesson. Observations are what the senses report, so the correct line is effervescence observed and the gas turns limewater milky, while the statement the salt is a carbonate is an inference and belongs in a separate column. Results are set out as a table with a heading for each column, the quantity and the unit in the heading, and every value in the column to the same number of decimal places. For a titration the rough titre is taken first to about 1 cm3 short of the expected endpoint and then finished carefully; after that the titration is repeated until two titres are concordant, that is within 0.10 cm3 of each other, and only those two are averaged. The rough titre is rejected, never averaged in. A burette reading is recorded as 22.00 cm3 and not 22 cm3, because the instrument reads to 0.05 cm3, and the volume delivered is the final reading minus the initial reading, which is written down for every trial rather than worked out in the head. Two decimal places, units in the headings and one clearly shown sample calculation are what earn the presentation marks.",
          "bulletPoints": [
            "Write observations in ink as they happen; keep observations and inferences in separate columns.",
            "Titre values are recorded to two decimal places, for example 22.00 cm3 and 21.95 cm3.",
            "Concordant titres are within 0.10 cm3; their mean is used and the rough titre is rejected.",
            "Volume delivered = final reading minus initial reading, shown for every trial.",
            "One sample calculation of concentration is placed under the table in the notebook."
          ],
          "keyTakeaway": "Record the reading, not the reading you wish you had: concordance within 0.10 cm3, two decimal places, and the rough titre left out of the mean.",
          "realWorldExample": "A clinic laboratory scientist at Kumasi teaching a school class insists on duplicates that agree within a narrow band before a result is reported, exactly as WASSCE requires concordant titres, because a single unrepeatable reading is worthless in practice."
        }
      ],
      "commonMistakes": [
        "Averaging the rough titre with the good ones, for example treating 21.50 cm3, 22.00 cm3 and 22.05 cm3 as three valid readings and reporting 21.85 cm3; the rough titre is rejected and the mean of the two concordant readings, 22.03 cm3, is used.",
        "Reading the burette from above the meniscus, which makes the volume larger than it is, and then carrying that inflated volume straight through to a concentration that is too high; the eye must be level with the bottom of the curve.",
        "Weighing a boiling tube on a balance that reads 0.06 g with nothing on the pan and reporting the full reading as the mass, so the solid appears to be 0.06 g heavier than it is; the balance is zeroed or the offset subtracted.",
        "Pouring water into concentrated sulphuric acid to dilute it, which spurts hot acid out of the beaker; the acid is always poured slowly down a rod into the water.",
        "Holding a boiling tube with the fingers in the naked flame, or pointing its mouth at a classmate, so a flash of steam burns the hand or the face."
      ],
      "wassceExamTips": [
        "Paper 3 opens with apparatus questions in which you are shown or described an item and must name it and state one use; learn the pairs of use and limitation, for example a measuring cylinder is not used for accurate volumes.",
        "Method marks are given for procedure order: in a dilution question, water first then acid down a rod, and the label of the correct reagent bottle; a jumbled sequence earns little.",
        "Result tables carry presentation marks: units in the column headings, all titres to two decimal places, and initial and final readings both shown rather than only the difference.",
        "For titre processing the examiner expects the rough titre rejected, two concordant titres averaged, and the answer quoted to the same precision as the readings; a mean of three including the rough value is treated as a wrong method.",
        "In qualitative analysis, observations earn the marks, so write colour, state and solubility in excess, for example a white precipitate that dissolves in excess sodium hydroxide solution, and put the ion name in the inference column only."
      ],
      "summaryChecklist": [
        "Can I name twelve pieces of apparatus with the one job each does best and the limitation of each?",
        "Can I choose between a measuring cylinder, a pipette and a burette for a stated volume task and defend the choice?",
        "Can I heat a liquid in a boiling tube and set up a crucible on a pipeclay triangle with the correct safety points?",
        "Can I give the first-aid treatment for an acid burn, an alkali spill, a spirit fire and a hot glass burn?",
        "Can I process three burette readings to a correct mean titre with units and two decimal places?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-lab-practice-1",
        "title": "Carrying Out a Titration and Recording the Readings Correctly",
        "problem": "You must find the volume of 0.100 mol/dm3 hydrochloric acid needed to neutralise 25.0 cm3 of sodium hydroxide solution of unknown concentration, and record the work so that it carries the presentation and method marks. Name the apparatus, give the order of operations and process the readings 24.45 cm3, 22.00 cm3 and 22.05 cm3.",
        "stepByStepSolution": [
          "Step 1 (M1): Rinse the burette with a small portion of the hydrochloric acid that will fill it, discard the rinsings, then fill above the zero mark, run solution into a waste beaker to expel the air lock from the jet and set the meniscus at or below zero, reading the initial value at eye level to two decimal places.",
          "Step 2 (M1): Rinse the graduated pipette with the sodium hydroxide solution, then pipette exactly 25.0 cm3 into a clean conical flask using a pipette filler, and touch the tip of the pipette to the wall of the flask to deliver the last drop that the pipette is calibrated to leave.",
          "Step 3 (M1): Add about 1 cm3 of methyl orange indicator to the flask and place it on a white tile under the burette, recording the initial burette reading in the table before any acid is run in.",
          "Step 4 (M1): Run acid in with continuous swirling of the flask until near the endpoint, then rinse down the inside of the flask with distilled water from a wash bottle and add acid a drop at a time to the endpoint, which with methyl orange is the change from yellow to just orange; the flask is rinsed only with distilled water so no analyte is added or lost.",
          "Step 5 (A1): Record the readings 24.45 cm3, 22.00 cm3 and 22.05 cm3 as trials one, two and three, reject 24.45 cm3 as the rough titre, and average only the two concordant titres, which agree within 0.10 cm3, giving 22.03 cm3.",
          "Step 6 (A1): State the mean titre as 22.03 cm3 with the unit shown in the heading, and place the sample calculation underneath the table so that the method of obtaining the mean is visible to the examiner."
        ],
        "keyTakeaway": "Rinse with the solution the vessel will hold, swirl in a conical flask on a white tile, keep readings to two decimal places, reject the rough titre and average only concordant values."
      },
      {
        "id": "ex-che-lab-practice-2",
        "title": "Detecting and Removing a Balance Zero Error",
        "problem": "An electronic balance reads 0.06 g when the pan is empty and nothing has been tared. A student places a dry boiling tube on it, adds a solid, and the balance then reads 18.80 g for the tube with its contents. Find the correction the student should have made, and find the percentage by which the reported mass of the tube and solid exceeds the true mass.",
        "stepByStepSolution": [
          "Step 1 (M1): Identify the fault as a positive zero error of +0.06 g, which is a systematic error because it repeats in the same direction for every weighing taken on that balance.",
          "Step 2 (M1): Remove it either by taring the balance with the empty tube on the pan before adding the solid, or by subtracting 0.06 g from every reading taken in the experiment.",
          "Step 3 (A1): True mass of tube plus solid = 18.80 g - 0.06 g = 18.74 g.",
          "Step 4 (M1): The error in the reported value is 0.06 g, and percentage error is calculated as error divided by the true value, multiplied by 100.",
          "Step 5 (A1): Percentage error = (0.06 / 18.74) x 100 = 0.3202...%, which is 0.32% to two decimal places or 0.3% to one significant figure.",
          "Step 6 (M1): Report the mass as 18.74 g, and state that the balance was zeroed before the remaining weighings of the session so that later readings are not affected.",
          "Step 7 (A1): Final answer: the true mass is 18.74 g and the uncorrected reading overstates it by 0.32%, which would propagate into any percentage composition or formula-mass calculation built on that mass."
        ],
        "keyTakeaway": "A balance that is not zeroed does not fail loudly; it shifts every mass by the same amount, so check the zero reading before the first weighing and subtract any offset."
      }
    ],
    "quiz": {
      "id": "quiz-che-lab-practice",
      "topicId": "shs1-che-t2-laboratory-practice-apparatus-safe-handling",
      "title": "Laboratory Practice and Safe Handling Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-lab-practice-1",
          "quizId": "quiz-che-lab-practice",
          "questionText": "Which piece of apparatus gives the most accurate measurement of a volume of liquid in the school laboratory?",
          "optionA": "A 100 cm3 beaker with graduations on its wall",
          "optionB": "A 100 cm3 measuring cylinder",
          "optionC": "A burette graduated in 0.05 cm3 divisions",
          "optionD": "A 250 cm3 conical flask",
          "correctOption": "C",
          "subConcept": "Apparatus and accuracy",
          "explanation": "The burette is the most accurate of the four because it is graduated to 0.05 cm3 and read to two decimal places. A measuring cylinder reads only to about 0.5 cm3, while a beaker and a conical flask are not measuring instruments at all; their graduations are rough guides.",
          "remediationTip": "Make a three-column list of volume apparatus with the precision each one may honestly report, and learn it."
        },
        {
          "id": "q-che-lab-practice-2",
          "quizId": "quiz-che-lab-practice",
          "questionText": "A student must warm a beaker of ethanol on a school bench. Which method is correct?",
          "optionA": "Warm it in a water bath with no naked flame near the bench",
          "optionB": "Heat it directly over the blue Bunsen flame, swirling as it warms",
          "optionC": "Heat it strongly in a crucible on a pipeclay triangle",
          "optionD": "Place the open beaker on the hot tripod to use the residual heat",
          "correctOption": "A",
          "subConcept": "Heating technique and flammability",
          "explanation": "Ethanol vapour is ignited by a naked flame, so a water bath supplies gentle even heat without an ignition source, and the spirit bottle is kept closed and away. Direct flame heating of ethanol is the classic laboratory fire, a crucible would give a large hot surface of vapour, and a residual hot tripod cannot be controlled.",
          "remediationTip": "List four liquids heated only on a water bath and say what makes each one dangerous."
        },
        {
          "id": "q-che-lab-practice-3",
          "quizId": "quiz-che-lab-practice",
          "questionText": "Which action is correct when diluting concentrated sulphuric acid with water?",
          "optionA": "Add the acid to water slowly down a glass rod, with stirring",
          "optionB": "Add the water to the acid slowly down a glass rod, with stirring",
          "optionC": "Pour both together at the same time from two beakers",
          "optionD": "Measure equal volumes in a cylinder and shake them in a stoppered flask",
          "correctOption": "A",
          "subConcept": "Dilution safety",
          "explanation": "The heat of dilution of concentrated sulphuric acid is large, and water is less dense, so water added to acid flashes into steam on the surface and spurts acid out of the vessel. Acid is therefore run slowly down a rod into the water with stirring, and the beaker is left to cool. Shaking a stoppered flask of the mixture would build heat and pressure against the stopper.",
          "remediationTip": "Write the acid-into-water rule on a card and place it at the top of your notebook for the rest of the term."
        },
        {
          "id": "q-che-lab-practice-4",
          "quizId": "quiz-che-lab-practice",
          "questionText": "Concentrated sulphuric acid splashes on a student forearm. What is the correct first treatment?",
          "optionA": "Neutralise it first with solid sodium hydrogencarbonate, then wash the powder off",
          "optionB": "Cover the area with palm oil or petroleum jelly to seal it",
          "optionC": "Rub the area dry with a cloth to remove the acid",
          "optionD": "Wash the area with plenty of running water for at least ten minutes",
          "correctOption": "D",
          "subConcept": "First aid for acid burns",
          "explanation": "Water floods and carries the acid away and also removes the heat of dilution, so it comes first and for at least ten minutes; only then is dilute sodium hydrogencarbonate solution applied. Dry powder neutralises at the surface and generates heat while driving acid into the skin, oil seals heat and chemical against the burn, and rubbing spreads and pushes it in.",
          "remediationTip": "Rehearse the order for a chemical burn: water, time, then the weak neutralising solution, then report."
        },
        {
          "id": "q-che-lab-practice-5",
          "quizId": "quiz-che-lab-practice",
          "questionText": "A balance reads 0.06 g when empty. A crucible and its contents give a reading of 18.80 g without the balance being zeroed. What is the true mass?",
          "optionA": "18.86 g",
          "optionB": "18.74 g",
          "optionC": "18.80 g",
          "optionD": "0.06 g",
          "correctOption": "B",
          "subConcept": "Zero error",
          "explanation": "A positive zero error is subtracted from every reading, so the true mass is 18.80 g - 0.06 g = 18.74 g. Reporting 18.80 g keeps the error, and 18.86 g comes from adding the offset when it should be removed.",
          "remediationTip": "Practise three weighings on an deliberately unzeroed balance, correcting each by subtraction before you write it down."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t2-gas-volumes-avogadro-molar-volume",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "Gas Volumes, Avogadro's Law and Molar Volume",
    "description": "Combining volumes of gases, the molar volume 22.4 dm3 at s.t.p. and 24 dm3 at r.t.p., volume-mole conversions, collecting gases over water, diffusion of gases and relative rates, and volume calculations in the laboratory preparation of gases.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Gay-Lussac's law of combining volumes: gases react in simple whole-number volume ratios, and the product volume also stands in a simple ratio, all measured at the same temperature and pressure.\n• Avogadro's law: equal volumes of all gases at the same temperature and pressure contain the same number of molecules.\n• Because of Avogadro, the mole ratio in a gas equation is also the volume ratio: H2 + Cl2 -> 2HCl reads as 1 volume + 1 volume giving 2 volumes.\n• 2H2 + O2 -> 2H2O means 2 volumes of hydrogen combine with 1 volume of oxygen to give 2 volumes of steam.\n• Mole and volume convert through the molar volume: n = V / 22.4 dm3 at s.t.p. (0 degrees Celsius, 1 atmosphere) and n = V / 24 dm3 at room temperature and pressure.\n• One mole of any gas occupies 22.4 dm3 at s.t.p. and 24 dm3 at r.t.p.; one mole is 6.02 x 10^23 molecules.\n• Worked route for gas preparation: mass of solid to moles, mole ratio from the balanced equation, moles of gas to volume using 22.4 or 24 dm3.\n• Gases slightly soluble in water, such as oxygen and hydrogen, are collected by downward displacement of water in a trough with an inverted gas jar or test tube.\n• A gas collected over water is damp because some water vapour mixes with it; very soluble gases like ammonia must not be collected over water.\n• Diffusion is the spreading of particles from high to low concentration; lighter gases diffuse faster, so ammonia (Mr 17) travels quicker than hydrogen chloride (Mr 36.5).\n• In the glass-tube demonstration the white ring of NH4Cl forms nearer the hydrochloric acid end, because the ammonia arrives first and meets the acid partway.\n• Safety: keep flames away from hydrogen and other collected gases, wax balloons before filling them, and do diffusion demos of pungent gases in a fume hood or well-ventilated space.",
    "detailedNotes": {
      "overview": "Gases are the states of matter you can measure most conveniently, because a volume is far easier to read than a mass of something invisible. This topic begins with the nineteenth-century discovery that combining gas volumes always follow simple whole-number ratios, then shows how Avogadro explained the fact: equal volumes hold equal numbers of molecules, so a volume ratio is secretly a mole ratio. With that bridge built, the molar volume becomes your main conversion tool: 22.4 dm3 for one mole at standard temperature and pressure, 24 dm3 at room conditions. You then apply the chain of conversion to gas-preparation questions, learn why oxygen is collected over water and ammonia is not, and finish with diffusion, watching how quickly ammonia and hydrogen chloride travel through the air. Every question type here turns on one balanced equation and one division by 22.4 or 24.",
      "introduction": "Draw the volume-mole bridge once and reuse it: for every gas equation, write the mole numbers under the formulae and read them also as volumes. Practise three short calculations: converting 4.48 dm3 at s.t.p. to moles, converting 0.25 mol of gas to volume at r.t.p., and finding the gas volume from a mass of carbonate. Then set up one gas-collection over water with a trough, inverted test tube and delivery tube, and record why the first bubbles are pushed aside as air. If the school has a long glass tube, demonstrate the ammonia-hydrogen chloride diffusion ring and measure where it forms.",
      "realWorldContext": "Gas volumes matter across Ghanaian trades. The welder at a Suame Magazine workshop reads gas cylinders by volume and knows acetylene and oxygen burn in fixed ratios; a badly judged mix wastes gas or leaves soot. Biogas digesters built for farms in the savanna regions produce methane whose usable volume depends on how much dung and water were charged in, a pure volume-to-mole question in miniature. In the Ghana Education Service laboratory, oxygen prepared from hydrogen peroxide and manganese(IV) oxide is collected over water in a trough, and carbon(IV) oxide for the bubbler used to test for it is collected by upward delivery because it dissolves too readily in water to be gathered over it.",
      "objectives": [
        "State Avogadro's law and the law of combining volumes, and read gas equations as volume ratios",
        "Convert between moles and gas volumes using 22.4 dm3 at s.t.p. and 24 dm3 at r.t.p.",
        "Carry out volume calculations for laboratory preparations of gases from a mass of reactant",
        "Choose a correct collection method for a gas, including collection over water, and explain the diffusion of ammonia compared with hydrogen chloride"
      ],
      "sections": [
        {
          "title": "Combining Volumes and Avogadro's Law",
          "content": "Chemists found early that when gases react, the volumes measured at the same temperature and pressure combine in small whole numbers: one volume of hydrogen with one volume of chlorine yields two volumes of hydrogen chloride, and two volumes of hydrogen with one volume of oxygen give two volumes of steam. Why should volumes behave so neatly? Avogadro answered in 1811 with the law that equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules. If a litre of any gas holds the same count of molecules as a litre of any other, then the molecule ratio written in a balanced equation is also a volume ratio. This single idea converts 2H2 + O2 -> 2H2O into the statement that two cans of hydrogen need exactly one can of oxygen, whatever the can size, and it lets you answer gas questions without weighing anything at all.",
          "bulletPoints": [
            "Law of combining volumes: reacting gas volumes follow simple whole-number ratios at fixed temperature and pressure.",
            "Avogadro's law: equal volumes of gases at the same temperature and pressure contain the same number of molecules.",
            "H2 + Cl2 -> 2HCl read as volumes: 1 + 1 gives 2, matching the mole figures.",
            "2H2 + O2 -> 2H2O: 200 cm3 of hydrogen needs 100 cm3 of oxygen and gives 200 cm3 of steam.",
            "Volume ratios only hold when all volumes are measured at the same temperature and pressure."
          ],
          "keyTakeaway": "Avogadro turns the coefficients of a gas equation into volumes: the mole ratio and the volume ratio are the same numbers.",
          "realWorldExample": "A oxy-acetylene cutter at Suame Magazine mixes fuel gas and oxygen in a fixed ratio at the torch; the steady cut depends on that volume ratio, the working-day face of combining volumes."
        },
        {
          "title": "Molar Volume and Volume-Mole Conversions",
          "content": "One mole of any gas occupies the same volume under the same conditions because the molecules are so far apart that their own sizes hardly matter. Standard temperature and pressure means 0 degrees Celsius and one atmosphere, and there one mole of any gas occupies 22.4 dm3; under ordinary room temperature and pressure in Ghana, roughly 25 degrees Celsius, the figure is about 24 dm3. These two numbers are the conversion keys: moles equal volume divided by 22.4 at s.t.p., and volume equals moles times 24 at r.t.p. For instance, 4.48 dm3 of any gas at s.t.p. is 4.48 / 22.4 = 0.2 mol, which at r.t.p. would occupy 0.2 x 24 = 4.8 dm3. Multiply moles by 6.02 x 10^23 when a question asks for the number of molecules. Note that the molar volume is a gas property only; solids and liquids have no such shared figure.",
          "bulletPoints": [
            "s.t.p. means 0 degrees Celsius and 1 atmosphere; molar volume at s.t.p. is 22.4 dm3.",
            "At r.t.p. the molar volume is about 24 dm3; always state which condition your answer uses.",
            "n = V / 22.4 (s.t.p.) or n = V / 24 (r.t.p.); reverse with V = n x 22.4 or n x 24.",
            "0.2 mol of gas holds 0.2 x 6.02 x 10^23 = 1.204 x 10^23 molecules.",
            "4.48 dm3 at s.t.p. is 4.48 / 22.4 = 0.2 mol, a standard one-mark conversion."
          ],
          "keyTakeaway": "Carry only two gas numbers in your head, 22.4 and 24; every volume-mole question is one division or one multiplication by them.",
          "realWorldExample": "A school biogas demonstration charges a digester with measured dung and water and collects methane in an inverted drum; estimating the gas yield per mole of digested matter rests on the same molar-volume idea used in the examination."
        },
        {
          "title": "Collecting Gases and Watching Them Diffuse",
          "content": "How a gas is collected follows from its behaviour with water and air. Oxygen, hydrogen and other gases that are only slightly soluble are gathered by downward displacement of water: the gas bubbles up a delivery tube into an inverted, water-filled test tube in a trough and pushes the water out, giving a fairly pure sample. The first bubbles are escaped air, so collection begins only once the flow is steady. Gases that dissolve readily, such as ammonia and hydrogen chloride, cannot be collected over water and are gathered by upward or downward delivery according to their density. Diffusion shows molecules in constant motion: in a long glass tube, a cotton plug with concentrated ammonia at one end and concentrated hydrochloric acid at the other produces a white ring of ammonium chloride, NH3 + HCl -> NH4Cl, located nearer the acid end because the lighter ammonia molecules (Mr 17) travel faster than hydrogen chloride molecules (Mr 36.5).",
          "bulletPoints": [
            "Collect slightly soluble gases (O2, H2) over water; ignore the first bubbles since they are air.",
            "Very soluble gases (NH3, HCl) must not go over water; use delivery into an upright or inverted jar by density.",
            "Gas collected over water is damp with water vapour; a dry sample needs drying before measurement.",
            "Diffusion: ammonia (Mr 17) outruns hydrogen chloride (Mr 36.5), so the NH4Cl ring sits nearer the acid end.",
            "Safety: no flames near hydrogen, wax balloons before inflating gas samples, and use a fume hood for pungent gases like chlorine and ammonia.",
            "A gas syringe gives a directly readable volume for quantitative preparation work in the school laboratory."
          ],
          "keyTakeaway": "Solubility picks the collection method, density picks the delivery direction, and molecular speed decides where the diffusion ring appears.",
          "realWorldExample": "Charcoal smoke filling an unventilated room spreads by diffusion the same way the ammonia spreads in the glass tube, which is why a kerosene or charcoal stove must never burn in a closed sleeping room even though the danger is invisible."
        }
      ],
      "commonMistakes": [
        "Using 22.4 dm3 when the question says room temperature and pressure, or 24 dm3 at s.t.p.; always check the stated condition before dividing.",
        "Reporting gas volumes without units, or confusing cm3 and dm3 so that 1120 cm3 is written as 1120 dm3.",
        "Trying to collect ammonia over water; it dissolves at once and the jar fills with solution instead of gas.",
        "Claiming the diffusion ring forms in the middle of the tube; the lighter ammonia travels faster, so the ring sits nearer the slower hydrogen chloride end."
      ],
      "wassceExamTips": [
        "In Paper 1, gas-volume conversions are quick wins: write n = V / 22.4 or V = n x 24 as a one-line substitution and the arithmetic answers itself.",
        "Paper 2 preparation questions want the named apparatus: trough, inverted test tube or gas jar, delivery tube, thistle funnel and conical flask; drawing or naming them earns method marks.",
        "When a question gives a mass of carbonate and asks for the volume of carbon(IV) oxide, show the full chain: moles of solid, mole ratio, moles of gas, volume; each arrow can carry a mark.",
        "In Paper 3 viva questions on diffusion, state both observation and reason, the ring nearer the acid end because ammonia molecules are lighter and move faster."
      ],
      "summaryChecklist": [
        "Can I state Avogadro's law and read a gas equation as a volume ratio?",
        "Can I convert moles to volumes with 22.4 dm3 at s.t.p. and 24 dm3 at r.t.p.?",
        "Can I compute the volume of gas from a given mass of reactant through a balanced equation?",
        "Can I choose collection over water versus delivery based on a gas's solubility and density?",
        "Can I explain the position of the ammonium chloride ring using relative molecular mass and diffusion rate?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-gas-volumes-avogadro-molar-volume-1",
        "title": "Volume of Carbon(IV) Oxide from Calcium Carbonate",
        "problem": "5.0 g of pieces of chalk (calcium carbonate) are added to excess dilute hydrochloric acid. Calculate the volume of carbon(IV) oxide produced at s.t.p. and at r.t.p. (CaCO3 + 2HCl -> CaCl2 + H2O + CO2; Ar: Ca = 40, C = 12, O = 16.)",
        "stepByStepSolution": [
          "Step 1 (M1): Compute Mr of calcium carbonate: 40 + 12 + 3 x 16 = 100.",
          "Step 2 (M1): Convert the given mass to moles: n = m / Mr = 5.0 / 100 = 0.05 mol of CaCO3.",
          "Step 3 (M1): Read the mole ratio from the balanced equation: 1 mol of CaCO3 gives 1 mol of CO2, so 0.05 mol of gas forms.",
          "Step 4 (M1): Apply the molar volume at s.t.p.: V = n x 22.4 = 0.05 x 22.4.",
          "Step 5 (A1): V = 1.12 dm3 of carbon(IV) oxide at s.t.p.",
          "Step 6 (M1): Repeat for room conditions using 24 dm3: V = 0.05 x 24.",
          "Step 7 (A1): V = 1.2 dm3 at r.t.p.; label each answer with its condition and unit, since the two values differ only through the molar volume used."
        ],
        "keyTakeaway": "Mass to moles, ratio one-to-one, moles times 22.4 or 24: the condition named in the question decides which molar volume you multiply by."
      },
      {
        "id": "ex-che-gas-volumes-avogadro-molar-volume-2",
        "title": "Moles, Mass and Molecules in a Given Volume of Nitrogen",
        "problem": "A cylinder holds 2.8 dm3 of nitrogen gas at s.t.p. How many moles of nitrogen does it contain, what mass of nitrogen is that, and how many molecules are present? (Ar: N = 14; Avogadro constant = 6.02 x 10^23 per mol.)",
        "stepByStepSolution": [
          "Step 1 (M1): Use the molar volume relation n = V / 22.4 at s.t.p.: n = 2.8 / 22.4.",
          "Step 2 (A1): n = 0.125 mol of nitrogen molecules.",
          "Step 3 (M1): Nitrogen gas is diatomic, so Mr of N2 = 2 x 14 = 28; compute mass with m = n x Mr = 0.125 x 28.",
          "Step 4 (A1): Mass = 3.5 g of nitrogen.",
          "Step 5 (M1): Convert moles to particles by multiplying by the Avogadro constant: molecules = 0.125 x 6.02 x 10^23.",
          "Step 6 (A1): Molecules = 7.525 x 10^22, a count consistent with having less than one mole in the cylinder."
        ],
        "keyTakeaway": "One division gives moles, one multiplication gives mass, one multiplication by 6.02 x 10^23 gives molecules; remember nitrogen gas is N2, not N."
      }
    ],
    "quiz": {
      "id": "quiz-che-gas-volumes-avogadro-molar-volume",
      "topicId": "shs1-che-t2-gas-volumes-avogadro-molar-volume",
      "title": "Gas Volumes, Avogadro's Law and Molar Volume Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-gas-volumes-avogadro-molar-volume-1",
          "quizId": "quiz-che-gas-volumes-avogadro-molar-volume",
          "questionText": "Which statement is Avogadro's law?",
          "optionA": "Equal volumes of all gases at the same temperature and pressure contain the same number of molecules",
          "optionB": "The volume of a gas doubles for every ten-degree rise in temperature",
          "optionC": "Pressure multiplied by volume is constant at fixed temperature",
          "optionD": "Gases combine in simple whole-number mass ratios",
          "correctOption": "A",
          "subConcept": "Statement of Avogadro's law",
          "explanation": "Avogadro's law fixes the molecule count per volume at given temperature and pressure, which is why equation coefficients double as volume ratios. The temperature statement is a distortion, pressure-volume constancy is Boyle's law, and mass ratios belong to reacting-mass laws.",
          "remediationTip": "Memorise the law with one phrase, same volume means same number of molecules, always at fixed temperature and pressure."
        },
        {
          "id": "q-che-gas-volumes-avogadro-molar-volume-2",
          "quizId": "quiz-che-gas-volumes-avogadro-molar-volume",
          "questionText": "What volume is occupied by one mole of any gas at room temperature and pressure?",
          "optionA": "22.4 cm3",
          "optionB": "24 cm3",
          "optionC": "24 dm3",
          "optionD": "22.4 dm3",
          "correctOption": "C",
          "subConcept": "Molar volume at r.t.p.",
          "explanation": "At r.t.p. one mole of gas occupies about 24 dm3. The 22.4 dm3 figure applies only at s.t.p., 0 degrees Celsius and one atmosphere, and cm3 values are a thousand times too small.",
          "remediationTip": "Pair the numbers with conditions in your notes, s.t.p. with 22.4 dm3 and r.t.p. with 24 dm3, and never mix the units dm3 and cm3."
        },
        {
          "id": "q-che-gas-volumes-avogadro-molar-volume-3",
          "quizId": "quiz-che-gas-volumes-avogadro-molar-volume",
          "questionText": "How many moles of gas are in 4.48 dm3 measured at s.t.p.?",
          "optionA": "0.02 mol",
          "optionB": "0.2 mol",
          "optionC": "2 mol",
          "optionD": "22.4 mol",
          "correctOption": "B",
          "subConcept": "Volume to mole conversion",
          "explanation": "n = V / 22.4 = 4.48 / 22.4 = 0.2 mol. Since 22.4 dm3 is a full mole, 4.48 dm3 must be well under a quarter mole, which rules out 2 mol at once.",
          "remediationTip": "Estimate: a tenth of 22.4 is 2.24, so 4.48 is a fifth, that is 0.2 mol; estimate then compute."
        },
        {
          "id": "q-che-gas-volumes-avogadro-molar-volume-4",
          "quizId": "quiz-che-gas-volumes-avogadro-molar-volume",
          "questionText": "In the glass-tube experiment with ammonia at one end and concentrated hydrochloric acid at the other, where does the white ring form and why?",
          "optionA": "Exactly at the middle, because the two gases weigh the same",
          "optionB": "At the ammonia end, because the acid does not move",
          "optionC": "Evenly along the whole tube, because diffusion is uniform",
          "optionD": "Nearer the acid end, because lighter ammonia molecules diffuse faster than heavier hydrogen chloride molecules",
          "correctOption": "D",
          "subConcept": "Diffusion and molecular speed",
          "explanation": "Ammonia has Mr 17 while hydrogen chloride has Mr 36.5, so ammonia travels roughly the faster stretch and the two meet closer to the acid end, depositing solid NH4Cl where they react.",
          "remediationTip": "Remember the slogan lighter means faster, then reason that the meeting point must sit nearer the slower gas."
        },
        {
          "id": "q-che-gas-volumes-avogadro-molar-volume-5",
          "quizId": "quiz-che-gas-volumes-avogadro-molar-volume",
          "questionText": "Oxygen prepared in the laboratory is collected over water because oxygen is",
          "optionA": "only slightly soluble in water",
          "optionB": "denser than water and reacts with it slowly",
          "optionC": "non-polar and therefore repelled by water",
          "optionD": "absolutely insoluble in every liquid",
          "correctOption": "A",
          "subConcept": "Choice of collection method",
          "explanation": "Collection over water works for gases that barely dissolve, and oxygen qualifies, so it pushes the water out of the inverted jar without being lost to solution. No gas is absolutely insoluble, and oxygen does not react with water.",
          "remediationTip": "Link method to property with one question: does the gas dissolve much in water; if no, water displacement is safe to use."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t2-chemical-formulae-valency-writing-compounds",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Formulae, Valency and Naming Compounds",
    "description": "Valency of common elements and radicals, the criss-cross method for ionic formulae, names of ionic compounds and formulae from names, naming of acids, bases and salts, hydrates, the common ions table, and why every formula must be correct before any calculation or equation balancing.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Valency is the combining power of an element or radical, equal to the number of electrons its atom loses, gains or shares when bonding.\n• Common element valencies: hydrogen, sodium, potassium 1; magnesium, calcium, copper, zinc, iron(II) 2; aluminium 3; iron(III) 3; oxygen and sulphur 2; chlorine and bromine 1; nitrogen 3.\n• Radicals act as single charged units: hydroxide OH-, nitrate NO3-, ammonium NH4+ each carry charge 1; carbonate CO3 2- and sulphate SO4 2- carry charge 2.\n• An ionic compound is electrically neutral: the total positive charge must exactly balance the total negative charge.\n• Criss-cross method: write the ion symbols with charges, swap the charge numbers across as subscripts, and drop the charges, so Mg2+ and O2- give MgO after reducing 2:2 to 1:1.\n• Aluminium (Al3+) with oxygen (O2-) gives Al2O3; one aluminium ion supplies three charges, so two of them balance three oxide charges.\n• When a polyatomic radical needs a subscript, put it in brackets first: iron(III) with sulphate gives Fe2(SO4)3, and calcium hydroxide is Ca(OH)2, never CaO2H2.\n• Naming ionic compounds reads metal then non-metal ending in -ide: NaCl is sodium chloride; variable metals show their charge, iron(II) chloride versus iron(III) chloride.\n• Salts are named from their acid: chlorides from hydrochloric acid, sulphates from sulphuric acid, nitrates from nitric acid, carbonates from carbonic acid.\n• A dot in a hydrate formula marks water of crystallisation: CuSO4.5H2O is copper(II) sulphate-5-water, Na2CO3.10H2O is the washing-soda hydrate.\n• Formulae must be correct before balancing or calculating: a wrong formula gives a wrong Mr, a wrong equation and a wrong mass or volume answer.\n• The common ions table, learned as six columns of plus ions and minus ions with charges, is the fastest route to every formula in this topic.",
    "detailedNotes": {
      "overview": "Formulae are the spelling of chemistry, and this topic makes the spelling systematic. You will consolidate the valencies of the common elements and of radicals such as hydroxide, carbonate, nitrate, sulphate and ammonium, then use the criss-cross method to combine ions into neutral compounds. You will learn the naming conventions that distinguish iron(II) from iron(III), and how salts take their names from the acid they come from, plus the dot notation of hydrates. The last section hammers home the reason all of this matters: one wrong formula silently wrecks a Mr, an equation balance, and every calculation built on them. Master the small table of ions and their charges and no formula question in WASSCE can surprise you.",
      "introduction": "Make a two-column ion table on cardboard and carry it all term: left column positive ions with charges, right column negative ions with charges, radicals written whole, for instance NO3- and SO4 2-. For practice, build ten formulae by criss-cross, saying each charge swap aloud, then reverse the exercise by naming twenty compounds from formulae. Finally take one wrong-formula scenario, writing AlO for aluminium oxide, and watch the balanced equation 4Al + 3O2 -> 2Al2O3 collapse into nonsense; the demonstration is the lesson.",
      "realWorldContext": "Correct formula spelling has real consequences in Ghana. Water-treatment works that dose coagulant use aluminium sulphate, Al2(SO4)3; the plant operator who writes AlSO4 cannot compute the dosing strength, and the whole clarification calculation fails. Fertiliser blending at agro-input shops mixes ammonium nitrate NH4NO3 with potassium salts, and each label name corresponds to one exact formula that agronomists trust. On building sites, the difference between calcium oxide CaO, calcium hydroxide Ca(OH)2 and calcium carbonate CaCO3 is the difference between quicklime, slaked lime and chalk; masons and agricultural officers must name and write them correctly to use them safely.",
      "objectives": [
        "Recall the valencies and charges of common elements and radicals including hydroxide, carbonate, nitrate, sulphate and ammonium",
        "Apply the criss-cross method to write correct formulae of ionic compounds, using brackets for polyatomic radicals",
        "Name ionic compounds and salts from their formulae and write formulae from their names, including hydrates",
        "Explain why a correct formula is required before balancing an equation or performing any mole calculation"
      ],
      "sections": [
        {
          "title": "Valency of Elements and Radicals",
          "content": "Valency is an element's combining power, the number of electrons an atom loses, gains or shares to reach a stable outer shell, and it follows directly from the electronic configuration you already know. Sodium (2.8.1) is univalent, magnesium (2.8.2) and calcium are bivalent, aluminium (2.8.3) is trivalent; oxygen (2.6) and sulphur are bivalent non-metals, while chlorine (2.8.7) and hydrogen are univalent. Radicals extend the idea: a group of atoms that carries a charge and reacts as one unit. Hydroxide OH-, nitrate NO3- and ammonium NH4+ each carry a single charge, carbonate CO3 2- and sulphate SO4 2- carry two. Because ionic compounds are neutral, the total positive charge must cancel the total negative charge exactly, and valency is simply the charge number in disguise. A dependable student memorises the ion table as thoroughly as the multiplication tables, because every formula in the subject is assembled from it.",
          "bulletPoints": [
            "Valency is the number of electrons lost, gained or shared; it is read from the valence shell.",
            "Metals give positive ions: Na+ 1, Mg2+ and Ca2+ 2, Al3+ 3; iron shows both 2 and 3.",
            "Non-metals give negative ions: Cl- 1, O2- and S2- 2, N3- 3.",
            "Radicals keep their charge as a unit: OH-, NO3-, NH4+, CO3 2-, SO4 2-.",
            "Neutrality rule: total positive charge equals total negative charge in every correct formula."
          ],
          "keyTakeaway": "Learn the ion table with charges, and formula writing becomes arithmetic, not guesswork.",
          "realWorldExample": "The chalk line used to mark football pitches in Accra is calcium carbonate, CaCO3: calcium Ca2+ and carbonate CO3 2- match charges one-for-one, a bivalent over bivalent pairing the ion table predicts instantly."
        },
        {
          "title": "The Criss-Cross Method and Bracket Discipline",
          "content": "The criss-cross method converts two ion charges into one formula in three moves. Write the cation and anion side by side with their charges, for instance Al3+ and O2-. Swap the charge numbers diagonally into subscripts on the opposite ion: aluminium gets 2 and oxygen gets 3, giving Al2O3. Then drop all charges and, if both subscripts share a common factor, reduce them to the smallest ratio: Mg2+ with O2- criss-crosses to Mg2O2, which must be written MgO. Brackets earn their keep whenever a subscript must apply to a whole radical: iron(III) with sulphate gives Fe2(SO4)3, meaning two iron ions to three sulphate units, and calcium hydroxide is Ca(OH)2, two hydroxides with one calcium each and two oxygens and two hydrogens in total. Skipping the bracket and writing CaOH2 misrepresents the structure and is marked wrong, because the formula of a compound is a statement about how the ions are grouped.",
          "bulletPoints": [
            "Write ions with charges, swap the charge figures across as subscripts, then delete the charges.",
            "Reduce simple ratios: Mg2O2 is wrong on the page, the formula is MgO.",
            "Al3+ with O2- gives Al2O3; the subscripts are cross-multiplied charges, not random numbers.",
            "Bracket a radical before adding any subscript: Fe2(SO4)3, Ca(OH)2, (NH4)2SO4.",
            "Expand brackets to check counts: Fe2(SO4)3 has 2 iron, 3 sulphur and 12 oxygen atoms."
          ],
          "keyTakeaway": "Criss the charges, cross them down, reduce if needed, and bracket every grouped radical.",
          "realWorldExample": "The coagulant dosed at water-treatment works is aluminium sulphate, made by criss-crossing Al3+ against SO4 2- to give Al2(SO4)3; the bracket around SO4 is what keeps the dosing calculation honest."
        },
        {
          "title": "Naming, Hydrates, and Why Formulae Must Be Right First",
          "content": "Naming follows one pattern. An ionic compound reads the metal, then the non-metal with the ending -ide: NaCl is sodium chloride and Mg3N2 is magnesium nitride. When the metal has two possible charges, Roman numerals settle the question: FeCl2 is iron(II) chloride while FeCl3 is iron(III) chloride, and Fe2(SO4)3 is iron(III) sulphate. Salts borrow their names from the acid that forms them: chlorides from hydrochloric acid, sulphates from sulphuric acid, nitrates from nitric acid and carbonates from carbonic acid. A dot with a number flags water of crystallisation: CuSO4.5H2O is named copper(II) sulphate-5-water and Na2CO3.10H2O is the washing-soda decahydrate. Now the warning. Every Mr, every balanced equation and every mole ratio stands on the formula. If a student writes AlO instead of Al2O3, the equation for burning aluminium cannot balance correctly, the Mr is 27 + 16 rather than 102, and every answering mass is false. Formula literacy is the gate through which all calculation passes.",
          "bulletPoints": [
            "Read metal then non-metal with -ide: NaCl sodium chloride, MgO magnesium oxide, Mg3N2 magnesium nitride.",
            "Roman numerals show the metal charge for variable metals: iron(II) and iron(III) compounds differ.",
            "Salt names track the acid: chloride from hydrochloric, sulphate from sulphuric, nitrate from nitric acid.",
            "The dot in CuSO4.5H2O or Na2CO3.10H2O records water of crystallisation in the name and the Mr.",
            "A wrong formula corrupts Mr, equation balancing and stoichiometry; check neutrality and brackets before calculating."
          ],
          "keyTakeaway": "Name from ions, hydrate from the dot, and always verify the formula before touching a calculation.",
          "realWorldExample": "A pharmacy assistant reading a label of hydrated copper(II) sulphate, CuSO4.5H2O, must include the water in the formula mass; the anhydrous and hydrated forms weigh differently per mole, exactly as the wash-bag instruction sheets at a laundromat in Tema warn about concentration."
        }
      ],
      "commonMistakes": [
        "Forgetting brackets on multi-atom radicals with subscripts, writing CaOH2 or FeSO43 instead of Ca(OH)2 and Fe2(SO4)3.",
        "Leaving criss-cross ratios unreduced, so magnesium oxide appears as Mg2O2 rather than the simplest whole-number formula MgO.",
        "Confusing the two iron series, naming FeCl2 as iron(III) chloride; the charge must be read from the chloride count backwards.",
        "Treating the dot in a hydrate as a multiplication sign in calculations, or forgetting the water mass entirely in the Mr."
      ],
      "wassceExamTips": [
        "Paper 1 formula questions are solved in two lines: write the ions with charges, then criss-cross; showing the ions is what earns the method mark if you slip.",
        "In Paper 2, when asked for the name of Fe2(SO4)3, give iron(III) sulphate with the Roman numeral; examiners look specifically for the charge indicator on variable metals.",
        "For hydrate parts, expand CuSO4.5H2O into an atom count including the five waters before computing Mr; that expansion is a standard method mark.",
        "In Paper 3 equation-balancing stations, check each formula against the ion table before balancing: an impossible formula is the most common cause of an unbalanceable equation."
      ],
      "summaryChecklist": [
        "Can I list the charges of the common ions and radicals without hesitation?",
        "Can I criss-cross two ions into a reduced, bracketed neutral formula?",
        "Can I name ionic compounds and salts, marking metal charge with Roman numerals?",
        "Can I write and interpret hydrate formulae with the dot notation for water of crystallisation?",
        "Can I show how one wrong formula derails an equation balance and an Mr calculation?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-chemical-formulae-valency-writing-compounds-1",
        "title": "Criss-Crossing Two Tricky Ions",
        "problem": "Write the correct formulae for (a) aluminium oxide, formed from Al3+ and O2-, and (b) iron(III) sulphate, formed from Fe3+ and SO4 2-.",
        "stepByStepSolution": [
          "Step 1 (M1): List the ions with charges: (a) Al3+ and O2-; (b) Fe3+ and SO4 2-.",
          "Step 2 (M1): (a) Criss-cross the charge numbers as subscripts: aluminium takes 2, oxygen takes 3, giving Al2O3.",
          "Step 3 (M1): (a) Check charge balance: 2 x (+3) = +6 and 3 x (-2) = -6, and +6 plus -6 is zero, so the compound is neutral.",
          "Step 4 (A1): The formula of aluminium oxide is Al2O3.",
          "Step 5 (M1): (b) Bracket the sulphate radical before adding any subscript, then criss-cross: Fe2(SO4)3.",
          "Step 6 (M1): (b) Check: 2 x (+3) = +6 balances 3 x (-2) = -6; expanding the brackets counts 2 iron, 3 sulphur and 12 oxygen atoms.",
          "Step 7 (A1): The formula of iron(III) sulphate is Fe2(SO4)3, with the brackets showing three whole sulphate groups."
        ],
        "keyTakeaway": "Criss the charges into subscripts, bracket polyatomic radicals before subscripting, and always finish with a zero net charge."
      },
      {
        "id": "ex-che-chemical-formulae-valency-writing-compounds-2",
        "title": "Correct Formulae Make the Equation Balancable",
        "problem": "Aluminium burns in oxygen to form aluminium oxide. First write the correct formulae of the three substances, then balance the equation and verify the atom counts.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the formulae from the ion table: aluminium is Al, oxygen gas is the diatomic O2, and aluminium oxide, from Al3+ and O2-, is Al2O3.",
          "Step 2 (M1): Set the skeleton equation: Al + O2 -> Al2O3.",
          "Step 3 (M1): Balance oxygen first: three O2 on the left supply 6 oxygen atoms, matching the 6 in 2Al2O3 on the right.",
          "Step 4 (M1): Now balance aluminium: the right side holds 2 x 2 = 4 aluminium atoms, so place 4 before Al on the left.",
          "Step 5 (A1): The balanced equation is 4Al + 3O2 -> 2Al2O3.",
          "Step 6 (A1): Verify atom counts: left 4 Al and 6 O, right 4 Al and 6 O; both elements balance, which was only possible because the formula Al2O3 was correct from the start. Had AlO been written, the same balancing would have produced impossible fractions and any mass calculation from it would have been wrong."
        ],
        "keyTakeaway": "Formula first, balance second: a neutral, verified formula is what makes the coefficients come out as whole numbers."
      }
    ],
    "quiz": {
      "id": "quiz-che-chemical-formulae-valency-writing-compounds",
      "topicId": "shs1-che-t2-chemical-formulae-valency-writing-compounds",
      "title": "Formulae, Valency and Naming Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-chemical-formulae-valency-writing-compounds-1",
          "quizId": "quiz-che-chemical-formulae-valency-writing-compounds",
          "questionText": "What is the charge on the sulphate radical in ionic compounds?",
          "optionA": "1-",
          "optionB": "2+",
          "optionC": "2-",
          "optionD": "3-",
          "correctOption": "C",
          "subConcept": "Charges of common radicals",
          "explanation": "Sulphate is SO4 2-, carrying two negative charges, which is why it pairs with one calcium (Ca2+) as CaSO4 but needs two iron(III) ions against three sulphates in Fe2(SO4)3. Carbonate is also 2-, while hydroxide and nitrate are 1-.",
          "remediationTip": "Group the minus radicals by charge in your table: one unit for hydroxide and nitrate, two units for carbonate and sulphate."
        },
        {
          "id": "q-che-chemical-formulae-valency-writing-compounds-2",
          "quizId": "quiz-che-chemical-formulae-valency-writing-compounds",
          "questionText": "Which is the correct formula for calcium hydroxide? (Ca2+, OH-)",
          "optionA": "CaOH2",
          "optionB": "Ca(OH)2",
          "optionC": "Ca2OH",
          "optionD": "CaO2H2",
          "correctOption": "B",
          "subConcept": "Brackets with polyatomic radicals",
          "explanation": "One Ca2+ needs two hydroxide ions, and each hydroxide is the unit OH-, so the subscript goes on a bracket: Ca(OH)2. Writing CaOH2 or CaO2H2 destroys the identity of the hydroxide groups even though the atom totals look similar.",
          "remediationTip": "Rule: whenever a radical is repeated, bracket it first, then subscript the bracket."
        },
        {
          "id": "q-che-chemical-formulae-valency-writing-compounds-3",
          "quizId": "quiz-che-chemical-formulae-valency-writing-compounds",
          "questionText": "The correct name for Fe2(SO4)3 is",
          "optionA": "iron sulphate",
          "optionB": "iron(II) sulphate",
          "optionC": "di-iron tri-sulphate",
          "optionD": "iron(III) sulphate",
          "correctOption": "D",
          "subConcept": "Naming with variable metal charges",
          "explanation": "Three sulphate ions total 6- charge, so the two iron ions must total 6+, giving each iron a 3+ charge; the name carries iron(III). Iron(II) sulphate would be FeSO4, and counting prefixes belong to molecular naming, not ionic compounds.",
          "remediationTip": "Work the charge backwards from the known radical: total minus charge divided by the metal count names the Roman numeral."
        },
        {
          "id": "q-che-chemical-formulae-valency-writing-compounds-4",
          "quizId": "quiz-che-chemical-formulae-valency-writing-compounds",
          "questionText": "Which formula represents the hydrate known as washing soda?",
          "optionA": "Na2CO3.10H2O",
          "optionB": "NaHCO3",
          "optionC": "CuSO4.5H2O",
          "optionD": "NaCl",
          "correctOption": "A",
          "subConcept": "Hydrate formulae and common names",
          "explanation": "Washing soda is the decahydrate of sodium carbonate, Na2CO3.10H2O, the dot recording ten waters per formula unit. NaHCO3 is baking soda, CuSO4.5H2O is the copper(II) sulphate hydrate, and NaCl is common salt with no water.",
          "remediationTip": "Keep a short list of common names with formulae: washing soda, baking soda, and the blue vitriol hydrate, and quiz yourself weekly."
        },
        {
          "id": "q-che-chemical-formulae-valency-writing-compounds-5",
          "quizId": "quiz-che-chemical-formulae-valency-writing-compounds",
          "questionText": "Why must every formula be verified before an equation is balanced or a mole calculation attempted?",
          "optionA": "Because formula colours determine the endpoint of a titration",
          "optionB": "Because the periodic table is arranged by formula size",
          "optionC": "Because a wrong formula gives a wrong Mr, an unbalanceable equation and false mass ratios",
          "optionD": "Because radicals change identity whenever they are heated",
          "correctOption": "C",
          "subConcept": "Formulae as the foundation of calculation",
          "explanation": "All later arithmetic is built on the formula: Mr comes from its atom counts, and balancing adjusts coefficients of correct formulae, never the formulae themselves. One wrong subscript silently corrupts the entire answer chain.",
          "remediationTip": "Adopt the habit of a two-check pause before calculating: is the compound neutral, and are brackets present where radicals repeat?"
        }
      ]
    }
  },
  {
    "id": "shs1-che-t3-laws-of-conservation-relative-masses",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 4,
    "title": "Chemical Combination, the Mole and Conservation of Mass",
    "description": "The laws of conservation of mass, definite proportions and multiple proportions; relative atomic, molecular and molar mass; the mole as the chemist's counting unit with the Avogadro constant; and the two conversions that run every calculation, moles from mass and moles from gas volume.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Chemical calculation rests on three laws, the conservation of mass, the law of definite proportions and the law of multiple proportions, each of which the atom theory explains.\n• The law of conservation of mass states that in a chemical reaction matter is neither created nor destroyed, so the total mass of the products equals the total mass of the reactants, and equations must balance.\n• A vivid test of conservation is burning a candle in a sealed vessel, the mass does not change because the gases that escape in an open flame are trapped and weighed.\n• The law of definite proportions states that a given compound always contains the same elements in the same fixed ratio by mass, so pure water is always hydrogen to oxygen in the mass ratio 1 to 8.\n• The law of multiple proportions states that when two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in a simple whole-number ratio, as carbon forms CO and CO2.\n• Relative atomic mass, Ar, is the average mass of an atom of the element compared with one-twelfth the mass of a carbon-12 atom; it carries no unit and chlorine is 35.5.\n• Relative molecular mass, Mr, is the sum of the relative atomic masses of all the atoms in one molecule, so CO2 is 12 plus 2 times 16, giving 44.\n• Molar mass is the mass of one mole of a substance in grams and equals the relative formula mass in numbers, so the molar mass of sodium carbonate, Na2CO3, is 106 grams per mole.\n• The mole is the SI unit for amount of substance; one mole contains exactly Avogadro's number of particles, 6.02 times ten to the twenty-third, whether atoms, molecules or ions.\n• Avogadro's constant lets us count invisible particles by weighing, just as a dozen counts eggs, so one mole of any element is its relative atomic mass in grams.\n• The key conversion from mass to amount is number of moles equals mass divided by molar mass, written n equals m over M, and the reverse is m equals n times M.\n• The number of particles equals the number of moles multiplied by Avogadro's constant, so 0.5 mole of a gas holds 3.01 times ten to the twenty-third molecules.\n• At standard temperature and pressure, s.t.p., one mole of any gas occupies 22.4 cubic decimetres, and at room temperature and pressure, r.t.p., it occupies about 24 cubic decimetres.\n• Moles from gas volume use n equals volume over molar volume, so 5.6 dm3 of any gas at s.t.p. is 5.6 over 22.4, which is 0.25 mole.\n• Concentration in moles per cubic decimetre links solution and amount, n equals concentration times volume, and it is the natural extension of the mole once volumetric analysis is reached.\n• Balancing an equation is conservation of mass in symbol form, since the same number of each kind of atom must appear on both sides of the arrow.",
    "detailedNotes": {
      "overview": "This topic hands you the arithmetic engine of chemistry. You begin with three laws of combination, conservation of mass, definite proportions and multiple proportions, which tell you that reactions conserve matter and compounds have fixed recipes. From there the lesson defines the scale of mass used throughout chemistry, relative atomic mass, relative molecular mass and molar mass, and then introduces the mole, the unit that lets a chemist count atoms by weighing them. The practical core is two conversions, obtaining the number of moles from a given mass, and obtaining it from a given volume of gas at known conditions, together with turning moles into numbers of particles using Avogadro's constant. Master these and the whole of stoichiometry, right up to titration in SHS 3, becomes a chain of one familiar step.",
      "introduction": "Treat every calculation as finding moles first. For each worked example write down the mass, divide by the molar mass to get n, then multiply by Avogadro to get particles, or divide a gas volume by 22.4 at s.t.p. Keep a single reference sheet of the molar masses you meet, water 18, carbon dioxide 44, oxygen 32, sodium chloride 58.5 and sodium carbonate 106, and rehearse the conservation law by balancing a few equations and checking that each side carries the same atom count and the same total mass.",
      "realWorldContext": "The mole is a market idea applied to atoms. A cocoa buyer at a depot in Suhum does not count individual beans, he weighs them in bags and infers the number, exactly as a chemist weighs a sample to infer the number of particles. The sachet water plants that dose treatment chemicals must know the amount of a substance in moles, not just in grams, so the chlorine and alum are measured by their particle count. A pharmacist compounding in Cape Coast converts a mass of active ingredient into moles to fix a strength, and the conservation of mass that Lavoisier stated is the same principle a baker trusts when dough mass before baking equals dough mass after, minus the carbon dioxide that has escaped, a fact a market trader in Accra who watches kenkey dough can confirm.",
      "objectives": [
        "State and apply the laws of conservation of mass, definite proportions and multiple proportions",
        "Define relative atomic mass, relative molecular mass and molar mass and calculate each from a formula",
        "Explain the mole as the unit of amount and use Avogadro's constant to convert moles into particles",
        "Calculate the number of moles in a given mass using n equals m over M and rearrange the relationship",
        "Convert a volume of gas at s.t.p. or r.t.p. into moles and solve combined mass, mole and particle problems"
      ],
      "sections": [
        {
          "title": "The Three Laws of Chemical Combination",
          "content": "Before chemists could calculate they had to agree on the rules reactions obey, and three laws set them down. The law of conservation of mass says that in any chemical change matter is neither created nor destroyed, so the total mass of the products must equal the total mass of the reactants; this is why every equation has to be balanced, the same number of each kind of atom on both sides, and why a candle burning in a sealed container weighs exactly what it did before, once the gases are trapped and weighed. The law of definite proportions states that a pure compound always contains its elements combined in the same fixed ratio by mass regardless of source or quantity, so water is invariably hydrogen and oxygen in the mass ratio one to eight, never some other proportion. The law of multiple proportions covers elements that form more than one compound; when the same two elements combine in different ways, the masses of one element that join a fixed mass of the other stand in simple whole-number ratios. Carbon is the clean illustration, since with a fixed mass of oxygen it forms carbon monoxide, CO, and carbon dioxide, CO2, and the oxygen masses in the two compounds are in the whole-number ratio one to two, exactly what the theory of discrete atoms predicts.",
          "bulletPoints": [
            "Conservation of mass: total mass of products equals total mass of reactants, so equations must balance.",
            "A sealed-vessel burn keeps mass constant because escaping gases are trapped and weighed.",
            "Definite proportions: a compound always has its elements in the same fixed ratio by mass, water is H to O in 1 to 8.",
            "Multiple proportions: two elements forming several compounds show simple whole-number mass ratios, CO against CO2.",
            "All three laws are direct consequences of matter being made of whole indivisible atoms."
          ],
          "keyTakeaway": "Mass is conserved, compounds have fixed recipes, and where recipes differ they differ by whole numbers, because atoms are counted not divided.",
          "realWorldExample": "A foreman mixing concrete at a building site in Kasoa keeps the cement to sand ratio fixed batch after batch, the practical twin of definite proportions, because drifting from the set mass ratio changes the strength of every block produced."
        },
        {
          "title": "Relative Atomic Mass, Molecular Mass and Molar Mass",
          "content": "Atoms are far too light to weigh in grams, so chemists compare them to a standard instead of measuring them absolutely. Relative atomic mass, written Ar, is the average mass of an atom of an element compared with one-twelfth of the mass of a single carbon-12 atom; it is a bare number with no unit, and it already includes the weighting for isotopes, which is why chlorine reads 35.5 rather than 35. To find the mass of a compound you add the relative atomic masses of all its atoms, giving the relative molecular mass, Mr, for molecules or the relative formula mass for ionic compounds. Carbon dioxide is 12 for the carbon plus two times 16 for the oxygens, a total of 44. Sodium carbonate, Na2CO3, is two sodium at 23, one carbon at 12 and three oxygen at 16, that is 46 plus 12 plus 48, which equals 106. Molar mass now turns that pure number into something you can weigh: it is the mass of one mole of the substance expressed in grams, and it has the same figure as the relative formula mass, so the molar mass of sodium carbonate is 106 grams per mole and that of sodium chloride, 23 plus 35.5, is 58.5 grams per mole.",
          "bulletPoints": [
            "Ar compares the average atomic mass with one-twelfth the mass of a carbon-12 atom; it has no unit.",
            "Mr is the sum of the Ar of every atom in the formula, CO2 gives 12 plus 2 times 16 equals 44.",
            "Na2CO3 gives 2 times 23 plus 12 plus 3 times 16, a total of 106.",
            "Molar mass is one mole weighed in grams and shares the number with the formula mass, so 106 g per mole for Na2CO3.",
            "NaCl is 23 plus 35.5 equals 58.5, useful for later percentage composition work."
          ],
          "keyTakeaway": "Add the atomic masses to get the formula mass, then read that same figure as grams per mole to get the molar mass.",
          "realWorldExample": "A laboratory attendant at the Wesley Girls school lab preparing a standard solution first computes the molar mass of the salt on the bottle label, exactly the sum-of-atoms step, before weighing any sample on the balance."
        },
        {
          "title": "The Mole and Avogadro's Constant",
          "content": "The mole is the bridge between the atomic world we cannot see and the laboratory world we can weigh. One mole is defined as the amount of substance that contains as many particles as there are atoms in exactly twelve grams of carbon-12, and that number has been counted and fixed as Avogadro's constant, 6.02 times ten to the twenty-third. A mole works exactly like a dozen, only vastly larger, so when a recipe calls for a mole of molecules you know it means 6.02 times ten to the twenty-three of them. The beauty of the definition is how it links counting to weighing, because one mole of any element has a mass in grams equal to its relative atomic mass, so twelve grams of carbon, thirty-two grams of oxygen gas, and fifty-eight-and-a-half grams of sodium chloride are all precisely one mole of their particles. To convert an amount into a number of particles you multiply the moles by Avogadro's constant, and to go the other way you divide the particle count by it. This single idea, that a weighed sample quietly encodes a particle count, is what makes all chemical calculation possible.",
          "bulletPoints": [
            "One mole contains Avogadro's number of particles, 6.02 times ten to the twenty-third.",
            "A mole is a counting unit like a dozen, only much larger and used for atoms and molecules.",
            "The mass of one mole in grams equals the relative atomic or formula mass of the substance.",
            "Particles equals moles times 6.02 times ten to the twenty-third.",
            "Because 32 g of oxygen gas is one mole, weighing lets you count without ever seeing a particle."
          ],
          "keyTakeaway": "A mole is a fixed number of particles whose mass in grams equals the formula mass, so weighing becomes counting.",
          "realWorldExample": "A quality officer testing the amount of active ingredient in a batch of paracetamol at an Accra pharmaceutical packager reasons in moles, because the particles that do the work are counted by mass in exactly this way."
        },
        {
          "title": "Moles from Mass",
          "content": "The most used conversion in chemistry turns a weighed mass into an amount in moles. The relationship is number of moles equals mass divided by molar mass, written as n equals m over M, where n is the amount in moles, m is the mass in grams and M is the molar mass in grams per mole. To use it you first compute or read off the molar mass by adding the relative atomic masses, then divide the given mass by that figure. For example, to find the amount in ten-point-six grams of sodium carbonate, take its molar mass as 106 g per mole and divide, ten-point-six over one hundred and six, which gives exactly zero-point-one mole; the number of formula units then follows by multiplying that by Avogadro's constant, zero-point-one times 6.02 times ten to the twenty-third, giving 6.02 times ten to the twenty-two particles. The relationship rearranges in three ways and the exam tests all of them, mass equals moles times molar mass, and molar mass equals mass over moles, so a question that gives mass and moles and asks for the formula mass is the same calculation read backwards. Always keep the units visible, grams divided by grams per mole leaving moles, because a missing unit is the commonest way to lose a mark.",
          "bulletPoints": [
            "Core formula n equals m over M, moles equal mass in grams divided by molar mass in grams per mole.",
            "Work out M first by summing atomic masses, then divide the given mass by it.",
            "10.6 g of Na2CO3, M 106, gives n 0.1 mole, then 6.02 times ten to the twenty-two formula units.",
            "Rearrange to m equals n times M and to M equals m over n as needed.",
            "Carry the units through, g divided by g per mole cancels to moles and guards against slips."
          ],
          "keyTakeaway": "Divide the mass by the molar mass to get moles, then multiply by Avogadro if the question wants particles.",
          "realWorldExample": "A student in the school laboratory weighing five-point-nine grams of sodium chloride, whose molar mass is 58.5 g per mole, obtains a clean 0.1 mole to use in a reaction, exactly the mass-to-mole step a factory chemist performs on a larger balance."
        },
        {
          "title": "Moles from Gas Volume",
          "content": "Gases are handled by volume rather than by weighing, because equal volumes of all gases under the same conditions contain equal numbers of molecules, a principle that makes the mole convert directly into a volume. At standard temperature and pressure, zero degrees Celsius and one atmosphere, one mole of any gas occupies twenty-two-point-four cubic decimetres, and at the warmer room temperature and pressure used in most laboratories, one mole occupies about twenty-four cubic decimetres. The conversion mirrors the mass one: number of moles equals gas volume divided by molar volume, so n equals V over 22.4 at s.t.p. Suppose a question gives five-point-six cubic decimetres of carbon dioxide at s.t.p.; dividing by twenty-two-point-four gives zero-point-two-five mole. From there mass and particle count follow by the earlier rules, zero-point-two-five times the molar mass of carbon dioxide, which is 44 g per mole, giving eleven grams, and zero-point-two-five times Avogadro's constant, giving 1.505 times ten to the twenty-three molecules. Whichever direction the question runs, volume to moles or moles to volume, the molar volume is the fixed factor, and stating which conditions, s.t.p. or r.t.p., you are using is essential because the two give different values.",
          "bulletPoints": [
            "At s.t.p. one mole of any gas occupies 22.4 dm3; at r.t.p. it occupies about 24 dm3.",
            "Moles from volume use n equals V over molar volume, dividing by 22.4 at s.t.p.",
            "5.6 dm3 of CO2 at s.t.p. is 5.6 over 22.4, exactly 0.25 mole.",
            "Then mass is 0.25 times 44 giving 11 g, and particles 0.25 times 6.02 times ten to the twenty-three.",
            "Always declare the conditions, since the same volume means a different number of moles at s.t.p. and r.t.p."
          ],
          "keyTakeaway": "Divide a gas volume by 22.4 dm3 at s.t.p., or by 24 at r.t.p., to get moles, then mass and particles follow.",
          "realWorldExample": "An engineer checking gas output at the Volta authority plant reasons from volumes, knowing that under fixed conditions a measured volume of gas encodes a definite number of moles, the same molar-volume conversion used in the laboratory."
        }
      ],
      "commonMistakes": [
        "Writing the mole conversion as mass times molar mass instead of mass divided by molar mass; the correct relation is n equals m over M, so units of grams per mole must sit in the denominator.",
        "Quoting relative atomic mass with a unit such as grams; Ar and Mr are pure ratios with no unit, and only the molar mass carries grams per mole.",
        "Using 22.4 dm3 for a gas volume at room temperature; at r.t.p. the molar volume is about 24 dm3, so using the wrong figure throws the whole answer out.",
        "Forgetting to multiply the oxygen count in a formula by its subscript, so taking CO2 as 12 plus 16 instead of 12 plus two times 16, giving 28 not 44.",
        "Confusing one mole of atoms with one mole of molecules, so calling 32 grams of oxygen gas O one mole of atoms when O2 is one mole of molecules and two moles of atoms.",
        "Failing to balance the equation before doing mole ratios, since the coefficient numbers are the mole ratios and an unbalanced equation makes every downstream mass wrong."
      ],
      "wassceExamTips": [
        "In Paper 1 the fastest mole questions test n equals m over M, so learn the common molar masses by heart, water 18, carbon dioxide 44, oxygen 32, sodium chloride 58.5, and answer in one division.",
        "In a Paper 2 calculation, always write the formula you are using as its own line before substituting, because the method mark (M1) is given for the correct relation even if the arithmetic then slips.",
        "When a gas volume appears, state s.t.p. or r.t.p. in one line and use 22.4 or 24 accordingly; examiners look for that declaration before crediting the mole figure.",
        "For Avogadro conversions give the answer in standard form to three significant figures, 1.505 times ten to the twenty-three, and keep the ten to the twenty-three factor intact rather than writing out zeros.",
        "In the alternative practical Paper 3 you may be asked to find the amount reacting from a weighed mass, so convert mass to moles as your first step and label units on every value."
      ],
      "summaryChecklist": [
        "Can I state the three laws of combination and give an example of each from water, carbon monoxide and carbon dioxide?",
        "Can I calculate the relative molecular mass and molar mass of a compound from its formula?",
        "Can I explain what one mole is and use Avogadro's constant to change moles into particles?",
        "Can I find the number of moles in a given mass with n equals m over M and rearrange the formula?",
        "Can I convert a gas volume at s.t.p. or r.t.p. into moles and then into mass and number of molecules?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-mole-1",
        "title": "Conservation of Mass in the Formation of Water",
        "problem": "Hydrogen burns in oxygen according to the equation 2H2 + O2 -> 2H2O. If 4 grams of hydrogen react completely with 32 grams of oxygen, calculate the mass of water formed and verify the law of conservation of mass using mole amounts. Take H as 1 and O as 16.",
        "stepByStepSolution": [
          "Step 1 (M1): Find the molar masses, hydrogen gas H2 is 2 times 1 equals 2 g per mole, oxygen gas O2 is 2 times 16 equals 32 g per mole, and water H2O is 2 times 1 plus 16 equals 18 g per mole.",
          "Step 2 (M1): Convert each reactant mass to moles, moles of H2 equal 4 divided by 2 which is 2 moles, and moles of O2 equal 32 divided by 32 which is 1 mole.",
          "Step 3 (M1): Compare with the balanced equation ratio 2 H2 to 1 O2, so 2 moles of hydrogen exactly match 1 mole of oxygen with neither left over.",
          "Step 4 (M1): Read the product ratio from the equation, 2 moles of H2O form for every 2 moles of H2, so 2 moles of water are produced.",
          "Step 5 (A1): Convert product moles to mass, 2 moles times 18 g per mole equals 36 grams of water.",
          "Step 6 (A1): Check conservation, mass of reactants is 4 plus 32 equals 36 grams and mass of product is 36 grams, so total mass before equals total mass after, confirming the law of conservation of mass."
        ],
        "keyTakeaway": "Balancing first lets you show that 4 g of hydrogen plus 32 g of oxygen give exactly 36 g of water, so mass is conserved."
      },
      {
        "id": "ex-che-mole-2",
        "title": "Moles, Mass and Molecules from a Gas Volume at s.t.p.",
        "problem": "A sample of carbon dioxide occupies 5.6 cubic decimetres at s.t.p. Determine the number of moles present, the mass of the gas, and the number of molecules it contains. Take C as 12, O as 16 and Avogadro's constant as 6.02 times ten to the twenty-third.",
        "stepByStepSolution": [
          "Step 1 (M1): Recall that at s.t.p. one mole of any gas occupies 22.4 cubic decimetres, so moles equal gas volume divided by 22.4.",
          "Step 2 (M1): Substitute the given volume, n equals 5.6 divided by 22.4, and carry the units dm3 over dm3 per mole.",
          "Step 3 (A1): Divide to obtain n equals 0.25 mole of carbon dioxide.",
          "Step 4 (M1): Compute the molar mass of CO2 as 12 plus 2 times 16 equals 44 g per mole, then find the mass as moles times molar mass.",
          "Step 5 (A1): Multiply 0.25 by 44 to get the mass of the gas, 11 grams.",
          "Step 6 (M1): For the number of molecules multiply the moles by Avogadro's constant, 0.25 times 6.02 times ten to the twenty-third.",
          "Step 7 (A1): The product is 1.505 times ten to the twenty-third molecules, so the sample is 0.25 mole, 11 grams, and 1.505 times ten to the twenty-third molecules of carbon dioxide."
        ],
        "keyTakeaway": "Divide the gas volume by 22.4 to get moles, then multiply by molar mass for grams and by Avogadro for molecules."
      }
    ],
    "quiz": {
      "id": "quiz-che-mole",
      "topicId": "shs1-che-t3-laws-of-conservation-relative-masses",
      "title": "The Mole and Conservation of Mass Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-mole-1",
          "quizId": "quiz-che-mole",
          "questionText": "The law of conservation of mass states that in a chemical reaction",
          "optionA": "the total volume of the gases always stays the same",
          "optionB": "atoms are created as new elements appear",
          "optionC": "the mass of the products is always less than that of the reactants",
          "optionD": "matter is neither created nor destroyed, so the total mass of products equals that of reactants",
          "correctOption": "D",
          "subConcept": "Conservation of mass",
          "explanation": "The law is about mass and atoms being rearranged, not destroyed, so total product mass equals total reactant mass, which is why equations balance. Volume can change, atoms are never created, and in a sealed system the mass is equal rather than less.",
          "remediationTip": "Recite the law as mass in equals mass out, then explain it by atoms being rearranged, never made or lost."
        },
        {
          "id": "q-che-mole-2",
          "quizId": "quiz-che-mole",
          "questionText": "How many moles are present in 10.6 grams of sodium carbonate, Na2CO3, given its molar mass is 106 g per mole?",
          "optionA": "10.6",
          "optionB": "0.1",
          "optionC": "1.06",
          "optionD": "0.01",
          "correctOption": "B",
          "subConcept": "Moles from mass",
          "explanation": "Moles equal mass divided by molar mass, 10.6 divided by 106, giving 0.1 mole. The value 1.06 comes from dividing by 10, 10.6 is the mass itself, and 0.01 is a factor-of-ten arithmetic slip.",
          "remediationTip": "Write n equals m over M each time and keep the units visible so the grams cancel to leave moles."
        },
        {
          "id": "q-che-mole-3",
          "quizId": "quiz-che-mole",
          "questionText": "The volume occupied by one mole of any gas at standard temperature and pressure is",
          "optionA": "22.4 cubic decimetres",
          "optionB": "24 cubic decimetres",
          "optionC": "6.02 cubic decimetres",
          "optionD": "18 cubic decimetres",
          "correctOption": "A",
          "subConcept": "Molar volume at s.t.p.",
          "explanation": "At s.t.p. one mole of any gas occupies 22.4 cubic decimetres. The figure 24 cubic decimetres is the value at room temperature, 6.02 belongs to Avogadro's constant, and 18 is unrelated to gas volume.",
          "remediationTip": "Pair the conditions with the number, s.t.p. with 22.4, r.t.p. with 24, on a single revision card."
        },
        {
          "id": "q-che-mole-4",
          "quizId": "quiz-che-mole",
          "questionText": "How many molecules are there in 0.5 mole of a gas? Take Avogadro's constant as 6.02 times ten to the twenty-third.",
          "optionA": "6.02 times ten to the twenty-third",
          "optionB": "1.204 times ten to the twenty-third",
          "optionC": "3.01 times ten to the twenty-third",
          "optionD": "3.01 times ten to the twenty-second",
          "correctOption": "C",
          "subConcept": "Moles to particles",
          "explanation": "Particles equal moles times Avogadro's constant, 0.5 times 6.02 times ten to the twenty-three, giving 3.01 times ten to the twenty-three. The full Avogadro number is one mole, and a power error makes the other options wrong.",
          "remediationTip": "For half a mole take half of 6.02 and keep the ten to the twenty-three power unchanged."
        },
        {
          "id": "q-che-mole-5",
          "quizId": "quiz-che-mole",
          "questionText": "What volume at s.t.p. is occupied by 0.25 mole of carbon dioxide?",
          "optionA": "11.2 cubic decimetres",
          "optionB": "5.6 cubic decimetres",
          "optionC": "22.4 cubic decimetres",
          "optionD": "2.8 cubic decimetres",
          "correctOption": "B",
          "subConcept": "Moles to gas volume",
          "explanation": "Volume equals moles times molar volume, 0.25 times 22.4, which is 5.6 cubic decimetres. The value 11.2 is half a mole and 2.8 is one-eighth, so both are mis-multiplications, while 22.4 would be a full mole.",
          "remediationTip": "To turn moles into a gas volume multiply by 22.4 at s.t.p. and check the size of the answer against a full mole."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t3-water-solutions-suspension-colloid",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 6,
    "title": "Water, Solutions, Suspensions and Colloids",
    "description": "Chemical and physical tests for pure water, the water cycle and the sources that actually supply Ghana, temporary and permanent hardness with the methods used to remove them, the honest comparison of solution, suspension and colloid, and solubility curves, saturation, crystallisation, water of crystallisation, efflorescence and deliquescence.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Pure water has fixed physical constants: it boils at exactly 100 degrees C at standard pressure, freezes at 0 degrees C, has a pH of 7 and leaves no residue when evaporated to dryness in a clean watch glass.\n• The chemical test for water is anhydrous copper(II) sulphate, white to blue, CuSO4 + 5H2O -> CuSO4.5H2O; blue cobalt chloride paper turns pink for the same reason, and both tests prove the liquid is water, not that it is pure.\n• A distilled sample passes both tests and leaves no solid; borehole water that passes the water tests still carries dissolved salts, so pure and clean are different claims.\n• The water cycle moves water by evaporation from the sea and the Volta Lake, transpiration from vegetation, condensation, precipitation and infiltration into groundwater, and Ghana rains in two seasons in the south and one season from May to September in the north.\n• Supply in Ghana runs from surface treatment at Weija on the Densu and at Kpong on the Volta through piped zones, standpipes and household storage, to boreholes with hand pumps and poly-pits in the villages, to rooftop harvesting tanks and to sachet and bottled water produced under registration with the Food and Drugs Authority.\n• Temporary hardness is caused by dissolved calcium hydrogencarbonate, Ca(HCO3)2, made when rainwater carrying carbon(IV) oxide passes through limestone, and it is removed by boiling: Ca(HCO3)2 -> CaCO3 + H2O + CO2, the calcium trioxocarbonate(IV) deposited as scale in a kettle or geyser.\n• Permanent hardness is caused by calcium or magnesium sulphates and chlorides, for example CaSO4 and MgCl2, which boiling does not remove; it is removed by washing soda, Na2CO3.10H2O, which precipitates the calcium ions as CaCO3, or by an ion-exchange column.\n• Scum is the ionic consequence of hardness: 2C17H35COO- + Ca2+ -> (C17H35COO)2Ca, an insoluble calcium salt of stearic acid, so hard water wastes soap and leaves a film on a bath.\n• A solution is a homogeneous mixture with particles of ion or molecule size, below 1 nm, transparent, not scattered by light, never settling and not separable by filtration; salt in water and air are both solutions.\n• A colloid has particles between about 1 nm and 1000 nm, looks clear in a thin layer but scatters a beam of light, the Tyndall effect, does not settle and passes filter paper; milk, fog, starch paste and harmattan haze are colloids.\n• A suspension has particles above 1000 nm visible to the eye, is opaque, settles on standing and can be filtered; clay in a bucket of water and a mixture of flour and water are suspensions.\n• A saturated solution is one in which no more solute dissolves at the given temperature because undissolved solute stands in dynamic equilibrium with the dissolved solute; solubility is the mass in grams of solute that saturates 100 g of water at that temperature.\n• A solubility curve reads mass of solute per 100 g of water against temperature: potassium nitrate rises steeply, sodium chloride is almost flat, and gases become less soluble as the water warms, which is why warm discharge water from a dam or power station lowers the dissolved oxygen that fish need.\n• Separation follows the curve: a steeply soluble salt such as potassium nitrate is obtained by cooling crystallisation of a hot saturated solution, while flat-curve sodium chloride is obtained by evaporation to dryness.\n• Crystals are solids with regular faces; a hydrate carries water of crystallisation in its formula, for example CuSO4.5H2O, blue crystals that turn white on heating and can be re-blued with water.\n• Washing soda decahydrate, Na2CO3.10H2O, is efflorescent: in dry air it loses most of its water of crystallisation and crumbles to the monohydrate, Na2CO3.H2O, which is what a broken block of it does during the harmattan; sodium hydroxide pellets are deliquescent and dissolve in the water they absorb from the air.",
    "detailedNotes": {
      "overview": "Water is the solvent of the whole chemistry course, and this topic treats it four ways at once: as a substance you must prove chemically, as a national supply problem with real Ghanaian sources and treatment steps, as the carrier of the dissolved calcium and magnesium salts that cause hardness and their removal, and as the medium in which solutions, colloids and suspensions differ from one another. You will learn the two chemical tests for water and why they do not prove purity, the fixed physical constants of the pure substance, the equations for temporary hardness removal by boiling and permanent hardness removal by washing soda, and the particle-size table that separates a solution from a colloid from a suspension. The closing part deals with saturation, solubility curves, crystallisation, water of crystallisation, efflorescence and deliquescence, which supply most of the short objective questions in this area.",
      "introduction": "Start from the household: take three clear containers, one with distilled or boiled and cooled water, one with borehole or sachet water, and one with water stirred with a little top soil. Test each with anhydrous copper(II) sulphate, then evaporate a few drops of each on a clean watch glass over a water bath and compare the residues; that single exercise separates the idea of pure from the idea of clean. Then keep a salt jar of washing soda crystals and note how their surface powders over the weeks. Practise reading a solubility curve to one decimal place, since the plotted question in Paper 2 asks for a value at a temperature that is not marked on the axis.",
      "realWorldContext": "The Ghana Water Company treats water drawn from the Densu at Weija and from the Volta at Kpong and Afyamani, holding it in reservoirs, dosing it with chlorine and pumping it to zoned supply, standpipes and household storage tanks, while many estates keep a poly tank and a well as backup. In the north, a borehole with a hand pump or a community poly-pit is the supply, and in the Upper East Region hand-dug Kosouo wells and rooftop harvesting on the laterite soil carry the dry season. Thousands of households depend on sachet water, produced under Food and Drugs Authority registration, and a school must boil or treat stored water when the pipe is dry. Silt from mining and cultivation reaches the Densu in the rainy season and raises the coagulant dose the treatment works must spend. The scale inside a family kettle in Tamale is exactly the calcium trioxocarbonate(IV) this topic teaches.",
      "objectives": [
        "Apply the chemical and physical tests for pure water and state what each test proves and what it fails to prove",
        "Describe the water cycle and the main sources and treatment steps by which water reaches a home, a school or a sachet-water plant in Ghana",
        "Explain the two kinds of water hardness, write the equations for their removal, and state the disadvantage of hard water for washing and boiling",
        "Distinguish a solution, a colloid and a suspension by particle size, appearance, settling behaviour, filtration and the Tyndall effect",
        "Read a solubility curve, calculate the mass of solute that crystallises from a cooling saturated solution, and define hydrate, efflorescence and deliquescence with examples"
      ],
      "sections": [
        {
          "title": "Proving Water Is Water, and Proving It Is Pure",
          "content": "Two chemical tests identify water. Anhydrous copper(II) sulphate is white, and it turns blue as it takes up water to form the pentahydrate, CuSO4 + 5H2O -> CuSO4.5H2O; blue cobalt chloride paper turns pink for the same reason. Both tests answer the question is this liquid water, and neither answers the question is this water pure, because a solution of salt in water gives the same blue colour. Purity is proved instead by the physical constants: distilled water boils at exactly 100 degrees C at standard pressure and freezes at 0 degrees C, its pH is 7 at 25 degrees C, and a few drops evaporated to dryness on a clean watch glass leave no residue at all. Any dissolved solid lowers the freezing point and raises the boiling point and leaves that residue, so a borehole sample that boils above 100 degrees C or dries to a white film is not pure even though it may be perfectly safe to drink after treatment.",
          "bulletPoints": [
            "Anhydrous copper(II) sulphate: white to blue, the standard test for water.",
            "Cobalt chloride paper: blue to pink, used as the hand test for moisture.",
            "Fixed boiling point 100 degrees C and freezing point 0 degrees C at standard pressure.",
            "No residue on evaporation, pH 7, and no colour or taste mark pure water.",
            "Distillation both proves purity and makes pure water for the laboratory."
          ],
          "keyTakeaway": "The copper sulphate test proves the presence of water; only the fixed boiling point, the freezing point and a residue-free evaporation prove the absence of anything dissolved in it.",
          "realWorldExample": "A sachet-water bottling line at Ashaley Botwe in Accra checks its product with a conductivity meter and an evaporation dish as well as the bacteriological test, because dissolved salts from a failing borehole would leave a residue and change the taste even in water that is free of germs."
        },
        {
          "title": "The Water Cycle and How Ghana Draws Its Supply",
          "content": "Water circulates by evaporation from the sea, the Volta Lake and wet soil, by transpiration from forest and cocoa farms, by condensation into cloud, by precipitation as rain, and by run-off into rivers or infiltration into the groundwater that a borehole later reaches. Ghana receives two rain maxima in the south, the major season from April to July and a minor season in September and October, and a single May to September season in the savanna north, so storage and dry-season supply differ sharply by region. Actual abstraction for a city comes from surface water, treated by screening, addition of a coagulant such as aluminium sulphate to flocculate clay, sedimentation, filtration through sand, and chlorination before the water enters the reservoir and the distribution mains at Weija on the Densu or at Kpong on the Volta. Where pipes do not reach, a borehole with a hand pump, a poly-pit, a hand-dug Kosouo well, rooftop harvesting into a storage tank, or a sachet-water plant carried to the household does the work. Boiling a household sample kills pathogens and drives off temporary hardness at the same time, while chlorine tablets and a measured dose of bleaching solution are the chemical treatments, and a properly chlorinated water must still hold a small residual chlorine at the point of use.",
          "bulletPoints": [
            "Evaporation, transpiration, condensation, precipitation, run-off and infiltration complete the cycle.",
            "Treatment order: screening, coagulation with aluminium sulphate, sedimentation, sand filtration, chlorination.",
            "Chlorine kills pathogens; it must be dosed and a small residual left at the point of use.",
            "Boiling kills germs and removes temporary hardness but does not soften permanently hard water.",
            "Ghana sources: treated surface water, borehole with hand pump, poly-pit, Kosouo well, rooftop tank, sachet water."
          ],
          "keyTakeaway": "Supply is a chain of physical steps, and each step removes one named class of impurity: clay by coagulation and filtration, germs by chlorine, taste and colour by aeration and sand filtration.",
          "realWorldExample": "When silt from upstream activity thickens the Densu in the rainy season, the Weija works must raise its coagulant dose and shorten its filter-running time, which is why supply to parts of Accra drops or the water runs faintly coloured for a day."
        },
        {
          "title": "Hardness: What Causes It and How It Is Removed",
          "content": "Water becomes hard by dissolving the minerals of the ground it passes through. Rain carrying carbon(IV) oxide is weakly acidic, and as it moves through limestone it forms calcium hydrogencarbonate, Ca(HCO3)2, which is the cause of temporary hardness; on boiling, that salt decomposes back to insoluble calcium trioxocarbonate(IV), water and carbon(IV) oxide, Ca(HCO3)2 -> CaCO3 + H2O + CO2, and the calcium leaves the water as the white scale that coats a kettle element, a geyser and the inside of a boiler. Permanent hardness comes from calcium and magnesium sulphates and chlorides, for example CaSO4 from gypsum and MgCl2 in brackish groundwater, and boiling has no effect on them because they do not decompose into an insoluble product. The fix is chemical: washing soda supplies carbonate ions that precipitate the calcium ions, CaSO4 + Na2CO3 -> CaCO3 + Na2SO4, and the same ionic idea lies behind the ion-exchange column, in which the hard-water cations are traded for sodium ions on a resin bed that is later regenerated with strong brine. The daily cost of hardness is soap: stearate ions are precipitated by calcium ions as insoluble calcium stearate, which is the scum on a bath and the grey film on washed cloth, so a household with hard water buys more soap and gets less lather until the calcium is removed.",
          "bulletPoints": [
            "Temporary hardness: calcium hydrogencarbonate in solution, removed by boiling, deposits scale.",
            "Permanent hardness: calcium and magnesium sulphates and chlorides, unaffected by boiling.",
            "Washing soda precipitates calcium as calcium trioxocarbonate(IV); ion exchange trades the ions for sodium.",
            "Scum is insoluble calcium stearate: 2C17H35COO- + Ca2+ -> (C17H35COO)2Ca.",
            "Soft water lathers at once, so a lather test with equal volumes ranks two samples."
          ],
          "keyTakeaway": "Name the salt before choosing the method: boiling removes calcium hydrogencarbonate, while washing soda or ion exchange is needed for the sulphates and chlorides.",
          "realWorldExample": "Households in Tamale whose supply comes from a borehole descale their kettles and geysers every few weeks with ethanoic acid, because the temporary hardness in that groundwater deposits a thick crust of calcium trioxocarbonate(IV) on the element."
        },
        {
          "title": "Solution, Colloid and Suspension Compared",
          "content": "The three mixtures are separated by the size of the dispersed particles and by what that size allows light and gravity to do to them. In a true solution the particles are individual ions or molecules, below about 1 nm, the mixture is transparent, a beam of light is not scattered, nothing settles even after days, and filtration through ordinary paper separates nothing because the particles pass straight through with the water; salt in water, sugar in water and the mixture of gases called air are all solutions. In a colloid the particles are clumps between about 1 nm and 1000 nm, large enough to scatter light so that a beam becomes visible as the Tyndall effect, yet small enough that they do not settle and they still pass through filter paper; milk, fog, starch paste, jelly and the fine haze of a harmattan morning are colloids. In a suspension the particles are above about 1000 nm and visible to the eye, the liquid is opaque, the solid settles on standing and can be poured off or filtered, and shaking only redispersed it for a short time; water stirred with top soil, an antacid mixture and the muddy water of a flooded stream are suspensions. A flocculant changes the last class, since alum or the crushed seed of the Moringa tree gathers fine clay into clumps heavy enough to settle.",
          "bulletPoints": [
            "Solution: below 1 nm, transparent, no Tyndall effect, no settling, not separable by filtration.",
            "Colloid: 1 nm to 1000 nm, shows the Tyndall effect, does not settle, passes filter paper.",
            "Suspension: above 1000 nm, opaque, settles on standing, separated by filtration or decantation.",
            "Tyndall test: shine a torch through the sample in a dark room and look for the visible beam.",
            "Alum and Moringa seed powder flocculate the clay in a suspension so that it settles."
          ],
          "keyTakeaway": "Particle size decides everything: below 1 nm a solution, 1 to 1000 nm a colloid that scatters light, above 1000 nm a suspension that settles and filters.",
          "realWorldExample": "A village water curator in the Upper East Region crushes Moringa oleifera seed into a clay-rich bucket and leaves it for an hour; the fine suspension flocculates and settles, and the clear layer above is then boiled, which is a colloid and suspension problem solved without a treatment plant."
        },
        {
          "title": "Saturation, Solubility Curves and the Behaviour of Crystals",
          "content": "A saturated solution is one that holds no more solute at the stated temperature, because the excess solute sits at the bottom in dynamic equilibrium with the dissolved portion, dissolving and crystallising at equal rates. Solubility is then defined quantitatively as the mass in grams of solute needed to saturate 100 g of water at that temperature, and it must always be quoted with the temperature. Plotting it gives a solubility curve, and the shape of the curve tells you how to win the salt back from solution. Potassium nitrate climbs steeply, from about 30 g per 100 g of water at 20 degrees C to about 110 g at 60 degrees C, so a hot saturated solution left to cool throws crystals and cooling crystallisation is the correct recovery; sodium chloride is almost flat with temperature, so its solution must be evaporated to dryness. Crystals are regular solids, and many salts carry water of crystallisation inside the lattice, written in the formula with a dot, as in CuSO4.5H2O and Na2CO3.10H2O; heating drives that water off, the crystal falls to a powder of another colour, and the change may be reversed with water. Such salts then behave three ways in air. An efflorescent hydrate such as washing soda decahydrate loses most of its water to a dry atmosphere and crumbles to the monohydrate, which is what a broken lump of it does on a shelf during the harmattan. A deliquescent solid such as sodium hydroxide absorbs so much water that it dissolves in it and runs into a liquid. A hygroscopic substance such as concentrated sulphuric acid or anhydrous calcium chloride takes up water without dissolving and is therefore used as a drying agent.",
          "bulletPoints": [
            "Solubility is grams of solute per 100 g of water at a stated temperature.",
            "Steep curve such as potassium nitrate: recover the salt by cooling crystallisation.",
            "Flat curve such as sodium chloride: recover the salt by evaporation to dryness.",
            "Water of crystallisation appears in the formula, for example CuSO4.5H2O and Na2CO3.10H2O.",
            "Efflorescence: a hydrate loses water to dry air, as washing soda decahydrate does in harmattan."
          ],
          "keyTakeaway": "Read the curve before choosing the method: a steeply rising curve is a cooling-crystallisation salt, a flat one is an evaporation salt, and a dotted formula marks a hydrate that may effloresce.",
          "realWorldExample": "Salt winners at the Ada and Keta lagoon shores depend on the flat solubility curve of sodium chloride: sea water is ponded in shallow pans and the sun evaporates the water until crystals form, because cooling that brine would return almost nothing."
        }
      ],
      "commonMistakes": [
        "Confusing pure with clean, and claiming that boiled and cooled borehole water is chemically pure because it is safe to drink; it still carries dissolved salts, which appear as a residue when the sample is evaporated.",
        "Saying that boiling removes all hardness. Boiling removes only the temporary hardness from calcium hydrogencarbonate; a water whose hardness is calcium sulphate stays hard after boiling, and washing soda or ion exchange is required.",
        "Stating that a colloid settles or can be filtered. Colloid particles stay dispersed and pass through ordinary filter paper; the visible separation in a shaken mud bucket belongs to a suspension, and the two classes are frequently swapped in scripts.",
        "Quoting a solubility without the temperature, for example writing 36 g, when the definition requires 36 g per 100 g of water at a stated temperature such as 25 degrees C.",
        "Calling the blue crystals of copper(II) sulphate anhydrous; the formula CuSO4.5H2O carries water of crystallisation, and only the white powder obtained after strong heating is anhydrous."
      ],
      "wassceExamTips": [
        "Paper 1 likes the two water tests and the two classes of hardness, so learn the exact pairs: anhydrous copper(II) sulphate white to blue for water, and boiling or washing soda for the two hardness types.",
        "In Paper 2 a solubility curve question asks for a value at a temperature between the plotted points; draw the vertical from the temperature to the curve and the horizontal back to the axis, read to one decimal place and state the unit as g per 100 g of water.",
        "For a cooling-crystallisation calculation the examiner expects the working to run through the mass of water: state the solubility at each temperature, scale it to the water present, and give the difference as the crystals; a correct number with no such chain loses the method marks.",
        "When asked how to soften water for a boiler, name the method, name the salt it removes and add why scale is dangerous, since it insulates the element and leads to overheating; the reason carries the second mark.",
        "Definitions are marked on keywords: solution needs homogeneous and particle size below 1 nm, colloid needs the Tyndall effect, suspension needs settles on standing and filterable; write those words rather than a long description."
      ],
      "summaryChecklist": [
        "Can I carry out the two chemical tests for water and state the three physical proofs of purity?",
        "Can I describe the treatment chain from surface water to a tap in Ghana and name the impurity each step removes?",
        "Can I separate temporary from permanent hardness, write the removal equations and explain scum ionically?",
        "Can I complete a table comparing solution, colloid and suspension by particle size, Tyndall effect, settling and filtration?",
        "Can I read a solubility curve and calculate the mass of solute that crystallises when a hot saturated solution cools?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-water-1",
        "title": "Crystals Obtained by Cooling a Hot Saturated Solution",
        "problem": "The solubility of potassium nitrate is 110 g per 100 g of water at 60 degrees C and 30 g per 100 g of water at 20 degrees C. A student prepares 50.0 g of a saturated solution of potassium nitrate at 60 degrees C and lets it cool to 20 degrees C. Calculate the mass of potassium nitrate that crystallises, assuming the crystals carry no water of crystallisation.",
        "stepByStepSolution": [
          "Step 1 (M1): At 60 degrees C, 100 g of water holds 110 g of potassium nitrate, so the saturated solution formed weighs 100 g + 110 g = 210 g.",
          "Step 2 (M1): Scale that proportion to the 50.0 g actually taken: mass of solute = 110 x 50.0 / 210 = 26.19 g, and mass of water = 50.0 g - 26.19 g = 23.81 g.",
          "Step 3 (M1): At 20 degrees C the same 23.81 g of water can keep only 30 g per 100 g of water in solution, so the dissolved mass left = 23.81 x 30 / 100 = 7.14 g.",
          "Step 4 (A1): Mass crystallised = the solute present at 60 degrees C minus the solute the cold water can still hold = 26.19 g - 7.14 g = 19.05 g.",
          "Step 5 (M1): Check by the shortcut the curve allows: solubility fell by 110 - 30 = 80 g per 100 g of water, so crystals = 50.0 x 80 / 210 = 19.05 g, which agrees with Step 4.",
          "Step 6 (A1): Final answer: about 19.0 g of potassium nitrate crystallise, and the mother liquor left at 20 degrees C is itself a saturated solution of mass 50.0 g - 19.0 g = 31.0 g."
        ],
        "keyTakeaway": "Work through the mass of water rather than the mass of solution: a steep solubility curve means cooling returns most of the dissolved salt as crystals."
      },
      {
        "id": "ex-che-water-2",
        "title": "Expressing the Concentration of a Sodium Chloride Solution Two Ways",
        "problem": "25.0 g of sodium chloride is dissolved in 200.0 g of water to give a solution whose measured volume is 202 cm3. Calculate the concentration of the solution as a percentage by mass and also in grams per cubic decimetre.",
        "stepByStepSolution": [
          "Step 1 (M1): Percentage by mass is the mass of solute divided by the mass of the whole solution, multiplied by 100, so the total mass of the solution must be found first.",
          "Step 2 (A1): Mass of solution = 25.0 g + 200.0 g = 225.0 g, so percentage by mass = 25.0 / 225.0 x 100 = 11.11%, which is 11.1% to three significant figures.",
          "Step 3 (M1): A concentration in g/dm3 is the mass of solute divided by the volume of solution in dm3, and since 1 dm3 = 1000 cm3, 202 cm3 = 202 / 1000 = 0.202 dm3.",
          "Step 4 (A1): Concentration = 25.0 g / 0.202 dm3 = 123.76 g/dm3, which is 124 g/dm3 to three significant figures.",
          "Step 5 (M1): Note why the two answers differ: the first divides by 225.0 g of solution, the second by the measured volume 0.202 dm3, so neither follows from the other without the density.",
          "Step 6 (M1): Reasonableness check: had the solution occupied 250 cm3 the concentration would have been 100 g/dm3, and since the measured volume is smaller, a value above 100 g/dm3 is expected.",
          "Step 7 (A1): Final answer: the solution is 11.1% sodium chloride by mass and 124 g/dm3 by mass per volume, which is 124 / 58.5 = 2.12 mol/dm3, taking the relative formula mass of NaCl as 23.0 + 35.5 = 58.5."
        ],
        "keyTakeaway": "Percentage by mass divides by the mass of the whole solution while g/dm3 divides by the volume of solution, so state the denominator used and never treat one as the other."
      }
    ],
    "quiz": {
      "id": "quiz-che-water-solutions",
      "topicId": "shs1-che-t3-water-solutions-suspension-colloid",
      "title": "Water and Solutions Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-water-solutions-1",
          "quizId": "quiz-che-water-solutions",
          "questionText": "Which substance and colour change form the standard test for the presence of water?",
          "optionA": "Cobalt chloride paper, which turns from pink to blue in the presence of water",
          "optionB": "White anhydrous copper(II) sulphate turning blue",
          "optionC": "Limewater turning milky",
          "optionD": "Orange methyl orange turning yellow",
          "correctOption": "B",
          "subConcept": "Tests for water",
          "explanation": "Anhydrous copper(II) sulphate is white and forms blue CuSO4.5H2O with water, which is the standard test. The cobalt chloride change is blue to pink, so the direction stated in option A is reversed and wrong; limewater tests for carbon(IV) oxide and methyl orange is an indicator for acids and alkalis.",
          "remediationTip": "Write a card for each test reagent: colour before, colour after, and the substance it proves, then sort the cards into gas tests and water tests."
        },
        {
          "id": "q-che-water-solutions-2",
          "quizId": "quiz-che-water-solutions",
          "questionText": "Boiling removes one class of water hardness because it decomposes the salt responsible. Which salt causes that hardness?",
          "optionA": "Calcium sulphate",
          "optionB": "Magnesium chloride",
          "optionC": "Calcium hydrogencarbonate",
          "optionD": "Sodium trioxocarbonate(IV)",
          "correctOption": "C",
          "subConcept": "Hardness and its removal",
          "explanation": "Temporary hardness is due to dissolved calcium hydrogencarbonate, and boiling decomposes it: Ca(HCO3)2 -> CaCO3 + H2O + CO2, leaving insoluble calcium trioxocarbonate(IV) behind. Calcium sulphate and magnesium chloride cause permanent hardness, which boiling does not touch, and sodium trioxocarbonate(IV) is the washing soda used to remove hardness rather than a cause of it.",
          "remediationTip": "Tabulate cause, method of removal and residue for temporary and permanent hardness, and learn the two equations with their state symbols."
        },
        {
          "id": "q-che-water-solutions-3",
          "quizId": "quiz-che-water-solutions",
          "questionText": "Which observation distinguishes a colloid from a true solution?",
          "optionA": "The mixture is homogeneous throughout",
          "optionB": "The particles pass through ordinary filter paper",
          "optionC": "The mixture settles on standing and can be decanted",
          "optionD": "A beam of light passing through it becomes visible",
          "correctOption": "D",
          "subConcept": "Colloids and the Tyndall effect",
          "explanation": "Colloid particles are large enough to scatter light, so a torch beam is seen in a dark room; this Tyndall effect is absent in a true solution. Being homogeneous and passing through filter paper are properties the two classes share, while settling on standing and decanting belong to a suspension.",
          "remediationTip": "Set out three samples in a dark room, salt water, a drop of milk in water, and clay water, and shine a torch through each until the classes are automatic."
        },
        {
          "id": "q-che-water-solutions-4",
          "quizId": "quiz-che-water-solutions",
          "questionText": "A saturated solution of a salt is best described as one in which",
          "optionA": "no more of the salt dissolves at the stated temperature, undissolved solid being in equilibrium with the dissolved salt",
          "optionB": "the solution holds the largest mass of any solute its solvent can ever hold",
          "optionC": "the solvent has been evaporated until the salt first appears",
          "optionD": "one gram of the salt is dissolved in every cubic decimetre of the solution",
          "correctOption": "A",
          "subConcept": "Saturation",
          "explanation": "Saturation is an equilibrium at a given temperature between dissolved and undissolved solute, so no more will dissolve at that temperature. Option B ignores the temperature and the wide differences in solubility between salts, evaporation until crystals first appear is a way of reaching saturation rather than its definition, and one gram per cubic decimetre is an arbitrary concentration.",
          "remediationTip": "Restate the definition with its three required elements: no more dissolving, at a stated temperature, with undissolved solute present."
        },
        {
          "id": "q-che-water-solutions-5",
          "quizId": "quiz-che-water-solutions",
          "questionText": "Which salt powders as it loses water of crystallisation to a dry atmosphere?",
          "optionA": "Sodium hydroxide pellets",
          "optionB": "Copper(II) sulphate crystals",
          "optionC": "Calcium trioxocarbonate(IV)",
          "optionD": "Washing soda decahydrate, Na2CO3.10H2O",
          "correctOption": "D",
          "subConcept": "Water of crystallisation and efflorescence",
          "explanation": "Washing soda decahydrate loses most of its water of crystallisation in dry air and crumbles to Na2CO3.H2O, the classic efflorescent salt. Sodium hydroxide does the opposite and dissolves in the water it absorbs, which is deliquescence; copper(II) sulphate crystals are a hydrate but are stable in air, and calcium trioxocarbonate(IV) is insoluble and carries no water of crystallisation.",
          "remediationTip": "Make a three-word ladder for hydrates in air: effloresce, deliquesce, hygroscopic, and place one example against each rung."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t3-classification-of-oxides",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 11,
    "title": "Oxides: Acidic, Basic, Amphoteric and Neutral",
    "description": "Metal and non-metal oxides and how each reacts with water, acids and bases; the amphoteric behaviour of aluminium and lead oxides; the neutral oxides CO, NO and N2O; the peroxide and superoxide idea; the oxides of phosphorus and sulphur in the air; and the litmus test on oxides.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• An oxide is a compound of an element with oxygen; classification by acid-base behaviour into basic, acidic, amphoteric and neutral oxides is a favourite WASSCE topic.\n• Metallic oxides are generally basic: sodium oxide, calcium oxide and copper(II) oxide neutralise acids to give salt and water only.\n• Basic oxides of group I and II react with water to form alkalis: Na2O + H2O -> 2NaOH and CaO + H2O -> Ca(OH)2.\n• Non-metallic oxides are generally acidic: carbon(IV) oxide, sulphur(IV) oxide and sulphur(VI) oxide dissolve in water to form acids that turn blue litmus red.\n• CO2 + H2O -> H2CO3 (carbonic acid), SO2 + H2O -> H2SO3 (sulphurous acid), SO3 + H2O -> H2SO4 (sulphuric acid).\n• Acidic oxides also react with bases: CO2 + 2NaOH -> Na2CO3 + H2O, showing the oxide behaves as an anhydride of the acid.\n• Amphoteric oxides react with both acids and bases to form salt and water; the classics are aluminium oxide and lead(II) oxide, also zinc oxide and copper(II) oxide under stronger conditions.\n• Al2O3 + 6HCl -> 2AlCl3 + 3H2O proves its basic side, and Al2O3 + 2NaOH -> 2NaAlO2 + H2O proves its acidic side.\n• Neutral oxides show no acid-base character: carbon(II) oxide CO, nitrogen(II) oxide NO and dinitrogen(I) oxide N2O do not form salts with acids or bases and do not change litmus colours.\n• Carbon(II) oxide is a dangerous neutral gas from incomplete combustion of charcoal and fuel in poorly ventilated rooms.\n• A peroxide contains the O2 2- linkage, for example sodium peroxide Na2O2, which with water gives hydrogen peroxide: Na2O2 + 2H2O -> 2NaOH + H2O2; superoxides such as KO2 carry still more oxygen per metal.\n• Sulphur and phosphorus oxides enter the air from smelting and biomass burning; SO2, SO3 and P4O10 dissolve in rainwater to acids, producing acid rain that corrodes roofs and acidifies soils and rivers.",
    "detailedNotes": {
      "overview": "Oxides are everywhere, from the rust on a trotro bodywork to the lime a farmer digs into soil, and this topic sorts them by their chemical character rather than by list-learning. Basic oxides come mainly from metals and neutralise acids; acidic oxides come from non-metals and turn damp litmus red; amphoteric oxides such as aluminium oxide and lead(II) oxide answer to both acids and bases; and neutral oxides like carbon(II) oxide take no side at all. You will learn the water and litmus tests that identify each class in the laboratory, write the balanced equations that WAEC expects, and extend the picture with peroxides and superoxides, which carry extra oxygen beyond the ordinary oxide. The environmental strand follows sulphur and phosphorus oxides into the air and into acid rain, with real consequences for Ghanaian roofs, rivers and cocoa soils.",
      "introduction": "Run the classification as a laboratory decision tree. Take a small sample of each oxide offered in the GES kit, test damp blue and red litmus against it or its suspension in water, then add dilute hydrochloric acid to one portion and dilute sodium hydroxide to another, recording dissolution. Sort the results into four columns: basic dissolves in acid only, acidic turns litmus red or dissolves in base, amphoteric dissolves in both, neutral does neither. After the practical, write six equations from memory: Na2O and water, SO3 and water, CuO and sulphuric acid, CO2 and sodium hydroxide, Al2O3 with hydrochloric acid, and Al2O3 with sodium hydroxide.",
      "realWorldContext": "Ghanaian daily chemistry is oxide chemistry. Charcoal burned in a sleeping room gives off carbon(II) oxide, the neutral oxide, when air is short, and because it is odourless and does not change litmus it goes unnoticed, which is why stove use must be in ventilated spaces. Farmers in the middle belt apply quicklime, CaO, a basic oxide, to sweeten acidic soils, exactly the neutralisation chemistry of the classroom. Around smelting and refining zones at Tema and the goldfields, sulphur(IV) oxide from furnaces rises and later dissolves in rain as sulphurous and sulphuric acid, and the resulting acid rain corrodes zinc roofing sheets and lowers the pH of streams, a story of acidic oxides written across the landscape.",
      "objectives": [
        "Define and classify oxides as basic, acidic, amphoteric or neutral with named examples of each class",
        "Write balanced equations for the reactions of oxides with water, acids and bases",
        "Carry out litmus and acid-and-base dissolution tests to identify the class of an unknown oxide",
        "Distinguish peroxides and superoxides from ordinary oxides and explain the environmental behaviour of sulphur and phosphorus oxides in the air"
      ],
      "sections": [
        {
          "title": "Basic Oxides and Acidic Oxides",
          "content": "Metal oxides are in bulk basic: they neutralise acids to give nothing but a salt and water, so copper(II) oxide dissolves in dilute sulphuric acid to leave a blue copper(II) sulphate solution, CuO + H2SO4 -> CuSO4 + H2O, and magnesium oxide behaves the same with hydrochloric acid. The oxides of the very reactive metals also combine directly with water to form alkalis: sodium oxide gives sodium hydroxide, Na2O + H2O -> 2NaOH, and calcium oxide gives calcium hydroxide, CaO + H2O -> Ca(OH)2. Non-metal oxides are the mirror image, acidic in character. Dissolve carbon(IV) oxide in water and the solution contains carbonic acid, H2CO3, which turns blue litmus red; sulphur(IV) oxide dissolves to sulphurous acid and sulphur(VI) oxide to sulphuric acid. Acidic oxides also react straight with bases: carbon(IV) oxide is absorbed by sodium hydroxide solution forming sodium carbonate and water. The litmus test on the oxide or its aqueous suspension is the quickest laboratory classification, and each acid formed is the same acid whose anhydride the oxide is called.",
          "bulletPoints": [
            "Basic oxides are mostly metallic: CuO, MgO, Na2O, CaO; they neutralise acids to salt and water.",
            "Group I and II oxides plus water give alkalis: Na2O -> NaOH, CaO -> Ca(OH)2.",
            "Acidic oxides are mostly non-metallic: CO2, SO2, SO3, P4O10; their water solutions turn blue litmus red.",
            "SO3 + H2O -> H2SO4 and CO2 + H2O -> H2CO3; the oxide is the acid's anhydride.",
            "CO2 + 2NaOH -> Na2CO3 + H2O shows acidic oxides also react with bases, not only with water."
          ],
          "keyTakeaway": "Metal oxides lean basic, non-metal oxides lean acidic; litmus plus a trial with acid or base sorts them in minutes.",
          "realWorldExample": "The milk of lime sprayed on tanks at a Water Resources commission intake and the calcium hydroxide pits used by fish farmers both exploit CaO's basic character, neutralising acidic compounds the way the classroom equation with an acid shows."
        },
        {
          "title": "Amphoteric and Neutral Oxides",
          "content": "Some oxides refuse to pick a side. Amphoteric oxides react with both acids and bases, each time producing a salt and water. Aluminium oxide is the standard case: with dilute hydrochloric acid it dissolves as a base, Al2O3 + 6HCl -> 2AlCl3 + 3H2O, and with concentrated sodium hydroxide solution it dissolves as an acid, Al2O3 + 2NaOH -> 2NaAlO2 + H2O, forming sodium aluminate. Lead(II) oxide, PbO, repeats the double behaviour with the same two reagents, and examiners also accept this test pattern for zinc oxide. Neutral oxides take no side at all: carbon(II) oxide, CO, nitrogen(II) oxide, NO, and dinitrogen(I) oxide, N2O, form no salt with either acids or bases and leave both litmus papers unchanged in water. The distinction matters beyond the syllabus: carbon(II) oxide's neutrality and its silent production in smoky charcoal rooms, with no litmus change and no smell, is why detectors and ventilation, not smell tests, protect sleepers.",
          "bulletPoints": [
            "Amphoteric oxides dissolve in acids and in bases, each reaction yielding a salt plus water.",
            "Al2O3 + 6HCl -> 2AlCl3 + 3H2O; Al2O3 + 2NaOH -> 2NaAlO2 + H2O: the pair of equations WAEC expects.",
            "PbO (and ZnO) share the double behaviour; Al2O3 and PbO head the syllabus list.",
            "Neutral oxides CO, NO and N2O form no salts and do not change litmus colour in water.",
            "CO is neutral, odourless and produced by incomplete combustion, hence its asphyxiation danger."
          ],
          "keyTakeaway": "Amphoteric means answers-to-both, neutral means answers-to-neither; the acid-and-base dissolution pair is the deciding test.",
          "realWorldExample": "Bauxite and laterite soils rich in aluminium oxide weather across the Ashanti region; the oxide's amphoteric chemistry is one reason soil scientists must measure pH before recommending liming rates for cocoa."
        },
        {
          "title": "Peroxides, Superoxides and Oxides in the Air",
          "content": "Not every oxygen compound fits the oxide classes. Peroxides contain the oxygen pair O2 2- linked together, as in sodium peroxide, Na2O2, and hydrogen peroxide, H2O2; sodium peroxide with water yields sodium hydroxide and hydrogen peroxide, Na2O2 + 2H2O -> 2NaOH + H2O2, and the fizzing release of oxygen on warming is the visible sign of the extra oxygen held. Superoxides, such as potassium superoxide KO2, pack still more oxygen per metal atom and are used in self-contained breathing apparatus because they release oxygen with moisture. Back in the open air, combustion and smelting deliver acidic oxides: sulphur(IV) oxide from furnace gases and fuel impurities, further oxidised to sulphur(VI) oxide, and the dense white smoke of burning phosphorus, phosphorus(V) oxide P4O10, which grabs water violently. These gases dissolve in rainwater to sulphurous, sulphuric and phosphoric acid, and the acid rain that results corrodes roofing sheets, harms lake and river life and leaches nutrients from farm soil.",
          "bulletPoints": [
            "Peroxides carry the O2 2- unit: Na2O2 and H2O2; they release oxygen effervescence with water or on warming.",
            "Na2O2 + 2H2O -> 2NaOH + H2O2 marks the difference from a plain oxide like Na2O.",
            "Superoxides such as KO2 hold even more oxygen and regenerate oxygen in breathing apparatus.",
            "Burning phosphorus gives P4O10, an acidic oxide with fierce affinity for water.",
            "SO2, SO3 and P4O10 in air dissolve in rain to acids; acid rain corrodes metal roofs and acidifies water bodies and soils.",
            "Safety: handle and test pungent oxide gases only in a fume hood or open ventilated area, with damp litmus pre-moistened."
          ],
          "keyTakeaway": "Peroxides and superoxides are the oxygen-rich cousins of oxides, and the acidic oxides of sulphur and phosphorus are the chemical agents of acid rain.",
          "realWorldExample": "Roofing sheets near smelting activity show premature pitting and paint failure, and farmers downstream report fish losses after heavy rains, both fingerprints of sulphur oxides turning rainwater mildly to sulphuric acid."
        }
      ],
      "commonMistakes": [
        "Calling every metal oxide basic without thinking: aluminium oxide and lead(II) oxide are amphoteric, and examiners set exactly that trap.",
        "Confusing carbon(II) oxide CO, a neutral oxide, with carbon(IV) oxide CO2, an acidic oxide; one letter in the formula changes the whole class.",
        "Writing the amphoteric test with only the acid reaction and forgetting the base reaction, losing the half that proves amphoterism.",
        "Omitting state symbols and water products, so litmus answers say merely turns red without stating which paper, which colour and which ion caused it."
      ],
      "wassceExamTips": [
        "Paper 1 classification items are fastest with the charge hint: high metal character means basic, non-metal means acidic, and Al, Pb, Zn oxides go to the amphoteric column from memory.",
        "In Paper 2, when asked how to prove an oxide is amphoteric, name both reagents, dilute hydrochloric acid and sodium hydroxide solution, give both observations of dissolution, and back each with its balanced equation for full method marks.",
        "For environmental parts, always connect the named oxide to its acid in rainwater, SO2 or SO3 to sulphurous and sulphuric acid, and state one concrete effect; schemes award the chain, not a lone gas name.",
        "In Paper 3 practical, the oxide stations expect damp litmus observations in both directions and the white residue of an insoluble oxide dissolving only in acid; record observation and inference in two separate columns."
      ],
      "summaryChecklist": [
        "Can I classify a named oxide as basic, acidic, amphoteric or neutral and defend it with a reaction?",
        "Can I write the equations of Na2O, CaO, CO2, SO2 and SO3 with water, and of CuO with an acid?",
        "Can I prove amphoterism of Al2O3 or PbO with the acid and base equation pair?",
        "Can I explain why CO, NO and N2O are neutral and what makes CO hazardous?",
        "Can I distinguish peroxides and superoxides from oxides and trace sulphur and phosphorus oxides to acid rain?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-classification-of-oxides-1",
        "title": "Sorting Three Powders with Acid and Base",
        "problem": "A school kit holds magnesium oxide powder, aluminium oxide powder and a jar of sulphur(IV) oxide gas. Describe tests that classify each, and write the equation pairs that prove the amphoteric member.",
        "stepByStepSolution": [
          "Step 1 (M1): Test the gas jar first: add a little water to the sulphur(IV) oxide jar, shake and dip damp blue litmus; it turns red, marking the oxide acidic.",
          "Step 2 (M1): Add dilute hydrochloric acid to a portion of each solid: magnesium oxide dissolves readily, and aluminium oxide also dissolves, so both could be basic; record the observations before concluding.",
          "Step 3 (M1): Add dilute sodium hydroxide solution to a fresh portion of each and warm gently: magnesium oxide shows no reaction, while aluminium oxide dissolves.",
          "Step 4 (A1): Conclude from the pattern: MgO dissolves in acid only so it is basic; Al2O3 dissolves in acid and in base so it is amphoteric; the SO2 sample acidifies water so it is acidic.",
          "Step 5 (M1): Write the acid proof for Al2O3 with balancing: Al2O3 + 6HCl -> 2AlCl3 + 3H2O, checking 2 Al, 6 Cl, 6 H and 3 O on each side.",
          "Step 6 (A1): Write the base proof: Al2O3 + 2NaOH -> 2NaAlO2 + H2O, checking 2 Al, 2 Na, 5 O and 2 H on each side; together the two balanced equations carry the full proof of amphoterism."
        ],
        "keyTakeaway": "One oxide is only proven amphoteric when both half-reactions are shown, dissolution in acid with its equation and dissolution in base with its equation."
      },
      {
        "id": "ex-che-classification-of-oxides-2",
        "title": "Reacting Mass with a Basic Oxide",
        "problem": "8.0 g of copper(II) oxide is dissolved in dilute sulphuric acid: CuO + H2SO4 -> CuSO4 + H2O. Calculate the mass of anhydrous copper(II) sulphate formed. (Ar: Cu = 64, S = 32, O = 16, H = 1.)",
        "stepByStepSolution": [
          "Step 1 (M1): Compute Mr of CuO: 64 + 16 = 80; convert the given mass to moles: n = 8.0 / 80 = 0.1 mol.",
          "Step 2 (M1): Read the mole ratio from the balanced equation: 1 CuO gives 1 CuSO4, so 0.1 mol of copper(II) sulphate forms.",
          "Step 3 (M1): Compute Mr of CuSO4: 64 + 32 + 4 x 16 = 160.",
          "Step 4 (M1): Convert moles of product to mass: m = n x Mr = 0.1 x 160.",
          "Step 5 (A1): Mass of anhydrous copper(II) sulphate = 16.0 g.",
          "Step 6 (M1): Sanity check the chemistry: the black basic oxide dissolves to give the blue salt solution, and the product mass must exceed the oxide mass because sulphuric acid residues have joined it, which 16.0 g against 8.0 g confirms."
        ],
        "keyTakeaway": "A basic oxide is just another stoichiometry partner: moles in, one-to-one ratio, mass out, and the colour change from black solid to blue solution tells the same story."
      }
    ],
    "quiz": {
      "id": "quiz-che-classification-of-oxides",
      "topicId": "shs1-che-t3-classification-of-oxides",
      "title": "Classification of Oxides Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-classification-of-oxides-1",
          "quizId": "quiz-che-classification-of-oxides",
          "questionText": "An oxide is described as amphoteric. What does this mean?",
          "optionA": "It dissolves in water to give both acid and base",
          "optionB": "It reacts with both acids and bases to form salt and water",
          "optionC": "It reacts with neither acids nor bases",
          "optionD": "It exists in two solid forms at different temperatures",
          "correctOption": "B",
          "subConcept": "Definition of amphoteric oxides",
          "explanation": "Amphoteric oxides such as Al2O3 and PbO neutralise acids in one reaction and bases in another, yielding salt and water each time. Reacting with neither defines a neutral oxide, and dissolving to give both acid and base is not the definition.",
          "remediationTip": "Say the word in halves to remember it: amphi means both, so both acid and base get neutralised."
        },
        {
          "id": "q-che-classification-of-oxides-2",
          "quizId": "quiz-che-classification-of-oxides",
          "questionText": "Which of these oxides is neutral?",
          "optionA": "Carbon(IV) oxide",
          "optionB": "Sulphur(IV) oxide",
          "optionC": "Nitrogen(V) oxide, N2O5",
          "optionD": "Carbon(II) oxide",
          "correctOption": "D",
          "subConcept": "Identifying neutral oxides",
          "explanation": "Carbon(II) oxide, CO, forms no salts with acids or bases and does not change litmus, placing it with NO and N2O among neutral oxides. CO2, SO2 and N2O5 are all acidic oxides that form acids in water.",
          "remediationTip": "Keep the neutral list as a trio, CO, NO and N2O, and drill that CO is the dangerous odourless member."
        },
        {
          "id": "q-che-classification-of-oxides-3",
          "quizId": "quiz-che-classification-of-oxides",
          "questionText": "Carbon(IV) oxide is bubbled through distilled water and damp blue litmus paper is dipped in the solution. What is observed?",
          "optionA": "The blue litmus turns red, because carbonic acid has formed",
          "optionB": "The blue litmus turns green, because the solution is neutral",
          "optionC": "No colour change, because CO2 is a neutral oxide",
          "optionD": "The paper is bleached white by the gas",
          "correctOption": "A",
          "subConcept": "Litmus test on an acidic oxide",
          "explanation": "CO2 dissolves to carbonic acid, H2CO3, and acids turn blue litmus red, the standard test identifying an acidic oxide. CO2 is not neutral, and bleaching belongs to chlorine chemistry, not this gas.",
          "remediationTip": "Always finish the sentence in your notes: gas plus water gives named acid, acid turns blue litmus red."
        },
        {
          "id": "q-che-classification-of-oxides-4",
          "quizId": "quiz-che-classification-of-oxides",
          "questionText": "Sodium oxide is added to water. Which statement describes the product correctly?",
          "optionA": "A neutral suspension of sodium hydroxide that leaves litmus unchanged",
          "optionB": "Sodium hydroxide solution that turns red litmus blue, pH above 7",
          "optionC": "Sodium carbonate solution formed directly from the oxide",
          "optionD": "Dilute sodium hydroxide and hydrogen gas evolved together",
          "correctOption": "B",
          "subConcept": "Basic oxide with water",
          "explanation": "Na2O + H2O -> 2NaOH gives a strongly basic solution, red litmus turns blue and pH exceeds 7. No hydrogen is released by this combination, and carbonate would require carbon(IV) oxide as a reactant.",
          "remediationTip": "Link group I oxide plus water to alkali every time, with the litmus colour pair written beside the equation."
        },
        {
          "id": "q-che-classification-of-oxides-5",
          "quizId": "quiz-che-classification-of-oxides",
          "questionText": "Which observation proves that lead(II) oxide is amphoteric?",
          "optionA": "It dissolves in dilute hydrochloric acid only",
          "optionB": "It dissolves in both dilute hydrochloric acid and dilute sodium hydroxide solution",
          "optionC": "It fizzes in water releasing oxygen",
          "optionD": "It turns damp blue litmus red",
          "correctOption": "B",
          "subConcept": "Proving amphoterism experimentally",
          "explanation": "Dissolution in both reagents, with salt and water formed each time, is the defining pattern: acid action shows its basic side and alkali action its acidic side. Acid-only dissolution would merely prove a basic oxide.",
          "remediationTip": "Recall the two-tube test as one rule: an amphoteric oxide disappears in both tubes, nothing else."
        }
      ]
    }
  },
  {
    "id": "shs1-che-t3-energy-changes-in-reactions",
    "subjectId": "chemistry",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 12,
    "title": "Energy Changes in Chemical Reactions",
    "description": "Exothermic and endothermic reactions with everyday Ghanaian examples, temperature change and the heat absorbed or released, activation energy, bond breaking and bond making, simple energy-level diagrams, heat of combustion and food energy, the calorimeter idea and safe handling of exothermic dilution.",
    "isFreeTrial": false,
    "keyNotes": "• Every chemical reaction involves an energy change; the total energy is conserved, but it moves between the chemicals and their surroundings as heat.\n• An exothermic reaction gives out heat to the surroundings, so the temperature of the mixture rises; examples are the combustion of charcoal and gas, the neutralisation of an acid by a base, and the respiration of food in the body.\n• An endothermic reaction takes heat in from the surroundings, so the temperature falls; examples are photosynthesis, the thermal decomposition of limestone, and the dissolving of ammonium chloride in water.\n• Temperature rise or fall is only an indication; a thermometer reading before and after, with the change noted, is the observation an examiner wants, not the word hot.\n• Bond breaking needs energy (it is endothermic) and bond making releases energy (it is exothermic); the overall enthalpy change is energy taken to break bonds minus energy given out making new bonds.\n• If more energy is released forming product bonds than was used breaking reactant bonds, the reaction is exothermic and the enthalpy change is written negative; the reverse gives an endothermic reaction with a positive value.\n• Activation energy is the minimum energy the reacting particles need before a reaction can start; it is the small hump on an energy-level diagram, and a match or spark supplies it when lighting charcoal.\n• A catalyst lowers the activation energy without being used up, so more particles can react at the same temperature; it does not change the overall energy given out.\n• Energy-level diagrams put the chemicals on a vertical energy axis; for an exothermic change the products sit lower than the reactants and the difference is the heat released.\n• Heat of combustion is the energy released when one mole of a substance burns completely in oxygen; it is measured by burning a known mass and heating a known volume of water.\n• Heat measured in a calorimeter uses Q = m c delta T; for water the specific heat capacity c is 4200 J per kg per degree Celsius, so 0.2 kg of water warmed by 15 degrees gains 0.2 x 4200 x 15 = 12600 J, that is 12.6 kJ.\n• Food energy is measured the same way by burning dried food under a can of water; fats give the most energy per gram, then carbohydrates and proteins, which is why a groundnut-based diet is energy dense.\n• Diluting concentrated sulphuric(VI) acid is strongly exothermic; always pour the acid slowly into the water with stirring, never water into the acid, because the heat can flash the acid out of the beaker.\n• Use eye protection for all calorimetry and dilution work, keep the draft shield on the balance when weighing fuels, and never seal a reacting mixture in a closed tube where pressure builds.",
    "detailedNotes": {
      "overview": "Reactions do more than change substances; they carry energy with them. This topic teaches you to sort reactions into those that give out heat, the exothermic group, and those that take heat in, the endothermic group, using everyday Ghanaian examples from the charcoal stove to the growing cassava leaf. You will learn where that energy comes from, the breaking and making of chemical bonds, and how a small push called activation energy starts the whole process. The practical side shows how heat is measured with a calorimeter and the formula Q = m c delta T, and applies the same idea to the energy we get from burning food and fuel. The topic closes on safe handling, because diluting strong acid and burning fuels both release heat that can harm the unwary student.",
      "introduction": "Study in three moves. First fix the two definitions and give one example of each until they are instant. Second, learn the bond story, energy in to break and energy out to make, and practise drawing a simple energy-level diagram for an exothermic and an endothermic change, labelling reactants, products, activation energy and the overall change. Third, drill the calorimeter number, Q = m c delta T, with c for water taken as 4200 J per kg per degree, converting cm3 of water to kg by assuming one gram per cm3. Do one heating sum every day and keep a thermometer-reading table tidy; that table is exactly what Paper 3 asks you to produce.",
      "realWorldContext": "Ghanaian homes run on combustion energy: charcoal braziers, kerosene stoves and LPG cylinders all release the heat of combustion that this topic measures, and the cook who arranges glowing charcoal knows the match that supplies activation energy. The same energy change appears inside the body as respiration, where a bowl of waakye or groundnut soup is slowly oxidised to keep you warm and moving. Farmers see the endothermic side in photosynthesis, which traps solar energy in cocoa and maize leaves. On building sites, quicklime made by heating limestone stores heat in a chemical change, and the labourer who slakes it with water watches the mixture steam, a vivid exothermic lesson. In the school laboratory at Kumasi or Cape Coast, the acid-into-water dilution rule is a daily safety habit taught before any student touches a reagent bottle.",
      "objectives": [
        "Define exothermic and endothermic reactions and give two named examples of each from daily life",
        "Explain the energy change of a reaction in terms of bond breaking needing energy and bond making releasing energy",
        "Draw and label a simple energy-level diagram showing activation energy and the overall enthalpy change",
        "Calculate heat absorbed or released with Q = m c delta T and relate it to the heat of combustion of fuels and foods"
      ],
      "sections": [
        {
          "title": "Two Kinds of Energy Change: Giving Out and Taking In",
          "content": "A chemical reaction either pushes heat into the surroundings or pulls heat from them, and these are the two great classes you must never confuse. In an exothermic reaction the temperature of the reacting mixture rises because energy leaves the chemicals as heat; the burning of charcoal, the neutralisation of an acid by a base, the rusting of iron, the respiration of food in your body and the setting of slaked lime on water are all exothermic. In an endothermic reaction the mixture loses heat to the chemicals, so its temperature falls and the container can feel cool; photosynthesis, the thermal decomposition of limestone into quicklime, and the dissolving of ammonium chloride in water are the standard examples. The word to report is temperature change with direction, not hot or cold, because hot is a feeling and a rise of, say, six degrees Celsius is a measurement. Examiners award the mark when you say the temperature of the surroundings increased for an exothermic change and decreased for an endothermic one, so build that phrasing into every answer.",
          "bulletPoints": [
            "Exothermic: heat given out, temperature of surroundings rises; combustion, neutralisation, respiration, rusting.",
            "Endothermic: heat taken in, temperature falls; photosynthesis, thermal decomposition, dissolving ammonium chloride.",
            "Report a measured temperature change with its direction, never the words hot or cold.",
            "Energy is conserved overall; it only moves between the chemicals and the surroundings.",
            "The reverse of an exothermic reaction is endothermic by the same amount of energy."
          ],
          "keyTakeaway": "Ask one question for any reaction: does the thermometer go up or down? Up is exothermic, down is endothermic, and the reasoning follows from there.",
          "realWorldExample": "A woman banking hot water for a bath sees the same principle as a neutralisation flask: when quicklime meets water on a building site the slaking mixture steams and heats because the change dumps energy into the surroundings."
        },
        {
          "title": "Where the Energy Comes From: Bonds and Activation Energy",
          "content": "The heat of a reaction is really a bond-accounting exercise. Breaking bonds always needs energy because you are pulling attractive forces apart, so bond breaking is endothermic; forming new bonds always releases that stored energy, so bond making is exothermic. The overall enthalpy change is the energy taken to break the reactant bonds minus the energy given out when the product bonds form. When the money paid in forming new bonds exceeds the money spent breaking old ones, the surplus escapes as heat and the reaction is exothermic, written with a negative sign; when the reverse is true the difference is absorbed from the surroundings and the reaction is endothermic, written positive. Nothing starts, however, until the reacting particles are given a first push called the activation energy, the minimum energy needed for a collision to lead to reaction. This shows on an energy-level diagram as a small hump above the reactants; a match supplies it when you light charcoal, and a catalyst supplies an easier route by lowering that hump without being consumed and without altering the total energy released.",
          "bulletPoints": [
            "Bond breaking needs energy (endothermic); bond making releases energy (exothermic).",
            "Enthalpy change = energy to break reactant bonds minus energy released forming product bonds.",
            "Exothermic means more energy is released making bonds than absorbed breaking them; the value is negative.",
            "Activation energy is the minimum energy for a successful collision, drawn as the hump on the diagram.",
            "A catalyst lowers activation energy but does not change the overall energy given out or taken in."
          ],
          "keyTakeaway": "Do the bond sum: subtract the make-energy from the break-energy; a negative result is exothermic, a positive result is endothermic.",
          "realWorldExample": "A trotro mechanic striking a spark to start an engine is paying the activation energy of petrol combustion; once the fuel-air mixture burns, the bond-making step floods out more energy than the spark ever spent."
        },
        {
          "title": "Measuring Heat: Calorimetry, Fuels and Safe Dilution",
          "content": "Heat is measured with a calorimeter, which is simply an insulated vessel holding a known mass of water whose temperature change reveals the energy transferred. The calculation uses Q = m c delta T, where m is the mass of water in kilograms, delta T is the temperature rise in degrees Celsius, and c is the specific heat capacity of water, 4200 J per kg per degree. A copper can of 200 cm3 of water is treated as 0.2 kg because water has a density of one gram per cm3, so a rise of 15 degrees records 0.2 x 4200 x 15 = 12600 J, that is 12.6 kJ. To compare fuels this heat is divided by the moles of fuel burnt, giving the heat of combustion in kJ per mole; foods are measured the same way by burning a dried sample under the can, which is why fats, the most energy-rich class, are the fuel of choice in a groundnut-based diet. School results run below true data-book values because heat escapes to the air and the can; wrapping the can, shielding from drafts and stirring to spread the heat shrink that error. Dilution belongs in the same safety chapter: concentrated sulphuric(VI) acid releases dangerous heat when it meets water, so the acid is poured slowly into the water while stirring, never the reverse, with eye protection on and no closed tube anywhere near a warming mixture.",
          "bulletPoints": [
            "Calorimeter formula: Q = m c delta T with c for water = 4200 J/kg/degree.",
            "Treat 200 cm3 of water as 0.2 kg since water has density one gram per cm3.",
            "Heat of combustion = heat measured divided by moles of fuel burnt; foods use the same method.",
            "School values sit low because heat escapes; insulation, drafting shields and stirring reduce the loss.",
            "Dilution safety: add acid slowly to water with stirring, wear eye protection, never water into acid."
          ],
          "keyTakeaway": "Convert volume of water to mass, multiply by 4200 and the temperature rise, and the joules follow; then divide by moles for the molar heat.",
          "realWorldExample": "A family kitchen comparing a charcoal bag with an LPG cylinder is running a crude calorimeter: whichever fuel warms the same pot of water further carries more energy per cedi, the very ratio your combustion sum computes."
        }
      ],
      "commonMistakes": [
        "Writing that an exothermic reaction has a high temperature rather than stating that heat is given out and the temperature of the surroundings rises; the direction of heat flow, not the reading alone, earns the mark.",
        "Claiming bond breaking releases energy; bond breaking always needs energy, and it is bond making that gives energy out, a reversal that costs the reasoning mark every year.",
        "Saying a catalyst supplies energy or makes a reaction give out more heat; a catalyst only lowers activation energy and speeds the change, leaving the overall energy value untouched.",
        "Reporting the answer to a calorimeter sum without units, or leaving 12600 J where the question asks for kJ; carry the unit and convert by dividing by 1000 when the answer is required in kilojoules.",
        "Adding water to concentrated acid when diluting; the correct order is acid into water with stirring, and the wrong order is treated as a safety error that loses the mark outright."
      ],
      "wassceExamTips": [
        "Paper 1 objective items test the exothermic or endothermic label on a named process; learn four examples of each and sort combustion, neutralisation and respiration as exothermic at once.",
        "In Paper 2 structured energy questions, marks are split between the definition, the bond-sum sentence and the diagram; draw the energy-level curve with reactants, products and the activation hump all labelled.",
        "For calorimetry always show three lines, mass in kg, the substitution into Q = m c delta T, and the answer with its unit; method marks are given on the substitution even if a later slip changes the figure.",
        "Paper 3 or alternative-practical may hand you a before-and-after thermometer reading and ask for the heat change; report both readings to the same precision and state the temperature rise with its unit.",
        "Never omit the safety wording in a dilution or combustion part; examiners expect eye protection and the acid-into-water rule named, and that sentence is scored separately from the chemistry."
      ],
      "summaryChecklist": [
        "Can I define exothermic and endothermic and give two named examples of each with the correct temperature direction?",
        "Can I explain the energy change of a reaction as the bond-breaking minus bond-making balance?",
        "Can I sketch and label an energy-level diagram showing activation energy and the overall change for both types?",
        "Can I compute heat with Q = m c delta T using 4200 J/kg/degree and convert it to a molar heat of combustion?",
        "Can I state the safe dilution rule and one calorimeter precaution with correct units throughout?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-energy-1",
        "title": "Heat of Combustion of Ethanol from a Calorimeter Reading",
        "problem": "In a school calorimeter experiment, burning 0.46 g of ethanol (C2H5OH) raised the temperature of 200 cm3 of water from 22 degrees Celsius to 37 degrees Celsius. Take the specific heat capacity of water as 4200 J/kg/degree and assume one cm3 of water has a mass of one gram. Calculate the heat absorbed by the water and the molar heat of combustion of ethanol. (C = 12, H = 1, O = 16.)",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the water volume to mass: 200 cm3 x 1 g/cm3 = 200 g = 0.2 kg.",
          "Step 2 (M1): Temperature rise delta T = 37 - 22 = 15 degrees Celsius.",
          "Step 3 (M1): Apply the calorimeter formula Q = m c delta T = 0.2 x 4200 x 15.",
          "Step 4 (A1): Heat absorbed by the water = 12600 J = 12.6 kJ.",
          "Step 5 (M1): Moles of ethanol burnt = 0.46 g / 46 g per mol = 0.01 mol (molar mass = 46).",
          "Step 6 (A1): Molar heat of combustion = 12.6 kJ / 0.01 mol = 1260 kJ per mol of ethanol."
        ],
        "keyTakeaway": "Route every calorimeter sum the same way: volume to mass, then Q = m c delta T for the joules, then divide by moles of fuel for the molar value."
      },
      {
        "id": "ex-che-energy-2",
        "title": "Using Bond Energies to Classify a Reaction",
        "problem": "Hydrogen reacts with chlorine according to H2 + Cl2 -> 2HCl. The mean bond energies are H-H 436 kJ/mol, Cl-Cl 242 kJ/mol and H-Cl 431 kJ/mol. Calculate the enthalpy change of the reaction and state whether it is exothermic or endothermic.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation: H2 + Cl2 -> 2HCl.",
          "Step 2 (M1): Energy needed to break the reactant bonds = 436 (one H-H) + 242 (one Cl-Cl) = 678 kJ.",
          "Step 3 (M1): Energy released forming the product bonds = 2 x 431 (two H-Cl bonds) = 862 kJ.",
          "Step 4 (M1): Enthalpy change = energy to break minus energy to make = 678 - 862.",
          "Step 5 (A1): delta H = -184 kJ per mol of reaction.",
          "Step 6 (A1): The value is negative, so more energy is released than absorbed; the reaction is exothermic."
        ],
        "keyTakeaway": "Subtract the make-energy from the break-energy; a negative answer is exothermic and a positive answer is endothermic."
      }
    ],
    "quiz": {
      "id": "quiz-che-energy-changes-in-reactions",
      "topicId": "shs1-che-t3-energy-changes-in-reactions",
      "title": "Energy Changes in Reactions Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-energy-1",
          "quizId": "quiz-che-energy-changes-in-reactions",
          "questionText": "Which of the following processes is endothermic?",
          "optionA": "Burning of charcoal",
          "optionB": "Neutralisation of an acid by a base",
          "optionC": "Respiration of food in the body",
          "optionD": "Photosynthesis in a green leaf",
          "correctOption": "D",
          "subConcept": "Exothermic and endothermic reactions",
          "explanation": "Photosynthesis absorbs solar energy to build glucose, so it is endothermic. Combustion, neutralisation and respiration all release heat and are exothermic.",
          "remediationTip": "List four exothermic and four endothermic processes and say each aloud with the direction the thermometer moves."
        },
        {
          "id": "q-che-energy-2",
          "quizId": "quiz-che-energy-changes-in-reactions",
          "questionText": "A reaction is exothermic because",
          "optionA": "more energy is released forming new bonds than is absorbed breaking the old bonds",
          "optionB": "more energy is absorbed breaking bonds than is released making them",
          "optionC": "no bonds are broken during the change",
          "optionD": "the temperature of the surroundings always falls",
          "correctOption": "A",
          "subConcept": "Bond breaking and bond making",
          "explanation": "Bond breaking needs energy and bond making gives it out; when the make total beats the break total the surplus is released as heat. Option B describes an endothermic change and option D reverses the temperature effect.",
          "remediationTip": "Write the one-line sum, break minus make, and remember a negative result means heat given out."
        },
        {
          "id": "q-che-energy-3",
          "quizId": "quiz-che-energy-changes-in-reactions",
          "questionText": "The minimum energy that reacting particles must have before a reaction can begin is called the",
          "optionA": "heat of combustion",
          "optionB": "specific heat capacity",
          "optionC": "activation energy",
          "optionD": "enthalpy of neutralisation",
          "correctOption": "C",
          "subConcept": "Activation energy",
          "explanation": "Activation energy is the hump on the energy-level diagram; a spark or match supplies it. The other options are all measures of heat quantity, not the starting push.",
          "remediationTip": "Sketch the diagram once and circle the hump, then label it activation energy until the word sticks to the picture."
        },
        {
          "id": "q-che-energy-4",
          "quizId": "quiz-che-energy-changes-in-reactions",
          "questionText": "How much heat is absorbed by 500 cm3 of water when its temperature rises by 10 degrees Celsius? (c = 4200 J/kg/degree; 1 cm3 of water has mass 1 g)",
          "optionA": "4200 J",
          "optionB": "21000 J",
          "optionC": "2100 J",
          "optionD": "210000 J",
          "correctOption": "B",
          "subConcept": "Calorimetry calculation",
          "explanation": "Mass = 500 cm3 = 0.5 kg, so Q = 0.5 x 4200 x 10 = 21000 J. Using 1 kg instead of 0.5 kg gives 42000 J, and treating the answer as 500 kg gives 210000 J.",
          "remediationTip": "Convert cm3 to kg before substituting; divide the volume by 1000 so 500 cm3 becomes 0.5 kg."
        },
        {
          "id": "q-che-energy-5",
          "quizId": "quiz-che-energy-changes-in-reactions",
          "questionText": "Which is the safe way to dilute concentrated sulphuric(VI) acid?",
          "optionA": "Pour water quickly into the acid in the bottle",
          "optionB": "Heat the acid first so it mixes faster",
          "optionC": "Seal the two liquids in a tube and shake them",
          "optionD": "Add the acid slowly to the water while stirring",
          "correctOption": "D",
          "subConcept": "Safety with exothermic dilution",
          "explanation": "Dilution of concentrated acid is strongly exothermic; acid is added to water with stirring so the heat disperses safely. Adding water to acid, option A, flashes the hot acid out, and sealing a warming mixture in a tube lets pressure build dangerously.",
          "remediationTip": "Memorise the phrase acid into water, never the reverse, and pair it with eye protection every time."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t1-gases-and-air",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "The Air, Oxygen, Carbon(IV) Oxide and Other Gases",
    "description": "The composition of air and the laboratory preparation, collection and testing of oxygen, carbon(IV) oxide, hydrogen, chlorine and ammonia, with gas-volume calculations, the chemistry of combustion and rusting, and the uses and hazards of each gas.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Air is a mixture, not a compound: about 78% nitrogen and 21% oxygen by volume, roughly 0.9% argon, about 0.04% carbon(IV) oxide, variable water vapour and traces of other gases.\n• To show air is about one-fifth oxygen: pass 100 cm3 of air to and fro over heated copper turnings between two syringes; copper takes the oxygen (2Cu + O2 -> 2CuO) and about 20 cm3 is lost.\n• Oxygen is prepared by pouring hydrogen peroxide over manganese(IV) oxide catalyst: 2H2O2 -> 2H2O + O2; the MnO2 is unchanged and can be recovered by filtration.\n• Test for oxygen: the gas relights a glowing splint; collect over water because oxygen is only slightly soluble in water.\n• Carbon(IV) oxide: marble chips (CaCO3) with dilute hydrochloric acid: CaCO3 + 2HCl -> CaCl2 + H2O + CO2; collect by downward delivery because it is denser than air and partly dissolves in water.\n• Test for CO2: bubbling through limewater gives a white milkiness, Ca(OH)2 + CO2 -> CaCO3 + H2O; excess CO2 clears the milkiness again because soluble Ca(HCO3)2 forms.\n• Hydrogen: zinc granules with dilute sulphuric(VI) acid: Zn + H2SO4 -> ZnSO4 + H2; the lightest gas, so collect over water or by upward delivery.\n• Test for hydrogen: a lighted splint burns it away at the jar mouth with a squeaky pop; a 2:1 mixture with air explodes.\n• Chlorine: warm manganese(IV) oxide with concentrated hydrochloric acid: MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2; greenish-yellow, poisonous and denser than air; prepare in a fume hood, damp blue litmus is reddened then bleached.\n• Ammonia: heat ammonium chloride with slaked lime: 2NH4Cl + Ca(OH)2 -> CaCl2 + 2H2O + 2NH3; extremely soluble, so collect by upward delivery only; turns damp red litmus blue and gives white fumes with a rod dipped in concentrated HCl.\n• Collection method follows from solubility and density: over water for slightly soluble oxygen and hydrogen, upward delivery for lighter-than-air ammonia and hydrogen, downward delivery for denser-than-air CO2, SO2 and Cl2.\n• Combustion is fast reaction with oxygen giving heat and light; rusting is slow corrosion of iron that needs both oxygen and water; painting, greasing or galvanising (the zinc coating on roofing sheets) keeps air and water off the metal.\n• One mole of any gas occupies 22.4 dm3 at s.t.p. (0 degrees C and 1 atmosphere) and 24 dm3 at r.t.p.; 0.25 mol of CO2 is 5.6 dm3 at s.t.p. and 6 dm3 at r.t.p.\n• Gas volume ratios equal mole ratios: for 2H2 + O2 -> 2H2O, 40 cm3 of hydrogen need 20 cm3 of oxygen; for CH4 + 2O2 -> CO2 + 2H2O, 25 cm3 of methane need 50 cm3 of oxygen and give 25 cm3 of CO2.\n• Uses and hazards: oxygen for medical care and steel-making, hydrogen for ammonia and margarine production, chlorine for killing germs in treated water, ammonia for nitrogen fertilisers; chlorine and ammonia are toxic, and CO2 pools in pits and empty drums where it excludes air.",
    "detailedNotes": {
      "overview": "This topic opens the SHS 2 chemistry course with the gases around you every day. You will fix the composition of air in memory and learn the experiments that prove it, then work through the preparation, collection and testing of the five gases WAEC returns to year after year: oxygen, carbon(IV) oxide, hydrogen, chlorine and ammonia. The second half of the topic puts numbers on gases, using the molar volume at s.t.p. and r.t.p. and the fact that gas volume ratios in an equation equal its mole ratios. Combustion and rusting close the topic as the two faces of oxidation, fast and slow.",
      "introduction": "Study in this order: first the composition of air and the copper-turning experiment, then for each gas the three questions a practical examiner asks, how is it made, how is it collected and how is it identified. Set up the apparatus yourself under supervision, delivery tube, trough, gas jars, and say aloud why each jar stands upright or inverted. Finish with ten minutes of gas arithmetic every day: volume equals moles multiplied by 22.4 at s.t.p. or 24 at r.t.p., and ratios come straight from the balanced equation.",
      "realWorldContext": "The Ghana Water Company doses chlorine at the treatment works serving Accra and Tema so that tap water is safe, and sachet-water plants test and filter their own supply; the same disinfection chemistry appears in your textbook. Roofing sheets across Ghana are galvanised, a zinc shield against rust that keeps a rain gutter bright for years where bare iron would corrode. Charcoal burners in a chop-bar kitchen show combustion, while a rusted trotro chassis at a Suame workshop shows the slow oxidation that needs both air and moisture. The ammonia you prepare in the school laboratory at Kumasi or Ho is the same compound the country imports as urea and ammonium sulphate for maize and cocoa farms.",
      "objectives": [
        "State the composition of air by volume and describe an experiment showing oxygen is about one-fifth of it",
        "Write the equation and choose the apparatus for the laboratory preparation of oxygen, carbon(IV) oxide, hydrogen, chlorine and ammonia",
        "Select a gas-collection method from the solubility and density of the gas and justify the choice",
        "Describe the confirmatory test for each of the five gases, including observations with litmus and limewater",
        "Calculate gas volumes from moles using 22.4 dm3 at s.t.p. and 24 dm3 at r.t.p., and combine volumes from equation ratios"
      ],
      "sections": [
        {
          "title": "Air: A Mixture With a Job List",
          "content": "Air is a mixture of gases, and calling it a compound loses the mark because a mixture keeps variable composition, shows no fixed formula and its components can be separated by physical means such as fractional distillation of liquid air. By volume, dry air is about 78% nitrogen, 21% oxygen, 0.9% argon and 0.04% carbon(IV) oxide, plus water vapour whose amount changes with the weather, which is why humid coastal air at Elmina feels heavier than dry harmattan air at Tamale. The classic school experiment for the oxygen fraction passes a measured volume of air, usually 100 cm3, back and forth between two syringes over heated copper turnings; the copper combines with the oxygen to black copper(II) oxide and the surviving gas, mainly nitrogen, occupies about 80 cm3. Nitrogen dilutes reactions, makes fertiliser through ammonia, and is lifted into grain-storage sacks to keep insects away; oxygen supports the combustion of charcoal, kerosene stoves and engine fuel; carbon(IV) oxide is fixed by plants in photosynthesis and returned by respiration and burning.",
          "bulletPoints": [
            "Composition by volume: about 78% nitrogen, 21% oxygen, 0.9% argon, 0.04% carbon(IV) oxide, variable water vapour.",
            "Heated copper turnings remove oxygen from air: 2Cu + O2 -> 2CuO; 100 cm3 of air leaves about 80 cm3.",
            "White phosphorus, alkaline pyrogallol and rusting iron wool are other oxygen absorbers used to show the one-fifth fraction.",
            "Air is separated industrially by cooling and compressing it, then fractional distillation of the liquid.",
            "Nitrogen is used for fertiliser and inert storage; oxygen for breathing, combustion and steel-making; CO2 for fire extinguishers and carbonated drinks."
          ],
          "keyTakeaway": "Quote air percentages by volume, not by mass, and prove the 21% oxygen with an absorption experiment rather than by memory alone.",
          "realWorldExample": "A farmer in the Volta Region stores maize in drums flushed with nitrogen-rich, oxygen-poor air so weevils cannot breed, which is the old school fact that oxygen feeds respiration turned into practical grain keeping."
        },
        {
          "title": "Oxygen and Carbon(IV) Oxide: The Two Workhorse Gases",
          "content": "Oxygen is made in the laboratory by decomposing hydrogen peroxide over manganese(IV) oxide: 2H2O2 -> 2H2O + O2, with the MnO2 acting as a catalyst that speeds the reaction and is left chemically unchanged, so it can be filtered off, dried and used again. The gas gives off bubbles steadily, is collected over water in a trough because it is only slightly soluble, and is confirmed when a glowing splint bursts back into flame. Carbon(IV) oxide is generated from marble chips and dilute hydrochloric acid, CaCO3 + 2HCl -> CaCl2 + H2O + CO2; a thistle funnel and delivery tube in a conical flask serve, the gas is denser than air so upright jars are filled by downward delivery, and a burning splint is extinguished in it. The confirmatory test is limewater: dissolved CO2 precipitates white calcium carbonate, milkiness, and passing more gas redissolves it as soluble calcium hydrogencarbonate. Do not use concentrated HCl (fumes contaminate) or sulphuric(VI) acid with marble, because the CaSO4 formed coats the chips and kills the reaction.",
          "bulletPoints": [
            "2H2O2 -> 2H2O + O2 over MnO2 catalyst; relights a glowing splint; collect over water.",
            "CaCO3 + 2HCl -> CaCl2 + H2O + CO2; extinguishes a flame; collect by downward delivery.",
            "Limewater test: milkiness from CaCO3; excess CO2 clears it as soluble Ca(HCO3)2.",
            "Dilute HCl with marble, never sulphuric(VI) acid, because insoluble CaSO4 coats the chips and stops reaction.",
            "Exhaled air and burning charcoal both raise CO2 levels; keep braziers out of closed rooms."
          ],
          "keyTakeaway": "Match collection to solubility and density: oxygen over water, carbon(IV) oxide by downward delivery, and always name the observation, not just the reagent.",
          "realWorldExample": "Bread and agege (gari) making both rely on CO2: fermentation gas puffs the dough and the same gas, trapped in the bottle of a soda plant in Tema, makes fizzy drinks sparkle."
        },
        {
          "title": "Hydrogen, Chlorine and Ammonia: Preparation and Safety",
          "content": "Hydrogen comes from zinc granules and dilute sulphuric(VI) acid, Zn + H2SO4 -> ZnSO4 + H2; being the lightest gas and poorly soluble, it can be collected over water or by upward delivery into an inverted jar, and the squeaky pop at a lighted splint confirms it. Keep the room flame-free while it is being made, because a 2:1 hydrogen-air mixture explodes. Chlorine is prepared by warming manganese(IV) oxide with concentrated hydrochloric acid, MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2; it is a dense, greenish-yellow, poisonous gas and must be handled in a fume hood or by the technician in the open, never breathed over the bench. It reddens then bleaches damp blue litmus, and damp starch-iodide paper turns blue-black as chlorine displaces iodine. Ammonia, NH3, is made by heating ammonium chloride with slaked lime, 2NH4Cl + Ca(OH)2 -> CaCl2 + 2H2O + 2NH3; it turns damp red litmus blue, smells pungent and raises dense white fumes with concentrated HCl because solid ammonium chloride forms. Its extreme solubility rules out collection over water and gives the dramatic fountain experiment.",
          "bulletPoints": [
            "Zn + dilute H2SO4 gives hydrogen; pop test; no naked flame anywhere near the bench.",
            "MnO2 + concentrated HCl with gentle heat gives chlorine; fume hood, damp litmus reddened then bleached.",
            "2NH4Cl + Ca(OH)2 with heat gives ammonia; alkaline gas, turns red litmus blue, white fumes with HCl.",
            "Ammonia cannot be dried over concentrated H2SO4 (it forms ammonium sulphate) and is collected by upward delivery.",
            "Eye protection for all three; stop the heat as soon as gas flow is enough for the demonstration."
          ],
          "keyTakeaway": "The three identity sentences to memorise: pop for hydrogen, bleaching for chlorine, alkaline litmus and white fumes for ammonia.",
          "realWorldExample": "Chlorine dosing at the Ghana Water Company treatment plant near Kpong, and in sachet-water plants, uses the same oxidising power that bleaches litmus to kill germs in the public supply."
        },
        {
          "title": "Gas Arithmetic: Molar Volume and Volume Ratios",
          "content": "One mole of any gas occupies the same volume at the same temperature and pressure: 22.4 dm3 at s.t.p. (0 degrees C and 1 atmosphere) and 24 dm3 at r.t.p. (about 20 degrees C and 1 atmosphere) as WAEC adopts them. So moles times 24 gives volume at r.t.p.; 0.25 mol of carbon(IV) oxide is 6 dm3 at r.t.p. and 0.25 times 22.4, that is 5.6 dm3, at s.t.p. Because equal volumes of gases contain equal numbers of molecules (Avogadro), the coefficients of a balanced equation are also volume ratios: in 2H2 + O2 -> 2H2O, 40 cm3 of hydrogen need exactly 20 cm3 of oxygen; in CH4 + 2O2 -> CO2 + 2H2O, 25 cm3 of methane burn in 50 cm3 of oxygen and produce 25 cm3 of CO2. Always state the units and the conditions; a number without dm3 or cm3 carries no mark, and quoting 24 instead of 22.4 when the question says s.t.p. is a classic examiner complaint.",
          "bulletPoints": [
            "Molar volume: 22.4 dm3 at s.t.p., 24 dm3 at r.t.p.; volume = moles x molar volume.",
            "Volume ratio = mole ratio from the balanced equation (Avogadro).",
            "2H2 + O2 -> 2H2O: hydrogen and oxygen combine 2:1 by volume.",
            "CH4 + 2O2 -> CO2 + 2H2O: 25 cm3 methane need 50 cm3 oxygen and give 25 cm3 CO2.",
            "Check conditions in the question first; s.t.p. means 22.4, room temperature means 24."
          ],
          "keyTakeaway": "Read s.t.p. or r.t.p. before you multiply, carry the unit dm3 through the working, and take ratios straight from balanced coefficients.",
          "realWorldExample": "A cylinder of LPG in a family kitchen releases gas that burns in a fixed air-to-gas ratio; the burner air hole is adjusted so the mixing is right, the same volume-ratio idea the equation on your page shows."
        }
      ],
      "commonMistakes": [
        "Writing that oxygen relights a burning splint; the scored observation is that it relights a glowing splint, while a burning splint tests hydrogen by the pop.",
        "Collecting ammonia over water or CO2 by upward delivery; ammonia is extremely soluble and both it and hydrogen are lighter than air, while CO2 is denser than air.",
        "Calling air a compound or quoting 78% and 21% as masses; the percentages are by volume and air is a mixture with no formula.",
        "Forgetting to state conditions or units in molar-volume work, then using 22.4 dm3 when the question said r.t.p.; at r.t.p. one mole is 24 dm3.",
        "Claiming iron rusts in dry air alone; rusting needs both oxygen and water, so rust does not form on bone-dry iron kept in a desiccator."
      ],
      "wassceExamTips": [
        "Paper 1 (objective) repeats the collection-and-test table every year; drill gas, preparation equation, collection method and confirmatory test as one four-column card per gas.",
        "In Paper 2 structured questions, name observations fully: milkiness that disappears on excess, or litmus reddened then bleached; half an observation earns half a mark.",
        "Paper 3 alternative-practical asks you to choose apparatus; a thistle funnel and delivery tube with downward delivery for CO2, or a trough for oxygen over water, must match the gas named.",
        "For gas calculations write the equation, the mole ratio, then the volume; method marks (M1) are given for the ratio line even if the final answer (A1) slips.",
        "Never describe preparing chlorine without the fume-hood line; safety wording carries marks and examiners expect eye protection and ventilation named."
      ],
      "summaryChecklist": [
        "Can I state the composition of air by volume and sketch the heated-copper experiment showing the one-fifth oxygen?",
        "Can I write a balanced preparation equation for each of oxygen, carbon(IV) oxide, hydrogen, chlorine and ammonia?",
        "Can I choose and justify a collection method for any gas from its solubility and density?",
        "Can I give the confirmatory test and full expected observation for each of the five gases?",
        "Can I calculate gas volumes at s.t.p. and r.t.p. and combine gas volumes from equation ratios with units stated?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-gases-1",
        "title": "Volume Ratios in the Combustion of Methane",
        "problem": "Methane, CH4, burns in oxygen according to CH4 + 2O2 -> CO2 + 2H2O. All volumes are measured at the same temperature and pressure. Find the volume of oxygen needed for the complete combustion of 25 cm3 of methane and the volume of carbon(IV) oxide produced.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation: CH4 + 2O2 -> CO2 + 2H2O.",
          "Step 2 (M1): Read off the mole ratio CH4 : O2 : CO2 = 1 : 2 : 1.",
          "Step 3 (M1): Apply Avogadro: at the same temperature and pressure the mole ratio is also the volume ratio, so 1 volume of methane uses 2 volumes of oxygen and gives 1 volume of CO2.",
          "Step 4 (A1): Volume of oxygen required = 2 x 25 cm3 = 50 cm3.",
          "Step 5 (A1): Volume of carbon(IV) oxide produced = 1 x 25 cm3 = 25 cm3; the water formed condenses and is not counted as a gas volume on cooling."
        ],
        "keyTakeaway": "Gas-volume questions are mole ratios in disguise; balance first, then multiply the given volume by the coefficients."
      },
      {
        "id": "ex-che-gases-2",
        "title": "Mass of Marble Needed for a Given Volume of Carbon(IV) Oxide",
        "problem": "Calcium carbonate reacts with excess dilute hydrochloric acid: CaCO3 + 2HCl -> CaCl2 + H2O + CO2. What mass of calcium carbonate must be used to generate 6 dm3 of carbon(IV) oxide measured at r.t.p.? (Molar volume at r.t.p. = 24 dm3; Ca = 40, C = 12, O = 16.)",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the volume to moles: moles of CO2 = 6 dm3 / 24 dm3 per mol = 0.25 mol.",
          "Step 2 (M1): Take the mole ratio from the equation: CaCO3 : CO2 = 1 : 1, so moles of CaCO3 = 0.25 mol.",
          "Step 3 (M1): Compute the molar mass of CaCO3 = 40 + 12 + (3 x 16) = 100 g/mol.",
          "Step 4 (M1): Set out the mass calculation: mass = moles x molar mass = 0.25 mol x 100 g/mol.",
          "Step 5 (A1): Mass of calcium carbonate required = 25 g."
        ],
        "keyTakeaway": "Route every gas-volume question the same way: volume to moles, moles across the ratio, moles to mass."
      }
    ],
    "quiz": {
      "id": "quiz-che-gases-air",
      "topicId": "shs2-che-t1-gases-and-air",
      "title": "Gases and Air Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-gases-1",
          "quizId": "quiz-che-gases-air",
          "questionText": "Which gas relights a glowing splint?",
          "optionA": "Oxygen",
          "optionB": "Nitrogen",
          "optionC": "Carbon(IV) oxide",
          "optionD": "Hydrogen",
          "correctOption": "A",
          "subConcept": "Tests for gases",
          "explanation": "Oxygen supports combustion, so a glowing splint bursts back into flame in it. Nitrogen and carbon(IV) oxide extinguish the splint, and hydrogen burns at the jar mouth with a pop instead of relighting a glowing splint.",
          "remediationTip": "Revise the four-column card gas, preparation, collection, test, and say the observation for each of the five gases aloud."
        },
        {
          "id": "q-che-gases-2",
          "quizId": "quiz-che-gases-air",
          "questionText": "Ammonia is collected by upward delivery into an inverted dry jar rather than over water because",
          "optionA": "it is denser than air and slightly soluble",
          "optionB": "it reacts with the glass of a gas jar",
          "optionC": "it is lighter than air and extremely soluble in water",
          "optionD": "it must be kept cold to stay a gas",
          "correctOption": "C",
          "subConcept": "Collection of gases",
          "explanation": "Ammonia has molar mass 17 against about 29 for air, so it rises and is taken by upward delivery, and its extreme solubility makes collection over water impossible. Option A states the opposite properties, which suit a gas like carbon(IV) oxide in density terms.",
          "remediationTip": "Link each gas to two numbers, its molar mass against air 29 and its solubility, before you choose a collection method."
        },
        {
          "id": "q-che-gases-3",
          "quizId": "quiz-che-gases-air",
          "questionText": "What volume is occupied by 0.5 mol of carbon(IV) oxide measured at r.t.p.? (Molar volume at r.t.p. = 24 dm3)",
          "optionA": "11.2 dm3",
          "optionB": "12 dm3",
          "optionC": "24 dm3",
          "optionD": "6 dm3",
          "correctOption": "B",
          "subConcept": "Molar volume",
          "explanation": "Volume = moles x molar volume = 0.5 x 24 = 12 dm3. The trap answer 11.2 dm3 uses 22.4 dm3, which applies only at s.t.p., not at room temperature and pressure.",
          "remediationTip": "Circle s.t.p. or r.t.p. in every question before touching a number; 22.4 belongs to s.t.p., 24 to r.t.p."
        },
        {
          "id": "q-che-gases-4",
          "quizId": "quiz-che-gases-air",
          "questionText": "A lighted splint held at the mouth of a gas jar produces a squeaky pop. The gas is",
          "optionA": "chlorine",
          "optionB": "ammonia",
          "optionC": "carbon(IV) oxide",
          "optionD": "hydrogen",
          "correctOption": "D",
          "subConcept": "Tests for gases",
          "explanation": "The pop is hydrogen burning at the jar mouth as it mixes with air. Chlorine would extinguish or bleach, ammonia does not catch a splint cleanly at the mouth, and carbon(IV) oxide puts the flame out.",
          "remediationTip": "Make a one-line rhyme for each test: pop for hydrogen, relight for oxygen, milky for carbon(IV) oxide."
        },
        {
          "id": "q-che-gases-5",
          "quizId": "quiz-che-gases-air",
          "questionText": "Rusting of iron takes place in the presence of",
          "optionA": "water only",
          "optionB": "oxygen only",
          "optionC": "oxygen (air) and water together",
          "optionD": "carbon(IV) oxide and nitrogen",
          "correctOption": "C",
          "subConcept": "Combustion and rusting",
          "explanation": "Rusting is slow corrosion needing both oxygen and moisture; dry air alone or boiled-out water alone leaves bright iron unchanged, which is exactly why a nail in a sealed, dry tube does not rust. Galvanising, paint and grease stop rust by excluding one or both.",
          "remediationTip": "Sketch the two test-tube controls for rusting, dry air and air-free water, and explain why neither alone gives rust."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t1-acids-bases-salts",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Acids, Bases, Alkalis and Salts",
    "description": "The Arrhenius idea, pH and indicators, strength versus concentration versus basicity, neutralisation, the routes by which salts form from acids acting on metals, carbonates and bases, the preparation of soluble and insoluble salts, and crystallisation with water of crystallisation.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Arrhenius idea: an acid produces hydrogen ions (H+) as the only positive ion in water; a base is an oxide or hydroxide that neutralises acids to salt and water; an alkali is a base that dissolves in water, such as sodium hydroxide, potassium hydroxide or ammonia solution.\n• Acid behaviour in daily life: citric acid in pineapple and oranges, ethanoic acid in vinegar taken with kenkey, lactic acid in sour milk and noni; all turn blue litmus red and react with reactive metals and carbonates.\n• The pH scale runs 0 to 14: below 7 acidic, exactly 7 neutral for pure water, above 7 basic; each unit change is a ten-fold change in hydrogen-ion concentration, so pH 3 is ten times more acidic than pH 4.\n• Indicators: blue litmus to red for acids; methyl orange red in acid and yellow in alkali; phenolphthalein colourless in acid and pink in alkali; universal indicator gives the full colour chart read against a pH scale.\n• Strong acids (hydrochloric, nitric(V), sulphuric(VI)) ionise completely; weak acids (ethanoic, citric, carbonic) ionise partly; strength is about ionisation while concentration is about moles of acid per dm3 of solution, and the two words are not interchangeable.\n• Basicity is the number of replaceable hydrogen ions per molecule: HCl 1, HNO3 1, H2SO4 2, H2CO3 2, H3PO4 3; ethanoic acid CH3COOH is monobasic because only the hydrogen on the O-H group ionises.\n• Neutralisation is H+ + OH- -> H2O, acid plus base giving salt plus water and heat; magnesium hydroxide mixture settles sour stomach, and slaked lime or chalk sweetens acidic cocoa-farm soil.\n• Salt from acid on metal: Zn + H2SO4 -> ZnSO4 + H2, but copper and silver sit below hydrogen in the reactivity series and give no reaction with dilute acids.\n• Salt from acid on carbonate: Na2CO3 + 2HCl -> 2NaCl + H2O + CO2 with brisk effervescence; the same fizz appears when baking soda meets vinegar in the kitchen.\n• Preparing a soluble salt from an insoluble base: warm dilute acid, add the oxide or carbonate in excess, filter off the solid, evaporate the filtrate to the crystallisation point, cool, filter and dry the crystals; this gives copper(II) sulphate crystals from copper(II) oxide and dilute sulphuric(VI) acid.\n• Preparing a soluble salt from two solutions needs a titration: measured alkali plus indicator, acid from a burette to the end point, then evaporate the neutral filtrate; sodium chloride is made this way from NaOH and HCl.\n• Insoluble salts by precipitation (batch method): mix the two soluble solutions, filter the residue, wash with a little distilled water and dry between filter papers; BaCl2 + Na2SO4 -> BaSO4 + 2NaCl.\n• Solubility guide: all nitrates, sodium, potassium and ammonium salts are soluble; most chlorides are soluble except silver and lead chlorides; most sulphates soluble except barium and lead sulphates (calcium sulphate sparingly); most carbonates and hydroxides are insoluble except those of group I and ammonium.\n• Water of crystallisation: crystalline copper(II) sulphate is blue as CuSO4.5H2O, washing soda is Na2CO3.10H2O and gypsum CaSO4.2H2O; white anhydrous copper(II) sulphate turns blue with water, the standard test for water.\n• Dilution and safety: add the acid to the water slowly with stirring, never water to concentrated acid, because the hydration heat can flash the acid out of the beaker; C1V1 = C2V2 carries every dilution sum, so 100 cm3 of 2.0 mol/dm3 acid made to 500 cm3 gives 0.4 mol/dm3.\n• Moles of solute = concentration in mol/dm3 x volume in dm3: 25 cm3 of 0.1 mol/dm3 sodium hydroxide contains 0.0025 mol, and moles = CV is the opening line of every titration calculation.",
    "detailedNotes": {
      "overview": "Acids, bases and salts is the heart of the SHS 2 course and the most examined practical area of WASSCE chemistry. This topic builds the definitions first, the Arrhenius view of hydrogen ions and hydroxide ions, then the pH scale and indicators that measure it. From there it separates three ideas students mix yearly, strength, concentration and basicity, before turning to the reactions that make salts: acid on metal, on carbonate, on base, and on ammonia. The laboratory side covers the two routes to soluble salts, the precipitation route to insoluble salts and the crystallisation that finishes every salt preparation, with water of crystallisation named in the formula.",
      "introduction": "Work through the topic as a ladder: definitions, then measurement of pH, then equations, then preparations. For every acid named on the page write its formula, basicity and one everyday source. For every salt preparation answer four questions before you touch apparatus, which reactants, why those reactants, how is the mixture separated and how are the crystals grown and dried. Keep an observations notebook; Paper 2 marks the observation sentence as heavily as the equation.",
      "realWorldContext": "Ghanaian kitchens handle this chemistry daily: vinegar (ethanoic acid) with kenkey, citrus fruit rich in citric acid, and baking soda fizzing when it meets an acidic dough. Farmers around Nyankpala and on cocoa lands apply lime to raise the pH of sour soils, the same neutralisation the textbook shows. The Ghana Water Company checks pH and alkalinity alongside chlorine dosing at treatment works serving Tema and Kumasi, and alum, a salt, is used to settle turbid water before boiling or disinfection. At Suame Magazine in Kumasi, garages refill lead-acid accumulators with dilute sulphuric(VI) acid, a workplace where the acid-into-water rule and eye protection are survival habits, not exam lines.",
      "objectives": [
        "Define an acid, a base and an alkali according to the Arrhenius idea and give one equation for each",
        "Use the pH scale and the three school indicators to classify solutions, and explain the ten-fold meaning of a pH unit",
        "Distinguish strong from weak and concentrated from dilute, and state the basicity of given acids",
        "Write equations for the action of acids on metals, carbonates, bases and ammonia, and name the salt formed",
        "Choose and carry out the correct salt-preparation route, soluble by excess base or titration, insoluble by precipitation, and finish by crystallisation"
      ],
      "sections": [
        {
          "title": "The Arrhenius Idea, pH and Indicators",
          "content": "Arrhenius defined an acid as a substance that yields hydrogen ions, H+, as the only positive ion when dissolved in water; the hydrogen ion attaches to a water molecule so solutions really carry H3O+ ions, but school equations write H+. A base is a metal oxide or hydroxide, essentially a hydrogen-ion acceptor that neutralises acids to salt and water; when the base dissolves it is called an alkali, delivering hydroxide ions, OH-, to the solution. The pH scale compresses hydrogen-ion concentration into numbers from 0 to 14 with 7 neutral for pure water at the standard conditions; each whole step is a factor of ten, so a solution at pH 3 has ten times the hydrogen-ion concentration of one at pH 4. Litmus, methyl orange, phenolphthalein and universal indicator translate pH into colour; universal indicator strips, the school favourite, are read against a chart, and a pH meter gives the number directly in a better-equipped laboratory.",
          "bulletPoints": [
            "Acid: H+ as the only positive ion in water; base: oxide or hydroxide that neutralises acid; alkali: a soluble base giving OH-.",
            "pH below 7 acid, 7 neutral, above 7 basic; one pH unit means a ten-fold change in hydrogen-ion concentration.",
            "Litmus red in acid; methyl orange red in acid, yellow in base; phenolphthalein colourless in acid, pink in base.",
            "Weak acids are still acids in water solutions at pH between about 3 and 6; strong acids at the same concentration sit near pH 1.",
            "Ammonia solution is the weak alkali of this course: alkaline litmus behaviour with no metal hydroxide present."
          ],
          "keyTakeaway": "Define by the ion produced, measure with the ten-fold pH ladder, and quote an indicator colour change as a complete sentence.",
          "realWorldExample": "A chemistry technician at a senior high school in Cape Coast calibrates the class supply of universal indicator against buffer solutions of pH 4, 7 and 9 so that students reading colours have a fair chart."
        },
        {
          "title": "Strength, Concentration and Basicity Are Three Different Things",
          "content": "Strength describes how far the acid molecules ionise in water. Hydrochloric, nitric(V) and sulphuric(VI) acids ionise completely, so they are strong; ethanoic, citric and carbonic acids ionise only slightly, so they are weak, and dilute ethanoic acid can sit at pH about 4 while dilute hydrochloric acid of the same concentration sits near pH 1. Concentration is the amount of acid dissolved per dm3, described by words like concentrated or dilute and measured in mol/dm3; a concentrated solution of a weak acid such as vinegar-strength ethanoic still ionises only a fraction of its molecules. Basicity counts the replaceable hydrogen ions per molecule: HCl and HNO3 are mono-basic, H2SO4 and H2CO3 di-basic, H3PO4 tri-basic, while ethanoic acid, CH3COOH, is monobasic because the three hydrogens bonded to carbon do not ionise; only the O-H hydrogen does. Keeping the three ideas apart is worth marks in Paper 1 every year.",
          "bulletPoints": [
            "Strong or weak = degree of ionisation; concentrated or dilute = moles of acid per dm3 of solution.",
            "Complete ionisation examples: HCl, HNO3, H2SO4; partial ionisation: CH3COOH, citric acid, H2CO3.",
            "Basicity is replaceable H+ per molecule: 1 for HCl and HNO3, 2 for H2SO4 and H2CO3, 3 for H3PO4.",
            "Ethanoic acid is monobasic even though its formula shows four hydrogens; the carbon-bound three do not ionise.",
            "A weak acid can be concentrated, and a strong acid can be dilute; the words never contradict each other."
          ],
          "keyTakeaway": "Answer strength questions with an ionisation sentence and concentration questions with a mol/dm3 sentence; never swap them.",
          "realWorldExample": "Two bottles on the same shelf, glacial-strength ethanoic acid and 2 mol/dm3 hydrochloric acid: the first is concentrated yet weakly ionised, the second dilute but fully ionised, the exact distinction Paper 1 loves."
        },
        {
          "title": "Neutralisation and the Four Salt-Forming Reactions",
          "content": "Neutralisation is the combination of hydrogen ions from the acid with hydroxide ions from the base to give water, H+ + OH- -> H2O, with the leftover ions pairing as the salt; the reaction gives out heat, so the beaker warms and temperature rise is itself a measured practical. Four routes make salts. Acid on a metal above hydrogen: Zn + H2SO4 -> ZnSO4 + H2, brisk bubbles, while copper and silver do nothing to dilute acids because they sit below hydrogen in the reactivity series. Acid on a carbonate: Na2CO3 + 2HCl -> 2NaCl + H2O + CO2 with effervescence, the fizz that tells you the carbonate has gone. Acid on a base or alkali: CuO + H2SO4 -> CuSO4 + H2O and KOH + HCl -> KCl + H2O. Acid on ammonia: NH3 + HCl -> NH4Cl, giving the ammonium salts that farmers apply as nitrogen fertiliser. Every salt name comes from the acid: chlorides from hydrochloric, sulphates(VI) from sulphuric(VI), nitrates(V) from nitric(V).",
          "bulletPoints": [
            "Net ionic change: H+ + OH- -> H2O; salt ions are the spectators that stay when the water evaporates.",
            "Metal rule: only metals above hydrogen release hydrogen gas from dilute acids; copper and silver are exempt.",
            "Carbonate test in reverse: any carbonate plus acid gives CO2, recognised by limewater milkiness.",
            "Ammonia plus acid gives ammonium salts directly, NH3 + HCl -> NH4Cl, useful for fertiliser manufacture.",
            "Name the salt from its acid: -chloride, -sulphate(VI), -nitrate(V), matching the acid that supplied the anion."
          ],
          "keyTakeaway": "Write the two partner ions first, the metal or ammonium cation and the acid anion, and the salt formula assembles itself.",
          "realWorldExample": "A cook in Tamale watching dough rise with baking soda remembers the same equation: the hydrogen carbonate in the powder meets an acid in the mix and releases CO2 that puffs the bread."
        },
        {
          "title": "Laboratory Preparation of Salts and Crystallisation",
          "content": "Route by solubility. For a soluble salt from an insoluble base, warm the dilute acid in a beaker, add the metal oxide or carbonate in excess so every drop of acid reacts, filter off the leftover solid, then evaporate the clear filtrate to the crystallisation point, test by dipping a cold glass rod and watching crystals form on it, cool so crystals grow, filter and dry between fresh filter papers; copper(II) sulphate crystals, CuSO4.5H2O, are the standard demonstration. For a soluble salt from a soluble base, use a titration: pipette the alkali with indicator into the flask, run in acid from the burette to the end point, repeat without indicator for a concordant titre and evaporate the neutral solution to sodium chloride crystals. For an insoluble salt, the batch method: measure solutions of two soluble salts, mix, filter the precipitate, wash with distilled water to strip adsorbed ions, then dry; BaCl2 + Na2SO4 -> BaSO4 (white precipitate) + 2NaCl. Many salts come out of solution with fixed water in their crystals: washing soda Na2CO3.10H2O, gypsum CaSO4.2H2O; heating drives off that water of crystallisation and white anhydrous copper(II) sulphate turning blue with a drop of water is the standard test for water itself.",
          "bulletPoints": [
            "Soluble salt plus insoluble base: excess base, filter, evaporate to crystallisation point, cool, dry.",
            "Soluble salt from two solutions that must be pure: titration with indicator, then a repeat run without indicator.",
            "Insoluble salt: precipitation, filtration, wash with distilled water, dry between filter papers.",
            "Do not evaporate to dryness when growing crystals; gentle evaporation to the saturation point prevents powdery salt.",
            "Water of crystallisation is written in the formula with a full stop: CuSO4.5H2O, Na2CO3.10H2O, CaSO4.2H2O."
          ],
          "keyTakeaway": "Let the solubility table pick the route first; the practical marks are in the words excess, filter, crystallisation point and wash.",
          "realWorldExample": "Salt winchers taking brine from the lagoons near Ada let the sea water evaporate in the sun so sodium chloride crystals grow on the basin floor, the same crystallisation your beaker completes on a water bath."
        }
      ],
      "commonMistakes": [
        "Calling a concentrated solution a strong one; strength is the fraction ionised and concentration is moles per dm3, and vinegar can be concentrated yet weak.",
        "Writing ethanoic acid as di- or tribasic because CH3COOH shows four hydrogens; only the O-H hydrogen ionises, so its basicity is 1.",
        "Trying to make a salt such as zinc sulphate by evaporating a mixture of sodium sulphate and zinc chloride solutions, which leaves a mixed crystals mess; the batch method is reserved for INSOLUBLE salts like barium sulphate.",
        "Boiling a salt solution straight to dryness and calling the powder crystals; evaporation is stopped at the crystallisation point so proper crystals form on cooling.",
        "Saying copper reacts with dilute hydrochloric acid to give copper(II) chloride and hydrogen; copper lies below hydrogen in the reactivity series and shows no reaction."
      ],
      "wassceExamTips": [
        "Paper 1 sets definition traps on strength versus concentration and on basicity; answer each with its own keyword, ionisation for strength, mol/dm3 for concentration, replaceable H+ for basicity.",
        "In Paper 2 a salt-preparation part question is marked in steps: reagents (M1), method words like excess, filter, crystallisation (M1 each), correct formula of the salt (A1).",
        "For the practical or Paper 3, practise burette reading to 0.05 cm3, report titres to two decimal places and average only concordant titres; method marks cover a consistent table even with one slip.",
        "When asked why anhydrous copper(II) sulphate tests for water, give both the colour change, white to blue, and a reason, formation of hydrated CuSO4.5H2O; a colour alone halves the mark.",
        "Learn the six-line solubility guide word for word; nearly every precipitation question asks you to name an insoluble salt from two solutions."
      ],
      "summaryChecklist": [
        "Can I define acid, base and alkali in Arrhenius language with one equation each?",
        "Can I read a pH value and state both the acidity and the ten-fold comparison with pH 7?",
        "Can I separate strength, concentration and basicity in three clean sentences and give examples?",
        "Can I write the four salt-forming equations and name the salt from acid and partner?",
        "Can I choose the right preparation route for a named salt and describe it with the marked method words?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-acids-1",
        "title": "Finding the Concentration of Sodium Hydroxide by Titration",
        "problem": "25.0 cm3 of sodium hydroxide solution required 20.0 cm3 of 0.10 mol/dm3 hydrochloric acid for complete neutralisation with methyl orange. Calculate the concentration of the sodium hydroxide in mol/dm3 and in g/dm3. (Na = 23, O = 16, H = 1.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation: NaOH + HCl -> NaCl + H2O, mole ratio 1 : 1.",
          "Step 2 (M1): Moles of HCl used = concentration x volume in dm3 = 0.10 x (20.0/1000) = 0.002 mol.",
          "Step 3 (M1): From the 1 : 1 ratio, moles of NaOH in 25.0 cm3 = 0.002 mol.",
          "Step 4 (A1): Concentration of NaOH = 0.002 mol / (25.0/1000 dm3) = 0.08 mol/dm3.",
          "Step 5 (M1): Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol.",
          "Step 6 (A1): Concentration in g/dm3 = 0.08 x 40 = 3.2 g/dm3."
        ],
        "keyTakeaway": "Titration arithmetic always runs moles = CV on the known solution, across the ratio, then back to the unknown volume."
      },
      {
        "id": "ex-che-acids-2",
        "title": "Diluting Concentrated Stock Acid Safely",
        "problem": "A laboratory needs 250 cm3 of 0.4 mol/dm3 sulphuric(VI) acid for a class practical. What volume of 2.0 mol/dm3 stock acid is required, and how should the dilution be carried out?",
        "stepByStepSolution": [
          "Step 1 (M1): Moles required in the final solution = 0.4 x (250/1000) = 0.1 mol.",
          "Step 2 (M1): Volume of stock containing 0.1 mol = 0.1 / 2.0 = 0.05 dm3 = 50 cm3 (the same result from C1V1 = C2V2).",
          "Step 3 (A1): Measure 50 cm3 of the 2.0 mol/dm3 stock acid using a measuring cylinder.",
          "Step 4 (M1): Pour about 150 cm3 of distilled water into the beaker or flask first, then add the acid slowly with continuous stirring; never pour water into the concentrated acid because the released heat can spit the acid out.",
          "Step 5 (A1): Make up to the 250 cm3 mark with distilled water, stir once more, and label the bottle 0.4 mol/dm3 H2SO4 with the date and a corrosive warning."
        ],
        "keyTakeaway": "C1V1 = C2V2 gives the number, and the words acid into water, with stirring, give the safety mark."
      }
    ],
    "quiz": {
      "id": "quiz-che-acids-bases-salts",
      "topicId": "shs2-che-t1-acids-bases-salts",
      "title": "Acids, Bases and Salts Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-acids-1",
          "quizId": "quiz-che-acids-bases-salts",
          "questionText": "According to the Arrhenius idea, an acid is a substance that",
          "optionA": "produces hydroxide ions as the only negative ion in water",
          "optionB": "produces hydrogen ions as the only positive ion in aqueous solution",
          "optionC": "turns red litmus paper blue",
          "optionD": "reacts with metals to release oxygen gas",
          "correctOption": "B",
          "subConcept": "Definitions of acids and bases",
          "explanation": "Arrhenius acids furnish H+ as the only positive cation in solution. Option A defines a base (alkali), option C is the litmus behaviour of a base, and acids liberate hydrogen, not oxygen, from reactive metals.",
          "remediationTip": "Write the two Arrhenius sentences side by side for acid and alkali until each ion is automatic."
        },
        {
          "id": "q-che-acids-2",
          "quizId": "quiz-che-acids-bases-salts",
          "questionText": "Which of the following is a weak acid?",
          "optionA": "Ethanoic acid",
          "optionB": "Hydrochloric acid",
          "optionC": "Sulphuric(VI) acid",
          "optionD": "Nitric(V) acid",
          "correctOption": "A",
          "subConcept": "Strong and weak acids",
          "explanation": "Ethanoic acid ionises only slightly in water, so it is weak; hydrochloric, sulphuric(VI) and nitric(V) acids ionise completely and are strong. The distinction is degree of ionisation, not how dilute the bottle is.",
          "remediationTip": "List the three strong acids of the course as a fixed trio and treat every other common acid as weak unless told otherwise."
        },
        {
          "id": "q-che-acids-3",
          "quizId": "quiz-che-acids-bases-salts",
          "questionText": "What is the basicity of sulphuric(VI) acid, H2SO4?",
          "optionA": "1",
          "optionB": "2",
          "optionC": "3",
          "optionD": "4",
          "correctOption": "B",
          "subConcept": "Basicity of acids",
          "explanation": "Basicity counts replaceable hydrogen ions per molecule; H2SO4 gives two H+ and one sulphate(VI) ion, SO4(2-), so it is di-basic. Choosing 4 comes from counting every hydrogen in the formula instead of the ionisable ones.",
          "remediationTip": "Practise ionising formulas on paper: H2SO4 -> 2H+ + SO4(2-), and circle the H+ coefficient as the basicity."
        },
        {
          "id": "q-che-acids-4",
          "quizId": "quiz-che-acids-bases-salts",
          "questionText": "Which salt can be prepared by the precipitation (batch) method?",
          "optionA": "Sodium chloride",
          "optionB": "Zinc sulphate",
          "optionC": "Barium sulphate",
          "optionD": "Potassium nitrate",
          "correctOption": "C",
          "subConcept": "Salt preparation routes",
          "explanation": "The batch method is for insoluble salts; mixing barium chloride and sodium sulphate solutions precipitates barium sulphate, which is filtered, washed and dried. Sodium chloride, zinc sulphate and potassium nitrate are all soluble, so evaporating their mixtures returns a mixture of salts, not a pure product.",
          "remediationTip": "Recite the solubility guide: all nitrates and sodium, potassium and ammonium salts soluble; most sulphates soluble except barium and lead."
        },
        {
          "id": "q-che-acids-5",
          "quizId": "quiz-che-acids-bases-salts",
          "questionText": "100 cm3 of 2.0 mol/dm3 hydrochloric acid is diluted to a final volume of 500 cm3 with distilled water. What is the new concentration?",
          "optionA": "5.0 mol/dm3",
          "optionB": "2.0 mol/dm3",
          "optionC": "0.2 mol/dm3",
          "optionD": "0.4 mol/dm3",
          "correctOption": "D",
          "subConcept": "Dilution calculations",
          "explanation": "C1V1 = C2V2 gives C2 = 2.0 x 100 / 500 = 0.4 mol/dm3; the moles stay at 0.2 while the volume is multiplied by five. The answer 5.0 mol/dm3 comes from multiplying instead of dividing, a direction-of-dilution slip.",
          "remediationTip": "After every dilution sum ask the sanity question: the bottle grew five times, so must the strength fall to one fifth."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t1-halogens-group-vii-chemistry",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 7,
    "title": "The Halogens: Group VII Chemistry and Displacement",
    "description": "Physical states and colour trend of the halogens, the melting and boiling point trend, displacement reactions of chloride, bromide and iodide, testing for halide ions with silver nitrate, chlorine bleaching and water treatment, the iodine and starch test, fluorine in toothpaste, and the hazards of halogen gases.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The halogens are the group VII (group 17) elements fluorine, chlorine, bromine and iodine; each has seven electrons in its outer shell, so each is a reactive non-metal that gains one electron to form a single negative ion, and each exists as a diatomic molecule, F2, Cl2, Br2 and I2.\n• Physical states at room conditions run down the group: fluorine a pale yellow gas, chlorine a greenish-yellow gas, bromine a fuming red-brown liquid, iodine a grey-black solid that sublimes to violet vapour on heating; the colour deepens and the state changes from gas to liquid to solid as the molecules grow heavier.\n• Melting and boiling points rise down the group because larger molecules have more electrons and stronger intermolecular attractions, so iodine is solid while the light fluorine and chlorine are gases at the same temperature.\n• Reactivity falls down the group: fluorine is the most reactive and iodine the least, because the nucleus attracts an incoming eighth electron less strongly as more shells are added and inner shells screen the charge.\n• Displacement proves the reactivity order: a more reactive halogen pushes a less reactive one out of its salt, Cl2 + 2KBr -> 2KCl + Br2 turns the solution orange-brown, and Br2 + 2KI -> 2KBr + I2 gives a brown iodine colour; chlorine displaces both bromine and iodine and bromine displaces iodine.\n• The single negative halide ions are chloride Cl-, bromide Br- and iodide I-; each metal salt such as sodium chloride carries the ion and gives the tests below.\n• Testing for halide ions: acidify the sample with a little dilute nitric(V) acid, then add silver nitrate solution; chloride gives a white precipitate of silver chloride, bromide a cream precipitate of silver bromide, and iodide a yellow precipitate of silver iodide.\n• The silver halides separate further in ammonia: silver chloride dissolves in dilute ammonia, silver bromide dissolves only in concentrated ammonia, and silver iodide is essentially unaffected; the confirmatory equation is Ag+ + Cl- -> AgCl.\n• Use nitric(V) acid, not hydrochloric acid, to acidify in the halide test, because hydrochloric acid itself adds chloride ions and gives a false white precipitate.\n• Chlorine bleaches by oxidation: it turns damp blue litmus red and then bleaches it white, and it removes colour from dyes; the same oxidising power kills germs, which is why the Ghana Water Company doses treated water with chlorine.\n• Iodine test for starch: a solution containing iodine turns blue-black in the presence of starch, used both in the laboratory and to test foods such as cassava and cooked yam.\n• Fluorine in toothpaste appears as fluoride ions and strengthens tooth enamel against decay; too much fluoride in drinking water mottles teeth, so the amount is carefully controlled.\n• Halogen hazards: all four are toxic and corrosive, chlorine and bromine fumes must be handled only in a fume hood with eye protection, and iodine vapour stains and irritates; never smell a halogen directly, waft the vapour gently toward you.",
    "detailedNotes": {
      "overview": "Group VII gives you one tidy family with a clear trend in every property, which is why WASSCE returns to it each year. This topic fixes the shared outer structure of the halogens and the diatomic way they exist, then reads the physical trends, colour deepening and state moving from gas to liquid to solid down the group, with rising melting and boiling points explained by stronger intermolecular forces. The heart of the chemistry is reactivity falling down the group, demonstrated by displacement, where a heavier or lighter halogen pushes a weaker one out of its salt. The topic then equips you with the halide test using acidified silver nitrate and the color ladder of the silver halides, before closing on the practical chemistry that touches life in Ghana, chlorine bleaching and water treatment, the iodine and starch test and fluoride in toothpaste.",
      "introduction": "Build the family picture first: four elements, seven outer electrons, all diatomic, all gaining one electron. Then learn the two opposite trends as a pair, physical state and boiling point rising down the group while reactivity falls, and be able to give the reason for each. Draw the displacement ladder and write the three equations. For the halide test, memorise white, cream and yellow against chloride, bromide and iodide, and the acidify-with-nitric detail. Finally list the uses with their chemistry sentence, chlorine oxidises germs, iodine gives blue-black with starch, fluoride hardens enamel. A five-minute recall of the four states and three precipitate colours daily is the fastest route to the objective marks.",
      "realWorldContext": "Chlorine treatment at the Ghana Water Company works serving Accra, Tema and Cape Coast, and at sachet-water plants, uses the same oxidising power that bleaches a damp litmus strip; the dose is small but essential to kill waterborne germs linked to cholera outbreaks. Textile workshops that dye cloth in Kumasi know chlorine bleaching from the other side, because the gas strips colour from fabric, which is why effluent from such dyeing is treated before release. The iodine test is not only laboratory work; a cook checking whether a pounded cassava is starchy is running the same reaction that turns iodine blue-black. Fluoride in toothpaste, sold across the country, applies the reactive lightest halogen in a controlled trace amount to fight dental decay, while the school laboratory handles bromine and chlorine only under the fume hood with eye protection, the safety routine the syllabus insists on.",
      "objectives": [
        "Describe the physical states, colours and the melting and boiling point trend of the halogens down the group and explain them",
        "State the reactivity trend of the halogens and prove it with displacement reactions and their equations",
        "Carry out the test for halide ions with acidified silver nitrate and report the white, cream and yellow precipitates",
        "Explain the bleaching and water-treatment action of chlorine, the iodine and starch test, and the use of fluoride in toothpaste"
      ],
      "sections": [
        {
          "title": "One Family, Four Members: Structure and Physical Trend",
          "content": "The halogens occupy group VII, the column holding fluorine, chlorine, bromine and iodine. Each atom ends its outer shell one electron short of a full eight, so all four are reactive non-metals with valency one, and each gains that single electron to form a halide ion with a one minus charge, Cl-, Br-, I-. Because one atom is never stable alone, the elements pair up as diatomic molecules, F2, Cl2, Br2 and I2, a fact that must show in every equation you balance. Read the physical trend down the column and you see the colour deepen and the state change: fluorine is a pale yellow gas, chlorine a greenish-yellow gas, bromine a fuming red-brown liquid, and iodine a grey-black solid that sublimes, turning straight to violet vapour when heated. The melting and boiling points rise in the same direction, so iodine has the highest and fluorine the lowest. The reason is size and attraction: larger molecules carry more electrons and the temporary attractions between them grow stronger, so more heat is needed to pull the molecules apart. Learn the four states with the colours attached, because that pairing is a standing Paper 1 question.",
          "bulletPoints": [
            "Group VII elements: fluorine, chlorine, bromine, iodine; seven outer electrons, valency one, diatomic molecules.",
            "States at room conditions: gas, gas, liquid, solid as you go down; colour deepens throughout.",
            "Iodine sublimes on heating, passing from grey-black solid to violet vapour.",
            "Melting and boiling points rise down the group as larger molecules attract each other more strongly.",
            "Each gains one electron to form a one-minus halide ion, so equations use F2, Cl2, Br2, I2."
          ],
          "keyTakeaway": "Attach a colour and a state to each halogen and a single reason, growing molecules, to the rising boiling points.",
          "realWorldExample": "A shop sign glowing with coloured vapour lamps hints at the same trend: heavier atoms and molecules release their stored energy differently, and iodine violet vapour over a school beaker at Ho mirrors the deepening colour down the family."
        },
        {
          "title": "Reactivity Falls Down the Group: The Displacement Ladder",
          "content": "Whereas the physical properties rise downwards, the chemical reactivity of the halogens falls, and this is the trend examiners test hardest. A halogen reacts by pulling in one electron to complete its shell; fluorine, small and with its nucleus close to the outer shell, grabs that electron most eagerly, while iodine, with many inner shells screening the nuclear charge, is the least eager. So the reactivity order is fluorine greater than chlorine greater than bromine greater than iodine. The clean proof is displacement, in which a more reactive halogen knocks a less reactive one out of its salt solution. Bubble chlorine through potassium bromide solution and the mixture turns orange-brown as bromine is freed, Cl2 + 2KBr -> 2KCl + Br2. Add bromine water to potassium iodide solution and brown iodine appears, Br2 + 2KI -> 2KBr + I2. Chlorine displaces both bromine and iodine, bromine displaces iodine but not chlorine, and iodine displaces neither, so a set of three small test tubes sorts the family into order without a single number. Always write the halogens as diatomic and balance with the coefficient two on the salt and the halide, because an unbalanced equation loses the method mark.",
          "bulletPoints": [
            "Reactivity order, most to least: fluorine, chlorine, bromine, iodine; falls down the group.",
            "Reason: added shells and shielding loosen the pull on the incoming electron downwards.",
            "Cl2 + 2KBr -> 2KCl + Br2; solution turns orange-brown as chlorine displaces bromine.",
            "Br2 + 2KI -> 2KBr + I2; brown iodine appears as bromine displaces iodine.",
            "A halogen displaces only those below it in the group, never those above."
          ],
          "keyTakeaway": "Higher halogen displaces lower halogen from its salt; write the two diatomic equations and the order proves itself.",
          "realWorldExample": "A technician checking bromine levels in treated water can free the bromine with a chlorine dose, the exact displacement you run in the school tube, because chlorine sits above bromine on the ladder."
        },
        {
          "title": "Testing Halides and the Working Chemistry of the Group",
          "content": "To identify a halide ion in solution, take the sample, add a few drops of dilute nitric(V) acid to remove interfering ions, then add silver nitrate solution and read the colour of the precipitate. Chloride gives a white curdy silver chloride, bromide a cream silver bromide, and iodide a yellow silver iodide; the net change is Ag+ + Cl- -> AgCl and its partners. Use nitric(V) acid to acidify and never hydrochloric acid, because hydrochloric acid carries chloride ions and would throw down a false white precipitate. The three silver halides can be told apart further with ammonia: silver chloride dissolves in dilute ammonia, silver bromide only in concentrated ammonia, and silver iodide is almost unaffected. Beyond the test tube the group does real work. Chlorine bleaches by oxidation, reddening damp blue litmus and then bleaching it white, the same oxidising action the Ghana Water Company uses to kill germs in treated supplies. Iodine gives a striking blue-black with starch, the standard test for starch in foods such as cassava. Fluorine, the most reactive of all, is used in toothpaste as fluoride ions to strengthen enamel and cut decay, kept to a small controlled amount because excess fluoride mottles the teeth. Handle every halogen with eye protection, keep chlorine and bromine under the fume hood, and waft rather than sniff.",
          "bulletPoints": [
            "Halide test: acidify with dilute nitric(V) acid, add silver nitrate; white chloride, cream bromide, yellow iodide.",
            "Never use hydrochloric acid to acidify; it adds chloride and gives a false white precipitate.",
            "Silver chloride dissolves in dilute ammonia, silver bromide in concentrated ammonia, silver iodide in neither.",
            "Chlorine bleaches damp litmus by oxidation and disinfects treated water.",
            "Iodine turns blue-black with starch; fluoride in toothpaste strengthens enamel but excess mottles teeth."
          ],
          "keyTakeaway": "Name the acid, the reagent and the precipitate colour in one sentence, and finish every halogen answer with the safety line.",
          "realWorldExample": "A laboratory monitor preparing the class chlorine demonstration keeps the gas jar inside the fume hood with goggles on, because the same oxidising power that clears a dye stain also burns the lungs if breathed."
        }
      ],
      "commonMistakes": [
        "Writing halogens as single atoms, Cl rather than Cl2, then failing to balance equations such as Cl2 + 2KBr -> 2KCl + Br2; the diatomic form is part of the mark.",
        "Claiming halogen reactivity increases down the group; metals lose electrons and rise in reactivity downwards, but halogens gain electrons and fall in reactivity from fluorine to iodine.",
        "Acidifying the halide test with hydrochloric acid; that adds chloride ions and produces a false white precipitate, so the answer must name dilute nitric(V) acid.",
        "Confusing the precipitate colours, cream for white or yellow for cream; the fixed order is chloride white, bromide cream, iodide yellow.",
        "Reporting only the reagent without the observation; examiners want the full sentence, a white precipitate of silver chloride formed, not the words silver nitrate alone."
      ],
      "wassceExamTips": [
        "Paper 1 repeats the physical-state and colour table; drill the four halogens against gas, gas, liquid, solid with their colours until recall is instant.",
        "In Paper 2 a displacement part is marked equation plus observation; write the balanced diatomic equation (M1) and the colour change (A1) as two separate lines to bank both marks.",
        "For the halide test learn the answer as a three-word chain, acidify, add, observe; naming nitric(V) acid rather than hydrochloric is itself a scored point.",
        "Paper 3 alternative-practical may ask you to identify an unknown halide from a precipitate colour; state the ion and the silver halide formed, then the confirmatory ammonia result.",
        "Any halogen description needs the safety line; fume hood for chlorine and bromine and eye protection are words examiners expect to see, and they carry marks."
      ],
      "summaryChecklist": [
        "Can I list the four halogens with their states and colours and explain the rising boiling points?",
        "Can I state the reactivity order and justify it from shells and shielding?",
        "Can I write and balance the two displacement equations with their observations?",
        "Can I describe the acidified silver nitrate test and the three precipitate colours plus the ammonia results?",
        "Can I explain chlorine bleaching and water treatment, the iodine and starch test, and fluoride in toothpaste?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-halogens-1",
        "title": "Masses in a Displacement Reaction",
        "problem": "Chlorine gas is bubbled through potassium bromide solution: Cl2 + 2KBr -> 2KCl + Br2. If 0.02 mol of chlorine reacts completely, calculate the mass of potassium bromide used and the mass of bromine produced. (K = 39, Br = 80.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and read the mole ratio: Cl2 : KBr : Br2 = 1 : 2 : 1.",
          "Step 2 (M1): Moles of KBr = 2 x moles of Cl2 = 2 x 0.02 = 0.04 mol.",
          "Step 3 (M1): Molar mass of KBr = 39 + 80 = 119 g/mol.",
          "Step 4 (A1): Mass of KBr used = 0.04 mol x 119 g/mol = 4.76 g.",
          "Step 5 (M1): Moles of Br2 = 1 x moles of Cl2 = 0.02 mol; molar mass of Br2 = 2 x 80 = 160 g/mol.",
          "Step 6 (A1): Mass of bromine produced = 0.02 mol x 160 g/mol = 3.2 g."
        ],
        "keyTakeaway": "Take the mole ratio straight from the balanced coefficients, then convert moles to grams with the molar mass of the diatomic bromine."
      },
      {
        "id": "ex-che-halogens-2",
        "title": "Silver Chloride Precipitate from a Chloride Sample",
        "problem": "A solution made by dissolving 5.85 g of sodium chloride is treated with excess acidified silver nitrate solution: AgNO3 + NaCl -> AgCl + NaNO3. Calculate the mass of the white silver chloride precipitate formed. (Na = 23, Cl = 35.5, Ag = 108, N = 14, O = 16.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and the mole ratio: NaCl : AgCl = 1 : 1.",
          "Step 2 (M1): Molar mass of NaCl = 23 + 35.5 = 58.5 g/mol.",
          "Step 3 (M1): Moles of NaCl = 5.85 g / 58.5 g/mol = 0.1 mol.",
          "Step 4 (M1): From the 1 : 1 ratio, moles of AgCl = 0.1 mol; molar mass of AgCl = 108 + 35.5 = 143.5 g/mol.",
          "Step 5 (A1): Mass of silver chloride precipitate = 0.1 mol x 143.5 g/mol = 14.35 g."
        ],
        "keyTakeaway": "The halide test is also a mole calculation: one chloride ion gives one silver chloride, so find the moles and multiply by the precipitate molar mass."
      }
    ],
    "quiz": {
      "id": "quiz-che-halogens-group-vii-chemistry",
      "topicId": "shs2-che-t1-halogens-group-vii-chemistry",
      "title": "Halogens and Displacement Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-halogens-1",
          "quizId": "quiz-che-halogens-group-vii-chemistry",
          "questionText": "Which halogen is a fuming red-brown liquid at room conditions?",
          "optionA": "Chlorine",
          "optionB": "Bromine",
          "optionC": "Iodine",
          "optionD": "Fluorine",
          "correctOption": "B",
          "subConcept": "Physical states of the halogens",
          "explanation": "Bromine is the only liquid halogen at room conditions, a fuming red-brown liquid handled under the fume hood. Chlorine and fluorine are gases and iodine is a grey-black solid that sublimes.",
          "remediationTip": "Line the four halogens against gas, gas, liquid, solid and pair each with its colour until the order is reflex."
        },
        {
          "id": "q-che-halogens-2",
          "quizId": "quiz-che-halogens-group-vii-chemistry",
          "questionText": "Which order shows the halogens in decreasing reactivity?",
          "optionA": "I2 > Br2 > Cl2 > F2",
          "optionB": "Cl2 > F2 > I2 > Br2",
          "optionC": "Br2 > I2 > Cl2 > F2",
          "optionD": "F2 > Cl2 > Br2 > I2",
          "correctOption": "D",
          "subConcept": "Reactivity trend",
          "explanation": "Reactivity falls down the group, so fluorine is most reactive and iodine least, giving option D. Option A reverses the true order. The reason is that added shells and shielding weaken the pull on the incoming electron downwards.",
          "remediationTip": "State the trend as a sentence, halogens gain electrons so reactivity falls downwards, and check your order against it."
        },
        {
          "id": "q-che-halogens-3",
          "quizId": "quiz-che-halogens-group-vii-chemistry",
          "questionText": "Acidifying a sample with dilute nitric(V) acid and then adding silver nitrate gives a white precipitate. The ion present is",
          "optionA": "chloride",
          "optionB": "bromide",
          "optionC": "iodide",
          "optionD": "sulphate(VI)",
          "correctOption": "A",
          "subConcept": "Test for halide ions",
          "explanation": "A white precipitate of silver chloride identifies the chloride ion; bromide gives cream silver bromide and iodide gives yellow silver iodide. The fixed order to recall is chloride white, bromide cream, iodide yellow.",
          "remediationTip": "Chant the colour ladder, white cream yellow against chloride bromide iodide, and name the silver halide with each."
        },
        {
          "id": "q-che-halogens-4",
          "quizId": "quiz-che-halogens-group-vii-chemistry",
          "questionText": "Fluoride is added to toothpaste mainly to",
          "optionA": "whiten the teeth quickly",
          "optionB": "give the paste a pleasant taste",
          "optionC": "strengthen tooth enamel and reduce decay",
          "optionD": "act as a foaming detergent",
          "correctOption": "C",
          "subConcept": "Fluorine in toothpaste",
          "explanation": "Fluoride ions harden tooth enamel against acid attack and cut decay, kept to a small controlled dose because excess fluoride mottles teeth. The other options describe unrelated additives, not the purpose of fluoride.",
          "remediationTip": "Remember fluoride as the protective trace halogen, and link too much of it to mottled enamel."
        },
        {
          "id": "q-che-halogens-5",
          "quizId": "quiz-che-halogens-group-vii-chemistry",
          "questionText": "Iodine solution added to a food sample turns blue-black. The sample contains",
          "optionA": "fat",
          "optionB": "starch",
          "optionC": "a reducing sugar",
          "optionD": "protein",
          "correctOption": "B",
          "subConcept": "Iodine and starch test",
          "explanation": "The blue-black colour is the classic iodine test for starch, used in the laboratory and on starchy foods such as cassava. Fat, reducing sugar and protein each need a different test and give no blue-black with iodine.",
          "remediationTip": "Match every food test to one colour word: iodine gives blue-black with starch."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t1-nitrogen-phosphorus-sulphur-chemistry",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 8,
    "title": "Nitrogen, Phosphorus and Sulphur and Their Compounds",
    "description": "Preparation and testing of ammonia, ammonia as a base and fertiliser, nitric(V) acid and its action on metals, phosphorus pentoxide and phosphate fertilisers, sulphur and sulphur dioxide, sulphurous and sulphuric acid, and acid rain and its effects in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Nitrogen is a colourless, inert gas, N2, with a triple bond that makes it unreactive at room temperature; it is collected over water and does not support combustion or relight a splint, so a burning splint is simply extinguished in it.\n• Ammonia, NH3, is prepared in the laboratory by heating an ammonium salt with a base such as slaked lime: 2NH4Cl + Ca(OH)2 -> CaCl2 + 2H2O + 2NH3; it is colourless, has a pungent smell, is extremely soluble in water, is lighter than air so is collected by upward delivery only, and turns damp red litmus blue.\n• Tests for ammonia: it turns damp red litmus blue, is the only common alkaline gas, gives dense white fumes with a glass rod dipped in concentrated hydrochloric acid because solid NH4Cl forms, and turns a glass rod dipped in Nessler's reagent brown.\n• Ammonia acts as a weak base because it accepts a proton in water, NH3 + H2O <-> NH4+ + OH-, giving the hydroxide ions that make its solution alkaline; with acids it forms ammonium salts, NH3 + HCl -> NH4Cl.\n• Ammonia is the raw material of nitrogen fertilisers: the Haber process makes it from nitrogen and hydrogen, N2 + 3H2 <-> 2NH3, over an iron catalyst, and it is then turned into urea, ammonium nitrate and ammonium sulphate which farmers apply to maize and cocoa lands.\n• Nitric(V) acid, HNO3, is a strong oxidising acid; concentrated acid reacts with copper to give copper(II) nitrate, brown nitrogen(IV) oxide fumes and water, Cu + 4HNO3 -> Cu(NO3)2 + 2H2O + 2NO2, while dilute acid with copper gives colourless nitrogen(II) oxide, 3Cu + 8HNO3 -> 3Cu(NO3)2 + 4H2O + 2NO, which turns brown at the jar mouth as NO meets air.\n• Nitric(V) acid with most metals gives no hydrogen because the acid oxidises the hydrogen; with very dilute acid and highly reactive metals such as magnesium a little hydrogen may appear, but the usual products are nitrogen oxides, water and the metal nitrate.\n• Phosphorus burns brightly in excess oxygen to form white dense phosphorus pentoxide, P4O10, which is a powerful drying agent because it reacts violently with water to give phosphoric(V) acid, P4O10 + 6H2O -> 4H3PO4.\n• Phosphate fertilisers such as superphosphate are made by treating phosphate rock with sulphuric(VI) acid; phosphates in the soil supply the energy-transfer and root-growth role of phosphorus for crops.\n• Sulphur is a yellow non-metal that burns with a blue flame in air to form sulphur dioxide, S + O2 -> SO2, a colourless gas with a choking smell that is denser than air and very soluble; it extinguishes a flame and turns acidified potassium dichromate(VI) paper from orange to green.\n• Sulphur dioxide dissolves in water to give sulphurous acid, SO2 + H2O -> H2SO3, a weak acid in which sulphur has oxidation state four; further oxidation of SO2 to SO3 and then to sulphur(VI) acid is the basis of the Contact process, 2SO2 + O2 <-> 2SO3 and SO3 + H2O -> H2SO4.\n• Concentrated sulphuric(VI) acid is a strong acid, a dehydrating agent that chars sugar and wood by removing the elements of water, and an oxidiser; it is used to make fertilisers, dyes, detergents and battery acid, and is always diluted by adding acid to water.\n• Acid rain forms when sulphur dioxide and nitrogen oxides from burning fossil fuels, refinery gases and charcoal dissolve in rainwater to give sulphurous, sulphuric and nitric acids, so the rain has a pH below about 5.6; it acidifies soils and rivers, corrodes metals and buildings, harms crops and speeds the rust of roofing sheets in Ghanaian industrial areas.",
    "detailedNotes": {
      "overview": "This topic gathers three non-metals and their compounds that the syllabus treats as one working block because they meet in fertilisers and in air pollution. You learn the reactive gas ammonia, how it is made, tested and used as a base and the feedstock of nitrogen fertiliser. Then nitric(V) acid and its oxidising action on metals, which explains why it rarely gives hydrogen. The phosphorus section centres on phosphorus pentoxide and phosphate fertilisers, and the sulphur section on sulphur dioxide, sulphurous acid and the route to sulphuric acid. The topic ends where chemistry meets daily life in Ghana, with acid rain from the oxides of sulphur and nitrogen and its effects on soil, water and buildings.",
      "introduction": "Take the elements one at a time and for each answer three questions: what is the element or key gas, how is it prepared and tested, and what is it used for. For ammonia drill the litmus and white-fume tests until they are automatic. For nitric acid, learn the two copper equations, concentrated giving brown NO2 and dilute giving colourless NO. For phosphorus, fix the pentoxide-to-phosphoric acid reaction. For sulphur, memorise S to SO2 to H2SO3 and then the Contact route to sulphuric acid. Draw one flow map linking each oxide to its acid and finally to acid rain, so the pollution answer writes itself in the exam.",
      "realWorldContext": "Nitrogen, phosphorus and sulphur run through Ghanaian farming and industry. Urea and NPK fertilisers applied on maize farms near Techiman and on cocoa lands are made from ammonia, so the pungent gas you test in the laboratory becomes the harvest input. The phosphate component of those same fertilisers comes from treating phosphate rock with acid, the industry that also uses sulphuric acid, imported and handled with the strict acid-into-water rule at plants and depots. Sulphur dioxide that you prepare in a fume hood is the gas released when sulphur-containing fuels and refinery products burn, and when it mixes with rain it produces the acid rain that lowers soil pH around industrial areas, corrodes roofing sheets and metalwork, and weakens crops. Charcoal burning in a closed room and vehicle fumes carry the same lesson in carbon and nitrogen oxides, so the safety habits and the chemistry are taught together.",
      "objectives": [
        "Prepare ammonia in the laboratory, choose its collection method and give the confirmatory tests for it",
        "Explain the basic action of ammonia and its role as the raw material of nitrogen fertilisers",
        "Write the reactions of concentrated and dilute nitric(V) acid with copper and describe phosphorus pentoxide and its use",
        "Describe sulphur, sulphur dioxide, sulphurous and sulphuric acid, and explain the causes and effects of acid rain"
      ],
      "sections": [
        {
          "title": "Ammonia: Preparation, Testing and Its Life as a Fertiliser",
          "content": "Ammonia, NH3, is the one common alkaline gas in the course and the one whose tests you must know cold. In the laboratory it is made by heating an ammonium salt with a base, classically ammonium chloride with slaked lime, 2NH4Cl + Ca(OH)2 -> CaCl2 + 2H2O + 2NH3. The gas is colourless with a sharp pungent smell, is extremely soluble in water so cannot be collected over water, and is lighter than air so it is taken by upward delivery into an inverted dry jar; it cannot be dried over concentrated sulphuric acid because the two combine into ammonium sulphate. Its tests are its identity: damp red litmus turns blue, a rod dipped in concentrated hydrochloric acid held near the gas raises dense white fumes of solid ammonium chloride, and Nessler's reagent gives a brown colouration. Chemically ammonia is a weak base because in water it accepts a proton, NH3 + H2O giving NH4+ and OH-, and those hydroxide ions are what change the litmus. With acids it forms ammonium salts directly, NH3 + HCl -> NH4Cl. The industrial importance of all this is food: the Haber process, N2 + 3H2 giving 2NH3 over an iron catalyst, makes the ammonia from which urea, ammonium nitrate and ammonium sulphate fertilisers are produced, the very bags farmers spread on maize and cocoa lands.",
          "bulletPoints": [
            "Preparation: heat ammonium chloride with slaked lime, 2NH4Cl + Ca(OH)2 -> CaCl2 + 2H2O + 2NH3.",
            "Collect by upward delivery only, since ammonia is lighter than air and extremely soluble in water.",
            "Tests: damp red litmus turns blue; white fumes with concentrated hydrochloric acid; Nessler's reagent turns brown.",
            "Weak base: NH3 + H2O gives NH4+ and OH-; with acids it gives ammonium salts.",
            "Feedstock of fertiliser: Haber process N2 + 3H2 giving 2NH3, made into urea and ammonium salts."
          ],
          "keyTakeaway": "Ammonia is the alkaline gas: litmus blue, white fumes with HCl, upward delivery, and the source of nitrogen fertiliser.",
          "realWorldExample": "The bag of urea on a maize farm at Techiman began as synthetic ammonia, so the pungent gas you collect by upward delivery in the school laboratory is the same compound that feeds the crop."
        },
        {
          "title": "Nitric(V) Acid and the Chemistry of Phosphorus",
          "content": "Nitric(V) acid, HNO3, is a strong acid that is also a powerful oxidising agent, and that second property is why it behaves oddly with metals. Instead of liberating hydrogen as dilute hydrochloric or sulphuric acids do, the concentrated acid oxidises the metal and itself, releasing brown, choking nitrogen(IV) oxide fumes: Cu + 4HNO3 -> Cu(NO3)2 + 2H2O + 2NO2. With dilute nitric acid and copper the main gas is colourless nitrogen(II) oxide, 3Cu + 8HNO3 -> 3Cu(NO3)2 + 4H2O + 2NO, which turns brown at the jar mouth the moment it meets oxygen in the air, because NO is oxidised to NO2. Only with very dilute acid and a highly reactive metal such as magnesium does a little hydrogen appear. All these reactions must be run in a fume hood with eye protection, since the nitrogen oxides are toxic. Phosphorus, the other non-metal here, is a soft, waxy solid, white or yellow, stored under water because it catches fire in air. Burned in excess oxygen it flares brightly to a dense white smoke of phosphorus pentoxide, P4O10. That oxide is a fierce drying agent, reacting vigorously with water to give phosphoric(V) acid, P4O10 + 6H2O -> 4H3PO4. This same phosphate chemistry feeds agriculture: superphosphate fertiliser is made by treating phosphate rock with sulphuric acid, supplying the phosphorus crops need for root growth and energy transfer.",
          "bulletPoints": [
            "Concentrated HNO3 with copper gives brown NO2: Cu + 4HNO3 -> Cu(NO3)2 + 2H2O + 2NO2.",
            "Dilute HNO3 with copper gives colourless NO which browns in air: 3Cu + 8HNO3 -> 3Cu(NO3)2 + 4H2O + 2NO.",
            "Nitric acid gives no hydrogen with most metals because it oxidises the hydrogen instead.",
            "Phosphorus burns in oxygen to white, drying phosphorus pentoxide, P4O10 + 6H2O -> 4H3PO4.",
            "Superphosphate fertiliser is made by treating phosphate rock with sulphuric(VI) acid."
          ],
          "keyTakeaway": "Nitric acid is an oxidising acid, so with copper the gas is a nitrogen oxide, brown NO2 concentrated, colourless NO dilute.",
          "realWorldExample": "A cocoa farmer buying phosphate fertiliser is paying for the same phosphoric chemistry as the pentoxide-to-acid reaction on the page, since the rock phosphate is dissolved into a plant-ready form with acid."
        },
        {
          "title": "Sulphur, Its Oxides and the Acid Rain Problem",
          "content": "Sulphur is a bright yellow, brittle non-metal that burns in air with a blue flame to give sulphur dioxide, S + O2 -> SO2. The gas is colourless with a choking smell, denser than air and very soluble, extinguishes a burning splint, and is recognised by turning acidified potassium dichromate(VI) paper from orange to green, since it acts as a reducing agent. Dissolved in water, sulphur dioxide forms sulphurous acid, SO2 + H2O -> H2SO3, a weak acid in which sulphur carries oxidation state four. Oxidise the gas further and it forms sulphur(VI) oxide, SO3, which with water yields sulphuric(VI) acid, H2SO4; the industrial route, the Contact process, is 2SO2 + O2 reversibly giving 2SO3 over a vanadium(V) oxide catalyst. Concentrated sulphuric(VI) acid is not only a strong acid but a dehydrating agent that chars sugar and wood by stripping the elements of water, and an oxidiser; it is used to make fertiliser, detergents, dyes and battery acid, and is diluted only by pouring acid into water. When the sulphur dioxide and nitrogen oxides from burning sulphur-containing fuels, refinery gases and charcoal escape into damp air, they dissolve in rainwater as sulphurous, sulphuric and nitric acids, so the rain falls with a pH below about 5.6 as acid rain. In Ghana its effects show as lowered soil pH on farmland, corroded roofing sheets and metal structures, harmed crops and acidified water bodies, which is why such emissions are controlled.",
          "bulletPoints": [
            "Sulphur burns with a blue flame: S + O2 -> SO2, a choking, dense, soluble gas that extinguishes a flame.",
            "Sulphur dioxide turns acidified potassium dichromate(VI) paper from orange to green as a reducing agent.",
            "SO2 + H2O -> H2SO3, sulphurous acid; further oxidation gives SO3 and then sulphuric(VI) acid, H2SO4.",
            "Concentrated sulphuric(VI) acid is a strong acid, a dehydrating agent and an oxidiser; dilute acid into water.",
            "Acid rain forms when SO2 and nitrogen oxides dissolve in rain to give acids, lowering pH below 5.6."
          ],
          "keyTakeaway": "Follow sulphur from S to SO2 to H2SO3 to H2SO4; the same oxides that make the acid also cause acid rain.",
          "realWorldExample": "Acid rain from sulphur-rich refinery and fuel gases eats the edges of roofing sheets and lowers soil pH around industrial sites near Tema, the local face of the SO2-to-acid chain learned in the laboratory."
        }
      ],
      "commonMistakes": [
        "Collecting ammonia over water or drying it with concentrated sulphuric acid; ammonia is extremely soluble and reacts with the acid to give ammonium sulphate, so it must be taken by upward delivery and dried over a base.",
        "Saying nitric(V) acid releases hydrogen with copper; the acid oxidises the hydrogen and the gases formed are nitrogen oxides, brown NO2 with concentrated and colourless NO with dilute acid.",
        "Calling sulphur dioxide an oxidising agent when it reduces dichromate(VI); SO2 is a reducing and bleaching gas, and the marked observation is orange paper turning green.",
        "Confusing sulphurous acid H2SO3 with sulphuric acid H2SO4, or forgetting the oxidation states, sulphur being four in sulphurous and six in sulphuric.",
        "Naming only carbon dioxide as the cause of acid rain; the correct culprits are sulphur dioxide and the nitrogen oxides, which form sulphurous, sulphuric and nitric acids in rainwater."
      ],
      "wassceExamTips": [
        "Paper 1 tests the ammonia litmus and white-fume observations directly; recall that ammonia is the only common alkaline gas and turns damp red litmus blue.",
        "In Paper 2 the nitric-acid-on-copper part is marked on the gas and its colour; state brown nitrogen(IV) oxide for concentrated and colourless nitrogen(II) oxide for dilute acid.",
        "For preparation questions name the reagents, the conditions and the collection in one clear sentence, since each detail carries its own mark, and match the collection to solubility and density.",
        "When asked to explain acid rain, write the source oxides, the acids formed and at least two named effects; a list of three effects scores full marks.",
        "In any sulphuric acid dilution or handling part, add the safety line, acid into water with stirring and eye protection; examiners score that wording separately from the chemistry."
      ],
      "summaryChecklist": [
        "Can I prepare ammonia, justify upward delivery and give its litmus and white-fume tests?",
        "Can I explain why ammonia is a base and how it becomes nitrogen fertiliser?",
        "Can I write the concentrated and dilute nitric acid reactions with copper and name the gases?",
        "Can I describe phosphorus pentoxide, its drying action and the phosphate fertiliser link?",
        "Can I trace sulphur to sulphur dioxide to the acids and explain the causes and effects of acid rain?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-nps-1",
        "title": "Percentage of Nitrogen in Ammonium Sulphate Fertiliser",
        "problem": "Ammonium sulphate, (NH4)2SO4, is used as a nitrogen fertiliser. Calculate the percentage by mass of nitrogen in it. (N = 14, H = 1, S = 32, O = 16.)",
        "stepByStepSolution": [
          "Step 1 (M1): Find the molar mass: (NH4)2SO4 = 2 x 14 (N) + 8 x 1 (H) + 32 (S) + 4 x 16 (O) = 28 + 8 + 32 + 64 = 132 g/mol.",
          "Step 2 (M1): Mass of nitrogen in one mole = 2 x 14 = 28 g.",
          "Step 3 (M1): Set out the percentage: percentage nitrogen = (28 / 132) x 100.",
          "Step 4 (A1): Percentage by mass of nitrogen = 21.2%."
        ],
        "keyTakeaway": "Percentage of an element is its total atomic mass in the formula divided by the molar mass, multiplied by 100; count the atoms carefully first."
      },
      {
        "id": "ex-che-nps-2",
        "title": "Volume of Sulphur Dioxide from Burning Sulphur",
        "problem": "Sulphur burns in oxygen according to S + O2 -> SO2. What volume of sulphur dioxide is produced when 16 g of sulphur burns completely, measured at r.t.p.? (S = 32; molar volume at r.t.p. = 24 dm3.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and mole ratio: S : SO2 = 1 : 1.",
          "Step 2 (M1): Moles of sulphur = 16 g / 32 g/mol = 0.5 mol.",
          "Step 3 (M1): From the 1 : 1 ratio, moles of SO2 = 0.5 mol.",
          "Step 4 (A1): Volume of SO2 at r.t.p. = 0.5 mol x 24 dm3/mol = 12 dm3.",
          "Step 5 (A1): At s.t.p. the same 0.5 mol would occupy 0.5 x 22.4 = 11.2 dm3."
        ],
        "keyTakeaway": "Convert mass to moles, read the mole ratio, then multiply by the molar volume; check whether the question asks for s.t.p. or r.t.p."
      }
    ],
    "quiz": {
      "id": "quiz-che-nitrogen-phosphorus-sulphur-chemistry",
      "topicId": "shs2-che-t1-nitrogen-phosphorus-sulphur-chemistry",
      "title": "Nitrogen, Phosphorus and Sulphur Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-nps-1",
          "quizId": "quiz-che-nitrogen-phosphorus-sulphur-chemistry",
          "questionText": "Which observation confirms the presence of ammonia gas?",
          "optionA": "It relights a glowing splint",
          "optionB": "It turns limewater milky",
          "optionC": "It turns damp red litmus blue and gives white fumes with concentrated hydrochloric acid",
          "optionD": "It burns with a squeaky pop",
          "correctOption": "C",
          "subConcept": "Tests for ammonia",
          "explanation": "Ammonia is the only common alkaline gas, so it turns damp red litmus blue and raises white fumes of ammonium chloride with concentrated hydrochloric acid. Relighting a splint is oxygen, milkiness is carbon dioxide and the pop is hydrogen.",
          "remediationTip": "Pair ammonia with two fixed words, alkaline litmus and white fumes, until no other gas matches."
        },
        {
          "id": "q-che-nps-2",
          "quizId": "quiz-che-nitrogen-phosphorus-sulphur-chemistry",
          "questionText": "Ammonia is collected by upward delivery into an inverted jar because it is",
          "optionA": "denser than air and slightly soluble",
          "optionB": "lighter than air and extremely soluble in water",
          "optionC": "heavier than air and insoluble",
          "optionD": "a liquid at room temperature",
          "correctOption": "B",
          "subConcept": "Collection of ammonia",
          "explanation": "Ammonia has molar mass 17 against about 29 for air, so it rises and is taken by upward delivery, and its extreme solubility rules out collection over water. Option A states the opposite properties.",
          "remediationTip": "Quote the two numbers, molar mass 17 and high solubility, before choosing a method for ammonia."
        },
        {
          "id": "q-che-nps-3",
          "quizId": "quiz-che-nitrogen-phosphorus-sulphur-chemistry",
          "questionText": "Which pair of oxides is mainly responsible for acid rain?",
          "optionA": "Carbon(IV) oxide and carbon(II) oxide",
          "optionB": "Nitrogen and oxygen",
          "optionC": "Phosphorus pentoxide and silica",
          "optionD": "Sulphur dioxide and nitrogen oxides",
          "correctOption": "D",
          "subConcept": "Acid rain",
          "explanation": "Sulphur dioxide and nitrogen oxides dissolve in rainwater to give sulphurous, sulphuric and nitric acids, lowering the pH below about 5.6. Carbon(IV) oxide makes only weakly acidic rain, and the other pairs do not form the strong acids.",
          "remediationTip": "Name the two gases, SO2 and the nitrogen oxides, and the three acids they produce; that is the full cause line."
        },
        {
          "id": "q-che-nps-4",
          "quizId": "quiz-che-nitrogen-phosphorus-sulphur-chemistry",
          "questionText": "When copper reacts with concentrated nitric(V) acid, the brown gas evolved is",
          "optionA": "nitrogen(IV) oxide",
          "optionB": "ammonia",
          "optionC": "hydrogen",
          "optionD": "nitrogen(II) oxide",
          "correctOption": "A",
          "subConcept": "Action of nitric acid on metals",
          "explanation": "Concentrated nitric(V) acid is an oxidising acid and gives brown nitrogen(IV) oxide, NO2, with copper. Dilute acid gives colourless nitrogen(II) oxide, option D, and nitric acid does not release hydrogen with copper because it oxidises the hydrogen.",
          "remediationTip": "Keep two cards, concentrated copper brown NO2, dilute copper colourless NO, and rehearse both equations."
        },
        {
          "id": "q-che-nps-5",
          "quizId": "quiz-che-nitrogen-phosphorus-sulphur-chemistry",
          "questionText": "Which gas turns acidified potassium dichromate(VI) paper from orange to green?",
          "optionA": "Chlorine",
          "optionB": "Carbon(IV) oxide",
          "optionC": "Sulphur dioxide",
          "optionD": "Ammonia",
          "correctOption": "C",
          "subConcept": "Test for sulphur dioxide",
          "explanation": "Sulphur dioxide reduces acidified potassium dichromate(VI), changing the paper from orange to green, the standard SO2 test. Chlorine bleaches, carbon dioxide does nothing to dichromate, and ammonia is alkaline.",
          "remediationTip": "Link SO2 to the words reducing agent and orange-to-green, its two signature exam descriptors."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t2-electrochemistry",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 3,
    "title": "Electrolysis, Electroplating and Cells",
    "description": "Electrolytes and non-electrolytes, what discharges at each electrode and why, the selective discharge rules in aqueous work, the faraday charge-mass calculation, electroplating practice, and how cells and batteries turn chemical change into current.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Electrolysis is the chemical decomposition of an electrolyte by a direct electric current; the set-up is called an electrolytic cell and has two electrodes, the cathode on the negative terminal and the anode on the positive terminal.\n• An electrolyte conducts because it carries free ions: molten or aqueous ionic compounds and acid solutions; non-electrolytes such as sugar (sucrose) solution, ethanol and paraffin conduct nothing because their molecules carry no charge.\n• Solid sodium chloride does not conduct: its ions are locked in the lattice and cannot move; only the molten or dissolved state frees them, a fact WAEC repeats as a reason question.\n• Cations travel to the cathode and gain electrons (reduction); anions travel to the anode and lose electrons (oxidation); electrolysis of molten lead(II) bromide gives a silvery bead of lead at the cathode and brown bromine fumes at the anode: Pb2+ + 2e- -> Pb and 2Br- -> Br2 + 2e-.\n• In aqueous solutions water competes through its own H+ and OH- ions, so which species actually discharges depends on position in the electrochemical series, on concentration and on the electrode material.\n• At the cathode of aqueous work: metals below hydrogen, copper and silver, plate out as the metal, while sodium, potassium, calcium, magnesium, zinc and iron ions stay in solution and hydrogen gas is liberated instead.\n• At the anode: a concentrated halide solution gives the halogen; otherwise hydroxide ions discharge and oxygen appears, leaving the solution acidic.\n• Electrolysis of acidulated water (a few drops of dilute sulphuric(VI) acid in water) gives hydrogen at the cathode and oxygen at the anode in a 2 : 1 volume ratio, 2H2O -> 2H2 + O2; the pop test and the relighting glowing splint confirm them, and the acid is left more concentrated as water is removed.\n• Electrolysing concentrated brine (saturated sodium chloride solution) with inert electrodes: hydrogen at the cathode, chlorine at the anode, sodium hydroxide accumulating in the solution, the industrial chlor-alkali route to alkali and bleach.\n• Copper(II) sulphate solution with copper electrodes: cathode gains a copper coating while the anode loses mass and the blue colour is unchanged, the principle of copper purification; with platinum electrodes copper still plates at the cathode but oxygen appears at the anode and the blue fades as the solution turns acidic.\n• Charge in coulombs: Q = I x t with I in amperes and t in seconds; one faraday is 96500 C and is one mole of electrons; moles discharged = Q / (96500 x n), where n is the electrons taken by each ion in the half-equation.\n• Copper takes two electrons, Cu2+ + 2e- -> Cu, so 96500 C deposits only 63.5 / 2 = 31.75 g of copper; silver takes one, Ag+ + e- -> Ag, so one faraday deposits the full 108 g.\n• Electroplating: the object to be plated is made the cathode, the plating metal is the anode, and the electrolyte contains ions of that metal; surfaces are cleaned and polished first or the layer will not stick.\n• A cell turns chemical energy into electrical energy: two unlike metals in an electrolyte, electrons flowing externally from the more reactive metal, the negative terminal, to the less reactive one; the Daniell cell pairs zinc in zinc sulphate with copper in copper sulphate across a salt bridge and copper is the positive terminal.\n• The Leclanche dry cell has a zinc case as the negative terminal, a carbon rod positive terminal, a packed mixture of manganese(IV) oxide with carbon black as depolariser, and damp ammonium chloride paste as electrolyte; the lead-acid accumulator is rechargeable with lead and lead(IV) oxide plates in dilute sulphuric(VI) acid.\n• Ghanaian practice and hazards: torch cells, vehicle accumulators and solar home-system batteries, chrome and nickel plating of trim at Suame Magazine workshops and battery-recycling collection; the hydrogen-oxygen mixture is explosive so no flame near the cell, chlorine work stays in the fume hood, and eye protection goes on whenever an electrolyte is poured.",
    "detailedNotes": {
      "overview": "Electrochemistry splits into two mirror images. Electrolysis forces a non-spontaneous chemical change with an outside direct current, and this topic teaches you what to expect at each electrode in molten and aqueous systems, the selective discharge rules, and the faraday arithmetic connecting coulombs to grams. The cells and batteries half does the opposite, letting a spontaneous redox reaction push electrons round an external wire. Electroplating, the industrial use of electrolysis, is treated as a working technique with named electrodes and an electrolyte recipe, tied to Ghanaian plating shops and the batteries in homes, trotros and solar installations.",
      "introduction": "Study the apparatus first and be able to draw the electrolytic cell with the battery, electrodes and electrolyte labelled, then learn ion movement in one sentence: cations to the cathode, anions to the anode. After every demonstration write the two half-equations and the observable result; that pairing is what Paper 2 marks. Finish each study session with one Q = It calculation and one volume-ratio question from the acidulated-water experiment so the number work stays fluent.",
      "realWorldContext": "Plating shops around Suame Magazine in Kumasi dip bumper strips, mirror frames and motorcycle fittings into nickel and chromium baths, the same cathode-anode-electrolyte arrangement as the school tank. Rechargeable lead-acid accumulators start trotros and taxis across the country, and solar home systems in towns such as Bawku and Bole store daylight in batteries that are charged and discharged by reversible electrolysis. Ghana's battery-recycling collection points exist because spilt accumulator acid and lead plates are hazards, which is why this topic insists on eye protection and never loosening a charging cell near a flame.",
      "objectives": [
        "Distinguish electrolytes from non-electrolytes by experiment and explain conduction in terms of free ions",
        "Predict the products at both electrodes for named molten and aqueous electrolytes using the selective discharge rules",
        "Write balanced half-equations for discharge at the cathode and the anode",
        "Calculate the charge passed with Q = It and the mass liberated with the faraday relation, moles = Q / (96500 x n)",
        "Describe electroplating setup and purpose, and explain the construction and working of the Daniell cell, dry cell and accumulator"
      ],
      "sections": [
        {
          "title": "Electrolytes, Non-electrolytes and the Working Cell",
          "content": "Test conduction with a simple circuit, cell holder, low-voltage supply, two electrodes in a beaker and a bulb or LED. Distilled water, sugar solution, ethanol and paraffin leave the bulb dark: no mobile charges. Aqueous sodium chloride, dilute sulphuric(VI) acid, sodium hydroxide solution and molten lead(II) bromide light it: these carry current as moving ions and are electrolytes. Solid sodium chloride stays dark even though it is ionic, because the Na+ and Cl- are fixed in the crystal; melting or dissolving frees them, and this reasoning sentence wins the WAEC reason mark. Set the vocabulary in place: the electrolytic cell contains the electrolyte and two electrodes connected to a direct-current supply; the electrode on the negative terminal is the cathode where reduction (gain of electrons) happens, and the positive one is the anode where oxidation (loss of electrons) happens. Cations, positive, travel to the cathode; anions, negative, to the anode. In molten lead(II) bromide the picture is clean: Pb2+ + 2e- -> Pb gives a silvery bead at the cathode, and 2Br- -> Br2 + 2e- releases brown bromine vapour at the anode, which must be drawn off in a fume hood.",
          "bulletPoints": [
            "Electrolytes conduct by moving ions: acids, alkalis, salt solutions and molten ionic compounds.",
            "Non-electrolytes such as sucrose solution and ethanol have no ions, so the bulb stays dark.",
            "Solid ionic compounds do not conduct; melting or dissolving releases the locked ions.",
            "Cathode on the negative terminal, reduction; anode on the positive terminal, oxidation.",
            "Molten PbBr2: lead bead at the cathode, brown bromine fumes at the anode, fume hood on."
          ],
          "keyTakeaway": "Current in the wires is electrons, but current inside the solution is ions; say that and half of this section is mastered.",
          "realWorldExample": "A technician topping up a vehicle accumulator at a Suame garage knows the acid carries the charge as ions; distilled water poured in by mistake dilutes the ions and the battery goes weak."
        },
        {
          "title": "Selective Discharge in Aqueous Electrolysis",
          "content": "Water adds H+ and OH- to every aqueous electrolysis, so the electrode must choose which species discharges. The choice follows three factors: position in the electrochemical series, concentration of the ion, and the nature of the electrode. At the cathode, a metal below hydrogen in the series, copper or silver, is discharged as the metal itself; sodium, potassium, calcium, magnesium, zinc and iron ions are harder to reduce than hydrogen ions, so hydrogen gas bubbles off and the metal ion stays behind. That is why electrolysis of aqueous copper(II) sulphate with inert electrodes plates brown copper on the cathode while aqueous sodium chloride gives hydrogen there. At the anode, halide ions in a concentrated solution give the halogen, so brine yields chlorine, but dilute solutions and sulphate or nitrate salts leave hydroxide to discharge, producing oxygen and making the solution acidic. Acidulated water is the pure case: hydrogen at the cathode, oxygen at the anode, a 2 : 1 volume ratio straight from 2H2O -> 2H2 + O2, tested by the pop and by relighting a glowing splint. Concentrated brine with inert electrodes gives hydrogen, chlorine and a solution of sodium hydroxide, the chlor-alkali process; never bring a flame near it, because the collected hydrogen-oxygen-air mixture can explode.",
          "bulletPoints": [
            "Three deciding factors: electrochemical series position, concentration, electrode material.",
            "Cathode rule: below hydrogen the metal plates out; above hydrogen hydrogen gas appears.",
            "Anode rule: concentrated halide gives the halogen; otherwise hydroxide gives oxygen.",
            "Acidulated water: H2 : O2 = 2 : 1 by volume; pop test and glowing splint test.",
            "Concentrated brine: hydrogen, chlorine and sodium hydroxide left in solution, the chlor-alkali process."
          ],
          "keyTakeaway": "Name the four competing ions, rank the two candidates at each electrode, and the products predict themselves.",
          "realWorldExample": "The bottle of bleach sold in every Ghanaian market traces back to this tank: chlorine from brine electrolysis is reacted with sodium hydroxide to make the sodium chlorate(I) solution used for household disinfection."
        },
        {
          "title": "Faraday Arithmetic: From Amperes to Grams",
          "content": "Quantity of electricity is Q = I x t, in coulombs, with the current in amperes and the time in seconds; leaving minutes unconverted is the most punished slip in this calculation. One faraday, 96500 C, is one mole of electrons, so moles of electrons = Q / 96500. The half-equation then supplies the ratio: Cu2+ + 2e- -> Cu needs two moles of electrons per mole of copper, so one faraday deposits only 63.5 / 2 = 31.75 g of copper, while Ag+ + e- -> Ag deposits the whole 108 g per faraday because silver needs one electron. Combine the steps into mass = (I x t x M) / (96500 x n), where M is the molar mass of the product and n the electrons per ion. Run the arithmetic in marked order, seconds, coulombs, moles of electrons, moles of product, grams, because method marks are given at each stage; a worked example of 2.0 amperes for thirty minutes through copper(II) sulphate solution deposits 1.18 g, and the same route can be turned backwards to find the time a plating job needs.",
          "bulletPoints": [
            "Q = I x t in coulombs; time must be in seconds, minutes times 60 first.",
            "1 faraday = 96500 C = one mole of electrons.",
            "Moles of product = Q / (96500 x n) with n from the half-equation.",
            "One faraday deposits 31.75 g of copper (n = 2) but 108 g of silver (n = 1).",
            "Combined form: mass = I x t x M / (96500 x n); keep the units line by line for the method marks."
          ],
          "keyTakeaway": "Convert minutes to seconds before anything else; n electrons per ion is the ratio the half-equation gives you.",
          "realWorldExample": "A plating foreman timing a nickel bath uses exactly this arithmetic in reverse: from the current and the wanted thickness he sets how many minutes the jig stays in the tank."
        },
        {
          "title": "Electroplating, Cells and Batteries",
          "content": "Electroplating is electrolysis aimed at a coating: the object becomes the cathode, the plating metal is the anode, and the electrolyte carries ions of that metal, for example a silver nitrate-based solution when spoons are silvered. Objects are degreased and polished first, because grease makes the layer flake in patches; the anode dissolves as the cathode grows, so the bath keeps its strength, and thin even layers of chromium or nickel give car trim and cutlery a bright, corrosion-resistant skin. Cells run the chemistry the other way. Two unlike metals in an electrolyte set up a redox reaction whose electrons travel through the wire: the more reactive metal dissolves and is the negative terminal, the less reactive one is the positive. The Daniell cell, zinc in zinc sulphate against copper in copper sulphate joined by a salt bridge, gives a steadier current than a simple cell because the bridge completes the circuit without letting the solutions mix. Everyday torch cells are Leclanche dry cells: zinc case negative, carbon rod positive, manganese(IV) oxide with carbon black as depolariser to stop hydrogen blanks, ammonium chloride paste as electrolyte. The lead-acid accumulator, lead and lead(IV) oxide plates in dilute sulphuric(VI) acid, is rechargeable, so driving a trotro renews the starter battery through the alternator. Used cells and batteries are chemical waste with metals and acid: Ghanaian collection points exist so they are recycled rather than burned.",
          "bulletPoints": [
            "Plating recipe: object as cathode, plating metal as anode, electrolyte with the same metal ions.",
            "Clean and grease the object first; a dirty surface plates in patches and fails the quality mark.",
            "Cell terminals: the more reactive metal is negative and dissolves; the less reactive is positive.",
            "Dry cell parts to name: zinc case, carbon rod, manganese(IV) oxide depolariser, ammonium chloride paste.",
            "Accumulators recharge by reversing the cell reaction; never charge near a flame; batteries are hazardous waste."
          ],
          "keyTakeaway": "Electrolysis consumes electricity to build or coat; a cell spends a spontaneous reaction to supply it; the two halves of electrochemistry face each other.",
          "realWorldExample": "A solar home system in Bawku stores noon electricity in a rechargeable battery and draws it back at night, cycling the same electrode chemistry an accumulator in a trotro park performs at engine start."
        }
      ],
      "commonMistakes": [
        "Claiming electrons travel through the solution; the liquid current is carried by ions moving, and electrons only move in the electrodes and wires.",
        "Predicting sodium metal from aqueous sodium chloride electrolysis; sodium sits above hydrogen in the series, so hydrogen discharges at the cathode and the sodium ion stays in solution.",
        "Using minutes directly in Q = It; thirty minutes is 1800 s, and forgetting the times 60 shrinks every later answer by a factor of 60.",
        "Reporting one faraday of copper as 63.5 g; Cu2+ takes two electrons, so 96500 C deposits 31.75 g, half the molar mass.",
        "Making the spoon the anode in silvering; as the anode it would dissolve instead of collecting silver; the object is always the cathode."
      ],
      "wassceExamTips": [
        "Paper 1 objective questions test the electrolyte and non-electrolyte list and the gas ratios of acidulated water; keep the 2 : 1 hydrogen-to-oxygen volume at your fingertips.",
        "Paper 2 structured answers award method marks: write the half-equation, then Q = It with seconds, then the mole ratio, then the mass; a wrong final figure with correct lines still collects most marks.",
        "For electrode-product predictions answer in three parts, name the product, name the electrode, give one reason from the electrochemical series or concentration; reason marks are separate from product marks.",
        "Paper 3 alternative-practical may show a plating or electrolysis diagram and ask you to label cathode, anode and electrolyte or to state the observation at each electrode; practise drawing the cell cleanly.",
        "In cell questions state which metal is the negative terminal by reactivity, not by size or shape of the electrode; examiners expect the reasoning word, more reactive."
      ],
      "summaryChecklist": [
        "Can I sort named substances into electrolytes and non-electrolytes and explain conduction by free ions?",
        "Can I predict and justify both electrode products for molten lead(II) bromide, brine, acidulated water and copper(II) sulphate solution?",
        "Can I write balanced half-equations for discharge at the cathode and the anode?",
        "Can I calculate charge, moles of electrons and mass deposited with Q = It and the 96500 faraday?",
        "Can I describe an electroplating set-up and the construction of a dry cell, Daniell cell and accumulator?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-electro-1",
        "title": "Mass of Copper Deposited by a Steady Current",
        "problem": "A current of 2.0 A was passed through copper(II) sulphate solution for 30 minutes using inert electrodes. Calculate the mass of copper deposited at the cathode. (Cu = 63.5; 1 faraday = 96500 C.)",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the time to seconds: t = 30 x 60 = 1800 s.",
          "Step 2 (M1): Charge passed: Q = I x t = 2.0 x 1800 = 3600 C.",
          "Step 3 (M1): Moles of electrons = 3600 / 96500 = 0.0373 mol.",
          "Step 4 (M1): Half-equation Cu2+ + 2e- -> Cu, so moles of copper = 0.0373 / 2 = 0.0187 mol.",
          "Step 5 (A1): Mass of copper = 0.0187 x 63.5 = 1.18 g deposited at the cathode."
        ],
        "keyTakeaway": "Seconds first, coulombs next, then the electron ratio from the half-equation, and only then grams."
      },
      {
        "id": "ex-che-electro-2",
        "title": "How Long a Silver Plating Bath Must Run",
        "problem": "A workshop wants to deposit 1.08 g of silver on a spoon from a silver(I) ion solution using a current of 0.5 A. For how long must the spoon stay in the bath? (Ag = 108; 1 faraday = 96500 C.)",
        "stepByStepSolution": [
          "Step 1 (M1): Half-equation for silver: Ag+ + e- -> Ag, one electron per silver ion.",
          "Step 2 (M1): Moles of silver required = 1.08 / 108 = 0.01 mol.",
          "Step 3 (M1): One electron each, so moles of electrons = 0.01 mol and the charge needed is Q = 0.01 x 96500 = 965 C.",
          "Step 4 (A1): Time t = Q / I = 965 / 0.5 = 1930 s.",
          "Step 5 (A1): In minutes, 1930 s = 32 min 10 s, so the bath runs for about 32 minutes."
        ],
        "keyTakeaway": "The same chain runs in reverse: grams to moles, moles to coulombs, coulombs divided by the current gives seconds."
      }
    ],
    "quiz": {
      "id": "quiz-che-electrochemistry",
      "topicId": "shs2-che-t2-electrochemistry",
      "title": "Electrolysis and Cells Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-electro-1",
          "quizId": "quiz-che-electrochemistry",
          "questionText": "Which of the following is a non-electrolyte?",
          "optionA": "Sucrose (sugar) solution",
          "optionB": "Molten lead(II) bromide",
          "optionC": "Aqueous sodium chloride",
          "optionD": "Dilute sulphuric(VI) acid",
          "correctOption": "A",
          "subConcept": "Electrolytes and non-electrolytes",
          "explanation": "Sucrose dissolves as neutral molecules with no ions, so its solution carries no current. Molten lead(II) bromide, brine and dilute sulphuric(VI) acid all supply mobile ions and light the test bulb.",
          "remediationTip": "Sort substances into three columns, ionic, molecular acid, molecular non-acid, and label only the middle and left columns electrolytes."
        },
        {
          "id": "q-che-electro-2",
          "quizId": "quiz-che-electrochemistry",
          "questionText": "In the electrolysis of dilute sulphuric-acidified water with inert electrodes, the gas produced at the anode is",
          "optionA": "hydrogen",
          "optionB": "sulphur(IV) oxide",
          "optionC": "oxygen",
          "optionD": "chlorine",
          "correctOption": "C",
          "subConcept": "Products of aqueous electrolysis",
          "explanation": "At the anode hydroxide ions from water discharge in preference to sulphate(VI) ions, giving oxygen; hydrogen appears at the cathode, and the ratio is 2 : 1 by volume. Sulphur(IV) oxide is not formed because sulphate(VI) ions stay in solution.",
          "remediationTip": "Draw the acidulated-water cell and mark hydrogen twice the volume of oxygen until the pairing is reflex."
        },
        {
          "id": "q-che-electro-3",
          "quizId": "quiz-che-electrochemistry",
          "questionText": "What is the ratio of the volume of hydrogen to the volume of oxygen collected in the electrolysis of acidulated water?",
          "optionA": "1 : 1",
          "optionB": "2 : 1",
          "optionC": "1 : 2",
          "optionD": "8 : 1",
          "correctOption": "B",
          "subConcept": "Gas volumes in electrolysis",
          "explanation": "From 2H2O -> 2H2 + O2, two volumes of hydrogen form for every one of oxygen, so the cathode-to-anode ratio is 2 : 1. The ratio 8 : 1 confuses the mass ratio of hydrogen to oxygen in water with the volume ratio of the gases.",
          "remediationTip": "Recite the sentence: volume ratio 2 to 1, mass ratio 1 to 8, and never swap them."
        },
        {
          "id": "q-che-electro-4",
          "quizId": "quiz-che-electrochemistry",
          "questionText": "How much charge passes through a cell when 0.5 A flows for 4 minutes?",
          "optionA": "2 C",
          "optionB": "30 C",
          "optionC": "200 C",
          "optionD": "120 C",
          "correctOption": "D",
          "subConcept": "Charge calculation",
          "explanation": "Q = I x t with t in seconds: 4 minutes = 240 s, so Q = 0.5 x 240 = 120 C. Using 0.5 x 4 = 2 C is the classic minutes-not-converted error.",
          "remediationTip": "Write the conversion line, minutes times 60, before every Q = It working until it is a habit."
        },
        {
          "id": "q-che-electro-5",
          "quizId": "quiz-che-electrochemistry",
          "questionText": "In silver-plating a spoon, the correct connection is that the spoon is made the",
          "optionA": "anode, and silver the cathode",
          "optionB": "cathode, and silver the anode",
          "optionC": "cathode, with a carbon anode in plain water",
          "optionD": "anode, and carbon the cathode",
          "correctOption": "B",
          "subConcept": "Electroplating",
          "explanation": "The object to be plated is the cathode so silver ions are reduced on it; the silver anode dissolves to replace the ions, and the electrolyte must carry silver ions, not plain water. Reversing the electrodes would dissolve the spoon instead of coating it.",
          "remediationTip": "Chant the plating rule: object negative, coating metal positive, bath full of the coating metal's ions."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t2-periodic-table-and-trends",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 4,
    "title": "The Periodic Table, Groups and Periodic Trends",
    "description": "The modern table ordered by proton number, periods and groups read from electron configuration, the alkali metals, halogens, noble gases and transition elements, and the trends in radius, ionisation energy, valency and metallic and non-metallic character.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The modern periodic law, due to Moseley, states that the properties of elements are a periodic function of their atomic (proton) numbers; the table is arranged in order of increasing proton number, not the increasing atomic masses of Mendeleev's original version.\n• There are seven periods, rows that count the occupied electron shells, and eighteen groups, columns whose members share the same number of outer electrons, the same valency and closely similar chemistry; metals fill the left and centre, non-metals the right, and the stepped border from boron down to astatine marks the metalloids such as silicon.\n• Position follows from configuration and back: an element 2.8.8.2 has four shells, so it is in period 4, and two outer electrons, so it is in group 2, calcium with proton number 20.\n• Group 1 alkali metals: lithium 3 (2.1), sodium 11 (2.8.1), potassium 19 (2.8.8.1), rubidium 37 (2.8.18.8.1); soft enough to cut, so soft they are stored under oil to keep air and moisture off.\n• Group 1 with water: 2Na + 2H2O -> 2NaOH + H2; sodium melts to a fizzing silvery ball, potassium reacts violently with a lilac flame, and reactivity increases down the group because the single outer electron is farther from the nucleus and more easily lost.\n• Group 1 otherwise: burnt in oxygen, 4Na + O2 -> 2Na2O; with chlorine, 2Na + Cl2 -> 2NaCl; their hydroxides are strong alkalis and their chlorides are typical salts; flame colours are crimson for lithium, golden yellow for sodium, lilac for potassium.\n• Group 17 halogens exist as diatomic molecules: fluorine F2 (2.7 at 9), chlorine Cl2 (2.8.7 at 17), bromine Br2 (2.8.18.7 at 35), iodine I2 (2.8.18.18.7 at 53).\n• Halogen appearance at room conditions: fluorine a pale yellow gas, chlorine a greenish-yellow gas, bromine a fuming red-brown liquid, iodine a grey-black solid that sublimes to violet vapour on heating; colour deepens and boiling point rises down the group as molecules grow heavier.\n• Halogen reactivity decreases down the group because the nucleus holds incoming electrons less tightly as shells multiply; a displacement proves the order: Cl2 + 2KBr -> 2KCl + Br2 turns the solution orange-brown as chlorine pushes bromine out.\n• Group 0 (group 18) noble gases: helium 2, neon 10 (2.8), argon 18 (2.8.8), krypton 36; full outer shells make them monatomic and almost inert; helium lifts balloons where hydrogen would burn, argon shields hot welding metal and fills lamps, neon gives coloured advertising glow.\n• Transition elements fill the central d-block of periods 4 to 6; iron, copper, zinc, manganese and chromium are standard examples, and Ghana's own gold of Tarkwa and Obuasi is a transition metal.\n• Transition-metal character: variable valency (iron(II) and iron(III), copper(I) and copper(II)), coloured compounds (blue copper(II) sulphate, green iron(II) sulphate, orange potassium dichromate(VI), purple potassium manganate(VII)), catalytic power (iron in the Haber process, vanadium(V) oxide in the Contact process, finely divided nickel hardening palm oil into margarine), dense hard metals with high melting points except mercury, the one liquid metal.\n• Across period 3 from sodium to argon, metallic character fades: sodium and magnesium are reactive metals, aluminium resists by its oxide coat, silicon is a metalloid, and phosphorus, sulphur and chlorine are non-metals; the oxides shift from basic (Na2O, MgO) through amphoteric (Al2O3) to acidic (SiO2, the sulphur and chlorine oxides such as SO2 and SO3).\n• Down any group, atomic radius increases with each added shell and its shielding, ionisation energy falls, metallic character strengthens; across a period radius shrinks, ionisation energy rises and non-metallic character grows.\n• Ionisation energy is the energy needed to remove the most loosely held electron from one mole of gaseous atoms; valency by group runs 1, 2, 3, 4, then 3, 2, 1 for groups 1, 2, 13, 14, 15, 16, 17, and 0 for the noble gases.",
    "detailedNotes": {
      "overview": "The periodic table is the map chemists think with, and this topic teaches you to read it in both directions. You will fix the modern law of proton-number ordering, connect any element's electron configuration to its period and group, and then work through the four families the syllabus demands: the alkali metals of group 1, the halogens of group 17, the inert noble gases of group 0 and the transition metals of the d-block. The topic closes with the great trends, radius, ionisation energy, valency and the swing from metallic to non-metallic character, including the full sweep of period 3 oxides that WASSCE loves as a table question.",
      "introduction": "Use a blank table and a coloured pencil: shade metals, non-metals and metalloids, then ring the alkali metals, halogens and noble gases until their columns are muscle memory. For every family write one representative equation, sodium with water, chlorine with bromide solution, and one observation sentence. End each study block with a position puzzle: take a configuration such as 2.8.18.7, state period, group, proton number and one property, the exact skill an objective question tests.",
      "realWorldContext": "Ghana sits on the table: gold, a transition metal, is worked at Tarkwa and Obuasi, manganese ore comes from Nsuta for steel alloying, and bauxite from Awaso feeds the aluminium industry whose Asofyan and Valco downstream plants shape Volta Region power demand. The golden-yellow sodium flame that group 1 gives is the same colour family seen in flame tests at a school science club in Accra, and coloured advertising tubes in shops along the Spintex Road use the noble-gas glow of neon and argon. Nickel and chromium plating at Suame Magazine, taught in the electrochemistry topic, works on transition metals chosen precisely because they resist corrosion.",
      "objectives": [
        "State the modern periodic law and explain why proton number, not atomic mass, orders the table",
        "Place an element in its period and group from its electron configuration and give one property from its group",
        "Compare the reactions of lithium, sodium and potassium with water and of chlorine, bromine and iodine, including displacement",
        "Describe noble-gas inertness and the uses of helium, argon and neon",
        "State and explain the trends in atomic radius, ionisation energy, valency and metallic character down groups and across period 3"
      ],
      "sections": [
        {
          "title": "The Rule and the Layout of the Modern Table",
          "content": "Moseley's work on X-ray charges of atoms showed that arranging elements by proton number fixes Mendeleev's awkward pairs, so the modern periodic law states that properties repeat periodically as proton number increases. The table has seven periods, and the period number is simply the number of occupied shells, and eighteen groups, with group number for the main groups telling you the outer-electron count: group 1 one, group 2 two, group 13 three, through to group 17 seven and group 18 eight. Read the map: metallic character dominates the left and centre, non-metals crowd the right above the staircase line of metalloids such as boron and silicon. Convert position from configuration as a two-step routine; count shells for the period, count outer electrons for the group. Thus 2.8.8.2 names period 4, group 2, calcium, a reactive metal forming Ca2+ ions and a basic oxide. Elements in the same group behave alike because they have the same outer structure, which is the sentence examiners want whenever they ask why sodium and potassium are placed together.",
          "bulletPoints": [
            "Modern law: properties are a periodic function of proton number (atomic number).",
            "Period number equals number of occupied shells; group number equals outer electrons for main groups.",
            "Metals left and centre, non-metals right, metalloids along the stepped boron-to-astatine border.",
            "Same-group elements share outer-electron count, valency and chemical behaviour.",
            "Routine: 2.8.8.2 gives period 4 from four shells and group 2 from two outer electrons, the element calcium."
          ],
          "keyTakeaway": "Two counts place any element, shells for the period and outer electrons for the group, and the group name supplies the chemistry.",
          "realWorldExample": "A school laboratory store cupboard in Takoradi keeps its bottle labels in table order, sodium, magnesium, aluminium, sulphur, chlorine, so technicians find an element by walking its period."
        },
        {
          "title": "Two Families: Alkali Metals and Halogens",
          "content": "Group 1 are the alkali metals, soft, dense-looking silvery metals whose single outer electron makes them fiercely eager to leave it behind. Cut a piece and the fresh surface tarnishes in air; store them under oil. Drop sodium on water and it melts to a silvery ball skimming the surface with fizzing, forming sodium hydroxide solution and hydrogen, 2Na + 2H2O -> 2NaOH + H2; potassium reacts even more violently, often igniting with a lilac flame, while lithium fizzes gently. Reactivity rises down the group because added shells and shielding loosen the grip of the nucleus on the outer electron. Their compounds are textbook ionics: with chlorine, 2Na + Cl2 -> 2NaCl; burnt in oxygen, 4Na + O2 -> 2Na2O; the hydroxides dissolve to strongly alkaline solutions, hence the name. Group 17, the halogens, run the opposite way. The elements are diatomic, Cl2, Br2, I2, and at room conditions chlorine is a greenish-yellow gas, bromine a fuming red-brown liquid handled in a fume hood, and iodine a grey-black solid that sublimes to violet vapour. Reactivity falls down the group as the nucleus struggles to attract a completing electron through more shells; displacement settles disputes chemically, Cl2 + 2KBr -> 2KCl + Br2, the solution turning orange-brown as bromine is freed.",
          "bulletPoints": [
            "Group 1: one outer electron, soft metals stored under oil, hydroxides strongly alkaline.",
            "2Na + 2H2O -> 2NaOH + H2; melting ball and fizz for sodium, lilac flame for potassium, gentle for lithium.",
            "Metal reactivity rises down group 1; halogen reactivity falls down group 17, opposite directions, one shielding explanation.",
            "Halogens are diatomic; gas, liquid and solid states at room conditions run chlorine, bromine, iodine.",
            "Displacement chain: chlorine liberates bromine from bromides and bromine liberates iodine from iodides."
          ],
          "keyTakeaway": "Group 1 gives an electron more readily downwards; group 17 takes one less readily downwards; say the direction and the reason together.",
          "realWorldExample": "The violet cloud over a heated iodine crystal in the chemistry lab at Ho echoes the colour that potassium's lilac flame adds to a street firework display during festive seasons in Accra."
        },
        {
          "title": "Noble Gases and the Transition Elements",
          "content": "Group 0 holds helium, neon, argon, krypton and xenon, gases whose outer shells are already complete, two electrons for helium and eight for the rest, so they neither seek to lose nor gain electrons and exist as single atoms. That full-shell stability is the reason other elements react at all, everyone is chasing a noble-gas arrangement. Uses follow from inertness and low reactivity combined with lightness or density: helium floats balloons and airships safely where hydrogen would burn, argon blankets hot metal in arc welding and packs lamps to stop filaments eating away, and neon glows orange-red in advertising tubes. The transition elements fill the broad middle of the table, the d-block of periods 4 to 6, including iron, copper, manganese, chromium, nickel and Ghana's gold. Three signatures mark them: variable valency, because d electrons as well as outer electrons can join reactions, giving iron(II) and iron(III) compounds; coloured compounds, the blue of copper(II) sulphate, the green of iron(II) sulphate, orange potassium dichromate(VI) and purple potassium manganate(VII); and catalytic ability, iron in the Haber process for ammonia, vanadium(V) oxide in the Contact process for sulphur(VI) oxide, finely divided nickel hardening palm oil into margarine. They are dense, hard, high-melting metals, mercury the lone liquid exception.",
          "bulletPoints": [
            "Noble gases have complete outer shells, so they are monatomic and almost inert.",
            "Helium for safe lifting, argon for welding shields and lamps, neon for coloured glow tubes.",
            "Transition metals show variable valency, coloured compounds and catalytic use.",
            "Named catalysts: iron for Haber, vanadium(V) oxide for Contact, nickel for oil hardening.",
            "Mercury is the only transition metal liquid at room conditions; the rest are dense, high-melting metals."
          ],
          "keyTakeaway": "Full shells mean silence in group 0, partly available d electrons mean colour and versatility in the d-block.",
          "realWorldExample": "A goldsmith in the Kumasi Adum workshops is working a transition metal, chosen by centuries of trade precisely because gold resists corrosion and stays bright."
        },
        {
          "title": "Reading the Trends: Radius, Ionisation and Character",
          "content": "Down a group each element adds a whole shell, so atoms and ions grow and the outer electrons sit farther from a nucleus increasingly screened by inner shells; atomic radius rises, ionisation energy falls, and metals lose their outer electron more easily, which is why caesium out-reacts sodium. Across a period, protons are added while shells stay the same, the nucleus pulls the shared shells tighter, so radius shrinks, ionisation energy climbs, and the elements slide from metal to non-metal. Period 3 is the complete demonstration: sodium reacts cold with water, magnesium reacts with steam and dilute acids, aluminium resists behind its oxide film, silicon is a hard metalloid, and phosphorus, sulphur and chlorine are non-metals. Their oxides tell the same story: sodium oxide and magnesium oxide are basic, aluminium oxide is amphoteric, reacting with acids and with alkalis alike, while silicon dioxide and the oxides of phosphorus, sulphur and chlorine, such as SO2 and SO3, are acidic. Valency across the period runs 1, 2, 3, 4, then falls 3, 2, 1 to argon's 0, counting electrons lost and then shared or gained. Ionisation energy itself is defined carefully as the energy to remove the most loosely held electron from one mole of gaseous atoms; the words gaseous atoms win the definition mark.",
          "bulletPoints": [
            "Down a group: radius increases, ionisation energy decreases, metallic character increases.",
            "Across a period: radius decreases, ionisation energy increases, character moves metal to non-metal.",
            "Period 3 oxides: basic Na2O and MgO, amphoteric Al2O3, acidic SiO2, P, S and Cl oxides.",
            "Amphoteric means the oxide reacts with both acids and alkalis to give salt and water.",
            "Ionisation energy definition must include gaseous atoms and one mole."
          ],
          "keyTakeaway": "Every trend is one tug of war, nuclear charge pulling in against shells and shielding pushing out; name both sides to score.",
          "realWorldExample": "Anodised window frames sold at a Tamale building shop protect aluminium by thickening its natural oxide coat, the same amphoteric oxide film your period 3 table flags."
        }
      ],
      "commonMistakes": [
        "Saying the modern table is arranged by increasing atomic mass; that is Mendeleev's scheme, and the modern ordering key is proton (atomic) number.",
        "Writing potassium's configuration as 2.8.9 instead of 2.8.8.1; the outer shell holds at most eight before a new shell starts, and a wrong configuration misplaces the element.",
        "Claiming group 1 reactivity falls down the group because atoms get bigger; metals react by losing the outer electron, which shielding makes easier, so reactivity rises.",
        "Naming helium as a member of group 2 because it has two electrons; its two fill the first and only shell, so it stands with the noble gases in group 0.",
        "Describing halogens as monoatomic Cl rather than diatomic Cl2, then failing to balance equations such as 2Na + Cl2 -> 2NaCl."
      ],
      "wassceExamTips": [
        "Paper 1 objective items on position from configuration are the fastest marks in chemistry; count shells, count outer electrons, never reverse the two counts.",
        "Paper 2 trend questions award marks per stated direction plus reason; write both, for example radius increases down the group because a new shell is added, or the answer is only half scored.",
        "When asked to compare group 1 and group 17 reactivity trends, present a tiny table with the direction for each family and one shielding sentence; tables are marked line by line.",
        "For period 3 oxide questions memorise the three-word ladder, basic, amphoteric, acidic, with the four oxide formulas that carry it; amphoteric aluminium oxide is the frequent special case.",
        "Name equations with state or observation detail where asked, lilac flame for potassium, orange-brown solution for displaced bromine; observations are separate marks from equations."
      ],
      "summaryChecklist": [
        "Can I state the modern periodic law and give the two counts that place any element from its configuration?",
        "Can I write the group 1 water and chlorine equations with observations ordered by reactivity?",
        "Can I compare the physical states and colours of the halogens and prove the displacement order?",
        "Can I list three chemical signatures of transition elements with one named compound or catalyst each?",
        "Can I describe radius, ionisation energy and metallic character down a group and across period 3 with reasons?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-periodic-1",
        "title": "Placing an Element from Its Electron Configuration",
        "problem": "An element X has the electron configuration 2.8.7. Determine its proton number, its period and group in the periodic table, its valency, and name the element and one compound it forms with sodium.",
        "stepByStepSolution": [
          "Step 1 (M1): Add the electrons: 2 + 8 + 7 = 17, so the proton number is 17 for a neutral atom.",
          "Step 2 (M1): Count occupied shells: three shells, so the element is in period 3.",
          "Step 3 (M1): Count outer electrons: seven, so it is in group 17, the halogens, and needs one electron to complete the octet, giving valency 1.",
          "Step 4 (A1): The element is chlorine, a greenish-yellow reactive non-metal gas existing as diatomic molecules, Cl2.",
          "Step 5 (A1): With sodium it forms sodium chloride: 2Na + Cl2 -> 2NaCl, a white ionic salt."
        ],
        "keyTakeaway": "Shells give the period, outer electrons give the group, and the gap to eight gives the valency; the name and compound then follow."
      },
      {
        "id": "ex-che-periodic-2",
        "title": "Predicting the Alkali Metal Reaction Series",
        "problem": "Small pieces of lithium, sodium and potassium are dropped separately into water. Arrange them in order of increasing reaction violence, explain the order using atomic structure, and write the equation for the reaction of sodium.",
        "stepByStepSolution": [
          "Step 1 (M1): Note the shared structure: Li is 2.1, Na is 2.8.1 and K is 2.8.8.1, one outer electron each, all group 1.",
          "Step 2 (M1): Down the group the number of shells rises, so the outer electron is farther from the nucleus and more shielded by inner shells.",
          "Step 3 (A1): The outer electron is lost more easily downwards, so reactivity rises: lithium < sodium < potassium in increasing violence.",
          "Step 4 (M1): Write the general alkali-metal water reaction: 2M + 2H2O -> 2MOH + H2.",
          "Step 5 (A1): For sodium, 2Na + 2H2O -> 2NaOH + H2; sodium melts to a fizzing silvery ball, and potassium reacts violently, often with a lilac flame."
        ],
        "keyTakeaway": "For metals, reactivity tracks how easily the outer electron leaves; shells plus shielding give the order every time."
      }
    ],
    "quiz": {
      "id": "quiz-che-periodic-table",
      "topicId": "shs2-che-t2-periodic-table-and-trends",
      "title": "Periodic Table and Trends Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-periodic-1",
          "quizId": "quiz-che-periodic-table",
          "questionText": "The modern periodic table arranges elements in order of increasing",
          "optionA": "relative atomic mass",
          "optionB": "alphabetical order of symbols",
          "optionC": "number of neutrons",
          "optionD": "atomic (proton) number",
          "correctOption": "D",
          "subConcept": "The modern periodic law",
          "explanation": "Moseley's modern law orders elements by proton number; arranging by atomic mass, option A, is Mendeleev's older scheme that breaks on pairs such as argon and potassium. Neutron count varies within an element's isotopes, so it cannot organise the table.",
          "remediationTip": "Write the periodic law word for word three times and say the difference between proton number and atomic mass aloud."
        },
        {
          "id": "q-che-periodic-2",
          "quizId": "quiz-che-periodic-table",
          "questionText": "How many electrons are in the outermost shell of an element in group 15?",
          "optionA": "5",
          "optionB": "3",
          "optionC": "4",
          "optionD": "15",
          "correctOption": "A",
          "subConcept": "Groups and outer electrons",
          "explanation": "For the main groups the group number tells the outer-electron count, so group 15 elements carry five. Choosing 3 confuses the five outer electrons with the common valency of three, and 15 confuses the group label with the count itself.",
          "remediationTip": "Fill a strip, groups 1, 2, 13 to 17 against outer electrons 1, 2, 3 to 7, and learn it as a rhyme."
        },
        {
          "id": "q-che-periodic-3",
          "quizId": "quiz-che-periodic-table",
          "questionText": "Which element has the electron configuration 2.8.8.1?",
          "optionA": "Sodium",
          "optionB": "Potassium",
          "optionC": "Calcium",
          "optionD": "Argon",
          "correctOption": "B",
          "subConcept": "Configuration to identity",
          "explanation": "The total is 19 protons, which is potassium, a period 4 group 1 metal. Sodium is 2.8.1 with only three shells, calcium ends in 2 rather than 1, and argon ends the third shell at 2.8.8 with no fourth electron.",
          "remediationTip": "After summing a configuration, check both counts, shells for period and last number for group, before naming the element."
        },
        {
          "id": "q-che-periodic-4",
          "quizId": "quiz-che-periodic-table",
          "questionText": "Which halogen is a liquid at room temperature?",
          "optionA": "Chlorine",
          "optionB": "Fluorine",
          "optionC": "Iodine",
          "optionD": "Bromine",
          "correctOption": "D",
          "subConcept": "Halogens: physical states",
          "explanation": "Bromine is the only liquid element of group 17 at room conditions, a fuming red-brown liquid; fluorine and chlorine are gases and iodine is a grey-black solid that sublimes. The states deepen down the group as molecular mass raises boiling points.",
          "remediationTip": "Line the four halogens up with a state word each, gas, gas, liquid, solid, and say the colour with each one."
        },
        {
          "id": "q-che-periodic-5",
          "quizId": "quiz-che-periodic-table",
          "questionText": "Which statement correctly describes the transition elements?",
          "optionA": "They form only one stable ion across the whole block",
          "optionB": "They are non-metals with very low densities",
          "optionC": "Their compounds are often coloured and they show variable valency",
          "optionD": "They are all gases used chiefly in welding shields",
          "correctOption": "C",
          "subConcept": "Transition element properties",
          "explanation": "Variable valency and coloured compounds, with catalytic use, are the transition-metal signatures, examples being iron(II) and iron(III) salts and blue copper(II) sulphate. Option A denies the variable valency that defines them.",
          "remediationTip": "Recall four evidence cards, iron(II)/iron(III), blue copper salts, orange dichromate(VI), purple manganate(VII), and the properties follow."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t2-carbon-silicon-group-iv-compounds",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 9,
    "title": "Carbon, Silicon and Group IV Compounds",
    "description": "Allotropes of carbon, the preparation and tests for carbon(IV) oxide and carbon(II) oxide, the action of heat and of acid on carbonates and hydrogencarbonates, complete and incomplete combustion of fuels, silicon and silica, silicates in glass and cement chemistry, and adsorption by charcoal.",
    "isFreeTrial": false,
    "keyNotes": "• Group IV runs from carbon and silicon as non-metals or metalloids down to the metals tin and lead, and the syllabus focuses on carbon and silicon, both of which form covalent compounds and, apart from carbon, mainly show oxidation states two and four.\n• Carbon has three main allotropes: diamond, each carbon bonded to four others in a giant rigid structure, the hardest natural substance, used for cutting tools and jewellery; graphite, arranged in hexagonal layers held by weak forces so the layers slip, making it soft and slippery, a good lubricant and a conductor of electricity used in electrodes and pencil leads; and amorphous carbon such as charcoal, coke and soot, finely divided with a vast surface area.\n• Charcoal adsorbs gases and coloured dyes on its enormous inner surface, so it decolourises a sugar solution, is used in gas masks and in the refinery to clarify liquids; adsorption is a surface effect, different from absorption into a bulk.\n• Carbon(IV) oxide, CO2, is prepared by the action of dilute hydrochloric acid on marble chips, CaCO3 + 2HCl -> CaCl2 + H2O + CO2; it is denser than air and fairly soluble, so it is collected by downward delivery, is made from exhaled air and fermentation, and does not burn nor support combustion.\n• Test for carbon(IV) oxide: bubbling it through limewater gives a white milkiness, Ca(OH)2 + CO2 -> CaCO3 + H2O; excess gas clears the milkiness again as soluble calcium hydrogencarbonate forms.\n• Carbon(II) oxide, carbon monoxide, CO, is formed by the incomplete combustion of carbon fuels in a limited air supply; it is colourless, odourless and highly poisonous because it binds to the haemoglobin of the blood, which is why charcoal must never be burnt in a closed room.\n• CO is prepared by dehydrating methanoic or ethanoic acid with concentrated sulphuric(VI) acid, burns with a blue flame to give CO2, and reduces hot copper(II) oxide to copper, CO being oxidised to CO2; it is a neutral oxide, reacting with neither acids nor bases.\n• Complete combustion in plenty of air gives carbon(IV) oxide and water and the full heat; incomplete combustion in a limited supply gives carbon(II) oxide, or black carbon soot, and less heat, the reason a yellow smoky flame and a closed stove are dangerous.\n• Carbonates contain the CO3(2-) ion and effervesce with dilute acids to release CO2; hydrogencarbonates contain HCO3- and also give off CO2 with acids and on heating, for example 2NaHCO3 -> Na2CO3 + H2O + CO2, the reaction that makes baking soda raise dough.\n• Most metal carbonates decompose on strong heating to the metal oxide and CO2, CaCO3 -> CaO + CO2; only group I carbonates are heat-stable, and sodium and potassium carbonates do not break down in a school flame.\n• Silicon is the second most abundant element in the crust and exists mainly as silica, silicon(IV) oxide SiO2, in sand and quartz, and as silicates in clays and rocks; silica is a giant covalent solid, hard, with a high melting point and chemically inert.\n• Silica reduced with carbon gives impure silicon, and silicon is used in transistors, solar cells and alloys; glass is made by fusing sand (silica) with sodium carbonate and calcium carbonate, the mixture softening on cooling to an amorphous solid.\n• Cement and concrete rely on silicates: heating limestone with clay gives cement, whose compounds set with water; concrete is cement with sand and aggregate, and mortar is cement with sand, the building chemistry seen on every Ghanaian site.",
    "detailedNotes": {
      "overview": "Group IV is the block where carbon and silicon build the materials of daily life, and this topic moves from the element to its compounds to their uses. You begin with the three allotropes of carbon and see how structure gives diamond its hardness, graphite its slippery conducting layers and charcoal its adsorbing surface. Then you master the two oxides of carbon, carbon(IV) oxide with its preparation and limewater test, and poisonous carbon(II) oxide from incomplete combustion, tying both to the safe burning of fuels. The carbonate and hydrogencarbonate section covers the action of acid and of heat, the fizz that raises dough and the lime-burning that makes cement. The silicon half links silica and silicates to the glass, cement and concrete chemistry of Ghanaian building sites.",
      "introduction": "Study by pairing structure with property, since that is how the questions are set. Draw the diamond, graphite and charcoal pictures once and write one property and one use beside each. Then learn the carbon oxides as a matched pair, how each is made, collected and tested, and which is poisonous. For the carbonate work, run two tests in your head, acid giving CO2 and heat giving CO2, and memorise that group I carbonates resist heat. Finish by following the building chain, sand plus carbonates to glass, limestone plus clay to cement, cement plus sand and stones to concrete, and recite each equation before you close the book.",
      "realWorldContext": "Building is where this topic lives in Ghana. Limestone fired to quicklime and then blended with clay makes the cement used for blocks and mortar on every site from Tamale to Takoradi, while concrete work at a construction yard mixes that cement with sand and aggregate exactly as the silicate chemistry predicts. The glass panes sold for windows trace back to silica, the sand of the coast fused with carbonates. Charcoal, the household fuel and also the adsorbent in a refinery, is amorphous carbon doing a surface job, decolourising liquids just as it clears a sugar solution in class. In kitchens the hydrogencarbonate reaction, baking soda releasing carbon(IV) oxide, puffs agege and bread. The safety lesson on incomplete combustion matters most: burning charcoal inside a closed room fills it with colourless, odourless carbon(II) oxide, a real hazard the topic warns against.",
      "objectives": [
        "Compare the structure, properties and uses of the three allotropes of carbon and explain adsorption by charcoal",
        "Prepare and test carbon(IV) oxide and carbon(II) oxide and give the equation for each preparation",
        "Describe the action of dilute acids and of heat on carbonates and hydrogencarbonates with equations",
        "Relate complete and incomplete combustion of fuels to the products formed and to safety, and connect silica and silicates to glass, cement and concrete"
      ],
      "sections": [
        {
          "title": "Three Faces of Carbon and the Adsorbing Surface",
          "content": "Carbon appears in three distinct allotropes, and the whole point is that the same element behaves wildly differently because the atoms are arranged differently. In diamond every carbon is bonded strongly to four others in a rigid giant tetrahedral network, which is why diamond is the hardest natural substance, has a very high melting point, does not conduct and is used in cutting and grinding tools and in jewellery. In graphite each carbon bonds to three others in flat hexagonal sheets; the sheets are held to one another by weak forces so they slide apart easily, giving a soft, slippery solid that marks paper and works as a lubricant, and one spare electron per atom moves along the layers so graphite conducts electricity, making it the electrode material and the lead in a pencil. Amorphous carbon, charcoal, coke, lampblack and soot, is carbon in a finely divided form with an enormous internal surface full of tiny pores. That surface is what lets charcoal adsorb, gathering coloured dyes and gases onto it, so a little charcoal powder stirred into a coloured sugar solution draws the colour out and it is packed into gas masks and used to clarify liquids in refineries. Say the words surface and adsorb whenever you explain this, and keep adsorption, a surface effect, apart from absorption, taking a substance into the bulk.",
          "bulletPoints": [
            "Diamond: four strong bonds in a giant tetrahedral lattice, hardest substance, non-conductor, cutting tools.",
            "Graphite: layered hexagonal sheets that slip, soft and slippery, conducts, used as lubricant and electrode.",
            "Charcoal and coke: amorphous carbon with a huge porous surface.",
            "Charcoal adsorbs dyes and gases on its surface, decolourising sugar solutions and working in gas masks.",
            "Adsorption is a surface effect; absorption takes a substance into the whole volume."
          ],
          "keyTakeaway": "Different carbon structures give different properties; layers make graphite slippery and conducting, pores make charcoal adsorb.",
          "realWorldExample": "A refiner clarifying a syrup with charcoal powder is using the same vast adsorbing surface that clears a blue-black starch-free sugar solution in the school laboratory at Ho."
        },
        {
          "title": "The Two Oxides of Carbon and Combustion Safety",
          "content": "Carbon forms two common oxides with very different characters. Carbon(IV) oxide, CO2, is made by adding dilute hydrochloric acid to marble chips, CaCO3 + 2HCl -> CaCl2 + H2O + CO2; it is denser than air and fairly soluble, so it is collected by downward delivery, and it neither burns nor supports combustion. Its test is limewater: the gas throws down a white milkiness of calcium carbonate, and passing excess gas clears the milkiness as soluble calcium hydrogencarbonate forms. Carbon(II) oxide, carbon monoxide, CO, is the dangerous partner. It is produced by incomplete combustion when carbon fuel burns in a limited air supply, and it is prepared in the laboratory by dehydrating methanoic or ethanoic acid with concentrated sulphuric(VI) acid. CO is colourless, odourless and highly poisonous because it binds to haemoglobin in the blood far more strongly than oxygen does, which is exactly why burning charcoal in a closed room can kill. It burns with a blue flame to give CO2, reduces hot copper(II) oxide to copper while itself being oxidised, and is a neutral oxide, reacting with neither acids nor bases. Combustion neatly joins the two: plenty of air gives complete combustion, CO2, water and the full heat, but a limited air supply gives incomplete combustion, CO or black soot, and less heat, which is why a yellow, smoky flame signals poor air mixing and danger.",
          "bulletPoints": [
            "CO2: CaCO3 + 2HCl -> CaCl2 + H2O + CO2; denser than air, downward delivery; limewater milkiness clearing on excess.",
            "CO: from incomplete combustion or dehydration of methanoic acid with concentrated H2SO4; colourless, odourless, poisonous.",
            "CO binds blood haemoglobin and is a neutral oxide; it burns blue and reduces hot copper(II) oxide to copper.",
            "Complete combustion (excess air): CO2 + H2O + full heat; incomplete (limited air): CO or soot + less heat.",
            "Never burn charcoal in a closed room; the colourless, odourless CO is the hazard."
          ],
          "keyTakeaway": "CO2 is tested by limewater and collected by downward delivery; CO is the silent, poisonous gas of incomplete burning.",
          "realWorldExample": "A family burning charcoal to warm a closed sleeping room is running incomplete combustion, filling the air with the odourless carbon(II) oxide the topic warns about; ventilation restores the air supply and safety."
        },
        {
          "title": "Carbonates, Hydrogencarbonates and Silicon Materials",
          "content": "Carbonates carry the CO3(2-) ion and hydrogencarbonates the HCO3- ion, and both release carbon(IV) oxide briskly when a dilute acid is added, the effervescence you use as a carbonate test. Heat splits them differently. Hydrogencarbonates are unstable and decompose on gentle heating, 2NaHCO3 -> Na2CO3 + H2O + CO2, the very reaction that puffs bread and agege when baking soda warms. Most metal carbonates need strong heat to break down into the metal oxide and CO2, and the classic case is the burning of limestone, CaCO3 -> CaO + CO2, which makes the quicklime at the heart of cement chemistry; sodium and potassium carbonates of group I are the exception, stable enough that a school flame will not decompose them. Silicon, the second element of group IV and the second most abundant in the earth's crust, rarely occurs free; it is found as silica, silicon(IV) oxide SiO2, in sand and quartz, and as silicates in clays and rocks. Silica is a giant covalent solid, hard, chemically inert and with a high melting point. Heating silica with carbon yields impure silicon for electronics, and fusing sand with sodium and calcium carbonates makes glass. Cement and concrete extend the same silicate story: firing limestone with clay produces cement whose compounds set with water, mixing cement with sand gives mortar, and adding aggregate gives concrete, the everyday building materials raised on every Ghanaian site.",
          "bulletPoints": [
            "Carbonates and hydrogencarbonates give CO2 with dilute acid, the effervescence carbonate test.",
            "Hydrogencarbonates decompose on gentle heating, 2NaHCO3 -> Na2CO3 + H2O + CO2; group I carbonates resist heat.",
            "Limestone on strong heat: CaCO3 -> CaO + CO2, the quicklime made for cement.",
            "Silica (SiO2) is a hard, inert giant covalent solid from sand and quartz; with carbon it gives impure silicon.",
            "Glass is fused sand plus carbonates; cement from fired limestone and clay; concrete is cement with sand and aggregate."
          ],
          "keyTakeaway": "Acid gives CO2 from any carbonate; heat gives CO2 except in group I; and silica and silicates become glass, cement and concrete.",
          "realWorldExample": "A block factory that fires limestone into quicklime and blends it with clay is making the cement your concrete lesson describes, turning Group IV silicate chemistry into walls and lintels across the country."
        }
      ],
      "commonMistakes": [
        "Confusing graphite and diamond properties; graphite is soft, slippery and conducts because of its layers and spare electrons, while diamond is hard and does not conduct, a swap that costs both marks.",
        "Collecting carbon(IV) oxide over water and calling it insoluble; CO2 is fairly soluble and denser than air, so it is taken by downward delivery, and milkiness in limewater is the test.",
        "Saying carbon monoxide is acidic or that it relights a splint; CO is a neutral, poisonous gas that burns with its own blue flame, and limewater tests carbon dioxide, not carbon monoxide.",
        "Writing that sodium carbonate decomposes on heating in the school flame; group I carbonates are heat-stable, so the equation belongs to hydrogencarbonates or to carbonates of less stable metals.",
        "Using the words absorption and adsorption interchangeably for charcoal; adsorption is the surface effect that removes colour and gas, and that single word carries the mark."
      ],
      "wassceExamTips": [
        "Paper 1 asks structure to property for the carbon allotropes; learn three lines, diamond hard giant tetrahedral, graphite layered and conducting, charcoal porous and adsorbing.",
        "In Paper 2 a CO2 preparation part is marked on reagents, collection and test; write dilute hydrochloric acid on marble, downward delivery, and limewater milkiness as three scored phrases.",
        "For the carbonate and hydrogencarbonate heat question, state the group I exception plainly; examiners look for the fact that sodium and potassium carbonates do not decompose.",
        "When comparing complete and incomplete combustion, list the products for each and add the safety line on carbon monoxide; the reason mark is separate from the product mark.",
        "Paper 3 alternative-practical may show charcoal decolourising a solution; name it adsorption, state that it happens on the surface, and give one use such as gas masks or sugar refining."
      ],
      "summaryChecklist": [
        "Can I compare the structure and uses of diamond, graphite and charcoal and explain adsorption?",
        "Can I prepare and test carbon(IV) oxide and give the properties and dangers of carbon(II) oxide?",
        "Can I write the acid and heat reactions of carbonates and hydrogencarbonates with the group I exception?",
        "Can I distinguish complete from incomplete combustion by products and safety?",
        "Can I link silica and silicates to glass, cement and concrete with a correct equation?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-groupiv-1",
        "title": "Volume of Carbon(IV) Oxide from a Carbonate and Acid",
        "problem": "Sodium carbonate reacts with excess dilute hydrochloric acid: Na2CO3 + 2HCl -> 2NaCl + H2O + CO2. Calculate the volume of carbon(IV) oxide, measured at s.t.p., produced when 5.3 g of sodium carbonate reacts completely. (Na = 23, C = 12, O = 16; molar volume at s.t.p. = 22.4 dm3.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and mole ratio: Na2CO3 : CO2 = 1 : 1.",
          "Step 2 (M1): Molar mass of Na2CO3 = 2 x 23 + 12 + 3 x 16 = 46 + 12 + 48 = 106 g/mol.",
          "Step 3 (M1): Moles of Na2CO3 = 5.3 g / 106 g/mol = 0.05 mol.",
          "Step 4 (M1): From the 1 : 1 ratio, moles of CO2 = 0.05 mol.",
          "Step 5 (A1): Volume of CO2 at s.t.p. = 0.05 mol x 22.4 dm3/mol = 1.12 dm3 (about 1.2 dm3 if measured at r.t.p. using 24 dm3/mol)."
        ],
        "keyTakeaway": "Mass to moles, across the mole ratio, then moles to volume with the molar volume; note whether s.t.p. or r.t.p. is asked."
      },
      {
        "id": "ex-che-groupiv-2",
        "title": "Quicklime and Carbon Dioxide from Burning Limestone",
        "problem": "Limestone (calcium carbonate) is strongly heated: CaCO3 -> CaO + CO2. If 50 g of pure calcium carbonate is decomposed, calculate the mass of calcium oxide (quicklime) formed and the volume of carbon(IV) oxide at s.t.p. (Ca = 40, C = 12, O = 16; molar volume at s.t.p. = 22.4 dm3.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and mole ratio: CaCO3 : CaO : CO2 = 1 : 1 : 1.",
          "Step 2 (M1): Molar mass of CaCO3 = 40 + 12 + 3 x 16 = 100 g/mol.",
          "Step 3 (M1): Moles of CaCO3 = 50 g / 100 g/mol = 0.5 mol.",
          "Step 4 (M1): Moles of CaO = 0.5 mol; molar mass of CaO = 40 + 16 = 56 g/mol.",
          "Step 5 (A1): Mass of calcium oxide formed = 0.5 mol x 56 g/mol = 28 g.",
          "Step 6 (A1): Volume of CO2 at s.t.p. = 0.5 mol x 22.4 dm3/mol = 11.2 dm3."
        ],
        "keyTakeaway": "One mole of carbonate gives one mole of oxide and one mole of gas; convert the moles to grams for the solid and to volume for the gas."
      }
    ],
    "quiz": {
      "id": "quiz-che-carbon-silicon-group-iv-compounds",
      "topicId": "shs2-che-t2-carbon-silicon-group-iv-compounds",
      "title": "Carbon, Silicon and Group IV Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-groupiv-1",
          "quizId": "quiz-che-carbon-silicon-group-iv-compounds",
          "questionText": "Which allotrope of carbon is soft, slippery and conducts electricity?",
          "optionA": "Graphite",
          "optionB": "Diamond",
          "optionC": "Charcoal",
          "optionD": "Carbon(IV) oxide",
          "correctOption": "A",
          "subConcept": "Allotropes of carbon",
          "explanation": "Graphite is made of layered hexagonal sheets that slip and carry mobile electrons, so it is a lubricant and a conductor. Diamond is hard and non-conducting, charcoal is porous amorphous carbon, and carbon(IV) oxide is a gas, not an allotrope.",
          "remediationTip": "Attach to graphite two words, layers and conducting, and to diamond the word hard."
        },
        {
          "id": "q-che-groupiv-2",
          "quizId": "quiz-che-carbon-silicon-group-iv-compounds",
          "questionText": "Which test confirms a gas is carbon(IV) oxide?",
          "optionA": "It burns with a squeaky pop",
          "optionB": "It relights a glowing splint",
          "optionC": "It turns limewater milky",
          "optionD": "It turns damp red litmus blue",
          "correctOption": "C",
          "subConcept": "Test for carbon(IV) oxide",
          "explanation": "Carbon(IV) oxide precipitates calcium carbonate from limewater, giving the white milkiness that clears again on excess gas. Pop is hydrogen, relighting is oxygen, and blue litmus is ammonia.",
          "remediationTip": "Keep one line, CO2 plus limewater turns milky, and the clearing-on-excess detail for full marks."
        },
        {
          "id": "q-che-groupiv-3",
          "quizId": "quiz-che-carbon-silicon-group-iv-compounds",
          "questionText": "The poisonous gas formed when a carbon fuel burns in a limited supply of air is",
          "optionA": "carbon(IV) oxide",
          "optionB": "carbon(II) oxide (carbon monoxide)",
          "optionC": "nitrogen",
          "optionD": "methane",
          "correctOption": "B",
          "subConcept": "Incomplete combustion",
          "explanation": "Incomplete combustion produces carbon(II) oxide, carbon monoxide, colourless and odourless but deadly because it binds blood haemoglobin. Carbon(IV) oxide is the product of complete combustion and is not this poison.",
          "remediationTip": "Pair limited air with carbon monoxide and closed room, and excess air with carbon dioxide."
        },
        {
          "id": "q-che-groupiv-4",
          "quizId": "quiz-che-carbon-silicon-group-iv-compounds",
          "questionText": "Which gas is given off when sodium hydrogencarbonate is heated?",
          "optionA": "Hydrogen",
          "optionB": "Oxygen",
          "optionC": "Ammonia",
          "optionD": "Carbon(IV) oxide",
          "correctOption": "D",
          "subConcept": "Action of heat on hydrogencarbonates",
          "explanation": "Heating splits hydrogencarbonates: 2NaHCO3 -> Na2CO3 + H2O + CO2, releasing carbon(IV) oxide, which is why baking soda raises dough. The other gases are not products of this decomposition.",
          "remediationTip": "Remember the three products of heating a hydrogencarbonate: the carbonate, water and CO2."
        },
        {
          "id": "q-che-groupiv-5",
          "quizId": "quiz-che-carbon-silicon-group-iv-compounds",
          "questionText": "Charcoal removes colour from a sugar solution because it",
          "optionA": "adsorbs the coloured particles onto its large surface area",
          "optionB": "reacts chemically to destroy the sugar",
          "optionC": "dissolves the colour and carries it away",
          "optionD": "boils the solution until the colour evaporates",
          "correctOption": "A",
          "subConcept": "Adsorption by charcoal",
          "explanation": "The coloured impurities stick to the vast porous surface of the charcoal, a surface effect called adsorption, leaving a clearer solution. It is not a chemical destruction of the sugar, a dissolution, or evaporation of colour.",
          "remediationTip": "Say the word adsorption and the phrase surface area together whenever charcoal clears a colour."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t2-alkali-alkaline-earth-metals",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 10,
    "title": "Alkali and Alkaline Earth Metals, Their Compounds and Uses",
    "description": "Group I properties and reaction with water, flame colours, sodium and potassium compounds in soap and glass, the group II trend in reactivity, calcium oxide and hydroxide, plaster and concrete, hardness from calcium and magnesium salts, and the uses of these metals in building and agriculture.",
    "isFreeTrial": false,
    "keyNotes": "• The alkali metals of group I, lithium, sodium, potassium, rubidium and caesium, have one electron in their outer shell, are soft silvery metals that tarnish in air, and are stored under oil to keep moisture and oxygen off the fresh surface.\n• Group I reactivity increases down the group because the single outer electron is farther from the nucleus and more shielded, so it is lost more easily; lithium fizzes, sodium melts to a fizzing ball, and potassium reacts violently with a lilac flame.\n• Reaction with water: 2Na + 2H2O -> 2NaOH + H2; a strongly alkaline solution of the metal hydroxide forms and hydrogen gas is released, and the same general equation, 2M + 2H2O -> 2MOH + H2, fits every group I metal.\n• Flame colours are a key group I and group II identification: lithium crimson red, sodium golden yellow, potassium lilac, and calcium brick red; a clean nichrome wire dipped in the salt is held in a blue Bunsen flame and the colour noted.\n• Sodium and potassium compounds are industrially important: sodium hydroxide (caustic soda) makes soap by saponifying palm or coconut oil, sodium carbonate is used in glass and soap manufacture, common salt is a food and de-icing chemical, and potassium compounds feature in fertilisers.\n• The alkaline earth metals of group II, beryllium, magnesium, calcium, strontium and barium, have two outer electrons, are harder and denser than group I, and lose both electrons to form M2+ ions.\n• Group II reactivity also increases down the group as the two outer electrons are lost more easily; magnesium burns in air with a dazzling white flame, 2Mg + O2 -> 2MgO, and calcium reacts more readily with water than magnesium does.\n• Calcium oxide (quicklime) is made by heating limestone, CaCO3 -> CaO + CO2; it is a basic oxide used to line steel furnaces, to treat acidic soils, and in making mortar, and it reacts with water to give calcium hydroxide (slaked lime), CaO + H2O -> Ca(OH)2, an exothermic slaking.\n• Calcium hydroxide solution is limewater, used to test carbon(IV) oxide; slaked lime is mixed with sand to make mortar and with aggregate and cement in concrete work, and plaster of Paris, made from gypsum, sets with water to a hard mass for building and casts.\n• Cement is made by heating limestone with clay, and concrete is cement mixed with sand and stones; mortar is cement with sand only, the difference examiners test.\n• Hardness of water comes from dissolved calcium and magnesium salts; temporary hardness is due to calcium hydrogen carbonate, Ca(HCO3)2, and is removed by boiling, which precipitates calcium carbonate, while permanent hardness is due to calcium and magnesium sulphates and chlorides, removed by adding washing soda (sodium carbonate) or by ion exchange.\n• Uses in agriculture and daily life: lime raises the pH of acidic cocoa-farm soil, potassium salts supply the potash of NPK fertilisers, sodium and calcium compounds appear in soap, glass and building work, and the flame tests link group I and group II salts to colour.",
    "detailedNotes": {
      "overview": "This topic pairs the two most useful metal columns. The alkali metals of group I are soft, wildly reactive with water, and give their compounds to soap, glass and fertiliser; the alkaline earth metals of group II are harder, less reactive but still rising downwards, and supply the lime, cement and concrete that build Ghana and the calcium and magnesium salts that harden water. You will fix the shared outer structure of each group, the reaction with water and its equation, the flame colours that identify the salts, and the trend in reactivity explained by electron loss. Then follow calcium from limestone to quicklime to slaked lime to mortar and concrete, and end with the two kinds of water hardness and their removal.",
      "introduction": "Study the groups as parallels. For group I write the one-electron structure, the water equation and the rising reactivity, then list sodium and potassium compounds with one use each. For group II write the two-electron structure, the M2+ ion, and the calcium oxide to hydroxide chain with its equations. Build a small flame-colour table, sodium golden yellow, potassium lilac, lithium crimson, calcium brick red, and test yourself daily. Finally sort hardness into temporary, removed by boiling, and permanent, removed by washing soda or ion exchange, and practise a water-softening calculation with moles of calcium hydrogen carbonate.",
      "realWorldContext": "Group I and group II chemistry is visible all around the country. The black soap sold in Ghanaian markets is made by saponifying palm or cocoa-butter oil with caustic soda, sodium hydroxide from group I, the same alkali used in glass and detergents. On building sites from Kumasi to Accra, workers slake quicklime, watch it steam as calcium oxide turns to calcium hydroxide, and blend lime and cement with sand into mortar and with stones into concrete, the group II chain in action. Farmers spread lime on acidic cocoa and maize soils to raise the pH, and potash from potassium salts feeds the same fields. In homes near hard-water sources, kettles coat with scale because calcium and magnesium salts precipitate on boiling, the temporary hardness this topic explains and shows how to remove.",
      "objectives": [
        "Describe the properties of the group I metals, their reaction with water and the trend in reactivity down the group",
        "State the flame colours of lithium, sodium, potassium and calcium and use them to identify salts",
        "Name the important sodium and potassium compounds and their uses in soap, glass and fertiliser",
        "Describe the group II trend in reactivity and follow calcium oxide and hydroxide into mortar, plaster and concrete, and explain the two types of water hardness and their removal"
      ],
      "sections": [
        {
          "title": "Group I: Soft, Reactive Metals and Their Water Reaction",
          "content": "The alkali metals all carry a single electron in their outer shell, and that one electron decides everything about their chemistry. They are soft enough to cut with a knife, shine when freshly cut but tarnish at once in moist air, so they are kept under oil to shut out oxygen and water. Drop a piece into water and the metal reacts, forming a strongly alkaline solution of the hydroxide and releasing hydrogen gas; sodium behaves as 2Na + 2H2O -> 2NaOH + H2, the same general pattern 2M + 2H2O -> 2MOH + H2 for the whole group. Watch the violence grow as you descend: lithium fizzes gently, sodium melts into a silvery ball that skims the surface with a hissing fizz, and potassium reacts so fiercely it often ignites the hydrogen with a lilac flame. The reason for rising reactivity is electron loss; a metal reacts by giving away its outer electron, and going down the group each added shell both moves that electron farther from the nucleus and shields it more, so the hold weakens and the electron goes more readily. Handle these metals with forceps, never bare hands, keep only a pea-sized piece on the water trough, wear eye protection, and tie back the observation to the one-electron structure every time.",
          "bulletPoints": [
            "Group I metals have one outer electron, are soft, and tarnish in air, so they are stored under oil.",
            "2Na + 2H2O -> 2NaOH + H2; general form 2M + 2H2O -> 2MOH + H2 gives an alkaline solution and hydrogen.",
            "Reactivity rises down the group: lithium fizzes, sodium melts and fizzes, potassium ignites with a lilac flame.",
            "Reason for the trend: added shells and shielding loosen the outer electron, which the metal loses in reacting.",
            "Safety: forceps, pea-sized piece, eye protection, water trough only, never touch the metal."
          ],
          "keyTakeaway": "One loose outer electron makes group I soft and reactive; more shells mean an easier loss, so reactivity climbs downwards.",
          "realWorldExample": "A student who drops sodium on the class water trough sees the fizzing ball and hears the pop of the hydrogen; that lilac potassium flame on a brighter burn is the same rising-reactivity order drawn from the group's structure."
        },
        {
          "title": "Flame Colours and the Compounds of Sodium and Potassium",
          "content": "Because the metals themselves are too reactive to meet in ordinary work, most of the useful chemistry of groups I and II is in their compounds, and the fastest way to tell one cation from another is the flame test. Moisten a clean nichrome wire with a little salt on a drop of concentrated hydrochloric acid, hold it in a blue Bunsen flame and read the colour: sodium burns the flame golden yellow, potassium gives a lilac, lithium a crimson red and calcium a brick red. These four colours are worth a card each, because Paper 1 pairs metal and colour year after year. Sodium and potassium compounds then carry heavy industrial load. Sodium hydroxide, caustic soda, is the alkali that makes soap by saponifying palm or coconut oil, a reaction seen at Ghanaian black-soap kitchens, and it is used to digest grease and in paper-making. Sodium carbonate, washing soda, softens hard water by precipitating the calcium and magnesium ions and is a key ingredient of glass and soap. Common salt, sodium chloride, seasons food and is a raw chemical of the alkali industry, while potassium salts supply the potash that farmers apply in NPK fertilisers. Each compound keeps sodium or potassium as a one-plus ion; the different anion is what gives different use.",
          "bulletPoints": [
            "Flame colours: sodium golden yellow, potassium lilac, lithium crimson red, calcium brick red.",
            "Flame test uses a clean nichrome wire with a little salt in concentrated hydrochloric acid in a blue flame.",
            "Sodium hydroxide (caustic soda) makes soap by saponifying palm or coconut oil.",
            "Sodium carbonate softens hard water and is used in glass and soap manufacture.",
            "Potassium salts provide the potash in NPK fertilisers; sodium chloride is common salt and a chemical feedstock."
          ],
          "keyTakeaway": "Match each metal to its flame colour and each sodium or potassium compound to one named use; the ion stays, the anion changes the job.",
          "realWorldExample": "The maker of Ghanaian black soap boiling palm oil with caustic soda is running the group I saponification that turns an oil into the soap on every household shelf."
        },
        {
          "title": "Group II: Lime, Cement, Concrete and Water Hardness",
          "content": "Group II, the alkaline earth metals, have two outer electrons and form two-plus ions, so they are harder, denser and less reactive than their group I neighbours, yet reactivity still rises downwards as magnesium burns in air with a dazzling white flame, 2Mg + O2 -> 2MgO, and calcium meets water more readily than magnesium does. The compound chemistry that matters most is calcium's. Firing limestone drives off carbon(IV) oxide and leaves quicklime, CaCO3 -> CaO + CO2; quicklime is a basic oxide used to line steel furnaces, to neutralise acidic farm soil and in making mortar. Adding water slakes it, CaO + H2O -> Ca(OH)2, an exothermic reaction that steams, giving slaked lime, and its solution is limewater, the very reagent used to test carbon(IV) oxide. Building chemistry follows: plaster of Paris from gypsum sets with water to a hard mass, cement is made by heating limestone with clay, mortar is cement mixed with sand, and concrete is cement with sand and stones, so the lime chain quietly underpins a Ghanaian wall. In water, dissolved calcium and magnesium salts cause hardness. Temporary hardness comes from calcium hydrogen carbonate and is removed by boiling, which precipitates calcium carbonate as scale, while permanent hardness comes from the calcium and magnesium sulphates and chlorides and is removed by adding washing soda, which precipitates them, or by passing the water through an ion-exchange resin.",
          "bulletPoints": [
            "Group II metals have two outer electrons and form M2+ ions; they are harder and less reactive than group I.",
            "Reactivity rises down group II; magnesium burns with a dazzling white flame, 2Mg + O2 -> 2MgO.",
            "Quicklime chain: CaCO3 -> CaO + CO2 on heating; CaO + H2O -> Ca(OH)2 on slaking, exothermic.",
            "Building materials: lime for soil and mortar, plaster from gypsum, cement from limestone and clay, concrete with aggregate.",
            "Hardness: temporary from calcium hydrogen carbonate, removed by boiling; permanent from calcium and magnesium sulphates or chlorides, removed by washing soda or ion exchange."
          ],
          "keyTakeaway": "Follow calcium from limestone to quicklime to slaked lime to cement and concrete, and split hardness into boiled-away temporary and soda-removed permanent.",
          "realWorldExample": "A mason at a building site slaking lime into mortar, watching the mixture steam as calcium oxide becomes calcium hydroxide, is running the same exothermic chain your group II equations describe."
        }
      ],
      "commonMistakes": [
        "Saying group I reactivity falls down the group; metals react by losing the outer electron, which added shells and shielding make easier, so reactivity rises from lithium to potassium.",
        "Swapping the flame colours, especially lilac and golden yellow; sodium is golden yellow and potassium is lilac, lithium crimson and calcium brick red.",
        "Writing calcium with a one-plus ion or a wrong hydroxide formula; group II forms Ca2+, so calcium hydroxide is Ca(OH)2, with the brackets and the subscript two both required.",
        "Claiming boiling removes all hardness; boiling only removes temporary hardness by precipitating calcium carbonate, while permanent hardness needs washing soda or an ion-exchange resin.",
        "Confusing mortar and concrete; mortar is cement with sand for bonding blocks, concrete is cement with sand and aggregate, and a building question marks the difference."
      ],
      "wassceExamTips": [
        "Paper 1 tests the four flame colours directly; drill a card with sodium golden yellow, potassium lilac, lithium crimson and calcium brick red until you cannot miss.",
        "In Paper 2 a group I water part is marked on the equation and the trend; write 2Na + 2H2O -> 2NaOH + H2 (M1) and the rising reactivity with its shielding reason (A1).",
        "For lime questions give each equation its own line, decomposition of CaCO3 and slaking of CaO, and label each oxide or hydroxide by its common name, quicklime and slaked lime.",
        "When asked to soften water, name the hardness type first, then the removal method, boiling for temporary and washing soda or ion exchange for permanent; the pairing carries the marks.",
        "Include the safety word in any alkali-metal practical, forceps, eye protection and a pea-sized piece; examiners expect that line and award it separately from the chemistry."
      ],
      "summaryChecklist": [
        "Can I describe group I properties, write the water reaction and state the rising reactivity with its reason?",
        "Can I give the four flame colours and link them to the correct metal?",
        "Can I name sodium and potassium compounds and one use of each in soap, glass and fertiliser?",
        "Can I trace calcium from limestone through quicklime and slaked lime to mortar, plaster and concrete?",
        "Can I distinguish temporary from permanent hardness and state how each is removed?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-alkali-1",
        "title": "Hydrogen Volume and Alkali Concentration from Sodium and Water",
        "problem": "A piece of sodium of mass 4.6 g is dissolved in water to make 200 cm3 of solution: 2Na + 2H2O -> 2NaOH + H2. Calculate the volume of hydrogen produced at r.t.p. and the concentration of sodium hydroxide in the solution. (Na = 23; molar volume at r.t.p. = 24 dm3.)",
        "stepByStepSolution": [
          "Step 1 (M1): Moles of sodium = 4.6 g / 23 g/mol = 0.2 mol.",
          "Step 2 (M1): Mole ratio from the equation, Na : H2 = 2 : 1, so moles of hydrogen = 0.2 / 2 = 0.1 mol.",
          "Step 3 (A1): Volume of hydrogen at r.t.p. = 0.1 mol x 24 dm3/mol = 2.4 dm3.",
          "Step 4 (M1): Mole ratio Na : NaOH = 2 : 2 = 1 : 1, so moles of NaOH = 0.2 mol.",
          "Step 5 (A1): Concentration of NaOH = 0.2 mol / (200/1000 dm3) = 0.2 / 0.2 = 1.0 mol/dm3."
        ],
        "keyTakeaway": "Work from the balanced equation: the metal moles set both the gas (half as many) and the hydroxide (equal moles), then divide by the solution volume."
      },
      {
        "id": "ex-che-alkali-2",
        "title": "Mass of Slaked Lime from Quicklime",
        "problem": "Quicklime reacts with water to form slaked lime: CaO + H2O -> Ca(OH)2. If 28 g of calcium oxide is fully slaked, calculate the mass of calcium hydroxide produced. (Ca = 40, O = 16, H = 1.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and mole ratio: CaO : Ca(OH)2 = 1 : 1.",
          "Step 2 (M1): Molar mass of CaO = 40 + 16 = 56 g/mol.",
          "Step 3 (M1): Moles of CaO = 28 g / 56 g/mol = 0.5 mol.",
          "Step 4 (M1): From the 1 : 1 ratio, moles of Ca(OH)2 = 0.5 mol; molar mass of Ca(OH)2 = 40 + 2 x (16 + 1) = 74 g/mol.",
          "Step 5 (A1): Mass of calcium hydroxide produced = 0.5 mol x 74 g/mol = 37 g."
        ],
        "keyTakeaway": "Slaking is a one-to-one mole change; convert the quicklime mass to moles, keep the same moles, then multiply by the hydroxide molar mass."
      }
    ],
    "quiz": {
      "id": "quiz-che-alkali-alkaline-earth-metals",
      "topicId": "shs2-che-t2-alkali-alkaline-earth-metals",
      "title": "Alkali and Alkaline Earth Metals Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-alkali-1",
          "quizId": "quiz-che-alkali-alkaline-earth-metals",
          "questionText": "Which statement about the group I metals is false?",
          "optionA": "They are soft enough to cut with a knife",
          "optionB": "They react with water to give an alkaline solution and hydrogen",
          "optionC": "They are stored under oil to keep out air and moisture",
          "optionD": "Their reactivity decreases down the group",
          "correctOption": "D",
          "subConcept": "Group I properties and trend",
          "explanation": "Reactivity increases down group I because the outer electron is lost more easily with added shells and shielding, so option D is the false statement. The other three are true group I facts.",
          "remediationTip": "State the rule, metals lose electrons so group I reactivity rises downwards, and check each option against it."
        },
        {
          "id": "q-che-alkali-2",
          "quizId": "quiz-che-alkali-alkaline-earth-metals",
          "questionText": "Which flame colour is produced by a sodium salt in the flame test?",
          "optionA": "Golden yellow",
          "optionB": "Lilac",
          "optionC": "Crimson red",
          "optionD": "Brick red",
          "correctOption": "A",
          "subConcept": "Flame colours",
          "explanation": "Sodium gives a golden yellow flame. Lilac belongs to potassium, crimson red to lithium and brick red to calcium, so each colour must be matched to its one metal.",
          "remediationTip": "Make a four-row card, sodium yellow, potassium lilac, lithium crimson, calcium brick red, and revise it daily."
        },
        {
          "id": "q-che-alkali-3",
          "quizId": "quiz-che-alkali-alkaline-earth-metals",
          "questionText": "How does the reactivity of the group II metals change down the group?",
          "optionA": "It stays the same",
          "optionB": "It becomes zero",
          "optionC": "It increases down the group",
          "optionD": "It decreases down the group",
          "correctOption": "C",
          "subConcept": "Group II trend",
          "explanation": "The alkaline earth metals, like group I, react by losing their outer electrons; added shells and shielding make both electrons easier to lose, so reactivity increases from magnesium towards barium. Options B and D reverse or deny this.",
          "remediationTip": "Link metals with losing electrons and rising reactivity downwards, and both groups obey the same rule."
        },
        {
          "id": "q-che-alkali-4",
          "quizId": "quiz-che-alkali-alkaline-earth-metals",
          "questionText": "Which compound makes soap by saponifying palm oil?",
          "optionA": "Calcium oxide",
          "optionB": "Sodium hydroxide",
          "optionC": "Potassium nitrate",
          "optionD": "Calcium carbonate",
          "correctOption": "B",
          "subConcept": "Sodium compounds and uses",
          "explanation": "Sodium hydroxide, caustic soda, splits palm or coconut oil into soap and glycerol in saponification, the reaction behind Ghanaian black soap. The calcium compounds do not perform this alkali job.",
          "remediationTip": "Pair soap-making with the words sodium hydroxide and caustic soda until the link is automatic."
        },
        {
          "id": "q-che-alkali-5",
          "quizId": "quiz-che-alkali-alkaline-earth-metals",
          "questionText": "Hardness in water is caused by dissolved",
          "optionA": "sodium and potassium salts",
          "optionB": "chloride and nitrate ions only",
          "optionC": "calcium and magnesium salts",
          "optionD": "hydrogen and ammonium ions",
          "correctOption": "C",
          "subConcept": "Water hardness",
          "explanation": "The calcium and magnesium salts, mainly hydrogencarbonates for temporary hardness and sulphates and chlorides for permanent hardness, cause the scaling and poor lathering of hard water. Sodium and potassium salts do not produce hardness.",
          "remediationTip": "Recall the two ions, calcium and magnesium, then split hardness into boiled temporary and soda-removed permanent."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t3-chemical-equations-ionic-reactions-stoichiometry",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 5,
    "title": "Chemical Equations, Ionic Reactions and Stoichiometry",
    "description": "Writing formulae correctly and then balancing with state symbols, reading a balanced equation as mole, mass and gas-volume ratios, stripping out spectator ions to an ionic equation, working mole to mass and limiting-reagent calculations, and reporting percentage yield the way WAEC marks it.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• An equation is built in two separate stages and the second never repairs the first: the formulae come from the valencies of the ions, so aluminium sulfate is Al2(SO4)3 and calcium hydroxide is Ca(OH)2, and only then are coefficients inserted to balance the atoms.\n• Balancing rules that hold in every exam script: balance elements that appear once on each side first, keep a polyatomic group such as SO4 or NO3 intact and balance it as a unit, leave hydrogen and oxygen until last, and never alter a subscript to force a balance.\n• State symbols are part of the equation, not decoration: (s) solid, (l) liquid, (g) gas and (aq) dissolved in water, so Ca(OH)2(aq) + CO2(g) -> CaCO3(s) + H2O(l) is the full answer expected for limewater turning milky.\n• A balanced equation asserts ratios: N2(g) + 3H2(g) -> 2NH3(g) means 1 molecule of nitrogen with 3 of hydrogen, 1 mole with 3 moles giving 2 moles, and, for gases at the same temperature and pressure, 20 cm3 with 60 cm3 giving 40 cm3, which is Gay-Lussac combined with Avogadro.\n• Mass ratios follow from the relative formula masses: Fe2O3 + 3CO -> 2Fe + 3CO2 carries Mr 160 for iron(III) oxide and 112 for the iron produced, so 160 g of ore yields 112 g of metal and 1.00 tonne of pure Fe2O3 yields 0.70 tonne of iron.\n• The mole is the bridge in every calculation: n = mass / Mr, n = concentration x volume in dm3, n = volume in dm3 / 22.4 at standard temperature and pressure, and number of particles = n x 6.02 x 10^23.\n• An ionic equation names the reacting species only: write the full equation, split every soluble ionic substance marked (aq) into its ions, keep solids, liquids, gases and weak substances whole, cancel the ions that appear unchanged on both sides, and check that both atoms and charge balance.\n• In CaCl2(aq) + Na2CO3(aq) -> CaCO3(s) + 2NaCl(aq) the calcium ions and carbonate ions react, Ca2+(aq) + CO3 2-(aq) -> CaCO3(s), while sodium and chloride are spectator ions that appear on both sides.\n• Solubility guidance for precipitates: all sodium, potassium and ammonium salts and all nitrates dissolve, most chlorides dissolve except silver and lead, most sulphates dissolve except barium, calcium sulphate is sparingly, and most carbonates and hydroxides except those of sodium, potassium and ammonium are insoluble.\n• A limiting reagent is found by converting both quantities to moles and comparing them with the ratio the equation requires: in 2CO(g) + O2(g) -> 2CO2(g), 40 cm3 of carbon monoxide sparked with 40 cm3 of oxygen uses all the carbon monoxide, leaves 20 cm3 of oxygen, and gives 40 cm3 of carbon(IV) oxide.\n• Percentage yield = actual mass obtained / theoretical mass predicted x 100, and it is below 100 because of incomplete reaction, losses on transfer and filtration, side reactions, and a product that is still wet or still dirty.\n• Percentage purity is a different quantity: pure mass / impure sample mass x 100, and confusing the two is a common objective-paper trap.",
    "detailedNotes": {
      "overview": "This topic turns the equation from a line of symbols into an instrument for calculation. You will learn to write formulae correctly from valency before any balancing is attempted, to balance with state symbols so the equation is complete in WAEC terms, and to read the equation as a set of ratios in particles, moles, masses and gas volumes. You will then learn to convert a molecular equation into an ionic equation by cancelling spectator ions, which is what a precipitation reaction really is, and to finish a stoichiometry calculation through moles, including the limiting reagent and percentage yield. Every number in the worked examples here uses the standard relative atomic masses, and each ratio is checked against the equation, so the method becomes the thing you are graded on rather than the arithmetic.",
      "introduction": "Work in the order the mark scheme follows. Take ten reactions you already know in words and write them three times: as formulae with states, as a balanced equation, and as an ionic equation where one exists. Then for each balanced equation write the three ratio lines, mole ratio, mass ratio and, if gases appear, volume ratio. Finally practise the calculation chain n = mass / Mr, then use the ratio, then convert back, on five problems a day, and insist on units at every line. Keep the four standard masses you are allowed to use visible on your page: Ar(Ca) = 40, Ar(C) = 12, Ar(O) = 16, Ar(H) = 1, and so on, since an examiner cannot follow a calculation whose source numbers are missing.",
      "realWorldContext": "Ratio thinking is what a Ghanaian factory pays for. A soap plant at Tema that saponifies palm oil with sodium hydroxide must weigh the alkali exactly, because excess caustic leaves a bar that burns skin and excess fat leaves a soft bar that will not sell. A water treatment works at Kpong dosing aluminium sulphate coagulant calculates the dose in moles per cubic metre of raw water. A block factory that quarries limestone and burns it to lime works from CaCO3(s) -> CaO(s) + CO2(g), which says that every 100 tonnes of good limestone must leave 56 tonnes of quicklime and 44 tonnes of carbon(IV) oxide through the stack, and the manager who expects 100 tonnes of lime from 100 tonnes of stone has not balanced the equation. Even the sachet-water plant and the bakery depend on the same arithmetic.",
      "objectives": [
        "Write the formulae of common compounds and ions correctly from valency, then balance the resulting equation and add state symbols",
        "State the particle, mole, mass and gas-volume information given by a balanced equation and use each form",
        "Convert a molecular equation into an ionic equation, identify the spectator ions and check that charge as well as atoms balance",
        "Carry out stoichiometric calculations linking mass, moles, concentration and gas volume at standard temperature and pressure",
        "Identify the limiting reagent in a given mixture and calculate percentage yield and percentage purity correctly"
      ],
      "sections": [
        {
          "title": "Formulae First, Then Balancing, Then State Symbols",
          "content": "Most unbalanced scripts fail at the formula, not the balance, because a wrong formula cannot be balanced into a true statement. The formula comes from the charges on the ions: sodium is Na+, calcium is Ca2+, oxide is O2-, hydroxide is OH-, carbonate is CO3 2-, sulphate is SO4 2-, and aluminium is Al3+, so aluminium sulphate must be Al2(SO4)3 to bring the total charge to zero, and calcium hydroxide must be Ca(OH)2 with the bracket showing that two hydroxide ions belong to one calcium. Only when the formulae are right may coefficients be inserted, and the efficient order is to balance the atoms that occur once on each side first, treat an intact polyatomic group as a single item, and leave hydrogen and oxygen until last. State symbols then close the equation: (s), (l), (g) and (aq). They matter because they distinguish the two very different reactions of sodium chloride, a solid with concentrated sulphuric acid giving hydrogen chloride gas, and an aqueous solution that merely supplies chloride ions, and they are marked as separate method marks in Paper 2.",
          "bulletPoints": [
            "Write formulae from ionic charges; never change a subscript to balance an equation.",
            "Balance single-occurrence atoms first, groups such as SO4 as units, hydrogen and oxygen last.",
            "Brackets show repeated groups: Ca(OH)2, Al2(SO4)3, (NH4)2SO4.",
            "State symbols (s), (l), (g), (aq) are required for full marks in a structured question.",
            "Check at the end by counting each element on both sides and writing the counts on the paper."
          ],
          "keyTakeaway": "Correct formulae make balancing mechanical; a subscript altered to force a balance produces an equation for a reaction that does not exist.",
          "realWorldExample": "A lime burner at Aboabo in the Kumasi market area who converts limestone to quicklime for mortar needs the mass ratio in CaCO3(s) -> CaO(s) + CO2(g), which says 100 kg of stone gives 56 kg of lime, so a load of 250 kg of stone should be planned as 140 kg of lime and not 250 kg."
        },
        {
          "title": "What a Balanced Equation Is Asserting",
          "content": "A balanced equation is a statement of ratios, and a candidate must be able to read it in four registers at once. In particles, N2(g) + 3H2(g) -> 2NH3(g) says one molecule of nitrogen joins three molecules of hydrogen to give two of ammonia. In moles the same coefficients read as 1 mole, 3 moles and 2 moles, which is the register used for every calculation. In mass, the relative formula masses convert those moles: 28 g of nitrogen with 6 g of hydrogen giving 34 g of ammonia, since Mr(N2) = 28, 3 x Mr(H2) = 6 and 2 x Mr(NH3) = 34, and the total is conserved. In volumes, Avogadro argues that equal volumes of gases hold equal numbers of molecules at the same temperature and pressure, so the coefficients are also volume ratios: 20 cm3 of nitrogen with 60 cm3 of hydrogen yield 40 cm3 of ammonia, provided water is not present as vapour. That last register is the one used in gas-eudiometry questions, and it works only for gases, never for a solid or a solution.",
          "bulletPoints": [
            "Coefficients give the molecule ratio, the mole ratio and, for gases only, the volume ratio.",
            "Multiply each coefficient by its relative formula mass to get the mass ratio.",
            "Mr(N2) = 28, Mr(H2) = 2, Mr(NH3) = 17, so 28 g + 6 g gives 34 g of ammonia.",
            "Gas volumes must be compared at the same temperature and pressure; 22.4 dm3 is the molar volume only at standard temperature and pressure.",
            "Total mass is unchanged in every equation, so a check of the mass column must balance too."
          ],
          "keyTakeaway": "Read the coefficients four ways, particles, moles, masses and gas volumes, and use the register the question asks for instead of forcing one.",
          "realWorldExample": "The ammonia plant logic that supplies fertiliser to Ghanaian cocoa farms rests on that ratio: three car loads of hydrogen gas for every one of nitrogen, with unreacted gas recycled, because the equation admits no other proportion."
        },
        {
          "title": "Ionic Equations and Spectator Ions",
          "content": "When two aqueous solutions are mixed, many of the ions present simply drift through the reaction untouched, and the ionic equation records only the species that change. The procedure is fixed: write the balanced molecular equation, split every soluble ionic substance labelled (aq) into its ions, leave intact anything that is a solid, a liquid, a gas or a weakly ionised substance such as water, then cancel the ions that appear unchanged on both sides, which are the spectator ions. For the precipitation carried out in the school laboratory, CaCl2(aq) + Na2CO3(aq) -> CaCO3(s) + 2NaCl(aq), the full ionic picture contains Ca2+, 2Cl-, 2Na+ and CO3 2- on the left, and the net change is Ca2+(aq) + CO3 2-(aq) -> CaCO3(s), with sodium and chloride spectators. The final equation must balance in atoms and in charge, and here the charges add to zero on both sides. The same method gives the neutralisation equation H+(aq) + OH-(aq) -> H2O(l) for every strong acid with every strong alkali, and gas tests are ionic too: the milking of limewater is Ca2+(aq) + 2OH-(aq) plus CO2 leading to CaCO3(s).",
          "bulletPoints": [
            "Split only (aq) ionic substances into ions; keep (s), (l), (g) and water whole.",
            "Spectator ions are those unchanged on both sides of the equation, commonly Na+, K+ and Cl- or NO3-.",
            "Check the net ionic equation for atoms and for total charge on both sides.",
            "Neutralisation between a strong acid and a strong alkali is always H+ + OH- -> H2O.",
            "Precipitate colours to know: white AgCl and BaSO4 and CaCO3, blue Cu(OH)2, reddish-brown Fe(OH)3."
          ],
          "keyTakeaway": "The ionic equation is the reaction; the rest of the ions only pay for the transport, so cancel the spectators and balance the charge as well as the atoms.",
          "realWorldExample": "A textile dye works around Kumasi that softens borehole water before dyeing relies on exactly this precipitation: sodium trioxocarbonate(IV) is added so that Ca2+ is removed as CaCO3, because calcium ions would otherwise react with the dye anions and spoil the shade."
        },
        {
          "title": "The Calculation Chain and the Limiting Reagent",
          "content": "Every stoichiometry calculation is the same three moves: convert the given quantity to moles, move across the equation using the mole ratio, and convert the answer out of moles into the unit the question demands. The four conversion doors are n = mass / Mr, n = concentration x volume in dm3, n = volume in dm3 / 22.4 at standard temperature and pressure, and number of particles = n x 6.02 x 10^23. When two reactant quantities are given, one of them may run out first, and that substance is the limiting reagent, which alone decides the amount of product. The test is to convert both to moles and compare the pair with the ratio in the equation. For example 4.0 g of hydrogen is 2.0 mol and 32.0 g of oxygen is 1.0 mol, and since 2H2 + O2 -> 2H2O requires exactly two moles of hydrogen per mole of oxygen, both are used up and 36.0 g of water forms. If instead 4.0 g of hydrogen had been sparked with 16.0 g of oxygen, the oxygen would be limiting, only 1.0 mol of hydrogen would react, and 18.0 g of water with 2.0 g of hydrogen left over would be the outcome. A reagent in excess is always the one whose mole number is more than the ratio allows.",
          "bulletPoints": [
            "Convert to moles first: mass / Mr, concentration x volume, or volume / 22.4 dm3 at standard temperature and pressure.",
            "Cross the equation with the mole ratio, then convert out to the unit asked for.",
            "Find the limiting reagent by comparing the mole numbers with the required ratio, not by comparing masses.",
            "Excess reagent remaining = amount supplied minus amount the equation says reacted.",
            "Gas volumes in a eudiometry question follow the volume ratio directly at constant temperature and pressure."
          ],
          "keyTakeaway": "Moles are the only language in which two different substances can be compared, so convert first, use the ratio, then convert back.",
          "realWorldExample": "A bottling plant mixing a dilute acid rinse calculates in the same order: from the concentration and volume to moles, from moles through the neutralising ratio to the mass of sodium hydroxide needed, and never from the volume of one solution straight to the mass of the solid."
        },
        {
          "title": "Percentage Yield, Purity and What a Factory Records",
          "content": "The theoretical mass is what the balanced equation predicts, and the actual mass is what the balance on the bench shows at the end of the work, so percentage yield is actual divided by theoretical multiplied by 100. A school preparation of a salt that should give 8.0 g and gives 4.2 g has a yield of 52.5%, and the loss is explained by solution left on the beaker wall and on the filter paper, crystals lost when the mother liquor is poured off, a reaction that simply stops before completion, and product dried only to a damp powder. Percentage purity is a different measurement, the mass of the wanted substance in a sample divided by the mass of the whole impure sample, and a question may ask for both in one part, so the labels must be kept straight. In industry the two numbers drive money: a plant that reports a falling yield knows it has a leak, a fouled catalyst or a temperature that has drifted, and a supplier of limestone who quotes 95 percent calcium trioxocarbonate(IV) is describing the ore, not the lime it will produce. Report yield to one decimal place, name which mass is in the numerator, and always show the theoretical mass worked from the equation.",
          "bulletPoints": [
            "Percentage yield = actual mass / theoretical mass x 100, never the other way about.",
            "Percentage purity = mass of wanted substance / mass of impure sample x 100.",
            "Theoretical mass is obtained by the mole chain from the balanced equation.",
            "Causes of low yield: incomplete reaction, transfer and filtration losses, side reactions, damp product.",
            "Yields above 100 percent signal a wet or contaminated product, not a superior method."
          ],
          "keyTakeaway": "Yield measures how much of the predicted product you actually recovered; purity measures how much of a sample is the substance at all, and the two must never be confused.",
          "realWorldExample": "A school laboratory at Ho preparing sodium chloride from 5.3 g of sodium trioxocarbonate(IV) and excess hydrochloric acid expects 5.85 g of dry salt, since 0.05 mol of the carbonate gives 0.10 mol of sodium chloride at Mr 58.5, and if only 5.00 g is recovered the form written up for the practical records a yield of 85.5 percent with the losses listed."
        }
      ],
      "commonMistakes": [
        "Balancing by altering a subscript, for example writing CaO2 for calcium oxide so that the oxygens appear to match; the formula is fixed by valency, only coefficients may change, and CaO2 is calcium peroxide, a different compound.",
        "Omitting state symbols or using them wrongly, and then losing the mark that separates aqueous hydrochloric acid from hydrogen chloride gas.",
        "Choosing the limiting reagent by comparing masses instead of moles, so 40 g of calcium oxide and 18 g of water look as though the water is in short supply when the mole numbers decide it.",
        "Cancelling spectator ions from an equation that was never split into ions, or leaving a charge unbalanced in the net ionic equation, for example writing Ca2+ + CO3 2- -> CaCO3 without state symbols and without checking that the charges sum to zero.",
        "Using 24 dm3 for a gas volume when the question says standard temperature and pressure, where the molar volume is 22.4 dm3, or applying a gas molar volume to a solid or to an aqueous solution."
      ],
      "wassceExamTips": [
        "In Paper 2 a balance-the-equation part is marked on the final coefficients with the formulae already correct; write the unbalanced equation first so that any arithmetic slip still shows the intended reaction and earns a method mark.",
        "When a question ends with calculate the mass or the volume, the examiner looks for three lines: moles of the substance given, the mole ratio taken from the equation, and the conversion out to the answer; a single line of numbers with the right answer may score only one mark.",
        "State symbols and the units of every intermediate quantity are marked, so write Mr(CaCO3) = 100 and n = 5.0 g / 100 g per mol = 0.050 mol rather than bare decimals.",
        "For a gas-volume question decide at once whether the gas volume is at standard temperature and pressure, 22.4 dm3 per mole, or is being compared with another gas at the same temperature and pressure, where only the ratio matters.",
        "In an ionic-equation question, name the spectator ions in a separate sentence even if the question asks only for the equation, because Paper 1 distractors test exactly that identification."
      ],
      "summaryChecklist": [
        "Can I write correct formulae from ionic charges and then balance an equation with state symbols?",
        "Can I state the particle, mole, mass and gas-volume ratios a balanced equation gives?",
        "Can I derive a net ionic equation and identify the spectator ions, checking atoms and charge?",
        "Can I convert between mass, moles, concentration and gas volume at standard temperature and pressure in a calculation chain?",
        "Can I pick out the limiting reagent and calculate percentage yield or percentage purity correctly?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-equations-1",
        "title": "A Mass Chain through Three Balanced Equations",
        "problem": "5.6 g of calcium oxide is treated with excess water, and the calcium hydroxide formed is then reacted with 0.200 mol of sodium trioxocarbonate(IV) in solution. Determine the mass of calcium trioxocarbonate(IV) precipitate expected and the mass of sodium hydroxide formed. Use Ar(Ca) = 40, Ar(C) = 12, Ar(O) = 16, Ar(H) = 1, Ar(Na) = 23.",
        "stepByStepSolution": [
          "Step 1 (M1): Write and balance the first equation with state symbols: CaO(s) + H2O(l) -> Ca(OH)2(aq), and note Mr(CaO) = 40 + 16 = 56 and Mr(Ca(OH)2) = 40 + 2(16 + 1) = 74.",
          "Step 2 (M1): Convert the given mass to moles: n(CaO) = 5.6 g / 56 g per mol = 0.10 mol, and since water is in excess the calcium oxide is the limiting reagent, so 0.10 mol of calcium hydroxide forms.",
          "Step 3 (M1): Write the second equation: Ca(OH)2(aq) + Na2CO3(aq) -> CaCO3(s) + 2NaOH(aq), which is already balanced with one calcium, two sodium, two carbon groups and matching hydrogen and oxygen.",
          "Step 4 (M1): Compare the mole supplies with the 1 to 1 ratio the equation requires: 0.10 mol of calcium hydroxide against 0.200 mol of sodium trioxocarbonate(IV), so calcium hydroxide limits and the carbonate is in excess by 0.10 mol.",
          "Step 5 (A1): Moles of precipitate = 0.10 mol, and with Mr(CaCO3) = 40 + 12 + 48 = 100 the theoretical mass of calcium trioxocarbonate(IV) = 0.10 x 100 = 10.0 g.",
          "Step 6 (A1): Moles of sodium hydroxide = 2 x 0.10 = 0.20 mol, and with Mr(NaOH) = 23 + 16 + 1 = 40 the mass formed = 0.20 x 40 = 8.0 g.",
          "Step 7 (A1): Final answer: 10.0 g of dry calcium trioxocarbonate(IV) and 8.0 g of sodium hydroxide are expected, and the mass of unused sodium trioxocarbonate(IV) remaining is 0.10 x 106 = 10.6 g."
        ],
        "keyTakeaway": "In a chain of reactions the product of one step becomes the reagent of the next, and each step still needs its own limiting-reagent comparison."
      },
      {
        "id": "ex-che-equations-2",
        "title": "Gas Volumes, a Limiting Reagent and the Final Mixture",
        "problem": "40 cm3 of carbon monoxide was sparked with 40 cm3 of oxygen in a eudiometer tube, and the mixture was cooled back to the original temperature and pressure. Determine the volume of carbon(IV) oxide formed, the volume of the excess gas remaining, and the total gas volume after cooling. Take Mr(CO2) = 44 and the molar volume as 22.4 dm3 at standard temperature and pressure.",
        "stepByStepSolution": [
          "Step 1 (M1): Write and balance the equation: 2CO(g) + O2(g) -> 2CO2(g), which fixes the volume ratio as 2 volumes of carbon monoxide with 1 volume of oxygen giving 2 volumes of carbon(IV) oxide.",
          "Step 2 (M1): Apply the ratio to the carbon monoxide: 40 cm3 of carbon monoxide needs 40 x 1 / 2 = 20 cm3 of oxygen, and only 20 cm3 of the 40 cm3 supplied is consumed.",
          "Step 3 (A1): Oxygen is therefore the reagent in excess and carbon monoxide is the limiting reagent; the volume of excess oxygen remaining = 40 cm3 - 20 cm3 = 20 cm3.",
          "Step 4 (A1): Carbon(IV) oxide formed follows the 2 to 2 ratio with carbon monoxide, so the volume formed = 40 cm3.",
          "Step 5 (M1): Total volume of gas after cooling = carbon(IV) oxide plus unused oxygen = 40 cm3 + 20 cm3 = 60 cm3, and no volume is credited to the carbon monoxide because it has all reacted.",
          "Step 6 (M1): To express the product as a mass, convert the volume: 40 cm3 = 0.040 dm3, so n = 0.040 / 22.4 = 1.786 x 10^-3 mol at standard temperature and pressure.",
          "Step 7 (A1): Final answer: 40 cm3 of carbon(IV) oxide and 20 cm3 of unused oxygen remain, a total of 60 cm3, and the mass of carbon(IV) oxide is 1.786 x 10^-3 x 44 = 0.0786 g, that is 0.079 g to two significant figures."
        ],
        "keyTakeaway": "Gas volumes combine in the whole-number ratio of the balanced equation, so identify which gas runs out first and only then total the remaining mixture."
      }
    ],
    "quiz": {
      "id": "quiz-che-equations-stoichiometry",
      "topicId": "shs2-che-t3-chemical-equations-ionic-reactions-stoichiometry",
      "title": "Chemical Equations and Stoichiometry Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-equations-1",
          "quizId": "quiz-che-equations-stoichiometry",
          "questionText": "In the balanced equation N2 + ___ H2 -> 2NH3, what coefficient must hydrogen carry?",
          "optionA": "1",
          "optionB": "2",
          "optionC": "3",
          "optionD": "4",
          "correctOption": "C",
          "subConcept": "Balancing equations",
          "explanation": "Two molecules of ammonia contain six hydrogen atoms, so three molecules of hydrogen, 3H2, supply them, and the equation is N2 + 3H2 -> 2NH3 with nitrogen balanced at two atoms on each side. Choosing 2 gives four hydrogen atoms on the left, which does not match 2NH3, and it is never correct to alter the subscript in NH3 to force a balance.",
          "remediationTip": "Practise counting atoms on both sides of ten equations and write the counts above each formula before choosing a coefficient."
        },
        {
          "id": "q-che-equations-2",
          "quizId": "quiz-che-equations-stoichiometry",
          "questionText": "How many grams of sodium hydroxide are contained in 250 cm3 of a 0.200 mol/dm3 solution? Use Mr(NaOH) = 40.",
          "optionA": "2.00 g",
          "optionB": "4.00 g",
          "optionC": "8.00 g",
          "optionD": "0.800 g",
          "correctOption": "A",
          "subConcept": "Concentration and moles",
          "explanation": "The volume must be in cubic decimetres, so 250 cm3 = 0.250 dm3 and n = 0.200 x 0.250 = 0.050 mol, giving mass = 0.050 x 40 = 2.00 g. Using 250 instead of 0.250 produces 4.00 g or 8.00 g, and 0.800 g comes from multiplying by the wrong Mr.",
          "remediationTip": "Always rewrite a cm3 volume as dm3 by dividing by 1000 on the first line of any concentration calculation."
        },
        {
          "id": "q-che-equations-3",
          "quizId": "quiz-che-equations-stoichiometry",
          "questionText": "Which is the net ionic equation for the reaction between aqueous silver nitrate and aqueous sodium chloride?",
          "optionA": "Ag+(aq) + Cl-(aq) -> AgCl(s)",
          "optionB": "AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)",
          "optionC": "Ag+(aq) + Cl-(aq) -> AgCl(aq)",
          "optionD": "Na+(aq) + NO3-(aq) -> NaNO3(aq)",
          "correctOption": "A",
          "subConcept": "Ionic equations",
          "explanation": "Silver ions and chloride ions combine to give the white curdy precipitate of silver chloride, while sodium and nitrate ions are spectators. Option B is the full molecular equation rather than the net ionic one, option C wrongly labels the insoluble product aqueous, and option D names the spectator pair, which stays dissolved and does not react.",
          "remediationTip": "Drill the split-and-cancel procedure on five precipitation equations and circle the ions you cancel each time."
        },
        {
          "id": "q-che-equations-4",
          "quizId": "quiz-che-equations-stoichiometry",
          "questionText": "Excess carbon(IV) oxide is bubbled through a solution containing 0.20 mol of calcium hydroxide. What mass of the white precipitate forms? Use Mr(Ca(OH)2) = 74, Mr(CaCO3) = 100.",
          "optionA": "8.0 g",
          "optionB": "14.8 g",
          "optionC": "20.0 g",
          "optionD": "10.0 g",
          "correctOption": "C",
          "subConcept": "Mole to mass from an equation",
          "explanation": "The equation Ca(OH)2 + CO2 -> CaCO3 + H2O gives one mole of calcium trioxocarbonate(IV) per mole of calcium hydroxide, so 0.20 mol of hydroxide yields 0.20 mol of precipitate of mass 0.20 x 100 = 20.0 g. The mass 14.8 g is the mass of calcium hydroxide itself, and 10.0 g comes from halving the mole ratio incorrectly.",
          "remediationTip": "Write the 1 to 1 ratio under the equation before converting, so the mole number is copied and not inferred."
        },
        {
          "id": "q-che-equations-5",
          "quizId": "quiz-che-equations-stoichiometry",
          "questionText": "A reaction whose balanced equation predicts 8.0 g of product gives 4.2 g of dry product. What is the percentage yield?",
          "optionA": "47.5 percent",
          "optionB": "52.5 percent",
          "optionC": "190 percent",
          "optionD": "0.525 percent",
          "correctOption": "B",
          "subConcept": "Percentage yield",
          "explanation": "Percentage yield = actual / theoretical x 100 = 4.2 / 8.0 x 100 = 52.5 percent. The value 47.5 percent is the percentage of the predicted product that was lost rather than recovered, 190 percent comes from dividing the theoretical mass by the actual mass, and 0.525 is the raw ratio before it was multiplied by 100.",
          "remediationTip": "Label the two masses on the question paper as actual and theoretical before writing any formula."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t3-metals-nonmetals-extractive-chemistry",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 6,
    "title": "Metals, Non-metals and Extractive Chemistry",
    "description": "The reactivity series and the displacement evidence behind it, how position in the series chooses the extraction method, the chemistry of the blast furnace and of the aluminium electrolytic cell, manganese and bauxite at Nsuta and Awaso, gold winning at Tarkwa and Obuasi, and the corrosion and alloy questions that follow every metal into service.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The series runs potassium, sodium, calcium, magnesium, aluminium, carbon, zinc, iron, lead, hydrogen, copper, silver, gold, and it is an order of decreasing ease of losing electrons, so a metal high in the series forms its ion gladly and its ion is hard to reduce back.\n• Position fixes the extraction method: the very reactive metals above carbon, potassium through aluminium, are obtained only by electrolysis of their molten compounds; zinc, iron, tin and lead are reduced with carbon or carbon monoxide; copper, silver and gold may be found native or freed by simple roasting or chemical treatment.\n• Displacement proves the series in the test tube: Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s), a grey-iron coating turning reddish-brown and the blue colour fading to pale green, while copper added to iron(II) sulphate solution does nothing at all.\n• A metal high in the series cannot be displaced from solution by one below it, so zinc will not touch magnesium sulphate solution, and zinc, iron or aluminium cannot be produced by displacing their ions with a cheaper metal in aqueous work.\n• Thermite uses aluminium against iron(III) oxide: 2Al(s) + Fe2O3(s) -> Al2O3(s) + 2Fe(l), a fiercely exothermic reaction whose molten iron is used to fill railway joints, and 54 g of aluminium can free 112 g of iron.\n• Carbon is the non-metal that does the reduction in the furnace, first C(s) + O2(g) -> CO2(g) to give heat, then CO2(g) + C(s) -> 2CO(g) to give the reducing agent, and finally Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g).\n• Limestone in the blast furnace does a separate job: CaCO3(s) -> CaO(s) + CO2(g) on heating, then CaO(s) + SiO2(s) -> CaSiO3(l), a molten slag that removes the sandy gangue and protects the iron from re-oxidation; slag is later crushed into cement and road base.\n• The aluminium cell electrolyses purified alumina, Al2O3, dissolved in molten cryolite at about 950 degrees C rather than the 2050 degrees C of pure alumina, with carbon lining as cathode and carbon rods as anodes.\n• Electrode equations: cathode Al3+ + 3e- -> Al(l), anode 2O2- -> O2(g) + 4e-, and the released oxygen burns the carbon rods as C(s) + O2(g) -> CO2(g), so the anodes are consumed and must be replaced.\n• The overall cell reaction 2Al2O3 + 3C -> 4Al + 3CO2 balances at 204 parts of alumina with 36 parts of carbon giving 108 parts of aluminium and 132 parts of carbon(IV) oxide, so 2.00 tonnes of alumina yield about 1.06 tonnes of metal.\n• Ghana holds the ores: bauxite in laterite at Awaso in the Western Region, manganese at Nsuta near Tarkwa reduced as MnO2 + C -> Mn + CO2 for ferro-manganese in steel, and gold at Tarkwa and Obuasi.\n• Gold is won by the cyanide process: 4Au + 8NaCN + O2 + 2H2O -> 4NaAu(CN)2 + 4NaOH dissolves the metal in dilute sodium cyanide while air is bubbled through, and 2NaAu(CN)2 + Zn -> 2Au + Na2Zn(CN)4 precipitates it with zinc dust because zinc is far more reactive than gold; illegal small-scale mining still uses mercury, which dissolves gold into an amalgam that is burnt off and poisons rivers.\n• Rusting needs both oxygen and water, and salt or acid speeds it, so the product is a flaky hydrated iron(III) oxide that protects nothing; barriers such as paint and grease, tin plating, galvanising with zinc, sacrificial blocks of magnesium and alloying into stainless steel are the controls.\n• Galvanised iron survives a scratch because zinc is above iron in the series and corrodes in its place, while a scratch on tinned iron rusts faster than bare iron because tin sits below iron and the iron becomes the sacrificial metal.\n• Alloys are mixtures of a metal with another element whose foreign atoms distort the layers so they can no longer slide, giving hardness and lower conductivity: brass is copper with zinc, bronze is copper with tin, stainless steel is iron with about 11 percent chromium and nickel, and duralumin is aluminium with copper.",
    "detailedNotes": {
      "overview": "Metals are useful because their atoms give up electrons readily, and that same property decides how difficult and how expensive they are to win from the ore. This topic builds the reactivity series from displacement evidence, uses it to choose an extraction method, and then works through the two great industrial processes of the syllabus, the reduction of iron ore by carbon monoxide in the blast furnace and the electrolysis of alumina dissolved in cryolite. It then locates those processes in Ghana, at the bauxite laterite of Awaso, the manganese deposits of Nsuta and the gold mines of Tarkwa and Obuasi, and closes with corrosion chemistry and alloys, which explain why a roofing sheet at Elmina fails and why a bicycle frame is made of an alloy rather than a pure metal. Every mass and volume quoted here is worked from a balanced equation with stated relative atomic masses.",
      "introduction": "Learn the series as a ladder of electron loss, not a rhyme, by testing it: put a strip of zinc, iron and copper into separate samples of copper(II) sulphate solution and record which coatings appear and which solutions fade. Then take each industrial equation in turn and write the three ratio lines for moles, masses and gas volumes, checking with the given relative atomic masses. Draw the blast furnace once from memory with the zones and the four equations labelled, and draw the Hall electrolytic cell once with the cathode, anode and the two electrode equations, because Paper 3 and Paper 2 both ask for a labelled diagram with the reactions at named positions. Finally collect three metal samples from around the school, a roofing offcut, a brass fitting and a steel nail, and say how each is protected.",
      "realWorldContext": "Ghana trades in all three extraction routes. Gold Fields mines at Tarkwa and AngloGold Ashanti at Obuasi, where ore is crushed, treated with dilute sodium cyanide and the gold recovered, while illegal galamsey along the Ankobra and Birim still uses mercury to form an amalgam and burns it off, poisoning the water that the treatment works downstream must clean. Bauxite laterite at Awaso and manganese at Nsuta near Tarkwa leave as concentrate for steel and battery plants abroad. Iron ore at Opon Manso near Takoradi and the rolling mills that use scrap keep the construction trade supplied, and trotro bodies, roofing sheets at Kasoa and the steel reinforcement in a block site in Tema all show the corrosion this topic explains: salt-laden air at Korle Bu and Elmina eats unpainted steel within a season.",
      "objectives": [
        "Arrange common metals in reactivity order and design a displacement experiment that proves the position of any two of them",
        "Explain how position in the reactivity series determines whether a metal is extracted by electrolysis, by carbon reduction, or by roasting or chemical treatment",
        "Describe the blast furnace with its raw materials, the equations for the formation of carbon monoxide and the reduction of iron(III) oxide, and the role of limestone",
        "Describe the electrolysis of alumina in cryolite with the electrode equations, the reason cryolite is used, and the reason the anodes are consumed",
        "Explain the extraction of gold at Tarkwa and Obuasi, the chemistry of rusting and its prevention, and the way alloys differ from pure metals"
      ],
      "sections": [
        {
          "title": "The Reactivity Series and the Evidence for It",
          "content": "The series is an ordering of metals by how readily their atoms lose electrons, and the practical evidence for it comes from three places: the violence of the reaction with water or steam, the briskness of the reaction with dilute acids, and displacement tests between metals and the solutions of other metal salts. Potassium and sodium react with cold water, magnesium reacts with steam and slowly with cold water, zinc and iron react with steam or with dilute acids, lead and copper do not liberate hydrogen from dilute acids, and silver and gold resist ordinary attack altogether. Displacement gives the cleanest classroom proof, because a more reactive metal pushes a less reactive one out of its salt solution: an iron nail in blue copper(II) sulphate solution quickly acquires a reddish-brown coating of copper while the solution fades towards pale green as iron(II) sulphate forms, exactly as Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s) records it. The same test run in the other direction is negative, since copper will not displace iron. The series reaches a practical limit at potassium and sodium, which react with the water of the solution instead of displacing the salt, so the very reactive metals are never won by aqueous displacement but only by electrolysis of their molten compounds. Carbon and hydrogen are set into the series as non-metals because they too act as reducing agents, and that placement tells a student which oxides carbon can take apart and which it cannot.",
          "bulletPoints": [
            "Order: potassium, sodium, calcium, magnesium, aluminium, carbon, zinc, iron, lead, hydrogen, copper, silver, gold.",
            "Reactivity is ease of electron loss, so a high metal forms its ion gladly and its ion resists reduction.",
            "Displacement proof: Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s), reddish coating and fading blue colour.",
            "Potassium and sodium cannot displace metals from solution because they react with the water first.",
            "Thermite, 2Al + Fe2O3 -> Al2O3 + 2Fe, uses aluminium above iron to free molten iron for rail joints."
          ],
          "keyTakeaway": "A metal higher in the series takes the ion of a lower metal out of solution, and that single rule orders the whole of extractive chemistry.",
          "realWorldExample": "A welder repairing a rail joint at the Takoradi yard uses a thermite cartridge of aluminium powder and iron(III) oxide, because the equation says the aluminium will strip the oxygen from the iron oxide and pour molten iron into the gap without any electricity supply."
        },
        {
          "title": "Extraction Method Chosen by Position, and the Non-metals That Serve It",
          "content": "The rule that governs cost is simple: the more eagerly a metal holds its oxygen or other combined state, the more force is needed to pull it back, so extraction method follows position exactly. Metals above carbon, which includes potassium, sodium, calcium and aluminium, are obtained only by electrolysis of a molten compound, because carbon cannot reduce their oxides and aqueous solution is impossible for them. Metals in the middle, zinc, iron, tin, lead and manganese, are reduced on an industrial scale by carbon or carbon monoxide in a furnace, which is far cheaper per tonne. Metals near the bottom, copper, mercury, silver and gold, occur partly native or are freed by roasting their sulphides and then chemical recovery, so no reduction furnace is needed. Around these three routes sit the non-metals of the trade. Carbon as coke and charcoal is the reducing agent and the fuel. Sulphur is burned to sulphur(IV) oxide and then to sulphur(VI) oxide for the acid that dissolves ores and makes fertiliser. Chlorine treats water and makes the solvents of industry, and it is itself displaced from brine and seawater by more reactive species. Nitrogen supplies the ammonia that becomes fertiliser and the inert blanketing of some furnaces. In the laboratory the same chemistry appears when a student roasts a sulphide ore and tests the gas with acidified potassium dichromate paper, which turns from orange towards pale for sulphur(IV) oxide.",
          "bulletPoints": [
            "Above carbon in the series: extraction only by electrolysis of the molten compound.",
            "Middle of the series, zinc to manganese: reduction by coke, charcoal or carbon monoxide.",
            "Below hydrogen: native occurrence, roasting of sulphides, or chemical recovery.",
            "Carbon serves as both fuel and reducing agent; sulphur supplies the acids of the industry.",
            "Chlorine treats water and ore solutions; nitrogen supplies ammonia for fertiliser."
          ],
          "keyTakeaway": "Ask where the metal sits relative to carbon and hydrogen, and the extraction method, the plant and the electricity bill follow automatically.",
          "realWorldExample": "A laterite processor at Awaso can sell its bauxite as concentrate for smelting elsewhere precisely because aluminium sits far above carbon, so no cheaper chemical reduction exists and the metal must be won with large quantities of electricity."
        },
        {
          "title": "Iron in the Blast Furnace",
          "content": "The blast furnace reduces haematite, Fe2O3, with coke and limestone while a hot air blast is blown in near the base, and it is best learned as a set of zones with their own chemistry. At the tuyeres the coke burns in the air blast, C(s) + O2(g) -> CO2(g), a strongly exothermic reaction that supplies the heat of the whole furnace. As that carbon(IV) oxide rises through red-hot coke higher in the charge it is reduced, CO2(g) + C(s) -> 2CO(g), and this carbon monoxide is the actual reducing agent that meets the ore: Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g). Iron thus trickles to the hearth and is tapped as pig iron, still carrying several percent of carbon, while the limestone decomposes in the middle zone, CaCO3(s) -> CaO(s) + CO2(g), and the quicklime combines with the sandy gangue to form molten calcium trioxosilicate(IV) slag, CaO(s) + SiO2(s) -> CaSiO3(l), which floats, is drawn off separately and is later ground into cement and road base. The gases leaving the top still carry carbon monoxide, which is cleaned and burned to preheat the blast, so the furnace recycles its own heat. Reduction is complete only for oxides below carbon in the series, which is why chromium, manganese and vanadium oxides pass straight through an ordinary iron furnace un-reduced, and why Ghanaian manganese ore is treated in an electric furnace instead.",
          "bulletPoints": [
            "Raw materials: iron(III) oxide ore, coke as fuel and reducing agent, limestone as flux, hot air blast.",
            "C + O2 -> CO2 gives heat; CO2 + C -> 2CO gives the reducing agent.",
            "Fe2O3 + 3CO -> 2Fe + 3CO2, so 160 parts of ore give 112 parts of iron.",
            "CaCO3 -> CaO + CO2, then CaO + SiO2 -> CaSiO3, the molten slag that removes sand.",
            "Pig iron carries several percent carbon and is refined in a basic oxygen furnace to steel."
          ],
          "keyTakeaway": "Name the gas that does the reducing, carbon monoxide, and the solid that does the fluxing, limestone, and the furnace becomes a sequence of four equations.",
          "realWorldExample": "A rolling mill at Tema that remelts imported scrap still needs the same slag chemistry, so operators add limestone to the charge to gather the rust and sand into a fluid slag that can be drawn off before the steel is cast into bars."
        },
        {
          "title": "Aluminium by Electrolysis, and the Ores Ghana Holds",
          "content": "Alumina, Al2O3, melts above 2000 degrees C, and electrolysing it in that state would cost more than the metal is worth, so purified alumina is dissolved in molten cryolite, Na3AlF6, which gives a conducting melt that works near 950 degrees C. The cell is a steel shell lined with carbon that acts as the cathode, with carbon rods dipped from above as the anodes. Aluminium ions are reduced at the cathode, Al3+ + 3e- -> Al(l), and the molten metal, being denser than the cryolite, collects on the lining and is tapped. Oxide ions are oxidised at the anode, 2O2- -> O2(g) + 4e-, and because the electrodes are carbon, the oxygen burns them: C(s) + O2(g) -> CO2(g), which is why anodes must be replaced regularly and why the overall reaction is written 2Al2O3 + 3C -> 4Al + 3CO2. Mass ratios follow: 204 parts of alumina with 36 parts of carbon give 108 parts of aluminium and 132 parts of carbon(IV) oxide, so 2.00 tonnes of alumina produce about 1.06 tonnes of metal, and the electricity demand, not the ore, sets the price. Ghana supplies the raw materials rather than the smelted metal: lateritic bauxite at Awaso is concentrated and shipped, and manganese at Nsuta near Tarkwa is reduced in an electric furnace, MnO2(s) + C(s) -> Mn(s) + CO2(g), to give ferro-manganese which makes steel harden and which removes oxygen and sulphur from molten steel; with Mr(MnO2) = 87 and Ar(Mn) = 55, two tonnes of pure manganese dioxide would give about 1.26 tonnes of metal, and an ore assaying 87 percent gives roughly 1.10 tonnes.",
          "bulletPoints": [
            "Cryolite dissolves alumina and lowers the working temperature from above 2000 degrees C to about 950 degrees C.",
            "Cathode: Al3+ + 3e- -> Al(l), molten metal collected from the carbon lining.",
            "Anode: 2O2- -> O2(g) + 4e-, and the oxygen burns the carbon anodes to carbon(IV) oxide.",
            "Overall: 2Al2O3 + 3C -> 4Al + 3CO2, so 204 parts of alumina give 108 parts of aluminium.",
            "Electricity is the dominant cost, which is why Ghana ships bauxite concentrate rather than smelting it."
          ],
          "keyTakeaway": "Aluminium is bought with electricity: cryolite makes the melt workable, the carbon anodes are consumed by the oxygen they release, and the ratio 204 to 108 fixes the tonnage.",
          "realWorldExample": "Recyclers at Suame Magazine in Kumasi gather aluminium offcuts from machine shops and melt them for new parts, because remelting skips the electrolysis entirely and therefore skips the largest single cost in primary aluminium."
        },
        {
          "title": "Gold Winning, Corrosion Control and Alloys",
          "content": "Gold sits at the bottom of the series, so it is found native in the matrix of Tarkwa conglomerate and in the quartz veins of Obuasi, and its extraction is a solution chemistry rather than a reduction. Crushed ore is stirred with dilute sodium cyanide solution while air is passed through, and the gold dissolves as the complex NaAu(CN)2; the solution is then clarified and the gold precipitated with zinc dust, since zinc is far more reactive than gold and displaces it, and the powder is melted into a bar. Cyanide is lethal and is held in lined tailings ponds, yet illegal small-scale mining still uses the older mercury method, in which mercury dissolves gold to an amalgam that is heated to drive the mercury off as vapour, leaving the gold and poisoning the streams and fish of the Ankobra and Birim. Corrosion is the reverse of extraction, the metal returning to its ore, and for iron the product is hydrated iron(III) oxide, formed only where oxygen and water meet, with salt and acid speeding the process and flakes exposing fresh metal. Barriers such as paint after a primer, grease, and plastic coating keep both away; tin plating is barrier protection only, so a scratch on a food can lets the iron rust quickly because tin lies below iron; galvanising coats with zinc, which is above iron and so corrodes sacrificially even at a scratch, and buried pipes and ship hulls use blocks of magnesium as sacrificial anodes. Alloying changes the metal itself: because foreign atoms distort the regular layers of a pure metal and stop them sliding, brass, copper with zinc, is harder than copper, bronze, copper with tin, rings in bells and medals, mild steel with about 0.2 percent carbon is strong and ductile for reinforcement, high-carbon steel holds an edge, and stainless steel with about 11 percent chromium and nickel resists rust where a roofing sheet at Elmina will not.",
          "bulletPoints": [
            "Gold is native or cyanided: dissolved as NaAu(CN)2 in air, then displaced by zinc dust and melted.",
            "Mercury in galamsey forms an amalgam and is burnt off, contaminating rivers and fish.",
            "Rust is hydrated iron(III) oxide: it needs oxygen and water, and salt or acid accelerate it.",
            "Galvanised coatings protect at a scratch because zinc is above iron; a scratched tin coating lets the iron rust faster.",
            "Sacrificial protection: magnesium or zinc blocks on hulls, tanks and buried pipe."
          ],
          "keyTakeaway": "Extraction and corrosion are the same chemistry in opposite directions, so the series tells you both how to win a metal and which cheaper metal to place against it to keep it.",
          "realWorldExample": "Roofing sheets sold at Kasoa are bought as aluzinc or galvanised Colourbond sheet rather than plain galvanised zinc at the same price because the coastal air at Elmina and Korle Bu attacks the coating, and a scratched bare edge will rust quickly if no sacrificial zinc remains."
        }
      ],
      "commonMistakes": [
        "Claiming that zinc will displace magnesium from magnesium sulfate solution; magnesium lies above zinc in the series, so no reaction occurs, and the answer must say so rather than inventing a coating.",
        "Naming carbon or carbon(IV) oxide as the reducing agent in the blast furnace, when the ore is reduced by carbon monoxide in Fe2O3 + 3CO -> 2Fe + 3CO2; carbon produces that monoxide but does not itself strip the oxygen in the main reaction.",
        "Writing the anode product of the aluminium cell as aluminium, or the cathode product as oxygen; aluminium forms at the cathode where ions gain electrons, and oxygen at the anode where oxide ions lose them.",
        "Forgetting that the carbon anodes are consumed, and so writing 2Al2O3 -> 4Al + 3O2 as the overall reaction of the cell instead of 2Al2O3 + 3C -> 4Al + 3CO2.",
        "Saying that a scratched tin can is protected because tin does not rust; tin is below iron, so the iron becomes the sacrificial metal and corrodes faster than it would alone."
      ],
      "wassceExamTips": [
        "A blast-furnace question is marked equation by equation, so write the four separately with state symbols: coke burning, carbon(IV) oxide reduced to carbon monoxide, iron(III) oxide reduced, and limestone decomposing, then add the slag equation as a fifth line.",
        "For the electrolytic cell, marks are given for the labelled diagram and for the two electrode equations written with the correct charges, so place the cathode and anode labels before writing anything else.",
        "When a question asks why cryolite is used, answer with the two linked facts, that it dissolves alumina and lowers the melting temperature of the electrolyte, and add that this cuts the electricity cost; naming a lower temperature alone may take only one mark.",
        "Reactivity questions in Paper 1 are answered by comparing positions, so learn the series to gold and mark where carbon and hydrogen sit, because those two non-metals decide whether reduction by carbon is possible.",
        "In Paper 3 an alternative-practical question on rusting will ask you to design controls, so state three tubes: iron in boiled distilled water sealed from air, iron in dry air with a desiccant, and iron in both air and water, and report only the last one rusting."
      ],
      "summaryChecklist": [
        "Can I place twelve metals and two non-metals in reactivity order and prove two positions by displacement?",
        "Can I state which extraction method suits a metal from its position relative to carbon and hydrogen?",
        "Can I write the five equations of the blast furnace and name the raw material each one uses?",
        "Can I describe the aluminium cell with its two electrode equations and explain the roles of cryolite and the carbon anodes?",
        "Can I explain rusting, compare galvanising with tinning, and account for the hardness of alloys?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-metals-1",
        "title": "Iron Won from Assayed Haematite Ore",
        "problem": "A blast-furnace charge uses 25.0 g of haematite ore that assays 80 percent iron(III) oxide, reduced by excess carbon monoxide. Calculate the mass of iron that can be produced and the volume of carbon(IV) oxide formed at standard temperature and pressure. Use Ar(Fe) = 56, Ar(C) = 12, Ar(O) = 16 and the molar volume 22.4 dm3.",
        "stepByStepSolution": [
          "Step 1 (A1): Mass of pure Fe2O3 in the ore = 25.0 g x 80 / 100 = 20.0 g.",
          "Step 2 (M1): Write the balanced reduction: Fe2O3(s) + 3CO(g) -> 2Fe(s) + 3CO2(g), and check the atom counts, 2 iron, 3 carbon and 6 oxygen on each side.",
          "Step 3 (M1): Mr(Fe2O3) = (2 x 56) + (3 x 16) = 112 + 48 = 160, so n(Fe2O3) = 20.0 g / 160 g per mol = 0.125 mol.",
          "Step 4 (M1): The equation gives 2 mol of iron per mol of oxide, so n(Fe) = 2 x 0.125 = 0.250 mol, and 3 mol of carbon(IV) oxide are formed, so n(CO2) = 3 x 0.125 = 0.375 mol.",
          "Step 5 (A1): Mass of iron = 0.250 mol x 56 g per mol = 14.0 g, which agrees with the mass ratio 160 g of ore giving 112 g of iron.",
          "Step 6 (A1): Volume of carbon(IV) oxide at standard temperature and pressure = 0.375 mol x 22.4 dm3 per mol = 8.40 dm3.",
          "Step 7 (M1): Note that the carbon monoxide consumed is also 0.375 mol, a volume of 8.40 dm3 at standard temperature and pressure, or 0.375 x 28 = 10.5 g, and that the furnace recycles its unreacted monoxide rather than buying it."
        ],
        "keyTakeaway": "Convert the ore to the pure compound first, then let the coefficients do the work: 160 parts of iron(III) oxide give 112 parts of iron and 3 moles of carbon(IV) oxide."
      },
      {
        "id": "ex-che-metals-2",
        "title": "Mass Balance of the Aluminium Cell for Two Tonnes of Alumina",
        "problem": "Purified alumina is electrolysed in molten cryolite with carbon anodes according to 2Al2O3 + 3C -> 4Al + 3CO2. For 2.00 tonnes of alumina fully decomposed with the anodes consumed as the equation shows, calculate the mass of aluminium produced, the mass of carbon burned away, and the volume of carbon(IV) oxide at standard temperature and pressure. Use Ar(Al) = 27, Ar(C) = 12, Ar(O) = 16.",
        "stepByStepSolution": [
          "Step 1 (M1): Compute the reacting masses from the formulae: Mr(Al2O3) = (2 x 27) + (3 x 16) = 54 + 48 = 102, so 2 mol is 204 mass units, 3C is 36, 4Al is 108 and 3CO2 is 132.",
          "Step 2 (M1): Check the balance of those figures, since 204 + 36 = 240 and 108 + 132 = 240, which confirms the equation conserves mass.",
          "Step 3 (M1): Convert the charge to moles: 2.00 tonnes = 2.00 x 10^6 g, so n(Al2O3) = 2.00 x 10^6 / 102 = 19,608 mol, or 19.61 kmol.",
          "Step 4 (M1): Apply the ratios: n(Al) = 2 x 19.61 kmol = 39.22 kmol, n(C) = (3/2) x 19.61 = 29.41 kmol and n(CO2) = 29.41 kmol.",
          "Step 5 (A1): Mass of aluminium = 39.22 kmol x 27 kg per kmol = 1,059 kg, that is 1.06 tonnes, which is the ratio 108/204 of the alumina charged.",
          "Step 6 (A1): Mass of carbon burned = 29.41 kmol x 12 kg per kmol = 353 kg, so the anodes lose about 0.35 tonne for every 2 tonnes of alumina processed.",
          "Step 7 (A1): Volume of carbon(IV) oxide at standard temperature and pressure = 29.41 kmol x 22.4 m3 per kmol = 659 m3, and the mass check gives 353 kg + 2000 kg = 1059 kg + 1294 kg = 2353 kg, so the books balance."
        ],
        "keyTakeaway": "The cell consumes its own anodes, so a correct mass balance of aluminium production must include the carbon burned away as carbon(IV) oxide."
      }
    ],
    "quiz": {
      "id": "quiz-che-metals-extractive",
      "topicId": "shs2-che-t3-metals-nonmetals-extractive-chemistry",
      "title": "Metals and Extractive Chemistry Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-metals-extractive-1",
          "quizId": "quiz-che-metals-extractive",
          "questionText": "Zinc metal cannot displace which of these metals from a solution of its salt?",
          "optionA": "Copper",
          "optionB": "Lead",
          "optionC": "Iron",
          "optionD": "Magnesium",
          "correctOption": "D",
          "subConcept": "Displacement and the reactivity series",
          "explanation": "A metal displaces only those below it in the series, and magnesium lies well above zinc, so no reaction occurs with magnesium sulphate solution. Copper, lead and iron all sit below zinc and are displaced by it from their salt solutions.",
          "remediationTip": "Write the series on a strip of card and slide a paper marker at zinc to see instantly which metals it can and cannot displace."
        },
        {
          "id": "q-che-metals-extractive-2",
          "quizId": "quiz-che-metals-extractive",
          "questionText": "Which substance is the reducing agent that converts iron(III) oxide to iron in the blast furnace?",
          "optionA": "Carbon(IV) oxide",
          "optionB": "Carbon monoxide",
          "optionC": "Molten slag",
          "optionD": "The hot air blast",
          "correctOption": "B",
          "subConcept": "Blast furnace chemistry",
          "explanation": "The reduction is Fe2O3 + 3CO -> 2Fe + 3CO2, so carbon monoxide removes the oxygen. Carbon(IV) oxide is a product rather than a reducer, the hot air blast supplies oxygen for burning coke, and the slag only carries away the sandy gangue as calcium trioxosilicate(IV).",
          "remediationTip": "Learn the four furnace equations in order and say which gas is made in one zone and used in the next."
        },
        {
          "id": "q-che-metals-extractive-3",
          "quizId": "quiz-che-metals-extractive",
          "questionText": "Why is purified alumina dissolved in molten cryolite rather than electrolysed on its own?",
          "optionA": "It lowers the working temperature of the electrolyte to about 950 degrees C",
          "optionB": "It supplies the aluminium ions that are discharged at the cathode",
          "optionC": "It stops oxygen from forming at the anode",
          "optionD": "It makes the melt conduct by releasing free electrons through the liquid",
          "correctOption": "A",
          "subConcept": "Aluminium electrolysis",
          "explanation": "Pure alumina melts above 2000 degrees C, which would cost far more energy than the metal is worth, so cryolite dissolves it and the cell runs near 950 degrees C. The aluminium ions come from the alumina itself, oxygen does form at the anode and burns the carbon, and conduction in a melt is by ions moving, never by free electrons through the liquid.",
          "remediationTip": "State the two facts together every time: cryolite dissolves alumina and lowers the temperature, and the ions still come from alumina."
        },
        {
          "id": "q-che-metals-extractive-4",
          "quizId": "quiz-che-metals-extractive",
          "questionText": "A nail rusts fastest in which conditions?",
          "optionA": "In air that is kept dry by a desiccant",
          "optionB": "In boiled distilled water sealed under a layer of oil",
          "optionC": "In water and air together, especially water containing dissolved salt",
          "optionD": "In pure oxygen gas over a dry desiccant",
          "correctOption": "C",
          "subConcept": "Corrosion and its prevention",
          "explanation": "Rusting needs both oxygen and water, and dissolved salt speeds the process, so the nail in water and air corrodes fastest. A dry air tube lacks water, a boiled and sealed sample lacks oxygen, and dry oxygen alone gives no aqueous electrolyte for the reaction.",
          "remediationTip": "Sketch the three rusting control tubes and write beside each which of oxygen and water is missing."
        },
        {
          "id": "q-che-metals-extractive-5",
          "quizId": "quiz-che-metals-extractive",
          "questionText": "Two sheets are scratched through their coatings, one galvanised with zinc and one tinned with tin. Which statement is correct?",
          "optionA": "Both scratch sites rust at the same rate because both coatings are barriers",
          "optionB": "The tinned scratch corrodes faster because tin lies below iron and the iron becomes the sacrificial metal",
          "optionC": "The galvanised scratch corrodes faster because zinc is softer than tin",
          "optionD": "Neither corrodes, because zinc and tin each permanently restore the coating where it is broken",
          "correctOption": "B",
          "subConcept": "Sacrificial protection",
          "explanation": "Tin lies below iron, so at a break the iron corrodes in preference and the rust spreads quickly; zinc lies above iron and corrodes sacrificially, protecting the exposed iron even at a scratch. Neither coating repairs itself, and hardness is irrelevant to the electrochemical order.",
          "remediationTip": "Draw iron between zinc and tin on the series card and mark which side sacrifices itself at a scratch."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t3-electrolysis-faraday-laws",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 11,
    "title": "Electrolysis II: Faraday's Laws and Quantitative Electrolysis",
    "description": "The parts of an electrolytic cell and how ions are chosen for discharge, balanced electrode equations, the charge passed from Q = It, Faraday's first and second laws, the electrochemical equivalent, masses of silver and copper deposited in a voltameter, and the arithmetic behind industrial electroplating.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Electrolysis uses a direct current to force a non-spontaneous redox reaction in a cell built from an electrolyte, two electrodes (anode positive, cathode negative) and a power supply.\n• Cations travel to the cathode and gain electrons (reduction); anions travel to the anode and lose electrons (oxidation); each electrode equation must balance both mass and charge.\n• At an inert platinum or carbon electrode the ion discharged depends on position in the electrochemical series, on concentration and on the nature of the electrode, so in dilute sodium chloride hydrogen is discharged in preference to sodium.\n• In brine (concentrated sodium chloride) chloride is discharged at the anode to give chlorine while hydrogen leaves sodium hydroxide in solution.\n• Quantity of electricity Q = I x t, charge in coulomb, current in ampere, time in second; always convert minutes to seconds first.\n• One faraday F = 96500 C is the charge carried by one mole of electrons, so moles of electrons = Q / 96500.\n• Faraday first law: mass deposited is proportional to charge, m = zIt, where z is the electrochemical equivalent in g/C.\n• Faraday second law: the same charge through different cells deposits masses in the ratio of their equivalent masses, atomic mass divided by electrons needed.\n• Copper voltameter: Cu2+ + 2e- gives Cu, so equivalent mass of copper = 63.5 / 2 = 31.75.\n• Silver coulometer: Ag+ + e- gives Ag, so equivalent mass of silver equals its atomic mass 108.\n• To plate a spoon with silver the spoon is made the cathode, a pure silver bar the anode, and silver potassium cyanide the electrolyte.\n• One faraday deposits one gram-equivalent of any substance, so the deposit in moles equals charge divided by 96500 divided by the electrons in the half-equation.",
    "detailedNotes": {
      "overview": "Electrolysis is the passage of a direct current through an electrolyte so that ions are dragged to the electrodes and forced to exchange electrons, driving a redox change that would not happen on its own. This topic moves from the cell itself to the arithmetic of how much substance it makes. You first learn which ion wins at each electrode when several compete, then quantify the deposit with the charge Q = It and the faraday of 96500 C, and finally state Faraday's two laws and use them for copper voltameters, silver coulometers and electroplating lines. Every number traces back to one idea: one mole of electrons carries a fixed charge and deposits a fixed fraction of a mole of product, set by the electrons in the half-equation.",
      "introduction": "Begin at the bench with a copper voltameter, a clean copper cathode, a copper anode and blue copper(II) sulphate solution. Weigh the cathode, pass a known current timed by a stopwatch, then weigh it again; the gain is the copper deposited and it should match the figure you get from Q = It. Keep the electrode half-equation Cu2+ + 2e- gives Cu written beside the readings so the link between the two electrons and the atomic mass 63.5 stays visible. Only after the experiment is done should the abstract laws be recited, because they are simply a summary of what the balance showed.",
      "realWorldContext": "Electroplating is ordinary Ghanaian industry. A cutlery or button plater dips the object as the cathode into a silver or chromium bath and reads the thickness from current and time, exactly the m = zIt calculation. The mining refineries at Tarkwa and Obuasi use electrolytic cells to purify copper and recover precious metals, where the anode slimes themselves are valuable. In a school laboratory the copper voltameter is a favourite Paper 3 practical because its deposit can be weighed; the safety rules are low voltage, dry hands at the power supply, and eye protection when handling copper sulphate, which stains skin and irritates the eyes.",
      "objectives": [
        "Name the parts of an electrolytic cell and write balanced electrode half-equations for the cathode and the anode",
        "Explain selective discharge of competing ions using electrochemical-series position, concentration and the nature of the electrode",
        "Calculate the charge passed with Q = It and convert it to moles of electrons using the faraday 96500 C",
        "State Faraday's first and second laws and use the electrochemical equivalent to find masses of copper or silver deposited in electroplating"
      ],
      "sections": [
        {
          "title": "The Electrolytic Cell and How Ions Are Selected for Discharge",
          "content": "An electrolytic cell turns electrical energy into chemical change by driving a redox reaction that will not run on its own. Its parts are an electrolyte, a molten salt or an aqueous salt whose ions are free to move, two electrodes usually of platinum or graphite that do not themselves react, and a direct-current supply. The electrode joined to the positive terminal is the anode, where oxidation and loss of electrons occur, and the negative electrode is the cathode, where reduction and gain of electrons happen. Cations travel to the cathode and anions to the anode. In solution several ions may compete for the same electrode, so discharge is selective. At an inert cathode the cation standing lower in the electrochemical series, the one less eager to hold electrons, is reduced first, so in dilute sodium chloride the hydrogen ion is discharged in preference to sodium and hydrogen gas appears. At the anode a concentrated halide gives the halogen, but a dilute solution lets hydroxide discharge to give oxygen. Because concentration and electrode nature both matter, every answer must name the ion discharged, the product formed and the balanced half-equation.",
          "bulletPoints": [
            "Anode is positive and oxidises; cathode is negative and reduces; electrons enter at the cathode from the supply.",
            "Cations go to the cathode, anions to the anode, and the ion that discharges depends on series position, concentration and electrode.",
            "Dilute sodium chloride gives hydrogen at the cathode and oxygen at the anode, while concentrated brine gives hydrogen and chlorine.",
            "Molten salts have only their own two ions, so the metal forms at the cathode and the non-metal at the anode with no competition.",
            "Write each half-equation with electrons shown and charge balanced before deciding on any product."
          ],
          "keyTakeaway": "In a cell with competing ions, name the discharged ion, the product and its half-equation; series position, concentration and electrode together decide the winner.",
          "realWorldExample": "A small plating workshop in Kumasi runs a silver bath in which the object to be silvered is hung as the cathode, a silver bar dissolves at the anode, and the silver ions replace the electrons taken up at the object surface."
        },
        {
          "title": "Faraday's First Law: Charge, Current and Mass Deposited",
          "content": "Faraday's first law states that the mass of a substance deposited or liberated at an electrode is directly proportional to the quantity of electricity that passes through the cell. That quantity is charge, measured in coulomb, and for a steady current it equals Q = I x t, the product of the current in ampere and the time in second. The commonest lost mark is a time left in minutes, so a run of 30 minutes must first become 1800 s before substitution. The constant of proportionality is the electrochemical equivalent z, the mass in gram carried by one coulomb, giving the working equation m = z x I x t. The bridge to moles is the faraday: one mole of electrons carries 96500 C, so moles of electrons supplied equal Q divided by 96500. The electrode half-equation then turns moles of electrons into moles of the element, because copper takes two electrons per atom while silver takes only one. Multiply those moles by the atomic mass and you recover the deposited mass, which the balance in a copper voltameter can verify directly.",
          "bulletPoints": [
            "Charge Q = I x t, with current in ampere and time in second; convert minutes to seconds without fail.",
            "One faraday is 96500 C, the charge of one mole of electrons, so moles of electrons = Q / 96500.",
            "Faraday's first law: m = zIt, where z is the electrochemical equivalent in g/C.",
            "The number of electrons in the half-equation divides the moles of electrons to give moles of product.",
            "Doubling the current or the time doubles the deposit; halving both quarters it, since mass tracks charge."
          ],
          "keyTakeaway": "Mass deposited is set by total charge; find Q in coulomb, turn it into moles of electrons with 96500 C, then apply the electron count in the half-equation.",
          "realWorldExample": "An electroplating foreman who needs a thicker silver coat on a batch of pendants simply runs the same current for longer or raises it, because the silver laid down scales with the charge passed."
        },
        {
          "title": "The Second Law, Copper and Silver, and Electroplating Calculations",
          "content": "Faraday's second law compares two cells that carry the same current for the same time. The masses deposited at their electrodes stand in the ratio of their equivalent masses, that is the atomic mass divided by the number of electrons needed to discharge one ion. In a copper voltameter the cathode reaction is Cu2+ plus two electrons giving copper, so the equivalent mass of copper is 63.5 divided by 2, about 31.75. In a silver coulometer the reaction is Ag+ plus one electron giving silver, so its equivalent mass is the atomic mass 108 itself. When the two cells are joined in series the identical charge flows through both, so one faraday deposits one gram-equivalent of each metal, a full mole of silver for every half mole of copper. This fixed ratio is why silver coulometers serve as precise charge meters and why a plating line can predict a coat thickness from current and time alone. To plate a spoon with silver, the spoon is the cathode, a pure silver bar the anode and a silver-salt solution the electrolyte, and the mass gained equals zIt once the correct z is chosen.",
          "bulletPoints": [
            "Faraday's second law: equal charge deposits masses in the ratio of equivalent masses, atomic mass divided by electrons.",
            "Copper equivalent mass = 63.5 / 2 = 31.75; silver equivalent mass = 108 / 1 = 108.",
            "Cells in series share the same charge, so moles of product follow the electron ratio of their half-equations.",
            "One faraday deposits one gram-equivalent of any substance, always the same charge per equivalent.",
            "In plating, anode dissolves and cathode gains; mass gained on the article is the deposit to be calculated."
          ],
          "keyTakeaway": "Same charge through two cells gives masses in the ratio of equivalent masses, so copper and silver deposits are linked by their differing electron needs.",
          "realWorldExample": "A refinery purifying blister copper at Takoradi passes current through copper sulphate; pure copper plates onto the cathode while impurities fall as slimes, and the throughput is budgeted from Faraday's law."
        }
      ],
      "commonMistakes": [
        "Leaving the time in minutes when Q = It requires seconds, so a 30-minute run is entered as 30 instead of 1800.",
        "Forgetting the electron count in the half-equation and treating copper, which needs two electrons, as if it needed one like silver.",
        "Multiplying by the electrons instead of dividing, giving a deposit twice or half the true mass in a copper or silver calculation.",
        "Mixing up anode and cathode polarity, or claiming the deposit depends only on current with no reference to the time it flows."
      ],
      "wassceExamTips": [
        "On Paper 2 the method mark M1 is given for Q = It with the time in seconds and the answer mark A1 for the mass with its unit, so show both and never give a bare number.",
        "Write the electrode half-equation before any arithmetic; examiners award marks for correct species and a balanced electron count.",
        "For a selective-discharge part, name the competing ions and state which is discharged and why; an unsupported product name earns little.",
        "Paper 3 may hand you a copper voltameter to weigh; record the cathode mass before and after on the same balance and subtract to find the deposit."
      ],
      "summaryChecklist": [
        "Can I label the anode and cathode of an electrolytic cell and write their balanced half-equations?",
        "Can I say which ion discharges when several compete, using series position, concentration and electrode nature?",
        "Can I find charge with Q = It after converting minutes to seconds, then moles of electrons with F = 96500 C?",
        "Can I state and apply Faraday's first law m = zIt and his second law comparing equivalent masses?",
        "Can I calculate the mass of copper or silver deposited in a voltameter or during electroplating?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-electrolysis-1",
        "title": "Copper Deposited by a Steady Current",
        "problem": "A current of 2.0 A is passed through copper(II) sulphate solution using copper electrodes for 30 minutes. Taking the faraday as 96500 C/mol and the atomic mass of copper as 63.5, calculate the mass of copper deposited at the cathode (Cu2+ + 2e- gives Cu).",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the time to seconds, t = 30 min x 60 = 1800 s, so Q = It uses the correct unit.",
          "Step 2 (M1): Find the charge passed, Q = I x t = 2.0 x 1800 = 3600 C.",
          "Step 3 (M1): Change charge into moles of electrons, moles of e- = Q / 96500 = 3600 / 96500 = 0.0373 mol.",
          "Step 4 (M1): Use the half-equation Cu2+ + 2e- gives Cu, so moles of copper = moles of electrons / 2 = 0.0373 / 2 = 0.01865 mol.",
          "Step 5 (M1): Convert moles of copper to mass, mass = 0.01865 x 63.5.",
          "Step 6 (A1): Evaluate to get mass of copper deposited = 1.18 g."
        ],
        "keyTakeaway": "Deposit mass follows total charge; convert minutes to seconds, divide charge by 96500 for moles of electrons, then halve for copper because each ion needs two electrons."
      },
      {
        "id": "ex-che-electrolysis-2",
        "title": "Silver and Copper Cells in Series (Faraday's Second Law)",
        "problem": "A silver coulometer (Ag+ + e- gives Ag) and a copper voltameter (Cu2+ + 2e- gives Cu) are connected in series. If 1.08 g of silver is deposited, what mass of copper is deposited at the same time? (Atomic masses: Ag = 108, Cu = 63.5.)",
        "stepByStepSolution": [
          "Step 1 (M1): Find moles of silver deposited, n(Ag) = 1.08 / 108 = 0.010 mol.",
          "Step 2 (M1): Since Ag+ + e- gives Ag needs one electron per atom, moles of electrons = 0.010 mol.",
          "Step 3 (M1): The cells are in series, so the same 0.010 mol of electrons pass through the copper cell.",
          "Step 4 (M1): Cu2+ + 2e- gives Cu needs two electrons per atom, so moles of copper = 0.010 / 2 = 0.0050 mol.",
          "Step 5 (M1): Convert to mass, mass of copper = 0.0050 x 63.5.",
          "Step 6 (A1): Evaluate to get mass of copper deposited = 0.318 g."
        ],
        "keyTakeaway": "Equal charge through cells in series deposits masses in the ratio of equivalent masses, so half a mole of copper accompanies each mole of silver."
      }
    ],
    "quiz": {
      "id": "quiz-che-electrolysis",
      "topicId": "shs2-che-t3-electrolysis-faraday-laws",
      "title": "Faraday Electrolysis Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-electrolysis-1",
          "quizId": "quiz-che-electrolysis",
          "questionText": "A current of 2.0 A flows for 5 minutes. What quantity of electricity passes?",
          "optionA": "600 C",
          "optionB": "10 C",
          "optionC": "300 C",
          "optionD": "1200 C",
          "correctOption": "A",
          "subConcept": "Charge from Q = It",
          "explanation": "Q = I x t with time in seconds, so Q = 2.0 A x 300 s = 600 C. The option 10 comes from 2.0 x 5, leaving minutes unconverted; 300 is only the time and 1200 doubles the answer.",
          "remediationTip": "Convert minutes to seconds before Q = It, then multiply current by that second value."
        },
        {
          "id": "q-che-electrolysis-2",
          "quizId": "quiz-che-electrolysis",
          "questionText": "One faraday of electricity is best described as",
          "optionA": "6.02 x 10^23 coulomb",
          "optionB": "22.4 litre",
          "optionC": "the charge on one mole of electrons, 96500 C",
          "optionD": "the atomic mass of silver",
          "correctOption": "C",
          "subConcept": "The faraday",
          "explanation": "A faraday is the charge carried by one mole of electrons, taken as 96500 C. 6.02 x 10^23 is the count of particles in a mole, not a charge, 22.4 L is a gas volume, and 108 is a mass.",
          "remediationTip": "Link one faraday to one mole of electrons (96500 C) and to one gram-equivalent of product."
        },
        {
          "id": "q-che-electrolysis-3",
          "quizId": "quiz-che-electrolysis",
          "questionText": "During electrolysis, reduction always takes place",
          "optionA": "at the anode, where electrons are lost",
          "optionB": "at the cathode, where electrons are gained",
          "optionC": "in the electrolyte between the electrodes",
          "optionD": "at the positive terminal of the supply only",
          "correctOption": "B",
          "subConcept": "Electrode reactions",
          "explanation": "Reduction is the gain of electrons and happens at the cathode, the negative electrode that pumps electrons into the ions. Oxidation, the loss of electrons, is the anode reaction, and nothing is discharged in the bulk electrolyte.",
          "remediationTip": "Recite cathode equals reduction, gain electrons; anode equals oxidation, lose electrons."
        },
        {
          "id": "q-che-electrolysis-4",
          "quizId": "quiz-che-electrolysis",
          "questionText": "How many moles of electrons are needed to deposit one mole of copper from Cu2+ ions?",
          "optionA": "1 mole",
          "optionB": "3 moles",
          "optionC": "4 moles",
          "optionD": "2 moles",
          "correctOption": "D",
          "subConcept": "Electron count in half-equation",
          "explanation": "The half-equation Cu2+ + 2e- gives Cu shows two electrons per copper ion, so one mole of copper needs two moles of electrons. Silver, written Ag+ + e- gives Ag, would need only one.",
          "remediationTip": "Read the electron coefficient straight from the balanced half-equation and use it to divide moles of electrons."
        },
        {
          "id": "q-che-electrolysis-5",
          "quizId": "quiz-che-electrolysis",
          "questionText": "In silver electroplating a metal spoon, the spoon is connected to be the",
          "optionA": "cathode",
          "optionB": "anode",
          "optionC": "electrolyte",
          "optionD": "inert graphite electrode",
          "correctOption": "A",
          "subConcept": "Electroplating setup",
          "explanation": "The object to be plated is the cathode, because silver ions gain electrons there and plate onto its surface. The anode is a bar of pure silver that dissolves to replace the ions, the electrolyte is the silver salt solution, and the spoon is not inert.",
          "remediationTip": "Remember plating builds metal onto the cathode, so the article is always the cathode."
        }
      ]
    }
  },
  {
    "id": "shs2-che-t3-qualitative-analysis-cation-anion-tests",
    "subjectId": "chemistry",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Qualitative Analysis: Cation and Anion Tests",
    "description": "Careful test-tube technique, the action of sodium hydroxide and ammonia on cations and the precipitate trend, flame tests, confirmatory tests for carbonate, sulphite, sulphate, chloride, nitrate and ammonium ions, recognising the gases given off by colour and smell, and safe handling with proper waste disposal.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Work in a clean test tube, add reagents a few drops at a time, warm gently in a water bath and record colour and any smell before drawing a conclusion.\n• Add sodium hydroxide dropwise then in excess and watch both the precipitate colour and whether it redissolves; this two-step trend identifies many cations.\n• Sodium hydroxide trend: iron(II) a dirty-green precipitate, iron(III) reddish-brown, copper(II) pale blue, all insoluble in excess; zinc and lead give white precipitates that redissolve in excess sodium hydroxide, showing amphoteric hydroxides.\n• Calcium gives a faint white precipitate with sodium hydroxide; magnesium gives a white one insoluble in excess ammonia or sodium hydroxide.\n• Ammonia solution behaves as a weak base but forms deep-blue ammine complexes, so copper(II) gives a pale-blue precipitate that dissolves in excess ammonia in a deep blue.\n• Ammonium test: warm with sodium hydroxide, the gas turns damp red litmus blue and fumes with a glass rod dipped in concentrated hydrochloric acid.\n• Carbonate: add dilute acid, brisk effervescence, the gas turns limewater milky, so carbon(IV) oxide confirms CO3^2-.\n• Sulphite: add dilute acid, pungent choking gas, it turns acidified potassium dichromate paper from orange to green, so sulphur dioxide confirms SO3^2-.\n• Sulphate: acidify with dilute hydrochloric acid then add barium chloride, a dense white precipitate of barium sulphate confirms SO4^2-.\n• Chloride: acidify with dilute nitric acid then add silver nitrate, a white curdy precipitate soluble in dilute ammonia confirms Cl-; bromide gives cream and iodide a yellow precipitate.\n• Nitrate: brown ring test, add iron(II) sulphate then concentrated sulphuric acid down the tube wall, a brown ring at the junction confirms NO3-.\n• Flame tests: sodium an enduring golden yellow, potassium lilac seen through cobalt glass, calcium brick red, barium apple green, copper blue-green.",
    "detailedNotes": {
      "overview": "Qualitative analysis answers one question: what ions are present in an unknown solid or solution. It is a reading skill more than a calculation skill, because marks are earned for what you observe and record, not for arithmetic. The reliable routes are the action of sodium hydroxide and ammonia on cations, the colour of a flame, and the confirmatory tests for the common anions carbonate, sulphite, sulphate, chloride, bromide, iodide and nitrate, together with the test for the ammonium ion. Every procedure demands good technique: a clean tube, small portions, gentle warming, and an honest record of colour and smell. This topic also fixes the safety habits of a school laboratory, from pointing a warming tube away from people to placing halogen waste in the fume hood.",
      "introduction": "Set up the bench the way the Ghana Education Service circulars require: a spotting tile, clean test tubes in a rack, a wash bottle of distilled water, and small labelled dropper bottles of sodium hydroxide, ammonia, dilute hydrochloric acid, dilute nitric acid, silver nitrate, barium chloride and limewater. Test one ion at a time and write the observation before you write the conclusion, since an examiner can award a mark for the colour you saw even if the naming slips. Keep a boiling tube in a water bath rather than over a naked flame when ammonia fumes are possible, and never return an unused portion to the stock bottle.",
      "realWorldContext": "The same tests protect people and trade across Ghana. A Water Resources engineer checks borehole or river water near mining sites at Tarkwa for sulphate and chloride with barium chloride and silver nitrate, the very reagents on your tray. A food-safety officer testing milk adulteration looks for carbonate that fizzes on adding acid. In a hospital chemistry lab the chloride test guards against saline errors. Because reagents such as silver nitrate stain the skin and barium salts are toxic, a school analysis lesson insists on eye protection, gloves for the barium and silver bottles, and disposal of heavy-metal waste into a labelled collection beaker rather than the sink.",
      "objectives": [
        "Carry out good test-tube technique and record observations of colour, smell and solubility before concluding",
        "Identify common cations from the precipitate they give with sodium hydroxide and ammonia, and whether it redissolves in excess",
        "Perform confirmatory tests for carbonate, sulphite, sulphate, halide and nitrate anions and name the observable result",
        "Use flame-test colours and recognise the gases released during analysis while following safe handling and waste rules"
      ],
      "sections": [
        {
          "title": "Cations with Sodium Hydroxide and Ammonia",
          "content": "The metal-ion tests rest on one careful action: add sodium hydroxide solution a few drops at a time to the unknown, note the colour of the precipitate, then add it in excess and see whether the solid redissolves. Repeat the whole procedure with ammonia solution, because some hydroxides dissolve in ammonia to form ammine complexes and behave differently. Iron(II) gives a dirty-green precipitate that darkens in air, iron(III) a reddish-brown one, and copper(II) a pale-blue solid, and none of these three redissolves in excess sodium hydroxide. Zinc and lead, in contrast, give white precipitates that vanish again in excess sodium hydroxide, proof that their hydroxides are amphoteric. Ammonia separates them further: copper's pale-blue precipitate dissolves in excess ammonia to a deep royal-blue solution, while zinc dissolves too but aluminium keeps its white solid. Calcium gives only a faint milky white with sodium hydroxide and magnesium a white precipitate that stays undissolved in both reagents. Always report colour and solubility together, since it is the pairing that names the ion.",
          "bulletPoints": [
            "Add sodium hydroxide dropwise then in excess; record precipitate colour and whether it redissolves.",
            "Iron(II) dirty green, iron(III) reddish brown, copper(II) pale blue, all insoluble in excess sodium hydroxide.",
            "Zinc and lead give white precipitates soluble in excess sodium hydroxide, showing amphoteric hydroxides.",
            "Excess ammonia turns copper(II) a deep blue solution; aluminium keeps its white precipitate in ammonia.",
            "Calcium gives a faint white and magnesium a white precipitate that dissolves in neither reagent."
          ],
          "keyTakeaway": "Name a cation from the colour of its hydroxide precipitate and its behaviour in excess sodium hydroxide and excess ammonia, never from colour alone.",
          "realWorldExample": "A soils technician testing drainage water for iron reports the reddish-brown cloud that sodium hydroxide produces, exactly the observation a candidate must write to score the mark."
        },
        {
          "title": "Anions: Carbonate, Sulphite, Sulphate, Halides and Nitrate",
          "content": "Anion tests usually release a gas or throw down an insoluble salt. For a carbonate, add dilute hydrochloric acid and watch the brisk effervescence; bubble the gas through limewater and a milky white confirms carbon(IV) oxide. A sulphite looks similar because acid gives a gas too, but sulphur dioxide is recognised by its choking smell and by turning acidified orange potassium dichromate paper green, and it also whitens limewater, so the dichromate paper is the deciding test. For a sulphate, first acidify a fresh portion with dilute hydrochloric acid to remove interfering carbonate, then add barium chloride; a dense white precipitate of insoluble barium sulphate confirms the ion. Halides are found with silver nitrate after acidifying with dilute nitric acid: chloride gives a white curdy precipitate soluble in dilute ammonia, bromide a cream one soluble only in concentrated ammonia, and iodide a yellow one that stays insoluble. The nitrate ion needs the brown-ring test, in which iron(II) sulphate solution and then concentrated sulphuric acid runned down the tube wall leave a brown ring at the junction.",
          "bulletPoints": [
            "Carbonate plus dilute acid gives a gas that turns limewater milky, confirming carbon(IV) oxide.",
            "Sulphite plus acid gives pungent sulphur dioxide that turns acidified dichromate paper from orange to green.",
            "Sulphate is confirmed by acidifying with dilute hydrochloric acid then barium chloride giving a white barium sulphate precipitate.",
            "Acidify with dilute nitric acid then silver nitrate: chloride white and soluble in dilute ammonia, bromide cream, iodide yellow.",
            "Nitrate shows as the brown ring formed with iron(II) sulphate and concentrated sulphuric acid down the tube wall."
          ],
          "keyTakeaway": "Match each anion to its gas or precipitate, and always acidify first with the reagent named, so carbonate cannot masquerade as sulphate.",
          "realWorldExample": "A bottling plant checking a water supply for hardness-causing sulphate runs the barium chloride test in a school-style tube and judges a heavy white cloud as a positive reading."
        },
        {
          "title": "Flame Tests, Gas Confirmations and Safe Technique",
          "content": "Some ions are read straight from a flame. Dip a clean nichrome or platinum wire in concentrated hydrochloric acid, touch it to the solid and place it in a roaring blue Bunsen flame; sodium colours the flame an enduring golden yellow, calcium brick red, barium apple green and copper blue-green, while potassium gives a fleeting lilac that is best seen through cobalt glass which screens out the yellow that sodium contamination always adds. Alongside the flame, gas confirmations close the analysis: hydrogen gives a squeaky pop with a lighted splint, oxygen relights a glowing splint, carbon(IV) oxide clouds limewater, sulphur dioxide greens dichromate paper, ammonia turns damp red litmus blue, and chlorine bleaches damp litmus paper white. Technique and safety hold the topic together: warm in a water bath, point a tube away from faces, smell by gently wafting, wear eye protection for acids and halogens, work volatile or toxic gases in a fume hood, and place silver, barium and heavy-metal residues in a labelled waste beaker rather than the sink.",
          "bulletPoints": [
            "Clean the wire in concentrated hydrochloric acid before each flame test so colours do not carry over.",
            "Sodium golden yellow, calcium brick red, barium apple green, copper blue-green, potassium lilac through cobalt glass.",
            "Confirm gases: hydrogen squeaky pop, oxygen relights a glow, ammonia turns damp red litmus blue, chlorine bleaches litmus.",
            "Waft to smell, never inhale directly, and warm ammonia or halogen tubes in a water bath, not over a flame.",
            "Dispose of silver, barium and other heavy-metal residues in a marked collection beaker to protect drains and rivers."
          ],
          "keyTakeaway": "A flame colour is only trusted when the wire is clean and cobalt glass is used for potassium, and every gas test is stated as observation then conclusion.",
          "realWorldExample": "A fireworks maker's green and red stars rely on the same barium and copper flame colours a student observes on the nichrome wire, though at a school bench the safety rules come first."
        }
      ],
      "commonMistakes": [
        "Writing only the conclusion, chloride is present, without the observation, a white precipitate soluble in dilute ammonia, which is what earns the mark.",
        "Using dilute hydrochloric acid to acidify before the silver nitrate halide test, so the chloride from the acid itself gives a false positive.",
        "Confusing carbonate and sulphite because both fizz with acid, and forgetting the acidified dichromate paper that tells sulphur dioxide from carbon dioxide.",
        "Assuming a white precipitate means one ion only, and skipping the excess-reagent step that separates the amphoteric hydroxides of zinc and lead from the rest."
      ],
      "wassceExamTips": [
        "Answer every analysis part as observation then inference; Paper 2 pays the method mark M1 for what you saw and the answer mark A1 for the ion named.",
        "State the reagent and the amount, add sodium hydroxide dropwise then in excess, because the excess step is where many marks lie.",
        "For the halide colours write white for chloride, cream for bromide, yellow for iodide, and note the differing ammonia solubility.",
        "In Paper 3 practical, keep the tube clean, warm gently in a water bath, and record colours in a table; examiners check your notes against your conclusions."
      ],
      "summaryChecklist": [
        "Can I use good test-tube technique and record colour, smell and solubility before naming an ion?",
        "Can I identify cations from their hydroxide colour and their action with excess sodium hydroxide and excess ammonia?",
        "Can I run the confirmatory tests for carbonate, sulphite, sulphate, halide and nitrate and state each observation?",
        "Can I perform a flame test and read sodium, potassium, calcium, barium and copper colours correctly?",
        "Can I confirm the gases given off and follow safe handling and heavy-metal waste disposal?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-qualitative-analysis-1",
        "title": "Identifying the Chloride Ion",
        "problem": "A colourless solution X is suspected of holding a halide. Describe the confirmatory test and the observations that show X contains chloride rather than bromide or iodide.",
        "stepByStepSolution": [
          "Step 1 (M1): Acidify a fresh portion of X with dilute nitric acid, never hydrochloric acid, so no extra chloride is introduced.",
          "Step 2 (M1): Add a few drops of silver nitrate solution and observe the colour of any precipitate.",
          "Step 3 (M1): A white curdy precipitate forms, which rules out cream bromide and yellow iodide.",
          "Step 4 (M1): Add dilute ammonia solution to the precipitate; the chloride precipitate dissolves readily, unlike bromide or iodide.",
          "Step 5 (A1): Conclusion: X contains the chloride ion, Cl-, confirmed by a white silver chloride precipitate soluble in dilute ammonia."
        ],
        "keyTakeaway": "Chloride is proved by a white precipitate with acidified silver nitrate that dissolves in dilute ammonia; bromide cream and iodide yellow behave differently."
      },
      {
        "id": "ex-che-qualitative-analysis-2",
        "title": "Identifying Copper(II) by Its Precipitates",
        "problem": "A blue solution gives a pale-blue precipitate when sodium hydroxide is added dropwise, and the precipitate does not redissolve in excess sodium hydroxide. Excess ammonia solution then dissolves it to a deep blue. Identify the cation.",
        "stepByStepSolution": [
          "Step 1 (M1): Record that the original solution is blue and that sodium hydroxide gives a pale-blue precipitate, the colour of copper(II) hydroxide.",
          "Step 2 (M1): Note the precipitate is insoluble in excess sodium hydroxide, so the cation is not the amphoteric zinc or lead.",
          "Step 3 (M1): Add excess ammonia; the pale-blue solid dissolves to a deep royal-blue solution, the copper ammine complex.",
          "Step 4 (A1): Conclusion: the cation is copper(II), Cu2+, identified by pale-blue hydroxide insoluble in sodium hydroxide but soluble in excess ammonia to deep blue."
        ],
        "keyTakeaway": "A pale-blue hydroxide that stays undissolved in excess sodium hydroxide yet dissolves in excess ammonia to deep blue is the fingerprint of copper(II)."
      }
    ],
    "quiz": {
      "id": "quiz-che-qualitative-analysis",
      "topicId": "shs2-che-t3-qualitative-analysis-cation-anion-tests",
      "title": "Cation and Anion Tests Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-qualitative-analysis-1",
          "quizId": "quiz-che-qualitative-analysis",
          "questionText": "A cation gives a pale-blue precipitate with sodium hydroxide that is insoluble in excess. The cation is",
          "optionA": "iron(III), Fe3+",
          "optionB": "zinc, Zn2+",
          "optionC": "copper(II), Cu2+",
          "optionD": "magnesium, Mg2+",
          "correctOption": "C",
          "subConcept": "Cations with sodium hydroxide",
          "explanation": "Copper(II) hydroxide is the pale-blue solid and it does not redissolve in excess sodium hydroxide. Iron(III) is reddish brown, zinc is white and soluble in excess, and magnesium is white.",
          "remediationTip": "Pair each metal ion with one colour and one excess-action, so copper means pale blue and insoluble in sodium hydroxide."
        },
        {
          "id": "q-che-qualitative-analysis-2",
          "quizId": "quiz-che-qualitative-analysis",
          "questionText": "The gas given off when dilute acid is added to a carbonate is confirmed by",
          "optionA": "turning limewater milky",
          "optionB": "relighting a glowing splint",
          "optionC": "turning damp red litmus blue",
          "optionD": "bleaching damp litmus paper white",
          "correctOption": "A",
          "subConcept": "Carbonate test",
          "explanation": "Carbonates effervesce with acid and release carbon(IV) oxide, the gas that makes limewater turn milky. A glowing splint relights for oxygen, litmus turning blue names ammonia, and bleaching names chlorine.",
          "remediationTip": "Reserve the limewater cloud for carbon(IV) oxide and keep each gas tied to one clear test."
        },
        {
          "id": "q-che-qualitative-analysis-3",
          "quizId": "quiz-che-qualitative-analysis",
          "questionText": "Which pair of reagents confirms the sulphate ion?",
          "optionA": "dilute nitric acid then silver nitrate",
          "optionB": "sodium hydroxide then ammonia",
          "optionC": "limewater then dilute hydrochloric acid",
          "optionD": "dilute hydrochloric acid then barium chloride",
          "correctOption": "D",
          "subConcept": "Sulphate test",
          "explanation": "Sulphate is confirmed by acidifying with dilute hydrochloric acid and then adding barium chloride, which throws down a white barium sulphate precipitate. Silver nitrate with nitric acid is the halide test, and sodium hydroxide with ammonia is for cations.",
          "remediationTip": "For sulphate think acidify with hydrochloric acid then barium chloride, white cloud means positive."
        },
        {
          "id": "q-che-qualitative-analysis-4",
          "quizId": "quiz-che-qualitative-analysis",
          "questionText": "The ammonium ion is detected by warming the sample with sodium hydroxide and testing the gas with",
          "optionA": "acidified dichromate paper",
          "optionB": "damp red litmus paper, which turns blue",
          "optionC": "a lighted splint for a pop",
          "optionD": "barium chloride solution",
          "correctOption": "B",
          "subConcept": "Ammonium test",
          "explanation": "Ammonium salts give off ammonia gas with alkali, and ammonia is alkaline so it turns damp red litmus blue. Dichromate paper names sulphur dioxide, a pop names hydrogen, and barium chloride is a sulphate reagent.",
          "remediationTip": "The only common alkaline gas is ammonia, so damp red litmus turning blue means ammonium."
        },
        {
          "id": "q-che-qualitative-analysis-5",
          "quizId": "quiz-che-qualitative-analysis",
          "questionText": "Which flame colour, seen through cobalt glass, identifies potassium?",
          "optionA": "brick red",
          "optionB": "golden yellow",
          "optionC": "lilac",
          "optionD": "apple green",
          "correctOption": "C",
          "subConcept": "Flame tests",
          "explanation": "Potassium burns lilac, and the cobalt glass screens out the yellow that sodium always adds. Brick red is calcium, golden yellow is sodium, and apple green is barium.",
          "remediationTip": "Remember potassium lilac through cobalt glass, calcium brick red, sodium yellow, barium green."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t1-kinetics-equilibria-and-energetics",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Rate of Reaction, Reversible Reactions and Energetics",
    "description": "Measuring how fast a reaction runs and why, collision theory and the factors that change rate, catalysts, reversible reactions and dynamic equilibrium, the Haber and Contact processes and the Le Chatelier idea, and the energy changes shown on enthalpy-level diagrams with activation energy.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Rate is change in amount of a reactant or product divided by time; average rate = quantity divided by time, with units such as cm3/s, g/s or mol/dm3 per second.\n• Follow a reaction by measuring one thing that changes: gas volume in a gas syringe, loss of mass on a balance as CO2 escapes, cloudiness on a cross, or a colour change timed against a colour card.\n• For marble chips and hydrochloric acid, CaCO3(s) + 2HCl(aq) gives CaCl2(aq) + H2O(l) + CO2(g); collect the CO2 in a syringe and plot volume against time.\n• The curve is steep at the start where reactants are most concentrated and flattens as they are used up; the initial rate is the gradient of the tangent drawn at t = 0.\n• Collision theory: particles must collide, collide in a helpful orientation, and collide with energy at least equal to the activation energy Ea for the collision to react.\n• Raising temperature increases rate chiefly because more particles now carry energy greater than Ea, so a larger fraction of collisions succeed.\n• Concentration (for solutions) or pressure (for gases) raises rate by packing more particles into each cm3, so collisions per second increase.\n• Surface area: powder reacts faster than lumps because more particles sit exposed at the boundary; a crushed antacid tablet fizzes quicker than a whole one.\n• A catalyst speeds the reaction and is chemically unchanged at the end, providing an alternative route of lower activation energy, so more collisions at the same temperature succeed.\n• In the decomposition of hydrogen peroxide, 2H2O2(aq) gives 2H2O(l) + O2(g), manganese(IV) oxide MnO2 is the usual catalyst; the same mass of MnO2 can be recovered after the reaction.\n• Reversible reactions are written with the equilibrium arrow; in a closed container the forward and reverse reactions run at the same time and at equilibrium both rates are equal and concentrations stay constant.\n• At dynamic equilibrium the reaction has not stopped, it simply proceeds forward and backward at equal rates, so amounts look fixed though particles keep reacting.\n• Le Chatelier: a system at equilibrium partly opposes a change imposed on it. Raising temperature favours the endothermic direction; raising pressure favours the side with fewer gas molecules.\n• Haber process: N2(g) + 3H2(g) gives 2NH3(g); the forward reaction is exothermic, so high pressure (fewer gas molecules on the right) and moderate temperature near 450 degrees C with an iron catalyst suit ammonia output.\n• Contact process: 2SO2(g) + O2(g) gives 2SO3(g), using vanadium(V) oxide V2O5, about 450 degrees C and 1 to 2 atmospheres.\n• Exothermic reactions give out heat and have negative enthalpy change, delta H less than zero; endothermic reactions take in heat and have delta H greater than zero.\n• On an enthalpy-level diagram, an exothermic reaction sits with products lower than reactants and activation energy is the hump measured from the reactant line to the peak.\n• In a school calorimeter, heat gained or lost = m x c x delta theta; take c of water as 4200 J/kg per degree C and 1 cm3 of solution as roughly 1 g.",
    "detailedNotes": {
      "overview": "Reactions differ not only in what they make but in how fast they make it and how much energy they exchange with the surroundings. This topic builds three connected ideas: kinetics, which measures and explains the speed of a reaction using collision theory and the activation-energy barrier; chemical equilibrium, which describes reversible reactions in a closed system where forward and reverse rates become equal and how conditions are shifted by the Le Chatelier idea; and energetics, which sorts reactions into exothermic and endothermic and reads their energy changes on enthalpy-level diagrams. The industrial Haber and Contact processes tie the three together, because real plants must balance a fast rate against a good yield. Master these and a WASSCE question on conditions, a rate graph or a calorimetry number becomes routine rather than a guess.",
      "introduction": "Start from the apparatus in the laboratory, not from definitions. Set up the conical flask, delivery tube and gas syringe for the marble-and-acid reaction and record readings every twenty seconds; the graph you plot teaches the shape of a rate curve better than any textbook line. Then repeat one variable at a time, lump against powder, dilute acid against concentrated, cold against warm, and write down the change you observed before you name the factor. Keep the activation-energy hump sketched on the same page as the rate graph so that temperature, catalyst and concentration all become statements about that one barrier.",
      "realWorldContext": "In Ghana the same chemistry runs everywhere. Cookpot charcoal and kerosene stoves at Makola and Kejetia burn faster when the air holes are opened, because more oxygen collides with the fuel each second, the concentration and surface-area effects in one flame. A sachet-water plant at Kasoa stores hydrogen peroxide and other oxidisers cool and shaded to slow their decomposition. The fertiliser that a cocoa or tomato farmer buys at Ejura traces back to the Haber process, where nitrogen from the air is forced into ammonia so food can be grown for a growing population. A student who chews a paracetamol tablet instead of swallowing it whole gets relief faster, which is the surface-area factor on the tongue.",
      "objectives": [
        "Define the rate of a reaction and calculate an average rate from volume-of-gas, loss-of-mass or colour-change data",
        "Explain, using collision theory and activation energy, how temperature, concentration, pressure and surface area change rate",
        "Describe what a catalyst does to a reaction and to the activation-energy barrier, and name examples such as manganese(IV) oxide and iron",
        "Use the equilibrium arrow to describe a dynamic equilibrium in a closed system and state the conditions under which it forms",
        "Apply the Le Chatelier idea to predict the effect of temperature and pressure on equilibrium position and on industrial yield",
        "Distinguish exothermic from endothermic reactions and represent the energy change on an enthalpy-level diagram"
      ],
      "sections": [
        {
          "title": "Measuring the Rate of a Reaction",
          "content": "The rate of a reaction is the speed at which reactants are used up or products are formed, so to measure it you must follow some quantity that changes as the reaction proceeds, and you must time that change. Three laboratory methods are standard. The gas-collection method passes the gas, for example CO2 from marble chips in hydrochloric acid, into an inverted measuring cylinder in a water trough or, more accurately, into a gas syringe, and volume is read against a clock. The loss-of-mass method places the flask on a balance and records how the reading falls as the escaping gas leaves, cotton wool at the neck slowing the draught. The colour or turbidity method times the appearance of a precipitate, as in the reaction between sodium thiosulfate and dilute hydrochloric acid, when sulphur clouds the solution until a cross drawn under the flask vanishes from sight. Whichever is used, average rate equals quantity divided by time, and a graph of quantity against time, steepest at the start and flattening out, gives the initial rate from the tangent at time zero.",
          "bulletPoints": [
            "Follow one measurable change: gas volume, mass lost, time for a cross to disappear, or a fixed colour change.",
            "Average rate = quantity divided by time; state the units, such as cm3/s or g/s, never a bare number.",
            "The rate-time graph is steep at first, when concentrations are highest, and levels when a reactant is exhausted.",
            "The initial rate is the gradient of the tangent drawn to the curve at time zero.",
            "Keep one variable fixed in every repeat, the same volume and concentration of acid and the same mass of chips, so the comparison is fair."
          ],
          "keyTakeaway": "Choose the quantity that changes, record it at fixed time intervals, and read rate as a slope; the method must match the reaction.",
          "realWorldExample": "A quality-control officer at a soft-drinks plant in Tema watches the fizz run off a measured sample over time, which is a volume-of-gas rate curve very close to the school syringe experiment."
        },
        {
          "title": "Collision Theory, Activation Energy and the Factors That Change Rate",
          "content": "Collision theory states that a reaction can happen only when reacting particles collide, and only when those collisions carry at least the activation energy, Ea, and strike in a helpful orientation. Every rate factor is really a statement about how many useful collisions occur each second. Raising the temperature gives the particles more kinetic energy, so they move faster and collide more often, but the dominant effect is that a far larger fraction of collisions now exceed Ea, which is why a few degrees can double a rate. Increasing the concentration of a solution, or the pressure of a gas, packs more particles into the same space, so collisions become more frequent without any change in their energy. Grinding a solid to a powder exposes particles that were buried inside, so more collisions cross the boundary each second, and the powder disappears faster than the lump. Adding these effects does not alter the energy of the reaction, only the speed at which it reaches its products.",
          "bulletPoints": [
            "Particles must collide with energy at least equal to Ea and in the right orientation, or the collision simply bounces apart.",
            "Higher temperature works mainly by lifting more particles over the Ea barrier, not merely by making them move faster.",
            "Higher concentration or pressure increases the number of collisions per second, not their energy.",
            "Greater surface area of a solid exposes more particles, so more collisions happen at the boundary.",
            "The reactant that limits the reaction controls the total gas produced; the rate only controls how fast it is reached."
          ],
          "keyTakeaway": "Every rate factor is a claim about how many collisions per second clear the activation-energy barrier.",
          "realWorldExample": "Charcoal in a Ghanaian cookpot burns with a dull glow until the air holes are opened and a bellows adds oxygen; the extra collisions per second lift the fire to a bright, fast burn."
        },
        {
          "title": "Catalysts and Reversible Reactions",
          "content": "A catalyst changes the rate of a reaction and is left chemically unchanged and unaltered in mass at the end. It works by offering an alternative route with a lower activation energy, so more of the collisions at the existing temperature have enough energy to succeed. Manganese(IV) oxide speeds the decomposition of hydrogen peroxide into water and oxygen and can be recovered unchanged; finely divided iron catalyses the making of ammonia in the Haber process; vanadium(V) oxide catalyses the oxidation of sulphur dioxide in the Contact process. Because lowering Ea helps the forward and the reverse reaction equally, a catalyst helps a system reach equilibrium sooner but does not change the equilibrium position or the final yield. Not all reactions reverse to the same extent: burning charcoal in air is effectively irreversible, while the reaction between nitrogen and hydrogen is easily reversible, and reversible reactions are written with the equilibrium arrow because products can reform reactants.",
          "bulletPoints": [
            "A catalyst lowers the activation energy by providing an alternative pathway and is regenerated at the end.",
            "Manganese(IV) oxide in hydrogen peroxide, iron in the Haber process, and V2O5 in the Contact process are school examples.",
            "A catalyst speeds the approach to equilibrium but does not move the equilibrium position or change the yield.",
            "Positive catalysts speed reactions; negative catalysts, or inhibitors, slow them, as in the preservatives that keep food from spoiling.",
            "Enzymes are biological catalysts in the human body and in yeast, each working at mild temperature and specific to one reaction."
          ],
          "keyTakeaway": "A catalyst is a cheaper, faster route to the same destination, not a way to make more of the product.",
          "realWorldExample": "A brewing or kenkey operation depends on natural microbial action to sour the dough; controlling temperature controls that biological rate, the everyday cousin of the catalysis you study."
        },
        {
          "title": "Dynamic Equilibrium and the Le Chatelier Idea",
          "content": "When a reversible reaction runs in a closed container, the forward reaction slows as reactants are used up while the reverse reaction speeds up as products accumulate, and eventually the two proceed at exactly the same rate. This is a dynamic equilibrium: the reaction has not stopped, particles are still changing in both directions, yet the concentrations of everything remain constant because forward and reverse balance. The Le Chatelier principle predicts how such a system answers a disturbance by partly opposing the change. Raising the temperature favours the endothermic direction because it absorbs the extra heat, so for the exothermic Haber reaction a high temperature lowers the ammonia yield even though it raises the rate. Raising the pressure favours the side with fewer gas molecules, so the high pressure pushes nitrogen and hydrogen toward the two molecules of ammonia. Adding or removing one substance shifts the balance to use it up or replace it, and a catalyst, as noted, only changes how quickly the new balance is reached.",
          "bulletPoints": [
            "Equilibrium needs a closed system, a reversible reaction, and equal forward and reverse rates.",
            "At equilibrium concentrations are constant but not necessarily equal, and the reaction continues in both directions.",
            "Higher temperature favours the endothermic direction and can cut the yield of an exothermic product.",
            "Higher pressure favours the side with fewer gas molecules, as in the Haber reaction where four volumes give two.",
            "Industry accepts a compromise temperature so the rate is workable while the yield is still acceptable."
          ],
          "keyTakeaway": "At equilibrium the rates are equal and amounts are fixed; a stress makes the system shift to undo part of that stress.",
          "realWorldExample": "The Haber plant that supplies a Ghanaian agro-depot runs at roughly 450 degrees C and about 200 atmospheres with an iron catalyst: a compromise temperature so ammonia forms fast enough, with high pressure to push the equilibrium toward the product."
        },
        {
          "title": "Energetics: Exothermic and Endothermic Reactions",
          "content": "Every chemical change involves an energy change, measured at constant pressure as the enthalpy change, delta H. An exothermic reaction gives heat to the surroundings, so the thermometer rises and delta H is negative; combustion, neutralisation and most combination reactions are exothermic. An endothermic reaction takes heat from the surroundings, so the temperature falls and delta H is positive; thermal decomposition, photosynthesis, and the reaction of barium hydroxide with ammonium chloride are common examples. On an enthalpy-level diagram the reactants and products sit on horizontal lines with a hump between them representing the activation energy needed to start the reaction. In an exothermic change the product line lies below the reactant line, and delta H is the vertical gap, drawn as a negative arrow; in an endothermic change the product line lies above and delta H is a positive gap. The activation-energy hump is the same barrier discussed in kinetics, and a catalyst is shown on the diagram as a lower hump joining the same reactant and product lines.",
          "bulletPoints": [
            "Exothermic: heat given out, temperature rises, delta H negative, products lower than reactants.",
            "Endothermic: heat taken in, temperature falls, delta H positive, products higher than reactants.",
            "Delta H depends only on the difference between reactant and product energy, not on the route taken.",
            "The activation-energy hump is measured from the reactant line to the peak of the curve.",
            "A catalyst is drawn as a lower hump between the same reactant and product levels, leaving delta H unchanged."
          ],
          "keyTakeaway": "Read an energy diagram by asking only whether the products sit above or below the reactants; that gap is delta H.",
          "realWorldExample": "Burning coke in a smithy forge is strongly exothermic, while a cold-pack that chills when crushed relies on an endothermic dissolving, both of which the delta H sign predicts."
        }
      ],
      "commonMistakes": [
        "Confusing rate with yield: students say a catalyst gives more product, when it only reaches the same amount faster, and the equilibrium yield is fixed by temperature and pressure.",
        "Saying the reaction stops at equilibrium, when in fact forward and reverse rates are equal and the reaction stays dynamic while amounts look constant.",
        "Applying Le Chatelier backwards by choosing a high temperature for an exothermic reaction to raise its yield, forgetting high temperature favours the endothermic direction and cuts the yield.",
        "Reporting a rate as a loose phrase such as the bubbles stopped sooner, instead of a number with a unit and the time it refers to.",
        "Claiming a catalyst is used up in the reaction, or drawing delta H on a diagram from the peak of the hump rather than from reactants to products."
      ],
      "wassceExamTips": [
        "On Paper 2 a rate question rewards the method mark M1 for stating the quantity and the time it was measured over and the answer mark A1 for the figure with a correct unit, so always write the unit.",
        "For collision-theory parts, name the factor and then say exactly what it does to Ea or to collision frequency; vague phrases such as the particles move more earn little.",
        "When asked to explain a graph, refer to the gradient at the start for the initial rate and to the plateau for completion, and say why the curve flattens.",
        "State Le Chatelier by naming the stress, the direction of the shift and the reason, and for industrial processes note the compromise condition as well as the trend.",
        "For energetics, sketch the axes and both levels before marking the activation hump and delta H; Paper 3 may test the calorimetry relation heat = m c delta theta with c water taken as 4200 J per kg per degree C."
      ],
      "summaryChecklist": [
        "Can I calculate an average rate from a volume-of-gas or mass-loss reading and attach the correct unit?",
        "Can I explain, using collision theory and activation energy, how temperature, concentration, pressure and surface area change a rate?",
        "Can I state what a catalyst does and why it speeds a reaction without changing the yield?",
        "Can I describe a dynamic equilibrium and apply the Le Chatelier idea to temperature, pressure and concentration changes?",
        "Can I tell exothermic from endothermic reactions and draw an enthalpy-level diagram with activation energy and delta H?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-kinetics-1",
        "title": "Average Rate from a Volume of Gas Collected",
        "problem": "In a reaction between marble chips and dilute hydrochloric acid, 60.0 cm3 of carbon dioxide was collected in 30 s before the reaction slowed near its end. Find the average rate of gas production over that period, in cm3/s.",
        "stepByStepSolution": [
          "Step 1 (M1): Choose the measured quantity and the time interval over which it was collected, here 60.0 cm3 of CO2 formed in 30 s.",
          "Step 2 (M1): Recall average rate = quantity of product formed divided by the time taken, so rate = volume divided by time.",
          "Step 3 (M1): Substitute the values, rate = 60.0 cm3 / 30 s.",
          "Step 4 (A1): Evaluate to get 2.0 cm3/s.",
          "Step 5 (A1): State the answer with its unit: the average rate of gas production is 2.0 cm3/s."
        ],
        "keyTakeaway": "An average rate is simply the total gas produced divided by the total time, and a rate answer is meaningless without its unit."
      },
      {
        "id": "ex-che-kinetics-2",
        "title": "Enthalpy of Neutralisation from a Calorimetry Result",
        "problem": "50.0 cm3 of 0.50 mol/dm3 hydrochloric acid was mixed with 50.0 cm3 of 0.50 mol/dm3 sodium hydroxide in a polystyrene cup, and the temperature rose by 3.5 degrees C. Taking the density of the solution as 1 g/cm3 and c of water as 4200 J per kg per degree C, calculate the enthalpy change for the neutralisation per mole of water formed.",
        "stepByStepSolution": [
          "Step 1 (M1): Find the moles of water formed from the limiting reactant, n = C x V/1000 = 0.50 x 50.0/1000 = 0.025 mol (HCl and NaOH react 1 to 1).",
          "Step 2 (M1): Find the mass of the solution from its total volume, 50.0 + 50.0 = 100.0 cm3, taken as 100.0 g, which is 0.100 kg.",
          "Step 3 (M1): Apply the calorimetry relation, heat released = m x c x delta theta = 0.100 x 4200 x 3.5.",
          "Step 4 (M1): Compute the heat released, 0.100 x 4200 x 3.5 = 1470 J.",
          "Step 5 (M1): Divide by the moles of water to get the enthalpy change per mole, delta H = 1470 J / 0.025 mol = 58800 J/mol.",
          "Step 6 (A1): Convert to kJ/mol and attach the sign for an exothermic change: delta H = -58.8 kJ/mol."
        ],
        "keyTakeaway": "Neutralisation is exothermic, so the enthalpy change per mole is negative; divide the heat measured by the moles of water formed, not by the moles of either reactant taken separately."
      }
    ],
    "quiz": {
      "id": "quiz-che-kinetics",
      "topicId": "shs3-che-t1-kinetics-equilibria-and-energetics",
      "title": "Rate, Equilibrium and Energetics Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-kinetics-1",
          "quizId": "quiz-che-kinetics",
          "questionText": "In an experiment the reaction between marble chips and hydrochloric acid produced 60.0 cm3 of carbon dioxide in 30 s. What is the average rate of gas production?",
          "optionA": "2.0 cm3/s",
          "optionB": "30 cm3/s",
          "optionC": "90 cm3/s",
          "optionD": "1800 cm3/s",
          "correctOption": "A",
          "subConcept": "Measuring rate",
          "explanation": "Average rate = volume of gas divided by the time = 60.0 cm3 / 30 s = 2.0 cm3/s. Choosing 1800 comes from multiplying instead of dividing, while 30 and 90 ignore the volume measurement.",
          "remediationTip": "Always divide the change by the time, and write the unit cm3/s so a rate is never mistaken for a volume or a time."
        },
        {
          "id": "q-che-kinetics-2",
          "quizId": "quiz-che-kinetics",
          "questionText": "Raising the temperature speeds up a reaction mainly because",
          "optionA": "the activation energy of the reaction is lowered",
          "optionB": "the particles collide more often and a larger fraction of collisions have energy greater than the activation energy",
          "optionC": "the concentration of the reactants increases",
          "optionD": "a catalyst is formed as the mixture warms",
          "correctOption": "B",
          "subConcept": "Collision theory",
          "explanation": "The dominant effect of temperature is that more particles now exceed Ea and collide more often, so more collisions succeed. Activation energy Ea is a fixed barrier that temperature does not change; only a catalyst lowers it, and heating neither raises concentration nor creates a catalyst.",
          "remediationTip": "Keep Ea as a fixed hill: temperature gives more particles the energy to clear it, while a catalyst cuts the hill lower."
        },
        {
          "id": "q-che-kinetics-3",
          "quizId": "quiz-che-kinetics",
          "questionText": "For the Haber equilibrium N2(g) + 3H2(g) gives 2NH3(g), with the forward reaction exothermic, which set of conditions favours a higher yield of ammonia?",
          "optionA": "High temperature and low pressure",
          "optionB": "Low pressure and a large excess of catalyst",
          "optionC": "High pressure and low temperature",
          "optionD": "Adding more ammonia to the mixture",
          "correctOption": "C",
          "subConcept": "Le Chatelier and equilibrium",
          "explanation": "The right-hand side has fewer gas molecules, 2 moles against 4, so high pressure pushes the equilibrium toward ammonia, and since the forward reaction is exothermic, low temperature favours it. High temperature would raise the rate but cut the yield; a catalyst changes neither.",
          "remediationTip": "Split every equilibrium question into a rate effect and a yield effect; the compromise temperature of about 450 degrees C is a rate choice, not a yield choice."
        },
        {
          "id": "q-che-kinetics-4",
          "quizId": "quiz-che-kinetics",
          "questionText": "Which statement about a catalyst at equilibrium is correct?",
          "optionA": "It is used up as the reaction proceeds and must be replaced",
          "optionB": "It permanently changes the equilibrium position",
          "optionC": "It increases the total amount of product at equilibrium",
          "optionD": "It provides an alternative route of lower activation energy and helps the system reach equilibrium faster without changing the position",
          "correctOption": "D",
          "subConcept": "Catalysts and equilibrium",
          "explanation": "A catalyst is regenerated unchanged, so it is not used up, and because it speeds the forward and reverse reactions equally it only shortens the time to reach equilibrium without moving the position or the yield. Options claiming it is consumed, moves the position, or raises the yield are all wrong.",
          "remediationTip": "Recite the definition: faster, unchanged, same yield. Then check each option against those three words."
        },
        {
          "id": "q-che-kinetics-5",
          "quizId": "quiz-che-kinetics",
          "questionText": "The thermal decomposition of calcium carbonate into quicklime and carbon(IV) oxide needs a constant heat supply. It is therefore",
          "optionA": "endothermic, with a positive delta H",
          "optionB": "exothermic, with a negative delta H",
          "optionC": "neutral, with delta H equal to zero",
          "optionD": "catalytic, needing no energy change",
          "correctOption": "A",
          "subConcept": "Enthalpy change",
          "explanation": "A reaction that must be supplied with heat continuously takes heat in, so it is endothermic and its products lie above its reactants with delta H positive. Combustion and neutralisation are the exothermic cases with negative delta H.",
          "remediationTip": "Connect the sign to the thermometer: heat absorbed makes the surroundings cool and delta H is positive; heat given out makes them warm and delta H is negative."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t1-chemical-equilibria-kc-yield",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 6,
    "title": "Chemical Equilibria II: Kc, Le Chatelier and Industrial Yield",
    "description": "Reversible reactions and dynamic equilibrium, the equilibrium constant expression Kc and its units, the effect of concentration, pressure and temperature with the Le Chatelier idea, the role of a catalyst, the conditions chosen in the Haber and Contact processes, and calculating Kc from equilibrium amounts.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A reversible reaction is drawn with the equilibrium arrow; in a closed system forward and reverse run together and at dynamic equilibrium their rates are equal and the concentrations hold steady.\n• For aA + bB gives cC + dD, the constant Kc = [C]^c [D]^d / ([A]^a [B]^b), using equilibrium concentrations in mol/dm3.\n• Pure solids and pure liquids, including water acting as solvent, are left out of the Kc expression because their amounts do not change.\n• The units of Kc come from substituting mol/dm3 and cancelling; some reactions give a unitless Kc, others mol/dm3 or mol^-1 dm3.\n• A large Kc means products dominate at equilibrium, a small Kc means most reactants remain.\n• Kc is fixed at one temperature only; changing concentration or pressure moves the position but never the value of Kc.\n• Only a change of temperature alters Kc, heating favouring the endothermic direction.\n• Le Chatelier: adding a reactant shifts the balance forward, raising pressure favours the side with fewer gas molecules, raising temperature favours the endothermic side.\n• A catalyst shortens the time to reach equilibrium but leaves both Kc and the yield unchanged.\n• Haber process N2 + 3H2 gives 2NH3, forward reaction exothermic; about 450 degrees C, 200 atmospheres and an iron catalyst are a rate-yield compromise.\n• Contact process 2SO2 + O2 gives 2SO3 over vanadium(V) oxide at about 450 degrees C and low pressure.\n• To calculate Kc, find equilibrium moles with a mole table, divide by the vessel volume in dm3, then substitute each raised to its coefficient.",
    "detailedNotes": {
      "overview": "Some reactions never finish; they settle into a steady balance where products keep forming and reforming at the same pace. This topic makes that balance, dynamic equilibrium, quantitative through the equilibrium constant Kc. You learn to write the Kc expression straight from a balanced equation, to leave out solids and liquids, to compute a value with its units from equilibrium amounts, and to read what the size of Kc says about the position. The second half is control: the Le Chatelier principle predicts how concentration, pressure and temperature shift the balance, and how industry uses that knowledge. The Haber and Contact processes are the working models, because there a good yield and a fast rate must be reconciled by a deliberate compromise of conditions.",
      "introduction": "Start with a closed system you can picture, such as the vapour above liquid bromine in a sealed jar, where evaporation and condensation run at equal rates and the colour deepens no further. Then move to a gaseous reaction and build a mole table: initial moles, change, and equilibrium moles, so the numbers you feed into the Kc expression are already correct before you substitute. Sketch the Haber reaction once as a rate curve and once as a yield-versus-temperature line; the gap between those two graphs is exactly the compromise an engineer has to solve.",
      "realWorldContext": "The ammonia made by the Haber process becomes the NPK fertiliser sold at agro-depots in Ejura and Sunyani, so the equilibrium you calculate feeds cocoa and maize fields. Sulphuric acid from the Contact process is used in battery manufacture and in phosphate-fertiliser plants near Tema. Ghanaian breweries that carbonate drinks must hold carbon dioxide dissolved under pressure, another equilibrium that shifts when a bottle is opened and pressure falls. A Water Authority plant that softens water leans on solubility equilibria too, and the school rule for any gas-handling is unchanged: work in a ventilated space, use eye protection, and never seal a reaction vessel that could build pressure.",
      "objectives": [
        "Describe a dynamic equilibrium in a closed system and state that forward and reverse rates are equal there",
        "Write a correct Kc expression from a balanced equation and leave pure solids and liquids out of it",
        "Calculate Kc and its units from given equilibrium amounts and a vessel volume",
        "Apply Le Chatelier to concentration, pressure and temperature and explain the compromise conditions of the Haber and Contact processes"
      ],
      "sections": [
        {
          "title": "Dynamic Equilibrium and Writing the Kc Expression",
          "content": "A reversible reaction is drawn with the equilibrium arrow because its products can reform the reactants under the same conditions. In a closed vessel the forward reaction starts fast while reactants are plentiful and slows as they fall, while the reverse reaction gathers speed as products build up, and the instant the two rates become equal the mixture is at dynamic equilibrium. Nothing has stopped, particles still change in both directions, yet the concentration of every species holds steady, which is the sense in which the amounts are constant. The equilibrium constant Kc captures this state as a single number. For the general reaction aA plus bB giving cC plus dD it is written as the concentration of C raised to the power c times that of D raised to d, divided by the concentration of A raised to a times B raised to b, with every concentration measured at equilibrium in mol/dm3. Pure solids and pure liquids, including water when it acts only as the solvent, are left out of the expression because their amounts do not enter the balance. The value of Kc reads the position: a large number says products dominate at equilibrium, a small one says most reactants remain.",
          "bulletPoints": [
            "Equilibrium needs a closed system and a reversible reaction with equal forward and reverse rates.",
            "At equilibrium concentrations are constant but not necessarily equal, and the reaction stays dynamic.",
            "Kc = [C]^c [D]^d / ([A]^a [B]^b), each concentration raised to its own coefficient.",
            "Omit pure solids and the liquid solvent from the Kc expression; they do not change amount in the balance.",
            "Large Kc favours products, small Kc favours reactants, and the value holds only at one temperature."
          ],
          "keyTakeaway": "Write Kc from the balanced equation with products over reactants and powers from the coefficients; its size simply reads how far the reaction has gone.",
          "realWorldExample": "In a sealed soda bottle the carbon dioxide dissolved above the drink is in equilibrium with the gas; open the cap, the gas escapes, and Le Chatelier pulls more carbon dioxide out of solution as the drink fizzes."
        },
        {
          "title": "Calculating Kc from Equilibrium Amounts",
          "content": "To find Kc you turn the amounts present at equilibrium into concentrations and substitute them into the expression, so the real skill is an orderly mole table. Begin with the moles of each substance you started with, subtract the moles that reacted in the ratio of the coefficients, and read the moles left at equilibrium; if the equilibrium amount of one species is given, the coefficients fix the others. Divide every equilibrium mole figure by the volume of the vessel in dm3 to obtain concentrations in mol/dm3, then place them into the Kc expression, keeping each concentration raised to its own coefficient. The units come from the same substitution and are not always unitless: for a reaction with the same total number of molecules on both sides they cancel and Kc carries no unit, but where the totals differ the answer takes a unit such as mol/dm3 or mol^-1 dm3. It is worth stressing that Kc is fixed only at one temperature, so a change of concentration or pressure shifts the position and changes which amounts you finally find, but never changes the value of Kc itself.",
          "bulletPoints": [
            "Build a mole table of initial, change and equilibrium amounts before substituting anything.",
            "Convert equilibrium moles to concentration by dividing by the vessel volume in dm3.",
            "Raise each concentration to its coefficient in the Kc expression.",
            "State the units by substituting mol/dm3 and cancelling, since they are not always unitless.",
            "Only temperature, not pressure or concentration, changes the numerical value of Kc."
          ],
          "keyTakeaway": "A correct Kc comes from a clean mole table, concentrations in mol/dm3, and coefficients turned into powers; carry the units through the cancelling.",
          "realWorldExample": "An engineer checking an ammonia converter samples the gas at working temperature, feeds the equilibrium concentrations into Kc, and reads from the value how much nitrogen still escapes unreacted."
        },
        {
          "title": "Le Chatelier, Temperature and the Industrial Compromise",
          "content": "Le Chatelier's principle predicts how an equilibrium answers a stress: the system shifts in the direction that partly relieves the change. Raising the concentration of a reactant pushes the equilibrium forward to consume the addition, while raising the pressure on a gaseous mixture favours whichever side holds fewer gas molecules, so in the Haber reaction four volumes of nitrogen and hydrogen collapse to two volumes of ammonia under pressure. Temperature behaves differently because it is the one factor that alters Kc: heating favours the endothermic direction, since that absorbs the extra energy, while cooling favours the exothermic one. A catalyst earns none of this, because it speeds the forward and reverse reactions equally, cutting the time to reach equilibrium but leaving both Kc and the yield untouched. Industry therefore lives on compromise. The Haber process runs near 450 degrees C with an iron catalyst and about 200 atmospheres, a temperature high enough for a workable rate even though it costs some ammonia yield, while the Contact process oxidises sulphur dioxide over vanadium(V) oxide at about 450 degrees C and modest pressure.",
          "bulletPoints": [
            "Adding a reactant shifts the balance forward; removing a product does the same.",
            "Higher pressure favours the side with fewer gas molecules, as in the Haber four-to-two collapse.",
            "Higher temperature favours the endothermic direction and can lower the yield of an exothermic product.",
            "A catalyst only reaches the balance sooner; it moves neither the position nor the value of Kc.",
            "Industry trades yield for rate, hence the moderate temperature with high pressure in Haber and Contact."
          ],
          "keyTakeaway": "Name the stress, the direction of the shift and the reason; industry picks a compromise so the rate is workable while the yield stays acceptable.",
          "realWorldExample": "The fertilizer plant that supplies a Ghanaian agro-depot chooses about 450 degrees C so ammonia forms fast enough, accepting a lower equilibrium yield because a colder reactor would be far too slow to run."
        }
      ],
      "commonMistakes": [
        "Writing Kc with the reactants on top and the products below, inverting the expression that should read products over reactants.",
        "Forgetting to raise each concentration to the power of its coefficient, or adding concentrations instead of multiplying them.",
        "Including a pure solid or the liquid solvent in the Kc expression when those species must be left out.",
        "Claiming that a catalyst or a pressure change alters the value of Kc, when only a change of temperature does."
      ],
      "wassceExamTips": [
        "On Paper 2 the method mark M1 is for a correct Kc expression and the answer mark A1 for the numerical value with its unit, so state the unit whenever the powers do not cancel.",
        "Build an equilibrium mole table first and work the coefficients through it before dividing by volume; this shows the examiner your route to the amounts.",
        "Split every Le Chatelier answer into the stress, the direction of the shift and the reason, and name the compromise condition, not just the ideal one, for an industrial process.",
        "In Paper 3 remember a catalyst shortens the time but moves nothing, so a question about yield and a question about speed have different answers."
      ],
      "summaryChecklist": [
        "Can I explain a dynamic equilibrium and say why concentrations stay constant while the reaction continues?",
        "Can I write a Kc expression from a balanced equation, omitting pure solids and liquids?",
        "Can I calculate Kc and its units from equilibrium moles and a given vessel volume?",
        "Can I predict the shift caused by changes in concentration, pressure and temperature with Le Chatelier?",
        "Can I justify the temperature, pressure and catalyst chosen in the Haber and Contact processes?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-equilibria-kc-1",
        "title": "Finding Kc from Equilibrium Moles",
        "problem": "One mole of hydrogen and one mole of iodine vapour are sealed in a 1.0 dm3 vessel and allowed to reach equilibrium: H2(g) + I2(g) gives 2HI(g). At equilibrium 1.6 mol of hydrogen iodide is present. Calculate Kc for the reaction.",
        "stepByStepSolution": [
          "Step 1 (M1): From the equation, 2 mol HI forms per 1 mol H2 used, so moles of H2 reacted = 1.6 / 2 = 0.80 mol.",
          "Step 2 (M1): Equilibrium moles of H2 = 1.0 - 0.80 = 0.20 mol, and by symmetry of the same starting amounts, moles of I2 = 0.20 mol.",
          "Step 3 (M1): Divide each by the 1.0 dm3 volume, so [H2] = [I2] = 0.20 mol/dm3 and [HI] = 1.6 mol/dm3.",
          "Step 4 (M1): Write Kc = [HI]^2 / ([H2][I2]) and substitute: Kc = 1.6^2 / (0.20 x 0.20).",
          "Step 5 (M1): Evaluate, 1.6^2 = 2.56 and 0.20 x 0.20 = 0.040, so Kc = 2.56 / 0.040.",
          "Step 6 (A1): Kc = 64; the powers cancel so Kc carries no unit here because there are two gas molecules on each side."
        ],
        "keyTakeaway": "Read the reacting ratio through a mole table, convert to concentration, then substitute each raised to its coefficient; equal molecule totals give a unitless Kc."
      },
      {
        "id": "ex-che-equilibria-kc-2",
        "title": "Finding an Equilibrium Concentration from Kc",
        "problem": "For N2O4(g) gives 2NO2(g), Kc = 0.36 mol/dm3 at a certain temperature. If the equilibrium concentration of N2O4 is 0.25 mol/dm3, calculate the equilibrium concentration of NO2.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the expression Kc = [NO2]^2 / [N2O4].",
          "Step 2 (M1): Rearrange for the unknown, [NO2]^2 = Kc x [N2O4].",
          "Step 3 (M1): Substitute the values, [NO2]^2 = 0.36 x 0.25 = 0.090.",
          "Step 4 (M1): Take the square root, [NO2] = sqrt(0.090).",
          "Step 5 (A1): [NO2] = 0.30 mol/dm3 at equilibrium."
        ],
        "keyTakeaway": "Rearranging the Kc expression turns a known constant into any one missing equilibrium concentration; here the square root of 0.090 is 0.30 mol/dm3."
      }
    ],
    "quiz": {
      "id": "quiz-che-equilibria-kc",
      "topicId": "shs3-che-t1-chemical-equilibria-kc-yield",
      "title": "Kc Equilibria and Yield Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-equilibria-kc-1",
          "quizId": "quiz-che-equilibria-kc",
          "questionText": "For the equilibrium N2(g) + 3H2(g) gives 2NH3(g), the correct expression for Kc is",
          "optionA": "[N2][H2]^3 / [NH3]^2",
          "optionB": "[NH3]^2 / ([N2][H2]^3)",
          "optionC": "2[NH3] / ([N2] + 3[H2])",
          "optionD": "[NH3] / ([N2][H2])",
          "correctOption": "B",
          "subConcept": "Writing Kc",
          "explanation": "Products sit on top with each concentration raised to its coefficient, so Kc = [NH3]^2 / ([N2][H2]^3). Option A inverts it, C adds instead of multiplies, and D forgets the powers.",
          "remediationTip": "Recite products over reactants, powers from coefficients, and leave pure solids and liquids out."
        },
        {
          "id": "q-che-equilibria-kc-2",
          "quizId": "quiz-che-equilibria-kc",
          "questionText": "Which change is the only one that alters the numerical value of Kc?",
          "optionA": "increasing the pressure",
          "optionB": "adding a suitable catalyst",
          "optionC": "raising the concentration of a reactant",
          "optionD": "changing the temperature",
          "correctOption": "D",
          "subConcept": "Factors affecting Kc",
          "explanation": "Kc is constant at a fixed temperature, so only a change of temperature shifts its value. Pressure and concentration move the position but not Kc, and a catalyst changes neither.",
          "remediationTip": "Keep a mental rule: stress of concentration or pressure moves the balance, stress of temperature moves Kc itself."
        },
        {
          "id": "q-che-equilibria-kc-3",
          "quizId": "quiz-che-equilibria-kc",
          "questionText": "Adding a catalyst to a system at equilibrium",
          "optionA": "speeds the system to equilibrium without changing the position or Kc",
          "optionB": "has no effect on how fast equilibrium is reached",
          "optionC": "shifts the position toward the products",
          "optionD": "increases the equilibrium yield of product",
          "correctOption": "A",
          "subConcept": "Catalyst and equilibrium",
          "explanation": "A catalyst lowers activation energy for the forward and reverse reactions equally, so equilibrium is reached sooner but the position and Kc stay the same. It cannot move the balance or raise the yield, and it certainly does speed the arrival.",
          "remediationTip": "For a catalyst write faster, unchanged, same yield, then reject any option that claims a shift."
        },
        {
          "id": "q-che-equilibria-kc-4",
          "quizId": "quiz-che-equilibria-kc",
          "questionText": "Raising the total pressure on the Haber equilibrium favours the side with",
          "optionA": "more gas molecules",
          "optionB": "no gas molecules",
          "optionC": "the higher temperature",
          "optionD": "fewer gas molecules",
          "correctOption": "D",
          "subConcept": "Pressure and Le Chatelier",
          "explanation": "Higher pressure pushes the balance toward fewer gas molecules to relieve it, so four volumes of nitrogen and hydrogen give the two volumes of ammonia. It has nothing to do with temperature or with the side that has more molecules.",
          "remediationTip": "Count gas molecules each side and say pressure favours the smaller count."
        },
        {
          "id": "q-che-equilibria-kc-5",
          "quizId": "quiz-che-equilibria-kc",
          "questionText": "A very large value of Kc tells the chemist that at equilibrium",
          "optionA": "reactants dominate and little product has formed",
          "optionB": "the reaction has stopped completely",
          "optionC": "products dominate and most reactants have been converted",
          "optionD": "a catalyst must have been present",
          "correctOption": "C",
          "subConcept": "Reading Kc",
          "explanation": "A large Kc means the numerator of products far exceeds the denominator of reactants, so products dominate at equilibrium. A small Kc would mean the opposite, and a large value says nothing about a catalyst or about the reaction stopping, since equilibrium stays dynamic.",
          "remediationTip": "Translate the magnitude: big Kc means mostly product, small Kc means mostly reactant."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t1-thermochemistry-enthalpy-hess-law",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 7,
    "title": "Thermochemistry: Enthalpy, Bond Energy and Hess's Law",
    "description": "Standard enthalpy change and its sign convention, the named enthalpies of neutralisation, combustion, formation and solution, calorimetry with Q = m c delta T, estimating enthalpy change from bond-energy sums and why those are averages, and Hess's law for finding an enthalpy change by an indirect route.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Enthalpy change delta H is the heat taken in or given out at constant pressure, negative for an exothermic change and positive for an endothermic one.\n• Standard enthalpy changes are measured near 298 K and 1 atmosphere with 1 mol/dm3 solutions, and are named by type: formation, combustion, neutralisation and solution.\n• Delta H of formation is the change when one mole of a compound forms from its elements in their standard states; an element in its standard state has a formation value of zero.\n• Delta H of combustion is the heat when one mole of a substance burns completely in oxygen.\n• Delta H of neutralisation is the heat when one mole of water forms from H+ and OH-; a strong acid with a strong base gives about -57 kJ/mol.\n• Calorimetry finds heat with Q = m x c x delta T, taking c of water as 4200 J per kg per degree C and 1 cm3 of solution as about 1 g.\n• Then delta H per mole = heat divided by the moles reacting, the sign added from whether the temperature rose or fell.\n• A reaction breaks bonds in the reactants, which costs energy, and forms bonds in the products, which releases energy.\n• Delta H from bond energies = total energy of bonds broken minus total energy of bonds formed, and these are mean values, so the answer is an estimate for gaseous species.\n• Hess's law: the overall enthalpy change is the same by any route, since enthalpy is a state function, so an unmeasurable value is built from known steps.\n• Reversing a reaction flips the sign of delta H; multiplying the coefficients by a factor multiplies delta H by the same factor.\n• The fuel value of a groundnut or of palm oil is found by burning a dried sample under a known mass of water and applying Q = m c delta T.",
    "detailedNotes": {
      "overview": "Chemical reactions are always accompanied by an energy change, and this topic puts numbers on that change. It opens with enthalpy, the heat exchanged at constant pressure, and the rule that a reaction warming its surroundings carries a negative delta H while one cooling them is positive. It then sorts enthalpy changes into named standards, formation, combustion, neutralisation and solution, so that a definition tells you exactly which reactants and products are meant. Two routes to the number follow: calorimetry, which measures the heat directly with Q = m c delta T, and calculation, either by summing bond energies or by stringing known steps together with Hess's law. Together they let a student find an enthalpy change that is far too fast, too slow or too dangerous to measure in a school beaker.",
      "introduction": "Anchor the topic in one clean calorimeter experiment before touching the theory. Put 50 cm3 of sodium hydroxide in a polystyrene cup, add 50 cm3 of hydrochloric acid, stir and read the highest temperature; the rise converts straight into heat with Q = m c delta T and then into delta H once you divide by the moles of water formed. Keep that worked number beside the definition of neutralisation so the sign convention is felt, not memorised. Draw a Hess cycle as a box diagram with the target reaction as the diagonal and the given steps as the two sides of the box.",
      "realWorldContext": "Food energy on a Ghanaian label is enthalpy of combustion measured in a bomb-calorimeter style. Roasting groundnuts, pressing palm oil at a village mill, or burning dried cassava chips all release heat a student can capture under a can of water and express in kilojoules per gram. Charcoal sold in the market is judged by how much heat it gives per kilogram, again a combustion enthalpy. The same bond-energy and Hess ideas guide a brewer who must remove the heat of fermentation to keep yeast alive. School safety stands firm: measure hot solutions in a polystyrene cup with tongs, keep acids away from the eyes, and never taste anything in the laboratory.",
      "objectives": [
        "Define enthalpy change and give its sign convention for exothermic and endothermic reactions",
        "State the named standard enthalpies of formation, combustion, neutralisation and solution and what one mole of each means",
        "Use Q = m c delta T in calorimetry to calculate an enthalpy change per mole with the correct sign",
        "Estimate enthalpy change from bond-energy sums and apply Hess's law to find an unmeasurable delta H"
      ],
      "sections": [
        {
          "title": "Enthalpy Change and the Named Standard Reactions",
          "content": "Enthalpy change, delta H, is the heat absorbed or released by a reaction at constant pressure, and by convention an exothermic change that warms the surroundings carries a negative delta H while an endothermic one that cools them carries a positive delta H. Because every measurement depends on conditions, chemists fix a standard state, a pressure of one atmosphere, a temperature near 298 K and solutions at 1 mol/dm3, and then give each enthalpy change a name that states exactly what one mole of it means. The standard enthalpy of formation is the change when one mole of a compound is made from its elements in their normal physical states, and by definition an element in its standard state has a formation enthalpy of zero. The standard enthalpy of combustion is the heat when one mole of a substance burns completely in oxygen; the enthalpy of neutralisation is the heat when one mole of water forms from the union of hydrogen ions and hydroxide ions, close to -57 kJ/mol for a strong acid with a strong base; and the enthalpy of solution is the change when one mole of solute dissolves in a large excess of solvent. Naming the type fixes which reactants and products to expect and so prevents a careless sign.",
          "bulletPoints": [
            "Exothermic gives heat out, temperature rises, delta H negative; endothermic takes heat in, delta H positive.",
            "Formation builds one mole of compound from its elements; an element in its standard state is zero.",
            "Combustion burns one mole of substance fully in oxygen.",
            "Neutralisation forms one mole of water from H+ and OH-, near -57 kJ/mol for strong acid and strong base.",
            "Solution dissolves one mole of solute in a large excess of solvent."
          ],
          "keyTakeaway": "Name the enthalpy change first, because each definition says exactly how many moles of which substance are involved, and only then can the sign be trusted.",
          "realWorldExample": "A dietitian quoting the energy of roasted groundnuts is giving the enthalpy of combustion of the food, the same quantity a calorimeter measures when a dried sample is burned under water."
        },
        {
          "title": "Calorimetry and the Relation Q = m c delta T",
          "content": "Enthalpy change is measured by calorimetry, in which the heat of the reaction is passed to or drawn from a known mass of water and the temperature change is read on a thermometer. The heat exchanged is given by Q = m x c x delta T, where m is the mass of water in kilograms, c is its specific heat capacity taken as 4200 J per kg per degree C, and delta T is the temperature change in degrees Celsius. For reactions in solution a school assumption is that 1 cm3 of the mixture has a mass of 1 g, so 100 cm3 of solution is weighed as 100 g, that is 0.100 kg. A polystyrene cup or a copper calorimeter limits heat lost to the air, though some loss always occurs, which is why a measured value is often smaller in size than the accepted one. Once Q is known, delta H per mole is found by dividing that heat by the number of moles of reactant or of water formed, and the sign is added last: a temperature rise proves heat left the reacting system, so delta H is negative. The same arithmetic turns a burning peanut or a spoon of palm oil into a fuel value, since the heat it gives to a can of water is captured exactly as in the cup experiment.",
          "bulletPoints": [
            "Heat Q = m x c x delta T, with mass in kg and c of water as 4200 J per kg per degree C.",
            "For solutions take 1 cm3 as 1 g, so total volume in cm3 equals mass in grams.",
            "Divide the heat by the moles reacting, usually the moles of water formed in neutralisation.",
            "A temperature rise means the reaction is exothermic, so delta H is negative.",
            "Some heat always escapes, so a school value is often less exothermic than the table figure."
          ],
          "keyTakeaway": "Calorimetry converts a temperature change into heat, then into delta H per mole; judge the sign from whether the mixture warmed or cooled.",
          "realWorldExample": "A science club burning a fragment of charcoal under a weighed tin of water can estimate the charcoal's fuel value using the same Q = m c delta T that the exam expects."
        },
        {
          "title": "Bond Energy Sums and Hess's Law",
          "content": "Two further routes give enthalpy change without a simple calorimeter. The first counts bonds, because a reaction breaks bonds in the reactants, which costs energy, and forms new bonds in the products, which releases it. The enthalpy change is therefore the total energy of bonds broken minus the total energy of bonds formed, and a reaction that releases more than it spends is exothermic. These bond energies are averaged over many compounds, so the sum yields an estimate rather than an exact figure, and every species must be in the gas phase for the count to be valid. The second route is Hess's law, which states that the overall enthalpy change of a reaction is the same whether it runs in one step or in several, because enthalpy is a state function. This lets a hard-to-measure value be built from easy ones: given standard enthalpies of formation or combustion, write the target equation, reverse or multiply the known steps as needed, and add their delta H values with the matching sign flips, cancelling every species that appears on both sides. Reversing a reaction turns delta H from positive to negative or back, and doubling the coefficients doubles the delta H.",
          "bulletPoints": [
            "Breaking bonds absorbs energy and forming bonds releases it; delta H = bonds broken minus bonds formed.",
            "Bond energies are mean values, so the result is an estimate and needs gaseous species.",
            "Hess's law: the total enthalpy change is the same by any route, since enthalpy is a state function.",
            "Reverse a step and flip its delta H sign; scale coefficients and scale delta H by the same factor.",
            "Add the adjusted steps and cancel species on both sides until only the target equation remains."
          ],
          "keyTakeaway": "Enthalpy is a state function, so you can reach the same delta H by a bond tally or by stitching known steps together with Hess's law.",
          "realWorldExample": "The formation enthalpy of carbon monoxide cannot be measured safely by burning carbon in a limited air supply, so it is found by Hess's law from the clean combustion figures for carbon and for carbon monoxide."
        }
      ],
      "commonMistakes": [
        "Reporting delta H positive for an exothermic reaction, ignoring that a temperature rise means heat left the system and delta H must be negative.",
        "Using the mass in grams without converting to kilograms in Q = m c delta T, or leaving the specific heat capacity without its units.",
        "Reversing a Hess's-law step but forgetting to flip the sign of its delta H, or doubling the coefficients while leaving delta H unchanged.",
        "Treating a bond-energy sum as an exact answer, when those energies are mean values valid only for gases."
      ],
      "wassceExamTips": [
        "On Paper 2 a calorimetry part awards the method mark M1 for the substituted relation Q = m c delta T with mass in kilograms and the answer mark A1 for delta H in kJ/mol with its sign.",
        "Name the enthalpy change before calculating it; formation, combustion and neutralisation each have a definition the examiner checks word for word.",
        "For a Hess cycle redraw the target equation clearly, label each given step and show the cancellation, because the method carries most of the marks.",
        "In Paper 3 the fuel value of a groundnut or of palm oil is a Q = m c delta T question; keep c at 4200 J per kg per degree C and convert grams of sample to moles before dividing."
      ],
      "summaryChecklist": [
        "Can I define enthalpy change and give the correct sign for exothermic and endothermic reactions?",
        "Can I state the standard definitions of formation, combustion, neutralisation and solution?",
        "Can I calculate an enthalpy change per mole from calorimetry using Q = m c delta T?",
        "Can I estimate delta H from bond energies and say why the answer is only an average?",
        "Can I build an unmeasurable enthalpy change with Hess's law, flipping signs and scaling coefficients?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-thermochemistry-1",
        "title": "Enthalpy of Neutralisation from a Cup Calorimeter",
        "problem": "50 cm3 of 1.0 mol/dm3 hydrochloric acid was mixed with 50 cm3 of 1.0 mol/dm3 sodium hydroxide in a polystyrene cup and the temperature rose by 6.8 degrees C. Take the density of the solution as 1 g/cm3 and c of water as 4200 J per kg per degree C. Calculate the enthalpy of neutralisation per mole of water formed.",
        "stepByStepSolution": [
          "Step 1 (M1): Find the moles of water formed, n = C x V/1000 = 1.0 x 50/1000 = 0.050 mol, the two reactants supplying equal moles.",
          "Step 2 (M1): Find the mass of solution, 50 + 50 = 100 cm3 taken as 100 g = 0.100 kg.",
          "Step 3 (M1): Apply Q = m x c x delta T = 0.100 x 4200 x 6.8.",
          "Step 4 (M1): Evaluate the heat released, 0.100 x 4200 x 6.8 = 2856 J.",
          "Step 5 (M1): Divide by the moles of water, delta H = 2856 J / 0.050 mol = 57120 J/mol.",
          "Step 6 (A1): Convert to kJ/mol and add the negative sign for an exothermic change, delta H = -57.1 kJ/mol."
        ],
        "keyTakeaway": "Neutralisation of a strong acid by a strong base releases about 57 kJ per mole of water, so divide the measured heat by the moles of water and give delta H a negative sign."
      },
      {
        "id": "ex-che-thermochemistry-2",
        "title": "Formation Enthalpy of Carbon Monoxide by Hess's Law",
        "problem": "Given C(s) + O2(g) gives CO2(g) with delta H = -393.5 kJ/mol and CO(g) + 1/2 O2(g) gives CO2(g) with delta H = -283.0 kJ/mol, find delta H for C(s) + 1/2 O2(g) gives CO(g).",
        "stepByStepSolution": [
          "Step 1 (M1): The target reaction C plus 1/2 O2 giving CO can be built by taking the carbon-to-carbon-dioxide step and subtracting the carbon-monoxide-to-carbon-dioxide step.",
          "Step 2 (M1): Reverse the second given equation so CO2 becomes CO on the product side, flipping its delta H to +283.0 kJ/mol.",
          "Step 3 (M1): Add the two adjusted equations; the CO2 cancels and leaves C + 1/2 O2 giving CO.",
          "Step 4 (M1): Add the enthalpy changes, delta H = -393.5 + 283.0.",
          "Step 5 (A1): delta H = -110.5 kJ/mol for the formation of carbon monoxide."
        ],
        "keyTakeaway": "Hess's law lets an unmeasurable formation enthalpy be assembled from known combustion steps; reversing an equation flips the sign of its delta H."
      }
    ],
    "quiz": {
      "id": "quiz-che-thermochemistry",
      "topicId": "shs3-che-t1-thermochemistry-enthalpy-hess-law",
      "title": "Enthalpy, Bond Energy and Hess Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-thermochemistry-1",
          "quizId": "quiz-che-thermochemistry",
          "questionText": "For an exothermic reaction the enthalpy change delta H is",
          "optionA": "positive, because heat is stored",
          "optionB": "always zero",
          "optionC": "equal to +57 kJ/mol",
          "optionD": "negative, because heat is released to the surroundings",
          "correctOption": "D",
          "subConcept": "Sign convention",
          "explanation": "A reaction that warms its surroundings has given heat out, so the system loses enthalpy and delta H is negative. Positive values belong to endothermic changes, not exothermic ones.",
          "remediationTip": "Tie the sign to the thermometer: it rose, delta H negative; it fell, delta H positive."
        },
        {
          "id": "q-che-thermochemistry-2",
          "quizId": "quiz-che-thermochemistry",
          "questionText": "The standard enthalpy of combustion is the heat change when",
          "optionA": "one mole of a compound forms from its elements",
          "optionB": "one mole of a substance burns completely in oxygen",
          "optionC": "one mole of water forms from an acid and a base",
          "optionD": "one mole of a solute dissolves in water",
          "correctOption": "B",
          "subConcept": "Named enthalpy changes",
          "explanation": "Combustion is defined as one mole of a substance burning fully in oxygen. Forming a compound from its elements is formation, water from acid and base is neutralisation, and dissolving is solution.",
          "remediationTip": "Match each name to one phrase: burn means combustion, build means formation, mix acid and base means neutralisation."
        },
        {
          "id": "q-che-thermochemistry-3",
          "quizId": "quiz-che-thermochemistry",
          "questionText": "Converting a reaction enthalpy from bond energies uses the relation",
          "optionA": "bonds formed minus bonds broken",
          "optionB": "reactant mass minus product mass",
          "optionC": "bonds broken minus bonds formed",
          "optionD": "activation energy minus delta H",
          "correctOption": "C",
          "subConcept": "Bond-energy sum",
          "explanation": "Energy is absorbed to break bonds and released when new ones form, so delta H equals the total bonds broken minus the total bonds formed. Reversing that order flips the sign, and mass or activation energy play no part in the sum.",
          "remediationTip": "Remember break costs, make pays; delta H is the cost minus the payment."
        },
        {
          "id": "q-che-thermochemistry-4",
          "quizId": "quiz-che-thermochemistry",
          "questionText": "Hess's law is valid because enthalpy is a state function, meaning the total enthalpy change",
          "optionA": "is the same whichever route the reaction takes",
          "optionB": "depends on the catalyst used",
          "optionC": "grows with the time the reaction runs",
          "optionD": "equals the activation energy of the slowest step",
          "correctOption": "A",
          "subConcept": "Hess's law",
          "explanation": "A state function depends only on the start and finish, so the overall delta H is identical by one step or many. Catalysts, time and activation energy affect the rate but not the enthalpy change.",
          "remediationTip": "Picture the cycle: the two sides of the box always add to the same diagonal as the direct step."
        },
        {
          "id": "q-che-thermochemistry-5",
          "quizId": "quiz-che-thermochemistry",
          "questionText": "In a school calorimetry calculation the specific heat capacity of water is taken as",
          "optionA": "22.4 J per kg per degree C",
          "optionB": "6.02 J per kg per degree C",
          "optionC": "96500 J per kg per degree C",
          "optionD": "4200 J per kg per degree C",
          "correctOption": "D",
          "subConcept": "Calorimetry constant",
          "explanation": "The value used is 4200 J per kg per degree C. The other numbers are molar volume, Avogadro's count and the faraday, none of which is a specific heat capacity.",
          "remediationTip": "Keep c of water at 4200 J per kg per degree C and always enter mass in kilograms."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t2-volumetric-analysis-and-stoichiometry",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 2,
    "title": "Volumetric Analysis and Chemical Calculations",
    "description": "The acid-base titration apparatus and procedure, indicators and the end point, concordant titres and the mean titre, the mole relation moles = concentration times volume, converting between mol/dm3 and g/dm3, water of crystallisation in hydrated salts, and percentage purity and percentage yield.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Volumetric analysis (titrimetry) finds the concentration of a solution by reacting a measured volume of it with a measured volume of a standard solution of known concentration.\n• Apparatus: burette with stopcock (reads to 0.05 cm3 on a 50 cm3 burette), pipette with filler for the accurate fixed volume, conical flask, white tile, retort stand, and a beaker for rinsing and waste.\n• A standard solution has an accurately known concentration, made from a primary standard such as anhydrous sodium carbonate, weighed on an analytical balance and made up to volume in a graduated flask.\n• The acid is rinsed into the burette (rinse first with the acid), and the alkali is pipetted into the flask with a filler, never by mouth; add two or three drops of indicator.\n• Run to within about 2 cm3 of the end point, then rinse the wall with distilled water, and finish drop-wise while swirling until the colour change is seen.\n• Indicators: methyl orange turns from yellow in alkali to pink in acid at about pH 3 to 4; phenolphthalein is pink in alkali and colourless in acid at about pH 8 to 10; litmus is used less because its change is not sharp.\n• Record rough and accurate titres; a rough titre is only to show the near end point. Concordant titres agree within 0.10 cm3, and the mean titre is the average of the concordant ones, discarding the rough.\n• The core relation is moles = C x V/1000 when V is in cm3, or moles = C x V when V is in dm3; concentration C is in mol/dm3 (molarity).\n• Concentration in g/dm3 = molarity x molar mass, so a 0.0500 mol/dm3 solution of H2SO4 (molar mass 98) is 4.90 g/dm3.\n• The mole ratio is read only from the balanced equation, never from the volumes; for Na2CO3 + 2HCl the carbonate to acid ratio is 1 to 2.\n• Two-solution problems use moles A over moles B = (Ca Va) over (Cb Vb) with the equation ratio on the other side of the equals sign.\n• A hydrated salt carries water of crystallisation written with a dot, for example CuSO4.5H2O; heating drives off the water and the loss in mass gives x.\n• Percentage purity = mass of pure substance divided by mass of impure sample times 100; percentage yield = actual yield divided by theoretical yield times 100.\n• Safety: acids into water when diluting, wear eye protection, and note that a burette is a fragile glass tube clamped lightly and read at the bottom of the meniscus with the eye level.",
    "detailedNotes": {
      "overview": "Volumetric analysis is the precise measurement of how much of one solution reacts with another, and it turns a burette reading into a concentration through the mole relation and the ratio taken from a balanced equation. This topic covers the apparatus and its correct handling, the titration procedure and indicators, the discipline of concordant titres and the mean titre, and the calculations that follow: moles from concentration and volume, the conversion between molarity and grams per dm3, the mole ratio from the equation, the water of crystallisation in a hydrated salt, and the percentage purity and percentage yield of a real preparation. It is the most calculation-heavy part of the SHS chemistry course and a guaranteed feature of both the objective and structured papers, so neat method and correct units matter as much as the final figure.",
      "introduction": "Set up the burette, ring stand and conical flask and practise the physical skill before the arithmetic: rinsing with the solutions, filling without air bubbles at the jet, removing the funnel before reading, and reading the meniscus at eye level with a white tile beneath. Then perform a full titration with a known acid against an unknown alkali and hand in the raw table of rough and accurate titres with the initial and final burette readings shown, because the WAEC mark scheme reads the table as evidence of the method. Only after the practical feel is secure should you lean on moles = C x V/1000 and the equation ratio, and check your answer against a sensible concentration.",
      "realWorldContext": "Titration is not confined to the school laboratory at Ejisu or Abetifi. A water engineer testing the alkalinity of treated supply at a Ghana Water facility, a factory checking the strength of an acid used to pickle steel, and a soap maker at Nungua verifying how much free alkali is left after saponification all rely on the same burette logic. An agriculture technician titrates a fertiliser solution before advising a farmer near Tamale. Sachet-water plants check chlorine and pH against standards. The method is exactly the one you perform with a pipette and conical flask, which is why the practical paper trains the careful habits that these jobs depend on.",
      "objectives": [
        "Name and correctly use the apparatus for a titration, including the burette, pipette, conical flask and the reason for rinsing",
        "Carry out an acid-base titration, choose a suitable indicator, and record rough and concordant titres to find the mean volume",
        "Calculate the number of moles in a given volume of solution using moles = C x V/1000",
        "Convert concentration between mol/dm3 and g/dm3 using the molar mass",
        "Use the mole ratio from a balanced equation to find an unknown concentration in a two-solution titration",
        "Determine the value of x in a hydrated salt and calculate percentage purity and percentage yield"
      ],
      "sections": [
        {
          "title": "Apparatus, Rinsing and Handling",
          "content": "A titration needs the right glassware and the right handling. The burette, a long graduated tube with a stopcock at the base, delivers variable and precisely measured volumes and is normally read to the nearest 0.05 cm3 on a 50 cm3 instrument. The pipette, with a volumetric bulb and a single graduation mark, delivers one fixed accurate volume, generally 20 or 25 cm3, and must always be filled with a filler and never drawn up by mouth. The conical flask holds the reaction and its sloped walls allow swirling without splashing loss. A white tile under the flask makes the faint colour change of the indicator easy to see. Rinsing is part of accuracy: the burette is rinsed with the acid it will carry, the pipette with the solution it will measure, and the conical flask with distilled water only, because any residual solute in the flask would change the number of moles being measured. Clamp the burette lightly at the top, check there is no air bubble in the jet, remove the funnel before taking the first reading, and read the lower meniscus with the eye level with it.",
          "bulletPoints": [
            "Burette delivers variable precise volumes and is read to 0.05 cm3 on a 50 cm3 burette.",
            "Pipette delivers one fixed accurate volume; use a filler, never the mouth.",
            "Conical flask allows swirling without splashing; a white tile makes the end point visible.",
            "Rinse burette with acid, pipette with its solution, flask with distilled water only.",
            "Remove the funnel before reading, and take the reading at the bottom of the meniscus at eye level."
          ],
          "keyTakeaway": "Rinse each piece with the liquid it will carry, and read the burette at the bottom of the meniscus with your eye level with it.",
          "realWorldExample": "At a Ghana Water treatment works a technician runs an alkalinity titration in exactly this way, reading a burette against a white tile before deciding how much lime to dose into the storage tanks."
        },
        {
          "title": "The Titration Procedure, Indicators and the End Point",
          "content": "The standard solution of known concentration, usually the acid, is run from the burette into a measured volume of the other solution held in the conical flask with a few drops of indicator added. In the first rough titration the acid is added fairly quickly to locate the neighbourhood of the change; the reading is noted and discarded as a guide only. Accurate titrations then begin near that volume: the acid is run in to within about 2 cm3 of the expected end point, the flask wall is rinsed down with a little distilled water so no drop is left unreacted, and the last portion is added drop-wise with constant swirling until a single drop produces the permanent colour change, the end point. The indicator is chosen to change within the steep part of the pH curve: methyl orange, yellow in alkali to pink in acid over about pH 3 to 4, suits a strong acid against a weak base, while phenolphthalein, pink in alkali to colourless in acid over about pH 8 to 10, suits a strong base against a strong acid or weak acid. The end point is taken as the equivalence point where the reacting amounts are exactly stoichiometric.",
          "bulletPoints": [
            "Run a rough titration first to find where the colour change occurs, then discard it.",
            "In accurate titrations add quickly to within 2 cm3 of the end point, then drop-wise with swirling.",
            "Rinse the flask wall with distilled water near the end so no unreacted drop remains.",
            "Methyl orange suits strong acid against weak base; phenolphthalein suits a strong base titration.",
            "Titres should be concordant, agreeing within 0.10 cm3, and the mean titre is their average."
          ],
          "keyTakeaway": "Add rapidly to within 2 cm3 of the end point, then one drop at a time, and average only the concordant titres.",
          "realWorldExample": "The endpoint colour flip a student watches over a white tile is the same signal a Nungua soap factory uses when titrating to find leftover free alkali before the bars are wrapped."
        },
        {
          "title": "Moles, Concentration and the Equation Ratio",
          "content": "All titration calculations rest on one relation: the number of moles of solute equals the concentration in mol/dm3 multiplied by the volume in dm3. Because volumes are measured in cm3, this is normally used as moles = C x V/1000. For a two-solution titration you find the moles of the substance of known concentration from its titre, then read off the moles of the unknown from the mole ratio taken straight from the balanced equation, and finally divide by the volume of the unknown that was pipetted. A typical reaction of sodium carbonate with hydrochloric acid, Na2CO3 + 2HCl giving 2NaCl + H2O + CO2, shows why the equation is indispensable: the carbonate to acid ratio is 1 to 2, so moles of carbonate equal half the moles of acid, and a student who ignores the equation will be wrong by a factor of two. Concentration can be expressed in molarity or in grams per dm3; the two are linked by the molar mass, since g/dm3 = mol/dm3 multiplied by molar mass, so a 0.0500 mol/dm3 solution of sulphuric acid, molar mass 98, has a concentration of 4.90 g/dm3.",
          "bulletPoints": [
            "Moles of solute = C x V/1000 when V is in cm3, or C x V when V is in dm3.",
            "The mole ratio comes only from the balanced equation, never from the measured volumes.",
            "For a 1 to 2 ratio, moles of the single-coefficient substance are half the moles of the other.",
            "g/dm3 = molarity x molar mass; divide by molar mass to go back to mol/dm3.",
            "Report the concentration to three significant figures and always give the unit."
          ],
          "keyTakeaway": "Work from moles on both sides, linked by the equation ratio; never let the volume ratio masquerade as the mole ratio.",
          "realWorldExample": "A fertiliser technician near Tamale titrates a stock solution and must halve the acid moles for a carbonate reaction, exactly as the 1 to 2 sodium carbonate and hydrochloric acid equation demands."
        },
        {
          "title": "Hydrated Salts and Water of Crystallisation",
          "content": "Many crystalline salts hold water molecules fixed inside their crystal lattice, written as a dot followed by a number, for example CuSO4.xH2O for copper(II) sulphate. This water of crystallisation can be driven off by heating, and the mass lost gives the value of x. Weigh the hydrated crystals, heat them strongly in a crucible until the colour is constant, cool in a desiccator, and weigh again; the drop in mass is the water lost, the remaining mass is the anhydrous salt. Convert each to moles by dividing by its formula mass, then take the ratio of water moles to anhydrous-salt moles to find x. For copper(II) sulphate, taking Cu as 64, the anhydrous salt CuSO4 has formula mass 160 and water 18; heating 6.25 g of the blue crystals leaves 4.00 g of white anhydrous powder, so 2.25 g of water was lost, which is 0.125 mol of water against 0.025 mol of CuSO4, a ratio of 5 to 1, giving the formula CuSO4.5H2O. A related calculation is percentage purity, where the mass of active substance found by titration is divided by the mass of the impure sample taken.",
          "bulletPoints": [
            "Water of crystallisation is written as a dot before the number, for example CuSO4.5H2O.",
            "Heat the crystals, cool in a desiccator, and reweigh; the mass lost is the water driven off.",
            "Convert anhydrous-salt mass and water mass to moles, then divide to find the ratio x.",
            "Percentage purity = mass of pure substance divided by mass of impure sample, times 100.",
            "Reheat to constant mass so no water is left and the ratio is not biased low."
          ],
          "keyTakeaway": "Find x by weighing the water lost, converting both the salt and the water to moles, and taking their ratio.",
          "realWorldExample": "Blue copper(II) sulphate crystals, CuSO4.5H2O, used in the school laboratory for electroplating demonstrations turn white on heating as the five waters leave the lattice."
        },
        {
          "title": "Percentage Yield and Careful Reporting",
          "content": "In a real preparation the mass of product actually obtained, the actual or experimental yield, is nearly always less than the maximum predicted from the equation, the theoretical yield, because reactions are incomplete, some product clings to the glassware, side reactions occur, or material is lost during filtering and transfer. Percentage yield measures the efficiency of the preparation and equals the actual yield divided by the theoretical yield, multiplied by 100. To use it, convert the starting mass of the limiting reactant to moles, read the product moles from the equation ratio, and turn that back into a mass to get the theoretical yield. For example, if 5.30 g of anhydrous sodium carbonate, molar mass 106, is 0.0500 mol, and it reacts with excess acid to release carbon dioxide on a 1 to 1 mole basis, the theoretical mass of CO2 (molar mass 44) is 0.0500 x 44 = 2.20 g; if only 1.98 g is collected, the percentage yield is 1.98 divided by 2.20, times 100, or 90.0 per cent. Throughout, record burette readings with two decimal places and keep units and significant figures consistent, because method marks are awarded for the setup even when the final figure is slightly off.",
          "bulletPoints": [
            "Theoretical yield comes from the equation; actual yield comes from the balance.",
            "Percentage yield = actual yield divided by theoretical yield, times 100.",
            "Yields below 100 per cent are normal because of incomplete reaction, transfer loss and side reactions.",
            "Find the limiting reactant first, then follow moles through the equation ratio to the product.",
            "Show every step and unit; a correct method earns marks even if the last figure is a little off."
          ],
          "keyTakeaway": "Percentage yield compares what you actually made with the maximum the equation allowed, expressed as a percentage.",
          "realWorldExample": "A student preparing aspirin in the school laboratory, or a small factory line casting bars, records the mass obtained against the mass the equation predicted, which is the industrial percentage-yield idea in one line."
        }
      ],
      "commonMistakes": [
        "Taking the mole ratio from the measured volumes instead of from the balanced equation, so a 1 to 2 carbonate-and-acid reaction is treated as 1 to 1 and the answer is wrong by a factor of two.",
        "Averaging the rough titre with the accurate titres; the rough is only a guide and must be discarded before the mean titre is calculated.",
        "Rinsing the conical flask with the solution instead of distilled water, which adds extra moles and inflates the titre.",
        "Omitting the /1000 when using moles = C x V with V in cm3, giving a molar amount a thousand times too large.",
        "Reporting the final concentration without a unit or with inconsistent decimal places, so a correct figure such as 0.0600 mol/dm3 loses the accuracy mark."
      ],
      "wassceExamTips": [
        "Paper 3 almost always sets a titration: tabulate initial and final burette readings, show each titre, and circle the concordant titres before averaging them.",
        "On Paper 2 write the balanced equation as the first line of the calculation so the marker sees the 1 to 2 or 1 to 1 ratio you are about to use; quoting a ratio without the equation loses a method mark.",
        "Use moles = C x V/1000 with V in cm3, carry the full working, and round the final concentration to three significant figures with the unit mol/dm3.",
        "For hydrated-salt and purity parts, convert every mass to moles by its formula mass before forming ratios, and give percentage answers to the nearest 0.1 per cent.",
        "Carry-through error is usually forgiven: if an early mistake propagates but the later method is correct, method marks still follow, so show all steps and never blank on a wrong line."
      ],
      "summaryChecklist": [
        "Can I name the burette, pipette, conical flask and tile and state how each is rinsed before a titration?",
        "Can I run a titration with a suitable indicator and identify the end point and the concordant titres?",
        "Can I calculate moles from concentration and volume using moles = C x V/1000?",
        "Can I find an unknown concentration by using the mole ratio from the balanced equation?",
        "Can I determine the value of x in a hydrated salt and calculate percentage purity and percentage yield?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-volumetric-1",
        "title": "Finding the Concentration of Sodium Carbonate by Titration",
        "problem": "25.0 cm3 of a solution of sodium carbonate required 20.0 cm3 of 0.150 mol/dm3 hydrochloric acid to reach the methyl orange end point. For the reaction Na2CO3 + 2HCl giving 2NaCl + H2O + CO2, calculate the concentration of the sodium carbonate solution in mol/dm3 and in g/dm3 (Na2CO3 = 106).",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and read off the mole ratio, Na2CO3 to HCl = 1 to 2.",
          "Step 2 (M1): Find the moles of hydrochloric acid used, n = C x V/1000 = 0.150 x 20.0/1000 = 0.00300 mol.",
          "Step 3 (M1): Apply the 1 to 2 ratio, so moles of Na2CO3 = moles of HCl divided by 2 = 0.00300 / 2 = 0.00150 mol.",
          "Step 4 (M1): Divide by the volume of carbonate that was pipetted, converting 25.0 cm3 to 0.0250 dm3, so C = 0.00150 / 0.0250.",
          "Step 5 (A1): Concentration of Na2CO3 = 0.0600 mol/dm3.",
          "Step 6 (M1): Convert to grams per dm3 by multiplying by the molar mass, 0.0600 x 106.",
          "Step 7 (A1): Concentration = 6.36 g/dm3."
        ],
        "keyTakeaway": "The equation ratio of 1 to 2 halves the acid moles to give the carbonate moles; forgetting it doubles the answer."
      },
      {
        "id": "ex-che-volumetric-2",
        "title": "Finding Water of Crystallisation in Hydrated Copper(II) Sulphate",
        "problem": "On strong heating, 6.25 g of hydrated copper(II) sulphate, CuSO4.xH2O, left 4.00 g of anhydrous copper(II) sulphate. Using Cu = 64, S = 32, O = 16 and H = 1, find the value of x and hence the formula, and state the percentage by mass of water of crystallisation.",
        "stepByStepSolution": [
          "Step 1 (M1): Find the mass of water lost, 6.25 g minus 4.00 g = 2.25 g.",
          "Step 2 (M1): Find the formula mass of anhydrous CuSO4 = 64 + 32 + (16 x 4) = 160, and of water H2O = 18.",
          "Step 3 (M1): Convert the anhydrous salt to moles, 4.00 / 160 = 0.0250 mol.",
          "Step 4 (M1): Convert the water to moles, 2.25 / 18 = 0.125 mol.",
          "Step 5 (M1): Divide water moles by salt moles to get the ratio, 0.125 / 0.0250 = 5.",
          "Step 6 (A1): Therefore x = 5 and the formula is CuSO4.5H2O.",
          "Step 7 (M1): Percentage of water = mass of water / mass of hydrate x 100 = 2.25 / 6.25 x 100 = 36.0 per cent (A1)."
        ],
        "keyTakeaway": "Water of crystallisation is found by turning both the mass of salt and the mass of water lost into moles and taking their ratio."
      }
    ],
    "quiz": {
      "id": "quiz-che-volumetric",
      "topicId": "shs3-che-t2-volumetric-analysis-and-stoichiometry",
      "title": "Volumetric Analysis and Stoichiometry Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-volumetric-1",
          "quizId": "quiz-che-volumetric",
          "questionText": "What is the concentration in g/dm3 of a 0.0500 mol/dm3 solution of sulphuric acid, H2SO4? (H = 1, S = 32, O = 16.)",
          "optionA": "0.49 g/dm3",
          "optionB": "4.90 g/dm3",
          "optionC": "9.80 g/dm3",
          "optionD": "49.0 g/dm3",
          "correctOption": "B",
          "subConcept": "Concentration conversions",
          "explanation": "g/dm3 = molarity x molar mass = 0.0500 x 98 = 4.90 g/dm3. The 0.49 answer drops a factor of ten, 9.80 wrongly doubles it, and 49.0 uses the molar mass as if it were the concentration.",
          "remediationTip": "Remember the two-step conversion: mol/dm3 to g/dm3 by multiplying by molar mass, then back by dividing."
        },
        {
          "id": "q-che-volumetric-2",
          "quizId": "quiz-che-volumetric",
          "questionText": "In an acid-base titration, which pair of titres is concordant, meaning they may be averaged for the mean titre?",
          "optionA": "25.0 cm3 and 20.0 cm3",
          "optionB": "22.5 cm3 and 23.5 cm3",
          "optionC": "24.10 cm3 and 24.50 cm3",
          "optionD": "20.00 cm3 and 20.10 cm3",
          "correctOption": "D",
          "subConcept": "Concordant titres",
          "explanation": "Concordant titres agree within 0.10 cm3, so 20.00 and 20.10 differ by exactly 0.10 cm3 and are concordant. 25.0 against 20.0 and 22.5 against 23.5 differ by 5.0 and 1.0 cm3, and 24.10 against 24.50 differ by 0.40 cm3, all too far apart to average.",
          "remediationTip": "The rule is agreement within 0.10 cm3; check that bound before you average, and always discard the rough titre."
        },
        {
          "id": "q-che-volumetric-3",
          "quizId": "quiz-che-volumetric",
          "questionText": "Sodium carbonate reacts with hydrochloric acid according to Na2CO3 + 2HCl giving 2NaCl + H2O + CO2. If 0.0040 mol of hydrochloric acid reacted completely, how many moles of sodium carbonate were present?",
          "optionA": "0.0010 mol",
          "optionB": "0.0020 mol",
          "optionC": "0.0040 mol",
          "optionD": "0.0080 mol",
          "correctOption": "B",
          "subConcept": "Mole ratio from equation",
          "explanation": "The equation ratio Na2CO3 to HCl is 1 to 2, so moles of sodium carbonate = 0.0040 / 2 = 0.0020 mol. Answering 0.0040 mol ignores the ratio and treats it as 1 to 1, while 0.0080 mol multiplies where it should divide.",
          "remediationTip": "Write the equation and put the ratio beside your working; the acid has the coefficient 2, so the carbonate moles are half the acid moles."
        },
        {
          "id": "q-che-volumetric-4",
          "quizId": "quiz-che-volumetric",
          "questionText": "A 1.60 g sample of impure sodium hydroxide was dissolved and made up to 250 cm3. A 25.0 cm3 portion of this solution required 30.0 cm3 of 0.100 mol/dm3 hydrochloric acid for complete neutralisation (NaOH + HCl giving NaCl + H2O). What is the percentage purity of the sample? (NaOH = 40.)",
          "optionA": "75.0%",
          "optionB": "37.5%",
          "optionC": "50.0%",
          "optionD": "15.0%",
          "correctOption": "A",
          "subConcept": "Percentage purity",
          "explanation": "Moles HCl in the 30.0 cm3 titre = 0.100 x 30.0/1000 = 0.00300 mol, equal to the NaOH in the 25.0 cm3 portion (1 to 1). Scaling to the full 250 cm3 gives 0.0300 mol NaOH, mass 0.0300 x 40 = 1.20 g. Purity = 1.20/1.60 x 100 = 75.0 per cent. Forgetting the 25 to 250 dilution gives 37.5 per cent, exactly half the correct value.",
          "remediationTip": "When only an aliquot is titrated, multiply the moles found by (total volume / aliquot volume) before computing the mass."
        },
        {
          "id": "q-che-volumetric-5",
          "quizId": "quiz-che-volumetric",
          "questionText": "Which piece of apparatus delivers a single fixed, accurately known volume of solution into the conical flask?",
          "optionA": "A burette",
          "optionB": "A measuring cylinder",
          "optionC": "A pipette used with a filler",
          "optionD": "A beaker",
          "correctOption": "C",
          "subConcept": "Apparatus",
          "explanation": "The pipette delivers one fixed precise volume, usually 20 or 25 cm3, drawn up with a filler. A burette delivers variable measured volumes, and a measuring cylinder or beaker is too rough to define an exact volume for the calculation.",
          "remediationTip": "Pair each glassware name with its job: burette for the variable standard solution, pipette for the fixed unknown volume."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t2-organic-chemistry-i",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 3,
    "title": "Organic Chemistry I: Alkanes, Alkenes and Alkynes",
    "description": "Homologous series and general formulae, naming and drawing structural formulae of the first members, saturated against unsaturated hydrocarbons and the test for unsaturation, combustion, substitution in alkanes and addition in alkenes and alkynes, and the preparation and uses of ethanol and fermentation in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Organic chemistry is the chemistry of carbon compounds; carbon makes four bonds, which is why the family of organic molecules is so large.\n• A homologous series is a family with the same general formula, the same functional group, similar chemical properties and a gradual change in physical properties, each member differing from the next by a CH2 unit.\n• Alkanes are saturated hydrocarbons of general formula CnH2n+2: methane CH4, ethane C2H6, propane C3H8, butane C4H10.\n• Alkenes are unsaturated with one carbon-to-carbon double bond, CnH2n: ethene C2H4, propene C3H6, butene C4H8.\n• Alkynes have one triple bond, CnH2n-2: ethyne C2H2, propyne C3H4.\n• Naming uses prefixes meth- 1, eth- 2, prop- 3, but- 4, pent- 5, hex- 6; the suffix -ane marks an alkane, -ene an alkene, -yne an alkyne.\n• Structural formulae show every atom and bond; displayed formulae such as CH3CH2OH or CH3COOC2H5 make the grouping plain and are the safest way to earn the mark.\n• Saturated means only single carbon-to-carbon bonds, as in alkanes; unsaturated means a double or triple bond, as in alkenes and alkynes.\n• Test for unsaturation: add a few drops of bromine water or bromine in tetrachloromethane and shake; an alkene turns the orange-brown bromine colourless, an alkane does not.\n• Alkanes burn in excess air: methane CH4 + 2O2 gives CO2 + 2H2O, giving a clean blue flame; a limited air supply gives poisonous carbon monoxide or a smoky flame.\n• Alkanes are unreactive because C-C and C-H bonds are strong; they undergo substitution with halogens in ultraviolet light, as in methane plus chlorine giving chloromethane plus hydrogen chloride.\n• Alkenes undergo addition across the double bond: hydrogenation with a nickel catalyst, addition of halogens, addition of hydrogen halides, and hydration with steam over a phosphoric-acid catalyst to make alcohols.\n• Ethene plus bromine gives 1,2-dibromoethane in a single addition step, which is the reaction behind the bromine test.\n• Ethanol is made by fermenting sugar from cane or cassava using yeast enzymes at about 30 to 40 degrees C in anaerobic conditions, C6H12O6 giving 2C2H5OH + 2CO2, or industrially by hydrating ethene.\n• Fermentation stops near 12 to 15 per cent alcohol because the alcohol poisons the yeast; higher strengths need distillation.\n• Uses in Ghana: palm wine and akpetie from fermentation, ethanol blended into petrol, LPG and butane for cooking, and ethene from cracked petroleum for polythene bags.",
    "detailedNotes": {
      "overview": "This topic opens the carbon chemistry of the SHS course by arranging it into families. You learn the idea of a homologous series, how the first members of the alkanes, alkenes and alkynes are named and drawn, and the difference between saturated and unsaturated carbon chains. From there the reactions sort themselves neatly: saturated alkanes are lazy and react mainly by substitution with halogens in light and by combustion, while unsaturated alkenes and alkynes are busy because the double and triple bonds open to addition reactions, which is also the basis of the bromine test for unsaturation. The chemistry of ethanol and fermentation closes the topic, tying it to Ghanaian drinks, fuels and the polythene made from cracked petroleum.",
      "introduction": "Organic chemistry is learned by drawing, so keep a page of displayed and structural formulae for methane through butane, for the three ethene isomers of butene, and for ethyne, adding the names as you draw. Practise naming short chains given to you and drawing chains from their names, because Paper 1 tests exactly this. Then run the bromine test on hexane and on a sample of vegetable oil in the laboratory, and write the observation as a colour change you actually saw, so the words saturated and unsaturated attach to a real result rather than a definition.",
      "realWorldContext": "Ghana runs on organic chemistry every day. The palm wine tapped in the western and central regions, and the fermented corn drink agushie or akpetie sold in the north, are products of yeast fermentation, the same conversion of sugar to ethanol and carbon dioxide you write as C6H12O6 giving 2C2H5OH + 2CO2. Petroleum, cracked into fractions, gives the LPG and butane that heat cookpots and the polythene used for sachet-water bags and market carryalls. Ethanol blended into petrol at service stations in Accra and Kumasi is fermented from sugar cane or cassava. The methane in a biogas digester built to cook at a rural school comes from the anaerobic decay of organic waste, a simpler alkane reaction.",
      "objectives": [
        "Define a homologous series and list the features its members share",
        "Name and draw displayed and structural formulae of the first members of the alkanes, alkenes and alkynes",
        "Distinguish saturated from unsaturated hydrocarbons and carry out and interpret the bromine test for unsaturation",
        "Write balanced equations for the complete and incomplete combustion of alkanes",
        "Explain substitution in alkanes and addition in alkenes and alkynes with named examples",
        "Describe the preparation of ethanol by fermentation and hydration and state its uses"
      ],
      "sections": [
        {
          "title": "Homologous Series, Naming and Structure",
          "content": "A homologous series is a family of organic compounds that share one general formula and one functional group, react in similar ways, and show a smooth change in physical properties such as boiling point as the chain lengthens. The unit that separates one member from the next is a CH2 group, which is why the general formulae rise in a regular pattern: CnH2n+2 for alkanes, CnH2n for alkenes and CnH2n-2 for alkynes. Naming uses a stem that states the number of carbons, meth- for 1, eth- for 2, prop- for 3, but- for 4, and a suffix that states the family, -ane, -ene or -yne. Structure is shown three ways: the molecular formula such as C2H6, the displayed formula drawn out bond by bond, and the condensed structural formula such as CH3CH3 or CH3CH2OH that keeps the grouping visible. Because carbon always forms four bonds, an alkane chain may also branch, and the ability to form rings and long chains is the root reason that organic chemistry has millions of compounds.",
          "bulletPoints": [
            "A homologous series shares a general formula, a functional group and similar chemistry.",
            "Successive members differ by one CH2 unit, which drives the gradual rise in boiling point.",
            "Stems count carbons, meth- 1, eth- 2, prop- 3, but- 4; suffixes -ane, -ene, -yne name the family.",
            "Carbon forms four bonds, so chains can branch and close into rings.",
            "Draw structural formulae like CH3CH2OH rather than only molecular formulae to show the arrangement."
          ],
          "keyTakeaway": "Learn the stem, the suffix and the CH2 step, and any member of a series becomes nameable and drawable.",
          "realWorldExample": "Cooking-gas canisters sold in Ghana hold propane and butane, the C3 and C4 members of the alkane series, liquefied under pressure so they can be stored and burned in a stove."
        },
        {
          "title": "Alkanes: Saturated, Substitution and Combustion",
          "content": "Alkanes are saturated hydrocarbons, containing only single carbon-to-carbon and carbon-to-hydrogen bonds, and those strong non-polar bonds make them comparatively unreactive. Their two important reactions are combustion and substitution. In plenty of air an alkane burns cleanly to carbon dioxide and water, releasing heat; methane burns as CH4 + 2O2 giving CO2 + 2H2O with a pale blue flame. Where the air is short the same fuel gives off carbon monoxide, a poisonous gas, or a smoky flame of unburnt carbon, which is why a stove must never be left burning in an unventilated room. With halogens, alkanes undergo substitution in daylight or ultraviolet light: a hydrogen on the chain is replaced by a halogen, as in methane plus chlorine giving chloromethane plus hydrogen chloride, and the process can continue until all four hydrogens are replaced. Substitution keeps the carbon skeleton saturated; it simply swaps one atom for another.",
          "bulletPoints": [
            "Alkanes are saturated, only single bonds, and are relatively unreactive.",
            "Complete combustion in excess air gives carbon dioxide and water and releases heat.",
            "Incomplete combustion in a limited air supply gives poisonous carbon monoxide or smoky carbon.",
            "Substitution with chlorine or bromine happens in ultraviolet light, swapping H for a halogen.",
            "Substitution does not break the carbon-to-carbon framework; it changes a hydrogen into another atom."
          ],
          "keyTakeaway": "Alkanes are saturated, so they react mainly by burning in oxygen and by light-driven substitution with halogens.",
          "realWorldExample": "A paraffin lamp or a generator exhaust that burns thick smoke is running on alkanes with incomplete combustion, releasing carbon monoxide and soot that the health officer warns against in a closed room."
        },
        {
          "title": "Alkenes and Alkynes: Unsaturation and Addition",
          "content": "Alkenes carry one carbon-to-carbon double bond and alkynes one triple bond, so they are unsaturated: each molecule holds fewer hydrogen atoms than the matching alkane because those bonds use up valencies that would otherwise be filled by hydrogen. The double or triple bond is the reactive centre, and the characteristic reaction is addition, in which the multiple bond partly opens and new atoms attach to the carbons that held it, giving a single-bonded product. Hydrogen adds across the double bond of ethene in the presence of a nickel catalyst to form ethane; bromine adds to give 1,2-dibromoethane; hydrogen chloride adds to give chloroethane; and steam adds in the presence of a phosphoric-acid catalyst to give ethanol. This reactivity is the basis of the test for unsaturation: a few drops of bromine water shaken with an alkene lose their orange-brown colour as the bromine is added on, whereas an alkane leaves the colour unchanged because no addition can occur without light. Alkynes such as ethyne undergo the same additions and burn with a very hot, luminous flame.",
          "bulletPoints": [
            "Unsaturated means a double or triple bond and therefore fewer hydrogens than the alkane.",
            "Addition partly opens the multiple bond and attaches new atoms, giving a saturated product.",
            "Ethene plus bromine gives 1,2-dibromoethane; ethene plus hydrogen with nickel gives ethane.",
            "Bromine water is decolourised by an alkene but not by an alkane, the test for unsaturation.",
            "Ethyne burns with a hot luminous flame and is the alkyne used where high heat is wanted."
          ],
          "keyTakeaway": "The double or triple bond is the whole story: it is what addition attacks and what the bromine test detects.",
          "realWorldExample": "Polythene bags in the Ghanaian market are made by addition polymerisation of ethene, the same double bond that lets the monomer lock into a long chain."
        },
        {
          "title": "Ethanol, Fermentation and Uses",
          "content": "Ethanol, C2H5OH, belongs to the alcohols, whose functional group is the hydroxyl group -OH bonded to a carbon. Two routes to ethanol matter at this level. The first is fermentation: yeast supplies the enzymes zymase and invertase that convert dissolved sugar into ethanol and carbon dioxide in warm, oxygen-free conditions, written C6H12O6 giving 2C2H5OH + 2CO2, at about 30 to 40 degrees C. Because the alcohol produced eventually poisons the yeast, fermentation of a cane or cassava mash stops naturally near 12 to 15 per cent ethanol, and stronger drinks require distillation to concentrate it. The second route is industrial, the catalytic hydration of ethene with steam over phosphoric acid, which yields pure ethanol on a large scale. Ethanol is used as a solvent, as an antiseptic, as a fuel blended into petrol, and as the starting material for making ethanoic acid and esters. In Ghana it appears in palm wine and in the fermented maize drink sold across the north, and blended ethanol fuels vehicles in the south.",
          "bulletPoints": [
            "The alcohol functional group is the hydroxyl group -OH attached to a carbon chain.",
            "Fermentation uses yeast enzymes on sugar, warm and anaerobic, giving ethanol and carbon dioxide.",
            "Yeast is poisoned near 12 to 15 per cent ethanol, so distillation is needed for higher strength.",
            "Hydration of ethene with steam over phosphoric acid makes ethanol industrially.",
            "Ethanol is a solvent, an antiseptic, a petrol blend and the raw material for ethanoic acid and esters."
          ],
          "keyTakeaway": "Fermentation turns sugar into ethanol and carbon dioxide with yeast, but it self-limits near 15 per cent alcohol.",
          "realWorldExample": "A palm-wine tapster in the Western Region relies on natural fermentation of the sugary sap, the same C6H12O6 to 2C2H5OH plus 2CO2 conversion that the syllabus writes out."
        }
      ],
      "commonMistakes": [
        "Confusing molecular, structural and displayed formulae, then drawing carbon and hydrogen atoms in the wrong arrangement and losing the structural mark.",
        "Naming the wrong family because the suffix is ignored, calling ethene an alkane or writing an alkane formula for an alkene.",
        "Reporting the bromine test as a colourless precipitate forming, when the true observation is simply that the orange-brown colour of bromine disappears.",
        "Balancing combustion wrongly, for example writing CH4 + O2 giving CO2 + 2H2O, and forgetting that methane needs two molecules of oxygen.",
        "Confusing substitution with addition, or leaving out the ultraviolet light needed for alkane halogenation and the catalyst needed for hydrogenation of an alkene."
      ],
      "wassceExamTips": [
        "On Paper 1, sketch displayed formulae showing all four bonds of carbon when a question asks for structure; a correct drawing earns the mark a lone molecular formula may not.",
        "For the unsaturation test write the observation as a colour change, bromine water decolourised, and name the reagent and condition exactly.",
        "On Paper 2 balance every combustion equation and show the oxygen molecules on the left, because unbalanced symbol equations forfeit method marks.",
        "Distinguish reaction types by name and condition: addition needs no light, substitution needs ultraviolet light, hydrogenation needs a nickel catalyst.",
        "For fermentation state the three conditions, warm temperature, absence of air and the enzyme from yeast, and give the balanced equation with ethanol and carbon dioxide as products."
      ],
      "summaryChecklist": [
        "Can I define a homologous series and state the general formulae of alkanes, alkenes and alkynes?",
        "Can I name and draw the first four members of each series using structural formulae?",
        "Can I tell saturated from unsaturated compounds and carry out the bromine test and state its observation?",
        "Can I write balanced equations for the complete combustion of methane and for substitution and addition reactions?",
        "Can I describe the fermentation and the industrial hydration routes to ethanol and name two Ghanaian uses?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-organic1-1",
        "title": "Volume of Oxygen Needed to Burn Ethene",
        "problem": "Ethene burns completely in oxygen according to C2H4 + 3O2 giving 2CO2 + 2H2O. What volume of oxygen is required to burn 10 cm3 of ethene completely, and what total volume of gaseous products is formed? All volumes are measured at the same temperature and pressure.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and read the mole (volume) ratios, C2H4 : O2 : CO2 : H2O = 1 : 3 : 2 : 2.",
          "Step 2 (M1): Apply Avogadro's law, equal volumes of gases at the same conditions hold equal numbers of molecules, so the mole ratio equals the volume ratio.",
          "Step 3 (M1): Find the volume of oxygen, 10 cm3 ethene x 3 = 30 cm3 of O2.",
          "Step 4 (M1): Find the volume of carbon dioxide, 10 cm3 x 2 = 20 cm3 of CO2.",
          "Step 5 (M1): Find the volume of steam (water vapour), 10 cm3 x 2 = 20 cm3 of H2O.",
          "Step 6 (A1): Oxygen needed = 30 cm3.",
          "Step 7 (A1): Total gaseous product volume, as CO2 and steam, = 20 + 20 = 40 cm3."
        ],
        "keyTakeaway": "At the same conditions gas volumes follow the equation coefficients directly, so a 1 : 3 : 2 : 2 mole ratio is also a volume ratio."
      },
      {
        "id": "ex-che-organic1-2",
        "title": "Ethanol from Fermentation",
        "problem": "During fermentation, glucose is converted to ethanol and carbon dioxide according to C6H12O6 giving 2C2H5OH + 2CO2. If 2.0 mol of glucose is completely fermented, how many moles of ethanol are produced, and what mass of ethanol is that? (Ethanol C2H5OH = 46.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and read the mole ratio glucose to ethanol = 1 to 2.",
          "Step 2 (M1): Scale the ratio, moles of ethanol = 2.0 mol glucose x 2 = 4.0 mol.",
          "Step 3 (M1): Recall mass = moles x molar mass, with the molar mass of ethanol taken as 46 g/mol.",
          "Step 4 (A1): Mass of ethanol = 4.0 mol x 46 = 184 g.",
          "Step 5 (A1): The fermentation of 2.0 mol of glucose gives 4.0 mol, or 184 g, of ethanol."
        ],
        "keyTakeaway": "The 1 to 2 ratio from the fermentation equation doubles the glucose moles to give the ethanol moles; read the ratio only from the balanced equation."
      }
    ],
    "quiz": {
      "id": "quiz-che-organic1",
      "topicId": "shs3-che-t2-organic-chemistry-i",
      "title": "Alkanes, Alkenes and Alkynes Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-organic1-1",
          "quizId": "quiz-che-organic1",
          "questionText": "What is the general formula of the alkanes, the saturated hydrocarbons?",
          "optionA": "CnH2n",
          "optionB": "CnH2n+2",
          "optionC": "CnH2n-2",
          "optionD": "CnH2n+6",
          "correctOption": "B",
          "subConcept": "Homologous series",
          "explanation": "Alkanes are saturated and have the general formula CnH2n+2. CnH2n is the formula of the alkenes and CnH2n-2 that of the alkynes; each series has a different hydrogen count because of the double or triple bond.",
          "remediationTip": "Link saturation to the most hydrogen: the fully single-bonded series is the only one with +2 on the formula."
        },
        {
          "id": "q-che-organic1-2",
          "quizId": "quiz-che-organic1",
          "questionText": "A student adds a few drops of bromine water to two samples, hexane and vegetable oil, and shakes. Which observation is correct?",
          "optionA": "Both samples keep the orange-brown colour of bromine",
          "optionB": "The bromine colour disappears in hexane but not in the oil",
          "optionC": "Both samples turn the bromine to a white precipitate",
          "optionD": "The bromine colour disappears in the oil, which is unsaturated, but stays orange-brown in hexane, a saturated alkane",
          "correctOption": "D",
          "subConcept": "Test for unsaturation",
          "explanation": "Bromine adds across a carbon-to-carbon double bond, so an unsaturated oil decolourises bromine water, while a saturated alkane such as hexane cannot add bromine without light and leaves the colour unchanged. The test is a colour change, not a white precipitate, and the oil reacts while hexane does not.",
          "remediationTip": "Remember the observation as the disappearance of the orange-brown colour, and connect it to the double bond."
        },
        {
          "id": "q-che-organic1-3",
          "quizId": "quiz-che-organic1",
          "questionText": "Ethene reacts with hydrogen to form ethane. This reaction, which needs a nickel catalyst, is",
          "optionA": "a substitution reaction",
          "optionB": "an addition reaction",
          "optionC": "a combustion reaction",
          "optionD": "a fermentation reaction",
          "correctOption": "B",
          "subConcept": "Addition reactions",
          "explanation": "Hydrogen adds across the double bond of ethene to give the saturated alkane ethane, so it is an addition reaction, often called hydrogenation. Substitution replaces an atom and needs ultraviolet light, combustion uses oxygen, and fermentation is the yeast route to ethanol.",
          "remediationTip": "Ask which way the saturation moves: alkene gaining atoms to become alkane is addition, not substitution."
        },
        {
          "id": "q-che-organic1-4",
          "quizId": "quiz-che-organic1",
          "questionText": "What volume of oxygen is needed to burn 10 cm3 of ethene completely, given C2H4 + 3O2 giving 2CO2 + 2H2O at the same temperature and pressure?",
          "optionA": "10 cm3",
          "optionB": "20 cm3",
          "optionC": "30 cm3",
          "optionD": "3 cm3",
          "correctOption": "C",
          "subConcept": "Combustion stoichiometry",
          "explanation": "Gas volumes at the same conditions follow the equation coefficients, and the ethene to oxygen ratio is 1 to 3, so 10 cm3 of ethene needs 30 cm3 of oxygen. Taking the coefficient 3 cm3 alone or treating the ratio as 1 to 1 gives the wrong answer.",
          "remediationTip": "Read the ratio from the balanced equation and multiply the ethene volume by 3; equal volumes of gases mean the volume ratio equals the mole ratio."
        },
        {
          "id": "q-che-organic1-5",
          "quizId": "quiz-che-organic1",
          "questionText": "In the fermentation of glucose, C6H12O6 giving 2C2H5OH + 2CO2, how many moles of ethanol form when 2.0 mol of glucose is completely fermented?",
          "optionA": "1.0 mol",
          "optionB": "2.0 mol",
          "optionC": "3.0 mol",
          "optionD": "4.0 mol",
          "correctOption": "D",
          "subConcept": "Fermentation mole ratio",
          "explanation": "The equation ratio glucose to ethanol is 1 to 2, so 2.0 mol of glucose gives 2.0 x 2 = 4.0 mol of ethanol. Answering 2.0 mol ignores the factor of two in the balanced equation.",
          "remediationTip": "Write the 1 to 2 ratio beside your working every time before scaling moles."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t2-organic-iii-alcohols-acids-esters",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Organic Chemistry III: Alcohols, Carboxylic Acids and Esters",
    "description": "Structure and naming of alkanols and alkanoic acids, fermentation of glucose and oxidation of ethanol, esterification and the ester smell test, soap by saponification and the difference from detergents, hydrogenation of fats and oils, the action of soap in hard water, and uses in the Ghanaian drinks and cosmetics industry.",
    "isFreeTrial": false,
    "keyNotes": "• Alcohols carry the hydroxyl group -OH; the series is named alkanol, methanol CH3OH, ethanol C2H5OH and propanol C3H7OH, the -ol suffix replacing the final -e of the alkane.\n• Ethanol is made by fermenting glucose from cassava, maize or cocoa with yeast at about 30 to 40 degrees C without air: C6H12O6 gives 2C2H5OH + 2CO2.\n• A primary alcohol oxidises first to an aldehyde then to a carboxylic acid; ethanol with acidified orange dichromate gives ethanal then ethanoic acid, distilling for the aldehyde and refluxing for the acid.\n• Carboxylic acids carry the -COOH group, are named alkanoic acid, and ethanoic acid CH3COOH is the acid in vinegar.\n• Esters form when an alcohol and a carboxylic acid react with a few drops of concentrated sulphuric acid in reversible esterification: CH3COOH + C2H5OH gives CH3COOC2H5 + H2O.\n• Esters smell fruity and are identified by a smell test on a watch glass; they are used in flavourings and perfumes.\n• Soaps are the sodium or potassium salts of long-chain fatty acids, made by saponification, boiling a fat or oil with concentrated sodium hydroxide.\n• In hard water soap forms an insoluble scum with calcium and magnesium ions, which is why detergents, the sodium salts of long-chain sulphates or sulphonates, keep working instead.\n• Fats and oils are esters of glycerol with fatty acids; hydrogenation of liquid vegetable oil over a nickel catalyst makes solid margarine.\n• Functional-group tests: sodium carbonate effervesces with a carboxylic acid, and acidified dichromate turns from orange to green with an alcohol on warming.\n• Ethanol burns cleanly: C2H5OH + 3O2 gives 2CO2 + 3H2O, the reaction behind spirit stoves and the fuel value of alcohol.\n• Palm oil and shea butter are natural esters used in Ghanaian soup, soap and cosmetics.",
    "detailedNotes": {
      "overview": "This topic travels through three linked families of organic compounds built on oxygen. Alcohols carry the hydroxyl group, carboxylic acids carry the carboxyl group, and esters are what you get when an acid and an alcohol join and lose water. The relationships matter: a primary alcohol oxidises into an acid, and that acid can be turned back into an ester, so one functional group leads neatly to the next. The practical chemistry is vivid, from yeast fermenting glucose to ethanol, to the fruity smell that betrays an ester, to soap made by boiling a local oil with alkali. The industry angle covers the Ghanaian drinks and cosmetics trade, the reason soap fails in hard water, and how a liquid vegetable oil is hardened into margarine.",
      "introduction": "Build a small concept map on one page: an alcohol at the left, an arrow labelled oxidation to the aldehyde, another to the carboxylic acid, and an arrow labelled esterification branching from the acid to the ester. Place the reagents beside each arrow, acidified dichromate for oxidation and concentrated sulphuric acid for esterification, and the functional group under each structure. Then run one bench test to fix the idea that an acid behaves differently from an alcohol: add sodium carbonate solution to vinegar and to ethanol and watch only the acid fizz. That single observation separates the two families for good.",
      "realWorldContext": "Ethanol production and use thread through Ghana. Palm-wine tappers and small distillers rely on natural fermentation of the sugars in palm sap, exactly the yeast reaction written as glucose giving ethanol plus carbon dioxide. The local fruit-drink and perfume trade buys ethyl ethanoate and related esters for their fruity smells, identified at the bench by the same watch-glass smell test. Soap making at home uses palm oil or shea butter boiled with alkali, the saponification that also produces glycerol for skin creams. A hard-water warning is real in many borehole areas, where soap lathers poorly and leaves a scum on buckets. Safety stays central: ethanol is highly flammable away from any flame, concentrated sulphuric acid must be added dropwise with eye protection, and never taste an ester in the laboratory.",
      "objectives": [
        "Name and draw simple alkanols and alkanoic acids from their functional groups and carbon count",
        "Describe the fermentation of glucose to ethanol and the controlled oxidation of ethanol to ethanoic acid",
        "Explain esterification and the ester smell test, and write the equation forming ethyl ethanoate",
        "Relate saponification, hard-water scum and hydrogenation to soaps, detergents and fats in daily use"
      ],
      "sections": [
        {
          "title": "Alcohols, Their Naming and Oxidation",
          "content": "The alcohols are the homologous series carrying the hydroxyl group, written -OH, attached to a carbon chain; the names take the alkane root and swap the final letter for the suffix ol, so methanol is CH3OH, ethanol C2H5OH and propanol C3H7OH, and each member burns in oxygen to give carbon dioxide and water. The commonest, ethanol, is made at home and in industry by fermentation, in which yeast enzymes convert the glucose from cassava, maize or cocoa molasses into ethanol and carbon dioxide under air-free conditions near 30 to 40 degrees C, the reaction being C6H12O6 giving 2C2H5OH plus 2CO2; too hot a mixture kills the yeast and caps the alcohol strength. A primary alcohol such as ethanol oxidises in two clear stages, first to an aldehyde and then to a carboxylic acid, and the stage reached is chosen by how the reaction is run. Warming ethanol with acidified orange potassium dichromate and distilling the product as it forms gives the aldehyde ethanal, while heating the mixture under a reflux condenser drives the oxidation all the way to ethanoic acid, the dichromate falling from orange to green as it is reduced. These two facts, fermentation and controlled oxidation, are the backbone of the local drinks and vinegar trades.",
          "bulletPoints": [
            "Alcohols carry -OH; methanol, ethanol and propanol take the -ol suffix from their carbon count.",
            "Fermentation: C6H12O6 gives 2C2H5OH + 2CO2 with yeast, warm and without air.",
            "Oxidation of ethanol goes to the aldehyde ethanal first, then to the acid ethanoic acid.",
            "Distil to isolate the aldehyde; reflux to push the oxidation to the acid.",
            "Acidified dichromate turning orange to green is the visible test for an alcohol being oxidised."
          ],
          "keyTakeaway": "The hydroxyl group sets the alcohol chemistry: ferment sugars to make ethanol, then control its oxidation to stop at the aldehyde or continue to the acid.",
          "realWorldExample": "A palm-wine keeper lets the tapped sap ferment in a gourd, the natural yeasts turning its sugars to ethanol with a froth of carbon dioxide, the very reaction in the fermentation equation."
        },
        {
          "title": "Carboxylic Acids and Esterification",
          "content": "Carboxylic acids carry the carboxyl group, -COOH, and are named as alkanoic acids by counting the carbon atoms, so methanoic acid HCOOH, ethanoic acid CH3COOH and propanoic acid C2H5COOH make up the first three members. They are weak acids, turning blue litmus red and effervescing with sodium carbonate or hydrogencarbonate to release carbon dioxide, which is the reliable test that separates them from alcohols; dilute ethanoic acid in water is the vinegar that preserves and flavours food. Their most useful reaction for this topic is esterification, in which an acid and an alcohol combine in the presence of a few drops of concentrated sulphuric acid, which acts both as a catalyst and as a remover of water, to give an ester and water in a slow reversible equilibrium. Ethanoic acid and ethanol, for instance, form the fruity ester ethyl ethanoate and water, written CH3COOH plus C2H5OH giving CH3COOC2H5 plus H2O. Esters are recognised by their sweet smell, found by placing a few drops on a watch glass at the bench, and the same reaction run backwards with aqueous alkali is how an ester can be split apart again.",
          "bulletPoints": [
            "Carboxyl group -COOH; methanoic, ethanoic and propanoic acids are the first three alkanoic acids.",
            "They are weak acids that turn blue litmus red and fizz with sodium carbonate, releasing carbon dioxide.",
            "Esterification joins an acid and an alcohol with concentrated sulphuric acid as catalyst and water remover.",
            "Ethanoic acid plus ethanol gives ethyl ethanoate plus water, a reversible equilibrium.",
            "A fruity smell on a watch glass is the simple practical test for an ester."
          ],
          "keyTakeaway": "Esterification is an acid plus an alcohol giving an ester plus water; the water molecule is part of the equation and must be written to balance it.",
          "realWorldExample": "The banana and pineapple flavourings used in a Tema drink factory are esters made by exactly this reaction, identified on the bench by their sharp fruity smell."
        },
        {
          "title": "Soaps, Detergents and Fats in Ghanaian Use",
          "content": "Fats and oils are the esters of glycerol with long-chain fatty acids, and like all esters they can be split by alkali. Boiling a fat or oil with concentrated sodium hydroxide hydrolyses it in a process called saponification, giving glycerol and the sodium salts of the fatty acids, which is soap; using potassium hydroxide instead yields the softer liquid soaps. A real limitation shows in hard water, whose dissolved calcium and magnesium ions react with soap to form an insoluble scum that wastes the bar and leaves deposits, which is why many washes now use detergents, the sodium salts of long-chain sulphates or sulphonates that do not precipitate in hard water. Liquid vegetable oils, being unsaturated, can be hardened by hydrogenation, bubbling hydrogen through the warm oil over a finely divided nickel catalyst to add hydrogen across the carbon-carbon double bonds and turn the oil into solid margarine. In Ghana this chemistry is visible in the market: palm oil used for soup and for soap making, shea butter pressed from the nut and refined for cosmetics and cooking, and the local fragrance trade that blends esters into perfumes and body creams.",
          "bulletPoints": [
            "Saponification boils a fat or oil with concentrated sodium hydroxide, giving soap and glycerol.",
            "Soap is the sodium salt of a fatty acid; potassium hydroxide gives the softer liquid soaps.",
            "Hard-water calcium and magnesium ions form an insoluble scum with soap, wasting it.",
            "Detergents are sodium salts of long-chain sulphates or sulphonates that still work in hard water.",
            "Hydrogenation over a nickel catalyst adds hydrogen to unsaturated oil and hardens it into margarine."
          ],
          "keyTakeaway": "Soap is an ester split by alkali; it fails in hard water because calcium ions precipitate it, and detergents and hydrogenated fats are the practical answers.",
          "realWorldExample": "A shea-processing group boils shea butter with alkali to make local soap and sells the glycerol by-product to a cosmetics maker, running saponification at village scale."
        }
      ],
      "commonMistakes": [
        "Writing the esterification product as only an ester and forgetting the water molecule, which leaves the equation unbalanced.",
        "Calling fermentation an aerobic process, when yeast makes ethanol only without air, while air would give respiration to carbon dioxide and water instead.",
        "Confusing the carboxyl and hydroxyl groups, giving an alcohol the -COOH ending or an acid the -ol suffix.",
        "Claiming detergent lathers in hard water exactly like soap, when it is soap that forms the insoluble scum and the detergent that keeps working."
      ],
      "wassceExamTips": [
        "On Paper 2 the structural formula and the correct functional group earn a method mark M1 before the answer mark A1, so draw the -OH or -COOH explicitly rather than writing only a name.",
        "For a functional-group test state reagent, observation and conclusion: sodium carbonate and effervescence for an acid, or acidified dichromate turning green for an alcohol on warming.",
        "When asked to explain soap in hard water, name the calcium and magnesium ions and the insoluble scum, then contrast the detergent, because the marks are split across those ideas.",
        "In Paper 3 the watch-glass smell test and the oily ester layer are alternative-practical staples; record the odour and the layer as your observations."
      ],
      "summaryChecklist": [
        "Can I name and draw the first alkanols and alkanoic acids from their functional groups?",
        "Can I write the fermentation equation and describe how ethanol is oxidised to ethanal then to ethanoic acid?",
        "Can I write a balanced esterification equation and identify an ester by its smell?",
        "Can I explain saponification and why soap fails in hard water while detergents do not?",
        "Can I describe hydrogenation of oils to margarine and give Ghanaian uses of fats and esters?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-organic-iii-1",
        "title": "Percentage Yield of an Esterification",
        "problem": "In an esterification, 6.0 g of ethanoic acid (Mr = 60) is reacted with 4.6 g of ethanol (Mr = 46) with a little concentrated sulphuric acid: CH3COOH + C2H5OH gives CH3COOC2H5 + H2O. If 6.6 g of ethyl ethanoate (Mr = 88) is finally obtained, calculate the percentage yield.",
        "stepByStepSolution": [
          "Step 1 (M1): Find moles of ethanoic acid, n = 6.0 / 60 = 0.10 mol.",
          "Step 2 (M1): Find moles of ethanol, n = 4.6 / 46 = 0.10 mol; the equation shows a 1 : 1 ratio, so neither reactant is in excess.",
          "Step 3 (M1): The theoretical moles of ester equal the limiting moles, 0.10 mol, so theoretical mass = 0.10 x 88 = 8.8 g.",
          "Step 4 (M1): Percentage yield = actual mass divided by theoretical mass, 6.6 / 8.8 x 100.",
          "Step 5 (A1): Percentage yield = 75%."
        ],
        "keyTakeaway": "Esterification is reversible, so the actual ester is below the 8.8 g theoretical value; divide the mass obtained by the mass predicted and multiply by 100."
      },
      {
        "id": "ex-che-organic-iii-2",
        "title": "Carbon Dioxide from Burning Ethanol",
        "problem": "Ethanol burns completely according to C2H5OH + 3O2 gives 2CO2 + 3H2O. What volume of carbon dioxide, measured at room temperature and pressure where one mole of gas occupies 24 dm3, is produced when 0.10 mol of ethanol is burned?",
        "stepByStepSolution": [
          "Step 1 (M1): Read the mole ratio from the balanced equation, 1 mol ethanol gives 2 mol carbon dioxide.",
          "Step 2 (M1): Multiply, so moles of CO2 = 0.10 x 2 = 0.20 mol.",
          "Step 3 (M1): Convert moles of gas to volume at r.t.p., volume = moles x 24 dm3.",
          "Step 4 (M1): Substitute, volume = 0.20 x 24.",
          "Step 5 (A1): Volume of carbon dioxide = 4.8 dm3 at room temperature and pressure."
        ],
        "keyTakeaway": "Use the balanced combustion equation for the mole ratio, then the molar volume of 24 dm3 at r.t.p. to change moles of gas into volume."
      }
    ],
    "quiz": {
      "id": "quiz-che-organic-iii",
      "topicId": "shs3-che-t2-organic-iii-alcohols-acids-esters",
      "title": "Alcohols, Acids and Esters Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-organic-iii-1",
          "quizId": "quiz-che-organic-iii",
          "questionText": "The functional group that defines an alcohol is the",
          "optionA": "hydroxyl group, -OH",
          "optionB": "carboxyl group, -COOH",
          "optionC": "ester linkage, -COO-",
          "optionD": "amino group, -NH2",
          "correctOption": "A",
          "subConcept": "Functional groups",
          "explanation": "Alcohols are built around the hydroxyl group -OH. The carboxyl group belongs to carboxylic acids, the ester linkage to esters, and the amino group to amines.",
          "remediationTip": "Link each family to one group: alcohol hydroxyl, acid carboxyl, ester the -COO- linkage."
        },
        {
          "id": "q-che-organic-iii-2",
          "quizId": "quiz-che-organic-iii",
          "questionText": "The fermentation of glucose by yeast produces ethanol and",
          "optionA": "hydrogen gas",
          "optionB": "ethanoic acid",
          "optionC": "carbon dioxide",
          "optionD": "methanol",
          "correctOption": "C",
          "subConcept": "Fermentation",
          "explanation": "The equation C6H12O6 gives 2C2H5OH plus 2CO2 shows ethanol and carbon dioxide as the products. Hydrogen and methanol are not formed, and ethanoic acid would need oxidation of the ethanol in air.",
          "remediationTip": "Recite the fermentation equation and name its two products together, ethanol and carbon dioxide."
        },
        {
          "id": "q-che-organic-iii-3",
          "quizId": "quiz-che-organic-iii",
          "questionText": "Soap is manufactured by which process?",
          "optionA": "distillation of a fat with dilute acid",
          "optionB": "hydrogenation of an oil with nickel",
          "optionC": "fermentation of glucose with yeast",
          "optionD": "boiling a fat or oil with concentrated sodium hydroxide",
          "correctOption": "D",
          "subConcept": "Saponification",
          "explanation": "Soap is made by saponification, boiling a fat or oil with concentrated sodium hydroxide, which splits the ester into glycerol and the sodium salts of fatty acids. Hydrogenation hardens oils, and fermentation and distillation make other products.",
          "remediationTip": "Pair soap with saponification and alkali; pair margarine with hydrogenation and nickel."
        },
        {
          "id": "q-che-organic-iii-4",
          "quizId": "quiz-che-organic-iii",
          "questionText": "Ethanoic acid reacting with ethanol gives",
          "optionA": "sodium ethanoate and hydrogen",
          "optionB": "ethyl ethanoate and water",
          "optionC": "carbon dioxide and water",
          "optionD": "ethanal and carbon dioxide",
          "correctOption": "B",
          "subConcept": "Esterification",
          "explanation": "Esterification joins the acid and the alcohol to give the ester ethyl ethanoate plus water. Carbon dioxide with water would come from combustion, and hydrogen from a metal-acid reaction, not from esterification.",
          "remediationTip": "Acid plus alcohol gives ester plus water, and always write both products so the equation balances."
        },
        {
          "id": "q-che-organic-iii-5",
          "quizId": "quiz-che-organic-iii",
          "questionText": "Which observation confirms a carboxylic acid rather than an alcohol?",
          "optionA": "no change with a lighted splint",
          "optionB": "effervescence with sodium carbonate, releasing carbon dioxide",
          "optionC": "a lilac flame on a nichrome wire",
          "optionD": "turning damp red litmus blue",
          "correctOption": "B",
          "subConcept": "Acid test",
          "explanation": "Carboxylic acids are acidic enough to react with sodium carbonate and give off carbon dioxide, seen as fizzing; alcohols do not. A litmus change to blue names an alkali, and flame colour names a metal ion.",
          "remediationTip": "Use sodium carbonate fizzing to tell an acid from an alcohol at the bench."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t2-polymers-petrochemicals-plastics-waste",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 9,
    "title": "Polymers, Petrochemicals and Plastics Waste in Ghana",
    "description": "Addition and condensation polymerisation with monomer to polymer naming, the common plastics and their uses, how crude oil is refined into fractions and cracked to supply alkenes, and the plastics pollution caused by sachet-water wrappers and bottles together with recycling, biodegradable alternatives and the hazards of burning plastics.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A polymer is a very large molecule built by joining many small alkene monomers; the repeat unit is the part of the chain drawn inside brackets, and the sum of the repeat units is the relative molecular mass.\n• In addition polymerisation the double bond of an alkene opens and no other product is formed, so polyethene comes from ethene, polypropene from propene and PVC from chloroethene; the atom economy is one hundred percent.\n• In condensation polymerisation two different monomers join with the loss of a small molecule such as water, giving polyesters such as PET and polyamides such as nylon, and the name of the linkage is what is hydrolysed.\n• Naming runs from monomer to polymer: replace the alkene name with the prefix poly, so ethene gives polyethene, and the repeat unit keeps every atom of the monomer because nothing is lost.\n• Crude oil is a mixture of hydrocarbons separated in a fractionating column by boiling point, from light gases and petrol at the top to diesel, lubricating oil and heavy residue at the bottom.\n• Cracking breaks a long alkane into a shorter alkane plus an alkene at high temperature over a hot catalyst or with steam, and it is the industrial route to the alkenes used to make plastics.\n• A balanced cracking equation conserves carbon and hydrogen, for example decane C10H22 gives octane C8H18 plus ethene C2H4.\n• Ghana's plastics problem is the sachet-water wrapper and the bottle, which block gutters and drains, flood roads, entangle livestock and persist for decades because they do not rot.\n• Recycling sorts plastics by resin code, washes and re-granulates them, and the same bottle can be redrawn as fibre; biodegradable plastics break down only under the right heat and moisture and are not a licence to litter.\n• Burning plastics is dangerous because it releases acidic and toxic fumes including hydrogen chloride from PVC and dioxins, and black smoke from incomplete burning; open burning at a dump site is never acceptable.",
    "detailedNotes": {
      "overview": "Polymers are the bridge between the organic chemistry of alkenes and the materials that fill daily life in Ghana, from sachet-water wrappers to buckets, ropes, food packs and phone cases. This topic explains how small alkene monomers are joined into very long chains by addition polymerisation, how two different monomers join by condensation polymerisation with the loss of water, and how the name of a plastic is read from the name of its monomer. It then traces the plastics back to crude oil, describing fractional distillation into useful fractions and cracking of heavy fractions into the alkenes that polymerisation needs. The final part treats the waste: why the sachet-water wrapper and the bottle litter the drains and the coast, what recycling and biodegradable alternatives really do, and why burning plastics at a dump site releases acidic and toxic fumes. Every calculation in this topic rests on the conservation of atoms, so a balanced equation and a correct count of carbon and hydrogen carry the marks.",
      "introduction": "Begin by drawing three monomers, ethene, propene and chloroethene, then draw the open-chain repeat unit of each polymer beside it and check that no atom has been lost. Write the general addition equation as n monomer gives the polymer in brackets with subscript n, and practise naming six plastics from their monomers. Next learn the fractionating column from top to bottom and state one use for each fraction, then write and balance two cracking equations and confirm the atom count. Finish with a short field note: collect the plastics around the school gate, sort them by resin code, and explain which are recyclable and which are only fit for a controlled fill. Do the worked examples with a calculator and quote the degree of polymerisation as a whole number.",
      "realWorldContext": "In Ghana the polymer story is a waste story. The sachet-water industry puts thousands of thin polythene wrappers into circulation every morning, and a single blocked gutter behind Makola or along a road in Adenta turns a short rain into a flood. Bottlers and water factories at Kasoa and Ashaley Botwe generate PET and polythene scrap that a recycler will buy, wash and re-granulate into pellets, and cooperatives collect bottles for re-melting. At the Agbogbloshie and Old Fadama sites mixed plastics are sometimes burned with cable and foam, and the fumes from PVC insulation and printed wrappers are exactly the acidic, smoke-heavy gases that harm the pickers and the neighbourhood. The chemistry that made these cheap, tough materials is the same chemistry that must guide their disposal: reduce the wrapper, reuse the bucket, recycle the bottle, and never burn the pile.",
      "objectives": [
        "Distinguish addition from condensation polymerisation and write a general equation for each with the correct repeat unit",
        "Name a polymer from its monomer and draw the repeat unit without gaining or losing atoms",
        "Explain fractional distillation of crude oil and the purpose of cracking, and balance a cracking equation that yields an alkene",
        "Connect the uses and disposal of common plastics to the pollution, recycling and burning hazards seen in Ghana"
      ],
      "sections": [
        {
          "title": "Addition and Condensation Polymerisation",
          "content": "A polymer is a giant molecule made by linking a very large number of small molecules called monomers. In addition polymerisation the monomer is an alkene, the carbon to carbon double bond opens, and the monomers join head to tail with no other substance formed, so every atom of the monomer appears in the chain and the atom economy is complete. Ethene gives polyethene, propene gives polypropene, and chloroethene gives polyvinyl chloride, usually written PVC. The chain is drawn as a short repeat unit inside square brackets with a subscript n, and n multiplied by the mass of the repeat unit gives the relative molecular mass of one polymer molecule. Condensation polymerisation is different: two monomers each carrying two reactive groups join together and a small molecule, most often water, is eliminated at every link. A dicarboxylic acid plus a diol gives a polyester with an ester link, and a dicarboxylic acid plus a diamine gives a polyamide such as nylon with an amide link. Polyethene terephthalate, the PET of drink bottles, is a condensation polyester, which is why its name is read from the acid and the alcohol that formed it.",
          "bulletPoints": [
            "Addition polymerisation uses an alkene monomer, opens the double bond and loses no atom.",
            "Condensation polymerisation joins two monomers and eliminates water at every new link.",
            "Polyesters carry an ester link and polyamides such as nylon carry an amide link.",
            "The repeat unit is drawn inside brackets with subscript n, and n times its mass gives the polymer mass.",
            "Polyethene, polypropene and PVC are addition polymers; PET and nylon are condensation polymers."
          ],
          "keyTakeaway": "Addition polymers keep every atom of the alkene monomer, while condensation polymers lose a small molecule at each link, so the two types are named and calculated in different ways.",
          "realWorldExample": "A rolled polythene sachet used for groundnut oil at a Kaneshie station is an addition polymer of ethene, while the clear PET bottle of a soft drink at the same station is a condensation polyester, and the two behave very differently when collected for recycling."
        },
        {
          "title": "Petroleum Fractions and Cracking for Alkenes",
          "content": "Crude oil is a mixture of hydrocarbons of different chain lengths, and it is separated in a fractionating column by boiling point. The column is hot at the bottom and cool at the top, so short-chain molecules with low boiling points rise to the top as gases and petrol, while long-chain molecules condense lower down as kerosene, diesel, lubricating oil and finally the heavy residue used for bitumen. Each fraction is a family of compounds, not one substance, and its use follows its volatility, viscosity and flame. Demand for petrol and the alkenes of polymerisation is far greater than the crude gives directly, so the heavy fractions are cracked: long alkanes are passed over a hot catalyst or mixed with steam at high temperature, and they break into a shorter alkane that can go into the petrol pool plus an alkene such as ethene or propene that becomes plastic. Cracking is therefore the industrial link between the crude oil and the polymer. Because it is a real chemical change, the equation must balance carbon and hydrogen exactly, so decane splitting into octane and ethene is accepted, C10H22 giving C8H18 plus C2H4, with ten carbons and twenty-two hydrogens counted on both sides.",
          "bulletPoints": [
            "Fractions are separated by boiling point: light gases and petrol at the top, bitumen residue at the bottom.",
            "A fraction is a mixture of hydrocarbons, not a single compound.",
            "Cracking uses heat, a catalyst or steam to split a long alkane into a shorter alkane plus an alkene.",
            "The alkene from cracking is the feedstock for addition polymerisation.",
            "Balance carbon and hydrogen in every cracking equation; decane gives octane plus ethene."
          ],
          "keyTakeaway": "Fractional distillation sorts crude oil by boiling point and cracking converts the less useful heavy fractions into the petrol and the alkenes that plastics are made from.",
          "realWorldExample": "The petrol, kerosene and diesel sold at a Tema filling station all come from different fractions of the same crude, and the polythene bags on the same counter trace their ethene back to cracking at a refinery."
        },
        {
          "title": "Plastics Waste, Recycling and the Hazard of Burning",
          "content": "Most addition plastics are chemically unreactive and do not rot, so a sachet-water wrapper or a bottle discarded by the roadside persists for decades, blocks gutters and drains, floods streets after rain, and entangles animals or is eaten by them. The sachet-water industry and bottled drinks make this the most visible litter in Ghanaian towns. Recycling answers part of the problem: plastics are sorted by resin code, washed, shredded and re-granulated into pellets that are moulded into new products, and PET bottles are drawn into fibre for sacks and clothing. Biodegradable and photodegradable plastics break down faster under the right heat and moisture, but they are not a licence to litter, since many need industrial composting that Ghana does not provide at scale. The worst disposal is burning. Polythene burns with a smoky flame, and PVC releases hydrogen chloride gas, while mixtures of printed and chlorinated plastics can form dioxins; the thick black smoke of open burning at a dump site is a direct lung hazard to pickers and residents. The correct order is reduce the wrapper, reuse the container, recycle the sorted plastic, and send only the residue to a controlled fill.",
          "bulletPoints": [
            "Unreactive addition plastics do not rot, so wrappers block drains and flood roads.",
            "Recycling sorts by resin code, washes, shreds and re-granulates into new moulded products.",
            "Biodegradable plastics need the right heat and moisture and are not a licence to litter.",
            "Burning PVC gives hydrogen chloride and mixed plastics can form dioxins and heavy black smoke.",
            "Follow the waste order: reduce, reuse, recycle, then controlled disposal."
          ],
          "keyTakeaway": "The value of plastics, toughness and low cost, is the source of the waste problem, so the answer is careful sorting and recycling rather than open burning or dumping.",
          "realWorldExample": "At a collection point in Accra a recycler pays by weight for clean PET bottles and plain polythene but refuses the foil-lined multilayer sachet, because bonded layers cannot be separated and re-melted cheaply."
        }
      ],
      "commonMistakes": [
        "Writing an addition polymerisation with a lost molecule such as water; addition loses nothing, and it is condensation polymerisation that eliminates water at each link.",
        "Reporting a degree of polymerisation as a decimal or forgetting that n is the number of repeat units, so 28000 divided by a repeat-unit mass of 28 is 1000 whole units, not a fraction.",
        "Giving a cracking equation that does not balance, for example writing decane to ethene only and leaving hydrogen atoms unmatched; both carbon and hydrogen must tally.",
        "Claiming that all plastics biodegrade in the soil; common polythene and PET persist for years, and only specific plastics break down under controlled composting.",
        "Saying burning plastic is a safe way to dispose of it; open burning of PVC and printed mixtures gives acidic and toxic fumes and is a health hazard."
      ],
      "wassceExamTips": [
        "Paper 1 often shows a monomer structure and asks for the polymer name or the repeat unit; open the double bond, keep every atom and add the subscript n.",
        "For a cracking question, quote the conditions as heat with a catalyst or steam, then balance the equation and check the carbon and hydrogen count on both sides.",
        "In Paper 2 a distinction question is marked by the presence or absence of the eliminated small molecule, so say plainly that addition loses nothing and condensation loses water.",
        "A degree of polymerisation answer must be a whole number with no unit, obtained by dividing the polymer relative molecular mass by the repeat-unit mass.",
        "For the waste question, name the hazard with chemistry, hydrogen chloride from PVC or dioxins from mixed burning, and give the correct order reduce, reuse, recycle rather than a vague appeal."
      ],
      "summaryChecklist": [
        "Can I write a general equation for addition and for condensation polymerisation and name one product of each?",
        "Can I draw the repeat unit of polyethene, polypropene and PVC from the monomer without losing atoms?",
        "Can I list the fractions of crude oil in order and state the purpose of cracking?",
        "Can I balance a cracking equation such as decane to octane plus ethene and check the atom count?",
        "Can I explain the Ghana plastics waste problem and the correct disposal order, including the burning hazard?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-polymers-1",
        "title": "Finding the Degree of Polymerisation of Polyethene",
        "problem": "A sample of polyethene has an average relative molecular mass of 28000. The repeat unit is -CH2-CH2-. Find the relative molecular mass of the repeat unit and the number of repeat units, n, in one average polymer molecule.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the atoms of the repeat unit -CH2-CH2- as two carbon atoms and four hydrogen atoms.",
          "Step 2 (M1): Relative molecular mass of the repeat unit = (2 x 12) + (4 x 1) = 24 + 4 = 28.",
          "Step 3 (M1): The number of repeat units n = relative molecular mass of the polymer divided by the relative molecular mass of the repeat unit = 28000 / 28.",
          "Step 4 (A1): n = 1000 repeat units, quoted as a whole number with no unit.",
          "Step 5 (M1): Note that addition polymerisation lost no atom, so each ethene monomer contributed all of its mass to the chain.",
          "Step 6 (A1): Final answer: the repeat-unit mass is 28 and the average molecule contains 1000 repeat units."
        ],
        "keyTakeaway": "The degree of polymerisation is the polymer mass divided by the repeat-unit mass, and for an addition polymer the repeat unit keeps every atom of the monomer."
      },
      {
        "id": "ex-che-polymers-2",
        "title": "Balancing a Cracking Equation and Linking it to a Polymer",
        "problem": "Decane, C10H22, is cracked to give octane and one alkene. Identify the alkene, write a balanced equation, and state which polymer the alkene is used to make.",
        "stepByStepSolution": [
          "Step 1 (M1): Carbon must be conserved, so the alkene carries 10 - 8 = 2 carbon atoms.",
          "Step 2 (M1): Hydrogen must be conserved, so the alkene carries 22 - 18 = 4 hydrogen atoms.",
          "Step 3 (A1): An alkene with two carbons and four hydrogens is C2H4, which is ethene.",
          "Step 4 (M1): Write the balanced equation C10H22 gives C8H18 + C2H4 and check the count: carbon 10 on each side, hydrogen 22 on each side.",
          "Step 5 (A1): Ethene is the monomer for addition polymerisation of polyethene, so n C2H4 gives the repeat unit -CH2-CH2- with subscript n.",
          "Step 6 (M1): State the cracking conditions as high temperature over a catalyst or with steam, and note that the products are a shorter alkane plus an alkene.",
          "Step 7 (A1): Final answer: C10H22 gives C8H18 + C2H4, the alkene is ethene, and ethene is polymerised to polyethene."
        ],
        "keyTakeaway": "Balancing a cracking equation is a strict atom count, and the alkene product it forms is the monomer of a familiar plastic."
      }
    ],
    "quiz": {
      "id": "quiz-che-polymers",
      "topicId": "shs3-che-t2-polymers-petrochemicals-plastics-waste",
      "title": "Polymers, Petrochemicals and Plastics Waste Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-polymers-1",
          "quizId": "quiz-che-polymers",
          "questionText": "Which statement correctly distinguishes addition from condensation polymerisation?",
          "optionA": "Addition polymerisation loses a water molecule at every link while condensation loses nothing",
          "optionB": "Addition polymerisation uses only one alkene monomer and loses no atom, while condensation joins two monomers and eliminates water",
          "optionC": "Both types eliminate carbon dioxide as they form the chain",
          "optionD": "Condensation polymers are always made from alkenes and addition polymers from acids",
          "correctOption": "B",
          "subConcept": "Types of polymerisation",
          "explanation": "In addition polymerisation an alkene double bond opens and the monomers join with no atom lost, so the atom economy is complete. Condensation polymerisation joins two different bifunctional monomers and eliminates a small molecule, usually water, at each new link.",
          "remediationTip": "Write one example equation of each type and circle the atoms that are lost, none in the first and water in the second."
        },
        {
          "id": "q-che-polymers-2",
          "quizId": "quiz-che-polymers",
          "questionText": "Crude oil is separated into fractions in a fractionating column. The separation is based mainly on which property?",
          "optionA": "The density of each hydrocarbon",
          "optionB": "The colour of each fraction",
          "optionC": "The boiling point of each hydrocarbon",
          "optionD": "The number of carbon atoms only in the gases",
          "correctOption": "C",
          "subConcept": "Fractional distillation",
          "explanation": "The column is hot at the base and cool at the top, so each hydrocarbon condenses at the level matching its boiling point. Short chains with low boiling points reach the top as gases and petrol, while long chains condense lower as diesel, lubricating oil and residue.",
          "remediationTip": "Sketch the column and place five fractions from cool top to hot base to fix the boiling-point idea."
        },
        {
          "id": "q-che-polymers-3",
          "quizId": "quiz-che-polymers",
          "questionText": "Which balanced cracking equation for decane is correct?",
          "optionA": "C10H22 gives C8H18 + C2H4",
          "optionB": "C10H22 gives C8H18 + C2H6",
          "optionC": "C10H22 gives C7H16 + C3H8",
          "optionD": "C10H22 gives C9H20 + CH4",
          "correctOption": "A",
          "subConcept": "Cracking equations",
          "explanation": "Cracking must conserve both carbon and hydrogen and produce at least one alkene. Option A gives carbon 8 plus 2 equals 10 and hydrogen 18 plus 4 equals 22, matching decane, and C2H4 is the alkene ethene. The others either break the atom count or give only alkanes with no alkene for polymerisation.",
          "remediationTip": "For each equation tally carbon and hydrogen separately on both sides before choosing."
        },
        {
          "id": "q-che-polymers-4",
          "quizId": "quiz-che-polymers",
          "questionText": "A polymer molecule has relative molecular mass 42000 and a repeat unit of relative mass 28. How many repeat units does it contain?",
          "optionA": "28",
          "optionB": "1500",
          "optionC": "15000",
          "optionD": "150",
          "correctOption": "B",
          "subConcept": "Degree of polymerisation",
          "explanation": "The number of repeat units is the polymer mass divided by the repeat-unit mass, so 42000 divided by 28 equals 1500. The value 28 is the mass of one repeat unit, not the count, and 15000 is what you get by placing the decimal point wrongly.",
          "remediationTip": "Set the division down clearly as 42000 over 28 and read the answer as a whole number of units."
        },
        {
          "id": "q-che-polymers-5",
          "quizId": "quiz-che-polymers",
          "questionText": "Why is open burning of mixed plastics, including PVC wrappers, a serious hazard?",
          "optionA": "It makes the plastics stronger and harder to recycle",
          "optionB": "It cools the soil and stops plants growing",
          "optionC": "It releases only harmless carbon dioxide and steam",
          "optionD": "It releases acidic gases such as hydrogen chloride and toxic dioxins with thick smoke",
          "correctOption": "D",
          "subConcept": "Plastics waste and burning",
          "explanation": "Burning PVC and printed, chlorinated or mixed plastics releases hydrogen chloride gas and can form dioxins, together with dense black smoke from incomplete combustion. These fumes damage the lungs of pickers and residents near a dump site, so controlled disposal and recycling are used instead.",
          "remediationTip": "Link each material to its burn product: PVC to hydrogen chloride, mixed plastic to dioxins and smoke."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t2-biochemistry-carbohydrates-lipids-proteins",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 10,
    "title": "Biochemistry: Carbohydrates, Lipids, Proteins and Enzymes",
    "description": "The food tests for starch, reducing sugar, protein and lipid, the structure and role of glucose, sucrose and cellulose, saturated and unsaturated fats, amino acids and the peptide bond, protein denaturation, the specificity of enzymes and the factors that affect them, and the energy and balance of a Ghanaian diet.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Carbohydrates contain carbon, hydrogen and oxygen, and are divided into monosaccharides such as glucose, disaccharides such as sucrose and maltose, and polysaccharides such as starch and cellulose.\n• The food tests are fixed: iodine solution turns blue-black with starch; Benedict's reagent with heat gives a brick-red precipitate with a reducing sugar; biuret reagent turns violet with protein; and ethanol plus water gives a white emulsion with lipid.\n• Glucose is the fuel oxidised in respiration, sucrose is the transported sugar in plants and is non-reducing, and starch and glycogen are the storage forms; cellulose builds the plant wall and is not digested by humans.\n• Lipids are made of glycerol and fatty acids; saturated fats have no carbon to carbon double bonds and pack solid, while unsaturated fats keep double bonds, are usually plant oils, and decolourise bromine water.\n• Proteins are polymers of amino acids joined by peptide bonds; each amino acid has an amino group and a carboxyl group, and the chain folds into a specific shape that gives the protein its function.\n• Denaturation is the loss of that folded shape by heat or strong acid, which stops the protein working, as seen when an egg white sets or an enzyme loses its activity.\n• Enzymes are biological catalysts, they are specific to one substrate, and their rate depends on temperature and pH, with an optimum near body temperature and a sharp fall beyond it.\n• Food energy per gram is about 17 kJ for carbohydrate, 17 kJ for protein and 38 kJ for fat, so a mixed portion is valued by adding mass times the fuel value of each class.\n• A balanced Ghanaian diet combines the energy foods kenkey, rice and yam with proteins from beans, groundnut, fish and egg, and the vitamins and minerals from green vegetables and fruit.",
    "detailedNotes": {
      "overview": "Biochemistry applies the organic chemistry of carbon compounds to the molecules of living things, and WASSCE tests it mainly through food tests, structure and function, and energy calculations. This topic covers the four great classes of food molecule. Carbohydrates, built from carbon, hydrogen and oxygen, run from glucose and sucrose to the storage polymer starch and the structural polymer cellulose. Lipids, esters of glycerol and fatty acids, store energy densely and are sorted into saturated fats and unsaturated oils. Proteins, chains of amino acids held by peptide bonds, fold into shapes that give them their role, and that folding is lost by denaturation. Enzymes, which are proteins, speed the reactions of life with a strict specificity that depends on temperature and pH. Alongside the chemistry of each class you will master the four standard food tests and the fuel values used to value a Ghanaian plate, since a question that asks you to test a food, name the molecule and state its role is a single structured answer worth many marks.",
      "introduction": "Set up the four food tests in the school laboratory and record every colour change in a table, practising the exact reagent, condition and positive result for each. Then draw glucose, name the glycosidic linkage in sucrose, and contrast the coiled, compact starch with the straight, fibrous cellulose. Sort a list of foods into saturated fats and unsaturated oils, and test an oil with bromine water to see decolourisation. Sketch two amino acids, join them with a peptide bond, and show the loss of water. Finally plot enzyme rate against temperature and against pH, marking the optimum and the denaturation point, and do the energy calculation for a portion of kenkey with groundnut and fish using the fuel values.",
      "realWorldContext": "The chemistry of food is the chemistry of a Ghanaian market. Kenkey, banku, rice, yam and plantain are mostly starch, the storage carbohydrate that iodine turns blue-black and that amylase in the saliva begins to break down. Groundnut, palm oil and fried foods carry the lipid fraction, tested by the ethanol emulsion and supplying the densest energy per gram. Beans, kontomire, smoked fish, egg and meat give the proteins that the biuret test reveals and that build and repair body tissue. The enzymes of cooking and digestion act on these same molecules: the heat that denatures the protein of an egg in a frying pan is the same heat a food laboratory controls, and the fermentation that makes kenkey sour is the work of bacteria acting on carbohydrate. A balanced plate combines the energy foods with proteins and with the micronutrients of vegetables and fruit.",
      "objectives": [
        "Perform and record the food tests for starch, reducing sugar, protein and lipid with the correct reagent and colour change",
        "Relate the structure of glucose, sucrose, starch and cellulose to their roles in energy, transport and support",
        "Distinguish saturated from unsaturated fats and describe the amino acid and the peptide bond in proteins",
        "Explain enzyme specificity and the effects of temperature and pH, and calculate the energy value of a mixed food portion"
      ],
      "sections": [
        {
          "title": "Carbohydrates and Their Food Tests",
          "content": "Carbohydrates contain carbon, hydrogen and oxygen, and the simplest are the monosaccharides, of which glucose, C6H12O6, is the main fuel oxidised during respiration. Two monosaccharides join by a condensation reaction that forms a disaccharide and loses water: glucose plus fructose gives sucrose, the transported sugar of plants, and glucose plus glucose gives maltose. Glucose and maltose are reducing sugars because they carry a free reactive group, whereas sucrose is non-reducing because that group is tied up in the bond, so sucrose gives no colour with Benedict's reagent unless it is first hydrolysed. Long chains of glucose units form the polysaccharides. Starch is the storage form in plants, built from coiled, compact molecules that iodine detects by turning blue-black. Cellulose is the structural polymer of the cell wall, made of straight chains bundled into fibres that human enzymes cannot break, so it passes as roughage. The reducing-sugar test uses Benedict's reagent warmed in a water bath, and a positive result runs through green, yellow and orange to a brick-red precipitate, the colour showing roughly how much sugar is present.",
          "bulletPoints": [
            "Glucose C6H12O6 is the monosaccharide fuel of respiration.",
            "Sucrose is a non-reducing disaccharide; maltose and glucose are reducing.",
            "Starch stores glucose in plants and gives a blue-black colour with iodine.",
            "Cellulose builds the cell wall and is not digested by humans.",
            "Benedict's reagent plus heat gives a brick-red precipitate with a reducing sugar."
          ],
          "keyTakeaway": "Carbohydrates are sorted by chain length and by whether a free reducing group remains, and each class is confirmed by one named test with one definite colour change.",
          "realWorldExample": "A cook tests whether kenkey dough has enough fermentable sugar by adding iodine, which turns blue-black with the abundant starch, while the sweet taste of ripe plantain comes from sugars that give a positive Benedict's test."
        },
        {
          "title": "Lipids, Proteins and Denaturation",
          "content": "Lipids are esters formed from one molecule of glycerol joined to three fatty acids, and they store more energy per gram than carbohydrate because their chains are highly reduced. A saturated fat has fatty-acid chains with no carbon to carbon double bonds, so the chains pack close and the fat is solid at room temperature, as in cocoa butter and animal fat. An unsaturated fat keeps one or more double bonds that kink the chain, is usually a plant oil such as palm or groundnut oil, and decolourises bromine water because the double bonds add bromine. Lipids are detected by dissolving the sample in ethanol, pouring that into water, and observing a milky white emulsion. Proteins are polymers of amino acids, and every amino acid carries an amino group at one end and a carboxyl group at the other. Joining two amino acids releases water and forms a peptide bond, and hundreds of such links fold into a specific three-dimensional shape that gives the protein its function. Heat or strong acid disrupts that shape, and the protein is denatured, losing its activity, which is why an egg white sets firm and why a cooked enzyme no longer works.",
          "bulletPoints": [
            "A lipid is glycerol esterified with three fatty acids.",
            "Saturated fats have no double bonds and are solid; unsaturated oils keep double bonds and decolourise bromine water.",
            "The ethanol emulsion test confirms lipid as a milky white cloudiness.",
            "Amino acids carry an amino group and a carboxyl group and join by a peptide bond with loss of water.",
            "Denaturation is the loss of the folded shape by heat or acid, stopping the protein work."
          ],
          "keyTakeaway": "Lipids and proteins are both condensation polymers, and the shape produced when a protein chain folds is exactly what denaturation destroys.",
          "realWorldExample": "Frying egg in a pan denatures its protein so the clear white turns opaque, and the same pan of groundnut oil stays liquid because its unsaturated chains cannot pack into a solid."
        },
        {
          "title": "Enzymes, Specificity and the Balanced Diet",
          "content": "Enzymes are protein catalysts that speed the reactions of digestion and metabolism without being used up. Each enzyme has an active site shaped to fit one substrate, the lock-and-key idea, so amylase acts only on starch and protease only on protein; this specificity is the reason the body runs thousands of separate reactions at once. Rate depends on temperature and on pH. Warming increases collisions and speed up to an optimum near body temperature, but beyond it the active site is denatured and the rate falls sharply and will not recover. Each enzyme also has an optimum pH, with pepsin in the stomach working in strong acid and most others near neutrality. The food value of a diet comes from oxidising these molecules: carbohydrate and protein each give about 17 kilojoules per gram while fat gives about 38, so a mixed portion is valued by multiplying the mass of each class by its fuel value and adding the parts. A balanced Ghanaian plate pairs energy carbohydrate from kenkey, rice or yam with protein from beans, groundnut, fish or egg and with the vitamins and minerals of green vegetables and fruit, so growth, repair and protection are all supplied.",
          "bulletPoints": [
            "An enzyme is a protein catalyst with a specific active site for one substrate.",
            "Rate rises with temperature to an optimum, then falls as the enzyme denatures.",
            "Each enzyme has its own optimum pH, acid for pepsin, near neutral for most.",
            "Fuel values are about 17 kJ per gram for carbohydrate and protein and 38 kJ per gram for fat.",
            "A balanced diet combines energy carbohydrate, body-building protein and protective micronutrients."
          ],
          "keyTakeaway": "Enzyme activity is a shape-and-condition effect, so heat and pH that change the shape change the rate, and the food value of a diet is a simple sum of mass times fuel value.",
          "realWorldExample": "Salivary amylase begins starch digestion in the mouth as you chew kenkey, working best near body temperature, which is why a very hot portion is said to slow the first stage of digestion."
        }
      ],
      "commonMistakes": [
        "Writing Benedict's test without the heating step; a reducing sugar needs the solution warmed in a water bath before the brick-red precipitate appears, and the mark for the condition is separate from the colour.",
        "Confusing the iodine result by saying starch turns the iodine brown; iodine is brown-yellow to begin with and the positive is a blue-black colour, so state both starting and final colour.",
        "Claiming sucrose is a reducing sugar; it is non-reducing because its reactive groups are used in the bond, so it needs hydrolysis first before it will reduce Benedict's reagent.",
        "Adding food energy with the wrong fuel values by treating fat like carbohydrate; fat gives about 38 kJ per gram, more than twice the 17 kJ of carbohydrate or protein.",
        "Saying an enzyme is used up in the reaction or destroyed permanently by mild cooling; it is a catalyst that is unchanged, and only the high-temperature denaturation is permanent."
      ],
      "wassceExamTips": [
        "In Paper 3 a food-test question awards marks for reagent, condition and observation, so write the full line: add Benedict's reagent, heat in a water bath, a brick-red precipitate forms.",
        "Keep the starting colour and the final colour in the record, for example iodine from brown-yellow to blue-black, because examiners mark the change not just the result.",
        "For a structure-to-function question, name the molecule, then link one structural fact to one role, such as cellulose straight chains forming strong fibres in the wall.",
        "When asked to work out the energy of a portion, tabulate each food class with its mass and fuel value, show each product, then sum, and give the unit as kJ.",
        "Distinguish denaturation from digestion: denaturation is the loss of shape that stops an enzyme working, while digestion is the breaking of peptide bonds to amino acids."
      ],
      "summaryChecklist": [
        "Can I state the reagent, condition and positive colour for the tests of starch, reducing sugar, protein and lipid?",
        "Can I relate glucose, sucrose, starch and cellulose to energy, transport and support?",
        "Can I tell saturated from unsaturated fats and draw the peptide bond between two amino acids?",
        "Can I explain enzyme specificity and the effect of temperature and pH on rate?",
        "Can I calculate the energy value of a mixed food portion using the fuel values 17, 17 and 38 kJ per gram?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-biochemistry-1",
        "title": "Energy Value of a Mixed Food Portion",
        "problem": "A portion of food contains 12 g of carbohydrate, 3 g of fat and 2 g of protein. Using fuel values of 17 kJ per gram for carbohydrate and protein and 38 kJ per gram for fat, calculate the total energy of the portion and the percentage of that energy supplied by the fat.",
        "stepByStepSolution": [
          "Step 1 (M1): Energy from carbohydrate = mass x fuel value = 12 x 17 = 204 kJ.",
          "Step 2 (M1): Energy from protein = 2 x 17 = 34 kJ.",
          "Step 3 (M1): Energy from fat = 3 x 38 = 114 kJ.",
          "Step 4 (A1): Total energy = 204 + 114 + 34 = 352 kJ.",
          "Step 5 (M1): Percentage from fat = energy from fat divided by total energy, then multiplied by 100 = (114 / 352) x 100.",
          "Step 6 (A1): Percentage from fat = 32.4% to one decimal place.",
          "Step 7 (M1): Note that although fat is only 3 g of the 17 g sample, it supplies the largest single fraction of the energy because its fuel value per gram is more than double that of carbohydrate.",
          "Step 8 (A1): Final answer: the portion gives 352 kJ, and 32.4% of that energy comes from fat."
        ],
        "keyTakeaway": "Food energy is the sum of mass times fuel value for each class, and fat dominates that sum per gram even in a small mass."
      },
      {
        "id": "ex-che-biochemistry-2",
        "title": "Carbon Dioxide from the Oxidation of Glucose",
        "problem": "Glucose is oxidised during respiration by the equation C6H12O6 + 6 O2 gives 6 CO2 + 6 H2O. If 18 g of glucose is fully oxidised, calculate the mass of carbon dioxide produced. Use relative atomic masses C = 12, H = 1 and O = 16.",
        "stepByStepSolution": [
          "Step 1 (M1): Relative molecular mass of glucose = (6 x 12) + (12 x 1) + (6 x 16) = 72 + 12 + 96 = 180.",
          "Step 2 (M1): Moles of glucose = mass divided by relative molecular mass = 18 / 180 = 0.1 mol.",
          "Step 3 (M1): From the balanced equation one mole of glucose gives six moles of carbon dioxide, so 0.1 mol glucose gives 0.1 x 6 = 0.6 mol CO2.",
          "Step 4 (M1): Relative molecular mass of carbon dioxide = 12 + (2 x 16) = 44.",
          "Step 5 (A1): Mass of carbon dioxide = moles x relative molecular mass = 0.6 x 44 = 26.4 g.",
          "Step 6 (M1): Check the atom balance of the equation: carbon 6 on each side, hydrogen 12 giving 6 water molecules, and oxygen 6 plus 12 equals 18 which matches 12 in carbon dioxide plus 6 in water.",
          "Step 7 (A1): Final answer: oxidising 18 g of glucose produces 26.4 g of carbon dioxide."
        ],
        "keyTakeaway": "A respiration calculation follows the mole ratio in the balanced equation, so find moles of the known substance, use the ratio, then convert back to mass."
      }
    ],
    "quiz": {
      "id": "quiz-che-biochemistry",
      "topicId": "shs3-che-t2-biochemistry-carbohydrates-lipids-proteins",
      "title": "Biochemistry Food Molecules Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-biochemistry-1",
          "quizId": "quiz-che-biochemistry",
          "questionText": "Which reagent and result confirm a reducing sugar in a food sample?",
          "optionA": "Iodine solution giving a blue-black colour",
          "optionB": "Biuret reagent giving a violet colour",
          "optionC": "Benedict's reagent warmed in a water bath giving a brick-red precipitate",
          "optionD": "Ethanol poured into water giving a white emulsion",
          "correctOption": "C",
          "subConcept": "Food tests",
          "explanation": "Benedict's reagent plus heating gives a brick-red precipitate with a reducing sugar such as glucose. Iodine detects starch, biuret detects protein, and the ethanol emulsion detects lipid, so only the Benedict's result confirms a reducing sugar.",
          "remediationTip": "Make a two-column card of each test and its positive result and revise it before the practical."
        },
        {
          "id": "q-che-biochemistry-2",
          "quizId": "quiz-che-biochemistry",
          "questionText": "Why does sucrose not give a positive Benedict's test on its own?",
          "optionA": "It is a polysaccharide and too large to react",
          "optionB": "It is a non-reducing sugar because its reactive groups are used in the glycosidic bond",
          "optionC": "It contains no carbon atoms",
          "optionD": "It reacts only with iodine and not with Benedict's reagent",
          "correctOption": "B",
          "subConcept": "Disaccharides",
          "explanation": "In sucrose the reducing groups of glucose and fructose are joined in the glycosidic bond, so no free group remains to reduce the reagent, which makes it non-reducing. Only after hydrolysis into its monosaccharides will it reduce Benedict's reagent.",
          "remediationTip": "Draw the two glucose units joined by a bond and mark the reactive group that is now tied up."
        },
        {
          "id": "q-che-biochemistry-3",
          "quizId": "quiz-che-biochemistry",
          "questionText": "A sample decolourises bromine water and gives a white emulsion with ethanol. Which food is present?",
          "optionA": "A starch such as maize flour",
          "optionB": "A protein such as egg albumin",
          "optionC": "An unsaturated fat or oil",
          "optionD": "A reducing sugar such as glucose",
          "correctOption": "C",
          "subConcept": "Lipids",
          "explanation": "The ethanol emulsion identifies a lipid, and decolourising bromine water shows carbon to carbon double bonds, so the fat is unsaturated, typical of a plant oil such as palm or groundnut oil. Saturated fats, starch, protein and sugars do not decolourise bromine water in this way.",
          "remediationTip": "Link the two results together: emulsion means lipid, bromine decolourisation means the double bonds of an unsaturated one."
        },
        {
          "id": "q-che-biochemistry-4",
          "quizId": "quiz-che-biochemistry",
          "questionText": "Which statement about enzymes is correct?",
          "optionA": "An enzyme is consumed as it speeds a reaction",
          "optionB": "An enzyme works on any substrate placed in it",
          "optionC": "An enzyme works faster the higher the temperature, with no upper limit",
          "optionD": "An enzyme is a protein catalyst that is specific to one substrate and has an optimum temperature and pH",
          "correctOption": "D",
          "subConcept": "Enzyme action",
          "explanation": "An enzyme is a protein catalyst, unchanged by the reaction, with an active site shaped for one substrate, and it shows an optimum temperature and pH. Rate rises to the optimum then falls as heat denatures the protein, so there is an upper limit and the enzyme is not used up.",
          "remediationTip": "Sketch the rate-temperature curve, mark the optimum, and label the falling side as denaturation."
        },
        {
          "id": "q-che-biochemistry-5",
          "quizId": "quiz-che-biochemistry",
          "questionText": "Which molecule is a structural carbohydrate that humans cannot digest?",
          "optionA": "Cellulose",
          "optionB": "Sucrose",
          "optionC": "Starch",
          "optionD": "Glycogen",
          "correctOption": "A",
          "subConcept": "Carbohydrate roles",
          "explanation": "Cellulose is the straight-chain structural polymer of the plant cell wall, forming strong fibres that human enzymes cannot hydrolyse, so it passes as roughage. Starch and glycogen are storage carbohydrates and sucrose is a transport sugar, all of which act on or break down differently.",
          "remediationTip": "Contrast the coiled, digestible starch with the straight, fibrous, indigestible cellulose in a drawing."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t3-organic-chemistry-ii-industry-chemicals",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 4,
    "title": "Organic Chemistry II and Industrial/Occidental Chemistry",
    "description": "Alkanoic acids and esters, the saponification of fats into soap and the difference between soaps and detergents, addition and condensation polymers and the plastics they give, petroleum fractions and cracking, and the industrial and environmental chemistry of glass, cement, concrete, fibres and effluent in Ghana.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Alkanoic acids carry the carboxyl group -COOH; methanoic acid HCOOH and ethanoic acid CH3COOH are the first two, and dilute ethanoic acid is the sour taste of vinegar.\n• Alkanoic acids are weak acids: they turn blue litmus red, react with carbonates to give a salt, water and carbon dioxide, and with alcohols to form esters.\n• Esters form by condensation of an alkanoic acid with an alcohol, for example CH3COOH + C2H5OH giving CH3COOC2H5 + H2O; ethyl ethanoate is a sweet-smelling, volatile solvent used in glues.\n• Esterification is warmed with a few drops of concentrated sulphuric acid, which acts as a catalyst and removes some water so the equilibrium moves toward the ester.\n• A fat or oil is an ester of glycerol with long-chain fatty acids; saponification boils it with concentrated sodium hydroxide to give glycerol and the sodium salts of the fatty acids, which are soaps.\n• A soap molecule such as sodium stearate has a long non-polar hydrocarbon tail that dissolves grease and an ionic carboxylate head that dissolves in water, so it emulsifies oil into the wash water.\n• Soap lathers poorly in hard water because calcium and magnesium ions precipitate the stearate as scum; detergents are synthetic, do not form that scum and still work in hard water.\n• Some detergents are not readily biodegradable and foam on slow-moving rivers, whereas soap is biodegradable.\n• A polymer is a very large molecule built of repeating monomer units; addition polymers such as polythene from ethene, PVC from chloroethene and polystyrene keep every atom of the monomer.\n• Condensation polymers such as nylon form when monomers join and a small molecule, usually water, is eliminated at each step.\n• Thermoplastics such as polythene soften on heating and can be remoulded, while thermosetting plastics set permanently once their chains cross-link.\n• Crude oil is a mixture of hydrocarbons separated by fractional distillation; lighter, more volatile fractions distill higher up the column and burn cleaner, while heavier fractions are thicker and less useful directly.\n• Cracking breaks long alkane chains into shorter alkanes and alkenes by vaporising them over a hot catalyst, converting a heavy fraction into petrol and monomers for polymers.\n• Ceramics such as pottery, bricks and tiles are shaped from clay and fired in a kiln; glass is made by melting sand (silica) with sodium carbonate and limestone.\n• Cement is made by heating (calcining) limestone with clay in a rotary kiln; mixing cement with sand and water gives mortar, and mixing it with sand, aggregate and water gives concrete.\n• Uses in Ghana include the Nungua soap factory, shea-butter boiling in the north, fabric dyeing at Tema with its effluent, plastic recycling at Agbogbloshie, and ceramics at Agojuve; effluent must be treated before discharge.\n• Pollution from the plastics and effluent stream: polythene bags block drains and reach the Gulf of Guinea, detergents enrich rivers with phosphates, and dye wastes stain waterways; reduce, reuse, recycle and treat before releasing.",
    "detailedNotes": {
      "overview": "This closing organic topic extends the functional-group chemistry of the last lesson to the carboxyl group, the acids, esters, soaps and detergents that hang off it, and then widens the view to the giant molecules of polymers and the industrial chemistry of petroleum, silicate materials and construction. The thread is that the same carbon bonding rules that gave you alkanes and alkenes also explain the way a fat turns to soap, the way an ester smells, and the way an ethene monomer becomes a polythene bag. The second half of the lesson is applied: crude oil separated and cracked into fuels and monomers, ceramics, glass, cement and concrete as the materials of a building site, and the pollution problems these products cause in Ghana together with how effluent is treated. The topic is where WAEC likes to combine Paper 1 recall with a Paper 2 industrial process or a Paper 3 practical such as the making of a soap.",
      "introduction": "Work by linking every term to something at hand. Smell a ripe fruit or a drop of solvent and name the ester, wash your hands with a bar of soap and describe the two ends of the soap molecule, look up at a polythene bag and say the name of its monomer. Practise writing the two big equations of the topic, esterification of ethanoic acid with ethanol, and saponification of a fat with concentrated sodium hydroxide, and check that the atoms balance in both. Draw a simple fractionating column from memory and label the fractions from top to bottom. When you have these pictures in mind the industrial content of the second half stops being a list and becomes a story.",
      "realWorldContext": "In Ghana the industrial chemistry of this topic touches daily life. The Soap and Detergent factory at Nungua turns palm and coconut oils into bars by the same saponification you write on the board, while shea butter is boiled into a coarse soap in the Upper Region. A textile dye house at Tema discharges hot coloured water that must be neutralised and settled before it leaves the site; if the effluent is raw, the colour travels into a nearby stream. Plastics are a market force and a menace: bags and wrappers clog drains in Accra and wash out to the Gulf of Guinea, and scrap is hand-sorted and re-melted at Agbogbloshie. Concrete blocks and reinforced pillars are everywhere on the building sites of Spintex and Kumasi, and each one began as limestone calcined to cement. The potter at Agojuve digs local clay, shapes it and fires it into a ceramic pot, the same silicate chemistry named in the syllabus.",
      "objectives": [
        "Describe the carboxyl group, name the first alkanoic acids and state the reactions of a typical one with litmus, carbonates and alcohols",
        "Write the esterification equation of an alkanoic acid with an alcohol and name the ester formed",
        "Explain saponification of a fat, describe the structure of a soap molecule and how it removes grease",
        "Compare soaps with synthetic detergents on biodegradability and hard-water behaviour",
        "Distinguish addition polymers from condensation polymers and thermoplastics from thermosetting plastics",
        "Describe the fractional distillation of petroleum, cracking, and the making of glass, cement and concrete with Ghanaian examples"
      ],
      "sections": [
        {
          "title": "Alkanoic Acids and Esters",
          "content": "The alkanoic acids, or carboxylic acids, carry the carboxyl group -COOH, and the simplest members familiar to any student are methanoic acid HCOOH, found in ant stings and used to coagulate rubber latex, and ethanoic acid CH3COOH, whose dilute aqueous solution is vinegar. Because the carboxyl group releases only some of its hydrogen as ions, these are weak acids: they turn blue litmus red but only slowly neutralise a base compared with hydrochloric acid, they effervesce with carbonates to give a salt, water and carbon dioxide, and they react with metals such as magnesium to release hydrogen. The reaction with alcohols is the important one here. When an alkanoic acid is warmed with an alcohol and a few drops of concentrated sulphuric acid, an ester and water are formed in a reversible condensation called esterification. For ethanoic acid with ethanol, CH3COOH + C2H5OH gives CH3COOC2H5 + H2O, forming ethyl ethanoate, a sweet-smelling volatile liquid used as a solvent in glues and nail-care products. The concentrated sulphuric acid both speeds the reaction and removes some water, which shifts the equilibrium toward the ester.",
          "bulletPoints": [
            "Carboxyl group is -COOH; the first two members are methanoic HCOOH and ethanoic CH3COOH acids.",
            "Alkanoic acids are weak acids: they turn blue litmus red and give off carbon dioxide with carbonates.",
            "Esterification combines an alkanoic acid with an alcohol, giving an ester and water in a reversible reaction.",
            "Ethanoic acid plus ethanol gives ethyl ethanoate, CH3COOC2H5, a sweet-smelling, volatile solvent.",
            "Concentrated sulphuric acid acts both as a catalyst and as a drying agent that shifts the equilibrium toward the ester."
          ],
          "keyTakeaway": "A carboxylic acid plus an alcohol in the presence of concentrated sulphuric acid gives an ester and water, and the ester is what smells or acts as a solvent.",
          "realWorldExample": "The fruity smell of a ripe pineapple or banana comes from natural esters made by the fruit itself, and the solvent in a Ghanaian carpenter's quick-dry glue is very often ethyl ethanoate or a related ester."
        },
        {
          "title": "Soaps and Detergents",
          "content": "Fats and oils are esters of the triol glycerol with long-chain fatty acids such as stearic acid, and when such an ester is boiled with a concentrated solution of sodium hydroxide the alkali reverses the linkage in a reaction called saponification, giving glycerol and the sodium salts of the fatty acids, which are soaps. A soap such as sodium stearate is a molecule with two different ends: a long non-polar hydrocarbon tail that dissolves in grease and an ionic carboxylate head that dissolves in water. In the wash, the tails bury themselves in an oil stain while the heads stay in the water, and the mechanical action of rubbing or the flow of water breaks the grease into tiny droplets held in suspension, an emulsion that rinses away. The weakness of soap appears in hard water, whose dissolved calcium and magnesium ions displace sodium and form a water-insoluble stearate that comes out as a grey scum, so soap wastes its first portion making lather. Detergents are synthetic cleansing agents whose ionic head does not precipitate with calcium or magnesium, so they lather and clean in hard water. A second split is that soap is biodegradable, whereas many early detergents with straight-chain alkyl groups resisted microbial breakdown and foamed on slow rivers.",
          "bulletPoints": [
            "Fats and oils are esters of glycerol with long-chain fatty acids; the process of boiling them with alkali is saponification.",
            "Saponification of a fat with concentrated sodium hydroxide gives glycerol plus the sodium salts of the fatty acids, the soap.",
            "A soap molecule has a long non-polar hydrocarbon tail that dissolves grease and an ionic head that dissolves in water.",
            "In hard water the calcium and magnesium ions precipitate soap as scum, so soap cannot lather at once.",
            "Synthetic detergents do not form that scum and still clean in hard water, but some are less readily biodegradable than soap."
          ],
          "keyTakeaway": "Soap is the sodium salt of a fatty acid, made by saponifying a fat; its tail-in-grease and head-in-water structure is what makes it clean, and hard water defeats that structure by precipitating it.",
          "realWorldExample": "The Nungua soap factory near Accra makes bars from palm and coconut oils by the saponification route, and shea-butter producers in the north boil out the oils and cook them into a coarse washing soap, both using the same chemistry."
        },
        {
          "title": "Polymers and Plastics",
          "content": "A polymer is a giant molecule built by linking very many small repeating units called monomers. The two big routes are addition and condensation. In addition polymerisation the double bond of an unsaturated monomer partly opens and each monomer joins to its neighbours without losing any atom, so polythene is made from ethene, polypropene from propene and polyvinyl chloride (PVC) from chloroethene, and the empirical composition of the polymer equals that of the monomer. In condensation polymerisation two monomers bearing different reactive groups join while a small molecule, usually water, is eliminated at every step, and nylon and terylene are familiar examples. Plastics are grouped by how the chains are arranged: a thermoplastic such as polythene is made of separate chains that slide past one another when warm, so it softens and can be remoulded, while a thermosetting plastic, Bakelite for instance, is built into a cross-linked network that cannot be softened again once it has set. This split matters for recycling: thermoplastics can be ground and re-melted into new articles, whereas thermosets cannot.",
          "bulletPoints": [
            "A polymer is a giant molecule built of repeating monomer units joined by polymerisation.",
            "Addition polymers form from unsaturated monomers with no atoms lost, giving polythene, PVC and polystyrene.",
            "Condensation polymers form when monomers join and eliminate a small molecule such as water, as in nylon.",
            "Thermoplastics soften on heating and can be remoulded; thermosetting plastics set permanently once cross-linked.",
            "Only thermoplastics are readily re-meltable, which is why recycling at Ghanaian scrap sites handles polythene and not Bakelite."
          ],
          "keyTakeaway": "Ask two questions of any polymer: how is it made, addition or condensation, and can it be re-melted, thermoplastic or thermoset.",
          "realWorldExample": "The polythene sachet of water sold on every Ghanaian street is an addition polymer of ethene, a thermoplastic, which is why the sachets can be gathered and re-melted at a recycling yard such as Agbogbloshie."
        },
        {
          "title": "Petroleum, Cracking and Industrial Chemicals",
          "content": "Petroleum, or crude oil, is a mixture mainly of hydrocarbons, formed in the earth from the remains of ancient sea life, and it is used directly only after separation. In a fractionating column the crude is vaporised and the vapour rises through trays that cool going up, so each hydrocarbon condenses back to a liquid at the height that matches its boiling point; the shortest, most volatile chains collect at the top as refinery gas, petrol and paraffin, while the heavier gas oil, lubricating oil and residue fall lower or collect at the base. The upper fractions are in higher demand for fuels than the lower ones, so the heavy fractions are cracked: they are vaporised, mixed with steam and passed over a hot catalyst, generally at a few hundred degrees Celsius, and the long chains break into shorter alkanes for petrol and alkenes that are the monomers of polymers. Beyond organic chemistry, three materials make a building site run. Glass is made by melting sand (silica) with sodium carbonate and limestone into a tough, amorphous solid. Cement is made by heating (calcining) limestone with clay in a rotary kiln so carbon dioxide is driven off and clinker forms, and cement mixed with sand and water is mortar while cement mixed with sand, aggregate and water is concrete, whose strength in beams and slabs comes from steel reinforcement bars embedded inside it.",
          "bulletPoints": [
            "Petroleum is separated in a fractionating column, lighter fractions condensing higher up the tower and heavier ones lower down.",
            "Small fractions burn cleanly, large ones are viscous, and each fraction has its own boiling-point range and use.",
            "Cracking breaks heavy alkanes into lighter alkanes and alkenes by vapour over a hot catalyst, boosting petrol yield and making polymer monomers.",
            "Glass is made by melting silica with sodium carbonate and limestone.",
            "Cement comes from calcining limestone with clay; with sand it forms mortar and with aggregate it forms concrete, which gains tensile strength from steel reinforcement bars."
          ],
          "keyTakeaway": "Fractional distillation sorts crude oil by boiling point and cracking turns heavy fractions into useful light ones; the same furnace chemistry that gives cement starts from heating limestone.",
          "realWorldExample": "Concrete-block moulds line the Spintex road and the Kasoa outskirts, each block containing cement made by heating Ghanaian limestone with clay, mixed with aggregate and water and hardened on the site."
        }
      ],
      "commonMistakes": [
        "Confusing an alkanoic acid with a mineral acid such as hydrochloric and saying both fully ionise; alkanoic acids are weak, only partly ionised in water.",
        "Drawing the ester linkage wrongly, forgetting the oxygen between the two carbon groups in CH3COOC2H5, or writing the acid and the alcohol as the reactants of saponification rather than of esterification.",
        "Calling soap an addition polymer, or calling a polymer a monomer, so the hierarchy of monomer, polymer and repeating unit is jumbled.",
        "Saying polythene is a condensation polymer when every atom of the ethene monomer is retained in the chain and no water is lost.",
        "Reporting that thermosetting plastics can be re-melted and recycled like thermoplastics, which wastes processing time on the shop floor and is chemically wrong.",
        "Writing that detergents are always better than soaps because they lather in hard water, ignoring that many are not readily biodegradable and foam on slow-moving rivers."
      ],
      "wassceExamTips": [
        "On Paper 1, learn to draw and name the ester ethyl ethanoate, CH3COOC2H5, from memory; ester naming and structure is one of the commonest objective questions.",
        "In a Paper 2 saponification part, name the two products, glycerol and sodium salt of the fatty acid (soap), and write out the reaction of a fat with concentrated sodium hydroxide so the marker sees the word alkali.",
        "When comparing soaps and detergents, write one column each for hard-water behaviour and for biodegradability; do not answer only that one foams, since the mark scheme wants the water-quality point too.",
        "For plastics, expect a definition of a thermoplastic and a thermoset, an example of each, and one sentence on recycling implications, so state the chain structure and the property together.",
        "On the industrial half, learn the raw materials of glass, cement and concrete by name and the purpose of the fractionating column, and be ready to sketch it labelled from refinery gas at the top to residue at the bottom on Paper 3."
      ],
      "summaryChecklist": [
        "Can I state the carboxyl group, name the first two alkanoic acids and give the reactions of ethanoic acid with litmus, carbonates and alcohols?",
        "Can I write a balanced esterification equation and name the ester produced?",
        "Can I explain saponification, describe the structure of a soap molecule, and state how a detergent differs from a soap in hard water and in biodegradability?",
        "Can I distinguish addition polymers from condensation polymers and thermoplastics from thermosetting plastics with named examples?",
        "Can I describe the fractional distillation and cracking of petroleum and the making of glass, cement and concrete with Ghanaian industry examples?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-organic2-1",
        "title": "Percentage Yield of an Ester from a Laboratory Esterification",
        "problem": "In a laboratory esterification, 4.6 g of ethanol (molar mass 46) was warmed with an excess of ethanoic acid, CH3COOH + C2H5OH giving CH3COOC2H5 + H2O. If 7.04 g of ethyl ethanoate (molar mass 88) was actually collected, calculate the percentage yield of the ester.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation and read the mole ratio ethanol to ester = 1 to 1; the ethanoic acid is in excess so ethanol is the limiting reactant.",
          "Step 2 (M1): Find the moles of ethanol used, 4.6 g / 46 = 0.10 mol.",
          "Step 3 (M1): Apply the 1 to 1 ratio, so theoretical moles of ester = 0.10 mol.",
          "Step 4 (M1): Convert to theoretical mass of ester, 0.10 mol x 88 = 8.80 g.",
          "Step 5 (M1): Apply percentage yield = actual / theoretical x 100 = 7.04 / 8.80 x 100.",
          "Step 6 (A1): Percentage yield of ethyl ethanoate = 80.0 per cent."
        ],
        "keyTakeaway": "Percentage yield compares the mass actually collected with the maximum the equation allowed; the 1 to 1 esterification ratio means the moles of limiting alcohol are the moles of ester expected."
      },
      {
        "id": "ex-che-organic2-2",
        "title": "Quicklime from Limestone on a Cement or Building Site",
        "problem": "Limestone is calcium carbonate, CaCO3, and on strong heating it decomposes to quicklime, CaO, and carbon dioxide, CaCO3 giving CaO + CO2. Calculate the mass of quicklime that can be made from 50.0 g of pure calcium carbonate, and state why this same calcination step is central to cement manufacture. (Molar masses: CaCO3 = 100, CaO = 56.)",
        "stepByStepSolution": [
          "Step 1 (M1): Write the balanced equation CaCO3 giving CaO + CO2 and note the ratio 1 mole CaCO3 to 1 mole CaO.",
          "Step 2 (M1): Convert the given mass of calcium carbonate to moles, 50.0 g / 100 = 0.50 mol.",
          "Step 3 (M1): Read the equation ratio, so moles of quicklime formed = 0.50 mol.",
          "Step 4 (M1): Convert moles to mass, 0.50 mol x 56 = 28 g.",
          "Step 5 (A1): Mass of quicklime = 28 g.",
          "Step 6 (M1): Cement manufacture calcines limestone so carbon dioxide is driven off and the calcium oxide left combines with the silica and alumina of clay to form the clinker that, ground fine, becomes cement.",
          "Step 7 (A1): The reaction that gives 28 g of quicklime from 50.0 g of limestone is the same decomposition exploited in the rotary kiln to make cement."
        ],
        "keyTakeaway": "Work from a mass through moles using the equation ratio and back to a mass; the calcination of limestone to quicklime is both a school calculation and the chemical heart of cement manufacture."
      }
    ],
    "quiz": {
      "id": "quiz-che-organic2",
      "topicId": "shs3-che-t3-organic-chemistry-ii-industry-chemicals",
      "title": "Organic Chemistry II and Industrial Chemistry Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-organic2-1",
          "quizId": "quiz-che-organic2",
          "questionText": "Which sweet-smelling, volatile liquid is used as a solvent in glues and is made by warming ethanoic acid with ethanol in the presence of a few drops of concentrated sulphuric acid?",
          "optionA": "Ethanoic acid",
          "optionB": "Ethanol",
          "optionC": "Ethyl ethanoate",
          "optionD": "Methyl ethanoate",
          "correctOption": "C",
          "subConcept": "Esters",
          "explanation": "The ester from ethanoic acid and ethanol is ethyl ethanoate, CH3COOC2H5, a volatile solvent. Naming takes the alkyl group from the alcohol (ethyl) and the acid residue from the acid (ethanoate); methyl ethanoate would require methanol, while ethanol and ethanoic acid are the reactants rather than the product.",
          "remediationTip": "To name an ester, take the alcohol alkyl as the first word and the acid minus the -ic ending plus -ate as the second word."
        },
        {
          "id": "q-che-organic2-2",
          "quizId": "quiz-che-organic2",
          "questionText": "A bar of soap fails to produce a lather in a bucket of hard water. What is the chemical reason?",
          "optionA": "The soap has already dissolved before lather can form",
          "optionB": "The hydrocarbon tail of the soap is insoluble in water",
          "optionC": "Hard water neutralises the soap by acid-base reaction",
          "optionD": "The calcium and magnesium ions of the hard water precipitate the soap as an insoluble stearate scum",
          "correctOption": "D",
          "subConcept": "Soaps and hard water",
          "explanation": "Hard water supplies calcium and magnesium ions which displace sodium from the soap and form a water-insoluble stearate that comes out as scum, so no lather appears until the ions are used up. The soap dissolves normally in soft water, the hydrocarbon tail is the grease-loving part not the whole barrier, and there is no acid-base reaction happening in plain tap water.",
          "remediationTip": "Say it in one line: hard-water ions take the soap out of solution as scum, so the first portion is wasted on the ions before any lather forms."
        },
        {
          "id": "q-che-organic2-3",
          "quizId": "quiz-che-organic2",
          "questionText": "Which one of the following is a property of a thermoplastic such as polythene?",
          "optionA": "It cannot be softened by heating once made",
          "optionB": "It softens on heating and can be remoulded",
          "optionC": "It is built of strongly cross-linked chains",
          "optionD": "Its chains are permanently set by a chemical reaction",
          "correctOption": "B",
          "subConcept": "Polymers and plastics",
          "explanation": "A thermoplastic is made of separate chains that slide past one another when warm, so it softens on heating and can be moulded again, which is why thermoplastics can be recycled. Options claiming it cannot be re-softened or that its chains are cross-linked and set describe a thermosetting plastic such as Bakelite, not polythene.",
          "remediationTip": "Anchor the name to the behaviour: thermo plus plastic, heat makes it plastic again."
        },
        {
          "id": "q-che-organic2-4",
          "quizId": "quiz-che-organic2",
          "questionText": "In the cracking of a heavy petroleum fraction, long-chain alkanes are broken into",
          "optionA": "shorter alkanes and alkenes",
          "optionB": "carboxylic acids",
          "optionC": "carbon and hydrogen gas only",
          "optionD": "esters and alcohols",
          "correctOption": "A",
          "subConcept": "Petroleum and cracking",
          "explanation": "Cracking splits long alkane molecules into a shorter alkane plus an alkene, both of which are more valuable as petrol and as polymer monomers. It is a carbon-to-carbon bond-breaking process, not oxidation, so no oxygen-containing products such as carboxylic acids or esters appear, and full decomposition to carbon and hydrogen alone is not the aim.",
          "remediationTip": "Recall the two outputs together, a shorter alkane and an alkene; one feeds the petrol pump and the other feeds the polymer plant."
        },
        {
          "id": "q-che-organic2-5",
          "quizId": "quiz-che-organic2",
          "questionText": "Polythene is made by linking very many ethene molecules into one long chain. Which statement correctly describes this polymerisation?",
          "optionA": "It is addition polymerisation; the double bond opens and every atom of the monomer is retained in the polymer",
          "optionB": "It is condensation polymerisation with water eliminated at each step",
          "optionC": "It is substitution of hydrogen in a saturated alkane by a halogen",
          "optionD": "It is saponification of a fat by a strong alkali",
          "correctOption": "A",
          "subConcept": "Addition polymerisation",
          "explanation": "Addition polymerisation opens the double bond of each ethene and joins the monomers end to end without losing any atoms, so the empirical formula of the polymer matches that of the monomer. Condensation polymerisation would eliminate a small molecule such as water, substitution needs a halogen and ultraviolet light, and saponification belongs to soap making, not plastic making.",
          "remediationTip": "For addition, remember nothing is lost from the monomer; for condensation, remember a small molecule such as water is lost at each link."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t3-industrial-chemistry-fertilisers-environment",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 5,
    "title": "Industrial Chemistry, Fertilisers and Environmental Control",
    "description": "Ammonia and sulphuric acid on the industrial scale and the fertiliser industry they feed, NPK grades and soil testing in Ghana, soap making by saponification and detergent from palm kernel oil, glass, ceramics and cement, the pollution of air and water, the treatment of industrial effluent, the e-waste yard at Agbogbloshie and the principles of green chemistry.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Ammonia is made by the Haber process: N2(g) + 3H2(g) -> 2NH3(g), a reversible exothermic forward reaction run over an iron catalyst with promoters at about 450 degrees C and 200 atmospheres, with the unreacted gases recycled, and the choice of conditions is a compromise between rate and yield.\n• Sulphuric acid is made by the Contact process: S + O2 -> SO2, then 2SO2 + O2 -> 2SO3 over vanadium(V) oxide at about 450 degrees C and 1 to 2 atmospheres, and the sulphur(VI) oxide is absorbed in concentrated acid and diluted rather than bubbled straight into water.\n• From those two acids come the fertilisers: ammonium nitrate NH4NO3, ammonium sulphate (NH4)2SO4 and urea CO(NH2)2 supply nitrogen, superphosphate supplies phosphorus as P2O5, and potassium chloride from soluble salts supplies potassium as K2O.\n• Nitrogen content of the common fertilisers, worked from Ar(N) = 14, Ar(H) = 1, Ar(O) = 16, Ar(S) = 32: NH4NO3 has Mr 80 and 28 g of nitrogen, so 35.0 percent N; CO(NH2)2 has Mr 60 and 28 g of nitrogen, so 46.7 percent N; (NH4)2SO4 has Mr 132 and 28 g of nitrogen, so 21.2 percent N; NH3 itself is 82.4 percent nitrogen.\n• A bag marked NPK 15-15-15 states percent nitrogen, percent phosphorus quoted as P2O5, and percent potassium quoted as K2O, so the bag carries 15 kg of nitrogen in every 100 kg, and the other 70 kg is filler and combined material.\n• Soil testing before fertilising measures pH, texture and the plant-available nutrients, and it decides whether lime, calcium trioxocarbonate(IV), is needed to raise the pH of an acid soil, whether gypsum is needed for a sodic soil, and which NPK grade and when to apply it, side-dressed on maize and cocoa rather than broadcast.\n• Soap is made by saponification: a fat or oil boiled with sodium hydroxide solution gives the sodium salts of fatty acids and glycerol, C57H110O6 + 3NaOH -> 3C17H35COONa + C3H5(OH)3, with potassium hydroxide giving the softer or liquid soap, and common salt is added to salt the soap out of the liquor.\n• The cleansing action is molecular: the non-polar tail of a soap ion buries itself in grease while the polar carboxylate head stays in the water, so the grease is emulsified and washed away, but in hard water the stearate is precipitated as insoluble calcium stearate, the scum that wastes soap.\n• Detergents are usually sodium salts of long-chain sulphonic acids made from palm kernel or coconut oil fractions, and they do not precipitate with calcium ions, so they clean in hard water; the danger is that phosphate builders cause eutrophication and slow biodegradation leaves foam on a stream.\n• Soda-lime glass is made by melting sand with sodium trioxocarbonate(IV) and calcium trioxocarbonate(IV): Na2CO3 + CaCO3 + 6SiO2 -> Na2O.CaO.6SiO2 + 2CO2, and crushed cullet lowers the melting temperature and the fuel bill.\n• Cement is made by heating limestone with clay in a rotating kiln to about 1450 degrees C to form clinker, then grinding the clinker with about 5 percent gypsum to control setting; concrete is cement with sand and aggregate, and blocks cured with water for several days gain the strength the design requires.\n• Air pollution from industry is carbon monoxide from incomplete combustion, sulphur(IV) oxide from smelters and acid plants, and nitrogen oxides from vehicle exhaust and furnaces; the last two make acid rain, which lowers the pH of lakes and soil below 5.6, corrodes metal and stone buildings and damages leaves.\n• Water pollution from industry is untreated sewage carrying pathogens, mineral oil, hot cooling water that lowers dissolved oxygen, dyes and salts from textile works, and heavy metals such as lead, cadmium and mercury that accumulate and are never destroyed.\n• Effluent is treated in stages: screening and sedimentation for solids, biological treatment with activated sludge for dissolved organic matter, then precipitation of metals with lime, filtration and disinfection, with discharge permitted only within the pH and suspended-solids limits set by the Environmental Protection Agency.\n• At Agbogbloshie near Accra, imported cables are burned to recover copper, and the burning of plastic insulation releases dioxins and furans while acid baths and lead solder leave their metals in the soil, which is why recovery is shifting to mechanical shredding, magnetic and eddy-current separation and licensed handling.\n• Green chemistry prevents waste instead of cleaning it up, uses catalysts to cut energy, chooses safer solvents and recyclable feedstock, designs products that biodegrade, and raises atom economy, the fraction of the reactant mass that ends up in the wanted product.",
    "detailedNotes": {
      "overview": "This topic connects the chemistry of the previous pages to the plants and the consequences that a Ghanaian student can see. You will follow ammonia from the Haber process into ammonium nitrate and urea fertiliser, sulphur from the Contact process into the acid that makes superphosphate and treats bauxite, fats into soap by saponification, and sand, limestone and soda into glass, while clay and limestone become cement. Then the syllabus turns to cost: the gases that make acid rain, the effluents that kill a river, the staged treatment that a factory must run before discharge, the e-waste yard at Agbogbloshie, and the green chemistry principles that prevent pollution rather than mend it. Fertiliser calculations here are worked from stated relative atomic masses, and every equation quoted is balanced.",
      "introduction": "Study the topic in two movements. First trace a product line end to end and write the equations: nitrogen and hydrogen to ammonia, ammonia to ammonium nitrate, sulphur to sulphur(IV) oxide to sulphur(VI) oxide to the acid, and fat to soap; then attach the operating conditions and the reason for each, the catalyst, the temperature, the pressure and the recycling. Second, take one local industry, cement at Tema, a sachet-water plant, a textile dye works or a cassava-processing factory, and describe its raw material, its waste streams, and what treatment each stream needs. Practise the nitrogen-percentage calculation until it is fast, because it is the arithmetic most often failed in this part of Paper 2.",
      "realWorldContext": "The Tema industrial area holds the chemicals this topic names: sulphuric and phosphoric acid plants, the soap and detergent works that turn palm kernel oil and caustic soda into bar soap, and the cement terminals that grind clinker for the block yards along the Accra-Tema road. The blending plants and the state fertiliser purchases supply NPK 15-15-15 and urea to cocoa and maize farmers, and the CSIR Soil Research Institute at Kwadaso near Kumasi issues the soil test that says whether an acid plot needs lime before the fertiliser is bought. Textile dye works around Kumasi discharge coloured effluent that must be coagulated and neutralised. At Agbogbloshie in Old Fadama in Accra, imported cable is burned for copper, a trade that pays and poisons at the same time. The Akosombo and Kpong power stations, the charcoal trade in the Brong Ahafo and the trotro fleet on the Achimota road complete the picture of emissions a candidate must be able to name.",
      "objectives": [
        "Describe the manufacture of ammonia by the Haber process and of sulphuric acid by the Contact process, with conditions and the reason for each",
        "Name the major fertiliser compounds, calculate their percentage nitrogen from stated relative atomic masses, and explain the NPK grade and the role of soil testing",
        "Explain saponification, the cleansing action of soap, the scum formed with hard water, and the way detergents differ",
        "Describe the industrial preparation of glass, ceramics and cement with their raw materials and equations",
        "Identify the principal air and water pollutants from industry, describe staged effluent treatment, and explain the pollution problems of Agbogbloshie and the principles of green chemistry"
      ],
      "sections": [
        {
          "title": "Ammonia, Sulphuric Acid and the Fertiliser Industry",
          "content": "Two inorganic processes carry the whole fertiliser trade. In the Haber process, nitrogen from the air is combined with hydrogen, usually made from natural gas by steam reforming, over a promoted iron catalyst at about 450 degrees C and 200 atmospheres: N2(g) + 3H2(g) -> 2NH3(g), forward reaction exothermic. Le Chatelier reasoning gives the compromise the industry actually runs, since high pressure favours the two moles of ammonia against four moles of gas and raises the yield, while a low temperature would raise the yield further but make the reaction unacceptably slow, so a middle temperature with a catalyst is used and the unreacted nitrogen and hydrogen are recycled. Ammonia is then a product in its own right as anhydrous ammonia and as aqueous ammonia, and it is the feed for nitrogen fertiliser: with nitric acid it gives ammonium nitrate, NH4NO3, with sulphuric acid it gives ammonium sulphate, (NH4)2SO4, and with carbon(IV) oxide under pressure it gives urea, CO(NH2)2. Sulphuric acid is made by the Contact process, burning sulphur or roasted pyrite to sulphur(IV) oxide, oxidising it reversibly over vanadium(V) oxide at about 450 degrees C and 1 to 2 atmospheres in 2SO2 + O2 -> 2SO3, and then dissolving the sulphur(VI) oxide in concentrated acid to give oleum which is diluted, because pouring it directly into water makes a corrosive mist that will not settle.",
          "bulletPoints": [
            "Haber: N2 + 3H2 -> 2NH3, iron catalyst, about 450 degrees C, about 200 atmospheres, gases recycled.",
            "High pressure raises the yield, low temperature raises the yield but slows the rate, hence the compromise.",
            "Contact: S + O2 -> SO2, then 2SO2 + O2 -> 2SO3 over V2O5 at about 450 degrees C and 1 to 2 atmospheres.",
            "Sulphur(VI) oxide is absorbed in concentrated acid and then diluted, never bubbled straight into water.",
            "Ammonia to nitric acid gives ammonium nitrate; to sulphuric acid gives ammonium sulphate; with carbon(IV) oxide gives urea."
          ],
          "keyTakeaway": "Both processes are reversible and exothermic forward reactions, so the operating conditions are a bargain between yield, rate and cost, with a catalyst and recycling to close the gap.",
          "realWorldExample": "A fertiliser blender at Tema takes imported ammonia and sulphur, converts part of the ammonia to nitric acid, and blends NPK prills to a stated grade, while the gas workers nearby supply hydrogen; the plant runs the same equations you write, and its sulphur(IV) oxide scrubber is the reason the neighbourhood does not smell of burnt matches every day."
        },
        {
          "title": "NPK Grades, Percentage Nitrogen and Soil Testing in Ghana",
          "content": "Plants remove nutrients every harvest, and fertiliser is the replacement bill. Nitrogen drives leaf and stem growth, so a yellow stunted maize says nitrogen is short; phosphorus as phosphate supports root growth, flowering and seed fill; potassium supports disease resistance and fruit quality, and calcium, magnesium and the trace elements are needed in small but firm amounts. A bag labelled NPK 15-15-15 declares 15 percent nitrogen, 15 percent phosphorus quoted as P2O5 and 15 percent potassium quoted as K2O, so 100 kg of that fertiliser carries 15 kg of nitrogen and the balance is the combined forms plus filler. Percentage nitrogen is calculated from the formula and the relative atomic masses: for ammonium nitrate Mr = 14 + 4 + 14 + 48 = 80 with 28 g of nitrogen in it, so 28 divided by 80 times 100 gives 35.0 percent, whereas urea, CO(NH2)2 with Mr = 60, carries 28 g of nitrogen and is 46.7 percent nitrogen, which is why a farmer buying nitrogen by the bag prefers urea if he can apply it without loss. Organic manure, compost and the pod and husk wastes of cocoa and cassava return these elements too and improve soil structure, but at a much lower and more variable concentration. Soil testing decides the prescription: the laboratory reports pH, texture and plant-available phosphate and potassium, and an acid soil with a pH near 5 first needs lime, calcium trioxocarbonate(IV), because in acid ground much of the phosphate added is locked up by iron and aluminium; a neutral to slightly acid soil suits most crops, and fertiliser is then applied in small doses at planting and as side dressing rather than all at once, since the soluble nitrogen that is not taken up is simply leached below the roots by heavy rain.",
          "bulletPoints": [
            "NPK 15-15-15 means 15 percent N, 15 percent P as P2O5 and 15 percent K as K2O by mass.",
            "Nitrogen for leaf growth, phosphorus for roots and seeds, potassium for disease resistance and fruit.",
            "Percentage N: NH4NO3 = 35.0 percent, CO(NH2)2 = 46.7 percent, (NH4)2SO4 = 21.2 percent, NH3 = 82.4 percent.",
            "Soil test measures pH, texture and available nutrients before a grade and a dose are chosen.",
            "Lime, CaCO3, raises the pH of an acid soil so that phosphate is not locked by iron and aluminium."
          ],
          "keyTakeaway": "Compute the nutrient percentage from the formula, read the three NPK numbers as percentages, and let the soil test choose the grade and the timing instead of the price list.",
          "realWorldExample": "A cocoa farmer at Nkawkaw whose soil test from the laboratory at Kwadaso returns a pH of 5.0 is advised to apply lime first and only then a phosphate-rich grade, because on that acid soil the phosphate he pays for would be fixed by iron and stay out of the tree."
        },
        {
          "title": "Soap and Detergent Making",
          "content": "Soap is made by saponification, boiling a fat or oil with sodium hydroxide solution, in which the ester links of the fat are broken and the fatty acids are converted to their sodium salts while glycerol is released; using glyceryl tristearate as the fat the equation reads C57H110O6 + 3NaOH -> 3C17H35COONa + C3H5(OH)3, and common salt is then added to salt out the soap, which floats as a curd that is washed, boiled and framed. Sodium hydroxide gives a hard bar, potassium hydroxide gives the soft or liquid soap, and perfumes, colours and germicides are worked in on the mill, as in the antiseptic medical bar soap made locally at Tema. The traditional Ghanaian route uses the potash lye leached from plantain-skin or cocoa-pod ash, which is potassium hydroxide solution, boiled with palm oil, and the product is the soft black soap sold in the markets of Kumasi and Tamale, while shea butter from the northern regions supplies the fat. Cleansing is a matter of molecular shape: a soap ion has a long non-polar tail that dissolves in grease and a polar carboxylate head that stays in the water, so the grease is pulled into droplets and emulsified away. That same structure is the weakness of soap in hard water, since calcium and magnesium ions precipitate the stearate as insoluble calcium stearate, the curdy scum that floats on the bath and greys washed cloth, and no lather appears until all the calcium has been removed from the water. Detergents avoid that trap: they are commonly the sodium salts of long-chain sulphonic acids, made by sulphonating alcohols from palm kernel or coconut oil and neutralising with sodium hydroxide, and their sulphonate heads stay soluble with calcium and magnesium, so they lather in hard water and in the brackish wells of the coast. Their costs are environmental, since phosphate builders discharge nutrient that feeds algal blooms and some older detergent molecules resist biodegradation and carry foam downstream.",
          "bulletPoints": [
            "Saponification: fat boiled with sodium hydroxide gives sodium salts of fatty acids plus glycerol.",
            "Sodium hydroxide gives a hard bar; potassium hydroxide, or plantain-skin ash lye, gives soft black soap.",
            "Common salt salts out the soap curd; glycerol is a valuable by-product for cosmetics.",
            "Soap has a non-polar tail and a polar head, so it emulsifies grease into water.",
            "Scum is insoluble calcium stearate: 2C17H35COO- + Ca2+ -> (C17H35COO)2Ca."
          ],
          "keyTakeaway": "Soap is a salt of a fatty acid made by alkali hydrolysis of a fat and it fails in hard water, while a detergent is a sulphonate salt that keeps working there but brings its own waste problem.",
          "realWorldExample": "A women soap collective near Tamale leaches potash from plantain-skin ash, boils it with shea butter and palm oil, and frames the soft black soap that traders sell in Tamale Central Market, which is the same chemistry as the Tema factory line but with potassium instead of sodium."
        },
        {
          "title": "Glass, Ceramics and Cement from Local Raw Materials",
          "content": "Soda-lime glass, the type used for bottles and window pane, is made by melting ordinary sand with sodium trioxocarbonate(IV) and calcium trioxocarbonate(IV) at about 1500 degrees C in a batch written Na2CO3 + CaCO3 + 6SiO2 -> Na2O.CaO.6SiO2 + 2CO2, and the carbonate is chosen because it melts far more readily than plain silica, with the carbon(IV) oxide driven off as the batch clears. Cullet, crushed returned bottles, is fed back into the furnace because it melts at a lower temperature and so saves fuel, which is why the bottle bank matters as an industrial as well as an environmental fact. Substituting lead oxides gives the high refractive brilliance of crystal, and substituting magnesium and boron oxides gives the heat-resistant glass of laboratory beakers. Ceramics begin with clay and end in a kiln: brick earth is moulded and dried in the Ghanaian sun, then fired, and the clay minerals change to a hard mass that cannot be softened again with water, while china clay with feldspar and flint matures at a much higher temperature; roof tiles, sanitary ware and the tiles made at Tema and Kumasi are all the same operation of shaping, drying and firing. Cement is the material that builds the country, made by heating powdered limestone with clay in a rotating kiln to about 1450 degrees C, during which CaCO3(s) -> CaO(s) + CO2(g) supplies the lime that combines with the silica and alumina of the clay to form the clinker minerals; the clinker is ground with about 5 percent gypsum, which retards the set and gives the worker time to place and finish concrete. Concrete is cement, sand and clean graded aggregate mixed with measured water, and a structural mix is proportioned about 1 part cement to 2 parts sand to 4 parts aggregate, with blocks kept wet for several days so the hydration continues and the strength the engineer specified is actually obtained.",
          "bulletPoints": [
            "Soda-lime glass: Na2CO3 + CaCO3 + 6SiO2 -> Na2O.CaO.6SiO2 + 2CO2, melted near 1500 degrees C.",
            "Cullet lowers the melting temperature and saves fuel, so returned bottles are a raw material.",
            "Ceramics are shaped clay fired hard, sun-dried block earth through brick and tile to porcelain.",
            "Cement: limestone with clay heated to about 1450 degrees C to clinker, ground with about 5 percent gypsum.",
            "Gypsum controls the setting time; too little water gives weak concrete, too much gives a porous set."
          ],
          "keyTakeaway": "All three industries transform earth with heat: carbonate plus silica to glass, clay to ceramic, and limestone plus clay to clinker, and each one is fed by material found in Ghana.",
          "realWorldExample": "A block maker at Amasaman on the western edge of Accra measures his cement, sand and granite by head pans rather than by weight, keeps the mix low in water, and wets the blocks each morning for a week, because dry uncured blocks crumble below the load the Ghana Standards Authority expects in a storey of wall."
        },
        {
          "title": "Pollution, Effluent Treatment, E-waste and Green Chemistry",
          "content": "Industry pollutes in three media at once. To the air a smelter and an acid plant give sulphur(IV) oxide, a furnace and an engine give nitrogen oxides, and an incomplete fire or a faulty generator gives carbon monoxide, and the first two dissolve in rain to sulphuric and nitric acids that fall as acid rain with a pH below 5.6, killing lake life, acidifying soil, corroding roofing and dissolving the surface of limestone buildings and monuments; carbon monoxide is the quiet local killer, binding to haemoglobin in the poorly ventilated room where a generator runs during a power cut. To the water, the poisons are untreated sewage carrying the pathogens of cholera and typhoid, mineral oil, hot cooling water that lowers dissolved oxygen and suffocates fish, dye and salt from a textile works, and heavy metals such as lead, cadmium and mercury from plating and mining, which are never destroyed and accumulate in the body. The answer is staged treatment of the effluent before discharge: screening and grit removal, then primary sedimentation to drop the settleable solids, then biological oxidation of dissolved organic matter by activated sludge, then a chemical stage in which lime raises the pH and precipitates metal hydroxides, with coagulants and filtration to strip colour and suspended matter from a dye discharge, and finally disinfection before the water is released within the limits the Environmental Protection Agency sets in its permit. Solid waste now has its own chemistry, and the worst-mentioned site in the syllabus is Agbogbloshie in Old Fadama in Accra, where imported cable is burned to recover copper; burning the polyethylene and PVC insulation releases dioxins and furans, the lead solder and the acid baths used to strip copper leave lead and cadmium in the soil, and the ash is handling by bare hands. The control is licensed collection and mechanical recovery, shredding the cable and separating copper magnetically and by eddy current, with the plastic fractions sent to recyclers. Green chemistry states the prevention doctrine: design processes that produce no waste, raise atom economy so that more of the reactant mass appears in the product, use catalysts and mild conditions to cut energy, choose water or a recoverable solvent rather than a volatile organic one, and design the product to biodegrade.",
          "bulletPoints": [
            "Sulphur(IV) oxide and nitrogen oxides make acid rain below pH 5.6; carbon monoxide poisons in enclosed rooms.",
            "Water pollutants: pathogens, oil, hot cooling water, dye and salt, and heavy metals that are not destroyed.",
            "Treatment stages: screening, primary sedimentation, biological oxidation, chemical precipitation and disinfection.",
            "Lime precipitates metal hydroxides and neutralises acid effluent before discharge under an EPA permit.",
            "At Agbogbloshie, burning cable insulation releases dioxins and furans and leaves lead and cadmium in the soil."
          ],
          "keyTakeaway": "Clean-up is chemistry paid for twice, so the graded answer names the pollutant, the stage of treatment that removes it, and the prevention that would have avoided it altogether.",
          "realWorldExample": "A dye works at Kumasi that neutralises its alkaline liquor with sulphuric acid, coagulates the colour with alum and settles it before discharge spends far less on the effluent than the fine the Environmental Protection Agency levies for a brown channel into the Subin river."
        }
      ],
      "commonMistakes": [
        "Naming vanadium(V) oxide as the catalyst of the Haber process or iron as the catalyst of the Contact process; the pair is iron for ammonia synthesis and vanadium(V) oxide for the oxidation of sulphur(IV) oxide, and the examiners mark that pairing on its own.",
        "Saying that high pressure and low temperature are simply the best conditions for ammonia, without explaining the compromise: a low temperature favours yield but starves the rate, so the industry takes about 450 degrees C with a catalyst and recycles the unreacted gases.",
        "Counting only one nitrogen atom in urea, CO(NH2)2, and reporting 14 / 60 x 100 = 23.3 percent nitrogen; the formula carries two nitrogen atoms, so the nitrogen mass is 28 g, the percentage is 46.7 percent, and 35.0 percent belongs to ammonium nitrate.",
        "Reading an NPK 15-15-15 label as 45 percent nutrient in the bag without noting that the second number is phosphorus quoted as P2O5 and the third potassium quoted as K2O, so the actual element percentages are smaller.",
        "Claiming that detergents are better for the environment because they lather in hard water; their phosphate builders cause eutrophication and their branched molecules resist biodegradation, which is exactly the trade-off the question asks for."
      ],
      "wassceExamTips": [
        "A conditions question is marked in pairs, so write the number and the reason together: about 450 degrees C, because a lower temperature would give a better yield but too slow a rate; about 200 atmospheres, because pressure shifts the equilibrium towards the fewer moles of gas.",
        "In the fertiliser calculation the examiner looks for the nitrogen mass and the formula mass on separate lines before the percentage, so write 28 g nitrogen and Mr 80 for ammonium nitrate and then the division; a bare 35 percent may take only one mark.",
        "For a question on sulphur(IV) oxide or carbon monoxide, name the source, the effect and one control in that order, since Paper 2 awards a mark for each of the three.",
        "When a diagram of a blast furnace, a Contact tower or an effluent works is asked for, label the parts and the flows, because the marks are on labels rather than on the drawing.",
        "For soap and detergent keep the answer structural: soap is a carboxylate salt with a non-polar tail, scum is its calcium salt, and a detergent sulphonate stays soluble; that chain earns the full marks while a list of uses earns little."
      ],
      "summaryChecklist": [
        "Can I describe the Haber and Contact processes with their conditions, catalysts, equations and the reasons for each condition?",
        "Can I name four nitrogen fertilisers, calculate their percentage nitrogen and interpret an NPK grade on a bag?",
        "Can I explain saponification, the cleansing action of soap, scum formation and the advantage of detergents?",
        "Can I write the equations for glass and cement manufacture and name the raw materials and the role of gypsum and cullet?",
        "Can I identify the main air and water pollutants, describe the stages of effluent treatment, and state the green chemistry approach to waste?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-industrial-1",
        "title": "Fertiliser Top-dressing Calculated from Percentage Nitrogen",
        "problem": "A maize farmer is advised by the soil laboratory to apply 70 kg of nitrogen per hectare using ammonium nitrate, NH4NO3. His holding is 6.0 hectares. Calculate the percentage of nitrogen in ammonium nitrate, the mass of fertiliser needed per hectare, and the total mass for the whole farm. Use Ar(N) = 14, Ar(H) = 1, Ar(O) = 16.",
        "stepByStepSolution": [
          "Step 1 (M1): Count the atoms in NH4NO3: 2 nitrogen, 4 hydrogen and 3 oxygen, so Mr = (2 x 14) + (4 x 1) + (3 x 16) = 28 + 4 + 48 = 80.",
          "Step 2 (M1): The mass of nitrogen in one formula unit is 2 x 14 = 28 g, and percentage nitrogen = mass of nitrogen / Mr x 100.",
          "Step 3 (A1): Percentage nitrogen = 28 / 80 x 100 = 35.0 percent, so every 100 kg of the fertiliser carries 35 kg of nitrogen.",
          "Step 4 (M1): Per hectare the mass required is the wanted nitrogen divided by the fraction present: 70 kg / 0.350, which is the same working as 70 x 100 / 35.",
          "Step 5 (A1): Mass per hectare = 70 x 100 / 35 = 200 kg of ammonium nitrate.",
          "Step 6 (A1): For the whole holding, 200 kg x 6.0 = 1200 kg, that is 1.20 tonnes of fertiliser, which as 50 kg bags is 24 bags.",
          "Step 7 (M1): Note the check: 1200 kg of a 35.0 percent fertiliser supplies 1200 x 35 / 100 = 420 kg of nitrogen, and 70 kg x 6.0 = 420 kg, so the two routes agree."
        ],
        "keyTakeaway": "Convert the nutrient recommendation into a fertiliser mass by dividing by the decimal fraction of nitrogen, and always prove the answer by multiplying back."
      },
      {
        "id": "ex-che-industrial-2",
        "title": "Lime Needed to Neutralise an Acid Effluent before Discharge",
        "problem": "An electroplating works discharges effluent containing sulphuric acid at 0.200 mol/dm3. Calculate the mass of calcium hydroxide needed to neutralise the acid in 500 dm3 of the effluent, and state what is done with the solid that forms. Use Ar(Ca) = 40, Ar(O) = 16, Ar(H) = 1, Ar(S) = 32.",
        "stepByStepSolution": [
          "Step 1 (M1): Write and balance the neutralisation: Ca(OH)2(s or aq) + H2SO4(aq) -> CaSO4(s or aq) + 2H2O(l), one mole of lime to one mole of the acid.",
          "Step 2 (M1): Compute the relative formula masses: Mr(Ca(OH)2) = 40 + 2(16 + 1) = 74 and Mr(H2SO4) = (2 x 1) + 32 + (4 x 16) = 98.",
          "Step 3 (M1): Find the moles of acid in the volume: n = concentration x volume = 0.200 mol/dm3 x 500 dm3 = 100 mol of sulphuric acid.",
          "Step 4 (M1): The 1 to 1 ratio means 100 mol of calcium hydroxide are required, so mass = n x Mr = 100 x 74.",
          "Step 5 (A1): Mass of calcium hydroxide = 7400 g = 7.40 kg, the same answer reached by working the dose as 0.200 x 74 = 14.8 g per dm3 and then multiplying by 500 dm3.",
          "Step 6 (M1): Reasonableness check by the other route: the acid present is 100 x 98 = 9800 g = 9.8 kg, and 7.4 kg of lime neutralises 9.8 kg of the acid, which matches the mass ratio 74 to 98.",
          "Step 7 (A1): Final answer: 7.40 kg of calcium hydroxide for the 500 dm3. The calcium sulphate formed is sparingly soluble, so the effluent is held in a settling tank where the solid and the precipitated metal hydroxides fall to the bottom, the liquor is checked to a pH between 6 and 9 before discharge, and the sludge is dewatered and taken to a licensed dump."
        ],
        "keyTakeaway": "Neutralisation dosing is a mole calculation with a settling step attached: the reagent mass comes from the ratio, and the precipitate must be removed before the water is released."
      }
    ],
    "quiz": {
      "id": "quiz-che-industrial-chemistry",
      "topicId": "shs3-che-t3-industrial-chemistry-fertilisers-environment",
      "title": "Industrial Chemistry and Environment Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-industrial-1",
          "quizId": "quiz-che-industrial-chemistry",
          "questionText": "Which catalyst and conditions are used in the industrial synthesis of ammonia by the Haber process?",
          "optionA": "Vanadium(V) oxide at about 450 degrees C and 1 to 2 atmospheres",
          "optionB": "Platinum at room temperature and normal pressure",
          "optionC": "Nickel at about 150 degrees C and 1 atmosphere",
          "optionD": "Promoted iron at about 450 degrees C and about 200 atmospheres",
          "correctOption": "D",
          "subConcept": "Haber process conditions",
          "explanation": "Ammonia is made over a promoted iron catalyst at about 450 degrees C and 200 atmospheres, with the unreacted gases recycled. Option A describes the Contact process catalyst and its low pressure, platinum and nickel are not used for this reaction, and a low pressure would leave almost all the nitrogen and hydrogen uncombined.",
          "remediationTip": "Make a two-column card of the two processes with gas, catalyst, temperature, pressure and reason, and learn them side by side."
        },
        {
          "id": "q-che-industrial-2",
          "quizId": "quiz-che-industrial-chemistry",
          "questionText": "A bag of fertiliser marked NPK 15-15-15 contains",
          "optionA": "15 kg of nitrogen in every 150 kg of the fertiliser",
          "optionB": "15 percent nitrogen, 15 percent phosphorus quoted as P2O5 and 15 percent potassium quoted as K2O",
          "optionC": "15 percent nitrogen, 15 percent phosphate ion and 15 percent potash ion by mass",
          "optionD": "45 percent total nitrogen counting the other two figures as nitrogen",
          "correctOption": "B",
          "subConcept": "NPK grades",
          "explanation": "The three numbers are percentages of nitrogen, of phosphorus expressed as phosphorus(V) oxide P2O5, and of potassium expressed as potassium oxide K2O, so 100 kg of the bag carries 15 kg of nitrogen. Option A changes the base mass, option C names the ions rather than the reporting oxides, and option D treats phosphorus and potassium figures as nitrogen.",
          "remediationTip": "Rewrite a grade as three sentences, one per number with the oxide named, until the convention is automatic."
        },
        {
          "id": "q-che-industrial-3",
          "quizId": "quiz-che-industrial-chemistry",
          "questionText": "What is the percentage nitrogen in urea, CO(NH2)2? Use Ar(C) = 12, Ar(O) = 16, Ar(N) = 14, Ar(H) = 1.",
          "optionA": "23.3 percent",
          "optionB": "35.0 percent",
          "optionC": "46.7 percent",
          "optionD": "60.0 percent",
          "correctOption": "C",
          "subConcept": "Fertiliser nitrogen calculation",
          "explanation": "Mr(CO(NH2)2) = 12 + 16 + (2 x 14) + (4 x 1) = 60, and the two nitrogen atoms contribute 28 g, so percentage nitrogen = 28 / 60 x 100 = 46.7 percent. The value 23.3 percent comes from using only one nitrogen atom, 35.0 percent is the value for ammonium nitrate, and 60.0 percent is the formula mass quoted as a percentage.",
          "remediationTip": "Write the nitrogen mass and the formula mass as two labelled numbers before dividing, and check that the percentage cannot exceed 46.7 for urea."
        },
        {
          "id": "q-che-industrial-4",
          "quizId": "quiz-che-industrial-chemistry",
          "questionText": "Which pair of gases is chiefly responsible for acid rain?",
          "optionA": "Sulphur(IV) oxide and nitrogen oxides",
          "optionB": "Carbon(IV) oxide and methane",
          "optionC": "Hydrogen chloride and ammonia",
          "optionD": "Oxygen and nitrogen",
          "correctOption": "A",
          "subConcept": "Air pollution",
          "explanation": "Sulphur(IV) oxide from smelters and acid plants and nitrogen oxides from high-temperature burning dissolve in rainwater to sulphuric and nitric acids, giving a pH below 5.6. Carbon(IV) oxide makes normal rain slightly acid at about pH 5.6 but is not the acid-rain culprit, methane is a fuel gas, and hydrogen chloride with ammonia are not the industrial gases implicated.",
          "remediationTip": "List the source, the acid formed and the effect for each of the two gases and learn the three-column table."
        },
        {
          "id": "q-che-industrial-5",
          "quizId": "quiz-che-industrial-chemistry",
          "questionText": "Why is the burning of imported electric cable at a site such as Agbogbloshie dangerous?",
          "optionA": "It makes the copper too soft to sell",
          "optionB": "The plastic insulation is recovered intact for reuse",
          "optionC": "The insulation burns to dioxins and furans and the residues leave lead and cadmium in the soil",
          "optionD": "The cables absorb water and burst the drums that store them",
          "correctOption": "C",
          "subConcept": "E-waste and its control",
          "explanation": "Burning polyethylene and PVC insulation releases toxic dioxins and furans, and the lead solder, acid stripping baths and ash leave lead and cadmium in the soil and groundwater, which is why mechanical shredding with magnetic and eddy-current separation is the licensed method. Copper softness, recovery of intact plastic and bursting drums are not the hazards described by the chemistry.",
          "remediationTip": "Name the pollutant, the medium it enters and the safer recovery method for each e-waste stream until the trio is automatic."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t3-transition-metals-oxidation-states",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Transition Metals: Oxidation States, Coloured Ions and Catalysis",
    "description": "The position and general properties of the d-block, the variable oxidation states of iron, copper, manganese and chromium, coloured solutions and complex ions, the precipitate trend with sodium hydroxide and ammonia, catalysis in industry and in the body, alloy hardness, rusting and its prevention, and the extraction and uses of these metals in Ghana.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Transition metals occupy the d-block between groups II and III; they are metals with high density and melting point, they form coloured compounds, they show variable oxidation states and many of them and their compounds are catalysts.\n• A variable oxidation state means the same element forms ions and compounds in more than one oxidation number, so iron occurs as iron(II) and iron(III), copper as copper(I) and copper(II), and manganese from +2 up to +7.\n• To find an oxidation number set the sum of the numbers equal to the charge on the species: in KMnO4 potassium is +1 and oxygen is -2, so manganese is +7, and in the dichromate(VI) ion the chromium is +6.\n• Coloured ions arise from partly filled inner shells; copper(II) solution is blue, iron(II) pale green, iron(III) yellow to brown, and manganate(VII) deep purple.\n• With sodium hydroxide, iron(II) gives a dirty-green precipitate, iron(III) a reddish-brown one and copper(II) a blue one, and all three are insoluble in excess.\n• Ammonia behaves like a base but dissolves copper(II) hydroxide in excess to give a deep-blue complex ion; this is the confirmatory test for copper(II).\n• Catalysis: iron catalyses the Haber process, vanadium(V) oxide the Contact process, manganese(IV) oxide speeds the breakdown of hydrogen peroxide, nickel hydrogenates oils, and enzymes catalyse reactions in the body.\n• Alloys such as steel, brass and bronze are harder than the pure metal because atoms of a different size disturb the layers and stop them sliding.\n• Rusting needs both oxygen and water, and salt speeds it up; it is prevented by painting, greasing, plating or galvanising with zinc, the last giving sacrificial protection.\n• Ghana uses these metals at Tarkwa and Obuasi for iron and gold, at Nsuta for manganese, and in steel for building, copper for wiring and brass for fittings.",
    "detailedNotes": {
      "overview": "Transition metals are the elements of the d-block, and they behave differently from the group I and group II metals studied earlier because their atoms can use inner d electrons in bonding. This gives the four signature properties WASSCE tests: variable oxidation states, coloured ions and compounds, catalytic activity, and the formation of complex ions. In this topic you will learn to place these metals in the table, to work out the oxidation number of iron, copper, manganese and chromium in a given compound, and to explain why their solutions carry colour. You will master the two reagents of qualitative analysis, sodium hydroxide and ammonia, and the precipitate colours and the deep-blue copper complex that examiners ask for. You will connect catalysis to real industry, the Haber and Contact processes and the hydrogenation of oils, and connect alloy hardness and rusting prevention to Ghanaian building and coastal corrosion. The worked examples fix the arithmetic of oxidation numbers and of iron content in ore.",
      "introduction": "Draw the d-block and name the metals you will meet, iron, copper, manganese, chromium and nickel. Make a table of oxidation numbers and compute each one from the rule that the numbers add to the charge, checking manganese from +2 to +7 and chromium at +3 and +6. Set up the precipitate tests in the laboratory with sodium hydroxide and with ammonia, and record colour and the effect of excess for iron(II), iron(III) and copper(II). Then list four industrial catalysts with the process each serves and one body enzyme. Finally write the conditions for rusting and three methods of stopping it, and note where Ghana obtains and uses these metals. Do the two worked examples carefully, showing the oxidation-number sum and the iron mass calculation.",
      "realWorldContext": "Ghanaian industry runs on transition metals. The mines at Tarkwa and Obuasi win iron ore and gold, both d-block metals, and the Nsuta mine in the Western Region is a source of manganese used in steel-making. Building sites in Accra and Kumasi depend on steel reinforcement bars, an alloy of iron, whose strength and resistance to rust decide the life of a block structure, and the salt air at Tema and Takoradi ports attacks bare iron far faster than inland, so painted and galvanised members are specified near the coast. Copper wiring carries current in homes and mobile-money kiosks, and brass fittings resist corrosion in taps and locks. In the food industry nickel catalyses the hydrogenation of palm and cottonseed oils into margarine and cooking shortening. The chemistry of variable oxidation states is also visible at a treatment works, where iron and manganese compounds are oxidised and precipitated out of raw water.",
      "objectives": [
        "Place transition metals in the d-block and state four general properties that distinguish them from group I and II metals",
        "Calculate the oxidation number of iron, copper, manganese and chromium in named compounds and ions",
        "Predict and describe the precipitates formed with sodium hydroxide and ammonia and identify the copper complex ion",
        "Explain catalysis, alloy hardness and rusting prevention and relate them to extraction and uses in Ghana"
      ],
      "sections": [
        {
          "title": "d-Block Position and Variable Oxidation States",
          "content": "The transition elements occupy the central block of the table, the d-block, lying between the reactive group I and group II metals on the left and the main-group metals on the right. They are typical metals of high density and usually high melting point, good conductors, and they lose electrons readily to form positive ions. What sets them apart is that their atoms can lose different numbers of electrons from partly filled inner shells, so the same element shows several oxidation states. Iron forms iron(II) and iron(III); copper forms copper(I) and copper(II); manganese runs from +2 in the manganate(II) ion to +7 in the manganate(VII) ion; chromium occurs mainly at +3 and +6. To state an oxidation number you apply one rule, that the oxidation numbers of all the atoms add to the charge on the species, with oxygen taken as -2 and hydrogen as +1 unless in a peroxide or a metal hydride. Thus in potassium manganate(VII), KMnO4, potassium contributes +1 and the four oxygens contribute -8, so manganese must be +7 to make the sum zero, and in the dichromate(VI) ion, Cr2O7 with charge -2, the seven oxygens give -14, so the two chromium atoms together give +12 and each is +6.",
          "bulletPoints": [
            "Transition metals fill the d-block between groups II and III.",
            "They show variable oxidation states because inner electrons can be lost.",
            "Oxidation numbers add to zero for a compound and to the charge for an ion.",
            "In KMnO4 manganese is +7; in Cr2O7 2- chromium is +6.",
            "Common states are iron +2 and +3, copper +1 and +2, chromium +3 and +6."
          ],
          "keyTakeaway": "A transition metal changes its oxidation number by losing different counts of d electrons, so the oxidation number is always found by forcing the sum of the numbers to match the charge.",
          "realWorldExample": "The reddish stain left on a bathroom fitting in Accra is iron going from the iron(II) state in solution to iron(III) in rust, one visible change of oxidation state in the hard water of the supply."
        },
        {
          "title": "Coloured Ions, Complexes and Tests with Base and Ammonia",
          "content": "The partly filled shells of a transition metal absorb part of the visible light, so its ions in solution are coloured, which is exactly what a group I or II ion is not. Copper(II) solution is blue, iron(II) is pale green, iron(III) is yellow to brown, chromium(III) is green, and manganate(VII) is a deep purple used as its own indicator in titration. Two reagents separate these ions in qualitative analysis. Sodium hydroxide solution precipitates the insoluble hydroxides: iron(II) gives a dirty-green precipitate that browns in air, iron(III) a reddish-brown precipitate, and copper(II) a blue precipitate, and none of these three redissolves in excess sodium hydroxide. Ammonia acts first like a base, giving the same hydroxide precipitates, but in excess it is different, because it forms soluble complex ions with some metals. Copper(II) hydroxide dissolves in excess ammonia to give a deep-blue solution of the tetraamminecopper(II) complex ion, and that strong blue colour in excess ammonia is the confirmatory test for copper(II). Learning the colour and the solubility in excess for each ion is the whole of the Paper 3 cation question.",
          "bulletPoints": [
            "Coloured solutions arise from partly filled inner shells absorbing visible light.",
            "Sodium hydroxide gives green iron(II), reddish-brown iron(III) and blue copper(II) precipitates.",
            "The iron, copper and chromium hydroxides do not dissolve in excess sodium hydroxide.",
            "Excess ammonia dissolves copper(II) to a deep-blue complex ion, confirming copper(II).",
            "Manganate(VII) is deep purple and dichromate(VI) orange, both used in redox titration."
          ],
          "keyTakeaway": "Record the colour of the precipitate and whether it dissolves in excess reagent, because those two observations, not the metal name, are what the examiner marks.",
          "realWorldExample": "A school laboratory technician at Cape Coast separates unknown bottles of iron(III) chloride from copper(II) sulfate by adding sodium hydroxide, the first giving reddish-brown and the second a blue precipitate."
        },
        {
          "title": "Catalysis, Alloys, Rusting and Uses in Ghana",
          "content": "Many transition metals and their compounds are catalysts because variable oxidation states let them pass electrons to and from reacting molecules. Finely divided iron with promoters catalyses the Haber process making ammonia, vanadium(V) oxide catalyses the Contact process making sulphur trioxide for sulphuric acid, manganese(IV) oxide speeds the decomposition of hydrogen peroxide into oxygen, and nickel catalyses the hydrogenation of unsaturated vegetable oils into solid fat. In the body the same idea appears as enzymes, and metals such as iron in haemoglobin carry out their work at a metal centre. Alloys are mixtures of a transition metal with another element, and they are harder than the pure metal because atoms of a different size disturb the regular layers, so the layers cannot slide over one another easily; steel is iron with carbon, brass is copper with zinc, and bronze is copper with tin. Rusting is the corrosion of iron that needs both oxygen and water, and salt or acid speeds it up, which is why coastal structures at Tema and Takoradi corrode fast. It is prevented by coating with paint, grease or a plating metal, or by galvanising with zinc, which protects even when the coating is scratched because the more reactive zinc is sacrificed in place of the iron.",
          "bulletPoints": [
            "Iron catalyses the Haber process and vanadium(V) oxide the Contact process.",
            "Manganese(IV) oxide and nickel are catalysts for peroxide breakdown and oil hydrogenation.",
            "Alloys are harder because different-sized atoms stop the layers sliding.",
            "Rusting needs oxygen and water; salt and acid speed it up.",
            "Galvanising with zinc gives sacrificial protection even where the coating is broken."
          ],
          "keyTakeaway": "The usefulness of transition metals comes from the same two properties, the ability to change oxidation state, which gives catalysis, and the alloying that gives hard, structural materials.",
          "realWorldExample": "A reinforced-concrete block wall near the Tema harbour weathers badly because salt spray drives rusting of the steel bars, so engineers specify galvanised or epoxy-coated reinforcement for coastal building."
        }
      ],
      "commonMistakes": [
        "Forgetting that oxidation numbers must add to the charge of the ion, so in Cr2O7 2- students set the sum to zero and get the wrong chromium value; the sum is -2, giving chromium +6.",
        "Calling the iron and copper hydroxides soluble in excess sodium hydroxide; they are insoluble, and it is aluminium and lead hydroxides that dissolve, so do not transfer their amphoteric behaviour.",
        "Reporting the copper-ammonia test as a pale-blue precipitate that is permanent; the correct observation is a blue precipitate that dissolves in excess ammonia to a deep-blue solution.",
        "Saying rusting needs only water or only air; both oxygen and water must be present, and that is why a dry or an air-free tube does not rust.",
        "Naming a catalyst without the process, or writing potassium manganate(VII) as an acid in a redox equation when it is the oxidising agent acting in acid solution."
      ],
      "wassceExamTips": [
        "Paper 1 likes a single oxidation-number calculation, so always write the sum equal to the charge and solve, and state the answer with a sign such as +7 for manganese.",
        "For the cation table in Paper 3 record the colour and the solubility in excess for each of sodium hydroxide and ammonia; the deep-blue result in excess ammonia is the copper(II) confirmatory mark.",
        "In a catalysis question name the metal and the process together, iron with Haber and vanadium(V) oxide with Contact, because the pair earns the mark, not the metal alone.",
        "For rusting state the two conditions and one prevention with its reason, for example galvanising where the more reactive zinc is sacrificed, to gain full marks.",
        "When asked why alloys are harder, use the layer argument, different-sized atoms disturb the layers so they cannot slide, rather than a vague statement about strength."
      ],
      "summaryChecklist": [
        "Can I place the transition metals in the d-block and list four properties that set them from group I and II metals?",
        "Can I calculate the oxidation number of manganese in KMnO4 and chromium in Cr2O7 2- with the sum rule?",
        "Can I describe the precipitates with sodium hydroxide and the deep-blue complex with excess ammonia?",
        "Can I name four catalysts with their processes and explain why alloys are harder than pure metals?",
        "Can I state the conditions for rusting and three methods of prevention including galvanising?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-transition-1",
        "title": "Finding Oxidation Numbers in Manganate(VII) and Dichromate(VI)",
        "problem": "Calculate the oxidation number of manganese in potassium manganate(VII), KMnO4, and of chromium in the dichromate(VI) ion, Cr2O7 2-. Take potassium as +1, oxygen as -2, and apply the rule that oxidation numbers add to the charge on the species.",
        "stepByStepSolution": [
          "Step 1 (M1): For KMnO4 write the sum rule: (oxidation number of K) + (oxidation number of Mn) + 4 x (oxidation number of O) = 0, because the compound is neutral.",
          "Step 2 (M1): Substitute the known values, (+1) + (Mn) + 4 x (-2) = 0, which gives (+1) + (Mn) - 8 = 0.",
          "Step 3 (A1): Solve for manganese: (Mn) = 8 - 1 = +7.",
          "Step 4 (M1): For Cr2O7 2- set the sum equal to the ion charge: 2 x (Cr) + 7 x (-2) = -2.",
          "Step 5 (M1): Simplify, 2 x (Cr) - 14 = -2, so 2 x (Cr) = +12.",
          "Step 6 (A1): Divide by two: the oxidation number of chromium is +6.",
          "Step 7 (M1): State the meaning: manganese at +7 and chromium at +6 are the highest common states of these metals, which is why both ions are strong oxidising agents that are reduced during titration.",
          "Step 8 (A1): Final answer: manganese is +7 in KMnO4 and chromium is +6 in Cr2O7 2-."
        ],
        "keyTakeaway": "Force the sum of the oxidation numbers to equal the charge, substitute oxygen as -2 and the group I metal as +1, and solve for the unknown metal."
      },
      {
        "id": "ex-che-transition-2",
        "title": "Iron Obtained from Haematite Ore",
        "problem": "Haematite is iron(III) oxide, Fe2O3, and it is reduced in the blast furnace by carbon monoxide. A 200 g sample of ore is 80 per cent pure Fe2O3. Calculate the mass of iron(III) oxide present and the mass of iron that can be obtained from it. Use relative atomic masses Fe = 56 and O = 16.",
        "stepByStepSolution": [
          "Step 1 (M1): Mass of iron(III) oxide = purity x sample mass = 0.80 x 200 = 160 g.",
          "Step 2 (M1): Relative molecular mass of Fe2O3 = (2 x 56) + (3 x 16) = 112 + 48 = 160.",
          "Step 3 (M1): Fraction that is iron = mass of iron in the formula divided by the relative molecular mass = 112 / 160.",
          "Step 4 (A1): Percentage of iron = (112 / 160) x 100 = 70%.",
          "Step 5 (M1): Mass of iron = fraction of iron x mass of iron(III) oxide = 0.70 x 160.",
          "Step 6 (A1): Mass of iron = 112 g.",
          "Step 7 (M1): Show the reduction with a balanced equation, Fe2O3 + 3 CO gives 2 Fe + 3 CO2, and confirm the count, iron 2, carbon 3 and oxygen 3 + 3 = 6 on each side.",
          "Step 8 (A1): Final answer: the ore holds 160 g of Fe2O3 and this yields 112 g of iron, which is 70 per cent of the oxide."
        ],
        "keyTakeaway": "The iron in an ore is found by scaling the oxide mass to purity and then taking the iron fraction of the formula mass, and the balanced reduction equation confirms the chemistry."
      }
    ],
    "quiz": {
      "id": "quiz-che-transition",
      "topicId": "shs3-che-t3-transition-metals-oxidation-states",
      "title": "Transition Metals Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-transition-1",
          "quizId": "quiz-che-transition",
          "questionText": "Which is a characteristic property of the transition metals?",
          "optionA": "They form only one oxidation state in their compounds",
          "optionB": "Their compounds are always colourless",
          "optionC": "They show variable oxidation states and form coloured compounds",
          "optionD": "They are gases at room temperature",
          "correctOption": "C",
          "subConcept": "General properties",
          "explanation": "The defining features of the d-block are variable oxidation states, coloured ions and compounds, catalytic activity and complex-ion formation. They are solid metals, they are coloured, and they do not show just one oxidation state, so only option C is correct.",
          "remediationTip": "List the four signature properties on a card and use them to reject every false option."
        },
        {
          "id": "q-che-transition-2",
          "quizId": "quiz-che-transition",
          "questionText": "What is the oxidation number of manganese in potassium manganate(VII), KMnO4?",
          "optionA": "+2",
          "optionB": "+4",
          "optionC": "+5",
          "optionD": "+7",
          "correctOption": "D",
          "subConcept": "Oxidation numbers",
          "explanation": "With potassium at +1 and each oxygen at -2, the sum equation is 1 + Mn - 8 = 0, giving manganese +7. This high state is why the manganate(VII) ion is a strong oxidising agent used in titration.",
          "remediationTip": "Re-do the sum 1 + x - 8 = 0 until the value +7 is automatic."
        },
        {
          "id": "q-che-transition-3",
          "quizId": "quiz-che-transition",
          "questionText": "Excess ammonia solution added to copper(II) sulfate gives which result?",
          "optionA": "A deep-blue solution of a complex ion",
          "optionB": "A reddish-brown precipitate that is insoluble",
          "optionC": "A dirty-green precipitate that dissolves again",
          "optionD": "No visible change at all",
          "correctOption": "A",
          "subConcept": "Ammonia test",
          "explanation": "Ammonia first precipitates blue copper(II) hydroxide, then in excess it dissolves it to form the deep-blue tetraamminecopper(II) complex ion. Reddish-brown belongs to iron(III) and dirty-green to iron(II), so the strong blue solution is the copper(II) confirmation.",
          "remediationTip": "Write the two stages, blue precipitate then deep-blue solution, beside the copper ion in your table."
        },
        {
          "id": "q-che-transition-4",
          "quizId": "quiz-che-transition",
          "questionText": "Why is an alloy such as steel harder than the pure iron it is made from?",
          "optionA": "Because it contains more electrons per atom",
          "optionB": "Because atoms of a different size disturb the layers so they cannot slide easily",
          "optionC": "Because the alloy always melts at a higher temperature",
          "optionD": "Because the alloy is a compound with fixed ratios",
          "correctOption": "B",
          "subConcept": "Alloys and hardness",
          "explanation": "Pure metal layers slide easily, giving softness. In an alloy the added atoms are of a different size, which upsets the regular layers and prevents them sliding, so the metal becomes harder. An alloy is a mixture, not a fixed-ratio compound.",
          "remediationTip": "Draw two rows of equal atoms sliding, then a row distorted by a differently sized atom that stops the slide."
        },
        {
          "id": "q-che-transition-5",
          "quizId": "quiz-che-transition",
          "questionText": "Galvanising protects iron even when the coating is scratched because zinc does what?",
          "optionA": "It seals the scratch with a thicker layer of itself",
          "optionB": "It reflects sunlight away from the bare iron",
          "optionC": "It makes the iron chemically inert permanently",
          "optionD": "It is more reactive and corrodes in place of the iron",
          "correctOption": "D",
          "subConcept": "Rusting prevention",
          "explanation": "Zinc is more reactive than iron, so at a break it oxidises first and passes electrons to the iron, sacrificing itself. This sacrificial protection continues after the coating is scratched, unlike an inert tin coat which lets the exposed iron rust.",
          "remediationTip": "Place zinc above iron in the reactivity series and note that the higher metal gives way to protect the lower."
        }
      ]
    }
  },
  {
    "id": "shs3-che-t3-redox-electrode-potentials-cells",
    "subjectId": "chemistry",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Redox Reactions, Electrode Potentials and Cells",
    "description": "The rules for oxidation numbers and how they identify oxidation and reduction, half-equations and the balancing of redox reactions, ionic equations for displacement, the electrochemical series and standard electrode potentials, calculation of cell electromotive force, construction of a chemical cell, corrosion protection, and titration with manganate(VII) and dichromate(VI).",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Oxidation is the loss of electrons and a rise in oxidation number; reduction is the gain of electrons and a fall in oxidation number, and the two always happen together in a redox reaction.\n• Rules for oxidation numbers: an element in its free state is 0, a simple ion equals its charge, hydrogen is +1, oxygen is -2, group I is +1 and group II is +2, and the numbers add to the charge on the species.\n• An oxidising agent is itself reduced and a reducing agent is itself oxidised, so the agent causes the change on the other substance.\n• Every redox change is split into two half-equations, one showing loss of electrons and one showing gain; multiply them so the electrons cancel and add them for the overall ionic equation.\n• Displacement follows the series: a more reactive metal gives electrons to the ion of a less reactive metal, so zinc in copper(II) solution gives zinc(II) plus copper, Zn + Cu2+ gives Zn2+ + Cu.\n• The electrochemical series ranks metals by standard electrode potential, measured against the standard hydrogen electrode at 25 degrees C, 1 mol per dm3 and 101 kPa.\n• A more negative electrode potential means the metal is oxidised more readily and is the stronger reducing agent; a more positive value means its ion is reduced more readily.\n• Cell e.m.f. equals the electrode potential of the reduction half-cell minus that of the oxidation half-cell, so for copper plus zinc, +0.34 - (-0.76) = +1.10 V.\n• A chemical cell has two different electrodes in their electrolytes, a salt bridge or porous barrier to complete the circuit, and an external wire where electrons flow from anode to cathode.\n• Corrosion is prevented by coating, by plating, or by connecting the metal to a more reactive sacrificial anode such as zinc or magnesium.\n• In a redox titration manganate(VII) oxidises iron(II) in the ratio 1 to 5, MnO4- + 5Fe2+ + 8H+ gives Mn2+ + 5Fe3+ + 4H2O, and it is its own indicator, giving a permanent faint pink at the end point.",
    "detailedNotes": {
      "overview": "Redox, the simultaneous oxidation and reduction of reacting species, is the backbone of electrochemistry and of the calculations WASSCE sets in Paper 2 and Paper 3. This topic begins with the rules for assigning oxidation numbers, because a change in oxidation number is the reliable test for whether a substance has been oxidised or reduced, far safer than a vague recall of oxygen or hydrogen. You will then write half-equations, balance the electrons, and combine them into overall ionic equations, the method that balances a redox equation from scratch. The electrochemical series and standard electrode potentials turn that chemistry into a prediction of which metal displaces which and of the voltage a cell gives, and you will calculate cell e.m.f. by subtracting the oxidation potential from the reduction potential. Finally you will apply the same electron bookkeeping to corrosion protection and to titration with manganate(VII) and dichromate(VI), where a fixed mole ratio converts a burette reading into a concentration.",
      "introduction": "Start by assigning oxidation numbers in a list of species, from free iron at zero to manganese in the manganate(VII) ion at +7, and mark which atom is oxidised and which reduced in each given reaction. Then practise the half-equation method: write the two halves, balance atoms other than oxygen and hydrogen, balance oxygen with water, balance hydrogen with hydrogen ions, and balance charge with electrons, before equalising and cancelling the electrons. Build a cell from the series and compute its e.m.f., labelling the anode, the cathode and the direction of electron flow. Apply the ratio 1 to 5 in a manganate titration to find an iron(II) concentration, and recheck every arithmetic step with the worked examples.",
      "realWorldContext": "Redox chemistry protects and powers Ghana. Ship hulls, jetties and the steel piles at Tema and Takoradi harbours are saved from rusting by bolting blocks of magnesium or zinc to them, a sacrificial anode that corrodes instead of the iron, and underground pipelines are given the same cathodic protection. The rechargeable batteries in torches and the lead-acid battery in a trotro are chemical cells in which oxidation at one plate and reduction at the other drive electrons through the circuit. Water treatment works dose storage with chlorine, a redox reaction that oxidises iron and manganese dissolved in the raw water so they precipitate and can be filtered out. In the laboratory the determination of the iron content of a supplement tablet, or of the chlorine residual in a sachet-water line, rests on a manganate or dichromate redox titration whose 1 to 5 ratio is applied exactly as in the worked example.",
      "objectives": [
        "Assign oxidation numbers using the standard rules and use a change in number to name the oxidation and the reduction",
        "Write and balance half-equations and combine them into an overall ionic redox equation",
        "Use the electrochemical series to predict displacement and to calculate the e.m.f. of a cell",
        "Explain corrosion protection and carry out a manganate(VII) or dichromate(VI) redox titration calculation"
      ],
      "sections": [
        {
          "title": "Oxidation Numbers and the Definition of Redox",
          "content": "Oxidation is the loss of electrons and reduction is the gain of electrons, and in any reaction that takes electrons from one species the same number is given to another, so the two are inseparable and together form a redox change. The dependable test is the oxidation number: it rises when a species is oxidised and falls when it is reduced. To use it you must assign numbers by the fixed rules. An element in its free, uncombined state has oxidation number zero, so iron metal is 0 and chlorine gas is 0. A simple monatomic ion has a number equal to its charge, so iron(II) is +2 and oxide is -2. Hydrogen is +1 and oxygen is -2 in ordinary compounds, group I metals are +1 and group II metals are +2, fluorine is always -1, and the sum of the numbers in a neutral compound is zero while the sum in a polyatomic ion equals the charge on that ion. With these rules you can read a reaction and name the agents: the species whose number rises is oxidised and is the reducing agent, and the species whose number falls is reduced and is the oxidising agent, so the agent is named for the change it causes in the other substance, not in itself.",
          "bulletPoints": [
            "Oxidation is loss of electrons and a rise in oxidation number; reduction is gain and a fall.",
            "Free elements have oxidation number zero; a simple ion equals its charge.",
            "Hydrogen is +1, oxygen -2, group I +1, group II +2, fluorine -1.",
            "Numbers add to zero in a compound and to the charge in an ion.",
            "The oxidising agent is itself reduced; the reducing agent is itself oxidised."
          ],
          "keyTakeaway": "Track the oxidation number on each atom, and the atom whose number rises is oxidised while the atom whose number falls is reduced, which settles every redox identification.",
          "realWorldExample": "When iron rusts the iron atom rises from 0 to +3 while oxygen falls from 0 to -2, so iron is the substance oxidised and oxygen is the oxidising agent, exactly as the numbers predict."
        },
        {
          "title": "Half-Equations and Balancing Redox Reactions",
          "content": "A redox equation is balanced by splitting it into two half-equations, one for oxidation and one for reduction, each showing electrons explicitly. The order is fixed. First balance the atoms of the element changing, then balance oxygen by adding water, then balance hydrogen by adding hydrogen ions, and finally balance the charge by adding electrons to the more positive side. Oxidation half-equations have electrons on the product side, reduction half-equations on the reactant side. To combine the halves, multiply each so that the electrons lost equal the electrons gained, then add and cancel the electrons. Zinc displacing copper is simple: Zn gives Zn2+ plus 2 electrons, and Cu2+ plus 2 electrons gives Cu, so together Zn plus Cu2+ gives Zn2+ plus Cu, and the electron count is balanced and the ions charge-balanced. The harder case is an ion in acid solution such as the manganate(VII) ion, which becomes Mn2+ while the oxygen is carried off as water, giving MnO4- plus 8H+ plus 5 electrons equals Mn2+ plus 4H2O. Pairing this with the iron(II) to iron(III) half, which needs only one electron, requires the iron half multiplied by five so the five electrons cancel.",
          "bulletPoints": [
            "Balance atoms, then oxygen with water, then hydrogen with hydrogen ions, then charge with electrons.",
            "Oxidation half-equations place electrons on the product side, reduction on the reactant side.",
            "Equalise the electrons in the two halves, then add and cancel them.",
            "Zinc plus copper(II) gives zinc(II) plus copper with two electrons exchanged.",
            "Manganate(VII) in acid is MnO4- + 8H+ + 5e- giving Mn2+ + 4H2O."
          ],
          "keyTakeaway": "Balance each half independently and only then match the electrons, because the whole redox equation is correct exactly when the electrons lost equal the electrons gained.",
          "realWorldExample": "A battery repairer at Suame Magazine relies on the same electron balance: the discharge reaction pairs an oxidation at the negative plate with a reduction at the positive plate in fixed electron proportion."
        },
        {
          "title": "The Electrochemical Series, Cell EMF and Redox Titration",
          "content": "The electrochemical series lists electrodes by their standard electrode potential, measured against the standard hydrogen electrode at 25 degrees Celsius, one mole per dm3 and one atmosphere. A metal with a more negative potential loses electrons more readily, so it is the stronger reducing agent and will displace any metal shown below it with a more positive potential. In a cell the two half-cells are joined by a salt bridge or porous barrier that completes the circuit and keeps the solutions neutral, while electrons flow through the external wire from the anode, where oxidation occurs, to the cathode, where reduction occurs. The cell e.m.f. is found by subtracting the electrode potential of the oxidation half-cell from that of the reduction half-cell, so for the copper-zinc cell, with copper at +0.34 volt reduced and zinc at -0.76 volt oxidised, the e.m.f. is +0.34 - (-0.76) = +1.10 volt. The same electron bookkeeping drives redox titration. Potassium manganate(VII) oxidises iron(II) in a fixed 1 to 5 mole ratio and, being deep purple itself, needs no indicator, the end point being the first permanent faint pink. Dichromate(VI) does the same job in the presence of an indicator, changing from orange to a green end colour as chromium is reduced.",
          "bulletPoints": [
            "Standard electrode potentials are measured against the standard hydrogen electrode.",
            "A more negative potential means a stronger reducing agent and greater readiness to oxidise.",
            "Electrons flow from anode, where oxidation occurs, to cathode, through the wire.",
            "Cell e.m.f. = reduction potential minus oxidation potential, so copper-zinc gives +1.10 V.",
            "Manganate(VII) titrates iron(II) in the ratio 1 to 5 and is its own indicator."
          ],
          "keyTakeaway": "The series lets you rank metals and predict a cell voltage by simple subtraction, and the same ranking explains which metal protects another from corrosion.",
          "realWorldExample": "The voltage of a torch cell made from a zinc and a manganese dioxide pair is fixed by the difference of their electrode potentials, just as the +1.10 volt of the copper-zinc cell is computed here."
        }
      ],
      "commonMistakes": [
        "Naming the agent wrongly, for example calling the substance that is oxidised the oxidising agent; the substance oxidised is the reducing agent, because it supplies the electrons.",
        "Subtracting the cell potentials the wrong way round and reporting a negative voltage; cell e.m.f. equals the reduction half-cell potential minus the oxidation half-cell potential, and it is positive for a working cell.",
        "Forgetting the electrons when writing a half-equation, or leaving them unequal before combining, so the overall ionic equation fails the charge balance.",
        "Applying the manganate to iron ratio as 1 to 1; the correct mole ratio from the balanced ionic equation is 1 mole of manganate to 5 moles of iron(II), and ignoring the factor 5 gives an answer five times too small.",
        "Confusing oxidation number with ionic charge or writing the charge where the sign convention wants +1 and -2 for hydrogen and oxygen, and losing the mark that asks for the number only."
      ],
      "wassceExamTips": [
        "In Paper 2 the redox question usually asks for the oxidation number of one named element; show the sum equation and box the answer with its sign, for example manganese +7.",
        "For balancing, write the two half-equations separately with the electrons shown, then equalise; examiners award method marks for the halves even before the overall equation.",
        "In an e.m.f. question state which electrode is the anode and which the cathode, then compute reduction potential minus oxidation potential and give the unit as volt.",
        "For a manganate titration record the ratio as 1 to 5 in the working so the examiner can follow it, and remember manganate(VII) needs no separate indicator.",
        "Displacement is judged from the series: the higher, more negative metal reduces the ion of the lower, so quote the direction of electron flow to secure the mark."
      ],
      "summaryChecklist": [
        "Can I assign oxidation numbers by the rules and use a change to name the oxidised and reduced species?",
        "Can I write and balance two half-equations and combine them with the electrons cancelled?",
        "Can I predict a displacement and calculate the e.m.f. of a copper-zinc cell from electrode potentials?",
        "Can I describe a chemical cell with its salt bridge and the direction of electron flow?",
        "Can I carry out a manganate(VII) titration using the 1 to 5 mole ratio to find a concentration?"
      ]
    },
    "examples": [
      {
        "id": "ex-che-redox-1",
        "title": "Electromotive Force of a Copper-Zinc Cell",
        "problem": "In a chemical cell the standard electrode potentials are E for copper(II)/copper = +0.34 V and E for zinc(II)/zinc = -0.76 V. Identify the cathode and the anode, write the electrode half-equations, and calculate the e.m.f. of the cell.",
        "stepByStepSolution": [
          "Step 1 (M1): The half-cell with the more positive potential is reduced and is the cathode, so copper is reduced and zinc, with the more negative potential, is oxidised at the anode.",
          "Step 2 (M1): Write the oxidation half-equation at the anode: Zn gives Zn2+ + 2e-.",
          "Step 3 (M1): Write the reduction half-equation at the cathode: Cu2+ + 2e- gives Cu.",
          "Step 4 (M1): Combine the halves, cancelling the two electrons: Zn + Cu2+ gives Zn2+ + Cu.",
          "Step 5 (M1): Cell e.m.f. = potential of the reduction half-cell minus potential of the oxidation half-cell = (+0.34) - (-0.76).",
          "Step 6 (A1): Cell e.m.f. = 0.34 + 0.76 = +1.10 V.",
          "Step 7 (M1): State that electrons flow through the wire from the zinc anode to the copper cathode, and the salt bridge completes the circuit.",
          "Step 8 (A1): Final answer: copper is the cathode, zinc the anode, and the cell e.m.f. is +1.10 V."
        ],
        "keyTakeaway": "Take reduction minus oxidation from the series, and a positive e.m.f. confirms the reaction proceeds as written with electrons leaving the more negative electrode."
      },
      {
        "id": "ex-che-redox-2",
        "title": "Iron(II) Concentration from a Manganate(VII) Titration",
        "problem": "The ionic equation for the reaction is MnO4- + 5Fe2+ + 8H+ gives Mn2+ + 5Fe3+ + 4H2O. A 25.0 cm3 portion of iron(II) solution needs 20.0 cm3 of 0.02 mol per dm3 potassium manganate(VII) for the end point. Calculate the concentration of the iron(II) solution in mol per dm3.",
        "stepByStepSolution": [
          "Step 1 (M1): Moles of manganate(VII) used = concentration x volume in dm3 = 0.02 x (20.0 / 1000).",
          "Step 2 (A1): Moles of MnO4- = 0.02 x 0.020 = 0.0004 mol.",
          "Step 3 (M1): From the balanced equation 1 mole of MnO4- reacts with 5 moles of Fe2+, so moles of Fe2+ = 5 x 0.0004.",
          "Step 4 (A1): Moles of Fe2+ = 0.002 mol, present in the 25.0 cm3 portion.",
          "Step 5 (M1): Concentration of Fe2+ = moles divided by volume in dm3 = 0.002 / (25.0 / 1000) = 0.002 / 0.025.",
          "Step 6 (A1): Concentration of Fe2+ = 0.08 mol per dm3.",
          "Step 7 (M1): Note the end-point reading is taken from the burette to two decimal places and the faint pink colour is used with no separate indicator.",
          "Step 8 (A1): Final answer: the iron(II) solution has a concentration of 0.08 mol per dm3."
        ],
        "keyTakeaway": "Use moles from the burette, apply the 1 to 5 ratio from the balanced ionic equation, then divide by the pipetted volume to get the concentration."
      }
    ],
    "quiz": {
      "id": "quiz-che-redox",
      "topicId": "shs3-che-t3-redox-electrode-potentials-cells",
      "title": "Redox, Electrode Potentials and Cells Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-che-redox-1",
          "quizId": "quiz-che-redox",
          "questionText": "Which statement correctly defines oxidation in terms of electrons?",
          "optionA": "Oxidation is the gain of electrons and a fall in oxidation number",
          "optionB": "Oxidation is the loss of protons from the nucleus",
          "optionC": "Oxidation is the gain of oxygen only and never involves electrons",
          "optionD": "Oxidation is the loss of electrons and a rise in oxidation number",
          "correctOption": "D",
          "subConcept": "Definition of oxidation",
          "explanation": "Oxidation is the loss of electrons, which makes the oxidation number rise. Gain of electrons is reduction. Proton change belongs to nuclear reactions, not ordinary redox, and the oxygen-only view is incomplete because electron transfer is the real test.",
          "remediationTip": "Remember that electrons leave during oxidation and the number climbs; pair the two in a note."
        },
        {
          "id": "q-che-redox-2",
          "quizId": "quiz-che-redox",
          "questionText": "A cell has a reduction half-cell at +0.34 V and an oxidation half-cell at -0.76 V. What is its e.m.f.?",
          "optionA": "-1.10 V",
          "optionB": "+1.10 V",
          "optionC": "-0.42 V",
          "optionD": "+0.42 V",
          "correctOption": "B",
          "subConcept": "Cell e.m.f. calculation",
          "explanation": "Cell e.m.f. equals the reduction potential minus the oxidation potential, so (+0.34) - (-0.76) = +0.34 + 0.76 = +1.10 V. The value is positive for a working cell, which rules out the negative options and the mistaken subtraction of the smaller from a larger.",
          "remediationTip": "Write reduction minus oxidation before substituting, and change the double minus into a plus."
        },
        {
          "id": "q-che-redox-3",
          "quizId": "quiz-che-redox",
          "questionText": "In a chemical cell, through which path and in which direction do the electrons travel?",
          "optionA": "Through the salt bridge from cathode to anode",
          "optionB": "Through the electrolyte from cathode to anode",
          "optionC": "Through the external wire from anode to cathode",
          "optionD": "Through the wire from cathode to anode",
          "correctOption": "C",
          "subConcept": "Cell construction",
          "explanation": "Oxidation at the anode releases electrons, which flow through the external wire to the cathode where reduction uses them. Ions, not electrons, move through the electrolyte and salt bridge, and the direction is anode to cathode in the wire, not the reverse.",
          "remediationTip": "Label a cell diagram with anode as electron source and cathode as destination to fix the direction."
        },
        {
          "id": "q-che-redox-4",
          "quizId": "quiz-che-redox",
          "questionText": "Why does zinc displace copper from copper(II) sulfate solution?",
          "optionA": "Zinc is above copper in the series, so it gives electrons to the copper ions",
          "optionB": "Copper is more reactive and pulls electrons from the zinc",
          "optionC": "Both metals have the same electrode potential",
          "optionD": "The sulfate ion carries electrons from copper to zinc",
          "correctOption": "A",
          "subConcept": "Displacement",
          "explanation": "Zinc has the more negative standard electrode potential, so it is oxidised and supplies electrons that reduce Cu2+ to copper metal. The more reactive, higher metal reduces the ion of the lower one; the sulfate ion is a spectator and does not carry electrons.",
          "remediationTip": "Rank the two metals on the series and let the higher one donate electrons to the lower ion."
        },
        {
          "id": "q-che-redox-5",
          "quizId": "quiz-che-redox",
          "questionText": "What mole ratio links manganate(VII) ions to iron(II) ions in the titration?",
          "optionA": "1 to 5",
          "optionB": "5 to 1",
          "optionC": "1 to 1",
          "optionD": "2 to 5",
          "correctOption": "A",
          "subConcept": "Redox titration ratio",
          "explanation": "Each MnO4- ion accepts five electrons as it is reduced to Mn2+, and each Fe2+ gives up only one electron to become Fe3+, so one mole of manganate(VII) reacts with five moles of iron(II). This ratio comes straight from the balanced ionic equation.",
          "remediationTip": "Balance the electrons in the two halves to see why one manganate needs five iron(II) ions."
        }
      ]
    }
  }
];
