import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import Page from '../../components/Page'
import { useCallback } from 'react'
import useGetCurrentWeather from '../../apis/weather/hooks/useGetCurrentWeather'
import Center from '../../components/Center'
import Column from '../../components/Column'
import Flex from '../../components/Flex'
import WeatherImage from '../../components/WeatherImage'
import WeatherConditions from '../../components/WeatherConditions'
import { useAtomValue } from 'jotai'
import searchFieldValueAtom from '../../atoms/searchFieldAtom'
import HomeSkeleton from './Skeleton'
import { useDebounce } from 'ahooks'
import measurementUnitSelectAtom from '../../atoms/measurementUnitSelectAtom'
import toTemperature from '../../utils/toTemperature'
import getFlagEmoji from '../../utils/getFlagEmoji'
import useGeolocation from '../../hooks/useGeolocation'
import { GetCurrentWeatherLocationParams } from '../../apis/weather/funcs/getCurrentWeather'
import WeatherVideo from './components/WeatherVideo'

const Home = () => {
  const searchFieldValue = useAtomValue(searchFieldValueAtom)
  const measurementUnitSelect = useAtomValue(measurementUnitSelectAtom)

  const debouncedSearchFieldValue = useDebounce(searchFieldValue)

  const { geolocationPosition } = useGeolocation()

  const locationParams: GetCurrentWeatherLocationParams =
    geolocationPosition && !debouncedSearchFieldValue
      ? {
          latitude: geolocationPosition.coords.latitude,
          longitude: geolocationPosition.coords.longitude,
        }
      : { queryText: debouncedSearchFieldValue }

  const { data, isFetching, isLoading, isError, refetch } =
    useGetCurrentWeather({
      ...locationParams,
      measurementUnit: measurementUnitSelect,
    })

  const handleRetry = useCallback(() => {
    void refetch({ cancelRefetch: false })
  }, [refetch])

  if (isFetching) return <HomeSkeleton />

  if (isLoading)
    return (
      <Page>
        <Center>
          <Alert severity='info'>
            <AlertTitle>Look for a location</AlertTitle>
            Please search for a location using the text field above.
          </Alert>
        </Center>
      </Page>
    )

  if (isError)
    return (
      <Page>
        <Center>
          <Alert
            severity='error'
            action={
              <Button color='inherit' size='small' onClick={handleRetry}>
                RETRY
              </Button>
            }
          >
            <AlertTitle>An error occurred while loading the page</AlertTitle>
            Please check your Internet connection and try again.
          </Alert>
        </Center>
      </Page>
    )

  return (
    <>
      <WeatherVideo code={data.weather[0].id} />
      <Page rowGap={2}>
        <Flex>
          <Card>
            <CardContent>
              <Flex alignItems='center' columnGap={3}>
                <Column>
                  <Flex columnGap={1} alignItems='flex-end'>
                    <Typography variant='h4'>{data.name}</Typography>
                    <Typography variant='h6'>
                      {getFlagEmoji(data.sys.country)}
                    </Typography>
                  </Flex>
                  <Typography variant='subtitle1' gutterBottom>
                    {data.weather[0].main}
                  </Typography>
                </Column>

                <WeatherImage {...data.weather[0]} />
              </Flex>

              <Typography variant='h3'>
                {toTemperature({
                  value: data.main.temp,
                  measurementUnit: measurementUnitSelect,
                })}
              </Typography>
            </CardContent>
          </Card>
        </Flex>

        <WeatherConditions data={data} />
      </Page>
    </>
  )
}

export default Home
