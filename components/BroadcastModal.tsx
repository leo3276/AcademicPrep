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
  Radio
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
  const [activeChannel, setActiveChannel] = useState<'sms' | 'whatsapp'>('sms');
  const [targetLevel, setTargetLevel] = useState<'ALL' | 'JHS' | 'SHS'>('ALL');
  
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

    // Concise SMS fitting 160 GSM
    const cleanTitle = post.title.length > 60 ? `${post.title.slice(0, 57)}...` : post.title;
    setSmsMessage(`AcademicPrep Alert: ${cleanTitle}. Read now at ${postUrl}`);

    // Rich WhatsApp message
    setWhatsAppMessage(
      `📢 *ACADEMICPREP OFFICIAL ANNOUNCEMENT* 🎓\n\n*${post.title}*\n\n${post.excerpt}\n\n👉 *Read full details on the portal:*\n${postUrl}\n\n*(Share with your classmates!)* 🔥`
    );
  }, [post, postUrl]);

  // Filtered recipients
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
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold uppercase tracking-wider">
              <Radio className="w-3 h-3 text-blue-600 animate-pulse" />
              <span>Multi-Channel Dispatcher</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              Broadcast Announcement Directly to Students
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
          {/* Target Audience Selector */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-900 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Target Student Audience:</span>
              </label>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                {recipientCount} Students Selected
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setTargetLevel('ALL')}
                className={`py-2 px-3 rounded-lg border text-center transition font-semibold text-xs ${
                  targetLevel === 'ALL'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Students ({totalStudents})
              </button>
              <button
                type="button"
                onClick={() => setTargetLevel('JHS')}
                className={`py-2 px-3 rounded-lg border text-center transition font-semibold text-xs ${
                  targetLevel === 'JHS'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                JHS Only ({jhsCount})
              </button>
              <button
                type="button"
                onClick={() => setTargetLevel('SHS')}
                className={`py-2 px-3 rounded-lg border text-center transition font-semibold text-xs ${
                  targetLevel === 'SHS'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                SHS Only ({shsCount})
              </button>
            </div>
          </div>

          {/* Delivery Channel Tabs */}
          <div className="flex border-b border-slate-200">
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
              <span>Direct SMS Broadcast</span>
            </button>
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
              <span>WhatsApp Broadcast Hub</span>
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

          {/* TAB 1: SMS BROADCAST */}
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
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition"
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
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2"
                >
                  {isSendingSms ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Dispatching SMS to {recipientCount} Students...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Bulk SMS to {recipientCount} Students</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: WHATSAPP BROADCAST HUB */}
          {activeChannel === 'whatsapp' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <label className="font-bold text-slate-900">
                    WhatsApp Announcement Preview:
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
                <div className="bg-emerald-950/5 border border-emerald-500/20 rounded-xl p-3 text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed">
                  {whatsAppMessage}
                </div>
              </div>

              {/* Broadcast Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(whatsAppMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Broadcast to WhatsApp Channel / Groups</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyWhatsAppText}
                  className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedLink ? 'Text Copied!' : 'Copy Formatted Text'}</span>
                </button>
              </div>

              {/* Individual Student 1-Tap WhatsApp Ping Roster */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 text-xs">
                    1-Tap WhatsApp Ping (Direct to Registered Students)
                  </span>
                  <div className="relative w-44">
                    <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search student..."
                      value={searchRoster}
                      onChange={(e) => setSearchRoster(e.target.value)}
                      className="w-full pl-7 pr-2 py-1 text-[11px] border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl max-h-48 overflow-y-auto divide-y divide-slate-100 bg-white">
                  {filteredStudents.length === 0 ? (
                    <div className="p-4 text-center text-slate-400 text-xs">
                      No students found in this filter.
                    </div>
                  ) : (
                    filteredStudents.slice(0, 30).map((st) => {
                      const directWaUrl = `https://wa.me/${st.internationalPhone}?text=${encodeURIComponent(whatsAppMessage)}`;
                      return (
                        <div key={st.id} className="p-2.5 flex items-center justify-between gap-2 hover:bg-slate-50 transition">
                          <div>
                            <p className="font-bold text-slate-900 text-xs">{st.name}</p>
                            <p className="text-[10px] text-slate-500 font-mono">
                              {st.level} • {st.localPhone || st.phone}
                            </p>
                          </div>
                          <a
                            href={directWaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-bold flex items-center gap-1 transition"
                            title={`Send announcement directly to ${st.name} on WhatsApp`}
                          >
                            <MessageSquare className="w-3 h-3 text-emerald-600" />
                            <span>Message</span>
                          </a>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Targeting {recipientCount} students in AcademicPrep database</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
