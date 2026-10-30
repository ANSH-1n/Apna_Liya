import { generateAITxt } from '@/app/utils/aiUtils';

export function GET() {
  return new Response(generateAITxt(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
