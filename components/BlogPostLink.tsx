'use client'

import type { MouseEvent, ReactNode } from 'react'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogPostLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const [pending, setPending] = useState(false)

  const startNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    setPending(true)
  }

  return <Link href={href} prefetch className={className} onClick={startNavigation} aria-busy={pending || undefined}>{children}{pending ? <span className="route-progress" aria-label="Opening article" /> : null}</Link>
}
