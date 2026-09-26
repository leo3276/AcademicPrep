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
  registerStudentInSupabase,
  loginStudentInSupabase,
  fetchStudentProgressFromSupabase,
  saveTopicProgressToSupabase,
  redeemPinInSupabase,
  fetchWeeklyExamsFromSupabase
} from './supabaseService';

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
  logoutStudent: () => void;
  canAccessTopic: (topicId: string) => { allowed: boolean; reason?: string; topicsUsed: number; maxFreeTopics: number };
  getCompletedTopicsCount: () => number;
  loginAdmin: (primaryPin: string, secondaryPin: string) => boolean;
  logoutAdmin: () => void;
  verifyPrimaryPin: (pin: string) => boolean;
  verifySecondaryPin: (pin: string) => boolean;
  updateAdminPins: (newPrimary: string, newSecondary: string) => boolean;
  getAdminPins: () => { primary: string; secondary: string };
  redeemPin: (pinCode: string) => Promise<{ success: boolean; message: string }>;
  recordQuizScore: (topicId: string, scorePercentage: number) => void;
  recordWeeklyExamAttempt: (attempt: Omit<WeeklyExamAttempt, 'id' | 'createdAt'>) => void;
  generatePinBatch: (count: number, priceGhs: number, validityDays: number) => AccessPin[];
  getAdminMetrics: () => AdminMetrics;
}

export const DEFAULT_ADMIN_PRIMARY_PIN = '9276@Dollar';
export const DEFAULT_ADMIN_SECONDARY_PIN = '9276@AcademicPrep';

const STORAGE_KEYS = {
  CURRENT_STUDENT: 'academicprep_student',
  IS_ADMIN: 'academicprep_is_admin',
  ADMIN_PRIMARY_PIN: 'academicprep_admin_primary_pin',
  ADMIN_SECONDARY_PIN: 'academicprep_admin_secondary_pin',
  TOPIC_PROGRESS: 'academicprep_topic_progress',
  ACCESS_PINS: 'academicprep_access_pins',
  TRANSACTIONS: 'academicprep_cash_flow',
  EXAM_ATTEMPTS: 'academicprep_exam_attempts',
};

const DEFAULT_PINS: AccessPin[] = [
  {
    id: 'pin-1001',
    pinCode: 'PREP-8842-9901',
    batchId: 'BATCH-JHS-01',
    priceGhs: 25.00,
    validityDays: 30,
    status: 'ACTIVE',
    createdAt: '2026-09-24T10:00:00.000Z',
  },
  {
    id: 'pin-1002',
    pinCode: 'PREP-4412-3321',
    batchId: 'BATCH-JHS-01',
    priceGhs: 25.00,
    validityDays: 30,
    status: 'ACTIVE',
    createdAt: '2026-09-24T10:00:00.000Z',
  },
  {
    id: 'pin-1003',
    pinCode: 'PREP-9904-7712',
    batchId: 'BATCH-JHS-01',
    priceGhs: 25.00,
    validityDays: 30,
    status: 'REDEEMED',
    redeemedAt: '2026-09-23T10:00:00.000Z',
    createdAt: '2026-09-22T10:00:00.000Z',
  },
];

