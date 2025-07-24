import * as Style from './styles'
import { ButtonRadiusProps } from '../../types/buttonTypes'

export const ButtonRadius = (props: ButtonRadiusProps) => {
  const { disabled, icon } = props
  return (
    <Style.ButtonRadius disabled={disabled} {...props}>
      {icon}
    </Style.ButtonRadius>
  )
}
