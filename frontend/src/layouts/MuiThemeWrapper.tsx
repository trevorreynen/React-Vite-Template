// import MuiThemeWrapper from '@/layouts/MuiThemeWrapper'

// ==========<  IMPORTS:  REACT  >===================================
import { ReactNode, useMemo } from 'react'

// ==========<  IMPORTS:  LAYOUTS, PAGES, COMPONENTS  >==============

// ==========<  IMPORTS:  TYPES, CONTEXTS/HOOKS, UTILS  >============
import { ThemeProvider } from '@mui/material/styles'
import { useTheme } from '@/hooks/useTheme'
import { customDarkTheme } from '@/config/customDarkTheme'
import { customLightTheme } from '@/config/customLightTheme'

// ==========<  IMPORTS:  OTHER  >===================================

// ==========<  IMPORTS:  STYLES  >==================================
import { CssBaseline } from '@mui/material'


export default function MuiThemeWrapper({ children }: { children: ReactNode }) {
  // Grab theme selection from contexts/hooks.
  const { theme } = useTheme()

  // Resolve the theme to only use 'dark' or 'light'. MUI does not like 'system' and should be resolved before sending theme to MUI.
  const resolvedTheme = theme === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : theme

  const muiTheme = useMemo(() => {
    return resolvedTheme === 'dark' ? customDarkTheme : customLightTheme
  }, [resolvedTheme])

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
