import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { IChildTypes } from '../../types/childrenTypes'

interface PropsBadge {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning'
  children?: IChildTypes
}

const colorBadge = {
  primary: css`
    background: ${theme.colors.blue40};
  `,
  secondary: css`
    color: ${theme.colors.cyan40};
  `,
  error: css`
    background: ${theme.colors.red40};
  `,
  default: css`
    background: ${theme.colors.shade50};
  `,
  warning: css`
    background: ${theme.colors.honey40};
    color: ${theme.colors.white};
  `,
  success: css`
    background: ${theme.colors.mint40};
  `,
}

export const SmallBadge = styled.div<PropsBadge>`
  ${({ color }) => colorBadge[color || 'warning']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  border-radius: 12px;
  min-width: 10px;
  padding: 3px 6px;
`
