import { afterAll, vi } from 'vitest'
import '@testing-library/jest-dom'

declare global {
  var jest: typeof vi | undefined
}

/**
 * @see https://github.com/vitest-dev/vitest/discussions/395
 */

global.jest = vi

const apis = [
  'Path2D',
  'CanvasGradient',
  'CanvasPattern',
  'CanvasRenderingContext2D',
  'DOMMatrix',
  'ImageData',
  'TextMetrics',
  'ImageBitmap',
  'createImageBitmap',
] as const

import('jest-canvas-mock/lib/window.js')
  .then(res => res.default?.default || res.default || res)
  .then(getCanvasWindow => {
    const canvasWindow = getCanvasWindow({ document: window.document })

    apis.forEach(api => {
      global[api] = canvasWindow[api]
      global.window[api] = canvasWindow[api]
    })
  })

afterAll(() => {
  delete global.jest
  delete global.window.jest
})

export const localSotrageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}

export {}
