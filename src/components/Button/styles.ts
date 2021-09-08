import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { ButtonProps } from '../../types/buttonTypes'
import { changeBackground, changeColorOutlined } from '../../utils/changeColorTheme'

export const changeSize = {
  small: css`
    font-size: 12px;
    padding: 8px 12px;
  `,
  medium: css`
    font-size: 14px;
    padding: 10px ${theme.spacing.space3};
  `,
  large: css`
    font-size: 16px;
    padding: 12px ${theme.spacing.space4};
  `,
}

export const ContainerButton = styled.button<ButtonProps>`
  color: white;
  font-family: ${theme.fonts.join()};
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  align-items: center;
  justify-items: center;
  line-height: 1;
  ${({ size }) => changeSize[size || 'medium']};
  border: ${({ outlined }) => (outlined ? '0px solid' : '0')};
  ${({ outlined, color }) => outlined && changeColorOutlined[color || 'primary']};
  ${({ color, outlined }) => !outlined && changeBackground[color || 'primary']};
  transition: transform 0.2s;
  svg {
    font-size: 12px;
    margin-right: ${theme.spacing.space2};
  }
  &:hover:not(:disabled) {
    transform: scale(1.02);
    box-shadow: ${theme.shadow.shad1};
  }
  &:active:not(:disabled) {
    transform: scale(1.02);
    box-shadow: ${theme.shadow.shad1};
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .spinner {
    svg {
      animation: ${({ loading }) => loading && 'lds-dual-ring 1.2s linear infinite'};
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`
