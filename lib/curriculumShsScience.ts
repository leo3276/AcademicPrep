// Ghanaian SHS Integrated Science Curriculum Topics
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// Aggregates Integrated Science for SHS 1, SHS 2, and SHS 3 (WASSCE Candidates)

import { CurriculumTopic } from './types';
import { SHS1_SCIENCE_TOPICS } from './curriculumShs1Science';
import { SHS2_SCIENCE_TOPICS } from './curriculumShs2Science';
import { SHS3_SCIENCE_TOPICS } from './curriculumShs3Science';

export { SHS1_SCIENCE_TOPICS } from './curriculumShs1Science';
export { SHS2_SCIENCE_TOPICS } from './curriculumShs2Science';
export { SHS3_SCIENCE_TOPICS } from './curriculumShs3Science';

export { SHS1_SCIENCE_QUIZZES } from './curriculumShs1ScienceQuizzes';
export { SHS2_SCIENCE_QUIZZES } from './curriculumShs2ScienceQuizzes';
export { SHS3_SCIENCE_QUIZZES } from './curriculumShs3ScienceQuizzes';

import { SHS1_SCIENCE_QUIZZES } from './curriculumShs1ScienceQuizzes';
import { SHS2_SCIENCE_QUIZZES } from './curriculumShs2ScienceQuizzes';
import { SHS3_SCIENCE_QUIZZES } from './curriculumShs3ScienceQuizzes';

export const SHS_SCIENCE_TOPICS: CurriculumTopic[] = [
  ...SHS1_SCIENCE_TOPICS,
  ...SHS2_SCIENCE_TOPICS,
  ...SHS3_SCIENCE_TOPICS,
];

export const SHS_SCIENCE_QUIZZES = {
  ...SHS1_SCIENCE_QUIZZES,
  ...SHS2_SCIENCE_QUIZZES,
  ...SHS3_SCIENCE_QUIZZES,
};
