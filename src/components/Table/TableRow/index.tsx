import React from 'react'
import { Td } from './styles'

const TableRow = ({ children, width, maxCaracter, align, action }: any) => {
  return (
    <Td width={width} maxCaracter={maxCaracter} align={align} onClick={() => action && action()}>
      {children}
    </Td>
  )
}

export default TableRow
