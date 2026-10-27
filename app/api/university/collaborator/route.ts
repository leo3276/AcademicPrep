import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { 
  getCollaboratorToken, 
  regenerateCollaboratorToken, 
  validateCollaboratorToken 
} from '@/lib/universitySlideStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/university/collaborator
 * - If ?token=... is provided, validates the token (Public)
 * - If called by authenticated Admin, returns the current token and full shareable link
 */
export async function GET(req: NextRequest) {
  const tokenQuery = req.nextUrl.searchParams.get('token');

  // Token validation mode (used by collaborator portal page)
  if (tokenQuery) {
    const isValid = validateCollaboratorToken(tokenQuery);
    return NextResponse.json({ success: true, valid: isValid });
  }

  // Admin query mode: view the link
  if (!requireAdmin(req)) {
    return NextResponse.json({ success: false, error: 'Administrator access required.' }, { status: 401 });
  }

  const token = getCollaboratorToken();
  const host = req.headers.get('host') || 'academicprep.app';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const inviteLink = `${protocol}://${host}/admin/collaborator?token=${token}`;

  return NextResponse.json({
    success: true,
    token,
    inviteLink,
  });
}

/**
 * POST /api/university/collaborator
 * Admin-only: Rotate/Regenerate the collaborator token
 */
export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ success: false, error: 'Administrator access required.' }, { status: 401 });
  }

  const newToken = regenerateCollaboratorToken();
  const host = req.headers.get('host') || 'academicprep.app';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const inviteLink = `${protocol}://${host}/admin/collaborator?token=${newToken}`;

  return NextResponse.json({
    success: true,
    token: newToken,
    inviteLink,
    message: 'Collaborator link successfully regenerated. Previous links are now revoked.'
  });
}
