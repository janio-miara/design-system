import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { InputProps } from '../../types/inputTypes'

export const changeSize = {
  small: css`
    padding: 8px;
    font-size: ${theme.fontSizes.t2};
  `,
  medium: css`
    padding: 14px;
    font-size: ${theme.fontSizes.t2};
  `,
  large: css`
    padding: 16px;
    font-size: ${theme.fontSizes.t3};
  `,
}

export const ContainerInput = styled.div<InputProps>`
  font-family: ${theme.fonts.join()};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .wrapper-label {
    position: absolute;
    color: ${theme.colors.shade50};
    font-size: 13px;
    left: 14px;
    top: -${theme.spacing.space2};
    background: white;
    padding: 0 2px;
    line-height: 16px;
    letter-spacing: 0;
    font-weight: normal;
  }

  .wrapper-icon-close {
    transition: transform 0.3s;
    right: 0;
    position: absolute;
    padding-right: ${theme.spacing.space3};
    color: ${theme.colors.shade40};
    :hover {
      color: ${theme.colors.blue40};
      cursor: pointer;
      transform: scale(1.03);
    }
  }
  .wrapper-icon {
    transition: transform 0.3s;
    left: 0;
    position: absolute;
    padding-left: ${theme.spacing.space3};
    color: ${theme.colors.blue50};
  }
`

export const WrapperLabel = styled.label`
  text-align: left;
  font-size: 12px;
  line-height: ${theme.spacing.space3};
  letter-spacing: 0;
  font-weight: normal;
  color: rgb(114, 119, 128);
  text-transform: none;
  left: ${theme.spacing.space2};
  z-index: 2;

  position: relative;
  padding: 0 ${theme.spacing.space2};
  width: auto;
  white-space: nowrap;
  background: linear-gradient(transparent 43%, rgb(250, 250, 251) 43%, rgb(250, 250, 251) 100%);
`

export const WrapperInput = styled.input<InputProps>`
  width: 100%;
  min-width: 65px;
  border-radius: ${theme.spacing.space2};
  background: white;
  border: 1px solid transparent;
  box-shadow: ${theme.colors.shade40} 0 0 0 1.2px inset;
  color: ${theme.colors.shade60};
  ${({ variant }) => variant && changeSize[variant || 'medium']}

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue50};
    box-shadow: 0 0 2px ${theme.colors.blue50};
  }
`
