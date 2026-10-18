// ============================================================================
// Smart Client & Edge PDF Cache Hub for AcademicPrep
// Eliminates repetitive Supabase Storage downloads & egress by caching past
// papers in the browser's CacheStorage and through Vercel's global CDN.
// ============================================================================

const CACHE_NAME = 'academicprep_pdf_cache_v1';
const CACHE_GLOBAL_VERSION_KEY = 'academicprep_pdf_cache_global_version';

/**
 * Transforms a Supabase Storage URL into an Edge-cached CDN URL
 */
export function getCdnPdfUrl(originalUrl: string): string {
  if (!originalUrl) return '';
  // If already proxied or relative, return as is
  if (originalUrl.startsWith('/api/pdf-cdn')) return originalUrl;
  return `/api/pdf-cdn?url=${encodeURIComponent(originalUrl)}`;
}

/**
 * Builds a versioned cache request key
 */
function getCacheKey(id: string, uploadedAt?: string): string {
  const version = uploadedAt ? new Date(uploadedAt).getTime() : '1';
  return `/offline-cache/pdf/${id}?v=${version}`;
}

/**
 * Checks if the browser supports CacheStorage
 */
function hasCacheSupport(): boolean {
  return typeof window !== 'undefined' && 'caches' in window;
}

/**
 * Checks if a specific PDF is currently cached offline on the student's device
 */
export async function isPdfCachedLocally(id: string, uploadedAt?: string): Promise<boolean> {
  if (!hasCacheSupport()) return false;
  try {
    const cache = await caches.open(CACHE_NAME);
    const key = getCacheKey(id, uploadedAt);
    const match = await cache.match(key);
    return Boolean(match);
  } catch {
    return false;
  }
}

/**
 * Fetches and caches a PDF, returning a local object URL (blob:...)
 */
export async function getCachedPdfBlobUrl(
  doc: { fileUrl: string; id: string; uploadedAt?: string; fileName?: string },
  onProgressState?: (state: 'idle' | 'downloading' | 'cached' | 'ready') => void
): Promise<string> {
  const proxyUrl = getCdnPdfUrl(doc.fileUrl);
  const cacheKey = getCacheKey(doc.id, doc.uploadedAt);

  if (!hasCacheSupport()) {
    return proxyUrl || doc.fileUrl;
  }

  try {
    const cache = await caches.open(CACHE_NAME);
    const existing = await cache.match(cacheKey);

    if (existing) {
      if (onProgressState) onProgressState('cached');
      const blob = await existing.blob();
      return URL.createObjectURL(blob);
    }

    if (onProgressState) onProgressState('downloading');

    // Fetch from edge CDN proxy (or fallback to original)
    const fetchTarget = proxyUrl || doc.fileUrl;
    const response = await fetch(fetchTarget, {
      cache: 'default',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PDF (HTTP ${response.status})`);
    }

    // Clone response before saving to cache
    const responseClone = response.clone();
    try {
      await cache.put(cacheKey, responseClone);
    } catch {
      // Storage quota or private browsing fallback
    }

    if (onProgressState) onProgressState('ready');
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (err) {
    console.warn('[PdfCache] Cache fallback to direct URL:', err);
    return doc.fileUrl;
  }
}

/**
 * High-performance action: View PDF in new tab using local cache
 */
export async function openPdfDocumentCached(
  doc: { fileUrl: string; id: string; uploadedAt?: string; fileName?: string },
  onProgressState?: (state: 'idle' | 'downloading' | 'cached' | 'ready') => void
): Promise<void> {
  try {
    const blobUrl = await getCachedPdfBlobUrl(doc, onProgressState);
    const win = window.open(blobUrl, '_blank');
    if (!win) {
      // Fallback if popup blocked
      const a = document.createElement('a');
      a.href = blobUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  } catch (err) {
    // Ultimate fallback: direct link
    window.open(doc.fileUrl, '_blank');
  }
}

/**
 * High-performance action: Download PDF using local cache
 */
export async function downloadPdfDocumentCached(
  doc: { fileUrl: string; id: string; uploadedAt?: string; fileName: string },
  onProgressState?: (state: 'idle' | 'downloading' | 'cached' | 'ready') => void
): Promise<void> {
  try {
    const blobUrl = await getCachedPdfBlobUrl(doc, onProgressState);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = doc.fileName || 'examination-paper.pdf';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      // Revoke blob URL if it was created
      if (blobUrl.startsWith('blob:')) {
        URL.revokeObjectURL(blobUrl);
      }
    }, 2000);
  } catch (err) {
    // Fallback: direct download
    const a = document.createElement('a');
    a.href = doc.fileUrl;
    a.download = doc.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

/**
 * Summary of all offline papers saved on the student's device
 */
export async function getOfflineStorageSummary(): Promise<{
  count: number;
  totalBytes: number;
  formattedSize: string;
}> {
  if (!hasCacheSupport()) {
    return { count: 0, totalBytes: 0, formattedSize: '0 MB' };
  }

  try {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    let totalBytes = 0;

    for (const req of keys) {
      const match = await cache.match(req);
      if (match) {
        const blob = await match.blob();
        totalBytes += blob.size;
      }
    }

    const mb = (totalBytes / (1024 * 1024)).toFixed(1);
    return {
      count: keys.length,
      totalBytes,
      formattedSize: `${mb} MB`,
    };
  } catch {
    return { count: 0, totalBytes: 0, formattedSize: '0 MB' };
  }
}

/**
 * Clears all cached PDFs from the student's phone / computer
 */
export async function clearAllOfflinePdfs(): Promise<boolean> {
  if (!hasCacheSupport()) return false;
  try {
    return await caches.delete(CACHE_NAME);
  } catch {
    return false;
  }
}
