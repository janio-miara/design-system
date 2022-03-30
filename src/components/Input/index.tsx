import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Text } from '../Text'
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
  scapingWidth,
  scapingHeight,
  ...props
}: InputProps) => {
  const [active, setActive] = useState(false)

  const handleClearValue = (event: any) => {
    event.stopPropagation()
    onChange({ id, value: '' })
    setActive(false)
  }

  return (
    <>
      <Style.ContainerInput
        onBlur={() => active && setActive(false)}
        onClick={() => setActive(true)}
        scapingWidth={scapingWidth}
        scapingHeight={scapingHeight}
      >
        <span className="wrapper-label">{(active || value) && name}</span>
        <Style.WrapperInput
          icon={icon}
          {...props}
          autoComplete="off"
          id={id}
          type={type || 'text'}
          placeholder={!active ? placeholder : ''}
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
            <FontAwesomeIcon icon={faTimesCircle} onClick={(event: any) => handleClearValue(event)} />
          </span>
        )}
      </Style.ContainerInput>
      {error && (
        <Style.WrapperMessage>
          <Text color="error" size="p4" element="p">
            {messageError}
          </Text>
        </Style.WrapperMessage>
      )}
    </>
  )
}
