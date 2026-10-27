export interface UniversitySlide {
  id: string;
  title: string;
  courseCode: string;
  courseTitle?: string;
  university: string;
  department?: string;
  level: string;
  semester: string;
  description?: string;
  fileName: string;
  fileUrl: string;
  fileSizeBytes?: number;
  uploadedBy: string;
  uploadedAt: string;
}

export const GHANAIAN_UNIVERSITIES = [
  'University of Ghana (Legon)',
  'KNUST',
  'University of Cape Coast (UCC)',
  'UPSA',
  'GIMPA',
  'University of Mines & Technology (UMaT)',
  'AAMUSTED',
  'All Universities / General Tertiary',
];

export const UNIVERSITY_LEVELS = [
  'Level 100',
  'Level 200',
  'Level 300',
  'Level 400',
  'Postgraduate',
];

export const UNIVERSITY_SEMESTERS = [
  'First Semester',
  'Second Semester',
];

export const UNIVERSITY_DEPARTMENTS = [
  'Computer Science & IT',
  'Business Administration & Accounting',
  'Engineering & Applied Sciences',
  'Law & Humanities',
  'Medical & Health Sciences',
  'Economics & Social Sciences',
  'General Education',
];
