import { z } from 'zod'

const measurementUnit = z.enum(['standard', 'metric', 'imperial'])
type MeasurementUnit = z.infer<typeof measurementUnit>

export type { MeasurementUnit }
export default measurementUnit
