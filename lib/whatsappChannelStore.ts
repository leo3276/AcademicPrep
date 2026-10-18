// ============================================================================
// WhatsApp Channel Configuration Store for AcademicPrep
// Manages the official student WhatsApp Channel link, live homepage banner,
// and admin persistence via Supabase Storage and Next.js API routes.
// ============================================================================

export interface WhatsAppChannelConfig {
  url: string;
  title: string;
  description: string;
  buttonText: string;
  badgeText: string;
  followerCountText: string;
  enabled: boolean;
  updatedAt: string;
}

export const DEFAULT_WHATSAPP_CHANNEL_CONFIG: WhatsAppChannelConfig = {
  url: 'https://whatsapp.com/channel/academicprep',
  title: 'AcademicPrep WhatsApp Channel',
  description:
    'Join our official student community for daily WAEC & BECE questions and study alerts.',
  buttonText: 'Follow Channel',
  badgeText: 'Official WAEC Channel',
  followerCountText: '500+ Students Following',
  enabled: true,
  updatedAt: new Date().toISOString(),
};

const LOCAL_STORAGE_KEY = 'academicprep_whatsapp_channel_config_v1';

let inMemoryCache: WhatsAppChannelConfig | null = null;
let activeFetchPromise: Promise<WhatsAppChannelConfig> | null = null;

/**
 * Fetch WhatsApp Channel configuration for public display.
 * Uses in-memory cache, localStorage, and background revalidation.
 */
export async function fetchWhatsAppChannelConfig(): Promise<WhatsAppChannelConfig> {
  // 1. Return in-memory cache if available
  if (inMemoryCache) {
    return inMemoryCache;
  }

  // 2. Read from localStorage on client
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed === 'object') {
          inMemoryCache = { ...DEFAULT_WHATSAPP_CHANNEL_CONFIG, ...parsed };
        }
      }
    } catch {}
  }

  // 3. Deduplicate active network fetch
  if (!activeFetchPromise) {
    activeFetchPromise = (async (): Promise<WhatsAppChannelConfig> => {
      try {
        const res = await fetch('/api/settings/whatsapp-channel', {
          cache: 'default',
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.channel) {
            const resolved: WhatsAppChannelConfig = { ...DEFAULT_WHATSAPP_CHANNEL_CONFIG, ...data.channel };
            inMemoryCache = resolved;
            if (typeof window !== 'undefined') {
              try {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resolved));
              } catch {}
            }
            return resolved;
          }
        }
      } catch (err) {
        console.warn('[WhatsAppChannelStore] Network fetch notice:', err);
      } finally {
        activeFetchPromise = null;
      }
      return inMemoryCache || DEFAULT_WHATSAPP_CHANNEL_CONFIG;
    })();
  }

  const result = await activeFetchPromise;
  return result || inMemoryCache || DEFAULT_WHATSAPP_CHANNEL_CONFIG;
}

/**
 * Admin action: Save updated WhatsApp Channel configuration.
 */
export async function saveWhatsAppChannelConfig(
  updates: Partial<WhatsAppChannelConfig>
): Promise<{ success: boolean; channel?: WhatsAppChannelConfig; config?: WhatsAppChannelConfig; error?: string }> {
  try {
    const res = await fetch('/api/settings/whatsapp-channel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });

    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data?.error || 'Failed to save channel settings.' };
    }

    if (data?.channel) {
      inMemoryCache = { ...DEFAULT_WHATSAPP_CHANNEL_CONFIG, ...data.channel };
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inMemoryCache));
          window.dispatchEvent(
            new CustomEvent('academicprep:whatsapp-channel-updated', {
              detail: inMemoryCache,
            })
          );
        } catch {}
      }
    }

    const finalConfig = inMemoryCache || DEFAULT_WHATSAPP_CHANNEL_CONFIG;
    return { success: true, channel: finalConfig, config: finalConfig };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error saving settings.' };
  }
}
