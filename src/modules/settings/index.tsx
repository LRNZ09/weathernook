import Page from '../../components/Page'
import Grid from '@mui/material/Unstable_Grid2'
import MeasurementUnitSelect from '../../components/MeasurementUnitSelect'
import WeatherVideoSwitch from './components/WeatherVideoSwitch'

const Settings = () => {
  return (
    <Page>
      <Grid container spacing={4}>
        <Grid xs={12} sm={6}>
          <MeasurementUnitSelect />
        </Grid>
        <Grid xs={12} sm={6}>
          <WeatherVideoSwitch />
        </Grid>
      </Grid>
    </Page>
  )
}

export default Settings
