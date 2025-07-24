
import { Label } from './styles'

export interface CheckboxProps {
  disabled?: boolean
  checked?: boolean
  onChange?: (checked: boolean) => void
  id?: string
}

export const Checkbox = ({ checked, disabled, onChange, id }: CheckboxProps) => {
  return (
    <Label disabled={disabled}>
      <input type="checkbox" id={id} checked={checked} onChange={e => onChange && onChange(e.target.checked)} />
      <span />
    </Label>
  )
}
