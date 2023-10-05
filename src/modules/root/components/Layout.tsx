import { PropsWithChildren } from 'react'

import Header from './Header'
import Main from './Main'
import MiniDrawer from './MiniDrawer'
import Flex from '../../../components/Flex'

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
