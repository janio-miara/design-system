import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import * as Style from './styles'
import { InputProps } from '../../types/inputTypes'

export const Input = ({
  icon,
  onChange,
  value,
  id,
  onClear,
  placeholder,
  name,
  messageError,
  error,
  type,
  ...props
}: InputProps) => {
  return (
    <Style.ContainerInput error={error}>
      {value && <div className="wrapper-label">{name}</div>}
      <Style.WrapperInput
        icon={icon}
        error={error}
        {...props}
        id={id}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => onChange(e.target)}
      />
      {icon && <div className="wrapper-icon">{icon}</div>}
      {value && onClear && (
        <button type="button" className="wrapper-icon-close" onClick={() => onChange({ id, name, value: '' })}>
          <AiOutlineCloseCircle />
        </button>
      )}
      {error && <Style.WrapperMessage>{messageError}</Style.WrapperMessage>}
    </Style.ContainerInput>
  )
}
