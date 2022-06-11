import React, { useState } from 'react'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RowHeaders } from './styles'

function CellHeader({ children, align, width, action }: any) {
  const [ordenBy, setOrdenBy] = useState(false)

  const toogleOrdenBy = () => {
    action()
    setOrdenBy(!ordenBy)
  }

  return (
    <RowHeaders align={align} width={width} action={action} onClick={() => action && toogleOrdenBy()}>
      <div>
        {children}
        {action && !ordenBy && <FontAwesomeIcon icon={faCaretDown as any} />}
        {action && ordenBy && <FontAwesomeIcon icon={faCaretUp as any} />}
      </div>
    </RowHeaders>
  )
}

export default CellHeader
