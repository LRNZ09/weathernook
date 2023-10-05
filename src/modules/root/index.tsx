import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Layout from './components/Layout'

const AppRoot = () => (
  <>
    <Layout>
      <Outlet /> {/* Start rendering router matches */}
    </Layout>
    <TanStackRouterDevtools />
  </>
)

export default AppRoot
