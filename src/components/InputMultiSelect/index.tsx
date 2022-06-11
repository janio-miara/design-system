import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import * as Style from './styles'
import { InputPropsSelect } from '../../types/inputTypes'
import { Badge, Checkbox, Popover } from '..'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export function InputMultiSelect({
  icon,
  id,
  placeholder,
  label,
  keyValue,
  object,
  height,
  onChange,
  defaultValue,
}: InputPropsSelect) {
  const [active, setActive] = useState(false)

  const [activeAll, setActiveAll] = useState(false)
  const [value, setValue] = useState<any[]>(object)
  const ref = useRef()

  useEffect(() => {
    if (defaultValue) {
      setValue(
        value?.map((el: any) => {
          return { ...el, check: !!defaultValue.find((ell: any) => el.id === ell) }
        }),
      )
    }
  }, [])

  const handleChangeActiveNew = (checked: any, item: any) => {
    console.log(checked, item)
    if (activeAll) {
      setActiveAll(false)
    }
    const newValue = value?.map((el: any) => (el.id === item.id ? { ...el, check: checked } : { ...el }))
    const dados = newValue.filter((object: any) => object.check)
    onChange(dados)
    setValue(newValue)
  }

  const handleCount = () => {
    return value.filter((objects: any) => objects.check).map((el: any) => el[keyValue]).length
  }

  const handleSelectAll = () => {
    const newValue = value?.map((el: any) => (!el.disabled ? { ...el, check: !activeAll } : el))
    setValue(newValue)
    const dados = newValue.filter((object: any) => object.check)
    onChange(dados)
    setActiveAll(!activeAll)
  }

  const handleTratamentoValue = () => {
    return value
      .filter((object: any) => object.check)
      .map((el: any) => el[keyValue])
      .join(', ')
  }

  const closeInput = () => {
    setActive(false)
  }

  useOnClickOutside(ref, closeInput)

  return (
    <Style.ContainerInput status={active} onClick={() => setActive(true)}>
      <span className="wrapper-label">{(active || value) && label}</span>
      <Style.WrapperInput
        icon={icon}
        id={id}
        disabled
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        value={handleTratamentoValue()}
        placeholder={!active ? placeholder : ''}
        onChange={onChange}
      />
      {icon && (
        <span className="wrapper-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {handleCount() >= 2 && <div className="wrapper-badge-selector">{handleCount()}</div>}

      <span className="wrapper-icon-selector">
        <FontAwesomeIcon icon={faCaretDown as any} />
      </span>

      <Style.ContainerPoper status={active} ref={ref}>
        <Popover height={height}>
          <div>
            <Style.ValueSelector>
              <Checkbox checked={activeAll} onChange={() => handleSelectAll()} />
              <b>Selecionar Todos</b>
            </Style.ValueSelector>
            {value.length > 0 &&
              value.map((item: any) => (
                <Style.ValueSelector key={item.id}>
                  <Checkbox
                    disabled={item?.disabled}
                    checked={item.check}
                    onChange={(checked: boolean) => handleChangeActiveNew(checked, item)}
                  />
                  {item[keyValue]}
                </Style.ValueSelector>
              ))}
          </div>
        </Popover>
      </Style.ContainerPoper>
    </Style.ContainerInput>
  )
}
