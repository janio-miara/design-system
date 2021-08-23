import styled from 'styled-components';
import { theme } from '../Themes';
import { changeColor } from '../../utils/changeColorTheme';
export const Container = styled.span `
  font-family: ${theme.fonts.join()};
  font-weight: normal;
  ${({ color }) => changeColor[color || 'dark']};
  p,
  span {
    font-weight: ${({ bold }) => bold && 'bold'};
    text-transform: ${({ transform }) => transform && transform};
    font-size: ${({ size }) => (size ? theme.fontSizes[size] : theme.fontSizes.t1)};
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