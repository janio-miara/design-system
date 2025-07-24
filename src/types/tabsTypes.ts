import { sizeText } from './sizeTypes'
import { colorTypes } from './colorTypes'

export interface TabsTypes extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: string[]
  onChange?: (tab: string) => void
  disabled?: boolean
  colorActive?: colorTypes
  colorDefault?: colorTypes
  size?: sizeText
}
