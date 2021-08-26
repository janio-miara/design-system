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
  display: flex;
  flex-direction: column;
  width: ${({ open }) => (open ? '180px' : '40px')};
  transition: width 0.3s;
  height: 100%;
  padding: 8px;
  box-shadow: ${theme.shadow.shad1};
  z-index: ${theme.zIndex.z5};
  background: ${theme.colors.blue50};
`
