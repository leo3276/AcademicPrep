import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Allowed Storage hosts for security
const ALLOWED_STORAGE_HOSTS = [
  'wwbmayypdzisopdqlefg.supabase.co',
  'ynqlfjoybxzrgczktrht.supabase.co',
  'pub-c3d4ea9ea40449089b98812ed9cacaf8.r2.dev',
];

/**
 * High-Performance Edge Proxy for PDF Past Papers & Mocks
 * Implements aggressive immutable CDN headers to offload storage egress.
 * Supported by Vercel Edge Network, Cloudflare, and browser Cache-Control.
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get('url');

    if (!targetUrl) {
      return NextResponse.json({ error: 'Missing target PDF URL' }, { status: 400 });
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(targetUrl);
    } catch {
      return NextResponse.json({ error: 'Invalid URL provided' }, { status: 400 });
    }

    // Host verification
    const isAllowed = ALLOWED_STORAGE_HOSTS.some(
      (host) =>
        parsedUrl.hostname === host ||
        parsedUrl.hostname.endsWith('.supabase.co') ||
        parsedUrl.hostname.endsWith('.r2.dev')
    );

    if (!isAllowed) {
      return NextResponse.json({ error: 'Forbidden host' }, { status: 403 });
    }

    // Fetch original file from Supabase Storage
    const upstreamRes = await fetch(targetUrl, {
      headers: {
        'Accept': 'application/pdf,application/octet-stream,*/*',
      },
    });

    if (!upstreamRes.ok) {
      return NextResponse.json(
        { error: `Upstream storage returned HTTP ${upstreamRes.status}` },
        { status: upstreamRes.status }
      );
    }

    const contentType = upstreamRes.headers.get('content-type') || 'application/pdf';
    const contentLength = upstreamRes.headers.get('content-length');
    const body = await upstreamRes.arrayBuffer();

    const headers = new Headers();
    headers.set('Content-Type', contentType);
    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }

    // Aggressive Edge and Browser Caching Headers
    // 1 Year immutable cache at Edge and Browser
    headers.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000, immutable');
    headers.set('CDN-Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Vercel-CDN-Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('X-Content-Type-Options', 'nosniff');

    return new Response(body, {
      status: 200,
      headers,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Failed to proxy PDF' },
      { status: 500 }
    );
  }
}
