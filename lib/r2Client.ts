import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
  AbortMultipartUploadCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

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

export const R2_BUCKET_NAME = resolveEnv('CLOUDFLARE_R2_BUCKET_NAME', 'R2_BUCKET_NAME', 'CLOUDFLARE_BUCKET_NAME') || 'academicprep-documets02';
export const R2_PUBLIC_URL = resolveEnv('NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL', 'CLOUDFLARE_R2_PUBLIC_URL', 'CLOUDFLARE_PUBLIC_URL', 'R2_PUBLIC_URL') || 'https://pub-c3d4ea9ea40449089b98812ed9cacaf8.r2.dev';

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

/**
 * Generate a direct signed upload PUT URL for Cloudflare R2
 * This allows the client browser to stream files directly into Cloudflare R2
 * without passing through Vercel serverless functions or Supabase ($0 egress forever).
 */
export async function createR2PresignedUploadUrl(
  key: string,
  contentType: string = 'application/pdf',
  expiresInSeconds: number = 900
): Promise<{ signedUrl: string; publicUrl: string }> {
  if (!isR2Configured) {
    throw new Error('Cloudflare R2 write credentials are not configured.');
  }

  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  const signedUrl = await getSignedUrl(r2Client, command, { expiresIn: expiresInSeconds });
  const publicUrl = `${R2_PUBLIC_URL}/${key}`;

  return { signedUrl, publicUrl };
}

/**
 * Initiate S3 Multipart Upload on Cloudflare R2
 */
export async function initiateR2MultipartUpload(
  key: string,
  contentType: string = 'application/pdf'
): Promise<string> {
  if (!isR2Configured) {
    throw new Error('Cloudflare R2 write credentials are not configured.');
  }

  const res = await r2Client.send(
    new CreateMultipartUploadCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      ContentType: contentType,
    })
  );

  if (!res.UploadId) {
    throw new Error('Failed to obtain UploadId from Cloudflare R2');
  }

  return res.UploadId;
}

/**
 * Upload a chunk part to Cloudflare R2 Multipart Upload
 */
export async function uploadR2Part(
  key: string,
  uploadId: string,
  partNumber: number,
  buffer: Buffer
): Promise<string> {
  if (!isR2Configured) {
    throw new Error('Cloudflare R2 write credentials are not configured.');
  }

  const res = await r2Client.send(
    new UploadPartCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      UploadId: uploadId,
      PartNumber: partNumber,
      Body: buffer,
    })
  );

  if (!res.ETag) {
    throw new Error(`Failed to upload part ${partNumber} to Cloudflare R2`);
  }

  return res.ETag;
}

/**
 * Complete S3 Multipart Upload on Cloudflare R2
 */
export async function completeR2MultipartUpload(
  key: string,
  uploadId: string,
  parts: Array<{ PartNumber: number; ETag: string }>
): Promise<string> {
  if (!isR2Configured) {
    throw new Error('Cloudflare R2 write credentials are not configured.');
  }

  // Ensure parts are sorted strictly ascending by PartNumber
  const sortedParts = [...parts].sort((a, b) => a.PartNumber - b.PartNumber);

  await r2Client.send(
    new CompleteMultipartUploadCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      UploadId: uploadId,
      MultipartUpload: {
        Parts: sortedParts,
      },
    })
  );

  return `${R2_PUBLIC_URL}/${key}`;
}

/**
 * Abort S3 Multipart Upload on Cloudflare R2
 */
export async function abortR2MultipartUpload(key: string, uploadId: string): Promise<void> {
  if (!isR2Configured) return;
  try {
    await r2Client.send(
      new AbortMultipartUploadCommand({
        Bucket: R2_BUCKET_NAME,
        Key: key,
        UploadId: uploadId,
      })
    );
  } catch (err) {
    console.warn(`Failed to abort multipart upload ${uploadId}:`, err);
  }
}
