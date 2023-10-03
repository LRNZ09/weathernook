import AppDrawer from './AppDrawer'
import { useBoolean } from 'ahooks'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const DRAWER_WIDTH = 240

const AppHeader = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const [isDrawerOpen, { setFalse: closeDrawer, toggle: toggleDrawer }] =
    useBoolean()

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label='toggle drawer'
            color='inherit'
            edge='start'
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' noWrap component='div'>
            Weathernook
          </Typography>
        </Toolbar>
      </AppBar>

      <AppDrawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        variant={matches ? 'permanent' : 'temporary'}
        width={DRAWER_WIDTH}
      />
    </>
  )
}

export default AppHeader
