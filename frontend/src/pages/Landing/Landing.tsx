// import Landing from '@/pages/Landing/Landing'

// ====================< IMPORTS: REACT >=================================
import { Helmet } from 'react-helmet-async'

// ====================< IMPORTS: LAYOUT >================================

// ====================< IMPORTS: PAGES >=================================

// ====================< IMPORTS: COMPONENTS >============================
import { Box, Typography } from '@mui/material'

// ====================< IMPORTS: TYPES >=================================

// ====================< IMPORTS: CONTEXTS/HOOKS >========================

// ====================< IMPORTS: UTILS >=================================

// ====================< IMPORTS: OTHER >=================================

// ====================< IMPORTS: STYLES >================================


export default function Landing() {
  // Render landing page.
  return (
    <>
      <Helmet><title>Landing</title></Helmet>


      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, height: '100%' }}>


        <Typography>Landing page</Typography>


      </Box>
    </>
  )
}
