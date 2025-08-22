import { sizeBasic } from './sizeTypes'
import { Color } from './colorTypes'


export interface ButtonRadiusProps {
  outlined?: boolean
  color?: Color
  onClick?: () => void
  disabled?: boolean
  size?: sizeBasic
  icon?: React.ReactNode
}
