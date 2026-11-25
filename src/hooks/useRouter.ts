import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL.replace(/\/$/, '') // e.g. '/portfolio'

function stripBase(pathname: string) {
  return pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname
}

export function useRouter() {
  const [path, setPath] = useState(stripBase(window.location.pathname))

  useEffect(() => {
    const onPop = () => setPath(stripBase(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function navigate(to: string) {
    window.history.pushState({}, '', base + to)
    setPath(to)
    // Instant, not smooth: html has scroll-behavior: smooth, and an animated
    // scroll-to-top lets the reveal observer fire mid-scroll before the
    // new page is actually visible.
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return { path, navigate }
}
