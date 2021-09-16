import React from 'react'
import * as Style from './styles'
import { TextLinkProps } from '../../types/textTypes'

export const TextLink = (props: TextLinkProps) => {
  const { href, target, onClick, icon, children } = props
  return (
    <Style.Container {...props} href={href} target={target} onClick={onClick}>
      <span>{icon}</span>
      {children}
    </Style.Container>
  )
}
