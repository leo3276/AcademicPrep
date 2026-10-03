// Ghanaian SHS General Science elective — Biology
// WASSCE Elective Biology syllabus across SHS 1, SHS 2 and SHS 3
// Textbook-grade notes, worked WAEC solutions with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS_BIOLOGY_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs1-bio-t1-characteristics-of-living-things-cells",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Characteristics of Living Things and the Cell",
    "description": "The seven life processes that separate living things from non-living matter, the cell as the basic unit of life, plant and animal cell structure and organelle functions, magnification and biological drawing, and the tissue, organ and system levels of organisation.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Living things carry out seven life processes: movement, respiration, sensitivity, nutrition, excretion, reproduction and growth; a non-living thing never shows all seven at once.\n• Respiration is the release of energy from food in every living cell; it is not breathing, and it continues in plants day and night.\n• Excretion is the removal of waste produced by the cell's own metabolism; passing out undigested food is egestion, not excretion.\n• Growth is a permanent increase in size and dry mass; a crystal that grows by adding material from outside is not living.\n• Cell theory states that all organisms are made of cells, the cell is the basic unit of life, and all cells come from pre-existing cells.\n• Plant cells have a cellulose cell wall, chloroplasts and a large permanent vacuole; animal cells have none of these three.\n• Both cells have a cell membrane, cytoplasm, nucleus and mitochondria; only plant cells store starch and have a fixed shape in mature tissue.\n• The nucleus controls the cell and carries chromosomes; ribosomes build proteins; mitochondria release energy in respiration.\n• Chloroplasts contain chlorophyll and carry out photosynthesis; the sap vacuole keeps the cell turgid and stores dissolved substances.\n• Unicellular organisms such as Amoeba, Paramecium and Euglena perform all seven life processes inside one cell.\n• Magnification = length of image or drawing divided by actual length of the specimen.\n• Total microscope magnification = eyepiece lens magnification multiplied by objective lens magnification.\n• Convert units before calculating: 1 mm = 1000 micrometres (um), so 0.02 mm = 20 um.\n• Biological drawings use a sharp pencil, clear single unbroken lines, no shading, ruler-straight label lines on one side, and a title with the magnification.\n• Levels of organisation: cell, tissue, organ, system, organism; xylem and palisade mesophyll are plant tissues, the leaf and the stomach are organs.",
    "detailedNotes": {
      "overview": "This first SHS 1 topic sets the language for the whole biology course. You will learn the seven life processes that every examiner uses to decide whether something is alive, then study the cell as the basic unit of living structure, comparing plant and animal cells and naming the job of each organelle. The topic also teaches the microscope arithmetic of magnification and the exact rules for a biological drawing, because Paper 3 practicals award marks for drawing technique alone. It ends with the levels of organisation that connect cells to tissues, organs and systems.",
      "introduction": "Approach this topic as a set of definitions you can apply, not a list you recite. For each unfamiliar organism in a textbook or past question, test it against all seven life processes and give one line of evidence for each one you find. Practise the microscope arithmetic every day this term: write the magnification formula, substitute in the same units, and give the answer with the x sign. When you draw a cell, keep your ruler in your hand for the label lines and put your name, the title and the magnification under the drawing; these small habits are pure marks in Paper 3.",
      "realWorldContext": "In a Ghanaian science laboratory, the first practical most students meet is scraping the inside of the cheek with a clean toothpick, smearing the cells on a slide, staining with a little methylene blue and looking for the nucleus under the low power of the school microscope. In the same lesson a student peels the thin skin from the inner scale of a market onion from the nearby stall, stains it and compares the box-shaped cells with the flat irregular cheek cells. Outside school, pond water collected from a stream behind the school compound at Ejisu glitters with one-celled organisms, and understanding the difference between the living pond water scum and the mud it floats on is exactly the question of the seven life processes.",
      "objectives": [
        "Test any organism or specimen against the seven life processes and state which processes it shows",
        "Draw and label a plant cell and an animal cell from an observed specimen, marking the parts named in the syllabus",
        "State the function of the nucleus, cell membrane, cytoplasm, mitochondrion, chloroplast, vacuole and cell wall",
        "Calculate magnification from the size of a drawing or image and the actual size, converting between millimetres and micrometres",
        "Arrange cell, tissue, organ and system into the correct levels of organisation with named examples from plants and animals"
      ],
      "sections": [
        {
          "title": "The Seven Life Processes",
          "content": "Biologists decide whether something is alive by asking whether it carries out all seven life processes, so learn them as actions you can prove rather than words to repeat. Movement is a change in position or part position; animals move visibly, while a mimosa leaflet folding when touched or a root bending downward is slower movement that still counts. Respiration is the release of energy from food inside every living cell, and it is not the same act as breathing; a resting student respires every second, and so does a tall maize plant at midnight. Sensitivity is detecting and responding to change in the environment, through nerves in animals and hormones in plants. Nutrition is taking in or making food: green plants manufacture theirs by photosynthesis, fungi absorb theirs from the medium, and animals ingest it. Excretion is removing the waste the cell's own reactions produce, which is different from egestion, the passing out of undigested food. Reproduction forms new individuals, and growth is a permanent increase in size and dry mass that a crystal adding mineral from water cannot truly match.",
          "bulletPoints": [
            "The seven processes are movement, respiration, sensitivity, nutrition, excretion, reproduction and growth.",
            "Respiration happens in all living cells; breathing is only the movement of air in and out.",
            "Excretion removes metabolic waste such as carbon dioxide and urea; egestion removes undigested food.",
            "Growth must be permanent and involve new material made by the organism itself.",
            "A non-living thing such as a trotro may move and consume fuel, but it never shows all seven processes together."
          ],
          "keyTakeaway": "To claim something is alive you must show all seven life processes; one or two alone, such as movement, are never enough proof.",
          "realWorldExample": "A mound termite hill grows taller over the years, but the hill itself is not alive; the termites building it eat, respire, respond to light when the hill is broken open, reproduce and excrete, so the colony shows the seven processes and the mound does not."
        },
        {
          "title": "The Cell and Cell Theory",
          "content": "The cell is the smallest structure that can be called alive, and cell theory makes three statements you should be able to write from memory: every living thing is made of one or more cells, the cell is the basic structural and functional unit of life, and all cells arise from pre-existing cells by cell division. Unicellular organisms prove the theory neatly, because a single Amoeba swimming in a drop of pond water, a Paramecium or a Euglena feeds, respires, responds, excretes through a contracting vacuole, grows and divides into two cells, all inside one cell with no organelles beyond the cell parts. Organisms made of many cells, from the cocoa tree to the student reading this, depend on cells specialised for particular jobs working together. The classic comparison for WAEC is between the plant cell, which has a rigid wall of cellulose outside the membrane, chloroplasts for photosynthesis and a large permanent vacuole of cell sap, and the animal cell, which has none of these three, keeps a rounder outline and often has small temporary vacuoles instead.",
          "bulletPoints": [
            "Cell theory: all organisms are cellular, the cell is the basic unit, and cells come only from cells.",
            "Amoeba, Paramecium and Euglena are single cells that perform all seven life processes.",
            "Plant cells add a cellulose wall, chloroplasts and a large permanent vacuole to the common cell plan.",
            "Animal cells have no wall, no chloroplasts and only small or temporary vacuoles.",
            "Both cell types share the cell membrane, cytoplasm, nucleus and mitochondria."
          ],
          "keyTakeaway": "Remember one comparison sentence for the exam: the wall, the chloroplast and the large permanent vacuole are what a plant cell has that an animal cell lacks.",
          "realWorldExample": "When a student peels the transparent skin from the inner face of an onion bulb bought at the market and mounts it on a slide, the boxes laid end to end are individual living cells, each sealed behind its own cellulose wall."
        },
        {
          "title": "Organelles and Their Functions",
          "content": "Each named part of the cell earns its own mark in WAEC structured questions, so attach one exact job to each and never blur two together. The nucleus controls the activities of the cell and carries the chromosomes bearing the hereditary material; the nucleolus inside it helps build ribosomes. The cell membrane is a living, selectively permeable skin that controls which substances enter and leave; the cell wall outside it in plants is dead, fully permeable and made of cellulose, and it gives shape and strength. The cytoplasm is the jelly where most chemical reactions occur. Mitochondria are the sites of aerobic respiration, the power packs that release energy from food, and they are numerous in active cells such as muscle. Chloroplasts contain the green pigment chlorophyll and carry out photosynthesis, so they crowd the mesophyll of a leaf but never appear in a cheek cell. Ribosomes assemble proteins, the large permanent vacuole holds cell sap, keeps the cell turgid and stores dissolved sugars and pigments, and in animal cells vacuoles are small and temporary.",
          "bulletPoints": [
            "Nucleus: control of the cell and storage of chromosomes.",
            "Cell membrane: selectively controls substances entering and leaving; the plant wall gives rigid support.",
            "Mitochondrion: site of respiration and energy release; chloroplast: site of photosynthesis.",
            "Ribosome: protein synthesis; cytoplasm: the jelly where reactions run.",
            "Sap vacuole: storage and turgidity in plant cells; animal vacuoles are small and temporary."
          ],
          "keyTakeaway": "Name the organelle and its one exact job together, because examiners reject answers such as the mitochondrion stores energy when they mean releases energy by respiration.",
          "realWorldExample": "The breast muscle cells of a chicken bought at the market are crowded with mitochondria, because a muscle that works hard needs many sites for respiration, while a mature storage cell in the yam tuber is dominated instead by a large vacuole and starch grains."
        },
        {
          "title": "Magnification and Biological Drawing",
          "content": "The microscope does not enlarge knowledge, so every measurement must be done correctly. Magnification is defined as the length of the image or drawing divided by the actual length of the specimen, and total magnification through a compound microscope is the eyepiece lens magnification multiplied by the objective lens magnification; a 10 times eyepiece with a 40 times objective gives 400 times. Before dividing, put both lengths in the same unit, remembering that one millimetre equals one thousand micrometres, so an actual cell diameter of 0.02 mm is 20 um. The biological drawing is assessed separately, and the rules never change: use a sharp pencil and draw clean single unbroken lines, never shade or colour, make the drawing large, scale the label lines with a ruler so they run to one side without crossing each other, and end with a centred title that states the magnification of the drawing. If the question tells you the specimen is 0.05 mm long and demands a drawing at 100 times magnification, your line must be 5 mm of specimen multiplied by 100, giving a 500 mm, that is 50 cm, target size to shrink to a sensible page with the magnification honestly written beneath.",
          "bulletPoints": [
            "Magnification = length of drawing or image divided by actual length.",
            "Microscope magnification = eyepiece times objective.",
            "Convert first: 1 mm = 1000 um, so always state both lengths in one unit before dividing.",
            "Draw with a sharp pencil using single unbroken lines; never shade or colour a biological drawing.",
            "Label with ruler-straight lines on one side, and finish with a title and the magnification."
          ],
          "keyTakeaway": "A drawing earns marks for line quality, correct parts, tidy labels and an honest magnification statement; shading only wastes pencil time.",
          "realWorldExample": "In the GES school laboratory, a student who draws the cheek cells seen under low power as a sheet of shaded pink blobs scores nothing for craft, while a classmate who outlines three clear nuclei with single lines and a ruler-straight label runs far ahead."
        },
        {
          "title": "From Cells to Tissues, Organs and Systems",
          "content": "Multicellular life is organised in a ladder of complexity, and WAEC loves asking where a named structure sits on that ladder. A tissue is a group of cells with a similar structure and origin working together for one job: xylem and phloem are the transport tissues of a plant, epidermis and mesophyll cover and photosynthesise the leaf, and in animals the four basic tissues are epithelial, muscle, nervous and connective tissue, with blood counted as a connective tissue. An organ is a package of several tissues joined for a larger function; the leaf is an organ, with its epidermis, mesophyll and veins working as one unit, and so are the stomach, the heart and the root. A system is a group of organs working together, such as the digestive system from mouth to anus, and the organism is the living individual the system serves. A unicellular organism stops at the first rung, because its one cell is simultaneously the cell, the tissue-level worker, the organ-level worker and the whole organism.",
          "bulletPoints": [
            "Tissue: a group of similar cells with one function, such as xylem, phloem, muscle or nerve tissue.",
            "Organ: two or more tissues combined for a bigger job, such as leaf, root, stomach or heart.",
            "System: organs working together, such as the digestive or circulatory system.",
            "The correct order is cell, tissue, organ, system, organism.",
            "A single Amoeba cell performs every level of the ladder by itself."
          ],
          "keyTakeaway": "Sort any named structure into cell, tissue, organ or system by asking how many kinds of parts it contains: one cell type means tissue, several tissue types mean organ.",
          "realWorldExample": "A cassava root on a farm table is one organ, built from several tissues: the outer periderm protects, the inner storage parenchyma packs starch for the plant and for the gari producer who will grate it."
        }
      ],
      "commonMistakes": [
        "Saying plants do not respire because they make food; respiration runs in every living cell of plant and animal at all times, and only chloroplasts photosynthesise.",
        "Describing a moving car or a flowing river as alive because it moves; a single process such as movement is never proof, and the seven processes must all be shown.",
        "Calling the passing out of faeces excretion; excretion removes wastes made by the cell's own reactions, while egestion removes material that never entered body cells.",
        "Dividing a drawing length in millimetres by an actual length in micrometres without converting, leaving the magnification wrong by a factor of one thousand.",
        "Shading or colouring a biological drawing and letting label lines cross each other, both of which lose technique marks even when the structures are correct.",
        "Confusing the cell membrane with the cell wall: the membrane is living and selectively permeable in every cell, the wall is dead, fully permeable and present only in plant cells."
      ],
      "wassceExamTips": [
        "Paper 1 asks you to match structures to functions; eliminate by job, for example respiration energy release points to the mitochondrion and never to the vacuole.",
        "In Paper 2 the seven processes are usually applied to an unfamiliar organism, so write one sentence of evidence per process instead of reciting the list.",
        "In Paper 3 practical questions you are given a specimen and asked to draw it; obey the drawing rules exactly, no shading, ruler labels, title and magnification beneath.",
        "For magnification calculations show the formula, the substitution with both lengths in one unit, and the final answer with the x sign; method lines carry the M1 marks.",
        "Quote technical names precisely and spell them correctly; Examiner reports list misspellings of vacuole, chloroplast and mitochondrion among rejected answers."
      ],
      "summaryChecklist": [
        "Can I name the seven life processes and give evidence for each in a named organism?",
        "Can I state the three parts of cell theory and list three structures a plant cell has that an animal cell lacks?",
        "Can I match each organelle, including nucleus, membrane, wall, mitochondrion, chloroplast, ribosome and vacuole, to its single exact function?",
        "Can I calculate microscope and drawing magnification with the lengths converted to one unit?",
        "Can I place a named structure on the ladder from cell to tissue to organ to system with an example?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-cell-1",
        "title": "Magnification of a Biological Drawing",
        "problem": "A student draws an onion epidermis cell that measured 0.03 mm long as a drawing 90 mm long. Calculate the magnification of the drawing. If the microscope used a 10 times eyepiece with a 40 times objective, how does the drawing magnification compare with the microscope magnification?",
        "stepByStepSolution": [
          "Step 1 (M1): Magnification = length of drawing divided by actual length of the specimen.",
          "Step 2 (M1): Both lengths are already in millimetres: drawing = 90 mm, actual = 0.03 mm.",
          "Step 3 (M1): Drawing magnification = 90 / 0.03 = 3000, written as 3000x.",
          "Step 4 (A1): The drawing is magnified 3000 times.",
          "Step 5 (M1): Microscope magnification = eyepiece x objective = 10 x 40 = 400, that is 400x.",
          "Step 6 (M1): Ratio = 3000 / 400 = 7.5, so the drawing is 7.5 times larger than the image itself.",
          "Step 7 (A1): Final answer: drawing magnification 3000x, microscope magnification 400x; the drawing enlarges the observed image a further 7.5 times, which is why its magnification must be stated beneath the title."
        ],
        "keyTakeaway": "A drawing has its own magnification, separate from the microscope's, and it is always found by dividing drawing length by actual length in the same unit."
      },
      {
        "id": "ex-bio-cell-2",
        "title": "Actual Size of a Cell from Microscope Reading",
        "problem": "A cheek cell viewed through a 10 times eyepiece and a 40 times objective has an image diameter of 8 mm. Calculate the actual diameter of the cell in millimetres and in micrometres.",
        "stepByStepSolution": [
          "Step 1 (M1): Total magnification = eyepiece x objective = 10 x 40 = 400x.",
          "Step 2 (M1): Actual size = image size divided by magnification = 8 mm / 400.",
          "Step 3 (M1): 8 / 400 = 0.02, so the actual diameter is 0.02 mm.",
          "Step 4 (A1): Actual diameter = 0.02 mm.",
          "Step 5 (M1): Convert to micrometres: 1 mm = 1000 um, so 0.02 mm = 0.02 x 1000.",
          "Step 6 (A1): Final answer: the cell is 0.02 mm across, that is 20 um."
        ],
        "keyTakeaway": "Rearranging the same formula gives actual size, and the micrometre conversion 1 mm = 1000 um must be shown as its own method line."
      }
    ],
    "quiz": {
      "id": "quiz-bio-living-cells",
      "topicId": "shs1-bio-t1-characteristics-of-living-things-cells",
      "title": "Living Things and the Cell Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-cell-1",
          "quizId": "quiz-bio-living-cells",
          "questionText": "A mimosa leaflet folds inward when a finger touches it. Which life process does this demonstrate?",
          "optionA": "Sensitivity",
          "optionB": "Excretion",
          "optionC": "Reproduction",
          "optionD": "Nutrition",
          "correctOption": "A",
          "subConcept": "The seven life processes",
          "explanation": "Detecting a touch stimulus and responding by folding the leaflet is sensitivity. The strongest distractor, excretion, fails because no metabolic waste is being removed in the response.",
          "remediationTip": "Link each process to one verb: sensitivity means detect and respond, excretion means remove waste."
        },
        {
          "id": "q-bio-cell-2",
          "quizId": "quiz-bio-living-cells",
          "questionText": "Which structure is found in a plant cell but not in an animal cell?",
          "optionA": "Cell membrane",
          "optionB": "Nucleus",
          "optionC": "Chloroplast",
          "optionD": "Mitochondrion",
          "correctOption": "C",
          "subConcept": "Plant versus animal cells",
          "explanation": "Chloroplasts, which carry chlorophyll for photosynthesis, occur in plant cells only. Membrane, nucleus and mitochondrion are shared by both cell types, so options A, B and D all fail.",
          "remediationTip": "Memorise the plant-only trio: cellulose wall, chloroplast, large permanent vacuole."
        },
        {
          "id": "q-bio-cell-3",
          "quizId": "quiz-bio-living-cells",
          "questionText": "What is the main function of the mitochondrion?",
          "optionA": "It manufactures proteins for the cell.",
          "optionB": "It stores cell sap and keeps the cell turgid.",
          "optionC": "It controls the activities of the cell.",
          "optionD": "It releases energy from food by respiration.",
          "correctOption": "D",
          "subConcept": "Organelle functions",
          "explanation": "The mitochondrion is the site of aerobic respiration, releasing energy from food. Option A describes ribosomes, B the vacuole and C the nucleus, so none of them is the mitochondrial job.",
          "remediationTip": "Write the pair mitochondrion, respiration five times and keep it apart from chloroplast, photosynthesis."
        },
        {
          "id": "q-bio-cell-4",
          "quizId": "quiz-bio-living-cells",
          "questionText": "A group of similar cells working together for one job is called a",
          "optionA": "system",
          "optionB": "tissue",
          "optionC": "organism",
          "optionD": "organ",
          "correctOption": "B",
          "subConcept": "Levels of organisation",
          "explanation": "A tissue is a group of similar cells with one function, such as xylem or muscle tissue. An organ contains several tissues and a system contains several organs, so options A and D describe higher levels.",
          "remediationTip": "Recite the ladder: cell, tissue, organ, system, organism, and place each definition on a rung."
        },
        {
          "id": "q-bio-cell-5",
          "quizId": "quiz-bio-living-cells",
          "questionText": "A microscope has a 10 times eyepiece and a 40 times objective. What is the total magnification?",
          "optionA": "400x",
          "optionB": "50x",
          "optionC": "4000x",
          "optionD": "30x",
          "correctOption": "A",
          "subConcept": "Magnification",
          "explanation": "Total magnification is eyepiece multiplied by objective, 10 x 40 = 400x. Option B comes from adding instead of multiplying and option D from subtracting, both classic Paper 1 traps.",
          "remediationTip": "Always multiply the two lens figures; never add or subtract them."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t1-support-movement-in-organisms",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Support and Movement in Plants and Animals",
    "description": "Types of skeleton, the mammalian skeleton with bones, joints and ligaments, antagonistic muscle pairs and lever action, movement in earthworm, snail and fish, plant support tissues with tendrils and tropisms, and care of posture and injuries.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Three skeleton plans: hydrostatic (fluid in a chamber), exoskeleton (external shell) and endoskeleton (internal bony frame).\n• The earthworm's hydrostatic skeleton is the coelom fluid resisted by circular and longitudinal muscles; it is not made of bones.\n• Arthropod exoskeletons of chitin protect and prevent water loss but must be moulted for growth and limit body size.\n• The mammalian axial skeleton is skull, vertebral column and rib cage; the appendicular skeleton is the girdles and limbs.\n• Joint types: fixed joints in the skull sutures, slightly movable between vertebrae, and freely movable synovial joints.\n• Ball-and-socket at shoulder and hip gives movement in all directions; hinge at elbow and knee gives one plane; pivot lets the head turn.\n• Ligaments join bone to bone at a joint; tendons join muscle to bone; mixing the two is a classic WAEC slip.\n• Muscles only pull, never push, so they work in antagonistic pairs: biceps contracts to flex the elbow while triceps relaxes, and the reverse extends it.\n• Most body levers are built for speed and range, not force: the biceps force far exceeds the load in the hand because its insertion is close to the joint.\n• The foot on tiptoe is a force-multiplying lever because the calf effort arm is longer than the load arm.\n• Earthworm locomotion: setae grip the soil while circular muscles then longitudinal muscles contract in waves, one segment at a time.\n• The snail crawls on a muscular foot over its own mucus; fish swim by antagonistic myotome waves bending the body against the tail fin.\n• Plant support runs from turgor pressure in soft herbaceous tissue through collenchyma and sclerenchyma fibres to lignified xylem in tree trunks.\n• Tendrils coil around a support in thigmotropism; shoots grow toward light in phototropism and roots grow downward in gravitropism.\n• For a suspected fracture, immobilise the limb with a padded splint and seek care; never massage, straighten or force movement on it.",
    "detailedNotes": {
      "overview": "This topic explains how organisms hold themselves up and how they get about. You will compare hydrostatic, exoskeleton and endoskeleton plans, then study the mammalian skeleton, joint types and antagonistic muscles, including the lever mathematics that WAEC sets as calculation. The plant half covers support tissues from turgor to lignified wood and the movements of tendrils and tropisms, and the lesson closes with crawling and swimming in invertebrates and the first-aid care of posture and injuries.",
      "introduction": "Study this topic in pairs of ideas: a structure always goes with its action. Put skeleton type beside its advantage and disadvantage, joint type beside an example in your own body, and muscle pair beside the movement it produces. Build the lever habit early: mark the fulcrum, load and effort on a diagram, then apply the moment rule that effort multiplied by its distance equals load multiplied by its distance. For plants, watch a creeping gourd tendril on the school fence and describe its tropism in one exact sentence before you open the textbook.",
      "realWorldContext": "Support and movement walk to market every day in Ghana. A head-panner balancing a full basin of drinking water on her head trains the fixed upright posture of the cervical spine, while her elbow works as a hinge the moment she lifts the basin. In a dugout after heavy rain at Ejisu, earthworms cross the path by looping their hydrostatic bodies, and in the same season snails leave a shining mucus track over the garden wall. On a yam farm the vines coil their tendrils around wooden stakes for support, and in a Kumasi clinic the first-aid box for a boy who fell from a bicycle contains the padded board that immobilises a suspected forearm fracture, exactly the habit this topic demands.",
      "objectives": [
        "Compare hydrostatic, exoskeleton and endoskeleton plans with named examples and one advantage of each",
        "Divide the human skeleton into axial and appendicular parts and name the joint types with an example of each",
        "Explain antagonistic muscle action at the elbow and calculate the lever forces in a limb",
        "Describe locomotion in the earthworm, the snail and a bony fish with the structures involved",
        "Explain plant support from turgor to lignified tissue and describe tendril coiling and named tropisms"
      ],
      "sections": [
        {
          "title": "Three Plans of Support: Hydrostatic, Exoskeleton and Endoskeleton",
          "content": "Every multicellular animal solves the same problem, how to hold a body up and push against the world, and evolution has answered with three plans. A hydrostatic skeleton is a closed volume of fluid that the surrounding muscles squeeze; the earthworm's coelom fluid cannot be compressed, so when circular muscles thin one segment the fluid pushes that segment longer and when longitudinal muscles shorten it the segment fattens, giving a wave of gripping loops through the soil. An exoskeleton is a hard outer case; the chitin shell of a crab or grasshopper protects the soft body, gives muscles firm attachments outside and slows water loss through the dry surface, which suits the harmattan, but it cannot stretch, so the animal must moult it to grow, and its weight sets a limit on how large a land arthropod can become. An endoskeleton is a living internal frame of bone and cartilage; because it grows with the animal, it can support very large bodies such as a cow or a human, keeps soft organs free to change shape, and renews and repairs itself, though it leaves the surface unprotected compared with a shell.",
          "bulletPoints": [
            "Hydrostatic skeleton: incompressible fluid resisted by body-wall muscles, as in the earthworm.",
            "Exoskeleton: external chitin case of arthropods; protects and limits water loss but must be moulted for growth.",
            "Endoskeleton: internal bone and cartilage; grows with the animal and supports large bodies.",
            "The snail carries a calcified shell, a protective external skeleton open at the foot end.",
            "Each plan trades protection and size; that trade is a favourite Paper 2 essay frame."
          ],
          "keyTakeaway": "Match the plan to the animal: fluid tube for the worm, external armour for the insect, internal living frame for the vertebrate.",
          "realWorldExample": "A crab sold at the Tema beach-side chop bar shows the exoskeleton trade-off plainly: its shell is strong enough to keep it alive out of water on the hot sand, yet the animal could only grow by shedding that shell in a moult."
        },
        {
          "title": "The Mammalian Skeleton and Its Joints",
          "content": "The human skeleton is divided into two easy halves. The axial skeleton runs along the axis of the body: the skull of flat cranial bones fixed at the sagittal suture, the vertebral column of thirty-three vertebrae with cartilage discs between them, and the rib cage of twelve pairs of ribs hinged to the vertebrae and most joined to the sternum by cartilage. The appendicular skeleton is attached to it: the pectoral and pelvic girdles and the bones of the two limbs. Wherever two bones meet is a joint, and WAEC expects three categories with examples. Fixed joints do not move, as the sutures of the skull, their edges interlocking for brain protection. Slightly movable joints allow limited movement, such as between adjacent vertebrae, with the cartilage pad acting as a shock absorber. Freely movable synovial joints allow free motion, and their surfaces are covered with smooth cartilage, enclosed in a capsule that secretes synovial fluid to lubricate them, and bound by ligaments of tough white fibre running bone to bone. In the ball-and-socket joint of the hip or shoulder a rounded head sits in a cup, giving movement in every plane; the hinge joint of the elbow or knee opens and shuts in one plane; the pivot joint between the first two neck vertebrae turns the head from side to side.",
          "bulletPoints": [
            "Axial part: skull, vertebral column, ribs and sternum; appendicular part: girdles and limbs.",
            "Fixed joints in the skull sutures, slightly movable joints between vertebrae, freely movable synovial joints at the limbs.",
            "Synovial joints have cartilage surfaces, synovial fluid for lubrication and ligaments binding bone to bone.",
            "Ball-and-socket gives multi-directional movement; hinge gives one plane; pivot gives rotation.",
            "Tendons join muscle to bone; ligaments join bone to bone; keep the two words apart."
          ],
          "keyTakeaway": "Name the joint type together with its example and its one feature, for instance ball-and-socket at the shoulder because the bone head sits in a cup and turns freely.",
          "realWorldExample": "A trotro passenger who twists around to call the driver at the next stop is using the pivot joint between the atlas and axis vertebrae, while the same movement at the knee is impossible, because the hinge there only opens and shuts."
        },
        {
          "title": "Muscles, Antagonistic Pairs and Levers",
          "content": "Bones are only levers; muscle is the motor, and muscle tissue has one physical limit: it can contract and pull, but it can never push. That single fact explains why muscles work in antagonistic pairs on either side of a joint. To bend the elbow, the biceps brachii contracts and shortens, pulling on the tendon fixed to the radius, while the triceps relaxes; to straighten the arm, the triceps contracts and pulls the ulna back while the biceps relaxes, and the forearm returns by the pull of gravity or the paired muscle. One muscle alone could only ever set a bone in one position. The arrangement also explains the forces: because the biceps inserts only a few centimetres from the elbow while the hand may hold a load thirty centimetres away, the muscle must exert a force several times the load according to the moment rule, effort distance multiplied by effort equals load distance multiplied by load. These levers pay for the force with speed, a small muscle shortening swings a large arc at the hand. The calf raising the body on tiptoe is the opposite design, a force multiplier, because the muscle pulls through a long arm behind the toe fulcrum while the body weight rests on the short arm in front.",
          "bulletPoints": [
            "Muscles only pull; antagonistic pairs are needed to move a bone both ways.",
            "Biceps contracts and triceps relaxes to flex the elbow; the reverse extends it.",
            "Tendon attachments transmit the pull of the muscle onto the bone.",
            "Moment rule: effort x effort arm = load x load arm, measured from the joint, the fulcrum.",
            "Most limb levers multiply speed and range; the tiptoe lever multiplies force."
          ],
          "keyTakeaway": "Whenever a lever question appears, write the moment equation first with both distances measured from the joint, then substitute.",
          "realWorldExample": "A girl holding a ten-litre bucket of water at arm's length tires quickly because her biceps works with a small effort arm, so its force is many times the weight of the bucket, even though the bucket feels light on a carrying pole across the shoulder."
        },
        {
          "title": "Support and Movement in Plants",
          "content": "Plants solve the support problem without muscles, using water pressure, cell walls and woody tissue in steps. A young herbaceous shoot, such as a kontomire stalk, stands mostly on turgor: water entering the cells presses the vacuole against the wall and the wall braces back, and the plant wilts the moment the supply fails. Collenchyma, living cells with thickened corners, flexes and props growing stems, while sclerenchyma fibres, dead narrow cells with thick lignified walls, run through the plant like the steel rods in a reinforced block fence and give the tensile strength of hemp, sanal and the fibres of a raffia palm. In trees the secondary xylem, the heartwood, is impregnated with lignin and becomes a rigid pillar that lifts the crown to the light, which is why the great iroko trunks of the Ashanti forest need no bones. Plants also move, and the syllabus demands three precise words. Phototropism is growth toward light, caused by the auxin hormone gathering on the shaded side and making it grow faster, so a seedling by the window leans outside. Gravitropism makes roots grow downward and stems upward however they are laid. Thigmotropism is the coiling response of a tendril, the modified climbing organ of the gourd, passion flower or yam, whose cells on the side touching a stake grow faster and wrap the support in a spiral.",
          "bulletPoints": [
            "Turgor pressure braces soft tissue; collenchyma props growing stems; sclerenchyma fibres add tensile strength.",
            "Lignified xylem, the heartwood, is the main support of tall trees.",
            "Phototropism is growth toward light; gravitropism is the down-ward response of roots.",
            "Thigmotropism is the coiling of a tendril around a solid support.",
            "Tropisms are growth movements controlled by the plant hormone auxin, not by muscles."
          ],
          "keyTakeaway": "Say which stimulus causes which plant movement, and name the hormone and the growing side; direction of the stimulus is what earns the mark.",
          "realWorldExample": "Yam vines on a farm at Techiman are trained on stakes because their tendrils coil by thigmotropism around whatever solid support they touch, and a vine left on the ground spreads its heavy tuber-bearing growth in the shade and yields less."
        },
        {
          "title": "Crawling, Swimming and Good Posture",
          "content": "Invertebrate locomotion shows structure and muscle working as one machine. The earthworm crawls by peristalsis: the circular muscles thin and lengthen a front segment, the bristle-like setae of that segment grip the soil to anchor it, then the longitudinal muscles shorten and thicken it, pulling the rear forward, and the anchor waves pass down the body so the worm loops along, and after heavy rain many cross the motorway paths because the flooded burrows stop their gas exchange through the damp skin. The snail glides on a broad muscular foot; waves of contraction pass along the foot over a bed of its own slippery mucus, which cuts friction and leaves the silver track on the garden wall. A bony fish such as tilapia from the Volta swims by contracting blocks of myotome muscle alternately down each side of the spine so the body waves against the tail fin, which pushes water backward; the paired fins steady and steer, and the swim bladder adjusts general buoyancy so the fish neither sinks nor rises. In ourselves, posture is the quiet half of this topic: a curved back from carrying a school bag on one shoulder, or from bending over a desk for hours, tires the antagonistic muscles of the spine and pulls the vertebral column out of its natural curves, so the load belongs across both shoulders and the injury habit is simple, splint a suspected fracture, cool and rest a sprain, and never massage or force a hurt limb straight.",
          "bulletPoints": [
            "Earthworm peristalsis: alternating muscle waves with setae acting as anchors.",
            "Snail locomotion: muscular foot waves over secreted mucus that reduces friction.",
            "Fish swim by myotome waves against the tail fin; fins steer and the swim bladder trims buoyancy.",
            "Carry loads evenly across both shoulders to keep the natural curves of the spine.",
            "Suspected fracture care: immobilise with a padded splint and seek treatment; do not straighten or massage."
          ],
          "keyTakeaway": "For each animal, name the muscle action plus the structure that grips, glides or pushes; the mark sits on the pairing, not on the word movement.",
          "realWorldExample": "Tilapia cages on the Volta Lake at Adjarra hold their fish in place without sinking because the swim bladder trims buoyancy, and the farmer sees myotome power plainly when a caught fish drums its tail on the boat deck."
        }
      ],
      "commonMistakes": [
        "Saying the earthworm has bones or a back; it has only a hydrostatic coelom of fluid resisted by its body-wall muscles.",
        "Confusing tendons with ligaments: tendons join muscle to bone, ligaments join bone to bone at a joint.",
        "Claiming a muscle pushes a bone back; muscle only pulls, and the return movement comes from the antagonistic partner or from gravity.",
        "Naming flight as the reason an insect exoskeleton limits size when the true limit is weight and molting; state the mass and moult argument.",
        "Describing tendril coiling as phototropism; the stimulus for a tendril is the touch of the support, so the correct word is thigmotropism.",
        "In a lever calculation, measuring distances from the middle of the bone instead of from the joint, which is the fulcrum, giving an effort that cannot be right."
      ],
      "wassceExamTips": [
        "Paper 1 favours joint-and-example matching: know that hip and shoulder are ball-and-socket, elbow and knee are hinge, and atlas on axis is pivot, and you answer in seconds.",
        "In Paper 2 structured lever questions, write the moment formula with both distances measured from the fulcrum at the joint, substitute with units in newtons and centimetres, and box the effort; the formula line itself is a method mark.",
        "For a compare-the-skeletons essay, use three labelled headings, hydrostatic, exoskeleton and endoskeleton, one paragraph each with an example animal; examiners reward organisation.",
        "In Paper 3 you may be shown a prepared joint or a worm specimen; draw only what you see, label the parts named, and never invent muscles that are not visible.",
        "State first-aid for fracture as immobilise, do not straighten, get medical care; answers that advise massaging the limb score zero and can be dangerous."
      ],
      "summaryChecklist": [
        "Can I classify a named animal's skeleton as hydrostatic, exoskeleton or endoskeleton and give one trade-off of that plan?",
        "Can I split the human skeleton into axial and appendicular parts and name three joint types with examples?",
        "Can I explain antagonistic muscle action at the elbow and apply the moment rule to a limb lever?",
        "Can I describe locomotion in the earthworm, the snail and a bony fish, naming the structures that grip, glide or push?",
        "Can I explain plant support from turgor to lignified xylem and name the tropism shown by a tendril, a shaded shoot and a root?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-support-1",
        "title": "Force of the Biceps as a Third-Class Lever",
        "problem": "A student holds a 15 N school bag in her open palm. The bag acts 30 cm from the elbow joint, and the biceps tendon is attached 4 cm from the elbow. Calculate the force the biceps must exert, and find the mechanical advantage of this lever.",
        "stepByStepSolution": [
          "Step 1 (M1): The elbow is the fulcrum, so apply the moment rule: effort x effort arm = load x load arm.",
          "Step 2 (M1): Load moment = 15 N x 30 cm = 450 N cm.",
          "Step 3 (M1): Effort = load moment divided by effort arm = 450 / 4.",
          "Step 4 (A1): The biceps must exert 112.5 N.",
          "Step 5 (M1): Mechanical advantage = load divided by effort = 15 / 112.5 = 0.133.",
          "Step 6 (M1): The advantage is less than one, confirming the forearm is a speed-multiplying lever: the muscle shortens a little, the hand sweeps a large arc.",
          "Step 7 (A1): Final answer: biceps force = 112.5 N, mechanical advantage about 0.13, so the muscle pulls with about seven and a half times the weight of the bag."
        ],
        "keyTakeaway": "Because the biceps inserts close to the elbow, limb muscles normally work at a force disadvantage and pay for movement speed with extra effort."
      },
      {
        "id": "ex-bio-support-2",
        "title": "The Calf Raising the Body on Tiptoe",
        "problem": "In a model of a person standing on tiptoe, the body weight of 450 N acts on the foot 6 cm in front of the toe joint, which is the fulcrum, and the calf muscle pulls upward on the heel 20 cm behind the same joint. Calculate the calf force and the mechanical advantage.",
        "stepByStepSolution": [
          "Step 1 (M1): Take moments about the toe joint: effort x effort arm = load x load arm.",
          "Step 2 (M1): Load moment = 450 N x 6 cm = 2700 N cm.",
          "Step 3 (M1): Effort = 2700 / 20.",
          "Step 4 (A1): The calf force is 135 N.",
          "Step 5 (M1): Mechanical advantage = load / effort = 450 / 135 = 3.33.",
          "Step 6 (M1): The advantage is greater than one because the effort arm, 20 cm, is longer than the load arm, 6 cm; this is a force-multiplying lever.",
          "Step 7 (A1): Final answer: calf force = 135 N, mechanical advantage about 3.3, so the foot lets a modest muscle lift many times its own pull."
        ],
        "keyTakeaway": "The tiptoe lever is built the opposite way to the elbow: with a long effort arm it multiplies force, which is why body weight can be raised on the toes."
      }
    ],
    "quiz": {
      "id": "quiz-bio-support-movement",
      "topicId": "shs1-bio-t1-support-movement-in-organisms",
      "title": "Support and Movement Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-support-1",
          "quizId": "quiz-bio-support-movement",
          "questionText": "Which joint allows movement in all directions?",
          "optionA": "Hinge joint at the knee",
          "optionB": "Ball-and-socket joint at the shoulder",
          "optionC": "Pivot joint between the first neck vertebrae",
          "optionD": "Fixed joint of the skull sutures",
          "correctOption": "B",
          "subConcept": "Types of joints",
          "explanation": "The ball-and-socket joint of the shoulder lets the rounded bone head turn in every plane. The hinge moves in one plane only, the pivot rotates on one axis, and the suture does not move at all.",
          "remediationTip": "Pair each joint with one body place: shoulder hip for ball-and-socket, elbow knee for hinge, neck for pivot."
        },
        {
          "id": "q-bio-support-2",
          "quizId": "quiz-bio-support-movement",
          "questionText": "Why do muscles such as the biceps and triceps work in antagonistic pairs?",
          "optionA": "Because muscles can only contract when warm.",
          "optionB": "Because two muscles together produce more force than one.",
          "optionC": "Because bones cannot bend at the joint.",
          "optionD": "Because a muscle can pull but never push a bone.",
          "correctOption": "D",
          "subConcept": "Muscle action",
          "explanation": "A contracting muscle only pulls, so a second muscle on the far side of the joint must pull the bone back. Option B is partly true of teamwork but misses the key physical limit that muscle cannot push.",
          "remediationTip": "Finish this sentence in your notes: muscle pulls, never pushes, so pairs are needed."
        },
        {
          "id": "q-bio-support-3",
          "quizId": "quiz-bio-support-movement",
          "questionText": "The support system of an earthworm is best described as",
          "optionA": "a hydrostatic skeleton of fluid resisted by body-wall muscles",
          "optionB": "an exoskeleton of chitin that is moulted",
          "optionC": "an endoskeleton of bone and cartilage",
          "optionD": "lignified fibres running along the back",
          "correctOption": "A",
          "subConcept": "Skeleton plans",
          "explanation": "The worm's coelom fluid is incompressible and is opposed by circular and longitudinal muscles, a hydrostatic skeleton. Chitin belongs to arthropods, bone to vertebrates, and lignin to plants, so B, C and D fail.",
          "remediationTip": "Sort skeleton plans by example animal: worm, fluid; insect, shell; fish and cow, bone."
        },
        {
          "id": "q-bio-support-4",
          "quizId": "quiz-bio-support-movement",
          "questionText": "A gourd tendril coils tightly around a stick it touches. This growth movement is",
          "optionA": "phototropism",
          "optionB": "gravitropism",
          "optionC": "thigmotropism",
          "optionD": "turgor wilting",
          "correctOption": "C",
          "subConcept": "Plant movements",
          "explanation": "Coiling in response to touch is thigmotropism. Phototropism answers light and gravitropism answers gravity, so options A and B name the wrong stimulus, while wilting is a loss of turgor, not a tropism.",
          "remediationTip": "Attach the stimulus to the prefix: photo, light; gravito, weight; thigmo, touch."
        },
        {
          "id": "q-bio-support-5",
          "quizId": "quiz-bio-support-movement",
          "questionText": "A classmate falls from a bicycle and the forearm looks bent and very painful. What is the correct first action?",
          "optionA": "Massage the forearm to loosen the muscles.",
          "optionB": "Immobilise the arm with a padded splint and send for medical care.",
          "optionC": "Ask him to bend and straighten the elbow repeatedly.",
          "optionD": "Pull the arm straight at once.",
          "correctOption": "B",
          "subConcept": "Care of injuries",
          "explanation": "A suspected fracture is splinted as it lies and referred for care, because movement can tear bone and tissue further. Massaging, testing movement or pulling the limb straight all risk damage, so A, C and D are wrong.",
          "remediationTip": "Hold the rule: splint, do not straighten, get care."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t1-cell-biology-organelles-microscope",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 7,
    "title": "Cell Biology II: Organelles, Cell Types and Microscope Technique",
    "description": "The structure and function of cell organelles, prokaryotic and eukaryotic cells compared, how plant, animal, fungal and bacterial cells differ, cell specialisation, the evidence behind cell theory, and correct technique with the light microscope, a temporary mount, magnification and the eyepiece graticule.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Every organelle has one named job: the mitochondrion releases energy in respiration, the chloroplast traps light for photosynthesis, the ribosome assembles proteins.\n• The rough endoplasmic reticulum transports proteins, the smooth reticulum makes lipids, the Golgi body modifies and packages secretions, and lysosomes digest worn-out cell parts and engulfed germs.\n• Prokaryotic cells, the bacteria, have free DNA in one loop with no nuclear membrane and no membrane-bound organelles; eukaryotic cells of plants, animals, fungi and protists have a true nucleus.\n• Walls differ: murein in bacteria, cellulose in plants, chitin in fungi, and no wall at all in animal cells.\n• Plant cells add chloroplasts and a large permanent sap vacuole to the shared eukaryotic plan; the vacuole keeps the cell turgid and stores dissolved sugars and pigments.\n• Cell specialisation matches structure to function: root hair cells lengthen absorption, sperm cells swim with a mitochondria-packed midpiece, red blood cells lose the nucleus, ciliated cells move mucus, guard cells open stomata.\n• Total magnification = eyepiece magnification x objective magnification, and both lens values must be quoted.\n• Magnification = length of image or drawing divided by actual length, with both lengths converted to the same unit; 1 mm = 1000 um.\n• Focus first on low power with the coarse knob, then switch to high power and use only the fine knob; carry the microscope by the arm with a hand under the base.",
    "detailedNotes": {
      "overview": "This topic takes you from the parts inside a cell to the skill of seeing them. You will attach one exact function to each named organelle, then sort cells into prokaryotic and eukaryotic groups and compare plant, animal, fungal and bacterial cells on the presence of a wall, its material, and the organelles inside. The second half is technique: how cells are specialised for their jobs, what evidence supports cell theory, and how to prepare a temporary mount, focus a light microscope without damaging it, and calculate magnification from a measured drawing or from a calibrated eyepiece graticule.",
      "introduction": "Work through this topic with a labelled diagram in front of you rather than a list, because most marks are given for a part named correctly on a drawing or a photomicrograph. For each organelle write one sentence joining it to its job, then test yourself by covering the name. For calculations always convert millimetres to micrometres before dividing, and write the x sign on the answer. In practical lessons insist on the correct sequence, low power first with the coarse knob, because examiners penalise answers that describe hunting for the image under high power.",
      "realWorldContext": "In a Ghanaian senior high school laboratory the standard first practical of the year is a scrape of the inner cheek mounted in a drop of methylene blue beside a peeled epidermis from an onion bought at the nearby market, so that box-shaped walled cells and flat irregular animal cells appear on two slides on the same bench. The same school microscope, a monocular instrument with a 10 times eyepiece and 10, 40 and 100 times objectives, is used to look at pond water scraped from a stream behind the compound, where bacteria and one-celled protists sit side by side and give the prokaryote and eukaryote contrast in real life. Lens paper, a clean slide, a coverslip, filter paper and distilled water are the apparatus the laboratory technician must issue for each mount, and used slides are wiped clean and the objectives turned to lowest power before the instrument is stored.",
      "objectives": [
        "Name the organelles of a typical eukaryotic cell and state the single function of each",
        "Compare prokaryotic, plant, animal and fungal cells and place a described cell into the correct group",
        "Explain how named specialised cells are adapted to the function they perform in a tissue",
        "Prepare a temporary mount, focus a light microscope in the correct order and calculate magnification from measured lengths"
      ],
      "sections": [
        {
          "title": "Organelles and the Jobs They Do",
          "content": "Each cell part named in the syllabus carries one function, and the marker awards the score only when the part and its job appear together in the same sentence. Ribosomes assemble proteins; those fixed to the rough endoplasmic reticulum pass their products into its channels for transport, while the smooth reticulum makes lipids and moves materials through the cytoplasm. The Golgi body modifies, packages and dispatches secretions such as digestive enzymes and mucus. Lysosomes hold digestive enzymes that break down worn-out organelles and any engulfed germ. Mitochondria release energy by aerobic respiration and crowd into active cells, while chloroplasts, with their green chlorophyll, trap light energy for photosynthesis and are found only in plant cells. The nucleus governs the cell and carries the chromosomes, and its nucleolus builds ribosomes. Vacuoles store: the large permanent plant vacuole of cell sap keeps the cell turgid, contractile vacuoles in freshwater protozoa pump out surplus water, and food vacuoles hold material being digested.",
          "bulletPoints": [
            "Ribosome: protein assembly; rough endoplasmic reticulum: transport of proteins; smooth reticulum: lipid manufacture.",
            "Golgi body: modification, packaging and secretion; lysosome: intracellular digestion.",
            "Mitochondrion: energy released in respiration; chloroplast: light energy trapped in photosynthesis.",
            "Nucleus: control and hereditary material; nucleolus: ribosome building; vacuole: storage and turgidity."
          ],
          "keyTakeaway": "Learn every organelle as a pair, the structure and its one exact job, because a correct name with a wrong function scores nothing.",
          "realWorldExample": "The cells of a student's salivary glands are rich in rough endoplasmic reticulum and Golgi bodies because they continuously manufacture and export enzymes into the mouth, while the flight muscle of a market chicken is crowded with mitochondria."
        },
        {
          "title": "Prokaryotic and Eukaryotic Cells Compared",
          "content": "Bacterial cells are prokaryotic. Their DNA lies free in the cytoplasm as a single loop with no nuclear membrane round it, there are no mitochondria, no chloroplasts and no endoplasmic reticulum, and only small ribosomes carry out protein making. Many bacteria also have a murein cell wall outside the membrane, a slimy protective capsule, and one or more flagella used for swimming, plus small rings of DNA called plasmids. Plant, animal, fungal and protist cells are all eukaryotic, with a membrane-bound nucleus and membrane-bound organelles. Beyond that shared plan, the plant cell has a cellulose wall, chloroplasts and a large permanent vacuole. The fungal cell has a wall too, but of chitin, has no chloroplast, absorbs food from its medium and stores glycogen. The animal cell has neither wall nor chloroplast and stores glycogen. Cell theory states that all organisms are built of cells, that the cell is the basic unit of structure and function, and that every cell comes from an earlier cell by division; the evidence is the universal appearance of cells in prepared specimens, the fact that isolated cells kept in nutrient fluid divide, and the failure of sterile nutrient fluid ever to produce cells on its own.",
          "bulletPoints": [
            "Prokaryotic cells: no nuclear membrane, one circular DNA loop, no membrane-bound organelles, murein wall, often flagella and a capsule.",
            "Eukaryotic cells: membrane-bound nucleus, mitochondria, endoplasmic reticulum and Golgi body present.",
            "Wall material is a sorting key: murein in bacteria, cellulose in plants, chitin in fungi, absent in animal cells.",
            "Cell theory rests on repeated microscope observation and on cells arising only from pre-existing cells."
          ],
          "keyTakeaway": "Sort any described cell by asking two questions in order: is the nucleus membrane-bound, and what is the wall made of.",
          "realWorldExample": "A Ghanaian teacher comparing pond water organisms with a cheek smear puts prokaryotic bacteria and eukaryotic animal cells in the same lesson, since the bacteria show no nucleus even under the highest school objective."
        },
        {
          "title": "Specialised Cells and Microscope Technique",
          "content": "In a multicellular organism, cells differentiate so that structure fits function. Root hair cells grow long thin cytoplasmic extensions that raise surface area for absorbing water and mineral ions. Sperm cells carry a midpiece packed with mitochondria and a flagellum for swimming, with almost all of its cytoplasm removed. Mature red blood cells lose the nucleus and flatten into a biconcave disc, shortening the diffusion distance for oxygen and leaving room for haemoglobin. Ciliated epithelial cells beat hair-like cilia to sweep mucus along the trachea, guard cells swell and shrink to open and close stomata, and palisade cells stand upright packed with chloroplasts. For the practical, prepare a temporary mount by placing a drop of water or stain on a clean slide, adding a thin specimen, lowering the coverslip at an angle with a needle so that no air bubbles are trapped, and drawing off surplus fluid with filter paper. Begin focusing with the lowest power objective and the coarse adjustment, centre the image, then turn to a higher objective and use the fine adjustment only, keeping the microscope on a flat bench and carrying it by the arm with a hand under the base.",
          "bulletPoints": [
            "Specialisation is a change in structure that fits a cell for one job inside a tissue or organ.",
            "Root hair cell, sperm cell, red blood cell, ciliated cell, guard cell and palisade cell are the named examples to master.",
            "A good temporary mount needs a clean slide, a drop of fluid, a thin specimen and a carefully lowered coverslip free of bubbles.",
            "Focus on low power with the coarse knob first; on high power use the fine knob only, never the coarse knob."
          ],
          "keyTakeaway": "High power is never used before a sharp, centred low-power image, and examiners expect that exact order written in a Paper 3 answer.",
          "realWorldExample": "In a hospital laboratory in Kumasi, a blood film smeared thinly on a slide and stained is examined under the oil-immersion objective, where the flattened nucleus-free red cells stand beside the lobed nuclei of the white cells."
        }
      ],
      "commonMistakes": [
        "Writing that bacteria have no DNA or no cell membrane; they have both, but the DNA is not enclosed in a nuclear membrane and the organelles are not membrane-bound.",
        "Assigning the control of substances entering and leaving to the cell wall; that job belongs to the cell membrane, while the dead cellulose wall only supports and is fully permeable.",
        "Stating that mitochondria store energy; they release energy from food during respiration, and vague storage wording is rejected by markers.",
        "Dividing a drawing length in millimetres by an actual length in micrometres without converting first, which throws the magnification out by a factor of one thousand."
      ],
      "wassceExamTips": [
        "In Paper 1 objective questions on organelles, reject each option that names a different structure before shading; distractors usually swap chloroplast for mitochondrion.",
        "In Paper 2 respect the command word: state needs one line, explain must link cause to effect, and compare must name both cells in every line written.",
        "In Paper 3 you are given a specimen to draw and examine; technique marks come from single unbroken lines, ruler-straight labels on one side, no shading, and a title carrying the magnification.",
        "For any magnification answer, show the formula, substitute both lengths in one unit, then give the answer with the x sign; method lines earn marks even when the final figure slips."
      ],
      "summaryChecklist": [
        "Can I name each organelle, including ribosome, endoplasmic reticulum, Golgi body, lysosome, mitochondrion, chloroplast, nucleus and vacuole, with its single function?",
        "Can I state four differences between a prokaryotic and a eukaryotic cell?",
        "Can I place a described cell in the plant, animal, fungal or bacterial group using the wall material and organelles present?",
        "Can I explain how three named specialised cells are adapted to their functions?",
        "Can I prepare a temporary mount, focus correctly and calculate magnification with units converted?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-cells-1",
        "title": "Calibrating an Eyepiece Graticule and Measuring a Guard Cell",
        "problem": "On a stage micrometer each small division is 0.01 mm. At 400 times total magnification, 40 divisions of the eyepiece graticule line up exactly with 10 divisions of the stage micrometer. A guard cell later spans 12 graticule divisions at the same magnification. Find the actual length of the guard cell in micrometres.",
        "stepByStepSolution": [
          "Step 1 (M1): Length represented on the stage micrometer = 10 divisions x 0.01 mm = 0.1 mm.",
          "Step 2 (M1): Convert to micrometres, 1 mm = 1000 um, so 0.1 mm x 1000 = 100 um.",
          "Step 3 (M1): Value of one graticule division = 100 um divided by 40 divisions = 2.5 um.",
          "Step 4 (A1): At 400 times, one graticule division equals 2.5 um.",
          "Step 5 (M1): Guard cell length = 12 divisions x 2.5 um = 30 um.",
          "Step 6 (A1): Final answer: the actual length of the guard cell is 30 um."
        ],
        "keyTakeaway": "The graticule is only an arbitrary scale until it is calibrated against the stage micrometer at that magnification, and the calibration must be repeated if the objective is changed."
      },
      {
        "id": "ex-bio-cells-2",
        "title": "Field of View, Cell Size and a Change of Objective",
        "problem": "With a 10 times eyepiece and a 10 times objective the diameter of the field of view is 1.6 mm, and about 40 similar cells lie end to end across it. The student turns the nosepiece to the 40 times objective. Find the actual length of one cell and the diameter of the field of view at the new magnification.",
        "stepByStepSolution": [
          "Step 1 (M1): Low-power magnification = 10 x 10 = 100 times; high-power magnification = 10 x 40 = 400 times.",
          "Step 2 (M1): Actual length of one cell = field diameter divided by number of cells = 1.6 mm / 40.",
          "Step 3 (M1): 1.6 / 40 = 0.04 mm, and 0.04 mm x 1000 = 40 um.",
          "Step 4 (A1): One cell is 40 um long.",
          "Step 5 (M1): Field diameter varies inversely with magnification, so new diameter = 1.6 mm x (100 / 400).",
          "Step 6 (A1): Final answer: the field diameter at 400 times is 0.4 mm, so only about 10 of these 40 um cells still fit across it."
        ],
        "keyTakeaway": "Changing the objective changes both the size of the image and the width of the field seen, so a measurement taken at one magnification cannot simply be read again at another."
      }
    ],
    "quiz": {
      "id": "quiz-bio-cells",
      "topicId": "shs1-bio-t1-cell-biology-organelles-microscope",
      "title": "Organelles, Cell Types and Microscope Technique Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-cells-1",
          "quizId": "quiz-bio-cells",
          "questionText": "Which organelle is the site of protein assembly in the cell?",
          "optionA": "Ribosome",
          "optionB": "Golgi body",
          "optionC": "Vacuole",
          "optionD": "Cell wall",
          "correctOption": "A",
          "subConcept": "Organelle functions",
          "explanation": "Ribosomes join amino acids into proteins, free in the cytoplasm or fixed to the rough endoplasmic reticulum. The Golgi body only modifies and packages what the ribosomes have already built, while the vacuole stores and the wall supports.",
          "remediationTip": "Keep the pair ribosome and protein synthesis written on your revision card, separate from Golgi body and packaging."
        },
        {
          "id": "q-bio-cells-2",
          "quizId": "quiz-bio-cells",
          "questionText": "A cell is described as having a membrane-bound nucleus, a cellulose wall and chloroplasts. To which group does it belong?",
          "optionA": "Bacterium",
          "optionB": "Fungus",
          "optionC": "Flowering plant",
          "optionD": "Freshwater protozoan",
          "correctOption": "C",
          "subConcept": "Sorting cell types",
          "explanation": "Only plant cells combine a cellulose wall with chloroplasts and a true nucleus. Bacteria lack the membrane-bound nucleus, fungi have chitin walls and no chloroplasts, and protozoans such as Amoeba have no wall.",
          "remediationTip": "Use a two-key test: is the nucleus membrane-bound, and is the wall cellulose, chitin or murein?"
        },
        {
          "id": "q-bio-cells-3",
          "quizId": "quiz-bio-cells",
          "questionText": "What is the correct way to begin focusing a light microscope on a new slide?",
          "optionA": "High-power objective with the coarse adjustment",
          "optionB": "Low-power objective with the coarse adjustment, then the fine adjustment",
          "optionC": "Fine adjustment only, at every magnification",
          "optionD": "Oil-immersion objective before any other lens",
          "correctOption": "B",
          "subConcept": "Microscope technique",
          "explanation": "The image is found and centred on low power using the coarse knob, then sharpened with the fine knob, and only then is a higher objective turned in with the fine knob alone. Option A risks crushing the slide.",
          "remediationTip": "Recite the order: clean slide, low power, coarse knob, centre, fine knob, higher power, fine knob."
        },
        {
          "id": "q-bio-cells-4",
          "quizId": "quiz-bio-cells",
          "questionText": "Which adaptation allows a mature mammalian red blood cell to carry oxygen efficiently?",
          "optionA": "It contains many mitochondria that supply it with energy",
          "optionB": "It has a large vacuole storing oxygen between breaths",
          "optionC": "Its nucleus divides to replace worn cells in the blood",
          "optionD": "It has no nucleus and is flattened into a biconcave disc",
          "correctOption": "D",
          "subConcept": "Cell specialisation",
          "explanation": "Losing the nucleus and flattening the cell shortens the diffusion distance to the centre and leaves the interior filled with haemoglobin. A mature red cell has no mitochondria, so option A is wrong, and it neither divides nor stores oxygen in a vacuole.",
          "remediationTip": "Link the loss of the nucleus to two gains: more haemoglobin space and a shorter diffusion distance."
        },
        {
          "id": "q-bio-cells-5",
          "quizId": "quiz-bio-cells",
          "questionText": "A drawing of a cell is 60 mm long and the actual cell is 30 um long. What is the magnification of the drawing?",
          "optionA": "2000 times",
          "optionB": "200 times",
          "optionC": "20 times",
          "optionD": "20000 times",
          "correctOption": "A",
          "subConcept": "Magnification calculation",
          "explanation": "Convert 30 um to 0.03 mm, then divide 60 mm by 0.03 mm to get 2000 times. Option B is the classic slip of converting in the wrong direction, leaving the answer a tenth of the truth.",
          "remediationTip": "Always write the conversion line, 1 mm = 1000 um, as a separate step before dividing."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t1-diffusion-osmosis-active-transport",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 8,
    "title": "Movement of Substances Across Membranes",
    "description": "The fluid mosaic structure of the plasma membrane, diffusion and the factors that affect its rate, osmosis proved with potato cylinders and visking tubing, hypotonic, isotonic and hypertonic solutions, turgidity and plasmolysis, active transport against a concentration gradient, osmoregulation in freshwater protozoa, and food preservation by salting and sugaring.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The plasma membrane is a phospholipid bilayer with proteins embedded in it, plus cholesterol and carbohydrate chains; it is selectively permeable rather than a simple bag.\n• Diffusion is the net movement of particles from where they are more concentrated to where they are less concentrated, down a gradient, with no energy taken from respiration.\n• Osmosis is the movement of water from a region of higher water potential to a region of lower water potential through a partially permeable membrane.\n• In a hypotonic solution water enters the cell: a plant cell becomes turgid and an animal cell may burst. In a hypertonic solution water leaves: the plant cell plasmolyses and the animal cell shrinks and becomes scalloped.\n• In an isotonic solution water moves both ways at the same rate, so there is no net change in mass.\n• Active transport moves substances against a concentration gradient and needs energy released in respiration; root hair cells take up mineral ions and gut lining cells absorb glucose this way.\n• Freshwater protozoa such as Amoeba collect the water that enters by osmosis and expel it through a contractile vacuole, the named example of osmoregulation.\n• Salting fish and sugaring fruit preserve them because the strong external solution draws water out of microbial cells and stops them growing.\n• Rate of diffusion rises with greater concentration difference, higher temperature, larger surface area and shorter distance, and falls as particle size increases.",
    "detailedNotes": {
      "overview": "This topic explains how a cell exchanges materials with its surroundings through one structure, the plasma membrane. You will describe the membrane as a phospholipid bilayer studded with proteins and connect that structure to selective permeability. Then you will separate two movements examiners love to confuse, diffusion of solute down a gradient and osmosis of water through a partially permeable membrane, and use the words hypotonic, isotonic and hypertonic to predict what happens to plant and animal cells. The topic closes with active transport against a gradient, osmoregulation in freshwater protozoa, and the everyday chemistry of salted fish and sugared fruit.",
      "introduction": "Treat each process as a definition with three fixed parts and rehearse them until they come out complete. Diffusion needs net movement, a concentration gradient and no energy. Osmosis needs water only, a partially permeable membrane and a difference in water potential. Active transport needs movement against the gradient and energy from respiration. In laboratory questions, always say which way the mass or volume changed and why before naming the solution. When a question asks about a plant tissue, use turgid, flaccid or plasmolysed rather than general words such as swollen.",
      "realWorldContext": "Ghanaian markets supply the classroom cases. Dried and salted fish hung at Techiman is firm because the heavy salt layer has pulled water out of the bacterial cells that would otherwise rot it, and the same principle keeps bottered overripe mango preserved in thick sugar syrup. In the school laboratory, cylinders cut from a potato with a cork borer are weighed before and after thirty minutes in strong salt solution, and a visking tubing sac of sucrose suspended in distilled water gains mass as water moves in, proving osmosis with apparatus any GES laboratory can issue. In the body, the root hairs of a vegetable garden on the school compound absorb nitrate against a gradient, an everyday case of active transport, and a student who rinses salted water out of a cut wound feels the sting of cells losing water.",
      "objectives": [
        "Describe the plasma membrane as a phospholipid bilayer with proteins and relate that structure to selective permeability",
        "Define diffusion and osmosis precisely and name the factors that change the rate of each",
        "Predict the behaviour of plant and animal cells in hypotonic, isotonic and hypertonic solutions using turgid, plasmolysed and crenated",
        "Explain active transport and osmoregulation in named examples and apply membrane movement to preservation by salting and sugaring"
      ],
      "sections": [
        {
          "title": "The Plasma Membrane as a Selective Barrier",
          "content": "The membrane that encloses every living cell is about seven nanometres thick and built as a bilayer of phospholipids, each molecule with a water-loving head outward and a water-fearing tail inward. This arrangement lets small non-polar molecules such as oxygen and carbon dioxide slip straight through the lipid, while water and dissolved ions cross mainly through protein channels and carriers. Embedded proteins also act as enzymes, as receptors that receive hormones, and as the pump proteins of active transport. Cholesterol molecules lie between the phospholipids and steady the membrane so that it stays neither too fluid nor too stiff, and carbohydrate chains on the outer face serve in recognition, which is why a transfused cell of the wrong group is attacked. Because the parts drift sideways rather than being cemented, the accepted model is called the fluid mosaic model. The membrane is described as selectively or differentially permeable: it is not a sieve, and its permeability to one substance tells you nothing about another.",
          "bulletPoints": [
            "A phospholipid bilayer with hydrophilic heads outward and hydrophobic tails inward forms the basic barrier.",
            "Protein channels, carriers and pumps control the passage of ions, sugars and amino acids.",
            "Cholesterol steadies the membrane and surface carbohydrate chains act in cell recognition.",
            "Selective permeability means water and small non-polar molecules pass while larger or charged solutes need proteins."
          ],
          "keyTakeaway": "Structure explains behaviour: the lipid interior admits fat-soluble molecules, the proteins admit the rest, and that is what selective permeability means.",
          "realWorldExample": "The cells lining a Ghanaian student's small intestine absorb glucose through carrier proteins that a plain lipid layer could never pass, which is why a meal of boiled yam raises blood sugar within minutes."
        },
        {
          "title": "Diffusion and Osmosis Proved in the Laboratory",
          "content": "Diffusion is the net movement of particles from a region of their higher concentration to one of their lower concentration, driven only by the random kinetic energy of the particles, and it continues until the mixture is even. Its rate increases with a steeper concentration difference, higher temperature, larger surface area and shorter diffusion distance, and it falls as the particle becomes larger. Oxygen entering a leaf through stomata and the smell of roasting groundnut spreading across a room are both diffusion. Osmosis is a special case restricted to water: it is the movement of water molecules from a region of higher water potential to one of lower water potential through a partially permeable membrane. Two classic school demonstrations prove it. Potato cylinders cut with a cork borer are blotted dry, weighed, placed in sucrose solutions of different strength, removed after thirty minutes, blotted again and reweighed; the cylinders gain mass in dilute solution and lose mass in strong solution, and the strength at which the mass does not change equals the water potential of the cell sap. In the second, sucrose solution is tied inside visking tubing, a partially permeable membrane, and suspended in distilled water; the sac swells and the tube can push liquid up a narrow glass capillary, showing water entering the more concentrated side.",
          "bulletPoints": [
            "Diffusion moves any particles down a concentration gradient and needs no energy from respiration.",
            "Osmosis moves only water and requires a partially permeable membrane and a water potential difference.",
            "Potato cylinder mass change in sucrose solutions identifies the isotonic point of the cell sap.",
            "A visking tubing sac of sucrose in water gains mass and can lift liquid in a capillary tube."
          ],
          "keyTakeaway": "State osmosis completely, water, from higher to lower water potential, through a partially permeable membrane, or the mark is lost even when the idea is right.",
          "realWorldExample": "A vendor who sprinkles salt on sliced garden eggs before packing them watches osmosis work: water leaves the fruit cells, the slices soften and the brine that forms is extracted cell sap."
        },
        {
          "title": "Turgor, Active Transport and Osmoregulation",
          "content": "The way a cell reacts to an external solution depends on whether it has a wall. In a hypotonic solution, dilute compared with cell sap, water enters; a plant cell becomes turgid as its vacuole presses the cytoplasm against the rigid wall, and this turgidity is what keeps a young maize plant upright, while a red blood cell in pure water takes in water until it bursts, a haemolysis. In a hypertonic solution water leaves; the plant protoplast shrinks away from the wall in plasmolysis, the tissue wilts, and the animal cell shrinks and becomes scalloped or crenated. In an isotonic solution there is no net movement and both cell types behave normally. Movement against a gradient is different and costs energy: root hair cells absorb nitrate and phosphate ions from soil water that is more dilute than their sap, and the lining of the small intestine reabsorbs the last of the glucose, both by active transport using energy released in respiration, which is why a poison that stops respiration also stops absorption at once. Freshwater protozoa face a constant inflow of water across their body surface; contractile vacuoles collect that surplus and expel it in regular pulses, the simplest form of osmoregulation. Salting fish and sugaring jam preserve food because the concentrated outside solution is hypertonic to microbial cells, so water leaves them, they plasmolyse and can no longer grow.",
          "bulletPoints": [
            "Turgid, flaccid and plasmolysed are the correct terms for a plant cell in hypotonic, isotonic and hypertonic solution.",
            "Animal cells lack a wall, so they burst in dilute solution and crenate in concentrated solution.",
            "Active transport moves substances from low to high concentration and consumes energy released in respiration.",
            "Contractile vacuoles in Amoeba and other pond protists expel surplus water taken in by osmosis.",
            "Salt and sugar preserve food by making the surface solution hypertonic to microbial cells."
          ],
          "keyTakeaway": "Ask first whether the cell has a wall, then whether the movement is with or against the gradient; those two decisions answer almost every membrane question.",
          "realWorldExample": "Weeds along a salt-dirty roadside drain wilt and die because their root hairs lose water to the hypertonic soil solution, exactly as the potato cylinder did in the laboratory."
        }
      ],
      "commonMistakes": [
        "Defining osmosis as the movement of water from low to high concentration; the correct statement is water moving from higher to lower water potential through a partially permeable membrane.",
        "Omitting the words partially permeable membrane from an osmosis definition, which makes the answer describe ordinary diffusion instead.",
        "Claiming that active transport needs no energy because it occurs in living cells; examiners require the statement that energy from respiration is used.",
        "Describing a plasmolysed plant cell as one in which the whole cell has shrunk; it is the protoplast that pulls away from the wall, while the wall keeps its shape."
      ],
      "wassceExamTips": [
        "Paper 1 often pairs a definition with a graph of mass against sucrose concentration; choose the concentration where the curve crosses the starting mass, since that is the isotonic point.",
        "In Paper 2, write the three parts of the osmosis definition in order and add the direction of water movement for each named solution to secure every mark.",
        "Paper 3 practicals with visking tubing or potato cylinders award the observation mark and the explanation mark separately, so never merge them into one sentence.",
        "When a question says explain, name the process, state the gradient and state whether energy is used; when it says state, one precise line is enough."
      ],
      "summaryChecklist": [
        "Can I describe the fluid mosaic membrane and say which molecules pass through lipid and which need proteins?",
        "Can I define diffusion and osmosis completely and list four factors affecting the rate of diffusion?",
        "Can I predict the appearance of a plant cell and a red blood cell in each of hypotonic, isotonic and hypertonic solution?",
        "Can I explain active transport with two named examples and state where the energy comes from?",
        "Can I use osmosis to explain contractile vacuoles and the preservation of salted fish and sugared fruit?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-membranes-1",
        "title": "Surface Area to Volume Ratio and Cell Size",
        "problem": "A cube-shaped cell has sides 2 um long, and a second cell of the same kind has sides 4 um long. Calculate the surface area to volume ratio of each cell and explain why the larger cell is at a disadvantage in moving substances across its membrane.",
        "stepByStepSolution": [
          "Step 1 (M1): Surface area of the small cell = 6 x (2 x 2) = 6 x 4 = 24 um2.",
          "Step 2 (M1): Volume of the small cell = 2 x 2 x 2 = 8 um3, so its ratio = 24 / 8 = 3.",
          "Step 3 (M1): Surface area of the large cell = 6 x (4 x 4) = 96 um2 and its volume = 4 x 4 x 4 = 64 um3.",
          "Step 4 (M1): Ratio of the large cell = 96 / 64 = 1.5.",
          "Step 5 (A1): The ratios are 3 to 1 for the 2 um cell and 1.5 to 1 for the 4 um cell.",
          "Step 6 (M1): Doubling each side multiplies surface area by 96 / 24 = 4 but multiplies volume by 64 / 8 = 8.",
          "Step 7 (A1): Final answer: the larger cell has proportionally less membrane for its volume, so diffusion cannot serve its centre quickly enough, which is why cells stay small or divide."
        ],
        "keyTakeaway": "Volume grows faster than surface area, so a large cell overcomes the limit by flattening, elongating, developing folds, or dividing into two smaller cells."
      },
      {
        "id": "ex-bio-membranes-2",
        "title": "Percentage Mass Change of Potato Cylinders in Sucrose",
        "problem": "Three potato cylinders of equal size weigh 6.0 g together before being placed in sucrose solution. After thirty minutes they are removed, blotted dry and reweighed at 5.1 g. Calculate the percentage change in mass and state whether the solution was hypotonic or hypertonic to the cell sap.",
        "stepByStepSolution": [
          "Step 1 (M1): Change in mass = final mass minus initial mass = 5.1 g - 6.0 g = -0.9 g.",
          "Step 2 (M1): Percentage change = change divided by initial mass, then multiplied by 100 = (-0.9 / 6.0) x 100.",
          "Step 3 (M1): -0.9 / 6.0 = -0.15, and -0.15 x 100 = -15.",
          "Step 4 (A1): The mass change is minus 15 percent, a loss of 15 percent of the original mass.",
          "Step 5 (M1): Mass fell because water left the potato cells by osmosis, moving to the solution of lower water potential outside.",
          "Step 6 (A1): Final answer: the sucrose solution was hypertonic to the cell sap, and the cells became flaccid and plasmolysed."
        ],
        "keyTakeaway": "Always divide the change by the starting mass and keep the sign, because the direction of the mass change is what identifies the solution."
      }
    ],
    "quiz": {
      "id": "quiz-bio-membranes",
      "topicId": "shs1-bio-t1-diffusion-osmosis-active-transport",
      "title": "Movement Across Membranes Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-membranes-1",
          "quizId": "quiz-bio-membranes",
          "questionText": "Which statement describes diffusion correctly?",
          "optionA": "It is the movement of water into a cell against a gradient",
          "optionB": "It requires energy released during respiration",
          "optionC": "It is the net movement of particles down a concentration gradient",
          "optionD": "It can only occur inside living cells",
          "correctOption": "C",
          "subConcept": "Diffusion defined",
          "explanation": "Diffusion is the net movement of particles from higher to lower concentration, powered by their own kinetic energy. Option A describes osmosis, option B describes active transport, and diffusion also occurs in non-living air and water.",
          "remediationTip": "Attach one requirement to each process: diffusion needs a gradient, osmosis needs a membrane and water, active transport needs energy."
        },
        {
          "id": "q-bio-membranes-2",
          "quizId": "quiz-bio-membranes",
          "questionText": "A plant cell placed in pure water becomes turgid mainly because",
          "optionA": "water enters the vacuole by osmosis and presses the cytoplasm against the wall",
          "optionB": "the cellulose wall absorbs salts from the surrounding water",
          "optionC": "the chloroplasts release water during photosynthesis",
          "optionD": "sugar molecules are actively pumped into the cell sap",
          "correctOption": "A",
          "subConcept": "Osmosis and turgor",
          "explanation": "Pure water has a higher water potential than cell sap, so water enters by osmosis, the vacuole expands and the rigid wall prevents bursting. The wall is dead and does not absorb salts, and photosynthetic water is not what causes swelling.",
          "remediationTip": "Draw the turgid cell with arrows showing water inward and label the vacuole as the reservoir that creates the pressure."
        },
        {
          "id": "q-bio-membranes-3",
          "quizId": "quiz-bio-membranes",
          "questionText": "Which part of the plasma membrane allows fat-soluble molecules to pass through it most easily?",
          "optionA": "The protein channels",
          "optionB": "The carbohydrate chains on the surface",
          "optionC": "The ribosomes attached to its inner face",
          "optionD": "The phospholipid bilayer itself",
          "correctOption": "D",
          "subConcept": "Membrane structure",
          "explanation": "The lipid interior of the bilayer dissolves and passes small non-polar, fat-soluble molecules, whereas ions and sugars need protein channels. Carbohydrate chains serve in recognition and ribosomes are not membrane components.",
          "remediationTip": "Write the rule like dissolves like: fat-soluble things cross the lipid, charged things need a protein."
        },
        {
          "id": "q-bio-membranes-4",
          "quizId": "quiz-bio-membranes",
          "questionText": "Soil water contains nitrate ions at a lower concentration than root hair cell sap. How does the root hair obtain that nitrate?",
          "optionA": "By osmosis through the root cap",
          "optionB": "By active transport using energy from respiration",
          "optionC": "By diffusion along the xylem vessels",
          "optionD": "By evaporation from the leaf surface",
          "correctOption": "B",
          "subConcept": "Active transport",
          "explanation": "Uptake from dilute soil water is movement against the concentration gradient, which only active transport can do, and it consumes energy released in respiration. Osmosis and diffusion both move down a gradient and cannot achieve this.",
          "remediationTip": "Sketch the gradient with the arrow pointing uphill and write energy required beside it."
        },
        {
          "id": "q-bio-membranes-5",
          "quizId": "quiz-bio-membranes",
          "questionText": "Why does salting fish preserve it?",
          "optionA": "The salt supplies minerals that make the flesh firm",
          "optionB": "The salt lowers the temperature of the fish",
          "optionC": "The concentrated surface solution draws water out of microbial cells and stops them growing",
          "optionD": "The salt destroys the enzymes already present in the fish flesh",
          "correctOption": "C",
          "subConcept": "Osmosis in preservation",
          "explanation": "Salt makes the surface hypertonic, so water leaves bacterial cells by osmosis, they plasmolyse and cannot multiply. Cooling, mineral supply and destruction of the fish's own enzymes are not the antimicrobial action of salt.",
          "remediationTip": "State the chain in four links: salt outside, water out of the microbe, plasmolysis, no growth."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t2-transport-in-plants-and-animals",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 3,
    "title": "Transport in Plants and Animals",
    "description": "Xylem and phloem with the transpiration stream and root pressure, blood components and dilution counting, the mammalian heart with double circulation, arteries, veins, capillaries and lymph, and transport adaptations in insects and fish.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Plants transport water and mineral salts in xylem, one-way upward from root to leaf, and manufactured food as sucrose in phloem, from leaves to where it is needed.\n• Xylem vessels are dead, hollow, lignin-thickened tubes reinforced with rings, spirals or pits; phloem sieve tubes are living, with perforated sieve plates.\n• Transpiration is the evaporation of water mainly from the mesophyll surfaces out through the stomata; it drives the upward pull.\n• The cohesion-tension theory: water molecules cohere by hydrogen bonding, so the evaporation at the leaf pulls a continuous column up the xylem.\n• Root pressure lifts water a modest height, shown by guttation, droplets on leaf edges in the early morning, but tall trees depend on the transpiration pull.\n• Transpiration rate rises with light, temperature and wind and falls with humidity; cover a leaf surface with petroleum jelly and the water loss drops sharply.\n• Mammalian blood is plasma, red cells, white cells and platelets; plasma carries nutrients, hormones and waste, red cells carry oxygen in haemoglobin.\n• Red cells are biconcave, lack a nucleus in mammals, and their haemoglobin binds oxygen loosely to form oxyhaemoglobin in the lungs.\n• White cells defend by phagocytosis and antibody production; platelets are cell fragments that start clotting at a wound.\n• Blood is formed in the red bone marrow; a dilution experiment counts cells: a drop of blood diluted 200 times, charged into a counting chamber, and the cells per volume multiplied by the dilution factor.\n• The mammalian heart has four chambers: two thin atria receive blood, two thick ventricles pump it out, the left wall is thickest because it sends blood to the whole body.\n• Valves, the atrio-ventricular and the semi-lunar, keep blood flowing one way; the heartbeat is atrial systole, ventricular systole, then diastole.\n• Double circulation means blood passes through the heart twice per full body circuit: the pulmonary circuit to the lungs and the systemic circuit to the body.\n• Arteries have thick elastic muscular walls and narrow lumens and pulse; veins have thin walls, wide lumens and valves; capillaries are one cell thick for exchange.\n• The pulmonary artery carries deoxygenated blood and the pulmonary vein carries oxygenated blood; artery and vein are named by direction from or to the heart, not by oxygen content.\n• Lymph is tissue fluid returned to the blood through the lymphatic system; it is colourless, carries few cells and returns leaked plasma proteins.\n• Insects have an open system: haemolymph is bathed over organs by a dorsal heart, while oxygen reaches tissues directly through the tracheal system, so the blood carries no respiratory pigment.\n• Fish have a two-chambered heart and single circulation through the gills, where countercurrent flow of blood and water keeps oxygen diffusing along the whole lamella.",
    "detailedNotes": {
      "overview": "Large organisms need delivery services, and this topic studies the two best-designed ones in the living world. You will trace the xylem and phloem systems of a plant, the transpiration stream that pulls water upward, and the evidence from staining and ringing experiments. Then you move to animals: the components and functions of blood, the four-chambered mammalian heart with its valves and double circulation, the structure of the three vessel types with lymph as the overflow service, and the transport plans of insects and fish. Worked examples take the cardiac output calculation and the potometer reading, two standard WAEC number questions.",
      "introduction": "Transport questions reward labelled process more than memorised nouns, so practise narrating pathways: a water molecule from a root hair, through cortex, xylem, stem, leaf vein and out through a stoma; a red cell from the left ventricle, down the aorta, through a capillary bed and back by a vein. Make a three-column table for artery, vein and capillary on wall thickness, lumen, pressure and function, and a parallel table for xylem against phloem. For every calculation state the formula before substituting, and attach units, mL or mm per minute, because omissions cost the answer mark.",
      "realWorldContext": "Transport in Ghana is visible on every window sill and in every clinic queue. In the GES laboratory a class stands a shoot of spring onion or celery in pale eosin solution and after an hour only the thin outer ring of the stem, the xylem, is stained pink, proving water rides in that tissue. A cut palm fruit bunch bleeds sap under the midday sun as the transpiration pull runs. At Komfo Anokye Teaching Hospital in Kumasi, donors give blood whose red cells are counted in a dilution chamber before a transfusion, and the same hospital treats the blockage of coronary vessels that stops the heart pump described here. A farmer walking behind a trotro on a dusty road at Techiman sweats as his cardiac output climbs with exercise, exactly the calculation modelled below.",
      "objectives": [
        "Distinguish xylem from phloem in structure, direction of flow and substance carried",
        "Explain the cohesion-tension theory of water ascent and the factors that alter transpiration rate",
        "Name the components of mammalian blood and state the function of each, including the dilution principle for cell counts",
        "Describe the four chambers, valves and cardiac cycle of the mammalian heart and explain double circulation",
        "Compare arteries, veins and capillaries in structure and function and outline the roles of lymph, and of insect and fish transport"
      ],
      "sections": [
        {
          "title": "Xylem, Phloem and the Transpiration Stream",
          "content": "A plant runs two separate pipelines. Xylem carries water with its dissolved mineral salts upward from roots to leaves in one direction only; its vessels are tubes of dead cells whose cross walls have dissolved away, the walls thickened with lignin in rings, spirals or pitted bands, strong enough to resist collapsing while remaining permeable to water. Phloem carries manufactured food, chiefly sucrose dissolved in water, from the leaves to wherever it is needed, to a growing tip, a storage root or a ripening fruit, and this flow in many directions is translocation; its sieve tubes are living cells joined end to end, their end walls perforated into sieve plates and their nuclei gone so the solution passes freely. The evidence in the school laboratory is cheap and decisive: a shoot of celery or spring onion in dilute red dye stains only the fine xylem strands in the stem and leaf veins, and a ring of bark stripped from a tree trunk, which removes phloem, causes a swelling above the ring as food piles up on its way down, while the leaves inside the ringed area stay turgid because the deep xylem is untouched.",
          "bulletPoints": [
            "Xylem: dead lignin-thickened tubes; carries water and mineral salts one way, root to leaf.",
            "Phloem: living sieve tubes with sieve plates; carries sucrose both ways, source to store.",
            "Red-dye staining of a celery stem shows the xylem path.",
            "Ringing experiment: bark stripping blocks phloem, causing swelling above the cut while xylem continues below.",
            "Translocation in phloem needs energy from respiration; water ascent in xylem does not, being driven by evaporation."
          ],
          "keyTakeaway": "Pair tissue with substance with direction: xylem water upward, phloem food both ways; a WAEC diagram mark sits on the arrow, not just the label.",
          "realWorldExample": "A cocoa farmer who rings a branch to pause its growth reads the same physiology as the ringing experiment: the swelling of sugary tissue above the cut shows phloem carrying food downward from the leaves."
        },
        {
          "title": "Transpiration, Cohesion-Tension and Root Pressure",
          "content": "Transpiration is the loss of water vapour from the plant surface, overwhelmingly through the stomata of the leaf, where damp mesophyll cell walls evaporate into the air spaces and the vapour diffuses out down its concentration gradient. The pull that lifts water tens of metres comes from that evaporation, and the explanation is the cohesion-tension theory: water molecules stick to one another by cohesion and to the xylem walls by adhesion, so each molecule evaporating at the leaf tugs the next molecule up, and the whole column from root xylem to leaf behaves as one unbroken thread under tension. Support for the theory sits in everyday observations: a cut stem does not pull sap out, but air snapping into a broken column shows tension exists; the trunk of a tall tree measurably shrinks a little on a sunny day as tension rises. Root pressure is a second, weaker lifting force: minerals actively pumped into the xylem draw water in by osmosis, and the resulting pressure can push water upward, seen as guttation, the ring of droplets on the edges of taro or cocoyam leaves on a humid dawn. Factors then set the rate: light opens stomata and warms the leaf, warmth increases evaporation, wind sweeps the humid pocket off the surface, and humid air slows the gradient, which is why a plant in a stuffy closed room loses water more slowly than one in the harmattan breeze.",
          "bulletPoints": [
            "Transpiration is evaporation of water mainly from stomata on the leaf surface.",
            "Cohesion-tension theory: evaporating water pulls a continuous, cohering column up the xylem.",
            "Root pressure lifts water weakly and causes guttation droplets at dawn.",
            "Rate rises with light, temperature and wind; falls with humidity.",
            "Petroleum jelly sealing a lower leaf surface cuts water loss, an answer to a standard Paper 3 query."
          ],
          "keyTakeaway": "Name the driving force honestly: the sun's evaporation at the leaf, transmitted by cohesion, lifts the water; root pressure is a helper only near the ground.",
          "realWorldExample": "On a still humid morning at Dunkwa the cocoyam leaves are beaded with guttation drops from root pressure, yet by noon under a strong sun the same plants transpire heavily and wilt slightly unless the soil keeps them supplied."
        },
        {
          "title": "Blood: Components and the Dilution Principle",
          "content": "Mammalian blood is a transport tissue with four named components, and WAEC expects each job matched to each part. Plasma, about fifty-five per cent of the volume, is nine-tenths water carrying dissolved glucose, amino acids, salts, hormones, urea and the proteins that help clotting; it is the river in which everything else floats. Red cells, erythrocytes, are biconcave discs without nuclei in mammals, packed with the pigment haemoglobin that takes up oxygen in the lungs to form oxyhaemoglobin and releases it in the tissues; their thin flattened shape gives a huge surface for diffusion and their flexibility lets them squeeze through narrow capillaries. White cells, leucocytes, are the defence: phagocytes engulf and digest pathogens, lymphocytes manufacture the specific antibodies, and a rise in their count in a blood sample flags infection. Platelets are cell fragments that break apart at a wound, triggering the clot that seals it. All three cellular components are made in the red bone marrow of large bones such as the femur. To count them a laboratory dilutes blood by a known factor, often two hundred times, charges the diluted fluid into a ruled counting chamber, counts the cells in a known small volume and multiplies back by the dilution to recover cells per cubic millimetre of original blood; dilution series like this also let a student estimate how little blood is needed for one counted drop.",
          "bulletPoints": [
            "Plasma transports nutrients, hormones, salts, urea and clotting proteins.",
            "Red cells: no nucleus, biconcave, haemoglobin carries oxygen as oxyhaemoglobin.",
            "White cells: phagocytosis and antibody production; platelets: clotting.",
            "Blood cells form in red bone marrow, not in the heart or liver.",
            "Dilution counting: cells per volume of diluted sample multiplied by the dilution factor recovers the original count."
          ],
          "keyTakeaway": "Keep component and function locked in one sentence each, and remember the counting principle: measured count multiplied by the dilution factor.",
          "realWorldExample": "At a hospital laboratory in Kumasi a donor sample is diluted 200 times before the counting chamber, because undiluted blood is so dense with red cells that no one could count it accurately."
        },
        {
          "title": "The Mammalian Heart and Double Circulation",
          "content": "The heart is a muscular pump in the chest, its wall of cardiac muscle supplied by its own coronary arteries, built as four chambers: right and left atria above, thin-walled receivers of returning blood; right and left ventricles below, thick-walled injectors, and the left ventricle wall is by far the thickest because it must drive blood through the high-resistance systemic circuit to the whole body while the right pushes only to the nearby lungs. Blood enters the right atrium from the vena cava and the left atrium from the pulmonary veins, passes through the atrio-ventricular valves into the ventricles, and leaves by the pulmonary artery and the aorta through the semi-lunar valves. The valves force traffic one way: when a ventricle contracts the atrio-ventricular valves snap shut, giving the first heart sound, and when the ventricle relaxes the semi-lunar valves click shut. One heartbeat completes a cardiac cycle of about eight-tenths of a second at a rate of seventy-five per minute, atrial systole topping the ventricles, ventricular systole ejecting blood, then diastole while the chambers refill. The architecture is a double circulation because blood passes through the heart twice on a complete journey, the short pulmonary circuit to the lungs for gas exchange and the long systemic circuit to the tissues, separated by the septum so that oxygenated and deoxygenated blood never mix. The advantage is pressure management: re-boosting the blood after the low-pressure lung trip lets systemic pressure stay high, which warm-blooded activity demands.",
          "bulletPoints": [
            "Four chambers: atria receive, ventricles pump; the left ventricle wall is the thickest.",
            "Atrio-ventricular and semi-lunar valves keep flow one-way and make the two heart sounds.",
            "Cardiac output = stroke volume multiplied by heart rate; at rest about 70 mL x 72 per minute.",
            "Double circulation: pulmonary circuit to the lungs, systemic circuit to the body, septum separating the sides.",
            "Coronary arteries feed the heart muscle itself; their blockage is a heart attack."
          ],
          "keyTakeaway": "State the double circuit as blood going through the heart twice per full journey, and the septum's purpose as keeping the two bloods apart.",
          "realWorldExample": "The emergency ward at Korle-Bu in Accra treats damage to the heart's own plumbing daily, and a nurse counting a patient's pulse at the wrist is reading the ventricular systoles of the cycle described here."
        },
        {
          "title": "Vessels, Lymph, and Transport in Insects and Fish",
          "content": "The three vessel kinds differ exactly as their jobs demand. Arteries take blood away from the heart under high pressure, so their walls are thick, muscular and elastic, the elasticity smoothing the pulse and the narrow lumen maintaining pressure; they lie deep except at the wrist and neck where a pulse can be taken. Veins return blood to the heart under low pressure, so their walls are thinner, their lumens wide to offer little resistance, and most contain semilunar valves along their length to stop backflow against gravity, the reason a varicose vein swells when those valves fail. Capillaries are the exchange shops: one cell thick, microscopic, in vast networks around every active tissue, porous enough for plasma to leak out as tissue fluid and slow enough for diffusion of gases, food and waste between blood and cells. The leaked tissue fluid, plasma without its big proteins, bathes the cells and drains back through the lymphatic system as lymph, a colourless fluid with few cells, returned to a vein near the heart, so the circulatory system never loses volume. Outside mammals, transport plans diverge: an insect such as a housefly or a termite has an open system, a dorsal heart pumping colourless haemolymph over the organs in the body cavity, and no respiratory pigment at all, because a network of tracheal tubes carries air directly to every tissue through the spiracles. A fish such as tilapia has a closed system and a two-chambered heart, one atrium and one ventricle, in single circulation: blood is pumped to the gills, gains oxygen there between countercurrent flows of blood and water that keep the diffusion gradient along the whole lamella, and travels onward to the tissues on one declining pressure, a design adequate for the cold-blooded fish.",
          "bulletPoints": [
            "Arteries: thick elastic walls, narrow lumen, high pressure, flow away from the heart.",
            "Veins: thin walls, wide lumen, valves, low pressure; failure of valves gives varicose veins.",
            "Capillaries: one cell thick, porous, the exchange beds; their leak forms tissue fluid.",
            "Lymph is returned tissue fluid, colourless, drained back to the blood near the heart.",
            "Insects run an open haemolymph system with tracheal air tubes; fish a single circulation through countercurrent gills."
          ],
          "keyTakeaway": "Judge any vessel by pressure and job: away, high pressure, thick wall; return, low pressure, valves; exchange, one cell thick.",
          "realWorldExample": "A fishmonger at Elmina splitting a tilapia can show the dark red gill arches where water and blood flow in opposite directions, keeping every drop of oxygen the water holds, the reason the gill design beats a simple one-way wash."
        }
      ],
      "commonMistakes": [
        "Saying arteries always carry oxygenated blood and veins always deoxygenated; the pulmonary artery carries deoxygenated blood and the pulmonary vein oxygenated, because the naming rule is direction from or to the heart.",
        "Claiming blood is pumped to the body by the right ventricle; the right side serves only the lungs, and the thick left ventricle serves the body.",
        "Confusing xylem with phloem in transport direction or content; xylem is water upward in dead tissue, phloem is food both ways in living tissue.",
        "Attributing water ascent mainly to root pressure in tall trees; the transpiration pull with cohesion lifts columns over tens of metres.",
        "Naming the site of blood cell formation as the heart or liver; in the adult mammal red blood cells and most white cells form in red bone marrow.",
        "Stating that lymph is red or carries red cells in abundance; lymph is colourless tissue fluid returned to the blood and it transports few cells."
      ],
      "wassceExamTips": [
        "Paper 1 leans on the pulmonary exceptions: expect one item asking which vessel carries deoxygenated blood, and answer by direction rule, artery means away from heart.",
        "In Paper 2 a heart diagram asks for labels and flow arrows; draw arrows into atria, out of ventricles, mark the thick left wall, and name the four vessels exactly.",
        "For cardiac output questions write the formula, substitute with units, and give the answer per minute; a value like 5040 mL per minute without units loses marks.",
        "In Paper 3 a potometer or a stained celery stem is standard: record distances in mm, divide by time, state the rate in mm per minute, and name the precautions of sealing joints and cutting the stem under water.",
        "When asked to compare two vessel types, use paired rows of wall, lumen, pressure, valves and function; scattered sentences cost structure marks."
      ],
      "summaryChecklist": [
        "Can I trace a water molecule from root hair to stoma, naming xylem, cohesion-tension and the driving factor?",
        "Can I distinguish xylem from phloem in structure, content and direction with one supporting experiment?",
        "Can I name the four blood components with their functions and explain dilution counting in one sentence?",
        "Can I label a heart diagram with chambers, valves and vessels and explain double circulation with the septum's role?",
        "Can I compare artery, vein and capillary structure to function and outline lymph, insect open transport and fish single circulation?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-transport-1",
        "title": "Cardiac Output at Rest and During Exercise",
        "problem": "At rest a student has a stroke volume of 70 mL and a heart rate of 72 beats per minute. During football practice her stroke volume rises to 90 mL and her heart rate to 140 beats per minute. Calculate the cardiac output in each state and the factor by which it increases.",
        "stepByStepSolution": [
          "Step 1 (M1): Cardiac output = stroke volume x heart rate per minute.",
          "Step 2 (M1): At rest: 70 mL x 72 = 5040 mL per minute.",
          "Step 3 (A1): At rest the output is 5040 mL per minute, about 5.0 litres per minute.",
          "Step 4 (M1): During exercise: 90 mL x 140 = 12600 mL per minute.",
          "Step 5 (A1): During exercise the output is 12600 mL per minute, that is 12.6 litres per minute.",
          "Step 6 (M1): Increase factor = 12600 / 5040 = 2.5.",
          "Step 7 (A1): Final answer: cardiac output rises from 5.0 L per minute at rest to 12.6 L per minute in exercise, two and a half times the resting value."
        ],
        "keyTakeaway": "Both chambers of the pump multiply, stroke volume and rate together, so exercise output can rise faster than heart rate alone suggests."
      },
      {
        "id": "ex-bio-transport-2",
        "title": "Reading a Potometer for Transpiration Rate",
        "problem": "In a school laboratory a water-filled potometer with a leafy shoot is set up in bright light, and the air bubble in the capillary moves 60 mm in 10 minutes. The same shoot is then shaded and the bubble moves 15 mm in the next 10 minutes. Calculate each rate in mm per minute and in mm per hour, and find the ratio light to shade.",
        "stepByStepSolution": [
          "Step 1 (M1): Rate = distance moved by the bubble divided by the time taken.",
          "Step 2 (M1): In light: 60 mm / 10 min = 6 mm per minute.",
          "Step 3 (A1): In one hour that is 6 x 60 = 360 mm, so 36 cm per hour.",
          "Step 4 (M1): In shade: 15 mm / 10 min = 1.5 mm per minute.",
          "Step 5 (M1): Ratio = 6 / 1.5 = 4.",
          "Step 6 (A1): Final answer: light 6 mm per minute, 360 mm per hour; shade 1.5 mm per minute; transpiration in bright light runs four times the shaded rate, because open stomata and warmth speed evaporation."
        ],
        "keyTakeaway": "A potometer measures water uptake, which stands for transpiration only when the apparatus is sealed and evaporation from the water surface is prevented."
      }
    ],
    "quiz": {
      "id": "quiz-bio-transport",
      "topicId": "shs1-bio-t2-transport-in-plants-and-animals",
      "title": "Transport in Plants and Animals Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-transport-1",
          "quizId": "quiz-bio-transport",
          "questionText": "Which plant tissue transports water and dissolved mineral salts from the root to the leaf?",
          "optionA": "Phloem",
          "optionB": "Cambium",
          "optionC": "Epidermis",
          "optionD": "Xylem",
          "correctOption": "D",
          "subConcept": "Plant transport tissues",
          "explanation": "Xylem, the dead lignin-thickened vessels, carries water and mineral salts upward. Phloem transports sucrose made in the leaves, so option A names the food pipeline, not the water pipeline.",
          "remediationTip": "Anchor with the mnemonic: xylem, X-up, water; phloem, food."
        },
        {
          "id": "q-bio-transport-2",
          "quizId": "quiz-bio-transport",
          "questionText": "Which blood component carries oxygen from the lungs to the tissues?",
          "optionA": "Red cells (erythrocytes)",
          "optionB": "Platelets",
          "optionC": "Plasma",
          "optionD": "White cells (leucocytes)",
          "correctOption": "A",
          "subConcept": "Blood components",
          "explanation": "Red cells carry haemoglobin, which binds oxygen as oxyhaemoglobin. Plasma dissolves only a little carbon dioxide and nutrients, and while it carries some respiratory gases in solution, bulk oxygen transport is the red cell's job.",
          "remediationTip": "Pair each component with one headline job: red cell oxygen, white cell defence, platelet clotting, plasma carriage."
        },
        {
          "id": "q-bio-transport-3",
          "quizId": "quiz-bio-transport",
          "questionText": "Double circulation in mammals means that blood",
          "optionA": "flows in two directions through each vessel.",
          "optionB": "is pumped twice by each heartbeat.",
          "optionC": "passes through the heart twice during one complete journey around the body.",
          "optionD": "mixes oxygenated and deoxygenated blood in the atria.",
          "correctOption": "C",
          "subConcept": "Circulation pathways",
          "explanation": "The pulmonary circuit to the lungs and the systemic circuit to the body both return through the heart, so blood crosses the heart twice per full circuit. Option B misreads the cardiac cycle, and option D is false because the septum keeps the two bloods apart.",
          "remediationTip": "Say it as a route: heart to lungs, heart to body, heart; that is two passes."
        },
        {
          "id": "q-bio-transport-4",
          "quizId": "quiz-bio-transport",
          "questionText": "Which feature belongs to a vein rather than an artery?",
          "optionA": "A thick elastic muscular wall.",
          "optionB": "A wide lumen and internal valves.",
          "optionC": "Blood flow away from the heart under high pressure.",
          "optionD": "A pulse that can be felt at the surface.",
          "correctOption": "B",
          "subConcept": "Vessel structure",
          "explanation": "Veins return blood under low pressure, so their walls are thin, lumens wide and valves prevent backflow. Thick walls, high pressure away from the heart and a palpable pulse all describe arteries.",
          "remediationTip": "Recite: artery, thick, small, high; vein, thin, large, valved."
        },
        {
          "id": "q-bio-transport-5",
          "quizId": "quiz-bio-transport",
          "questionText": "What is the main reason a housefly does not need blood to carry oxygen?",
          "optionA": "Its skin breathes over the whole body.",
          "optionB": "Its haemolymph contains haemoglobin.",
          "optionC": "Its heart pumps air into the gut.",
          "optionD": "Its tracheal tubes deliver air directly to the tissues.",
          "correctOption": "D",
          "subConcept": "Insect transport",
          "explanation": "The tracheal system carries air through spiracles to every tissue, so gas exchange never depends on the haemolymph, which lacks any respiratory pigment. Skin breathing suits earthworms, not the dry insect cuticle.",
          "remediationTip": "Remember: insects move air in tubes, not in blood."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t2-form-function-of-flowering-plants",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 5,
    "title": "Form and Function of Flowering Plants",
    "description": "root, stem and leaf systems, internal structure of dicot and monocot stem and leaf, support and absorption, modified roots and stems, economic plants: cocoa, cassava, maize and plantain",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A flowering plant is a working system of three organs, root, stem and leaf, each shaped to keep the whole alive.\n• The root anchors the plant, absorbs water and mineral salts and stores food; a tap root of one main axis with side branches is typical of dicots such as cocoa and cassava.\n• A fibrous root is a dense mat of similar-sized roots from the base of the stem, typical of monocots such as maize and plantain, and it holds the top soil well on slopes.\n• Root-hair cells are epidermal cells with long tubular outgrowths that multiply surface area; water enters them by osmosis from the soil.\n• Inside a dicot root the order from outside in is epiblema (piliferous layer), cortex, endodermis, pericycle and a central vascular cylinder with xylem in a cross and phloem in the gaps.\n• The stem carries water up in xylem and food down in phloem, holds the leaves to the light and may store food; it is made of nodes and internodes.\n• In a dicot stem the vascular bundles sit in a neat ring, so the stem is hollow-centred and can grow thicker each year; in a monocot stem the bundles are scattered and there is no annual thickening.\n• The leaf is the food factory: a thin broad lamina for light, a midrib and veins for strength and transport, and a petiole fixing it to the stem.\n• Inside the leaf, from upper to lower surface, come upper epidermis, palisade mesophyll packed with chloroplasts, spongy mesophyll with air spaces, and lower epidermis carrying stomata.\n• Guard cells open and close the stomata to balance gas exchange against water loss, the constant compromise of every land plant.\n• Modified roots store food (cassava tuberous roots, sweet potato), grip (climbers such as some beans) or breathe (pneumatophores of mangroves at the coast).\n• Modified stems run under ground (cassava stem cuttings plantain suckers), store water (succulents) or carry out photosynthesis when leaves are reduced.\n• Economic Ghanaian plants: cocoa (Theobroma cacao) is a dicot with a tap root; maize and plantain are monocots with fibrous roots; cassava is propagated from stem cuttings.\n• In a biological drawing magnification = length in the drawing divided by the real length; a cell drawn 45 mm whose real length is 0.045 mm is at ×1000.\n• Total microscope magnification = eyepiece magnification × objective magnification; a 10 × eyepiece with a 40 × objective gives 400.",
    "detailedNotes": {
      "overview": "This topic links the form of each vegetative organ of a flowering plant to the job it has to do, then opens the organs to show their internal structure. You will compare the dicot and the monocot plan of root, stem and leaf, explain how root-hair cells, xylem, phloem and stomata keep water and food moving, and account for the modified roots and stems seen in Ghanaian crops such as cassava, cocoa, maize and plantain. The lesson closes with the correct handling of a biological drawing and the calculation of magnification, a skill that Paper 3 tests directly.",
      "introduction": "Work from real specimens on the bench. Pull a young maize plant and a weed with a tap root and set the two root systems side by side; cut a petiole and a small stem and view the bundles under a hand lens before you trust the microscope section. Draw what you actually see, in clean single lines with no shading, label the parts with ruled lines, and give the drawing a title and a magnification. The habit of recording form accurately is what turns observation into marks.",
      "realWorldContext": "On a cocoa farm at Nkawkaw the mature tree stands firm on a strong tap root, which is why a properly rooted cocoa seedling survives the first harmattan winds better than a shallow-rooted one. In the maize fields around Tamale the fibrous root mat of the maize holds the light sandy soil against the rains, and farmers rely on it to reduce erosion on sloping land. A market woman in Kumasi sells cassava propagated from stem cuttings, and the very cutting she plants already carries stored food and nodes that will throw out adventitious roots, a living lesson in form matching function.",
      "objectives": [
        "Relate the structure of root, stem and leaf to their functions in a flowering plant",
        "Distinguish a tap root from a fibrous root and a dicot stem from a monocot stem in cross section",
        "Explain how root-hair cells absorb water and how xylem and phloem transport materials",
        "Describe the internal structure of a dorsiventral leaf and the role of stomata and guard cells",
        "Calculate magnification from a biological drawing and total microscope magnification"
      ],
      "sections": [
        {
          "title": "The Root System: Anchorage, Absorption and Storage",
          "content": "The root is the plant's anchor and its intake pipe. It fixes the plant in the soil, absorbs water and dissolved mineral salts, stores food in many species and sometimes helps to prop a tall stem. Two plans dominate. A tap root has one dominant central axis growing straight down with smaller lateral branches, and it is typical of dicots; cocoa, cassava and most weeds you pull on the farm show it, and it reaches deep for water during the dry season. A fibrous root has no single dominant axis but a dense cluster of roots of about equal size arising from the base of the stem, and it is typical of monocots such as maize, rice and plantain; it spreads widely through the top soil and binds it firmly. Whatever the plan, the absorbing work is done by root hairs, long extensions of epidermal cells near the tip that multiply surface area enormously, so water can enter quickly by osmosis down the water potential gradient from soil into the cell sap.",
          "bulletPoints": [
            "Functions: anchorage, absorption of water and salts, storage, and in some plants support.",
            "Tap root: one main axis with laterals; dicot plan; deep; cocoa and cassava.",
            "Fibrous root: many similar roots from stem base; monocot plan; binds top soil; maize and plantain.",
            "Root hairs are epidermal outgrowths that raise surface area for osmotic water uptake.",
            "The root tip is zoned: root cap, region of division, region of elongation and region of maturation with hairs."
          ],
          "keyTakeaway": "The plan of a root tells you the kind of plant, and the root hairs explain how a still organism takes up moving water.",
          "realWorldExample": "Farmers near Techiman intercrop maize with legumes because the maize fibrous roots hold the surface soil while deeper roots of the legumes improve the tilth, matching root form to soil function."
        },
        {
          "title": "Internal Structure: Dicot and Monocot Compared",
          "content": "Cut a root or stem across and the arrangement of tissues is the surest way to tell the two groups apart. In a dicot stem the vascular bundles, each with xylem towards the centre and phloem towards the outside, are set in a distinct ring; between the ring and the skin lies cortex, and at the very centre is soft pith. Because there is a band of dividing tissue, cambium, between xylem and phloem, the dicot stem can keep laying down new xylem each year and thicken, which is why a cocoa trunk grows wider season by season. In a monocot stem the vascular bundles are scattered through the ground tissue with no ring and no cambium, so the stem cannot thicken annually; a maize culm stays about the width it first reached. In a dicot root the central cylinder carries a star- or cross-shaped xylem with phloem in the arm angles, while the monocot root has a central pith ringed by alternating xylem and phloem. Learning these pictures well lets you identify an unknown cut specimen in the alternative-practical paper.",
          "bulletPoints": [
            "Dicot stem: bundles in a ring, cambium present, annual thickening possible.",
            "Monocot stem: bundles scattered, no cambium, no annual thickening.",
            "Within a bundle xylem is inner and phloem outer in the stem.",
            "Dicot root: central xylem in a cross with phloem between the arms.",
            "Monocot root: central pith surrounded by a ring of alternate xylem and phloem."
          ],
          "keyTakeaway": "Ring of bundles means dicot, scattered bundles means monocot; the cambium is the difference that lets one grow fat and the other not.",
          "realWorldExample": "A carpenter-grade explanation for SHS pupils at Ho: a felled hardwood shows growth rings because its dicot cambium adds xylem yearly, while a cut bamboo or palm stem, a monocot, never shows rings."
        },
        {
          "title": "The Stem and the Leaf: Transport and Food Manufacture",
          "content": "The stem is the plant's highway and framework. Its xylem carries water and mineral salts upward from the roots to the leaves, its phloem carries dissolved food made in the leaves to the growing and storing parts, and its rigidity holds the broad laminae out into the light. The leaf is where the food is made, so its structure is a study in efficient design. A thin, flat, broad lamina presents a large surface to the sun. The upper epidermis is transparent and waterproofed by a cuticle to let light through while slowing water loss. Below it the palisade mesophyll is packed with elongated cells full of chloroplasts, the sites of photosynthesis, placed right under the window to catch light. The spongy mesophyll beneath has rounded cells with wide air spaces that channel carbon dioxide and oxygen to every chloroplast. The lower epidermis carries most of the stomata, each bordered by two kidney-shaped guard cells that swell to open a pore and shrink to close it, so the plant trades gas exchange against water loss.",
          "bulletPoints": [
            "Xylem conducts water up; phloem conducts food down; the stem also gives support.",
            "The broad thin lamina maximises light capture; veins give strength and transport.",
            "Palisade mesophyll is rich in chloroplasts and lies just under the upper surface.",
            "Spongy mesophyll air spaces circulate gases to the photosynthesising cells.",
            "Guard cells open and close stomata to balance gas exchange with water conservation."
          ],
          "keyTakeaway": "Every layer of the leaf exists to feed light, water and gas to the chloroplasts while holding back water.",
          "realWorldExample": "The thick waxy leaf of a cocoa seedling in the shade, compared with the thin broad leaf of a sun-loving weed, shows how cuticle and stomatal number are tuned to water supply on a Ghanaian farm."
        },
        {
          "title": "Modified Organs and the Biological Drawing",
          "content": "Many organs are modified to do extra jobs. Cassava swells its adventitious roots into tuberous roots that store starch, the very cassava you boil at home. The mangrove at the coast pushes pneumatophores, breathing roots, up through airless mud to reach oxygen. Maize throws prop roots from the lower stem for support, and plantain sends up suckers, modified underground stems, for vegetative spread. Stem cuttings of cassava root at the nodes because each node can produce adventitious roots. Because these structures are small, biologists draw them to scale and record the magnification. Magnification is the length in the drawing divided by the true length of the specimen, both reduced to the same unit first. If a root-hair cell is drawn 45 mm long and its real length is 0.045 mm, the drawing is at 45 divided by 0.045, which is ×1000. With a microscope, total magnification is the eyepiece times the objective, so a 10 × eyepiece with a 40 × objective gives 400. A clean unshaded drawing, ruled labels, a title and a correct magnification together earn the presentation marks.",
          "bulletPoints": [
            "Tuberous roots (cassava), breathing roots (mangrove pneumatophores) and prop roots (maize) are root modifications.",
            "Underground stems, suckers (plantain) and cuttable stem nodes (cassava) are stem modifications.",
            "Magnification = drawing length divided by real length, in the same unit.",
            "A 45 mm drawing of a 0.045 mm cell is at ×1000.",
            "Total microscope magnification = eyepiece × objective; 10 × by 40 × is 400."
          ],
          "keyTakeaway": "Modification is function added to a familiar organ, and a scale drawing with a stated magnification is how you prove you measured rather than guessed.",
          "realWorldExample": "In the school laboratory at Cape Coast, students draw a stained leaf section at ×100 and check the answer by measuring the drawn thickness against the stage-calibrated real thickness."
        }
      ],
      "commonMistakes": [
        "Writing that xylem carries food and phloem carries water; the classic reversal loses the transport marks, so remember xylem for water going up.",
        "Calling a maize root system a tap root; maize is a monocot with a fibrous system, and examiners reward the correct matching of root type to plant group.",
        "Drawing with shading or colour in a biological diagram; the convention is clean single lines, and shading wastes time and earns no mark.",
        "Quoting magnification without converting units, e.g. comparing millimetres in the drawing with micrometres of the specimen and getting the answer wrong.",
        "Naming scattered vascular bundles as a dicot feature; scattered bundles and no cambium are monocot, a ring of bundles is dicot."
      ],
      "wassceExamTips": [
        "Paper 1 (objective) often shows two cross sections and asks which is monocot and which dicot; decide by ring versus scattered bundles and say so in one line.",
        "In Paper 2 (structured) a question on root hairs expects the word osmosis and the phrase surface area; name both to bank the method marks.",
        "Paper 3 (practical) pays for the drawing itself: label with ruled lines on one side, give a title and a magnification, and never shade.",
        "When asked to calculate magnification, write the formula you used before substituting; method marks are recorded even if the arithmetic slips.",
        "For a 'form follows function' question, always name the structure, then the function, then the feature that fits them, e.g. many root hairs, large surface area, fast water uptake."
      ],
      "summaryChecklist": [
        "Can I match tap and fibrous root systems to dicots and monocots with examples?",
        "Can I identify a dicot from a monocot stem in cross section using bundle arrangement?",
        "Can I explain how root hairs absorb water and how xylem and phloem transport materials?",
        "Can I name each tissue layer of a leaf and state the job of the guard cells?",
        "Can I calculate drawing magnification and total microscope magnification correctly?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-formfunc-1",
        "title": "Finding the Magnification of a Root-Hair Drawing",
        "problem": "In a biological drawing a root-hair cell is drawn 45 mm long. Its true length is 0.045 mm. Calculate the magnification of the drawing and state it in the conventional form.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the formula, magnification = length of drawing divided by real length of specimen.",
          "Step 2 (M1): Check that both lengths use the same unit; here both are in millimetres, so no conversion is needed.",
          "Step 3 (M1): Substitute the values, magnification = 45 mm / 0.045 mm.",
          "Step 4 (A1): Divide: 45 / 0.045 = 1000, so the image is one thousand times the object.",
          "Step 5 (A1): State the answer in the accepted form: magnification = ×1000 (or 1000 times)."
        ],
        "keyTakeaway": "Magnification is drawing length over real length with matching units; a unit that cancels leaves the ×1000 result."
      },
      {
        "id": "ex-bio-formfunc-2",
        "title": "Total Microscope Magnification and Real Size",
        "problem": "A student uses a 10 × eyepiece and a 40 × objective to view a leaf cell, and the image of the cell measures 20 mm across. Find the total magnification and the true width of the cell in millimetres.",
        "stepByStepSolution": [
          "Step 1 (M1): Total magnification = eyepiece magnification × objective magnification = 10 × 40.",
          "Step 2 (A1): Total magnification = 400, so the image is 400 times the object.",
          "Step 3 (M1): Rearrange the magnification formula, real width = image width / magnification.",
          "Step 4 (M1): Substitute, real width = 20 mm / 400.",
          "Step 5 (A1): The true width of the cell = 0.05 mm."
        ],
        "keyTakeaway": "Eyepiece times objective gives total magnification, and dividing the measured image by that number returns the real size."
      }
    ],
    "quiz": {
      "id": "quiz-bio-formfunc",
      "topicId": "shs1-bio-t2-form-function-of-flowering-plants",
      "title": "Form and Function of Flowering Plants Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-formfunc-1",
          "quizId": "quiz-bio-formfunc",
          "questionText": "Which root system, with many roots of about equal size arising from the base of the stem, is characteristic of maize?",
          "optionA": "Fibrous root system",
          "optionB": "Tap root system",
          "optionC": "Adventitious prop root only",
          "optionD": "Pneumatophore system",
          "correctOption": "A",
          "subConcept": "Root systems",
          "explanation": "Maize is a monocot and has a fibrous root system of similar-sized roots from the stem base. A tap root with one main axis is the dicot plan; pneumatophores are breathing roots of mangroves.",
          "remediationTip": "Sketch one tap root and one fibrous root and label a crop example under each."
        },
        {
          "id": "q-bio-formfunc-2",
          "quizId": "quiz-bio-formfunc",
          "questionText": "Water enters a root-hair cell from the soil mainly by",
          "optionA": "active pumping of the cortex",
          "optionB": "osmosis through the partially permeable cell surface",
          "optionC": "diffusion of liquid water through the phloem",
          "optionD": "capillary action in the xylem vessels",
          "correctOption": "B",
          "subConcept": "Absorption",
          "explanation": "Water moves from the dilute soil solution into the stronger cell sap by osmosis across the surface membrane. Xylem capillary action moves water inside the plant after it is absorbed, not into the hair.",
          "remediationTip": "Restate the definition of osmosis and apply it to a root hair on a diagram."
        },
        {
          "id": "q-bio-formfunc-3",
          "quizId": "quiz-bio-formfunc",
          "questionText": "A cross section shows vascular bundles scattered through the ground tissue with no cambium. The specimen is most likely",
          "optionA": "a dicot stem",
          "optionB": "a dicot root",
          "optionC": "a monocot stem",
          "optionD": "a leaf midrib",
          "correctOption": "C",
          "subConcept": "Stem structure",
          "explanation": "Scattered bundles and the absence of cambium define a monocot stem. A dicot stem has bundles in a ring with cambium, and a dicot root has central xylem in a cross shape.",
          "remediationTip": "Draw ring versus scattered bundles and write which group each belongs to."
        },
        {
          "id": "q-bio-formfunc-4",
          "quizId": "quiz-bio-formfunc",
          "questionText": "Which leaf tissue contains the greatest number of chloroplasts and is the main site of photosynthesis?",
          "optionA": "Upper epidermis",
          "optionB": "Spongy mesophyll",
          "optionC": "Guard cells",
          "optionD": "Palisade mesophyll",
          "correctOption": "D",
          "subConcept": "Leaf structure",
          "explanation": "Palisade mesophyll cells are elongated, packed with chloroplasts and lie just under the transparent upper epidermis to catch light. Spongy mesophyll has fewer chloroplasts and mainly moves gases.",
          "remediationTip": "Label a leaf transverse section and count chloroplasts drawn in each layer."
        },
        {
          "id": "q-bio-formfunc-5",
          "quizId": "quiz-bio-formfunc",
          "questionText": "A cell drawn 60 mm long has a true length of 0.6 mm. What is the magnification of the drawing?",
          "optionA": "×100",
          "optionB": "×10",
          "optionC": "×1000",
          "optionD": "×0.01",
          "correctOption": "A",
          "subConcept": "Magnification",
          "explanation": "Magnification = drawing length / real length = 60 mm / 0.6 mm = 100, so ×100. Reading it as ×1000 is a decimal-point slip once units are the same.",
          "remediationTip": "Always reduce both lengths to one unit before dividing, then recheck the decimal point."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t2-mineral-nutrition-in-plants",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "Mineral Nutrition of Plants and Deficiency Symptoms",
    "description": "The mineral elements plants require and the role of each, how root hairs absorb ions, deficiency symptoms and the mobile and immobile element rule, NPK fertiliser labelling, compost and farm manure, soil testing and pH correction with lime, hydroponics, and the use of these ideas in cocoa and maize farming in Ghana.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Plants manufacture carbohydrate by photosynthesis but must absorb mineral ions from the soil solution through root hairs, mainly nitrate, phosphate, potassium, sulphate, calcium, magnesium and iron.\n• Nitrogen builds amino acids, proteins, nucleic acids and chlorophyll; shortage stunts growth and yellows the older leaves first because nitrogen is mobile inside the plant.\n• Phosphorus serves energy transfer, rooting, flowering and seed filling; potassium regulates stomata and enzyme activity and strengthens stems; magnesium sits at the centre of every chlorophyll molecule.\n• Iron, calcium, sulphur and boron are immobile once fixed, so their deficiency appears first on young leaves and at the growing point.\n• Mobile elements nitrogen, phosphorus, potassium and magnesium show symptoms on older leaves; that single rule settles most WAEC deficiency questions.\n• Leguminous crops such as soya bean and groundnut carry Rhizobium bacteria in root nodules that fix atmospheric nitrogen into compounds the plant can use.\n• A fertiliser label such as 15-15-15 gives percentage by mass in the order nitrogen, phosphate as P2O5, potash as K2O, not kilograms in the bag.\n• Compost and farm manure release nutrients slowly, add humus and improve soil structure; straight mineral fertilisers act faster but are leached by heavy rain.\n• Soil pH is tested with a meter or indicator; acidic forest-zone soils are corrected with agricultural lime or quicklime, which also supplies calcium.\n• Hydroponics grows plants in an aerated nutrient solution of known composition and is the cleanest way to demonstrate a named deficiency.",
    "detailedNotes": {
      "overview": "This topic connects plant chemistry to farm practice. You will list the elements a plant needs, state what each builds or controls, and explain how root hair cells take ions from a dilute soil solution by active transport. The core skill is diagnosis: matching a described symptom to the missing element and predicting whether it appears on older or younger leaves from the mobility of that element. The topic then turns to practice, reading an NPK label and calculating the nutrient actually applied, comparing compost and manure with mineral fertiliser, testing and liming soil, and growing plants in nutrient solution in hydroponics, with cocoa and maize in Ghana as the working examples.",
      "introduction": "Study the elements in functional sets rather than alphabetically. One set builds the green machinery, nitrogen, magnesium and iron; another carries energy and forms seed, phosphorus; another governs water loss and stem strength, potassium; another builds walls, calcium. Then memorise the mobility rule, because it converts a guess into a deduction: a yellowing older leaf means a mobile element was withdrawn from it, a yellowing young leaf means an immobile element never arrived. For calculations, treat the three figures on a fertiliser bag as percentages and multiply by the total mass applied, keeping the unit kilogram on the answer.",
      "realWorldContext": "Cocoa and maize give the Ghanaian cases. A cocoa farmer at Sunyang who sees pale, stunted young shoots on newly cleared land is usually facing a nitrogen and phosphorus shortage, and the extension officer answers with a compound fertiliser band-applied in the early rainy season, plus composted cocoa pod husk returned to the mound. On the maize belts near Ejura, a crop whose lower leaves are scorched at the margins and whose stems lodge after a storm is telling a potassium story, and the remedy is potash together with a soya bean rotation whose Rhizobium nodules restore nitrogen. Garden plots watered with dirty runoff show the reverse case, an excess of salt drawing water out of roots. School farms keep a simple demonstration: two same-size pots, one with plain borehole water and one with a nutrient solution lacking magnesium.",
      "objectives": [
        "Name the mineral elements required by plants and state the role each plays in growth",
        "Match given deficiency symptoms to the missing element and predict whether they show on older or younger leaves",
        "Interpret an NPK fertiliser label and calculate the mass of nutrient supplied by a given mass of fertiliser",
        "Describe soil testing, liming, organic manuring and hydroponics as ways of securing mineral nutrition"
      ],
      "sections": [
        {
          "title": "Essential Elements and Uptake Through the Root",
          "content": "Green plants manufacture carbohydrate by photosynthesis, yet they cannot grow without mineral ions absorbed from the soil solution, chiefly through the root hair region, some entering by diffusion and the rest by active transport across the membrane when the soil is dilute. Nitrogen arrives mainly as nitrate or ammonium ions and builds amino acids, proteins, nucleic acids and chlorophyll. Phosphorus is taken as phosphate and forms part of the energy carrier ATP, of nucleic acids and of the phospholipids of membranes, so it drives root growth, flowering and the filling of grain. Potassium enters as an ion, stays soluble in the cell sap and regulates the opening and closing of stomata, the action of enzymes and the strength of stems. Magnesium is the atom at the centre of every chlorophyll molecule, so a shortage removes the green colour itself. Calcium builds calcium pectate in the middle lamella and holds walls rigid, sulphur appears in certain amino acids and vitamins, and iron, manganese, copper, zinc and boron are needed in traces for enzyme systems and for chlorophyll formation. Leguminous crops such as soya bean, groundnut and the cowpea grown for waakye harbour Rhizobium bacteria in root nodules that convert atmospheric nitrogen into compounds the plant can use, which is why the maize crop that follows a soya crop stands taller.",
          "bulletPoints": [
            "N, P, K, S, Ca, Mg and Fe are the major elements; B, Mn, Cu, Zn and Cl are needed in traces.",
            "Ions enter dissolved in soil water, mostly through root hairs, by diffusion and by active transport.",
            "Nitrogen, magnesium and iron all serve chlorophyll and protein, but only magnesium sits inside the chlorophyll molecule.",
            "Rhizobium in legume root nodules fixes atmospheric nitrogen and leaves surplus nitrogen for the next crop."
          ],
          "keyTakeaway": "Link each element to the product it builds, because a symptom described as colour, stem or root can then be traced back to the right ion.",
          "realWorldExample": "A soya field on the Ejura research station turns a farmer's profit twice over, since the nodules feed the crop and the ploughed-in residue feeds the following maize crop with nitrogen."
        },
        {
          "title": "Deficiency Symptoms and the Mobility Rule",
          "content": "A deficiency symptom is the visible sign that an element is short, and where it appears depends on whether the plant can move that element from old tissue to new. Nitrogen, phosphorus, potassium and magnesium are mobile, so the plant withdraws them from older leaves and the signs appear at the base of the plant: nitrogen shortage yellows the older leaves and stunts the whole plant with thin pale stems; phosphorus gives a dull dark or purplish older leaf with poor rooting and late, shrivelled seed; potassium scorches and spots the leaf margins and weakens maize stems so that they lodge; magnesium yellows between the veins of older leaves while the veins themselves stay green. Iron, calcium, sulphur and boron are immobile once fixed, so their shortage strikes the youngest leaves at the growing point: iron chlorosis yellows the newest leaves finely with green veins, calcium kills growing points and root tips and curls and hooks young leaves, sulphur pales the young leaves uniformly, and boron distorts or kills the tip and produces hollow stems and misshapen cocoa pods. An exam answer must name the element, the leaf age and the colour or shape change, since a bare word such as yellowing earns nothing without the pattern described.",
          "bulletPoints": [
            "Mobile elements are N, P, K and Mg, and their symptoms begin on older leaves.",
            "Immobile elements are Fe, Ca, S and B, and their symptoms begin on young leaves or at the growing point.",
            "Intervein chlorosis on old leaves points to magnesium; uniform paling of young leaves points to iron or sulphur.",
            "Scorched leaf margins with weak lodging stems point to potassium in maize.",
            "A full answer states element, symptom and which leaves show it."
          ],
          "keyTakeaway": "Leaf age is the diagnostic key: old leaves mean a mobile element was withdrawn, young leaves mean an immobile element never arrived.",
          "realWorldExample": "A school farm maize plot whose lowest leaves show streaky yellowing between green veins is short of magnesium, and a handful of Epsom salt sprayed on the leaves corrects it within a fortnight."
        },
        {
          "title": "Fertilisers, Manure, Soil Testing and Hydroponics",
          "content": "Compound fertilisers sold in Ghanaian agro-input shops carry the three NPK figures, the percentage by mass of nitrogen, then phosphate expressed as P2O5, then potash expressed as K2O, so a bag labelled 15-15-15 holds 15 kg of each of those three in every 100 kg of product. Straight fertilisers such as urea, ammonium sulphate and single superphosphate supply one nutrient and are blended to suit a soil test result. Mineral fertilisers act quickly because their ions are already soluble, but they are also leached below the root zone by the heavy rains of the long season, which is why nitrogen is often given in two top dressings rather than one. Organic manure and compost release nutrients slowly, add humus, improve crumb structure, water holding and the microbial population, and are supplied as cattle dung from the herders, poultry litter or composted cocoa pod husk. Soil reaction is measured with a pH meter or indicator solution; the acidic soils of the forest zone are corrected with agricultural lime or quicklime, which raises the pH, supplies calcium and makes phosphate more available, while gypsum serves on alkaline ground. Hydroponics raises plants on a flowing, aerated nutrient solution of known composition, often supported in gravel or washed sand, and lets a grower or an examiner prove a deficiency exactly by omitting one element while every other element stays unchanged.",
          "bulletPoints": [
            "The three figures on a fertiliser bag are percentages by mass in the order nitrogen, phosphate, potash.",
            "Straight fertilisers supply one nutrient; compound fertilisers supply three and are chosen from a soil test.",
            "Manure and compost feed the soil physically as well as chemically; mineral fertilisers feed the plant faster but leak away.",
            "Lime corrects acidity and supplies calcium; gypsum treats alkaline or sodic soil.",
            "Hydroponic solution must be aerated, of known composition, and changed at a regular interval."
          ],
          "keyTakeaway": "Read a label as percentages, apply a soil test before choosing, and combine organic and mineral sources so that the nutrient does not simply wash away.",
          "realWorldExample": "An irrigated tomato grower on the Volta flats uses gravel-bed hydroponics because the nutrient solution can be measured, and a missing element shows as a diagnosable leaf pattern within weeks."
        }
      ],
      "commonMistakes": [
        "Naming a deficiency symptom without saying whether it appears on older or younger leaves, which leaves the mobility reasoning unstated and the mark unearned.",
        "Reading an NPK label as kilograms of nutrient in the bag instead of percentage by mass, so the mass actually applied is calculated wrongly.",
        "Stating that plants absorb nitrogen gas from the air through their leaves; nitrogen enters as nitrate or ammonium ions from the soil, fixed by bacteria or supplied in fertiliser.",
        "Confusing magnesium chlorosis with nitrogen chlorosis; magnesium yellows between the veins of older leaves while the veins stay green, whereas nitrogen yellows the whole older leaf."
      ],
      "wassceExamTips": [
        "In Paper 1 element-to-function items, eliminate by product: energy carrier and seed point to phosphorus, chlorophyll's central atom to magnesium, stomata and stem strength to potassium.",
        "In Paper 2 a deficiency question usually carries three marks for element, symptom and leaf age, so write all three in a single answer line.",
        "Paper 3 may ask you to set up the solution culture test; name the element omitted, state that all other elements are unchanged and describe the control pot.",
        "For fertiliser arithmetic show the percentage as a fraction multiplied by the total mass, then give the answer with the unit kg; method marks follow the working, not a bare number."
      ],
      "summaryChecklist": [
        "Can I list seven mineral elements with the compound or process each one builds?",
        "Can I explain how root hair cells absorb ions from dilute soil water, including the need for energy?",
        "Can I diagnose four deficiencies from symptoms and state whether the leaf affected is old or young?",
        "Can I read an NPK label and calculate the mass of nitrogen, phosphate and potash applied?",
        "Can I compare manure, compound fertiliser, liming and hydroponics as methods of mineral nutrition?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-minerals-1",
        "title": "Nutrient Mass from an NPK Label",
        "problem": "A maize farmer near Ejura buys compound fertiliser graded 15-15-15 in 50 kg bags and applies 4 bags to 2 hectares of land. Calculate the total mass of nitrogen, of phosphate shown as P2O5 and of potash shown as K2O applied, and the mass of nitrogen supplied to each hectare.",
        "stepByStepSolution": [
          "Step 1 (M1): Total mass of fertiliser applied = 4 bags x 50 kg = 200 kg.",
          "Step 2 (M1): The label is read as percentage by mass, so nitrogen applied = 200 x 15 / 100.",
          "Step 3 (M1): 200 x 0.15 = 30 kg of nitrogen.",
          "Step 4 (M1): Phosphate as P2O5 = 200 x 0.15 = 30 kg, and potash as K2O = 200 x 0.15 = 30 kg.",
          "Step 5 (A1): The application supplies 30 kg each of nitrogen, P2O5 and K2O in total.",
          "Step 6 (M1): Nitrogen per hectare = 30 kg divided by 2 hectares = 15 kg per hectare.",
          "Step 7 (A1): Final answer: each hectare receives 15 kg of nitrogen, together with 15 kg of P2O5 and 15 kg of K2O."
        ],
        "keyTakeaway": "The three figures on an NPK bag are percentages by mass in the fixed order nitrogen, phosphate, potash; multiply each by the total mass applied to find the real dose."
      },
      {
        "id": "ex-bio-minerals-2",
        "title": "Nitrogen Percentage in Urea and the Dose Required",
        "problem": "Urea has the formula CO(NH2)2. A recommendation calls for 23 kg of nitrogen per hectare on a soya field. Calculate the relative molecular mass of urea, the percentage of nitrogen in it, and the mass of urea needed for each hectare.",
        "stepByStepSolution": [
          "Step 1 (M1): Relative molecular mass of urea = 12 + 16 + (2 x 14) + (4 x 1) = 12 + 16 + 28 + 4 = 60.",
          "Step 2 (M1): Mass of nitrogen carried by one mole = 2 atoms x 14 = 28 g.",
          "Step 3 (M1): Percentage of nitrogen = 28 / 60 x 100 = 46.7 percent, taken as about 46 percent.",
          "Step 4 (A1): Urea is roughly 46 percent nitrogen by mass.",
          "Step 5 (M1): Mass of urea required = mass of nitrogen needed divided by the fraction that is nitrogen = 23 / 0.46.",
          "Step 6 (M1): 23 / 0.46 = 50.",
          "Step 7 (A1): Final answer: about 50 kg of urea per hectare supplies the required 23 kg of nitrogen."
        ],
        "keyTakeaway": "Percentage composition from a formula and a dose calculation are the same arithmetic reversed; showing both as separate method lines earns the marks even if the final figure is misread."
      }
    ],
    "quiz": {
      "id": "quiz-bio-minerals",
      "topicId": "shs1-bio-t2-mineral-nutrition-in-plants",
      "title": "Mineral Nutrition and Deficiency Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-minerals-1",
          "quizId": "quiz-bio-minerals",
          "questionText": "Which element is an atom at the centre of the chlorophyll molecule?",
          "optionA": "Potassium",
          "optionB": "Magnesium",
          "optionC": "Calcium",
          "optionD": "Phosphorus",
          "correctOption": "B",
          "subConcept": "Roles of elements",
          "explanation": "Magnesium sits at the heart of chlorophyll, so its shortage removes the green colour between the veins of older leaves. Iron is needed for chlorophyll to form but is not part of the molecule, while potassium and calcium serve stomata and walls.",
          "remediationTip": "Draw the chlorophyll ring once with Mg labelled in the middle and keep that picture for revision."
        },
        {
          "id": "q-bio-minerals-2",
          "quizId": "quiz-bio-minerals",
          "questionText": "A maize plant is stunted, its oldest lower leaves are uniformly yellow and its stems are thin. Which deficiency fits best?",
          "optionA": "Iron",
          "optionB": "Calcium",
          "optionC": "Boron",
          "optionD": "Nitrogen",
          "correctOption": "D",
          "subConcept": "Diagnosing deficiency",
          "explanation": "Uniform yellowing that begins on the older leaves with general stunting is nitrogen shortage, since nitrogen is mobile and withdrawn from old tissue. Iron, calcium and boron are immobile, so their symptoms start on the youngest leaves.",
          "remediationTip": "Ask two questions in order: which leaf age, and whole leaf or between the veins?"
        },
        {
          "id": "q-bio-minerals-3",
          "quizId": "quiz-bio-minerals",
          "questionText": "Why do nitrogen symptoms show on older leaves while iron symptoms show on young leaves?",
          "optionA": "Nitrogen is translocated from old tissue to new, but iron is not",
          "optionB": "Iron is heavier and cannot enter the leaf at all",
          "optionC": "Older leaves photosynthesise faster and use up nitrogen first",
          "optionD": "Nitrogen is toxic when it accumulates in young leaves",
          "correctOption": "A",
          "subConcept": "Mobility of elements",
          "explanation": "Nitrogen, phosphorus, potassium and magnesium are mobile and are moved out of ageing leaves to feed the growing point, so old leaves fade first. Iron, calcium, sulphur and boron are locked where they are used, so new tissue suffers.",
          "remediationTip": "Memorise the mobile four as N-P-K-Mg and treat every other element as immobile."
        },
        {
          "id": "q-bio-minerals-4",
          "quizId": "quiz-bio-minerals",
          "questionText": "A fertiliser bag graded 15-15-15 means that",
          "optionA": "the bag contains 15 kg of each nutrient whatever its size",
          "optionB": "15 percent of the bag is inert filler",
          "optionC": "each of nitrogen, phosphate and potash makes up 15 percent of the mass",
          "optionD": "fifteen days must pass between applications",
          "correctOption": "C",
          "subConcept": "Fertiliser labels",
          "explanation": "The three figures are percentages by mass in the order nitrogen, phosphate as P2O5 and potash as K2O, so a 50 kg bag holds 7.5 kg of each. Reading them as fixed kilograms ignores the bag size.",
          "remediationTip": "Write the order N, P, K under the three numbers before any calculation."
        },
        {
          "id": "q-bio-minerals-5",
          "quizId": "quiz-bio-minerals",
          "questionText": "Leguminous crops raise the nitrogen content of the soil because bacteria in their root nodules",
          "optionA": "decay incorporated farm manure",
          "optionB": "dissolve insoluble phosphate rock",
          "optionC": "destroy nematodes that damage feeder roots",
          "optionD": "convert atmospheric nitrogen into combined nitrogen the plant can use",
          "correctOption": "D",
          "subConcept": "Nitrogen fixation",
          "explanation": "Rhizobium bacteria fix atmospheric nitrogen into nitrogen compounds, part for the plant and part left in the soil when roots and nodules decay. Manure decay, phosphate dissolution and pest control are different processes.",
          "remediationTip": "Link the words Rhizobium, root nodule and nitrogen fixation in one sentence and repeat it."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t2-respiration-surfaces-experiments",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Respiration Surfaces and Gas-Exchange Experiments",
    "description": "Aerobic and anaerobic pathways and the respiratory quotient, the exchange surfaces of the leaf, insect, fish and earthworm and their adaptations to dry habitats, and the classic school experiments with a moving-liquid respirator, germinating seeds, limewater and the effect of exercise on breathing rate.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Respiration is the intracellular release of energy from food and is not the same act as breathing; it continues in roots, seeds, stems and leaves day and night.\n• Aerobic respiration is summarised as glucose plus oxygen giving carbon dioxide plus water plus energy, with the oxidation stages completed in the mitochondrion.\n• Anaerobic respiration begins with the same glycolysis in the cytoplasm but ends as ethanol and carbon dioxide in yeast and plant tissue, and as lactic acid in running muscle.\n• Energy released per glucose molecule is far smaller without oxygen, which is why anaerobic organisms grow slowly and muscle fatigues.\n• Respiratory quotient = volume of carbon dioxide given out divided by volume of oxygen taken in; carbohydrate gives about 1.0, fats below 1.0, organic acids above 1.0.\n• Good exchange surfaces are moist, thin, large in area and ventilated or well supplied with blood; gills, tracheoles, worm skin and spongy mesophyll all fit the rule.\n• Insects deliver air through spiracles, tracheae and tracheoles straight to the tissues and close the spiracles to limit water loss in dry habitats.\n• Fish gills maintain a diffusion gradient by countercurrent flow of water and blood, and earthworms must keep a moist skin or they suffocate.\n• In the respirator, potassium hydroxide or soda lime absorbs carbon dioxide, so the movement of the colored liquid measures oxygen uptake; boiled seeds serve as the control.\n• Germinating seeds give off carbon dioxide, shown by limewater turning milky, and give off heat, shown by a thermometer in a vacuum flask; exercise raises both breathing rate and depth.",
    "detailedNotes": {
      "overview": "This topic pairs the chemistry of respiration with the surfaces that supply its gases and the experiments that prove it. You will contrast aerobic and anaerobic pathways, state their products, and use the respiratory quotient to identify the substrate being burned. Then you will examine four exchange surfaces, the leaf mesophyll, the insect tracheal system, the fish gill and the earthworm skin, and explain how each keeps the gradient while limiting water loss. The final section is practical work: the moving-liquid respirator with potassium hydroxide, germinating versus boiled seeds for heat and carbon dioxide, the limewater test, and measuring the effect of exercise on breathing rate.",
      "introduction": "Handle respiration as three linked questions. What reaction releases the energy, and where? How do the gases reach the respiring cell? How do you prove it in a tube? Write the two equations from memory, then practise the words that carry marks, moist, thin, large surface area and good ventilation. In practical answers, name the observation, name the conclusion and name the control separately, because examiners award marks on each. For exercise questions, quote both rate and depth, not just rate.",
      "realWorldContext": "The examples are on every Ghanaian street. A woman selling kenken knows that the malle fermented maize dough rises and sours because microbes are respiring anaerobically, producing gas and lactic acid, and that the bread she bakes swells on carbon dioxide from yeast. A boy who sprints to catch a trotro breathes hard afterwards because his muscles have accumulated lactic acid while respirating without enough oxygen. After rain, earthworms come to the surface of the school compound lawn, where their skin can exchange gases in water films instead of in air-filled soil pores. At the fish landing site, the bright red gill filaments of a tilapia from the Volta explain why a gill is a vascular organ, and in the store, potted cowpea seeds germinating in a tin warm a pile of sacking exactly as the class flask demonstrates.",
      "objectives": [
        "Contrast aerobic and anaerobic respiration with word equations, sites and products, and account for the difference in energy yield",
        "Calculate and interpret the respiratory quotient for carbohydrate, fat and organic acid substrates",
        "Describe the structure of exchange surfaces in leaf, insect, fish and earthworm and relate them to the four design rules",
        "Set up and interpret the standard respiration experiments with a respirator, germinating seeds, limewater and exercise"
      ],
      "sections": [
        {
          "title": "Aerobic and Anaerobic Pathways",
          "content": "Respiration is the controlled breakdown of food to release energy inside the cell, and the released energy is captured in a usable form rather than simply lost as heat, though some heat always appears. The first stage, glycolysis, happens in the cytoplasm and splits glucose into a simpler compound with a small energy yield. With oxygen present the products pass into the mitochondrion and are oxidised completely to carbon dioxide and water, giving the large yield summarised as glucose plus oxygen giving carbon dioxide plus water plus energy; a plant whose seeds are germinating in a dark store respires exactly as an animal does, so no green-only rule applies. Without oxygen the pathway stops after glycolysis and the intermediate is converted in a second step. In yeast and in many plant tissues the products are ethanol and carbon dioxide, and this anaerobic microbial respiration is called fermentation. In the muscle of a sprinting student the product is lactic acid, which is carried in the blood to the liver, where oxygen converts it back; the debt of oxygen explains the heavy breathing that follows a race. Because so much of the energy in glucose remains locked in ethanol or lactic acid, the anaerobic yield is far smaller, which is why anaerobic organisms grow slowly and why tired muscle loses power.",
          "bulletPoints": [
            "Glycolysis runs in the cytoplasm and is common to both pathways.",
            "Aerobic completion in the mitochondrion gives carbon dioxide, water and a large energy release.",
            "Anaerobic in yeast and plant tissue gives ethanol and carbon dioxide; in muscle it gives lactic acid.",
            "Fermentation of dough by yeast and of maize dough by lactic bacteria are both respiration, not cooking.",
            "The oxygen taken after hard exercise repays the lactic acid that accumulated."
          ],
          "keyTakeaway": "Write the aerobic equation with the word energy and the anaerobic yeast equation with both products, because a missing product loses the mark.",
          "realWorldExample": "Kenken dough left overnight in a covered clay pot sours and rises because lactic bacteria and yeast are respiring anaerobically in the wet maize paste."
        },
        {
          "title": "Exchange Surfaces in Leaf, Insect, Fish and Earthworm",
          "content": "Every successful exchange surface obeys four rules: it is thin, it is moist so gases dissolve, it has a large area, and it is ventilated or served by a flow of blood so that the concentration gradient never falls away. A leaf exchanges through stomata guarded by pairs of guard cells, into a lattice of air spaces between spongy mesophyll cells whose moist walls pass carbon dioxide inward and oxygen outward, with the palisade layer doing most of the photosynthesis just beneath the upper surface. The insect solves the problem differently: air enters through spiracles along the thorax and abdomen, travels in rigid tracheae and reaches individual cells through fine moist tracheoles, so oxygen does not depend on blood at all; body movements pump the air, and the spiracles can close to cut water loss. The fish gill is a stack of bony filaments carrying blood-filled lamellae, spread apart by water flow, and because blood and water move in opposite directions the countercurrent maintains a gradient along the whole filament, so most of the dissolved oxygen is extracted. The earthworm exchanges across a thin, moist, heavily capillaries-supplied skin, must live in damp soil or mud, and is silenced by the sun because a dry skin stops diffusion. In dry habitats surfaces are pulled inside the body or protected: insects close spiracles, land snails seal the shell aperture, desert rodents shelter in burrows, and xerophytic leaves are small, thick, waxy and carry sunken stomata in pits.",
          "bulletPoints": [
            "Thin, moist, large area and good ventilation or blood supply are the four rules of an exchange surface.",
            "The leaf exchanges gases through stomata onto the moist walls of spongy mesophyll cells.",
            "Insect spiracles, tracheae and tracheoles deliver air directly to tissues and close to save water.",
            "Fish gills use countercurrent flow between blood and water to hold the diffusion gradient.",
            "Earthworm skin must stay moist, which is why worms surface after heavy rain."
          ],
          "keyTakeaway": "Always name the four surface qualities in a description; examiners award a mark per quality and one for the gradient.",
          "realWorldExample": "The bright red gill arches of a freshly landed tilapia at a Volta lakeside landing site show the rich blood supply that makes the gill an exchange surface rather than a mere flap."
        },
        {
          "title": "Measuring Respiration in the School Laboratory",
          "content": "The moving-liquid respirator demonstrates oxygen uptake. Germinating seeds are sealed inside a tube with a small vessel of potassium hydroxide solution or soda lime, which absorbs the carbon dioxide they release, so the gas volume falls only by the oxygen consumed; the colored liquid in a fine capillary moves inward, the distance is read with a ruler or the volume is read directly against a scale, and the rate is calculated per minute, while a second tube of boiled seeds corrects for changes in room temperature and pressure. Confirmatory tests are cheap and heavily examined: exhaled or respired gas bubbles through freshly prepared calcium hydroxide solution, common limewater, and turns it milky, and the milkiness clears when the gas is passed in excess; a lighted splint held in a jar of respired air is extinguished, showing oxygen depletion. Heat evolution is shown with two vacuum flasks fitted with thermometers and insulated corks, one holding germinating cowpea seeds and one holding boiled seeds, the germinating flask warming over several hours while the control does not, and the flasks must be left in the shade at room temperature so the comparison is fair. The effect of exercise is measured with a stopwatch by counting breaths per minute at rest, then immediately after running, and the class results are averaged from three repeats and recorded in a table with units; expired air can be collected in an inverted measuring cylinder over a water trough by the displacement of water.",
          "bulletPoints": [
            "Potassium hydroxide or soda lime absorbs carbon dioxide, so the respirator measures oxygen uptake alone.",
            "Boiled seeds form the control that corrects for temperature and pressure changes.",
            "Limewater turns milky with carbon dioxide and the milkiness clears in excess gas.",
            "Two vacuum flasks, germinating against boiled seeds, prove that respiration releases heat.",
            "Breathing rate before and after exercise is counted with a stopwatch and averaged over repeats."
          ],
          "keyTakeaway": "Name the absorbing chemical, the control setup and the observation in every practical answer, because those three are what the scheme marks.",
          "realWorldExample": "A class counting breaths with a laboratory stopwatch before and after running round the assembly ground produces a table of averages that matches the textbook record of raised rate and depth."
        }
      ],
      "commonMistakes": [
        "Describing respiration as breathing; respiration is the chemical release of energy in every living cell, and breathing is only the ventilation of the surface.",
        "Writing the anaerobic equation in yeast as producing lactic acid, or the muscle equation as producing ethanol and carbon dioxide; the two pathways must be kept apart.",
        "Forgetting that potassium hydroxide removes carbon dioxide in the respirator, and then crediting the liquid movement to carbon dioxide output instead of oxygen uptake.",
        "Claiming that green seedlings photosynthesise while germinating in the dark flask; before the leaves unfold the seed respires only, which is why the boiled-seed control is needed."
      ],
      "wassceExamTips": [
        "Paper 1 tests the equations directly; check that the option names both the correct products and the correct condition, oxygen absent or present.",
        "In Paper 2 an exchange-surface question marks each quality separately, so write thin, moist, large surface area and good blood supply or ventilation as four distinct points.",
        "Paper 3 gives you a respirator or flask setup and asks what the chemical is for; answer with the substance, its action and the reason the control is included.",
        "For rate calculations, show the volume divided by the time and give units such as cm3 per minute; a number without units loses the accuracy mark."
      ],
      "summaryChecklist": [
        "Can I write both respiration equations and say where each stage occurs?",
        "Can I calculate the respiratory quotient and identify the substrate from its value?",
        "Can I describe four exchange surfaces and match each to the four design rules?",
        "Can I explain how insects and xerophytes reduce water loss while still exchanging gases?",
        "Can I set up the respirator, the limewater test and the heat flask with a stated control?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-respexp-1",
        "title": "Respiratory Quotient of Germinating Groundnut",
        "problem": "A sample of germinating groundnut seeds in a respirator takes up 96 cm3 of oxygen and gives out 68 cm3 of carbon dioxide over the same period. Calculate the respiratory quotient and state what it reveals about the substrate being respired.",
        "stepByStepSolution": [
          "Step 1 (M1): Respiratory quotient = volume of carbon dioxide given out divided by volume of oxygen taken in.",
          "Step 2 (M1): Substituting, RQ = 68 / 96.",
          "Step 3 (M1): 68 / 96 = 0.708, that is 0.71 to two decimal places.",
          "Step 4 (A1): The respiratory quotient of the sample is about 0.71.",
          "Step 5 (M1): Carbohydrate gives an RQ of about 1.0, so a value near 0.7 shows a lipid-rich substrate, which needs proportionally more oxygen for the same carbon dioxide.",
          "Step 6 (A1): Final answer: RQ is about 0.71, showing that fats rather than carbohydrate are being respired in the groundnut cotyledons."
        ],
        "keyTakeaway": "The quotient is carbon dioxide over oxygen, never the reverse, and its value identifies the class of substrate being burned."
      },
      {
        "id": "ex-bio-respexp-2",
        "title": "Ventilation at Rest and After Exercise",
        "problem": "At rest a student breathes 16 times a minute with about 500 cm3 of air moved per breath. After a sprint the rate is 30 breaths per minute with 700 cm3 per breath. Calculate the volume of air moved each minute in both states and the increase as a multiple.",
        "stepByStepSolution": [
          "Step 1 (M1): Air moved per minute at rest = rate multiplied by volume per breath = 16 x 500 cm3.",
          "Step 2 (M1): 16 x 500 = 8000 cm3, and 8000 cm3 = 8 dm3 because 1 dm3 = 1000 cm3.",
          "Step 3 (M1): After exercise = 30 x 700 = 21000 cm3, that is 21 dm3 per minute.",
          "Step 4 (A1): Ventilation is 8 dm3 per minute at rest and 21 dm3 per minute after exercise.",
          "Step 5 (M1): Multiple of increase = 21 / 8 = 2.625, about 2.6.",
          "Step 6 (A1): Final answer: ventilation rises roughly 2.6 times, matching the faster respiration of active muscle and the extra carbon dioxide that must be removed."
        ],
        "keyTakeaway": "Both rate and depth change with exercise, so the useful figure is their product, the volume of air moved per minute."
      }
    ],
    "quiz": {
      "id": "quiz-bio-resp",
      "topicId": "shs1-bio-t2-respiration-surfaces-experiments",
      "title": "Respiration Surfaces and Experiments Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-respexp-1",
          "quizId": "quiz-bio-resp",
          "questionText": "Which statement summarises aerobic respiration correctly?",
          "optionA": "Glucose breaks down into ethanol and carbon dioxide only",
          "optionB": "Carbon dioxide and water are built up into glucose using light",
          "optionC": "Lactic acid is converted into glucose with a release of oxygen",
          "optionD": "Glucose and oxygen react to give carbon dioxide, water and energy",
          "correctOption": "D",
          "subConcept": "Aerobic respiration",
          "explanation": "Aerobic respiration oxidises glucose fully, producing carbon dioxide, water and energy. Option A is anaerobic fermentation, option B is photosynthesis, and option C describes liver work rather than respiration.",
          "remediationTip": "Rehearse the four-part sentence: food plus oxygen gives carbon dioxide plus water plus energy."
        },
        {
          "id": "q-bio-respexp-2",
          "quizId": "quiz-bio-resp",
          "questionText": "In a respirator, potassium hydroxide solution is placed with the organisms in order to",
          "optionA": "supply oxygen dissolved in the liquid",
          "optionB": "absorb the carbon dioxide released during respiration",
          "optionC": "keep the seeds moist and warm",
          "optionD": "measure the heat produced by respiration",
          "correctOption": "B",
          "subConcept": "The respirator",
          "explanation": "Potassium hydroxide removes carbon dioxide, so the fall in gas volume is due to oxygen uptake alone and the liquid movement measures that uptake. It is not a nutrient, a thermometer or a source of oxygen.",
          "remediationTip": "Write one line beside the apparatus diagram: potash absorbs carbon dioxide, so movement equals oxygen used."
        },
        {
          "id": "q-bio-respexp-3",
          "quizId": "quiz-bio-resp",
          "questionText": "Boiled seeds are set up beside germinating seeds in the heat experiment mainly to",
          "optionA": "provide extra food for the living seeds",
          "optionB": "absorb the heat given off by the flask",
          "optionC": "act as a control showing that only living tissue produces the heat",
          "optionD": "release carbon dioxide more slowly than the living seeds",
          "correctOption": "C",
          "subConcept": "Controls in respiration experiments",
          "explanation": "Boiling kills the seeds, so any warming in the second flask must come from the environment rather than respiration, proving the living seeds caused the rise. A control neither absorbs heat nor supplies food.",
          "remediationTip": "Learn the phrase killed by boiling as a control, and use it in every respiration practical answer."
        },
        {
          "id": "q-bio-respexp-4",
          "quizId": "quiz-bio-resp",
          "questionText": "Which feature of the insect reduces water loss while still delivering air to the tissues?",
          "optionA": "Spiracles can be closed and tracheoles carry air directly to cells",
          "optionB": "Gills are folded inward into the body cavity",
          "optionC": "The whole body surface is kept moist for diffusion",
          "optionD": "Air sacs pump air through the lungs continuously",
          "correctOption": "A",
          "subConcept": "Insect exchange and water economy",
          "explanation": "Closing the spiracles limits escape of water vapour, while the tracheal system still brings air to internal tissues, so the moist surface is not exposed to the outside. Insects have no gills or lungs, and a moist outer surface would dry them out.",
          "remediationTip": "State the trade-off in one line: internal moist surfaces save water, exposed moist surfaces lose it."
        },
        {
          "id": "q-bio-respexp-5",
          "quizId": "quiz-bio-resp",
          "questionText": "What makes bread dough rise while yeast ferments it?",
          "optionA": "Lactic acid dissolving the starch granules",
          "optionB": "Carbon dioxide released by anaerobic respiration in the yeast",
          "optionC": "Oxygen trapped in the flour during kneading",
          "optionD": "Alcohol evaporating and leaving empty spaces",
          "correctOption": "B",
          "subConcept": "Fermentation in food",
          "explanation": "Yeast respires anaerobically, giving ethanol and carbon dioxide, and the gas bubbles expand in the sticky gluten and lift the dough. Alcohol evaporating in baking does not create the rise, and lactic acid comes from bacteria, not from the gas.",
          "remediationTip": "Pair yeast with carbon dioxide and lactic bacteria with lactic acid, and keep the two fermentations separate."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t3-respiration-and-excretion",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 4,
    "title": "Respiration, Gaseous Exchange and Excretion",
    "description": "Aerobic and anaerobic respiration with their equations, breathing mechanics and exchange surfaces in alveoli, gills and spiracles, the excretory organs from simple animals to the kidney, and the roles of skin and liver in keeping the internal environment clean.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Respiration is the breakdown of food in cells to release energy; breathing is only the ventilation of the exchange surface, and the two must never be equated.\n• Aerobic equation: glucose + oxygen gives carbon dioxide + water + energy, written C6H12O6 + 6O2 gives 6CO2 + 6H2O + energy.\n• Energy released is carried by the molecule ATP and used for movement, growth, active transport, food making and body heat in birds and mammals.\n• Anaerobic respiration in yeast: glucose gives ethanol + carbon dioxide + small energy, the fermentation that raises kenkey dough and brews local drinks.\n• Anaerobic respiration in hard-worked muscle: glucose gives lactic acid + small energy; the acid debt must later be oxidised with oxygen.\n• In inspiration the diaphragm contracts and flattens while the external intercostal muscles raise the ribs, chest volume rises, pressure falls and air rushes in.\n• In quiet expiration the diaphragm relaxes and domes up and the ribs fall; the process is largely passive and air is pushed out.\n• Exchange surfaces share four features: thin, moist, hugely folded for surface area, and kept with a fresh blood or air supply to maintain the gradient.\n• Alveoli are air sacs with walls one cell thick, wetted with fluid and wrapped in capillaries; oxygen diffuses into blood, carbon dioxide out.\n• Fish gills stack filaments into lamellae; blood and water flow in opposite directions so the countercurrent keeps diffusion running along the whole lamella.\n• Insects take air through spiracles into tracheal tubes that branch to every cell; no pigment or ventilation of lungs is needed.\n• Plants exchange gases through stomata by day and night and through lenticels in old bark; net intake flips from carbon dioxide in light to oxygen in dark.\n• Excretion removes metabolic wastes: carbon dioxide from respiration, urea from protein breakdown, excess water and salts.\n• Simple animals specialise: Amoeba contracts a vacuole, flatworms use flame cells, earthworms nephridia, insects Malpighian tubules that dump waste into the gut.\n• The vertebrate kidney's nephron filters blood at the glomerulus, reabsorbs needed glucose, salts and water, and concentrates the rest into urine.\n• The skin sweats water, salts and a little urea and cools the body; the liver deaminates excess amino acids into urea, detoxifies poisons and stores glycogen.\n• Desert animals and dry-season survivors make concentrated urine, have long loops of Henle, reduce activity at heat peaks, and plants close stomata against water loss.",
    "detailedNotes": {
      "overview": "Respiration supplies the energy of every other process in this course, and excretion disposes of its chemical leftovers. This topic states the aerobic and anaerobic equations precisely, works the mechanics of breathing and the design of exchange surfaces in lungs, gills, tracheae and stomata, then maps the excretory organs of simple animals onto the human kidney with the liver and skin as the chemical partners. The worked examples compute ventilation rate and the masses of alcohol fermentation, and the quiz tests the classic confusions between breathing and respiration and between urea formation and urea excretion.",
      "introduction": "Learn this topic as cause and effect chains rather than definitions. Build the chain for one breath: brain signal, diaphragm contracts, volume up, pressure down, air in; and the chain for one waste molecule: amino acid in liver, deamination, urea in blood, filtration in kidney, urine out. Write both word equations and symbol equations for respiration until they are automatic, checking atom counts each time. For every named organ, say the structure, the substance exchanged and the direction, the three facts WAEC questions are assembled from.",
      "realWorldContext": "In a Ghanaian kitchen the chemistry of this topic runs daily: kenkey dough left overnight in a covered basin swells and turns sour-sweet as yeast respires anaerobically, releasing carbon dioxide that bubbles the dough, and in the brewery the same pathway yields the ethanol of pito. On the farm at Nungua a labourer working under the noon sun sweats water, salts and traces of urea through his skin, both cooling him and excreting, while his breathing deepens as muscle oxygen debt grows. In the health clinic a patient whose kidneys have failed is described in terms of this topic's anatomy, urea piling up in the blood until dialysis takes over the nephron's filtering job. At the fish landing at Ada the brill and tilapia gills show the countercurrent design that keeps a lake's thin oxygen supply fully harvested.",
      "objectives": [
        "Write and balance the equations for aerobic respiration and for both anaerobic pathways, naming sites and energy yield",
        "Describe the mechanics of inspiration and expiration with the muscles, ribs, pressures and volumes involved",
        "Relate the structure of alveoli, gill lamellae, tracheae and stomata to their function in gas exchange",
        "Name the excretory organs of Amoeba, flatworm, earthworm, insect and vertebrate with the substance each removes",
        "Explain the structure and action of the mammalian kidney and the roles of skin and liver in excretion and homeostasis"
      ],
      "sections": [
        {
          "title": "Aerobic and Anaerobic Respiration",
          "content": "Respiration is the intracellular breakdown of food, usually glucose, to release the energy locked in its chemical bonds, and the energy is captured in ATP to run movement, growth, repair, active transport, food synthesis and in birds and mammals body heat. When oxygen is plentiful the pathway is aerobic: glucose + oxygen gives carbon dioxide + water + much energy, in symbols C6H12O6 + 6O2 gives 6CO2 + 6H2O + energy; it begins in the cytoplasm and completes inside the mitochondria, and every one of the six carbons of glucose leaves as carbon dioxide. Where oxygen is scarce, cells fall back on anaerobic respiration, glucose split without oxygen into either ethanol + carbon dioxide + little energy in yeast and some plants, or lactic acid + little energy in overworked muscle and some bacteria. The energy yield is small because the organic products still hold most of glucose's energy, but the speed is enough to keep a sprinting muscle or a fermenting dough going. In hard-worked muscle the lactic acid accumulates, lowers the pH of the tissue, cramps the fibre, and is later carried in blood to the liver where, with borrowed oxygen, it is rebuilt to glucose or burnt away, the so-called oxygen debt. The practical face of the yeast pathway is Ghanaian food making: the same carbon dioxide that raises kenkey dough and the same ethanol that brews local drinks are textbook anaerobic respiration under a basin lid.",
          "bulletPoints": [
            "Aerobic: C6H12O6 + 6O2 gives 6CO2 + 6H2O + much energy; sites cytoplasm and mitochondria.",
            "Anaerobic in yeast: glucose gives ethanol + carbon dioxide + little energy.",
            "Anaerobic in muscle: glucose gives lactic acid + little energy; the debt is later oxidised.",
            "ATP carries the released energy to where work is done.",
            "Fermentation in dough and brewing is anaerobic respiration performed deliberately."
          ],
          "keyTakeaway": "Respiration happens in every living cell every moment; breathing is only its air supply, and anaerobic pathways pay far less energy per glucose.",
          "realWorldExample": "A kneader turning kenkey dough at dawn sees bubbles of carbon dioxide in the covered basin, the visible exhaust of yeast cells respiring without oxygen in the thick, airless mass."
        },
        {
          "title": "Breathing and the Mechanics of Ventilation",
          "content": "Ventilation moves air over the exchange surfaces, and it obeys one physical rule only, that gas flows from higher to lower pressure, so the body manufactures the pressure difference by changing the volume of the thorax. For inspiration the diaphragm, the sheet of muscle in the floor of the chest, contracts and flattens downward while the external intercostal muscles contract and pull the ribs upward and outward; the chest volume increases, the pressure inside the lungs falls below atmospheric pressure, and air rushes in. For quiet expiration the diaphragm relaxes and domes back up, the ribs fall, the elastic lungs squeeze themselves, pressure inside rises above atmosphere and air is pushed out; the muscles of expiration are needed only in forced breathing such as sprinting. The rate of ventilation is tidal volume multiplied by breathing rate, about 500 mL per breath at fourteen breaths a minute for a resting student, giving seven litres a minute, while exercise drives the same figure to over thirty litres a minute as both depth and frequency rise. Control sits in the medulla of the brain, which is monitored mainly by the level of carbon dioxide, and breath-holding is finally defeated by rising carbon dioxide rather than by falling oxygen, which is why a diver who has hyperventilated first can black out without warning. A simple spirometer or a balloon-and-jar model in the school laboratory demonstrates the volume change, and the experiment is a standing Paper 3 favourite.",
          "bulletPoints": [
            "Inspiration: diaphragm contracts and flattens, external intercostals raise the ribs, volume up, pressure down.",
            "Expiration at rest: diaphragm relaxes and domes, ribs fall, volume down, pressure up, largely passive.",
            "Ventilation rate = tidal volume x breathing rate, in litres per minute.",
            "The medulla responds mainly to rising carbon dioxide in the blood.",
            "Gas moves only down a pressure difference, so ventilation is volume engineering."
          ],
          "keyTakeaway": "Name the muscle, its action, the volume change and the pressure change in that order; the chain of four is exactly how the marks are split.",
          "realWorldExample": "After running to catch a trotro at Circle, a student's breathing stays fast for minutes after she stops, because her muscles still owe the oxygen debt that repays the lactic acid produced by anaerobic respiration."
        },
        {
          "title": "Exchange Surfaces: Lungs, Gills, Tracheae and Stomata",
          "content": "Good exchange surfaces solve the same engineering problem with the same four features, thin walls, a moist surface, an enormous folded area, and a maintained gradient by ventilation or blood flow. The human lung meets them through the alveoli, some three hundred million air sacs whose walls are one cell thick, wetted with tissue fluid and wrapped in capillaries, so oxygen diffuses down its gradient into the blood and carbon dioxide out, the whole folded surface of a tennis court packed inside the chest. A fish gill does it between two media: water entering the mouth passes over stacked filaments bearing lamellae, and the blood inside flows in the opposite direction to the water outside, a countercurrent arrangement that keeps a steeper oxygen gradient along the whole lamella and lets the gill strip most of the oxygen out of water that a human lung would find hopelessly thin. An insect takes another road, air rather than blood: spiracles open along the body into tracheal tubes that branch into finer tracheoles, each reaching individual cells, moist at the tip so oxygen dissolves and diffuses in directly, which is why the insect's haemolymph carries no oxygen at all. A plant exchanges through stomata, the guard-cell pores mainly on the lower leaf surface, opening by day for carbon dioxide intake and closing partly against water loss, while lenticels in old bark let the woody stem breathe; in bright light the leaf takes in carbon dioxide for photosynthesis faster than it respires, but at night it respires only, taking in oxygen and giving out carbon dioxide just like an animal.",
          "bulletPoints": [
            "Exchange surfaces are thin, moist, folded and ventilated or well supplied with blood.",
            "Alveoli: one-cell walls, capillary networks, huge total area inside the chest.",
            "Fish gills use countercurrent blood and water flow to hold the diffusion gradient.",
            "Insect tracheoles deliver air to cells directly; the blood carries no oxygen.",
            "Stomata exchange leaf gases; lenticels exchange through bark; net gas traffic flips with light."
          ],
          "keyTakeaway": "For each surface, state the medium on either side of the wall and how the gradient is kept; countercurrent and tracheole answers both turn on that phrase.",
          "realWorldExample": "At the Ada fish landing, gills taken from a tilapia an hour earlier are still bright red because their one-cell walls hold capillary blood, the colour itself proving how thin and how richly supplied the exchange surface is."
        },
        {
          "title": "Excretory Organs from Simple Animals to the Kidney",
          "content": "Excretion is the removal of the metabolic wastes the body made itself: carbon dioxide from respiration, water in excess, the nitrogenous urea or its relatives from protein breakdown, and spent salts. Each animal group built a tool matched to its size and habitat. An Amoeba in a pond water drop is constantly flooded by osmosis, so a contractile vacuole gathers the excess water and pumps it out through the surface. Freshwater flatworms run rows of flame cells, funnel-shaped cells whose beating flagella draw water and wastes into tubules opening on the skin. The earthworm carries a pair of nephridia in each segment, tubule and funnel filtering coelom fluid and reabsorbing what is useful before the residue leaves through the body wall. Insects conserve water brilliantly with Malpighian tubules, blind-ended tubes dipping into the blood that load salts and waste into the gut, where water is reclaimed and dry nitrogenous paste exits with the faeces, an adaptation to the harmattan as much as to the desert. The vertebrate kidney is the tuned version of the same plumbing on a large scale: about a million nephrons per kidney, each starting with the Bowman's capsule around a knot of capillaries, the glomerulus, where high arterial pressure forces a small filtrate of water, glucose, salts and urea out of the blood, then a tubule that reabsorbs all the glucose, most of the water and the salts the body needs, leaving urea with the correct balance of water and salts as urine, which drains by ureter, is stored in bladder and voided through urethra.",
          "bulletPoints": [
            "Amoeba: contractile vacuole expels excess water.",
            "Flatworm: flame cells; earthworm: nephridia segment by segment.",
            "Insects: Malpighian tubules dump waste into the gut and save water.",
            "Kidney: nephron filters at the glomerulus and reabsorbs selectively along the tubule.",
            "Urine leaves via ureter to bladder and out through the urethra."
          ],
          "keyTakeaway": "Track the filtrate as three verbs, ultrafiltration, reabsorption, secretion; a named part belongs to one of them, and the mark usually sits on the verb.",
          "realWorldExample": "An earthworm brought in after rain from the school garden at Ejisu can be examined under a lens, its body wall dotted with the tiny nephridia pores that clean its coelom fluid segment by segment."
        },
        {
          "title": "Skin, Liver and Survival in Dry Conditions",
          "content": "Two organs do excretion's chemical groundwork before the kidney ever sees the waste. The liver deaminates amino acids that arrive in excess from digested protein, stripping off the amino group and converting the toxic ammonia produced into the far safer urea, which enters the blood for the kidneys to remove; the same organ detoxifies drugs and alcohol, stores surplus glucose as glycogen and makes the bile that emulsifies fat. The skin, the largest organ of all, sweats through its glands a dilute solution of water, salts and a little urea, and as that film evaporates it draws away body heat, which is why sweating is simultaneously excretion and temperature control; blocking that cooling, as a heavy raincoat does on a humid coastal noon, quickly sends core temperature up. Adaptation to dry climates then edits all of these systems, and the syllabus expects named examples. Desert mammals such as gerbils have kidneys with exceptionally long loops of Henle that reabsorb nearly all the filtered water, so they pass small volumes of thick concentrated urine, and they shelter from the heat and forage at night to cut evaporative loss. The snail seals its shell mouth with a dried mucus lid in aestivation through the dry season, and the savanna grasses and trees of northern Ghana close their stomata in the hottest hours, thicken the cuticle and drop transpiration far below uptake, which is why a maize plant on the Tamale plains at noon looks alive but is trading gas exchange for water economy. Even breathing is economised: every inspiration loses water vapour, and mammals with longer nasal passages recover more of it before the air reaches the lungs.",
          "bulletPoints": [
            "Liver: deamination of excess amino acids makes urea from toxic ammonia; it also detoxifies and stores glycogen.",
            "Skin: sweat glands remove water, salts and a little urea; evaporation cools the body.",
            "Long loops of Henle in desert mammals concentrate the urine and save water.",
            "Stomatal closure and thick cuticles keep savanna plants' water during the dry season.",
            "Aestivation in the snail and night foraging in desert rodents reduce evaporative loss."
          ],
          "keyTakeaway": "Separate the two liver jobs from the kidney job: the liver makes urea, the kidney removes it; examiners award on exactly that distinction.",
          "realWorldExample": "A fisherman mending nets at Elmina at noon loses litres of sweat, water and salt together, and his dark concentrated urine in the evening shows the kidneys reabsorbing water to defend his body volume."
        }
      ],
      "commonMistakes": [
        "Using breathing and respiration as the same word; respiration is the chemical breakdown of food inside cells, breathing only moves air over the exchange surface.",
        "Saying plants do not respire at night; they respire continuously, and in light photosynthesis simply runs faster and masks the gas exchange.",
        "Writing that the diaphragm contracts during expiration; in quiet expiration the diaphragm relaxes and domes upward, and contraction belongs to inspiration.",
        "Claiming urea is made in the kidney; it is formed in the liver by deamination and the kidney only removes it from the blood.",
        "Naming spiracles as the insect's breathing lungs; spiracles are openings, the gas exchange runs in the tracheoles, and no insect lung exists.",
        "Stating that excretion and egestion are the same process because both pass matter out; egestion removes undigested food that never entered cells, excretion removes metabolic products."
      ],
      "wassceExamTips": [
        "Paper 1 tests the equation directly: expect an item asking which substances are the products of aerobic respiration, and answer carbon dioxide, water and energy, never lactic acid unless the stem says anaerobic.",
        "In Paper 2 a mechanics-of-breathing question is marked on the four links of the chain, muscle action, volume change, pressure change, direction of air; write all four.",
        "For an exchange-surface essay use the phrase adapted to increase surface area and give the thinness, moisture and gradient points; the countercurrent argument earns a separate mark in the fish section.",
        "In Paper 3 the limewater or hydrogen-carbonate indicator tests for carbon dioxide in respiration are classics: state the colour change and the conclusion in the same sentence.",
        "When a kidney question asks where a substance is handled, name the part and the verb together, for example all glucose is reabsorbed in the first coiled tubule; bare part names score nothing."
      ],
      "summaryChecklist": [
        "Can I write the aerobic and both anaerobic equations in words and symbols and name the sites of each?",
        "Can I describe inspiration and expiration as muscle, volume, pressure and airflow links in order?",
        "Can I explain how alveoli, gill lamellae, insect tracheae and leaf stomata are built for diffusion?",
        "Can I match each excretory organ, contractile vacuole, flame cell, nephridium, Malpighian tubule and nephron, to its animal?",
        "Can I explain the liver's deamination and the skin's sweating roles and give two dry-climate water-saving adaptations?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-resp-1",
        "title": "Pulmonary Ventilation at Rest and in Exercise",
        "problem": "A resting student breathes 14 times a minute with a tidal volume of 500 mL. During a training run her breathing rate rises to 28 per minute and her tidal volume to 1200 mL. Calculate the volume of air moved per minute in each state and the factor of increase.",
        "stepByStepSolution": [
          "Step 1 (M1): Pulmonary ventilation = tidal volume x breathing rate.",
          "Step 2 (M1): At rest: 500 mL x 14 = 7000 mL per minute.",
          "Step 3 (A1): At rest the lungs move 7000 mL, that is 7.0 litres, per minute.",
          "Step 4 (M1): In exercise: 1200 mL x 28 = 33600 mL per minute.",
          "Step 5 (A1): In exercise the lungs move 33600 mL, that is 33.6 litres, per minute.",
          "Step 6 (M1): Factor = 33600 / 7000 = 4.8.",
          "Step 7 (A1): Final answer: ventilation rises from 7.0 L per minute at rest to 33.6 L per minute in exercise, a 4.8-fold increase, matching the oxygen debt the muscles must repay."
        ],
        "keyTakeaway": "Both depth and frequency rise together in exercise, so ventilation increases multiplicatively rather than by a simple step."
      },
      {
        "id": "ex-bio-resp-2",
        "title": "Mass Balance in Alcohol Fermentation",
        "problem": "Yeast respires anaerobically by the equation C6H12O6 gives 2C2H5OH + 2CO2. The relative molecular masses are glucose 180, ethanol 46 and carbon dioxide 44. A brewer ferments 900 g of glucose completely. Calculate the masses of ethanol and carbon dioxide produced and show that mass is conserved.",
        "stepByStepSolution": [
          "Step 1 (M1): Moles of glucose = mass / Mr = 900 / 180 = 5 mol.",
          "Step 2 (M1): From the equation, 1 glucose gives 2 ethanol and 2 carbon dioxide, so 5 mol glucose gives 10 mol ethanol and 10 mol carbon dioxide.",
          "Step 3 (M1): Mass of ethanol = moles x Mr = 10 x 46.",
          "Step 4 (A1): Ethanol produced = 460 g.",
          "Step 5 (M1): Mass of carbon dioxide = 10 x 44.",
          "Step 6 (A1): Carbon dioxide produced = 440 g.",
          "Step 7 (M1): Check of conservation: 460 + 440 = 900 g, equal to the glucose mass.",
          "Step 8 (A1): Final answer: the fermentation gives 460 g of ethanol and 440 g of carbon dioxide, and the product masses add back exactly to the 900 g of glucose consumed."
        ],
        "keyTakeaway": "A balanced equation is a mass recipe; the products of fermentation always add back to the mass of sugar used."
      }
    ],
    "quiz": {
      "id": "quiz-bio-resp-excretion",
      "topicId": "shs1-bio-t3-respiration-and-excretion",
      "title": "Respiration and Excretion Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-resp-1",
          "quizId": "quiz-bio-resp-excretion",
          "questionText": "Which equation states aerobic respiration?",
          "optionA": "Glucose gives ethanol + carbon dioxide.",
          "optionB": "Glucose gives lactic acid.",
          "optionC": "Glucose + oxygen gives carbon dioxide + water + energy.",
          "optionD": "Carbon dioxide + water gives glucose + oxygen.",
          "correctOption": "C",
          "subConcept": "Respiration equations",
          "explanation": "Aerobic respiration burns glucose with oxygen to carbon dioxide, water and energy. Option A is yeast fermentation, B is muscle anaerobiosis, and D is the reverse process, photosynthesis.",
          "remediationTip": "Sort the three equations under headings aerobic, yeast and muscle, and write each with its energy note."
        },
        {
          "id": "q-bio-resp-2",
          "quizId": "quiz-bio-resp-excretion",
          "questionText": "During inspiration in a human, what happens in the chest?",
          "optionA": "The diaphragm relaxes and domes upward.",
          "optionB": "The diaphragm contracts and flattens while the ribs move up and out.",
          "optionC": "The external intercostal muscles relax and the ribs fall.",
          "optionD": "The chest volume decreases so pressure rises.",
          "correctOption": "B",
          "subConcept": "Breathing mechanics",
          "explanation": "Inspiration needs the diaphragm contracted and flat and the ribs raised, so volume rises and pressure falls and air enters. Options A, C and D each describe the opposite movement, expiration.",
          "remediationTip": "Draw one arrow for air in and label the four chain links above it, muscle, volume, pressure, airflow."
        },
        {
          "id": "q-bio-resp-3",
          "quizId": "quiz-bio-resp-excretion",
          "questionText": "Why does countercurrent flow make a fish gill efficient?",
          "optionA": "Blood and water move in opposite directions, keeping the oxygen gradient along the whole lamella.",
          "optionB": "It slows the water so the gill has more time to absorb oxygen.",
          "optionC": "It warms the blood before it leaves the gill.",
          "optionD": "It removes carbon dioxide directly into the water by pumping.",
          "correctOption": "A",
          "subConcept": "Exchange surfaces",
          "explanation": "Opposite flows mean blood always meets fresher water, so diffusion continues over the full path, the standard countercurrent answer. Slowing water, option B, would reduce the oxygen supply rather than help it.",
          "remediationTip": "Sketch two parallel arrows in opposite directions and label the fresh gradient they preserve."
        },
        {
          "id": "q-bio-resp-4",
          "quizId": "quiz-bio-resp-excretion",
          "questionText": "In which organ is urea formed in the mammal?",
          "optionA": "Kidney",
          "optionB": "Skin",
          "optionC": "Urinary bladder",
          "optionD": "Liver",
          "correctOption": "D",
          "subConcept": "Roles of liver and kidney",
          "explanation": "The liver deaminates excess amino acids and converts the toxic ammonia into urea; the kidney then removes that urea from the blood by filtration, and the bladder only stores urine.",
          "remediationTip": "Write the sentence: liver makes urea, kidney removes it, bladder stores it."
        },
        {
          "id": "q-bio-resp-5",
          "quizId": "quiz-bio-resp-excretion",
          "questionText": "The excretory organs of an insect such as a grasshopper are the",
          "optionA": "flame cells",
          "optionB": "nephridia",
          "optionC": "Malpighian tubules",
          "optionD": "contractile vacuoles",
          "correctOption": "C",
          "subConcept": "Excretory organs",
          "explanation": "Malpighian tubules load wastes from the blood into the gut while water is reabsorbed, suiting a dry habitat. Flame cells belong to flatworms, nephridia to the earthworm, and the contractile vacuole to Amoeba.",
          "remediationTip": "Build a two-column card: animal, organ, and drill the four pairs until naming is instant."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t3-photosynthesis-and-the-leaf",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 6,
    "title": "Photosynthesis and the Leaf",
    "description": "the equation, light and dark stages, chloroplast and leaf structure, raw materials and products, limiting factors, starch test and variegated-leaf experiments, effect on crop yield in Ghana",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Photosynthesis is the making of food by green plants using light energy, and it is the source of nearly all the energy in a Ghanaian food chain.\n• Word equation: carbon dioxide + water, in the presence of light and chlorophyll, gives glucose + oxygen.\n• Balanced symbol equation: 6CO2 + 6H2O -> C6H12O6 + 6O2; the atoms balance, carbon 6, hydrogen 12 and oxygen 18 on each side.\n• The same equation read as volumes shows that 6 volumes of carbon dioxide taken in release 6 volumes of oxygen, a gas ratio of 1 to 1.\n• The raw materials are carbon dioxide from the air through the stomata and water absorbed by the roots; the products are glucose and oxygen.\n• Glucose is used at once for respiration, converted to sucrose for transport, or stored as starch or used to build cellulose and proteins.\n• Chlorophyll is the green pigment inside the chloroplast that absorbs light, mainly red and blue, and passes that energy into the reactions.\n• The chloroplast has an outer membrane, fluid stroma, and stacks of thylakoids called grana; the light stage happens on the thylakoids and the dark stage in the stroma.\n• The light stage traps light energy, splits water (photolysis) to release oxygen and stores energy in temporary carriers.\n• The dark stage, the carbon-fixing or light-independent stage, uses that stored energy to join carbon dioxide into glucose; it can run in the dark but only while the light-stage carriers last.\n• Leaf structure serves photosynthesis: a broad thin lamina, a transparent upper epidermis, palisade mesophyll rich in chloroplasts, air-spaced spongy mesophyll, and stomata for gas entry.\n• The main limiting factors are light intensity, carbon dioxide concentration and temperature; the factor nearest its low point is the one that holds the rate down.\n• The classic experiments prove the need for each factor: destarch then a variegated leaf shows chlorophyll is needed; a covered-leaf test with iodine shows starch is made only where light reached.\n• Testing a leaf for starch: boil in water to kill the cells, boil in ethanol to remove the chlorophyll (no flame, ethanol is very flammable), rinse, then add iodine solution; blue-black colour means starch.\n• More photosynthesis means more dry matter and higher crop yield, which is why spacing, weeding and irrigation aim to keep light, carbon dioxide and water from limiting the maize or rice plant.",
    "detailedNotes": {
      "overview": "This topic explains photosynthesis as the process that turns light energy into the food and oxygen every other organism depends on. You will state the word and balanced symbol equations, describe the chloroplast and where the light and dark stages occur, relate leaf structure to food manufacture, and interpret the standard experiments with iodine and variegated leaves. The limiting factors and their link to crop yield on Ghanaian farms give the whole topic its practical point.",
      "introduction": "Begin with the equation until you can write it without looking, then check that the atoms balance on both sides. Move to the experiments and learn the exact order of steps, especially the safety step of heating ethanol in a water bath away from any flame. Finally reason out each limiting factor on a graph, saying which factor is limiting at each turn of the curve. Answer in the causal style the examiner expects: because this factor is low, this stage is slowed, so the rate falls.",
      "realWorldContext": "On a maize farm at Ejura the rows are spaced so each plant's leaves catch full sunlight, because light is the most obvious limiting factor under the harmattan sky. Rice growers in the Volta scheme keep the water shallow so the leaves are never short of the carbon dioxide and water they need. A cocoa farmer at Suhum prunes shade trees to lift light to the canopy, and school gardens in Sunyani grow beans and leafy greens precisely because a well-fed leaf packs more dry matter into the harvest.",
      "objectives": [
        "State the word and balanced symbol equations of photosynthesis",
        "Describe the structure of the chloroplast and locate the light and dark stages",
        "Explain how leaf structure is adapted to photosynthesis",
        "Carry out and interpret the starch test and the variegated-leaf experiment",
        "Explain the effect of light, carbon dioxide and temperature as limiting factors on crop yield"
      ],
      "sections": [
        {
          "title": "The Equation and Its Meaning",
          "content": "Photosynthesis is the chemical process by which green plants build glucose from simple raw materials using light energy trapped by chlorophyll. In words, carbon dioxide and water, in the presence of light and chlorophyll, are converted to glucose and oxygen. In symbols the balanced equation is 6CO2 + 6H2O -> C6H12O6 + 6O2. That equation must balance: carbon is 6 atoms on each side, hydrogen is 12 on each side, and oxygen is 18 on each side, counted as 6 molecules of carbon dioxide giving 12 oxygen plus 6 from water on the left, and 6 in glucose plus 12 from oxygen on the right. Read as volumes, six parts of carbon dioxide taken in correspond to six parts of oxygen released, a ratio of 1 to 1, which is why a pond weed in bright light bubbles out oxygen so freely. The glucose made is a starting material, not the end product; the plant respires some of it, transports some as sucrose, and stores the rest as insoluble starch or converts it into cellulose for walls and proteins for growth.",
          "bulletPoints": [
            "Word form: carbon dioxide + water, with light and chlorophyll, give glucose + oxygen.",
            "Symbol form 6CO2 + 6H2O -> C6H12O6 + 6O2 is balanced for C, H and O.",
            "As volumes the gas exchange is 6 carbon dioxide to 6 oxygen, a 1 to 1 ratio.",
            "Oxygen is released as a by-product of splitting water.",
            "Glucose is stored as starch, moved as sucrose, or built into cellulose and proteins."
          ],
          "keyTakeaway": "The equation is the whole story in one line: light plus chlorophyll turns waste gas and water into food and the oxygen we breathe.",
          "realWorldExample": "A science club at Achimota measures oxygen bubbles from a cut pond-weed sprig in a test tube of water and sees the rate climb when a lamp is brought nearer, confirming the gas is a product of the reaction."
        },
        {
          "title": "The Chloroplast and the Two Stages",
          "content": "Photosynthesis happens inside the chloroplast, an organelle with a double outer membrane, a fluid matrix called the stroma, and stacks of flattened sacs, the thylakoids, gathered into grana. The green pigment chlorophyll sits in the thylakoid membranes and absorbs light energy, taking in mainly red and blue wavelengths and reflecting the green you see. The reactions fall into two linked sets. The light stage occurs on the thylakoids and needs light; here chlorophyll absorbs energy that is used to split water molecules, a process called photolysis, which releases oxygen to the air and stores energy in temporary chemical carriers. The dark stage, also called the carbon-fixing or light-independent stage, runs in the stroma; it uses the stored energy to combine carbon dioxide with hydrogen and build glucose. It is called dark not because it must run in darkness but because it needs no light directly; it stops soon after the light stage because the carriers run out. The two stages are inseparable: the light stage charges the battery, the dark stage spends it to make food.",
          "bulletPoints": [
            "The chloroplast has a double membrane, stroma, thylakoids and grana stacks.",
            "Chlorophyll in the thylakoid absorbs mainly red and blue light and reflects green.",
            "Light stage on the thylakoids splits water (photolysis) and releases oxygen.",
            "Dark stage in the stroma fixes carbon dioxide into glucose using stored energy.",
            "The dark stage needs no light itself but depends on the carriers from the light stage."
          ],
          "keyTakeaway": "Think of the chloroplast as a solar power station: the panels on the thylakoids capture the light, the works in the stroma build the sugar.",
          "realWorldExample": "A biology teacher at Koforidua compares grana to stacks of coins so learners remember that the thylakoid surface, folded into piles, gives the huge area needed to catch light."
        },
        {
          "title": "Leaf Structure and the Classic Experiments",
          "content": "The leaf is built to carry out photosynthesis, with a broad thin lamina for light catchment, a transparent waxy upper epidermis to admit light while slowing water loss, palisade mesophyll crowded with chloroplasts, air-spaced spongy mesophyll for gas circulation, and stomata, mostly on the lower surface, for carbon dioxide to enter. The experiments that prove each requirement are examined again and again. To show starch is made, a plant is destarched by keeping it in the dark for a day or two, then a leaf is partly covered with foil and left in the sun. After a few hours the leaf is tested: boil it in water to kill the cells and stop reactions, then boil it in ethanol in a water bath to dissolve out the green chlorophyll, never over a flame because ethanol is extremely flammable, then rinse and add iodine solution. The exposed part turns blue-black, proving starch and therefore photosynthesis; the covered part stays brown, proving light was needed. A variegated leaf, with green and white patches, tested the same way turns blue-black only in the green patches, proving chlorophyll is required.",
          "bulletPoints": [
            "Destarch the plant first so any starch found was made during the test.",
            "Boil in water to kill cells, then boil in ethanol in a water bath to remove chlorophyll.",
            "Add iodine solution: blue-black colour confirms starch.",
            "A covered-leaf test shows light is needed; the covered area gives no blue-black.",
            "A variegated leaf shows chlorophyll is needed; only green areas turn blue-black."
          ],
          "keyTakeaway": "Every proof rests on the iodine test done the safe way, with ethanol heated in a water bath away from any flame.",
          "realWorldExample": "In the GES school laboratory at Tamale students use a geranium or coleus variegated leaf, cheap and on hand, to demonstrate that only the green part manufactures starch."
        },
        {
          "title": "Limiting Factors and Crop Yield",
          "content": "The rate of photosynthesis is set by whichever necessary factor is scarcest; that factor is called the limiting factor. The three that matter most are light intensity, carbon dioxide concentration and temperature. In dim early morning light, raising light intensity speeds the reaction, because more energy is available to the light stage. Under strong light, carbon dioxide can become limiting; enriching the air around a leaf lifts the rate until something else holds it back. Temperature acts through the enzymes of the dark stage: the rate rises as it warms, then falls sharply if it is too hot because the enzymes are damaged. On a graph of rate against light, the rising part is limited by light, the flattening part is limited by carbon dioxide or temperature. This reasoning runs straight into farm practice, because a plant that photosynthesises faster lays down more dry matter and gives a bigger harvest. Correct spacing so leaves are shaded as little as possible, timely weeding to remove competitors for light and carbon dioxide, and irrigation so water is never scarce are all ways of lifting the limiting factor that would otherwise cap a maize or rice yield.",
          "bulletPoints": [
            "A limiting factor is the factor nearest its low point that holds the rate down.",
            "Low light limits the light stage; low carbon dioxide limits the dark stage.",
            "Rising temperature speeds the dark-stage enzymes until they are damaged by heat.",
            "On a rate graph the slope is limited by the horizontal factor, the plateau by another.",
            "Reducing a limiting factor by spacing, weeding and watering raises crop yield."
          ],
          "keyTakeaway": "To grow more food, find the factor that is holding the plant back and relieve that one first.",
          "realWorldExample": "Extension officers at Ejura advise maize growers on plant spacing precisely because overcrowded stands shade each other and turn light into the limiting factor of the whole field."
        }
      ],
      "commonMistakes": [
        "Writing the equation as carbon dioxide + oxygen give glucose + water; this reverses the reactants and products and is the single most common loss of marks.",
        "Forgetting to destarch the plant before the starch experiment, so the blue-black result proves nothing new.",
        "Heating the ethanol directly over a flame to remove chlorophyll; ethanol vapour catches fire, so the safe water-bath step must be stated.",
        "Explaining a plateau on a rate-of-photosynthesis graph as 'the plant is tired'; the correct answer names the new limiting factor.",
        "Saying the dark stage only runs at night; it runs in daylight too and is limited by the carriers the light stage provides."
      ],
      "wassceExamTips": [
        "Paper 1 may ask you to pick the balanced equation from four options; check the oxygen count, 18 atoms on each side, to find the right one fast.",
        "In Paper 2 a 'describe the experiment' answer earns method marks for each correct step, so list destarch, cover, test in order and keep the water-bath safety line.",
        "For a limiting-factor graph question always name the factor and the stage it limits; linking the two is what gets the second mark.",
        "When asked why spacing raises yield, say less mutual shading means more light reaches the leaves so the light stage runs faster; do not stop at 'more space'.",
        "In Paper 3 you may actually test a leaf for iodine; note the colour change as blue-black, not just 'dark', because examiners accept the precise term."
      ],
      "summaryChecklist": [
        "Can I write and balance the symbol equation for photosynthesis?",
        "Can I name the two stages and say where each occurs in the chloroplast?",
        "Can I link each leaf tissue to a role in photosynthesis?",
        "Can I carry out and interpret the starch and variegated-leaf experiments safely?",
        "Can I explain the three limiting factors and how relieving them raises crop yield?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-photo-1",
        "title": "Balancing the Equation and Reading the Gas Ratio",
        "problem": "Write the balanced symbol equation for photosynthesis and use it to state the volume ratio of carbon dioxide taken in to oxygen given out.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the unbalanced skeleton, CO2 + H2O -> C6H12O6 + O2.",
          "Step 2 (M1): Balance carbon by placing 6 before CO2 so the glucose carbon of 6 is matched.",
          "Step 3 (M1): Balance hydrogen by placing 6 before H2O, giving 12 hydrogen atoms on the left.",
          "Step 4 (M1): Count oxygen on the left, 6(2) from CO2 plus 6 from H2O = 18, and set 6O2 on the right so glucose 6 plus oxygen 12 = 18.",
          "Step 5 (A1): The balanced equation is 6CO2 + 6H2O -> C6H12O6 + 6O2.",
          "Step 6 (A1): Six volumes of carbon dioxide in give six volumes of oxygen out, so the ratio is 6:6, that is 1:1."
        ],
        "keyTakeaway": "A balanced equation lets you read the gas exchange straight off the coefficients, here 1 volume of oxygen for every 1 volume of carbon dioxide."
      },
      {
        "id": "ex-bio-photo-2",
        "title": "Measuring the Rate of Photosynthesis from Oxygen Bubbles",
        "problem": "A pond-weed sprig in bright light releases 72 oxygen bubbles in 6 minutes. Each bubble is taken to be 0.05 mm3. Find the rate in bubbles per minute and the volume of oxygen released per minute.",
        "stepByStepSolution": [
          "Step 1 (M1): Rate of bubbling = total bubbles / total time = 72 / 6.",
          "Step 2 (A1): The bubbling rate = 12 bubbles per minute.",
          "Step 3 (M1): Volume per minute = bubbles per minute × volume of one bubble = 12 × 0.05 mm3.",
          "Step 4 (A1): The volume of oxygen released = 0.6 mm3 per minute.",
          "Step 5 (M1): To compare conditions, keep the time and bubble size fixed and vary only the factor under test.",
          "Step 6 (A1): A higher count per minute therefore indicates a higher rate of photosynthesis."
        ],
        "keyTakeaway": "Counting bubbles over a fixed time, then multiplying by bubble volume, converts an observation into a rate the examiner can mark."
      }
    ],
    "quiz": {
      "id": "quiz-bio-photo",
      "topicId": "shs1-bio-t3-photosynthesis-and-the-leaf",
      "title": "Photosynthesis and the Leaf Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-photo-1",
          "quizId": "quiz-bio-photo",
          "questionText": "Which balanced symbol equation correctly represents photosynthesis?",
          "optionA": "6CO2 + 6H2O -> C6H12O6 + 6O2",
          "optionB": "C6H12O6 + 6O2 -> 6CO2 + 6H2O",
          "optionC": "6O2 + 6H2O -> C6H12O6 + 6CO2",
          "optionD": "CO2 + H2O -> C6H12O6 + O2",
          "correctOption": "A",
          "subConcept": "The equation",
          "explanation": "Option A balances with 6 carbon, 12 hydrogen and 18 oxygen atoms on each side. Option B is the reverse reaction, respiration, and option D is unbalanced.",
          "remediationTip": "Balance carbon, then hydrogen, then oxygen, and always recount the oxygen atoms."
        },
        {
          "id": "q-bio-photo-2",
          "quizId": "quiz-bio-photo",
          "questionText": "The light stage of photosynthesis, in which water is split and oxygen released, takes place",
          "optionA": "in the stroma of the chloroplast",
          "optionB": "in the mitochondrion",
          "optionC": "on the thylakoid membranes of the chloroplast",
          "optionD": "in the sap vacuole of the leaf cell",
          "correctOption": "C",
          "subConcept": "The two stages",
          "explanation": "Photolysis of water occurs on the thylakoid membranes where chlorophyll absorbs light; the dark carbon-fixing stage runs in the stroma. Mitochondria respire, they do not photosynthesise.",
          "remediationTip": "Label a chloroplast diagram and ring the thylakoids for the light stage."
        },
        {
          "id": "q-bio-photo-3",
          "quizId": "quiz-bio-photo",
          "questionText": "In the starch test, the leaf is boiled in ethanol in a water bath rather than over a flame because",
          "optionA": "flames destroy the starch in the leaf",
          "optionB": "ethanol is highly flammable and its vapour can catch fire",
          "optionC": "the water bath makes the leaf turn blue-black faster",
          "optionD": "ethanol only works when it is cold",
          "correctOption": "B",
          "subConcept": "Experimental safety",
          "explanation": "Ethanol dissolves the chlorophyll but ignites easily, so it must be heated in a water bath away from any naked flame. The water bath is a safety control, not a reagent.",
          "remediationTip": "Write the three test steps as a numbered card: water, ethanol in a water bath, iodine."
        },
        {
          "id": "q-bio-photo-4",
          "quizId": "quiz-bio-photo",
          "questionText": "A plant is kept in bright light but the surrounding carbon dioxide is removed. Photosynthesis stops mainly because",
          "optionA": "there is no light for the light stage",
          "optionB": "the roots stop absorbing water",
          "optionC": "chlorophyll is destroyed by the bright light",
          "optionD": "carbon dioxide is the raw material for the dark stage, so it becomes the limiting factor",
          "correctOption": "D",
          "subConcept": "Limiting factors",
          "explanation": "Light is plentiful, so the limiting factor is carbon dioxide, which the dark stage needs to build glucose. Water uptake and chlorophyll are unaffected by removing carbon dioxide.",
          "remediationTip": "For any graph question, name the factor that is low and the stage it starves."
        },
        {
          "id": "q-bio-photo-5",
          "quizId": "quiz-bio-photo",
          "questionText": "A variegated leaf, part green and part white, is destarched, exposed to light and tested with iodine. Which result is expected?",
          "optionA": "Only the green patches turn blue-black",
          "optionB": "The whole leaf turns blue-black",
          "optionC": "Only the white patches turn blue-black",
          "optionD": "No part changes colour",
          "correctOption": "A",
          "subConcept": "Role of chlorophyll",
          "explanation": "Starch forms only where chlorophyll is present, so the green patches turn blue-black and the white patches stay brown, proving chlorophyll is needed. This rules out the whole-leaf and no-change results.",
          "remediationTip": "Remember the pattern: green means chlorophyll means food made means blue-black."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t3-circulation-blood-heart-vessels",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 11,
    "title": "The Blood, Heart and Vessels",
    "description": "The components of blood and their functions, red cell adaptation and the clotting mechanism, ABO and Rhesus groups with transfusion rules, the four-chambered heart and double circulation, the differences between arteries, veins and capillaries, pulse and blood pressure, and the local significance of hypertension and sickle cell in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Blood is a connective tissue of plasma, red cells, white cells and platelets; a centrifuged sample separates into plasma above, a thin buffy coat, and packed red cells below.\n• Plasma carries dissolved glucose, amino acids, salts, hormones, urea and much of the carbon dioxide, distributes heat and holds the fibrinogen needed for clotting.\n• Red cells contain haemoglobin, have no nucleus, are biconcave for a short diffusion distance and pass through capillaries by changing shape; white cells defend and platelets are cell fragments that start clotting.\n• Clotting needs platelet factors, calcium ions and vitamin K: prothrombin becomes thrombin, and thrombin converts soluble fibrinogen into insoluble fibrin that traps cells as a scab; serum is plasma without fibrinogen.\n• Group A has A antigen and anti-B antibody, group B the reverse, group AB both antigens and no antibody, group O no antigen and both antibodies, so O donates widely and AB receives widely in an emergency.\n• Rhesus negative blood must not receive rhesus positive blood, and an Rh-negative mother can develop antibodies that harm a later Rh-positive baby, which antenatal screening and an anti-D injection prevent.\n• The heart has two auricles and two ventricles, the left ventricle wall being thickest; valves prevent backflow and chordae tendineae stop the atrio-ventricular valves turning inside out.\n• Double circulation means blood passes through the heart twice per full circuit, pulmonary to the lungs and systemic to the body, and the two sides never mix.\n• Cardiac output = heart rate multiplied by stroke volume; both rise during exercise so that muscle receives more oxygen.\n• Arteries have thick elastic muscular walls, narrow lumens, high pressure and no valves; veins have thin walls, wide lumens, low pressure and semilunar valves; capillaries are one cell thick and are the only site of exchange.\n• Pulse is the throbbing of an artery wall, blood pressure is the force on that wall measured with a sphygmomanometer, commonly about 120 over 80 millimetres of mercury in a healthy young adult; sustained hypertension strains heart, brain and kidney.",
    "detailedNotes": {
      "overview": "This topic covers the transport system of mammals in three parts. First the blood itself: its four components, how a red cell is built for oxygen, and how plasma, platelets, calcium and fibrinogen together stop a bleed. Then the pump: the four chambers, the valves, the thick left ventricle and the double circuit that keeps oxygenated and deoxygenated blood apart, with cardiac output as the arithmetic of the section. Finally the pipes and the numbers: arteries, veins and capillaries compared on wall, lumen, pressure and valves; pulse and blood pressure as different measurements; blood groups and transfusion rules; and the local realities of hypertension and sickle cell.",
      "introduction": "Draw the heart once from memory and label the vessels on each side, because a correct diagram answers half of any structured question about circulation. Keep the three vessel comparisons in a table with four rows, wall, lumen, pressure and valves, and never claim all arteries carry oxygenated blood, since the pulmonary artery is the exception examiners test. For calculations write cardiac output as rate multiplied by stroke volume and convert cubic centimetres to cubic decimetres. On blood groups, memorise antigen on the cell and antibody in the plasma as a pair, and derive the transfusion rule from it instead of learning a chart by heart.",
      "realWorldContext": "In Ghana the transport system is a public health subject. A blood sample taken at a district hospital laboratory is grouped and cross-matched before transfusion, and donations screened by the National Blood Service carry the group label and a Rhesus marking.antenatal clinics offer sickle cell screening, where the carrier state HbAS is common in West Africa because it lessens the severity of malaria, while a child with sickle cell anaemia has red cells that collapse into crescents when oxygen falls, blocking capillaries and causing pain crises. A form-master counting the pulse of the class at the assembly ground with a stopwatch, and an elderly trotro driver whose clinic card records a persistently high pressure reading, are both using the same physiology. Dehydration during the harmattan thickens the blood and slows the flow, which is why health workers press the message to drink water.",
      "objectives": [
        "Name the components of blood and state the function of each, including the role of plasma proteins",
        "Describe the clotting sequence and explain the adaptations of the red blood cell to oxygen transport",
        "Label the mammalian heart, explain double circulation and calculate cardiac output from rate and stroke volume",
        "Compare arteries, veins and capillaries, distinguish pulse from blood pressure, and apply ABO and Rhesus rules to transfusion"
      ],
      "sections": [
        {
          "title": "Plasma, Cells and the Clotting Mechanism",
          "content": "Centrifuged blood separates into a pale yellow plasma above a thin white buffy coat of white cells and platelets and a deep red layer of packed cells below. Plasma is about nine tenths water and carries dissolved glucose, amino acids, salts, hormones, urea and most of the carbon dioxide, distributes heat from the metabolising organs to the skin where it is lost, and holds the proteins that maintain osmotic balance and clotting. Red cells are made in the red marrow of long bones and ribs, are packed with haemoglobin that combines reversibly with oxygen, lose their nucleus so that the disc shape offers a short diffusion distance, and bend to squeeze through capillaries; they carry no mitochondria and so do not consume the oxygen they deliver. White cells are nucleated, move by amoeboid action, phagocytose germs in the case of neutrophils, and in the case of lymphocytes produce antibodies or destroy infected cells. Platelets are not cells but fragments that break open at a wound and release clotting factors. The clotting cascade needs those platelet factors, calcium ions and vitamin K: prothrombin is converted into thrombin, thrombin turns soluble fibrinogen into insoluble fibrin, and the fibrin mesh traps red cells to form the scab that seals the cut. Plasma minus its fibrinogen is called serum, the fluid used in many laboratory tests.",
          "bulletPoints": [
            "Plasma transports nutrients, hormones, urea and carbon dioxide and distributes heat.",
            "Red cells are anucleate, biconcave, haemoglobin-filled and flexible; white cells are nucleated and defensive.",
            "Platelets are cell fragments that release the factors that begin clotting.",
            "Clotting requires calcium ions and vitamin K and ends with insoluble fibrin threads.",
            "Serum is plasma with the fibrinogen removed."
          ],
          "keyTakeaway": "Name the four components with one function each, then give the clotting chain in order, platelet factors, calcium, prothrombin to thrombin, fibrinogen to fibrin.",
          "realWorldExample": "A student who cuts a hand on a tin at the school farm stops bleeding in minutes because platelets, calcium and fibrinogen have sealed the wound, and the yellow fluid that later separates from the clot is serum."
        },
        {
          "title": "The Heart, Double Circulation and Blood Groups",
          "content": "The mammalian heart is a muscular double pump lying in the chest cavity, enclosed by the pericardium. Blood returns from the body to the right auricle through the vena cava and from the lungs to the left auricle through the pulmonary vein. Each auricle contracts and pushes blood through the atrio-ventricular valve into the ventricle below; the ventricles then contract with far greater force, the right sending blood along the pulmonary artery to the lungs and the left driving blood into the aorta for the whole body. The left ventricular wall is much thicker because it works against higher pressure over a longer circuit, and the valves together with the chordae tendineae prevent backflow and keep the atrio-ventricular valves from turning inside out, so blood moves in one direction only. Because every drop passes through the heart twice in a complete circuit, once along the pulmonary route for oxygenation and once along the systemic route to the tissues, the circulation is described as double, and the separation of the two sides keeps oxygenated and deoxygenated blood apart, supporting the high energy needs of a warm-blooded animal. Cardiac output, the volume pumped each minute, is the heart rate multiplied by the stroke volume. Blood groups are named from antigens on the red cell surface: group A carries A antigen with anti-B antibody in plasma, group B carries B antigen with anti-A antibody, group AB carries both antigens and neither antibody, and group O carries neither antigen but both antibodies, which is why O can donate broadly and AB can receive broadly in an emergency. The Rhesus antigen adds a positive or negative label; an Rh-negative mother sensitised by a first Rh-positive child may produce antibodies that destroy the red cells of a later Rh-positive fetus, causing haemolytic disease of the newborn, a condition antenatal screening detects and an anti-D injection prevents.",
          "bulletPoints": [
            "Right side receives body blood and pumps to the lungs; left side receives lung blood and pumps to the body.",
            "The left ventricle wall is thickest because the systemic circuit needs higher pressure.",
            "Valves and chordae tendineae enforce one-way flow and prevent backflow.",
            "Cardiac output equals heart rate multiplied by stroke volume, in cm3 per minute.",
            "Group AB has no plasma antibody, group O has no red cell antigen, and Rh-negative recipients must receive Rh-negative blood."
          ],
          "keyTakeaway": "Double circulation means two circuits through one four-chambered pump, and the arithmetic of that pump is rate multiplied by stroke volume.",
          "realWorldExample": "In a district hospital laboratory in Ghana, a grouped and cross-matched unit of blood is issued for a mother in obstetric emergency, and the record shows group and Rhesus label written together."
        },
        {
          "title": "Arteries, Veins, Capillaries, Pulse and Pressure",
          "content": "The three vessel types differ in wall, lumen, pressure and valves. An artery carries blood away from the heart, has a thick wall of muscle and elastic fibre, a narrow lumen and lies deep in the body; the high pressure it holds makes its wall throb, and that throbbing felt where an artery passes near the surface, at the wrist or beside the windpipe, is the pulse. A vein returns blood to the heart, has a thin wall with little muscle, a wide lumen, often lies near the surface where it is visible, holds a large share of the blood at low pressure, and depends on semilunar valves and the squeezing action of surrounding skeletal muscles to stop backflow; varicose veins in a trader who stands all day show what happens when those valves fail. Capillaries are microscopic, one cell thick, forming a network through every tissue where oxygen and food diffuse outward and carbon dioxide and urea diffuse inward, and they are the only place where exchange occurs. Blood pressure is the force of blood on the vessel wall, measured with a sphygmomanometer and written as systolic over diastolic in millimetres of mercury, about 120 over 80 in a healthy young adult, while pulse rate is simply beats per minute. Sustained high pressure, hypertension, strains the heart muscle, damages the fine vessels of kidney and retina and raises the risk of stroke, and it is aggravated by a very salty diet, obesity, heavy alcohol use and long-standing stress. In sickle cell anaemia the abnormal haemoglobin distorts red cells into stiff crescents when oxygen is low; the crescents block capillaries, are broken down early causing anaemia and pain crises, and the condition is managed in Ghanaian clinics with folic acid, antibiotics against infection and counselling for carrier couples.",
          "bulletPoints": [
            "Artery: away from heart, thick elastic wall, narrow lumen, high pressure, no valves.",
            "Vein: to the heart, thin wall, wide lumen, low pressure, semilunar valves present.",
            "Capillary: one cell thick, microscopic, the only site of exchange with tissues.",
            "Pulse is beats of an artery per minute; blood pressure is force on the wall, read with a sphygmomanometer.",
            "Hypertension is persistent high pressure and damages heart, brain, kidney and eye vessels."
          ],
          "keyTakeaway": "Compare vessels on four stated features and never generalise about oxygen content, because the pulmonary artery and pulmonary vein reverse the usual pattern.",
          "realWorldExample": "A school health club member using a clinic sphygmomanometer on a teacher records 130 over 85 millimetres of mercury, a figure the nurse repeats before advising less salty food and more exercise."
        }
      ],
      "commonMistakes": [
        "Stating that every artery carries oxygenated blood and every vein deoxygenated blood; the pulmonary artery carries deoxygenated blood to the lungs and the pulmonary vein carries oxygenated blood back.",
        "Confusing pulse with blood pressure, or writing a pressure figure without the unit millimetres of mercury.",
        "Claiming a group O patient can receive any blood because O is the universal donor; group O plasma holds both antibodies, so an O patient may receive only group O.",
        "Saying fibrin circulates dissolved in the plasma; the circulating protein is fibrinogen, and fibrin is formed only at the wound."
      ],
      "wassceExamTips": [
        "Paper 1 vessel items are settled by four features: away from heart means artery, one cell thick means capillary, valves with low pressure mean vein.",
        "In Paper 2 a heart question expects a labelled diagram with vessels on the correct side and arrows showing direction; draw it before writing sentences.",
        "Paper 3 may give centrifuged blood and ask you to identify the layers and measure packed cell volume with a ruler against the total height.",
        "For cardiac output, state the formula, substitute rate and stroke volume in the same units and give the answer in dm3 per minute; the formula line itself carries the method mark."
      ],
      "summaryChecklist": [
        "Can I list the four blood components with their functions and name the layers of centrifuged blood?",
        "Can I explain red cell adaptation and give the clotting sequence in the correct order?",
        "Can I label a diagram of the heart and trace one drop through the double circulation?",
        "Can I calculate cardiac output and state how it changes during exercise?",
        "Can I apply ABO and Rhesus rules to a transfusion and distinguish pulse from blood pressure?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-circul-1",
        "title": "Cardiac Output at Rest and During Exercise",
        "problem": "A student at rest has a heart rate of 72 beats per minute and a stroke volume of 70 cm3 of blood per beat. Calculate the cardiac output per minute and the volume pumped in one hour. During hard exercise the rate rises to 140 beats per minute and the stroke volume to 100 cm3; find the new cardiac output and the multiple of the resting value.",
        "stepByStepSolution": [
          "Step 1 (M1): Cardiac output = heart rate multiplied by stroke volume = 72 x 70 cm3.",
          "Step 2 (M1): 72 x 70 = 5040 cm3 per minute, and 5040 / 1000 = 5.04 dm3 per minute.",
          "Step 3 (M1): Volume in one hour = 5040 cm3 multiplied by 60 minutes = 302400 cm3.",
          "Step 4 (M1): 302400 cm3 divided by 1000 = 302.4 dm3, about 302 dm3.",
          "Step 5 (A1): At rest the heart pumps 5040 cm3 each minute and about 302 dm3 each hour.",
          "Step 6 (M1): During exercise output = 140 x 100 = 14000 cm3 per minute, that is 14 dm3 per minute.",
          "Step 7 (M1): Multiple of the resting value = 14000 / 5040 = 2.78.",
          "Step 8 (A1): Final answer: exercise raises cardiac output to 14 dm3 per minute, roughly 2.8 times the resting output, delivering the oxygen and fuel that active muscle demands."
        ],
        "keyTakeaway": "Cardiac output is a product, not a sum, and it rises during exercise through both a faster rate and a larger stroke volume."
      },
      {
        "id": "ex-bio-circul-2",
        "title": "Counting Safe Donors for a Group A Positive Patient",
        "problem": "A patient is group A with the Rhesus antigen present, that is A positive. Using the rule that donor red cell antigens must not be attacked by antibodies in the recipient plasma, count how many of the eight common ABO and Rhesus types may safely donate to this patient and name them.",
        "stepByStepSolution": [
          "Step 1 (M1): Group A plasma contains anti-B antibody, so any donor red cell carrying the B antigen will be agglutinated.",
          "Step 2 (M1): Safe ABO donors are therefore group A and group O only, that is 2 of the 4 ABO groups.",
          "Step 3 (M1): An Rh-positive recipient can accept both Rh-negative and Rh-positive blood, since the Rhesus antigen causes problems only in an Rh-negative recipient.",
          "Step 4 (M1): Allowed donor types are A positive, A negative, O positive and O negative.",
          "Step 5 (A1): Four of the eight common types are safe donors for this patient.",
          "Step 6 (M1): Working the other way, the patient's own cells carry A antigen and the Rhesus antigen, so only a recipient with neither antibody against A and no anti-D can take this blood.",
          "Step 7 (A1): Final answer: the A positive patient may receive from 4 donor types and may donate only to A positive and AB positive recipients."
        ],
        "keyTakeaway": "Transfusion safety is read from the recipient's plasma antibodies against the donor's cell antigens, with the Rhesus rule flowing only one way."
      }
    ],
    "quiz": {
      "id": "quiz-bio-circul",
      "topicId": "shs1-bio-t3-circulation-blood-heart-vessels",
      "title": "Blood, Heart and Vessels Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-circul-1",
          "quizId": "quiz-bio-circul",
          "questionText": "Which blood component carries oxygen from the lungs to the tissues?",
          "optionA": "Red blood cells",
          "optionB": "Platelets",
          "optionC": "Plasma proteins",
          "optionD": "Dissolved salts in the plasma",
          "correctOption": "A",
          "subConcept": "Blood components",
          "explanation": "Haemoglobin inside red cells combines reversibly with oxygen and carries almost all of it; only a small amount dissolves in plasma. Platelets serve clotting, and plasma proteins maintain osmotic pressure and clotting rather than oxygen carriage.",
          "remediationTip": "Match each component to one headline job: red cell oxygen, white cell defence, platelet clotting, plasma transport."
        },
        {
          "id": "q-bio-circul-2",
          "quizId": "quiz-bio-circul",
          "questionText": "The wall of the left ventricle is thicker than that of the right ventricle because the left ventricle",
          "optionA": "receives blood from the lungs under high pressure",
          "optionB": "contracts twice as often as the right ventricle",
          "optionC": "pumps blood around the entire body against greater resistance",
          "optionD": "stores extra fat used as energy for the heart muscle",
          "correctOption": "C",
          "subConcept": "Heart structure",
          "explanation": "The systemic circuit is long and needs high pressure, so its pump has the thickest wall. Both ventricles contract at the same rate, and the left ventricle receives its blood from the lungs at low pressure through the pulmonary vein.",
          "remediationTip": "Link thickness to distance pumped: lungs close and short, body far and long."
        },
        {
          "id": "q-bio-circul-3",
          "quizId": "quiz-bio-circul",
          "questionText": "A person of blood group AB can receive red cells from any ABO group in an emergency mainly because",
          "optionA": "their red cells carry no antigens at all",
          "optionB": "their platelets destroy any foreign red cell",
          "optionC": "their plasma contains both anti-A and anti-B antibodies",
          "optionD": "their plasma contains neither anti-A nor anti-B antibody",
          "correctOption": "D",
          "subConcept": "ABO grouping",
          "explanation": "Group AB red cells carry both antigens, so the plasma makes neither antibody, and no donated cell is agglutinated. Option A describes group O, and option C would make a patient unable to receive anything.",
          "remediationTip": "Tabulate antigen on cell against antibody in plasma for all four groups and learn it as one block."
        },
        {
          "id": "q-bio-circul-4",
          "quizId": "quiz-bio-circul",
          "questionText": "Which structure prevents blood in a leg vein from falling back when the surrounding muscles squeeze it?",
          "optionA": "Its thick elastic wall",
          "optionB": "Its semilunar valves",
          "optionC": "The narrowness of its lumen",
          "optionD": "The high pressure of the blood inside it",
          "correctOption": "B",
          "subConcept": "Vein structure",
          "explanation": "Semilunar valves open toward the heart and shut to stop backflow, working with muscle squeeze and the low pressure of venous blood. Veins have thin walls and wide lumens, and their pressure is low, so options A, C and D are arterial or wrong features.",
          "remediationTip": "Sketch one valve with the muscle squeezing the vein and arrows showing flow only upward."
        },
        {
          "id": "q-bio-circul-5",
          "quizId": "quiz-bio-circul",
          "questionText": "Which plasma protein is converted into the insoluble threads of a blood clot?",
          "optionA": "Fibrinogen",
          "optionB": "Haemoglobin",
          "optionC": "Insulin",
          "optionD": "Urea",
          "correctOption": "A",
          "subConcept": "Clotting",
          "explanation": "Thrombin, with calcium ions present, converts soluble fibrinogen into insoluble fibrin, and the fibrin threads trap cells to form the clot. Haemoglobin is inside red cells, insulin is a hormone, and urea is a waste product.",
          "remediationTip": "Write the pair fibrinogen dissolves, fibrin insoluble, and keep the two spellings apart."
        }
      ]
    }
  },
  {
    "id": "shs1-bio-t3-classification-of-living-things",
    "subjectId": "biology",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 12,
    "title": "Classification of Living Things and Use of Keys",
    "description": "Why organisms are grouped, how the binomial system names them, the features of the five kingdoms with Ghanaian examples, and the correct use of matching and dichotomous keys in practical work.",
    "keyNotes": "• Classification sorts organisms into groups by shared observable features so every species has one agreed name and place.\n• Binomial nomenclature: genus name with a capital letter followed by a lower-case specific epithet, e.g. Zea mays (maize).\n• Five kingdoms: Monera, Protista, Fungi, Plantae and Animalia, each defined by cell type, covering and nutrition.\n• A dichotomous key offers paired statements (couplets); choose the one matching what you can see and follow the instruction.\n• In WASSCE practicals, record the couplet numbers used and the final identification together.",
    "isFreeTrial": false,
    "isVip": false,
    "detailedNotes": {
      "topicId": "shs1-bio-t3-classification-of-living-things",
      "title": "Classification of Living Things and Use of Keys",
      "overview": "This topic builds the sorting framework that all later biology depends on: the principles behind classification, the binomial naming system, the five kingdoms with organisms a Ghanaian student can actually see, and the practical skill of running a key on an unknown specimen.",
      "introduction": "Before you can study the malaria parasite, the mushroom on a fallen log or the tilapia in your lunch, you need a system that tells biology what they are and how they relate. Classification supplies that system. This topic takes you from the reasons for grouping, through Linnaeus and the five kingdoms, to the practical skill of keying an unknown specimen, which is exactly what Paper 3 asks you to do.",
      "realWorldContext": "Ghanaian farms, markets and water bodies are full of identifiable life: Rhizobium nodules on soybean roots, bracket fungi on cocoa poles, tilapia and catfish in the Volta, water lily on the lagoons and earthworms after the first rains. A student who can key these organisms and name them correctly is doing real biology, not memorising a table, and can advise sensibly on food spoilage, parasites and useful microbes.",
      "objectives": [
        "Explain why biologists classify organisms and why common names are insufficient.",
        "Write scientific names correctly using the rules of binomial nomenclature.",
        "Describe the main features of the five kingdoms and place named Ghanaian organisms in them.",
        "Use a dichotomous key to identify given specimens and record the steps taken."
      ],
      "sections": [
        {
          "title": "Why We Classify and How Species Are Named",
          "content": "Classification groups organisms by shared structural features so that every living thing has an agreed place and an agreed name. Without it, the same plant could carry ten different local names and scientists in different countries would keep repeating one another. The binomial system, established by Carolus Linnaeus and used in every WASSCE paper, gives each species a two-part Latinised name: the genus, beginning with a capital letter, followed by the specific epithet in lower case, the pair italicised when typed or underlined separately when handwritten. Zea mays is maize in Accra, Kumasi and Toronto alike, whatever it is called in Twi, Ewe or Dagbani. Classification also records relationships: organisms placed in the same genus are far more closely related than organisms that share only a kingdom, and the hierarchy of kingdom, division or phylum, class, order, family, genus and species nests life from the broadest group to the most precise one.",
          "bulletPoints": [
            "Grouping reduces the enormous variety of life into units a person can actually identify.",
            "The genus takes the capital letter and the specific epithet is lower case; the two are italicised or underlined separately.",
            "The hierarchy runs kingdom, division or phylum, class, order, family, genus, species.",
            "Common names change with language and region, which is why scientific names are compulsory in examinations."
          ],
          "keyTakeaway": "A correct two-part scientific name communicates identity and relationship at the same time, and it works in every language.",
          "realWorldExample": "A pond-water sample described loosely as tiny swimming organisms becomes precise when a student keys the organisms and records them as Paramecium and Euglena, names any biology teacher in the country will recognise."
        },
        {
          "title": "The Five Kingdoms with Ghanaian Representatives",
          "content": "The syllabus sorts living things into five kingdoms. Monera contains unicellular prokaryotes without a true nucleus, such as bacteria and cyanobacteria; some cause cholera and tuberculosis, while nitrogen-fixing Rhizobium living in the root nodules of soybean and groundnut enriches Ghanaian farm soil. Protista holds mostly unicellular eukaryotes: amoeba and Paramecium from pond water, and the malaria parasite Plasmodium spread by Anopheles mosquitoes. Fungi are eukaryotic absorbers with chitin in their cell walls: mushrooms, the bracket fungus on a fallen cocoa pole, yeast used in bread and akpotto, and the moulds that rot tomatoes in the market. Plantae are multicellular photosynthetic organisms with cellulose cell walls, from water lily in the Volta lagoon to cocoa, maize and oil palm. Animalia are multicellular, have no cell walls and feed heterotrophically, from earthworms in the school garden to tilapia on the table. Viruses are discussed separately because they are acellular particles that carry out no life processes outside a living host.",
          "bulletPoints": [
            "Monera: prokaryotic and unicellular, including Rhizobium and the cholera organism.",
            "Protista: unicellular eukaryotes such as Amoeba, Paramecium and Plasmodium.",
            "Fungi: eukaryotic, absorb digested food, cell walls strengthened with chitin; yeast, moulds and mushrooms.",
            "Plantae: multicellular autotrophs with cellulose walls; Animalia: multicellular heterotrophs without cell walls.",
            "Viruses are acellular and usually treated apart from the five kingdoms."
          ],
          "keyTakeaway": "Kingdom placement is decided by cell type, cell covering and mode of nutrition, not by whether the organism happens to look like a plant or an animal.",
          "realWorldExample": "The white bracket fungus growing on a cut cocoa pole in a Western Region farm is not a plant: it has no chlorophyll, feeds by absorption and belongs in Fungi."
        },
        {
          "title": "Matching Keys and Dichotomous Keys in Practical Work",
          "content": "A matching key shows photographs or drawings beside their names and the learner simply pairs specimen with picture; it suits beginners and museum displays. A dichotomous key is more analytical: it presents a series of paired statements called couplets, each describing observable features, and the user chooses the statement that matches the specimen and follows the instruction printed beside it until a final identification appears. Two discipline rules make keys work. First, judge only visible anatomy, such as leaf shape, body covering, number of legs or presence of gills, never habits, colour opinions or economic value. Second, read both statements of the couplet before choosing, because a careless first choice throws off every later step. WASSCE Paper 3 commonly gives two or three specimens with a short key and expects the candidate to state the couplet numbers used and the resulting identification together. With practice a student can key a grasscutter to a mammal through its hair and external ears even though it swims well, and key a tilapia to a fish through gills and fin rays.",
          "bulletPoints": [
            "Read both statements of a couplet before choosing one of them.",
            "Use only observable anatomical features, not habits or usefulness.",
            "Record the couplet numbers and the final name; examiners award marks for the trail of steps.",
            "A wrong choice at the first couplet invalidates the whole run, so start again rather than guess."
          ],
          "keyTakeaway": "A key is a decision tree: correct identification depends on faithful observation at every couplet, and the working must be shown.",
          "realWorldExample": "A biology class at Winneba collects fallen leaves in the school garden and keys Adansonia digitata (the baobab) and a young mango seedling using a printed dichotomous key."
        }
      ],
      "commonMistakes": [
        "Writing scientific names with both words capitalised or both lower case, or forgetting to italicise or underline them.",
        "Placing fungi in Plantae because mushrooms grow in soil; fungi have no chlorophyll and feed by absorption.",
        "Forcing viruses neatly into one of the five kingdoms when the question is about acellular particles.",
        "Choosing the first half of a couplet without reading the alternative statement, then continuing with a wrong identification."
      ],
      "wassceExamTips": [
        "When asked for the importance of classification, go beyond naming: prediction of characteristics, study of relationships and discovery of new organisms.",
        "For a naming question, capitalise the genus, use lower case for the epithet, and state that the pair is italicised or underlined separately.",
        "In a key question, show the couplet numbers you used; marks are allotted to the steps, not only to the final name.",
        "Attach one correct local example to each kingdom, such as Rhizobium for Monera or mushroom for Fungi."
      ],
      "summaryChecklist": [
        "I can state at least three reasons why organisms are classified.",
        "I can write and justify a correctly formatted binomial name.",
        "I can describe the cell, wall and nutrition features of all five kingdoms.",
        "I can place named Ghanaian organisms into the correct kingdom with a reason.",
        "I can run a dichotomous key on a specimen and record the couplet numbers used."
      ]
    },
    "examples": [
      {
        "id": "ex-biology-classification-of-living-things-1",
        "title": "Total magnification and actual size of a pond organism",
        "problem": "A student views a Paramecium in pond water with a 10x eyepiece and a 40x objective, then draws its image as 20 mm long. What is the total magnification, and what is the actual length of the organism in millimetres and micrometres?",
        "stepByStepSolution": [
          "Total magnification = eyepiece magnification x objective magnification (M1)",
          "= 10 x 40 = 400 (A1)",
          "Actual size = image size divided by total magnification (M1)",
          "= 20 mm / 400 = 0.05 mm (A1)",
          "Convert: 0.05 mm x 1000 = 50 micrometres (A1)"
        ],
        "keyTakeaway": "The drawing is magnified 400 times, so the real organism is only 0.05 mm across, that is 50 micrometres."
      },
      {
        "id": "ex-biology-classification-of-living-things-2",
        "title": "Expressing kingdom counts as percentages",
        "problem": "A class sorts 40 organisms collected from a school garden into three groups: 18 fungi, 12 bacteria and 10 small animals. Give the percentage of the sample in each group and check that the total is correct.",
        "stepByStepSolution": [
          "Fungi: 18 / 40 x 100 (M1) = 45 percent (A1)",
          "Bacteria: 12 / 40 x 100 (M1) = 30 percent (A1)",
          "Small animals: 10 / 40 x 100 (M1) = 25 percent (A1)",
          "Check: 45 + 30 + 25 = 100 percent, and 18 + 12 + 10 = 40 organisms (A1)"
        ],
        "keyTakeaway": "Percentages of a sample must sum to 100; if they do not, recount the organisms before writing the answer."
      }
    ],
    "quiz": {
      "id": "quiz-biology-classification-of-living-things",
      "topicId": "shs1-bio-t3-classification-of-living-things",
      "title": "Classification of Living Things and Use of Keys",
      "timeLimitMinutes": 10,
      "passScorePercentage": 60,
      "questions": [
        {
          "id": "q-biology-classification-of-living-things-1",
          "quizId": "quiz-biology-classification-of-living-things",
          "questionText": "Which statement describes the correct binomial name of maize?",
          "optionA": "the species epithet is written before the genus name",
          "optionB": "both words are written entirely in capitals",
          "optionC": "Zea mays, genus first with a capital, epithet in lower case, the pair italicised",
          "optionD": "the two words are joined as one name, Zeamays",
          "correctOption": "C",
          "explanation": "The genus takes the initial capital, the specific epithet follows in lower case, and the pair is italicised or underlined separately, giving Zea mays.",
          "subConcept": "Binomial nomenclature",
          "remediationTip": "Practise rewriting five familiar organisms as correct binomials before your next test."
        },
        {
          "id": "q-biology-classification-of-living-things-2",
          "quizId": "quiz-biology-classification-of-living-things",
          "questionText": "The scientist credited with establishing the modern binomial system of naming is",
          "optionA": "Carolus Linnaeus",
          "optionB": "Robert Hooke",
          "optionC": "Gregor Mendel",
          "optionD": "Louis Pasteur",
          "correctOption": "A",
          "explanation": "Linnaeus introduced consistent two-part naming in the 1700s. Hooke described cells, Mendel worked on inheritance and Pasteur on fermentation and vaccines.",
          "subConcept": "History of classification",
          "remediationTip": "Link each pioneer to one contribution in a small table you can revise quickly."
        },
        {
          "id": "q-biology-classification-of-living-things-3",
          "quizId": "quiz-biology-classification-of-living-things",
          "questionText": "A unicellular organism with no true nucleus and no membrane-bound organelles, reproducing by binary fission, belongs to the kingdom",
          "optionA": "Protista",
          "optionB": "Monera",
          "optionC": "Fungi",
          "optionD": "Plantae",
          "correctOption": "B",
          "explanation": "Prokaryotic cells without a true nucleus define Monera, which contains bacteria and cyanobacteria. Protista, Fungi, Plantae and Animalia are all eukaryotic.",
          "subConcept": "Five kingdoms",
          "remediationTip": "Review the cell features of each kingdom and give one Ghanaian example per kingdom."
        },
        {
          "id": "q-biology-classification-of-living-things-4",
          "quizId": "quiz-biology-classification-of-living-things",
          "questionText": "A booklet of paired statements about visible features, where the user chooses one statement per step until an organism is named, is",
          "optionA": "a matching table",
          "optionB": "a food web diagram",
          "optionC": "a habitat map",
          "optionD": "a dichotomous key",
          "correctOption": "D",
          "explanation": "Paired contrasting statements arranged as steps form a dichotomous key. A matching table simply pairs pictures with names and contains no decision steps.",
          "subConcept": "Keys",
          "remediationTip": "Run a printed key through three specimens and write down the couplet numbers for each."
        },
        {
          "id": "q-biology-classification-of-living-things-5",
          "quizId": "quiz-biology-classification-of-living-things",
          "questionText": "A mushroom is placed in Fungi rather than Plantae because it",
          "optionA": "absorbs digested food, lacks chlorophyll and has chitin in its cell walls",
          "optionB": "grows in the soil in the same way young maize seedlings do",
          "optionC": "has a root-like mycelium that absorbs water and mineral salts",
          "optionD": "releases spores from beneath its cap when it matures",
          "correctOption": "A",
          "explanation": "Mode of nutrition decides the kingdom: fungi absorb food and have no chlorophyll, while plants photosynthesise. Spores and a soil habitat alone do not place an organism.",
          "subConcept": "Kingdom features",
          "remediationTip": "Rewrite the statement as a comparison: list what a plant cell has that a fungal cell lacks."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t1-digestion-nutrition-absorption",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Nutrition, Digestion and Absorption",
    "description": "Food classes and the balanced diet, how enzymes work with substrate specificity, mechanical and chemical digestion along the alimentary canal, absorption through the villi, assimilation, and the deficiency and over-nutrition problems seen in Ghana.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A balanced diet contains every food class in the right proportion; carbohydrate and fat supply energy, protein builds and repairs, vitamins and mineral salts regulate, and fibre and water keep the gut working.\n• Energy per gram is about 17 kJ for carbohydrate, about 17 kJ for protein and about 37 kJ for fat, so fat is the densest fuel and keeps hunger away longest.\n• Carbohydrate comes from kenkey, banku, rice, yam, plantain and cassava; protein from beans, groundnut soup, fish, egg, meat, milk and kontomire.\n• Digestion is the breakdown of large insoluble food molecules into small soluble ones the body can absorb; no absorption happens until digestion is done.\n• Enzymes are biological catalysts, themselves proteins, that speed reactions without being used up and that lower the energy a reaction needs.\n• Substrate specificity, the lock-and-key idea, means one enzyme acts on only one substrate: amylase only on starch, pepsin only on protein.\n• Enzymes work best at an optimum temperature near body temperature of about 37 degrees Celsius and at an optimum pH; high heat denatures and destroys them.\n• Mechanical digestion by teeth and stomach churning only increases surface area; the chemical change is done by enzymes.\n• The enzyme map: amylase turns starch to maltose, maltase turns maltose to glucose, pepsin and trypsin split protein to amino acids, lipase splits fat to fatty acids and glycerol.\n• The stomach secretes hydrochloric acid (pH about 2) that kills germs and gives pepsin its acid optimum, while mucus shields the stomach wall from self-digestion.\n• The liver makes bile, stored in the gall bladder; bile carries no enzyme but emulsifies fat into tiny droplets so lipase gains a huge working surface.\n• Most absorption occurs in the ileum, whose wall is folded into villi and microvilli that raise the absorptive surface enormously.\n• Glucose and amino acids enter blood capillaries and reach the liver by the hepatic portal vein; fatty acids and glycerol enter the lacteal (lymph) first.\n• Assimilation is the taking-in and building-up of digested food into body cells; unabsorbed residue passes to the large intestine where water and salts are reclaimed and faeces form.\n• Malnutrition has two faces: deficiency, such as kwashiorkor from too little protein, goitre from too little iodine, anaemia from too little iron and night blindness from too little vitamin A, and over-nutrition in the form of obesity, now rising in Accra and Kumasi.",
    "detailedNotes": {
      "overview": "This topic follows food from the plate to the cell. You will classify the food you eat into carbohydrate, protein, fat, vitamins, mineral salts, fibre and water, and judge whether a Ghanaian plate is a balanced one. You will then learn how enzymes make digestion possible, how the alimentary canal carries out both mechanical and chemical digestion, how the products of digestion are absorbed through the villi and assimilated into the body, and what goes wrong when the diet is poor. The lesson closes with the deficiency diseases and the growing problem of over-nutrition, both of which appear on WAEC papers as short structured questions.",
      "introduction": "Study your own meals as data. For each meal write down which food class each item belongs to, then use the energy values of about 17 kJ per gram of carbohydrate or protein and about 37 kJ per gram of fat to estimate the energy you took in. Draw the alimentary canal as you learn each part and label it with a ruler, because naming and tracing are the two skills Paper 2 rewards. When you meet an enzyme, always state its substrate, its product and its optimum pH in one sentence so the three facts stick together.",
      "realWorldContext": "A bowl of waakye is a nutrition lesson in itself: rice and gari give carbohydrate, beans give protein, palm-oil stew carries fat, and kontomire or garden-egg adds vitamins and fibre. Where a family depends on boiled cassava and pepper alone, the diet is short of protein and of the fat-soluble vitamins, and the child weaned onto thin cassava porridge can develop kwashiorkor even while eating enough to feel full. Iodised salt has cut goitre in the north, iron-rich kontomire and fish fight anaemia in pregnancy, and the soft drinks and fried snacks sold outside senior-high schools are behind the obesity now seen in Accra and Kumasi clinics.",
      "objectives": [
        "Classify common Ghanaian foods into the food classes and build a balanced diet from them",
        "Explain the mode of action of enzymes, including substrate specificity and the effect of temperature and pH",
        "Describe mechanical and chemical digestion along the alimentary canal and name the enzyme acting at each stage",
        "Relate the structure of the villus to its function in absorption and describe assimilation",
        "Identify the causes and symptoms of named deficiency diseases and of over-nutrition"
      ],
      "sections": [
        {
          "title": "Food Classes and the Balanced Diet",
          "content": "A balanced diet is one that contains all the food classes in the proportions the body needs, with enough fibre and water, and the first task of a nutrition lesson is to sort everyday Ghanaian plates into those classes. Carbohydrate and fat are the chief energy foods, protein is the chief building food, and vitamins and mineral salts, though needed in tiny amounts, regulate every chemical process. A bowl of waakye already shows the pattern: rice and gari give carbohydrate, beans give protein, palm-oil stew carries fat, and kontomire or garden-egg adds vitamins and fibre. What a single staple such as boiled cassava and pepper cannot do is supply enough protein and the fat-soluble vitamins, which is exactly why a child weaned onto thin cassava porridge may grow poorly even with a full stomach. Energy is measured in kilojoules: roughly seventeen per gram of carbohydrate or protein but thirty-seven per gram of fat, so fat is the densest fuel and the reason an oily fried snack satisfies hunger for hours.",
          "bulletPoints": [
            "Carbohydrate and fat are energy foods; protein is the building food; vitamins and mineral salts regulate body processes.",
            "About 17 kJ per gram from carbohydrate or protein but about 37 kJ per gram from fat.",
            "Waakye shows a balanced plate: rice, beans, palm-oil stew, kontomire and garden-egg.",
            "A single staple such as cassava alone lacks protein and the fat-soluble vitamins.",
            "Fibre (roughage) and water add no energy but keep the gut moving and prevent constipation."
          ],
          "keyTakeaway": "A balanced diet must contain every food class in the right proportion; no single Ghanaian staple provides all of them.",
          "realWorldExample": "A family eating banku with groundnut soup, fish and kontomire takes in carbohydrate, protein, fat and vitamins in one meal, whereas a child fed only thin cassava porridge with no fish or groundnut is at risk of kwashiorkor."
        },
        {
          "title": "Enzymes: How Digestion Is Done",
          "content": "Digestion would be far too slow to sustain life without enzymes, the biological catalysts that are themselves proteins and that lower the energy each reaction needs. Every enzyme has an active site whose shape fits only one kind of molecule, its substrate, which is the lock-and-key idea behind substrate specificity: amylase can act only on starch and never on protein, and pepsin only on protein. Enzymes are also sensitive to the conditions around them. Each works fastest at an optimum temperature, close to body temperature of about thirty-seven degrees Celsius in humans; at high temperature the enzyme denatures, its shape is ruined and it stops working, while at low temperature it is only slowed. Acidity matters just as sharply: salivary amylase works in the near-neutral mouth, pepsin only in the strongly acid stomach near pH two, and the pancreatic and intestinal enzymes in the alkaline small intestine. Because enzymes are not used up, a small amount keeps working, but damage to the conditions destroys the catalyst rather than the food.",
          "bulletPoints": [
            "Enzymes are protein catalysts that speed reactions without being used up.",
            "One active site fits one substrate, the lock-and-key idea of substrate specificity.",
            "Pepsin works near pH 2 in the stomach; intestinal enzymes work in alkaline conditions.",
            "Enzymes have an optimum near body temperature and are denatured by high heat.",
            "State enzyme, substrate, product and optimum pH together; that is how the mark is worded."
          ],
          "keyTakeaway": "Name the enzyme, its substrate, its product and its optimum conditions as one linked set, because examiners mark every link.",
          "realWorldExample": "Market cooks in Kumasi pound unripe pawpaw into stewing meat because raw green papaya contains the enzyme papain that tenderises protein; papain works best when the meat is gently warm and is destroyed by prolonged high heat."
        },
        {
          "title": "The Alimentary Canal: Mechanical and Chemical Digestion",
          "content": "The journey of food begins in the buccal cavity, where the teeth carry out mechanical digestion and the salivary glands release saliva containing the enzyme salivary amylase. Chewing grinds the bolus and mixes it with saliva, and although chewing changes no molecule chemically, it multiplies the surface area the enzymes can attack, which is why a well-chewed meal digests faster than one swallowed in lumps. The tongue rolls the bolus to the back of the throat and swallowing drives it down the oesophagus by peristalsis, waves of muscular contraction that push food onward whether a person stands or lies down. In the stomach a ring of muscle closes while the thick muscular wall churns the food into an acid paste called chyme; gastric juice here carries hydrochloric acid, which kills most germs and gives pepsin its acid optimum, and mucus, which protects the stomach lining from being digested by its own enzymes. Part-digested chyme is then released in small spurts into the duodenum, where bile from the liver and gall bladder emulsifies fat and pancreatic juice supplies amylase, trypsin and lipase to complete most of the chemical work.",
          "bulletPoints": [
            "Teeth and stomach churning are mechanical digestion; they raise surface area only.",
            "Salivary amylase starts the digestion of starch in the mouth.",
            "Peristalsis moves food down the oesophagus without depending on gravity.",
            "The stomach adds hydrochloric acid (pH about 2), the enzyme pepsin and protective mucus.",
            "Bile emulsifies fat; pancreatic amylase, trypsin and lipase finish digestion in the duodenum."
          ],
          "keyTakeaway": "Mechanical digestion prepares the food and chemical digestion changes it; the gut can only absorb what the enzymes have already broken down.",
          "realWorldExample": "Fufu pounded from cassava and plantain is chewed thoroughly with soup, and the fine bolus this makes offers salivary and pancreatic enzymes far more surface to work on than a large lump swallowed whole."
        },
        {
          "title": "Absorption, Assimilation and Egestion",
          "content": "By the time digested food reaches the ileum it has been reduced to glucose, amino acids, fatty acids and glycerol, and the wall there is built for one job, absorption. Its lining is thrown into millions of finger-like villi, and each cell on a villus sends out even finer microvilli, so a structure only a few centimetres across presents an enormous surface to the food inside it. Each villus has a network of blood capillaries and a central lacteal; glucose and amino acids pass into the blood and are carried by the hepatic portal vein to the liver, where excess glucose is stored as glycogen, while the products of fat digestion recombine and enter the lymphatic lacteal first before reaching the bloodstream. Once inside the body cells these small molecules are used in respiration or rebuilt into the body's own proteins and fats, and this taking-in and building-up is assimilation. Material never absorbed passes to the large intestine, where water and dissolved salts are reclaimed, the residue compacts into faeces and is stored in the rectum until removed at the anus in egestion; egestion is not excretion, because faeces contain little that the body's own cells produced.",
          "bulletPoints": [
            "Villi and microvilli give the ileum a very large absorptive surface.",
            "Glucose and amino acids enter blood and go to the liver by the hepatic portal vein.",
            "Fatty acids and glycerol enter the lacteal, part of the lymph system, first.",
            "Assimilation builds digested food into body cells; egestion removes undigested matter.",
            "The large intestine reclaims water and salts, which is why faeces are semi-solid."
          ],
          "keyTakeaway": "Absorption is uptake into blood or lymph, assimilation is use by the cells, and egestion is removal of undigested waste: three verbs and three separate marks.",
          "realWorldExample": "After a starchy meal of kenkey, glucose from digested starch is absorbed by the villi and carried to the liver, which stores the excess as glycogen and releases it when a student has gone hungry through a long school morning."
        }
      ],
      "commonMistakes": [
        "Confusing mechanical with chemical digestion; chewing is physical breakdown that only increases surface area, while chemical digestion uses enzymes to change the molecules.",
        "Saying bile digests fat; bile has no enzyme and only emulsifies fat into droplets, and it is lipase that chemically breaks the fat down.",
        "Naming the end-product of starch as glucose made directly by amylase; amylase yields maltose, and maltase then splits maltose into glucose.",
        "Calling the removal of faeces excretion; egestion removes undigested food, whereas excretion removes metabolic wastes such as urea made by the body.",
        "Writing villus when many are meant; the singular is villus and the plural is villi, and technical names must be spelt correctly to score."
      ],
      "wassceExamTips": [
        "In Paper 1 read carefully whether the question asks for the enzyme, the substrate or the end-product; the phrase amylase acts on starch to form maltose answers three different questions.",
        "In Paper 2 draw and label the alimentary canal or a villus in pencil with a ruler, one straight label line to one structure; misspelt names such as ileum and duodenum are often rejected.",
        "When explaining an enzyme experiment, state the factor changed (temperature or pH), the factor kept constant and the observed result; a method with no conclusion earns almost nothing.",
        "Quote the optimum conditions with their units, pH about 2 for pepsin and about 37 degrees Celsius for a body enzyme, and never claim fat is digested in the stomach.",
        "In Paper 3 the iodine test for starch and the Biuret test for protein are common; describe the colour change exactly, iodine turning from brown to blue-black in the presence of starch."
      ],
      "summaryChecklist": [
        "Can I classify a Ghanaian meal into the food classes and estimate its energy in kilojoules?",
        "Can I explain substrate specificity and the effect of temperature and pH on an enzyme?",
        "Can I name the enzyme, substrate, product and optimum pH at each region of the alimentary canal?",
        "Can I relate the structure of a villus to absorption and distinguish absorption from assimilation and egestion?",
        "Can I name four deficiency diseases with their deficient nutrient and one symptom each?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-nutrition-1",
        "title": "Calculating the Energy Value of a Ghanaian Meal",
        "problem": "A plate of food contains 60 g of carbohydrate, 30 g of protein and 20 g of fat. Taking 1 g of carbohydrate to give 17 kJ, 1 g of protein 17 kJ and 1 g of fat 37 kJ, calculate the total energy in the meal and the percentage this is of a 10000 kJ daily requirement.",
        "stepByStepSolution": [
          "Step 1 (M1): Energy from carbohydrate = 60 g x 17 kJ/g = 1020 kJ.",
          "Step 2 (M1): Energy from protein = 30 g x 17 kJ/g = 510 kJ.",
          "Step 3 (M1): Energy from fat = 20 g x 37 kJ/g = 740 kJ.",
          "Step 4 (M1): Total energy = 1020 + 510 + 740 = 2270 kJ.",
          "Step 5 (A1): As a percentage of 10000 kJ = (2270 / 10000) x 100 = 22.7% of the day's energy need.",
          "Step 6 (A1): Final answer: the meal supplies 2270 kJ, about 22.7% of requirement, and the 20 g of fat alone contributes 740 kJ, the largest share per gram."
        ],
        "keyTakeaway": "Fat carries more than double the energy per gram of carbohydrate or protein, so a small amount of oil shifts the energy value of a meal greatly."
      },
      {
        "id": "ex-bio-nutrition-2",
        "title": "How Chewing Raises the Surface Area for Enzymes",
        "problem": "A lump of food is modelled as a cube of side 2 cm. After chewing it is broken into eight cubes each of side 1 cm. Find the surface-area-to-volume ratio before and after chewing and explain why enzymes act faster afterwards.",
        "stepByStepSolution": [
          "Step 1 (M1): Original cube surface area = 6 x (2 x 2) = 24 cm^2; its volume = 2 x 2 x 2 = 8 cm^3.",
          "Step 2 (M1): Original surface-area-to-volume ratio = 24 / 8 = 3 cm^2 per cm^3.",
          "Step 3 (M1): One small cube has surface area 6 x (1 x 1) = 6 cm^2, so eight small cubes give 8 x 6 = 48 cm^2.",
          "Step 4 (M1): Total volume is unchanged at 8 cm^3 because the amount of food is the same.",
          "Step 5 (A1): New ratio = 48 / 8 = 6 cm^2 per cm^3, exactly double the original value.",
          "Step 6 (A1): Final answer: chewing doubles the exposed surface (from 3 to 6 cm^2 per cm^3), so the enzymes have twice the area to attack and the same meal digests faster."
        ],
        "keyTakeaway": "Mechanical digestion changes only surface area, not chemistry, yet a doubled surface lets the enzymes work about twice as fast."
      }
    ],
    "quiz": {
      "id": "quiz-bio-digestion-nutrition",
      "topicId": "shs2-bio-t1-digestion-nutrition-absorption",
      "title": "Nutrition and Digestion Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-digestion-1",
          "quizId": "quiz-bio-digestion-nutrition",
          "questionText": "Which enzyme begins the digestion of starch in the mouth?",
          "optionA": "Lipase",
          "optionB": "Pepsin",
          "optionC": "Salivary amylase",
          "optionD": "Rennin",
          "correctOption": "C",
          "subConcept": "Enzymes of digestion",
          "explanation": "Salivary amylase (ptyalin) in saliva starts starch breakdown into maltose in the mouth. Lipase acts on fats, pepsin on proteins in the stomach, and rennin curdles milk protein, so none of them begins starch digestion in the mouth.",
          "remediationTip": "Make a table of each enzyme with its site, substrate and product and learn it column by column."
        },
        {
          "id": "q-bio-digestion-2",
          "quizId": "quiz-bio-digestion-nutrition",
          "questionText": "What is the role of bile in the digestion of fat?",
          "optionA": "It emulsifies fat into tiny droplets, raising the surface for lipase.",
          "optionB": "It contains the enzyme that chemically digests fat.",
          "optionC": "It converts fat directly into glucose.",
          "optionD": "It stores fat inside the gall bladder.",
          "correctOption": "A",
          "subConcept": "Bile and the liver",
          "explanation": "Bile has no enzyme but emulsifies fat into fine droplets, so lipase gains a large working surface. The strongest distractor, option B, fails because the enzyme that digests fat is lipase from the pancreas, not bile.",
          "remediationTip": "Repeat the phrase: bile emulsifies, lipase digests."
        },
        {
          "id": "q-bio-digestion-3",
          "quizId": "quiz-bio-digestion-nutrition",
          "questionText": "The finger-like folds in the wall of the small intestine that absorb digested food are the",
          "optionA": "nephrons",
          "optionB": "alveoli",
          "optionC": "gonads",
          "optionD": "villi",
          "correctOption": "D",
          "subConcept": "Absorption",
          "explanation": "Villi (singular villus) line the ileum and absorb digested food. Nephrons are kidney units, alveoli are air sacs in the lungs, and gonads are sex organs; none of them is the absorptive fold of the gut.",
          "remediationTip": "Sort the three finger-like or sac structures by organ: villus gut, alveolus lung, nephron kidney."
        },
        {
          "id": "q-bio-digestion-4",
          "quizId": "quiz-bio-digestion-nutrition",
          "questionText": "Kwashiorkor in a young child is mainly the result of a shortage of",
          "optionA": "carbohydrate in the diet",
          "optionB": "protein in the diet",
          "optionC": "water in the diet",
          "optionD": "vitamin C in the diet",
          "correctOption": "B",
          "subConcept": "Deficiency diseases",
          "explanation": "Kwashiorkor is protein deficiency, common in a child weaned onto low-protein cassava porridge, and shows as a swollen abdomen and wasting. A shortage of energy overall causes marasmus, and vitamin C shortage causes scurvy, not kwashiorkor.",
          "remediationTip": "Anchor the pairs: kwashiorkor, protein; marasmus, energy; and learn the deficiency diseases two at a time."
        },
        {
          "id": "q-bio-digestion-5",
          "quizId": "quiz-bio-digestion-nutrition",
          "questionText": "Which substance is the end-product of protein digestion that is absorbed into the blood?",
          "optionA": "Amino acids",
          "optionB": "Maltose",
          "optionC": "Glycerol",
          "optionD": "Fatty acids",
          "correctOption": "A",
          "subConcept": "Products of digestion",
          "explanation": "Proteins are broken down by pepsin and trypsin into amino acids, which are absorbed. Maltose is a product of starch digestion, while glycerol and fatty acids are products of fat digestion.",
          "remediationTip": "Match each nutrient to its end-product: starch to glucose, protein to amino acids, fat to fatty acids and glycerol."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t1-reproduction-in-plants",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Reproduction in Flowering Plants",
    "description": "Sexual versus asexual reproduction, the parts of a flower and the structure of pollen and ovule, self and cross pollination and their agents, fertilisation and double fertilisation, seed and fruit formation, seed dispersal, germination, and vegetative propagation in cocoa and cassava.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Reproduction makes new individuals of the same kind; sexual reproduction uses male and female gametes, while asexual (vegetative) reproduction uses any vegetative part with no fusion of gametes.\n• Vegetative propagation is common in Ghanaian crops: cassava grows from a woody stem cutting (stake), plantain from suckers, cocoyam from corms and sweet potato from vine cuttings; the offspring are clones of the parent.\n• A bisexual flower has four whorls: sepals (calyx) protect the bud, petals (corolla) attract pollinators, the stamen (anther and filament) makes pollen, and the carpel (stigma, style, ovary with ovules) carries the egg cells.\n• A pollen grain, made in the anther, has a tough outer wall and inside carries a tube nucleus and a generative nucleus; the generative nucleus later forms the two male nuclei.\n• Inside the ovule is the embryo sac with the egg cell and, at the centre, two polar nuclei; the ovule joins the ovary wall by a funicle and has a small opening, the micropyle.\n• Pollination is the transfer of pollen from anther to stigma: self-pollination when it lands on the same flower or plant, cross-pollination when it moves between different plants of the same species.\n• Insect-pollinated flowers have large colourful scented petals with nectar and sticky pollen; wind-pollinated flowers have small dull petals, huge amounts of light smooth pollen and feathery stigmas.\n• Cross-pollination is usually favoured because mixing two parents gives variation; self-pollination is safer where pollinators are scarce but continued inbreeding weakens the stock.\n• After landing, a pollen grain grows a pollen tube down the style, through the micropyle and into the embryo sac; this tube is the road along which fertilisation takes place.\n• Double fertilisation is the signature of flowering plants: one male nucleus fuses with the egg to form the diploid zygote (2n), and the other fuses with the two polar nuclei to form the triploid endosperm nucleus (3n).\n• After fertilisation the ovule ripens into a seed (fertilised egg to embryo, integuments to seed coat), the ovary wall becomes the fruit, and petals, stamens and style usually wither and fall.\n• A fruit may be fleshy (mango, citrus, tomato) or dry; it protects the seeds and carries them away from the parent plant.\n• Seed dispersal is by wind (light wings or hairs such as silk cotton), water (coconut along the coast), animals (hooks or tasty pulp) or by explosive splitting of pods such as cowpea.\n• Germination needs water, oxygen, a suitable temperature and a living embryo; light is not required, because the seed grows at first on its stored food.\n• Epigeal germination, seen in bean and groundnut, lifts the cotyledons above the soil, while hypogeal germination, seen in maize and rice, leaves the cotyledon below ground.",
    "detailedNotes": {
      "overview": "Flowering plants reproduce sexually inside the flower and asexually through their vegetative parts, and this topic covers both. You will name the whorls of a flower and the structure of the pollen grain and ovule, then describe pollination by its different agents and the crucial difference between pollination and fertilisation. The heart of the unit is double fertilisation, unique to flowering plants, which produces a diploid embryo and a triploid endosperm. You will finish by tracing how the ovule becomes a seed and the ovary a fruit, how seeds are dispersed, how a seed germinates, and why Ghanaian farmers propagate cassava and cocoa vegetatively.",
      "introduction": "Work from a real flower whenever you can. Tease apart a hibiscus or a garden flower and identify sepal, petal, stamen and carpel, then mount them in order on your notebook page. Draw a labelled longitudinal section of a flower and a labelled ovule until the parts are automatic, because Paper 2 rewards correct labelling more than fluent prose. Keep the words pollination and fertilisation strictly apart; most marks lost in this topic come from using one for the other.",
      "realWorldContext": "On a shaded cocoa farm in the Western or Ashanti Region the cocoa tree (Theobroma cacao) is pollinated not by bees but by tiny midges that breed in the damp leaf litter, which is why a clean, well-shaded farm sets more pods. Ghanaian farmers plant cassava from woody stem stakes and plantain from suckers, so an entire field can be clones of one good mother plant. Coconuts that fall into the sea at Axim or Tema drift to new shores still able to germinate, and the bean or groundnut seed you sow sends its cotyledons above ground while maize leaves its below.",
      "objectives": [
        "Distinguish sexual from asexual (vegetative) reproduction and give Ghanaian crop examples of each",
        "Name and label the parts of a flower and describe the structure of a pollen grain and an ovule",
        "Compare self and cross pollination and relate flower features to wind or insect agents",
        "Describe fertilisation and double fertilisation and state the ploidy of the zygote and endosperm",
        "Explain seed and fruit formation, methods of seed dispersal and the conditions for germination"
      ],
      "sections": [
        {
          "title": "Sexual and Asexual Reproduction in Plants",
          "content": "A plant can produce new individuals in two ways. Sexual reproduction brings together a male and a female gamete inside the flower, and the offspring inherits a mix from two parents, so it varies. Asexual or vegetative reproduction uses a vegetative part, a stem, root, leaf or bud, and produces a genetic copy, a clone, of the single parent with no fusion of gametes at all. Vegetative propagation is of great economic use in Ghana. A cassava grower cuts a mature stem into short stakes and plants them, and each stake shoots roots and a new bush that is identical to the parent, so a farmer can copy a high-yielding variety quickly and cheaply. Plantain is raised from suckers, cocoyam from its corms, and sweet potato from vine or root cuttings for the same reason. Nursery workers also graft a selected cocoa bud onto a hardy rootstock to combine good cropping with strong roots. The advantage of the sexual route, however, is variation: seedlings from cocoa pods differ from one another, giving the grower stock that may better resist disease or drought.",
          "bulletPoints": [
            "Sexual reproduction fuses gametes and produces variation; asexual reproduction makes clones with none.",
            "Cassava is grown from stem stakes, plantain from suckers, cocoyam from corms, sweet potato from cuttings.",
            "Vegetative propagation preserves the exact qualities of a good parent plant.",
            "Grafting joins a chosen cocoa bud to a hardy rootstock.",
            "Seed from the sexual route varies, which is useful when a crop must adapt to new pests."
          ],
          "keyTakeaway": "Vegetative propagation copies a parent exactly and fast; sexual reproduction mixes parents and yields variation.",
          "realWorldExample": "A cassava farmer near Ejura stores pencil-length stem cuttings upright in shade over the dry season and plants them with the first rains, so the whole new field is an identical copy of the variety that sold best."
        },
        {
          "title": "The Flower and Its Sex Cells",
          "content": "The flower is the reproductive shoot of a plant, and a typical bisexual flower has four whorls arranged on a receptacle. The outer sepals form the calyx and protect the bud; inside them the brightly coloured petals form the corolla that advertises the flower to pollinators. The male whorl is the stamen, made of a filament carrying an anther, and it is inside the anther that pollen grains are formed. The female organ is the carpel or pistil, which has a sticky stigma at the top to catch pollen, a style down which the pollen tube grows, and a swollen ovary at the base holding one or more ovules. Each pollen grain has a tough patterned outer wall that shields it, and within it sit two nuclei, a tube nucleus that steers the growing tube and a generative nucleus that divides to form the two male nuclei that will do the fertilising. Inside the ovule, connected to the ovary wall by a funicle and pierced by a tiny pore, the micropyle, lies the embryo sac with the egg cell and, near its centre, two polar nuclei. Understanding these cells first makes fertilisation easy, because fertilisation is precisely the meeting of the male nuclei with the egg and the polar nuclei.",
          "bulletPoints": [
            "Four whorls: sepals, petals, stamens (male) and carpels (female).",
            "Stamen = filament plus anther; the anther produces the pollen grains.",
            "Carpel = stigma, style and ovary; the ovary contains the ovules.",
            "A pollen grain carries a tube nucleus and a generative nucleus.",
            "The embryo sac holds the egg cell and two polar nuclei, reached through the micropyle."
          ],
          "keyTakeaway": "Trace the cell nuclei from anther and ovule, because double fertilisation is nothing more than where those nuclei end up.",
          "realWorldExample": "A biology class at a senior high school near Kumasi cuts a hibiscus flower lengthwise and counts the ovules in the ovary, then predicts the number of seeds a mature fruit could hold."
        },
        {
          "title": "Pollination, Fertilisation and Double Fertilisation",
          "content": "Pollination is the transfer of pollen from the anther to the stigma, and it is self-pollination when the pollen reaches the stigma of the same flower or another flower on the same plant, and cross-pollination when it travels to a different plant of the same species. Because it is risky to rely on a single pollen source, many flowers avoid self-pollination by maturing their anthers and stigmas at different times or by placing them so that an insect must walk between flowers. The agents that carry pollen shape the flower: an insect-pollinated flower is gaudy, scented and rich in nectar, with sticky or spiny pollen that clings to a visiting body, whereas a wind-pollinated flower, such as maize, has small dull petals, no scent, enormous quantities of light smooth pollen and a feathery, exposed stigma to snag it. Pollination is only the landing; fertilisation follows when a pollen grain grows a tube down the style, through the micropyle and into the embryo sac. Inside, the generative nucleus has divided into two male nuclei, and both are used. One fuses with the egg to form the diploid zygote that will become the embryo, while the other fuses with the two polar nuclei to form a triple-nucleus, triploid cell that develops into the endosperm which feeds the young embryo. This is double fertilisation, and it is the reason every mature seed carries its own stored food.",
          "bulletPoints": [
            "Pollination is transfer of pollen to stigma; fertilisation is fusion of nuclei inside the ovule.",
            "Self-pollination is within one flower or plant; cross-pollination is between plants.",
            "Insect flowers are showy, scented and have sticky pollen; wind flowers have light pollen and feathery stigmas.",
            "The pollen tube grows down the style through the micropyle to reach the embryo sac.",
            "Double fertilisation gives a diploid zygote (2n) and a triploid endosperm (3n)."
          ],
          "keyTakeaway": "Keep pollination and fertilisation as two named events, and remember that flowering plants fuse nuclei twice, not once.",
          "realWorldExample": "Maize grown on a farm at Ejura sheds clouds of light pollen onto the silky feathery stigmas of the same and neighbouring cobs, an example of wind pollination that needs no petals at all."
        },
        {
          "title": "Seed, Fruit, Dispersal and Germination",
          "content": "After double fertilisation the flower reorganises itself around the new seed. The fertilised egg becomes the embryo, the whole ovule hardens into a seed, and the integuments of the ovule become the protective seed coat, while the endosperm, or in some plants the cotyledons, stores food for the young plant. Meanwhile the ovary wall thickens and ripens into the fruit, so a mango stone is a hardened seed and the fleshy part is the ripened ovary wall. The petals, stamens and style usually wither and drop. A fruit protects the seeds and, by the way it is built, scatters them. Light seeds with hairs or wings, like silk cotton, ride the wind; the coconut that falls into the sea at the coast floats to a new shore; hooks catch on animals and tasty pulps are eaten and the seeds voided elsewhere; and some pods, such as cowpea, split with a jerk and fling their seeds away from the parent. Dispersal matters because seedlings crowded under the parent must compete for light, water and nutrients and are more easily wiped out by one soil disease. When a dispersed seed later finds water, oxygen, a suitable temperature and a living embryo, it germinates; in the bean and groundnut the cotyledons are pulled above the soil (epigeal), while in maize and rice they stay below ground (hypogeal), and at first the seedling runs on stored food until it can photosynthesise.",
          "bulletPoints": [
            "Ovule becomes the seed; fertilised egg becomes the embryo; integuments become the seed coat.",
            "Ovary wall becomes the fruit, so the fruit is ripened ovary wall.",
            "Dispersal agents are wind, water, animals and explosive splitting of pods.",
            "Germination needs water, oxygen, suitable temperature and a viable embryo, not light.",
            "Bean and groundnut germinate epigeally; maize and rice germinate hypogeally."
          ],
          "keyTakeaway": "A fruit is a ripened ovary and a seed is a ripened ovule; dispersal and germination then carry the species away from the parent.",
          "realWorldExample": "Coconuts harvested along the coast at Axim are graded for oil or desiccated export, but a nut washed onto a distant beach can germinate there, which is the natural water dispersal the coast depends on."
        }
      ],
      "commonMistakes": [
        "Saying fertilisation occurs at the stigma; the stigma only catches pollen, and fertilisation happens inside the ovule once the pollen tube has grown down the style.",
        "Claiming the ovary becomes the seed; the ovule becomes the seed and the ovary wall becomes the fruit.",
        "Using pollination and fertilisation as one word for the other; they are two separate events, transfer of pollen and fusion of gamete nuclei.",
        "Calling vegetative propagation sexual because it happens in a plant; it is asexual, as no gametes fuse and the offspring is a clone.",
        "Stating the endosperm is diploid; it is triploid (3n), formed when one male nucleus fuses with two polar nuclei."
      ],
      "wassceExamTips": [
        "Paper 1 tests the pollination versus fertilisation distinction directly, so memorise both definitions word for word and answer exactly the term asked.",
        "In Paper 2 label a longitudinal section of a flower with a ruler, naming sepal, petal, stamen (anther, filament) and carpel (stigma, style, ovary, ovule); stray or double label lines lose marks.",
        "When asked to contrast wind and insect pollination, give matched pairs, such as quantity and texture of pollen and shape of stigma, rather than a loose list of features.",
        "State double fertilisation as two fusions forming a diploid zygote and a triploid endosperm; naming only one fusion forfeits a mark.",
        "In Paper 3 you may examine a real flower, fruit or germinating seed; use the correct terms and count the cotyledons to say whether the seedling is a dicot or a monocot."
      ],
      "summaryChecklist": [
        "Can I distinguish sexual from vegetative reproduction and give two Ghanaian crop examples of each?",
        "Can I name the four whorls of a flower and the parts of the stamen and carpel?",
        "Can I describe double fertilisation and give the ploidy of the zygote and the endosperm?",
        "Can I state what becomes the seed coat, the embryo, the seed and the fruit after fertilisation?",
        "Can I list three agents of seed dispersal and the conditions needed for germination?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-plants-1",
        "title": "Percentage Germination and Seedling Yield",
        "problem": "A research station tests a lot of maize seeds and finds that 175 of 250 seeds germinate. Calculate the percentage germination and predict how many seedlings a farmer would expect from sowing 4000 seeds of the same lot.",
        "stepByStepSolution": [
          "Step 1 (M1): Percentage germination = (number germinated / number tested) x 100 = (175 / 250) x 100.",
          "Step 2 (M1): 175 / 250 = 0.70.",
          "Step 3 (A1): Percentage germination = 0.70 x 100 = 70%.",
          "Step 4 (M1): Expected seedlings from 4000 seeds = 4000 x 70 / 100.",
          "Step 5 (A1): 4000 x 0.70 = 2800 seedlings.",
          "Step 6 (A1): Final answer: the lot germinates at 70%, and sowing 4000 seeds gives about 2800 seedlings, so the farmer must sow extra or improve conditions to reach a target stand."
        ],
        "keyTakeaway": "A germination percentage turns directly into an expected number of seedlings once it is multiplied by the seeds sown."
      },
      {
        "id": "ex-bio-plants-2",
        "title": "Counting Pollen Grains and Embryo Sacs",
        "problem": "In the anther each microspore mother cell completes meiosis to form four microspores, each of which becomes a pollen grain. In the ovule each megaspore mother cell completes meiosis but only one of the four megaspores survives to form one embryo sac. If a flower has 25 microspore mother cells and 25 megaspore mother cells all completing meiosis, how many pollen grains and how many embryo sacs are produced?",
        "stepByStepSolution": [
          "Step 1 (M1): Each microspore mother cell yields 4 microspores, so it yields 4 pollen grains.",
          "Step 2 (M1): Number of pollen grains = 25 x 4.",
          "Step 3 (A1): Pollen grains = 100.",
          "Step 4 (M1): Each megaspore mother cell forms 4 megaspores but 3 degenerate, so only 1 functional megaspore remains, and each becomes 1 embryo sac.",
          "Step 5 (M1): Number of embryo sacs = 25 x 1.",
          "Step 6 (A1): Final answer: 100 pollen grains and 25 embryo sacs; pollen greatly outnumbers embryo sacs, which suits the need for many grains to land for a few to fertilise."
        ],
        "keyTakeaway": "Meiosis makes four pollen grains from each microspore mother cell but only one embryo sac from each megaspore mother cell, so pollen is produced in far greater numbers."
      }
    ],
    "quiz": {
      "id": "quiz-bio-reproduction-plants",
      "topicId": "shs2-bio-t1-reproduction-in-plants",
      "title": "Reproduction in Flowering Plants Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-plants-1",
          "quizId": "quiz-bio-reproduction-plants",
          "questionText": "The endosperm of a flowering plant is triploid (3n) because it is formed when",
          "optionA": "two gametes of the same parent fuse",
          "optionB": "one male nucleus fuses with the two polar nuclei",
          "optionC": "the egg cell divides after fertilisation",
          "optionD": "the ovary wall thickens around the seed",
          "correctOption": "B",
          "subConcept": "Double fertilisation",
          "explanation": "In double fertilisation one male nucleus joins the egg to give the diploid zygote, and the other joins the two polar nuclei to give a triploid (3n) endosperm. The other options describe none of the nuclei actually involved.",
          "remediationTip": "Sketch the embryo sac and write 2n beside the zygote and 3n beside the endosperm until it is reflex."
        },
        {
          "id": "q-bio-plants-2",
          "quizId": "quiz-bio-reproduction-plants",
          "questionText": "The fruit of a flowering plant develops from the",
          "optionA": "ovary wall",
          "optionB": "ovule",
          "optionC": "stigma",
          "optionD": "filament",
          "correctOption": "A",
          "subConcept": "Seed and fruit formation",
          "explanation": "The ovary wall ripens into the fruit, which is why a fruit encloses the seeds. The ovule becomes the seed, the stigma only catches pollen, and the filament holds the anther.",
          "remediationTip": "Learn the one-line rule: ovary becomes fruit, ovule becomes seed."
        },
        {
          "id": "q-bio-plants-3",
          "quizId": "quiz-bio-reproduction-plants",
          "questionText": "On a Ghanaian farm, cassava is most commonly propagated by",
          "optionA": "seeds sown in a nursery",
          "optionB": "spores released from the leaf",
          "optionC": "stem cuttings (stakes)",
          "optionD": "grafting onto maize",
          "correctOption": "C",
          "subConcept": "Vegetative propagation",
          "explanation": "Cassava is grown vegetatively from woody stem cuttings called stakes, each of which roots and shoots a clone of the parent. Cassava is rarely grown from seed commercially, spores belong to non-flowering plants, and grafting onto maize is not possible.",
          "remediationTip": "Match each crop to its vegetative part: cassava stem, sweet potato root, banana sucker."
        },
        {
          "id": "q-bio-plants-4",
          "quizId": "quiz-bio-reproduction-plants",
          "questionText": "Which feature best suits a flower for wind pollination?",
          "optionA": "Large, brightly coloured petals",
          "optionB": "A strong scent and nectar",
          "optionC": "Sticky, spiny pollen grains",
          "optionD": "Exposed feathery stigmas and light, smooth pollen",
          "correctOption": "D",
          "subConcept": "Pollination agents",
          "explanation": "Wind-pollinated flowers need light smooth pollen that the air can carry and feathery exposed stigmas that snag it. Colour, scent, nectar and sticky pollen are all insect-pollination features.",
          "remediationTip": "List the four insect-flower features, then say that a wind flower drops all four and adds the two in the key."
        },
        {
          "id": "q-bio-plants-5",
          "quizId": "quiz-bio-reproduction-plants",
          "questionText": "Which of the following is NOT a condition required for a seed to germinate?",
          "optionA": "Water",
          "optionB": "Bright sunlight",
          "optionC": "Oxygen",
          "optionD": "A suitable temperature",
          "correctOption": "B",
          "subConcept": "Conditions for germination",
          "explanation": "A seed germinates on its stored food and does not need light at the start; it needs water, oxygen, a suitable temperature and a viable embryo. This surprises many students, who wrongly assume every plant stage needs light.",
          "remediationTip": "Remember the four needed conditions and that light is the one usually tested as unnecessary."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t1-genetics-ii-dihybrid-sex-linkage",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 7,
    "title": "Genetics II: Dihybrid Crosses, Sex Linkage and Blood Groups",
    "description": "How two gene pairs segregate in dihybrid crosses, why some characters ride on the sex chromosomes, and how ABO blood groups and the sickle-cell trait are inherited, with pedigree reading for WASSCE.",
    "keyNotes": "• A dihybrid cross between two heterozygotes gives the phenotype ratio 9:3:3:1 when the genes assort independently and dominance is complete.\n• A test cross of a dihybrid with the double recessive yields 1:1:1:1 and reveals the gametes formed.\n• Sex-linked genes sit on the X chromosome; males are affected more often because they carry only one X.\n• Colour blindness and haemophilia are X-linked recessive; carrier mothers pass them to about half their sons.\n• ABO blood groups show codominance of IA and IB with O recessive; the sickle-cell trait gives heterozygote advantage against malaria.",
    "isFreeTrial": false,
    "isVip": true,
    "detailedNotes": {
      "topicId": "shs2-bio-t1-genetics-ii-dihybrid-sex-linkage",
      "title": "Genetics II: Dihybrid Crosses, Sex Linkage and Blood Groups",
      "overview": "This topic extends Mendelian genetics from one gene pair to two, moves some genes onto the sex chromosomes, and grounds both ideas in human examples Ghanaian students meet constantly: the 9:3:3:1 dihybrid ratio, colour blindness and haemophilia, ABO and Rhesus blood groups, and the sickle-cell trait so common in West Africa.",
      "introduction": "You already know segregation from Genetics I. Now ask what happens when two different characters, say plant height and seed shape, travel together through a cross, and why a boy can inherit his grandfather's colour blindness through his mother. Working through dihybrid Punnett squares, X-linked crosses and blood-group problems builds the exact reasoning WASSCE Papers 1 and 2 demand, and it explains real family situations around you.",
      "realWorldContext": "Sickle-cell screening is part of routine antenatal and child health services at Ghanaian clinics, and trait frequencies around one adult in five have been reported in many parts of the country. Colour blindness affects roughly one man in twenty, which shows up when a student cannot match the red and green labels on a practical chart. Understanding inheritance turns these statistics into personal, family-aware biology.",
      "objectives": [
        "Work out dihybrid crosses to F2 and state the 9:3:3:1 phenotype ratio with its conditions.",
        "Distinguish a test cross from a back cross and show how each reveals genotype.",
        "Explain sex determination and trace X-linked inheritance of colour blindness through a family.",
        "Infer possible and impossible offspring blood groups from parental ABO genotypes, including the cross HbAS x HbAS."
      ],
      "sections": [
        {
          "title": "Dihybrid Crosses and Independent Assortment",
          "content": "A dihybrid cross follows two gene pairs at once. Take tall plants with round seeds (TtRr) selfed with each other, where T gives tallness, t shortness, R round seeds and r wrinkled seeds. Because the two pairs separate independently during meiosis, each parent produces four gamete types in equal numbers: TR, Tr, tR and tr. A sixteen-square Punnett grid then gives the famous F2 phenotype ratio of 9 tall round : 3 tall wrinkled : 3 short round : 1 short wrinkled. The ratio holds only under stated conditions: the genes must lie on different chromosomes or far apart on the same one so that they assort independently, dominance must be complete in both pairs, all genotype classes must survive equally, and the sample must be large enough for chance to average out. Crossing the dihybrid with the double recessive ttrr, a test cross, gives 1:1:1:1 among the offspring and exposes the four gamete types directly, while the F2 genotype ratio is the more detailed 1:2:1:2:4:2:1:2:1.",
          "bulletPoints": [
            "Each F1 dihybrid forms four gamete types TR, Tr, tR and tr in equal frequency.",
            "The F2 phenotype ratio 9:3:3:1 needs independent assortment, complete dominance and a large family.",
            "A test cross of TtRr with ttrr yields 1:1:1:1 and reveals the gametes of the parent.",
            "Linked genes sit close together on one chromosome and upset the expected ratio by producing mostly parental types."
          ],
          "keyTakeaway": "The 9:3:3:1 ratio is not magic: it is the arithmetic of two independent one-gene crosses multiplied together, (3:1) x (3:1).",
          "realWorldExample": "A breeder crossing two maize varieties that differ in grain colour and kernel texture expects a 9:3:3:1 class ratio in the F2 if the two genes are unlinked."
        },
        {
          "title": "Sex Linkage: Genes Riding on the X Chromosome",
          "content": "Sex is determined by the X and Y chromosomes in mammals: XX is female, XY is male, while birds use the opposite system in which the male is ZZ and the female ZW. Genes carried on the X chromosome are called sex-linked, and because a man has only one X, a single recessive allele on it expresses with no partner allele to mask it. That is why X-linked recessive traits such as red-green colour blindness and haemophilia appear far more often in men than women. Cross a carrier woman, written XN Xn, with a normal man XN Y, and the daughters are either fully normal or carriers but never affected, while each son has a one-in-two chance of being colour blind because he inherits his single X from his mother. This criss-cross pattern, grandfather to carrier mother to grandson, is a favourite WASSCE pedigree. A colour-blind father cannot pass the trait to his sons, since he gives them his Y chromosome; he makes all his daughters carriers instead.",
          "bulletPoints": [
            "Human females are XX and males XY; in birds the female is ZW and the male ZZ.",
            "X-linked recessives show mostly in males because they have no second X to hide the allele.",
            "Carrier mother and normal father: half the sons affected, no daughter affected, half the daughters carriers.",
            "A father gives his X only to daughters, so father-to-son transmission rules out X linkage."
          ],
          "keyTakeaway": "Read every sex-linked problem by tracking the mother's two X chromosomes: sons take one X from her, daughters take one X from each parent.",
          "realWorldExample": "A student in Cape Coast who cannot match the red and green labels on his practical kit learns that the trait likely came through his mother, whose father was colour blind."
        },
        {
          "title": "Blood Groups, Sickle Cell Trait and Reading Pedigrees",
          "content": "The ABO system is controlled by three alleles, IA, IB and i. IA and IB are codominant, so a person carrying both is type AB, while i is recessive and gives type O only in the combination ii. Type A is IA IA or IA i; type B is IB IB or IB i. From a cross between an AB father and an O mother, every child is type A or type B and none can be AB or O, a result often used in simple parentage reasoning. The Rhesus factor explains a serious pregnancy danger: an Rh-negative mother who has become sensitised can, in a later pregnancy with an Rh-positive child, produce antibodies that destroy the fetal red cells. Sickle-cell inheritance is a single gene with two alleles, HbA and HbS: the cross HbAS x HbAS gives one quarter HbSS children with the full disease, while carriers HbAS are largely protected against severe malaria, the classic heterozygote advantage where malaria is endemic. When reading a pedigree, shaded symbols mark affected people, a horizontal line joins mates, vertical lines drop to offspring, and a trait that skips generations through unaffected parents points to recessive inheritance.",
          "bulletPoints": [
            "The alleles IA, IB and i produce six genotypes and four phenotypes; AB demonstrates codominance.",
            "An AB parent crossed with an O parent gives only A and B children, never AB or O.",
            "HbAS x HbAS yields 1 normal : 2 carriers : 1 affected, and carriers resist severe malaria.",
            "In a pedigree, unaffected parents with an affected child indicate a recessive allele."
          ],
          "keyTakeaway": "Blood-group and sickle-cell problems are ordinary Mendelian crosses wearing human clothing; write the genotypes first and the ratio follows.",
          "realWorldExample": "Counselling at a sickle-cell clinic asks two HbAS partners to weigh the one-in-four risk of an HbSS child in each pregnancy, the direct human face of this genetics."
        }
      ],
      "commonMistakes": [
        "Omitting the X and Y chromosomes when writing gametes for a sex-linked cross, then losing marks that depend on them appearing in every genotype.",
        "Expecting 9:3:3:1 from a test cross; the test-cross ratio of a dihybrid is 1:1:1:1.",
        "Claiming a colour-blind father can pass colour blindness to his son; he gives his son only the Y chromosome.",
        "Confusing codominance with blending: an AB person expresses both A and B antigens fully, not a mixture of them."
      ],
      "wassceExamTips": [
        "Draw the F1 gametes and the 16-square grid for any dihybrid question; markers award method marks even when the ratio is later stated from memory.",
        "Label every generation (P, F1, F2), every genotype and every phenotype, and state the ratio in words as well as figures.",
        "For X-linked work, put the allele on the X and never on the Y; state plainly which sex inherits which chromosome.",
        "If a pedigree question gives blood-group phenotypes, list all possible genotypes per person first, then eliminate the impossible crosses."
      ],
      "summaryChecklist": [
        "I can complete a dihybrid cross to F2 and state 9:3:3:1 with its conditions.",
        "I can distinguish a test cross from a back cross and predict 1:1:1:1 for a dihybrid test cross.",
        "I can trace colour blindness through three generations and explain why males are affected more often.",
        "I can work out ABO offspring groups from any parental pair and identify impossible results.",
        "I can explain heterozygote advantage in sickle-cell trait and read a recessive pattern from a pedigree."
      ]
    },
    "examples": [
      {
        "id": "ex-biology-genetics-ii-dihybrid-sex-linkage-1",
        "title": "Dihybrid cross: predicting classes among 160 F2 seedlings",
        "problem": "Maize plants heterozygous for height and kernel texture (TtRr, tall and round being dominant) are selfed. Among 160 F2 seedlings, how many of each phenotype class are expected?",
        "stepByStepSolution": [
          "Each TtRr parent forms gametes TR, Tr, tR and tr, so the F2 grid has 16 equally likely boxes (M1)",
          "Phenotype ratio is 9 tall round : 3 tall wrinkled : 3 short round : 1 short wrinkled (M1)",
          "Tall round: 9/16 x 160 = 90 (A1)",
          "Tall wrinkled: 3/16 x 160 = 30, and short round: 3/16 x 160 = 30 (A1)",
          "Short wrinkled: 1/16 x 160 = 10; check the total 90 + 30 + 30 + 10 = 160 (A1)"
        ],
        "keyTakeaway": "Multiply each ratio share by the family size, then add the four classes back to the total as a proof of correct arithmetic."
      },
      {
        "id": "ex-biology-genetics-ii-dihybrid-sex-linkage-2",
        "title": "Sex-linked cross: carrier mother and normal father",
        "problem": "A woman with normal vision whose father was colour blind (genotype XN Xn) marries a man with normal vision (XN Y). What can be said of their daughters and sons, and if the couple has six sons, how many are expected to be colour blind?",
        "stepByStepSolution": [
          "Mother XN Xn crossed with father XN Y gives daughters XN XN and XN Xn only (M1)",
          "Therefore no daughter is colour blind and half of the daughters are carriers (A1)",
          "Sons receive the Y from the father and one X from the mother: XN Y or Xn Y in equal numbers (M1)",
          "Each son therefore has a probability of 1/2 of being colour blind (A1)",
          "Expected number among six sons = 6 x 1/2 = 3 (A1)"
        ],
        "keyTakeaway": "Track the two X chromosomes of the mother for sons and both parents together for daughters; the expected number comes from 1/2 per son."
      }
    ],
    "quiz": {
      "id": "quiz-biology-genetics-ii-dihybrid-sex-linkage",
      "topicId": "shs2-bio-t1-genetics-ii-dihybrid-sex-linkage",
      "title": "Genetics II: Dihybrid Crosses, Sex Linkage and Blood Groups",
      "timeLimitMinutes": 12,
      "passScorePercentage": 60,
      "questions": [
        {
          "id": "q-biology-genetics-ii-dihybrid-sex-linkage-1",
          "quizId": "quiz-biology-genetics-ii-dihybrid-sex-linkage",
          "questionText": "The F2 phenotype ratio 9:3:3:1 from a dihybrid cross is obtained only when",
          "optionA": "the two genes lie close together on the same chromosome",
          "optionB": "the two gene pairs assort independently and dominance is complete in each pair",
          "optionC": "one allele shows incomplete dominance over the other in both pairs",
          "optionD": "the double recessive class fails to survive to adulthood",
          "correctOption": "B",
          "explanation": "Independent assortment with complete dominance and equal survival of all classes produces 9:3:3:1. Linkage, blending or a lethal class all distort the ratio.",
          "subConcept": "Dihybrid ratios",
          "remediationTip": "Redraw the 16-square grid and count the four classes before accepting any ratio claim."
        },
        {
          "id": "q-biology-genetics-ii-dihybrid-sex-linkage-2",
          "quizId": "quiz-biology-genetics-ii-dihybrid-sex-linkage",
          "questionText": "The genotype of a man with red-green colour blindness is",
          "optionA": "XN Y, with the normal vision allele on his single X chromosome",
          "optionB": "XN Xn, one X carrying normal and one carrying the colour-blind allele",
          "optionC": "Xn Xn, a woman homozygous for the colour-blind allele",
          "optionD": "Xn Y, his single X carrying the colour-blind allele",
          "correctOption": "D",
          "explanation": "A male has one X chromosome; if it carries the colour-blind allele n, the trait expresses, giving Xn Y. Xn Xn would be an affected female, which is rare.",
          "subConcept": "Sex linkage",
          "remediationTip": "Write the two X chromosomes of a female and the single X of a male beside each option and retest."
        },
        {
          "id": "q-biology-genetics-ii-dihybrid-sex-linkage-3",
          "quizId": "quiz-biology-genetics-ii-dihybrid-sex-linkage",
          "questionText": "A man of blood group AB marries a woman of blood group O. Their children can be",
          "optionA": "only of group A or only of group B",
          "optionB": "of any of the four blood groups",
          "optionC": "of group AB or group O only",
          "optionD": "of group O in half of the births",
          "correctOption": "A",
          "explanation": "The AB father gives IA or IB and the O mother only i, so children are IA i (group A) or IB i (group B). Neither AB nor ii can arise from this pairing.",
          "subConcept": "ABO inheritance",
          "remediationTip": "List the gametes of each parent in two columns before naming the possible groups."
        },
        {
          "id": "q-biology-genetics-ii-dihybrid-sex-linkage-4",
          "quizId": "quiz-biology-genetics-ii-dihybrid-sex-linkage",
          "questionText": "A test cross always mates the organism of unknown genotype with",
          "optionA": "an individual from the F1 generation",
          "optionB": "a homozygous dominant individual",
          "optionC": "a homozygous recessive individual",
          "optionD": "another organism with the same phenotype",
          "correctOption": "C",
          "explanation": "The recessive partner contributes only recessive alleles, so the offspring classes mirror the gametes of the unknown parent and expose its genotype.",
          "subConcept": "Test crosses",
          "remediationTip": "Practise one monohybrid and one dihybrid test cross and note the 1:1 and 1:1:1:1 results."
        },
        {
          "id": "q-biology-genetics-ii-dihybrid-sex-linkage-5",
          "quizId": "quiz-biology-genetics-ii-dihybrid-sex-linkage",
          "questionText": "In malaria-prone districts of Ghana, the sickle-cell trait HbAS stays common because",
          "optionA": "carriers of HbS cannot transmit the allele to their children",
          "optionB": "HbAS individuals are largely protected against severe malaria and survive to reproduce",
          "optionC": "HbSS individuals have the strongest resistance of all to malaria",
          "optionD": "a diet rich in yam removes the sickle allele from the blood",
          "correctOption": "B",
          "explanation": "The heterozygote gains an advantage against malaria, balancing the loss of HbSS individuals; this is heterozygote advantage. No diet removes an allele.",
          "subConcept": "Sickle cell and blood groups",
          "remediationTip": "Cross HbAS x HbAS again and write the three offspring genotypes with their malaria outcome."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t1-population-ecology-field-sampling",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 8,
    "title": "Population Ecology and Field Sampling Methods",
    "description": "Population density, distribution and growth, the quadrat, transect and mark-release-recapture methods with their calculations and assumptions, and the interactions and succession that hold communities together.",
    "keyNotes": "• A population is a group of the same species in one area; density is individuals per unit area and size is the total number.\n• Natality and immigration add individuals; mortality and emigration remove them; balance at carrying capacity flattens the sigmoid curve.\n• Quadrats sample slow or immotile organisms by random placement; transects follow a change in environment.\n• Mark-release-recapture estimates mobile animals: N = (marked first x second catch) / recaptured marked.\n• Competition, predation, parasitism and mutualism shape communities; succession returns life to disturbed land.",
    "isFreeTrial": false,
    "isVip": true,
    "detailedNotes": {
      "topicId": "shs2-bio-t1-population-ecology-field-sampling",
      "title": "Population Ecology and Field Sampling Methods",
      "overview": "This topic moves ecology from the individual organism to the population: the numbers that describe it, the field methods used to measure those numbers honestly, and the interactions and succession that explain why populations rise, fall and settle. Quadrat and mark-release-recapture calculations are regular WASSCE numerical items.",
      "introduction": "Ask a farmer how many weeds are in the field or a health worker how many mosquitoes breed near a stream, and you are asking population questions that no census can answer by counting every individual. Ecologists sample instead. Here you will learn the vocabulary of population size, density and distribution, master the quadrat, the transect and mark-release-recapture with their arithmetic and assumptions, and then see how competition, predation and succession keep whole communities in motion.",
      "realWorldContext": "Field sampling is working practice in Ghana: extension officers estimate cocoa pod borer or armyworm pressure before spraying, fishery observers sample tilapia in lake Volta cages, and school teams near Cape Coast count Littorina and other snails along rocky shores. Giant land snail populations around school compounds are a classic mark-release-recapture class project, and Tridax weed density in an abandoned plot near Tamale is a classic quadrat exercise.",
      "objectives": [
        "Define population density, distribution and size and explain the factors that change them.",
        "Describe and carry out quadrat and transect sampling for sedentary organisms.",
        "Apply the mark-release-recapture formula and state its key assumptions.",
        "Explain competition, predation, parasitism and mutualism with local examples, and sketch a population growth curve to carrying capacity."
      ],
      "sections": [
        {
          "title": "Population Attributes and What Changes Them",
          "content": "A population is a group of individuals of one species living in a defined area and capable of interbreeding. Three numbers describe it: size, the total count of individuals; density, the number per unit area or volume, such as snails per square metre; and distribution, the pattern of spacing, which may be clumped around resources, uniform under competition, or random. Four processes move the size up or down: natality and immigration add individuals, while mortality and emigration remove them. Where resources are unlimited, a population grows exponentially and the graph shoots up in a J shape; in the real world food, space, water and predators bite back, so growth slows and the curve becomes sigmoid, an S shape that levels off at the carrying capacity, the largest number the environment can support. Density-dependent factors such as disease, parasitism and competition tighten as crowding increases, while rainfall, fire and floods act regardless of density. Age structure and sex ratio hint at the future: a population with many young individuals is set to grow even if today's births and deaths balance.",
          "bulletPoints": [
            "Size is the total number, density is number per unit area, distribution is the spacing pattern.",
            "Natality plus immigration raise size; mortality plus emigration lower it.",
            "Sigmoid growth levels off at carrying capacity as environmental resistance rises.",
            "Density-dependent factors strengthen with crowding; weather and fire act irrespective of density."
          ],
          "keyTakeaway": "Population change is simple bookkeeping: births plus immigrants minus deaths minus emigrants, capped by the carrying capacity of the habitat.",
          "realWorldExample": "A classroom jar of pond water left with unlimited food shows protozoa multiplying rapidly at first, then crashing as waste accumulates, a miniature lesson in limits to growth."
        },
        {
          "title": "Quadrats, Transects and Mark-Release-Recapture",
          "content": "Counting every organism is impossible, so ecologists sample. A quadrat is a square frame, commonly 0.5 m by 0.5 m or 1 m by 1 m, laid on the ground at random points so that every part of the habitat has the same chance of being sampled; the individuals of the chosen species inside each frame are counted, the mean per unit area is found, and the total is estimated by scaling up. Random placement and enough replicate quadrats are what make the estimate trustworthy; biased placement near the footpath inflates the answer. A transect is a line, often a tape, along which organisms are recorded at intervals; it answers a different question, how species change along an environmental gradient such as the shore of a lagoon or the edge of a burn. For mobile animals a quadrat is useless, so ecologists use mark-release-recapture: capture a sample, mark the individuals harmlessly, release them, allow time for mixing, then capture a second sample. Population size is estimated as N = (number first marked x total second catch) / number of marked individuals recaptured. The method assumes the marks are not lost or harmful, marked animals mix randomly back into the population, and the population is closed to births, deaths, immigration and emigration during the study.",
          "bulletPoints": [
            "Quadrats suit plants and slow creatures; throw or place them at random and repeat enough times.",
            "Density from quadrats = total counted / total sampled area; scale up for a plot estimate.",
            "Transects record change along a gradient, such as snail species up a rocky shore.",
            "Mark-release-recapture: N = M x C / R, valid only if marks are harmless and mixing is complete."
          ],
          "keyTakeaway": "Choose the method to match the organism: quadrat for the nearly still, transect for a gradient, marking and recapture for the mobile.",
          "realWorldExample": "A Biology Society at Koforidua paints a dot of shellac on each of eighty giant land snails, releases them, and a week later recaptures 120 snails of which 12 carry dots."
        },
        {
          "title": "Interactions, Succession and Community Stability",
          "content": "Populations do not live alone; they are tied together by interactions. Competition occurs between individuals of the same species, for example maize plants too close together in a row, and between species, for example a farm invaded by Tridax and Spermacode that crowd out crops. Predation removes prey and drives the classic predator-prey cycles in which both curves rise and fall out of step. Parasitism benefits one partner at the cost of the other: ticks feeding on goats, Cuscuta twining on hedge plants, and Plasmodium inside a human. Mutualism benefits both: Rhizobium fixing nitrogen for a legume in return for sugars, and the midges that pollinate cocoa flowers while feeding their young in the flowers. These links weave into food webs, and a web with many alternative routes is more stable than a single chain, because the loss of one species can be bypassed. When a plot is abandoned near Kumasi, succession follows a reliable order: lichens and bare rock or disturbed soil, then grasses and Tridax, then shrubs, then fast-growing trees and in time forest regrowth, each stage changing shade and soil so that the next stage can replace it until a relatively stable climax community forms.",
          "bulletPoints": [
            "Competition may be within a species or between species; it reduces growth and yield.",
            "Parasite-host and predator-prey relationships can be read as paired population curves.",
            "Mutualism: Rhizobium and legumes, cocoa flowers and their midge pollinators.",
            "Secondary succession on abandoned farmland runs from grasses and weeds to shrubs to forest."
          ],
          "keyTakeaway": "Interactions are the threads of a food web; the more connections a community has, the better it absorbs the loss of any single population.",
          "realWorldExample": "An abandoned cocoa plot in the Ashanti Region is colonised first by grasses and Tridax, then shrubs, and after some years by young forest trees, a textbook sequence students can walk through in an afternoon."
        }
      ],
      "commonMistakes": [
        "Reporting a quadrat count as a density without dividing by the quadrat area and the number of quadrats.",
        "Placing quadrats only where the weeds look thickest instead of sampling at random.",
        "Forgetting the assumptions of mark-release-recapture, such as loss of marks or marked animals dying after handling.",
        "Calling the flattening of a sigmoid curve a stop to all births; in fact births and deaths simply balance at carrying capacity."
      ],
      "wassceExamTips": [
        "In sampling questions, name the method and justify it by the mobility of the organism; a marked answer with a reason earns full marks.",
        "Learn the recapture formula as N = M x C / R, substitute carefully, and give the answer with a unit-free count.",
        "State at least three assumptions whenever mark-release-recapture is asked; they are usually worth separate marks.",
        "For a succession question, write the stages in order and add one named plant per stage."
      ],
      "summaryChecklist": [
        "I can define density, distribution and size and list the four factors changing population size.",
        "I can sketch and label a sigmoid growth curve showing carrying capacity.",
        "I can calculate density from quadrat data and scale it to a whole plot.",
        "I can apply N = M x C / R and state its assumptions.",
        "I can give local examples of competition, predation, parasitism and mutualism and relate succession to stability."
      ]
    },
    "examples": [
      {
        "id": "ex-biology-population-ecology-field-sampling-1",
        "title": "Quadrat estimate of weed density on a school plot",
        "problem": "Ten quadrats measuring 0.5 m by 0.5 m each are thrown at random on a 200 square metre plot, and 187 Tridax plants are counted in total. Estimate the density per square metre and the total number of plants on the plot.",
        "stepByStepSolution": [
          "Area of one quadrat = 0.5 m x 0.5 m = 0.25 square metres (M1)",
          "Total sampled area = 10 x 0.25 = 2.5 square metres (M1)",
          "Density = 187 / 2.5 = 74.8 plants per square metre (A1)",
          "Estimated plot total = 74.8 x 200 = 14,960 plants (A1)"
        ],
        "keyTakeaway": "Convert the raw count into a per-square-metre density first, then multiply by the whole area; never quote the raw count as a density."
      },
      {
        "id": "ex-biology-population-ecology-field-sampling-2",
        "title": "Mark-release-recapture estimate of a snail population",
        "problem": "A student marks 80 giant land snails with harmless paint and releases them. One week later a second sample of 120 snails is collected and 12 of them carry marks. Estimate the population size and note how the estimate would move if some marked snails had died.",
        "stepByStepSolution": [
          "Formula: N = (first marked M x second catch C) / recaptured marked R (M1)",
          "Substitute: N = (80 x 120) / 12 (M1)",
          "80 x 120 = 9,600; 9,600 / 12 = 800 snails (A1)",
          "If marked snails died, R falls below its true value, so the quotient 9,600 / R grows and the estimate overstates the population (A1)"
        ],
        "keyTakeaway": "The estimate is the product of the first marking and the second catch divided by the marked recaptures; anything that shrinks the recaptured-marked count inflates the answer."
      }
    ],
    "quiz": {
      "id": "quiz-biology-population-ecology-field-sampling",
      "topicId": "shs2-bio-t1-population-ecology-field-sampling",
      "title": "Population Ecology and Field Sampling Methods",
      "timeLimitMinutes": 10,
      "passScorePercentage": 60,
      "questions": [
        {
          "id": "q-biology-population-ecology-field-sampling-1",
          "quizId": "quiz-biology-population-ecology-field-sampling",
          "questionText": "Population density is correctly defined as",
          "optionA": "the number of individuals of a species per unit area or volume",
          "optionB": "the total number of individuals in a country",
          "optionC": "the number of different species in one habitat",
          "optionD": "the ratio of males to females in a breeding group",
          "correctOption": "A",
          "explanation": "Density is individuals divided by the area or volume they occupy. Totals, species richness and sex ratio describe other properties.",
          "subConcept": "Population attributes",
          "remediationTip": "Rewrite the definitions of size, density and distribution in your own words with units on each."
        },
        {
          "id": "q-biology-population-ecology-field-sampling-2",
          "quizId": "quiz-biology-population-ecology-field-sampling",
          "questionText": "The most suitable method for estimating the size of an active grasshopper population in a grassfield is",
          "optionA": "quadrat sampling at random points",
          "optionB": "a line transect counted at one-metre intervals",
          "optionC": "mark-release-recapture with two samples",
          "optionD": "counting all individuals in a single frame",
          "correctOption": "C",
          "explanation": "Mobile animals move away from frames and lines, so capturing, marking, releasing and recapturing gives a usable estimate of the whole population.",
          "subConcept": "Sampling methods",
          "remediationTip": "Sort five named organisms into quadrat, transect or recapture methods and justify each choice."
        },
        {
          "id": "q-biology-population-ecology-field-sampling-3",
          "quizId": "quiz-biology-population-ecology-field-sampling",
          "questionText": "Which statement is an assumption of mark-release-recapture?",
          "optionA": "The population should roughly double between the two samples.",
          "optionB": "Marked individuals should become easier for predators to catch.",
          "optionC": "Marked animals should remain hidden in the corner they were released in.",
          "optionD": "Marked individuals must mix randomly with the unmarked population before the second catch.",
          "correctOption": "D",
          "explanation": "The formula depends on marked individuals being distributed evenly through the population, so the proportion of marks in the second sample reflects the whole. The other statements break the method.",
          "subConcept": "Recapture assumptions",
          "remediationTip": "List the four main assumptions in one sentence each and test yourself with them hidden."
        },
        {
          "id": "q-biology-population-ecology-field-sampling-4",
          "quizId": "quiz-biology-population-ecology-field-sampling",
          "questionText": "Each 0.25 square metre quadrat holds a mean of 6 Tridax plants. What is the density in plants per square metre?",
          "optionA": "6",
          "optionB": "24",
          "optionC": "1.5",
          "optionD": "60",
          "correctOption": "B",
          "explanation": "Density = 6 / 0.25 = 24 plants per square metre. Dividing by the quadrat area, not multiplying, converts a frame count to a per-square-metre value.",
          "subConcept": "Quadrat calculations",
          "remediationTip": "Check your working: four 0.25 square metre quadrats tile one square metre, so 6 x 4 = 24."
        },
        {
          "id": "q-biology-population-ecology-field-sampling-5",
          "quizId": "quiz-biology-population-ecology-field-sampling",
          "questionText": "A sigmoid population curve levels off because",
          "optionA": "the organisms stop reproducing completely once the curve bends.",
          "optionB": "all predators and parasites are removed from the habitat.",
          "optionC": "environmental resistance raises deaths and lowers births until they balance at carrying capacity.",
          "optionD": "immigration from neighbouring areas suddenly falls to zero.",
          "correctOption": "C",
          "explanation": "At the plateau, natality and mortality are in balance under limited food, space and enemies; reproduction continues but adds no net individuals.",
          "subConcept": "Growth curves",
          "remediationTip": "Draw the sigmoid curve again and label lag, log, deceleration and plateau phases."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t2-reproduction-in-animals-and-humans",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 3,
    "title": "Reproduction in Animals and in Man",
    "description": "Asexual and sexual reproduction in animals, the structure of sperm and ovum and where fertilisation occurs, the mammalian reproductive systems, development of the embryo, placenta and umbilical cord, gestation and birth, parental care, and the puberty and family-health understanding WAEC expects.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Reproduction may be asexual, one parent producing genetically identical young, or sexual, two parents joining male and female gametes to make varied offspring; almost all animals reproduce sexually.\n• Asexual methods in simple animals are binary fission in Amoeba, budding in Hydra, fragmentation and regeneration in the planarian, and parthenogenesis in aphids and bees, where an unfertilised egg develops into an adult.\n• The male gamete is the sperm, small, motile and numerous, made in the testes; the female gamete is the ovum, large, non-motile and carrying food, released by the ovary.\n• Fertilisation is the fusion of a sperm nucleus with an egg nucleus to form the zygote; it may be external in water, as in most fish, or internal inside the female, as in mammals.\n• In humans fertilisation normally occurs in the outer third of the oviduct (fallopian tube); the embryo then moves to the uterus and embeds in its wall in a step called implantation.\n• The male system has testes, scrotum, sperm duct, urethra and penis; the scrotum holds the testes slightly below body temperature so that sperm can form.\n• The female system has ovaries, oviducts, uterus (womb), cervix and vagina; the lining of the uterus thickens each cycle and is shed as menstrual flow when no embryo implants.\n• The placenta joins mother and fetus without their blood mixing; across it pass oxygen, nutrients and antibodies to the fetus and carbon dioxide and urea away from it.\n• The umbilical cord carries the fetal and placental blood vessels between fetus and placenta, and amniotic fluid in the surrounding sac cushions the fetus against shock.\n• Gestation is the length of pregnancy: about nine months (around 280 days from the last period) in humans, roughly two months in the dog and about nine months in cattle.\n• After birth the mother feeds the newborn on milk from the mammary glands, and the first milk, colostrum, is rich in antibodies the baby cannot yet make for itself.\n• Parental care runs from none in most fish and insects to long nursing in mammals; the greater the care, the fewer the young, and this trade-off is a common exam contrast.\n• Puberty is the age the body becomes able to reproduce; in girls it brings breast growth, wider hips and the start of menstruation, and in boys it brings facial hair, a deeper voice, muscle growth and the first sperm production.\n• The main sex hormones are testosterone in the male and oestrogen and progesterone in the female; progesterone maintains the thickened uterine lining during pregnancy.\n• Family health covers birth spacing for the safety of mother and child, antenatal care, immunisation and the prevention of sexually transmitted infections such as HIV by faithfulness, correct use of condoms and never sharing blades.",
    "detailedNotes": {
      "overview": "This topic moves from the simplest animal reproduction to the human case that WAEC tests most. You will compare asexual and sexual reproduction in animals, describe the two gametes and where fertilisation occurs, and work through the mammalian male and reproductive systems. You will then trace development from the zygote through implantation to the fetus, explaining how the placenta, umbilical cord and amniotic fluid keep a growing baby alive inside the mother, and how gestation ends in birth and suckling. The unit closes with parental care, the physical and emotional changes of puberty, and the family-health practice of birth spacing and disease prevention that Ghanaian health services teach.",
      "introduction": "Study the human system as a pathway. Follow the sperm from the testes, through the sperm duct and urethra to the oviduct, and follow the egg from the ovary, down the oviduct, to the uterus, and place fertilisation and implantation on that map so their positions are exact. Learn one clear sentence for each of the placenta, umbilical cord and amniotic fluid, since examiners ask you to state the function of each separately. Treat puberty and family health as biology, not gossip: name the hormone, the change and the health action together.",
      "realWorldContext": "At a CHPS compound or a district hospital in Ghana, an antenatal mother is weighed, her blood pressure is checked, she is screened for anaemia and given supplements, and she is counselled on birth spacing and on protecting herself from HIV and other infections, because the close spacing of many pregnancies is a leading risk to both mother and infant. Newborns are given vitamin K and, where indicated, the BCG vaccine, and mothers are urged to breast-feed early so the baby gets colostrum. Family-planning counselling and immunisation are offered as public-health services, and the school syllabus discusses puberty, pregnancy and sexually transmitted infections openly as matters of health and responsibility.",
      "objectives": [
        "Compare asexual and sexual reproduction in animals and give an example of each asexual method",
        "Describe the structure and function of the sperm and ovum and state where fertilisation occurs",
        "Name the parts of the mammalian male and female reproductive systems and state the role of each",
        "Trace development from zygote to fetus and explain the roles of placenta, umbilical cord and amniotic fluid",
        "Explain parental care, the changes of puberty and the family-health practices of birth spacing and disease prevention"
      ],
      "sections": [
        {
          "title": "Asexual and Sexual Reproduction in Animals",
          "content": "Sexual reproduction is the rule among animals because it mixes the genes of two parents and so produces variation, the raw material on which survival depends. Asexual reproduction, by contrast, comes from one parent and yields genetically identical young, and it survives mainly among the simplest animals. Amoeba splits into two equal cells by binary fission; Hydra pushes out a bud that grows and detaches; a planarian cut into pieces regenerates a whole worm from each fragment; and in aphids and honeybees an unfertilised egg can develop into an adult, a process called parthenogenesis. Even animals that seem to reproduce alone, such as the tapeworm and the earthworm, are hermaphrodites carrying both male and female organs, and they still exchange gametes with another worm so that fertilisation is effectively cross. The general pattern to keep for the exam is that asexual reproduction is fast and needs no mate but gives no variation, while sexual reproduction is slower and costs more but equips the species to face change.",
          "bulletPoints": [
            "Sexual reproduction fuses gametes and creates variation; asexual reproduction clones the single parent.",
            "Binary fission (Amoeba), budding (Hydra), fragmentation and regeneration (planarian), parthenogenesis (aphid, bee).",
            "Hermaphrodite animals such as earthworms still exchange gametes with another individual.",
            "Asexual methods are rapid and mate-free but leave the species genetically uniform.",
            "The variation from sexual reproduction is what lets a population survive new disease or climate."
          ],
          "keyTakeaway": "Name the asexual method with its animal, and remember that sexual reproduction is valued for the variation it creates.",
          "realWorldExample": "In a school pond near Cape Coast, freshwater hydra on a water-leaf can be seen under a hand lens with side buds, each bud a young clone, a live demonstration of asexual budding in animals."
        },
        {
          "title": "Gametes, Fertilisation and the Mammalian Reproductive Systems",
          "content": "The two gametes are built for opposite jobs. The sperm is tiny, with a head carrying the nucleus and an acrosome of enzyme to bore into the egg, a middle piece packed with mitochondria to supply energy, and a long tail for movement; millions are produced, but each carries almost no food. The ovum is large, non-motile and stores yolk to feed the early embryo, and in humans usually one is released from an ovary at a time in ovulation. Where the gametes meet decides the type of fertilisation: most fish and amphibians shed eggs and sperm into water for external fertilisation, while mammals bring the sperm inside the female for internal fertilisation, which protects the gametes and raises the chance of union. In the human female, the released egg is swept into the oviduct, and it is here, in the outer third of the oviduct, that fertilisation normally happens. The male system delivers the sperm: the testes make them and lie in the scrotum, which holds them a couple of degrees below body temperature so sperm formation works; sperm pass along the sperm duct, mix with gland secretions to form semen and leave through the urethra in the penis. In the female, the thick muscular wall of the uterus (womb) is the site of development, its inner lining built up each cycle and, when no embryo implants, shed as the menstrual flow.",
          "bulletPoints": [
            "Sperm: head, middle piece rich in mitochondria, tail; made in the testes, which the scrotum keeps cool.",
            "Ovum: large, non-motile, food-carrying; released from the ovary at ovulation.",
            "External fertilisation is in water (fish, amphibians); internal fertilisation is inside the female (mammals).",
            "In humans fertilisation occurs in the outer third of the oviduct (fallopian tube).",
            "The uterus lining thickens each cycle and is shed as menstrual flow if no embryo implants."
          ],
          "keyTakeaway": "State where fertilisation happens (oviduct) and where the embryo develops (uterus); confusing these two sites is the commonest error.",
          "realWorldExample": "Health workers explain to couples at an antenatal clinic that the scrotal temperature matters for male fertility, which is why prolonged heat, tight clothing or fever can temporarily lower sperm quality."
        },
        {
          "title": "From Zygote to Baby: Implantation, Placenta, Gestation and Birth",
          "content": "Once a sperm nucleus fuses with the egg nucleus, the resulting zygote begins dividing as it drifts down the oviduct. It becomes a solid ball of cells, the morula, then a hollow ball, the blastocyst, which reaches the uterus and burrows into its thickened lining; this embedding is implantation, and from it the pregnancy dates. The outer cells of the blastocyst form the placenta, a disc of tissue pressed firmly against the uterine wall in which the mother's blood spaces and the fetus's blood capillaries lie very close together but never mix. Across this exchange surface oxygen and nutrients pass from mother to fetus and carbon dioxide and urea pass from fetus to mother, while the placenta also makes hormones that hold the pregnancy going and lets protective antibodies through. The fetus is joined to the placenta by the umbilical cord, which carries the umbilical arteries and vein, and it floats in amniotic fluid inside a membrane sac that cushions it from jolts and keeps the temperature even. The period of development in the uterus is gestation, about nine months in a human. Near the end, the wall of the uterus contracts in labour, the baby is delivered, usually head first, and the placenta follows as the afterbirth. The newborn then begins to breathe with its own lungs and to feed at the breast; the first milk, colostrum, is thick and yellow and full of antibodies, giving the baby passive protection while its own immune system matures.",
          "bulletPoints": [
            "Zygote divides to a morula, then a blastocyst, which implants in the uterine wall.",
            "The placenta lets materials pass between mother and fetus without their blood mixing.",
            "The umbilical cord carries blood between fetus and placenta; amniotic fluid cushions the fetus.",
            "Gestation is about nine months in humans; birth is followed by delivery of the afterbirth.",
            "Colostrum, the first milk, is rich in antibodies that protect the newborn."
          ],
          "keyTakeaway": "The placenta is an exchange surface, not a mixer of blood; name what crosses it and in which direction.",
          "realWorldExample": "At a regional hospital a midwife clamps and cuts the umbilical cord only after the baby is born, and the delivered placenta is examined whole to make sure none is left inside the mother."
        },
        {
          "title": "Parental Care, Puberty and Family Health",
          "content": "Animals invest very differently in their young. Many fish and insects scatter thousands of eggs and provide no care at all, relying on sheer numbers so that a few survive; birds sit on eggs and feed chicks; and mammals go furthest, nourishing the developing young inside the body through the placenta and after birth with milk. The general rule to give in an answer is that the more care the parents give, the fewer the offspring, and the higher the chance that each one reaches adulthood. Puberty is the stage at which an animal, including a human, first becomes capable of reproduction. It is driven by sex hormones, mainly testosterone in the boy and oestrogen and progesterone in the girl, and it brings the primary changes, the maturing of the gonads and the start of sperm production or menstruation, together with secondary sex characteristics. In girls these include breast development, widening of the hips and a change of voice; in boys they include growth of beard and underarm hair, deepening of the voice, broader shoulders and the beginning of sperm production, and both sexes grow in height and develop body odour and skin oil. Family health turns this biology into everyday practice. Birth spacing, allowing the mother's body to recover between pregnancies, lowers the risk of low birth weight and of maternal illness; regular antenatal care, a good diet and immunisation protect mother and child; and sexually transmitted infections, including HIV, are prevented by being faithful to one uninfected partner, by correctly using condoms, and by never sharing razors or needles. Understanding these facts protects young people and is treated in the syllabus as serious public health, not as a matter for embarrassment.",
          "bulletPoints": [
            "Parental care ranges from none (most fish, insects) to prolonged nursing (mammals).",
            "More parental care means fewer offspring but a better chance each one survives.",
            "Puberty is driven by testosterone, oestrogen and progesterone and brings primary and secondary sex changes.",
            "Birth spacing and regular antenatal care protect the health of both mother and child.",
            "STIs including HIV are prevented by faithfulness, correct condom use and never sharing blades."
          ],
          "keyTakeaway": "Link each family-health action to its biological reason; that is what earns the mark on a public-health question.",
          "realWorldExample": "A community health officer in a Ghanaian district encourages women to space births by at least two years and to attend the antenatal clinic early, because closely repeated pregnancies raise the risk of anaemia in the mother and low birth weight in the baby."
        }
      ],
      "commonMistakes": [
        "Placing fertilisation in the uterus; fertilisation occurs in the oviduct, and only the embryo implants later in the uterus.",
        "Saying the mother's and fetus's blood mix in the placenta; they stay separate, and materials pass across the placental barrier by diffusion and active transport.",
        "Calling the amniotic fluid a food supply; it cushions and protects, while nourishment reaches the fetus through the placenta and umbilical cord.",
        "Naming progesterone as the hormone that starts labour or causes male features; progesterone maintains the uterine lining and the pregnancy, and testosterone drives the male changes.",
        "Confusing a primary sex characteristic (maturing of the gonads, start of menstruation or sperm production) with a secondary one (deep voice, breast growth, facial hair)."
      ],
      "wassceExamTips": [
        "In Paper 1 a common item asks for the site of fertilisation or the site of implantation; hold them apart: fertilisation in the oviduct, implantation in the uterus.",
        "In Paper 2 draw the mammalian reproductive system large and in pencil, with ruled label lines to one clear structure each; a squashed or unlabelled diagram scores nothing.",
        "When asked the function of the placenta, umbilical cord and amniotic fluid, give one distinct sentence apiece rather than repeating exchange of materials for all three.",
        "For a parental-care question, quote the rule that more care means fewer young, then give a named example of each extreme, a fish that provides none and a mammal that nurses.",
        "In a family-health or STI question, always pair the advice with the reason, for example birth spacing so the mother recovers and the baby grows to a healthy weight."
      ],
      "summaryChecklist": [
        "Can I give four asexual methods in animals each with its example organism?",
        "Can I contrast the structure of a sperm and an ovum and state where fertilisation occurs?",
        "Can I name the parts of the male and female systems and give the function of each?",
        "Can I describe the roles of the placenta, umbilical cord and amniotic fluid during pregnancy?",
        "Can I list the changes of puberty and link two family-health practices to their biological reasons?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-animals-1",
        "title": "Probability of Three Boys in a Row",
        "problem": "In humans the chance that any one child is a boy is 1/2, and each birth is independent of earlier ones. If a couple plans to have three children, what is the probability that all three are boys?",
        "stepByStepSolution": [
          "Step 1 (M1): Probability that one child is a boy = 1/2.",
          "Step 2 (M1): The births are independent, so multiply the three single-child probabilities: (1/2) x (1/2) x (1/2) = (1/2)^3.",
          "Step 3 (M1): (1/2)^3 = 1/8.",
          "Step 4 (A1): 1/8 = 0.125 = 12.5%.",
          "Step 5 (A1): Final answer: the chance of three boys is 1 in 8, about 12.5%; the sex of an earlier child does not change the chance for the next one."
        ],
        "keyTakeaway": "Independent births are multiplied, so several alike outcomes in a row are rarer than one, and each new birth still starts at 1/2."
      },
      {
        "id": "ex-bio-animals-2",
        "title": "Probability of Exactly Two Boys and Two Girls",
        "problem": "A family has four children. Taking each birth as equally likely to be a boy or a girl, calculate the probability that the family has exactly two boys and two girls.",
        "stepByStepSolution": [
          "Step 1 (M1): Each birth has P(boy) = 1/2 and P(girl) = 1/2, so any one fixed order of four births has probability (1/2)^4 = 1/16.",
          "Step 2 (M1): Count the orders with two boys and two girls = 4! / (2! x 2!) = 6.",
          "Step 3 (M1): Probability = number of favourable orders x probability of each = 6 x (1/16) = 6/16.",
          "Step 4 (A1): 6/16 simplifies to 3/8 = 0.375.",
          "Step 5 (A1): As a percentage, 0.375 x 100 = 37.5%.",
          "Step 6 (A1): Final answer: the probability of exactly two boys and two girls in four children is 3/8, about 37.5%."
        ],
        "keyTakeaway": "When order can vary, count the arrangements and multiply by the probability of one arrangement; two boys and two girls is the most likely single mix."
      }
    ],
    "quiz": {
      "id": "quiz-bio-reproduction-animals",
      "topicId": "shs2-bio-t2-reproduction-in-animals-and-humans",
      "title": "Reproduction in Animals and Man Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-animals-1",
          "quizId": "quiz-bio-reproduction-animals",
          "questionText": "In a human female, fertilisation normally takes place in the",
          "optionA": "oviduct (fallopian tube)",
          "optionB": "uterus",
          "optionC": "ovary",
          "optionD": "vagina",
          "correctOption": "A",
          "subConcept": "Site of fertilisation",
          "explanation": "Sperm meet the egg in the outer third of the oviduct, and it is there that fertilisation occurs before the embryo moves to the uterus. The uterus is where the embryo implants and develops, the ovary releases the egg, and the vagina is the birth canal.",
          "remediationTip": "Draw the female system and mark fertilisation at the oviduct and implantation in the uterus."
        },
        {
          "id": "q-bio-animals-2",
          "quizId": "quiz-bio-reproduction-animals",
          "questionText": "Which statement best describes the role of the placenta?",
          "optionA": "It mixes the blood of mother and fetus freely",
          "optionB": "It produces sperm for the developing fetus",
          "optionC": "It stores the baby's waste permanently",
          "optionD": "It passes oxygen, nutrients and wastes between mother and fetus without their blood mixing",
          "correctOption": "D",
          "subConcept": "Placenta",
          "explanation": "The placenta is an exchange surface across which materials pass between two separate blood supplies. Option A is the classic mistake; the mother's and fetus's blood never actually mix.",
          "remediationTip": "Repeat: the placenta exchanges but does not mix blood."
        },
        {
          "id": "q-bio-animals-3",
          "quizId": "quiz-bio-reproduction-animals",
          "questionText": "Which hormone is mainly responsible for maintaining the thickened uterine lining during pregnancy?",
          "optionA": "Insulin",
          "optionB": "Progesterone",
          "optionC": "Thyroxine",
          "optionD": "Adrenaline",
          "correctOption": "B",
          "subConcept": "Sex hormones",
          "explanation": "Progesterone, made by the placenta during pregnancy, keeps the uterine lining thick so the pregnancy continues. Insulin controls blood sugar, thyroxine sets metabolic rate, and adrenaline prepares the body for fight or flight.",
          "remediationTip": "Link each hormone to one job: oestrogen builds, progesterone maintains, testosterone makes male features."
        },
        {
          "id": "q-bio-animals-4",
          "quizId": "quiz-bio-reproduction-animals",
          "questionText": "Which of the following is a male secondary sex characteristic that appears at puberty?",
          "optionA": "The start of menstruation",
          "optionB": "Widening of the hips",
          "optionC": "Deepening of the voice",
          "optionD": "The maturing of the ovaries",
          "correctOption": "C",
          "subConcept": "Puberty",
          "explanation": "A deeper voice is a male secondary sex characteristic caused by testosterone. Menstruation, wider hips and maturing ovaries are all female changes, so they cannot be the male answer.",
          "remediationTip": "Sort the puberty changes into two columns, male and female, and separate primary from secondary."
        },
        {
          "id": "q-bio-animals-5",
          "quizId": "quiz-bio-reproduction-animals",
          "questionText": "A newborn baby receives its first protective antibodies mainly from",
          "optionA": "the mother's colostrum, the first breast milk",
          "optionB": "a vitamin tablet given at birth",
          "optionC": "boiled drinking water",
          "optionD": "the father's milk glands",
          "correctOption": "A",
          "subConcept": "Parental care and milk",
          "explanation": "Colostrum, the thick first milk, is rich in antibodies that give the baby passive immunity. Vitamins and clean water help health but supply no antibodies, and fathers do not produce milk.",
          "remediationTip": "Remember that early breast-feeding gives passive immunity from colostrum antibodies."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t2-heredity-variation-genetics",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 4,
    "title": "Heredity, Variation and Introduction to Genetics",
    "description": "Chromosome behaviour in meiosis, alleles and dominance, genotype and phenotype, monohybrid crosses solved with a Punnett square and its ratios, human sex determination, inherited conditions such as sickle-cell, continuous and discontinuous variation, and mutation.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Heredity is the passing of characters from parents to offspring through genes carried on chromosomes, while variation is the difference between individuals of the same species.\n• Chromosomes are thread-like DNA structures in the nucleus; genes are the units of inheritance at fixed positions, and in body cells they occur in homologous pairs, so humans have 46 chromosomes in 23 pairs.\n• Meiosis is the reduction division that makes gametes: the chromosome number is halved from 46 to 23, the members of each pair separate, and each gamete carries one chromosome of each pair.\n• In meiosis homologous chromosomes pair and may swap pieces (crossing over) and line up at random, so the genes are shuffled and the gametes all differ.\n• A character is controlled by alternative forms of a gene called alleles, and an individual inherits one allele of each gene from each parent.\n• Where two alleles differ, the one that shows is dominant and the hidden one is recessive; a recessive character appears only when both alleles are recessive.\n• Genotype is the allele combination an organism carries, for example Tt, while phenotype is the character actually expressed, for example tall.\n• Homozygous means two identical alleles (TT or tt); heterozygous means two different alleles (Tt).\n• A monohybrid cross follows a single character, and crossing two heterozygotes (Tt x Tt) gives a phenotypic ratio of 3 dominant to 1 recessive and a genotypic ratio of 1 TT to 2 Tt to 1 tt.\n• A Punnett square places the male gametes along the top and the female gametes down the side and fills the boxes to list every possible offspring genotype; it is the safest route to a correct ratio.\n• A test cross, breeding an individual of unknown genotype with a homozygous recessive, reveals the hidden genotype: Tt x tt gives 1 tall to 1 dwarf, while TT x tt gives all tall.\n• Human sex is determined by the X and Y chromosomes: a mother is XX and can give only an X, a father is XY and can give an X or a Y, so the father's sperm sets the sex and the boy-to-girl ratio is about 1 to 1.\n• Conditions passed by genes include sickle-cell trait and disease, albinism and haemophilia; sickle-cell anaemia needs two recessive alleles, so two carriers (AS) have a 1-in-4 chance of an affected child at each birth.\n• Continuous variation, such as height, mass and skin colour, runs through a range with no clear categories and plots as a bell-shaped curve, while discontinuous variation, such as blood group or tongue-rolling, falls into distinct types with no intermediates.\n• A mutation is a sudden change in the DNA of a gene or in chromosome number; most are harmless or harmful, a few can be helpful, and sickle-cell and Down syndrome are standard examples of a gene mutation and a chromosome change.",
    "detailedNotes": {
      "overview": "Genetics explains both why children resemble their parents and why no two are alike. This topic starts with the chromosome and gene, follows what meiosis does to the chromosome pairs, and then builds the vocabulary of alleles, dominance, genotype and phenotype. You will learn to solve a monohybrid cross with a labelled Punnett square and to state its two ratios without error, and to use a test cross to uncover an unknown genotype. The unit then applies these tools to human sex determination and to inherited conditions such as sickle-cell, and finishes with the two kinds of variation and the mutations that introduce new alleles. Every ratio you write here must come from a square you have drawn, not from memory.",
      "introduction": "Work every cross slowly on paper. Write the parents, circle the alleles each can pass on as gametes, draw the square, fill it, then count. Use one letter for one character and keep capitals for the dominant allele so your genotypes are never ambiguous. For each term, allele, dominant, recessive, genotype and phenotype, learn a single exact definition, because Paper 1 marks the wording. When a question gives numbers of offspring, convert the ratio to fractions before you multiply.",
      "realWorldContext": "Sickle-cell inheritance is the genetics story closest to a Ghanaian student's life. The sickle-cell allele is common across West Africa, and health workers at the Sickle Cell Unit at Korle-Bu counsel couples because two parents who each carry the trait (both AS, outwardly healthy) can have a child with the disease. The trait also gives a carrier some protection against severe malaria, which is a strong reason the allele has stayed common where malaria is heavy. Albinism, an inherited recessive condition, is passed by genes and carries no shame or curse; the school syllabus teaches it as an example of inheritance. Simple class surveys of blood group or the ability to roll the tongue give real data on discontinuous variation.",
      "objectives": [
        "Explain how meiosis halves the chromosome number and generates variation",
        "Define allele, dominant, recessive, genotype, phenotype, homozygous and heterozygous and use them correctly",
        "Solve a monohybrid cross with a labelled Punnett square and state both genotypic and phenotypic ratios",
        "Use a test cross to determine an unknown genotype and explain human sex determination",
        "Distinguish continuous from discontinuous variation and give an example of a gene and a chromosome mutation"
      ],
      "sections": [
        {
          "title": "Chromosomes, Genes and Meiosis",
          "content": "The material of inheritance is DNA, and in the nucleus this DNA is packaged into chromosomes. A gene is a length of DNA that influences one character, and each gene sits at a fixed place, its locus, on a particular chromosome. In the body cells of an organism the chromosomes come in matching homologous pairs, one of each pair from each parent, so a human body cell has 46 chromosomes arranged as 23 pairs. Gametes, however, must not carry the full number, or the chromosome count would double at every generation. Meiosis is the division that solves this. The DNA copies once but the cell divides twice, so four daughter cells result, each with half the number of chromosomes, 23 in a human gamete. Two events during meiosis make variation. First, the members of each homologous pair separate at random, so a gamete receives a random mixture of the maternal and paternal chromosomes. Second, when the pair lies together their chromatids may exchange segments in crossing over, so individual chromosomes carry brand-new combinations of alleles. Fertilisation then restores the paired number when two gametes fuse, and it is this alternation of meiosis and fertilisation that drives inheritance.",
          "bulletPoints": [
            "DNA is carried on chromosomes; a gene is the unit of inheritance at a locus.",
            "Body cells are diploid (2n), so humans have 46 chromosomes in 23 homologous pairs.",
            "Meiosis gives four gametes each haploid (n), with 23 chromosomes.",
            "Random separation of homologous pairs shuffles the chromosomes.",
            "Crossing over exchanges alleles between chromatids and adds still more variation."
          ],
          "keyTakeaway": "Meiosis both halves the chromosome number and shuffles the genes; those two jobs are why offspring resemble yet differ from parents.",
          "realWorldExample": "A teacher explaining why a class of thirty students all differ points out that each student came from a different sperm meeting a different egg, and meiosis made millions of differently assorted gametes for each parent."
        },
        {
          "title": "Alleles, Dominance, Genotype and Phenotype",
          "content": "A gene controlling a character may exist in more than one form, and these alternative forms are called alleles. Because chromosomes are paired, an individual carries two alleles for every character, one on each member of the pair. If the two alleles are the same the individual is homozygous for that character, written TT or tt; if they differ the individual is heterozygous, written Tt. When the alleles differ, the one that is expressed in the appearance of the heterozygote is called dominant, and the one whose effect is masked is recessive. Thus a plant with Tt looks tall, because T is dominant to t, while the dwarf character shows itself only in the tt plant. Two words must be kept apart: the genotype is the actual allele combination, TT, Tt or tt, while the phenotype is the character as it can be seen or tested, tall or dwarf. Environmental effects can modify a phenotype, but they do not change the genotype an organism passes on. A useful habit is to write the genotype in letters and then the phenotype in words beside it, so that you never confuse what the organism carries with what it looks like.",
          "bulletPoints": [
            "Alleles are alternative forms of a gene, one inherited from each parent.",
            "Homozygous = two identical alleles (TT or tt); heterozygous = two different alleles (Tt).",
            "The dominant allele shows in the heterozygote; the recessive allele shows only when paired with itself.",
            "Genotype is the allele set; phenotype is the expressed character.",
            "Never infer genotype from phenotype alone, since a dominant-looking organism may be TT or Tt."
          ],
          "keyTakeaway": "A dominant allele is simply the one that shows in the heterozygote; it is not the same as being common, and it is not the same as being the parent's genotype.",
          "realWorldExample": "A tall pea plant sold in a market garden could be TT or Tt; the gardener cannot tell from its height alone, which is why a test cross is needed."
        },
        {
          "title": "Monohybrid Crosses and the Punnett Square",
          "content": "A monohybrid cross is one that follows a single character, such as tallness against dwarfness in the pea. The classic result comes from crossing two pure lines first, TT with tt, which gives an F1 generation all heterozygous Tt and therefore all tall. When those F1 plants are crossed among themselves, Tt x Tt, each parent forms two kinds of gamete, T and t, in equal numbers, and the possible combinations in the offspring are best listed in a Punnett square. Put the male gametes across the top and the female gametes down the side, fill the four boxes, and you obtain TT, Tt, Tt and tt. Reading the genotypes gives a ratio of 1 TT to 2 Tt to 1 tt, the genotypic ratio; reading the appearance gives three tall plants for every one dwarf, a phenotypic ratio of 3 to 1, because both TT and Tt are tall. This is the single most reliable piece of genetics working a student can master. If instead you cross a heterozygote with a recessive parent, Tt x tt, the square yields Tt and tt in equal halves, a 1 to 1 ratio; that cross is the test cross, and it is the standard way to find out whether a dominant-looking individual was TT or Tt.",
          "bulletPoints": [
            "Monohybrid = one character followed through the cross.",
            "Tt x Tt gives genotypes 1 TT : 2 Tt : 1 tt and phenotypes 3 tall : 1 dwarf.",
            "Put male gametes across the top, female gametes down the side, then fill each box.",
            "Tt x tt (test cross) gives 1 tall : 1 dwarf.",
            "Convert a ratio to fractions before multiplying by a given number of offspring."
          ],
          "keyTakeaway": "Draw the square every time; the 3:1 phenotype and the 1:2:1 genotype both fall out of it and cannot be guessed from memory.",
          "realWorldExample": "In a school garden a student selfed a tall pea and counted 180 tall and 60 dwarf among 240 offspring, a clean 3:1, confirming the parent was heterozygous Tt."
        },
        {
          "title": "Sex Determination and Inherited Conditions",
          "content": "Most human chromosomes are homologous in both sexes, but the pair that decides sex, the sex chromosomes, does not match. A woman carries two X chromosomes (XX) and a man carries one X and one Y (XY). Every egg made in meiosis therefore carries an X, since that is the only sex chromosome a mother has to give. The sperm, however, are of two kinds: half carry an X and half carry a Y. If an X-bearing sperm fertilises the egg the child is XX and female; if a Y-bearing sperm does so the child is XY and male. Because the two sperm types are produced in about equal numbers, the chance of a boy and the chance of a girl are each about one half, and the father's sperm is what determines the sex. Inheritance can also carry disease. Sickle-cell is controlled by two alleles, A for normal haemoglobin and S for sickle haemoglobin; a person who is AS has the trait and is usually well, but a person who is SS has sickle-cell anaemia. Two AS parents cross to give 1 AA : 2 AS : 1 SS, so each pregnancy carries a one-in-four risk of an affected child. Some conditions are carried on the X chromosome and appear chiefly in boys; haemophilia, in which the blood clots poorly, is the classic X-linked example, and colour blindness works the same way.",
          "bulletPoints": [
            "Females are XX, males are XY; every egg carries X, sperm carry X or Y.",
            "The sperm determines sex, and the boy-to-girl ratio is about 1 to 1.",
            "Sickle-cell SS causes disease; AS gives the carrier trait and is usually healthy.",
            "AS x AS gives 1 AA : 2 AS : 1 SS, a 1-in-4 risk of disease at each birth.",
            "Haemophilia and red-green colour blindness are carried on the X chromosome."
          ],
          "keyTakeaway": "A carrier parent can pass a recessive disease allele unseen, and the 1-in-4 sickle-cell risk applies to each separate pregnancy.",
          "realWorldExample": "Two healthy AS teachers considering marriage are counselled at a Ghanaian clinic that each of their children would face a 25% chance of sickle-cell disease, so they plan accordingly."
        },
        {
          "title": "Variation and Mutation",
          "content": "Even in one family no two children are identical, and that spread of difference is variation. Biologists sort it into two clean kinds. Continuous variation runs gradually through a range with no separate categories: height, body mass and skin colour in humans are measured and plotted as a smooth bell-shaped curve, with most individuals near the middle and fewer at the extremes. Discontinuous variation falls into a small number of distinct types with nothing in between: blood group, the ability to roll the tongue, or sex itself are named, counted and drawn as separate bars. The causes differ too. Continuous characters are usually polygenic, controlled by several genes working together, and strongly modified by the environment, while discontinuous characters are governed by one or a few genes and are little affected by conditions. The ultimate source of all new alleles is mutation, a sudden change in the DNA of a gene, or in the number or structure of the chromosomes. Many mutations are harmful, most are neutral, and a rare few give an advantage and can be passed on. Sickle-cell anaemia is a gene mutation that changes one haemoglobin allele, while Down syndrome is a chromosome change in which an extra copy of chromosome 21 appears after non-disjunction during meiosis.",
          "bulletPoints": [
            "Continuous variation, such as height, shows a range and plots as a bell curve.",
            "Discontinuous variation, such as blood group, shows separate types with no intermediates.",
            "Continuous characters are polygenic and environmentally modified; discontinuous ones are gene-determined.",
            "Mutation is a sudden change in a gene or in chromosome number, the source of new alleles.",
            "Sickle-cell is a gene mutation; Down syndrome is an extra chromosome 21 from non-disjunction."
          ],
          "keyTakeaway": "Decide first whether a character is measured (continuous) or sorted into named types (discontinuous); the answer chooses the graph and the explanation.",
          "realWorldExample": "A senior-high class records the blood groups of its students and the ability to roll the tongue, finds fixed categories with no in-between, and identifies both as discontinuous variation."
        }
      ],
      "commonMistakes": [
        "Giving the phenotypic ratio of a monohybrid cross as 1:2:1; that is the genotypic ratio, and the phenotype ratio is 3:1.",
        "Working a cross without showing the parental genotypes or the gametes, so there is no method to mark even if the final ratio is right.",
        "Believing a dominant allele is the more common one; dominance describes what shows in the heterozygote, not how frequent the allele is in the population.",
        "Saying the mother determines the sex of the child; the mother only ever gives an X, and it is the father's X or Y sperm that decides.",
        "Thinking two healthy AS carrier parents cannot have an affected child; each pregnancy still carries a one-in-four chance of SS."
      ],
      "wassceExamTips": [
        "In Paper 2 always write the parents, circle the gametes, then draw and fill the Punnett square; method marks follow the working, not the answer alone.",
        "Label each generation P1, F1 or F2, and state the ratio asked for, phenotypic or genotypic, in its own line so the examiner can see it.",
        "For a test-cross question remember the partner is homozygous recessive; all-dominant offspring show the unknown was homozygous, a 1:1 split shows it was heterozygous.",
        "Treat a probability such as 1/4 or 1/2 as the chance for each pregnancy separately; do not add the chances across several children.",
        "In Paper 1 define allele, genotype, phenotype, homozygous and mutation in the exact short wording you have learned, since marks are on the precise term."
      ],
      "summaryChecklist": [
        "Can I explain how meiosis halves the chromosome number and creates variation?",
        "Can I define allele, dominant, recessive, genotype, phenotype and homozygous without confusing them?",
        "Can I draw a labelled Punnett square for a monohybrid cross and give both ratios?",
        "Can I use a test cross to reveal an unknown genotype and explain how a father's sperm sets the sex?",
        "Can I separate continuous from discontinuous variation and name one gene and one chromosome mutation?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-genetics-1",
        "title": "Monohybrid Cross of Two Heterozygous Tall Peas",
        "problem": "In the garden pea the allele for tallness (T) is dominant over the allele for dwarfness (t). Two heterozygous tall plants (Tt) are crossed. Using a Punnett square, find the genotypic and phenotypic ratios of the offspring, and state how many of 240 seedlings you would expect to be tall and how many dwarf.",
        "stepByStepSolution": [
          "Step 1 (M1): Parents P1 = Tt (tall) x Tt (tall); each parent forms two kinds of gamete, T and t, in equal numbers.",
          "Step 2 (M1): Punnett square with male gametes T and t across the top and female gametes T and t down the side, filling the boxes to give TT, Tt, Tt and tt.",
          "Step 3 (M1): Read the genotypes from the four boxes: 1 TT : 2 Tt : 1 tt.",
          "Step 4 (A1): Read the phenotypes: TT and both Tt are tall and tt is dwarf, so the phenotypic ratio is 3 tall : 1 dwarf.",
          "Step 5 (M1): Fraction tall = 3/4 and fraction dwarf = 1/4; for 240 seedlings, tall = 240 x 3/4 = 180 and dwarf = 240 x 1/4 = 60.",
          "Step 6 (A1): Final answer: genotypic ratio 1 TT : 2 Tt : 1 tt, phenotypic ratio 3 tall : 1 dwarf; of 240 seedlings expect 180 tall and 60 dwarf."
        ],
        "keyTakeaway": "A cross of two heterozygotes gives 3:1 in appearance but 1:2:1 in genotype, so the recessive type reappears although neither parent looked dwarf."
      },
      {
        "id": "ex-bio-genetics-2",
        "title": "Sickle-Cell Monohybrid Cross of Two Carriers",
        "problem": "Sickle-cell haemoglobin has two alleles, A (normal) and S (sickle); SS gives sickle-cell anaemia and AS gives the carrier trait. A man and a woman who are both AS plan a family. Using a cross, give the genotypic and phenotypic ratios of their children, the probability that their next child has sickle-cell anaemia, and the expected classes among 200 children.",
        "stepByStepSolution": [
          "Step 1 (M1): Parents P1 = AS x AS; each parent forms gametes A and S in equal numbers.",
          "Step 2 (M1): Punnett square with male gametes A and S across the top and female gametes A and S down the side, giving the boxes AA, AS, AS and SS.",
          "Step 3 (M1): Read the genotypes: 1 AA : 2 AS : 1 SS.",
          "Step 4 (A1): Read the phenotypes: AA normal, AS carrier (sickle-cell trait), SS sickle-cell anaemia, so the ratio is 1 normal : 2 carriers : 1 affected.",
          "Step 5 (M1): Probability the next child is affected (SS) = 1/4 = 25%; for 200 children, AA = 200 x 1/4 = 50, AS = 200 x 1/2 = 100, SS = 200 x 1/4 = 50.",
          "Step 6 (A1): Final answer: genotypes 1 AA : 2 AS : 1 SS; each child has a 1-in-4 (25%) chance of sickle-cell anaemia; of 200 children about 50 normal, 100 carriers and 50 affected."
        ],
        "keyTakeaway": "Two healthy-looking carrier parents can have an affected child, and the 1-in-4 risk applies freshly to every pregnancy, not once in four families."
      }
    ],
    "quiz": {
      "id": "quiz-bio-heredity-genetics",
      "topicId": "shs2-bio-t2-heredity-variation-genetics",
      "title": "Heredity and Genetics Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-genetics-1",
          "quizId": "quiz-bio-heredity-genetics",
          "questionText": "Two heterozygous tall pea plants (Tt) are crossed. What is the phenotypic ratio of their offspring?",
          "optionA": "1 : 2 : 1",
          "optionB": "3 : 1",
          "optionC": "1 : 1",
          "optionD": "9 : 3 : 3 : 1",
          "correctOption": "B",
          "subConcept": "Monohybrid cross",
          "explanation": "Tt x Tt gives three tall to one dwarf, a 3:1 phenotypic ratio. The 1:2:1 in option A is the genotypic ratio, a frequent trap, and 9:3:3:1 belongs to a dihybrid cross, not this single character.",
          "remediationTip": "Always say which ratio is asked, phenotype or genotype, and draw the square to be sure."
        },
        {
          "id": "q-bio-genetics-2",
          "quizId": "quiz-bio-heredity-genetics",
          "questionText": "A test cross is used to find an unknown genotype by breeding the individual with a",
          "optionA": "homozygous dominant partner",
          "optionB": "heterozygous partner",
          "optionC": "homozygous recessive partner",
          "optionD": "member of another species",
          "correctOption": "C",
          "subConcept": "Test cross",
          "explanation": "A test cross mates the unknown with a homozygous recessive; an all-dominant result shows the unknown was homozygous, and a 1:1 result shows it was heterozygous. Crossing with a dominant partner would always hide the recessive alleles.",
          "remediationTip": "Remember the test cross partner is always the recessive type, never the dominant one."
        },
        {
          "id": "q-bio-genetics-3",
          "quizId": "quiz-bio-heredity-genetics",
          "questionText": "In humans, the sex of a child is determined by",
          "optionA": "which type of sperm, X-bearing or Y-bearing, fertilises the egg",
          "optionB": "the kind of X chromosome the mother's egg carries",
          "optionC": "the mother's diet during pregnancy",
          "optionD": "how many eggs are released in the cycle",
          "correctOption": "A",
          "subConcept": "Sex determination",
          "explanation": "Every egg carries an X, so the sperm decides: an X sperm gives a girl (XX), a Y sperm gives a boy (XY). Option B fails because the mother can only ever give an X, so she cannot determine sex.",
          "remediationTip": "Draw XX mother and XY father and mark the two sperm types to see why the ratio is 1:1."
        },
        {
          "id": "q-bio-genetics-4",
          "quizId": "quiz-bio-heredity-genetics",
          "questionText": "Both parents carry the sickle-cell trait (AS). What is the probability that one child has sickle-cell anaemia (SS)?",
          "optionA": "0%",
          "optionB": "50%",
          "optionC": "75%",
          "optionD": "25%",
          "correctOption": "D",
          "subConcept": "Inherited disease",
          "explanation": "The cross AS x AS gives 1 AA : 2 AS : 1 SS, so the SS affected class is 1 in 4, or 25%. The mistaken 0% answer comes from thinking two healthy parents cannot have an affected child, but each is a carrier.",
          "remediationTip": "Work the square and read the SS box; the affected chance is one quarter, not zero."
        },
        {
          "id": "q-bio-genetics-5",
          "quizId": "quiz-bio-heredity-genetics",
          "questionText": "Which of the following is an example of discontinuous variation?",
          "optionA": "Human height",
          "optionB": "Human ABO blood group",
          "optionC": "Body mass",
          "optionD": "Skin colour",
          "correctOption": "B",
          "subConcept": "Variation",
          "explanation": "Blood group falls into a few distinct types with no intermediates, so it is discontinuous. Height, body mass and skin colour all run through a continuous range and are measured, making them continuous variation.",
          "remediationTip": "Ask whether the character is measured on a scale (continuous) or sorted into named groups (discontinuous)."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t2-nervous-system-sense-organs-hormones",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 9,
    "title": "The Nervous System, Sense Organs and Hormonal Control",
    "description": "The neuron and reflex arc, the brain, spinal cord, eye and ear, and the endocrine glands with feedback control of blood sugar, taught through Ghanaian classroom and daily-life examples.",
    "keyNotes": "• A nerve impulse travels dendrite to cell body to axon, crossing synapses by chemical transmitter in one direction only.\n• The reflex arc runs receptor, sensory neuron, relay neuron in the spinal cord, motor neuron, effector, with the brain informed only afterwards.\n• The cerebrum handles learning and speech, the cerebellum balance and coordination, the medulla automatic actions such as heartbeat and breathing.\n• The eye focuses by changing lens shape; the semicircular canals of the inner ear sense head position and balance.\n• Hormones are slow, blood-borne chemical messengers; insulin and glucagon hold blood sugar near its normal level by negative feedback.",
    "isFreeTrial": false,
    "isVip": true,
    "detailedNotes": {
      "topicId": "shs2-bio-t2-nervous-system-sense-organs-hormones",
      "title": "The Nervous System, Sense Organs and Hormonal Control",
      "overview": "This topic explains how the body receives, decides and responds: the nerve cell and the reflex arc, the central nervous system with the brain and spinal cord, the eye and ear as sense organs, and the endocrine glands whose hormones act more slowly but for longer, including the feedback loop that holds blood sugar steady.",
      "introduction": "When your hand touches a hot pot of soup on the stove, you have already pulled away before you feel the pain. That one second contains the whole topic: receptors, a sensory neuron, a spinal relay, a motor neuron, a muscle effector, and the brain arriving late to the party. Study the wiring first, then the master control centres and sense organs, and finally the hormonal second communication network that runs mood, growth, sugar and water balance in the background of every school day.",
      "realWorldContext": "Teachers of the topic use local hooks: drivers in trotro traffic braking on a reflex, the kiosk cook who never burns his fingers because conditioned responses are faster with practice, and the student with uncorrected short-sightedness who cannot read the last row of the exercise book in a Kumasi classroom. Goitre from iodine shortage was once common in northern Ghana before iodised salt, and diabetes care at hospitals such as Korle Bu shows hormonal control going wrong.",
      "objectives": [
        "Describe the structure of a neuron and how an impulse crosses a synapse.",
        "Trace a reflex arc from receptor to effector and contrast reflex and voluntary actions.",
        "Relate the parts of the brain, the spinal cord, the eye and the ear to their functions.",
        "Name the major endocrine glands and their hormones and explain negative feedback in blood sugar control."
      ],
      "sections": [
        {
          "title": "The Neuron, the Impulse and the Reflex Arc",
          "content": "The nervous system is built from neurons. A sensory neuron carries impulses from a receptor toward the central nervous system, a motor neuron carries commands from the central nervous system to an effector, and a relay neuron connects the two inside the spinal cord. Each neuron has a cell body with the nucleus, short branched dendrites that receive impulses, and a long axon, often sheathed in myelin, that conducts the impulse as an electrical change along the membrane. Myelinated fibres conduct quickly, tens of metres per second, bare fibres much more slowly. At the end of a fibre the impulse cannot jump the gap to the next cell; instead the gap, the synapse, releases a chemical transmitter that carries the signal across in one direction only, which is why impulses flow receptor to effector and never backward. A reflex is the fastest protective pathway: the finger touches the hot pot, pain receptors fire, the sensory neuron enters the spinal cord, a relay neuron passes the impulse to a motor neuron, and the arm muscle contracts before the brain has been informed. Voluntary actions differ because the impulse reaches the brain, is processed with memory and intention, and only then does a command travel back down.",
          "bulletPoints": [
            "Sensory neurons enter the cord, motor neurons leave it, relay neurons join them inside.",
            "The impulse is electrical along the axon and chemical across the synapse, one-way only.",
            "Reflexes are innate, fast and protective; the brain learns of them after the response.",
            "Myelin speeds conduction; the delay at synapses explains why longer arcs take measurably longer."
          ],
          "keyTakeaway": "A reflex arc is a hard-wired shortcut through the spinal cord that protects the body before conscious thought arrives.",
          "realWorldExample": "A kitchen helper in Accra lifts a pot from the charcoal pot with a wet cloth after once burning her bare hand; the withdrawal was reflex, the cloth is learned prevention."
        },
        {
          "title": "The Central Nervous System, the Eye and the Ear",
          "content": "The central nervous system is brain plus spinal cord. In the cerebrum sit the centres for memory, reasoning, speech and conscious sensation; the cerebellum coordinates movement and keeps balance and posture, which is why a child learning to ride an aboboyaa bicycle wobbles at first; the medulla oblongata runs automatic life work such as heartbeat, breathing rate and swallowing. The spinal cord is both the highway of impulses to and from the brain and the centre of several reflex arcs, and it is protected by the vertebral column, the meninges and cerebrospinal fluid. The eye registers light through the cornea, adjustable pupil, iris, lens and the retina lining the back of the eyeball. Focusing on near objects is accommodation: the ciliary muscles contract, the suspensory ligaments slacken and the lens becomes more rounded and refractive; distant viewing reverses all three. Defects have simple corrections: short-sightedness needs a diverging lens, long-sightedness a converging one, and astigmatism a cylindrical lens. The ear converts sound vibrations in the cochlea of the inner ear into impulses and, through the semicircular canals, informs the brain of head position and balance, working with the cerebellum.",
          "bulletPoints": [
            "Cerebrum: learning, speech, conscious sensation. Cerebellum: balance and coordination. Medulla: automatic actions.",
            "The spinal cord carries impulses and runs reflexes; the vertebrae, meninges and fluid protect it.",
            "Accommodation changes lens shape; the retina holds light receptors and the blind spot is where the optic nerve leaves.",
            "The cochlea hears and the semicircular canals sense balance and head position."
          ],
          "keyTakeaway": "The central nervous system is a layered command post: the medulla keeps you alive, the cerebellum keeps you steady, the cerebrum keeps you thinking.",
          "realWorldExample": "A Form 1 pupil who squints at the blackboard across a crowded classroom is likely short-sighted; a simple diverging lens restores his sight and his grades."
        },
        {
          "title": "Endocrine Glands and Feedback Control",
          "content": "The second communication network is the endocrine system: ductless glands that pour hormones straight into the blood. The pituitary body at the base of the brain releases growth hormone and acts as a master gland by driving other glands with tropic hormones. The thyroid in the neck secretes thyroxine, which needs iodine and sets the pace of metabolism; too little iodine enlarges the gland into a goitre. The adrenal glands release adrenaline for the emergency fight-or-flight response, raising heart rate and blood glucose. The pancreas carries islets of Langerhans: beta cells release insulin when blood sugar rises after a meal, urging the liver to turn glucose into glycogen, while low sugar switches on glucagon, which reverses the process and releases glucose back into the blood. This is negative feedback: the effect itself shuts off the cause, holding blood sugar in a narrow band. The gonads secrete the sex hormones oestrogen, progesterone and testosterone. Nervous and hormonal control contrast cleanly: nerve signals are fast, short-lived and travel along fibres; hormones are slower, longer-lasting and travel in blood to target organs.",
          "bulletPoints": [
            "Pituitary: growth and master control. Thyroid: thyroxine, needs iodine. Adrenals: adrenaline. Pancreas: insulin and glucagon. Gonads: sex hormones.",
            "Insulin lowers blood glucose after a meal; glucagon raises it during exercise or hunger.",
            "Negative feedback means the response reduces the stimulus that started it.",
            "Nervous control is rapid and brief; hormonal control is slower and longer lasting."
          ],
          "keyTakeaway": "Hormones are the body's chemical letters, and negative feedback is the postage system that keeps every letter from piling up.",
          "realWorldExample": "After a large meal of kenkey with groundnut soup, a student's blood sugar peaks and then returns steadily to normal without thought, thanks to insulin at work."
        }
      ],
      "commonMistakes": [
        "Drawing a reflex arc without a relay neuron in the spinal cord, or placing the relay in the brain.",
        "Saying the ciliary muscles relax when focusing on near objects; for near vision they contract and the lens rounds up.",
        "Confusing the nerve and the hormone pathways: adrenaline is hormonal and blood-borne, a withdrawal impulse is nervous.",
        "Writing that insulin is produced by the liver; the pancreas secretes insulin and the liver is one of the organs it acts on."
      ],
      "wassceExamTips": [
        "Label neuron diagrams with dendrite, cell body, axon and myelin sheath, and state the direction of impulse flow in words.",
        "For a reflex question, name all five components in order and add that the response occurs before the impulse reaches the brain.",
        "Pair each gland with its hormone and one disorder; examiners award marks in couples such as pancreas-insulin-diabetes.",
        "When asked to compare nervous and hormonal control, give at least three points of contrast in a table."
      ],
      "summaryChecklist": [
        "I can diagram a multipolar neuron and name each part.",
        "I can trace a reflex arc through receptor, sensory, relay, motor and effector.",
        "I can state the functions of the cerebrum, cerebellum and medulla.",
        "I can explain accommodation of the eye and correct common defects with named lenses.",
        "I can describe insulin and glucagon in negative feedback control of blood sugar."
      ]
    },
    "examples": [
      {
        "id": "ex-biology-nervous-system-sense-organs-hormones-1",
        "title": "Timing a withdrawal reflex",
        "problem": "In a withdrawal reflex the sensory neuron path is 1.5 m and the motor neuron path is 1.0 m; impulses travel at 50 m per second and there are two synapses, each adding 0.001 s. How long does the whole reflex take?",
        "stepByStepSolution": [
          "Sensory conduction time = distance / speed = 1.5 / 50 = 0.03 s (M1) (A1)",
          "Motor conduction time = 1.0 / 50 = 0.02 s (M1) (A1)",
          "Synapse delay = 2 x 0.001 = 0.002 s (M1)",
          "Total reflex time = 0.03 + 0.02 + 0.002 = 0.052 s (A1)"
        ],
        "keyTakeaway": "Reflex time is conduction time along both neurons plus the small but real delays at the synapses inside the spinal cord."
      },
      {
        "id": "ex-biology-nervous-system-sense-organs-hormones-2",
        "title": "Blood sugar returning to normal after a meal",
        "problem": "One hour after a meal of kenkey a student's blood glucose reads 180 mg per 100 mL and two hours later it has fallen back to 90 mg per 100 mL. What is the fall in value and what percentage of the peak has been removed?",
        "stepByStepSolution": [
          "Fall = 180 - 90 = 90 mg per 100 mL (M1) (A1)",
          "Percentage removed = fall / peak x 100 = 90 / 180 x 100 (M1)",
          "= 0.5 x 100 = 50 percent (A1)",
          "Insulin drove this fall by promoting conversion of glucose to glycogen in the liver (A1)"
        ],
        "keyTakeaway": "Negative feedback halves the excess here; the same arithmetic of change divided by starting value works for any glucose graph."
      }
    ],
    "quiz": {
      "id": "quiz-biology-nervous-system-sense-organs-hormones",
      "topicId": "shs2-bio-t2-nervous-system-sense-organs-hormones",
      "title": "The Nervous System, Sense Organs and Hormonal Control",
      "timeLimitMinutes": 10,
      "passScorePercentage": 60,
      "questions": [
        {
          "id": "q-biology-nervous-system-sense-organs-hormones-1",
          "quizId": "quiz-biology-nervous-system-sense-organs-hormones",
          "questionText": "The correct sequence of components in a reflex arc is",
          "optionA": "receptor, motor neuron, sensory neuron, relay neuron, effector",
          "optionB": "effector, sensory neuron, relay neuron, motor neuron, receptor",
          "optionC": "receptor, relay neuron, sensory neuron, effector, motor neuron",
          "optionD": "receptor, sensory neuron, relay neuron, motor neuron, effector",
          "correctOption": "D",
          "explanation": "The impulse starts at the receptor, travels in on the sensory neuron, crosses a relay neuron in the spinal cord, leaves on the motor neuron and ends at the effector.",
          "subConcept": "Reflex arc",
          "remediationTip": "Draw the arc for touching a hot surface and write each stage in order on the diagram."
        },
        {
          "id": "q-biology-nervous-system-sense-organs-hormones-2",
          "quizId": "quiz-biology-nervous-system-sense-organs-hormones",
          "questionText": "The part of the brain that coordinates balance, posture and smooth muscle movement is the",
          "optionA": "cerebrum",
          "optionB": "cerebellum",
          "optionC": "medulla oblongata",
          "optionD": "pituitary body",
          "correctOption": "B",
          "explanation": "The cerebellum keeps balance and coordinates movement. The cerebrum handles conscious thought, the medulla runs automatic actions and the pituitary is an endocrine gland.",
          "subConcept": "Brain regions",
          "remediationTip": "Match each brain part to one verb: thinking, coordinating, keeping alive, directing glands."
        },
        {
          "id": "q-biology-nervous-system-sense-organs-hormones-3",
          "quizId": "quiz-biology-nervous-system-sense-organs-hormones",
          "questionText": "The hormone that lowers blood glucose concentration after a meal is",
          "optionA": "insulin",
          "optionB": "adrenaline",
          "optionC": "thyroxine",
          "optionD": "growth hormone",
          "correctOption": "A",
          "explanation": "Insulin from the pancreatic islets urges the liver to store glucose as glycogen. Adrenaline raises blood sugar, thyroxine sets metabolic rate and growth hormone drives growth.",
          "subConcept": "Blood sugar feedback",
          "remediationTip": "Write the pair insulin-lowers and glucagon-raises on a card and test yourself on the fed and fasting states."
        },
        {
          "id": "q-biology-nervous-system-sense-organs-hormones-4",
          "quizId": "quiz-biology-nervous-system-sense-organs-hormones",
          "questionText": "When the eye focuses on a near object, what happens?",
          "optionA": "The ciliary muscles relax and the lens flattens.",
          "optionB": "The suspensory ligaments tighten and the lens is pulled thin.",
          "optionC": "The ciliary muscles contract, ligaments slacken and the lens becomes more rounded.",
          "optionD": "The pupil widens and the cornea changes its curvature.",
          "correctOption": "C",
          "explanation": "For near vision the ciliary muscles contract, releasing tension on the suspensory ligaments so the lens thickens and refracts more strongly.",
          "subConcept": "Accommodation",
          "remediationTip": "Compare near and far vision in a two-column table of muscle, ligament and lens states."
        },
        {
          "id": "q-biology-nervous-system-sense-organs-hormones-5",
          "quizId": "quiz-biology-nervous-system-sense-organs-hormones",
          "questionText": "The junction at which a chemical transmitter carries an impulse from one neuron to the next is called the",
          "optionA": "axon terminal only",
          "optionB": "myelin gap",
          "optionC": "dendrite branch",
          "optionD": "synapse",
          "correctOption": "D",
          "explanation": "The gap where transmitter chemicals cross is the synapse; it makes impulse flow one-way. The gaps in myelin are nodes of Ranvier, not junctions between cells.",
          "subConcept": "Synaptic transmission",
          "remediationTip": "Sketch two neuron endings across a gap and label transmitter, cleft and receptor."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t2-reproduction-ii-pregnancy-infant-care",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 10,
    "title": "Human Reproduction, Pregnancy and Infant Care",
    "description": "Reproductive organs and the menstrual cycle, fertilisation and implantation, the placenta and antenatal care in Ghana, birth, breastfeeding and family planning methods.",
    "keyNotes": "• Sperm are made in the testes seminiferous tubules and eggs in the ovaries; fertilisation normally occurs in the oviduct.\n• Ovulation falls roughly fourteen days before the next period, so a 28-day cycle ovulates about day 14 and a 35-day cycle about day 21.\n• The placenta and umbilical cord exchange nutrients, gases and wastes between mother and fetus without direct mixing of their blood.\n• Antenatal care in Ghana includes booking, tetanus toxoid, malaria prevention, iron and folate, and rhesus screening with anti-D where needed.\n• Colostrum is rich in antibodies and exclusive breastfeeding is recommended for the first six months; family planning ranges from barrier to surgical methods.",
    "isFreeTrial": false,
    "isVip": true,
    "detailedNotes": {
      "topicId": "shs2-bio-t2-reproduction-ii-pregnancy-infant-care",
      "title": "Human Reproduction, Pregnancy and Infant Care",
      "overview": "This topic covers the organs and cells of human reproduction, the monthly cycle and the fertile window, the journey from fertilisation to implantation and the placenta, the antenatal care programme a Ghanaian mother receives, and the practical questions of delivery, breastfeeding and family planning.",
      "introduction": "Reproduction is the one life process an individual can survive without, yet no community survives without it. This topic therefore links cell biology to public health: gamete structure, the hormonal cycle, implantation, the placenta as a selective exchange organ, and the maternity services of Ghana that keep mother and child alive. Work the cycle arithmetic first because ovulation timing, due-date counting and the fertile window are all number questions in disguise.",
      "realWorldContext": "Ghana's reproductive health system is a living textbook. Pregnant women book at a health centre within the first months and receive tetanus toxoid, intermittent preventive treatment against malaria, iron and folate supplements, and prevention-of-mother-to-child-transmission services for HIV; the national programme also screens newborns for sickle-cell disease. Morbidity and mortality among mothers remain concentrated where booking is late, which is why exam questions on antenatal care always carry marks for explaining each intervention.",
      "objectives": [
        "Name the principal male and female reproductive organs and state the function of each.",
        "Describe the menstrual cycle phases and identify the day of ovulation in cycles of given length.",
        "Explain fertilisation, implantation and the roles of placenta, umbilical cord and amniotic fluid.",
        "Discuss antenatal care in Ghana, the rhesus problem, breastfeeding and the main family planning methods with their merits."
      ],
      "sections": [
        {
          "title": "Reproductive Organs, Gametes and the Menstrual Cycle",
          "content": "The testes hang in the scrotum, which holds them about two degrees below body temperature because sperm formation needs cool conditions; inside, the seminiferous tubules produce sperm, tiny cells with a head carrying the nucleus, a midpiece packed with mitochondria for energy and a tail for swimming. The ovaries each hold immature ova; at birth a girl already has her lifetime supply. From puberty, about every twenty-eight days a small immature follicle ripens under follicle-stimulating hormone, its cells release oestrogen that rebuilds the uterine lining, and a surge of luteinising hormone about fourteen days before the next period expels one ovum: ovulation. The emptied follicle becomes the corpus luteum, secreting progesterone that keeps the lining thick and suppresses new cycles; if no pregnancy follows, the corpus luteum degenerates, progesterone falls, the lining is shed as menstrual flow and the cycle restarts. Because sperm can survive about five days in the fertile tract and the ovum about one day, the fertile window spans roughly the five days before ovulation and the day after it, a fact both couples planning pregnancies and those avoiding them should know.",
          "bulletPoints": [
            "Sperm structure: nucleus-carrying head, mitochondria-rich midpiece, swimming tail; production needs the cooler scrotum.",
            "Oestrogen rebuilds the endometrium; the LH surge triggers ovulation about fourteen days before the next period.",
            "Progesterone from the corpus luteum maintains the lining until the end of the second half of the cycle.",
            "The fertile window runs about five days before ovulation to one day after it."
          ],
          "keyTakeaway": "The cycle is a hormone clock: oestrogen builds, LH releases, progesterone maintains, and their fall brings the flow and a new round.",
          "realWorldExample": "A nurse at a district hospital asks a woman her last regular menstrual start to date a pregnancy, because the ovulation day is always about fourteen days before the next expected flow."
        },
        {
          "title": "Fertilisation, Implantation, the Placenta and Antenatal Care",
          "content": "Fertilisation usually occurs in the oviduct, where one sperm nucleus fuses with the ovum nucleus to form a diploid zygote that immediately divides as it drifts toward the uterus. Five to seven days later the multicellular embryo buries itself in the thick endometrium: implantation. From the uterine and embryonic tissues together grows the placenta, the exchange organ of pregnancy: oxygen, glucose, amino acids, vitamins and antibodies pass toward the fetus while carbon dioxide and urea pass toward the mother's blood for disposal, and the umbilical cord carries this traffic between placenta and fetus. Most harmful molecules are slowed by the placental barrier, but alcohol, nicotine and the viruses of rubella and HIV cross it, which is why an expectant mother is counselled against smoking, drinking and untreated infection. The amniotic fluid around the fetus cushions shocks, steadies temperature and allows movement. Antenatal care in Ghana follows a clear schedule: early booking with dating, blood pressure and urine checks for pre-eclampsia, tetanus toxoid, intermittent preventive treatment for malaria in pregnancy, iron and folate supplements, screening for HIV with prevention of mother-to-child transmission services, and rhesus typing with anti-D injection for Rh-negative mothers so that a later Rh-positive baby is not attacked by the mother's antibodies.",
          "bulletPoints": [
            "Fertilisation is in the oviduct; implantation is into the endometrium about a week later.",
            "The placenta exchanges nutrients, gases and wastes; the cord links it to the fetus; the two blood supplies do not freely mix.",
            "Amniotic fluid cushions, insulates and permits movement.",
            "Antenatal care covers dating, blood pressure, tetanus toxoid, malaria prevention, iron and folate, HIV services and rhesus management."
          ],
          "keyTakeaway": "The placenta is a selective exchange post, not a shield: it feeds the baby and cannot block alcohol, nicotine or certain viruses.",
          "realWorldExample": "An Rh-negative woman at La General Hospital receives anti-D after her first Rh-positive birth so that antibodies will not endanger her next pregnancy."
        },
        {
          "title": "Delivery, Breastfeeding and Family Planning",
          "content": "Childbirth begins when oxytocin triggers regular uterine contractions that dilate the cervix; the fetus is then delivered and the afterbirth follows. Cutting the cord starts independent breathing and circulation, and clean delivery practice with a clean blade and cord care prevents neonatal tetanus, one of the reasons antenatal toxoid matters. For the newborn, the breast supplies the best food: the first secretion, colostrum, is thick, yellow and loaded with antibodies that protect the gut and airways in the first vulnerable days; mature milk then provides balanced nutrients in the exact proportion an infant can digest, and the World Health Organisation advises exclusive breastfeeding for the first six months before complementary foods such as mashed ripe plantain and enriched pap are added. Family planning lets parents decide the number and spacing of children. Barrier methods such as condoms also shield against sexually transmitted infection; hormonal pills and injections and the intrauterine device suppress or prevent implantation; natural methods abstaining around the fertile window are inexpensive but unreliable with irregular cycles; vasectomy in the man and tubal ligation in the woman are surgical and permanent and suit families certain they are complete. The choice is personal, and accurate counselling, not pressure, is the ethical standard taught in Ghana's health services.",
          "bulletPoints": [
            "Oxytocin drives labour contractions; clean cord care prevents neonatal tetanus.",
            "Colostrum is antibody-rich; exclusive breastfeeding is recommended for about six months.",
            "Condoms prevent both pregnancy and sexually transmitted infection; natural methods are cheap but fallible.",
            "Vasectomy and tubal ligation are permanent surgical options for completed families."
          ],
          "keyTakeaway": "Spacing and planning protect mothers and children: fewer, wanted, healthier pregnancies are the goal of every method.",
          "realWorldExample": "A mother of two in Sunyani attends the family welfare society clinic and, counselled on her choices, begins injectable spacing so her next pregnancy comes at a safer interval."
        }
      ],
      "commonMistakes": [
        "Placing fertilisation in the uterus; fertilisation occurs in the oviduct and the embryo implants later in the uterus.",
        "Subtracting fourteen from the wrong side when dating ovulation; ovulation is about fourteen days before the next period, not fourteen days after its start in long cycles.",
        "Saying maternal and fetal blood mix in the placenta; exchange occurs across barriers without free mixing of the two circulations.",
        "Describing colostrum as thin watery milk; it is thick, yellow and antibody-rich, and it is exactly what the newborn needs."
      ],
      "wassceExamTips": [
        "For cycle questions, draw one circle for the twenty-eight days, mark bleeding days 1 to 5 and ovulation near day 14, and label oestrogen and progesterone on the halves.",
        "State the site of fertilisation and the site of implantation as two separate facts; markers award both.",
        "List antenatal services with a purpose for each, for example tetanus toxoid preventing neonatal tetanus.",
        "When discussing family planning, give at least one advantage and one limitation per named method, and note the condom's double protection."
      ],
      "summaryChecklist": [
        "I can name the main organs of both sexes and state what each produces.",
        "I can describe the menstrual cycle hormones and find the ovulation day for any cycle length.",
        "I can explain fertilisation, implantation and the exchange roles of placenta and cord.",
        "I can list the components of Ghanaian antenatal care and explain the rhesus problem.",
        "I can justify breastfeeding with colostrum and compare at least four family planning methods."
      ]
    },
    "examples": [
      {
        "id": "ex-biology-reproduction-ii-pregnancy-infant-care-1",
        "title": "Ovulation day and fertile window in a 35-day cycle",
        "problem": "A woman regularly ovulates about fourteen days before the start of her next period. If her cycle length is 35 days, on which day does ovulation occur, and what is the approximate fertile window given sperm survival of five days and ovum survival of one day?",
        "stepByStepSolution": [
          "Ovulation day = cycle length - 14 (M1)",
          "= 35 - 14 = day 21 (A1)",
          "Fertile opening = 21 - 5 = day 16 (M1) (sperm deposited earlier can survive)",
          "Fertile close = 21 + 1 = day 22 (A1) (ovum survives about a day)",
          "Fertile window: about days 16 to 22 of the cycle (A1)"
        ],
        "keyTakeaway": "Always count ovulation backward from the next period; the fertile window is the five days before it plus the day after."
      },
      {
        "id": "ex-biology-reproduction-ii-pregnancy-infant-care-2",
        "title": "Counting the remaining weeks of a pregnancy",
        "problem": "Human pregnancy is counted as 280 days from the first day of the last menstrual period. At a clinic visit a woman is found to be 12 weeks and 3 days pregnant. How many days remain until the estimated delivery date, expressed in weeks and days?",
        "stepByStepSolution": [
          "Days elapsed = 12 x 7 + 3 = 84 + 3 = 87 days (M1) (A1)",
          "Days remaining = 280 - 87 = 193 days (M1) (A1)",
          "Weeks remaining = 193 / 7 = 27 weeks with 193 - 27 x 7 = 193 - 189 = 4 days left (A1)",
          "The estimated delivery date is about 27 weeks and 4 days after the visit (A1)"
        ],
        "keyTakeaway": "Convert everything to days first, subtract from the 280-day count, and only then convert back to weeks and days."
      }
    ],
    "quiz": {
      "id": "quiz-biology-reproduction-ii-pregnancy-infant-care",
      "topicId": "shs2-bio-t2-reproduction-ii-pregnancy-infant-care",
      "title": "Human Reproduction, Pregnancy and Infant Care",
      "timeLimitMinutes": 10,
      "passScorePercentage": 60,
      "questions": [
        {
          "id": "q-biology-reproduction-ii-pregnancy-infant-care-1",
          "quizId": "quiz-biology-reproduction-ii-pregnancy-infant-care",
          "questionText": "In normal human reproduction, fertilisation of the ovum takes place in the",
          "optionA": "uterus",
          "optionB": "ovary",
          "optionC": "oviduct (fallopian tube)",
          "optionD": "cervix",
          "correctOption": "C",
          "explanation": "Sperm meet the ovum in the oviduct; the resulting embryo then travels and implants in the uterine lining about a week later.",
          "subConcept": "Fertilisation and implantation",
          "remediationTip": "Sketch the ovary, oviduct and uterus and mark where fertilisation and implantation each happen."
        },
        {
          "id": "q-biology-reproduction-ii-pregnancy-infant-care-2",
          "quizId": "quiz-biology-reproduction-ii-pregnancy-infant-care",
          "questionText": "The hormone chiefly responsible for maintaining the thick uterine lining in the second half of the menstrual cycle is",
          "optionA": "progesterone",
          "optionB": "follicle-stimulating hormone",
          "optionC": "oxytocin",
          "optionD": "adrenaline",
          "correctOption": "A",
          "explanation": "Progesterone from the corpus luteum maintains the endometrium. FSH ripens follicles, oxytocin acts in labour and adrenaline is the emergency hormone.",
          "subConcept": "Menstrual cycle hormones",
          "remediationTip": "Match FSH, oestrogen, LH and progesterone to the cycle phase each one rules."
        },
        {
          "id": "q-biology-reproduction-ii-pregnancy-infant-care-3",
          "quizId": "quiz-biology-reproduction-ii-pregnancy-infant-care",
          "questionText": "Colostrum is vital for the newborn primarily because it",
          "optionA": "contains more fat than any later milk will ever have",
          "optionB": "is rich in antibodies that protect the infant against infection",
          "optionC": "is produced in the largest volume of any secretion",
          "optionD": "permanently changes the infant blood group",
          "correctOption": "B",
          "explanation": "Its antibody content gives passive immunity to a system with no prior exposure. Its volume is small, which matches the tiny newborn stomach.",
          "subConcept": "Infant feeding",
          "remediationTip": "Compare colostrum and mature milk on colour, volume and antibody content."
        },
        {
          "id": "q-biology-reproduction-ii-pregnancy-infant-care-4",
          "quizId": "quiz-biology-reproduction-ii-pregnancy-infant-care",
          "questionText": "Rhesus disease of the newborn can arise when",
          "optionA": "both parents are rhesus positive",
          "optionB": "the mother is rhesus negative and the fetus is rhesus positive",
          "optionC": "the mother is rhesus positive and the fetus is rhesus negative",
          "optionD": "the father is rhesus negative and the mother is rhesus positive",
          "correctOption": "B",
          "explanation": "An Rh-negative mother sensitised by an Rh-positive first baby can make antibodies that destroy the red cells of a later Rh-positive fetus. Anti-D injection prevents this.",
          "subConcept": "Rhesus and antenatal care",
          "remediationTip": "Draw the first and second pregnancies with an Rh-negative mother and an Rh-positive fetus and show where the risk sits."
        },
        {
          "id": "q-biology-reproduction-ii-pregnancy-infant-care-5",
          "quizId": "quiz-biology-reproduction-ii-pregnancy-infant-care",
          "questionText": "Which family planning method is a permanent surgical procedure on the man?",
          "optionA": "oral contraceptive pills",
          "optionB": "the female condom",
          "optionC": "the intrauterine device",
          "optionD": "vasectomy",
          "correctOption": "D",
          "explanation": "Vasectomy cuts and ties the vas deferens so sperm are absent from the ejaculate; it is permanent and male. Pills and the device are female methods and reversible.",
          "subConcept": "Family planning",
          "remediationTip": "Sort the named methods into barrier, hormonal, device and surgical, and note which one also blocks infection."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t3-defence-immunity-lymphatic-system",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 5,
    "title": "Human Defence, Immunity and the Lymphatic System",
    "description": "skin and mucus barriers, white blood cells and phagocytosis, antigens and antibodies, active and passive immunity, the Expanded Programme on Immunisation in Ghana, HIV and immunity, blood grouping",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The body fights disease in a set of defences, first the barriers that keep pathogens out, then the cells and chemicals that deal with any that enter.\n• The skin is the first line: a tough, dry, waterproof barrier whose oil and sweat make the surface too acid for many microbes, and whose shedding carries microbes away.\n• Mucus lining the nose, throat and gut traps microbes; cilia sweep the trapped mucus up to be swallowed, and tears and saliva wash and disinfect surfaces.\n• Stomach acid kills most bacteria swallowed with food, and good gut bacteria crowd out harmful ones, all part of the non-specific defence.\n• If a pathogen passes the barriers, the body raises inflammation: the area swells, heats and reddens as blood flow and fluid increase, bringing defence cells to the site.\n• White blood cells, or leucocytes, are the mobile army; phagocytes engulf and digest microbes by phagocytosis, a non-specific response that works against many germs at once.\n• Lymphocytes are the specific army; they recognize a particular foreign substance and act against that one thing only.\n• Any substance that triggers an immune response is an antigen, usually a protein marker on the surface of a pathogen or of foreign cells.\n• Antibodies are Y-shaped proteins made by lymphocytes that bind to a matching antigen and neutralise it or clump it for removal; each antibody fits one antigen, the lock-and-key idea.\n• Immunity is the state of being protected against a specific pathogen, and it can be gained actively or passively.\n• Active immunity follows the body making its own antibodies, either after infection or after vaccination; it is slow to appear but long-lasting and involves memory cells.\n• Passive immunity is the receiving of ready-made antibodies, as a baby gets from mother through the placenta and breast milk, or through an antivenom injection; it is fast but short-lived.\n• Vaccination introduces a harmless form of an antigen so the body makes memory cells; on a later real infection these cells respond quickly and strongly, the secondary response.\n• In Ghana the Routine Immunisation service, built on the Expanded Programme on Immunisation (EPI), gives BCG, polio, DPT, measles and other vaccines to infants free of charge.\n• HIV attacks helper T-lymphocytes, so the specific immune response collapses; the person becomes vulnerable to opportunistic diseases such as tuberculosis and pneumonia that a healthy defence would control.\n• Blood grouping depends on antigens, the A and B markers, on the red cell surface and antibodies in the plasma; a mismatch in transfusion makes the donor cells clump, or agglutinate.\n• The ABO system gives four groups, A, B, AB and O; group O has no A or B antigen and can donate to all, group AB has both antigens and can receive from all, ignoring the Rhesus factor.\n• The lymphatic system returns leaked tissue fluid to the blood, absorbs food fats through lacteals, and houses lymph nodes full of lymphocytes that filter and fight infection.",
    "detailedNotes": {
      "overview": "This topic traces the body's layered defence against disease, from the skin and mucus that keep pathogens out, through inflammation and phagocytosis, to the specific attack of antigens and antibodies. You will contrast active and passive immunity, explain how vaccination works and why Ghana's immunisation programme protects infants, describe how HIV undermines immunity, and apply the antigen-antibody rules to blood grouping and safe transfusion. The lymphatic system appears as the transport and training ground for the immune cells.",
      "introduction": "Study the defences in the order a pathogen meets them, barrier, then non-specific cells, then specific lymphocytes, because that is the order examiners set structured questions. Draw a two-column table for active against passive immunity and a four-box grid for the ABO groups, filling in antigens and antibodies until they are second nature. For every numerical idea, such as vaccine coverage, practise writing the ratio as a percentage so the calculation is quick in the hall.",
      "realWorldContext": "At a maternal and child health post in Kumasi, a nurse records a baby's BCG and polio doses on the Road to Health card, the everyday face of the Expanded Programme on Immunisation that has cut child deaths across Ghana. In a district hospital at Ho, a cholera patient receives oral rehydration while the body's own defences clear the bacteria. Counsellors in Tamale explain to pregnant women how an HIV-positive mother can pass the virus to the baby, and how treatment protects both. Blood donors in Accra are typed for ABO and Rhesus before any unit leaves the national blood service.",
      "objectives": [
        "Describe the skin, mucus and other barriers that form the body's first line of defence",
        "Explain the roles of phagocytes and lymphocytes in non-specific and specific defence",
        "Distinguish antigens from antibodies and describe the lock-and-key relationship",
        "Contrast active and passive immunity and explain the basis of vaccination and the EPI",
        "Use ABO blood-group rules to explain safe transfusion and the danger of agglutination"
      ],
      "sections": [
        {
          "title": "Barriers and Non-Specific Defences",
          "content": "Most pathogens never reach the inside of the body because the barriers stop them. The skin is a broad, dry, waterproof wall; its oil and sweat keep the surface slightly acid, which many microbes cannot tolerate, and the constant shedding of the outer layer carries attached germs away. Where the skin gives way to openings, mucus takes over: the lining of the nose and throat secretes sticky mucus that traps dust and microbes, and tiny hair-like cilia beat the loaded mucus upward to be swallowed and destroyed by stomach acid, while tears and saliva wash exposed surfaces and contain substances that break down bacteria. Stomach acid is a powerful chemical barrier that kills most organisms swallowed with food or water. Once a pathogen does get past these walls, the body responds in a general way that is not aimed at any one germ. The injured tissue releases chemicals that widen nearby blood vessels, so the area becomes red, warm and swollen, which is inflammation; more fluid and more white blood cells arrive at the scene. Among them phagocytes move to the invaders, flow round them and engulf them into the cell, then digest them with enzymes, the process called phagocytosis. This non-specific response is quick and works against a wide range of microbes at once.",
          "bulletPoints": [
            "Skin: dry, waterproof, acidic surface, constant shedding; the primary barrier.",
            "Mucus traps microbes; cilia sweep it away; tears and saliva wash and disinfect.",
            "Stomach acid destroys most bacteria taken in with food and water.",
            "Inflammation increases blood flow and fluid to bring defence cells to a wound.",
            "Phagocytes engulf and digest pathogens by phagocytosis, a non-specific response."
          ],
          "keyTakeaway": "Before any antibody is made, the body relies on walls, washes and generalist cells to hold the line.",
          "realWorldExample": "A cook handling ready-to-eat food at a chop bar in Takoradi covers cuts on the hand because broken skin removes the first barrier and lets bacteria into the body and into the food alike."
        },
        {
          "title": "Antigens, Antibodies and Specific Immunity",
          "content": "When the non-specific defences are not enough, the specific system takes over, and it is built around recognition of foreign markers. Any substance that provokes an immune response is an antigen, usually a protein on the surface of a bacterium, virus or foreign cell. Each pathogen carries its own set of antigens, and the body reads them as not-self. Lymphocytes in the blood and lymph tissue respond to a particular antigen by making antibodies, Y-shaped proteins that fit that antigen the way a key fits one lock. An antibody binds to its matching antigen and neutralises it, or clumps many of them together so phagocytes can sweep them up, or marks them for destruction. The beauty of the specific system is memory. During a first infection some of the responding lymphocytes become memory cells that survive for years. Should the same antigen enter again, those memory cells divide rapidly and flood the blood with the correct antibody, a faster and larger secondary response, so the person often never feels ill. It is this memory that immunity, and vaccination, depend upon.",
          "bulletPoints": [
            "An antigen is a foreign substance, usually a protein, that triggers an immune response.",
            "Antibodies are Y-shaped proteins made by lymphocytes that bind a matching antigen.",
            "The antibody-antigen fit is specific, the lock-and-key relationship.",
            "Binding neutralises, clumps or marks pathogens for phagocytes to remove.",
            "Memory cells persist and give a fast, strong secondary response on re-infection."
          ],
          "keyTakeaway": "Specific immunity trades on one idea: recognise the antigen, make the matching antibody, remember it for next time.",
          "realWorldExample": "A child who has had measles once rarely gets it again, because memory lymphocytes made during the illness stand ready to destroy the measles antigen the moment it returns."
        },
        {
          "title": "Active and Passive Immunity and Vaccination",
          "content": "Immunity, the protected state, can be reached by two routes. In active immunity the body does the work itself and makes its own antibodies; this happens after a person recovers from a disease or after a vaccination, and because memory cells are produced the protection is slow to appear but lasts for years or a lifetime. In passive immunity the person receives ready-made antibodies and gains at once, but makes no memory, so the benefit fades in weeks or months. Natural passive immunity is the transfer of the mother's antibodies across the placenta to the unborn child and, in the first days, through the colostrum in breast milk, which is one reason early and exclusive breastfeeding matters in Ghana. Medical passive immunity is an injection of antiserum or antivenom, used when speed is vital, for example after a snake bite. Vaccination is active immunity given safely: a vaccine contains weakened or dead pathogens, or just their antigens, which cannot cause the disease but still train the lymphocytes to make memory cells. The Expanded Programme on Immunisation, carried out in Ghana as Routine Immunisation, uses this principle to protect infants against tuberculosis with BCG, polio, diphtheria, pertussis and tetanus with DPT, and measles, and coverage of a district is measured as the percentage of eligible children fully immunised.",
          "bulletPoints": [
            "Active immunity: the body makes its own antibodies; slow to start, long-lasting, gives memory.",
            "Passive immunity: ready-made antibodies are received; fast but short, no memory.",
            "Natural passive immunity: mother to baby via placenta and breast milk.",
            "A vaccine safely presents antigens to build memory without causing disease.",
            "The EPI gives BCG, polio, DPT and measles to Ghanaian infants; coverage is a percentage."
          ],
          "keyTakeaway": "Vaccination buys long-term active immunity cheaply, while antivenom and maternal antibodies give short-term passive cover.",
          "realWorldExample": "During a immunisation outreach at a village near Bolgatanga the team counts how many of the town's young children have all their doses, converting the tally into a coverage percentage for the district health directorate."
        },
        {
          "title": "HIV, the Lymphatic System and Blood Grouping",
          "content": "The human immunodeficiency virus is the feared exception because it attacks the very cells that run specific defence. HIV enters and destroys helper T-lymphocytes, the cells that coordinate the response of other lymphocytes and phagocytes, so the whole system weakens and eventually fails. A person with advanced HIV infection, AIDS, then falls victim to opportunistic diseases such as tuberculosis, pneumonia and certain cancers that a working immune system would have controlled, and it is these secondary infections rather than the virus alone that cause death. The lymphatic system is where much of this defence is organised: it returns the fluid that leaks from blood capillaries back to the circulation, absorbs digested fats through the lacteals of the small intestine, and carries lymph through nodes packed with lymphocytes that filter out and fight pathogens. The same antigen-antibody logic governs blood groups. Human red cells carry surface antigens, classed A and B, and the plasma carries antibodies against whichever antigen is absent. Group A has A antigens and anti-B antibodies, group B has B antigens and anti-A antibodies, group AB has both antigens and neither antibody, and group O has neither antigen but both antibodies. Transfusing mismatched blood lets the recipient's antibodies clump the donor red cells, agglutination, which can block vessels and be fatal, which is why matching before a transfusion in any Ghanaian hospital is not optional.",
          "bulletPoints": [
            "HIV destroys helper T-lymphocytes, collapsing specific immunity.",
            "AIDS patients die from opportunistic infections the healthy defence would resist.",
            "The lymphatic system returns tissue fluid, absorbs fats and houses lymph nodes.",
            "ABO groups are defined by red-cell antigens A and B and the matching plasma antibodies.",
            "Mismatched transfusion causes agglutination, so blood must be typed and matched."
          ],
          "keyTakeaway": "The immune system and the blood you transfuse both hinge on antigens meeting the wrong antibody, whether it is HIV or a bad donor unit.",
          "realWorldExample": "At the National Blood Service in Accra every donated unit is typed for ABO and Rhesus and cross-matched before issue, because a single incompatible transfusion triggers agglutination in the recipient."
        }
      ],
      "commonMistakes": [
        "Confusing antigens with antibodies, e.g. writing that the body makes antigens to fight antibodies; the antigen is the foreign trigger, the antibody is the defence protein.",
        "Calling vaccination passive immunity; a vaccine gives active immunity because the body makes its own antibodies and memory cells.",
        "Saying antibiotics kill viruses; antibiotics act on bacteria, and no antibiotic cures a viral disease such as measles or HIV.",
        "Giving group O as a universal receiver; O is the universal donor for red cells in the ABO system, while AB is the universal recipient.",
        "Stating that HIV is spread by sharing a cup or by mosquitoes; it passes through blood, sexual contact and mother to child, not casual contact."
      ],
      "wassceExamTips": [
        "In Paper 1 a blood-group question usually asks which antigens or antibodies are present; sketch the four-box ABO grid from memory before you answer.",
        "For a Paper 2 'difference between active and passive immunity' item, give one point of contrast per line, memory cells, speed and duration, to bank each mark.",
        "When explaining vaccination, always mention memory cells and the secondary response; examiners look for those exact terms.",
        "A phagocytosis question wants the verbs engulf and digest and the cell name phagocyte; name the process as non-specific to gain the extra mark.",
        "For HIV, say precisely which cell is destroyed, the helper T-lymphocyte, and then link it to opportunistic infections rather than naming a random disease."
      ],
      "summaryChecklist": [
        "Can I list the barrier and non-specific defences and say what each does?",
        "Can I define antigen and antibody and explain the lock-and-key fit?",
        "Can I contrast active and passive immunity with a natural and an artificial example of each?",
        "Can I explain how a vaccine and the EPI protect a child, using memory cells?",
        "Can I use the ABO rules to decide which blood groups can safely donate to which?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-defence-1",
        "title": "Estimating Immunisation Coverage and the Dose Shortfall",
        "problem": "A district has 2000 children eligible for their infant vaccines, and 1800 of them are fully immunised. Find the coverage as a percentage, and state how many more children must be covered to reach the target of 95%.",
        "stepByStepSolution": [
          "Step 1 (M1): Coverage percentage = (children fully immunised / eligible children) × 100 = (1800 / 2000) × 100.",
          "Step 2 (A1): 1800 / 2000 = 0.90, so the coverage is 90%.",
          "Step 3 (M1): Target number for 95% = 0.95 × 2000 eligible children.",
          "Step 4 (A1): The target is 1900 children fully immunised.",
          "Step 5 (M1): Additional children needed = target − current covered = 1900 − 1800.",
          "Step 6 (A1): 100 more children must be reached to meet the 95% target."
        ],
        "keyTakeaway": "Coverage is a plain percentage of eligible children, and the shortfall is the gap between that number and the target."
      },
      {
        "id": "ex-bio-defence-2",
        "title": "Calculating Vaccine Efficacy from Two Groups",
        "problem": "In a trial, 50 of 250 unvaccinated people fell ill with a disease, while 5 of 250 vaccinated people fell ill. Find the illness rate in each group and the percentage protection, or efficacy, given by the vaccine.",
        "stepByStepSolution": [
          "Step 1 (M1): Illness rate, unvaccinated = 50 / 250 × 100.",
          "Step 2 (A1): The unvaccinated illness rate is 20%.",
          "Step 3 (M1): Illness rate, vaccinated = 5 / 250 × 100.",
          "Step 4 (A1): The vaccinated illness rate is 2%.",
          "Step 5 (M1): Efficacy = (rate unvaccinated − rate vaccinated) / rate unvaccinated × 100 = (20 − 2) / 20 × 100.",
          "Step 6 (A1): The vaccine efficacy is 90%."
        ],
        "keyTakeaway": "Efficacy compares the drop in illness rate between vaccinated and unvaccinated groups, expressed as a percentage of the unvaccinated rate."
      }
    ],
    "quiz": {
      "id": "quiz-bio-defence",
      "topicId": "shs2-bio-t3-defence-immunity-lymphatic-system",
      "title": "Defence, Immunity and the Lymphatic System Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-defence-1",
          "quizId": "quiz-bio-defence",
          "questionText": "Which white blood cells defend the body by engulfing and digesting pathogens, a non-specific response?",
          "optionA": "Red blood cells",
          "optionB": "Platelets",
          "optionC": "Phagocytes",
          "optionD": "Memory B cells only",
          "correctOption": "C",
          "subConcept": "Phagocytosis",
          "explanation": "Phagocytes flow round, engulf and digest pathogens by phagocytosis, part of the non-specific defence. Red cells carry oxygen, platelets clot blood, and memory B cells belong to the specific response.",
          "remediationTip": "Draw one phagocyte wrapping a bacterium and label engulf then digest."
        },
        {
          "id": "q-bio-defence-2",
          "quizId": "quiz-bio-defence",
          "questionText": "A substance on the surface of a pathogen that triggers an immune response is called",
          "optionA": "an antibody",
          "optionB": "an antigen",
          "optionC": "an antitoxin",
          "optionD": "an enzyme",
          "correctOption": "B",
          "subConcept": "Antigen and antibody",
          "explanation": "The antigen is the foreign marker that provokes the response; the antibody is the protein the body makes against it. Antitoxins and enzymes are unrelated to this definition.",
          "remediationTip": "Write antigen = the trigger, antibody = the defence made against it, and learn the pair."
        },
        {
          "id": "q-bio-defence-3",
          "quizId": "quiz-bio-defence",
          "questionText": "Vaccination protects a child mainly because it",
          "optionA": "kills any pathogen already inside the body at once",
          "optionB": "supplies ready-made antibodies from another person",
          "optionC": "stimulates the body to make its own antibodies and memory cells",
          "optionD": "permanently thickens the skin barrier",
          "correctOption": "C",
          "subConcept": "Active immunity",
          "explanation": "A vaccine presents antigens so the lymphocytes mount active immunity and keep memory cells for a rapid secondary response. Supplying ready-made antibodies describes passive immunity, not vaccination.",
          "remediationTip": "Link vaccine to active to memory cells in one chain and repeat it."
        },
        {
          "id": "q-bio-defence-4",
          "quizId": "quiz-bio-defence",
          "questionText": "A person with blood group AB can, on ABO grounds alone, receive red cells from any group because their plasma",
          "optionA": "contains both anti-A and anti-B antibodies",
          "optionB": "contains neither anti-A nor anti-B antibodies",
          "optionC": "contains only anti-A antibodies",
          "optionD": "contains no antibodies of any kind against the group A cells of the donor",
          "correctOption": "B",
          "subConcept": "Blood grouping",
          "explanation": "Group AB has both A and B antigens on the red cells and therefore neither anti-A nor anti-B antibody in the plasma, so no donor cells are agglutinated, making AB the universal recipient. The other options wrongly place antibodies in AB plasma.",
          "remediationTip": "Fill the four-box ABO grid showing antigens and antibodies until it is automatic."
        },
        {
          "id": "q-bio-defence-5",
          "quizId": "quiz-bio-defence",
          "questionText": "HIV weakens the body's defence chiefly by destroying",
          "optionA": "helper T-lymphocytes that coordinate the immune response",
          "optionB": "red blood cells, causing anaemia",
          "optionC": "platelets, preventing clotting",
          "optionD": "the waxy waterproof layer of the skin",
          "correctOption": "A",
          "subConcept": "HIV and immunity",
          "explanation": "HIV invades and destroys helper T-lymphocytes, so the specific immune response collapses and opportunistic infections take hold. The virus does not primarily target red cells, platelets or the skin barrier.",
          "remediationTip": "Remember the line: HIV removes the helper cells, the coordinators, so the whole army falls apart."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t3-growth-development-metamorphosis",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 6,
    "title": "Growth, Development and Metamorphosis",
    "description": "growth in plants and animals, measuring growth, germination and seedling stages, complete and incomplete metamorphosis, hormones in growth, adolescent development and bodily changes",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Growth is a permanent, irreversible increase in size, dry mass and number of cells; a swelling that later shrinks, such as a puffed seed, is not true growth.\n• Development is the whole sequence of change from the fertilised egg to the adult, including the stages and specialisations a growing organism passes through.\n• Growth is measured by length, mass, volume or dry mass; dry mass is the fairest measure of real growth because it removes the misleading effect of water gain and loss.\n• In plants growth happens at meristems, regions of dividing cells: apical meristems at the tips of root and shoot lengthen the plant, and lateral cambium thickens a dicot stem.\n• A germinating seed first loses dry mass because respiration consumes stored food before the seedling can photosynthesise; true gain in dry mass begins only when green leaves work.\n• Germination needs water, oxygen and a suitable temperature; light is not required by most crop seeds, which is why maize grains sprout evenly below the soil surface.\n• During germination the embryo root, the radicle, breaks the seed coat first to anchor and absorb, then the shoot, the plumule, rises; in maize the coleoptile sheaths the young leaf.\n• Seeds store food in cotyledons; a dicot such as a bean has two and a monocot such as maize has one, and the food fuels growth until the seedling feeds itself.\n• Germination rate is measured as the number of seeds that sprout out of the number tested, written as a percentage, which farmers use to judge seed quality.\n• Growth in animals is generally by cell division throughout the body and, in insects, is checked by the hard exoskeleton that must be shed.\n• Metamorphosis is the change in form as an animal matures; in complete metamorphosis the young look nothing like the adult.\n• Complete metamorphosis has four stages, egg, larva, pupa and adult; examples are the butterfly, the house fly and the mosquito.\n• The larva, such as a caterpillar or a mosquito wriggler, is the feeding and growing stage; the pupa is the non-feeding transformation stage; the adult, or imago, is the reproductive stage.\n• Incomplete metamorphosis has three stages, egg, nymph and adult, with no pupa; the nymph resembles a small adult and gradually develops wings.\n• Examples of incomplete metamorphosis are the cockroach, the grasshopper and the cocoa mirid bug, an important Ghanaian cocoa pest.\n• In insects, hormones control growth: ecdysone triggers moulting of the exoskeleton and juvenile hormone keeps the young in larval form until the right time for metamorphosis.\n• In humans, growth hormone from the pituitary gland drives overall growth, and the thyroid hormone thyroxine is needed for normal development; the sex hormones oestrogen and testosterone direct puberty.\n• Adolescence is the developmental transition to sexual maturity; bodily changes divide into the primary changes of the reproductive organs and the secondary sexual characteristics.\n• Girls show breast development, widening hips and the start of menstruation; boys show a deeper voice, facial and body hair, muscle growth and the start of sperm production; both gain height fast.",
    "detailedNotes": {
      "overview": "This topic sets growth and development side by side and follows them through plants, insects and people. You will define growth precisely, choose a fair way to measure it, and describe what happens at the meristems and during germination. You will compare complete and incomplete metamorphosis, name the hormone control of insect moulting and of human growth, and describe adolescent bodily changes. Numeric work on germination percentage and on dry-mass change is central to the practical paper.",
      "introduction": "Learn the definitions word for word, because growth and development are often swapped in candidates' answers and lose marks. Keep a table of the four complete and three incomplete metamorphosis stages with a Ghanaian example beside each. For the numbers, practise turning a seed test into a percentage and reading a dry-mass curve, saying which point marks the switch from respiration loss to photosynthetic gain.",
      "realWorldContext": "A cocoa farmer at Agona Nyano watches the mirid bug, an incomplete-metamorphosis pest, pass from egg to nymph to adult as it damages young pods. At a market in Techiman a trader tests a bag of maize by counting how many of a sampled handful sprout before paying the farmer. A school garden club in Winneba grows bean seedlings and measures their shoot length weekly. In clinics from Kumasi to Bolgatanga, the Road to Health chart plots an infant's weight-for-age, applying the same growth ideas to children.",
      "objectives": [
        "Define growth and development and distinguish them from temporary swelling",
        "Describe how growth is measured and why dry mass is the fairest measure",
        "Explain the conditions and stages of germination and calculate germination percentage",
        "Compare complete and incomplete metamorphosis with named Ghanaian examples",
        "Describe hormone control of growth and the main adolescent bodily changes"
      ],
      "sections": [
        {
          "title": "Growth and How to Measure It",
          "content": "Growth is not simply getting bigger for a while; it is a permanent and irreversible increase in the size and dry mass of an organism, brought about by an increase in the number and size of its cells. That definition rules out several look-alikes: a dry seed that swells with water is larger but has not grown, and a person who has eaten is heavier but not truly growing. To measure growth fairly, biologists use length, mass, volume or, best of all, dry mass. Dry mass is the weight of the organism after all its water has been driven off by careful heating in an oven, and it is the fairest measure because it removes the constant error caused by gains and losses of water. Living material cannot be dried without killing it, so dry-mass work is usually done on harvested samples such as seedlings, while length and live mass are used to follow the same individual over time. Growth plotted against time gives the familiar S-shaped curve, a slow start, an accelerating middle, then a leveling off as maturity nears. In plants the increase is localised at meristems, bands of cells that keep dividing; the apical meristems at the tips of the root and shoot lengthen the plant, and in dicots the lateral cambium ring adds new xylem and phloem each year to thicken stem and root.",
          "bulletPoints": [
            "Growth is permanent, irreversible increase in cell number, size and dry mass.",
            "Dry mass is the fairest measure because it excludes water gain and loss.",
            "Length and live mass let you follow the same living plant over time.",
            "A growth curve against time is typically S-shaped.",
            "Apical meristems lengthen; lateral cambium thickens a dicot stem and root."
          ],
          "keyTakeaway": "Only a change that will not be undone counts as growth, and only dry mass measures it without water fooling the balance.",
          "realWorldExample": "A school project at Cape Coast dries a sample of bean seedlings in an oven to constant mass so the class can compare real growth with the misleading live weight of waterlogged seedlings."
        },
        {
          "title": "Germination and the Seedling",
          "content": "Germination is the resumption of growth by the embryo sealed inside a seed, ending its dormancy and producing a seedling. Three conditions are essential: water, which softens the coat, activates enzymes and starts the embryo's metabolism; oxygen, for the rapid respiration that releases the energy stored food provides; and a suitable temperature for the enzymes to work. Light is not needed by most crop seeds, so maize and bean grains sprout well underground, though very small seeds such as some weeds do respond to light. Inside the seed the stored food, held in the cotyledons, feeds the embryo until its first green leaves can photosynthesise. The sequence of emergence is fixed: the radicle, the embryo root, bursts the testa first to anchor the plant and begin absorption, followed by the plumule, the young shoot. In maize, a monocot with a single cotyledon, the shoot is sheathed by the coleoptile as it pushes up through the soil. A key numerical idea is germination percentage, the number of seeds that sprout out of the number tested, multiplied by one hundred; farmers and seed sellers use it to grade a lot. A related number is the change in dry mass: as respiration burns stored food before the leaves work, a germinating seedling first loses dry mass, and only once it turns green and photosynthesises does the dry mass begin to rise.",
          "bulletPoints": [
            "Essential conditions: water, oxygen and suitable temperature; light is not needed by most crop seeds.",
            "The cotyledons store food for the embryo until the leaves photosynthesise.",
            "The radicle emerges first, then the plumule; maize has one cotyledon and a coleoptile.",
            "Germination percentage = (seeds sprouted / seeds tested) × 100.",
            "Dry mass first falls as stored food is respired, then rises once green leaves work."
          ],
          "keyTakeaway": "A seed wakes up only with water, air and warmth, spends its stored mass before it earns its own, and its sprouting rate is a simple percentage.",
          "realWorldExample": "A seed seller in Tamale counts how many of 50 maize grains sprout on damp cotton wool and quotes the germination percentage to price the bag honestly."
        },
        {
          "title": "Metamorphosis and Its Hormone Control",
          "content": "Development in many animals includes metamorphosis, a marked change of body form as the young matures into the adult. In complete metamorphosis the life cycle has four distinct stages, egg, larva, pupa and adult, and the larva looks nothing like the parent; a caterpillar, a maggot and the wriggler larva of a mosquito are all larvae. The larva is the feeding and growing stage, the pupa is a resting, non-feeding stage in which the body is rebuilt, and the adult, called the imago, is the reproductive and often dispersal stage. Butterflies, house flies and mosquitoes all show this pattern, and it is one reason mosquitoes are so hard to control: the aquatic larva and the flying adult occupy different worlds. In incomplete metamorphosis there are three stages, egg, nymph and adult, and there is no pupa; the nymph hatches looking like a small version of the adult and, after a series of moults, gradually develops wings and reproductive organs. The cockroach, the grasshopper and the cocoa mirid bug are incomplete-metamorphosis insects. Because an insect's rigid exoskeleton cannot stretch, growth occurs in steps separated by moulting, and this is governed by hormones: ecdysone, the moulting hormone, triggers the shedding of the old cuticle, while juvenile hormone keeps the young in larval or nymph form and drops away to permit the final change to the adult.",
          "bulletPoints": [
            "Complete metamorphosis: egg, larva, pupa, adult; young unlike adult.",
            "The larva feeds and grows, the pupa transforms, the adult (imago) reproduces.",
            "Incomplete metamorphosis: egg, nymph, adult; no pupa, nymph like a small adult.",
            "Ghanaian examples: mosquito and butterfly (complete), cockroach and cocoa mirid (incomplete).",
            "Ecdysone triggers moulting; juvenile hormone maintains the immature form."
          ],
          "keyTakeaway": "The difference between a maggot becoming a fly and a nymph becoming a grasshopper is one extra stage, the pupa, and it changes the whole life.",
          "realWorldExample": "Malaria control workers in the Northern Region target the mosquito's aquatic wriggler larva with larvicide, breaking the cycle before the adult stage that bites appears."
        },
        {
          "title": "Growth in Humans and Adolescence",
          "content": "Human growth is also hormone-guided. The pituitary gland at the base of the brain releases growth hormone, which drives the growth of bone and muscle during childhood; too little stunts growth and too much enlarges it. The thyroid gland secretes thyroxine, needed for a normal rate of metabolism and for proper physical and mental development. The reproductive organs, the ovaries in girls and the testes in boys, release the sex hormones oestrogen and testosterone, which direct puberty. Adolescence is the developmental period during which a child becomes sexually mature, and its bodily changes are grouped in two. The primary changes are the maturing of the reproductive organs themselves and the start of the release of gametes, eggs in girls and sperm in boys. The secondary sexual characteristics are the outward signs of maturity that are not directly part of the reproductive system: in girls, breast development, widening of the hips and the onset of menstruation, the monthly cycle; in boys, growth of facial, underarm and pubic hair, broadening of the shoulders, increased muscle mass and a deepening of the voice. Both sexes pass through a rapid adolescent growth spurt in height, and good nutrition during these years determines how fully a young person reaches adult size.",
          "bulletPoints": [
            "Growth hormone from the pituitary drives general body growth in childhood.",
            "Thyroxine from the thyroid is needed for normal metabolism and development.",
            "Oestrogen and testosterone are the sex hormones of puberty.",
            "Primary changes mature the reproductive organs and start gamete release.",
            "Secondary characteristics are outward signs such as breasts, voice change and body hair."
          ],
          "keyTakeaway": "Adolescence is hormone-led: the pituitary and thyroid set the pace of growth, and the sex hormones write the outward marks of maturity.",
          "realWorldExample": "A school health talk in Accra explains to JHS pupils why the adolescent growth spurt needs extra food and rest, linking growth hormone and nutrition to the changes they are noticing."
        }
      ],
      "commonMistakes": [
        "Calling the swelling of a seed in water growth; true growth is permanent, and water uptake reverses on drying.",
        "Saying light is essential for the germination of crop seeds like maize; the essential conditions are water, oxygen and suitable temperature.",
        "Including a pupa stage in incomplete metamorphosis; incomplete development has no pupa, only egg, nymph and adult.",
        "Confusing a larva with a nymph, e.g. calling a caterpillar a nymph; a larva looks unlike the adult, a nymph looks like a small adult.",
        "Reporting a rise in live mass of a germinating seed as growth, ignoring that dry mass first falls as stored food is respired."
      ],
      "wassceExamTips": [
        "In Paper 1 a four-stage versus three-stage list is a favourite; memorise which insects are complete and which incomplete before the hall.",
        "For a Paper 2 germination-conditions item, name only the three essentials and give the reason for each; adding light as essential costs the mark.",
        "When asked to measure growth fairly, name dry mass and give the one-line reason, that water is excluded; do not leave it at 'mass'.",
        "A metamorphosis question often wants labelled stages; draw the arrows of the cycle and label the feeding stage and the reproductive stage.",
        "For adolescent changes, separate primary from secondary explicitly in your layout so the examiner can tick each group for marks."
      ],
      "summaryChecklist": [
        "Can I define growth and say why dry mass is the fairest measure of it?",
        "Can I list the essential conditions for germination and the order of radicle and plumule?",
        "Can I calculate germination percentage from a seed test?",
        "Can I contrast complete and incomplete metamorphosis with Ghanaian examples?",
        "Can I name the hormones of growth and separate primary from secondary adolescent changes?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-growth-1",
        "title": "Calculating Germination Percentage of a Maize Sample",
        "problem": "A farmer sows 50 maize grains on damp sand for a germination test and 46 of them sprout within the counting period. Calculate the germination percentage and state whether the lot clears a minimum standard of 90%.",
        "stepByStepSolution": [
          "Step 1 (M1): Germination percentage = (number sprouted / number tested) × 100.",
          "Step 2 (M1): Substitute, germination percentage = (46 / 50) × 100.",
          "Step 3 (A1): 46 / 50 = 0.92, so the germination percentage = 92%.",
          "Step 4 (M1): Compare with the standard: 92% is greater than the 90% minimum.",
          "Step 5 (A1): The lot clears the 90% standard and is acceptable for sale as seed."
        ],
        "keyTakeaway": "Germination percentage is sprouted over tested times one hundred, and the verdict is that figure read against the standard."
      },
      {
        "id": "ex-bio-growth-2",
        "title": "Dry-Mass Loss of a Germinating Seedling",
        "problem": "A germinating bean seedling has a dry mass of 200 mg on day 0, before its leaves green. By day 4 its dry mass is 176 mg. Find the loss in dry mass and the loss as a percentage of the starting mass, and explain the cause.",
        "stepByStepSolution": [
          "Step 1 (M1): Loss in dry mass = starting mass − later mass = 200 mg − 176 mg.",
          "Step 2 (A1): The loss = 24 mg.",
          "Step 3 (M1): Percentage loss = (loss / starting mass) × 100 = (24 / 200) × 100.",
          "Step 4 (A1): The percentage loss = 12%.",
          "Step 5 (M1): Explain the fall: before green leaves photosynthesise, the seedling respires, using up stored food as carbon dioxide and water.",
          "Step 6 (A1): Therefore the dry mass drops until the first leaves begin to make food."
        ],
        "keyTakeaway": "A germinating seedling loses dry mass at first because respiration spends stored food faster than the new leaves can replace it."
      }
    ],
    "quiz": {
      "id": "quiz-bio-growth",
      "topicId": "shs2-bio-t3-growth-development-metamorphosis",
      "title": "Growth, Development and Metamorphosis Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-growth-1",
          "quizId": "quiz-bio-growth",
          "questionText": "Which measure gives the fairest estimate of true growth in a seedling?",
          "optionA": "Live mass including water",
          "optionB": "Dry mass of a sample",
          "optionC": "Length of the shoot only",
          "optionD": "Number of leaves counted",
          "correctOption": "B",
          "subConcept": "Measuring growth",
          "explanation": "Dry mass excludes the fluctuating water content, so it reflects real increase in tissue. Live mass can rise or fall just from water uptake, and length or leaf count capture only one dimension.",
          "remediationTip": "Write the phrase 'dry mass removes water error' on your revision card."
        },
        {
          "id": "q-bio-growth-2",
          "quizId": "quiz-bio-growth",
          "questionText": "Which set lists the essential conditions for germination of a maize grain?",
          "optionA": "Water, oxygen and suitable temperature",
          "optionB": "Light, soil minerals and water",
          "optionC": "Oxygen, light and fertile soil",
          "optionD": "Carbon dioxide, water and warmth",
          "correctOption": "A",
          "subConcept": "Germination conditions",
          "explanation": "The embryo needs water to activate enzymes, oxygen for respiration and a suitable temperature; most crop seeds do not need light or soil minerals to germinate. Options naming light or carbon dioxide are wrong.",
          "remediationTip": "Recall the trio: water, air, warmth; nothing else is essential."
        },
        {
          "id": "q-bio-growth-3",
          "quizId": "quiz-bio-growth",
          "questionText": "The correct order of stages in complete metamorphosis is",
          "optionA": "egg, nymph, pupa, adult",
          "optionB": "egg, larva, pupa, adult",
          "optionC": "egg, pupa, larva, adult",
          "optionD": "adult, egg, larva, nymph",
          "correctOption": "B",
          "subConcept": "Metamorphosis",
          "explanation": "Complete metamorphosis runs egg, larva, pupa, adult, as in a butterfly. The nymph belongs to incomplete metamorphosis, and the pupa must follow the larva, not precede it.",
          "remediationTip": "Say it as a rhythm, egg-larva-pupa-adult, until the order is fixed."
        },
        {
          "id": "q-bio-growth-4",
          "quizId": "quiz-bio-growth",
          "questionText": "In an insect, the hormone that triggers moulting of the old exoskeleton is",
          "optionA": "ecdysone",
          "optionB": "juvenile hormone",
          "optionC": "thyroxine",
          "optionD": "growth hormone from the pituitary",
          "correctOption": "A",
          "subConcept": "Hormones of growth",
          "explanation": "Ecdysone is the moulting hormone. Juvenile hormone keeps the insect immature rather than causing the moult, while thyroxine and pituitary growth hormone are vertebrate hormones.",
          "remediationTip": "Match each hormone to one job: ecdysone moults, juvenile holds form."
        },
        {
          "id": "q-bio-growth-5",
          "quizId": "quiz-bio-growth",
          "questionText": "Forty-eight of 60 bean seeds sprout in a germination test. What is the germination percentage?",
          "optionA": "60%",
          "optionB": "96%",
          "optionC": "80%",
          "optionD": "48%",
          "correctOption": "C",
          "subConcept": "Germination percentage",
          "explanation": "Germination percentage = (48 / 60) × 100 = 80%. Reporting 48% mistakes the raw count for the percentage, and 96% doubles it wrongly.",
          "remediationTip": "Always divide sprouted by tested first, then multiply by 100."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t3-plant-responses-growth-substances",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 11,
    "title": "Plant Responses, Tropisms and Growth Substances",
    "description": "Taxis and tropism compared, phototropism, geotropism, thigmotropism and hydrotropism, auxin and cell elongation, experiments with coleoptile and clinostat, gibberellin, cytokinin, abscisic acid and ethene, seed dormancy and germination triggers, pruning and weeding practice, and the use of plant growth regulators in Ghana.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A tropism is a growth response of part of a plant to a directional stimulus; the response is named for the stimulus and for the direction: positive phototropism is growth towards light, negative geotropism is growth away from gravity.\n• A taxis is the movement of the whole organism towards or away from a stimulus, as when Euglena swims towards light; a plant part cannot show a taxis because the plant is fixed, so the word to use for a bending shoot or root is always tropism.\n• Phototropism of a shoot is explained by auxin: the hormone is made at the growing tip, moves to the shaded side when light comes from one direction, and makes the cells there elongate faster, so the tip bends towards the light.\n• A root behaves oppositely because a high concentration of auxin inhibits the root, so the root bends away from light and grows down into the soil; the shoot is negatively geotropic and the root positively geotropic.\n• Darwin's coleoptile work is the classic evidence: a decapitated coleoptile neither bends nor grows, a tip covered in foil fails to bend towards the light, a gelatin-covered tip still bends, and an agar block that sat under a cut tip restores bending when placed on one side, proving a diffuse chemical messenger.\n• A clinostat rotates a plant slowly about a horizontal axis so that each side of the shoot receives gravity for an equal time; the effect of one-sided gravity is cancelled and the shoot grows straight out instead of curving up, demonstrating negative geotropism.\n• Hydrotropism is shown by growing mustard or maize seeds in a dish of dry bran with a wet sponge on one side: the roots turn and grow towards the moisture, which is why irrigation lines attract root growth in a farm.\n• Thigmotropism coils a tendril of pumpkin, gourd or bean around a stick because cells on the touched side grow less than the untouched side, so the organ curves round the support.\n• Gibberellins promote stem elongation and internode stretching, bolt rosette plants into flowering, and help break seed dormancy; untreated dwarf maize stays short while gibberellin-treated plants grow taller at the same age.\n• Cytokinins, made mainly in root tips, promote cell division, release lateral buds from the control of the shoot tip, and delay senescence of leaves and cut flowers.\n• Abscisic acid is the stress and dormancy hormone: it closes stomata during the dry season water shortage by acting on guard cells, and it keeps buds and seeds dormant until conditions suit germination.\n• Ethene (ethylene) is a ripening hormone; market women store green mango and pawpaw among ripe fruit so that the gas given off ripens the whole heap in a few days, and it also promotes leaf fall and fruit drop in cocoa and mango.\n• Seed dormancy is enforced by an impervious or hard seed coat, by immature embryos, by germination-inhibiting chemicals, or by abscisic acid; dormancy of cowpea and locust-bean seed is broken practically by scarification, soaking, or the heat of bush burning.\n• The minimum triggers for germination are water taken in by the dry seed, oxygen for the rising rate of respiration, and a suitable temperature; light is needed for very small seeds such as tobacco and some weeds, while many crop seeds germinate in darkness.\n• Pruning removes the apical bud, and with it the supply of auxin down the stem, so lateral buds are released from apical dominance and the hedge or cocoa tree becomes bushy; this is the everyday farm use of the auxin story.\n• Plant growth regulators used in Ghana include 2,4-D selective weedicides on cereals and lawns, auxin rooting powders for hibiscus cuttings and cassava stake treatment, and ethephon solutions that release ethene to ripen tomatoes and mangoes evenly; users must wear gloves, mix in a bucket reserved for chemicals, spray in the calm early morning away from wells and neighbours' vegetable plots, and never re-use empty containers for water or food.\n• Because plants have no nerves, every response described here is hormonal and slow, and most tropisms are growth corrections that cannot be reversed once made.",
    "detailedNotes": {
      "overview": "This topic replaces the animal nervous system with the plant's chemical coordination. You first learn the language of directional responses, tropisms for growth and taxes for whole-organism movement, and practise naming each with positive or negative and the correct stimulus word. The centre of the topic is auxin: where it is made, how it moves, why it speeds shoot elongation yet inhibits a root, and how the classic coleoptile experiments and the clinostat prove that a mobile chemical, not light itself, bends the tip. You then add the other growth substances, gibberellin, cytokinin, abscisic acid and ethene, and use them to explain seed dormancy and the triggers that start germination. The topic ends in Ghanaian farm practice, where the same chemistry governs pruning, weeding, rooting of cuttings and ripening of fruit.",
      "introduction": "Start the week by setting up three living experiments that answer the exam questions by themselves: germinating maize or mustard seeds in a shallow dish of bran with a moist sponge at one side for hydrotropism, a potted bean or coleoptile in a shoebox with a single hole for phototropism, and a bean tendril trained on a stick for thigmotropism. Build a simple clinostat by taping the pot to the turntable of an old record player running slowly, and keep a still control plant on the same bench. Test a handful of cowpea seeds for germination percentage on damp blotting paper under a shaded lid, count daily for seven days, and record every count in a table with the date and the number of seeds sown.",
      "realWorldContext": "A farmer near Ejura plants maize in ridges and sees the young leaves bleach and curve where the shade of a tree falls on one side; that one-sided light is the free lesson in phototropism. In the Tamale market women wrap green mangoes in newspaper with a few ripe pawpaw and sell the soft fruit three days later because of ethene given off by the ripe ones. At a senior high school garden in Cape Coast the hedge is cut twice a term so that it thickens instead of growing one tall spire, and the students are told in biology class that the cut works by removing the source of auxin. Along the irrigation channels of the Tono scheme the maize roots visibly steer towards the wetter soil, and a cocoa pruner in the Ahafo region uses a rooting hormone powder on stem cuttings to multiply planting material.",
      "objectives": [
        "Define taxis and tropism, name phototropism, geotropism, hydrotropism and thigmotropism correctly, and state the direction of response in shoot and root",
        "Explain the role of auxin in phototropism and geotropism and describe the coleoptile and clinostat experiments with their controls and safety points",
        "State the functions of gibberellin, cytokinin, abscisic acid and ethene and explain seed dormancy and the triggers that start germination",
        "Apply knowledge of growth substances to pruning, weeding, rooting of cuttings and the ripening practice used in Ghana"
      ],
      "sections": [
        {
          "title": "Tropisms, Taxes and the Language of Direction",
          "content": "A plant responds to a directional stimulus by growing one side faster than the other, and such a growth response is a tropism. The prefix names the stimulus and the adjective tells the direction: a shoot growing towards light is positively phototropic, a root growing down with gravity is positively geotropic while its shoot is negatively geotropic, a root turning towards a wet region is positively hydrotropic, and a tendril coiling round a stick it touches is positively thigmotropic. Because the bending is a growth it is slow and permanent, which is the difference from an animal answer that can be switched off in a second. A taxis, on the other hand, is the movement of an entire motile organism towards or away from a stimulus, called positive and negative taxis; the alga Euglena swimming up a light beam to photosynthesise and the sperm of a moss swimming towards chemicals are both taxes. A fixed plant shows no taxis at all, so the common WASSCE trap of writing that a shoot exhibits phototaxis is a wrong word, not merely a wrong idea. Learn the four stimulus stems, photo for light, geo for gravity, hydro for water, thigmo for touch, and attach the correct organ and direction in every answer, since examiners award each element separately. Also separate the non-directional nastic movements, such as the folding of mimosa leaflets when a child brushes the hedge, where the plant reacts to the shock itself and not to its direction.",
          "bulletPoints": [
            "Tropism is a directional growth response of a plant part; taxis is directional movement of a whole motile organism.",
            "Prefixes: photo light, geo gravity, hydro water, thigmo touch; positive means towards the stimulus.",
            "Shoot is positively phototropic and negatively geotropic; root is negatively phototropic and positively geotropic.",
            "Growth responses are slow and irreversible; animals answer through nerves and muscles quickly.",
            "Nastic movements such as mimosa folding are not directional and so are neither tropisms nor taxes."
          ],
          "keyTakeaway": "Name the stimulus, name the organ, say positive or negative, and never call a plant bending a taxis.",
          "realWorldExample": "On a ridged maize field at Ejura the young shoots on the shaded side of each ridge lean away from the shadow of the next ridge, a visible phototropic correction made while the farmers are still on the farm."
        },
        {
          "title": "Auxin and the Classic Experiments: Coleoptile and Clinostat",
          "content": "Auxin, chemically indoleacetic acid, is produced at the growing tips of shoots and moves backwards down the stem, in high concentration inhibiting a root while promoting a shoot. In a one-sided light it gathers on the shaded side of the coleoptile, loosens the cell walls there and makes those cells elongate more, so the tip curves towards the window. The evidence comes from experiments on the first leaf sheath, the coleoptile, of grass seedlings such as canary grass and maize. A seedling whose tip is cut off with a sharp razor blade neither bends nor lengthens, which shows the tip is the sensitive and controlling region. Replacing the cut tip with a small block of plain agar does nothing, but a block that previously rested against a removed tip restores the bending, and if the active block is set on one side of the decapitated stem the stump curves away from it even in darkness, proving a diffusible chemical. A foil cap over the tip stops the response while a cap of waxed gelatin does not, proving that the tip must detect the light and that the message passes down as a chemical, not as light travelling through the tissue. A clinostat answers the gravity question: the turntable carries the plant slowly about a horizontal axis so that no side lies permanently down, the pull of gravity is evened out over the organ, and the shoot grows straight sideways instead of curving upwards while a control plant on the same bench curves up. School-laboratory safety is examinable in Paper 3: cut away from the body with a fresh single-edge blade on a tile, discard blades in a marked container, keep agar blocks covered to stop mould, and wash hands after handling seedlings.",
          "bulletPoints": [
            "Auxin is made at the shoot tip, moves backwards down the stem, promotes shoot elongation and inhibits a root in high concentration.",
            "Decapitated coleoptile neither bends nor grows; an agar block taken from under a tip restores the bending.",
            "Foil cap over the tip prevents phototropism; a waxed gelatin cap allows it, so the tip is the light sensor and the message is chemical.",
            "A clinostat averages out the one-sided pull of gravity, so the shoot grows straight while a still control curves up.",
            "Razor blades, agar blocks and hand washing are the safety points expected when the practical is described."
          ],
          "keyTakeaway": "Bending happens because auxin is unevenly distributed, and the coleoptile, cap and clinostat experiments each prove one part of that sentence.",
          "realWorldExample": "In the science store at a senior high school in Ho the biology club runs a borrowed record-player turntable as a clinostat each term, and the difference between the straight treated maize coleoptile and the up-curving control is photographed for class revision."
        },
        {
          "title": "Other Growth Substances, Dormancy and Practice in Ghana",
          "content": "Auxin has company. Gibberellins stretch internodes, bolt a rosette into flower, enlarge fruit, and help break dormancy by mobilising food reserves in the germinating seed; a dwarf maize plant treated with gibberellin grows as tall as a normal one at the same age. Cytokinins are formed in root tips and travel up, driving cell division in cambium and shoot tips, releasing side buds from the control of the apical bud, and slowing the ageing of leaves, which is why a cut flower solution may contain one. Abscisic acid is the opposite of the growth promoters: it accumulates in water-stressed leaves and makes the guard cells lose their turgor so stomata close during the harmattan drought, and it holds seeds and buds dormant until the season suits growth. Ethene, the only gaseous hormone, ripens fruit, hastens senescence and abscission, and is the reason green mango packed among ripe pawpaw softens within days; ethephon, a solution that releases ethene inside the plant, is sprayed on tomato and mango to even the ripening for market. Dormant seeds will not germinate through an impermeable hard coat as in cowpea and locust bean, an immature embryo, or germination inhibitors that must be leached out or destroyed; the practical triggers that start germination are water taken up by the dry seed, oxygen for the multiplied respiration, and a suitable temperature, with light needed only for tiny seeds such as tobacco. In farm practice the same hormones explain why pruning a hedge or topping cocoa releases side shoots after the auxin source is removed, why cassava stakes stood in dilute auxin rooting solution strike faster, and why selective 2,4-D weedicides kill broad-leaved weeds in maize without harming the cereal. Users must wear gloves, mix in a bucket reserved for chemicals, spray in the still early morning away from a well or a neighbour's vegetable plot, and bury or burn empty containers rather than leave them to fetch water.",
          "bulletPoints": [
            "Gibberellin stretches stems and breaks dormancy; cytokinin drives division and delays ageing; abscisic acid closes stomata and holds dormancy; ethene ripens fruit.",
            "Germination needs water, oxygen and suitable temperature, with light needed for some very small seeds.",
            "Hard seed coat, immature embryo and inhibitors cause dormancy; soaking, scarification and heat break it.",
            "Pruning removes apical auxin, so lateral buds grow and the plant becomes bushy.",
            "2,4-D weedicides, auxin rooting powders and ethephon are growth regulators used in Ghana with gloves, a dedicated bucket, morning calm and safe disposal of containers."
          ],
          "keyTakeaway": "Four growth substances besides auxin explain dormancy, ripening, drought response and bushy regrowth, and each has a real Ghanaian farm use.",
          "realWorldExample": "At a nursery at Nkawkaw cassava sticks are stood overnight in a dilute auxin rooting solution before planting into seedbeds, while the same worker trims the nursery fence so that the cut hedge sends out thick side shoots within a month."
        }
      ],
      "commonMistakes": [
        "Writing that cells on the lit side of a shoot grow faster; it is the shaded side that elongates more because auxin collects there, and the lit-side explanation earns no mark.",
        "Calling the bending of a coleoptile a phototaxis or a taxis; a fixed plant shows tropisms, and only a free-moving organism shows a taxis.",
        "Confusing the hormones, for example crediting gibberellin with closing stomata in drought; abscisic acid closes them and gibberellin breaks dormancy and stretches the stem.",
        "Saying the clinostat removes gravity; it averages the pull over all sides so the organ cannot detect one direction."
      ],
      "wassceExamTips": [
        "Paper 1 objective questions turn on the direction words; learn that a root is positively geotropic, positively hydrotropic and negatively phototropic before you learn any long paragraph.",
        "In Paper 2 structured questions on the coleoptile, marks are given separately for aim, method, control, observation and conclusion, so write the control seedling even when the question only asks for the result.",
        "For Paper 3 alternative practical, practise measuring the angle of a curved coleoptile with a protractor, recording to the nearest 10 degrees, and repeating the reading on at least three seedlings before averaging.",
        "State the safety of each practical: single-edge blade cut away from the body on a tile, blades in a marked disposal tin, hands washed after handling agar and plant material."
      ],
      "summaryChecklist": [
        "I can define tropism and taxis, and name the four stimulus prefixes with correct positive or negative direction for root and shoot.",
        "I can describe the decapitation, agar-block, foil-cap and clinostat experiments and state what each one proves about auxin.",
        "I can list the functions of gibberellin, cytokinin, abscisic acid and ethene in dormancy, elongation, stress and ripening.",
        "I can calculate germination percentage and seedling survival percentage from a seed test and state the three germination triggers.",
        "I can explain pruning, rooting powder, weedicides and fruit ripening as applications of plant growth substances in Ghana."
      ]
    },
    "examples": [
      {
        "id": "ex-bio-plantresp-1",
        "title": "Drawing a Curved Coleoptile at Correct Magnification",
        "problem": "A student examines a positively phototropically bent maize coleoptile under a light microscope with a 10 x eyepiece and a 10 x objective, and draws the curved tip so that the length along the curve measures 45 mm on the page. Find the total magnification, the true length of the drawn tip in millimetres and micrometres, and the drawing length a 0.3 mm wide coleoptile would need at the same magnification.",
        "stepByStepSolution": [
          "Step 1 (M1): Total magnification of a light microscope is eyepiece magnification multiplied by objective magnification, so 10 x 10.",
          "Step 2 (A1): Total magnification = 100 times, and every biological drawing must carry this figure as a label.",
          "Step 3 (M1): Real size equals drawing size divided by magnification, so 45 / 100.",
          "Step 4 (A1): The true length of the tip is 0.45 mm, which is 450 micrometres because 1 mm = 1000 micrometres.",
          "Step 5 (M1): Drawing size equals real size multiplied by magnification, so 0.3 x 100.",
          "Step 6 (A1): The 0.3 mm wide coleoptile is drawn 30 mm long.",
          "Step 7 (A1): Final answers, magnification 100 times, true tip length 0.45 mm or 450 micrometres, drawing length 30 mm."
        ],
        "keyTakeaway": "Magnification equals drawing size divided by real size; multiply to draw bigger and divide to recover the truth from a drawing."
      },
      {
        "id": "ex-bio-plantresp-2",
        "title": "Germination Percentage and Seedling Survival on a Nursery Test",
        "problem": "A school garden club places 250 maize seeds between damp blotting papers in a shaded tray. After seven days 210 seeds have shown a radicle of at least 5 mm. The club transplants all 210 seedlings into raised beds, and two weeks later 180 of them are still alive and upright. Calculate the germination percentage, the seedling survival percentage, and the percentage of the original seeds that ended as established seedlings.",
        "stepByStepSolution": [
          "Step 1 (M1): Germination percentage equals the number of seeds germinated divided by the number of seeds tested, multiplied by 100, so 210 / 250 x 100.",
          "Step 2 (A1): The germination percentage is 84 percent.",
          "Step 3 (M1): Survival percentage of the seedlings equals seedlings alive divided by seedlings transplanted, multiplied by 100, so 180 / 210 x 100.",
          "Step 4 (A1): Survival is 180 / 210 = 0.857, that is 85.7 percent of the transplanted seedlings.",
          "Step 5 (M1): The established proportion of the original seeds equals established seedlings divided by seeds sown, so 180 / 250 x 100.",
          "Step 6 (A1): That figure is 72 percent of the original 250 seeds.",
          "Step 7 (A1): Final answers, germination 84 percent, seedling survival 85.7 percent, and establishment from sown seed 72 percent; a seed lot below about 80 percent germination would be rejected for sale."
        ],
        "keyTakeaway": "Always divide by the number in the group named in the question, since germination uses seeds sown while survival uses seedlings transplanted."
      }
    ],
    "quiz": {
      "id": "quiz-bio-plant-responses",
      "topicId": "shs2-bio-t3-plant-responses-growth-substances",
      "title": "Plant Responses and Growth Substances Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-plantresp-1",
          "quizId": "quiz-bio-plant-responses",
          "questionText": "A mustard root turns and grows towards a moist region of the soil. This response is correctly named",
          "optionA": "positive hydrotropism",
          "optionB": "negative geotropism",
          "optionC": "positive hydrotaxis",
          "optionD": "thigmotropic coiling",
          "correctOption": "A",
          "subConcept": "Naming tropisms",
          "explanation": "The stimulus is water and the root grows towards it, so it is positive hydrotropism. Hydrotaxis would describe a free-swimming organism, not a fixed root, and the other options name responses to gravity and touch.",
          "remediationTip": "Make a four-card set of photo, geo, hydro and thigmo stimulus prefixes and match each to a root and a shoot response."
        },
        {
          "id": "q-bio-plantresp-2",
          "quizId": "quiz-bio-plant-responses",
          "questionText": "A coleoptile tip is removed, and a plain agar block is placed on the cut stump; the seedling is left in one-sided light. What happens and why?",
          "optionA": "It bends towards the light because the agar supplies auxin.",
          "optionB": "It bends away from the light because the tip acted as a lens.",
          "optionC": "It does not bend because there is no source of auxin and plain agar contains none.",
          "optionD": "It grows straight up because gravity now controls it.",
          "correctOption": "C",
          "subConcept": "Coleoptile experiments",
          "explanation": "The tip is the region that makes and releases auxin, and plain agar holds none of it, so a stump topped with plain agar neither bends nor lengthens. Only a block that previously rested against a cut tip restores the bending.",
          "remediationTip": "Draw the four treatments, decapitated, plain agar, active agar and replaced tip, side by side and write the result under each."
        },
        {
          "id": "q-bio-plantresp-3",
          "quizId": "quiz-bio-plant-responses",
          "questionText": "The purpose of a clinostat in a geotropism investigation is to",
          "optionA": "keep the temperature steady for the seedlings",
          "optionB": "rotate the plant slowly so that gravity acts evenly on all sides",
          "optionC": "exclude light from the shoot completely",
          "optionD": "water the roots at fixed intervals automatically",
          "correctOption": "B",
          "subConcept": "Clinostat",
          "explanation": "Slow rotation about a horizontal axis means no side of the organ lies permanently downwards, so the one-sided pull of gravity is averaged out and the shoot grows straight. A still control on the same bench curves upwards, which is the comparison that earns the mark.",
          "remediationTip": "Set the treated plant and the control plant together in your notes so the comparison is automatic in revision."
        },
        {
          "id": "q-bio-plantresp-4",
          "quizId": "quiz-bio-plant-responses",
          "questionText": "During the dry season water shortage, stomata close largely because of the hormone",
          "optionA": "auxin",
          "optionB": "gibberellin",
          "optionC": "cytokinin",
          "optionD": "abscisic acid",
          "correctOption": "D",
          "subConcept": "Other growth substances",
          "explanation": "Abscisic acid builds up in water-stressed leaves and acts on the guard cells so they lose water and close the pore. Auxin governs elongation, gibberellin stretches stems and breaks dormancy, and cytokinin promotes division and delays ageing.",
          "remediationTip": "Write one function sentence for each hormone in a four-row table and recite the stress row until it is instant."
        },
        {
          "id": "q-bio-plantresp-5",
          "quizId": "quiz-bio-plant-responses",
          "questionText": "A hedge cut at the top grows thick and bushy below the cut because",
          "optionA": "removing the apical bud removes the supply of auxin, so lateral buds develop",
          "optionB": "the cut stem releases ethene that shrinks the leaves",
          "optionC": "light now reaches the main root and swells it",
          "optionD": "cytokinin from the soil enters the wound and splits the cells",
          "correctOption": "A",
          "subConcept": "Apical dominance and pruning",
          "explanation": "The apical bud is the source of auxin that suppresses the side buds; pruning removes that supply and the laterals grow, making the hedge dense. The other options attach the wrong hormone or organ to the response.",
          "remediationTip": "Sketch a labelled shoot tip before and after cutting, marking the auxin arrow down the stem in the intact plant only."
        }
      ]
    }
  },
  {
    "id": "shs2-bio-t3-micro-organisms-roles-in-ghana",
    "subjectId": "biology",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Bacteria, Fungi, Viruses and Their Roles in Ghana",
    "description": "Structure of bacterial, fungal and viral particles, reproduction and growth of bacteria, conditions for growth, aseptic technique and culture, decomposition and nutrient cycling, roles in food and drink production, disease agents and mode of spread, antibiotics and resistance, and useful and harmful microbes in daily life in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Bacteria are single-celled prokaryotes, about 1 micrometre across, with no nuclear membrane: the DNA lies free in the cytoplasm as a single loop, the cell wall of murein gives the shape, and some cells add a slime capsule for protection, flagella for movement, and small plasmid rings carrying extra genes.\n• Bacterial shapes are coccus, a ball, bacillus, a rod, spirillum, a spiral, and vibrio, a comma; named examples are Bacillus subtilis of dawadawa fermentation, Lactobacillus of kenkey and yoghurt, Vibrio cholerae, Mycobacterium tuberculosis and the typhoid bacterium Salmonella typhi.\n• Fungi are eukaryotes with a true nucleus and chitin walls: moulds such as Rhizopus grow as hyphae forming a mycelium and reproduce by spores, yeasts such as Saccharomyces are single cells that bud, and mushrooms and bracket fungi are the large fruiting bodies of soil moulds.\n• Viruses are not cells: each is a protein capsid enclosing one kind of nucleic acid, DNA or RNA and never both, with no cytoplasm, no ribosomes and no metabolism of its own, so it can only be copied inside a living host cell and is therefore on the border of life.\n• A virus is host-specific, the bacteriophage infecting only a particular bacterium, tobacco mosaic virus attacking plants, and HIV, influenza, measles, yellow fever, Ebola and rabies being animal and human viruses; new virus particles are assembled inside the host rather than dividing by fission.\n• Bacteria reproduce by binary fission, the DNA loop copying, the cell lengthening and the two halves splitting; under good conditions a generation takes about 20 minutes, so one cell becomes 2 to the power of 15, that is 32 768 cells, in five hours.\n• A bacterial growth curve in a closed flask has four phases: the lag phase of adjusting and making enzymes, the log or exponential phase of steady doubling, the stationary phase where food runs short and waste accumulates so deaths match divisions, and the death phase where the population falls.\n• Conditions microbes need are food, moisture, a suitable temperature around 25 to 37 degrees Celsius, right acidity, and either oxygen or its absence for the particular species; warm moist kenkey dough or stew left in the shade spoils fastest, while drying, salting, sugaring, smoking and refrigeration all work by starving the microbes of one condition.\n• Aseptic technique protects both the culture and the worker: the inoculating loop is sterilised in a burner flame until red-hot and cooled before touching a culture, work is done beside a flame so rising air sweeps particles away, the Petri dish lid is lifted only a little, plates are sealed with strips of tape and incubated upside down at about 25 degrees Celsius in schools, and a grown plate from a pathogen source is never opened for smelling or viewing.\n• Decomposer bacteria and fungi, helped by detritus feeders such as termites and earthworms, digest dead leaves, carcasses and faeces outside the body, return mineral nutrients such as nitrates to the soil and carbon dioxide to the air, and so close the nutrient cycles that keep a cocoa or maize farm productive.\n• Ghanaian foods and drinks made with microbes include kenkey and akpotto soured by lactic-acid bacteria with yeast giving the dough its softness, pito and kasila beers and palm wine produced by yeast fermentation of sugars, yoghurt, and dawadawa balls made from fermenting locust beans by Bacillus.\n• Bacterial disease agents and their spread: Vibrio cholerae and Salmonella typhi pass through the faecal-oral route in contaminated water and unwashed hands, which is why cholera recurs in Accra and Takoradi peri-urban communities; Mycobacterium tuberculosis spreads in airborne droplets; the leprosy bacterium spreads by long close contact.\n• Fungal diseases include ringworm and athlete's foot spread by shared towels and slippers in boarding houses, throat and skin yeast infections, and mould rots of stored maize, groundnut and cassava chips; some stored-grain moulds produce aflatoxins that poison the liver.\n• Viral diseases have no antibiotic cure: influenza, measles, yellow fever and HIV/AIDS pass through droplets, blood and body fluids and are met by vaccination under the Ghana Extended Programme on Immunisation, by screening blood, by clean needles and by education; plant viruses such as maize streak spread by leafhoppers and cassava mosaic by whitefly and infected cuttings.\n• Antibiotics are chemicals made by fungi and bacteria, penicillin from the mould Penicillium among them, that kill or inhibit specific bacteria; resistance rises when a course is left short, when doses are too small, or when antibiotics are taken for a cold, because the few naturally resistant bacteria survive, multiply and pass on the resistance genes.\n• Control measures that break the chain are treated and chlorinated water, hand washing with soap, use of latrines, covering food against flies, correct refrigeration, pasteurisation of milk, and vaccination; these belong to the community hygiene of Paper 2 essays.",
    "detailedNotes": {
      "overview": "This topic surveys the three smallest plans of life used in Ghanaian daily existence, the bacterium, the fungus and the virus, comparing them as structures before turning to how bacteria multiply and how a population grows in a closed vessel. You then learn the aseptic technique by which a school laboratory can culture microbes safely and count them honestly, and the great work of decomposition that recycles the nutrients of a farm. Finally the roles are weighed: microbes that make kenkey, dawadawa, palm wine and yoghurt, microbes that cause cholera, typhoid, tuberculosis, ringworm, HIV and crop viral disease, and the fragile protection of antibiotics whose misuse is breeding resistant strains that Ghanaian hospitals now treat.",
      "introduction": "Begin with what is visible. Examine mouldy bread and a slice of ripe pawpaw under the low power, tease a hypha thread with a needle, and learn to recognise the spore-bearing structures of Rhizopus; smell fermented dawadawa in the market and describe its soft beans as bacterial action on a locust seed. Set up two Petri dishes of nutrient agar inoculated from the air of the classroom and of the refectory, seal them with tape strips, incubate them upside down at about 25 degrees Celsius, and count colonies after three days without opening them. Test how salt and sugar slow the spoilage of two portions of stew kept side by side, and keep a daily record table with the date, the smell score and the visible mould.",
      "realWorldContext": "The kenkey factory at Nungua ferments boiled maize dough in a clay pot for two or three days, the lactic-acid bacteria souring it while the yeast softens the final ball, and the same dough kept too long in the heat develops a mould skin that the seller must strip and discard. At Odawna and within the Keta reconstruction zones, hand washing with soap and chlorinated water are the daily defence against cholera because Vibrio cholerae travels in faeces-contaminated water. A store keeper at Techiman loses a maize lot to aflatoxin mould and learns why the grain is dried to a safe moisture before bagging. In a clinic at Kumasi the nurse insists on a full course of antibiotics for a tuberculosis patient and explains that leaving the medicine short lets resistant bacteria survive; the dawadawa and pito trades of the northern regions are live fermentation industries run almost entirely by microbial action.",
      "objectives": [
        "Compare the cell organisation of bacteria, fungi and viruses and explain why a virus is regarded as being on the border of living and non-living",
        "Describe reproduction by binary fission, plot and interpret the four phases of a bacterial growth curve, and state the conditions required for microbial growth",
        "Use and describe aseptic technique and simple culture and counting methods with the safety limits of the school laboratory",
        "Discuss the roles of microbes in decomposition, in Ghanaian food and drink production, and as disease agents, and explain antibiotic use and resistance"
      ],
      "sections": [
        {
          "title": "Three Plans Compared: Bacterium, Fungus, Virus",
          "content": "A bacterium is a complete single prokaryotic cell of about one micrometre. Its cytoplasm carries ribosomes and food reserves, its DNA is a single loop lying free because there is no nuclear membrane, and around it a cell wall of the protein-polysaccharide murein fixes the shape, variously coccus, bacillus, spirillum or vibrio. A slime capsule shields pathogenic cells from the host defences, one or more flagella provide movement, and pili help attachment, while plasmids are small extra rings of genes, sometimes carrying resistance to a drug. A fungus is eukaryotic, with a membrane-bound nucleus, mitochondria and a wall of chitin; the moulds grow as thread-like hyphae whose network, the mycelium, spreads through bread or fruit and sends up spore-bearing hairs, yeasts are single fungal cells that pinch off new cells by budding, and mushrooms and puffballs are the great fruiting bodies. A virus is different in kind rather than in size: it has no cell structure, no cytoplasm, no ribosomes and no metabolism, and consists only of a protein capsid, sometimes with an outer envelope, enclosing either DNA or RNA but never both. It takes over the chemistry of one particular host cell and has new particles assembled inside it, which is the reason a virus is described as a parasite between life and non-life, and the reason antibiotics, which act on bacterial machinery, do nothing to it. Examiners reward the four clear comparisons of nucleus, wall, size and method of multiplication, so learn them as a list rather than as prose.",
          "bulletPoints": [
            "Bacterium: prokaryotic, murein wall, free DNA loop, may have capsule, flagellum and plasmids.",
            "Fungus: eukaryotic, chitin wall, mould hyphae and mycelium, yeast budding, spore reproduction.",
            "Virus: no cell, protein capsid with DNA or RNA only, no metabolism, assembled inside a host cell.",
            "Binary fission doubles bacteria; budding gives yeasts; viruses copy using the host machinery.",
            "Antibiotics act on bacteria, not viruses, because the targets are bacterial walls and ribosomes."
          ],
          "keyTakeaway": "Bacteria are prokaryotic cells, fungi are eukaryotic cells, and a virus is an acellular particle that must hijack a living cell to multiply.",
          "realWorldExample": "A student who has seen ringworm rings on the foot of a boarder, the sourness of kenkey made by bacteria and the measles marks on a younger sibling has met all three plans of microbe in one week of school life."
        },
        {
          "title": "Reproduction, Growth Conditions and Aseptic Culture",
          "content": "Bacteria multiply by binary fission. The DNA loop copies, the cell elongates, a wall grows in and the two daughters separate, so the population doubles in a regular generation time, roughly twenty minutes for the intestinal bacterium Escherichia coli at blood heat. In a closed flask with fixed food the population traces the four-stage growth curve: the lag phase, where cells adjust and build the enzymes for the new medium; the log phase, where every cell divides steadily and the curve climbs exponentially; the stationary phase, where food shortage, space and waste accumulation drive the death rate up until it equals the birth rate; and the death phase, where the population declines, most cells dying while a few resistant ones persist. Growth needs the same handful of conditions for almost every species, food, liquid water, a suitable temperature in the 25 to 37 degrees Celsius band, an appropriate acidity and either air or its absence, so the preservers attack the list one item at a time in drying, salting, sugaring, smoking and refrigeration. The school culture is grown under aseptic technique, a term that means keeping unwanted microbes out while keeping the worker safe. The loop is sterilised in the burner flame to redness and cooled in the air beside the flame before it touches any culture; bottles are stopped and poured quickly; the lid of a Petri dish is raised only at a hinge; plates are sealed with tape strips and incubated upside down so condensation cannot fall on the agar; school plates are grown at about 25 degrees Celsius rather than body temperature because that restraint discourages human pathogens. A plate grown from a cough, pond water or refuse is never opened to smell or examine it closely, and hands and the bench are washed and wiped at the end. For honest counting a known volume is diluted serially, one cubic centimetre into nine to make a tenfold dilution, then plated on nutrient agar, the colony count multiplied back through the dilution factor giving colonies per cubic centimetre of the original culture.",
          "bulletPoints": [
            "Binary fission doubles the cell; with a 20-minute generation one cell gives 2 to the power n in n generations.",
            "Growth curve phases: lag, log, stationary, death; the stationary phase matches death with division.",
            "Conditions: food, water, suitable temperature, acidity, oxygen or its absence; preservation removes one of them.",
            "Aseptic steps: flame the loop and cool it, work beside the flame, lift the lid barely, tape and invert the plate, incubate at 25 degrees Celsius.",
            "Serial dilution plating converts colonies back to original counts; grown pathogen plates stay closed."
          ],
          "keyTakeaway": "Growth is doubling under fixed conditions, and the aseptic method protects the culture from the air and the student from the culture.",
          "realWorldExample": "In the laboratory at a senior high school at Winneba the biology club plates diluted pond water, tapes the lids, incubates upside down in a cupboard away from the sun, and counts only through the plastic, recording the colonies after three days."
        },
        {
          "title": "Decomposition, Ghanaian Food Production and Disease",
          "content": "The useful work begins where life ends. Saprophytic bacteria and fungi pour enzymes onto dead leaves, carcasses and faeces, absorb the digested products and leave behind simple inorganic substances, carbon dioxide to the air and ammonium, nitrates, phosphates and sulphates to the soil, the same substances the nitrogen and phosphorus cycles then route back into crop roots; a maize field at Ejura keeps its fertility only because decomposers mine the stubble. Termites and earthworms shred the litter first and speed that chemical work. Food technology is controlled microbial action. Kenkey and akpotto depend on lactic-acid bacteria souring boiled maize dough, with yeast giving softness; pito and kasila beers and palm wine are yeast turning grain and sap sugars into alcohol and carbon dioxide; dawadawa is fermented locust beans made soft and pungent by Bacillus; yoghurt is milk soured by bacteria and packed in Accra. Moulds that rot stored maize, groundnuts and cassava chips are the daily spoilage loss, and some of them release aflatoxins that damage the liver, so grain must be dried to a safe moisture before bagging. The harmful side is equally clear. Cholera and typhoid travel the faecal-oral route in dirty water and unwashed hands, so the recurring cholera in Accra and Takoradi peri-urban settlements is a water and sanitation problem before it is a medical one; tuberculosis moves in dried droplet nuclei coughed into a shared room; leprosy needs long close contact. Fungal ills include ringworm and athlete's foot spreading through shared towels and slippers in a boarding house. Viral ills include influenza, measles, yellow fever and HIV/AIDS, met by vaccination under the Extended Programme on Immunisation, by screened blood and by education rather than by drugs that kill bacteria, and on the farm by maize streak virus carried by leafhoppers and cassava mosaic spread through whitefly and infected cuttings. Antibiotics, penicillin from the mould Penicillium among them, are saved only by right dosing, a finished course and no use for a common cold, because a shortened course leaves the naturally resistant bacteria alive to multiply and hand on resistance genes, and drug-resistant tuberculosis is now treated in Ghanaian hospitals.",
          "bulletPoints": [
            "Decomposers release enzymes externally and return nitrates, phosphates and carbon dioxide to the cycle.",
            "Kenkey and akpotto use lactic-acid bacteria, palm wine and pito use yeast, dawadawa uses Bacillus.",
            "Faecal-oral diseases such as cholera and typhoid are broken by chlorinated water, latrines and hand washing with soap.",
            "Viruses have no antibiotic cure; vaccination, screening and education are the tools against them.",
            "Resistance grows when a course is stopped early or doses are too small; unfinished medicine is a public hazard."
          ],
          "keyTakeaway": "The same microbial world ferments the nation's food, builds the soil's fertility and sends cholera through a community, so control rests on water, hygiene and correct drug use.",
          "realWorldExample": "A kenkey seller at Tema Community 25 who covers her bowls against flies, washes her hands before serving and keeps the unsold portion cold is practising the disease control that the district health educator teaches, while her neighbour's dawadawa beans soften through overnight Bacillus action."
        }
      ],
      "commonMistakes": [
        "Writing that a virus divides by binary fission like a bacterium; new virus particles are assembled inside the host cell from materials the host supplies.",
        "Choosing an antibiotic to treat a viral infection such as influenza or AIDS, or naming a virus as the cause of cholera, which is bacterial.",
        "Describing unsafe laboratory practice as aseptic, for example opening a grown plate to smell the colonies, incubating school cultures at body temperature, or using an uncooled hot loop that kills the inoculum.",
        "Claiming all bacteria are harmful and forgetting that decomposition, fermentation and nitrogen fixation are microbial services."
      ],
      "wassceExamTips": [
        "Paper 1 comparison items hinge on four words, prokaryotic, eukaryotic, capsid, binary fission; learn what structure each word owns before you read the options.",
        "In a Paper 2 question on the growth curve, sketch the four-phase curve with labelled axes, number of bacteria against time, and give one cause of the stationary phase; the axes are separately marked.",
        "For Paper 3 alternative practical on aseptic technique, list the steps in order with the reason for each, loop flamed and cooled, work beside a flame, lid raised a little, plate inverted and taped; method marks follow the reasons.",
        "When asked to name a Ghanaian fermented food, give the microbe with it, lactic-acid bacteria for kenkey, yeast for palm wine, Bacillus for dawadawa, because a food alone earns only half the mark."
      ],
      "summaryChecklist": [
        "I can compare bacterial, fungal and viral structure with nucleus, wall, nucleic acid and method of multiplication.",
        "I can explain binary fission and calculate a population after a stated number of generations.",
        "I can draw the four-phase growth curve and name the condition that ends the log phase.",
        "I can describe aseptic technique, serial dilution counting and the safety limits of school cultures.",
        "I can give three Ghanaian fermented foods with their microbes, three diseases with their routes, and explain antibiotic resistance."
      ]
    },
    "examples": [
      {
        "id": "ex-bio-microbes-1",
        "title": "Binary Fission in a Bowl of Warm Kenkey Dough",
        "problem": "A single Lactobacillus cell is left in a bowl of warm kenkey dough. With the conditions favourable the population doubles every 20 minutes, and the dough stands from 3 p.m. to 8 p.m. before it is cooked. Assuming food and space are not limiting over this period, how many generations pass and how many bacteria are present at 8 p.m.?",
        "stepByStepSolution": [
          "Step 1 (M1): Total time from 3 p.m. to 8 p.m. is 5 hours, which is 5 x 60 = 300 minutes.",
          "Step 2 (M1): Number of generations equals total time divided by the generation time, so 300 / 20.",
          "Step 3 (A1): There are 15 generations.",
          "Step 4 (M1): Population after n generations from one cell equals 2 to the power n, so 2 to the power 15.",
          "Step 5 (A1): 2 to the power 15 = 32 768 cells.",
          "Step 6 (A1): Final answer, 15 generations and about 32 768 bacteria, on the stated assumption that none died and none lacked food; in a real bowl the curve would already be bending toward the stationary phase."
        ],
        "keyTakeaway": "Doubling every fixed generation time gives exponential growth, so count the generations first and then raise 2 to that power."
      },
      {
        "id": "ex-bio-microbes-2",
        "title": "Counting Bacteria in Pond Water by Serial Dilution",
        "problem": "To count the bacteria in a polluted pond sample, 1 cm3 of the sample is pipetted into 99 cm3 of sterile water, then 1 cm3 of that tube is pipetted into 9 cm3 of sterile water. Half a cubic centimetre of the second tube is spread on nutrient agar, and after incubation 45 colonies grow. Calculate the number of bacteria per cubic centimetre of the original pond water.",
        "stepByStepSolution": [
          "Step 1 (M1): The first dilution makes the sample volume up from 1 cm3 to 100 cm3 total, a dilution factor of 100.",
          "Step 2 (M1): The second dilution is 1 cm3 made up to 10 cm3, a factor of 10, so the combined factor is 100 x 10.",
          "Step 3 (A1): The combined dilution factor is 1000.",
          "Step 4 (M1): 45 colonies grew from 0.5 cm3 plated, so colonies per cm3 of the diluted tube equals 45 / 0.5.",
          "Step 5 (A1): The diluted tube holds 90 bacteria per cm3.",
          "Step 6 (M1): Original concentration equals diluted count multiplied by the combined dilution factor, so 90 x 1000.",
          "Step 7 (A1): The pond water contains 90 000 bacteria per cm3; each colony is assumed to have grown from one cell."
        ],
        "keyTakeaway": "Work back through every dilution factor and remember the plated volume, since colonies are counted per volume actually spread."
      }
    ],
    "quiz": {
      "id": "quiz-bio-micro-organisms",
      "topicId": "shs2-bio-t3-micro-organisms-roles-in-ghana",
      "title": "Micro-organisms and Their Roles Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-microbes-1",
          "quizId": "quiz-bio-micro-organisms",
          "questionText": "Which statement correctly describes a virus?",
          "optionA": "A prokaryotic cell that divides by binary fission in moist food",
          "optionB": "A protein coat enclosing either DNA or RNA, copied only inside a living host cell",
          "optionC": "A eukaryotic cell with a chitin wall that reproduces by spores",
          "optionD": "A motile cell with flagella that feeds on dead organic matter",
          "correctOption": "B",
          "subConcept": "Viral structure",
          "explanation": "A virus has no cell structure and no metabolism; a capsid of protein holds one kind of nucleic acid and the host cell machinery assembles new particles. Option A describes a bacterium, option C a fungus, and option D a saprophytic protist.",
          "remediationTip": "Draw and label a bacteriophage with capsid, nucleic acid and tail fibres, and write one line on why it is not a cell."
        },
        {
          "id": "q-bio-microbes-2",
          "quizId": "quiz-bio-micro-organisms",
          "questionText": "School Petri-dish cultures are incubated at about 25 degrees Celsius rather than 37 degrees Celsius mainly to",
          "optionA": "slow the growth of human body pathogens and reduce the risk they multiply",
          "optionB": "keep the agar from melting at the higher heat",
          "optionC": "make every colony the same colour for counting",
          "optionD": "speed up binary fission so results appear the next morning",
          "correctOption": "A",
          "subConcept": "Aseptic technique and safety",
          "explanation": "A cooler incubation temperature discourages microbes adapted to the human body, the ones most likely to cause illness. Agar melts well above 37 degrees Celsius, and colour and speed are not the safety reason.",
          "remediationTip": "Write a five-point safety card for the culture practical and keep it in your file for Paper 3 viva questions."
        },
        {
          "id": "q-bio-microbes-3",
          "quizId": "quiz-bio-micro-organisms",
          "questionText": "The sour taste of well-fermented kenkey dough is produced chiefly by",
          "optionA": "mould hyphae digesting the starch",
          "optionB": "viruses attacking the maize cells",
          "optionC": "yeast producing oxygen bubbles",
          "optionD": "lactic-acid bacteria converting sugars to lactic acid",
          "correctOption": "D",
          "subConcept": "Microbes in Ghanaian food",
          "explanation": "Lactic-acid bacteria ferment the dough sugars into lactic acid, which sours and partly preserves the kenkey, while yeast adds softness. Moulds spoil rather than sour the dough, viruses do not ferment, and yeast fermentation gives carbon dioxide and alcohol, not oxygen.",
          "remediationTip": "Match each local food to its microbe on a two-column card: kenkey, dawadawa, palm wine, yoghurt."
        },
        {
          "id": "q-bio-microbes-4",
          "quizId": "quiz-bio-micro-organisms",
          "questionText": "Antibiotic resistance in a community increases fastest when patients",
          "optionA": "take the medicine exactly as prescribed for the full course",
          "optionB": "receive vaccination against measles and yellow fever",
          "optionC": "stop a course early once the fever has settled",
          "optionD": "wash their hands before preparing food",
          "correctOption": "C",
          "subConcept": "Antibiotics and resistance",
          "explanation": "A shortened course leaves the toughest, partially resistant bacteria alive; they multiply and pass on resistance genes. Full courses, vaccination and hand washing all lower resistance or prevent infection instead.",
          "remediationTip": "Explain the selection story in four sentences to a partner and state why a cold without bacterial complication gains nothing from antibiotics."
        },
        {
          "id": "q-bio-microbes-5",
          "quizId": "quiz-bio-micro-organisms",
          "questionText": "Which feature places a bacterium among the prokaryotes rather than the eukaryotes?",
          "optionA": "It has no nuclear membrane, so its DNA loop lies free in the cytoplasm",
          "optionB": "It has a cell wall outside the plasma membrane",
          "optionC": "It can move with a flagellum",
          "optionD": "It reproduces by dividing into two cells",
          "correctOption": "A",
          "subConcept": "Bacterial structure",
          "explanation": "Prokaryote means before nucleus; the absence of a membrane-bound nucleus is the defining feature. A wall, a flagellum and binary fission occur in various organisms and do not settle the question.",
          "remediationTip": "Sketch a bacterial cell and a fungal cell side by side and circle every structure found in only one of them."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t1-responses-coordination-and-regulation",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Response, Coordination and Regulation",
    "description": "Receptor, coordinator and effector as the general plan behind every response; the structure of the neuron and the working of a reflex arc, the brain, spinal cord and autonomic nerves, the eye and the ear as sense organs, the ductless endocrine glands and their hormones, homeostasis, and the hormone-controlled tropisms and nastic movements of plants.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Coordination keeps the millions of cells of one organism working together; in animals it is nervous (fast, brief, local) and hormonal (slower, wider, longer-lasting), in plants it is almost entirely hormonal.\n• Every response follows one plan: a receptor detects the stimulus, a coordinator links and decides, an effector (a muscle or a gland) carries out the response. Write the three words in that order in Paper 2 and the mark is secured.\n• Irritability or sensitivity is one of the seven life processes; mimosa folding when brushed and a sunflower turning to the sun are both responses, not merely movements.\n• A motor neuron has dendrites that bring impulses towards the cell body, one long axon that carries impulses away, a myelin sheath that speeds conduction and bare nodes of Ranvier between the sheath cells; a sensory neuron runs from receptor to the central nervous system and a relay neuron joins the two inside the cord.\n• A reflex arc runs receptor, sensory neuron, relay neuron in the spinal cord, motor neuron, effector; the cord replies before the brain is informed, which is why the hand leaves a hot pot before you feel the pain.\n• Inherited reflexes include the knee-jerk, withdrawal from pain, blinking, coughing, sneezing, swallowing and pupil constriction; they are protective, unlearned and the same in all normal people.\n• At a synapse the impulse cannot jump the gap as electricity; a chemical transmitter (acetylcholine) is released from the knob of the axon and carries the message across, so impulses pass in one direction only.\n• The central nervous system is the brain and spinal cord, protected by the skull, vertebrae, three meningeal layers and cerebrospinal fluid; the peripheral nervous system is the 12 pairs of cranial nerves and the 31 pairs of spinal nerves.\n• The cerebrum governs learning, memory, speech, intelligence and voluntary movement; the cerebellum coordinates balance, posture and smooth movement; the medulla oblongata controls the involuntary heart beat, breathing rate, swallowing and the width of blood vessels.\n• The hypothalamus is the body's thermostat and water centre; it also links nervous and hormonal control by driving the pituitary gland.\n• The autonomic nervous system supplies smooth muscle and glands: the sympathetic branch speeds the heart, dilates the pupil, widens the bronchioles and stops digestion, while the parasympathetic (vagus) branch slows the heart, constricts the pupil and promotes digestion.\n• In the eye the cornea and aqueous humour refract light, the lens focuses by accommodation, and the retina carries rod cells for dim light and black-and-white vision and cone cells for bright light and colour, cones being crowded at the fovea; the image on the retina is real, inverted and diminished.\n• Short-sightedness (myopia) forms the image in front of the retina and is corrected by a diverging concave lens; long-sightedness (hypermetropia) forms it behind the retina and needs a converging convex lens; astigmatism, presbyopia and colour blindness are other common defects.\n• Magnification equals image size divided by real size; a light microscope with a 10 times eyepiece and a 40 times objective gives 400 times total magnification, so a cell 0.2 mm wide appears 80 mm across.\n• The ear converts sound vibrations into impulses: the ear pinna collects sound, the eardrum vibrates, the three ear ossicles in the middle ear amplify, the cochlea houses the sense cells, the semicircular canals and utriculus detect balance and head position, and the eustachian tube balances air pressure on the two faces of the eardrum.\n• Ductless endocrine glands pour hormones straight into the blood: pituitary (growth hormone and the trophic hormones), thyroid (thyroxine, which needs dietary iodine), adrenal (adrenaline for fight or flight), islets of the pancreas (insulin, which lowers blood glucose), testes (testosterone) and ovaries (oestrogen and progesterone).\n• Hormone faults are examinable: too much growth hormone in childhood gives gigantism and too little gives dwarfism; too little insulin gives diabetes mellitus with glucose in the urine; an underactive thyroid in childhood stunts body and mental growth and in an adult with iodine deficiency it produces goitre.\n• Homeostasis is the maintenance of a near-constant internal environment, about 37 degrees Celsius body temperature, steady water and salt balance and steady blood glucose, and it works by negative feedback, the response shutting off the change that triggered it.\n• Temperature control uses the skin: in heat, sweat evaporates, surface blood vessels dilate and shivering stops; in cold, vessels constrict, hair erector muscles raise the hair, and shivering generates heat in the muscles.\n• Plants show directional growth responses called tropisms, made by auxin: a shoot is positively phototropic because auxin gathers on the shaded side and makes those cells elongate faster; a root is positively geotropic while a shoot is negatively geotropic; hydrotropism guides roots to water and thigmotropism coils a tendril round its support.\n• Auxin is made at the growing tip, moves downwards and in high concentration inhibits a root while promoting a shoot, which explains the different curvature of the two organs in the same light.\n• Nastic movements are not directional: mimosa leaflets fold when touched and flowers open in bright light; taxes are whole-organism movements, a mosquito flying towards light being positive phototaxis and Trypanosoma swimming towards oxygen being positive taxis.\n• Other plant hormones matter in Ghanaian agriculture: gibberellins lengthen the stem and break seed dormancy, abscisic acid closes stomata during drought and keeps seeds dormant, and ethene ripens mango, banana and pawpaw after harvest.\n• Nervous compared with hormonal control: nerve impulses travel along fibres in less than a tenth of a second, act on one precise organ and pass off quickly; hormones travel in the blood, take seconds to minutes, affect every target cell they reach and produce lasting effects such as growth.",
    "detailedNotes": {
      "overview": "This topic explains how an organism detects a change in its environment and answers it as a single coordinated unit. You will learn the general plan of receptor, coordinator and effector, then apply it first to the nervous system, where the neuron and the reflex arc do the work, and then to the hormonal system, where ductless endocrine glands release hormones into the blood and regulate growth, metabolism, blood sugar and water balance. The sense organs, the eye and the ear, are treated as specialised receptors, including the defects that bring candidates to an eye clinic and the arithmetic of magnification used in biological drawings. The topic closes with homeostasis, the steady internal state that all these systems defend, and with coordination in plants, where auxin and the other plant hormones produce the tropisms and nastic movements you can demonstrate in a school garden.",
      "introduction": "Begin by listing five responses you performed before reaching the classroom today and marking the receptor, the coordinator and the effector in each. Then set up the classic plant experiments of the term: a coleoptile in a box with one light hole, two seedlings in a dish of bran with water applied on one side only, and a bean tendril trained on a stick, all left for two or three days and drawn at 400 times where a microscope is used. Practise drawing a motor neuron and a reflex arc with labels, because Paper 3 rewards neat labelled diagrams far more than long sentences.",
      "realWorldContext": "At a chop bar in Kumasi a cook lifting a covered pot of soup with a wet cloth drops it at once; the withdrawal was finished before the pain reached her mind, which is the reflex arc in plain sight. A driver carrying passengers on the Accra to Cape Coast highway brakes at the traffic light at Kasoa, and his heart keeps pounding for ten minutes afterwards because adrenaline released from the adrenal glands is still circulating. In the Upper East Region a schoolgirl with an untreated iodine-deficient goitre is recognised in class by the swelling at her neck, while a farmer at Wenchi whose mangoes are stored with ripening pawpaw sees them soften in three days because of ethene gas. Eye clinics in Tamale and Ho test pupils who cannot read the blackboard, and the diagnosis, short-sightedness corrected by a concave lens, is on almost every WASSCE paper.",
      "objectives": [
        "Trace the path of an impulse in a reflex arc and name the receptor, coordinator and effector in a given response",
        "Relate the structure of a motor, sensory and relay neuron to its function and explain the part played by the myelin sheath and the synapse",
        "State the functions of the cerebrum, cerebellum, medulla oblongata and hypothalamus and contrast sympathetic and parasympathetic action",
        "Explain how the eye forms an image, correct the two common refracting defects and calculate magnification from a drawing",
        "Name the major endocrine glands with one hormone and one function each, and explain homeostasis of temperature and blood sugar by negative feedback"
      ],
      "sections": [
        {
          "title": "The General Plan: Receptor, Coordinator, Effector",
          "content": "A stimulus is a change in the internal or external environment that an organism detects and answers; the answer is the response. However different a hydra and a human look, the machinery is the same three-part plan. A receptor is a sense cell or a nerve ending built to respond to one form of energy, so the rods and cones of the retina answer light, the taste buds answer chemicals dissolved in saliva, and the pain endings in the skin answer damage and extreme temperature. The receptor converts the stimulus into a nerve impulse, which is why a strong touch and a sound are felt as different even though both travel to the brain as the same kind of electrical signal. A coordinator receives impulses, compares them with what the body already knows and decides on the answer; in a simple reflex the coordinator is a relay neuron inside the spinal cord, in conscious action it is an area of the cerebrum, and in hormonal control it may be a gland such as the pancreas reading the glucose level of the blood. The effector is the organ that executes the decision, and only two tissues can act as effectors, muscle, which contracts, and gland, which secretes. Because every question on coordination can be answered by naming those three components in order, learn to write them out with the correct organ named in each case, and never describe a muscle as a receptor.",
          "bulletPoints": [
            "Stimulus is a detectable change; response is the activity that follows; sensitivity or irritability is a life process.",
            "Receptor, coordinator, effector is the universal plan of a response in animals and plants.",
            "Only muscle and gland can be effectors; a receptor is a sense cell or a bare nerve ending.",
            "Nervous coordination is fast, local and short-lived; hormonal coordination is slower, widespread and longer-lasting.",
            "Plants have no neurons, so their responses are brought about by growth hormones such as auxin."
          ],
          "keyTakeaway": "For any response, name the receptor that detects it, the coordinator that decides and the effector that acts, in that order.",
          "realWorldExample": "At a Makola stall a trader grabs a hot frying pan handle with a bare hand and lets go instantly; the heat receptors in her fingertips are the receptors, a relay neuron in her spinal cord is the coordinator, and the biceps and forearm muscles are the effectors."
        },
        {
          "title": "The Neuron and the Reflex Arc",
          "content": "The nervous system is built of neurons, each a single cell adapted for rapid communication. A motor neuron has short, heavily branched dendrites that receive impulses and carry them towards a cell body containing the nucleus, and one long axon that carries impulses away to a muscle or gland; the axon is wrapped in a fatty myelin sheath formed by Schwann cells, and the gaps between the sheath cells are the nodes of Ranvier. Myelin insulates the fibre and makes the impulse travel many times faster, which is why a thickly myelined fibre conducts in the order of tens of metres each second while an unmyelined fibre crawls. A sensory neuron has its cell body in a swelling just outside the spinal cord and carries impulses from a receptor into the central nervous system, while a relay neuron lies entirely inside the cord or brain and joins the two. Impulses cross a synapse, the junction between one neuron and the next, only in one direction, because the knob of the outgoing axon releases a chemical transmitter, acetylcholine, which diffuses across the narrow gap and starts a new impulse in the next cell; the gap therefore slows the message slightly and drugs and fatigue act largely here. A reflex is the shortest, most automatic path the cord can build: receptor, sensory neuron, relay neuron, motor neuron, effector. It is inherited, requires no decision from the brain, and is protected from conscious interference, which is why a doctor tapping the tendon below the knee obtains a leg jerk even in a sleeping patient. The impulses also travel up the cord to the brain, so pain is felt a little later than movement; that delay is the proof that the cord, not the brain, ran the reflex.",
          "bulletPoints": [
            "Dendrites carry impulses towards the cell body; the axon carries impulses away from it.",
            "The myelin sheath speeds conduction; the nodes of Ranvier are the unmyelinated gaps.",
            "Sensory neurons enter the cord, relay neurons sit inside it, motor neurons leave it for an effector.",
            "At a synapse a chemical transmitter crosses the gap, so the impulse passes one way only and is slightly delayed.",
            "Reflex path: receptor, sensory neuron, relay neuron, motor neuron, effector; the brain is informed afterwards."
          ],
          "keyTakeaway": "A reflex is a fixed, inherited path through the spinal cord that protects the body faster than thought can.",
          "realWorldExample": "At a polyclinic in Sunyani a medical assistant tests a new student with the knee-jerk hammer; the stretch receptor in the tendon, the sensory and motor neurons in the leg and the quadriceps muscle as effector give the same kick in every healthy person."
        },
        {
          "title": "The Brain, the Spinal Cord and the Autonomic Nerves",
          "content": "The central nervous system has two protected parts. The brain lies in the skull, is covered by three meninges, and floats in cerebrospinal fluid which cushions it against jolts. Its largest part, the cerebrum, is a folded mass of grey matter with nerve centres for sensation, voluntary movement, speech, memory, reasoning and intelligence; the two halves are joined by a bridge of fibres. Beneath and behind it the cerebellum governs balance, posture and the smooth coordination of movement, and a person whose cerebellum is affected by alcohol walks with a stagger although his muscles are strong. The medulla oblongata, the lowest part of the brain continuing into the cord, contains the involuntary centres for heart rate, breathing depth and rate, swallowing, vomiting, sneezing and the diameter of blood vessels, which is why a medulla injury is so often fatal. Just above it the hypothalamus regulates body temperature, thirst and water balance and controls the pituitary gland, so it is the meeting point of nervous and hormonal control. The spinal cord is a column of nervous tissue running inside the neural arch of the vertebrae, grey matter inside and white nerve fibres outside; it coordinates reflexes below the level of injury and carries impulses up and down to the brain. Damage to the neck region of the cord, common in the motorcycle and trotro accidents on Ghanaian highways, cuts the messages to the legs and bladder and causes paralysis. Outside the central system the peripheral nerves carry messages to and from the body wall and organs, and among them the autonomic nervous system runs a two-branch control of smooth muscle and glands. The sympathetic nervous system prepares the body for emergency by quickening the heart, raising blood pressure, dilating the pupil and the bronchioles, stopping gut movement and sending glucose from the liver, while the parasympathetic system, whose chief nerve is the vagus, restores rest by slowing the heart, constricting the pupil and driving digestion and secretion.",
          "bulletPoints": [
            "Cerebrum: learning, memory, speech, voluntary action; cerebellum: balance and coordination; medulla: involuntary heart and breathing centres.",
            "Hypothalamus is the thermostat and water centre and drives the pituitary gland.",
            "The cord is protected by vertebrae, meninges and cerebrospinal fluid; grey matter lies inside, white fibres outside.",
            "Sympathetic branch races the heart and dilates pupil and bronchioles; parasympathetic branch slows the heart and promotes digestion.",
            "Cord injury above the waist removes both sensation and voluntary movement below the wound and paralyses bladder control."
          ],
          "keyTakeaway": "The brain decides, the cord relays and reflexes, and the autonomic nerves run the internal organs without any decision being made.",
          "realWorldExample": "An okada rider in Kumasi who is nearly struck by a reversing trotro feels his heart pound and his mouth go dry; that is his sympathetic system racing the heart and shutting off saliva, while the parasympathetic vagus branch brings both back to normal a few minutes later at the junction."
        },
        {
          "title": "Sense Organs: The Eye and the Ear",
          "content": "The eye is an organ of photoreceptors set in a protective wall. The white tough sclera keeps the shape, the transparent cornea in front refracts light into the eyeball, and the iris, a circular muscle with a central pupil, controls how much light enters by contracting and dilating. Behind the iris the ciliary body suspends the biconvex lens by ligaments; the aqueous humour fills the chamber in front of the lens and the vitreous humour the main cavity. The retina lining the back wall carries the sense cells: rod cells contain a pigment based on vitamin A, are sensitive to weak light and give black-and-white vision, so a student walking from bright sun into a dim classroom sees nothing at first; cone cells need bright light and give colour vision and sharp detail, and they are crowded at the fovea, the small pit on the line of the pupil. Where the optic nerve leaves the eyeball there are no sense cells, and this is the blind spot, demonstrated easily by closing one eye and moving a mark sideways. Light is refracted mainly at the cornea and finally by the lens, which forms on the retina an image that is real, inverted and diminished; the brain reads it upright. For near objects the ciliary muscle contracts, the ligaments slacken, the lens becomes thicker and more refractive, and for distant objects it flattens; this adjustment of lens curvature is accommodation, and a loss of elasticity with age causes the difficulty in near reading called presbyopia. Defects of refraction are the ordinary examination questions: in short-sightedness the eyeball is too long or the lens too strong, so the image falls in front of the retina and distant objects blur, corrected by a diverging concave lens; in long-sightedness the image forms behind the retina and near objects blur, corrected by a converging convex lens; astigmatism is irregular curvature of the cornea giving distorted lines, corrected by a cylindrical lens, and colour blindness is an inherited lack of one cone pigment, mostly in men. The ear is both a hearing and a balance organ. The ear pinna funnels sound waves into the canal and the eardrum vibrates; the malleus, incus and stapes of the middle ear amplify and pass the vibrations to the oval window, and the fluid in the coiled cochlea stirs sense hair cells whose impulses travel on the auditory nerve. The eustachian tube runs from the middle ear to the throat and equalises pressure, which is why yawning clears a blocked ear on an ascent. Semicircular canals and the utriculus contain fluid and hair cells that detect head rotation and position, giving the sense of balance, so spinning on a chair leaves the world turning afterwards. Repeated loud noise from earphones and from festival drumming kills cochlear hair cells, and the loss is permanent.",
          "bulletPoints": [
            "Cornea refracts, iris controls the pupil, ciliary body and lens focus, retina receives.",
            "Rods give dim-light black-and-white vision and need vitamin A; cones give bright-light colour vision and are densest at the fovea.",
            "The retinal image is real, inverted and diminished; accommodation is the change of lens curvature by the ciliary muscle.",
            "Myopia is corrected with a concave lens, hypermetropia with a convex lens, astigmatism with a cylindrical lens.",
            "Cochlea hears, semicircular canals balance, eustachian tube equalises pressure; magnification equals image size divided by real size."
          ],
          "keyTakeaway": "The eye forms an inverted real image by refraction and the ear converts vibration and head movement into impulses; both are receptors, not effectors.",
          "realWorldExample": "A Basic School pupil in Bawku who cannot read the words on the blackboard but sees his desk clearly is short-sighted, and the dispensary lens that fixes it is a diverging concave lens; the same clinic tests night blindness, which is treated with vitamin A from eggs, green leafy vegetables and yellow mango."
        },
        {
          "title": "Hormones, Homeostasis and Coordination in Plants",
          "content": "Endocrine glands are ductless; they release hormones directly into the blood, and a hormone affects only its target organs although it travels everywhere. The pituitary gland at the base of the brain is called the master gland because its trophic hormones drive other glands, and its growth hormone sets the rate at which the bones lengthen; too much of it in childhood gives gigantism with very great but weak stature, too little gives pituitary dwarfism with a normally proportioned adult of small height, and too much in an adult thickens the jaw and hands. The thyroid gland in the neck secretes thyroxine, which sets the general rate of metabolism and needs iodine from the diet; an iodine-poor diet in the northern regions produces simple goitre, an underactive thyroid in childhood stunts growth and mental development as cretinism, while overactivity quickens heart rate and wastes the body. The adrenal glands above the kidneys release adrenaline, which in an emergency makes the heart beat faster and stronger, sends glucose from the liver, dilates the pupil and bronchioles and diverts blood from the gut, the chemical partner of the fight or flight response. The islets of Langerhans in the pancreas release insulin, which drives glucose into the liver and body cells and so lowers the blood sugar level; too little insulin leaves glucose in the blood and in the urine, which is diabetes mellitus. The testes secrete testosterone, which brings the male changes of puberty, and the ovaries secrete oestrogen and progesterone, which build up the womb lining and control the menstrual cycle. All such systems are regulated by negative feedback: the result of an action switches off the action, so a rising blood sugar triggers insulin, the falling sugar removes the trigger, and the level is held within a narrow band. Homeostasis is that defence of a constant internal environment, and the three variables examined most often are temperature near 37 degrees Celsius, water and salt balance managed by the kidney under the antidiuretic hormone from the pituitary, and blood glucose managed by insulin and glucagon. The skin is the main organ of temperature control, losing heat by radiation when surface vessels dilate, by evaporation of sweat and, when all else fails, gaining heat by the involuntary contraction of muscles in shivering. Plants coordinate by hormones rather than nerves. Auxin is produced at the tips of shoots and roots and moves away from light, so in a one-sided beam it collects on the shaded side of the shoot, where it speeds cell elongation and the tip bends towards the light, a positive phototropism; the same concentration in a root inhibits elongation, so the root's shaded side grows less and the root turns away from the light. Gravity is answered oppositely, the shoot being negatively geotropic and the root positively geotropic, water draws the root as positive hydrotropism, and touch coils a tendril in positive thigmotropism. Nastic movements such as the folding of mimosa leaflets on shaking are not related to the direction of the stimulus. Gibberellins lengthen the internodes and start seed germination, abscisic acid closes stomata in drought and holds buds dormant, and ethene ripens fruit, a fact used by market women who pack green mango with ripe pawpaw.",
          "bulletPoints": [
            "Pituitary: growth hormone and trophic hormones; thyroid: thyroxine needing iodine; adrenal: adrenaline; pancreas: insulin; gonads: sex hormones.",
            "Hormones travel in blood, act slowly, widely and for a long time; each has one target organ.",
            "Negative feedback holds blood sugar, water balance and temperature within narrow limits.",
            "Auxin from the shoot tip accumulates on the shaded side, so a shoot bends to light while a root bends away.",
            "Gibberellin lengthens stems, abscisic acid closes stomata and keeps dormancy, ethene ripens fruit."
          ],
          "keyTakeaway": "Hormones are chemical messengers held in check by negative feedback, and in plants the same principle of chemical control produces tropisms.",
          "realWorldExample": "A woman in a village near Naleri with an enlarged neck is treated for iodine-deficient goitre with iodised salt, while her neighbour who has untreated diabetes mellitus passes sweet urine because her pancreas secretes too little insulin to return the blood glucose to normal."
        }
      ],
      "commonMistakes": [
        "Naming the effector as the receptor, for example writing that the muscle of the arm detects heat; the receptor is the sense organ or nerve ending, the effector is only a muscle or a gland.",
        "Drawing a reflex arc without the relay neuron or with the sensory and motor neurons reversed; the sensory neuron has its cell body in the dorsal root and the motor neuron leaves by the ventral root to the muscle.",
        "Saying that the impulse jumps the synapse as electricity; it crosses by a chemical transmitter, which is why it is one-way and slightly delayed.",
        "Confusing the cerebellum with the cerebrum, or giving the medulla the credit for balance; cerebellum is posture and coordination, medulla is heart rate and breathing.",
        "Correcting short-sightedness with a convex lens; myopia needs a diverging concave lens, and only hypermetropia needs a convex lens.",
        "Calling the pituitary the gland that makes thyroxine or describing endocrine glands as having ducts; they are ductless and the thyroid secretes thyroxine."
      ],
      "wassceExamTips": [
        "Paper 1 objective questions on coordination nearly always test the sequence of a reflex arc or the lens that corrects a defect; learn the order of the five components and the two lens names until they are instant.",
        "In Paper 2 structured questions, marks are given for each correctly labelled part, so a diagram of a motor neuron with cell body, dendron, axon, myelin sheath and nerve ending earns full method credit even if the sentence is short.",
        "When asked to compare nervous and hormonal control, write four contrasted pairs, speed, pathway, spread and duration, rather than two paragraphs that repeat each other.",
        "Paper 3 alternative-practical asks you to interpret a tropism experiment: state the aim, the control seedling, the observed curvature and the conclusion about auxin distribution, in that order, because each is separately marked.",
        "For an endocrine question give gland, hormone, one function and one fault in four short lines; candidates who write only the gland name lose both the hormone mark and the function mark.",
        "Do not state that hormones are carried by nerves or that a reflex is learned; examiners award no marks for these and may deduct for the error in an otherwise good answer."
      ],
      "summaryChecklist": [
        "Can I name the receptor, coordinator and effector in any response I am given?",
        "Can I draw and label a motor neuron and the five-part path of a reflex arc?",
        "Can I state the function of each part of the brain and contrast sympathetic with parasympathetic action?",
        "Can I explain image formation in the eye, correct myopia and hypermetropia and calculate magnification from a drawing?",
        "Can I list six endocrine glands with one hormone and one disorder each and explain negative feedback in temperature and blood sugar control?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-coord-1",
        "title": "Tracing a Withdrawal Reflex and Timing the Impulse",
        "problem": "A student in the school laboratory touches the hot rim of a beaker over a burner. The nerve impulse travels a total distance of 1.4 m from the receptors in the finger, through the spinal cord and out to the arm muscle, along fibres conducting at 70 m/s. The observed reflex time, from touch to the hand leaving the beaker, is 0.2 s. Trace the path of the impulse and find how much of the reflex time is not taken up by conduction along the fibres.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the reflex arc in order, heat receptor in the skin, sensory neuron to the spinal cord, relay neuron inside the grey matter, motor neuron out to the effector, biceps and forearm muscle contracting.",
          "Step 2 (M1): Note that the coordinator here is the spinal cord, not the brain, so the arm moves before the impulse travelling up the cord reaches the cerebrum and pain is felt.",
          "Step 3 (M1): Calculate the conduction time using time equals distance divided by speed, so t = 1.4 / 70.",
          "Step 4 (A1): t = 0.02 s, the time the impulse spends travelling along the myelinated fibres.",
          "Step 5 (M1): Subtract the conduction time from the observed reflex time to find the delay at the synapses and in the muscle, 0.2 - 0.02.",
          "Step 6 (A1): The remaining time is 0.18 s, accounted for by transmission across synapses, the contraction of the muscle and the relaxation of the antagonist.",
          "Step 7 (A1): Final answer, conduction takes 0.02 s and the other 0.18 s of the 0.2 s reflex time is taken by synaptic delay and muscle response, which is why a reflex is fast but not instantaneous."
        ],
        "keyTakeaway": "Conduction along a myelinated nerve is only a small part of a reflex time; the synapses and the muscle cause most of the delay."
      },
      {
        "id": "ex-bio-coord-2",
        "title": "Magnification of a Drawn Neuron",
        "problem": "A student examines a prepared slide of a motor neuron under a light microscope fitted with a 10 times eyepiece lens and a 40 times objective lens, then draws the cell so that its length on the page measures 90 mm. Find the total magnification used, the true length of the neuron in millimetres and micrometres, and the drawing length that a 0.15 mm wide cell would need at the same magnification.",
        "stepByStepSolution": [
          "Step 1 (M1): Total magnification of a compound microscope is the eyepiece magnification multiplied by the objective magnification, so 10 x 40.",
          "Step 2 (A1): Total magnification = 400 times.",
          "Step 3 (M1): Rearrange magnification equals image size divided by real size to make real size the subject, so real size equals image size divided by magnification, giving 90 / 400.",
          "Step 4 (A1): The true length of the neuron is 0.225 mm, which is 225 micrometres since 1 mm = 1000 micrometres.",
          "Step 5 (M1): For the reverse calculation multiply the real size by the magnification, so 0.15 x 400.",
          "Step 6 (A1): The drawing length required is 60 mm.",
          "Step 7 (A1): Final answers, magnification 400 times, true neuron length 0.225 mm or 225 micrometres, and a 0.15 mm cell drawn 60 mm long; every biological drawing must carry its magnification as a label."
        ],
        "keyTakeaway": "Magnification is image size over real size, and both directions of the calculation appear in Paper 3."
      }
    ],
    "quiz": {
      "id": "quiz-bio-responses-coordination",
      "topicId": "shs3-bio-t1-responses-coordination-and-regulation",
      "title": "Responses and Coordination Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-coord-1",
          "quizId": "quiz-bio-responses-coordination",
          "questionText": "Which sequence correctly shows the path of an impulse in a withdrawal reflex?",
          "optionA": "Receptor, sensory neuron, relay neuron, motor neuron, effector",
          "optionB": "Receptor, motor neuron, relay neuron, sensory neuron, effector",
          "optionC": "Effector, sensory neuron, relay neuron, motor neuron, receptor",
          "optionD": "Receptor, relay neuron, sensory neuron, brain, effector",
          "correctOption": "A",
          "subConcept": "Reflex arc",
          "explanation": "The impulse starts at the receptor, enters the cord on the sensory neuron, is passed by a relay neuron and leaves on the motor neuron to the effector. Option B reverses the entering and leaving fibres, and option D puts the brain in the path, which would make the action a voluntary one.",
          "remediationTip": "Sketch a labelled reflex arc five times from memory until the order is automatic."
        },
        {
          "id": "q-bio-coord-2",
          "quizId": "quiz-bio-responses-coordination",
          "questionText": "Which part of the brain coordinates balance, posture and the smooth execution of movement?",
          "optionA": "Medulla oblongata",
          "optionB": "Cerebellum",
          "optionC": "Cerebrum",
          "optionD": "Pituitary gland",
          "correctOption": "B",
          "subConcept": "Parts of the brain",
          "explanation": "The cerebellum governs balance and muscle coordination, so its disorder by alcohol shows as staggering. The medulla controls heart rate and breathing, the cerebrum controls conscious thought and voluntary movement, and the pituitary is an endocrine gland, not a coordinating centre of the brain proper.",
          "remediationTip": "Write three one-line function cards for cerebrum, cerebellum and medulla and test your partner."
        },
        {
          "id": "q-bio-coord-3",
          "quizId": "quiz-bio-responses-coordination",
          "questionText": "A person cannot see distant objects clearly because the image forms in front of the retina. The defect and its correction are",
          "optionA": "long-sightedness, corrected by a convex lens",
          "optionB": "astigmatism, corrected by a cylindrical lens",
          "optionC": "short-sightedness, corrected by a concave lens",
          "optionD": "short-sightedness, corrected by a convex lens",
          "correctOption": "C",
          "subConcept": "Defects of the eye",
          "explanation": "Focusing in front of the retina is myopia or short-sightedness, and a diverging concave lens pushes the image back onto the retina. A convex lens would converge the rays even sooner and is the correction for long-sightedness, where the image falls behind the retina.",
          "remediationTip": "Draw the two ray diagrams, myopia with a concave lens and hypermetropia with a convex lens, and label where the image falls."
        },
        {
          "id": "q-bio-coord-4",
          "quizId": "quiz-bio-responses-coordination",
          "questionText": "Insulin is a hormone that",
          "optionA": "raises blood glucose by emptying glycogen from the liver",
          "optionB": "stimulates the growth of the long bones in childhood",
          "optionC": "increases the rate of metabolism when iodine is available",
          "optionD": "lowers blood glucose by driving it into the liver and body cells",
          "correctOption": "D",
          "subConcept": "Endocrine glands and hormones",
          "explanation": "Insulin from the islets of Langerhans removes glucose from the blood, and too little of it causes diabetes mellitus. Option A describes glucagon, option B the growth hormone of the pituitary, and option C thyroxine of the thyroid.",
          "remediationTip": "Make a table of gland, hormone, function and disorder and fill in only the pancreas row from memory each morning."
        },
        {
          "id": "q-bio-coord-5",
          "quizId": "quiz-bio-responses-coordination",
          "questionText": "A shoot bends towards a single source of light because",
          "optionA": "light destroys the cells on the lit side of the stem",
          "optionB": "auxin collects on the shaded side and makes those cells elongate faster",
          "optionC": "the plant pulls itself towards light by reflex action",
          "optionD": "cells on the lit side grow faster than the shaded side",
          "correctOption": "B",
          "subConcept": "Tropisms and auxin",
          "explanation": "Auxin moves to the shaded side of the shoot, where it promotes elongation, so the shaded side outgrows the lit side and the tip bends towards the light. Option D gives the opposite growth pattern, which would bend the shoot away from the light, and option C wrongly borrows nervous language from animals.",
          "remediationTip": "Draw the coleoptile box experiment, mark the auxin arrows, and state the result for root and shoot separately."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t1-molecular-biology-dna-rna-protein",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 6,
    "title": "Molecular Biology: DNA, RNA, Protein Synthesis and Gene Technology",
    "description": "DNA structure and base pairing, replication evidence, the genetic code and codons, transcription and translation, ribosomes and the types of RNA, gene and chromosome relation, mutation at molecular level, genetic engineering and insulin production, gel electrophoresis, and PCR and DNA fingerprinting in simple terms.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Deoxyribonucleic acid, DNA, is two polynucleotide chains twisted into a double helix; each chain has a backbone of alternating deoxyribose sugar and phosphate with one of four bases projecting from every sugar, adenine, thymine, guanine and cytosine.\n• Complementary base pairing holds the two chains with hydrogen bonds: adenine always pairs with thymine, guanine always with cytosine, and this is why Chargaff found the amount of adenine equal to thymine and guanine equal to cytosine in every DNA sample.\n• A nucleotide is one unit: a sugar plus a phosphate plus a base; ribonucleic acid, RNA, differs by using ribose instead of deoxyribose, uracil instead of thymine, and by being single-stranded in the cell.\n• The evidence for the structure came from Chargaff's ratios, the X-ray diffraction photographs of Rosalind Franklin and Maurice Wilkins showing a regular helix, and the 1953 model building of Watson and Crick.\n• DNA replicates semi-conservatively before every cell division: the helix unwinds, the two strands separate, free nucleotides pair A with T and G with C on each exposed strand, and the backbone is joined, so each daughter molecule carries one old strand and one new strand.\n• Meselson and Stahl proved semi-conservative replication by growing bacteria first in heavy nitrogen and then in light nitrogen and reading the band positions of the DNA generation by generation; the conservative plan was ruled out.\n• A gene is a length of DNA carrying the code for one polypeptide; chromosomes are very long DNA molecules wound on histone proteins, with each gene at a fixed position, its locus, and a human body cell carries 46 chromosomes in 23 pairs.\n• Transcription copies the code of a gene onto messenger RNA in the nucleus, with uracil taking the place of thymine, and the mRNA leaves through nuclear pores to a ribosome in the cytoplasm.\n• Three kinds of RNA work in protein synthesis: messenger RNA carries the code, transfer RNA has a three-base anticodon and an amino-acid attachment site and brings the right amino acid, and ribosomal RNA with protein forms the ribosome reading the message.\n• The genetic code is a triplet code: three bases form one codon, one codon specifies one amino acid, sixty-four codons cover twenty amino acids so the code is degenerate, AUG is the start and codes methionine, and UAA, UAG and UGA are stop codons with no matching tRNA.\n• Translation runs at the ribosome: codons are read one after another, tRNA molecules deliver the amino acids matching each anticodon, peptide bonds join them into a polypeptide chain which folds into the working protein; several ribosomes on one mRNA make many copies of the same protein.\n• Proteins are the products examined: enzymes such as amylase, haemoglobin, keratin of hair and nail, insulin, and antibodies, so a gene acts by controlling which protein is made.\n• A gene mutation is a change in the base sequence: substitution of one base, as in the sickle-cell allele where one base change puts valine in place of glutamic acid in haemoglobin, plus deletion and insertion, the latter two causing a frameshift that alters every codon downstream.\n• Mutagens that raise the mutation rate include ultraviolet light, ionising radiation such as X-rays, and chemicals such as those in tobacco smoke; most mutations harm the individual but mutations are the raw material of evolution.\n• Genetic engineering cuts a wanted gene out of DNA with restriction enzymes, joins it into a plasmid vector, and puts the plasmid into a bacterium which multiplies and manufactures the protein; human insulin made this way is now used by diabetics in Ghana instead of insulin extracted from slaughtered cattle pancreases.\n• Gel electrophoresis separates DNA fragments by size: DNA is negatively charged, an electric current drives the fragments through a gel, and the shorter fragments travel farther, producing a band pattern readable like a barcode.\n• The polymerase chain reaction, PCR, amplifies a trace of DNA through repeated cycles of separating the strands, attaching short primers and building new copies, giving millions of copies from a speck of blood or a leaf fragment in a few hours.\n• DNA fingerprinting reads the band patterns from electrophoresis; except for identical twins no two people match, so the method settles paternity disputes, identifies tissue in criminal investigation, and confirms the variety identity of planting material.\n• Gene technology in Ghana runs under the National Biosafety and Biotechnology Authority set up by the Biosafety Act of 2009; Bt cotton was trialled in the northern regions, and the debate weighs pest and disease control against unknown effects, seed cost and the loss of the farmer's right to save seed.",
    "detailedNotes": {
      "overview": "Molecular biology opens the chromosome to the level of molecules and answers three questions in order: what is the molecule of inheritance, how is its information copied and used, and how can that information be cut and moved by human hands. You learn the double-helix structure of DNA with strict complementary base pairing, the semi-conservative replication that copies it and the heavy-nitrogen evidence behind that model, and then the route from gene to protein, transcription into messenger RNA and translation at the ribosome with transfer and ribosomal RNA, all governed by the triplet code. You then study mutation at base level, including the single substitution that produces sickle-cell haemoglobin, and close with gene technology, restriction enzymes and bacterial insulin, gel electrophoresis, PCR and DNA fingerprinting, with the Ghanaian biosafety setting for the debate over modified crops.",
      "introduction": "Work through the arithmetic of the code before anything else. Build model DNA with coloured card bases, checking that A always meets T and G always meets C, and transcribe printed gene sequences into mRNA daily until uracil replaces thymine automatically. Learn the three RNA roles as a three-sentence story and the properties of the code, triplet, degenerate, universal and non-overlapping, as four labels. Draw the flow DNA to RNA to protein as a labelled diagram, since it is the backbone figure of the whole topic, and finish by reading a printed electrophoresis band chart of four samples to decide parentage, the format used in alternative-practical questions.",
      "realWorldContext": "The sickle-cell allele taught in every Ghanaian classroom is a molecular event: a single base substitution in the haemoglobin gene, common in regions where malaria is steady because the trait carries a heterozygote advantage, and diagnosed by electrophoresis of haemoglobin in laboratories at Korle-Bu and Komfo Anokye. Diabetics at a Kumasi pharmacy buy human insulin made by engineered bacteria rather than the older animal extracts, a direct product of gene technology. Police forensic laboratories and private clinics use DNA profiling in paternity and assault cases, and PCR testing of fever samples for pathogens is now offered in Accra hospitals. In the north, Bt cotton field trials were run at Nyankpala before the commercial route stalled in public debate, while the National Biosafety and Biotechnology Authority under the Biosafety Act 2009 regulates every release of modified material.",
      "objectives": [
        "Describe the structure of a DNA molecule with base pairing and explain the evidence of Chargaff and the X-ray photographs",
        "Explain semi-conservative replication with the Meselson-Stahl evidence and relate it to inheritance at cell division",
        "Describe transcription and translation with the roles of the three RNAs and the properties of the triplet code, and interpret codons in given sequences",
        "Explain gene mutation at base level and outline genetic engineering, electrophoresis, PCR and DNA fingerprinting with their applications in Ghana"
      ],
      "sections": [
        {
          "title": "The Structure of DNA and the Evidence for Replication",
          "content": "Each strand of DNA is a chain of nucleotides, every nucleotide being a deoxyribose sugar, a phosphate group and one nitrogenous base from the set adenine, thymine, guanine and cytosine; the sugars and phosphates alternate as the backbone while the bases point inwards. Two strands wind into a double helix held by hydrogen bonds between complementary pairs, adenine with thymine and guanine with cytosine, so the amount of adenine equals thymine and guanine equals cytosine, which is Chargaff's finding; the pairing explains how the molecule keeps a stable width with an unlimited variety of sequence. Rosalind Franklin's and Maurice Wilkins' X-ray diffraction photographs revealed the regular spiral that let Watson and Crick build the 1953 model. Replication follows from the structure: before division the helix unzips, each bare strand attracts free nucleotides from the nucleoplasm by the pairing rule, and the backbone is sealed, leaving two molecules each with one old and one new strand, the semi-conservative plan. Meselson and Stahl grew bacteria in heavy nitrogen so all their DNA was heavy, shifted them to ordinary light nitrogen and sampled generation by generation; after one division every molecule sat at a hybrid position, and after two divisions half the molecules were hybrid and half wholly light, exactly as semi-conservative copying predicts and not as a conservative copy would give. RNA differs from DNA in three ways, a ribose sugar, uracil in place of thymine, and usually one shorter strand, and those differences make it the working copy rather than the archive of the code.",
          "bulletPoints": [
            "Nucleotide = deoxyribose + phosphate + one base; backbone sugar-phosphate, bases inward.",
            "A pairs with T, G pairs with C; Chargaff's ratios are the arithmetic of that pairing.",
            "The helix unwinds and each strand templates a new partner; every daughter molecule has one old strand.",
            "Meselson and Stahl's heavy-to-light nitrogen bands proved semi-conservative copying generation by generation.",
            "RNA has ribose, uracil and usually one strand; DNA stays the archive inside the nucleus."
          ],
          "keyTakeaway": "Complementary pairing makes DNA self-templating, and the heavy-nitrogen experiment showed that each new double helix keeps one strand of the parent.",
          "realWorldExample": "In the liver of a child recovering from malaria at a district hospital, dividing cells copy their DNA by this same semi-conservative route, each new cell inheriting one original strand from the parent cell."
        },
        {
          "title": "From Gene to Protein: Transcription and Translation",
          "content": "A gene is a stretch of DNA whose base sequence codes for one polypeptide, and genes sit at fixed loci on the long DNA-protein threads that form chromosomes, forty-six of them in a human body cell arranged in twenty-three pairs. The first stage, transcription, runs in the nucleus: the two strands open over the gene and a complementary messenger RNA is built on one strand using the pairing rule with uracil where the DNA had thymine, so a template triplet CAG yields the mRNA codon GUC and the gene is rewritten as portable code. The mRNA leaves through a nuclear pore and clamps onto a ribosome in the cytoplasm, and the ribosome, built of ribosomal RNA and protein, reads the message three bases at a time. The code is a triplet code, sixty-four possible codons standing for twenty amino acids, so the code is degenerate, most amino acids having more than one codon though each codon still means one amino acid only; AUG serves as the start signal and codes methionine, while UAA, UAG and UGA are stops for which no transfer RNA exists; the code does not overlap, and it works the same from bacteria to maize, which is why universality is a markable word. Translation is delivery and joining: transfer RNA molecules, each with a characteristic anticodon and its matching amino acid carried on its end, pair their anticodons to the mRNA codons inside the ribosome, and the ribosome joins the amino acids with peptide bonds into a growing polypeptide. The chain folds into its final shape and becomes a working protein, an enzyme such as amylase, the haemoglobin of red cells, keratin of the hair, insulin of the pancreas or an antibody of defence. Several ribosomes may read one mRNA at a time, multiplying output from a single message, and this whole route, DNA to RNA to protein, is the story examiners ask you to narrate with every noun spelt correctly.",
          "bulletPoints": [
            "Gene = one DNA length coding one polypeptide; chromosomes carry genes at fixed loci, 46 in a human body cell.",
            "Transcription builds mRNA in the nucleus; uracil replaces thymine in the copy.",
            "mRNA carries code, tRNA carries amino acids with anticodons, rRNA builds the ribosome.",
            "AUG starts and codes methionine; UAA, UAG, UGA stop; sixty-four codons for twenty amino acids makes the code degenerate.",
            "Peptide bonds join amino acids at the ribosome into a polypeptide that folds into a functional protein."
          ],
          "keyTakeaway": "Information flows DNA to mRNA to polypeptide, the codons on mRNA read by tRNA anticodons at the ribosome.",
          "realWorldExample": "A pancreatic cell of a student at Sunyani who has just eaten banku transcribes the insulin gene repeatedly so ribosomes assemble the insulin his body will release, and the same gene-to-protein route builds the salivary amylase that begins digesting the starch."
        },
        {
          "title": "Mutation and Gene Technology",
          "content": "At molecular level a mutation is a change in the base sequence. A substitution swaps one base for another; the sickle-cell allele arises when one base change converts the codon for glutamic acid into the codon for valine near the start of the haemoglobin chain, the altered protein clumping in low oxygen so the red cell scythes, blocks capillaries and bursts early, giving the disease in the homozygote and the trait in the carrier whose protection against severe malaria raised the allele's frequency in Ghana and elsewhere. Deletion and insertion are graver because they shift the reading frame and change every codon that follows, usually ruining the protein. Mutagens multiply the rate: ultraviolet light, X-rays and other ionising radiation, and chemicals such as those in tobacco smoke; most mutations injure the individual yet mutations supply the heritable variation that selection acts upon. Gene technology borrows the same machinery deliberately. Restriction enzymes cut DNA at particular sequences leaving matching sticky ends; a wanted gene, the human insulin gene for instance, is joined into a bacterial plasmid vector, the recombinant plasmid is taken up into an Escherichia coli cell, and the multiplying colony manufactures the human protein in fermenters, the source of the insulin sold in Ghanaian pharmacies today. Fragments are sorted by gel electrophoresis: DNA is negatively charged, an applied current drives it through a gel, shorter fragments move farther, and stained bands appear like a barcode; the same gels, read with labelled probes, give the DNA fingerprint used in paternity disputes, in criminal investigation at forensic laboratories, and in confirming the variety identity of cocoa and plantain planting material. The polymerase chain reaction amplifies a trace of DNA through repeating cycles of strand separation, primer attachment and synthesis, so millions of copies rise from a speck of blood, which is why PCR now confirms infections in Accra hospitals within hours. The debate over modified crops, Bt cotton trialled at Nyankpala and virus-resistant lines under application, is regulated by the National Biosafety and Biotechnology Authority under the Biosafety Act 2009, weighing yield and pesticide saving against unknown effects, seed price and the farmer's right to save seed.",
          "bulletPoints": [
            "Substitution changes one codon; the sickle-cell allele is one base change placing valine in haemoglobin.",
            "Insertion or deletion causes a frameshift that alters all downstream codons.",
            "Restriction enzymes, vectors and bacteria combine into the production line for human insulin.",
            "Electrophoresis separates charged DNA fragments by size; PCR multiplies a minute sample in cycles.",
            "DNA fingerprints settle paternity and crime questions; Ghana's Biosafety Act 2009 governs modified releases."
          ],
          "keyTakeaway": "A single base can change a protein and a disease, and the cut-copy-read tools of gene technology turn that same fact into medicine and evidence.",
          "realWorldExample": "A nursing mother bringing a jaundiced newborn for testing in Kumasi has the diagnosis of sickle-cell status confirmed by electrophoresis bands, while researchers at Nyankpala once grew Bt cotton lines that made their own insect protein before public debate halted the commercial route."
        }
      ],
      "commonMistakes": [
        "Writing thymine into an RNA answer; messenger RNA carries uracil, and the substitution must be shown whenever transcription is asked.",
        "Placing translation in the nucleus or transcription at the ribosome; transcription runs on the DNA in the nucleus and translation runs on the ribosome in the cytoplasm.",
        "Claiming one codon can code for several amino acids; the code is degenerate in the opposite direction, several codons to one amino acid, but each codon specifies a single amino acid.",
        "Describing a gene and a chromosome as the same object; a chromosome is one long DNA molecule carrying many genes."
      ],
      "wassceExamTips": [
        "Paper 1 codon questions supply a table; read codons three bases at a time from the messenger RNA sequence given, never from the DNA strand, and include the stop codon only when asked to translate fully.",
        "In Paper 2, define semi-conservative precisely, one old strand plus one new strand in each daughter molecule, because examiners award the definition mark only for those words.",
        "For a gene-to-protein essay, draw the flow DNA to mRNA to protein once, label transcription, translation, nucleus and ribosome, and then write; diagrams earn method marks that paragraphs miss.",
        "Paper 3 alternative practical may show an electrophoresis band chart and ask which sample is the parent; state the rule that shorter fragments travel farther and compare band positions line by line."
      ],
      "summaryChecklist": [
        "I can describe a nucleotide and the double helix with correct base pairing and Chargaff's ratios.",
        "I can explain semi-conservative replication and the Meselson-Stahl evidence for it.",
        "I can transcribe a DNA sequence into mRNA and use a codon table to state the amino acids.",
        "I can distinguish the roles of messenger, transfer and ribosomal RNA in protein synthesis.",
        "I can explain one point mutation, insulin engineering, electrophoresis, PCR and DNA fingerprinting with Ghanaian applications."
      ]
    },
    "examples": [
      {
        "id": "ex-bio-molbio-1",
        "title": "Transcribing a Gene and Reading the Codons",
        "problem": "The template strand of a gene reads, in triplets, TAC CGA TTA. Write the messenger RNA codons produced by transcription, state how many amino acids the sequence codes for, and give the anticodons of the transfer RNAs that would pair with the messenger RNA.",
        "stepByStepSolution": [
          "Step 1 (M1): Apply the transcription pairing rule DNA to RNA, A with U, T with A, C with G, G with C, to each triplet in turn.",
          "Step 2 (M1): First triplet TAC gives AUG; second CGA gives GCU; third TTA gives AAU.",
          "Step 3 (A1): The messenger RNA is AUG GCU AAU.",
          "Step 4 (M1): Each triplet of bases is one codon, so 9 bases divided by 3 gives the codon count.",
          "Step 5 (A1): There are 3 codons, therefore 3 amino acids in the short peptide.",
          "Step 6 (M1): The anticodon is complementary to the mRNA codon, so UAC pairs AUG, CGA pairs GCU, and UUA pairs AAU.",
          "Step 7 (A1): The anticodons are UAC CGA UUA; note AUG also serves as the start codon coding methionine."
        ],
        "keyTakeaway": "Transcribe DNA into RNA with uracil in place of thymine, count codons in threes, and remember anticodons pair with the mRNA, not the DNA."
      },
      {
        "id": "ex-bio-molbio-2",
        "title": "Base Percentages and the Length of a Gene",
        "problem": "Analysis of a DNA sample shows that 24 percent of its bases are adenine. Find the percentages of thymine, guanine and cytosine. A protein made from another region of the same DNA contains 150 amino acids in one polypeptide chain; find the minimum number of bases on the messenger RNA and the minimum number of base pairs in the gene that codes for it.",
        "stepByStepSolution": [
          "Step 1 (M1): Complementary pairing makes adenine equal thymine, so thymine = 24 percent.",
          "Step 2 (M1): Adenine plus thymine = 24 + 24 = 48 percent, so guanine plus cytosine = 100 - 48.",
          "Step 3 (A1): Guanine plus cytosine = 52 percent, and since guanine equals cytosine, each is 26 percent.",
          "Step 4 (M1): One amino acid requires one codon of three bases, so messenger RNA bases = 150 x 3.",
          "Step 5 (A1): The messenger RNA carries a minimum of 450 bases.",
          "Step 6 (M1): The gene region must hold the matching number of base pairs on the double helix, so 450 coding bases correspond to 450 base pairs.",
          "Step 7 (A1): Final answers, thymine 24 percent, guanine 26 percent, cytosine 26 percent; mRNA 450 bases and a gene of at least 450 base pairs, before counting any stop codon."
        ],
        "keyTakeaway": "Chargaff pairing gives every base percentage from one figure, and the three-bases-per-amino-acid ratio scales mRNA against gene length."
      }
    ],
    "quiz": {
      "id": "quiz-bio-molecular-biology",
      "topicId": "shs3-bio-t1-molecular-biology-dna-rna-protein",
      "title": "Molecular Biology Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-molbio-1",
          "quizId": "quiz-bio-molecular-biology",
          "questionText": "Which pairing rule holds in a DNA double helix?",
          "optionA": "Adenine with guanine, thymine with cytosine",
          "optionB": "Adenine with cytosine, guanine with thymine",
          "optionC": "Adenine with thymine, guanine with cytosine",
          "optionD": "Adenine with uracil, guanine with cytosine",
          "correctOption": "C",
          "subConcept": "Base pairing",
          "explanation": "In DNA, adenine forms hydrogen bonds only with thymine and guanine only with cytosine. Adenine-uracil pairing belongs to RNA situations such as codon meeting anticodon, not the DNA helix.",
          "remediationTip": "Practise building short helices with a partner, one taking A, T, G, C cards, checking every pair before it is taped down."
        },
        {
          "id": "q-bio-molbio-2",
          "quizId": "quiz-bio-molecular-biology",
          "questionText": "How many bases of messenger RNA specify one amino acid during translation?",
          "optionA": "One",
          "optionB": "Three",
          "optionC": "Six",
          "optionD": "Twenty",
          "correctOption": "B",
          "subConcept": "The triplet code",
          "explanation": "The code is a triplet code: one codon of three bases specifies one amino acid, giving sixty-four codons for twenty amino acids. One base would be far too few, and six and twenty confuse the total codon and amino-acid counts.",
          "remediationTip": "Recompute codon counts for peptides of 30, 60 and 150 amino acids and check each against the table."
        },
        {
          "id": "q-bio-molbio-3",
          "quizId": "quiz-bio-molecular-biology",
          "questionText": "Semi-conservative replication means that",
          "optionA": "each new DNA molecule contains one original strand and one newly made strand",
          "optionB": "the parent molecule is conserved intact while a wholly new copy is built",
          "optionC": "half of the original molecule is broken down during copying",
          "optionD": "only the coding half of each gene is copied",
          "correctOption": "A",
          "subConcept": "DNA replication",
          "explanation": "The two strands separate and each templates a partner, so every daughter helix keeps one old strand, which is the semi-conservative plan proven by the Meselson-Stahl nitrogen experiment. Option B describes the conservative model that the experiment rejected.",
          "remediationTip": "Sketch the heavy-to-light band positions across two generations and write one sentence beside each band."
        },
        {
          "id": "q-bio-molbio-4",
          "quizId": "quiz-bio-molecular-biology",
          "questionText": "Which molecule carries a specific amino acid to the ribosome and matches it to a codon by its anticodon?",
          "optionA": "Messenger RNA",
          "optionB": "Ribosomal RNA",
          "optionC": "DNA polymerase",
          "optionD": "Transfer RNA",
          "correctOption": "D",
          "subConcept": "Types of RNA",
          "explanation": "Transfer RNA has the anticodon loop and the amino-acid attachment site, delivering the correct unit to the growing chain. Messenger RNA carries the code, ribosomal RNA builds the ribosome, and the polymerase works in replication.",
          "remediationTip": "Draw a clover-leaf tRNA labelled with anticodon and amino-acid site once daily for three days."
        },
        {
          "id": "q-bio-molbio-5",
          "quizId": "quiz-bio-molecular-biology",
          "questionText": "At the molecular level, the sickle-cell allele is best described as",
          "optionA": "a whole chromosome lost from the red cell line",
          "optionB": "an extra gene copied into the haemoglobin region",
          "optionC": "a substitution of one base that changes one amino acid in haemoglobin",
          "optionD": "a protein coat fused around a normal red cell gene",
          "correctOption": "C",
          "subConcept": "Gene mutation",
          "explanation": "One base substitution converts the glutamic-acid codon of the haemoglobin gene to a valine codon, altering the protein so the cells sickle in low oxygen. Chromosome loss and gene copying are different kinds of change and are not involved.",
          "remediationTip": "Write the five-step chain: base change, codon change, amino-acid change, protein change, cell shape change."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t1-plant-structure-tissues-transport",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 7,
    "title": "Plant Tissues, Secondary Growth and Transport Experiments",
    "description": "Meristems and permanent tissues, xylem, phloem and cambium, secondary thickening in dicot stem and root, annual rings, the transpiration stream and cohesion theory, root pressure experiments, girdling and the transport of food, modified roots, stems and leaves, and water use and wilting in the Ghanaian dry season.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Meristems are regions of actively dividing cells; apical meristems at root and shoot tips lengthen the plant, lateral meristems, the vascular cambium and cork cambium, thicken it, and intercalary meristems at the nodes of grasses regrow the leaf after grazing, cutting or bush burning.\n• Permanent tissues arise when meristem cells differentiate: epidermis with its waxy cuticle protects, parenchyma with thin walls stores and photosynthesises in mesophyll and pith, collenchyma gives flexible support in young stalks, and sclerenchyma fibres with lignified walls give tensile strength in stalks and shells.\n• Xylem vessels are columns of dead cells with lignified walls whose end walls have dissolved away; they carry water and mineral salts upward and also strengthen the stem, while phloem sieve tubes are living cells with perforated sieve plates and companion cells that move sucrose both ways from source to sink.\n• In a dicot stem the vascular bundles form a ring with cambium between inner xylem and outer phloem inside a ground tissue of cortex and pith; in a monocot stem of maize or palm the bundles are scattered and there is no cambium ring, so ordinary secondary thickening does not occur.\n• In a dicot root the central xylem is star-shaped with phloem masses between its arms and no pith, so the cambium that later forms a ring must join the patches between them, a classic diagram comparison with the stem.\n• Secondary thickening: the vascular cambium divides, pushing new xylem inward and new phloem outward, so the wood grows as the bark stretches; the inner older xylem becomes hard heartwood that only supports, the outer rings are living sapwood that conducts, and the cork cambium produces cork outward with lenticels as breathing pores.\n• Trees with one long dry season lay down wide earlywood with large vessels when rain is steady and dense latewood with small vessels as water fails, so one light band plus one dark band marks a year and annual rings can be counted in a stump; a false double ring in a strange year can mislead the counter.\n• Girdling or ringing, cutting a band of bark down to the wood, removes the phloem; sugars travelling downward pile up in the swollen ridge above the girdle, the roots below starve, and the tree dies above the girdle although the xylem of the wood carries water for many days more, proving that food moves in the bark and water in the wood.\n• The transpiration stream begins with evaporation from the wet walls of mesophyll cells into the air spaces and out through open stomata and lenticels; the loss creates a tension pulled down a continuous column of water in the xylem, the column held unbroken by cohesion between water molecules through hydrogen bonding and steadied by adhesion to the walls.\n• Cohesion-tension explains the lift of water thirty metres and more into a tall tree without any pumping cell, because mature xylem is dead; root pressure adds only a small upward push at night when transpiration is low.\n• The potometer measures the rate of water uptake as an estimate of transpiration: a cut shoot is joined to the apparatus under water so no air enters the xylem, the reservoir sets the bubble to its start, and the distance a bubble travels in a graduated capillary is timed; results are given in millimetres per minute and repeated under light, shade and wind.\n• Factors that raise transpiration are bright light opening stomata, high temperature, low humidity and moving air; the dry harmattan afternoon closes many stomata partly through abscisic acid, and wilting begins when uptake cannot match loss.\n• Root pressure is demonstrated by cutting a herbaceous stem near the soil, fixing a tube and letting the sap rise or drip; a manometer shows a small positive pressure of one or two atmospheres, and the same force produces guttation, the beads of water on grass and cocoyam leaf tips in the early morning.\n• Temporary wilting recovers at night when loss stops; permanent wilting, when the plant cannot recover even after cooling and shading, marks the point at which soil water has fallen so low that roots cannot extract it, a real hazard for maize between the harmattan and the rains.\n• Modified organs are examinable stores and supports: cassava and sweet potato are swollen storage roots, the potato tuber is a stem proved by its eyes which are buds, ginger and turmeric are rhizomes, the cocoyam is a corm, the onion bulb is layered leaves on a reduced stem, sugarcane has stilt roots, the silk-cotton tree has prop roots, and mangrove pneumatophores are breathing roots.\n• Farm practice follows the physiology: mulch around tomatoes to cut evaporation from the soil, water at dawn or dusk to match the opening of stomata, space crops so leaves do not overlap into a humid disease-holding canopy, and ring or prune branches to steer sugars where they are wanted.",
    "detailedNotes": {
      "overview": "This topic takes you inside the plant body from the dividing cell to the working tree. You first sort the tissues: meristems that divide, permanent tissues that protect, store and support, and the two conducting systems, dead lignified xylem carrying water upward and living phloem carrying food to the sinks. With the tissues fixed you can follow secondary thickening in the dicot stem and root, the cambium ring, heartwood and sapwood and the annual rings that record the seasons. The second half is experimental physiology: the cohesion-tension explanation of the transpiration stream with the potometer and its controls, the root-pressure demonstration and guttation, and the girdling experiment that separates the food path in the bark from the water path in the wood. The topic closes with the modified roots, stems and leaves of Ghanaian crops and the practice of water use and wilting in the long dry season.",
      "introduction": "Split the term around the blade and the bench. Prepare thin cross sections of a dicot stem such as a cassava stick and of a monocot maize stem, stain with a dilute aqueous stain, mount and draw at low power, labelling epidermis, cortex, xylem, phloem and cambium; compare the bundle arrangement of the two, the single fastest way to fix the dicot-monocot difference. Set up a bubble potometer with a herbaceous shoot and record uptake in sun, shade and before an electric fan. Ring a branch of hibiscus in the school garden and revisit it weekly to note the swelling above the cut. Keep a wilting diary of a potted plant withheld of water through a dry week, recording morning and afternoon posture.",
      "realWorldContext": "A carpenter at the Dompak timber market dividing a sawn plank sees the pale sapwood ring beyond the dark heartwood and can read the seasons in the rings, the same skill that dates a felled tree in an Ashanti forest compartment. Along the San Simon lagoon shore the mangrove's pencil-like pneumatophores stick up through the waterlogged mud, breathing roots that the crab diggers know by heart. A farmer at Ejura stakes cassava whose swollen parenchyma roots are the family's harvest, and on a vegetable plot at Akuse the gardener waters tomatoes at dusk, because the same water applied at noon would be transpired within the hour; after a harmattan afternoon the maize leaves in a Volta Region fold and wilt, standing up only when the cool of the night returns turgor.",
      "objectives": [
        "Identify meristematic and permanent plant tissues and locate xylem, phloem and cambium in dicot and monocot stems and in a dicot root",
        "Describe secondary thickening in stem and root with the terms heartwood, sapwood, cork and lenticels, and explain the formation and reading of annual rings",
        "Explain the transpiration stream by cohesion and tension and perform or interpret the potometer, root pressure and girdling experiments with controls and safety",
        "Relate water use, wilting and the modified roots, stems and leaves of Ghanaian crops to the structure and transport studied"
      ],
      "sections": [
        {
          "title": "Meristems, Permanent Tissues and the Two Conducting Systems",
          "content": "Growth is localised. Apical meristems at the growing points of root and shoot add new cells that lengthen the plant, lateral meristems add cells sideways to thicken it, and intercalary meristems at grass nodes let maize, sugarcane and the savanna grasses regrow after grazing, cutting or fire. The cells they leave behind differentiate into the permanent tissues. The epidermis is a single surface layer, sealed with a waxy cuticle against water loss, broken by the guard cells of stomata and, in roots, by absorbent root hairs. Parenchyma cells have thin cellulose walls and fill most of the body, photosynthesising as mesophyll, storing as pith and cortex, and packing the cassava root. Collenchyma thickens at the cell corners to flex young petioles, and sclerenchyma fibres with lignified walls carry tensile strength, the fibres twisted into rope, the coconut shell and the hardness of wood. Two tissues conduct. Xylem is built of dead cells whose end walls have disappeared into continuous vessels, strengthened by lignin, lifting water and dissolved mineral salts from root to leaf while stiffening the stem into timber. Phloem is alive: sieve-tube cells joined end to end with perforated sieve plates, each served by a dense companion cell, moving sucrose made in the source leaves to the sinks of root, tuber, bud and ripening fruit, in whichever direction the sink demands. In the dicot stem these tissues sit as a ring of bundles with cambium between the inner xylem and outer phloem; in the maize or palm monocot stem the bundles are scattered through ground tissue with no cambium ring; in the dicot root the xylem forms a central star with phloem between its arms and no pith. Learn the three cross sections as diagrams, because the practical examination hands out exactly those slides and asks for the labelled drawing.",
          "bulletPoints": [
            "Apical, lateral and intercalary meristems add length, thickness and regrowth after cutting.",
            "Epidermis protects, parenchyma stores and photosynthesises, collenchyma flexes, sclerenchyma strengthens.",
            "Xylem is dead, lignified, vessels without end walls; it carries water up and gives support.",
            "Phloem is living, sieve plates and companion cells; it carries sucrose from source to sink.",
            "Dicot stem bundles in a ring with cambium, monocot scattered, dicot root a central xylem star with no pith."
          ],
          "keyTakeaway": "Tissues divide labour: meristems grow, permanent tissues run the plant, xylem carries water up and phloem carries food to the sinks.",
          "realWorldExample": "A cook peeling a cassava root at Sunyani cuts through protective bark, cortex and the starchy parenchyma of the storage tissue before reaching the tough central wood, four tissues of one root visible on one knife stroke."
        },
        {
          "title": "Secondary Thickening, Timber and Annual Rings",
          "content": "A woody dicot thickens because the vascular cambium, a cylinder of dividing cells between xylem and phloem, keeps working season after season. Each year it lays new xylem inward on top of the previous year's wood and a thinner layer of new phloem outward, so the bark stretches and the trunk swells. With age the inner xylem cells become blocked and hardened, impregnated with resins and tannins, turning into heartwood that only gives strength, while the rings nearest the cambium stay alive as sapwood conducting water; that contrast shows in a polished plank of odum or mahogany, the dark core against a pale outer band. Outside the phloem a second lateral meristem, the cork cambium, manufactures cork cells whose waterproof suberin walls form the bark surface, perforated by lenticels through which gases still reach the living tissues beneath. In trees with one strong dry season the early growth when the rain returns forms wide thin-walled vessels, the pale earlywood, and growth as the drought tightens forms narrow latewood, so one light and one dark band records one year and a stump face tells the tree's rough age in ring pairs. Count with care, for an unusual double rainy spell can add a false ring and a badly stressed year can nearly erase one, so a ring count is an estimate rather than a certificate. Timber uses follow the tissue facts: vessel size and ring pattern decide whether a wood saws cleanly or splinters, seasoning shrinks the sapwood more than the heartwood, and the same cambium principle runs the thinning of plantations, where removing poor stems produces straighter boles on the remaining crop.",
          "bulletPoints": [
            "The vascular cambium adds secondary xylem inward and secondary phloem outward each growing season.",
            "Heartwood is dead inner xylem that supports; sapwood is the living outer xylem that conducts.",
            "Cork cambium forms bark with suberin; lenticels are the breathing pores through it.",
            "Earlywood and latewood bands make one annual ring per year in seasonal climates.",
            "False or suppressed rings make ring counts an estimate of age, not certainty."
          ],
          "keyTakeaway": "Secondary thickening is the cambium's yearly account of growth, written inward as wood rings and outward as bark.",
          "realWorldExample": "At a Dompak sawmill an apprentice counts ring pairs in a sawn plank to guess the tree's age, while at a carpenter's shop at Ho the pale band of sapwood that shrinks and splits faster than heartwood is trimmed away before doors are framed."
        },
        {
          "title": "Transpiration Pull, Root Pressure and Girdling Experiments",
          "content": "Water climbs a plant by a pull generated in the leaf. Evaporation from the damp walls of mesophyll cells into the air cavities leaves those walls short of water, which then draws water from the xylem, creating a tension transmitted all the way down the column to the root hairs; because water molecules cohere by hydrogen bonding and adhere to the xylem walls, the thread does not break under tension or with height, so a thirty-metre tree lifts sap with no living pump anywhere in the wood, since mature xylem cells are dead. This cohesion-tension account is tested with the potometer, whose name honestly means a water-uptake meter, because uptake and loss differ slightly: the apparatus is assembled under water so no air bubble enters the xylem, the cut end is slit, the joints are sealed with grease, the reservoir sets the bubble to its start, and the distance travelled in the graduated capillary is timed for repeated minutes under sun, shade and a fan, with light, temperature and humidity logged as the varied factors. Root pressure is the opposing little engine: a herbaceous stem cut near the soil, fitted with a tube, shows sap rising and a manometer registers a small positive pressure of one or two atmospheres, while guttation beads on grass and cocoyam tips at dawn carry the same proof, though the force is far too weak to explain a tall tree. The girdling or ringing experiment maps the food road: a band of bark cut down to the wood removes every phloem tube while leaving xylem intact; the swollen ridge that forms above the cut within weeks is trapped sugar, the leaves stay green and turgid because water still rises in the wood below, and the roots beneath slowly starve until the tree dies above the girdle, so the result separates phloem food transport from xylem water transport beyond argument. Safety in these practicals is examinable: blade cuts go away from the hand on a tile, grease and stains are kept off skin and uniform, shoots are carried by the stem and never by the leaves, and hands are washed at the close.",
          "bulletPoints": [
            "Evaporation from mesophyll walls creates tension; cohesion of water keeps the xylem column unbroken.",
            "A potometer measures water uptake as an estimate of transpiration, assembled under water with sealed joints.",
            "Root pressure gives one or two atmospheres and causes dawn guttation, but cannot lift sap in tall trees.",
            "Girdling leaves the xylem working, swells above the cut and kills by starving the roots below.",
            "Blades on a tile cut away from the body, no stains on skin, and hand washing are the marked safety points."
          ],
          "keyTakeaway": "Water rises by transpiration pull with cohesion, roots add a weak night push, and girdling proves food travels in the bark.",
          "realWorldExample": "At dawn on the school field at Koforidua the groundsman points to water beads on the tips of grass blades after a humid night, guttation from root pressure, and in class the same students ring a hibiscus branch and return a month later to find the ridge of swollen bark above the cut."
        }
      ],
      "commonMistakes": [
        "Writing that xylem carries food and phloem carries water; the swap of the two organs is the most frequent single error in this question and cancels both marks.",
        "Saying the leaf pumps water or that living cells push sap up a tall tree; the ascent is a physical tension in dead xylem, and root pressure is only a minor night contribution.",
        "Describing a potato tuber as a root; its eyes are buds at nodes with scale leaves, marking it as a modified underground stem.",
        "Reporting potometer figures as transpiration rate with no qualification; the apparatus measures water uptake, so the answer must state why uptake estimates loss."
      ],
      "wassceExamTips": [
        "Paper 1 asks tissue functions as one-liners; answer with the exact pairing, xylem with water and minerals upward, phloem with sucrose to sinks, and the marks fall into place.",
        "In Paper 2 structured work on secondary growth, draw the stem in three vertical stages, primary tissue, one year of cambium activity, then older wood with heartwood and sapwood labelled, because diagram stages earn method marks a paragraph misses.",
        "For Paper 3 alternative practical on the potometer, state the precautions as a numbered list, cut under water, slit the stem, seal the joints, set the bubble, repeat readings, then give the mean with its unit in millimetres per minute.",
        "Any magnification answer must show the conversion 1 mm = 1000 micrometres, because the numerical mark is often withheld when the drawing is correct but the unit is wrong."
      ],
      "summaryChecklist": [
        "I can locate and describe apical, lateral and intercalary meristems and the permanent tissue types.",
        "I can distinguish xylem and phloem in structure, contents and direction, and draw dicot and monocot stem bundles.",
        "I can explain secondary thickening with cambium, heartwood, sapwood, cork and annual rings.",
        "I can describe the cohesion-tension theory, a potometer with its precautions, the root-pressure demonstration and girdling.",
        "I can name modified Ghanaian storage organs and explain wilting and watering practice in the dry season."
      ]
    },
    "examples": [
      {
        "id": "ex-bio-planttissues-1",
        "title": "Magnification and True Vessel Diameter in a Stem Section",
        "problem": "A student draws a cross section of a cassava stem with a 10 x eyepiece and a 40 x objective, and measures the diameter of one large xylem vessel as 40 mm in the drawing. Find the total magnification, the true diameter of the vessel in millimetres and in micrometres, and the drawing diameter a vessel of true diameter 0.05 mm would have at the same magnification.",
        "stepByStepSolution": [
          "Step 1 (M1): Total magnification equals eyepiece multiplied by objective, 10 x 40.",
          "Step 2 (A1): Total magnification = 400 times.",
          "Step 3 (M1): True diameter equals drawing diameter divided by magnification, so 40 / 400.",
          "Step 4 (A1): The true diameter is 0.1 mm.",
          "Step 5 (M1): Convert millimetres to micrometres by multiplying by 1000, so 0.1 x 1000.",
          "Step 6 (A1): The vessel is 100 micrometres across.",
          "Step 7 (M1): A 0.05 mm vessel at 400 times is drawn at 0.05 x 400.",
          "Step 8 (A1): Its drawing diameter would be 20 mm; every drawing must state 400 x beside the title."
        ],
        "keyTakeaway": "Divide the measurement by the magnification to recover reality, multiply reality by the magnification to plan the drawing, and always show the units."
      },
      {
        "id": "ex-bio-planttissues-2",
        "title": "Potometer Rate and Daily Water Use",
        "problem": "In a bubble potometer a shoot's uptake moves the marker 150 mm along the graduated capillary in 10 minutes. Calculate the rate in millimetres per minute and in metres per hour. In a separate garden measurement a maize plant in full sun lost 450 cm3 of water over 15 days, while a shaded neighbour lost 150 cm3 over the same period. Find the daily loss of each and the ratio of sun to shade.",
        "stepByStepSolution": [
          "Step 1 (M1): Rate in millimetres per minute equals distance divided by time, so 150 / 10.",
          "Step 2 (A1): That is 15 mm per minute.",
          "Step 3 (M1): Convert to an hourly figure, 15 x 60 = 900 mm per hour, then change millimetres to metres by dividing by 1000.",
          "Step 4 (A1): The bubble travels 0.9 m per hour at that rate.",
          "Step 5 (M1): Sun plant daily loss equals 450 / 15.",
          "Step 6 (A1): The sun plant loses 30 cm3 per day.",
          "Step 7 (M1): Shade plant daily loss equals 150 / 15 = 10 cm3 per day; the ratio equals 30 / 10.",
          "Step 8 (A1): The sun plant loses water three times as fast as the shaded one, a 3 to 1 ratio, consistent with higher leaf temperature and fully open stomata in light."
        ],
        "keyTakeaway": "Convert the rate to the unit the question demands, and remember a potometer measures uptake as an estimate of transpiration loss."
      }
    ],
    "quiz": {
      "id": "quiz-bio-plant-tissues",
      "topicId": "shs3-bio-t1-plant-structure-tissues-transport",
      "title": "Plant Tissues and Transport Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-planttissues-1",
          "quizId": "quiz-bio-plant-tissues",
          "questionText": "Which tissue transports water and mineral salts from root to leaf?",
          "optionA": "Phloem sieve tubes",
          "optionB": "Vascular cambium",
          "optionC": "Cork",
          "optionD": "Xylem vessels",
          "correctOption": "D",
          "subConcept": "Conducting tissues",
          "explanation": "Xylem vessels are the dead lignified pipes of the upward stream. Phloem carries sucrose to sinks, the cambium is the dividing layer that thickens the stem, and cork is the protective bark tissue.",
          "remediationTip": "Write the two-line contrast, xylem water and minerals upward, phloem sucrose to sinks, and revise it before each lesson."
        },
        {
          "id": "q-bio-planttissues-2",
          "quizId": "quiz-bio-plant-tissues",
          "questionText": "Secondary thickening of a dicot stem is produced chiefly by",
          "optionA": "elongation of the apical meristem",
          "optionB": "divisions at the intercalary meristem of the node",
          "optionC": "activity of the vascular cambium between xylem and phloem",
          "optionD": "widening of the epidermal cuticle",
          "correctOption": "C",
          "subConcept": "Secondary growth",
          "explanation": "The vascular cambium adds new xylem inward and phloem outward year after year, which is what swells the trunk. Apical and intercalary meristems add length, and the cuticle only limits water loss.",
          "remediationTip": "Label a diagram of the ring of bundles and point to the cambium position inside each bundle before writing the definition."
        },
        {
          "id": "q-bio-planttissues-3",
          "quizId": "quiz-bio-plant-tissues",
          "questionText": "A ring of bark cut around a branch, removing phloem but leaving wood intact, causes a swollen ridge above the cut because",
          "optionA": "water backs up in the xylem and bursts the cells",
          "optionB": "sucrose moving down in the phloem is trapped above the cut",
          "optionC": "cork grows back immediately and crowds the tissue",
          "optionD": "the apical meristem of the branch sends out side buds",
          "correctOption": "B",
          "subConcept": "Girdling experiment",
          "explanation": "Removing the bark severs the phloem, so food travelling from the leaves towards the roots piles up above the girdle and swells that region. Water still rises in the untouched xylem, which is why the leaves stay green for a time.",
          "remediationTip": "Redraw the girdled branch with arrows for the two streams, one continuing upward in the wood and one blocked in the bark."
        },
        {
          "id": "q-bio-planttissues-4",
          "quizId": "quiz-bio-plant-tissues",
          "questionText": "The main force lifting water to the top of a tall tree is",
          "optionA": "transpiration pull on a cohesive water column in the xylem",
          "optionB": "root pressure acting at night",
          "optionC": "capillary rise inside phloem sieve tubes",
          "optionD": "the beating of parenchyma cells along the sap stream",
          "correctOption": "A",
          "subConcept": "Cohesion-tension theory",
          "explanation": "Evaporation in the leaf creates tension transmitted down the continuous hydrogen-bonded column, the transpiration pull. Root pressure is real but small and night-bound, capillary rise works only in narrow tubes, and no living cell beats the stream because mature xylem is dead.",
          "remediationTip": "Say the three words of the theory, evaporation, tension, cohesion, and join them in one sentence each."
        },
        {
          "id": "q-bio-planttissues-5",
          "quizId": "quiz-bio-plant-tissues",
          "questionText": "The Irish potato is classified as a modified stem rather than a root because",
          "optionA": "it grows below the soil surface",
          "optionB": "it stores starch in swollen cells",
          "optionC": "it is eaten as a vegetable crop",
          "optionD": "its eyes are buds at nodes with scale leaves",
          "correctOption": "D",
          "subConcept": "Modified organs",
          "explanation": "Only a stem carries nodes, buds and scale leaves; the eyes of the tuber are exactly those, so it is a stem. Storage roots such as cassava and sweet potato lack buds, and the other options describe position or use rather than structure.",
          "remediationTip": "Set a potato in damp sand, watch the eyes sprout, and label your drawing stem and bud."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t2-ecology-and-the-environment",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 2,
    "title": "Ecology, Ecosystems and Environmental Balance",
    "description": "The levels of organisation from organism to biosphere and the words habitat, niche, population, community and ecosystem; food chains, food webs and trophic levels with the ten percent energy loss at each step, pyramids of number, biomass and energy, the nitrogen, carbon and water cycles, ecological succession, population size and density, and the rainforest, savanna, mangrove and coastal ecosystems of Ghana with the disturbances that unbalance them.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Ecology is the study of the relationships between organisms and their environment, and an ecosystem is a community of living things together with the non-living conditions of the place in which they live, linked by energy flow and nutrient cycling.\n• The levels of organisation rise in order: organism, population, community, ecosystem, biome, biosphere; a population is the members of one species in one place, a community is all the populations living there.\n• Habitat is the address of an organism, the specific place it lives, while niche is its profession, its total way of life including food, enemies, the place it feeds and the time it is active; two species cannot occupy the same niche in the same habitat indefinitely.\n• A food chain is a linear feeding sequence beginning with a producer and shown by arrows that mean energy is transferred; producers are plants and other photosynthetic organisms, primary consumers eat plants, secondary consumers eat them, and so on to top carnivores and then decomposers.\n• A food web is the interlinked network of several food chains and is the more honest picture, since most animals eat more than one kind of food; it makes a community stable because the collapse of one prey can be survived.\n• Trophic levels are the feeding stages, level one producers, level two herbivores, level three primary carnivores, level four top carnivores; each level is dependent on the one below.\n• Energy enters as sunlight and is fixed by producers; about ten percent of the energy at one trophic level becomes the living matter of the next, the rest being lost in respiration, in heat, in movement, in faeces and in uneaten parts, so a food chain rarely exceeds four or five levels.\n• Ten percent rule in figures: producers that fix 20 000 kJ per hectare a year pass 2 000 kJ to herbivores, 200 kJ to the first carnivore, 20 kJ to the second and 2 kJ to the top carnivore.\n• A pyramid of numbers counts individuals at each level, a pyramid of biomass weighs the dry organisms at each level, and a pyramid of energy shows the energy held at each level; the energy pyramid is always upright, while a pyramid of numbers can be inverted, one mango tree supporting thousands of insects.\n• Energy flow is one-way and must be renewed by the sun, but matter is recycled; decomposer bacteria and fungi, including earthworms and termites as detritus feeders, break dead organic matter into simple inorganic substances that roots absorb again.\n• In the carbon cycle, photosynthesis takes carbon dioxide out of the air, feeding passes carbon through organisms, respiration and combustion return it, decomposition returns it, and fossil fuels and the oceans are the great stores.\n• In the nitrogen cycle, nitrogen-fixing Rhizobium in the root nodules of legumes such as groundnut and cowpea, and free-living Azotobacter, convert atmospheric nitrogen to compounds; decomposers form ammonium compounds, nitrifying bacteria convert these to nitrites and then nitrates which roots absorb, denitrifying bacteria return gas to the air, and lightning also fixes nitrogen.\n• Farmers restore nitrogen by rotating maize with legumes, by manure and compost, and by adding ammonium salts or urea; water moves through the cycle by evaporation, transpiration from leaves, condensation into clouds, rainfall, runoff and infiltration back to rivers and the sea.\n• Ecological succession is the gradual change in the species composition of a place; primary succession begins on bare rock where lichens weather the surface and form humus, mosses and grasses follow, then shrubs and forest, while secondary succession follows a disturbance such as bush burning or abandoned farmland and is faster because soil is already present.\n• Population size is affected by natality, mortality, immigration and emigration, and by the food, space, water, competitors, predators and diseases that make up the resistance of the environment; unlimited resources give exponential growth while a limited environment gives an S-shaped sigmoid curve that levels off at the carrying capacity.\n• Population density is measured by counting organisms in quadrats for plants and slow creatures, or estimated by mark-release-recapture for mobile animals using population equals first marked times second capture divided by marked ones recaptured.\n• Ghanaian ecosystems: the high rainfall forest belt around Kumasi, Suhrum and Kakum has hardwoods such as odum, wawa and mahogany, epiphytes, lianas and many niches; the Guinea savanna of Tamale, Bole and Mole has fire-resistant trees with thick corky bark, scattered baobabs, tall seasonal grasses and seasonal water shortage; the mangrove at San Simon, Sessea, Densu delta and Keta coast has stilt roots, pneumatophores for air, salt-excluding roots and viviparous seedlings; the coastal and marine zone at Elmina and Cape Coast has sandbars, lagoons and salt pans.\n• Human disturbance of the balance includes bush burning and over-cutting which expose soil to erosion, mining and galamsey which silt and poison rivers with mercury and sediment, forest clearing for cocoa and charcoal, the choking of Lake Volta and the Akosombo reservoir edge by water hyacinth, and the dumping of refuse and plastic that blocks drains and breeds mosquitoes.\n• Conservation tools in Ghana are the Forestry Commission reserves and national parks such as Mole, Kakum and Digya, the restricted hunting areas and wildlife divisions, the ban on galamsey, community tree planting, and the use of biological control such as weevils against water hyacinth.\n• Interactions between organisms are predation, competition, parasitism, commensalism and mutualism, the bee and the flower being mutualism and the epiphyte on a branch being commensalism.\n• A pyramid of biomass built from 4 500 kg of producers per hectare will support about 450 kg of herbivores and about 45 kg of carnivores at ten percent transfer.\n• Energy losses explain why a diet of rice feeds many more people than the same rice fed to cattle, because feeding at a lower trophic level shortens the chain and wastes less energy.\n• Diseases spread faster where the environment is unbalanced, stagnant water breeds Anopheles mosquitoes and the snail host of bilharzia, and crowded settlement raises the incidence of cholera, so environmental management is preventive medicine.",
    "detailedNotes": {
      "overview": "Ecology moves you from the single organism to the whole biosphere, and this topic builds that ladder of organisation word by word, then shows the two processes that run every ecosystem: energy flowing through trophic levels in one direction and matter being recycled between the living and the non-living. You will learn to draw food chains and food webs, to state and apply the ten percent rule, to construct and interpret pyramids of number, biomass and energy, and to explain the nitrogen, carbon and water cycles with the bacteria that drive them. The second half of the topic is population ecology and the ecosystems of Ghana, forest, savanna, mangrove and coast, with the succession that rebuilds a burned or abandoned site and the human activities that unbalance them, which is where Paper 2 essay questions and Paper 3 data interpretation are drawn from.",
      "introduction": "Take the lesson outdoors. Count the plant species in five one-metre quadrats in the school garden, estimate a snail population by mark-release-recapture with a soft pencil dot, then sketch the food web of a cultivated plot with the farmer, the rodents, the kestrels and the millet. Draw one pyramid of biomass and one of energy for a grass, grasshopper, frog, snake and hawk chain, and calculate the ten percent transfers yourself so that the numbers in the tables are your own working and not memorised phrases.",
      "realWorldContext": "At Mole National Park the grass supports elephant, kob and warthog, and the lions and hyenas above them are few because so little energy climbs to the top level. A cocoa farm at Ahafo Ano uses shade trees, and when the forest around it is cut for charcoal the soil dries, the predators of cocoa pests disappear, and capsid damage rises. Along the Densu delta and at San Simon the mangroves are being felled for firewood and fish smoking, which lets the sea push further inland and destroys the nursery grounds that the coastal fishermen of Elmina depend upon. Water hyacinth has choked inlets of Lake Volta near Kpong, killing fish by lowering dissolved oxygen and blocking canoe routes, while galamsey pits along the Ankobra and Offin rivers leave turbid, mercury-tainted water in which macro-invertebrates disappear and children's health is threatened.",
      "objectives": [
        "Arrange organism, population, community, ecosystem, biome and biosphere correctly and define habitat and niche with local examples",
        "Construct food chains and food webs, name the trophic levels and explain why chains rarely exceed four or five levels",
        "Apply the ten percent rule to energy-transfer problems and draw and interpret pyramids of number, biomass and energy",
        "Describe the nitrogen, carbon and water cycles, naming the bacteria involved and the human activities that disturb each cycle",
        "Explain succession, measure population density and size, and discuss the ecosystems of Ghana and the effects of bush burning, mining and deforestation"
      ],
      "sections": [
        {
          "title": "Levels of Organisation and the Ecological Vocabulary",
          "content": "Ecology is studied in an ascending ladder of complexity because each level shows a property the level below cannot. An organism is one living individual. A population is all the individuals of one species living in one area at one time, so every tilapia in a dug-out at Nungua is one population, and the size of that population changes with births, deaths, arrivals and departures. A community is the collection of all the populations in the same place, fish, snails, water plants, mosquitoes, bacteria and birds, held together by feeding relationships. An ecosystem is the community plus the non-living conditions of soil, water, light, temperature and air, and it is the working unit of ecology because energy and nutrients pass between the two halves of it. A biome is a great regional community of plants and animals determined by climate, such as the Guinea savanna or the high rainfall forest of Ghana, and the biosphere is the thin life-bearing shell of the earth, land, sea and lower air together. Two words are examined over and over and must never be interchanged. Habitat is where an organism lives, its address, for example the muddy bed of a lagoon, the canopy of a forest tree or the human liver. Niche is the organism's profession, the whole of its way of life, what it eats, what eats it, when it is active, where it feeds and breeds, and how it affects the soil. A crow and a hawk may share a habitat in a town but their niches differ, one scavenging on the street at night, the other hunting rats over the fields by day. Because no two species can hold the same niche in the same place, competition eventually eliminates one of them, which is why the introduced water hyacinth crowds out native floating plants and why the Nigerian rat competes with the gambian pouched rat in our stores.",
          "bulletPoints": [
            "Order to learn: organism, population, community, ecosystem, biome, biosphere.",
            "Population is one species in one place; community is all the populations there.",
            "Habitat is the place, niche is the role or way of life, and two species cannot share one niche for long.",
            "The ecosystem includes the non-living environment and is the unit in which energy flows and matter cycles.",
            "Abiotic factors are light, temperature, water, soil pH, wind; biotic factors are feeding, competition, predation and disease."
          ],
          "keyTakeaway": "Habitat answers where, niche answers how, and the ecosystem is the community plus its non-living surroundings.",
          "realWorldExample": "In a fish pond at Akosombo the tilapia population, the snails, the water lilies and the bacteria form the community, the pond water, mud and sunlight form the non-living part, and the whole stocked pond with its feeding regime is the ecosystem."
        },
        {
          "title": "Food Chains, Food Webs and the Flow of Energy",
          "content": "A food chain records who eats whom in a single line, and the arrows are drawn to point in the direction the energy travels, from the eaten to the eater. It always begins with a producer, a green plant or alga that fixes sunlight into carbohydrate by photosynthesis, and it continues through primary consumers that eat plants, such as grasshoppers, caterpillars, rodents and antelope, secondary consumers that eat those, such as frogs and small birds, and tertiary or top carnivores such as hawk, lion or crocodile. Bacteria and fungi close every chain as decomposers, and termites, earthworms and dung beetles are detritus feeders that break dead matter into small pieces for the microbes. In a real habitat the chains interlock into a food web, because a rat eats maize, groundnut and eggs, and is eaten by python, gen cat and barn owl, so a web, not a chain, describes a farm at Ejura. The web gives stability, since the loss of one food source leaves others, and it is much harder for a predator to wipe out a species that has several prey. Only about ten percent of the energy stored in one trophic level is passed on as new body material in the level that eats it. The other ninety percent is used up in respiration and movement, lost as heat, egested as faeces, excreted, or simply left uneaten, as bone, hair and wood are left. The arithmetic is worth doing once: if the grass of a hectare fixes 20 000 kJ in a year, the grasshoppers convert 2 000 kJ into their own bodies, the frogs that eat them gain 200 kJ, the snakes 20 kJ and the hawk that takes the snake only 2 kJ. Because so little reaches the top, top carnivores are always few, and chains rarely run beyond four or five levels. Energy flows and is never recycled, so an ecosystem needs a constant input of sunlight; matter is recycled, and that is why a forest that loses its litter to fire loses its fertility.",
          "bulletPoints": [
            "Arrows in a food chain point the way energy moves, from food to feeder.",
            "Trophic level one producers, two herbivores, three primary carnivores, four top carnivores.",
            "About ten percent of energy passes to the next level; the rest is respired, lost as heat, egested or uneaten.",
            "20 000 kJ at the producer level gives 2 000, 200, 20 and finally 2 kJ at the top carnivore.",
            "Food webs give stability, and human populations are larger when they eat low on the chain."
          ],
          "keyTakeaway": "Energy runs through an ecosystem once, losing about ninety percent at every feeding level, so the top carnivores are always fewest.",
          "realWorldExample": "A family in Bawku that eats millet directly gains roughly ten times the energy in that crop that a family would gain if the millet were first fed to goats and the goats then eaten, because the goat spends nine parts of every ten on breathing, movement and heat."
        },
        {
          "title": "Pyramids, Population Density and Succession",
          "content": "An ecological pyramid is a diagram with the producers as the broad base and each feeding level stacked above. A pyramid of numbers simply counts individuals at each level; it is usually upright for a grassland, but it may invert where one large host supports thousands of parasites or insects, since a single mango tree can feed some twenty thousand fruit flies, beetles and caterpillars whose enemies are fewer still. A pyramid of biomass weighs the dry organisms at each level and is normally upright on land, but in a pond the standing biomass of tiny phytoplankton can be less than that of the fish they feed, so the pyramid appears partly inverted and must be read as a rate. A pyramid of energy shows the kilojoules held at each level per unit area and per unit time and is always upright, which makes it the most reliable of the three; it narrows sharply because of the ten percent loss, and it explains the biomass figures too, since 4 500 kg of producer dry matter on a hectare can carry only about 450 kg of herbivore and about 45 kg of carnivore. Populations are studied numerically because that is how an ecologist or a health officer reasons. Density is individuals per unit area, obtained by placing quadrats at random, and a count of 1 250 land snails in twenty-five one-square-metre quadrats gives 50 per square metre, that is 500 000 in a hectare. For mobile animals the mark-release-recapture estimate is used: capture, mark and release sixty snails, catch fifty later and find twelve marked, and the population is sixty times fifty divided by twelve, which is 250. Growth of a population is exponential while food and space are free, a J-shaped curve, and sigmoid when the resistance of the environment bites, births falling and deaths rising as the number settles at the carrying capacity of the place. Succession explains how a community rebuilds and changes. On bare rock, lichens secrete acid that weathers the surface and, with dead bodies, form a thin soil; mosses and then grasses and herbs follow, shrubs appear, and in the forest belt the climax is tall mixed hardwood forest. This is primary succession. Secondary succession is quicker because soil remains, as on an abandoned farm at Nkwanta where grasses, then emayin and other pioneer trees, then secondary forest follow in that order. Each stage modifies the soil and shade and so destroys its own conditions, which is the engine of succession.",
          "bulletPoints": [
            "Pyramid of numbers counts, biomass weighs dry matter, energy shows kilojoules and is always upright.",
            "An inverted pyramid of numbers occurs with one tree and many insects or a host and its parasites.",
            "Density from quadrats: 1 250 snails in 25 square metres equals 50 per square metre.",
            "Mark-release-recapture: population equals first marked times second capture divided by marked recaptured, giving 60 x 50 / 12 = 250.",
            "Primary succession starts on bare rock with lichens; secondary succession starts in soil after burning or abandonment."
          ],
          "keyTakeaway": "Pyramids show how much is lost at each level, and only the energy pyramid can never be inverted.",
          "realWorldExample": "On farmland abandoned near Techiman, grass and then the weedy emayin trees give way to secondary forest over some twenty years, and where a farmer burns the regrowth each year the succession is reset to the grass stage, which is why the soil loses nitrogen year by year."
        },
        {
          "title": "Cycling of Matter: Nitrogen, Carbon and Water",
          "content": "Nutrients are used again and again, and the cycles have names that must be spelled correctly in Paper 2. In the nitrogen cycle, atmospheric nitrogen is fixed into usable compounds in three ways: by the bacterium Rhizobium living in the root nodules of legumes such as groundnut, cowpea, soya and the forest trees of the mimosa family, by free-living soil bacteria such as Azotobacter, and by lightning, which joins nitrogen and oxygen into oxides washed down by rain. Green plants absorb the resulting nitrates through their roots and build them into proteins; animals eat the proteins and return nitrogen to the soil in urine, faeces and dead bodies. Decomposer bacteria convert this organic nitrogen into ammonium compounds, nitrifying bacteria change ammonium first into nitrites and then into nitrates, and denitrifying bacteria in waterlogged, airless soil break nitrates back into nitrogen gas, which escapes. The practical consequences are exact: crop rotation with legumes restores nitrates, loosened well-aerated soil keeps nitrifying bacteria working, waterlogged soil loses nitrogen through denitrification, and heavy rains leach the soluble nitrates below the roots. The carbon cycle moves carbon between air, plants, animals, soil and sea. Photosynthesis draws carbon dioxide from the air and builds carbohydrate, feeding passes it along the chain, respiration by all organisms returns it, decomposers release it from dead matter, and combustion of wood, charcoal and fuel oil adds it back quickly. Some carbon is locked away as fossil fuel, peat and chalk, and some dissolves in the ocean, where sea creatures build shells from carbonates. Human burning of fossil fuel and the felling of forest has raised the carbon dioxide of the air, and because that gas traps heat radiated from the earth, the extra amount is linked to a warming climate, erratic rainfall in the Volta and Northern regions, coastal erosion at Keta and rising sea level. The water cycle has no bacteria in it at all. Heat evaporates water from sea, river and lake, and plants give off water vapour by transpiration from their leaves; the vapour rises, condenses into clouds and returns as rain, part of which runs off to the rivers, part soaks into the groundwater and part is held temporarily in soil and lakes before it evaporates again. Forest in Ghana is a water machine, because the moisture it transpires feeds local rainfall, which explains why cleared land in the middle belt dries and streams shrink.",
          "bulletPoints": [
            "Nitrogen fixation: Rhizobium in legume nodules, free-living Azotobacter, and lightning.",
            "Ammonium to nitrite to nitrate is the work of nitrifying bacteria; roots absorb nitrates.",
            "Denitrifying bacteria in waterlogged soil destroy nitrates and return nitrogen gas to the air.",
            "Photosynthesis removes carbon dioxide; respiration, decomposition and combustion return it; fossil fuels and the sea store it.",
            "The water cycle runs by evaporation, transpiration, condensation, precipitation, runoff and infiltration."
          ],
          "keyTakeaway": "Matter cycles with the help of named bacteria, while energy only flows; the cycles are the reason crop rotation and afforestation matter.",
          "realWorldExample": "A farmer at Tumu who plants cowpea between maize crops is planting a nitrogen factory, because Rhizobium in the cowpea roots leaves nodules full of combined nitrogen in the soil for the following maize, while a waterlogged plot at Asutsuare loses its nitrates through denitrification and yields poorly."
        },
        {
          "title": "The Ecosystems of Ghana and the Balance That Is Lost",
          "content": "Ghana runs from the sea in the south to the Sahel in the north, so the ecosystems are arranged as a series of belts. The high rainfall forest of the south-west and around Kumasi, with reserves at Kakum, Suhrum and Bia, has tall evergreen hardwoods such as odum, wawa, mahogany and ebony, a woody understorey, climbers and lianas, epiphytes on the branches, and the greatest number of niches and species of any Ghana ecosystem. Trees there have buttress roots, broad thin leaves and a closed canopy that shades the floor. The Guinea savanna of Tamale, Bole, Salaga and Mole is a community of tall seasonal grasses with scattered drought- and fire-resistant trees such as baobab, shea, dawadawa and acacia, thick corky bark to survive annual burning, deep root systems, leaves that fall in the dry season, and animals adapted to open ground, kob, antelope, lion and elephant in the park. The northern Sudan savanna is drier, with shorter grasses and a shorter rains season. Along the coast and the estuaries are mangrove swamps at San Simon, Sessea, the Densu delta and Keta lagoon, where the trees have stilt or prop roots for support in soft mud, pneumatophores growing upward for gaseous exchange, leaves that excrete or exclude salt, and viviparous seeds that germinate while still attached to the parent. The marine and brackish ecosystems of Elmina and Cape Coast supply protein and are threatened by overfishing with small-mesh nets and by oil and sewage. Each of these is a balance held by feeding relationships, nutrient cycles and the carrying capacity of the place, and each is disturbed by human activity. Bush burning destroys soil organisms, kills young trees, strips nitrogen from the soil and lets erosion remove the top soil. Deforestation for cocoa, charcoal and timber exposes land, silts rivers and reduces local rainfall. Mining and galamsey dig up river banks and leave mercury, arsenic and thick sediment behind, so that fish die, water hyacinth and algae choke the reservoir edge, and water treatment becomes costly. Refuse and plastic block drains in Accra and Kumasi, stagnant water in the blocked channels raises the density of Anopheles and Culex mosquitoes, and the consequence is more malaria and more cholera. Conservation is therefore both biological and medical: enforced reserve boundaries, the protected status of Mole, Kakum and Digya, the game closed seasons, replanting with two trees for every one felled, the biological control of water hyacinth with weevils, the stop to galamsey, community sanitation, and the planting of shea and dawadawa in the savanna to hold the soil.",
          "bulletPoints": [
            "Forest belt: tall hardwoods, lianas, epiphytes, buttress roots, broad leaves, most niches.",
            "Savanna: seasonal grasses, thick corky bark, deciduous trees such as baobab and shea, deep roots, dry-season leaf fall.",
            "Mangrove: stilt roots, pneumatophores, salt-excluding or salt-excreting leaves, viviparous propagation.",
            "Bush burning, deforestation, galamsey and blocked drains are the main Ghanaian disturbances of the balance.",
            "Conservation uses reserves, protected areas, replanting, biological control, sanitation and the ban on galamsey."
          ],
          "keyTakeaway": "An ecosystem resists change only within limits, and every Ghanaian disturbance described in a Paper 2 answer has a listed remedy.",
          "realWorldExample": "When mangrove at Sessea is cut for firewood used in smoking tilapia, the shoreline erodes, the young fish lose their nursery and the catch at the nearby lagoon falls in the same season, which is an ecological answer to a question about environmental balance."
        }
      ],
      "commonMistakes": [
        "Drawing food-chain arrows the wrong way, from eater to food; the arrow follows the energy and must point from grasshopper to frog, not from frog to grasshopper.",
        "Confusing habitat with niche, or writing that two species share a niche; habitat is the place and niche is the role, and competition excludes the species that duplicates it.",
        "Stating that energy is recycled in an ecosystem; energy flows and is replaced by sunlight, and it is matter that cycles.",
        "Writing the ten percent as a gain rather than a loss, so claiming that a hawk gains 20 000 kJ when the producers fixed 20 000 kJ; the correct top-level figure is 2 kJ.",
        "Naming the nitrogen bacteria wrongly, giving Rhizobium the work of denitrification or forgetting that nitrates are the form absorbed by roots.",
        "Calling a pyramid of numbers inverted when the question asks about biomass, or drawing a pyramid of energy with a narrow base, which is impossible because energy is lost at each level."
      ],
      "wassceExamTips": [
        "Paper 1 often asks for the correct sequence of trophic levels; answer producers, primary consumer, secondary consumer, tertiary consumer, decomposer, and reject any option that begins with a herbivore.",
        "In a Paper 2 energy-transfer calculation, write the multiplication line before the answer, for example 20 000 x 10/100 = 2 000 kJ, because the method mark is awarded even when the final figure slips.",
        "When a structured question gives a table of population data, state the trend in numbers first, then the reason, then the exception; examiners award marks for each of the three.",
        "For the nitrogen cycle learn the four phrases verbatim, nitrogen fixation, ammonification, nitrification and denitrification, and put the correct bacterium beside each.",
        "Paper 3 alternative-practical uses quadrat and mark-release-recapture data; show the formula, substitute the figures and give the unit, individuals per square metre, since a correct number without a unit loses the answer mark.",
        "An essay on conservation gains more for pairing a problem with its remedy, galamsey therefore river bank stabilization and licensing, than for a long list of problems alone."
      ],
      "summaryChecklist": [
        "Can I arrange the six levels of ecological organisation and define habitat and niche without confusing them?",
        "Can I draw a food web of five organisms, name every trophic level and point the arrows correctly?",
        "Can I use the ten percent rule to work out the energy at the fourth and fifth levels from a given producer figure?",
        "Can I calculate population density from quadrats and population size from mark-release-recapture data?",
        "Can I describe the nitrogen, carbon and water cycles with their bacteria, and one Ghanaian ecosystem problem with its remedy?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-eco-1",
        "title": "Energy Transfer Along a Grassland Food Chain",
        "problem": "In a savanna food chain near Bole, the grasses fix 20 000 kJ of energy per hectare in one year. Grasshoppers feed on the grass, frogs feed on the grasshoppers, snakes feed on the frogs and hawks feed on the snakes. Taking the transfer between feeding levels as ten percent, find the energy converted into living matter at each consumer level, state where the rest of the energy went, and explain why only one or two hawks can live on that hectare.",
        "stepByStepSolution": [
          "Step 1 (M1): Identify the trophic levels, grass as producer level one, grasshopper level two, frog level three, snake level four, hawk level five.",
          "Step 2 (M1): Apply the ten percent rule as repeated multiplication by 10/100, so each consumer level equals the level below it times 0.1.",
          "Step 3 (A1): Grasshoppers: 20 000 x 0.1 = 2 000 kJ per hectare per year.",
          "Step 4 (A1): Frogs: 2 000 x 0.1 = 200 kJ, snakes: 200 x 0.1 = 20 kJ, hawks: 20 x 0.1 = 2 kJ per hectare per year.",
          "Step 5 (M1): Account for the missing energy, 20 000 - 2 000 = 18 000 kJ used in respiration and movement by grass and grasshoppers, lost as heat, egested in faeces or left uneaten as root and cellulose.",
          "Step 6 (A1): The total energy reaching the fifth level is 2 kJ per hectare per year, one ten-thousandth of the energy fixed by the grass.",
          "Step 7 (A1): Final answer, the chain gives 2 000, 200, 20 and 2 kJ at levels two to five, and because so little energy arrives at the top, a hectare can support only one or two hawks, which is why top carnivores are always the fewest and why chains seldom run beyond five levels."
        ],
        "keyTakeaway": "Each feeding level passes on about a tenth of the energy, so the top carnivore gets one ten-thousandth of what the producers fixed."
      },
      {
        "id": "ex-bio-eco-2",
        "title": "Estimating a Snail Population and Its Growth",
        "problem": "A student wants to know how many giant African land snails live in the school garden at Adenta. She collects 60 snails, marks each shell with a dot of paint, releases them and allows a week for mixing. In a second collection she gathers 50 snails and finds 12 of them marked. Later she records that 40 more snails hatched from eggs laid in the garden and 15 died during the month. Estimate the population, express the monthly change as a percentage and give one reason the estimate may be wrong.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the mark-release-recapture formula, population equals number first marked times number in second capture divided by number of marked ones recaptured.",
          "Step 2 (M1): Substitute the values, N = 60 x 50 / 12.",
          "Step 3 (A1): 60 x 50 = 3 000, and 3 000 / 12 = 250, so the estimated population is 250 snails.",
          "Step 4 (M1): Find the net change for the month from natality and mortality, 40 hatched minus 15 died.",
          "Step 5 (A1): Net increase = 25 snails, giving a population of 250 + 25 = 275 snails.",
          "Step 6 (M1): Express the increase as a percentage of the original estimate, 25 / 250 x 100.",
          "Step 7 (A1): Growth rate = 10 percent per month; the estimate may be too high because marked snails were more likely to be eaten by birds or because paint made them easier to see, so the recaptured marked fraction was too small."
        ],
        "keyTakeaway": "Mark-release-recapture turns a sample into a population estimate, and every estimate must be tested for the bias the marking itself introduces."
      }
    ],
    "quiz": {
      "id": "quiz-bio-ecology-environment",
      "topicId": "shs3-bio-t2-ecology-and-the-environment",
      "title": "Ecology and the Environment Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-eco-1",
          "quizId": "quiz-bio-ecology-environment",
          "questionText": "In a food chain the producers fix 8 000 kJ of energy. How much energy is available at the third trophic level if about ten percent is transferred at each step?",
          "optionA": "800 kJ",
          "optionB": "80 kJ",
          "optionC": "8 kJ",
          "optionD": "0.8 kJ",
          "correctOption": "B",
          "subConcept": "Energy transfer and the ten percent rule",
          "explanation": "Level one is the producers at 8 000 kJ, level two the herbivores at 800 kJ, and level three the primary carnivores at 80 kJ. Option 800 kJ is one transfer only, and 8 kJ has been reduced by three transfers, which would be level four.",
          "remediationTip": "Practise a table of five levels halving nothing but multiplying by 0.1 each step until the pattern is instant."
        },
        {
          "id": "q-bio-eco-2",
          "quizId": "quiz-bio-ecology-environment",
          "questionText": "Which statement correctly distinguishes habitat from niche?",
          "optionA": "Habitat is the place an organism lives, niche is its role and way of life there",
          "optionB": "Habitat is its role, niche is the place it lives",
          "optionC": "Habitat applies to animals only, niche to plants only",
          "optionD": "Habitat and niche mean exactly the same thing",
          "correctOption": "A",
          "subConcept": "Habitat and niche",
          "explanation": "Habitat is the address and niche the profession, covering food, enemies, activity time and effect on the place. Option B simply swaps the two definitions, and option D ignores that two species can share a habitat while differing in niche.",
          "remediationTip": "Write habitat equals where and niche equals how on a card and use it for three local organisms."
        },
        {
          "id": "q-bio-eco-3",
          "quizId": "quiz-bio-ecology-environment",
          "questionText": "Which bacteria change ammonium compounds in the soil into nitrites and then nitrates?",
          "optionA": "Denitrifying bacteria",
          "optionB": "Rhizobium in root nodules",
          "optionC": "Nitrogen-fixing Azotobacter",
          "optionD": "Nitrifying bacteria",
          "correctOption": "D",
          "subConcept": "Nitrogen cycle",
          "explanation": "Nitrifying bacteria, Nitrosomonas and Nitrobacter, oxidise ammonium to nitrite and nitrite to nitrate. Denitrifying bacteria do the opposite, breaking nitrates down to nitrogen gas, while Rhizobium and Azotobacter fix atmospheric nitrogen rather than convert ammonium.",
          "remediationTip": "Draw the nitrogen cycle and colour-code one arrow for nitrification and the opposite arrow for denitrification."
        },
        {
          "id": "q-bio-eco-4",
          "quizId": "quiz-bio-ecology-environment",
          "questionText": "Twenty-five one-square-metre quadrats thrown at random in a field contain 1 250 land snails in all. What is the population density?",
          "optionA": "50 snails per square metre",
          "optionB": "25 snails per square metre",
          "optionC": "1 250 snails per square metre",
          "optionD": "500 snails per square metre",
          "correctOption": "A",
          "subConcept": "Population density from quadrats",
          "explanation": "Density equals total counted divided by total area sampled, 1 250 / 25 = 50 snails per square metre. Option C forgets to divide by the area, and option B divides the number of quadrats instead of using them as the area.",
          "remediationTip": "Remember that quadrats of one square metre each make the area equal to the number of quadrats, then divide."
        },
        {
          "id": "q-bio-eco-5",
          "quizId": "quiz-bio-ecology-environment",
          "questionText": "Which succession begins on bare rock and which feature marks its first stage?",
          "optionA": "Secondary succession, grasses appearing first",
          "optionB": "Primary succession, mosses forming soil first",
          "optionC": "Primary succession, lichens weathering the rock and forming humus",
          "optionD": "Secondary succession, shrubs after a bush fire",
          "correctOption": "C",
          "subConcept": "Ecological succession",
          "explanation": "Primary succession starts where there is no soil, on rock, and lichens are the pioneer community, secreting acid that weathers the surface and adding humus as they die. Mosses follow the lichens, and the options naming secondary succession describe a place where soil already exists.",
          "remediationTip": "List the four stages in order, lichen, moss, grass and shrub to forest, and say which type of starting ground each succession uses."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t2-adaptation-evolution-classification",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 3,
    "title": "Adaptation, Evolution and Classification",
    "description": "Structural, physiological and behavioural adaptation in the plants and animals of the Ghanaian forest, savanna and coast, camouflage, warning colouration and mimicry, Darwin's natural selection contrasted with Lamarck's use and disuse, the evidence of fossils, comparative anatomy, embryos, vestigial organs and biochemistry, and the five-kingdom system with binomial nomenclature and the key features of the major phyla and divisions.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• An adaptation is a feature of structure, function or behaviour that fits an organism to survive and breed in its own habitat; adaptations arise over generations by selection and are inherited, not learned during one lifetime.\n• Distinguish adaptation from acclimatisation: a farmer moving to Tamale sweats more efficiently within weeks, which is a temporary physiological adjustment, whereas the thick corky bark of the savanna trees is an inherited adaptation.\n• Structural adaptations of xerophytes, the plants of dry country, are reduced or spiny leaves, a thick waxy cuticle, sunken stomata in pits, rolled leaf blades, succulent water-storing stems and very deep or very wide root systems, all of which cut water loss.\n• Hydrophytes such as the water lily have a thin cuticle, stomata only on the upper leaf surface, large air spaces in the leaf and stem for buoyancy, and rootless floating bodies that absorb water and minerals over the whole surface.\n• Savanna adaptations in Ghana are drought and fire resistant: baobab and shea store water in swollen trunks, dawadawa and acacia have thick corky bark that survives annual burning, many trees drop their leaves in the dry season, and short-lived annuals complete their cycle within a few weeks of rain.\n• Animal structural adaptations include the broad pinnae of the elephant that lose heat, the long legs of the kob that run over tall grass, the webbed feet of the duck, the keel of the pigeon's sternum for flight muscles, the streamlined body and gill slits of Tilapia, and the chitinous exoskeleton and jointed legs of the insect.\n• Physiological adaptations work inside the body: the mangrove root excludes salt, gulls excrete excess salt through a nasal salt gland, the lungfish Protopterus secretes much urea and survives the dry season in a mud cocoon, termites digest cellulose with protozoa and bacteria in the gut, and the carpet viper produces venom.\n• Behavioural adaptations are things organisms do: the desert rodent lives in a cool burrow and forages only at night, vultures soar in circles to find carrion, army ants raid in columns, termites seal the entrances of the mound before rain, migratory birds such as the hobbies and white storks leave Ghana for the Palearctic when the dry season ends, and mimosa folds its leaflets when brushed.\n• Camouflage is protective resemblance to the background, the stick insect among twigs, the flat-tailed gecko against the tree trunk in the Ankasa forest, the grasshopper on the grass, and the brown grasshopper on a recently burned fallow.\n• Warning colouration advertises danger, the black and yellow bands of a wasp or a bee; mimicry is the copy of that signal, Batesian mimicry being a harmless species resembling a harmful one, and Mullerian mimicry being two harmful species sharing the same warning pattern so that predators learn faster.\n• Variation, both continuous such as height and discontinuous such as blood group, is the raw material of selection; without inherited differences between individuals, no individual has an advantage and evolution cannot occur.\n• Darwin's natural selection has five linked points: organisms overproduce offspring, individuals vary, most offspring die in the struggle for existence, those with favourable variations survive and breed, and the variation is passed on, so over many generations the population changes and a new species may form.\n• Lamarck explained the giraffe's neck by use and disuse and the inheritance of characters acquired during life; the theory fails because acquired characters do not alter the genes in the gametes, so a bodybuilder's muscles and a circumcised goat's tail are not inherited.\n• Evidence for evolution comes from fossils in sedimentary rock showing a definite order of appearance and transitional forms such as Archaeopteryx with teeth, feathers and a tail; from comparative anatomy, homologous organs such as the forelimb of man, bat and whale having the same bone plan but different work, and analogous organs such as the wing of a bird and of an insect having the same work but different structure; from vestigial organs such as the appendix, wisdom teeth and the pelvic girdle of a python; from the resemblance of early embryos of fish, chick and man; and from biochemistry, the closeness of DNA and protein sequences between related organisms.\n• Selection is still observable today: insects and weeds become resistant after repeated use of one insecticide or herbicide, the parasite Trypanosoma and the malaria parasite are treated with drug combinations because single drugs select resistant strains, and the Nigerian rat spread through Ghana where the gambian pouched rat was not a good competitor.\n• Classification or taxonomy sorts living things into groups from the largest to the smallest: kingdom, phylum or division, class, order, family, genus and species; a species is a natural population whose members resemble one another and can interbreed to produce fertile offspring.\n• Binomial nomenclature gives every organism a two-part Latinised name, the genus with a capital initial and the species epithet in small letters, both italicised when printed and underlined separately when written by hand, so maize is Zea mays and man is Homo sapiens.\n• The five kingdoms are Monera, all bacteria and blue-green algae, cells without a true nucleus, reproducing by splitting and some of them pathogenic; Protista, mainly unicellular eukaryotes such as Amoeba, Paramecium, Euglena and the important pathogens Plasmodium and Trypanosoma; Fungi, yeast, moulds and mushrooms, with chitin cell walls, no chlorophyll, living as parasites or saprophytes; Plantae, multicellular autotrophs with cellulose walls; and Animalia, multicellular heterotrophs without cell walls.\n• Plant divisions to know are Bryophyta, the mosses and liverworts, small, carpet-like, no vascular tissue, needing water for fertilisation and found on damp rocks and tree bases; Pteridophyta, the ferns and club mosses, with xylem and phloem, roots and feathery fronds, reproducing by spores from sporangia on the underside; and Spermatophyta, the seed plants, divided into gymnosperms with naked seeds in cones and angiosperms with seeds inside a fruit, the flowering trees of the Kakum forest.\n• Animal phyla to know are Protozoa, unicellular animals with one cell doing every job; Coelenterata or Cnidaria, radial animals with tentacles and stinging cells such as hydra and jellyfish; Platyhelminthes, flat worms with a flat body and no gut cavity, tapeworm and planaria; Nemathelminthes, round worms with a complete gut, Ascaris and hookworm; Annelida, segmented worms with setae, earthworm and leech; Arthropoda, jointed legs and a chitinous exoskeleton, insects, spiders, crustaceans and myriapods; Mollusca, a soft body usually with a shell and a muscular foot, snail, mussel, octopus; Echinodermata, spiny marine animals with water vascular system and five-fold symmetry, starfish and sea urchin; and Chordata, animals with a backbone or notochord at some stage, including fish, amphibians, reptiles, birds and mammals.\n• Man is classified as kingdom Animalia, phylum Chordata, class Mammalia, order Primates, family Hominidae, genus Homo, species sapiens.\n• A dichotomous key is a series of paired statements, each pair offering two opposite features; the user reads both, chooses the statement that fits and follows it to the next pair until one name remains, and the skill is examined in Paper 3 with specimens of leaves, insects and snail shells.",
    "detailedNotes": {
      "overview": "This topic joins three ideas that WASSCE examines together. First, adaptation: the structural, physiological and behavioural features that fit an organism to its habitat, read from the plants and animals of the forest, savanna, mangrove and coast of Ghana. Second, evolution: the theory of natural selection proposed by Darwin, its contrast with the Lamarck theory of use and disuse, and the fossil, anatomical, embryological and biochemical evidence that supports it. Third, classification: the five-kingdom arrangement of living things, the rules of binomial nomenclature, and the defining features of the plant divisions and animal phyla that candidates must be able to recognise in a specimen. The three parts are one story, because classification is a guess at evolutionary relationship and adaptation is the visible product of evolution.",
      "introduction": "Collect and compare rather than only read. Bring five leaves from one tree, measure their lengths and show continuous variation; examine a moss carpet on a damp wall and a fern frond with sporangia underneath, and list the differences in vascular tissue; look at preserved specimens of earthworm, snail and grasshopper and key them out with a printed dichotomous key. Then draw the peppered moth and grasshopper selection tables and calculate the survival percentages yourself, because the numerical treatment of selection data is exactly what Paper 3 sets.",
      "realWorldContext": "In the Mole and Bole savanna the baobab swells its trunk to hold water through a nine-month dry season and its bark is thick and corky against the fire that farmers set. In the Ankasa and Kakum forests a flat-tailed gecko is invisible against the trunk it rests on, and the orchid on the branch has thick leaves and sunken stomata because an epiphyte cannot drink from soil. Along the Densu delta the mangrove roots exclude salt and send up pneumatophores, while the lungfish of the Volta pools survives in a mud cocoon when the pool dries. Market gardens around Ejura show selection in action: after a bush fire the brown grasshoppers are harder to see on the blackened stubble and the birds take the green ones first. In Tamale a farmer who sprays the same insecticide on his cowpea every season finds the pests returning worse, because the few resistant individuals survived and bred, and this is insecticide resistance stated in one sentence.",
      "objectives": [
        "Define adaptation and separate structural, physiological and behavioural adaptation with at least two Ghanaian examples of each",
        "Explain camouflage, warning colouration and mimicry and give an example of each from the local environment",
        "State Darwin's theory of natural selection, contrast it with Lamarck's theory of acquired characters and list the evidence for evolution",
        "Outline the five-kingdom classification and give the distinguishing features of the plant divisions and the major animal phyla",
        "Apply the rules of binomial nomenclature and use a dichotomous key to identify a specimen"
      ],
      "sections": [
        {
          "title": "Structural and Physiological Adaptation",
          "content": "Adaptation is examined by asking what the feature is, what the habitat does to the organism, and how the feature answers that particular problem; the phrase in the habitat, for the habitat, without the link, earns nothing. Xerophytes, the plants of dry ground, face the constant danger of losing water faster than roots can replace it, so their structure answers it: leaves reduced to spines or to small thick blades with a heavy waxy cuticle, stomata sunk into pits or rolled inside the leaf so that a pocket of still, moist air reduces diffusion, succulent stems and leaves that store water as in baobab and Aloe, and root systems either very deep to reach subsoil water or very wide and shallow to catch every shower. Hydrophytes face the opposite problem of too much water and too little gas and light, so they have a thin or absent cuticle, stomata only on the upper surface of a floating leaf, large air cavities in the leaf and stalk that act as flotation and as gas reservoirs, and flexible stalks that are not snapped by the movement of the water; the water lily and the floating fern Salvinia are the classroom examples. Halophytes, the plants of salt water such as the mangrove, exclude salt at the root, excrete it through salt glands in the leaf, hold water in thick leaves, anchor themselves in soft mud with stilt roots and reach the air with upward pneumatophores, and their seeds germinate while still on the parent tree, a viviparous habit that gives the young plant a head start before it drops into the mud. Animals are matched in the same way. The fish has a streamlined body, overlapping scales that reduce friction, fins for steering and gills whose rich blood supply and thin membranes take the dissolved oxygen out of water passing over them. The insect has a waterproof chitinous cuticle, a tracheal system that carries air straight to the tissues, and jointed appendages; the exoskeleton is shed in a moult because it cannot grow. The earthworm lives in soil, so it has a soft moist skin for cutaneous respiration, setae for grip, and no eyes, only light-sensitive cells. Internal physiology is adaptation too: the mangrove root's salt exclusion, the salt gland of a gull that rids the body of sea salt, the concentrated urine of a burrowing rodent that saves water, the ability of the lungfish to breathe air with a simple lung when the pool shrinks, and the gut protozoa and bacteria of the termite that digest the cellulose of wood.",
          "bulletPoints": [
            "Xerophyte features answer water shortage: spines or small thick leaves, heavy cuticle, sunken or rolled stomata, succulence, deep or wide roots.",
            "Hydrophyte features answer excess water and poor gas supply: thin cuticle, upper-surface stomata, large air spaces, flexible stalks.",
            "Halophyte features answer salt: root exclusion, leaf salt glands, thick succulent leaves, stilt roots, pneumatophores, viviparous seeds.",
            "Physiological adaptation is invisible but examinable: air-breathing in lungfish, cellulose digestion in termites, concentrated urine in desert rodents.",
            "Every adaptation answer must name the environmental problem, the feature and the advantage."
          ],
          "keyTakeaway": "Say the problem first, then the feature, then why the feature pays, and the mark is secure.",
          "realWorldExample": "A shea tree near Salaga keeps water in its swollen trunk and drops its leaves early in the dry season, so it survives fires and drought that kill a young cocoa seedling planted beside it."
        },
        {
          "title": "Behavioural Adaptation, Camouflage and Mimicry",
          "content": "Behaviour is the third kind of adaptation and it is inherited as truly as a bone. Desert and savanna animals avoid the heat by living in burrows that stay cool and humid, by being nocturnal, by estivating through the dry months, and by travelling at dawn and dusk; the termite mound at night is sealed with a thin layer of soil over every entrance to keep its humidity, and army ants raid in organised columns with soldier castes on the flanks. Birds of prey soar in slow circles on rising warm air to search for carrion without spending energy on flapping, which is why vultures gather over a carcass at Mole within an hour. The great migratory movements are behavioural adaptation on a continental scale: Palearctic migrants such as the hobby and the white stork reach the wetlands of Ghana, the Densu delta and the Keta lagoon, during our dry season and leave to breed in Europe when the northern summer brings insects there. Reproductive behaviour counts too: a mother hen broods and defends her chicks, which is parental care raising the chance of survival of few offspring, while a fish that scatters thousands of eggs on the weed provides none and depends on numbers. Protective coloration is a favourite examination topic. Camouflage or cryptic coloration makes the animal difficult to find against its background, the stick insect among twigs, the brown grasshopper on a burned fallow, the speckled plover's egg on shingle, the flat-tailed gecko pressed against bark. Warning colouration announces that the animal is dangerous or distasteful, the black and yellow of a wasp, the red head of a snake, and it is effective because predators remember the bad experience. Mimicry builds on the same memory: in Batesian mimicry a harmless animal, the mimic, gains protection by resembling a harmful model, while in Mullerian mimicry two genuinely defended species converge on the same pattern so that a single lesson serves both. The advantages are all measured in survivors, which is why a selection experiment with grasshoppers on a burned field can be put into a table and marked.",
          "bulletPoints": [
            "Nocturnal habit, burrowing, estivation and migration are inherited behaviour, not learning.",
            "Termites seal the mound entrances, army ants raid in columns, vultures soar to save energy.",
            "Camouflage hides the animal against its background; warning colouration advertises a defence.",
            "Batesian mimicry is a harmless copy of a harmful model; Mullerian mimicry is two harmful species sharing one pattern.",
            "Protective colouration only works against a background, so a brown grasshopper is safe on a burned fallow and conspicuous on green grass."
          ],
          "keyTakeaway": "Behaviour and colouration are adaptations only when they are inherited and raise the chance of surviving to breed.",
          "realWorldExample": "A farmer at Ejura releasing equal numbers of brown and green grasshoppers onto a recently burned fallow finds the birds taking the green ones first, because against blackened stubble only the brown insects are camouflaged."
        },
        {
          "title": "Variation and the Theory of Evolution by Natural Selection",
          "content": "Within any population individuals differ, and those differences are of two kinds. Continuous variation runs along a scale with all intermediate forms, as in height, weight, length of a leaf or skin colour, and it is usually controlled by several genes and much influenced by the environment; a histogram of it is a smooth bell-shaped curve. Discontinuous variation falls into clear separate categories with no intermediates, as in blood group, the ability to roll the tongue, winged versus wingless Drosophila, or the presence of sickle-shaped red cells, and it is controlled by one or a few genes with little environmental effect. Variation arises from mutation, from the reshuffling of alleles in meiosis and fertilisation, and in a sexual population it is therefore renewed every generation. Charles Darwin and Alfred Wallace drew the great conclusion from three facts and one inference. Organisms produce far more offspring than the environment can feed, so there is a struggle for existence against food shortage, predators, disease and weather. Individuals within the species vary, and some of the variations are inherited. Any variant that fits the organism better to its particular conditions lets that individual survive longer, breed more times and leave more young carrying the same variant, so generation by generation the favourable variation becomes commoner in the population while unfavourable ones disappear. This is natural selection, the survival of the fittest in the sense of best fitted to the environment, and given long enough it turns one species into another, so the immense variety of living things descends with modification from common ancestors. The classic demonstration is the peppered moth of industrial England, where the dark form became common on soot-blackened trunks because pale moths were seen and eaten, and the pale form returned when the air cleared. Modern Ghanaian demonstrations are the resistant strains of malaria parasites and of insects and weeds that follow the repeated use of one drug or one chemical, because the treated population leaves only the survivors of the few resistant individuals to breed. Lamarck had explained such changes two centuries earlier by the inheritance of acquired characters, claiming that a giraffe stretches its neck through use, that the stretched neck is passed to its offspring, and that disused organs decay. The theory is rejected because acquired characters do not alter the base sequence of the genes in the gametes; the circumcised tail of the goat and the muscle of the weight-lifter are not inherited, and only variation already present in the germ cells can be selected.",
          "bulletPoints": [
            "Continuous variation shows a full range and is affected by environment; discontinuous variation falls into distinct classes and is genetic.",
            "Darwin's argument: overproduction, variation, struggle for existence, survival of the best fitted, inheritance of favourable variation.",
            "Natural selection acts on variation already present; it does not create the variation.",
            "Industrial melanism in the peppered moth and insecticide and drug resistance are observed examples.",
            "Lamarck's use and disuse fails because characters acquired in life are not written into the genes."
          ],
          "keyTakeaway": "Selection preserves the variant that fits the habitat, so the population changes; acquired characters never enter the genes and cannot be selected.",
          "realWorldExample": "In a district where chloroquine was used alone for years, the few parasites able to survive the drug bred freely and the treatment began to fail, which is natural selection observed inside a hospital ward rather than over millennia."
        },
        {
          "title": "The Evidence for Evolution",
          "content": "Fossils are the most direct evidence. Remains or traces of organisms preserved in sedimentary rock appear in a definite order, the oldest strata holding only simple shell-less and hard-shelled organisms, then fish, then amphibians, reptiles, birds and mammals in rising order, with man appearing in the most recent deposits; transitional forms link the groups, Archaeopteryx being both reptilian, with teeth, a long bony tail and clawed fingers, and avian, with feathers and wings. Comparative anatomy divides organs into homologous and analogous. Homologous organs have the same basic structure and origin but perform different work, the forelimb of a human for grasping, of a bat for flying, of a whale for swimming, of a lizard for running, and the same arrangement of one upper bone, two lower bones, wrist and digits shows descent from a common ancestor; the young embryo of a mammal even develops gill arches like a fish. Analogous organs perform the same work but have different structure and different origin, the wing of a bird built of skin stretched on forearm bones against the wing of an insect built of chitin, so they show convergent evolution onto a similar problem rather than relationship. Vestigial organs are reduced and functionless remnants of structures that were useful to ancestors, the human appendix, wisdom teeth, tailbone, the muscles that move the ear, the nictitating membrane at the corner of the eye, and the pelvic girdle and hind limb bones still found inside a python. Embryology shows that the early embryos of fish, snake, chick, pig and man carry gill slits and tails and are strikingly alike, an agreement that is most easily explained by shared ancestry. Biochemistry supplies the strongest modern proof, since every living thing uses the same genetic code, the same twenty amino acids and the same ATP, and the closeness of the protein and DNA sequences measures relationship, human and chimpanzee blood and DNA agreeing far more with each other than either agrees with a dog. Palaeontology, selective breeding of cattle, rice and poultry, and the geographical distribution of species, the marsupials of Australia being an obvious case, all add the same conclusion.",
          "bulletPoints": [
            "Fossils in undisturbed strata appear in an unbroken order of complexity, with transitional forms such as Archaeopteryx.",
            "Homologous organs: same structure, different work, proof of common ancestry.",
            "Analogous organs: same work, different structure, proof of convergent adaptation.",
            "Vestigial organs are reduced remains of once-useful parts, appendix, wisdom teeth, tailbone, python pelvis.",
            "Embryonic resemblance and the universality of the genetic code and of ATP are biochemical and developmental evidence."
          ],
          "keyTakeaway": "Homologous organs show relationship; analogous organs only show that two organisms solved the same problem.",
          "realWorldExample": "The bones of a python killed near Buipe still include a pelvic girdle and tiny hind-limb remnants, useless in a snake that lost its legs, and that is a vestigial structure in a Ghanaian specimen."
        },
        {
          "title": "Classification: The Five Kingdoms, Nomenclature and Keys",
          "content": "Classification puts organisms into nested groups so that one name carries information about relationships. The categories, from broad to narrow, are kingdom, phylum in animals or division in plants, class, order, family, genus and species, and a species is a group of individuals so alike in structure that they can interbreed in nature and give fertile offspring. The system used in the Ghanaian syllabus is the five-kingdom system. Kingdom Monera contains the bacteria and blue-green algae, whose cells have no true nucleus and no membrane-bound organelles, reproduce by splitting, may be pathogenic as in cholera and tuberculosis, or useful as in Rhizobium and in yoghurt and kenkey fermentation. Kingdom Protista contains the mainly single-celled organisms whose cells have a nucleus, Amoeba and Paramecium in fresh water, Euglena which photosynthesises, the algae that carry out much of the photosynthesis of ponds, and the parasites Plasmodium and Trypanosoma that cause malaria and sleeping sickness. Kingdom Fungi holds the moulds, yeasts and mushrooms; their cells have walls of chitin, they have no chlorophyll, they feed as saprophytes on dead matter or as parasites, and they reproduce by spores, yeast being single-celled and the mushroom the familiar many-celled form. Kingdom Plantae contains multicellular organisms with cellulose walls and chlorophyll, making their own food, and it is divided into Bryophyta, the mosses and liverworts, small carpet-like plants with no xylem or phloem, no true roots and a dependence on film water for fertilisation; Pteridophyta, the ferns and club mosses, which have vascular tissue, roots and fronds and reproduce by spores from sporangia on the underside of the frond; and Spermatophyta, the seed-bearing plants, split into gymnosperms whose naked seeds sit in cones and angiosperms whose seeds are enclosed in a fruit, the angiosperms further divided into monocotyledons with parallel-veined leaves and fibrous roots and dicotyledons with net-veined leaves and a taproot. Kingdom Animalia contains multicellular organisms with no cell walls that feed by ingestion, and its major phyla are Protozoa, single-celled animals; Coelenterata or Cnidaria, radially symmetrical animals with tentacles bearing stinging cells; Platyhelminthes, the flat worms; Nemathelminthes, the round worms with a complete gut; Annelida, the segmented worms with setae; Arthropoda, the animals with jointed appendages and a chitinous exoskeleton, by far the largest phylum, holding insects, spiders, crustaceans and millipedes; Mollusca, soft-bodied animals usually with a shell and a muscular foot; Echinodermata, spiny sea animals with five-fold symmetry; and Chordata, animals possessing a notochord or backbone, at least in the embryo, including fish, amphibians, reptiles, birds and mammals. Names follow the rules of binomial nomenclature introduced by Linnaeus: two names, the genus with a capital initial and the species epithet in lower case, both printed in italic type or, when written in pencil in a practical book, underlined separately, and always Latin or Latinised, so maize is Zea mays, the malaria parasite Plasmodium falciparum, and man Homo sapiens. Identification uses a dichotomous key, a series of numbered pairs of opposite statements; the user reads both statements of a pair, chooses the one matching the specimen, and follows the instruction to the next pair until a single organism is named, and the pairs are drawn from features such as the presence of a shell, the number of wings, leaf venation, the presence of segments, or the presence of legs.",
          "bulletPoints": [
            "Rank order: kingdom, phylum or division, class, order, family, genus, species.",
            "Five kingdoms: Monera without a nucleus, Protista unicellular eukaryotes, Fungi with chitin walls and no chlorophyll, Plantae autotrophic, Animalia heterotrophic.",
            "Plant divisions: Bryophyta non-vascular and water-dependent, Pteridophyta vascular and spore-bearing, Spermatophyta seed-bearing.",
            "Animal phyla to recognise: Protozoa, Coelenterata, Platyhelminthes, Nemathelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Chordata.",
            "Binomial name: genus with capital letter, species small, both italicised or separately underlined, maize Zea mays, man Homo sapiens."
          ],
          "keyTakeaway": "Classification states evolutionary relationship, and every name and every rank in the five-kingdom system is examinable by definition.",
          "realWorldExample": "In a Paper 3 tray at a school in Cape Coast a specimen of the land snail Limicolaria with its coiled shell and muscular foot is placed beside an earthworm; the key separates them at once, Mollusca having a shell and unsegmented body, Annelida being segmented without a shell."
        }
      ],
      "commonMistakes": [
        "Naming a temporary change as an adaptation, for example saying that a student's darkening skin in the sun is an adaptation; tanning is acclimatisation and is not inherited.",
        "Explaining adaptation in Lamarckian language, writing that the giraffe stretched its neck through use and passed the longer neck on, when the required answer is that short-necked individuals failed to survive and breed.",
        "Confusing homologous with analogous organs; homologous means same structure and different work, analogous means same work and different structure, and the two words are regularly swapped in scripts.",
        "Writing a scientific name with both words capitalised, without italics or underlining, or with the species epithet in capitals, so that Zea Mays loses the mark.",
        "Placing bacteria, yeast or the malaria parasite in the wrong kingdom, giving Monera to yeast or Protista to bacteria; yeast is a fungus, bacteria have no true nucleus and belong to Monera, Plasmodium is a unicellular eukaryote in Protista.",
        "Calling a moss a fern or a pteridophyte, forgetting that Bryophyta has no vascular tissue and no true roots while Pteridophyta has xylem and phloem."
      ],
      "wassceExamTips": [
        "Paper 1 rewards the exact definitions of homologous, analogous and vestigial organs; memorise each in one short clause and do not paraphrase them into English.",
        "In Paper 2 an adaptation question is marked point by point, so list feature plus advantage in separate numbered lines, four lines for four marks, rather than one long paragraph.",
        "When asked to contrast Darwin and Lamarck, write three Lamarckian statements and three Darwinian ones in two columns; examiners expect the phrase inheritance of acquired characters rejected because germ cells are unaffected.",
        "For the five kingdoms, learn one defining cell feature and one example per kingdom, since the objective paper tests example to kingdom matching more than long definitions.",
        "Paper 3 gives you specimens and a key: read both statements of each pair before choosing, record the letter of your choice in the working, and name the phylum with the feature that decided it.",
        "State the rules of binomial nomenclature as two named rules, capital on the genus and italics or separate underlining, because a correct name written without the rule loses the method mark for formatting."
      ],
      "summaryChecklist": [
        "Can I give one structural, one physiological and one behavioural adaptation and name the problem each solves?",
        "Can I explain camouflage, warning colouration and both kinds of mimicry with an example?",
        "Can I set out the five points of natural selection and say why Lamarck's theory is rejected?",
        "Can I name five lines of evidence for evolution and distinguish homologous from analogous organs?",
        "Can I place an organism in one of the five kingdoms, write its correct binomial name and key it out with a dichotomous key?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-adapt-1",
        "title": "Measuring Natural Selection on Grasshopper Colour",
        "problem": "After a bush fire on a fallow near Ejura, a student released 100 brown and 100 green grasshoppers of the same species on the blackened ground and protected the plot with netting so that none escaped. Seven days later she collected again and recovered 60 brown and 15 green grasshoppers. Calculate the percentage survival of each colour form, compare them, and state the conclusion about the agent of selection.",
        "stepByStepSolution": [
          "Step 1 (M1): Percentage survival equals the number recovered divided by the number released, multiplied by 100, and the same calculation is done for each colour form.",
          "Step 2 (M1): For the brown form substitute 60 recovered out of 100 released, 60 / 100 x 100.",
          "Step 3 (A1): Brown survival = 60 percent.",
          "Step 4 (M1): For the green form substitute 15 recovered out of 100 released, 15 / 100 x 100.",
          "Step 5 (A1): Green survival = 15 percent.",
          "Step 6 (M1): Compare the two by division, 60 / 15, to find how many times better the brown form survived.",
          "Step 7 (A1): The brown grasshoppers survived four times as well as the green ones; the conclusion is that birds hunting by sight removed the conspicuous green form, so camouflage against the burned background is the favourable variation being selected, and the population will tend to become browner over generations."
        ],
        "keyTakeaway": "Selection is measured as percentage survival of each variant, and the difference identifies which feature the environment favours."
      },
      {
        "id": "ex-bio-adapt-2",
        "title": "True Size of a Specimen and the Writing of Its Name",
        "problem": "In the practical room a candidate views a flea under a light microscope with a 10 times eyepiece and a 10 times objective, and draws the outline so that the body measures 40 mm on paper. In the same tray a snail shell measured on the drawing at a 400 times magnification appears 100 mm wide. Find the magnification used for the flea and its true body width in millimetres and micrometres, and find the true width of the snail shell. Write, correctly formatted, the name of the genus of the flea and explain how a species is defined.",
        "stepByStepSolution": [
          "Step 1 (M1): Total magnification is eyepiece magnification multiplied by objective magnification, so 10 x 10.",
          "Step 2 (A1): Magnification used = 100 times.",
          "Step 3 (M1): True size equals drawn size divided by magnification, so the flea body is 40 / 100.",
          "Step 4 (A1): The true body width of the flea is 0.4 mm, which is 400 micrometres because 1 mm = 1000 micrometres.",
          "Step 5 (M1): For the shell, real size = drawing size divided by magnification, so 100 / 400.",
          "Step 6 (A1): The snail shell is truly 0.25 mm wide as drawn at that magnification.",
          "Step 7 (A1): Final answers, 100 times magnification, flea 0.4 mm or 400 micrometres, shell 0.25 mm; a scientific name is written with the genus initial in capitals and the species epithet in lower case, both italicised or separately underlined, and a species is a group whose members resemble one another and interbreed in nature to produce fertile offspring."
        ],
        "keyTakeaway": "Magnification works in both directions, drawn over real or real times magnification, and a species is defined by interbreeding, not by appearance alone."
      }
    ],
    "quiz": {
      "id": "quiz-bio-adaptation-evolution",
      "topicId": "shs3-bio-t2-adaptation-evolution-classification",
      "title": "Adaptation, Evolution and Classification Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-adapt-1",
          "quizId": "quiz-bio-adaptation-evolution",
          "questionText": "Which feature is a physiological adaptation of the mangrove to life in salt water?",
          "optionA": "A broad canopy that shades the mud",
          "optionB": "Roots that exclude salt and leaves that excrete it",
          "optionC": "Long deep taproots that hold the tree upright",
          "optionD": "Viviparous seedlings that drop into the mud",
          "correctOption": "B",
          "subConcept": "Physiological adaptation",
          "explanation": "Excluding and excreting salt is a working of the tissues, so it is physiological. Stilt roots and the viviparous habit are structural and reproductive features of the same plant, and a canopy is structural.",
          "remediationTip": "Sort a list of fifteen features into structural, physiological and behavioural columns before revising examples."
        },
        {
          "id": "q-bio-adapt-2",
          "quizId": "quiz-bio-adaptation-evolution",
          "questionText": "The forelimb of a man, a bat and a whale have the same bone plan but different uses. They are",
          "optionA": "analogous organs showing convergent evolution",
          "optionB": "vestigial organs showing loss of use",
          "optionC": "homologous organs showing analogous function",
          "optionD": "homologous organs showing descent from a common ancestor",
          "correctOption": "D",
          "subConcept": "Evidence for evolution",
          "explanation": "Same structure, different work defines homologous organs, and their common plan is evidence of common ancestry. Option C mixes the two terms, since homologous organs are not analogous in function.",
          "remediationTip": "Write the two definitions with arrows: same structure different work equals homologous, same work different structure equals analogous."
        },
        {
          "id": "q-bio-adapt-3",
          "quizId": "quiz-bio-adaptation-evolution",
          "questionText": "Which statement belongs to Lamarck's explanation of evolution rather than Darwin's?",
          "optionA": "Characters developed by continued use during an animal's life are passed to its offspring",
          "optionB": "Individuals with favourable inherited variations survive and breed more often",
          "optionC": "More offspring are produced than the environment can support",
          "optionD": "Variation in a population arises by mutation and by sexual reproduction",
          "correctOption": "A",
          "subConcept": "Lamarck contrasted with Darwin",
          "explanation": "The inheritance of acquired characters through use and disuse is Lamarck's claim, and it is rejected because acquired characters do not change the genes of the gametes. The other three are parts of the Darwinian argument.",
          "remediationTip": "Rewrite the giraffe example twice, once in Lamarck's words and once in Darwin's, and mark which one is accepted."
        },
        {
          "id": "q-bio-adapt-4",
          "quizId": "quiz-bio-adaptation-evolution",
          "questionText": "Which kingdom contains organisms whose cells have no true nucleus and which reproduce by splitting?",
          "optionA": "Fungi",
          "optionB": "Protista",
          "optionC": "Monera",
          "optionD": "Plantae",
          "correctOption": "C",
          "subConcept": "Five-kingdom classification",
          "explanation": "Monera holds the bacteria and blue-green algae, whose cells lack a nuclear membrane and which divide simply. Fungi have nuclei and chitin walls, Protista are unicellular eukaryotes, and Plantae are multicellular autotrophs.",
          "remediationTip": "Make a table of the five kingdoms with one cell feature and two examples in each row."
        },
        {
          "id": "q-bio-adapt-5",
          "quizId": "quiz-bio-adaptation-evolution",
          "questionText": "Which of these follows the rules for writing a scientific name?",
          "optionA": "Zea Mays, with both words beginning in capitals",
          "optionB": "zea mays, with no capital letter anywhere",
          "optionC": "Zea mays, the two names italicised or underlined separately",
          "optionD": "Zea alone, because the second name is optional",
          "correctOption": "C",
          "subConcept": "Binomial nomenclature",
          "explanation": "The genus begins with a capital letter and the species epithet is wholly lower case, the two words being italicised in print or separately underlined in a practical book. Options A and B break the capitalisation rule and option D drops the species epithet, which is never optional.",
          "remediationTip": "Practise writing Homo sapiens, Zea mays and Plasmodium falciparum in pencil with separate underlines."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t2-ecosystem-function-conservation",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Ecosystem Function, Productivity and Conservation Practice",
    "description": "Producer, consumer and decomposer roles, food chains and trophic levels with energy loss, pyramids of number, biomass and energy, productivity and standing crop, nutrient cycling in nitrogen, carbon and phosphorus, water and energy flow, the value of wetland and mangrove ecosystems, deforestation and mining impacts in Ghana, and protected areas and community conservation.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• An ecosystem runs on two separate processes: energy flows through it once, entering as sunlight and leaving as heat, while matter is cycled, the same atoms of carbon, nitrogen and phosphorus passing repeatedly between the living and the non-living parts.\n• Producers, green plants, algae and phytoplankton, fix light energy by photosynthesis; consumers eat, herbivores at the primary level, carnivores at secondary and tertiary levels; decomposers, mainly bacteria and fungi, digest dead matter externally and return minerals, with detritivores such as termites, earthworms and dung beetles shredding the material first.\n• A food chain names the trophic levels in order, level one producers, level two herbivores, level three the first carnivores, level four higher carnivores, and every arrow means energy transferred, so an arrow drawn towards the organism eaten is drawn wrong.\n• A typical savanna chain is grass, grasshopper, agama lizard, sparrow hawk; a pond chain is phytoplankton, small fish, tiger fish, man; webs of several interlocked chains make a community stable because a failure of one food can be survived on another.\n• Between levels only about ten percent of the energy becomes the living tissue of the next level; the rest is lost in respiration as heat, in movement and maintenance, in parts uneaten such as bone, bark and cellulose, and in excreted waste, which is why chains rarely run beyond four or five levels.\n• Ten percent in figures: producers fixing 24 000 kJ per square metre per year pass about 2 400 kJ to herbivores, 240 kJ to the first carnivore and 24 kJ to the top carnivore, so top carnivores are always few and always fragile.\n• Productivity puts numbers on the producer level: gross primary production is all the light energy fixed, net primary production is what remains after the plant's own respiration, and only the net figure is the food income of the next trophic level.\n• Standing crop is the mass of living organic matter present at one moment, usually as dry mass per square metre or per hectare, while productivity is a rate and must carry a per-year clause.\n• A pyramid of numbers counts individuals per level and can be inverted, one mango tree supporting a host of insects; a pyramid of biomass weighs dry organisms per level and can look partially inverted in open water where short-lived phytoplankton turn over fast; a pyramid of energy can never be inverted because loss at every transfer is a fact of respiration.\n• Feeding low is a policy of energy: 5 400 kJ of grain eaten directly by people yields about 540 kJ to them, while the same grain fed through cattle hands people only about 54 kJ, two transfers instead of one, which is why grain provinces support dense populations on plant diets.\n• In the nitrogen cycle, Rhizobium in the root nodules of cowpea, groundnut and soya and free-living Azotobacter fix atmospheric nitrogen into compounds; decomposers ammonify proteins to ammonium, Nitrosomonas oxidise ammonium to nitrite and Nitrobacter oxidise nitrite to the nitrate roots absorb, while denitrifying bacteria in waterlogged soil return nitrogen gas to the air, as lightning also fixes some nitrogen.\n• In the carbon cycle photosynthesis removes carbon dioxide, feeding passes carbon along chains, respiration, decomposition and the burning of wood, charcoal and fossil fuel return it, and the ocean, peat and forest biomass are the sinks; clearing forest both releases stored carbon and cancels future absorption.\n• The phosphorus cycle has no gaseous stage: it moves from weathered rock phosphate through soil solution into plants and animals and back by decomposers, with slow losses to the sea, so old leached tropical soils are commonly phosphate-poor and legume rotation plus rock phosphate application are real farm measures.\n• Water and energy flow together in the landscape: rain evaporates, runs off bare soil causing erosion, or infiltrates to springs and the water table, and a forest canopy with its litter raises infiltration, so a cleared watershed means lower dry-season stream flow and sharper floods in the rains.\n• The wetlands and mangroves of Ghana, the Densu Delta and the Keta Lagoon among the wetlands of international importance, nurse fish and mud crab, break storm surges at Keta, trap silt and pollution, store carbon in their mud, and supply the salt harvesters of the Songor lagoon and the fishermen of Elmina, so a felled mangrove stand trades a permanent engine for a month of smoking wood.\n• Deforestation for cocoa, charcoal and illegal logging, bush burning, and galamsey mining in the Ankobra, Offin and Birim basins leave turbid, mercury-tainted water in which invertebrates, fish spawning and river-side drinking-water intake all fail.\n• The conservation answer includes the protected areas of Mole, Kakum, Digya, Bia, Bui and the Wli waterfall, the sacred groves and monkey sanctuary at Boabeng-Fiema, the closed fishing season and net rules, taungya and agroforestry, and the Green Ghana replanting exercise.\n• Field safety for the ecosystem investigator: gloves and boots for pond and river sampling, a labelled wide-mouth bottle never filled to the brim, hands washed after any sampling near a mining site, and turbidity checked against a lowered white disc and recorded with the site notes.",
    "detailedNotes": {
      "overview": "Ecosystems are examined here as machines with two working fluids: energy that flows through once and must be renewed by the sun, and matter that is recycled indefinitely. You first fix the roles, producer, consumer and decomposer, then build food chains and webs to the ten percent rule, and apply the productivity terms gross and net primary production and standing crop so that figures can be compared between a forest and a pond. The pyramids of number, biomass and energy follow as the graphic form of the same arithmetic, with their exceptions properly stated. The nitrogen, carbon and phosphorus cycles then show the recycling machinery in detail with its named bacteria, and the topic lands on Ghana: the productive value of mangrove and wetland systems, the cost of deforestation and galamsey, and the protected areas and community practice that conserve what remains.",
      "introduction": "Begin with numbers you can generate yourself. Quadrat a square metre of school lawn and estimate producers and consumers to build a pyramid of numbers; dry and weigh a known mass of water fern or grass for a standing-crop figure. Rehearse the ten percent transfer aloud on round numbers until 24 000 falling to 2 400, 240 and 24 is instant. Draw the nitrogen cycle on a single sheet with the bacteria named beside each arrow, then annotate the arrows with the farming act that disturbs them, monocropping, burning, waterlogging, fertilizer burning. Close by sampling a pond or canal bank: record water turbidity against a white disc lowered on a string, log the human activity within sight of the bank, and keep the bottle sealed, labelled and washed hands after.",
      "realWorldContext": "At the Keta Lagoon and the Densu Delta the mangrove fringe shelters juvenile tilapia and mud crab before they breed at sea, and when the trees are felled for the fish-smoking ovens the following season's catch drops and the bank begins to erode toward the village road. In the Ankobra, Offin and Birim basins galamsey dredges turn the rivers ochre-brown, so treatment works downstream face higher chemical costs while mercury settles through the food chain into the fish on the market plate. Northern bush burning for a flush of young grass suppresses trees and releases their carbon, and the scarcity of sparrow hawks over Tamale is the tenth-percent tail of the energy series made visible. Community answers are local too: the taboo-protected black-and-white colobus at Boabeng-Fiema, the Kakum canopy walk that pays surrounding towns from visitors, the closed fishing season on inland waters, and the Green Ghana planting each year.",
      "objectives": [
        "Describe the roles of producers, consumers and decomposers and construct food chains and webs with correctly directed energy arrows",
        "State and apply the ten percent rule to energy-transfer calculations and explain why chains are limited to four or five levels",
        "Define gross and net primary production, standing crop and productivity, and draw pyramids of number, biomass and energy noting which may invert",
        "Explain the nitrogen, carbon and phosphorus cycles and water flow with named organisms, and assess mangrove value, deforestation and galamsey impacts and Ghana's conservation measures"
      ],
      "sections": [
        {
          "title": "Roles, Chains and the One-Way Flow of Energy",
          "content": "Every ecosystem has three working classes of organism. Producers, green plants, algae and the microscopic phytoplankton, trap sunlight and convert it to chemical energy in sugars, the only door through which energy enters the living system. Consumers feed: herbivores take the plant, primary carnivores take the herbivore, and higher carnivores stack upward, each feeding position a trophic level, so a sparrow hawk hunting rats over a fallow sits at level three or four while the grass shading it sits at level one. Decomposers, chiefly bacteria and fungi, complete the circuit by digesting dead bodies and wastes with external enzymes, absorbing the products and releasing simple minerals and carbon dioxide where roots can take them again; detritivores, termites in a fallen cocoa pod, earthworms in the garden, dung beetles under a cow, shred the material first and speed that work. Energy moves through all of this in one direction and degrades as it goes: at each transfer roughly ninety percent is spent in respiration and lost as heat, used in movement and maintenance, passed out in urine and faeces, or left uneaten as bone, hide, bark and cellulose, while about ten percent is built into the tissue of the next level. This ten percent rule sets the length of chains, because a fifth consumer level would inherit too little energy to hold a breeding population, and it explains the thin numbers of top carnivores over every landscape. Food webs, the interlocking of several chains, are the true picture and the stability insurance: where an owl as well as a python checks the rats of a granary store, the failure of one hunter does not explode the pest.",
          "bulletPoints": [
            "Producers fix sunlight; consumers feed at levels two and above; decomposers return minerals.",
            "Arrows in a chain point along the energy path, from eaten to eater, never the reverse.",
            "About ten percent of a level's energy becomes the tissue of the next; the rest is respired, excreted or uneaten.",
            "Chains stop at four or five levels because the tenth-percent tail runs out.",
            "Food webs stabilise a community by giving consumers alternative foods."
          ],
          "keyTakeaway": "Energy enters once from the sun, shrinks at every step and leaves as heat; matter, unlike energy, is taken back and used again.",
          "realWorldExample": "Over a fallow at Ejura the sequence grass, grasshopper, agama, hawk runs on ten percent steps, so a farmer who clears the fallow for maize removes level one and the whole chain of pest-eaters with it, one reason a new plot shows an insect outbreak at first."
        },
        {
          "title": "Productivity, Standing Crop and the Three Pyramids",
          "content": "Productivity puts numbers on the producer level. Gross primary production is the total light energy the plants of an area fix in a year; the plants respire a large fraction of it for their own maintenance, and what survives that respiration is net primary production, the true income available to the herbivores, so net equals gross minus plant respiration in every calculation. The comparison unit is a rate, kilojoules per square metre per year or grams of dry mass per square metre per year; a shade-heavy cocoa stand fixes less per square metre than a maize field at the same stage, and a fast eucalyptus compartment outpaces degraded savanna, which is why reclamation pays. Standing crop is a snapshot rather than a rate, the mass of living material present at one moment, and a huge standing crop can belong to a slow system, an old forest of great trunks, while a small standing crop may belong to a fast one, a pond whose phytoplankton double in days. The three pyramids graph the same facts. The pyramid of number counts individuals per level and can invert at the base when one mango tree hosts a host of caterpillars, or when a single tapeworm stands in the gut of a herd. The pyramid of biomass weighs dry mass per level and is usually upright on land, yet it can show an inverted lower band in open water because phytoplankton, tiny and short-lived, are eaten almost as fast as they grow, so their standing crop is small while their productivity is high. The pyramid of energy plots the rate of energy through each level and never inverts, because the ninety percent loss is a law of respiration; that same arithmetic carries the food-choice argument, a plot whose net production is 5 400 kJ feeding people directly at about 540 kJ but feeding the same harvest through cattle at only about 54 kJ.",
          "bulletPoints": [
            "Gross primary production minus plant respiration equals net primary production, the income of level two.",
            "Productivity is a rate per area per time; standing crop is the living mass at one moment.",
            "Number pyramids invert when one large producer hosts many consumers.",
            "Biomass pyramids invert partly in ponds because phytoplankton turn over so fast.",
            "Energy pyramids never invert, and eating low shortens the chain and saves energy."
          ],
          "keyTakeaway": "Measure producers as rates, compare systems with pyramids, and remember that only the energy pyramid is upright everywhere.",
          "realWorldExample": "A class fieldwork note at the Amansuri wetland dries a known area of floating vegetation for a standing-crop mass, while the same class weighs a maize plot at harvest for its seasonal net production, comparing the two land uses on one rate line."
        },
        {
          "title": "Nutrient Cycles, Wetland Value and Ghanaian Conservation",
          "content": "The cycles are the recycling plant. Nitrogen enters living matter by fixation: Rhizobium bacteria inside the pink nodules of cowpea, groundnut and soya roots convert the gas to compounds, free-living Azotobacter and blue-green algae add more, and lightning fixes a small share; ammonifying decomposers release ammonium from dead protein, nitrifying bacteria finish the road, Nitrosomonas turning ammonium to nitrite and Nitrobacter turning nitrite to the nitrate roots absorb, while denitrifying bacteria in waterlogged airless soil burn nitrate and leak nitrogen gas back to the air, which is why a flooded field wastes fertilizer. Rotation with legumes, manure, compost and careful urea are the farmer's counter-moves, and all of them move matter, never energy. Carbon circulates between air and life by photosynthesis and respiration, passes through animals by feeding, returns by decomposition and by the burning of wood, charcoal and fuel, and is banked in oceans, peat and forest biomass; clearing Ghana's forest spends that bank twice, releasing the stored carbon and cancelling the uptake of the removed trees, feeding the rainfall unpredictability farmers now describe. Phosphorus has no air stage at all: it leaves weathered rock, dissolves into soil water, is absorbed by roots, walks the chains, is returned by decomposers and is slowly lost to sediments on the sea floor, so old leached soils of the cocoa belt run phosphate-poor and respond measurably to rock phosphate. Water binds every flow: rain under canopy and litter soaks in, feeds springs and keeps streams alive through the dry season, while rain on bare ground runs off, takes the topsoil to the rivers and silts the fish spawning beds. This is the ledger on which the mangrove and wetland economy is counted. The Densu Delta and the Keta Lagoon Complex are recognised wetlands of international importance; the mangroves at San Simon and the Songor lagoon nurse mud crab and tilapia that the fishermen of Elmina and Dixcove harvest after the rains, the women of the Songor win salt from its waters, storm surges break in the roots instead of on the road, and the mud locks away carbon. Galamsey in the Ankobra, Offin and Birim basins inverts every service at once: turbidity smothers gills and eggs, mercury climbs the food chain onto the plate, and the downstream treatment plant pays more chemicals for the same drinking water. The answers are law, landscape and village: forest reserves and the parks of Mole, Kakum, Digya, Bia, Bui and the Wli waterfall, the taboo-guarded monkey groves of Boabeng and Fiema, closed fishing seasons and banned small meshes, taungya planting inside reserves, agroforestry with live shade on the cocoa farm, Green Ghana replanting, and for the student ecologist the plain safety rules of the field, boots and gloves at the bank, a labelled bottle not filled to the brim, a white disc lowered for turbidity, and washed hands before the bus.",
          "bulletPoints": [
            "Rhizobium fixes, decomposers ammonify, Nitrosomonas and Nitrobacter nitrify, denitrifiers return gas.",
            "Carbon enters by photosynthesis and leaves by respiration, decomposition and burning; forest clearing spends the bank twice.",
            "Phosphorus has no air route: rock to soil to life to sea, so old tropical soils need phosphate.",
            "Mangroves are fish nurseries, storm buffers, carbon stores and salt and crab grounds.",
            "Galamsey silts and poisons rivers; parks, reserves, community rules, closed seasons and replanting answer back."
          ],
          "keyTakeaway": "Named bacteria and weathered rock drive the cycles, and Ghana's conservation practice protects the recycling plant its farms and fisheries already depend on.",
          "realWorldExample": "At a water point below an abandoned galamsey pit a district team records brown turbidity against a lowered white disc and reports the mercury suspicion to the Water Resources Commission, while at Boabeng the same term's biology class counts the habituated colobus that the taboo of the sacred grove has guarded for generations."
        }
      ],
      "commonMistakes": [
        "Writing that energy is recycled in an ecosystem; energy flows one way and is replaced by the sun, only matter is recycled, and the two verbs must never swap.",
        "Drawing food-chain arrows towards the organism eaten instead of along the energy path; the arrow means energy transferred, from the eaten to the eater.",
        "Confusing net with gross primary production: net is what survives plant respiration and it alone feeds the herbivore level.",
        "Misnaming the nitrogen bacteria, for example crediting Rhizobium with converting nitrite to nitrate; that step is Nitrobacter, while Rhizobium fixes the gas."
      ],
      "wassceExamTips": [
        "In a Paper 2 energy-transfer calculation show each 10 percent step on the line, for instance 24 000 to 2 400 to 240, because method marks are awarded for every stated transfer even if the final figure slips.",
        "When comparing two pyramids, label the axes with the quantity and the level, then state which may invert and name its cause, one large producer or a fast turnover, since the cause carries the mark.",
        "In Ghanaian essay answers name at least one real site, Densu Delta, Keta, Mole, Kakum or the Ankobra, with its service or threat attached, because the local-example mark is given separately.",
        "For Paper 3 fieldwork data record quadrat or turbidity readings in a table with units, average at least three repeats, and state one limitation such as season, animal traffic or upstream disturbance."
      ],
      "summaryChecklist": [
        "I can name producers, consumers and decomposers and draw chains and webs with arrows along the energy path.",
        "I can apply the ten percent rule to a producer figure and explain why chains stop at four or five levels.",
        "I can distinguish gross from net primary production, productivity from standing crop, and the three pyramids with their inversion rules.",
        "I can diagram the nitrogen, carbon and phosphorus cycles with the named bacteria and the farming actions that alter them.",
        "I can assess mangrove and wetland services, the impact of deforestation and galamsey, and the protected areas and community measures that conserve them."
      ]
    },
    "examples": [
      {
        "id": "ex-bio-ecosysfn-1",
        "title": "Ten Percent Energy Transfer up a Savanna Chain",
        "problem": "In a Guinea savanna food chain the grasses fix 24 000 kJ of energy per square metre in one year. The chain runs grass, grasshopper, agama lizard, sparrow hawk. Calculate the energy incorporated into each consumer level, find how much of the original producer energy has failed to reach the hawk level, and state what the figure says about the number of hawks the land can hold.",
        "stepByStepSolution": [
          "Step 1 (M1): Energy into the herbivore level equals 10 percent of the producer figure, so 24 000 x 0.10.",
          "Step 2 (A1): The grasshoppers incorporate 2 400 kJ per square metre per year.",
          "Step 3 (M1): Energy into the first carnivore equals 10 percent of the herbivore figure, so 2 400 x 0.10.",
          "Step 4 (A1): The agamas incorporate 240 kJ per square metre per year.",
          "Step 5 (M1): Energy into the top carnivore equals 10 percent again, so 240 x 0.10.",
          "Step 6 (A1): The hawks receive 24 kJ per square metre per year.",
          "Step 7 (M1): Energy that did not reach the hawk level equals 24 000 - 24.",
          "Step 8 (A1): That is 23 976 kJ lost along the way, which is why top carnivores are always few, fragile and the first class to vanish when a level below them is disturbed."
        ],
        "keyTakeaway": "Multiply by 0.1 at every transfer, and the arithmetic itself explains the rarity of hawks."
      },
      {
        "id": "ex-bio-ecosysfn-2",
        "title": "Net Primary Production and the Cost of Eating High",
        "problem": "A rice field has a gross primary production of 8 000 kJ per square metre per year, and the rice plants respire 2 600 kJ of it. Find the net primary production and the net figure as a percentage of the gross. If people eat the grain directly, one transfer, versus eating rice straw and grain fed through cattle, two transfers, calculate the energy reaching the people at the ten percent rule in each case and give the ratio of the plant diet to the cattle route.",
        "stepByStepSolution": [
          "Step 1 (M1): Net primary production equals gross minus plant respiration, so 8 000 - 2 600.",
          "Step 2 (A1): Net primary production is 5 400 kJ per square metre per year.",
          "Step 3 (M1): Net as a percentage of gross equals 5 400 / 8 000 x 100.",
          "Step 4 (A1): The field passes 67.5 percent of what it fixes on to the next level.",
          "Step 5 (M1): Plant diet, one transfer, gives people 5 400 x 0.10; the cattle route gives 540 x 0.10.",
          "Step 6 (A1): The direct eaters receive 540 kJ; the cattle route delivers 54 kJ to the same land.",
          "Step 7 (M1): Ratio equals 540 / 54.",
          "Step 8 (A1): The plant route feeds ten times as many people from the same net production, the arithmetic behind a grain-based diet in a dense district."
        ],
        "keyTakeaway": "Net primary production sets the budget, and every extra trophic step in a diet costs ninety percent of what remains."
      }
    ],
    "quiz": {
      "id": "quiz-bio-ecosystem-function",
      "topicId": "shs3-bio-t2-ecosystem-function-conservation",
      "title": "Ecosystem Function and Conservation Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-ecosysfn-1",
          "quizId": "quiz-bio-ecosystem-function",
          "questionText": "Energy is lost between two trophic levels mainly because",
          "optionA": "most of it is respired as heat or passed in waste and uneaten parts",
          "optionB": "predators destroy the bodies of their prey completely",
          "optionC": "producers refuse to absorb sunlight at midday",
          "optionD": "decomposers carry it back into the atmosphere as oxygen",
          "correctOption": "A",
          "subConcept": "Energy loss between levels",
          "explanation": "Respiration heat, movement, excreted wastes and uneaten bone, hide and cellulose account for the ninety percent loss. Predators do not digest everything, absorption of light is not the issue, and decomposers release carbon dioxide rather than carrying off energy as oxygen.",
          "remediationTip": "List the four loss routes on one card and tick them off whenever a transfer question appears."
        },
        {
          "id": "q-bio-ecosysfn-2",
          "quizId": "quiz-bio-ecosystem-function",
          "questionText": "Which pyramid can never be inverted?",
          "optionA": "Pyramid of numbers",
          "optionB": "Pyramid of biomass",
          "optionC": "Pyramid of standing crop",
          "optionD": "Pyramid of energy",
          "correctOption": "D",
          "subConcept": "Ecological pyramids",
          "explanation": "Because every transfer loses energy by respiration, each level must pass on less than the one below, so the energy pyramid stands upright everywhere. Number pyramids invert over one large tree, biomass pyramids can invert over fast-turnover phytoplankton, and standing crop is not itself a pyramid type.",
          "remediationTip": "Draw one inverted number pyramid and one partly inverted biomass pyramid, then beside them the always upright energy pyramid."
        },
        {
          "id": "q-bio-ecosysfn-3",
          "quizId": "quiz-bio-ecosystem-function",
          "questionText": "In the nitrogen cycle the bacteria that convert nitrite to nitrate are",
          "optionA": "Nitrosomonas",
          "optionB": "Rhizobium",
          "optionC": "Nitrobacter",
          "optionD": "Azotobacter",
          "correctOption": "C",
          "subConcept": "Nitrogen cycle bacteria",
          "explanation": "Nitrobacter completes nitrification by oxidising nitrite to nitrate. Nitrosomonas performs the ammonium-to-nitrite step, while Rhizobium and Azotobacter fix atmospheric nitrogen instead.",
          "remediationTip": "Write the chain fix, ammonify, nitrite, nitrate with one bacterium name under each arrow and recite it twice daily."
        },
        {
          "id": "q-bio-ecosysfn-4",
          "quizId": "quiz-bio-ecosystem-function",
          "questionText": "Cutting the mangrove fringe at San Simon reduces the coastal catch chiefly because",
          "optionA": "the trees themselves are the main food of the adult fish",
          "optionB": "the roots are the nursery grounds sheltering juvenile fish and crab",
          "optionC": "mangrove leaves supply the oxygen dissolved in the sea",
          "optionD": "felling warms the water enough to kill fish eggs",
          "correctOption": "B",
          "subConcept": "Wetland and mangrove value",
          "explanation": "The tangled roots shelter juveniles from predators and hold the mud crabs' home ground, so removing them empties the sea fronts that the fishermen of Elmina and Keta work. Fish do not eat the trees, leaf oxygen is trivial at sea scale, and warming is not the accepted mechanism.",
          "remediationTip": "Sketch the mangrove cross section once with the words nursery, storm buffer and carbon store marked where they belong."
        },
        {
          "id": "q-bio-ecosysfn-5",
          "quizId": "quiz-bio-ecosystem-function",
          "questionText": "Galamsey dredging in the Ankobra basin damages the river ecosystem by",
          "optionA": "siltation that smothers gills and spawning beds plus mercury entering the food chain",
          "optionB": "raising the water level until the banks flood weekly",
          "optionC": "removing only the fish that miners decline to eat",
          "optionD": "cooling the river below the breeding temperature of tilapia",
          "correctOption": "A",
          "subConcept": "Mining impact on ecosystems",
          "explanation": "The turbid suspended sediment coats gills and egg substrates while mercury used in binding the gold accumulates upward through the food chain into people. The other options invert or invent the mechanism.",
          "remediationTip": "Draw the turbidity chain from dredger to gill to plate and label each step of the transfer."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t2-evolution-evidence-mechanisms",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 9,
    "title": "Evolution: Evidence, Mechanisms, Speciation and Human Origins",
    "description": "fossil record and dating, comparative anatomy homologous and analogous organs, embryology and biochemical evidence, variation as raw material, natural selection and industrial melanism, adaptation and mimicry, reproductive isolation and speciation, human evolution sequence, antibiotic and insecticide resistance as observed evolution",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Evolution is the gradual change in the inherited characteristics of populations over many generations, and it is the idea that unites all of biology.\n• The fossil record, the preserved remains or traces of ancient organisms in sedimentary rock, is the strongest direct evidence; older fossils lie in lower strata and simpler forms appear first.\n• Absolute dating of a fossil uses the radioactive decay of isotopes such as carbon-14, whose half-life is about 5700 years; each half-life halves the remaining carbon-14.\n• Homologous organs, for example the human arm, bird wing and whale flipper, share the same bone plan but do different work and point to common ancestry.\n• Analogous organs, for example bird and insect wings, do the same work but have different structure and point to convergent evolution, not close relationship.\n• Embryology shows that related vertebrates pass through similar early stages, an indication of shared ancestry; biochemical evidence compares DNA and protein sequences.\n• Variation within a population is the raw material of evolution; without heritable differences, selection can do nothing.\n• Natural selection, the idea of Charles Darwin and Alfred Wallace, is the survival and reproduction of individuals best fitted to their environment.\n• Industrial melanism in the peppered moth Biston betularia is a classic observed case; soot-darkened trees favored the dark form over the pale form.\n• Adaptation is a feature that improves an organism's chance of survival; mimicry is resemblance of one organism to another that gains protection.\n• Speciation needs reproductive isolation, a barrier that stops two groups interbreeding; geographic separation by a river or mountain is a common start.\n• Human evolution runs from early tree-living ancestors through Homo habilis, Homo erectus to Homo sapiens, with brain size, upright stance and tool use increasing.\n• Antibiotic resistance in bacteria and insecticide resistance in mosquitoes are evolution happening now, driven by overuse of the chemical.\n• Selection acts on individuals but it is the population that evolves across generations.",
    "detailedNotes": {
      "overview": "This topic builds the case that living things have changed over long time and explains how that happens. You will weigh the evidence from fossils, comparative anatomy, embryology and molecules, then show how variation and natural selection together shape populations. The mechanism is extended to adaptation, mimicry, reproductive isolation and speciation, and finished with the human lineage and the resistance of bacteria and insects, which is evolution we can watch in our own lifetime.",
      "introduction": "Study evolution as an argument with evidence. For each line of evidence, name the observation, then say exactly what it proves and its limitation, because an examiner pays for the qualifier as well as the fact. When you handle a dating calculation, write the half-life relationship first, count how many halvings the given fraction represents, and multiply by the half-life. For natural selection questions always name the variation, the selective agent, the survivors and the change in the population over generations; missing one link loses the method mark.",
      "realWorldContext": "The gold and manganese mines at Tarkwa and Obuasi cut clean faces through layered rock, exposing the kind of strata that make the fossil record readable, and any geologist there will confirm that deeper beds hold older remains. Around the Volta Lake the mosquito control teams rotate insecticides precisely because resistance, real observed evolution, spreads through Anopheles populations when one chemical is used without a break. In clinics across Ghana the over-prescription of antibiotics is being curbed because resistant strains of tuberculosis are now common, a direct lesson in natural selection acting on germs.",
      "objectives": [
        "Describe the fossil record and explain how radioisotope dating gives the age of a specimen",
        "Distinguish homologous from analogous organs and explain what each reveals about ancestry",
        "Explain how variation and natural selection drive evolution, using industrial melanism",
        "Describe reproductive isolation and its role in the formation of new species"
      ],
      "sections": [
        {
          "title": "The Evidence: Fossils, Anatomy and Molecules",
          "content": "Fossils are the preserved remains or impressions of organisms from past ages, usually found in sedimentary rock laid down in layers. Because lower layers were deposited first, they hold the older and generally simpler fossils, so the sequence of rock is itself a timeline of changing life. The age of once-living material can be fixed by carbon-14 dating: this radioisotope decays with a half-life near 5700 years, so after one half-life half remains, after two a quarter, and after three one eighth. Comparative anatomy adds a second line. Homologous organs such as the human arm, the cat's foreleg, the bird's wing and the whale's flipper share the same basic arrangement of one upper bone, two lower bones and the digits, yet they perform very different jobs; that common plan is best explained by descent from a shared ancestor. Analogous organs such as a bird's wing and an insect's wing both fly but are built quite differently, so they show convergent evolution toward the same function, not close relationship. Embryology and molecules close the case: related vertebrates look strikingly alike in their earliest stages, and the more similar the DNA or protein sequence of two species, the more recently they shared an ancestor.",
          "bulletPoints": [
            "Fossils in lower rock strata are older and usually simpler, giving a timeline of life.",
            "Carbon-14 dating: fraction remaining halves every 5700 years, so 25 percent means two half-lives.",
            "Homologous organs share structure but differ in function, evidence for common ancestry.",
            "Analogous organs share function but differ in structure, evidence for convergent evolution.",
            "DNA and protein sequence similarity measures how recently two lineages diverged."
          ],
          "keyTakeaway": "Fossils give the timeline, homologous structure gives the family tree, and molecules give the closest measure of relationship.",
          "realWorldExample": "Rock faces opened by mining near Tarkwa show the orderly stacking of strata that lets a geologist say which fossils are older, the same reading pupils practise on a column diagram in class."
        },
        {
          "title": "Natural Selection, Variation and Adaptation",
          "content": "Evolution needs raw material, and that raw material is heritable variation, differences in form or behaviour passed from parent to offspring through genes. Without variation there is nothing for selection to act on. Charles Darwin and Alfred Wallace proposed that in every generation more offspring are produced than can survive, so individuals compete for food, mates and safety. Those whose variation happens to suit the environment survive and breed more successfully, and they pass their alleles on, while poorly fitted individuals leave fewer young. Over many generations the favourable variant becomes common in the population; this differential survival is natural selection. The peppered moth Biston betularia gives a clear observed example. Before industry, pale moths rested on pale, lichen-covered bark and were hidden from birds, while the dark melanic form was rare. Soot from burning coal killed the lichens and blackened the trunks, so pale moths were now easily seen and eaten while dark moths escaped. The dark form rose to dominance in polluted districts, a shift in the population, not of any single moth. Adaptation is the name for any feature, structural, physiological or behavioural, that raises an organism's chance of surviving in its habitat, and mimicry, where a harmless species resembles a stinging or unpalatable one, is one striking product of selection.",
          "bulletPoints": [
            "Heritable variation is the raw material on which selection works.",
            "Overproduction of offspring leads to a struggle for existence.",
            "Better-fitted individuals survive and breed more, passing their alleles on.",
            "Industrial melanism: soot-darkened bark favored the dark moth over the pale moth.",
            "An adaptation raises survival chance; mimicry is resemblance that gives protection."
          ],
          "keyTakeaway": "Selection sorts existing variation; the individual does not change, the population shifts across generations.",
          "realWorldExample": "The shifting balance of pale and dark peppered moths during Britain's industrial age is the classic field proof that selection can move a population in a single human lifetime."
        },
        {
          "title": "Speciation, Human Origins and Observed Evolution",
          "content": "A new species forms when one population splits and the two groups can no longer interbreed, so their gene pools separate. The usual first step is geographic isolation, a river changing course, a mountain rising, or a few individuals reaching an island, which physically stops breeding between the groups. Each group then faces different conditions, accumulates different variations, and is shaped by its own selection pressure; after very many generations the differences, in courtship, in breeding season or in chromosome number, become a reproductive barrier even if the groups meet again. This is speciation by natural selection. Human origins are a branching lineage rather than a straight ladder. The evidence runs from small-brained, tree-loving early ancestors through the tool-using Homo habilis, to Homo erectus, which walked fully upright, controlled fire and spread out of Africa, and finally to Homo sapiens, with the largest brain, fine speech and complex culture, the only surviving human species. Evolution is not confined to the deep past. Bacteria that carry a resistance allele survive a course of antibiotics and multiply, so resistant strains of tuberculosis and other diseases spread; insects carrying an enzyme that breaks down an insecticide survive spraying and pass on resistance. Both are natural selection we can measure in a term, a strong reason to finish drugs fully and to rotate chemicals.",
          "bulletPoints": [
            "Speciation requires reproductive isolation, often starting with geographic separation.",
            "Separated populations diverge through independent selection until they cannot interbreed.",
            "Human lineage moves from Homo habilis through Homo erectus to Homo sapiens with rising brain size.",
            "Antibiotic resistance in bacteria is selection observed directly under treatment.",
            "Insecticide resistance in mosquitoes forces rotation of chemicals to slow its spread."
          ],
          "keyTakeaway": "Isolation plus time plus selection builds new species, and resistance in germs and insects shows the same machinery still running.",
          "realWorldExample": "Mosquito control teams around the Volta Lake rotate insecticides because a single chemical rapidly selects for resistant Anopheles, exactly the speciation mechanism compressed into a season."
        }
      ],
      "commonMistakes": [
        "Saying an individual organism evolves or a giraffe stretched its neck and passed on the long neck; selection acts on variation already present in a population, not on a need in one lifetime.",
        "Confusing homologous with analogous; homologous organs share structure and show common ancestry, analogous organs share only function.",
        "Giving a fossil age from one half-life when the fraction remaining is a quarter; two halvings, not one, then multiply by 5700 years.",
        "Writing that antibiotic resistance is caused by the drug creating new mutations; the drug selects bacteria that already carry resistance."
      ],
      "wassceExamTips": [
        "Paper 1 (objective) will test half-life fractions; work out how many halvings the given fraction means before multiplying by 5700 years.",
        "In Paper 2 (structured), a natural-selection answer earns method marks for the four links: variation, selective agent, differential survival, change over generations.",
        "Paper 3 (alternative practical) may give a moth or beetle frequency table; state the trend as a change in percentage of the form, not as individuals adapting.",
        "When asked for evidence, name it and then say what it proves, for example homologous limbs prove common ancestry; the bare word alone scores nothing."
      ],
      "summaryChecklist": [
        "Can I list fossil, anatomical, embryological and biochemical evidence and say what each proves?",
        "Can I date a fossil from a remaining fraction using the carbon-14 half-life of 5700 years?",
        "Can I explain natural selection with variation, a selective agent and change across generations?",
        "Can I describe how reproductive isolation leads to a new species?",
        "Can I use antibiotic and insecticide resistance as modern observed evolution?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-evolution-1",
        "title": "Dating a Fossil by Carbon-14 Half-Life",
        "problem": "A charred seed from an ancient settlement contains only 25 percent of the carbon-14 it had when the plant died. Taking the half-life of carbon-14 as 5700 years, estimate how long ago the plant died.",
        "stepByStepSolution": [
          "Step 1 (M1): Recall that the fraction remaining after n half-lives is (1/2) raised to the power n.",
          "Step 2 (M1): Set the remaining fraction equal to the powers: 25 percent = 1/4 = (1/2) x (1/2), which is two half-lives.",
          "Step 3 (M1): Multiply the number of half-lives by the half-life period, age = 2 x 5700 years.",
          "Step 4 (A1): The plant died about 11400 years ago."
        ],
        "keyTakeaway": "Count the halvings from the remaining fraction, then multiply by the 5700-year half-life to get the age."
      },
      {
        "id": "ex-bio-evolution-2",
        "title": "Measuring a Shift in a Population by Selection",
        "problem": "In year one, 40 of 200 snails in a pond had a banded shell. In year three, after bird predation on unbanded snails, 90 of 300 snails were banded. By how many percentage points did the frequency of banded snails rise?",
        "stepByStepSolution": [
          "Step 1 (M1): Year one frequency = 40 / 200 = 0.20, that is 20 percent banded.",
          "Step 2 (M1): Year three frequency = 90 / 300 = 0.30, that is 30 percent banded.",
          "Step 3 (M1): The change = 30 percent - 20 percent.",
          "Step 4 (A1): The frequency of the banded form rose by 10 percentage points, from 20 to 30 percent."
        ],
        "keyTakeaway": "Selection is shown as a change in the percentage of a form in the population, so convert each count to a fraction before comparing."
      }
    ],
    "quiz": {
      "id": "quiz-bio-evolution",
      "topicId": "shs3-bio-t2-evolution-evidence-mechanisms",
      "title": "Evolution Evidence and Mechanisms Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-evolution-1",
          "quizId": "quiz-bio-evolution",
          "questionText": "The forelimb of a bat and the arm of a human share the same bone pattern though used differently. These organs are described as",
          "optionA": "analogous, showing convergent evolution",
          "optionB": "homologous, showing common ancestry",
          "optionC": "vestigial, showing loss of function",
          "optionD": "relics, showing mutation",
          "correctOption": "B",
          "subConcept": "Comparative anatomy",
          "explanation": "Same structure with different function means homologous organs, which point to descent from a shared ancestor. Analogous organs share function but not structure.",
          "remediationTip": "Draw a homologous set and an analogous set and write one sentence on what each proves."
        },
        {
          "id": "q-bio-evolution-2",
          "quizId": "quiz-bio-evolution",
          "questionText": "A bone sample retains one eighth of its original carbon-14. With a half-life of 5700 years, its age is about",
          "optionA": "5700 years",
          "optionB": "11400 years",
          "optionC": "2850 years",
          "optionD": "17100 years",
          "correctOption": "D",
          "subConcept": "Fossil dating",
          "explanation": "One eighth equals three halvings, since (1/2) x (1/2) x (1/2) = 1/8. Three half-lives at 5700 years each give 17100 years.",
          "remediationTip": "List the fractions one half, one quarter, one eighth and count the half-lives before multiplying."
        },
        {
          "id": "q-bio-evolution-3",
          "quizId": "quiz-bio-evolution",
          "questionText": "Which statement best captures Darwin's mechanism of evolution by natural selection?",
          "optionA": "Individuals best fitted to the environment survive and breed more, shifting the population over generations",
          "optionB": "Organisms change their bodies to meet a need and pass the change to offspring",
          "optionC": "All offspring are identical so only chance decides survival",
          "optionD": "Species stay fixed and new kinds appear only by sudden magic",
          "correctOption": "A",
          "subConcept": "Natural selection",
          "explanation": "Selection acts on existing heritable variation; the better-fitted leave more offspring and the population changes. Option B is the discredited use-and-disuse idea.",
          "remediationTip": "Contrast Darwin with Lamarck in a two-row table to fix the difference."
        },
        {
          "id": "q-bio-evolution-4",
          "quizId": "quiz-bio-evolution",
          "questionText": "Two populations of a bird are separated by a risen ridge and after many generations can no longer interbreed. The formation of new species here required",
          "optionA": "rapid mutation in one generation",
          "optionB": "deliberate effort by the birds to change",
          "optionC": "reproductive isolation between the groups",
          "optionD": "identical environments on both sides",
          "correctOption": "C",
          "subConcept": "Speciation",
          "explanation": "Speciation needs a barrier that stops gene exchange; the ridge gives geographic isolation that later becomes a reproductive barrier. Identical environments would not drive divergence.",
          "remediationTip": "Sketch the barrier, then write how isolation plus different selection splits the gene pools."
        },
        {
          "id": "q-bio-evolution-5",
          "quizId": "quiz-bio-evolution",
          "questionText": "Repeating one insecticide on a mosquito population for years increasingly fails because",
          "optionA": "the chemical weakens the mosquitoes",
          "optionB": "mosquitoes learn to avoid the spray",
          "optionC": "mosquitoes choose to become resistant",
          "optionD": "the insecticide causes new useful mutations each season",
          "correctOption": "B",
          "subConcept": "Observed evolution",
          "explanation": "A few mosquitoes already carry an allele that breaks down the chemical; they survive spraying and breed, so resistance becomes common. The spray selects, it does not create, resistance.",
          "remediationTip": "Write the words variation, selection and inheritance and place them on a resistance diagram."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t2-agriculture-crops-livestock-pests",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 10,
    "title": "Crop Husbandry, Animal Farming, Soils and Pest Control",
    "description": "crop selection and rotation, land preparation planting spacing and weeding, fertilizer and irrigation practice, harvesting storage and processing losses, livestock breeds feeding and housing, poultry and fish farming, soil types profile and conservation, pests diseases and weeds with integrated control, agrochemical safety and residue control, extension services and farmer cooperatives",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Crop husbandry is the whole care of a field crop from choosing the seed to storing the harvest, and each step protects the yield.\n• Crop rotation alternates different crops, for example maize then a legume such as cowpea, so the soil is not drained of one nutrient and nitrogen is restored.\n• Legumes such as soya, groundnut and cowpea host Rhizobium bacteria in root nodules that fix atmospheric nitrogen into the soil.\n• Land preparation, clearing, stumping and ridging, creates a fine tilth, buries weeds and gives good seed-to-soil contact.\n• Correct spacing and plant population per hectare reduce competition for light, water and nutrients and raise the harvest per unit area.\n• Manure adds organic matter and improves soil structure; inorganic fertilizer supplies a known, quick nutrient but must be measured.\n• Fertilizer labels give the N-P-K percentage, so the mass needed for a target nitrogen dose is dose divided by the fraction of nitrogen.\n• Irrigation in the dry season, by can, sprinkler or drip, lifts yields near Tamale and the Volta scheme, but waterlogging and salinity must be avoided.\n• Harvesting at the right ripeness, then drying and proper storage in a cool dry place, cuts losses to moulds, weevils and rodents.\n• Soil types are sandy, loamy and clay; loam is the best all-round farming soil, holding water yet draining freely.\n• A soil profile shows horizon A topsoil, horizon B subsoil and horizon C parent rock; topsoil holds most humus and life.\n• Soil conservation uses cover crops, mulching, terracing, contour ploughing and windbreaks to stop erosion by water and wind.\n• Livestock care covers breed choice, balanced feeding, clean housing, water, and vaccination against disease.\n• Poultry needs balanced mash, clean water, deep litter and vaccination against Newcastle disease; fish farming in ponds feeds tilapia and catfish on supplementary feed.\n• Integrated pest management combines cultural, biological and careful chemical control, spraying only when needed and observing the residue period before harvest.\n• Agrochemical safety means protective clothing, correct dilution, keeping chemicals away from children, and never storing pesticides near food.\n• Ghana's extension officers and farmer cooperatives share improved seed, training and market access.",
    "detailedNotes": {
      "overview": "This topic treats the farm as a working biological system. You will plan crop production from selection and rotation through land preparation, spacing, fertilizer and irrigation to harvesting and storage, then manage soils, livestock, poultry and fish. The unit closes with pests, diseases and weeds under integrated control, safe handling of agrochemicals, and the role of extension services and cooperatives in raising the yield of a Ghanaian smallholder.",
      "introduction": "Approach each step as cause and effect. Say what the practice is, why it raises yield or protects the crop, and what goes wrong if it is skipped. When a calculation appears, for fertilizer mass or yield per hectare, write the ratio first, convert the units once, and keep the area conversion of 10000 square metres in a hectare ready. For integrated pest management always list several methods working together rather than one spray; the word integrated is itself worth a mark.",
      "realWorldContext": "Around Ejura the classic maize and cowpea rotation restores nitrogen while the cowpea leaves fetch a good price at the market, and the same fields are ridged before the first rains so the fine tilth suits the small maize seed. Rice farmers in the Kpong irrigation scheme meter water so the plots never go to waste, while dry-season vegetable growers near Tamale drip-irrigate tomatoes to catch the off-peak market. Poultry keepers at Ahwiaase vaccinate against Newcastle disease every season, and catfish ponds at Manu supply the chop-bar trade, showing crop and animal husbandry side by side.",
      "objectives": [
        "Explain the principles of crop selection, rotation, land preparation and spacing",
        "Describe fertilizer and irrigation practice and calculate a fertilizer requirement from a label",
        "Identify soil types, read a soil profile and outline soil conservation methods",
        "Explain livestock, poultry and fish husbandry and the essentials of integrated pest management"
      ],
      "sections": [
        {
          "title": "From Seed to Harvest: Crop Husbandry",
          "content": "Good husbandry starts with the right crop for the soil, the rainfall and the market, and with clean, improved seed of a suitable variety. Crop rotation then keeps the land productive: growing the same crop season after season, called monocropping, drains one set of nutrients and hosts a buildup of the pests and diseases that specialize on that crop. By alternating a feeder such as maize with a legume such as cowpea or soya, the farmer restores nitrogen naturally, because Rhizobium bacteria living in the root nodules of legumes fix atmospheric nitrogen into compounds the next crop can use. Land preparation, clearing, stumping, and making ridges or flats, produces a fine tilth, buries weed growth and gives seed good contact with moist soil. At planting, correct spacing sets the right number of plants per hectare; too crowded and the plants compete for light and nutrients and yield falls per plant, too wide and the soil is wasted. Weeding removes the competing grasses before they rob water and light. Fertilizer tops up nutrients; manure is rich in organic matter and improves soil structure, while bagged fertilizer gives a measured dose. Irrigation in the dry season, by can, sprinkler or slow drip, lifts both yield and quality, provided the water drains so the soil does not waterlog or turn salty.",
          "bulletPoints": [
            "Rotation alternates crops to balance nutrients; legumes fix nitrogen through Rhizobium nodules.",
            "Monocropping drains one nutrient and builds crop-specific pests and diseases.",
            "Land preparation gives a fine tilth, buries weeds and improves seed-to-soil contact.",
            "Correct spacing sets the plant population and cuts competition for light and nutrients.",
            "Irrigation raises dry-season yield but must avoid waterlogging and salinity."
          ],
          "keyTakeaway": "Each husbandry step exists to give the crop the light, water, nutrients and freedom from competition it needs to fill a full harvest.",
          "realWorldExample": "The maize-then-cowpea cycle at Ejura both feeds the soil's nitrogen bank and gives the family a second marketable crop from the same plot."
        },
        {
          "title": "Soils and Their Conservation",
          "content": "Soil is the farmer's most valuable asset, and understanding its texture and layers guides every decision. On the basis of particle size the three main types are sandy soil, which drains very fast and is poor at holding water and nutrients; clayey soil, whose fine particles hold water and nutrients but drain badly and become sticky; and loamy soil, a balanced mixture that is the best farming soil because it holds moisture yet drains freely and is rich in humus. Cut down through a soil and you see the profile, a set of horizons. Horizon A, the topsoil, is darkest, richest in humus and teeming with roots and organisms; horizon B, the subsoil, is where leached minerals collect; horizon C is the weathered parent rock from which the soil formed, and beneath it may lie bedrock. Most of the fertility lives in the thin topsoil, so conservation is urgent. Erosion by rushing water and by wind strips this topsoil. The farmer fights back with cover crops and mulch to shield the surface, terracing and contour ploughing on slopes to slow runoff, windbreaks of tall trees to break the wind, and strip cropping and maintained vegetation to anchor the soil. Overgrazing, bush burning and cutting the forest on slopes remove that cover and speed erosion, which is exactly the gully problem seen on cultivated hillsides.",
          "bulletPoints": [
            "Sandy soil drains fast and holds little; clay holds much but drains poorly; loam is the ideal balance.",
            "Horizon A topsoil is dark, humus-rich and the most fertile layer.",
            "Horizon B is the subsoil of leached minerals and horizon C is the parent rock.",
            "Cover crops, mulch, terracing, contour ploughing and windbreaks all slow erosion.",
            "Overgrazing, bush burning and deforestation remove cover and accelerate soil loss."
          ],
          "keyTakeaway": "Farming is management of topsoil; keep it covered, keep it anchored and keep its nutrients balanced.",
          "realWorldExample": "Terracing and contour ridges on the slopes near the Bono region farms hold back the rainwater that would otherwise carve the gullies seen on bare cultivated hillsides."
        },
        {
          "title": "Livestock, Fish and Integrated Pest Control",
          "content": "Animal husbandry raises livestock for meat, milk, eggs and draft power. Success rests on choosing a hardy or improved breed suited to the local climate, feeding a balanced ration of energy, protein, minerals and vitamins, providing clean water, and housing animals in a dry, ventilated structure away from the wind and damp that spread disease. Regular vaccination, deworming and proper waste disposal keep herds healthy. Poultry farming demands clean deep litter, balanced mash, constant water and a strict vaccination calendar, especially against Newcastle disease, which can wipe out a flock in days. Fish farming stocks earthen ponds with tilapia or catfish, manages feeding and keeps water oxygen and stocking density in balance. Weeds, pests and crop diseases cut yields at every stage, but integrated pest management combines several controls rather than depending on one spray: cultural methods such as rotation, clean weeding and hand removal, biological control using natural enemies such as predatory beetles or the bacterium used against caterpillars, resistant varieties, and careful chemical control with approved pesticides only when the damage crosses the threshold. Agrochemicals are poisons; safety means protective clothing, correct dilution, spraying in calm weather, storing chemicals locked away from food and children, observing the residue period before harvest, and burning empty containers away from crops. In Ghana, extension officers bring improved methods to farmers, and cooperatives pool money for seed, fertilizer and machines and give members collective bargaining power at market.",
          "bulletPoints": [
            "Livestock care needs the right breed, balanced feed, water, dry housing and vaccination.",
            "Poultry depend on clean litter, balanced mash and vaccination against Newcastle disease.",
            "Fish ponds are stocked with tilapia or catfish and managed for feed and oxygen.",
            "Integrated pest control is cultural plus biological plus careful chemical, not spraying alone.",
            "Agrochemical safety means protective gear, correct dilution, secure storage and the residue period before harvest."
          ],
          "keyTakeaway": "Healthy animals and healthy crops come from meeting each need in turn, and pests are best held down by several methods working together.",
          "realWorldExample": "Catfish ponds at Manu and the surrounding poultry houses show the same principle on land and water: feed, clean water, space and vaccination decide the harvest."
        }
      ],
      "commonMistakes": [
        "Calling crop rotation the same as mixed cropping; rotation changes the crop across seasons on the same land, mixed cropping grows two crops together at once.",
        "Saying legumes get nitrogen from fertilizer; they gain it from Rhizobium bacteria in root nodules fixing atmospheric nitrogen.",
        "Reporting a fertilizer mass without converting the percentage to a fraction, so a 46 percent nitrogen bag is wrongly treated as pure nitrogen.",
        "Naming integrated pest management as simply spraying pesticide, missing the cultural and biological components that the word integrated demands."
      ],
      "wassceExamTips": [
        "Paper 1 (objective) loves the nitrogen-fixing fact; the correct answer is the Rhizobium bacteria in the nodule, not the root hairs or the soil itself.",
        "In Paper 2 (structured), give the reason behind each husbandry step, for example ridging improves drainage, because a bare list of steps earns fewer marks than steps plus purpose.",
        "When asked for integrated pest management, use at least three headings, cultural, biological and chemical, so the examiner can tick each component.",
        "For a fertilizer or yield calculation, write the ratio and the unit conversion first; method marks are given even if the final number is slightly off."
      ],
      "summaryChecklist": [
        "Can I explain crop rotation, the role of legume nitrogen fixation, spacing and weeding?",
        "Can I compare sandy, clay and loam soils and read the horizons of a soil profile?",
        "Can I calculate a fertilizer dose or a per-hectare yield from field data?",
        "Can I outline livestock, poultry and fish husbandry and their key needs?",
        "Can I describe integrated pest management and safe handling of agrochemicals?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-agriculture-1",
        "title": "Converting a Small Plot Harvest to Yield per Hectare",
        "problem": "A farmer harvests 3 kilograms of dry maize from a measuring plot of 5 metres by 4 metres. What is the yield per hectare in kilograms and in tonnes? (One hectare is 10000 square metres.)",
        "stepByStepSolution": [
          "Step 1 (M1): Find the plot area, 5 m x 4 m = 20 square metres.",
          "Step 2 (M1): Scale the harvest to one hectare by multiplying by 10000 / 20 = 500.",
          "Step 3 (M1): Yield per hectare = 3 kg x 500 = 1500 kg.",
          "Step 4 (A1): In tonnes, 1500 kg / 1000 = 1.5 tonnes per hectare."
        ],
        "keyTakeaway": "Multiply the plot yield by the number of plots that fit in a hectare, then divide by 1000 to change kilograms to tonnes."
      },
      {
        "id": "ex-bio-agriculture-2",
        "title": "How Much Urea for a Nitrogen Prescription",
        "problem": "A fertilizer recommendation is 80 kilograms of actual nitrogen per hectare on a 2.5-hectare maize field. Urea contains 46 percent nitrogen. How many kilograms of urea must the farmer apply?",
        "stepByStepSolution": [
          "Step 1 (M1): Total nitrogen needed = 80 kg/ha x 2.5 ha = 200 kg of nitrogen.",
          "Step 2 (M1): Urea is only 0.46 nitrogen, so mass of urea = total nitrogen / 0.46.",
          "Step 3 (M1): Substitute, mass of urea = 200 / 0.46 kg.",
          "Step 4 (A1): The farmer applies about 435 kg of urea, since 200 / 0.46 = 434.8 kg."
        ],
        "keyTakeaway": "Find the actual nutrient first, then divide by the decimal fraction on the label to get the mass of fertilizer."
      }
    ],
    "quiz": {
      "id": "quiz-bio-agriculture",
      "topicId": "shs3-bio-t2-agriculture-crops-livestock-pests",
      "title": "Crop and Animal Husbandry Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-agriculture-1",
          "quizId": "quiz-bio-agriculture",
          "questionText": "Growing cowpea after maize in the same field restores nitrogen mainly because",
          "optionA": "cowpea leaves shade the soil",
          "optionB": "cowpea has a very deep tap root",
          "optionC": "Rhizobium bacteria in its root nodules fix atmospheric nitrogen",
          "optionD": "cowpea needs no nitrogen to grow",
          "correctOption": "C",
          "subConcept": "Crop rotation",
          "explanation": "Legumes such as cowpea host Rhizobium bacteria that convert nitrogen gas into usable compounds, enriching the soil for the next crop. Shade and root depth do not add nitrogen.",
          "remediationTip": "Draw a nodule and label the bacteria inside it as the nitrogen-fixing part."
        },
        {
          "id": "q-bio-agriculture-2",
          "quizId": "quiz-bio-agriculture",
          "questionText": "Which soil type is generally the best for crop farming?",
          "optionA": "Loam, which holds moisture yet drains freely and is rich in humus",
          "optionB": "Pure sand, which drains very fast and dries out",
          "optionC": "Heavy clay, which stays waterlogged and sticky",
          "optionD": "Bare gravel subsoil with no organic matter",
          "correctOption": "A",
          "subConcept": "Soil types",
          "explanation": "Loam balances water-holding, drainage and nutrients because it mixes sand, clay and humus. Sand drains too fast and clay waterlogs, both limiting root growth.",
          "remediationTip": "Rank the three soils by how well they hold water yet still drain."
        },
        {
          "id": "q-bio-agriculture-3",
          "quizId": "quiz-bio-agriculture",
          "questionText": "Integrated pest management is best described as control that",
          "optionA": "relies only on the strongest available pesticide",
          "optionB": "removes all insects from the field",
          "optionC": "acts only after the whole crop is already lost",
          "optionD": "combines cultural, biological and carefully limited chemical methods",
          "correctOption": "D",
          "subConcept": "Pest control",
          "explanation": "Integrated means several tactics together: rotation and weeding, natural enemies, resistant varieties, and pesticides only at threshold. A single spray is not integrated.",
          "remediationTip": "List one cultural, one biological and one chemical measure for one crop."
        },
        {
          "id": "q-bio-agriculture-4",
          "quizId": "quiz-bio-agriculture",
          "questionText": "A poultry keeper loses many birds within days to sudden sickness. The single best preventive practice is",
          "optionA": "feeding extra maize",
          "optionB": "following a Newcastle disease vaccination schedule",
          "optionC": "giving more clean drinking water only",
          "optionD": "keeping the birds in deeper darkness",
          "correctOption": "B",
          "subConcept": "Livestock health",
          "explanation": "Newcastle disease sweeps through unvaccinated flocks; a timely vaccination programme is the recognized control. Water, feed and light help general health but do not stop the virus.",
          "remediationTip": "Write the words clean litter, balanced mash, water and vaccination as the four poultry pillars."
        },
        {
          "id": "q-bio-agriculture-5",
          "quizId": "quiz-bio-agriculture",
          "questionText": "Which practice most directly reduces loss of topsoil by water on a hill farm?",
          "optionA": "ploughing straight down the slope",
          "optionB": "burning the bush before planting",
          "optionC": "contour ridging and maintaining cover crops",
          "optionD": "overgrazing to keep grass very short",
          "correctOption": "C",
          "subConcept": "Soil conservation",
          "explanation": "Working across the slope and keeping roots and mulch on the surface slow runoff and anchor the soil. Down-slope ploughing, burning and overgrazing all open the soil to erosion.",
          "remediationTip": "Sketch contour lines versus down-slope furrows and mark where water speeds up."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t3-health-disease-and-applied-biology",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 4,
    "title": "Health, Disease, Micro-organisms and Applied Biology",
    "description": "Health as complete well-being and the difference between communicable and non-communicable disease; pathogens and vectors, malaria, cholera, tuberculosis and HIV/AIDS with their control, bilharzia, sleeping sickness, onchocerciasis and skin infections; the barriers, phagocytes, antibodies and types of immunity behind the Ghanaian Expanded Programme on Immunisation; personal and community hygiene and safe drinking water; and the applied biology of bacteria, fungi and fermentation in food preservation, kenkey and gari production, dawadawa, biotechnology, agriculture and forestry in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Health, by the World Health Organisation definition used in every Ghanaian textbook, is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity; disease is a condition in which one or more systems fail to work normally.\n• Communicable or infectious diseases pass from one person or animal to another, from a reservoir or a vector, and they can run through a community as an epidemic; non-communicable diseases such as diabetes mellitus, hypertension, sickle cell disease, asthma, cancer and epilepsy are not passed on and usually run a long course.\n• Pathogens are grouped by kind: viruses such as HIV, measles, yellow fever and poliomyelitis, bacteria such as Vibrio cholerae and Mycobacterium tuberculosis, protoctists or protists such as Plasmodium and Trypanosoma, fungi such as the ringworm moulds and Candida, and the multicellular helminths, tapeworm, Ascaris, hookworm and the bilharzia worm.\n• A vector is a living carrier, usually an arthropod, that transmits a pathogen from host to host: the female Anopheles gambiae mosquito transmits malaria, Aedes transmits yellow fever, the tsetse fly Glossina transmits sleeping sickness, the blackfly Simulium transmits the river-blindness worm, and the housefly carries cholera bacteria from faeces to food on its feet and body.\n• Malaria is caused by four species of Plasmodium, chiefly P. falciparum, and only the female Anopheles bites and transmits it; sporozoites enter the blood, mature in the liver, then invade and burst the red blood cells in cycles that produce the classical attack of cold stage with shivering, hot stage with high temperature and sweating stage with relief, together with headache, vomiting, anaemia and an enlarged spleen, and severe falciparum malaria gives cerebral malaria, convulsions and death.\n• Malaria control attacks both sides of the chain, the parasite and the mosquito: insecticide-treated long-lasting nets hung over every sleeping person, indoor residual spraying of the eaves, draining and clearing stagnant water in gutters and used tyres, larviciding, quick diagnosis with a test and correct treatment with an artemisinin combination, and the avoidance of unfinished or repeated self-medication which breeds resistant parasites.\n• Cholera is an acute diarrhoea caused by Vibrio cholerae taken in with contaminated water or food, characterised by painless rice-water stools and vomiting, loss of water and salts, thirst, sunken eyes, cramp and death within hours from dehydration if untreated; management is rapid rehydration with oral rehydration salts or intravenous fluid, and control is safe treated water, boiling, adequate chlorine, handwashing with soap after toilet use and before preparing food, latrines, proper refuse disposal and washing of raw vegetables.\n• Tuberculosis is caused by Mycobacterium tuberculosis spread in droplets coughed into the air, giving a cough lasting more than eight days, chest pain, night sweating, weight loss and sometimes blood in the sputum; diagnosis is by sputum test and the chest image, treatment is the standard combination of isoniazid, rifampicin, pyrazinamide and ethambutol taken under observation directly, the DOTS strategy, and a full six to eight months because an interrupted course produces resistant bacilli; BCG given at birth protects children against the severe forms.\n• HIV is a virus that destroys the CD4 white blood cells that co-ordinate immunity, so the body loses its defence and the infected person develops acquired immune deficiency syndrome with opportunistic infections such as tuberculosis, persistent diarrhoea, pneumonia, wasting, candidiasis and skin rashes; it is transmitted by unprotected sexual intercourse, infected blood and its products, shared or unsterilised blades and needles used for piercing and scarification, and from an infected mother to the child during pregnancy, birth or breastfeeding.\n• HIV is not transmitted by the mosquito, by sharing a cup or a plate, by hugging, shaking hands, sharing a classroom, swimming in a pool or by sneezing, and these facts are examined to test whether a candidate can separate transmission from stigma; antiretroviral therapy does not cure but restores protection, reduces the viral load and prevents mother-to-child transmission.\n• Other Ghanaian communicable diseases worth their marks are bilharzia or schistosomiasis, whose larval stage leaves the freshwater snail and penetrates the skin of people who wade, bathe or wash clothes in the water, so control means avoiding contact with the water, snail control and treatment with praziquantel; hookworm and Ascaris spread from soil contaminated with faeces, and control is latrines, handwashing and wearing shoes; sleeping sickness follows the bite of the tsetse fly in the riverine forests of the north and west; onchocerciasis is controlled by mass treatment with ivermectin; typhoid and hepatitis are food and water diseases, and measles, whooping cough, polio and yellow fever are vaccine diseases.\n• The body's first line of defence is physical and chemical, unbroken skin, mucus and cilia in the air passages, tears and the washing action of urine, and the strong hydrochloric acid of the stomach; the second line is the non-specific white blood cells, phagocytes that engulf and digest bacteria and clotting and inflammation at a wound.\n• Specific immunity is the work of lymphocytes and antibodies: a foreign antigen stimulates certain white blood cells to manufacture antibodies that combine only with that antigen, and to leave memory cells that respond fast and strongly if the same antigen appears again years later.\n• Immunity is described in four ways, natural active after recovery from a disease, natural passive from the mother's antibodies passed across the placenta and in colostrum and breast milk, artificial active from a vaccine containing killed or weakened antigen which primes the memory cells, and artificial passive from a ready-made antitoxin or serum; vaccines give slow but long protection while serum acts at once but briefly.\n• The Ghanaian Expanded Programme on Immunisation gives BCG and the oral polio vaccine at birth, pentavalent, pneumococcal and rota vaccines at six, ten and fourteen weeks, measles at nine months and yellow fever at nine months, and children who are not fully recorded on the health card are the children who later present with measles in a district hospital.\n• Non-communicable disease is largely the disease of way of life: a diet high in salt, fat and refined sugar with too little fibre raises the risk of hypertension, diabetes and obesity; tobacco smoking causes chronic bronchitis, emphysema, lung and mouth cancer; prolonged heavy drinking damages the liver as cirrhosis and injures the brain; lack of exercise and stress contribute to high blood pressure; and sickle cell disease is inherited, so two carriers of the sickle trait are counselled before marriage because each pregnancy carries one chance in four of an affected child.\n• Personal hygiene is cleanliness of the body, bath and change of clothing, washing hands with soap at the critical times before eating and after the toilet, brushing teeth, keeping nails short, washing and cooking food well, covering coughs and sneezes, treating wounds and refusing to share a razor; community hygiene is the ordered removal of refuse and excreta, drainage that leaves no standing water, a latrine for every household, protected water supply, food-vendor hygiene at the roadside kiosk, and the slaughterhouse and market inspections of the local assembly.\n• Drinking-water treatment in Ghanaian practice is either at the plant by sedimentation, filtration and chlorination, or at the household point by boiling for a rolling minute, by adding a measured dose of household chlorine solution and leaving it half an hour, by using a safe covered storage vessel with a tap so hands never enter, and by buying only properly sealed and registered sachet water.\n• Useful micro-organisms are worked daily in Ghana: Rhizobium fixes nitrogen in legume nodules, Lactobacillus and yeast ferment the maize and cassava dough of kenkey and akpi and give the sour taste, Bacillus species ferment the locust bean into dawadawa, yeast respires anaerobically producing ethanol and carbon dioxide in palm wine and bread, and moulds ripen some foods, while spoilage organisms and the aflatoxin mould Aspergillus flavus on damp stored groundnut and maize are a serious health and market loss.\n• Food preservation works by stopping microbes from growing: solar drying of fish, cassava, mango and groundnut removes the water they need, smoking both dries and lays antiseptic phenolic compounds on fish at Elmina and Tema, salting and brining draw water out of microbial cells, sugaring and bottling of fruit, canning under heat and pressure, freezing at or below about minus 18 degrees Celsius, pasteurisation of milk at about 72 degrees Celsius for fifteen seconds then rapid cooling, and the careful use of approved chemical preservatives, while sealed clean packaging prevents recontamination.\n• Biotechnology is the use of living systems to make a product, from the age-old brewing, baking, kenkey and dawadawa fermentation to modern practice: tissue culture multiplies disease-free banana, plantain and oil palm in the laboratory, selective breeding and hybridisation improve maize, rice and poultry, the bacterium Bacillus thuringiensis is used as a biological insecticide, sterile insect technique and the weevil Neochetina are used against water hyacinth, and recombinant organisms produce insulin, vaccines and enzymes, while diagnostic kits for HIV, malaria and cholera rest on the same biology.\n• In agriculture and forestry applied biology is the whole business, soil fertility from compost, manure, crop rotation with legumes, cover crops and mulching, integrated pest management that scouts, uses natural enemies, and sprays only with protected clothing, correct knapsack calibration and after observing the pre-harvest interval printed on the label, the control of cocoa swollen shoot virus by removing infected trees and by planting resistant varieties, blackpod control by pruning and fungicide, and the silvicultural care of teak and cedrela plantations, enrichment planting, forest boundaries and the ban on galamsey, which poisons the rivers that supply drinking water.\n• Numbers used in disease records: new cases in a period divided by the population at risk gives the incidence as a percentage, the number ill divided by the number exposed in an outbreak gives the attack rate, and the number cured divided by the number registered gives the treatment success rate; a community of 1 800 people with 126 new confirmed malaria cases in one month has an incidence of 7.0 percent, and 63 cases in the same population after a net campaign is 3.5 percent, a reduction of half.",
    "detailedNotes": {
      "overview": "This closing topic of the SHS 3 Biology course turns the whole syllabus toward human welfare. You will define health and disease, sort diseases into communicable and non-communicable, and describe the pathogens and vectors behind the great Ghanaian burdens of malaria, cholera, tuberculosis and HIV/AIDS, together with bilharzia, the soil-transmitted worms, sleeping sickness and onchocerciasis. You will then explain how the body resists infection through its barriers, phagocytes and antibodies, how those mechanisms are used in the vaccines given free under the Expanded Programme on Immunisation, and how hygiene, safe water and refuse and sewage management keep a community well. The last part is applied biology, the deliberate use of bacteria, fungi and plants in fermentation, food preservation, biotechnology, agriculture and forestry, which is where Paper 2 essay and Paper 3 alternative-practical questions about local practice are set.",
      "introduction": "Work with records and with the household. Take the numbers from your clinic or a district report and compute the incidence of malaria and the attack rate of an outbreak yourself, then test your own knowledge with a poster exercise: three columns of transmission, prevention and treatment for four diseases. Practise the aseptate handling and staining skills of the practical by preparing a culture from a hand washed with soap and a hand that was not, and revise the fermentation demonstrations of kenkey souring, bread dough rising and the drying of fish.",
      "realWorldContext": "In a compound at Nungua every household hangs a long-lasting insecticide-treated net over each sleeper, because the female Anopheles bites indoors through the night, and the same compound boils drinking water in the harmattan when the pipe runs dry. At Elmina the women who smoke sardinella over a charcoal oven are preserving fish by drying and by the antiseptic compounds of smoke, yet where the fish is dried on the roadside dust settles the product, and a market woman at Kaneshie who sells kenkey depends on the souring action of Lactobacillus in the boiled maize dough. A community near Bawku whose river has been dug over by galamsey operators finds the treatment plant at Bolgatanga unable to filter the turbid water, and the same year the health post records more diarrhoea among children. In a district hospital at Sunyani a tuberculosis patient registered on the direct observation strategy is watched swallowing every dose for six months, and the sister explains to the class that stopping early makes drug-resistant bacilli.",
      "objectives": [
        "Define health and disease and classify given diseases as communicable or non-communicable with the reason",
        "Name the pathogen, the vector or mode of transmission, the symptoms and two control measures for malaria, cholera, tuberculosis, HIV/AIDS and bilharzia",
        "Describe the non-specific and specific defence mechanisms of the body and distinguish the four kinds of immunity",
        "Explain the principle and the schedule of vaccination in Ghana and the hygiene measures that give safe water and a clean community",
        "Discuss the roles of bacteria, fungi and plants in fermentation, food preservation, biotechnology, agriculture and forestry in Ghana"
      ],
      "sections": [
        {
          "title": "Health, Disease, Pathogens and Vectors",
          "content": "Health is the positive state of complete physical, mental and social well-being, so a person who carries an undiagnosed infection or lives in constant fear is not healthy even though he walks to school. Disease is a deviation from that state in which a structure or system fails to work normally, and infectious disease is caused by a pathogen that reaches and multiplies in the body. Chain of infection is the organising idea of the whole unit: there must be a reservoir or source in which the parasite lives, a portal of exit, a mode of transmission, a portal of entry and a susceptible host, and control works by breaking any one link. Sources include a sick person, a person who carries the organism without symptoms, and animals; the portal of exit for tuberculosis is the respiratory tract, for cholera the alimentary canal, for malaria the blood. Transmission is direct by contact, droplets, sexual intercourse or from mother to child, or indirect through a vehicle such as water, food, hands, cups and blades, or through a vector. Vectors are of two kinds, mechanical carriers such as the housefly that merely foots bacteria from refuse to food, and biological vectors in which the parasite must pass part of its life cycle, the Anopheles for Plasmodium and the tsetse fly for Trypanosoma. Pathogen kind decides the language of the answer: a virus is acellular, needs a living host cell to multiply, and is not touched by antibiotics; a bacterium is a single prokaryotic cell that can be grown on culture medium and is treated with antibiotics; a protoctist such as Plasmodium or Trypanosoma is a unicellular eukaryote and is treated with a specific drug such as an artemisinin combination or a trypanocidal medicine; a fungus causes skin, nail and internal infections and answers to antifungal drugs; and helminths are the worms, which require anthelmintics and, above all, sanitation. A candidate who names the pathogen group correctly almost always earns the mark that follows.",
          "bulletPoints": [
            "Health is complete physical, mental and social well-being, not merely the absence of illness.",
            "Chain of infection: source, portal of exit, mode of transmission, portal of entry, susceptible host.",
            "Communicable diseases spread; non-communicable diseases such as diabetes, hypertension, sickle cell disease and cancer do not.",
            "Viruses, bacteria, protoctists, fungi and helminths each need a different kind of drug or control.",
            "Mechanical vectors carry pathogens on the body; biological vectors are required for part of the parasite life cycle."
          ],
          "keyTakeaway": "Break any link of the chain of infection and the disease stops spreading, which is why every control answer must be tied to a link.",
          "realWorldExample": "When a kiosk at Kaneshie keeps its drinking water in an uncovered basin and serves it with the same cup, the vehicle link of the cholera chain is wide open, and the assembly officer closes it by demanding a covered vessel with a tap."
        },
        {
          "title": "The Great Communicable Diseases of Ghana",
          "content": "Malaria remains the leading cause of hospital attendance in Ghana and the commonest subject of a WASSCE disease question. The parasite is a Plasmodium, in man one of four species, of which P. falciparum is the most dangerous; the female Anopheles picks up gametocytes with a blood meal, the cycle completes in the mosquito wall and the insect injects sporozoites into the next person it bites. The sporozoites travel to the liver and multiply there without symptoms, then merozoites are released and invade red blood cells, and the periodic bursting of those cells gives the paroxysm of cold shivering, then heat, then sweating, with headache, vomiting, anaemia from destroyed red cells and an enlarged spleen. Falciparum malaria blocks small vessels in the brain and produces cerebral malaria with convulsions, coma and death, and in a child it may show as severe anaemia. Control is two-sided, the parasite and the vector, and the vector side is where the community acts: insecticide-treated nets over every sleeper, indoor spraying of walls and eaves in the high districts, clearance of weeds and drainage of standing water in gutters, blocked gutters and used tyres around the house, and larviciding of ponds that cannot be drained, since the mosquito breeds only in clean standing fresh water and cannot fly far. The parasite side is early testing and a full correctly dosed course of an artemisinin combination, the use of prophylaxis for pregnant women under the routine intermittent preventive treatment with sulfadoxine-pyrimethamine given at antenatal visits, and the refusal to top up or share medicines, because partial treatment selects resistant parasites. Cholera returns to Ghana in the rainy season and in dry-season water shortages, caused by Vibrio cholerae swallowed in contaminated water, raw fish, unwashed vegetables or food handled by a carrier, and the disease is a medical emergency because the rice-water stools drain water and salts so fast that a patient can die of dehydration within hours; treatment is immediate and copious rehydration, oral rehydration salts by mouth for the moderate case and intravenous Ringer lactate for the collapsed one, and control is a treated and chlorinated water supply, household boiling, handwashing with soap at the critical times, use and emptying of latrines, safe refuse disposal, and the washing and cooking of food. Tuberculosis still kills in Ghana because diagnosis is late. Mycobacterium tuberculosis, spread in droplet nuclei from a coughing, untreated person, eats slowly into the lung, giving a cough of more than eight days, chest pain, night sweats, fever, loss of weight and sometimes blood-stained sputum, and it may also attack the spine, kidneys and lymph glands. Diagnosis is by sputum examination and the chest radiograph, treatment by the standard four-drug regimen for two months and two drugs for four more, taken under direct observation as the DOTS strategy, since a patient who stops when he feels better relapses and infects others with resistant bacilli; BCG at birth protects children against meningitic and miliary forms, and covering coughs, ventilation and early treatment cut transmission. HIV and acquired immune deficiency syndrome are examined for their mechanism and their myths. The virus is an RNA virus that reverse-transcribes into DNA and inserts it into the lymphocyte, and it destroys the CD4 helper cells that organise immunity, so the sufferer loses the power to resist organisms that a healthy person throws off, and the syndrome appears as persistent fever and diarrhoea, wasting, oral thrush and pneumonia, tuberculosis, shingles and certain tumours. Transmission is by unprotected sexual intercourse with an infected partner, by infected blood and blood products, by reused needles and blades in piercing, scarification, barbering and illegal drug use, and by an infected mother to the child in the uterus, at birth or through breast milk. It is not spread by mosquitoes, sharing a cup, hugging, holding hands, swimming, coughing or the classroom of a positive child, and correct treatment with antiretroviral drugs lowers the viral load, restores immunity, keeps the infected person alive and working and prevents most mother-to-child transmission, while prevention rests on abstinence or delay of sexual activity, faithfulness to one uninfected partner, correct use of condoms, testing of blood, sterile single-use blades and needles, and the elimination of mother-to-child transmission services. Bilharzia deserves special attention as an environmental disease, for the eggs of Schistosoma passed in urine or faeces hatch in water, the larva infects a specific freshwater snail, multiplies, leaves as a forked cercaria and penetrates the skin of anyone who wades, bathes, washes clothes or rice in that water; the remedy is to avoid contact with the water, use a latrine so eggs never reach the stream, snail control, and mass or case treatment with praziquantel, while the hookworm and Ascaris of the soil are answered by latrines, handwashing, and shoes. Sleeping sickness follows the tsetse fly of the riverine forests and lake shores of the Volta and the north, onchocerciasis the blackfly breeding in the fast aerated water of the rapids of the Tano, and both are controlled by case finding, treatment and the destruction of the breeding site.",
          "bulletPoints": [
            "Malaria: Plasmodium, female Anopheles, liver then red blood cells, periodic fever, anaemia, cerebral form; nets, spraying, drainage, prompt correct treatment.",
            "Cholera: Vibrio cholerae in contaminated water and food, rice-water stools, dehydration; rehydration plus safe water, handwashing and latrines.",
            "Tuberculosis: Mycobacterium in droplets, chronic cough, night sweats, weight loss; DOTS with four drugs and BCG at birth.",
            "HIV: destroys CD4 lymphocytes; four routes of transmission; not spread by mosquitoes, food sharing or greeting; antiretroviral therapy and prevention.",
            "Bilharzia and the soil worms: snail and soil stages, skin and mouth entry, controlled by latrines, avoiding contaminated water, and drugs."
          ],
          "keyTakeaway": "For each disease give pathogen, vector or vehicle, one symptom that identifies it, and a control measure aimed at the link it breaks.",
          "realWorldExample": "A mother at a health post in Bole brings a child with fever and a swollen belly in the rainy season; the worker tests for malaria, advises on the net that was folded under the mattress, and clears the blocked gutter behind the house where the Anopheles larvae were rising."
        },
        {
          "title": "Body Defences, Immunity and Vaccination",
          "content": "The body defends itself in layers. The first line is physical and chemical barrier: unbroken skin keeps almost every pathogen out, and a cut, a burn or a surgical wound destroys that barrier, which is why tetanus spores from soil enter through a puncture wound on a bare foot; the mucous membrane of the nose, windpipe and gut traps organisms in mucus, the cilia sweep the trapped dust and germs upward to be swallowed or coughed out, tears and saliva wash surfaces and contain a lytic enzyme that breaks bacterial walls, urine flushes the urethra, and the very strong hydrochloric acid of the gastric juice kills most of what is swallowed with food. The second line is non-specific and internal: a damaged vessel constricts and then leaks fluid, giving the heat, swelling, redness and pain of inflammation, which brings phagocytes, the white blood cells that crawl out of the capillary, surround and digest bacteria and debris, and clotting seals the wound so that the invader cannot be carried in the open stream. Fever itself is a defence, because a raised temperature slows the reproduction of many pathogens. The third line is specific, and it is the work of lymphocytes. Any foreign molecule, an antigen, on the surface of a pathogen stimulates certain lymphocytes, and those cells multiply and manufacture antibodies, proteins of exact shape that combine only with that antigen, neutralise it, clump the bacteria together so phagocytes can eat them, and mark them for destruction. Some of the stimulated lymphocytes survive as memory cells, and if the same antigen ever appears again, years later, the memory cells respond within hours with a far larger output of antibody, so the person either does not notice the infection at all or passes through it mildly. This is why a person who has had measles once does not have it again. Immunity is therefore described in four categories: natural active immunity after recovering from a disease; natural passive immunity in a newborn whose antibodies came across the placenta from the mother and in the colostrum and breast milk of the first days, protection that is immediate but fades in a few months; artificial active immunity from a vaccine, which contains killed or weakened pathogen or its toxin and stimulates memory without causing the disease, giving slow onset but lasting protection; and artificial passive immunity from a serum or antitoxin containing ready-made antibodies, used when the patient is already ill, acting at once but lasting only weeks. Vaccination under Ghana's Expanded Programme on Immunisation is the most successful public health measure in the country: BCG and the first oral polio dose at birth, pentavalent vaccine against diphtheria, whooping cough, tetanus, hepatitis B and Haemophilus influenzae type b, plus pneumococcal and rota vaccines at six, ten and fourteen weeks, measles at nine months and yellow fever at nine months, with the child's card as the record; the children who appear with measles in the district ward are almost always the ones whose card was never completed, and vaccination of a whole community also protects the frail by removing the circulation of the germ.",
          "bulletPoints": [
            "Barrier defences: skin, mucus and cilia, tears, saliva, urine, gastric acid.",
            "Non-specific internal defence: inflammation, phagocytosis, clotting and fever.",
            "Antibodies are specific proteins made by lymphocytes against one antigen; memory cells give the fast second response.",
            "Natural active, natural passive, artificial active and artificial passive immunity each has its own source and duration.",
            "Vaccines contain killed or weakened antigen or toxin and give long artificial active immunity; serum gives quick short artificial passive immunity."
          ],
          "keyTakeaway": "Vaccination is artificial active immunity, and its value lies in the memory cells it leaves behind.",
          "realWorldExample": "A baby at the Maternal and Child Health clinic in Agbogbloshie receives pentavalent and oral polio drops at ten weeks, and the nurse writes the next visit on the card so that the fourteen-week dose and the nine-month measles vaccine are not missed."
        },
        {
          "title": "Non-communicable Disease, Hygiene, Safe Water and Sanitation",
          "content": "Non-communicable diseases are not passed between people, and in Ghana their weight rises as life changes. Hypertension, high blood pressure without a single identifiable infection, is commoner with age, with a diet heavy in salt, dried fish and stock cubes, with obesity, with smoking and heavy alcohol use, and with stress, and it damages the blood vessels of the brain, eye and kidney, producing stroke, blindness and kidney failure. Diabetes mellitus follows either an absence of insulin from the pancreas or the inability of the body to respond to it, so glucose stays in the blood, giving thirst, frequent urination, weight loss, hunger, blurred vision, slow healing of wounds and, long term, damage to nerves, eyes and kidneys; control is diet with less refined sugar and more fibre, exercise, and tablets or insulin, and the disease is not spread by any contact. Sickle cell disease is inherited from a defective haemoglobin gene, red cells become crescent shaped in low oxygen conditions, they block small vessels in painful crises and burst early, causing anaemia and jaundice; two parents carrying the sickle trait have one chance in four in each pregnancy of a child with the disease, so the genetic counselling offered before marriage is a biological measure with real consequences. Cancer is uncontrolled division of cells forming a tumour that invades and spreads, and known contributors are tobacco smoke, alcohol, aflatoxin from mouldy groundnut and maize, ultraviolet light on unprotected skin, some viruses and chronic irritation of tissue; asthma, epilepsy, albinism, hypothyroidism and most mental illness are also non-communicable, and the answer to a question about them is the way of life, the inherited factor or the organ defect rather than a pathogen. Personal hygiene is the daily defence: a bath and a change of clothing, hair kept clean, nails cut short and never used to scratch, handwashing with soap before eating and after toilet use, brushing teeth, washing and cooking food, covering the mouth when coughing or sneezing, treating a wound at once rather than binding it with dirty cloth, wearing shoes and never sharing a razor. Community hygiene is the arrangement of the settlement: a latrine for every household with its contents safely emptied, covered refuse bins and a weekly collection that stops the gulls and the goats spreading a tip, drains that carry water away and are desilted before the rains so that no pool stands near a house, a protected and treated water supply with a functioning tap for every compound, the registration and inspection of chop bars, food vendors, slaughterhouses and sachet water plants by the assembly, the keeping of animals away from the kitchen, and health education carried out by the community health worker and the assembly in the local language. Drinking water can be made safe at the point of use by boiling it until it rolls for a full minute and then cooling it in a covered vessel, by adding a measured dose of household chlorine solution and leaving it for about half an hour before drinking, by filtering and then disinfecting, and by storing it in a narrow-necked container with a tap so that no hand or cup enters; sachet water should be bought only when the seal is unbroken and the product carries its regulatory approval, and a turbid river water must be settled and filtered before chlorine can work at all.",
          "bulletPoints": [
            "Hypertension, diabetes, sickle cell disease, cancer, asthma and epilepsy are non-communicable; way of life, inheritance and organ defect are the causes.",
            "Salt, fat, sugar and low fibre in the diet, tobacco, alcohol and no exercise raise the risk of the lifestyle diseases.",
            "Sickle cell trait carriers must be counselled because each pregnancy carries one chance in four of an affected child.",
            "Handwashing with soap at the critical times is the single cheapest protection against diarrhoea and eye infection.",
            "Safe water at the household: settle and filter, boil for a rolling minute or dose with chlorine and leave it half an hour, then store in a covered vessel with a tap."
          ],
          "keyTakeaway": "Non-communicable disease is answered by way of life and counselling, while communicable disease in a community is answered by water, sanitation and hygiene.",
          "realWorldExample": "When the stream at a village near Aflao is used for both washing clothes and drinking after the pump breaks, the health post records a rise in diarrhoea and bilharzia in the same month, one by the vehicle of water and one by the cercariae penetrating the skin."
        },
        {
          "title": "Micro-organisms and Applied Biology in Ghana",
          "content": "Micro-organisms are usually taught as enemies, and the syllabus asks for both sides. Harmful activities are spoilage of food, destruction of stored grain and cloth, the diseases of crops, animals and man, the production of toxins such as the aflatoxin of Aspergillus flavus growing on groundnut and maize stored damp, which is linked to liver disease, and the fouling of water. Useful activities are more numerous than the school child suspects: Rhizobium in the root nodules of groundnut, cowpea and soya fixes nitrogen that feeds the following crop, Azotobacter and the blue-green algae of waterlogged rice fields add combined nitrogen to the soil, and denitrifying bacteria, though wasteful, keep the cycle running; Lactobacillus converts sugar into lactic acid and sours the boiled maize dough of kenkey and akpi, preserves the gari through the fermentation of the grated cassava mash and turns milk into yoghurt; yeast respires anaerobically, giving carbon dioxide that raises bread dough and ethanol in palm wine and in the locally distilled spirit akpeteshie; Bacillus species ferment the locust bean seeds wrapped in banana leaf into dawadawa, a protein and flavour condiment; and in the gut of ruminants and of the termite, bacteria and protoctists digest cellulose. Because a single bacterium in favourable milk can divide about every twenty minutes, ten such divisions give 2^10, that is 1 024 cells, so one cell left in a covered bowl of soup can produce a thousand or more descendants in little over three hours, and this is why cooked food is left out at a funeral and then causes illness, and why cooling, drying and salting work: a microbial cell cannot grow without available water, so drying the sardinella at Elmina in the sun and then smoking it over charcoal removes water and lays phenolic antiseptics on the surface, salting fish and meat draws water out of the cells of the microbes by osmosis, sugaring and bottling fruit do the same and exclude air, canning heats the food in a sealed container to destroy the cells and the spores, freezing at or below about minus 18 degrees Celsius stops growth without killing, pasteurising milk at about 72 degrees Celsius for fifteen seconds and cooling it fast destroys the pathogens that cause tuberculosis and brucellosis while leaving most of the taste, and chemical preservatives such as benzoates and sulphites are legal only in the small amounts set by the regulator, since a high dose is itself harmful. Biotechnology is defined as the use of living organisms or their enzymes to make or improve a product, and its ancient Ghanaian forms are brewing, baking, kenkey and dawadawa fermentation, retting of raffia and the preparation of natural dyes; its modern forms are tissue culture, which multiplies disease-free plantain, banana and oil palm planting material in a laboratory for distribution to farms, the selective breeding and hybridising of maize, rice and poultry, genetic engineering that puts a human gene into a bacterium which then manufactures insulin, the production of vaccines and enzymes, the use of the bacterium Bacillus thuringiensis and of fungi and weevils as biological control agents, the weevil released against water hyacinth on Lake Volta, and the diagnostic strips for malaria and HIV. In agriculture and forestry this biology is daily practice: compost and manure return organic matter and nutrients, crop rotation with legumes restores nitrogen, cover crops and mulch protect the soil from the sun and the rain, contour ridges and the planting of vetiver grass stop erosion on the slopes of the Volta region, integrated pest management scouts the field, spares the natural enemies and sprays only when the threshold is passed, and spraying itself is done with a calibrated knapsack, a covered nose and a full change of clothing, never against the wind, never near a stream, and never before the pre-harvest interval printed on the label has passed. Cocoa swollen shoot virus is controlled by cutting out infected trees and replanting with tolerant varieties under shade, blackpod is reduced by pruning and by timely fungicide, and the forestry side is the silvicultural tending of teak and cedrela plantations, enrichment planting of valuable species in the reserve, the boundaries and the buffer zones of Mole and Kakum, and the enforcement against galamsey which spoils the very rivers from which treatment plants take drinking water.",
          "bulletPoints": [
            "Harmful roles: spoilage, plant and animal disease, aflatoxin from mouldy groundnut and maize, fouling of water.",
            "Useful roles: nitrogen fixation, Lactobacillus souring kenkey and gari, yeast in bread and palm wine, Bacillus in dawadawa, gut cellulose digestion.",
            "Preservation works by removing water, by heat, by cold, by salt, sugar, acid, smoke or approved chemicals, and by clean sealed packaging.",
            "Pasteurisation of milk at about 72 degrees Celsius for fifteen seconds reduces pathogens without sterilising, so milk still needs refrigeration.",
            "Biotechnology runs from kenkey brewing to tissue culture of plantain, Bt insecticide, weevils against water hyacinth and recombinant insulin."
          ],
          "keyTakeaway": "Every preservation method works by making the conditions unsuitable for the microbe, and every fermentation is a controlled use of one.",
          "realWorldExample": "A woman at Tempane in the Upper East Region boils, mills and ferments locust bean seeds into dawadawa with Bacillus while a processor at Ada Foah grates cassava, bags and ferments the mash, presses out the water and fries it into gari, two industries resting entirely on microbial action."
        }
      ],
      "commonMistakes": [
        "Writing that the male Anopheles spreads malaria, or that mosquitoes spread HIV; only the female Anopheles bites in the transmission of Plasmodium, and HIV has no insect route.",
        "Calling a vaccine a serum, or saying a vaccine cures a disease already present; a vaccine given before exposure produces artificial active immunity, while a serum gives artificial passive protection for a short time only.",
        "Naming cholera as the cause of rice-water stools by a virus, or tuberculosis by a protoctist; Vibrio cholerae is a bacterium and Mycobacterium tuberculosis is a bacillus.",
        "Answering a control question with treatment alone, for example saying that malaria is controlled by quinine, when the marks are for drainage, nets, spraying, early testing and correct dosing.",
        "Claiming antibiotics work against viruses such as measles, influenza and HIV, and thereby destroying the examination answer about viral treatment.",
        "Confusing incidence with prevalence or with the attack rate, and giving a disease rate as a number without stating the population at risk, the period and the percentage sign."
      ],
      "wassceExamTips": [
        "Paper 1 asks for the causal organism, the vector and one symptom; learn them as a set of three for each of the ten major diseases and answer in that order.",
        "In Paper 2 a question worth eight marks on malaria expects four points on the parasite side and four on the vector side, so plan two short lists rather than one paragraph.",
        "For immunity questions state the kind, the source, how fast it acts and how long it lasts, because those are the four marking points examiners look for.",
        "When a structured question gives clinic figures, write the formula before substituting, incidence equals new cases in a period divided by the population at risk multiplied by 100, and keep the unit percent.",
        "Paper 3 alternative-practical asks you to interpret a hygiene or spoilage experiment: name the variable kept different, the one kept the same, the observation and the conclusion, one line each.",
        "An applied biology essay gains credit for the Ghanaian example, kenkey fermentation, dawadawa, smoked sardinella, tissue culture of plantain, rather than for a general statement that bacteria are useful."
      ],
      "summaryChecklist": [
        "Can I sort a list of ten diseases into communicable and non-communicable and say what the distinction rests on?",
        "Can I give pathogen, vector or vehicle, two symptoms and two control measures for malaria, cholera, tuberculosis, HIV and bilharzia?",
        "Can I describe the three lines of body defence and name the four kinds of immunity with an example of each?",
        "Can I explain how the household makes water safe and how a community keeps itself free of cholera and diarrhoea?",
        "Can I discuss the useful and harmful roles of micro-organisms, four methods of food preservation with their principle, and two Ghanaian applications of biotechnology?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-health-1",
        "title": "Malaria Incidence Before and After a Net Campaign",
        "problem": "A health post serving a community of 1 800 people recorded 126 new confirmed cases of malaria in the month of October. After the community received insecticide-treated nets and the gutters behind the houses were cleared, the same population recorded 63 new confirmed cases in the following October. Calculate the incidence of malaria for each year as a percentage, find the reduction, and name the two links of the chain of infection that the campaign broke.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the definition used in records, incidence equals the number of new cases in a period divided by the population at risk, then multiplied by 100 to give a percentage.",
          "Step 2 (M1): Substitute for the first year, 126 / 1 800 x 100.",
          "Step 3 (A1): Incidence in the first year = 7.0 percent.",
          "Step 4 (M1): Substitute for the second year, 63 / 1 800 x 100.",
          "Step 5 (A1): Incidence in the second year = 3.5 percent.",
          "Step 6 (M1): Find the fall as a percentage of the first figure, (126 - 63) / 126 x 100 = 63 / 126 x 100.",
          "Step 7 (A1): The reduction is 50 percent; the two links broken are the portal of exit and mode of transmission, because the net and the spray stop the female Anopheles picking up and delivering the parasite, and the drainage removes the standing water in which its larvae developed."
        ],
        "keyTakeaway": "Incidence is new cases over the population at risk for the stated period, and halving it is the numerical proof that vector control worked."
      },
      {
        "id": "ex-bio-health-2",
        "title": "Reading an Outbreak Table to Find the Source",
        "problem": "During a diarrhoea outbreak in a town, 300 people who drew water from the stream were interviewed and 96 of them fell ill, while 200 people who used the treated borehole were interviewed and 8 of them fell ill. Calculate the attack rate for each group, state which water source is implicated, and give the two most urgent control measures.",
        "stepByStepSolution": [
          "Step 1 (M1): The attack rate equals the number of people who became ill divided by the number exposed to that source, multiplied by 100.",
          "Step 2 (M1): For the stream users substitute 96 / 300 x 100.",
          "Step 3 (A1): Attack rate among stream users = 32 percent.",
          "Step 4 (M1): For the borehole users substitute 8 / 200 x 100.",
          "Step 5 (A1): Attack rate among borehole users = 4 percent.",
          "Step 6 (M1): Compare the rates, 32 divided by 4, and note that the exposed group is eight times more likely to be ill, which points to the stream as the vehicle of infection, most probably contamination by faeces or by an infected handler.",
          "Step 7 (A1): The implicated source is the stream, and the urgent measures are to supply safe treated or boiled water at once and to start rehydration of cases with oral rehydration salts, followed by handwashing education, latrine use and the protection of the stream from defecation and refuse."
        ],
        "keyTakeaway": "An outbreak is solved by comparing attack rates between exposed groups, and the water source with the high rate is the vehicle."
      }
    ],
    "quiz": {
      "id": "quiz-bio-health-disease",
      "topicId": "shs3-bio-t3-health-disease-and-applied-biology",
      "title": "Health, Disease and Applied Biology Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-health-1",
          "quizId": "quiz-bio-health-disease",
          "questionText": "Which one of the following diseases is non-communicable?",
          "optionA": "Cholera",
          "optionB": "Tuberculosis",
          "optionC": "Malaria",
          "optionD": "Diabetes mellitus",
          "correctOption": "D",
          "subConcept": "Communicable and non-communicable disease",
          "explanation": "Diabetes mellitus arises from the insulin supply of the pancreas and cannot pass to another person, so it is non-communicable. Cholera spreads by contaminated water, tuberculosis by droplets and malaria by the mosquito, and all three are communicable.",
          "remediationTip": "Sort forty disease names into two columns until the classification is instant."
        },
        {
          "id": "q-bio-health-2",
          "quizId": "quiz-bio-health-disease",
          "questionText": "The organism that transmits the malaria parasite from person to person is",
          "optionA": "the female Anopheles mosquito",
          "optionB": "the tsetse fly Glossina",
          "optionC": "the blackfly Simulium",
          "optionD": "the freshwater snail Biomphalaria",
          "correctOption": "A",
          "subConcept": "Vectors of disease",
          "explanation": "Only the female Anopheles bites blood and carries Plasmodium from one person to another. Glossina transmits sleeping sickness, Simulium transmits the river-blindness worm, and the snail is the intermediate host of bilharzia, not a biting vector.",
          "remediationTip": "Make a vector card with four columns, vector, pathogen, disease and control, and fill it for the four names above."
        },
        {
          "id": "q-bio-health-3",
          "quizId": "quiz-bio-health-disease",
          "questionText": "A child given the measles vaccine at nine months develops which kind of immunity?",
          "optionA": "natural passive immunity",
          "optionB": "artificial active immunity",
          "optionC": "artificial passive immunity",
          "optionD": "natural active immunity",
          "correctOption": "B",
          "subConcept": "Types of immunity",
          "explanation": "A vaccine is given deliberately and contains weakened or killed antigen that makes the child's own lymphocytes produce antibodies and memory cells, so the immunity is artificial and active. Natural passive is the mother's antibodies through the placenta and breast milk, and a serum would be artificial passive.",
          "remediationTip": "Write one example for each of the four kinds of immunity and say whether it acts fast or slowly and lasts long or short."
        },
        {
          "id": "q-bio-health-4",
          "quizId": "quiz-bio-health-disease",
          "questionText": "Which measure would most directly stop the spread of cholera through a community?",
          "optionA": "spraying insecticide on the walls of houses",
          "optionB": "giving antibiotics to every adult",
          "optionC": "supplying treated and chlorinated water and promoting handwashing with soap",
          "optionD": "isolating all patients for the rest of the season",
          "correctOption": "C",
          "subConcept": "Cholera control",
          "explanation": "Cholera is swallowed in contaminated water and food, so a protected water supply and handwashing break the vehicle link at once. Spraying targets a vector that cholera does not use, antibiotics do not prevent infection from water, and indefinite isolation is neither practical nor the cause of the outbreak.",
          "remediationTip": "List the five safe-water steps, protect, treat, store with a tap, boil or chlorine, and retest."
        },
        {
          "id": "q-bio-health-5",
          "quizId": "quiz-bio-health-disease",
          "questionText": "In a town of 2 500 people, 100 new cases of typhoid were confirmed over three months. What was the incidence over that period?",
          "optionA": "0.4 percent",
          "optionB": "4.0 percent",
          "optionC": "25 percent",
          "optionD": "40 percent",
          "correctOption": "B",
          "subConcept": "Incidence calculation",
          "explanation": "Incidence equals new cases divided by the population at risk, multiplied by 100, so 100 / 2 500 x 100 = 4.0 percent. Option A misses the multiplication by 100, and option C divides the population by the cases.",
          "remediationTip": "Practise converting three fractions into percentages with the formula written out first."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t3-environmental-hygiene-public-health",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 5,
    "title": "Environmental Hygiene, Public Health and Disease Control",
    "description": "water supply and sanitation, cholera and typhoid control, malaria prevention and insecticide-treated nets, vector control, solid and liquid waste management, health education, primary health care in Ghana",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Public health is the science of keeping whole populations well by clean conditions, prevention and organised community effort, not only by treating single patients.\n• Environmental hygiene is the set of practices, safe water, sanitation and waste disposal, that cut the routes by which pathogens reach people.\n• Most diarrhoeal diseases, cholera and typhoid among them, travel by the faecal-oral route: germs passed in faeces reach another person through contaminated water or food.\n• The chain of infection has links, a source, a route of exit, a route of transmission, a portal of entry and a susceptible host; breaking any link stops the disease.\n• Safe water comes from treated supplies such as the Ghana Water Company and from protected wells and boreholes; water should be clear, colourless, odourless and free of harmful germs.\n• Home water treatment includes filtering, letting drawn water stand, boiling to kill germs and adding the correct measure of chlorine solution to sachet or stored water.\n• Cholera, caused by the bacterium Vibrio cholerae, spreads through contaminated water and gives severe watery diarrhoea; control rests on safe water and oral rehydration.\n• The first treatment for cholera is oral rehydration therapy, a salt-and-sugar drink that replaces the water and salts lost, with intravenous fluids for severe cases.\n• Typhoid fever, from Salmonella Typhi, spreads by contaminated food and water and shows as sustained fever; prevention mirrors cholera: sanitation, safe water and handwashing.\n• Sanitation means stopping human faeces from reaching people or water: use of toilets and latrines, no open defecation, and the Community-led Total Sanitation drive in Ghana.\n• Malaria is caused by Plasmodium parasites carried by the female Anopheles mosquito, which bites mainly at night and breeds in clean standing water.\n• Insecticide-treated nets protect sleepers from bites and kill the mosquitoes that land on them; a net is effective when it is used every night and its insecticide has not washed out.\n• Vector control for malaria also includes clearing stagnant water from gutters and containers, draining or treating breeding sites, and indoor residual spraying.\n• The reproductive rate of a mosquito population, and the fraction of households with a net, are the numbers public-health teams track to judge a campaign.\n• Solid waste, if left uncollected, blocks drains that then hold breeding water and attracts flies and rats; it is managed by source separation, collection, controlled landfill and recycling.\n• Liquid waste and sewage must be treated before release so that pathogens and nutrients do not foul rivers and coastal water used for fishing and drinking.\n• Flies mechanically carry germs from refuse and faeces to exposed food, so covering food, using fly-tight bins and removing rubbish break that transmission.\n• Health education turns knowledge into habit, teaching handwashing with soap, net use, and oral rehydration so communities sustain the controls themselves.\n• Primary health care is the first, community-level contact of the health system, running immunisation, antenatal care, health education and treatment of common illness in Ghanaian clinics.",
    "detailedNotes": {
      "overview": "This topic applies biology to the community: how clean water, sanitation and waste management cut the routes of disease, and how specific control programmes tackle cholera, typhoid and malaria. You will trace the chain of infection and show how each hygiene measure breaks a link, describe the prevention and treatment of the water-borne and vector-borne diseases that matter most in Ghana, and explain the roles of health education and primary health care. Numerical work on disease incidence and net coverage belongs here.",
      "introduction": "Think like a district health officer: for every disease ask where the germ lives, how it leaves a body, how it travels, how it enters the next person, and who is at risk, then place a control on each weak link. Learn the difference between the germ, the disease it causes and the vector that carries it, since candidates mix these up. Practise expressing case counts as percentages, the way surveillance reports and the examination both require.",
      "realWorldContext": "In a community near Accra the assembly organises monthly clean-up exercises to clear the gutters that would otherwise hold rainwater and breed mosquitoes. A CHPS compound at Nkawkaw registers infants for immunisation and teaches mothers oral rehydration for diarrhoea. The Ghana Water Company treats water drawn from the Volta before it reaches taps in Tema, while householders in dry months store and treat water safely. In the Upper East Region health workers distribute insecticide-treated nets before the rains, knowing a well-used net is the cheapest protection a family has against malaria.",
      "objectives": [
        "Explain how safe water supply and sanitation prevent water-borne disease",
        "Trace the chain of infection and place a control measure on each link",
        "Describe the causes, spread and control of cholera, typhoid and malaria",
        "Explain the correct use of insecticide-treated nets and other vector-control methods",
        "Describe solid and liquid waste management and the roles of health education and primary health care"
      ],
      "sections": [
        {
          "title": "Water, Sanitation and the Chain of Infection",
          "content": "Every communicable disease travels along a chain with five links: a reservoir or source of the pathogen, a route by which it leaves that source, a method of transmission to a new person, a portal through which it enters, and a susceptible host at the end. Environmental hygiene earns its living by snapping links. Safe water attacks transmission, because a treated supply protected from faecal pollution removes the vehicle for cholera and typhoid. In Ghana the Ghana Water Company treats surface water drawn from rivers and from the Volta through sedimentation, filtration and chlorination before it reaches town taps, and communities without pipes depend on protected boreholes and wells whose aprons and lids keep dirty water out. At home, water drawn for drinking should be clear and odourless, and where doubt remains it is made safe by boiling or by adding the correct measure of chlorine solution and leaving it to act. Sanitation closes the other end of the chain by stopping human faeces from ever reaching a water source or a food handler; the construction and use of toilets and latrines, the abandonment of open defecation promoted through Community-led Total Sanitation, and handwashing with soap after the toilet and before eating together break the faecal-oral cycle that keeps diarrhoeal disease alive in a community.",
          "bulletPoints": [
            "The chain of infection: source, exit, transmission, entry, susceptible host.",
            "Treated pipe water and protected boreholes remove the water vehicle for germs.",
            "Boiling or correct chlorination makes doubtful household water safe to drink.",
            "Latrines and no open defecation stop faeces reaching water and food.",
            "Handwashing with soap at critical times breaks the faecal-oral route."
          ],
          "keyTakeaway": "Hygiene is chain-breaking: cut the water, cut the exit at the toilet, cut the transfer at the hands, and the disease has no route left.",
          "realWorldExample": "After a cholera alert in a fishing town along the coast, teams distribute chlorine for household treatment and chlorinate the well, striking the transmission link directly."
        },
        {
          "title": "Controlling Cholera and Typhoid",
          "content": "Cholera and typhoid are the classic diseases of polluted water and poor sanitation, and their control is a direct test of the hygiene principles above. Cholera is caused by the bacterium Vibrio cholerae, which lives in water and food contaminated with faeces and produces a toxin that drives the intestine to pour out water, giving the characteristic rice-water stools and rapid dehydration. The danger in an outbreak is death from fluid loss, so the first and most important treatment is rehydration: oral rehydration therapy, a measured mixture of salts and sugar in safe water that the gut can still absorb, replaces what is lost, and severe cases are given intravenous fluids. Antibiotics may shorten the illness but never replace rehydration. Because the organism leaves with faeces and enters with contaminated water, lasting control needs safe water, latrines and handwashing, plus health education so families prepare the rehydration salt solution early. Typhoid fever is caused by Salmonella enterica serovar Typhi, spread the same faecal-oral way through contaminated food and water and by unwashed handlers. It brings sustained high fever, headache and abdominal symptoms rather than the explosive fluid loss of cholera. Its prevention overlaps with cholera, safe water, proper cooking, washing of food, sanitation and hand hygiene, and a typhoid vaccine is available for at-risk groups. Both diseases therefore fall to the same environmental measures, which is why the public-health answer to either is a water-and-sanitation campaign before it is a drug.",
          "bulletPoints": [
            "Cholera is caused by Vibrio cholerae and spreads in contaminated water and food.",
            "Severe dehydration is the killer; oral rehydration therapy is the first treatment.",
            "IV fluids are reserved for the most severe cholera cases.",
            "Typhoid is caused by Salmonella Typhi and shows as sustained fever.",
            "Both are prevented by safe water, sanitation, handwashing and food hygiene."
          ],
          "keyTakeaway": "Cholera and typhoid are the same failure of water and sanitation seen through two different germs, so the control is the same too.",
          "realWorldExample": "During the festive-season risk period, the Greater Accra Regional Health Directorate pre-positions oral rehydration salts and cholera kit in health posts expecting crowd-borne water stress."
        },
        {
          "title": "Malaria, Nets and Vector Control",
          "content": "Malaria is the disease that takes the most lives among Ghana's under-fives and pregnant women, and because its agent is a parasite carried by a mosquito, its control is largely vector control. The Plasmodium parasite is passed to people by the bite of an infected female Anopheles mosquito, which feeds chiefly between dusk and dawn and lays its eggs in clean standing water such as puddles, blocked gutters, used tins and footprints. Breaking the cycle means attacking the mosquito and the bite. Insecticide-treated nets hang over sleeping people, physically blocking bites and killing the mosquitoes that rest on the treated fabric; a net protects only when it is tucked under the mat every single night and its insecticide has not been worn out by repeated washing, so damaged or aged nets must be replaced. Beyond nets, integrated vector management clears or treats breeding sites, draining stagnant water, filling ruts, and applying larvicide where water cannot be removed, and indoor residual spraying coats walls with insecticide to kill resting mosquitoes. Pregnant women are given intermittent preventive treatment and children suspected of malaria are tested and given the correct artemisinin-based combination therapy rather than a random drug. Two figures drive the campaign: the percentage of households that own a net and, more revealing, the percentage of people who actually slept under one, because ownership without use buys no protection.",
          "bulletPoints": [
            "Malaria is a Plasmodium parasite carried by the night-biting female Anopheles mosquito.",
            "Anopheles breeds in clean standing water, so source reduction removes the next generation.",
            "An insecticide-treated net works only if used nightly and its insecticide is intact.",
            "Indoor residual spraying and larvicide add to net-based protection.",
            "Coverage is judged by net ownership and, better, by the share who slept under a net."
          ],
          "keyTakeaway": "You cannot rely on drugs alone while the mosquito still breeds; the fight is won at the standing water and at the bed net.",
          "realWorldExample": "A nationwide net campaign in the Northern Region distributes insecticide-treated nets to households ahead of the rains, when the breeding puddles will appear."
        },
        {
          "title": "Waste Management, Health Education and Primary Health Care",
          "content": "A clean physical environment underpins every other control, so waste management is public health, not only sanitation. Uncollected solid waste is dangerous in two ways: it clogs drains, which then hold the standing water mosquitoes need, and it feeds flies and rats that carry germs from refuse to food. Sound practice separates waste at source, collects it regularly, dumps it only at controlled landfill sites rather than open spots, and recycles or reuses materials such as plastics, the same habit promoted near the Agbogbloshie area to cut unsafe burning and scavenging. Liquid waste and sewage must never enter a water course untreated; treatment removes pathogens and the nutrients that would otherwise foul rivers and the coastal waters used for fishing and, downstream, for drinking. None of this holds without health education, which converts knowledge into lasting habit, teaching handwashing with soap, correct net use, safe food handling and home preparation of rehydration salts, so the community sustains the defences between campaigns. The system that delivers all of this at the people's doorstep is primary health care, the first level of contact in Ghana through CHPS compounds and health centres, which carries immunisation, antenatal care, health education, disease surveillance and treatment of common illness into the community, catching outbreaks early and keeping hygiene measures alive year after year.",
          "bulletPoints": [
            "Uncollected solid waste breeds vectors and spreads germs on flies.",
            "Separation, regular collection, controlled landfill and recycling manage solid waste.",
            "Sewage and liquid waste must be treated before any river or sea is used downstream.",
            "Health education turns hygiene knowledge into durable community habit.",
            "Primary health care and the CHPS system deliver these services locally."
          ],
          "keyTakeaway": "Waste control, teaching and community-level care are what keep a clean environment permanent rather than a one-off exercise.",
          "realWorldExample": "A district assembly in Ashanti pairs monthly clean-up days with CHPS health educators, so gutters are cleared and households are taught why, tackling mosquitoes and habits together."
        }
      ],
      "commonMistakes": [
        "Saying malaria is caused by a mosquito bite alone; the mosquito is the vector, the cause is the Plasmodium parasite it transmits.",
        "Naming cholera control as antibiotics; the life-saving measure is rehydration, especially oral rehydration therapy.",
        "Believing that owning a net prevents malaria; only a net slept under every night, with its insecticide intact, gives protection.",
        "Confusing typhoid with cholera on symptoms; typhoid gives sustained fever, cholera gives explosive watery diarrhoea and dehydration.",
        "Claiming the malaria mosquito breeds in filthy stagnant water; the Anopheles that carries malaria prefers clean standing water such as puddles and gutters."
      ],
      "wassceExamTips": [
        "Paper 1 asks you to match the germ, the disease and the vector; drill these triples: Vibrio cholerae-cholera-water, Plasmodium-malaria-Anopheles.",
        "In Paper 2 a 'how would you control' question is marked link by link, so name the link of the chain each measure breaks.",
        "For a numerical surveillance item, write the incidence as a fraction first, then convert to a percentage, and label it as cases over population.",
        "When explaining nets, include the words tucked in, used every night and intact insecticide; ownership alone is not the answer.",
        "In Paper 3-style data questions about an outbreak, read the totals before calculating; the denominator is the tested or exposed group, not the whole country."
      ],
      "summaryChecklist": [
        "Can I trace the chain of infection and break it with a named hygiene measure?",
        "Can I explain how safe water and sanitation prevent cholera and typhoid?",
        "Can I describe oral rehydration therapy and its place in cholera treatment?",
        "Can I list vector-control methods and state the conditions for a net to work?",
        "Can I explain waste management, health education and the role of primary health care?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-publichealth-1",
        "title": "Malaria Prevalence in a Screening Survey",
        "problem": "In a district screening, 1700 people were tested for malaria and 340 of them were positive. Calculate the prevalence as a percentage, and state how many positives would be expected if the same rate held in a town of 5000 people.",
        "stepByStepSolution": [
          "Step 1 (M1): Prevalence = (number positive / number tested) × 100 = (340 / 1700) × 100.",
          "Step 2 (A1): 340 / 1700 = 0.20, so the prevalence is 20%.",
          "Step 3 (M1): Expected positives in a town = prevalence × population = 0.20 × 5000.",
          "Step 4 (A1): The expected number of positives is 1000 people.",
          "Step 5 (M1): Such a figure guides how many test kits and treatment courses to stock.",
          "Step 6 (A1): The health team plans for about 1000 malaria cases at the observed rate."
        ],
        "keyTakeaway": "Prevalence is positives over tested as a percentage, and multiplying that rate by a new population predicts the burden to plan for."
      },
      {
        "id": "ex-bio-publichealth-2",
        "title": "Case Fatality Rate of a Cholera Outbreak",
        "problem": "A cholera outbreak recorded 500 cases and 40 of those patients died. Calculate the case fatality rate as a percentage, and explain what a fall in this rate after an intervention would indicate.",
        "stepByStepSolution": [
          "Step 1 (M1): Case fatality rate = (number of deaths / number of cases) × 100 = (40 / 500) × 100.",
          "Step 2 (M1): Reduce the fraction: 40 / 500 = 0.08.",
          "Step 3 (A1): The case fatality rate = 8%.",
          "Step 4 (M1): An intervention such as early oral rehydration lowers deaths among the same number of cases.",
          "Step 5 (A1): A fall in the case fatality rate shows treatment is reaching patients in time, even if case counts are unchanged."
        ],
        "keyTakeaway": "The case fatality rate measures deaths as a share of cases, and it drops when good treatment, especially rehydration, arrives early."
      }
    ],
    "quiz": {
      "id": "quiz-bio-publichealth",
      "topicId": "shs3-bio-t3-environmental-hygiene-public-health",
      "title": "Environmental Hygiene and Public Health Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-publichealth-1",
          "quizId": "quiz-bio-publichealth",
          "questionText": "The single most important first treatment for a cholera patient losing fluid is",
          "optionA": "oral rehydration therapy with safe fluid",
          "optionB": "a course of antibiotics",
          "optionC": "an insecticide-treated net",
          "optionD": "an antimalarial drug",
          "correctOption": "A",
          "subConcept": "Cholera treatment",
          "explanation": "Cholera kills by dehydration, so replacing water and salts through oral rehydration therapy is the priority; intravenous fluids are used only in severe cases. Antibiotics do not replace rehydration, and nets and antimalarials are for malaria.",
          "remediationTip": "Link the disease to what it takes away: cholera takes fluid, so give fluid back."
        },
        {
          "id": "q-bio-publichealth-2",
          "quizId": "quiz-bio-publichealth",
          "questionText": "Malaria in Ghana is transmitted to humans by",
          "optionA": "drinking water contaminated with faeces",
          "optionB": "the bite of the female Anopheles mosquito carrying Plasmodium",
          "optionC": "airborne droplets from a cough",
          "optionD": "unwashed hands preparing food",
          "correctOption": "B",
          "subConcept": "Malaria transmission",
          "explanation": "The Plasmodium parasite passes to people through the bite of an infected female Anopheles mosquito. Faecal contamination of water spreads cholera and typhoid, not malaria.",
          "remediationTip": "Keep the triple straight: Plasmodium is the cause, Anopheles is the vector, the bite is the route."
        },
        {
          "id": "q-bio-publichealth-3",
          "quizId": "quiz-bio-publichealth",
          "questionText": "An insecticide-treated net protects against malaria only when",
          "optionA": "it is hung in the daytime in the living room",
          "optionB": "the household owns one net whether or not it is used",
          "optionC": "it is slept under every night with its insecticide still effective",
          "optionD": "it is washed with strong detergent each morning",
          "correctOption": "C",
          "subConcept": "Net use",
          "explanation": "Because the Anopheles bites at night, the net must be used nightly, correctly set up, and its insecticide must not have washed out; mere ownership gives no protection. Frequent harsh washing actually degrades the insecticide.",
          "remediationTip": "Remember the three conditions: nightly, tucked in, insecticide intact."
        },
        {
          "id": "q-bio-publichealth-4",
          "quizId": "quiz-bio-publichealth",
          "questionText": "Typhoid fever is caused by",
          "optionA": "Plasmodium falciparum",
          "optionB": "a virus carried by mosquitoes",
          "optionC": "Vibrio cholerae",
          "optionD": "Salmonella Typhi",
          "correctOption": "D",
          "subConcept": "Typhoid cause",
          "explanation": "Typhoid is caused by the bacterium Salmonella Typhi, spread through contaminated food and water. Plasmodium causes malaria and Vibrio cholerae causes cholera.",
          "remediationTip": "Make a cause list: Salmonella Typhi-typhoid, Vibrio-cholera, Plasmodium-malaria."
        },
        {
          "id": "q-bio-publichealth-5",
          "quizId": "quiz-bio-publichealth",
          "questionText": "In an outbreak, 600 people were tested and 90 were found to carry a pathogen. What is the percentage prevalence?",
          "optionA": "9%",
          "optionB": "15%",
          "optionC": "18%",
          "optionD": "60%",
          "correctOption": "B",
          "subConcept": "Disease incidence",
          "explanation": "Prevalence = 90 / 600 × 100 = 15%. Reading it as 9% confuses the count with the percentage, and 60% mistakes the tested group for the answer.",
          "remediationTip": "Divide positives by tested first, then multiply by 100; recheck against the total."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t3-biotechnology-food-industries",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Biotechnology, Food Science and Fermentation Industries",
    "description": "traditional fermentation in kenkey akpotto and cassava, yeast and lactic acid bacteria, aerobic and anaerobic industrial fermentation, enzyme use in food and detergent, pasteurisation canning drying salting and smoking, food spoilage organisms and safety, tissue culture and vegetative propagation of banana and cocoa, genetic modification debate in Ghana, biogas and waste treatment",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Biotechnology is the use of living organisms or their enzymes to make or improve a product, from kenkey dough to laboratory insulin.\n• Fermentation is the anaerobic breakdown of sugar by micro-organisms, releasing energy and giving useful products such as alcohol, lactic acid or carbon dioxide.\n• Yeast, Saccharomyces, converts glucose to ethanol plus carbon dioxide; the gas raises dough and bread, the alcohol is in drinks.\n• Lactic acid bacteria turn milk and soaked cereal dough sour, and they are the main workers behind kenkey and akpotto.\n• Cassava and maize dough for kenkey is soaked and fermented by lactic acid bacteria, which lower the pH, develop flavour and make it keep longer.\n• Anaerobic fermentation needs no oxygen; aerobic industrial processes, such as making certain acids or growing biomass, require a steady supply of oxygen.\n• Industrially, fermenters control temperature, pH, oxygen and nutrient so the chosen microbe works at its fastest safe rate.\n• Enzymes are biological catalysts; amylase breaks starch to sugar in brewing, protease softens meat and clears protein haze, and lipase and protease in detergents digest food stains.\n• Food preservation kills or stops the growth of spoilage organisms, and every method works by removing a condition microbes need.\n• Pasteurisation heats milk to about 72 degrees Celsius for fifteen seconds to kill harmful bacteria, then cools it fast; it is not sterilisation.\n• Canning uses heat and a sealed tin; drying and dehydration remove water; salting and sugaring draw water out by osmosis; smoking dries and adds antiseptic chemicals.\n• Spoilage by bacteria and fungi is shown by sour smell, slime and mould; safe food control rests on clean handling, cold storage and thorough cooking.\n• Tissue culture grows whole plantlets from a small piece of tissue in sterile nutrient jelly, giving disease-free banana and cocoa planting material.\n• Vegetative propagation of banana suckers and cocoa cuttings keeps the exact good traits of the parent because there is no seed and no recombination.\n• Genetic modification moves a chosen gene into a crop; the debate in Ghana weighs yield and nutrition against biosafety, seed cost and public acceptance.\n• Biogas digesters let anaerobic bacteria break down farm and kitchen waste to give methane fuel and a nutrient-rich slurry fertilizer.",
    "detailedNotes": {
      "overview": "This topic shows microbes and enzymes at work in Ghanaian food and industry. You will explain fermentation in kenkey, akpotto and cassava processing, the roles of yeast and lactic acid bacteria, and how industrial fermenters run aerobic and anaerobic processes. Then relate enzyme use in food and detergent, the science behind each preservation method, and food-safety control, before closing with tissue culture, vegetative propagation, the genetic modification debate and biogas from waste.",
      "introduction": "Treat every process as a chain: which organism or enzyme, what condition it needs, what product it makes, and how that product is used. For fermentation write the substrate, the anaerobic condition, the organism and both products. For each preservation method name the microbial need it removes, water, nutrient, oxygen or a suitable temperature, because the examiner marks that reasoning. When discussing genetic modification, give both a benefit and a caution in balanced terms rather than a slogan.",
      "realWorldContext": "Kenkey sellers around Ada and Akosombo soak and mill maize, then let lactic acid bacteria sour the dough, a process that both flavors the food and holds back spoilage. Cassava processors in the Eastern Region ferment and press the pulp to make gari and remove the bitter compounds. At a brewery near Tema, yeast fermentation is followed by pasteurisation of the bottled product, while a household in Tamale keeps milk fresh by boiling and cooling it. Biogas units fed with pig waste at a peri-urban farm supply cooking gas and a slurry that goes back on the fields, showing the same microbes giving fuel as well as food.",
      "objectives": [
        "Explain fermentation and the roles of yeast and lactic acid bacteria in kenkey and cassava processing",
        "Distinguish aerobic from anaerobic industrial fermentation and describe a controlled fermenter",
        "Describe enzyme use in food and detergent and the principles of the main preservation methods",
        "Discuss tissue culture, vegetative propagation, genetic modification and biogas production"
      ],
      "sections": [
        {
          "title": "Fermentation: Traditional and Industrial",
          "content": "Fermentation is the release of energy from sugar by micro-organisms without the use of oxygen, and it has fed Ghana for generations. In kenkey and akpotto the cooked or soaked cereal dough is left to sour; lactic acid bacteria convert the sugars largely into lactic acid, which lowers the pH, gives the characteristic sharp taste and inhibits many spoilage and disease organisms, so the dough keeps better. In cassava processing the same microbial action softens the pulp and helps break down bitter compounds before the gari is fried. Brewing and baking rely on the yeast Saccharomyces, a fungus that under anaerobic conditions turns glucose into ethanol and carbon dioxide; the trapped gas bubbles raise bread and dough, and the ethanol is the alcohol of drinks. Industry runs these reactions inside a fermenter, a closed vessel where temperature, pH, nutrient level and, for an aerobic process, a sterile air supply are all held at the optimum so the chosen microbe works at its fastest safe rate. Where the product needs oxygen, as in growing a lot of biomass or making certain organic acids, the process is aerobic and aerated; where the product is alcohol or lactic acid, oxygen must be kept out, so the process is anaerobic.",
          "bulletPoints": [
            "Fermentation is anaerobic breakdown of sugar by microbes, releasing energy.",
            "Lactic acid bacteria sour kenkey and akpotto dough and lower its pH.",
            "Yeast converts glucose to ethanol plus carbon dioxide; the gas raises dough.",
            "A fermenter controls temperature, pH, nutrients and oxygen for the chosen microbe.",
            "Aerobic industry needs a sterile air supply; alcohol and lactic acid work are anaerobic."
          ],
          "keyTakeaway": "One idea runs through it all: give a chosen microbe the right conditions and its metabolism makes the product you want.",
          "realWorldExample": "A kenkey seller at Ada judges the dough ready by its sour smell and firm texture, the visible result of lactic acid bacteria having lowered the pH."
        },
        {
          "title": "Enzymes, Preservation and Food Safety",
          "content": "Enzymes are biological catalysts, each speeding one reaction at mild temperatures. Food and detergent industries exploit this. Amylase breaks starch into fermentable sugars in brewing; protease tenderises meat and clears the protein haze in drinks; pectinase clarifies fruit juices; and the protease and lipase blended into washing powders digest the protein and fat of food stains so they wash away in cool water. Preservation works by removing a condition that spoilage organisms need: water, nutrients, oxygen or a warm temperature. Pasteurisation heats milk to about 72 degrees Celsius for fifteen seconds and then cools it quickly, killing harmful bacteria without sterilising the whole contents, so the milk must still be refrigerated. Canning combines heat with a sealed tin so no organism can re-enter. Drying and dehydration strip out the water microbes need to grow. Salting and sugaring preserve by osmosis, drawing water out of microbial cells so they shrink and cannot divide. Smoking dries the surface and lays down antiseptic phenolic compounds. Spoilage itself is the visible work of bacteria and fungi, seen as sourness, slime and mould. Food safety therefore depends on clean handling, cold storage that slows microbial growth, thorough cooking to kill pathogens, and avoiding the cross-contamination of cooked food by raw.",
          "bulletPoints": [
            "Enzymes are specific catalysts; amylase, protease and lipase each act on one kind of molecule.",
            "Pasteurisation about 72 degrees Celsius for 15 seconds kills harmful bacteria but is not sterilisation.",
            "Drying removes water; salting and sugaring preserve by osmosis; canning uses heat and a seal.",
            "Smoking dries the food and adds antiseptic chemicals from the smoke.",
            "Food safety rests on hygiene, cold storage, thorough cooking and avoiding cross-contamination."
          ],
          "keyTakeaway": "Every preservation method is really the removal of one thing a microbe needs, and safety is keeping microbes out and their numbers down.",
          "realWorldExample": "A bottled drink at a Tema plant is pasteurised and then cold-stored because pasteurisation lowers the microbial load but leaves the product open to recontamination if kept warm."
        },
        {
          "title": "Plant Biotechnology, Modification and Waste to Energy",
          "content": "Plant biotechnology gives two powerful propagation tools. Tissue culture grows whole, genetically identical plantlets from a tiny piece of sterile tissue placed on nutrient jelly under controlled light; because the starting cell can be virus-free, it produces clean banana and cocoa planting material in quantity from a small donor. Vegetative propagation, using banana suckers or cocoa cuttings and grafts, likewise keeps the exact good traits of the parent, since no seed and no gene recombination are involved, so every plant is a true copy. Genetic modification goes a step further by inserting a chosen gene, for instance one for insect resistance or better nutrition, directly into a crop's DNA. In Ghana this is debated honestly: the promised gains are higher yield, less pesticide and improved food quality, while the cautions concern biosafety testing, the cost of patented seed, the effect on local varieties and public acceptance, so any release must pass regulatory review. Biotechnology also turns waste into resources. A biogas digester holds farm and kitchen waste with water in an airtight tank where anaerobic bacteria break it down and release methane, a clean-burning fuel, leaving a nutrient-rich slurry that is returned to the land as fertilizer, closing the loop between waste, energy and soil fertility.",
          "bulletPoints": [
            "Tissue culture makes many identical, often disease-free plantlets from a small sterile piece.",
            "Vegetative propagation keeps the parent's exact traits because there is no seed or recombination.",
            "Genetic modification inserts a chosen gene; the debate weighs yield and nutrition against biosafety and cost.",
            "Biogas digesters use anaerobic bacteria to turn waste into methane fuel.",
            "The leftover slurry from a digester is a useful organic fertilizer."
          ],
          "keyTakeaway": "Copy a good plant exactly, change a gene with care, and let microbes convert waste to fuel; biotechnology multiplies choices for the farmer.",
          "realWorldExample": "Disease-free banana plantlets raised by tissue culture give a coastal nursery a clean start that rooted suckers from an infected mother plant cannot."
        }
      ],
      "commonMistakes": [
        "Saying yeast makes lactic acid; yeast gives ethanol and carbon dioxide, while lactic acid bacteria give lactic acid in sour dough and yoghurt.",
        "Calling pasteurisation sterilisation; pasteurisation lowers the number of harmful bacteria but does not kill every spore, so the food still needs refrigeration.",
        "Confusing tissue culture with seed sowing; tissue culture is asexual and gives identical clones from sterile tissue.",
        "Stating that fermentation always needs oxygen; alcohol and lactic acid fermentation are anaerobic, and only aerobic industrial processes need air."
      ],
      "wassceExamTips": [
        "Paper 1 (objective) will separate yeast from lactic acid bacteria by product; match the organism to ethanol plus carbon dioxide or to lactic acid.",
        "Paper 3 (alternative practical) often gives a dough or yoghurt scenario; describe the test for carbon dioxide, and note that a warm water bath speeds the reaction.",
        "For a genetic modification question, always give one advantage and one caution so the balanced-mark is awarded.",
        "Give the correct pasteurisation temperature and time, about 72 degrees Celsius for fifteen seconds, exactly as asked; a rough number loses the mark."
      ],
      "summaryChecklist": [
        "Can I describe fermentation and name the products of yeast and of lactic acid bacteria?",
        "Can I tell an aerobic industrial fermentation from an anaerobic one?",
        "Can I explain enzyme use in food and detergent with named enzymes?",
        "Can I state the principle behind pasteurisation, canning, drying, salting and smoking?",
        "Can I discuss tissue culture, genetic modification and biogas with both merits and cautions?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-biotech-1",
        "title": "Counting Bacteria by Binary Fission",
        "problem": "A culture starts with 5 bacteria. Each bacterium divides into two every 30 minutes. Assuming no cells die, how many bacteria are present after 3 hours?",
        "stepByStepSolution": [
          "Step 1 (M1): Find the number of generations in 3 hours; 3 hours = 180 minutes, so 180 / 30 = 6 generations.",
          "Step 2 (M1): Use the growth formula, number = starting number x 2 to the power of generations = 5 x 2^6.",
          "Step 3 (M1): Evaluate 2^6 = 64.",
          "Step 4 (A1): Number of bacteria = 5 x 64 = 320 cells after 3 hours."
        ],
        "keyTakeaway": "Count the generations, then multiply the starting cells by 2 raised to that number."
      },
      {
        "id": "ex-bio-biotech-2",
        "title": "Estimating a Population by Plate Count",
        "problem": "One cubic centimetre of a milk sample diluted one million times, a factor of 10 to the power 6, is spread on agar and gives 80 colonies. Estimate the number of bacteria per cubic centimetre in the original undiluted sample.",
        "stepByStepSolution": [
          "Step 1 (M1): Each colony arose from one bacterium, so the diluted sample held 80 bacteria per cubic centimetre.",
          "Step 2 (M1): Multiply by the dilution factor to return to the original strength, 80 x 10^6.",
          "Step 3 (M1): Write in standard form, 80 x 10^6 = 8.0 x 10^7.",
          "Step 4 (A1): The original milk held about 8.0 x 10^7 bacteria per cubic centimetre."
        ],
        "keyTakeaway": "A plate count scales up by the dilution factor, so colony number times dilution gives the original population."
      }
    ],
    "quiz": {
      "id": "quiz-bio-biotech",
      "topicId": "shs3-bio-t3-biotechnology-food-industries",
      "title": "Biotechnology and Food Industries Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-biotech-1",
          "quizId": "quiz-bio-biotech",
          "questionText": "The souring of the maize dough used for kenkey is caused mainly by",
          "optionA": "lactic acid bacteria producing lactic acid",
          "optionB": "yeast producing ethanol and carbon dioxide",
          "optionC": "moulds breaking down the protein",
          "optionD": "the dough drying out in the sun",
          "correctOption": "A",
          "subConcept": "Traditional fermentation",
          "explanation": "Lactic acid bacteria convert the sugars to lactic acid, which lowers the pH and gives the sharp taste. Yeast makes alcohol and gas, not the sourness of kenkey.",
          "remediationTip": "Write a two-column list of yeast products versus lactic acid bacteria products."
        },
        {
          "id": "q-bio-biotech-2",
          "quizId": "quiz-bio-biotech",
          "questionText": "Milk is pasteurised by heating it to about 72 degrees Celsius for fifteen seconds and then cooling it quickly. This process",
          "optionA": "sterilises the milk completely so it keeps without a fridge",
          "optionB": "concentrates the milk proteins",
          "optionC": "kills most harmful bacteria but still needs refrigeration",
          "optionD": "turns the lactose into lactic acid",
          "correctOption": "C",
          "subConcept": "Pasteurisation",
          "explanation": "Pasteurisation greatly lowers the number of harmful bacteria but does not kill every spore, so the milk must still be kept cold. Complete sterilisation needs higher heat for longer.",
          "remediationTip": "Contrast pasteurisation with sterilisation in one sentence, focusing on the surviving spores."
        },
        {
          "id": "q-bio-biotech-3",
          "quizId": "quiz-bio-biotech",
          "questionText": "Salting and heavy sugaring preserve food chiefly because they",
          "optionA": "add nutrients that the food lacked",
          "optionB": "draw water out of microbial cells by osmosis",
          "optionC": "kill all enzymes permanently by heat",
          "optionD": "supply oxygen to aerobic spoilers",
          "correctOption": "B",
          "subConcept": "Preservation by osmosis",
          "explanation": "A strong salt or sugar solution is hypertonic, so water leaves microbial cells by osmosis and they cannot divide. No heat or oxygen is involved.",
          "remediationTip": "Draw a cell in a strong salt solution and show the direction of water loss."
        },
        {
          "id": "q-bio-biotech-4",
          "quizId": "quiz-bio-biotech",
          "questionText": "The advantage of raising banana plantlets by tissue culture rather than by ordinary seed is that the plantlets are",
          "optionA": "genetically varied so some resist disease",
          "optionB": "cheaper because no lab is needed",
          "optionC": "grown in open soil without sterility",
          "optionD": "genetically identical copies that can be produced disease-free in quantity",
          "correctOption": "D",
          "subConcept": "Tissue culture",
          "explanation": "Tissue culture is asexual, so it clones the parent and, starting from sterile tissue, can give clean planting material in large numbers. Genetic variation comes from seed, not cloning.",
          "remediationTip": "List clone versus seed offspring and mark which one preserves the parent exactly."
        },
        {
          "id": "q-bio-biotech-5",
          "quizId": "quiz-bio-biotech",
          "questionText": "A biogas digester produces a usable fuel because anaerobic bacteria in the sealed tank",
          "optionA": "break down the waste and release methane",
          "optionB": "photosynthesise using the sunlight on the tank",
          "optionC": "convert the waste into solid starch",
          "optionD": "burn the waste with air drawn in by a pump",
          "correctOption": "A",
          "subConcept": "Biogas",
          "explanation": "In the airtight digester anaerobic bacteria ferment organic waste into a gas rich in methane, which burns as fuel, leaving a slurry fertilizer. Air is deliberately excluded.",
          "remediationTip": "Sketch the digester and label the inputs waste and water, and the outputs methane and slurry."
        }
      ]
    }
  },
  {
    "id": "shs3-bio-t3-practical-biology-investigation-skills",
    "subjectId": "biology",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Practical Biology Skills and Investigation Design",
    "description": "specimen handling and preservation, low and high power microscope work, biological drawing rules and labelling, magnification calculation, designing a fair test with variables and control, recording in tables with units and repeats, graphing and interpreting results, sources of error and reliability, typical WASSCE practical stations and what examiners award marks for",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Practical biology is a craft as well as a science; the marks are in the technique, the recording and the reasoning.\n• Specimens are handled gently and kept in the right condition, fresh material in damp cotton or a sealed container, and preserved material in a labelled fixative.\n• A light microscope is carried with two hands, one on the arm and one under the base, and the lenses are cleaned only with lens paper.\n• Start every observation on low power to find the image, centre it, then switch to high power and focus only with the fine adjustment knob.\n• Total magnification equals the eyepiece magnification multiplied by the objective magnification, so a 10 times eyepiece with a 40 times objective gives 400.\n• A biological drawing is a clean line picture with no shading and no colour, drawn from what is actually seen, using single unbroken lines.\n• Labels are written horizontally and joined to the correct part with a ruled straight line drawn on one side of the drawing.\n• Every drawing carries a title and a stated magnification, the two items examiners look for before awarding presentation marks.\n• Magnification of a drawing equals the measured length in the drawing divided by the true length of the specimen, both in the same unit.\n• An investigation is a fair test: change one independent variable, measure the dependent variable, and keep every other factor constant.\n• A control gives a standard for comparison, treated exactly like the experiment except for the one tested variable.\n• Repeat each reading several times and take the mean; repeats expose anomalies and raise reliability.\n• Record data in a labelled table with units in the column headings and consistent decimal places.\n• Plot the independent variable on the horizontal axis and the dependent variable on the vertical axis, then draw a smooth line or curve of best fit.\n• Sources of error include parallax when reading a scale, a mis-set instrument, evaporation, timing slips and biological variation between specimens.\n• Reliability is judged by consistency of repeats; validity is judged by whether the test really measures what it claims.\n• In the WASSCE practical, method, accurate observation, correct units and clear presentation earn the marks, not a memorised final answer.",
    "detailedNotes": {
      "overview": "This topic turns the school laboratory into an exam weapon. You will handle and preserve specimens correctly, use a light microscope from low to high power, and produce a biological drawing that meets every convention. You will then design a fair test with a clear independent variable, dependent variable and control, record data in proper tables with units and repeats, graph and interpret results, and name the sources of error and reliability checks. The final part maps the typical WASSCE practical stations to what examiners actually pay marks for.",
      "introduction": "Read every practical question twice and identify the verb, observe, measure, draw or explain, because each carries its own marks. Set out a table before filling it, with headings, units and a column for repeats, so the layout earns credit on its own. When you draw, look at the real specimen and copy exactly what you see rather than a remembered picture, then add a title and a magnification. For any investigation, name the variables and the control in one clean sentence, because that sentence is a marking point.",
      "realWorldContext": "The Ghana Education Service school laboratory expects each pupil to set up a microscope with both hands and to leave it clean and covered, the same discipline an examiner rewards. Agricultural stations testing fertilizer or germination run replicated plots and average them, exactly the repeat-and-mean skill Paper 3 borrows. Health technicians preparing wet mounts and reading a scale on a colorimeter follow the same parallax rules students practise, and seed-germination checks in a nursery at Dawenya use a control tray the way a fair test demands.",
      "objectives": [
        "Handle and preserve specimens and use a light microscope correctly from low to high power",
        "Produce a biological drawing that follows all conventions and calculate its magnification",
        "Design a fair test identifying independent, dependent and controlled variables and a control",
        "Record data in tables with units and repeats and interpret graphs and sources of error"
      ],
      "sections": [
        {
          "title": "Specimen Care and Microscope Technique",
          "content": "Good results begin before observation, with correct handling. Fresh specimens are kept cool and moist, in a sealed container or on damp cotton wool, so they do not wilt or dry out, while preserved material is stored in its fixative and always labelled with the organism, the part and the date. A light microscope is heavy and delicate, so carry it with two hands, one gripping the arm and the other supporting the base, and set it down well away from the bench edge. Clean the lenses only with lens paper, never a handkerchief that scratches the glass. Place the slide on the stage and start on the lowest-power objective, using the coarse adjustment to bring the specimen into view, because low power gives a wide, bright field that is easy to find your way around. Once the part you want is centred, turn to a higher power and refocus with only the fine adjustment knob, since the coarse knob can drive the objective into the slide and crack both. Total magnification is the eyepiece multiplied by the objective, so a 10 times eyepiece with a 40 times objective gives 400; adjust the light and the diaphragm so the image is clear but not glaring.",
          "bulletPoints": [
            "Keep fresh specimens moist and sealed; keep preserved ones in fixative and labelled.",
            "Carry the microscope with two hands, on the arm and under the base.",
            "Begin on low power with the coarse knob, centre, then switch to high power.",
            "On high power focus with the fine adjustment only, to protect slide and lens.",
            "Total magnification = eyepiece times objective; 10 x by 40 x gives 400."
          ],
          "keyTakeaway": "Protect the specimen, protect the instrument, and always find the image on low power before you zoom in.",
          "realWorldExample": "A class at Cape Coast prepares a temporary wet mount of a leaf peel, centre it on low power, then swings to high power to count stomata, following the exact order an examiner expects."
        },
        {
          "title": "The Biological Drawing and Its Magnification",
          "content": "A biological drawing is a measured record, not an artwork. It is done in clean, single, unbroken pencil lines with no stippling, no shading and no colour, and it shows only what you can actually see through the lens or on the specimen, not a picture from memory. Outline the visible shapes, keep the proportions honest, and label each named part with a straight ruled line drawn horizontally, all labels kept on one side of the drawing with their leader lines, as far as possible, not crossing. Give the whole sheet a clear title stating the specimen and the view, for example transverse section of a dicot stem, and add the magnification so the reader knows the scale. That magnification is calculated, not guessed: it is the length you drew divided by the true length of the specimen, both reduced to the same unit first. If a cell is drawn 80 millimetres long and its real length is 0.4 millimetres, the magnification is 80 divided by 0.4, which is 200 times. Write the formula you used before substituting, because the method earns a mark even when a final number slips.",
          "bulletPoints": [
            "Use clean single lines; never shade, stipple or add colour in a biological drawing.",
            "Draw exactly what you observe, not a remembered diagram.",
            "Labels are horizontal, ruled with a straight line, on one side, and do not cross.",
            "Include a title naming the specimen and the view, and a stated magnification.",
            "Magnification = drawing length divided by real length, in the same unit; 80 mm over 0.4 mm is x200."
          ],
          "keyTakeaway": "The drawing earns marks for clean lines, correct labels, a title and a calculated magnification, all four being separate marking points.",
          "realWorldExample": "Paper 3 candidates measuring their own drawn cell length against the microscope-calibrated true length show the examiner a real calculation rather than a guessed scale."
        },
        {
          "title": "Designing a Fair Test and Scoring the Practical",
          "content": "A biological investigation is a fair test built on variables. The independent variable is the one factor you deliberately change, such as light intensity or fertilizer dose. The dependent variable is the outcome you measure, such as the rate of bubbling or the mass of a harvest. All the remaining factors, temperature, volume, species and timing, are controlled so they stay the same, because if two things change at once you cannot say which caused the result. A control adds a standard for comparison, a setup treated identically except that the tested factor is absent or set to zero. To make the test reliable you repeat each measurement several times, record the results in a labelled table whose column headings carry the variable and its unit, spot and explain any anomalous value, and report the mean of the consistent repeats. On graph paper the independent variable goes on the horizontal axis and the dependent variable on the vertical axis, plotted with even scales and then joined by a smooth line or curve of best fit rather than a jagged stroke. Name sources of error honestly, parallax on a scale, a mis-set instrument, evaporation, stopwatch slips and natural variation between living specimens, and say how you reduce them. In the WASSCE practical the marks sit with method, careful observation, correct units and tidy presentation, so write what you did and saw, keep decimals consistent, and finish by stating the conclusion that the results support.",
          "bulletPoints": [
            "Independent variable is changed, dependent variable is measured, all others are controlled.",
            "A control is treated the same except that the tested variable is absent or zero.",
            "Repeat readings, identify anomalies, and report the mean of the consistent values.",
            "Tables carry headings with units and consistent decimal places.",
            "Graph: independent on the x-axis, dependent on the y-axis, with a line of best fit."
          ],
          "keyTakeaway": "Change one thing, measure one thing, keep the rest fixed, repeat, and present it cleanly; that chain is where the marks are.",
          "realWorldExample": "A germination investigation at a school nursery in Dawenya uses one tray of treated seed and one untreated control tray, keeps water and temperature equal, and counts the mean of five repeats."
        }
      ],
      "commonMistakes": [
        "Shading or colouring a biological drawing; the convention is clean single lines, and shading earns no mark and wastes time.",
        "Focusing on high power with the coarse adjustment knob, which can crash the objective into the slide.",
        "Calculating magnification without converting both lengths to the same unit, so a mix of millimetres and micrometres gives a wrong answer.",
        "Changing two variables at once in an experiment and so failing to make it a fair test."
      ],
      "wassceExamTips": [
        "Paper 3 (practical) pays a separate mark for the title and another for the magnification, so never leave either off a drawing.",
        "Write the magnification formula before substituting numbers; method marks are recorded even when the arithmetic slips.",
        "In an investigation question, name the independent variable, the dependent variable and one controlled variable in one sentence to bank three quick marks.",
        "Read a meniscus or scale with your eye level with the mark to avoid parallax, and mention this as a precaution when asked."
      ],
      "summaryChecklist": [
        "Can I carry, set up and focus a light microscope from low to high power safely?",
        "Can I make a biological drawing with clean lines, ruled labels, a title and a magnification?",
        "Can I calculate drawing magnification and total microscope magnification correctly?",
        "Can I design a fair test naming independent, dependent and controlled variables and a control?",
        "Can I tabulate repeats with units, plot a line of best fit and name sources of error?"
      ]
    },
    "examples": [
      {
        "id": "ex-bio-practical-1",
        "title": "Finding the Magnification of a Drawing",
        "problem": "In a biological drawing a cell is drawn 80 millimetres long. Its true length, measured from a stage-calibrated scale, is 0.4 millimetres. Calculate the magnification of the drawing.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the formula, magnification = length of drawing divided by real length of specimen.",
          "Step 2 (M1): Check the units; both 80 mm and 0.4 mm are already in millimetres, so no conversion is needed.",
          "Step 3 (M1): Substitute, magnification = 80 mm / 0.4 mm.",
          "Step 4 (A1): 80 divided by 0.4 is 200, so the magnification is x200."
        ],
        "keyTakeaway": "Reduce both lengths to one unit, then divide drawing length by real length to state the magnification."
      },
      {
        "id": "ex-bio-practical-2",
        "title": "Estimating a Population by Mark-Release-Recapture",
        "problem": "In a pond study, 60 snails are caught, marked and released. Later 50 snails are caught, and 10 of them carry a mark. Estimate the total population using the Lincoln index, total = (marked first x second catch) divided by recaptured marked.",
        "stepByStepSolution": [
          "Step 1 (M1): Identify the values, first marked M = 60, second catch C = 50, recaptured marked R = 10.",
          "Step 2 (M1): Substitute into total = (M x C) / R = (60 x 50) / 10.",
          "Step 3 (M1): Multiply first, 60 x 50 = 3000.",
          "Step 4 (A1): Divide by 10, so the estimated population = 300 snails."
        ],
        "keyTakeaway": "The Lincoln index scales the second catch by how many marked ones came back, giving an estimate of the whole population."
      }
    ],
    "quiz": {
      "id": "quiz-bio-practical",
      "topicId": "shs3-bio-t3-practical-biology-investigation-skills",
      "title": "Practical Biology Skills Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bio-practical-1",
          "quizId": "quiz-bio-practical",
          "questionText": "When switching from a low-power to a high-power objective, the image should be brought into sharp focus using",
          "optionA": "the coarse adjustment knob only",
          "optionB": "the stage clips",
          "optionC": "more oil on the slide",
          "optionD": "the fine adjustment knob only",
          "correctOption": "D",
          "subConcept": "Microscope technique",
          "explanation": "On high power the working distance is tiny, so only the fine adjustment is safe; the coarse knob can drive the objective into the slide. Focus is found on low power first with the coarse knob.",
          "remediationTip": "Write the order, find on low with coarse, centre, then refine on high with fine."
        },
        {
          "id": "q-bio-practical-2",
          "quizId": "quiz-bio-practical",
          "questionText": "Which feature is required in a correct biological drawing?",
          "optionA": "soft shading to show depth",
          "optionB": "clean single unbroken lines with no shading",
          "optionC": "colour to make parts clear",
          "optionD": "labels drawn with freehand curved lines",
          "correctOption": "B",
          "subConcept": "Biological drawing",
          "explanation": "Biological drawings use clean single lines, horizontal ruled labels on one side, a title and a magnification. Shading and colour are not accepted.",
          "remediationTip": "Re-draw one practice sketch in plain lines and add ruled horizontal labels."
        },
        {
          "id": "q-bio-practical-3",
          "quizId": "quiz-bio-practical",
          "questionText": "A student investigates how light intensity affects the rate of bubbling in pond weed. In this fair test, the light intensity is the",
          "optionA": "dependent variable",
          "optionB": "controlled variable",
          "optionC": "independent variable",
          "optionD": "constant control",
          "correctOption": "C",
          "subConcept": "Variables",
          "explanation": "The factor the student deliberately changes is the independent variable. The bubbling rate measured back is the dependent variable, and factors like temperature are controlled.",
          "remediationTip": "Label any investigation with the words change, measure and keep the same to sort the variables."
        },
        {
          "id": "q-bio-practical-4",
          "quizId": "quiz-bio-practical",
          "questionText": "A cell 0.2 millimetres long is drawn at a magnification of x100. What is its length in the drawing?",
          "optionA": "20 millimetres",
          "optionB": "0.002 millimetres",
          "optionC": "2 millimetres",
          "optionD": "200 millimetres",
          "correctOption": "A",
          "subConcept": "Magnification",
          "explanation": "Drawing length = real length x magnification = 0.2 mm x 100 = 20 mm. This is the magnification formula rearranged, not a unit slip.",
          "remediationTip": "Memorise drawing = real x magnification and check with a quick estimate."
        },
        {
          "id": "q-bio-practical-5",
          "quizId": "quiz-bio-practical",
          "questionText": "Repeating each reading several times and recording the mean mainly improves the",
          "optionA": "colour of the graph",
          "optionB": "reliability of the data",
          "optionC": "value of the equipment",
          "optionD": "number of variables tested",
          "correctOption": "B",
          "subConcept": "Errors and reliability",
          "explanation": "Repeats let you spot anomalies and average them out, making results consistent, that is reliable. Reliability is not the same as validity, which asks whether the test measures what it claims.",
          "remediationTip": "Define reliability as consistency of repeats in your own words and give one example."
        }
      ]
    }
  }
];
