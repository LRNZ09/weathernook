import { useAtomValue } from 'jotai'
import { GetCurrentWeatherResponse } from '../../../apis/weather/schemas/getCurrentWeatherResponse'
import BackgroundVideo from '../../../components/BackgroundVideo'
import getVideoFromWeatherCode from '../../../utils/getVideoFromWeatherCode'
import weatherVideoSwitchAtom from '../../../atoms/weatherVideoSwitchAtom'

interface WeatherVideoProps {
  code: GetCurrentWeatherResponse['weather'][number]['id']
}

const WeatherVideo = ({ code }: WeatherVideoProps) => {
  const isWeatherVideoEnabled = useAtomValue(weatherVideoSwitchAtom)

  if (!isWeatherVideoEnabled) return null

  const src = getVideoFromWeatherCode(code)

  return (
    <BackgroundVideo
      aria-label='Video playing weather conditions'
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={src} type='video/mp4' />
    </BackgroundVideo>
  )
}

export default WeatherVideo
