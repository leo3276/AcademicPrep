import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JHS 1, 2 & 3 Curriculum Portal | NaCCA Notes & Quizzes',
  description:
    'Access complete Junior High School (JHS 1, JHS 2, JHS 3) lesson notes, interactive topic quizzes, and past questions based on the new NaCCA Ghana curriculum.',
  keywords: [
    'JHS curriculum notes Ghana',
    'NaCCA JHS syllabus',
    'JHS 1 lesson notes',
    'JHS 2 lesson notes',
    'JHS 3 lesson notes',
    'GES Junior High School curriculum',
    'BECE online study Ghana',
    'Ghana JHS learning portal',
  ],
  alternates: {
    canonical: '/jhs',
  },
};

export default function JhsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
