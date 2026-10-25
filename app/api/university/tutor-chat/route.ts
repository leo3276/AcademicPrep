import { NextRequest, NextResponse } from 'next/server';
import {
  matchSlideConceptsFromText,
  matchSpecializedTopicGuide
} from '@/lib/conceptKnowledgeBase';
import { askSlideTutorWithAI } from '@/lib/aiExplainerService';
import {
  ACADEMIC_JARGON_LEXICON,
  synthesizeWhyItMatters
} from '@/lib/slideSimplifier';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface TutorChatRequest {
  slideNumber: number;
  slideTitle: string;
  slideText: string;
  coreRule: string;
  takeaways?: Array<{ label: string; explanation: string }>;
  formulas?: string[];
  definitions?: Array<{ term: string; definition: string }>;
  userQuestion: string;
  chatHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export async function POST(req: NextRequest) {
  try {
    const body: TutorChatRequest = await req.json();
    const {
      slideNumber,
      slideTitle,
      slideText,
      coreRule,
      takeaways = [],
      formulas = [],
      definitions = [],
      userQuestion,
      chatHistory = []
    } = body;

    if (!userQuestion || !userQuestion.trim()) {
      return NextResponse.json(
        { success: false, error: 'Question cannot be empty' },
        { status: 400 }
      );
    }

    const headerApiKey = req.headers.get('x-gemini-api-key') || '';
    const geminiApiKey = process.env.GEMINI_API_KEY || headerApiKey;

    // 1. Live AI Tutor (Gemini 2.0 Flash or zero-key Pollinations LLM)
    try {
      const liveAnswer = await askSlideTutorWithAI(
        {
          slideNumber,
          slideTitle,
          slideText,
          coreRule,
          takeaways,
          userQuestion,
          chatHistory
        },
        geminiApiKey
      );
      if (liveAnswer && liveAnswer.trim().length > 0) {
        return NextResponse.json({ success: true, answer: liveAnswer.trim() });
      }
    } catch (aiErr) {
      console.warn('Live AI tutor notice, falling back to grounded responder:', aiErr);
    }

    // 2. Intelligent Grounded Pedagogical Tutor Engine
    const groundedAnswer = generateGroundedTutorAnswer(
      slideNumber,
      slideTitle,
      slideText,
      coreRule,
      takeaways,
      formulas,
      definitions,
      userQuestion
    );

    return NextResponse.json({
      success: true,
      answer: groundedAnswer
    });

  } catch (error: any) {
    console.error('Tutor chat error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to generate tutor response' },
      { status: 500 }
    );
  }
}

async function askGeminiTutor(
  apiKey: string,
  slideNumber: number,
  slideTitle: string,
  slideText: string,
  coreRule: string,
  takeaways: Array<{ label: string; explanation: string }>,
  userQuestion: string,
  chatHistory: Array<{ role: 'user' | 'assistant'; content: string }>
): Promise<string | null> {
  const systemInstruction = `You are a friendly, brilliant university professor and tutor helping an undergraduate student master their university lecture slides.
Your job is to TEACH and SIMPLIFY.
Rules:
1. Explain in simple, crystal-clear plain English. Avoid heavy jargon unless you explain it simply first.
2. Use relatable everyday analogies (e.g. "Think of this like running a lemonade stand...", "Imagine your favorite coffee shop...").
3. Connect the concept to how professors test it on university exams.
4. Keep explanations engaging, concise (2 to 4 short paragraphs or bullet points), and directly focused on the student's question.`;

  const contextPrompt = `SLIDE CONTEXT:
Slide Number: ${slideNumber}
Slide Title: ${slideTitle}
Core Concept: ${coreRule}
Slide Content: ${slideText}
Key Takeaways: ${takeaways.map(t => `${t.label}: ${t.explanation}`).join(' | ')}

STUDENT QUESTION: "${userQuestion}"`;

  const messages = [
    { role: 'user', parts: [{ text: `${systemInstruction}\n\n${contextPrompt}` }] }
  ];

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: messages })
  });

  if (!res.ok) return null;
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  return text || null;
}

