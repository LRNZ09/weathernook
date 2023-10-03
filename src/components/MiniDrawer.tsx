import { ChevronLeft, ChevronRight, Home, Settings } from '@mui/icons-material'
import {
  CSSObject,
  Divider,
  Drawer,
  DrawerProps,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  styled,
  useTheme,
} from '@mui/material'
import { Link } from '@tanstack/react-router'
import { homeRoute, settingsRoute } from '../router'
import Flex from './Flex'
import { DRAWER_WIDTH } from './constants'
import { OverrideProperties } from 'type-fest'

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: theme.spacing(7),
})

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxSizing: 'border-box',
  flexShrink: 0,
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  width: DRAWER_WIDTH,
  ...(open
    ? {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
}))

const DrawerHeader = styled(Flex)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // ? Necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const DrawerChevronIcon = () => {
  const theme = useTheme()

  if (theme.direction === 'rtl') return <ChevronRight />

  return <ChevronLeft />
}

type MiniDrawerProps = OverrideProperties<
  Required<Pick<DrawerProps, 'onClose' | 'open'>>,
  {
    onClose: () => void
  }
>

const MiniDrawer = ({ onClose, ...props }: MiniDrawerProps) => {
  return (
    <CustomDrawer {...props} onClose={onClose} variant='permanent'>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <DrawerChevronIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link to={homeRoute.to}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={settingsRoute.to}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </CustomDrawer>
  )
}

export default MiniDrawer