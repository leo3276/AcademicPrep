export interface LessonCommentReply {
  id: string;
  commentId: string; // ID of the parent comment
  studentId: string;
  studentName: string;
  studentPhoneMasked: string; // e.g. '024****123'
  isVip: boolean;
  content: string;
  likesCount: number;
  likedByStudents: string[]; // List of student IDs who liked this reply
  isTeacherReply?: boolean;
  teacherTitle?: string;
  createdAt: string;
  status: 'active' | 'hidden';
}

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
  // Threaded replies
  replies?: LessonCommentReply[];
  // Quoted reply reference
  replyToId?: string;
  replyToName?: string;
  replyToSnippet?: string;
}

export interface CommentDraft {
  topicId: string;
  subjectId: string;
  level: string;
  content: string;
  replyToId?: string;
}
