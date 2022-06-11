export interface ModalDrawerProps {
  open: boolean
  close?: () => void
  action?: () => void
  title: string
  side?: 'left' | 'right'
  icon?: any
  subTitle?: string
  notHeader?: boolean
  refScroll?: any
  children?: any
}
