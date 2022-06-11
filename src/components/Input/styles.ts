import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { InputProps } from '../../types/inputTypes'

export const changeSize = {
  small: css`
    padding: 8px;
    font-size: ${theme.fontSizes.p3};
  `,
  medium: css`
    padding: 12px;
    font-size: ${theme.fontSizes.p2};
  `,
  large: css`
    padding: ${theme.spacing.space3};
    font-size: ${theme.fontSizes.p3};
  `,
}

interface Error {
  error?: boolean
}

export const ContainerInput = styled.div<Error>`
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.join()};
  width: 100%;
  height: 60px;
  position: relative;
  margin-bottom: ${({ error }) => (error ? theme.spacing.space2 : '0px')};

  .wrapper-label {
    position: absolute;
    color: ${theme.colors.shade40};
    font-size: 13px;
    left: 14px;
    top: -${theme.spacing.space2};
    background: white;
    padding: 0 2px;
    line-height: ${theme.spacing.space3};
    letter-spacing: 0;
    font-weight: normal;
  }

  .wrapper-icon-close {
    position: absolute;
    right: 10px;
    top: 12px;
    transition: transform 0.3s;
    color: ${theme.colors.shade40};
    :hover {
      color: ${theme.colors.blue40};
      cursor: pointer;
      transform: scale(1.03);
    }
    border: none;
    background: transparent;
  }
  .wrapper-icon {
    position: absolute;
    transition: transform 0.3s;
    left: 0;
    top: 12px;
    padding-left: ${theme.spacing.space3};
    color: ${theme.colors.shade40};
  }
`

export const WrapperInput = styled.input<InputProps>`
  margin: 0;
  min-width: 65px;
  border-radius: ${theme.spacing.space2};
  background: white;
  border: 1px solid transparent;
  box-shadow: ${({ error }) => (!error ? theme.colors.shade40 : theme.colors.red40)} 0 0 0 1.2px inset;
  color: ${theme.colors.shade80};
  ${({ variant }) => (variant ? changeSize[variant] : changeSize.medium)};
  padding-left: ${({ icon }) => (icon ? '40px' : '16px')};
  padding-right: ${({ onClear }) => (onClear ? '40px' : '16px')};

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue40};
    box-shadow: 0 0 2px ${theme.colors.blue40};
  }

  &:-webkit-autofill {
    border: 1px solid ${theme.colors.shade40};
    background: -internal-light-dark(black, white) !important;
    -webkit-box-shadow: 0 0 0 30px ${theme.colors.white} inset;
  }
  &-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    background-color: white !important;
    color: -internal-light-dark(black, white) !important;
  }

  ::placeholder {
    color: ${theme.colors.shade40};
    font-weight: lighter;
  }
`

export const WrapperMessage = styled.div`
  color: ${theme.colors.red40};
  font-size: 12px;
  margin-bottom: ${theme.spacing.space4};
  margin-left: ${theme.spacing.space3};
`
