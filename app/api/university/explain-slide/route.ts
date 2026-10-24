import { NextRequest, NextResponse } from 'next/server';
import { simplifySingleSlideWithAI, simplifySlideBatchWithAI } from '@/lib/aiExplainerService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface ExplainSlideRequest {
  slideNumber: number;
  slideTitle: string;
  rawSlideText: string;
  deckTitle?: string;
  // Optional batch mode for pre-fetching adjacent slides
  batch?: Array<{
    pageNumber: number;
    title: string;
    rawText: string;
  }>;
}

export async function POST(req: NextRequest) {
  try {
    const body: ExplainSlideRequest = await req.json();
    const { slideNumber, slideTitle, rawSlideText, deckTitle, batch } = body;

    const headerApiKey = req.headers.get('x-gemini-api-key') || '';
    const geminiApiKey = process.env.GEMINI_API_KEY || headerApiKey;

    // Batch mode: simplify multiple slides in parallel / one call
    if (batch && Array.isArray(batch) && batch.length > 0) {
      const batchResults = await simplifySlideBatchWithAI(batch, deckTitle || 'Lecture Slides', geminiApiKey);
      return NextResponse.json({
        success: true,
        batchResults
      });
    }

    // Single slide mode
    if (!slideTitle && !rawSlideText) {
      return NextResponse.json(
        { success: false, error: 'Slide title or raw text is required' },
        { status: 400 }
      );
    }

    const simplified = await simplifySingleSlideWithAI(
      {
        pageNumber: slideNumber || 1,
        slideTitle: slideTitle || 'Lecture Slide',
        rawSlideText: rawSlideText || '',
        deckTitle: deckTitle || 'Lecture Slides'
      },
      geminiApiKey
    );

    if (simplified) {
      return NextResponse.json({
        success: true,
        slide: simplified
      });
    }

    return NextResponse.json({
      success: false,
      error: 'Could not generate live AI explanation'
    }, { status: 502 });

  } catch (error: any) {
    console.error('Error in explain-slide route:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to explain slide' },
      { status: 500 }
    );
  }
}
