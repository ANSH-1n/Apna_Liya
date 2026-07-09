// app/ai.txt/route.ts
import { generateAITxt } from '@/app/utils/aiUtils'
export const dynamic = 'force-static'

export async function GET() {
  const content = generateAITxt()
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}