import React, { useState, } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { ButtonRadius } from '../ButtonRadius'

import * as S from './styles'
export type TextAreaProps = {
  size?: 'small' | 'medium' | 'large'
  validate?: boolean
  name?: string
  value?: string
  onChange: (target: EventTarget & HTMLTextAreaElement) => void
  placeholder?: string
  icon?: string | React.ReactNode
  message?: string
  autoClear?: boolean
  id?: string
  props?: React.HTMLAttributes<HTMLTextAreaElement>
  onCleanup?: () => void
}

export const TextArea = ({
  size,
  validate,
  name,
  value,
  onChange,
  placeholder,
  icon,
  message,
  autoClear,
  id,
  props,
  onCleanup
}: TextAreaProps) => {
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
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target)}
          icon={icon}
          placeholder={viewLabel ? placeholder : name}
          validate={validate}
          onFocus={() => setState(true)}
          onBlur={() => !value && setState(false)}
        />
        {autoClear && onCleanup && !!value && value.length > 3 && (
          <S.CleanInput>
            <S.WrapperCleanInput>
              <ButtonRadius
                icon={faTimes as unknown as React.ReactNode}
                size="small"
                color="default"
                onClick={onCleanup}
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
