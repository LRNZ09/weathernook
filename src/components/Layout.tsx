import { PropsWithChildren } from 'react'
import Header from './Header'
import Main from './Main'
import MiniDrawer from './MiniDrawer'
import { useBoolean } from 'ahooks'
import Flex from './Flex'
import { useMediaQuery } from '@mui/material'

const Layout = ({ children }: PropsWithChildren) => {
  const defaultOpen = useMediaQuery('(min-width : 1200px)')
  const [isDrawerOpen, { setFalse: closeDrawer, toggle: toggleDrawer }] =
    useBoolean(defaultOpen)

  return (
    <>
      <Header isMenuOpen={isDrawerOpen} onMenuPress={toggleDrawer} />
      <Flex>
        <MiniDrawer onClose={closeDrawer} open={isDrawerOpen} />
        <Main>{children}</Main>
      </Flex>
    </>
  )
}

export default Layout
