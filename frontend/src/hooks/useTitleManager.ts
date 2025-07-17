// import { useTitleManager } from '@/hooks/useTitleManager'

// ==========<  IMPORTS:  REACT  >===================================
import { useContext } from 'react'

// ==========<  IMPORTS:  LAYOUTS, PAGES, COMPONENTS  >==============

// ==========<  IMPORTS:  TYPES, CONTEXTS/HOOKS, UTILS  >============
import { TitleContext } from '@/contexts/TitleManager'

// ==========<  IMPORTS:  OTHER  >===================================

// ==========<  IMPORTS:  STYLES  >==================================


// Hook to programmatically set the page title with prefix.
export const useTitleManager = () => {
  return useContext(TitleContext)
}

