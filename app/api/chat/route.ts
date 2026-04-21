// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: `Eres AutoBot, asistente experto en autopartes de AUTONEX (Argentina). 
      Habla en español argentino, amigable y directo. 
      Recomienda productos reales: aceites Mobil, Zerex, Pennzoil, filtros, frenos, luces, etc.
      Siempre pregunta marca, modelo y año del vehículo para dar mejor recomendación.`,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response('Error en el chatbot', { status: 500 });
  }
}
