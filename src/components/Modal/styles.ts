import styled from 'styled-components'

import { IFullScreen, IContainer } from './index'
import { theme } from '../Themes'

export const FullScreen = styled.div<IFullScreen>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);

  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  animation: 0.5s fadeIn ease-in-out forwards;

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`

const sizeWidth = (size: string) => {
  switch (size) {
    case 'small':
      return '40%'
    case 'medium':
      return '70%'
    case 'large':
      return '95%'
    default:
      return 'auto'
  }
}

export const Container = styled.div<IContainer>`
  display: flex;
  background-color: #fff;
  width: ${({ size }) => sizeWidth(size)};
  height: ${({ size }) => sizeWidth(size)};
  border-radius: 0 0 8px 8px;
  flex-direction: column;

  .body {
    overflow: auto;
    padding: ${theme.spacing.space3};
    height: calc(100% - 60px);
  }

  header {
    margin-top: -8px;
    border-radius: 8px 8px 0 0;
    padding: ${theme.spacing.space3};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.blue40};
    height: ${theme.spacing.space6};

    .close {
      span {
        border: none;
        opacity: 0.6;
        :hover {
          opacity: 1;
        }
      }
    }

    .logo {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 1rem;
      color: #fff;
      font-size: ${theme.fontSizes.small};
    }

    svg {
      color: #fff;
    }
  }

  footer {
    padding: ${theme.spacing.space3};
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-end;

    button {
      margin-left: ${theme.spacing.space2};
    }

    .cancel {
      border: 1px solid #cecece;
      background-color: #fff;
    }

    .save {
      border: 1px solid #649f22;
      background-color: #649f1f;
      color: #fff;
    }
  }

  @media (max-width: 820px) {
    width: ${({ size }) => sizeWidth(size)};
    min-height: ${({ size }) => sizeWidth(size)};
  }
`
