// ============================================================================
// Migration script: Upload all 75 backed-up examination PDFs to Cloudflare R2
// ============================================================================
const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const ACCOUNT_ID = process.env.CLOUDFLARE_R2_ACCOUNT_ID || process.argv[2];
const ACCESS_KEY_ID = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || process.argv[3];
const SECRET_ACCESS_KEY = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || process.argv[4];
const BUCKET_NAME = process.env.CLOUDFLARE_R2_BUCKET_NAME || 'academicprep-documets02';
const PUBLIC_URL_BASE = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL || 'https://pub-c3d4ea9ea40449089b98812ed9cacaf8.r2.dev';

if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
  console.error('ERROR: Missing Cloudflare R2 credentials. Please set CLOUDFLARE_R2_ACCOUNT_ID, CLOUDFLARE_R2_ACCESS_KEY_ID, and CLOUDFLARE_R2_SECRET_ACCESS_KEY.');
  process.exit(1);
}

const BACKUP_DIR = path.join(__dirname, '..', 'backup-documents');
const MANIFEST_FILE = path.join(BACKUP_DIR, 'documents_manifest.json');
const LOCAL_DATA_FILE = path.join(__dirname, '..', 'data', 'documents.json');

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

async function uploadFile(key, buffer, contentType) {
  const cmd = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable',
  });
  return s3.send(cmd);
}

async function run() {
  console.log('🚀 Starting Cloudflare R2 Migration for AcademicPrep PDFs...');
  console.log(`- Account ID: ${ACCOUNT_ID}`);
  console.log(`- Bucket: ${BUCKET_NAME}`);
  console.log(`- Public URL Base: ${PUBLIC_URL_BASE}`);

  if (!fs.existsSync(MANIFEST_FILE)) {
    console.error(`ERROR: Manifest file not found at ${MANIFEST_FILE}`);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
  console.log(`📋 Found ${manifest.length} documents in manifest.`);

  let uploadedCount = 0;
  let totalBytes = 0;

  for (let i = 0; i < manifest.length; i++) {
    const doc = manifest[i];
    const originalUrl = doc.fileUrl;
    const fileName = path.basename(new URL(originalUrl).pathname);
    const localFilePath = path.join(BACKUP_DIR, fileName);

    if (!fs.existsSync(localFilePath)) {
      console.warn(`⚠️ [${i + 1}/${manifest.length}] File missing locally: ${fileName}`);
      continue;
    }

    const fileBuffer = fs.readFileSync(localFilePath);
    totalBytes += fileBuffer.length;
    const mb = (fileBuffer.length / (1024 * 1024)).toFixed(2);

    console.log(`⬆️ [${i + 1}/${manifest.length}] Uploading ${fileName} (${mb} MB)...`);
    await uploadFile(fileName, fileBuffer, 'application/pdf');

    // Update document fileUrl in manifest to point to Cloudflare R2
    doc.fileUrl = `${PUBLIC_URL_BASE}/${fileName}`;
    uploadedCount++;
  }

  console.log(`✅ Uploaded ${uploadedCount} PDFs (${(totalBytes / (1024 * 1024)).toFixed(1)} MB total) to Cloudflare R2!`);

  // Upload updated manifest to R2
  const updatedManifestJson = JSON.stringify(manifest, null, 2);
  console.log('⬆️ Uploading updated documents_manifest.json to Cloudflare R2...');
  await uploadFile('documents_manifest.json', Buffer.from(updatedManifestJson), 'application/json');

  // Save updated manifest locally
  fs.writeFileSync(MANIFEST_FILE, updatedManifestJson, 'utf8');
  fs.writeFileSync(LOCAL_DATA_FILE, updatedManifestJson, 'utf8');
  console.log('💾 Updated local backup and data/documents.json.');

  // Test verify first document
  if (manifest.length > 0) {
    const testUrl = manifest[0].fileUrl;
    console.log(`🔍 Testing public download verification: ${testUrl}...`);
    try {
      const res = await fetch(testUrl, { method: 'HEAD' });
      console.log(`🎉 Verification HTTP Status: ${res.status} ${res.statusText}`);
      console.log(`Content-Type: ${res.headers.get('content-type')}`);
      console.log(`Content-Length: ${res.headers.get('content-length')} bytes`);
    } catch (err) {
      console.warn('Test fetch warning:', err.message);
    }
  }

  console.log('🏁 Migration to Cloudflare R2 complete! All PDFs now served with $0 egress fees.');
}

run().catch((err) => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
