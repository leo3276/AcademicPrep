'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  Trophy, 
  TrendingUp, 
  ArrowRight, 
  RefreshCw, 
  Info, 
  BookOpen, 
  Award, 
  Zap, 
  Sliders, 
  ChevronRight,
  Search,
  School,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';

export interface SubjectScore {
  id: string;
  name: string;
  code: string;
  isCore: boolean;
  score: number; // 0 - 100 percentage
}

export interface GhanaSchool {
  name: string;
  category: 'A' | 'B' | 'C' | 'TVET';
  region: string;
  type: 'Boys' | 'Girls' | 'Co-ed' | 'Technical';
  minAgg: number;
  maxAgg: number;
  popularFor?: string;
}

// Comprehensive Ghana CSSPS Senior High Schools Database
export const GHANA_SENIOR_HIGH_SCHOOLS: GhanaSchool[] = [
  // ==========================================
  // CATEGORY A ELITE (Aggregate 6 – 9)
  // ==========================================
  // Boys' Schools
  { name: "Presbyterian Boys' Secondary (PRESEC Legon)", category: 'A', region: 'Greater Accra', type: 'Boys', minAgg: 6, maxAgg: 8, popularFor: 'Science, NSMQ Champions' },
  { name: 'Prempeh College', category: 'A', region: 'Ashanti', type: 'Boys', minAgg: 6, maxAgg: 9, popularFor: 'Science & Business' },
  { name: 'Mfantsipim School ("The School")', category: 'A', region: 'Central', type: 'Boys', minAgg: 6, maxAgg: 9, popularFor: 'Pioneer College, Arts & Science' },
  { name: "St. Augustine's College (AUGUSCO)", category: 'A', region: 'Central', type: 'Boys', minAgg: 6, maxAgg: 9, popularFor: 'Catholic Heritage, Science & Business' },
  { name: 'Opoku Ware School (OWASS)', category: 'A', region: 'Ashanti', type: 'Boys', minAgg: 6, maxAgg: 9, popularFor: 'Science & Technology' },
  { name: "St. Peter's Boys' Senior High (PERSCO)", category: 'A', region: 'Eastern', type: 'Boys', minAgg: 6, maxAgg: 9, popularFor: 'Science Prodigies, Nkwatia' },
  { name: 'Pope John Senior High & Minor Seminary (POJOSS)', category: 'A', region: 'Eastern', type: 'Boys', minAgg: 6, maxAgg: 9, popularFor: 'Academic Discipline, Koforidua' },
  { name: 'Adisadel College (ADISCO)', category: 'A', region: 'Central', type: 'Boys', minAgg: 6, maxAgg: 9, popularFor: 'Zebra Boys, Cape Coast' },
  { name: 'St. James Seminary & Senior High', category: 'A', region: 'Bono', type: 'Boys', minAgg: 6, maxAgg: 8, popularFor: 'Record WASSCE Pass Rates, Sunyani' },
  { name: 'Bishop Herman College (BIHECO)', category: 'A', region: 'Volta', type: 'Boys', minAgg: 6, maxAgg: 9, popularFor: 'Catholic Elite, Kpando' },

  // Girls' Schools
  { name: "Wesley Girls' High School (Wey Gey Hey)", category: 'A', region: 'Central', type: 'Girls', minAgg: 6, maxAgg: 8, popularFor: 'Premier Girls Institution, Cape Coast' },
  { name: "Holy Child School (Angel's Hill)", category: 'A', region: 'Central', type: 'Girls', minAgg: 6, maxAgg: 9, popularFor: 'Excellence & Discipline' },
  { name: "Aburi Girls' Senior High (ABUGISS)", category: 'A', region: 'Eastern', type: 'Girls', minAgg: 6, maxAgg: 9, popularFor: 'Top Boarding, Mountain Breeze' },
  { name: "St. Louis Senior High", category: 'A', region: 'Ashanti', type: 'Girls', minAgg: 6, maxAgg: 9, popularFor: 'Catholic Girls, Oduom Kumasi' },
  { name: "Yaa Asantewaa Girls' Senior High", category: 'A', region: 'Ashanti', type: 'Girls', minAgg: 6, maxAgg: 9, popularFor: 'Tanoso Kumasi, Science & Arts' },
  { name: "Archbishop Porter Girls' Secondary", category: 'A', region: 'Western', type: 'Girls', minAgg: 6, maxAgg: 9, popularFor: 'Premier Western Institution, Takoradi' },
  { name: "St. Roses Senior High (ROSEC)", category: 'A', region: 'Eastern', type: 'Girls', minAgg: 6, maxAgg: 9, popularFor: 'Akwatia, High Academic Ranking' },

  // Co-Educational Category A
  { name: 'Achimota School (Motown)', category: 'A', region: 'Greater Accra', type: 'Co-ed', minAgg: 6, maxAgg: 9, popularFor: 'Historic National Pride, Accra' },
  { name: 'Ghana National College', category: 'A', region: 'Central', type: 'Co-ed', minAgg: 6, maxAgg: 9, popularFor: 'Founded by Kwame Nkrumah' },
  { name: 'Mawuli School', category: 'A', region: 'Volta', type: 'Co-ed', minAgg: 6, maxAgg: 9, popularFor: 'Head, Heart & Hand, Ho' },
  { name: 'Tamale Senior High (TAMASCO)', category: 'A', region: 'Northern', type: 'Co-ed', minAgg: 6, maxAgg: 9, popularFor: 'The Northern Giant, Tamale' },

  // ==========================================
  // CATEGORY B (Aggregate 10 – 15)
  // ==========================================
  { name: 'Accra Academy (Bleoo)', category: 'A', region: 'Greater Accra', type: 'Boys', minAgg: 6, maxAgg: 14, popularFor: 'Business & Science Heavyweight' },
  { name: 'St. Thomas Aquinas Senior High', category: 'A', region: 'Greater Accra', type: 'Boys', minAgg: 8, maxAgg: 15, popularFor: 'Cantonments, NSMQ Champions' },
  { name: 'Kumasi High School (KUHIS)', category: 'B', region: 'Ashanti', type: 'Boys', minAgg: 9, maxAgg: 15, popularFor: 'Gyinyase Kumasi, Science & Business' },
  { name: 'Koforidua Senior High Technical (SECTECH)', category: 'B', region: 'Eastern', type: 'Technical', minAgg: 8, maxAgg: 15, popularFor: 'Eastern Tech Powerhouse' },
  { name: 'Osei Tutu Senior High', category: 'B', region: 'Ashanti', type: 'Boys', minAgg: 9, maxAgg: 15, popularFor: 'Akropong Ashanti' },
  { name: 'Ghanata Senior High', category: 'B', region: 'Greater Accra', type: 'Co-ed', minAgg: 10, maxAgg: 15, popularFor: 'Dodowa, Strong Boarding' },
  { name: "Mfantsiman Girls' Secondary", category: 'B', region: 'Central', type: 'Girls', minAgg: 8, maxAgg: 14, popularFor: 'Saltpond, Top Girls Boarding' },
  { name: "Kumasi Girls' Senior High (KUGISS)", category: 'B', region: 'Ashanti', type: 'Girls', minAgg: 9, maxAgg: 15, popularFor: 'Abrepo Kumasi' },
  { name: "OLA Girls' Senior High", category: 'B', region: 'Volta', type: 'Girls', minAgg: 9, maxAgg: 15, popularFor: 'Our Lady of Apostles, Ho' },
  { name: "St. Mary's Senior High", category: 'B', region: 'Greater Accra', type: 'Girls', minAgg: 9, maxAgg: 15, popularFor: 'Korle Gonno, Accra' },
  { name: 'Notre Dame Minor Seminary', category: 'B', region: 'Upper East', type: 'Boys', minAgg: 8, maxAgg: 14, popularFor: 'Navrongo, Academic Rigor' },
  { name: 'Ghana Senior High School (GHANASS)', category: 'B', region: 'Eastern', type: 'Co-ed', minAgg: 9, maxAgg: 15, popularFor: 'Koforidua' },
  { name: 'Sekondi College (SEKCO)', category: 'B', region: 'Western', type: 'Co-ed', minAgg: 9, maxAgg: 15, popularFor: 'Western Pride' },
  { name: "St. John's School (The Saints)", category: 'B', region: 'Western', type: 'Boys', minAgg: 9, maxAgg: 15, popularFor: 'Sekondi' },
  { name: 'Sunyani Senior High (SUSEC)', category: 'B', region: 'Bono', type: 'Co-ed', minAgg: 9, maxAgg: 15, popularFor: 'Bono Powerhouse' },
  { name: 'Bolgatanga Senior High (BIG BOSS)', category: 'B', region: 'Upper East', type: 'Co-ed', minAgg: 10, maxAgg: 15, popularFor: 'Winkogo Bolgatanga' },
  { name: 'Tamale Islamic Science SHS', category: 'B', region: 'Northern', type: 'Co-ed', minAgg: 9, maxAgg: 14, popularFor: 'Pure Science & Technology' },
  { name: 'Navrongo Senior High (NAVASCO)', category: 'B', region: 'Upper East', type: 'Co-ed', minAgg: 10, maxAgg: 15, popularFor: 'Upper East Flagship' },
  { name: 'Armed Forces Senior High Technical', category: 'B', region: 'Greater Accra', type: 'Technical', minAgg: 10, maxAgg: 15, popularFor: 'Burma Camp, Discipline & Tech' },
  { name: 'Tema Senior High School (TEMASCO)', category: 'B', region: 'Greater Accra', type: 'Co-ed', minAgg: 10, maxAgg: 16, popularFor: 'Tema Harbor City' },
  { name: 'Swedru Senior High (SWESCO)', category: 'B', region: 'Central', type: 'Co-ed', minAgg: 10, maxAgg: 16, popularFor: 'Agona Swedru' },
  { name: 'Labone Senior High', category: 'B', region: 'Greater Accra', type: 'Co-ed', minAgg: 10, maxAgg: 16, popularFor: 'Labone Accra' },
  { name: 'Anglican Senior High (KASS)', category: 'B', region: 'Ashanti', type: 'Co-ed', minAgg: 9, maxAgg: 15, popularFor: 'Asem Kumasi' },
  { name: 'Asanteman Senior High (NANANOM)', category: 'B', region: 'Ashanti', type: 'Co-ed', minAgg: 10, maxAgg: 16, popularFor: 'Bantama Kumasi' },
  { name: 'Keta Senior High Technical (DZOLALI)', category: 'B', region: 'Volta', type: 'Technical', minAgg: 9, maxAgg: 15, popularFor: 'Keta, NSMQ Finalists' },

  // ==========================================
  // CATEGORY C (Aggregate 16 – 24)
  // ==========================================
  { name: 'Osu PRESEC', category: 'C', region: 'Greater Accra', type: 'Co-ed', minAgg: 14, maxAgg: 24, popularFor: 'Osu Accra' },
  { name: 'West Africa Senior High (WASS)', category: 'B', region: 'Greater Accra', type: 'Co-ed', minAgg: 14, maxAgg: 22, popularFor: 'Adenta Accra, NSMQ Finalists' },
  { name: 'Odorgonno Senior High', category: 'B', region: 'Greater Accra', type: 'Co-ed', minAgg: 14, maxAgg: 24, popularFor: 'Awoshie Accra' },
  { name: 'Winneba Senior High (WINNESEC)', category: 'B', region: 'Central', type: 'Co-ed', minAgg: 14, maxAgg: 24, popularFor: 'Winneba' },
  { name: 'Chemu Senior High', category: 'B', region: 'Greater Accra', type: 'Co-ed', minAgg: 14, maxAgg: 22, popularFor: 'Tema Community 4' },
  { name: 'Tarkwa Senior High (TARSCO)', category: 'B', region: 'Western', type: 'Co-ed', minAgg: 14, maxAgg: 24, popularFor: 'Tarkwa Mining Hub' },
  { name: "St. Mary's Boys' Senior High", category: 'B', region: 'Western', type: 'Boys', minAgg: 14, maxAgg: 24, popularFor: 'Apowa Takoradi' },
  { name: 'Nkawie Senior High Technical', category: 'C', region: 'Ashanti', type: 'Technical', minAgg: 15, maxAgg: 24, popularFor: 'Nkawie Ashanti' },
  { name: 'Benkum Senior High', category: 'C', region: 'Eastern', type: 'Co-ed', minAgg: 15, maxAgg: 24, popularFor: 'Larteh Akuapem' },
  { name: 'Nifa Senior High', category: 'C', region: 'Eastern', type: 'Co-ed', minAgg: 15, maxAgg: 24, popularFor: 'Adukrom Akuapem' },
  { name: 'Ofori Panin Senior High (OPASS)', category: 'B', region: 'Eastern', type: 'Co-ed', minAgg: 14, maxAgg: 22, popularFor: 'Kukurantumi' },
  { name: 'Suhum Senior High Technical (SUTEC)', category: 'C', region: 'Eastern', type: 'Technical', minAgg: 16, maxAgg: 24, popularFor: 'Suhum' },
  { name: 'Sogakope Senior High (SOGASCO)', category: 'C', region: 'Volta', type: 'Co-ed', minAgg: 16, maxAgg: 24, popularFor: 'Lower Volta' },
  { name: 'Awudome Senior High (AWUSCO)', category: 'C', region: 'Volta', type: 'Co-ed', minAgg: 15, maxAgg: 24, popularFor: 'Tsito' },
  { name: 'Presbyterian Senior High (Begoro)', category: 'C', region: 'Eastern', type: 'Co-ed', minAgg: 16, maxAgg: 24, popularFor: 'Begoro' },
  { name: 'Christian Methodist Senior High', category: 'C', region: 'Greater Accra', type: 'Co-ed', minAgg: 16, maxAgg: 25, popularFor: 'Aplaku Accra' },
  { name: 'Ashaiman Senior High (ASHAISEC)', category: 'C', region: 'Greater Accra', type: 'Co-ed', minAgg: 16, maxAgg: 25, popularFor: 'Ashaiman' },
  { name: 'Nungua Senior High (NUNSEC)', category: 'C', region: 'Greater Accra', type: 'Co-ed', minAgg: 16, maxAgg: 25, popularFor: 'Nungua Accra' },

  // ==========================================
  // TVET & TECHNICAL INSTITUTES (Aggregate 25 – 30)
  // ==========================================
  { name: 'Accra Technical Training Centre (ATTC)', category: 'TVET', region: 'Greater Accra', type: 'Technical', minAgg: 10, maxAgg: 30, popularFor: 'Premier Technical Training, Kokomlemle' },
  { name: 'Kumasi Technical Institute (KTI)', category: 'TVET', region: 'Ashanti', type: 'Technical', minAgg: 12, maxAgg: 30, popularFor: 'Engineering, Mechanical & Auto' },
  { name: 'Cape Coast Technical Institute', category: 'TVET', region: 'Central', type: 'Technical', minAgg: 15, maxAgg: 30, popularFor: 'Building & Electrical Engineering' },
  { name: 'Takoradi Technical Institute (TTI)', category: 'TVET', region: 'Western', type: 'Technical', minAgg: 14, maxAgg: 30, popularFor: 'Industrial Engineering' },
  { name: 'Kpando Technical Institute', category: 'TVET', region: 'Volta', type: 'Technical', minAgg: 16, maxAgg: 30, popularFor: 'Applied Tech, Volta' },
  { name: "St. Paul's Technical School", category: 'TVET', region: 'Eastern', type: 'Technical', minAgg: 14, maxAgg: 30, popularFor: 'Catholic Technical, Kukurantumi' },
  { name: 'Asuansi Technical Institute', category: 'TVET', region: 'Central', type: 'Technical', minAgg: 16, maxAgg: 30, popularFor: 'Oldest Technical School in Ghana' },
  { name: 'Biriwa Vocational Training Institute', category: 'TVET', region: 'Central', type: 'Technical', minAgg: 18, maxAgg: 32, popularFor: 'Vocational Excellence, Coastal' },
  { name: 'Ada Senior High Technical', category: 'C', region: 'Greater Accra', type: 'Technical', minAgg: 18, maxAgg: 30, popularFor: 'Ada Foah' },
  { name: 'Boso Senior High Technical', category: 'C', region: 'Eastern', type: 'Technical', minAgg: 18, maxAgg: 30, popularFor: 'Asuogyaman' },
  { name: 'Dabala Senior High Technical', category: 'C', region: 'Volta', type: 'Technical', minAgg: 18, maxAgg: 30, popularFor: 'South Tongu' },
  { name: 'Twifo Praso Senior High', category: 'C', region: 'Central', type: 'Co-ed', minAgg: 20, maxAgg: 30, popularFor: 'Twifo' },
  { name: 'Fiapre Senior High', category: 'C', region: 'Bono', type: 'Co-ed', minAgg: 20, maxAgg: 30, popularFor: 'Fiapre Sunyani' },
  { name: 'Walewale Senior High Technical', category: 'C', region: 'North East', type: 'Technical', minAgg: 20, maxAgg: 30, popularFor: 'North East Flagship' },

  // ==========================================
  // VOCATIONAL & REMEDIAL PATHWAYS (Aggregate 31+)
  // ==========================================
  { name: 'NVTI Pilot Training Institute (Kokomlemle)', category: 'TVET', region: 'Greater Accra', type: 'Technical', minAgg: 25, maxAgg: 48, popularFor: 'National Vocational Training Institute' },
  { name: 'Opportunities Industrialization Centre (OICG)', category: 'TVET', region: 'Greater Accra', type: 'Technical', minAgg: 25, maxAgg: 48, popularFor: 'Skills Acquisition, East Legon' },
  { name: 'Youth Leadership & Skills Training Institutes', category: 'TVET', region: 'National', type: 'Technical', minAgg: 25, maxAgg: 50, popularFor: 'Technical Apprenticeship' },
  { name: 'Remedial Examination Prep & Nov-Dec Centers', category: 'TVET', region: 'National', type: 'Co-ed', minAgg: 31, maxAgg: 54, popularFor: 'Core Re-sit & Mastery' },
];

