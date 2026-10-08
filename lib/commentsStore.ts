import fs from 'fs';
import path from 'path';
import { supabaseAdmin } from './supabaseClient';
import { LessonComment } from './commentsTypes';

const DATA_FILE = path.join(process.cwd(), 'data', 'lesson_comments.json');
const MANIFEST_FILE_NAME = 'lesson_comments_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

// Seed starter comments so the community feels alive from Day 1
export const INITIAL_COMMENTS: LessonComment[] = [
  {
    id: 'comm-init-1',
    topicId: 'sci-jhs1-intro-science',
    subjectId: 'science',
    level: 'JHS 1',
    studentId: 'seed-st-1',
    studentName: 'Emmanuel Mensah',
    studentPhoneMasked: '024****812',
    isVip: true,
    content: 'The step-by-step notes on the scientific method made this so clear. Remember to memorize: Observation, Hypothesis, Experiment, and Conclusion for the IAs!',
    likesCount: 14,
    likedByStudents: ['seed-st-2', 'seed-st-3'],
    isPinned: true,
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    status: 'active',
  },
  {
    id: 'comm-init-2',
    topicId: 'sci-jhs1-intro-science',
    subjectId: 'science',
    level: 'JHS 1',
    studentId: 'seed-st-2',
    studentName: 'Abigail Osei',
    studentPhoneMasked: '055****409',
    isVip: false,
    content: 'I just scored 10/10 on the diagnostic quiz! Question 4 on lab hazards is definitely coming in our end of term exams.',
    likesCount: 9,
    likedByStudents: ['seed-st-1'],
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: 'active',
  },
  {
    id: 'comm-init-3',
    topicId: 'jhs1-math-sets',
    subjectId: 'math',
    level: 'JHS 1',
    studentId: 'seed-st-3',
    studentName: 'Kwesi Appiah',
    studentPhoneMasked: '020****932',
    isVip: true,
    content: 'Always draw the Venn diagram first before writing equations. It saved me 5 minutes during the timed quiz!',
    likesCount: 19,
    likedByStudents: ['seed-st-1', 'seed-st-2'],
    isPinned: true,
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    status: 'active',
  },
];

export async function getStoredComments(): Promise<LessonComment[]> {
  // 1. Primary: Download from Supabase Storage CDN
  try {
    const { data, error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .download(MANIFEST_FILE_NAME);

    if (!error && data) {
      const text = await data.text();
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Supabase storage comments download note:', err);
  }

  // 2. Secondary: Read from local data/lesson_comments.json
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Local lesson_comments.json read note:', err);
  }

  return INITIAL_COMMENTS;
}

export async function saveStoredComments(comments: LessonComment[]): Promise<void> {
  // 1. Primary: Save to Supabase Storage
  try {
    const { error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .upload(MANIFEST_FILE_NAME, JSON.stringify(comments, null, 2), {
        upsert: true,
        contentType: 'application/json',
        cacheControl: '0',
      });
    if (error) {
      console.warn('Failed to upload comments to Supabase storage:', error.message);
    }
  } catch (err) {
    console.warn('Supabase storage comments upload note:', err);
  }

  // 2. Secondary: Local disk cache fallback
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(comments, null, 2), 'utf8');
  } catch (err) {
    console.warn('Local lesson_comments.json write note:', err);
  }
}
