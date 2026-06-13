import { NextResponse } from 'next/server'
import { getQuoteRequestsCollection } from '@/lib/mongodb'
import { normalizeLeadInput } from '@/lib/leads'
import type { QuoteRequestInput } from '@/lib/leads'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequestInput
    const lead = normalizeLeadInput({
      ...body,
      userIp:
        request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
        request.headers.get('x-real-ip') ??
        '',
      deviceType: getDeviceType(request.headers.get('user-agent') ?? ''),
    })

    const collection = await getQuoteRequestsCollection()
    const result = await collection.insertOne(lead)

    return NextResponse.json({ ok: true, id: result.insertedId.toString() }, { status: 201 })
  } catch (error) {
    console.error('Failed to create quote request', error)
    return NextResponse.json({ ok: false, message: 'Unable to save lead' }, { status: 500 })
  }
}

function getDeviceType(userAgent: string) {
  const normalized = userAgent.toLowerCase()
  if (/tablet|ipad/.test(normalized)) return 'Tablet'
  if (/mobile|iphone|android/.test(normalized)) return 'Mobile'
  return userAgent ? 'Desktop' : ''
}
