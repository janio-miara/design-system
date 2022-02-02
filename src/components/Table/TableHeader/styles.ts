import styled from 'styled-components'
import { theme } from '../../Themes'

interface IThHead {
  align?: string
  width?: string
  action?: boolean
}

export const RowHeaders = styled.td<IThHead>`
  align-items: ${({ align }) => align};
  width: ${({ width }) => width};
  cursor: ${({ action }) => action && 'pointer'};

  div {
    display: flex;
    width: 100%;
    text-align: center;
    justify-items: center;
    justify-content: ${({ align }) => align};
    align-items: ${({ align }) => align};
  }

  svg {
    margin-left: ${theme.spacing.space1};
  }
`
