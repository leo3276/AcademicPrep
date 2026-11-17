import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import {
  isR2Configured,
  initiateR2MultipartUpload,
  uploadR2Part,
  completeR2MultipartUpload,
  abortR2MultipartUpload,
  R2_PUBLIC_URL,
} from '@/lib/r2Client';
import { UploadedPdfDocument, PdfCategory, PdfPaperType } from '@/lib/pdfStore';
import { getStoredDocuments, saveStoredDocuments } from '../route';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    if (!requireAdmin(request)) {
      return NextResponse.json({ error: 'Administrator access required.' }, { status: 401 });
    }

    if (!isR2Configured) {
      return NextResponse.json(
        { error: 'Cloudflare R2 is not configured on this server.' },
        { status: 500 }
      );
    }

    const contentType = request.headers.get('content-type') || '';

    // A. JSON Actions: initiate, complete, abort
    if (contentType.includes('application/json')) {
      const body = await request.json();
      const action = body.action;

      // 1. INITIATE
      if (action === 'initiate') {
        const rawName = body.fileName || 'document.pdf';
        const cleanName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_');
        const timestamp = Date.now();
        const key = `${timestamp}_${cleanName}`;
        const fileType = body.contentType || 'application/pdf';

        const uploadId = await initiateR2MultipartUpload(key, fileType);
        return NextResponse.json({
          success: true,
          action: 'initiate',
          key,
          uploadId,
          publicUrl: `${R2_PUBLIC_URL}/${key}`,
        });
      }

      // 2. COMPLETE
      if (action === 'complete') {
        const {
          key,
          uploadId,
          parts,
          title,
          category,
          subjectId,
          subjectName,
          year,
          level,
          paperType,
          fileName,
          fileSizeBytes,
        } = body;

        if (!key || !uploadId || !Array.isArray(parts)) {
          return NextResponse.json(
            { error: 'Missing key, uploadId, or parts array' },
            { status: 400 }
          );
        }

        const publicUrl = await completeR2MultipartUpload(key, uploadId, parts);
        const timestamp = Date.now();
        const docId = `doc_${timestamp}_${Math.random().toString(36).slice(2, 7)}`;

        const newDoc: UploadedPdfDocument = {
          id: docId,
          title: String(title || fileName || 'Past Paper').trim(),
          category: (category as PdfCategory) || 'bece_past_question',
          subjectId: String(subjectId || 'general'),
          subjectName: String(subjectName || subjectId || 'General'),
          year: year ? Number(year) : undefined,
          level: level ? (level as any) : undefined,
          paperType: (paperType as PdfPaperType) || 'Full Exam Paper',
          fileName: fileName || key,
          fileUrl: publicUrl,
          fileSizeBytes: Number(fileSizeBytes) || 0,
          uploadedAt: new Date().toISOString(),
        };

        const existingDocs = await getStoredDocuments();
        const updated = [newDoc, ...existingDocs.filter((d) => d.id !== newDoc.id)];
        await saveStoredDocuments(updated);

        return NextResponse.json(newDoc, { status: 201 });
      }

      // 3. ABORT
      if (action === 'abort') {
        const { key, uploadId } = body;
        if (key && uploadId) {
          await abortR2MultipartUpload(key, uploadId);
        }
        return NextResponse.json({ success: true, action: 'abort' });
      }

      return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
    }

    // B. FormData Action: upload_part
    const formData = await request.formData();
    const action = formData.get('action');
    if (action === 'upload_part') {
      const key = formData.get('key') as string;
      const uploadId = formData.get('uploadId') as string;
      const partNumber = parseInt(formData.get('partNumber') as string, 10);
      const chunk = formData.get('chunk') as File | null;

      if (!key || !uploadId || !partNumber || !chunk) {
        return NextResponse.json(
          { error: 'Missing key, uploadId, partNumber, or chunk' },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await chunk.arrayBuffer());
      const etag = await uploadR2Part(key, uploadId, partNumber, buffer);

      return NextResponse.json({
        success: true,
        action: 'upload_part',
        partNumber,
        etag,
      });
    }

    return NextResponse.json({ error: 'Invalid request format' }, { status: 400 });
  } catch (err: any) {
    console.error('upload-chunk error:', err);
    return NextResponse.json({ error: err.message || 'Chunk upload failed' }, { status: 500 });
  }
}
