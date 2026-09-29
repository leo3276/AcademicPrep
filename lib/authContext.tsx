'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Student,
  EducationLevel,
  AccessPin,
  CashFlowTransaction,
  StudentTopicProgress,
  WeeklyExamAttempt,
  AdminMetrics
} from './types';
import {
  registerStudent as apiRegisterStudent,
  loginStudent as apiLoginStudent,
  fetchCurrentStudent,
  logoutStudent as apiLogoutStudent,
  fetchStudentProgress,
  saveTopicProgress,
  syncStudentAccount,
  redeemAccessPin as apiRedeemAccessPin,
  fetchWeeklyExams,
  fetchAccessPins,
  generatePinBatch as apiGeneratePinBatch,
  adminLogin,
  adminLogout,
  fetchAdminSession,
  updateAdminPins as apiUpdateAdminPins,
  getSessionToken,
  setSessionToken,
  clearSessionToken,
  ALLOWED_LEVELS,
} from './apiClient';

interface AuthContextType {
  student: Student | null;
  isAdmin: boolean;
  isLoading: boolean;
  topicProgress: Record<string, StudentTopicProgress>;
  pins: AccessPin[];
  transactions: CashFlowTransaction[];
  weeklyExamAttempts: WeeklyExamAttempt[];
  loginStudent: (phoneNumber: string, fullNameOrPin: string, levelOrFullName?: EducationLevel | string, accessPinCode?: string) => Promise<{ success: boolean; error?: string }>;
  signInStudent: (phoneNumber: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  registerStudent: (params: {
    phoneNumber: string;
    fullName: string;
    currentLevel: EducationLevel;
    password?: string;
    accessPinCode?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  logoutStudent: () => Promise<void>;
  canAccessTopic: (topicId: string) => { allowed: boolean; reason?: string; topicsUsed: number; maxFreeTopics: number };
  getCompletedTopicsCount: () => number;
  loginAdmin: (primaryPin: string, secondaryPin: string) => Promise<boolean>;
  logoutAdmin: () => Promise<void>;
  updateAdminPins: (params: {
    currentPrimary: string;
    currentSecondary: string;
    newPrimary: string;
    newSecondary: string;
  }) => Promise<{ success: boolean; error?: string }>;
  redeemPin: (pinCode: string) => Promise<{ success: boolean; message: string }>;
  recordQuizScore: (topicId: string, scorePercentage: number) => void;
  recordWeeklyExamAttempt: (attempt: Omit<WeeklyExamAttempt, 'id' | 'createdAt'>) => void;
  generatePinBatch: (count: number, priceGhs: number, validityDays: number) => Promise<AccessPin[]>;
  refreshPins: () => Promise<void>;
  getAdminMetrics: () => AdminMetrics;
}

const STORAGE_KEYS = {
  CURRENT_STUDENT: 'academicprep_student',
  TOPIC_PROGRESS: 'academicprep_topic_progress',
  ACCESS_PINS: 'academicprep_access_pins',
  TRANSACTIONS: 'academicprep_cash_flow',
  EXAM_ATTEMPTS: 'academicprep_exam_attempts',
};

// Credentials and admin flags must never live in the browser any more. These
// keys are from the previous implementation and are cleared on load so a stale
// value cannot be used to spoof the dashboard.
const RETIRED_STORAGE_KEYS = [
  'academicprep_is_admin',
  'academicprep_admin_primary_pin',
  'academicprep_admin_secondary_pin',
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function readLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocalStorage(key: string, value: unknown): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable (private mode); state simply will not persist.
  }
}

/** Derive the cash-flow ledger from redeemed vouchers and Paystack payments. */
function deriveTransactions(pinRows: AccessPin[]): CashFlowTransaction[] {
  return pinRows
    .filter((pin) => pin.status === 'REDEEMED')
    .map((pin) => {
      const isPaystack = pin.batchId === 'BATCH-PAYSTACK-MOMO' || pin.pinCode.includes('MOMO');
      return {
        id: `tx-${pin.id}`,
        reference: pin.pinCode,
        studentPhone: pin.redeemedByStudentId || 'Verified Student',
        amountGhs: Number(pin.priceGhs) || 25,
        transactionType: 'PIN_PURCHASE' as const,
        paymentMethod: isPaystack ? 'Paystack Mobile Money' : 'Scratch-Card / PIN Voucher',
        pinCodeUsed: pin.pinCode,
        description: `${pin.validityDays || 30}-Day Full Access Pass`,
        createdAt: pin.redeemedAt || pin.createdAt,
      };
    });
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [topicProgress, setTopicProgress] = useState<Record<string, StudentTopicProgress>>({});
  const [pins, setPins] = useState<AccessPin[]>([]);
  const [transactions, setTransactions] = useState<CashFlowTransaction[]>([]);
  const [weeklyExamAttempts, setWeeklyExamAttempts] = useState<WeeklyExamAttempt[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function initializeAuth() {
      try {
        if (typeof window !== 'undefined') {
          RETIRED_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key));
          window.sessionStorage.removeItem('academicprep_is_admin');
        }

        // Administrator state comes from the server session cookie, never from a
        // browser flag that any visitor could set in devtools.
        const adminSession = await fetchAdminSession();
        if (isMounted) setIsAdmin(adminSession);

        const cachedStudent = readLocalStorage<Student | null>(STORAGE_KEYS.CURRENT_STUDENT, null);
        if (cachedStudent && isMounted) setStudent(cachedStudent);

        if (getSessionToken()) {
          const liveStudent = await fetchCurrentStudent();

          if (!liveStudent) {
            // Token rejected or expired: drop it and the cached profile so the
            // paywall cannot be driven by stale local data.
            clearSessionToken();
            if (typeof window !== 'undefined') window.localStorage.removeItem(STORAGE_KEYS.CURRENT_STUDENT);
            if (isMounted) setStudent(null);
          } else if (isMounted) {
            setStudent(liveStudent);
            writeLocalStorage(STORAGE_KEYS.CURRENT_STUDENT, liveStudent);

            const phone = liveStudent.phoneNumber;

            const scopedProgress = readLocalStorage<Record<string, StudentTopicProgress>>(
              `academicprep_progress_${phone}`,
              {}
            );
            const cloudProgress = await fetchStudentProgress();
            const mergedProgress = { ...scopedProgress, ...cloudProgress };

            if (isMounted) {
              setTopicProgress(mergedProgress);
              writeLocalStorage(`academicprep_progress_${phone}`, mergedProgress);
            }

            const exams = await fetchWeeklyExams();
            if (isMounted && Array.isArray(exams)) {
              setWeeklyExamAttempts(
                exams.map((exam: any) => ({
                  id: exam.id,
                  studentId: exam.student_phone || phone,
                  level: exam.level,
                  coveredTopicIds: [],
                  totalQuestions: exam.paper1_total || 20,
                  correctAnswers: exam.paper1_score || 0,
                  scorePercentage: exam.composite_total_percentage || 0,
                  timeSpentSeconds: 1200,
                  createdAt: exam.completed_at,
                }))
              );
            }
          }
        } else if (isMounted) {
          const fallbackProgress = cachedStudent?.phoneNumber
            ? readLocalStorage<Record<string, StudentTopicProgress>>(
                `academicprep_progress_${cachedStudent.phoneNumber}`,
                {}
              )
            : readLocalStorage<Record<string, StudentTopicProgress>>(STORAGE_KEYS.TOPIC_PROGRESS, {});

          setTopicProgress(fallbackProgress);
          setWeeklyExamAttempts(readLocalStorage<WeeklyExamAttempt[]>(STORAGE_KEYS.EXAM_ATTEMPTS, []));
        }

        // Voucher codes are worth money, so they are only loaded for admins.
        if (adminSession) {
          const livePins = await fetchAccessPins();
          if (isMounted) {
            setPins(livePins);
            writeLocalStorage(STORAGE_KEYS.ACCESS_PINS, livePins);

            const derived = deriveTransactions(livePins);
            setTransactions(derived);
            writeLocalStorage(STORAGE_KEYS.TRANSACTIONS, derived);
          }
        }
      } catch {
        // Graceful fallback for SSR or restricted storage
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    initializeAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const registerStudent = async (params: {
    phoneNumber: string;
    fullName: string;
    currentLevel: EducationLevel;
    password?: string;
    accessPinCode?: string;
  }): Promise<{ success: boolean; error?: string }> => {
    const cleanPhone = params.phoneNumber.trim().replace(/\s+/g, '');
    if (cleanPhone.length < 10) {
      return { success: false, error: 'Please enter a valid phone number (at least 10 digits).' };
    }
    if (!params.fullName.trim()) {
      return { success: false, error: 'Please enter your full name.' };
    }
    if (!params.password || !params.password.trim()) {
      return { success: false, error: 'Please create a password or PIN for your account.' };
    }
    if (!ALLOWED_LEVELS.includes(params.currentLevel)) {
      return { success: false, error: 'Please select a valid class level.' };
    }

    // Voucher validation is the server's job. Trusting the locally cached pin
    // list let anyone unlock full access offline.
    const result = await apiRegisterStudent({
      phoneNumber: cleanPhone,
      fullName: params.fullName.trim(),
      currentLevel: params.currentLevel,
      password: params.password.trim(),
      accessPinCode: params.accessPinCode?.trim() || undefined,
    });

    if (!result.success || !result.student) {
      return { success: false, error: result.error || 'Registration failed. Please try again.' };
    }

    const newStudent = result.student;

    setStudent(newStudent);
    setTopicProgress({});
    setWeeklyExamAttempts([]);
    writeLocalStorage(STORAGE_KEYS.CURRENT_STUDENT, newStudent);
    writeLocalStorage(`academicprep_progress_${cleanPhone}`, {});
    if (typeof window !== 'undefined') window.localStorage.removeItem(STORAGE_KEYS.TOPIC_PROGRESS);

    if (result.pinMessage && !newStudent.hasFullAccess) {
      return { success: true, error: result.pinMessage };
    }

    return { success: true };
  };

  const signInStudent = async (
    phoneNumber: string,
    password?: string
  ): Promise<{ success: boolean; error?: string }> => {
    const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
    if (cleanPhone.length < 10) {
      return { success: false, error: 'Please enter a valid phone number (at least 10 digits).' };
    }
    if (!password || !password.trim()) {
      return { success: false, error: 'Please enter your password or PIN.' };
    }

    const result = await apiLoginStudent(cleanPhone, password.trim());
    if (!result.success || !result.student) {
      return { success: false, error: result.error || 'Authentication failed. Please check your credentials.' };
    }

    const authenticatedStudent = result.student;

    const localProgress = readLocalStorage<Record<string, StudentTopicProgress>>(
      `academicprep_progress_${cleanPhone}`,
      {}
    );
    const cloudProgress = await fetchStudentProgress();
    const mergedProgress = { ...localProgress, ...cloudProgress };

    const exams = await fetchWeeklyExams();
    const examAttempts: WeeklyExamAttempt[] = Array.isArray(exams)
      ? exams.map((exam: any) => ({
          id: exam.id,
          studentId: exam.student_phone || cleanPhone,
          level: exam.level,
          coveredTopicIds: [],
          totalQuestions: exam.paper1_total || 20,
          correctAnswers: exam.paper1_score || 0,
          scorePercentage: exam.composite_total_percentage || 0,
          timeSpentSeconds: 1200,
          createdAt: exam.completed_at,
        }))
      : [];

    setStudent(authenticatedStudent);
    setTopicProgress(mergedProgress);
    setWeeklyExamAttempts(examAttempts);

    writeLocalStorage(STORAGE_KEYS.CURRENT_STUDENT, authenticatedStudent);
    writeLocalStorage(`academicprep_progress_${cleanPhone}`, mergedProgress);

    return { success: true };
  };

  const loginStudent = async (
    phoneNumber: string,
    fullNameOrPin: string,
    levelOrFullName?: EducationLevel | string,
    accessPinCode?: string
  ): Promise<{ success: boolean; error?: string }> => {
    const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
    let fullName = '';
    let level: EducationLevel = 'JHS 1';
    let pinCode: string | undefined;

    if (
      fullNameOrPin &&
      fullNameOrPin.length === 4 &&
      /^\d{4}$/.test(fullNameOrPin) &&
      typeof levelOrFullName === 'string' &&
      levelOrFullName.length > 2
    ) {
      fullName = levelOrFullName.trim();
      level = 'JHS 1';
    } else {
      fullName = fullNameOrPin ? fullNameOrPin.trim() : '';
      if (levelOrFullName && (ALLOWED_LEVELS as string[]).includes(levelOrFullName as string)) {
        level = levelOrFullName as EducationLevel;
      }
      pinCode = accessPinCode?.trim();
    }

    if (fullName) {
      return registerStudent({
        phoneNumber: cleanPhone,
        fullName,
        currentLevel: level,
        accessPinCode: pinCode,
      });
    }

    return signInStudent(cleanPhone, fullNameOrPin);
  };

  const logoutStudent = async (): Promise<void> => {
    await apiLogoutStudent();

    setStudent(null);
    setTopicProgress({});
    setWeeklyExamAttempts([]);

    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEYS.CURRENT_STUDENT);
      window.localStorage.removeItem(STORAGE_KEYS.TOPIC_PROGRESS);
    }
  };

  const getCompletedTopicsCount = (): number => {
    return Object.keys(topicProgress).filter((id) => topicProgress[id]?.completed).length;
  };

  const canAccessTopic = (topicId: string): { allowed: boolean; reason?: string; topicsUsed: number; maxFreeTopics: number } => {
    const maxFreeTopics = 3;
    const isExpired = student?.accessExpiresAt
      ? new Date(student.accessExpiresAt).getTime() <= Date.now()
      : false;
    const isVip = Boolean(student?.hasFullAccess) && !isExpired;

    if (isVip) {
      return { allowed: true, topicsUsed: 0, maxFreeTopics };
    }

    const completedIds = Object.keys(topicProgress).filter((id) => topicProgress[id]?.completed);
    const topicsUsed = completedIds.length;

    if (completedIds.includes(topicId)) {
      return { allowed: true, topicsUsed, maxFreeTopics };
    }

    if (topicsUsed >= maxFreeTopics) {
      return {
        allowed: false,
        reason: `You have completed your ${maxFreeTopics} free trial topics across all subjects. To unlock this topic and unlimited learning, please enter or buy an Access PIN.`,
        topicsUsed,
        maxFreeTopics,
      };
    }

    return { allowed: true, topicsUsed, maxFreeTopics };
  };

  const loginAdmin = async (primaryPin: string, secondaryPin: string): Promise<boolean> => {
    const result = await adminLogin(primaryPin.trim(), secondaryPin.trim());

    if (result.success) {
      setIsAdmin(true);
      await refreshPins();
      return true;
    }

    return false;
  };

  const logoutAdmin = async (): Promise<void> => {
    await adminLogout();
    setIsAdmin(false);
    setPins([]);
    setTransactions([]);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEYS.ACCESS_PINS);
      window.localStorage.removeItem(STORAGE_KEYS.TRANSACTIONS);
    }
  };

  const updateAdminPins = async (params: {
    currentPrimary: string;
    currentSecondary: string;
    newPrimary: string;
    newSecondary: string;
  }): Promise<{ success: boolean; error?: string }> => {
    return apiUpdateAdminPins(params);
  };

  const redeemPin = async (pinCode: string): Promise<{ success: boolean; message: string }> => {
    const cleanCode = pinCode.trim().toUpperCase();
    if (!cleanCode) {
      return { success: false, message: 'Please enter an Access PIN code.' };
    }

    if (!student || !getSessionToken()) {
      return { success: false, message: 'Please sign in to your account before redeeming a PIN.' };
    }

    const result = await apiRedeemAccessPin(cleanCode);

    if (!result.success) {
      return { success: false, message: result.message };
    }

    // The server has already granted and recorded the access; adopt its state
    // rather than computing an expiry in the browser.
    if (result.student) {
      setStudent(result.student);
      writeLocalStorage(STORAGE_KEYS.CURRENT_STUDENT, result.student);
    }

    if (isAdmin) {
      await refreshPins();
    }

    return {
      success: true,
      message: result.message || `Access PIN redeemed! Full access unlocked for ${result.validityDays || 30} days.`,
    };
  };

  const recordQuizScore = (topicId: string, scorePercentage: number) => {
    const prev = topicProgress[topicId];
    const isCompleted = scorePercentage >= 60 || (prev ? prev.completed : false);
    const updated: StudentTopicProgress = {
      topicId,
      completed: isCompleted,
      bestScorePercentage: prev ? Math.max(prev.bestScorePercentage, scorePercentage) : scorePercentage,
      attemptsCount: (prev?.attemptsCount || 0) + 1,
      lastStudiedAt: new Date().toISOString(),
    };

    const nextState = { ...topicProgress, [topicId]: updated };
    setTopicProgress(nextState);

    if (student) {
      const studentPhone = student.phoneNumber;
      writeLocalStorage(`academicprep_progress_${studentPhone}`, nextState);

      const allCompleted = Object.keys(nextState).filter((id) => nextState[id]?.completed);
      const isExpired = student.accessExpiresAt
        ? new Date(student.accessExpiresAt).getTime() <= Date.now()
        : false;

      const updatedStudent: Student = {
        ...student,
        hasFullAccess: isExpired ? false : student.hasFullAccess,
        accessType: isExpired ? 'Expired' : student.accessType,
        completedTopicIds: allCompleted,
        topicsCompletedCount: allCompleted.length,
        lastActiveAt: new Date().toISOString(),
      };
      setStudent(updatedStudent);
      writeLocalStorage(STORAGE_KEYS.CURRENT_STUDENT, updatedStudent);

      // Persist the quiz once. A second write through syncStudentAccount used
      // to double-count attempts after the progress row started saving.
      saveTopicProgress({ topicId, scorePercentage })
        .then(() => syncStudentAccount({}))
        .then((synced) => {
          if (synced) {
            setStudent(synced);
            writeLocalStorage(STORAGE_KEYS.CURRENT_STUDENT, synced);
          }
        })
        .catch((e) => console.warn('Progress sync notice:', e?.message || e));
    } else {
      writeLocalStorage(STORAGE_KEYS.TOPIC_PROGRESS, nextState);
    }
  };

  const recordWeeklyExamAttempt = (attemptData: Omit<WeeklyExamAttempt, 'id' | 'createdAt'>) => {
    const newAttempt: WeeklyExamAttempt = {
      ...attemptData,
      id: `exam-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    const nextState = [newAttempt, ...weeklyExamAttempts];
    setWeeklyExamAttempts(nextState);
    writeLocalStorage(STORAGE_KEYS.EXAM_ATTEMPTS, nextState);
  };

  const generatePinBatch = async (
    count: number,
    priceGhs: number,
    validityDays: number
  ): Promise<AccessPin[]> => {
    const result = await apiGeneratePinBatch({ count, priceGhs, validityDays });

    if (!result.success) {
      throw new Error(result.error || 'Could not generate the PIN batch.');
    }

    const updated = [...result.pins, ...pins];
    setPins(updated);
    writeLocalStorage(STORAGE_KEYS.ACCESS_PINS, updated);

    return result.pins;
  };

  const refreshPins = async (): Promise<void> => {
    const livePins = await fetchAccessPins();

    setPins(livePins);
    writeLocalStorage(STORAGE_KEYS.ACCESS_PINS, livePins);

    const derived = deriveTransactions(livePins);
    setTransactions(derived);
    writeLocalStorage(STORAGE_KEYS.TRANSACTIONS, derived);
  };

  const getAdminMetrics = (): AdminMetrics => {
    const totalCash = transactions.reduce((acc, curr) => acc + curr.amountGhs, 0);
    const activePins = pins.filter((p) => p.status === 'ACTIVE').length;
    const totalQuizzes = Object.values(topicProgress).reduce((acc, curr) => acc + curr.attemptsCount, 0);

    let avgScore = 0;
    if (weeklyExamAttempts.length > 0) {
      const totalScore = weeklyExamAttempts.reduce((acc, curr) => acc + curr.scorePercentage, 0);
      avgScore = Math.round(totalScore / weeklyExamAttempts.length);
    }

    return {
      totalStudents: 0,
      activeToday: 0,
      totalCashFlowGhs: totalCash,
      activePinsCount: activePins,
      totalQuizzesTaken: totalQuizzes,
      averageExamScore: avgScore,
    };
  };

  return (
    <AuthContext.Provider
      value={{
        student,
        isAdmin,
        isLoading,
        topicProgress,
        pins,
        transactions,
        weeklyExamAttempts,
        loginStudent,
        signInStudent,
        registerStudent,
        logoutStudent,
        canAccessTopic,
        getCompletedTopicsCount,
        loginAdmin,
        logoutAdmin,
        updateAdminPins,
        redeemPin,
        recordQuizScore,
        recordWeeklyExamAttempt,
        generatePinBatch,
        refreshPins,
        getAdminMetrics,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { setSessionToken };
