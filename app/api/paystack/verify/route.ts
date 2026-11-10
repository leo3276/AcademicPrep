import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: 'Direct MTN Mobile Money is used for payments. Paystack verification is disabled.',
    },
    { status: 410 }
  );
}
