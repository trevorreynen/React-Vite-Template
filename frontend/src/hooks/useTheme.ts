// import { useTheme } from '@/hooks/useTheme'

// ==========<  IMPORTS:  REACT  >===================================
import { useContext } from 'react'

// ==========<  IMPORTS:  LAYOUTS, PAGES, COMPONENTS  >==============

// ==========<  IMPORTS:  TYPES, CONTEXTS/HOOKS, UTILS  >============
import { ThemeContext } from '@/contexts/ThemeContext'

// ==========<  IMPORTS:  OTHER  >===================================

// ==========<  IMPORTS:  STYLES  >==================================


// Hook to use the Theme Context.
export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
