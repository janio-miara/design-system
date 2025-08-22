import { Color } from './colorTypes'

export interface DivisorProps {
  orientation: 'vertical' | 'horizontal'
  size: '0.7px' | '1px' | '1.5px' | '2px'
  color?: Color
}
