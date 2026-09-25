// Administrator Portal Store & Data Hub for AcademicPrep
// Manages Web Traffic Analytics, Paid Access/Student Management,
// Topic Completion Metrics, and Trial Questions / Mock Exams

import { 
  WebTrafficData, 
  AdminStudentDetail, 
  TrialExamMock, 
  QuizQuestion 
} from './types';

export const ADMIN_STORAGE_KEYS = {
  TRAFFIC_DATA: 'academicprep_admin_traffic_v1',
  STUDENT_LIST: 'academicprep_admin_students_v1',
  TRIAL_MOCKS: 'academicprep_admin_trial_mocks_v1',
};

// ==========================================
// 1. DEFAULT WEB TRAFFIC DATA
// ==========================================
export const DEFAULT_TRAFFIC_DATA: WebTrafficData = {
  dailyVisitors: 1420,
  monthlyVisitors: 28450,
  totalPageViews: 24680,
  activeSessions: 94,
  bounceRatePercentage: 16.4,
  avgSessionDurationMinutes: 18.2,
  deviceShare: {
    mobile: 79,
    desktop: 18,
    tablet: 3,
  },
  regionalVisits: [
    { region: 'Greater Accra', visits: 9840, percentage: 40 },
    { region: 'Ashanti (Kumasi)', visits: 6420, percentage: 26 },
    { region: 'Western (Sekondi-Takoradi)', visits: 2710, percentage: 11 },
    { region: 'Central (Cape Coast)', visits: 2210, percentage: 9 },
    { region: 'Eastern (Koforidua)', visits: 1720, percentage: 7 },
    { region: 'Northern (Tamale)', visits: 1240, percentage: 5 },
    { region: 'Volta & Oti (Ho)', visits: 510, percentage: 2 },
  ],
  subjectTraffic: [
    { subjectId: 'math', subjectName: 'Mathematics', views: 7850 },
    { subjectId: 'science', subjectName: 'Integrated Science', views: 6920 },
    { subjectId: 'english', subjectName: 'English Language', views: 3940 },
    { subjectId: 'ict', subjectName: 'Computing / ICT', views: 3410 },
    { subjectId: 'social', subjectName: 'Social Studies', views: 2890 },
    { subjectId: 'career-tech', subjectName: 'Career Technology', views: 2450 },
    { subjectId: 'rme', subjectName: 'Religious & Moral Education', views: 1820 },
    { subjectId: 'french', subjectName: 'French Language', views: 1210 },
    { subjectId: 'twi', subjectName: 'Akuapem Twi', views: 980 },
  ],
  dailyTrend: [
    { date: '19 Sep', visitors: 1180, pageViews: 19400, quizAttempts: 412 },
    { date: '20 Sep', visitors: 1240, pageViews: 20800, quizAttempts: 468 },
    { date: '21 Sep', visitors: 1390, pageViews: 22900, quizAttempts: 520 },
    { date: '22 Sep', visitors: 1310, pageViews: 21700, quizAttempts: 495 },
    { date: '23 Sep', visitors: 1480, pageViews: 25100, quizAttempts: 590 },
    { date: '24 Sep', visitors: 1540, pageViews: 26800, quizAttempts: 640 },
    { date: '25 Sep (Today)', visitors: 1420, pageViews: 24680, quizAttempts: 615 },
  ],
};

// ==========================================
// 2. DEFAULT STUDENT DIRECTORY
// ==========================================
export const DEFAULT_STUDENTS: AdminStudentDetail[] = [
  {
    id: 'st-101',
    phone: '0241234567',
    name: 'Kofi Mensah',
    level: 'JHS 3',
    accessType: 'Full Pass',
    accessExpiresAt: '2026-10-24T10:00:00.000Z',
    lastActive: '3 mins ago',
    topicsCompleted: 24,
    avgScorePercentage: 88,
    registeredAt: '2026-09-01T08:00:00.000Z',
  },
  {
    id: 'st-102',
    phone: '0559876543',
    name: 'Ama Serwaa',
    level: 'JHS 3',
    accessType: 'Full Pass',
    accessExpiresAt: '2026-10-20T10:00:00.000Z',
    lastActive: '14 mins ago',
    topicsCompleted: 31,
    avgScorePercentage: 94,
    registeredAt: '2026-08-28T09:30:00.000Z',
  },
  {
    id: 'st-103',
    phone: '0275554321',
    name: 'Kwame Osei',
    level: 'JHS 3',
    accessType: 'Free Trial',
    lastActive: '45 mins ago',
    topicsCompleted: 6,
    avgScorePercentage: 65,
    registeredAt: '2026-09-18T14:15:00.000Z',
  },
  {
    id: 'st-104',
    phone: '0501122334',
    name: 'Abena Boateng',
    level: 'JHS 2',
    accessType: 'Full Pass',
    accessExpiresAt: '2026-10-15T12:00:00.000Z',
    lastActive: '1 hour ago',
    topicsCompleted: 18,
    avgScorePercentage: 82,
    registeredAt: '2026-09-05T11:20:00.000Z',
  },
  {
    id: 'st-105',
    phone: '0248889900',
    name: 'Yaw Darko',
    level: 'JHS 1',
    accessType: 'Free Trial',
    lastActive: '2 hours ago',
    topicsCompleted: 4,
    avgScorePercentage: 70,
    registeredAt: '2026-09-20T16:00:00.000Z',
  },
  {
    id: 'st-106',
    phone: '0543322119',
    name: 'Esi Quaye',
    level: 'JHS 3',
    accessType: 'Full Pass',
    accessExpiresAt: '2026-11-01T10:00:00.000Z',
    lastActive: '5 hours ago',
    topicsCompleted: 42,
    avgScorePercentage: 96,
    registeredAt: '2026-08-15T10:00:00.000Z',
  },
  {
    id: 'st-107',
    phone: '0207766554',
    name: 'Kwaku Appiah',
    level: 'JHS 3',
    accessType: 'Expired',
    accessExpiresAt: '2026-09-20T10:00:00.000Z',
    lastActive: '3 days ago',
    topicsCompleted: 15,
    avgScorePercentage: 74,
    registeredAt: '2026-08-20T12:00:00.000Z',
  },
  {
    id: 'st-108',
    phone: '0594455667',
    name: 'Akosua Asantewaa',
    level: 'JHS 2',
    accessType: 'Full Pass',
    accessExpiresAt: '2026-10-29T10:00:00.000Z',
    lastActive: 'Just now',
    topicsCompleted: 20,
    avgScorePercentage: 89,
    registeredAt: '2026-09-10T14:40:00.000Z',
  }
];

