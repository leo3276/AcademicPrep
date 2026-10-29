'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { EducationLevel, AccessPin } from '@/lib/types';
import { CURRICULUM_SUBJECTS, JHS_CURRICULUM_TOPICS, SHS_CORE_SUBJECTS, ALL_CURRICULUM_TOPICS } from '@/lib/curriculumData';
import { SHS_ELECTIVE_GROUPS } from '@/lib/curriculumShsElectives';
import TopicShareButtons from '@/components/TopicShareButtons';
import { LessonComment } from '@/lib/commentsTypes';
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
import { OFFICIAL_SCHEDULED_EXAM } from '@/lib/scheduledWeeklyExam';
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
  MessageCircle,
  MessageSquare,
  Pin,
  Crown,
  Check,
  Radio,
  Sparkles,
  RefreshCw,
  FlaskConical,
  GraduationCap,
  Share2
} from 'lucide-react';
import { parseVideoUrl } from '@/lib/mediaUtils';
import BroadcastModal from '@/components/BroadcastModal';
import { 
  UniversitySlide, 
  GHANAIAN_UNIVERSITIES, 
  UNIVERSITY_LEVELS, 
  UNIVERSITY_SEMESTERS, 
  UNIVERSITY_DEPARTMENTS 
} from '@/lib/universitySlideTypes';
import {
  WhatsAppChannelConfig,
  fetchWhatsAppChannelConfig,
  saveWhatsAppChannelConfig,
  DEFAULT_WHATSAPP_CHANNEL_CONFIG,
} from '@/lib/whatsappChannelStore';
import WhatsAppChannelBanner from '@/components/WhatsAppChannelBanner';


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
  
  // Navigation Tabs: traffic, paid_access, momo_claims, completions, trial_mocks, pins, blog, comments, whatsapp, weekly_exams
  const [activeTab, setActiveTab] = useState<'traffic' | 'paid_access' | 'momo_claims' | 'completions' | 'trial_mocks' | 'university_slides' | 'pins' | 'blog' | 'comments' | 'whatsapp' | 'weekly_exams'>('traffic');

  // Stores
  const [trafficData, setTrafficData] = useState<WebTrafficData>(() => {
    if (typeof window !== 'undefined') return getStoredTrafficData();
    return DEFAULT_TRAFFIC_DATA;
  });
  const [students, setStudents] = useState<AdminStudentDetail[]>([]);
  // PDF Documents Store
  const [pdfDocuments, setPdfDocuments] = useState<UploadedPdfDocument[]>([]);

  // University Slides Store
  const [universitySlides, setUniversitySlides] = useState<UniversitySlide[]>([]);
  const [loadingUniSlides, setLoadingUniSlides] = useState(false);
  const [collaboratorLink, setCollaboratorLink] = useState('');
  const [collabLinkCopied, setCollabLinkCopied] = useState(false);
  const [uniUploadTitle, setUniUploadTitle] = useState('');
  const [uniUploadCode, setUniUploadCode] = useState('');
  const [uniUploadCourseTitle, setUniUploadCourseTitle] = useState('');
  const [uniUploadUniversity, setUniUploadUniversity] = useState(GHANAIAN_UNIVERSITIES[0]);
  const [uniUploadDepartment, setUniUploadDepartment] = useState(UNIVERSITY_DEPARTMENTS[0]);
  const [uniUploadLevel, setUniUploadLevel] = useState(UNIVERSITY_LEVELS[0]);
  const [uniUploadSemester, setUniUploadSemester] = useState(UNIVERSITY_SEMESTERS[0]);
  const [uniUploadDescription, setUniUploadDescription] = useState('');
  const [uniUploadFile, setUniUploadFile] = useState<File | null>(null);
  const [uniUploading, setUniUploading] = useState(false);
  const [uniUploadFeedback, setUniUploadFeedback] = useState<{ kind: 'ok' | 'bad'; text: string } | null>(null);
  const [uniSlideFilter, setUniSlideFilter] = useState('');
  const uniFileInputRef = useRef<HTMLInputElement>(null);
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
  const [blogBroadcastOnPublish, setBlogBroadcastOnPublish] = useState(false);

  // Broadcast to Students Modal State
  const [broadcastPost, setBroadcastPost] = useState<BlogPost | null>(null);
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false);

  // Community Comments Moderation State
  const [adminComments, setAdminComments] = useState<LessonComment[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentSearch, setCommentSearch] = useState('');

  // WhatsApp Channel Management State
  const [waConfig, setWaConfig] = useState<WhatsAppChannelConfig>(DEFAULT_WHATSAPP_CHANNEL_CONFIG);
  const [loadingWa, setLoadingWa] = useState(false);
  const [savingWa, setSavingWa] = useState(false);
  const [waFeedback, setWaFeedback] = useState<{ kind: 'ok' | 'bad'; text: string } | null>(null);

  // Scheduled Weekly Exam Broadcast State
  const [isBroadcastingExam, setIsBroadcastingExam] = useState(false);
  const [examBroadcastFeedback, setExamBroadcastFeedback] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);

  const handleDispatchExamBroadcast = async (channel: 'whatsapp_server' | 'sms') => {
    try {
      setIsBroadcastingExam(true);
      setExamBroadcastFeedback(null);
      const res = await fetch('/api/broadcast/weekly-exam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetGroup: 'JHS', channel }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setExamBroadcastFeedback({
          kind: 'ok',
          text: data.statusMessage || `Successfully dispatched to ${data.sentCount} students!`,
        });
      } else {
        setExamBroadcastFeedback({
          kind: 'err',
          text: data.error || 'Failed to dispatch exam broadcast.',
        });
      }
    } catch (err: any) {
      setExamBroadcastFeedback({
        kind: 'err',
        text: err?.message || 'Network error dispatching broadcast.',
      });
    } finally {
      setIsBroadcastingExam(false);
    }
  };

  // Weekly Exams Admin State & Candidate Scoreboard (Live Real-Time Data)
  const [weeklyExamMetrics, setWeeklyExamMetrics] = useState({
    totalCandidates: 0,
    completedCount: 0,
    inProgressCount: 0,
    awaitingCount: 0,
    averageCompositeScore: 0,
    highestScore: 0,
  });
  const [weeklyExamCandidates, setWeeklyExamCandidates] = useState<any[]>([]);
  const [loadingWeeklyExams, setLoadingWeeklyExams] = useState(false);
  const [weeklyExamSearch, setWeeklyExamSearch] = useState('');
  const [weeklyExamStatusFilter, setWeeklyExamStatusFilter] = useState<'ALL' | 'completed' | 'in_progress' | 'not_started'>('ALL');
  const [weeklyExamLevelFilter, setWeeklyExamLevelFilter] = useState<'ALL' | 'JHS 3' | 'JHS 2' | 'JHS 1'>('ALL');
  const [weeklyExamPage, setWeeklyExamPage] = useState(1);
  const [lastWeeklyExamSync, setLastWeeklyExamSync] = useState<string>('');
  const [examShareCopied, setExamShareCopied] = useState<string | null>(null);
  const [isSending5MinReminder, setIsSending5MinReminder] = useState(false);
  const [reminder5MinFeedback, setReminder5MinFeedback] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);

  const loadWeeklyExamData = useCallback(async (silent = false) => {
    try {
      if (!silent) setLoadingWeeklyExams(true);
      const res = await fetch('/api/admin/weekly-exams');
      const data = await res.json();
      if (data?.success) {
        if (data.metrics) setWeeklyExamMetrics(data.metrics);
        if (Array.isArray(data.candidates)) setWeeklyExamCandidates(data.candidates);
        setLastWeeklyExamSync(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      }
    } catch (err) {
      console.warn('Failed to load weekly exam candidates:', err);
    } finally {
      if (!silent) setLoadingWeeklyExams(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === 'weekly_exams') {
      loadWeeklyExamData();
      const interval = setInterval(() => loadWeeklyExamData(true), 10000); // Live real-time poll every 10s
      return () => clearInterval(interval);
    }
  }, [activeTab, loadWeeklyExamData]);

  const getWeeklyExamSharePayload = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://academicprep.com';
    const examUrl = `${origin}/jhs/weekly-exam?mode=scheduled`;
    const message = `📢 *ACADEMICPREP WEEKLY EXAMINATION* 🔬\n\n` +
      `*Subject:* ${OFFICIAL_SCHEDULED_EXAM.level} ${OFFICIAL_SCHEDULED_EXAM.subjectName}\n` +
      `*Topic:* ${OFFICIAL_SCHEDULED_EXAM.topicTitle}\n` +
      `*Time:* Today 7:30 PM – 12:00 AM GMT (Available until Midnight)\n` +
      `*Examination Criteria:*\n` +
      `  • Paper 1: ${OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes} Mins (Objectives - ${OFFICIAL_SCHEDULED_EXAM.paper1MaxMarks} Marks)\n` +
      `  • Paper 2: ${OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes} Mins (Comprehension & Summary - ${OFFICIAL_SCHEDULED_EXAM.paper2MaxMarks} Marks)\n` +
      `  • Total: 100 Marks (Official WAEC Stanine Grading 1 - 9)\n\n` +
      `⚠️ *Proctoring Criteria:*\n` +
      `Strict Anti-Cheat. Leaving or minimizing the exam window activates a 5-minute penalty lockout before re-entry, while the exam timer continues running in real time.\n\n` +
      `👉 *Take Examination Here:*\n${examUrl}\n\n` +
      `_All JHS 3 candidates are expected to take their seats before 7:30 PM. Good luck!_ 🏆`;
    return { examUrl, message };
  };

  const handleShareWeeklyExam = (platform: 'whatsapp' | 'facebook' | 'twitter' | 'telegram') => {
    const { examUrl, message } = getWeeklyExamSharePayload();
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(examUrl)}`, '_blank');
    } else if (platform === 'twitter') {
      const tweetText = `AcademicPrep ${OFFICIAL_SCHEDULED_EXAM.level} ${OFFICIAL_SCHEDULED_EXAM.subjectName} Weekly Exam (${OFFICIAL_SCHEDULED_EXAM.topicTitle}) starts at 7:30 PM GMT sharp!\n\nTake the exam: ${examUrl}`;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(examUrl)}&text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleCopyWeeklyExamText = () => {
    const { message } = getWeeklyExamSharePayload();
    navigator.clipboard.writeText(message);
    setExamShareCopied('text');
    setTimeout(() => setExamShareCopied(null), 2500);
  };

  const handleCopyWeeklyExamLink = () => {
    const { examUrl } = getWeeklyExamSharePayload();
    navigator.clipboard.writeText(examUrl);
    setExamShareCopied('link');
    setTimeout(() => setExamShareCopied(null), 2500);
  };

  const handleSend5MinReminder = async () => {
    try {
      setIsSending5MinReminder(true);
      setReminder5MinFeedback(null);
      const res = await fetch('/api/broadcast/weekly-exam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetGroup: 'JHS',
          channel: 'whatsapp_server',
          broadcastType: '5min_reminder'
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setReminder5MinFeedback({
          kind: 'ok',
          text: data.statusMessage || `5-Minute countdown reminder dispatched successfully to ${data.sentCount || 0} students!`,
        });
      } else {
        setReminder5MinFeedback({
          kind: 'err',
          text: data.error || 'Failed to dispatch 5-minute reminder.',
        });
      }
    } catch (err: any) {
      setReminder5MinFeedback({
        kind: 'err',
        text: err?.message || 'Network error dispatching 5-minute reminder.',
      });
    } finally {
      setIsSending5MinReminder(false);
    }
  };

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
  const [topicSearchQuery, setTopicSearchQuery] = useState('');
  const [topicLevelFilter, setTopicLevelFilter] = useState<'ALL' | 'JHS 1' | 'JHS 2' | 'JHS 3' | 'SHS 1' | 'SHS 2' | 'SHS 3'>('ALL');
  const [topicSubjectFilter, setTopicSubjectFilter] = useState('ALL');


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

  const loadUniversitySlides = async () => {
    setLoadingUniSlides(true);
    try {
      const res = await fetch('/api/university/slides', { cache: 'no-store' });
      const data = await res.json();
      if (data.success && Array.isArray(data.slides)) {
        setUniversitySlides(data.slides);
      }
    } catch (e) {
      console.warn('Failed to load university slides:', e);
    } finally {
      setLoadingUniSlides(false);
    }
  };

  const loadCollaboratorLink = async () => {
    try {
      const res = await fetch('/api/university/collaborator');
      const data = await res.json();
      if (data.success && data.inviteLink) {
        setCollaboratorLink(data.inviteLink);
      }
    } catch {}
  };

  const handleRegenerateCollaboratorLink = async () => {
    if (!confirm('Regenerate collaborator invite link? Anyone with the old link will no longer be able to upload until you share the new link.')) {
      return;
    }
    try {
      const res = await fetch('/api/university/collaborator', { method: 'POST' });
      const data = await res.json();
      if (data.success && data.inviteLink) {
        setCollaboratorLink(data.inviteLink);
        setCollabLinkCopied(false);
      }
    } catch (e: any) {
      alert('Error regenerating link: ' + (e?.message || e));
    }
  };

  const handleCopyCollabLink = () => {
    if (!collaboratorLink) return;
    navigator.clipboard.writeText(collaboratorLink);
    setCollabLinkCopied(true);
    setTimeout(() => setCollabLinkCopied(false), 2500);
  };

  const handleAdminUploadUniSlide = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uniUploadCode.trim() || !uniUploadTitle.trim() || !uniUploadFile) {
      setUniUploadFeedback({ kind: 'bad', text: 'Course code, title, and PDF file are required.' });
      return;
    }

    setUniUploading(true);
    setUniUploadFeedback(null);

    try {
      const fd = new FormData();
      fd.append('file', uniUploadFile);
      fd.append('title', uniUploadTitle.trim());
      fd.append('courseCode', uniUploadCode.trim().toUpperCase());
      fd.append('courseTitle', uniUploadCourseTitle.trim() || uniUploadTitle.trim());
      fd.append('university', uniUploadUniversity);
      fd.append('department', uniUploadDepartment);
      fd.append('level', uniUploadLevel);
      fd.append('semester', uniUploadSemester);
      fd.append('description', uniUploadDescription.trim());
      fd.append('uploadedBy', 'Admin');

      const res = await fetch('/api/university/slides', {
        method: 'POST',
        body: fd,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUniUploadFeedback({ kind: 'ok', text: `Slide "${data.slide.title}" published successfully!` });
        setUniUploadTitle('');
        setUniUploadCode('');
        setUniUploadCourseTitle('');
        setUniUploadDescription('');
        setUniUploadFile(null);
        if (uniFileInputRef.current) uniFileInputRef.current.value = '';
        await loadUniversitySlides();
      } else {
        setUniUploadFeedback({ kind: 'bad', text: data.error || 'Failed to upload slide.' });
      }
    } catch (err: any) {
      setUniUploadFeedback({ kind: 'bad', text: err.message || 'Error uploading slide.' });
    } finally {
      setUniUploading(false);
    }
  };

  const handleDeleteUniSlide = async (id: string, slideTitle: string) => {
    if (!confirm(`Are you sure you want to remove "${slideTitle}"?`)) return;
    try {
      const res = await fetch(`/api/university/slides?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setUniversitySlides(prev => prev.filter(s => s.id !== id));
      } else {
        alert(data.error || 'Could not delete slide.');
      }
    } catch (err: any) {
      alert(err.message || 'Failed to delete slide.');
    }
  };

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

  const loadComments = useCallback(async () => {
    try {
      setLoadingComments(true);
      const res = await fetch('/api/comments');
      const data = await res.json();
      if (data?.success && Array.isArray(data.comments)) {
        setAdminComments(data.comments);
      }
    } catch (e) {
      console.warn('Failed to load comments in admin:', e);
    } finally {
      setLoadingComments(false);
    }
  }, []);

  const handleDeleteComment = async (id: string) => {
    if (!confirm('Are you sure you want to delete this study note?')) return;
    try {
      const res = await fetch(`/api/comments?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setAdminComments((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (err) {
      console.warn('Failed to delete comment:', err);
    }
  };

  const handleTogglePinComment = async (id: string, currentPinned: boolean) => {
    try {
      const res = await fetch('/api/comments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isPinned: !currentPinned }),
      });
      const data = await res.json();
      if (data.success) {
        setAdminComments((prev) =>
          prev.map((c) => (c.id === id ? { ...c, isPinned: !currentPinned } : c))
        );
      }
    } catch (err) {
      console.warn('Failed to pin comment:', err);
    }
  };

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
    setBlogBroadcastOnPublish(false);
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
          const newPost = res.post;
          const shouldBroadcast = blogBroadcastOnPublish;
          resetBlogForm();
          await loadBlogPosts(true);
          if (shouldBroadcast && newPost) {
            setBroadcastPost(newPost);
            setIsBroadcastModalOpen(true);
          }
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

  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const handleCopyPostLink = (post: BlogPost) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://academicprep.com';
    const url = `${origin}/blog/${post.id}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedPostId(post.id);
      setTimeout(() => setCopiedPostId(null), 2500);
    }
  };

  const handleSharePostWhatsApp = (post: BlogPost) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://academicprep.com';
    const url = `${origin}/blog/${post.id}`;
    const text = encodeURIComponent(
      `🎓 *${post.title}*\n\n${post.excerpt}\n\n👉 Read full post on AcademicPrep:\n${url}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const loadWhatsAppConfig = useCallback(async () => {
    setLoadingWa(true);
    try {
      const cfg = await fetchWhatsAppChannelConfig();
      if (cfg) {
        setWaConfig(cfg);
      }
    } catch (err: any) {
      console.warn('Failed to load WhatsApp channel config:', err);
    } finally {
      setLoadingWa(false);
    }
  }, []);

  const handleSaveWhatsAppConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingWa(true);
    setWaFeedback(null);
    try {
      const res = await saveWhatsAppChannelConfig(waConfig);
      if (res.success) {
        if (res.config) setWaConfig(res.config);
        setWaFeedback({ kind: 'ok', text: 'WhatsApp channel settings saved and updated live on the homepage!' });
      } else {
        setWaFeedback({ kind: 'bad', text: res.error || 'Failed to save WhatsApp channel configuration.' });
      }
    } catch (err: any) {
      setWaFeedback({ kind: 'bad', text: err?.message || 'Unexpected network error.' });
    } finally {
      setSavingWa(false);
    }
  };

  const handleTestWhatsAppLink = () => {
    if (!waConfig.url?.trim()) {
      alert('Please enter a WhatsApp channel URL first.');
      return;
    }
    window.open(waConfig.url.trim(), '_blank', 'noopener,noreferrer');
  };

  const handleResetWhatsAppConfig = () => {
    if (confirm('Reset WhatsApp banner settings to default template? (Remember to click Save Changes to apply)')) {
      setWaConfig({
        ...DEFAULT_WHATSAPP_CHANNEL_CONFIG,
        url: waConfig.url || '',
      });
      setWaFeedback({ kind: 'ok', text: 'Reset to default template. Review and click "Save & Publish Changes".' });
    }
  };

  useEffect(() => {
    if (!isAdmin) return;
    clearStudentRosterCache();
    loadRealStudents();
    fetchUploadedDocuments().then(setPdfDocuments).catch(e => console.warn('Fetch docs warning:', e?.message || e));
    loadBlogPosts(true);
    loadMomoClaims();
    loadComments();
    refreshPins();
    loadWhatsAppConfig();
    loadUniversitySlides();
    loadCollaboratorLink();
  }, [isAdmin, refreshPins, loadBlogPosts, loadMomoClaims, loadComments, loadWhatsAppConfig]);

  useEffect(() => {
    if (activeTab === 'university_slides') {
      loadUniversitySlides();
      loadCollaboratorLink();
    }
  }, [activeTab]);

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
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
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
                    className="w-2/3 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-xs font-semibold rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
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
                <span className="ml-1 text-[10px] bg-amber-600 text-white font-bold px-1.5 py-0.5 rounded-full">
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

            <button
              onClick={() => setActiveTab('comments')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'comments'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Student Discussions</span>
              <span className="ml-1 text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-mono font-bold">
                {adminComments.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'whatsapp'
                  ? 'border-slate-900 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Channel</span>
              {waConfig.enabled && waConfig.url ? (
                <span className="ml-1 text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded-full font-mono">
                  Live
                </span>
              ) : (
                <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                  Off
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('weekly_exams')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'weekly_exams'
                  ? 'border-indigo-600 text-indigo-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FlaskConical className="w-4 h-4 text-indigo-600" />
              <span>Weekly Exams & Candidates</span>
              <span className="ml-1 text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-1.5 py-0.5 rounded-full font-mono font-bold">
                6:00 PM
              </span>
            </button>

            <button
              onClick={() => setActiveTab('university_slides')}
              className={`py-3 border-b-2 transition flex items-center gap-2 ${
                activeTab === 'university_slides'
                  ? 'border-blue-600 text-blue-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>University Slides</span>
              <span className="ml-1 text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded-full font-mono font-bold">
                {universitySlides.length}
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
                  className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
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
                        ? 'bg-blue-600 text-white'
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
                                className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium transition"
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
              <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
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
                              ? 'bg-blue-600 text-white border-blue-600'
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
                      className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium shadow-sm transition"
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
            <div className="bg-slate-900 p-5 rounded-2xl text-white shadow-xs space-y-3">
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
                        ? 'bg-blue-600 text-white'
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
                    <span className="text-[10px] text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-medium">
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
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
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

            {/* Topic WhatsApp Directory & Direct Links for Teachers */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>Topic Direct Links Directory & WhatsApp Sharing for Teachers</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Copy direct links or share any lesson to WhatsApp groups for students to learn on AcademicPrep.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto">
                  {ALL_CURRICULUM_TOPICS.length} Total Platform Topics
                </span>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search by topic title or keyword..."
                    value={topicSearchQuery}
                    onChange={(e) => setTopicSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <select
                    value={topicLevelFilter}
                    onChange={(e) => setTopicLevelFilter(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="ALL">All Grade Levels</option>
                    <option value="JHS 1">JHS 1</option>
                    <option value="JHS 2">JHS 2</option>
                    <option value="JHS 3">JHS 3 (BECE)</option>
                    <option value="SHS 1">SHS 1</option>
                    <option value="SHS 2">SHS 2</option>
                    <option value="SHS 3">SHS 3 (WASSCE)</option>
                  </select>
                </div>

                <div>
                  <select
                    value={topicSubjectFilter}
                    onChange={(e) => setTopicSubjectFilter(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="ALL">All Subjects</option>
                    <optgroup label="JHS Common Core">
                      {CURRICULUM_SUBJECTS.map((s) => (
                        <option key={`jhs-opt-${s.id}`} value={s.id}>{s.name} (JHS)</option>
                      ))}
                    </optgroup>
                    <optgroup label="SHS Core Subjects">
                      {SHS_CORE_SUBJECTS.map((s) => (
                        <option key={`shs-core-${s.id}`} value={s.id}>{s.name} (SHS)</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Topics Table */}
              <div className="overflow-x-auto border border-slate-200/80 rounded-lg">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/75 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-200/80">
                    <tr>
                      <th className="px-4 py-2.5">Topic & Subject</th>
                      <th className="px-4 py-2.5">Level & Term</th>
                      <th className="px-4 py-2.5">Content Features</th>
                      <th className="px-4 py-2.5 text-right">Teacher Share Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {ALL_CURRICULUM_TOPICS
                      .filter((t) => {
                        const matchesQuery = !topicSearchQuery || 
                          t.title.toLowerCase().includes(topicSearchQuery.toLowerCase()) ||
                          t.description.toLowerCase().includes(topicSearchQuery.toLowerCase());
                        const matchesLevel = topicLevelFilter === 'ALL' || t.level === topicLevelFilter;
                        const matchesSubj = topicSubjectFilter === 'ALL' || t.subjectId === topicSubjectFilter;
                        return matchesQuery && matchesLevel && matchesSubj;
                      })
                      .slice(0, 50)
                      .map((topicItem) => {
                        const isShsTopic = topicItem.level?.startsWith('SHS');
                        const urlPath = isShsTopic
                          ? `/shs/${topicItem.subjectId}/${topicItem.id}?level=${encodeURIComponent(topicItem.level)}`
                          : `/jhs/${topicItem.subjectId}/${topicItem.id}?level=${encodeURIComponent(topicItem.level)}`;
                        const subjectName = CURRICULUM_SUBJECTS.find(s => s.id === topicItem.subjectId)?.name ||
                          SHS_CORE_SUBJECTS.find(s => s.id === topicItem.subjectId)?.name ||
                          topicItem.subjectId;

                        return (
                          <tr key={topicItem.id} className="hover:bg-slate-50/70 transition">
                            <td className="px-4 py-3">
                              <div className="font-semibold text-slate-900">{topicItem.title}</div>
                              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                                <span className="font-medium text-slate-700">{subjectName}</span>
                                <span>•</span>
                                <span className="font-mono text-[10px] text-slate-400">/{topicItem.id}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                                {topicItem.level}
                              </span>
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                Term {topicItem.term} • Topic #{topicItem.orderIndex}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                                  Notes
                                </span>
                                {topicItem.examples && topicItem.examples.length > 0 && (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                                    {topicItem.examples.length} Examples
                                  </span>
                                )}
                                {topicItem.quiz?.questions && (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-50 text-purple-700 border border-purple-200">
                                    {topicItem.quiz.questions.length} MCQs
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Link
                                  href={urlPath}
                                  target="_blank"
                                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-[11px] flex items-center gap-1"
                                  title="Preview topic lesson in new tab"
                                >
                                  <span>View</span>
                                  <ExternalLink className="w-3 h-3" />
                                </Link>
                                <TopicShareButtons
                                  topicTitle={topicItem.title}
                                  subjectName={subjectName}
                                  level={topicItem.level}
                                  urlPath={urlPath}
                                  quizCount={topicItem.quiz?.questions?.length}
                                  variant="compact"
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
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
                  className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
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
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow-sm transition flex items-center gap-1.5"
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
                        ? 'bg-blue-600 text-white'
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
                                  className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium transition flex items-center gap-1"
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
                  className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium rounded-lg text-xs shadow-sm transition flex items-center justify-center gap-1.5"
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
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
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
                              ? 'bg-blue-600 text-white'
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


                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="blogFeatured"
                        checked={blogFeatured}
                        onChange={(e) => setBlogFeatured(e.target.checked)}
                        className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="blogFeatured" className="text-xs text-slate-700 font-medium cursor-pointer">
                        Feature this article prominently on Homepage &amp; Blog header
                      </label>
                    </div>

                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/70 border border-blue-200/80">
                      <input
                        type="checkbox"
                        id="blogBroadcastOnPublish"
                        checked={blogBroadcastOnPublish}
                        onChange={(e) => setBlogBroadcastOnPublish(e.target.checked)}
                        className="rounded border-blue-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="blogBroadcastOnPublish" className="text-xs text-blue-900 font-bold cursor-pointer flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5 text-blue-600" />
                        <span>Broadcast this announcement directly to students (SMS &amp; WhatsApp) upon publishing</span>
                      </label>
                    </div>
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
                    <span className="text-[10px] text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-medium">
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
                                  <div className="flex items-center gap-2 mt-1">
                                    <button
                                      type="button"
                                      onClick={() => handleCopyPostLink(post)}
                                      className="inline-flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded font-mono transition cursor-pointer"
                                      title="Click to copy direct URL"
                                    >
                                      {copiedPostId === post.id ? (
                                        <>
                                          <Check className="w-3 h-3 text-emerald-600" />
                                          <span className="text-emerald-700 font-bold">Copied!</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-3 h-3 text-blue-500" />
                                          <span>academicprep.com/blog/{post.id}</span>
                                        </>
                                      )}
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => handleSharePostWhatsApp(post)}
                                      className="inline-flex items-center gap-1 text-[10px] text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded font-semibold transition cursor-pointer"
                                      title="Broadcast on WhatsApp"
                                    >
                                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                                      <span>WhatsApp</span>
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => {
                                        setBroadcastPost(post);
                                        setIsBroadcastModalOpen(true);
                                      }}
                                      className="inline-flex items-center gap-1 text-[10px] text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded font-semibold transition cursor-pointer"
                                      title="Broadcast directly to students via SMS or WhatsApp"
                                    >
                                      <Radio className="w-3 h-3 text-blue-600" />
                                      <span>Broadcast (SMS/WA)</span>
                                    </button>
                                  </div>
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
                                type="button"
                                onClick={() => {
                                  setBroadcastPost(post);
                                  setIsBroadcastModalOpen(true);
                                }}
                                className="p-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition cursor-pointer"
                                title="Broadcast to Students (SMS &amp; WhatsApp)"
                              >
                                <Radio className="w-3.5 h-3.5" />
                              </button>

                              <button
                                type="button"
                                onClick={() => handleSharePostWhatsApp(post)}
                                className="p-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition cursor-pointer"
                                title="Share to WhatsApp"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                              </button>

                              <button
                                type="button"
                                onClick={() => handleCopyPostLink(post)}
                                className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition cursor-pointer"
                                title="Copy direct public link"
                              >
                                {copiedPostId === post.id ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>

                              <button
                                type="button"
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

        {/* ============================================================ */}
        {/* TAB 8: STUDENT DISCUSSIONS & COMMUNITY NOTES MODERATION     */}
        {/* ============================================================ */}
        {activeTab === 'comments' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Student Discussion Notes & Moderation</h2>
                <p className="text-xs text-slate-500">
                  Manage student revision comments, pin high-value study explanations, or remove inappropriate posts.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={loadComments}
                  disabled={loadingComments}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition flex items-center gap-1.5"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>{loadingComments ? 'Refreshing...' : 'Refresh Notes'}</span>
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs">
                <span className="text-xs text-slate-500 font-medium">Total Community Notes</span>
                <span className="text-2xl font-bold text-slate-900 mt-1 block font-mono">
                  {adminComments.length}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Across all JHS & SHS lessons</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs">
                <span className="text-xs text-slate-500 font-medium">Pinned Top Explanations</span>
                <span className="text-2xl font-bold text-amber-600 mt-1 block font-mono">
                  {adminComments.filter((c) => c.isPinned).length}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Featured at the top of lessons</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs">
                <span className="text-xs text-slate-500 font-medium">VIP Scholar Contributions</span>
                <span className="text-2xl font-bold text-emerald-600 mt-1 block font-mono">
                  {adminComments.filter((c) => c.isVip).length}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Notes from active VIP subscribers</span>
              </div>
            </div>

            {/* Filter Search */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs">
              <div className="relative max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search by student name, topic, or comment text..."
                  value={commentSearch}
                  onChange={(e) => setCommentSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Comments Table */}
            <div className="bg-white border border-slate-200/80 rounded-xl shadow-xs overflow-hidden">
              {loadingComments ? (
                <div className="py-12 text-center text-xs text-slate-400">Loading discussion threads...</div>
              ) : adminComments.length === 0 ? (
                <div className="py-12 text-center space-y-1">
                  <p className="text-sm font-semibold text-slate-700">No community discussion notes yet</p>
                  <p className="text-xs text-slate-400">Student comments will appear here as they study.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/75 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-200/80">
                      <tr>
                        <th className="px-4 py-3">Student</th>
                        <th className="px-4 py-3">Topic / Subject</th>
                        <th className="px-4 py-3">Comment Content</th>
                        <th className="px-4 py-3">Likes</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3 text-right">Moderation Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {adminComments
                        .filter((c) => {
                          if (!commentSearch.trim()) return true;
                          const q = commentSearch.toLowerCase();
                          return (
                            c.studentName.toLowerCase().includes(q) ||
                            c.topicId.toLowerCase().includes(q) ||
                            c.content.toLowerCase().includes(q)
                          );
                        })
                        .map((comment) => (
                          <tr key={comment.id} className="hover:bg-slate-50/70 transition">
                            <td className="px-4 py-3">
                              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                                <span>{comment.studentName}</span>
                                {comment.isVip && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 flex items-center gap-0.5">
                                    <Crown className="w-2.5 h-2.5 text-amber-600" />
                                    VIP
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                                {comment.studentPhoneMasked}
                              </div>
                            </td>

                            <td className="px-4 py-3">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                                {comment.level}
                              </span>
                              <div className="text-[11px] text-slate-600 mt-0.5 truncate max-w-[140px]">
                                {comment.topicId}
                              </div>
                            </td>

                            <td className="px-4 py-3">
                              <p className="text-xs text-slate-800 max-w-md line-clamp-2">
                                {comment.content}
                              </p>
                              {comment.isPinned && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 mt-1">
                                  <Pin className="w-2.5 h-2.5 text-amber-600" />
                                  Pinned
                                </span>
                              )}
                            </td>

                            <td className="px-4 py-3 font-mono font-semibold text-slate-700">
                              ❤️ {comment.likesCount}
                            </td>

                            <td className="px-4 py-3 text-slate-500 font-mono text-[11px]">
                              {new Date(comment.createdAt).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </td>

                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleTogglePinComment(comment.id, Boolean(comment.isPinned))}
                                  className={`p-1.5 rounded-lg border transition ${
                                    comment.isPinned
                                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                                      : 'border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                                  }`}
                                  title={comment.isPinned ? 'Unpin Note' : 'Pin Note to Top'}
                                >
                                  <Pin className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleDeleteComment(comment.id)}
                                  className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                                  title="Delete Note"
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

        {/* ============================================================ */}
        {/* TAB 9: WHATSAPP CHANNEL SETTINGS                             */}
        {/* ============================================================ */}
        {activeTab === 'whatsapp' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-base font-semibold text-slate-900">WhatsApp Channel Settings</h2>
                <p className="text-xs text-slate-500">
                  Configure the official WhatsApp channel link displayed to students on the homepage.
                </p>
              </div>
            </div>

            <div className="max-w-2xl bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs space-y-4">
              <form onSubmit={handleSaveWhatsAppConfig} className="space-y-4">
                {waFeedback && (
                  <div
                    className={`p-3 rounded-lg border text-xs font-medium ${
                      waFeedback.kind === 'ok'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border-rose-200'
                    }`}
                  >
                    {waFeedback.text}
                  </div>
                )}

                <div className="flex items-center gap-2 pt-1 pb-2 border-b border-slate-100">
                  <input
                    type="checkbox"
                    id="waEnabledToggle"
                    checked={waConfig.enabled}
                    onChange={(e) => setWaConfig(prev => ({ ...prev, enabled: e.target.checked }))}
                    className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                  />
                  <label htmlFor="waEnabledToggle" className="text-xs font-medium text-slate-800 cursor-pointer select-none">
                    Show WhatsApp channel banner on student homepage
                  </label>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 block">
                    WhatsApp Channel URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={waConfig.url}
                      onChange={(e) => setWaConfig(prev => ({ ...prev, url: e.target.value }))}
                      placeholder="https://whatsapp.com/channel/..."
                      className="flex-1 text-xs font-mono border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                      required
                    />
                    {waConfig.url && (
                      <button
                        type="button"
                        onClick={handleTestWhatsAppLink}
                        className="px-3 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition"
                      >
                        Test Link
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 block">
                    Headline Title
                  </label>
                  <input
                    type="text"
                    value={waConfig.title}
                    onChange={(e) => setWaConfig(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="AcademicPrep Official WhatsApp Channel"
                    className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 block">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={waConfig.description}
                    onChange={(e) => setWaConfig(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Join our official student community for daily WAEC & BECE questions..."
                    className="w-full text-xs border border-slate-300 rounded-lg p-3 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 resize-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 block">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={waConfig.buttonText}
                      onChange={(e) => setWaConfig(prev => ({ ...prev, buttonText: e.target.value }))}
                      placeholder="Follow Channel"
                      className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 block">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={waConfig.badgeText}
                      onChange={(e) => setWaConfig(prev => ({ ...prev, badgeText: e.target.value }))}
                      placeholder="Official WhatsApp Channel"
                      className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={savingWa}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-xs font-semibold rounded-lg transition shadow-xs"
                  >
                    {savingWa ? 'Saving…' : 'Save Changes'}
                  </button>
                  <button
                    type="button"
                    onClick={handleResetWhatsAppConfig}
                    className="px-3 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-medium rounded-lg transition"
                  >
                    Reset Defaults
                  </button>
                </div>
              </form>
            </div>

            {/* Scheduled Weekly Examination Broadcast Card */}
            <div className="max-w-2xl bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Scheduled Weekly Examination Broadcast
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      {OFFICIAL_SCHEDULED_EXAM.level} {OFFICIAL_SCHEDULED_EXAM.subjectName}: {OFFICIAL_SCHEDULED_EXAM.topicTitle} (Today at 7:30 PM GMT)
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  Strict Anti-Cheat Proctoring
                </span>
              </div>

              {examBroadcastFeedback && (
                <div
                  className={`p-3 rounded-lg border text-xs font-medium ${
                    examBroadcastFeedback.kind === 'ok'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border-rose-200'
                  }`}
                >
                  {examBroadcastFeedback.text}
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5 leading-relaxed font-sans">
                <p className="font-semibold text-slate-900">Official Broadcast Message Preview:</p>
                <p className="font-mono text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200 whitespace-pre-wrap">
                  📢 *ACADEMICPREP SCHEDULED WEEKLY EXAMINATION ALERT* 🔬{'\n\n'}
                  *Subject:* {OFFICIAL_SCHEDULED_EXAM.level} {OFFICIAL_SCHEDULED_EXAM.subjectName}{'\n'}
                  *Topic:* {OFFICIAL_SCHEDULED_EXAM.topicTitle}{'\n'}
                  *Time:* Today at 7:30 PM GMT Sharp!{'\n'}
                  *Structure:* {OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes} Mins Paper 1 (Objectives) + {OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes} Mins Paper 2 (Comprehension & Summary){'\n\n'}
                  ⚠️ *Strict Proctoring Rule:* Leaving the page or switching tabs will immediately terminate and submit your paper.{'\n\n'}
                  👉 *Take the exam:* https://academicprep.com/jhs/weekly-exam?mode=scheduled
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  type="button"
                  disabled={isBroadcastingExam}
                  onClick={() => handleDispatchExamBroadcast('whatsapp_server')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white text-xs font-semibold rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isBroadcastingExam ? 'Dispatching Broadcast…' : 'Send WhatsApp Broadcast to Registered Students'}</span>
                </button>

                <button
                  type="button"
                  disabled={isBroadcastingExam}
                  onClick={() => handleDispatchExamBroadcast('sms')}
                  className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition"
                >
                  Dispatch via SMS
                </button>

                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `📢 *ACADEMICPREP WEEKLY EXAM ALERT* 📖\n\n${OFFICIAL_SCHEDULED_EXAM.level} ${OFFICIAL_SCHEDULED_EXAM.subjectName}: ${OFFICIAL_SCHEDULED_EXAM.topicTitle}\nToday at 7:30 PM GMT Sharp!\n${OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes}m Objs + ${OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes}m Theory\n\nTake Exam: https://academicprep.com/jhs/weekly-exam?mode=scheduled`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg transition flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Forward Link</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 10: WEEKLY EXAMS & CANDIDATE SCOREBOARD                  */}
        {/* ============================================================ */}
        {activeTab === 'weekly_exams' && (
          <div className="space-y-6">
            {/* Tab Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base font-bold text-slate-900">
                      Weekly Examination Center & Candidate Scoreboard
                    </h2>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE DATA ({weeklyExamMetrics.totalCandidates} Candidates)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real-time candidate monitoring for registered JHS students, live Paper 1 & Paper 2 scoring, and broadcast distribution.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                {lastWeeklyExamSync && (
                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    Synced {lastWeeklyExamSync}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => loadWeeklyExamData(false)}
                  disabled={loadingWeeklyExams}
                  className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingWeeklyExams ? 'animate-spin text-blue-600' : ''}`} />
                  <span>{loadingWeeklyExams ? 'Syncing...' : 'Refresh Live'}</span>
                </button>

                <Link
                  href="/jhs/weekly-exam?mode=scheduled&admin=true"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-sm shadow-indigo-600/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Enter Examination Hall (Admin Preview Mode)</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </Link>
              </div>
            </div>

            {/* Minimal Exam Schedule & Lock Status Banner */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-50 text-amber-800 border border-amber-200/80">
                      🔒 Locked for Students until 7:30 PM GMT
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                      {OFFICIAL_SCHEDULED_EXAM.level} {OFFICIAL_SCHEDULED_EXAM.subjectName}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                      5-Min Penalty Proctoring
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {OFFICIAL_SCHEDULED_EXAM.topicTitle}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Dual paper format: {OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes} minutes Paper 1 (Objectives, {OFFICIAL_SCHEDULED_EXAM.paper1MaxMarks} marks) + {OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes} minutes Paper 2 (Comprehension & Summary, {OFFICIAL_SCHEDULED_EXAM.paper2MaxMarks} marks). Opens 7:30 PM GMT, available until 12:00 AM GMT (Midnight). Administrator has immediate unrestricted preview.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-3 sm:p-3.5 rounded-xl text-left md:text-right shrink-0 min-w-[200px] space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Scheduled Window
                  </span>
                  <span className="text-base sm:text-lg font-black font-mono text-slate-900 block">
                    7:30 PM – 12:00 AM GMT
                  </span>
                  <span className="text-[11px] text-emerald-600 block font-semibold">
                    Admin Preview: Unrestricted
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid (6 Live Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-xs">
                <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                  Total Candidates
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono mt-1 block">
                  {weeklyExamMetrics.totalCandidates}
                </span>
                <span className="text-[10px] text-slate-500">Registered roster</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-xs">
                <span className="text-[10px] font-bold uppercase text-emerald-600 block tracking-wider">
                  Completed Papers
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-600 font-mono mt-1 block">
                  {weeklyExamMetrics.completedCount}
                </span>
                <span className="text-[10px] text-slate-500">Graded submissions</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-xs">
                <span className="text-[10px] font-bold uppercase text-blue-600 block tracking-wider">
                  In-Progress Now
                </span>
                <span className="text-xl sm:text-2xl font-black text-blue-600 font-mono mt-1 block">
                  {weeklyExamMetrics.inProgressCount}
                </span>
                <span className="text-[10px] text-slate-500">Writing papers now</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-xs">
                <span className="text-[10px] font-bold uppercase text-slate-500 block tracking-wider">
                  Awaiting Entry
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-700 font-mono mt-1 block">
                  {weeklyExamMetrics.awaitingCount}
                </span>
                <span className="text-[10px] text-slate-500">Yet to take seat</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-xs">
                <span className="text-[10px] font-bold uppercase text-amber-600 block tracking-wider">
                  Average Score
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-600 font-mono mt-1 block">
                  {weeklyExamMetrics.completedCount > 0 ? `${weeklyExamMetrics.averageCompositeScore}%` : '—'}
                </span>
                <span className="text-[10px] text-slate-500">Class composite mean</span>
              </div>

              <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-xs">
                <span className="text-[10px] font-bold uppercase text-purple-600 block tracking-wider">
                  Highest Score
                </span>
                <span className="text-xl sm:text-2xl font-black text-purple-600 font-mono mt-1 block">
                  {weeklyExamMetrics.completedCount > 0 ? `${weeklyExamMetrics.highestScore}%` : '—'}
                </span>
                <span className="text-[10px] text-slate-500">Top Stanine Grade</span>
              </div>
            </div>

            {/* Row with 2 Action Centers: 5:55 PM Alert Notification & Social Media Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              
              {/* Card 1: 5:55 PM Push Notification (Starts in 5 Minutes) */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          7:25 PM Push Notification (Starts in 5 Mins)
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          Broadcast urgent countdown alert to all registered students
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                      7:25 PM GMT
                    </span>
                  </div>

                  {reminder5MinFeedback && (
                    <div
                      className={`p-3 rounded-xl border text-xs font-semibold ${
                        reminder5MinFeedback.kind === 'ok'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-rose-50 text-rose-800 border-rose-200'
                      }`}
                    >
                      {reminder5MinFeedback.text}
                    </div>
                  )}

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-900 block">
                      Preview of 7:25 PM WhatsApp Notification:
                    </span>
                    <p className="font-mono text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200 whitespace-pre-wrap leading-relaxed">
                      🚨 *ACADEMICPREP WEEKLY EXAM: 5 MINUTES TO START!* 🔬{'\n\n'}
                      *Subject:* {OFFICIAL_SCHEDULED_EXAM.level} {OFFICIAL_SCHEDULED_EXAM.subjectName}{'\n'}
                      *Topic:* {OFFICIAL_SCHEDULED_EXAM.topicTitle}{'\n'}
                      *Time:* Starting at 7:30 PM GMT SHARP (In 5 Minutes!){'\n\n'}
                      *Criteria:* {OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes} Mins Paper 1 (Objs) + {OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes} Mins Paper 2 (Comprehension & Summary){'\n'}
                      ⚠️ *Proctoring:* Leaving the window triggers a 5-minute penalty lockout!{'\n\n'}
                      👉 *Enter Hall Now:* https://academicprep.com/jhs/weekly-exam?mode=scheduled
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    disabled={isSending5MinReminder}
                    onClick={handleSend5MinReminder}
                    className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-white font-bold text-xs transition shadow-sm shadow-amber-600/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isSending5MinReminder ? 'Dispatching 5-Min Reminder…' : '🚀 Push 5-Minute Reminder to Students (WhatsApp)'}</span>
                  </button>
                </div>
              </div>

              {/* Card 2: Social Media & Broadcast Share Kit */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          Social Media & Broadcast Share Center
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          Share exam subject, topic, time, and criteria across platforms
                        </p>
                      </div>
                    </div>
                    {examShareCopied && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 animate-pulse">
                        {examShareCopied === 'text' ? 'Message Copied!' : 'Link Copied!'}
                      </span>
                    )}
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-400 block font-semibold">Subject & Level</span>
                        <span className="font-bold text-slate-800">{OFFICIAL_SCHEDULED_EXAM.subjectName} ({OFFICIAL_SCHEDULED_EXAM.level})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-semibold">Scheduled Time</span>
                        <span className="font-bold text-slate-800">Today at 7:30 PM GMT Sharp</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-slate-400 block font-semibold">Topic</span>
                        <span className="font-bold text-slate-800">{OFFICIAL_SCHEDULED_EXAM.topicTitle}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-slate-400 block font-semibold">Criteria</span>
                        <span className="text-slate-700">{OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes}m Objs ({OFFICIAL_SCHEDULED_EXAM.paper1MaxMarks}m) + {OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes}m Theory ({OFFICIAL_SCHEDULED_EXAM.paper2MaxMarks}m) • 5-Min Tab-Switch Lockout Rule</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Share Buttons */}
                <div className="space-y-2 pt-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => handleShareWeeklyExam('whatsapp')}
                      className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShareWeeklyExam('facebook')}
                      className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
                    >
                      <span>Facebook</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShareWeeklyExam('twitter')}
                      className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
                    >
                      <span>X (Twitter)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShareWeeklyExam('telegram')}
                      className="py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
                    >
                      <span>Telegram</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleCopyWeeklyExamText}
                      className="py-2 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Formatted Criteria</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyWeeklyExamLink}
                      className="py-2 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Direct Exam Link</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Candidates & Individual Marks Scoreboard */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>Candidate Roster & Individual Marks</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                      {weeklyExamCandidates.length} Candidates
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Live breakdown of Paper 1 objectives, Paper 2 WAEC theory marks, composite percentage, and stanine grades.
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={weeklyExamSearch}
                      onChange={(e) => {
                        setWeeklyExamSearch(e.target.value);
                        setWeeklyExamPage(1);
                      }}
                      placeholder="Search candidate or phone…"
                      className="pl-8 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg w-44 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <select
                    value={weeklyExamLevelFilter}
                    onChange={(e: any) => {
                      setWeeklyExamLevelFilter(e.target.value);
                      setWeeklyExamPage(1);
                    }}
                    className="py-1.5 px-2.5 text-xs border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-hidden"
                  >
                    <option value="ALL">All Levels</option>
                    <option value="JHS 3">JHS 3 Only</option>
                    <option value="JHS 2">JHS 2 Only</option>
                    <option value="JHS 1">JHS 1 Only</option>
                  </select>

                  <select
                    value={weeklyExamStatusFilter}
                    onChange={(e: any) => {
                      setWeeklyExamStatusFilter(e.target.value);
                      setWeeklyExamPage(1);
                    }}
                    className="py-1.5 px-2.5 text-xs border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-hidden"
                  >
                    <option value="ALL">All Statuses ({weeklyExamCandidates.length})</option>
                    <option value="completed">Completed ({weeklyExamMetrics.completedCount})</option>
                    <option value="in_progress">In-Progress ({weeklyExamMetrics.inProgressCount})</option>
                    <option value="not_started">Awaiting ({weeklyExamMetrics.awaitingCount})</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                {(() => {
                  const filtered = weeklyExamCandidates.filter((c) => {
                    if (weeklyExamStatusFilter !== 'ALL' && c.status !== weeklyExamStatusFilter) return false;
                    if (weeklyExamLevelFilter !== 'ALL' && c.level !== weeklyExamLevelFilter) return false;
                    if (weeklyExamSearch) {
                      const q = weeklyExamSearch.toLowerCase();
                      return (
                        (c.studentName || '').toLowerCase().includes(q) ||
                        (c.studentPhone || '').toLowerCase().includes(q)
                      );
                    }
                    return true;
                  });

                  const pageSize = 25;
                  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
                  const currentPage = Math.min(weeklyExamPage, totalPages);
                  const startIndex = (currentPage - 1) * pageSize;
                  const currentSlice = filtered.slice(startIndex, startIndex + pageSize);

                  return (
                    <div className="space-y-4">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/70">
                            <th className="py-2.5 px-3">Candidate</th>
                            <th className="py-2.5 px-3">Phone</th>
                            <th className="py-2.5 px-3">Level</th>
                            <th className="py-2.5 px-3 text-center">Status</th>
                            <th className="py-2.5 px-3 text-right">Paper 1 (Objs / 40)</th>
                            <th className="py-2.5 px-3 text-right">Paper 2 (Theory / 60)</th>
                            <th className="py-2.5 px-3 text-right">Composite %</th>
                            <th className="py-2.5 px-3">Stanine Grade</th>
                            <th className="py-2.5 px-3 text-right">Time Spent</th>
                            <th className="py-2.5 px-3 text-right">Action / Submitted</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {currentSlice.map((c) => {
                            const isDone = c.status === 'completed';
                            const isInProg = c.status === 'in_progress';

                            const inviteText = `📢 *ACADEMICPREP WEEKLY EXAM INVITATION* 🔬\n\n` +
                              `Hello ${c.studentName || 'Student'}! The official timed JHS 3 Science Examination is active today (available until 12:00 AM GMT Midnight).\n\n` +
                              `👉 *Take Your Seat Now:* https://academicprep.com/jhs/weekly-exam?mode=scheduled\n\n` +
                              `Good luck! 🏆`;
                            const waInviteUrl = `https://api.whatsapp.com/send?phone=233${(c.studentPhone || '').replace(/^0/, '')}&text=${encodeURIComponent(inviteText)}`;

                            return (
                              <tr key={c.id} className="hover:bg-slate-50/60 transition">
                                <td className="py-3 px-3 font-semibold text-slate-900">
                                  {c.studentName || 'Candidate'}
                                </td>
                                <td className="py-3 px-3 font-mono text-slate-600 text-[11px]">
                                  {c.studentPhone || 'N/A'}
                                </td>
                                <td className="py-3 px-3 font-medium text-slate-700">
                                  {c.level || 'JHS 3'}
                                </td>
                                <td className="py-3 px-3 text-center">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase inline-flex items-center gap-1 ${
                                      isDone
                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                        : isInProg
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                                    }`}
                                  >
                                    {isInProg && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}
                                    {isDone ? 'Completed' : isInProg ? 'Writing Paper' : 'Awaiting Entry'}
                                  </span>
                                </td>
                                <td className="py-3 px-3 text-right font-mono font-bold text-slate-800">
                                  {isDone ? (
                                    `${c.paper1ScoreMarks} / 40 (${c.paper1Percentage}%)`
                                  ) : isInProg ? (
                                    `${c.paper1ScoreMarks || 0} / 40`
                                  ) : (
                                    <span className="text-slate-400 font-normal">—</span>
                                  )}
                                </td>
                                <td className="py-3 px-3 text-right font-mono font-bold text-slate-800">
                                  {isDone ? (
                                    `${c.paper2ScoreMarks} / 60 (${c.paper2Percentage}%)`
                                  ) : isInProg ? (
                                    <span className="text-blue-600 font-normal">Writing...</span>
                                  ) : (
                                    <span className="text-slate-400 font-normal">—</span>
                                  )}
                                </td>
                                <td className="py-3 px-3 text-right font-mono font-black text-sm">
                                  {isDone && typeof c.compositePercentage === 'number' ? (
                                    <span
                                      className={
                                        c.compositePercentage >= 75
                                          ? 'text-emerald-600'
                                          : c.compositePercentage >= 50
                                          ? 'text-blue-600'
                                          : 'text-amber-600'
                                      }
                                    >
                                      {c.compositePercentage}%
                                    </span>
                                  ) : (
                                    <span className="text-slate-400 font-normal text-xs">—</span>
                                  )}
                                </td>
                                <td className="py-3 px-3">
                                  {isDone ? (
                                    <>
                                      <span className="font-semibold text-slate-900 block text-[11px]">
                                        {c.gradeRemark}
                                      </span>
                                      <span className="text-[10px] text-slate-400 font-mono">
                                        Stanine {c.stanineGrade}
                                      </span>
                                    </>
                                  ) : isInProg ? (
                                    <span className="text-blue-600 text-[11px] font-medium">In Session</span>
                                  ) : (
                                    <span className="text-slate-400 text-[11px]">Pending Entry</span>
                                  )}
                                </td>
                                <td className="py-3 px-3 text-right font-mono text-[11px] text-slate-600">
                                  {isDone || isInProg ? (
                                    `${Math.floor((c.timeSpentSeconds || 0) / 60)}m ${(c.timeSpentSeconds || 0) % 60}s`
                                  ) : (
                                    <span className="text-slate-400">—</span>
                                  )}
                                </td>
                                <td className="py-3 px-3 text-right font-mono text-[11px] text-slate-400 whitespace-nowrap">
                                  {isDone ? (
                                    c.completedAt
                                      ? new Date(c.completedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                      : 'Submitted'
                                  ) : isInProg ? (
                                    <span className="text-blue-600 font-semibold">Active Now</span>
                                  ) : c.studentPhone && c.studentPhone !== 'N/A' ? (
                                    <a
                                      href={waInviteUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-[10px] font-semibold transition"
                                      title="Send direct WhatsApp exam link to student"
                                    >
                                      <MessageCircle className="w-3 h-3" />
                                      <span>Remind</span>
                                    </a>
                                  ) : (
                                    'Awaiting Entry'
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                      {/* Pagination Bar */}
                      {filtered.length > 0 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
                          <span>
                            Showing <strong className="text-slate-800">{startIndex + 1}</strong> to{' '}
                            <strong className="text-slate-800">{Math.min(startIndex + pageSize, filtered.length)}</strong> of{' '}
                            <strong className="text-slate-800">{filtered.length}</strong> candidates
                          </span>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              disabled={currentPage <= 1}
                              onClick={() => setWeeklyExamPage(p => Math.max(1, p - 1))}
                              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 text-slate-700 font-medium transition cursor-pointer"
                            >
                              Previous
                            </button>
                            <span className="font-mono text-slate-700 px-1 font-semibold">
                              {currentPage} / {totalPages}
                            </span>
                            <button
                              type="button"
                              disabled={currentPage >= totalPages}
                              onClick={() => setWeeklyExamPage(p => Math.min(totalPages, p + 1))}
                              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 text-slate-700 font-medium transition cursor-pointer"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {filtered.length === 0 && (
                        <div className="py-12 text-center text-slate-400 space-y-2">
                          <FlaskConical className="w-8 h-8 mx-auto text-slate-300" />
                          <p className="text-xs font-semibold">No candidates match your filter.</p>
                          <p className="text-[11px]">
                            Try clearing your search query or selecting a different status.
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 11: UNIVERSITY SLIDES & COLLABORATOR DISPATCH           */}
        {/* ============================================================ */}
        {activeTab === 'university_slides' && (
          <div className="space-y-6">
            {/* Header & Quick Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">
                    University Slides Repository & Collaborator Dispatch
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                    {universitySlides.length} Slide Deck{universitySlides.length === 1 ? '' : 's'} Published
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Publish official university lecture slides directly or issue special collaborator upload links to lecturers and course reps.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/university"
                  target="_blank"
                  className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>View Student Portal</span>
                </Link>
                <button
                  onClick={loadUniversitySlides}
                  disabled={loadingUniSlides}
                  className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium flex items-center gap-1.5 shadow-2xs transition disabled:opacity-50"
                  title="Refresh slides list"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-slate-500 ${loadingUniSlides ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* Special Collaborator Dispatch Link Box */}
            <div className="bg-gradient-to-r from-blue-50/60 via-slate-50 to-indigo-50/40 border border-blue-200/80 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <h3 className="text-sm font-bold text-slate-900">Collaborator Upload Portal Link</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      Restricted Access
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 max-w-2xl">
                    Share this unique invitation link with faculty, teaching assistants, or student reps. Collaborators can upload slides without viewing student records, revenue, or admin controls.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRegenerateCollaboratorLink}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-medium transition shadow-2xs flex items-center gap-1.5"
                    title="Rotate collaborator security token"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
                    <span>Regenerate Link</span>
                  </button>
                  {collaboratorLink && (
                    <a
                      href={collaboratorLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-medium transition shadow-2xs flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      <span>Preview Portal</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-2 shadow-2xs">
                <KeyRound className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
                <input
                  type="text"
                  readOnly
                  value={collaboratorLink || 'Loading collaborator invite link...'}
                  className="flex-1 text-xs font-mono text-slate-700 bg-transparent outline-none truncate"
                />
                <button
                  onClick={handleCopyCollabLink}
                  disabled={!collaboratorLink}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition shrink-0"
                >
                  {collabLinkCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white" />
                      <span>Copy Collaborator Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Admin Slide Upload Form */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <FilePlus className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Upload Official University Slide Deck</h3>
                    <p className="text-[11px] text-slate-500">Slides will appear on the student portal and be indexed for the AI Study Studio.</p>
                  </div>
                </div>
              </div>

              {uniUploadFeedback && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    uniUploadFeedback.kind === 'ok'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {uniUploadFeedback.kind === 'ok' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span>{uniUploadFeedback.text}</span>
                </div>
              )}

              <form onSubmit={handleAdminUploadUniSlide} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                      Course Code <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. DCIT 101 or UGBS 201"
                      value={uniUploadCode}
                      onChange={e => setUniUploadCode(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 font-mono placeholder:font-sans focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                      Slide / Lecture Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Introduction to Computer Architecture"
                      value={uniUploadTitle}
                      onChange={e => setUniUploadTitle(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                      Official Course Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Introduction to Computer Science"
                      value={uniUploadCourseTitle}
                      onChange={e => setUniUploadCourseTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                      Institution / University
                    </label>
                    <select
                      value={uniUploadUniversity}
                      onChange={e => setUniUploadUniversity(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-blue-500"
                    >
                      {GHANAIAN_UNIVERSITIES.map(u => (
                        <option key={u} value={u}>{u}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                      Faculty / Department
                    </label>
                    <select
                      value={uniUploadDepartment}
                      onChange={e => setUniUploadDepartment(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-blue-500"
                    >
                      {UNIVERSITY_DEPARTMENTS.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                      Academic Level
                    </label>
                    <select
                      value={uniUploadLevel}
                      onChange={e => setUniUploadLevel(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-blue-500"
                    >
                      {UNIVERSITY_LEVELS.map(l => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                      Semester
                    </label>
                    <select
                      value={uniUploadSemester}
                      onChange={e => setUniUploadSemester(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-blue-500"
                    >
                      {UNIVERSITY_SEMESTERS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                    Topics Covered & Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of lecture topics, chapters, or syllabus references..."
                    value={uniUploadDescription}
                    onChange={e => setUniUploadDescription(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-3">
                    <input
                      ref={uniFileInputRef}
                      type="file"
                      accept=".pdf,application/pdf"
                      required
                      onChange={e => setUniUploadFile(e.target.files?.[0] || null)}
                      className="text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                    />
                    {uniUploadFile && (
                      <span className="text-[11px] text-slate-500 font-mono">
                        ({(uniUploadFile.size / (1024 * 1024)).toFixed(2)} MB)
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={uniUploading || !uniUploadFile || !uniUploadCode.trim() || !uniUploadTitle.trim()}
                    className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold shadow-xs flex items-center gap-2 transition"
                  >
                    {uniUploading ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Publishing Slide...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-3.5 h-3.5" />
                        <span>Publish Slide to Student Portal</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Slide Catalog Table & Management */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Published Slide Repository</h3>
                    <p className="text-[11px] text-slate-500">
                      Manage, preview, and moderate all active course slide decks.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Filter by course, title, or uni..."
                      value={uniSlideFilter}
                      onChange={e => setUniSlideFilter(e.target.value)}
                      className="pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 w-48 sm:w-64 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  {uniSlideFilter && (
                    <button
                      onClick={() => setUniSlideFilter('')}
                      className="text-xs text-slate-400 hover:text-slate-600 px-1"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {loadingUniSlides ? (
                <div className="py-16 text-center text-xs text-slate-400 space-y-2">
                  <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p>Loading slides...</p>
                </div>
              ) : (() => {
                const q = uniSlideFilter.trim().toLowerCase();
                const filtered = universitySlides.filter(s => {
                  if (!q) return true;
                  return (
                    s.courseCode.toLowerCase().includes(q) ||
                    s.title.toLowerCase().includes(q) ||
                    s.university.toLowerCase().includes(q) ||
                    (s.department && s.department.toLowerCase().includes(q)) ||
                    (s.level && s.level.toLowerCase().includes(q))
                  );
                });

                if (filtered.length === 0) {
                  return (
                    <div className="py-16 text-center border border-dashed border-slate-200 rounded-xl p-8 space-y-2">
                      <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
                      <p className="text-xs font-semibold text-slate-800">
                        {universitySlides.length === 0
                          ? 'No university slides published yet.'
                          : 'No slides match your search filter.'}
                      </p>
                      <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                        {universitySlides.length === 0
                          ? 'Use the upload form above or share the collaborator link with course reps to publish the first lecture slide.'
                          : 'Try searching with a different course code, university name, or keyword.'}
                      </p>
                    </div>
                  );
                }

                return (
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[10px] tracking-wider">
                          <th className="py-3 px-4">Course</th>
                          <th className="py-3 px-4">Title & Details</th>
                          <th className="py-3 px-4">Institution & Level</th>
                          <th className="py-3 px-4">Uploader</th>
                          <th className="py-3 px-4">File Size</th>
                          <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filtered.map(slide => (
                          <tr key={slide.id} className="hover:bg-slate-50/70 transition">
                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 inline-block">
                                {slide.courseCode}
                              </span>
                            </td>
                            <td className="py-3 px-4 min-w-[200px]">
                              <p className="font-semibold text-slate-900 leading-snug">{slide.title}</p>
                              {slide.description && (
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{slide.description}</p>
                              )}
                            </td>
                            <td className="py-3 px-4 whitespace-nowrap text-[11px] text-slate-600">
                              <div className="font-medium text-slate-800">{slide.university}</div>
                              <div className="text-slate-400">{slide.level} • {slide.semester}</div>
                            </td>
                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700">
                                <UserCheck className="w-3 h-3 text-slate-500" />
                                {slide.uploadedBy || 'Admin'}
                              </span>
                            </td>
                            <td className="py-3 px-4 whitespace-nowrap font-mono text-[11px] text-slate-500">
                              {slide.fileSizeBytes ? `${(slide.fileSizeBytes / (1024 * 1024)).toFixed(1)} MB` : 'PDF'}
                            </td>
                            <td className="py-3 px-4 whitespace-nowrap text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                {slide.fileUrl && (
                                  <a
                                    href={slide.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
                                    title="View PDF"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                )}
                                <Link
                                  href={`/university?loadSlideId=${encodeURIComponent(slide.id)}`}
                                  target="_blank"
                                  className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-[11px] transition"
                                  title="Open in Study Studio"
                                >
                                  Study Studio
                                </Link>
                                <button
                                  onClick={() => handleDeleteUniSlide(slide.id, slide.title)}
                                  className="p-1.5 rounded-lg border border-slate-200 hover:bg-rose-50 hover:border-rose-200 text-slate-400 hover:text-rose-600 transition"
                                  title="Delete slide"
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
                );
              })()}
            </div>
          </div>
        )}

      </main>

      {/* Security Credentials Management Modal */}
      {showSecurityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-xl space-y-5">
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
                  className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-xs font-bold transition shadow-xs"
                >
                  {isSavingKeys ? 'Saving…' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Multi-Channel Student Broadcast Modal (SMS & WhatsApp) */}
      <BroadcastModal
        isOpen={isBroadcastModalOpen}
        onClose={() => {
          setIsBroadcastModalOpen(false);
          setBroadcastPost(null);
        }}
        post={broadcastPost}
      />
    </div>
  );
}

