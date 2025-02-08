import measurementUnit, {
  type MeasurementUnit,
} from '../apis/weather/schemas/measurementUnit'

const measurementUnitSpeedMap = {
  [measurementUnit.enum.imperial]: 'miles/hour',
  [measurementUnit.enum.metric]: 'meter/sec',
  [measurementUnit.enum.standard]: 'meter/sec',
} as const satisfies Record<MeasurementUnit, string>

const toSpeed = ({
  value,
  measurementUnit,
}: {
  value: number
  measurementUnit: MeasurementUnit
}) => `${value} ${measurementUnitSpeedMap[measurementUnit]}`

export { measurementUnitSpeedMap }
export default toSpeed
