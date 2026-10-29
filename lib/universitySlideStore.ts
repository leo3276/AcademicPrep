import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { supabaseAdmin } from './supabaseClient';
import { uploadToR2, isR2Configured, R2_PUBLIC_URL } from './r2Client';

export * from './universitySlideTypes';
import { UniversitySlide } from './universitySlideTypes';

const DATA_FILE = path.join(process.cwd(), 'data', 'university_slides.json');
const COLLAB_CONFIG_FILE = path.join(process.cwd(), 'data', 'collaborator_config.json');
const MANIFEST_FILE_NAME = 'university_slides_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

// Default Collaborator Token if not yet configured
const DEFAULT_COLLABORATOR_TOKEN = 'ap_collab_ug_knust_2026';

/**
 * Get or initialize collaborator token
 */
export function getCollaboratorToken(): string {
  try {
    if (fs.existsSync(COLLAB_CONFIG_FILE)) {
      const raw = fs.readFileSync(COLLAB_CONFIG_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (parsed?.token && typeof parsed.token === 'string') {
        return parsed.token;
      }
    }
  } catch (err) {
    console.warn('[universitySlideStore] Error reading collaborator config:', err);
  }

  // Initialize with default token if not present
  try {
    const dir = path.dirname(COLLAB_CONFIG_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(COLLAB_CONFIG_FILE, JSON.stringify({ token: DEFAULT_COLLABORATOR_TOKEN, updatedAt: new Date().toISOString() }, null, 2));
  } catch {}

  return DEFAULT_COLLABORATOR_TOKEN;
}

/**
 * Regenerate a new random collaborator token
 */
export function regenerateCollaboratorToken(): string {
  const newToken = 'ap_collab_' + crypto.randomBytes(12).toString('hex');
  try {
    const dir = path.dirname(COLLAB_CONFIG_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(COLLAB_CONFIG_FILE, JSON.stringify({ token: newToken, updatedAt: new Date().toISOString() }, null, 2));
  } catch (err) {
    console.error('[universitySlideStore] Failed to write collaborator token:', err);
  }
  return newToken;
}

/**
 * Validate collaborator token
 */
export function validateCollaboratorToken(token?: string | null): boolean {
  if (!token) return false;
  const currentToken = getCollaboratorToken();
  return token.trim() === currentToken.trim();
}

/**
 * Fetch all university slides with Cloud storage + local file fallback
 */
export async function getStoredUniversitySlides(): Promise<UniversitySlide[]> {
  // 1. Primary: Cloudflare R2
  if (isR2Configured) {
    try {
      const res = await fetch(`${R2_PUBLIC_URL}/${MANIFEST_FILE_NAME}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn('[universitySlideStore] R2 fetch note:', err);
    }
  }

  // 2. Secondary: Supabase Storage
  try {
    const { data: pubData } = supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .getPublicUrl(MANIFEST_FILE_NAME);

    if (pubData?.publicUrl) {
      const res = await fetch(`${pubData.publicUrl}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    }
  } catch (err) {
    console.warn('[universitySlideStore] Supabase CDN fetch note:', err);
  }

  // 3. Fallback: local data/university_slides.json
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('[universitySlideStore] Local JSON read note:', err);
  }

  return [];
}

/**
 * Persist university slides to both local JSON and cloud manifests
 */
export async function saveStoredUniversitySlides(slides: UniversitySlide[]): Promise<void> {
  const payload = JSON.stringify(slides, null, 2);

  // 1. Write local file
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, payload, 'utf8');
  } catch (err) {
    console.error('[universitySlideStore] Failed to write local slides file:', err);
  }

  // 2. Cloudflare R2
  if (isR2Configured) {
    try {
      await uploadToR2(MANIFEST_FILE_NAME, Buffer.from(payload), 'application/json', '0');
    } catch (err) {
      console.error('[universitySlideStore] Failed to upload manifest to R2:', err);
    }
  }

  // 3. Supabase Storage backup
  try {
    await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .upload(MANIFEST_FILE_NAME, Buffer.from(payload), {
        contentType: 'application/json',
        upsert: true,
        cacheControl: '0'
      });
  } catch (err) {
    console.warn('[universitySlideStore] Supabase manifest upload note:', err);
  }
}

/**
 * Add a new university slide
 */
export async function addUniversitySlide(slide: Omit<UniversitySlide, 'id' | 'uploadedAt'> & { id?: string; uploadedAt?: string }): Promise<UniversitySlide> {
  const slides = await getStoredUniversitySlides();
  const newSlide: UniversitySlide = {
    id: slide.id || `uni_slide_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    title: slide.title,
    courseCode: slide.courseCode.toUpperCase().trim(),
    courseTitle: slide.courseTitle || slide.title,
    university: slide.university || 'University of Ghana (Legon)',
    department: slide.department || 'Computer Science & IT',
    level: slide.level || 'Level 100',
    semester: slide.semester || 'First Semester',
    description: slide.description || '',
    fileName: slide.fileName,
    fileUrl: slide.fileUrl,
    fileSizeBytes: slide.fileSizeBytes || 0,
    uploadedBy: slide.uploadedBy || 'Admin',
    uploadedAt: slide.uploadedAt || new Date().toISOString(),
  };

  const updated = [newSlide, ...slides.filter(s => s.id !== newSlide.id)];
  await saveStoredUniversitySlides(updated);
  return newSlide;
}

/**
 * Delete a university slide by ID
 */
export async function deleteUniversitySlide(id: string): Promise<boolean> {
  const slides = await getStoredUniversitySlides();
  const filtered = slides.filter(s => s.id !== id);
  if (filtered.length === slides.length) return false;
  await saveStoredUniversitySlides(filtered);
  return true;
}
