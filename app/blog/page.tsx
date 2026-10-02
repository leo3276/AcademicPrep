'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Search, 
  Calendar, 
  User, 
  Tag, 
  MessageCircle, 
  Flame,
  ChevronRight,
  FileText,
  Play
} from 'lucide-react';
import { BlogPost, BlogCategory, BLOG_CATEGORIES, fetchBlogPosts } from '@/lib/blogStore';

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | BlogCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchBlogPosts();
      setPosts(data);
      setLoading(false);
    }
    load();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'ALL' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    if (selectedCategory !== 'ALL' || searchQuery.trim()) {
      return null;
    }
    return posts.find((p) => p.featured) || posts[0] || null;
  }, [posts, selectedCategory, searchQuery]);

  const standardPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter((p) => p.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);

  const getCategoryBadgeClass = (category: BlogCategory) => {
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

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return 'Recent';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>AcademicPrep Study Journal & WAEC Guides</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Exam Insights, Study Strategies <br />
              <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-teal-300 bg-clip-text text-transparent">
                & Official WAEC Updates
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
              Curated articles written by experienced Ghanaian teachers and WAEC examiners. Master memory retention, understand scoring rubrics, and stay ahead in your BECE & WASSCE preparations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, guides, or keywords..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Post Count Indicator */}
            <div className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-800">{filteredPosts.length}</span> article{filteredPosts.length === 1 ? '' : 's'}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === 'ALL'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Topics
            </button>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-slate-500">Loading educational articles...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center mt-6 space-y-3">
            <FileText className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No articles found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn’t find any articles matching your search or selected filter. Try clearing the search or choosing another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {/* FEATURED POST HERO (Only when on "All" and no search) */}
            {featuredPost && (
              <div className="relative rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                <div
                  className={`p-6 sm:p-8 lg:p-10 ${
                    featuredPost.mediaType && featuredPost.mediaUrl
                      ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center'
                      : 'flex flex-col justify-between space-y-6'
                  }`}
                >
                  {/* Featured Post Media (if available) */}
                  {featuredPost.mediaType && featuredPost.mediaUrl && (
                    <div className="lg:col-span-5 order-first lg:order-last">
                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="block relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm group/media"
                      >
                        {featuredPost.mediaType === 'image' ? (
                          <img
                            src={featuredPost.mediaUrl}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
                            loading="eager"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-950 relative flex items-center justify-center">
                            <img
                              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                              alt=""
                              className="w-full h-full object-cover opacity-50"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform">
                                <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                              </div>
                            </div>
                            <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 text-white text-[10px] font-bold">
                              VIDEO GUIDE
                            </span>
                          </div>
                        )}
                      </Link>
                    </div>
                  )}

                  <div className={`space-y-4 ${featuredPost.mediaType && featuredPost.mediaUrl ? 'lg:col-span-7 flex flex-col justify-between h-full' : ''}`}>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-[11px] font-bold shadow-xs">
                          <Flame className="w-3.5 h-3.5" />
                          Featured Guide
                        </span>
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getCategoryBadgeClass(featuredPost.category)}`}>
                          {featuredPost.category}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {featuredPost.readTimeMinutes} min read
                        </span>
                        <span className="text-xs text-slate-400 hidden sm:inline">•</span>
                        <span className="text-xs text-slate-500 hidden sm:flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(featuredPost.publishedAt)}
                        </span>
                      </div>

                      <Link href={`/blog/${featuredPost.id}`}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>
                      </Link>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                          {featuredPost.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{featuredPost.author}</div>
                          <div className="text-[11px] text-slate-500">AcademicPrep Contributor</div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-sm self-start sm:self-auto group/btn"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Standard Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  {/* Article Thumbnail / Media Preview */}
                  {post.mediaType && post.mediaUrl && (
                    <Link
                      href={`/blog/${post.id}`}
                      className="block relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100 group/img"
                    >
                      {post.mediaType === 'image' ? (
                        <img
                          src={post.mediaUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-950 relative flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                            alt=""
                            className="w-full h-full object-cover opacity-50"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover/img:scale-110 transition-transform">
                              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                            </div>
                          </div>
                          <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[9px] font-bold">
                            VIDEO
                          </span>
                        </div>
                      )}
                    </Link>
                  )}

                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getCategoryBadgeClass(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3" />
                          {post.readTimeMinutes} min
                        </span>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-medium truncate max-w-[120px]">{post.author}</span>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 transition-colors"
                      >
                        <span>Read</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Community Callout */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-8 sm:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs backdrop-blur-sm">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>8,000+ Online Students</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Get Daily Revision Tips & WAEC Advice Directly on WhatsApp
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-normal">
              Join thousands of JHS candidates across Ghana for daily question drills, chief examiner alerts, and instant homework discussions.
            </p>

            <div className="pt-2">
              <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Join Study Group (Free)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
