import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import ScrollExperience from '@/components/ScrollExperience'
import 'lenis/dist/lenis.css'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })
export const metadata: Metadata = { title: 'Antti Murtokangas | Automation and software', description: 'Portfolio of Antti Murtokangas, an automation engineering student building practical software and support systems.', metadataBase: new URL('https://www.anttimurtokangas.com'), alternates: { canonical: 'https://www.anttimurtokangas.com' }, robots: { index: true, follow: true } }
const themeScript = `(function(){try{var saved=localStorage.getItem('portfolio-theme');var preferred=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=saved==='light'||saved==='dark'?saved:preferred}catch(e){}})()`
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning className={`${geist.variable} ${mono.variable}`}><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><ScrollExperience />{children}</body></html> }
