// Live AI Slide Simplification & Plain-English Explanation Service
// Uses Gemini 2.0 Flash when GEMINI_API_KEY is present, and automatically falls back to
// a zero-key OpenAI-compatible reasoning LLM (Pollinations openai-fast) so every student
// gets genuine AI comprehension, plain-English simplification, and real-world analogies out of the box.

import { DetailedTakeaway, ActiveRecallPrompt } from './universitySlides';
import {
  simplifyAndExplainSlideBullet,
  synthesizePlainEnglishSlideOverview,
  synthesizeWhyItMatters,
  synthesizeExamWatchOut
} from './slideSimplifier';

export interface AISimplifiedSlideResult {
  pageNumber: number;
  title?: string;
  coreRule: string;
  whyItMatters: string;
  detailedTakeaways: DetailedTakeaway[];
  simplifiedPoints: string[];
  examTrap: string;
  activeRecallPrompt: ActiveRecallPrompt;
}

/**
 * Calls either Gemini 2.0 Flash (if apiKey provided) or the zero-key Pollinations OpenAI endpoint
 * and returns the text response.
 */
async function callLLMText(
  systemPrompt: string,
  userPrompt: string,
  options: {
    apiKey?: string;
    jsonMode?: boolean;
    timeoutMs?: number;
  } = {}
): Promise<string | null> {
  const { apiKey, jsonMode = false, timeoutMs = 18000 } = options;

  // 1. Try Gemini 2.0 Flash first if an API key is configured
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey.trim()}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }]
              }
            ],
            generationConfig: {
              temperature: 0.25,
              maxOutputTokens: 4096,
              ...(jsonMode ? { responseMimeType: 'application/json' } : {})
            }
          })
        }
      );
      clearTimeout(timer);

      if (res.ok) {
        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text && text.trim().length > 0) {
          return text.trim();
        }
      }
    } catch (err) {
      console.warn('Gemini 2.0 Flash call notice, falling back to zero-key LLM:', err);
    }
  }

  // 2. Zero-Key OpenAI-compatible LLM (Pollinations openai-fast)
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'openai-fast',
        temperature: 0.25,
        ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ]
      })
    });
    clearTimeout(timer);

    if (res.ok) {
      const data = await res.json();
      const content = data?.choices?.[0]?.message?.content;
      if (content && typeof content === 'string' && content.trim().length > 0) {
        return content.trim();
      }
    } else {
      const errBody = await res.text().catch(() => '');
      console.warn(`Zero-key LLM HTTP ${res.status}:`, errBody.slice(0, 300));
    }
  } catch (err) {
    console.warn('Zero-key LLM call notice:', err);
  }

  return null;
}

/**
 * Safely parses JSON from an LLM response, stripping markdown code fences if present.
 */
function safeParseJSON<T = any>(rawText: string | null): T | null {
  if (!rawText) return null;
  try {
    const cleaned = rawText
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
    return JSON.parse(cleaned) as T;
  } catch {
    // Try extracting the first {...} block
    const firstBrace = rawText.indexOf('{');
    const lastBrace = rawText.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace > firstBrace) {
      try {
        return JSON.parse(rawText.slice(firstBrace, lastBrace + 1)) as T;
      } catch {
        return null;
      }
    }
    return null;
  }
}

/**
 * Deeply understands, explains, and simplifies a single university slide using live AI.
 * Specifically designed NOT to copy raw slide bullets verbatim, but to unpack them into plain English.
 */
