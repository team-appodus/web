'use client'

import { microsoftClarityProjectId } from 'containers';
import { useEffect } from 'react'

export function ClarityProvider() {

   useEffect(() => {
    if (typeof window !== 'undefined') {
      (function (c: any, l: any, a: any, r: any, i: any, t: any, y: any) {
        c[a] = c[a] || function () {
          (c[a].q = c[a].q || []).push(arguments)
        }
        t = l.createElement(r)
        t.async = 1
        t.src = 'https://www.clarity.ms/tag/' + i
        y = l.getElementsByTagName(r)[0]
        y?.parentNode?.insertBefore(t, y)
      })(window, document, 'clarity', 'script', microsoftClarityProjectId, null, null)
    }
  }, [])

  return null
}