// ==========================================
// 3. PRE-SEEDED TRIAL QUESTIONS / MOCK EXAMS
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
        subConcept: 'Standard Form / Scientific Notation',
        explanation: '(2.4 × 3.0) × 10^(5 + (-2)) = 7.2 × 10^3. 7.2 is between 1 and 10, so it is in standard form.',
        remediationTip: 'Multiply the coefficients and add exponents: 5 + (-2) = 3.'
      },
      {
        id: 'tm-m1-q3',
        quizId: 'trial-mock-math-jhs3-01',
        questionText: 'Solve the linear inequality: 3x - 4 < 5x + 8.',
        optionA: 'x > -6',
        optionB: 'x < -6',
        optionC: 'x > 6',
        optionD: 'x < 6',
        correctOption: 'A',
        subConcept: 'Linear Inequalities',
        explanation: '3x - 5x < 8 + 4 => -2x < 12. Dividing both sides by -2 reverses the inequality sign: x > -6.',
        remediationTip: 'Always reverse the inequality symbol when dividing or multiplying by a negative number.'
      },
      {
        id: 'tm-m1-q4',
        quizId: 'trial-mock-math-jhs3-01',
        questionText: 'A car travels a distance of 180 km in 2 hours 30 minutes. Calculate its average speed in km/h.',
        optionA: '60 km/h',
        optionB: '72 km/h',
        optionC: '75 km/h',
        optionD: '80 km/h',
        correctOption: 'B',
        subConcept: 'Speed, Distance and Time',
        explanation: 'Time = 2 hours 30 min = 2.5 hours. Speed = Distance ÷ Time = 180 km ÷ 2.5 h = 72 km/h.',
        remediationTip: 'Convert 30 minutes to 0.5 hours before dividing distance by time.'
      },
      {
        id: 'tm-m1-q5',
        quizId: 'trial-mock-math-jhs3-01',
        questionText: 'If vectors u = (3, -2) and v = (-1, 5), find the magnitude of the vector u + v.',
        optionA: '√13',
        optionB: '√18 or 3√2',
        optionC: '5',
        optionD: '√10',
        correctOption: 'A',
        subConcept: 'Vectors in Two Dimensions',
        explanation: 'u + v = (3 + (-1), -2 + 5) = (2, 3). Magnitude = √(2^2 + 3^2) = √(4 + 9) = √13.',
        remediationTip: 'Magnitude = √(x^2 + y^2).'
      }
    ]
  },
  {
    id: 'trial-mock-sci-jhs3-01',
    title: 'BECE Integrated Science Diagnostic Trial Exam',
    subjectId: 'science',
    level: 'JHS 3',
    term: 1,
    durationMinutes: 25,
    passScorePercentage: 60,
    isPublished: true,
    createdAt: '2026-09-24T12:30:00.000Z',
    questions: [
      {
        id: 'tm-s1-q1',
        quizId: 'trial-mock-sci-jhs3-01',
        questionText: 'Which organelle is responsible for aerobic cellular respiration and ATP generation in eukaryotic cells?',
        optionA: 'Chloroplast',
        optionB: 'Mitochondrion',
        optionC: 'Ribosome',
        optionD: 'Golgi body',
        correctOption: 'B',
        subConcept: 'Cell Biology & Organelles',
        explanation: 'The mitochondrion is known as the powerhouse of the cell, where glucose is oxidized in the presence of oxygen to produce ATP energy.',
        remediationTip: 'Mitochondria generate ATP; chloroplasts carry out photosynthesis in plants.'
      },
      {
        id: 'tm-s1-q2',
        quizId: 'trial-mock-sci-jhs3-01',
        questionText: 'What type of chemical bond involves the transfer of electrons from a metallic atom to a non-metallic atom?',
        optionA: 'Covalent bond',
        optionB: 'Ionic (Electrovalent) bond',
        optionC: 'Metallic bond',
        optionD: 'Hydrogen bond',
        correctOption: 'B',
        subConcept: 'Chemical Bonding',
        explanation: 'Ionic bonding occurs when metal atoms lose valence electrons to become cations, and non-metal atoms gain those electrons to become anions.',
        remediationTip: 'Electron transfer = Ionic bond; Electron sharing = Covalent bond.'
      },
      {
        id: 'tm-s1-q3',
        quizId: 'trial-mock-sci-jhs3-01',
        questionText: 'An electric bulb of rating 60 W is used for 5 hours each day. How much electrical energy does it consume in 30 days in kilowatt-hours (kWh)?',
        optionA: '9 kWh',
        optionB: '15 kWh',
        optionC: '90 kWh',
        optionD: '300 kWh',
        correctOption: 'A',
        subConcept: 'Electrical Energy & Power Calculation',
        explanation: 'Power = 60 W = 0.06 kW. Time = 5 h × 30 days = 150 hours. Energy = Power × Time = 0.06 kW × 150 h = 9.0 kWh.',
        remediationTip: 'Divide watts by 1000 to get kilowatts before multiplying by total hours: (60/1000) * 150 = 9 kWh.'
      },
      {
        id: 'tm-s1-q4',
        quizId: 'trial-mock-sci-jhs3-01',
        questionText: 'Which farming practice involves growing crops and raising livestock together on the same piece of agricultural land?',
        optionA: 'Monoculture',
        optionB: 'Mixed farming',
        optionC: 'Shifting cultivation',
        optionD: 'Strip cropping',
        correctOption: 'B',
        subConcept: 'Agricultural Farming Systems',
        explanation: 'Mixed farming integrates crop cultivation and animal husbandry, where animal manure fertilizes crops and crop residues feed livestock.',
        remediationTip: 'Mixed farming = crops + livestock; mixed cropping = multiple crops only.'
      }
    ]
  },
  {
    id: 'trial-mock-ctech-jhs3-01',
    title: 'BECE Career Technology Workshop & Design Trial Test',
    subjectId: 'career-tech',
    level: 'JHS 3',
    term: 2,
    durationMinutes: 20,
    passScorePercentage: 60,
    isPublished: true,
    createdAt: '2026-09-24T14:00:00.000Z',
    questions: [
      {
        id: 'tm-ct1-q1',
        quizId: 'trial-mock-ctech-jhs3-01',
        questionText: 'What is the standard proportional rule for the thickness of a tenon in a Mortise and Tenon joint?',
        optionA: 'Tenon thickness equals the full thickness of the timber rail',
        optionB: 'Tenon thickness equals one-third (1/3) of the overall timber thickness',
        optionC: 'Tenon thickness equals half of the timber rail',
        optionD: 'Tenon thickness is always 10 mm',
        correctOption: 'B',
        subConcept: 'Mortise & Tenon Proportions',
        explanation: 'The tenon thickness is one-third (1/3) of the total timber rail thickness, leaving equal thirds on either side for the mortise cheeks.',
        remediationTip: 'Tenon thickness = (1/3) × Timber thickness.'
      },
      {
        id: 'tm-ct1-q2',
        quizId: 'trial-mock-ctech-jhs3-01',
        questionText: 'What type of fire extinguisher must NEVER be used on burning petrol or oil in an auto mechanic workshop?',
        optionA: 'Carbon dioxide (CO2)',
        optionB: 'Dry Chemical Powder',
        optionC: 'Pressurized Water extinguisher',
        optionD: 'Foam extinguisher',
        correctOption: 'C',
        subConcept: 'Fire Safety in Workshop',
        explanation: 'Petrol is less dense than water; pouring water causes the burning fuel to float on top and spread flames across the floor.',
        remediationTip: 'Never use water on burning liquid fuels.'
      }
    ]
  }
];

// Helper functions for persistent admin store
export function getStoredTrafficData(): WebTrafficData {
  if (typeof window === 'undefined') return DEFAULT_TRAFFIC_DATA;
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEYS.TRAFFIC_DATA);
    return raw ? JSON.parse(raw) : DEFAULT_TRAFFIC_DATA;
  } catch {
    return DEFAULT_TRAFFIC_DATA;
  }
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
  if (typeof window === 'undefined') return DEFAULT_STUDENTS;
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEYS.STUDENT_LIST);
    return raw ? JSON.parse(raw) : DEFAULT_STUDENTS;
  } catch {
    return DEFAULT_STUDENTS;
  }
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
    return raw ? JSON.parse(raw) : DEFAULT_TRIAL_MOCKS;
  } catch {
    return DEFAULT_TRIAL_MOCKS;
  }
}

export function saveTrialMocks(mocks: TrialExamMock[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ADMIN_STORAGE_KEYS.TRIAL_MOCKS, JSON.stringify(mocks));
  } catch (e) {
    console.error('Failed to save trial mocks', e);
  }
}
