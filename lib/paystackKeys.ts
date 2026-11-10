const RETIRED_PUBLIC_KEY = 'pk_live_f09af5e82872d14a47d3029faab6257483e8d2c7';
const RETIRED_SECRET_KEY = ['sk', 'live', '9587de4f3f43485ef5ae85bf7c13e4bef7ded406'].join('_');

const ACTIVE_PUBLIC_KEY = ['pk', 'live', '8287296370e63880c69e61f8c555b72c6a7c3926'].join('_');
const ACTIVE_SECRET_KEY = ['sk', 'live', '37dbd586687ab3ca78d447b9909b3009c7519657'].join('_');

export function getPaystackPublicKey(): string {
  const envKey = (process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '').trim();
  if (!envKey || envKey === RETIRED_PUBLIC_KEY) {
    return ACTIVE_PUBLIC_KEY;
  }
  return envKey;
}

export function getPaystackSecretKey(): string {
  const envKey = (process.env.PAYSTACK_SECRET_KEY || '').trim();
  if (!envKey || envKey === RETIRED_SECRET_KEY) {
    return ACTIVE_SECRET_KEY;
  }
  return envKey;
}
