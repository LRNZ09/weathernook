import { GetCurrentWeatherResponse } from '../apis/weather/schemas/getCurrentWeatherResponse'
import brokenClouds from '../assets/videos/broken-clouds.mp4'
import clearSky from '../assets/videos/clear-sky.mp4'
import fewClouds from '../assets/videos/few-clouds.mp4'
import mist from '../assets/videos/mist.mp4'
import rain from '../assets/videos/rain.mp4'
import scatteredClouds from '../assets/videos/scattered-clouds.mp4'
import showerRain from '../assets/videos/shower-rain.mp4'
import snow from '../assets/videos/snow.mp4'
import thunderstorm from '../assets/videos/thunderstorm.mp4'

/**
 * Select a video URL that corresponds to a specific weather condition code
 * retrieved from the API.
 *
 * @todo different video based on day/night cycle
 *
 * @param code Weather code returned by the API
 * @see {@link https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2}
 * @returns the URL of the corresponding video
 */
const getVideoFromWeatherCode = (
  code: GetCurrentWeatherResponse['weather'][number]['id'],
): string => {
  if (code >= 200 && code < 300) {
    return thunderstorm
  }

  if (code >= 300 && code < 400) {
    return showerRain
  }

  if (code >= 500 && code < 600) {
    return rain
  }

  if (code >= 600 && code < 700) {
    return snow
  }

  if (code >= 700 && code < 800) {
    return mist
  }

  switch (code) {
    case 801:
      return fewClouds
    case 802:
      return scatteredClouds
    case 803:
    case 804:
      return brokenClouds
    default:
      return clearSky
  }
}

export default getVideoFromWeatherCode
