import React from 'react'
import { Label } from './styles'

interface props {
  disabled?: boolean
  checked?: boolean
  onChange?: any
  id?: string
}

export const Checkbox = ({ checked, disabled, onChange, id }: props) => {
  return (
    <Label disabled={disabled}>
      <input type="checkbox" id={id} checked={checked} onChange={e => onChange(e.target.checked)} />
      <span />
    </Label>
  )
}
