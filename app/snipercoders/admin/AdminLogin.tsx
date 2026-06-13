'use client'

import { FormEvent, useState } from 'react'
import { LockKeyhole } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    setLoading(false)

    if (!response.ok) {
      setError('Invalid password')
      return
    }

    window.location.reload()
  }

  return (
    <main className="min-h-screen bg-[#05070d] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
        <form onSubmit={handleSubmit} className="w-full rounded-2xl border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-cyan-950/20">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Admin Login
          </p>
          <h1 className="text-3xl font-semibold">SniperCoders Leads</h1>
          <p className="mt-3 leading-7 text-slate-300">
            Enter the admin password to manage quote requests and contact submissions.
          </p>

          <label className="mt-6 grid gap-2 text-sm font-medium text-slate-200">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
            />
          </label>

          {error && <p className="mt-3 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Checking...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}
