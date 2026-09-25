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
import { JHS2_COMPUTING_TOPICS } from './curriculumJhs2Computing';
import { JHS2_COMPUTING_DETAILED_NOTES } from './curriculumDetailedNotesJhs2Computing';
import { JHS2_COMPUTING_QUIZZES } from './curriculumJhs2ComputingQuizzes';
import { JHS2_RME_TOPICS } from './curriculumJhs2Rme';
import { JHS2_RME_DETAILED_NOTES } from './curriculumDetailedNotesJhs2Rme';
import { JHS2_RME_QUIZZES } from './curriculumJhs2RmeQuizzes';
import { JHS2_FRENCH_TOPICS } from './curriculumJhs2French';
import { JHS2_FRENCH_DETAILED_NOTES } from './curriculumDetailedNotesJhs2French';
import { JHS2_FRENCH_QUIZZES } from './curriculumJhs2FrenchQuizzes';
import { JHS2_TWI_TOPICS } from './curriculumJhs2Twi';
import { JHS2_TWI_DETAILED_NOTES } from './curriculumDetailedNotesJhs2Twi';
import { JHS2_TWI_QUIZZES } from './curriculumJhs2TwiQuizzes';
import { JHS2_CAREER_TECH_TOPICS } from './curriculumJhs2CareerTech';
import { JHS2_CAREER_TECH_DETAILED_NOTES } from './curriculumDetailedNotesJhs2CareerTech';
import { JHS2_CAREER_TECH_QUIZZES } from './curriculumJhs2CareerTechQuizzes';
import { JHS3_MATH_TOPICS } from './curriculumJhs3Math';
import { JHS3_MATH_DETAILED_NOTES } from './curriculumDetailedNotesJhs3Math';
import { JHS3_MATH_QUIZZES } from './curriculumJhs3MathQuizzes';
import { JHS3_SCIENCE_TOPICS } from './curriculumJhs3Science';
import { JHS3_SCIENCE_DETAILED_NOTES } from './curriculumDetailedNotesJhs3Science';
import { JHS3_SCIENCE_QUIZZES } from './curriculumJhs3ScienceQuizzes';
import { JHS3_ENGLISH_TOPICS } from './curriculumJhs3English';
import { JHS3_ENGLISH_DETAILED_NOTES } from './curriculumDetailedNotesJhs3English';
import { JHS3_ENGLISH_QUIZZES } from './curriculumJhs3EnglishQuizzes';
import { JHS3_SOCIAL_TOPICS } from './curriculumJhs3Social';
import { JHS3_SOCIAL_DETAILED_NOTES } from './curriculumDetailedNotesJhs3Social';
import { JHS3_SOCIAL_QUIZZES } from './curriculumJhs3SocialQuizzes';
import { JHS3_COMPUTING_TOPICS } from './curriculumJhs3Computing';
import { JHS3_COMPUTING_DETAILED_NOTES } from './curriculumDetailedNotesJhs3Computing';
import { JHS3_COMPUTING_QUIZZES } from './curriculumJhs3ComputingQuizzes';
import { JHS3_RME_TOPICS } from './curriculumJhs3Rme';
import { JHS3_RME_DETAILED_NOTES } from './curriculumDetailedNotesJhs3Rme';
import { JHS3_RME_QUIZZES } from './curriculumJhs3RmeQuizzes';
import { JHS3_FRENCH_TOPICS } from './curriculumJhs3French';
import { JHS3_FRENCH_DETAILED_NOTES } from './curriculumDetailedNotesJhs3French';
import { JHS3_FRENCH_QUIZZES } from './curriculumJhs3FrenchQuizzes';
import { JHS3_TWI_TOPICS } from './curriculumJhs3Twi';
import { JHS3_TWI_DETAILED_NOTES } from './curriculumDetailedNotesJhs3Twi';
import { JHS3_TWI_QUIZZES } from './curriculumJhs3TwiQuizzes';
import { JHS3_CAREER_TECH_TOPICS } from './curriculumJhs3CareerTech';
import { JHS3_CAREER_TECH_DETAILED_NOTES } from './curriculumDetailedNotesJhs3CareerTech';
import { JHS3_CAREER_TECH_QUIZZES } from './curriculumJhs3CareerTechQuizzes';

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
  // JHS 2 - COMPUTING / ICT (All 13 GES Topics)
  // ==========================================
  ...JHS2_COMPUTING_TOPICS,

  // ==========================================
  // JHS 2 - RELIGIOUS & MORAL EDUCATION (All 14 GES Topics)
  // ==========================================
  ...JHS2_RME_TOPICS,

  // ==========================================
  // JHS 2 - FRENCH LANGUAGE (All 12 GES Topics)
  // ==========================================
  ...JHS2_FRENCH_TOPICS,

  // ==========================================
  // JHS 2 - GHANAIAN LANGUAGE (AKUAPEM TWI) (All 10 GES Topics)
  // ==========================================
  ...JHS2_TWI_TOPICS,

  // ==========================================
  // JHS 2 - CAREER TECHNOLOGY (All 13 GES Topics)
  // ==========================================
  ...JHS2_CAREER_TECH_TOPICS,

  // ==========================================
  // JHS 3 - MATHEMATICS (BECE Candidates - 14 Topics)
  // ==========================================
  ...JHS3_MATH_TOPICS,

  // ==========================================
  // JHS 3 - INTEGRATED SCIENCE (BECE Candidates - 14 Topics)
  // ==========================================
  ...JHS3_SCIENCE_TOPICS,

  // ==========================================
  // JHS 3 - ENGLISH LANGUAGE (BECE Candidates - 14 Topics)
  // ==========================================
  ...JHS3_ENGLISH_TOPICS,

  // ==========================================
  // JHS 3 - SOCIAL STUDIES (BECE Candidates - 14 Topics)
  // ==========================================
  ...JHS3_SOCIAL_TOPICS,

  // ==========================================
  // JHS 3 - COMPUTING / ICT (BECE Candidates - 14 Topics)
  // ==========================================
  ...JHS3_COMPUTING_TOPICS,

  // ==========================================
  // JHS 3 - RELIGIOUS & MORAL EDUCATION (BECE Candidates - 14 Topics)
  // ==========================================
  ...JHS3_RME_TOPICS,

  // ==========================================
  // JHS 3 - FRENCH LANGUAGE (BECE Candidates - 12 Topics)
  // ==========================================
  ...JHS3_FRENCH_TOPICS,

  // ==========================================
  // JHS 3 - GHANAIAN LANGUAGE (AKUAPEM TWI) (BECE Candidates - 10 Topics)
  // ==========================================
  ...JHS3_TWI_TOPICS,

  // ==========================================
  // JHS 3 - CAREER TECHNOLOGY (BECE Candidates - 12 Topics)
  // ==========================================
  ...JHS3_CAREER_TECH_TOPICS,

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
    JHS3_MATH_DETAILED_NOTES[topic.id] ||
    JHS3_SCIENCE_DETAILED_NOTES[topic.id] ||
    JHS3_ENGLISH_DETAILED_NOTES[topic.id] ||
    JHS3_SOCIAL_DETAILED_NOTES[topic.id] ||
    JHS3_COMPUTING_DETAILED_NOTES[topic.id] ||
    JHS3_RME_DETAILED_NOTES[topic.id] ||
    JHS3_FRENCH_DETAILED_NOTES[topic.id] ||
    JHS3_TWI_DETAILED_NOTES[topic.id] ||
    JHS3_CAREER_TECH_DETAILED_NOTES[topic.id] ||
    JHS2_MATH_DETAILED_NOTES[topic.id] ||
    JHS2_SCIENCE_DETAILED_NOTES[topic.id] ||
    JHS2_ENGLISH_DETAILED_NOTES[topic.id] ||
    JHS2_SOCIAL_DETAILED_NOTES[topic.id] ||
    JHS2_COMPUTING_DETAILED_NOTES[topic.id] ||
    JHS2_RME_DETAILED_NOTES[topic.id] ||
    JHS2_FRENCH_DETAILED_NOTES[topic.id] ||
    JHS2_TWI_DETAILED_NOTES[topic.id] ||
    JHS2_CAREER_TECH_DETAILED_NOTES[topic.id] ||
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
    JHS3_MATH_QUIZZES[topic.id] ||
    JHS3_SCIENCE_QUIZZES[topic.id] ||
    JHS3_ENGLISH_QUIZZES[topic.id] ||
    JHS3_SOCIAL_QUIZZES[topic.id] ||
    JHS3_COMPUTING_QUIZZES[topic.id] ||
    JHS3_RME_QUIZZES[topic.id] ||
    JHS3_FRENCH_QUIZZES[topic.id] ||
    JHS3_TWI_QUIZZES[topic.id] ||
    JHS3_CAREER_TECH_QUIZZES[topic.id] ||
    JHS1_MATH_QUIZZES[topic.id] ||
    JHS2_MATH_QUIZZES[topic.id] ||
    JHS2_SCIENCE_QUIZZES[topic.id] ||
    JHS2_ENGLISH_QUIZZES[topic.id] ||
    JHS2_SOCIAL_QUIZZES[topic.id] ||
    JHS2_COMPUTING_QUIZZES[topic.id] ||
    JHS2_RME_QUIZZES[topic.id] ||
    JHS2_FRENCH_QUIZZES[topic.id] ||
    JHS2_TWI_QUIZZES[topic.id] ||
    JHS2_CAREER_TECH_QUIZZES[topic.id] ||
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


