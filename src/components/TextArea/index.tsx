import React, { useState } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { ButtonRadius } from '../ButtonRadius'

import * as S from './styles'

export const TextArea = ({
  size,
  validate,
  name,
  type,
  value,
  onChange,
  placeholder,
  icon,
  message,
  autoClear,
  id,
  props,
}: any) => {
  const [viewLabel, setState] = useState<boolean>(false)
  return (
    <S.Container>
      <S.LabelContainer>
        <S.WrapperLabel>{viewLabel && name}</S.WrapperLabel>
      </S.LabelContainer>
      <S.ContainerInput>
        <S.WrapperTextArea
          size={size}
          autocomplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          {...props}
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={(e: any) => onChange(e.target)}
          icon={icon}
          placeholder={viewLabel ? placeholder : name}
          validate={validate}
          onFocus={() => setState(true)}
          onBlur={() => !value && setState(false)}
        />
        {autoClear && value.length > 3 && (
          <S.CleanInput>
            <S.WrapperCleanInput>
              <ButtonRadius
                icon={faTimes}
                size="small"
                color="default"
                onClick={() => onChange({ id, value: '' })}
                outlined
              />
            </S.WrapperCleanInput>
          </S.CleanInput>
        )}
      </S.ContainerInput>

      {!validate && <S.Message>{message}</S.Message>}
    </S.Container>
  )
}
