import { Outlet } from '@tanstack/react-router'
import AppHeader from '../../components/AppHeader'

const AppRoot = () => (
  <>
    <AppHeader />

    <Outlet />
  </>
)

export default AppRoot
