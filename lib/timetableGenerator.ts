import { EducationLevel } from './types';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS, SHS_CORE_SUBJECTS, SHS_CURRICULUM_TOPICS } from './curriculumData';
import { SHS_ELECTIVE_SUBJECTS } from './curriculumShsElectives';
import {
  PersonalTimetable,
  TimetablePreferences,
  TimetableSession,
  StudyMode,
} from './timetableTypes';

const DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

export function generatePersonalTimetable(
  studentId: string,
  studentName: string,
  level: EducationLevel,
  preferences: TimetablePreferences
): PersonalTimetable {
  // 1. Detect education strand (JHS or SHS) and gather relevant topics and subjects
  const isShs = level.startsWith('SHS');
  const validLevel = isShs ? level : level.startsWith('JHS') ? level : 'JHS 3';

  const relevantSubjects = isShs
    ? [...SHS_CORE_SUBJECTS, ...SHS_ELECTIVE_SUBJECTS]
    : CURRICULUM_SUBJECTS;

  const relevantTopicsSource = isShs ? SHS_CURRICULUM_TOPICS : JHS_CURRICULUM_TOPICS;
  const levelTopics = relevantTopicsSource.filter((t) => t.level === validLevel);

  // Group topics by subjectId
  const topicsBySubject: Record<string, typeof levelTopics> = {};
  relevantSubjects.forEach((s) => {
    topicsBySubject[s.id] = levelTopics.filter((t) => t.subjectId === s.id);
    // If no topics found for level, fallback to any available for that subject
    if (topicsBySubject[s.id].length === 0) {
      topicsBySubject[s.id] = relevantTopicsSource.filter((t) => t.subjectId === s.id);
    }
  });

  // 2. Identify weak and prioritized topics
  const weakTopicIdSet = new Set(preferences.weakTopicIds || []);
  const weakSubjectIdSet = new Set(preferences.weakSubjectIds || ['math', 'science']);

  // Map to track usage index for rotating topics
  const topicCursor: Record<string, number> = {};
  relevantSubjects.forEach((s) => {
    topicCursor[s.id] = 0;
  });

  // Determine active days based on preferences
  const activeDays = DAYS_ORDER.slice(0, preferences.daysPerWeek);

  // Determine time slots per day based on intensity and daily rhythm
  const getDailySlots = (day: string) => {
    const isWeekend = day === 'Saturday' || day === 'Sunday';

    if (preferences.dailyRhythm === 'DAWN_ONLY') {
      if (preferences.intensity === 'LIGHT') {
        return ['05:15 AM - 06:15 AM'];
      }
      return ['05:00 AM - 05:45 AM', '05:55 AM - 06:40 AM'];
    }

    if (preferences.dailyRhythm === 'AFTERNOON_ONLY') {
      if (preferences.intensity === 'LIGHT') {
        return ['04:30 PM - 05:30 PM'];
      }
      if (preferences.intensity === 'BALANCED') {
        return ['04:00 PM - 04:55 PM', '05:10 PM - 06:05 PM'];
      }
      return ['03:45 PM - 04:35 PM', '04:45 PM - 05:35 PM', '05:45 PM - 06:30 PM'];
    }

    if (preferences.dailyRhythm === 'EVENING_ONLY') {
      if (preferences.intensity === 'LIGHT') {
        return ['07:30 PM - 08:30 PM'];
      }
      if (preferences.intensity === 'BALANCED') {
        return ['07:00 PM - 07:55 PM', '08:10 PM - 09:05 PM'];
      }
      return ['07:00 PM - 07:50 PM', '08:00 PM - 08:50 PM', '09:00 PM - 09:45 PM'];
    }

    // Default & Best Practice: DAWN_AND_EVENING
    if (preferences.intensity === 'LIGHT') {
      return ['05:30 AM - 06:30 AM'];
    }
    if (preferences.intensity === 'BALANCED') {
      return ['05:30 AM - 06:20 AM', '07:30 PM - 08:25 PM'];
    }
    // INTENSIVE
    if (isWeekend) {
      return ['07:00 AM - 08:15 AM', '10:00 AM - 11:30 AM', '04:00 PM - 05:30 PM'];
    }
    return ['05:15 AM - 06:15 AM', '07:00 PM - 07:55 PM', '08:10 PM - 09:00 PM'];
  };

  // Helper to pick a subject using smart interleaving:
  // - Weak subjects get highest frequency (every 2-3 sessions)
  // - Alternates between quantitative (Math, Science) and qualitative/language (English, Social, RME, French, Twi)
  const scheduledSessions: Record<string, TimetableSession[]> = {};
  let sessionCounter = 0;
  let totalMinutes = 0;
  let targetedWeakTopicsScheduled = 0;

  // Pools
  const weakSubjectsList = Array.from(weakSubjectIdSet);
  const coreRemaining = ['english', 'social'].filter((id) => !weakSubjectIdSet.has(id));
  const otherSubjects = relevantSubjects.map((s) => s.id).filter(
    (id) => !weakSubjectIdSet.has(id) && id !== 'english' && id !== 'social'
  );

  activeDays.forEach((day, dayIndex) => {
    const slots = getDailySlots(day);
    const daySessions: TimetableSession[] = [];

    slots.forEach((timeSlot, slotIndex) => {
      sessionCounter++;

      let chosenSubjectId: string;
      let isWeak = false;

      // Special Saturday afternoon CBT past paper block if enabled
      if (day === 'Saturday' && slotIndex === slots.length - 1 && preferences.includeWeekendMock) {
        chosenSubjectId = weakSubjectsList[0] || 'math';
      } else if (day === 'Sunday' && slotIndex === 0) {
        // Sunday morning active recall on weak subjects
        chosenSubjectId = weakSubjectsList[sessionCounter % (weakSubjectsList.length || 1)] || 'science';
        isWeak = true;
      } else {
        // Interleaving formula
        if (slotIndex === 0) {
          // Fresh mind session: alternate weak subjects with Math/Science
          if (weakSubjectsList.length > 0 && dayIndex % 2 === 0) {
            chosenSubjectId = weakSubjectsList[(dayIndex / 2) % weakSubjectsList.length];
            isWeak = true;
          } else {
            chosenSubjectId = 'math';
          }
        } else if (slotIndex === 1) {
          // Second session: alternate with English or Social or other weak subject
          if (weakSubjectsList.length > 1 && dayIndex % 2 === 1) {
            chosenSubjectId = weakSubjectsList[1];
            isWeak = true;
          } else if (coreRemaining.length > 0) {
            chosenSubjectId = coreRemaining[dayIndex % coreRemaining.length];
          } else {
            chosenSubjectId = 'science';
          }
        } else {
          // Third session (Intensive): Electives or active recall
          if (otherSubjects.length > 0) {
            chosenSubjectId = otherSubjects[(dayIndex + slotIndex) % otherSubjects.length];
          } else {
            chosenSubjectId = relevantSubjects[0]?.id || 'math';
          }
        }
      }

      // Check if chosen subject is in weak set
      if (weakSubjectIdSet.has(chosenSubjectId)) {
        isWeak = true;
      }

      const subjectMeta = relevantSubjects.find((s) => s.id === chosenSubjectId) || relevantSubjects[0];
      const availableTopics = topicsBySubject[chosenSubjectId] || [];

      // Pick a topic
      let chosenTopic = availableTopics[0];
      if (availableTopics.length > 0) {
        // Check if there are unvisited user-specified weak topics first
        const specificWeakTopic = availableTopics.find(
          (t) => weakTopicIdSet.has(t.id) && !scheduledSessions[day]?.some((sess) => sess.topicId === t.id)
        );

        if (specificWeakTopic) {
          chosenTopic = specificWeakTopic;
          targetedWeakTopicsScheduled++;
        } else {
          const idx = topicCursor[chosenSubjectId] % availableTopics.length;
          chosenTopic = availableTopics[idx];
          topicCursor[chosenSubjectId] = (topicCursor[chosenSubjectId] || 0) + 1;
        }
      }

      // Pedagogical study mode
      let studyMode: StudyMode = 'CONCEPT_REVIEW';
      let learningObjective = `Master core definitions, key principles, and diagrams for ${chosenTopic?.title || 'this topic'}.`;

      if (day === 'Saturday' && preferences.includeWeekendMock) {
        studyMode = 'PAST_PAPER_DRILL';
        learningObjective = `Solve 10-15 official ${isShs ? 'WASSCE' : 'BECE'} Past Questions on ${chosenTopic?.title || 'the syllabus'} under timed conditions.`;
      } else if (slotIndex === 0) {
        studyMode = 'CONCEPT_REVIEW';
        learningObjective = `Deep-dive reading into ${chosenTopic?.title}: understand core formulas & explain key concepts aloud.`;
      } else if (slotIndex === 1) {
        studyMode = isWeak ? 'WORKED_EXAMPLES' : 'ACTIVE_RECALL';
        learningObjective = isWeak
          ? `Step-by-step problem solving: solve 3 easy, 3 medium, and 2 challenging problems for ${chosenTopic?.title}.`
          : `Self-test without notes: write summary notes and flashcard recall on ${chosenTopic?.title}.`;
      } else {
        studyMode = 'DIAGNOSTIC_QUIZ';
        learningObjective = `Take the 10-question AcademicPrep diagnostic quiz for ${chosenTopic?.title} and review explanations.`;
      }

      totalMinutes += preferences.sessionDurationMinutes || 50;

      const session: TimetableSession = {
        id: `sess-${day.toLowerCase()}-${slotIndex}-${sessionCounter}`,
        day,
        timeSlot,
        subjectId: subjectMeta.id,
        subjectName: subjectMeta.name,
        subjectCode: subjectMeta.code,
        subjectColor: subjectMeta.color,
        topicId: chosenTopic?.id || `${subjectMeta.id}-topic-${sessionCounter}`,
        topicTitle: chosenTopic?.title || `${subjectMeta.name} Core Review`,
        isWeakSubject: isWeak,
        studyMode,
        learningObjective,
        isCompleted: false,
      };

      daySessions.push(session);
    });

    scheduledSessions[day] = daySessions;
  });

  return {
    id: `timetable-${Date.now()}`,
    studentId,
    studentName: studentName || 'Candidate',
    level: validLevel,
    createdAt: new Date().toISOString(),
    preferences,
    weeklySchedule: scheduledSessions,
    totalWeeklyHours: Math.round((totalMinutes / 60) * 10) / 10,
    targetedWeakTopicsCount: Math.max(targetedWeakTopicsScheduled, preferences.weakTopicIds?.length || 0),
    completedSessionIds: [],
  };
}

export const LOCAL_STORAGE_TIMETABLE_KEY = 'academicprep_personal_timetable';

export function saveTimetableToStorage(timetable: PersonalTimetable): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_STORAGE_TIMETABLE_KEY, JSON.stringify(timetable));
    // Also dispatch custom event for instant cross-component updates
    window.dispatchEvent(new CustomEvent('academicprep:timetable-updated', { detail: timetable }));
  } catch (e) {
    console.error('Failed to save timetable to localStorage', e);
  }
}

export function loadTimetableFromStorage(): PersonalTimetable | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_TIMETABLE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PersonalTimetable;
  } catch (e) {
    console.warn('Failed to parse timetable from localStorage', e);
    return null;
  }
}
