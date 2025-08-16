'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function useNavigationEvents({
  onStart,
  onComplete,
}: {
  onStart?: (to: string, from: string) => void
  onComplete?: (to: string, from: string) => void
}) {
  const pathname = usePathname()
  const prevPath = useRef(pathname)

  useEffect(() => {
    const from = prevPath.current
    const to = pathname

    if (from !== to) {
      onStart?.(to, from)

      // Defer "complete" to the next frame
      requestAnimationFrame(() => {
        onComplete?.(to, from)
        prevPath.current = to
      })
    }
  }, [pathname])
}
