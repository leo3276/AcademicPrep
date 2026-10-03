// Ghanaian SHS General Science elective strand
// Physics, Chemistry and Biology across SHS 1, SHS 2 and SHS 3

import { CurriculumTopic } from './types';
import { SHS_PHYSICS_TOPICS } from './curriculumShsScPhysics';
import { SHS_CHEMISTRY_TOPICS } from './curriculumShsScChemistry';
import { SHS_BIOLOGY_TOPICS } from './curriculumShsScBiology';

export const SHS_GENERAL_SCIENCE_TOPICS: CurriculumTopic[] = [
  ...SHS_PHYSICS_TOPICS,
  ...SHS_CHEMISTRY_TOPICS,
  ...SHS_BIOLOGY_TOPICS,
];
