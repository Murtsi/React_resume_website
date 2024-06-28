import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('smooth-scroll').then((SmoothScroll) => {
        new SmoothScroll.default('a[href*="#"]');
      });
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
