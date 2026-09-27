import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BECE Trial & Mock Exam Questions (2025) with Detailed Solutions',
  description:
    'Practice high-yield BECE mock examination questions and trial papers prepared by seasoned WAEC examiners and GES teachers across Ghana.',
  keywords: [
    'BECE trial questions Ghana',
    'BECE mock exam 2025',
    'BECE mock questions and answers',
    'JHS mock examination papers',
    'Ghana BECE trial test papers',
    'BECE 2025 trial questions',
    'trial questions for BECE 2025 candidates',
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
