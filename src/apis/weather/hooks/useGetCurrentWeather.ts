import { useQuery } from '@tanstack/react-query'

import getCurrentWeather, {
  type GetCurrentWeatherParams,
} from '../funcs/getCurrentWeather'

const useGetCurrentWeather = (params: GetCurrentWeatherParams) =>
  useQuery({
    queryKey: ['getCurrentWeather', params],
    queryFn: getCurrentWeather,
    enabled: params.queryText !== '',
  })

export default useGetCurrentWeather
