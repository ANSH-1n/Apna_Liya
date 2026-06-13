import type { Metadata } from 'next'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import AdminDashboard from './AdminDashboard'
import AdminLogin from './AdminLogin'

export const metadata: Metadata = {
  title: 'SniperCoders Admin',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function SniperCodersAdminPage() {
  const authenticated = await isAdminAuthenticated()

  return authenticated ? <AdminDashboard /> : <AdminLogin />
}
