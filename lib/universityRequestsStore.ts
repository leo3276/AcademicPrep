import fs from 'fs';
import path from 'path';
import { supabaseAdmin, isSupabaseConfigured } from './supabaseClient';

export interface CourseRequest {
  id: string;
  university: string;
  courseCode: string;
  courseTitle: string;
  level: string;
  semester: string;
  lecturerName?: string;
  notes?: string;
  studentContact?: string;
  status: 'pending' | 'fulfilled' | 'dismissed';
  createdAt: string;
  fulfilledAt?: string;
}

const REQUESTS_FILE = path.join(process.cwd(), 'data', 'university_requests.json');
const REQUESTS_MANIFEST = 'university_requests_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

export async function getStoredCourseRequests(): Promise<CourseRequest[]> {
  // 1. Primary on Cloud / Vercel: Supabase Storage
  if (isSupabaseConfigured) {
    try {
      const { data: pubData } = supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .getPublicUrl(REQUESTS_MANIFEST);

      if (pubData?.publicUrl) {
        const res = await fetch(`${pubData.publicUrl}?t=${Date.now()}`, { cache: 'no-store' });
        if (res.ok) {
          const parsed = await res.json();
          if (Array.isArray(parsed)) return parsed;
        }
      }
    } catch (err) {
      console.warn('[universityRequestsStore] Supabase fetch note:', err);
    }
  }

  // 2. Local fallback
  try {
    if (fs.existsSync(REQUESTS_FILE)) {
      const raw = fs.readFileSync(REQUESTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (err) {
    console.warn('[universityRequestsStore] Local read note:', err);
  }

  return [];
}

async function saveCourseRequests(requests: CourseRequest[]): Promise<void> {
  const payload = JSON.stringify(requests, null, 2);

  // 1. Safe local write (ignored on read-only Vercel serverless)
  try {
    const dir = path.dirname(REQUESTS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(REQUESTS_FILE, payload, 'utf8');
  } catch {
    // Read-only filesystem on Vercel
  }

  // 2. Supabase Storage persistence
  if (isSupabaseConfigured) {
    try {
      await supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .upload(REQUESTS_MANIFEST, Buffer.from(payload), {
          contentType: 'application/json',
          upsert: true,
          cacheControl: '0'
        });
    } catch (err) {
      console.warn('[universityRequestsStore] Supabase save note:', err);
    }
  }
}

export async function addCourseRequest(
  request: Omit<CourseRequest, 'id' | 'status' | 'createdAt'>
): Promise<CourseRequest> {
  const existing = await getStoredCourseRequests();
  const newReq: CourseRequest = {
    id: `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...request,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  const updated = [newReq, ...existing];
  await saveCourseRequests(updated);
  return newReq;
}

export async function updateCourseRequestStatus(
  id: string,
  status: 'pending' | 'fulfilled' | 'dismissed'
): Promise<CourseRequest | null> {
  const existing = await getStoredCourseRequests();
  const index = existing.findIndex(r => r.id === id);
  if (index === -1) return null;

  existing[index] = {
    ...existing[index],
    status,
    ...(status === 'fulfilled' ? { fulfilledAt: new Date().toISOString() } : {}),
  };

  await saveCourseRequests(existing);
  return existing[index];
}
