import fs from 'fs';
import path from 'path';

export interface UniversityContentReport {
  id: string;
  slideId?: string;
  courseCode: string;
  courseTitle: string;
  university?: string;
  issueType: 'outdated' | 'typo_inaccuracy' | 'missing_pages' | 'broken_file' | 'wrong_course' | 'other';
  description: string;
  contactEmail?: string;
  status: 'pending' | 'resolved' | 'dismissed';
  adminNotes?: string;
  createdAt: string;
  resolvedAt?: string;
}

const REPORTS_FILE = path.join(process.cwd(), 'data', 'university_reports.json');

function ensureDataDir(): void {
  const dir = path.dirname(REPORTS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export async function getStoredContentReports(): Promise<UniversityContentReport[]> {
  try {
    ensureDataDir();
    if (!fs.existsSync(REPORTS_FILE)) {
      fs.writeFileSync(REPORTS_FILE, JSON.stringify([], null, 2), 'utf8');
      return [];
    }
    const raw = fs.readFileSync(REPORTS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('[universityReportsStore] Error reading reports:', err);
    return [];
  }
}

export async function addContentReport(
  report: Omit<UniversityContentReport, 'id' | 'status' | 'createdAt'>
): Promise<UniversityContentReport> {
  const existing = await getStoredContentReports();
  const newReport: UniversityContentReport = {
    id: `rep_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...report,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  const updated = [newReport, ...existing];
  ensureDataDir();
  fs.writeFileSync(REPORTS_FILE, JSON.stringify(updated, null, 2), 'utf8');
  return newReport;
}

export async function updateContentReportStatus(
  id: string,
  status: 'pending' | 'resolved' | 'dismissed',
  adminNotes?: string
): Promise<UniversityContentReport | null> {
  const existing = await getStoredContentReports();
  const index = existing.findIndex(r => r.id === id);
  if (index === -1) return null;

  existing[index] = {
    ...existing[index],
    status,
    ...(adminNotes !== undefined ? { adminNotes } : {}),
    ...(status === 'resolved' ? { resolvedAt: new Date().toISOString() } : {}),
  };

  ensureDataDir();
  fs.writeFileSync(REPORTS_FILE, JSON.stringify(existing, null, 2), 'utf8');
  return existing[index];
}
