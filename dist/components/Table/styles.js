import styled, { css } from 'styled-components';
import { theme } from '../Themes';
export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const Container = styled.div `
  ${({ visible }) => css `
    display: block;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    border-radius: ${theme.spacing.space2};
    box-shadow: #00000063 1px 1px 6px;
    overflow: hidden;

    .rdt_TableRow {
      min-height: unset;
      padding-bottom: ${theme.spacing.space1};
      padding-top: ${theme.spacing.space1};
    }

    .tabela-padrao {
      opacity: ${visible ? '1' : '0'};
      animation: 400ms fadeIn ease-out forwards;
    }

    .rdt_TableBody {
      overflow-y: auto;
      max-height: calc(100vh - 210px);
    }

    .Empty {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loading {
      height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  `}
`;
export const Paginate = styled.div `
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: content-box;
`;
//# sourceMappingURL=styles.js.map