import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'
import 'jest-canvas-mock'
import { configure } from '@testing-library/react'

configure({ testIdAttribute: 'data-test-id' })

Object.defineProperty(window.document, 'cookie', {
  writable: true,
  value: '',
})

export const localSotrageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
