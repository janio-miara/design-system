import { sizeText } from './sizeTypes'
import { Color } from './colorTypes'

export interface TabsTypes extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: string[]
  onChange?: (tab: string) => void
  disabled?: boolean
  colorActive?: Color
  colorDefault?: Color
  size?: sizeText
}
