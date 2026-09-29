const assert = require('assert');

/**
 * Mirrors lib/topicProgressWrite.ts so the insert/update decision can be
 * checked without a TypeScript runner. Keep in sync with that module.
 */
function buildTopicProgressWrite(params) {
  const passed = params.scorePercentage >= 60;

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

const now = '2026-09-29T12:00:00.000Z';

const firstFail = buildTopicProgressWrite({
  phone: '0241234567',
  topicId: 'jhs1-math-t1-sets',
  scorePercentage: 40,
  existing: null,
  nowIso: now,
});
assert.strictEqual(firstFail.action, 'insert');
assert.strictEqual(firstFail.payload.attempts_count, 1);
assert.strictEqual(firstFail.payload.completed, false);
assert.strictEqual(firstFail.payload.best_score_percentage, 40);

const retryPass = buildTopicProgressWrite({
  phone: '0241234567',
  topicId: 'jhs1-math-t1-sets',
  scorePercentage: 80,
  existing: {
    best_score_percentage: 40,
    completed: false,
    attempts_count: 1,
  },
  nowIso: now,
});
assert.strictEqual(retryPass.action, 'update');
assert.strictEqual(retryPass.payload.attempts_count, 2);
assert.strictEqual(retryPass.payload.completed, true);
assert.strictEqual(retryPass.payload.best_score_percentage, 80);

const zeroAttemptsRow = buildTopicProgressWrite({
  phone: '0241234567',
  topicId: 'jhs1-math-t1-sets',
  scorePercentage: 50,
  existing: {
    best_score_percentage: 40,
    completed: false,
    attempts_count: 0,
  },
  nowIso: now,
});
assert.strictEqual(
  zeroAttemptsRow.payload.attempts_count,
  1,
  'attempts_count 0 must increment to 1, not jump to 2 via (0 || 1) + 1'
);

console.log('topic progress write tests passed');
