import React from 'react'
import { SmallBadge } from './styles'

interface Props {
  children: string | number
}

export const Badge = ({ children }: Props) => {
  return <SmallBadge>{children}</SmallBadge>
}