export async function simplifySingleSlideWithAI(
  input: {
    pageNumber: number;
    slideTitle: string;
    rawSlideText: string;
    deckTitle?: string;
  },
  apiKey?: string
): Promise<AISimplifiedSlideResult | null> {
  const { pageNumber, slideTitle, rawSlideText, deckTitle = 'University Course' } = input;

  const systemPrompt = `You are a brilliant, patient university professor who specializes in taking dense, confusing lecture slides and explaining them in simple, crystal-clear everyday English.

CRITICAL RULE:
NEVER just copy or repeat what is written on the slide! The student can already read the raw slide on the left side of their screen.
Your job is to ADD UNDERSTANDING, UNPACK JARGON, EXPLAIN THE MECHANISM ("how and why it works"), and GIVE REAL-WORLD EXAMPLES so a beginner immediately gets it.

Output ONLY valid JSON matching the requested schema.`;

  const userPrompt = `Course / Deck: "${deckTitle}"
Slide Number: ${pageNumber}
Slide Title: "${slideTitle}"
Raw Slide Text:
"""
${rawSlideText || slideTitle}
"""

Understand what this slide is teaching and return a JSON object with these exact keys:
{
  "coreRule": "2 to 3 clear sentences in plain, everyday English explaining what this slide actually means and how its ideas connect (DO NOT copy the slide bullets verbatim—teach the big idea simply).",
  "whyItMatters": "1 to 2 sentences giving a relatable real-world analogy or concrete everyday example that makes this concept click.",
  "detailedTakeaways": [
    {
      "label": "Clear Concept Heading (3-6 words)",
      "explanation": "A plain-English explanation (2-3 sentences) that unpacks what this point on the slide actually means in simple words, defines any hard terms, and gives a quick practical example."
    }
  ],
  "simplifiedPoints": [
    "Short, punchy plain-English takeaway 1",
    "Short, punchy plain-English takeaway 2",
    "Short, punchy plain-English takeaway 3"
  ],
  "examTrap": "1 to 2 sentences pointing out the #1 mistake or mix-up students make on exams regarding this slide and how to avoid it.",
  "activeRecallPrompt": {
    "question": "A thoughtful exam-style comprehension question testing whether the student truly understands this slide.",
    "hint": "A short helpful hint.",
    "answer": "A clear, plain-English model answer explaining the concept and an example.",
    "stepByStepSolution": "Step 1: ... Step 2: ... Step 3: ..."
  }
}`;

  const rawResponse = await callLLMText(systemPrompt, userPrompt, {
    apiKey,
    jsonMode: true,
    timeoutMs: 12000
  });

  const parsed = safeParseJSON<any>(rawResponse);

  // If live LLM succeeded and returned valid schema, use the AI explanation!
  if (parsed && typeof parsed.coreRule === 'string' && Array.isArray(parsed.detailedTakeaways)) {
    const cleanTakeaways: DetailedTakeaway[] = parsed.detailedTakeaways
      .filter((t: any) => t && typeof t.label === 'string' && typeof t.explanation === 'string')
      .slice(0, 6)
      .map((t: any) => ({
        label: t.label.trim(),
        explanation: t.explanation.trim()
      }));

    if (cleanTakeaways.length > 0) {
      return {
        pageNumber,
        title: typeof parsed.title === 'string' && parsed.title.trim().length > 2 ? parsed.title.trim() : slideTitle,
        coreRule: parsed.coreRule.trim(),
        whyItMatters: typeof parsed.whyItMatters === 'string' ? parsed.whyItMatters.trim() : '',
        detailedTakeaways: cleanTakeaways,
        simplifiedPoints: Array.isArray(parsed.simplifiedPoints) && parsed.simplifiedPoints.length > 0
          ? parsed.simplifiedPoints.filter((p: any) => typeof p === 'string').slice(0, 4)
          : cleanTakeaways.slice(0, 4).map(t => `${t.label}: ${t.explanation.split('. ')[0]}.`),
        examTrap: typeof parsed.examTrap === 'string' ? parsed.examTrap.trim() : '',
        activeRecallPrompt: {
          question: parsed.activeRecallPrompt?.question || `In simple terms, explain ${cleanTakeaways[0].label}.`,
          answer: parsed.activeRecallPrompt?.answer || cleanTakeaways[0].explanation,
          hint: parsed.activeRecallPrompt?.hint || `Think about how ${cleanTakeaways[0].label} works in real life.`,
          stepByStepSolution: parsed.activeRecallPrompt?.stepByStepSolution || ''
        }
      };
    }
  }

  // Robust Semantic Fallback: Unpack and simplify using our academic pedagogical engine
  const rawBullets = (rawSlideText || '')
    .split(/\r?\n/)
    .map(line => line.replace(/^[•\-\*\d\.\)\s]+/, '').trim())
    .filter(line => line.length > 3 && line.toLowerCase() !== slideTitle.toLowerCase());

  const fallbackTakeaways: DetailedTakeaway[] = rawBullets.slice(0, 5).map((b, i) =>
    simplifyAndExplainSlideBullet(b, slideTitle, i, rawBullets)
  );

  if (fallbackTakeaways.length === 0) {
    fallbackTakeaways.push({
      label: `Understanding ${slideTitle}`,
      explanation: `In simple terms, this slide covers the core principles of ${slideTitle.toLowerCase()}. Focus on what the main terms mean in practice and how they apply to real-world scenarios.`
    });
  }

  const fallbackCoreRule = synthesizePlainEnglishSlideOverview(
    slideTitle,
    rawBullets,
    fallbackTakeaways,
    [],
    []
  );

  const fallbackWhyItMatters = synthesizeWhyItMatters(
    slideTitle,
    rawBullets,
    fallbackTakeaways,
    []
  );

  const fallbackExamTrap = synthesizeExamWatchOut(
    slideTitle,
    rawBullets,
    fallbackTakeaways,
    [],
    []
  );

  return {
    pageNumber,
    title: slideTitle,
    coreRule: fallbackCoreRule,
    whyItMatters: fallbackWhyItMatters,
    detailedTakeaways: fallbackTakeaways,
    simplifiedPoints: fallbackTakeaways.slice(0, 4).map(t => `${t.label}: ${t.explanation.split('. ')[0]}.`),
    examTrap: fallbackExamTrap,
    activeRecallPrompt: {
      question: `In your own words, explain the main idea behind "${fallbackTakeaways[0].label}" in ${slideTitle}.`,
      answer: `${fallbackTakeaways[0].label}: ${fallbackTakeaways[0].explanation}`,
      hint: `Think about what ${fallbackTakeaways[0].label} means in everyday practice.`,
      stepByStepSolution: `Step 1: State the concept in plain English. Step 2: Give a practical example.`
    }
  };
}

