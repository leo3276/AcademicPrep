-- Replace the partial unique index with a real UNIQUE constraint so
-- (student_phone, topic_id) can be targeted by ON CONFLICT if a future
-- writer uses upsert. Progress rows are always keyed by phone.

DROP INDEX IF EXISTS public.uq_progress_phone_topic;

DELETE FROM public.student_topic_progress a
    USING public.student_topic_progress b
    WHERE a.student_phone IS NOT NULL
      AND a.student_phone = b.student_phone
      AND a.topic_id = b.topic_id
      AND a.ctid < b.ctid;

ALTER TABLE public.student_topic_progress
    DROP CONSTRAINT IF EXISTS uq_progress_phone_topic;

CREATE UNIQUE INDEX IF NOT EXISTS uq_progress_phone_topic
    ON public.student_topic_progress(student_phone, topic_id);
