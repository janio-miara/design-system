import React from 'react'
import { sizeBasic } from './sizeTypes'
import { colorTypes } from './colorTypes'

export interface ButtonProps {
  loading?: boolean
  outlined?: boolean
  children?: React.ReactNode
  color?: colorTypes
  onClick?: () => void
  disabled?: boolean
  size?: sizeBasic
  icon?: any
  props?: React.HTMLProps<HTMLButtonElement>
}

export interface ButtonRadiusProps {
  outlined?: boolean
  color?: colorTypes
  onClick?: () => void
  disabled?: boolean
  size?: sizeBasic
  icon?: any
  props?: any
}
