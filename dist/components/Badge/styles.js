import styled, { css } from 'styled-components';
import { theme } from '../Themes';
const colorBadge = {
    primary: css `
    background: ${theme.colors.blue40};
  `,
    secondary: css `
    color: ${theme.colors.cyan40};
  `,
    error: css `
    background: ${theme.colors.red40};
  `,
    default: css `
    background: ${theme.colors.shade50};
  `,
    warning: css `
    background: ${theme.colors.honey40};
    color: ${theme.colors.white};
  `,
    success: css `
    background: ${theme.colors.mint40};
  `,
};
export const SmallBadge = styled.div `
  ${({ color }) => colorBadge[color || 'warning']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  border-radius: 12px;
  min-width: 10px;
  padding: 3px 6px;
`;
//# sourceMappingURL=styles.js.map