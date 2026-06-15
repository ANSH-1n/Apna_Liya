import { NextResponse } from 'next/server'
import { AdminAuthConfigError, isPasswordValid, setAdminSessionCookie } from '@/lib/admin-auth'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string }

    if (!body.password || !isPasswordValid(body.password)) {
      return NextResponse.json({ ok: false, message: 'Invalid password' }, { status: 401 })
    }

    await setAdminSessionCookie()

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof AdminAuthConfigError) {
      return NextResponse.json(
        { ok: false, message: 'Admin password is not configured on the server' },
        { status: 500 },
      )
    }

    console.error('Admin login failed', error)
    return NextResponse.json({ ok: false, message: 'Login failed' }, { status: 500 })
  }
}
