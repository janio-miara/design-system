import styled from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  ul {
    display: flex;
    cursor: pointer;

    .previous {
      width: 20px;
      a {
        border: none;
        :hover {
          background-color: transparent;
          transform: scale(1.02);
        }
      }
    }

    .next {
      width: 20px;
      a {
        border: none;
        :hover {
          background-color: transparent;
          transform: scale(1.02);
        }
      }
    }
    .selected {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      border-radius: 50%;
      background-color: ${theme.colors.blue40};
      color: white;
      a {
        font-weight: bold;
        :hover {
          background-color: ${theme.colors.blue40};
          transform: scale(1.02);
        }
      }
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      margin-left: 4px;
      margin-right: 4px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        border-radius: 50%;
        border: 1px solid ${theme.colors.blue40};
        opacity: 0.8;
        width: 30px;
        height: 30px;
        transition: transform 0.3s;
        :hover {
          background-color: ${theme.colors.cyan20};
          transform: scale(1.02);
        }
      }
    }
  }
`;
//# sourceMappingURL=styles.js.map