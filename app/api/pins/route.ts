import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { 
  fetchPinsFromSupabase, 
  savePinBatchToSupabase, 
  redeemPinInSupabaseStrict 
} from '@/lib/supabaseService';
import { AccessPin } from '@/lib/types';

const DATA_FILE = path.join(process.cwd(), 'data', 'pins.json');

const DEFAULT_PINS: AccessPin[] = [
  {
    id: 'pin-1001',
    pinCode: 'PREP-8842-9901',
    batchId: 'BATCH-JHS-01',
    priceGhs: 25.00,
    validityDays: 30,
    status: 'ACTIVE',
    createdAt: '2026-09-24T10:00:00.000Z',
  },
  {
    id: 'pin-1002',
    pinCode: 'PREP-4412-3321',
    batchId: 'BATCH-JHS-01',
    priceGhs: 25.00,
    validityDays: 30,
    status: 'ACTIVE',
    createdAt: '2026-09-24T10:00:00.000Z',
  },
  {
    id: 'pin-1003',
    pinCode: 'PREP-9904-7712',
    batchId: 'BATCH-JHS-01',
    priceGhs: 25.00,
    validityDays: 30,
    status: 'REDEEMED',
    redeemedAt: '2026-09-23T10:00:00.000Z',
    createdAt: '2026-09-22T10:00:00.000Z',
  },
];

function getStoredPins(): AccessPin[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      saveStoredPins(DEFAULT_PINS);
      return DEFAULT_PINS;
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_PINS;
  } catch (err: any) {
    console.warn('Failed to read pins.json:', err?.message || err);
    return DEFAULT_PINS;
  }
}

function saveStoredPins(pins: AccessPin[]): void {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(pins, null, 2), 'utf8');
  } catch (err: any) {
    console.warn('Failed to save pins.json:', err?.message || err);
  }
}

export async function GET() {
  try {
    const supaPins = await fetchPinsFromSupabase();
    if (Array.isArray(supaPins) && supaPins.length > 0) {
      saveStoredPins(supaPins);
      return NextResponse.json(supaPins);
    }
  } catch (err: any) {
    console.warn('Supabase fetch pins notice in API:', err?.message || err);
  }

  const localPins = getStoredPins();
  return NextResponse.json(localPins);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Generation of a new PIN batch
    if (body.action === 'generate') {
      const newPins: AccessPin[] = body.pins;
      if (!Array.isArray(newPins) || newPins.length === 0) {
        return NextResponse.json({ success: false, error: 'No pins provided' }, { status: 400 });
      }

      // Save to Supabase
      await savePinBatchToSupabase(newPins);

      // Save to server JSON
      const currentPins = getStoredPins();
      const merged = [...newPins, ...currentPins.filter(cp => !newPins.some(np => np.pinCode === cp.pinCode))];
      saveStoredPins(merged);

      return NextResponse.json({ success: true, count: newPins.length });
    }

    // 2. Redemption of a PIN
    if (body.action === 'redeem') {
      const pinCode = (body.pinCode || '').trim().toUpperCase();
      const studentPhone = (body.studentPhone || '').trim();

      if (!pinCode) {
        return NextResponse.json({ success: false, message: 'Please enter a PIN code.' }, { status: 400 });
      }

      // Check with Supabase strict single-use redemption first
      const supaResult = await redeemPinInSupabaseStrict(pinCode, studentPhone);

      if (!supaResult.success) {
        // Also check local JSON fallback
        const localPins = getStoredPins();
        const localPin = localPins.find(p => p.pinCode === pinCode);
        if (localPin) {
          if (localPin.status === 'REDEEMED') {
            return NextResponse.json({ 
              success: false, 
              message: 'This PIN code has already been redeemed and cannot be reused.' 
            });
          }
          if (localPin.status === 'ACTIVE') {
            localPin.status = 'REDEEMED';
            localPin.redeemedByStudentId = studentPhone || 'DIRECT';
            localPin.redeemedAt = new Date().toISOString();
            saveStoredPins(localPins);
            return NextResponse.json({ 
              success: true, 
              message: 'PIN successfully verified! Full access unlocked for ' + localPin.validityDays + ' days.',
              validityDays: localPin.validityDays 
            });
          }
        }
        return NextResponse.json(supaResult);
      }

      // Update local storage to match Supabase state
      const localPins = getStoredPins();
      const foundIdx = localPins.findIndex(p => p.pinCode === pinCode);
      if (foundIdx !== -1) {
        localPins[foundIdx].status = 'REDEEMED';
        localPins[foundIdx].redeemedByStudentId = studentPhone || 'DIRECT';
        localPins[foundIdx].redeemedAt = new Date().toISOString();
        saveStoredPins(localPins);
      }

      return NextResponse.json(supaResult);
    }

    return NextResponse.json({ success: false, error: 'Unknown action' }, { status: 400 });
  } catch (err: any) {
    console.warn('PIN API route error:', err?.message || err);
    return NextResponse.json({ success: false, message: 'Server error processing PIN request' }, { status: 500 });
  }
}
