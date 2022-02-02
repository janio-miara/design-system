import React, { useState } from 'react'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RowHeaders } from './styles'

const CellHeader = ({ children, align, width, action }: any) => {
  const [ordenBy, setOrdenBy] = useState(false)

  const toogleOrdenBy = () => {
    action()
    setOrdenBy(!ordenBy)
  }

  return (
    <RowHeaders align={align} width={width} action={action} onClick={() => action && toogleOrdenBy()}>
      <div>
        {children}
        {action && !ordenBy && <FontAwesomeIcon icon={faCaretDown} />}
        {action && ordenBy && <FontAwesomeIcon icon={faCaretUp} />}
      </div>
    </RowHeaders>
  )
}

export default CellHeader
