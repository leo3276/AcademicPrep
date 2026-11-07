// ============================================================================
// Smart Client & Edge PDF Cache Hub for AcademicPrep
// Eliminates repetitive Supabase Storage downloads & egress by caching past
// papers in the browser's CacheStorage and through Vercel's global CDN.
// Automatically stamps every viewed & downloaded PDF with AcademicPrep.com
// logo, branding, and protection watermarks.
// ============================================================================

import { applyAcademicPrepWatermark, downloadWatermarkedPdf } from './pdfWatermark';

const CACHE_NAME = 'academicprep_pdf_cache_v2'; // Bumped to v2 for watermarking
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
  return `/offline-cache/pdf/${id}?v=${version}&wm=v2`;
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
 * Fetches, watermarks, and caches a PDF, returning a local object URL (blob:...)
 */
export async function getCachedPdfBlobUrl(
  doc: { fileUrl: string; id: string; uploadedAt?: string; fileName?: string },
  onProgressState?: (state: 'idle' | 'downloading' | 'cached' | 'ready') => void
): Promise<string> {
  const proxyUrl = getCdnPdfUrl(doc.fileUrl);
  const cacheKey = getCacheKey(doc.id, doc.uploadedAt);

  if (!hasCacheSupport()) {
    // If CacheStorage not available, attempt client-side watermarked blob
    try {
      const fetchTarget = proxyUrl || doc.fileUrl;
      const res = await fetch(fetchTarget);
      if (res.ok) {
        const ab = await res.arrayBuffer();
        const watermarked = await applyAcademicPrepWatermark(ab, {
          fileName: doc.fileName,
          documentTitle: doc.fileName?.replace(/_/g, ' ').replace(/\.pdf$/i, ''),
        });
        const blob = new Blob([watermarked as unknown as BlobPart], { type: 'application/pdf' });
        return URL.createObjectURL(blob);
      }
    } catch (e) {
      console.warn('[PdfCache] Direct fetch fallback:', e);
    }
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

    const rawBuffer = await response.arrayBuffer();

    // ─────────────────────────────────────────────────────────────
    // Apply Official AcademicPrep.com Watermark & Logo
    // ─────────────────────────────────────────────────────────────
    let finalBuffer: Uint8Array | ArrayBuffer = rawBuffer;
    try {
      finalBuffer = await applyAcademicPrepWatermark(rawBuffer, {
        fileName: doc.fileName,
        documentTitle: doc.fileName?.replace(/_/g, ' ').replace(/\.pdf$/i, ''),
        categoryLabel: 'Official Examination Paper',
      });
    } catch (wmErr) {
      console.warn('[PdfCache] Watermarking warning, saving raw PDF:', wmErr);
    }

    const blob = new Blob([finalBuffer as unknown as BlobPart], { type: 'application/pdf' });

    // Store watermarked PDF in CacheStorage
    try {
      const watermarkedResponse = new Response(blob, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Length': String(blob.size),
        },
      });
      await cache.put(cacheKey, watermarkedResponse);
    } catch {
      // Storage quota or private browsing fallback
    }

    if (onProgressState) onProgressState('ready');
    return URL.createObjectURL(blob);
  } catch (err) {
    console.warn('[PdfCache] Cache fallback to direct URL:', err);
    return doc.fileUrl;
  }
}

/**
 * High-performance action: View PDF in new tab with AcademicPrep watermark
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
 * High-performance action: Download PDF with AcademicPrep watermark
 */
export async function downloadPdfDocumentCached(
  doc: { fileUrl: string; id: string; uploadedAt?: string; fileName: string },
  onProgressState?: (state: 'idle' | 'downloading' | 'cached' | 'ready') => void
): Promise<void> {
  try {
    const blobUrl = await getCachedPdfBlobUrl(doc, onProgressState);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = doc.fileName || 'academicprep_document.pdf';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      if (blobUrl.startsWith('blob:')) {
        URL.revokeObjectURL(blobUrl);
      }
    }, 2000);
  } catch (err) {
    // Fallback: fetch & watermark
    try {
      const res = await fetch(doc.fileUrl);
      const ab = await res.arrayBuffer();
      await downloadWatermarkedPdf(ab, doc.fileName || 'academicprep_document.pdf', {
        documentTitle: doc.fileName,
      });
    } catch {
      const a = document.createElement('a');
      a.href = doc.fileUrl;
      a.download = doc.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
}

/**
 * Pre-caches an array of PDF papers silently in the background
 */
export async function prefetchPdfDocuments(
  docs: Array<{ fileUrl: string; id: string; uploadedAt?: string; fileName?: string }>
): Promise<number> {
  if (!hasCacheSupport()) return 0;
  let cachedCount = 0;

  for (const doc of docs) {
    try {
      const isCached = await isPdfCachedLocally(doc.id, doc.uploadedAt);
      if (!isCached) {
        await getCachedPdfBlobUrl(doc);
        cachedCount++;
      }
    } catch {
      // Non-blocking prefetch failure
    }
  }

  return cachedCount;
}

/**
 * Clears expired or corrupted PDF cache
 */
export async function clearLocalPdfCache(): Promise<boolean> {
  if (!hasCacheSupport()) return false;
  try {
    return await caches.delete(CACHE_NAME);
  } catch {
    return false;
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
