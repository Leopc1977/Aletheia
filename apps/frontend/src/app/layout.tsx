import './globals.css'
import { Sidebar } from '@/components/Sidebar'

export const metadata = {
  title: 'Aletheia',
  description: 'Dashboard LLM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
