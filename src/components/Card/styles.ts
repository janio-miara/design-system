import styled from 'styled-components'
import { lighten, transparentize } from 'polished'
import { theme } from '../Themes'
import { ICard } from '../../types/cardTypes'
import { changePaletaColor } from '../../utils/changeColorTheme'

export const Container = styled.div<ICard>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => changePaletaColor[color || ' white']};
  border-radius: ${theme.spacing.space3};
  padding: ${theme.spacing.space3};
  box-shadow: ${theme.shadow.shad1};
  transition: transform 0.3s;

  &:hover {
    background-color: ${({ color, effect }) => {
      return color && effect ? lighten(0.2, transparentize(0.9, changePaletaColor[color || ' white'])) : 'white'
    }}} 
    transform: ${({ effect }) => effect && 'scale(1.01)'};
  }
`
// background-color: ${({ color }) => {
//     return color ? transparentize(0.9, changePaletaColor[color || ' white']) : 'white'
// }};

// background-color: ${({ color, effect }) => {
//     return color && effect ? lighten(0.2, transparentize(0.9, changePaletaColor[color || ' white'])) : 'white'
// }}}
