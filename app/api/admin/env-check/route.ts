import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, adminUnauthorized } from '@/lib/adminAuth';
import { isSupabaseConfigured, supabaseAdmin } from '@/lib/supabaseClient';
import { isR2Configured, R2_BUCKET_NAME, R2_PUBLIC_URL } from '@/lib/r2Client';

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) {
    return adminUnauthorized();
  }

  const supabaseKeys = Object.keys(process.env).filter(
    (k) =>
      k.toLowerCase().includes('supabase') ||
      k.toLowerCase().includes('admin') ||
      k.toLowerCase().includes('paystack') ||
      k.toLowerCase().includes('cloudflare') ||
      k.toLowerCase().includes('r2')
  );

  let testDbResult: any = null;
  try {
    const { count, error } = await supabaseAdmin
      .from('students')
      .select('count', { count: 'exact', head: true });
    testDbResult = { count, error: error?.message || null };
  } catch (e: any) {
    testDbResult = { error: e?.message || String(e) };
  }

  return NextResponse.json({
    success: true,
    isSupabaseConfigured,
    isR2Configured,
    r2Bucket: R2_BUCKET_NAME,
    r2PublicUrl: R2_PUBLIC_URL,
    matchedEnvKeys: supabaseKeys,
    hasSupabaseUrl: Boolean(process.env.SUPABASE_URL),
    hasServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    hasAnonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    testDbResult,
  });
}
