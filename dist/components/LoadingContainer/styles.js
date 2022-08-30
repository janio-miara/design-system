import styled from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;

  p {
    margin: 8px;
    color: ${({ color }) => color || theme.colors.blue40};
  }
  svg {
    color: ${({ color }) => color || theme.colors.blue40};
    width: 50px;
    height: 50px;
    animation: normal rotate-center 1s ease-in-out infinite both;
  }

  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
//# sourceMappingURL=styles.js.map