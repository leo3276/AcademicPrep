import { NextRequest, NextResponse } from 'next/server';

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

    // 1. If Gemini API key is available, call Gemini for live tutoring
    if (geminiApiKey) {
      try {
        const geminiAnswer = await askGeminiTutor(
          geminiApiKey,
          slideNumber,
          slideTitle,
          slideText,
          coreRule,
          takeaways,
          userQuestion,
          chatHistory
        );
        if (geminiAnswer) {
          return NextResponse.json({ success: true, answer: geminiAnswer });
        }
      } catch (geminiErr) {
        console.warn('Gemini tutor fallback note:', geminiErr);
      }
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

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
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

  // Mode 1: "Explain simply" / "Explain like I'm a beginner"
  if (/explain|simple|beginner|what does this mean|eli5|understand|teach|clarify/i.test(q)) {
    let explanation = `Here is the simple, real-world way to understand **${slideTitle}**:\n\n`;
    explanation += `👉 **The Big Picture**: ${coreRule}\n\n`;
    if (takeaways.length > 0) {
      explanation += `💡 **Key Points Broken Down Simply**:\n`;
      takeaways.slice(0, 3).forEach(t => {
        explanation += `• **${t.label}**: ${t.explanation}\n`;
      });
    }
    if (formulas.length > 0) {
      explanation += `\n🔢 **The Formula Rule**: \`${formulas[0]}\` — notice how changing one variable directly affects the result!`;
    }
    return explanation;
  }

  // Mode 2: "Real-world example"
  if (/example|real world|analogy|scenario|practical|instance/i.test(q)) {
    if (/ngo|donation|nonprofit/i.test(fullContext)) {
      return `🌍 **Everyday Real-World Example**:\n\nThink of the Red Cross or Doctors Without Borders. Unlike a supermarket that sells food to make money, an NGO gives medical help or disaster relief for free. They don't have paying customers. Their entire budget comes from donations. If the economy crashes and people stop donating, the NGO immediately struggles to keep ambulances running or pay doctors. That's why donation dependency is their biggest vulnerability!`;
    }
    if (/sole proprietorship|unlimited liability/i.test(fullContext)) {
      return `🌍 **Everyday Real-World Example**:\n\nImagine you start a food truck business as a sole proprietor. If a customer slips, breaks an arm, and sues you for $100,000, but your food truck only has $10,000 in the bank, what happens? Because of **unlimited liability**, the court can legally take your personal car, your personal bank account, and even force you to sell your home to pay the remaining $90,000! There is zero legal shield between you and your business.`;
    }
    if (/franchise|franchisor/i.test(fullContext)) {
      return `🌍 **Everyday Real-World Example**:\n\nThink of McDonald's or Domino's Pizza. The parent corporation (the franchisor) invented the recipes, the golden arches logo, and the brand. You (the franchisee) pay them a big upfront fee and monthly royalties for the right to open your own restaurant using their brand. You get instant customer recognition, but you have zero freedom to change the menu—you must follow their exact rules!`;
    }
    if (/profit|revenue|expenses|make money/i.test(fullContext)) {
      return `🌍 **Everyday Real-World Example**:\n\nImagine running an online sneaker store. You sell 100 pairs of shoes at $100 each. Your **Revenue** is $10,000. But did you make $10,000 in profit? No! You spent $6,000 buying the shoes, $1,500 on shipping, and $1,000 on Instagram ads (Total Expenses = $8,500). Your **Net Profit** is only $10,000 - $8,500 = **$1,500**. Revenue is the cash collected; profit is what you actually keep!`;
    }
    if (/accounting|balance sheet|asset.*liabilit/i.test(fullContext)) {
      return `🌍 **Everyday Real-World Example**:\n\nThink of buying a $1,000 smartphone. You swipe your credit card for $600 and pay the other $400 out of your savings. In accounting terms:\n• **Assets ($1,000)**: The phone you own.\n• **Liabilities ($600)**: The credit card balance you owe.\n• **Owner's Equity ($400)**: What you actually paid and own free-and-clear.\nNotice how **Assets ($1,000) = Liabilities ($600) + Equity ($400)**. It always balances!`;
    }
    if (/matrix/i.test(fullContext)) {
      return `🌍 **Everyday Real-World Example**:\n\nImagine you are a software designer at Spotify. Your functional manager is the Head of Design (who conducts your annual review and ensures your designs look modern). At the same time, your project manager is the Leader of the "Search & Discover Squad" (who tells you what features must ship by Friday). You report to two bosses simultaneously—this is the matrix structure!`;
    }
    if (/theory x|theory y|motivation/i.test(fullContext)) {
      return `🌍 **Everyday Real-World Example**:\n\nThink of two bosses at a tech startup:\n• **Boss X (Theory X)**: Thinks everyone is lazy and will browse TikTok unless they have screen-monitoring software installed on their laptops.\n• **Boss Y (Theory Y)**: Gives employees flexible hours and creative freedom because they believe people genuinely take pride in building great products when trusted.`;
    }
    return `🌍 **Everyday Real-World Example**:\n\nTo see how **${slideTitle}** works in real life, consider how modern organizations apply this:\n\nWhen a manager or founder encounters this situation, they must balance operational costs against customer demand. For instance, ${coreRule.slice(0, 180)}. If you understand this trade-off, you can solve any case study problem your lecturer gives you.`;
  }

  // Mode 3: "Exam questions" / "How will this be tested"
  if (/exam|test|questions|marks|professor|paper/i.test(q)) {
    return `📝 **How Professors Test This On Exams**:\n\n1. **Multiple Choice Trick**: Lecturers love asking questions with subtle definition traps. Make sure you don't confuse similar terms.\n2. **Short-Answer Definition**: Be ready to define the core term in 2 sentences without notes: "${coreRule.slice(0, 140)}..."\n3. **Application Scenario**: Professors often present a short mini-case (e.g. "Company X wants to do Y...") and ask you what principle applies and what risk they face.`;
  }

  // Mode 4: "Quiz me"
  if (/quiz|test me|check me|question for me/i.test(q)) {
    if (definitions.length > 0) {
      return `🎯 **Quick Active Recall Quiz**:\n\n**Question**: In your university exam, how would you define **${definitions[0].term}**?\n\n*Try thinking of the answer before reading below!*\n\n---\n✅ **Model Answer**: ${definitions[0].definition}\n💡 **Key Exam Tip**: Make sure you mention whether it applies to tangible goods or intangible services!`;
    }
    return `🎯 **Quick Active Recall Quiz**:\n\n**Question**: Based on Slide ${slideNumber} (${slideTitle}), what is the primary consequence or rule students must know?\n\n*Try answering out loud before checking below!*\n\n---\n✅ **Model Answer**: ${coreRule}`;
  }

  // General specific question matching
  return `💡 **Tutor Breakdown on "${slideTitle}"**:\n\nRegarding your question: "${userQuestion}"\n\n${coreRule}\n\n${takeaways.length > 0 ? `Here is the crucial distinction to remember: **${takeaways[0].label}** — ${takeaways[0].explanation}` : ''}\n\nFeel free to ask for an everyday analogy, an exam tip, or a quick quiz!`;
}
