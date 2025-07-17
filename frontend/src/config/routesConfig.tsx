// import { routesConfig } from '@/config/routesConfig'

// ==========<  IMPORTS:  REACT  >===================================
import { lazy, Suspense, JSX } from 'react'
import { RouteObject } from 'react-router-dom'

// ==========<  IMPORTS:  LAYOUTS, PAGES, COMPONENTS  >==============
import MainLayout from '@/layouts/MainLayout'

const Landing = lazy(() => import('@/pages/Landing/Landing'))
const Error404 = lazy(() => import('@/pages/Error404/Error404'))

import FullPageLoader from '@/components/loading/FullPageLoader'

// ==========<  IMPORTS:  TYPES, CONTEXTS/HOOKS, UTILS  >============

// ==========<  IMPORTS:  OTHER  >===================================

// ==========<  IMPORTS:  STYLES  >==================================


const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element | null>) => (
  <Suspense fallback={<FullPageLoader />}>
    <Component />
  </Suspense>
)


const mainLayoutRoutes: RouteObject = {
  element: <MainLayout />,
  children: [
    { path: '', element: withSuspense(Landing) },

    { path: '*', element: withSuspense(Error404) },
  ]
}


export const useRoutesConfig = (): RouteObject[] => {
  return [mainLayoutRoutes]
}
