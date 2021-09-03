import styled from 'styled-components'
import { theme } from '../Themes'
import { BadgeWordProps } from '../../types/BaggeWordTypes'
import { changeBackground, changeColor, changeColorOutlined, changePaletaColor } from '../../utils/changeColorTheme'

export const Container = styled.div<BadgeWordProps>`
  font-family: ${theme.fonts.join()};
  border-radius: 10px;
  margin: ${theme.spacing.space1} 0;
  width: fit-content;
  margin-right: ${theme.spacing.space2};
  padding: 6px ${theme.spacing.space3};
  height: fit-content;
  ${({ outlined, color }) =>
    outlined ? changeColorOutlined[color || 'primary'] : changeBackground[color || 'primary']};
  border: 1px solid ${({ color, outlined }) => outlined && changePaletaColor[color || 'primary']};
  ${({ color, outlined }) => (!outlined ? 'white' : changeColor[color || 'primary'])};
  font-size: ${({ size }) => (size ? theme.fontSizes[size] : theme.fontSizes.t1)};

  button {
    ${({ color, outlined }) => (!outlined ? changeColor.white : changeColor[color || 'primary'])};
    border: none;
    background-color: transparent;
    transform: scale(1.03);
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    margin-left: ${theme.spacing.space1};
    transition: transform 0.3s;
    opacity: 0.8;
    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }
    &:active {
      opacity: 0.4;
    }
  }
`
