import { FormControlLabel, Switch, SwitchProps } from '@mui/material'
import { useAtom } from 'jotai'
import weatherVideoSwitchAtom from '../../../atoms/weatherVideoSwitchAtom'
import { useCallback } from 'react'

const WeatherVideoSwitch = () => {
  const [checked, setChecked] = useAtom(weatherVideoSwitchAtom)

  const handleChange = useCallback<NonNullable<SwitchProps['onChange']>>(
    (event) => {
      setChecked(event.target.checked)
    },
    [setChecked],
  )

  return (
    <FormControlLabel
      control={
        <Switch
          aria-checked={checked}
          onChange={handleChange}
          checked={checked}
        />
      }
      label='Weather video enabled'
    />
  )
}

export default WeatherVideoSwitch
