import { Route, Router, RouterContext } from '@tanstack/react-router'

import { queryClient } from './queryClient'
import Home from '../modules/home'
import AppRoot from '../modules/root'
import Settings from '../modules/settings'

const routerContext = new RouterContext<{
  queryClient: typeof queryClient
}>()

const rootRoute = routerContext.createRootRoute({
  component: AppRoot,
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
})

const routeTree = rootRoute.addChildren([homeRoute, settingsRoute])

const router = new Router({
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { homeRoute, settingsRoute }
export default router
