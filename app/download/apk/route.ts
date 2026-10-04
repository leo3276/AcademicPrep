import { NextResponse } from 'next/server';
import { OFFICIAL_APK_DOWNLOAD_URL } from '@/lib/apkConfig';

export async function GET() {
  return NextResponse.redirect(OFFICIAL_APK_DOWNLOAD_URL, { status: 302 });
}
