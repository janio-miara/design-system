import React from 'react'
import { Container } from './styles'

export const Popover = ({ children, ref, height }: any) => {
  return (
    <Container ref={ref} height={height}>
      {children}
    </Container>
  )
}
