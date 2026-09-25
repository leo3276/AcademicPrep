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
import { JHS1_FRENCH_TOPICS } from './curriculumJhs1French';
import { JHS1_FRENCH_DETAILED_NOTES } from './curriculumDetailedNotesFrench';
import { JHS1_FRENCH_QUIZZES } from './curriculumJhs1FrenchQuizzes';
import { JHS1_TWI_TOPICS } from './curriculumJhs1Twi';
import { JHS1_TWI_DETAILED_NOTES } from './curriculumDetailedNotesTwi';
import { JHS1_TWI_QUIZZES } from './curriculumJhs1TwiQuizzes';
import { JHS1_CAREER_TECH_TOPICS } from './curriculumJhs1CareerTech';
import { JHS1_CAREER_TECH_DETAILED_NOTES } from './curriculumDetailedNotesCareerTech';
import { JHS1_CAREER_TECH_QUIZZES } from './curriculumJhs1CareerTechQuizzes';
import { JHS2_MATH_TOPICS } from './curriculumJhs2Math';
import { JHS2_MATH_DETAILED_NOTES } from './curriculumDetailedNotesJhs2Math';
import { JHS2_MATH_QUIZZES } from './curriculumJhs2MathQuizzes';
import { JHS2_SCIENCE_TOPICS } from './curriculumJhs2Science';
import { JHS2_SCIENCE_DETAILED_NOTES } from './curriculumDetailedNotesJhs2Science';
import { JHS2_SCIENCE_QUIZZES } from './curriculumJhs2ScienceQuizzes';
import { JHS2_ENGLISH_TOPICS } from './curriculumJhs2English';
import { JHS2_ENGLISH_DETAILED_NOTES } from './curriculumDetailedNotesJhs2English';
import { JHS2_ENGLISH_QUIZZES } from './curriculumJhs2EnglishQuizzes';
import { JHS2_SOCIAL_TOPICS } from './curriculumJhs2Social';
import { JHS2_SOCIAL_DETAILED_NOTES } from './curriculumDetailedNotesJhs2Social';
import { JHS2_SOCIAL_QUIZZES } from './curriculumJhs2SocialQuizzes';

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
  {
    id: 'french',
    name: 'French Language',
    code: 'FRE',
    icon: 'Languages',
    color: 'from-sky-600 to-indigo-700',
    displayOrder: 7,
  },
  {
    id: 'twi',
    name: 'Ghanaian Language (Akuapem Twi)',
    code: 'TWI',
    icon: 'BookA',
    color: 'from-emerald-700 to-amber-700',
    displayOrder: 8,
  },
  {
    id: 'career-tech',
    name: 'Career Technology',
    code: 'CTECH',
    icon: 'Wrench',
    color: 'from-orange-600 to-amber-700',
    displayOrder: 9,
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
  // JHS 2 - MATHEMATICS (All 15 GES Topics)
  // ==========================================
  ...JHS2_MATH_TOPICS,

  // ==========================================
  // JHS 2 - INTEGRATED SCIENCE (All 15 GES Topics)
  // ==========================================
  ...JHS2_SCIENCE_TOPICS,

  // ==========================================
  // JHS 2 - ENGLISH LANGUAGE (All 15 GES Topics)
  // ==========================================
  ...JHS2_ENGLISH_TOPICS,

  // ==========================================
  // JHS 2 - SOCIAL STUDIES (All 15 GES Topics)
  // ==========================================
  ...JHS2_SOCIAL_TOPICS,

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

  // ==========================================
  // JHS 1 - FRENCH LANGUAGE (All 15 GES Topics)
  // ==========================================
  ...JHS1_FRENCH_TOPICS,

  // ==========================================
  // JHS 1 - GHANAIAN LANGUAGE (AKUAPEM TWI) (All 15 GES Topics)
  // ==========================================
  ...JHS1_TWI_TOPICS,

  // ==========================================
  // JHS 1 - CAREER TECHNOLOGY (All 15 GES Topics)
  // ==========================================
  ...JHS1_CAREER_TECH_TOPICS,
];

export const JHS_CURRICULUM_TOPICS: CurriculumTopic[] = BASE_JHS_TOPICS.map((topic) => ({
  ...topic,
  detailedNotes:
    TOPIC_DETAILED_NOTES[topic.id] ||
    JHS2_MATH_DETAILED_NOTES[topic.id] ||
    JHS2_SCIENCE_DETAILED_NOTES[topic.id] ||
    JHS2_ENGLISH_DETAILED_NOTES[topic.id] ||
    JHS2_SOCIAL_DETAILED_NOTES[topic.id] ||
    JHS1_SCIENCE_DETAILED_NOTES[topic.id] ||
    JHS1_ENGLISH_DETAILED_NOTES[topic.id] ||
    JHS1_SOCIAL_DETAILED_NOTES[topic.id] ||
    JHS1_COMPUTING_DETAILED_NOTES[topic.id] ||
    JHS1_RME_DETAILED_NOTES[topic.id] ||
    JHS1_FRENCH_DETAILED_NOTES[topic.id] ||
    JHS1_TWI_DETAILED_NOTES[topic.id] ||
    JHS1_CAREER_TECH_DETAILED_NOTES[topic.id] ||
    topic.detailedNotes,
  quiz:
    JHS1_MATH_QUIZZES[topic.id] ||
    JHS2_MATH_QUIZZES[topic.id] ||
    JHS2_SCIENCE_QUIZZES[topic.id] ||
    JHS2_ENGLISH_QUIZZES[topic.id] ||
    JHS2_SOCIAL_QUIZZES[topic.id] ||
    JHS1_SCIENCE_QUIZZES[topic.id] ||
    JHS1_ENGLISH_QUIZZES[topic.id] ||
    JHS1_SOCIAL_QUIZZES[topic.id] ||
    JHS1_COMPUTING_QUIZZES[topic.id] ||
    JHS1_RME_QUIZZES[topic.id] ||
    JHS1_FRENCH_QUIZZES[topic.id] ||
    JHS1_TWI_QUIZZES[topic.id] ||
    JHS1_CAREER_TECH_QUIZZES[topic.id] ||
    topic.quiz,
}));

