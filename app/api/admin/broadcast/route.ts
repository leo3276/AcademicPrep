import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { fetchStudentsForAdmin } from '@/lib/dbService';
import {
  cleanPhoneNumber,
  formatAnnouncementSms,
  formatAnnouncementWhatsApp,
  sendBulkSms,
  sendBulkWhatsApp,
  getActiveWhatsAppProvider,
  SmsProviderName,
} from '@/lib/broadcastService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function getActiveSmsProvider(): SmsProviderName {
  if (process.env.ARKESEL_API_KEY) return 'arkesel';
  if (process.env.HUBTEL_CLIENT_ID && process.env.HUBTEL_CLIENT_SECRET) return 'hubtel';
  if (process.env.MNOTIFY_API_KEY) return 'mnotify';
  return 'simulated';
}

/**
 * GET /api/admin/broadcast
 * Returns registered student phone directory, counts by grade level, and active SMS gateway status.
 */
export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json(
      { success: false, error: 'Administrator session required.' },
      { status: 401 }
    );
  }

  try {
    const rawStudents = await fetchStudentsForAdmin();

    const students = rawStudents.map((s) => {
      const cleaned = cleanPhoneNumber(s.phone);
      return {
        id: s.id,
        name: s.name || 'Student',
        phone: s.phone,
        localPhone: cleaned.local,
        internationalPhone: cleaned.international,
        isValidPhone: cleaned.isValid,
        level: s.level || 'JHS 1',
        accessType: s.accessType,
      };
    });

    const jhsCount = students.filter((s) => (s.level || '').toUpperCase().startsWith('JHS')).length;
    const shsCount = students.filter((s) => (s.level || '').toUpperCase().startsWith('SHS')).length;

    return NextResponse.json({
      success: true,
      totalStudents: students.length,
      jhsCount,
      shsCount,
      activeSmsProvider: getActiveSmsProvider(),
      activeWhatsAppProvider: getActiveWhatsAppProvider(),
      students,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to fetch student directory.' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/broadcast
 * Dispatches announcement via SMS or prepares direct WhatsApp broadcasts.
 */
export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json(
      { success: false, error: 'Administrator session required.' },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const {
      title,
      excerpt = '',
      url = 'https://academicprep.com/blog',
      channel = 'sms', // 'sms' | 'whatsapp'
      targetLevel = 'ALL', // 'ALL' | 'JHS' | 'SHS'
      customMessage = '',
    } = body;

    if (!title || !title.trim()) {
      return NextResponse.json(
        { success: false, error: 'Announcement title is required.' },
        { status: 400 }
      );
    }

    const rawStudents = await fetchStudentsForAdmin();

    // Filter students by selected academic level
    let filteredStudents = rawStudents;
    if (targetLevel === 'JHS') {
      filteredStudents = rawStudents.filter((s) => (s.level || '').toUpperCase().startsWith('JHS'));
    } else if (targetLevel === 'SHS') {
      filteredStudents = rawStudents.filter((s) => (s.level || '').toUpperCase().startsWith('SHS'));
    }

    // Clean phone numbers
    const validStudents = filteredStudents
      .map((s) => ({
        ...s,
        cleaned: cleanPhoneNumber(s.phone),
      }))
      .filter((s) => s.cleaned.isValid);

    if (validStudents.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No registered students with valid phone numbers match the selected level.' },
        { status: 400 }
      );
    }

    // 1. Channel: SMS Dispatch
    if (channel === 'sms') {
      const smsMessage = formatAnnouncementSms(title, url, customMessage);
      const phoneList = validStudents.map((s) => s.cleaned.international);

      const smsResult = await sendBulkSms(phoneList, smsMessage);

      return NextResponse.json({
        success: true,
        channel: 'sms',
        provider: smsResult.provider,
        targetLevel,
        totalRecipients: validStudents.length,
        sentCount: smsResult.sentCount,
        failedCount: smsResult.failedCount,
        messagePreview: smsMessage,
        statusMessage: smsResult.message,
        details: smsResult.details,
      });
    }

    const whatsAppMessage = formatAnnouncementWhatsApp(title, excerpt, url, customMessage);

    // 2. Channel: 1-Click Server-Side Automated WhatsApp Dispatch
    if (channel === 'whatsapp_server') {
      const phoneList = validStudents.map((s) => s.cleaned.international);
      const waResult = await sendBulkWhatsApp(phoneList, whatsAppMessage);

      return NextResponse.json({
        success: true,
        channel: 'whatsapp_server',
        provider: waResult.provider,
        targetLevel,
        totalRecipients: validStudents.length,
        sentCount: waResult.sentCount,
        failedCount: waResult.failedCount,
        messagePreview: whatsAppMessage,
        statusMessage: waResult.message,
        details: waResult.details,
      });
    }

    // 3. Channel: WhatsApp Broadcast Hub (Client Links & VCF)
    const encodedMessage = encodeURIComponent(whatsAppMessage);

    // Generate direct click-to-chat links for each student
    const studentChats = validStudents.slice(0, 100).map((s) => ({
      id: s.id,
      name: s.name,
      level: s.level,
      phone: s.phone,
      waLink: `https://wa.me/${s.cleaned.international}?text=${encodedMessage}`,
    }));

    // Universal forward link
    const universalShareLink = `https://api.whatsapp.com/send?text=${encodedMessage}`;

    return NextResponse.json({
      success: true,
      channel: 'whatsapp',
      targetLevel,
      totalRecipients: validStudents.length,
      whatsAppMessage,
      universalShareLink,
      studentChats,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Broadcast dispatch failed.' },
      { status: 500 }
    );
  }
}
