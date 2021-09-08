import { colorTypes } from './colorTypes'
import { sizeText } from './sizeTypes'

export interface BadgeWordProps {
  text: string
  color: colorTypes
  size: sizeText
  outlined?: boolean
  onClose?: (text: string) => void
}
