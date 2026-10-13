import { EducationLevel } from './types';

export type TimetableGoal = 
  | 'BECE_PREP' 
  | 'WASSCE_PREP'
  | 'MID_TERM' 
  | 'TOPIC_MASTERY' 
  | 'REVISION_CATCHUP';

export type TimetableIntensity = 
  | 'LIGHT'      // 1 to 1.5 hours/day
  | 'BALANCED'   // 2 to 2.5 hours/day (Recommended)
  | 'INTENSIVE';  // 3 to 4 hours/day (Candidate Boot Camp)

export type DailyStudyRhythm = 
  | 'DAWN_ONLY'           // 05:00 AM - 06:30 AM
  | 'AFTERNOON_ONLY'      // 04:00 PM - 06:00 PM
  | 'EVENING_ONLY'        // 07:00 PM - 09:30 PM
  | 'DAWN_AND_EVENING';   // 05:30 AM - 06:30 AM + 07:30 PM - 09:00 PM

export type StudyMode = 
  | 'CONCEPT_REVIEW' 
  | 'WORKED_EXAMPLES' 
  | 'DIAGNOSTIC_QUIZ' 
  | 'PAST_PAPER_DRILL' 
  | 'ACTIVE_RECALL';

export interface TimetablePreferences {
  targetGoal: TimetableGoal;
  intensity: TimetableIntensity;
  dailyRhythm: DailyStudyRhythm;
  daysPerWeek: 5 | 6 | 7;
  sessionDurationMinutes: number; // e.g. 45 or 60
  weakSubjectIds: string[];
  weakTopicIds: string[];
  strongSubjectIds: string[];
  includeWeekendMock: boolean;
}

export interface TimetableSession {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  timeSlot: string;
  subjectId: string;
  subjectName: string;
  subjectCode: string;
  subjectColor: string;
  topicId: string;
  topicTitle: string;
  isWeakSubject: boolean;
  studyMode: StudyMode;
  learningObjective: string;
  isCompleted?: boolean;
}

export interface PersonalTimetable {
  id: string;
  studentId: string;
  studentName: string;
  level: EducationLevel;
  createdAt: string;
  preferences: TimetablePreferences;
  weeklySchedule: Record<string, TimetableSession[]>;
  totalWeeklyHours: number;
  targetedWeakTopicsCount: number;
  completedSessionIds: string[];
}
