import styled from 'styled-components';
import { theme } from '../Themes';
import { changeColor } from '../../utils/changeColorTheme';
const changeStyle = (bold, lighter) => {
    if (bold) {
        return 'bold';
    }
    if (lighter) {
        return 'lighter';
    }
    return 'normal';
};
export const Container = styled.span `
  font-family: ${theme.fonts.join()};
  ${({ color }) => changeColor[color || 'dark']};
  p,
  span {
    ${({ color }) => changeColor[color || 'dark']};
    font-weight: ${({ bold, lighter }) => changeStyle(bold, lighter)};
    text-transform: ${({ transform }) => transform && transform};
    font-size: ${({ size }) => (size ? theme.fontSizes[size] : theme.fontSizes.p3)};
  }
  h1,
  h2,
  h3,
  h4 {
    text-transform: uppercase;
    word-spacing: 4px;
    letter-spacing: -0.6px;
  }
`;
//# sourceMappingURL=styles.js.map