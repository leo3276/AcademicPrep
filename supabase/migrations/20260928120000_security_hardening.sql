-- ============================================================================
-- AcademicPrep - Security Hardening Migration
-- Date: 2026-09-28
--
-- PURPOSE
--   1. Reconcile schema drift (the init migration file is empty, so the live
--      database may not match supabase/schema.sql).
--   2. Hash legacy plaintext passwords stored in students.pin_hash.
--   3. Move all PIN verification / redemption into SECURITY DEFINER functions
--      so credentials and access grants can never be read or written by the
--      public anon key.
--   4. Lock Row Level Security to deny-all for anon/authenticated. Every query
--      now runs through the Next.js API layer using the service_role key.
--   5. Add session, login-throttling and payment-idempotency tables.
--
-- This migration is idempotent: safe to run more than once.
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Supabase installs pgcrypto into the `extensions` schema on many projects,
-- while older ones have it in `public`. Put both on the path so crypt() and
-- gen_salt() resolve in the top-level UPDATEs below and at CREATE FUNCTION
-- validation time. Missing schemas in search_path are ignored, so this is safe
-- on vanilla Postgres too. The SECURITY DEFINER functions carry their own
-- `SET search_path = public, extensions` for runtime.
SET search_path = public, extensions;

-- ----------------------------------------------------------------------------
-- 1. ENUMS (guarded - CREATE TYPE has no IF NOT EXISTS)
-- ----------------------------------------------------------------------------
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'education_level') THEN
        CREATE TYPE education_level AS ENUM
            ('JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3', 'UNIVERSITY');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'pin_status') THEN
        CREATE TYPE pin_status AS ENUM ('ACTIVE', 'REDEEMED', 'REVOKED', 'EXPIRED');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'transaction_type') THEN
        CREATE TYPE transaction_type AS ENUM
            ('PIN_PURCHASE', 'SUBSCRIPTION_RENEWAL', 'MANUAL_CREDIT');
    END IF;
END $$;

-- ----------------------------------------------------------------------------
-- 2. TABLES - created if missing, then reconciled column-by-column so the
--    result is identical whether or not schema.sql was ever applied.
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    phone_number VARCHAR(20) NOT NULL UNIQUE,
    pin_hash TEXT NOT NULL DEFAULT '',
    full_name VARCHAR(120) NOT NULL,
    current_level education_level NOT NULL DEFAULT 'JHS 1',
    has_full_access BOOLEAN NOT NULL DEFAULT FALSE,
    access_type VARCHAR(20) NOT NULL DEFAULT 'Free Trial',
    access_expires_at TIMESTAMPTZ,
    completed_topic_ids TEXT[] NOT NULL DEFAULT '{}',
    topics_completed_count INTEGER NOT NULL DEFAULT 0,
    avg_score_percentage INTEGER NOT NULL DEFAULT 0,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.students ADD COLUMN IF NOT EXISTS pin_hash TEXT;
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS full_name VARCHAR(120) NOT NULL DEFAULT 'Student';
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS current_level education_level NOT NULL DEFAULT 'JHS 1';
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS has_full_access BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS access_type VARCHAR(20) NOT NULL DEFAULT 'Free Trial';
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS access_expires_at TIMESTAMPTZ;
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS completed_topic_ids TEXT[] NOT NULL DEFAULT '{}';
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS topics_completed_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS avg_score_percentage INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS last_active_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE public.students ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

CREATE INDEX IF NOT EXISTS idx_students_phone ON public.students(phone_number);
CREATE INDEX IF NOT EXISTS idx_students_level ON public.students(current_level);

