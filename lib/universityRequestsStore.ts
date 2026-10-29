import fs from 'fs';
import path from 'path';

export interface CourseRequest {
  id: string;
  university: string;
  courseCode: string;
  courseTitle: string;
  level: string;
  semester: string;
  lecturerName?: string;
  notes?: string;
  studentContact?: string;
  status: 'pending' | 'fulfilled' | 'dismissed';
  createdAt: string;
  fulfilledAt?: string;
}

const REQUESTS_FILE = path.join(process.cwd(), 'data', 'university_requests.json');

function ensureDataDir(): void {
  const dir = path.dirname(REQUESTS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export async function getStoredCourseRequests(): Promise<CourseRequest[]> {
  try {
    ensureDataDir();
    if (!fs.existsSync(REQUESTS_FILE)) {
      fs.writeFileSync(REQUESTS_FILE, JSON.stringify([], null, 2), 'utf8');
      return [];
    }
    const raw = fs.readFileSync(REQUESTS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('[universityRequestsStore] Error reading requests:', err);
    return [];
  }
}

export async function addCourseRequest(
  request: Omit<CourseRequest, 'id' | 'status' | 'createdAt'>
): Promise<CourseRequest> {
  const existing = await getStoredCourseRequests();
  const newReq: CourseRequest = {
    id: `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...request,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  const updated = [newReq, ...existing];
  ensureDataDir();
  fs.writeFileSync(REQUESTS_FILE, JSON.stringify(updated, null, 2), 'utf8');
  return newReq;
}

export async function updateCourseRequestStatus(
  id: string,
  status: 'pending' | 'fulfilled' | 'dismissed'
): Promise<CourseRequest | null> {
  const existing = await getStoredCourseRequests();
  const index = existing.findIndex(r => r.id === id);
  if (index === -1) return null;

  existing[index] = {
    ...existing[index],
    status,
    ...(status === 'fulfilled' ? { fulfilledAt: new Date().toISOString() } : {}),
  };

  ensureDataDir();
  fs.writeFileSync(REQUESTS_FILE, JSON.stringify(existing, null, 2), 'utf8');
  return existing[index];
}
