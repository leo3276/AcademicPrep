import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabaseClient';
import { requireAdmin } from '@/lib/adminAuth';
import { sendBulkWhatsApp, sendBulkSms, getActiveWhatsAppProvider } from '@/lib/broadcastService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function isAuthorizedCron(req: NextRequest): boolean {
  const cronSecret = (process.env.CRON_SECRET || '').trim();
  const authHeader = req.headers.get('authorization') || '';
  if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
    return true;
  }
  if (requireAdmin(req)) {
    return true;
  }
  // Allow Vercel internal cron invocation when CRON_SECRET is not set yet
  if (!cronSecret && req.headers.get('user-agent')?.includes('vercel-cron')) {
    return true;
  }
  return false;
}

/**
 * GET /api/cron/renewals
 * Scheduled daily job: Finds students whose Full Access pass expires within 3 days
 * and sends a renewal reminder with a direct link to renew via Mobile Money.
 */
export async function GET(req: NextRequest) {
  if (!isAuthorizedCron(req)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized cron request.' },
      { status: 401 }
    );
  }

  if (!isSupabaseConfigured || !supabaseAdmin) {
    return NextResponse.json(
      { ok: false, error: 'Supabase admin client is not configured.' },
      { status: 500 }
    );
  }
  const supabase = supabaseAdmin;

  const now = new Date();
  const threeDaysFromNow = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  try {
    const { data: expiringStudents, error } = await supabase
      .from('students')
      .select('id, name, phone, access_expires_at, renewal_reminder_sent_at')
      .eq('has_full_access', true)
      .gt('access_expires_at', now.toISOString())
      .lte('access_expires_at', threeDaysFromNow.toISOString());

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    const candidates = (expiringStudents || []).filter((student: any) => {
      if (!student?.phone) return false;
      if (!student.renewal_reminder_sent_at) return true;
      const lastSentMs = Date.parse(student.renewal_reminder_sent_at);
      return Number.isNaN(lastSentMs) || lastSentMs < sevenDaysAgo.getTime();
    });

    if (candidates.length === 0) {
      return NextResponse.json({
        ok: true,
        remindedCount: 0,
        message: 'No student passes expiring within the next 3 days require a reminder.',
      });
    }

    const renewUrl = 'https://www.acadmicprep.com/account?renew=1';
    const waProvider = getActiveWhatsAppProvider();
    let sentCount = 0;

    for (const student of candidates) {
      const firstName = String(student.name || 'Student').trim().split(/\s+/)[0] || 'Student';
      const expiryDate = new Date(student.access_expires_at).toLocaleDateString('en-GH', {
        month: 'short',
        day: 'numeric',
      });

      const messageText =
        `Hi ${firstName}, your AcademicPrep Full Access Pass expires on ${expiryDate} (in less than 3 days). ` +
        `Renew anytime via Mobile Money to keep uninterrupted access to all notes, quizzes & past papers: ${renewUrl}`;

      if (waProvider !== 'simulated') {
        await sendBulkWhatsApp([student.phone], messageText);
      } else {
        await sendBulkSms([student.phone], messageText);
      }

      await supabase
        .from('students')
        .update({ renewal_reminder_sent_at: now.toISOString() })
        .eq('id', student.id);

      sentCount++;
    }

    return NextResponse.json({
      ok: true,
      remindedCount: sentCount,
      channel: waProvider !== 'simulated' ? `whatsapp:${waProvider}` : 'sms',
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || 'Renewal reminder job failed.' },
      { status: 500 }
    );
  }
}
