import styled from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  background: transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const ContainerEmpty = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
  text-align: center;

  p {
    margin: 4px;
  }
  img {
    width: 20%;
  }

  a {
    color: ${theme.colors.cyan30};
    margin-left: 5px;
  }
`;
//# sourceMappingURL=styles.js.map