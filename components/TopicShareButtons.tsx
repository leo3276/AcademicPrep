'use client';

import React, { useState } from 'react';
import { Share2, Check, MessageCircle, Copy } from 'lucide-react';

interface TopicShareButtonsProps {
  topicTitle: string;
  subjectName: string;
  level: string;
  urlPath: string; // e.g. /jhs/science/sci-jhs1-intro-science?level=JHS+1
  quizCount?: number;
  variant?: 'compact' | 'full' | 'icon-only';
  className?: string;
}

export default function TopicShareButtons({
  topicTitle,
  subjectName,
  level,
  urlPath,
  quizCount,
  variant = 'compact',
  className = '',
}: TopicShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${urlPath}`;
    }
    return `https://academicprep.com${urlPath}`;
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = getFullUrl();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = getFullUrl();
    const quizLine = quizCount ? `\n📝 Includes ${quizCount} practice questions with instant scoring!` : '';
    const message = `📚 *AcademicPrep — ${subjectName} (${level})*\n\n🎯 *Topic:* ${topicTitle}${quizLine}\n\n👉 *Study Notes, Worked Examples & Quiz here:*\n${url}\n\n_Share with your classmates and study group!_`;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (variant === 'icon-only') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <button
          type="button"
          onClick={handleWhatsApp}
          title="Share topic to WhatsApp"
          className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={handleCopy}
          title={copied ? 'Link Copied!' : 'Copy Topic Link'}
          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
              : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-wrap items-center gap-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mr-auto">
          <Share2 className="w-4 h-4 text-emerald-600" />
          <span>Share Lesson with Students:</span>
        </div>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Share on WhatsApp</span>
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs'
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    );
  }

  // Default: 'compact'
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <button
        type="button"
        onClick={handleWhatsApp}
        className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
        title="Share to WhatsApp study group"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className={`px-2.5 py-1.5 rounded-lg border font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer ${
          copied
            ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
        }`}
        title="Copy direct topic link"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copied ? 'Copied' : 'Link'}</span>
      </button>
    </div>
  );
}
