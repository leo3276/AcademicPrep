import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

function cleanEnv(v: string | undefined): string {
  if (!v) return '';
  return v.replace(/^["']|["']$/g, '').trim();
}

function resolveEnv(...names: string[]): string {
  for (const name of names) {
    const val = cleanEnv(process.env[name]);
    if (val) return val;
    for (const [k, v] of Object.entries(process.env)) {
      if (k.startsWith(`${name}=`)) {
        const extracted = cleanEnv(k.slice(name.length + 1) || v);
        if (extracted) return extracted;
      }
    }
  }
  return '';
}

const ACCOUNT_ID = resolveEnv('CLOUDFLARE_R2_ACCOUNT_ID', 'R2_ACCOUNT_ID', 'CLOUDFLARE_ACCOUNT_ID');
const ACCESS_KEY_ID = resolveEnv('CLOUDFLARE_R2_ACCESS_KEY_ID', 'R2_ACCESS_KEY_ID', 'CLOUDFLARE_ACCESS_KEY_ID');
const SECRET_ACCESS_KEY = resolveEnv('CLOUDFLARE_R2_SECRET_ACCESS_KEY', 'R2_SECRET_ACCESS_KEY', 'CLOUDFLARE_SECRET_ACCESS_KEY');

export const R2_BUCKET_NAME = resolveEnv('CLOUDFLARE_R2_BUCKET_NAME', 'R2_BUCKET_NAME') || 'academicprep-documets02';
export const R2_PUBLIC_URL = resolveEnv('NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL', 'CLOUDFLARE_R2_PUBLIC_URL', 'R2_PUBLIC_URL') || 'https://pub-c3d4ea9ea40449089b98812ed9cacaf8.r2.dev';

export const isR2Configured = Boolean(
  ACCOUNT_ID && ACCESS_KEY_ID && SECRET_ACCESS_KEY
);

export const r2Client = new S3Client({
  region: 'auto',
  endpoint: ACCOUNT_ID ? `https://${ACCOUNT_ID}.r2.cloudflarestorage.com` : undefined,
  credentials: {
    accessKeyId: ACCESS_KEY_ID || '',
    secretAccessKey: SECRET_ACCESS_KEY || '',
  },
});

/**
 * Upload a file to Cloudflare R2
 */
export async function uploadToR2(
  key: string,
  buffer: Buffer,
  contentType: string = 'application/pdf',
  cacheControl: string = 'public, max-age=31536000, immutable'
): Promise<string> {
  if (!isR2Configured) {
    throw new Error('Cloudflare R2 write credentials are not configured.');
  }

  await r2Client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      CacheControl: cacheControl,
    })
  );

  return `${R2_PUBLIC_URL}/${key}`;
}

/**
 * Delete a file from Cloudflare R2
 */
export async function deleteFromR2(key: string): Promise<void> {
  if (!isR2Configured) {
    console.warn('Cloudflare R2 is not configured, skipping deletion.');
    return;
  }

  try {
    await r2Client.send(
      new DeleteObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: key,
      })
    );
  } catch (err) {
    console.warn(`Failed to delete ${key} from R2:`, err);
  }
}
