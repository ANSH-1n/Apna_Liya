import { generateLLMsTxt } from '@/app/utils/aiUtils';

export function GET() {
  return new Response(generateLLMsTxt(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
