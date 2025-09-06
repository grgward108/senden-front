import type { Metadata } from 'next'
import './globals.css'
import Sidebar from './components/Sidebar'

export const metadata: Metadata = {
  title: 'マスメディアン 求人システム',
  description: 'Job search and candidate management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50">
        <Sidebar />
        <div className="ml-64">
          {children}
        </div>
      </body>
    </html>
  )
}