import React from 'react'
import { Label } from './styles'

interface props {
  disabled?: boolean
  checked?: boolean
  onChange?: any
}

export const Checkbox = ({ checked, disabled, onChange }: props) => {
  return (
    <Label disabled={disabled}>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
      <span />
    </Label>
  )
}
