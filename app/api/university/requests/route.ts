import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { 
  getStoredCourseRequests, 
  addCourseRequest, 
  updateCourseRequestStatus 
} from '@/lib/universityRequestsStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/university/requests
 * Lists requested courses (Admin review & demand analytics)
 */
export async function GET(req: NextRequest) {
  try {
    const requests = await getStoredCourseRequests();
    const url = req.nextUrl;
    const status = url.searchParams.get('status')?.trim();
    const university = url.searchParams.get('university')?.trim();

    let filtered = requests;
    if (status && status !== 'all') {
      filtered = filtered.filter(r => r.status === status);
    }
    if (university && university !== 'All') {
      filtered = filtered.filter(r => r.university.toLowerCase().includes(university.toLowerCase()));
    }

    return NextResponse.json({
      success: true,
      count: filtered.length,
      requests: filtered,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to fetch course requests' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/university/requests
 * Public endpoint for university students to request slides for missing courses
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { university, courseCode, courseTitle, level, semester, lecturerName, notes, studentContact } = body;

    if (!courseCode || !university) {
      return NextResponse.json(
        { success: false, error: 'University and Course Code are required' },
        { status: 400 }
      );
    }

    const created = await addCourseRequest({
      university: String(university).trim(),
      courseCode: String(courseCode).trim().toUpperCase(),
      courseTitle: String(courseTitle || courseCode).trim(),
      level: String(level || 'Level 100').trim(),
      semester: String(semester || 'Semester 1').trim(),
      lecturerName: lecturerName ? String(lecturerName).trim() : undefined,
      notes: notes ? String(notes).trim() : undefined,
      studentContact: studentContact ? String(studentContact).trim() : undefined,
    });

    return NextResponse.json({
      success: true,
      message: 'Course requested successfully. You will be notified once uploaded.',
      request: created,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to submit course request' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/university/requests
 * Admin endpoint: mark as fulfilled or dismissed
 */
export async function PATCH(req: NextRequest) {
  try {
    const isAdmin = requireAdmin(req);
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized admin access required' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { id, status } = body;

    if (!id || !['pending', 'fulfilled', 'dismissed'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Valid id and status required' },
        { status: 400 }
      );
    }

    const updated = await updateCourseRequestStatus(id, status);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Course request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Course request marked as ${status}`,
      request: updated,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to update request' },
      { status: 500 }
    );
  }
}
