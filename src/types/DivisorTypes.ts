import { colorTypes } from './colorTypes'

export interface DivisorProps {
  orientation: 'vertical' | 'horizontal'
  size: '0.7px' | '1px' | '1.5px' | '2px'
  color?: colorTypes
}
