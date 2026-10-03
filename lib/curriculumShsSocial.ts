// Ghanaian SHS Social Studies Curriculum Topics
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// Aggregates Social Studies for SHS 1, SHS 2, and SHS 3 (WASSCE Candidates)
// Exactly 14 Topics (SHS 1), 16 Topics (SHS 2), and 15 Topics (SHS 3) = 45 Topics Total
// 450 Authentic WASSCE Questions Total (10 per topic)

import { CurriculumTopic } from './types';
import { SHS1_SOCIAL_TOPICS } from './curriculumShs1Social';
import { SHS2_SOCIAL_TOPICS } from './curriculumShs2Social';
import { SHS3_SOCIAL_TOPICS } from './curriculumShs3Social';

export { SHS1_SOCIAL_TOPICS } from './curriculumShs1Social';
export { SHS2_SOCIAL_TOPICS } from './curriculumShs2Social';
export { SHS3_SOCIAL_TOPICS } from './curriculumShs3Social';

export { SHS1_SOCIAL_QUIZZES } from './curriculumShs1SocialQuizzes';
export { SHS2_SOCIAL_QUIZZES } from './curriculumShs2SocialQuizzes';
export { SHS3_SOCIAL_QUIZZES } from './curriculumShs3SocialQuizzes';

import { SHS1_SOCIAL_QUIZZES } from './curriculumShs1SocialQuizzes';
import { SHS2_SOCIAL_QUIZZES } from './curriculumShs2SocialQuizzes';
import { SHS3_SOCIAL_QUIZZES } from './curriculumShs3SocialQuizzes';

export const SHS_SOCIAL_TOPICS: CurriculumTopic[] = [
  ...SHS1_SOCIAL_TOPICS,
  ...SHS2_SOCIAL_TOPICS,
  ...SHS3_SOCIAL_TOPICS,
];

export const SHS_SOCIAL_QUIZZES = {
  ...SHS1_SOCIAL_QUIZZES,
  ...SHS2_SOCIAL_QUIZZES,
  ...SHS3_SOCIAL_QUIZZES,
};
