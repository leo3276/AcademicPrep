import { NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const VERIFY_TOKEN = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN || 'academicprep_webhook_verify_token_2026';

/**
 * GET /api/webhook/whatsapp
 * Meta WhatsApp Webhook Verification Handshake
 * Responds to Meta with the exact hub.challenge so Meta validates the callback URL.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // If Meta sends the verify request
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.info('[WhatsApp Webhook] Handshake verified successfully with Meta.');
    return new Response(challenge, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  // Also accept if token matches directly
  if (token === VERIFY_TOKEN && challenge) {
    return new Response(challenge, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return new Response('Verification failed. Invalid verify token.', { status: 403 });
}

/**
 * POST /api/webhook/whatsapp
 * Receives incoming event notifications (delivery status, read receipts, messages)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    // Always acknowledge receipt to Meta with 200 OK
    return new Response('EVENT_RECEIVED', { status: 200 });
  } catch (err) {
    return new Response('OK', { status: 200 });
  }
}
