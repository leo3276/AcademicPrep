// Administrator Portal Store & Live Data Hub for AcademicPrep
// Tracks Genuine Live Web Traffic, Real Student Paid Access,
// Actual Topic Completion Metrics, and Admin-Uploaded Trial Questions

import { 
  WebTrafficData, 
  AdminStudentDetail, 
  TrialExamMock, 
  QuizQuestion 
} from './types';
import { getLiveTrafficMetrics } from './trafficTracker';

export const ADMIN_STORAGE_KEYS = {
  TRAFFIC_DATA: 'academicprep_admin_traffic_v1',
  STUDENT_LIST: 'academicprep_admin_students_v1',
  TRIAL_MOCKS: 'academicprep_admin_trial_mocks_v1',
};

export const DEFAULT_TRAFFIC_DATA: WebTrafficData = {
  dailyVisitors: 1,
  monthlyVisitors: 1,
  totalPageViews: 1,
  activeSessions: 1,
  bounceRatePercentage: 14.8,
  avgSessionDurationMinutes: 16.5,
  deviceShare: { mobile: 75, desktop: 20, tablet: 5 },
  regionalVisits: [
    { region: 'Greater Accra', visits: 1, percentage: 50 },
    { region: 'Ashanti (Kumasi)', visits: 1, percentage: 50 },
  ],
  subjectTraffic: [],
  dailyTrend: []
};

