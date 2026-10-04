'use client';

import React from 'react';
import { Download, CheckCircle2, ShieldCheck, X, ExternalLink, AlertCircle } from 'lucide-react';
import { OFFICIAL_APK_DOWNLOAD_URL, APK_FILE_SIZE, APK_VERSION } from '@/lib/apkConfig';

interface ApkDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApkDownloadModal({ isOpen, onClose }: ApkDownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="apk-modal-title"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-left space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3.5 pr-6">
          <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md shadow-blue-500/20 shrink-0 border border-slate-200 bg-blue-600">
            <img 
              src="/android-icon.png" 
              alt="AcademicPrep App Icon" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Official Release
              </span>
              <span className="text-[10px] font-mono text-slate-500">v{APK_VERSION} (APK)</span>
            </div>
            <h2 id="apk-modal-title" className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              AcademicPrep for Android
            </h2>
            <p className="text-xs text-slate-500">
              Direct APK installation for Android smartphones &amp; tablets.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 space-y-2.5 text-xs">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Why Install the Android App?</span>
          </div>
          <div className="space-y-2 text-slate-600 text-[11px]">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><b>100% Offline VIP Mode:</b> Revise lessons &amp; take chapter quizzes with zero mobile data.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><b>Ultra-Fast &amp; Battery Friendly:</b> Native mobile UI optimized for low-end and high-end Android phones.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><b>Instant Direct Download:</b> No Google Play delays; installs directly in seconds.</span>
            </div>
          </div>
        </div>

        {/* Installation Tip */}
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            When downloading on Android, tap <b>&quot;Download anyway&quot;</b> and tap the downloaded file to install. If prompted, toggle <b>&quot;Allow from this source&quot;</b> in settings.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-2.5 pt-1">
          {/* Direct Install APK Button */}
          <a
            href={OFFICIAL_APK_DOWNLOAD_URL}
            download="AcademicPrep-v1.0.0.apk"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 transition-all cursor-pointer text-center"
          >
            <Download className="w-4 h-4" />
            <span>Install APK Now ({APK_FILE_SIZE})</span>
          </a>

          {/* Secondary: WhatsApp Channel */}
          <a
            href="https://whatsapp.com/channel/0029VagMXcm4yltRps7S2b2x"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            <span>Get via WhatsApp Channel</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 text-slate-400 hover:text-slate-600 font-medium text-xs transition-colors cursor-pointer text-center"
          >
            Continue Browsing Website
          </button>
        </div>
      </div>
    </div>
  );
}
