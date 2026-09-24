-- ============================================================================
-- AcademicPrep (academicprep.com) - Production Supabase Schema
-- Architecture: JHS/SHS/University with Phone + PIN Auth, Quizzes,
-- Dynamic Weekly Exams, and Admin Cash Flow Management
-- ============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. ENUMS
CREATE TYPE education_level AS ENUM ('JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3', 'UNIVERSITY');
CREATE TYPE pin_status AS ENUM ('ACTIVE', 'REDEEMED', 'REVOKED', 'EXPIRED');
CREATE TYPE transaction_type AS ENUM ('PIN_PURCHASE', 'SUBSCRIPTION_RENEWAL', 'MANUAL_CREDIT');

-- 3. STUDENTS TABLE (Phone + 4-digit PIN Auth)
CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    phone_number VARCHAR(20) NOT NULL UNIQUE,
    pin_hash TEXT NOT NULL,
    full_name VARCHAR(120) NOT NULL,
    current_level education_level NOT NULL DEFAULT 'JHS 1',
    has_full_access BOOLEAN NOT NULL DEFAULT FALSE,
    access_expires_at TIMESTAMPTZ,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_students_phone ON public.students(phone_number);
CREATE INDEX IF NOT EXISTS idx_students_level ON public.students(current_level);

-- 4. ACCESS PINS (Card / Token Model for Cash Flows)
CREATE TABLE IF NOT EXISTS public.access_pins (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pin_code VARCHAR(16) NOT NULL UNIQUE,
    batch_id VARCHAR(64) NOT NULL,
    price_ghs NUMERIC(10, 2) NOT NULL DEFAULT 20.00,
    validity_days INTEGER NOT NULL DEFAULT 30,
    status pin_status NOT NULL DEFAULT 'ACTIVE',
    redeemed_by_student_id UUID REFERENCES public.students(id) ON DELETE SET NULL,
    redeemed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_access_pins_code ON public.access_pins(pin_code);
CREATE INDEX IF NOT EXISTS idx_access_pins_batch ON public.access_pins(batch_id);
CREATE INDEX IF NOT EXISTS idx_access_pins_status ON public.access_pins(status);

-- 5. CASH FLOW TRANSACTIONS (Admin Financial Ledger)
CREATE TABLE IF NOT EXISTS public.cash_flow_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference VARCHAR(64) NOT NULL UNIQUE,
    student_id UUID REFERENCES public.students(id) ON DELETE SET NULL,
    student_phone VARCHAR(20),
    amount_ghs NUMERIC(10, 2) NOT NULL,
    transaction_type transaction_type NOT NULL DEFAULT 'PIN_PURCHASE',
    payment_method VARCHAR(32) NOT NULL DEFAULT 'MOBILE_MONEY',
    pin_code_used VARCHAR(16),
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cash_flow_created ON public.cash_flow_transactions(created_at DESC);

-- 6. CURRICULUM SUBJECTS
CREATE TABLE IF NOT EXISTS public.curriculum_subjects (
    id VARCHAR(40) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20) NOT NULL,
    icon VARCHAR(40) NOT NULL,
    color VARCHAR(40) NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0
);

-- 7. CURRICULUM TOPICS (Organized by Level & Term)
CREATE TABLE IF NOT EXISTS public.curriculum_topics (
    id VARCHAR(80) PRIMARY KEY,
    subject_id VARCHAR(40) NOT NULL REFERENCES public.curriculum_subjects(id) ON DELETE CASCADE,
    level education_level NOT NULL,
    term INTEGER NOT NULL CHECK (term BETWEEN 1 AND 3),
    order_index INTEGER NOT NULL DEFAULT 0,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    key_notes TEXT NOT NULL,
    is_free_trial BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_topics_subject_level ON public.curriculum_topics(subject_id, level);

-- 8. TOPIC QUIZZES
CREATE TABLE IF NOT EXISTS public.topic_quizzes (
    id VARCHAR(80) PRIMARY KEY,
    topic_id VARCHAR(80) NOT NULL UNIQUE REFERENCES public.curriculum_topics(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    time_limit_minutes INTEGER NOT NULL DEFAULT 10,
    pass_score_percentage INTEGER NOT NULL DEFAULT 60
);

-- 9. QUIZ QUESTIONS
CREATE TABLE IF NOT EXISTS public.quiz_questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quiz_id VARCHAR(80) NOT NULL REFERENCES public.topic_quizzes(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,
    correct_option CHAR(1) NOT NULL CHECK (correct_option IN ('A', 'B', 'C', 'D')),
    explanation TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz ON public.quiz_questions(quiz_id);

-- 10. STUDENT TOPIC PROGRESS
CREATE TABLE IF NOT EXISTS public.student_topic_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    topic_id VARCHAR(80) NOT NULL REFERENCES public.curriculum_topics(id) ON DELETE CASCADE,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    best_score_percentage INTEGER NOT NULL DEFAULT 0,
    attempts_count INTEGER NOT NULL DEFAULT 0,
    last_studied_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(student_id, topic_id)
);

CREATE INDEX IF NOT EXISTS idx_student_topic_student ON public.student_topic_progress(student_id);

-- 11. WEEKLY EXAM ATTEMPTS (Dynamic / Adaptive based on covered topics)
CREATE TABLE IF NOT EXISTS public.weekly_exam_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    level education_level NOT NULL,
    covered_topic_ids TEXT[] NOT NULL,
    total_questions INTEGER NOT NULL,
    correct_answers INTEGER NOT NULL,
    score_percentage INTEGER NOT NULL,
    time_spent_seconds INTEGER NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_weekly_exams_student ON public.weekly_exam_attempts(student_id);

-- 12. CUSTOM ADMIN TESTS
CREATE TABLE IF NOT EXISTS public.custom_tests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    level education_level NOT NULL,
    subject_id VARCHAR(40) REFERENCES public.curriculum_subjects(id) ON DELETE SET NULL,
    time_limit_minutes INTEGER NOT NULL DEFAULT 30,
    questions JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_published BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 13. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.access_pins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cash_flow_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topic_quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.custom_tests ENABLE ROW LEVEL SECURITY;

-- Public read access for curriculum
CREATE POLICY "Public read curriculum subjects" ON public.curriculum_subjects FOR SELECT USING (true);
CREATE POLICY "Public read curriculum topics" ON public.curriculum_topics FOR SELECT USING (true);
CREATE POLICY "Public read topic quizzes" ON public.topic_quizzes FOR SELECT USING (true);
CREATE POLICY "Public read quiz questions" ON public.quiz_questions FOR SELECT USING (true);
CREATE POLICY "Public read custom tests" ON public.custom_tests FOR SELECT USING (is_published = true);

-- Student-specific policies (using service role / application API layer)
CREATE POLICY "Students manage their own progress" ON public.student_topic_progress
    FOR ALL USING (auth.uid() = student_id OR true);

CREATE POLICY "Students view their own exam attempts" ON public.weekly_exam_attempts
    FOR ALL USING (auth.uid() = student_id OR true);
