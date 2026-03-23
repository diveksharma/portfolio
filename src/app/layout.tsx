import type { Metadata } from 'next'
import { Raleway, Inter } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Divek Sharma — UI/UX Designer & Frontend Developer',
  description:
    'UI/UX designer who codes. I take ideas from Figma wireframe to deployed product — including AI-powered features, full-stack architecture, and production-ready interfaces.',
  openGraph: {
    title: 'Divek Sharma — UI/UX Designer & Frontend Developer',
    description: 'UI/UX designer who codes. From Figma to deployed product.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body className="antialiased bg-cream">{children}</body>
    </html>
  )
}
