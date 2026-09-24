import { CurriculumSubject, CurriculumTopic } from './types';
import { TOPIC_DETAILED_NOTES } from './curriculumDetailedNotes';
import { JHS1_MATH_TOPICS } from './curriculumJhs1Math';
import { JHS1_MATH_QUIZZES } from './curriculumJhs1MathQuizzes';
import { JHS1_SCIENCE_TOPICS } from './curriculumJhs1Science';
import { JHS1_SCIENCE_DETAILED_NOTES } from './curriculumDetailedNotesScience';
import { JHS1_SCIENCE_QUIZZES } from './curriculumJhs1ScienceQuizzes';
import { JHS1_ENGLISH_TOPICS } from './curriculumJhs1English';
import { JHS1_ENGLISH_DETAILED_NOTES } from './curriculumDetailedNotesEnglish';
import { JHS1_ENGLISH_QUIZZES } from './curriculumJhs1EnglishQuizzes';
import { JHS1_SOCIAL_TOPICS } from './curriculumJhs1Social';
import { JHS1_SOCIAL_DETAILED_NOTES } from './curriculumDetailedNotesSocial';
import { JHS1_SOCIAL_QUIZZES } from './curriculumJhs1SocialQuizzes';
import { JHS1_COMPUTING_TOPICS } from './curriculumJhs1Computing';
import { JHS1_COMPUTING_DETAILED_NOTES } from './curriculumDetailedNotesComputing';
import { JHS1_COMPUTING_QUIZZES } from './curriculumJhs1ComputingQuizzes';
import { JHS1_RME_TOPICS } from './curriculumJhs1Rme';
import { JHS1_RME_DETAILED_NOTES } from './curriculumDetailedNotesRme';
import { JHS1_RME_QUIZZES } from './curriculumJhs1RmeQuizzes';

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
  // JHS 1 - COMPUTING / ICT (All 15 GES Topics)
  // ==========================================
  ...JHS1_COMPUTING_TOPICS,

  // ==========================================
  // JHS 1 - ENGLISH LANGUAGE (All 15 GES Topics)
  // ==========================================
  ...JHS1_ENGLISH_TOPICS,

  // ==========================================
  // JHS 1 - SOCIAL STUDIES (All 15 GES Topics)
  // ==========================================
  ...JHS1_SOCIAL_TOPICS,

  // ==========================================
  // JHS 1 - RELIGIOUS & MORAL EDUCATION (All 15 GES Topics)
  // ==========================================
  ...JHS1_RME_TOPICS,
];

export const JHS_CURRICULUM_TOPICS: CurriculumTopic[] = BASE_JHS_TOPICS.map((topic) => ({
  ...topic,
  detailedNotes:
    TOPIC_DETAILED_NOTES[topic.id] ||
    JHS1_SCIENCE_DETAILED_NOTES[topic.id] ||
    JHS1_ENGLISH_DETAILED_NOTES[topic.id] ||
    JHS1_SOCIAL_DETAILED_NOTES[topic.id] ||
    JHS1_COMPUTING_DETAILED_NOTES[topic.id] ||
    JHS1_RME_DETAILED_NOTES[topic.id] ||
    topic.detailedNotes,
  quiz:
    JHS1_MATH_QUIZZES[topic.id] ||
    JHS1_SCIENCE_QUIZZES[topic.id] ||
    JHS1_ENGLISH_QUIZZES[topic.id] ||
    JHS1_SOCIAL_QUIZZES[topic.id] ||
    JHS1_COMPUTING_QUIZZES[topic.id] ||
    JHS1_RME_QUIZZES[topic.id] ||
    topic.quiz,
}));