function generateGroundedTutorAnswer(
  slideNumber: number,
  slideTitle: string,
  slideText: string,
  coreRule: string,
  takeaways: Array<{ label: string; explanation: string }>,
  formulas: string[],
  definitions: Array<{ term: string; definition: string }>,
  userQuestion: string
): string {
  const q = userQuestion.toLowerCase().trim();
  const fullContext = `${slideTitle} ${slideText} ${coreRule}`.toLowerCase();

  // Enrich with our Concept Knowledge Base so even specific questions or older cached slides get rich answers
  const directQuestionMatches = matchSlideConceptsFromText(userQuestion);
  const slideKbMatches = matchSlideConceptsFromText(`${slideTitle} ${slideText}`);
  const specializedGuide = matchSpecializedTopicGuide(slideTitle, fullContext, []);

  const effectiveCoreRule = specializedGuide?.coreRule || (slideKbMatches[0]?.explanation) || coreRule;
  const effectiveTakeaways = specializedGuide?.detailedTakeaways || (slideKbMatches.length > 0 ? slideKbMatches : takeaways);

  // Check our 500+ academic jargon lexicon for relevant terms in question or slide context
  const jargonMatches = ACADEMIC_JARGON_LEXICON.filter(j =>
    j.pattern.test(`${userQuestion} ${slideTitle} ${slideText}`)
  );

  // If the student asked directly about a specific concept in our knowledge base, answer it directly!
  if (directQuestionMatches.length > 0 && !/explain simply|real-world example|quiz me|exam/i.test(q)) {
    const m = directQuestionMatches[0];
    return `**${m.label}**:\n\n${m.explanation}${directQuestionMatches[1] ? `\n\n**${directQuestionMatches[1].label}**: ${directQuestionMatches[1].explanation}` : ''}`;
  }

  // Mode 1: "Explain simply" / "Explain like I'm a beginner" / "What does this mean"
  if (/explain|simple|beginner|what does this mean|eli5|understand|teach|clarify|how does|why does/i.test(q)) {
    let explanation = `**In Plain English:**\n${effectiveCoreRule}\n\n`;
    if (jargonMatches.length > 0 && jargonMatches[0].example) {
      explanation += `**Everyday Analogy:**\n${jargonMatches[0].example}\n\n`;
    }
    if (effectiveTakeaways.length > 0) {
      explanation += `**Step-by-Step Breakdown:**\n`;
      effectiveTakeaways.slice(0, 4).forEach((t, i) => {
        explanation += `${i + 1}. **${t.label}**: ${t.explanation}\n`;
      });
    }
    if (formulas.length > 0) {
      explanation += `\n**Key Formula:** \`${formulas[0]}\``;
    }
    return explanation.trim();
  }

  // Mode 2: "Real-world example" / "Analogy" / "Scenario"
  if (/example|real world|analogy|scenario|practical|instance|case/i.test(q)) {
    if (jargonMatches.length > 0 && jargonMatches[0].example) {
      const j = jargonMatches[0];
      return `**Real-World Analogy for ${j.term}:**\n\n${j.example}\n\nIn simple terms, ${j.plainMeaning}.`;
    }
    if (/ngo|donation|nonprofit/i.test(fullContext)) {
      return `Think of the Red Cross or Doctors Without Borders. Unlike a supermarket that sells food to make money, an NGO provides medical help or disaster relief without charging customers. Their budget comes from donations. If donations drop during an economic downturn, their operations immediately stall.`;
    }
    if (/sole proprietorship|unlimited liability/i.test(fullContext)) {
      return `Imagine you start a food truck business as a sole proprietor. If a customer slips and sues you for $100,000, and your business account only has $10,000, unlimited liability means the court can seize your personal car, savings, or home to pay the remaining $90,000. There is no legal separation between you and the business.`;
    }
    if (/franchise|franchisor/i.test(fullContext)) {
      return `Think of McDonald's or KFC. The parent corporation (the franchisor) owns the brand and recipes. You (the franchisee) pay an upfront fee and monthly royalties on gross sales to open a local branch. You get instant customer recognition, but you must follow their strict operating rules.`;
    }
    if (/profit|revenue|expenses|make money/i.test(fullContext)) {
      return `Suppose you sell 100 pairs of shoes at $100 each. Your Revenue is $10,000. If you spent $6,000 buying the shoes, $1,500 on shipping, and $1,000 on ads (Total Expenses = $8,500), your Profit is $10,000 - $8,500 = $1,500. Revenue is total sales; profit is what remains after expenses.`;
    }
    if (/accounting|balance sheet|asset.*liabilit/i.test(fullContext)) {
      return `Suppose you buy a $1,000 laptop using $600 on a credit card and $400 of your own cash:\n• Asset ($1,000): The laptop you own.\n• Liability ($600): What you owe on the credit card.\n• Owner's Equity ($400): The portion you own debt-free.\nAssets ($1,000) = Liabilities ($600) + Equity ($400).`;
    }
    if (/matrix/i.test(fullContext)) {
      return `Imagine working as a designer at a tech company where you report to the Head of Design (your functional boss) for skill standards, while also reporting to the Mobile App Project Manager (your project boss) for daily launch deadlines. Reporting to two bosses at once is a matrix structure.`;
    }
    if (/theory x|theory y|motivation/i.test(fullContext)) {
      return `Compare two managers:\n• Theory X Manager: Assumes workers dislike work and must be closely monitored and penalized.\n• Theory Y Manager: Assumes workers take pride in their work and perform best when given trust and autonomy.`;
    }
    const generatedAnalogy = synthesizeWhyItMatters(slideTitle, [slideText], effectiveTakeaways, formulas);
    return `${generatedAnalogy}\n\n${effectiveTakeaways[0] ? `For example, **${effectiveTakeaways[0].label}**: ${effectiveTakeaways[0].explanation}` : ''}`;
  }

  // Mode 3: "Exam questions" / "How will this be tested"
  if (/exam|test|questions|marks|professor|paper/i.test(q)) {
    return `${specializedGuide?.examTrap || `Focus on being able to define ${slideTitle} clearly and contrast its main points:`}\n\n${effectiveTakeaways.slice(0, 3).map(t => `• **${t.label}**: ${t.explanation}`).join('\n')}`;
  }

  // Mode 4: "Quiz me"
  if (/quiz|test me|check me|question for me/i.test(q)) {
    if (specializedGuide) {
      return `Question: ${specializedGuide.activeRecallPrompt.question}\n\nAnswer: ${specializedGuide.activeRecallPrompt.answer}`;
    }
    if (definitions.length > 0) {
      return `Question: How is ${definitions[0].term} defined?\n\nAnswer: ${definitions[0].definition}`;
    }
    return `Question: Explain ${effectiveTakeaways[0]?.label || slideTitle}.\n\nAnswer: ${effectiveCoreRule}`;
  }

  // General specific question matching
  return `**${effectiveCoreRule}**\n\n${effectiveTakeaways.length > 0 ? effectiveTakeaways.slice(0, 3).map(t => `• **${t.label}**: ${t.explanation}`).join('\n') : ''}${jargonMatches.length > 0 && jargonMatches[0].example ? `\n\n**Intuition**: ${jargonMatches[0].example}` : ''}`;
}
