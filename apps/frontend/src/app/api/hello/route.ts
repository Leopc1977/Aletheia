import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const model = url.searchParams.get('model');
  const prompt = url.searchParams.get('prompt');

  try {
    const response = await axios.get('http://localhost:3001/test', {
      params: { model, prompt } // <-- passé en query params à ton backend
    });

    // On récupère le contenu souhaité
    const content = response.data.choices[0].message.content;

    return NextResponse.json({ response: content });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    return NextResponse.json({ 
      message: 'Data received successfully!',
      data: body,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    )
  }
}