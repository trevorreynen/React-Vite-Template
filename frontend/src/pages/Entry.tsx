// import Entry from '@/pages/Entry'

// ==========<  IMPORTS:  REACT  >===================================
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// ==========<  IMPORTS:  LAYOUTS, PAGES, COMPONENTS  >==============
import MuiThemeWrapper from '@/layouts/MuiThemeWrapper'

import App from '@/pages/App'

// ==========<  IMPORTS:  TYPES, CONTEXTS/HOOKS, UTILS  >============
import { ThemeProvider } from '@/contexts/ThemeContext'
import { TitleProvider } from '@/contexts/TitleManager'

// ==========<  IMPORTS:  OTHER  >===================================

// ==========<  IMPORTS:  STYLES  >==================================


const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <HelmetProvider>
        <TitleProvider>
          <ThemeProvider>
            <MuiThemeWrapper>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </MuiThemeWrapper>
          </ThemeProvider>
        </TitleProvider>
      </HelmetProvider>
    </React.StrictMode>
  )
}
