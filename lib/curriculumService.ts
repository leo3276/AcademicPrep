import { CURRICULUM_SUBJECTS, SHS_CORE_SUBJECTS, ALL_CURRICULUM_TOPICS } from './curriculumData';
import {
  SHS_ELECTIVE_GROUPS,
  ElectiveGroup,
  getElectiveSubjects,
} from './curriculumShsElectives';
import { BECE_PAPERS_CATALOG } from './becePastQuestionsData';
import {
  CurriculumSubject,
  CurriculumTopic,
  EducationLevel,
  TopicQuiz,
  QuizQuestion,
  BECEPaperMeta,
} from './types';

// All subject IDs a WASSCE / SHS student can offer: core subjects plus electives
export const SHS_SUBJECT_IDS: Set<string> = new Set([
  ...SHS_CORE_SUBJECTS.map((s) => s.id),
  ...getElectiveSubjects().map((s) => s.id),
]);

export const CurriculumService = {
  // Get subjects (4 core subjects for SHS, 9 subjects for JHS)
  getSubjects(level?: EducationLevel): CurriculumSubject[] {
    if (level && (level === 'SHS 1' || level === 'SHS 2' || level === 'SHS 3')) {
      return SHS_CORE_SUBJECTS;
    }
    return CURRICULUM_SUBJECTS;
  },

  getSubjectById(subjectId: string, level?: EducationLevel): CurriculumSubject | undefined {
    if (level && (level === 'SHS 1' || level === 'SHS 2' || level === 'SHS 3')) {
      const shsSubj = SHS_CORE_SUBJECTS.find((s) => s.id === subjectId);
      if (shsSubj) return shsSubj;
    }
    return (
      SHS_CORE_SUBJECTS.find((s) => s.id === subjectId) ||
      getElectiveSubjects().find((s) => s.id === subjectId) ||
      CURRICULUM_SUBJECTS.find((s) => s.id === subjectId)
    );
  },

  // WASSCE elective strands (General Science, Business, General Arts, Visual Arts, Agriculture)
  getElectiveGroups(): ElectiveGroup[] {
    return SHS_ELECTIVE_GROUPS;
  },

  getElectiveGroupById(groupId: string): ElectiveGroup | undefined {
    return SHS_ELECTIVE_GROUPS.find((g) => g.id === groupId);
  },

  getTopicsForElectiveGroup(groupId: string): CurriculumTopic[] {
    const group = this.getElectiveGroupById(groupId);
    if (!group) return [];
    const ids = new Set(group.subjects.map((s) => s.id));
    return ALL_CURRICULUM_TOPICS.filter((t) => ids.has(t.subjectId));
  },

  // Get topics filtered by level and optional subject
  getTopics(level: EducationLevel, subjectId?: string, term?: 1 | 2 | 3): CurriculumTopic[] {
    const isElective = subjectId && getElectiveSubjects().some((s) => s.id === subjectId);
    return ALL_CURRICULUM_TOPICS.filter((t) => {
      if (!isElective && t.level !== level) return false;
      if (subjectId && t.subjectId !== subjectId) return false;
      if (term && t.term !== term) return false;
      return true;
    });
  },

  // Get a single topic by ID with detailed notes and quiz
  getTopicById(topicId: string): CurriculumTopic | undefined {
    return ALL_CURRICULUM_TOPICS.find((t) => t.id === topicId);
  },

  // Search topics across curriculum
  searchTopics(query: string, level?: EducationLevel): CurriculumTopic[] {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    const electiveSubjectIds = new Set(getElectiveSubjects().map((s) => s.id));
    return ALL_CURRICULUM_TOPICS.filter((t) => {
      const isElective = electiveSubjectIds.has(t.subjectId);
      if (!isElective && level && t.level !== level) return false;
      return (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keyNotes?.toLowerCase().includes(q)
      );
    });
  },

  // Get quiz for a specific topic
  getQuizForTopic(topicId: string): TopicQuiz | undefined {
    const topic = this.getTopicById(topicId);
    return topic?.quiz;
  },

  // Get all quizzes for a level, optionally filtered by subject
  getQuizzes(level: EducationLevel, subjectId?: string): { topic: CurriculumTopic; quiz: TopicQuiz }[] {
    const topics = this.getTopics(level, subjectId);
    const results: { topic: CurriculumTopic; quiz: TopicQuiz }[] = [];
    for (const t of topics) {
      if (t.quiz && t.quiz.questions && t.quiz.questions.length > 0) {
        results.push({ topic: t, quiz: t.quiz });
      }
    }
    return results;
  },

  // Get all quizzes under a specific subject (core or elective)
  getQuizzesForSubject(subjectId: string, level?: EducationLevel): { topic: CurriculumTopic; quiz: TopicQuiz }[] {
    const isElective = getElectiveSubjects().some((s) => s.id === subjectId);
    let topics: CurriculumTopic[];
    if (isElective) {
      topics = ALL_CURRICULUM_TOPICS.filter((t) => t.subjectId === subjectId);
    } else if (level) {
      topics = ALL_CURRICULUM_TOPICS.filter((t) => t.subjectId === subjectId && t.level === level);
    } else {
      topics = ALL_CURRICULUM_TOPICS.filter((t) => t.subjectId === subjectId);
    }
    const results: { topic: CurriculumTopic; quiz: TopicQuiz }[] = [];
    for (const t of topics) {
      if (t.quiz && t.quiz.questions && t.quiz.questions.length > 0) {
        results.push({ topic: t, quiz: t.quiz });
      }
    }
    return results;
  },

  // Get all quizzes under a specific elective course/group
  getQuizzesForElectiveGroup(groupId: string): { topic: CurriculumTopic; quiz: TopicQuiz }[] {
    const group = this.getElectiveGroupById(groupId);
    if (!group) return [];
    const ids = new Set(group.subjects.map((s) => s.id));
    const results: { topic: CurriculumTopic; quiz: TopicQuiz }[] = [];
    for (const t of ALL_CURRICULUM_TOPICS) {
      if (ids.has(t.subjectId) && t.quiz && t.quiz.questions && t.quiz.questions.length > 0) {
        results.push({ topic: t, quiz: t.quiz });
      }
    }
    return results;
  },

  // Generate an adaptive 15-minute weekly mock exam from available questions
  generateMockExam(
    level: EducationLevel,
    subjectId?: string,
    questionCount: number = 15
  ): {
    title: string;
    questions: QuizQuestion[];
    timeLimitMinutes: number;
  } {
    const quizzes = this.getQuizzes(level, subjectId);
    const allQuestions: QuizQuestion[] = [];
    quizzes.forEach((q) => {
      if (q.quiz?.questions) {
        allQuestions.push(...q.quiz.questions);
      }
    });

    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    const subj = subjectId ? this.getSubjectById(subjectId)?.name : 'All Subjects';

    return {
      title: `${level} Weekly Mock Exam (${subj})`,
      questions: selected,
      timeLimitMinutes: 15,
    };
  },

  // BECE Catalog
  getBeceCatalog(subjectId?: string): BECEPaperMeta[] {
    if (!subjectId) return BECE_PAPERS_CATALOG;
    return BECE_PAPERS_CATALOG.filter((p) => p.subjectId === subjectId);
  },
};
