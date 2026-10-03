// Ghanaian SHS English Language Curriculum Topics
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// English Language for SHS 1, SHS 2, and SHS 3 (WASSCE Candidates)

import { CurriculumTopic } from './types';
import { SHS1_ENGLISH_TOPICS } from './curriculumShs1English';
import { SHS2_ENGLISH_TOPICS } from './curriculumShs2English';
import { SHS3_ENGLISH_TOPICS } from './curriculumShs3English';

export { SHS1_ENGLISH_TOPICS } from './curriculumShs1English';
export { SHS2_ENGLISH_TOPICS } from './curriculumShs2English';
export { SHS3_ENGLISH_TOPICS } from './curriculumShs3English';

export const SHS_ENGLISH_TOPICS: CurriculumTopic[] = [
  // SHS 1 topics (Terms 1-3, full textbook-grade authoring) live in
  // curriculumShs1English.ts and are spread first so orderIndex stays per level.
  ...SHS1_ENGLISH_TOPICS,
  // SHS 2 topics (Terms 1-3) live in curriculumShs2English.ts.
  ...SHS2_ENGLISH_TOPICS,
  // SHS 3 topics (Terms 1-3, full textbook-grade authoring) live in curriculumShs3English.ts.
  ...SHS3_ENGLISH_TOPICS
];
