import styled from 'styled-components'
import { theme } from '../../Themes'

interface PropsContainer {
  open: boolean
  active: boolean
}

export const Container = styled.div<PropsContainer>`
  display: flex;
  justify-content: ${({ open }) => (!open ? 'center' : 'left')};
  height: ${({ active }) => (active ? '100px' : '20px')};

  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#5a7090' : 'transparent')};
  padding: ${theme.spacing.space2};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  &:hover {
    opacity: 1;
    background-color: #5a7090;
  }
  .title {
    margin-left: 8px;
  }
`
