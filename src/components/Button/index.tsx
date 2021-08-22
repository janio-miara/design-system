import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import * as Style from './styles'
import { ButtonProps } from '../../types/buttonTypes'

export const Button = (props: ButtonProps) => {
  const { loading, icon, children, disabled } = props
  return (
    <Style.ContainerButton disabled={disabled} {...props}>
      {loading && (
        <span className="spinner">
          <FaSpinner />
        </span>
      )}
      <span className="icon-button">{icon}</span>
      <span>{children}</span>
    </Style.ContainerButton>
  )
}
