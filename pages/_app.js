import '../styles/globals.css'
import { useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('smooth-scroll').then((SmoothScroll) => {
        new SmoothScroll.default('a[href*="#"]');
      });
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp