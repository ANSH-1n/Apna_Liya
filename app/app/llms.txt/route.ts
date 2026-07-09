// app/llms.txt/route.ts
import { generateLLMsTxt } from '@/app/utils/aiUtils'
export const dynamic = 'force-static'

export async function GET() {
  const content = generateLLMsTxt()
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}