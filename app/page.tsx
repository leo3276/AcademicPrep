'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { 
  BookOpenCheck, 
  BookOpen,
  Award,
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Clock, 
  Lock, 
  FileText,
  GraduationCap,
  Calendar,
  ChevronRight,
  Play,
  Crown,
  Smartphone,
  Download,
  ExternalLink,
  Flame,
  Sparkles
} from 'lucide-react';
import { BlogPost, BlogCategory, BLOG_CATEGORIES, INITIAL_BLOG_POSTS, fetchBlogPosts } from '@/lib/blogStore';
import PlatformTourGuide, { HOMEPAGE_TOUR_STEPS } from '@/components/PlatformTourGuide';
import TourPromptToast from '@/components/TourPromptToast';
import ApkDownloadModal from '@/components/ApkDownloadModal';
import NewBlogNotificationToast from '@/components/NewBlogNotificationToast';
import { OFFICIAL_APK_DOWNLOAD_URL, APK_FILE_SIZE } from '@/lib/apkConfig';
import Books3DBackground from '@/components/Books3DBackground';

export default function HomePage() {
  const { student } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [blogCategory, setBlogCategory] = useState<'ALL' | BlogCategory>('ALL');
  const [showTour, setShowTour] = useState(false);
  const [showApkModal, setShowApkModal] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchBlogPosts()
      .then((posts) => {
        if (Array.isArray(posts) && posts.length > 0) {
          setBlogPosts(posts);
        }
      })
      .catch(() => {});

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('tour') === '1' || urlParams.get('tour') === 'true') {
        const timer = setTimeout(() => setShowTour(true), 400);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenTour = () => setShowTour(true);
    window.addEventListener('academicprep:open-tour', handleOpenTour);
    return () => window.removeEventListener('academicprep:open-tour', handleOpenTour);
  }, []);

  const latestPost = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )[0];

  const featuredPosts = blogPosts.filter((p) => p.featured);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 sm:pb-20 w-full max-w-full overflow-hidden">
      {/* Hero Section with Interactive 3D Educational Canvas Background */}
      <section className="relative overflow-hidden text-white pt-12 pb-16 sm:pt-16 sm:pb-24">
        {/* Interactive 3D Floating Books, Quiz Sheets & Ambient Particles Canvas */}
        <Books3DBackground />

        {/* Ambient Top Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />
        
        {/* The Exact Original Content & Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
            {latestPost && (
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-full">
                <Link
                  href={`/blog/${latestPost.id}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 hover:border-amber-300 text-amber-200 text-xs font-medium backdrop-blur-sm transition-all group max-w-full shadow-sm"
                >
                  <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping shrink-0" />
                  <span className="px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">NEW BLOG</span>
                  <span className="truncate max-w-[200px] sm:max-w-xs md:max-w-sm text-white font-medium">{latestPost.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>
              </div>
            )}

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-sm">
              Master Your Curriculum, <br />
              <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-teal-300 bg-clip-text text-transparent">
                Topic by Topic, Week by Week.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal px-2 drop-shadow-xs">
              Full JHS and SHS curriculum notes, instant WAEC-standard quizzes with step-by-step explanations, and 5 comprehensive elective programme strands.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md mx-auto sm:max-w-none">
              <Link
                href="/jhs"
                id="tour-home-launch"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Launch JHS Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/shs"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Launch SHS (WASSCE) Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => setShowApkModal(true)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/30"
              >
                <Smartphone className="w-4 h-4 text-emerald-200" />
                <span>Android App (APK)</span>
              </button>
            </div>

            {/* Quick Demo Info Box */}
            <div className="pt-3 max-w-md mx-auto w-full">
              <div id="tour-home-demo" className="bg-slate-900/80 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-slate-700/80 text-left text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 shadow-md">
                <div>
                  <span className="font-semibold text-white block mb-0.5">Try Demo Student Account:</span>
                  <span className="text-slate-300 break-words">
                    Phone: <b className="text-blue-300 font-mono">0241234567</b> • PIN: <b className="text-blue-300 font-mono">1234</b>
                  </span>
                </div>
                <Link 
                  href="/login"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-[11px] hover:bg-blue-500 shadow-xs shrink-0 self-start sm:self-auto text-center transition"
                >
                  Quick Fill
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

        {/* Live Counters (Clean Minimalist) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-center p-2 sm:p-3">
              <div className="text-xl sm:text-3xl font-black text-slate-900">8,000+</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">Community Students</div>
            </div>
            <div className="text-center p-2 sm:p-3">
              <div className="text-xl sm:text-3xl font-black text-slate-900">JHS &amp; SHS</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">Full Curriculum Live</div>
            </div>
            <div className="text-center p-2 sm:p-3">
              <div className="text-xl sm:text-3xl font-black text-slate-900">100%</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">Instant Auto-Grading</div>
            </div>
            <div className="text-center p-2 sm:p-3">
              <div className="text-xl sm:text-3xl font-black text-slate-900">Adaptive</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">Weekly Exams</div>
            </div>
          </div>
        </div>

      {/* Public Announcement: 30-Day Free Trial Notice */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="rounded-2xl bg-white border border-blue-200/90 p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                  Special Promotion
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  🎁 30-Day Free Trial: All Topics, Quizzes &amp; Offline Tools 100% Unlocked
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                Every newly registered student enjoys a <b>complimentary 30-Day Free Trial</b> with full unrestricted access to all JHS &amp; SHS lesson notes, diagnostic quizzes, past papers, and timetables. <b>Zero payment required.</b>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            <Link
              href="/login"
              className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs font-bold transition flex items-center gap-1.5 border border-blue-200 shadow-2xs"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sections Architecture (JHS, SHS, University) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Platform Structure</h2>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Academic Portals Designed for Every Stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: JHS (ACTIVE) */}
          <div id="tour-home-jhs" className="relative rounded-2xl bg-white border border-slate-300 p-6 shadow-xs flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-xs">
              Active & Live Now
            </div>

            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Junior High School (JHS)</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">JHS 1, JHS 2 & JHS 3 • BECE Candidates</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Complete NaCCA / GES aligned curriculum across 6 core subjects. Topic quizzes after each chapter and custom weekly exams based on your actual study history.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>JHS 1, 2 & 3 Topics & Notes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Topic Quizzes with Explanations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Adaptive Dynamic Weekly Exams</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/jhs"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm shadow-blue-500/20"
              >
                <span>Enter JHS Section</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: SHS Section (Live) */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center font-bold">
                <BookOpenCheck className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">Senior High School (SHS)</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-800 border border-purple-200">
                    Live Now
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">SHS 1, 2 & 3 • WASSCE Prep</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Core subjects (Core Math, English, Integrated Science, Social Studies) plus 5 elective streams (General Arts, Business, Agriculture, Visual Arts, General Science).
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-slate-700">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All Core & Elective Lesson Notes</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Topic Quizzes with Instant Explanations</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WAEC / WASSCE Syllabus Standard</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/shs"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm shadow-blue-500/20"
              >
                <span>Enter SHS Section</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: University (Coming Soon) */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between opacity-85">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">University & Tertiary</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    Phase 3
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Undergraduate & Foundations</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Foundational tertiary courses, professional certifications, and aptitude tests for university entrance and career readiness.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-slate-500">
                <div className="flex items-center gap-2 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Aptitude & Entry Quizzes</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Tertiary Modules</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                disabled
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs cursor-not-allowed text-center"
              >
                Available in Phase 3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* High-Intent SEO & Study Resources Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            Ghana’s Premier BECE Hub
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            BECE Past Questions, Mock Exams & NaCCA Curriculum Notes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Everything Ghanaian Junior High School students (JHS 1, 2, and 3) need to prepare for WAEC BECE success, with step-by-step solutions and verified marking schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* BECE Past Questions Archive Card (Clean Minimalist) */}
          <div id="tour-home-bece" className="rounded-2xl bg-white border border-slate-200 text-slate-900 p-6 sm:p-7 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>1990 – 2025 Archive</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                WAEC BECE Past Questions &amp; Marking Schemes
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Access over 30+ years of official WAEC BECE past examination questions with complete marking schemes for all 9 subjects, including Mathematics, Integrated Science, English, Social Studies, ICT, and RME.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Paper 1 (Obj) &amp; Paper 2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Verified Marking Schemes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>All 9 JHS Subjects</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Instant PDF Downloads</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Link
                href="/jhs/bece-past-questions"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm shadow-blue-500/20"
              >
                <span>Browse BECE Past Questions (1990 - 2025)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* BECE Trial & Mock Exam Card (Clean Minimalist) */}
          <div id="tour-home-mocks" className="rounded-2xl bg-white border border-slate-200 text-slate-900 p-6 sm:p-7 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-slate-600" />
                <span>2026 Candidates</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                BECE Trial, Mock Papers &amp; Likely Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Access BECE likely questions, Best Brain mock papers, CEPME, GBat, Metro and GES district mock exams prepared to test candidate readiness with verified marking schemes.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Best Brain &amp; GES Mocks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Official Marking Schemes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>BECE Likely Questions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Step-by-Step Math &amp; Science</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Link
                href="/jhs/trial-questions"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm shadow-blue-500/20"
              >
                <span>Practice BECE Trial &amp; Mock Papers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovation: Dynamic Weekly Exam (Clean Minimalist) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="tour-home-weekly" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-9 text-slate-900 shadow-2xs">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-slate-600" />
              <span>Progress-Adaptive Testing Engine</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-slate-900">
              A Weekly Exam That Only Tests What You Have Actually Studied
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              No generic test papers. The AcademicPrep engine queries your completed chapter quizzes and dynamically generates a personalized 15-minute weekly test. Finish more topics during the week, unlock richer tests on the weekend.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/jhs/weekly-exam"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-sm shadow-blue-500/20"
              >
                Try Dynamic Weekly Exam
              </Link>
              <Link
                href="/jhs"
                className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition"
              >
                Study Topics First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Android Mobile App (APK) Showcase Section */}
      <section id="mobile-app" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-9 text-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android Application Available</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 text-[11px] font-mono">
                  v1.0.0 • APK Direct Install
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Study Anywhere With Zero Data — Download AcademicPrep for Android
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Install our official Android app directly onto your phone or tablet. Access the full JHS and SHS curriculum, past questions, and self-testing quizzes completely offline once VIP is active — no internet required.
              </p>

              {/* App Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">100% Offline VIP Access</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Revise all topics and answer questions even with mobile data turned off.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Lightweight APK (~24 MB)</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Installs in seconds and runs smoothly even on entry-level Android devices.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Direct Installation</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">No Play Store signup needed; download and tap install right on your phone.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Automatic Account Sync</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Log in with your existing student phone and PIN to restore your progress.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={OFFICIAL_APK_DOWNLOAD_URL}
                  download="AcademicPrep-v1.0.0.apk"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Install APK Directly ({APK_FILE_SIZE})</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowApkModal(true)}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Installation Guide</span>
                </button>

                <a
                  href="https://whatsapp.com/channel/0029VagMXcm4yltRps7S2b2x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs transition-all border border-white/10 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>WhatsApp Channel</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Right Card Column - Mock Phone Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-slate-800 border border-slate-700 p-5 shadow-md space-y-4">
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-700/60">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-700 bg-blue-600">
                    <img 
                      src="/android-icon.png" 
                      alt="AcademicPrep App Icon" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">AcademicPrep</h3>
                    <p className="text-xs text-slate-400">Offline Learning Companion</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded">
                        Android 6.0+
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">APK ~24 MB</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1 border-b border-slate-700/40 text-[11px]">
                    <span className="text-slate-400">Curriculum</span>
                    <span className="font-semibold text-white">BECE &amp; WASSCE (WAEC)</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-700/40 text-[11px]">
                    <span className="text-slate-400">Offline Capability</span>
                    <span className="font-semibold text-emerald-400">100% Offline VIP Engine</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-700/40 text-[11px]">
                    <span className="text-slate-400">Past Questions</span>
                    <span className="font-semibold text-white">1990 - 2025 Bank</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-[11px]">
                    <span className="text-slate-400">Safety Verification</span>
                    <span className="font-semibold text-blue-300">Official Signed Build</span>
                  </div>
                </div>

                <a
                  href={OFFICIAL_APK_DOWNLOAD_URL}
                  download="AcademicPrep-v1.0.0.apk"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-xs cursor-pointer text-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Install APK Directly ({APK_FILE_SIZE})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Journal & WAEC Strategy Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="tour-home-blog" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Study Journal & WAEC Updates</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Guidance from WAEC Examiners & Teachers
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                High-yield revision advice, formula recall tricks, and official BECE timetables to help you achieve raw 1s.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition self-start sm:self-auto group shadow-sm shadow-blue-500/20"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setBlogCategory('ALL')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap ${
                blogCategory === 'ALL'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Topics
            </button>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setBlogCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap ${
                  blogCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Curated Top 3 Articles Grid (Blends harmoniously into white background) */}
          {(() => {
            const filtered = blogCategory === 'ALL'
              ? blogPosts
              : blogPosts.filter((p) => p.category === blogCategory);

            const featuredList = filtered.filter((p) => p.featured);
            // Prioritize featured posts, fallback to most recent, limit to 3 for the homepage
            const candidatePosts = featuredList.length > 0 ? featuredList : filtered;
            const displayPosts = candidatePosts.slice(0, 3);

            if (displayPosts.length === 0) {
              return (
                <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                  No articles found in this category.
                </div>
              );
            }

            return (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {displayPosts.map((post) => (
                    <article
                      key={post.id}
                      className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-5 sm:p-5.5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Media Thumbnail */}
                        {post.mediaType && post.mediaUrl ? (
                          <div className="w-full h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative border border-slate-100 shrink-0">
                            {post.mediaType === 'image' ? (
                              <img
                                src={post.mediaUrl}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-slate-900">
                                <Play className="w-8 h-8 fill-white text-white" />
                              </div>
                            )}
                          </div>
                        ) : null}

                        <div className="space-y-2.5">
                          <div className="flex flex-wrap items-center gap-2">
                            {post.featured && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold uppercase tracking-wider">
                                <Flame className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> Featured
                              </span>
                            )}
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700">
                              {post.category}
                            </span>
                            <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium ml-auto">
                              <Clock className="w-3 h-3" />
                              {post.readTimeMinutes} min
                            </span>
                          </div>

                          <Link href={`/blog/${post.id}`}>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug line-clamp-2">
                              {post.title}
                            </h3>
                          </Link>

                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 text-[11px] truncate max-w-[130px]">
                          By <b className="text-slate-800">{post.author}</b>
                        </span>

                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-2xs"
                        >
                          <span>Read Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Clean Bottom Navigation Bar */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <p className="text-slate-500">
                    Showing 3 featured guides. Access complete past question solutions and exam analyses in the journal.
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
                  >
                    <span>View All Articles ({blogPosts.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Android APK Download Information Modal */}
      <ApkDownloadModal
        isOpen={showApkModal}
        onClose={() => setShowApkModal(false)}
      />

      {/* Interactive Platform Feature Tour Guide for Homepage */}
      <PlatformTourGuide
        isOpen={showTour}
        onClose={() => setShowTour(false)}
        steps={HOMEPAGE_TOUR_STEPS}
        nextTourUrl="/jhs?tour=1"
        nextTourLabel="Explore JHS Study Portal Tour →"
      />

      {/* Visitor Notification Alert for Newly Published Blog Posts */}
      <NewBlogNotificationToast initialPosts={blogPosts} />

      {/* Polite Welcome Toast Inviting First-Time Visitors to Tour */}
      <TourPromptToast onStartTour={() => setShowTour(true)} />
    </div>
  );
}
