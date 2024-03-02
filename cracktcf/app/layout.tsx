import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crack The TCF',
  description: 'Crack the TCF Canada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
