'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Upload, 
  FileText, 
  Check, 
  AlertCircle, 
  Trash2, 
  ExternalLink, 
  ArrowLeft,
  Key,
  Search,
  BookOpen,
  Building,
  GraduationCap
} from 'lucide-react';
import { 
  UniversitySlide, 
  GHANAIAN_UNIVERSITIES, 
  UNIVERSITY_LEVELS, 
  UNIVERSITY_SEMESTERS, 
  UNIVERSITY_DEPARTMENTS 
} from '@/lib/universitySlideTypes';

export default function CollaboratorUploadPage() {
  const [token, setToken] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const [validating, setValidating] = useState<boolean>(true);

  const [slides, setSlides] = useState<UniversitySlide[]>([]);
  const [loadingSlides, setLoadingSlides] = useState<boolean>(false);

  // Form State
  const [title, setTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [university, setUniversity] = useState(GHANAIAN_UNIVERSITIES[0]);
  const [department, setDepartment] = useState(UNIVERSITY_DEPARTMENTS[0]);
  const [level, setLevel] = useState(UNIVERSITY_LEVELS[0]);
  const [semester, setSemester] = useState(UNIVERSITY_SEMESTERS[0]);
  const [description, setDescription] = useState('');
  const [uploadedBy, setUploadedBy] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: 'ok' | 'bad'; message: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize token from URL or localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const urlParams = new URLSearchParams(window.location.search);
    const queryToken = urlParams.get('token') || '';
    const storedToken = localStorage.getItem('academicprep_collab_token') || '';
    const activeToken = queryToken || storedToken;

    if (activeToken) {
      setToken(activeToken);
      validateToken(activeToken);
    } else {
      setValidating(false);
      setIsValidToken(false);
    }
  }, []);

  const validateToken = async (testToken: string) => {
    setValidating(true);
    try {
      const res = await fetch(`/api/university/collaborator?token=${encodeURIComponent(testToken)}`);
      const data = await res.json();
      if (data.success && data.valid) {
        setIsValidToken(true);
        setToken(testToken);
        localStorage.setItem('academicprep_collab_token', testToken);
        loadSlides();
      } else {
        setIsValidToken(false);
      }
    } catch (e) {
      setIsValidToken(false);
    } finally {
      setValidating(false);
    }
  };

  const handleManualTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) return;
    validateToken(tokenInput.trim());
  };

  const loadSlides = async () => {
    setLoadingSlides(true);
    try {
      const res = await fetch('/api/university/slides', { cache: 'no-store' });
      const data = await res.json();
      if (data.success && Array.isArray(data.slides)) {
        setSlides(data.slides);
      }
    } catch (err) {
      console.warn('Failed to load slides:', err);
    } finally {
      setLoadingSlides(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      if (!f.name.toLowerCase().endsWith('.pdf')) {
        setFeedback({ kind: 'bad', message: 'Only PDF slide decks are accepted.' });
        return;
      }
      setSelectedFile(f);
      if (!title) {
        // Auto-fill title from filename
        const clean = f.name.replace(/\.pdf$/i, '').replace(/[_|-]/g, ' ');
        setTitle(clean);
      }
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseCode.trim()) {
      setFeedback({ kind: 'bad', message: 'Course Code is required (e.g. DCIT 101).' });
      return;
    }
    if (!title.trim()) {
      setFeedback({ kind: 'bad', message: 'Slide Title is required.' });
      return;
    }
    if (!selectedFile) {
      setFeedback({ kind: 'bad', message: 'Please select a lecture slide PDF file.' });
      return;
    }

    setUploading(true);
    setFeedback(null);

    try {
      const fd = new FormData();
      fd.append('file', selectedFile);
      fd.append('title', title.trim());
      fd.append('courseCode', courseCode.trim().toUpperCase());
      fd.append('courseTitle', courseTitle.trim() || title.trim());
      fd.append('university', university);
      fd.append('department', department);
      fd.append('level', level);
      fd.append('semester', semester);
      fd.append('description', description.trim());
      fd.append('uploadedBy', uploadedBy.trim() || 'Collaborator');

      const res = await fetch('/api/university/slides', {
        method: 'POST',
        headers: {
          'x-collaborator-token': token,
          'x-collaborator-name': uploadedBy.trim() || 'Collaborator',
        },
        body: fd,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFeedback({ kind: 'ok', message: `Slide "${data.slide.title}" uploaded successfully!` });
        // Reset form
        setTitle('');
        setCourseCode('');
        setCourseTitle('');
        setDescription('');
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        await loadSlides();
      } else {
        setFeedback({ kind: 'bad', message: data.error || 'Failed to upload lecture slides.' });
      }
    } catch (err: any) {
      setFeedback({ kind: 'bad', message: err.message || 'Network error during upload.' });
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteSlide = async (id: string, slideTitle: string) => {
    if (!confirm(`Are you sure you want to remove "${slideTitle}" from the university repository?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/university/slides?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: {
          'x-collaborator-token': token,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSlides(prev => prev.filter(s => s.id !== id));
      } else {
        alert(data.error || 'Could not delete slide.');
      }
    } catch (err: any) {
      alert(err.message || 'Error deleting slide.');
    }
  };

  const filteredSlides = slides.filter(s => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return s.title.toLowerCase().includes(q) ||
           s.courseCode.toLowerCase().includes(q) ||
           s.university.toLowerCase().includes(q) ||
           (s.department && s.department.toLowerCase().includes(q));
  });

  // 1. TOKEN GATE (When no valid token is provided)
  if (!validating && !isValidToken) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm space-y-6">
          <div className="space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-600">
              <Key className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight">Collaborator Access Required</h1>
            <p className="text-xs text-slate-500 leading-relaxed">
              This upload portal is restricted to authorized university collaborators, teaching assistants, and faculty contributors.
            </p>
          </div>

          <form onSubmit={handleManualTokenSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Collaborator Token / Secret Key
              </label>
              <input
                type="text"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="Paste token or collaborator link key..."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-slate-800 font-mono"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition"
            >
              Verify Collaborator Access
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
            Need an access link? Ask the AcademicPrep Platform Administrator.
          </div>
        </div>
      </div>
    );
  }

  // 2. LOADING STATE
  if (validating) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans text-slate-400">
        <div className="text-xs flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-slate-800 border-t-transparent rounded-full animate-spin" />
          <span>Verifying collaborator authorization...</span>
        </div>
      </div>
    );
  }

  // 3. COLLABORATOR WORKSPACE
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      
      {/* MINIMAL TOP BAR */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Link 
              href="/university"
              className="text-slate-500 hover:text-slate-900 transition flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Student Portal</span>
            </Link>
            <span className="text-slate-300">/</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">Faculty & Collaborator Portal</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Verified Contributor
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/university"
              target="_blank"
              className="text-slate-600 hover:text-slate-900 transition flex items-center gap-1 text-[11px]"
            >
              <span>View Live Slides</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        
        {/* PAGE HEADER */}
        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-slate-900">Upload University Course Slides</h1>
          <p className="text-xs text-slate-500">
            Publish official lecture slides, handouts, and reading decks for Ghanaian university students.
          </p>
        </div>

        {/* FEEDBACK BANNER */}
        {feedback && (
          <div className={`p-3 rounded-lg text-xs flex items-center gap-2.5 border ${
            feedback.kind === 'ok' 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
              : 'bg-rose-50 text-rose-800 border-rose-200'
          }`}>
            {feedback.kind === 'ok' ? <Check className="w-4 h-4 text-emerald-600 shrink-0" /> : <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* TWO-COLUMN LAYOUT: UPLOAD FORM ON LEFT, RECENT SLIDES ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* UPLOAD FORM (5 COLS) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Slide Metadata & PDF</h2>
              <p className="text-[11px] text-slate-500">All fields are indexed for students in the university portal.</p>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-3.5 text-xs">
              
              {/* Course Code & Contributor Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Course Code *
                  </label>
                  <input
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    placeholder="e.g. DCIT 101"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-800 uppercase font-mono font-semibold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Your Name / Role
                  </label>
                  <input
                    type="text"
                    value={uploadedBy}
                    onChange={(e) => setUploadedBy(e.target.value)}
                    placeholder="e.g. Dr. Mensah / TA Kofi"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-800"
                  />
                </div>
              </div>

              {/* Slide Title */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  Slide Deck Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Lecture 3: Logic Gates & Boolean Algebra"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-800"
                  required
                />
              </div>

              {/* University Selector */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  University / Institution *
                </label>
                <select
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-slate-800 font-medium"
                >
                  {GHANAIAN_UNIVERSITIES.map(u => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>

              {/* Department */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  Department / Faculty
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-slate-800"
                >
                  {UNIVERSITY_DEPARTMENTS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Level & Semester */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-slate-800 font-medium"
                  >
                    {UNIVERSITY_LEVELS.map(l => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Semester
                  </label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-slate-800 font-medium"
                  >
                    {UNIVERSITY_SEMESTERS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  Brief Overview / Topics Covered
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Key concepts, units covered, or exam relevance..."
                  rows={2}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-800 resize-none"
                />
              </div>

              {/* PDF FILE PICKER */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  PDF Lecture Slides File *
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer border border-dashed border-slate-300 hover:border-slate-500 rounded-lg p-4 text-center bg-slate-50/50 hover:bg-slate-50 transition flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Upload className="w-4 h-4" />
                  </div>
                  {selectedFile ? (
                    <div>
                      <span className="font-semibold text-slate-900 block truncate max-w-[240px]">{selectedFile.name}</span>
                      <span className="text-[10px] text-slate-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to upload</span>
                    </div>
                  ) : (
                    <div>
                      <span className="font-medium text-slate-700 block">Click to select PDF slide deck</span>
                      <span className="text-[10px] text-slate-400">PDF documents up to 50MB</span>
                    </div>
                  )}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={uploading}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-black text-white font-semibold rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {uploading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Uploading & Syncing Slides...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-3.5 h-3.5" />
                    <span>Publish Slides to Student Portal</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: RECENTLY UPLOADED SLIDES (7 COLS) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Published Slides Directory</h2>
                <p className="text-[11px] text-slate-500">{slides.length} slide decks currently published across Ghanaian universities.</p>
              </div>

              {/* SEARCH INPUT */}
              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by code or title..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800"
                />
              </div>
            </div>

            {loadingSlides ? (
              <div className="py-12 text-center text-xs text-slate-400">
                <div className="w-4 h-4 border-2 border-slate-800 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <span>Loading published slide decks...</span>
              </div>
            ) : filteredSlides.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No university slides match your search query.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredSlides.map((s) => (
                  <div key={s.id} className="py-3 flex items-start justify-between gap-3 text-xs">
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono font-bold text-[11px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-900">
                          {s.courseCode}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {s.university}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          • {s.level}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-900 truncate">{s.title}</h3>
                      {s.description && (
                        <p className="text-[11px] text-slate-500 line-clamp-1">{s.description}</p>
                      )}
                      <div className="text-[10px] text-slate-400 flex items-center gap-3 pt-0.5">
                        <span>By {s.uploadedBy || 'Admin'}</span>
                        <span>• {new Date(s.uploadedAt).toLocaleDateString()}</span>
                        {s.fileSizeBytes ? <span>• {(s.fileSizeBytes / (1024 * 1024)).toFixed(1)} MB</span> : null}
                      </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-1.5 shrink-0 pt-1">
                      <Link
                        href={`/university?loadSlideId=${encodeURIComponent(s.id)}`}
                        target="_blank"
                        className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition"
                        title="Study in Student Studio"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => handleDeleteSlide(s.id, s.title)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition"
                        title="Delete Slide"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
