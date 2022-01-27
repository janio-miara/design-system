import styled, { css } from 'styled-components';
import { theme } from '../Themes';
import { changeBackground } from '../../utils/changeColorTheme';
export const changeFontWeight = {
    bold: css `
    font-weight: bold;
  `,
    lighter: css `
    font-weight: lighter;
  `,
    normal: css `
    font-weight: normal;
  `,
};
const changeBackgroundNew = {
    lightDark: css `
    background: ${theme.colors.shade40};
    color: ${theme.colors.white};
  `,
};
export const Container = styled.div `
  font-family: ${theme.fonts.join()};
  ${({ fontWeight }) => changeFontWeight[fontWeight || 'normal']};
  font-size: ${({ size }) => (size ? theme.fontSizes[size] : '12px')};
  .highlight {
    border-radius: 4px;
    padding: 2px 6px;
    ${({ color }) => (color === 'lightDark' ? changeBackgroundNew.lightDark : changeBackground[color || 'primary'])};
    color: white;
  }
`;
//# sourceMappingURL=styles.js.map