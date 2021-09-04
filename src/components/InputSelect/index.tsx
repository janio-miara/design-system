import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import * as Style from './styles'
import { InputPropsSelect } from '../../types/inputTypes'
import { Popover } from '..'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export const InputSelect = ({ ...props }: InputPropsSelect) => {
  const { icon, id, placeholder, name, keyValue, defaultValue, object } = props
  const [active, setActive] = useState(false)
  const [value, setValue] = useState(defaultValue || '')
  const ref = useRef()
  const handleChangeActive = (item: any) => {
    setValue(item)
    setActive(false)
  }

  useOnClickOutside(ref, () => setActive(false))

  return (
    <>
      <Style.ContainerInput onBlur={() => active && setActive(false)} onClick={() => setActive(true)}>
        <span className="wrapper-label">{(active || value) && name}</span>
        <Style.WrapperInput
          {...props}
          id={id}
          disabled
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          type="select"
          value={value[keyValue]}
          placeholder={!active ? placeholder : ''}
          onChange={() => console.log()}
        />
        {icon && (
          <span className="wrapper-icon">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        <span className="wrapper-icon-close">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </Style.ContainerInput>
      <Style.ContainerPoper status={active} ref={ref}>
        <Popover ref={ref}>
          {object.map((item: any) => (
            <Style.ValueSelector onClick={() => handleChangeActive(item)}>
              <div>{item[keyValue]}</div>
            </Style.ValueSelector>
          ))}
        </Popover>
      </Style.ContainerPoper>
    </>
  )
}