const DEFAULT_TRANSACTIONS: CashFlowTransaction[] = [
  {
    id: 'tx-2001',
    reference: 'REF-MOMO-88392',
    studentPhone: '0241234567',
    amountGhs: 25.00,
    transactionType: 'PIN_PURCHASE',
    paymentMethod: 'MTN Mobile Money',
    pinCodeUsed: 'PREP-9904-7712',
    description: '30-Day Full JHS Access Pass',
    createdAt: '2026-09-23T10:00:00.000Z',
  },
  {
    id: 'tx-2002',
    reference: 'REF-MOMO-77123',
    studentPhone: '0559876543',
    amountGhs: 25.00,
    transactionType: 'PIN_PURCHASE',
    paymentMethod: 'Telecel Cash',
    description: '30-Day Full JHS Access Pass',
    createdAt: '2026-09-22T10:00:00.000Z',
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [topicProgress, setTopicProgress] = useState<Record<string, StudentTopicProgress>>({});
  const [pins, setPins] = useState<AccessPin[]>(DEFAULT_PINS);
  const [transactions, setTransactions] = useState<CashFlowTransaction[]>(DEFAULT_TRANSACTIONS);
  const [weeklyExamAttempts, setWeeklyExamAttempts] = useState<WeeklyExamAttempt[]>([]);

  // Load persisted state from localStorage on mount and sync with Supabase
  useEffect(() => {
    let isMounted = true;

    async function initializeAuth() {
      try {
        let activeStudent: Student | null = null;
        const storedStudentStr = localStorage.getItem(STORAGE_KEYS.CURRENT_STUDENT);
        if (storedStudentStr) {
          activeStudent = JSON.parse(storedStudentStr);
          if (isMounted) setStudent(activeStudent);
        }

        if (typeof window !== 'undefined') {
          const sessionAdmin = sessionStorage.getItem(STORAGE_KEYS.IS_ADMIN);
          if (sessionAdmin === 'true') {
            if (isMounted) setIsAdmin(true);
          } else {
            if (isMounted) setIsAdmin(false);
            localStorage.removeItem(STORAGE_KEYS.IS_ADMIN);
          }
        }

        // Load account-specific topic progress
        if (activeStudent && activeStudent.phoneNumber) {
          const phone = activeStudent.phoneNumber;
          let studentProgress: Record<string, StudentTopicProgress> = {};
          
          const localScoped = localStorage.getItem(`academicprep_progress_${phone}`);
          if (localScoped) {
            try {
              studentProgress = JSON.parse(localScoped);
            } catch {}
          } else {
            // Check legacy key for initial migration
            const legacyProgress = localStorage.getItem(STORAGE_KEYS.TOPIC_PROGRESS);
            if (legacyProgress) {
              try {
                studentProgress = JSON.parse(legacyProgress);
              } catch {}
            }
          }

          if (isMounted) setTopicProgress(studentProgress);

          // Background sync from Supabase
          try {
            const supaProgress = await fetchStudentProgressFromSupabase(phone);
            if (supaProgress && Object.keys(supaProgress).length > 0 && isMounted) {
              setTopicProgress(prev => {
                const merged = { ...prev, ...supaProgress };
                localStorage.setItem(`academicprep_progress_${phone}`, JSON.stringify(merged));
                return merged;
              });
            }
          } catch (err) {
            console.error('Supabase progress sync error:', err);
          }

          // Background fetch weekly exams for this student
          try {
            const supaExams = await fetchWeeklyExamsFromSupabase(phone);
            if (Array.isArray(supaExams) && supaExams.length > 0 && isMounted) {
              const formattedExams: WeeklyExamAttempt[] = supaExams.map((e: any) => ({
                id: e.id,
                studentId: e.student_phone || phone,
                level: e.level,
                coveredTopicIds: [],
                totalQuestions: e.paper1_total || 20,
                correctAnswers: e.paper1_score || 0,
                scorePercentage: e.composite_total_percentage || 0,
                timeSpentSeconds: 1200,
                createdAt: e.completed_at
              }));
              setWeeklyExamAttempts(formattedExams);
            }
          } catch (err) {
            console.error('Supabase exams fetch error:', err);
          }
        } else {
          if (isMounted) {
            setTopicProgress({});
            setWeeklyExamAttempts([]);
          }
        }

        const storedPins = localStorage.getItem(STORAGE_KEYS.ACCESS_PINS);
        if (storedPins) {
          if (isMounted) setPins(JSON.parse(storedPins));
        } else {
          localStorage.setItem(STORAGE_KEYS.ACCESS_PINS, JSON.stringify(DEFAULT_PINS));
        }

        const storedTxs = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
        if (storedTxs) {
          if (isMounted) setTransactions(JSON.parse(storedTxs));
        } else {
          localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(DEFAULT_TRANSACTIONS));
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

  /**
   * Register a new student account in Supabase
   */
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

    let hasFullAccess = false;
    let accessType: 'Full Pass' | 'Free Trial' = 'Free Trial';
    let accessExpiresAt: string | undefined = undefined;

    // Check Access PIN if supplied
    if (params.accessPinCode && params.accessPinCode.trim()) {
      const cleanPin = params.accessPinCode.trim().toUpperCase();
      const targetPinIdx = pins.findIndex(p => p.pinCode === cleanPin);
      if (targetPinIdx >= 0 && pins[targetPinIdx].status === 'ACTIVE') {
        const targetPin = pins[targetPinIdx];
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + targetPin.validityDays);
        hasFullAccess = true;
        accessType = 'Full Pass';
        accessExpiresAt = expiry.toISOString();

        // Mark pin redeemed
        const updatedPins = [...pins];
        updatedPins[targetPinIdx] = {
          ...targetPin,
          status: 'REDEEMED',
          redeemedAt: new Date().toISOString(),
        };
        setPins(updatedPins);
        localStorage.setItem(STORAGE_KEYS.ACCESS_PINS, JSON.stringify(updatedPins));
      } else {
        return { 
          success: false, 
          error: 'The Access PIN entered is invalid or already redeemed. Leave the PIN field empty to start with 3 free trial topics.' 
        };
      }
    }

    // Register with Supabase
    const supaRes = await registerStudentInSupabase({
      phoneNumber: cleanPhone,
      fullName: params.fullName,
      password: params.password,
      currentLevel: params.currentLevel,
      hasFullAccess,
      accessType,
      accessExpiresAt,
    });

    if (!supaRes.success) {
      return { success: false, error: supaRes.error };
    }

    const newStudent = supaRes.student || {
      id: `student-${cleanPhone.slice(-6)}`,
      phoneNumber: cleanPhone,
      fullName: params.fullName.trim(),
      currentLevel: params.currentLevel,
      hasFullAccess,
      accessType,
      accessExpiresAt,
      completedTopicIds: [],
      topicsCompletedCount: 0,
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
    };

    // Initialize completely clean per-account state (no cross-account data leakage)
    setStudent(newStudent);
    setTopicProgress({});
    setWeeklyExamAttempts([]);
    localStorage.setItem(STORAGE_KEYS.CURRENT_STUDENT, JSON.stringify(newStudent));
    localStorage.setItem(`academicprep_progress_${cleanPhone}`, JSON.stringify({}));
    localStorage.removeItem(STORAGE_KEYS.TOPIC_PROGRESS);

    // Sync to API endpoint for redundancy
    try {
      fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: cleanPhone,
          name: params.fullName,
          level: params.currentLevel,
          accessType,
          accessExpiresAt,
        })
      }).catch(console.error);
    } catch {}

    return { success: true };
  };

  /**
   * Sign In an existing student with Phone Number + Password/PIN
   */
  const signInStudent = async (
    phoneNumber: string,
    password?: string
  ): Promise<{ success: boolean; error?: string }> => {
    const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
    if (cleanPhone.length < 10) {
      return { success: false, error: 'Please enter a valid phone number (at least 10 digits).' };
    }

    // 1. Authenticate with Supabase
    const supaRes = await loginStudentInSupabase(cleanPhone, password);
    if (!supaRes.success || !supaRes.student) {
      return { success: false, error: supaRes.error || 'Authentication failed. Please check your credentials.' };
    }

    const authenticatedStudent = supaRes.student;

    // 2. Fetch this student's isolated topic progress from Supabase
    const supaProgress = await fetchStudentProgressFromSupabase(cleanPhone);
    
    // Check account-scoped local cache
    let localProgress: Record<string, StudentTopicProgress> = {};
    try {
      const raw = localStorage.getItem(`academicprep_progress_${cleanPhone}`);
      if (raw) localProgress = JSON.parse(raw);
    } catch {}

    const mergedProgress = { ...localProgress, ...supaProgress };

    // 3. Fetch this student's isolated weekly exam attempts
    const supaExams = await fetchWeeklyExamsFromSupabase(cleanPhone);
    const examAttempts: WeeklyExamAttempt[] = Array.isArray(supaExams) ? supaExams.map((e: any) => ({
      id: e.id,
      studentId: e.student_phone || cleanPhone,
      level: e.level,
      coveredTopicIds: [],
      totalQuestions: e.paper1_total || 20,
      correctAnswers: e.paper1_score || 0,
      scorePercentage: e.composite_total_percentage || 0,
      timeSpentSeconds: 1200,
      createdAt: e.completed_at
    })) : [];

    // 4. Update memory state for this student only
    setStudent(authenticatedStudent);
    setTopicProgress(mergedProgress);
    setWeeklyExamAttempts(examAttempts);

    // 5. Persist student and isolated cache
    localStorage.setItem(STORAGE_KEYS.CURRENT_STUDENT, JSON.stringify(authenticatedStudent));
    localStorage.setItem(`academicprep_progress_${cleanPhone}`, JSON.stringify(mergedProgress));

    return { success: true };
  };

  /**
   * Backwards-compatible loginStudent helper
   */
  const loginStudent = async (
    phoneNumber: string, 
    fullNameOrPin: string, 
    levelOrFullName?: EducationLevel | string, 
    accessPinCode?: string
  ): Promise<{ success: boolean; error?: string }> => {
    const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
    let fullName = '';
    let level: EducationLevel = 'JHS 1';
    let pinCode: string | undefined = undefined;

    if (fullNameOrPin && fullNameOrPin.length === 4 && /^\d{4}$/.test(fullNameOrPin) && typeof levelOrFullName === 'string' && levelOrFullName.length > 2) {
      fullName = levelOrFullName.trim();
      level = 'JHS 1';
    } else {
      fullName = fullNameOrPin ? fullNameOrPin.trim() : '';
      if (levelOrFullName && ['JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3', 'UNIVERSITY'].includes(levelOrFullName as string)) {
        level = levelOrFullName as EducationLevel;
      }
      pinCode = accessPinCode?.trim();
    }

    if (fullName) {
      const regRes = await registerStudent({
        phoneNumber: cleanPhone,
        fullName,
        currentLevel: level,
        accessPinCode: pinCode,
      });
      if (regRes.success) return { success: true };
      if (regRes.error && regRes.error.toLowerCase().includes('already exists')) {
        return await signInStudent(cleanPhone);
      }
      return regRes;
    } else {
      return await signInStudent(cleanPhone);
    }
  };

  /**
   * Log out current student and completely isolate state
   */
  const logoutStudent = () => {
    setStudent(null);
    setTopicProgress({});
    setWeeklyExamAttempts([]);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_STUDENT);
    localStorage.removeItem(STORAGE_KEYS.TOPIC_PROGRESS);
  };

  const getCompletedTopicsCount = (): number => {
    return Object.keys(topicProgress).filter(id => topicProgress[id]?.completed).length;
  };

  const canAccessTopic = (topicId: string): { allowed: boolean; reason?: string; topicsUsed: number; maxFreeTopics: number } => {
    const maxFreeTopics = 3;
    if (student?.hasFullAccess) {
      return { allowed: true, topicsUsed: 0, maxFreeTopics };
    }

    const completedIds = Object.keys(topicProgress).filter(id => topicProgress[id]?.completed);
    const topicsUsed = completedIds.length;

    // If student already completed this topic, allow reviewing notes and quiz
    if (completedIds.includes(topicId)) {
      return { allowed: true, topicsUsed, maxFreeTopics };
    }

    // If student has completed 3 or more topics across all subjects, lock the 4th
    if (topicsUsed >= maxFreeTopics) {
      return {
        allowed: false,
        reason: `You have completed your ${maxFreeTopics} free trial topics across all subjects. To unlock this 4th topic and unlimited learning, please enter or buy an Access PIN.`,
        topicsUsed,
        maxFreeTopics
      };
    }

    return { allowed: true, topicsUsed, maxFreeTopics };
  };

  const loginAdmin = (primaryPin: string, secondaryPin: string): boolean => {
    let expectedPrimary = DEFAULT_ADMIN_PRIMARY_PIN;
    let expectedSecondary = DEFAULT_ADMIN_SECONDARY_PIN;

    if (typeof window !== 'undefined') {
      const storedPrimary = localStorage.getItem(STORAGE_KEYS.ADMIN_PRIMARY_PIN);
      const storedSecondary = localStorage.getItem(STORAGE_KEYS.ADMIN_SECONDARY_PIN);
      if (storedPrimary) expectedPrimary = storedPrimary;
      if (storedSecondary) expectedSecondary = storedSecondary;
    }

    if (
      primaryPin.trim() === expectedPrimary.trim() && 
      secondaryPin.trim() === expectedSecondary.trim()
    ) {
      setIsAdmin(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.IS_ADMIN, 'true');
        sessionStorage.setItem(STORAGE_KEYS.IS_ADMIN, 'true');
      }
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.IS_ADMIN);
      sessionStorage.removeItem(STORAGE_KEYS.IS_ADMIN);
    }
  };

  const verifyPrimaryPin = (pin: string): boolean => {
    let expectedPrimary = DEFAULT_ADMIN_PRIMARY_PIN;
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEYS.ADMIN_PRIMARY_PIN);
      if (stored) expectedPrimary = stored;
    }
    return pin.trim() === expectedPrimary.trim();
  };

  const verifySecondaryPin = (pin: string): boolean => {
    let expectedSecondary = DEFAULT_ADMIN_SECONDARY_PIN;
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEYS.ADMIN_SECONDARY_PIN);
      if (stored) expectedSecondary = stored;
    }
    return pin.trim() === expectedSecondary.trim();
  };

  const updateAdminPins = (newPrimary: string, newSecondary: string): boolean => {
    if (!newPrimary.trim() || !newSecondary.trim()) return false;
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.ADMIN_PRIMARY_PIN, newPrimary.trim());
      localStorage.setItem(STORAGE_KEYS.ADMIN_SECONDARY_PIN, newSecondary.trim());
    }
    return true;
  };

  const getAdminPins = () => {
    let primary = DEFAULT_ADMIN_PRIMARY_PIN;
    let secondary = DEFAULT_ADMIN_SECONDARY_PIN;
    if (typeof window !== 'undefined') {
      const p = localStorage.getItem(STORAGE_KEYS.ADMIN_PRIMARY_PIN);
      const s = localStorage.getItem(STORAGE_KEYS.ADMIN_SECONDARY_PIN);
      if (p) primary = p;
      if (s) secondary = s;
    }
    return { primary, secondary };
  };

  const redeemPin = async (pinCode: string): Promise<{ success: boolean; message: string }> => {
    const cleanCode = pinCode.trim().toUpperCase();
    const pinIndex = pins.findIndex(p => p.pinCode === cleanCode);

    if (pinIndex === -1) {
      return { success: false, message: 'Invalid PIN code. Please verify the code and try again.' };
    }

    const targetPin = pins[pinIndex];
    if (targetPin.status !== 'ACTIVE') {
      return { success: false, message: 'This PIN code has already been redeemed or is no longer valid.' };
    }

    const updatedPins = [...pins];
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + targetPin.validityDays);

    updatedPins[pinIndex] = {
      ...targetPin,
      status: 'REDEEMED',
      redeemedByStudentId: student?.id,
      redeemedAt: new Date().toISOString(),
    };

    setPins(updatedPins);
    localStorage.setItem(STORAGE_KEYS.ACCESS_PINS, JSON.stringify(updatedPins));

    if (student) {
      const updatedStudent: Student = {
        ...student,
        hasFullAccess: true,
        accessType: 'Full Pass',
        accessExpiresAt: expiryDate.toISOString(),
      };
      setStudent(updatedStudent);
      localStorage.setItem(STORAGE_KEYS.CURRENT_STUDENT, JSON.stringify(updatedStudent));

      // Sync upgrade to Supabase
      redeemPinInSupabase(student.phoneNumber, targetPin.validityDays).catch(console.error);

      // Sync upgrade to server
      try {
        fetch('/api/students', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: student.phoneNumber,
            accessType: 'Full Pass',
            accessExpiresAt: expiryDate.toISOString()
          })
        }).catch(console.error);
      } catch {
        // ignore
      }
    }

    // Record cash flow entry
    const newTx: CashFlowTransaction = {
      id: `tx-${Date.now()}`,
      reference: `REF-${Math.floor(100000 + Math.random() * 900000)}`,
      studentId: student?.id,
      studentPhone: student?.phoneNumber || 'Direct PIN',
      amountGhs: targetPin.priceGhs,
      transactionType: 'PIN_PURCHASE',
      paymentMethod: 'Scratch-Card / PIN Voucher',
      pinCodeUsed: targetPin.pinCode,
      description: `${targetPin.validityDays}-Day Full JHS Access Pass`,
      createdAt: new Date().toISOString(),
    };

    const updatedTxs = [newTx, ...transactions];
    setTransactions(updatedTxs);
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(updatedTxs));

    return { 
      success: true, 
      message: `Full Access granted! Your pass is valid for ${targetPin.validityDays} days until ${expiryDate.toLocaleDateString()}.` 
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

    const nextState = {
      ...topicProgress,
      [topicId]: updated,
    };

    setTopicProgress(nextState);

    // Update student's completed topics count and persist to isolated storage
    if (student) {
      const studentPhone = student.phoneNumber;
      localStorage.setItem(`academicprep_progress_${studentPhone}`, JSON.stringify(nextState));

      // Persist to Supabase
      saveTopicProgressToSupabase({
        phoneNumber: studentPhone,
        topicId,
        scorePercentage
      }).catch(console.error);

      const allCompleted = Object.keys(nextState).filter(id => nextState[id]?.completed);
      const updatedStudent: Student = {
        ...student,
        completedTopicIds: allCompleted,
        topicsCompletedCount: allCompleted.length,
        lastActiveAt: new Date().toISOString()
      };
      setStudent(updatedStudent);
      localStorage.setItem(STORAGE_KEYS.CURRENT_STUDENT, JSON.stringify(updatedStudent));

      // Sync to server for real leaderboard
      try {
        fetch('/api/students', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: student.phoneNumber,
            topicIdCompleted: isCompleted ? topicId : undefined,
            newQuizScore: scorePercentage
          })
        }).catch(console.error);
      } catch {
        // ignore
      }
    } else {
      localStorage.setItem(STORAGE_KEYS.TOPIC_PROGRESS, JSON.stringify(nextState));
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
    localStorage.setItem(STORAGE_KEYS.EXAM_ATTEMPTS, JSON.stringify(nextState));
  };

  const generatePinBatch = (count: number, priceGhs: number, validityDays: number): AccessPin[] => {
    const batchId = `BATCH-${Date.now().toString().slice(-6)}`;
    const newBatch: AccessPin[] = [];

    for (let i = 0; i < count; i++) {
      const part1 = Math.floor(1000 + Math.random() * 9000);
      const part2 = Math.floor(1000 + Math.random() * 9000);
      newBatch.push({
        id: `pin-${Date.now()}-${i}`,
        pinCode: `PREP-${part1}-${part2}`,
        batchId,
        priceGhs,
        validityDays,
        status: 'ACTIVE',
        createdAt: new Date().toISOString(),
      });
    }

    const updated = [...newBatch, ...pins];
    setPins(updated);
    localStorage.setItem(STORAGE_KEYS.ACCESS_PINS, JSON.stringify(updated));
    return newBatch;
  };

  const getAdminMetrics = (): AdminMetrics => {
    const totalCash = transactions.reduce((acc, curr) => acc + curr.amountGhs, 0);
    const activePins = pins.filter(p => p.status === 'ACTIVE').length;
    const totalQuizzes = Object.values(topicProgress).reduce((acc, curr) => acc + curr.attemptsCount, 0);
    
    let avgScore = 0;
    if (weeklyExamAttempts.length > 0) {
      const totalScore = weeklyExamAttempts.reduce((acc, curr) => acc + curr.scorePercentage, 0);
      avgScore = Math.round(totalScore / weeklyExamAttempts.length);
    }

    return {
      totalStudents: 8250, // Representative of the 8,000+ WhatsApp student base
      activeToday: 640,
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
        verifyPrimaryPin,
        verifySecondaryPin,
        updateAdminPins,
        getAdminPins,
        redeemPin,
        recordQuizScore,
        recordWeeklyExamAttempt,
        generatePinBatch,
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
