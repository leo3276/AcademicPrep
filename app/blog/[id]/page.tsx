'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Check, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  MessageCircle,
  FileText
} from 'lucide-react';
import { BlogPost, BlogCategory, fetchBlogPostById, fetchBlogPosts } from '@/lib/blogStore';
import ArticleMediaRenderer from '@/components/ArticleMediaRenderer';


export default function BlogPostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params?.id === 'string' ? params.id : '';

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function load() {
      if (!id) return;
      setLoading(true);
      const data = await fetchBlogPostById(id);
      if (data) {
        setPost(data);
        const all = await fetchBlogPosts();
        setRelatedPosts(all.filter((p) => p.id !== id).slice(0, 3));
      }
      setLoading(false);
    }
    load();
  }, [id]);

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return `https://academicprep.com/blog/${id}`;
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    if (!post) return;
    const url = getShareUrl();
    const text = encodeURIComponent(
      `🎓 *${post.title}*\n\n${post.excerpt}\n\n👉 Read full announcement & update on AcademicPrep:\n${url}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const getCategoryBadgeClass = (category?: BlogCategory) => {
    switch (category) {
      case 'Exam Strategy':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Study Tips':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'BECE Updates':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Announcements':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const formatDate = (isoString?: string) => {
    if (!isoString) return '';
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-500">Loading guide...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-md space-y-4 shadow-sm">
          <FileText className="w-12 h-12 text-slate-300 mx-auto" />
          <h2 className="text-xl font-bold text-slate-900">Article Not Found</h2>
          <p className="text-xs text-slate-500">
            The article you are looking for may have been updated or moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    );
  }

  // Parse article content into paragraphs and structural sections
  const contentParagraphs = post.content
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Articles</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              title="Share directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Share on WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-10 lg:p-12 space-y-8">
          {/* Header Metadata */}
          <div className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(post.category)}`}>
                {post.category}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {post.readTimeMinutes} min read
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Author Byline & Quick Share */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{post.author}</div>
                  <div className="text-xs text-slate-500">AcademicPrep WAEC & Curriculum Specialist</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Share on WhatsApp</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Excerpt Lead Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-100 text-blue-950 text-sm sm:text-base leading-relaxed font-medium">
            {post.excerpt}
          </div>

          {/* Article Media (Responsive Picture or Video) */}
          {post.mediaType && post.mediaUrl && (
            <ArticleMediaRenderer
              mediaType={post.mediaType}
              mediaUrl={post.mediaUrl}
              mediaCaption={post.mediaCaption}
              title={post.title}
              className="my-6"
            />
          )}

          {/* Formatted Article Body */}
          <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            {contentParagraphs.map((para, index) => {
              // Check if paragraph is a section header (e.g. "1. Master the Top...")
              const isNumberedHeading = /^\d+\.\s+[A-Z]/.test(para);
              if (isNumberedHeading) {
                return (
                  <h2
                    key={index}
                    className="text-lg sm:text-xl font-bold text-slate-900 pt-4 pb-1 border-b border-slate-100"
                  >
                    {para}
                  </h2>
                );
              }

              // Check if paragraph contains bullet points
              if (para.includes('•')) {
                const lines = para.split('\n');
                return (
                  <div key={index} className="space-y-2 py-1">
                    {lines.map((line, lIdx) => {
                      const trimmed = line.trim();
                      if (trimmed.startsWith('•')) {
                        return (
                          <div key={lIdx} className="flex items-start gap-2.5 pl-2 text-slate-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                            <span>{trimmed.replace(/^•\s*/, '')}</span>
                          </div>
                        );
                      }
                      return <p key={lIdx}>{trimmed}</p>;
                    })}
                  </div>
                );
              }

              return (
                <p key={index} className="text-slate-700 leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Footer Callout & Next Steps */}
          <div className="pt-8 border-t border-slate-100">
            <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Put This Strategy into Practice?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Start Practising on AcademicPrep Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                Reinforce these concepts with over 900+ verified past questions, instant interactive quizzes, and timed weekly mock exams.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/jhs"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition"
                >
                  Explore JHS Curriculum
                </Link>
                <Link
                  href="/jhs/bece-past-questions"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition"
                >
                  Browse Past Questions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Related Articles & Guides</h3>
              <Link href="/blog" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <span>View all</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  href={`/blog/${rPost.id}`}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getCategoryBadgeClass(rPost.category)}`}>
                      {rPost.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{rPost.readTimeMinutes} min read</span>
                    <span className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
