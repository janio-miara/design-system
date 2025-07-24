import React from 'react'
import { sizeText } from './sizeTypes'
import { colorTypes } from './colorTypes'

export interface TextPros {
  color?: colorTypes
  children?: React.ReactNode
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
  props?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  size?: sizeText
  transform?: 'uppercase' | 'lowercase' | 'capitalize'
  bold?: boolean
  lighter?: boolean
}

export interface TextLinkProps {
  transform?: 'capitalize' | 'uppercase' | 'lowercase'
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  size?: sizeText
  href?: string
  target?: '_self' | '_blank'
  icon?: string | React.ReactNode
  props?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
}
