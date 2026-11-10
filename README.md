# AcademicPrep

Ghana's unified study platform for JHS (BECE), SHS (WASSCE), and Tertiary students.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Paystack Direct Mobile Money Integration (Ghana — GHS)

AcademicPrep uses **Paystack's Direct Charge API** (`POST https://api.paystack.co/charge`) for frictionless Ghana Mobile Money payments (`MTN MoMo`, `Telecel Cash`, and `AirtelTigo Money`). Students pick their pass, select their network, enter their 10-digit MoMo phone number, and approve the USSD push directly on their phone with their **MoMo PIN**.

### 1. Required Environment Variables

Set these variables in `.env.local` for local development and in **Vercel Dashboard → Project → Settings → Environment Variables** for production:

| Variable | Description |
| :--- | :--- |
| `PAYSTACK_SECRET_KEY` | Paystack Secret Key (`sk_live_...` in production, `sk_test_...` in test mode). Server-only; never exposed to the browser. |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack Public Key (`pk_live_...` in production, `pk_test_...` in test mode). |
| `SUPABASE_URL` | Supabase project URL (`https://<project-ref>.supabase.co`). |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Service Role key (used by server routes to write to `public.payments` and `public.students`). |
| `ADMIN_SESSION_SECRET` | Secret key used to sign student and administrator HTTP-only session cookies. |
| `CRON_SECRET` | Secret token used by Vercel Cron (`Authorization: Bearer <CRON_SECRET>`) for `/api/cron/renewals`. |
| `WHATSAPP_PHONE_NUMBER_ID` | *(Optional)* Meta WhatsApp Cloud API Phone Number ID for 3-day pass renewal reminders. |
| `WHATSAPP_ACCESS_TOKEN` | *(Optional)* Meta WhatsApp Cloud API Access Token (falls back to SMS if omitted). |

### 2. Database Migration

Apply the payments table migration in Supabase SQL Editor:
- `supabase/migrations/20261110120000_momo_payments.sql`

### 3. Paystack Webhook URL

In your [Paystack Dashboard → Settings → API Keys & Webhooks](https://dashboard.paystack.com/#/settings/developers), register the following **Live Webhook URL**:

```text
https://www.acadmicprep.com/api/paystack/webhook
```

- Every incoming webhook request is verified against the `x-paystack-signature` header (HMAC-SHA512 of the raw request body signed with `PAYSTACK_SECRET_KEY`). Requests with missing or invalid signatures are rejected with HTTP `401`.
- Handling is idempotent: `charge.success` marks the payment row in `public.payments` as `'success'`, activates/extends the student's pass (`30`, `90`, or `365` days), and records the transaction in Admin revenue.

### 4. Testing in Paystack Test Mode

1. Switch your Paystack Dashboard toggle to **Test Mode** and copy your `sk_test_...` and `pk_test_...` keys into `.env.local`.
2. Sign in to a student account on `http://localhost:3000`, click **Unlock Full Pass**, choose a pass (`Monthly GH₵ 30`, `Term GH₵ 75`, or `Annual GH₵ 299`), select a network, and enter a test Ghana MoMo number (e.g., `0551234987`).
3. Paystack Test Mode automatically simulates the charge response, and `/api/paystack/status?reference=...` (polled every 3 seconds) verifies the transaction and unlocks the student's pass immediately.
