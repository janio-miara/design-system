import React from 'react'
import { Color } from './colorTypes'

export interface ICard {
  children?: React.ReactNode
  variant?: string
  color?: Color
  onClick?: () => void
  disabled?: boolean
  width?: string
  height?: string
  effect?: boolean
}
