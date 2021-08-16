import { sizeText } from './sizeTypes'
import { colorTypes } from './colorTypes'

export interface PropsHighlight {
  text: string
  searchWords: string[]
  color?: colorTypes
  size?: sizeText
}
