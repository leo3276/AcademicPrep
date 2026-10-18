'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, ExternalLink, Copy, Check } from 'lucide-react';
import {
  WhatsAppChannelConfig,
  fetchWhatsAppChannelConfig,
  DEFAULT_WHATSAPP_CHANNEL_CONFIG,
} from '@/lib/whatsappChannelStore';

interface Props {
  previewConfig?: WhatsAppChannelConfig;
  isPreview?: boolean;
  variant?: 'hero' | 'banner';
}

export default function WhatsAppChannelBanner({
  previewConfig,
  isPreview = false,
  variant = 'hero',
}: Props) {
  const [config, setConfig] = useState<WhatsAppChannelConfig>(
    previewConfig || DEFAULT_WHATSAPP_CHANNEL_CONFIG
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (previewConfig) {
      setConfig(previewConfig);
      return;
    }

    fetchWhatsAppChannelConfig().then((data) => {
      if (data) setConfig(data);
    });

    const handleUpdate = (e: any) => {
      if (e?.detail) setConfig(e.detail);
    };
    window.addEventListener('academicprep:whatsapp-channel-updated', handleUpdate);
    return () =>
      window.removeEventListener('academicprep:whatsapp-channel-updated', handleUpdate);
  }, [previewConfig]);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!config.url) return;
    try {
      navigator.clipboard.writeText(config.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  if (!isPreview && (!config.enabled || !config.url)) {
    return null;
  }

  const targetUrl = config.url || '#';

  if (variant === 'hero') {
    return (
      <div id="tour-home-whatsapp" className="w-full">
        <div className="bg-slate-900/60 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-slate-600/60 text-left text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 shadow-md">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="font-semibold text-white block text-xs sm:text-sm truncate">
                {config.title || 'AcademicPrep WhatsApp Channel'}
              </span>
              <p className="text-[11px] text-slate-300 truncate max-w-[240px] sm:max-w-xs md:max-w-sm">
                {config.description || 'Join for daily WAEC & BECE questions and announcements.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            {config.url && (
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-2.5 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] font-medium transition flex items-center gap-1 cursor-pointer"
                title="Copy channel link"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            )}

            <a
              href={targetUrl}
              target={config.url ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] sm:text-xs transition flex items-center gap-1.5 shadow-xs shrink-0 cursor-pointer"
            >
              <span>{config.buttonText || 'Follow Channel'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Variant: 'banner' (Full-width clean card for standalone sections)
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white/75 backdrop-blur-md border border-emerald-200/80 p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
            <MessageCircle className="w-4 h-4" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                {config.badgeText || 'WhatsApp Channel'}
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                {config.title || 'AcademicPrep Official WhatsApp Channel'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              {config.description ||
                'Join our official student community for daily WAEC & BECE questions, revision notes, and study alerts.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          {config.url && (
            <button
              type="button"
              onClick={handleCopyLink}
              className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition flex items-center gap-1.5 cursor-pointer"
              title="Copy channel link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          )}

          <a
            href={targetUrl}
            target={config.url ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
          >
            <span>{config.buttonText || 'Follow Channel'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
