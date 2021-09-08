import styled from 'styled-components';
import { theme } from '../../Themes';
export const Container = styled.div `
  display: flex;
  align-items: center;
  min-height: 35px;
  margin: 4px 0;
  border-radius: 8px;
  cursor: pointer;
  justify-content: ${({ open }) => (!open ? 'center' : 'left')};
  background-color: ${({ active }) => (active ? theme.colors.cyan30 : 'transparent')};
  opacity: ${({ active }) => (active ? 1 : 0.9)};

  .wrapper {
    padding: 12px 16px;
  }

  &:hover {
    opacity: 1;
    background-color: ${({ active }) => (active ? theme.colors.cyan30 : '#275881')};
  }

  .title {
    margin-left: 8px;
  }
`;
export const ContainerLink = styled.div `
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${({ activeLink, activePaiLink }) => (activeLink || activePaiLink ? '#275881' : 'transparent')};
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;

  :hover {
    background-color: #275881;
  }

  .wrapperTitle {
    min-height: 42px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: ${({ open }) => (!open ? 'center' : 'space-between')};
    svg {
      width: 20px;
    }
  }
  .title {
    margin-left: 8px;
  }
`;
export const WrapperLink = styled.div `
  display: flex;
  align-items: center;
  min-height: 35px;
  margin: 4px;
  border-radius: 8px;
  justify-content: ${({ open }) => (!open ? 'center' : 'left')};
  background-color: ${({ active }) => (active ? theme.colors.cyan30 : 'transparent')};

  .titleLink {
    margin-left: 12px;
    font-size: 13px;
  }

  :hover {
    background-color: ${theme.colors.cyan30};
  }
  :active {
    background-color: ${theme.colors.cyan30};
    opacity: 0.8;
  }

  .wrapper {
    margin-left: ${({ open }) => (!open ? '0' : '12px')};

    svg {
      font-size: 15px;
    }
  }
`;
//# sourceMappingURL=styles.js.map