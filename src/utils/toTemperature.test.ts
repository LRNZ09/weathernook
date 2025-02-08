import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'

import measurementUnit from '../apis/weather/schemas/measurementUnit'
import toTemperature, { measurementUnitTemperatureMap } from './toTemperature'

const paramsArbitrary = {
  value: fc.float({ noDefaultInfinity: true, noNaN: true }),
  measurementUnit: fc.constantFrom(...measurementUnit.options),
}

describe('toTemperature', () => {
  test.prop(paramsArbitrary)('value', ({ value, measurementUnit }) => {
    const res = toTemperature({ value, measurementUnit })

    expect(res).toContain(value)
  })

  test.prop(paramsArbitrary)(
    'measurementUnit',
    ({ value, measurementUnit }) => {
      const res = toTemperature({ value, measurementUnit })

      expect(res).toContain(measurementUnitTemperatureMap[measurementUnit])
    },
  )
})
