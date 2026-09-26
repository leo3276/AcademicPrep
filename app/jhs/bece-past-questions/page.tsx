'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { CURRICULUM_SUBJECTS } from '@/lib/curriculumData';
import { getAllBeceYears } from '@/lib/becePastQuestionsData';
import { 
  UploadedPdfDocument, 
  fetchUploadedDocuments, 
  formatFileSize,
  PdfPaperType 
} from '@/lib/pdfStore';
import { 
  ArrowLeft, 
  BookOpen, 
  Download, 
  ExternalLink, 
  Search, 
  Filter, 
  FileText, 
  Calendar,
  Sparkles,
  RefreshCw,
  Info,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function BecePastQuestionsPage() {
  const { student } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState<UploadedPdfDocument[]>([]);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'ALL'>('ALL');
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [selectedPaperType, setSelectedPaperType] = useState<string>('ALL');

  const allYears = getAllBeceYears(); // 2026 down to 2008

  const loadDocuments = async () => {
    try {
      setLoading(true);
      const allDocs = await fetchUploadedDocuments();
      setDocuments(allDocs.filter(d => d.category === 'bece_past_question'));
    } catch (err) {
      console.error('Failed to load BECE documents:', err);
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
      // Year filter
      if (selectedYear !== 'ALL' && doc.year !== selectedYear) {
        return false;
      }
      // Subject filter
      if (selectedSubject !== 'ALL' && doc.subjectId !== selectedSubject) {
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
        const matchesYear = doc.year ? String(doc.year).includes(q) : false;
        if (!matchesTitle && !matchesSubject && !matchesFilename && !matchesYear) {
          return false;
        }
      }
      return true;
    });
  }, [documents, selectedYear, selectedSubject, selectedPaperType, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedYear('ALL');
    setSelectedSubject('ALL');
    setSelectedPaperType('ALL');
  };

  const hasActiveFilters = 
    searchQuery.trim() !== '' || 
    selectedYear !== 'ALL' || 
    selectedSubject !== 'ALL' || 
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
              <span className="font-semibold text-slate-900">BECE Past Questions (2008 – 2026)</span>
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              <BookOpen className="w-3.5 h-3.5" />
              {documents.length} BECE {documents.length === 1 ? 'Paper' : 'Papers'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Hero Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>WAEC Official Archives (2008 – 2026)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              BECE Past Examination Papers & Marking Schemes
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Authentic WAEC Basic Education Certificate Examination (BECE) question booklets, objective tests, written theory papers, and verified marking schemes uploaded by school administration.
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
                placeholder="Search BECE past papers by year, subject, title, or filename..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition bg-slate-50/50"
              />
            </div>

            {/* Select Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-slate-700 font-medium"
              >
                <option value="ALL">All Years (2008 - 2026)</option>
                {allYears.map((yr) => (
                  <option key={yr} value={yr}>
                    BECE {yr}
                  </option>
                ))}
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
                <option value="Marking Scheme">Marking Scheme / Guide</option>
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
              <strong className="text-slate-900">{documents.length}</strong> BECE examination {documents.length === 1 ? 'document' : 'documents'}
            </span>
            {hasActiveFilters && (
              <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[11px] font-medium">
                Filtered view active
              </span>
            )}
          </div>
        </div>

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
              <BookOpen className="w-7 h-7" />
            </div>
            <div className="max-w-md mx-auto space-y-1.5">
              <h3 className="text-base font-bold text-slate-900">
                {hasActiveFilters ? 'No BECE papers match your filter' : 'No BECE past questions uploaded yet'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {hasActiveFilters
                  ? 'Try selecting a different year, subject, or resetting your search query.'
                  : 'The administrator has not uploaded any BECE PDF papers yet. Once uploaded from the school admin dashboard, official past question booklets (2008 – 2026) will be accessible here for students to view and download.'}
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
                  {/* Card Header: Icon & Year Tag */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-700 font-bold text-[11px] tracking-wider shadow-xs">
                        PDF
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                          {doc.year ? `BECE ${doc.year}` : 'BECE'}
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
                    className="py-2 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-100 text-slate-800 text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    <span>View PDF</span>
                  </a>

                  <a
                    href={doc.fileUrl}
                    download={doc.fileName}
                    className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