CREATE TABLE IF NOT EXISTS public.access_pins (
    id TEXT PRIMARY KEY DEFAULT ('pin-' || replace(gen_random_uuid()::text, '-', '')),
    pin_code VARCHAR(32) NOT NULL UNIQUE,
    batch_id VARCHAR(64) NOT NULL,
    price_ghs NUMERIC(10, 2) NOT NULL DEFAULT 25.00,
    validity_days INTEGER NOT NULL DEFAULT 30,
    status pin_status NOT NULL DEFAULT 'ACTIVE',
    redeemed_by_student_phone VARCHAR(20),
    redeemed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.access_pins ADD COLUMN IF NOT EXISTS batch_id VARCHAR(64) NOT NULL DEFAULT 'legacy';
ALTER TABLE public.access_pins ADD COLUMN IF NOT EXISTS price_ghs NUMERIC(10, 2) NOT NULL DEFAULT 25.00;
ALTER TABLE public.access_pins ADD COLUMN IF NOT EXISTS validity_days INTEGER NOT NULL DEFAULT 30;
ALTER TABLE public.access_pins ADD COLUMN IF NOT EXISTS status pin_status NOT NULL DEFAULT 'ACTIVE';
ALTER TABLE public.access_pins ADD COLUMN IF NOT EXISTS redeemed_by_student_phone VARCHAR(20);
ALTER TABLE public.access_pins ADD COLUMN IF NOT EXISTS redeemed_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_access_pins_code ON public.access_pins(pin_code);
CREATE INDEX IF NOT EXISTS idx_access_pins_batch ON public.access_pins(batch_id);
CREATE INDEX IF NOT EXISTS idx_access_pins_status ON public.access_pins(status);

CREATE TABLE IF NOT EXISTS public.student_topic_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
    student_phone VARCHAR(20),
    topic_id VARCHAR(80) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    best_score_percentage INTEGER NOT NULL DEFAULT 0,
    attempts_count INTEGER NOT NULL DEFAULT 0,
    last_studied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.student_topic_progress ADD COLUMN IF NOT EXISTS student_phone VARCHAR(20);
ALTER TABLE public.student_topic_progress ADD COLUMN IF NOT EXISTS topic_id VARCHAR(80);
ALTER TABLE public.student_topic_progress ADD COLUMN IF NOT EXISTS completed BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE public.student_topic_progress ADD COLUMN IF NOT EXISTS best_score_percentage INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.student_topic_progress ADD COLUMN IF NOT EXISTS attempts_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.student_topic_progress ADD COLUMN IF NOT EXISTS last_studied_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- student_id belongs to an older schema revision; the API keys progress by
-- phone number only and never writes it. Where the column still exists it must
-- stop being mandatory or inserts without it fail, but on databases created
-- without it there is nothing to relax — hence the existence guard.
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
         WHERE table_schema = 'public'
           AND table_name = 'student_topic_progress'
           AND column_name = 'student_id'
    ) THEN
        ALTER TABLE public.student_topic_progress ALTER COLUMN student_id DROP NOT NULL;
        CREATE INDEX IF NOT EXISTS idx_student_topic_student ON public.student_topic_progress(student_id);
    END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_student_topic_phone ON public.student_topic_progress(student_phone);

-- Collapse duplicate (phone, topic) rows before enforcing uniqueness, otherwise
-- index creation fails on drifted data.
DELETE FROM public.student_topic_progress a
    USING public.student_topic_progress b
    WHERE a.student_phone IS NOT NULL
      AND a.student_phone = b.student_phone
      AND a.topic_id = b.topic_id
      AND a.ctid < b.ctid;

CREATE UNIQUE INDEX IF NOT EXISTS uq_progress_phone_topic
    ON public.student_topic_progress(student_phone, topic_id)
    WHERE student_phone IS NOT NULL;

CREATE TABLE IF NOT EXISTS public.weekly_exam_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
    student_phone VARCHAR(20),
    level education_level NOT NULL DEFAULT 'JHS 3',
    paper1_score INTEGER,
    paper1_total INTEGER,
    paper2_score INTEGER,
    paper2_total INTEGER,
    composite_total_percentage INTEGER,
    stanine_grade INTEGER,
    grade_remark TEXT,
    covered_topic_ids TEXT[],
    total_questions INTEGER,
    correct_answers INTEGER,
    score_percentage INTEGER,
    time_spent_seconds INTEGER,
    completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS student_phone VARCHAR(20);
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS level education_level NOT NULL DEFAULT 'JHS 3';
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS paper1_score INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS paper1_total INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS paper2_score INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS paper2_total INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS composite_total_percentage INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS stanine_grade INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS grade_remark TEXT;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS covered_topic_ids TEXT[];
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS total_questions INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS correct_answers INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS score_percentage INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS time_spent_seconds INTEGER;
ALTER TABLE public.weekly_exam_attempts ADD COLUMN IF NOT EXISTS completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- Same drift guard as student_topic_progress: older revisions made these
-- columns mandatory, but the API insert omits all of them except the scores.
DO $$
DECLARE
    v_col TEXT;
