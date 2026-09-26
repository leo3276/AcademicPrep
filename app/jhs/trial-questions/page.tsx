'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { CURRICULUM_SUBJECTS } from '@/lib/curriculumData';
import { EducationLevel } from '@/lib/types';
import { 
  UploadedPdfDocument, 
  fetchUploadedDocuments, 
  formatFileSize,
  PdfPaperType 
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

export default function TrialQuestionsPage() {
  const { student } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState<UploadedPdfDocument[]>([]);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [selectedDocForPin, setSelectedDocForPin] = useState<UploadedPdfDocument | null>(null);

  const handleDocumentAction = (e: React.MouseEvent, doc: UploadedPdfDocument) => {
    if (!student?.hasFullAccess) {
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

  const loadDocuments = async () => {
    try {
      setLoading(true);
      const allDocs = await fetchUploadedDocuments();
      setDocuments(allDocs.filter(d => d.category === 'trial_mock'));
    } catch (err: any) {
      console.warn('Trial mock documents notice:', err?.message || err);
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
              href="/jhs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition p-1.5 rounded-lg hover:bg-slate-100"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to JHS Portal</span>
            </Link>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
              <span>Junior High School</span>
              <span>/</span>
              <span className="font-semibold text-slate-900">Trial Mock Exams</span>
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {documents.length} Mock {documents.length === 1 ? 'Exam' : 'Exams'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Hero Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Diagnostic Mock Assessments</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trial Mock Examination Papers
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Official school diagnostic mock exams, end-of-term assessment booklets, and marking guides uploaded directly by your administrator. View files in your browser or download them for offline practice.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search trial mock papers by title, subject, or filename..."
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
                <option value="ALL">All Levels (JHS 1 - 3)</option>
                <option value="JHS 1">JHS 1</option>
                <option value="JHS 2">JHS 2</option>
                <option value="JHS 3">JHS 3</option>
              </select>

              {/* Subject Filter */}
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-slate-700 font-medium"
              >
                <option value="ALL">All Subjects</option>
                {CURRICULUM_SUBJECTS.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name}
                  </option>
                ))}
              </select>

              {/* Paper Type Filter */}
              <select
                value={selectedPaperType}
                onChange={(e) => setSelectedPaperType(e.target.value)}
                className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-slate-700 font-medium"
              >
                <option value="ALL">All Paper Types</option>
                <option value="Paper 1">Paper 1 (Objectives)</option>
                <option value="Paper 2">Paper 2 (Theory / Written)</option>
                <option value="Combined Paper">Combined Paper (1 & 2)</option>
                <option value="Marking Scheme">Marking Scheme / Answers</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1.5 transition underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Quick Summary Counts */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-900">{filteredDocuments.length}</strong> of{' '}
              <strong className="text-slate-900">{documents.length}</strong> mock examination {documents.length === 1 ? 'document' : 'documents'}
            </span>
            {hasActiveFilters && (
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-medium">
                Filtered view active
              </span>
            )}
          </div>
        </div>

        {/* VIP Lock Banner for Free Tier */}
        {mounted && !student?.hasFullAccess && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-amber-950">
                  Trial Mock Exam Booklets Require VIP Access Pass
                </p>
                <p className="text-[11px] text-amber-800">
                  Free accounts allow studying up to 3 curriculum topics. An Access PIN unlocks viewing and downloading all official trial mocks and practice booklets.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedDocForPin(null);
                setIsPinModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 transition shadow-xs flex items-center justify-center gap-1.5"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Unlock Mocks (Enter PIN)</span>
            </button>
          </div>
        )}

        {/* Content Section */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs animate-pulse space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100" />
                  <div className="w-16 h-5 rounded-full bg-slate-100" />
                </div>
                <div className="space-y-2">
                  <div className="w-3/4 h-4 bg-slate-100 rounded" />
                  <div className="w-1/2 h-3 bg-slate-100 rounded" />
                </div>
                <div className="w-full h-8 bg-slate-100 rounded-xl mt-4" />
              </div>
            ))}
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-xs space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
              <FileCheck className="w-7 h-7" />
            </div>
            <div className="max-w-md mx-auto space-y-1.5">
              <h3 className="text-base font-bold text-slate-900">
                {hasActiveFilters ? 'No mock papers match your filter' : 'No trial mock exams uploaded yet'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {hasActiveFilters
                  ? 'Try selecting a different level, subject, or clearing your search term.'
                  : 'The administrator has not uploaded any trial mock PDFs yet. As soon as documents are added in the school admin portal, they will automatically appear here for students.'}
              </p>
            </div>
            {hasActiveFilters ? (
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition"
              >
                Clear all filters
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs">
                <Info className="w-3.5 h-3.5 text-slate-500" />
                <span>Only documents uploaded by the school administrator will appear here.</span>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Card Header: Icon & Level Tag */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-rose-600 font-bold text-[11px] tracking-wider shadow-xs">
                        PDF
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                          {doc.level || 'JHS'}
                        </span>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          {doc.subjectName}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 shrink-0">
                      {doc.paperType}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition">
                      {doc.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 mt-1 truncate" title={doc.fileName}>
                      {doc.fileName}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <span className="font-mono font-medium text-slate-700">
                      {formatFileSize(doc.fileSizeBytes)}
                    </span>
                    <span>•</span>
                    <span>{new Date(doc.uploadedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>

                {/* Actions: View PDF & Download */}
                <div className="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-slate-100">
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleDocumentAction(e, doc)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-2xs ${
                      !student?.hasFullAccess
                        ? 'border-amber-200 bg-amber-50/70 hover:bg-amber-100 text-amber-900'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    {!student?.hasFullAccess ? (
                      <Lock className="w-3.5 h-3.5 text-amber-600" />
                    ) : (
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    )}
                    <span>{!student?.hasFullAccess ? 'Unlock PDF' : 'View PDF'}</span>
                  </a>

                  <a
                    href={doc.fileUrl}
                    download={doc.fileName}
                    onClick={(e) => handleDocumentAction(e, doc)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-2xs ${
                      !student?.hasFullAccess
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {!student?.hasFullAccess ? (
                      <KeyRound className="w-3.5 h-3.5" />
                    ) : (
                      <Download className="w-3.5 h-3.5" />
                    )}
                    <span>{!student?.hasFullAccess ? 'Unlock Access' : 'Download'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Access PIN Paywall Modal */}
      <AccessPinModal
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        featureName={selectedDocForPin ? `Mock Booklet: "${selectedDocForPin.title}"` : 'Trial Mock Examination Booklets'}
        onSuccess={() => {
          setIsPinModalOpen(false);
        }}
      />
    </div>
  );
}
