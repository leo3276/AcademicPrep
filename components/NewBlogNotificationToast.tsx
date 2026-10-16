'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost, fetchBlogPosts } from '@/lib/blogStore';
import { Sparkles, X, ArrowRight, Clock, BookOpen } from 'lucide-react';

const LAST_DISMISSED_BLOG_KEY = 'academicprep_dismissed_blog_id';

interface NewBlogNotificationToastProps {
  initialPosts?: BlogPost[];
}

export default function NewBlogNotificationToast({ initialPosts }: NewBlogNotificationToastProps) {
  const [latestPost, setLatestPost] = useState<BlogPost | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function checkLatestPost() {
      try {
        let posts = initialPosts;
        if (!posts || posts.length === 0) {
          posts = await fetchBlogPosts();
        }

        if (!posts || posts.length === 0 || !isMounted) return;

        // Sort posts descending by publication date
        const sorted = [...posts].sort((a, b) => {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });

        const newest = sorted[0];
        if (!newest) return;

        // Check if user has already dismissed this specific post
        const dismissedId = localStorage.getItem(LAST_DISMISSED_BLOG_KEY);
        if (dismissedId === newest.id) {
          return;
        }

        // Check if tour prompt is currently active for first-time visitors
        // Never clash or overlap with the tour prompt!
        const tourDismissed = localStorage.getItem('academicprep_tour_prompt_dismissed');
        const tourCompleted = localStorage.getItem('academicprep_account_tour_completed');
        if (!tourDismissed && !tourCompleted) {
          return;
        }

        // Show toast with smooth 2.5s entrance delay
        setLatestPost(newest);
        const timer = setTimeout(() => {
          if (isMounted) setIsVisible(true);
        }, 2500);

        return () => clearTimeout(timer);
      } catch (err) {
        console.warn('NewBlogNotificationToast check error:', err);
      }
    }

    checkLatestPost();

    // Listen for tour dismissal event so blog toast can appear afterwards if appropriate
    const handleTourDismissed = () => {
      setTimeout(() => {
        if (isMounted) checkLatestPost();
      }, 3000);
    };

    window.addEventListener('academicprep_tour_dismissed', handleTourDismissed);

    return () => {
      isMounted = false;
      window.removeEventListener('academicprep_tour_dismissed', handleTourDismissed);
    };
  }, [initialPosts]);

  if (!latestPost || !isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(LAST_DISMISSED_BLOG_KEY, latestPost.id);
    } catch {}
  };

  const handleRead = () => {
    try {
      localStorage.setItem(LAST_DISMISSED_BLOG_KEY, latestPost.id);
    } catch {}
    setIsVisible(false);
  };

  return (
    <aside
      aria-label="New blog post notification"
      className="fixed bottom-5 right-4 sm:right-6 z-40 max-w-sm sm:max-w-md w-[calc(100vw-32px)] animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto"
    >
      <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-4.5 border border-slate-200 shadow-md relative overflow-hidden group">
        <div className="flex items-start justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-2.5 h-2.5 text-amber-600" />
              New Study Guide
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {latestPost.category}
            </span>
          </div>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Article title & details */}
        <div className="mt-2.5 space-y-1 relative z-10">
          <Link
            href={`/blog/${latestPost.id}`}
            onClick={handleRead}
            className="block font-bold text-sm sm:text-base text-slate-900 hover:text-blue-600 transition leading-snug line-clamp-2"
          >
            {latestPost.title}
          </Link>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {latestPost.excerpt}
          </p>
        </div>

        {/* Footer actions */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between relative z-10 text-xs">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {latestPost.readTimeMinutes} min read
            </span>
            <span>&middot;</span>
            <span className="truncate max-w-[130px] text-slate-500 font-medium">{latestPost.author}</span>
          </div>

          <Link
            href={`/blog/${latestPost.id}`}
            onClick={handleRead}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-sm shadow-blue-500/20 group/btn"
          >
            <span>Read Post</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
