import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import * as Style from './styles'
import { InputPropsSelect } from '../../types/inputTypes'
import { Badge, Checkbox, Popover } from '..'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export const InputMultiSelect = ({ ...props }: InputPropsSelect) => {
  const { icon, id, placeholder, label, keyValue, object } = props
  const [active, setActive] = useState(false)
  const [activeAll, setActiveAll] = useState(false)
  const [value, setValue] = useState(object)
  const ref = useRef()
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
    setValue(value?.map((el: any) => ({ ...el, check: !activeAll })))
    setActiveAll(!activeAll)
  }

  const handleTratamentoValue = () => {
    return value
      .filter((object: any) => object.check)
      .map((el: any) => el[keyValue])
      .join(', ')
  }

  useOnClickOutside(ref, () => setActive(false))

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
        onChange={() => console.log()}
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
        <Popover>
          <Style.ValueSelector onClick={() => handleSelectAll()}>
            <Checkbox checked={activeAll} />
            <b>Selecionar Todos</b>
          </Style.ValueSelector>
          {value.map((item: any) => (
            <Style.ValueSelector onClick={(event: any) => handleChangeActive(event, item)}>
              <Checkbox checked={item.check} />
              {item[keyValue]}
            </Style.ValueSelector>
          ))}
        </Popover>
      </Style.ContainerPoper>
    </Style.ContainerInput>
  )
}
