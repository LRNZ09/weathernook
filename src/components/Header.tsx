import {
  AppBar,
  AppBarProps,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { DRAWER_WIDTH } from './constants'

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

interface HeaderProps {
  isMenuOpen: boolean
  onMenuPress: () => void
}

const Header = ({ isMenuOpen, onMenuPress }: HeaderProps) => {
  return (
    <CustomAppBar open={isMenuOpen} position='sticky'>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-hidden={isMenuOpen}
          aria-label='toggle drawer'
          onClick={onMenuPress}
          edge='start'
          hidden={isMenuOpen}
          sx={{ mr: 5, ...(isMenuOpen && { display: 'none' }) }}
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
      </Toolbar>
    </CustomAppBar>
  )
}

export default Header
