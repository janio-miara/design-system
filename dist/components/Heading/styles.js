import styled from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  display: flex;
  align-items: center;
  width: auto;
  .icon {
    margin-right: 8px;
    font-size: x-large;
    color: ${theme.colors.blue40};
  }
  h1,
  h2,
  h3,
  h4,
  p {
    padding: 0;
    margin: 0;
  }
  p {
    margin-top: ${theme.spacing.space1};
  }
`;
//# sourceMappingURL=styles.js.map