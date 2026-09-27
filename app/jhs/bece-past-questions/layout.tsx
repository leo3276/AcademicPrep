import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BECE Past Questions & Answers (1990 - 2025) | All Subjects PDF & Online',
  description:
    'Download and practice official WAEC BECE past examination questions with step-by-step marking schemes for Mathematics, Integrated Science, English, Social Studies, ICT, and RME.',
  keywords: [
    'BECE likely questions',
    'BECE apor',
    'How to solve Mathematics',
    'science questions',
    'free questions',
    'Marking schemes',
    'BECE past questions and answers',
    'BECE 2024 past questions pdf',
    'BECE 2025 past questions',
    'BECE 2027 questions',
    'WAEC BECE past questions download',
    'BECE past questions Ghana',
    'BECE integrated science past questions',
    'BECE math past questions with answers',
    'BECE social studies past questions',
    'BECE computing ICT past questions',
    'BECE RME past questions with answers',
    'Ghana BECE past question papers',
  ],
  alternates: {
    canonical: '/jhs/bece-past-questions',
  },
};

export default function BecePastQuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
