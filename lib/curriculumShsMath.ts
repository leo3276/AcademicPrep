// Ghanaian SHS Core Mathematics Curriculum Topics
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// Aggregates Core Mathematics for SHS 1, SHS 2, and SHS 3 (WASSCE Candidates)

import { CurriculumTopic } from './types';
import { SHS1_MATH_TOPICS } from './curriculumShs1Math';
import { SHS2_MATH_TOPICS } from './curriculumShs2Math';
import { SHS3_MATH_TOPICS } from './curriculumShs3Math';

export { SHS1_MATH_TOPICS } from './curriculumShs1Math';
export { SHS2_MATH_TOPICS } from './curriculumShs2Math';
export { SHS3_MATH_TOPICS } from './curriculumShs3Math';

export { SHS1_MATH_QUIZZES } from './curriculumShs1MathQuizzes';
export { SHS2_MATH_QUIZZES } from './curriculumShs2MathQuizzes';
export { SHS3_MATH_QUIZZES } from './curriculumShs3MathQuizzes';

import { SHS1_MATH_QUIZZES } from './curriculumShs1MathQuizzes';
import { SHS2_MATH_QUIZZES } from './curriculumShs2MathQuizzes';
import { SHS3_MATH_QUIZZES } from './curriculumShs3MathQuizzes';

export const SHS_MATH_TOPICS: CurriculumTopic[] = [
  ...SHS1_MATH_TOPICS,
  ...SHS2_MATH_TOPICS,
  ...SHS3_MATH_TOPICS,
];

export const SHS_MATH_QUIZZES = {
  ...SHS1_MATH_QUIZZES,
  ...SHS2_MATH_QUIZZES,
  ...SHS3_MATH_QUIZZES,
};
