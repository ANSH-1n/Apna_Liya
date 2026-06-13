import { cookies } from 'next/headers'
import { createHmac, timingSafeEqual } from 'crypto'

const cookieName = 'snipercoders_admin_session'
const maxAgeSeconds = 60 * 60 * 8

function getAdminPassword() {
  const password = process.env.ADMIN_PASSWORD

  if (!password) {
    throw new Error('ADMIN_PASSWORD is not configured')
  }

  return password
}

function signSession(value: string) {
  return createHmac('sha256', getAdminPassword()).update(value).digest('hex')
}

export function createAdminSessionValue() {
  const issuedAt = Date.now().toString()
  return `${issuedAt}.${signSession(issuedAt)}`
}

export function verifyAdminSessionValue(value?: string) {
  if (!value) return false

  const [issuedAt, signature] = value.split('.')
  if (!issuedAt || !signature) return false

  const issuedAtNumber = Number(issuedAt)
  if (!Number.isFinite(issuedAtNumber)) return false
  if (Date.now() - issuedAtNumber > maxAgeSeconds * 1000) return false

  const expected = signSession(issuedAt)
  const signatureBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)

  if (signatureBuffer.length !== expectedBuffer.length) return false
  return timingSafeEqual(signatureBuffer, expectedBuffer)
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  return verifyAdminSessionValue(cookieStore.get(cookieName)?.value)
}

export async function setAdminSessionCookie() {
  const cookieStore = await cookies()

  cookieStore.set(cookieName, createAdminSessionValue(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: maxAgeSeconds,
    path: '/',
  })
}

export async function clearAdminSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(cookieName)
}

export function isPasswordValid(password: string) {
  const configuredPassword = getAdminPassword()
  const inputBuffer = Buffer.from(password)
  const configuredBuffer = Buffer.from(configuredPassword)

  if (inputBuffer.length !== configuredBuffer.length) return false
  return timingSafeEqual(inputBuffer, configuredBuffer)
}
