import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { requireAdmin } from '@/lib/adminAuth';
import { 
  getStoredUniversitySlides, 
  addUniversitySlide, 
  deleteUniversitySlide, 
  validateCollaboratorToken 
} from '@/lib/universitySlideStore';
import { uploadToR2, isR2Configured, R2_PUBLIC_URL } from '@/lib/r2Client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'university');

/**
 * Check if request has either valid Admin session or valid Collaborator Token
 */
function isAuthorizedUploader(req: NextRequest): { authorized: boolean; role: 'admin' | 'collaborator'; name: string } {
  if (requireAdmin(req)) {
    return { authorized: true, role: 'admin', name: 'Admin' };
  }

  // Check header or query token
  const authHeader = req.headers.get('authorization') || '';
  const bearerToken = authHeader.replace(/^Bearer\s+/i, '').trim();
  const customHeaderToken = req.headers.get('x-collaborator-token') || '';
  const queryToken = req.nextUrl.searchParams.get('token') || '';

  const candidate = bearerToken || customHeaderToken || queryToken;
  if (candidate && validateCollaboratorToken(candidate)) {
    const customName = req.headers.get('x-collaborator-name') || 'Collaborator';
    return { authorized: true, role: 'collaborator', name: customName };
  }

  return { authorized: false, role: 'collaborator', name: '' };
}

/**
 * GET /api/university/slides
 * Public catalog for students & study studio
 */
export async function GET(req: NextRequest) {
  try {
    const slides = await getStoredUniversitySlides();
    const url = req.nextUrl;
    const university = url.searchParams.get('university')?.trim();
    const level = url.searchParams.get('level')?.trim();
    const semester = url.searchParams.get('semester')?.trim();
    const courseCode = url.searchParams.get('courseCode')?.trim()?.toLowerCase();
    const q = url.searchParams.get('q')?.trim()?.toLowerCase();

    let filtered = slides;

    if (university && university !== 'All' && !university.startsWith('All')) {
      filtered = filtered.filter(s => s.university.toLowerCase().includes(university.toLowerCase()));
    }

    if (level && level !== 'All' && !level.startsWith('All')) {
      filtered = filtered.filter(s => s.level.toLowerCase() === level.toLowerCase());
    }

    if (semester && semester !== 'All' && !semester.startsWith('All')) {
      filtered = filtered.filter(s => s.semester.toLowerCase() === semester.toLowerCase());
    }

    if (courseCode) {
      filtered = filtered.filter(s => s.courseCode.toLowerCase().includes(courseCode));
    }

    if (q) {
      filtered = filtered.filter(s => 
        s.title.toLowerCase().includes(q) ||
        s.courseCode.toLowerCase().includes(q) ||
        (s.courseTitle && s.courseTitle.toLowerCase().includes(q)) ||
        (s.description && s.description.toLowerCase().includes(q)) ||
        (s.department && s.department.toLowerCase().includes(q))
      );
    }

    return NextResponse.json({ success: true, count: filtered.length, slides: filtered });
  } catch (err: any) {
    console.error('Error fetching university slides:', err);
    return NextResponse.json({ success: false, error: err.message || 'Failed to fetch slides' }, { status: 500 });
  }
}

/**
 * POST /api/university/slides
 * Upload a university slide (Admin or Authorized Collaborator)
 */
export async function POST(req: NextRequest) {
  const auth = isAuthorizedUploader(req);
  if (!auth.authorized) {
    return NextResponse.json({ 
      success: false, 
      error: 'Unauthorized: Requires administrator session or valid collaborator token.' 
    }, { status: 401 });
  }

  try {
    const contentType = req.headers.get('content-type') || '';

    // Case 1: JSON payload with pre-uploaded URL
    if (contentType.includes('application/json')) {
      const body = await req.json();
      if (!body.title || !body.courseCode || !body.fileUrl) {
        return NextResponse.json({ success: false, error: 'Title, courseCode, and fileUrl are required.' }, { status: 400 });
      }

      const created = await addUniversitySlide({
        title: body.title,
        courseCode: body.courseCode,
        courseTitle: body.courseTitle || body.title,
        university: body.university || 'University of Ghana (Legon)',
        department: body.department || 'General Education',
        level: body.level || 'Level 100',
        semester: body.semester || 'First Semester',
        description: body.description || '',
        fileName: body.fileName || `${body.courseCode}_Slides.pdf`,
        fileUrl: body.fileUrl,
        fileSizeBytes: body.fileSizeBytes || 0,
        uploadedBy: body.uploadedBy || auth.name,
      });

      return NextResponse.json({ success: true, slide: created }, { status: 201 });
    }

    // Case 2: Multipart form-data with direct binary file upload
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const title = (formData.get('title') as string || '').trim();
    const courseCode = (formData.get('courseCode') as string || '').trim();
    const courseTitle = (formData.get('courseTitle') as string || '').trim();
    const university = (formData.get('university') as string || 'University of Ghana (Legon)').trim();
    const department = (formData.get('department') as string || 'General Education').trim();
    const level = (formData.get('level') as string || 'Level 100').trim();
    const semester = (formData.get('semester') as string || 'First Semester').trim();
    const description = (formData.get('description') as string || '').trim();
    const customUploader = (formData.get('uploadedBy') as string || '').trim();

    if (!title || !courseCode) {
      return NextResponse.json({ success: false, error: 'Slide title and course code are required.' }, { status: 400 });
    }

    if (!file || typeof file === 'string') {
      return NextResponse.json({ success: false, error: 'A valid PDF file is required.' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const rawName = file.name || `${courseCode}_Slides.pdf`;
    const cleanName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const uniqueFileName = `${Date.now()}_${cleanName}`;
    let fileUrl = '';

    // 1. Try Cloudflare R2
    if (isR2Configured) {
      try {
        const uploadedResult = await uploadToR2(uniqueFileName, buffer, 'application/pdf');
        if (uploadedResult) {
          // uploadToR2 already includes R2_PUBLIC_URL
          fileUrl = uploadedResult.startsWith('http') ? uploadedResult : `${R2_PUBLIC_URL}/${uploadedResult}`;
        }
      } catch (r2Err) {
        console.warn('R2 upload failed, using local/storage fallback:', r2Err);
      }
    }

    // 2. Local filesystem upload fallback
    if (!fileUrl) {
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
      }
      const localFilePath = path.join(UPLOAD_DIR, uniqueFileName);
      fs.writeFileSync(localFilePath, buffer);
      fileUrl = `/uploads/university/${uniqueFileName}`;
    }

    const created = await addUniversitySlide({
      title,
      courseCode,
      courseTitle: courseTitle || title,
      university,
      department,
      level,
      semester,
      description,
      fileName: file.name,
      fileUrl,
      fileSizeBytes: file.size,
      uploadedBy: customUploader || auth.name,
    });

    return NextResponse.json({ success: true, slide: created }, { status: 201 });
  } catch (err: any) {
    console.error('Error uploading university slide:', err);
    return NextResponse.json({ success: false, error: err.message || 'Upload processing failed' }, { status: 500 });
  }
}

/**
 * DELETE /api/university/slides?id=...
 * Delete a slide (Admin or Authorized Collaborator)
 */
export async function DELETE(req: NextRequest) {
  const auth = isAuthorizedUploader(req);
  if (!auth.authorized) {
    return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
  }

  const id = req.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ success: false, error: 'Slide ID is required.' }, { status: 400 });
  }

  const success = await deleteUniversitySlide(id);
  if (!success) {
    return NextResponse.json({ success: false, error: 'Slide not found or already deleted.' }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: 'Slide deleted successfully.' });
}
