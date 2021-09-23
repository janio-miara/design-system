import React, { useEffect, useState } from 'react'
import { Label } from './styles'

interface props {
  checked: boolean
  onClick?: any
}

export const Checkbox = ({ checked, onClick }: props) => {
  const [status, setStatus] = useState(checked)
  useEffect(() => {
    setStatus(checked)
  }, [checked])

  return (
    <Label onClick={() => setStatus(!status)}>
      <input type="checkbox" checked={status} />
      <span />
    </Label>
  )
}
