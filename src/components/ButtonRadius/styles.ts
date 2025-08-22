import styled from 'styled-components'
import { changeBackground, changeColorOutlined } from '../../utils/changeColorTheme'
import { sizeBasic } from '../../types/sizeTypes'
import { Color } from '../../types/colorTypes'

export const ContainerButtonRadius = styled.button`
  border-radius: 50%;
  transition: transform 0.3s;
  cursor: pointer;
`

const sizeButton = (size: sizeBasic) => {
  if (size === 'small') {
    return '25px'
  }
  if (size === 'large') {
    return '36px'
  }
  return '30px'
}


export interface StyledButtonRadiusProps {
  $outlined?: boolean
  $color?: Color
  $disabled?: boolean
  $size?: sizeBasic
}


export const StyledButtonRadius = styled(ContainerButtonRadius)<StyledButtonRadiusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $outlined }) => ($outlined ? '1px solid' : '0')};
  ${({ $outlined, $color }) => $outlined && changeColorOutlined[$color || 'primary']};
  ${({ $color, $outlined }) => !$outlined && changeBackground[$color || 'primary']};
  width: ${({ $size }) => ($size ? sizeButton($size) : '30px')};
  height: ${({ $size }) => ($size ? sizeButton($size) : '30px')};

  svg {
    width: ${({ $size }) => ($size === 'small' ? '10px' : '14px')};
    height: ${({ $size }) => ($size === 'small' ? '10px' : '14px')};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: scale(1.03);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }

  :active:not(:disabled) {
    transform: scale(1.01);
    opacity: 0.8;
  }
`
