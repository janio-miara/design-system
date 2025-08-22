import { StyledButtonRadius } from './styles'
import { ButtonRadiusProps } from '../../types/buttonTypes'

export function ButtonRadius({ outlined, color, disabled, size, icon, ...props }: ButtonRadiusProps) {
  return (
    <StyledButtonRadius $outlined={outlined} $color={color} $disabled={disabled} $size={size} {...props}>
      {icon}
    </StyledButtonRadius>
  )
}
