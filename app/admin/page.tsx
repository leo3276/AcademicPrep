'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { EducationLevel, AccessPin } from '@/lib/types';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS, SHS_CORE_SUBJECTS } from '@/lib/curriculumData';
import { SHS_ELECTIVE_GROUPS } from '@/lib/curriculumShsElectives';
import {
  getStoredTrafficData,
  clearStudentRosterCache,
  DEFAULT_TRAFFIC_DATA
} from '@/lib/adminStore';
import { fetchStudents, adminGrantAccess, adminRevokeAccess } from '@/lib/apiClient';
import { AdminStudentDetail, WebTrafficData } from '@/lib/types';
import { getAllBeceYears, getAllWassceYears } from '@/lib/becePastQuestionsData';
import { 
  UploadedPdfDocument, 
  fetchUploadedDocuments, 
  uploadPdfDocument, 
  deletePdfDocument, 
  formatFileSize,
  PdfCategory,
  PdfPaperType,
  getPdfCategoryLabel,
  isShsCategory
} from '@/lib/pdfStore';
import { 
  BlogPost, 
  BlogCategory, 
  BLOG_CATEGORIES, 
  INITIAL_BLOG_POSTS,
  fetchBlogPosts, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost 
} from '@/lib/blogStore';
import { 
  MomoClaim, 
  OFFICIAL_MOMO_DETAILS 
} from '@/lib/momoConfig';
import { 
  ShieldCheck,
  EyeOff,
  Key,
  AlertCircle,
  ShieldAlert, 
  Users, 
  DollarSign, 
  TrendingUp, 
  KeyRound, 
  FilePlus, 
  Upload,
  Download, 
  Search, 
  CheckCircle2, 
  Copy, 
  Lock, 
  ArrowRight, 
  LogOut, 
  Plus, 
  Trash2, 
  Activity, 
  Globe, 
  Smartphone, 
  Monitor, 
  CheckCircle, 
  XCircle, 
  Award, 
  BookOpen, 
  BarChart3, 
  Eye, 
  Clock, 
  Filter, 
  UserCheck, 
  ExternalLink,
  FileText,
  Flame,
  Edit,
  Image as ImageIcon,
  Video as VideoIcon,
  UploadCloud,
  X,
  MessageCircle
} from 'lucide-react';
import { parseVideoUrl } from '@/lib/mediaUtils';


