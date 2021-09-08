import styled from 'styled-components'
import { theme } from '../Themes'

interface PropsContainer {
  open: boolean
}

export const Container = styled.div<PropsContainer>`
  font-family: ${theme.fonts.join()};
  font-size: 14px;
  position: absolute;
  color: white;
  border-radius: 0 8px 8px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: ${theme.shadow.shad1};
  z-index: ${theme.zIndex.z5};
  background: ${theme.colors.blue40};
  width: ${({ open }) => (open ? '230px' : '55px')};
  transition: width 0.5s;

  .logo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 60px;
    border-bottom: 1px solid ${theme.colors.blue30};
    margin-bottom: 8px;
    img {
      height: 50%;
    }
  }

  .wrapperContainer {
    height: 100%;
    padding: 6px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 0;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
  }
`
