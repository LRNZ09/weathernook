import { Grid } from '@mui/material'

import Page from '../../components/Page'
import MeasurementUnitSelect from './components/MeasurementUnitSelect'
import WeatherVideoSwitch from './components/WeatherVideoSwitch'

const Settings = () => {
  return (
    <Page>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <MeasurementUnitSelect />
        </Grid>
        <Grid item xs={12} sm={6}>
          <WeatherVideoSwitch />
        </Grid>
      </Grid>
    </Page>
  )
}

export default Settings
