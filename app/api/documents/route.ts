import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { UploadedPdfDocument } from '@/lib/pdfStore';

const DATA_FILE = path.join(process.cwd(), 'data', 'documents.json');
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'documents');

function getStoredDocuments(): UploadedPdfDocument[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to read documents.json', err);
    return [];
  }
}

function saveStoredDocuments(docs: UploadedPdfDocument[]): void {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(docs, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to save documents.json', err);
  }
}

export async function GET() {
  const docs = getStoredDocuments();
  return NextResponse.json(docs);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const title = formData.get('title') as string | null;
    const category = formData.get('category') as 'bece_past_question' | 'trial_mock' | null;
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

    // Ensure uploads directory exists
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    // Sanitize file name
    const originalName = file.name || 'document.pdf';
    const cleanName = originalName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}_${cleanName}`;
    const destinationPath = path.join(UPLOAD_DIR, uniqueFileName);

    // Write file buffer to disk
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(destinationPath, buffer);

    const docId = `doc_${timestamp}_${Math.random().toString(36).slice(2, 7)}`;
    const fileUrl = `/uploads/documents/${uniqueFileName}`;

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

    const existingDocs = getStoredDocuments();
    const updated = [newDoc, ...existingDocs];
    saveStoredDocuments(updated);

    return NextResponse.json(newDoc, { status: 201 });
  } catch (err: any) {
    console.error('Document upload error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Document ID required' }, { status: 400 });
    }

    const docs = getStoredDocuments();
    const target = docs.find(d => d.id === id);

    if (target && target.fileUrl) {
      const fileName = path.basename(target.fileUrl);
      const filePath = path.join(UPLOAD_DIR, fileName);
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (e) {
        console.warn('Failed to delete physical file', e);
      }
    }

    const remaining = docs.filter(d => d.id !== id);
    saveStoredDocuments(remaining);

    return NextResponse.json({ success: true, deletedId: id });
  } catch (err: any) {
    console.error('Document delete error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
