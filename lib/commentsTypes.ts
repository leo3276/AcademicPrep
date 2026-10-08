export interface LessonComment {
  id: string;
  topicId: string;
  subjectId: string;
  level: string; // e.g. 'JHS 1', 'JHS 3', 'SHS 1'
  studentId: string;
  studentName: string;
  studentPhoneMasked: string; // e.g. '024****123'
  isVip: boolean;
  content: string;
  likesCount: number;
  likedByStudents: string[]; // List of student IDs/phones who liked
  isPinned?: boolean;
  isTeacherReply?: boolean;
  teacherTitle?: string; // e.g. 'Maths Tutor', 'Science Lead'
  createdAt: string;
  status: 'active' | 'hidden';
}

export interface CommentDraft {
  topicId: string;
  subjectId: string;
  level: string;
  content: string;
}
