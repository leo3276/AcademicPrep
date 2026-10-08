import { NextRequest, NextResponse } from 'next/server';
import { getStoredComments, saveStoredComments } from '@/lib/commentsStore';
import { LessonComment } from '@/lib/commentsTypes';
import { resolveSession, getBearerToken } from '@/lib/serverAuth';
import { findStudentById } from '@/lib/dbService';
import { requireAdmin } from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function maskPhone(phone: string): string {
  if (!phone || phone.length < 7) return 'Student';
  return phone.slice(0, 3) + '****' + phone.slice(-3);
}

// Simple profanity & abuse words filter
const INAPPROPRIATE_WORDS = [
  'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'dick', 'pussy', 'scam', 'fraud'
];

function containsInappropriateContent(text: string): boolean {
  const lower = text.toLowerCase();
  return INAPPROPRIATE_WORDS.some((word) => lower.includes(word));
}

// GET /api/comments?topicId=xyz&level=JHS+1
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const topicId = searchParams.get('topicId');
    const level = searchParams.get('level');

    const allComments = await getStoredComments();

    let filtered = allComments.filter((c) => c.status === 'active');

    if (topicId) {
      filtered = filtered.filter((c) => c.topicId === topicId);
    }

    if (level && !topicId) {
      filtered = filtered.filter((c) => c.level === level);
    }

    // Sort: Pinned first, then newest
    filtered.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return NextResponse.json({
      success: true,
      comments: filtered,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to fetch comments.' },
      { status: 500 }
    );
  }
}

// POST /api/comments (Create comment or toggle like)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const action = body?.action || 'create'; // 'create' | 'like'

    const allComments = await getStoredComments();

    // 1. Action: Like / Upvote Comment
    if (action === 'like') {
      const commentId = String(body?.commentId || '');
      const studentId = String(body?.studentId || '');

      if (!commentId || !studentId) {
        return NextResponse.json({ success: false, error: 'Missing commentId or studentId.' }, { status: 400 });
      }

      const commentIndex = allComments.findIndex((c) => c.id === commentId);
      if (commentIndex === -1) {
        return NextResponse.json({ success: false, error: 'Comment not found.' }, { status: 404 });
      }

      const target = allComments[commentIndex];
      const alreadyLiked = target.likedByStudents?.includes(studentId);

      if (alreadyLiked) {
        target.likedByStudents = target.likedByStudents.filter((id) => id !== studentId);
        target.likesCount = Math.max(0, target.likesCount - 1);
      } else {
        target.likedByStudents = [...(target.likedByStudents || []), studentId];
        target.likesCount = (target.likesCount || 0) + 1;
      }

      allComments[commentIndex] = target;
      await saveStoredComments(allComments);

      return NextResponse.json({
        success: true,
        liked: !alreadyLiked,
        likesCount: target.likesCount,
      });
    }

    // 2. Action: Create Comment
    const rawContent = typeof body?.content === 'string' ? body.content.trim() : '';
    const topicId = typeof body?.topicId === 'string' ? body.topicId.trim() : '';
    const subjectId = typeof body?.subjectId === 'string' ? body.subjectId.trim() : '';
    const level = typeof body?.level === 'string' ? body.level.trim() : 'JHS 1';

    if (!rawContent) {
      return NextResponse.json({ success: false, error: 'Comment content cannot be empty.' }, { status: 400 });
    }

    if (rawContent.length > 500) {
      return NextResponse.json({ success: false, error: 'Comment is too long (maximum 500 characters).' }, { status: 400 });
    }

    if (containsInappropriateContent(rawContent)) {
      return NextResponse.json(
        { success: false, error: 'Your comment contains inappropriate or restricted language.' },
        { status: 400 }
      );
    }

    // Identify Student via Session Token or Admin Key
    const token = getBearerToken(req);
    const sessionStudentId = await resolveSession(token);
    const isAdmin = requireAdmin(req);

    let studentName = 'Student Scholar';
    let studentPhoneMasked = '024****000';
    let isVip = false;
    let authorId = sessionStudentId || `guest-${Date.now()}`;
    let isTeacherReply = false;

    if (sessionStudentId) {
      const dbStudent = await findStudentById(sessionStudentId);
      if (dbStudent) {
        studentName = dbStudent.full_name || 'Student';
        studentPhoneMasked = maskPhone(dbStudent.phone_number);
        isVip = Boolean(dbStudent.has_full_access);
      }
    } else if (isAdmin) {
      studentName = 'AcademicPrep Teacher / Admin';
      studentPhoneMasked = 'Official';
      isVip = true;
      isTeacherReply = true;
    } else if (typeof body?.authorName === 'string' && body.authorName.trim()) {
      studentName = body.authorName.trim().slice(0, 40);
    }

    const newComment: LessonComment = {
      id: `comm-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      topicId,
      subjectId,
      level,
      studentId: authorId,
      studentName,
      studentPhoneMasked,
      isVip,
      content: rawContent,
      likesCount: 0,
      likedByStudents: [],
      isPinned: isTeacherReply,
      isTeacherReply,
      teacherTitle: isTeacherReply ? 'Verified AcademicPrep Instructor' : undefined,
      createdAt: new Date().toISOString(),
      status: 'active',
    };

    allComments.unshift(newComment);
    await saveStoredComments(allComments);

    return NextResponse.json({
      success: true,
      comment: newComment,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to submit comment.' },
      { status: 500 }
    );
  }
}

// DELETE /api/comments?id=xyz (Admin moderate/delete or pin)
export async function DELETE(req: NextRequest) {
  try {
    const isAdmin = requireAdmin(req);
    if (!isAdmin) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const commentId = searchParams.get('id');

    if (!commentId) {
      return NextResponse.json({ success: false, error: 'Missing comment id.' }, { status: 400 });
    }

    const allComments = await getStoredComments();
    const updated = allComments.filter((c) => c.id !== commentId);
    await saveStoredComments(updated);

    return NextResponse.json({ success: true, message: 'Comment deleted successfully.' });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to delete comment.' },
      { status: 500 }
    );
  }
}

// PATCH /api/comments (Admin pin/unpin or toggle visibility)
export async function PATCH(req: NextRequest) {
  try {
    const isAdmin = requireAdmin(req);
    if (!isAdmin) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const body = await req.json();
    const commentId = String(body?.id || '');
    const isPinned = typeof body?.isPinned === 'boolean' ? body.isPinned : undefined;

    if (!commentId) {
      return NextResponse.json({ success: false, error: 'Missing comment id.' }, { status: 400 });
    }

    const allComments = await getStoredComments();
    const idx = allComments.findIndex((c) => c.id === commentId);
    if (idx === -1) {
      return NextResponse.json({ success: false, error: 'Comment not found.' }, { status: 404 });
    }

    if (isPinned !== undefined) {
      allComments[idx].isPinned = isPinned;
    }

    await saveStoredComments(allComments);

    return NextResponse.json({ success: true, comment: allComments[idx] });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to update comment.' },
      { status: 500 }
    );
  }
}
