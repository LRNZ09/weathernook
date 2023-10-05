import { useDeepCompareEffect } from 'ahooks'
import { useState } from 'react'

const useGeolocation = (options?: PositionOptions) => {
  const [geolocationPosition, setGeolocationPosition] =
    useState<GeolocationPosition>()
  const [error, setError] = useState<GeolocationPositionError>()

  useDeepCompareEffect(() => {
    navigator.geolocation.getCurrentPosition(
      setGeolocationPosition,
      setError,
      options,
    )

    const watchId = navigator.geolocation.watchPosition(
      setGeolocationPosition,
      setError,
      options,
    )

    return () => {
      navigator.geolocation.clearWatch(watchId)
    }
  }, [options])

  return { geolocationPosition, error }
}

export default useGeolocation
