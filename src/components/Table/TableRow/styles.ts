import styled from 'styled-components'

interface ITd {
  width?: string
  maxCaracter?: number
  align?: string
  action?: () => void
}

export const Td = styled.td<ITd>`
  text-align: ${({ align }) => align};
  height: auto;
  width: ${({ width }) => width && width};
  cursor: ${({ action }) => action && 'pointer'};
`
