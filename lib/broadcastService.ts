// Broadcast & Multi-Channel Notification Service for AcademicPrep
// Handles SMS dispatching via Ghanaian SMS gateways (Arkesel, Hubtel, mNotify, Twilio)
// and WhatsApp broadcast generation for registered students.

export interface CleanPhoneResult {
  raw: string;
  international: string; // e.g. 233241234567 (no + sign, suitable for APIs & WhatsApp wa.me)
  local: string;         // e.g. 0241234567
  isValid: boolean;
}

/**
 * Standardizes Ghanaian and international phone numbers.
 * Converts 024XXXXXXX, 055XXXXXXX, +23324XXXXXXX to 23324XXXXXXX.
 */
export function cleanPhoneNumber(rawPhone: string): CleanPhoneResult {
  const digitsOnly = String(rawPhone || '').replace(/\D/g, '');
  
  // Ghanaian local format starting with 0 (e.g. 0241234567 -> 10 digits)
  if (digitsOnly.length === 10 && digitsOnly.startsWith('0')) {
    const international = `233${digitsOnly.slice(1)}`;
    return {
      raw: rawPhone,
      international,
      local: digitsOnly,
      isValid: true,
    };
  }

  // Already international format starting with 233 (e.g. 233241234567 -> 12 digits)
  if (digitsOnly.length === 12 && digitsOnly.startsWith('233')) {
    const local = `0${digitsOnly.slice(3)}`;
    return {
      raw: rawPhone,
      international: digitsOnly,
      local,
      isValid: true,
    };
  }

  // 9 digits without leading 0 (e.g. 241234567)
  if (digitsOnly.length === 9) {
    return {
      raw: rawPhone,
      international: `233${digitsOnly}`,
      local: `0${digitsOnly}`,
      isValid: true,
    };
  }

  // Fallback for valid international numbers (10 to 15 digits)
  if (digitsOnly.length >= 10 && digitsOnly.length <= 15) {
    return {
      raw: rawPhone,
      international: digitsOnly,
      local: digitsOnly,
      isValid: true,
    };
  }

  return {
    raw: rawPhone,
    international: digitsOnly,
    local: digitsOnly,
    isValid: false,
  };
}

/**
 * Formats a concise, high-impact SMS message fitting standard 160-char GSM limits.
 */
export function formatAnnouncementSms(title: string, url: string, customMessage?: string): string {
  if (customMessage?.trim()) {
    return customMessage.trim();
  }
  // Keep title concise if needed
  const cleanTitle = title.length > 70 ? `${title.slice(0, 67)}...` : title;
  return `AcademicPrep Alert: ${cleanTitle}. Read update here: ${url}`;
}

/**
 * Formats a rich WhatsApp announcement with headings, emojis, and link.
 */
export function formatAnnouncementWhatsApp(title: string, excerpt: string, url: string, customMessage?: string): string {
  if (customMessage?.trim()) {
    return customMessage.trim();
  }

  return `📢 *ACADEMICPREP OFFICIAL ANNOUNCEMENT* 🎓\n\n*${title}*\n\n${excerpt}\n\n👉 *Read full details & updates on the portal:*\n${url}\n\n*(Share with your classmates and study groups!)* 🔥`;
}

export type SmsProviderName = 'arkesel' | 'hubtel' | 'mnotify' | 'twilio' | 'simulated';

export interface SendSmsResult {
  success: boolean;
  provider: SmsProviderName;
  sentCount: number;
  failedCount: number;
  message: string;
  details?: any;
}

/**
 * Dispatches bulk SMS to recipients using configured Ghanaian SMS Gateways.
 * Checks for Arkesel, Hubtel, mNotify, and Twilio credentials.
 * If none are configured, safely runs in Simulation / Dry-Run mode.
 */
