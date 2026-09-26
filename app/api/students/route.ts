import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { fetchLeaderboardFromSupabase } from '@/lib/supabaseService';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

const DATA_FILE = path.join(process.cwd(), 'data', 'students.json');

export interface ServerStudentDetail {
  id: string;
  phone: string;
  name: string;
  level: string;
  accessType: 'Full Pass' | 'Free Trial' | 'Expired';
  accessExpiresAt?: string;
  lastActive: string;
  topicsCompleted: number;
  completedTopicIds?: string[];
  avgScorePercentage: number;
  registeredAt: string;
}

function getStoredStudents(): ServerStudentDetail[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(s => s.phone !== '0241234567' && s.phone !== '0559876543') : [];
  } catch (err) {
    console.error('Failed to read students.json', err);
    return [];
  }
}

function saveStoredStudents(students: ServerStudentDetail[]): void {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to save students.json', err);
  }
}

export async function GET() {
  try {
    const supabaseStudents = await fetchLeaderboardFromSupabase();
    if (Array.isArray(supabaseStudents) && supabaseStudents.length > 0) {
      // Calculate dynamic expiration status
      const formatted = supabaseStudents.map(s => {
        const isExpired = s.accessExpiresAt ? new Date(s.accessExpiresAt).getTime() <= Date.now() : false;
        return {
          ...s,
          accessType: isExpired ? 'Expired' : (s.accessType || 'Free Trial')
        };
      });
      saveStoredStudents(formatted);
      return NextResponse.json(formatted);
    }
  } catch (err) {
    console.error('Supabase leaderboard fetch failed in API route:', err);
  }

  // Fallback to local stored students
  const students = getStoredStudents();
  // Sort by topics completed (desc) then avgScorePercentage (desc)
  const ranked = [...students].sort((a, b) => {
    if (b.topicsCompleted !== a.topicsCompleted) {
      return b.topicsCompleted - a.topicsCompleted;
    }
    return b.avgScorePercentage - a.avgScorePercentage;
  });

  return NextResponse.json(ranked);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      phone, 
      name, 
      level, 
      accessType, 
      accessExpiresAt, 
      topicIdCompleted, 
      newQuizScore 
    } = body;

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const cleanPhone = String(phone).trim().replace(/\s+/g, '');
    const students = getStoredStudents();
    const existingIdx = students.findIndex(s => s.phone === cleanPhone);

    const now = new Date().toISOString();
    const isFullPass = accessType === 'Full Pass';

    // 1. Sync directly to Supabase if connected
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase
          .from('students')
          .upsert({
            phone_number: cleanPhone,
            full_name: name ? String(name).trim() : `Student ${cleanPhone.slice(-4)}`,
            current_level: level || 'JHS 3',
            has_full_access: isFullPass,
            access_type: accessType || 'Free Trial',
            access_expires_at: accessExpiresAt || null,
            last_active_at: now,
            updated_at: now
          }, { onConflict: 'phone_number' });
      } catch (sbErr) {
        console.warn('Supabase upsert student notice:', sbErr);
      }
    }

    if (existingIdx >= 0) {
      const existing = students[existingIdx];
      let updatedTopics = existing.completedTopicIds || [];
      if (topicIdCompleted && !updatedTopics.includes(topicIdCompleted)) {
        updatedTopics = [...updatedTopics, topicIdCompleted];
      }

      let updatedAvgScore = existing.avgScorePercentage;
      if (typeof newQuizScore === 'number') {
        if (existing.topicsCompleted === 0) {
          updatedAvgScore = Math.round(newQuizScore);
        } else {
          updatedAvgScore = Math.round((existing.avgScorePercentage * existing.topicsCompleted + newQuizScore) / (existing.topicsCompleted + 1));
        }
      }

      const updatedStudent: ServerStudentDetail = {
        ...existing,
        name: name ? String(name).trim() : existing.name,
        level: level || existing.level,
        accessType: accessType || existing.accessType,
        accessExpiresAt: accessExpiresAt !== undefined ? accessExpiresAt : existing.accessExpiresAt,
        lastActive: 'Active now',
        completedTopicIds: updatedTopics,
        topicsCompleted: Math.max(existing.topicsCompleted, updatedTopics.length),
        avgScorePercentage: updatedAvgScore,
      };

      students[existingIdx] = updatedStudent;
      saveStoredStudents(students);
      return NextResponse.json(updatedStudent);
    } else {
      // New student registration
      const newTopics = topicIdCompleted ? [topicIdCompleted] : [];
      const newStudent: ServerStudentDetail = {
        id: `st-${cleanPhone.slice(-6)}-${Date.now().toString(36).slice(-4)}`,
        phone: cleanPhone,
        name: name ? String(name).trim() : `Student ${cleanPhone.slice(-4)}`,
        level: level || 'JHS 1',
        accessType: accessType || 'Free Trial',
        accessExpiresAt: accessExpiresAt,
        lastActive: 'Active now',
        topicsCompleted: newTopics.length,
        completedTopicIds: newTopics,
        avgScorePercentage: typeof newQuizScore === 'number' ? Math.round(newQuizScore) : 0,
        registeredAt: now,
      };

      const updatedList = [newStudent, ...students];
      saveStoredStudents(updatedList);
      return NextResponse.json(newStudent, { status: 201 });
    }
  } catch (err: any) {
    console.error('Error in /api/students POST:', err);
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}
