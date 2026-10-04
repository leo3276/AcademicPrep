import { NextResponse } from 'next/server';
import { OFFICIAL_APK_DOWNLOAD_URL, APK_VERSION, APK_FILE_SIZE } from '@/lib/apkConfig';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    latestVersion: APK_VERSION || '1.0.5',
    latestVersionCode: 5,
    fileSize: APK_FILE_SIZE || '82.5 MB',
    downloadUrl: OFFICIAL_APK_DOWNLOAD_URL,
    releaseNotes: 'Modern minimalist UI redesign, decluttered home layout, and full blog photo & video admin privileges.',
    mandatory: false,
  });
}
