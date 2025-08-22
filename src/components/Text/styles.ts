import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { changeColor } from '../../utils/changeColorTheme'

const changeStyle = (bold?: boolean, lighter?: boolean) => {
  if (bold) {
    return 'bold'
  }
  if (lighter) {
    return 'lighter'
  }
  return 'normal'
}
export interface ContainerProps {
  $color?: keyof typeof changeColor
  $bold?: boolean
  $lighter?: boolean
  $transform?: string
  $size?: keyof typeof theme.fontSizes
}

export const BaseCss = css<ContainerProps>`
  font-family: ${theme.fonts.join()};
  ${({ $color }) => changeColor[$color || 'dark']};
  font-weight: ${({ $bold, $lighter }) => changeStyle($bold, $lighter)};
  text-transform: ${({ $transform }) => $transform && $transform};
`

export const PTag = styled.p<ContainerProps>`
  ${BaseCss}
  text-transform: ${({ $transform }) => $transform && $transform};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.p3)};
`

export const SpanTag = styled.p<ContainerProps>`
  ${BaseCss}
  text-transform: ${({ $transform }) => $transform && $transform};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.p3)};
`
export const H1Tag = styled.h1<ContainerProps>`
  ${BaseCss}
  text-transform: ${({ $transform }) => ($transform ? $transform : 'uppercase')};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.p3)};
`

export const H2Tag = styled.h2<ContainerProps>`
  ${BaseCss}
  text-transform: ${({ $transform }) => ($transform ? $transform : 'uppercase')};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.p3)};
`

export const H3Tag = styled.h3<ContainerProps>`
  ${BaseCss}
  text-transform: ${({ $transform }) => ($transform ? $transform : 'uppercase')};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.p3)};
`

export const H4Tag = styled.h4<ContainerProps>`
  ${BaseCss}
  text-transform: ${({ $transform }) => ($transform ? $transform : 'uppercase')};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.p3)};
`
