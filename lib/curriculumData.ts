import { CurriculumSubject, CurriculumTopic } from './types';

export const CURRICULUM_SUBJECTS: CurriculumSubject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    code: 'MATH',
    icon: 'Calculator',
    color: 'from-blue-600 to-indigo-700',
    displayOrder: 1,
  },
  {
    id: 'science',
    name: 'Integrated Science',
    code: 'SCI',
    icon: 'FlaskConical',
    color: 'from-emerald-600 to-teal-700',
    displayOrder: 2,
  },
  {
    id: 'english',
    name: 'English Language',
    code: 'ENG',
    icon: 'BookOpen',
    color: 'from-amber-600 to-orange-700',
    displayOrder: 3,
  },
  {
    id: 'social',
    name: 'Social Studies',
    code: 'SOC',
    icon: 'Globe2',
    color: 'from-purple-600 to-pink-700',
    displayOrder: 4,
  },
  {
    id: 'ict',
    name: 'Computing / ICT',
    code: 'ICT',
    icon: 'Cpu',
    color: 'from-cyan-600 to-blue-700',
    displayOrder: 5,
  },
  {
    id: 'rme',
    name: 'Religious & Moral Education',
    code: 'RME',
    icon: 'HeartHandshake',
    color: 'from-rose-600 to-red-700',
    displayOrder: 6,
  },
];

