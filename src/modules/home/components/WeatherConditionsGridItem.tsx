import { Grid } from '@mui/material'
import type { PropsWithChildren } from 'react'

const WeatherConditionsGridItem = ({ children }: PropsWithChildren) => {
  return (
    <Grid item xs={6} md={4}>
      {children}
    </Grid>
  )
}

export default WeatherConditionsGridItem