BEGIN
    FOREACH v_col IN ARRAY ARRAY[
        'student_id', 'covered_topic_ids', 'total_questions',
        'correct_answers', 'score_percentage', 'time_spent_seconds'
    ]
    LOOP
        IF EXISTS (
            SELECT 1 FROM information_schema.columns
             WHERE table_schema = 'public'
               AND table_name = 'weekly_exam_attempts'
               AND column_name = v_col
        ) THEN
            EXECUTE format('ALTER TABLE public.weekly_exam_attempts ALTER COLUMN %I DROP NOT NULL', v_col);
        END IF;
    END LOOP;

    IF EXISTS (
        SELECT 1 FROM information_schema.columns
         WHERE table_schema = 'public'
           AND table_name = 'weekly_exam_attempts'
           AND column_name = 'student_id'
    ) THEN
        CREATE INDEX IF NOT EXISTS idx_weekly_exams_student ON public.weekly_exam_attempts(student_id);
    END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_weekly_exams_phone ON public.weekly_exam_attempts(student_phone);

CREATE TABLE IF NOT EXISTS public.student_mistakes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_phone VARCHAR(20) NOT NULL,
    topic_id VARCHAR(80) NOT NULL,
    subject_name VARCHAR(100),
    sub_concept VARCHAR(200),
    question_text TEXT,
    student_wrong_answer TEXT,
    correct_answer TEXT,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.student_mistakes ADD COLUMN IF NOT EXISTS student_phone VARCHAR(20);
ALTER TABLE public.student_mistakes ADD COLUMN IF NOT EXISTS topic_id VARCHAR(80);
ALTER TABLE public.student_mistakes ADD COLUMN IF NOT EXISTS subject_name VARCHAR(100);
ALTER TABLE public.student_mistakes ADD COLUMN IF NOT EXISTS sub_concept VARCHAR(200);
ALTER TABLE public.student_mistakes ADD COLUMN IF NOT EXISTS question_text TEXT;
ALTER TABLE public.student_mistakes ADD COLUMN IF NOT EXISTS student_wrong_answer TEXT;
ALTER TABLE public.student_mistakes ADD COLUMN IF NOT EXISTS correct_answer TEXT;
ALTER TABLE public.student_mistakes ADD COLUMN IF NOT EXISTS timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW();

CREATE INDEX IF NOT EXISTS idx_mistakes_phone ON public.student_mistakes(student_phone);

CREATE TABLE IF NOT EXISTS public.cash_flow_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference VARCHAR(64) NOT NULL UNIQUE,
    student_id UUID REFERENCES public.students(id) ON DELETE SET NULL,
    student_phone VARCHAR(20),
    amount_ghs NUMERIC(10, 2) NOT NULL,
    transaction_type transaction_type NOT NULL DEFAULT 'PIN_PURCHASE',
    payment_method VARCHAR(32) NOT NULL DEFAULT 'MOBILE_MONEY',
    pin_code_used VARCHAR(32),
    description TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.cash_flow_transactions ADD COLUMN IF NOT EXISTS student_phone VARCHAR(20);
ALTER TABLE public.cash_flow_transactions ADD COLUMN IF NOT EXISTS amount_ghs NUMERIC(10, 2) NOT NULL DEFAULT 0;
ALTER TABLE public.cash_flow_transactions ADD COLUMN IF NOT EXISTS transaction_type transaction_type NOT NULL DEFAULT 'PIN_PURCHASE';
ALTER TABLE public.cash_flow_transactions ADD COLUMN IF NOT EXISTS payment_method VARCHAR(32) NOT NULL DEFAULT 'MOBILE_MONEY';
ALTER TABLE public.cash_flow_transactions ADD COLUMN IF NOT EXISTS pin_code_used VARCHAR(32);
ALTER TABLE public.cash_flow_transactions ADD COLUMN IF NOT EXISTS description TEXT NOT NULL DEFAULT '';
ALTER TABLE public.cash_flow_transactions ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

CREATE INDEX IF NOT EXISTS idx_cash_flow_created ON public.cash_flow_transactions(created_at DESC);

-- ----------------------------------------------------------------------------
-- 3. NEW SECURITY TABLES
-- ----------------------------------------------------------------------------

