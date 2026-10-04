import { NextResponse } from 'next/server';
import { OFFICIAL_APK_DOWNLOAD_URL, APK_VERSION, APK_FILE_SIZE } from '@/lib/apkConfig';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    latestVersion: APK_VERSION || '1.0.6',
    latestVersionCode: 6,
    fileSize: APK_FILE_SIZE || '82.5 MB',
    downloadUrl: OFFICIAL_APK_DOWNLOAD_URL,
    releaseNotes: '30-day unrestricted free trial with live countdown, calming student-friendly color palette, pastel quick tools, and unlocked curriculum.',
    mandatory: false,
  });
}
