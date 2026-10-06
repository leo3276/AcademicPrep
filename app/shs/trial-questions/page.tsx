'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { SHS_CORE_SUBJECTS } from '@/lib/curriculumData';
import { SHS_ELECTIVE_GROUPS } from '@/lib/curriculumShsElectives';
import { 
  UploadedPdfDocument, 
  fetchUploadedDocuments, 
  formatFileSize 
} from '@/lib/pdfStore';
import { 
  ArrowLeft, 
  FileCheck, 
  Download, 
  ExternalLink, 
  Search, 
  Filter, 
  FileText, 
  Calendar,
  Layers,
  Sparkles,
  BookOpen,
  RefreshCw,
  Info,
  Lock,
  KeyRound
} from 'lucide-react';
import AccessPinModal from '@/components/AccessPinModal';

export default function ShsTrialQuestionsPage() {
  const { student, hasFullAccess, isTrialActive, trialDaysRemaining } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState<UploadedPdfDocument[]>([]);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [selectedDocForPin, setSelectedDocForPin] = useState<UploadedPdfDocument | null>(null);

  const handleDocumentAction = (e: React.MouseEvent, doc: UploadedPdfDocument) => {
    if (!hasFullAccess) {
      e.preventDefault();
      setSelectedDocForPin(doc);
      setIsPinModalOpen(true);
    }
  };

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [selectedPaperType, setSelectedPaperType] = useState<string>('ALL');

  // Deduplicated SHS Elective Subjects
  const uniqueElectives = useMemo(() => {
    return Array.from(
      new Map(
        SHS_ELECTIVE_GROUPS.flatMap((g) => g.subjects).map((s) => [s.id, s])
      ).values()
    );
  }, []);

  const loadDocuments = async () => {
    try {
      setLoading(true);
      const allDocs = await fetchUploadedDocuments();
      setDocuments(allDocs.filter((d) => d.category === 'shs_trial_mock'));
    } catch (err: any) {
      console.warn('SHS Trial mock documents notice:', err?.message || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    loadDocuments();
  }, []);

  // Filtered documents
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      // Subject filter
      if (selectedSubject !== 'ALL' && doc.subjectId !== selectedSubject) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'ALL' && doc.level !== selectedLevel) {
        return false;
      }
      // Paper type filter
      if (selectedPaperType !== 'ALL' && doc.paperType !== selectedPaperType) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(q);
        const matchesSubject = doc.subjectName.toLowerCase().includes(q);
        const matchesFilename = doc.fileName.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSubject && !matchesFilename) {
          return false;
        }
      }
      return true;
    });
  }, [documents, selectedSubject, selectedLevel, selectedPaperType, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSubject('ALL');
    setSelectedLevel('ALL');
    setSelectedPaperType('ALL');
  };

  const hasActiveFilters = 
    searchQuery.trim() !== '' || 
    selectedSubject !== 'ALL' || 
    selectedLevel !== 'ALL' || 
    selectedPaperType !== 'ALL';

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/shs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition p-1.5 rounded-lg hover:bg-slate-100"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to SHS Portal</span>
            </Link>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
              <span>Senior High School</span>
              <span>/</span>
              <span className="font-semibold text-slate-900">SHS Trial Mocks &amp; Diagnostic Exams</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadDocuments}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-medium transition flex items-center gap-1.5"
              title="Refresh document list"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
              <FileCheck className="w-3.5 h-3.5" />
              {documents.length} SHS {documents.length === 1 ? 'Mock' : 'Mocks'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Hero Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Diagnostic Mock Papers &amp; School Terminals</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              SHS Trial Questions &amp; Mock Examinations
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Curated SHS 1, SHS 2, and SHS 3 trial examination papers, national inter-school mocks, and termly revision papers uploaded by school faculty to prepare candidates for WASSCE excellence.
            </p>
          </div>
        </div>

        {mounted && isTrialActive && !student?.hasFullAccess && (
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-center justify-between shadow-2xs">
            <span className="flex items-center gap-2 font-semibold">
              <span className="text-base">🎁</span>
              <span>30-Day Free Trial: All SHS Trial Mocks and Diagnostic Papers unlocked for viewing &amp; download! ({trialDaysRemaining}d remaining)</span>
            </span>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search SHS mocks by title, subject, grade level, or file name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition bg-slate-50/50"
              />
            </div>

            {/* Select Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-slate-700 font-medium"
              >
                <option value="ALL">All Grade Levels</option>
                <option value="SHS 1">SHS 1 (Year 1)</option>
                <option value="SHS 2">SHS 2 (Year 2)</option>
                <option value="SHS 3">SHS 3 (Year 3 - WASSCE)</option>
              </select>

              {/* Subject Filter */}
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-slate-700 font-medium"
              >
                <option value="ALL">All Subjects</option>
                <optgroup label="Core Subjects">
                  {SHS_CORE_SUBJECTS.map((sub) => (
                    <option key={`core-${sub.id}`} value={sub.id}>
                      {sub.name} (Core)
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Elective Subjects">
                  {uniqueElectives.map((sub) => (
                    <option key={`elec-${sub.id}`} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </optgroup>
              </select>

              {/* Paper Type Filter */}
              <select
                value={selectedPaperType}
                onChange={(e) => setSelectedPaperType(e.target.value)}
                className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-slate-700 font-medium"
              >
                <option value="ALL">All Paper Types</option>
                <option value="Combined Paper">Combined Paper (A &amp; B)</option>
                <option value="Paper 1">Paper 1 (Objectives)</option>
                <option value="Paper 2">Paper 2 (Written / Theory)</option>
                <option value="Marking Scheme">Marking Scheme</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:text-rose-700 font-medium px-2 py-1.5 transition"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Document Results */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-slate-500 font-medium">Loading SHS trial mock papers...</p>
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4">
            <FileText className="w-12 h-12 text-slate-300 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-800">No SHS Mock Papers Found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {hasActiveFilters
                  ? 'No documents matched your specific filter criteria. Try clearing some filters or searching for another term.'
                  : 'No SHS trial mocks have been published by the administration yet. Check back soon!'}
              </p>
            </div>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition"
              >
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-slate-200 hover:border-amber-300 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      {doc.level || 'SHS Mock'}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {doc.paperType}
                    </span>
                  </div>

                  {/* Document Title */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium mt-1">
                      {doc.subjectName}
                    </p>
                  </div>

                  {/* File Metadata */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span>{formatFileSize(doc.fileSizeBytes)}</span>
                    <span>•</span>
                    <span className="truncate">{doc.fileName}</span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleDocumentAction(e, doc)}
                    className="flex-1 py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    {!hasFullAccess ? <Lock className="w-3.5 h-3.5 text-amber-500" /> : <ExternalLink className="w-3.5 h-3.5" />}
                    <span>Preview</span>
                  </a>

                  <a
                    href={doc.fileUrl}
                    download={doc.fileName}
                    onClick={(e) => handleDocumentAction(e, doc)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-xs"
                  >
                    {!hasFullAccess ? <Lock className="w-3.5 h-3.5 text-amber-400" /> : <Download className="w-3.5 h-3.5" />}
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Access Pin Modal if student doesn't have full access */}
      {isPinModalOpen && (
        <AccessPinModal
          isOpen={isPinModalOpen}
          onClose={() => setIsPinModalOpen(false)}
        />
      )}
    </div>
  );
}
