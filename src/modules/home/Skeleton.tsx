import { Skeleton } from '@mui/material'
import { useMemo } from 'react'

import Page from '../../components/Page'
import WeatherConditionsGrid from './components/WeatherConditionsGrid'
import WeatherConditionsGridItem from './components/WeatherConditionsGridItem'

const HomeSkeleton = () => {
  const weatherConditionsSkeletonItems = useMemo(
    () =>
      Array.from({ length: 9 }, (_value, index) => (
        <WeatherConditionsGridItem key={index}>
          <Skeleton animation='wave' variant='rounded' />
        </WeatherConditionsGridItem>
      )),
    [],
  )
  return (
    <Page rowGap={2}>
      <Skeleton height={170} width={250} animation='wave' variant='rounded' />

      <WeatherConditionsGrid>
        {weatherConditionsSkeletonItems}
      </WeatherConditionsGrid>
    </Page>
  )
}

export default HomeSkeleton
