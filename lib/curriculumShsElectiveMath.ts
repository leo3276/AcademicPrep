// Ghanaian SHS Elective Mathematics curriculum index (WASSCE)
// Appears under the General Science and Business elective strands in the study screens.

import { CurriculumTopic } from './types';
import { SHS1_ELECTIVE_MATH_TOPICS } from './curriculumShs1ElectiveMath';
import { SHS2_ELECTIVE_MATH_TOPICS } from './curriculumShs2ElectiveMath';
import { SHS3_ELECTIVE_MATH_TOPICS } from './curriculumShs3ElectiveMath';

export { SHS1_ELECTIVE_MATH_TOPICS } from './curriculumShs1ElectiveMath';
export { SHS2_ELECTIVE_MATH_TOPICS } from './curriculumShs2ElectiveMath';
export { SHS3_ELECTIVE_MATH_TOPICS } from './curriculumShs3ElectiveMath';

export const SHS_ELECTIVE_MATH_TOPICS: CurriculumTopic[] = [
  ...SHS1_ELECTIVE_MATH_TOPICS,
  ...SHS2_ELECTIVE_MATH_TOPICS,
  ...SHS3_ELECTIVE_MATH_TOPICS,
];
