import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { requireAdmin, adminUnauthorized } from '@/lib/adminAuth';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabaseClient';
import {
  WhatsAppChannelConfig,
  DEFAULT_WHATSAPP_CHANNEL_CONFIG,
} from '@/lib/whatsappChannelStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DATA_FILE = path.join(process.cwd(), 'data', 'whatsapp_channel_config.json');
const STORAGE_FILE_NAME = 'whatsapp_channel_config.json';
const DOCUMENTS_BUCKET = 'documents';

let memoryCache: WhatsAppChannelConfig | null = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 30 * 1000; // 30s cache

async function getStoredConfig(): Promise<WhatsAppChannelConfig> {
  if (memoryCache && Date.now() - lastCacheTime < CACHE_TTL_MS) {
    return memoryCache;
  }

  // 1. Primary: Try Supabase Storage
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .download(STORAGE_FILE_NAME);

      if (!error && data) {
        const text = await data.text();
        const parsed = JSON.parse(text);
        if (parsed && typeof parsed === 'object') {
          const config: WhatsAppChannelConfig = { ...DEFAULT_WHATSAPP_CHANNEL_CONFIG, ...parsed };
          memoryCache = config;
          lastCacheTime = Date.now();
          return config;
        }
      }
    } catch (err) {
      console.warn('[WhatsAppChannelAPI] Supabase storage read note:', err);
    }
  }

  // 2. Secondary: Try local data/whatsapp_channel_config.json
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        const config: WhatsAppChannelConfig = { ...DEFAULT_WHATSAPP_CHANNEL_CONFIG, ...parsed };
        memoryCache = config;
        lastCacheTime = Date.now();
        return config;
      }
    }
  } catch (err) {
    console.warn('[WhatsAppChannelAPI] Local data read note:', err);
  }

  // 3. Fallback default
  return DEFAULT_WHATSAPP_CHANNEL_CONFIG;
}

async function saveStoredConfig(config: WhatsAppChannelConfig): Promise<void> {
  memoryCache = config;
  lastCacheTime = Date.now();

  const payload = JSON.stringify(config, null, 2);

  // 1. Primary: Save to Supabase Storage
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .upload(STORAGE_FILE_NAME, payload, {
          upsert: true,
          contentType: 'application/json',
          cacheControl: '0',
        });
      if (error) {
        console.error('[WhatsAppChannelAPI] Failed to save config to Supabase storage:', error);
      }
    } catch (err) {
      console.error('[WhatsAppChannelAPI] Exception saving to Supabase storage:', err);
    }
  }

  // 2. Secondary: Sync to local disk if writable
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, payload, 'utf8');
  } catch {
    // Expected on read-only serverless environment
  }
}

/**
 * Public GET: Fetch the current WhatsApp Channel settings for student display
 */
export async function GET() {
  try {
    const channel = await getStoredConfig();
    return NextResponse.json(
      { success: true, channel },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=120',
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to load channel settings.' },
      { status: 500 }
    );
  }
}

/**
 * Admin POST: Update the WhatsApp Channel settings
 */
export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return adminUnauthorized();
  }

  try {
    const body = await req.json();
    const current = await getStoredConfig();

    const url = typeof body.url === 'string' ? body.url.trim() : current.url;
    const title = typeof body.title === 'string' ? body.title.trim() : current.title;
    const description = typeof body.description === 'string' ? body.description.trim() : current.description;
    const buttonText = typeof body.buttonText === 'string' ? body.buttonText.trim() : current.buttonText;
    const badgeText = typeof body.badgeText === 'string' ? body.badgeText.trim() : current.badgeText;
    const followerCountText = typeof body.followerCountText === 'string' ? body.followerCountText.trim() : current.followerCountText;
    const enabled = typeof body.enabled === 'boolean' ? body.enabled : current.enabled;

    // Optional URL validation if URL is provided
    if (url && !/^https?:\/\//i.test(url)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid link starting with http:// or https://' },
        { status: 400 }
      );
    }

    const updatedConfig: WhatsAppChannelConfig = {
      url,
      title: title || DEFAULT_WHATSAPP_CHANNEL_CONFIG.title,
      description: description || DEFAULT_WHATSAPP_CHANNEL_CONFIG.description,
      buttonText: buttonText || DEFAULT_WHATSAPP_CHANNEL_CONFIG.buttonText,
      badgeText: badgeText || DEFAULT_WHATSAPP_CHANNEL_CONFIG.badgeText,
      followerCountText: followerCountText || DEFAULT_WHATSAPP_CHANNEL_CONFIG.followerCountText,
      enabled: Boolean(enabled),
      updatedAt: new Date().toISOString(),
    };

    await saveStoredConfig(updatedConfig);

    return NextResponse.json({
      success: true,
      channel: updatedConfig,
      message: updatedConfig.enabled
        ? 'WhatsApp Channel settings saved and live on the homepage!'
        : 'WhatsApp Channel settings saved (currently hidden from homepage).',
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to save channel settings.' },
      { status: 500 }
    );
  }
}
