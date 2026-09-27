import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/authContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrafficTracker from '@/components/TrafficTracker';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.acadmicprep.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AcademicPrep Ghana | BECE Past Questions, Mock Exams & JHS Curriculum Notes',
    template: '%s | AcademicPrep Ghana',
  },
  description:
    'Ghana’s premier online study platform for JHS 1, 2, and 3 students. Access 30+ years of WAEC BECE past questions and answers, NaCCA syllabus curriculum notes, interactive chapter quizzes, and weekly mock exams across all 9 subjects.',
  keywords: [
    // Core high-volume BECE searches in Ghana
    'BECE past questions and answers',
    'BECE past questions',
    'BECE 2024 past questions',
    'BECE 2025 mock questions and answers',
    'BECE past questions download pdf',
    'WAEC BECE Ghana past questions',
    'BECE past questions with solutions',
    'BECE trial questions Ghana',
    'BECE mock exam questions 2025',
    'BECE weekly exam practice online',
    'BECE syllabus Ghana',
    // Subject specific queries
    'BECE Mathematics past questions and answers',
    'BECE Integrated Science past questions',
    'BECE English Language past questions',
    'BECE Social Studies past questions and notes',
    'BECE Computing ICT past questions',
    'BECE RME past questions and answers',
    'BECE French Language past questions',
    'BECE Akuapem Twi past questions',
    'BECE Career Technology questions',
    // JHS Curriculum & Lesson Notes
    'JHS curriculum notes Ghana',
    'NaCCA JHS syllabus notes',
    'GES JHS 1 2 3 lesson notes',
    'JHS science notes',
    'JHS mathematics notes Ghana',
    'JHS online quizzes and tests',
    // Brand & Platform searches
    'AcademicPrep Ghana',
    'AcademicPrep',
    'academicprep portal',
    'BECE online preparation portal Ghana',
    'best BECE revision website Ghana',
    'BECE study portal online'
  ],
  authors: [{ name: 'AcademicPrep Ghana', url: siteUrl }],
  creator: 'AcademicPrep Ghana',
  publisher: 'AcademicPrep Ghana',
  applicationName: 'AcademicPrep Ghana',
  category: 'education',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AcademicPrep Ghana | BECE Past Questions, Mock Exams & JHS Notes',
    description:
      'Prepare for WAEC BECE with 30+ years of past questions, JHS 1, 2, 3 NaCCA curriculum notes, weekly mock exams, and instant quizzes.',
    url: siteUrl,
    siteName: 'AcademicPrep Ghana',
    locale: 'en_GH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AcademicPrep Ghana | BECE Past Questions & JHS Exam Prep',
    description:
      'Ghana’s premier learning portal for BECE candidates. Past questions, mock exams, NaCCA notes and instant quizzes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'c8Px8UXe68J_qsfw_IA5WvgDvVUWE1he_RjcaRInd40',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${siteUrl}/#organization`,
      name: 'AcademicPrep Ghana',
      url: siteUrl,
      description: 'Premier e-learning portal for Junior High School students and BECE candidates in Ghana.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GH',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'AcademicPrep Ghana',
      description: 'BECE Past Questions, Mock Exams, and JHS Curriculum Notes',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/jhs/bece-past-questions?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'LearningResource',
      name: 'WAEC BECE Past Questions & Answers Archive',
      description: 'Comprehensive collection of BECE past examination questions and step-by-step marking scheme answers for all 9 JHS subjects.',
      educationalLevel: 'Junior High School (JHS 1, JHS 2, JHS 3 / BECE Candidates)',
      learningResourceType: 'Exam Practice & Past Papers',
      inLanguage: 'en-GH',
      provider: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="c8Px8UXe68J_qsfw_IA5WvgDvVUWE1he_RjcaRInd40" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden w-full max-w-full`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <TrafficTracker />
          <Navbar />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
