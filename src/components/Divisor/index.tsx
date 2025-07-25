
import * as Style from './styles'
import { DivisorProps } from '../../types/DivisorTypes'

export const Divisor = ({ ...props }: DivisorProps) => {
  const { orientation } = props
  return (
    <span>
      {orientation === 'vertical' ? <Style.ContainerVertical {...props} /> : <Style.ContainerHorizontal {...props} />}
    </span>
  )
}
