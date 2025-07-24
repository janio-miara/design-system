import { sizeBasic } from './sizeTypes'
import { colorTypes } from './colorTypes'


export interface ButtonRadiusProps {
  outlined?: boolean
  color?: colorTypes
  onClick?: () => void
  disabled?: boolean
  size?: sizeBasic
  icon?: React.ReactNode
}
