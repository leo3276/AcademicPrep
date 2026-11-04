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
  status?: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
}

export interface UniversityVideo {
  id: string;
  title: string;
  courseCode?: string;
  courseTitle?: string;
  university?: string;
  department?: string;
  level?: string;
  semester?: string;
  videoUrl: string; // YouTube embed/watch, Vimeo, direct MP4, or cloud URL
  thumbnailUrl?: string;
  description?: string;
  duration?: string;
  uploadedBy: string;
  createdAt: string;
  isFeatured?: boolean;
}

export const GHANAIAN_UNIVERSITIES = [
  'University of Ghana (Legon)',
  'KNUST (Kwame Nkrumah University of Science and Technology)',
  'University of Cape Coast (UCC)',
  'University of Professional Studies, Accra (UPSA)',
  'GIMPA (Ghana Institute of Management and Public Administration)',
  'University of Mines & Technology (UMaT)',
  'AAMUSTED (Akenten Appiah-Menka University of Skills Training)',
  'University of Education, Winneba (UEW)',
  'University of Health and Allied Sciences (UHAS)',
  'University of Energy and Natural Resources (UENR)',
  'University for Development Studies (UDS)',
  'Ghana Communication Technology University (GCTU)',
  'Ashesi University',
  'Central University',
  'Academic City University College',
  'Valley View University',
  'Pentecost University',
  'Wisconsin International University College',
  'Technical Universities (ATU, KsTU, TTU, HoTU, etc.)',
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
  'Pharmacy & Pharmaceutical Sciences',
  'Nursing & Midwifery',
  'Economics & Social Sciences',
  'Arts & Languages',
  'Biological & Agricultural Sciences',
  'Physical & Mathematical Sciences',
  'Built Environment & Architecture',
  'Education & Teacher Training',
  'Communication & Media Studies',
  'General Education',
];
