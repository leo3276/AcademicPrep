import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SHS 1, 2 & 3 Curriculum Portal | WAEC / WASSCE Notes & Quizzes',
  description:
    'Access complete Senior High School (SHS 1, SHS 2, SHS 3) lesson notes, interactive topic quizzes, and past questions based on the WAEC / WASSCE syllabus for Core subjects and Elective strands.',
  keywords: [
    'SHS curriculum notes Ghana',
    'WASSCE syllabus Ghana',
    'SHS 1 lesson notes',
    'SHS 2 lesson notes',
    'SHS 3 lesson notes',
    'General Arts notes WASSCE',
    'Business notes WASSCE',
    'Agriculture notes WASSCE',
    'Visual Arts notes WASSCE',
    'General Science notes WASSCE',
  ],
  alternates: {
    canonical: '/shs',
  },
};

export default function ShsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
