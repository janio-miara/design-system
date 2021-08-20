import styled from 'styled-components'
import { lighten } from 'polished'
import { IButton } from '../../Types/buttonTypes'
import handleColor from '../../utils/handleColor'
import { sizeBasic } from '../../Types/sizeTypes'

export const ContainerButtonRadius = styled.span`
  border-radius: 50%;
  transition: transform 0.3s;
  cursor: pointer;
`

const sizeButton = (size: sizeBasic) => {
  if (size === 'small') {
    return '21px'
  }
  if (size === 'large') {
    return '36px'
  }
  return '28px'
}

export const ButtonRadius = styled(ContainerButtonRadius)<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ color, variant }) => (variant === 'outlined' ? `1.4px solid ${handleColor(color)}` : 'none')};
  background-color: ${({ color, variant }) => handleColor(color, variant)};
  color: ${({ color, variant }) => (variant === 'outlined' ? handleColor(color) : 'white')};
  width: ${({ size }) => sizeButton(size)};
  height: ${({ size }) => sizeButton(size)};

  svg {
    width: ${({ size }) => (size === 'small' ? '10px' : '13px')};
    height: ${({ size }) => (size === 'small' ? '10px' : '13px')};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: scale(1.03);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-color: ${({ variant, color }) => variant !== 'outlined' && lighten(0.1, handleColor(color))};
    background-color: ${({ variant, color }) => variant !== 'outlined' && lighten(0.1, handleColor(color))};
  }

  :active:not(:disabled) {
    transform: scale(1.01);
    border-color: ${({ variant, color }) => variant !== 'outlined' && handleColor(color)};
    background-color: ${({ variant, color }) => variant !== 'outlined' && handleColor(color)};
  }
`
