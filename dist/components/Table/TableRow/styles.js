import styled from 'styled-components';
export const Td = styled.td `
  text-align: ${({ align }) => align};
  height: auto;
  width: ${({ width }) => width && width};
  cursor: ${({ action }) => action && 'pointer'};
`;
//# sourceMappingURL=styles.js.map