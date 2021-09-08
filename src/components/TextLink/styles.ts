import styled from 'styled-components'
import { theme } from '../Themes'
import { changeColor } from '../../utils/changeColorTheme'
import { TextLinkProps } from '../../types/textTypes'

export const Container = styled.a<TextLinkProps>`
  font-family: ${theme.fonts.join()};
  ${({ disabled }) => (!disabled ? changeColor.secondary : changeColor.lightDark)};
  font-weight: bold;
  font-size: ${({ size }) => (size ? theme.fontSizes[size] : theme.fontSizes.t1)};
  text-transform: ${({ transform }) => transform && transform};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  text-decoration: underline;
  display: flex;

  :hover {
    color: ${({ disabled }) => !disabled && theme.colors.cyan40};
  }
  :active {
    color: ${({ disabled }) => !disabled && theme.colors.cyan40};
  }
  span {
    margin-right: ${theme.spacing.space1};
    svg {
    }
  }
`
