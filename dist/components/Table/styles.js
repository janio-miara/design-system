import styled, { css } from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  ${({ visible }) => css `
    display: block;
    height: 100%;
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
      max-height: calc(100vh - 210px);
      overflow-y: auto;
    }

    .Empty {
      width: 100%;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    .loading {
      margin-top: 40px;
    }
  `}
`;
//# sourceMappingURL=styles.js.map