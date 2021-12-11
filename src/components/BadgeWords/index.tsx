import React from 'react'
import * as Style from './styles'
import { BadgeWordProps } from '../../types/BaggeWordTypes'
import { colorTypes } from '../../types/colorTypes'

interface PropsSwitch {
  checked: boolean
  onChange: any
  color?: colorTypes
}

export const BadgeWords = (props: BadgeWordProps) => {
  const { text, onClose } = props
  return (
    <Style.Container {...props}>
      {text}
      {onClose && (
        <button type="button" onClick={() => onClose(text)}>
          x
        </button>
      )}
    </Style.Container>
  )
}
