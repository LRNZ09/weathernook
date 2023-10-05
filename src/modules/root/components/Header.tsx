import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  AppBarProps,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useCallback } from 'react'

import SearchField from './SearchField'
import drawerOpenAtom from '../../../atoms/drawerOpenAtom'
import { DRAWER_WIDTH } from '../../../components/constants'

interface CustomAppBarProps extends AppBarProps {
  open: boolean
}

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<CustomAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  zIndex: theme.zIndex.drawer + 1,
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useAtom(drawerOpenAtom)

  const handleDrawerClick = useCallback(() => {
    setDrawerOpen((prev) => !prev)
  }, [setDrawerOpen])

  return (
    <CustomAppBar open={drawerOpen} position='sticky'>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-hidden={drawerOpen}
          aria-label='toggle drawer'
          onClick={handleDrawerClick}
          edge='start'
          hidden={drawerOpen}
          sx={{ mr: 5, ...(drawerOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          fontFamily='monospace'
          fontWeight={700}
          letterSpacing={'.3rem'}
          noWrap
          variant='h6'
        >
          Weathernook
        </Typography>

        <SearchField />
      </Toolbar>
    </CustomAppBar>
  )
}

export default Header
