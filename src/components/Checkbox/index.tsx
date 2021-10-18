import React, { useEffect, useState } from 'react'
import { Label } from './styles'

interface props {
  disabled?: boolean
  checked?: boolean
  onClick?: any
}

export const Checkbox = ({ checked, onClick, disabled }: props) => {
  const [status, setStatus] = useState<boolean>(checked || false)
  useEffect(() => {
    if (!disabled) {
      setStatus(checked || false)
    }
  }, [checked])

  return (
    <Label disabled={disabled} onClick={() => disabled && setStatus(!status)}>
      <input type="checkbox" checked={status} />
      <span />
    </Label>
  )
}
