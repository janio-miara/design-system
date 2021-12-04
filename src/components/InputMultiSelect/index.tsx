import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import * as Style from './styles'
import { InputPropsSelect } from '../../types/inputTypes'
import { Badge, Checkbox, Popover } from '..'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export const InputMultiSelect = ({ ...props }: InputPropsSelect) => {
  const { icon, id, placeholder, label, keyValue, object, height, onChange, defaultValue } = props
  const [active, setActive] = useState(false)
  const [activeAll, setActiveAll] = useState(false)
  const [value, setValue] = useState(object)
  const ref = useRef()

  useEffect(() => {
    if (defaultValue) {
      setValue(
        value.map((el: any) => {
          return { ...el, check: !!defaultValue.find((ell: any) => el.id === ell) }
        }),
      )
    }
  }, [])

  const handleChangeActive = (event: any, item: any) => {
    event.stopPropagation()
    if (activeAll) {
      setActiveAll(false)
    }
    setValue(value?.map((el: any) => (el.id === item.id ? { ...el, check: !item.check } : el)))
  }

  const handleCount = () => {
    return value.filter((object: any) => object.check).map((el: any) => el[keyValue]).length
  }

  const handleSelectAll = () => {
    setValue(value?.map((el: any) => (!el.disabled ? { ...el, check: !activeAll } : el)))
    setActiveAll(!activeAll)
  }

  const handleTratamentoValue = () => {
    return value
      .filter((object: any) => object.check)
      .map((el: any) => el[keyValue])
      .join(', ')
  }

  const closeInput = () => {
    const dados = value.filter((object: any) => object.check)
    onChange(dados)
    setActive(false)
  }

  useOnClickOutside(ref, closeInput)

  return (
    <Style.ContainerInput ref={ref} status={active} onClick={() => setActive(true)}>
      <span className="wrapper-label">{(active || value) && label}</span>
      <Style.WrapperInput
        {...props}
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
      {handleCount() >= 2 && (
        <div className="wrapper-badge-selector">
          <Badge>{handleCount()}</Badge>
        </div>
      )}

      <span className="wrapper-icon-selector">
        <FontAwesomeIcon icon={faCaretDown} />
      </span>

      <Style.ContainerPoper status={active} ref={ref}>
        <Popover height={height}>
          <Style.ValueSelector onClick={() => handleSelectAll()}>
            <Checkbox checked={activeAll} />
            <b>Selecionar Todos</b>
          </Style.ValueSelector>
          {value.map((item: any) => (
            <Style.ValueSelector onClick={(event: any) => !item?.disabled && handleChangeActive(event, item)}>
              <Checkbox disabled={item?.disabled} checked={item.check} />
              {item[keyValue]}
            </Style.ValueSelector>
          ))}
        </Popover>
      </Style.ContainerPoper>
    </Style.ContainerInput>
  )
}
