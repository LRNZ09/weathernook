import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import AppHeader from '../../components/AppHeader'

const AppRoot = () => (
  <>
    <AppHeader />
    <Outlet /> {/* Start rendering router matches */}
    <TanStackRouterDevtools />
  </>
)

export default AppRoot