export default function AdminDashboardPage() {
  const { 
    isAdmin, 
    loginAdmin, 
    logoutAdmin, 
    updateAdminPins,
    getAdminMetrics, 
    pins, 
    transactions, 
    generatePinBatch,
    refreshPins
  } = useAuth();

  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  // Sequential Two-Stage Authentication States
  const [authStep, setAuthStep] = useState<'primary' | 'secondary'>('primary');
  const [primaryPin, setPrimaryPin] = useState('');
  const [secondaryPin, setSecondaryPin] = useState('');
  const [showPrimaryPin, setShowPrimaryPin] = useState(false);
  const [showSecondaryPin, setShowSecondaryPin] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Security Credentials Update Modal
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [currentPrimaryPin, setCurrentPrimaryPin] = useState('');
  const [currentSecondaryPin, setCurrentSecondaryPin] = useState('');
  const [editPrimaryPin, setEditPrimaryPin] = useState('');
  const [editSecondaryPin, setEditSecondaryPin] = useState('');
  const [securityModalMsg, setSecurityModalMsg] = useState<string | null>(null);
  const [isSavingKeys, setIsSavingKeys] = useState(false);
  
  // Navigation Tabs: traffic, paid_access, momo_claims, completions, trial_mocks, pins, blog
  const [activeTab, setActiveTab] = useState<'traffic' | 'paid_access' | 'momo_claims' | 'completions' | 'trial_mocks' | 'pins' | 'blog'>('traffic');

  // Stores
  const [trafficData, setTrafficData] = useState<WebTrafficData>(() => {
    if (typeof window !== 'undefined') return getStoredTrafficData();
    return DEFAULT_TRAFFIC_DATA;
  });
  const [students, setStudents] = useState<AdminStudentDetail[]>([]);
  // PDF Documents Store
  const [pdfDocuments, setPdfDocuments] = useState<UploadedPdfDocument[]>([]);
  const [pdfFilterCategory, setPdfFilterCategory] = useState<'ALL' | PdfCategory>('ALL');
  const [pdfFilterSubject, setPdfFilterSubject] = useState('ALL');
  const [showPdfUploadForm, setShowPdfUploadForm] = useState(false);
  const [isUploadingPdf, setIsUploadingPdf] = useState(false);

  // MoMo Claims Store
  const [momoClaims, setMomoClaims] = useState<MomoClaim[]>([]);
  const [loadingClaims, setLoadingClaims] = useState(false);
  const [momoClaimsFilter, setMomoClaimsFilter] = useState<'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'>('ALL');
  const [momoSearch, setMomoSearch] = useState('');
  const [momoActionMsg, setMomoActionMsg] = useState<{ kind: 'ok' | 'bad'; text: string } | null>(null);
  const [processingClaimId, setProcessingClaimId] = useState<string | null>(null);
  const [momoQuickPhone, setMomoQuickPhone] = useState('');
  const [momoQuickMsg, setMomoQuickMsg] = useState<string | null>(null);

  // Blog Management Store & Composer State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem('academicprep_blog_posts_v1');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch {
        // storage fallback
      }
    }
    return INITIAL_BLOG_POSTS;
  });
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [blogSearch, setBlogSearch] = useState('');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState<'ALL' | BlogCategory>('ALL');
  const [showBlogComposer, setShowBlogComposer] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  const [blogTitle, setBlogTitle] = useState('');
  const [blogCategory, setBlogCategory] = useState<BlogCategory>('Study Tips');
  const [blogAuthor, setBlogAuthor] = useState('AcademicPrep Editorial');
  const [blogReadTime, setBlogReadTime] = useState(4);
  const [blogExcerpt, setBlogExcerpt] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogFeatured, setBlogFeatured] = useState(false);
  const [blogMediaType, setBlogMediaType] = useState<'none' | 'image' | 'video'>('none');
  const [blogMediaUrl, setBlogMediaUrl] = useState('');
  const [blogMediaCaption, setBlogMediaCaption] = useState('');
  const [isUploadingBlogMedia, setIsUploadingBlogMedia] = useState(false);
  const [blogMediaUploadError, setBlogMediaUploadError] = useState<string | null>(null);
  const [isSavingBlog, setIsSavingBlog] = useState(false);
  const [blogBanner, setBlogBanner] = useState<{ kind: 'ok' | 'bad'; text: string } | null>(null);

  // PDF Upload Form State
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfTitle, setPdfTitle] = useState('');
  const [pdfCategory, setPdfCategory] = useState<PdfCategory>('bece_past_question');
  const [pdfSubject, setPdfSubject] = useState('math');
  const [pdfYear, setPdfYear] = useState(2024);
  const [pdfLevel, setPdfLevel] = useState<EducationLevel>('JHS 3');
  const [pdfPaperType, setPdfPaperType] = useState<PdfPaperType>('Combined Paper');

  // Search & Filters
  const [studentSearch, setStudentSearch] = useState('');
  const [studentAccessFilter, setStudentAccessFilter] = useState<'ALL' | 'Full Pass' | 'Free Trial' | 'Expired'>('ALL');


  // Grant Access Modal
  const [showGrantModal, setShowGrantModal] = useState(false);
  const [selectedStudentForAccess, setSelectedStudentForAccess] = useState<AdminStudentDetail | null>(null);
  const [customPhoneInput, setCustomPhoneInput] = useState('');
  const [grantDurationDays, setGrantDurationDays] = useState(30);
  const [formSuccessMessage, setFormSuccessMessage] = useState<string | null>(null);

  // PIN Generator Form State
  const [pinCount, setPinCount] = useState(10);
  const [pinPrice, setPinPrice] = useState(25);
  const [pinValidity, setPinValidity] = useState(30);
  const [newlyGenerated, setNewlyGenerated] = useState<AccessPin[]>([]);
  const [copiedPin, setCopiedPin] = useState<string | null>(null);
  const [isGeneratingPins, setIsGeneratingPins] = useState(false);
  const [pinError, setPinError] = useState<string | null>(null);
  const [accessError, setAccessError] = useState<string | null>(null);

  const loadRealStudents = async () => {
    const { view, students: roster } = await fetchStudents();

    // The server only returns unmasked phone numbers to an authenticated
    // administrator; anonymous callers get the public leaderboard instead.
    if (view !== 'admin') {
      setStudents([]);
      return;
    }

    setStudents(roster as AdminStudentDetail[]);
  };

  const loadBlogPosts = useCallback(async (silent = false) => {
    try {
      if (!silent) setLoadingBlog(true);
      const data = await fetchBlogPosts();
      if (Array.isArray(data) && data.length > 0) {
        setBlogPosts(data);
      }
    } catch (err: any) {
      console.warn('Failed to load blog posts in admin:', err);
    } finally {
      if (!silent) setLoadingBlog(false);
    }
  }, []);

  const loadMomoClaims = useCallback(async () => {
    try {
      setLoadingClaims(true);
      const res = await fetch('/api/momo/claim');
      const data = await res.json();
      if (data?.success && Array.isArray(data.claims)) {
        setMomoClaims(data.claims);
      }
    } catch (e) {
      console.warn('Failed to load momo claims in admin:', e);
    } finally {
      setLoadingClaims(false);
    }
  }, []);

  const handleApproveMomoClaim = async (claimId: string) => {
    setProcessingClaimId(claimId);
    setMomoActionMsg(null);
    try {
      const res = await fetch('/api/momo/claim/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claimId }),
      });
      const data = await res.json();
      if (data?.success) {
        setMomoActionMsg({ kind: 'ok', text: data.message || 'VIP Pass activated!' });
        await loadMomoClaims();
        await loadRealStudents();
      } else {
        setMomoActionMsg({ kind: 'bad', text: data.error || 'Failed to approve claim.' });
      }
    } catch (e: any) {
      setMomoActionMsg({ kind: 'bad', text: e?.message || 'Network error approving claim.' });
    } finally {
      setProcessingClaimId(null);
    }
  };

  const handleRejectMomoClaim = async (claimId: string) => {
    if (!confirm('Are you sure you want to REVOKE this student VIP pass? Their access will be cancelled immediately.')) return;
    setProcessingClaimId(claimId);
    setMomoActionMsg(null);
    try {
      const res = await fetch('/api/momo/claim/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claimId, reason: 'Payment could not be verified on MTN MoMo' }),
      });
      const data = await res.json();
      if (data?.success) {
        setMomoActionMsg({ kind: 'ok', text: data.message || 'VIP Pass revoked successfully.' });
        await loadMomoClaims();
        await loadRealStudents();
      } else {
        setMomoActionMsg({ kind: 'bad', text: data.error || 'Failed to revoke pass.' });
      }
    } catch (e: any) {
      setMomoActionMsg({ kind: 'bad', text: e?.message || 'Network error revoking pass.' });
    } finally {
      setProcessingClaimId(null);
    }
  };

  const handleQuickGrantMoMo = async (e: React.FormEvent) => {
    e.preventDefault();
    const phone = momoQuickPhone.trim().replace(/\s+/g, '');
    if (!phone || phone.length < 10) {
      setMomoQuickMsg('Please enter a valid phone number (e.g. 0241234567).');
      return;
    }

    setMomoQuickMsg(null);
    const result = await adminGrantAccess(phone, 30);
    if (!result.success) {
      setMomoQuickMsg(result.error || 'Could not grant access.');
      return;
    }

    await loadRealStudents();
    setMomoQuickPhone('');
    setMomoActionMsg({ kind: 'ok', text: `Successfully granted 30-day VIP pass to ${phone}!` });
  };

  const resetBlogForm = () => {
    setEditingPostId(null);
    setBlogTitle('');
    setBlogCategory('Study Tips');
    setBlogAuthor('AcademicPrep Editorial');
    setBlogReadTime(4);
    setBlogExcerpt('');
    setBlogContent('');
    setBlogFeatured(false);
    setBlogMediaType('none');
    setBlogMediaUrl('');
    setBlogMediaCaption('');
    setBlogMediaUploadError(null);
    setShowBlogComposer(false);
  };

  const handleStartEditPost = (post: BlogPost) => {
    setEditingPostId(post.id);
    setBlogTitle(post.title);
    setBlogCategory(post.category);
    setBlogAuthor(post.author);
    setBlogReadTime(post.readTimeMinutes);
    setBlogExcerpt(post.excerpt);
    setBlogContent(post.content);
    setBlogFeatured(Boolean(post.featured));
    setBlogMediaType(post.mediaType || 'none');
    setBlogMediaUrl(post.mediaUrl || '');
    setBlogMediaCaption(post.mediaCaption || '');
    setBlogMediaUploadError(null);
    setShowBlogComposer(true);
    setBlogBanner(null);
  };

  const handleBlogMediaFileUpload = async (file: File) => {
    if (!file) return;
    setIsUploadingBlogMedia(true);
    setBlogMediaUploadError(null);
    try {
      const isVideo = file.type.startsWith('video/');
      const isImage = file.type.startsWith('image/');
      if (!isImage && !isVideo) {
        throw new Error('Please select an image (PNG, JPG, WEBP) or video (MP4, WebM) file.');
      }
      if (file.size > 60 * 1024 * 1024) {
        throw new Error('File exceeds 60MB limit. For large video lectures, paste a YouTube link instead.');
      }

      const signRes = await fetch('/api/documents/upload-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: file.name, contentType: file.type }),
      });

      if (!signRes.ok) {
        const signErr = await signRes.json().catch(() => ({}));
        throw new Error(signErr.error || `Upload authorization failed (HTTP ${signRes.status})`);
      }

      const signData = await signRes.json();
      if (!signData.signedUrl || !signData.publicUrl) {
        throw new Error('Server did not return a valid signed upload URL.');
      }

      const uploadRes = await fetch(signData.signedUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      });

      if (!uploadRes.ok) {
        throw new Error(`Direct cloud storage upload failed (HTTP ${uploadRes.status})`);
      }

      setBlogMediaUrl(signData.publicUrl);
      setBlogMediaType(isVideo ? 'video' : 'image');
    } catch (err: any) {
      setBlogMediaUploadError(err?.message || 'Failed to upload media file.');
    } finally {
      setIsUploadingBlogMedia(false);
    }
  };

  const handleSaveBlogPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTitle.trim() || !blogExcerpt.trim() || !blogContent.trim()) {
      setBlogBanner({ kind: 'bad', text: 'Title, summary excerpt, and content are required.' });
      return;
    }

    setIsSavingBlog(true);
    setBlogBanner(null);

    const mediaPayload = {
      mediaType: blogMediaType === 'none' ? null : blogMediaType,
      mediaUrl: blogMediaType === 'none' ? null : (blogMediaUrl.trim() || null),
      mediaCaption: blogMediaType === 'none' ? null : (blogMediaCaption.trim() || null),
    };

    try {
      if (editingPostId) {
        const res = await updateBlogPost(editingPostId, {
          title: blogTitle.trim(),
          category: blogCategory,
          author: blogAuthor.trim() || 'AcademicPrep Editorial',
          readTimeMinutes: Number(blogReadTime) || 4,
          excerpt: blogExcerpt.trim(),
          content: blogContent.trim(),
          featured: blogFeatured,
          ...mediaPayload,
        });

        if (!res.success) {
          setBlogBanner({ kind: 'bad', text: res.error || 'Failed to update article.' });
        } else {
          setBlogBanner({ kind: 'ok', text: `Updated "${blogTitle}" successfully.` });
          resetBlogForm();
          await loadBlogPosts(true);
        }
      } else {
        const res = await createBlogPost({
          title: blogTitle.trim(),
          category: blogCategory,
          author: blogAuthor.trim() || 'AcademicPrep Editorial',
          readTimeMinutes: Number(blogReadTime) || 4,
          excerpt: blogExcerpt.trim(),
          content: blogContent.trim(),
          featured: blogFeatured,
          ...mediaPayload,
        });

        if (!res.success) {
          setBlogBanner({ kind: 'bad', text: res.error || 'Failed to publish article.' });
        } else {
          setBlogBanner({ kind: 'ok', text: `Published "${blogTitle}" successfully.` });
          resetBlogForm();
          await loadBlogPosts(true);
        }
      }
    } catch (err: any) {
      setBlogBanner({ kind: 'bad', text: err?.message || 'Error saving article.' });
    } finally {
      setIsSavingBlog(false);
    }
  };

  const handleDeleteBlogPost = async (post: BlogPost) => {
    if (!confirm(`Are you sure you want to delete "${post.title}"?`)) {
      return;
    }

    // Optimistically update list so table doesn't jump or blink
    setBlogPosts((prev) => prev.filter((p) => p.id !== post.id));

    try {
      const res = await deleteBlogPost(post.id);
      if (res.success) {
        setBlogBanner({ kind: 'ok', text: `Deleted "${post.title}".` });
        await loadBlogPosts(true);
      } else {
        await loadBlogPosts(true);
        setBlogBanner({ kind: 'bad', text: res.error || 'Failed to delete article.' });
      }
    } catch (err: any) {
      await loadBlogPosts(true);
      setBlogBanner({ kind: 'bad', text: err?.message || 'Error deleting article.' });
    }
  };

  const handleToggleFeatured = async (post: BlogPost) => {
    const nextFeatured = !post.featured;
    // Optimistic toggle: instantly update in UI without triggering full reload blink
    setBlogPosts((prev) =>
      prev.map((p) => (p.id === post.id ? { ...p, featured: nextFeatured } : p))
    );

    try {
      const res = await updateBlogPost(post.id, { featured: nextFeatured });
      if (res.success) {
        setBlogBanner({
          kind: 'ok',
          text: nextFeatured
            ? `"${post.title}" is now featured on the homepage.`
            : `Un-featured "${post.title}".`,
        });
        await loadBlogPosts(true);
      } else {
        await loadBlogPosts(true);
        setBlogBanner({ kind: 'bad', text: res.error || 'Failed to update feature status.' });
      }
    } catch (err: any) {
      await loadBlogPosts(true);
      setBlogBanner({ kind: 'bad', text: err?.message || 'Error updating feature status.' });
    }
  };

  useEffect(() => {
    if (!isAdmin) return;
    clearStudentRosterCache();
    loadRealStudents();
    fetchUploadedDocuments().then(setPdfDocuments).catch(e => console.warn('Fetch docs warning:', e?.message || e));
    loadBlogPosts(true);
    loadMomoClaims();
    refreshPins();
  }, [isAdmin, refreshPins, loadBlogPosts, loadMomoClaims]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-slate-800"></div>
      </div>
    );
  }

  // Sequential Two-Stage Authentication Handlers.
  // Both passwords are verified together by the server; the two screens are a
  // presentation choice, not two separate checks.
  const handleVerifyPrimary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryPin.trim()) {
      setAuthError('Please enter your primary password.');
      return;
    }
    setAuthError(null);
    setAuthStep('secondary');
  };

  const handleVerifySecondary = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!secondaryPin.trim()) {
      setAuthError('Please enter your secondary password.');
      return;
    }

    setIsSigningIn(true);
    setAuthError(null);

    const ok = await loginAdmin(primaryPin.trim(), secondaryPin.trim());

    setIsSigningIn(false);

    if (!ok) {
      setSecondaryPin('');
      setAuthStep('primary');
      setAuthError('Those administrator passwords were rejected. Please try again.');
      return;
    }

    setPrimaryPin('');
    setSecondaryPin('');
    setAuthStep('primary');
  };

  const handleUpdateKeys = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPrimaryPin.trim() || !currentSecondaryPin.trim()) {
      setSecurityModalMsg('Enter both current passwords to prove you own this console.');
      return;
    }
    if (!editPrimaryPin.trim() || !editSecondaryPin.trim()) {
      setSecurityModalMsg('Both new passwords are required.');
      return;
    }
    if (editPrimaryPin.trim().length < 8 || editSecondaryPin.trim().length < 8) {
      setSecurityModalMsg('Each new password must be at least 8 characters long.');
      return;
    }

    setIsSavingKeys(true);

    const result = await updateAdminPins({
      currentPrimary: currentPrimaryPin.trim(),
      currentSecondary: currentSecondaryPin.trim(),
      newPrimary: editPrimaryPin.trim(),
      newSecondary: editSecondaryPin.trim(),
    });

    setIsSavingKeys(false);

    if (result.success) {
      setSecurityModalMsg('Passwords successfully updated!');
      setCurrentPrimaryPin('');
      setCurrentSecondaryPin('');
      setEditPrimaryPin('');
      setEditSecondaryPin('');
      setTimeout(() => {
        setShowSecurityModal(false);
        setSecurityModalMsg(null);
      }, 1500);
    } else {
      setSecurityModalMsg(result.error || 'Failed to update passwords.');
    }
  };

  // MINIMALIST TWO-STEP SIGN IN (Clean, Understated Executive Style)
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-3 shadow-xs">
            <Lock className="w-4 h-4" />
          </div>
          <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
            AcademicPrep Admin
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {authStep === 'primary' ? 'Step 1 of 2 · Primary Password' : 'Step 2 of 2 · Secondary Password'}
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-white py-7 px-6 sm:px-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
            {/* Minimalist step progress bar */}
            <div className="flex items-center gap-1.5 justify-center pb-1">
              <span className="w-10 h-1 rounded-full bg-slate-900 transition-colors" />
              <span className={`w-10 h-1 rounded-full transition-colors ${authStep === 'secondary' ? 'bg-slate-900' : 'bg-slate-200'}`} />
            </div>

            {/* STAGE 1: Primary Password */}
            {authStep === 'primary' && (
              <form onSubmit={handleVerifyPrimary} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Primary Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPrimaryPin ? 'text' : 'password'}
                      value={primaryPin}
                      onChange={(e) => {
                        setPrimaryPin(e.target.value);
                        setAuthError(null);
                      }}
                      placeholder="Enter primary password"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition pr-10"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPrimaryPin(!showPrimaryPin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                      tabIndex={-1}
                    >
                      {showPrimaryPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {authError && (
                    <p className="text-xs text-rose-600 mt-2 font-medium">
                      {authError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* STAGE 2: Secondary Password */}
            {authStep === 'secondary' && (
              <form onSubmit={handleVerifySecondary} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Secondary Password
                  </label>
                  <div className="relative">
                    <input
                      type={showSecondaryPin ? 'text' : 'password'}
                      value={secondaryPin}
                      onChange={(e) => {
                        setSecondaryPin(e.target.value);
                        setAuthError(null);
                      }}
                      placeholder="Enter secondary password"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition pr-10"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowSecondaryPin(!showSecondaryPin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                      tabIndex={-1}
                    >
                      {showSecondaryPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {authError && (
                    <p className="text-xs text-rose-600 mt-2 font-medium">
                      {authError}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthStep('primary');
                      setAuthError(null);
                      setSecondaryPin('');
                    }}
                    className="w-1/3 py-2.5 px-3 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-medium rounded-lg transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSigningIn}
                    className="w-2/3 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white text-xs font-semibold rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isSigningIn ? 'Verifying…' : 'Sign In'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="text-center mt-6">
            <Link
              href="/jhs"
              className="text-xs text-slate-500 hover:text-slate-800 transition"
            >
              ← Back to student portal
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // Metrics
  const metrics = getAdminMetrics();
  const jhs3TopicsCount = JHS_CURRICULUM_TOPICS.filter(t => t.level === 'JHS 3').length;
  const totalTopicsAvailable = JHS_CURRICULUM_TOPICS.length;
  const activePaidStudentsCount = students.filter(s => s.accessType === 'Full Pass').length;
  const freeTrialStudentsCount = students.filter(s => s.accessType === 'Free Trial').length;
  const expiredStudentsCount = students.filter(s => s.accessType === 'Expired').length;
  const totalCompletedTopicsSum = students.reduce((acc, s) => acc + s.topicsCompleted, 0);
  const overallAvgScore = students.length > 0
    ? Math.round(students.reduce((acc, s) => acc + (s.avgScorePercentage || 0), 0) / students.length)
    : 0;

  // Student Access Controls (server-verified administrator actions)
  const handleGrantAccess = async (targetStudent: AdminStudentDetail | null) => {
    const phone = (targetStudent ? targetStudent.phone : customPhoneInput).trim().replace(/\s+/g, '');
    if (!phone) return;

    setAccessError(null);

    const result = await adminGrantAccess(phone, grantDurationDays);
    if (!result.success) {
      setAccessError(result.error || 'Could not grant access.');
      return;
    }

    await loadRealStudents();

    setShowGrantModal(false);
    setSelectedStudentForAccess(null);
    setCustomPhoneInput('');
  };

  const handleRevokeAccess = async (studentId: string) => {
    const target = students.find(s => s.id === studentId);
    if (!target) return;

    setAccessError(null);

    const result = await adminRevokeAccess(target.phone);
    if (!result.success) {
      setAccessError(result.error || 'Could not revoke access.');
      return;
    }

    await loadRealStudents();
  };


  const handleUploadPdfSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      alert('Please select a local PDF file to upload.');
      return;
    }
    if (!pdfTitle.trim()) {
      alert('Please enter a title for the document.');
      return;
    }

    try {
      setIsUploadingPdf(true);
      const allShsSubjects = [
        ...SHS_CORE_SUBJECTS,
        ...SHS_ELECTIVE_GROUPS.flatMap(g => g.subjects),
      ];
      const isShs = isShsCategory(pdfCategory);
      const subName = isShs
        ? (allShsSubjects.find(s => s.id === pdfSubject)?.name || pdfSubject)
        : (CURRICULUM_SUBJECTS.find(s => s.id === pdfSubject)?.name || pdfSubject);

      const formData = new FormData();
      formData.append('file', pdfFile);
      formData.append('title', pdfTitle.trim());
      formData.append('category', pdfCategory);
      formData.append('subjectId', pdfSubject);
      formData.append('subjectName', subName);
      formData.append('paperType', pdfPaperType);

      if (pdfCategory === 'bece_past_question' || pdfCategory === 'wassce_past_question') {
        formData.append('year', String(pdfYear));
      } else {
        formData.append('level', pdfLevel);
      }

      const created = await uploadPdfDocument(formData);
      setPdfDocuments(prev => [created, ...prev]);

      // Reset form
      setPdfFile(null);
      setPdfTitle('');
      setShowPdfUploadForm(false);
      setFormSuccessMessage(`"${created.title}" uploaded successfully!`);
      setTimeout(() => setFormSuccessMessage(null), 4000);
    } catch (err: any) {
      alert('Upload failed: ' + (err.message || 'Error occurred'));
    } finally {
      setIsUploadingPdf(false);
    }
  };

  const handleDeletePdf = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      await deletePdfDocument(id);
      setPdfDocuments(prev => prev.filter(d => d.id !== id));
      setFormSuccessMessage(`Document "${title}" deleted successfully.`);
      setTimeout(() => setFormSuccessMessage(null), 4000);
    } catch (err: any) {
      alert('Failed to delete: ' + err.message);
    }
  };

  // PIN Generation (codes are minted by the server's CSPRNG)
  const handleGeneratePins = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsGeneratingPins(true);
    setPinError(null);

    try {
      const created = await generatePinBatch(pinCount, pinPrice, pinValidity);
      setNewlyGenerated(created);
      await refreshPins();
    } catch (err: any) {
      setPinError(err?.message || 'Could not generate the PIN batch.');
      setNewlyGenerated([]);
    } finally {
      setIsGeneratingPins(false);
    }
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedPin(code);
    setTimeout(() => setCopiedPin(null), 2000);
  };

  const exportPinsCSV = () => {
    const header = 'PIN Code,Batch ID,Price (GHS),Validity (Days),Status,Created At\n';
    const rows = pins.map(p => `${p.pinCode},${p.batchId},${p.priceGhs},${p.validityDays},${p.status},${p.createdAt}`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `academicprep_pins_${Date.now()}.csv`;
    a.click();
  };

  const exportStudentsCSV = () => {
    const header = 'Name,Phone,Level,Access Type,Expires At,Topics Completed,Avg Score\n';
    const rows = students.map(s => `"${s.name}",${s.phone},${s.level},${s.accessType},${s.accessExpiresAt || 'N/A'},${s.topicsCompleted},${s.avgScorePercentage}%`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `academicprep_students_${Date.now()}.csv`;
    a.click();
  };

  // Deduplicated SHS Elective Subjects
  const uniqueShsElectives = Array.from(
    new Map(
      SHS_ELECTIVE_GROUPS.flatMap(g => g.subjects).map(s => [s.id, s])
    ).values()
  );

  // Filtered Students
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(studentSearch.toLowerCase()) || s.phone.includes(studentSearch);
    const matchesFilter = studentAccessFilter === 'ALL' || s.accessType === studentAccessFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* TOP HEADER BAR */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              AP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 text-sm">AcademicPrep</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded tracking-wide">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Platform Management & Operation Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="hidden md:flex items-center gap-4 text-slate-600 border-r border-slate-200 pr-4 mr-1">
              <span><b>{trafficData.activeSessions}</b> active users</span>
              <span>•</span>
              <span><b>{activePaidStudentsCount}</b> subscribers</span>
              <span>•</span>
              <span className="font-semibold text-slate-900">GH₵ {metrics.totalCashFlowGhs.toFixed(2)}</span>
            </div>

            <button
              onClick={() => {
                setCurrentPrimaryPin('');
                setCurrentSecondaryPin('');
                setEditPrimaryPin('');
                setEditSecondaryPin('');
                setSecurityModalMsg(null);
                setShowSecurityModal(true);
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 font-medium transition flex items-center gap-1.5"
              title="Security credentials management"
            >
              <KeyRound className="w-3.5 h-3.5 text-slate-500" />
              <span>Security Keys</span>
            </button>

            <Link
              href="/jhs"
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium transition flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Student View</span>
            </Link>

            <button
              onClick={() => {
                void logoutAdmin();
                clearStudentRosterCache();
                setStudents([]);
                setAuthStep('primary');
                setPrimaryPin('');
                setSecondaryPin('');
              }}
              className="px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 font-semibold transition flex items-center gap-1.5"
              title="Lock administration portal immediately"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Lock Portal</span>
            </button>
          </div>
        </div>

        {/* CLEAN HORIZONTAL TABS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 overflow-x-auto">
          <nav className="flex space-x-6 min-w-max text-xs font-medium">
            <button
              onClick={() => setActiveTab('traffic')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'traffic'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Web Traffic</span>
            </button>

            <button
              onClick={() => setActiveTab('paid_access')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'paid_access'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Paid Access & Students</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {activePaidStudentsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('momo_claims')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'momo_claims'
                  ? 'border-emerald-600 text-emerald-800 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>MoMo Claims</span>
              {momoClaims.filter(c => c.status === 'PENDING').length > 0 ? (
                <span className="ml-1 text-[10px] bg-amber-500 text-white font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                  {momoClaims.filter(c => c.status === 'PENDING').length} New
                </span>
              ) : (
                <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                  {momoClaims.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('completions')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'completions'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Curriculum Progress</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {totalTopicsAvailable} Topics
              </span>
            </button>

            <button
              onClick={() => setActiveTab('trial_mocks')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'trial_mocks'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FilePlus className="w-4 h-4" />
              <span>PDF Past Papers & Mocks</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {pdfDocuments.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('pins')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'pins'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Access PINs & Revenue</span>
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'blog'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>App Blog & Articles</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {blogPosts.length}
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ============================================================ */}
        {/* TAB 1: WEB TRAFFIC & ANALYTICS                               */}
        {/* ============================================================ */}
        {activeTab === 'traffic' && (
          <div className="space-y-6">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Daily Visitors</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.dailyVisitors.toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-600 font-medium mt-1 inline-flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> Live traffic stream
                </span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Page Views</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.totalPageViews.toLocaleString()}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block font-mono">
                  {(trafficData.totalPageViews / Math.max(1, trafficData.dailyVisitors)).toFixed(1)} views/visitor
                </span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Active Sessions</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono flex items-center gap-2">
                  {trafficData.activeSessions}
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Real-time learners</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Avg Duration</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.avgSessionDurationMinutes} min
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Study engagement</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 font-medium block">Bounce Rate</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {trafficData.bounceRatePercentage}%
                </span>
                <span className="text-[11px] text-emerald-600 font-medium mt-1 block">Standard retention</span>
              </div>
            </div>

            {/* 7-Day Traffic Chart */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">7-Day Visitor Trend & Quiz Attempts</h3>
                  <p className="text-xs text-slate-500">Daily unique platform visits compared to submitted topic quizzes.</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-slate-900"></span> Visitors</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-blue-500"></span> Quiz Submissions</span>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-3 items-end h-44 pt-6 pb-2 border-b border-slate-100">
                {trafficData.dailyTrend.map((day, idx) => {
                  const maxTrendVisitors = Math.max(...trafficData.dailyTrend.map(d => d.visitors), 1);
                  const maxTrendQuizzes = Math.max(...trafficData.dailyTrend.map(d => d.quizAttempts), 1);

                  return (
                    <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                      <div className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition font-mono">
                        {day.visitors}
                      </div>
                      <div className="w-full max-w-[28px] flex items-end gap-1 h-full">
                        {/* Visitors Bar */}
                        <div 
                          className="flex-1 bg-slate-900 rounded-t transition-all group-hover:bg-slate-700"
                          style={{ height: `${Math.max(day.visitors > 0 ? 10 : 0, (day.visitors / maxTrendVisitors) * 100)}%` }}
                          title={`Visitors: ${day.visitors}`}
                        ></div>
                        {/* Quiz Attempts Bar */}
                        <div 
                          className="flex-1 bg-blue-500 rounded-t transition-all group-hover:bg-blue-600"
                          style={{ height: `${Math.max(day.quizAttempts > 0 ? 10 : 0, (day.quizAttempts / maxTrendQuizzes) * 100)}%` }}
                          title={`Quiz Attempts: ${day.quizAttempts}`}
                        ></div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 truncate w-full text-center">
                        {day.date.replace(' (Today)', '')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Device Share & Regional Visits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Devices */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
                <h3 className="text-sm font-semibold text-slate-900">Device Distribution</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">Mobile Phones (Android / iPhone)</span>
                      <span className="font-semibold text-slate-900 font-mono">{trafficData.deviceShare.mobile}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 rounded-full" style={{ width: `${trafficData.deviceShare.mobile}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">Desktop & Laptops</span>
                      <span className="font-semibold text-slate-900 font-mono">{trafficData.deviceShare.desktop}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-600 rounded-full" style={{ width: `${trafficData.deviceShare.desktop}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">Tablets & iPads</span>
                      <span className="font-semibold text-slate-900 font-mono">{trafficData.deviceShare.tablet}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full" style={{ width: `${trafficData.deviceShare.tablet}%` }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  Majority of candidates practice via parents&apos; smartphones.
                </p>
              </div>

              {/* Regional Traffic */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Regional Traffic Concentration (Ghana)</h3>
                <div className="space-y-2.5">
                  {trafficData.regionalVisits.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-700">{item.region}</span>
                        <span className="text-slate-500 font-mono font-medium">
                          {item.visits.toLocaleString()} ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-800 rounded-full" 
                          style={{ width: `${item.percentage * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subject Demand Ranking */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-slate-900">Subject Page View Rankings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {trafficData.subjectTraffic.map((sub, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-800">{sub.subjectName}</div>
                      <div className="text-[11px] text-slate-500">Rank #{idx + 1} Most Studied</div>
                    </div>
                    <div className="text-xs font-semibold text-slate-900 font-mono">
                      {sub.views.toLocaleString()} views
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: PAID ACCESS & SUBSCRIBERS                             */}
        {/* ============================================================ */}
        {activeTab === 'paid_access' && (
          <div className="space-y-6">
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Paid Access & Student Management</h2>
                <p className="text-xs text-slate-500">
                  Track full pass subscriptions, trial accounts, and directly grant or revoke access.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={exportStudentsCSV}
                  className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Export CSV</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedStudentForAccess(null);
                    setAccessError(null);
                    setShowGrantModal(true);
                  }}
                  className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Grant Paid Pass</span>
                </button>
              </div>
            </div>

            {accessError && !showGrantModal && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-medium flex items-start justify-between gap-3">
                <span className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {accessError}
                </span>
                <button onClick={() => setAccessError(null)} className="text-rose-400 hover:text-rose-700">
                  <XCircle className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium">Total Registered</span>
                <span className="text-xl font-semibold text-slate-900 mt-0.5 block font-mono">{students.length}</span>
                <span className="text-[10px] text-slate-400">Registered student directory</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-emerald-700 font-medium">Active Full Passes</span>
                <span className="text-xl font-semibold text-emerald-700 mt-0.5 block font-mono">
                  {activePaidStudentsCount}
                </span>
                <span className="text-[10px] text-slate-500">Paid VIP subscribers</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-slate-600 font-medium">Free Trial Users</span>
                <span className="text-xl font-semibold text-slate-700 mt-0.5 block font-mono">
                  {freeTrialStudentsCount}
                </span>
                <span className="text-[10px] text-slate-400">Trial topic access</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm">
                <span className="text-[11px] text-rose-600 font-medium">Expired Passes</span>
                <span className="text-xl font-semibold text-rose-600 mt-0.5 block font-mono">
                  {expiredStudentsCount}
                </span>
                <span className="text-[10px] text-slate-400">Pending renewal</span>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="bg-white border border-slate-200/80 p-3 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="Search student name or phone number..."
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-1.5">
                {(['ALL', 'Full Pass', 'Free Trial', 'Expired'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setStudentAccessFilter(filter)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                      studentAccessFilter === filter
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Students Table */}
            <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                    <tr>
                      <th className="px-4 py-3">Student Name</th>
                      <th className="px-4 py-3">Phone (MoMo)</th>
                      <th className="px-4 py-3">Level</th>
                      <th className="px-4 py-3">Access Status</th>
                      <th className="px-4 py-3">Expires</th>
                      <th className="px-4 py-3">Topics Done</th>
                      <th className="px-4 py-3">Avg Score</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredStudents.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-4 py-8 text-center text-slate-400 text-xs">
                          No students found matching your criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredStudents.map((st) => (
                        <tr key={st.id} className="hover:bg-slate-50/60 transition">
                          <td className="px-4 py-3">
                            <span className="font-medium text-slate-900 block">{st.name}</span>
                            <span className="text-[10px] text-slate-400">Active {st.lastActive}</span>
                          </td>
                          <td className="px-4 py-3 font-mono text-slate-600">{st.phone}</td>
                          <td className="px-4 py-3">
                            <span className="px-1.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                              {st.level}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {st.accessType === 'Full Pass' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                Full Pass
                              </span>
                            )}
                            {st.accessType === 'Free Trial' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
                                Free Trial
                              </span>
                            )}
                            {st.accessType === 'Expired' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-200/60">
                                Expired
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 font-mono text-slate-500">
                            {st.accessExpiresAt ? new Date(st.accessExpiresAt).toLocaleDateString() : '—'}
                          </td>
                          <td className="px-4 py-3 font-medium text-slate-800">{st.topicsCompleted}</td>
                          <td className="px-4 py-3 font-mono font-medium text-slate-800">{st.avgScorePercentage}%</td>
                          <td className="px-4 py-3 text-right">
                            {st.accessType !== 'Full Pass' ? (
                              <button
                                onClick={() => {
                                  setSelectedStudentForAccess(st);
                                  setShowGrantModal(true);
                                }}
                                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-medium transition"
                              >
                                Grant Pass
                              </button>
                            ) : (
                              <button
                                onClick={() => handleRevokeAccess(st.id)}
                                className="px-2.5 py-1 rounded border border-slate-200 hover:bg-rose-50 hover:text-rose-700 text-slate-600 text-[11px] font-medium transition"
                              >
                                Revoke
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Clean Grant Access Modal */}
            {showGrantModal && (
              <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-sm w-full shadow-lg space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-900">
                      {selectedStudentForAccess ? `Grant Pass: ${selectedStudentForAccess.name}` : 'Grant Direct Paid Pass'}
                    </h4>
                    <button 
                      onClick={() => setShowGrantModal(false)}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>

                  {!selectedStudentForAccess && (
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-slate-700 mb-1">Student Phone Number</label>
                      <input
                        type="text"
                        value={customPhoneInput}
                        onChange={(e) => setCustomPhoneInput(e.target.value)}
                        placeholder="e.g. 0241234567"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      />
                      <p className="text-[10px] text-slate-400">
                        The student must already have a registered account on this number.
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Access Term</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[30, 60, 90].map((days) => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setGrantDurationDays(days)}
                          className={`py-2 rounded-lg text-xs font-medium border transition ${
                            grantDurationDays === days
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {days} Days
                        </button>
                      ))}
                    </div>
                  </div>

                  {accessError && (
                    <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {accessError}
                    </div>
                  )}

                  <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                    <button
                      onClick={() => setShowGrantModal(false)}
                      className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleGrantAccess(selectedStudentForAccess)}
                      className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium shadow-sm transition"
                    >
                      Confirm Full Pass
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB: DIRECT MOMO CLAIMS & APPROVALS (EMMANUEL KWEKU OSEI)    */}
        {/* ============================================================ */}
        {activeTab === 'momo_claims' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct MoMo Reconciliation</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Direct MoMo Verifications &amp; Pass Management
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Students get instant 30-day VIP access upon entering their sender number. Cross-check your MTN MoMo SIM (<b>{OFFICIAL_MOMO_DETAILS.name} - {OFFICIAL_MOMO_DETAILS.number}</b>). If payment was not received, click <b>Revoke Pass</b> to cancel access immediately.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => loadMomoClaims()}
                  disabled={loadingClaims}
                  className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Activity className="w-3.5 h-3.5 text-slate-500" />
                  <span>{loadingClaims ? 'Refreshing...' : 'Refresh Claims'}</span>
                </button>
              </div>
            </div>

            {/* Action Feedback Banner */}
            {momoActionMsg && (
              <div
                className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-between ${
                  momoActionMsg.kind === 'ok'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-red-50 text-red-800 border-red-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {momoActionMsg.kind === 'ok' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  )}
                  <span>{momoActionMsg.text}</span>
                </div>
                <button
                  onClick={() => setMomoActionMsg(null)}
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Metric Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Designated MoMo SIM
                </span>
                <p className="text-base font-black font-mono text-slate-900">
                  {OFFICIAL_MOMO_DETAILS.number}
                </p>
                <p className="text-xs font-bold text-emerald-700 truncate">
                  {OFFICIAL_MOMO_DETAILS.name}
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Instant VIPs (Needs Audit)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-amber-600 font-mono">
                    {momoClaims.filter((c) => c.status === 'PENDING').length}
                  </span>
                  <span className="text-xs text-slate-500">active, check MoMo</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Confirmed &amp; Verified
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-emerald-600 font-mono">
                    {momoClaims.filter((c) => c.status === 'APPROVED').length}
                  </span>
                  <span className="text-xs text-slate-500">funds verified</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Revoked Passes
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-rose-600 font-mono">
                    {momoClaims.filter((c) => c.status === 'REJECTED').length}
                  </span>
                  <span className="text-xs text-slate-500">no funds received</span>
                </div>
              </div>
            </div>

            {/* Quick Manual Grant Box (For WhatsApp / Offline Direct Transfer) */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-5 rounded-2xl text-white shadow-md space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span>Quick Direct VIP Activation</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Did a student pay you directly on MoMo or send a WhatsApp screenshot? Enter their phone number to instantly grant 30-day VIP pass.
                  </p>
                </div>
              </div>

              <form onSubmit={handleQuickGrantMoMo} className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <div className="relative w-full sm:w-80">
                  <Smartphone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={momoQuickPhone}
                    onChange={(e) => {
                      setMomoQuickPhone(e.target.value);
                      setMomoQuickMsg(null);
                    }}
                    placeholder="e.g. 0241234567"
                    className="w-full pl-9 pr-3 py-2 bg-slate-800/90 border border-slate-700 rounded-xl text-xs font-mono text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Grant 30-Day VIP Pass
                </button>
              </form>

              {momoQuickMsg && (
                <p className="text-xs text-amber-300 bg-amber-950/60 p-2 rounded-lg border border-amber-800/50">
                  {momoQuickMsg}
                </p>
              )}
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={momoSearch}
                  onChange={(e) => setMomoSearch(e.target.value)}
                  placeholder="Search by student phone, name, or TxID..."
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                {(['ALL', 'PENDING', 'APPROVED', 'REJECTED'] as const).map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setMomoClaimsFilter(status)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap cursor-pointer ${
                      momoClaimsFilter === status
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {status === 'ALL'
                      ? `All (${momoClaims.length})`
                      : status === 'PENDING'
                      ? `Pending (${momoClaims.filter((c) => c.status === 'PENDING').length})`
                      : status === 'APPROVED'
                      ? `Approved (${momoClaims.filter((c) => c.status === 'APPROVED').length})`
                      : `Rejected (${momoClaims.filter((c) => c.status === 'REJECTED').length})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Claims Table */}
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
              <div className="p-4 border-b border-slate-200/80 flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <span>Student MoMo Payment Claims</span>
                  {loadingClaims && (
                    <span className="text-[10px] text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-medium animate-pulse">
                      Updating...
                    </span>
                  )}
                </h3>
                <span className="text-[11px] text-slate-500 font-mono">
                  Target: {OFFICIAL_MOMO_DETAILS.number}
                </span>
              </div>

              {momoClaims.length === 0 ? (
                <div className="p-12 text-center text-xs text-slate-500 space-y-2">
                  <Smartphone className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="font-semibold text-slate-700">No payment claims recorded yet.</p>
                  <p className="text-slate-400 max-w-sm mx-auto">
                    When students transfer GH₵ 25 on MTN MoMo to {OFFICIAL_MOMO_DETAILS.name} ({OFFICIAL_MOMO_DETAILS.number}) and enter their sender number, their instant VIP pass activations will appear here.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                      <tr>
                        <th className="px-4 py-3">Student Details</th>
                        <th className="px-4 py-3">MoMo Sender Number</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Activated At</th>
                        <th className="px-4 py-3">VIP Pass Status</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {momoClaims
                        .filter((claim) => {
                          const matchesStatus =
                            momoClaimsFilter === 'ALL' || claim.status === momoClaimsFilter;
                          const q = momoSearch.toLowerCase().trim();
                          const matchesSearch =
                            !q ||
                            claim.studentPhone.toLowerCase().includes(q) ||
                            claim.studentName.toLowerCase().includes(q) ||
                            (claim.senderPhone && claim.senderPhone.toLowerCase().includes(q)) ||
                            (claim.transactionId && claim.transactionId.toLowerCase().includes(q));
                          return matchesStatus && matchesSearch;
                        })
                        .map((claim) => {
                          const isProcessing = processingClaimId === claim.id;
                          const senderNumber = claim.senderPhone || claim.studentPhone;
                          return (
                            <tr key={claim.id} className="hover:bg-slate-50/60 transition">
                              <td className="px-4 py-3">
                                <div>
                                  <p className="font-bold text-slate-900">{claim.studentName}</p>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="font-mono text-slate-600">{claim.studentPhone}</span>
                                    <a
                                      href={`https://wa.me/233${senderNumber.replace(/^0/, '')}?text=${encodeURIComponent(
                                        `Hello ${claim.studentName}, this is ${OFFICIAL_MOMO_DETAILS.name} from AcademicPrep regarding your MoMo VIP activation.`
                                      )}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[10px] text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-1.5 py-0.5 rounded font-bold flex items-center gap-1 transition"
                                      title="Open WhatsApp chat with student"
                                    >
                                      <MessageCircle className="w-3 h-3" />
                                      <span>WhatsApp</span>
                                    </a>
                                  </div>
                                </div>
                              </td>

                              <td className="px-4 py-3">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 select-all">
                                    {senderNumber}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (typeof navigator !== 'undefined') {
                                        navigator.clipboard.writeText(senderNumber);
                                      }
                                    }}
                                    className="p-1 text-slate-400 hover:text-slate-700 rounded transition cursor-pointer"
                                    title="Copy MoMo Sender Number"
                                  >
                                    <Copy className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>

                              <td className="px-4 py-3 font-bold text-slate-900">
                                GH₵ {claim.amountGhs}
                              </td>

                              <td className="px-4 py-3 whitespace-nowrap text-slate-500 font-mono text-[11px]">
                                {new Date(claim.createdAt).toLocaleDateString()} • {new Date(claim.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </td>

                              <td className="px-4 py-3 whitespace-nowrap">
                                {claim.status === 'PENDING' && (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                                    <span>VIP ACTIVE (CHECK MOMO)</span>
                                  </span>
                                )}
                                {claim.status === 'APPROVED' && (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>PAYMENT CONFIRMED</span>
                                  </span>
                                )}
                                {claim.status === 'REJECTED' && (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                                    <XCircle className="w-3 h-3" />
                                    <span>PASS REVOKED</span>
                                  </span>
                                )}
                              </td>

                              <td className="px-4 py-3 whitespace-nowrap text-right">
                                {claim.status === 'PENDING' ? (
                                  <div className="flex items-center justify-end gap-1.5">
                                    <button
                                      type="button"
                                      disabled={isProcessing}
                                      onClick={() => handleApproveMomoClaim(claim.id)}
                                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-300 text-white font-bold text-xs transition shadow-xs flex items-center gap-1 cursor-pointer"
                                      title="Confirmed payment arrived in MoMo"
                                    >
                                      <CheckCircle2 className="w-3.5 h-3.5" />
                                      <span>{isProcessing ? 'Saving...' : 'Confirm Payment'}</span>
                                    </button>

                                    <button
                                      type="button"
                                      disabled={isProcessing}
                                      onClick={() => handleRejectMomoClaim(claim.id)}
                                      className="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 font-bold text-xs transition cursor-pointer flex items-center gap-1"
                                      title="No payment found on MoMo - revoke VIP immediately"
                                    >
                                      <XCircle className="w-3.5 h-3.5 text-rose-600" />
                                      <span>Revoke Pass</span>
                                    </button>
                                  </div>
                                ) : claim.status === 'APPROVED' ? (
                                  <div className="flex items-center justify-end gap-2">
                                    <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                                      <CheckCircle className="w-3.5 h-3.5" />
                                      <span>Verified (VIP Active)</span>
                                    </span>
                                    <button
                                      type="button"
                                      disabled={isProcessing}
                                      onClick={() => handleRejectMomoClaim(claim.id)}
                                      className="px-2 py-1 rounded bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 text-[10px] font-semibold transition cursor-pointer"
                                      title="Revoke pass if needed"
                                    >
                                      Revoke
                                    </button>
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-end gap-2">
                                    <span className="text-[10px] text-rose-600 font-medium">Revoked</span>
                                    <button
                                      type="button"
                                      disabled={isProcessing}
                                      onClick={() => handleApproveMomoClaim(claim.id)}
                                      className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-semibold transition cursor-pointer"
                                      title="Restore VIP pass"
                                    >
                                      Re-Grant VIP
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: PLATFORM TOPIC COMPLETIONS                            */}
        {/* ============================================================ */}
        {activeTab === 'completions' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Curriculum Topic Completions</h2>
                <p className="text-xs text-slate-500">
                  Aggregate learning analytics across all 9 GES Common Core Programme subjects.
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500 block">Total Topics Completed</span>
                <span className="text-xl font-semibold text-slate-900 font-mono">
                  {totalCompletedTopicsSum.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Summary Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">JHS 3 BECE Topics</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {jhs3TopicsCount} Topics
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Full notes & 1,180 questions</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Candidate Average Score</span>
                <span className="text-2xl font-semibold text-emerald-700 mt-1 block font-mono">
                  {overallAvgScore}%
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Real diagnostic candidate average</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Total Curriculum Topics</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {totalTopicsAvailable} Topics
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Across JHS 1, 2, and 3</span>
              </div>
            </div>

            {/* Subject Breakdown Bars */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-slate-900">Completion Rate by Subject</h3>
              <div className="space-y-3">
                {CURRICULUM_SUBJECTS.map((subj) => {
                  const subjectTopics = JHS_CURRICULUM_TOPICS.filter(t => t.subjectId === subj.id);
                  const completedInSubject = students.reduce((acc, s) => {
                    const count = (s.completedTopicIds || []).filter((tid: string) => subjectTopics.some(st => st.id === tid)).length;
                    return acc + count;
                  }, 0);
                  const maxPossible = Math.max(1, students.length * subjectTopics.length);
                  const completionPercentage = Math.round((completedInSubject / maxPossible) * 100);

                  return (
                    <div key={subj.id} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-800">{subj.name}</span>
                        <span className="text-slate-500 font-mono">
                          {completedInSubject} completions • {subjectTopics.length} Topics ({completionPercentage}%)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-900 rounded-full transition-all" 
                          style={{ width: `${Math.max(completedInSubject > 0 ? 6 : 0, completionPercentage)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Student Leaderboard */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-slate-900">Top Performing Candidates</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                    <tr>
                      <th className="px-4 py-2.5">Rank</th>
                      <th className="px-4 py-2.5">Student Name</th>
                      <th className="px-4 py-2.5">Phone</th>
                      <th className="px-4 py-2.5">Level</th>
                      <th className="px-4 py-2.5">Topics Done</th>
                      <th className="px-4 py-2.5">Average Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {students
                      .slice()
                      .sort((a, b) => b.topicsCompleted - a.topicsCompleted)
                      .map((st, rank) => (
                        <tr key={st.id} className="hover:bg-slate-50/60 transition">
                          <td className="px-4 py-2.5 font-semibold font-mono text-slate-500">
                            #{rank + 1}
                          </td>
                          <td className="px-4 py-2.5 font-medium text-slate-900">{st.name}</td>
                          <td className="px-4 py-2.5 font-mono text-slate-500">{st.phone}</td>
                          <td className="px-4 py-2.5 text-slate-700">{st.level}</td>
                          <td className="px-4 py-2.5 font-medium text-slate-900 font-mono">
                            {st.topicsCompleted} Topics
                          </td>
                          <td className="px-4 py-2.5 font-mono font-medium text-slate-900">{st.avgScorePercentage}%</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: TRIAL QUESTIONS & MOCK EXAMS MANAGER                   */}
        {/* ============================================================ */}
        {activeTab === 'trial_mocks' && (
          <div className="space-y-6">
            {/* Header & Sub-Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-base font-semibold text-slate-900">PDF Document Management Hub</h2>
                <p className="text-xs text-slate-500">
                  Upload local PDF examination papers from your computer for BECE &amp; WASSCE Past Questions, plus JHS &amp; SHS Trial Mocks.
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    BECE: {pdfDocuments.filter(d => d.category === 'bece_past_question').length} papers
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                    WASSCE: {pdfDocuments.filter(d => d.category === 'wassce_past_question').length} papers
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    JHS Mocks: {pdfDocuments.filter(d => d.category === 'trial_mock').length} papers
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                    SHS Mocks: {pdfDocuments.filter(d => d.category === 'shs_trial_mock').length} papers
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPdfUploadForm(!showPdfUploadForm)}
                  className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
                >
                  {showPdfUploadForm ? <XCircle className="w-3.5 h-3.5" /> : <Upload className="w-3.5 h-3.5" />}
                  <span>{showPdfUploadForm ? 'Close Uploader' : 'Upload Local PDF'}</span>
                </button>
              </div>
            </div>

            {formSuccessMessage && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{formSuccessMessage}</span>
              </div>
            )}

            {/* UPLOAD PDF FORM */}
            {showPdfUploadForm && (
              <form onSubmit={handleUploadPdfSubmit} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Upload PDF Past Paper or Mock</h3>
                    <p className="text-xs text-slate-500">Select a PDF file from your local computer and set the subject, examination category, and year/grade tags.</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">PDF Format Only</span>
                </div>

                {/* File Drop / Select Area */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Select PDF File from Local Storage *
                  </label>
                  <div className="border-2 border-dashed border-slate-200 hover:border-slate-400 rounded-xl p-6 text-center transition bg-slate-50/50">
                    <input
                      type="file"
                      id="pdfFileInput"
                      accept=".pdf,application/pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setPdfFile(file);
                        if (file && !pdfTitle) {
                          // Auto-suggest title from filename
                          const clean = file.name.replace(/\.pdf$/i, '').replace(/[_-]/g, ' ');
                          setPdfTitle(clean);
                        }
                      }}
                      className="hidden"
                    />
                    <label htmlFor="pdfFileInput" className="cursor-pointer block space-y-2">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mx-auto">
                        <Upload className="w-5 h-5 text-slate-500" />
                      </div>
                      {pdfFile ? (
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-emerald-700 flex items-center justify-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{pdfFile.name}</span>
                          </p>
                          <p className="text-[11px] text-slate-500 font-mono">
                            {formatFileSize(pdfFile.size)}
                          </p>
                          <span className="text-[10px] text-blue-600 underline">Click to choose a different file</span>
                        </div>
                      ) : (
                        <div>
                          <p className="text-xs font-semibold text-slate-800">
                            Click here to browse your computer for a PDF file
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Supports official WAEC BECE/WASSCE question papers, marking guides, and trial mocks.
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Metadata Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  <div className="sm:col-span-2 lg:col-span-3">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Document Title *
                    </label>
                    <input
                      type="text"
                      value={pdfTitle}
                      onChange={(e) => setPdfTitle(e.target.value)}
                      placeholder={
                        pdfCategory === 'wassce_past_question'
                          ? 'e.g. WASSCE 2024 Core Mathematics Paper 1 & 2 with Solutions'
                          : pdfCategory === 'shs_trial_mock'
                          ? 'e.g. SHS 3 Diagnostic Mock Exam - Elective Mathematics'
                          : pdfCategory === 'bece_past_question'
                          ? 'e.g. BECE 2024 Integrated Science Paper 1 & 2 with Solutions'
                          : 'e.g. JHS 3 National Mock Examination - Social Studies'
                      }
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Examination / Category *
                    </label>
                    <select
                      value={pdfCategory}
                      onChange={(e) => {
                        const nextCat = e.target.value as PdfCategory;
                        setPdfCategory(nextCat);
                        if (isShsCategory(nextCat)) {
                          const allShs = [...SHS_CORE_SUBJECTS, ...SHS_ELECTIVE_GROUPS.flatMap(g => g.subjects)];
                          if (!allShs.some(s => s.id === pdfSubject)) {
                            setPdfSubject('math');
                          }
                          if (!pdfLevel.startsWith('SHS')) {
                            setPdfLevel('SHS 3');
                          }
                        } else {
                          if (!CURRICULUM_SUBJECTS.some(s => s.id === pdfSubject)) {
                            setPdfSubject('math');
                          }
                          if (!pdfLevel.startsWith('JHS')) {
                            setPdfLevel('JHS 3');
                          }
                        }
                      }}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900 font-medium"
                    >
                      <option value="bece_past_question">BECE Past Question (JHS · 2008 – 2026)</option>
                      <option value="trial_mock">JHS Trial Mock / Diagnostic Exam</option>
                      <option value="wassce_past_question">WASSCE Past Question (SHS · 2008 – 2026)</option>
                      <option value="shs_trial_mock">SHS Trial Mock / Diagnostic Exam</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject ({isShsCategory(pdfCategory) ? 'SHS' : 'JHS'}) *
                    </label>
                    <select
                      value={pdfSubject}
                      onChange={(e) => setPdfSubject(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                    >
                      {isShsCategory(pdfCategory) ? (
                        <>
                          <optgroup label="SHS Compulsory Core Subjects">
                            {SHS_CORE_SUBJECTS.map((s) => (
                              <option key={`shs-core-${s.id}`} value={s.id}>{s.name} (Core)</option>
                            ))}
                          </optgroup>
                          {SHS_ELECTIVE_GROUPS.map((group) => (
                            <optgroup key={`shs-grp-${group.id}`} label={`${group.name} Electives`}>
                              {group.subjects.map((s) => (
                                <option key={`shs-${group.id}-${s.id}`} value={s.id}>{s.name}</option>
                              ))}
                            </optgroup>
                          ))}
                        </>
                      ) : (
                        <>
                          {CURRICULUM_SUBJECTS.map((s) => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                          ))}
                        </>
                      )}
                    </select>
                  </div>

                  {pdfCategory === 'bece_past_question' ? (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        BECE Exam Year (2008 – 2026) *
                      </label>
                      <select
                        value={pdfYear}
                        onChange={(e) => setPdfYear(Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900 font-mono"
                      >
                        {getAllBeceYears().map((yr) => (
                          <option key={yr} value={yr}>BECE {yr}</option>
                        ))}
                      </select>
                    </div>
                  ) : pdfCategory === 'wassce_past_question' ? (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WASSCE Exam Year (2008 – 2026) *
                      </label>
                      <select
                        value={pdfYear}
                        onChange={(e) => setPdfYear(Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900 font-mono"
                      >
                        {getAllWassceYears().map((yr) => (
                          <option key={yr} value={yr}>WASSCE {yr}</option>
                        ))}
                      </select>
                    </div>
                  ) : pdfCategory === 'shs_trial_mock' ? (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target SHS Grade Level *
                      </label>
                      <select
                        value={pdfLevel}
                        onChange={(e) => setPdfLevel(e.target.value as EducationLevel)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                      >
                        <option value="SHS 1">SHS 1 (Year 1)</option>
                        <option value="SHS 2">SHS 2 (Year 2)</option>
                        <option value="SHS 3">SHS 3 (Year 3 - WASSCE Candidate)</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target JHS Grade Level *
                      </label>
                      <select
                        value={pdfLevel}
                        onChange={(e) => setPdfLevel(e.target.value as EducationLevel)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                      >
                        <option value="JHS 1">JHS 1 (Basic 7)</option>
                        <option value="JHS 2">JHS 2 (Basic 8)</option>
                        <option value="JHS 3">JHS 3 (Basic 9 - BECE)</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Paper Type *
                    </label>
                    <select
                      value={pdfPaperType}
                      onChange={(e) => setPdfPaperType(e.target.value as PdfPaperType)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900"
                    >
                      <option value="Combined Paper">Combined Paper (Section A &amp; B)</option>
                      <option value="Paper 1">Paper 1 (Objectives)</option>
                      <option value="Paper 2">Paper 2 (Theory / Written)</option>
                      <option value="Marking Scheme">Official Marking Scheme</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPdfUploadForm(false)}
                    className="px-3.5 py-2 text-xs text-slate-600 hover:text-slate-900 font-medium"
                    disabled={isUploadingPdf}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isUploadingPdf || !pdfFile}
                    className="px-5 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow-sm transition flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{isUploadingPdf ? 'Uploading Document...' : 'Upload & Publish PDF'}</span>
                  </button>
                </div>
              </form>
            )}

            {/* DOCUMENT REPOSITORY TABLE */}
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setPdfFilterCategory('ALL')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      pdfFilterCategory === 'ALL'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All PDFs ({pdfDocuments.length})
                  </button>
                  <button
                    onClick={() => setPdfFilterCategory('bece_past_question')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      pdfFilterCategory === 'bece_past_question'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    BECE Past ({pdfDocuments.filter(d => d.category === 'bece_past_question').length})
                  </button>
                  <button
                    onClick={() => setPdfFilterCategory('wassce_past_question')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      pdfFilterCategory === 'wassce_past_question'
                        ? 'bg-purple-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    WASSCE Past ({pdfDocuments.filter(d => d.category === 'wassce_past_question').length})
                  </button>
                  <button
                    onClick={() => setPdfFilterCategory('trial_mock')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      pdfFilterCategory === 'trial_mock'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    JHS Mocks ({pdfDocuments.filter(d => d.category === 'trial_mock').length})
                  </button>
                  <button
                    onClick={() => setPdfFilterCategory('shs_trial_mock')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      pdfFilterCategory === 'shs_trial_mock'
                        ? 'bg-amber-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    SHS Mocks ({pdfDocuments.filter(d => d.category === 'shs_trial_mock').length})
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={pdfFilterSubject}
                    onChange={(e) => setPdfFilterSubject(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1 text-xs text-slate-700"
                  >
                    <option value="ALL">All Subjects</option>
                    <optgroup label="JHS Subjects">
                      {CURRICULUM_SUBJECTS.map(s => (
                        <option key={`f-jhs-${s.id}`} value={s.id}>{s.name} (JHS)</option>
                      ))}
                    </optgroup>
                    <optgroup label="SHS Core Subjects">
                      {SHS_CORE_SUBJECTS.map(s => (
                        <option key={`f-shs-c-${s.id}`} value={s.id}>{s.name} (SHS Core)</option>
                      ))}
                    </optgroup>
                    <optgroup label="SHS Elective Subjects">
                      {uniqueShsElectives.map(s => (
                        <option key={`f-shs-e-${s.id}`} value={s.id}>{s.name}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {pdfDocuments.length === 0 ? (
                <div className="p-16 text-center space-y-3">
                  <FileText className="w-10 h-10 text-slate-300 mx-auto" />
                  <h4 className="text-sm font-semibold text-slate-800">No PDF Documents Uploaded Yet</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Click &quot;Upload Local PDF&quot; above to upload past question booklets, trial exams, or marking schemes directly from your local storage.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                      <tr>
                        <th className="px-4 py-3">Document Title</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Subject</th>
                        <th className="px-4 py-3">Year / Grade</th>
                        <th className="px-4 py-3">Paper</th>
                        <th className="px-4 py-3">Size</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {pdfDocuments
                        .filter(d => pdfFilterCategory === 'ALL' || d.category === pdfFilterCategory)
                        .filter(d => pdfFilterSubject === 'ALL' || d.subjectId === pdfFilterSubject)
                        .map((doc) => (
                          <tr key={doc.id} className="hover:bg-slate-50/60 transition">
                            <td className="px-4 py-3">
                              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                                <span>{doc.title}</span>
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                                {doc.fileName}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                doc.category === 'bece_past_question'
                                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                                  : doc.category === 'wassce_past_question'
                                  ? 'bg-purple-50 text-purple-800 border border-purple-200'
                                  : doc.category === 'shs_trial_mock'
                                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              }`}>
                                {getPdfCategoryLabel(doc.category)}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-700 font-medium">
                              {doc.subjectName}
                            </td>
                            <td className="px-4 py-3 font-mono text-slate-700">
                              {doc.category === 'bece_past_question'
                                ? `BECE ${doc.year}`
                                : doc.category === 'wassce_past_question'
                                ? `WASSCE ${doc.year}`
                                : (doc.level || 'All Levels')}
                            </td>
                            <td className="px-4 py-3 text-slate-600">
                              {doc.paperType}
                            </td>
                            <td className="px-4 py-3 font-mono text-slate-500">
                              {formatFileSize(doc.fileSizeBytes)}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <a
                                  href={doc.fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-2.5 py-1 rounded border border-slate-200 text-slate-700 hover:bg-slate-100 text-[11px] font-medium transition flex items-center gap-1"
                                >
                                  <span>View</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                                <a
                                  href={doc.fileUrl}
                                  download={doc.fileName}
                                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-medium transition flex items-center gap-1"
                                >
                                  <span>Download</span>
                                  <Download className="w-3 h-3" />
                                </a>
                                <button
                                  onClick={() => handleDeletePdf(doc.id, doc.title)}
                                  className="p-1.5 text-slate-400 hover:text-rose-600 transition"
                                  title="Delete PDF"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'pins' && (
          <div className="space-y-6">
            {/* Top Revenue Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Total Cash Flow Collected</span>
                <span className="text-2xl font-semibold text-slate-900 font-mono mt-1 block">
                  GH₵ {metrics.totalCashFlowGhs.toFixed(2)}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">MoMo and scratch-card retail</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Unredeemed Active PINs</span>
                <span className="text-2xl font-semibold text-slate-900 font-mono mt-1 block">
                  {pins.filter(p => p.status === 'ACTIVE').length} Vouchers
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Ready for distribution</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium">Redeemed Vouchers</span>
                <span className="text-2xl font-semibold text-slate-900 font-mono mt-1 block">
                  {pins.filter(p => p.status === 'REDEEMED').length} Redeemed
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">Activated by students</span>
              </div>
            </div>

            {/* PIN Batch Generator */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Scratch-Card PIN Minting</h3>
                  <p className="text-xs text-slate-500">Generate voucher batches for print and retail distribution.</p>
                </div>

                <button
                  onClick={exportPinsCSV}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Export All PINs</span>
                </button>
              </div>

              <form onSubmit={handleGeneratePins} className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Quantity</label>
                  <select
                    value={pinCount}
                    onChange={(e) => setPinCount(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value={10}>10 Vouchers</option>
                    <option value={20}>20 Vouchers</option>
                    <option value={50}>50 Vouchers</option>
                    <option value={100}>100 Vouchers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Retail Price (GHS)</label>
                  <input
                    type="number"
                    value={pinPrice}
                    onChange={(e) => setPinPrice(Number(e.target.value))}
                    min="5"
                    step="5"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Validity Period</label>
                  <select
                    value={pinValidity}
                    onChange={(e) => setPinValidity(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value={30}>30 Days Full Pass</option>
                    <option value={60}>60 Days Full Pass</option>
                    <option value={90}>90 Days Term Pass</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isGeneratingPins}
                  className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-medium rounded-lg text-xs shadow-sm transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isGeneratingPins ? 'Minting…' : 'Generate Batch'}</span>
                </button>
              </form>

              {pinError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{pinError}</span>
                </div>
              )}

              {/* Newly Generated Feedback */}
              {newlyGenerated.length > 0 && (
                <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-700 font-medium">
                    <span>Generated {newlyGenerated.length} PINs successfully:</span>
                    <span className="text-[11px] text-slate-500">Click any code to copy</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                    {newlyGenerated.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => copyToClipboard(p.pinCode)}
                        className="p-2 bg-white border border-slate-200 rounded-md text-slate-800 hover:border-slate-400 flex items-center justify-between text-left transition shadow-2xs"
                      >
                        <span className="truncate">{p.pinCode}</span>
                        {copiedPin === p.pinCode ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3 text-slate-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cashflow Ledger */}
            <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
              <div className="p-3.5 border-b border-slate-200/80">
                <h3 className="text-xs font-semibold text-slate-900">Recent Cashflow & MoMo Transactions</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                    <tr>
                      <th className="px-4 py-2.5">Reference</th>
                      <th className="px-4 py-2.5">Student Phone</th>
                      <th className="px-4 py-2.5">Payment Method</th>
                      <th className="px-4 py-2.5">Description</th>
                      <th className="px-4 py-2.5">Amount</th>
                      <th className="px-4 py-2.5 text-right">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-50/60 transition">
                        <td className="px-4 py-2.5 font-medium text-slate-900">{tx.reference}</td>
                        <td className="px-4 py-2.5 text-slate-600">{tx.studentPhone}</td>
                        <td className="px-4 py-2.5 font-sans text-slate-700">{tx.paymentMethod}</td>
                        <td className="px-4 py-2.5 font-sans text-slate-600">{tx.description}</td>
                        <td className="px-4 py-2.5 text-slate-900 font-semibold">GH₵ {tx.amountGhs.toFixed(2)}</td>
                        <td className="px-4 py-2.5 text-right text-slate-400">
                          {new Date(tx.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 6: APP BLOG & ARTICLES MANAGEMENT                        */}
        {/* ============================================================ */}
        {activeTab === 'blog' && (
          <div className="space-y-6">
            {/* Feedback Banner */}
            {blogBanner && (
              <div
                className={`p-4 rounded-xl border text-xs font-semibold flex items-center justify-between shadow-xs ${
                  blogBanner.kind === 'ok'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-rose-50 border-rose-200 text-rose-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  {blogBanner.kind === 'ok' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span>{blogBanner.text}</span>
                </div>
                <button
                  onClick={() => setBlogBanner(null)}
                  className="text-slate-400 hover:text-slate-600 text-xs px-2 py-0.5"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Total Articles</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {blogPosts.length}
                </span>
                <span className="text-[11px] text-blue-600 font-medium mt-1 inline-flex items-center gap-1">
                  <FileText className="w-3 h-3" /> Live on App & Website
                </span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Featured Article</span>
                <span className="text-sm font-bold text-slate-900 mt-1 block truncate">
                  {blogPosts.find((p) => p.featured)?.title || 'None designated'}
                </span>
                <span className="text-[11px] text-amber-600 font-medium mt-1 inline-flex items-center gap-1">
                  <Flame className="w-3 h-3" /> Displayed prominently on homepage
                </span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <span className="text-xs text-slate-500 font-medium block">Active Categories</span>
                <span className="text-2xl font-semibold text-slate-900 mt-1 block font-mono">
                  {BLOG_CATEGORIES.length}
                </span>
                <span className="text-[11px] text-slate-500 font-medium mt-1 inline-flex items-center gap-1">
                  Study Tips, Strategy, BECE & Updates
                </span>
              </div>
            </div>

            {/* Header & New Article Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Educational Articles & Study Journal</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Publish revision guides, chief examiner insights, and announcements for 8,000+ students.
                </p>
              </div>

              <button
                onClick={() => {
                  if (showBlogComposer) {
                    resetBlogForm();
                  } else {
                    resetBlogForm();
                    setShowBlogComposer(true);
                  }
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-sm ${
                  showBlogComposer
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {showBlogComposer ? (
                  <span>Cancel Composer</span>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>New Article</span>
                  </>
                )}
              </button>
            </div>

            {/* COMPOSER FORM (New or Edit) */}
            {showBlogComposer && (
              <div className="bg-white border-2 border-blue-500/40 rounded-xl p-5 sm:p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Edit className="w-4 h-4 text-blue-600" />
                    <span>{editingPostId ? 'Edit Article' : 'Compose New Article'}</span>
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {editingPostId ? `ID: ${editingPostId}` : 'Instant Multi-Platform Sync'}
                  </span>
                </div>

                <form onSubmit={handleSaveBlogPost} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Article Title *
                      </label>
                      <input
                        type="text"
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                        placeholder="e.g. How to Score Raw 1s in Core Mathematics & Integrated Science"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Category *
                      </label>
                      <select
                        value={blogCategory}
                        onChange={(e) => setBlogCategory(e.target.value as BlogCategory)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      >
                        {BLOG_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Author Byline
                      </label>
                      <input
                        type="text"
                        value={blogAuthor}
                        onChange={(e) => setBlogAuthor(e.target.value)}
                        placeholder="e.g. AcademicPrep Editorial or Teacher Name"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Estimated Read Time (Minutes)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="60"
                        value={blogReadTime}
                        onChange={(e) => setBlogReadTime(Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Summary Excerpt * (2-3 sentences shown on cards and previews)
                    </label>
                    <textarea
                      rows={2}
                      value={blogExcerpt}
                      onChange={(e) => setBlogExcerpt(e.target.value)}
                      placeholder="Brief overview highlighting the main takeaway for students..."
                      className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Article Content * (Supports bullet points with •, numbered lists, and blank lines between paragraphs)
                    </label>
                    <textarea
                      rows={8}
                      value={blogContent}
                      onChange={(e) => setBlogContent(e.target.value)}
                      placeholder="Write your detailed guide here. Use • for bullet points and numbers (1., 2.) for step-by-step advice..."
                      className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs font-sans text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 leading-relaxed"
                      required
                    />
                  </div>

                  {/* Media Attachment (Picture or Video) */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-blue-600" />
                        <label className="text-xs font-bold text-slate-800">
                          Media Attachment (Picture or Video)
                        </label>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg self-start sm:self-auto">
                        <button
                          type="button"
                          onClick={() => {
                            setBlogMediaType('none');
                            setBlogMediaUrl('');
                          }}
                          className={`px-2.5 py-1 rounded text-[11px] font-semibold transition ${
                            blogMediaType === 'none'
                              ? 'bg-slate-900 text-white'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          No Media
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setBlogMediaType('image');
                          }}
                          className={`px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1 transition ${
                            blogMediaType === 'image'
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <ImageIcon className="w-3 h-3" />
                          <span>Picture</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setBlogMediaType('video');
                          }}
                          className={`px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1 transition ${
                            blogMediaType === 'video'
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <VideoIcon className="w-3 h-3" />
                          <span>Video</span>
                        </button>
                      </div>
                    </div>

                    {blogMediaType !== 'none' && (
                      <div className="space-y-3 pt-1 border-t border-slate-200/70">
                        {blogMediaUploadError && (
                          <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{blogMediaUploadError}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* File Upload Option */}
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                              Upload {blogMediaType === 'image' ? 'Image File' : 'Video File'} (Direct to Cloud)
                            </label>
                            <label className="border border-dashed border-slate-300 hover:border-blue-500 rounded-lg p-3 bg-white flex flex-col items-center justify-center cursor-pointer transition text-center group">
                              <UploadCloud className="w-5 h-5 text-slate-400 group-hover:text-blue-600 mb-1" />
                              <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">
                                {isUploadingBlogMedia ? 'Uploading to Cloud CDN...' : `Select ${blogMediaType === 'image' ? 'Image' : 'Video'}`}
                              </span>
                              <span className="text-[10px] text-slate-400 mt-0.5">
                                {blogMediaType === 'image' ? 'PNG, JPG, WEBP (Max 20MB)' : 'MP4, WebM (Max 60MB)'}
                              </span>
                              <input
                                type="file"
                                accept={blogMediaType === 'image' ? 'image/*' : 'video/*'}
                                disabled={isUploadingBlogMedia}
                                onChange={(e) => {
                                  const f = e.target.files?.[0];
                                  if (f) handleBlogMediaFileUpload(f);
                                }}
                                className="hidden"
                              />
                            </label>
                          </div>

                          {/* URL Paste Option */}
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                              Or Paste {blogMediaType === 'image' ? 'Image Web URL' : 'YouTube / Vimeo / MP4 Link'}
                            </label>
                            <div className="relative">
                              <input
                                type="url"
                                value={blogMediaUrl}
                                onChange={(e) => setBlogMediaUrl(e.target.value)}
                                placeholder={
                                  blogMediaType === 'image'
                                    ? 'https://example.com/photo.jpg or Unsplash URL'
                                    : 'https://www.youtube.com/watch?v=... or direct .mp4'
                                }
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                              />
                              {blogMediaUrl && (
                                <button
                                  type="button"
                                  onClick={() => setBlogMediaUrl('')}
                                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-500 mt-1">
                              {blogMediaType === 'image'
                                ? 'Paste a direct link to any public image on the web.'
                                : 'YouTube links auto-convert to responsive embedded players for students.'}
                            </p>
                          </div>
                        </div>

                        {/* Caption input */}
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                            Media Caption / Description (Optional)
                          </label>
                          <input
                            type="text"
                            value={blogMediaCaption}
                            onChange={(e) => setBlogMediaCaption(e.target.value)}
                            placeholder="e.g. WAEC Chief Examiner illustration for Question 4(b)..."
                            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                          />
                        </div>

                        {/* Live Responsive Preview */}
                        {blogMediaUrl.trim() && (
                          <div className="pt-2 border-t border-slate-200/70">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                                <span>Live Responsive Preview</span>
                                <span className="text-[10px] font-normal text-slate-500">(How students will see it)</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  setBlogMediaUrl('');
                                  setBlogMediaCaption('');
                                }}
                                className="text-[11px] text-red-600 hover:text-red-700 font-semibold"
                              >
                                Remove Media
                              </button>
                            </div>

                            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-2">
                              {blogMediaType === 'image' ? (
                                <div className="space-y-1.5">
                                  <img
                                    src={blogMediaUrl.trim()}
                                    alt="Preview"
                                    className="w-full max-h-48 object-cover rounded-lg"
                                    onError={(e) => {
                                      (e.target as any).style.display = 'none';
                                    }}
                                  />
                                  {blogMediaCaption && (
                                    <p className="text-[11px] text-slate-500 italic text-center">
                                      {blogMediaCaption}
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div className="space-y-1.5">
                                  {(() => {
                                    const parsed = parseVideoUrl(blogMediaUrl.trim());
                                    if (!parsed) return <p className="text-xs text-slate-400">Invalid video URL</p>;
                                    return (
                                      <div className="relative aspect-video w-full max-w-md mx-auto rounded-lg overflow-hidden bg-black">
                                        {parsed.type === 'youtube' || parsed.type === 'vimeo' ? (
                                          <iframe
                                            src={parsed.embedUrl}
                                            title="Video Preview"
                                            className="w-full h-full border-0"
                                            allowFullScreen
                                          />
                                        ) : (
                                          <video src={parsed.embedUrl} controls className="w-full h-full" />
                                        )}
                                      </div>
                                    );
                                  })()}
                                  {blogMediaCaption && (
                                    <p className="text-[11px] text-slate-500 italic text-center">
                                      {blogMediaCaption}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>


                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="blogFeatured"
                      checked={blogFeatured}
                      onChange={(e) => setBlogFeatured(e.target.checked)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="blogFeatured" className="text-xs text-slate-700 font-medium cursor-pointer">
                      Feature this article prominently on Homepage & Blog header
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={resetBlogForm}
                      className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSavingBlog}
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow-sm transition flex items-center gap-1.5"
                    >
                      {isSavingBlog ? (
                        <span>Saving...</span>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{editingPostId ? 'Save Changes' : 'Publish Article'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Filter & Search Bar */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                  placeholder="Search articles by title or author..."
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={blogCategoryFilter}
                  onChange={(e) => setBlogCategoryFilter(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 font-medium focus:outline-none"
                >
                  <option value="ALL">All Categories</option>
                  {BLOG_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Articles Table */}
            <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
              <div className="p-3.5 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-semibold text-slate-900">
                    Published Articles ({blogPosts.length})
                  </h3>
                  {loadingBlog && (
                    <span className="text-[10px] text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-medium animate-pulse">
                      Syncing...
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  Synced across Next.js &amp; Mobile App
                </span>
              </div>

              {loadingBlog && blogPosts.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500">
                  Loading articles...
                </div>
              ) : blogPosts.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500">
                  No articles published yet. Click &quot;New Article&quot; to publish your first post.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/75 text-slate-500 font-medium uppercase tracking-wider border-b border-slate-200/80">
                      <tr>
                        <th className="px-4 py-2.5">Article Details</th>
                        <th className="px-4 py-2.5">Category</th>
                        <th className="px-4 py-2.5">Author</th>
                        <th className="px-4 py-2.5">Read Time</th>
                        <th className="px-4 py-2.5">Published Date</th>
                        <th className="px-4 py-2.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {blogPosts
                        .filter((p) => {
                          const matchesCat =
                            blogCategoryFilter === 'ALL' || p.category === blogCategoryFilter;
                          const q = blogSearch.toLowerCase().trim();
                          const matchesSearch =
                            !q ||
                            p.title.toLowerCase().includes(q) ||
                            p.author.toLowerCase().includes(q);
                          return matchesCat && matchesSearch;
                        })
                        .map((post) => (
                          <tr key={post.id} className="hover:bg-slate-50/60 transition">
                            <td className="px-4 py-3">
                              <div className="flex items-start gap-3 max-w-md">
                                {post.mediaType === 'image' && post.mediaUrl ? (
                                  <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                                    <img
                                      src={post.mediaUrl}
                                      alt=""
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        (e.target as any).style.display = 'none';
                                      }}
                                    />
                                  </div>
                                ) : post.mediaType === 'video' && post.mediaUrl ? (
                                  <div className="w-11 h-11 rounded-lg shrink-0 bg-slate-900 border border-slate-700 flex items-center justify-center text-white" title="Contains Video">
                                    <VideoIcon className="w-4 h-4 text-blue-400" />
                                  </div>
                                ) : null}

                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {post.featured && (
                                      <span className="shrink-0 px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 text-[10px] font-bold" title="Featured Post">
                                        ★ Featured
                                      </span>
                                    )}
                                    {post.mediaType === 'video' && (
                                      <span className="shrink-0 px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 text-[9px] font-bold">
                                        VIDEO
                                      </span>
                                    )}
                                    {post.mediaType === 'image' && (
                                      <span className="shrink-0 px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[9px] font-bold">
                                        PHOTO
                                      </span>
                                    )}
                                    <Link
                                      href={`/blog/${post.id}`}
                                      target="_blank"
                                      className="font-semibold text-slate-900 hover:text-blue-600 transition flex items-center gap-1 group truncate"
                                    >
                                      <span>{post.title}</span>
                                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 shrink-0" />
                                    </Link>
                                  </div>
                                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                    {post.excerpt}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                                {post.category}
                              </span>
                            </td>

                            <td className="px-4 py-3 whitespace-nowrap font-medium text-slate-700">
                              {post.author}
                            </td>

                            <td className="px-4 py-3 whitespace-nowrap text-slate-500 font-mono">
                              {post.readTimeMinutes} min
                            </td>

                            <td className="px-4 py-3 whitespace-nowrap text-slate-500 font-mono">
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </td>

                            <td className="px-4 py-3 whitespace-nowrap text-right space-x-1">
                              <button
                                onClick={() => handleToggleFeatured(post)}
                                className={`p-1.5 rounded-lg border transition ${
                                  post.featured
                                    ? 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
                                    : 'border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                                }`}
                                title={post.featured ? 'Unfeature' : 'Set as Featured Article'}
                              >
                                <Flame className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => handleStartEditPost(post)}
                                className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition"
                                title="Edit Article"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => handleDeleteBlogPost(post)}
                                className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                                title="Delete Article"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Security Credentials Management Modal */}
      {showSecurityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Security Credentials</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Manage Dual-Key Gateway Passwords</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowSecurityModal(false);
                  setSecurityModalMsg(null);
                }}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateKeys} className="space-y-4">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Passwords are stored as bcrypt hashes on the server and are never shown again. Confirm
                both current passwords to prove you control this console before setting new ones.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block font-mono">
                    Current Primary
                  </label>
                  <input
                    type="password"
                    value={currentPrimaryPin}
                    onChange={(e) => setCurrentPrimaryPin(e.target.value)}
                    autoComplete="current-password"
                    className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block font-mono">
                    Current Secondary
                  </label>
                  <input
                    type="password"
                    value={currentSecondaryPin}
                    onChange={(e) => setCurrentSecondaryPin(e.target.value)}
                    autoComplete="current-password"
                    className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block font-mono">
                  1. New Primary Administrator Passcode
                </label>
                <input
                  type="password"
                  value={editPrimaryPin}
                  onChange={(e) => setEditPrimaryPin(e.target.value)}
                  autoComplete="new-password"
                  className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  required
                />
                <span className="text-[10px] text-slate-400 block">Minimum 8 characters</span>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block font-mono">
                  2. New Secondary Security Token
                </label>
                <input
                  type="password"
                  value={editSecondaryPin}
                  onChange={(e) => setEditSecondaryPin(e.target.value)}
                  autoComplete="new-password"
                  className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  required
                />
                <span className="text-[10px] text-slate-400 block">Minimum 8 characters</span>
              </div>

              {securityModalMsg && (
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-medium">
                  {securityModalMsg}
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setShowSecurityModal(false);
                    setSecurityModalMsg(null);
                  }}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingKeys}
                  className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white text-xs font-bold transition shadow-xs"
                >
                  {isSavingKeys ? 'Saving…' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
