import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  KeyRound, 
  BookOpen, 
  Scale, 
  ExternalLink 
} from 'lucide-react';

export const metadata = {
  title: 'Terms of Use & Student License Agreement | AcademicPrep',
  description: 'Terms of service and student educational license agreement governing the use of AcademicPrep web portal, mock tests, and curriculum resources.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Top Header / Breadcrumb */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition p-1.5 rounded-lg hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to AcademicPrep Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Terms of Service</span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4 text-blue-400" />
            <span>Student &amp; User License Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Terms of Use &amp; Service Agreement
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Please read these terms carefully before accessing or using AcademicPrep (academicprep.com). 
            By accessing our mock papers, curriculum study guides, quizzes, or creating an account, 
            you agree to be bound by these legal terms.
          </p>
          <div className="pt-2 text-xs text-slate-400">
            Last Revised: October 2026 • Valid for JHS, SHS &amp; Examination Candidates
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* 1. Acceptance of Terms */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p className="text-xs text-slate-500">Agreement between user and AcademicPrep</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              By accessing, browsing, registering on, or downloading materials from <strong>AcademicPrep</strong>, 
              you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Use, 
              as well as our dedicated{' '}
              <Link href="/copyright" className="text-blue-600 font-bold hover:underline">
                Copyright &amp; Anti-Piracy Policy
              </Link>.
            </p>
            <p>
              If you are under 18 years of age, you confirm that your parent, guardian, or sponsoring teacher has 
              reviewed and accepted these terms on your behalf.
            </p>
          </div>
        </div>

        {/* 2. Limited Personal Study License */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">2. Limited Single-User Study License</h2>
              <p className="text-xs text-slate-500">Permitted usage rights for candidates and educators</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              AcademicPrep grants you a personal, non-exclusive, non-transferable, revocable license to 
              access and view our study materials strictly for personal educational preparation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-slate-800 space-y-1">
                <p className="font-bold text-xs text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Permitted Use
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Individual revision, solving practice questions, taking online topic quizzes, and personal offline study on your registered device.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 text-slate-800 space-y-1">
                <p className="font-bold text-xs text-red-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                  Strictly Prohibited
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Redistributing PDFs into public WhatsApp channels, printing booklets for retail sale, mirroring on external websites, or scraping data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Access PINs, Payments & Accounts */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">3. Access PINs &amp; Account Security</h2>
              <p className="text-xs text-slate-500">Rules governing activation codes and concurrent sessions</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              Access to full mock paper downloads and premium marking schemes requires an authenticated 
              AcademicPrep Access PIN.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>Each Access PIN is strictly tied to a single student profile and phone number.</li>
              <li>Sharing, publishing, re-selling, or auctioning Access PINs is strictly prohibited.</li>
              <li>AcademicPrep reserves the right to immediately revoke and nullify any PIN found circulating on public social media or multiple concurrent IP ranges without refund.</li>
            </ul>
          </div>
        </div>

        {/* 4. Intellectual Property Rights */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">4. Intellectual Property &amp; Anti-Piracy</h2>
              <p className="text-xs text-slate-500">Protected by the Copyright Act, 2005 (Act 690)</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              All trial mock papers, curated marking schemes, curriculum notes, questions, illustrations, and software 
              code are the proprietary property of AcademicPrep and protected under Ghana’s <strong>Copyright Act, 2005 (Act 690)</strong> and the <strong>Berne Convention</strong>.
            </p>
            <p>
              For exhaustive details regarding compilation rights, piracy prosecution, and our enforcement process, 
              please visit our{' '}
              <Link href="/copyright" className="text-blue-600 font-bold hover:underline">
                Intellectual Property &amp; Copyright Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* 5. Educational Disclaimer & Governing Law */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">5. Educational Disclaimer &amp; Jurisdiction</h2>
              <p className="text-xs text-slate-500">Legal scope and governing law</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              AcademicPrep is an independent educational preparatory platform designed to assist candidates with BECE, 
              WASSCE, and curriculum mastery. We are not officially affiliated with the West African Examinations Council (WAEC), 
              and mock practice materials do not constitute leaked examination papers.
            </p>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of the 
              <strong> Republic of Ghana</strong>. Any legal dispute or claim arising from the use of 
              our services or intellectual property shall be subject to the exclusive jurisdiction of the courts of Ghana.
            </p>
          </div>
        </div>

        {/* Footer Contact */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">Questions Regarding These Terms?</h3>
            <p className="text-xs text-slate-400">Reach out to our support and compliance team.</p>
          </div>
          <a
            href="https://whatsapp.com/channel/0029VagMXcm4yltRps7S2b2x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-sm shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            <span>AcademicPrep Support</span>
          </a>
        </div>

      </main>
    </div>
  );
}
