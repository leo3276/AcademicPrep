/**
 * Pure helpers for writing a topic-progress row.
 *
 * Kept free of the database client so the insert-vs-update decision and
 * attempt counting can be unit-tested. The live unique index on
 * (student_phone, topic_id) is partial (`WHERE student_phone IS NOT NULL`),
 * so PostgREST `upsert(..., { onConflict: 'student_phone,topic_id' })` cannot
 * infer a matching constraint and every cloud save fails.
 */

export interface ExistingTopicProgress {
  best_score_percentage?: number | null;
  completed?: boolean | null;
  attempts_count?: number | null;
}

export interface TopicProgressWrite {
  action: 'insert' | 'update';
  payload: {
    student_phone: string;
    topic_id: string;
    completed: boolean;
    best_score_percentage: number;
    attempts_count: number;
    last_studied_at: string;
  };
}

const PASS_PERCENTAGE = 60;

export function buildTopicProgressWrite(params: {
  phone: string;
  topicId: string;
  scorePercentage: number;
  existing: ExistingTopicProgress | null;
  nowIso: string;
}): TopicProgressWrite {
  const passed = params.scorePercentage >= PASS_PERCENTAGE;

  if (!params.existing) {
    return {
      action: 'insert',
      payload: {
        student_phone: params.phone,
        topic_id: params.topicId,
        completed: passed,
        best_score_percentage: params.scorePercentage,
        attempts_count: 1,
        last_studied_at: params.nowIso,
      },
    };
  }

  return {
    action: 'update',
    payload: {
      student_phone: params.phone,
      topic_id: params.topicId,
      completed: Boolean(params.existing.completed) || passed,
      best_score_percentage: Math.max(params.existing.best_score_percentage || 0, params.scorePercentage),
      attempts_count: (params.existing.attempts_count || 0) + 1,
      last_studied_at: params.nowIso,
    },
  };
}
