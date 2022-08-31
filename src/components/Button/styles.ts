import styled, { css, keyframes } from 'styled-components'

import { ButtonPropsType } from '.'
import { changeColorOutlined, changeBackground } from '../../utils/changeColorTheme'
import { theme } from '../Themes'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonPropsType, 'size' | 'fullWidth' | 'minimal' | 'variant'>

const wrapperModifiers = {
  small: () => css`
    padding: 5px 20px;
  `,
  medium: () => css`
    padding: ${theme.spacing.space2} ${theme.spacing.space4};
  `,
  large: () => css`
    padding: ${theme.spacing.space2} ${theme.spacing.space5};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 8px;
      }
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  `,
  customColor: (color: string) => css`
    background: ${color};
  `,
}

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.button<WrapperProps>`
  ${({ size, fullWidth, hasIcon, minimal, disabled, variant }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    border-radius: ${theme.spacing.space2};
    padding: ${theme.spacing.space2};
    text-decoration: none;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:active {
      opacity: 0.8;
    }

    &:hover {
      opacity: 0.9;
    }

    .animateBx {
      height: 18px;
      width: 18px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: ${rotate} 2s linear infinite;
    }

    ${!!size && wrapperModifiers[size]()};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon()};
    ${disabled && wrapperModifiers.disabled()};
    ${!!minimal && changeColorOutlined[variant!]};
    ${!minimal && changeBackground[variant!]}
  `}
`
