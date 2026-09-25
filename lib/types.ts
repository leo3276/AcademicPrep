export type EducationLevel = 'JHS 1' | 'JHS 2' | 'JHS 3' | 'SHS 1' | 'SHS 2' | 'SHS 3' | 'UNIVERSITY';

export type PinStatus = 'ACTIVE' | 'REDEEMED' | 'REVOKED' | 'EXPIRED';

export type TransactionType = 'PIN_PURCHASE' | 'SUBSCRIPTION_RENEWAL' | 'MANUAL_CREDIT';

export interface Student {
  id: string;
  phoneNumber: string;
  fullName: string;
  currentLevel: EducationLevel;
  hasFullAccess: boolean;
  accessExpiresAt?: string;
  createdAt: string;
  lastActiveAt: string;
}

export interface AccessPin {
  id: string;
  pinCode: string;
  batchId: string;
  priceGhs: number;
  validityDays: number;
  status: PinStatus;
  redeemedByStudentId?: string;
  redeemedAt?: string;
  createdAt: string;
}

export interface CashFlowTransaction {
  id: string;
  reference: string;
  studentId?: string;
  studentPhone?: string;
  amountGhs: number;
  transactionType: TransactionType;
  paymentMethod: string;
  pinCodeUsed?: string;
  description: string;
  createdAt: string;
}

export interface CurriculumSubject {
  id: string;
  name: string;
  code: string;
  icon: string;
  color: string;
  displayOrder: number;
}

export interface DetailedSection {
  title: string;
  content: string;
  bulletPoints?: string[];
  keyTakeaway?: string;
  realWorldExample?: string;
}

export interface DetailedNotes {
  topicId?: string;
  title?: string;
  overview?: string;
  introduction?: string;
  realWorldContext?: string;
  objectives: string[];
  sections: DetailedSection[];
  commonMistakes?: string[];
  beceExamTips?: string[];
  examTips?: string[];
  summaryChecklist: string[];
}

export interface WorkedExample {
  id: string;
  title: string;
  problem: string;
  stepByStepSolution: string[];
  keyTakeaway: string;
}

export interface CurriculumTopic {
  id: string;
  subjectId: string;
  level: EducationLevel;
  term: 1 | 2 | 3;
  orderIndex: number;
  title: string;
  description: string;
  keyNotes: string;
  detailedNotes?: DetailedNotes;
  isFreeTrial: boolean;
  isVip?: boolean;
  youtubeUrl?: string;
  youtubeId?: string;
  examples?: WorkedExample[];
  quiz?: TopicQuiz;
}

export interface QuizQuestion {
  id: string;
  quizId: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  subConcept?: string;
  remediationTip?: string;
}

export interface TopicQuiz {
  id: string;
  topicId: string;
  title: string;
  timeLimitMinutes: number;
  passScorePercentage: number;
  questions: QuizQuestion[];
}

export interface StudentTopicProgress {
  topicId: string;
  completed: boolean;
  bestScorePercentage: number;
  attemptsCount: number;
  lastStudiedAt: string;
}

export interface WeeklyExamAttempt {
  id: string;
  studentId: string;
  level: EducationLevel;
  coveredTopicIds: string[];
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  createdAt: string;
}

export interface CustomTestQuestion {
  id: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface CustomTest {
  id: string;
  title: string;
  level: EducationLevel;
  subjectId?: string;
  timeLimitMinutes: number;
  questions: CustomTestQuestion[];
  isPublished: boolean;
  createdAt: string;
}

export interface AdminMetrics {
  totalStudents: number;
  activeToday: number;
  totalCashFlowGhs: number;
  activePinsCount: number;
  totalQuizzesTaken: number;
  averageExamScore: number;
}

export interface WebTrafficData {
  dailyVisitors: number;
  monthlyVisitors: number;
  totalPageViews: number;
  activeSessions: number;
  bounceRatePercentage: number;
  avgSessionDurationMinutes: number;
  deviceShare: { mobile: number; desktop: number; tablet: number };
  regionalVisits: { region: string; visits: number; percentage: number }[];
  subjectTraffic: { subjectId: string; subjectName: string; views: number }[];
  dailyTrend: { date: string; visitors: number; pageViews: number; quizAttempts: number }[];
}

export interface AdminStudentDetail {
  id: string;
  phone: string;
  name: string;
  level: EducationLevel;
  accessType: 'Full Pass' | 'Free Trial' | 'Expired';
  accessExpiresAt?: string;
  lastActive: string;
  topicsCompleted: number;
  avgScorePercentage: number;
  registeredAt: string;
}

export interface TrialExamMock {
  id: string;
  title: string;
  subjectId: string;
  level: EducationLevel;
  term: 1 | 2 | 3;
  durationMinutes: number;
  passScorePercentage: number;
  questions: QuizQuestion[];
  isPublished: boolean;
  createdAt: string;
}
