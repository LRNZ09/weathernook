import { useQuery } from '@tanstack/react-query'
import getCurrentWeather from '../funcs/getCurrentWeather'

const useGetCurrentWeather = (params: { queryText: string }) =>
  useQuery({
    queryKey: ['getCurrentWeather', params],
    queryFn: getCurrentWeather,
  })

export default useGetCurrentWeather
