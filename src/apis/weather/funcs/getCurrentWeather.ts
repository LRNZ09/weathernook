import { QueryFunction } from '@tanstack/react-query'
import weatherApi from '..'
import getCurrentWeatherResponse, {
  GetCurrentWeatherResponse,
} from '../schemas/getCurrentWeatherResponse'
import { MeasurementUnit } from '../schemas/measurementUnit'

interface GetCurrentWeatherParams {
  measurementUnit: MeasurementUnit
  queryText: string
}

const getCurrentWeather: QueryFunction<
  GetCurrentWeatherResponse,
  ['getCurrentWeather', GetCurrentWeatherParams]
> = async ({ queryKey: [, { measurementUnit, queryText }] }) => {
  const response = await weatherApi.get('/weather', {
    params: { units: measurementUnit, q: queryText },
  })

  return getCurrentWeatherResponse.parseAsync(response.data)
}

export type { GetCurrentWeatherParams }
export default getCurrentWeather
