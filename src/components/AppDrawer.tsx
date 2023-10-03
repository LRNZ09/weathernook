import { Home, Settings } from '@mui/icons-material'
import {
  Divider,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { Link } from '@tanstack/react-router'
import { homeRoute, settingsRoute } from '../router'

interface AppDrawerProps
  extends Required<Pick<DrawerProps, 'onClose' | 'open' | 'variant'>> {
  width: number
}

const AppDrawer = ({ width, ...props }: AppDrawerProps) => {
  return (
    <Drawer
      {...props}
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
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
    </Drawer>
  )
}

export default AppDrawer
