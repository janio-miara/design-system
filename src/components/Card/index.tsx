import React from 'react'
import { ICard } from '../../types/cardTypes'
import * as Style from './styles'

export const Card = ({ ...props }: ICard) => {
  const { children } = props
  return <Style.Container {...props}>{children}</Style.Container>
}
