import React from 'react'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IButton } from '../../Types/buttonTypes'

const ButtonWrapper: React.FC<IButton> = ({ disabled, icon, variant, color, size, ...props }) => {
  return (
    <S.ButtonRadius disabled={disabled} variant={variant} color={color} size={size} {...props}>
      <FontAwesomeIcon icon={icon} />
    </S.ButtonRadius>
  )
}

export { ButtonWrapper as ButtonRadius }
