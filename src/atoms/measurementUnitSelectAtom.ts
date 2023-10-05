import { atomWithStorage } from 'jotai/utils'

import measurementUnit, {
  MeasurementUnit,
} from '../apis/weather/schemas/measurementUnit'

const measurementUnitSelectAtom = atomWithStorage<MeasurementUnit>(
  'measurementUnitSelect',
  measurementUnit.enum.metric,
)

export default measurementUnitSelectAtom
