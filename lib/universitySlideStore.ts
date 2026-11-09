import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { UniversitySlide, UniversityVideo } from './universitySlideTypes';
import { supabaseAdmin } from './supabaseClient';
import { uploadToR2, isR2Configured, R2_PUBLIC_URL } from './r2Client';

const DATA_FILE = path.join(process.cwd(), 'data', 'university_slides.json');
const VIDEO_DATA_FILE = path.join(process.cwd(), 'data', 'university_videos.json');
const COLLAB_CONFIG_FILE = path.join(process.cwd(), 'data', 'collaborator_config.json');
const MANIFEST_FILE_NAME = 'university_slides_manifest.json';
const VIDEO_MANIFEST_FILE_NAME = 'university_videos_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

// Default Collaborator Token fallback
const DEFAULT_COLLABORATOR_TOKEN = 'PREP-FACULTY-2026';

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

  try {
    const dir = path.dirname(COLLAB_CONFIG_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(COLLAB_CONFIG_FILE, JSON.stringify({
      token: DEFAULT_COLLABORATOR_TOKEN,
      updatedAt: new Date().toISOString()
    }, null, 2), 'utf8');
  } catch {}

  return DEFAULT_COLLABORATOR_TOKEN;
}

/**
 * Regenerate a new random collaborator token
 */
