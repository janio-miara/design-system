import React from 'react'
import { FaSpinner } from 'react-icons/all'
import * as Style from './styles'
import { ButtonProps } from '../../types/buttonTypes'

export const Button = (props: ButtonProps) => {
  const { loading, icon, children } = props
  return (
    <Style.ContainerButton {...props}>
      {loading && (
        <span className="spinner">
          <FaSpinner />
        </span>
      )}
      {icon}
      <span>{children}</span>
    </Style.ContainerButton>
  )
}
