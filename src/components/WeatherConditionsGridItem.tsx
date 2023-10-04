import Grid from '@mui/material/Unstable_Grid2'
import { PropsWithChildren } from 'react'

const WeatherConditionsGridItem = ({ children }: PropsWithChildren) => {
  return (
    <Grid xs={6} md={4}>
      {children}
    </Grid>
  )
}

export default WeatherConditionsGridItem
