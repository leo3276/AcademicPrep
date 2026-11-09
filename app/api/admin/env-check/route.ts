import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, adminUnauthorized } from '@/lib/adminAuth';
import { isSupabaseConfigured, supabaseAdmin } from '@/lib/supabaseClient';

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) {
    return adminUnauthorized();
  }

  const supabaseKeys = Object.keys(process.env).filter(
    (k) =>
      k.toLowerCase().includes('supabase') ||
      k.toLowerCase().includes('admin') ||
      k.toLowerCase().includes('paystack')
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
    matchedEnvKeys: supabaseKeys,
    hasSupabaseUrl: Boolean(process.env.SUPABASE_URL),
    hasServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    hasAnonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    testDbResult,
  });
}
