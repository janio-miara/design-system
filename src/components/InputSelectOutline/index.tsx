import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import * as Style from './styles'
import { InputPropsSelect } from '../../types/inputTypes'
import { Popover } from '..'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export function InputSelectOutline({
  icon,
  id,
  placeholder,
  keyValue,
  defaultValue,
  object,
  onChange,
  ...props
}: InputPropsSelect) {
  const [active, setActive] = useState<boolean>(false)
  const [value, setValue] = useState(defaultValue || '')
  const ref = useRef()

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  const handleChangeActive = (event: any, item: any) => {
    event.stopPropagation()
    setValue(item)
    onChange(item)
    setActive(false)
  }

  useOnClickOutside(ref, () => setActive(false))

  const changeBackground = (select: string, value: string) => {
    if (select === value) {
      return 'selected'
    }
    return 'not-select'
  }

  return (
    <span>
      <Style.ContainerInput
        status={active}
        ref={ref}
        onBlur={() => active && setActive(false)}
        onClick={() => setActive(!active)}
      >
        <Style.WrapperInput
          icon={icon}
          {...props}
          id={id}
          disabled
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          value={value[keyValue]}
          placeholder={!active ? placeholder : ''}
        />
        {icon && (
          <span className="wrapper-icon">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        <span className="wrapper-icon-selector">
          <FontAwesomeIcon icon={faCaretDown as any} />
        </span>

        <Style.ContainerPoper status={active}>
          <Popover>
            {object.map((item: any) => (
              <Style.ValueSelector
                key={item.id + keyValue}
                className={changeBackground(item.value, value.value)}
                onClick={(event: any) => handleChangeActive(event, item)}
              >
                {item[keyValue]}
              </Style.ValueSelector>
            ))}
          </Popover>
        </Style.ContainerPoper>
      </Style.ContainerInput>
      {!active && (
        <Style.WrapperMessage>
          <div>Empresa Selecionada</div>
        </Style.WrapperMessage>
      )}
    </span>
  )
}
