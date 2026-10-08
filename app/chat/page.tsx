'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { LessonComment } from '@/lib/commentsTypes';
import { 
  MessageSquare, 
  Send, 
  Heart, 
  Crown, 
  ShieldCheck, 
  Sparkles, 
  User, 
  Clock, 
  AlertCircle,
  CheckCircle2,
  Users,
  Search,
  Filter,
  Flame,
  ArrowRight,
  BookOpen,
  Share2,
  RefreshCw,
  MessageCircle
} from 'lucide-react';

const CHAT_ROOMS = [
  { id: 'all', name: 'General Student Lounge', description: 'Chat with all BECE & WASSCE students across Ghana', icon: '🌍' },
  { id: 'jhs', name: 'JHS / BECE Candidates', description: 'JHS 1, 2, & 3 exam preparation and mock discussions', icon: '📘' },
  { id: 'shs', name: 'SHS / WASSCE Candidates', description: 'Core & Elective syllabus discussions for Senior High', icon: '🎓' },
  { id: 'math', name: 'Maths & Science Clinic', description: 'Tackle tricky maths calculations and science experiments', icon: '📐' },
  { id: 'tips', name: 'Study Hacks & Exam Strategies', description: 'Memory tricks, timetable schedules, and time management', icon: '💡' },
];

