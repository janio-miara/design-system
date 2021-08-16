import { css } from 'styled-components'
import { theme } from '../components/Themes'

export const changeBackground = {
  primary: css`
    background: ${theme.colors.blue50};
    color: ${theme.colors.white};
  `,
  white: css`
    background: ${theme.colors.white};
    color: ${theme.colors.white};
  `,
  default: css`
    background: ${theme.colors.shade50};
    color: ${theme.colors.white};
  `,
  secondary: css`
    background: ${theme.colors.cyan50};
    color: ${theme.colors.white};
  `,
  success: css`
    background: ${theme.colors.mint50};
    color: ${theme.colors.white};
  `,
  error: css`
    background: ${theme.colors.red50};
    color: ${theme.colors.white};
  `,
  warning: css`
    background: ${theme.colors.honey50};
    color: ${theme.colors.white};
  `,
  lightDark: css`
    background: ${theme.colors.shade50};
    color: ${theme.colors.white};
  `,
  dark: css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  `,
}

export const changeColorOutlined = {
  primary: css`
    border-color: ${theme.colors.blue50};
    background-color: ${theme.colors.blue10};
    color: ${theme.colors.blue60};
  `,
  white: css`
    border-color: ${theme.colors.shade20};
    background-color: ${theme.colors.white};
    color: ${theme.colors.shade20};
  `,
  default: css`
    border-color: ${theme.colors.shade50};
    background-color: ${theme.colors.shade10};
    color: ${theme.colors.blue50};
  `,
  secondary: css`
    border-color: ${theme.colors.cyan50};
    background-color: ${theme.colors.cyan10};
    color: ${theme.colors.cyan60};
  `,
  success: css`
    border-color: ${theme.colors.mint50};
    background-color: ${theme.colors.mint10};
    color: ${theme.colors.mint60};
  `,
  error: css`
    border-color: ${theme.colors.red50};
    background-color: ${theme.colors.red10};
    color: ${theme.colors.red60};
  `,
  warning: css`
    border-color: ${theme.colors.honey50};
    background-color: ${theme.colors.honey10};
    color: ${theme.colors.honey60};
  `,
  lightDark: css`
    border-color: ${theme.colors.shade50};
    background-color: ${theme.colors.shade10};
    color: ${theme.colors.shade60};
  `,
  dark: css`
    border-color: ${theme.colors.black};
    background-color: ${theme.colors.shade20};
    color: ${theme.colors.black};
  `,
}

export const changeColor = {
  primary: css`
    color: ${theme.colors.blue50};
  `,
  white: css`
    color: ${theme.colors.white};
  `,
  default: css`
    color: ${theme.colors.shade50};
  `,
  secondary: css`
    color: ${theme.colors.cyan50};
  `,
  success: css`
    color: ${theme.colors.mint50};
  `,
  error: css`
    color: ${theme.colors.red50};
  `,
  warning: css`
    color: ${theme.colors.honey50};
  `,
  lightDark: css`
    color: ${theme.colors.shade50};
  `,
  dark: css`
    color: ${theme.colors.black};
  `,
}

export const changePaletaColor = {
  primary: css`
    ${theme.colors.blue50};
  `,
  white: css`
    ${theme.colors.white};
  `,
  default: css`
    ${theme.colors.shade50};
  `,
  secondary: css`
    ${theme.colors.cyan50};
  `,
  success: css`
    ${theme.colors.mint50};
  `,
  error: css`
    ${theme.colors.red50};
  `,
  warning: css`
    ${theme.colors.honey50};
  `,
  lightDark: css`
    color: ${theme.colors.shade50};
  `,
  dark: css`
    ${theme.colors.black};
  `,
}
