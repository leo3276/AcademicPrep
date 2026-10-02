'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { EducationLevel } from '@/lib/types';
import { 
  Calculator, 
  FlaskConical, 
  BookOpen, 
  Globe2, 
  Cpu, 
  HeartHandshake, 
  Languages,
  BookA,
  Wrench,
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  KeyRound,
  Trophy,
  GraduationCap,
  FileCheck,
  FileText,
  Lock,
  Clock,
  Compass,
  Play
} from 'lucide-react';
import SubjectIcon from '@/components/SubjectIcon';
import { fetchUploadedDocuments } from '@/lib/pdfStore';
import { BlogPost, fetchBlogPosts, INITIAL_BLOG_POSTS } from '@/lib/blogStore';
import PlatformTourGuide from '@/components/PlatformTourGuide';
import TourPromptToast from '@/components/TourPromptToast';

export default function JhsPortalPage() {
  const router = useRouter();
  const { student, isLoading, topicProgress, getCompletedTopicsCount } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>('JHS 1');
  const [mounted, setMounted] = useState(false);
  const [uploadedMocksCount, setUploadedMocksCount] = useState(0);
  const [uploadedBeceCount, setUploadedBeceCount] = useState(0);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS.slice(0, 3));
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLevel = urlParams.get('level') as EducationLevel | null;
      const savedLevel = localStorage.getItem('academicprep_jhs_level') as EducationLevel | null;
      const validLevels: EducationLevel[] = ['JHS 1', 'JHS 2', 'JHS 3'];

      if (urlLevel && validLevels.includes(urlLevel)) {
        setSelectedLevel(urlLevel);
        localStorage.setItem('academicprep_jhs_level', urlLevel);
      } else if (savedLevel && validLevels.includes(savedLevel)) {
        setSelectedLevel(savedLevel);
      } else if (student?.currentLevel && validLevels.includes(student.currentLevel)) {
        setSelectedLevel(student.currentLevel);
      }

      fetchUploadedDocuments().then((docs) => {
        setUploadedMocksCount(docs.filter((d) => d.category === 'trial_mock').length);
        setUploadedBeceCount(docs.filter((d) => d.category === 'bece_past_question').length);
      }).catch(e => console.warn('Fetch docs warning:', e?.message || e));

      fetchBlogPosts().then((posts) => {
        if (posts && posts.length > 0) {
          setBlogPosts(posts.slice(0, 3));
        }
      }).catch(e => console.warn('Fetch blog in JHS warning:', e?.message || e));

      // Trigger interactive onboarding guide if user just registered an account or clicked Guide in nav
      const urlTour = urlParams.get('tour') === 'true' || urlParams.get('tour') === '1';
      const shouldTour = localStorage.getItem('academicprep_show_new_account_tour') === 'true' || urlTour;
      if (shouldTour) {
        localStorage.removeItem('academicprep_show_new_account_tour');
        localStorage.setItem('academicprep_account_tour_completed', 'true');
        if (urlTour) {
          const cleanUrl = new URL(window.location.href);
          cleanUrl.searchParams.delete('tour');
          window.history.replaceState({}, '', cleanUrl.toString());
        }
        const timer = setTimeout(() => {
          setShowTour(true);
        }, 450);
        return () => clearTimeout(timer);
      }
    }
  }, [student]);

  useEffect(() => {
    const handleOpenTour = () => setShowTour(true);
    window.addEventListener('academicprep:open-tour', handleOpenTour);
    return () => window.removeEventListener('academicprep:open-tour', handleOpenTour);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading && !student) {
      router.push('/login?redirect=/jhs');
    }
  }, [mounted, isLoading, student, router]);

  const handleLevelSelect = (lvl: EducationLevel) => {
    setSelectedLevel(lvl);
    if (typeof window !== 'undefined') {
      localStorage.setItem('academicprep_jhs_level', lvl);
      const url = new URL(window.location.href);
      url.searchParams.set('level', lvl);
      window.history.replaceState({}, '', url.toString());
    }
  };

  // Filter topics for the selected JHS level
  const levelTopics = JHS_CURRICULUM_TOPICS.filter((t) => t.level === selectedLevel);
  const completedTopicsCount = mounted 
    ? levelTopics.filter((t) => topicProgress[t.id]?.completed).length 
    : 0;
  const progressPercent = levelTopics.length > 0 
    ? Math.round((completedTopicsCount / levelTopics.length) * 100) 
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              GES / NaCCA Standard Curriculum
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            Junior High School Curriculum Portal
          </h1>
          <p className="text-xs text-slate-600">
            {mounted && student 
              ? `Logged in as ${student.fullName} (${student.phoneNumber})` 
              : 'Sign in with your phone & PIN to save your quiz progress and weekly exam scores.'}
          </p>
        </div>

        {/* Level Switcher & Feature Tour button */}
        <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
          <button
            type="button"
            onClick={() => setShowTour(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors shadow-2xs"
            title="Start interactive platform tour"
          >
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Platform Tour</span>
          </button>

          {/* Level Switcher (JHS 1 / 2 / 3) */}
          <div id="tour-level-switcher" className="flex items-center bg-slate-100 p-1 rounded-xl">
            {(['JHS 1', 'JHS 2', 'JHS 3'] as EducationLevel[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => handleLevelSelect(lvl)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedLevel === lvl
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress & Dynamic Exam Trigger Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div id="tour-topic-mastery" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              {selectedLevel} Topic Mastery
            </span>
            <span className="text-xs font-bold text-blue-600 font-mono">
              {completedTopicsCount} / {levelTopics.length} Done
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>{progressPercent}% Completed</span>
              <span>Pass score: 60%+ per quiz</span>
            </div>
          </div>

          {!student?.hasFullAccess && (
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Limited Free Access: {getCompletedTopicsCount()} of 3 topics used.</span>
              </span>
              <Link href="/jhs/profile" className="font-bold underline text-amber-800 hover:text-amber-950 shrink-0">
                Unlock VIP
              </Link>
            </div>
          )}
        </div>

        {/* BECE Past Questions Card */}
        <div id="tour-bece-past-questions" className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                WAEC Official
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                {uploadedBeceCount > 0 ? `${uploadedBeceCount} PDFs Available` : 'Admin Upload Archive'}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              BECE Past Questions (2008 – 2026)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Authentic WAEC BECE past question papers, objective tests, theory booklets, and marking guides uploaded by school administration.
            </p>
          </div>
          <Link
            href="/jhs/bece-past-questions"
            className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open BECE Past Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Trial Questions Card (Uploaded by Admin) */}
        <div id="tour-trial-mocks" className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 shadow-sm transition space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Live Admin Uploads
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                {uploadedMocksCount > 0 ? `${uploadedMocksCount} PDFs Available` : 'Admin Upload Portal'}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              Trial Questions & Mocks
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official diagnostic trial mock exams and end-of-term assessment booklets uploaded directly by your administrator for viewing & download.
            </p>
          </div>
          <Link
            href="/jhs/trial-questions"
            className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Open Trial Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Adaptive Weekly Exam Banner */}
      <div id="tour-weekly-exam" className="p-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            Curriculum Adaptive Engine
          </div>
          <h3 className="text-base sm:text-lg font-bold">Personalized Weekly Revision Exam</h3>
          <p className="text-xs text-amber-50 max-w-xl leading-relaxed">
            Generates a timed CBT examination based solely on the topics you have completed in {selectedLevel}.
          </p>
        </div>

        <Link
          href="/jhs/weekly-exam"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-amber-900 font-bold text-xs shrink-0 transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>Start Weekly Exam</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Core Subjects Grid */}
      <div id="tour-curriculum-subjects" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            Core {selectedLevel} Subjects
          </h2>
          <span className="text-xs text-slate-500">{CURRICULUM_SUBJECTS.length} GES Accredited Subjects</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRICULUM_SUBJECTS.map((subject) => {
            const subjectTopics = levelTopics.filter((t) => t.subjectId === subject.id);
            const passedInSubject = subjectTopics.filter((t) => topicProgress[t.id]?.completed).length;

            return (
              <div
                key={subject.id}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${subject.color} text-white flex items-center justify-center shadow-md`}
                    >
                      <SubjectIcon subjectId={subject.id} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 uppercase font-mono">
                      {subject.code}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {subjectTopics.length} Curriculum Topics • Quizzes included
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex justify-between text-[11px] text-slate-600 font-medium">
                      <span>Completed Topics</span>
                      <span>
                        {passedInSubject} / {subjectTopics.length}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${subjectTopics.length > 0 ? (passedInSubject / subjectTopics.length) * 100 : 0}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/jhs/${subject.id}?level=${encodeURIComponent(selectedLevel)}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200 transition-colors"
                  >
                    <span>View {selectedLevel} Topics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* WAEC & Study Journal Quick Access */}
      <div id="tour-study-journal" className="space-y-4 pt-6 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              WAEC Examiner Guides & Study Journal
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Chief examiner tips, revision blueprints, and academic announcements for BECE candidates
            </p>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline self-start sm:self-auto"
          >
            <span>View all articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-400 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {post.mediaType && post.mediaUrl && (
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100 group/img">
                  {post.mediaType === 'image' ? (
                    <img
                      src={post.mediaUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-950 relative flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                        alt=""
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                          <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[9px] font-bold">
                        VIDEO
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3" />
                      {post.readTimeMinutes} min read
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Examiner Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Interactive Platform Feature Tour Guide */}
      <PlatformTourGuide isOpen={showTour} onClose={() => setShowTour(false)} />

      {/* Polite Welcome Toast Inviting First-Time Visitors to Tour */}
      <TourPromptToast onStartTour={() => setShowTour(true)} />
    </div>
  );
}