export default function StudentCommunityChatPage() {
  const { student } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [comments, setComments] = useState<LessonComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeRoom, setActiveRoom] = useState('all');
  const [content, setContent] = useState('');
  const [guestName, setGuestName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: 'ok' | 'bad'; msg: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadMessages = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      const res = await fetch('/api/comments');
      const data = await res.json();
      if (data?.success && Array.isArray(data.comments)) {
        setComments(data.comments);
      }
    } catch (err) {
      console.warn('Failed to load community chat:', err);
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
    // Auto-refresh chat feed every 15 seconds
    const interval = setInterval(() => {
      loadMessages(true);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    setFeedback(null);

    const roomMeta = CHAT_ROOMS.find((r) => r.id === activeRoom) || CHAT_ROOMS[0];

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          topicId: `room-${activeRoom}`,
          subjectId: activeRoom,
          level: student?.currentLevel || (activeRoom === 'shs' ? 'SHS' : 'JHS'),
          content: content.trim(),
          authorName: student ? student.fullName : guestName.trim() || 'Student Scholar',
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setFeedback({ kind: 'bad', msg: data.error || 'Failed to post message.' });
      } else {
        setContent('');
        if (data.comment) {
          setComments((prev) => [data.comment, ...prev]);
        }
      }
    } catch (err: any) {
      setFeedback({ kind: 'bad', msg: err?.message || 'Network error sending message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = async (commentId: string) => {
    const studentIdentifier = student?.id || (typeof window !== 'undefined' ? localStorage.getItem('guest_student_id') || 'guest' : 'guest');
    if (!student && typeof window !== 'undefined' && !localStorage.getItem('guest_student_id')) {
      localStorage.setItem('guest_student_id', `guest-${Date.now()}`);
    }

    setComments((prev) =>
      prev.map((c) => {
        if (c.id === commentId) {
          const already = c.likedByStudents?.includes(studentIdentifier);
          return {
            ...c,
            likesCount: already ? Math.max(0, c.likesCount - 1) : c.likesCount + 1,
            likedByStudents: already
              ? c.likedByStudents.filter((id) => id !== studentIdentifier)
              : [...(c.likedByStudents || []), studentIdentifier],
          };
        }
        return c;
      })
    );

    try {
      await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'like',
          commentId,
          studentId: studentIdentifier,
        }),
      });
    } catch (err) {
      console.warn('Like sync error:', err);
    }
  };

  const formatTimeAgo = (isoString: string) => {
    if (!mounted) return 'Recently';
    const diffSeconds = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
    if (diffSeconds < 60) return 'Just now';
    const mins = Math.floor(diffSeconds / 60);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(diffSeconds / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  // Filter messages based on active room and search query
  const filteredMessages = comments.filter((c) => {
    const matchesSearch = !searchQuery.trim() || 
      c.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.studentName.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeRoom === 'all') return matchesSearch;
    if (activeRoom === 'jhs') return matchesSearch && (c.topicId.includes('jhs') || c.level.includes('JHS'));
    if (activeRoom === 'shs') return matchesSearch && (c.topicId.includes('shs') || c.level.includes('SHS'));
    if (activeRoom === 'math') return matchesSearch && (c.subjectId.includes('math') || c.subjectId.includes('sci'));
    if (activeRoom === 'tips') return matchesSearch && (c.topicId.includes('tips') || c.content.toLowerCase().includes('tip') || c.content.toLowerCase().includes('trick'));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Top Hero Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold">
                <Users className="w-3.5 h-3.5" />
                <span>Live Student Study Community</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                AcademicPrep Study Lounge
              </h1>
              <p className="text-xs sm:text-sm text-blue-100/90 max-w-2xl leading-relaxed">
                Connect with thousands of JHS and SHS students across Ghana. Share what you studied today, discuss exam questions, ask tutors, and keep each other accountable.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => loadMessages()}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition flex items-center gap-1.5 backdrop-blur-xs cursor-pointer border border-white/20"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh Live Feed</span>
              </button>

              <Link
                href="/jhs"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-blue-500/30"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Go to Curriculum</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Grid: Channels Sidebar + Chat Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left Sidebar: Channels & Guidelines */}
          <div className="lg:col-span-1 space-y-4">
            {/* Rooms List */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2 pb-1">
                Study Channels
              </h2>
              <div className="space-y-1">
                {CHAT_ROOMS.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-2.5 cursor-pointer ${
                      activeRoom === room.id
                        ? 'bg-blue-50 text-blue-900 border border-blue-200 font-bold shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className="text-base">{room.icon}</span>
                    <div className="truncate flex-1">
                      <div className="text-xs truncate">{room.name}</div>
                      <div className="text-[10px] text-slate-400 font-normal truncate mt-0.5">
                        {room.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Community Standards Box */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-4 text-xs space-y-2 text-amber-950">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Community Standards</span>
              </div>
              <ul className="space-y-1 text-[11px] text-amber-900/90 pl-4 list-disc leading-relaxed">
                <li>Keep discussions strictly educational.</li>
                <li>Respect fellow candidates and teachers.</li>
                <li>No spamming, swearing, or promoting leaks.</li>
                <li>Help others solve tricky questions!</li>
              </ul>
            </div>
          </div>

          {/* Center / Right: Chat Feed & Input */}
          <div className="lg:col-span-3 space-y-4">

            {/* Chat Room Top Bar */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>{CHAT_ROOMS.find((r) => r.id === activeRoom)?.name}</span>
                </h2>
                <p className="text-xs text-slate-500">
                  {CHAT_ROOMS.find((r) => r.id === activeRoom)?.description}
                </p>
              </div>

              {/* Search */}
              <div className="relative max-w-xs w-full">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message Composer Box */}
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs space-y-3">
              {!student && (
                <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                  <User className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter your name (e.g. Samuel Adjei)"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full sm:max-w-xs px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="text-[11px] text-slate-400 hidden sm:inline">• Log in to show your VIP badge</span>
                </div>
              )}

              <div className="relative">
                <textarea
                  rows={2}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Share a study tip, ask a difficult past question, or encourage your fellow candidates..."
                  maxLength={500}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder:text-slate-400 resize-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400">
                  {content.length}/500 chars
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting || !content.trim()}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>

              {feedback && (
                <div
                  className={`p-2.5 rounded-xl text-xs font-medium flex items-center gap-2 ${
                    feedback.kind === 'ok'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {feedback.kind === 'ok' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span>{feedback.msg}</span>
                </div>
              )}
            </form>

            {/* Message Feed */}
            <div className="space-y-3">
              {loading ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-xs text-slate-400">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-300 border-t-blue-600 mx-auto mb-2"></div>
                  <span>Connecting to study lounge feed...</span>
                </div>
              ) : filteredMessages.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-2">
                  <MessageSquare className="w-8 h-8 text-slate-300 mx-auto" />
                  <h3 className="text-sm font-bold text-slate-700">No messages in this channel yet</h3>
                  <p className="text-xs text-slate-400">Drop a study question or tip to start the conversation!</p>
                </div>
              ) : (
                filteredMessages.map((msg) => {
                  const studentIdentifier = student?.id || (typeof window !== 'undefined' ? localStorage.getItem('guest_student_id') || 'guest' : 'guest');
                  const hasLiked = msg.likedByStudents?.includes(studentIdentifier);

                  return (
                    <div
                      key={msg.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        msg.isPinned
                          ? 'bg-amber-50/50 border-amber-200/90 shadow-2xs'
                          : 'bg-white border-slate-200/80 shadow-2xs hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-slate-900">
                              {msg.studentName}
                            </span>

                            {msg.isTeacherReply && (
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3 text-blue-600" />
                                <span>{msg.teacherTitle || 'Instructor'}</span>
                              </span>
                            )}

                            {msg.isVip && !msg.isTeacherReply && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 flex items-center gap-1">
                                <Crown className="w-3 h-3 text-amber-600" />
                                <span>VIP Scholar</span>
                              </span>
                            )}

                            <span className="text-[10px] text-slate-400 font-mono">
                              {msg.studentPhoneMasked}
                            </span>

                            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                              {msg.level}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1 whitespace-pre-line">
                            {msg.content}
                          </p>
                        </div>

                        {/* Like Button */}
                        <button
                          type="button"
                          onClick={() => handleLike(msg.id)}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                            hasLiked
                              ? 'bg-rose-50 text-rose-600 border border-rose-200'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                          }`}
                          title="Helpful message"
                        >
                          <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                          <span>{msg.likesCount}</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-100 mt-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatTimeAgo(msg.createdAt)}</span>
                        </span>

                        <span className="font-mono text-[10px] text-slate-400">
                          {msg.topicId.startsWith('room-') ? msg.topicId.replace('room-', '#') : `#${msg.topicId}`}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
