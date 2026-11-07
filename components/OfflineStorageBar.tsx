'use client';

import React, { useState, useEffect } from 'react';
import { HardDrive, Trash2, Zap, CheckCircle2 } from 'lucide-react';
import { getOfflineStorageSummary, clearAllOfflinePdfs } from '@/lib/pdfCache';

export default function OfflineStorageBar() {
  const [stats, setStats] = useState<{ count: number; formattedSize: string }>({
    count: 0,
    formattedSize: '0 MB',
  });
  const [clearing, setClearing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const refreshStats = () => {
    getOfflineStorageSummary().then((res) => {
      setStats({ count: res.count, formattedSize: res.formattedSize });
    });
  };

  useEffect(() => {
    refreshStats();
    const interval = setInterval(refreshStats, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClear = async () => {
    if (stats.count === 0) return;
    if (confirm('Clear all offline-saved PDF examination papers from your device storage?')) {
      setClearing(true);
      await clearAllOfflinePdfs();
      setClearing(false);
      refreshStats();
      setMessage('Offline cache cleared successfully.');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 p-3.5 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4 fill-emerald-500/20 text-emerald-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Smart Data-Saver & Offline Caching</span>
            <span className="text-[10px] font-semibold uppercase px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
              Active
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Papers you open are saved locally to your device so you can study repeatedly with <b>zero data cost</b>.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
        {message ? (
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{message}</span>
          </span>
        ) : (
          <span className="text-[11px] font-mono font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5 text-slate-400" />
            <span>{stats.count} saved ({stats.formattedSize})</span>
          </span>
        )}

        {stats.count > 0 && (
          <button
            type="button"
            onClick={handleClear}
            disabled={clearing}
            className="px-2.5 py-1 rounded-lg border border-slate-200 hover:border-rose-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50 text-[11px] font-semibold transition flex items-center gap-1 cursor-pointer"
            title="Clear saved papers to free device storage"
          >
            <Trash2 className="w-3 h-3" />
            <span>{clearing ? 'Clearing…' : 'Clear Saved'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
