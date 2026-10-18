import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { UploadedPdfDocument, PdfCategory } from '@/lib/pdfStore';
import { supabaseAdmin } from '@/lib/supabaseClient';
import { requireAdmin } from '@/lib/adminAuth';
import { uploadToR2, deleteFromR2, isR2Configured, R2_PUBLIC_URL } from '@/lib/r2Client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DATA_FILE = path.join(process.cwd(), 'data', 'documents.json');
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'documents');
const MANIFEST_FILE_NAME = 'documents_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

async function getStoredDocuments(): Promise<UploadedPdfDocument[]> {
  // 1. Primary: Fetch from Cloudflare R2 CDN with cache-buster
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
      console.warn('Cloudflare R2 manifest fetch note:', err);
    }
  }

  // 2. Secondary: Fetch from Supabase Storage CDN with cache-buster
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
    console.warn('Supabase storage CDN manifest fetch note:', err);
  }

  // 3. Tertiary: Direct download from Supabase Storage API
  try {
    const { data, error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .download(MANIFEST_FILE_NAME);

    if (!error && data) {
      const text = await data.text();
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Supabase storage manifest download note:', err);
  }

  // 4. Fallback: Read local documents.json (bundled with project)
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Local documents.json read note:', err);
  }

  return [];
}

async function saveStoredDocuments(docs: UploadedPdfDocument[]): Promise<void> {
  const payload = JSON.stringify(docs, null, 2);

  // 1. Primary: Save to Cloudflare R2
  if (isR2Configured) {
    try {
      await uploadToR2(MANIFEST_FILE_NAME, Buffer.from(payload), 'application/json', '0');
    } catch (err) {
      console.error('Failed to save manifest to Cloudflare R2:', err);
    }
  }

  // 2. Secondary: Save to Supabase Storage backup with cacheControl: '0'
  try {
    const { error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .upload(MANIFEST_FILE_NAME, payload, {
        upsert: true,
        contentType: 'application/json',
        cacheControl: '0',
      });
    if (error) {
      console.error('Failed to save manifest to Supabase storage:', error);
    }
  } catch (err) {
    console.error('Failed to save manifest to Supabase storage:', err);
  }

  // 3. Tertiary: Safely attempt to sync to local disk if writable
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, payload, 'utf8');
  } catch {
    // Expected on Vercel / serverless (read-only filesystem)
  }
}

