import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teen Tiny',
  description: 'Curated content collections with professional streaming quality',
  keywords: 'teen tiny, streaming, premium content',
  authors: [{ name: 'Teen Tiny' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'noindex, nofollow', // Adult content - no indexing
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

