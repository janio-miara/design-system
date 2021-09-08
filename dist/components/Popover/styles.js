import styled from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  font-family: ${theme.fonts.join()};
  z-index: ${theme.zIndex.z4};
  margin-top: ${theme.spacing.space1};
  border-radius: ${theme.spacing.space2};
  box-shadow: ${theme.shadow.shad1};
  border: 1px solid ${theme.colors.shade30};
  background-color: white;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
`;
//# sourceMappingURL=styles.js.map