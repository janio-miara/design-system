import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import * as Style from './styles'
import { InputProps } from '../../types/inputTypes'

export const Input = ({ ...props }: InputProps) => {
  const { icon, onChange, value, id, onClear } = props

  const [active, setActive] = useState(false)
  return (
    <Style.ContainerInput onBlur={() => active && setActive(false)} onClick={() => setActive(true)}>
      <span className="wrapper-label">{(active || value) && 'Nome'}</span>
      <Style.WrapperInput
        {...props}
        id={id}
        placeholder={!active ? 'Nome' : ''}
        value={value}
        onChange={(e: any) => onChange(e.target)}
      />
      {icon && (
        <span className="wrapper-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}

      {value && onClear && (
        <span className="wrapper-icon-close">
          <FontAwesomeIcon icon={faTimesCircle} onClick={() => onChange({ id, value: '' })} />
        </span>
      )}
    </Style.ContainerInput>
  )
}
