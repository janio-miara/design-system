import styled from 'styled-components'
import { handleColor } from '../../utils/changeColorTheme'
import { DivisorProps } from '../../types/DivisorTypes'
import { theme } from '../Themes'

export const ContainerVertical = styled.div<DivisorProps>`
  width: 100%;
  border-radius: ${theme.spacing.space2};
  background: ${({ color }) => handleColor(color)};
  height: ${({ size }) => size};
`

export const ContainerHorizontal = styled.div<DivisorProps>`
  height: 100%;
  border-radius: ${theme.spacing.space2};
  width: ${({ size }) => size};
  background: ${({ color }) => handleColor(color)};
`
