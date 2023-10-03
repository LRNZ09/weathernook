import {
  Alert,
  AlertTitle,
  Button,
  LinearProgress,
  Typography,
} from '@mui/material'
import Page from '../../components/Page'
import { useCallback } from 'react'
import useGetCurrentWeather from '../../apis/weather/hooks/useGetCurrentWeather'

const Home = () => {
  const queryText = 'Florence'
  const { data, isLoading, isError, refetch } = useGetCurrentWeather({
    queryText,
  })

  const handleRetry = useCallback(() => {
    void refetch({ cancelRefetch: false })
  }, [refetch])

  if (isLoading) return <LinearProgress />
  if (isError)
    return (
      <Page>
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
      </Page>
    )

  return (
    <Page>
      <Typography>{JSON.stringify(data, null, 2)}</Typography>
    </Page>
  )
}

export default Home
