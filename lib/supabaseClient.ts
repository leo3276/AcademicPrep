import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * SERVER-ONLY MODULE.
 *
 * This file exposes the service_role client, which bypasses Row Level Security
 * and can read and write every row in the database. It must only ever be
 * imported from API route handlers or other server modules - never from a
 * React component or any file reachable from the browser bundle.
 *
 * Browser-facing code goes through the /api/* routes, which enforce session
 * tokens and admin keys before touching the database.
 */

function cleanVal(v: string | undefined): string {
  if (!v) return '';
  return v.replace(/^["']|["']$/g, '').trim();
}

function resolveEnv(...names: string[]): string {
  for (const name of names) {
    const val = cleanVal(process.env[name]);
    if (val) return val;
    // Check if key was accidentally pasted into Vercel as KEY=VALUE inside the name field
    for (const [k, v] of Object.entries(process.env)) {
      if (k.startsWith(`${name}=`)) {
        const extracted = cleanVal(k.slice(name.length + 1) || v);
        if (extracted) return extracted;
      }
    }
  }
  return '';
}

const supabaseUrl = resolveEnv('SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_URL');
const supabaseServiceKey = resolveEnv(
  'SUPABASE_SERVICE_ROLE_KEY',
  'SUPABASE_SERVICE_KEY',
  'SUPABASE_SECRET_KEY',
  'SUPABASE_ANON_SECRET',
  'SUPABASE_SECRET',
  'SUPABASE_KEY',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_ANON_PUBLIC'
);

/**
 * True only when both the project URL and the service_role key are present in
 * the server environment. Every data-access path must check this and fail
 * closed rather than silently degrading to an unauthenticated client.
 */
export const isSupabaseConfigured: boolean = Boolean(supabaseUrl && supabaseServiceKey);

if (!isSupabaseConfigured) {
  // eslint-disable-next-line no-console
  console.error(
    '[supabaseClient] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. ' +
      'All database operations will be rejected until these are configured.'
  );
}

/**
 * A syntactically valid placeholder keeps createClient from throwing at import
 * time when the environment is incomplete. Every call site is gated on
 * isSupabaseConfigured, so this client is never actually used in that state.
 */
const PLACEHOLDER_URL = 'https://unconfigured.invalid';

export const supabaseAdmin: SupabaseClient = createClient(
  isSupabaseConfigured ? supabaseUrl : PLACEHOLDER_URL,
  isSupabaseConfigured ? supabaseServiceKey : 'unconfigured',
  {
    auth: { autoRefreshToken: false, persistSession: false },
  }
);
