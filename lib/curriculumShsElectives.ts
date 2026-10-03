// Ghanaian SHS elective programme groups (WASSCE strands)
// Each group heads the elective subjects a student offers alongside the four core subjects.

import { CurriculumSubject } from './types';

export interface ElectiveGroup {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  bg: string;
  subjects: CurriculumSubject[];
}

const subject = (
  id: string,
  name: string,
  code: string,
  icon: string,
  color: string,
  displayOrder: number
): CurriculumSubject => ({ id, name, code, icon, color, displayOrder });

export const SHS_ELECTIVE_GROUPS: ElectiveGroup[] = [
  {
    id: 'general-science',
    name: 'General Science',
    tagline: 'Physics, Chemistry, Biology and Elective Mathematics',
    icon: 'flask-outline',
    color: '#0CA678',
    bg: '#E6FCF5',
    subjects: [
      subject('physics', 'Physics', 'PHY', 'pulse-outline', '#0B7285', 1),
      subject('chemistry', 'Chemistry', 'CHE', 'flask-outline', '#E8590C', 2),
      subject('biology', 'Biology', 'BIO', 'leaf-outline', '#2B8A3E', 3),
      subject('elective-maths', 'Elective Mathematics', 'EMT', 'calculator-outline', '#3B5BDB', 4),
    ],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Accounting, Management, Costing, Economics and Elective Mathematics',
    icon: 'briefcase-outline',
    color: '#1C7ED6',
    bg: '#E7F5FF',
    subjects: [
      subject('financial-accounting', 'Financial Accounting', 'FAC', 'documents-outline', '#1864AB', 1),
      subject('business-management', 'Business Management', 'BUM', 'stats-chart-outline', '#0B7285', 2),
      subject('costing', 'Costing', 'CST', 'pricetags-outline', '#E67700', 3),
      subject('economics', 'Economics', 'ECO', 'trending-up-outline', '#1C7ED6', 4),
      subject('elective-maths', 'Elective Mathematics', 'EMT', 'calculator-outline', '#3B5BDB', 5),
    ],
  },
  {
    id: 'general-arts',
    name: 'General Arts',
    tagline: 'Literature, History, Geography, Economics, CRS and Government',
    icon: 'library-outline',
    color: '#7048E8',
    bg: '#F3F0FF',
    subjects: [
      subject('literature', 'Literature-in-English', 'LIT', 'book-outline', '#862E9C', 1),
      subject('history', 'History', 'HIS', 'time-outline', '#A61E4D', 2),
      subject('geography', 'Geography', 'GEO', 'map-outline', '#0CA678', 3),
      subject('economics', 'Economics', 'ECO', 'trending-up-outline', '#1C7ED6', 4),
      subject('crs', 'Christian Religious Studies (CRS)', 'CRS', 'book-outline', '#E8590C', 5),
      subject('government', 'Government', 'GOV', 'shield-checkmark-outline', '#1098AD', 6),
    ],
  },
  {
    id: 'visual-arts',
    name: 'Visual Arts',
    tagline: 'Graphic, Picture Crafting, Textiles, Ceramics and Photography',
    icon: 'color-palette-outline',
    color: '#E8590C',
    bg: '#FFF4E6',
    subjects: [
      subject('graphic-drawing', 'Graphic Drawing', 'GRD', 'create-outline', '#D9480F', 1),
      subject('picture-crafting', 'Picture Crafting', 'PIC', 'image-outline', '#A61E4D', 2),
      subject('textiles', 'Textiles', 'TEX', 'scissors-outline', '#7048E8', 3),
      subject('ceramics', 'Ceramics', 'CER', 'wine-outline', '#0B7285', 4),
      subject('photography', 'Photography', 'PHO', 'camera-outline', '#3B5BDB', 5),
    ],
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    tagline: 'Crop and Animal Husbandry, Fish Farming and Forestry',
    icon: 'leaf-outline',
    color: '#2B8A3E',
    bg: '#EBFBEE',
    subjects: [
      subject('general-agriculture', 'General Agriculture', 'AGG', 'earth-outline', '#2B8A3E', 1),
      subject('crop-husbandry', 'Crop Husbandry and Utilisation', 'CRP', 'rose-outline', '#C2255C', 2),
      subject('animal-husbandry', 'Animal Husbandry', 'ANI', 'paw-outline', '#E8590C', 3),
      subject('fish-farming', 'Fish Farming', 'FSH', 'water-outline', '#1C7ED6', 4),
      subject('forestry', 'Forestry', 'FOR', 'flower-outline', '#087F5B', 5),
    ],
  },
];

export const SHS_ELECTIVE_SUBJECTS: CurriculumSubject[] = SHS_ELECTIVE_GROUPS.flatMap(
  group => group.subjects
);

export const getElectiveSubjects = (): CurriculumSubject[] => SHS_ELECTIVE_SUBJECTS;
