import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ContainerInput, WrapperInput } from './styles'
import { InputProps } from '../../types/inputTypes'

export const Input = ({ ...props }: InputProps) => {
  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)
  return (
    <ContainerInput onBlur={() => active && setActive(false)} onClick={() => setActive(true)}>
      <span className="wrapper-label">{(active || value) && 'Nome'}</span>
      <WrapperInput
        {...props}
        placeholder={!active ? 'Nome' : ''}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <span className="wrapper-icon">
        <FontAwesomeIcon icon={faTimesCircle} />
      </span>
      {value && (
        <span className="wrapper-icon-close">
          <FontAwesomeIcon icon={faTimesCircle} onClick={() => setValue('')} />
        </span>
      )}
    </ContainerInput>
  )
}
