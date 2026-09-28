import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';
import { requireAdmin } from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DOCUMENTS_BUCKET = 'documents';

export async function POST(request: NextRequest) {
  try {
    // A signed upload URL grants write access to the storage bucket, so it is
    // only issued to authenticated administrators.
    if (!requireAdmin(request)) {
      return NextResponse.json({ error: 'Administrator access required.' }, { status: 401 });
    }

    const body = await request.json();
    const rawName = body.fileName || 'document.pdf';
    const cleanName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}_${cleanName}`;

    // Create 10-minute signed upload URL from Supabase Storage
    const { data, error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .createSignedUploadUrl(uniqueFileName);

    if (error || !data) {
      console.error('Failed to create signed upload URL:', error);
      return NextResponse.json(
        { error: error?.message || 'Failed to create upload authorization' },
        { status: 500 }
      );
    }

    const { data: pubData } = supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .getPublicUrl(uniqueFileName);

    return NextResponse.json({
      signedUrl: data.signedUrl,
      token: data.token,
      path: data.path,
      uniqueFileName,
      publicUrl: pubData.publicUrl,
    });
  } catch (err: any) {
    console.error('Upload URL generation error:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
