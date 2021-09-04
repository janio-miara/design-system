import React from 'react'
import { Container } from './styles'

export const Popover = ({ children, ref }: any) => {
  return <Container ref={ref}>{children}</Container>
}
