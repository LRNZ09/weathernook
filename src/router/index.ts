import { RootRoute, Route, Router } from '@tanstack/react-router'
import Home from '../modules/home'

const rootRoute = new RootRoute()

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const routeTree = rootRoute.addChildren([homeRoute])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router
