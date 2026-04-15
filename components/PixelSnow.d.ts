import { CSSProperties } from 'react'

export interface PixelSnowProps {
  color?: string
  flakeSize?: number
  minFlakeSize?: number
  pixelResolution?: number
  speed?: number
  depthFade?: number
  farPlane?: number
  brightness?: number
  gamma?: number
  density?: number
  variant?: 'square' | 'round' | 'snowflake'
  direction?: number
  className?: string
  style?: CSSProperties
}

export default function PixelSnow(props: PixelSnowProps): JSX.Element
