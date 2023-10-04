import Grid from '@mui/material/Unstable_Grid2'
import WeatherDetailCard, { WeatherDetailCardProps } from './WeatherDetailCard'
import { GetCurrentWeatherResponse } from '../apis/weather/schemas/getCurrentWeatherResponse'
import { useMemo } from 'react'
import { BrightnessHigh } from '@mui/icons-material'

interface WeatherConditionsGridProps {
  data: GetCurrentWeatherResponse
}

const WeatherConditionsGrid = ({ data }: WeatherConditionsGridProps) => {
  const weatherConditionsItems = useMemo(
    () =>
      [
        {
          label: 'Min Temperature',
          value: `${Math.round(data.main.temp_min - 273.15)}°C`,
          icon: BrightnessHigh,
        },
        {
          label: 'Max Temperature',
          value: `${Math.round(data.main.temp_max - 273.15)}°C`,
          icon: BrightnessHigh,
        },
        {
          label: 'Pressure',
          value: `${data.main.pressure} hPa`,
          icon: BrightnessHigh,
        },
        {
          label: 'Humidity',
          value: `${data.main.humidity}%`,
          icon: BrightnessHigh,
        },
        {
          label: 'Visibility',
          value: `${data.visibility} meters`,
          icon: BrightnessHigh,
        },
        {
          label: 'Wind Speed',
          value: `${data.wind.speed} m/s`,
          icon: BrightnessHigh,
        },
        {
          label: 'Wind Degree',
          value: `${data.wind.deg}°`,
          icon: BrightnessHigh,
        },
        {
          label: 'Rain (1h)',
          value: `${data.rain ? data.rain['1h'] : 0} mm`,
          icon: BrightnessHigh,
        },
        {
          label: 'Cloudiness',
          value: `${data.clouds.all}%`,
          icon: BrightnessHigh,
        },
      ] as const satisfies readonly WeatherDetailCardProps[],
    [data],
  )

  const weatherConditionsElements = useMemo(
    () =>
      weatherConditionsItems.map((item, index) => (
        <Grid key={index} xs={6} md={4}>
          <WeatherDetailCard {...item} />
        </Grid>
      )),
    [weatherConditionsItems],
  )

  return (
    <Grid container spacing={2}>
      {weatherConditionsElements}
    </Grid>
  )
}

export default WeatherConditionsGrid