// WAEC Ghana BECE 9-Point Stanine Scale
export function scoreToWaecGrade(score: number): { grade: number; label: string; remark: string; badgeColor: string } {
  const rounded = Math.round(score);
  if (rounded >= 80) return { grade: 1, label: 'Grade 1', remark: 'Highest / Excellent', badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
  if (rounded >= 70) return { grade: 2, label: 'Grade 2', remark: 'Very Good', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
  if (rounded >= 65) return { grade: 3, label: 'Grade 3', remark: 'Good', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' };
  if (rounded >= 60) return { grade: 4, label: 'Grade 4', remark: 'Credit', badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200' };
  if (rounded >= 55) return { grade: 5, label: 'Grade 5', remark: 'Credit', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' };
  if (rounded >= 50) return { grade: 6, label: 'Grade 6', remark: 'Pass', badgeColor: 'bg-amber-100 text-amber-800 border-amber-300' };
  if (rounded >= 45) return { grade: 7, label: 'Grade 7', remark: 'Pass', badgeColor: 'bg-orange-50 text-orange-700 border-orange-200' };
  if (rounded >= 40) return { grade: 8, label: 'Grade 8', remark: 'Pass', badgeColor: 'bg-orange-100 text-orange-800 border-orange-300' };
  return { grade: 9, label: 'Grade 9', remark: 'Fail', badgeColor: 'bg-rose-100 text-rose-800 border-rose-300' };
}

export function gradeToDefaultScore(grade: number): number {
  switch (grade) {
    case 1: return 85;
    case 2: return 75;
    case 3: return 67;
    case 4: return 62;
    case 5: return 57;
    case 6: return 52;
    case 7: return 47;
    case 8: return 42;
    default: return 35;
  }
}

interface BeceGradeCalculatorProps {
  topicProgress?: Record<string, { completed?: boolean; bestScorePercentage?: number; attemptsCount?: number }>;
  studentName?: string;
}

export default function BeceGradeCalculator({ topicProgress = {}, studentName = 'Student' }: BeceGradeCalculatorProps) {
  const initialSubjects: SubjectScore[] = useMemo(() => [
    { id: 'english', name: 'English Language', code: 'ENG', isCore: true, score: 75 },
    { id: 'math', name: 'Mathematics', code: 'MATH', isCore: true, score: 72 },
    { id: 'science', name: 'Integrated Science', code: 'SCI', isCore: true, score: 78 },
    { id: 'social', name: 'Social Studies', code: 'SOC', isCore: true, score: 70 },
    { id: 'ict', name: 'Computing / ICT', code: 'ICT', isCore: false, score: 80 },
    { id: 'rme', name: 'Religious & Moral Education', code: 'RME', isCore: false, score: 76 },
    { id: 'career-tech', name: 'Career Technology', code: 'CTECH', isCore: false, score: 68 },
    { id: 'twi', name: 'Ghanaian Language (Twi)', code: 'TWI', isCore: false, score: 65 },
    { id: 'french', name: 'French Language', code: 'FRE', isCore: false, score: 60 },
  ], []);

  const [scores, setScores] = useState<SubjectScore[]>(initialSubjects);
  const [inputMode, setInputMode] = useState<'slider' | 'grade'>('slider');
  const [autoFilledNotice, setAutoFilledNotice] = useState(false);

  // Schools Drawer & Filter State
  const [showSchoolsDrawer, setShowSchoolsDrawer] = useState(false);
  const [schoolSearchQuery, setSchoolSearchQuery] = useState('');
  const [schoolTypeFilter, setSchoolTypeFilter] = useState<'ALL' | 'Boys' | 'Girls' | 'Co-ed' | 'Technical'>('ALL');

  // Compute student's real average score per subject from topicProgress
  const studentRealSubjectAverages = useMemo(() => {
    const map: Record<string, { totalScore: number; count: number }> = {};

    Object.keys(topicProgress).forEach((topicId) => {
      const topic = JHS_CURRICULUM_TOPICS.find((t) => t.id === topicId);
      if (!topic) return;
      const progress = topicProgress[topicId];
      if (progress && progress.attemptsCount && progress.attemptsCount > 0) {
        if (!map[topic.subjectId]) {
          map[topic.subjectId] = { totalScore: 0, count: 0 };
        }
        map[topic.subjectId].totalScore += progress.bestScorePercentage || 0;
        map[topic.subjectId].count += 1;
      }
    });

    const averages: Record<string, number> = {};
    Object.keys(map).forEach((subId) => {
      averages[subId] = Math.round(map[subId].totalScore / map[subId].count);
    });
    return averages;
  }, [topicProgress]);

  const hasRealPerformanceData = Object.keys(studentRealSubjectAverages).length > 0;

  const handleAutoFillFromPerformance = () => {
    setScores((prev) =>
      prev.map((sub) => {
        const realAvg = studentRealSubjectAverages[sub.id];
        if (realAvg !== undefined) {
          return { ...sub, score: realAvg };
        }
        return sub;
      })
    );
    setAutoFilledNotice(true);
    setTimeout(() => setAutoFilledNotice(false), 3500);
  };

  const handleSetAggregate6Preset = () => {
    setScores((prev) => prev.map((s) => ({ ...s, score: 88 })));
  };

  const handleResetScores = () => {
    setScores(initialSubjects);
  };

  const handleScoreChange = (id: string, newScore: number) => {
    setScores((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: Math.min(100, Math.max(0, newScore)) } : s))
    );
  };

  const handleGradeChange = (id: string, newGrade: number) => {
    const representativeScore = gradeToDefaultScore(newGrade);
    handleScoreChange(id, representativeScore);
  };

  // Official WAEC Best 6 Aggregate Calculation Engine
  const calculationResult = useMemo(() => {
    const evaluated = scores.map((s) => {
      const waec = scoreToWaecGrade(s.score);
      return {
        ...s,
        grade: waec.grade,
        label: waec.label,
        remark: waec.remark,
        badgeColor: waec.badgeColor,
      };
    });

    // 1. Core Subjects (Always compulsory)
    const coreSubjects = evaluated.filter((s) => s.isCore);
    const coreGradesSum = coreSubjects.reduce((acc, curr) => acc + curr.grade, 0);

    // 2. Electives (Pick best 2)
    const electiveSubjects = evaluated.filter((s) => !s.isCore);
    const sortedElectives = [...electiveSubjects].sort((a, b) => {
      if (a.grade !== b.grade) return a.grade - b.grade;
      return b.score - a.score;
    });

    const bestTwoElectives = sortedElectives.slice(0, 2);
    const bestTwoElectivesIds = new Set(bestTwoElectives.map((e) => e.id));
    const electivesGradesSum = bestTwoElectives.reduce((acc, curr) => acc + curr.grade, 0);

    const aggregateTotal = coreGradesSum + electivesGradesSum;

    // Core Disqualification check
    const english = coreSubjects.find((s) => s.id === 'english');
    const math = coreSubjects.find((s) => s.id === 'math');
    const hasCoreDisqualification = (english?.grade === 9) || (math?.grade === 9);

    // Placement Prediction Categories
    let placementCategory = '';
    let placementTitle = '';
    let placementColor = '';
    let placementAdvice = '';
    let aggregateTextColor = 'text-slate-900';

    if (hasCoreDisqualification) {
      placementCategory = 'Disqualified';
      placementTitle = 'Placement At Risk (Core Subject Failure)';
      placementColor = 'border-rose-200 bg-rose-50 text-rose-800';
      aggregateTextColor = 'text-rose-600';
      placementAdvice = 'WAEC and CSSPS require at least Grade 8 in English Language and Mathematics to place a candidate in Senior High School. Targeted intervention is required.';
    } else if (aggregateTotal <= 9) {
      placementCategory = 'Category A (Elite)';
      placementTitle = 'Exceptional Aggregate • Category A Eligible';
      placementColor = 'border-emerald-200 bg-emerald-50 text-emerald-800';
      aggregateTextColor = 'text-emerald-600';
      placementAdvice = 'Pinnacle achievement! Fully qualified for prestigious National Category A boarding institutions across Ghana (Science, General Arts, Business).';
    } else if (aggregateTotal <= 15) {
      placementCategory = 'Category A & B';
      placementTitle = 'Strong Competitive Candidate';
      placementColor = 'border-blue-200 bg-blue-50 text-blue-800';
      aggregateTextColor = 'text-blue-600';
      placementAdvice = 'Highly competitive aggregate. Guaranteed strong qualification for high-tier Category B boarding schools and competitive Category A selections.';
    } else if (aggregateTotal <= 24) {
      placementCategory = 'Category B & C';
      placementTitle = 'Standard Placement Candidate';
      placementColor = 'border-amber-200 bg-amber-50 text-amber-800';
      aggregateTextColor = 'text-amber-600';
      placementAdvice = 'Good qualifying score. Secure qualification across standard Category B and C senior high schools for General Arts, Home Economics, Business, and Visual Arts.';
    } else if (aggregateTotal <= 30) {
      placementCategory = 'Category C & TVET';
      placementTitle = 'Eligible for Category C & Technical Institutes';
      placementColor = 'border-orange-200 bg-orange-50 text-orange-800';
      aggregateTextColor = 'text-orange-600';
      placementAdvice = 'Qualified for Category C community senior high schools and Technical/Vocational Education and Training (TVET) institutions.';
    } else {
      placementCategory = 'Intervention Needed';
      placementTitle = 'Aggregate Above Standard Cutoff (31+)';
      placementColor = 'border-rose-200 bg-rose-50 text-rose-800';
      aggregateTextColor = 'text-rose-600';
      placementAdvice = 'Your aggregate exceeds the standard secondary school cutoff. Target your weaker core subjects to bring your aggregate below 30.';
    }

    // Filter Eligible Schools from Database
    const qualifiedSchools = GHANA_SENIOR_HIGH_SCHOOLS.filter((school) => {
      if (hasCoreDisqualification) return school.maxAgg >= 31;
      return aggregateTotal <= school.maxAgg;
    });

    // Fastest Way to Lower Aggregate
    const improvementOpportunities = evaluated
      .filter((s) => s.grade > 1)
      .map((s) => {
        const nextGradeThreshold = s.grade === 2 ? 80 : s.grade === 3 ? 70 : s.grade === 4 ? 65 : s.grade === 5 ? 60 : s.grade === 6 ? 55 : s.grade === 7 ? 50 : s.grade === 8 ? 45 : 40;
        const marksNeeded = Math.max(1, nextGradeThreshold - s.score);
        return {
          ...s,
          marksNeeded,
          potentialNewGrade: s.grade - 1,
        };
      })
      .sort((a, b) => a.marksNeeded - b.marksNeeded);

    const bestOpportunity = improvementOpportunities[0] || null;

    return {
      evaluated,
      coreSubjects,
      bestTwoElectives,
      bestTwoElectivesIds,
      aggregateTotal,
      aggregateTextColor,
      hasCoreDisqualification,
      placementCategory,
      placementTitle,
      placementColor,
      placementAdvice,
      qualifiedSchools,
      bestOpportunity,
    };
  }, [scores]);

  // Filtered schools for the interactive browser
  const filteredSchools = useMemo(() => {
    return calculationResult.qualifiedSchools.filter((school) => {
      if (schoolTypeFilter !== 'ALL' && school.type !== schoolTypeFilter) return false;
      if (schoolSearchQuery.trim()) {
        const q = schoolSearchQuery.toLowerCase();
        return (
          school.name.toLowerCase().includes(q) ||
          school.region.toLowerCase().includes(q) ||
          (school.popularFor || '').toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [calculationResult.qualifiedSchools, schoolTypeFilter, schoolSearchQuery]);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      {/* Minimal Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              BECE Grade & Aggregate Calculator
            </h2>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
              WAEC Stanine
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Simulate your BECE results, calculate Best 6 aggregate, and explore qualified CSSPS secondary schools.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 sm:pt-0">
          {hasRealPerformanceData && (
            <button
              type="button"
              onClick={handleAutoFillFromPerformance}
              className="py-1 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition cursor-pointer"
              title="Populate scores from your diagnostic quiz history"
            >
              Auto-fill from Quizzes
            </button>
          )}

          <button
            type="button"
            onClick={handleSetAggregate6Preset}
            className="py-1 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition cursor-pointer"
            title="Set all subjects to Grade 1"
          >
            Aggregate 6 Preset
          </button>

          <button
            type="button"
            onClick={handleResetScores}
            className="py-1 px-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-700 text-xs font-medium transition cursor-pointer"
            title="Reset scores"
          >
            Reset
          </button>
        </div>
      </div>

      {autoFilledNotice && (
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs flex items-center gap-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-slate-800 shrink-0" />
          <span>Scores auto-filled from your real diagnostic performance.</span>
        </div>
      )}

      {/* Minimal Result Card */}
      <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Best 6 Aggregate Score
            </span>
            <div className="flex items-baseline gap-3">
              <span className={`text-4xl sm:text-5xl font-mono font-bold tracking-tight ${calculationResult.aggregateTextColor}`}>
                {calculationResult.aggregateTotal}
              </span>
              <span className="text-xs font-medium text-slate-600">
                {calculationResult.placementTitle}
              </span>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider sm:text-right block">
              CSSPS Placement
            </span>
            <span className={`inline-block mt-0.5 px-2.5 py-0.5 rounded-md text-xs font-semibold border ${calculationResult.placementColor}`}>
              {calculationResult.placementCategory}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          {calculationResult.placementAdvice}
        </p>

        {/* Qualified Secondary Schools Drawer Trigger */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-700">
              Qualified Secondary Schools ({calculationResult.qualifiedSchools.length} available)
            </span>

            <button
              type="button"
              onClick={() => setShowSchoolsDrawer(!showSchoolsDrawer)}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <span>{showSchoolsDrawer ? 'Hide Directory' : `Browse All ${calculationResult.qualifiedSchools.length} Schools`}</span>
              {showSchoolsDrawer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Quick School Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {calculationResult.qualifiedSchools.slice(0, 8).map((sch, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] text-slate-700"
              >
                <span>{sch.name}</span>
                <span className="text-[10px] text-slate-400 font-mono ml-1">({sch.region})</span>
              </span>
            ))}
            {calculationResult.qualifiedSchools.length > 8 && !showSchoolsDrawer && (
              <button
                type="button"
                onClick={() => setShowSchoolsDrawer(true)}
                className="text-[11px] text-slate-500 hover:text-slate-800 cursor-pointer pl-1 font-medium"
              >
                +{calculationResult.qualifiedSchools.length - 8} more...
              </button>
            )}
          </div>
        </div>

        {/* Expandable Minimal Schools Explorer */}
        {showSchoolsDrawer && (
          <div className="pt-3 border-t border-slate-100 space-y-3 animate-in fade-in duration-150">
            {/* Search & Type Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by school name, region (e.g. Kumasi, Cape Coast)..."
                  value={schoolSearchQuery}
                  onChange={(e) => setSchoolSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
                {(['ALL', 'Boys', 'Girls', 'Co-ed', 'Technical'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSchoolTypeFilter(t)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer border ${
                      schoolTypeFilter === t
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {t === 'ALL' ? 'All Types' : t}
                  </button>
                ))}
              </div>
            </div>

            {/* School Cards Grid */}
            <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1 rounded-xl border border-slate-100 bg-slate-50/40 p-2">
              {filteredSchools.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-400">
                  No schools found matching &ldquo;{schoolSearchQuery}&rdquo;.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {filteredSchools.map((sch, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1 text-slate-800"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-xs leading-snug">{sch.name}</span>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-slate-100 text-slate-600 shrink-0">
                          Cat {sch.category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                        <span>{sch.region} &bull; {sch.type}</span>
                        <span className="font-mono font-bold text-slate-700">
                          Agg {sch.minAgg}–{sch.maxAgg}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        <p className="text-xs text-slate-500">
          4 Core subjects are compulsory. Top 2 electives are automatically selected for Best 6 aggregate.
        </p>

        <div className="inline-flex p-0.5 bg-slate-100 rounded-lg border border-slate-200 text-xs shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setInputMode('slider')}
            className={`py-1 px-3 rounded-md font-medium transition cursor-pointer ${
              inputMode === 'slider' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sliders (%)
          </button>
          <button
            type="button"
            onClick={() => setInputMode('grade')}
            className={`py-1 px-3 rounded-md font-medium transition cursor-pointer ${
              inputMode === 'grade' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Grade Dropdown (1-9)
          </button>
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {calculationResult.evaluated.map((subj) => {
          const isSelectedElective = !subj.isCore && calculationResult.bestTwoElectivesIds.has(subj.id);

          return (
            <div
              key={subj.id}
              className={`p-3.5 rounded-xl border transition ${
                subj.isCore
                  ? 'bg-white border-slate-200'
                  : isSelectedElective
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-50/50 border-slate-200/80 opacity-70'
              }`}
            >
              <div className="flex items-start justify-between gap-2 pb-2">
                <div className="space-y-0.5 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-slate-900">{subj.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {subj.isCore ? '(Core)' : isSelectedElective ? '(Best Elective)' : '(Dropped)'}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block">{subj.code}</span>
                </div>

                <div className="text-right shrink-0">
                  <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded border ${subj.badgeColor}`}>
                    {subj.label}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">{subj.remark}</p>
                </div>
              </div>

              {/* Input Control */}
              <div className="pt-1.5">
                {inputMode === 'slider' ? (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 text-[10px]">Score:</span>
                      <span className={`font-bold font-mono ${
                        subj.grade <= 2 ? 'text-emerald-600' :
                        subj.grade <= 4 ? 'text-blue-600' :
                        subj.grade <= 6 ? 'text-amber-600' :
                        subj.grade <= 8 ? 'text-orange-600' : 'text-rose-600'
                      }`}>
                        {subj.score}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={subj.score}
                      onChange={(e) => handleScoreChange(subj.id, parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                  </div>
                ) : (
                  <select
                    value={subj.grade}
                    onChange={(e) => handleGradeChange(subj.id, parseInt(e.target.value, 10))}
                    className="w-full py-1.5 px-2.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <option value={1}>Grade 1 (80–100%) - Excellent</option>
                    <option value={2}>Grade 2 (70–79%) - Very Good</option>
                    <option value={3}>Grade 3 (65–69%) - Good</option>
                    <option value={4}>Grade 4 (60–64%) - Credit</option>
                    <option value={5}>Grade 5 (55–59%) - Credit</option>
                    <option value={6}>Grade 6 (50–54%) - Pass</option>
                    <option value={7}>Grade 7 (45–49%) - Pass</option>
                    <option value={8}>Grade 8 (40–44%) - Pass</option>
                    <option value={9}>Grade 9 (0–39%) - Fail</option>
                  </select>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Strategic Improvement Callout */}
      {calculationResult.bestOpportunity && (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700">
          <p className="font-semibold text-slate-900">
            Fastest Opportunity to Lower Your Aggregate:
          </p>
          <p className="text-[11px] leading-relaxed text-slate-600">
            In <strong>{calculationResult.bestOpportunity.name}</strong>, gaining just{' '}
            <strong>+{calculationResult.bestOpportunity.marksNeeded}%</strong> marks will jump you to{' '}
            <strong>Grade {calculationResult.bestOpportunity.potentialNewGrade}</strong>, reducing your Best 6 Aggregate to{' '}
            <strong className="font-mono text-slate-900">{calculationResult.aggregateTotal - 1}</strong>.
          </p>
          <div className="pt-0.5">
            <Link
              href={`/jhs/${calculationResult.bestOpportunity.id}`}
              className="inline-flex items-center gap-1 text-slate-900 hover:underline font-semibold text-[11px]"
            >
              <span>Practice {calculationResult.bestOpportunity.name} Topics &rarr;</span>
            </Link>
          </div>
        </div>
      )}

      {/* Official WAEC Ghana Grading Scale Reference Table */}
      <div className="pt-2">
        <details className="group border border-slate-200 rounded-xl bg-slate-50/50 p-3 sm:p-4 text-xs">
          <summary className="font-bold text-slate-700 cursor-pointer flex items-center justify-between list-none">
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Official WAEC Ghana BECE 9-Point Grading Scale Reference</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
          </summary>
          <div className="pt-3 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 font-semibold text-slate-600 bg-white">
                  <th className="py-2 px-3">Grade</th>
                  <th className="py-2 px-3">Score Range</th>
                  <th className="py-2 px-3">Official WAEC Interpretation</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                <tr><td className="py-1.5 px-3 font-bold text-emerald-700">Grade 1</td><td className="py-1.5 px-3">80% – 100%</td><td className="py-1.5 px-3 font-sans">Excellent</td><td className="py-1.5 px-3 font-sans text-emerald-600 font-bold">Highest</td></tr>
                <tr><td className="py-1.5 px-3 font-bold text-emerald-600">Grade 2</td><td className="py-1.5 px-3">70% – 79%</td><td className="py-1.5 px-3 font-sans">Very Good</td><td className="py-1.5 px-3 font-sans text-emerald-600 font-bold">High</td></tr>
                <tr><td className="py-1.5 px-3 font-bold text-blue-600">Grade 3</td><td className="py-1.5 px-3">65% – 69%</td><td className="py-1.5 px-3 font-sans">Good</td><td className="py-1.5 px-3 font-sans text-blue-600 font-bold">Above Average</td></tr>
                <tr><td className="py-1.5 px-3 font-bold text-cyan-600">Grade 4</td><td className="py-1.5 px-3">60% – 64%</td><td className="py-1.5 px-3 font-sans">Credit</td><td className="py-1.5 px-3 font-sans text-slate-700">Average</td></tr>
                <tr><td className="py-1.5 px-3 font-bold text-amber-600">Grade 5</td><td className="py-1.5 px-3">55% – 59%</td><td className="py-1.5 px-3 font-sans">Credit</td><td className="py-1.5 px-3 font-sans text-slate-700">Average</td></tr>
                <tr><td className="py-1.5 px-3 font-bold text-amber-700">Grade 6</td><td className="py-1.5 px-3">50% – 54%</td><td className="py-1.5 px-3 font-sans">Pass</td><td className="py-1.5 px-3 font-sans text-slate-700">Pass Mark</td></tr>
                <tr><td className="py-1.5 px-3 font-bold text-orange-600">Grade 7</td><td className="py-1.5 px-3">45% – 49%</td><td className="py-1.5 px-3 font-sans">Pass</td><td className="py-1.5 px-3 font-sans text-orange-700">Low Pass</td></tr>
                <tr><td className="py-1.5 px-3 font-bold text-orange-700">Grade 8</td><td className="py-1.5 px-3">40% – 44%</td><td className="py-1.5 px-3 font-sans">Pass</td><td className="py-1.5 px-3 font-sans text-orange-700">Weak Pass</td></tr>
                <tr><td className="py-1.5 px-3 font-bold text-rose-600">Grade 9</td><td className="py-1.5 px-3">0% – 39%</td><td className="py-1.5 px-3 font-sans">Fail</td><td className="py-1.5 px-3 font-sans text-rose-600 font-bold">Fail</td></tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}
