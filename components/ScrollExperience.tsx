'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function ScrollExperience() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      syncTouch: false,
    })

    return () => lenis.destroy()
  }, [])

  return null
}
