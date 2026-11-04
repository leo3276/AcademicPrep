import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { requireAdmin } from '@/lib/adminAuth';
import { 
  getStoredUniversityVideos, 
  addUniversityVideo, 
  deleteUniversityVideo 
} from '@/lib/universitySlideStore';
import { uploadToR2, isR2Configured, R2_PUBLIC_URL } from '@/lib/r2Client';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabaseClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'university', 'videos');
const DOCUMENTS_BUCKET = 'documents';

/**
 * GET /api/university/videos
 * Public catalog of video lectures & faculty briefings
 */
export async function GET(req: NextRequest) {
  try {
    const videos = await getStoredUniversityVideos();
    const url = req.nextUrl;
    const university = url.searchParams.get('university')?.trim();
    const department = url.searchParams.get('department')?.trim();
    const level = url.searchParams.get('level')?.trim();
    const semester = url.searchParams.get('semester')?.trim();
    const courseCode = url.searchParams.get('courseCode')?.trim()?.toLowerCase();
    const q = url.searchParams.get('q')?.trim()?.toLowerCase();

    let filtered = videos;

    if (university && university !== 'All' && !university.startsWith('All')) {
      filtered = filtered.filter(v => v.university && v.university.toLowerCase().includes(university.toLowerCase()));
    }

    if (department && department !== 'All' && !department.startsWith('All')) {
      filtered = filtered.filter(v => v.department && v.department.toLowerCase().includes(department.toLowerCase()));
    }

    if (level && level !== 'All' && !level.startsWith('All')) {
      filtered = filtered.filter(v => v.level && v.level.toLowerCase() === level.toLowerCase());
    }

    if (semester && semester !== 'All' && !semester.startsWith('All')) {
      filtered = filtered.filter(v => v.semester && v.semester.toLowerCase() === semester.toLowerCase());
    }

    if (courseCode) {
      filtered = filtered.filter(v => v.courseCode && v.courseCode.toLowerCase().includes(courseCode));
    }

    if (q) {
      filtered = filtered.filter(v => 
        v.title.toLowerCase().includes(q) ||
        (v.courseCode && v.courseCode.toLowerCase().includes(q)) ||
        (v.courseTitle && v.courseTitle.toLowerCase().includes(q)) ||
        (v.description && v.description.toLowerCase().includes(q)) ||
        (v.department && v.department.toLowerCase().includes(q))
      );
    }

    return NextResponse.json({ success: true, count: filtered.length, videos: filtered });
  } catch (err: any) {
    console.error('Error fetching university videos:', err);
    return NextResponse.json({ success: false, error: err.message || 'Failed to fetch university videos' }, { status: 500 });
  }
}

/**
 * POST /api/university/videos
 * Upload or link a new university video (Admin only)
 * Supports either:
 * 1. JSON body with external video URL (YouTube, Vimeo, Cloud MP4 link)
 * 2. Multipart form data with binary video file upload
 */
