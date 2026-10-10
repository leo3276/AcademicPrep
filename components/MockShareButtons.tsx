'use client';

import React, { useState } from 'react';
import { Share2, Check, MessageCircle, Copy } from 'lucide-react';

interface MockShareButtonsProps {
  docTitle?: string;
  subjectName?: string;
  level?: string;
  paperType?: string;
  docId?: string;
  basePath: string; // e.g. '/jhs/trial-questions' or '/shs/trial-questions'
  variant?: 'card' | 'header' | 'icon-only' | 'compact';
  className?: string;
}

export default function MockShareButtons({
  docTitle,
  subjectName,
  level = 'JHS',
  paperType,
  docId,
  basePath,
  variant = 'card',
  className = '',
}: MockShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      if (docId) {
        return `${origin}${basePath}?doc=${docId}#doc-${docId}`;
      }
      return `${origin}${basePath}`;
    }
    return `https://academicprep.com${basePath}${docId ? `?doc=${docId}#doc-${docId}` : ''}`;
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

    let message = '';
    if (docTitle) {
      const typeStr = paperType ? ` (${paperType})` : '';
      const subjectStr = subjectName ? `\n📚 *Subject:* ${subjectName}${typeStr}` : '';
      message = `📝 *AcademicPrep — ${level} Trial Mock Examination*\n\n📄 *Paper:* ${docTitle}${subjectStr}\n\n👉 *View & Download Mock Booklet here:*\n${url}\n\n_Share with your classmates and study group!_`;
    } else {
      message = `📚 *AcademicPrep — ${level} Trial Mock Examination Papers*\n\n🎯 *Practice official diagnostic trial mocks, marking guides, and past question booklets with your classmates!*\n\n👉 *Access all Mock Papers here:*\n${url}\n\n_Share with your classmates and study group!_`;
    }

    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Header banner / action button in hero section
  if (variant === 'header') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          title="Broadcast mock papers to WhatsApp study group"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Share Mocks on WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs'
          }`}
          title="Copy link to mock papers"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
          <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    );
  }

  // Icon-only for tight spots
  if (variant === 'icon-only') {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <button
          type="button"
          onClick={handleWhatsApp}
          title="Share paper to WhatsApp"
          className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={handleCopy}
          title={copied ? 'Link Copied!' : 'Copy direct paper link'}
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

  // Compact row
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className={`px-2.5 py-1.5 rounded-lg border font-semibold text-[11px] flex items-center gap-1 transition-colors cursor-pointer ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
          }`}
          title="Copy link"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Link'}</span>
        </button>
      </div>
    );
  }

  // Default: 'card' — embedded at the bottom of a document card
  return (
    <div className={`flex items-center gap-2 pt-2 border-t border-slate-100/80 ${className}`}>
      <button
        type="button"
        onClick={handleWhatsApp}
        className="flex-1 py-1.5 px-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        title="Share this mock paper on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span className="truncate">Share on WhatsApp</span>
      </button>

      <button
        type="button"
        onClick={handleCopy}
        className={`py-1.5 px-2.5 rounded-xl border text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer shrink-0 ${
          copied
            ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
            : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
        }`}
        title="Copy direct link to this mock paper"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700 font-bold">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-slate-500" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
