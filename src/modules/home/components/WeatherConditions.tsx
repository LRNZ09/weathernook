import {
  Air,
  Cloud,
  Compress,
  Thermostat,
  Thunderstorm,
  Visibility,
  WaterDrop,
} from '@mui/icons-material'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'

import WeatherConditionsGrid from './WeatherConditionsGrid'
import WeatherConditionsGridItem from './WeatherConditionsGridItem'
import WeatherDetailCard, { WeatherDetailCardProps } from './WeatherDetailCard'
import { GetCurrentWeatherResponse } from '../../../apis/weather/schemas/getCurrentWeatherResponse'
import measurementUnitSelectAtom from '../../../atoms/measurementUnitSelectAtom'
import toSpeed from '../../../utils/toSpeed'
import toTemperature from '../../../utils/toTemperature'

interface WeatherConditionsProps {
  data: GetCurrentWeatherResponse
}

const WeatherConditions = ({ data }: WeatherConditionsProps) => {
  const measurementUnitSelect = useAtomValue(measurementUnitSelectAtom)

  const weatherConditionsItems = useMemo(
    () =>
      [
        {
          label: 'Min Temperature',
          value: toTemperature({
            value: data.main.temp_min,
            measurementUnit: measurementUnitSelect,
          }),
          icon: Thermostat,
        },
        {
          label: 'Max Temperature',
          value: toTemperature({
            value: data.main.temp_max,
            measurementUnit: measurementUnitSelect,
          }),
          icon: Thermostat,
        },
        {
          label: 'Pressure',
          value: `${data.main.pressure} hPa`,
          icon: Compress,
        },
        {
          label: 'Humidity',
          value: `${data.main.humidity}%`,
          icon: WaterDrop,
        },
        {
          label: 'Visibility',
          value: `${data.visibility} meters`,
          icon: Visibility,
        },
        {
          label: 'Wind Speed',
          value: toSpeed({
            value: data.wind.speed,
            measurementUnit: measurementUnitSelect,
          }),
          icon: Air,
        },
        {
          label: 'Wind Degree',
          value: `${data.wind.deg}°`,
          icon: Air,
        },
        {
          label: 'Rain (1h)',
          value: `${data.rain ? data.rain['1h'] : 0} mm`,
          icon: Thunderstorm,
        },
        {
          label: 'Cloudiness',
          value: `${data.clouds.all}%`,
          icon: Cloud,
        },
      ] as const satisfies readonly WeatherDetailCardProps[],
    [
      data.clouds.all,
      data.main.humidity,
      data.main.pressure,
      data.main.temp_max,
      data.main.temp_min,
      data.rain,
      data.visibility,
      data.wind.deg,
      data.wind.speed,
      measurementUnitSelect,
    ],
  )

  const weatherConditionsElements = useMemo(
    () =>
      weatherConditionsItems.map((item, index) => (
        <WeatherConditionsGridItem key={index}>
          <WeatherDetailCard {...item} />
        </WeatherConditionsGridItem>
      )),
    [weatherConditionsItems],
  )

  return (
    <WeatherConditionsGrid>{weatherConditionsElements}</WeatherConditionsGrid>
  )
}

export default WeatherConditions