/**
 * Simplifies a batch of slides (e.g. 4-6 slides) in one fast LLM call.
 */
export async function simplifySlideBatchWithAI(
  slidesBatch: Array<{ pageNumber: number; title: string; rawText: string }>,
  deckTitle: string,
  apiKey?: string
): Promise<Record<number, AISimplifiedSlideResult>> {
  const results: Record<number, AISimplifiedSlideResult> = {};
  if (!slidesBatch || slidesBatch.length === 0) return results;

  const systemPrompt = `You are a supportive university professor who simplifies dense lecture slides into plain, easy-to-understand English.
NEVER copy or repeat raw slide bullets verbatim. Instead, unpack what each slide means in simple everyday words, explain hard terms, and give brief real-world examples.
Output ONLY valid JSON.`;

  const slidesPrompt = slidesBatch
    .map(s => `[SLIDE ${s.pageNumber}: ${s.title}]\n${s.rawText}`)
    .join('\n\n---\n\n');

  const userPrompt = `Course: "${deckTitle}"
Simplify and explain each of the following ${slidesBatch.length} slides in plain English.
Do NOT copy the slide text verbatim—explain what it means, why it matters with a real-life example, and break down each concept simply.

${slidesPrompt}

Return ONLY valid JSON in this exact format:
{
  "slides": [
    {
      "pageNumber": 1,
      "coreRule": "2-3 sentences explaining what this slide means in simple everyday English",
      "whyItMatters": "1-2 sentences with a relatable real-life example or analogy",
      "detailedTakeaways": [
        {
          "label": "Concept Heading",
          "explanation": "Plain-English explanation unpacking what it means and how it works in practice"
        }
      ],
      "examTrap": "Specific exam watch-out or common mistake to avoid",
      "activeRecallPrompt": {
        "question": "Comprehension question",
        "answer": "Plain-English model answer"
      }
    }
  ]
}`;

  const rawResponse = await callLLMText(systemPrompt, userPrompt, {
    apiKey,
    jsonMode: true,
    timeoutMs: 14000
  });

  const parsed = safeParseJSON<{ slides?: any[] }>(rawResponse);
  if (!parsed || !Array.isArray(parsed.slides)) return results;

  for (const s of parsed.slides) {
    const pageNum = Number(s.pageNumber);
    if (!pageNum || typeof s.coreRule !== 'string' || !Array.isArray(s.detailedTakeaways)) continue;
    const cleanTakeaways: DetailedTakeaway[] = s.detailedTakeaways
      .filter((t: any) => t && typeof t.label === 'string' && typeof t.explanation === 'string')
      .slice(0, 6)
      .map((t: any) => ({
        label: t.label.trim(),
        explanation: t.explanation.trim()
      }));

    if (cleanTakeaways.length === 0) continue;

    results[pageNum] = {
      pageNumber: pageNum,
      coreRule: s.coreRule.trim(),
      whyItMatters: typeof s.whyItMatters === 'string' ? s.whyItMatters.trim() : '',
      detailedTakeaways: cleanTakeaways,
      simplifiedPoints: cleanTakeaways.slice(0, 4).map(t => `${t.label}: ${t.explanation.split('. ')[0]}.`),
      examTrap: typeof s.examTrap === 'string' ? s.examTrap.trim() : '',
      activeRecallPrompt: {
        question: s.activeRecallPrompt?.question || `Explain ${cleanTakeaways[0].label} in your own words.`,
        answer: s.activeRecallPrompt?.answer || cleanTakeaways[0].explanation,
        hint: s.activeRecallPrompt?.hint || '',
        stepByStepSolution: s.activeRecallPrompt?.stepByStepSolution || ''
      }
    };
  }

  return results;
}

