import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'

import brokenClouds from '../assets/videos/broken-clouds.mp4'
import clearSky from '../assets/videos/clear-sky.mp4'
import fewClouds from '../assets/videos/few-clouds.mp4'
import mist from '../assets/videos/mist.mp4'
import rain from '../assets/videos/rain.mp4'
import scatteredClouds from '../assets/videos/scattered-clouds.mp4'
import showerRain from '../assets/videos/shower-rain.mp4'
import snow from '../assets/videos/snow.mp4'
import thunderstorm from '../assets/videos/thunderstorm.mp4'
import getVideoFromWeatherCode from './getVideoFromWeatherCode'

describe('getVideoFromWeatherCode', () => {
  test.prop([fc.integer({ min: 200, max: 299 })])('thunderstorm', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(thunderstorm)
  })

  test.prop([fc.integer({ min: 300, max: 399 })])('showerRain', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(showerRain)
  })

  test.prop([fc.integer({ min: 500, max: 599 })])('rain', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(rain)
  })

  test.prop([fc.integer({ min: 600, max: 699 })])('snow', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(snow)
  })

  test.prop([fc.integer({ min: 700, max: 799 })])('mist', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(mist)
  })

  test.prop([fc.constant(800)])('clearSky', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(clearSky)
  })

  test.prop([fc.constant(801)])('fewClouds', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(fewClouds)
  })

  test.prop([fc.constant(802)])('scatteredClouds', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(scatteredClouds)
  })

  test.prop([fc.constantFrom(803, 804)])('brokenClouds', (code) => {
    const res = getVideoFromWeatherCode(code)

    expect(res).toBe(brokenClouds)
  })
})
