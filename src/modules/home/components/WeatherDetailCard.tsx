import { SvgIconComponent } from '@mui/icons-material'
import {
  Avatar,
  Card,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'

export interface WeatherDetailCardProps {
  label: string
  value: string
  icon: SvgIconComponent
}

const WeatherDetailCard = ({
  label,
  value,
  icon: Icon,
}: WeatherDetailCardProps) => {
  return (
    <Card>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={value} secondary={label} />
      </ListItem>
    </Card>
  )
}

export default WeatherDetailCard
