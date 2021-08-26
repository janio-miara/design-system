import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styles'

const Modulo = ({ open }: any) => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <Container open={open} active={active} onClick={() => setActive(!active)}>
      <FontAwesomeIcon icon={faTimesCircle} />
      {open && <span className="title">Prospector</span>}
    </Container>
  )
}

export default Modulo
