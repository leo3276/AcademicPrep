import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { fetchStudentsForAdmin } from '@/lib/dbService';
import {
  cleanPhoneNumber,
  sendBulkWhatsApp,
  sendBulkSms,
  getActiveWhatsAppProvider,
} from '@/lib/broadcastService';
import { OFFICIAL_SCHEDULED_EXAM } from '@/lib/scheduledWeeklyExam';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

/**
 * Formats official Ghanaian WhatsApp exam alert (General announcement or 5-min countdown reminder)
 */
function formatWeeklyExamWhatsApp(examUrl: string, is5MinReminder = false): string {
  const subjectStr = `${OFFICIAL_SCHEDULED_EXAM.level} ${OFFICIAL_SCHEDULED_EXAM.subjectName}`;
  const topicStr = OFFICIAL_SCHEDULED_EXAM.topicTitle;
  const p1Str = `${OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes} Mins (Objectives - ${OFFICIAL_SCHEDULED_EXAM.paper1MaxMarks} Marks)`;
  const p2Str = `${OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes} Mins (Comprehension & Summary - ${OFFICIAL_SCHEDULED_EXAM.paper2MaxMarks} Marks)`;

  if (is5MinReminder) {
    return `🚨 *ACADEMICPREP WEEKLY EXAM: 5 MINUTES TO START!* 📝\n\n` +
      `*Subject:* ${subjectStr}\n` +
      `*Topic:* ${topicStr}\n` +
      `*Time:* Starting at 6:00 PM GMT SHARP (In 5 Minutes!)\n\n` +
      `*Examination Criteria:*\n` +
      `  • *Paper 1:* ${p1Str}\n` +
      `  • *Paper 2:* ${p2Str}\n\n` +
      `⚠️ *PROCTORING CRITERIA:*\n` +
      `Leaving the window or switching tabs triggers a *5-minute penalty lockout* before re-entry, while your exam clock continues ticking down in real time!\n\n` +
      `👉 *Enter the Examination Hall Now:*\n${examUrl}\n\n` +
      `_Log in, prepare your scratch sheet, and take your seat now. Good luck, candidates!_ 🏆`;
  }

  return `📢 *ACADEMICPREP SCHEDULED WEEKLY EXAMINATION ALERT* 📝\n\n` +
    `*Subject:* ${subjectStr}\n` +
    `*Topic:* ${topicStr}\n` +
    `*Time:* Today 6:00 PM – 12:00 AM GMT (Available until Midnight)\n` +
    `*Exam Structure:*\n` +
    `  • *Paper 1:* ${p1Str}\n` +
    `  • *Paper 2:* ${p2Str}\n\n` +
    `⚠️ *PROCTORING CRITERIA:*\n` +
    `Leaving the exam window triggers a *5-minute penalty lockout* before re-entry, while your exam clock continues running in the background.\n\n` +
    `👉 *Enter the Examination Hall here:*\n${examUrl}\n\n` +
    `_Ensure your device is charged and prepare your scrap sheet and pen. Good luck, candidates!_ 🏆`;
}

/**
 * GET /api/broadcast/weekly-exam
 * Returns status, student counts, and WhatsApp preview
 */
export async function GET(req: NextRequest) {
  try {
    const rawStudents = await fetchStudentsForAdmin();
    const jhsStudents = rawStudents.filter((s) => (s.level || '').toUpperCase().startsWith('JHS'));

    const host = req.headers.get('host') || 'academicprep.com';
    const proto = host.includes('localhost') ? 'http' : 'https';
    const examUrl = `${proto}://${host}/jhs/weekly-exam?mode=scheduled`;

    const whatsAppMessage = formatWeeklyExamWhatsApp(examUrl);
    const encoded = encodeURIComponent(whatsAppMessage);

    return NextResponse.json({
      success: true,
      exam: {
        id: OFFICIAL_SCHEDULED_EXAM.id,
        title: OFFICIAL_SCHEDULED_EXAM.title,
        scheduledStartUtc: OFFICIAL_SCHEDULED_EXAM.scheduledStartUtc,
        paper1DurationMinutes: OFFICIAL_SCHEDULED_EXAM.paper1DurationMinutes,
        paper2DurationMinutes: OFFICIAL_SCHEDULED_EXAM.paper2DurationMinutes,
        totalMarks: OFFICIAL_SCHEDULED_EXAM.totalMarks,
      },
      stats: {
        totalStudents: rawStudents.length,
        jhsStudentsCount: jhsStudents.length,
      },
      activeWhatsAppProvider: getActiveWhatsAppProvider(),
      previewMessage: whatsAppMessage,
      universalShareLink: `https://api.whatsapp.com/send?text=${encoded}`,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to inspect broadcast status.' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/broadcast/weekly-exam
 * Dispatches the 6:00 PM Weekly Exam broadcast to registered students via Meta Cloud API / WhatsApp
 */
export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json(
      { success: false, error: 'Administrator session required to dispatch exam alerts.' },
      { status: 401 }
    );
  }

  try {
    const body = await req.json().catch(() => ({}));
    const { targetGroup = 'JHS', channel = 'whatsapp_server', broadcastType = 'standard' } = body;

    const rawStudents = await fetchStudentsForAdmin();
    let targetStudents = rawStudents;

    if (targetGroup === 'JHS') {
      targetStudents = rawStudents.filter((s) => (s.level || '').toUpperCase().startsWith('JHS'));
    }

    const validRecipients = targetStudents
      .map((s) => ({ ...s, cleaned: cleanPhoneNumber(s.phone) }))
      .filter((s) => s.cleaned.isValid);

    if (validRecipients.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No registered students with valid phone numbers found for this level.' },
        { status: 400 }
      );
    }

    const host = req.headers.get('host') || 'academicprep.com';
    const proto = host.includes('localhost') ? 'http' : 'https';
    const examUrl = `${proto}://${host}/jhs/weekly-exam?mode=scheduled`;

    const whatsAppMessage = formatWeeklyExamWhatsApp(examUrl, broadcastType === '5min_reminder');
    const phoneList = validRecipients.map((s) => s.cleaned.international);

    if (channel === 'whatsapp_server') {
      const waResult = await sendBulkWhatsApp(phoneList, whatsAppMessage);
      return NextResponse.json({
        success: true,
        channel: 'whatsapp_server',
        provider: waResult.provider,
        targetGroup,
        totalRecipients: validRecipients.length,
        sentCount: waResult.sentCount,
        failedCount: waResult.failedCount,
        messagePreview: whatsAppMessage,
        statusMessage: waResult.message,
        details: waResult.details,
      });
    }

    if (channel === 'sms') {
      const smsMessage = `AcademicPrep Alert: Weekly Science Exam (Atomic Structure) starts at 6:00 PM GMT sharp. 30m Objs + 1hr Theory. Enter: ${examUrl}`;
      const smsResult = await sendBulkSms(phoneList, smsMessage);
      return NextResponse.json({
        success: true,
        channel: 'sms',
        provider: smsResult.provider,
        targetGroup,
        totalRecipients: validRecipients.length,
        sentCount: smsResult.sentCount,
        failedCount: smsResult.failedCount,
        messagePreview: smsMessage,
        statusMessage: smsResult.message,
        details: smsResult.details,
      });
    }

    const encoded = encodeURIComponent(whatsAppMessage);
    return NextResponse.json({
      success: true,
      channel: 'client_link',
      totalRecipients: validRecipients.length,
      universalShareLink: `https://api.whatsapp.com/send?text=${encoded}`,
      previewMessage: whatsAppMessage,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to dispatch broadcast.' },
      { status: 500 }
    );
  }
}