export async function GET() {
  const docs = await getStoredDocuments();
  return NextResponse.json(docs, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Uploading past questions is an administrator action. Without this guard
    // anyone could publish arbitrary PDFs into the student document library.
    if (!requireAdmin(request)) {
      return NextResponse.json({ error: 'Administrator access required.' }, { status: 401 });
    }

    const contentType = request.headers.get('content-type') || '';

    // 1. Direct-to-Cloud Upload Registration (JSON metadata payload)
    if (contentType.includes('application/json')) {
      const body = await request.json();
      const {
        title,
        category,
        subjectId,
        subjectName,
        year,
        level,
        paperType,
        fileName,
        fileUrl,
        fileSizeBytes,
      } = body;

      if (!title || !category || !subjectId || !fileUrl) {
        return NextResponse.json(
          { error: 'Missing required metadata (title, category, subject, fileUrl)' },
          { status: 400 }
        );
      }

      const timestamp = Date.now();
      const docId = `doc_${timestamp}_${Math.random().toString(36).slice(2, 7)}`;

      const newDoc: UploadedPdfDocument = {
        id: docId,
        title: String(title).trim(),
        category,
        subjectId,
        subjectName: subjectName || subjectId,
        year: year ? Number(year) : undefined,
        level: level ? (level as any) : undefined,
        paperType: paperType || 'Full Exam Paper',
        fileName: fileName || 'document.pdf',
        fileUrl,
        fileSizeBytes: Number(fileSizeBytes) || 0,
        uploadedAt: new Date().toISOString(),
      };

      const existingDocs = await getStoredDocuments();
      const updated = [newDoc, ...existingDocs.filter((d) => d.id !== newDoc.id)];
      await saveStoredDocuments(updated);

      return NextResponse.json(newDoc, { status: 201 });
    }

    // 2. Standard Multipart FormData Upload Fallback
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const title = formData.get('title') as string | null;
    const category = formData.get('category') as PdfCategory | null;
    const subjectId = formData.get('subjectId') as string | null;
    const subjectName = formData.get('subjectName') as string | null;
    const yearRaw = formData.get('year') as string | null;
    const levelRaw = formData.get('level') as string | null;
    const paperType = (formData.get('paperType') as any) || 'Full Exam Paper';

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No PDF file uploaded' }, { status: 400 });
    }

    if (!title || !category || !subjectId) {
      return NextResponse.json({ error: 'Missing required metadata (title, category, subject)' }, { status: 400 });
    }

    // Sanitize file name
    const originalName = file.name || 'document.pdf';
    const cleanName = originalName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}_${cleanName}`;
    const docId = `doc_${timestamp}_${Math.random().toString(36).slice(2, 7)}`;

    // Read file buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 1. Upload to Cloudflare R2 (Primary - $0 egress), with Supabase fallback
    let fileUrl = '';
    if (isR2Configured) {
      try {
        fileUrl = await uploadToR2(uniqueFileName, buffer, file.type || 'application/pdf');
      } catch (r2Err: any) {
        console.error('Cloudflare R2 upload error, falling back to Supabase:', r2Err);
      }
    }

    if (!fileUrl) {
      const { error: uploadError } = await supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .upload(uniqueFileName, buffer, {
          contentType: file.type || 'application/pdf',
          upsert: true,
        });

      if (uploadError) {
        console.error('Supabase storage upload error:', uploadError);
        return NextResponse.json(
          { error: `Cloud storage upload failed: ${uploadError.message}` },
          { status: 500 }
        );
      }

      const { data: publicUrlData } = supabaseAdmin.storage
        .from(DOCUMENTS_BUCKET)
        .getPublicUrl(uniqueFileName);

      fileUrl = publicUrlData.publicUrl;
    }

    // 2. Safely attempt local disk write if writable (e.g. local dev), ignoring read-only errors
    try {
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
      }
      const destinationPath = path.join(UPLOAD_DIR, uniqueFileName);
      fs.writeFileSync(destinationPath, buffer);
    } catch {
      // Ignored: On Vercel filesystem is read-only, Supabase CDN is used
    }

    const newDoc: UploadedPdfDocument = {
      id: docId,
      title: title.trim(),
      category,
      subjectId,
      subjectName: subjectName || subjectId,
      year: yearRaw ? Number(yearRaw) : undefined,
      level: levelRaw ? (levelRaw as any) : undefined,
      paperType,
      fileName: originalName,
      fileUrl,
      fileSizeBytes: file.size || buffer.length,
      uploadedAt: new Date().toISOString(),
    };

    const existingDocs = await getStoredDocuments();
    const updated = [newDoc, ...existingDocs.filter(d => d.id !== newDoc.id)];
    await saveStoredDocuments(updated);

    return NextResponse.json(newDoc, { status: 201 });
  } catch (err: any) {
    console.error('Document upload error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!requireAdmin(request)) {
      return NextResponse.json({ error: 'Administrator access required.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Document ID required' }, { status: 400 });
    }

    const docs = await getStoredDocuments();
    const target = docs.find(d => d.id === id);

    if (target && target.fileUrl) {
      const fileName = target.fileUrl.split('/').pop();
      if (fileName) {
        // Delete from Cloudflare R2 if configured
        if (isR2Configured) {
          try {
            await deleteFromR2(fileName);
          } catch (e) {
            console.warn('Failed to delete file from Cloudflare R2:', e);
          }
        }

        // Delete from Supabase Storage
        try {
          await supabaseAdmin.storage.from(DOCUMENTS_BUCKET).remove([fileName]);
        } catch (e) {
          console.warn('Failed to delete file from Supabase storage:', e);
        }

        // Safely attempt local delete if writable
        try {
          const filePath = path.join(UPLOAD_DIR, fileName);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        } catch {
          // Ignored on read-only environments
        }
      }
    }

    const remaining = docs.filter(d => d.id !== id);
    await saveStoredDocuments(remaining);

    return NextResponse.json({ success: true, deletedId: id });
  } catch (err: any) {
    console.error('Document delete error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
