// import MainLayout from '@/pages/layouts/MainLayout'

// ==========<  IMPORTS:  REACT  >===================================
import { Outlet } from 'react-router-dom'

// ==========<  IMPORTS:  LAYOUTS, PAGES, COMPONENTS  >==============
import Box from '@mui/material/Box'

// ==========<  IMPORTS:  TYPES, CONTEXTS/HOOKS, UTILS  >============

// ==========<  IMPORTS:  OTHER  >===================================

// ==========<  IMPORTS:  STYLES  >==================================


export default function MainLayout() {
  return (
    <Box className='App' sx={{ width: '100%', height: '100%' }}>


      <Box className='App-Wrapper' sx={{ width: '100%', height: '100%' }}>
        <Outlet />
      </Box>


    </Box>
  )
}