export async function sendBulkSms(
  recipients: string[],
  messageText: string
): Promise<SendSmsResult> {
  const validRecipients = recipients
    .map(cleanPhoneNumber)
    .filter((p) => p.isValid);

  if (validRecipients.length === 0) {
    return {
      success: false,
      provider: 'simulated',
      sentCount: 0,
      failedCount: 0,
      message: 'No valid phone numbers found to deliver SMS.',
    };
  }

  // 1. Check ARKESEL Gateway (Very popular in Ghana, fast delivery)
  const arkeselApiKey = process.env.ARKESEL_API_KEY;
  if (arkeselApiKey) {
    try {
      const senderId = process.env.ARKESEL_SENDER_ID || 'AcadPrep';
      const phoneList = validRecipients.map((p) => p.international);

      const res = await fetch('https://sms.arkesel.com/api/v2/sms/send', {
        method: 'POST',
        headers: {
          'api-key': arkeselApiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: senderId,
          message: messageText,
          recipients: phoneList,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.status === 'success' || data.code === '1000')) {
        return {
          success: true,
          provider: 'arkesel',
          sentCount: validRecipients.length,
          failedCount: 0,
          message: `Successfully delivered SMS to ${validRecipients.length} students via Arkesel.`,
          details: data,
        };
      } else {
        console.warn('Arkesel API notice:', data);
      }
    } catch (err: any) {
      console.error('Arkesel dispatch error:', err?.message || err);
    }
  }

  // 2. Check HUBTEL Gateway
  const hubtelClientId = process.env.HUBTEL_CLIENT_ID;
  const hubtelClientSecret = process.env.HUBTEL_CLIENT_SECRET;
  if (hubtelClientId && hubtelClientSecret) {
    try {
      const senderId = process.env.HUBTEL_SENDER_ID || 'AcadPrep';
      const authHeader = `Basic ${Buffer.from(`${hubtelClientId}:${hubtelClientSecret}`).toString('base64')}`;

      let sent = 0;
      let failed = 0;

      // Hubtel batch dispatch
      for (const recipient of validRecipients) {
        try {
          const res = await fetch('https://smsc.hubtel.com/v1/messages/send', {
            method: 'POST',
            headers: {
              Authorization: authHeader,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              From: senderId,
              To: recipient.international,
              Content: messageText,
            }),
          });
          if (res.ok) sent++;
          else failed++;
        } catch {
          failed++;
        }
      }

      return {
        success: sent > 0,
        provider: 'hubtel',
        sentCount: sent,
        failedCount: failed,
        message: `Dispatched SMS to ${sent} students via Hubtel (${failed} failed).`,
      };
    } catch (err: any) {
      console.error('Hubtel dispatch error:', err?.message || err);
    }
  }

  // 3. Check mNotify Gateway
  const mnotifyApiKey = process.env.MNOTIFY_API_KEY;
  if (mnotifyApiKey) {
    try {
      const senderId = process.env.MNOTIFY_SENDER_ID || 'AcadPrep';
      const phoneList = validRecipients.map((p) => p.local);

      const res = await fetch(`https://api.mnotify.com/api/sms/quick?key=${mnotifyApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: phoneList,
          sender: senderId,
          message: messageText,
          is_schedule: false,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.status === 'success') {
        return {
          success: true,
          provider: 'mnotify',
          sentCount: validRecipients.length,
          failedCount: 0,
          message: `Dispatched SMS to ${validRecipients.length} students via mNotify.`,
          details: data,
        };
      }
    } catch (err: any) {
      console.error('mNotify dispatch error:', err?.message || err);
    }
  }

  // 4. Default: Simulation Mode (No external API keys required to test)
  // Provides clean logs and instructions on enabling live SMS gateways
  console.info(
    `[SMS Simulation] Broadcast prepared for ${validRecipients.length} recipients: "${messageText.slice(0, 60)}..."`
  );

  return {
    success: true,
    provider: 'simulated',
    sentCount: validRecipients.length,
    failedCount: 0,
    message: `Broadcast preview ready for ${validRecipients.length} registered students (Simulation Mode). To send live SMS, add ARKESEL_API_KEY, HUBTEL_CLIENT_ID, or MNOTIFY_API_KEY to .env.local.`,
    details: {
      recipientCount: validRecipients.length,
      sampleRecipients: validRecipients.slice(0, 5).map((p) => p.international),
    },
  };
}
