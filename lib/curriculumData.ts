import { CurriculumSubject, CurriculumTopic } from './types';
import { TOPIC_DETAILED_NOTES } from './curriculumDetailedNotes';
import { JHS1_MATH_TOPICS } from './curriculumJhs1Math';
import { JHS1_MATH_QUIZZES } from './curriculumJhs1MathQuizzes';
import { JHS1_SCIENCE_TOPICS } from './curriculumJhs1Science';
import { JHS1_SCIENCE_DETAILED_NOTES } from './curriculumDetailedNotesScience';
import { JHS1_SCIENCE_QUIZZES } from './curriculumJhs1ScienceQuizzes';

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

const BASE_JHS_TOPICS: CurriculumTopic[] = [
  // ==========================================
  // JHS 1 - MATHEMATICS (All 15 GES Topics)
  // ==========================================
  ...JHS1_MATH_TOPICS,

  // ==========================================
  // JHS 1 - INTEGRATED SCIENCE (All 15 GES Topics)
  // ==========================================
  ...JHS1_SCIENCE_TOPICS,

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

export const JHS_CURRICULUM_TOPICS: CurriculumTopic[] = BASE_JHS_TOPICS.map((topic) => ({
  ...topic,
  detailedNotes:
    TOPIC_DETAILED_NOTES[topic.id] ||
    JHS1_SCIENCE_DETAILED_NOTES[topic.id] ||
    topic.detailedNotes,
  quiz:
    JHS1_MATH_QUIZZES[topic.id] ||
    JHS1_SCIENCE_QUIZZES[topic.id] ||
    topic.quiz,
}));

