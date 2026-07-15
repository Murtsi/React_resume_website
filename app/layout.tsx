import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import PageBackground from '@/components/PageBackground'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Antti Murtokangas - Automation Engineering Student',
  description:
    'Automation Engineering student at SEAMK with technical support experience and practical TypeScript and Python projects, including the live Tärppi event-monitoring service.',
  metadataBase: new URL('https://www.anttimurtokangas.com'),
  manifest: '/manifest.json',
  alternates: { canonical: 'https://www.anttimurtokangas.com' },
  openGraph: {
    title: 'Antti Murtokangas - Automation Engineering Student',
    description:
      'Automation Engineering student at SEAMK with technical support experience and practical TypeScript and Python projects, including the live Tärppi event-monitoring service.',
    url: 'https://www.anttimurtokangas.com',
    siteName: 'Antti Murtokangas',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <PageBackground />
        {children}
      </body>
    </html>
  )
}
