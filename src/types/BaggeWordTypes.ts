import { Color } from './colorTypes'
import { sizeText } from './sizeTypes'

export interface BadgeWordProps {
  text: string
  color: Color
  size: sizeText
  outlined?: boolean
  onClose?: (text: string) => void
}
