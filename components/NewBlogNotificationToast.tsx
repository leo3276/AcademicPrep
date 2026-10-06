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

        // Show toast with smooth 1.5s entrance delay
        setLatestPost(newest);
        const timer = setTimeout(() => {
          if (isMounted) setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
      } catch (err) {
        console.warn('NewBlogNotificationToast check error:', err);
      }
    }

    checkLatestPost();

    return () => {
      isMounted = false;
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
      className="fixed bottom-4 right-4 z-50 max-w-sm sm:max-w-md w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto"
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-2xl p-4 sm:p-4.5 border border-slate-700/80 shadow-2xl shadow-black/40 relative overflow-hidden group">
        {/* Glow ambient background accent */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-2.5 h-2.5 fill-slate-950" />
              New Blog Post
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              {latestPost.category}
            </span>
          </div>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
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
            className="block font-bold text-sm sm:text-base text-white hover:text-blue-300 transition leading-snug line-clamp-2"
          >
            {latestPost.title}
          </Link>
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {latestPost.excerpt}
          </p>
        </div>

        {/* Footer actions */}
        <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between relative z-10 text-xs">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {latestPost.readTimeMinutes} min read
            </span>
            <span>&middot;</span>
            <span className="truncate max-w-[120px]">{latestPost.author}</span>
          </div>

          <Link
            href={`/blog/${latestPost.id}`}
            onClick={handleRead}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-sm group/btn"
          >
            <span>Read Post</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
