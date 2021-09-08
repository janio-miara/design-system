import styled from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  width: auto;
`;
export const Wrapper = styled.div `
  font-family: ${theme.fonts.join()};
  background-color: ${theme.colors.blue30};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 600;
  height: 40px;
  width: 40px;
  text-transform: uppercase;
  background-color: ${({ active }) => active && theme.colors.mint40};

  :hover {
    background-color: ${theme.colors.mint40};
  }
`;
//# sourceMappingURL=styles.js.map