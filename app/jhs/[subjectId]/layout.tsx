import type { Metadata } from 'next';
import { CURRICULUM_SUBJECTS } from '@/lib/curriculumData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}): Promise<Metadata> {
  const { subjectId } = await params;
  const subject = CURRICULUM_SUBJECTS.find((s) => s.id === subjectId);
  const name = subject?.name || 'Subject';

  return {
    title: `BECE ${name} (JHS 1, 2, 3) - Notes, Quizzes & Past Questions`,
    description: `Complete Ghana NaCCA/GES syllabus for ${name}. In-depth lesson notes, step-by-step topic quizzes, and past BECE exam questions.`,
    keywords: [
      `BECE ${name} past questions`,
      `BECE ${name} past questions and answers`,
      `JHS ${name} notes Ghana`,
      `NaCCA ${name} JHS syllabus`,
      `${name} BECE trial questions`,
      `${name} quizzes JHS 1 2 3`,
    ],
    alternates: {
      canonical: `/jhs/${subjectId}`,
    },
  };
}

export default function SubjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
