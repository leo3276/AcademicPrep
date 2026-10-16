import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  Scale, 
  FileCheck2, 
  AlertTriangle, 
  Lock, 
  BookOpen, 
  ArrowLeft, 
  Mail, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Ban,
  FileText
} from 'lucide-react';

export const metadata = {
  title: 'Copyright, Intellectual Property & Anti-Piracy Notice | AcademicPrep',
  description: 'Official copyright statement, anti-piracy policies, and legal protections governing AcademicPrep trial mocks, study materials, and examination software.',
};

export default function CopyrightPage() {
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>Official Legal Policy</span>
            </span>
          </div>
        </div>
      </header>

      {/* Header Banner (Clean Minimalist) */}
      <section className="bg-white border-b border-slate-200 text-slate-900 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>Strict Anti-Piracy &amp; Intellectual Property Protection</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Copyright, Anti-Piracy &amp; Licensing Notice
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            AcademicPrep holds full legal copyright and compilation rights over all examination papers, 
            marking schemes, curriculum summaries, interactive quizzes, and software solutions published 
            under the <span className="text-slate-900 font-semibold">academicprep.com</span> platform. 
            Unauthorized replication, scraping, reselling, or redistribution is strictly prosecuted.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 font-medium">
              <Scale className="w-3.5 h-3.5 text-slate-700" />
              Governed by Copyright Act, 2005 (Act 690)
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
              Berne Convention (181 Member Nations)
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* 1. Legal Ownership Statement */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">1. Statement of Ownership &amp; Statutory Authority</h2>
              <p className="text-xs text-slate-500">Legal foundation and automatic statutory protection</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              All materials published on <strong>AcademicPrep</strong>, including but not limited to trial mock examination 
              question booklets, detailed marking schemes, curriculum breakdown notes, digital flashcards, 
              topic quizzes, application software, and database architecture, are protected by law under:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-medium">
              <li><strong>The Copyright Act, 2005 (Act 690)</strong> of the Republic of Ghana.</li>
              <li><strong>The Berne Convention for the Protection of Literary and Artistic Works</strong> (ensuring automatic transnational copyright enforcement across all 181 signatory member states).</li>
              <li><strong>Universal Copyright Convention</strong> and the <strong>WIPO Copyright Treaty (WCT)</strong>.</li>
            </ul>
            <p>
              Under these statutes, copyright protection exists automatically from the moment of creation 
              and publication. Prior registration is <strong>not</strong> required to establish legal ownership, 
              issue binding cease and desist directives, or initiate copyright infringement claims.
            </p>
          </div>
        </div>

        {/* 2. What Is Protected (Original Materials & Compilation Rights) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">2. Scope of Protected Works</h2>
              <p className="text-xs text-slate-500">Materials and compilations subject to exclusive proprietary rights</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Original Trial Mocks &amp; Marking Schemes</span>
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                All mock papers authored, vetted, curated, or formatted by AcademicPrep faculty. 
                This includes original problem formulations, numerical scenarios, diagrams, model answers, 
                and marking scheme rubrics.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Compilation &amp; Database Rights</span>
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Even where examination topics reference national syllabi, our selection, arrangement, 
                digitized formatting, structured indexing, typo rectifications, and searchable database hierarchy 
                constitute legally protected original compilations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Curriculum Notes &amp; Lesson Guides</span>
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Synthesized study explanations, step-by-step topic breakdowns, mnemonic guides, 
                and educational summaries prepared for JHS and SHS students.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Software, Source Code &amp; Visual Design</span>
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                The entire web and mobile application codebase, UI components, interactive test engines, 
                offline storage mechanics, brand iconography, and trade dress.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Strict Prohibitions & Infringement Criteria */}
        <div className="bg-white rounded-2xl border border-red-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center font-bold">
              <Ban className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">3. Prohibited Acts (Infringement Criteria)</h2>
              <p className="text-xs text-red-600 font-medium">Actions that constitute direct civil and criminal breach</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            A party is in <strong>direct breach of copyright</strong> if they engage in any of the following without 
            prior written authorization from AcademicPrep management:
          </p>
          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 text-slate-800 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-bold text-slate-900">Re-uploading and Mirroring</p>
                <p className="text-slate-600 text-xs mt-0.5">
                  Uploading AcademicPrep PDF mock booklets, marking schemes, or study notes onto any external website, Google Drive folder, Telegram channel, WhatsApp group, or file-sharing portal.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 text-slate-800 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-bold text-slate-900">Commercial Resale or Bundling</p>
                <p className="text-slate-600 text-xs mt-0.5">
                  Charging students or schools for access to our mock questions, printing them for retail sale, or bundling them into paid tutoring packages without a commercial distributor license.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 text-slate-800 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-bold text-slate-900">Scraping, Extraction &amp; Content Cloning</p>
                <p className="text-slate-600 text-xs mt-0.5">
                  Using automated bots, HTTP scrapers, AI extraction pipelines, or manual transcription to ingest our quiz questions, answers, or curriculum guides into another app, database, or LMS.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 text-slate-800 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
              <div>
                <p className="font-bold text-slate-900">Watermark Removal &amp; Identity Concealment</p>
                <p className="text-slate-600 text-xs mt-0.5">
                  Cropping, masking, erasing, or editing out AcademicPrep logos, headers, footers, website URLs, or document metadata to pass off materials as their own.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Statutory Penalties & Enforcement Process */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">4. Enforcement &amp; Statutory Penalties</h2>
              <p className="text-xs text-slate-500">Legal consequences and remedial procedures taken against infringers</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              When copyright infringement is detected, AcademicPrep executes the following non-negotiable legal actions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-red-600">Step 1: Host Takedowns</span>
                <p className="text-xs text-slate-600">
                  Immediate expedited DMCA/host takedown notices filed with the infringer’s hosting service (Vercel, AWS, Cloudflare, Hostinger, etc.) and domain registrars for swift website takedown.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-amber-600">Step 2: Platform Bans</span>
                <p className="text-xs text-slate-600">
                  Immediate permanent revocation of student PINs, blacklisting of phone numbers, and blocking of IP subnets linked to accounts involved in data harvesting or piracy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-blue-600">Step 3: Civil Litigation</span>
                <p className="text-xs text-slate-600">
                  Institution of legal proceedings under Section 43 of the Copyright Act, 2005 (Act 690) for statutory damages, recovery of illicit earnings, and reimbursement of all legal expenses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Reporting Infringement / Contact */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Report Copyright Infringement</h2>
              <p className="text-xs text-slate-400">Help protect the integrity of students’ academic resources</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            If you encounter any website, WhatsApp channel, Telegram group, or individual selling, circulating, 
            or re-hosting AcademicPrep mock papers or content without authorization, please notify our legal and compliance desk.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://whatsapp.com/channel/0029VagMXcm4yltRps7S2b2x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Contact Compliance Desk on WhatsApp</span>
            </a>
            <Link
              href="/terms"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition"
            >
              <FileText className="w-4 h-4" />
              <span>Read Full Terms of Service</span>
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
