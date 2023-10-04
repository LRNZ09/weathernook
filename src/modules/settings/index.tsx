import Page from '../../components/Page'
import Grid from '@mui/material/Unstable_Grid2'
import MeasurementUnitSelect from '../../components/MeasurementUnitSelect'

const Settings = () => {
  return (
    <Page>
      <Grid container>
        <Grid xs={12} sm={6}>
          <MeasurementUnitSelect />
        </Grid>
      </Grid>
    </Page>
  )
}

export default Settings
