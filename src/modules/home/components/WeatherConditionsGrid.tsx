import { Grid } from '@mui/material'
import { PropsWithChildren } from 'react'

const WeatherConditionsGrid = ({ children }: PropsWithChildren) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  )
}

export default WeatherConditionsGrid
