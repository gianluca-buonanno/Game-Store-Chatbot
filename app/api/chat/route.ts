import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Build conversation history for Claude
    const conversationHistory = history
      ? history.map((msg: any) => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content,
        }))
      : [];

    // Add the new user message
    conversationHistory.push({
      role: 'user',
      content: message,
    });

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `You are a helpful customer service assistant for "GameHub" - a video game retail store. 
      
You help customers with:
- Game availability and prices
- New releases and pre-orders
- Trade-in values and policies
- Console information and accessories
- Store hours and locations
- General gaming questions

Be friendly, concise, and helpful. If you don't know something specific (like exact prices or stock), let them know they can call the store or check online for real-time information.

Remember previous messages in the conversation to provide contextual responses.`,
      messages: conversationHistory,
    });

    const assistantMessage = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';

    return NextResponse.json({ message: assistantMessage });
  } catch (error: any) {
    console.error('API Error:', error);
    
    // Handle specific Anthropic API errors
    if (error?.status === 401) {
      return NextResponse.json(
        { error: 'Authentication failed. Please check API key.' },
        { status: 401 }
      );
    }
    
    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to get response from AI service' },
      { status: 500 }
    );
  }
}