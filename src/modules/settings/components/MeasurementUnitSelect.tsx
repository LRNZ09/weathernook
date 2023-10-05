import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useCallback, useMemo } from 'react'
import measurementUnit, {
  MeasurementUnit,
} from '../../../apis/weather/schemas/measurementUnit'
import measurementUnitSelectAtom from '../../../atoms/measurementUnitSelectAtom'

const measurementUnitLabelMap = {
  [measurementUnit.enum.imperial]: 'Imperial',
  [measurementUnit.enum.metric]: 'Metric',
  [measurementUnit.enum.standard]: 'Standard',
} as const satisfies Record<MeasurementUnit, string>

const MeasurementUnitSelect = () => {
  const [measurementUnitSelect, setMeasurementUnitSelectAtom] = useAtom(
    measurementUnitSelectAtom,
  )

  const handleChange = useCallback<
    NonNullable<SelectProps<MeasurementUnit>['onChange']>
  >(
    (event) => {
      setMeasurementUnitSelectAtom(event.target.value as MeasurementUnit)
    },
    [setMeasurementUnitSelectAtom],
  )

  const menuItems = useMemo(
    () =>
      measurementUnit.options.map((value) => {
        const label = measurementUnitLabelMap[value]
        return (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        )
      }),
    [],
  )

  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>
        Units of measurement
      </InputLabel>
      <Select
        labelId='measurement-unit-select-label'
        id='measurement-unit-select'
        value={measurementUnitSelect}
        label='Units of measurement'
        onChange={handleChange}
      >
        {menuItems}
      </Select>
    </FormControl>
  )
}

export default MeasurementUnitSelect