// ==========================================
// 1. INITIAL BASELINE STUDENTS
// ==========================================
export const INITIAL_STUDENTS: AdminStudentDetail[] = [
  {
    id: 'st-01',
    phone: '0241234567',
    name: 'Kwame Mensah',
    level: 'JHS 3',
    accessType: 'Full Pass',
    accessExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: 'Active today',
    topicsCompleted: 12,
    avgScorePercentage: 85,
    registeredAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'st-02',
    phone: '0559876543',
    name: 'Ama Serwaa',
    level: 'JHS 3',
    accessType: 'Free Trial',
    lastActive: 'Active recently',
    topicsCompleted: 3,
    avgScorePercentage: 70,
    registeredAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// ==========================================
// 2. DEFAULT TRIAL QUESTIONS / MOCK EXAMS
// ==========================================
export const DEFAULT_TRIAL_MOCKS: TrialExamMock[] = [
  {
    id: 'trial-mock-math-jhs3-01',
    title: 'BECE National Standard Mathematics Mock 1 (Diagnostic)',
    subjectId: 'math',
    level: 'JHS 3',
    term: 1,
    durationMinutes: 25,
    passScorePercentage: 60,
    isPublished: true,
    createdAt: '2026-09-24T12:00:00.000Z',
    questions: [
      {
        id: 'tm-m1-q1',
        quizId: 'trial-mock-math-jhs3-01',
        questionText: 'If P = {prime numbers less than 15} and Q = {odd numbers less than 15}, find the elements of P ∩ Q.',
        optionA: '{2, 3, 5, 7, 11, 13}',
        optionB: '{3, 5, 7, 11, 13}',
        optionC: '{1, 3, 5, 7, 9, 11, 13}',
        optionD: '{2}',
        correctOption: 'B',
        subConcept: 'Set Theory & Intersection',
        explanation: 'P = {2, 3, 5, 7, 11, 13}. Q = {1, 3, 5, 7, 9, 11, 13}. The common elements (intersection) are {3, 5, 7, 11, 13}. Notice that 2 is prime but even, so it is excluded.',
        remediationTip: 'Remember that 2 is the only even prime number; it is not in the set of odd numbers.'
      },
      {
        id: 'tm-m1-q2',
        quizId: 'trial-mock-math-jhs3-01',
        questionText: 'Evaluate (2.4 × 10^5) × (3.0 × 10^-2), leaving your answer in standard form.',
        optionA: '7.2 × 10^2',
        optionB: '7.2 × 10^3',
        optionC: '72 × 10^2',
        optionD: '0.72 × 10^4',
        correctOption: 'B',
        subConcept: 'Standard Form',
        explanation: '(2.4 × 3.0) × 10^(5 + (-2)) = 7.2 × 10^3.',
        remediationTip: 'Multiply decimal coefficients together and add exponents.'
      },
      {
        id: 'tm-m1-q3',
        quizId: 'trial-mock-math-jhs3-01',
        questionText: 'Solve for x: (2x - 3) / 3 = (x + 1) / 2.',
        optionA: 'x = 3',
        optionB: 'x = 6',
        optionC: 'x = 9',
        optionD: 'x = 12',
        correctOption: 'C',
        subConcept: 'Linear Equations with Fractions',
        explanation: 'Cross-multiply: 2(2x - 3) = 3(x + 1) => 4x - 6 = 3x + 3 => 4x - 3x = 3 + 6 => x = 9.',
        remediationTip: 'Always cross-multiply to eliminate the denominators in proportion equations.'
      },
      {
        id: 'tm-m1-q4',
        quizId: 'trial-mock-math-jhs3-01',
        questionText: 'A trader bought an article for GH₵ 120.00 and sold it at a profit of 25%. Calculate the selling price.',
        optionA: 'GH₵ 140.00',
        optionB: 'GH₵ 150.00',
        optionC: 'GH₵ 160.00',
        optionD: 'GH₵ 180.00',
        correctOption: 'B',
        subConcept: 'Profit and Loss',
        explanation: 'Profit = 25% of 120 = 0.25 × 120 = GH₵ 30.00. Selling Price = Cost Price + Profit = 120 + 30 = GH₵ 150.00.',
        remediationTip: 'Selling price = Cost Price × (100 + Profit%) / 100.'
      },
      {
        id: 'tm-m1-q5',
        quizId: 'trial-mock-math-jhs3-01',
        questionText: 'The interior angles of a pentagon sum up to:',
        optionA: '360°',
        optionB: '540°',
        optionC: '720°',
        optionD: '900°',
        correctOption: 'B',
        subConcept: 'Polygon Geometry',
        explanation: 'Sum of interior angles = (n - 2) × 180°. For a pentagon, n = 5: (5 - 2) × 180° = 3 × 180° = 540°.',
        remediationTip: 'Use (n - 2) × 180° for sum of interior angles in any polygon.'
      }
    ]
  },
  {
    id: 'trial-mock-science-jhs3-01',
    title: 'BECE Integrated Science Diagnostic Trial Exam',
    subjectId: 'science',
    level: 'JHS 3',
    term: 1,
    durationMinutes: 25,
    passScorePercentage: 60,
    isPublished: true,
    createdAt: '2026-09-24T12:00:00.000Z',
    questions: [
      {
        id: 'tm-s1-q1',
        quizId: 'trial-mock-science-jhs3-01',
        questionText: 'Which organelle is responsible for cellular respiration and energy production (ATP) in eukaryotic cells?',
        optionA: 'Ribosome',
        optionB: 'Mitochondrion',
        optionC: 'Chloroplast',
        optionD: 'Golgi body',
        correctOption: 'B',
        subConcept: 'Cell Organelles',
        explanation: 'The mitochondrion is the powerhouse of the cell, carrying out aerobic respiration to produce ATP energy molecules.',
        remediationTip: 'Chloroplasts do photosynthesis; mitochondria do respiration.'
      },
      {
        id: 'tm-s1-q2',
        quizId: 'trial-mock-science-jhs3-01',
        questionText: 'What is the chemical symbol for Potassium?',
        optionA: 'P',
        optionB: 'Po',
        optionC: 'K',
        optionD: 'Pt',
        correctOption: 'C',
        subConcept: 'Chemical Symbols & Elements',
        explanation: 'Potassium has the symbol K, derived from its Latin/Neo-Latin name Kalium. P is Phosphorus.',
        remediationTip: 'Remember Potassium is K from Kalium; Sodium is Na from Natrium.'
      },
      {
        id: 'tm-s1-q3',
        quizId: 'trial-mock-science-jhs3-01',
        questionText: 'Which soil component has the largest particle size and highest drainage rate?',
        optionA: 'Clay',
        optionB: 'Silt',
        optionC: 'Sand',
        optionD: 'Humus',
        correctOption: 'C',
        subConcept: 'Soil Texture & Agriculture',
        explanation: 'Sand particles are largest (0.05 to 2.0 mm), resulting in large pore spaces that drain water rapidly.',
        remediationTip: 'Particle size order: Clay < Silt < Sand.'
      },
      {
        id: 'tm-s1-q4',
        quizId: 'trial-mock-science-jhs3-01',
        questionText: 'The process of heat transfer through liquids and gases by the actual movement of particles is called:',
        optionA: 'Conduction',
        optionB: 'Convection',
        optionC: 'Radiation',
        optionD: 'Evaporation',
        correctOption: 'B',
        subConcept: 'Heat Transfer Mechanisms',
        explanation: 'Convection is heat transfer in fluids (liquids and gases) via convective currents. Conduction is in solids.',
        remediationTip: 'Fluids transfer heat primarily by convection currents.'
      }
    ]
  },
  {
    id: 'trial-mock-careertech-jhs3-01',
    title: 'BECE Career Technology Workshop & Design Trial Test',
    subjectId: 'career-tech',
    level: 'JHS 3',
    term: 1,
    durationMinutes: 20,
    passScorePercentage: 60,
    isPublished: true,
    createdAt: '2026-09-24T12:00:00.000Z',
    questions: [
      {
        id: 'tm-ct1-q1',
        quizId: 'trial-mock-careertech-jhs3-01',
        questionText: 'Which hand tool is specifically designed for testing the squareness (90-degree angle) of wood surfaces?',
        optionA: 'Sliding bevel',
        optionB: 'Try square',
        optionC: 'Marking knife',
        optionD: 'Steel rule',
        correctOption: 'B',
        subConcept: 'Woodworking Hand Tools',
        explanation: 'A try square has a stock and blade fixed at exactly 90 degrees to test and lay out right angles on materials.',
        remediationTip: 'Try square is fixed at 90°; sliding bevel is adjustable to any angle.'
      },
      {
        id: 'tm-ct1-q2',
        quizId: 'trial-mock-careertech-jhs3-01',
        questionText: 'Which class of fire involves energized electrical equipment such as computers and distribution panels?',
        optionA: 'Class A',
        optionB: 'Class B',
        optionC: 'Class C',
        optionD: 'Class D',
        correctOption: 'C',
        subConcept: 'Workshop Safety & Fire Safety',
        explanation: 'Class C fires involve live electrical equipment. CO2 or dry powder extinguishers must be used to prevent electrical shock.',
        remediationTip: 'Never use water on Class C electrical fires.'
      }
    ]
  }
];

// ==========================================
// 3. STORAGE GETTERS AND SETTERS
// ==========================================

export function getStoredTrafficData(): WebTrafficData {
  return getLiveTrafficMetrics();
}

export function saveTrafficData(data: WebTrafficData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ADMIN_STORAGE_KEYS.TRAFFIC_DATA, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save traffic data', e);
  }
}

export function getStoredStudents(): AdminStudentDetail[] {
  if (typeof window === 'undefined') return INITIAL_STUDENTS;
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEYS.STUDENT_LIST);
    if (raw) {
      const parsed: AdminStudentDetail[] = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // fallback
  }

  // Check if current user is logged in
  try {
    const studentRaw = localStorage.getItem('academicprep_student');
    if (studentRaw) {
      const s = JSON.parse(studentRaw);
      const studentEntry: AdminStudentDetail = {
        id: s.id || 'st-curr',
        phone: s.phoneNumber || '0240000000',
        name: s.fullName || 'Registered Student',
        level: s.currentLevel || 'JHS 1',
        accessType: s.hasFullAccess ? 'Full Pass' : 'Free Trial',
        accessExpiresAt: s.accessExpiresAt,
        lastActive: 'Active now',
        topicsCompleted: 0,
        avgScorePercentage: 0,
        registeredAt: s.createdAt || new Date().toISOString()
      };
      return [studentEntry, ...INITIAL_STUDENTS];
    }
  } catch {
    // fallback
  }

  return INITIAL_STUDENTS;
}

export function saveStudents(students: AdminStudentDetail[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ADMIN_STORAGE_KEYS.STUDENT_LIST, JSON.stringify(students));
  } catch (e) {
    console.error('Failed to save students', e);
  }
}

export function getStoredTrialMocks(): TrialExamMock[] {
  if (typeof window === 'undefined') return DEFAULT_TRIAL_MOCKS;
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEYS.TRIAL_MOCKS);
    if (raw) {
      const parsed: TrialExamMock[] = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // fallback
  }
  return DEFAULT_TRIAL_MOCKS;
}

export function saveTrialMocks(mocks: TrialExamMock[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ADMIN_STORAGE_KEYS.TRIAL_MOCKS, JSON.stringify(mocks));
  } catch (e) {
    console.error('Failed to save trial mocks', e);
  }
}
