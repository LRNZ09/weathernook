import measurementUnit, {
  type MeasurementUnit,
} from '../apis/weather/schemas/measurementUnit'

const measurementUnitTemperatureMap = {
  [measurementUnit.enum.imperial]: '°F',
  [measurementUnit.enum.metric]: '°C',
  [measurementUnit.enum.standard]: '°K',
} as const satisfies Record<MeasurementUnit, string>

const toTemperature = ({
  value,
  measurementUnit,
}: {
  value: number
  measurementUnit: MeasurementUnit
}) => `${value} ${measurementUnitTemperatureMap[measurementUnit]}`

export { measurementUnitTemperatureMap }
export default toTemperature
