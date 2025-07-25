// import FullPageLoader from '@/components/loading/FullPageLoader'

// ==========<  IMPORTS:  REACT  >===================================

// ==========<  IMPORTS:  LAYOUTS, PAGES, COMPONENTS  >==============
import { Box, CircularProgress } from '@mui/material'

// ==========<  IMPORTS:  TYPES, CONTEXTS/HOOKS, UTILS  >============

// ==========<  IMPORTS:  OTHER  >===================================

// ==========<  IMPORTS:  STYLES  >==================================


export default function FullPageLoader() {
  // Render full page loader.
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <CircularProgress />
    </Box>
  )
}
