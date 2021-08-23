import styled from 'styled-components'
import { changeBackground } from '../../utils/changeColorTheme'
import { DivisorProps } from '../../types/DivisorTypes'
import { theme } from '../Themes'

export const ContainerVertical = styled.div<DivisorProps>`
  width: 100%;
  border-radius: ${theme.spacing.space2};
  ${({ color }) => changeBackground[color || 'primary']};
  height: ${({ size }) => size};
`

export const ContainerHorizontal = styled.div<DivisorProps>`
  height: 100%;
  border-radius: ${theme.spacing.space2};
  width: ${({ size }) => size};
  ${({ color }) => changeBackground[color || 'primary']};
`
