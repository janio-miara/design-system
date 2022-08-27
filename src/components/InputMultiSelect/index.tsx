import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineCaretDown } from 'react-icons/ai'
import * as Style from './styles'
import { InputPropsSelect } from '../../types/inputTypes'
import { Checkbox, Popover } from '..'
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
          return { ...el, checked: !!defaultValue.find((ell: any) => el.id === ell) }
        }),
      )
    }
  }, [])

  const handleChangeActiveNew = (check: any, item: any) => {
    if (activeAll) {
      setActiveAll(false)
    }
    const newValue = value?.map((el: any) => (el.id === item.id ? { ...el, checked: check } : { ...el }))
    const dados = newValue.filter((object: any) => object.checked)
    onChange(dados)
    setValue(newValue)
  }

  const handleCount = () => {
    return value.filter((objects: any) => objects.checked).map((el: any) => el[keyValue]).length
  }

  const handleSelectAll = () => {
    const newValue = value?.map((el: any) => (!el.disabled ? { ...el, checked: !activeAll } : el))
    setValue(newValue)
    const dados = newValue.filter((object: any) => object.checked)
    onChange(dados)
    setActiveAll(!activeAll)
  }

  const handleTratamentoValue = () => {
    return value
      .filter((object: any) => object.checked)
      .map((el: any) => el[keyValue])
      .join(', ')
  }

  const closeInput = () => {
    setActive(false)
  }

  useOnClickOutside(ref, closeInput)

  const handleClose = () => {
    if (active === true) {
      setActive(false)
    } else if (active === false) {
      setActive(true)
    }
  }

  console.log(value)

  return (
    <Style.ContainerInput ref={ref} status={active}>
      <Style.ContentInput onClick={handleClose}>
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
          <AiOutlineCaretDown />
        </span>
      </Style.ContentInput>

      <Style.ContainerPoper status={active}>
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
                    id={item.id}
                    disabled={item?.disabled}
                    checked={item.checked}
                    onChange={(check: boolean) => handleChangeActiveNew(check, item)}
                  />
                  <label htmlFor={item.id}>{item[keyValue]}</label>
                </Style.ValueSelector>
              ))}
          </div>
        </Popover>
      </Style.ContainerPoper>
    </Style.ContainerInput>
  )
}
