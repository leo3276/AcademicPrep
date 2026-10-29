import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { 
  getStoredContentReports, 
  addContentReport, 
  updateContentReportStatus 
} from '@/lib/universityReportsStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/university/reports
 * Returns list of reports (Admins see all; students can query if needed)
 */
export async function GET(req: NextRequest) {
  try {
    const reports = await getStoredContentReports();
    const url = req.nextUrl;
    const status = url.searchParams.get('status')?.trim();
    const courseCode = url.searchParams.get('courseCode')?.trim()?.toLowerCase();

    let filtered = reports;
    if (status && status !== 'all') {
      filtered = filtered.filter(r => r.status === status);
    }
    if (courseCode) {
      filtered = filtered.filter(r => r.courseCode.toLowerCase().includes(courseCode));
    }

    return NextResponse.json({
      success: true,
      count: filtered.length,
      reports: filtered,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to fetch issue reports' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/university/reports
 * Public endpoint for students to report content errors / outdated notes
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { courseCode, courseTitle, university, issueType, description, contactEmail, slideId } = body;

    if (!courseCode || !description) {
      return NextResponse.json(
        { success: false, error: 'Course code and description are required' },
        { status: 400 }
      );
    }

    const report = await addContentReport({
      slideId: slideId || undefined,
      courseCode: String(courseCode).trim().toUpperCase(),
      courseTitle: String(courseTitle || courseCode).trim(),
      university: university ? String(university).trim() : undefined,
      issueType: issueType || 'other',
      description: String(description).trim(),
      contactEmail: contactEmail ? String(contactEmail).trim() : undefined,
    });

    return NextResponse.json({
      success: true,
      message: 'Issue report submitted successfully. Thank you for keeping course materials up to date.',
      report,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to submit report' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/university/reports
 * Admin only: update status (pending -> resolved | dismissed)
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
    const { id, status, adminNotes } = body;

    if (!id || !['pending', 'resolved', 'dismissed'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Valid id and status required' },
        { status: 400 }
      );
    }

    const updated = await updateContentReportStatus(id, status, adminNotes);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Report not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Report marked as ${status}`,
      report: updated,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to update report' },
      { status: 500 }
    );
  }
}
