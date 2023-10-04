import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from '@mui/material'
import Page from '../../components/Page'
import { useCallback } from 'react'
import useGetCurrentWeather from '../../apis/weather/hooks/useGetCurrentWeather'
import Center from '../../components/Center'
import Column from '../../components/Column'
import Flex from '../../components/Flex'
import WeatherImage from '../../components/WeatherImage'
import WeatherConditionsGrid from '../../components/WeatherConditionsGrid'
import { useAtomValue } from 'jotai'
import searchFieldValueAtom from '../../atoms/searchFieldValueAtom'

const Home = () => {
  const searchFieldValue = useAtomValue(searchFieldValueAtom)

  const { data, isLoading, isError, refetch } = useGetCurrentWeather({
    queryText: searchFieldValue,
  })

  const handleRetry = useCallback(() => {
    void refetch({ cancelRefetch: false })
  }, [refetch])

  if (isLoading) return <LinearProgress />
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
    <Page margin={{ sm: 4, md: 6 }} rowGap={2}>
      <Flex>
        <Card>
          <CardContent>
            <Flex alignItems='center' columnGap={3}>
              <Column>
                <Flex columnGap={1} alignItems='flex-end'>
                  <Typography variant='h4'>{data.name}</Typography>
                  <Typography variant='h6'>{data.sys.country}</Typography>
                </Flex>
                <Typography variant='subtitle1' gutterBottom>
                  {data.weather[0].main}
                </Typography>
              </Column>

              <WeatherImage {...data.weather[0]} />
            </Flex>

            <Typography variant='h3'>{data.main.temp}</Typography>
          </CardContent>
        </Card>
      </Flex>

      <WeatherConditionsGrid data={data} />
    </Page>
  )
}

export default Home
