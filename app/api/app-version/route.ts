import { NextResponse } from 'next/server';
import { OFFICIAL_APK_DOWNLOAD_URL, APK_VERSION, APK_FILE_SIZE } from '@/lib/apkConfig';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    latestVersion: APK_VERSION || '1.0.4',
    latestVersionCode: 4,
    fileSize: APK_FILE_SIZE || '82.5 MB',
    downloadUrl: OFFICIAL_APK_DOWNLOAD_URL,
    releaseNotes: 'Embedded in-app updater, compact UI scaling, Android font zoom fix, and trial restrictions.',
    mandatory: false,
  });
}
