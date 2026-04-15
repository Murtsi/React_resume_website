'use client'

import PixelSnow from './PixelSnow'

export default function PageBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
      }}
    >
      <PixelSnow
        color="#3FB950"
        flakeSize={0.007}
        minFlakeSize={0.9}
        pixelResolution={145}
        speed={0.42}
        depthFade={14}
        farPlane={16}
        brightness={0.26}
        gamma={0.4545}
        density={0.09}
        variant="square"
        direction={108}
      />
    </div>
  )
}
