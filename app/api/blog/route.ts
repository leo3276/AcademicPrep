import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { BlogPost, BlogDraft, INITIAL_BLOG_POSTS } from '@/lib/blogStore';
import { supabaseAdmin } from '@/lib/supabaseClient';
import { requireAdmin } from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DATA_FILE = path.join(process.cwd(), 'data', 'blog_posts.json');
const MANIFEST_FILE_NAME = 'blog_posts_manifest.json';
const DOCUMENTS_BUCKET = 'documents';

async function getStoredBlogPosts(): Promise<BlogPost[]> {
  // 1. Primary: Fetch from Supabase Storage CDN
  try {
    const { data: pubData } = supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .getPublicUrl(MANIFEST_FILE_NAME);

    if (pubData?.publicUrl) {
      const res = await fetch(`${pubData.publicUrl}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch (err) {
    console.warn('Supabase storage CDN blog manifest fetch note:', err);
  }

  // 2. Direct download from Supabase Storage API
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
    console.warn('Supabase storage blog manifest download note:', err);
  }

  // 3. Fallback: Read local data/blog_posts.json
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Local blog_posts.json read note:', err);
  }

  // 4. Default Seed
  return INITIAL_BLOG_POSTS;
}

async function saveStoredBlogPosts(posts: BlogPost[]): Promise<void> {
  // 1. Primary: Save to Supabase Storage
  try {
    const { error } = await supabaseAdmin.storage
      .from(DOCUMENTS_BUCKET)
      .upload(MANIFEST_FILE_NAME, JSON.stringify(posts, null, 2), {
        upsert: true,
        contentType: 'application/json',
        cacheControl: '0',
      });
    if (error) {
      console.error('Failed to save blog manifest to Supabase storage:', error);
    }
  } catch (err) {
    console.error('Failed to save blog manifest to Supabase storage:', err);
  }

  // 2. Secondary: Sync to local disk if writable
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf8');
  } catch {
    // Expected on Vercel / serverless environment
  }
}

/**
 * Public GET: Fetch all blog posts or single post by ID or filtered by category
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const category = searchParams.get('category');

  const posts = await getStoredBlogPosts();

  if (id) {
    const post = posts.find((p) => p.id === id);
    if (!post) {
      return NextResponse.json({ error: 'Article not found.' }, { status: 404 });
    }
    return NextResponse.json(post, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  }

  let results = posts;
  if (category && category !== 'ALL') {
    results = results.filter((p) => p.category === category);
  }

  return NextResponse.json(results, {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}

/**
 * Admin POST: Publish a new blog post
 */
export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json(
      { success: false, error: 'Administrator access required.' },
      { status: 401 }
    );
  }

  try {
    const body: BlogDraft = await req.json();

    if (!body.title?.trim() || !body.excerpt?.trim() || !body.content?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Title, summary excerpt, and content are required.' },
        { status: 400 }
      );
    }

    const posts = await getStoredBlogPosts();

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title: body.title.trim(),
      excerpt: body.excerpt.trim(),
      content: body.content.trim(),
      author: body.author?.trim() || 'AcademicPrep Editorial',
      category: body.category || 'Study Tips',
      readTimeMinutes: Math.max(1, body.readTimeMinutes || 4),
      publishedAt: new Date().toISOString(),
      featured: Boolean(body.featured),
      mediaType: body.mediaType || null,
      mediaUrl: body.mediaUrl ? body.mediaUrl.trim() : null,
      mediaCaption: body.mediaCaption ? body.mediaCaption.trim() : null,
    };

    let updatedList = [newPost, ...posts];
    await saveStoredBlogPosts(updatedList);

    return NextResponse.json({ success: true, post: newPost });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to publish post.' },
      { status: 500 }
    );
  }
}

/**
 * Admin PUT: Update an existing blog post
 */
export async function PUT(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json(
      { success: false, error: 'Administrator access required.' },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Article ID is required.' },
        { status: 400 }
      );
    }

    const posts = await getStoredBlogPosts();
    const index = posts.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Article not found.' },
        { status: 404 }
      );
    }

    let updatedList = [...posts];

    const updatedPost: BlogPost = {
      ...updatedList[index],
      ...updates,
      title: updates.title !== undefined ? updates.title.trim() : updatedList[index].title,
      excerpt: updates.excerpt !== undefined ? updates.excerpt.trim() : updatedList[index].excerpt,
      content: updates.content !== undefined ? updates.content.trim() : updatedList[index].content,
      mediaType: updates.mediaType !== undefined ? updates.mediaType : updatedList[index].mediaType,
      mediaUrl: updates.mediaUrl !== undefined ? (updates.mediaUrl ? updates.mediaUrl.trim() : null) : updatedList[index].mediaUrl,
      mediaCaption: updates.mediaCaption !== undefined ? (updates.mediaCaption ? updates.mediaCaption.trim() : null) : updatedList[index].mediaCaption,
    };

    updatedList[index] = updatedPost;
    await saveStoredBlogPosts(updatedList);

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to update post.' },
      { status: 500 }
    );
  }
}

/**
 * Admin DELETE: Remove an article
 */
export async function DELETE(req: NextRequest) {
  if (!requireAdmin(req)) {
    return NextResponse.json(
      { success: false, error: 'Administrator access required.' },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { success: false, error: 'Article ID is required.' },
      { status: 400 }
    );
  }

  const posts = await getStoredBlogPosts();
  const filtered = posts.filter((p) => p.id !== id);

  if (filtered.length === posts.length) {
    return NextResponse.json(
      { success: false, error: 'Article not found.' },
      { status: 404 }
    );
  }

  // Ensure at least one post is featured if any exist
  if (filtered.length > 0 && !filtered.some((p) => p.featured)) {
    filtered[0].featured = true;
  }

  await saveStoredBlogPosts(filtered);
  return NextResponse.json({ success: true });
}
