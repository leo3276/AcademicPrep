'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/authContext';
import { LessonComment } from '@/lib/commentsTypes';
import { 
  MessageSquare, 
  Send, 
  Heart, 
  Crown, 
  ShieldCheck, 
  Pin, 
  Sparkles, 
  User, 
  Clock, 
  AlertCircle,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface LessonCommentsSectionProps {
  topicId: string;
  topicTitle: string;
  subjectId: string;
  level: string;
}

export default function LessonCommentsSection({
  topicId,
  topicTitle,
  subjectId,
  level,
}: LessonCommentsSectionProps) {
  const { student } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [comments, setComments] = useState<LessonComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');
  const [guestName, setGuestName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: 'ok' | 'bad'; msg: string } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load comments on mount & topic change
  useEffect(() => {
    let isCurrent = true;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`/api/comments?topicId=${encodeURIComponent(topicId)}`);
        const data = await res.json();
        if (isCurrent && data.success && Array.isArray(data.comments)) {
          setComments(data.comments);
        }
      } catch (err) {
        console.warn('Failed to load topic comments:', err);
      } finally {
        if (isCurrent) setLoading(false);
      }
    }
    load();
    return () => {
      isCurrent = false;
    };
  }, [topicId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          topicId,
          subjectId,
          level,
          content: content.trim(),
          authorName: student ? student.fullName : guestName.trim() || 'Student Scholar',
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setFeedback({ kind: 'bad', msg: data.error || 'Failed to post your note.' });
      } else {
        setFeedback({ kind: 'ok', msg: 'Your study note was posted successfully!' });
        setContent('');
        if (data.comment) {
          setComments((prev) => [data.comment, ...prev]);
        }
      }
    } catch (err: any) {
      setFeedback({ kind: 'bad', msg: err?.message || 'Network error submitting comment.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = async (commentId: string) => {
    const studentIdentifier = student?.id || (typeof window !== 'undefined' ? localStorage.getItem('guest_student_id') || 'guest' : 'guest');
    if (!student && typeof window !== 'undefined' && !localStorage.getItem('guest_student_id')) {
      localStorage.setItem('guest_student_id', `guest-${Date.now()}`);
    }

    // Optimistic UI update
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
      console.warn('Like action sync error:', err);
    }
  };

  const formatTimeAgo = (isoString: string) => {
    if (!mounted) return 'Recently';
    const diffSeconds = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
    if (diffSeconds < 60) return 'Just now';
    const mins = Math.floor(diffSeconds / 60);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Student Study Notes &amp; Discussion
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Share what you understood, ask questions, or drop helpful revision tips on <b>{topicTitle}</b>.
          </p>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            {comments.length} {comments.length === 1 ? 'Note' : 'Notes'}
          </span>
        </div>
      </div>

      {/* Input Box */}
      <form onSubmit={handleSubmit} className="space-y-3 bg-slate-50/70 p-4 rounded-2xl border border-slate-200/70">
        {!student && (
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Your Name (e.g. Ama Mensah)"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full sm:max-w-xs px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <span className="text-[11px] text-slate-400 hidden sm:inline">• Log in to show your VIP badge</span>
          </div>
        )}

        <div className="relative">
          <textarea
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What key concept did you learn from this lesson? Got an exam memory trick or question? Share it with other students..."
            maxLength={500}
            className="w-full px-4 py-3 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder:text-slate-400 resize-none"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] text-slate-400">
            {content.length}/500 characters • Keep discussions respectful and educational
          </span>

          <button
            type="submit"
            disabled={isSubmitting || !content.trim()}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? 'Posting...' : 'Post Study Note'}</span>
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

      {/* Comments List */}
      <div className="space-y-3.5 pt-2">
        {loading ? (
          <div className="py-8 text-center text-xs text-slate-400">
            Loading community notes...
          </div>
        ) : comments.length === 0 ? (
          <div className="py-8 text-center space-y-1.5 border border-dashed border-slate-200 rounded-2xl">
            <Sparkles className="w-6 h-6 text-amber-500 mx-auto" />
            <p className="text-xs font-semibold text-slate-700">Be the first student to leave a study tip!</p>
            <p className="text-[11px] text-slate-400">Share what helped you understand this topic best.</p>
          </div>
        ) : (
          comments.map((comment) => {
            const studentIdentifier = student?.id || (typeof window !== 'undefined' ? localStorage.getItem('guest_student_id') || 'guest' : 'guest');
            const hasLiked = comment.likedByStudents?.includes(studentIdentifier);

            return (
              <div
                key={comment.id}
                className={`p-4 rounded-2xl border transition-all ${
                  comment.isPinned
                    ? 'bg-amber-50/40 border-amber-200/80 ring-1 ring-amber-100'
                    : 'bg-white border-slate-100 hover:border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-900">
                        {comment.studentName}
                      </span>

                      {comment.isTeacherReply && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-blue-600" />
                          <span>{comment.teacherTitle || 'Instructor'}</span>
                        </span>
                      )}

                      {comment.isVip && !comment.isTeacherReply && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 flex items-center gap-1">
                          <Crown className="w-3 h-3 text-amber-600" />
                          <span>VIP Scholar</span>
                        </span>
                      )}

                      <span className="text-[10px] text-slate-400 font-mono">
                        {comment.studentPhoneMasked}
                      </span>

                      {comment.isPinned && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Pin className="w-3 h-3 text-amber-600" />
                          <span>Pinned Note</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                      {comment.content}
                    </p>
                  </div>

                  {/* Upvote Button */}
                  <button
                    type="button"
                    onClick={() => handleLike(comment.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                      hasLiked
                        ? 'bg-rose-50 text-rose-600 border border-rose-200'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                    title="Mark note as helpful"
                  >
                    <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{comment.likesCount}</span>
                  </button>
                </div>

                <div className="flex items-center gap-3 text-[10px] text-slate-400 pt-2 border-t border-slate-100/60 mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatTimeAgo(comment.createdAt)}</span>
                  </span>
                  <span>•</span>
                  <span>Topic: {comment.level}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
