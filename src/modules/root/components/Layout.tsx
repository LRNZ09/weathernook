import type { PropsWithChildren } from 'react'

import Flex from '../../../components/Flex'
import Header from './Header'
import Main from './Main'
import MiniDrawer from './MiniDrawer'

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    <Flex>
      <MiniDrawer />
      <Main>{children}</Main>
    </Flex>
  </>
)

export default Layout
