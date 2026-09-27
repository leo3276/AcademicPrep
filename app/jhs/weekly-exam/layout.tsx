import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BECE Weekly Timed Exam & Mock Tests | Adaptive Auto-Grading',
  description:
    'Take adaptive, timed weekly examination tests tailored to your curriculum progress. Get immediate scoring, question breakdowns, and performance analytics.',
  keywords: [
    'BECE weekly exam practice',
    'BECE online timed mock test',
    'BECE online quiz test',
    'BECE test papers with timer',
    'JHS weekly mock exam Ghana',
  ],
  alternates: {
    canonical: '/jhs/weekly-exam',
  },
};

export default function WeeklyExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