export function regenerateCollaboratorToken(): string {
  const newToken = 'PREP-' + crypto.randomBytes(4).toString('hex').toUpperCase();
  try {
    const dir = path.dirname(COLLAB_CONFIG_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(COLLAB_CONFIG_FILE, JSON.stringify({
      token: newToken,
      updatedAt: new Date().toISOString()
    }, null, 2), 'utf8');
  } catch (err) {
    console.error('[universitySlideStore] Failed to save regenerated token:', err);
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
 * Sanitize slide URL to eliminate accidental double domain prefixes
 */
export function sanitizeSlideUrl(url?: string): string {
  if (!url) return '';
  let cleaned = url.trim();
  const doublePrefix = `${R2_PUBLIC_URL}/${R2_PUBLIC_URL}/`;
  if (cleaned.startsWith(doublePrefix)) {
    cleaned = cleaned.replace(doublePrefix, `${R2_PUBLIC_URL}/`);
  }
  const match = cleaned.match(/^(https?:\/\/[^\/]+)\/(https?:\/\/[^\/]+)\/(.*)$/);
  if (match && match[1] === match[2]) {
    cleaned = `${match[1]}/${match[3]}`;
  }
  return cleaned;
}

function sanitizeSlideList(list: UniversitySlide[]): UniversitySlide[] {
  let modified = false;
  const cleaned = list.map(s => {
    const freshUrl = sanitizeSlideUrl(s.fileUrl);
    // Legacy slides without status default to 'approved'
    const status = s.status || 'approved';
    if (freshUrl !== s.fileUrl || !s.status) {
      modified = true;
      return { ...s, fileUrl: freshUrl, status };
    }
    return s;
  });

  if (modified) {
    // Asynchronously sync the clean manifest back to storage
    saveStoredUniversitySlides(cleaned).catch(err => {
      console.warn('[universitySlideStore] Auto-resync error:', err);
    });
  }

  return cleaned;
}

/**
 * Fetch all university slides with Cloud storage + local file fallback
 */
export async function getStoredUniversitySlides(): Promise<UniversitySlide[]> {
  // 1. Primary: Cloudflare R2
  if (isR2Configured || R2_PUBLIC_URL) {
    try {
      const res = await fetch(`${R2_PUBLIC_URL}/${MANIFEST_FILE_NAME}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed)) {
          return sanitizeSlideList(parsed);
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
          return sanitizeSlideList(parsed);
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
        return sanitizeSlideList(parsed);
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

  // 1. Write local file (ignore in read-only environments)
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, payload, 'utf8');
  } catch (err) {
    // Ignored on read-only environments
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
 * Add a new university slide (defaults to 'approved' for admin, 'pending' for collaborators)
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
    status: slide.status || 'approved',
    rejectionReason: slide.rejectionReason,
  };

  const updated = [newSlide, ...slides.filter(s => s.id !== newSlide.id)];
  await saveStoredUniversitySlides(updated);
  return newSlide;
}

/**
 * Update an existing slide's approval status or details
 */
export async function updateUniversitySlideStatus(id: string, status: 'approved' | 'rejected' | 'pending', rejectionReason?: string): Promise<UniversitySlide | null> {
  const slides = await getStoredUniversitySlides();
  const idx = slides.findIndex(s => s.id === id);
  if (idx === -1) return null;

  slides[idx] = {
    ...slides[idx],
    status,
    rejectionReason: rejectionReason !== undefined ? rejectionReason : slides[idx].rejectionReason,
  };

  await saveStoredUniversitySlides(slides);
  return slides[idx];
}

/**
 * Delete a university slide by ID
 */
export async function deleteUniversitySlide(id: string): Promise<boolean> {
  const slides = await getStoredUniversitySlides();
  const target = slides.find(s => s.id === id);
  const filtered = slides.filter(s => s.id !== id);
  if (filtered.length === slides.length) return false;
  await saveStoredUniversitySlides(filtered);

  // If slide was stored on Supabase Storage, delete the file to save free tier storage
  if (target?.fileUrl && target.fileUrl.includes('supabase.co')) {
    try {
      const match = target.fileUrl.match(/documents\/(.+)$/);
      if (match && match[1]) {
        await supabaseAdmin.storage.from(DOCUMENTS_BUCKET).remove([decodeURIComponent(match[1])]);
      }
    } catch (err) {
      console.warn('[universitySlideStore] Supabase slide file cleanup note:', err);
    }
  }

  return true;
}

/* =====================================================================
 * UNIVERSITY VIDEOS & MEDIA STORE
 * ===================================================================== */

/**
 * Fetch all university videos with Cloud storage + local file fallback
 */
export async function getStoredUniversityVideos(): Promise<UniversityVideo[]> {
  // 1. Primary: Cloudflare R2
  if (isR2Configured || R2_PUBLIC_URL) {
    try {
      const res = await fetch(`${R2_PUBLIC_URL}/${VIDEO_MANIFEST_FILE_NAME}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (err) {
      console.warn('[universityVideoStore] R2 fetch note:', err);
    }
  }

  // 2. Secondary: Supabase Storage
  try {
    const { data: pubData } = supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .getPublicUrl(VIDEO_MANIFEST_FILE_NAME);

    if (pubData?.publicUrl) {
      const res = await fetch(`${pubData.publicUrl}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed)) return parsed;
      }
    }
  } catch (err) {
    console.warn('[universityVideoStore] Supabase CDN fetch note:', err);
  }

  // 3. Fallback: local data/university_videos.json
  try {
    if (fs.existsSync(VIDEO_DATA_FILE)) {
      const raw = fs.readFileSync(VIDEO_DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.warn('[universityVideoStore] Local JSON read note:', err);
  }

  return [];
}

/**
 * Persist university videos to both local JSON and cloud manifests
 */
export async function saveStoredUniversityVideos(videos: UniversityVideo[]): Promise<void> {
  const payload = JSON.stringify(videos, null, 2);

  // 1. Write local file
  try {
    const dir = path.dirname(VIDEO_DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(VIDEO_DATA_FILE, payload, 'utf8');
  } catch (err) {
    // Ignored in read-only environment
  }

  // 2. Cloudflare R2
  if (isR2Configured) {
    try {
      await uploadToR2(VIDEO_MANIFEST_FILE_NAME, Buffer.from(payload), 'application/json', '0');
    } catch (err) {
      console.error('[universityVideoStore] Failed to upload video manifest to R2:', err);
    }
  }

  // 3. Supabase Storage backup
  try {
    await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .upload(VIDEO_MANIFEST_FILE_NAME, Buffer.from(payload), {
        contentType: 'application/json',
        upsert: true,
        cacheControl: '0'
      });
  } catch (err) {
    console.warn('[universityVideoStore] Supabase video manifest upload note:', err);
  }
}

/**
 * Add a new university video lecture / briefing
 */
export async function addUniversityVideo(video: Omit<UniversityVideo, 'id' | 'createdAt'> & { id?: string; createdAt?: string }): Promise<UniversityVideo> {
  const videos = await getStoredUniversityVideos();
  const newVideo: UniversityVideo = {
    id: video.id || `uni_vid_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    title: video.title.trim(),
    courseCode: video.courseCode ? video.courseCode.toUpperCase().trim() : undefined,
    courseTitle: video.courseTitle?.trim(),
    university: video.university || 'All Universities / General Tertiary',
    department: video.department || 'General Education',
    level: video.level || 'Level 100',
    semester: video.semester || 'First Semester',
    videoUrl: video.videoUrl.trim(),
    thumbnailUrl: video.thumbnailUrl?.trim(),
    description: video.description?.trim(),
    duration: video.duration?.trim(),
    uploadedBy: video.uploadedBy || 'Admin',
    createdAt: video.createdAt || new Date().toISOString(),
    isFeatured: Boolean(video.isFeatured),
  };

  const updated = [newVideo, ...videos.filter(v => v.id !== newVideo.id)];
  await saveStoredUniversityVideos(updated);
  return newVideo;
}

/**
 * Delete a university video by ID
 */
export async function deleteUniversityVideo(id: string): Promise<boolean> {
  const videos = await getStoredUniversityVideos();
  const filtered = videos.filter(v => v.id !== id);
  if (filtered.length === videos.length) return false;
  await saveStoredUniversityVideos(filtered);
  return true;
}