export const JHS_CURRICULUM_TOPICS: CurriculumTopic[] = [
  // ==========================================
  // JHS 1 - MATHEMATICS
  // ==========================================
  {
    id: 'jhs1-math-t1-sets',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Sets and Operations on Sets',
    description: 'Learn set notation, types of sets, union, intersection, and Venn diagrams.',
    isFreeTrial: true,
    keyNotes: `A set is a well-defined collection of distinct objects or elements.
• Empty / Null Set: A set with no elements, denoted by ∅ or {}.
• Finite Set: Elements can be counted (e.g., factors of 12).
• Infinite Set: Elements are endless (e.g., set of prime numbers).
• Union of Sets (A ∪ B): The set of all elements belonging to set A, set B, or both.
• Intersection of Sets (A ∩ B): The set of elements that are common to both A and B.
• Subset (A ⊆ B): Every element in A is also present in set B.`,
    quiz: {
      id: 'quiz-jhs1-math-sets',
      topicId: 'jhs1-math-t1-sets',
      title: 'JHS 1 Sets & Operations Mastery Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-sets-1',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'If A = {2, 4, 6, 8} and B = {4, 8, 12}, find A ∩ B.',
          optionA: '{2, 6, 12}',
          optionB: '{4, 8}',
          optionC: '{2, 4, 6, 8, 12}',
          optionD: '∅',
          correctOption: 'B',
          explanation: 'The intersection (∩) consists of common elements found in both sets: 4 and 8.',
        },
        {
          id: 'q-sets-2',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'What is the symbol used to denote an empty or null set?',
          optionA: '∪',
          optionB: '∩',
          optionC: '∅',
          optionD: '⊆',
          correctOption: 'C',
          explanation: 'The null or empty set containing zero members is represented by ∅ or {}.',
        },
        {
          id: 'q-sets-3',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'Given set P = {1, 3, 5} and set Q = {2, 4}, find P ∪ Q.',
          optionA: '{1, 2, 3, 4, 5}',
          optionB: '{1, 3, 5}',
          optionC: '{}',
          optionD: '{2, 4}',
          correctOption: 'A',
          explanation: 'The union (∪) combines all distinct elements from both sets into one single set.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t2-fractions',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 2,
    title: 'Fractions, Decimals & Percentages',
    description: 'Master operations with proper, improper, mixed fractions and decimal conversions.',
    isFreeTrial: false,
    keyNotes: `Fractions represent part of a whole:
• Proper Fraction: Numerator is smaller than denominator (e.g., 3/4).
• Improper Fraction: Numerator is equal to or larger than denominator (e.g., 7/5).
• Mixed Fraction: Whole number with a proper fraction (e.g., 1 2/5).
• Adding / Subtracting: Always find the Lowest Common Multiple (LCM) of the denominators first.
• Converting to Percentage: Multiply the fraction or decimal by 100%.`,
    quiz: {
      id: 'quiz-jhs1-math-fractions',
      topicId: 'jhs1-math-t2-fractions',
      title: 'Fractions & Percentages Practice Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-frac-1',
          quizId: 'quiz-jhs1-math-fractions',
          questionText: 'Simplify 3/4 + 1/2.',
          optionA: '4/6',
          optionB: '1 1/4',
          optionC: '5/4',
          optionD: '1 1/4 (which is 5/4)',
          correctOption: 'D',
          explanation: 'Find LCM of 4 and 2 = 4. (3 + 2)/4 = 5/4 = 1 1/4.',
        },
        {
          id: 'q-frac-2',
          quizId: 'quiz-jhs1-math-fractions',
          questionText: 'Convert 0.35 to a percentage.',
          optionA: '3.5%',
          optionB: '35%',
          optionC: '350%',
          optionD: '0.035%',
          correctOption: 'B',
          explanation: '0.35 × 100% = 35%.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - INTEGRATED SCIENCE
  // ==========================================
  {
    id: 'jhs1-sci-t1-matter',
    subjectId: 'science',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Matter and Its States',
    description: 'Explore solids, liquids, gases, physical changes, and particle theory.',
    isFreeTrial: true,
    keyNotes: `Matter is anything that has mass and occupies space.
• Three Main States: Solid, Liquid, and Gas.
• Solid: Closely packed particles, fixed volume and definite shape.
• Liquid: Loosely packed, fixed volume but takes shape of container.
• Gas: Very loosely packed, high kinetic energy, no fixed shape or volume.
• Changes of State:
  - Melting: Solid to Liquid (gain heat).
  - Freezing / Solidification: Liquid to Solid (lose heat).
  - Evaporation / Boiling: Liquid to Gas.
  - Condensation: Gas to Liquid.
  - Sublimation: Solid directly to Gas without passing through liquid (e.g., Camphor/Dry Ice).`,
    quiz: {
      id: 'quiz-jhs1-sci-matter',
      topicId: 'jhs1-sci-t1-matter',
      title: 'States of Matter Diagnostic Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-matter-1',
          quizId: 'quiz-jhs1-sci-matter',
          questionText: 'The process whereby a solid turns directly into a gas without becoming a liquid is known as:',
          optionA: 'Evaporation',
          optionB: 'Condensation',
          optionC: 'Sublimation',
          optionD: 'Melting',
          correctOption: 'C',
          explanation: 'Sublimation is the direct transition from solid to gas (e.g., camphor balls, solid iodine).',
        },
        {
          id: 'q-matter-2',
          quizId: 'quiz-jhs1-sci-matter',
          questionText: 'Which state of matter has neither a fixed shape nor a fixed volume?',
          optionA: 'Solid',
          optionB: 'Liquid',
          optionC: 'Gas',
          optionD: 'Crystal',
          correctOption: 'C',
          explanation: 'Gas molecules are spaced far apart with minimal intermolecular forces, filling any volume.',
        },
      ],
    },
  },
  {
    id: 'jhs1-sci-t2-livingcells',
    subjectId: 'science',
    level: 'JHS 1',
    term: 2,
    orderIndex: 2,
    title: 'Living Cells and Organization of Life',
    description: 'Plant and animal cells, organelles, cell wall, chloroplast, and cell differentiation.',
    isFreeTrial: false,
    keyNotes: `The cell is the basic structural and functional unit of all living organisms.
• Cell Components:
  - Nucleus: Controls all cell activities and stores genetic material (DNA).
  - Cell Membrane: Semi-permeable barrier controlling entry and exit of substances.
  - Cytoplasm: Jelly-like fluid where metabolic reactions take place.
  - Mitochondria: Powerhouse of the cell, generates ATP energy through cellular respiration.
• Differences between Plant & Animal Cells:
  - Plant cells have a rigid cellulose Cell Wall and Chloroplasts for photosynthesis; animal cells do not.
  - Plant cells have a large central permanent vacuole; animal cells have small temporary vacuoles.`,
    quiz: {
      id: 'quiz-jhs1-sci-cells',
      topicId: 'jhs1-sci-t2-livingcells',
      title: 'Plant and Animal Cells Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-cell-1',
          quizId: 'quiz-jhs1-sci-cells',
          questionText: 'Which organelle is responsible for generating energy in the cell?',
          optionA: 'Ribosome',
          optionB: 'Mitochondrion',
          optionC: 'Vacuole',
          optionD: 'Endoplasmic Reticulum',
          correctOption: 'B',
          explanation: 'Mitochondria are often referred to as the powerhouses of the cell as they produce ATP.',
        },
        {
          id: 'q-cell-2',
          quizId: 'quiz-jhs1-sci-cells',
          questionText: 'Which structure is present in a plant cell but absent in an animal cell?',
          optionA: 'Cell membrane',
          optionB: 'Nucleus',
          optionC: 'Cellulose cell wall',
          optionD: 'Cytoplasm',
          correctOption: 'C',
          explanation: 'Plant cells have an outer cellulose cell wall providing structural rigidity.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 2 - MATHEMATICS
  // ==========================================
  {
    id: 'jhs2-math-t1-algebra',
    subjectId: 'math',
    level: 'JHS 2',
    term: 1,
    orderIndex: 1,
    title: 'Algebraic Expressions & Factorization',
    description: 'Simplifying algebraic terms, expanding brackets, and common monomial factorization.',
    isFreeTrial: true,
    keyNotes: `Algebra uses letters (variables) to represent numbers.
• Like Terms: Terms with identical variable parts and powers (e.g., 3x and 7x). Only like terms can be added or subtracted.
• Distributive Law: a(b + c) = ab + ac.
• Factorization: Finding the highest common factor (HCF) and rewriting as a product.
  Example: 6x² + 9x = 3x(2x + 3).`,
    quiz: {
      id: 'quiz-jhs2-math-algebra',
      topicId: 'jhs2-math-t1-algebra',
      title: 'JHS 2 Algebraic Expressions Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-alg-1',
          quizId: 'quiz-jhs2-math-algebra',
          questionText: 'Simplify: 5x + 3y - 2x + 4y.',
          optionA: '3x + 7y',
          optionB: '7x + 7y',
          optionC: '10xy',
          optionD: '3x - y',
          correctOption: 'A',
          explanation: 'Group like terms: (5x - 2x) + (3y + 4y) = 3x + 7y.',
        },
        {
          id: 'q-alg-2',
          quizId: 'quiz-jhs2-math-algebra',
          questionText: 'Factorize completely: 8xy - 12x.',
          optionA: '2x(4y - 6)',
          optionB: '4x(2y - 3)',
          optionC: '4(2xy - 3x)',
          optionD: 'x(8y - 12)',
          correctOption: 'B',
          explanation: 'The highest common factor of 8xy and 12x is 4x. Factoring out gives 4x(2y - 3).',
        },
      ],
    },
  },
  {
    id: 'jhs2-math-t2-linearequations',
    subjectId: 'math',
    level: 'JHS 2',
    term: 2,
    orderIndex: 2,
    title: 'Linear Equations in One Variable',
    description: 'Solve first-degree linear equations with fractions and word problems.',
    isFreeTrial: false,
    keyNotes: `A linear equation contains variables with power 1.
• Goal: Isolate the unknown variable on one side.
• Operations must balance: Whatever is done to one side must be done to the other side.
• Clearing fractions: Multiply every term by the LCM of all denominators.`,
    quiz: {
      id: 'quiz-jhs2-math-linearequations',
      topicId: 'jhs2-math-t2-linearequations',
      title: 'Linear Equations Challenge Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-lineq-1',
          quizId: 'quiz-jhs2-math-linearequations',
          questionText: 'Solve for x: 3x - 7 = 14.',
          optionA: 'x = 3',
          optionB: 'x = 7',
          optionC: 'x = 21',
          optionD: 'x = 5',
          correctOption: 'B',
          explanation: '3x = 14 + 7 => 3x = 21 => x = 7.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 2 - INTEGRATED SCIENCE
  // ==========================================
  {
    id: 'jhs2-sci-t1-digestion',
    subjectId: 'science',
    level: 'JHS 2',
    term: 1,
    orderIndex: 1,
    title: 'The Human Digestive System',
    description: 'Alimentary canal, mechanical vs chemical digestion, and digestive enzymes.',
    isFreeTrial: true,
    keyNotes: `Digestion is the breakdown of large insoluble food molecules into smaller water-soluble molecules for absorption.
• Mouth: Teeth chew food (mechanical); Salivary amylase breaks starch into maltose (chemical).
• Oesophagus: Peristalsis pushes food bolus to the stomach.
• Stomach: Hydrochloric acid kills germs; Pepsin breaks proteins into peptones.
• Small Intestine (Duodenum & Ileum):
  - Bile from liver emulsifies fats.
  - Pancreatic enzymes (amylase, trypsin, lipase) complete breakdown.
  - Villi absorb digested nutrients into the bloodstream.
• Large Intestine (Colon): Absorbs water and minerals; rectum stores feces.`,
    quiz: {
      id: 'quiz-jhs2-sci-digestion',
      topicId: 'jhs2-sci-t1-digestion',
      title: 'Human Digestion & Enzymes Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-dig-1',
          quizId: 'quiz-jhs2-sci-digestion',
          questionText: 'Where in the human digestive system does the absorption of digested food take place?',
          optionA: 'Stomach',
          optionB: 'Small Intestine (Ileum)',
          optionC: 'Large Intestine',
          optionD: 'Oesophagus',
          correctOption: 'B',
          explanation: 'The inner wall of the small intestine is covered with tiny finger-like projections called villi that absorb nutrients.',
        },
        {
          id: 'q-dig-2',
          quizId: 'quiz-jhs2-sci-digestion',
          questionText: 'What is the role of hydrochloric acid (HCl) in gastric juice?',
          optionA: 'Emulsifies fat droplets',
          optionB: 'Provides an acidic medium and kills harmful bacteria',
          optionC: 'Digests starch into glucose',
          optionD: 'Converts fats into fatty acids',
          correctOption: 'B',
          explanation: 'Hydrochloric acid in the stomach creates the acidic pH needed for pepsin and destroys ingested microbes.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 3 - MATHEMATICS (BECE Canditates)
  // ==========================================
  {
    id: 'jhs3-math-t1-vectors',
    subjectId: 'math',
    level: 'JHS 3',
    term: 1,
    orderIndex: 1,
    title: 'Vectors and Bearings (BECE Focus)',
    description: 'Column vectors, addition, scalar multiplication, magnitude, and 3-figure bearings.',
    isFreeTrial: true,
    keyNotes: `A vector has both magnitude and direction.
• Column Vector form: [x, y] where x is horizontal displacement and y is vertical displacement.
• Magnitude |r| = √(x² + y²).
• Bearings: Measured clockwise starting from True North (000° to 360°). Always written in three figures (e.g., 045°, 270°).`,
    quiz: {
      id: 'quiz-jhs3-math-vectors',
      topicId: 'jhs3-math-t1-vectors',
      title: 'Vectors & Bearings BECE Test',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-vec-1',
          quizId: 'quiz-jhs3-math-vectors',
          questionText: 'If vector u = (3, 4), what is the magnitude |u|?',
          optionA: '7 units',
          optionB: '5 units',
          optionC: '25 units',
          optionD: '1 unit',
          correctOption: 'B',
          explanation: '|u| = √(3² + 4²) = √(9 + 16) = √25 = 5 units.',
        },
        {
          id: 'q-vec-2',
          quizId: 'quiz-jhs3-math-vectors',
          questionText: 'What is the three-figure bearing of South-West (SW)?',
          optionA: '045°',
          optionB: '135°',
          optionC: '225°',
          optionD: '315°',
          correctOption: 'C',
          explanation: 'North = 000°, East = 090°, South = 180°, West = 270°. South-West is exactly midway: 180° + 45° = 225°.',
        },
      ],
    },
  },
  {
    id: 'jhs3-math-t2-businessmath',
    subjectId: 'math',
    level: 'JHS 3',
    term: 2,
    orderIndex: 2,
    title: 'Business Mathematics: Profit, Loss & Simple Interest',
    description: 'Calculate cost price, selling price, profit percentage, and Simple Interest (I = PRT / 100).',
    isFreeTrial: false,
    keyNotes: `Essential financial formulas for BECE:
• Profit = Selling Price (SP) - Cost Price (CP).
• Percentage Profit = (Profit / CP) × 100%.
• Simple Interest Formula: I = (P × R × T) / 100, where:
  - P = Principal amount borrowed or invested.
  - R = Rate per annum (%).
  - T = Time in years.
• Total Amount (A) = Principal (P) + Interest (I).`,
    quiz: {
      id: 'quiz-jhs3-math-biz',
      topicId: 'jhs3-math-t2-businessmath',
      title: 'Business Math & Simple Interest Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-biz-1',
          quizId: 'quiz-jhs3-math-biz',
          questionText: 'Calculate the simple interest on GHS 500 for 2 years at 10% per annum.',
          optionA: 'GHS 50',
          optionB: 'GHS 100',
          optionC: 'GHS 200',
          optionD: 'GHS 600',
          correctOption: 'B',
          explanation: 'I = (P × R × T) / 100 = (500 × 10 × 2) / 100 = 10,000 / 100 = GHS 100.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 3 - INTEGRATED SCIENCE
  // ==========================================
  {
    id: 'jhs3-sci-t1-circuits',
    subjectId: 'science',
    level: 'JHS 3',
    term: 1,
    orderIndex: 1,
    title: 'Electric Current, Voltage & Circuits',
    description: 'Series vs parallel circuits, Ohm’s Law (V = IR), conductors, and insulators.',
    isFreeTrial: true,
    keyNotes: `Electricity is the flow of electric charge (electrons).
• Current (I): Measured in Amperes (A) using an ammeter connected in SERIES.
• Potential Difference / Voltage (V): Measured in Volts (V) using a voltmeter in PARALLEL.
• Resistance (R): Measured in Ohms (Ω).
• Ohm’s Law: V = I × R.
• Series Circuit: One continuous path; if one bulb blows, all go off.
• Parallel Circuit: Multiple paths; each component receives the full supply voltage.`,
    quiz: {
      id: 'quiz-jhs3-sci-circuits',
      topicId: 'jhs3-sci-t1-circuits',
      title: 'Electricity & Circuits BECE Master Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-circ-1',
          quizId: 'quiz-jhs3-sci-circuits',
          questionText: 'A circuit has a resistance of 4 Ohms and a current of 3 Amperes. What is the voltage?',
          optionA: '0.75 Volts',
          optionB: '1.33 Volts',
          optionC: '7 Volts',
          optionD: '12 Volts',
          correctOption: 'D',
          explanation: 'According to Ohm’s Law, V = I × R = 3 A × 4 Ω = 12 V.',
        },
        {
          id: 'q-circ-2',
          quizId: 'quiz-jhs3-sci-circuits',
          questionText: 'How is an ammeter connected to measure electric current in a circuit?',
          optionA: 'In parallel',
          optionB: 'In series',
          optionC: 'Across the cell only',
          optionD: 'In reverse bias',
          correctOption: 'B',
          explanation: 'An ammeter has very low internal resistance and must be connected in series to measure total current passing through.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - COMPUTING / ICT
  // ==========================================
  {
    id: 'jhs1-ict-t1-hardware',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Introduction to Computer Systems & Hardware',
    description: 'Input, processing, output, and secondary storage devices.',
    isFreeTrial: true,
    keyNotes: `A computer is an electronic device that accepts data as input, processes it, and produces information as output.
• Input Devices: Keyboard, Mouse, Scanner, Microphone.
• Central Processing Unit (CPU): The brain of the computer (ALU + Control Unit).
• Output Devices: Monitor (VDU), Printer, Speakers, Projector.
• Storage Devices: RAM (volatile/temporary), ROM (non-volatile/permanent), SSD, Flash drive.`,
    quiz: {
      id: 'quiz-jhs1-ict-hardware',
      topicId: 'jhs1-ict-t1-hardware',
      title: 'Computer Hardware Fundamentals Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-ict-1',
          quizId: 'quiz-jhs1-ict-hardware',
          questionText: 'Which unit inside the CPU performs arithmetic and logical decisions?',
          optionA: 'Control Unit (CU)',
          optionB: 'Arithmetic and Logic Unit (ALU)',
          optionC: 'Cache Memory',
          optionD: 'Hard Disk',
          correctOption: 'B',
          explanation: 'The ALU (Arithmetic Logic Unit) executes all mathematical calculations and comparisons.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - ENGLISH LANGUAGE
  // ==========================================
  {
    id: 'jhs1-eng-t1-partsofspeech',
    subjectId: 'english',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Parts of Speech & Sentence Construction',
    description: 'Nouns, pronouns, verbs, adverbs, adjectives, conjunctions, and prepositions.',
    isFreeTrial: true,
    keyNotes: `Every English word belongs to one of eight parts of speech:
• Noun: Name of a person, animal, place, or thing.
• Pronoun: Replaces a noun (he, she, they, it).
• Verb: An action or state-of-being word.
• Adjective: Describes or qualifies a noun.
• Adverb: Modifies a verb, adjective, or another adverb.
• Preposition: Shows relationship of place, direction, or time (in, on, under).
• Conjunction: Connects clauses or words (and, but, although).`,
    quiz: {
      id: 'quiz-jhs1-eng-speech',
      topicId: 'jhs1-eng-t1-partsofspeech',
      title: 'Parts of Speech Diagnostic Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-eng-1',
          quizId: 'quiz-jhs1-eng-speech',
          questionText: 'Identify the adverb in the sentence: "The student answered the questions quickly and correctly."',
          optionA: 'student',
          optionB: 'questions',
          optionC: 'quickly',
          optionD: 'answered',
          correctOption: 'C',
          explanation: '"Quickly" describes how the action was performed, making it an adverb of manner.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - SOCIAL STUDIES
  // ==========================================
  {
    id: 'jhs1-soc-t1-environment',
    subjectId: 'social',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Our Environment & Environmental Degradation',
    description: 'Physical and social environment, pollution, galamsey, deforestation, and preservation.',
    isFreeTrial: true,
    keyNotes: `Environment refers to all external conditions and surroundings in which living organisms exist.
• Components:
  - Physical Environment: Land, water bodies, air, plants, animals.
  - Social Environment: Cultural, political, religious, and economic institutions.
• Environmental Problems in Ghana:
  - Illegal mining (Galamsey): Destroys water bodies (Pra, Birim, Ankobra) and farmlands.
  - Deforestation: Indiscriminate tree felling for timber and charcoal.
  - Plastic Pollution: Blocked gutters leading to urban flooding.`,
    quiz: {
      id: 'quiz-jhs1-soc-env',
      topicId: 'jhs1-soc-t1-environment',
      title: 'Environment & Conservation Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-soc-1',
          quizId: 'quiz-jhs1-soc-env',
          questionText: 'Which of the following is a major cause of water pollution in Ghanaian mining communities?',
          optionA: 'Afforestation',
          optionB: 'Illegal small-scale mining (Galamsey)',
          optionC: 'Crop rotation',
          optionD: 'Contour plowing',
          correctOption: 'B',
          explanation: 'Galamsey releases toxic heavy metals (mercury, lead) into major rivers, rendering them unsafe.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - RELIGIOUS & MORAL EDUCATION (RME)
  // ==========================================
  {
    id: 'jhs1-rme-t1-creation',
    subjectId: 'rme',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Creation and the Environment in the Three Main Religions',
    description: 'Christian, Islamic, and Indigenous Ghanaian beliefs on creation and human stewardship.',
    isFreeTrial: true,
    keyNotes: `All three major religions in Ghana (Christianity, Islam, and Indigenous Traditional Religion) agree that:
• God (The Supreme Being / Onyankopon / Allah / Mawu) is the Creator of heaven and earth.
• Humans have been appointed as caretakers / stewards of creation.
• Protection of the environment is considered a moral and religious obligation.`,
    quiz: {
      id: 'quiz-jhs1-rme-creation',
      topicId: 'jhs1-rme-t1-creation',
      title: 'RME Creation & Moral Values Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-rme-1',
          quizId: 'quiz-jhs1-rme-creation',
          questionText: 'In Ghanaian traditional religion, why are sacred groves and rivers preserved?',
          optionA: 'For commercial tourism only',
          optionB: 'As habitats of spiritual deities and protectors of ecology',
          optionC: 'For foreign export',
          optionD: 'To prevent farming forever',
          correctOption: 'B',
          explanation: 'Sacred groves and taboos protected water sources and vital wildlife biodiversity in traditional society.',
        },
      ],
    },
  },
];
