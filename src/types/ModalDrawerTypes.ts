import { ReactNode, RefObject } from "react"

export interface ModalDrawerProps {
  open: boolean
  close?: () => void
  action?: () => void
  title: string
  side?: 'left' | 'right'
  icon?: ReactNode
  subTitle?: string
  notHeader?: boolean
  refScroll?: RefObject<HTMLDivElement>
}
