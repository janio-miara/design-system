import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { InputPropsSelect } from '../../types/inputTypes'

import * as Style from './styles'
import { Popover } from '..'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export function InputSelect({
  icon,
  id,
  placeholder,
  label,
  keyValue,
  defaultValue,
  object,
  onChange,
  ...props
}: InputPropsSelect) {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState(defaultValue || '')
  const ref = useRef()
  const handleChangeActive = (event: any, item: any) => {
    event.stopPropagation()
    setValue(item)
    onChange(item)
    setActive(!active)
  }

  useOnClickOutside(ref, () => setActive(false))

  const handleClick = () => {
    setActive(!active)
  }

  const changeBackground = (select: string, value: string) => {
    if (select === value) {
      return 'selected'
    }
    return 'not-select'
  }

  return (
    <Style.ContainerInput status={active} ref={ref} onBlur={() => active && setActive(false)} onClick={handleClick}>
      <span className="wrapper-label">{(active || value) && label}</span>
      <Style.WrapperInput
        {...props}
        id={id}
        disabled
        icon={icon}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        value={value[keyValue]}
        placeholder={!active ? placeholder : ''}
        onChange={() => console.log()}
      />
      {icon && (
        <span className="wrapper-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span className="wrapper-icon-selector">
        <AiOutlineCaretDown />
      </span>

      <Style.ContainerPoper status={active}>
        <Popover>
          {object.map((item: any) => (
            <Style.ValueSelector
              id={item.id}
              className={changeBackground(item.id, value.id)}
              key={item.id}
              onClick={(event: any) => handleChangeActive(event, item)}
            >
              <>
                {item.icon && item.icon}
                {item.image && <img src={item.image} alt="loading" />}
                {item[keyValue]}
              </>
            </Style.ValueSelector>
          ))}
        </Popover>
      </Style.ContainerPoper>
    </Style.ContainerInput>
  )
}
