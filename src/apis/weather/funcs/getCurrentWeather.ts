import { QueryFunction } from '@tanstack/react-query'
import weatherApi from '..'
import getCurrentWeatherResponse, {
  GetCurrentWeatherResponse,
} from '../schemas/getCurrentWeatherResponse'

const getCurrentWeather: QueryFunction<
  GetCurrentWeatherResponse,
  ['getCurrentWeather', { queryText: string }]
> = async ({ queryKey: [, { queryText }] }) => {
  const response = await weatherApi.get('/weather', {
    params: { q: queryText },
  })

  return getCurrentWeatherResponse.parseAsync(response.data)
}

export default getCurrentWeather
