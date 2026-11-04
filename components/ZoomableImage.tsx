'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ZoomableImageProps {
  src: string
  alt: string
  width: number
  height: number
  quality?: number
  loading?: 'lazy' | 'eager'
  sizes?: string
}

export default function ZoomableImage({ src, alt, width, height, quality = 90, loading = 'lazy', sizes }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        loading={loading}
        sizes={sizes}
        onClick={() => setIsZoomed(true)}
        style={{ cursor: 'pointer' }}
      />
      {isZoomed && (
        <div
          className="image-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-label="Zoomed image"
          aria-modal="true"
        >
          <div className="image-overlay-content">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={quality}
              sizes="100vw"
            />
          </div>
          <button
            className="image-overlay-close"
            onClick={() => setIsZoomed(false)}
            aria-label="Close zoomed image"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
