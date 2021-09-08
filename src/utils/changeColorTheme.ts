import { css } from 'styled-components'
import { theme } from '../components/Themes'
import { colorTypes } from '../types/colorTypes'

const changeBackground = {
  primary: css`
    background: ${theme.colors.blue40};
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
    background: ${theme.colors.cyan40};
    color: ${theme.colors.white};
  `,
  success: css`
    background: ${theme.colors.mint40};
    color: ${theme.colors.white};
  `,
  error: css`
    background: ${theme.colors.red40};
    color: ${theme.colors.white};
  `,
  warning: css`
    background: ${theme.colors.honey40};
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

const changeColorOutlined = {
  primary: css`
    border-color: ${theme.colors.blue40};
    background-color: ${theme.colors.blue10};
    color: ${theme.colors.blue40};
  `,
  white: css`
    border-color: ${theme.colors.shade20};
    background-color: ${theme.colors.white};
    color: ${theme.colors.shade20};
  `,
  default: css`
    border-color: ${theme.colors.shade50};
    background-color: ${theme.colors.shade10};
    color: ${theme.colors.blue40};
  `,
  secondary: css`
    border-color: ${theme.colors.cyan40};
    background-color: ${theme.colors.cyan10};
    color: ${theme.colors.cyan40};
  `,
  success: css`
    border-color: ${theme.colors.mint40};
    background-color: ${theme.colors.mint10};
    color: ${theme.colors.mint40};
  `,
  error: css`
    border-color: ${theme.colors.red40};
    background-color: ${theme.colors.red10};
    color: ${theme.colors.red40};
  `,
  warning: css`
    border-color: ${theme.colors.honey40};
    background-color: ${theme.colors.honey10};
    color: ${theme.colors.honey40};
  `,
  lightDark: css`
    border-color: ${theme.colors.shade50};
    background-color: ${theme.colors.shade10};
    color: ${theme.colors.shade60};
  `,
  dark: css`
    border-color: ${theme.colors.black};
    background-color: ${theme.colors.shade10};
    color: ${theme.colors.black};
  `,
}

const changeColor = {
  primary: css`
    color: ${theme.colors.blue40};
  `,
  white: css`
    color: ${theme.colors.white};
  `,
  default: css`
    color: ${theme.colors.shade50};
  `,
  secondary: css`
    color: ${theme.colors.cyan40};
  `,
  success: css`
    color: ${theme.colors.mint40};
  `,
  error: css`
    color: ${theme.colors.red40};
  `,
  warning: css`
    color: ${theme.colors.honey40};
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
    ${theme.colors.blue40};
  `,
  white: css`
    ${theme.colors.white};
  `,
  default: css`
    ${theme.colors.shade50};
  `,
  secondary: css`
    ${theme.colors.cyan40};
  `,
  success: css`
    ${theme.colors.mint40};
  `,
  error: css`
    ${theme.colors.red40};
  `,
  warning: css`
    ${theme.colors.honey40};
  `,
  lightDark: css`
    color: ${theme.colors.shade50};
  `,
  dark: css`
    ${theme.colors.black};
  `,
}

const handleColor = (color: colorTypes) => {
  if (color === 'primary') {
    return theme.colors.blue40
  }
  if (color === 'white') {
    return 'white'
  }
  if (color === 'default') {
    return theme.colors.shade50
  }
  if (color === 'secondary') {
    return theme.colors.cyan40
  }
  if (color === 'success') {
    return theme.colors.mint40
  }
  if (color === 'error') {
    return theme.colors.red40
  }
  if (color === 'warning') {
    return theme.colors.honey40
  }
  if (color === 'lightDark') {
    return theme.colors.shade50
  }
  if (color === 'dark') {
    return 'black'
  }
  return theme.colors.shade50
}

export { handleColor, changeColor, changeColorOutlined, changeBackground }
