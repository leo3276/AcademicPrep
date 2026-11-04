import fs from 'fs';
import path from 'path';
import { supabaseAdmin, isSupabaseConfigured } from './supabaseClient';

export interface UniversityContentReport {
  id: string;
  slideId?: string;
  courseCode: string;
  courseTitle: string;
  university?: string;
  issueType: 'outdated' | 'typo_inaccuracy' | 'missing_pages' | 'broken_file' | 'wrong_course' | 'other';
  description: string;
  contactEmail?: string;
  status: 'pending' | 'resolved' | 'dismissed';
  adminNotes?: string;
  createdAt: string;
  resolvedAt?: string;
}

const REPORTS_FILE = path.join(process.cwd(), 'data', 'university_reports.json');
const REPORTS_MANIFEST = 'university_reports_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

export async function getStoredContentReports(): Promise<UniversityContentReport[]> {
  // 1. Primary on Cloud / Vercel: Supabase Storage
  if (isSupabaseConfigured) {
    try {
      const { data: pubData } = supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .getPublicUrl(REPORTS_MANIFEST);

      if (pubData?.publicUrl) {
        const res = await fetch(`${pubData.publicUrl}?t=${Date.now()}`, { cache: 'no-store' });
        if (res.ok) {
          const parsed = await res.json();
          if (Array.isArray(parsed)) return parsed;
        }
      }
    } catch (err) {
      console.warn('[universityReportsStore] Supabase fetch note:', err);
    }
  }

  // 2. Local fallback
  try {
    if (fs.existsSync(REPORTS_FILE)) {
      const raw = fs.readFileSync(REPORTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (err) {
    console.warn('[universityReportsStore] Local read note:', err);
  }

  return [];
}

async function saveContentReports(reports: UniversityContentReport[]): Promise<void> {
  const payload = JSON.stringify(reports, null, 2);

  // 1. Safe local write (ignored on read-only Vercel serverless)
  try {
    const dir = path.dirname(REPORTS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(REPORTS_FILE, payload, 'utf8');
  } catch {
    // Read-only filesystem on Vercel
  }

  // 2. Supabase Storage persistence
  if (isSupabaseConfigured) {
    try {
      await supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .upload(REPORTS_MANIFEST, Buffer.from(payload), {
          contentType: 'application/json',
          upsert: true,
          cacheControl: '0'
        });
    } catch (err) {
      console.warn('[universityReportsStore] Supabase save note:', err);
    }
  }
}

export async function addContentReport(
  report: Omit<UniversityContentReport, 'id' | 'status' | 'createdAt'>
): Promise<UniversityContentReport> {
  const existing = await getStoredContentReports();
  const newReport: UniversityContentReport = {
    id: `rep_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...report,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  const updated = [newReport, ...existing];
  await saveContentReports(updated);
  return newReport;
}

export async function updateContentReportStatus(
  id: string,
  status: 'pending' | 'resolved' | 'dismissed',
  adminNotes?: string
): Promise<UniversityContentReport | null> {
  const existing = await getStoredContentReports();
  const index = existing.findIndex(r => r.id === id);
  if (index === -1) return null;

  existing[index] = {
    ...existing[index],
    status,
    ...(adminNotes !== undefined ? { adminNotes } : {}),
    ...(status === 'resolved' ? { resolvedAt: new Date().toISOString() } : {}),
  };

  await saveContentReports(existing);
  return existing[index];
}