export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ success: false, error: 'Administrator authorization required.' }, { status: 401 });
  }

  try {
    const contentType = req.headers.get('content-type') || '';

    // Case 1: JSON payload with URL link (e.g. YouTube, Vimeo, direct MP4)
    if (contentType.includes('application/json')) {
      const body = await req.json();
      if (!body.title || !body.videoUrl) {
        return NextResponse.json({ success: false, error: 'Video title and video URL are required.' }, { status: 400 });
      }

      const created = await addUniversityVideo({
        title: body.title,
        courseCode: body.courseCode ? body.courseCode.toUpperCase().trim() : undefined,
        courseTitle: body.courseTitle || body.title,
        university: body.university || 'All Universities / General Tertiary',
        department: body.department || 'General Education',
        level: body.level || 'Level 100',
        semester: body.semester || 'First Semester',
        videoUrl: body.videoUrl,
        thumbnailUrl: body.thumbnailUrl,
        description: body.description || '',
        duration: body.duration,
        uploadedBy: body.uploadedBy || 'Admin',
        isFeatured: Boolean(body.isFeatured),
      });

      return NextResponse.json({ success: true, video: created }, { status: 201 });
    }

    // Case 2: Multipart form-data with binary video file
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const title = (formData.get('title') as string || '').trim();
    const courseCode = (formData.get('courseCode') as string || '').trim();
    const courseTitle = (formData.get('courseTitle') as string || '').trim();
    const university = (formData.get('university') as string || 'All Universities / General Tertiary').trim();
    const department = (formData.get('department') as string || 'General Education').trim();
    const level = (formData.get('level') as string || 'Level 100').trim();
    const semester = (formData.get('semester') as string || 'First Semester').trim();
    const description = (formData.get('description') as string || '').trim();
    const videoUrlInput = (formData.get('videoUrl') as string || '').trim();
    const duration = (formData.get('duration') as string || '').trim();
    const isFeatured = formData.get('isFeatured') === 'true';

    if (!title) {
      return NextResponse.json({ success: false, error: 'Video title is required.' }, { status: 400 });
    }

    let resolvedVideoUrl = videoUrlInput;

    // If an actual video file was uploaded
    if (file && typeof file !== 'string' && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const rawName = file.name || `${courseCode || 'Lecture'}_Video.mp4`;
      const cleanName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const uniqueFileName = `${Date.now()}_${cleanName}`;

      // 1. Try Cloudflare R2
      if (isR2Configured) {
        try {
          const uploadedResult = await uploadToR2(`videos/${uniqueFileName}`, buffer, file.type || 'video/mp4');
          if (uploadedResult) {
            resolvedVideoUrl = uploadedResult.startsWith('http') ? uploadedResult : `${R2_PUBLIC_URL}/${uploadedResult}`;
          }
        } catch (r2Err) {
          console.warn('R2 video upload failed, trying Supabase:', r2Err);
        }
      }

      // 2. Supabase Storage
      if (!resolvedVideoUrl && isSupabaseConfigured) {
        try {
          const storagePath = `university/videos/${uniqueFileName}`;
          const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
            .from(DOCUMENTS_BUCKET)
            .upload(storagePath, buffer, {
              contentType: file.type || 'video/mp4',
              upsert: true,
            });

          if (!uploadError && uploadData) {
            const { data: publicUrlData } = supabaseAdmin.storage
              .from(DOCUMENTS_BUCKET)
              .getPublicUrl(storagePath);
            if (publicUrlData?.publicUrl) {
              resolvedVideoUrl = publicUrlData.publicUrl;
            }
          }
        } catch (supErr) {
          console.warn('Supabase video upload failed:', supErr);
        }
      }

      // 3. Local filesystem write fallback
      try {
        if (!fs.existsSync(UPLOAD_DIR)) {
          fs.mkdirSync(UPLOAD_DIR, { recursive: true });
        }
        const localFilePath = path.join(UPLOAD_DIR, uniqueFileName);
        fs.writeFileSync(localFilePath, buffer);
        if (!resolvedVideoUrl) {
          resolvedVideoUrl = `/uploads/university/videos/${uniqueFileName}`;
        }
      } catch {}
    }

    if (!resolvedVideoUrl) {
      return NextResponse.json({ 
        success: false, 
        error: 'Please provide either a video URL (YouTube, Vimeo, MP4) or upload a video file.' 
      }, { status: 400 });
    }

    const created = await addUniversityVideo({
      title,
      courseCode: courseCode ? courseCode.toUpperCase() : undefined,
      courseTitle: courseTitle || title,
      university,
      department,
      level,
      semester,
      videoUrl: resolvedVideoUrl,
      description,
      duration: duration || undefined,
      uploadedBy: 'Admin',
      isFeatured,
    });

    return NextResponse.json({ success: true, video: created }, { status: 201 });
  } catch (err: any) {
    console.error('Error adding university video:', err);
    return NextResponse.json({ success: false, error: err.message || 'Video processing failed' }, { status: 500 });
  }
}

/**
 * DELETE /api/university/videos?id=...
 * Delete a video (Admin only)
 */
export async function DELETE(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ success: false, error: 'Administrator authorization required.' }, { status: 401 });
  }

  const id = req.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ success: false, error: 'Video ID is required.' }, { status: 400 });
  }

  const success = await deleteUniversityVideo(id);
  if (!success) {
    return NextResponse.json({ success: false, error: 'Video not found or already deleted.' }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: 'Video deleted successfully.' });
}
