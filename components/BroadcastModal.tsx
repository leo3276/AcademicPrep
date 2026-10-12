'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Send, 
  MessageSquare, 
  Smartphone, 
  Copy, 
  Check, 
  Users, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  RefreshCw,
  Search,
  Radio,
  Play,
  Pause,
  FastForward,
  Download,
  CheckCheck
} from 'lucide-react';
import { BlogPost } from '@/lib/blogStore';

interface BroadcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

interface StudentRecipient {
  id: string;
  name: string;
  phone: string;
  localPhone: string;
  internationalPhone: string;
  level: string;
}

export default function BroadcastModal({ isOpen, onClose, post }: BroadcastModalProps) {
  const [activeChannel, setActiveChannel] = useState<'sms' | 'whatsapp'>('whatsapp');
  const [targetLevel, setTargetLevel] = useState<'ALL' | 'JHS' | 'SHS'>('JHS');
  
  // Data states
  const [loadingDirectory, setLoadingDirectory] = useState(false);
  const [totalStudents, setTotalStudents] = useState(0);
  const [jhsCount, setJhsCount] = useState(0);
  const [shsCount, setShsCount] = useState(0);
  const [activeSmsProvider, setActiveSmsProvider] = useState<string>('simulated');
  const [students, setStudents] = useState<StudentRecipient[]>([]);
  const [searchRoster, setSearchRoster] = useState('');

  // Form & dispatch states
  const [smsMessage, setSmsMessage] = useState('');
  const [whatsAppMessage, setWhatsAppMessage] = useState('');
  const [isSendingSms, setIsSendingSms] = useState(false);
  const [smsResultBanner, setSmsResultBanner] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedNumbers, setCopiedNumbers] = useState(false);
  const [vcfDownloaded, setVcfDownloaded] = useState(false);

  // WhatsApp Sequential Queue Runner State
  const [isQueueRunning, setIsQueueRunning] = useState(false);
  const [queueIndex, setQueueIndex] = useState(0);
  const [dispatchedIds, setDispatchedIds] = useState<string[]>([]);

  // Compute live URL
  const postUrl = useMemo(() => {
    if (!post) return 'https://academicprep.com/blog';
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/blog/${post.id}`;
    }
    return `https://academicprep.com/blog/${post.id}`;
  }, [post]);

  // Load student directory on open
  useEffect(() => {
    if (!isOpen) return;

    setSmsResultBanner(null);
    setIsQueueRunning(false);
    setQueueIndex(0);
    setDispatchedIds([]);

    async function loadDirectory() {
      try {
        setLoadingDirectory(true);
        const res = await fetch('/api/admin/broadcast');
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setTotalStudents(data.totalStudents || 0);
            setJhsCount(data.jhsCount || 0);
            setShsCount(data.shsCount || 0);
            setActiveSmsProvider(data.activeSmsProvider || 'simulated');
            setStudents(data.students || []);
          }
        }
      } catch (err) {
        console.warn('Directory fetch notice:', err);
      } finally {
        setLoadingDirectory(false);
      }
    }

    loadDirectory();
  }, [isOpen]);

  // Generate initial messages when post changes
  useEffect(() => {
    if (!post) return;

    const cleanTitle = post.title.length > 60 ? `${post.title.slice(0, 57)}...` : post.title;
    setSmsMessage(`AcademicPrep Alert: ${cleanTitle}. Read now at ${postUrl}`);

    setWhatsAppMessage(
      `📢 *ACADEMICPREP OFFICIAL ANNOUNCEMENT* 🎓\n\n*${post.title}*\n\n${post.excerpt}\n\n👉 *Read full details on the portal:*\n${postUrl}\n\n*(Share with your classmates!)* 🔥`
    );
  }, [post, postUrl]);

  // Filtered recipients based on chosen target level
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      if (targetLevel === 'JHS' && !(s.level || '').toUpperCase().startsWith('JHS')) return false;
      if (targetLevel === 'SHS' && !(s.level || '').toUpperCase().startsWith('SHS')) return false;
      if (searchRoster.trim()) {
        const q = searchRoster.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.phone.includes(q) ||
          s.level.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [students, targetLevel, searchRoster]);

  const recipientCount = useMemo(() => {
    if (targetLevel === 'JHS') return jhsCount;
    if (targetLevel === 'SHS') return shsCount;
    return totalStudents;
  }, [targetLevel, jhsCount, shsCount, totalStudents]);

  if (!isOpen || !post) return null;

  // Handle Bulk SMS Send
  const handleSendBulkSms = async () => {
    if (!smsMessage.trim()) return;

    const confirmMsg = `Send SMS announcement to ${recipientCount} registered students now?`;
    if (!window.confirm(confirmMsg)) return;

    setIsSendingSms(true);
    setSmsResultBanner(null);

    try {
      const res = await fetch('/api/admin/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: post.title,
          excerpt: post.excerpt,
          url: postUrl,
          channel: 'sms',
          targetLevel,
          customMessage: smsMessage,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSmsResultBanner({
          kind: 'ok',
          text: data.statusMessage || `SMS successfully queued for ${data.sentCount} students!`,
        });
      } else {
        setSmsResultBanner({
          kind: 'err',
          text: data.error || 'Failed to dispatch SMS broadcast.',
        });
      }
    } catch (err: any) {
      setSmsResultBanner({
        kind: 'err',
        text: err?.message || 'Network error sending SMS.',
      });
    } finally {
      setIsSendingSms(false);
    }
  };

  // Copy Clean Numbers for external bulk SMS portals
  const handleCopyNumbers = () => {
    const list = filteredStudents.map((s) => s.localPhone || s.phone).filter(Boolean).join(', ');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(list);
      setCopiedNumbers(true);
      setTimeout(() => setCopiedNumbers(false), 2000);
    }
  };

  // Copy WhatsApp broadcast text
  const handleCopyWhatsAppText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(whatsAppMessage);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // 1-Click .VCF Contacts Export for WhatsApp Broadcast Lists
  const handleExportVcfContacts = () => {
    if (filteredStudents.length === 0) return;

    const vcfEntries = filteredStudents.map((s) => {
      const intlPhone = s.internationalPhone ? `+${s.internationalPhone}` : `+${s.phone}`;
      return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:AcadPrep ${s.level} - ${s.name}`,
        `N:${s.name};AcadPrep ${s.level};;;`,
        `TEL;TYPE=CELL:${intlPhone}`,
        'ORG:AcademicPrep Ghana',
        'NOTE:Registered Student on AcademicPrep',
        'END:VCARD'
      ].join('\r\n');
    }).join('\r\n\r\n');

    const blob = new Blob([vcfEntries], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AcademicPrep_${targetLevel}_Students.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setVcfDownloaded(true);
    setTimeout(() => setVcfDownloaded(false), 4000);
  };

  // WhatsApp Queue Runner Handlers
  const currentStudentInQueue = filteredStudents[queueIndex] || null;

  const handleStartQueue = () => {
    if (filteredStudents.length === 0) return;
    setQueueIndex(0);
    setDispatchedIds([]);
    setIsQueueRunning(true);
  };

  const handleOpenCurrentStudentWhatsAppAndAdvance = () => {
    if (!currentStudentInQueue) return;

    const waUrl = `https://wa.me/${currentStudentInQueue.internationalPhone}?text=${encodeURIComponent(whatsAppMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Mark current as dispatched
    setDispatchedIds((prev) => [...prev, currentStudentInQueue.id]);

    // Advance to next
    if (queueIndex + 1 < filteredStudents.length) {
      setQueueIndex((prev) => prev + 1);
    } else {
      setIsQueueRunning(false);
    }
  };

  const handleSkipQueueStudent = () => {
    if (queueIndex + 1 < filteredStudents.length) {
      setQueueIndex((prev) => prev + 1);
    } else {
      setIsQueueRunning(false);
    }
  };

  // SMS character count
  const smsCharCount = smsMessage.length;
  const smsPages = Math.ceil(smsCharCount / 160) || 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
              <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
              <span>Direct Student Broadcast Hub</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              Send Announcement to Registered Students
            </h2>
            <p className="text-xs text-slate-500 truncate max-w-md sm:max-w-lg">
              {post.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs text-slate-700 flex-1">
          {/* Target Audience Level Selector */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-900 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>1. Select Grade Level Audience:</span>
              </label>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                {recipientCount} Students Target
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  setTargetLevel('JHS');
                  setIsQueueRunning(false);
                }}
                className={`py-2 px-3 rounded-lg border text-center transition font-semibold text-xs ${
                  targetLevel === 'JHS'
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                JHS Candidates ({jhsCount})
              </button>
              <button
                type="button"
                onClick={() => {
                  setTargetLevel('SHS');
                  setIsQueueRunning(false);
                }}
                className={`py-2 px-3 rounded-lg border text-center transition font-semibold text-xs ${
                  targetLevel === 'SHS'
                    ? 'bg-purple-600 border-purple-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                SHS Candidates ({shsCount})
              </button>
              <button
                type="button"
                onClick={() => {
                  setTargetLevel('ALL');
                  setIsQueueRunning(false);
                }}
                className={`py-2 px-3 rounded-lg border text-center transition font-semibold text-xs ${
                  targetLevel === 'ALL'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Students ({totalStudents})
              </button>
            </div>
          </div>

          {/* Delivery Channel Tabs */}
          <div className="flex border-b border-slate-200">
            <button
              type="button"
              onClick={() => setActiveChannel('whatsapp')}
              className={`pb-2.5 px-4 font-bold text-xs border-b-2 transition flex items-center gap-2 ${
                activeChannel === 'whatsapp'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct Dispatch ({recipientCount} {targetLevel})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveChannel('sms')}
              className={`pb-2.5 px-4 font-bold text-xs border-b-2 transition flex items-center gap-2 ${
                activeChannel === 'sms'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Bulk SMS Delivery (Sender ID)</span>
            </button>
          </div>

          {/* Result Banner */}
          {smsResultBanner && (
            <div
              className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center gap-2.5 shadow-2xs ${
                smsResultBanner.kind === 'ok'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-rose-50 border-rose-200 text-rose-800'
              }`}
            >
              {smsResultBanner.kind === 'ok' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span className="leading-snug">{smsResultBanner.text}</span>
            </div>
          )}

          {/* TAB 1: WHATSAPP DIRECT DISPATCH */}
          {activeChannel === 'whatsapp' && (
            <div className="space-y-4">

              {/* Sequential Queue Runner Box */}
              <div className="bg-emerald-950/5 border border-emerald-500/25 rounded-2xl p-4 sm:p-5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-700 font-bold">
                      <Play className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                        Fast 1-by-1 WhatsApp Dispatcher ({targetLevel} Students)
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Starts a direct private WhatsApp chat with each {targetLevel} student automatically with message pre-filled.
                      </p>
                    </div>
                  </div>
                  {isQueueRunning && (
                    <span className="text-[11px] font-bold text-emerald-700 font-mono bg-emerald-100 px-2 py-0.5 rounded-full">
                      {queueIndex + 1} of {filteredStudents.length}
                    </span>
                  )}
                </div>

                {isQueueRunning && currentStudentInQueue ? (
                  <div className="p-4 bg-white rounded-xl border border-emerald-300 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          Next Recipient ({queueIndex + 1}/{filteredStudents.length})
                        </span>
                        <h4 className="text-sm font-extrabold text-slate-900 mt-1">
                          {currentStudentInQueue.name}
                        </h4>
                        <p className="text-xs text-slate-600 font-mono">
                          {currentStudentInQueue.level} • {currentStudentInQueue.localPhone || currentStudentInQueue.phone}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-emerald-700">
                          {Math.round((dispatchedIds.length / filteredStudents.length) * 100)}% Done
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full transition-all duration-300"
                        style={{ width: `${(dispatchedIds.length / filteredStudents.length) * 100}%` }}
                      />
                    </div>

                    {/* Next Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={handleOpenCurrentStudentWhatsAppAndAdvance}
                        className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Open WhatsApp &amp; Next Student ➡️</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSkipQueueStudent}
                        className="py-2.5 px-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition"
                        title="Skip this student"
                      >
                        Skip
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsQueueRunning(false)}
                        className="py-2.5 px-3 border border-slate-300 hover:bg-slate-50 text-slate-500 rounded-xl text-xs font-semibold transition"
                      >
                        Pause
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handleStartQueue}
                      disabled={filteredStudents.length === 0}
                      className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Start Fast WhatsApp Chats ({filteredStudents.length} {targetLevel} Students)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 1-Click WhatsApp Broadcast List VCF Exporter */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <p className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-blue-600" />
                    <span>WhatsApp 1-Click Broadcast List Export (.vcf)</span>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Import all {filteredStudents.length} {targetLevel} students to phone contacts at once to message everyone simultaneously in WhatsApp Business.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleExportVcfContacts}
                  disabled={filteredStudents.length === 0}
                  className="py-2 px-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold transition shadow-2xs flex items-center justify-center gap-1.5 shrink-0"
                >
                  {vcfDownloaded ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Contacts Saved!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Export Contacts (.vcf)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Formatted Message Preview */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <label className="font-bold text-slate-900">
                    WhatsApp Message Text:
                  </label>
                  <button
                    type="button"
                    onClick={handleCopyWhatsAppText}
                    className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-emerald-950/5 border border-emerald-500/20 rounded-xl p-3 text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
                  {whatsAppMessage}
                </div>
              </div>

              {/* Group / Channel Broadcast */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(whatsAppMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Forward to WhatsApp Groups / Channel</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyWhatsAppText}
                  className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Text Copied!' : 'Copy Formatted Text'}</span>
                </button>
              </div>

              {/* Roster Table of Students with 1-Tap Links */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 text-xs">
                    Individual {targetLevel} Student Directory ({filteredStudents.length})
                  </span>
                  <div className="relative w-44">
                    <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Filter student..."
                      value={searchRoster}
                      onChange={(e) => setSearchRoster(e.target.value)}
                      className="w-full pl-7 pr-2 py-1 text-[11px] border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl max-h-40 overflow-y-auto divide-y divide-slate-100 bg-white">
                  {filteredStudents.length === 0 ? (
                    <div className="p-4 text-center text-slate-400 text-xs">
                      No registered students found under {targetLevel}.
                    </div>
                  ) : (
                    filteredStudents.map((st, i) => {
                      const isDispatched = dispatchedIds.includes(st.id);
                      const directWaUrl = `https://wa.me/${st.internationalPhone}?text=${encodeURIComponent(whatsAppMessage)}`;
                      return (
                        <div key={st.id} className="p-2 flex items-center justify-between gap-2 hover:bg-slate-50 transition">
                          <div className="min-w-0">
                            <p className="font-bold text-slate-900 text-xs flex items-center gap-1.5 truncate">
                              <span>#{i + 1} {st.name}</span>
                              {isDispatched && (
                                <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full font-bold">
                                  ✓ Sent
                                </span>
                              )}
                            </p>
                            <p className="text-[10px] text-slate-500 font-mono">
                              {st.level} • {st.localPhone || st.phone}
                            </p>
                          </div>
                          <a
                            href={directWaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setDispatchedIds((prev) => [...prev, st.id])}
                            className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-bold flex items-center gap-1 transition shrink-0 cursor-pointer"
                            title={`Open WhatsApp chat with ${st.name}`}
                          >
                            <MessageSquare className="w-3 h-3 text-emerald-600" />
                            <span>Chat</span>
                          </a>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BULK SMS DELIVERY */}
          {activeChannel === 'sms' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <label className="font-bold text-slate-900">
                    SMS Message Content:
                  </label>
                  <span className={`font-mono font-semibold ${smsCharCount > 160 ? 'text-amber-600' : 'text-slate-400'}`}>
                    {smsCharCount}/160 chars ({smsPages} {smsPages === 1 ? 'SMS' : 'SMS segments'})
                  </span>
                </div>
                <textarea
                  value={smsMessage}
                  onChange={(e) => setSmsMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs font-sans text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 leading-relaxed resize-none"
                  placeholder="Enter message to deliver to students' phones..."
                />
              </div>

              {/* Gateway Status Badge */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-slate-500">Active SMS Gateway:</span>
                  <span className="font-bold uppercase text-slate-800 font-mono">
                    {activeSmsProvider}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyNumbers}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition cursor-pointer"
                  title="Copy list of phone numbers for external SMS portal"
                >
                  {copiedNumbers ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Numbers CSV</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleSendBulkSms}
                  disabled={isSendingSms || recipientCount === 0 || !smsMessage.trim()}
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSendingSms ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Dispatching SMS to {recipientCount} Students...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Bulk SMS to {recipientCount} {targetLevel} Students</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Targeting {recipientCount} {targetLevel} candidates</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
