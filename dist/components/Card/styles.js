import styled from 'styled-components';
import { lighten } from 'polished';
import { theme } from '../Themes';
import { handleColor } from '../../utils/changeColorTheme';
export const Container = styled.div `
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => (color ? lighten(0.48, handleColor(color)) : 'white')};
  border-radius: ${theme.spacing.space3};
  padding: ${theme.spacing.space3};
  box-shadow: ${theme.shadow.shad1};
  transition: transform 0.3s;

  &:hover {
    transform: ${({ effect }) => effect && 'scale(1.01)'};
  }
`;
//# sourceMappingURL=styles.js.map