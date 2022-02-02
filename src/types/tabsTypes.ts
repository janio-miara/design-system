import { sizeText } from './sizeTypes'
import { colorTypes } from './colorTypes'

export interface TabsTypes {
  tabs: string[]
  onChange?: (tab: string) => void
  disabled?: boolean
  colorActive?: colorTypes
  colorDefault?: colorTypes
  size?: sizeText
  props?: any
}

// export interface TabsTypes {
//   tabs: string[]
//   // eslint-disable-next-line no-unused-vars
//   onChange?: (tab: string) => void
//   disabled?: boolean
//   colorActive?: colorTypes
//   colorDefault?: colorTypes
//   size?: sizeText
//   props?: any
//   tabActive?: string
//   // eslint-disable-next-line no-unused-vars
//   onClickTab?: (tab: string) => void
// }
