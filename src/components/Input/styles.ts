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

export const ContainerInput = styled.div`
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
    line-height: ${theme.spacing.space3};
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
    color: ${theme.colors.shade40};
  }
`

export const WrapperInput = styled.input<InputProps>`
  width: 100%;
  min-width: 65px;
  border-radius: ${theme.spacing.space2};
  background: white;
  border: 1px solid transparent;
  box-shadow: ${({ error }) => (!error ? theme.colors.shade40 : theme.colors.red40)} 0 0 0 1.2px inset;
  color: ${theme.colors.shade70};
  ${({ variant }) => (variant ? changeSize[variant] : changeSize.medium)};
  padding-left: ${({ icon }) => (icon ? '40px' : '16px')};

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue40};
    box-shadow: 0 0 2px ${theme.colors.blue40};
  }

  &:-webkit-autofill {
    background: -internal-light-dark(black, white) !important;
    -webkit-box-shadow: 0 0 0 30px ${theme.colors.shade05} inset;
    -webkit-text-fill-color: ${theme.colors.shade80} !important;
  }

  ::placeholder {
    color: ${theme.colors.shade50};
    font-weight: lighter;
  }
`

export const WrapperMessage = styled.div`
  margin-top: -${theme.spacing.space2};
  margin-left: ${theme.spacing.space1};
`
