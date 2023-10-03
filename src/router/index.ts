import { RootRoute, Route, Router } from '@tanstack/react-router'
import Home from '../modules/home'

const rootRoute = new RootRoute()

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: () => null,
})

const routeTree = rootRoute.addChildren([homeRoute, settingsRoute])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { homeRoute, settingsRoute }
export default router
