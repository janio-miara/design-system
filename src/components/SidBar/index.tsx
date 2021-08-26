import React, { useState } from 'react'
import { Container } from './styles'
import Modulo from './Modulos'

export const SidBar = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Container open={open} onClick={() => setOpen(!open)} onMouseOver={() => setOpen(true)}>
      <Modulo open={open} />
    </Container>
  )
}
