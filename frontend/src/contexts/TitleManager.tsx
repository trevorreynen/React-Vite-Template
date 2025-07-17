// import { TitleProvider, TitleContext } from '@/contexts/TitleManager'

// ==========<  IMPORTS:  REACT  >===================================
import { createContext, ReactNode, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'

// ==========<  IMPORTS:  LAYOUTS, PAGES, COMPONENTS  >==============

// ==========<  IMPORTS:  TYPES, CONTEXTS/HOOKS, UTILS  >============

// ==========<  IMPORTS:  OTHER  >===================================

// ==========<  IMPORTS:  STYLES  >==================================


const TITLE_PREFIX = import.meta.env.VITE_FRONTEND_WEBSITE_TITLE ? import.meta.env.VITE_FRONTEND_WEBSITE_TITLE : ''

// Create Context.
export const TitleContext = createContext<(title: string, skipPrefix?: boolean) => void>(() => {})


// Title Provider.
export const TitleProvider = ({ children }: { children: ReactNode }) => {
  const observerRef = useRef<MutationObserver | null>(null)

  let allowNoPrefix = false

  // Optional function to allow programmatic control.
  const setTitle = (rawTitle: string, skipPrefix = false) => {
    allowNoPrefix = skipPrefix
    document.title = skipPrefix ? rawTitle : `${TITLE_PREFIX} ${rawTitle}`
  }

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const title = document.title.trim()

      if (!title) {
        throw new Error('Missing <title> tag on this page.')
      }

      if (!title.startsWith(TITLE_PREFIX)) {
        if (!allowNoPrefix) {
          document.title = `${TITLE_PREFIX} ${title}`
        } else {
          allowNoPrefix = false // reset after one pass
        }
      }
    })

    observer.observe(document.head, { childList: true, subtree: true })
    observerRef.current = observer

    return () => observer.disconnect()
  }, [])

  return (
    <TitleContext.Provider value={setTitle}>
      <Helmet>
        <title>{TITLE_PREFIX} Loading...</title>
      </Helmet>
      {children}
    </TitleContext.Provider>
  )
}
