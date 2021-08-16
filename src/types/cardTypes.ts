import React from 'react'
import { colorTypes } from './colorTypes'

export interface ICard {
  children?: React.ReactNode | any
  variant?: string
  color?: colorTypes
  onClick?: () => void
  disabled?: boolean
  width?: string
  height?: string
  effect?: boolean
}