-- Opaque session tokens. Only the SHA-256 hash of the token is stored, so a
-- database leak does not hand out usable sessions.
CREATE TABLE IF NOT EXISTS public.student_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    token_hash TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL,
    revoked_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_sessions_student ON public.student_sessions(student_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON public.student_sessions(expires_at);

-- Login throttling. A 4-digit PIN has 10,000 combinations, so unlimited
-- attempts make brute force trivial.
CREATE TABLE IF NOT EXISTS public.login_attempts (
    phone_number VARCHAR(20) PRIMARY KEY,
    attempt_count INTEGER NOT NULL DEFAULT 0,
    first_attempt_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    locked_until TIMESTAMPTZ
);

-- Payment idempotency. Paystack retries webhooks and the verify endpoint can be
-- called repeatedly with the same reference; without this a single GH₵ 25
-- payment could be replayed to extend access indefinitely.
CREATE TABLE IF NOT EXISTS public.processed_payments (
    reference VARCHAR(64) PRIMARY KEY,
    student_phone VARCHAR(20) NOT NULL,
    amount_pesewas INTEGER NOT NULL,
    channel VARCHAR(32),
    source VARCHAR(16) NOT NULL DEFAULT 'verify',
    processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Administrator credentials. Two slots preserve the existing owner/assistant
-- model. PINs are stored hashed so they can be rotated at runtime without
-- shipping a secret inside the browser bundle or redeploying to change one.
CREATE TABLE IF NOT EXISTS public.admin_credentials (
    slot VARCHAR(16) PRIMARY KEY CHECK (slot IN ('primary', 'secondary')),
    pin_hash TEXT NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 4. HASH LEGACY PLAINTEXT PASSWORDS
--    pin_hash currently stores the raw password. Anything not already a bcrypt
--    hash ($2a$/$2b$/$2y$) is plaintext and gets hashed in place.
-- ----------------------------------------------------------------------------
UPDATE public.students
   SET pin_hash = crypt(pin_hash, gen_salt('bf', 10))
 WHERE pin_hash IS NOT NULL
   AND pin_hash <> ''
   AND pin_hash NOT LIKE '$2a$%'
   AND pin_hash NOT LIKE '$2b$%'
   AND pin_hash NOT LIKE '$2y$%';

-- Accounts created with no password: force a reset instead of leaving an empty
-- string that any PIN would satisfy.
UPDATE public.students
   SET pin_hash = ''
 WHERE pin_hash IS NULL;

-- ----------------------------------------------------------------------------
-- 5. SECURITY DEFINER FUNCTIONS
--    These run as the table owner and are the ONLY supported way to verify a
--    password or redeem a voucher. The hash never leaves the database and the
--    redemption is atomic, so two students cannot spend the same PIN.
-- ----------------------------------------------------------------------------

-- Hash a new password during registration.
CREATE OR REPLACE FUNCTION public.hash_student_pin(p_pin TEXT)
RETURNS TEXT
LANGUAGE sql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
    SELECT crypt(p_pin, gen_salt('bf', 10));
$$;

-- Verify a password. Returns true only on an exact match; an empty stored hash
-- never validates, which closes the "account with no password accepts anything"
-- hole.
CREATE OR REPLACE FUNCTION public.verify_student_pin(p_phone TEXT, p_pin TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_hash TEXT;
BEGIN
    IF p_phone IS NULL OR p_pin IS NULL OR p_pin = '' THEN
        RETURN FALSE;
    END IF;

    SELECT pin_hash INTO v_hash
      FROM public.students
     WHERE phone_number = p_phone;

    IF NOT FOUND OR v_hash IS NULL OR v_hash = '' THEN
        RETURN FALSE;
    END IF;

    RETURN crypt(p_pin, v_hash) = v_hash;
END;
$$;

-- Set a new password (registration and password reset).
CREATE OR REPLACE FUNCTION public.set_student_pin(p_phone TEXT, p_pin TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_rows INTEGER;
BEGIN
    IF p_phone IS NULL OR p_pin IS NULL OR length(p_pin) < 4 THEN
        RETURN FALSE;
    END IF;

    UPDATE public.students
       SET pin_hash = crypt(p_pin, gen_salt('bf', 10)),
           updated_at = NOW()
     WHERE phone_number = p_phone;

    GET DIAGNOSTICS v_rows = ROW_COUNT;
    RETURN v_rows > 0;
END;
$$;

-- Atomic single-use voucher redemption plus access grant.
-- The UPDATE ... WHERE status = 'ACTIVE' is the concurrency guard: if two
-- requests race, only one sees the row still ACTIVE and only that one returns
-- a row. Access extension stacks on top of any unexpired time rather than
-- resetting it, so renewing early never destroys paid days.
CREATE OR REPLACE FUNCTION public.redeem_access_pin(p_pin_code TEXT, p_phone TEXT)
RETURNS TABLE (success BOOLEAN, message TEXT, validity_days INTEGER)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_code TEXT := upper(btrim(coalesce(p_pin_code, '')));
    v_phone TEXT := btrim(coalesce(p_phone, ''));
    v_pin RECORD;
    v_days INTEGER;
    v_expiry TIMESTAMPTZ;
    v_existing TIMESTAMPTZ;
    v_student_id UUID;
BEGIN
    IF v_code = '' THEN
        RETURN QUERY SELECT FALSE, 'Please enter a valid Access PIN.', 0;
        RETURN;
    END IF;

    -- Claim the PIN atomically. Only the winning request gets a row back.
    UPDATE public.access_pins
       SET status = 'REDEEMED',
           redeemed_by_student_phone = NULLIF(v_phone, ''),
           redeemed_at = NOW()
     WHERE pin_code = v_code
       AND status = 'ACTIVE'
    RETURNING validity_days INTO v_pin;

    IF NOT FOUND THEN
        IF EXISTS (SELECT 1 FROM public.access_pins WHERE pin_code = v_code) THEN
            RETURN QUERY SELECT FALSE,
                'This PIN code has already been redeemed and cannot be reused.', 0;
        ELSE
            RETURN QUERY SELECT FALSE,
                'Invalid PIN code. Please verify the code and try again.', 0;
        END IF;
        RETURN;
    END IF;

    v_days := coalesce(v_pin.validity_days, 30);

    IF v_phone <> '' THEN
        SELECT access_expires_at, id INTO v_existing, v_student_id
          FROM public.students
         WHERE phone_number = v_phone;

        IF FOUND THEN
            -- Stack renewal time on top of whatever is still valid.
            IF v_existing IS NOT NULL AND v_existing > NOW() THEN
                v_expiry := v_existing + (v_days || ' days')::INTERVAL;
            ELSE
                v_expiry := NOW() + (v_days || ' days')::INTERVAL;
            END IF;

            UPDATE public.students
               SET has_full_access = TRUE,
                   access_type = 'Full Pass',
                   access_expires_at = v_expiry,
                   last_active_at = NOW(),
                   updated_at = NOW()
             WHERE phone_number = v_phone;

            INSERT INTO public.cash_flow_transactions
                (reference, student_id, student_phone, amount_ghs,
                 transaction_type, payment_method, pin_code_used, description)
            VALUES
                ('PIN-' || v_code || '-' || floor(extract(epoch FROM NOW()))::BIGINT::TEXT,
                 v_student_id, v_phone, 25.00,
                 'PIN_PURCHASE', 'SCRATCH_CARD', v_code,
                 'Access PIN redemption (' || v_days || ' days)')
            ON CONFLICT (reference) DO NOTHING;
        END IF;
    END IF;

    RETURN QUERY SELECT TRUE,
        'Access PIN successfully verified! Full access unlocked for ' || v_days || ' days.',
        v_days;
END;
$$;

-- Grant a paid subscription. Idempotent on the Paystack reference, so webhook
-- retries and repeated verify calls cannot extend access more than once.
CREATE OR REPLACE FUNCTION public.grant_paid_access(
    p_reference TEXT,
    p_phone TEXT,
    p_amount_pesewas INTEGER,
    p_channel TEXT,
    p_source TEXT,
    p_validity_days INTEGER
)
RETURNS TABLE (granted BOOLEAN, already_processed BOOLEAN, expires_at TIMESTAMPTZ)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_phone TEXT := btrim(coalesce(p_phone, ''));
    v_days INTEGER := coalesce(p_validity_days, 30);
    v_expiry TIMESTAMPTZ;
    v_existing TIMESTAMPTZ;
    v_student_id UUID;
BEGIN
    IF p_reference IS NULL OR p_reference = '' OR v_phone = '' THEN
        RETURN QUERY SELECT FALSE, FALSE, NULL::TIMESTAMPTZ;
        RETURN;
    END IF;

    -- First writer wins; every replay is reported but changes nothing.
    BEGIN
        INSERT INTO public.processed_payments
            (reference, student_phone, amount_pesewas, channel, source)
        VALUES
            (p_reference, v_phone, coalesce(p_amount_pesewas, 0), p_channel, coalesce(p_source, 'verify'));
    EXCEPTION WHEN unique_violation THEN
        SELECT s.access_expires_at INTO v_expiry
          FROM public.students s
         WHERE s.phone_number = v_phone;
        RETURN QUERY SELECT FALSE, TRUE, v_expiry;
        RETURN;
    END;

    SELECT access_expires_at, id INTO v_existing, v_student_id
      FROM public.students
     WHERE phone_number = v_phone;

    IF NOT FOUND THEN
        -- Payment arrived for an unregistered phone: keep the money recorded and
        -- let the student redeem it after creating an account.
        RETURN QUERY SELECT FALSE, FALSE, NULL::TIMESTAMPTZ;
        RETURN;
    END IF;

    IF v_existing IS NOT NULL AND v_existing > NOW() THEN
        v_expiry := v_existing + (v_days || ' days')::INTERVAL;
    ELSE
        v_expiry := NOW() + (v_days || ' days')::INTERVAL;
    END IF;

    UPDATE public.students
       SET has_full_access = TRUE,
           access_type = 'Full Pass',
           access_expires_at = v_expiry,
           last_active_at = NOW(),
           updated_at = NOW()
     WHERE phone_number = v_phone;

    INSERT INTO public.cash_flow_transactions
        (reference, student_id, student_phone, amount_ghs,
         transaction_type, payment_method, description)
    VALUES
        (p_reference, v_student_id, v_phone, coalesce(p_amount_pesewas, 0) / 100.0,
         'SUBSCRIPTION_RENEWAL', coalesce(upper(p_channel), 'MOBILE_MONEY'),
         'Paystack monthly VIP pass (' || v_days || ' days)')
    ON CONFLICT (reference) DO NOTHING;

    RETURN QUERY SELECT TRUE, FALSE, v_expiry;
END;
$$;

-- Expire lapsed subscriptions. Run from a scheduler (pg_cron or the API);
-- without it, has_full_access stays TRUE forever after access_expires_at passes.
CREATE OR REPLACE FUNCTION public.expire_lapsed_access()
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_rows INTEGER;
BEGIN
    UPDATE public.students
       SET has_full_access = FALSE,
           access_type = 'Expired',
           updated_at = NOW()
     WHERE has_full_access = TRUE
       AND access_expires_at IS NOT NULL
       AND access_expires_at <= NOW();

    GET DIAGNOSTICS v_rows = ROW_COUNT;

    DELETE FROM public.student_sessions WHERE expires_at <= NOW();
    DELETE FROM public.login_attempts
     WHERE (locked_until IS NOT NULL AND locked_until <= NOW())
        OR (first_attempt_at <= NOW() - INTERVAL '1 hour');

    RETURN v_rows;
END;
$$;

-- Verify an administrator PIN. Returns NULL when the slot has never been set,
-- which lets the API fall back to the environment-provided bootstrap PIN
-- instead of locking the owner out of a fresh database.
CREATE OR REPLACE FUNCTION public.verify_admin_pin(p_slot TEXT, p_pin TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_hash TEXT;
BEGIN
    IF p_pin IS NULL OR p_pin = '' THEN
        RETURN FALSE;
    END IF;

    SELECT pin_hash INTO v_hash
      FROM public.admin_credentials
     WHERE slot = p_slot;

    IF NOT FOUND OR v_hash IS NULL OR v_hash = '' THEN
        RETURN NULL;
    END IF;

    RETURN crypt(p_pin, v_hash) = v_hash;
END;
$$;

-- Rotate an administrator PIN.
CREATE OR REPLACE FUNCTION public.set_admin_pin(p_slot TEXT, p_pin TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
    IF p_slot NOT IN ('primary', 'secondary') OR p_pin IS NULL OR length(p_pin) < 8 THEN
        RETURN FALSE;
    END IF;

    INSERT INTO public.admin_credentials (slot, pin_hash, updated_at)
    VALUES (p_slot, crypt(p_pin, gen_salt('bf', 10)), NOW())
    ON CONFLICT (slot)
    DO UPDATE SET pin_hash = EXCLUDED.pin_hash, updated_at = NOW();

    RETURN TRUE;
END;
$$;

-- Reports which slots have a runtime PIN without revealing anything about it.
CREATE OR REPLACE FUNCTION public.admin_pin_is_set(p_slot TEXT)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.admin_credentials
         WHERE slot = p_slot AND pin_hash <> ''
    );
$$;

REVOKE ALL ON FUNCTION public.hash_student_pin(TEXT) FROM PUBLIC, anon, authenticated;REVOKE ALL ON FUNCTION public.verify_student_pin(TEXT, TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_student_pin(TEXT, TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.redeem_access_pin(TEXT, TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.grant_paid_access(TEXT, TEXT, INTEGER, TEXT, TEXT, INTEGER)
    FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.expire_lapsed_access() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.verify_admin_pin(TEXT, TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_admin_pin(TEXT, TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.admin_pin_is_set(TEXT) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.hash_student_pin(TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.verify_student_pin(TEXT, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.set_student_pin(TEXT, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.redeem_access_pin(TEXT, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.grant_paid_access(TEXT, TEXT, INTEGER, TEXT, TEXT, INTEGER)
    TO service_role;
GRANT EXECUTE ON FUNCTION public.expire_lapsed_access() TO service_role;
GRANT EXECUTE ON FUNCTION public.verify_admin_pin(TEXT, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.set_admin_pin(TEXT, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.admin_pin_is_set(TEXT) TO service_role;

-- ----------------------------------------------------------------------------
-- 6. ROW LEVEL SECURITY - DENY ALL FOR anon / authenticated
--    The old policies used `USING (auth.uid() = student_id OR true)`, which is
--    unconditionally true and therefore granted every anonymous caller full
--    read/write access to all student data. All access now goes through the
--    service_role API layer, which bypasses RLS by design.
-- ----------------------------------------------------------------------------
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.access_pins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cash_flow_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_mistakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.login_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.processed_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_credentials ENABLE ROW LEVEL SECURITY;

-- The curriculum tables are only created by schema.sql, which may never have
-- been applied (the init migration file is empty). The app ships curriculum
-- data bundled offline, so these are hardened only when present.
DO $$
DECLARE
    v_table TEXT;
BEGIN
    FOREACH v_table IN ARRAY ARRAY[
        'curriculum_subjects', 'curriculum_topics',
        'topic_quizzes', 'quiz_questions', 'custom_tests'
    ]
    LOOP
        IF to_regclass('public.' || v_table) IS NOT NULL THEN
            EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', v_table);
        END IF;
    END LOOP;
END $$;

-- Drop the permissive legacy policies (guarded so missing tables are skipped).
DO $$
DECLARE
    v_policy RECORD;
BEGIN
    FOR v_policy IN
        SELECT policyname, tablename
          FROM pg_policies
         WHERE schemaname = 'public'
           AND tablename IN (
               'students', 'access_pins', 'cash_flow_transactions',
               'student_topic_progress', 'weekly_exam_attempts', 'student_mistakes',
               'student_sessions', 'login_attempts', 'processed_payments',
               'curriculum_subjects', 'curriculum_topics', 'topic_quizzes',
               'quiz_questions', 'custom_tests'
           )
    LOOP
        EXECUTE format('DROP POLICY %I ON public.%I', v_policy.policyname, v_policy.tablename);
    END LOOP;
END $$;

-- ----------------------------------------------------------------------------
-- 7. PRIVILEGES - strip direct table access from the public roles.
--    Without this, REVOKE alone can be undone by Supabase's default grants.
-- ----------------------------------------------------------------------------
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC, anon, authenticated;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM PUBLIC, anon, authenticated;

GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
    REVOKE ALL ON TABLES FROM PUBLIC, anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    REVOKE ALL ON SEQUENCES FROM PUBLIC, anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT ALL ON TABLES TO service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT ALL ON SEQUENCES TO service_role;

-- ----------------------------------------------------------------------------
-- 8. CLEANUP - remove seeded demo vouchers if they were ever written to the
--    live database. These codes are public in the repository, so any student
--    who reads the source can redeem a free month.
-- ----------------------------------------------------------------------------
DELETE FROM public.access_pins
 WHERE pin_code IN ('PREP-8842-9901', 'PREP-4412-3321', 'PREP-9904-7712');
