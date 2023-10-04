import Grid from '@mui/material/Unstable_Grid2'
import { PropsWithChildren } from 'react'

const WeatherConditionsGrid = ({ children }: PropsWithChildren) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  )
}

export default WeatherConditionsGrid
