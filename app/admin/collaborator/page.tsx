'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Upload, 
  FileText, 
  Check, 
  AlertCircle, 
  BookOpen, 
  ArrowLeft, 
  ExternalLink, 
  Trash2, 
  Search, 
  Key, 
  Lock,
  GraduationCap,
  Clock,
  CheckCircle2,
  XCircle
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

  const validateToken = async (candidateToken: string) => {
    setValidating(true);
    try {
      const res = await fetch(`/api/university/collaborator?token=${encodeURIComponent(candidateToken)}`);
      const data = await res.json();
      if (res.ok && data.success && data.valid) {
        setIsValidToken(true);
        if (typeof window !== 'undefined') {
          localStorage.setItem('academicprep_collab_token', candidateToken);
        }
        await loadSlides(candidateToken);
      } else {
        setIsValidToken(false);
      }
    } catch {
      setIsValidToken(false);
    } finally {
      setValidating(false);
    }
  };

  const handleManualTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;
    validateToken(token.trim());
  };

  const loadSlides = async (activeToken?: string) => {
    setLoadingSlides(true);
    try {
      const tok = activeToken || token;
      // Fetch with status=all so collaborator sees pending & approved slides
      const res = await fetch(`/api/university/slides?status=all&token=${encodeURIComponent(tok)}`, {
        headers: {
          'x-collaborator-token': tok,
        },
      });
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
        setFeedback({ 
          kind: 'ok', 
          message: data.message || `Slide "${data.slide?.title || title}" uploaded! It is waiting for admin approval before going live.` 
        });
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

  // 1. TOKEN VALIDATION IN PROGRESS
  if (validating) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-4 shadow-sm">
          <div className="w-10 h-10 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto" />
          <h1 className="text-base font-bold text-slate-900">Validating Collaborator Pass</h1>
          <p className="text-xs text-slate-500">Checking your unique collaborator authorization token with AcademicPrep...</p>
        </div>
      </div>
    );
  }

  // 2. INVALID OR MISSING TOKEN SCREEN
  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mx-auto font-bold">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">Collaborator Invitation Required</h1>
            <p className="text-xs text-slate-500 leading-relaxed">
              This upload portal is reserved for authorized faculty members, teaching assistants, and university course representatives. Please use the personalized invitation link provided by the administrator or enter your invitation token below.
            </p>
          </div>

          <form onSubmit={handleManualTokenSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Collaborator Token
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Paste PREP-FACULTY-XXXX"
                  className="w-full pl-9 pr-3 py-2 text-xs font-mono border border-slate-200 rounded-lg focus:outline-none focus:border-slate-800"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition"
            >
              Verify Collaborator Access
            </button>
          </form>

          <div className="text-center pt-2 border-t border-slate-100">
            <Link
              href="/university"
              className="text-xs text-slate-500 hover:text-slate-900 transition flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public University Portal</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. COLLABORATOR WORKSPACE
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 font-sans">
      
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Link 
              href="/university"
              className="text-slate-500 hover:text-slate-900 transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Student Portal</span>
            </Link>
            <span className="text-slate-300">/</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 truncate max-w-[130px] sm:max-w-none">Faculty &amp; Collaborator Portal</span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
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
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">Upload University Course Slides</h1>
            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-neutral-100 text-neutral-800">Admin Approval Workflow</span>
          </div>
          <p className="text-xs text-slate-500">
            Push official lecture slides and handouts. Uploaded slides are sent directly to the administrator for review and approval before appearing live on the student portal.
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
          
          {/* LEFT COLUMN: UPLOAD FORM (5 COLS) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Course Slide Metadata</h2>
              <p className="text-[11px] text-slate-500">All fields help students locate this deck instantly by course code.</p>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
              
              {/* FILE PICKER */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Lecture Slide File (PDF) <span className="text-rose-500">*</span>
                </label>
                <div className="border border-dashed border-slate-300 hover:border-slate-400 rounded-lg p-4 text-center cursor-pointer transition bg-slate-50/50">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="collab-file-input"
                  />
                  <label htmlFor="collab-file-input" className="cursor-pointer block space-y-1">
                    <Upload className="w-5 h-5 text-slate-400 mx-auto" />
                    <p className="font-semibold text-slate-700 text-xs">
                      {selectedFile ? selectedFile.name : 'Click to select PDF slide deck'}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to upload` : 'PDF presentations up to 50MB'}
                    </p>
                  </label>
                </div>
              </div>

              {/* COURSE CODE & TITLE */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Course Code <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value.toUpperCase())}
                    placeholder="e.g. DCIT 101"
                    className="w-full px-2.5 py-2 font-mono uppercase text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Slide Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Intro to Hardware"
                    className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800"
                    required
                  />
                </div>
              </div>

              {/* COURSE NAME */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Full Course Name (Optional)
                </label>
                <input
                  type="text"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="e.g. Introduction to Computer Science"
                  className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800"
                />
              </div>

              {/* UNIVERSITY */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  University / Institution
                </label>
                <select
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800 bg-white"
                >
                  {GHANAIAN_UNIVERSITIES.map(u => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>

              {/* DEPARTMENT / FACULTY */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Department / Faculty
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800 bg-white"
                >
                  {UNIVERSITY_DEPARTMENTS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* LEVEL & SEMESTER */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Academic Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800 bg-white"
                  >
                    {UNIVERSITY_LEVELS.map(l => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Semester
                  </label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800 bg-white"
                  >
                    {UNIVERSITY_SEMESTERS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CONTRIBUTOR NAME */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Your Name or Title (Optional)
                </label>
                <input
                  type="text"
                  value={uploadedBy}
                  onChange={(e) => setUploadedBy(e.target.value)}
                  placeholder="e.g. Dr. Mensah (Lecturer) or Course Rep"
                  className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800"
                />
              </div>

              {/* DESCRIPTION / LECTURE NOTES */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Brief Description or Week Focus (Optional)
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Week 4 lecture covering CPU architecture, memory registers, and I/O bus cycles."
                  className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-slate-800 resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={uploading}
                className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                {uploading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Uploading &amp; Submitting for Approval...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>Submit Slides for Admin Approval</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-400 text-center">
                Slides will appear with a <span className="text-amber-600 font-semibold">Waiting for Approval</span> badge until verified by the platform admin.
              </p>
            </form>
          </div>

          {/* RIGHT COLUMN: RECENTLY UPLOADED SLIDES (7 COLS) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">University Slide Submissions</h2>
                <p className="text-[11px] text-slate-500">{slides.length} slide decks in database (Live and Pending Review).</p>
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
                <span>Loading slide directory...</span>
              </div>
            ) : filteredSlides.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No university slides match your search query.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredSlides.map((s) => {
                  const isApproved = (s.status || 'approved') === 'approved';
                  const isPending = s.status === 'pending';
                  const isRejected = s.status === 'rejected';

                  return (
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
                          {/* Approval status pill */}
                          {isPending && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                              <Clock className="w-3 h-3 text-amber-600" />
                              Waiting for Admin Approval
                            </span>
                          )}
                          {isApproved && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              Live on Website
                            </span>
                          )}
                          {isRejected && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                              <XCircle className="w-3 h-3 text-rose-600" />
                              Rejected by Admin
                            </span>
                          )}
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
                        {isApproved && (
                          <Link
                            href={`/university?loadSlideId=${encodeURIComponent(s.id)}`}
                            target="_blank"
                            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition"
                            title="Study in Student Studio"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        <button
                          onClick={() => handleDeleteSlide(s.id, s.title)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-neutral-50 rounded transition"
                          title="Delete Slide"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
