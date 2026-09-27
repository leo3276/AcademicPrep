// PDF Document Management Hub for AcademicPrep
// Handles uploading, storage, retrieval, and downloading of BECE & Trial PDFs

import { EducationLevel } from './types';

export type PdfCategory = 'bece_past_question' | 'trial_mock';
export type PdfPaperType = 'Paper 1' | 'Paper 2' | 'Combined Paper' | 'Marking Scheme';

export interface UploadedPdfDocument {
  id: string;
  title: string;
  category: PdfCategory;
  subjectId: string;
  subjectName: string;
  year?: number;
  level?: EducationLevel;
  paperType: PdfPaperType;
  fileName: string;
  fileUrl: string;
  fileSizeBytes: number;
  uploadedAt: string;
}

const PDF_LOCAL_STORAGE_KEY = 'academicprep_uploaded_pdfs_v1';

/**
 * Fetch all uploaded documents from server API with local storage fallback
 */
export async function fetchUploadedDocuments(): Promise<UploadedPdfDocument[]> {
  try {
    const res = await fetch('/api/documents', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        // Sync with local cache
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem(PDF_LOCAL_STORAGE_KEY, JSON.stringify(data));
          } catch {
            // storage full fallback
          }
        }
        return data;
      }
    }
  } catch (err) {
    console.warn('Failed to fetch from /api/documents, falling back to local cache', err);
  }

  // Fallback to local storage if API call fails
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(PDF_LOCAL_STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
  }

  return [];
}

/**
 * Upload a new PDF document via multipart FormData
 */
export async function uploadPdfDocument(formData: FormData): Promise<UploadedPdfDocument> {
  const file = formData.get('file') as File | null;
  const title = formData.get('title') as string | null;
  const category = formData.get('category') as PdfCategory | null;
  const subjectId = formData.get('subjectId') as string | null;
  const subjectName = formData.get('subjectName') as string | null;
  const year = formData.get('year') as string | null;
  const level = formData.get('level') as any;
  const paperType = formData.get('paperType') as PdfPaperType | null;

  // 1. Direct-to-Cloud Upload (Bypasses Vercel 4.5MB serverless body limit)
  if (file && typeof file !== 'string') {
    try {
      // Step A: Request a signed upload authorization (< 1 KB request)
      const signRes = await fetch('/api/documents/upload-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: file.name, contentType: file.type }),
      });

      if (signRes.ok) {
        const signData = await signRes.json();
        if (signData.signedUrl && signData.publicUrl) {
          // Step B: Stream file directly to Supabase Storage CDN (No 4.5MB Vercel limit!)
          const uploadRes = await fetch(signData.signedUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': file.type || 'application/pdf',
            },
            body: file,
          });

          if (!uploadRes.ok) {
            throw new Error(`Direct cloud storage upload failed (HTTP ${uploadRes.status})`);
          }

          // Step C: Register document metadata on the server (< 1 KB request)
          const metaRes = await fetch('/api/documents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: title ? title.trim() : file.name,
              category,
              subjectId,
              subjectName: subjectName || subjectId,
              year,
              level,
              paperType: paperType || 'Full Exam Paper',
              fileName: file.name,
              fileUrl: signData.publicUrl,
              fileSizeBytes: file.size,
            }),
          });

          if (metaRes.ok) {
            const created: UploadedPdfDocument = await metaRes.json();
            // Sync with local cache
            if (typeof window !== 'undefined') {
              try {
                const existing = await fetchUploadedDocuments();
                const updated = [created, ...existing.filter((d) => d.id !== created.id)];
                localStorage.setItem(PDF_LOCAL_STORAGE_KEY, JSON.stringify(updated));
              } catch {}
            }
            return created;
          } else {
            const errData = await metaRes.json().catch(() => ({}));
            throw new Error(errData.error || 'Failed to register document metadata');
          }
        }
      }
    } catch (directErr: any) {
      console.warn('Direct upload warning, attempting multipart fallback:', directErr?.message || directErr);
    }
  }

  // 2. Fallback: Standard multipart upload
  const res = await fetch('/api/documents', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || 'Failed to upload document');
  }

  const created: UploadedPdfDocument = await res.json();

  // Update local cache
  if (typeof window !== 'undefined') {
    try {
      const existing = await fetchUploadedDocuments();
      const updated = [created, ...existing.filter((d) => d.id !== created.id)];
      localStorage.setItem(PDF_LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  }

  return created;
}

/**
 * Delete a PDF document by ID
 */
export async function deletePdfDocument(id: string): Promise<boolean> {
  const res = await fetch(`/api/documents?id=${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete document');
  }

  // Update local cache
  if (typeof window !== 'undefined') {
    try {
      const existing = await fetchUploadedDocuments();
      const updated = existing.filter(d => d.id !== id);
      localStorage.setItem(PDF_LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  }

  return true;
}

/**
 * Format bytes to readable human string (e.g. 1.4 MB)
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
