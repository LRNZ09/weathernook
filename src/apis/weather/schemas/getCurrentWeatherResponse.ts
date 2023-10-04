import { z } from 'zod'

const getCurrentWeatherResponse = z.object({
  coord: z.object({ lon: z.number(), lat: z.number() }),
  weather: z
    .array(
      z.object({
        id: z.number(),
        main: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    )
    .nonempty(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    pressure: z.number(),
    humidity: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    sea_level: z.number().optional(),
    grnd_level: z.number().optional(),
  }),
  visibility: z.number(),
  wind: z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number().optional(),
  }),
  clouds: z.object({ all: z.number() }),
  rain: z
    .object({
      '1h': z.number(),
      '3h': z.number(),
    })
    .partial()
    .optional(),
  snow: z
    .object({
      '1h': z.number(),
      '3h': z.number(),
    })
    .partial()
    .optional(),
  dt: z.number(),
  sys: z.object({
    country: z.string(),
    sunrise: z.number(),
    sunset: z.number(),
  }),
  timezone: z.number(),
  id: z.number(),
  name: z.string(),
})

type GetCurrentWeatherResponse = z.infer<typeof getCurrentWeatherResponse>

export type { GetCurrentWeatherResponse }
export default getCurrentWeatherResponse
