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

interface AuthContextType {
  student: Student | null;
  isAdmin: boolean;
  isLoading: boolean;
  topicProgress: Record<string, StudentTopicProgress>;
  pins: AccessPin[];
  transactions: CashFlowTransaction[];
  weeklyExamAttempts: WeeklyExamAttempt[];
  loginStudent: (phoneNumber: string, pin: string, fullName?: string, level?: EducationLevel) => Promise<{ success: boolean; error?: string }>;
  logoutStudent: () => void;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;
  redeemPin: (pinCode: string) => Promise<{ success: boolean; message: string }>;
  recordQuizScore: (topicId: string, scorePercentage: number) => void;
  recordWeeklyExamAttempt: (attempt: Omit<WeeklyExamAttempt, 'id' | 'createdAt'>) => void;
  generatePinBatch: (count: number, priceGhs: number, validityDays: number) => AccessPin[];
  getAdminMetrics: () => AdminMetrics;
}

const STORAGE_KEYS = {
  CURRENT_STUDENT: 'academicprep_student',
  IS_ADMIN: 'academicprep_is_admin',
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
    createdAt: new Date().toISOString(),
  },
  {
    id: 'pin-1002',
    pinCode: 'PREP-4412-3321',
    batchId: 'BATCH-JHS-01',
    priceGhs: 25.00,
    validityDays: 30,
    status: 'ACTIVE',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'pin-1003',
    pinCode: 'PREP-9904-7712',
    batchId: 'BATCH-JHS-01',
    priceGhs: 25.00,
    validityDays: 30,
    status: 'REDEEMED',
    redeemedAt: new Date(Date.now() - 86400000).toISOString(),
    createdAt: new Date(Date.now() - 172800000).toISOString(),
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
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'tx-2002',
    reference: 'REF-MOMO-77123',
    studentPhone: '0559876543',
    amountGhs: 25.00,
    transactionType: 'PIN_PURCHASE',
    paymentMethod: 'Telecel Cash',
    description: '30-Day Full JHS Access Pass',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
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

  // Load persisted state from localStorage on mount
  useEffect(() => {
    try {
      const storedStudent = localStorage.getItem(STORAGE_KEYS.CURRENT_STUDENT);
      if (storedStudent) {
        setStudent(JSON.parse(storedStudent));
      }

      const storedAdmin = localStorage.getItem(STORAGE_KEYS.IS_ADMIN);
      if (storedAdmin === 'true') {
        setIsAdmin(true);
      }

      const storedProgress = localStorage.getItem(STORAGE_KEYS.TOPIC_PROGRESS);
      if (storedProgress) {
        setTopicProgress(JSON.parse(storedProgress));
      }

      const storedPins = localStorage.getItem(STORAGE_KEYS.ACCESS_PINS);
      if (storedPins) {
        setPins(JSON.parse(storedPins));
      } else {
        localStorage.setItem(STORAGE_KEYS.ACCESS_PINS, JSON.stringify(DEFAULT_PINS));
      }

      const storedTxs = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
      if (storedTxs) {
        setTransactions(JSON.parse(storedTxs));
      } else {
        localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(DEFAULT_TRANSACTIONS));
      }

      const storedExams = localStorage.getItem(STORAGE_KEYS.EXAM_ATTEMPTS);
      if (storedExams) {
        setWeeklyExamAttempts(JSON.parse(storedExams));
      }
    } catch {
      // Graceful fallback for SSR or restricted storage
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loginStudent = async (
    phoneNumber: string, 
    pin: string, 
    fullName?: string, 
    level?: EducationLevel
  ): Promise<{ success: boolean; error?: string }> => {
    const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
    const cleanPin = pin.trim();

    if (cleanPhone.length < 10) {
      return { success: false, error: 'Please enter a valid phone number (at least 10 digits).' };
    }
    if (cleanPin.length !== 4 || !/^\d{4}$/.test(cleanPin)) {
      return { success: false, error: 'PIN must be exactly 4 digits.' };
    }

    const currentStudent: Student = {
      id: `student-${cleanPhone.slice(-6)}`,
      phoneNumber: cleanPhone,
      fullName: fullName?.trim() || `Student ${cleanPhone.slice(-4)}`,
      currentLevel: level || 'JHS 1',
      hasFullAccess: false,
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
    };

    setStudent(currentStudent);
    localStorage.setItem(STORAGE_KEYS.CURRENT_STUDENT, JSON.stringify(currentStudent));
    return { success: true };
  };

  const logoutStudent = () => {
    setStudent(null);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_STUDENT);
  };

  const loginAdmin = (passcode: string): boolean => {
    // Admin passcode: 9999
    if (passcode.trim() === '9999') {
      setIsAdmin(true);
      localStorage.setItem(STORAGE_KEYS.IS_ADMIN, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem(STORAGE_KEYS.IS_ADMIN);
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
        accessExpiresAt: expiryDate.toISOString(),
      };
      setStudent(updatedStudent);
      localStorage.setItem(STORAGE_KEYS.CURRENT_STUDENT, JSON.stringify(updatedStudent));
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
    const updated: StudentTopicProgress = {
      topicId,
      completed: scorePercentage >= 60,
      bestScorePercentage: prev ? Math.max(prev.bestScorePercentage, scorePercentage) : scorePercentage,
      attemptsCount: (prev?.attemptsCount || 0) + 1,
      lastStudiedAt: new Date().toISOString(),
    };

    const nextState = {
      ...topicProgress,
      [topicId]: updated,
    };

    setTopicProgress(nextState);
    localStorage.setItem(STORAGE_KEYS.TOPIC_PROGRESS, JSON.stringify(nextState));
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
        logoutStudent,
        loginAdmin,
        logoutAdmin,
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
