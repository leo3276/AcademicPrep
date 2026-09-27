import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BECE Trial & Mock Exam Questions (2025) with Detailed Solutions',
  description:
    'Practice high-yield BECE mock examination questions and trial papers prepared by seasoned WAEC examiners and GES teachers across Ghana.',
  keywords: [
    'BECE likely questions',
    'Best brain mock questions',
    'cepme mock questions',
    'GBat mock questions',
    'GES mock questions',
    'Metro mock questions',
    'District mock questions',
    'BECE apor',
    'Mock apor',
    'Marking schemes',
    'BECE trial questions',
    'BECE trial questions Ghana',
    'BECE mock exam 2025',
    'BECE mock questions and answers',
    'JHS mock examination papers',
    'Ghana BECE trial test papers',
    'free questions',
  ],
  alternates: {
    canonical: '/jhs/trial-questions',
  },
};

export default function TrialQuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
