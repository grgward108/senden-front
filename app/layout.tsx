import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Job Search Prototype',
  description: 'Job search application prototype',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}