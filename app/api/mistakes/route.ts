import { NextRequest, NextResponse } from 'next/server';
import { getStudentFromRequest } from '@/lib/serverAuth';
import { fetchStudentMistakes, saveStudentMistake } from '@/lib/dbService';

const UNAUTHORIZED = () =>
  NextResponse.json({ success: false, error: 'Please sign in to sync your mistake log.' }, { status: 401 });

function cleanText(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

/** GET /api/mistakes - the signed-in student's recent wrong answers. */
export async function GET(req: NextRequest) {
  const row = await getStudentFromRequest(req);
  if (!row) return UNAUTHORIZED();

  const mistakes = await fetchStudentMistakes(String(row.phone_number));

  return NextResponse.json({ success: true, mistakes });
}

/**
 * POST /api/mistakes
 * Body: { topicId, subjectName, subConcept, questionText, studentWrongAnswer, correctAnswer }
 */
export async function POST(req: NextRequest) {
  const row = await getStudentFromRequest(req);
  if (!row) return UNAUTHORIZED();

  const body = await req.json().catch(() => null);
  const topicId = cleanText(body?.topicId, 80);
  const questionText = cleanText(body?.questionText, 2000);

  if (!topicId || !questionText) {
    return NextResponse.json({ success: false, error: 'A topic id and question text are required.' }, { status: 400 });
  }

  await saveStudentMistake({
    phone: String(row.phone_number),
    topicId,
    subjectName: cleanText(body?.subjectName, 100),
    subConcept: cleanText(body?.subConcept, 200),
    questionText,
    studentWrongAnswer: cleanText(body?.studentWrongAnswer, 1000),
    correctAnswer: cleanText(body?.correctAnswer, 1000),
  });

  return NextResponse.json({ success: true });
}