/**
 * Answers a student's question about a specific slide using live AI reasoning.
 */
export async function askSlideTutorWithAI(
  params: {
    slideNumber: number;
    slideTitle: string;
    slideText: string;
    coreRule: string;
    takeaways: Array<{ label: string; explanation: string }>;
    userQuestion: string;
    chatHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
  },
  apiKey?: string
): Promise<string | null> {
  const { slideNumber, slideTitle, slideText, coreRule, takeaways, userQuestion, chatHistory = [] } = params;

  const systemPrompt = `You are a friendly, brilliant university tutor helping an undergraduate student understand their lecture slide.
CRITICAL RULES:
1. NEVER just repeat or copy the raw text from the slide! The student is asking you because they want it EXPLAINED and SIMPLIFIED.
2. Break down the concept in simple, everyday English—as if you are explaining it to a friend over coffee.
3. Unpack any academic jargon first ("In simple words, X just means...").
4. Give a concrete, relatable real-world example or analogy.
5. Keep your response clear, well-structured (short paragraphs or bullet points), and directly focused on the student's question. Do not use markdown tables.`;

  const historyText = chatHistory.length > 0
    ? `\nRecent Conversation:\n${chatHistory.slice(-4).map(m => `${m.role === 'user' ? 'Student' : 'Tutor'}: ${m.content}`).join('\n')}\n`
    : '';

  const userPrompt = `SLIDE ${slideNumber}: "${slideTitle}"
Raw Slide Content: ${slideText}
Current Overview: ${coreRule}
Key Points: ${takeaways.map(t => `${t.label}: ${t.explanation}`).join(' | ')}
${historyText}
STUDENT'S REQUEST: "${userQuestion}"

Write a clear, plain-English tutoring explanation that simplifies this concept and adds fresh insight/examples beyond what is written on the slide:`;

  return await callLLMText(systemPrompt, userPrompt, {
    apiKey,
    jsonMode: false,
    timeoutMs: 22000
  });
}
