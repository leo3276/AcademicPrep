// Ghanaian Senior High School (SHS) Core Curriculum Data
// WAEC / WASSCE syllabus for the 4 compulsory core subjects

import { CurriculumSubject, CurriculumTopic } from './types';
import { SHS_MATH_TOPICS } from './curriculumShsMath';
import { SHS_SCIENCE_TOPICS } from './curriculumShsScience';
import { SHS_ENGLISH_TOPICS } from './curriculumShsEnglish';
import { SHS_SOCIAL_TOPICS } from './curriculumShsSocial';
import { SHS_GENERAL_ARTS_TOPICS } from './curriculumShsGeneralArts';
import { SHS_ELECTIVE_MATH_TOPICS } from './curriculumShsElectiveMath';
import { SHS_BUSINESS_TOPICS } from './curriculumShsBusiness';
import { SHS_VISUAL_ARTS_TOPICS } from './curriculumShsVisualArts';
import { SHS_GENERAL_SCIENCE_TOPICS } from './curriculumShsGeneralScience';
import { SHS_AGRICULTURE_TOPICS } from './curriculumShsAgriculture';

export { SHS_GENERAL_ARTS_TOPICS } from './curriculumShsGeneralArts';
export { SHS_ELECTIVE_MATH_TOPICS } from './curriculumShsElectiveMath';
export { SHS_BUSINESS_TOPICS } from './curriculumShsBusiness';
export { SHS_VISUAL_ARTS_TOPICS } from './curriculumShsVisualArts';
export { SHS_GENERAL_SCIENCE_TOPICS } from './curriculumShsGeneralScience';
export { SHS_AGRICULTURE_TOPICS } from './curriculumShsAgriculture';

export const SHS_CORE_SUBJECTS: CurriculumSubject[] = [
  {
    id: 'math',
    name: 'Core Mathematics',
    code: 'CORE_MATH',
    icon: 'Calculator',
    color: 'from-blue-600 to-indigo-700',
    displayOrder: 1,
  },
  {
    id: 'science',
    name: 'Integrated Science',
    code: 'INT_SCI',
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
];

export const SHS_CURRICULUM_TOPICS: CurriculumTopic[] = [
  ...SHS_MATH_TOPICS,
  ...SHS_SCIENCE_TOPICS,
  ...SHS_ENGLISH_TOPICS,
  ...SHS_SOCIAL_TOPICS,
  ...SHS_GENERAL_ARTS_TOPICS,
  ...SHS_BUSINESS_TOPICS,
  ...SHS_ELECTIVE_MATH_TOPICS,
  ...SHS_VISUAL_ARTS_TOPICS,
  ...SHS_GENERAL_SCIENCE_TOPICS,
  ...SHS_AGRICULTURE_TOPICS,
];
