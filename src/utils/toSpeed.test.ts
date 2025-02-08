import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'

import measurementUnit from '../apis/weather/schemas/measurementUnit'
import toSpeed, { measurementUnitSpeedMap } from './toSpeed'

const paramsArbitrary = {
  value: fc.float({ noDefaultInfinity: true, noNaN: true }),
  measurementUnit: fc.constantFrom(...measurementUnit.options),
}

describe('toSpeed', () => {
  test.prop(paramsArbitrary)('value', ({ value, measurementUnit }) => {
    const res = toSpeed({ value, measurementUnit })

    expect(res).toContain(value)
  })

  test.prop(paramsArbitrary)(
    'measurementUnit',
    ({ value, measurementUnit }) => {
      const res = toSpeed({ value, measurementUnit })

      expect(res).toContain(measurementUnitSpeedMap[measurementUnit])
    },
  )
})
