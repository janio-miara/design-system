import { sizeText } from './sizeTypes'
import { Color } from './colorTypes'

export interface PropsHighlight {
  text: string
  searchWords: string[]
  color?: Color
  size?: sizeText
}
