import { styled } from '@mui/material'
import { useMemo } from 'react'

const SUPPORTED_SIZES = ['2x', '4x'] as const

interface WeatherImageProps {
  description: string
  icon: string
}

const SquaredImage = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
})

const WeatherImage = ({ description, icon }: WeatherImageProps) => {
  const srcSet = useMemo(
    () =>
      SUPPORTED_SIZES.map(
        (size) =>
          `https://openweathermap.org/img/wn/${icon}@${size}.png ${size}`,
      ).join(', '),
    [icon],
  )
  const alt = `${description} icon`

  return (
    <SquaredImage
      alt={alt}
      aria-label={alt}
      srcSet={srcSet}
      src={`https://openweathermap.org/img/wn/${icon}.png`}
      width={72}
    />
  )
}

export default WeatherImage
