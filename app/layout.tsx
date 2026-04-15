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
  title: 'Antti Murtokangas — Automation Engineering and AI Systems',
  description:
    'Automation Engineering student at SEAMK. Fiber optic network support specialist. Builds AI pipelines, trading analysis tools, and backend systems.',
  metadataBase: new URL('https://www.anttimurtokangas.com'),
  alternates: { canonical: 'https://www.anttimurtokangas.com' },
  openGraph: {
    title: 'Antti Murtokangas — Automation Engineering and AI Systems',
    description:
      'Automation Engineering student at SEAMK. Fiber optic network support specialist. Builds AI pipelines, trading analysis tools, and backend systems.',
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
      {/* No-flash theme restore — runs synchronously before first paint */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);})()`,
          }}
        />
      </head>
      <body>
        <PageBackground />
        {children}
      </body>
    </html>
  )
}
