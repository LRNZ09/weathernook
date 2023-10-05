import { QueryFunction } from '@tanstack/react-query'
import { MergeExclusive } from 'type-fest'

import weatherApi from '..'
import getCurrentWeatherResponse, {
  GetCurrentWeatherResponse,
} from '../schemas/getCurrentWeatherResponse'
import { MeasurementUnit } from '../schemas/measurementUnit'

type GetCurrentWeatherLatLonParams = Pick<
  GeolocationCoordinates,
  'latitude' | 'longitude'
>
interface GetCurrentWeatherQueryParams {
  queryText: string
}

type GetCurrentWeatherLocationParams = MergeExclusive<
  GetCurrentWeatherLatLonParams,
  GetCurrentWeatherQueryParams
>

type GetCurrentWeatherParams = GetCurrentWeatherLocationParams & {
  measurementUnit: MeasurementUnit
}

const getCurrentWeather: QueryFunction<
  GetCurrentWeatherResponse,
  ['getCurrentWeather', GetCurrentWeatherParams]
> = async ({
  queryKey: [, { latitude, longitude, measurementUnit, queryText }],
}) => {
  const response = await weatherApi.get('/weather', {
    params: {
      lat: latitude,
      lon: longitude,
      q: queryText,
      units: measurementUnit,
    },
  })

  return getCurrentWeatherResponse.parseAsync(response.data)
}

export type { GetCurrentWeatherLocationParams, GetCurrentWeatherParams }
export default getCurrentWeather
