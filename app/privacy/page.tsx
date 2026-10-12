import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Lock, 
  Eye, 
  MessageSquare, 
  CheckCircle2, 
  FileText,
  Mail
} from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Student Data Protection | AcademicPrep',
  description: 'AcademicPrep privacy policy detailing student data protection, phone number handling, and educational communications under Ghana Data Protection Act 2012 (Act 843).',
};

export default function PrivacyPage() {
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Privacy Policy</span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Student Privacy &amp; Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            AcademicPrep Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            AcademicPrep (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and personal data of our students, parents, and educators. This Privacy Policy outlines how we collect, use, store, and safeguard your personal information in compliance with the Ghana Data Protection Act, 2012 (Act 843) and international privacy frameworks.
          </p>
          <div className="pt-2 text-xs text-slate-400">
            Effective Date: October 2026 &bull; Domain: www.acadmicprep.com
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Section 1: Information We Collect */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">1. Information We Collect</h2>
              <p className="text-xs text-slate-500">Student registration and profile details</p>
            </div>
          </div>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3 pt-2">
            <p>
              When students or guardians register on AcademicPrep, we collect limited personal details strictly necessary for educational service delivery:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li><strong>Student Name &amp; Academic Level:</strong> e.g., JHS 1, JHS 2, JHS 3 / BECE, SHS 1-3 / WASSCE.</li>
              <li><strong>Contact Information:</strong> Phone number (used for WhatsApp and SMS curriculum updates, mock alerts, and account access).</li>
              <li><strong>Academic Progress &amp; Quiz Results:</strong> Mock examination scores and curriculum topic performance to provide personalized study feedback.</li>
              <li><strong>Payment Records:</strong> Transaction confirmation identifiers processed securely through Paystack (we do not store credit card or Mobile Money PINs).</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Educational WhatsApp & SMS Communications */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">2. WhatsApp &amp; SMS Educational Announcements</h2>
              <p className="text-xs text-slate-500">Communications protocol via Meta WhatsApp Business &amp; SMS</p>
            </div>
          </div>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3 pt-2">
            <p>
              By registering on AcademicPrep, students and guardians consent to receive essential academic notifications via WhatsApp and SMS, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>New BECE &amp; WASSCE mock exam schedules and release notifications.</li>
              <li>Important syllabus updates, past paper revision materials, and educational tips.</li>
              <li>Portal access verification and security alerts.</li>
            </ul>
            <p className="pt-2">
              <strong>Anti-Spam &amp; Opt-Out Policy:</strong> We never sell, rent, or distribute your phone number to third-party advertisers. You may opt out of promotional broadcasts at any time by replying &ldquo;STOP&rdquo; or contacting our support desk.
            </p>
          </div>
        </section>

        {/* Section 3: Data Security & Storage */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">3. Data Security &amp; Encryption</h2>
              <p className="text-xs text-slate-500">Industry-standard security measures</p>
            </div>
          </div>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3 pt-2">
            <p>
              AcademicPrep employs robust industry-standard encryption protocols (HTTPS / TLS 1.3), hashed administrative authentication, and secure cloud database architecture (Supabase Row-Level Security) to safeguard student records from unauthorized access, modification, or exposure.
            </p>
          </div>
        </section>

        {/* Section 4: Compliance with Ghana Data Protection Act */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">4. Ghana Data Protection Act (Act 843)</h2>
              <p className="text-xs text-slate-500">Legal rights of data subjects</p>
            </div>
          </div>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3 pt-2">
            <p>
              Under the Data Protection Act, 2012 (Act 843) of Ghana, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>Request access to your personal data held in our systems.</li>
              <li>Request correction of inaccurate or outdated contact information.</li>
              <li>Request deletion of your account and personal data upon completion of your examination studies.</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Contact Information */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800 text-white border border-slate-700">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">5. Contact Our Privacy Team</h2>
              <p className="text-xs text-slate-400">Inquiries regarding personal data handling</p>
            </div>
          </div>
          <div className="text-sm text-slate-300 leading-relaxed space-y-2 pt-2">
            <p>
              For any questions, data access requests, or privacy concerns, please contact the AcademicPrep Administration:
            </p>
            <div className="pt-2 text-xs font-mono space-y-1 text-slate-400">
              <p>&bull; <strong>Platform:</strong> AcademicPrep Ghana</p>
              <p>&bull; <strong>Website:</strong> https://www.acadmicprep.com</p>
              <p>&bull; <strong>Official WhatsApp Support:</strong> +233 59 311 9669</p>
              <p>&bull; <strong>Email:</strong> support@acadmicprep.com</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} AcademicPrep. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/terms" className="hover:text-slate-900 underline">Terms of Use</Link>
          <Link href="/copyright" className="hover:text-slate-900 underline">Copyright Notice</Link>
          <Link href="/" className="hover:text-slate-900 underline">Home</Link>
        </div>
      </footer>
    </div>
  );
}
